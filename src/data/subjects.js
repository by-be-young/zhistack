export const subjects = [
  { id: 'ds', name: '数据结构', short: 'DS', code: '408-1', accent: 'ds', order: 1,
    desc: '线性表、树、图与查找排序，重在复杂度与结构选择' },
  { id: 'co', name: '计算机组成原理', short: 'CO', code: '408-2', accent: 'co', order: 2,
    desc: '数据表示、存储层次、指令与流水线，重在计算与硬件路径' },
  { id: 'os', name: '操作系统', short: 'OS', code: '408-3', accent: 'os', order: 3,
    desc: '进程、内存、文件与磁盘，重在机制与调度策略' },
  { id: 'cn', name: '计算机网络', short: 'CN', code: '408-4', accent: 'cn', order: 4,
    desc: '分层协议、TCP/IP 与应用层，重在流程与字段' }
]

export const subjectMap = Object.fromEntries(subjects.map(s => [s.id, s]))
