const P = 'paper-2013-408'
const Y = 2013
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2013-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2013 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2013',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2013_408 = [
  base(1, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知两个长度分别为 m 和 n 的升序链表，若将它们合并为一个长度为 m+n 的降序链表，则最坏情况下的时间复杂度是（）。",
    options: opt(["O(n)", "O(m×n)", "O(min(m,n))", "O(max(m,n))"]),
    answer: ["D"],
    explain: "两个升序链表合并，两两比较表中元素，每比较一次确定一个元素的链接位置（取较小元素，头插法）。当一个链表比较结束后，将另一个链表的剩余元素插入即可。最坏的情况是两个链表中的元素依次进行比较，直到两个链表都到表尾，即每个元素都经过比较，时间复杂度为\nO(m+n)=O(max(m,n))\n。",
    tags: ["复杂度分析"],
    noteId: "data_structure-basic-algorithm"
  }),
  base(2, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "一个栈的入栈序列为\n1,2,3,⋯,n\n，其出栈序列是\np1,p2,p3,⋯,pn\n，若\np2=3\n，则\np3\n可能取值的个数是（）。",
    options: opt(["n−3", "n−2", "n−1", "无法确定"]),
    answer: ["C"],
    explain: "本题考察 入栈出栈序列。显然，\n3\n之后的\n4,5,⋯,n\n都是\np3\n可取的数（一直进栈直到该数入栈后马上出栈）。接下来分析 1 和 2：\np1\n只能是\n3\n之前入栈的数（可能是 1 或 2），当\np1=1\n时，\np3\n可取\n2\n；当\np1=2\n时，\np3\n可取\n1\n，故\np3\n可能取除\n3\n之外的所有数，个数为\nn−1\n。",
    tags: ["入栈出栈序列"],
    noteId: "data_structure-array-application"
  }),
  base(3, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若将关键字 1,2,3,4,5,6,7 依次插入到初始为空的平衡二叉树 T 中，则 T 中平衡因子为 0 的分支结点的个数是（ ）。",
    options: opt(["0", "1", "2", "3"]),
    answer: ["D"],
    explain: "利用 7 个关键字构建平衡二叉树 T，平衡因子为 0 的分支结点个数为 3，构建的平衡二叉树如下图所示。构造及调整的过程如下：\n（图：见原题）",
    tags: ["平衡二叉树"],
    noteId: "data_structure-tree-btree"
  }),
  base(4, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知三叉树 T 中 6 个叶结点的权分别是 2，3，4，5，6，7，T 的带权（外部）路径长度最小是（ ）。",
    options: opt(["27", "46", "54", "56"]),
    answer: ["B"],
    explain: "将 哈夫曼树 的思想推广到三叉树的情形。为了构成严格的三叉树，需添加权为 0 的虚叶结点，对于严格的三叉树\n(n0−1)%(3−1)=u=1=0\n，需要添加\nm−u−1=3−1−1\n个叶结点，说明 7 个叶结点刚好可以构成一个严格的三叉树。按照哈夫曼树的原则，权为 0 的叶结点应离树根最远构造最小带权生成树的过程如下：\n（图：见原题）\n最小的带权路径长度为\n(2+3)×3+(4+5)×2+(6+7)×1=46\n。",
    tags: ["树的概念", "带权路径长度"],
    noteId: "data_structure-tree-tree"
  }),
  base(5, 'ds', 'k-ds-010', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若 X 是后序线索二叉树中的叶结点，且 X 存在左兄弟结点 Y 。则 X 的右线索指的是（ ）。",
    options: opt(["X 的父结点", "以 Y 为根的子树的最左下结点", "X 的左兄弟结点 Y", "以 Y 为根的子树的最右下结点"]),
    answer: ["A"],
    explain: "根据后序 线索二叉树 的定义，X 结点为叶子结点且有左兄弟，那么这个结点为右孩子结点，利用后序遍历的方式可知 X 结点的后序后继是其父结点，即其右线索指向的是父结点。",
    tags: ["线索二叉树"],
    noteId: "data_structure-tree-btree"
  }),
  base(6, 'ds', 'k-ds-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在任意一棵非空二叉排序树 T1 中，删除某结点 v 之后形成二叉排序树 T2 ，再将 v 插入 T2 形成二叉排序树 T3 。下列关于 T1 与 T3 的叙述中，正确的是（ ）。\n\nI. 若 v 是 T1 的叶结点，则 T1 与 T3 不同\n\nII. 若 v 是 T1 的叶结点，则 T1 与 T3 相同\n\nIII. 若 v 不是 T1 的叶结点，则 T1 与 T3 不同\n\nIV. 若 v 不是 T1 的叶结点，则 T1 与 T3 相同",
    options: opt(["仅 I、III", "仅 I、IV", "仅 II、III", "仅 II、IV"]),
    answer: ["C"],
    explain: "在一棵 二叉排序树 中删除一个结点后再将此结点插入到二叉排序树中，如果删除的结点是叶子结点，那么在插入结点后，后来的二叉排序树与删除结点之前相同。如果删除的结点不是叶子结点，那么再插入这个结点后，后来的二叉树会发生变化，不完全相同。",
    tags: ["二叉排序树"],
    noteId: "data_structure-tree-btree"
  }),
  base(7, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设图的邻接矩阵 A 如下所示。各顶点的度依次是（）\n\nA=0 0 0 1101001001100",
    options: opt(["1，2，1，2", "2，2，1，1", "3，4，2，3", "4，4，2，2"]),
    answer: ["C"],
    explain: "邻接矩阵 A 为非对称矩阵，说明图是有向图，度为入度加出度之和。各顶点的度是矩阵中此结点对应的行（对应出度）和列（对应入度）的非零元素之和。",
    tags: ["邻接矩阵"],
    noteId: "data_structure-graph-defs"
  }),
  base(8, 'ds', 'k-ds-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若对如下无向图进行遍历，则下列选项中，不是广度优先遍历序列的是（）",
    options: opt(["h，c，a，b，d，e，g，f", "e，a，f，g，b，h，c，d", "d，b，c，a，h，e，f，g", "a，b，c，d，h，e，f，g"]),
    answer: ["D"],
    explain: "此题为送分题。只要掌握 DFS 和 BFS 的遍历过程，便能轻易解决。逐个代入，手工模拟，选项 D 是深度优先遍历，而不是广度优先遍历。",
    tags: ["图的遍历"],
    noteId: "data_structure-graph-operation", figures: [{ src: A + "study_methods-408quiz-2013/d3.svg", alt: '题图' }]
  }),
  base(9, 'ds', 'k-ds-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列 AOE 网表示一项包含 8 个活动的工程。通过同时加快若干活动的进度可以缩短整个工程的工期。下列选项中，加快其进度就可以缩短工程工期的是（）",
    options: opt(["c 和 e", "d 和 e", "f 和 d", "f 和 h"]),
    answer: ["C"],
    explain: "找出 AOE 网的全部 关键路径 为 (b,d,c,g)、(b,d,e,h) 和 (b,f,h)。根据定义，只有关键路径上的活动时间同时减少时，才能缩短工期，即正确选项中的两条路径必须涵盖在所有关键路径之中。利用关键路径算法可求出图中的关键路径共有三条：(b,d,cg)、(b,d,e,h) 和 (b,f,h)。由此可知，选项 A 和 B 中并不能包含 (b,f,h) 这条路径，选项 C 中，并不能包含 (b,d,c,g) 和 (b,d,e,h) 这两条路径，只有 C 包含了所有的关键路径，因此只有加快 f 和 d 的进度才能缩短工期。",
    tags: ["关键路径"],
    noteId: "data_structure-graph-operation", figures: [{ src: A + "study_methods-408quiz-2013/d4.svg", alt: '题图' }]
  }),
  base(10, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在一株高度为 2 的 5 阶 B 树中，所含关键字的个数最少是（）",
    options: opt(["5", "7", "8", "14"]),
    answer: ["A"],
    explain: "对于 5 阶 B 树，根结点只有达到 5 个关键字时才能产生分裂，成为高度为 2 的 B 树，因此高度为 2 的 5 阶 B 树所含关键字的个数最少是 5。",
    tags: ["B树"],
    noteId: "data_structure-search-tree"
  }),
  base(11, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对给定的关键字序列 110，119，007，911，114，120，122 进行基数排序，则第 2 趟分配收集后得到的关键字序列是（）。",
    options: opt(["007，110，119，114，911，120，122", "007，110，119，114，911，122，120", "007，110，911，114，119，120，122", "110，120，911，122，114，007，119"]),
    answer: ["C"],
    explain: "基数排序 一般使用低位优先，即第 1 趟排序是按照个位数字的大小来排序的，第 2 趟排序是按照十位数字的大小进行排序的，排序的过程如下图所示。\n（图：见原题）",
    tags: ["排序算法"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机主频为 1.2GHz，其指令分为 4 类，它们在基准程序中所占比例及 CPI 如下表所示。\n\n指令类型所占比例CPI\n\nA50%2\n\nB20%3\n\nC10%4\n\nD20%5\n\n该机的 MIPS 数是（ ）。",
    options: opt(["100", "200", "400", "600"]),
    answer: ["C"],
    explain: "基准程序的 CPI= 2x0.5 + 3x0.2 + 4x0.1 + 5x0.2 = 3。计算机的主频为 1.2 GHz, 即 1200 MHz，故该机器的 MIPS = 1200/3= 400。",
    tags: ["指令执行指标"],
    noteId: "constitution_principle-overview-performance"
  }),
  base(13, 'co', 'k-co-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某数采用 IEEE754 单精度浮点数格式表示为 C6400000H，则该数的值是（ ）。",
    options: opt(["−1.5×213", "−1.5×212", "−0.5×213", "−0.5×212"]),
    answer: ["A"],
    explain: "IEEE 754 单精度浮点数格式为 C640 OOOOH, 二进制格式为 1100 0110 0100 0000 0000 0000 0000 0000, 转换为标准的格式为：\n\n`| 1（符号位） | 1000 1100（阶码） | 100 0000 0000 0000 0000 0000（尾数） |`\n\n数符 = 1 表示负数；阶码值为 1000 1100 - 0111 1111 = 0000 1101 = 13; 尾数值为 1.5（注意其有隐含位，要加 1)。因此，浮点数的值为\n−1,5×213\n。",
    tags: ["IEEE浮点数表示"],
    noteId: "constitution_principle-representation-floats"
  }),
  base(14, 'co', 'k-co-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某字长为 8 位的计算机中，已知整型变量 x、y 的机器数分别为 [x]补=11110100 ， [y]补=10110000 。若整型变量 z=2x+y/2，则 z 的机器数为（ ）。",
    options: opt(["11000000", "00100100", "10101010", "溢出"]),
    answer: ["A"],
    explain: "x*2，将 x 算术左移一位为 1 1101000；y/2，将 y 算术右移一位为 1 1011000, 均无溢出或丢失精度。补码相加为 1 1101000 + 1 1011000 = 1 1000000, 亦无溢出。",
    tags: ["补码"],
    noteId: "constitution_principle-representation-integer"
  }),
  base(15, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "用海明码对长度为 8 位的数据进行检/纠错时，若能纠正一位错，则校验位数至少为（ ）。",
    options: opt(["2", "3", "4", "5"]),
    answer: ["C"],
    explain: "设校验位的位数为 k，数据位的位数为 n，海明码 能纠正一位错应满足下述关系：\n2k≥n+k+1\n。n = 8，当 k = 4 时，\n24(=16)>8+4+1(=13)\n，符合要求，故校验位至少是 4 位。",
    tags: ["差错控制", "海明码"],
    noteId: "computer_network-datalink-error"
  }),
  base(16, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机主存地址空间大小为 256MB，按字节编址。虚拟地址空间大小为 4GB，采用页式存储管理，页面大小为 4KB，TLB（快表）采用全相联映射，有 4 个页表项，内容如下表所示。\n\n有效位标记页框号&mldr;\n\n0FF180H0002H&mldr;\n\n13FFF1H0035H&mldr;\n\n002FF3H0351H&mldr;\n\n103FFFH0153H&mldr;\n\n则对虚拟地址 03FFF180H 进行虚实地址变换的结果是（ ）。",
    options: opt(["0153180H", "0035180H", "TLB 缺失", "缺页"]),
    answer: ["A"],
    explain: "按字节编址，页面大小为 4KB，页内地址共 12 位。地址空间大小为 4GB，虚拟地址共 32 位，前 20 位为页号。虚拟地址为 03FF F180H，故页号为 03 FFFH，页内地址为 180H。查找页标记 03FFFH 所对应的页表项，页框号为 0153H，页框号与页内地址拼接即为物理地址 0153180H。",
    tags: ["地址翻译"],
    noteId: "operating_system-memory-concepts"
  }),
  base(17, 'co', 'k-co-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设变址寄存器 R 的内容为 1000H，指令中的形式地址为 2000H；地址 1000H 中的内容为 2000H，地址 2000H 中的内容为 3000H，地址 3000H 的内容为 4000H，则变址寻址方式下访问到的操作数是（）。",
    options: opt(["1000H", "2000H", "3000H", "4000H"]),
    answer: ["D"],
    explain: "根据 变址寻址 的方法，变址寄存器的内容（1000H）与形式地址的内容（2000H）相加，得到操作数的实际地址（3000H）, 根据实际地址访问内存，获取操作数 4000H。",
    tags: ["指令寻址方式"],
    noteId: "constitution_principle-instruction-format"
  }),
  base(18, 'co', 'k-co-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某 CPU 主频为 1.03GHz，采用 4 级指令流水线，每个段的执行需要 1 个时钟周期。假定 CPU 执行了 100 条指令，在其执行过程中没有发生任何流水线阻塞，此时流水线的吞吐率为（ ）。",
    options: opt(["0.25×109\n 条指令/秒", "0.97×109\n 条指令/秒", "1.0×109\n 条指令/秒", "1.03×109\n 条指令/秒"]),
    answer: ["C"],
    explain: "采用 4 级流水执行 100 条指令，在执行过程中共用 4 + (100-1) =103 个时钟周期。CPU 的主频是 1.03GHz，也就是说每秒钟有 1.03G 个时钟周期。流水线的吞吐率为\n1.03G×100/103=1.0x109\n条指令／秒。",
    tags: ["流水线概念"],
    noteId: "constitution_principle-cpu-pipeline"
  }),
  base(19, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，用于设备和设备控制器（I/O 接口）之间互连的接口标准是（ ）。",
    options: opt(["PCI", "USB", "AGP", "PCI-Express"]),
    answer: ["B"],
    explain: "本题考察 常见总线标准。题目问的是 “设备和设备控制器（I/O 接口）之间互连” 的接口标准，这通常指的是 外部设备（如鼠标、键盘、打印机） 与计算机之间的连接方式。\n\n各选项说明：\n\nA. PCI（Peripheral Component Interconnect）\n是一种用于主板上连接CPU与设备控制器（如声卡、网卡）的总线标准，属于主板内部总线标准，不是设备与控制器之间的接口。\n\nB. USB（Universal Serial Bus） ✅\n是一种用于连接外部设备和I/O接口（控制器）之间的通用串行接口标准，如键盘、鼠标、U盘等，正是题目所问的接口标准。\n\nC. AGP（Accelerated Graphics Port）\n是专门用于显卡与主板之间通信的接口，不用于通用I/O设备，已经被淘汰。\n\nD. PCI-Express（PCIe）\n是PCI的高速串行替代方案，也用于 内部高速设备（如GPU、SSD） 与主板通信，不是用于连接外部I/O设备。\n\n接口标准 | 用途\nPCI | 主板内部设备控制器与CPU之间通信\nUSB | 外部I/O设备与设备控制器之间的接口标准\nAGP | 旧式显卡接口，已淘汰\nPCI-Express | 高速内部设备连接\n\n因此，正确答案是：B. USB。",
    tags: ["总线类型"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(20, 'co', 'k-co-022', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，用于提高 RAID 可靠性的措施有（ ）。\n\nI. 磁盘镜像\n\nⅡ. 条带化\n\nⅢ. 奇偶校验\n\nⅣ. 增加 Cache 机制",
    options: opt(["仅 I、Ⅱ", "仅 I、Ⅲ", "仅 I、Ⅲ和Ⅳ", "仅Ⅱ、Ⅲ和Ⅳ"]),
    answer: ["B"],
    explain: "本题考察 RAID，RAID0 方案是无几余和无校验的磁盘阵列，而 RAID1~5 方案均是加入了冗余（镜像）或校验的磁盘阵列。条带化技术就是一种自动地将 IO 的负载均衡到多个物理磁盘上的技术，条带化技术就是将一块连续的数据分成很多小部分并把它们分别存储到不同磁盘上去。这就能使多个进程同时访问数据的多个不同部分但不会造成磁盘冲突，而且在需要对这种数据进行顺序访问的时候可以获得最大程度上的 I/0 并行能力，从而获得非常好的性能。故能够提高 RAID 可靠性的措施主要是对磁盘进行镜像处理和奇偶校验，其余选项不符合条件。",
    tags: ["RAID"],
    noteId: "constitution_principle-storage-storage"
  }),
  base(21, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某磁盘的转速为 10000rpm，平均寻道时间是 6ms，磁盘传输速率是 20MB/s，磁盘控制器延时为 0.2ms，读取一个 4KB 的扇区所需的平均时间约为（ ）。",
    options: opt(["9ms", "9.4ms", "12ms", "12.4ms"]),
    answer: ["B"],
    explain: "磁盘转速是 10000rpm，转一圈的时间为 6ms，因此平均查询扇区的时间为 3ms，平均寻道时间为 6ms，读取 4KB 扇区信息的时间为 4KB/(20MB/s)=0.2ms，磁盘控制器延迟为 0.2ms，平均存取时间 为 3+6+0.2+0.2=9.4ms。",
    tags: ["磁盘性能指标"],
    noteId: "constitution_principle-storage-storage"
  }),
  base(22, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于中断 I/O 方式和 DMA 方式比较的叙述中，错误的是（ ）。",
    options: opt(["中断 I/O 方式请求的是方式请求的是 CPU 处理时间，DMA 方式请求的是总线使用权", "中断响应发生在一条指令执行结束后，DMA 响应发生在一个总线事务完成后", "中断 I/O 方式下数据传送通过软件完成，DMA 方式下数据传送由硬件完成", "中断 I/O 方式适用于所有外部设备，DMA 方式仅适用于快速外部设备"]),
    answer: ["D"],
    explain: "中断处理方式：在 I/O 设备输入每个数据的过程中，由于无须 CPU 干预，因而可使 CPU 与 I/O 设备并行工作。仅当输完一个数据时，才需 CPU 花费极短的时间去做些中断处理。因此中断申请使用的是 CPU 处理时间，发生的时间是在一条指令执行结束之后，数据是在软件的控制下完成传送的。而 DMA 方式与之不同。DMA 方式：数据传输的基本单位是数据块，即在 CPU 与 I/O 设备之间，每次传送至少一个数据块；DMA 方式 每次申请的是总线的使用权，所传送的数据是从设备直接送入内存的，或者相反；仅在传送一个或多个数据块的开始和结束时，才需 CPU 干预，整块数据的传送是在控制器的控制下完成的。\n\nD 选项错误。这个说法过于绝对。DMA 虽然适合大批量、速度较高的设备（如磁盘、网卡），但它并非仅适用于快速设备，只要设备支持 DMA 协议，都可以使用。此外，中断 I/O 虽然可以用于多数外设，但在频繁交互场景中反而效率低。",
    tags: ["中断IO", "DMA"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(23, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "用户在删除某文件的过程中，操作系统不可能执行的操作是（ ）。",
    options: opt(["删除此文件所在的目录", "删除与此文件关联的目录项", "删除与此文件对应的文件控制块", "释放与此文件关联的内存缓冲区"]),
    answer: ["A"],
    explain: "此文件所在目录下可能还存在其他文件，因此删除文件时不能（也不需要）删除文件所在的目录，而与此文件关联的目录项和文件控制块需要随着文件一同删除，同时释放文件关联的内存缓冲区。",
    tags: ["inode"],
    noteId: "operating_system-files-file"
  }),
  base(24, 'os', 'k-os-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "为支持 CD-ROM 中视频文件的快速随机播放，播放性能最好的文件数据块组织方式是（ ）。",
    options: opt(["连续结构", "链式结构", "直接索引结构", "多级索引结构"]),
    answer: ["A"],
    explain: "为了实现快速随机播放，要保证最短的查询时间，即不能选取链表和索引结构，因此 连续分配方案 最优。",
    tags: ["文件物理结构"],
    noteId: "operating_system-files-file"
  }),
  base(25, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "用户程序发出磁盘 I/O 请求后，系统的处理流程是：用户程序→系统调用处理程序→设备驱动程序→中断处理程序。其中，计算数据所在磁盘的柱面号、磁头号、扇区号的程序是（ ）。",
    options: opt(["用户程序", "系统调用处理程序", "设备驱动程序", "中断处理程序"]),
    answer: ["C"],
    explain: "计算磁盘号、磁头号和扇区号的工作是由 设备驱动程序 完成的。题中的功能因设备硬件的不同而不同，因此应由厂家提供的设备驱动程序实现。",
    tags: ["CHS地址", "IO软件层次"],
    noteId: "constitution_principle-storage-storage"
  }),
  base(26, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若某文件系统索引结点 (inode) 中有直接地址项和间接地址项，则下列选项中，与单个文件长度无关的因素是（ ）。",
    options: opt(["索引结点的总数", "间接地址索引的级数", "地址项的个数", "文件块大小"]),
    answer: ["A"],
    explain: "四个选项中，只有 A 选项是与单个文件长度无关的。索引结点 的总数即文件的总数，与单个文件的长度无关；间接地址级数越多、地址项数越多、文件块越大，单个文件的长度就会越大。",
    tags: ["inode"],
    noteId: "operating_system-files-file"
  }),
  base(27, 'os', 'k-os-023', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设系统缓冲区和用户工作区均采用单缓冲，从外设读入 1 个数据块到系统缓冲区的时间为 100，从系统缓冲区读入 1 个数据块到用户工作区的时间为 5，对用户工作区中的 1 个数据块进行分析的时间为 90（如下图所示）。\n\n进程从外设读入并分析 2 个数据块的最短时间是（ ）。",
    options: opt(["200", "295", "300", "390"]),
    answer: ["C"],
    explain: "在 单缓冲 中，数据块 1 从外设到用户工作区的总时间为 105，在这段时间中，数据块 2 没有进行操作。在数据块 1 进行分析处理 时，数据块 2 从外设到用户工作区的总时间为 105，这段时间是并行的。再加上处理数据块 2 的时间 90，总时间为 300，答案为 C。",
    tags: ["缓冲区"],
    noteId: "operating_system-io_device-management", figures: [{ src: A + "study_methods-408quiz-2013/d6.svg", alt: '题图' }]
  }),
  base(28, 'os', 'k-os-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，会导致用户进程从用户态切换到内核态的操作是（ ）。\n\nI. 整数除以零\n\nII. sin() 函数调用\n\nIII. read 系统调用",
    options: opt(["仅 I、II", "仅 I、III", "仅 II、III", "I、II 和 III"]),
    answer: ["B"],
    explain: "需要在系统 内核态 执行的操作是整数除零操作（需要中断处理）和 read 系统调用函数，sin() 函数调用是在用户态下进行的。",
    tags: ["用户态和内核态", "系统调用"],
    noteId: "operating_system-concepts-environment"
  }),
  base(29, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "计算机开机后，操作系统最终被加载到（  ）。",
    options: opt(["BIOS", "ROM", "EPROM", "RAM"]),
    answer: ["D"],
    explain: "此题为基本常识题，送分题。系统开机后，操作系统的程序会被自动加载到内存中的系统区，这段区域是 RAM。",
    tags: ["系统引导流程"],
    noteId: "operating_system-concepts-concept"
  }),
  base(30, 'os', 'k-os-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若用户进程访问内存时产生缺页，则下列选项中，操作系统可能执行的操作是（ ）。\n\nI. 处理越界错\n\nII. 置换页\n\nIII. 分配内存",
    options: opt(["仅 I、II", "仅 II、III", "仅 I、III", "I、II 和 III"]),
    answer: ["B"],
    explain: "用户进程访问内存时缺页会发生缺页中断。发生 缺页中断，系统会执行的操作可能是置换页面或分配内存。系统内没有越界的错误，不会进行越界出错处理。",
    tags: ["缺页异常"],
    noteId: "constitution_principle-storage-virtual"
  }),
  base(31, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某系统正在执行三个进程\nP1\n、\nP2\n和\nP3\n，各进程的计算 (CPU) 时间和 I/O 时间比例如下表所示。\n\n进程计算时间I/O 时间\n\nP190%10%\n\nP250%50%\n\nP315%85%\n\n为提高系统资源利用率，合理的进程优先级设置应为（ ）。",
    options: opt(["P1>P2>P3", "P3>P2>P1", "P2>P1=P3", "P1>P2=P3"]),
    answer: ["B"],
    explain: "为了合理地设置进程优先级，应该将进程的 CPU 时间和 I/0 时间做综合考虑，对千 CPU 占用时间较少而 I/O 占用时间较多的进程，优先调度能让 I/O 更早地得到使用，提高了系统的资源利用率，显然应该具有更高的优先级。",
    tags: ["处理机调度概念"],
    noteId: "operating_system-process-scheduling"
  }),
  base(32, 'os', 'k-os-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于银行家算法的叙述中，正确的是（ ）。",
    options: opt(["银行家算法可以预防死锁", "当系统处于安全状态时，系统中一定无死锁进程", "当系统处于不安全状态时，系统中一定会出现死锁进程", "银行家算法破坏了死锁必要条件中的“请求和保持”条件"]),
    answer: ["B"],
    explain: "银行家算法 是避免死锁的方法，破坏死锁产生的必要条件是预防死锁的方法。利用银行家算法，系统处于安全状态时就可以避免死锁（即此时必然无死锁）；当系统进入不安全状态后便可能进入死锁状态（但也不是必然）。",
    tags: ["银行家算法"],
    noteId: "operating_system-process-deadlock"
  }),
  base(33, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在 OSI 参考模型中，下列功能需由应用层的相邻层实现的是（ ）。",
    options: opt(["对话管理", "数据格式转换", "路由选择", "可靠数据传输"]),
    answer: ["B"],
    explain: "在 OSI 参考模型 中，应用层的相邻层是表示层。表示层是 OSI 七层协议的第六层。表示层的功能是表示出用户看得懂的数据格式，实现与数据表示有关的功能。主要完成数据字符集的转换、数据格式化和文本压缩、数据加密和解密等工作。",
    tags: ["OSI模型"],
    noteId: "computer_network-overall-iso"
  }),
  base(34, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若下图为 10 BaseT 网卡接收到的信号波形，则该网卡收到的比特串是（ ）。",
    options: opt(["0011 0110", "1010 1101", "0101 0010", "1100 0101"]),
    answer: ["A"],
    explain: "需要了解 传输介质 的命名规则：10BaseT 即 10Mbps 的以太网，采用 曼彻斯特编码，将一个码元分成两个相等的间隔，前一个间隔为低电平后一个间隔为高电平表示码元 1；码元 0 正好相反，也可以采用相反的规定。故对应比特串可以是 0011 0110 或 1100 1001。",
    tags: ["传输介质"],
    noteId: "computer_network-datalink-lan", figures: [{ src: A + "study_methods-408quiz-2013/d7.svg", alt: '题图' }]
  }),
  base(35, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "主机甲通过 1 个路由器（存储转发方式）与主机乙互联，两段链路的数据传输速率均为 10Mbps，主机甲分别采用报文交换和分组大小为 10kb 的分组交换向主机乙发送 1 个大小为 8 Mb（1M = 10⁶ ）的报文。若忽略链路传播延迟、分组头开销和分组拆装时间，则两种交换方式完成该报文传输所需的总时间分别为（ ）。",
    options: opt(["800 ms、1600 ms", "801 ms、1600 ms", "1600 ms、800 ms", "1600 ms、801 ms"]),
    answer: ["D"],
    explain: "本题考察分组交换的 传输时间计算，不进行分组时，发送一个报文的时延是 8Mb / 10Mbps = 800s，采用报文交换时，主机甲发送报文需要一次时延，而报文到达路由器进行存储转发又需要一次时延，总时延为 800ms × 2 = 1600ms。进行分组后，发送一个报文的时延是 10kb / 10Mbps = 1ms，一共有 8Mb / 10kb = 800 个分组，主机甲发送 800 个分组需要 1ms × 800 = 800ms 的时延，而路由器接收到第一个分组后直接开始转发，即除了第一个分组，其余分组经过路由器转发不会产生额外的时延，总时延就为 800ms+1ms=801ms。",
    tags: ["交换方式"],
    noteId: "computer_network-datalink-dev"
  }),
  base(36, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列介质访问控制方法中，可能发生冲突的是（ ）。",
    options: opt(["CDMA", "CSMA", "TDMA", "FDMA"]),
    answer: ["B"],
    explain: "选项 A、C 和 D 都是 信道划分协议，信道划分协议是静态划分信道的方法，肯定不会发生冲突。CSMA 全称是载波侦听多路访问协议，其原理是站点在发送数据前先侦听信道，发现信道空闲后再发送，但在发送过程中有可能会发生冲突。",
    tags: ["介质访问控制"],
    noteId: "computer_network-datalink-mac"
  }),
  base(37, 'cn', 'k-cn-006', {
    type: 'single', difficulty: 2, score: 2,
    stem: "HDLC 协议对 01111100 01111110 组帧后对应的比特串为（ ）。",
    options: opt(["01111100 00111110 10", "01111100 01111101 01111110", "01111100 01111101 0", "01111100 01111110 01111101"]),
    answer: ["A"],
    explain: "HDLC 协议 对比特串进行组帧时，HDLC 数据帧以位模式 0111 1110 标识每一个帧的开始和结束，因此在帧数据中凡是出现了 5 个连续的位“1”的时候，就会在输出的位流中填充一个“0”。因此组帧后的比特串为 0111 1100 0011 1110 10。",
    tags: ["HDLC"],
    noteId: "computer_network-datalink-lan"
  }),
  base(38, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对于 100 Mbps 的以太网交换机，当输出端口无排队，以直通交换 (cut-through switching) 方式转发一个以太网帧（不包括前导码）时，引入的转发延迟至少是（ ）。",
    options: opt(["0 μs", "0.48 μs", "5.12 μs", "121.44 μs"]),
    answer: ["B"],
    explain: "直通交换 在输入端口检测到一个数据帧时，检查帧首部，获取帧的目的地址，启动内部的动态查找表转换成相应的输出端口，在输入与输出交叉处接通，把数据帧直通到相应的端口，实现交换功能。直通交换方式只检查帧的目的地址，共 6B，所以最短的传输延迟是 6 × 8bit / 100Mbps = 0.48μs。",
    tags: ["交换方式"],
    noteId: "computer_network-datalink-dev"
  }),
  base(39, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "主机甲与主机乙之间已建立一个 TCP 连接，双方持续有数据传输，且数据无差错与丢失。若甲收到 1 个来自乙的 TCP 段，该段的序号为 1913、确认序号为 2046、有效载荷为 100 字节，则甲立即发送给乙的 TCP 段的序号和确认序号分别是（ ）。",
    options: opt(["2046、2012", "2046、2013", "2047、2012", "2047、2013"]),
    answer: ["B"],
    explain: "本题考察 序列号和确认号，确认序号 ack 是期望收到对方下一个报文段的数据的第一个字节的序号，序号 seq 是指本报文段所发送的数据的第一个字节的序号。甲收到 1 个来自乙的 TCP 段，该段的序号 seq=1913、确认序号 ack=2046、有效载荷为 100 字节，表明到序号 1913+100-1=2012 为止的所有数据甲均已收到，而乙期望收到下一个报文段的序号从 2046 开始。故甲发给乙的 TCP 段的序号 seq1=ack=2046 和确认序号 ack1=seq+100=2013。",
    tags: ["TCP滑动窗口"],
    noteId: "computer_network-transport-tcp"
  }),
  base(40, 'cn', 'k-cn-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于 SMTP 协议的叙述中，正确的是（ ）。\n\nI. 只支持传输 7 比特 ASCII 码内容\n\nII. 支持在邮件服务器之间发送邮件\n\nIII. 支持从用户代理向邮件服务器发送邮件\n\nIV. 支持从邮件服务器向用户代理发送邮件",
    options: opt(["仅 I、II 和 III", "仅 I、II 和 IV", "仅 I、III 和 IV", "仅 II、III 和 IV"]),
    answer: ["A"],
    explain: "SMTP协议用于用户代理向邮件服务器发送邮件，或在邮件服务器之间发送邮件。SMTP 协议只支持传输 7 比特的 ASCII 码内容。",
    tags: ["电子邮件"],
    noteId: "computer_network-application-mail"
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "已知一个整数序列 \nA=(a0,a1,…,an−1)\n ，其中 \n0≤ai<n\n(0≤i<n)\n 。\n\n若存在 \nap1=ap2=⋯=apm=x\n 且 \nm>n/2\n(0≤pk<n,1≤k≤m)\n ，则称 \nx\n 为 \nA\n 的主元素。\n\n例如 \nA=(0,5,5,3,5,7,5,5)\n，则 \n5\n 为主元素；又如 \nA=(0,5,5,3,5,1,5,7)\n ，则 \nA\n 中没有主元素。\n\n假设 \nA\n 中的 \nn\n 个元素保存在一个一维数组中，请设计一个尽可能高效的算法，找出 \nA\n 的主元素。若存在主元素，则输出该元素；否则输出 \n−1\n 。要求：\n\n(1) 给出算法的基本设计思想。\n\n(2) 根据设计思想，采用 C、C++ 或 Java 语言描述算法，关键之处给出注释。\n\n(3) 说明你所设计算法的时间复杂度和空间复杂度。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "设包含 4 个数据元素的集合 S = { “do”, “for”, “repeat”, “while” }，各元素的查找概率依次为： \np1=0.35\n，\np2=0.15\n，\np3=0.15\n，\np4=0.35\n 。将 S 保存在一个长度为 4 的顺序表中，采用折半查找法，查找成功时的平均查找长度为 2.2 。请回答：\n\n(1) 若采用顺序存储结构保存 S ，且要求平均查找长度更短，则元素应如何排列？应使用何种查找方法？查找成功时的平均查找长度是多少？\n\n(2) 若采用链式存储结构保存 S ，且要求平均查找长度更短，则元素应如何排列？应使用何种查找方法？查找成功时的平均查找长度是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "某 32 位计算机，CPU 主频为 800MHz，Cache 命中时的 CPI 为 4，Cache 块大小为 32 字节；主存采用 8 体交叉存储方式，每个体的存储字长为 32 位、存储周期是 40ns；存储器总线宽度为 32 位，总线时钟频率为 200MHz，支持突发传送总线事务。每次读突发传送总线事务的过程包括：送首地址和命令、存储器准备数据、传送数据。每次突发传送 32 字节，传送地址或者 32 位数据均需要一个总线时钟周期。请回答下列问题，要求给出理由或者计算过程。\n\n(1) CPU 和总线的时钟周期各是多少？总线的带宽（即最大数据传输率）为多少？\n\n(2) Cache 缺失时，需要用几个读突发传送总线事务来完成一个主存块的读取？\n\n(3) 存储器总线完成一次读突发传送总线事务所需的时间是多少？\n\n(4) 若程序 BP 执行过程中，共执行了 100 条指令，平均每条指令需要 1.2 次访存，Cache 缺失率是 5%，不考虑替换等开销，则 BP 的 CPU 执行时间是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "某计算机采用 16 位定长指令字格式，其 CPU 中有一个标志寄存器，其中包含进位/借位标志 CF、零标志 ZF 和符号标志 NF。假定为该机设计了条件转移指令，其格式如下：\n\n其中，00000 为操作码 OP；C、Z 和 N 分别为 CF、ZF 和 NF 的对应检测位，某检测位为 1 时表示需检测对应标志，需检测的标志位中只要有一个为 1 就转移，否则就不转移，例如，若 C=1，Z=0，N=1，则需检测 CF 和 NF 的值，当 CF=1 或 NF=1 时发生转移；OFFSET 是相对偏移量，用补码表示。转移执行时，转移目标地址为 (PC)+2+2×OFFSET；顺序执行时，下条指令地址为 (PC)+2。请回答下列问题。\n\n(1) 该计算机存储器按字节编址，还是按字编址？该条件转移指令向后（反向）最多可跳转最多少条指令？\n\n(2) 某条件转移指令的地址为 200CH，指令内容如下图所示，若该执行时 CF=0，ZF=0，NF=1，则该指令执行后 PC 的值是多少？若该指令执行时 CF=1，ZF=0，NF=0，则该指令执行后 PC 的值又是多少？请给出计算过程。\n\n(3) 实现“无符号数比较小于等于时转移”功能的指令中，C、Z 和 N 应各是什么？\n\n(4) 以下是该指令对应的数据通路示意图，要求给出中部件①~③的名称或功能说明。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2013/d9.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2013/d10.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2013/d11.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "某博物馆最多可以容纳 500 人同时参观，有一个出入口，该出入口一次仅允许一个人通过。参观者的活动描述如下：\n`cobegin\n参观者进程 i:\n{\n ...\n 进门；\n ...\n 参观；\n ...\n 出门；\n ...\n}\ncoend\n`\n请添加必要的信号量和 P、V（或 `wait()`、`signal()`）操作，以实现上述过程中的互斥与同步。要求写出完整的过程，说明信号量的含义并赋初值。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "某计算机主存按字节编址，逻辑地址和物理地址都是 32 位，页表项大小为 4 字节。请回答下列问题。\n\n(1) 若使用一级页表的分页存储管理方式，逻辑地址结构为：\n\n则页的大小是多少字节？页表最大占用多少字节？\n\n(2) 若使用二级页表的分页存储管理方式，逻辑地址结构为：\n\n设逻辑地址为 LA，请分别给出其对应的页目录号和页表索引的表达式。\n\n(3) 采用 (1) 中的分页存储管理方式，一个代码段起始逻辑地址为 0000 8000H，其长度为 8KB，被装载到从物理地址 0090 0000H 开始的连续主存空间中。页表从主存 0020 0000H 开始的物理地址处连续存放，如下图所示（地址大小自下向上递增）。请计算出该代码段对应的两个页表项的物理地址、这两个页表项中的页框号以及代码页面 2 的起始物理地址。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2013/d12.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2013/d13.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2013/d14.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "假设 Internet 的两个自治系统构成的网络如题 47 图所示，自治系统 AS1 由路由器 R1 连接两个子网构成；自治系统 AS2 由路由器 R2、R3 互联并连接 3 个子网构成。各子网地址、R2 的接口名、R1 与 R3 的部分接口 IP 地址如题 47 图所示。\n\n请回答下列问题。\n\n(1) 假设路由表结构如下表所示。\n\n请利用路由聚合技术，给出 R2 的路由表，要求包括到达题 47 图中所有子网的路由，且路由表中的路由项尽可能少。\n\n(2) 若 R2 收到一个目的 IP 地址为 194.17.20.200 的 IP 分组，R2 会通过哪个接口转发该 IP 分组？\n\n(3) R1 与 R2 之间利用哪个路由协议交换路由信息？该路由协议的报文被封装到哪个协议的分组中进行传输？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2013/d16.svg", alt: '题图' }, { src: A + "study_methods-408quiz-2013/d17.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2013_408 = {
  id: P, year: Y,
  title: '2013 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2013 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2013_408.length,
  qids: questions2013_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2013',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
