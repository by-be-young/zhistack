// 所有数值集中在此，避免散落魔数。
export const POINTS = {
  correct: 2,
  wrong: 1,
  sessionDone: 10,
  sessionGood: 15,       // 正确率 >= 80%
  sessionPerfect: 30,    // 100% 且 >= 10 题
  mistakeReview: 3,
  mistakeCleared: 10,
  knowledgeFirst: 2,
  bookOpen: 3,
  dailyCap: 300,
  dailyAllDone: 30,
  dailyTask: { 't-daily-answered': 20, 't-daily-correct': 30, 't-daily-review': 30, 't-daily-knowledge': 20 },
  weeklyTask: { 't-week-answered': 80, 't-week-streak': 100, 't-week-mistake': 120 }
}

export const STREAK = {
  milestones: [
    { days: 7, reward: 50 },
    { days: 14, reward: 120 },
    { days: 30, reward: 300 }
  ]
}

export const GACHA = {
  singleCost: 60,
  tenCost: 540,
  rates: { N: 0.60, R: 0.30, SR: 0.09, SSR: 0.01 },
  shards: { N: 5, R: 15, SR: 40, SSR: 100 },
  pitySsr: 90,
  exchange: { N: 30, R: 80 },
  historyLimit: 50
}

export const LEVELS = [
  { level: 1, name: '起步', min: 0 },
  { level: 2, name: '上路', min: 300 },
  { level: 3, name: '稳行', min: 800 },
  { level: 4, name: '熟手', min: 1600 },
  { level: 5, name: '老练', min: 2800 },
  { level: 6, name: '精研', min: 4500 },
  { level: 7, name: '通透', min: 7000 },
  { level: 8, name: '案头', min: 10000 }
]

export const MASTERY = {
  weak: 45,
  firm: 75,
  recencyHalflife: 21,
  confidenceBase: 0.4
}

export const LIMITS = {
  sessions: 500,
  pointLog: 300,
  dailyKeepDays: 400
}

export const defaults = {
  dailySubjects: ['ds', 'co', 'os', 'cn'],
  questionCounts: [10, 20, 30],
  durations: [0, 30, 45, 60, 90]
}
