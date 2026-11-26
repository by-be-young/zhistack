<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { archive, save } from '../storage/archive.js'
import { useApp } from '../stores/app.js'
import { createSession } from '../stores/practice.js'
import { diagnose, coldStartPath } from '../core/diagnose.js'
import { ensurePeriods, claim } from '../core/tasks.js'
import { questionById, subjectMap, paperById } from '../data/index.js'
import { dayKey, relativeDay } from '../core/time.js'
import { toast } from '../core/toast.js'
import { POINTS } from '../core/config.js'
import AppIcon from '../components/AppIcon.vue'
import Heatmap from '../components/Heatmap.vue'
import ProgressRing from '../components/ProgressRing.vue'

const router = useRouter()
const app = useApp()
const { level, today, weak, tasks } = app

const greeting = computed(() => {
  const h = new Date().getHours()
  if (h < 6) return '夜里还在推进'
  if (h < 11) return '早上好'
  if (h < 14) return '中午好'
  if (h < 19) return '下午好'
  return '晚上好'
})

const draft = computed(() => archive.draft)
const draftInfo = computed(() => {
  const d = draft.value?.session
  if (!d) return null
  const answered = Object.values(d.answers || {}).filter(a => a.length).length
  return { ...d, answered, at: draft.value.at }
})

const lastSession = computed(() => archive.sessions[0] || null)

function spread(list, n = 4) {
  if (list.length <= n) return list
  const step = (list.length - 1) / (n - 1)
  return Array.from({ length: n }, (_, i) => list[Math.round(i * step)])
}

const weakItems = computed(() => {
  const d = weak.value
  if (d.coldStart) {
    const path = coldStartPath().map(x => ({ knowledge: x.knowledge, mastery: { mastery: null, label: '未练' }, reasons: x.reason, pool: 1 }))
    return spread(path, 4)
  }
  return spread(d.items, 4)
})

const weakEmpty = computed(() => !weak.value.coldStart && !weak.value.items.length)


function start(subjects, count = 10, mode = 'mock') {
  const s = createSession({ subjects, count, mode, durationMin: 0 })
  if (s) router.push(`/practice/session/${s.id}`)
}

function startWeak(knowledgeIds) {
  const s = createSession({
    mode: 'weak', subjects: archive.settings.subjects, count: 8,
    knowledgeIds, title: '薄弱专项'
  })
  if (s) router.push(`/practice/session/${s.id}`)
}

function resume() {
  if (!draftInfo.value) return
  router.push(`/practice/session/${draftInfo.value.id}`)
}

function claimTask(id) {
  const r = claim(archive, id)
  if (!r.ok) return
  toast(`+${r.reward} 积分${r.bonus ? `，全清额外 +${r.bonus}` : ''}`, 'info')
  save(true)
}

function levelGain() {
  return level.value.toNext
}

function shortTitle(s) {
  if (!s) return ''
  return (s.paperId && paperById[s.paperId]?.short) || s.title || '练习'
}

