<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { archive } from '../storage/archive.js'
import { useApp } from '../stores/app.js'
import { subjectMap, subjects, knowledge } from '../data/index.js'
import { createSession } from '../stores/practice.js'
import { weekSummary } from '../core/stats.js'
import { toast } from '../core/toast.js'
import RadarChart from '../components/RadarChart.vue'
import Heatmap from '../components/Heatmap.vue'
import ProgressRing from '../components/ProgressRing.vue'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'

const router = useRouter()
const app = useApp()

const days = computed(() => app.trend(21))
const maxAnswered = computed(() => Math.max(1, ...days.value.map(d => d.answered)))
const radarData = computed(() => app.radar())
const weakItems = computed(() => {
  const w = app.weak.value
  return w.coldStart ? [] : w.items
})
const mistakeTop = computed(() => app.mistakeTop(8))
const agg = computed(() => app.subjectAgg.value)
const week = computed(() => weekSummary(archive))

const totals = computed(() => archive.profile.totals)
const hours = computed(() => Math.round((totals.value.seconds || 0) / 360) / 10)
const overallAcc = computed(() => totals.value.answered ? Math.round(totals.value.correct / totals.value.answered * 100) : 0)

const firmCount = computed(() => Object.values(archive.knowledge).filter(s => {
  return s.attempts >= 3 && s.correct / s.attempts >= 0.75
}).length)

function practiceWeak(kid) {
  const k = app.weak.value.items.find(x => x.knowledge.id === kid)?.knowledge
  const s = createSession({ mode: 'weak', subjects: [k.subject], count: 8, knowledgeIds: [kid], title: '薄弱专项' })
  if (s) router.push(`/practice/session/${s.id}`)
}

function startAllWeak() {
  const kids = weakItems.value.map(x => x.knowledge.id)
  if (!kids.length) { toast('暂无薄弱项，先做一套练习', 'info'); return }
  const s = createSession({ mode: 'weak', subjects: archive.settings.subjects, count: 10, knowledgeIds: kids, title: '薄弱综合' })
  if (s) router.push(`/practice/session/${s.id}`)
}
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">STATS</div>
        <h1 class="page-title">学习统计</h1>

      </div>
      <div style="flex: 1" />
      <button class="btn btn-ghost" @click="startAllWeak"><AppIcon name="target" :size="14" /> 薄弱综合练习</button>
    </div>

    <div class="grid g-4" style="margin-bottom: 16px">
      <div class="card card-pad">
        <div class="card-label">TOTAL</div>
        <div class="big-num">{{ totals.answered }}<span class="tiny dim">题</span></div>
        <div class="tiny dim">累计 {{ totals.sessions }} 套 · {{ hours }} 小时</div>
      </div>
      <div class="card card-pad">
        <div class="card-label">ACCURACY</div>
        <div class="big-num">{{ overallAcc }}<span class="tiny dim">%</span></div>
        <div class="tiny dim">全对口径 · 含多选漏选按错</div>
      </div>
      <div class="card card-pad">
        <div class="card-label">THIS WEEK</div>
        <div class="big-num">{{ week.answered }}<span class="tiny dim">题</span></div>
        <div class="tiny dim">活跃 {{ week.activeDays }} 天 · 正确率 {{ week.accuracy }}%</div>
      </div>
      <div class="card card-pad">
        <div class="card-label">FIRM POINTS</div>
        <div class="big-num">{{ firmCount }}<span class="tiny dim">/ {{ knowledge.length }}</span></div>
        <div class="tiny dim">3 题以上且正确率 ≥ 75%</div>
      </div>
    </div>

    <div class="grid g-2" style="margin-bottom: 16px; align-items: stretch">
      <section class="card card-pad">
        <div class="spread">
          <div>
            <div class="card-label">TREND · 21 DAYS</div>
            <h2 style="font-size: 18px">每日题量</h2>
          </div>
          <span class="tiny dim">峰值 {{ maxAnswered }}</span>
        </div>
        <div class="trend">
          <div v-for="d in days" :key="d.key" class="tbar-wrap" :title="`${d.label} · ${d.answered} 题 · ${d.accuracy}%`">
            <div class="tbar" :style="{ height: (d.answered / maxAnswered * 100) + '%' }" :class="{ zero: !d.answered }">
              <i v-if="d.answered" :style="{ height: (d.accuracy ? d.accuracy : 0) + '%' }" />
            </div>
            <span class="tiny dim tl">{{ d.label.split('/')[1] }}</span>
          </div>
        </div>
        <div class="row tiny dim" style="gap: 14px; margin-top: 10px">
          <span><i class="lg bar" />题量</span>
          <span><i class="lg acc" />正确率高度</span>
        </div>
      </section>

      <section class="card card-pad radar-card">
        <div class="card-label">RADAR</div>
        <h2 style="font-size: 18px; margin-bottom: 4px">各科掌握度</h2>
        <RadarChart :data="radarData" :size="280" />
        <div class="radar-legend">
          <div v-for="s in subjects" :key="s.id" class="tiny">
            <span class="dot" :style="{ background: `var(--sub-${s.id})` }" />
            {{ s.short }}
            <span class="mono dim">{{ agg[s.id]?.mastery == null ? '—' : agg[s.id].mastery + '%' }}</span>
          </div>
        </div>
      </section>
    </div>

    <section class="card card-pad" style="margin-bottom: 16px">
      <div class="card-label">BY SUBJECT</div>
      <h2 style="font-size: 18px; margin-bottom: 12px">科目面板</h2>
      <div class="table-scroll"><table class="table">
        <thead>
          <tr>
            <th>科目</th>
            <th>掌握度</th>
            <th class="num">答题</th>
            <th class="num">正确率</th>
            <th class="num">未出本</th>
            <th class="num">会话</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in subjects" :key="s.id">
            <td>
              <span class="chip sub-chip" :style="{ '--sub': `var(--sub-${s.id})` }"><span class="dot" />{{ s.name }}</span>
            </td>
            <td style="min-width: 140px">
              <div class="row" style="gap: 8px">
                <div class="bar thin" style="flex: 1"><i :style="{ width: (agg[s.id]?.mastery || 0) + '%', background: `var(--sub-${s.id})` }" /></div>
                <span class="mono tiny">{{ agg[s.id]?.mastery == null ? '未练' : agg[s.id].mastery + '%' }}</span>
              </div>
            </td>
            <td class="num mono">{{ agg[s.id]?.attempts || 0 }}</td>
            <td class="num mono">{{ agg[s.id]?.accuracy == null ? '—' : agg[s.id].accuracy + '%' }}</td>
            <td class="num mono" :style="{ color: agg[s.id]?.open ? 'var(--rose)' : '' }">{{ agg[s.id]?.open || 0 }}</td>
            <td class="num mono">{{ archive.profile.subjectStats[s.id]?.sessions || 0 }}</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <div class="grid g-main" style="align-items: start">
      <section class="card card-pad">
        <div class="spread" style="margin-bottom: 8px">
          <div>
            <div class="card-label">WEAKNESS</div>
            <h2 style="font-size: 18px">薄弱排行</h2>
          </div>

        </div>
        <div v-if="weakItems.length" class="weak-table">
          <div v-for="(w, i) in weakItems" :key="w.knowledge.id" class="wk-row">
            <span class="mono rank">{{ String(i + 1).padStart(2, '0') }}</span>
            <div style="flex: 1; min-width: 0">
              <div class="row" style="gap: 6px">
                <span class="chip tiny">{{ subjectMap[w.knowledge.subject]?.short }}</span>
                <router-link :to="`/knowledge/${w.knowledge.id}`" class="wk-title">{{ w.knowledge.title }}</router-link>
              </div>
              <div class="row tiny dim" style="gap: 10px; margin-top: 4px">
                <span v-for="(r, j) in w.reasons.slice(0, 2)" :key="j">· {{ r }}</span>
              </div>
            </div>
            <ProgressRing :value="w.mastery.mastery" :size="40" :stroke="3" :color="w.mastery.mastery < 45 ? 'rose' : 'amber'" />
            <button class="btn btn-ghost btn-sm" @click="practiceWeak(w.knowledge.id)">练</button>
          </div>
        </div>
        <EmptyState v-else icon="target" title="还没有诊断数据" text="先练一套。" />
      </section>

      <div class="stack">
        <section class="card card-pad">
          <div class="card-label">MISTAKE TOP</div>
          <h2 style="font-size: 18px; margin-bottom: 10px">错题集中区</h2>
          <div v-if="mistakeTop.length" class="mt-list">
            <div v-for="m in mistakeTop" :key="m.knowledgeId" class="mt-row">
              <router-link :to="`/knowledge/${m.knowledgeId}`" class="tiny" style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">{{ m.title }}</router-link>
              <div class="bar thin" style="width: 80px"><i :style="{ width: Math.min(100, m.count * 12) + '%', background: 'var(--rose)' }" /></div>
              <span class="mono tiny" style="color: var(--rose)">{{ m.count }}</span>
            </div>
          </div>
          <div v-else class="tiny dim" style="padding: 10px 0">暂无未出本错题。</div>
        </section>

        <section class="card card-pad">
          <div class="card-label">HEATMAP · 16 WEEKS</div>
          <Heatmap :columns="app.heatmap(16).columns" />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-scroll { overflow-x: auto; }
