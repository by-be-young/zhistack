<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { knowledgeById, subjectMap, questionsByKnowledge, bookMap, books } from '../data/index.js'
import { masteryOf, knowledgeStats, reasonList } from '../core/diagnose.js'
import { archive, save } from '../storage/archive.js'
import { recordKnowledgeView } from '../core/record.js'
import { createSession } from '../stores/practice.js'
import { toast } from '../core/toast.js'
import RichText from '../components/RichText.vue'
import ProgressRing from '../components/ProgressRing.vue'
import AppIcon from '../components/AppIcon.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const router = useRouter()
const k = computed(() => knowledgeById[route.params.id])
const m = computed(() => k.value ? masteryOf(archive, k.value.id) : null)
const stats = computed(() => k.value ? knowledgeStats(archive, k.value.id) : null)
const qs = computed(() => k.value ? (questionsByKnowledge[k.value.id] || []) : [])
const related = computed(() => (k.value?.related || []).map(id => knowledgeById[id]).filter(Boolean))
const bookRefs = computed(() => (k.value?.bookRefs || []).map(r => ({ ...r, book: bookMap[r.bookId] })))
const reasons = computed(() => {
  if (!k.value || !m.value) return []
  const open = Object.values(archive.mistakes).filter(x => {
    const q = questionsByKnowledge[k.value.id]?.find(qq => qq.id === x.qid)
    return q && x.stage !== 'mastered'
  }).length
  return reasonList(k.value, stats.value || {}, { ...m.value, pool: qs.value.length, openMistakes: open })
})

const diffText = computed(() => ['', '基础', '进阶', '综合'][k.value?.difficulty] || '基础')

function practice(count = 6) {
  const s = createSession({ mode: 'weak', subjects: [k.value.subject], count, knowledgeIds: [k.value.id], title: `${k.value.title} · 专项` })
  if (s) router.push(`/practice/session/${s.id}`)
}

function setManual(v) {
  const st = archive.knowledge[k.value.id] || (archive.knowledge[k.value.id] = { attempts: 0, correct: 0, views: 0, lastAt: null })
  st.manual = st.manual === v ? null : v
  save(true)
  toast(st.manual ? '已标记' : '已取消标记', 'info')
}

function openBook(r) {
  router.push(`/library/${r.bookId}`)
}

function chapterTitle() {
  for (const b of books) {
    for (const ch of b.chapters) {
      if (ch.id === k.value.chapterId) return ch.title
      const sub = (ch.children || []).find(c => c.id === k.value.chapterId)
      if (sub) return `${ch.title} / ${sub.title}`
    }
  }
  return k.value.chapterId
}

onMounted(() => {
  if (k.value) {
    recordKnowledgeView(archive, k.value.id)
    save()
  }
})
</script>

