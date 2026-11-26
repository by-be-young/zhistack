<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { archive } from '../storage/archive.js'
import { papers, subjectMap, questionById } from '../data/index.js'
import { createSession } from '../stores/practice.js'
import AppIcon from '../components/AppIcon.vue'

const router = useRouter()
const filter = ref('all')

const groups = [
  { id: 'all', name: '全部' },
  { id: '408', name: '408' },
  { id: 'math', name: '数学' },
  { id: 'en', name: '英语' },
  { id: 'pol', name: '政治' }
]

const totalQuestions = computed(() => papers.reduce((n, p) => n + p.questionCount, 0))
const totalMinutes = computed(() => papers.reduce((n, p) => n + p.durationMin, 0))

const groupOrder = { 408: 0, math: 1, en: 2, pol: 3 }
const list = computed(() => papers
  .filter(p => filter.value === 'all' || p.group === filter.value || p.subjects.includes(filter.value))
  .slice()
  .sort((a, b) => (b.year - a.year) || (groupOrder[a.group] - groupOrder[b.group])))

const byYear = computed(() => {
  const map = {}
  for (const p of list.value) (map[p.year] ||= []).push(p)
  return map
})

function attempts(p) {
  return archive.sessions.filter(s => s.mode === 'paper' && s.paperId === p.id)
}

function best(p) {
  const rows = attempts(p)
  if (!rows.length) return null
  return rows.reduce((a, b) => (b.score > a.score ? b : a))
}

function start(p) {
  const s = createSession({ mode: 'paper', paperId: p.id, title: p.title, durationMin: p.durationMin })
  if (s) router.push(`/practice/session/${s.id}`)
}

function subjectiveOf(p) {
  const rows = p.qids.map(id => questionById[id]).filter(q => q?.type === 'subjective')
  const fill = rows.filter(q => q.subtype === 'fill').length
  return {
    count: rows.length,
    fill,
    score: rows.reduce((s, q) => s + (q.score || 0), 0),
    label: fill ? `主观 ${rows.length - fill} 题 + 填空 ${fill} 题` : `主观 ${rows.length} 题`
  }
}

</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">REAL PAPERS</div>
        <h1 class="page-title">真题原卷</h1>
        <div class="head-stats">
          <span><b>{{ papers.length }}</b> 套</span>
          <span><b>{{ totalQuestions }}</b> 题</span>
          <span><b>{{ totalMinutes }}</b> 分钟</span>
        </div>
      </div>
      <div style="flex: 1" />

    </div>

    <div class="paper-filter">
      <button
        v-for="g in groups" :key="g.id"
        class="chip clickable" :class="{ active: filter === g.id }"
        @click="filter = g.id"
      >{{ g.name }}</button>
    </div>

    <div v-for="(rows, year) in byYear" :key="year" class="year-block">
      <div class="year-head">
        <span class="year-num">{{ year }}</span>
        <span class="year-line" />
        <span class="tiny dim">{{ rows.length }} 套</span>
      </div>

      <div class="paper-grid">
        <article v-for="p in rows" :key="p.id" class="paper-card card card-pad card-hover"
          :style="{ '--accent': p.group === '408' ? 'var(--sub-ds)' : p.group === 'math' ? 'var(--sub-math)' : p.group === 'en' ? 'var(--sub-en)' : 'var(--sub-pol)' }">
          <div class="spread" style="align-items: flex-start">
            <div class="row" style="gap: 8px; flex-wrap: wrap">
              <span class="chip amber">{{ p.year }} 原卷</span>
              <span v-if="p.group === '408'" class="chip">408</span>
              <span v-for="s in p.subjects" :key="s" class="chip sub-chip" :style="{ '--sub': `var(--sub-${s})` }">
                <span class="dot" />{{ subjectMap[s]?.short }}
              </span>
            </div>
            <span class="mono tiny dim">{{ p.questionCount }} 题</span>
          </div>

          <h2 class="paper-title">{{ p.title }}</h2>

          <div class="paper-meta">
            <span><AppIcon name="clock" :size="14" /> {{ p.durationMin }} 分钟</span>
            <span><AppIcon name="target" :size="14" /> 满分 {{ p.totalScore }}</span>
            <span class="mono">{{ subjectiveOf(p).label }} · {{ subjectiveOf(p).score }} 分</span>
          </div>

          <div v-if="p.sections" class="paper-sections tiny dim">
            <span v-for="sec in p.sections" :key="sec.name">{{ sec.short }}</span>
          </div>

          <div class="paper-foot">
            <div class="paper-score">
              <template v-if="best(p)">
                <b>{{ best(p).rawPoints ?? best(p).score }}</b><span>/ {{ p.totalScore }} 分</span>
              </template>
              <template v-else><span class="dim">未作答</span></template>
            </div>
            <div class="row" style="gap: 6px">
              <a :href="p.sourceUrl" target="_blank" rel="noopener" class="btn btn-text btn-sm src-link" title="查看原卷">
                <AppIcon name="arrow-right" :size="13" /><span>原卷</span>
              </a>
              <button class="btn btn-primary btn-sm" @click="start(p)">
                <AppIcon name="play" :size="13" /> 开始
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div v-if="!list.length" class="card card-pad">
      <div class="empty" style="padding: 28px 0">
        <h4>这一科目还没有原卷</h4>
        <p>真题包按年份陆续扩充，可先在练习中心做原创题。</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.paper-filter { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }
