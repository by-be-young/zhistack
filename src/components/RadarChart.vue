<script setup>
import { computed } from 'vue'
import { subjectMap } from '../data/index.js'

const props = defineProps({
  data: { type: Array, default: () => [] },
  size: { type: Number, default: 260 }
})

const count = computed(() => Math.max(4, props.data.length))
const center = computed(() => props.size / 2)
const radius = computed(() => props.size / 2 - 42)

function point(index, value) {
  const angle = (Math.PI * 2 * index) / count.value - Math.PI / 2
  const r = (radius.value * Math.max(0, Math.min(100, value))) / 100
  return [center.value + r * Math.cos(angle), center.value + r * Math.sin(angle)]
}

const axes = computed(() => props.data.map((d, i) => {
  const angle = (Math.PI * 2 * i) / count.value - Math.PI / 2
  return {
    id: d.id,
    name: subjectMap[d.id]?.short || d.id,
    value: d.value ?? 0,
    has: d.has ?? false,
    i,
    px: center.value + radius.value * Math.cos(angle),
    py: center.value + radius.value * Math.sin(angle),
    lx: center.value + (radius.value + 21) * Math.cos(angle),
    ly: center.value + (radius.value + 21) * Math.sin(angle)
  }
}))

const polygon = computed(() => axes.value.map(a => point(a.i, a.value).join(',')).join(' '))

const rings = [25, 50, 75, 100].map(v => ({
  v,
  pts: Array.from({ length: count.value }, (_, i) => point(i, v).join(',')).join(' ')
}))
</script>

<template>
  <svg :width="size" :height="size" class="radar" role="img" aria-label="各科掌握度雷达图">
    <polygon v-for="r in rings" :key="r.v" :points="r.pts" fill="none" stroke="var(--line)" stroke-width="1" />
    <line v-for="a in axes" :key="a.id" :x1="center" :y1="center" :x2="a.px" :y2="a.py" stroke="var(--line)" stroke-width="1" />
    <polygon :points="polygon" fill="color-mix(in srgb, var(--mint) 16%, transparent)" stroke="var(--mint)" stroke-width="2" />
    <circle v-for="a in axes" :key="'d' + a.id" :cx="point(a.i, a.value)[0]" :cy="point(a.i, a.value)[1]" r="3" fill="var(--mint)" />
    <text
      v-for="a in axes" :key="'t' + a.id"
      :x="a.lx" :y="a.ly" text-anchor="middle" dominant-baseline="middle"
      class="axis-label"
    >{{ a.name }} {{ a.has ? a.value : '—' }}</text>
  </svg>
</template>

<style scoped>
.radar { max-width: 100%; }
.axis-label { font-family: var(--font-mono); font-size: 9.5px; fill: var(--text-2); letter-spacing: 0.03em; }
</style>
