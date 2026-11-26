<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { practice, resumeDraft, pickAnswer, setTextAnswer, clearAnswer, toggleMark, goTo, next, prev, tick, submitSession, discardDraft, persistDraft, setSelfGrades } from '../stores/practice.js'
import { archive } from '../storage/archive.js'
import { questionById, subjectMap, paperById } from '../data/index.js'
import { toast } from '../core/toast.js'
import QuestionCard from '../components/QuestionCard.vue'
import QuestionNav from '../components/QuestionNav.vue'
import TimerRing from '../components/TimerRing.vue'
import ModalDialog from '../components/ModalDialog.vue'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'
import RichText from '../components/RichText.vue'
import MaterialPane from '../components/MaterialPane.vue'
import InkPad from '../components/InkPad.vue'

const route = useRoute()
const router = useRouter()

const error = ref('')
const showSubmit = ref(false)
const showGrade = ref(false)
const showCard = ref(false)
const showQuit = ref(false)
const autoSubmitting = ref(false)
const selfGrades = ref({})
const materialOpen = ref(true)

const s = computed(() => practice.session)
const titleShort = computed(() => {
  const cur = s.value
  if (!cur) return ''
  const raw = (cur.paperId && paperById[cur.paperId]?.short) || cur.title || '练习'
  return raw.replace(' 原卷', '').replace('数学（一）', '数一').replace('英语（一）', '英一')
})
const qid = computed(() => s.value?.qids[s.value.index])
const current = computed(() => qid.value ? questionById[qid.value] : null)
const inkKey = computed(() => {
  if (!s.value) return ''
  const cur = current.value
  if (!cur) return ''
  const pid = cur.paperId || s.value.paperId || 'practice'
  // 共用同一材料的小题共用一张草稿；材料不同（含无材料题目）各自一张
  return cur.material?.key ? `${pid}:m:${cur.material.key}` : `${pid}:q:${cur.id}`
})
const inkDisabled = computed(() => showSubmit.value || showGrade.value || showQuit.value || showCard.value)
const selected = computed(() => (qid.value && s.value?.answers[qid.value]) || [])
const subjectiveList = computed(() => (s.value?.qids || []).map(id => questionById[id]).filter(q => q?.type === 'subjective'))
const answeredCount = computed(() => s.value ? Object.values(s.value.answers).filter(a => (typeof a === 'string' ? a.trim() : a.length)).length : 0)
const unanswered = computed(() => (s.value?.count || 0) - answeredCount.value)

watch(() => current.value?.material?.key || qid.value, () => { materialOpen.value = true })

let timer = null

function onSelect(key) {
  if (!current.value) return
  pickAnswer(current.value.id, key, current.value.type)
}

function onText(text) {
  if (!current.value) return
  setTextAnswer(current.value.id, text)
}

function beginSubmit() {
  showSubmit.value = false
  if (!subjectiveList.value.length) { doSubmit(false); return }
  const init = {}
  for (const q of subjectiveList.value) {
    init[q.id] = s.value.selfGrades?.[q.id] ?? 0
  }
  selfGrades.value = init
  showGrade.value = true
}

function gradeRatio(qid) {
  const v = Number(selfGrades.value[qid])
  return Number.isFinite(v) ? v : 0
}

function setRatio(qid, pct) {
  selfGrades.value[qid] = pct / 100
  setSelfGrades(selfGrades.value)
}

function confirmGrades() {
  setSelfGrades(selfGrades.value)
  showGrade.value = false
  doSubmit(false)
}

function doSubmit(auto = false) {
  if (!s.value) return
  showSubmit.value = false
  autoSubmitting.value = true
  const r = submitSession({ auto })
  if (!r) { autoSubmitting.value = false; return }
  router.replace(`/practice/result/${r.id}`)
}

function clearCurrent() {
  if (!current.value) return
  clearAnswer(current.value.id)
}

function requestQuit() {
  showQuit.value = true
}

function quit() {
  discardDraft()
  showQuit.value = false
  router.push('/practice')
}

