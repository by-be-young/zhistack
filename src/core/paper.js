import { questions, questionsByKnowledge, knowledgeById } from '../data/index.js'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function availableCount({ subjects = [], year = null, knowledgeIds = [] }) {
  return questions.filter(q => {
    if (q.retired || q.paperOnly) return false
    if (subjects.length && !subjects.includes(q.subject)) return false
    if (year && q.year !== year) return false
    if (knowledgeIds.length && !knowledgeIds.includes(q.knowledgeId)) return false
    return true
  }).length
}

/**
 * 以知识点为桶轮转抽题，保证覆盖广度，单知识点占比不超过 30%。
 */
export function buildPaper({
  subjects = [], count = 10, year = null, knowledgeIds = [], recentQids = [], chapter = null
}) {
  let pool = questions.filter(q => {
    if (q.retired || q.paperOnly) return false
    if (subjects.length && !subjects.includes(q.subject)) return false
    if (year && q.year !== year) return false
    return true
  })

  if (knowledgeIds.length) {
    const kidSet = new Set(knowledgeIds)
    pool = pool.filter(q => kidSet.has(q.knowledgeId))
  }
  if (chapter) {
    pool = pool.filter(q => (knowledgeById[q.knowledgeId]?.chapterId || '').startsWith(chapter))
  }

  if (!pool.length) return { qids: [], shortage: true, reason: 'empty' }

  const freshPool = pool.filter(q => !recentQids.includes(q.id))
  const source = freshPool.length >= count ? freshPool : pool

  const buckets = new Map()
  for (const q of source) {
    if (!buckets.has(q.knowledgeId)) buckets.set(q.knowledgeId, [])
    buckets.get(q.knowledgeId).push(q)
  }
  for (const [, arr] of buckets) {
    const s = shuffle(arr)
    arr.length = 0
    arr.push(...s)
  }

  const order = shuffle([...buckets.keys()])
  const picked = []
  const used = new Map()
  let guard = 0
  const maxPer = count >= 10 && order.length >= 4 ? Math.max(2, Math.ceil(count * 0.3)) : count

  while (picked.length < count && guard < count * 50) {
    guard++
    let progressed = false
    for (const kid of order) {
      if (picked.length >= count) break
      const arr = buckets.get(kid)
      if (!arr || !arr.length) continue
      if ((used.get(kid) || 0) >= maxPer) continue
      const q = arr.shift()
      picked.push(q)
      used.set(kid, (used.get(kid) || 0) + 1)
      progressed = true
    }
    if (!progressed) break
  }

  return {
    qids: picked.map(q => q.id),
    shortage: picked.length < count,
    available: pool.length
  }
}

export function recentQuestionIds(sessions, days = 3) {
  const cutoff = Date.now() - days * 86400000
  const ids = []
  for (const s of sessions) {
    if (new Date(s.endedAt).getTime() < cutoff) continue
    for (const qid of s.qids || []) ids.push(qid)
  }
  return ids
}

export function sameChapterQuestions(knowledgeId, limit = 20) {
  const k = knowledgeById[knowledgeId]
  if (!k) return []
  return questions
    .filter(q => !q.retired && knowledgeById[q.knowledgeId]?.chapterId === k.chapterId)
    .slice(0, limit)
    .map(q => q.id)
}
