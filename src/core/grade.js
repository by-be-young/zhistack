import { questionById, knowledgeById } from '../data/index.js'

export function isCorrect(q, keys) {
  if (!q || !keys || !keys.length) return false
  if (q.type === 'subjective') return false
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

function selfRatio(session, qid) {
  const v = Number(session.selfGrades?.[qid])
  if (!Number.isFinite(v)) return 0
  return Math.max(0, Math.min(1, v))
}

export function gradeSession(session, { partialCredit = true } = {}) {
  const qids = session.qids || []
  const items = qids.map(qid => {
    const q = questionById[qid]
    const raw = (session.answers || {})[qid]
    const isSubjective = q?.type === 'subjective'
    const keys = isSubjective ? [] : (raw || [])
    const text = isSubjective ? String(raw || '') : ''
    const maxScore = Number(q?.score) || 1
    const ratio = isSubjective ? selfRatio(session, qid) : partialScore(q, keys, partialCredit)
    const correct = isSubjective ? ratio >= 0.6 : isCorrect(q, keys)
    const answered = isSubjective ? text.trim().length > 0 : keys.length > 0
    return {
      qid,
      keys,
      text,
      answer: q ? q.answer : [],
      correct,
      partial: !isSubjective && ratio === 0.5,
      score: ratio,
      points: Math.round(maxScore * ratio * 10) / 10,
      maxScore,
      selfRatio: isSubjective ? ratio : null,
      selfGraded: isSubjective ? session.selfGrades?.[qid] != null : false,
      answered,
      knowledgeId: q?.knowledgeId || null,
      type: q?.type || 'single'
    }
  })
  const total = items.length
  const correctCount = items.filter(i => i.correct).length
  const answered = items.filter(i => i.answered).length
  const rawPoints = items.reduce((s, i) => s + i.points, 0)
  const totalPoints = items.reduce((s, i) => s + i.maxScore, 0) || total
  const score = totalPoints ? Math.round((rawPoints / totalPoints) * 100) : 0
  const accuracy = total ? Math.round((correctCount / total) * 100) : 0
  return {
    items, total, correctCount, answered, score, accuracy,
    rawPoints: Math.round(rawPoints * 10) / 10,
    totalPoints
  }
}

export function subjectBreakdown(items) {
  const map = {}
  for (const it of items) {
    const s = questionById[it.qid]?.subject
    if (!s) continue
    map[s] ||= { total: 0, correct: 0, points: 0, maxScore: 0 }
    map[s].total++
    if (it.correct) map[s].correct++
    map[s].points += it.points || 0
    map[s].maxScore += it.maxScore || 1
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
