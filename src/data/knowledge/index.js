import { knowledgeDs } from './ds.js'
import { knowledgeCo } from './co.js'
import { knowledgeOs } from './os.js'
import { knowledgeCn } from './cn.js'

export const knowledge = [...knowledgeDs, ...knowledgeCo, ...knowledgeOs, ...knowledgeCn]

export const knowledgeById = Object.fromEntries(knowledge.map(k => [k.id, k]))

export const knowledgeByChapter = knowledge.reduce((acc, k) => {
  (acc[k.chapterId] ||= []).push(k)
  return acc
}, {})

export const knowledgeBySubject = knowledge.reduce((acc, k) => {
  (acc[k.subject] ||= []).push(k)
  return acc
}, {})
