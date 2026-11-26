<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { toast } from '../core/toast.js'

/**
 * 全屏草稿层（答题界面专用）
 *
 * 规则：
 * 1. 不设“草稿”入口按钮：手写笔（pointerType = 'pen'）碰到屏幕任意位置即进入草稿模式，默认黑色画笔。
 * 2. 整个视口都可书写；笔迹层 pointer-events: none，手指的点击 / 滚动 / 翻页完全不受影响。
 * 3. 草稿以“材料”为单位：同一材料下的多道小题共用一张画布；换材料切到空白画布；
 *    同一场答题内切回原材料，笔迹原样恢复；交卷 / 退出后组件销毁，不落盘、不随答卷上传。
 * 4. 笔迹坐标系锚定在滚动内容上（页面滚动、材料栏内部滚动都不跑位）。
 */

const props = defineProps({
  layerKey: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})

const palette = [
  { name: '墨', css: '--text' },
  { name: '朱', css: '--rose' },
  { name: '青', css: '--sky' },
  { name: '翠', css: '--mint' },
  { name: '金', css: '--amber' }
]

const canvas = ref(null)
const armed = ref(false)   // 笔已接触过屏幕，草稿模式常驻
const idle = ref(false)    // 久未书写，工具栏淡出
const eraser = ref(false)
const color = ref('--text')
const width = ref(3)
const count = ref(0)

// 每个 layerKey 一张画布；只在内存里，组件销毁即消失（＝交卷销毁、不存档）
const store = new Map()
let layer = []

let ctx = null
let dpr = 1
let drawing = false
let pointerId = null
let current = null
let lastPos = null
let idleTimer = 0
let raf = 0
let colorMemo = new Map()
let guard = { x: 0, y: 0, t: 0 }
let themeObserver = null
let domObserver = null

/* ---------------- 画布与坐标 ---------------- */

function fitCanvas() {
  const el = canvas.value
  if (!el) return
  const w = window.innerWidth
  const h = window.innerHeight
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  el.width = Math.round(w * dpr)
  el.height = Math.round(h * dpr)
  el.style.width = w + 'px'
  el.style.height = h + 'px'
  ctx = el.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  redraw()
}

function cssColor(name) {
  if (colorMemo.has(name)) return colorMemo.get(name)
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const out = v || '#E8EDE9'
  colorMemo.set(name, out)
  return out
}

// 找到笔尖下方最近的滚动容器：材料栏内部滚动、其他可滚动面板都要跟着字走
function scrollHostOf(target) {
  let node = target instanceof Element ? target : null
  while (node && node !== document.body && node !== document.documentElement) {
    const tag = node.dataset && node.dataset.inkScroll
    if (tag) return node
    const style = getComputedStyle(node)
    if (/(auto|scroll|overlay)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 2) {
      return node
    }
    node = node.parentElement
  }
  return null
}

function pathOf(el) {
  const seg = []
  let node = el
  while (node && node.nodeType === 1 && node !== document.body) {
    let i = 1
    let sib = node.previousElementSibling
    while (sib) {
      if (sib.tagName === node.tagName) i++
      sib = sib.previousElementSibling
    }
    seg.unshift(`${node.tagName.toLowerCase()}${node.id ? '#' + node.id : ''}:nth-of-type(${i})`)
    node = node.parentElement
  }
  return seg.length ? seg.join(' > ') : 'body'
}

// 优先锚定在带 data-ink-anchor 的内容块上（材料分块），字走笔迹走
function anchorOf(target) {
  let node = target instanceof Element ? target : null
  while (node && node !== document.body && node !== document.documentElement) {
    const tag = node.dataset && node.dataset.inkAnchor
    if (tag) return { el: node, sel: `[data-ink-anchor="${tag}"]` }
    node = node.parentElement
  }
  return null
}

function frameOf(target) {
  const anchor = anchorOf(target)
  if (anchor) return anchor
  const host = scrollHostOf(target)
  if (!host) return { el: null, sel: '' }
  const tag = host.dataset && host.dataset.inkScroll
  return { el: host, sel: tag ? `[data-ink-scroll="${tag}"]` : pathOf(host) }
}

