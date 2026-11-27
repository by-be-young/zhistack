import { createRouter, createWebHashHistory } from 'vue-router'
import { beginNav, endNav } from '../core/routeProgress.js'
import { toast } from '../core/toast.js'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue'), meta: { title: '总览', crumb: 'OVERVIEW' } },
  { path: '/library', name: 'library', component: () => import('../views/Library.vue'), meta: { title: '书库', crumb: 'LIBRARY' } },
  { path: '/library/:bookId', name: 'book', component: () => import('../views/BookDetail.vue'), meta: { title: '书目', crumb: 'LIBRARY / BOOK' } },
  { path: '/library/:bookId/read/:sectionId?', name: 'book-read', component: () => import('../views/BookReader.vue'), meta: { title: '全文阅读', crumb: 'LIBRARY / READ' } },
  { path: '/knowledge', name: 'knowledge', component: () => import('../views/Knowledge.vue'), meta: { title: '知识点', crumb: 'KNOWLEDGE' } },
  { path: '/knowledge/:kid', name: 'knowledge-detail', component: () => import('../views/KnowledgeDetail.vue'), meta: { title: '知识点', crumb: 'KNOWLEDGE / DETAIL' } },
  { path: '/notes', name: 'notes', component: () => import('../views/Notes.vue'), meta: { title: '资料库', crumb: 'REFERENCE' } },
  { path: '/notes/:nid', name: 'note', component: () => import('../views/NoteDetail.vue'), meta: { title: '资料库', crumb: 'REFERENCE / NOTE' } },
  { path: '/practice', name: 'practice', component: () => import('../views/Practice.vue'), meta: { title: '练习', crumb: 'PRACTICE' } },
  { path: '/papers', name: 'papers', component: () => import('../views/Papers.vue'), meta: { title: '真题原卷', crumb: 'PAPERS' } },
  { path: '/practice/session/:sid', name: 'session', component: () => import('../views/Session.vue'), meta: { title: '答题', crumb: 'PRACTICE / SESSION', bare: true } },
  { path: '/practice/result/:sid', name: 'result', component: () => import('../views/Result.vue'), meta: { title: '复盘', crumb: 'PRACTICE / RESULT', bare: true } },
  { path: '/mistakes', name: 'mistakes', component: () => import('../views/Mistakes.vue'), meta: { title: '错题', crumb: 'MISTAKES' } },
  { path: '/gacha', name: 'gacha', component: () => import('../views/Gacha.vue'), meta: { title: '卡册', crumb: 'COLLECTION' } },
  { path: '/tasks', name: 'tasks', component: () => import('../views/Tasks.vue'), meta: { title: '任务', crumb: 'TASKS' } },
  { path: '/stats', name: 'stats', component: () => import('../views/Stats.vue'), meta: { title: '统计', crumb: 'STATS' } },
  { path: '/settings', name: 'settings', component: () => import('../views/Settings.vue'), meta: { title: '设置', crumb: 'SETTINGS' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

// 路径 -> 加载器：路由、预取、hover 预热共用同一份
const loaderByPath = new Map()
for (const r of routes) {
  if (typeof r.component === 'function') loaderByPath.set(r.path, r.component)
}

// 一级页面（导航栏点得到的那些）
const navPaths = ['/', '/library', '/knowledge', '/notes', '/practice', '/papers', '/mistakes', '/gacha', '/tasks', '/stats', '/settings']

// 已预热过的路径，避免重复请求 / 重复编译
const warmed = new Set()

export function warmRoute(path) {
  const load = loaderByPath.get(path)
  if (!load || warmed.has(path)) return
  warmed.add(path)
  load().catch(() => warmed.delete(path))
}

// 首屏渲染完成后在空闲时间预取导航页，点击时基本都是命中缓存
export function prefetchNavViews() {
  navPaths.filter(p => !warmed.has(p)).forEach((p, i) => {
    setTimeout(() => warmRoute(p), i * 80)
  })
}

// 版本发布后旧 chunk 被清掉、离线断网，都会让懒加载失败：
// 此时页面会"点不动"，必须给一次自动重试，再不行就明确提示刷新。
const CHUNK_ERROR = /dynamically imported module|Importing a module script failed|Failed to fetch|NetworkError/i
const retried = new Set()

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    return { top: 0 }
  }
})

router.beforeEach((to, from) => {
  if (from.fullPath === to.fullPath) return true
  beginNav(to.path)
})

router.afterEach(to => {
  document.title = `${to.meta?.title || '知栈'} · 考研知识库`
  endNav()
})

router.onError((err, to) => {
  endNav()
  const msg = err?.message || String(err)
  const target = to?.fullPath || '/'

  if (CHUNK_ERROR.test(msg)) {
    if (!retried.has(target)) {
      retried.add(target)
      toast('页面资源没加载成功，正在重试…', 'warn', 2600)
      setTimeout(() => {
        router.replace(target).catch(() => {})
      }, 240)
      return
    }
    toast('页面资源仍加载失败，请刷新页面后再试', 'error', 3600)
    return
  }

  console.error(err)
  toast('页面切换失败，已停在上一个页面', 'error', 2600)
})

export default router
