import { reactive } from 'vue'
import { archive, save } from '../storage/archive.js'
import { buildPaper, recentQuestionIds } from '../core/paper.js'
import { gradeSession } from '../core/grade.js'
import { recordSession, recordMistakeReview } from '../core/record.js'
import { paperById } from '../data/index.js'
import { toast } from '../core/toast.js'
import { nowISO } from '../core/time.js'

export const practice = reactive({
  session: null,
  result: null,
  submitting: false,
  lastSaved: 0
})

function newId() {
  return `s-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
}

export function createSession({
  mode = 'mock', subjects = [], count = 10, durationMin = 0,
  year = null, knowledgeIds = [], chapter = null, title = '', paperId = null
}) {
  const paper = paperId ? paperById[paperId] : null
  let qids = []
  let shortage = false
  let available = 0

  if (paper) {
    qids = [...paper.qids]
    subjects = [...paper.subjects]
    count = qids.length
    durationMin = paper.durationMin || durationMin
    title = title || paper.title
  } else {
    const recentQids = recentQuestionIds(archive.sessions)
    const built = buildPaper({ subjects, count, year, knowledgeIds, chapter, recentQids })
    qids = built.qids
    shortage = built.shortage
    available = built.available
  }

  if (!qids.length) {
    toast('该组合暂无可用题目，换一个筛选试试', 'error')
    return null
  }
  if (shortage) {
    toast(`可用题目仅 ${qids.length} 道，已全部抽入`, 'info')
  }

  const s = {
    id: newId(),
    mode,
    paperId: paper?.id || null,
    paperTitle: paper?.title || '',
    title: title || modeLabel(mode),
    subjects,
    qids,
    answers: {},
    selfGrades: {},
    marked: {},
    index: 0,
    startedAt: nowISO(),
    durationMin,
    leftSec: durationMin * 60,
    elapsedSec: 0,
    count: qids.length,
    finished: false,
    originKnowledge: knowledgeIds
  }
  practice.session = s
  practice.result = null
  archive.draft = { at: nowISO(), session: JSON.parse(JSON.stringify(s)) }
  save(true)
  return s
}

function modeLabel(mode) {
  return {
    mock: '模拟组卷', real: '真题改编', paper: '真题原卷', mistake: '错题重练', weak: '专项练习', free: '自由练习'
  }[mode] || '练习'
}

export function resumeDraft() {
  const d = archive.draft
  if (!d || !d.session) return null
  const age = Date.now() - new Date(d.at || d.session.startedAt).getTime()
  if (age > 24 * 3600 * 1000) {
    archive.draft = null
    save(true)
    toast('上次的练习草稿已过期', 'info')
    return null
  }
  practice.session = { ...d.session }
  practice.result = null
  return practice.session
}

export function discardDraft() {
  archive.draft = null
  practice.session = null
  save(true)
}

export function persistDraft(force = false) {
  if (!practice.session || practice.session.finished) return
  const now = Date.now()
  if (!force && now - practice.lastSaved < 8000) return
  practice.lastSaved = now
  archive.draft = { at: nowISO(), session: JSON.parse(JSON.stringify(practice.session)) }
  save()
}

export function pickAnswer(qid, key, type) {
  const s = practice.session
  if (!s) return
  const q = s.qids.includes(qid)
  if (!q) return
  const cur = s.answers[qid] || []
  if (type === 'multiple') {
    s.answers[qid] = cur.includes(key) ? cur.filter(k => k !== key) : [...cur, key]
  } else {
    s.answers[qid] = [key]
  }
  persistDraft()
}

export function clearAnswer(qid) {
  const s = practice.session
  if (!s) return
  delete s.answers[qid]
  delete s.selfGrades[qid]
  persistDraft()
}

export function setTextAnswer(qid, text) {
  const s = practice.session
  if (!s) return
  if (!s.qids.includes(qid)) return
  const v = String(text || '')
  if (v.trim()) s.answers[qid] = v
  else delete s.answers[qid]
  persistDraft()
}

export function setSelfGrades(grades) {
  const s = practice.session
  if (!s) return
  s.selfGrades = { ...(grades || {}) }
  persistDraft(true)
}

export function toggleMark(qid) {
  const s = practice.session
  if (!s) return
  s.marked[qid] = !s.marked[qid]
  persistDraft(true)
}

export function goTo(index) {
  const s = practice.session
  if (!s) return
  s.index = Math.max(0, Math.min(s.qids.length - 1, index))
  persistDraft()
}

export function next() { goTo((practice.session?.index || 0) + 1) }
export function prev() { goTo((practice.session?.index || 0) - 1) }

export function tick(sec = 1) {
  const s = practice.session
  if (!s || s.finished) return
  s.elapsedSec += sec
  if (s.durationMin > 0) {
    s.leftSec = Math.max(0, s.leftSec - sec)
    if (s.leftSec <= 0) return 'timeout'
  }
  return null
}

export function submitSession({ auto = false } = {}) {
  const s = practice.session
  if (!s || practice.submitting) return null
  practice.submitting = true
  const startedAt = new Date(s.startedAt).getTime()
  const durationSecUsed = Math.min(
    4 * 3600,
    Math.round((Date.now() - startedAt) / 1000) || s.elapsedSec || 0
  )
  const graded = gradeSession(s, { partialCredit: archive.settings.partialCredit })
  const summary = recordSession(archive, { ...s, durationSecUsed }, graded)

  s.finished = true
  const result = {
    ...JSON.parse(JSON.stringify(s)),
    durationSecUsed,
    graded,
    summary,
    auto,
    submittedAt: nowISO()
  }
  practice.result = result
  archive.lastResult = result
  archive.draft = null
  practice.session = null
  practice.submitting = false
  save(true)

  return result
}

export function loadLastResult() {
  if (practice.result) return practice.result
  if (archive.lastResult) {
    practice.result = archive.lastResult
    return practice.result
  }
  return null
}

export function reviewMistake(qid, result) {
  const r = recordMistakeReview(archive, qid, result)
  save(true)
  return r
}

export function resetPractice() {
  practice.session = null
  practice.result = null
  archive.draft = null
  save(true)
}
