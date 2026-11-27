const P = 'paper-2015-408'
const Y = 2015
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2015-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2015 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2015',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2015_408 = [
  base(1, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知程序如下：\n\n`int S(int n) {\n return (n <= 0) ? 0 : S(n - 1) + n;\n}\n\nvoid main() {\n cout << S(1);\n}\n`\n\n程序运行时使用栈来保存调用过程的信息，自栈底到栈顶保存的信息依次对应的是（ ）。",
    options: opt(["main() → S(1) → S(0)", "S(0) → S(1) → main()", "main() → S(0) → S(1)", "S(1) → S(0) → main()"]),
    answer: ["A"],
    explain: "递归调用函数时，在系统栈里保存的函数信息需满足先进后出的特点，依次调用了 `main()`，`S(1)`，`S(0)`，故栈底到栈顶的信息依次是 `main()`，`S(1)`，`S(O)` 。",
    tags: ["栈"],
    noteId: "data_structure-array-stack"
  }),
  base(2, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "先序序列为 a,b,c,d 的不同二叉树的个数是（）。",
    options: opt(["13", "14", "15", "16"]),
    answer: ["B"],
    explain: "本题考察 卡特兰数。根据二叉树前序遍历和中序遍历的递归算法中递归工作栈的状态变化得出：前序序列和中序序列的关系相当于以前序序列为入栈次序，以中序序列为出栈次序。因为前序序列和中序序列可以唯一地确定一棵二叉树，所以题意相当千“以序列 a, b, c, d 为入栈次序，则出栈序列的个数为多少“，对于 n 个不同元素进栈，出栈序列的个数\nn+11C2nn=14\n。",
    tags: ["入栈出栈序列", "卡特兰数"],
    noteId: "data_structure-array-application"
  }),
  base(3, 'ds', 'k-ds-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项给出的是从根分别到达两个叶结点路径上的权值序列，能属于同一棵哈夫曼树的是（ ）。",
    options: opt(["24, 10, 5 和 24, 10, 7", "24, 10, 5 和 24, 12, 7", "24, 10, 10 和 24, 14, 11", "24, 10, 5 和 24, 14, 6"]),
    answer: ["D"],
    explain: "在 哈夫曼树 中，左右孩子权值之和为父结点权值。仅以分析选项 A 为例：若两个 10 分别属于两棵不同的子树，根的权值不等于其孩子的权值和，不符；若两个 10 属于同棵子树，其权值不等千其两个孩子（叶结点）的权值和，不符。B、C 选项的排除方法一样。",
    tags: ["哈夫曼树"],
    noteId: "data_structure-tree-app"
  }),
  base(4, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "现有一棵无重复关键字的平衡二叉树（AVL 树），对其进行中序遍历可得到一个降序序列。下列关于该平衡二叉树的叙述中，正确的是（ ）。",
    options: opt(["根结点的度一定为 2", "树中最小元素一定是叶结点", "最后插入的元素一定是叶结点", "树中最大元素一定是无左子树"]),
    answer: ["D"],
    explain: "只有两个结点的 平衡二叉树 的根结点的度为 1，A 错误。中序遍历后可以得到一个降序序列，树中最大元素一定无左子树（可能有右子树），因此不一定是叶结点，B 错误。最后插入的结点可能会导致平衡调整，而不一定是叶结点，C 错误。",
    tags: ["平衡二叉树"],
    noteId: "data_structure-tree-btree"
  }),
  base(5, 'ds', 'k-ds-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设有向图 G=(V,E)，顶点集 V={\nv0\n,\nv1\n,\nv2\n,\nv3\n}，边集 E={<\nv0\n,\nv1\n>，<\nv0\n,\nv2\n>，<\nv0\n,\nv3\n>，<\nv1\n,\nv3\n>}。若从顶点\nv0\n开始对图进行深度优先遍历，则可能得到的不同遍历序列个数是（）。",
    options: opt(["2", "3", "4", "5"]),
    answer: ["D"],
    explain: "画出该有向图图形如下：\n（图：见原题）\n采用图的深度优先遍历，共 5 种可能： <\nv0\n,\nv1\n,\nv3\n,\nv2\n>, <\nv0\n,\nv2\n,\nv3\n,\nv1\n>, <\nv0\n,\nv2\n, vi,\nv3\n>, <\nv0\n,\nv3\n,\nv2\n,\nv1\n>, <\nv0\n,\nv3\n,\nv1\n,\nv2\n>, 选 D。",
    tags: ["图的遍历"],
    noteId: "data_structure-graph-operation"
  }),
  base(6, 'ds', 'k-ds-014', {
    type: 'single', difficulty: 2, score: 2,
    stem: "求下面带权图的最小（代价）生成树时，可能是克鲁斯卡（Kruskal）算法第 2 次选中但不是普里姆（Prim）算法（从 V4 开始）第 2 次选中的边是（）。",
    options: opt(["(\nV1\n,\nV3\n)", "(\nV1\n,\nV4\n)", "(\nV2\n,\nV3\n)", "(\nV3\n,\nV4\n)"]),
    answer: ["C"],
    explain: "V4\n开始， kruskal 算法 选中的第一条边一定是权值最小的 (\nV1\n,\nV4\n), B 错误。由于\nV1\n和\nV4\n已经可达，第二条边含有\nV1\n和\nV4\n的权值为 8 的一定符合 prim 算法，排除 A、D。",
    tags: ["最小生成树"],
    noteId: "data_structure-graph-operation", figures: [{ src: A + "study_methods-408quiz-2015/d2.svg", alt: '题图' }]
  }),
  base(7, 'ds', 'k-ds-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不能构成折半查找中关键字比较序列的是（）。",
    options: opt(["500,200,450,180", "500,450,200,180", "180,500,200,450", "180,200,500,450"]),
    answer: ["A"],
    explain: "画出查找路径图，因为折半查找的判定树是一棵二叉排序树，看其是否满足二叉排序树的要求。\n（图：见原题）\n显然，选项 A 的查找路径不满足。",
    tags: ["数组查找"],
    noteId: "data_structure-search-array"
  }),
  base(8, 'ds', 'k-ds-007', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知字符串 `s` 为 “`abaabaabacacaabaabcc`”，模式串 `t` 为 “`abaabc`”。采用 KMP 算法进行匹配，第一次出现“失配”（`s[i]` ≠ `t[j]`）时，`i = j = 5`，则下次开始匹配时，`i` 和 `j` 的值分别是（ ）。",
    options: opt(["i = 1, j = 0", "i = 5, j = 0", "i = 5, j = 2", "i = 6, j = 2"]),
    answer: ["C"],
    explain: "由题中失配 `s[i] ≠ s[j]` 时，`i = j = 5\",` 可知题中的主串和模式串 的位序都是从 0 开始的（要注意灵活应变）。按照 `next` 数组生成算法，对于 `t` 有：\n\n编号 | 0 | 1 | 2 | 3 | 4 | 5\nt | a | b | a | a | b | b\nnext | -1 | 0 | 0 | 1 | 1 | 2\n\n依据 KMP 算法 “当失配时，`i` 不变，`j` 回退到 `next[j]` 的位置并重新比较”，当失配 `s[i] ≠ s[j]`时，`i=j=5,` 由上表不难得出 `next[j]=next[5]=2`（位序从 0 开始）。从而最后结果应为 `i=5`（`i` 保持不变），`j=2` 。",
    tags: ["KMP算法"],
    noteId: "data_structure-strings-match"
  }),
  base(9, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列排序算法中，元素的移动次数与关键字的初始排列次序无关的是（）。",
    options: opt(["直接插入排序", "起泡排序", "基数排序", "快速排序"]),
    answer: ["C"],
    explain: "基数排序 的元素移动次数与关键字的初始排列次序无关，而其他三种排序都是与关键字的初始排列明显相关的。",
    tags: ["排序算法", "基数排序"],
    noteId: "data_structure-sort-internal"
  }),
  base(10, 'ds', 'k-ds-022', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知小根堆为 8,15,10,21,34,16,12，删除关键字 8 之后需重建堆，在此过程中，关键字之间的比较次数是（）。",
    options: opt(["1", "2", "3", "4"]),
    answer: ["C"],
    explain: "删除 8 后，将 12 移动到堆顶，第一 次是 15 和 10 比较，第二次是 10 和 12 比较并交换，第三次还需比较 12 和 16, 故比较次数为 3 次。\n（图：见原题）",
    tags: ["堆的概念"],
    noteId: "data_structure-sort-internal"
  }),
  base(11, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "希尔排序的组内排序采用的是（）。",
    options: opt(["直接插入排序", "折半插入排序", "快速排序", "归并排序"]),
    answer: ["A"],
    explain: "希尔排序 的思想是：先将待排元素序列分割成若干子序列（由相隔某个“增量”的元素组成），分别进行直接插入排序，然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序。",
    tags: ["排序算法", "希尔排序"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "计算机硬件能够直接执行的语言是（ ）。\n\nI. 机器语言程序\n\nII. 汇编语言程序\n\nIII. 硬件描述语言程序",
    options: opt(["仅 I", "仅 I、II", "仅 I、III", "I、II、III"]),
    answer: ["A"],
    explain: "硬件能直接执行的只能是机器语言（二进制编码），汇编语言是为了增强机器语言的可读性和记忆性的语言，经过汇编后才能被执行。",
    tags: ["计算机体系结构"],
    noteId: "constitution_principle-overview-structure"
  }),
  base(13, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "由 3 个“1”和 5 个“0”组成的 8 位二进制补码，能表示的最小整数（ ）。",
    options: opt(["-126", "-125", "-32", "-3"]),
    answer: ["B"],
    explain: "使用 补码 表示整数时，负数的符号位为 1, 数值位按位取反，末位加 1, 因此剩下的 2 个 1 在最低位时，表示的是最小整数，为 10000011, 转换成真值为 -125。",
    tags: [],
    noteId: ""
  }),
  base(14, 'co', 'k-co-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列有关浮点数加减运算的叙述中，正确的是（ ）。\n\nⅠ. 对阶操作不会引起阶码上溢或下溢\n\nⅡ. 右规和尾数舍入都可能引起阶码上溢\n\nⅢ. 左规时可能引起阶码下溢\n\nⅣ. 尾数溢出时结果不一定溢出",
    options: opt(["仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅱ、Ⅳ", "仅Ⅰ、Ⅲ、Ⅳ", "Ⅰ、Ⅱ、Ⅲ、Ⅳ"]),
    answer: ["D"],
    explain: "参考浮点数加减，对阶是较小的阶码对齐至较 大的阶码，I 正确。右规和尾数舍入过程，阶码加 1 而可能上溢，II 正确，同理 III 也正确。尾数溢出时可能仅产生误差，结果不一定溢出，IV 正确。",
    tags: ["浮点数加减"],
    noteId: "constitution_principle-representation-floats"
  }),
  base(15, 'co', 'k-co-006', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定主存地址位数为 32 位，按字节编址，主存和 Cache 之间采用直接映射方式，主存块大小为 4 个字，每字 32 位，写操作时采用回写 (Write Back) 方式，则能存放 4K 字数据的 Cache 的总容量的位数至少是（ ）。",
    options: opt(["146K", "147K", "148K", "158K"]),
    answer: ["C"],
    explain: "直接映射的 地址结构 为：\n\n主存字块标记 | 行号 | 块内地址\n\n主存块大小为 4 个字，每字 32 位，因此块大小为：\n4×32 bit=128 bit=16 B\n。\n计算机按字节编址，故块内地址占\nlog2(16)=4\n位。\n\nCache 可存放 4K 字数据，块大小为 4 字，因此 Cache 行数为：\n4K/4=1K=1024\n，\n行号占\nlog2(1024)=10\n位。\n\n主存地址位数为 32 位，块内地址占 4 位，行号占 10 位，\n因此主存字块标记占\n32−4−10=18\n位。\n\n写操作采用回写（Write Back）方式，每行标记字段包括：\n18 位主存字块标记、1 位有效位、1 位脏位，\n合计\n18+1+1=20\n位。\n\n每行数据部分大小为 4 字 × 32 位 = 128 位。\n\nCache 总容量为：\n\n(20+128)×1024=148×1024 位=148 Kb",
    tags: ["cache映射方式", "cache写策略"],
    noteId: "constitution_principle-storage-cache"
  }),
  base(16, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定编译器将赋值语句 “`x=x+3;`” 转换为指令 “`add xaddr, 3`”，其中 `xaddr` 是 `x` 对应的存储单元地址。若执行该指令的计算机采用页式虚拟存储管理方式，并配有相应的 TLB，且 Cache 使用直写（Write Through）方式，则完成该指令功能需要访问主存的次数至少是（ ）。",
    options: opt(["0", "1", "2", "3"]),
    answer: ["B"],
    explain: "上述指令的执行过程可划分为取数、运算和写回过程，取数时读取 xaddr 可能不需要访问主存而直接访问 Cache，而 直写法 需要把数据同时写入 Cache 和主存，因此至少访问 1 次。",
    tags: ["cache写策略", "TLB"],
    noteId: "constitution_principle-storage-cache"
  }),
  base(17, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列存储器中，在工作期间需要刷新的是（ ）。",
    options: opt(["SRAM", "SDRAM", "ROM", "FLASH"]),
    answer: ["B"],
    explain: "DRAM 芯片 使用电容存储，所以必须隔一段时间刷新一次，如果存储单元没有被刷新，存储的信息就会丢失。SDRAM 表示同步动态随机存储器。\n\nB 选项 SDRAM 中 S 的意思是 synchronized 的，意思是同步 DRAM。",
    tags: ["存储器概念"],
    noteId: "constitution_principle-storage-defs"
  }),
  base(18, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机使用 4 体交叉编址存储器，假定在存储器总线上出现的主存地址（十进制）序列为 8005，8006，8007，8008，8001，8002，8003，8004，8000，则可能发生访存冲突的地址对是（ ）。",
    options: opt(["8004 和 8008", "8002 和 8007", "8001 和 8008", "8000 和 8004"]),
    answer: ["D"],
    explain: "本题考察 多体交叉存储器，每个访存地址对应的存储模块序号 (0, 1, 2, 3) 如下所示：\n（图：见原题）\n其中，模块序号 = 访存地址 % 存储器交叉模块数。\n\n判断可能发生访存冲突的规则是：给定的访存地址在相邻的四次访问中出现在同一个存储模块内。据此，根据上表可知 8004 和 8000 对应的模块号都为 0，即表明这两次的访问出现在同一模块内且在相邻的访问请求中，满足发生冲突的条件。",
    tags: ["主存容量的扩展"],
    noteId: "constitution_principle-storage-memory"
  }),
  base(19, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列有关总线定时的叙述中，错误的是（ ）。",
    options: opt(["异步通信方式中，全互锁协议最慢", "异步通信方式中，非互锁协议的可靠性最差", "同步通信方式中，同步时钟信号可由各设备提供", "半同步通信方式中，握手信号的采样由同步时钟控制"]),
    answer: ["C"],
    explain: "在 同步通信方式 中，系统采用一个统一的时钟信号，而不是由各设备提供，否则没法实现统一的时钟。",
    tags: ["总线定时"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(20, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若磁盘转速为 7200rpm，平均寻道时间为 8ms，每个磁道包含 1000 个扇区，则访问一个扇区的平均存取时间大约是（ ）。",
    options: opt(["8.1ms", "12.2ms", "16.3ms", "20.5ms"]),
    answer: ["B"],
    explain: "存取时间 = 寻道时间 + 延迟时间 + 传输时间。存取一个扇区的平均延迟时间为旋转半周的时间，即为 (60/7200)/2=4.17ms，传输时间为 (60/7200)/1000=0.01ms，因此访问一个扇区的平均存取时间为 4.17+0.01+8=12.18ms，保留一位小数则为 12.2ms。",
    tags: ["磁盘性能指标"],
    noteId: "constitution_principle-storage-storage"
  }),
  base(21, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在采用中断 I/O 方式控制打印输出的情况下，CPU 和打印控制接口中的 I/O 端口之间交换的信息不可能是（ ）。",
    options: opt(["打印字符", "主存地址", "设备状态", "控制命令"]),
    answer: ["B"],
    explain: "在 程序中断方式 中，CPU 和打印控制接口（I/O 端口）之间常见的交互信息包括：\n\nA. 打印字符：✅\nCPU 通过 I/O 端口向打印机发送要打印的字符数据。\n\nC. 设备状态：✅\nCPU 可以从设备读取其状态（如“忙碌”、“准备好”、“出错”等），判断是否可以继续发送数据。\n\nD. 控制命令：✅\nCPU 可以向设备发送控制命令（如“启动打印”、“复位”等）控制设备的行为。\n\n所以 B 选项错误，主存地址属于内存地址空间，而不是 I/O 端口和控制接口之间直接交换的信息。\n\n在中断 I/O 方式中：\n\n数据是由 CPU 从内存中取出，然后通过 I/O 指令送到 I/O 端口；\n\n并不是由 CPU 告诉 I/O 接口一个内存地址，让设备自己去内存取数据（那是 DMA 的行为）。\n\n因此，中断 I/O方式下不会在 CPU 和设备控制器之间交换主存地址。",
    tags: ["中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(22, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "内部异常（内中断）可分为故障（fault）、陷阱（trap）和终止（abort）三类。下列有关内部异常的叙述中，错误的是（ ）。",
    options: opt(["内部异常的产生与当前执行指令相关", "内部异常的检测由 CPU 内部逻辑实现", "内部异常的响应发生在指令执行过程中", "内部异常处理后返回到发生异常的指令继续执行"]),
    answer: ["D"],
    explain: "参考 中断和异常的区别，内中断是指来自 CPU 和内存内部产生的中断，包括程序运算引起的各种错误，如地址非法、校验错、页面失效、非法指令、用户程序执行特权指令自行中断（INT）和除数为零等，以上中断都在指令的执行过程中产生的，故 A 正确。这种检测异常的工作肯定是由 CPU（包括控制器和运算器）实现的，故 B 正确。内中断不能被屏蔽，一旦出现应立即处理，C 正确。对于 D，考虑到特殊情况，如除数为零和自行中断（INT）都会自动跳过中断指令，所以不会返回到发生异常的指令继续执行，故错误。",
    tags: ["异常和中断"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(23, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "处理外部中断时，应该由操作系统保存的是（ ）。",
    options: opt(["程序计数器（PC）的内容", "通用寄存器的内容", "块表（TLB）中的内容", "Cache 中的内容"]),
    answer: ["B"],
    explain: "在 中断处理流程 中，PC 值由中断隐指令自动保存，而通用寄存器 内容由操作系统保存。",
    tags: ["寄存器类型", "中断IO"],
    noteId: "constitution_principle-cpu-structure"
  }),
  base(24, 'os', 'k-os-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定下列指令已装入指令寄存器，则执行时不可能导致 CPU 从用户态变为内核态（系统态）的是（ ）。",
    options: opt(["DIV R0, R1; (R0)/(R1)→R0", "INT n; 产生软中断", "NOT R0; 寄存器 R0 的内容取非", "MOV R0, addr; 把地址 addr 的内存数据放入寄存器 R0 中"]),
    answer: ["C"],
    explain: "考虑到部分指令可能出现异常（导致中断），从而转到 内核模式。指令 A 有除零异常的可能，指令 B 为中断指令，指令 D 有缺页异常的可能，指令 C 不会发生异常。",
    tags: ["用户态和内核态"],
    noteId: "operating_system-concepts-environment"
  }),
  base(25, 'os', 'k-os-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，会导致进程从执行态变为就绪态的事件是（  ）。",
    options: opt(["执行 P(wait) 操作", "申请内存失败", "启动 I/O 设备", "被高优先级进程抢占"]),
    answer: ["D"],
    explain: "参考 状态转化，A、B 和 C 都 因为请求某一资源会进入阻塞态，而 D 只是被剥夺了处理机资源，进入就绪态，一 旦得到处理机即可运行。",
    tags: ["进程状态"],
    noteId: "operating_system-process-process_thread"
  }),
  base(26, 'os', 'k-os-010', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若系统 S1 采用死锁避免方法，S2 采用死锁检测方法。下列叙述中，正确的是（）。\n\nⅠ、S1 会限制用户申请资源的顺序，而 S2 不会\n\nⅡ、S1 需要进程运行所需的资源总量信息，而 S2 不需要\n\nⅢ、S1 不会给可能导致死锁的进程分配资源，而 S2 会",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["B"],
    explain: "死锁处理 采用三种策略：死锁预防、死锁避免、死锁检测和解除。\n\n死锁预防，采用破坏产生死锁的四个必要条件中的一个或几个，以防止发生死锁。其中之一的“破坏循环等待条件”，一般采用顺序资源分配法，首先给系统的资源编号，规定每个进程必须按编号递增的顺序请求资源，也就是限制了用户申请资源的顺序，故 I 的前半句属于死锁预防的范畴。\n\n银行家算法是最著名的死锁避免算法，其中的最大需求矩阵 MAX 定义了每一个进程对 m 类资源的最大需求量，系统在执行安全性算法中都会检查此次资源试分配后，系统是否处于安全状态，若不安全则将本次的试探分配作废。\n\n在死锁的检测和解除中，在系统为进程分配资源时不采取任何措施，但提供死锁的检测和解除的手段。故 II、III 正确。",
    tags: ["死锁的处理方法"],
    noteId: "operating_system-process-deadlock"
  }),
  base(27, 'os', 'k-os-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "系统为某进程分配了 4 个页框，该进程已访问的页号序列为 2, 0, 2, 9, 3, 4, 2, 8, 2, 4, 8, 4, 5。若进程要访问的下一页的页号为 7，依据 LRU 算法，应淘汰页的页号是（ ）。",
    options: opt(["2", "3", "4", "8"]),
    answer: ["A"],
    explain: "参考 LRU，对页号序列从后往前计数，直到数到 4（页框数）个不同的数字为止，这个停止的数字就是要淘汰的页号（最近最久未使用的页），题中为页号 2。",
    tags: ["页面置换算法", "LRU"],
    noteId: "operating_system-memory-management"
  }),
  base(28, 'os', 'k-os-023', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在系统内存中设置磁盘缓冲区的主要目的是（ ）。",
    options: opt(["减少磁盘 I/O 次数", "减少平均寻道时间", "提高磁盘数据可靠性", "实现设备无关性"]),
    answer: ["A"],
    explain: "磁盘和内存的速度差异，决定了可以将内存经常访问的文件调入磁盘缓冲区，从高速缓存中复制的访问比磁盘 I/O 的机械操作要快很多。",
    tags: ["缓冲区"],
    noteId: "operating_system-io_device-management"
  }),
  base(29, 'os', 'k-os-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在文件的索引节点中存放直接索引指针 10 个，一级和二级索引指针各 1 个。磁盘块大小为 1KB，每个索引指针占 4 个字节。若某文件的索引节点已在内存中，则把该文件偏移量（按字节编址）为 1234 和 307400 处所在的磁盘块读入内存，需访问的磁盘块个数分别是（ ）。",
    options: opt(["1、2", "1、3", "2、3", "2、4"]),
    answer: ["B"],
    explain: "本题考察 混合索引：\n\n其中 10 个直接索引指针指向的数据块大小为 10×1KB = 10KB。\n\n每个索引指针占 4B，则每个磁盘块可存放 1KB/4B = 256 个索引指针，一级索引指针指向的数据块大小为 256×1KB = 256KB，二级索引指针指向的数据块大小为 256×256×1KB = 216KB = 64MB。\n\n按字节编址，偏移量为 1234 时，因 1234B < 10KB，则由直接索引指针可得到其所在的磁盘块地址。文件的索引结点已在内存中，则地址可直接得到，故仅需 1 次访盘即可。\n\n偏移量为 307400 时，因 10KB+256KB < 307400B < 64MB，可知该偏移量的内容在二级索引指针所指向的某个磁盘块中，索引结点已在内存中，故先访盘 2 次得到文件所在的磁盘块地址，再访盘 1 次即可读出内容，故共需 3 次访盘。",
    tags: ["文件物理结构"],
    noteId: "operating_system-files-file"
  }),
  base(30, 'os', 'k-os-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在请求分页系统中，页面分配策略与页面置换策略不能组合使用的是（ ）。",
    options: opt(["可变分配，全局置换", "可变分配，局部置换", "固定分配，全局置换", "固定分配，局部置换"]),
    answer: ["C"],
    explain: "本题考察内存置换策略：对各进程进行固定分配时页面数不变，不可能出现全局置换。而 A、B、D 是现代操作系统中常见的 3 种策略。",
    tags: ["页框分配和置换策略"],
    noteId: "operating_system-memory-management"
  }),
  base(31, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "文件系统用 位图法 表示磁盘空间的分配情况，位图存于磁盘的 32～127 号块中，每个盘块占 1024 个字节，盘块和块内字节均从 0 开始编号。假设要释放的盘块号为 409612，则位图中要修改的位所在的盘块号和块内字节序号分别是（ ）。",
    options: opt(["81、1", "81、2", "82、1", "82、2"]),
    answer: ["C"],
    explain: "盘块号＝起始块号 + ⌊盘块号/(1024x8)」= 32 + ⌊409612/(1024x8)」= 32 + 50 = 82，这里问的是块内字节号而不是位号，因此还需要除以 8（1 字节=8 位），块内字节号= ⌊（盘块号%(1024x8))/8」= 1。",
    tags: ["位图法"],
    noteId: "operating_system-files-file_system"
  }),
  base(32, 'os', 'k-os-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某硬盘有 200 个磁道（最外侧磁道号为 0），磁道访问请求序列为：130，42，180，15，199，当前磁头位于第 58 号磁道并从外侧向内侧移动。按照 SCAN 调度方法处理完上述请求后，磁头移过的磁道数是（ ）。",
    options: opt(["208", "287", "325", "382"]),
    answer: ["C"],
    explain: "SCAN 算法就是电梯调度算法。顾名思义，如果开始时磁头向外移动就一直要到最外侧，然后再返回向内侧移动，就像电梯若往下则一直要下到最底层需求才会再上升一样。当期磁头位于 58 号并从外侧向内侧移动，先依次访问 130 和 199, 然后再返回向外侧移动，依次访问 42 和 15, 故磁头移过的磁道数是：(199-58)+(199-15) = 325。",
    tags: ["磁盘调度算法"],
    noteId: "operating_system-io_device-disks"
  }),
  base(33, 'cn', 'k-cn-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "通过 POP3 协议接收邮件时，使用的传输层服务类型是（ ）。",
    options: opt(["无连接不可靠的数据传输服务", "无连接可靠的数据传输服务", "有连接不可靠的数据传输服务", "有连接可靠的数据传输服务"]),
    answer: ["D"],
    explain: "POP3 建立在 TCP 连接上，使用的是有连接可靠的数据传输服务。",
    tags: ["电子邮件"],
    noteId: "computer_network-application-mail"
  }),
  base(34, 'cn', 'k-cn-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "使用两种编码方案对比特流 01100111 进行编码的结果如下图所示，编码 1 和编码 2 分别是（ ）。",
    options: opt(["NRZ 和曼彻斯特编码", "NRZ 和差分曼彻斯特编码", "NRZI 和曼彻斯特编码", "NRZI 和差分曼彻斯特编码"]),
    answer: ["A"],
    explain: "NRZ 是最简单的串行编码技术，用两个电压来代表两个二进制数，如高电平表示 1，低电平表示 0，题中编码 1 符合。NRZI 则是用电平的一次翻转来表示 1，与前一个 NRZI 电平相同的电平表示 0。曼彻斯特编码将一个码元分成两个相等的间隔，前一个间隔为低电平后一个间隔为高电平表示 1；0 的表示正好相反，题中编码 2 符合。",
    tags: ["编码方法"],
    noteId: "computer_network-physical-encoding", figures: [{ src: A + "study_methods-408quiz-2015/d6.svg", alt: '题图' }]
  }),
  base(35, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "主机甲通过 128 kbps 卫星链路，采用滑动窗口协议向主机乙发送数据，链路单向传播延迟为 250 ms，帧长为 1000 字节。不考虑确认帧的开销，为使链路利用率不小于 80％，帧序号的比特数至少是（ ）。",
    options: opt(["3", "4", "7", "8"]),
    answer: ["B"],
    explain: "不考虑确认帧的开销，一个帧发送完后经过一个单程传播时延到达接收方，再经过一个单程传播时延发送方收到应答，从而继续发送。要使得传输效率最大化，就是不用等确认也可以连续发送多个帧。设连续发送 n 个帧，一个帧的发送时延为 1000B/128kbps= 62.5ms。对于采用滑动窗口协议的流水线机制，我们有如下公式：链路利用率 = (n×发送时延)/(RTT+ 发送时延)。\n\n依题意，有 (n×62.5ms)/(62.5ms+250msx2)≥80%, 得 n≥7.2, 帧序号的比特数 K 需要满足\n2k≥n+1\n。从而，帧序号的比特数至少为 4。",
    tags: ["信道利用率"],
    noteId: "computer_network-datalink-flow_control"
  }),
  base(36, 'cn', 'k-cn-007', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于 CSMA/CD 协议的叙述中，错误的是（ ）。",
    options: opt(["边发送数据帧，边检测是否发生冲突", "适用于无线网络，以实现无线链路共享", "需要根据网络跨距和数据传输速率限定最小帧长", "当信号传播延迟趋近 0 时，信道利用率趋近 100％"]),
    answer: ["B"],
    explain: "CCSM/CD 适用于有线网络，而 CSMA/CA 则 广泛应用于无线局域网。其他选项关于 CSMA/CD 的描述都是正确的。",
    tags: ["CSMA/CD"],
    noteId: ""
  }),
  base(37, 'cn', 'k-cn-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于交换机的叙述中，正确的是（ ）。",
    options: opt(["以太网交换机本质上是一种多端口网桥", "通过交换机互连的一组工作站构成一个冲突域", "交换机每个端口所连网络构成一个独立的广播域", "以太网交换机可实现采用不同网络层协议的网络互联"]),
    answer: ["A"],
    explain: "从本质上说，交换机 就是一个多端口的网桥（A 正确），工作在数据链路层（因此不能实现不同网络层协议的网络互联，D 错误），交换机能经济地将网络分成小的冲突域（B 错误）。广播域属于网络层概念，只有网络层设备（如路由器）才能分割广播域（C 错误）。",
    tags: ["交换机"],
    noteId: "computer_network-datalink-dev"
  }),
  base(38, 'cn', 'k-cn-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某路由器的路由表如下表所示：\n\n目的网络下一跳接口\n\n169.96.40.0/23176.1.1.1S1\n\n169.96.40.0/25176.2.2.2S2\n\n169.96.40.0/27176.3.3.3S3\n\n0.0.0.0/0176.4.4.4S4\n\n若路由器收到一个目的地址为 169.96.40.5 的 IP 分组，则转发该 IP 分组的接口是（ ）。",
    options: opt(["S1", "S2", "S3", "S4"]),
    answer: ["C"],
    explain: "根据 最长前缀匹配，169.96.40.5 与 169.96.40.0 前 27 位匹配最长，故选 C。选项 D 为默认路由，只有当前面的所有目的网络都不能和分组的目的 IP 地址匹配时才使用。",
    tags: ["路由器", "最长前缀匹配"],
    noteId: "computer_network-network-dev"
  }),
  base(39, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "主机甲和主机乙新建一个 TCP 连接，甲的拥塞控制初始阈值为 32 KB，甲向乙始终以 MSS = 1KB 大小的段发送数据，并一直有数据发送；乙为该连接分配 16 KB 接收缓存，并对每个数据段进行确认，忽略段传输延迟。若乙收到的数据全部存入缓存，不被取走，则甲从连接建立成功时刻起，未发生超时的情况下，经过 4 个 RTT 后，甲的发送窗口是（ ）。",
    options: opt(["1 KB", "8 KB", "16 KB", "32 KB"]),
    answer: ["A"],
    explain: "发送窗口的上限值 = min{接收窗口，拥塞窗口}。4 个 RTT 后，乙收到的数据全部存入缓存，不被取走，接收窗口只剩下 1KB（16-1-2-4-8=1）缓存，使得甲的发送窗口为 1KB。",
    tags: ["TCP拥塞控制"],
    noteId: "computer_network-transport-tcp"
  }),
  base(40, 'cn', 'k-cn-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某浏览器发出的 HTTP 请求报文如下（ ）。\n`GET /index .html HTTP/1.1\nHost: www.test.edu.cn\nConnection: close\nCookie: 123456\n`\n下列叙述中，错误的是",
    options: opt(["该浏览器请求浏览 index.html", "index.html 存放在 www.test.edu.cn 上", "该浏览器请求使用持续连接", "该浏览器曾经浏览过 www.test.edu.cn"]),
    answer: ["C"],
    explain: "Connection 字段代表 连接方式，Close 表明为非持续连接方式，keep-alive 表示持续连接方式。Cookie 值是由服务器产生的，HTTP 请求报文中有 Cookie 报头表示曾经访问过 www.test.edu.cn 服务器。",
    tags: ["HTTP"],
    noteId: "computer_network-application-www"
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "用单链表保存 \nm\n 个整数，结点的结构为，且 \n∣data∣≤n\n （ \nn\n 为正整数）。现要求设计一个时间复杂度尽可能高效的算法，对于链表中 data 的绝对值相等的结点，仅保留第一次出现的结点而删除其余绝对值相等的结点。例如，若给定的单链表 head 如下：\n\n则删除结点后的 head 为：\n\n要求：\n\n(1) 给出算法的基本设计思想。\n\n(2) 使用 C 或 C++ 语言，给出单链表结点的数据类型定义。\n\n(3) 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。\n\n(4) 说明你所设计算法的时间复杂度和空间复杂度。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2015/d7.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2015/d8.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "已知含有\n5\n个顶点的图\nG\n如下图所示。\n\n请回答下列问题：\n\n(1) 写出图\nG\n的邻接矩阵 \nA\n （行、列下标均从\n0\n开始）。\n\n(2) 求 \nA2\n ，矩阵 \nA2\n 中位于 0 行 3 列元素值的含义是什么？\n\n(3) 若已知具有 \nn\n(n≥2)\n 个顶点的图的邻接矩阵为 \nB\n，则 \nBm\n(2≤m≤n)\n 中非零元素的含义是什么？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2015/d9.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "某 16 位计算机的主存按字节编址，存取单位为 16 位；采用 16 位定长指令字格式；CPU 采用单总线结构，主要部分如下图所示。\n\n图中 R0～R3 为通用寄存器；T 为暂存器；SR 为移位寄存器，可实现直送（mov）、左移一位（left）和右移一位（right）3 种操作，控制信号为 SRop，SR 的输出由信号 SRout 控制；ALU 可实现直送 A（mova）、A 加 B（add）、A 减 B（sub）、A 与 B（and）、A 或 B（or）、非 A（not）、A 加 1（inc）这 7 种操作，控制信号为 ALUop。\n\n注：已补充内总线到 MAR 的箭头和内总线到 IR 的箭头。\n\n请回答下列问题。\n\n(1) 图中哪些寄存器是程序员可见的？为何要设置暂存器 T？\n\n(2) 控制信号 ALUop 和 SRop 的位数至少各是多少？\n\n(3) 控制信号 SRout 所控制部件的名称或作用是什么？\n\n(4) 端点①～⑨中，哪些端点须连接到控制部件的输出端？\n\n(5) 为完善单总线数据通路，需要在端点①～⑨中相应的端点之间添加必要的连线。写出连线的起点和终点，以正确表示数据的流动方向。\n\n(6) 为什么二路选择器 MUX 的一个输入端是 2？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2015/d10.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "题 43 中描述的计算机，其部分指令执行过程的控制信号如题 44 图 a 所示。\n\n该机指令格式如题 44 图 b 所示，支持寄存器直接和寄存器间接两种寻址方式，寻址方式位分别为 0 和 1，通用寄存器 R0～R3 的编号分别为 0、1、2 和 3。\n\n请回答下列问题。\n\n(1) 该机的指令系统最多可定义多少条指令？\n\n(2) 假定 inc、shl 和 sub 指令的操作码分别为 01H、02H 和 03H，则以下指令对应的机器代码各是什么？\n`inc R1; // (R1)+1→R1\nshl R2, R1; // (R1)<<1→R2\nsub R3, (R1), R2; // ((R1))–(R2)→R3\n`\n(3) 假设寄存器 X 的输入和输出控制信号分别为 Xin 和 Xout，其值为 1 表示有效，为 0 表示无效（例如，PCout=1 表示 PC 内容送总线）；存储器控制信号为 MEMop，用于控制存储器的读 (read) 和写 (write) 操作。写出题 44 图 a 中标号①～⑧处的控制信号或控制信号的取值。\n\n(4) 指令 `sub R1，R3，(R2)` 和 `inc R1` 的执行阶段至少各需要多少个时钟周期？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2015/d11.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2015/d12.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "有 A、B 两人通过信箱进行辩论，每个人都从自己的信箱中取得对方的问题，将答案和向对方提出的新问题组成一个邮件放人对方的信箱中。假设 A 的信箱最多放\nM\n个邮件，B 的信箱最多放\nN\n个邮件。初始时 A 的信箱中有\nx\n个邮件 (\n0<x<M\n)，B 的的信箱中有\ny\n个邮件 (\n0<y<N\n)。辩论者每取出一个邮件，邮件数减 1。A 和 B 两人的操作过程描述如下：\n\n`\nA {\n while (true) {\n 从 A 的信箱中取出一个邮件；\n 回答问题并提出一个新问题；\n 将新邮件放入 B 的信箱；\n }\n}\n`\n\n`\nB {\n while (true) {\n 从 B 的信箱中取出一个邮件；\n 回答问题并提出一个新问题；\n 将新邮件放入 A 的信箱；\n }\n}\n`\n\n当信箱不为空时，辩论者才能从信箱中取邮件，否则等待。当信箱不满时，辩论者才能将新邮件放入信箱，否则等待。请添加必要的信号量和 P、V（或 wait、signal）操作，以实现上述过程的同步。要求写出完整的过程，并说明信号量的含义和初值。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "某计算机系统按字节编址，采用二级页表的分页存储管理方式，虚拟地址格式如下所示：\n\n页目录号（10 位）页表索引（10 位）页内偏移量（12 位）\n\n请回答下列问题。\n\n(1) 页和页框的大小各为多少字节？进程的虚拟地址空间大小为多少页？\n\n(2) 假定页目录项和页表项均占 4 个字节，则进程的页目录和页表共占多少页？要求写出计算过程。\n\n(3) 若某指令周期内访问的虚拟地址为 0100 0000H 和 0111 2048H，则进行地址转换时共访问多少个二级页表？要求说明坪由。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "某网络拓扑如题 47 图所示，其中路由器内网接口、DHCP 服务器、WWW 服务器与主机 1 均采用静态 IP 地址配置，相关地址信息见图中标注；主机 2～主机 N 通过 DHCP 服务器动态获取 IP 地址等配置信息。\n\n(1) DHCP 服务器可为主机 2～主机 N 动态分配 IP 地址的最大范围是什么？主机 2 使用 DHCP 协议获取 IP 地址的过程中，发送的封装 DHCP Discover 报文的 IP 分组的源 IP 地址和目的 IP 地址分别是什么？\n\n(2) 若主机 2 的 ARP 表为空，则该主机访问 Internet 时，发出的第一个以太网帧的目的 MAC 地址是什么？封装主机 2 发往 Internet 的 IP 分组的以太网帧的目的 MAC 地址是什么？\n\n(3) 若主机 1 的子网掩码和默认网关分别配置为 255.255.255.0 和 111.123.15.2，则该主机是否能访问 WWW 服务器？是否能访问 Internet？请说明理由。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2015/d13.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2015_408 = {
  id: P, year: Y,
  title: '2015 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2015 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2015_408.length,
  qids: questions2015_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2015',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
