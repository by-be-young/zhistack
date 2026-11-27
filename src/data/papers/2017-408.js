const P = 'paper-2017-408'
const Y = 2017
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2017-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2017 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2017',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2017_408 = [
  base(1, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列函数的时间复杂度是（ ）。\n\n`int func(int n) {\n int i = 0, sum = 0;\n while(sum < n)\n sum += ++i;\n return i;\n}\n`",
    options: opt(["O(log2n)", "O(n1/2)", "O(n)", "O(nlog2n)"]),
    answer: ["B"],
    explain: "`sum += ++i;` 相当于 `++i; sum = sum + i;` 进行到第 k 趟循环，`sum = (1+k)*k/2` 。显然需要进行\nO(n1/2)\n趟循环，因此这也是该函数的时间复杂度。",
    tags: ["复杂度分析"],
    noteId: "data_structure-basic-algorithm"
  }),
  base(2, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于栈的叙述中，错误的是（ ）。\n\nI. 采用非递归方式重写递归程序时必须使用栈\n\nII. 函数调用时，系统要用栈保存必要信息\n\nIII. 只要确定了入栈次序，即可确定出栈次序\n\nIV. 栈是一种受限的线性表，允许在其两端进行操作",
    options: opt(["仅 I", "仅 I、II、III", "仅 I、III、IV", "仅 II、III、IV"]),
    answer: ["C"],
    explain: "I 的反例：计算斐波拉契数列迭代实现只需要一个循环即可实现。\nIII 的反例：入栈序列为 1、2, 进行如下操作 PUSH、PUSH、POP、POP，出栈次序为 2、1；进行如下操作 PUSH、POP、PUSH、POP，出栈次序为 1、2。\nIV，栈是一种受限的线性表，只允许在一端进行操作。\n因此 II 正确。",
    tags: ["栈", "入栈出栈序列"],
    noteId: "data_structure-array-stack"
  }),
  base(3, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "适用于压缩存储稀疏矩阵的两种存储结构是（）",
    options: opt(["三元组表和十字链表", "三元组表和邻接矩阵", "十字链表和二叉链表", "邻接矩阵和十字链表"]),
    answer: ["A"],
    explain: "三元组表 的结点存储了行 row、列 col、值 value 三种信息，是主要用来存储稀疏矩阵的一种\n数据结构。十字链表将行单链表和列单链表结合起来存储稀疏矩阵。邻接矩阵空间复杂度达\nO(n2)\n,\n不适用于存储稀疏矩阵。二叉链表又名左孩子右兄弟表示法，可用于表示树或森林。因此 A 正确。",
    tags: ["特殊矩阵"],
    noteId: "data_structure-array-matrix"
  }),
  base(4, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "要使一颗非空二叉树的先序序列与中序序列相同，其所有非叶节点须满足的条件是（）",
    options: opt(["只有左子树", "只有右子树", "结点的度均为 1", "结点的度均为 2"]),
    answer: ["B"],
    explain: "先序序列是根左右，中序序列是左根右，递归进行。如果所有非叶结点只有右子树，先序序列和中序序列都是先父结点，然后右子树，递归进行，因此 B 正确。",
    tags: ["二叉树遍历"],
    noteId: "data_structure-tree-btree"
  }),
  base(5, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知一颗二叉树的树形如下图所示，其后序序列为 e，a，c，b，d，g，f，树中与结点 a 同层的结点是（）",
    options: opt(["c", "d", "f", "g"]),
    answer: ["B"],
    explain: "后序序列是先左子树，接着右子树，最后父结点，递归进行。根结点左子树的叶结点首先被访问，它是 e。接下来是它的父结点 a, 然后是 a 的父结点 c。接着访问根结点的右子树。它的叶结点 b 首先被访问，然后是 b 的父结点 d, 再者是 d 的父结点 g。最后是根结点 f。因此 d 与 a 同层，B 正确。",
    tags: ["二叉树遍历"],
    noteId: "data_structure-tree-btree", figures: [{ src: A + "study_methods-408quiz-2017/d1.svg", alt: '题图' }]
  }),
  base(6, 'ds', 'k-ds-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知字符集 {a, b, c, d, e, f, g, h}，若各字符的哈夫曼编码依次是 0100, 10, 0000, 0101, 001, 011, 11, 0001，则编码序列 0100011001001011110101 的译码结果是（ ）。",
    options: opt(["a c g a b f h", "a d b a g b b", "a f b e a g d", "a f e e f g d"]),
    answer: ["D"],
    explain: "哈夫曼编码 是前缀编码，各个编码的前缀各不相同，因此直接拿编码序列与哈夫曼编码一一比对即可。序列可分割为 0100 011 001 001 011 11 0101，译码结果是 a f e e f g d，选项 D 正确。",
    tags: ["哈夫曼编码"],
    noteId: "data_structure-tree-app"
  }),
  base(7, 'ds', 'k-ds-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知无向图 G 含有 16 条边，其中度为 4 的顶点个数为 3，度为 3 的顶点个数为 4，其他顶点的度均小于 3。图 G 所含的顶点个数至少是（）",
    options: opt(["10", "11", "13", "15"]),
    answer: ["B"],
    explain: "无向图边数的两倍等于各顶点度数的总和。由于其他顶点的度均小于 3，可以设它们的度都为 2，设它们的数量是 X，可列出方程 4x3 + 3x4 + 2x = 16x2，解得 x = 3。4 + 3 + 3 = 11，B 正确。",
    tags: ["图的概念"],
    noteId: "data_structure-graph-defs"
  }),
  base(8, 'ds', 'k-ds-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列二叉树中，可能成为折半查找判定树（不含外部结点）的是（）",
    options: opt(["（见图 A）", "（见图 B）", "（见图 C）", "（见图 D）"]),
    answer: ["A"],
    explain: "折半查找判定树 实际上是一棵 二叉排序树，它的中序序列是一个有序序列。可以在树结点上依次填上相应的元素，判断哪颗树符合折半查找的规则。\n（图：见原题）\n折半查找树由于其中序遍历是一个升序序列，因此相比于在以往的序列中进行二分查找，折半查找二叉树的优点在于不用自己去找中点，而是直接将要查找的关键字与根节点相比，小的话再和根节点的左子节点（又是相应的左子树中点，更加方便）比较，大的话则是和根节点的右子节点比较。\n\n而对于这道题的解题思路就在于向上或向下取整的问题，也就是说如果升序序列是偶数个，那么中点应该偏左多右少还是左少右多。但是很显然应该进行一个统一，像 B 和 C 选项中间的对称部分明显就是选择了不同的策略。D 则由根节点左子树 4 个节点而点右子树 5 个节点可以确定用的是向下取整策略，但是我们再看它的左子节点在左子树中对应的中点左边 2 个数，右边一个数，明显是向上取整策略，策略没有统一，所以是错的。",
    tags: ["二叉排序树"],
    noteId: "data_structure-tree-btree", figures: [{ src: A + "study_methods-408quiz-2017/d2.svg", alt: '题图' }]
  }),
  base(9, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列应用中，适合使用 B+ 树的是（）",
    options: opt(["编译器中的词法分析", "关系数据库系统中的索引", "网络中的路由表快速查找", "操作系统的磁盘空闲块管理"]),
    answer: ["B"],
    explain: "B+ 树 是应文件系统所需而产生的 B 树 的变形，前者比后者更加适用于实际应用中的操作系统的文件索引和数据库索引，因为前者磁盘读写代价更低，查询效率更加稳定。编译器中的词法分析使用有穷自动机和语法树。网络中的路由表快速查找主要靠高速缓存、路由表压缩技术和快速查找算法。系统一 般使用空闲空间链表管理磁盘空闲块。所以 B 正确。",
    tags: ["B+树"],
    noteId: "data_structure-search-tree"
  }),
  base(10, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在内部排序时，若选择了归并排序而没有选择插入排序，则可能的理由是（）\n\n归并排序的程序代码更短\n\n归并排序的占用空间更少\n\n归并排序的运行效率更高",
    options: opt(["仅 2", "仅 3", "仅 1、2", "仅 1、3"]),
    answer: ["B"],
    explain: "参考 排序算法复杂度，归并排序代码比选择插入排序更复杂，前者空间复杂度是\nO(n)\n, 后者是\nO(1)\n。但是前者时间复杂度是\nO(nlogn)\n, 后者是\nO(n2)\n。所以 B 正确。",
    tags: ["排序算法", "归并排序", "插入排序"],
    noteId: "data_structure-sort-internal"
  }),
  base(11, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列排序方法中，若将顺序存储更换为链式存储，则算法的时间效率会降低的是（）\n\n插入排序  2.选择排序  3.起泡排序  4.希尔排序  5.堆排序",
    options: opt(["仅 1、2", "仅 2、3", "仅 3、4", "仅 4、5"]),
    answer: ["D"],
    explain: "插入排序、选择排序、冒泡原本时间复杂度是\nO(n2)\n，更换为链式存储后的时间复杂度还是\nO(n2)\n。希尔排序和堆排序都利用了顺序存储的随机访问特性，而链式存储不支持这种性质，所以时间复杂度会增加，因此选 D。",
    tags: ["排序算法"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定计算机 M1 和 M2 具有相同的指令集体系结构（ISA），主频分别为 1.5GHz 和 1.2GHz。在 M1 和 M2 上运行某基准程序 P，平均 CPI 分别为 2 和 1，则程序 P 在 M1 和 M2 上运行时间的比值是（ ）。",
    options: opt(["0.4", "0.625", "1.6", "2.5"]),
    answer: ["C"],
    explain: "运行时间 = 指令数 x CPI / 主频。M1 的时间 = 指令数 x 2 / 1.5，M2 的时间 = 指令数 x 1 / 1.2，两者之比为 (2/1.5):(1/1.2) = 1.6。故选 C。",
    tags: ["指令体系结构"],
    noteId: "constitution_principle-instruction-concepts"
  }),
  base(13, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机主存按字节编址，由 4 个 64M×8 位的 DRAM 芯片采用交叉编址方式构成，并与宽度为 32 位的存储器总线相连，主存每次最多读写 32 位数据。若 double 型变量 x 的主存地址为 804001AH，则读取 x 需要的存储周期数是（ ）。",
    options: opt(["1", "2", "3", "4"]),
    answer: ["C"],
    explain: "由 4 个 DRAM 芯片采用 交叉编址方式 构成主存可知主存地址最低二位表示该字节存储的芯片编号。double 型变量占 64 位，8 个字节。它的主存地址 804001AH 最低二位是 10，说明它从编号为 2 的 芯片开始存储（编号从 0 开始）。一个存储周期可以对所有芯片各读取一个字节，因此需要 3 轮，故选 C。",
    tags: ["主存容量的扩展"],
    noteId: "constitution_principle-storage-memory"
  }),
  base(14, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某 C 语言程序段如下：\n\n`for (i = 0; i <= 9; i++) {\n temp = 1;\n for (j = 0; j <= i; j++) {\n temp *= a[j];\n }\n sum += temp;\n}\n`\n\n下列关于数组 a 的访问局部性的描述中，正确的是（ ）。",
    options: opt(["时间局部性和空间局部性皆有", "无时间局部性，有空间局部性", "有时间局部性，无空间局部性", "时间局部性和空间局部性皆无"]),
    answer: ["A"],
    explain: "时间局部性 是一旦一条指令被执行，则在不久的将来它可能再次被执行。空间局部性 是一旦一个存储单元被访问，那么它附近的存储单元也很快被访问。显然，这里的循环指令本身具有时间局部性，它对数组 a 的访问具有空间局部性，故选 A。",
    tags: ["cache概念"],
    noteId: "constitution_principle-storage-cache"
  }),
  base(15, 'co', 'k-co-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列寻址方式中，最适合按下标顺序访问一维数组元素的是（ ）。",
    options: opt(["相对寻址", "寄存器寻址", "直接寻址", "变址寻址"]),
    answer: ["D"],
    explain: "在 变址寻址 时，将计算机指令中的地址与变址寄存器中的地址相加，得到有效地址，指令提供数组首地址，由变址寄存器来定位数据中的各元素。所以它最适合按下标顺序访问一维数组元素，故选 D。\n\n相对寻址以 PC 为基地址，以指令中的地址为偏移量确定有效地址。寄存器寻址则是在指令中指出需要使用的寄存器。直接寻址是在指令的地址字段直接指出操作数的有效地址。",
    tags: ["指令寻址方式"],
    noteId: "constitution_principle-instruction-format"
  }),
  base(16, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机按字节编址，指令字长固定且只有两种指令格式，其中三地址指令 29 条，二地址指令 107 条，每个地址字段为 6 位，则指令字长至少应该是（ ）。",
    options: opt(["24 位", "26 位", "28 位", "32 位"]),
    answer: ["A"],
    explain: "三地址指令有 29 条，所以它的操作码至少为 5 位。以 5 位进行计算，它剩余 32-29=3 种操作码给二地址。而二地址另外多了 6 位给操作码，因此它的数量最大达 3x64=192。所以指令字长最少为 23 位，因为计算机按字节编址，需要是 8 的倍数，所以指令字长至少应该是 24 位，故选 A。",
    tags: ["操作码扩展编码"],
    noteId: "constitution_principle-instruction-format"
  }),
  base(17, 'co', 'k-co-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于超标量流水线特性的叙述中，正确的是（ ）。\n\nⅠ. 能缩短流水线功能段的处理时间\n\nⅡ. 能在一个时钟周期内同时发射多条指令\n\nⅢ. 能结合动态调度技术提高指令执行并行性",
    options: opt(["仅Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ和Ⅲ"]),
    answer: ["C"],
    explain: "超标量流水线 是指在 CPU 中有一条以上的流水线，并且每个时钟周期内可以完成一条以上的指令，其实质是以空间换时间。I 错误，它不影响流水线功能段的处理时间；II、III 正确。故选 C。",
    tags: ["超流水线"],
    noteId: "constitution_principle-cpu-pipeline"
  }),
  base(18, 'co', 'k-co-017', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于主存储器（MM）和控制存储器（CS）的叙述中，错误的是（ ）。",
    options: opt(["MM 在 CPU 外，CS 在 CPU 内", "MM 按地址访问，CS 按内容访问", "MM 存储指令和数据，CS 存储微指令", "MM 用 RAM 和 ROM 实现，CS 用 ROM 实现"]),
    answer: ["B"],
    explain: "主存储器就是我们通常说的主存，在 CPU 外，存储指令和数据，由 RAM 和 ROM 实现。控制存储器用来存放实现指令系统的所有微指令，是一种只读型存储器，机器运行时只读不写，在 CPU 的控制器内。CS 按照微指令的地址访问，所以 B 错误。",
    tags: ["寄存器类型"],
    noteId: "constitution_principle-cpu-structure"
  }),
  base(19, 'co', 'k-co-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于指令流水线数据通路的叙述中，错误的是（ ）。",
    options: opt(["包含生成控制信号的控制部件", "包含算术逻辑运算部件（ALU）", "包含通用寄存器组和取指部件", "由组合逻辑电路和时序逻辑电路组合而成"]),
    answer: ["A"],
    explain: "五阶段流水线 可分为取指（IF）、译码／取数（ID）、执行（EXC）、存储器读（MEM）、写回（Write Back）。数字系统中，各个子系统通过数据总线连接形成的数据传送路径称为 数据通路，包括程序计数器、算术逻辑运算部件、通用寄存器组、取指部件等，不包括控制部件，故选 A。",
    tags: ["流水线概念", "数据通路"],
    noteId: "constitution_principle-cpu-pipeline"
  }),
  base(20, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于多总线结构的叙述中，错误的是（ ）。",
    options: opt(["靠近 CPU 的总线速度较快", "存储器总线可支持突发传送方式", "总线之间须通过桥接器相连", "PCI-Express×16 采用并行传输方式"]),
    answer: ["D"],
    explain: "多总线结构 用速率高的总线连接高速设备用速率低的总线连接低速设备。一般来说，CPU 是计算机的核心，是计算机中速度最快的设备之一，所以 A 正确。突发传送方式把多个数据单元作为一个独立传输处理，从而最大化设备的吞吐量。现实中一般用支待突发传送方式的总线提高存储器的读写效率，B 正确。各总线通过桥接器相连，后者起流量交换作用。PCI-Express 总线都采用 串行 数据包传输数据，所以选 D。",
    tags: ["总线类型"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(21, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "I/O 指令实现的数据传送通常发生在（ ）。",
    options: opt(["I/O 设备和 I/O 端口之间", "通用寄存器和 I/O 设备之间", "I/O 端口和 I/O 端口之间", "通用寄存器和 I/O 端口之间"]),
    answer: ["D"],
    explain: "I/O 端口 是 CPU 与设备之间的交接面。由于主机和 I/0 设备的工作方式和工作速度有很大差异，I/O 端口就应运而生。在执行一条指令时，CPU 使用地址总线选择所请求的 I/O 端口，使用数据总线在 CPU 寄存器和端口之间传输数据。所以选 D。",
    tags: ["IO接口"],
    noteId: "constitution_principle-bus-io"
  }),
  base(22, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于多重中断系统的叙述中，错误的是（ ）。",
    options: opt(["在一条指令执行结束时响应中断", "中断处理期间 CPU 处于关中断状态", "中断请求的产生与当前指令的执行无关", "CPU 通过采样中断请求信号检测中断请求"]),
    answer: ["B"],
    explain: "多重中断 系统在保护被中断进程现场时关中断，执行中断处理程序时开中断，B 错误。CPU 一般在一条指令执行结束的阶段采样中断请求信号，查看是否存在中断请求，然后决定是否响应中断，A、D 正确。中断请求一般来自 CPU 以外的事件，异常一般发生在 CPU 内部，C 正确。",
    tags: ["多级中断"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(23, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设 4 个作业到达系统的时刻和运行时间如下表所示。\n\n作业达到时刻 t运行时间\n\nJ103\n\nJ213\n\nJ312\n\nJ431\n\n系统在 t=2 时开始作业调度。若分别采用先来先服务和短作业优先调度算法，则选中的作业分别是（ ）。",
    options: opt(["J2\n、\nJ3", "J1\n、\nJ4", "J2\n、\nJ4", "J1\n、\nJ3"]),
    answer: ["D"],
    explain: "先来先服务 是作业来得越早，优先级越高，因此会选择\nJ1\n。最短作业优先是作业运行时间越短，优先级越高，因此会选择\nJ3\n。所以 D 正确。",
    tags: ["处理机调度算法"],
    noteId: "operating_system-process-scheduling"
  }),
  base(24, 'os', 'k-os-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "执行系统调用的过程包括如下主要操作：\n\n①返回用户态         ②执行陷入（trap）指令\n\n③传递系统调用参数   ④执行相应的服务程序\n\n正确的执行顺序是（ ）。",
    options: opt(["②→③→①→④", "②→④→③→①", "③→②→④→①", "③→④→②→①"]),
    answer: ["C"],
    explain: "执行 系统调用 的过程是这样的：正在运行的进程先传递系统调用参数，然后由 陷入指令 负责将用户态转化为内核态，并将返回地址压入堆栈以备后用，接下来 CPU 执行相应的内核态服务程序，最后返回用户态。所以 C 正确。",
    tags: ["系统调用"],
    noteId: "operating_system-concepts-environment"
  }),
  base(25, 'os', 'k-os-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机按字节编址，其动态分区内存管理采用最佳适应算法，每次分配和回收内存后都对空闲分区链重新排序。当前空闲分区信息如下表所示。\n\n分区起始地址20K500K1000K200K\n\n分区大小40KB80KB100KB200KB\n\n回收起始地址为 60K、大小为 140KB 的分区后，系统中空闲分区的数量、空闲分区链第一个分区的起始地址和大小分别是（ ）。",
    options: opt(["3、20K、380KB", "3、500K、80KB", "4、20K、180KB", "4、500K、80KB"]),
    answer: ["B"],
    explain: "参考 动态内存内存回收过程，回收起始地址为 60K、大小为 140KB 的分区时，它与表中第一个分区和第四个分区合并，成为起始地址为 20K、大小为 380KB 的分区，剩余 3 个空闲分区。在回收内存后，算法会对空闲分区链按分区大小由小到大进行排序，表中的第二个分区排第一。所以选择 B。",
    tags: ["动态分区分配"],
    noteId: "operating_system-memory-concepts"
  }),
  base(26, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某文件系统的簇和磁盘扇区大小分别为 1KB 和 512B。若一个文件的大小为 1026B，则系统分配给该文件的磁盘空间大小是（ ）。",
    options: opt(["1026B", "1536B", "1538B", "2048B"]),
    answer: ["D"],
    explain: "在文件系统中，磁盘空间 以簇为单位 分配，每个簇的大小为 1KB（1024B）。而磁盘扇区大小为 512B，但分配时只考虑簇的整数倍。",
    tags: ["外存空间管理"],
    noteId: "operating_system-files-file_system"
  }),
  base(27, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列有关基于时间片的进程调度的叙述中，错误的是（ ）。",
    options: opt(["时间片越短，进程切换的次数越多，系统开销也越大", "当前进程的时间片用完后，该进程状态由执行态变为阻塞态", "时钟中断发生后，系统会修改当前进程在时间片内的剩余时间", "影响时间片大小的主要因素包括响应时间、系统开销和进程数量等"]),
    answer: ["B"],
    explain: "进程切换带来系统开销，切换次数越多，开销越大，A 正确。当前进程的时间片用完后，它的状态由执行态变为就绪态，B 错误。时钟中断是系统中特定的周期性时钟节拍。操作系统通过它来确定时间间隔，实现时间的延时和任务的超时，C 正确。现代操作系统为了保证性能最优，通常根据响应时间、系统开销、进程数量、进程运行时间、进程切换开销等因素确定 时间片大小，D 正确。",
    tags: ["处理机调度算法", "时间片轮转"],
    noteId: "operating_system-process-scheduling"
  }),
  base(28, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "与单道程序系统相比，多道程序系统的优点是（  ）\n\nⅠ.CPU 利用率高\n\nⅡ.系统开销小\n\nⅢ.系统吞吐量大\n\nⅣ.I/O 设备利用率高",
    options: opt(["仅Ⅰ、Ⅲ", "仅Ⅰ、Ⅳ", "仅Ⅱ 、Ⅲ", "仅Ⅰ、Ⅲ、Ⅳ"]),
    answer: ["D"],
    explain: "多道程序系统通过组织作业（编码或数据）使 CPU 总有一个作业可执行，从而提高了 CPU 的利用率、系统吞吐量和 I/O 设备利用率，I、III、IV 是优点。但系统要付出额外的开销来组织作业和切换作业，II 错误。所以选 D。",
    tags: ["操作系统概念"],
    noteId: "operating_system-concepts-concept"
  }),
  base(29, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，磁盘逻辑格式化程序所做的工作是（ ）。\n\nⅠ. 对磁盘进行分区\n\nⅡ. 建立文件系统的根目录\n\nⅢ. 确定磁盘扇区校验码所占位数\n\nⅣ. 对保存空闲磁盘块信息的数据结构进行初始化",
    options: opt(["仅Ⅱ", "仅Ⅱ、Ⅳ", "仅Ⅲ、Ⅳ", "仅Ⅰ、Ⅱ、Ⅳ"]),
    answer: ["B"],
    explain: "一个新的磁盘是一个空白盘，必须分成扇区以便磁盘控制器能读和写，这个过程称为 物理格式化。低级格式化为磁盘的每个扇区采用特别的数据结构，包括校验码，III 错误。为了使用磁盘存储文件，操作系统还需要将其数据结构记录在磁盘上。这分为两步。第一步是将磁盘分为由一个或多个柱面组成的分区，每个分区可以作为一个独立的磁盘，I 错误。在分区之后，第二步是 逻辑格式化（创建文件系统）。在这一步，操作系统将初始的文件系统数据结构存储到磁盘上。这些数据结构包括空闲和已分配的空间和一个初始 为空的目录，II、IV 正确。所以选 B。",
    tags: ["磁盘格式化"],
    noteId: "operating_system-io_device-disks"
  }),
  base(30, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某文件系统中，针对每个文件，用户类别分为 4 类：安全管理员、文件主、文件主的伙伴、其他用户；访问权限分为 5 种：完全控制、执行、修改、读取、写入。若文件控制块中用二进制位串表示文件权限，为表示不同类别用户对一个文件的访问权限，则描述文件权限的位数至少应为（ ）。",
    options: opt(["5", "9", "12", "20"]),
    answer: ["D"],
    explain: "可以把用户访问权限抽象为一个矩阵，行代表用户，列代表访问权限。这个矩阵有 4 行 5 列，1 代表 true，0 代表 false，所以需要 20 位，选 D。",
    tags: ["inode"],
    noteId: "operating_system-files-file"
  }),
  base(31, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若文件 f1 的硬链接为 f2，两个进程分别打开 f1 和 f2，获得对应的文件描述符为 fd1 和 fd2，则下列叙述中，正确的是（ ）。\n\nⅠ. f1 和 f2 的读写指针位置保持相同\n\nⅡ. f1 和 f2 共享同一个内存索引结点\n\nⅢ. fd1 和 fd2 分别指向各自的用户打开文件表中的一项",
    options: opt(["仅Ⅲ", "仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅱ", "Ⅰ、Ⅱ和Ⅲ"]),
    answer: ["B"],
    explain: "背景知识：\n\n硬链接：f1 和 f2 是同一个 inode 的两个目录项（即它们指向同一个文件的 inode），共享 相同的索引节点（inode） 和数据块。\n\n打开文件的过程：\n每个进程在打开文件时会创建：\n\n一个对应的 用户级打开文件表项（即 `fd` 指向它）\n\n用户打开文件表项再指向 系统级打开文件表项（Open File Table）\n\n系统级表项包含文件的读写偏移量（读写指针）和对 inode 的引用\n\n分析选项：\n\nⅠ. f1 和 f2 的读写指针位置保持相同\n\n❌ 错误。\n虽然 f1 和 f2 是同一个文件（硬链接），但两个进程分别打开它们时，会在系统级打开文件表中生成两个不同的表项，每个表项维护独立的文件偏移量（读写指针），所以互不影响。\n\nⅡ. f1 和 f2 共享同一个内存索引结点\n\n✅ 正确。\n硬链接的本质就是多个目录项共享同一个 inode。即使路径不同（f1 和 f2），它们最终指向的是同一个 inode。\n\nⅢ. fd1 和 fd2 分别指向各自的用户打开文件表中的一项\n\n✅ 正确。\n每个进程维护自己的文件描述符表（用户级文件表），`fd1` 和 `fd2` 分别是两个不同进程打开文件得到的描述符，它们自然是指向各自进程的用户打开文件表项。\n\nⅡ 和 Ⅲ 正确，因此，正确答案为 B。",
    tags: ["inode", "文件链接"],
    noteId: "operating_system-files-file"
  }),
  base(32, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "系统将数据从磁盘读到内存的过程包括以下操作：\n\n① DMA 控制器发出中断请求\n\n② 初始化 DMA 控制器并启动磁盘\n\n③ 从磁盘传输一块数据到内存缓冲区\n\n④ 执行“DMA 结束”中断服务程序\n\n正确的执行顺序是（ ）。",
    options: opt(["③→①→②→④", "②→③→①→④", "②→①→③→④", "①→②→④→③"]),
    answer: ["B"],
    explain: "在开始 DMA 传输时，主机向内存写入 DMA 命令块，向 DMA 控制器写入该命令块的地址，启动 I/O 设备。然后，CPU 继续其他工作，DMA 控制器则继续下去直接操作内存总线，将地址放到总线上开始传输。当整个传输完成后，DMA 控制器中断 CPU。因此执行顺序是 ②→③→①→④ 选 B。",
    tags: ["DMA"],
    noteId: "constitution_principle-bus-io"
  }),
  base(33, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设 OSI 参考模型的应用层欲发送 400B 的数据（无拆分），除物理层和应用层之外，其他各层在封装 PDU 时均引入 20B 的额外开销，则应用层数据传输效率约为（ ）。",
    options: opt(["80%", "83%", "87%", "91%"]),
    answer: ["A"],
    explain: "OSI 参考模型共 7 层，除去物理层和应用层，剩五层。它们会向 PDU 引入 20Bx5 = 100B 的额外开销。应用层是最顶层，所以它的数据传输效率为 400B/500B=80%，选 A。",
    tags: ["OSI模型"],
    noteId: "computer_network-overall-iso"
  }),
  base(34, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若信道在无噪声情况下的极限数据传输速率不小于信噪比为 30dB 条件下的极限数据传输速率，则信号状态数至少是（ ）。",
    options: opt(["4", "8", "16", "32"]),
    answer: ["D"],
    explain: "可用 奈奎斯特定理 计算无噪声情况下的极限数据传输速率，用 香农定理 计算有噪信道极限数据传输速率。\n2Wlog2N≥Wlog2(1+S/N)\n，\nW\n是信道带宽，\nN\n是信号状态数，\nS/N\n是信噪比，将数据代入计算可得\nN≥32\n，选 D。（注意 分贝数=\n10log10(S/N)\n。）",
    tags: ["奈奎斯特定理"],
    noteId: "computer_network-physical-concept"
  }),
  base(35, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在下图所示的网络中，若主机 H 发送一个封装访问 Internet 的 IP 分组的 IEEE 802.11 数据帧 F，则帧 F 的地址 1、地址 2 和地址 3 分别是（ ）。",
    options: opt(["00-12-34-56-78-9a, 00-12-34-56-78-9b, 00-12-34-56-78-9c", "00-12-34-56-78-9b, 00-12-34-56-78-9a, 00-12-34-56-78-9c", "00-12-34-56-78-9b, 00-12-34-56-78-9c, 00-12-34-56-78-9a", "00-12-34-56-78-9a, 00-12-34-56-78-9c, 00-12-34-56-78-9b"]),
    answer: ["B"],
    explain: "IEEE 802.11 数据帧有四种子类型，分别是 IBSS、From AP、ToAP、WDS。这里的数据帧 F 是从笔记本电脑发送往访问接入点（AP），所以属于 To AP 子类型。这种帧地址 l 是 RA (BSSID)，地址 2 是 SA，地址 3 是 DA。RA 是 Receiver Address 的缩写，BSSID 是 basic service set identifier 的缩写，SA 是 source address 的缩写，DA 是 destination address 的缩写。因此地址 1 是 AP 的 MAC，地址 2 是 H 的 MAC，地址 3 是 R 的 MAC，选 B。",
    tags: ["CSMA/CA"],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2017/d4.svg", alt: '题图' }]
  }),
  base(36, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列 IP 地址中，只能作为 IP 分组的源 IP 地址但不能作为目的 IP 地址的是（ ）。",
    options: opt(["0.0.0.0", "127.0.0.1", "200.10.10.3", "255.255.255.255"]),
    answer: ["A"],
    explain: "0.0.0.0/32 可以作为本主机在本网络上的源地址。127.0.0.1 是 loopback 地址，以它为目的 IP 地址的数据将被立即返回到本机。200.10.10.3 是 C 类 IP 地址。255.255.255.255 是广播地址。",
    tags: ["网络号和主机号"],
    noteId: "computer_network-network-ip"
  }),
  base(37, 'cn', 'k-cn-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "直接封装 RIP、OSPF、BGP 报文的协议分别是（ ）。",
    options: opt(["TCP、UDP、IP", "TCP、IP、UDP", "UDP、TCP、IP", "UDP、IP、TCP"]),
    answer: ["D"],
    explain: "参考 路由协议对比，RIP 是一种分布式的基于距离向量的路由选择协议，通过广播 UDP 报文来交换路由信息。OSPF 是一个内部网关协议，不使用传输协议，如 UDP 或 TCP，而是直接用 IP 包封装它的数据。BGP 是一个外部网关协议，用 TCP 封装它的数据。因此选 D。",
    tags: ["路由协议"],
    noteId: "computer_network-network-route"
  }),
  base(38, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若将网络 21.3.0.0/16 划分为 128 个规模相同的子网，则每个子网可分配的最大 IP 地址个数是（ ）。",
    options: opt(["254", "256", "510", "512"]),
    answer: ["C"],
    explain: "这个网络有 16 位的主机号，平均分成 128 个规模相同的子网，每个子网有 7 位的子网号，9 位的主机号。除去一个网络地址和广播地址，可分配的最大 IP 地址个数是 29-2=512-2=510，故选 C。",
    tags: ["网络号和主机号"],
    noteId: "computer_network-network-ip"
  }),
  base(39, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若甲向乙发起一个 TCP 连接，最大段长 MSS=1KB，RTT=5ms，乙开辟的接收缓存为 64KB，则甲从连接建立成功至发送窗口达到 32KB，需经过的时间至少是（ ）。",
    options: opt(["25 ms", "30 ms", "160 ms", "165 ms"]),
    answer: ["A"],
    explain: "按照 慢开始算法，发送窗口 = min{ 拥塞窗口，接收窗口｝，初始的拥塞窗口为最大报文段长度 1KB 海经过一个 RTT，拥塞窗口翻倍，因此需至少经过 5 个 RTT，发送窗口才能达到 32KB，所以选 A。这里假定乙能及时处理接收到的数据，空闲的接收缓存 ≥ 32KB。",
    tags: ["TCP拥塞控制"],
    noteId: "computer_network-transport-tcp"
  }),
  base(40, 'cn', 'k-cn-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于 FTP 协议的叙述中，错误的是（ ）。",
    options: opt(["数据连接在每次数据传输完毕后就关闭", "控制连接在整个会话期间保持打开状态", "服务器与客户端的 TCP 20 端口建立数据连接", "客户端与服务器的 TCP 21 端口建立控制连接"]),
    answer: ["C"],
    explain: "FTP 协议使用控制连接和数据连接，控制连接存在于整个 FTP 会话过程中，数据连接在每次文件传输时才建立，传输结束就关闭，A 和 B 是正确的。默认情况下 FTP 协议使用 TCP 20 端口进行数据连接，TCP 21 端口进行控制连接。但是是否使用 TCP 20 端口建立数据连接与传输模式有关，主动方式使用 TCP20 端口，被动方式由服务器和客户端自行协商决定，C 错，D 对。所以选 C。",
    tags: ["FTP"],
    noteId: "computer_network-application-ftp"
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "请设计一个算法，将给定的表达式树（二叉树）转换为等价的中缀表达式（通过括号反映操作符的计算次序）并输出。例如，当下列两棵表达式树作为算法输入时：\n\n输出的中缀表达式分别为 `(a+b)*(c*(`−`d))` 和 `(a*b)+(`−`(c`−`d))` 。\n\n二叉树结点的定义如下：\n\n`typedef struct node{\n char data[10]; // 存储操作数或操作符\n struct node *left, *right;\n} BTree;\n`\n\n要求：\n\n(1) 给出算法的基本设计思想。\n\n(2) 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2017/d5.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "使用 Prim（普里姆）算法求带权连通图的最小（代价）生成树（MST）。请回答下列问题。\n\n(1) 对下列图 G，从顶点 A 开始求 G 的 MST，依次给出按算法选出的边。\n\n(2) 图 G 的 MST 是唯一的吗？\n\n(3) 对任意的带权连通图，满足什么条件时，其 MST 是唯一的？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2017/d6.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "已知\nf(n)=∑i=0n2i=2n+1−1=11⋯1\nB，计算\nf(n)\n的 C 语言函数 f1 如下：\n\n`int f1(unsigned n) {\n int sum=1, power=1;\n for(unsigned i=0; i<= n -1; i ++) {\n power * = 2;\n sum += power;\n }\n return sum ;\n}\n`\n\n将 f1 中的 int 都改为 float，可得到计算 f(n) 的另一个函数 f2。假设 unsigned 和 int 型数据都占 32 位，float 采用 IEEE754 单精度标准。请回答下列问题。\n\n(1) 当 n=0 时，f1 会出现死循环，为什么？若将 f1 中的变量 i 和 n 都定义为 int 型，则 f1 是否还会出现死循环？为什么？\n\n(2) f1(23) 和 f2(23) 的返回值是否相等？机器数各是什么（用十六进制表示）？\n\n(3) f1(24) 和 f2(24) 的返回值分别为 33554431 和 33554432.0，为什么不相等？\n\n(4) f(31)= \n232−1\n ，而 f1(31) 的返回值却为 -1，为什么？若使 f1(n) 的返回值与 f(n) 相等，则最大的 n 是多少？\n\n(5) f2(127) 的机器数为 7F80 0000H，对应的值是什么？若使 f2(n) 的结果不溢出，则最大的 n 是多少？若使 f2(n) 的结果精确（无舍入），则最大的 n 是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "在按字节编址的计算机 M 上，题 43 中 f1 的部分源程序（阴影部分）与对应的机器级代码（包括指令的虚拟地址）如下图所示。\n`int f1(unsigned n)\n1 00401020 55 push ebp\n... ... ...\n for (unsigned i = 0; i <= n-1; i++) {\n... ... ...\n20 0040105E 39 4D F4 cmp dword ptr [ebp-0Ch],ecx\n... ... ...\n power *= 2;\n... ... ...\n23 00401066 D1 E2 shl edx,1\n... ... ...\n return sum;\n... ... ...\n35 0040107F C3 ret\n`\n其中，机器级代码行包括行号、虚拟地址、机器指令和汇编指令。\n\n请回答下列问题。\n\n(1) 计算机 M 是 RISC 还是 CISC？为什么？\n\n(2) f1 的机器指令代码共占多少字节？要求给出计算过程。\n\n(3) 第 20 条指令 cmp 通过 i 减 n-1 实现对 i 和 n-1 的比较。执行 f1(0) 过程中，当 i=0 时，cmp 指令执行后，进/借位标志 CF 的内容是什么？要求给出计算过程。\n\n(4) 第 23 条指令 shl 通过左移操作实现了 power*2 运算，在 f2 中能否也用 shl 指令实现 power*2？为什么？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "假定题 44 给出的计算机 M 采用二级分页虚拟存储管理方式，虚拟地址格式如下：\n\n页目录号（10 位）页表索引（10 位）页内偏移量（12 位）\n\n请针对题 43 的函数 f1 和题 44 中的机器指令代码，回答下列问题。\n\n(1) 函数 f1 的机器指令代码占多少页？\n\n(2) 取第 1 条指令（push ebp）时，若在进行地址变换的过程中需要访问内存中的页目录和页表，则会分别访问它们各自的第几个表项（编号从 0 开始）？\n\n(3) M 的 I/O 采用中断控制方式。若进程 P 在调用 f1 之前通过 scanf() 获取 n 的值，则在执行 scanf() 的过程中，进程 P 的状态会如何变化？CPU 是否会进入内核态？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "某进程中有 3 个并发执行的线程 thread1、thread2、thread3，其伪代码如下所示。\n\n`\n//复数的结构类型定义\ntypedef struct\n{\n float a;\n float b;\n} cnum;\n\n//全局变量\ncnum x,y,z;\n\n//计算两个复数之和\ncnum add(cnum p,cnum q)\n{\n cnum s;\n s.a=p.a+q.a;\n s.b=p.b+q.b;\n return s;\n}\n`\n\n`\nthread1\n{\n cnum w;\n w=add(x,y);\n ...\n}\n\nthread2\n{\n cnum w;\n w=add(y,z);\n ...\n}\n\n`\n\n`\nthread3\n{\n cnum w;\n w.a=1;\n w.b=2;\n z=add(z,w);\n y=add(y,w);\n ...\n}\n\n`\n\n请添加必要的信号量和 P、V（或 wait()、signal()）操作，要求确保线程互斥访问临界资源，并且最大程度地并发执行。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "甲乙双方均采用后退 N 帧协议 (GBN) 进行持续的双向数据传输，且双方始终采用捎带确认，帧长均为 1000 B。 \nSx,y\n 和 \nRx,y\n 分别表示甲方和乙方发送的数据帧，其中：\nx\n是发送序号；\ny\n是确认序号（表示希望接收对方的下一帧序号）；数据帧的发送序号和确认序号字段均为 3 比特。信道传输速率为 100 Mbps，RTT = 0.96 ms。下图给出了甲方发送数据帧和接收数据帧的两种场景，其中 \nt0\n 为初始时刻，此时甲方的发送和确认序号均为 0， \nt1\n 时刻甲方有足够多的数据待发送。\n\n请回答下列问题。\n\n(1) 对于图 (a)， \nt0\n 时刻到 \nt1\n 时刻期间，甲方可以断定乙方已正确接收的数据帧数是多少？正确接收的是哪几个帧（请用 \nSx,y\n 形式给出）？\n\n(2) 对于图 (a)，从 \nt1\n 时刻起，甲方在不出现超时且未收到乙方新的数据帧之前，最多还可以发送多少个数据帧？其中第一个帧和最后一个帧分别是哪个（请用 \nSx,y\n 形式给出）？\n\n(3) 对于图 (b)，从 \nt1\n 时刻起，甲方在不出现新的超时且未收到乙方新的数据帧之前，需要重发多少个数据帧？重发的第一个帧是哪个（请用 \nSx,y\n 形式给出）？\n\n(4) 甲方可以达到的最大信道利用率是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2017/d7.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2017_408 = {
  id: P, year: Y,
  title: '2017 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2017 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2017_408.length,
  qids: questions2017_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2017',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
