<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({ resetKey: { type: String, default: '' } })

const active = ref(false)
const penOnly = ref(false)
const eraser = ref(false)
const wrap = ref(null)
const canvas = ref(null)
const palette = [
  { name: '墨', css: '--text' },
  { name: '朱', css: '--rose' },
  { name: '青', css: '--mint' },
  { name: '紫', css: '--sub-math' },
  { name: '金', css: '--amber' }
]
const color = ref('--text')
const width = ref(3)
const strokes = ref([])
const drawing = ref(false)
let ctx = null
let dpr = 1
let ro = null

function cssColor(name) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return v || '#333'
}

function resize() {
  if (!wrap.value || !canvas.value) return
  const w = wrap.value.clientWidth
  const h = wrap.value.scrollHeight
  if (!w || !h) return
  dpr = Math.min(window.devicePixelRatio || 1, 2.5)
  canvas.value.width = Math.round(w * dpr)
  canvas.value.height = Math.round(h * dpr)
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  ctx = canvas.value.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  redraw()
}

function redraw() {
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, canvas.value.width / dpr, canvas.value.height / dpr)
  for (const st of strokes.value) paintStroke(st)
}

function paintStroke(st) {
  if (!ctx || !st.points.length) return
  ctx.save()
  ctx.globalCompositeOperation = st.erase ? 'destination-out' : 'source-over'
  ctx.strokeStyle = st.erase ? 'rgba(0,0,0,1)' : cssColor(st.color)
  ctx.lineWidth = st.width
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  const p0 = st.points[0]
  ctx.moveTo(p0.x, p0.y)
  for (let i = 1; i < st.points.length; i++) {
    const p = st.points[i]
    ctx.lineTo(p.x, p.y)
  }
  ctx.stroke()
  ctx.restore()
}

function localPoint(e) {
  const r = canvas.value.getBoundingClientRect()
  return { x: e.clientX - r.left, y: e.clientY - r.top }
}

function down(e) {
  if (!active.value) return
  if (penOnly.value && e.pointerType !== 'pen') return
  e.preventDefault()
  drawing.value = true
  canvas.value.setPointerCapture?.(e.pointerId)
  const st = { color: color.value, width: width.value, erase: eraser.value, points: [localPoint(e)] }
  strokes.value.push(st)
  paintStroke(st)
}

function move(e) {
  if (!drawing.value) return
  const st = strokes.value[strokes.value.length - 1]
  if (!st) return
  const p = localPoint(e)
  const last = st.points[st.points.length - 1]
  if (Math.abs(p.x - last.x) + Math.abs(p.y - last.y) < 1.2) return
  st.points.push(p)
  if (!ctx) return
  ctx.save()
  ctx.globalCompositeOperation = st.erase ? 'destination-out' : 'source-over'
  ctx.strokeStyle = st.erase ? 'rgba(0,0,0,1)' : cssColor(st.color)
  ctx.lineWidth = st.width
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.moveTo(last.x, last.y)
  ctx.lineTo(p.x, p.y)
  ctx.stroke()
  ctx.restore()
}

function up(e) {
  drawing.value = false
  try { canvas.value?.releasePointerCapture?.(e.pointerId) } catch {}
}

function undo() {
  strokes.value.pop()
  redraw()
}

function clearAll() {
  strokes.value = []
  redraw()
}

async function toggle() {
  active.value = !active.value
  if (active.value) {
    await nextTick()
    resize()
    if (wrap.value) {
      ro = new ResizeObserver(() => resize())
      ro.observe(wrap.value)
    }
  } else {
    ro?.disconnect()
    ro = null
  }
}

watch(() => props.resetKey, () => {
  strokes.value = []
  drawing.value = false
  active.value = false
  ro?.disconnect()
  ro = null
})

function onResize() {
  if (active.value) resize()
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  ro?.disconnect()
  ro = null
  strokes.value = []
})
</script>

