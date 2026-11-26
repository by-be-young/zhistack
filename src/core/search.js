export function tokenize(q) {
  return (q || '').toLowerCase().split(/[\s,，、;；/|]+/).filter(Boolean)
}

function fieldScore(k, term) {
  let s = 0
  if (k.title && k.title.toLowerCase().includes(term)) s += 6
  if (k.gid && k.gid.toLowerCase().includes(term)) s += 4
  if (k.tags && k.tags.some(t => t.toLowerCase().includes(term))) s += 3
  if (k.summary && k.summary.toLowerCase().includes(term)) s += 2
  if (k.points && k.points.some(p => p.toLowerCase().includes(term))) s += 1
  return s
}

export function searchKnowledge(list, query, filters = {}) {
  let items = list
  if (filters.subject) items = items.filter(k => k.subject === filters.subject)
  if (filters.chapter) {
    items = items.filter(k => k.chapterId === filters.chapter ||
      (filters.chapterChildren || []).includes(k.chapterId))
  }
  if (filters.difficulty) items = items.filter(k => k.difficulty === Number(filters.difficulty))

  const terms = tokenize(query)
  if (!terms.length) {
    return items.map(k => ({ item: k, score: 0 })).sort((a, b) => a.item.id.localeCompare(b.item.id))
  }

  const scored = []
  for (const k of items) {
    const scores = terms.map(t => fieldScore(k, t))
    if (scores.some(s => s === 0)) continue
    scored.push({ item: k, score: scores.reduce((a, b) => a + b, 0) })
  }
  scored.sort((a, b) => b.score - a.score || a.item.id.localeCompare(b.item.id))
  return scored
}

// 返回 [{text, hit}] 片段，供模板安全渲染，不使用 v-html
export function highlightSegments(text, query) {
  const terms = tokenize(query)
  if (!terms.length || !text) return [{ text: text || '', hit: false }]
  const lower = text.toLowerCase()
  const marks = []
  for (const t of terms) {
    let i = lower.indexOf(t)
    while (i !== -1) {
      marks.push([i, i + t.length])
      i = lower.indexOf(t, i + t.length)
    }
  }
  if (!marks.length) return [{ text, hit: false }]
  marks.sort((a, b) => a[0] - b[0])
  const merged = []
  for (const m of marks) {
    const last = merged[merged.length - 1]
    if (last && m[0] <= last[1]) last[1] = Math.max(last[1], m[1])
    else merged.push([...m])
  }
  const out = []
  let cursor = 0
  for (const [s, e] of merged) {
    if (s > cursor) out.push({ text: text.slice(cursor, s), hit: false })
    out.push({ text: text.slice(s, e), hit: true })
    cursor = e
  }
  if (cursor < text.length) out.push({ text: text.slice(cursor), hit: false })
  return out
}