.head-stats { display: flex; gap: 16px; margin-top: 4px; color: var(--text-3); font-size: 12px; }
.head-stats b { font-family: var(--font-mono); font-size: 15px; color: var(--text); font-weight: 500; }
.year-block { margin-bottom: 20px; }
.year-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.year-num { font-family: var(--font-display); font-size: 26px; letter-spacing: 0.02em; line-height: 1; }
.year-line { flex: 1; height: 1px; background: var(--line); }
.paper-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.paper-card { display: flex; flex-direction: column; position: relative; overflow: hidden; padding-left: 18px; }
.paper-card::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--accent); }
.paper-card::after { content: ''; position: absolute; right: -30px; top: -50px; width: 130px; height: 130px; border-radius: 50%; background: color-mix(in srgb, var(--accent) 7%, transparent); pointer-events: none; }
.paper-stamp { position: absolute; right: 14px; top: 14px; font-family: var(--font-display); font-size: 13px; letter-spacing: 0.06em; color: color-mix(in srgb, var(--accent) 78%, var(--text)); opacity: 0.9; z-index: 1; }
.paper-title { font-size: 15px; line-height: 1.5; margin: 10px 0 8px; padding-right: 38px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.paper-meta { display: flex; gap: 12px; flex-wrap: wrap; font-size: 11.5px; color: var(--text-2); }
.paper-meta span { display: inline-flex; align-items: center; gap: 4px; }
.paper-sections { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 8px; }
.paper-sections span { padding: 2px 6px; border: 1px solid var(--line); border-radius: 999px; background: var(--bg-2); font-size: 10px; }
.paper-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: auto; padding-top: 12px; border-top: 1px dashed var(--line); }
.paper-score b { font-family: var(--font-mono); font-size: 18px; font-weight: 500; color: var(--text); }
.paper-score span { font-size: 11px; color: var(--text-3); margin-left: 2px; }
@media (max-width: 900px) {
  .paper-grid { grid-template-columns: minmax(0, 1fr); }
  .paper-card { padding: 14px 14px 14px 17px !important; }
  .paper-title { font-size: 14px; margin: 8px 0 7px; }
  .paper-sections { display: none; }
  .paper-filter { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
  .paper-filter::-webkit-scrollbar { display: none; }
  .paper-filter .chip { flex: 0 0 auto; }
}
@media (max-width: 480px) {
  .head-stats { gap: 12px; }
  .head-stats b { font-size: 13px; }
  .src-link { display: none; }
  .paper-foot { padding-top: 10px; }
  .paper-meta { gap: 8px; }
}
</style>

