import { reactive } from 'vue'
import { dayKey, nowISO } from '../core/time.js'
import { dataVersion } from '../data/index.js'
import { LIMITS } from '../core/config.js'

const KEY = 'zhizhan.archive.v2'
const V1_KEY = 'zhizhan.archive.v1'
const BACKUP_KEYS = ['zhizhan.backup.0', 'zhizhan.backup.1', 'zhizhan.backup.2']
const SCHEMA = 2

export function createArchive() {
  return {
    schemaVersion: SCHEMA,
    dataVersion,
    createdAt: nowISO(),
    updatedAt: nowISO(),
    settings: {
      theme: 'dark',
      subjects: ['ds', 'co', 'os', 'cn'],
      guideDone: false,
      pdfOffset: {},
      partialCredit: true
    },
    profile: {
      points: 0,
      pointLog: [],
      dedupe: {},
      dailyPoints: { date: dayKey(), value: 0 },
      streak: { current: 0, longest: 0, lastDate: null },
      totals: { answered: 0, correct: 0, sessions: 0, seconds: 0 },
      subjectStats: {},
      clearedCount: 0,
      milestones: []
    },
    knowledge: {},
    mistakes: {},
    cards: { owned: {}, shards: 0, pitySsr: 0, pityR: 0, history: [] },
    tasks: { daily: { date: null, items: {} }, weekly: { week: null, items: {} }, achievements: {} },
    sessions: [],
    daily: {},
    draft: null,
    lastResult: null,
    repairLog: []
  }
}

function repair(raw) {
  const base = createArchive()
  if (!raw || typeof raw !== 'object') return { archive: base, repaired: false }
  const out = { ...base, ...raw }
  out.settings = { ...base.settings, ...(raw.settings || {}) }
  out.profile = { ...base.profile, ...(raw.profile || {}) }
  out.profile.streak = { ...base.profile.streak, ...(raw.profile?.streak || {}) }
  out.profile.totals = { ...base.profile.totals, ...(raw.profile?.totals || {}) }
  out.profile.subjectStats = raw.profile?.subjectStats || {}
  out.profile.dedupe = raw.profile?.dedupe || {}
  out.profile.dailyPoints = raw.profile?.dailyPoints || { date: dayKey(), value: 0 }
  out.cards = { ...base.cards, ...(raw.cards || {}) }
  out.cards.owned = raw.cards?.owned || {}
  out.tasks = { ...base.tasks, ...(raw.tasks || {}) }
  out.knowledge = raw.knowledge || {}
  out.mistakes = raw.mistakes || {}
  out.sessions = Array.isArray(raw.sessions) ? raw.sessions.slice(0, LIMITS.sessions) : []
  out.daily = raw.daily || {}
  out.draft = raw.draft || null
  out.lastResult = raw.lastResult || null
  out.repairLog = raw.repairLog || []
  const missing = ['settings', 'profile', 'knowledge', 'mistakes', 'cards', 'tasks']
    .filter(k => !raw[k])
  if (missing.length) out.repairLog.push({ at: nowISO(), note: `补齐缺失字段：${missing.join(', ')}` })
  return { archive: out, repaired: missing.length > 0 }
}

function migrate(raw) {
  if (!raw || typeof raw !== 'object') return { archive: createArchive(), migrated: false }
  let v = raw.schemaVersion || 1
  let data = raw
  if (v === 1) {
    data = { ...raw, schemaVersion: 2, cards: raw.cards || { owned: {}, shards: 0, pitySsr: 0, pityR: 0, history: [] } }
    v = 2
  }
  return { archive: data, migrated: v !== (raw.schemaVersion || 1) }
}

export const archive = reactive(createArchive())
let writing = false
let timer = null
let lastBackupDay = null
let readOnly = false

function readKey(key) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw)
  } catch (e) {
    return { __parseError: true, raw: e?.message }
  }
}

function assign(target, src) {
  for (const k of Object.keys(target)) {
    if (!(k in src)) continue
    if (Array.isArray(src[k]) || (src[k] && typeof src[k] === 'object')) {
      target[k] = src[k]
    } else {
      target[k] = src[k]
    }
  }
  for (const k of Object.keys(src)) {
    if (!(k in target)) target[k] = src[k]
  }
}

export function initArchive() {
  let loaded = null
  let parseError = false
  try {
    loaded = readKey(KEY)
  } catch (e) {
    parseError = true
  }
  if (!loaded || loaded.__parseError) {
    loaded = readKey(V1_KEY)
  }
  if (loaded && loaded.__parseError) { loaded = null; parseError = true }

  if (!loaded) {
    if (parseError) archive.repairLog.push({ at: nowISO(), note: '存档解析失败，已初始化空档' })
    return archive
  }

  if ((loaded.schemaVersion || 1) > SCHEMA) {
    archive.repairLog.push({ at: nowISO(), note: '存档版本高于当前应用，进入只读' })
    readOnly = true
    assign(archive, loaded)
    return archive
  }

  const { archive: migrated, migrated: didMigrate } = migrate(loaded)
  if (didMigrate) migrated.repairLog = [...(migrated.repairLog || []), { at: nowISO(), note: '已从 v1 迁移到 v2' }]
  const { archive: repaired, repaired: didRepair } = repair(migrated)
  assign(archive, repaired)
  archive.updatedAt = nowISO()
  return archive
}

