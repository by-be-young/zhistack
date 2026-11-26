import { dayKey, weekDays } from './time.js'
import { knowledge } from '../data/index.js'
import { masteryOf } from './diagnose.js'

export function heatmap(archive, weeks = 12) {
  const endKey = dayKey()
  const cells = []
  const end = new Date()
  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const d = new Date(end)
    d.setDate(end.getDate() - i)
    const key = dayKey(d)
    const count = archive.daily?.[key]?.answered || 0
    cells.push({ key, count, level: levelOf(count), weekday: (d.getDay() + 6) % 7 })
  }
  const columns = []
  for (let i = 0; i < cells.length; i += 7) columns.push(cells.slice(i, i + 7))
  return { cells, columns }
}

function levelOf(n) {
  if (!n) return 0
  if (n < 10) return 1
  if (n < 25) return 2
  if (n < 50) return 3
  return 4
}

export function trend(archive, days = 7) {
  const out = []
  const end = new Date()
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(end)
    d.setDate(end.getDate() - i)
    const key = dayKey(d)
    const row = archive.daily?.[key] || { answered: 0, correct: 0, seconds: 0 }
    out.push({
      key,
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      answered: row.answered || 0,
      correct: row.correct || 0,
      accuracy: row.answered ? Math.round((row.correct / row.answered) * 100) : 0
    })
  }
  return out
}

export function radar(archive, now = new Date()) {
  const out = {}
  for (const k of knowledge) {
    const m = masteryOf(archive, k.id, now)
    const s = out[k.subject] ||= { sum: 0, count: 0 }
    if (m.mastery != null) {
      s.sum += m.mastery
      s.count++
    }
  }
  return Object.entries(out).map(([id, s]) => ({
    id,
    value: s.count ? Math.round(s.sum / s.count) : 0,
    has: s.count > 0
  }))
}

export function mistakeTop(archive, limit = 10) {
  const map = {}
  for (const [qid, m] of Object.entries(archive.mistakes || {})) {
    if (m.stage === 'mastered') continue
    const kid = m.knowledgeId
    if (!kid) continue
    map[kid] ||= { knowledgeId: kid, count: 0 }
    map[kid].count += 1
  }
  return Object.values(map)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
    .map(r => ({ ...r, title: knowledge.find(k => k.id === r.knowledgeId)?.title || r.knowledgeId }))
}

export function todaySummary(archive) {
  const today = archive.daily?.[dayKey()] || { answered: 0, correct: 0, seconds: 0 }
  return {
    answered: today.answered || 0,
    correct: today.correct || 0,
    accuracy: today.answered ? Math.round((today.correct / today.answered) * 100) : 0,
    minutes: Math.round((today.seconds || 0) / 60)
  }
}

export function weekSummary(archive) {
  const days = weekDays()
  let answered = 0
  let correct = 0
  let activeDays = 0
  for (const k of days) {
    const d = archive.daily?.[k]
    if (!d) continue
    answered += d.answered || 0
    correct += d.correct || 0
    if ((d.answered || 0) > 0) activeDays++
  }
  return { answered, correct, activeDays, accuracy: answered ? Math.round((correct / answered) * 100) : 0 }
}
