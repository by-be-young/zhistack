<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { knowledge, knowledgeById, subjectMap, subjects, questionsByKnowledge, books } from '../data/index.js'
import { searchKnowledge, highlightSegments } from '../core/search.js'
import { masteryOf } from '../core/diagnose.js'
import { archive } from '../storage/archive.js'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const router = useRouter()

const q = ref(route.query.q || '')
const subject = ref(route.query.subject || '')
const difficulty = ref(route.query.difficulty || '')
const masteryFilter = ref(route.query.mastery || '')
const chapter = ref(route.query.chapter || '')

const chapterOptions = computed(() => {
  const list = []
  for (const b of books) {
    if (subject.value && b.subject !== subject.value) continue
    for (const ch of b.chapters) {
      list.push({ id: ch.id, label: `${subjectMap[b.subject].short} · ${ch.title}`, children: (ch.children || []).map(c => c.id) })
    }
  }
  return list
})

function rows() {
  const found = searchKnowledge(knowledge, q.value, { subject: subject.value, difficulty: difficulty.value })
  let list = found.map(x => ({ k: x.item, score: x.score }))
  if (chapter.value) {
    const opt = chapterOptions.value.find(c => c.id === chapter.value)
    const ids = new Set([chapter.value, ...(opt?.children || [])])
    list = list.filter(x => ids.has(x.k.chapterId))
  }
  if (masteryFilter.value) {
    list = list.filter(x => {
      const m = masteryOf(archive, x.k.id)
      const label = m.mastery == null ? 'untrained' : m.mastery < 45 ? 'weak' : m.mastery < 75 ? 'review' : 'firm'
      return label === masteryFilter.value
    })
  }
  return list
}

const results = computed(() => rows())

const counts = computed(() => {
  const c = { all: knowledge.filter(k => !subject.value || k.subject === subject.value).length, weak: 0, firm: 0, untrained: 0 }
  for (const k of knowledge) {
    if (subject.value && k.subject !== subject.value) continue
    const m = masteryOf(archive, k.id)
    if (m.mastery == null) c.untrained++
    else if (m.mastery < 45) c.weak++
    else if (m.mastery >= 75) c.firm++
  }
  return c
})

function setMastery(v) {
  masteryFilter.value = masteryFilter.value === v ? '' : v
}

watch([q, subject, difficulty, masteryFilter, chapter], () => {
  router.replace({ query: {
    ...(q.value ? { q: q.value } : {}),
    ...(subject.value ? { subject: subject.value } : {}),
    ...(difficulty.value ? { difficulty: difficulty.value } : {}),
    ...(masteryFilter.value ? { mastery: masteryFilter.value } : {}),
    ...(chapter.value ? { chapter: chapter.value } : {})
  } })
})

function clearAll() {
  q.value = ''
  subject.value = ''
  difficulty.value = ''
  masteryFilter.value = ''
  chapter.value = ''
}

function segs(text) { return highlightSegments(text, q.value) }
function metaOf(k) { return masteryOf(archive, k) }
function qCount(k) { return (questionsByKnowledge[k.id] || []).length }

function chapterLabel(k) {
  for (const b of books) {
    for (const ch of b.chapters) {
      if (ch.id === k.chapterId) return `${subjectMap[b.subject].short} · ${ch.title}`
      const sub = (ch.children || []).find(c => c.id === k.chapterId)
      if (sub) return `${subjectMap[b.subject].short} · ${ch.title} / ${sub.title}`
    }
  }
  return ''
}