export function saveNow() {
  if (readOnly) return false
  try {
    const payload = JSON.parse(JSON.stringify(archive))
    payload.updatedAt = nowISO()
    archive.updatedAt = payload.updatedAt
    const day = dayKey()
    if (lastBackupDay !== day) {
      rotateBackup(payload)
      lastBackupDay = day
    }
    localStorage.setItem(KEY, JSON.stringify(payload))
    return true
  } catch (e) {
    if (e?.name === 'QuotaExceededError') {
      readOnly = true
      archive.repairLog.push({ at: nowISO(), note: '存储空间不足，进入只读模式' })
    }
    return false
  }
}

export function save(immediate = false) {
  if (readOnly) return
  if (immediate) {
    clearTimeout(timer)
    saveNow()
    return
  }
  clearTimeout(timer)
  timer = setTimeout(() => saveNow(), 300)
}

function rotateBackup(payload) {
  try {
    for (let i = BACKUP_KEYS.length - 1; i > 0; i--) {
      const prev = localStorage.getItem(BACKUP_KEYS[i - 1])
      if (prev) localStorage.setItem(BACKUP_KEYS[i], prev)
    }
    localStorage.setItem(BACKUP_KEYS[0], JSON.stringify(payload))
  } catch (e) { /* 备份失败不阻断主流程 */ }
}

export function backupList() {
  return BACKUP_KEYS.map((k, i) => {
    try {
      const raw = localStorage.getItem(k)
      if (!raw) return null
      const data = JSON.parse(raw)
      return { index: i, at: data.updatedAt || null, points: data.profile?.points || 0, answered: data.profile?.totals?.answered || 0 }
    } catch (e) {
      return { index: i, at: null, broken: true }
    }
  }).filter(Boolean)
}

export function restoreBackup(index) {
  const raw = localStorage.getItem(BACKUP_KEYS[index])
  if (!raw) return { ok: false, reason: 'missing' }
  return importArchive(raw)
}

function checksum(str) {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

export function exportPayload() {
  const payload = JSON.parse(JSON.stringify(archive))
  const body = JSON.stringify(payload)
  return {
    app: 'zhizhan-408',
    schemaVersion: SCHEMA,
    dataVersion,
    exportedAt: nowISO(),
    checksum: checksum(body),
    summary: {
      questions: payload.profile?.totals?.answered || 0,
      sessions: payload.sessions?.length || 0,
      cards: Object.keys(payload.cards?.owned || {}).length,
      mistakes: Object.keys(payload.mistakes || {}).length,
      points: payload.profile?.points || 0
    },
    payload
  }
}

export function exportJSON() {
  return JSON.stringify(exportPayload(), null, 2)
}

export function inspectImport(text) {
  let parsed
  try {
    parsed = JSON.parse(text)
  } catch (e) {
    throw new Error('E_PARSE')
  }
  const payload = parsed?.payload || parsed
  if (!payload || typeof payload !== 'object' || !('profile' in payload)) throw new Error('E_IMPORT_INVALID')
  if (parsed?.app && parsed.app !== 'zhizhan-408') throw new Error('E_IMPORT_INVALID')
  const version = payload.schemaVersion || parsed.schemaVersion || 1
  if (version > SCHEMA) throw new Error('E_VERSION_NEW')
  const checkOk = parsed?.checksum
    ? checksum(JSON.stringify(payload)) === parsed.checksum
    : true
  return {
    version,
    checksumOk: checkOk,
    summary: {
      points: payload.profile?.points || 0,
      answered: payload.profile?.totals?.answered || 0,
      sessions: payload.sessions?.length || 0,
      cards: Object.keys(payload.cards?.owned || {}).length,
      mistakes: Object.keys(payload.mistakes || {}).length,
      createdAt: payload.createdAt || null
    },
    payload
  }
}

export function applyImport(payload) {
  const { archive: migrated } = migrate(payload)
  const { archive: repaired } = repair(migrated)
  assign(archive, repaired)
  archive.updatedAt = nowISO()
  saveNow()
  return true
}

export function importArchive(text) {
  try {
    const info = inspectImport(text)
    if (!info.checksumOk) return { ok: false, reason: 'checksum', info }
    applyImport(info.payload)
    return { ok: true, info }
  } catch (e) {
    return { ok: false, reason: e.message }
  }
}

export function resetArchive({ keepSettings = true } = {}) {
  const settings = keepSettings ? JSON.parse(JSON.stringify(archive.settings)) : null
  const fresh = createArchive()
  if (settings) fresh.settings = settings
  assign(archive, fresh)
  for (const k of Object.keys(archive)) {
    if (!(k in fresh)) delete archive[k]
  }
  saveNow()
}

export function usage() {
  try {
    const bytes = new Blob([JSON.stringify(archive)]).size
    const quota = 5 * 1024 * 1024
    return { bytes, quota, ratio: Math.min(1, bytes / quota) }
  } catch (e) {
    return { bytes: 0, quota: 0, ratio: 0 }
  }
}

export function rebuildStats() {
  const p = archive.profile
  const totals = { answered: 0, correct: 0, sessions: archive.sessions.length, seconds: 0 }
  const subjectStats = {}
  const daily = {}
  for (const s of archive.sessions) {
    totals.answered += s.count || 0
    totals.correct += s.correct || 0
    totals.seconds += s.durationSec || 0
    for (const sid of s.subjects || []) {
      subjectStats[sid] ||= { answered: 0, correct: 0, sessions: 0 }
      subjectStats[sid].sessions++
    }
  }
  for (const k of Object.keys(archive.daily || {})) {
    const d = archive.daily[k]
    daily[k] = { answered: d.answered || 0, correct: d.correct || 0, seconds: d.seconds || 0 }
  }
  p.totals = totals
  p.subjectStats = subjectStats
  archive.daily = daily
  saveNow()
}

export function isReadOnly() {
  return readOnly
}
