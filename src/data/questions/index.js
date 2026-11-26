import { questionsDs } from './ds.js'
import { questionsCo } from './co.js'
import { questionsOs } from './os.js'
import { questionsCn } from './cn.js'
import { questionsMath } from './math.js'
import { questionsEn } from './en.js'
import { questionsPol } from './pol.js'
import { questions2024_408 } from '../papers/2024-408.js'
import { questions2024_pol } from '../papers/2024-pol.js'
import { questions2024_math1 } from '../papers/2024-math1.js'
import { questions2024_en1 } from '../papers/2024-en1.js'
import { questions2023_en1 } from '../papers/2023-en1.js'
import { questions2023_pol } from '../papers/2023-pol.js'
import { questions2023_math1 } from '../papers/2023-math1.js'
import { questions2023_408 } from '../papers/2023-408.js'
import { withMaterial } from '../papers/material.js'

export const questions = [
  ...questionsDs, ...questionsCo, ...questionsOs, ...questionsCn,
  ...questionsMath, ...questionsEn, ...questionsPol
]

export const paperQuestions = [...questions2024_408, ...questions2024_pol.map(withMaterial), ...questions2024_math1, ...questions2024_en1, ...questions2023_en1, ...questions2023_pol.map(withMaterial), ...questions2023_math1, ...questions2023_408]

export const allQuestions = [...questions, ...paperQuestions]

export const questionById = Object.fromEntries(allQuestions.map(q => [q.id, q]))

export const questionsByKnowledge = allQuestions.reduce((acc, q) => {
  (acc[q.knowledgeId] ||= []).push(q)
  return acc
}, {})

export const questionsBySubject = questions.reduce((acc, q) => {
  (acc[q.subject] ||= []).push(q)
  return acc
}, {})
