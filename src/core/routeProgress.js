import { reactive } from 'vue'

// 路由切换的瞬时状态：导航栏高亮、顶部进度条都读它。
// 懒加载视图要等 chunk 落地，这段空窗期必须给用户一个"点到了、正在来"的反馈。
export const navState = reactive({ pending: false, path: '', startedAt: 0 })

// 兜底：导航被取消 / 重复点击时 afterEach 不一定会到，别让进度条一直转
const WATCHDOG = 12000
let watchdogTimer = 0

export function beginNav(path) {
  navState.pending = true
  navState.path = path || ''
  navState.startedAt = Date.now()
  clearTimeout(watchdogTimer)
  watchdogTimer = setTimeout(endNav, WATCHDOG)
}

export function endNav() {
  clearTimeout(watchdogTimer)
  watchdogTimer = 0
  if (!navState.pending) return
  navState.pending = false
  navState.path = ''
}