function onKey(e) {
  if (!s.value || showSubmit.value || showQuit.value) return
  const tag = document.activeElement?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA') return
  if (e.altKey && e.key.toLowerCase() === 'm' && current.value?.material) {
    materialOpen.value = !materialOpen.value
    e.preventDefault()
    return
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { next(); return }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { prev(); return }
  if (/^[1-8]$/.test(e.key) && current.value) {
    const opts = current.value.type === 'judge' ? ['T', 'F'] : (current.value.options || []).map(o => o.key)
    const k = opts[Number(e.key) - 1]
    if (k) onSelect(k)
  } else if (e.key.toLowerCase() === 'm') {
    if (qid.value) toggleMark(qid.value)
  }
}

onMounted(() => {
  if (!practice.session || practice.session.id !== route.params.sid) {
    const d = resumeDraft()
    if (!d || d.id !== route.params.sid) {
      if (archive.lastResult?.id === route.params.sid) {
        router.replace(`/practice/result/${route.params.sid}`)
        return
      }
      error.value = '这套练习已结束或草稿已过期'
      return
    }
  }
  timer = setInterval(() => {
    if (!practice.session || practice.session.finished) return
    const r = tick(1)
    if (r === 'timeout') {
      clearInterval(timer)
      toast('时间到，已自动交卷', 'warn')
      doSubmit(true)
    }
  }, 1000)
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener('keydown', onKey)
  persistDraft(true)
})
</script>

<template>
  <div v-if="s" class="session-page">
    <header class="s-top">
      <div class="row" style="gap: 10px; min-width: 0">
        <button class="icon-btn" aria-label="退出" @click="requestQuit"><AppIcon name="arrow-left" :size="16" /></button>
        <div class="s-title-wrap">
          <div class="s-title">{{ titleShort }}</div>
          <div class="s-top-sub mono tiny dim">{{ s.count }} 题 · {{ s.subjects.map(x => subjectMap[x]?.short).join(' / ') }} · 已答 {{ answeredCount }}</div>
        </div>
      </div>
      <div class="row" style="gap: 14px">
        <TimerRing :left-sec="s.leftSec" :total-sec="s.durationMin * 60" :unlimited="!s.durationMin" />
        <button v-if="current?.material" class="btn btn-ghost btn-sm top-icon-btn" @click="materialOpen = !materialOpen">
          <AppIcon name="bookopen" :size="14" /><span>{{ materialOpen ? '收起' : '材料' }}</span>
        </button>
        <button class="btn btn-ghost btn-sm answer-card-btn top-icon-btn" @click="showCard = true">
          <AppIcon name="grid" :size="14" /><span>答题卡</span>
        </button>
        <button class="btn btn-primary btn-sm top-submit" :disabled="autoSubmitting" @click="showSubmit = true">
          {{ autoSubmitting ? '提交中…' : '交卷' }}
        </button>
      </div>
    </header>

    <div class="s-progress"><i :style="{ width: ((s.index + 1) / s.count * 100) + '%' }" /></div>

    <main class="s-main" :class="{ 'has-material': current?.material && materialOpen, 'material-wide': current?.material?.wide }">
      <MaterialPane
        v-if="current?.material && materialOpen"
        class="s-material"
        :material="current.material"
        :reset-key="current.material.key || qid"
        :focus="current.material.autoFocus ? current.number : 0"
        @close="materialOpen = false"
      />

      <div class="s-question" v-if="current">
        <div v-if="current.material && !materialOpen" class="material-strip">
          <span class="tiny dim">材料已收起</span>
          <button class="btn btn-text btn-sm" @click="materialOpen = true">展开材料 <AppIcon name="arrow-right" :size="13" /></button>
        </div>

        <QuestionCard
          :q="current" :selected="current.type === 'subjective' ? (s.answers[qid] || '') : selected" :index="s.index" :total="s.count"
          @select="onSelect" @text="onText"
        />
        <div class="s-actions">
          <button class="btn btn-ghost btn-sm" :disabled="s.index === 0" @click="prev">
            <AppIcon name="chevron-left" :size="15" /> 上一题
          </button>
          <button class="btn btn-text btn-sm" @click="clearCurrent">清除本题</button>
          <button
            class="btn btn-sm" :class="s.marked[qid] ? 'btn-primary' : 'btn-ghost'"
            @click="toggleMark(qid)"
          >
            <AppIcon name="flag" :size="14" /> {{ s.marked[qid] ? '已标记' : '标记' }}
          </button>
          <div style="flex: 1" />
          <button v-if="s.index < s.count - 1" class="btn btn-primary btn-sm" @click="next">
            下一题 <AppIcon name="chevron-right" :size="15" />
          </button>
          <button v-else class="btn btn-primary btn-sm" @click="showSubmit = true">完成并交卷</button>
        </div>
      </div>

      <aside class="s-side card card-pad">
        <QuestionNav :qids="s.qids" :answers="s.answers" :marked="s.marked" :index="s.index" @go="goTo" />
        <div class="side-legend tiny dim">
          <span><i class="lg done" />已答</span>
          <span><i class="lg" />未答</span>
          <span><i class="lg flag" />标记</span>
        </div>
        <button class="btn btn-primary btn-block btn-sm" style="margin-top: 12px" @click="showSubmit = true">交卷</button>
      </aside>
    </main>

    <InkPad :layer-key="inkKey" :disabled="inkDisabled" />

    <ModalDialog :open="showSubmit" title="确认交卷" width="420" @close="showSubmit = false">
      <div class="tiny dim" style="line-height: 1.9">
        <div>共 {{ s.count }} 题，已答 {{ answeredCount }} 题。</div>
        <div v-if="unanswered" style="color: var(--amber)">还有 {{ unanswered }} 题未答，未答按错题计。</div>
        <div v-else style="color: var(--mint)">全部作答完毕。</div>
      </div>
      <template #footer>
        <button class="btn btn-text" @click="showSubmit = false">继续答题</button>
        <button class="btn btn-primary" @click="beginSubmit">确认交卷</button>
      </template>
    </ModalDialog>

    <ModalDialog :open="showGrade" title="主观题自评" width="760" @close="showGrade = false">
      <p class="small muted" style="margin-bottom: 14px">
        对照参考答案，为每道主观题选择得分比例。系统按“满分 × 比例”计分，60% 及以上计入答对；未作答或 0% 计 0 分。
      </p>
      <div class="grade-list">
        <div v-for="q in subjectiveList" :key="q.id" class="grade-item">
          <div class="spread" style="align-items: flex-start; gap: 12px">
            <div>
              <div class="mono tiny dim">第 {{ q.number }} 题 · 满分 {{ q.score }} 分</div>
              <div style="font-weight: 600; margin-top: 2px">{{ q.title || '主观题' }}</div>
            </div>
            <span class="chip" :class="gradeRatio(q.id) >= 0.6 ? 'active' : 'rose'">{{ Math.round(gradeRatio(q.id) * 100) }}%</span>
          </div>
          <div class="grade-ref"><RichText :text="q.referenceAnswer" /></div>
          <div class="grade-actions">
            <button
              v-for="p in [0, 20, 40, 60, 80, 100]" :key="p"
              class="chip clickable" :class="{ active: Math.round(gradeRatio(q.id) * 100) === p }"
              @click="setRatio(q.id, p)"
            >{{ p }}%</button>
            <span class="tiny dim">本题得分 {{ Math.round(q.score * gradeRatio(q.id) * 10) / 10 }} / {{ q.score }}</span>
          </div>
        </div>
      </div>
      <template #footer>
        <button class="btn btn-text" @click="showGrade = false">返回修改</button>
        <button class="btn btn-primary" @click="confirmGrades">完成自评并交卷</button>
      </template>
    </ModalDialog>

    <ModalDialog :open="showQuit" title="退出本次练习" width="420" @close="showQuit = false">
      <p class="small muted">退出会丢弃草稿，已答不计入统计。</p>
      <template #footer>
        <button class="btn btn-text" @click="showQuit = false">留下继续</button>
        <button class="btn btn-ghost" @click="showQuit = false; router.push('/practice')">稍后继续</button>
        <button class="btn btn-primary" @click="quit">丢弃并退出</button>
      </template>
    </ModalDialog>

    <ModalDialog :open="showCard" title="答题卡" width="420" @close="showCard = false">
      <QuestionNav :qids="s.qids" :answers="s.answers" :marked="s.marked" :index="s.index" @go="i => { goTo(i); showCard = false }" />
      <template #footer>
        <button class="btn btn-primary" @click="showCard = false">继续答题</button>
      </template>
    </ModalDialog>
  </div>

  <div v-else class="page">
    <EmptyState v-if="error" icon="alert" title="练习不可用" :text="error">
      <button class="btn btn-primary btn-sm" @click="router.push('/practice')">返回练习中心</button>
    </EmptyState>
  </div>
</template>

<style scoped>
.session-page { min-height: 100vh; background: var(--bg-0); }
.s-top {
  position: sticky; top: 0; z-index: 20; height: 64px;
  display: flex; align-items: center; gap: 16px;
  padding: 0 20px; border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--bg-0) 88%, transparent);
  backdrop-filter: blur(14px);
}
.s-title { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.s-top > .row:first-child { flex: 1; min-width: 0; flex-wrap: nowrap; }
.s-title-wrap { flex: 1; min-width: 0; }
.s-top > .row:last-child { flex: 0 0 auto; flex-wrap: nowrap; }
.s-question { min-width: 0; }
.s-progress { height: 2px; background: var(--line); }
.s-progress i { display: block; height: 2px; background: var(--mint); transition: width .3s var(--ease); }
.s-main {
  max-width: 1180px; margin: 0 auto; padding: 24px 20px 60px;
  display: grid; grid-template-columns: minmax(0, 1fr) 260px; gap: 20px; align-items: start;
}
.s-main.has-material {
  max-width: 1440px;
  grid-template-columns: minmax(300px, .84fr) minmax(440px, 1.16fr) 220px;
}
.s-main.has-material.material-wide {
  grid-template-columns: minmax(420px, 1.12fr) minmax(400px, .88fr) 220px;
}
.s-material { min-width: 0; }
.material-strip {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  margin-bottom: 10px; padding: 8px 12px;
  border: 1px dashed var(--line); border-radius: 10px; background: var(--bg-1);
}
.s-question { position: relative; }
.s-actions { display: flex; align-items: center; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
.grade-list { display: flex; flex-direction: column; gap: 14px; max-height: 58vh; overflow-y: auto; padding-right: 4px; }
.grade-item { padding: 12px 14px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg-0); }
.grade-ref { margin-top: 10px; padding: 10px 12px; border-radius: 8px; background: var(--bg-2); font-size: 12.5px; line-height: 1.7; max-height: 180px; overflow-y: auto; }
.grade-actions { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.s-side { position: sticky; top: 84px; }
.side-legend { display: flex; gap: 12px; margin-top: 12px; }
.side-legend span { display: inline-flex; align-items: center; gap: 4px; }
.lg { width: 8px; height: 8px; border-radius: 2px; border: 1px solid var(--line-strong); display: inline-block; }
.lg.done { background: color-mix(in srgb, var(--mint) 40%, transparent); border-color: var(--mint); }
.lg.flag { background: var(--amber); border-color: var(--amber); }
@media (max-width: 1200px) {
  .s-main.has-material, .s-main.has-material.material-wide { grid-template-columns: minmax(0, 1fr) 220px; }
  .s-material { grid-column: 1 / -1; position: relative; top: 0; max-height: 40vh; }
}
@media (max-width: 900px) {
  .s-top { height: 52px; padding: 0 10px; gap: 8px; }
  .s-top > .row:first-child { gap: 6px; }
  .s-top > .row:last-child { gap: 4px; }
  .s-top .icon-btn { width: 30px; height: 30px; }
  .s-title { font-size: 13px; max-width: 100%; }
  .s-top-sub { display: none; }
  .top-icon-btn { width: 30px; height: 30px; padding: 0 !important; justify-content: center; border-radius: 8px; }
  .top-icon-btn span { display: none; }
  .top-submit { display: none !important; }
  .s-main, .s-main.has-material, .s-main.has-material.material-wide {
    grid-template-columns: minmax(0, 1fr);
    padding: 10px 12px calc(76px + env(safe-area-inset-bottom));
    gap: 10px;
  }
  .s-side { display: none; }
  .s-material { position: static !important; height: 36vh !important; max-height: 36vh !important; border-radius: 11px; }
  .s-top :deep(.timer) { gap: 4px; }
  .s-top :deep(.timer svg) { width: 34px; height: 34px; }
  .s-top :deep(.timer .t span) { font-size: 13px; }
  .s-top :deep(.timer .t small) { display: none; }
  .s-actions {
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 25;
    margin: 0; padding: 8px 10px calc(8px + env(safe-area-inset-bottom));
    display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px;
    background: color-mix(in srgb, var(--bg-1) 94%, transparent);
    backdrop-filter: blur(14px);
    border-top: 1px solid var(--line);
  }
  .s-actions > div[style*="flex: 1"] { display: none; }
  .s-actions .btn { width: 100%; justify-content: center; padding: 8px 2px; font-size: 11px; white-space: nowrap; gap: 2px; }
  .answer-card-btn { display: inline-flex !important; }
}
</style>
