<script setup>
import { computed, onMounted, ref } from 'vue'
import { books, subjectMap, subjects, chapterKnowledge, chapterQuestions } from '../data/index.js'
import { getMeta } from '../storage/pdfStore.js'
import AppIcon from '../components/AppIcon.vue'

const filter = ref('')
const metas = ref({})

const visible = computed(() => filter.value ? books.filter(b => b.subject === filter.value) : books)

function countOf(book) {
  let points = 0
  let questions = 0
  for (const ch of book.chapters) {
    points += chapterKnowledge[ch.id]?.length || 0
    questions += chapterQuestions[ch.id]?.length || 0
  }
  return { points, questions }
}

onMounted(async () => {
  for (const b of books) {
    metas.value[b.id] = await getMeta(b.id).catch(() => null)
  }
})
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">LIBRARY</div>
        <h1 class="page-title">书库与章节索引</h1>
        <p class="page-sub">书目只存公开出版信息与章节页码。教材 PDF 由你在本地挂载，不出本机。</p>
      </div>
      <div style="flex: 1" />
      <div class="pill-tabs">
        <button class="chip clickable" :class="{ active: !filter }" @click="filter = ''">全部</button>
        <button
          v-for="s in subjects" :key="s.id"
          class="chip clickable"
          :class="{ active: filter === s.id }"
          @click="filter = s.id"
        >{{ s.short }}</button>
      </div>
    </div>

    <div class="grid g-2">
      <router-link
        v-for="b in visible" :key="b.id"
        :to="`/library/${b.id}`"
        class="book-card card card-hover"
      >
        <div class="spine" :style="{ background: `var(--sub-${b.subject})` }" />
        <div class="book-body">
          <div class="row" style="justify-content: space-between">
            <span class="chip sub-chip" :style="{ '--sub': `var(--sub-${b.subject})` }">
              <span class="dot" />{{ subjectMap[b.subject]?.short }}
            </span>
            <span v-if="metas[b.id]" class="chip active"><AppIcon name="check" :size="11" /> 已挂载</span>
            <span v-else class="chip">未挂载</span>
          </div>
          <h2 class="book-title">{{ b.title }}</h2>
          <div class="tiny dim">{{ b.author }} · {{ b.edition }} · {{ b.publisher }}</div>
          <div class="book-meta">
            <span><b>{{ b.chapters.length }}</b> 章</span>
            <span><b>{{ countOf(b).points }}</b> 知识点</span>
            <span><b>{{ countOf(b).questions }}</b> 题</span>
          </div>
        </div>
      </router-link>
    </div>

    <div class="card card-pad mt-16">
      <div class="row" style="align-items: flex-start; gap: 14px">
        <div class="tip-icon"><AppIcon name="info" :size="18" /></div>
        <div>
          <h3 style="font-size: 15px">为什么没有正文</h3>
          <p class="small muted" style="margin: 6px 0 0">
            教材正文受版权保护，平台不托管、不分发。这里提供章节结构与印刷页码，用于把「知识点」定位到「书页」；
            PDF 由你自行选择并保存在浏览器本地，可随时解除挂载。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-card { display: flex; overflow: hidden; padding: 0; min-height: 168px; }
.spine { width: 6px; flex: 0 0 6px; opacity: 0.85; }
.book-body { padding: 18px 20px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.book-title { font-size: 19px; margin: 6px 0 2px; }
.book-meta { display: flex; gap: 18px; margin-top: auto; padding-top: 12px; border-top: 1px dashed var(--line); font-size: 12px; color: var(--text-3); }
.book-meta b { color: var(--text); font-weight: 600; margin-right: 3px; font-variant-numeric: tabular-nums; }
.tip-icon { width: 36px; height: 36px; border-radius: 9px; border: 1px solid var(--line); display: grid; place-items: center; color: var(--mint); flex: 0 0 auto; }
</style>
