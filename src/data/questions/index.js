import { questionsDs } from './ds.js'
import { questionsCo } from './co.js'
import { questionsOs } from './os.js'
import { questionsCn } from './cn.js'

export const questions = [...questionsDs, ...questionsCo, ...questionsOs, ...questionsCn]

export const questionById = Object.fromEntries(questions.map(q => [q.id, q]))

export const questionsByKnowledge = questions.reduce((acc, q) => {
  (acc[q.knowledgeId] ||= []).push(q)
  return acc
}, {})

export const questionsBySubject = questions.reduce((acc, q) => {
  (acc[q.subject] ||= []).push(q)
  return acc
}, {})
