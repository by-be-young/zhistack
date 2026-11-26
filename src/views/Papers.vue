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

const list = computed(() => papers
  .filter(p => filter.value === 'all' || p.group === filter.value || p.subjects.includes(filter.value))
  .slice()
  .sort((a, b) => b.year - a.year))

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

function sourceHost(url) {
  try { return new URL(url).host } catch { return '原卷' }
}
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">REAL PAPERS</div>
        <h1 class="page-title">真题原卷</h1>
        <p class="page-sub">按年份整套作答，不改编题干。主观题与填空题在交卷前对照参考答案自评百分比，按满分折算得分。</p>
      </div>
      <div style="flex: 1" />
      <span class="chip">{{ papers.length }} 套原卷</span>
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
        <span class="tiny dim">{{ rows.length }} 套 · 点击开始整套计时作答</span>
      </div>

      <div class="paper-grid">
        <article v-for="p in rows" :key="p.id" class="paper-card card card-pad card-hover">
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

          <div v-if="p.note" class="tiny dim paper-note">{{ p.note }}</div>

          <div class="paper-foot">
            <div class="tiny dim">
              <template v-if="best(p)">已做 {{ attempts(p).length }} 次 · 最高 {{ best(p).rawPoints ?? best(p).score }} 分</template>
              <template v-else>尚未作答</template>
            </div>
            <div class="row" style="gap: 8px">
              <a :href="p.sourceUrl" target="_blank" rel="noopener" class="btn btn-text btn-sm">
                原卷来源 <AppIcon name="arrow-right" :size="12" />
              </a>
              <button class="btn btn-primary btn-sm" @click="start(p)">
                <AppIcon name="play" :size="14" /> 开始作答
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

    <section class="card card-pad notice-card">
      <div class="card-label">ABOUT</div>
      <h2 style="font-size: 16px; margin: 4px 0 8px">原卷与自评说明</h2>
      <ul class="notice-list tiny dim">
        <li>题干按公开网络版本录入，未做改写；带图题目保留原卷页码提示，图形以原卷为准。</li>
        <li>客观题由本地判分；主观题、填空题在交卷前弹出参考答案与评分要点，按 0–100% 选择得分比例。</li>
        <li>非客观题得分 = 题目满分 × 自评比例，60% 及以上计入“答对”，但不进入客观错题重练池。</li>
        <li>原卷版权归权利人所有，平台仅用于个人复习；如权利人提出异议，将移除对应年份。</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.paper-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
.year-block { margin-bottom: 22px; }
.year-head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 10px; }
.year-num { font-family: var(--font-display); font-size: 30px; letter-spacing: 0.02em; }
.paper-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.paper-card { display: flex; flex-direction: column; }
.paper-title { font-size: 16px; line-height: 1.5; margin: 12px 0 10px; }
.paper-meta { display: flex; gap: 16px; flex-wrap: wrap; font-size: 12px; color: var(--text-2); }
.paper-meta span { display: inline-flex; align-items: center; gap: 5px; }
.paper-sections { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.paper-sections span { padding: 2px 7px; border: 1px solid var(--line); border-radius: 999px; background: var(--bg-2); font-size: 10.5px; }
.paper-note { margin-top: 10px; line-height: 1.65; }
.paper-foot { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 16px; padding-top: 12px; border-top: 1px dashed var(--line); flex-wrap: wrap; }
.notice-card { margin-top: 6px; }
.notice-list { margin: 0; padding-left: 18px; line-height: 1.9; }
@media (max-width: 900px) { .paper-grid { grid-template-columns: minmax(0, 1fr); } }
</style>
