<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { archive, save } from '../storage/archive.js'
import { questionById, subjectMap, subjects, knowledgeById } from '../data/index.js'
import { createSession } from '../stores/practice.js'
import { relativeDay, nowISO } from '../core/time.js'
import { toast } from '../core/toast.js'
import QuestionCard from '../components/QuestionCard.vue'
import EmptyState from '../components/EmptyState.vue'
import AppIcon from '../components/AppIcon.vue'

const router = useRouter()
const stageTab = ref('open')
const subject = ref('')
const expanded = ref(null)

const stageMeta = {
  new: { label: '待重做', color: 'rose' },
  reviewing: { label: '复习中', color: 'amber' },
  mastered: { label: '已出本', color: 'mint' }
}

const all = computed(() => Object.values(archive.mistakes).map(m => ({
  ...m,
  q: questionById[m.qid],
  knowledge: knowledgeById[m.knowledgeId]
})).filter(m => m.q))

const openList = computed(() => all.value.filter(m => m.stage !== 'mastered'))
const masteredList = computed(() => all.value.filter(m => m.stage === 'mastered'))

const list = computed(() => {
  let arr = stageTab.value === 'open' ? openList.value : masteredList.value
  if (subject.value) arr = arr.filter(m => m.q.subject === subject.value)
  return arr.sort((a, b) => new Date(b.lastAt) - new Date(a.lastAt))
})

const counts = computed(() => {
  const c = { open: openList.value.length, mastered: masteredList.value.length }
  for (const m of openList.value) c[m.stage] = (c[m.stage] || 0) + 1
  return c
})

function toggle(qid) {
  expanded.value = expanded.value === qid ? null : qid
}

function practiceOne(m) {
  const kids = [m.knowledgeId]
  const s = createSession({ mode: 'mistake', subjects: [m.q.subject], count: 1, knowledgeIds: kids, title: '单题重练' })
  if (s) router.push(`/practice/session/${s.id}`)
}

function practiceAll() {
  const kids = [...new Set(openList.value.map(m => m.knowledgeId))]
  if (!kids.length) return
  const s = createSession({
    mode: 'mistake', subjects: subject.value ? [subject.value] : archive.settings.subjects,
    count: 10, knowledgeIds: kids, title: '错题重练'
  })
  if (s) router.push(`/practice/session/${s.id}`)
}

function markMastered(m) {
  const rec = archive.mistakes[m.qid]
  if (!rec) return
  rec.stage = 'mastered'
  rec.releasedAt = nowISO()
  rec.rightStreak = Math.max(2, rec.rightStreak || 0)
  archive.profile.clearedCount = (archive.profile.clearedCount || 0) + 1
  save(true)
  toast('已移出练习队列，可在「已出本」里找回', 'info')
}

function restore(m) {
  const rec = archive.mistakes[m.qid]
  if (!rec) return
  rec.stage = 'new'
  rec.rightStreak = 0
  rec.releasedAt = null
  save(true)
  toast('已放回错题队列', 'info')
}

