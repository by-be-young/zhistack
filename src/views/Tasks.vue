<script setup>
import { computed, onMounted } from 'vue'
import { archive, save } from '../storage/archive.js'
import { useApp } from '../stores/app.js'
import { claim, achievementList, ensurePeriods } from '../core/tasks.js'
import { weekKey, weekLabel } from '../core/time.js'
import { toast } from '../core/toast.js'
import AppIcon from '../components/AppIcon.vue'
import ProgressRing from '../components/ProgressRing.vue'

const app = useApp()
const { tasks } = app

const achievements = computed(() => achievementList(archive))
const unlockedCount = computed(() => achievements.value.filter(a => a.at).length)
const dailyDone = computed(() => tasks.value.daily.filter(t => t.state.claimed).length)
const weekName = computed(() => weekLabel(weekKey()))

function claimOne(id) {
  const r = claim(archive, id)
  if (!r.ok) return
  toast(`领取 +${r.reward} 积分${r.bonus ? `，全清奖励 +${r.bonus}` : ''}`, 'info')
  save(true)
}

function pct(t) { return Math.min(100, (t.state.progress / t.def.target) * 100) }

function canClaim(t) { return !t.state.claimed && t.state.progress >= t.def.target }

onMounted(() => { ensurePeriods(archive); save() })
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">TASKS</div>
        <h1 class="page-title">任务与成就</h1>
        <p class="page-sub">日任务每天 04:00 重置，周任务按 ISO 周结算。任务奖励不占每日积分上限。</p>
      </div>
      <div style="flex: 1" />
      <div class="streak-box">
        <AppIcon name="flame" :size="16" />
        <b>{{ archive.profile.streak.current }}</b>
        <span class="tiny dim">天连续 · 最长 {{ archive.profile.streak.longest }}</span>
      </div>
    </div>

    <div class="grid g-main" style="align-items: start">
      <div class="stack">
        <section class="card card-pad">
          <div class="spread" style="margin-bottom: 12px">
            <div>
              <div class="card-label">DAILY</div>
              <h2 style="font-size: 18px">今日任务 {{ dailyDone }} / {{ tasks.daily.length }}</h2>
            </div>
            <span v-if="dailyDone === tasks.daily.length" class="chip active">
              <AppIcon name="check" :size="11" /> 已全清
            </span>
          </div>
          <div class="task-grid">
            <div v-for="t in tasks.daily" :key="t.def.id" class="t-card">
              <div class="t-head">
                <div class="t-icon"><AppIcon :name="t.def.icon" :size="16" /></div>
                <div style="flex: 1; min-width: 0">
                  <div class="t-title">{{ t.def.title }}</div>
                  <div class="tiny dim">{{ t.def.desc }}</div>
                </div>
                <span class="mono tiny dim">{{ t.state.progress }}/{{ t.def.target }}</span>
              </div>
              <div class="bar thin" style="margin: 10px 0"><i :style="{ width: pct(t) + '%' }" /></div>
              <div class="spread">
                <span class="tiny" style="color: var(--amber)">+{{ t.def.reward }} 积分</span>
                <button
                  class="btn btn-sm"
                  :class="t.state.claimed ? 'btn-text' : canClaim(t) ? 'btn-primary' : 'btn-ghost'"
                  :disabled="!canClaim(t)"
                  @click="claimOne(t.def.id)"
                >{{ t.state.claimed ? '已领取' : canClaim(t) ? '领取' : '进行中' }}</button>
              </div>
            </div>
          </div>
          <div class="all-bonus">
            <AppIcon name="gift" :size="14" />
            <span class="tiny">四个日任务全部领取后，额外奖励 <b class="mono" style="color: var(--amber)">+30</b> 积分</span>
          </div>
        </section>

        <section class="card card-pad">
          <div class="spread" style="margin-bottom: 12px">
            <div>
              <div class="card-label">WEEKLY · {{ weekName }}</div>
              <h2 style="font-size: 18px">本周任务</h2>
            </div>
            <span class="tiny dim">{{ app.claimedCount('weekly') }} / {{ tasks.weekly.length }}</span>
          </div>
          <div class="w-list">
            <div v-for="t in tasks.weekly" :key="t.def.id" class="w-row">
              <div class="t-icon"><AppIcon :name="t.def.icon" :size="16" /></div>
              <div style="flex: 1; min-width: 0">
                <div class="spread">
                  <span class="t-title">{{ t.def.title }}</span>
                  <span class="mono tiny dim">{{ t.state.progress }}/{{ t.def.target }}</span>
                </div>
                <div class="bar thin" style="margin-top: 7px"><i :style="{ width: pct(t) + '%' }" /></div>
              </div>
              <button
                class="btn btn-sm"
                :class="t.state.claimed ? 'btn-text' : canClaim(t) ? 'btn-primary' : 'btn-ghost'"
                :disabled="!canClaim(t)"
                @click="claimOne(t.def.id)"
              >
                {{ t.state.claimed ? '已领' : canClaim(t) ? `+${t.def.reward}` : '进行中' }}
              </button>
            </div>
          </div>
        </section>
      </div>

      <section class="card card-pad">
        <div class="spread">
          <div>
            <div class="card-label">ACHIEVEMENTS</div>
            <h2 style="font-size: 18px">成就 {{ unlockedCount }} / {{ achievements.length }}</h2>
          </div>
          <ProgressRing :value="Math.round(unlockedCount / achievements.length * 100)" :size="44" :stroke="3" color="lilac" />
        </div>
        <div class="ach-grid">
          <div v-for="a in achievements" :key="a.def.id" class="ach" :class="{ on: !!a.at }">
            <div class="ach-icon"><AppIcon :name="a.def.icon" :size="16" /></div>
            <div style="flex: 1; min-width: 0">
              <div class="tiny" style="font-weight: 600">{{ a.def.title }}</div>
              <div class="tiny dim">{{ a.def.desc }}</div>
              <div v-if="a.at" class="mono tiny" style="color: var(--mint); margin-top: 3px">{{ a.at.slice(0, 10) }}</div>
            </div>
            <span class="mono tiny dim">+{{ a.def.reward }}</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.streak-box { display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 9px; padding: 8px 14px; color: var(--amber); }
