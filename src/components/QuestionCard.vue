<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import RichText from './RichText.vue'
import AppIcon from './AppIcon.vue'
import { knowledgeById } from '../data/index.js'
import { getQuestionHtml } from '../data/mathHtml.js'
import renderMathInElement from 'katex/contrib/auto-render'

const props = defineProps({
  q: { type: Object, required: true },
  selected: { type: [Array, String], default: () => [] },
  showResult: Boolean,
  result: { type: Object, default: null },
  index: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
})
const emit = defineEmits(['select', 'text'])
const zoomSrc = ref('')
const root = ref(null)

function renderTex() {
  if (!root.value) return
  renderMathInElement(root.value, {
    delimiters: [
      { left: String.raw`\(`, right: String.raw`\)`, display: false },
      { left: String.raw`\[`, right: String.raw`\]`, display: true }
    ],
    throwOnError: false,
    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  })
}

const isSubjective = computed(() => props.q.type === 'subjective')
const qHtml = ref(null)
watch(
  () => props.q.id,
  async id => {
    qHtml.value = null
    if (!props.q.mathHtml) return
    const html = await getQuestionHtml(props.q.paperId, id)
    if (props.q.id === id) qHtml.value = html
  },
  { immediate: true }
)
watch(qHtml, async () => {
  await nextTick()
  renderTex()
})
watch(() => props.showResult, async () => {
  await nextTick()
  renderTex()
})
const selKeys = computed(() => Array.isArray(props.selected) ? props.selected : [])
const textValue = computed(() => typeof props.selected === 'string' ? props.selected : '')

const opts = computed(() => {
  if (props.q.type === 'judge') {
    return [{ key: 'T', text: '正确' }, { key: 'F', text: '错误' }]
  }
  const rows = props.q.options || []
  const htmls = qHtml.value?.optionsHtml || []
  return rows.map((o, i) => ({ ...o, html: htmls[i] || o.html }))
})

const multi = computed(() => props.q.type === 'multiple')
const knowledges = computed(() => {
  const ids = props.q.knowledgeIds?.length ? props.q.knowledgeIds : [props.q.knowledgeId]
  return ids.map(id => knowledgeById[id]).filter(Boolean)
})
const pct = computed(() => Math.round((props.result?.selfRatio ?? 0) * 100))
const isEn = computed(() => props.q.subject === 'en' || (props.q.subjects || []).includes('en'))
const isEnWriting = computed(() => isEn.value && (props.q.number >= 51 || props.q.number === 47 || props.q.number === 48))
const textCount = computed(() => {
  if (!isEnWriting.value) return `${textValue.value.length} 字`
  const words = textValue.value.trim().match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)?/g)
  return `${words ? words.length : 0} 词`
})
const answerHint = computed(() => {
  if (isEn.value) {
    if (isEnWriting.value) return '写下你的英文作文；交卷后可对照范文与评分要点自评得分比例。'
    if (props.q.number === 41) return '写下 41–45 题的答案；交卷后可对照参考答案自评得分比例。'
    return '写下你的中文译文；交卷后可对照参考译文自评得分比例。'
  }
  if (props.q.subtype === 'fill') return '填写最终结果；交卷后可对照参考答案自评得分比例。'
  if (props.q.subject === 'math') return '写下推导、关键步骤与最终结果；交卷后可对照参考答案自评得分比例。'
  return '写下答题要点或关键步骤；交卷后可对照参考答案自评得分比例。'
})

function stateOf(key) {
  if (!props.showResult) return {}
  const isAns = (props.q.answer || []).includes(key)
  const picked = (props.result?.keys || []).includes(key)
  if (isAns) return { correct: true }
  if (picked) return { wrong: true }
  return {}
}

function onSelect(key) {
  if (props.showResult || isSubjective.value) return
  emit('select', key)
}
</script>

