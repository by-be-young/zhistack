export const knowledgeDs = [
  {
    id: 'k-ds-001', subject: 'ds', chapterId: 'ds-ch1', gid: 'DS-1.1-01',
    title: '时间复杂度与空间复杂度', difficulty: 1, tags: ['复杂度', '渐进分析'],
    summary: '用渐进符号描述算法代价随规模的增长阶，分析时只看最高阶项、忽略常数。',
    points: [
      '`O` 表示上界，`Ω` 下界，`Θ` 同阶；常考循环嵌套的计数与递归式展开。',
      '加法规则取最大项，乘法规则阶相乘；`O(1) < O(log n) < O(n) < O(n log n) < O(n²)`。',
      '空间复杂度统计辅助空间，递归还要计入栈深度。'
    ],
    pitfalls: ['把 `O(2n)` 写成 `O(2n)`，应化简为 `O(n)`。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch1', page: 9, confidence: 'approx' }],
    related: ['k-ds-002', 'k-ds-021'], estMin: 12
  },
  {
    id: 'k-ds-002', subject: 'ds', chapterId: 'ds-ch2', gid: 'DS-2.1-01',
    title: '顺序表的存储与操作', difficulty: 1, tags: ['线性表', '数组'],
    summary: '用一段连续空间依次存放元素，支持随机访问，插入删除需移动元素。',
    points: [
      '下标从 0 开始，第 i 个元素地址 = 基址 + i × 元素大小，访问 `O(1)`。',
      '插入平均移动 n/2 个元素，删除平均移动 (n-1)/2 个，均为 `O(n)`。',
      '表长为 n 时，合法插入位置 1..n+1，删除位置 1..n。'
    ],
    pitfalls: ['插入到表尾不需要移动元素，被误算成 O(n)。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch2', page: 18, confidence: 'approx' }],
    related: ['k-ds-003'], estMin: 10
  },
  {
    id: 'k-ds-003', subject: 'ds', chapterId: 'ds-ch2', gid: 'DS-2.2-01',
    title: '单链表的操作与头结点', difficulty: 2, tags: ['链表', '指针'],
    summary: '结点由数据域与指针域组成，逻辑相邻不要求物理相邻，插入删除只改指针。',
    points: [
      '带头结点可统一空表与非空表的插入删除，头指针指向头结点。',
      '在第 i 个位置插入需先找到第 i-1 个结点，时间 `O(n)`；已知前驱则 `O(1)`。',
      '逆置单链表用三指针就地翻转，空间 `O(1)`。'
    ],
    pitfalls: ['删除结点后未释放或未改前驱指针，导致断链。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch2', page: 27, confidence: 'approx' }],
    related: ['k-ds-002', 'k-ds-004'], estMin: 14
  },
  {
    id: 'k-ds-004', subject: 'ds', chapterId: 'ds-ch2', gid: 'DS-2.2-02',
    title: '双链表与循环链表', difficulty: 2, tags: ['链表', '循环'],
    summary: '双链表带前后指针，删除可直接定位前驱；循环链表尾结点指回头结点。',
    points: [
      '双链表插入需改四个指针，顺序为「先连新结点，再改旧邻居」。',
      '循环单链表判空看 `head->next == head`；尾指针便于在表头表尾插入。',
      '双链表删除结点 p 需 `p->prior->next = p->next` 与反向指针同步。'
    ],
    pitfalls: ['改指针顺序错误会丢失后继链。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch2', page: 35, confidence: 'approx' }],
    related: ['k-ds-003'], estMin: 12
  },
  {
    id: 'k-ds-005', subject: 'ds', chapterId: 'ds-ch3', gid: 'DS-3.1-01',
    title: '栈及其应用', difficulty: 1, tags: ['栈', 'LIFO'],
    summary: '后进先出的线性结构，只在栈顶插入删除；用于括号匹配、表达式求值与递归。',
    points: [
      '顺序栈用 top 指向栈顶元素，入栈 `++top`，出栈 `top--`。',
      'n 个元素依次入栈的合法出栈序列数为卡特兰数 `C(2n,n)/(n+1)`。',
      '表达式求值：中缀转后缀用栈，后缀求值用操作数栈。'
    ],
    pitfalls: ['把栈的「后进先出」与队列的「先进先出」混淆。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch3', page: 45, confidence: 'approx' }],
    related: ['k-ds-006'], estMin: 12
  },
  {
    id: 'k-ds-006', subject: 'ds', chapterId: 'ds-ch3', gid: 'DS-3.2-01',
    title: '队列与循环队列', difficulty: 2, tags: ['队列', 'FIFO'],
    summary: '先进先出的线性结构，队尾入队、队头出队；循环队列用取模复用空间。',
    points: [
      '循环队列判满常用「牺牲一个单元」：`(rear+1)%M == front`。',
      '队中元素个数 = `(rear - front + M) % M`。',
      '入队 `rear=(rear+1)%M`，出队 `front=(front+1)%M`。'
    ],
    pitfalls: ['判满条件写成 `rear == front`，与判空冲突。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch3', page: 56, confidence: 'approx' }],
    related: ['k-ds-005'], estMin: 12
  },
  {
    id: 'k-ds-007', subject: 'ds', chapterId: 'ds-ch4', gid: 'DS-4.1-01',
    title: 'KMP 模式匹配与 next 数组', difficulty: 3, tags: ['串', 'KMP'],
    summary: '利用模式串自身的最长相等前后缀，失配时只回溯模式串指针，主串不回退。',
    points: [
      '`next[j]` 表示 `P[1..j-1]` 的最长相等前后缀长度（或按 0 起始约定）。',
      '失配时 `j = next[j]`，主串指针 i 不移动，时间 `O(n+m)`。',
      'next 数组由模式串自匹配递推，`next[1]=0`。'
    ],
    pitfalls: ['把 next 与 nextval 混用，导致失配后多比较一次。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch4', page: 72, confidence: 'approx' }],
    related: ['k-ds-001'], estMin: 18
  },
  {
    id: 'k-ds-008', subject: 'ds', chapterId: 'ds-ch5', gid: 'DS-5.1-01',
    title: '二叉树的性质与存储', difficulty: 1, tags: ['二叉树', '性质'],
    summary: '每个结点至多两个子树；第 i 层至多 2^(i-1) 个结点，深度 h 的树至多 2^h-1 个结点。',
    points: [
      '`n0 = n2 + 1`：叶结点数等于度为 2 的结点数加 1。',
      '完全二叉树按层序编号，结点 i 的左孩子 2i、右孩子 2i+1、父结点 ⌊i/2⌋。',
      'n 个结点的完全二叉树深度为 `⌊log₂n⌋ + 1`。'
    ],
    pitfalls: ['把满二叉树性质套用到一般二叉树，n0 与 n2 关系仍成立但层结点数不成立。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch5', page: 88, confidence: 'approx' }],
    related: ['k-ds-009'], estMin: 12
  },
  {
    id: 'k-ds-009', subject: 'ds', chapterId: 'ds-ch5', gid: 'DS-5.1-02',
    title: '二叉树的四种遍历', difficulty: 2, tags: ['遍历', '递归'],
    summary: '先序、中序、后序按根的位置区分，层序用队列逐层访问。',
    points: [
      '先序「根左右」、中序「左根右」、后序「左右根」，递归实现时间 `O(n)`。',
      '中序 + 先序（或后序）可唯一确定二叉树；先序 + 后序不能。',
      '非递归中序用栈：一路向左入栈，弹出访问后转向右子树。'
    ],
    pitfalls: ['以为先序与后序能唯一还原树形。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch5', page: 100, confidence: 'approx' }],
    related: ['k-ds-008', 'k-ds-010'], estMin: 14
  },
  {
    id: 'k-ds-010', subject: 'ds', chapterId: 'ds-ch5', gid: 'DS-5.2-01',
    title: '线索二叉树', difficulty: 2, tags: ['线索', '遍历'],
    summary: '用空指针域存放前驱后继线索，使遍历不需要栈，空间仍为 O(n)。',
    points: [
      '左空指针指向前驱，右空指针指向后继，用 ltag/rtag 区分指针与线索。',
      '中序线索化后找后继：有右孩子则右下最左，否则右线索即后继。',
      '线索化本身是一次中序遍历，时间 `O(n)`。'
    ],
    pitfalls: ['把线索指针当作孩子指针使用。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch5', page: 110, confidence: 'approx' }],
    related: ['k-ds-009'], estMin: 12
  },
  {
    id: 'k-ds-011', subject: 'ds', chapterId: 'ds-ch5', gid: 'DS-5.3-01',
    title: '哈夫曼树与哈夫曼编码', difficulty: 2, tags: ['哈夫曼', '编码'],
    summary: '每次取权值最小的两棵树合并，构造带权路径长度最小的二叉树，得到前缀编码。',
    points: [
      'WPL = Σ 权值 × 路径长度，哈夫曼树 WPL 最小。',
      'n 个叶子的哈夫曼树共 2n-1 个结点，没有度为 1 的结点。',
      '编码不唯一（左右子树可交换），但长度最优且无前缀冲突。'
    ],
    pitfalls: ['把哈夫曼编码当成唯一确定，实际同权值可有多种树形。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch5', page: 118, confidence: 'approx' }],
    related: ['k-ds-008'], estMin: 14
  },
  {
    id: 'k-ds-012', subject: 'ds', chapterId: 'ds-ch6', gid: 'DS-6.1-01',
    title: '图的存储结构', difficulty: 1, tags: ['图', '邻接表'],
    summary: '邻接矩阵适合稠密图，邻接表适合稀疏图；无向图边数在两种结构中各出现两次。',
    points: [
      '邻接矩阵空间 `O(n²)`，判断两点相邻 `O(1)`；无向图矩阵对称。',
      '邻接表空间 `O(n+e)`，求某点全部邻接点高效，判断相邻需遍历链表。',
      '有向图邻接表出度为该行链表长度，入度需另建逆邻接表。'
    ],
    pitfalls: ['无向图邻接表边结点数是 2e，按 e 计算会错。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch6', page: 155, confidence: 'approx' }],
    related: ['k-ds-013'], estMin: 12
  },
  {
    id: 'k-ds-013', subject: 'ds', chapterId: 'ds-ch6', gid: 'DS-6.1-02',
    title: '图的遍历：DFS 与 BFS', difficulty: 2, tags: ['DFS', 'BFS'],
    summary: 'DFS 沿路径深入后回溯，BFS 按层扩展；两者都需访问标记，时间均为 O(n+e)。',
    points: [
      '邻接矩阵存储时 DFS/BFS 均为 `O(n²)`；邻接表为 `O(n+e)`。',
      'BFS 可求无权图最短路径（边数最少）。',
      'DFS 用栈（递归栈），BFS 用队列；非连通图需对每个未访问点再发起一次。'
    ],
    pitfalls: ['在邻接矩阵上仍按 O(n+e) 计算复杂度。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch6', page: 160, confidence: 'approx' }],
    related: ['k-ds-012', 'k-ds-014'], estMin: 12
  },
  {
    id: 'k-ds-014', subject: 'ds', chapterId: 'ds-ch6', gid: 'DS-6.2-01',
    title: '最小生成树：Prim 与 Kruskal', difficulty: 3, tags: ['生成树', '贪心'],
    summary: '在连通带权图中选 n-1 条边使总权最小。Prim 按点扩展，Kruskal 按边排序加并查集。',
    points: [
      'Prim 时间 `O(n²)`（邻接矩阵）或 `O(e log n)`（堆优化），适合稠密图。',
      'Kruskal 时间 `O(e log e)`，适合稀疏图，用并查集判环。',
      '两者都贪心，均能得最小生成树；权值互异时结果唯一。'
    ],
    pitfalls: ['认为 Prim 与 Kruskal 一定得到同一棵树（权值相等时可能不同）。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch6', page: 170, confidence: 'approx' }],
    related: ['k-ds-013', 'k-ds-015'], estMin: 16
  },
  {
    id: 'k-ds-015', subject: 'ds', chapterId: 'ds-ch6', gid: 'DS-6.2-02',
    title: '最短路径：Dijkstra 与 Floyd', difficulty: 3, tags: ['最短路径', 'Dijkstra'],
    summary: 'Dijkstra 单源贪心扩展，Floyd 动态规划求任意两点；前者不支持负权边。',
    points: [
      'Dijkstra 每轮选未确定点中 dist 最小者，松弛其邻边，`O(n²)`。',
      'Floyd 三重循环，`d[i][j] = min(d[i][j], d[i][k]+d[k][j])`，`O(n³)`。',
      '负权边用 Bellman-Ford；Dijkstra 遇负权会失效。'
    ],
    pitfalls: ['在有负权边的图上仍用 Dijkstra。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch6', page: 178, confidence: 'approx' }],
    related: ['k-ds-014', 'k-ds-016'], estMin: 16
  },
  {
    id: 'k-ds-016', subject: 'ds', chapterId: 'ds-ch6', gid: 'DS-6.3-01',
    title: '拓扑排序与关键路径', difficulty: 3, tags: ['AOV', 'AOE', '关键路径'],
    summary: 'AOV 网按入度为 0 依次输出得到拓扑序；AOE 网用最早/最迟开始时间求关键路径。',
    points: [
      '拓扑排序用入度表 + 栈/队列，时间 `O(n+e)`；有环则输出不足 n 个。',
      '关键路径是源点到汇点最长路径，关键活动 `e(i)=l(i)`。',
      '缩短非关键活动不改变工期；关键活动缩短可能产生新的关键路径。'
    ],
    pitfalls: ['把「最长路径」与「最短路径」算法混用。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch6', page: 185, confidence: 'approx' }],
    related: ['k-ds-015'], estMin: 18
  },
  {
    id: 'k-ds-017', subject: 'ds', chapterId: 'ds-ch7', gid: 'DS-7.1-01',
    title: '折半查找与判定树', difficulty: 2, tags: ['查找', '折半'],
    summary: '有序顺序表上每次取中点比较，查找成功最多 ⌈log₂(n+1)⌉ 次。',
    points: [
      '仅适用于顺序存储的有序表，链表无法随机访问。',
      '判定树是平衡二叉树，ASL 成功 = (Σ 层号 × 该层结点数)/n。',
      '时间 `O(log n)`，插入删除需保持有序，代价高。'
    ],
    pitfalls: ['在无序表或链表上使用折半查找。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch7', page: 205, confidence: 'approx' }],
    related: ['k-ds-018'], estMin: 12
  },
  {
    id: 'k-ds-018', subject: 'ds', chapterId: 'ds-ch7', gid: 'DS-7.2-01',
    title: '二叉排序树与平衡二叉树', difficulty: 3, tags: ['BST', 'AVL', '旋转'],
    summary: 'BST 中序有序，查找与插入沿一条路径；AVL 用旋转把平衡因子限制在 -1..1。',
    points: [
      'BST 查找平均 `O(log n)`，退化为单支树时 `O(n)`。',
      'AVL 失衡分 LL/RR/LR/RL 四种，分别单旋或双旋恢复。',
      '插入后沿路径回溯更新高度，找到第一个失衡点调整即可。'
    ],
    pitfalls: ['LR 型只做一次左旋，未先对左孩子右旋。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch7', page: 215, confidence: 'approx' }],
    related: ['k-ds-017', 'k-ds-019'], estMin: 18
  },
  {
    id: 'k-ds-019', subject: 'ds', chapterId: 'ds-ch7', gid: 'DS-7.2-02',
    title: '散列表与冲突处理', difficulty: 2, tags: ['散列', '冲突'],
    summary: '用散列函数把关键字映射到地址，冲突用开放定址或链地址处理。',
    points: [
      '装填因子 α = n/m，α 越大冲突越多，ASL 上升。',
      '线性探测会产生「堆积」，查找失败需探测到空位。',
      '链地址法删除方便，ASL 与 α 相关，适合冲突较多场景。'
    ],
    pitfalls: ['删除开放定址表中的元素直接置空，导致后续查找断链（应打删除标记）。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch7', page: 228, confidence: 'approx' }],
    related: ['k-ds-017'], estMin: 14
  },
  {
    id: 'k-ds-020', subject: 'ds', chapterId: 'ds-ch8', gid: 'DS-8.1-01',
    title: '插入排序与希尔排序', difficulty: 1, tags: ['排序', '插入'],
    summary: '直接插入每次把当前元素插入前面有序区；希尔排序按增量分组做插入排序。',
    points: [
      '直接插入最好 `O(n)`（已有序），最坏与平均 `O(n²)`，稳定。',
      '希尔排序时间约 `O(n^1.3)`，最坏 `O(n²)`，不稳定，增量最后必须为 1。',
      '两者都适合小规模或基本有序数据。'
    ],
    pitfalls: ['把希尔排序当成稳定排序。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch8', page: 235, confidence: 'approx' }],
    related: ['k-ds-021'], estMin: 12
  },
  {
    id: 'k-ds-021', subject: 'ds', chapterId: 'ds-ch8', gid: 'DS-8.1-02',
    title: '快速排序与划分', difficulty: 3, tags: ['快排', '划分'],
    summary: '选枢轴划分成两段递归排序，平均 O(n log n)，最坏 O(n²)，不稳定。',
    points: [
      '一趟划分把枢轴放到最终位置，左边不大于它、右边不小于它。',
      '递归深度平均 `O(log n)`，最坏 `O(n)`（有序且取端点为枢轴）。',
      '优化：三数取中、小区间插入排序、尾递归消除。'
    ],
    pitfalls: ['认为快排稳定，或认为其最坏复杂度是 O(n log n)。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch8', page: 241, confidence: 'approx' }],
    related: ['k-ds-020', 'k-ds-022'], estMin: 16
  },
  {
    id: 'k-ds-022', subject: 'ds', chapterId: 'ds-ch8', gid: 'DS-8.2-01',
    title: '堆排序与堆的调整', difficulty: 3, tags: ['堆', '选择排序'],
    summary: '用大根堆反复取堆顶，建堆 O(n)、每次调整 O(log n)，总体 O(n log n)，不稳定。',
    points: [
      '结点 i 的孩子为 2i、2i+1（从 1 编号），从 ⌊n/2⌋ 开始向下调整建堆。',
      '排序时堆顶与末尾交换，堆大小减一后向下调整。',
      '建堆时间 `O(n)`，不是 `O(n log n)`。'
    ],
    pitfalls: ['把建堆复杂度算成 O(n log n)。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch8', page: 248, confidence: 'approx' }],
    related: ['k-ds-021', 'k-ds-023'], estMin: 16
  },
  {
    id: 'k-ds-023', subject: 'ds', chapterId: 'ds-ch8', gid: 'DS-8.2-02',
    title: '归并排序与基数排序', difficulty: 2, tags: ['归并', '基数'],
    summary: '归并两两合并有序段，稳定 O(n log n)；基数排序按位分配收集，稳定线性。',
    points: [
      '归并排序需 `O(n)` 辅助空间，适合链表与外部排序。',
      '基数排序时间 `O(d(n+r))`，d 为位数、r 为基数，稳定。',
      '基数排序不是比较排序，下界 O(n log n) 不适用。'
    ],
    pitfalls: ['把基数排序当作比较类排序。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch8', page: 255, confidence: 'approx' }],
    related: ['k-ds-022', 'k-ds-024'], estMin: 14
  },
  {
    id: 'k-ds-024', subject: 'ds', chapterId: 'ds-ch8', gid: 'DS-8.3-01',
    title: '外部排序与多路归并', difficulty: 3, tags: ['外部排序', '归并'],
    summary: '数据大于内存时先内排成顺串，再多路归并；归并趟数 = ⌈log_k(m)⌉。',
    points: [
      'k 路归并需 k 个输入缓冲 + 1 个输出缓冲。',
      '增大 k 减少趟数但增加比较开销，可用败者树优化。',
      '置换-选择排序可生成长度大于内存的初始顺串。'
    ],
    pitfalls: ['忽略 I/O 次数才是外部排序的主要代价。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch8', page: 262, confidence: 'approx' }],
    related: ['k-ds-023'], estMin: 16
  },
  {
    id: 'k-ds-025', subject: 'ds', chapterId: 'ds-ch1', gid: 'DS-1.2-01',
    title: '递归与主定理估算', difficulty: 3, tags: ['递归', '复杂度'],
    summary: '递归算法的时间由递归式描述，可用展开、代入或主定理估算阶。',
    points: [
      '`T(n)=2T(n/2)+O(n)` → `O(n log n)`（归并排序）。',
      '`T(n)=T(n-1)+O(1)` → `O(n)`（线性递归）。',
      '递归空间 = 栈深度 × 每层局部空间。'
    ],
    pitfalls: ['把递归调用次数直接当作时间复杂度，忽略每层工作量。'],
    bookRefs: [{ bookId: 'book-ds-yan', chapterId: 'ds-ch1', page: 12, confidence: 'approx' }],
    related: ['k-ds-001', 'k-ds-023'], estMin: 14
  }
]
