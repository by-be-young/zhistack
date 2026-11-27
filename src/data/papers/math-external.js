// 数学（一）历年原卷：题干含大量 KaTeX 公式，拆成纯文本会严重失真，
// 因此这里只做“原卷入口”，完整公式与解答放在资料库对应页面。
const rows = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2026]
const counts = { 2021: 22, 2026: 22 }

export const mathExternalPapers = rows.map(y => ({
  id: `paper-${y}-math1-ext`,
  year: y,
  title: `${y} 年全国硕士研究生招生考试 数学（一）`,
  short: `${y} 数学一原卷`,
  group: 'math',
  subjects: ['math'],
  durationMin: 180,
  totalScore: 150,
  questionCount: counts[y] || 23,
  qids: [],
  externalHref: `#/notes/study_methods-math-math1-${y}`,
  sourceName: '计算机考研杂货铺',
  sourceUrl: `https://www.csgraduates.com/study_methods/math/math1/${y}/`,
  note: '公式原卷 · 在资料库查看完整题干与解答',
}))
