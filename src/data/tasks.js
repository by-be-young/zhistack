export const dailyTasks = [
  { id: 't-daily-answered', cycle: 'daily', title: '今日做 10 题', desc: '任意科目，答完即计入', metric: 'answered', target: 10, reward: 20, icon: 'target' },
  { id: 't-daily-correct', cycle: 'daily', title: '做对 6 题', desc: '按全对口径统计', metric: 'correct', target: 6, reward: 30, icon: 'check' },
  { id: 't-daily-review', cycle: 'daily', title: '复习 3 道错题', desc: '错题本重练即可', metric: 'mistakeReview', target: 3, reward: 30, icon: 'repeat' },
  { id: 't-daily-knowledge', cycle: 'daily', title: '学习 1 个知识点', desc: '打开任意知识点详情', metric: 'knowledgeView', target: 1, reward: 20, icon: 'book' }
]

export const weeklyTasks = [
  { id: 't-week-answered', cycle: 'weekly', title: '本周累计 80 题', desc: '周一 04:00 重置', metric: 'answered', target: 80, reward: 80, icon: 'target' },
  { id: 't-week-streak', cycle: 'weekly', title: '本周打卡 5 天', desc: '每日答题即打卡', metric: 'streakDays', target: 5, reward: 100, icon: 'flame' },
  { id: 't-week-mistake', cycle: 'weekly', title: '消灭 10 道错题', desc: '连续答对 2 次出本', metric: 'mistakeCleared', target: 10, reward: 120, icon: 'spark' }
]

export const achievementDefs = [
  { id: 'a-first-paper', title: '第一套卷', desc: '完成首次练习会话', reward: 30, icon: 'flag' },
  { id: 'a-first-perfect', title: '满分', desc: '单套 ≥ 10 题且全对', reward: 120, icon: 'crown' },
  { id: 'a-100-questions', title: '百题', desc: '累计答题 100 道', reward: 60, icon: 'stack' },
  { id: 'a-1000-questions', title: '千题', desc: '累计答题 1000 道', reward: 150, icon: 'mountain' },
  { id: 'a-subject-80', title: '单科高手', desc: '某科 ≥ 30 题且正确率 ≥ 80%', reward: 100, icon: 'star' },
  { id: 'a-clear-10', title: '清错', desc: '累计错题出本 10 道', reward: 80, icon: 'broom' },
  { id: 'a-streak-30', title: '三十日', desc: '连续打卡 30 天', reward: 200, icon: 'flame' },
  { id: 'a-collect-one', title: '集章', desc: '集齐任一科卡册', reward: 100, icon: 'stamp' },
  { id: 'a-all-subjects', title: '四科入门', desc: '四科各完成 ≥ 1 次会话', reward: 60, icon: 'compass' }
]