onMounted(() => {
  ensurePeriods(archive)
  save()
})
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">TODAY · {{ dayKey() }}</div>
        <h1 class="page-title">{{ greeting }}，今天补哪一块</h1>
        <div class="head-meta">
          <span class="chip flame"><AppIcon name="flame" :size="12" /> {{ archive.profile.streak.current }} 天</span>
          <span class="chip">{{ archive.profile.totals.answered }} 题</span>
          <span class="chip amber">Lv.{{ level.level }} {{ level.name }}</span>
        </div>
      </div>
      <div style="flex: 1" />
      <div class="row">
        <router-link to="/practice" class="btn btn-primary"><AppIcon name="play" :size="15" /> 开始练习</router-link>
        <router-link to="/knowledge" class="btn btn-ghost"><AppIcon name="search" :size="15" /> 查知识点</router-link>
      </div>
    </div>

    <div class="grid g-4 home-stats" style="margin-bottom: 16px">
      <div class="card card-pad">
        <div class="card-label">今日题量</div>
        <div class="stat-row"><b class="display">{{ today.answered }}</b><span class="dim tiny">题</span></div>
        <div class="bar thin mt-8"><i :style="{ width: Math.min(100, today.answered / 20 * 100) + '%' }" /></div>
      </div>
      <div class="card card-pad">
        <div class="card-label">今日正确率</div>
        <div class="stat-row">
          <b class="display">{{ today.answered ? today.accuracy : '—' }}</b><span v-if="today.answered" class="dim tiny">%</span>
        </div>
        <div class="tiny dim mt-8 stat-detail">{{ today.correct }} / {{ today.answered }}</div>
      </div>
      <div class="card card-pad">
        <div class="card-label">本日积分</div>
        <div class="stat-row"><b class="display">{{ archive.profile.dailyPoints.value || 0 }}</b><span class="dim tiny">/ {{ POINTS.dailyCap }}</span></div>
        <div class="bar thin amber mt-8"><i :style="{ width: Math.min(100, (archive.profile.dailyPoints.value || 0) / POINTS.dailyCap * 100) + '%' }" /></div>
      </div>
      <div class="card card-pad">
        <div class="card-label">错题待清</div>
        <div class="stat-row">
          <b class="display">{{ Object.values(archive.mistakes).filter(m => m.stage !== 'mastered').length }}</b>
          <span class="dim tiny">道</span>
        </div>
        <router-link to="/mistakes" class="tiny" style="display: inline-block; margin-top: 8px">去错题本 →</router-link>
      </div>
    </div>

    <div class="grid g-main">
      <div class="stack">
        <section class="card card-pad continue-card">
          <div class="spread">
            <div class="card-label">CONTINUE</div>
            <span v-if="draftInfo" class="chip amber">草稿未交卷</span>
            <span v-else-if="lastSession" class="chip">最近一次 · {{ relativeDay(lastSession.endedAt) }}</span>
          </div>
          <template v-if="draftInfo">
            <h2 class="continue-title">{{ shortTitle(draftInfo) }}</h2>
            <div class="row tiny dim" style="margin: 8px 0 14px">
              <span>{{ draftInfo.answered }} / {{ draftInfo.qids.length }} 题已答</span>
              <span>·</span>
              <span>{{ subjectMap[draftInfo.subjects?.[0]]?.name || '综合' }}</span>
              <span v-if="draftInfo.durationMin">· 限时 {{ draftInfo.durationMin }} 分钟</span>
            </div>
            <div class="bar" style="margin-bottom: 16px"><i :style="{ width: (draftInfo.answered / draftInfo.qids.length * 100) + '%' }" /></div>
            <div class="row">
              <button class="btn btn-primary" @click="resume">继续上次 →</button>
              <router-link to="/practice" class="btn btn-text">另起一套</router-link>
            </div>
          </template>
          <template v-else-if="lastSession">
            <h2 class="continue-title">{{ lastSession.count }} 题 · 正确率 {{ lastSession.accuracy }}%</h2>
            <div class="row tiny dim" style="margin: 8px 0 14px">
              <span>{{ lastSession.correct }} / {{ lastSession.count }} 全对</span>
              <span>·</span>
              <span>{{ Math.round(lastSession.durationSec / 60) }} 分钟</span>
              <span>·</span>
              <span>{{ lastSession.subjects.map(s => subjectMap[s]?.short).join(' / ') }}</span>
            </div>
            <div class="row">
              <router-link :to="`/practice/result/${lastSession.id}`" class="btn btn-ghost">看复盘</router-link>
              <button class="btn btn-primary" @click="start(archive.settings.subjects, 10)">再练 10 题</button>
            </div>
          </template>
          <template v-else>
            <h2 class="continue-title">还没有练习记录</h2>

            <button class="btn btn-primary" @click="start(archive.settings.subjects, 10)">开始摸底 10 题</button>
          </template>
        </section>

        <section class="card card-pad">
          <div class="spread" style="margin-bottom: 4px">
            <div>
              <div class="card-label">WEAK POINTS</div>
              <h2 style="font-size: 18px">今日优先四块</h2>
            </div>
            <router-link to="/stats" class="btn btn-text btn-sm">完整诊断 →</router-link>
          </div>

          <div v-if="weakItems.length" class="weak-list">
            <div v-for="w in weakItems" :key="w.knowledge.id" class="weak-row">
              <div class="weak-main">
                <div class="row" style="gap: 8px">
                  <span class="chip sub-chip" :style="{ '--sub': `var(--sub-${w.knowledge.subject})` }">
                    <span class="dot" />{{ subjectMap[w.knowledge.subject]?.short }}
                  </span>
                  <router-link :to="`/knowledge/${w.knowledge.id}`" class="weak-title">{{ w.knowledge.title }}</router-link>
                </div>
                <div class="row reasons">
                  <span v-for="(r, i) in w.reasons.slice(0, 2)" :key="i" class="tiny dim">{{ r }}</span>
                </div>
              </div>
              <div class="weak-side">
                <ProgressRing
                  :value="w.mastery.mastery" :size="52" :stroke="3"
                  :color="w.mastery.mastery == null ? 'sky' : w.mastery.mastery < 45 ? 'rose' : w.mastery.mastery < 75 ? 'amber' : 'mint'"
                />
                <button class="btn btn-ghost btn-sm" @click="startWeak([w.knowledge.id])">练 8 题</button>
              </div>
            </div>
          </div>
          <div v-else-if="weakEmpty" class="empty" style="padding: 24px 0">
            <h4>暂无薄弱点</h4>

            <button class="btn btn-ghost btn-sm" @click="start(archive.settings.subjects, 10)">挑战 10 题</button>
          </div>
          <div v-else class="tiny dim" style="padding: 20px 0">正在计算诊断结果…</div>
        </section>
      </div>

      <div class="stack">
        <section class="card card-pad">
          <div class="spread">
            <div class="card-label">TODAY TASKS</div>
            <span class="tiny dim">{{ app.claimedCount('daily') }} / 4</span>
          </div>
          <div class="task-list">
            <div v-for="t in tasks.daily" :key="t.def.id" class="task-item">
              <div class="task-icon"><AppIcon :name="t.def.icon" :size="16" /></div>
              <div class="task-body">
                <div class="spread" style="gap: 6px">
                  <span class="task-title">{{ t.def.title }}</span>
                  <span class="mono tiny dim">{{ t.state.progress }}/{{ t.def.target }}</span>
                </div>
                <div class="bar thin" style="margin-top: 6px">
                  <i :style="{ width: Math.min(100, t.state.progress / t.def.target * 100) + '%' }" />
                </div>
              </div>
              <button
                class="btn btn-sm" :class="t.state.claimed ? 'btn-text' : t.state.progress >= t.def.target ? 'btn-primary' : 'btn-ghost'"
                :disabled="t.state.claimed || t.state.progress < t.def.target"
                @click="claimTask(t.def.id)"
              >
                {{ t.state.claimed ? '已领' : `+${t.def.reward}` }}
              </button>
            </div>
          </div>
          <router-link to="/tasks" class="btn btn-text btn-sm" style="margin-top: 10px">全部任务与成就 →</router-link>
        </section>

        <section class="card card-pad">
          <div class="card-label">LEVEL</div>
          <div class="row" style="margin: 6px 0 12px">
            <div class="level-badge">Lv.{{ level.level }}</div>
            <div>
              <div style="font-weight: 600">{{ level.name }}</div>
              <div class="tiny dim">{{ archive.profile.points }} 积分</div>
            </div>
          </div>
          <div class="bar"><i :style="{ width: level.progress + '%' }" /></div>
          <div class="tiny dim mt-8" v-if="level.next">距 Lv.{{ level.next.level }} {{ level.next.name }} 还需 {{ level.toNext }}</div>
          <div class="tiny dim mt-8" v-else>已达最高等级</div>
          <router-link to="/gacha" class="btn btn-ghost btn-block btn-sm" style="margin-top: 14px">
            <AppIcon name="cards" :size="14" /> 去抽一张知识卡
          </router-link>
        </section>
      </div>
    </div>

    <section class="card card-pad" style="margin-top: 16px">
      <div class="spread" style="margin-bottom: 14px">
        <div>
          <div class="card-label">ACTIVITY</div>
          <h2 style="font-size: 18px">近 12 周学习热力</h2>
        </div>
        <router-link to="/stats" class="btn btn-text btn-sm">统计详情 →</router-link>
      </div>
      <Heatmap :columns="app.heatmap(12).columns" />
    </section>

  </div>
