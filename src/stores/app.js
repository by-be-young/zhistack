import { computed } from 'vue'
import { archive, save } from '../storage/archive.js'
import { levelOf } from '../core/points.js'
import { todaySummary, weekSummary, trend, heatmap, radar, mistakeTop } from '../core/stats.js'
import { diagnose, subjectStats } from '../core/diagnose.js'
import { taskList, claimedCount, checkAchievements } from '../core/tasks.js'
import { recordKnowledgeView, recordBookOpen } from '../core/record.js'
import { stampStates } from '../core/gacha.js'
import { toast } from '../core/toast.js'

export function useApp() {
  const level = computed(() => levelOf(archive.profile.points || 0))
  const today = computed(() => todaySummary(archive))
  const week = computed(() => weekSummary(archive))
  const weak = computed(() => diagnose(archive))
  const tasks = computed(() => taskList(archive))
  const subjectAgg = computed(() => subjectStats(archive))
  const stamps = computed(() => stampStates(archive.cards.owned))

  function setTheme(mode) {
    archive.settings.theme = mode
    applyTheme(mode)
    save(true)
  }

  function applyTheme(mode) {
    const root = document.documentElement
    const dark = mode === 'dark' || (mode === 'system' && !window.matchMedia('(prefers-color-scheme: light)').matches)
    root.dataset.theme = dark ? 'dark' : 'light'
  }

  function toggleSubject(id) {
    const list = archive.settings.subjects
    const i = list.indexOf(id)
    if (i === -1) list.push(id)
    else if (list.length > 1) list.splice(i, 1)
    else toast('至少保留一个科目')
    save(true)
  }

  function setOffset(bookId, value) {
    const n = Number(value) || 0
    archive.settings.pdfOffset[bookId] = Math.max(-50, Math.min(200, n))
    save(true)
  }

  function markKnowledge(kid, manual) {
    const st = (archive.knowledge[kid] ||= {
      attempts: 0, correct: 0, views: 0, lastAt: null, manual: null, bookOpens: 0
    })
    st.manual = st.manual === manual ? null : manual
    save(true)
  }

  function viewKnowledge(kid) {
    recordKnowledgeView(archive, kid)
    save()
  }

  function bookOpen(bookId, page) {
    recordBookOpen(archive, bookId, page)
    save()
  }

  function toggleGuideDone() {
    archive.settings.guideDone = true
    save(true)
  }

  function runAchievements() {
    const unlocked = checkAchievements(archive)
    save()
    return unlocked
  }

  return {
    archive, level, today, week, weak, tasks, subjectAgg, stamps,
    trend: (days) => trend(archive, days),
    heatmap: (weeks) => heatmap(archive, weeks),
    radar: () => radar(archive),
    mistakeTop: (n) => mistakeTop(archive, n),
    claimedCount: (cycle) => claimedCount(archive, cycle),
    setTheme, applyTheme, toggleSubject, setOffset, markKnowledge, viewKnowledge, bookOpen,
    toggleGuideDone, runAchievements
  }
}
