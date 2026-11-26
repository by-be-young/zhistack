import { daysSince } from './time.js'
import { MASTERY } from './config.js'

/**
 * 掌握度模型：Laplace 平滑正确率 + 近因衰减 + 错题惩罚 + 覆盖度，低样本时向中值收缩。
 * @param {{attempts:number,correct:number,lastAt:string,views:number,manual:string}} stats
 * @param {{open:number,cleared:number}} mistakes
 */
export function computeMastery(stats = {}, mistakes = { open: 0, cleared: 0 }, now = new Date()) {
  const a = stats.attempts || 0
  const c = stats.correct || 0
  const v = stats.views || 0
  if (a === 0 && v === 0) {
    return { mastery: null, label: '未练', parts: null, confidence: 0 }
  }

  const accS = (c + 1) / (a + 2)
  const recencyS = Math.exp(-daysSince(stats.lastAt, now) / MASTERY.recencyHalflife)
  const mistakeS = 1 / (1 + 0.8 * (mistakes.open || 0))
  const coverS = Math.min(1, (a + 0.5 * v) / 4)
  const confidence = MASTERY.confidenceBase + 0.6 * Math.min(1, a / 6)

  const base = 0.58 * accS + 0.22 * recencyS + 0.12 * mistakeS + 0.08 * coverS
  let mastery = Math.round(100 * base * confidence + 100 * base * (1 - confidence) * 0.55)

  if (stats.manual === 'mastered') mastery = Math.max(mastery, 85)
  if (stats.manual === 'review') mastery = Math.min(mastery, 45)
  mastery = Math.max(1, Math.min(100, mastery))

  let label = '样本少'
  if (a >= 2 && mastery < MASTERY.weak) label = '薄弱'
  else if (mastery >= MASTERY.firm && a >= 3) label = '稳固'
  else if (a >= 2) label = '待巩固'
  if (stats.manual === 'mastered') label = '手动掌握'
  if (stats.manual === 'review') label = '需复习'

  return {
    mastery,
    label,
    confidence: Number(confidence.toFixed(2)),
    parts: {
      accuracy: Math.round(accS * 100),
      recency: Math.round(recencyS * 100),
      mistakes: Math.round(mistakeS * 100),
      coverage: Math.round(coverS * 100)
    }
  }
}

export function masteryColor(mastery) {
  if (mastery == null) return 'muted'
  if (mastery < 45) return 'rose'
  if (mastery < 75) return 'amber'
  return 'mint'
}
