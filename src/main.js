import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { initArchive } from './storage/archive.js'
import 'katex/dist/katex.min.css'
import './styles/base.css'
import './styles/notes.css'

initArchive()

createApp(App).use(router).mount('#app')
