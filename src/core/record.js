import { questionById, knowledgeById, subjects } from '../data/index.js'
import { POINTS, STREAK } from './config.js'
import { award } from './points.js'
import { bump, checkAchievements, ensurePeriods } from './tasks.js'
import { dayKey, nowISO, daysSince } from './time.js'
import { LIMITS } from './config.js'

function ensureDedupeDay(p) {
  const day = dayKey()
  if (p.dailyPoints?.date !== day) {
    p.dailyPoints = { date: day, value: 0 }
    p.dedupe = {}
  }
}

export function updateStreak(archive) {
  const p = archive.profile
  const day = dayKey()
  const last = p.streak.lastDate
  if (last === day) return { current: p.streak.current, isNew: false }
  if (last && daysSince(last) === 1) p.streak.current += 1
  else p.streak.current = 1
  p.streak.lastDate = day
  p.streak.longest = Math.max(p.streak.longest, p.streak.current)

  p.milestones ||= []
  for (const m of STREAK.milestones) {
    const key = `streak-${m.days}`
    if (p.streak.current >= m.days && !p.milestones.includes(key)) {
      p.milestones.push(key)
      award(archive, 'streak', m.reward, `连续打卡 ${m.days} 天`, { capped: false })
    }
  }
  return { current: p.streak.current, isNew: true }
}

/**
 * 交卷后的一次性写入：知识点原料、错题状态机、总量、日聚合、积分、任务、成就。
 */
export function recordSession(archive, session, graded) {
  const p = archive.profile
  const day = dayKey()
  ensureDedupeDay(p)
  ensurePeriods(archive)

  const durationSec = Math.max(0, session.durationSecUsed || 0)
  const newMistakes = []
  const cleared = []
  let gained = 0

  for (const item of graded.items) {
    const q = questionById[item.qid]
    if (!q) continue
    const k = knowledgeById[q.knowledgeId]
    if (!k) continue

    const stats = (archive.knowledge[q.knowledgeId] ||= {
      attempts: 0, correct: 0, views: 0, lastAt: null, manual: null, bookOpens: 0
    })
    stats.attempts += 1
    if (item.correct) stats.correct += 1
    stats.lastAt = nowISO()

    // 错题状态机：主观题需要人工自评，不进入客观错题重练池
    const mk = archive.mistakes[q.id]
    if (!item.correct && q.type !== 'subjective') {
      if (!mk) {
        archive.mistakes[q.id] = {
          qid: q.id,
          knowledgeId: q.knowledgeId,
          firstAt: nowISO(),
          lastAt: nowISO(),
          count: 1,
          stage: 'new',
          rightStreak: 0,
          lastKeys: item.keys,
          lastResult: 'wrong',
          releasedAt: null
        }
        newMistakes.push(q.id)
      } else {
        mk.count += 1
        mk.lastAt = nowISO()
        mk.stage = 'new'
        mk.rightStreak = 0
        mk.lastKeys = item.keys
        mk.lastResult = 'wrong'
        mk.releasedAt = null
        mk.knowledgeId = q.knowledgeId
      }
    } else if (mk && mk.stage !== 'mastered') {
      mk.rightStreak = (mk.rightStreak || 0) + 1
      mk.lastAt = nowISO()
      mk.lastResult = 'right'
      if (mk.rightStreak >= 2) {
        mk.stage = 'mastered'
        mk.releasedAt = nowISO()
        p.clearedCount = (p.clearedCount || 0) + 1
        cleared.push(q.id)
      } else {
        mk.stage = 'reviewing'
      }
    }

    // 积分：同题当日只计一次
    const dk = `q:${q.id}:${day}`
    if (!p.dedupe[dk]) {
      p.dedupe[dk] = 1
      gained += award(archive, 'answer', item.correct ? POINTS.correct : POINTS.wrong, `${k.title}·${item.correct ? '答对' : '答错'}`)
    }
    if (session.mode === 'mistake') {
      const rk = `mr:${q.id}:${day}`
      if (!p.dedupe[rk]) {
        p.dedupe[rk] = 1
        gained += award(archive, 'review', POINTS.mistakeReview, `错题重练·${k.title}`)
      }
    }
  }

  for (const qid of cleared) {
    gained += award(archive, 'clear', POINTS.mistakeCleared, '错题出本', { dedupeKey: `clear:${qid}` })
  }

  // 会话奖励
  if (graded.total >= 10) {
    gained += award(archive, 'session', POINTS.sessionDone, `完成 ${graded.total} 题`, { dedupeKey: `sess:${session.id}` })
    if (graded.accuracy >= 80) {
      gained += award(archive, 'session', POINTS.sessionGood, `正确率 ${graded.accuracy}%`, { dedupeKey: `good:${session.id}` })
    }
    if (graded.accuracy === 100) {
      gained += award(archive, 'session', POINTS.sessionPerfect - POINTS.sessionGood, '满分会话', { dedupeKey: `perfect:${session.id}` })
    }
  } else {
    gained += award(archive, 'session', 5, `完成 ${graded.total} 题`, { dedupeKey: `sess:${session.id}` })
  }

  // 总量与科目统计
  p.totals.answered += graded.total
  p.totals.correct += graded.correctCount
  p.totals.sessions += 1
  p.totals.seconds += durationSec

  const sessionSubjects = [...new Set(graded.items.map(i => questionById[i.qid]?.subject).filter(Boolean))]
  for (const sid of sessionSubjects) {
    const s = (p.subjectStats[sid] ||= { answered: 0, correct: 0, sessions: 0 })
    s.sessions += 1
    for (const item of graded.items) {
      if (questionById[item.qid]?.subject !== sid) continue
      s.answered += 1
      if (item.correct) s.correct += 1
    }
  }

  const d = archive.daily[day] || (archive.daily[day] = { answered: 0, correct: 0, seconds: 0 })
  d.answered += graded.total
  d.correct += graded.correctCount
  d.seconds += durationSec

  const summary = {
    id: session.id,
    mode: session.mode,
    paperId: session.paperId || null,
    paperTitle: session.paperTitle || '',
    title: session.title || '',
    subjects: sessionSubjects,
    count: graded.total,
    answered: graded.answered,
    correct: graded.correctCount,
    accuracy: graded.accuracy,
    score: graded.score,
    rawPoints: graded.rawPoints,
    totalPoints: graded.totalPoints,
    durationSec,
    startedAt: session.startedAt,
    endedAt: nowISO(),
    qids: session.qids
  }
  archive.sessions.unshift(summary)
  if (archive.sessions.length > LIMITS.sessions) archive.sessions.length = LIMITS.sessions

  const streak = updateStreak(archive)

  bump(archive, 'answered', graded.total)
  bump(archive, 'correct', graded.correctCount)
  bump(archive, 'paperDone', 1)
  if (session.mode === 'mistake') bump(archive, 'mistakeReview', graded.total)
  if (cleared.length) bump(archive, 'mistakeCleared', cleared.length)

  const unlocked = checkAchievements(archive)

  return {
    gained,
    newMistakes,
    cleared,
    streak,
    unlocked,
    total: p.totals.answered
  }
}