.streak-box b { font-size: 20px; font-variant-numeric: tabular-nums; }
.task-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.t-card { border: 1px solid var(--line); border-radius: 10px; padding: 12px 14px; background: var(--bg-2); }
.t-head { display: flex; align-items: center; gap: 10px; }
.t-icon { width: 30px; height: 30px; border-radius: 7px; background: var(--bg-1); border: 1px solid var(--line); display: grid; place-items: center; color: var(--text-2); flex: 0 0 auto; }
.t-title { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.all-bonus { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--line); color: var(--text-2); }
.w-list { display: flex; flex-direction: column; gap: 10px; }
.w-row { display: flex; align-items: center; gap: 10px; }
.ach-grid { display: flex; flex-direction: column; gap: 4px; margin-top: 12px; }
.ach { display: flex; align-items: center; gap: 10px; padding: 9px 6px; border-bottom: 1px dashed var(--line); }
.ach:last-child { border-bottom: 0; }
.ach-icon { width: 28px; height: 28px; border-radius: 7px; border: 1px solid var(--line); display: grid; place-items: center; color: var(--text-3); flex: 0 0 auto; }
.ach.on .ach-icon { color: var(--lilac); border-color: color-mix(in srgb, var(--lilac) 40%, var(--line)); background: color-mix(in srgb, var(--lilac) 8%, transparent); }
.ach:not(.on) { opacity: .5; }
@media (max-width: 900px) { .task-grid { grid-template-columns: minmax(0, 1fr); } }
</style>
