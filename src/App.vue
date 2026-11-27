<script setup>
import { onErrorCaptured, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppShell from './components/AppShell.vue'
import ToastHost from './components/ToastHost.vue'
import { toast } from './core/toast.js'

const route = useRoute()
const crashed = ref(false)

onErrorCaptured((err) => {
  console.error(err)
  crashed.value = true
  return false
})

// 单个页面渲染出错不该让整站停摆：切走再回来重新给一次机会
watch(
  () => route.fullPath,
  () => {
    if (crashed.value) {
      crashed.value = false
      toast('已跳过出错的页面，可以继续浏览', 'warn', 2600)
    }
  }
)
</script>

<template>
  <AppShell v-if="!crashed">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppShell>
  <div v-else class="page">
    <div class="card card-pad" style="margin-top: 48px">
      <div class="eyebrow">ERROR</div>
      <h2>页面出了点问题</h2>
      <p class="muted">数据保存在本地，未丢失。可以重载页面继续。</p>
      <button class="btn btn-primary" @click="location.reload()">重载</button>
    </div>
  </div>
  <ToastHost />
</template>
