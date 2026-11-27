// 数学真题的公式原始 HTML 体积较大，按年份放在 public/math-html/*.json.gz，按需加载
const cache = new Map()
const pending = new Map()

const BASE = import.meta.env.BASE_URL || '/'

function paperOf(paperId) {
  const m = /paper-(\d{4})-(math\d)/.exec(paperId || '')
  return m ? { year: m[1], subject: m[2] } : null
}

async function gunzip(buf) {
  const stream = new DecompressionStream('gzip')
  const ab = await new Response(new Blob([buf]).stream().pipeThrough(stream)).arrayBuffer()
  return new TextDecoder().decode(ab)
}

async function fetchPaper(paperId) {
  const meta = paperOf(paperId)
  if (!meta) return {}
  const file = meta.subject === 'math1'
    ? `${meta.year}.json.gz`
    : `${meta.year}-${meta.subject}.json.gz`
  const res = await fetch(`${BASE}math-html/${file}`)
  if (!res.ok) throw new Error(`math html ${file} ${res.status}`)
  const buf = await res.arrayBuffer()
  const enc = res.headers.get('content-encoding') || ''
  const bytes = new Uint8Array(buf)
  const map = (enc.includes('gzip') || !(bytes[0] === 0x1f && bytes[1] === 0x8b))
    ? JSON.parse(new TextDecoder().decode(buf))
    : JSON.parse(await gunzip(buf))
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
  if (!paperOf(paperId)) return {}
  if (cache.has(paperId)) return cache.get(paperId)
  if (pending.has(paperId)) return pending.get(paperId)
  const p = fetchPaper(paperId)
    .then(map => {
      cache.set(paperId, map)
      pending.delete(paperId)
      return map
    })
    .catch(() => {
      pending.delete(paperId)
      return {}
    })
  pending.set(paperId, p)
  return p
}

export async function getQuestionHtml(paperId, qid) {
  const map = await loadPaperHtml(paperId)
  return map[qid] || null
}
