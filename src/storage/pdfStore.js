const DB_NAME = 'zhizhan-pdf'
const STORE = 'files'

function openDB() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('no-idb'))
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'bookId' })
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function tx(mode, fn) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const t = db.transaction(STORE, mode)
    const store = t.objectStore(STORE)
    const req = fn(store)
    t.oncomplete = () => resolve(req?.result)
    t.onerror = () => reject(t.error)
    t.onabort = () => reject(t.error)
  })
}

export async function putPdf(bookId, file, handle = null) {
  const record = {
    bookId,
    name: file.name,
    size: file.size,
    at: new Date().toISOString(),
    mode: handle ? 'handle' : 'blob',
    handle,
    blob: handle ? null : file
  }
  await tx('readwrite', store => store.put(record))
  return { name: record.name, size: record.size, at: record.at, mode: record.mode }
}

export async function getMeta(bookId) {
  try {
    const rec = await tx('readonly', store => store.get(bookId))
    if (!rec) return null
    return { name: rec.name, size: rec.size, at: rec.at, mode: rec.mode }
  } catch (e) {
    return null
  }
}

export async function removePdf(bookId) {
  try {
    await tx('readwrite', store => store.delete(bookId))
    return true
  } catch (e) {
    return false
  }
}

export async function openPdfAt(bookId, page, offset = 0) {
  let rec
  try {
    rec = await tx('readonly', store => store.get(bookId))
  } catch (e) {
    return { ok: false, reason: 'no-idb' }
  }
  if (!rec) return { ok: false, reason: 'unmounted' }

  let blob = rec.blob
  if (rec.handle) {
    try {
      const file = await rec.handle.getFile()
      blob = file
    } catch (e) {
      return { ok: false, reason: 'need-permission' }
    }
  }
  if (!blob) return { ok: false, reason: 'unmounted' }

  const target = Math.max(1, page + (offset || 0))
  const url = URL.createObjectURL(blob)
  const win = window.open(`${url}#page=${target}`, '_blank')
  if (!win) return { ok: false, reason: 'popup-blocked', url }
  setTimeout(() => URL.revokeObjectURL(url), 60000)
  return { ok: true, page: target, mode: rec.mode }
}