<template>
  <div ref="root" class="qcard card card-pad">
    <div class="qhead">
      <div class="row" style="gap: 8px; flex-wrap: wrap">
        <span class="chip" :class="{ lilac: isSubjective }">
          {{ isSubjective ? (q.subtype === 'fill' ? '填空' : '主观题') : q.type === 'multiple' ? '多选' : q.type === 'judge' ? '判断' : '单选' }}
        </span>
        <span v-if="q.material" class="chip">材料题</span>
        <span v-if="isSubjective" class="chip">{{ q.score || 10 }} 分</span>
        <span v-if="q.source === 'real'" class="chip amber q-source-chip">真题 {{ q.year }} · 第 {{ q.number }} 题</span>
        <span v-else class="chip" :class="{ lilac: q.difficulty === 3, amber: q.difficulty === 2 }">难度 {{ q.difficulty }}</span>
        <span v-if="q.source === 'adapted'" class="chip lilac">改编 · {{ q.year }}</span>
      </div>
      <span class="mono dim tiny" v-if="total">{{ index + 1 }} / {{ total }}</span>
    </div>

    <div v-if="qHtml?.stemHtml" class="stem katex-html-block" v-html="qHtml.stemHtml" />
    <div v-else class="stem"><RichText :text="q.stem" /></div>

    <div v-if="q.figureNote" class="figure-note tiny dim">
      <AppIcon name="image" :size="13" />
      <span>{{ q.figureNote }}</span>
    </div>

    <div v-if="q.noteId" class="figure-note tiny">
      <AppIcon name="bookopen" :size="13" />
      <a :href="`#/notes/${q.noteId}`" target="_blank" rel="noopener" style="color: var(--mint)">
        本题在资料库的原题页（含图示与详解）
      </a>
    </div>

    <div v-if="zoomSrc" class="zoom-mask" @click="zoomSrc = ''">
      <img :src="zoomSrc" alt="题图" />
    </div>
    <div v-if="q.figures?.length" class="figures">
      <figure v-for="(f, fi) in q.figures" :key="fi" @click="zoomSrc = f.src">
        <img :src="f.src" :alt="f.alt || '题目配图'" loading="lazy" />
        <figcaption v-if="f.caption">{{ f.caption }}</figcaption>
      </figure>
    </div>

    <div v-if="isSubjective" class="subjective-box">
      <div class="spread" style="margin-bottom: 6px">
        <label class="tiny dim">作答区 · 只保存在本机</label>
        <span class="mono tiny dim">{{ textCount }}</span>
      </div>
      <textarea
        class="answer-input"
        :value="textValue"
        :disabled="showResult"
        :rows="isEnWriting ? 12 : 7"
        :placeholder="answerHint"
        @input="emit('text', $event.target.value)"
      />
    </div>

    <div v-else class="options" role="group" :aria-label="'第 ' + (index + 1) + ' 题选项'">
      <button
        v-for="o in opts" :key="o.key"
        class="option"
        :class="[{ picked: selKeys.includes(o.key) }, stateOf(o.key)]"
        :aria-pressed="selKeys.includes(o.key)"
        :disabled="showResult"
        @click="onSelect(o.key)"
      >
        <span class="key">{{ q.type === 'judge' ? (o.key === 'T' ? '✓' : '✕') : o.key }}</span>
        <span class="otext">
          <span v-if="o.html" v-html="o.html" />
          <RichText v-else :text="o.text" />
        </span>
        <span v-if="showResult && (q.answer || []).includes(o.key)" class="mark"><AppIcon name="check" :size="14" /></span>
        <span v-else-if="showResult && (result?.keys || []).includes(o.key)" class="mark wrong"><AppIcon name="x" :size="14" /></span>
      </button>
    </div>

    <div v-if="multi && !showResult" class="tiny dim mt-8">多选题：全部选对得满分，漏选得半分，错选不得分</div>

    <div v-if="showResult && q.material" class="material-review">
      <details>
        <summary>回顾材料原文（{{ q.material.blocks?.length || 1 }} 段）</summary>
        <div v-for="(b, i) in q.material.blocks" :key="i" class="mr-block">
          <div v-if="q.material.blocks.length > 1" class="tiny dim">{{ b.label }}</div>
          <RichText :text="b.text" />
        </div>
      </details>
    </div>

    <div v-if="showResult && isSubjective" class="explain">
      <div class="row" style="margin-bottom: 8px">
        <span class="chip" :class="pct >= 60 ? 'active' : 'rose'">自评 {{ pct }}%</span>
        <span class="mono tiny dim">得分 {{ result?.points ?? 0 }} / {{ result?.maxScore ?? (q.score || 10) }}</span>
      </div>
      <div class="tiny dim" style="margin-bottom: 4px">你的作答</div>
      <div class="my-answer small">{{ result?.text || '未作答' }}</div>
      <div class="tiny dim" style="margin: 14px 0 4px">参考答案</div>
      <div v-if="qHtml?.referenceHtml" class="ref-answer small katex-html-block" v-html="qHtml.referenceHtml" />
      <div v-else class="ref-answer small"><RichText :text="q.referenceAnswer || '暂无参考答案'" /></div>
      <div v-if="q.rubric?.length" class="rubric">
        <div class="tiny dim" style="margin-bottom: 6px">评分要点（自评时逐条对照）</div>
        <div v-for="(r, i) in q.rubric" :key="i" class="rubric-row">
          <span class="mono tiny dim">{{ r.points }} 分</span>
          <span class="small">{{ r.text }}</span>
        </div>
      </div>
      <div v-if="knowledges.length" class="kp-links mt-8">
        <span class="tiny dim">知识点</span>
        <router-link
          v-for="(k, i) in knowledges" :key="k.id" :to="`/knowledge/${k.id}`"
          class="chip clickable kp-chip" :class="{ active: i === 0 }"
        >{{ k.title }}</router-link>
      </div>
    </div>

    <div v-if="showResult && !isSubjective" class="explain">
      <div class="row" style="margin-bottom: 6px">
        <span class="chip" :class="result?.correct ? 'active' : 'rose'">
          {{ result?.correct ? '答对' : result?.answered ? '答错' : '未答' }}
        </span>
        <span class="mono tiny dim">正确答案 {{ (q.answer || []).join(' / ') }}</span>
      </div>
      <div v-if="qHtml?.explainHtml" class="small muted katex-html-block" v-html="qHtml.explainHtml" />
      <div v-else class="small muted"><RichText :text="q.explain" /></div>
      <div v-if="knowledges.length" class="kp-links mt-8">
        <span class="tiny dim">知识点</span>
        <router-link
          v-for="(k, i) in knowledges" :key="k.id" :to="`/knowledge/${k.id}`"
          class="chip clickable kp-chip" :class="{ active: i === 0 }"
        >{{ k.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qcard { border-radius: 16px; }
.qhead { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 16px; }
.stem { font-size: 15.5px; line-height: 1.85; margin-bottom: 18px; }
.katex-html-block { line-height: 1.95; overflow-x: auto; overflow-y: hidden; }
.katex-html-block :deep(.katex) { font-size: 1.06em; }
.katex-html-block :deep(.katex-display) { margin: 0.6em 0; }
.katex-html-block :deep(img) { display: block; max-width: 100%; height: auto; margin: 12px 0; border-radius: 6px; }
.otext :deep(img) { display: block; max-width: 100%; max-height: 160px; width: auto; height: auto; margin: 2px 0; }
.stem :deep(.codeblock) { font-size: 12.5px; }
.figure-note { display: flex; align-items: center; gap: 6px; padding: 8px 10px; margin-bottom: 14px; border: 1px dashed var(--line); border-radius: 8px; }
.kp-links { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
.kp-chip { font-size: 11.5px; padding: 4px 9px; }
.figures { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.figures figure { margin: 0; text-align: center; }
.figures img { max-width: 100%; border-radius: 10px; border: 1px solid var(--line); background: var(--bg-2); cursor: zoom-in; }
.zoom-mask { position: fixed; inset: 0; z-index: 1200; background: rgba(8, 10, 9, 0.94); display: flex; align-items: flex-start; justify-content: flex-start; overflow: auto; padding: 8px; }
.zoom-mask img { max-width: none; max-height: none; flex: 0 0 auto; border-radius: 4px; background: #fff; }
.figures figcaption { font-size: 12px; color: var(--text-3); margin-top: 4px; }
.subjective-box { margin-bottom: 4px; }
.answer-input {
  width: 100%; resize: vertical; padding: 12px 14px; border-radius: 10px;
  border: 1px solid var(--line); background: var(--bg-2); color: var(--text);
  font-family: inherit; font-size: 14px; line-height: 1.75; outline: none;
}
.answer-input:focus { border-color: var(--mint); }
.options { display: flex; flex-direction: column; gap: 10px; }
.option {
  display: flex; align-items: flex-start; gap: 12px;
  width: 100%; text-align: left;
  padding: 12px 14px;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  color: var(--text);
  cursor: pointer;
  position: relative;
  transition: 0.15s var(--ease);
  line-height: 1.7;
}
body:not(.ink-pen-lock) .option:hover:not(:disabled) { border-color: var(--line-strong); background: var(--bg-3); }
.option:disabled { cursor: default; }
.option.picked { border-color: var(--mint); background: color-mix(in srgb, var(--mint) 9%, var(--bg-2)); }
.option.picked::before { content: ''; position: absolute; left: -1px; top: 12px; bottom: 12px; width: 3px; background: var(--mint); border-radius: 2px; }
.option.correct { border-color: var(--mint); }
.option.wrong { border-color: var(--rose); background: color-mix(in srgb, var(--rose) 8%, var(--bg-2)); }
.key {
  flex: 0 0 24px; height: 24px; display: grid; place-items: center;
  border: 1px solid var(--line-strong); border-radius: 6px;
  font-family: var(--font-mono); font-size: 11px; color: var(--text-2);
}
.option.picked .key { border-color: var(--mint); color: var(--mint); }
.otext { flex: 1; font-size: 14px; }
.mark { color: var(--mint); display: grid; place-items: center; }
.mark.wrong { color: var(--rose); }
.explain {
  margin-top: 18px; padding: 16px; border-radius: 12px;
  background: var(--bg-0); border: 1px dashed var(--line);
}
.my-answer, .ref-answer {
  padding: 10px 12px; border-radius: 8px; background: var(--bg-2);
  line-height: 1.75; white-space: pre-wrap;
}
.rubric { margin-top: 14px; display: flex; flex-direction: column; gap: 6px; }
.rubric-row { display: flex; gap: 10px; align-items: baseline; padding-top: 6px; border-top: 1px dashed var(--line); }
.material-review { margin-top: 16px; }
.material-review summary { cursor: pointer; font-size: 12px; color: var(--text-3); }
.mr-block { margin-top: 10px; padding: 10px 12px; border-left: 2px solid var(--line-strong); background: var(--bg-0); font-size: 13px; line-height: 1.85; }
@media (max-width: 640px) {
  .q-source-chip { display: none; }
  .qhead > .mono { white-space: nowrap; flex: 0 0 auto; }
}
</style>
