<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { archive, save } from '../storage/archive.js'
import { subjects, subjectMap, knowledgeById, questions, papers } from '../data/index.js'
import { diagnose } from '../core/diagnose.js'
import { createSession } from '../stores/practice.js'
import { relativeDay } from '../core/time.js'
import { toast } from '../core/toast.js'
import AppIcon from '../components/AppIcon.vue'
import ProgressRing from '../components/ProgressRing.vue'
import EmptyState from '../components/EmptyState.vue'

const router = useRouter()
const mode = ref('mock')
const picked = ref([...archive.settings.subjects])
const count = ref(10)
const duration = ref(0)
const weak = ref(diagnose(archive))

const modes = [
  { id: 'mock', icon: 'layers', name: '模拟组卷', desc: '分桶抽题' },
  { id: 'paper', icon: 'trophy', name: '真题原卷', desc: '整套计时' },
  { id: 'weak', icon: 'target', name: '薄弱专项', desc: '定向补缺' },
  { id: 'mistake', icon: 'alert', name: '错题重练', desc: '错题优先' }
]

const draft = computed(() => archive.draft?.session || null)
const openMistakes = computed(() => Object.values(archive.mistakes).filter(m => m.stage !== 'mastered'))

const weakList = computed(() => weak.value.coldStart ? [] : weak.value.items.slice(0, 4))

const counts = computed(() => {
  const out = {}
  for (const s of subjects) {
    out[s.id] = questions.filter(q => !q.retired && q.subject === s.id).length
  }
  return out
})

const pool = computed(() => picked.value.reduce((n, s) => n + (counts.value[s] || 0), 0))

const canStart = computed(() => picked.value.length > 0)

function toggleSubject(id) {
  const i = picked.value.indexOf(id)
  if (i >= 0) picked.value.splice(i, 1)
  else picked.value.push(id)
  archive.settings.subjects = [...picked.value]
  save()
}

function start() {
  if (mode.value === 'paper') { router.push('/papers'); return }
  if (!canStart.value) { toast('至少保留一个科目', 'warn'); return }
  const n = Number(count.value)
  const s = createSession({
    mode: mode.value, subjects: picked.value, count: n,
    durationMin: Number(duration.value) || 0
  })
  if (s) router.push(`/practice/session/${s.id}`)
}

function startWeak(kid) {
  const s = createSession({ mode: 'weak', subjects: [knowledgeById[kid].subject], count: 8, knowledgeIds: [kid], title: '薄弱专项' })
  if (s) router.push(`/practice/session/${s.id}`)
}

function startMistake() {
  const kids = [...new Set(openMistakes.value.map(m => m.knowledgeId).filter(Boolean))]
  if (!kids.length) { toast('错题本已清空，去综合练习吧', 'info'); return }
  const s = createSession({ mode: 'mistake', subjects: picked.value, count: 10, knowledgeIds: kids, title: '错题重练' })
  if (s) router.push(`/practice/session/${s.id}`)
}

function resume() {
  router.push(`/practice/session/${archive.draft.session.id}`)
}

function modeAction(m) {
  if (m.id === 'mistake') { startMistake(); return }
  mode.value = m.id
  start()
}

