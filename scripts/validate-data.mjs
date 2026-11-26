// 构建前数据校验：主键、引用、枚举、答案合法性、分布。
import { knowledge } from '../src/data/knowledge/index.js'
import { questions } from '../src/data/questions/index.js'
import { books, chaptersByBook } from '../src/data/books.js'
import { cards } from '../src/data/cards.js'
import { subjects } from '../src/data/subjects.js'

const errors = []
const warnings = []
const err = msg => errors.push(msg)
const warn = msg => warnings.push(msg)

const ids = new Set()
for (const k of knowledge) {
  if (ids.has(k.id)) err(`知识点 id 重复：${k.id}`)
  ids.add(k.id)
  for (const f of ['id', 'subject', 'chapterId', 'gid', 'title', 'summary']) {
    if (!k[f]) err(`知识点 ${k.id} 缺字段 ${f}`)
  }
  if (!Array.isArray(k.points) || k.points.length < 3) err(`知识点 ${k.id} 要点少于 3 条`)
  if (!Array.isArray(k.bookRefs) || !k.bookRefs.length) err(`知识点 ${k.id} 无书页映射`)
  if (!subjects.some(s => s.id === k.subject)) err(`知识点 ${k.id} 科目非法：${k.subject}`)
}

const bookIds = new Set(books.map(b => b.id))
const chapterIds = new Set(Object.values(chaptersByBook).flat().map(c => c.id))
for (const k of knowledge) {
  for (const ref of k.bookRefs || []) {
    if (!bookIds.has(ref.bookId)) err(`知识点 ${k.id} 书页引用书目不存在：${ref.bookId}`)
    if (!chapterIds.has(ref.chapterId)) err(`知识点 ${k.id} 书页引用章节不存在：${ref.chapterId}`)
    if (!Number.isFinite(ref.page)) err(`知识点 ${k.id} 页码非法`)
  }
  if (!chapterIds.has(k.chapterId)) err(`知识点 ${k.id} 章节不存在：${k.chapterId}`)
  for (const r of k.related || []) {
    if (r === k.id) err(`知识点 ${k.id} 自引用`)
    if (!knowledge.some(x => x.id === r)) err(`知识点 ${k.id} related 不存在：${r}`)
  }
}

const qids = new Set()
const stems = new Map()
for (const q of questions) {
  if (qids.has(q.id)) err(`题目 id 重复：${q.id}`)
  qids.add(q.id)
  if (!knowledge.some(k => k.id === q.knowledgeId)) err(`题目 ${q.id} 主考点不存在：${q.knowledgeId}`)
  if (!['single', 'multiple', 'judge'].includes(q.type)) err(`题目 ${q.id} 题型非法`)
  if (![1, 2, 3].includes(q.difficulty)) err(`题目 ${q.id} 难度非法`)
  if (!q.explain || q.explain.length < 20) err(`题目 ${q.id} 解析过短`)
  if (!q.stem || q.stem.length < 6) err(`题目 ${q.id} 题干过短`)
  if (q.type === 'judge') {
    if (!q.answer || q.answer.length !== 1 || !['T', 'F'].includes(q.answer[0])) err(`题目 ${q.id} 判断答案非法`)
  } else {
    const keys = new Set((q.options || []).map(o => o.key))
    if (keys.size < 4) err(`题目 ${q.id} 选项不足 4 个`)
    if (!q.answer?.length) err(`题目 ${q.id} 无答案`)
    for (const a of q.answer || []) if (!keys.has(a)) err(`题目 ${q.id} 答案 ${a} 不在选项中`)
    if (q.type === 'multiple' && (q.answer.length < 2 || q.answer.length >= (q.options.length))) {
      err(`题目 ${q.id} 多选正确项数量非法`)
    }
    if (q.type === 'single' && q.answer.length !== 1) err(`题目 ${q.id} 单选答案数量非法`)
  }
  const norm = q.stem.replace(/\s+/g, '')
  if (stems.has(norm)) warn(`疑似重复题干：${q.id} 与 ${stems.get(norm)}`)
  else stems.set(norm, q.id)
}

const cardIds = new Set()
for (const c of cards) {
  if (cardIds.has(c.id)) err(`卡 id 重复：${c.id}`)
  cardIds.add(c.id)
  if (!knowledge.some(k => k.id === c.knowledgeId)) err(`卡 ${c.id} 知识点不存在`)
  if (!['N', 'R', 'SR', 'SSR'].includes(c.rarity)) err(`卡 ${c.id} 稀有度非法`)
}

for (const s of subjects) {
  const kd = knowledge.filter(k => k.subject === s.id).length
  const qn = questions.filter(q => q.subject === s.id).length
  const cn = cards.filter(c => c.subject === s.id).length
  if (kd < 20) err(`${s.id} 知识点不足 20（当前 ${kd}）`)
  if (qn < 20) err(`${s.id} 题目不足 20（当前 ${qn}）`)
  if (cn < 12) err(`${s.id} 知识卡不足 12（当前 ${cn}）`)
}

if (!questions.some(q => q.type === 'multiple')) warn('题库缺少多选题')

console.log(`知识点 ${knowledge.length} · 题目 ${questions.length} · 书目 ${books.length} · 知识卡 ${cards.length}`)
console.log(`覆盖：${subjects.map(s => `${s.short} ${knowledge.filter(k => k.subject === s.id).length} 点 / ${questions.filter(q => q.subject === s.id).length} 题`).join('，')}`)

if (warnings.length) {
  console.log('\n告警：')
  for (const w of warnings) console.log('  · ' + w)
}

if (errors.length) {
  console.error('\n硬错误：')
  for (const e of errors) console.error('  × ' + e)
  process.exit(1)
}
console.log('\n数据校验通过')
