<script setup>
import { computed, ref } from 'vue'
import { noteGroups, notes } from '../data/notes/index.js'
import AppIcon from '../components/AppIcon.vue'

const q = ref('')
const group = ref('')
const onlyHigh = ref(false)

const total = notes.filter(n => !n.isSection).length
const highCount = notes.filter(n => !n.isSection && n.priority === 'high').length

const filtered = computed(() => {
  const kw = q.value.trim().toLowerCase()
  return notes.filter(n => {
    if (n.isSection) return false
    if (group.value && n.group !== group.value) return false
    if (onlyHigh.value && n.priority !== 'high') return false
    if (!kw) return true
    return (n.title + ' ' + n.section + ' ' + n.keywords + ' ' + n.intro).toLowerCase().includes(kw)
  })
})

const sections = computed(() => {
  const map = new Map()
  for (const n of filtered.value) {
    const k = n.group + '|' + n.section
    if (!map.has(k)) map.set(k, { key: k, name: n.section || '未分栏', group: n.group, sectionKey: n.sectionKey, items: [] })
    map.get(k).items.push(n)
  }
  return [...map.values()]
})

const groupMeta = computed(() => Object.fromEntries(noteGroups.map(g => [g.id, g])))

function overviewOf(sec) {
  return notes.find(n => n.isSection && n.group === sec.group && (n.sectionKey === sec.sectionKey || n.section === sec.name))
}

function groupCount(id) {
  return notes.filter(n => n.group === id && !n.isSection).length
}

function prioText(p) {
  return p === 'high' ? '高优先' : p === 'mid' ? '中优先' : p === 'low' ? '了解' : ''
}
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">REFERENCE</div>
        <h1 class="page-title">资料库</h1>
        <div class="head-stats">
          <span><b>{{ total }}</b> 篇</span>
          <span><b>{{ noteGroups.length }}</b> 个栏目</span>
          <span><b>{{ highCount }}</b> 篇高频</span>
          <span class="dim">来源：计算机考研杂货铺</span>
        </div>
      </div>
    </div>

    <div class="searchbar" style="margin-bottom: 14px">
      <AppIcon name="search" :size="18" />
      <input v-model="q" type="search" placeholder="搜章节、考点，如 邻接矩阵、CSMA/CD、页表…" aria-label="搜索资料" />
      <span v-if="q" class="btn btn-text btn-sm" style="cursor: pointer" @click="q = ''">清空</span>
    </div>

    <div class="row filter-row" style="margin-bottom: 16px">
      <button class="chip clickable" :class="{ active: !group }" @click="group = ''">全部 {{ total }}</button>
      <button
        v-for="g in noteGroups" :key="g.id"
        class="chip clickable" :class="{ active: group === g.id }"
        @click="group = group === g.id ? '' : g.id"
      >{{ g.name }} {{ groupCount(g.id) }}</button>
      <span style="width: 1px; height: 18px; background: var(--line)" />
      <button class="chip clickable" :class="{ active: onlyHigh }" @click="onlyHigh = !onlyHigh">只看高频 {{ highCount }}</button>
      <div style="flex: 1" />
      <span class="tiny dim">{{ filtered.length }} 篇</span>
    </div>

    <div v-if="sections.length" class="stack" style="gap: 14px">
      <section v-for="sec in sections" :key="sec.key" class="card sec-card">
        <div class="sec-head">
          <span class="sec-name">{{ sec.name }}</span>
          <span class="chip tiny sub-chip" :style="{ '--sub': groupMeta[sec.group]?.color }"><span class="dot" />{{ groupMeta[sec.group]?.name }}</span>
          <span class="tiny dim">{{ sec.items.length }}</span>
          <div style="flex: 1" />
          <router-link v-if="overviewOf(sec)" :to="`/notes/${overviewOf(sec).id}`" class="sec-ov">章节导览 →</router-link>
        </div>
        <div class="sec-rows">
          <router-link v-for="n in sec.items" :key="n.id" :to="`/notes/${n.id}`" class="note-row">
            <span class="nr-title">{{ n.title }}</span>
            <span v-if="n.priority === 'high'" class="nr-flag high">高频</span>
            <span v-else-if="n.priority === 'mid'" class="nr-flag mid">中频</span>
            <span class="nr-meta mono">{{ n.minutes }} min</span>
            <span class="nr-arrow">→</span>
          </router-link>
        </div>
      </section>
    </div>
    <div v-else class="card card-pad" style="text-align: center">
      <div class="dim" style="padding: 24px 0">没有匹配的资料，换个关键词。</div>
    </div>
  </div>
</template>

<style scoped>
.sec-card { padding: 0; overflow: hidden; }
.sec-head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--line); background: color-mix(in srgb, var(--bg-2) 60%, transparent); }
.sec-name { font-size: 13px; font-weight: 600; letter-spacing: 0.02em; }
.sec-ov { font-size: 11.5px; color: var(--text-2); }
.sec-ov:hover { color: var(--mint); }
.sec-rows { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.note-row { display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-bottom: 1px dashed var(--line); color: var(--text-2); font-size: 13.5px; }
.note-row:nth-child(odd) { border-right: 1px dashed var(--line); }
.note-row:hover { background: color-mix(in srgb, var(--mint) 5%, transparent); color: var(--text); }
.nr-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.nr-flag { font-size: 10px; padding: 1px 5px; border-radius: 4px; font-family: var(--font-mono); }
.nr-flag.high { color: var(--rose); border: 1px solid color-mix(in srgb, var(--rose) 45%, transparent); }
.nr-flag.mid { color: var(--amber); border: 1px solid color-mix(in srgb, var(--amber) 40%, transparent); }
.nr-meta { font-size: 10.5px; color: var(--text-3); }
.nr-arrow { color: var(--text-3); font-size: 12px; }
@media (max-width: 900px) {
  .sec-rows { grid-template-columns: minmax(0, 1fr); }
  .note-row:nth-child(odd) { border-right: 0; }
  .filter-row { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
  .filter-row::-webkit-scrollbar { display: none; }
  .filter-row > * { flex: 0 0 auto; }
}
</style>