// 组件重建（材料栏收起 / 展开）后，按选择器把锚点找回
function hostOf(frame) {
  if (!frame) return null
  if (frame.el && frame.el.isConnected) return frame.el
  frame.el = frame.sel ? document.querySelector(frame.sel) : null
  return frame.el
}

/**
 * 内容坐标 ↔ 屏幕坐标的换算量：
 * screen = content + offset，其中 offset = 容器位置 - 容器滚动量
 */
function frameOffset(frame) {
  const host = hostOf(frame)
  if (host) {
    const r = host.getBoundingClientRect()
    return { ox: r.left - host.scrollLeft, oy: r.top - host.scrollTop }
  }
  return { ox: -(window.scrollX || 0), oy: -(window.scrollY || 0) }
}

function pointOf(e, frame) {
  const o = frameOffset(frame)
  return { x: e.clientX - o.ox, y: e.clientY - o.oy, p: pressureOf(e) }
}

function pressureOf(e) {
  const p = e.pressure
  return p && p > 0 ? Math.min(1, Math.max(0.12, p)) : 0.5
}

/* ---------------- 绘制 ---------------- */

function lineWidthOf(st, p) {
  const base = st.erase ? st.width * 5 : st.width
  return Math.max(1, base * (0.55 + 0.9 * p))
}

function applyBrush(st) {
  ctx.globalCompositeOperation = st.erase ? 'destination-out' : 'source-over'
  const c = st.erase ? '#000' : cssColor(st.color)
  ctx.strokeStyle = c
  ctx.fillStyle = c
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
}

function dotRadius(st, p) {
  return Math.max(0.6, lineWidthOf(st, p) / 2)
}

// 实时绘制：直接用屏幕坐标，避免每帧换算
function drawDot(st, x, y, p) {
  if (!ctx) return
  ctx.save()
  applyBrush(st)
  ctx.beginPath()
  ctx.arc(x, y, dotRadius(st, p), 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function drawSeg(st, x1, y1, x2, y2, p) {
  if (!ctx) return
  ctx.save()
  applyBrush(st)
  ctx.lineWidth = lineWidthOf(st, p)
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}

// 整层重绘：滚动、切材料、撤销、换主题都走这里
function redraw() {
  const el = canvas.value
  if (!ctx || !el) return
  ctx.clearRect(0, 0, el.width / dpr, el.height / dpr)
  colorMemo = new Map()
  const vw = window.innerWidth
  const vh = window.innerHeight
  for (const st of layer) {
    const host = hostOf(st.frame)
    // 锚点所在面板已卸载（材料栏收起）或标签页被隐藏时，先不画，等它回来再画
    if (st.frame.sel && !host) continue
    if (host && host.getClientRects().length === 0) continue
    const o = frameOffset(st.frame)
    // 视口外的笔迹直接跳过，长卷也只重绘看得见的部分
    if (st.box) {
      if (st.box.x2 + o.ox < -12 || st.box.x1 + o.ox > vw + 12) continue
      if (st.box.y2 + o.oy < -12 || st.box.y1 + o.oy > vh + 12) continue
    }
    paintStroke(st, o)
  }
}

function paintStroke(st, o) {
  const pts = st.points
  if (!pts.length) return
  ctx.save()
  applyBrush(st)
  const p0 = pts[0]
  ctx.beginPath()
  ctx.arc(p0.x + o.ox, p0.y + o.oy, dotRadius(st, p0.p), 0, Math.PI * 2)
  ctx.fill()
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1]
    const p = pts[i]
    ctx.beginPath()
    ctx.lineWidth = lineWidthOf(st, (prev.p + p.p) / 2)
    ctx.moveTo(prev.x + o.ox, prev.y + o.oy)
    ctx.lineTo(p.x + o.ox, p.y + o.oy)
    ctx.stroke()
  }
  ctx.restore()
}

