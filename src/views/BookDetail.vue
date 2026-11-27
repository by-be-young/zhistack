<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { bookMap, subjectMap, chapterKnowledge, chapterQuestions, knowledgeById } from '../data/index.js'
import { getMeta, putPdf, removePdf, openPdfAt } from '../storage/pdfStore.js'
import { archive, save } from '../storage/archive.js'
import { recordBookOpen } from '../core/record.js'
import { toast } from '../core/toast.js'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const router = useRouter()
const book = computed(() => bookMap[route.params.bookId])
const meta = ref(null)
const expanded = ref(new Set())
const offset = ref(0)
const fileInput = ref(null)
const selected = ref(null)

function pointsOf(ch) {
  return chapterKnowledge[ch.id] || []
}

function questionsOf(ch) {
  return chapterQuestions[ch.id] || []
}

function toggle(chId) {
  const s = new Set(expanded.value)
  if (s.has(chId)) s.delete(chId)
  else s.add(chId)
  expanded.value = s
}

async function refreshMeta() {
  if (!book.value) return
  meta.value = await getMeta(book.value.id)
  offset.value = archive.settings.pdfOffset[book.value.id] || 0
}

async function pickPdf() {
  if (!book.value) return
  try {
    if ('showOpenFilePicker' in window) {
      const [handle] = await window.showOpenFilePicker({
        types: [{ description: 'PDF', accept: { 'application/pdf': ['.pdf'] } }],
        multiple: false
      })
      const file = await handle.getFile()
      await putPdf(book.value.id, file, handle)
      await refreshMeta()
      toast('已挂载，刷新后仍可跳页', 'info')
    } else {
      fileInput.value?.click()
    }
  } catch (e) {
    if (e?.name !== 'AbortError') toast('挂载失败：' + (e?.message || '未知错误'), 'error')
  }
}

async function onFile(e) {
  const file = e.target.files?.[0]
  if (!file) return
  if (!file.name.toLowerCase().endsWith('.pdf')) {
    toast('仅支持 PDF 文件', 'error')
    return
  }
  await putPdf(book.value.id, file, null)
  await refreshMeta()
  toast('已挂载（当前浏览器刷新后需重新挂载）', 'info')
}

async function unmount() {
  if (!book.value) return
  await removePdf(book.value.id)
  await refreshMeta()
  toast('已解除挂载', 'info')
}

function setOffset() {
  if (!book.value) return
  archive.settings.pdfOffset[book.value.id] = Number(offset.value) || 0
  save(true)
  toast('页码偏移已保存', 'info')
}

async function openPage(page) {
  if (!book.value) return
  if (!meta.value) {
    toast('请先挂载教材 PDF', 'warn')
    return
  }
  const r = await openPdfAt(book.value.id, page, Number(offset.value) || 0)
  if (r.ok) {
    recordBookOpen(archive, book.value.id, page)
    save()
  } else {
    const map = {
      unmounted: '尚未挂载 PDF',
      'no-idb': '当前浏览器不支持本地文件存储',
      'need-permission': '文件访问权限已失效，请重新挂载',
      'popup-blocked': '浏览器拦截了新窗口，请允许后重试'
    }
    toast(map[r.reason] || '打开失败', 'warn')
  }
}

function pick(ch) {
  selected.value = ch.id
}

onMounted(async () => {
  const first = book.value?.chapters[0]?.id
  if (first) {
    expanded.value = new Set([first])
    selected.value = first
  }
  await refreshMeta()
})
</script>

