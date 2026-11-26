import { nowISO, dayKey } from './time.js'
import { POINTS, LIMITS } from './config.js'

/**
 * 记一笔积分：普通来源受每日上限约束，里程碑类不受限。
 */
export function award(archive, src, delta, note = '', { capped = true, dedupeKey = null } = {}) {
  if (!archive.profile) return 0
  const p = archive.profile
  if (dedupeKey) {
    p.dedupe ||= {}
    if (p.dedupe[dedupeKey]) return 0
    p.dedupe[dedupeKey] = 1
  }
  const day = dayKey()
  if (p.dailyPoints?.date !== day) p.dailyPoints = { date: day, value: 0 }

  let gain = Math.max(0, Math.round(delta))
  if (capped) {
    const room = Math.max(0, POINTS.dailyCap - (p.dailyPoints.value || 0))
    gain = Math.min(gain, room)
  }
  if (gain <= 0 && delta > 0) return 0

  p.points = Math.max(0, (p.points || 0) + gain)
  if (capped) p.dailyPoints.value = (p.dailyPoints.value || 0) + gain
  p.pointLog ||= []
  p.pointLog.unshift({ at: nowISO(), src, delta: gain, note })
  if (p.pointLog.length > LIMITS.pointLog) p.pointLog.length = LIMITS.pointLog
  return gain
}

export function spend(archive, src, delta, note = '') {
  const p = archive.profile
  const cost = Math.max(0, Math.round(delta))
  if (p.points < cost) return false
  p.points -= cost
  p.pointLog ||= []
  p.pointLog.unshift({ at: nowISO(), src, delta: -cost, note })
  if (p.pointLog.length > LIMITS.pointLog) p.pointLog.length = LIMITS.pointLog
  return true
}

export function levelOf(points) {
  const list = [
    { level: 1, name: '起步', min: 0 },
    { level: 2, name: '上路', min: 300 },
    { level: 3, name: '稳行', min: 800 },
    { level: 4, name: '熟手', min: 1600 },
    { level: 5, name: '老练', min: 2800 },
    { level: 6, name: '精研', min: 4500 },
    { level: 7, name: '通透', min: 7000 },
    { level: 8, name: '案头', min: 10000 }
  ]
  let cur = list[0]
  let next = null
  for (let i = 0; i < list.length; i++) {
    if (points >= list[i].min) {
      cur = list[i]
      next = list[i + 1] || null
    }
  }
  const floor = cur.min
  const ceil = next ? next.min : cur.min
  const progress = next ? Math.round(((points - floor) / (ceil - floor)) * 100) : 100
  return { ...cur, next, progress: Math.max(0, Math.min(100, progress)), toNext: next ? Math.max(0, ceil - points) : 0 }
}
