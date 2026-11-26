import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/zhistack/',
  plugins: [vue()],
  server: { port: 5173 },
  build: {
    target: 'es2019',
    chunkSizeWarningLimit: 900
  }
})
