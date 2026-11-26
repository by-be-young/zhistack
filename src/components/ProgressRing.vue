<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: Number, default: null },
  size: { type: Number, default: 64 },
  stroke: { type: Number, default: 4 },
  label: { type: String, default: '' },
  color: { type: String, default: 'mint' }
})

const r = computed(() => (props.size - props.stroke) / 2)
const c = computed(() => 2 * Math.pi * r.value)
const pct = computed(() => Math.max(0, Math.min(100, props.value ?? 0)))
const dash = computed(() => (c.value * pct.value) / 100)
const colorVar = computed(() => ({
  mint: 'var(--mint)', amber: 'var(--amber)', rose: 'var(--rose)',
  lilac: 'var(--lilac)', sky: 'var(--sky)'
}[props.color] || 'var(--mint)'))
</script>

<template>
  <div class="ring" :style="{ width: size + 'px', height: size + 'px' }">
    <svg :width="size" :height="size">
      <circle :cx="size / 2" :cy="size / 2" :r="r" fill="none" stroke="var(--line)" :stroke-width="stroke" />
      <circle
        :cx="size / 2" :cy="size / 2" :r="r" fill="none"
        :stroke="colorVar" :stroke-width="stroke" stroke-linecap="round"
        :stroke-dasharray="`${dash} ${c}`"
        :transform="`rotate(-90 ${size / 2} ${size / 2})`"
      />
    </svg>
    <div class="ring-inner">
      <b v-if="value !== null">{{ value }}<small>%</small></b>
      <b v-else class="dim">—</b>
      <span v-if="label">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>
.ring { position: relative; display: grid; place-items: center; flex: 0 0 auto; }
.ring svg { position: absolute; inset: 0; }
.ring-inner { text-align: center; line-height: 1.1; }
.ring-inner b { font-size: 17px; font-variant-numeric: tabular-nums; display: block; }
.ring-inner b small { font-size: 9px; font-weight: 400; opacity: 0.6; }
.ring-inner span { font-size: 10px; color: var(--text-3); }
</style>