function bboxOf(st) {
  let x1 = Infinity
  let y1 = Infinity
  let x2 = -Infinity
  let y2 = -Infinity
  for (const p of st.points) {
    if (p.x < x1) x1 = p.x
    if (p.x > x2) x2 = p.x
    if (p.y < y1) y1 = p.y
    if (p.y > y2) y2 = p.y
  }
  const pad = lineWidthOf(st, 1) * 2 + 6
  return { x1: x1 - pad, y1: y1 - pad, x2: x2 + pad, y2: y2 + pad }
}

function scheduleRedraw() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    redraw()
  })
}

// 布局变化（收起材料、切材料分块）后补一次重绘，避开过渡动画中途的中间态
let lateTimer = 0
function bumpRedraw() {
  scheduleRedraw()
  clearTimeout(lateTimer)
  lateTimer = setTimeout(() => redraw(), 90)
}

/* ---------------- 输入 ---------------- */

function arm() {
  if (!armed.value) {
    armed.value = true
    toast('草稿已随笔开启：笔尖书写，手指照常点选', 'info', 3200)
  }
  idle.value = false
  clearTimeout(idleTimer)
}

function restIdle() {
  clearTimeout(idleTimer)
  idleTimer = setTimeout(() => { idle.value = true }, 9000)
}

/* ---------- 笔在屏上时锁住原生滚动手势 ----------
 * Windows 的 Direct Manipulation Stylus 会把笔按触摸手势处理：笔尖拖动会滚屏。
 * pointerdown 的 preventDefault 在 Windows Chrome 上拦不住它，必须在手势开始前
 * 把 touch-action 置为 none。笔悬停（buttons=0）时就提前上锁，落笔那一刻已经生效。
 */
let penLockOn = false
let penLockTimer = 0
let penLockAt = 0
const PEN_LOCK_FALLBACK = 12000

function penLockSet(on) {
  if (penLockOn === on) return
  penLockOn = on
  document.body.classList.toggle('ink-pen-lock', on)
}

function keepPenLock() {
  penLockSet(true)
  const now = Date.now()
  if (penLockTimer && now - penLockAt < 400) return
  penLockAt = now
  clearTimeout(penLockTimer)
  penLockTimer = setTimeout(() => {
    if (!drawing) penLockSet(false)
  }, PEN_LOCK_FALLBACK)
}

// 笔离开感应范围（悬停指针 out 且没有进入其他元素）才解锁，保证悬停期间不上滚
function onPenOut(e) {
  if (e.pointerType !== 'pen' || e.relatedTarget || drawing) return
  clearTimeout(penLockTimer)
  penLockTimer = setTimeout(() => { if (!drawing) penLockSet(false) }, 260)
}

// 笔被系统当成触摸时还会走 touch 通道，绘制期间直接吞掉 touchmove，双保险
function onTouchGuard(e) {
  if (!drawing && !penLockOn) return
  e.preventDefault()
}

function onDown(e) {
  if (props.disabled) return
  // 只认手写笔：手指、鼠标、手掌一律不画，保证按钮照常可点
  if (e.pointerType !== 'pen') return
  // 落笔即上锁：preventDefault 在 Windows 拦不住笔的原生滚屏，touch-action 才行
  keepPenLock()
  e.preventDefault()
  e.stopPropagation()
  if (e.button !== 0 && e.button !== -1) return
  arm()

  const frame = frameOf(e.target)
  const pt = pointOf(e, frame)
  const st = {
    frame,
    color: color.value,
    width: width.value,
    erase: eraser.value,
    points: [pt],
    box: null
  }
  layer.push(st)
  count.value = layer.length

  current = st
  pointerId = e.pointerId
  drawing = true
  lastPos = { x: e.clientX, y: e.clientY }
  drawDot(st, e.clientX, e.clientY, pt.p)
}

function onMove(e) {
  // 笔悬停阶段（未落笔）就维持手势锁，给落笔留下生效时间
  if (e.pointerType === 'pen' && !drawing && e.buttons === 0) {
    keepPenLock()
    return
  }
  if (!drawing || e.pointerId !== pointerId) return
  if (e.pointerType !== 'pen') return
  if (!current) return
  e.preventDefault()

  const o = frameOffset(current.frame)
  const batch = typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents() : []
  const events = batch.length ? batch : [e]

  for (const ev of events) {
    const p = { x: ev.clientX - o.ox, y: ev.clientY - o.oy, p: pressureOf(ev) }
    const last = current.points[current.points.length - 1]
    if (Math.abs(p.x - last.x) + Math.abs(p.y - last.y) < 1) continue
    current.points.push(p)
    drawSeg(current, lastPos.x, lastPos.y, ev.clientX, ev.clientY, (last.p + p.p) / 2)
    lastPos = { x: ev.clientX, y: ev.clientY }
  }
}

