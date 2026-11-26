<script setup>
import { computed } from 'vue'

const props = defineProps({ text: { type: String, default: '' }, query: { type: String, default: '' } })

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\^\{[^}]+\}|_\{[^}]+\}|\[\[[^\]]+\]\]|~~[^~]+~~)/g

function parse(src) {
  const nodes = []
  const blocks = src.split(/```/)
  blocks.forEach((chunk, i) => {
    if (i % 2 === 1) {
      nodes.push({ type: 'codeblock', text: chunk.replace(/^\n/, '').replace(/\n$/, '') })
      return
    }
    const parts = chunk.split('\n')
    parts.forEach((line, li) => {
      if (li > 0) nodes.push({ type: 'br' })
      let last = 0
      let m
      TOKEN.lastIndex = 0
      while ((m = TOKEN.exec(line)) !== null) {
        if (m.index > last) nodes.push({ type: 'text', text: line.slice(last, m.index) })
        const raw = m[0]
        if (raw.startsWith('**')) nodes.push({ type: 'bold', text: raw.slice(2, -2) })
        else if (raw.startsWith('`')) nodes.push({ type: 'code', text: raw.slice(1, -1) })
        else if (raw.startsWith('^{')) nodes.push({ type: 'sup', text: raw.slice(2, -1) })
        else if (raw.startsWith('_{')) nodes.push({ type: 'sub', text: raw.slice(2, -1) })
        else if (raw.startsWith('[[')) nodes.push({ type: 'link', text: raw.slice(2, -2) })
        else if (raw.startsWith('~~')) nodes.push({ type: 'strike', text: raw.slice(2, -2) })
        last = m.index + raw.length
      }
      if (last < line.length) nodes.push({ type: 'text', text: line.slice(last) })
    })
  })
  return nodes
}

const nodes = computed(() => parse(props.text || ''))
</script>

<template>
  <span class="rich">
    <template v-for="(n, i) in nodes" :key="i">
      <br v-if="n.type === 'br'" />
      <code v-else-if="n.type === 'code'" class="inline-code">{{ n.text }}</code>
      <b v-else-if="n.type === 'bold'">{{ n.text }}</b>
      <sup v-else-if="n.type === 'sup'">{{ n.text }}</sup>
      <sub v-else-if="n.type === 'sub'">{{ n.text }}</sub>
      <s v-else-if="n.type === 'strike'" class="dim">{{ n.text }}</s>
      <router-link v-else-if="n.type === 'link'" :to="`/knowledge/${n.text}`" class="inline-link">{{ n.text }}</router-link>
      <pre v-else-if="n.type === 'codeblock'" class="codeblock">{{ n.text }}</pre>
      <span v-else>{{ n.text }}</span>
    </template>
  </span>
</template>

<style scoped>
.rich { white-space: pre-wrap; }
.inline-code { font-family: var(--font-mono); font-size: 0.9em; padding: 1px 5px; border-radius: 4px; background: var(--bg-3); color: var(--mint); }
.codeblock {
  margin: 8px 0; padding: 12px 14px; white-space: pre; overflow-x: auto;
  background: var(--bg-0); border: 1px solid var(--line); border-radius: 8px;
  font-family: var(--font-mono); font-size: 12.5px; line-height: 1.65; color: var(--text-2);
}
.inline-link { font-family: var(--font-mono); font-size: 11.5px; border-bottom: 1px dashed var(--line-strong); }
</style>
