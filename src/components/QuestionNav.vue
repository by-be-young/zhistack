<script setup>
import { computed } from 'vue'

const props = defineProps({
  qids: { type: Array, default: () => [] },
  answers: { type: Object, default: () => ({}) },
  marked: { type: Object, default: () => ({}) },
  index: { type: Number, default: 0 }
})
const emit = defineEmits(['go'])

const items = computed(() => props.qids.map((qid, i) => ({
  i,
  qid,
  answered: (props.answers[qid] || []).length > 0,
  marked: !!props.marked[qid]
})))
</script>

<template>
  <div class="qnav">
    <div class="qnav-head mono tiny dim">
      <span>答题卡</span>
      <span>{{ Object.values(answers).filter(a => a.length).length }} / {{ qids.length }}</span>
    </div>
    <div class="qnav-grid">
      <button
        v-for="it in items" :key="it.qid"
        class="cell" :class="{ answered: it.answered, current: it.i === index }"
        :aria-label="`第 ${it.i + 1} 题${it.answered ? ' 已答' : ''}`"
        @click="emit('go', it.i)"
      >
        {{ it.i + 1 }}
        <i v-if="it.marked" class="flag" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.qnav-head { display: flex; justify-content: space-between; margin-bottom: 10px; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-3); }
.qnav-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }
.cell {
  height: 34px; border-radius: 7px; border: 1px solid var(--line);
  background: transparent; color: var(--text-2); font-family: var(--font-mono); font-size: 12px;
  position: relative; cursor: pointer; transition: 0.15s var(--ease);
}
body:not(.ink-pen-lock) .cell:hover { border-color: var(--line-strong); color: var(--text); }
.cell.answered { background: color-mix(in srgb, var(--mint) 16%, transparent); border-color: color-mix(in srgb, var(--mint) 35%, transparent); color: var(--mint); }
.cell.current { box-shadow: 0 0 0 2px var(--bg-1), 0 0 0 3px var(--mint); border-color: var(--mint); }
.flag { position: absolute; top: 3px; right: 3px; width: 5px; height: 5px; border-radius: 2px; background: var(--amber); }
</style>
