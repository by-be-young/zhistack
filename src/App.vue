<script setup>
import { onErrorCaptured, ref } from 'vue'
import AppShell from './components/AppShell.vue'
import ToastHost from './components/ToastHost.vue'
import { archive } from './storage/archive.js'

const crashed = ref(false)
onErrorCaptured((err) => {
  console.error(err)
  crashed.value = true
  return false
})
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
