<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useApp } from '../stores/app.js'
import { navState } from '../core/routeProgress.js'
import { warmRoute } from '../router/index.js'
import AppIcon from './AppIcon.vue'

const route = useRoute()
const app = useApp()
const { archive, level } = app

const theme = ref(archive.settings.theme || 'light')
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
const isDark = computed(() => theme.value === 'dark' || (theme.value === 'system' && systemDark.matches))
const isSession = computed(() => route.path.startsWith('/practice/session'))

const navs = [
  { to: '/', name: '总览', icon: 'home', exact: true },
  { to: '/library', name: '书库', icon: 'book' },
  { to: '/knowledge', name: '知识点', icon: 'search' },
  { to: '/notes', name: '资料', icon: 'bookopen' },
  { to: '/practice', name: '练习', icon: 'pencil' },
  { to: '/papers', name: '真题', icon: 'trophy' },
  { to: '/mistakes', name: '错题', icon: 'alert' },
  { to: '/gacha', name: '卡册', icon: 'cards' },
  { to: '/tasks', name: '任务', icon: 'tasks' },
  { to: '/stats', name: '统计', icon: 'chart' }
]

const mobileNavs = [
  { to: '/', name: '总览', icon: 'home' },
  { to: '/knowledge', name: '知识点', icon: 'search' },
  { to: '/notes', name: '资料', icon: 'bookopen' },
  { to: '/practice', name: '练习', icon: 'pencil' },
  { to: '/papers', name: '真题', icon: 'trophy' }
]

const moreNavs = [
  { to: '/library', name: '书库', icon: 'book', desc: '教材章节与页码' },
  { to: '/mistakes', name: '错题', icon: 'alert', desc: '错题本与重练' },
  { to: '/gacha', name: '卡册', icon: 'cards', desc: '知识卡与集章' },
  { to: '/tasks', name: '任务', icon: 'tasks', desc: '每日每周任务' },
  { to: '/stats', name: '统计', icon: 'chart', desc: '学习数据与诊断' },
  { to: '/settings', name: '设置', icon: 'gear', desc: '主题与存档' }
]

const moreOpen = ref(false)

// 正在加载中的目标路径：点击后立刻高亮，不等 chunk 落地
const pendingPath = computed(() => (navState.pending ? navState.path : ''))

function isCurrent(to) {
  return route.path === to || (to !== '/' && route.path.startsWith(to + '/'))
}

function isPending(to) {
  return pendingPath.value === to && !isCurrent(to)
}

// 点到当前页不该像"没反应"：回到顶部，并把已缓存的视图提前热好
function onNavClick(to) {
  if (isCurrent(to)) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    warmRoute(to)
  }
}

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.value = next
  app.setTheme(next)
}

onMounted(() => app.applyTheme(theme.value))
</script>

<template>
  <div class="app-shell">
    <div class="route-progress" :class="{ on: navState.pending }" aria-hidden="true"><i /></div>

    <nav class="nav-rail" aria-label="主导航">
      <router-link
        to="/" class="nav-brand" aria-label="知栈首页"
        @pointerenter="warmRoute('/')" @focus="warmRoute('/')"
      >知栈</router-link>
      <router-link
        v-for="n in navs" :key="n.to" :to="n.to"
        class="nav-item"
        :class="{ 'router-link-active': isCurrent(n.to), 'is-pending': isPending(n.to) }"
        :aria-busy="isPending(n.to) ? 'true' : 'false'"
        @click="onNavClick(n.to)"
        @pointerenter="warmRoute(n.to)" @focus="warmRoute(n.to)"
      >
        <AppIcon :name="n.icon" :size="19" />
        <span>{{ n.name }}</span>
      </router-link>
      <div style="flex: 1" />
      <router-link
        to="/settings" class="nav-item"
        :class="{ 'router-link-active': isCurrent('/settings'), 'is-pending': isPending('/settings') }"
        :aria-busy="isPending('/settings') ? 'true' : 'false'"
        @click="onNavClick('/settings')"
        @pointerenter="warmRoute('/settings')" @focus="warmRoute('/settings')"
      >
        <AppIcon name="gear" :size="18" />
        <span>设置</span>
      </router-link>
    </nav>

    <div class="main-wrap">
      <header v-if="!route.meta.bare" class="topbar">
        <div class="crumb">
          <span>ZHI·STACK</span>
          <span style="color: var(--text-3)">/</span>
          <b>{{ route.meta.crumb }}</b>
        </div>
        <div class="topbar-spacer" />
        <div class="top-stat hide-sm" :title="`Lv.${level.level} ${level.name}`">
          <span class="dot" />
          <span>Lv.{{ level.level }}</span>
          <span style="color: var(--text-3)">{{ level.name }}</span>
        </div>
        <div class="top-stat mint" title="积分">
          <AppIcon name="coin" :size="13" />
          <span>{{ archive.profile.points }}</span>
        </div>
        <div class="top-stat amber hide-sm" title="连续打卡">
          <AppIcon name="flame" :size="13" />
          <span>{{ archive.profile.streak.current }} 天</span>
        </div>
        <button class="icon-btn" :aria-label="isDark ? '切换到浅色' : '切换到深色'" @click="toggleTheme">
          <AppIcon :name="isDark ? 'sun' : 'moon'" :size="16" />
        </button>
        <router-link to="/settings" class="icon-btn" aria-label="设置">
          <AppIcon name="gear" :size="16" />
        </router-link>
      </header>

      <main>
        <slot />
      </main>
    </div>

    <nav v-if="!isSession" class="mobile-nav" aria-label="移动端导航">
      <router-link
        v-for="n in mobileNavs" :key="n.to" :to="n.to"
        :class="{ 'router-link-active': isCurrent(n.to), 'is-pending': isPending(n.to) }"
        @click="onNavClick(n.to); moreOpen = false"
        @pointerenter="warmRoute(n.to)" @focus="warmRoute(n.to)"
      >
        <AppIcon :name="n.icon" :size="18" />
        <span>{{ n.name }}</span>
      </router-link>
      <button class="mobile-more-btn" :class="{ 'is-open': moreOpen }" @click="moreOpen = !moreOpen">
        <AppIcon name="grid" :size="18" />
        <span>更多</span>
      </button>
    </nav>

    <div v-if="moreOpen" class="more-mask" @click="moreOpen = false" />
    <div v-if="moreOpen" class="more-sheet">
      <div class="more-handle" />
      <div class="more-title">全部功能</div>
      <div class="more-grid">
        <router-link
          v-for="n in moreNavs" :key="n.to" :to="n.to" class="more-item"
          @click="moreOpen = false"
        >
          <AppIcon :name="n.icon" :size="17" />
          <span class="more-name">{{ n.name }}</span>
          <span class="more-desc">{{ n.desc }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
