<script setup>
import { computed } from 'vue'

const props = defineProps({
  columns: { type: Array, default: () => [] },
  showWeekday: { type: Boolean, default: true }
})

const WEEK = ['一', '二', '三', '四', '五', '六', '日']
const total = computed(() => props.columns.flat().reduce((s, c) => s + c.count, 0))
</script>

<template>
  <div class="heat">
    <div class="heat-body">
      <div v-if="showWeekday" class="wk">
        <span v-for="(w, i) in WEEK" :key="w" :class="{ odd: i % 2 === 0 }">{{ i % 2 === 0 ? w : '' }}</span>
      </div>
      <div class="cols">
        <div v-for="(col, i) in columns" :key="i" class="col">
          <div
            v-for="cell in col" :key="cell.key"
            class="cell" :class="`l${cell.level}`"
            :title="`${cell.key} · ${cell.count} 题`"
          />
        </div>
      </div>
    </div>
    <div class="legend">
      <span class="tiny dim">近 {{ columns.length }} 周 · 共 {{ total }} 题</span>
      <span class="scale tiny dim">少 <i class="cell l0" /><i class="cell l1" /><i class="cell l2" /><i class="cell l3" /><i class="cell l4" /> 多</span>
    </div>
  </div>
</template>

<style scoped>
.heat { width: 100%; }
.heat-body { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; }
.wk { display: grid; grid-template-rows: repeat(7, 12px); gap: 3px; }
.wk span { font-size: 9px; color: var(--text-3); line-height: 12px; text-align: right; }
.cols { display: flex; gap: 3px; }
.col { display: grid; grid-template-rows: repeat(7, 12px); gap: 3px; }
.cell { width: 12px; height: 12px; border-radius: 2px; display: inline-block; }
.cell.l0 { background: var(--line); }
.cell.l1 { background: color-mix(in srgb, var(--mint) 24%, var(--bg-1)); }
.cell.l2 { background: color-mix(in srgb, var(--mint) 46%, var(--bg-1)); }
.cell.l3 { background: color-mix(in srgb, var(--mint) 68%, var(--bg-1)); }
.cell.l4 { background: var(--mint); }
.legend { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; flex-wrap: wrap; gap: 6px; }
.scale { display: flex; align-items: center; gap: 4px; }
.scale .cell { width: 10px; height: 10px; }
</style>
