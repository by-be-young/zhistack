import { paper2024_408 } from './2024-408.js'
import { paper2024_pol } from './2024-pol.js'
import { paper2024_math1 } from './2024-math1.js'
import { paper2024_en1 } from './2024-en1.js'
import { paper2023_en1 } from './2023-en1.js'
import { paper2023_pol } from './2023-pol.js'
import { paper2023_math1 } from './2023-math1.js'
import { paper2023_408 } from './2023-408.js'

export const papers = [paper2024_408, paper2024_pol, paper2024_math1, paper2024_en1, paper2023_en1, paper2023_pol, paper2023_math1, paper2023_408]

export const paperById = Object.fromEntries(papers.map(p => [p.id, p]))

export const papersByYear = papers.reduce((acc, p) => {
  (acc[p.year] ||= []).push(p)
  return acc
}, {})

export const papersBySubject = papers.reduce((acc, p) => {
  for (const s of p.subjects) (acc[s] ||= []).push(p)
  return acc
}, {})
