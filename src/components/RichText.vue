<script setup>
import { computed } from 'vue'
import katex from 'katex'

const props = defineProps({ text: { type: String, default: '' }, query: { type: String, default: '' } })

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\^\{[^}]+\}|_\{[^}]+\}|\[\[[^\]]+\]\]|~~[^~]+~~)/g
const MATH = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g

function renderMath(src, display) {
  try {
    return katex.renderToString(src, {
      displayMode: display,
      throwOnError: false,
      strict: false,
      trust: false,
      output: 'html'
    })
  } catch {
    return `<code>${src.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>`
  }
}

function parseInline(line, nodes) {
  let last = 0
  let m
  INLINE.lastIndex = 0
  while ((m = INLINE.exec(line)) !== null) {
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
}

function parseText(chunk, nodes) {
  let last = 0
  let m
  MATH.lastIndex = 0
  while ((m = MATH.exec(chunk)) !== null) {
    if (m.index > last) splitLines(chunk.slice(last, m.index), nodes)
    const raw = m[0]
    const display = raw.startsWith('$$')
    const body = display ? raw.slice(2, -2) : raw.slice(1, -1)
    nodes.push({ type: 'math', html: renderMath(body.trim(), display), display })
    last = m.index + raw.length
  }
  if (last < chunk.length) splitLines(chunk.slice(last), nodes)
}

function splitLines(chunk, nodes) {
  const parts = chunk.split('\n')
  parts.forEach((line, li) => {
    if (li > 0) nodes.push({ type: 'br' })
    parseInline(line, nodes)
  })
}

const TABLE_SEP = /^\|(?:\s*:?-{3,}:?\s*\|)+$/

function splitRow(line) {
  return line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((s) => s.trim())
}

function parseLines(src, nodes) {
  const lines = src.split('\n')
  let buf = []
  const flush = () => {
    if (buf.length) {
      parseText(buf.join('\n'), nodes)
      buf = []
    }
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    const next = (lines[i + 1] || '').trim()
    if (line.startsWith('|') && TABLE_SEP.test(next) && next.split('|').length === line.split('|').length) {
      flush()
      const head = splitRow(line)
      const rows = []
      i += 2
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i].trim()))
        i++
      }
      i--
      nodes.push({ type: 'table', head, rows })
    } else {
      buf.push(lines[i])
    }
  }
  flush()
}

function parse(src) {
  const nodes = []
  const blocks = src.split(/```/)
  blocks.forEach((chunk, i) => {
    if (i % 2 === 1) {
      nodes.push({ type: 'codeblock', text: chunk.replace(/^\n/, '').replace(/\n$/, '') })
      return
    }
    parseLines(chunk, nodes)
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
      <span v-else-if="n.type === 'table'" class="md-table-wrap">
        <table class="md-table">
          <thead>
            <tr><th v-for="(h, hi) in n.head" :key="hi">{{ h }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="(row, ri) in n.rows" :key="ri">
              <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </span>
      <span v-else-if="n.type === 'math'" class="math" :class="{ display: n.display }" v-html="n.html" />
      <span v-else>{{ n.text }}</span>
    </template>
  </span>
</template>

<style scoped>
.rich { white-space: pre-wrap; }
.inline-code {
  font-family: var(--font-mono); font-size: 0.88em; padding: 0.08em 0.36em; border-radius: 5px;
  border: 1px solid var(--doc-rule); background: var(--doc-mark); color: var(--mint);
}
.codeblock {
  margin: 8px 0; padding: 12px 14px; white-space: pre-wrap; overflow-wrap: anywhere; overflow-x: auto;
  background: var(--doc-code-bg); border: 1px solid var(--doc-code-line); border-radius: 10px;
  font-family: var(--font-mono); font-size: 12.5px; line-height: 1.7; color: var(--doc-code-ink);
}
.inline-link { font-family: var(--font-mono); font-size: 11.5px; border-bottom: 1px dashed var(--doc-rule-mid); }
.math { white-space: normal; }
.math.display { display: block; margin: 10px 0; padding: 6px 0; overflow-x: auto; overflow-y: hidden; }
.md-table-wrap {
  display: block; margin: 10px 0; overflow-x: auto;
  border: 1px solid var(--doc-rule-mid); border-radius: 10px; background: var(--bg-1);
}
.md-table { width: 100%; border-collapse: collapse; font-size: 12.5px; white-space: normal; background: transparent; }
.md-table th, .md-table td { border: 0; border-bottom: 1px solid var(--doc-rule); padding: 6px 9px; text-align: center; }
.md-table th {
  background: var(--doc-table-head); font-family: var(--font-display); font-weight: 400; font-synthesis: none;
  letter-spacing: 0.02em; color: var(--doc-ink); border-bottom-color: var(--doc-rule-mid);
}
.md-table td { color: var(--doc-ink-soft); }
.md-table tbody tr:nth-child(even) td { background: var(--doc-table-zebra); }
.md-table tbody tr:last-child td { border-bottom: 0; }
.math :deep(.katex) { font-size: 1.02em; }
.math.display :deep(.katex-display) { margin: 0; text-align: center; }
</style>
