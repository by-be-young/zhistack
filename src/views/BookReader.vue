<script setup>
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import { bookMap, subjectMap } from '../data/index.js'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'
import { prepareDocHtml, watchTheme } from '../core/reading.js'

const md = new MarkdownIt({ html: true, linkify: false, typographer: false })
// 行内只允许 <sup>/<sub>/<b>/<i> 这类排版标签，其余原始 HTML 直接转义
const ALLOWED_INLINE = /^(sup|sub|b|i|em|strong|br|code)$/i
const defaultHtmlInline = md.renderer.rules.html_inline || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
md.renderer.rules.html_inline = (tokens, idx, options, env, self) => {
  const tag = /^<\s*(\/?)\s*([a-z0-9]+)/i.exec(tokens[idx].content)
  if (tag && ALLOWED_INLINE.test(tag[2])) return defaultHtmlInline(tokens, idx, options, env, self)
  return md.utils.escapeHtml(tokens[idx].content)
}
const defaultHtmlBlock = md.renderer.rules.html_block || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
  return md.utils.escapeHtml(tokens[idx].content)
}

const route = useRoute()
const router = useRouter()

const book = computed(() => bookMap[route.params.bookId])
const base = computed(() => book.value?.text?.base || '')
const toc = ref(null)
const current = ref(null)
const bodyHtml = ref('')
const loading = ref(false)
const failed = ref(false)
const bodyRef = ref(null)
const cache = new Map()
const zoom = ref(16)

const sections = computed(() => {
  if (!toc.value) return []
  return toc.value.chapters.flatMap(c => c.sections.map(s => ({ ...s, chapterId: c.id, chapterTitle: c.title })))
})
const index = computed(() => sections.value.findIndex(s => s.id === current.value?.id))
const prev = computed(() => (index.value > 0 ? sections.value[index.value - 1] : null))
const next = computed(() => (index.value >= 0 && index.value < sections.value.length - 1 ? sections.value[index.value + 1] : null))
const percent = computed(() => (sections.value.length && index.value >= 0
  ? Math.round(((index.value + 1) / sections.value.length) * 100) : 0))

async function readGzip(res) {
  const enc = res.headers.get('content-encoding') || ''
  if (enc.includes('gzip')) return res.text()
  if (typeof DecompressionStream !== 'undefined') {
    return new Response(res.body.pipeThrough(new DecompressionStream('gzip'))).text()
  }
  throw new Error('当前浏览器不支持 gzip 解压')
}

function showSection(data) {
  current.value = data
  const text = data?.md != null ? md.render(data.md) : (data?.html || '')
  bodyHtml.value = prepareDocHtml(text).html
  if (data?.md != null) nextTick(decorateHeadings)
}

/** Markdown 的标题没有 id，按顺序挂上目录里的锚点，供「本节目录」跳转。 */
function decorateHeadings() {
  const root = bodyRef.value
  if (!root || !current.value?.subs?.length) return
  const subs = current.value.subs
  let k = 0
  root.querySelectorAll('h2').forEach(h => {
    if (k < subs.length && normHeading(h.textContent) === normHeading(subs[k].title)) {
      h.id = subs[k].id
      k += 1
    }
  })
}

function normHeading(text) {
  return (text || '').replace(/[\s·．.、　]+/g, '')
}

async function load(id) {
  if (!id || !base.value) return
  if (cache.has(id)) {
    showSection(cache.get(id))
    await nextTick()
    window.scrollTo({ top: 0 })
    return
  }
  loading.value = true
  failed.value = false
  try {
    let data
    if (book.value?.text?.md) {
      const res = await fetch(`${import.meta.env.BASE_URL}${base.value}/md/${id}.md`)
      if (!res.ok) throw new Error('HTTP ' + res.status)
      data = { ...(sections.value.find(s => s.id === id) || { id }), md: await res.text() }
    } else {
      const res = await fetch(`${import.meta.env.BASE_URL}${base.value}/${id}.json.gz`)
      if (!res.ok) throw new Error('HTTP ' + res.status)
      data = JSON.parse(await readGzip(res))
    }
    cache.set(id, data)
    showSection(data)
    await nextTick()
    window.scrollTo({ top: 0 })
  } catch (e) {
    failed.value = true
  } finally {
    loading.value = false
  }
}

