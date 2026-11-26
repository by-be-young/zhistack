import { cardsPublic } from './public-cards.js'

const coreCards = [
  // 数据结构 12 张
  { id: 'c-ds-01', subject: 'ds', rarity: 'N', name: '线性之始', knowledgeId: 'k-ds-002', motif: 'lattice', line: '下标即地址，一步到位。' },
  { id: 'c-ds-02', subject: 'ds', rarity: 'N', name: '链上寻踪', knowledgeId: 'k-ds-003', motif: 'chain', line: '不连续，也走得到。' },
  { id: 'c-ds-03', subject: 'ds', rarity: 'N', name: '后进先出', knowledgeId: 'k-ds-005', motif: 'stack', line: '最后进来的，最先被记住。' },
  { id: 'c-ds-04', subject: 'ds', rarity: 'N', name: '环形队列', knowledgeId: 'k-ds-006', motif: 'orbit', line: '走到尽头，再从头开始。' },
  { id: 'c-ds-05', subject: 'ds', rarity: 'N', name: '折半之眼', knowledgeId: 'k-ds-017', motif: 'grid', line: '每次砍掉一半的可能。' },
  { id: 'c-ds-06', subject: 'ds', rarity: 'R', name: '遍历四式', knowledgeId: 'k-ds-009', motif: 'branch', line: '根在何处，序便不同。' },
  { id: 'c-ds-07', subject: 'ds', rarity: 'R', name: '哈夫曼之秤', knowledgeId: 'k-ds-011', motif: 'wave', line: '轻的往下沉，重的靠近根。' },
  { id: 'c-ds-08', subject: 'ds', rarity: 'R', name: '最短路标尺', knowledgeId: 'k-ds-015', motif: 'graph', line: '贪心一步，未必全局最优。' },
  { id: 'c-ds-09', subject: 'ds', rarity: 'R', name: '关键路径', knowledgeId: 'k-ds-016', motif: 'circuit', line: '最长的那条，决定工期。' },
  { id: 'c-ds-10', subject: 'ds', rarity: 'SR', name: '枢轴之择', knowledgeId: 'k-ds-021', motif: 'prism', line: '一次划分，定下最终位置。' },
  { id: 'c-ds-11', subject: 'ds', rarity: 'SR', name: '堆顶之下', knowledgeId: 'k-ds-022', motif: 'tower', line: '建堆是线性的，别算贵了。' },
  { id: 'c-ds-12', subject: 'ds', rarity: 'SSR', name: '渐进之门', knowledgeId: 'k-ds-001', motif: 'halo', line: '当 n 足够大，常数便不再重要。' },

  // 计算机组成原理 12 张
  { id: 'c-co-01', subject: 'co', rarity: 'N', name: '存储程序', knowledgeId: 'k-co-001', motif: 'grid', line: '指令与数据，同住一间屋。' },
  { id: 'c-co-02', subject: 'co', rarity: 'N', name: '补码之环', knowledgeId: 'k-co-011', motif: 'orbit', line: '减法绕一圈，变成加法。' },
  { id: 'c-co-03', subject: 'co', rarity: 'N', name: '总线仲裁', knowledgeId: 'k-co-003', motif: 'chain', line: '谁先说，谁先用。' },
  { id: 'c-co-04', subject: 'co', rarity: 'N', name: '刷新时钟', knowledgeId: 'k-co-005', motif: 'wave', line: '电容会忘，所以要常回来。' },
  { id: 'c-co-05', subject: 'co', rarity: 'N', name: '寻址之径', knowledgeId: 'k-co-015', motif: 'lattice', line: '地址再走一层，才见操作数。' },
  { id: 'c-co-06', subject: 'co', rarity: 'R', name: '海明之网', knowledgeId: 'k-co-002', motif: 'grid', line: '错一位，也能指出在哪。' },
  { id: 'c-co-07', subject: 'co', rarity: 'R', name: 'Cache 组', knowledgeId: 'k-co-006', motif: 'stack', line: '组内任意，冲突少一些。' },
  { id: 'c-co-08', subject: 'co', rarity: 'R', name: '浮点之尾', knowledgeId: 'k-co-013', motif: 'prism', line: '那一位 1，藏在点前。' },
  { id: 'c-co-09', subject: 'co', rarity: 'R', name: '流水之速', knowledgeId: 'k-co-019', motif: 'circuit', line: '填满之后，每拍一条。' },
  { id: 'c-co-10', subject: 'co', rarity: 'SR', name: 'TLB 之门', knowledgeId: 'k-co-007', motif: 'halo', line: '页表的影子，快一步。' },
  { id: 'c-co-11', subject: 'co', rarity: 'SR', name: '溢出双符', knowledgeId: 'k-co-012', motif: 'tower', line: '两位符号，看出越界。' },
  { id: 'c-co-12', subject: 'co', rarity: 'SSR', name: '五段流水', knowledgeId: 'k-co-020', motif: 'halo', line: '冒险处停顿，顺流时无阻。' },

  // 操作系统 12 张
  { id: 'c-os-01', subject: 'os', rarity: 'N', name: '三态之间', knowledgeId: 'k-os-004', motif: 'orbit', line: '阻塞不能直接起跑。' },
  { id: 'c-os-02', subject: 'os', rarity: 'N', name: 'PCB 档案', knowledgeId: 'k-os-004', motif: 'lattice', line: '进程的一生，都在这张表里。' },
  { id: 'c-os-03', subject: 'os', rarity: 'N', name: '临界区门', knowledgeId: 'k-os-005', motif: 'grid', line: '一次只放一个人进来。' },
  { id: 'c-os-04', subject: 'os', rarity: 'N', name: '目录索引', knowledgeId: 'k-os-018', motif: 'stack', line: '名字在前，inode 在后。' },
  { id: 'c-os-05', subject: 'os', rarity: 'N', name: '缓冲之湖', knowledgeId: 'k-os-023', motif: 'wave', line: '快慢之间，留一段水面。' },
  { id: 'c-os-06', subject: 'os', rarity: 'R', name: '信号量之衡', knowledgeId: 'k-os-006', motif: 'prism', line: '减到负数，就开始等待。' },
  { id: 'c-os-07', subject: 'os', rarity: 'R', name: '短作业优先', knowledgeId: 'k-os-009', motif: 'tower', line: '平均等待最短，长作业会饿。' },
  { id: 'c-os-08', subject: 'os', rarity: 'R', name: '页表之眼', knowledgeId: 'k-os-013', motif: 'grid', line: '页号与偏移，各走各的路。' },
  { id: 'c-os-09', subject: 'os', rarity: 'R', name: '电梯算法', knowledgeId: 'k-os-021', motif: 'circuit', line: '一路向上，再折返。' },
  { id: 'c-os-10', subject: 'os', rarity: 'SR', name: '银行家之约', knowledgeId: 'k-os-011', motif: 'halo', line: '先找安全序列，再谈分配。' },
  { id: 'c-os-11', subject: 'os', rarity: 'SR', name: 'Clock 指针', knowledgeId: 'k-os-016', motif: 'orbit', line: '访问位为 0 的那一页，先走。' },
  { id: 'c-os-12', subject: 'os', rarity: 'SSR', name: '虚拟之境', knowledgeId: 'k-os-015', motif: 'halo', line: '内存不够，地址仍可很大。' },

  // 计算机网络 12 张
  { id: 'c-cn-01', subject: 'cn', rarity: 'N', name: '七层之塔', knowledgeId: 'k-cn-001', motif: 'tower', line: '每层只做自己的事。' },
  { id: 'c-cn-02', subject: 'cn', rarity: 'N', name: '在途比特', knowledgeId: 'k-cn-002', motif: 'wave', line: '带宽乘时延，链路里的存货。' },
  { id: 'c-cn-03', subject: 'cn', rarity: 'N', name: '曼彻斯特', knowledgeId: 'k-cn-003', motif: 'circuit', line: '每位中间，都要跳一下。' },
  { id: 'c-cn-04', subject: 'cn', rarity: 'N', name: '比特填充', knowledgeId: 'k-cn-005', motif: 'lattice', line: '五个 1 之后，塞一个 0。' },
  { id: 'c-cn-05', subject: 'cn', rarity: 'N', name: '交换机表', knowledgeId: 'k-cn-008', motif: 'grid', line: '看源地址学习，看目的地址转发。' },
  { id: 'c-cn-06', subject: 'cn', rarity: 'R', name: '子网切分', knowledgeId: 'k-cn-009', motif: 'prism', line: '借几位主机，换几个子网。' },
  { id: 'c-cn-07', subject: 'cn', rarity: 'R', name: '最长前缀', knowledgeId: 'k-cn-010', motif: 'stack', line: '越具体，越优先。' },
  { id: 'c-cn-08', subject: 'cn', rarity: 'R', name: 'ARP 广播', knowledgeId: 'k-cn-011', motif: 'orbit', line: '问遍全网，只等一个人答。' },
  { id: 'c-cn-09', subject: 'cn', rarity: 'R', name: '三次握手', knowledgeId: 'k-cn-016', motif: 'chain', line: '两个方向，各确认一次。' },
  { id: 'c-cn-10', subject: 'cn', rarity: 'SR', name: '拥塞四阶', knowledgeId: 'k-cn-018', motif: 'wave', line: '先翻倍，再线性，遇阻减半。' },
  { id: 'c-cn-11', subject: 'cn', rarity: 'SR', name: 'TIME_WAIT', knowledgeId: 'k-cn-016', motif: 'halo', line: '多等 2MSL，只为干净收场。' },
  { id: 'c-cn-12', subject: 'cn', rarity: 'SSR', name: '端到端之约', knowledgeId: 'k-cn-017', motif: 'halo', line: '窗口之内，可靠前行。' }
]

export const cards = [...coreCards, ...cardsPublic]

export const cardsBySubject = cards.reduce((acc, c) => {
  (acc[c.subject] ||= []).push(c)
  return acc
}, {})

export const cardById = Object.fromEntries(cards.map(c => [c.id, c]))

export const rarityOrder = ['N', 'R', 'SR', 'SSR']

export const rarityMeta = {
  N: { label: 'N', name: '常卡', color: '#8A928E' },
  R: { label: 'R', name: '珍藏', color: '#A6CDF2' },
  SR: { label: 'SR', name: '秘藏', color: '#C9B8F5' },
  SSR: { label: 'SSR', name: '典藏', color: '#F3C97C' }
}
