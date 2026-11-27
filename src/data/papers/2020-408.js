const P = 'paper-2020-408'
const Y = 2020
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2020-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2020 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2020',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2020_408 = [
  base(1, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "将一个 10*10 对称矩阵 M 的上三角部分的元素\nmi,j(1≤i≤j≤10)\n，按列优先存入 C 语言的一维数组 N 中，元素\nm7,2\n在 N 中的下标是（ ）",
    options: opt(["15", "16", "22", "23"]),
    answer: ["C"],
    explain: "上三角矩阵 按列优先存储，先存储仅 1 个元素的第一列，再存储有 2 个元素的第二列，以此类推。加 7,2 位于左下角，对应右上角的元素为加 2, 7 , 在加 2,7 之前存有\n\n第 1 列：1\n\n第 2 列：2\n\n&mldr;&mldr;\n\n第 6 列：6\n\n第 7 列：1\n\n前面共存有 1 + 2 + 3 + 4 + 5 + 6 + 1 = 2 2 个 元 素（数组下标范围为 0〜21）, 注意数组下标\n从 0 开始，故加工 7 在数组 N 中的下标为 2 2 , 即加 7,2 在数组 N 中的下标为 22。",
    tags: ["特殊矩阵"],
    noteId: "data_structure-array-matrix"
  }),
  base(2, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对空栈 S 进行 Push 和 Pop 操作入栈序列 a,b,c,d,e 经过 Push,Push,Pop,Push,Pop,Push,Push,Pop 操作后得到的出栈序列是（  ）。",
    options: opt(["b,a,c", "b,a,e", "b,c,a", "b,c,e"]),
    answer: ["D"],
    explain: "按题意，出入栈操作的过程如下：\n\n操作 | 栈内元素 | 出栈元素\nPush | a | \nPush | a b | \nPop | a | b\nPush | a c | \nPop | a | c\nPush | a d | \nPush | a d e | \nPop | a d | e\n\n故出栈序列为 c,e。",
    tags: ["入栈出栈序列"],
    noteId: "data_structure-array-application"
  }),
  base(3, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对于任意一棵高度为 5 且有 10 个节点的二叉树，若采用顺序存储结构保存，每个结点占 1 个存储单元（仅存放结点的数据信息），则存放该二叉树需要的存储单元数量至少是（ ）。",
    options: opt(["31", "16", "15", "10"]),
    answer: ["A"],
    explain: "二叉树采用 顺序存储 时，用数组下标来表示结点之间的父子关系。对于一棵高度为 5 的二叉树，为了满足任意性，其 1~5 层的所有结点都要被存储起来，即考虑为一棵高度为 5 的满二叉树，总共需要存储单元的数量为 1 + 2 + 4 + 8 + 16 = 31。",
    tags: ["二叉树存储"],
    noteId: "data_structure-tree-btree"
  }),
  base(4, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知森林 F 及与之对应的二叉树 T，若 F 的先根遍历序列是 `a,b,c,d,e,f`，中根遍历序列是 `b,a,d,f,e,c`，则 T 的后根遍历序列是（ ）。",
    options: opt(["b,a,d,f,e,c", "b,d,f,e,c,a", "b,f,e,d,c,a", "f,e,d,c,b,a"]),
    answer: ["C"],
    explain: "本题考察的是 森林的遍历，\n森林 F 的先根遍历序列对应其二叉树 T 的先序遍历序列，森林 F 的中根遍历序列对应其二叉树 T 的中序遍历序列。即 T 的先序遍历序列为 a,b,c,d,e,f，中序遍历序列为 b,a,d,f,e,c。根据二叉树 T 的先序序列和中序序列可以唯一确定它的结构，构造过程如下：\n（图：见原题）\n可以得到二叉树 T 的后序序列为 b,f,e,d,c,a。",
    tags: ["二叉树遍历", "二叉树构建"],
    noteId: "data_structure-tree-btree"
  }),
  base(5, 'ds', 'k-ds-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列给定的关键字输入序列中，不能生成如下二叉排序树的是（ ）。",
    options: opt(["4，5，2，1，3", "4，5，1，2，3", "4，2，5，3，1", "4，2，1，3，5"]),
    answer: ["B"],
    explain: "选项 B 生成二叉排序树的过程如下，显然 B 选项错误：\n（图：见原题）",
    tags: ["二叉排序树"],
    noteId: "data_structure-tree-btree", figures: [{ src: A + "study_methods-408quiz-2020/d2.svg", alt: '题图' }]
  }),
  base(6, 'ds', 'k-ds-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "修改递归方式实现的图的深度优先搜索（DFS）算法，将输出（访问）定点信息的语句移到退出递归前（即执行输出语句后立刻退出递归）。采用修改后的算法遍历有向无环图 G，若输出结果中包含 G 中的全部顶点，则输出的顶点序列是 G 的（ ）。",
    options: opt(["拓扑有序序列", "逆拓扑有序序列", "广度优先搜索序列", "深度优先搜索序列"]),
    answer: ["B"],
    explain: "DFS 是一个递归算法，在遍历过程中，先访问的顶点被压入栈底。设在图中有顶点\nvi\n，它有后继顶点\nvj\n，即存在边<\nvi\n,\nvj\n>。根据 DFS 的规则，\nvi\n入栈后，必先遍历完其后继顶点后\nvj\n才会出栈，也就是说\nvi\n会在\nvj\n之后出栈，在如题所指的过程中，\nvi\n在\nvj\n后打印。由于\nvi\n和\nvj\n具有任意性，从上面的规律可以看出，输出顶点的序列是逆拓扑有序序列。",
    tags: ["图的遍历"],
    noteId: "data_structure-graph-operation"
  }),
  base(7, 'ds', 'k-ds-014', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知无向图 G 如下所示，使用克鲁斯卡尔（Kruskal）算法求图 G 的最小生成树，加入到最小生成树中的边依次是（ ）。",
    options: opt(["(b,f)(b,d)(a,e)(c,e)(b,e)", "(b,f)(b,d)(b,e)(a,e)(e,c)", "(a,e)(b,e)(c,e)(b,d)(b,f)", "(a,e)(c,e)(b,e)(b,f)(b,d)"]),
    answer: ["A"],
    explain: "kruskal 算法 依次将当前 不会导致环路的最短边 加入最小生成树中：\n（图：见原题）",
    tags: ["最小生成树"],
    noteId: "data_structure-graph-operation", figures: [{ src: A + "study_methods-408quiz-2020/d4.svg", alt: '题图' }]
  }),
  base(8, 'ds', 'k-ds-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若使 AOE 网估算工程进度则下列叙述中正确的是（ ）。",
    options: opt(["关键路径是从原点到汇点边数最多的一条路径", "关键路径是从原点到汇点路径长度最长的路径", "增加任一关键活动的时间不会延长工程的工期", "缩短任一关键活动的时间将会缩短工程的工期"]),
    answer: ["B"],
    explain: "关键路径 是指权值之和最大而非边数最多的路径，故选项 A 错误。选项 B 正确，是关键路径的概念。无论是存在一条还是存在多条关键路径，增加任一关键活动的时间都会延长工程的工期，因为关键路径始终是权值之和最大的那条路径，选项 C 错误。仅有一条关键路径时，减少关键活动的时间会缩短工程的工期；存在多条关键路径时，缩短一条关键活动的时间不一定会缩短工程的工期，缩短了路径长度的那条关键路径不一定还是关键路径，选项 D 错误。",
    tags: ["关键路径"],
    noteId: "data_structure-graph-operation"
  }),
  base(9, 'ds', 'k-ds-022', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于大根堆（至少含 2 个元素）的叙述中正确的是（ ）。\n\nI. 可以将堆看成一颗完全二叉树；II. 可采用顺序存储方式保存堆；\n\nIII. 可以将堆看成一棵二叉排序树；IV. 堆中的次大值一定在根的下一层。",
    options: opt(["仅 I，II", "仅 II，III", "仅 I，II，IV", "仅 I，III，IV"]),
    answer: ["C"],
    explain: "堆 是一棵完全树，采用一维数组存储，故 I 正确，II 正确。大根堆 只要求根结点值大于左右孩子值，并不要求左右孩子值有序，III 错误。堆的定义是递归的，所以其左右子树也是大根堆，所以堆的次大值一定是其左孩子或右孩子，IV 正确。",
    tags: ["堆的概念"],
    noteId: "data_structure-sort-internal"
  }),
  base(10, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "依次将关键字 5, 6, 9, 13, 8, 2, 12, 15 插入初始为空的 4 阶 B 树后, 根节点中包含的关键字是（ ）。",
    options: opt(["8", "6, 9", "8, 13", "9, 12"]),
    answer: ["B"],
    explain: "一 个 4 阶 B 树 的任意非叶结点至多含有加 4-1=3 个关键字，在关键字依次插入的过程中，会导致结点的不断分裂，插入过程如下所示。\n（图：见原题）\n得到根结点包含的关键字为 6, 9。",
    tags: ["B树"],
    noteId: "data_structure-search-tree"
  }),
  base(11, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对大部分元素已有序的数组进行排序时，直接插入排序比简单选择排序效率更高，其原因是（ ）。\n\nI. 直接插入排序过程中元素之间的比较次数更少\n\nII. 直接插入排序过程中所需要的辅助空间更少\n\nIII. 直接插入排序过程中元素的移动次数更少",
    options: opt(["仅 I", "仅 III", "仅 I，II", "仅 I，II 和 III"]),
    answer: ["A"],
    explain: "考虑较极端的情况，对于有序数组，直接插入排序 的比较次数为\nn−1\n，简单选择排序的比较次数始终为\n1+2+⋯+n−1=n(n−1)/2\n，I 正确。两种排序方法的辅助空间都是\nO(1)\n，无差别，II 错误。初始有序时，移动次数均为 0；对于通常情况，直接插入排序每趟插入都\n需要依次向后挪位，而简单选择排序只需与找到的最小元素交换位置，后者的移动次数少很多，III 错误。",
    tags: ["排序算法", "插入排序"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-017', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列给出的部件中其位数（宽度）一定与机器字长相同的是（ ）。\n\nI、ALU\nII、指令寄存器\nIII、通用寄存器\nIV、浮点寄存器",
    options: opt(["Ⅰ，Ⅱ", "Ⅰ，Ⅲ", "Ⅱ，Ⅲ", "Ⅱ，Ⅲ，IV"]),
    answer: ["B"],
    explain: "机器字长 是指 CPU 内部用于整数运算的数据通路的宽度。CPU 内部数据通路是指 CPU 内部的数据流经的路径及路径上的部件，主要是 CPU 内部进行数据运算、存储和传送的部件，这些部件的宽度基本上要一致才能相互匹配。因此，机器字长等于 CPU 内部用于整数运算的运算器位数和通用寄存器宽度。\n\nALU（算术逻辑单元）\n\n功能：执行加减乘除、位运算等。\n\n分析：ALU 的宽度必须和机器字长一致，才能对一个机器字进行运算。\n\n✅ 一定与机器字长相同\n\n指令寄存器（IR）\n\n功能：存放当前正在执行的指令。\n\n分析：\n指令寄存器的宽度取决于指令长度，而不是机器字长。\n\n指令长度可能为 16 位、32 位、64 位等，不一定等于机器字长。\n\n❌ 不一定相同\n\n通用寄存器\n\n功能：存放数据、地址、中间计算结果。\n\n分析：通用寄存器通常与机器字长相等，以便完整存储一个字。\n\n✅ 通常与机器字长相同\n\n浮点寄存器\n\n功能：专门存储浮点数（如 IEEE 754 格式）\n\n分析：\n浮点寄存器的宽度通常和浮点数格式有关（如 32 位单精度，64 位双精度）。\n\n这与机器字长无固定关系，有的机器字长是 32 位，但支持 64 位浮点数。\n\n❌ 不一定相同\n\n所以 I、III 正确，答案选择 B。",
    tags: ["寄存器类型", "计算机性能指标"],
    noteId: "constitution_principle-cpu-structure"
  }),
  base(13, 'co', 'k-co-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知带符号整数用补码表示，float 型数据用 IEEE 754 标准表示，假定变量 x 的类型只能是 int 或 float。当 x 的机器数为 C800 0000H 时，x 的值可能是（ ）。",
    options: opt(["−7×227", "−216", "217", "25×227"]),
    answer: ["A"],
    explain: "C800 0000H = 1100 1000 0000 0000 0000 0000 0000 0000\n\n将其转换为对应的 float 或 int：\n\n为 float 型时，尾数隐藏最高位 1 ,数符为 1 表示负数，阶码\n10010000=27+24=128+16\n,\n再减去偏置值 127 得到 17 ,算出 x 值为\n−217\n。\n\n为 int 型时，带符号补码，为负数，数值部分取反加 1 ,得 011 1000 0000 0000 0000 0000\n0000 0000 ,算出 x 值为\n−7×227\n。",
    tags: ["补码", "IEEE浮点数表示"],
    noteId: "constitution_principle-representation-integer"
  }),
  base(14, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在按字节编址，采用小端方式的 32 位计算机中，按边界对齐方式为以下 C 语言结构型变量 a 分配存储空间。\n\n`struct record {\n short x1;\n int x2;\n} a;\n`\n\n若 `a` 的首地址为 2020FE00H，a 的成员变量 `x2` 的机器数为 12340000H，则其中 34H 所在存储单元的地址是（ ）。",
    options: opt(["2020FE03H；", "2020FE04H；", "2020FE05H；", "2020FE06H；"]),
    answer: ["D"],
    explain: "在 32 位计算机中，按字节编址，根据 小端序 和按 边界对齐 的定义，给出变量 a 的存放方式如下：\n（图：见原题）",
    tags: ["大小端", "数据对齐"],
    noteId: "constitution_principle-instruction-alignment"
  }),
  base(15, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于 TLB 和 Cache 的叙述中，错误的是（ ）。",
    options: opt(["命中率都与程序局部性有关", "缺失后都需要去访问主存", "缺失处理都可以由硬件实现", "都由 DRAM 存储器组成"]),
    answer: ["D"],
    explain: "Cache 由 SRAM 组成；TLB 通常由相联存储器组成，也可由 SRAM 组成。DRAM 需要不断刷新，性能偏低，不适合组成 TLB 和 Cache 选项 A、B 和 C 都是 TLB 和 Cache 的特点。",
    tags: ["cache概念", "TLB"],
    noteId: "constitution_principle-storage-cache"
  }),
  base(16, 'co', 'k-co-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机采用 16 位定长指令字格式，操作码位数和寻址方式位数固定，指令系统有 48 条指令，支持直接、间接、立即、相对 4 种寻址方式，单地址指令中直接寻址方式可寻址范围是（ ）。",
    options: opt(["0 ~ 255；", "0 ~ 1023；", "-128 ~ 127；", "-512 ~ 511；"]),
    answer: ["A"],
    explain: "参考 指令格式，48 条指令需要 6 位操作码字段 (\n25<48<26\n), 4 种寻址方式需要 2 位寻址特征位 (\n4=22\n),\n还剩 16 - 6 - 2 = 8 位作为地址码，故直接寻址范围为 0 ~ 255。注意，主存地址不能为负。\n\n🚫 常见误区说明：\n\n在 相对寻址 中，可能会有有符号偏移，比如 `-128 ~ 127` 或 `-512 ~ 511`，那是针对偏移字段的符号解释；\n\n直接寻址不需要符号位，它就是一个无符号绝对地址。",
    tags: ["指令寻址方式", "指令格式"],
    noteId: "constitution_principle-instruction-format"
  }),
  base(17, 'co', 'k-co-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列给出的处理器类型中理想情况下 CPI 为 1 的是（ ）。\n\nI、单周期 CPU；\nII、多周期 CPU；\nIII、基本流水线 CPU；\nIV、超标量流水线 CPU",
    options: opt(["I、II；", "I、III;", "II、IV;", "III、IV."]),
    answer: ["B"],
    explain: "CPI 表示执行指令所需的时钟周期数。对于一个程序或一台机器来说，其 CPI 指执行该程序或机器指令集中的所有指令所需的平均时钟周期数。\n\n对于单周期 CPU，令指令周期 = 时钟周期，CPI=1，I 正确。\n\n对于多周期 CPU，CPU 的执行过程分成几个阶段，每个阶段用一个时钟去完成，每种指令所用的时钟数可以不同，CPI > 1 , II 错误。\n\n对于基本流水线 CPU，让每个时钟周期流出一条指令，CPI = 1, III 正确。\n\n超标量流水线 CPU 在每个时钟周期内并发执行多条独立的指令，每个时钟周期流出多条指令，CPI < 1, IV 错误。",
    tags: ["流水线概念", "单周期处理器"],
    noteId: "constitution_principle-cpu-pipeline"
  }),
  base(18, 'co', 'k-co-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于“自陷”（Trap，也称陷阱）的叙述中错误的是（ ）。",
    options: opt(["自陷是通过陷阱指令预先设定的一类外部中断事件；", "自陷可用于实现程序调试时的断点设置和单步跟踪；", "自陷发生后 CPU 将转去执行操作系统内核相应程序；", "自陷处理完成后返回到陷阱指令的下一条指令执行。"]),
    answer: ["A"],
    explain: "自陷 是一种内部异常，A 错误。在 8086 中，用于程序调试的“断点设置”功能是通过“自陷”方式实现的，选 项 B 正确。执行到自陷指令时，无条件或有条件地自动调出操作系统内核程序进行执行，选 项 C 正确。CPU 执 行“陷阱指令”后，会自动地根据不同“陷阱”\n类型进行相应的处理，然后返回到“陷阱指令”的下一条指令执行，选 项 D 正确。",
    tags: ["陷阱指令"],
    noteId: "constitution_principle-instruction-instruction_ops"
  }),
  base(19, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "QPI 总线是一种点对点全工双同步串行总线，总线上的设备可同时接收和发送信息，每个方向可同时传输 20 位信息（16 位数据 + 4 位校验位），每个 QPI 数据包有 80 位信息，分 2 个时钟周期传送，每个时钟周期传递 2 次，因此 QPI 总线带宽为每秒传送次数×2B×2。若 QPI 时钟频率为 2.4GHz，则总线带宽为（ ）。",
    options: opt(["4.8", "9.6", "19.2", "38.4（单位 GB/s）"]),
    answer: ["C"],
    explain: "每个时钟周期传送 2 次，故每秒传送的次数= 时钟频率 x2 = 2.4Gx2/s。\n\n总线带宽 = 每秒传送次数×2B×2 = 2.4G×2×2B×2/s=19.2GB/s。\n\n题中已给出总线带宽公式，降低了难度。公式中的“x2B”是因为每次传输 16 位数据，“x2”\n\n是因为采用点对点全双工总线，两个方向可同时传输信息。",
    tags: ["总线指标"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(20, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列事件中属于外部中断事件的是（ ）。\n\nI、访存时缺页；\n\nII、定时器到时；\n\nIII、网络数据包到达；",
    options: opt(["仅 I、II", "仅 I、III", "仅 II、III", "I、II、III"]),
    answer: ["C"],
    explain: "访存时缺页属于 内部异常，I 错误；定时器到时描述的是时钟中断，属于 外部中断，II 正确；网络数据包到达描述的是 CPU 执行指令以外的事件，属于外部中断，III 正确。",
    tags: ["异常和中断", "中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(21, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "外部中断包括不可屏蔽中断（NMI）和可屏蔽中断，下列关于外部中断的叙述中错误的是（ ）。",
    options: opt(["CPU 处于关中断状态时也能响应 NMI 请求；", "一旦可屏蔽中断请求信号有效，CPU 将立即响应；", "不可屏蔽中断的优先级比可屏蔽中断的优先级高；", "可通过中断屏蔽字改变可屏蔽中断的处理优先级。"]),
    answer: ["B"],
    explain: "由 CPU 内部产生的异常称为 内中断，内中断都是 不可屏蔽中断。通过中断请求线 INTR 和 NMI 从 CPU 外部发出的中断请求为外中断，通过 INTR 信号线发出的外中断是可屏蔽中断，而通过 NMI 信号线发出的是不可屏蔽中断。不可屏蔽中断不受中断标志位的影响，使在关中断的情况下也会被响应，选项 A 正确。\n\n不可屏蔽中断的处理优先级最高，任何时候只要发生不可屏蔽中断，都要中止现行程序的执行，转到不可屏蔽中断处理程序执行，选项 C 正确。\n\n可屏蔽中断 可以通过中断屏蔽字来设定优先级，选项 D 正确。\n\nCPU 响应中断需要满足 3 个条件：① 中断源有中断请求；② CPU 允许中断 及开中断；③ 一条指令执行完毕，且没有更紧迫的任务。故选项 B 错误。",
    tags: ["中断屏蔽", "异常和中断"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(22, 'co', 'k-co-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若设备采用周期挪用 DMA 方式进行输入输出，每次 DMA 传送的数据块大小为 512 字节，相应的 I/O 接口中有一个 32 位数数据缓冲寄存器，对于数据输入过程，下列叙述中错误的是（ ）。",
    options: opt(["每准备好 32 位数据，DMA 控制器就发出一次总线请求；", "相对于 CPU，DMA 控制器的总线使用权的优先级更高；", "在整个数据块的传送过过程中，CPU 不可以访问主存储器；", "数据块传送结束时，会产生“DMA 传送结束”的中断请求。"]),
    answer: ["C"],
    explain: "题目考查 周期挪用法 的基本概念和过程。\n\n我们先简单回顾一下 周期挪用 DMA 的基本特点：\n\n每当 I/O 设备准备好一个字（比如 32 位）数据 时，就向 DMA 控制器请求一次传送；\n\nDMA 控制器申请一次总线使用权，占用一个内存周期，进行数据的读/写；\n\n每次传输只占用一个周期，不会长时间占用总线；\n\nCPU 运行被打断（因为 DMA 抢占了总线），但只影响一个周期；\n\n数据块传送完后会产生一次 DMA 中断，通知 CPU 处理。\n\n各选项逐一分析：\n\nA 正确。题中说数据缓冲寄存器是 32 位，那么每准备好 32 位，就要进行一次 DMA 请求。这符合周期挪用方式的基本操作流程。\n\nB 正确。周期挪用的机制就是 DMA 控制器能优先抢占主存总线，在不影响整个系统效率的前提下完成数据传输。\n\nC 错误。这是正确答案。\n\n在周期挪用方式下，CPU 是可以访问主存的，只是当 DMA 传输发生的那个特定周期，CPU 被暂停一个周期，因为 DMA 暂时挪用了总线资源。\n\n也就是说，CPU 的访问会被“打断一下”，而不是整个传输过程中都无法访问主存。\n\nD 正确。DMA 会在一整个数据块（比如 512 字节）传送完毕后，产生一次中断，通知 CPU“数据传送完成”，此时 CPU 可以进行下一步操作（如处理数据等）。\n\n所以正确答案选择 C，因为在周期挪用 DMA 方式下，CPU 在数据传送过程中可以访问主存，只是会偶尔被暂停一个周期，不是整个过程都被阻止。",
    tags: ["DMA"],
    noteId: "constitution_principle-bus-io"
  }),
  base(23, 'os', 'k-os-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若多个进程共享同一个文件 F，则下列叙述中，正确的是（ ）。",
    options: opt(["各进程只能用“读”方式打开文件 F", "在系统打开文件表中仅有一个表项包含 F 的属性", "各进程的用户打开文件表中关于 F 的表项内容相同", "进程关闭 F 时，系统删除 F 在系统打开文件表中的表项"]),
    answer: ["B"],
    explain: "多个进程可同时以“读”或“写”方式打开文件，操作系统并不保证写操作的互斥性，进程可通过系统调用对文件加锁，保证互斥写（读者 - 写者问题），选项 A 错误。\n\n整个系统只有一个 系统文件打开表，同一个文件打开多次只需改变引用计数，选项 B 正确。\n\n用户进程的打开文件表关于同一个文件不一定相同，例如读写指针位置不一定相同，选项 C 错误。\n\n进程关闭文件时，文件的引用计数减 1 , 引用计数变为 0 时才删除系统打开文件表中的表项，选项 D 错误。",
    tags: ["进程文件管理"],
    noteId: "operating_system-files-file"
  }),
  base(24, 'os', 'k-os-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，支持文件长度可变、随机访问的磁盘存储空间分配方式是（ ）。",
    options: opt(["索引分配", "链接分配", "连续分配", "动态分区分配"]),
    answer: ["A"],
    explain: "索引分配 支持变长的文件，同时可以随机访问文件的指定数据块，选项 A 正确。链接分配\n不支持随机访问，需要依靠指针依次访问，选项 B 错误。连续分配的文件长度固定，不支持\n可变文件长度（连续分配的文件长度虽然也可变，但是需大量移动数据，代价较大，相比之\n下不太合适），选项 C 错误。动态分区分配是内存管理方式，不是磁盘空间的管理方式，选\n项 D 错误。",
    tags: ["文件物理结构"],
    noteId: "operating_system-files-file"
  }),
  base(25, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列与中断相关的操作中，由操作系统完成的是（）。\n\nⅠ、保存被中断程序的中断点\n\nⅡ、提供中断服务\n\nⅢ、初始化中断向量表\n\nⅣ、保存中断屏蔽字",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅱ、Ⅳ", "仅Ⅲ、Ⅳ", "仅Ⅱ、Ⅲ、Ⅳ"]),
    answer: ["D"],
    explain: "当 CPU 检测到中断信号后，由硬件自动保存被中断程序的断点（即程序计数器 PC）, I 错\n误。之后，硬件找到该中断信号对应的中断向量，中断向量指明中断服务程序入口地址（各\n中断向量统一存放在中断向量表中，该表由操作系统初始化，Ⅲ 正确）。接下来开始执行\n中断服务程序，保存 PSW、保存中断屏蔽字、保存各通用寄存器的值，并提供与中断信号\n对应的中断服务，中断服务程序属于操作系统内核，Ⅱ 和 Ⅳ 正确。",
    tags: ["中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(26, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列与进程调度有关的因素中，在设计多级反馈队列调度算法时需要考虑的是（ ）。\n\nⅠ. 就绪队列的数量\n\nⅡ. 就绪队列的优先级\n\nⅢ. 各就绪队列的调度算法\n\nⅣ. 进程在就绪队列间的迁移条件",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅲ、Ⅳ", "仅Ⅱ、Ⅲ、Ⅳ", "Ⅰ、Ⅱ、Ⅲ和Ⅳ"]),
    answer: ["D"],
    explain: "多级反馈队列 调度算法需要综合考虑优先级数量、优先级之间的转换规则等，就绪队列的\n数量会影响长进程的最终完成时间，I 正确；就绪队列的优先级会影响进程执行的顺序，II\n正确；各就绪队列的调度算法会影响各队列中进程的调度顺序，m 正确；进程在就绪队列\n中的迁移条件会影响各进程在各队列中的执行时间，IV 正确。",
    tags: ["处理机调度算法"],
    noteId: "operating_system-process-scheduling"
  }),
  base(27, 'os', 'k-os-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某系统中有 A、B 两类资源各 6 个，t 时刻资源分配及需求情况如下表所示。\n\n进程A 已分配数量B 已分配数量A 需求总量B 需求总量\n\nP12344\n\nP22131\n\nP31234\n\nt 时刻安全性检测结果是（ ）。",
    options: opt(["存在安全序列 P1、P2、P3", "存在安全序列 P2、P1、P3", "存在安全序列 P2、P3、P1", "不存在安全序列"]),
    answer: ["B"],
    explain: "首先求出 需求矩阵：\n由 Allocation 得知当前 Available 为 (1,0)。由需求矩阵可知，初始只能满足 P2 的需求，选\n项 A 错误。P2 释放资源后 Available 变为 (3,1)，此时仅能满足 P1 的需求，选 项 C 错误。\nP1 释放资源后 Available 变为 (5,4)，可以满足 P 3 的需求，得到的安全序列为 P2, Pl, P3,\n选项 B 正确，选项 D 错误。",
    tags: ["银行家算法"],
    noteId: "operating_system-process-deadlock"
  }),
  base(28, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列因素中，影响请求分页系统有效（平均）访存时间的是（ ）。\n\nⅠ. 缺页率\n\nⅡ. 磁盘读写时间\n\nⅢ. 内存访问时间\n\nⅣ. 执行缺页处理程序的 CPU 时间",
    options: opt(["仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅳ", "仅Ⅰ、Ⅲ、Ⅳ", "Ⅰ、Ⅱ、Ⅲ和Ⅳ"]),
    answer: ["D"],
    explain: "I 影响缺页中断的频率，缺页率越高，平均访存时间越长；Ⅱ 和 Ⅳ 影响缺页中断的处理时\n间，中断处理时间越长，平均访存时间越长；皿影响访问页表和访问目标物理地址的时间，\n故Ⅰ、Ⅱ、Ⅲ 和Ⅳ 均正确。",
    tags: ["访存过程"],
    noteId: "constitution_principle-storage-virtual"
  }),
  base(29, 'os', 'k-os-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于父进程与子进程的叙述中，错误的是（ ）。",
    options: opt(["父进程与子进程可以并发执行", "父进程与子进程共享虚拟地址空间", "父进程与子进程有不同的进程控制块", "父进程与子进程不能同时使用同一临界资源"]),
    answer: ["B"],
    explain: "父进程与子进程 当然可以并发执行，选项 A 正确。父进程可与子进程共享一部分资源，但\n不能共享虚拟地址空间，在创建子进程时，会为子进程分配资源，如虚拟地址空间等，选\n项 B 错误。临界资源一次只能为一个进程所用，选项 D 正确。进程控制块 PCB 是进程存\n在的唯一标志，每个进程都有自己的 PCB，选项 C 正确。",
    tags: ["进程概念"],
    noteId: "operating_system-process-process_thread"
  }),
  base(30, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对于具备设备独立性的系统，下列叙述中，错误的是（ ）。",
    options: opt(["可以使用文件名访问物理设备", "用户程序使用逻辑设备名访问物理设备", "需要建立逻辑设备与物理设备之间的映射关系", "更换物理设备后必须修改访问该设备的应用程序"]),
    answer: ["D"],
    explain: "设备可视为特殊文件，选项 A 正确。用户使用 逻辑设备名 来访问物理文件，有利于设备独\n立性，选项 B 正确。通过逻辑设备名访问物理设备时，需要建立逻辑设备和物理设备之间\n的 映射关系，选项 C 正确。应用程序按逻辑设备名访问设备，再经驱动程序的处理来控制物理设备，若更换物理设备，则只需更换驱动程序，而无须修改应用程序，选项 D 错误。",
    tags: ["设备分配和回收"],
    noteId: "operating_system-io_device-management"
  }),
  base(31, 'os', 'k-os-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某文件系统的目录项由文件名和索引结点号构成。若每个目录项长度为 64 字节，其中 4 字节存放索引结点号，60 字节存放文件名。文件名由小写英文字母构成，则该文件系统能创建的文件数量的上限为（ ）。",
    options: opt(["226", "232", "260", "264"]),
    answer: ["B"],
    explain: "在总长为 64 字节的目录项中，索引结点占 4 字节，即 32 位。不同目录下的文件的文件名可以相同，所以在考虑系统创建最多文件数量时，只需考虑索引结点的个数，即创建文件数量上限 = 索引结点数量上限。整个系统中最多存储\n232\n个索引结点，因此整个系统最多可以表示\n232\n个文件，选项 B 正确。",
    tags: ["目录", "inode"],
    noteId: "operating_system-files-dir"
  }),
  base(32, 'os', 'k-os-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列准则中，实现临界区互斥机制必须遵循的是（ ）。\n\nⅠ、两个进程不能同时进入临界区\n\nⅡ、允许进程访问空闲的临界资源\n\nⅢ、进程等待进入临界区的时间是有限的\n\nⅣ、不能进入临界区的执行态进程立即放弃 CPU",
    options: opt(["仅Ⅰ、Ⅳ", "仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅱ、Ⅲ", "仅Ⅰ、Ⅲ、Ⅳ"]),
    answer: ["C"],
    explain: "实现临界区互斥需满足多个准则。“忙则等待”准则，即两个进程不能同时访问临界区，Ⅰ\n正确。 “空闲让进”准则，若临界区空闲，则允许其他进程访问，Ⅱ 正确。 “有限等待”\n准则，即进程应该在有限时间内访问临界区，Ⅲ 正确。Ⅰ、Ⅱ 和 Ⅲ 是互斥机制必须遵循的\n原则。Ⅳ 是“让权等待”准则，不一定非得实现，如皮特森算法。",
    tags: ["同步原则"],
    noteId: "operating_system-process-sync"
  }),
  base(33, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下图描述的协议要素是 (  )。\n\nⅠ、语法；Ⅱ、语义；Ⅲ、时序",
    options: opt(["仅 Ⅰ；", "仅 Ⅱ；", "仅 Ⅲ；", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["C"],
    explain: "本题考查 网络协议要素。协议 由语法、语义和时序（又称同步）三部分组成：\n\n语法 规定了通信双方彼此“如何讲”，即规定了传输数据的格式。\n\n语义 规定了通信双方彼此“讲什么”，规定了所要完成的功能，如通信双方要发出什么控制信息、执行的动作和返回的应答。\n\n时序 规定了信息交流的次序。\n\n由图可知发送方与接收方依次交换信息，体现了协议三要素中的时序要素。",
    tags: ["网络协议要素"],
    noteId: "computer_network-overall-protocol", figures: [{ src: A + "study_methods-408quiz-2020/d8.svg", alt: '题图' }]
  }),
  base(34, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于虚电路网络的叙述中错误的是（ ）。",
    options: opt(["可以确保数据分组传输顺序；", "需要为每条虚电路预分配带宽；", "建立虚电路时需要进行路由选择；", "依据虚电路号（VCID）进行数据分组 转发。"]),
    answer: ["B"],
    explain: "虚电路 服务需要有建立连接过程，每个分组使用短的虚电路号，属于同一条虚电路的分组\n按照同一路由进行转发，分组到达终点的顺序与发送顺序相同，可以保证有序传输，不需\n要为每条虚电路预分配带宽。",
    tags: ["数据报和虚电路"],
    noteId: "computer_network-physical-switching"
  }),
  base(35, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下图所示的网络冲突域和广播域的个数分别是（ ）。",
    options: opt(["2，2；", "2，4；", "4，2；", "4，4；"]),
    answer: ["C"],
    explain: "参考网络设备总结：\n网络层设备路由器可以隔离广播域和冲突域；链路层设备普通交换机只能隔离冲突域；物\n理层设备集线器、中继器既不能隔离冲突域又不能隔离广播域。因此，题中共有 2 个广播\n域、4 个冲突域。",
    tags: ["网络设备"],
    noteId: "computer_network-overall-dev", figures: [{ src: A + "study_methods-408quiz-2020/d9.svg", alt: '题图' }]
  }),
  base(36, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设主机采用停等协议向主机乙发送数据帧，数据帧长与确认帧长均为 1000B。数据传输速率是 10kbps，单项传播延时是 200ms。则甲的最大信道利用率（ ）。",
    options: opt(["80%；", "66.7%；", "44.4%；", "40%"]),
    answer: ["D"],
    explain: "发送数据帧和确认帧的时间均为 t= 1000x8b/10kbps = 800ms。\n\n发送周期 T = 800ms + 200ms + 800ms + 200ms = 2000ms。\n\n信道利用率 = t/T x 100% = 800/2000x100% = 40%。",
    tags: ["ARQ协议", "信道利用率"],
    noteId: "computer_network-datalink-flow_control"
  }),
  base(37, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某 IEEE 802.11 无线局域网中主机 H 与 AP 之间发送或接收 CSMA/CA 帧的过程如下图所示，在 H 或 AP 发送帧前所等待的帧间间隔时间（IFS）中最长的是（ ）。",
    options: opt(["IFS1;", "IFS2;", "IFS3;", "IFS4；"]),
    answer: ["A"],
    explain: "为了尽量避免碰撞，IEEE 802.11 规定，所有站在完成发送后，必须等待一段很短的时间（继续\n监听）才能发送下一帧。这段时间称为帧间间隔（InterFrame Space, IFS）。帧间间隔的长\n短取决于该站要发送的帧的类型。IEEE 802.11 使 用 3 种帧间间隔：\n\nDIFS（分布式协调 IFS）：最长的 IFS , 优先级最低，用于异步帧竞争访问的时延。\n\nPIFS（点协调 IFS）：中等长度的 IFS , 优先级居中，在 PC F 操作中使用。\n\nSIFS（短 IFS）：最短的 IFS , 优先级最高，用于需要立即响应的操作。\n\n网络中的控制帧及所接收数据的确认帧都采用 SIFS 作为发送之前的等待时延。当结点要发\n送数据帧时，载波监听到信道空闲时，需等待 DIFS 后发送 RTS 预约信道，图中 IFS1 对应\n的是帧间间隔 DIFS，时间最长，图中 IFS2、IFS3、IFS4 对应 SIFS。",
    tags: ["CSMA/CA"],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2020/d10.svg", alt: '题图' }]
  }),
  base(38, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若主机甲与主机乙已建立一条 TCP 连接，最大段长（MSS）为 1KB，往返时间（RTT）为 2ms，则在不出现拥塞的前提下，拥塞窗口从 8KB 增长到 32KB 所需的最长时间是：",
    options: opt(["4ms；", "8ms；", "24ms;", "48ms；"]),
    answer: ["D"],
    explain: "由于慢开始门限 ssthresh 可以根据需求设置，为了求拥塞窗口从 8KB 增长到 32KB 所需的最长时间，可以假定慢开始门限小于等于 8KB，只要不出现拥塞，拥塞窗口就都是加法增大，每经历一个传输轮次（RTT），拥塞窗口逐次加 1，所需最长时间为 (32-8)x2ms=48ms。",
    tags: ["TCP拥塞控制"],
    noteId: "computer_network-transport-tcp"
  }),
  base(39, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若主机甲与主机乙建立 TCP 连接时发送的 SYN 段中的序号为 1000，在断开连接时，甲发送给乙的 FIN 段中的序号为 5001，则在无任何重传的情况下，甲向乙已经发送的应用层数据的字节数为：",
    options: opt(["4002；", "4001；", "4000；", "3999；"]),
    answer: ["C"],
    explain: "甲与乙建立 TCP 连接时发送的 SYN 段中的序号为 1000，则在数据传输阶段所用的起始序号为 1001；断开连接时，甲发送给乙的 FIN 段中的序号为 5001，在无任何重传的情况下，甲向乙已经发送的应用层数据的字节数为 5001-1001=4000。",
    tags: ["TCP三次握手", "TCP四次挥手"],
    noteId: "computer_network-transport-tcp"
  }),
  base(40, 'cn', 'k-cn-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设下图所示网络中的本地域名服务器只提供递归查询服务，其他域名的服务器均只提供迭代查询服务；局域网内主机访问 Internet 上各服务器的往返时间（RTT）均为 10ms，忽略其他各种时延，若主机 H 通过超链接 http://www.abc.com/index.html，请求浏览纯文本 Web 页 index.html，则从点击 超链接开始到浏览器接收到 index.html 页面为止，所需最短、最长时间分别是：",
    options: opt(["10ms，40ms；", "10ms，50ms；", "20ms，40ms；", "20ms，50ms;"]),
    answer: ["D"],
    explain: "题中 RTT 均为局域网内主机（主机 H、本地域名服务器）访 问 Internet 上各服务器的往返时间，且忽略其他时延，因此主机 H 向本地域名服务器的查询时延忽略不计。\n\n最短时间：本地主机中有该域名到 IP 地址对应的记录，因此不需要 DNS 查询时延，直接和 www.abc.com 服务器建立 TCP 连接再进行资源访问，TCP 连接建立需要 1 个 RTT，接着发送访问请求并收到服务器资源响应需要 1 个 RTT，共计 2 个 RTT，即 20ms；\n\n最长时间：本地主机 递归查询 本地域名服务器（延时忽略），本地服务器依次迭代查询根域名服务器、com 顶级域名服务器、abc.com 域名服务器，共 3 个 RTT，查询到 IP 地址后，将该映射返回给主机 H，主机 H 和 www.abc.com 服务器建立 TCP 连接再进行资源访问，共 2 个 RTT，因此最长时间需要 3+2=5 个 RTT，即 50ms。",
    tags: ["DNS"],
    noteId: "computer_network-application-dns", figures: [{ src: A + "study_methods-408quiz-2020/d11.svg", alt: '题图' }]
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "定义三元组\n(a,b,c)\n（\na,b,c\n均为正数）的距离\nD=∣a−b∣+∣b−c∣+∣c−a∣\n。给定\n3\n个非空整数集合\nS1,S2,S3\n，按升序分别存储在\n3\n个数组中。请设计一个尽可能高效的算法，计算并输出所有可能的三元组\n(a,b,c)\n（\na∈S1,b∈S2,c∈S3\n）中的最小距离。例如\nS1={−1,0,9},S2={−25,−10,10,11},S3={2,9,17,30,41}\n。则最小距离为\n2\n，相应的三元组为\n(9,10,9)\n。\n\n要求：\n\n（1）给出算法的基本设计思想；\n\n（2）根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释；\n\n（3）说明你所设计算法的时间复杂度和空间复杂度",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "任一个字符的编码都不是其它字符编码的前缀，则称这种编码具有前缀特性。现有某字符集（字符个数≥2）的不等长编码，每个字符的编码均为二进制的 0、1 序列，最长为 L 位，且具有前缀特性。请回答下列问题：\n\n⑴ 哪种数据结构适宜保存上述具有前缀特性的不等长编码？\n\n⑵ 基于你所设计的数据结构，简述从 0/1 串到字符串的译码过程。\n\n⑶ 简述判定某字符集的不等长编码是否具有前缀特性的过程。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "有实现\nx×y\n的两个 C 语言函数如下：\n\n`unsigned umul (unsigned x, unsigned y) { return x*y; }\nint imul (int x, int y) { return x * y; }\n`\n\n假定某计算机 M 中 ALU 只能进行加减运算和逻辑运算。请回答下列问题。\n\n(1) 若 M 的指令系统中没有乘法指令，但有加法、减法和移位等指令，则在 M 上也能实现上述两个函数中的乘法运算，为什么？\n\n(2) 若 M 的指令系统中有乘法指令，则基于 ALU、移位器、寄存器以及相应控制逻辑实现乘法指令时，控制逻辑的作用是什么？\n\n(3) 针对以下三种情况：\n①没有乘法指令；\n②有使用 ALU 和移位器实现的乘法指令；\n③有使用阵列乘法器实现的乘法指令，\n函数 `umul()` 在哪种情况下执行时间最长？哪种情况下执行的时间最短？说明理由。\n\n(4)\nn\n位整数乘法指令可保存\n2n\n位乘积，当仅取低\nn\n位作为乘积时，其结果可能会发生溢出。当\nn=32\n、\nx=231−1\n 、\ny=2\n时，带符号整数乘法指令和无符号整数乘法指令得到的\nx×y\n的\n2n\n位乘积分别是什么（用十六进制表示）？此时函数 `umul()` 和 `imul()` 的返回结果是否溢出？对于无符号整数乘法运算，当仅取乘积的低位作为乘法结果时，如何用\n2n\n位乘积进行溢出判断",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "假定主存地址为 32 位，按字节编址，指令 Cache 和数据 Cache 与主存之间均采用 8 路组相联映射方式，直写（WriteThrough）写策略和 LRU 替换算法，主存块大小为 64B，数据区容量各为 32KB。开始时 Cache 均为空。请回答下列问题。\n\n(1) Cache 每一行中标记（Tag）、LRU 位各占几位？是否有修改位？\n\n(2) 有如下 C 语言程序段：\n\n`for(k = 0; k < 1024; k++)\n s[k] = 2 * s[k];\n`\n\n若数组 s 及其变量 k 均为 int 型，int 型数据占 4B，变量 k 分配在寄存器中，数组 s 在主存中的起始地址为 008000C0H，则该程序段执行过程中，访问数组 s 的数据 Cache 缺失次数为多少？\n\n(3) 若 CPU 最先开始的访问操作是读取主存单元 00010003H 中的指令，简要说明从 Cache 中访问该指令的过程，包括 Cache 缺失处理过程。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "现有 5 个操作 A、B、C、D 和 E，操作 C 必须在 A 和 B 完成后执行，操作 E 必须在 C 和 D 完成后执行，请使用信号量的 wait()、signal() 操作（P、V 操作）描述上述操作之间的同步关系，并说明所用信号量及其初值。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "某 32 位系统采用基于二级页表的请求分页存储管理方式，按字节编址，页目录项和页表项长度均为 4 字节，虚拟地址结构如下所示。\n\n页目录号（10 位）页号（10 位）页内偏移量（12 位）\n\n某 C 程序中数组 a[1024][1024]的起始虚拟地址为 1080 0000H，数组元素占 4 字节，该程序运行时，其进程的页目录起始物理地址为 0020 1000H，请回答下列问题。\n\n(1) 数组元素 a[1][2]的虚拟地址是什么？对应的页目录号和页号分别是什么？对应的页目录项的物理地址是什么？若该目录项中存放的页框号为 00301H，则 a[1][2]所在页对应的页表项的物理地址是什么？\n\n(2) 数组 a 在虚拟地址空间中所占区域是否必须连续？在物理地址空间中所占区域是否必须连续？\n\n(3) 已知数组 a 按行优先方式存放，若对数组 a 分别按行遍历和按列遍历，则哪一种遍历方式的局部性更好？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "某校园网有两个局域网，通过路由器 R1、R2 和 R3 互联后接入 Internet，S1 和 S2 为 以太网交换机，局域网采用静态 IP 地址配置，路由器部分接口以及各主机的 IP 地址如图所示：\n\n假设 NAT 转换表结构为：\n\n请回答下列问题：\n\n1）为使 H2 和 H3 能够访问 Web 服务器（使用默认端口号），需要进行什么配置？\n\n2）若 H2 主动访问 Web 服务器时，将 HTTP 请求报文封装到 IP 数据报 P 中发送，则 H2 发送 P 的源 IP 地址和目的 IP 地址分别是？经过 R3 转发后，P 的源 IP 地 址和目的 IP 地址分别是？经过 R2 转发后，P 的源 IP 地址和目的 IP 地址分别是？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2020/d13.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2020/d14.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2020_408 = {
  id: P, year: Y,
  title: '2020 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2020 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2020_408.length,
  qids: questions2020_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2020',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
