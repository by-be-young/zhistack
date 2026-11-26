<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  icon: { type: String, default: 'info' },
  title: { type: String, default: '这里还没有内容' },
  text: { type: String, default: '' }
})
</script>

<template>
  <div class="empty">
    <div class="empty-icon"><AppIcon :name="icon" :size="44" :stroke="1.2" /></div>
    <h4>{{ title }}</h4>
    <p v-if="text">{{ text }}</p>
    <slot />
  </div>
</template>
