// 数学真题的公式原始 HTML 体积较大，按年份放在 public/math-html/*.json.gz，按需加载
const cache = new Map()
const pending = new Map()

const BASE = import.meta.env.BASE_URL || '/'

function yearOf(paperId) {
  const m = /(\d{4})/.exec(paperId || '')
  return m ? m[1] : null
}

async function gunzip(buf) {
  const stream = new DecompressionStream('gzip')
  const ab = await new Response(new Blob([buf]).stream().pipeThrough(stream)).arrayBuffer()
  return new TextDecoder().decode(ab)
}

async function fetchPaper(year) {
  const res = await fetch(`${BASE}math-html/${year}.json.gz`)
  if (!res.ok) throw new Error(`math html ${year} ${res.status}`)
  const buf = await res.arrayBuffer()
  const enc = res.headers.get('content-encoding') || ''
  const bytes = new Uint8Array(buf)
  const map = (enc.includes('gzip') || !(bytes[0] === 0x1f && bytes[1] === 0x8b))
    ? JSON.parse(new TextDecoder().decode(buf))
    : JSON.parse(await gunzip(buf))
  // 题干/选项/解析里的题图是相对 notes/assets 路径，补上站点的 base
  const fix = s => typeof s === 'string' ? s.replaceAll('src="notes/assets/', `src="${BASE}notes/assets/`) : s
  for (const item of Object.values(map)) {
    item.stemHtml = fix(item.stemHtml)
    item.explainHtml = fix(item.explainHtml)
    item.referenceHtml = fix(item.referenceHtml)
    if (Array.isArray(item.optionsHtml)) item.optionsHtml = item.optionsHtml.map(fix)
    if (Array.isArray(item.options)) item.options = item.options.map(o => ({ ...o, html: fix(o.html) }))
  }
  return map
}

export async function loadPaperHtml(paperId) {
  const year = yearOf(paperId)
  if (!year) return {}
  if (cache.has(year)) return cache.get(year)
  if (pending.has(year)) return pending.get(year)
  const p = fetchPaper(year)
    .then(map => {
      cache.set(year, map)
      pending.delete(year)
      return map
    })
    .catch(() => {
      pending.delete(year)
      return {}
    })
  pending.set(year, p)
  return p
}

export async function getQuestionHtml(paperId, qid) {
  const map = await loadPaperHtml(paperId)
  return map[qid] || null
}