function onUp(e) {
  if (!drawing || e.pointerId !== pointerId) return
  drawing = false
  pointerId = null
  lastPos = null
  if (current) {
    current.box = bboxOf(current)
    current = null
  }
  guard = { x: e.clientX, y: e.clientY, t: Date.now() }
  restIdle()
  keepPenLock()
}

// 笔尖在窗口外抬起等异常中断：结束当前笔画，避免下笔接在上一条后面
function abortStroke() {
  if (!drawing) return
  drawing = false
  pointerId = null
  lastPos = null
  if (current) {
    current.box = bboxOf(current)
    current = null
  }
  restIdle()
}

// 笔尖不触发任何点击：按钮只给手指用；弹窗打开（禁用草稿）时笔恢复成普通指针
function onClick(e) {
  if (props.disabled) return
  if (typeof PointerEvent !== 'undefined' && e instanceof PointerEvent && e.pointerType === 'pen') {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  if (guard.t && Date.now() - guard.t < 320) {
    const dx = Math.abs((e.clientX || 0) - guard.x)
    const dy = Math.abs((e.clientY || 0) - guard.y)
    if (dx < 6 && dy < 6) {
      e.preventDefault()
      e.stopPropagation()
    }
  }
}

/* ---------------- 工具 ---------------- */

function useColor(css) {
  color.value = css
  eraser.value = false
}

function useWidth(w) {
  width.value = w
}

function undo() {
  if (!layer.length) return
  layer.pop()
  count.value = layer.length
  redraw()
}

function clearAll() {
  if (!layer.length) return
  layer.length = 0
  count.value = 0
  redraw()
}

/* ---------------- 图层切换 ---------------- */

function layerOf(key) {
  const k = key || '_'
  let arr = store.get(k)
  if (!arr) {
    arr = []
    store.set(k, arr)
  }
  return arr
}

watch(
  () => props.layerKey,
  key => {
    layer = layerOf(key)
    count.value = layer.length
    drawing = false
    current = null
    lastPos = null
    redraw()
  },
  { immediate: true }
)

/* ---------------- 生命周期 ---------------- */

function onScroll() {
  scheduleRedraw()
}

function onResize() {
  fitCanvas()
}

onMounted(() => {
  fitCanvas()
  window.addEventListener('pointerdown', onDown, { capture: true, passive: false })
  window.addEventListener('pointermove', onMove, { capture: true, passive: false })
  window.addEventListener('pointerup', onUp, true)
  window.addEventListener('pointercancel', onUp, true)
  window.addEventListener('pointerout', onPenOut, true)
  window.addEventListener('touchmove', onTouchGuard, { capture: true, passive: false })
  window.addEventListener('blur', abortStroke)
  window.addEventListener('click', onClick, true)
  window.addEventListener('scroll', onScroll, { capture: true, passive: true })
  window.addEventListener('resize', onResize)

  // 主题切换后笔迹颜色要跟着变
  if (typeof MutationObserver !== 'undefined') {
    themeObserver = new MutationObserver(() => bumpRedraw())
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    // 材料栏收起 / 展开、材料分块切页、题干重排都会让锚点位移，重绘一次对位
    domObserver = new MutationObserver(() => bumpRedraw())
    const scope = document.querySelector('.s-main') || document.body
    domObserver.observe(scope, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', onDown, true)
  window.removeEventListener('pointermove', onMove, true)
  window.removeEventListener('pointerup', onUp, true)
  window.removeEventListener('pointercancel', onUp, true)
  window.removeEventListener('pointerout', onPenOut, true)
  window.removeEventListener('touchmove', onTouchGuard, true)
  window.removeEventListener('blur', abortStroke)
  window.removeEventListener('click', onClick, true)
  window.removeEventListener('scroll', onScroll, true)
  window.removeEventListener('resize', onResize)
  clearTimeout(idleTimer)
  clearTimeout(lateTimer)
  clearTimeout(penLockTimer)
  penLockSet(false)
  if (raf) cancelAnimationFrame(raf)
  themeObserver?.disconnect()
  themeObserver = null
  domObserver?.disconnect()
  domObserver = null
  // 交卷 / 退出：草稿随组件一起销毁，不落盘
  store.clear()
  layer = []
  current = null
  drawing = false
  ctx = null
})
</script>

<template>
  <div class="ink-root">
    <canvas ref="canvas" class="ink-canvas" aria-hidden="true" />

    <div v-if="armed" class="ink-bar" :class="{ idle }" role="toolbar" aria-label="草稿工具">
      <span class="ink-tag"><i class="ink-dot" />草稿</span>
      <div class="ink-swatches">
        <button
          v-for="c in palette" :key="c.css"
          class="ink-swatch" :class="{ on: color === c.css && !eraser }"
          :style="{ background: `var(${c.css})` }"
          :aria-label="`${c.name}色`" :title="`${c.name}色`"
          @click="useColor(c.css)"
        />
      </div>
      <span class="ink-sep" />
      <div class="ink-widths">
        <button
          v-for="w in [2, 3.5, 6]" :key="w"
          class="ink-width" :class="{ on: width === w }"
          :aria-label="`笔宽 ${w}`" @click="useWidth(w)"
        ><i :style="{ width: Math.max(4, w * 2) + 'px', height: Math.max(4, w * 2) + 'px' }" /></button>
      </div>
      <span class="ink-sep" />
      <button class="ink-btn" :class="{ on: eraser }" @click="eraser = !eraser">橡皮</button>
      <button class="ink-btn" :disabled="!count" @click="undo">撤销</button>
      <button class="ink-btn" :disabled="!count" @click="clearAll">清空</button>
      <span class="ink-tip">手指照常点选</span>
    </div>
  </div>
</template>

<style scoped>
.ink-root {
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
}
.ink-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.ink-bar {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  z-index: 44;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  max-width: min(94vw, 760px);
  padding: 7px 10px;
  border-radius: 12px;
  border: 1px solid var(--line-strong);
  background: color-mix(in srgb, var(--bg-1) 92%, transparent);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  pointer-events: auto;
  font-size: 11px;
  color: var(--text-2);
  transition: opacity 0.28s var(--ease);
}
.ink-bar.idle { opacity: 0.16; }
body:not(.ink-pen-lock) .ink-bar.idle:hover { opacity: 0.9; }

.ink-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--text-3);
}
.ink-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--mint);
}