onMounted(() => {
  if (!q.value && !subject.value) subject.value = ''
})
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">KNOWLEDGE</div>
        <h1 class="page-title">知识点检索</h1>
        <p class="page-sub">{{ knowledge.length }} 个考点，支持标题、标签、考点编号与全文要点。空格分词为「与」关系。</p>
      </div>
    </div>

    <div class="searchbar" style="margin-bottom: 14px">
      <AppIcon name="search" :size="18" />
      <input v-model="q" type="search" placeholder="试试 TLB、KMP、拥塞控制、页表…" aria-label="搜索知识点" />
      <span class="kbd">⌘K</span>
    </div>

    <div class="row" style="margin-bottom: 10px">
      <button class="chip clickable" :class="{ active: !subject }" @click="subject = ''">全部 {{ counts.all }}</button>
      <button
        v-for="s in subjects" :key="s.id"
        class="chip clickable"
        :class="{ active: subject === s.id }"
        @click="subject = subject === s.id ? '' : s.id"
      >{{ s.short }}</button>
      <span style="width: 1px; height: 18px; background: var(--line)" />
      <button class="chip clickable" :class="{ active: masteryFilter === 'weak' }" @click="setMastery('weak')">薄弱 {{ counts.weak }}</button>
      <button class="chip clickable" :class="{ active: masteryFilter === 'firm' }" @click="setMastery('firm')">稳固 {{ counts.firm }}</button>
      <button class="chip clickable" :class="{ active: masteryFilter === 'untrained' }" @click="setMastery('untrained')">未练 {{ counts.untrained }}</button>
      <span style="width: 1px; height: 18px; background: var(--line)" />
      <select v-model="difficulty" class="chip" style="height: 26px; padding: 0 26px 0 10px" aria-label="难度">
        <option value="">难度不限</option>
        <option value="1">基础</option>
        <option value="2">进阶</option>
        <option value="3">综合</option>
      </select>
      <select v-model="chapter" class="chip" style="height: 26px; max-width: 220px" aria-label="章节">
        <option value="">全部章节</option>
        <option v-for="c in chapterOptions" :key="c.id" :value="c.id">{{ c.label }}</option>
      </select>
      <button v-if="q || subject || difficulty || masteryFilter || chapter" class="btn btn-text btn-sm" @click="clearAll">清空</button>
      <div style="flex: 1" />
      <span class="tiny dim">{{ results.length }} 条</span>
    </div>

    <div v-if="results.length" class="k-grid">
      <router-link
        v-for="r in results" :key="r.k.id"
        :to="`/knowledge/${r.k.id}`"
        class="k-card card card-hover"
      >
        <div class="row" style="justify-content: space-between; gap: 10px">
          <div class="row" style="gap: 8px">
            <span class="chip sub-chip" :style="{ '--sub': `var(--sub-${r.k.subject})` }">
              <span class="dot" />{{ subjectMap[r.k.subject]?.short }}
            </span>
            <span class="mono tiny dim">{{ r.k.gid }}</span>
          </div>
          <span
            class="mono tiny" :style="{ color: metaOf(r.k).mastery == null ? 'var(--text-3)' : metaOf(r.k).mastery < 45 ? 'var(--rose)' : metaOf(r.k).mastery < 75 ? 'var(--amber)' : 'var(--mint)' }"
          >{{ metaOf(r.k).mastery == null ? '未练' : metaOf(r.k).mastery + '%' }}</span>
        </div>
        <h3 class="k-card-title">
          <template v-for="(s, i) in segs(r.k.title)" :key="i">
            <mark v-if="s.hit">{{ s.text }}</mark><span v-else>{{ s.text }}</span>
          </template>
        </h3>
        <div class="k-card-sum small muted">
          <template v-for="(s, i) in segs(r.k.summary)" :key="i">
            <mark v-if="s.hit">{{ s.text }}</mark><span v-else>{{ s.text }}</span>
          </template>
        </div>
        <div class="k-card-foot">
          <span class="tiny dim">{{ chapterLabel(r.k) }}</span>
          <span class="tiny dim">{{ qCount(r.k) }} 题</span>
        </div>
      </router-link>
    </div>
    <div v-else class="card">
      <EmptyState icon="search" title="没有匹配的知识点" text="换个关键词，或清空筛选。也可以按考点编号搜索，如 OS-3.2-04。" />
      <div style="text-align: center; padding-bottom: 24px">
        <button class="btn btn-ghost btn-sm" @click="clearAll">清空筛选</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.k-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.k-card { padding: 16px 18px; display: flex; flex-direction: column; gap: 8px; }
.k-card-title { font-size: 16px; line-height: 1.4; }
.k-card-sum { font-size: 12.5px; line-height: 1.7; }
.k-card-foot { display: flex; justify-content: space-between; border-top: 1px dashed var(--line); padding-top: 9px; margin-top: 2px; }
mark { background: color-mix(in srgb, var(--mint) 26%, transparent); color: inherit; border-radius: 3px; padding: 0 1px; }
@media (max-width: 760px) { .k-grid { grid-template-columns: minmax(0, 1fr); } }
</style>
