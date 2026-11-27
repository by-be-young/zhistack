const P = 'paper-2012-408'
const Y = 2012
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2012-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2012 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2012',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2012_408 = [
  base(1, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "求整数 \nn(n≥0)\n 阶乘的算法如下，其时间复杂度是（ ）。\n\n`int fact(int n) {\n if (n <= 1) return 1;\n return n * fact(n - 1);\n}\n`",
    options: opt(["O(log2n))", "O(n)", "O(nlog2n))", "O(n2)"]),
    answer: ["B"],
    explain: "本算法是一个递归运算，即算法中出现了调用自身的情形。递归的边界条件是\n≤1\n，每调用一次 fact()，传入该层 fact() 的参数值减 1。采用递归式来表示时间复杂度有\nTn={O(1),n≤1 T(n−1)+1,n>1\n则\nT(n)=T(n−1)+1=T(n−2)+2=⋯=T(1)+n−1=O(n)\n，故时间复杂度为\nO(n)\n。",
    tags: ["复杂度分析"],
    noteId: "data_structure-basic-algorithm"
  }),
  base(2, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知操作符包括 `+`、`−`、`∗`、`/`、`(` 和 `)`。将中缀表达式 `a+b−a∗((c+d)/e−f)+g` 转换为等价的后缀表达式 `ab+acd+e/f−∗−g+` 时，用栈来存放暂时还不能确定运算次序的操作符，若栈初始为空，则转换过程中同时保存在栈中的操作符的最大个数是（ ）。",
    options: opt(["5", "7", "8", "11"]),
    answer: ["A"],
    explain: "表达式求值是栈的典型应用。中缀表达式不仅依赖千运算符的优先级，而且要处理括号。后缀表达式的运算符在表达式的后面且没有括号，其形式已经包含了运算符的优先级。所以从 中序转后序 需要用运算符进行处理，使其包含运算符优先级的信息，从而转换为后缀表达式的形式。",
    tags: ["中缀转后缀"],
    noteId: "data_structure-array-application"
  }),
  base(3, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若一棵二叉树的前序遍历序列为 a, e, b, d, c，后序遍历序列为 b, c, d, e, a，则根结点的孩子结点（ ）。",
    options: opt(["只有 e", "有 e、b", "有 e、c", "无法确定"]),
    answer: ["A"],
    explain: "本题考察 双序列组合重建二叉树，前序序列和后序序列不能唯一确定一棵二叉树，但可以确定二叉树中结点的祖先关系：当两个结点的前序序列为 XY 与后序序列为 YX 时，则 X 为 Y 的祖先。考虑前序序列 a,e,b,d,c、后序序列 b,c,d,e,a 且，可知 a 为根结点，e 为 a 的孩子结点。此外，a 的孩子结点的前序序列 e,b,d,c、后序序列 b,c,d,e，可知 e 是 bcd 的祖先，故根结点的孩子结点只有 e。故选 A。",
    tags: ["二叉树遍历"],
    noteId: "data_structure-tree-btree"
  }),
  base(4, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若平衡二叉树的高度为 6 ，且所有非叶结点的平衡因子均为 1 ，则该平衡二叉树的结点总数为（ ）。",
    options: opt(["10", "20", "32", "33"]),
    answer: ["B"],
    explain: "所有非叶结点的平衡因子均为 1，即平衡二叉树满足平衡的最少结点情况，如下图所示。\n（图：见原题）\n对于高度为 N、左右子树的高度分别为 N-1 和 N-2、所有非叶结点的平衡因子均为 1 的平衡二叉树，总结点数的公式为：\nCN=CN−1+CN−2+1\n,\nC1=1\n,\nC2=2\n,\nC3=2+1+1=4\n，可推出\nC6=20\n。",
    tags: ["平衡二叉树"],
    noteId: "data_structure-tree-btree"
  }),
  base(5, 'ds', 'k-ds-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对有 n 个结点、e 条边且使用邻接表存储的有向图进行广度优先遍历，其算法时间复杂度是（）。",
    options: opt(["O(n)", "O(e)", "O(n+e)", "O(n×e)"]),
    answer: ["C"],
    explain: "广度优先遍历 需要借助队列实现。邻接表的结构包括：顶点表；边表（有向图为出边表）。当采用邻接表存储方式时，在对图进行广度优先遍历时每个顶点均需入队一次（顶点表遍历），故时间复杂度为\nO(n)\n，在搜索所有顶点的邻接点的过程中，每条边至少访问一次（出边表遍历），故时间复杂度为\nO(e)\n，算法总的时间复杂度为\nO(n+e)\n。",
    tags: ["图的遍历"],
    noteId: "data_structure-graph-operation"
  }),
  base(6, 'ds', 'k-ds-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若用邻接矩阵存储有向图，矩阵中主对角线以下的元素均为零，则关于该图拓扑序列的结论是（ ）。",
    options: opt(["存在，且唯一", "存在，且不唯一", "存在，可能不唯一", "无法确定是否存在"]),
    answer: ["C"],
    explain: "对角线以下元素均为零，表明只有顶点\ni\n到顶点\nj\n(\ni<j\n) 可能有边，而顶点\nj\n到顶点\ni\n一定没有边，即有向图是一个无环图，因此一定存在拓扑序列。对于拓扑序列是否唯一，试举一例：设有向图的邻接矩阵\n0 0 0100100\n则存在两个拓扑序列，因此该图存在可能不唯一的拓扑序列。\n\n结论：对于任一有向图，如果它的邻接矩阵中对角线以下（或以上）的元素均为零，则存在拓扑序列（可能不唯一）。反正，若图存在拓扑序列，却不一定能满足邻接矩阵中主对角线以下的元素均为零，但是可以通过适当地调整结点编号，使其邻接矩阵满足前述性质。",
    tags: ["拓扑排序"],
    noteId: "data_structure-basic-alg_design"
  }),
  base(7, 'ds', 'k-ds-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对如下有向图带权图，若采用迪杰斯特拉（Dijkstra）算法求从源点 a 到其他各顶点的最短路径，则得到的第一条最短路径的目标顶点是 b，第二条最短路径的目标顶点是 c，后续得到的其余最短路径的目标顶点依次是（ ）。",
    options: opt(["d, e, f", "e, d, f", "f, d, e", "f, e, d"]),
    answer: ["C"],
    explain: "从 a 到各顶点的最短路径的求解过程：\n\n顶点 | 第 1 趟 | 第 2 趟 | 第 3 趟 | 第 4 趟 | 第 5 趟\nb | (a,b)2 | | | | \nc | (a,c)5 | (a,b,c)3 | | | \nd | ∞ | (a,b,d)5 | (a,b,d)5 | (a,b,d)5 | \ne | ∞ | ∞ | (a,b,c,f)4 | | \nf | ∞ | ∞ | (a,b,c,e)7 | (a,b,c,e)7 | (a,b,d,e)6\n集合 S | {a,b} | {a,b,c} | {a,b,c,f} | {a,b,c,f,d} | {a,b,c,f,d,e}\n\n后续目标顶点依次为 f, d, e。\n\n【排除法】对于 A，若下一个顶点为 d，路径 a,b,d 的长度5，而 a,b,c,f 的长度仅为4，显然错误。同理可以排除B。将 f 加入集合 S 后，采用上述的方法也可以排除 D。",
    tags: ["最短路径"],
    noteId: "data_structure-graph-operation", figures: [{ src: A + "study_methods-408quiz-2012/d2.svg", alt: '题图' }]
  }),
  base(8, 'ds', 'k-ds-014', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于最小生成树的叙述中，正确的是（）。\n\nⅠ．最小生成树的代价唯一\n\nⅡ．所有权值最小的边一定会出现在所有的最小生成树中\n\nⅢ．使用普里姆（Prim）算法从不同顶点开始得到的最小生成树一定相同\n\nⅣ．使用普里姆算法和克鲁斯卡尔（Kruskal）算法得到的最小生成树总不相同",
    options: opt(["仅Ⅰ", "仅Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅳ"]),
    answer: ["A"],
    explain: "对于 I，最小生成树 的树形可能不唯一（这是因为可能存在权值相同的边），但是代价一定是唯一的，I 正确。对于Ⅱ，如果权值最小的边有多条并且构成环状，则总有权值最小的边将不出现在某棵最小生成树中，Ⅱ错误。对于Ⅲ，设 N 个结点构成环，N-1 条边权值相等，则从不同的顶点开始普里姆算法会得到 N-1 中不同的最小生成树，Ⅱ 错误。对于 V，当最小生成树唯一时（各边的权值不同），Prim 算法和 Kruskal 算法得到的最小生成树相同，IV 错误。",
    tags: ["最小生成树"],
    noteId: "data_structure-graph-operation"
  }),
  base(9, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知一棵 3 阶 B 树，如下图所示。删除关键字 78 得到一棵新 B 树，其最右叶结点中的关键字是（）。",
    options: opt(["60", "60, 62", "62, 65", "65"]),
    answer: ["D"],
    explain: "本题考察 B 树的 删除 操作。对于上图所示的 3 阶 B 树，被删关键字 78 所在结点在删除前的关键字个数 = 1 = ⌈3/2⌉-1，且其左兄弟结点的关键字个数 = 2 ≥ ⌈3/2⌉，属于“兄弟够借”的情况，则需把该结点的左兄弟结点中最大的关键字上移到双亲结点中，同时把双亲结点中大于上移关键字的关键字下移到要删除关键字的结点中，这样就达到了新的平衡，如下图所示。\n（图：见原题）",
    tags: ["B树"],
    noteId: "data_structure-search-tree", figures: [{ src: A + "study_methods-408quiz-2012/d3.svg", alt: '题图' }]
  }),
  base(10, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在内部排序过程中，对尚未确定最终位置的所有元素进行一遍处理称为一趟排序。下列排序方法中，每一趟排序结束都至少能够确定一个元素最终位置的方法是（ ）。\n\nⅠ．简单选择排序\n\nⅡ．希尔排序\n\nⅢ．快速排序\n\nⅣ．堆排序\n\nⅤ．二路归并排序",
    options: opt(["仅Ⅰ、Ⅲ、Ⅳ", "仅Ⅰ、Ⅲ、Ⅴ", "仅Ⅱ、Ⅲ、Ⅳ", "仅Ⅲ、Ⅳ、Ⅴ"]),
    answer: ["A"],
    explain: "本题考察不同 内部排序 算法的细节：\n\n对于 I，简单选择排序每次选择未排序列中的最小元素放入其最终位置。\n\n对于 II，希尔排序每次是对划分的子表进行排序，得到局部有序的结果，所以不能保证每一趟排序结束都能确定一个元素的最终位置。\n\n对于 III，快速排序每一趟排序结束后都将枢轴元素放到最终位置。\n\n对于 IV，堆排序属于选择排序，每次都将大根堆的根结点与表尾结点交换，确定其最终位置。\n\n对于 V，二路归并排序每趟对子表进行两两归并从而得到若干个局部有序的结果，但无法确定最终位置。\n\nI、III、IV 正确，本题选择 A。",
    tags: ["排序算法"],
    noteId: "data_structure-sort-internal"
  }),
  base(11, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对同一待排序序列分别进行折半插入排序和直接插入排序，两者之间可能的不同之处是（ ）。",
    options: opt(["排序的总趟数", "元素的移动次数", "使用辅助空间的数量", "元素之间的比较次数"]),
    answer: ["D"],
    explain: "本题考察 插入排序，折半插入排序与直接插入排序是将待插入元素插入前面的有序子表，区别是：确定当前记录在前面有序子表中的位置时，直接插入排序是采用顺序查找法，而折半插入排序是采用折半查找法。排序的总趟数取决于元素个数\nn\n，两者都是\nn−1\n趟。元素的移动次数都取决于初试序列，两者相同。使用辅助空间的数量也都是 O(1)。折半插入排序的比较次数与序列初态无关，为\nO(nlog2n)\n：直接插入排序的比较次数与序列初态有关，为\nO(n)∼O(n2)\n。",
    tags: ["排序算法"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定基准程序 A 在某计算机上的运行时间为 100 秒，其中 90 秒为 CPU 时间，其余为 I/O 时间。若 CPU 速度提高 50%，I/O 速度不变，则运行基准程序 A 所耗费的时间是（ ）。",
    options: opt(["55s", "60s", "65s", "70s"]),
    answer: ["D"],
    explain: "程序 A 的运行时间为 100s，除去 CPU 时间 90s，剩余 10s 为 I/O 时间。CPU 提速后运行基准程序 A 所耗费的时间是 T = 90/1.5 + 10 = 70s。\n\n【误区】CPU速度提高50%，则CPU时间减少一半，而误选A。",
    tags: ["计算机体系结构"],
    noteId: "constitution_principle-overview-structure"
  }),
  base(13, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定编译器规定 int 和 short 型长度分别为 32 位和 16 位，执行下列 C 语言语句：\n\n`unsigned short x=65530;\nunsigned int y=x;\n`\n\n得到 y 的机器数为（ ）。",
    options: opt(["0000 7FFAH", "0000 FFFAH", "FFFF 7FFAH", "FFFF FFFAH"]),
    answer: ["B"],
    explain: "将一个 16 位 unsigned short 转换成 32 位形式的 unsigned int，因为都是无符号数，新表示形式的高位用 0 填充。16 位无符号整数所能表示的最大值为 65 5 35，其十六进制表示为 FFFFH，故 x 的十六进制表示为 FFFFH - 5H = FFFAH，所以 y 的十六进制表示为 0000 FFFAH。",
    tags: ["无符号数", "类型转换"],
    noteId: "constitution_principle-representation-integer"
  }),
  base(14, 'co', 'k-co-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "float 类型（即 IEEE754 单精度浮点数格式）能表示的最大正整数是（ ）。",
    options: opt(["2126−2103", "2127−2104", "2127−2103", "2128−2104"]),
    answer: ["D"],
    explain: "IEEE754 单精度浮点数 是尾数用采取隐藏位策略的原码表示，且阶码用移码（偏置值为\n127\n）表示的浮点数。规格化的短浮点数的真值为：\n(−1)S×1.m×2E−127\n，\nS\n为符号位，阶码\nE\n的取值为\n1∼254\n（8 位表示），尾数\nm\n为\n23\n位，共\n32\n位；故 float 类型能表示的最大整数是\n1.111⋯1×2254−127=2127×(2−2−23)=2128−2104\n，故选 D。",
    tags: ["IEEE浮点数表示"],
    noteId: "constitution_principle-representation-floats"
  }),
  base(15, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机存储器按字节编址，采用小端方式存放数据。假定编译器规定 int 型和 short 型长度分别为 32 位和 16 位，并且数据按边界对齐存储。某 C 语言程序段如下：\n\n`struct {\n int a;\n char b;\n short c;\n} record;\n\nrecord.a=273;\n`\n\n若 record 变量的首地址为 0xC008，则地址 0xC008 中内容及 record.c 的地址分别为（ ）。",
    options: opt(["0x00、0xC00D", "0x00、0xC00E", "0x11、0xC00D", "0x11、0xC00E"]),
    answer: ["D"],
    explain: "尽管 record 大小为 7 个字节（成员 a 有 4 个字节，成员 b 有 1 个字节，成员 c 有 2 个字节），\n由于数据按边界对齐方式存储，故 record 共占用 8 个字节。record.a 的十六进制\n表示为 0x00000111，由于采用小端方式存放数据，故地址 0xC008 中内容应为低字节 0x11;\nrecord.b 只占 1 个字节，后面的一个字节留空；record.c 占 2 个字节，故其地址为 0xC00E。各字\n节的存储分配如下图所示。\n\n地址 | 0xC008 | 0xC009 | 0xC00A | 0xC00B\n内容 | record.a.(0x11) | record.a.(0x01) | record.a.(0x00) | record.a.(0x00)\n地址 | 0xC00C | 0xC00D | 0xC00E | 0xC00F\n内容 | record.b | - | record.c | record.c",
    tags: ["数据对齐"],
    noteId: "constitution_principle-instruction-alignment"
  }),
  base(16, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于闪存（Flash Memory）的叙述中，错误的是（ ）。",
    options: opt(["信息可读可写，并且读、写速度一样快", "存储元由 MOS 管组成，是一种半导体存储器", "掉电后信息不丢失，是一种非易失性存储器", "采用随机访问方式，可替代计算机外部存储器"]),
    answer: ["A"],
    explain: "闪存 是 EEPROM 的进一步发展，可读可写，用 MOS 管的浮栅上有无电荷来存储信息。闪存依然是 ROM 的一种，写入时必须先擦除原有数据，故写的速度比读的速度要慢不少（硬件常识）。闪存是一种非易失性存储器，它采用随机访问方式。现在常见的 SSD 固态硬盘，即由Flash 芯片组成。",
    tags: [],
    noteId: ""
  }),
  base(17, 'co', 'k-co-006', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设某计算机按字编址，Cache 有 4 个行，Cache 和主存之间交换的块大小为 1 个字。若 Cache 的内容初始为空，采用 2 路组相联映射方式和 LRU 替换策略。访问的主存地址依次为 0,4,8,2,0,6,8,6,4,8 时，命中 Cache 的次数是（ ）。",
    options: opt(["1", "2", "3", "4"]),
    answer: ["C"],
    explain: "地址映射采用 2 路组相联，则主存地址为 0~1、4~5、8~9 可映射到第 0 组 Cache 中，主存地址为 2~3、6~7 可映射到第 1 组 Cache 中。Cache 置换过程如下表所示。\n\n | 走向 | 0 | 4 | 8 | 2 | 0 | 6 | 8 | 6 | 4 | 8\n第0组 | 块0 | | 0 | 4 | 4 | 8 | 8 | 0 | 0 | 8 | 4\n | 块1 | 0 | 4 | 8 | 8 | 0 | 0 | 8* | 8 | 4 | 8*\n第1组 | 块2 | | | | | | 2 | 2 | 2 | 2 | 2\n | 块3 | | | | 2 | 2 | 6 | 6 | 6* | 6 | 6\n\n注：“_” 表示当前访问块，“*” 表示本次访问命中。\n\n注意：在不同的《计算机组成原理》教材中，关于组相联映射的介绍并不相同。通常采用唐朔飞教材中的方式，但本题中采用的是蒋本珊教材中的方式。可以推断两次命题的老师应该不是同一位老师，这也给考生答题带来了困扰。",
    tags: ["cache映射方式"],
    noteId: "constitution_principle-storage-cache"
  }),
  base(18, 'co', 'k-co-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机的控制器采用微程序控制方式，微指令中的操作控制字段采用字段直接编码法，共有 33 个微命令，构成 5 个互斥类，分别包含 7、3、12、5 和 6 个微命令，则操作控制字段至少有（ ）。",
    options: opt(["5 位", "6 位", "15 位", "33 位"]),
    answer: ["C"],
    explain: "字段直接编码方式 将微命令字段分成若干个小字段，互斥性微命令组合在同一字段中，相容性微命令分在不同字段中，每个字段还要留出一个状态，表示本字段不发出任何微命令。5 个互斥类分别包含 7、3、12、5 和 6 个微命令，需要 3、2、4、3 和 3 位，共 15 位。",
    tags: ["控制器种类"],
    noteId: "constitution_principle-cpu-controller"
  }),
  base(19, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某同步总线的时钟频率为 100MHz，宽度为 32 位，地址/数据线复用，每传输一个地址或数据占用一个时钟周期。若该总线支持突发（猝发）传输方式，则一次 “主存写” 总线事务传输 128 位数据所需要的时间至少是（ ）。",
    options: opt(["20ns", "40ns", "50ns", "80ns"]),
    answer: ["C"],
    explain: "总线频率为 100 MHz，则时钟周期为 10ns。总线位宽与存储字长都是 32 位，故每一个时钟周期可传送一个 32 位存储字。猝发式发送 可以连续传送地址连续的数据，故总的传送时间为：传送地址 10ns，传送 128 位数据 40ns，共需 50ns。",
    tags: ["总线事务"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(20, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于 USB 总线特性的描述中，错误的是（ ）。",
    options: opt(["可实现外设的即插即用和热插拔", "可通过级联方式连接多台外设", "是一种通信总线，可连接不同外设", "同时可传输 2 位数据，数据传输率高"]),
    answer: ["D"],
    explain: "USB（通用串行总线）的特点有：① 即插即用；② 热插拔；③ 有很强的连接能力，采用菊花链形式将众多外设连接起来；④ 有很好的可扩充性，一个 USB 控制器可扩充高达 127 个外部USB 设备；⑤ 高速传输，速度可达 480Mbps。所以 A、B、C 选项都符合 USB 总线的特点。对于 D, USB 是串行总线，不能同时传输 2 位数据。",
    tags: ["总线类型"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(21, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，在 I/O 总线的数据线上传输的信息包括（ ）。\n\nⅠ. I/O 接口中的命令字\n\nⅡ. I/O 接口中的状态字\n\nⅢ. 中断类型号",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["D"],
    explain: "根据 总线组成，I/O 接口与 CPU 之间的 I/O 总线有数据线、控制线和地址线。控制线和地址线都是单向传输的，从 CPU 传送给 I/O 接口，而 I/O 接口中的命令字、状态字以及中断类型号均是由 I/O 接口发往 CPU 的，故只能通过 I/O 总线的数据线传输。",
    tags: ["总线概念"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(22, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "响应外部中断的过程中，中断隐指令完成的操作，除保护断点外，还包括（ ）。\n\nⅠ. 关中断\n\nⅡ. 保存通用寄存器的内容\n\nⅢ. 形成中断服务程序入口地址并送 PC",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["B"],
    explain: "在响应 中断处理流程 中，中断隐指令完成的操作包括：①关中断；②保护断点；③引出中断服务程序（形成中断服务程序入口地址并送 PC）,所以只有 I、III 正确。Ⅱ 中的保存通用寄存器的内容是在进入中断服务程序后首先进行的操作。",
    tags: ["中断IO", "异常和中断"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(23, 'os', 'k-os-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不可能在用户态发生的事件是（ ）。",
    options: opt(["系统调用", "外部中断", "进程切换", "缺页"]),
    answer: ["C"],
    explain: "本题关键是对 “在用户态 发生”（与上题的 “执行” 区分）的理解。\n\n对于 A，系统调用是操作系统提供给用户程序的接口，系统调用发生在用户态，被调用程序在核心态下执行。\n\n对于 B，外部中断是用户态到核心态的 “门”，也发生在用户态，在核心态完成中断过程。\n\n对于 C，进程切换属于系统调用执行过程中的事件，只能发生在核心态。\n\n对于 D，缺页产生后，在用户态发生缺页中断，然后进入核心态执行缺页中断服务程序。",
    tags: ["用户态和内核态"],
    noteId: "operating_system-concepts-environment"
  }),
  base(24, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "中断处理和子程序调用都需要压栈以保护现场，中断处理一定会保存而子程序调用不需要保存其内容的是（ ）。",
    options: opt(["程序计数器", "程序状态字寄存器", "通用数据寄存器", "通用地址寄存器"]),
    answer: ["B"],
    explain: "子程序调用只需保存程序断点，即该指令的下一条指令的地址；中断调用子程序不仅要保护断点（PC 的内容），而且要保护程序状态字寄存器的内容 PSW。在中断处理中，最重要的两个寄存器是 PC 和 PSWR。",
    tags: ["寄存器类型"],
    noteId: "constitution_principle-cpu-structure"
  }),
  base(25, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于虚拟存储器的叙述中，正确的是（ ）。",
    options: opt(["虚拟存储只能基于连续分配技术", "虚拟存储只能基于非连续分配技术", "虚拟存储容量只受外存容量的限制", "虚拟存储容量只受内存容量的限制"]),
    answer: ["B"],
    explain: "在程序装入时，可以只将程序的一部分装入内存，而将其余部分留在外存，就可以自动程序执行。采用连续分配方式时，会使相当一部分内存空间都处于暂时或 “永久” 的空闲状态，造成内存资源的严重浪费，也无法从逻辑上扩大内存容量，因此虚拟内存的实现只能建立在离散分配的内存管理的基础上。有以下三种实现方式：①请求分页存储管理；②请求分段存储管理；③请求段页式存储管理。虚拟存储器容量既不受外存容量限制，也不受内存容量限制，而是由 CPU 的寻址范围决定的。",
    tags: ["虚拟页式管理"],
    noteId: "operating_system-memory-concepts"
  }),
  base(26, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "用户程序发出磁盘 I/O 请求后，系统的正确处理流程是操作系统的 I/O 子系统通常由四个层次组成，每一层明确定义了与邻近层次的接口。其合理的层次组织排列顺序是（ ）。",
    options: opt(["用户级 I/O 软件、设备无关软件、设备驱动程序、中断处理程序", "用户级 I/O 软件、设备无关软件、中断处理程序、设备驱动程序", "用户级 I/O 软件、设备驱动程序、设备无关软件、中断处理程序", "用户级 I/O 软件、中断处理程序、设备无关软件、设备驱动程序"]),
    answer: ["A"],
    explain: "设备管理软件一般分为 以下层次：用户层、与设备无关的系统调用处理层、设备驱动程序以及中断处理程序。",
    tags: ["IO软件层次"],
    noteId: "operating_system-io_device-devices"
  }),
  base(27, 'os', 'k-os-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设 5 个进程\nP0\n、\nP1\n、\nP2\n、\nP3\n、\nP4\n共享三类资源\nR1\n、\nR2\n、\nR3\n，这些资源总数分别为 18、6、22。T0 时刻的资源分配情况如下表所示，此时存在的一个安全序列是（ ）。",
    options: opt(["P0,P2,P4,P1,P3", "P1,P0,P3,P4,P2", "P2,P1,P0,P3,P4", "P3,P4,P2,P1,P0"]),
    answer: ["D"],
    explain: "首先求得各进程的需求矩阵 Need 与可利用资源矢量 Available：\n（图：见原题）\n比较 Need 和 Available 可以发现，初始时进程\nP1\n与\nP3\n可满足需求，排除 A、C。尝试给\nP1\n分配资源，则\nP1\n完成后 Available 将变为 (6,3,6)，无法满足\nP0\n的需求，排除 B。尝试给\nP3\n分配资源，则\nP3\n完成后 Available 将变为 (4,3,7)，该向量能满足其他所有进程的需求。所以，以\nP3\n开头的所有序列都是 安全序列。",
    tags: ["银行家算法"],
    noteId: "operating_system-process-deadlock", figures: [{ src: A + "study_methods-408quiz-2012/d5.svg", alt: '题图' }]
  }),
  base(28, 'os', 'k-os-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若一个用户进程通过 read 系统调用读取一个磁盘文件中的数据，则下列关于此过程的叙述中，正确的是（ ）。\n\nⅠ. 若该文件的数据不在内存中，则该进程进入睡眠等待状态\n\nⅡ. 请求 read 系统调用会导致 CPU 从用户态切换到核心态\n\nⅢ. read 系统调用的参数应包含文件的名称",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ和Ⅲ"]),
    answer: ["A"],
    explain: "对于 I，当所读文件的数据不在内存时，产生中断（缺页中断），原进程进入阻塞状态，直到所需数据从外存调入内存后，才将该进程唤醒。对于 II，read 系统调用通过陷入将 CPU 从用户态切换到核心态，从而获取操作系统提供的服务。对于Ⅲ，要读一个文件首先要用 open 系统调用打开该文件。open 中的参数包含文件的路径名与文件名，而 read 只需要使用 open 返回的文件描述符，并不使用文件名作为参数。read 要求用户提供三个输入参数：①文件描述符 fd；②buf 缓冲区首址；③传送的字节数 n。read 的功能是试图从 fd 所指示的文件中读入 n 个字节的数据，并将它们送至由指针 buf 所指示的缓冲区中。",
    tags: ["系统调用", "缺页异常"],
    noteId: "operating_system-concepts-environment"
  }),
  base(29, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "一个多道批处理系统中仅有\nP1\n和\nP2\n两个作业，\nP2\n比\nP1\n晚 5ms 到达，它们的计算和 I/O 操作顺序如下：\n\nP1\n：计算 60ms，I/O 80ms，计算 20ms\n\nP2\n：计算 120ms，I/O 40ms，计算 40ms\n\n若不考虑调度和切换时间，则完成两个作业需要的时间最少是（ ）。",
    options: opt(["240ms", "260ms", "340ms", "360ms"]),
    answer: ["B"],
    explain: "由于\nP2\n比\nP1\n晚 5ms 到达，\nP1\n先占用 CPU, 作业运行的甘特图如下所示。\n（图：见原题）",
    tags: ["处理机调度算法"],
    noteId: "operating_system-process-scheduling"
  }),
  base(30, 'os', 'k-os-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若某单处理器多进程系统中有多个就绪态进程，则下列关于处理机调度的叙述中，错误的是（ ）。",
    options: opt(["在进程结束时能进行处理机调度", "创建新进程后能进行处理机调度", "在进程处于临界区时不能进行处理机调度", "在系统调用完成并返回用户态时能进行处理机调度"]),
    answer: ["C"],
    explain: "选项 A、B、D 显然是可以进行 处理机调度 的情况。对于 C，当进程处于临界区时，说明进程正在占用处理机，只要不破坏临界资源的使用规侧，是不会影响处理机调度的。比如，通常访问的临界资源可能是慢速的外设（如打印机），如果在进程访问打印机时，不能进行处理机调度，那么系统的性能将是非常差的。",
    tags: ["进程状态"],
    noteId: "operating_system-process-process_thread"
  }),
  base(31, 'os', 'k-os-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于进程和线程的叙述中，正确的是（ ）。",
    options: opt(["不管系统是否支持线程，进程都是资源分配的基本单位", "线程是资源分配的基本单位，进程是调度的基本单位", "系统级线程和用户级线程的切换都需要内核的支持", "同一进程中的各个线程拥有各自不同的地址空间"]),
    answer: ["A"],
    explain: "在引入 线程 后，进程依然还是资源分配的基本单位，线程是调度的基本单位，同一进程中的各个线程共享进程的地址空间。在用户级线程中，有关线程管理的所有工作都由应用程序完成，无须内核的干预，内核意识不到线程的存在。",
    tags: ["进程和线程"],
    noteId: "operating_system-process-process_thread"
  }),
  base(32, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不能改善磁盘设备 I/O 性能的是（ ）。",
    options: opt(["重排 I/O 请求次序", "在一个磁盘上设置多个分区", "预读和滞后写", "优化文件物理块的分布"]),
    answer: ["B"],
    explain: "对于 A，重排 I/O 请求次序也就是进行 I/O 调度，从而使进程之间公平地共享磁盘访问，减少 I/O 完成所需要的平均等待时间。对于 C，缓冲区结合预读和滞后写技术对于具有重复性及阵发性的 I/O 进程改善磁盘 I/O 性能很有帮助。对于 D，优化文件物理块的分布可以减少寻找时间与延迟时间，从而提高磁盘性能。在一个磁盘上设置多个分区与改善设备/O 性能并无多大联系，相反还会带来处理的复杂和降低利用率。",
    tags: ["磁盘概念"],
    noteId: "operating_system-io_device-disks"
  }),
  base(33, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在 TCP/IP 体系结构中，直接为 ICMP 提供服务的协议是（ ）。",
    options: opt(["PPP", "IP", "UDP", "TCP"]),
    answer: ["B"],
    explain: "ICMP 报文作为数据字段封装在 IP 分组中，因此，IP 协议直接为 ICMP 提供服务。UDP 和 TCP 都是传输层协议，为应用层提供服务。PPP 协议是链路层协议，为网络层提供服务。",
    tags: ["TCP/IP模型", "ICMP"],
    noteId: "computer_network-network-icmp"
  }),
  base(34, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在物理层接口特性中，用于描述完成每种功能的事件发生顺序的是（ ）。",
    options: opt(["机械特性", "功能特性", "过程特性", "电气特性"]),
    answer: ["C"],
    explain: "此题考查 物理层接口特性，过程特性定义各条物理线路的工作过程和时序关系。",
    tags: ["物理层接口特性"],
    noteId: "computer_network-physical-concept"
  }),
  base(35, 'cn', 'k-cn-007', {
    type: 'single', difficulty: 2, score: 2,
    stem: "以太网的 MAC 协议提供的是（ ）。",
    options: opt(["无连接不可靠服务", "无连接可靠服务", "有连接不可靠服务", "有连接可靠服务"]),
    answer: ["A"],
    explain: "考虑到局域网信道质量好，以太网采取了两项重要的措施以使通信更简便：① 采用无连接的工作方式；② 不对发送的数据帧进行编号，也不要求对方发回确认。因此，以太网提供的服务是不可靠的服务，即尽最大努力的交付。差错的纠正由高层完成。",
    tags: ["以太网"],
    noteId: "computer_network-datalink-lan"
  }),
  base(36, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "两台主机之间的数据链路层采用后退 N 帧协议 (GBN) 传输数据，数据传输速率为 16 kbps，单向传播时延为 270 ms，数据帧长度范围是 128~512 字节，接收方总是以与数据帧等长的帧进行确认。为使信道利用率达到最高，帧序号的比特数至少为（ ）。",
    options: opt(["5", "4", "3", "2"]),
    answer: ["B"],
    explain: "本题考察 回退 N 帧 的极限，即求从发送一个帧到接收到这个帧的确认为止的时间内最多可以发送多少数据帧。要尽可能多发帧，应以短的数据帧计算，首先计算出发送一帧的时间：\n128×8/(16×103)=64\nms；发送一帧到收到确认为止的总时间：\n64+270×2+64=668\nms；这段时间总共可以发送\n668/64=10.4\n（帧），发送这么多帧至少需要用\n4\n位比特进行编号。",
    tags: ["ARQ协议", "信道利用率"],
    noteId: "computer_network-datalink-flow_control"
  }),
  base(37, 'cn', 'k-cn-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于 IP 路由器功能的描述中，正确的是（ ）。\n\nI. 运行路由协议，设置路由表\n\nII. 监测到拥塞时，合理丢弃 IP 分组\n\nIII. 对收到的 IP 分组头进行差错校验，确保传输的 IP 分组不丢失\n\nIV. 根据收到的 IP 分组的目的 IP 地址，将其转发到合适的输出线路上",
    options: opt(["仅 III、IV", "仅 I、II、III", "仅 I、II、IV", "I、II、III、IV"]),
    answer: ["C"],
    explain: "I 和 V 显然是 IP 路由器的 功能。对于Ⅱ，当路由器监测到拥塞时，可合理丢弃 IP 分组，并向发出该 IP 分组的源主机发送一个源点抑制的 ICMP 报文。对于 III，路由器对收到的 IP 分组首部进行差错检验，丢弃有差错首部的报文，但不保证 IP 分组不丢失。对于 IV，这表述的也就是路由器的路由功能。",
    tags: ["路由器"],
    noteId: "computer_network-network-dev"
  }),
  base(38, 'cn', 'k-cn-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "ARP 协议的功能是（ ）。",
    options: opt(["根据 IP 地址查询 MAC 地址", "根据 MAC 地址查询 IP 地址", "根据域名查询 IP 地址", "根据 IP 地址查询域名"]),
    answer: ["A"],
    explain: "在实际网络的数据链路层上传送数据时，最终必须使用硬件地址，ARP 协议 是将网络层的 IP 地址解析为数据链路层的 MAC 地址。",
    tags: ["ARP"],
    noteId: "computer_network-network-arp"
  }),
  base(39, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某主机的 IP 地址为 180.80.77.55，子网掩码为 255.255.252.0。若该主机向其所在子网发送广播分组，则目的地址可以是（ ）。",
    options: opt(["180.80.76.0", "180.80.76.255", "180.80.77.255", "180.80.79.255"]),
    answer: ["D"],
    explain: "子网掩码的第 3 个字节为 11111100，可知前 22 位为子网号、后 10 位为主机号。IP 地址的第 3 个字节为 01001101（下画线为子网号的一部分），将主机号（即后 10 位）全置为 1，可以得到广播地址为 180.80.79.255。",
    tags: ["网络号和主机号"],
    noteId: "computer_network-network-ip"
  }),
  base(40, 'cn', 'k-cn-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若用户 1 与用户 2 之间发送和接收电子邮件的过程如下图所示，则图中 ①、②、③ 阶段分别使用的应用层协议可以是",
    options: opt(["SMTP、SMTP、SMTP", "POP3、SMTP、POP3", "POP3、SMTP、SMTP", "SMTP、SMTP、POP3"]),
    answer: ["D"],
    explain: "SMTP 采用 “推” 的通信方式，在用户代理向邮件服务器及邮件服务器之间发送邮件时，SMTP 客户主动将邮件“推”送到 SMTP 服务器。而 POP3 采用 “拉” 的通信方式，当用户读取邮件时，用户代理向邮件服务器发出请求，“拉”取用户邮箱中的邮件。",
    tags: ["电子邮件"],
    noteId: "computer_network-application-mail", figures: [{ src: A + "study_methods-408quiz-2012/d8.svg", alt: '题图' }]
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "设有 6 个有序表 A、B、C、D、E、F，分别含有 10、35、40、50、60 和 200 个数据元素，各表中元素按升序排列。要求通过 5 次两两合并，将 5 个表最终合并成 1 个升序表，并在最坏情况下比较的总次数达到最小。请回答下列问题。\n\n(1) 给出完整的合并过程，并求出最坏情况下比较的总次数。\n\n(2) 根据你的合并过程，描述 \nN(N≥2)\n 个不等长升序表的合并策略，并说明理由。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "假定采用带头结点的单链表保存单词，当两个单词有相同的后缀时，则可共享相同的后缀存储空间，例如，“loading\" 和 “being” 的存储映像如下图所示。\n\n设 str1 和 str2 分别指向两个单词所在单链表的头结点，链表结点结构为 `| data | next |`，请设计一个时间上尽可能高效的算法，找出由 str1 和 str2 所指向两个链表共同后缀的起始位置（如图中字符 i 所在的结点位置 p）。要求：\n\n1）给出算法的基本设计思想。\n\n2）根据设计思想，采用 C 或 C++ 或 Java 语言描述算法，关键之处给出注释。\n\n3）说明你所设计算法的时间复杂度。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2012/d10.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "假定某计算机的 CPU 主频为 80MHz，CPI 为 4，平均每条指令访存 1.5 次，主存与 Cache 之间交换的块大小为 16B，Cache 的命中率为 99%，存储器总线宽度为 32 位。请回答下列问题。\n\n(1) 该计算机的 MIPS 数是多少？平均每秒 Cache 缺失的次数是多少？在不考虑 DMA 传送的情况下，主存带宽至少达到多少才能满足 CPU 的访存要求？\n\n(2) 假定在 Cache 缺失的情况下访问主存时，存在 0.0005% 的缺页率，则 CPU 平均每秒产生多少次缺页异常？若页面大小为 4KB，每次缺页都需要访问磁盘，访问磁盘时 DMA 传送采用周期挪用方式，磁盘 I/O 接口的数据缓冲寄存器为 32 位，则磁盘 I/O 接口平均每秒发出的 DMA 请求次数至少是多少？\n\n(3) CPU 和 DMA 控制器同时要求使用存储器总线时，哪个优先级更高？为什么？\n\n(4) 为了提高性能，主存采用四体低位交叉存储模式，工作时每 1/4 个存储周期启动一个体。若每个体的存储周期为 50ns，则该主存能提供的最大带宽是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "某 16 位计算机中，带符号整数用补码表示，数据 Cache 和指令 Cache 分离。下表给出了指令系统中部分指令格式，其中 Rs 和 Rd 表示寄存器，mem 表示存储单元地址，(x) 表示寄存器 x 或存储单元 x 的内容。\n\n该计算机采用 5 段流水方式执行指令，各流水段分别是取指（IF）、译码/读寄存器（ID）、执行/计算有效地址（EX）、访问存储器（M）和结果写回寄存器（WB），流水线采用 “按序发射，按序完成” 方式，没有采用转发技术处理数据相关，并且同一个寄存器的读和写操作不能在同一个时钟周期内进行。请回答下列问题：\n\n(1) 若 int 型变量 x 的值为 -513，存放在寄存器 R1 中，则执行指令 “SHR R1” 后，R1 的内容是多少（用十六进制表示）？\n\n(2) 若某个时间段中，有连续的 4 条指令进入流水线，在其执行过程中没有发生任何阻塞，则执行这 4 条指令所需的时钟周期数为多少？\n\n(3) 若高级语言程序中某赋值语句为 `x=a+b`，`x`、`a` 和 `b` 均为 int 型变量，它们的存储单元地址分别表示为`[x]`、`[a]`和`[b]`。该语句对应的指令序列及其在指令流水线中的执行过程如下图所示。\n\n则这 4 条指令执行过程中，\nI3\n的 ID 段和\nI4\n的 IF 段被阻塞的原因各是什么？\n\n(4) 若高级语言程序中某赋值语句为 `x=x*2+a`，`x` 和 `a` 均为 unsigned int 类型变量，它们的存储单元地址分别表示为`[x]`、`[a]`，则执行这条语句至少需要多少个时钟周期？要求模仿题 44 图画出这条语句对应的指令序列及其在流水线中的执行过程示意图。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2012/d12.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "某请求分页系统的局部页面置换策略如下：系统从 0 时刻开始扫描，每隔 5 个时间单位扫描一轮驻留集（扫描时间忽略不计），本轮没有被访问过的页框将被系统回收，并放入到空闲页框链尾，其中内容在下一次被分配之前不被清空。当发生缺页时，如果该页曾被使用过且还在空闲页框链表中，则重新放回进程的驻留集中；否则，从空闲页框链表头部取出一个页框。\n\n假设不考虑其他进程的影响和系统开销，初始时进程驻留集为空。目前系统空闲页框链表中页框号依次为 32、15、21、41。进程 P 依次访问的 <虚拟页号，访问时刻> 是：\n\n<1, 1>、<3, 2>、<0, 4>、<0, 6>、<1, 11>、<0, 13>、<2, 14>。请回答下列问题。\n\n(1) 访问<0, 4>时，对应的页框号是什么？\n\n(2) 访问<1, 11>时，对应的页框号是什么？说明理由。\n\n(3) 访问<2, 14>时，对应的页框号是什么？说明理由。\n\n(4) 该策略是否适合于时间局部性好的程序？说明理由。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "某文件系统空间的最大容量为 4TB（1TB= \n240\nB），以磁盘块为基本分配单位。磁盘块大小为 1KB。文件控制块 (FCB) 包含一个 512B 的索引表区。请回答下列问题。\n\n(1) 假设索引表区仅采用直接索引结构，索引表区存放文件占用的磁盘块号，索引表项中块号最少占多少字节？可支持的单个文件最大长度是多少字节？\n\n(2) 假设索引表区采用如下结构：第 0～7 字节采用 <起始块号，块数> 格式表示文件创建时预分配的连续存储空间，其中起始块号占 6B，块数占 2B；剩余 504 字节采用直接索引结构，一个索引项占 6B，那么可支持的单个文件最大长度是多少字节？为了使单个文件的长度达到最大，请指出起始块号和块数分别所占字节数的合理值并说明理由。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "主机 H 通过快速以太网连接 Internet，IP 地址为 192.168.0.8，服务器 S 的 IP 地址为 211.68.71.80。H 与 S 使用 TCP 通信时，在 H 上捕获的其中 5 个 IP 分组如题 47-a 表所示。\n\n请回答下列问题。\n\n(1) 题 47-a 表中的 IP 分组中，哪几个是由 H 发送的？哪几个完成了 TCP 连接建立过程？哪几个在通过快速以太网传输时进行了填充？\n\n(2) 根据题 47-a 表中的 IP 分组，分析 S 已经收到的应用层数据字节数是多少？\n\n(3) 若题 47-a 表中的某个 IP 分组在 S 发出时的前 40 字节如题 47-b 表所示，则该 IP 分组到达 H 时经过了多少个路由器？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2012/d14.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2012/d15.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2012_408 = {
  id: P, year: Y,
  title: '2012 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2012 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2012_408.length,
  qids: questions2012_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2012',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
