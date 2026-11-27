import { createApp } from 'vue'
import App from './App.vue'
import router, { prefetchNavViews } from './router/index.js'
import { initArchive } from './storage/archive.js'
import 'katex/dist/katex.min.css'
import './styles/base.css'
import './styles/notes.css'

initArchive()

createApp(App).use(router).mount('#app')

// 撤掉首屏装载层：两帧之后，避免在挂载还未绘制时就闪一下
function dropBoot() {
  const boot = document.getElementById('boot')
  if (!boot || boot.dataset.leaving) return
  boot.dataset.leaving = '1'
  boot.style.opacity = '0'
  boot.addEventListener('transitionend', () => boot.remove(), { once: true })
  setTimeout(() => boot.remove(), 420)
}
requestAnimationFrame(() => requestAnimationFrame(dropBoot))
// 后台标签页会节流 rAF，加一道兜底，别让装载层一直挡着
setTimeout(dropBoot, 800)

// 空闲时预取导航页的代码块：第一次点导航也基本是命中缓存
const whenIdle = window.requestIdleCallback
  ? cb => window.requestIdleCallback(cb, { timeout: 4000 })
  : cb => setTimeout(cb, 1600)
whenIdle(() => prefetchNavViews())
