// 全系统日期口径：本地时间 04:00 为日界；周以周一 04:00 起算。
export const DAY_START_HOUR = 4

const pad = n => String(n).padStart(2, '0')

export function shiftToDay(d = new Date()) {
  const t = new Date(d)
  if (t.getHours() < DAY_START_HOUR) t.setDate(t.getDate() - 1)
  return t
}

export function dayKey(d = new Date()) {
  const t = shiftToDay(d)
  return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`
}

export function weekKey(d = new Date()) {
  const t = shiftToDay(d)
  const date = new Date(t.getFullYear(), t.getMonth(), t.getDate())
  const day = (date.getDay() + 6) % 7
  date.setDate(date.getDate() - day + 3)
  const firstThursday = new Date(date.getFullYear(), 0, 4)
  const diff = Math.round((date - firstThursday) / 86400000)
  const week = 1 + Math.floor(diff / 7)
  return `${date.getFullYear()}-W${pad(week)}`
}

export function weekDays() {
  const t = shiftToDay()
  const date = new Date(t.getFullYear(), t.getMonth(), t.getDate())
  const day = (date.getDay() + 6) % 7
  const monday = new Date(date)
  monday.setDate(date.getDate() - day)
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return dayKey(d)
  })
}

export function daysSince(iso, now = new Date()) {
  if (!iso) return 999
  const t = new Date(iso)
  if (Number.isNaN(t.getTime())) return 999
  return Math.max(0, Math.floor((shiftToDay(now) - shiftToDay(t)) / 86400000))
}

export function nowISO() {
  return new Date().toISOString()
}

export function formatDate(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function formatDateTime(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return `${formatDate(iso)} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export function relativeDay(iso) {
  const n = daysSince(iso)
  if (n === 0) return '今天'
  if (n === 1) return '昨天'
  if (n < 7) return `${n} 天前`
  if (n < 30) return `${Math.floor(n / 7)} 周前`
  return `${Math.floor(n / 30)} 个月前`
}

export function secondsToClock(sec) {
  const s = Math.max(0, Math.floor(sec))
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`
}

export function weekLabel(key) {
  return key.replace('-W', ' 年第 ') + ' 周'
}
