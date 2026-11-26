import { dailyTasks, weeklyTasks, achievementDefs, cardsBySubject, subjects } from '../data/index.js'
import { dayKey, weekKey, weekDays, nowISO } from './time.js'
import { POINTS } from './config.js'
import { award } from './points.js'

export function ensurePeriods(archive) {
  const d = dayKey()
  const w = weekKey()
  archive.tasks ||= { daily: { date: null, items: {} }, weekly: { week: null, items: {} }, achievements: {} }
  if (!archive.tasks.daily || archive.tasks.daily.date !== d) {
    archive.tasks.daily = { date: d, items: {}, bonus: false }
  }
  if (!archive.tasks.weekly || archive.tasks.weekly.week !== w) {
    archive.tasks.weekly = { week: w, items: {} }
  }
  for (const t of dailyTasks) {
    archive.tasks.daily.items[t.id] ||= { progress: 0, claimed: false, claimedAt: null }
  }
  for (const t of weeklyTasks) {
    archive.tasks.weekly.items[t.id] ||= { progress: 0, claimed: false, claimedAt: null }
  }
  archive.tasks.achievements ||= {}

  const streakDays = weekDays().filter(k => (archive.daily?.[k]?.answered || 0) > 0).length
  const item = archive.tasks.weekly.items['t-week-streak']
  if (item) item.progress = Math.max(item.progress || 0, streakDays)
  return archive.tasks
}

export function bump(archive, metric, n = 1) {
  ensurePeriods(archive)
  for (const t of dailyTasks) {
    if (t.metric !== metric) continue
    const it = archive.tasks.daily.items[t.id]
    it.progress = Math.min(t.target, (it.progress || 0) + n)
  }
  for (const t of weeklyTasks) {
    if (t.metric !== metric) continue
    const it = archive.tasks.weekly.items[t.id]
    it.progress = Math.min(t.target, (it.progress || 0) + n)
  }
}

export function taskList(archive) {
  ensurePeriods(archive)
  return {
    daily: dailyTasks.map(t => ({ def: t, state: archive.tasks.daily.items[t.id] })),
    weekly: weeklyTasks.map(t => ({ def: t, state: archive.tasks.weekly.items[t.id] }))
  }
}

export function claim(archive, id) {
  ensurePeriods(archive)
  const def = [...dailyTasks, ...weeklyTasks].find(t => t.id === id)
  if (!def) return { ok: false, reason: 'unknown' }
  const bucket = def.cycle === 'daily' ? archive.tasks.daily : archive.tasks.weekly
  const state = bucket.items[id]
  if (!state) return { ok: false, reason: 'unknown' }
  if (state.claimed) return { ok: false, reason: 'claimed' }
  if ((state.progress || 0) < def.target) return { ok: false, reason: 'progress', need: def.target - (state.progress || 0) }

  state.claimed = true
  state.claimedAt = nowISO()
  const reward = award(archive, 'task', def.reward, `任务·${def.title}`, { capped: false })

  let bonus = 0
  if (def.cycle === 'daily') {
    const allDone = dailyTasks.every(t => archive.tasks.daily.items[t.id]?.claimed)
    if (allDone && !archive.tasks.daily.bonus) {
      archive.tasks.daily.bonus = true
      bonus = award(archive, 'task', POINTS.dailyAllDone, '每日任务全清', { capped: false })
    }
  }
  return { ok: true, reward, bonus }
}

export function claimedCount(archive, cycle) {
  ensurePeriods(archive)
  if (cycle === 'daily') {
    const defs = dailyTasks
    return defs.filter(t => archive.tasks.daily.items[t.id]?.claimed).length
  }
  return weeklyTasks.filter(t => archive.tasks.weekly.items[t.id]?.claimed).length
}

function achievementDone(id, archive) {
  const p = archive.profile || {}
  const owned = archive.cards?.owned || {}
  switch (id) {
    case 'a-first-paper': return (p.totals?.sessions || 0) >= 1
    case 'a-first-perfect':
      return (archive.sessions || []).some(s => s.count >= 10 && s.correct === s.count)
    case 'a-100-questions': return (p.totals?.answered || 0) >= 100
    case 'a-1000-questions': return (p.totals?.answered || 0) >= 1000
    case 'a-subject-80':
      return Object.values(p.subjectStats || {}).some(s => s.answered >= 30 && s.answered > 0 && s.correct / s.answered >= 0.8)
    case 'a-clear-10': return (p.clearedCount || 0) >= 10
    case 'a-streak-30': return (p.streak?.longest || 0) >= 30
    case 'a-collect-one':
      return subjects.some(s => {
        const list = cardsBySubject[s.id] || []
        return list.length > 0 && list.every(c => owned[c.id])
      })
    case 'a-all-subjects':
      return subjects.every(s => (p.subjectStats?.[s.id]?.sessions || 0) >= 1)
    default: return false
  }
}

export function checkAchievements(archive) {
  ensurePeriods(archive)
  const unlocked = []
  for (const def of achievementDefs) {
    if (archive.tasks.achievements[def.id]) continue
    if (!achievementDone(def.id, archive)) continue
    archive.tasks.achievements[def.id] = nowISO()
    award(archive, 'achievement', def.reward, `成就·${def.title}`, { capped: false })
    unlocked.push(def)
  }
  return unlocked
}

export function achievementList(archive) {
  ensurePeriods(archive)
  return achievementDefs.map(def => ({ def, at: archive.tasks.achievements[def.id] || null }))
}