<template>
  <div class="page" v-if="k">
    <div class="row" style="margin-bottom: 14px">
      <button class="btn btn-text btn-sm" @click="router.push('/knowledge')"><AppIcon name="arrow-left" :size="14" /> 知识点</button>
      <span class="tiny dim">/</span>
      <span class="mono tiny dim">{{ k.gid }}</span>
    </div>

    <div class="grid g-main" style="align-items: start">
      <div class="stack">
        <section class="card card-pad">
          <div class="row" style="gap: 8px; margin-bottom: 12px">
            <span class="chip sub-chip" :style="{ '--sub': `var(--sub-${k.subject})` }"><span class="dot" />{{ subjectMap[k.subject]?.name }}</span>
            <span class="chip">{{ diffText }}</span>
            <span class="chip">约 {{ k.estMin }} 分钟</span>
            <span v-for="t in k.tags" :key="t" class="chip">{{ t }}</span>
          </div>
          <h1 class="page-title" style="font-size: 30px">{{ k.title }}</h1>
          <p class="k-summary">{{ k.summary }}</p>

          <div class="chapter-path tiny dim">
            <AppIcon name="book" :size="13" /> {{ chapterTitle() }}
          </div>

          <h2 class="sec-h">要点</h2>
          <ul class="points">
            <li v-for="(p, i) in k.points" :key="i">
              <span class="idx mono">{{ String(i + 1).padStart(2, '0') }}</span>
              <RichText :text="p" />
            </li>
          </ul>

          <div v-if="k.pitfalls?.length" class="pitfall">
            <div class="row" style="gap: 8px; color: var(--rose)">
              <AppIcon name="alert" :size="15" /><b class="tiny">易错点</b>
            </div>
            <ul>
              <li v-for="(p, i) in k.pitfalls" :key="i">{{ p }}</li>
            </ul>
          </div>
        </section>

        <section class="card card-pad">
          <div class="spread">
            <div>
              <div class="card-label">PRACTICE</div>
              <h2 style="font-size: 18px">相关题目 · {{ qs.length }} 道</h2>
            </div>
            <button class="btn btn-primary btn-sm" @click="practice(Math.min(6, qs.length || 1))">练这一节</button>
          </div>
          <div class="q-list">
            <div v-for="q in qs" :key="q.id" class="q-row">
              <div class="row" style="gap: 8px; margin-bottom: 6px">
                <span class="mono tiny dim">{{ q.id.toUpperCase() }}</span>
                <span class="chip tiny">{{ q.type === 'single' ? '单选' : q.type === 'multiple' ? '多选' : q.type === 'judge' ? '判断' : '填空' }}</span>
                <span class="chip tiny">难度 {{ q.difficulty }}</span>
              </div>
              <div class="q-stem"><RichText :text="q.stem" /></div>
            </div>
          </div>
          <EmptyState v-if="!qs.length" icon="list" title="本节暂无题" text="可以先做综合卷，或在题库中反馈补题。" />
        </section>

        <section v-if="related.length" class="card card-pad">
          <div class="card-label">RELATED</div>
          <h2 style="font-size: 18px; margin-bottom: 10px">相邻考点</h2>
          <div class="rel-grid">
            <router-link v-for="r in related" :key="r.id" :to="`/knowledge/${r.id}`" class="rel-card">
              <div class="tiny dim">{{ r.gid }}</div>
              <div style="font-size: 14px; margin-top: 3px">{{ r.title }}</div>
            </router-link>
          </div>
        </section>
      </div>

      <div class="stack side">
        <section class="card card-pad">
          <div class="card-label">MASTERY</div>
          <div class="row" style="gap: 16px; margin: 10px 0 14px">
            <ProgressRing
              :value="m.mastery" :size="86" :stroke="5"
              :color="m.mastery == null ? 'sky' : m.mastery < 45 ? 'rose' : m.mastery < 75 ? 'amber' : 'mint'"
            />
            <div>
              <div class="mono" style="font-size: 11px; color: var(--text-3)">掌握度</div>
              <div style="font-size: 20px; font-weight: 600">{{ m.label }}</div>
              <div class="tiny dim mt-8">{{ m.mastery == null ? '还没有练习数据' : `置信度 ${Math.round(m.confidence * 100)}%` }}</div>
            </div>
          </div>
          <div v-if="m.parts" class="parts">
            <div v-for="(v, key) in m.parts" :key="key" class="part">
              <div class="spread tiny"><span class="dim">{{ { accuracy: '正确率', recency: '近因', mistakes: '错题', coverage: '覆盖' }[key] }}</span><span class="mono">{{ v }}</span></div>
              <div class="bar thin"><i :style="{ width: v + '%' }" /></div>
            </div>
          </div>
          <div v-if="reasons.length" class="reasons-box">
            <div v-for="(r, i) in reasons" :key="i" class="tiny dim">· {{ r }}</div>
          </div>
          <div class="row" style="gap: 6px; margin-top: 14px">
            <button class="btn btn-sm" :class="stats?.manual === 'mastered' ? 'btn-primary' : 'btn-ghost'" @click="setManual('mastered')">标记掌握</button>
            <button class="btn btn-sm" :class="stats?.manual === 'review' ? 'btn-primary' : 'btn-ghost'" @click="setManual('review')">需复习</button>
          </div>
        </section>

        <section class="card card-pad">
          <div class="card-label">BOOK REF</div>
          <h2 style="font-size: 16px; margin: 4px 0 10px">教材页码</h2>
          <div v-for="r in bookRefs" :key="r.bookId" class="bookref">
            <div class="tiny" style="font-weight: 500">{{ r.book?.title }}</div>
            <div class="spread" style="margin-top: 4px">
              <span class="mono tiny dim">p.{{ r.page }} · {{ r.confidence === 'exact' ? '精确' : '约' }}</span>
              <button class="btn btn-text btn-sm" @click="openBook(r)">打开书库 →</button>
            </div>
          </div>
          <div class="tiny dim" style="margin-top: 10px">页码为印刷页，跳转时会自动加上你在浏览器里设置的偏移。</div>
        </section>
      </div>
    </div>
  </div>
  <div v-else class="page"><EmptyState title="知识点不存在" text="返回检索页重新选择。" /></div>
</template>

<style scoped>
.k-summary { font-size: 15px; line-height: 1.8; color: var(--text-2); margin: 10px 0 0; }
.chapter-path { display: flex; align-items: center; gap: 6px; margin-top: 14px; }
.sec-h { font-size: 13px; letter-spacing: .08em; color: var(--text-3); margin: 26px 0 10px; font-weight: 500; }
.points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.points li { display: flex; gap: 12px; font-size: 14px; line-height: 1.75; }
.idx { color: var(--mint); font-size: 11px; padding-top: 3px; flex: 0 0 auto; }
.pitfall { margin-top: 22px; padding: 14px 16px; border: 1px solid color-mix(in srgb, var(--rose) 26%, var(--line)); border-radius: 10px; background: color-mix(in srgb, var(--rose) 5%, transparent); }
.pitfall ul { margin: 8px 0 0; padding-left: 18px; font-size: 13px; line-height: 1.7; color: var(--text-2); }
.q-list { margin-top: 12px; }
.q-row { padding: 12px 0; border-bottom: 1px dashed var(--line); }
.q-row:last-child { border-bottom: 0; }
.q-stem { font-size: 13.5px; line-height: 1.7; color: var(--text-2); }
.rel-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.rel-card { padding: 10px 12px; border: 1px solid var(--line); border-radius: 8px; color: var(--text-2); }
.rel-card:hover { border-color: var(--line-strong); color: var(--text); }
.parts { display: flex; flex-direction: column; gap: 9px; }
.reasons-box { margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--line); display: flex; flex-direction: column; gap: 4px; }
.bookref { padding: 10px 0; border-bottom: 1px dashed var(--line); }
.bookref:last-child { border-bottom: 0; }
.side { position: sticky; top: 72px; }
</style>
