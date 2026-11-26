import { questionById, knowledgeById } from '../data/index.js'

export function isCorrect(q, keys) {
  if (!q || !keys || !keys.length) return false
  const ans = [...q.answer].sort()
  const got = [...keys].sort()
  if (ans.length !== got.length) return false
  return ans.every((k, i) => k === got[i])
}

export function partialScore(q, keys, partialCredit = true) {
  if (!q || !keys || !keys.length) return 0
  if (isCorrect(q, keys)) return 1
  if (q.type === 'multiple' && partialCredit) {
    const ans = new Set(q.answer)
    if (keys.every(k => ans.has(k))) return 0.5
  }
  return 0
}

export function gradeSession(session, { partialCredit = true } = {}) {
  const qids = session.qids || []
  const items = qids.map(qid => {
    const q = questionById[qid]
    const keys = (session.answers || {})[qid] || []
    const correct = isCorrect(q, keys)
    const score = partialScore(q, keys, partialCredit)
    return {
      qid,
      keys,
      answer: q ? q.answer : [],
      correct,
      partial: score === 0.5,
      score,
      answered: keys.length > 0,
      knowledgeId: q?.knowledgeId || null,
      type: q?.type || 'single'
    }
  })
  const total = items.length
  const correctCount = items.filter(i => i.correct).length
  const answered = items.filter(i => i.answered).length
  const raw = items.reduce((s, i) => s + i.score, 0)
  const score = total ? Math.round((raw / total) * 100) : 0
  const accuracy = total ? Math.round((correctCount / total) * 100) : 0
  return { items, total, correctCount, answered, score, accuracy }
}

export function subjectBreakdown(items) {
  const map = {}
  for (const it of items) {
    const s = questionById[it.qid]?.subject
    if (!s) continue
    map[s] ||= { total: 0, correct: 0 }
    map[s].total++
    if (it.correct) map[s].correct++
  }
  return map
}

export function knowledgeBreakdown(items) {
  const map = {}
  for (const it of items) {
    const k = it.knowledgeId
    if (!k) continue
    map[k] ||= { total: 0, correct: 0, name: knowledgeById[k]?.title || k }
    map[k].total++
    if (it.correct) map[k].correct++
  }
  return map
}