onMounted(() => {
  if (!picked.value.length) picked.value = subjects.map(s => s.id)
})
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">PRACTICE</div>
        <h1 class="page-title">练习中心</h1>
        <div class="head-stats">
          <span><b>{{ questions.length }}</b> 题</span>
          <span><b>{{ subjects.length }}</b> 科</span>
          <span><b>{{ archive.sessions.length }}</b> 次练习</span>
        </div>
      </div>
    </div>

    <div v-if="draft" class="card card-pad draft-banner">
      <div class="draft-main">
        <div class="draft-icon"><AppIcon name="play" :size="18" /></div>
        <div class="draft-info">
          <div class="draft-title">{{ draft.title }}</div>
          <div class="tiny dim">{{ draft.count }} 题 · 已答 {{ Object.values(draft.answers || {}).filter(a => a.length).length }} 题</div>
        </div>
      </div>
      <div class="draft-actions">
        <button class="btn btn-primary btn-sm" @click="resume">继续</button>
        <button class="btn btn-text btn-sm" @click="archive.draft = null; save(true)">丢弃</button>
      </div>
    </div>

    <div class="mode-grid">
      <button
        v-for="m in modes" :key="m.id"
        class="mode-card card card-hover" :class="{ active: mode === m.id }"
        @click="mode = m.id"
      >
        <div class="mode-icon"><AppIcon :name="m.icon" :size="18" /></div>
        <div>
          <div class="mode-name">{{ m.name }}</div>
          <div class="tiny dim mode-desc">{{ m.desc }}</div>
        </div>
        <AppIcon name="check" :size="14" class="mode-check" v-if="mode === m.id" />
      </button>
    </div>

    <div class="grid g-main" style="align-items: start">
      <section class="card card-pad">
        <div class="card-label">CONFIG</div>
        <h2 style="font-size: 20px; margin: 4px 0 16px">
          {{ modes.find(m => m.id === mode)?.name }}
        </h2>

        <div v-if="mode !== 'paper'" class="field">
          <div class="spread"><label class="label">科目</label><span class="tiny dim">已选 {{ picked.length }} 科 · 题库 {{ pool }} 题</span></div>
          <div class="row" style="margin-top: 8px">
            <button
              v-for="s in subjects" :key="s.id"
              class="sub-toggle" :class="{ active: picked.includes(s.id) }"
              :style="{ '--sub': `var(--sub-${s.id})` }"
              @click="toggleSubject(s.id)"
            >
              <span class="dot" />{{ s.name }}
              <span class="mono tiny">{{ counts[s.id] }}</span>
            </button>
          </div>
        </div>

        <div v-if="mode !== 'paper'" class="field">
          <div class="label">题量</div>
          <div class="row" style="margin-top: 8px">
            <button
              v-for="n in [5, 10, 20, 30]" :key="n"
              class="chip clickable" :class="{ active: count === n }"
              @click="count = n"
            >{{ n }} 题</button>
          </div>
        </div>

        <div v-if="mode !== 'paper'" class="field">
          <div class="label">限时</div>
          <div class="row" style="margin-top: 8px">
            <button class="chip clickable" :class="{ active: duration === 0 }" @click="duration = 0">不限时</button>
            <button class="chip clickable" :class="{ active: duration === 45 }" @click="duration = 45">45 分钟</button>
            <button class="chip clickable" :class="{ active: duration === 90 }" @click="duration = 90">90 分钟</button>
            <button class="chip clickable" :class="{ active: duration === 180 }" @click="duration = 180">3 小时</button>
          </div>
        </div>

        <div v-if="mode === 'paper'" class="paper-mini">
          <span><b>{{ papers.length }}</b> 套</span>
          <span><b>{{ papers.reduce((n, p) => n + p.questionCount, 0) }}</b> 题</span>
          <span><b>{{ papers.reduce((n, p) => n + p.durationMin, 0) }}</b> 分钟</span>
        </div>

        <div class="row" style="margin-top: 22px">
          <button class="btn btn-primary" :disabled="!canStart && mode !== 'paper'" @click="start">
            <AppIcon :name="mode === 'paper' ? 'trophy' : 'play'" :size="15" />
            {{ mode === 'paper' ? '去真题库选题' : `开始 · ${Math.min(count, pool)} 题` }}
          </button>
          <span class="tiny dim">{{ mode === 'paper' ? '整套发放' : '近期题后置' }}</span>
        </div>
      </section>

      <div class="stack">
        <section class="card card-pad">
          <div class="spread">
            <div class="card-label">RECOMMEND</div>
            <router-link to="/stats" class="btn btn-text btn-sm">诊断 →</router-link>
          </div>
          <h2 style="font-size: 18px; margin: 4px 0 8px">薄弱推荐</h2>
          <div v-if="weakList.length" class="rec-list">
            <div v-for="w in weakList" :key="w.knowledge.id" class="rec-row">
              <div style="flex: 1; min-width: 0">
                <div class="rec-title">{{ w.knowledge.title }}</div>
                <div class="tiny dim">{{ w.reasons[0] }}</div>
              </div>
              <ProgressRing :value="w.mastery.mastery" :size="40" :stroke="3" :color="w.mastery.mastery < 45 ? 'rose' : 'amber'" />
              <button class="btn btn-ghost btn-sm" @click="startWeak(w.knowledge.id)">练</button>
            </div>
          </div>
          <EmptyState v-else icon="target" title="暂无诊断" text="先练一轮。" />
        </section>

        <section class="card card-pad">
          <div class="spread">
            <div class="card-label">HISTORY</div>
            <span class="tiny dim">{{ archive.sessions.length }} 次</span>
          </div>
          <div v-if="archive.sessions.length" class="hist-list">
            <router-link
              v-for="s in archive.sessions.slice(0, 5)" :key="s.id"
              :to="`/practice/result/${s.id}`" class="hist-row"
            >
              <div>
                <div class="tiny">{{ s.count }} 题 · {{ s.subjects.map(x => subjectMap[x]?.short).join('/') }}</div>
                <div class="mono tiny dim">{{ relativeDay(s.endedAt) }}</div>
              </div>
              <div class="mono" :style="{ color: s.accuracy >= 70 ? 'var(--mint)' : s.accuracy >= 45 ? 'var(--amber)' : 'var(--rose)' }">{{ s.accuracy }}%</div>
            </router-link>
          </div>
          <div v-else class="tiny dim" style="padding: 14px 0">暂无记录</div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.draft-banner { border-color: color-mix(in srgb, var(--amber) 40%, var(--line)); background: color-mix(in srgb, var(--amber) 5%, var(--bg-1)); margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.head-stats { display: flex; gap: 16px; margin-top: 4px; color: var(--text-3); font-size: 12px; }
.head-stats b { font-family: var(--font-mono); font-size: 15px; color: var(--text); font-weight: 500; }
.draft-main { display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1; }
.draft-info { min-width: 0; }
.draft-title { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.draft-actions { display: flex; gap: 4px; flex: 0 0 auto; }
.draft-icon { width: 38px; height: 38px; border-radius: 9px; display: grid; place-items: center; background: var(--bg-2); color: var(--amber); }
.mode-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-bottom: 14px; }
.mode-card { display: flex; align-items: center; gap: 9px; padding: 12px 12px; text-align: left; position: relative; min-width: 0; }
.mode-card.active { border-color: var(--mint); background: color-mix(in srgb, var(--mint) 6%, var(--bg-1)); }
.mode-icon { width: 34px; height: 34px; border-radius: 8px; background: var(--bg-2); display: grid; place-items: center; color: var(--text-2); flex: 0 0 auto; }
.mode-name { font-size: 14px; font-weight: 600; }
.mode-check { position: absolute; top: 10px; right: 10px; color: var(--mint); }
.field { margin-bottom: 18px; }
.label { font-size: 12px; color: var(--text-2); }
.sub-toggle { display: inline-flex; align-items: center; gap: 7px; padding: 7px 12px; border-radius: 8px; border: 1px solid var(--line); background: transparent; color: var(--text-2); cursor: pointer; font-size: 13px; }
.sub-toggle.active { border-color: var(--sub); color: var(--text); background: color-mix(in srgb, var(--sub) 8%, transparent); }
.sub-toggle .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sub); }
.paper-mini { display: flex; gap: 18px; padding: 10px 0 0; color: var(--text-3); font-size: 12px; }
.paper-mini b { font-family: var(--font-mono); font-size: 16px; color: var(--text); font-weight: 500; }
.rec-list, .hist-list { display: flex; flex-direction: column; }
.rec-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px dashed var(--line); }
.rec-row:last-child { border-bottom: 0; }
.rec-title { font-size: 13.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.hist-row { display: flex; align-items: center; justify-content: space-between; padding: 9px 0; border-bottom: 1px dashed var(--line); color: var(--text-2); }
.hist-row:last-child { border-bottom: 0; }
body:not(.ink-pen-lock) .hist-row:hover { color: var(--text); }
@media (max-width: 700px) {
  .mode-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
  .mode-card { flex-direction: column; align-items: flex-start; gap: 6px; padding: 10px 8px; }
  .mode-icon { width: 30px; height: 30px; border-radius: 8px; }
  .mode-name { font-size: 12px; white-space: nowrap; }
  .mode-desc { display: none; }
  .mode-check { top: 6px; right: 6px; }
  .draft-title { white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
  .draft-banner { align-items: flex-start; }
  .draft-actions { flex-direction: column; gap: 2px; }
  .head-stats { gap: 12px; }
  .head-stats b { font-size: 13px; }
  .sub-toggle { flex: 1 1 46%; justify-content: center; }
}
</style>
