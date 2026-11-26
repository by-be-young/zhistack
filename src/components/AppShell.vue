<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApp } from '../stores/app.js'
import AppIcon from './AppIcon.vue'

const route = useRoute()
const router = useRouter()
const app = useApp()
const { archive, level } = app

const theme = ref(archive.settings.theme || 'light')
const isDark = computed(() => document.documentElement.dataset.theme !== 'light')

const navs = [
  { to: '/', name: '总览', icon: 'home', exact: true },
  { to: '/library', name: '书库', icon: 'book' },
  { to: '/knowledge', name: '知识点', icon: 'search' },
  { to: '/practice', name: '练习', icon: 'pencil' },
  { to: '/papers', name: '真题', icon: 'trophy' },
  { to: '/mistakes', name: '错题', icon: 'alert' },
  { to: '/gacha', name: '卡册', icon: 'cards' },
  { to: '/tasks', name: '任务', icon: 'tasks' },
  { to: '/stats', name: '统计', icon: 'chart' }
]

const mobileNavs = [
  { to: '/', name: '总览', icon: 'home' },
  { to: '/practice', name: '练习', icon: 'pencil' },
  { to: '/papers', name: '真题', icon: 'trophy' },
  { to: '/mistakes', name: '错题', icon: 'alert' },
  { to: '/gacha', name: '卡册', icon: 'cards' },
  { to: '/stats', name: '统计', icon: 'chart' }
]

function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.value = next
  app.setTheme(next)
}

onMounted(() => app.applyTheme(theme.value))
</script>

<template>
  <div class="app-shell">
    <nav class="nav-rail" aria-label="主导航">
      <router-link to="/" class="nav-brand" aria-label="知栈首页">知栈</router-link>
      <router-link
        v-for="n in navs" :key="n.to" :to="n.to"
        class="nav-item"
        :class="{ 'router-link-active': route.path === n.to || (n.to !== '/' && route.path.startsWith(n.to)) }"
      >
        <AppIcon :name="n.icon" :size="19" />
        <span>{{ n.name }}</span>
      </router-link>
      <div style="flex: 1" />
      <router-link to="/settings" class="nav-item" :class="{ 'router-link-active': route.path.startsWith('/settings') }">
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

    <nav class="mobile-nav" aria-label="移动端导航">
      <router-link
        v-for="n in mobileNavs" :key="n.to" :to="n.to"
        :class="{ 'router-link-active': route.path === n.to || (n.to !== '/' && route.path.startsWith(n.to)) }"
      >
        <AppIcon :name="n.icon" :size="18" />
        <span>{{ n.name }}</span>
      </router-link>
    </nav>
  </div>
</template>
