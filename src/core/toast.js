import { reactive } from 'vue'

export const toasts = reactive([])
let seq = 0

export function toast(text, type = 'info', ttl = 2400) {
  const id = ++seq
  toasts.push({ id, text, type })
  if (toasts.length > 3) toasts.shift()
  setTimeout(() => {
    const i = toasts.findIndex(t => t.id === id)
    if (i !== -1) toasts.splice(i, 1)
  }, ttl)
}

export function dismissToast(id) {
  const i = toasts.findIndex(t => t.id === id)
  if (i !== -1) toasts.splice(i, 1)
}
