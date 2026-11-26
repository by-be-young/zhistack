<script setup>
import { toasts, dismissToast } from '../core/toast.js'
</script>

<template>
  <div class="toast-host" aria-live="polite">
    <div
      v-for="t in toasts" :key="t.id"
      class="toast" :class="t.type"
      @click="dismissToast(t.id)"
    >
      <span class="t-dot" />
      <span>{{ t.text }}</span>
    </div>
  </div>
</template>