<template>
  <div class="ink-root">
    <div v-if="active" ref="wrap" class="ink-layer">
      <canvas
        ref="canvas"
        class="ink-canvas"
        @pointerdown="down" @pointermove="move" @pointerup="up" @pointercancel="up"
      />
    </div>

    <button v-if="!active" class="ink-fab" aria-label="打开草稿层" @click="toggle">
      <AppIcon name="pencil" :size="15" /> 草稿
    </button>

    <div v-else class="ink-bar">
      <span class="ink-tag"><i class="ink-dot" />草稿中</span>
      <div class="ink-colors">
        <button
          v-for="c in palette" :key="c.css"
          class="ink-color" :class="{ on: color === c.css && !eraser }"
          :style="{ background: `var(${c.css})` }"
          :aria-label="`${c.name}色`"
          @click="color = c.css; eraser = false"
        />
      </div>
      <button class="ink-btn" :class="{ on: eraser }" @click="eraser = !eraser">橡皮</button>
      <button class="ink-btn" :class="{ on: penOnly }" @click="penOnly = !penOnly">仅笔</button>
      <div class="ink-widths">
        <button v-for="w in [2, 4, 7]" :key="w" class="ink-width" :class="{ on: width === w }" @click="width = w">
          <i :style="{ width: w + 'px', height: w + 'px' }" />
        </button>
      </div>
      <button class="ink-btn" @click="undo">撤销</button>
      <button class="ink-btn" @click="clearAll">清空</button>
      <button class="ink-btn ink-close" @click="toggle">收起</button>
    </div>
  </div>
</template>

<style scoped>
.ink-root { position: absolute; inset: 0; pointer-events: none; z-index: 30; }
.ink-layer { position: absolute; inset: 0; pointer-events: none; }
.ink-canvas {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: auto; touch-action: none; cursor: crosshair;
  background: transparent;
}
.ink-fab {
  position: fixed; right: 22px; bottom: 90px; z-index: 60;
  display: inline-flex; align-items: center; gap: 6px;
  height: 40px; padding: 0 14px; border-radius: 999px;
  border: 1px solid var(--line-strong);
  background: color-mix(in srgb, var(--bg-1) 88%, transparent);
  backdrop-filter: blur(12px); color: var(--text-2);
  font-size: 12px; font-weight: 600; cursor: pointer;
  box-shadow: 0 8px 24px rgba(0,0,0,.12);
  pointer-events: auto;
}
.ink-fab:hover { color: var(--text); border-color: var(--mint); }
.ink-bar {
  position: fixed; left: 50%; bottom: 22px; transform: translateX(-50%); z-index: 70;
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap; max-width: min(94vw, 780px);
  padding: 8px 10px; border-radius: 12px;
  border: 1px solid var(--line-strong);
  background: color-mix(in srgb, var(--bg-1) 92%, transparent);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(0,0,0,.16);
  pointer-events: auto;
}
.ink-tag { display: inline-flex; align-items: center; gap: 5px; font-size: 10.5px; color: var(--text-3); font-family: var(--font-mono); }
.ink-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--mint); }
.ink-colors { display: flex; gap: 5px; }
.ink-color { width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--bg-1); outline: 1px solid var(--line); cursor: pointer; }
.ink-color.on { outline: 2px solid var(--mint); }
.ink-btn {
  height: 26px; padding: 0 8px; border-radius: 6px; font-size: 11px;
  border: 1px solid var(--line); background: var(--bg-2); color: var(--text-2); cursor: pointer;
}
.ink-btn.on { border-color: var(--mint); color: var(--mint); }
.ink-close { color: var(--text-3); }
.ink-widths { display: flex; gap: 3px; }
.ink-width { width: 24px; height: 24px; border: 1px solid var(--line); background: var(--bg-2); border-radius: 6px; display: grid; place-items: center; cursor: pointer; }
.ink-width.on { border-color: var(--mint); }
.ink-width i { display: block; border-radius: 50%; background: currentColor; color: var(--text-3); }
@media (max-width: 700px) {
  .ink-bar { bottom: 70px; gap: 5px; padding: 7px 8px; }
  .ink-tag { display: none; }
}
</style>
