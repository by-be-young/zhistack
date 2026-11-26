import { questionsDs } from './ds.js'
import { questionsCo } from './co.js'
import { questionsOs } from './os.js'
import { questionsCn } from './cn.js'
import { questionsMath } from './math.js'
import { questionsEn } from './en.js'
import { questionsPol } from './pol.js'

export const questions = [
  ...questionsDs, ...questionsCo, ...questionsOs, ...questionsCn,
  ...questionsMath, ...questionsEn, ...questionsPol
]

export const questionById = Object.fromEntries(questions.map(q => [q.id, q]))

export const questionsByKnowledge = questions.reduce((acc, q) => {
  (acc[q.knowledgeId] ||= []).push(q)
  return acc
}, {})

export const questionsBySubject = questions.reduce((acc, q) => {
  (acc[q.subject] ||= []).push(q)
  return acc
}, {})
