<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { archive } from '../storage/archive.js'
import { loadLastResult, createSession } from '../stores/practice.js'
import { questionById, subjectMap } from '../data/index.js'
import { subjectBreakdown } from '../core/grade.js'
import { secondsToClock } from '../core/time.js'
import QuestionCard from '../components/QuestionCard.vue'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const router = useRouter()

const full = computed(() => {
  const r = loadLastResult()
  return r && r.id === route.params.sid ? r : null
})
const summary = computed(() => archive.sessions.find(x => x.id === route.params.sid) || null)
const graded = computed(() => full.value?.graded || null)
const breakdown = computed(() => graded.value ? subjectBreakdown(graded.value.items) : {})

const wrongItems = computed(() => (graded.value?.items || []).filter(i => i.type !== 'subjective' && !i.correct))
const scored = computed(() => full.value?.graded?.score ?? summary.value?.score ?? 0)
const rawPoints = computed(() => full.value?.graded?.rawPoints ?? summary.value?.rawPoints ?? null)
const totalPoints = computed(() => full.value?.graded?.totalPoints ?? summary.value?.totalPoints ?? null)
const isPaper = computed(() => !!(full.value?.paperId || summary.value?.paperId))
const accuracy = computed(() => graded.value?.accuracy ?? summary.value?.accuracy ?? 0)
const duration = computed(() => {
  const sec = full.value?.durationSecUsed ?? summary.value?.durationSec ?? 0
  return secondsToClock(sec)
})

function retryWrong() {
  const kids = [...new Set(wrongItems.value.map(i => i.knowledgeId).filter(Boolean))]
  if (!kids.length) return
  const s = createSession({
    mode: 'mistake', subjects: [...new Set(wrongItems.value.map(i => questionById[i.qid]?.subject).filter(Boolean))],
    count: wrongItems.value.length, knowledgeIds: kids, title: '错题重练'
  })
  if (s) router.push(`/practice/session/${s.id}`)
}

function summaryText() {
  const g = graded.value
  if (!g) return ''
  if (accuracy.value >= 85) return '这一套的状态很稳，错题质量比数量更值得看。'
  if (accuracy.value >= 60) return '基础题站住了，接下来重点处理下面标红的考点。'
  return '先别急着加量，把错题涉及的知识点各回看一遍再练。'
}

onMounted(() => {})
</script>

