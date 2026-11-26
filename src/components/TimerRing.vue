<script setup>
import { computed } from 'vue'
import { secondsToClock } from '../core/time.js'

const props = defineProps({
  leftSec: { type: Number, default: 0 },
  totalSec: { type: Number, default: 0 },
  unlimited: Boolean
})

const pct = computed(() => {
  if (!props.totalSec) return 0
  return Math.max(0, Math.min(100, (props.leftSec / props.totalSec) * 100))
})
const color = computed(() => props.leftSec <= 60 ? 'var(--rose)' : props.leftSec <= 300 ? 'var(--amber)' : 'var(--mint)')
const text = computed(() => props.unlimited ? '不限时' : secondsToClock(props.leftSec))
const R = 20
const C = 2 * Math.PI * R
</script>

<template>
  <div class="timer" :class="{ urgent: leftSec <= 60 && !unlimited }">
    <svg v-if="!unlimited" width="48" height="48" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="20" fill="none" stroke="var(--line)" stroke-width="3" />
      <circle
        cx="24" cy="24" r="20" fill="none" :stroke="color" stroke-width="3" stroke-linecap="round"
        :stroke-dasharray="`${(C * pct) / 100} ${C}`" transform="rotate(-90 24 24)"
      />
    </svg>
    <div class="t">
      <span class="mono" :style="{ color: unlimited ? 'var(--text-2)' : color }">{{ text }}</span>
      <small v-if="!unlimited">剩余</small>
    </div>
  </div>
</template>

<style scoped>
.timer { display: flex; align-items: center; gap: 10px; position: relative; }
svg { flex: 0 0 auto; }
.t { display: flex; flex-direction: column; line-height: 1.1; }
.t span { font-size: 17px; font-weight: 600; }
.t small { font-size: 9.5px; color: var(--text-3); letter-spacing: 0.1em; }
.urgent .t span { animation: pulse 1s infinite; }
@keyframes pulse { 50% { opacity: 0.55; } }
</style>