</template>

<style scoped>
.head-meta { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; }
.chip.flame { color: var(--amber); border-color: color-mix(in srgb, var(--amber) 30%, var(--line)); }
.stat-row { display: flex; align-items: baseline; gap: 6px; margin-top: 4px; }
.display { font-size: 32px; line-height: 1.1; font-variant-numeric: tabular-nums; }
.continue-card { background: linear-gradient(150deg, var(--bg-1), color-mix(in srgb, var(--mint) 5%, var(--bg-1))); }
.continue-title { font-size: 20px; margin-top: 8px; }
.weak-list { display: flex; flex-direction: column; }
.weak-row { display: flex; align-items: center; gap: 14px; padding: 14px 0; border-bottom: 1px dashed var(--line); }
.weak-row:last-child { border-bottom: 0; padding-bottom: 0; }
.weak-row:first-child { padding-top: 10px; }
.weak-main { flex: 1; min-width: 0; }
.weak-title { font-size: 15px; color: var(--text); font-weight: 500; }
.weak-title:hover { color: var(--mint); }
.reasons { margin-top: 5px; gap: 10px; }
.reasons span::before { content: '·'; margin-right: 6px; color: var(--text-3); }
.weak-side { display: flex; align-items: center; gap: 10px; }
.task-list { display: flex; flex-direction: column; gap: 10px; margin-top: 10px; }
.task-item { display: flex; align-items: center; gap: 10px; }
.task-icon { width: 30px; height: 30px; border-radius: 8px; background: var(--bg-2); display: grid; place-items: center; color: var(--text-2); flex: 0 0 auto; }
.task-body { flex: 1; min-width: 0; }
.task-title { font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.level-badge { width: 48px; height: 48px; border-radius: 10px; border: 1px solid var(--line-strong); display: grid; place-items: center; font-family: var(--font-mono); font-size: 12px; color: var(--mint); background: var(--bg-2); }
@media (max-width: 640px) {
  .home-stats .card { padding: 12px 13px; }
  .home-stats .display { font-size: 26px; }
  .home-stats .card-label { font-size: 10px; letter-spacing: .1em; }
  .home-stats .stat-row { margin-top: 2px; }
  .home-stats .bar, .home-stats .stat-detail { display: none; }
  .home-stats .card { min-height: 86px; }
  .continue-card { padding: 14px; }
  .continue-title { font-size: 17px; margin-top: 6px; line-height: 1.35; }
  .continue-card .bar { margin-bottom: 12px !important; }
  .continue-card .btn { padding: 7px 12px; }
}
</style>