<template>
  <div class="page result-page" v-if="summary || full">
    <div class="page-head">
      <div>
        <div class="eyebrow">RESULT · {{ (summary?.mode || 'practice').toUpperCase() }}</div>
        <h1 class="page-title">{{ summary?.title || '练习复盘' }}</h1>
        <div class="head-stats">
          <span><b>{{ summary?.count }}</b> 题</span>
          <span>用时 {{ duration }}</span>
          <span>{{ summary?.subjects?.map(x => subjectMap[x]?.short).join(' / ') }}</span>
          <span v-if="isPaper">自评计分</span>
        </div>
      </div>
      <div style="flex: 1" />
      <div class="row">
        <router-link :to="isPaper ? '/papers' : '/practice'" class="btn btn-ghost">{{ isPaper ? '再选一套' : '再练一套' }}</router-link>
        <button v-if="wrongItems.length" class="btn btn-primary" @click="retryWrong">
          <AppIcon name="alert" :size="14" /> 重练错题 {{ wrongItems.length }}
        </button>
      </div>
    </div>

    <section class="hero card">
      <div class="hero-score">
        <div class="mono tiny dim">{{ isPaper ? '卷面得分' : '得分' }}</div>
        <div class="score-num">{{ isPaper ? rawPoints : scored }}</div>
        <div class="tiny dim">{{ isPaper ? `/ ${totalPoints} 分 · 折合 ${scored}%` : '满分 100' }}</div>
      </div>
      <div class="hero-stats">
        <div class="hs">
          <span class="mono tiny dim">正确率</span>
          <b>{{ accuracy }}%</b>
        </div>
        <div class="hs">
          <span class="mono tiny dim">全对题</span>
          <b>{{ graded?.correctCount ?? summary?.correct }}<small>/ {{ summary?.count }}</small></b>
        </div>
        <div class="hs">
          <span class="mono tiny dim">未答</span>
          <b>{{ (graded?.total ?? summary?.count) - (graded?.answered ?? summary?.count) }}</b>
        </div>
        <div class="hs" v-if="full?.summary">
          <span class="mono tiny dim">本次积分</span>
          <b style="color: var(--amber)">+{{ full.summary.gained }}</b>
        </div>
        <div class="hs" v-if="full?.summary?.streak?.isNew">
          <span class="mono tiny dim">连续</span>
          <b style="color: var(--mint)">{{ full.summary.streak.current }} 天</b>
        </div>
      </div>
    </section>

    <p class="verdict">{{ summaryText() }}</p>

    <div v-if="graded" class="grid g-2" style="margin-bottom: 16px">
      <section class="card card-pad">
        <div class="card-label">BY SUBJECT</div>
        <div class="subject-bars">
          <div v-for="(v, sid) in breakdown" :key="sid" class="sb">
            <div class="spread tiny">
              <span>{{ subjectMap[sid]?.short }}</span>
              <span class="mono">{{ v.correct }}/{{ v.total }}</span>
            </div>
            <div class="bar thin"><i :style="{ width: (v.correct / v.total * 100) + '%', background: `var(--sub-${sid})` }" /></div>
          </div>
        </div>
      </section>
      <section class="card card-pad">
        <div class="card-label">REWARD</div>
        <div v-if="full?.summary" class="reward-list">
          <div class="tiny dim">答对 +{{ full.summary.gained }} 积分（含题目、会话与错题出本）</div>
          <div v-for="id in full.summary.unlocked?.slice(0, 3)" :key="id" class="chip lilac">{{ id }}</div>
          <div v-if="full.summary.newMistakes?.length" class="tiny" style="color: var(--rose)">
            新增 {{ full.summary.newMistakes.length }} 道错题，已进入错题本
          </div>
          <div v-if="full.summary.cleared?.length" class="tiny" style="color: var(--mint)">
            {{ full.summary.cleared.length }} 道错题连续答对两次，已出本
          </div>
        </div>
        <div v-else class="tiny dim">本次为历史记录，仅保留摘要。</div>
      </section>
    </div>

    <section v-if="graded" class="card card-pad">
      <div class="spread" style="margin-bottom: 10px">
        <div>
          <div class="card-label">REVIEW</div>
          <h2 style="font-size: 18px">逐题解析</h2>
        </div>
        <span class="tiny dim">展开即可看答案与解析</span>
      </div>
      <div class="review-list">
        <QuestionCard
          v-for="(it, i) in graded.items" :key="it.qid"
          :q="questionById[it.qid]" :selected="it.type === 'subjective' ? it.text : it.keys" show-result :result="it" :index="i" :total="graded.total"
        />
      </div>
    </section>

    <section v-else class="card card-pad">
      <EmptyState icon="info" title="仅保留本次摘要" text="逐题解析随下一次交卷覆盖。若需长期复盘，可在错题本中查看。" />
    </section>
  </div>
  <div v-else class="page">
    <EmptyState icon="alert" title="找不到这次练习" text="可能已被清理，或链接不完整。">
      <router-link to="/practice" class="btn btn-primary btn-sm">回到练习中心</router-link>
    </EmptyState>
  </div>
</template>

<style scoped>
.hero { display: flex; align-items: stretch; padding: 0; overflow: hidden; }
.hero-score { padding: 26px 32px; border-right: 1px dashed var(--line); text-align: center; min-width: 160px; display: flex; flex-direction: column; justify-content: center; }
.score-num { font-family: var(--font-display); font-size: 56px; line-height: 1; margin: 6px 0; font-variant-numeric: tabular-nums; }
.hero-stats { display: flex; flex-wrap: wrap; gap: 34px; align-items: center; padding: 24px 32px; flex: 1; }
.hs { display: flex; flex-direction: column; gap: 4px; }
.hs b { font-size: 22px; font-variant-numeric: tabular-nums; }
.hs small { font-size: 12px; color: var(--text-3); font-weight: 400; }
.verdict { font-size: 14px; color: var(--text-2); margin: 16px 2px 18px; }
.subject-bars { display: flex; flex-direction: column; gap: 14px; margin-top: 12px; }
.reward-list { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; align-items: flex-start; }
.review-list { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
@media (max-width: 900px) {
  .hero { flex-direction: column; }
  .hero-score { border-right: 0; border-bottom: 1px dashed var(--line); padding: 20px; }
  .hero-stats { padding: 18px 20px; gap: 20px; }
}
</style>
