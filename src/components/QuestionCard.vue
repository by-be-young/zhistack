<script setup>
import { computed } from 'vue'
import RichText from './RichText.vue'
import AppIcon from './AppIcon.vue'
import { knowledgeById } from '../data/index.js'

const props = defineProps({
  q: { type: Object, required: true },
  selected: { type: Array, default: () => [] },
  showResult: Boolean,
  result: { type: Object, default: null },
  index: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
})
const emit = defineEmits(['select'])

const opts = computed(() => {
  if (props.q.type === 'judge') {
    return [{ key: 'T', text: '正确' }, { key: 'F', text: '错误' }]
  }
  return props.q.options || []
})

const multi = computed(() => props.q.type === 'multiple')
const knowledge = computed(() => knowledgeById[props.q.knowledgeId])

function stateOf(key) {
  if (!props.showResult) return {}
  const isAns = (props.q.answer || []).includes(key)
  const picked = (props.result?.keys || []).includes(key)
  if (isAns) return { correct: true }
  if (picked) return { wrong: true }
  return {}
}

function onSelect(key) {
  if (props.showResult) return
  emit('select', key)
}
</script>

<template>
  <div class="qcard card card-pad">
    <div class="qhead">
      <div class="row" style="gap: 8px">
        <span class="chip">{{ q.type === 'multiple' ? '多选' : q.type === 'judge' ? '判断' : '单选' }}</span>
        <span class="chip" :class="{ lilac: q.difficulty === 3, amber: q.difficulty === 2 }">
          难度 {{ q.difficulty }}
        </span>
        <span v-if="q.source === 'adapted'" class="chip lilac">改编 · {{ q.year }}</span>
      </div>
      <span class="mono dim tiny" v-if="total">{{ index + 1 }} / {{ total }}</span>
    </div>

    <div class="stem"><RichText :text="q.stem" /></div>

    <div class="options" role="group" :aria-label="'第 ' + (index + 1) + ' 题选项'">
      <button
        v-for="o in opts" :key="o.key"
        class="option"
        :class="[{ picked: selected.includes(o.key) }, stateOf(o.key)]"
        :aria-pressed="selected.includes(o.key)"
        :disabled="showResult"
        @click="onSelect(o.key)"
      >
        <span class="key">{{ o.key === 'T' ? '✓' : o.key === 'F' ? '✕' : o.key }}</span>
        <span class="otext"><RichText :text="o.text" /></span>
        <span v-if="showResult && (q.answer || []).includes(o.key)" class="mark"><AppIcon name="check" :size="14" /></span>
        <span v-else-if="showResult && (result?.keys || []).includes(o.key)" class="mark wrong"><AppIcon name="x" :size="14" /></span>
      </button>
    </div>

    <div v-if="multi && !showResult" class="tiny dim mt-8">多选题：全部选对得满分，漏选得半分，错选不得分</div>

    <div v-if="showResult" class="explain">
      <div class="row" style="margin-bottom: 6px">
        <span class="chip" :class="result?.correct ? 'active' : 'rose'">
          {{ result?.correct ? '答对' : result?.answered ? '答错' : '未答' }}
        </span>
        <span class="mono tiny dim">正确答案 {{ (q.answer || []).join(' / ') }}</span>
      </div>
      <div class="small muted"><RichText :text="q.explain" /></div>
      <div v-if="knowledge" class="mt-8">
        <router-link :to="`/knowledge/${knowledge.id}`" class="btn btn-text btn-sm" style="padding: 0">
          <AppIcon name="arrow-right" :size="13" /> {{ knowledge.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qcard { border-radius: 16px; }
.qhead { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 16px; }
.stem { font-size: 15.5px; line-height: 1.85; margin-bottom: 18px; }
.stem :deep(.codeblock) { font-size: 12.5px; }
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
.option:hover:not(:disabled) { border-color: var(--line-strong); background: var(--bg-3); }
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
</style>