function clearAllMastered() {
  for (const m of masteredList.value) delete archive.mistakes[m.qid]
  save(true)
  toast('已清理出本记录', 'info')
}
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">MISTAKES</div>
        <h1 class="page-title">错题本</h1>

      </div>
      <div style="flex: 1" />
      <button class="btn btn-primary" :disabled="!openList.length" @click="practiceAll">
        <AppIcon name="play" :size="14" /> 练全部未出本（{{ openList.length }}）
      </button>
    </div>

    <div class="stat-strip">
      <div class="ss"><span class="mono tiny dim">待重做</span><b>{{ counts.new || 0 }}</b></div>
      <div class="ss"><span class="mono tiny dim">复习中</span><b>{{ counts.reviewing || 0 }}</b></div>
      <div class="ss"><span class="mono tiny dim">已出本</span><b>{{ counts.mastered }}</b></div>
      <div class="ss"><span class="mono tiny dim">累计出本</span><b>{{ archive.profile.clearedCount || 0 }}</b></div>
    </div>

    <div class="row filter-row" style="margin: 14px 0">
      <button class="chip clickable" :class="{ active: stageTab === 'open' }" @click="stageTab = 'open'">未出本 {{ counts.open }}</button>
      <button class="chip clickable" :class="{ active: stageTab === 'mastered' }" @click="stageTab = 'mastered'">已出本 {{ counts.mastered }}</button>
      <span style="width: 1px; height: 18px; background: var(--line)" />
      <button class="chip clickable" :class="{ active: !subject }" @click="subject = ''">全部科目</button>
      <button
        v-for="s in subjects" :key="s.id"
        class="chip clickable" :class="{ active: subject === s.id }"
        @click="subject = subject === s.id ? '' : s.id"
      >{{ s.short }}</button>
      <div style="flex: 1" />
      <button v-if="stageTab === 'mastered' && counts.mastered" class="btn btn-text btn-sm" @click="clearAllMastered">清空出本记录</button>
    </div>

    <div v-if="list.length" class="m-list">
      <article v-for="m in list" :key="m.qid" class="card card-pad m-card">
        <div class="spread" style="gap: 10px">
          <div class="row" style="gap: 8px">
            <span class="chip sub-chip" :style="{ '--sub': `var(--sub-${m.q.subject})` }"><span class="dot" />{{ subjectMap[m.q.subject]?.short }}</span>
            <span class="chip" :class="stageMeta[m.stage]?.color">{{ stageMeta[m.stage]?.label }}</span>
            <span class="mono tiny dim">{{ m.qid.toUpperCase() }}</span>
          </div>
          <div class="tiny dim">错 {{ m.count }} 次 · {{ relativeDay(m.lastAt) }} <span v-if="m.rightStreak">· 连对 {{ m.rightStreak }}/2</span></div>
        </div>

        <div class="m-stem" @click="toggle(m.qid)">
          <router-link v-if="m.knowledge" :to="`/knowledge/${m.knowledge.id}`" class="tiny" style="color: var(--mint)" @click.stop>
            {{ m.knowledge.title }}
          </router-link>
          <span class="sep tiny dim">/</span>
          <span>{{ m.q.stem }}</span>
        </div>

        <div v-if="expanded === m.qid" style="margin-top: 12px">
          <QuestionCard :q="m.q" :selected="m.lastKeys || []" show-result :result="{ keys: m.lastKeys || [], correct: false, answered: true }" />
        </div>

        <div class="m-actions">
          <button class="btn btn-ghost btn-sm" @click="toggle(m.qid)">{{ expanded === m.qid ? '收起解析' : '展开解析' }}</button>
          <button class="btn btn-primary btn-sm" @click="practiceOne(m)">再练一次</button>
          <button v-if="m.stage !== 'mastered'" class="btn btn-text btn-sm" @click="markMastered(m)">我记住了</button>
          <button v-else class="btn btn-text btn-sm" @click="restore(m)">放回队列</button>
        </div>
      </article>
    </div>
    <div v-else class="card">
      <EmptyState
        icon="check" :title="stageTab === 'open' ? '错题本已清空' : '还没有出本记录'"
        :text="stageTab === 'open' ? '去练一套。' : '连对两次自动出本。'"
      />
    </div>
  </div>
</template>

<style scoped>
.stat-strip { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
.ss { border: 1px solid var(--line); border-radius: 10px; padding: 12px 16px; display: flex; flex-direction: column; gap: 4px; background: var(--bg-1); }
.ss b { font-size: 24px; font-variant-numeric: tabular-nums; }
.m-list { display: flex; flex-direction: column; gap: 10px; }
.m-stem { margin-top: 12px; font-size: 14px; line-height: 1.7; color: var(--text-2); cursor: pointer; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.m-stem:hover { color: var(--text); }
.sep { margin: 0 6px; }
.m-actions { display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap; }
@media (max-width: 640px) {
  .stat-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .ss { padding: 9px 12px; }
  .ss b { font-size: 20px; }
  .filter-row { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
  .filter-row::-webkit-scrollbar { display: none; }
  .filter-row > * { flex: 0 0 auto; }
  .filter-row > div[style*="flex: 1"] { display: none; }
  .m-stem { font-size: 13px; }
  .m-actions .btn { flex: 1; justify-content: center; }
}
</style>
