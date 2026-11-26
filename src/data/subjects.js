export const subjects = [
  { id: 'ds', name: '数据结构', short: 'DS', code: '408-1', accent: 'ds', order: 1,
    desc: '线性表、树、图与查找排序，重在复杂度与结构选择' },
  { id: 'co', name: '计算机组成原理', short: 'CO', code: '408-2', accent: 'co', order: 2,
    desc: '数据表示、存储层次、指令与流水线，重在计算与硬件路径' },
  { id: 'os', name: '操作系统', short: 'OS', code: '408-3', accent: 'os', order: 3,
    desc: '进程、内存、文件与磁盘，重在机制与调度策略' },
  { id: 'cn', name: '计算机网络', short: 'CN', code: '408-4', accent: 'cn', order: 4,
    desc: '分层协议、TCP/IP 与应用层，重在流程与字段' },
  { id: 'math', name: '数学（一）', short: '数学', code: '301', accent: 'math', order: 5,
    desc: '高数、线代与概率，重在定义、定理条件与计算准确度' },
  { id: 'en', name: '英语（一）', short: '英语', code: '201', accent: 'en', order: 6,
    desc: '词汇、长难句、阅读与写作，重在句子结构与选项辨析' },
  { id: 'pol', name: '政治', short: '政治', code: '101', accent: 'pol', order: 7,
    desc: '马原、毛中特、史纲、思修与时政，重在原理对应与时政口径' }
]

export const subjectMap = Object.fromEntries(subjects.map(s => [s.id, s]))
