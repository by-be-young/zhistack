import { knowledge } from '../data/index.js'
import { questionById } from '../data/index.js'
import { computeMastery } from './mastery.js'
import { daysSince } from './time.js'
import { questionsByKnowledge } from '../data/index.js'

function mistakeCounts(archive, knowledgeId) {
  let open = 0
  let cleared = 0
  for (const [qid, m] of Object.entries(archive.mistakes || {})) {
    if (questionById[qid]?.knowledgeId !== knowledgeId) continue
    if (m.stage === 'mastered') cleared++
    else open++
  }
  return { open, cleared }
}

export function knowledgeStats(archive, knowledgeId) {
  return archive.knowledge?.[knowledgeId] || { attempts: 0, correct: 0, views: 0, lastAt: null }
}

export function masteryOf(archive, knowledgeId, now = new Date()) {
  return computeMastery(knowledgeStats(archive, knowledgeId), mistakeCounts(archive, knowledgeId), now)
}

export function reasonList(k, stats, masteryResult) {
  const reasons = []
  const a = stats.attempts || 0
  const c = stats.correct || 0
  if (a >= 3 && c / a < 0.6) reasons.push(`正确率 ${Math.round((c / a) * 100)}%（${a} 题对 ${c}）`)
  const mw = (masteryResult.openMistakes || 0)
  if (mw >= 1) reasons.push(`有 ${mw} 道错题未出本`)
  const d = daysSince(stats.lastAt)
  if (stats.lastAt && d >= 14) reasons.push(`已 ${d} 天未练`)
  if (a === 1) reasons.push('只练过 1 题，样本不足')
  if (a + (stats.views || 0) === 0) reasons.push('尚未开始，建议先摸底')
  if (reasons.length < 2) reasons.push(`可抽 ${masteryResult.pool || 0} 题专项`)
  return reasons.slice(0, 4)
}

/**
 * 返回薄弱排行与冷启动建议。
 */
export function diagnose(archive, now = new Date()) {
  const rows = []
  for (const k of knowledge) {
    const stats = knowledgeStats(archive, k.id)
    const m = masteryOf(archive, k.id, now)
    const openMistakes = mistakeCounts(archive, k.id).open
    m.openMistakes = openMistakes
    const pool = (questionsByKnowledge[k.id] || []).filter(q => !q.retired).length
    if (pool === 0) continue
    if ((stats.attempts || 0) === 0 && (stats.views || 0) === 0) continue
    if (m.mastery == null) continue
    const lastAt = stats.lastAt ? new Date(stats.lastAt).getTime() : 0
    const lastDays = daysSince(stats.lastAt)
    const recentPenalty = lastDays <= 3 ? 8 : lastDays <= 7 ? 4 : lastDays <= 14 ? 2 : 0
    const weakness = (100 - m.mastery) * (0.6 + 0.4 * Math.min(1, (stats.attempts || 0) / 4))
      + 12 * Math.min(3, openMistakes)
      + recentPenalty
    rows.push({ knowledge: k, stats, mastery: m, pool, weakness, lastAt, reasons: reasonList(k, stats, { ...m, pool, openMistakes }) })
  }

  rows.sort((x, y) => y.weakness - x.weakness || y.mastery.openMistakes - x.mastery.openMistakes || x.lastAt - y.lastAt)
  const qualified = rows.filter(r => r.mastery.mastery < 75)

  if (!qualified.length) {
    return { coldStart: rows.length === 0, items: [], allFirm: rows.length > 0 }
  }
  return { coldStart: false, items: qualified.slice(0, 6), allFirm: false }
}

export function coldStartPath() {
  const picks = []
  const bySubject = {}
  for (const k of knowledge) {
    if (k.difficulty !== 1) continue
    bySubject[k.subject] ||= k
    picks.push(k)
  }
  return Object.values(bySubject).map(k => ({
    knowledge: k,
    reason: ['尚未开始', '按科目均衡起步', '基础难度先摸底']
  })).slice(0, 7)
}

export function subjectStats(archive, now = new Date()) {
  const out = {}
  for (const k of knowledge) {
    const s = out[k.subject] ||= { sum: 0, count: 0, attempted: 0, attempts: 0, correct: 0, open: 0 }
    const m = masteryOf(archive, k.id, now)
    s.count++
    if (m.mastery != null) {
      s.sum += m.mastery
      s.attempted++
    }
    const st = knowledgeStats(archive, k.id)
    s.attempts += st.attempts || 0
    s.correct += st.correct || 0
    s.open += mistakeCounts(archive, k.id).open
  }
  for (const s of Object.values(out)) {
    s.mastery = s.attempted ? Math.round(s.sum / s.attempted) : null
    s.accuracy = s.attempts ? Math.round((s.correct / s.attempts) * 100) : null
  }
  return out
}