.ink-swatches { display: flex; gap: 5px; }
.ink-swatch {
  width: 18px;
  height: 18px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid var(--bg-1);
  outline: 1px solid var(--line);
  cursor: pointer;
}
.ink-swatch.on { outline: 2px solid var(--mint); }

.ink-sep { width: 1px; height: 16px; background: var(--line); }

.ink-widths { display: flex; gap: 3px; }
.ink-width {
  width: 24px;
  height: 24px;
  padding: 0;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--bg-2);
  cursor: pointer;
}
.ink-width.on { border-color: var(--mint); }
.ink-width i {
  display: block;
  border-radius: 50%;
  background: currentColor;
  color: var(--text-2);
}

.ink-btn {
  height: 26px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: var(--bg-2);
  color: var(--text-2);
  font-size: 11px;
  cursor: pointer;
}
.ink-btn.on { border-color: var(--mint); color: var(--mint); }
.ink-btn:disabled { opacity: 0.35; cursor: default; }

.ink-tip {
  font-size: 10px;
  color: var(--text-3);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .ink-bar {
    bottom: calc(64px + env(safe-area-inset-bottom));
    gap: 6px;
    padding: 6px 8px;
    max-width: 94vw;
  }
  .ink-tag, .ink-tip { display: none; }
  .ink-sep { display: none; }
}
</style>
