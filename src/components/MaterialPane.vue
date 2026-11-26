<script setup>
import { computed, ref, watch, nextTick, onMounted } from 'vue'
import RichText from './RichText.vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  material: { type: Object, required: true },
  resetKey: { type: String, default: '' },
  focus: { type: Number, default: 0 }
})
const emit = defineEmits(['close'])

const blocks = computed(() => props.material.blocks || [])
const active = ref(0)
const fontSize = ref(Math.min(19, Math.max(13, props.material.fontSize || 15)))
const scrollEl = ref(null)
const tops = []

watch(() => props.resetKey, async () => {
  active.value = 0
  tops.length = 0
  await nextTick()
  if (scrollEl.value) scrollEl.value.scrollTop = 0
})
watch(blocks, () => { if (active.value >= blocks.value.length) active.value = 0 })

function scrollToFocus(n) {
  const el = scrollEl.value
  if (!el || !n) return
  const text = blocks.value[active.value]?.text || ''
  const mark = text.includes(`__${n}__`) ? `__${n}__` : `(${n})`
  const idx = text.indexOf(mark)
  if (idx < 0) return
  const range = Math.max(0, el.scrollHeight - el.clientHeight)
  if (n <= 1) {
    el.scrollTop = 0
    return
  }
  el.scrollTop = Math.max(0, range * (idx / Math.max(1, text.length)) - 16)
}

watch(() => props.focus, async n => {
  if (!n) return
  await nextTick()
  scrollToFocus(n)
})

onMounted(async () => {
  await nextTick()
  scrollToFocus(props.focus)
})

function setActive(i) {
  if (i === active.value) return
  if (scrollEl.value) tops[active.value] = scrollEl.value.scrollTop
  active.value = i
  nextTick(() => {
    if (scrollEl.value) scrollEl.value.scrollTop = tops[i] || 0
  })
}

function zoom(delta) {
  fontSize.value = Math.max(13, Math.min(19, fontSize.value + delta))
}
</script>

<template>
  <section class="material-pane card">
    <header class="mp-head">
      <div class="spread" style="gap: 8px">
        <div class="row" style="gap: 8px; min-width: 0">
          <span class="mp-eyebrow">MATERIAL</span>
          <span class="mp-title">{{ material.title || '阅读材料' }}</span>
        </div>
        <button class="icon-btn" aria-label="收起材料" @click="emit('close')">
          <AppIcon name="chevron-left" :size="15" />
        </button>
      </div>

      <div v-if="blocks.length > 1" class="mp-tabs" role="tablist">
        <button
          v-for="(b, i) in blocks" :key="i"
          class="chip clickable" :class="{ active: active === i }"
          role="tab" :aria-selected="active === i"
          @click="setActive(i)"
        >{{ b.label || `材料 ${i + 1}` }}</button>
      </div>

      <div class="mp-tools">
        <button class="mp-tool" aria-label="缩小字号" @click="zoom(-1)">A−</button>
        <span class="mono tiny dim">{{ fontSize }}px</span>
        <button class="mp-tool" aria-label="放大字号" @click="zoom(1)">A＋</button>
      </div>
    </header>

    <div ref="scrollEl" class="mp-body" data-ink-scroll="material" :style="{ fontSize: fontSize + 'px' }">
      <article
        v-for="(b, i) in blocks" v-show="active === i" :key="i"
        class="mp-block"
        :data-ink-anchor="`m-${material.key || 'mat'}-${i}`"
      >
        <RichText :text="b.text" />
      </article>
    </div>

  </section>
</template>

<style scoped>
.material-pane {
  display: flex; flex-direction: column;
  position: sticky; top: 84px;
  max-height: calc(100vh - 108px);
  overflow: hidden;
  border-radius: 14px;
  background: var(--bg-1);
}
.mp-head { padding: 14px 16px 10px; border-bottom: 1px solid var(--line); }
.mp-eyebrow { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .16em; color: var(--text-3); }
.mp-title { font-size: 13px; font-weight: 600; }
.mp-tabs { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.mp-tool { border: 1px solid var(--line); background: var(--bg-2); color: var(--text-2); border-radius: 6px; height: 24px; min-width: 28px; font-size: 11px; cursor: pointer; }
.mp-tools { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
.mp-body {
  flex: 1; overflow-y: auto; padding: 16px;
  line-height: 1.95; color: var(--text-2);
  overscroll-behavior: contain;
  scrollbar-width: thin;
}
.mp-block { margin-bottom: 18px; }
.mp-block:last-child { margin-bottom: 0; }
.mp-label {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .08em;
  color: var(--text-3); text-transform: uppercase;
  margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px dashed var(--line);
}
.mp-body :deep(.rich) { white-space: pre-wrap; }
</style>