export function recordMistakeReview(archive, qid, result) {
  const mk = archive.mistakes[qid]
  if (!mk) return { cleared: false }
  const p = archive.profile
  ensurePeriods(archive)
  ensureDedupeDay(p)
  let gained = 0
  if (result === 'right') {
    mk.rightStreak = (mk.rightStreak || 0) + 1
    mk.lastAt = nowISO()
    mk.lastResult = 'right'
    if (mk.rightStreak >= 2 && mk.stage !== 'mastered') {
      mk.stage = 'mastered'
      mk.releasedAt = nowISO()
      p.clearedCount = (p.clearedCount || 0) + 1
      gained += award(archive, 'clear', POINTS.mistakeCleared, '错题出本', { dedupeKey: `clear:${qid}` })
      bump(archive, 'mistakeCleared', 1)
      return { cleared: true, gained }
    }
    mk.stage = 'reviewing'
  } else {
    mk.count += 1
    mk.stage = 'new'
    mk.rightStreak = 0
    mk.lastAt = nowISO()
    mk.lastResult = 'wrong'
  }
  checkAchievements(archive)
  return { cleared: false, gained }
}

export function recordKnowledgeView(archive, kid) {
  const stats = (archive.knowledge[kid] ||= {
    attempts: 0, correct: 0, views: 0, lastAt: null, manual: null, bookOpens: 0
  })
  const first = (stats.views || 0) === 0
  stats.views = (stats.views || 0) + 1
  ensurePeriods(archive)
  bump(archive, 'knowledgeView', 1)
  if (first) award(archive, 'knowledge', POINTS.knowledgeFirst, '首次学习知识点', { dedupeKey: `kv:${kid}` })
}

export function recordBookOpen(archive, bookId, page) {
  ensurePeriods(archive)
  const p = archive.profile
  ensureDedupeDay(p)
  const key = `book:${dayKey()}`
  if (!p.dedupe[key]) {
    p.dedupe[key] = 1
    award(archive, 'book', POINTS.bookOpen, '打开书页')
  }
}

export function subjectList() {
  return subjects
}