function open(sec) {
  if (!sec || sec.id === current.value?.id) return
  router.push({ name: 'book-read', params: { bookId: route.params.bookId, sectionId: sec.id } })
}

function anchor(id) {
  const el = bodyRef.value?.querySelector('#' + CSS.escape(id))
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let unwatchTheme = null

onMounted(async () => {
  if (!book.value?.text) return
  unwatchTheme = watchTheme(() => {
    if (current.value) showSection(current.value)
  })
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}${base.value}/toc.json`)
    if (!res.ok) throw new Error('HTTP ' + res.status)
    toc.value = await res.json()
    const wanted = route.params.sectionId || sections.value[0]?.id
    await load(wanted)
  } catch (e) {
    failed.value = true
  }
})

watch(() => route.params.sectionId, id => { if (id) load(id) })

onBeforeUnmount(() => {
  if (unwatchTheme) unwatchTheme()
})
</script>

<template>
  <div class="page" v-if="book && book.text">
    <div class="row" style="margin-bottom: 14px; gap: 6px">
      <button class="btn btn-text btn-sm" @click="router.push('/library')"><AppIcon name="arrow-left" :size="14" /> 书库</button>
      <span class="tiny dim">/</span>
      <button class="btn btn-text btn-sm" @click="router.push(`/library/${book.id}`)">{{ book.title }}</button>
    </div>

    <div class="page-head reader-head">
      <div>
        <div class="eyebrow">{{ subjectMap[book.subject]?.name }} · 全文阅读</div>
        <h1 class="page-title">{{ book.title }}</h1>
        <div class="head-stats">
          <span v-if="current">第 {{ index + 1 }} / {{ sections.length }} 节</span>
          <span v-if="current">原书 p.{{ current.page }}–{{ current.endPage }}</span>
          <span v-if="current"><b>{{ (current.chars || 0).toLocaleString() }}</b> 字</span>
          <span class="chip">{{ percent }}%</span>
        </div>
      </div>
      <div style="flex: 1" />
      <div class="row" style="gap: 6px">
        <button class="icon-btn" aria-label="缩小字号" @click="zoom = Math.max(14, zoom - 1)">−</button>
        <span class="tiny dim mono" style="width: 42px; text-align: center">{{ zoom }}px</span>
        <button class="icon-btn" aria-label="放大字号" @click="zoom = Math.min(22, zoom + 1)">+</button>
      </div>
    </div>

    <div class="grid reader-grid">
      <aside class="card card-pad reader-toc">
        <div class="card-label" style="margin-bottom: 8px">CONTENTS</div>
        <div v-for="ch in toc?.chapters || []" :key="ch.id" class="toc-chapter">
          <div class="toc-ch-title">{{ ch.title }}</div>
          <button
            v-for="sec in ch.sections" :key="sec.id"
            class="toc-sec" :class="{ active: sec.id === current?.id }"
            @click="open(sec)"
          >
            <span class="toc-sec-no">{{ sec.no }}</span>
            <span class="toc-sec-title">{{ sec.title.replace(sec.no, '').trim() }}</span>
            <span class="toc-sec-pg mono">{{ sec.page }}</span>
          </button>
        </div>
      </aside>

      <section class="card card-pad reader-main">
        <div v-if="loading" class="tiny dim" style="padding: 40px 0; text-align: center">正在载入正文…</div>
        <EmptyState v-else-if="failed" icon="book" title="正文载入失败" text="请稍后重试，或回到书目页。" />
        <template v-else-if="current">
          <div class="reader-meta">
            <span class="mono">{{ current.no }}</span>
            <span class="dim">p.{{ current.page }}–{{ current.endPage }}</span>
            <span class="dim">OCR 录入 · 个别字符可能有误</span>
          </div>
          <div
            ref="bodyRef"
            class="note-body reader-body"
            :style="{ fontSize: zoom + 'px' }"
            v-html="bodyHtml"
          />
          <div class="reader-pager">
            <button class="btn btn-ghost btn-sm" :disabled="!prev" @click="open(prev)">
              <AppIcon name="arrow-left" :size="14" /> {{ prev ? prev.no : '已是第一节' }}
            </button>
            <button class="btn btn-ghost btn-sm" :disabled="!next" @click="open(next)">
              {{ next ? next.no : '已是最后一节' }} <AppIcon name="arrow-right" :size="14" />
            </button>
          </div>
          <div v-if="current.subs?.length" class="reader-subs">
            <div class="card-label">本节目录</div>
            <button v-for="s in current.subs" :key="s.id" class="sub-link" @click="anchor(s.id)">
              {{ s.title }} <span class="mono dim">p.{{ s.page }}</span>
            </button>
          </div>
        </template>
      </section>
    </div>
  </div>
  <div v-else class="page">
    <EmptyState title="该书没有全文数据" text="返回书库，或改用 PDF 挂载方式。" />
  </div>
</template>

<style scoped>
.reader-head { margin-bottom: 14px; }
.reader-grid { grid-template-columns: 262px minmax(0, 1fr); gap: 16px; align-items: start; }
.reader-toc { position: sticky; top: 18px; max-height: calc(100vh - 40px); overflow: auto; }
.toc-chapter { margin-bottom: 14px; }
.toc-ch-title { font-size: 12.5px; font-weight: 600; color: var(--text); padding: 4px 2px 6px; border-bottom: 1px dashed var(--line); margin-bottom: 4px; }
.toc-sec {
  display: grid; grid-template-columns: 44px minmax(0, 1fr) 26px; align-items: baseline; gap: 6px;
  width: 100%; padding: 6px 4px; border: 0; border-radius: 6px; background: transparent;
  text-align: left; color: var(--text-2); cursor: pointer; font-size: 12.5px; line-height: 1.5;
}
body:not(.ink-pen-lock) .toc-sec:hover { background: var(--bg-2); color: var(--text); }
.toc-sec.active { background: color-mix(in srgb, var(--mint) 12%, transparent); color: var(--text); }
.toc-sec.active .toc-sec-no { color: var(--mint); }
.toc-sec-no { font-family: var(--font-mono); font-size: 11px; color: var(--text-3); }
.toc-sec-title { min-width: 0; }
.toc-sec-pg { font-size: 10.5px; color: var(--text-3); text-align: right; }
.reader-main { min-height: 60vh; }
.reader-meta { display: flex; gap: 12px; align-items: center; font-size: 12px; color: var(--text-3); padding-bottom: 12px; border-bottom: 1px dashed var(--line); margin-bottom: 18px; }
/* Markdown 正文：h1 节、h2 小节、h3 节内小标题 */
.reader-body :deep(h1) {
  font-size: 1.34em; line-height: 1.5; margin: 4px 0 18px; padding: 0 0 0 10px;
  font-weight: 700; background: none; border: 0; border-left: 3px solid var(--mint); border-radius: 0;
}
.reader-body :deep(h2) {
  font-size: 1.06em; line-height: 1.6; margin: 26px 0 8px; padding: 0;
  font-weight: 650; color: var(--text);
}
.reader-body :deep(h3) { font-size: 1em; font-weight: 600; line-height: 1.6; margin: 20px 0 6px; color: var(--text); }
.reader-body :deep(blockquote) {
  margin: 12px 0; padding: 7px 12px; border-left: 3px solid var(--amber, #e8b45a);
  background: var(--bg-2); border-radius: 0 6px 6px 0; font-size: 0.95em; color: var(--text);
}
.reader-body :deep(blockquote p) { margin: 3px 0; }
.reader-body :deep(blockquote strong) { color: var(--amber, #e8b45a); font-weight: 600; }
.reader-body :deep(hr) { border: 0; border-top: 1px dashed var(--line); margin: 22px 0; }
.reader-body :deep(a) { color: var(--mint); }
.reader-body :deep(table) {
  border-collapse: collapse; width: 100%; margin: 12px 0 16px; font-size: 0.92em;
}
.reader-body :deep(table th),
.reader-body :deep(table td) { border: 1px solid var(--line); padding: 5px 9px; line-height: 1.7; text-align: left; vertical-align: top; }
.reader-body :deep(table th) { background: var(--bg-2); font-weight: 600; }
.reader-body :deep(h4) {
  font-size: 1em; line-height: 1.6; margin: 22px 0 8px; padding: 0;
  background: none; border: 0; border-radius: 0; color: var(--text);
}
.reader-body :deep(p) { font-size: 1em; line-height: 1.95; margin: 7px 0; text-align: justify; }
.reader-body :deep(.tip) { background: var(--bg-2); border-left: 3px solid var(--amber, #e8b45a); padding: 6px 10px; border-radius: 6px; font-size: 0.94em; margin: 10px 0; }
.reader-body :deep(.tip b) { color: var(--amber, #e8b45a); font-weight: 600; margin-right: 2px; }
.reader-body :deep(h5) { font-size: 1em; font-weight: 600; line-height: 1.6; margin: 20px 0 6px; color: var(--text); }
.reader-body :deep(p.tag) { margin: 18px 0 6px; font-size: 0.94em; font-weight: 600; letter-spacing: 0.06em; color: var(--mint); }
.reader-body :deep(p.item) { margin: 14px 0 4px; font-weight: 600; }
.reader-body :deep(p.li) { padding-left: 1.1em; }
.reader-body :deep(p.li)::before { content: "·"; margin-left: -1.1em; margin-right: 0.5em; color: var(--mint); }
.reader-body :deep(figure.fig) { margin: 14px 0 18px; padding: 10px 12px; border: 1px dashed var(--line); border-radius: 8px; background: var(--bg-2); }
.reader-body :deep(.fig-body) { font-size: 0.8em; line-height: 1.75; color: var(--text-3); letter-spacing: 0.02em; }
.reader-body :deep(figcaption) { margin-top: 8px; font-size: 0.86em; color: var(--text-2); text-align: center; }
.reader-body :deep(.figcap) { margin: 10px 0; font-size: 0.86em; color: var(--text-2); text-align: center; }
.reader-body :deep(sup) { font-size: 0.68em; line-height: 0; }
.reader-body :deep(p.formula) {
  font-family: ui-monospace, "Cascadia Mono", Consolas, monospace;
  font-size: 0.9em; line-height: 1.75; margin: 6px 0; padding: 6px 10px;
  background: var(--bg-2); border-radius: 6px; color: var(--text-2);
  overflow-x: auto; white-space: pre-wrap; word-break: break-all;
}
.reader-pager { display: flex; justify-content: space-between; gap: 10px; margin-top: 28px; padding-top: 16px; border-top: 1px dashed var(--line); }
.reader-subs { margin-top: 22px; padding-top: 14px; border-top: 1px dashed var(--line); display: flex; flex-direction: column; gap: 6px; align-items: flex-start; }
.sub-link { background: none; border: 0; padding: 2px 0; color: var(--text-2); font-size: 12.5px; cursor: pointer; text-align: left; }
body:not(.ink-pen-lock) .sub-link:hover { color: var(--mint); }
@media (max-width: 900px) {
  .reader-grid { grid-template-columns: minmax(0, 1fr); }
  .reader-toc { position: static; max-height: 32vh; }
}
</style>
