import { subjects, subjectMap } from './subjects.js'
import { books, bookMap, chaptersByBook } from './books.js'
import { knowledge, knowledgeById, knowledgeByChapter, knowledgeBySubject } from './knowledge/index.js'
import { questions, allQuestions, questionById, questionsByKnowledge, questionsBySubject, paperQuestions } from './questions/index.js'
import { papers, paperById, papersByYear, papersBySubject } from './papers/index.js'
import { cards, cardById, cardsBySubject, rarityMeta, rarityOrder } from './cards.js'
import { dailyTasks, weeklyTasks, achievementDefs } from './tasks.js'

// 章节（含父章）到知识点的聚合
const chapterKnowledge = {}
for (const book of books) {
  for (const ch of book.chapters) {
    const ids = [ch.id, ...(ch.children || []).map(c => c.id)]
    const list = ids.flatMap(id => knowledgeByChapter[id] || [])
    chapterKnowledge[ch.id] = list
  }
}

const chapterQuestions = {}
for (const [chapterId, list] of Object.entries(chapterKnowledge)) {
  chapterQuestions[chapterId] = list.flatMap(k => questionsByKnowledge[k.id] || [])
}

export const dataVersion = '1.0.0'

export {
  subjects, subjectMap, books, bookMap, chaptersByBook,
  knowledge, knowledgeById, knowledgeByChapter, knowledgeBySubject, chapterKnowledge, chapterQuestions,
  questions, allQuestions, questionById, questionsByKnowledge, questionsBySubject, paperQuestions,
  papers, paperById, papersByYear, papersBySubject,
  cards, cardById, cardsBySubject, rarityMeta, rarityOrder,
  dailyTasks, weeklyTasks, achievementDefs
}