<template>
  <div class="page" v-if="book">
    <div class="row" style="margin-bottom: 18px">
      <button class="btn btn-text btn-sm" @click="router.push('/library')"><AppIcon name="arrow-left" :size="14" /> 书库</button>
    </div>

    <div class="page-head">
      <div>
        <div class="eyebrow">{{ subjectMap[book.subject]?.name }} · {{ book.edition }}</div>
        <h1 class="page-title">{{ book.title }}</h1>
        <div class="head-stats"><span>{{ book.author }}</span><span>{{ book.publisher }}</span><span><b>{{ book.pages }}</b> 页</span></div>
      </div>
      <div style="flex: 1" />
      <div class="row">
        <button v-if="book.text" class="btn btn-primary" @click="router.push(`/library/${book.id}/read`)">
          <AppIcon name="book" :size="15" /> 在线阅读
        </button>
        <button v-if="!meta" class="btn" :class="book.text ? 'btn-ghost' : 'btn-primary'" @click="pickPdf"><AppIcon name="upload" :size="15" /> 挂载 PDF</button>
        <template v-else>
          <span class="chip active"><AppIcon name="check" :size="11" /> {{ meta.name }}</span>
          <button class="btn btn-ghost btn-sm" @click="unmount">解除</button>
        </template>
      </div>
    </div>

    <div v-if="meta" class="card card-pad mount-bar">
      <div class="row" style="gap: 14px">
        <div class="tiny dim">
          页码偏移 <span class="mono">{{ offset }}</span>（PDF 物理页 = 印刷页 + 偏移）
        </div>
        <div class="row" style="gap: 6px">
          <button class="icon-btn" @click="offset--; setOffset()" aria-label="偏移减一">−</button>
          <input v-model.number="offset" class="input" style="width: 72px; height: 34px; padding: 4px 8px" type="number" />
          <button class="icon-btn" @click="offset++; setOffset()" aria-label="偏移加一">+</button>
        </div>
        <span class="tiny dim">挂载于 {{ meta.at?.slice(0, 10) }} · 刷新后{{ meta.mode === 'handle' ? '仍可用' : '需重新挂载' }}</span>
      </div>
    </div>

    <div class="grid split-book" style="margin-top: 16px">
      <aside class="card card-pad">
        <div class="card-label" style="margin-bottom: 6px">CHAPTERS</div>
        <div class="tree">
          <div v-for="ch in book.chapters" :key="ch.id" class="chapter">
            <button class="ch-row" :class="{ active: selected === ch.id }" @click="toggle(ch.id); pick(ch)">
              <AppIcon :name="expanded.has(ch.id) ? 'chevron-down' : 'chevron-right'" :size="14" />
              <span class="ch-title">{{ ch.title }}</span>
              <span class="mono tiny dim">{{ chapterQuestions[ch.id]?.length || 0 }}</span>
            </button>
            <div v-if="expanded.has(ch.id) && ch.children" class="children">
              <button
                v-for="sub in ch.children" :key="sub.id"
                class="sub-row" :class="{ active: selected === sub.id }"
                @click="book.text ? router.push(`/library/${book.id}/read/${sub.id}`) : pick(sub)"
              >
                <span>{{ sub.title }}</span>
                <span class="mono tiny dim">p.{{ sub.page }}</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <section class="card card-pad" v-if="selected">
        <div class="spread">
          <div>
            <div class="card-label">SECTION</div>
            <h2 style="font-size: 20px; margin-top: 4px">
              {{ (book.chapters.flatMap(c => [c, ...(c.children || [])]).find(c => c.id === selected)?.title) }}
            </h2>
          </div>
          <button v-if="book.text" class="btn btn-primary btn-sm" @click="router.push(`/library/${book.id}/read/${selected}`)">
            <AppIcon name="book" :size="14" /> 阅读本节
          </button>
          <button v-else class="btn btn-ghost btn-sm" @click="openPage((book.chapters.flatMap(c => [c, ...(c.children || [])]).find(c => c.id === selected)?.page) || 1)">
            <AppIcon name="book" :size="14" /> 打开书页
          </button>
        </div>

        <div class="row tiny dim" style="margin: 10px 0 18px">
          <span>印刷页 p.{{ (book.chapters.flatMap(c => [c, ...(c.children || [])]).find(c => c.id === selected)?.page) }}</span>
          <span>·</span>
          <span>{{ pointsOf(book.chapters.find(c => c.id === selected) || { id: selected }).length }} 个知识点</span>
          <span>·</span>
          <span>{{ questionsOf(book.chapters.find(c => c.id === selected) || { id: selected }).length }} 道题</span>
        </div>

        <div v-if="pointsOf(book.chapters.find(c => c.id === selected) || { id: selected }).length" class="k-list">
          <div
            v-for="k in pointsOf(book.chapters.find(c => c.id === selected) || { id: selected })" :key="k.id"
            class="k-row"
          >
            <div class="k-main">
              <router-link :to="`/knowledge/${k.id}`" class="k-title">{{ k.title }}</router-link>
              <div class="tiny dim" style="margin-top: 2px">{{ k.summary }}</div>
            </div>
            <div class="row" style="gap: 6px">
              <span class="chip">{{ k.difficulty === 1 ? '基础' : k.difficulty === 2 ? '进阶' : '综合' }}</span>
              <button class="btn btn-text btn-sm" @click="openPage(k.bookRefs[0]?.page || 1)">p.{{ k.bookRefs[0]?.page }}</button>
            </div>
          </div>
        </div>
        <EmptyState v-else icon="book" title="本章暂无知识点索引" text="可以直接挂载 PDF 翻书，或在知识点页按考点编号检索。" />
      </section>
    </div>

    <input ref="fileInput" type="file" accept="application/pdf,.pdf" style="display: none" @change="onFile" />
  </div>
  <div v-else class="page"><EmptyState title="书目不存在" text="返回书库重新选择。" /></div>
</template>

<style scoped>
.mount-bar { border-style: dashed; }
.tree { display: flex; flex-direction: column; gap: 2px; }
.chapter { }
.ch-row {
  width: 100%; display: flex; align-items: center; gap: 8px;
  padding: 9px 8px; border-radius: 8px; border: 1px solid transparent;
  background: transparent; color: var(--text); cursor: pointer; text-align: left;
}
body:not(.ink-pen-lock) .ch-row:hover { background: var(--bg-2); }
.ch-row.active { border-color: var(--line); background: var(--bg-2); }
.ch-title { flex: 1; font-size: 14px; }
.children { margin-left: 18px; border-left: 1px dashed var(--line); padding-left: 8px; }
.sub-row {
  width: 100%; display: flex; justify-content: space-between; gap: 8px;
  padding: 7px 8px; border-radius: 6px; background: transparent; border: 0;
  color: var(--text-2); font-size: 12.5px; cursor: pointer; text-align: left;
}
body:not(.ink-pen-lock) .sub-row:hover { background: var(--bg-2); color: var(--text); }
.sub-row.active { color: var(--mint); }
.k-list { display: flex; flex-direction: column; gap: 4px; }
.k-row { display: flex; align-items: center; gap: 12px; padding: 12px 4px; border-bottom: 1px dashed var(--line); }
.k-row:last-child { border-bottom: 0; }
.k-main { flex: 1; min-width: 0; }
.k-title { font-size: 14.5px; color: var(--text); }
body:not(.ink-pen-lock) .k-title:hover { color: var(--mint); }
@media (max-width: 900px) {
  .split-book { grid-template-columns: minmax(0, 1fr) !important; }
}
</style>
