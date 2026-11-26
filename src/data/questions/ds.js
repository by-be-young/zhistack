const K = 'k-ds-'

export const questionsDs = [
  {
    id: 'q-ds-001', subject: 'ds', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: '以下程序段的时间复杂度是（ ）。\n\n```\nfor (i = 1; i <= n; i++)\n  for (j = 1; j <= i; j++)\n    s++;\n```',
    options: [{ key: 'A', text: 'O(n)' }, { key: 'B', text: 'O(n log n)' }, { key: 'C', text: 'O(n²)' }, { key: 'D', text: 'O(n³)' }],
    answer: ['C'],
    explain: '内层执行次数为 1+2+…+n = n(n+1)/2，最高阶为 n²。',
    source: 'original'
  },
  {
    id: 'q-ds-002', subject: 'ds', knowledgeId: K + '025', type: 'single', difficulty: 2,
    stem: '递归式 T(n) = 2T(n/2) + O(n) 的解是（ ）。',
    options: [{ key: 'A', text: 'O(n)' }, { key: 'B', text: 'O(n log n)' }, { key: 'C', text: 'O(n²)' }, { key: 'D', text: 'O(log n)' }],
    answer: ['B'],
    explain: '每层总代价为 n，共 log n 层，故 O(n log n)，对应归并排序。',
    source: 'original'
  },
  {
    id: 'q-ds-003', subject: 'ds', knowledgeId: K + '002', type: 'single', difficulty: 2,
    stem: '长度为 n 的顺序表，等概率在任意合法位置插入一个元素，平均需要移动的元素个数为（ ）。',
    options: [{ key: 'A', text: 'n' }, { key: 'B', text: 'n/2' }, { key: 'C', text: '(n-1)/2' }, { key: 'D', text: 'n+1' }],
    answer: ['B'],
    explain: '插入位置共 n+1 个，移动次数为 n-i+1，平均为 n/2。',
    source: 'original'
  },
  {
    id: 'q-ds-004', subject: 'ds', knowledgeId: K + '003', type: 'single', difficulty: 2,
    stem: '在单链表中删除指针 p 所指结点的后继结点，其时间复杂度为（ ）。',
    options: [{ key: 'A', text: 'O(1)' }, { key: 'B', text: 'O(log n)' }, { key: 'C', text: 'O(n)' }, { key: 'D', text: 'O(n²)' }],
    answer: ['A'],
    explain: '已知 p，直接令 p->next = p->next->next 并释放即可，无需遍历。',
    source: 'original'
  },
  {
    id: 'q-ds-005', subject: 'ds', knowledgeId: K + '004', type: 'single', difficulty: 2,
    stem: '在双链表中删除 p 所指结点，正确的指针操作顺序是（ ）。',
    options: [
      { key: 'A', text: 'p->prior->next = p->next; p->next->prior = p->prior;' },
      { key: 'B', text: 'p->next->prior = p; p->prior->next = p;' },
      { key: 'C', text: 'p->prior = p->next; p->next = p->prior;' },
      { key: 'D', text: 'p->next->prior = p->prior->prior; p->prior->next = p->next;' }
    ],
    answer: ['A'],
    explain: '先让前驱跨过 p 指向后继，再让后继回头指向前驱，两向指针都更新且不丢链。',
    source: 'original'
  },
  {
    id: 'q-ds-006', subject: 'ds', knowledgeId: K + '006', type: 'single', difficulty: 2,
    stem: '循环队列容量 M=10，front=5，rear=2，当前元素个数为（ ）。',
    options: [{ key: 'A', text: '3' }, { key: 'B', text: '7' }, { key: 'C', text: '8' }, { key: 'D', text: '2' }],
    answer: ['B'],
    explain: '个数 = (rear - front + M) % M = (2 - 5 + 10) % 10 = 7。',
    source: 'original'
  },
  {
    id: 'q-ds-007', subject: 'ds', knowledgeId: K + '005', type: 'single', difficulty: 3,
    stem: '元素 1、2、3、4 依次入栈，下列不可能的出栈序列是（ ）。',
    options: [{ key: 'A', text: '4 3 2 1' }, { key: 'B', text: '1 3 2 4' }, { key: 'C', text: '4 3 1 2' }, { key: 'D', text: '2 4 3 1' }],
    answer: ['C'],
    explain: '弹出 4、3 后栈顶为 2，1 在 2 之下，不可能先于 2 弹出。',
    source: 'original', difficultyNote: '栈序列判定'
  },
  {
    id: 'q-ds-008', subject: 'ds', knowledgeId: K + '005', type: 'single', difficulty: 1,
    stem: '下列问题中，通常不使用栈求解的是（ ）。',
    options: [{ key: 'A', text: '括号匹配' }, { key: 'B', text: '表达式求值' }, { key: 'C', text: '图的广度优先遍历' }, { key: 'D', text: '递归过程模拟' }],
    answer: ['C'],
    explain: '广度优先遍历用队列按层扩展；其余三者都依赖后进先出。',
    source: 'original'
  },
  {
    id: 'q-ds-009', subject: 'ds', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: 'KMP 算法的时间复杂度为（ ），其中 n 为主串长度、m 为模式串长度。',
    options: [{ key: 'A', text: 'O(n·m)' }, { key: 'B', text: 'O(n+m)' }, { key: 'C', text: 'O(n²)' }, { key: 'D', text: 'O(m²)' }],
    answer: ['B'],
    explain: '主串指针不回退，求 next 与匹配各 O(m)、O(n)，合计 O(n+m)。',
    source: 'original'
  },
  {
    id: 'q-ds-010', subject: 'ds', knowledgeId: K + '008', type: 'single', difficulty: 2,
    stem: '一棵二叉树中有 10 个度为 2 的结点，则叶结点个数为（ ）。',
    options: [{ key: 'A', text: '9' }, { key: 'B', text: '10' }, { key: 'C', text: '11' }, { key: 'D', text: '12' }],
    answer: ['C'],
    explain: '任何二叉树满足 n0 = n2 + 1，故 n0 = 11。',
    source: 'original'
  },
  {
    id: 'q-ds-011', subject: 'ds', knowledgeId: K + '008', type: 'single', difficulty: 2,
    stem: '含 1000 个结点的完全二叉树的深度为（ ）。',
    options: [{ key: 'A', text: '9' }, { key: 'B', text: '10' }, { key: 'C', text: '11' }, { key: 'D', text: '500' }],
    answer: ['B'],
    explain: '⌊log₂1000⌋ + 1 = 9 + 1 = 10。',
    source: 'original'
  },
  {
    id: 'q-ds-012', subject: 'ds', knowledgeId: K + '009', type: 'single', difficulty: 2,
    stem: '下列遍历组合中，能唯一确定一棵二叉树的是（ ）。',
    options: [{ key: 'A', text: '先序 + 后序' }, { key: 'B', text: '先序 + 中序' }, { key: 'C', text: '层序 + 后序' }, { key: 'D', text: '先序 + 层序' }],
    answer: ['B'],
    explain: '中序能区分左右子树，配合先序（或后序）可唯一还原；先序+后序无法区分单孩子方向。',
    source: 'original'
  },
  {
    id: 'q-ds-013', subject: 'ds', knowledgeId: K + '010', type: 'single', difficulty: 2,
    stem: '含 n 个结点的二叉树，线索化后线索（空指针域）的总数为（ ）。',
    options: [{ key: 'A', text: 'n' }, { key: 'B', text: 'n-1' }, { key: 'C', text: 'n+1' }, { key: 'D', text: '2n' }],
    answer: ['C'],
    explain: 'n 个结点共 2n 个指针域，其中 n-1 条指向孩子，剩余 2n-(n-1)=n+1 个为空，可作线索。',
    source: 'original'
  },
  {
    id: 'q-ds-014', subject: 'ds', knowledgeId: K + '011', type: 'single', difficulty: 3,
    stem: '权值为 {1, 2, 3, 4} 的四个叶子构造哈夫曼树，其带权路径长度 WPL 为（ ）。',
    options: [{ key: 'A', text: '16' }, { key: 'B', text: '19' }, { key: 'C', text: '20' }, { key: 'D', text: '25' }],
    answer: ['B'],
    explain: '合并 1+2=3，再合并 3+3=6，再合并 6+4=10；WPL = 3+6+10 = 19。',
    source: 'original'
  },
  {
    id: 'q-ds-015', subject: 'ds', knowledgeId: K + '012', type: 'single', difficulty: 1,
    stem: '含 n 个顶点、e 条边的无向图，其邻接表中边结点的总数为（ ）。',
    options: [{ key: 'A', text: 'e' }, { key: 'B', text: '2e' }, { key: 'C', text: 'n+e' }, { key: 'D', text: 'n²' }],
    answer: ['B'],
    explain: '无向图每条边在两个顶点的链表中各出现一次，故为 2e。',
    source: 'original'
  },
  {
    id: 'q-ds-016', subject: 'ds', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: '在无权图上求两点间边数最少的路径，应使用（ ）。',
    options: [{ key: 'A', text: '深度优先遍历' }, { key: 'B', text: '广度优先遍历' }, { key: 'C', text: 'Prim 算法' }, { key: 'D', text: '拓扑排序' }],
    answer: ['B'],
    explain: 'BFS 按层扩展，首次到达某点时的层数即最少边数。',
    source: 'original'
  },
  {
    id: 'q-ds-017', subject: 'ds', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: '采用邻接矩阵存储含 n 个顶点的图，其深度优先遍历的时间复杂度为（ ）。',
    options: [{ key: 'A', text: 'O(n)' }, { key: 'B', text: 'O(n²)' }, { key: 'C', text: 'O(n+e)' }, { key: 'D', text: 'O(e²)' }],
    answer: ['B'],
    explain: '邻接矩阵需检查每个顶点与所有顶点的邻接关系，共 n² 次。',
    source: 'original'
  },
  {
    id: 'q-ds-018', subject: 'ds', knowledgeId: K + '014', type: 'single', difficulty: 2,
    stem: '关于最小生成树算法，下列说法正确的是（ ）。',
    options: [
      { key: 'A', text: 'Kruskal 算法更适合稠密图' },
      { key: 'B', text: 'Prim 算法的时间开销与边数关系较小，适合稠密图' },
      { key: 'C', text: '两种算法得到的最小生成树一定相同' },
      { key: 'D', text: '最小生成树一定唯一' }
    ],
    answer: ['B'],
    explain: 'Prim 复杂度主要由顶点数决定；Kruskal 需对边排序，适合稀疏图；权值相等时生成树可能不唯一。',
    source: 'original'
  },
  {
    id: 'q-ds-019', subject: 'ds', knowledgeId: K + '015', type: 'single', difficulty: 2,
    stem: 'Dijkstra 算法不能正确处理的情形是（ ）。',
    options: [{ key: 'A', text: '存在环的图' }, { key: 'B', text: '存在负权边的图' }, { key: 'C', text: '稠密图' }, { key: 'D', text: '有向图' }],
    answer: ['B'],
    explain: 'Dijkstra 基于贪心，假定已确定点的距离不会再变小；负权边会破坏该前提。',
    source: 'original'
  },
  {
    id: 'q-ds-020', subject: 'ds', knowledgeId: K + '016', type: 'single', difficulty: 2,
    stem: '一个有向图能进行拓扑排序的充要条件是（ ）。',
    options: [{ key: 'A', text: '图是连通的' }, { key: 'B', text: '图中不存在回路' }, { key: 'C', text: '每个顶点入度均大于 0' }, { key: 'D', text: '图是强连通的' }],
    answer: ['B'],
    explain: '有向无环图（DAG）才存在拓扑序列；有环时无法输出全部顶点。',
    source: 'original'
  },
  {
    id: 'q-ds-021', subject: 'ds', knowledgeId: K + '017', type: 'single', difficulty: 2,
    stem: '对 1000 个元素的有序顺序表进行折半查找，最多比较次数为（ ）。',
    options: [{ key: 'A', text: '9' }, { key: 'B', text: '10' }, { key: 'C', text: '11' }, { key: 'D', text: '1000' }],
    answer: ['B'],
    explain: '判定树深度为 ⌈log₂(n+1)⌉ = ⌈log₂1001⌉ = 10。',
    source: 'original'
  },
  {
    id: 'q-ds-022', subject: 'ds', knowledgeId: K + '018', type: 'single', difficulty: 2,
    stem: '向二叉排序树依次插入递增有序的关键字，其查找时间复杂度退化为（ ）。',
    options: [{ key: 'A', text: 'O(1)' }, { key: 'B', text: 'O(log n)' }, { key: 'C', text: 'O(n)' }, { key: 'D', text: 'O(n log n)' }],
    answer: ['C'],
    explain: '递增插入形成单支树，树高 n，查找需沿链比较 n 次。',
    source: 'original'
  },
  {
    id: 'q-ds-023', subject: 'ds', knowledgeId: K + '018', type: 'single', difficulty: 3,
    stem: '在 AVL 树中插入结点后，若最小失衡子树的平衡因子为 +2 且其左孩子的平衡因子为 +1，应进行的调整是（ ）。',
    options: [{ key: 'A', text: '左旋' }, { key: 'B', text: '右旋' }, { key: 'C', text: '先左旋再右旋' }, { key: 'D', text: '先右旋再左旋' }],
    answer: ['B'],
    explain: 'LL 型失衡对最小失衡子树做一次右旋即可恢复平衡。',
    source: 'original'
  },
  {
    id: 'q-ds-024', subject: 'ds', knowledgeId: K + '019', type: 'single', difficulty: 3,
    stem: '装填因子 α=0.75 的散列表采用线性探测法，查找成功的平均查找长度约为（ ）。',
    options: [{ key: 'A', text: '1.5' }, { key: 'B', text: '2.5' }, { key: 'C', text: '4.0' }, { key: 'D', text: '0.75' }],
    answer: ['B'],
    explain: '线性探测成功 ASL ≈ (1 + 1/(1-α))/2 = (1+4)/2 = 2.5。',
    source: 'original'
  },
  {
    id: 'q-ds-025', subject: 'ds', knowledgeId: K + '021', type: 'single', difficulty: 2,
    stem: '快速排序在（ ）情况下时间复杂度最坏。',
    options: [{ key: 'A', text: '待排序列基本有序且取端点为枢轴' }, { key: 'B', text: '待排序列随机分布' }, { key: 'C', text: '每次划分都接近均分' }, { key: 'D', text: '待排序列元素全部相同且采用三路划分' }],
    answer: ['A'],
    explain: '有序序列取端点作枢轴时每次划分只减少一个元素，递归深度 n，退化为 O(n²)。',
    source: 'original'
  },
  {
    id: 'q-ds-026', subject: 'ds', knowledgeId: K + '023', type: 'single', difficulty: 2,
    stem: '下列排序算法中，稳定的是（ ）。',
    options: [{ key: 'A', text: '快速排序' }, { key: 'B', text: '堆排序' }, { key: 'C', text: '归并排序' }, { key: 'D', text: '希尔排序' }],
    answer: ['C'],
    explain: '归并排序合并时相等元素按原顺序放置，稳定；快排、堆排、希尔均不稳定。',
    source: 'original'
  }
]
