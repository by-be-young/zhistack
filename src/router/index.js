import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/Home.vue'), meta: { title: '总览', crumb: 'OVERVIEW' } },
  { path: '/library', name: 'library', component: () => import('../views/Library.vue'), meta: { title: '书库', crumb: 'LIBRARY' } },
  { path: '/library/:bookId', name: 'book', component: () => import('../views/BookDetail.vue'), meta: { title: '书目', crumb: 'LIBRARY / BOOK' } },
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

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    return { top: 0 }
  }
})

router.afterEach(to => {
  document.title = `${to.meta?.title || '知栈'} · 考研知识库`
})

export default router
