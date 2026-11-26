import { paper2024_408 } from './2024-408.js'
import { paper2024_pol } from './2024-pol.js'

export const papers = [paper2024_408, paper2024_pol]

export const paperById = Object.fromEntries(papers.map(p => [p.id, p]))

export const papersByYear = papers.reduce((acc, p) => {
  (acc[p.year] ||= []).push(p)
  return acc
}, {})

export const papersBySubject = papers.reduce((acc, p) => {
  for (const s of p.subjects) (acc[s] ||= []).push(p)
  return acc
}, {})
