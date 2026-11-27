import { questionsDs } from './ds.js'
import { questionsCo } from './co.js'
import { questionsOs } from './os.js'
import { questionsCn } from './cn.js'
import { questionsMath } from './math.js'
import { questionsEn } from './en.js'
import { questionsPol } from './pol.js'
import { questions2025_408 } from '../papers/2025-408.js'
import { questions2025_math1 } from '../papers/2025-math1.js'
import { questions2025_en1 } from '../papers/2025-en1.js'
import { questions2025_pol } from '../papers/2025-pol.js'
import { questions2024_408 } from '../papers/2024-408.js'
import { questions2024_pol } from '../papers/2024-pol.js'
import { questions2024_math1 } from '../papers/2024-math1.js'
import { questions2024_en1 } from '../papers/2024-en1.js'
import { questions2023_en1 } from '../papers/2023-en1.js'
import { questions2023_pol } from '../papers/2023-pol.js'
import { questions2023_math1 } from '../papers/2023-math1.js'
import { questions2023_408 } from '../papers/2023-408.js'
import { questions2022_408 } from '../papers/2022-408.js'
import { questions2022_math1 } from '../papers/2022-math1.js'
import { questions2022_en1 } from '../papers/2022-en1.js'
import { questions2022_pol } from '../papers/2022-pol.js'
import { questions2009_408 } from '../papers/2009-408.js'
import { questions2010_408 } from '../papers/2010-408.js'
import { questions2011_408 } from '../papers/2011-408.js'
import { questions2012_408 } from '../papers/2012-408.js'
import { questions2013_408 } from '../papers/2013-408.js'
import { questions2014_408 } from '../papers/2014-408.js'
import { questions2015_408 } from '../papers/2015-408.js'
import { questions2016_408 } from '../papers/2016-408.js'
import { questions2017_408 } from '../papers/2017-408.js'
import { questions2018_408 } from '../papers/2018-408.js'
import { questions2019_408 } from '../papers/2019-408.js'
import { questions2020_408 } from '../papers/2020-408.js'
import { questions2021_408 } from '../papers/2021-408.js'
import { questions2026_408 } from '../papers/2026-408.js'
import { withMaterial } from '../papers/material.js'
import { knowledgeById } from '../knowledge/index.js'

// 英语真题按题型补辅助考点；其余题目先保留主考点，避免把“同章相关卡”误标成考点。
const enSecondary = n => {
  if (n <= 20) return ['k-en-002', 'k-en-005']
  if (n <= 40) return ['k-en-019']
  if (n <= 45) return ['k-en-010', 'k-en-019']
  if (n <= 50) return ['k-en-003', 'k-en-020']
  return ['k-en-017']
}

// 主考点 knowledgeId 保持不变；knowledgeIds 首位始终是主考点。
const withKnowledgeIds = q => {
  if (Array.isArray(q.knowledgeIds) && q.knowledgeIds.length) return q
  const primary = q.knowledgeId
  if (!primary) return { ...q, knowledgeIds: [] }
  const extra = q.subject === 'en' && q.paperOnly && q.number
    ? enSecondary(q.number) : []
  const ids = [primary, ...extra]
    .filter(id => knowledgeById[id])
    .filter((id, i, arr) => arr.indexOf(id) === i)
    .slice(0, 3)
  return { ...q, knowledgeIds: ids }
}

export const questions = [
  ...questionsDs, ...questionsCo, ...questionsOs, ...questionsCn,
  ...questionsMath, ...questionsEn, ...questionsPol
].map(withKnowledgeIds)

export const paperQuestions = [
  ...questions2025_408,
  ...questions2026_408,
  ...questions2021_408,
  ...questions2020_408,
  ...questions2019_408,
  ...questions2018_408,
  ...questions2017_408,
  ...questions2016_408,
  ...questions2015_408,
  ...questions2014_408,
  ...questions2013_408,
  ...questions2012_408,
  ...questions2011_408,
  ...questions2010_408,
  ...questions2009_408,
  ...questions2025_math1,
  ...questions2025_en1,
  ...questions2025_pol.map(withMaterial),
  ...questions2024_408,
  ...questions2024_pol.map(withMaterial),
  ...questions2024_math1,
  ...questions2024_en1,
  ...questions2023_en1,
  ...questions2023_pol.map(withMaterial),
  ...questions2023_math1,
  ...questions2023_408,
  ...questions2022_408,
  ...questions2022_math1,
  ...questions2022_en1,
  ...questions2022_pol.map(withMaterial)
].map(withKnowledgeIds)

export const allQuestions = [...questions, ...paperQuestions]

export const questionById = Object.fromEntries(allQuestions.map(q => [q.id, q]))

export const questionsByKnowledge = allQuestions.reduce((acc, q) => {
  for (const kid of q.knowledgeIds || [q.knowledgeId]) {
    if (!kid) continue
    (acc[kid] ||= []).push(q)
  }
  return acc
}, {})

export const questionsBySubject = questions.reduce((acc, q) => {
  (acc[q.subject] ||= []).push(q)
  return acc
}, {})