.big-num { font-size: 34px; line-height: 1.15; font-variant-numeric: tabular-nums; margin: 4px 0 6px; }
.big-num span { margin-left: 4px; }
.trend { display: flex; align-items: flex-end; gap: 3px; height: 150px; margin-top: 18px; }
.tbar-wrap { flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; position: relative; }
.tbar { background: color-mix(in srgb, var(--sky) 22%, transparent); border-radius: 3px 3px 0 0; position: relative; min-height: 2px; overflow: hidden; }
.tbar i { position: absolute; bottom: 0; left: 0; right: 0; background: color-mix(in srgb, var(--mint) 32%, transparent); }
.tbar.zero { background: var(--line); }
.tl { text-align: center; margin-top: 4px; font-size: 9px; }
.lg { width: 8px; height: 8px; display: inline-block; border-radius: 2px; margin-right: 4px; }
.lg.bar { background: color-mix(in srgb, var(--sky) 30%, transparent); }
.lg.acc { background: color-mix(in srgb, var(--mint) 40%, transparent); }
.radar-card { display: flex; flex-direction: column; align-items: center; }
.radar-card > .card-label, .radar-card > h2 { align-self: flex-start; }
.radar-legend { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 16px; width: 100%; margin-top: 10px; }
.dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; margin-right: 5px; }
.weak-table { display: flex; flex-direction: column; }
.wk-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px dashed var(--line); }
.wk-row:last-child { border-bottom: 0; }
.rank { color: var(--text-3); font-size: 11px; }
.wk-title { font-size: 13.5px; color: var(--text); }
body:not(.ink-pen-lock) .wk-title:hover { color: var(--mint); }
@media (max-width: 640px) {
  .big-num { font-size: 28px; }
  .radar-card :deep(svg) { max-width: 100%; height: auto; }
  .wk-row { gap: 8px; }
}
.mt-list { display: flex; flex-direction: column; gap: 9px; }
.mt-row { display: flex; align-items: center; gap: 10px; font-size: 12px; }
</style>
