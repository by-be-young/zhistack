<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { noteById, noteGroups, notes } from '../data/notes/index.js'
import AppIcon from '../components/AppIcon.vue'
import { prepareDocHtml, watchTheme } from '../core/reading.js'

const route = useRoute()
const router = useRouter()

const n = computed(() => noteById[route.params.nid])
const groupName = computed(() => noteGroups.find(g => g.id === n.value?.group)?.name || '')
const groupColor = computed(() => noteGroups.find(g => g.id === n.value?.group)?.color || 'var(--mint)')

// 数学（一）年份原卷页已迁移为可作答真题，旧链接统一回到真题列表
watch(
  () => route.params.nid,
  id => {
    if (/^study_methods-math-math1(?:-\d{4})?$/.test(id || '')) router.replace('/papers')
  },
  { immediate: true }
)

const html = ref('')
const rawHtml = ref('')
const toc = ref([])
const shift = ref(0)
const loading = ref(false)
const failed = ref(false)
const bodyRef = ref(null)
const activeId = ref('')

const cache = new Map()

function renderBody() {
  const out = prepareDocHtml(rawHtml.value)
  html.value = out.html
  shift.value = out.shift
}

async function load(id) {
  if (!id) return
  html.value = ''
  rawHtml.value = ''
  toc.value = []
  shift.value = 0
  failed.value = false
  if (cache.has(id)) {
    rawHtml.value = cache.get(id).raw
    toc.value = cache.get(id).toc
    renderBody()
    await nextTick()
    afterMount()
    return
  }
  loading.value = true
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}notes/pages/${id}.json.gz`)
    if (!res.ok) throw new Error(res.status)
    const enc = res.headers.get('content-encoding') || ''
    let raw
    if (enc.includes('gzip')) {
      raw = await res.text()            // 服务器已按 Content-Encoding 解压
    } else if (typeof DecompressionStream !== 'undefined') {
      raw = await new Response(res.body.pipeThrough(new DecompressionStream('gzip'))).text()
    } else {
      throw new Error('no gzip support')
    }
    const data = JSON.parse(raw)
    const body = data.html.replace(/\/notes\/assets\//g, `${import.meta.env.BASE_URL}notes/assets/`)
    cache.set(id, { raw: body, toc: data.toc || [] })
    rawHtml.value = body
    renderBody()
    toc.value = data.toc || []
    await nextTick()
    afterMount()
  } catch (e) {
    failed.value = true
  } finally {
    loading.value = false
  }
}

function afterMount() {
  bindTabs()
  if (route.query.f) scrollToId(String(route.query.f))
  else window.scrollTo({ top: 0 })
  updateActive()
}

function bindTabs() {
  const root = bodyRef.value
  if (!root) return
  root.querySelectorAll('.nav-link[data-bs-target]').forEach(btn => {
    if (btn.dataset.bound) return
    btn.dataset.bound = '1'
    btn.addEventListener('click', ev => {
      ev.preventDefault()
      const id = (btn.dataset.bsTarget || '').replace('#', '')
      const pane = id ? root.querySelector('#' + CSS.escape(id)) : null
      if (!pane) return
      const group = pane.parentElement
      group.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('show', 'active'))
      pane.classList.add('show', 'active')
      const bar = btn.closest('.nav-tabs, .nav')
      if (bar) bar.querySelectorAll('.nav-link').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false') })
      btn.classList.add('active')
      btn.setAttribute('aria-selected', 'true')
    })
  })
}

function scrollToId(id) {
  const el = bodyRef.value?.querySelector('#' + CSS.escape(id))
  if (el) el.scrollIntoView({ block: 'start' })
}

function onClick(e) {
  const a = e.target.closest('a')
  if (!a || !bodyRef.value?.contains(a)) return
  const href = a.getAttribute('href') || ''
  if (href.startsWith('#/notes/')) {
    e.preventDefault()
    const m = href.match(/^#\/notes\/([^?#]+)(?:\?f=([^&]+))?/)
    if (!m) return
    const query = m[2] ? { f: decodeURIComponent(m[2]) } : {}
    if (m[1] === route.params.nid) {
      if (m[2]) scrollToId(decodeURIComponent(m[2]))
    } else {
      router.push({ name: 'note', params: { nid: m[1] }, query })
    }
    return
  }
  if (href.startsWith('#') && href.length > 1) {
    e.preventDefault()
    scrollToId(decodeURIComponent(href.slice(1)))
  }
}

function tocLevel(t) {
  return Math.max(1, (t.level || 3) - shift.value)
}

function tocList() {
  return (toc.value || []).filter(t => {
    const lv = tocLevel(t)
    return lv >= 1 && lv <= 3 && t.id
  })
}

function tocIndent(t) {
  return { 1: 0, 2: 12, 3: 22 }[tocLevel(t)] || 0
}

function updateActive() {
  const root = bodyRef.value
  if (!root) return
  const hs = root.querySelectorAll('h1[id], h2[id], h3[id]')
  let cur = ''
  for (const h of hs) {
    if (h.getBoundingClientRect().top < 140) cur = h.id
    else break
  }
  activeId.value = cur
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { updateActive(); ticking = false })
}

const siblings = computed(() => notes.filter(x => x.group === n.value?.group))
const idx = computed(() => siblings.value.findIndex(x => x.id === n.value?.id))
const prev = computed(() => (idx.value > 0 ? siblings.value[idx.value - 1] : null))
const next = computed(() => (idx.value >= 0 && idx.value < siblings.value.length - 1 ? siblings.value[idx.value + 1] : null))

watch(() => route.params.nid, id => load(id))

let unwatchTheme = null
onMounted(() => {
  load(route.params.nid)
  window.addEventListener('scroll', onScroll, { passive: true })
  unwatchTheme = watchTheme(() => {
    if (rawHtml.value) renderBody()
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (unwatchTheme) unwatchTheme()
})
</script>

<template>
  <div class="page" v-if="n">
    <div class="row" style="margin-bottom: 14px; gap: 8px">
      <button class="btn btn-text btn-sm" @click="router.push('/notes')"><AppIcon name="arrow-left" :size="14" /> 资料库</button>
      <span class="tiny dim">/</span>
      <span class="tiny dim">{{ groupName }}<template v-if="n.section"> · {{ n.section }}</template></span>
    </div>

    <div class="note-layout">
      <div class="note-main">
        <section class="card card-pad">
          <div class="row" style="gap: 8px; margin-bottom: 10px">
            <span class="chip sub-chip" :style="{ '--sub': groupColor }"><span class="dot" />{{ groupName }}</span>
            <span v-if="n.priority === 'high'" class="chip rose">高频考点</span>
            <span v-else-if="n.priority === 'mid'" class="chip amber">中频考点</span>
            <span class="chip">约 {{ n.minutes }} 分钟</span>
            <span v-if="n.headings" class="chip">{{ n.headings }} 小节</span>
          </div>
          <h1 class="page-title" style="font-size: 30px">{{ n.title }}</h1>
          <div v-if="n.intro" class="note-intro">{{ n.intro }}</div>
        </section>

        <section class="card card-pad note-sheet">
          <div v-if="loading" class="dim" style="padding: 40px 0; text-align: center">正在载入正文…</div>
          <div v-else-if="failed" class="dim" style="padding: 40px 0; text-align: center">
            这篇还没有镜像到本地。<a :href="n.source" target="_blank" rel="noopener" style="color: var(--mint)">去原站阅读 →</a>
          </div>
          <div v-else class="note-body" ref="bodyRef" v-html="html" @click="onClick" />
        </section>

        <section class="card card-pad note-foot">
          <div class="spread" style="gap: 12px">
            <router-link v-if="prev" :to="`/notes/${prev.id}`" class="pn">
              <span class="tiny dim">上一篇</span>
              <span class="pn-title">{{ prev.title }}</span>
            </router-link>
            <span v-else />
            <router-link v-if="next" :to="`/notes/${next.id}`" class="pn right">
              <span class="tiny dim">下一篇</span>
              <span class="pn-title">{{ next.title }}</span>
            </router-link>
          </div>
          <div class="src-line tiny dim">
            内容来自 <a :href="n.source" target="_blank" rel="noopener">计算机考研杂货铺 · csgraduates.com</a>，原文版权归原作者所有，此处仅作个人学习归档，如有异议可移除。
          </div>
        </section>
      </div>

      <aside class="note-side">
        <div class="card card-pad toc">
          <div class="card-label">ON THIS PAGE</div>
          <div class="toc-list">
            <a
              v-for="t in tocList()" :key="t.id"
              class="toc-item" :class="{ active: activeId === t.id }"
              :style="{ paddingLeft: (14 + tocIndent(t)) + 'px' }"
              href="javascript:void(0)"
              @click="scrollToId(t.id)"
            >{{ t.text }}</a>
          </div>
          <div v-if="!tocList().length" class="tiny dim">本文没有小节标题。</div>
        </div>
      </aside>
    </div>
  </div>
  <div v-else class="page"><div class="card card-pad dim">没有这篇资料。</div></div>
</template>

<style scoped>
.note-layout { display: grid; grid-template-columns: minmax(0, 1fr) 240px; gap: 16px; align-items: start; }
.note-main { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.note-side { position: sticky; top: 72px; }
.note-sheet { padding: 26px 30px; }
.note-intro { margin-top: 12px; padding: 12px 14px; border-left: 3px solid var(--mint); background: color-mix(in srgb, var(--mint) 6%, transparent); border-radius: 0 8px 8px 0; font-family: var(--font-read); font-size: 14px; line-height: 1.85; color: var(--text-2); }
.toc { max-height: calc(100vh - 96px); overflow: auto; }
.toc-list { display: flex; flex-direction: column; gap: 1px; margin-top: 8px; }
.toc-item { font-size: 12px; line-height: 1.5; color: var(--text-2); padding: 5px 0; border-left: 2px solid transparent; }
.toc-item:hover { color: var(--text); }
.toc-item.active { color: var(--mint); border-left-color: var(--mint); background: color-mix(in srgb, var(--mint) 6%, transparent); }
.note-foot { display: flex; flex-direction: column; gap: 12px; }
.pn { display: flex; flex-direction: column; gap: 3px; max-width: 46%; color: var(--text-2); }
.pn.right { text-align: right; margin-left: auto; }
.pn-title { font-size: 13.5px; color: var(--text); }
.pn:hover .pn-title { color: var(--mint); }
.src-line { border-top: 1px dashed var(--line); padding-top: 10px; line-height: 1.7; }
.src-line a { color: var(--text-2); text-decoration: underline; }
@media (max-width: 980px) {
  .note-layout { grid-template-columns: minmax(0, 1fr); }
  .note-side { position: static; order: -1; }
  .toc { max-height: none; }
  .toc-list { flex-direction: row; flex-wrap: wrap; gap: 6px; }
  .toc-item { border: 1px solid var(--line); border-radius: 6px; padding: 4px 8px !important; }
  .note-sheet { padding: 20px 18px; }
}
@media (max-width: 640px) {
  .note-sheet { padding: 16px 14px; }
}
</style>
