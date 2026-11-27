const P = 'paper-2010-408'
const Y = 2010
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2010-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2010 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2010',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2010_408 = [
  base(1, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若元素 a, b, c, d, e, f 依次进栈，允许进栈、退栈操作交替进行，但不允许连续三次进行退栈操作，则不可能得到的出栈序列是（ ）。",
    options: opt(["d, c, e, b, f, a", "c, b, d, a, e, f", "b, c, a, e, f, d", "a, f, e, d, c, b"]),
    answer: ["D"],
    explain: "本题考查 入栈出栈序列。\n\n选项 A 可由 in,in,in,in,out,out,in,out,out,in,ot,out 得到；\n\n选项 B 可由 in,in,in,out,out,in,out,out,in,out,in,out 得到；\n\n选项 C 可由 in,in,out,in,out,out,in,in,out,in,out,out 得到；\n\n选项 D 可由 in,out,in,in,in,in,in,out,out,out,out,out 得到，\n\n但题意要求不允许连续三次退栈操作，故 D 不可能得到。\n\n【另解】先进栈的元素后出栈，进栈顺序为 a,b,c,d,e,f，故连续出栈时的序列必然是按字母表逆序的，若出栈序列中出现了长度大于等于 3 的连续逆序子序列，侧为不符合要求的出栈序列。",
    tags: ["入栈出栈序列"],
    noteId: "data_structure-array-application"
  }),
  base(2, 'ds', 'k-ds-006', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某队列允许在其两端进行入队操作，但仅允许在一端进行出队操作，若元素 a, b, c, d, e 依次入此队列后再进行出队操作，则不可能得到的出队序列是（ ）。",
    options: opt(["b, a, c, d, e", "d, b, a, c, e", "d, b, c, a, e", "e, c, b, a, d"]),
    answer: ["C"],
    explain: "本题的队列实质是输出受限的双端队列（两端入队、一端出队）。\n依次入队的元素为 a、b、c、d、e，各选项的可行性及对应入队方案如下：\n\nA 可行\na 左入（或右入） → b 左入 → c 右入 → d 右入 → e 右入\n队列状态（队首→队尾）：b, a, c, d, e\n出队序列：b, a, c, d, e ✅\n\nB 可行\na 左入（或右入） → b 左入 → c 右入 → d 左入 → e 右入\n队列状态：d, b, a, c, e\n出队序列：d, b, a, c, e ✅\n\nD 可行\na 左入（或右入） → b 左入 → c 左入 → d 右入 → e 左入\n队列状态：e, c, b, a, d\n出队序列：e, c, b, a, d ✅\n\nC 不可能\n不管 a 从左还是右入队，b 紧接着入队后一定与 a 相邻。\n要得到 d, b, c, a, e，d 必须第一个出队，所以 d 只能从队首方向插入，处于 a、b 的外侧。\n当 d 出队、接着 b 出队后，队列中只剩 a（及其后可能入队的元素）。\n此时无论 c 是在 b 出队前还是之后入队，从两端插入都无法使 c 出现在 b 和 a 之间，也就无法形成 `b, c, a` 的出队顺序。\n因此该序列不可能。 ❌",
    tags: ["队列"],
    noteId: "data_structure-array-queue"
  }),
  base(3, 'ds', 'k-ds-010', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列线索二叉树中（用虚线表示线索），符合后序线索树定义的是（ ）。",
    options: opt(["（见图 A）", "（见图 B）", "（见图 C）", "（见图 D）"]),
    answer: ["D"],
    explain: "题中所给二叉树的后序序列为 d,b,c,a。结点 d 无前驱和左子树，左链域空，无右子树，右链域指向其后继结点 b；结点 b 无左子树，左链域指向其前驱结点 d；结点 c 无左子树，左链域指向其前驱结点 b，无右子树，右链域指向其后继结点 a。故选 D。",
    tags: ["线索二叉树"],
    noteId: "data_structure-tree-btree", figures: [{ src: A + "study_methods-408quiz-2010/d1.svg", alt: '题图' }]
  }),
  base(4, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在下图所示的平衡二叉树中，插入关键字 48 后得到一棵新平衡二叉树。在新平衡二叉树中，关键字 37 所在结点的左、右子结点中保存的关键字分别是（ ）。",
    options: opt(["13, 48", "24, 48", "24, 53", "24, 90"]),
    answer: ["C"],
    explain: "插入 48 以后，该 AVL 根结点的平衡因子由 -1 变为 -2, 在最小不平衡子树根结点的右子树 (R) 的左子树 (L) 中插入新结点引起的不平衡属于 RL 型平衡旋转，需要做两次旋转操作（先右旋后左旋）。\n（图：见原题）\n调整后，关键字 37 所在结点的左、右子结点中保存的关键字分别是 24、53。",
    tags: ["平衡二叉树"],
    noteId: "data_structure-tree-btree", figures: [{ src: A + "study_methods-408quiz-2010/d2.svg", alt: '题图' }]
  }),
  base(5, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在一棵度数为 4 的树 T 中，若有 20 个度为 4 的结点，10 个度为 3 的结点，1 个度为 2 的结点，10 个度为 1 的结点，则树 T 的叶结点个数是（ ）。",
    options: opt(["41", "82", "113", "122"]),
    answer: ["B"],
    explain: "设树中度为 i（i=0,1,2,3,4）的结点数分别为\nNi\n, 树中结点总数为 N，则树中各结点的度之和等于 N-1，即\nN=1+N1+2N2+3N3+4N4=N0+N1+N2+N3+N4\n，根据题设中的数据，即可得到\nN0=82\n,即树 T 的叶结点的个数是 82。",
    tags: ["树的概念"],
    noteId: "data_structure-tree-tree"
  }),
  base(6, 'ds', 'k-ds-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对 n (n≥2) 个权值均不相同的字符构成哈夫曼树。下列关于该哈夫曼树的叙述中，错误的是（ ）。",
    options: opt(["该树一定是一棵完全二叉树", "树中一定没有度为 1 的结点", "树中两个权值最小的结点一定是兄弟结点", "树中任一非叶结点的权值一定不小于下一层任一结点的权值"]),
    answer: ["A"],
    explain: "哈夫曼树 为带权路径长度最小的二叉树，不一定是完全二叉树。哈夫曼树中没有度为 1 的结点，B 正确；构造哈夫曼树时，最先选取两个权值最小的结点作为左、右子树构造一棵新的二叉树，C 正确；哈夫曼树中任一非叶结点 P 的权值为其左、右子树根结点权值之和，其权值不小于其左、右子树根结点的权值，在与结点 P 的左、右子树根结点处于同一层的结点中，若存在权值大于结点 P 权值的结点 Q，则结点 Q 的兄弟结点中权值较小的一个应该与结点 P 作为左、右子树构造新的二叉树。综上可知，哈夫曼树中任一非叶结点的权值一定不小于下一层任一结点的权值。",
    tags: ["哈夫曼树"],
    noteId: "data_structure-tree-app"
  }),
  base(7, 'ds', 'k-ds-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若无向图 G=(V,E) 中含有 7 个顶点，要保证图 G 在任何情况下都是连通的，则需要的边数最少是（）。",
    options: opt(["6", "15", "16", "21"]),
    answer: ["C"],
    explain: "要保证无向图 G 在任何情况下都是连通的，即任意变动图 G 中的边，G 始终保持连通，首先需要 G 的任意 6 个结点构成完全连通子图 G1，需 n(n-1)/2 = 6×(6-1)/2 = 15 条边，然后再添条边将第 7 个结点与 G1 连接起来，共需 16 条边。",
    tags: ["图的概念"],
    noteId: "data_structure-graph-defs"
  }),
  base(8, 'ds', 'k-ds-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对下图进行拓扑排序，可以得到不同拓扑序列的个数是（）。",
    options: opt(["4", "3", "2", "1"]),
    answer: ["B"],
    explain: "拓扑排序 的过程如下图所示：\n（图：见原题）\n可以得到 3 个不同的拓扑序列，分别为 abced、abecd、aebcd。",
    tags: ["拓扑排序"],
    noteId: "data_structure-basic-alg_design", figures: [{ src: A + "study_methods-408quiz-2010/d4.svg", alt: '题图' }]
  }),
  base(9, 'ds', 'k-ds-002', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知一个长度为 16 的顺序表 L，其元素按关键字有序排列。若采用折半查找法查找一个 L 中不存在的元素，则关键字的比较次数最多是（ ）。",
    options: opt(["4", "5", "6", "7"]),
    answer: ["B"],
    explain: "折半查找 在查找成功时进行的关键字比较次数最多为\n⌊log2n⌋+1\n，即判定树的高度；折半查找法在查找不成功时进行的关键字比较次数最多为\n⌊log2n⌋+1\n。题中\nn=16\n,因此最多比较\n⌊log216⌋+1=5\n次。也可以画出草图求解。",
    tags: ["数组查找"],
    noteId: "data_structure-search-array"
  }),
  base(10, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "采用递归方式对顺序表进行快速排序。下列关于递归次数的叙述中，正确的是（）。",
    options: opt(["递归次数与初始数据的排列次序无关。", "每次划分后，先处理较长的分区可以减少递归次数。", "每次划分后，先处理较短的分区可以减少递归次数。", "递归次数与每次划分后得到的分区的处理顺序无关。"]),
    answer: ["D"],
    explain: "快速排序 的递归次数与元素的初始排列有关。若每次划分后分区比较平衡，则递归次数少；若划分后分区不平衡，则递归次数多。但快速排序的递归次数与分区处理顺序无关，即先处理较长的分区或先处理较短的分区都不影响递归次数。\n\n此外，可以形象地把快速排序的递归调用过程用一个二叉树描述，先处理较长或较短分区，可以想象为交换某一递归结点处的左右子树，这并 不会影响树中的分支数。",
    tags: ["排序算法"],
    noteId: "data_structure-sort-internal"
  }),
  base(11, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对一组数据 (2，12，16，88，5，10) 进行排序，若前三趟排序结果如下：\n\n第一趟排序结果：2，12，16，5，10，88\n\n第二趟排序结果：2，12，5，10，16，88\n\n第三趟排序结果：2，5，10，12，16，88\n\n则采用的排序方法可能是（）。",
    options: opt(["起泡排序", "希尔排序", "归并排序", "基数排序"]),
    answer: ["A"],
    explain: "本题考查 内部排序 的特征，题中所给的三趟排序过程中，每一趟排序是从前往后依次比较，使最大值“沉底”，符合冒泡排序的特点。\n\n看第一趟可知仅有 88 被移到最后。\n\n如果是希尔排序，则 12,88,10 应变为 10,12,88。因此排除希尔排序。\n\n如果是归并排序，则长度为 2 的子序列是有序的。因此可排除归并排序。\n\n如果是基数排序，则 16,5,10 应变为 10,5,16。因此排除基数排序。\n\n提示：对于此类题，先看备选项的排序算法有什么特征，再看题目中的排序过程是否符合这一特征，从而得出答案。一般先从选项中的简单排序方法（插入排序、起泡排序、选择排序）开始判断，若简单排序方法不符合，再判断排序方法（希尔排序、快速排序、堆排序、归并排序）。",
    tags: ["排序算法"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，能缩短程序执行时间的措施是（）。\n\nI. 提高 CPU 时钟频率\n\nII.优化数据通路结构\n\nIII. 对程序进行编译优化",
    options: opt(["仅 I 和 II", "仅 I 和 III", "仅 II 和 III", "I、II 和 III"]),
    answer: ["D"],
    explain: "CPU 主频 越高，完成指令的一个执行步骤所用的时间就越短，执行指令的速度越快，I 正确。数据通路 的功能是实现 CPU 内部的运算器和寄存器以及寄存器之间的数据交换，优化数据通路结构，可以有效提高计算机系统的吞吐量，从而加快程序的执行，II 正确。计算机程序需要先转化成机器指令序列才能最终得到执行，通过对程序进行编译优化可以得到更优的指令序列，从而使得程序的执行时间也越短，III 正确。\n\n【另解】定量分析：CPU 执行时间 = (程序指令条数×每条指令时钟周期数)/时钟频率。提高时钟频率显然可以缩短 CPU 执行时间；编译优化可能减少程序的指令数或优化指令结构；优化数据通路结构可能减少时钟周期，即提高时钟频率，故选 D。",
    tags: ["计算机体系结构"],
    noteId: "constitution_principle-overview-structure"
  }),
  base(13, 'co', 'k-co-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定有 4 个整数用 8 位补码分别表示 r1=FEH，r2=F2H，r3=90H，r4=F8H，若将运算结果存放在一个 8 位寄存器中，则下列运算中会发生溢出的是（）。",
    options: opt(["r1 × r2", "r2 × r3", "r1 × r4", "r2 × r4"]),
    answer: ["B"],
    explain: "本题的真正意图是考查 补码表示 的表示范围，而不是补码的乘法运算。若采用补码乘法规则计算出 4 个选项，是费力不讨好的做法，而且极容易出错。\n\n8 位补码所能表示的整数范围为 -128~+127。将 4 个数全部转换为十进制：r1=-2，r2=-14，r3=-112，r4=-8，得 r2×r3=1568，远超出了表示范围，发生溢出。",
    tags: ["补码"],
    noteId: "constitution_principle-representation-integer"
  }),
  base(14, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定变量 `i`、`f` 和 `d` 的数据类型分别为 `int`，`float` 和 `double`（`int` 用补码表示，`float` 和 `double` 分别用 `IEEE754` 单精度和双精度浮点数格式表示），已 `i=785`，`f=1.5678e3`，`d=1.5e100`。若在 32 位机器中执行下列关系表达式，则结果为 “真” 的是（）。\n\nI. `i == (int)(float)i`     II. `f == (float)(int)f`\n\nIII. `f == (float)(double)f`    IV. `(d+f)-d == f`",
    options: opt(["仅 I 和 II", "仅 I 和 III", "仅 II 和 III", "仅 III 和 IV"]),
    answer: ["B"],
    explain: "本题考查 不同长度的类型转换，题中三种数据类型的精度从低到高为 int → float → double。\n\n变量说明：\n\n`i = 785`（int）：32 位整数，用补码表示。\n\n`f = 1.5678e3 = 1567.8`（float）：32 位 IEEE754 单精度浮点数。\n\n`d = 1.5e100`（double）：64 位 IEEE754 双精度浮点数。\n\n对于 I. `i == (int)(float)i`\n\n`i` 是整数 785。\n\n`(float)i` 会把整数 785 转为浮点数 —— 精度足够准确表示 785。\n\n再 `(int)(float)i` 转回整数，仍然是 785。\n\n✅ 结果：真\n\n对于 II. `f == (float)(int)f`\n\n`f = 1567.8`，转换为 `(int)f` 得到 `1567`（小数部分被截断）。\n\n再转回 `(float)(int)f` 得到 1567.0。\n\n显然：1567.8 ≠ 1567.0\n\n❌ 结果：假\n\n对于 III. `f == (float)(double)f`\n\n`f` 是 float（32 位），被转为 `double`（64 位）后，再强转回 `float`。\n\n由于 double 转 float 的精度缩减回原始，值不变。\n\n所以整体等价于 `f == f`。\n\n✅ 结果：真\n\n对于 IV. `(d + f) - d == f`\n\n`d = 1.5e100`（极大），`f = 1567.8`（非常小，相比于 d）。\n\n`d + f ≈ d`（因为 `f` 精度在 `d` 这个数量级上被吞掉，f 被舍入掉）。\n\n所以 `(d + f) - d ≈ 0`，不等于 `f`\n\n❌ 结果：假\n\n所以 正确答案：I、III，答案选择 B。",
    tags: ["类型转换"],
    noteId: "constitution_principle-representation-conversion"
  }),
  base(15, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定用若干个 2kx4 位的芯片组成一个 8kx8 位的存储器，则地址 0B1FH 所在芯片的最小地址是（ ）。",
    options: opt(["0000H", "0600H", "0700H", "0800H"]),
    answer: ["D"],
    explain: "本题考查 主存容量的扩展，用 2Kx4 位的芯片组成一个 8Kx8 位存储器，共需 8 片 2Kx4 位的芯片，分为 4 组，每组由 2 片 2Kx4 位的芯片并联组成 2Kx8 位的芯片，各组芯片的地址分配如下：\n\n第一组（2 个芯片并联）：0000H ~ 07FFH\n\n第二组（2 个芯片并联）：0800H ~ 0FFFH\n\n第三组（2 个芯片并联）：1000H ~ 17FFH\n\n第四组（2 个芯片并联）：1800H ~ 1FFFH\n\n地址 OBIFH 所在的芯片属于第二组，故其所在 芯片的最小地址为 0800H。",
    tags: ["主存容量的扩展"],
    noteId: "constitution_principle-storage-memory"
  }),
  base(16, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列有关 RAM 和 ROM 的叙述中，正确的是（ ）。\n\nI. RAM 是易失性存储器，ROM 是非易失性存储器\n\nII. RAM 和 ROM 都采用随机存取方式进行信息访问\n\nIII. RAM 和 ROM 都可用作 Cache\n\nIV. RAM 和 ROM 都需要进行刷新",
    options: opt(["仅 I 和 II", "仅 II 和 III", "仅 I,II 和 IV", "仅 II，III 和 IV"]),
    answer: ["A"],
    explain: "RAM（分为 DRAM 和 SRAM）断电后会失去信息，而 ROM 断电后不会丢失信息，它们都采用随机存取方式（注意，采用随机存取方式的存储器并不一定就是随机存储器）。Cache 一般采用高速的 SRAM 制成，而 ROM 只可读，不能用作 Cache，II 错误。DRAM 需要定期刷新，而 ROM 不需要刷新，故 IV 错误。",
    tags: ["存储器概念"],
    noteId: "constitution_principle-storage-defs"
  }),
  base(17, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列命中组合情况中，一次访存过程中不可能发生的是（ ）。",
    options: opt(["TLB 未命中，Cache 未命中，Page 未命中", "TLB 未命中，Cache 命中，Page 命中", "TLB 命中，Cache 未命中，Page 命中", "TLB 命中，Cache 命中，Page 未命中"]),
    answer: ["D"],
    explain: "Cache 中存放的是主存的一部分副本，TLB（快表）中存放的是 Page（页表）的一部分副本。在同时具有虚拟页式存储器（有 TLB）和 Cache 的系统中，CPU 发出访存命令，先查找对应的 Cache 块。\n\n若 Cache 命中，则说明所需内容在 Cache 内，其所在页面必然已调入主存，因此 Page 必然命中，但 TLB 不一定命中。\n\n若 Cache 不命中，并不能说明所需内容未调入主存，和 TLB、Page 命中与否没有联系。但若 TLB 命中，Page 也必然命中；而当 Page 命中，TLB 则未必命中，故 D 不可能发生。\n\n【提示】本题看似既涉及虚拟存储器又涉及 Cache，实际上这里并不需要考虑 Cache 命中与否。因为一旦缺页，说明信息不在主存，那么 TLB 中就一定没有该页表项，所以不存在 TLB 命中、Page 缺失的情况，也根本谈不上访问 Cache 是否命中。",
    tags: ["访存过程"],
    noteId: "constitution_principle-storage-virtual"
  }),
  base(18, 'co', 'k-co-017', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列寄存器中，汇编语言程序员可见的是（ ）。",
    options: opt(["存储器地址寄存器 (MAR)", "程序计数器 (PC)", "存储器数据寄存器 (MDR)", "指令寄存器 (IR)"]),
    answer: ["B"],
    explain: "读者首先必须明白“汇编程序员可见”的含义，即汇编语言程序员通过汇编程序可以对某个寄存器进行访问。汇编程序员可以通过指定待执行指令的地址来设置 PC 的值，如转移指令、子程序调用指令等。而 R、MAR、MDR 是 CPU 的内部工作寄存器，程序员无法直接获取和设置它们的值，也无法直接对它们进行其他操作，所以对程序员不可见。\n\n【提示】①指令寄存器 R 中的内容总是根据 PC 所取出的指令代码。②在 CPU 的专用寄存器中，只有 PC 和 PSWR 是汇编程序员可见的。",
    tags: ["寄存器类型"],
    noteId: "constitution_principle-cpu-structure"
  }),
  base(19, 'co', 'k-co-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不会引起指令流水线阻塞的是（ ）。",
    options: opt(["数据旁路（转发）", "数据相关", "条件转移", "资源冲突"]),
    answer: ["A"],
    explain: "采用流水线方式，相邻或相近的两条指令可能会因为存在某种关联，后一条指令不能按照原指定的时钟周期运行，从而使流水线断流。有三种 相关 可能引起指令流水线阻塞：①结构相关，又称资源相关；②数据相关；③控制相关，主要由转移指令引起。\n\n数据 旁路转发，其主要思想是不必待某条指令的执行结果送回到寄存器，再从寄存器中取出该结果，作为下一条指令的源操作数，而是直接将执行结果送到其他指令所需要的地方，这样可以使流水线不发生停顿。",
    tags: ["流水线冒险"],
    noteId: "constitution_principle-cpu-pipeline"
  }),
  base(20, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中的英文缩写均为总线标准的是（ ）。",
    options: opt(["PCI、CRT、USB、EISA", "ISA、CPI、VESA、EISA", "ISA、SCSI、RAM、MIPS", "ISA、EISA、PCI、PCI-Express"]),
    answer: ["D"],
    explain: "常见总线标准 有：ISA、EISA、VESA、PCI、PCI-Express、AGP、USB、RS-232C 等。A 中的 CRT 是纯平显示器；B 中的 CPI 是每条指令的时钟周期数；C 中的 RAM 是半导体随机存储器、MIPS 是每秒执行多少百万条指令数。",
    tags: ["总线类型"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(21, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "单级中断系统中，中断服务程序内的执行顺序是（ ）。\n\nI 保护现场    II 开中断\n\nIII 关中断    IV 保存断点\n\nV 中断事件处理    VI 恢复现场    VII 中断返回",
    options: opt(["I→V→VI→II→VII", "III→I→V→VII", "III→IV→V→VI→VII", "IV→I→V→VI→VI"]),
    answer: ["A"],
    explain: "在 单级中断 中，不允许中断嵌套。中断处理过程为：①关中断；②保存断点；③识别中断源；④保存现场；⑤中断事件处理；⑥恢复现场；⑦开中断；⑧中断返回。其中，①③由硬件完成，④⑧由中断服务程序完成，故选 A。\n\n【排除法】选项 B、C、D 的第一个任务（保存断点或关中断）都是由中断隐指令完成的，即由硬件直接执行，与中断服务程序无关。",
    tags: ["中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(22, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定一台计算机的显示存储器用 DRAM 芯片实现，若要求显示分辨率为 1600*1200，颜色深度为 24 位，帧频为 85HZ，显存总带宽的 50% 用来刷新屏幕，则需要的显存总带宽至少约为（ ）。",
    options: opt(["245Mbps", "979Mbps", "1958Mbps", "7834Mbps"]),
    answer: ["D"],
    explain: "刷新所需带宽 = 分辨率×色深×帧频 = 1600×1200×24bit×85Hz = 3916.8Mbps，显存总带宽的 50% 用来刷屏，于是需要的显存总带宽为 3916.8Mbps/0.5 = 7833.6Mbps ≈ 7834Mbps。",
    tags: ["存储器概念"],
    noteId: "constitution_principle-storage-defs"
  }),
  base(23, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，操作系统提供给应用程序的接口是（  ）。",
    options: opt(["系统调用", "中断", "库函数", "原语"]),
    answer: ["A"],
    explain: "操作系统提供的接口主要有两类：命令接口和系统调用。系统调用是能完成特定功能的子程序，当应用程序请求操作系统提供某种服务时，便调用具有相应功能的系统调用。库函数则是高级语言中提供的与系统调用对应的函数（也有些库函数与系统调用无关），目的是隐藏访管指令的细节，使系统调用更为方便、抽象。但要注意，库函数属于用户程序而非系统调用，是系统调用的上层。",
    tags: ["操作系统概念"],
    noteId: "operating_system-concepts-concept"
  }),
  base(24, 'os', 'k-os-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，导致创建新进程的操作是（ ）。\n\nI.用户登录成功    II.设备分配    III.启动程序执行",
    options: opt(["仅 I 和 II", "仅 II 和 III", "仅 I 和 III", "I、II 和 III"]),
    answer: ["C"],
    explain: "引起进程创建的事件有：用户登录、作业调度、提供服务、应用请求等。I. 用户登录成功后，系统要为此创建一个用户管理的进程，包括用户桌面、环境等。所有的用户进程会在该进程下创建和管理。II. 设备分配是通过在系统中设置相应的数据结构实现的，不需要创建进程。III. 启动程序执行是典型的引起创建进程的事件。",
    tags: ["进程概念"],
    noteId: "operating_system-process-process_thread"
  }),
  base(25, 'os', 'k-os-006', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设与某资源关联的信号量初值为 3，当前值为 1。若 M 表示该资源的可用个数，N 表示等待该资源的进程数，则 M、N 分别是（ ）。",
    options: opt(["0、1", "1、0", "1、2", "2、0"]),
    answer: ["B"],
    explain: "信号量 表示相关资源的当前可用数量。当信号量 K>0 时，表示还有 K 个相关资源可用，所以该资源的可用个数是 1。而当信号量 K<0 时，表示有 |K| 个进程在等待该资源。由于资源有剩余，可见没有其他进程等待使用该资源，故进程数为 0。",
    tags: ["信号量"],
    noteId: "operating_system-process-sync"
  }),
  base(26, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，降低进程优先级的合理时机是（  ）。",
    options: opt(["进程时间片用完", "进程刚完成 I/O 操作，进入就绪队列", "进程长期处于就绪队列", "进程从就绪状态转为运行状态"]),
    answer: ["A"],
    explain: "进程时间片用完，可降低其优先级以让别的进程被调度进入执行状态。B 选项中进程刚完成 I/O，进入就绪队列等待被处理机调度，为了让其尽快处理 I/O 结果，故应提高优先权。C 选项中进程长期处于就绪队列，为不至于产生饥饿现象，也应适当提高优先级。D 选项中进程的优先级不应该在此时降低，而应在时间片用完后再降低。",
    tags: ["处理机调度算法"],
    noteId: "operating_system-process-scheduling"
  }),
  base(27, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "进程\nP0\n和\nP1\n的共享变量定义及其初值为\n\n`boolean flag[2];\nint turn = 0;\nflag[0] = FALSE;\nflag[1] = FALSE;\n`\n\n若进程\nP0\n和\nP1\n访问临界资源的类 C 伪代码实现如下：\n\n进程 P0\n\n`\nvoid P0() {\n while (TRUE) {\n flag[0] = TRUE;\n turn = 1;\n while (flag[1] && (turn == 1));\n 临界区；\n flag[0] = FALSE;\n }\n}\n`\n\n进程 P1\n\n`\nvoid P1() {\n while (TRUE) {\n flag[1] = TRUE;\n turn = 0;\n while (flag[0] && (turn == 0));\n 临界区；\n flag[1] = FALSE;\n }\n}\n`\n\n则并发执行进程\nP0\n和\nP1\n时产生的情形是（ ）。",
    options: opt(["不能保证进程互斥进入临界区，会出现“饥饿”现象", "不能保证进程互斥进入临界区，不会出现“饥饿”现象", "能保证进程互斥进入临界区，会出现“饥饿”现象", "能保证进程互斥进入临界区，不会出现“饥饿”现象"]),
    answer: ["D"],
    explain: "这是 Peterson 算法 的实际实现，保证进入临界区的进程合理安全。该算法为了防止两个进程为进入临界区而无限期等待，设置变量 u，表示不允许进入临界区的编号，每个进程在先设置自己标志后再设置 u 标志，不允许另一个进程进入，这时，再同时检测另一个进程状态标志和不允许进入表示，这样可以保证当两个进程同时要求进入临界区时只允许一个进程进入临界区。保存的是较晚的一次赋值，因此较晚的进程等待，较早的进程进入。先到先入，后到等待，从而完成临界区访问的要求。\n\n其实这里可以想象为两个人进门，每个人进门前都会和对方客套一句“你先走”。如果进门时没别人，就当和空气说句废话，然后大步登门入室；如果两人同时进门，就互相请先，但各自只客套一次，所以先客套的人请完对方，就等着对方请自己，然后光明正大地进门。",
    tags: ["软件互斥算法"],
    noteId: "operating_system-process-sync"
  }),
  base(28, 'os', 'k-os-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某基于动态分区存储管理的计算机，其主存容量为 55MB（初始为空闲），采用最佳适配 (Best Fit) 算法，分配和释放的顺序为：分配 15MB、分配 30MB、释放 15MB、分配 8MB、分配 6MB，此时主存中最大空闲分区的大小是（ ）。",
    options: opt(["7MB", "9MB", "10MB", "15MB"]),
    answer: ["B"],
    explain: "最佳适应 算法是指每次为作业分配内存空间时，总是找到能满足空间大小需要的最小的空闲分区给作业，可以产生最小的内存空闲分区，如下图所示。\n（图：见原题）",
    tags: ["动态分区分配"],
    noteId: "operating_system-memory-concepts"
  }),
  base(29, 'os', 'k-os-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某计算机采用二级页表的分页存储管理方式，按字节编址，页大小为\n210\nB，页表项大小为 2B，逻辑地址结构为 `| 页目录号 | 页号 |页内偏移量 |`。逻辑地址空间大小为\n216\n页，则表示整个逻辑地址空间的页目录表中包含表项的个数至少是（）。",
    options: opt(["64", "128", "256", "512"]),
    answer: ["B"],
    explain: "页大小为\n210\nB，页表项大小为 2B，故一页可以存放\n29\n个页表项，逻辑地址空间大小为\n216\n页，即共需\n216\n个页表项，则需要\n216/29=27=128\n个页面保存页表项，即页目录表中包含表项的个数至少是\n128\n。",
    tags: ["页表"],
    noteId: "constitution_principle-storage-virtual"
  }),
  base(30, 'os', 'k-os-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设文件索引结点中有 7 个地址项，其中 4 个地址项是直接地址索引，2 个地址项是一级间接地址索引，1 个地址项是二级间接地址索引，每个地址项大小为 4B，若磁盘索引块和磁盘数据块大小均为 256B，则可表示的单个文件最大长度是（）。",
    options: opt(["33KB", "519KB", "1057KB", "1651KB"]),
    answer: ["C"],
    explain: "每个磁盘索引块和磁盘数据块大小均为 256B，每个磁盘索引块有 256/4=64 个地址项。因\n此，4 个直接地址索引指向的数据块大小为 4×256B;2 个一级间接索引包含的直接地址索引数\n为 2×(256/4)，即其指向的数据块大小为 2×(256/4)×256B。1 个二级间接索引所包含的直接地址\n索引数为 (256/4)×(256/4)，即其所指向的数据块大小为 (256/4)×(256/4)×256B。即 7 个地址项所\n指向的数据块总大小为 4×256+2×(256/4)×256+(256/4)×(256/4)×256=1082368B=1057KB。",
    tags: ["文件物理结构"],
    noteId: "operating_system-files-file"
  }),
  base(31, 'os', 'k-os-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设置当前工作目录的的主要目的是（ ）。",
    options: opt(["节省外存空间", "节省内存空间", "加快文件的检索速度", "加快文件的读/写速度"]),
    answer: ["C"],
    explain: "当一个文件系统含有多级目录时，每访问一个文件，都要使用从树根开始到树叶为止、包括各中间结点名的全路径名。当前目录又称工作目录，进程对各个文件的访问都相对于当前目录进行，而不需要从根目录一层一层的检索，加快了文件的检索速度。选项 A 和 B 都与相对目录无关；选项 D，文件的读/写速度取决于磁盘的性能。",
    tags: ["目录"],
    noteId: "operating_system-files-dir"
  }),
  base(32, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "本地用户通过键盘登录系统时，首先获得键盘输入信息的程序是（ ）。",
    options: opt(["命令解释程序", "中断处理程序", "系统调用服务程序", "用户登录程序"]),
    answer: ["B"],
    explain: "键盘是典型的通过 中断 I/O 方式 工作的外设，当用户输入信息时，计算机响应中断并通过中断处理程序获得输入信息。",
    tags: ["中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(33, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不属于网络体系结构所描述的内容是（ ）。",
    options: opt(["网络的层次", "每一层使用的协议", "协议的内部实现细节", "每一层必须完成的功能"]),
    answer: ["C"],
    explain: "计算机网络的各层及其协议的集合称为体系结构，分层就涉及对各层功能的划分，因此 A、B、D 正确。体系结构是抽象的，它不包括各层协议的具体实现细节。《计算机网络》中在讲解网络层次时，仅有讲各层的协议和功能，而内部实现细节没有提及。内部实现细节是由具体设备厂家来确定的。",
    tags: ["OSI模型"],
    noteId: "computer_network-overall-iso"
  }),
  base(34, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在下图所示的采用 “存储-转发” 方式的分组交换网络中，所有链路的数据传输速率为 100 Mbps，分组大小为 1000 B，其中分组头大小为 20 B。若主机 H1 向主机 H2 发送一个大小为 980 000 B 的文件，则在不考虑分组拆装时间和传播延迟的情况下，从 H1 发送开始到 H2 接收完为止，需要的时间至少是（ ）。",
    options: opt(["80 ms", "80.08 ms", "80.16 ms", "80.24 ms"]),
    answer: ["C"],
    explain: "本题考查交换机 存储转发 的交换方式。分组大小为 1000B，其中分组头大小为 20B，则分组携带的数据大小为 980B，文件长度为 980000B，需拆分为 1000 个分组，加上头部后，每个分组大小为 1000B，总共需要传送的数据量大小为 1MB。由于所有链路的数据传输速度相同，因此文件传输经过最短路径时所需时间最\n少，最短路径经过 2 个分组交换机。\n\n当\nt=1M×8/(100Mbps)=80ms\n时，H1 发送完最后一个比特。\n\n当 H1 发送完最后一个分组时，该分组需要经过 2 个分组交换机的转发，在 2 次转发完成后，所有分组均到达 H2。每次转发的时间为\nt0=1K×8/(100Mbps)=0.08ms\n。\n\n所以，在不考虑分组拆装时间和传播延迟的情况下，当\nt=80ms+2t0=80.16ms\n时，H2 接收完文件，即所需的时间至少为 80.16ms。",
    tags: ["交换方式"],
    noteId: "computer_network-datalink-dev", figures: [{ src: A + "study_methods-408quiz-2010/d7.svg", alt: '题图' }]
  }),
  base(35, 'cn', 'k-cn-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某自治系统采用 RIP 协议，若该自治系统内的路由器 R1 收到其邻居路由器 R2 的距离矢量中包含信息<net1,16>，则可能得出的结论是 ( )。",
    options: opt(["R2 可以经过 R1 到达 net1，跳数为 17", "R2 可以到达 net1，跳数为 16", "R1 可以经过 R2 到达 net1，跳数为 17", "R1 不能经过 R2 到达 net1"]),
    answer: ["D"],
    explain: "R1 在收到信息并更新路由表后，若需要经过 R2 到达 net1，则其跳数为 17，由于距离为 16 表示不可达，因此 R1 不能经过 R2 到达 net1，R2 也不可能到达 net1。B、C 错误，D 正确。而题目中并未给出 R1 向 R2 发送的信息，因此 A 也不正确。",
    tags: ["路由协议"],
    noteId: "computer_network-network-route"
  }),
  base(36, 'cn', 'k-cn-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若路由器 R 因为拥塞丢弃 IP 分组，则此时 R 可向发出该 IP 分组的源主机发送的 ICMP 报文类型是（ ）。",
    options: opt(["路由重定向", "目的不可达", "源点抑制", "超时"]),
    answer: ["C"],
    explain: "ICMP 差错报文 报文有 5 种：终点不可达、源点抑制、时间超过、参数问题、改变路由（重定向），其中源点抑制是当路由器或主机由于拥塞而丢弃数据报时，就向源点发送源点抑制报文，使源点知道应当把数据报的发送速率放慢。",
    tags: ["ICMP"],
    noteId: "computer_network-network-icmp"
  }),
  base(37, 'cn', 'k-cn-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某网络的 IP 地址空间为 192.168.5.0/24，采用定长子网划分，子网掩码为 255.255.255.248，则该网络中的最大子网个数、每个子网内的最大可分配地址个数分别是（ ）。",
    options: opt(["32, 8", "32, 6", "8, 32", "8, 30"]),
    answer: ["B"],
    explain: "由于该网络的 IP 地址为 192.168.5.0/24，网络号为前 24 位，后 8 位为子网号 + 主机号。子网掩码 为 255.255.255.248，第 4 个字节 248 转换成二进制为 11111000，因此后 8 位中，前 5 位用于子网号，在 CIDR 中可以表示\n25=32\n个子网；后 3 位用于主机号，除去全 0 和全 1 的情况，可以表示\n23−2=6\n个主机地址。",
    tags: ["子网划分"],
    noteId: "computer_network-network-ip"
  }),
  base(38, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列网络设备中，能够抑制广播风暴的是（ ）。\n\nI. 中继器 II. 集线器 III. 网桥 IV. 路由器",
    options: opt(["仅 I 和 II", "仅 III", "仅 III 和 IV", "仅 IV"]),
    answer: ["D"],
    explain: "参考 网络设备对比，中继器和集线器工作在物理层，既不隔离冲突域也不隔离广播域。为了解决冲突域的问题，人们利用网桥和交换机来分隔互联网的各个网段中的通信量，建立多个分离的冲突域，但当网桥和交换机接收到一个未知转发信息的数据帧时，为了保证该帧能被目的结点正确接收，将该帧从所有的端口广播出去，可以看出网桥和交换机的冲突域等于端口个数，广播域为 1。路由器工作在网络层，既隔离冲突域，也隔离广播域。\n\n【提示】广播风暴产生于网络层，因此只有网络层设备才能抑制。链路层设备和物理层设备对网络层的数据包是透明传输，对是否为广播报文是不可知的。",
    tags: ["网络设备"],
    noteId: "computer_network-overall-dev"
  }),
  base(39, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "主机甲和主机乙之间已建立了一个 TCP 连接，TCP 最大段长度为 1000 字节。若主机甲的当前拥塞窗口为 4000 字节，在主机甲向主机乙连续发送两个最大段后，成功收到主机乙发送的第一个段的确认段，确认段中通告的接收窗口大小为 2000 字节，则此时主机甲还可以向主机乙发送的最大字节数是（ ）。",
    options: opt(["1000", "2000", "3000", "4000"]),
    answer: ["A"],
    explain: "发送窗口大小 的上限值取接收方窗口和拥塞窗口这两个值中较小的一个，于是此时发送方的发送窗口为 min{4000,2000}=2000B。由于发送方还没有收到第二个最大段的确认，所以此时甲还可以向乙发送的最大字节数为 2000-1000=1000B。",
    tags: ["TCP拥塞控制"],
    noteId: "computer_network-transport-tcp"
  }),
  base(40, 'cn', 'k-cn-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "如果本地域名服务器无缓存，当采用递归方法解析另一网络某主机域名时，用户主机、本地域名服务器发送的域名请求消息数分别为（ ）。",
    options: opt(["一条、一条", "一条、多条", "多条、一条", "多条、多条"]),
    answer: ["A"],
    explain: "当采用 递归查询 时，如果主机所询问的本地域名服务器不知道被查询域名的 IP 地址，那么本地域名服务器就以 DNS 客户的身份，向其他根域名服务器继续发出查询请求报文，而不是让该主机自己进行下一步的查询。因此，这种方法用户主机和本地域名服务器发送的域名请求条数均为 1 条。因此选 A。",
    tags: ["DNS"],
    noteId: "computer_network-application-dns"
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "将关键字序列 ⟨7,8,30,11,18,9,14⟩ 散列存储到散列表中。散列表的存储空间是一个下标从 0 开始的一维数组，散列函数为 H(key)=(key×3)mod7 ，处理冲突采用线性探测再散列法，要求装填（载）因子为 0.7 。\n\n(1) 请画出所构造的散列表。\n\n(2) 分别计算等概率情况下查找成功和查找不成功的平均查找长度。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "设将\nn\n(\nn>1\n) 个整数存放到一维数组 R 中。试设计一个在时间和空间两方面都尽可能高效的算法。将 R 中保存的序列循环左移\np(0<p<N\n) 个位置，即将 R 中的数据由 \n<x0,x1,⋯,xn−1>\n 变换为 \n<xp,xp+1,⋯,xn−1,x0,x1,⋯,xp−1>\n 。要求：\n\n(1) 给出算法的基本设计思想。\n\n(2) 根据设计思想，采用 C 或 C++ 或 Java 语言描述，关键之处给出注释。\n\n(3) 说明你所设计算法的时间复杂度和空间复杂度。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "某计算机字长为 16 位，主存地址空间大小为 128KB，按字编址。采用单字长指令格式，指令各字段定义如下：\n\n转移指令采用相对寻址方式，相对偏移量用补码表示，寻址方式定义如下：\n\nMs/Md寻址方式助记符含义\n\n000B寄存器直接Rn操作数 = (Rn)\n\n001B寄存器间接(Rn)操作数 = ((Rn))\n\n010B寄存器间接、自增(Rn)+操作数 = ((Rn)), (Rn) + 1 → Rn\n\n011B相对D(Rn)转移目标地址 = (PC) + (Rn)\n\n请回答下列问题：\n\n(1) 该指令系统最多可有多少条指令？该计算机最多有多少个通用寄存器？存储器地址寄存器（MAR）和存储器数据寄存器（MDR）至少各需要多少位？\n\n(2) 转移指令的目标地址范围是多少？\n\n(3) 若操作码 0010B 表示加法操作（助记符为 add），寄存器 R4 和 R5 的编号分别为 100B 和 101B，R4 的内容为 1234H，R5 的内容为 5678H，地址 1234H 中的内容为 5678H，地址 5678H 中的内容为 1234H，则汇编语言为“add (R4), (R5)+”（逗号前为源操作数，逗号后为目的操作数）对应的机器码是什么（用十六进制表示）？该指令执行后，哪些寄存器和存储单元中的内容会改变？改变后的内容是什么？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2010/d8.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "某计算机的主存地址空间大小为 256MB，按字节编址。指令 Cache 和数据 Cache 分离，均有 8 个 Cache 行，每个 Cache 行大小为 64B，数据 Cache 采用直接映射方式。现有两个功能相同的程序 A 和 B，其伪代码如下所示：\n\n`\n// 程序 A\nint a[256][256];\n.....\nint sum_array1()\n{\n int i, j, sum=0;\n for (i=0; i<256; i++)\n for (j=0; j<256; j++)\n sum += a[i][j];\n return sum;\n}\n`\n\n`\n// 程序 B\nint a[256][256];\n.....\nint sum_array2()\n{\n int i, j, sum=0;\n for (j=0; j<256; j++)\n for (i=0; i<256; i++)\n sum += a[i][j];\n return sum;\n}\n`\n\n假定 int 类型数据用 32 位补码表示，程序编译时 i，j，sum 均分配在寄存器中，数组 a 按行优先方式存放，其首地址为 320（十进制数）。请回答下列问题，要求说明理由或给出计算过程。\n\n(1) 若不考虑用于 cache 一致性维护和替换算法的控制位，则数据 Cache 的总容量为多少？\n\n(2) 数组元素 a[0][31] 和 a[1][1] 各自所在的主存块对应的 Cache 行号分别是多少（Cache 行号从 0 开始）？\n\n(3) 程序 A 和 B 的数据访问命中率各是多少？哪个程序的执行时间更短？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "假设计算机系统采用 CSCAN（循环扫描）磁盘调度策略，使用 2KB 的内存空间记录 16384 个磁盘块的空闲状态。\n\n(1) 请说明在上述条件如何进行磁盘块空闲状态的管理。\n\n(2) 设某单面磁盘的旋转速度为 6000rpm，每个磁道有 100 个扇区，相邻磁道间的平均移动的时间为 1ms。若在某时刻，磁头位于 100 号磁道处，并沿着磁道号增大的方向移动（见下图），磁道号的请求队列为 50, 90, 30, 120，对请求队列中的每个磁道需读取 1 个随机分布的扇区，则读完这个扇区点共需要多少时间？需要给出计算过程。\n\n(3) 如果将磁盘替换为随机访问的 Flash 半导体存储器（如 U 盘、SSD 等），是否有比 CSCAN 更高效的磁盘调度策略？若有，给出磁盘调度策略的名称并说明理由；若无，说明理由。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2010/d11.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "设某计算机的逻辑地址空间和物理地址空间均为 64KB，按字节编址。若某进程最多需要 6 页（Page）数据存储空间，页的大小为 1KB，操作系统采用固定分配局部置换策略为此进程分配 4 个页框（Page Frame）。在时刻 260 前该进程访问情况见下表（访问位即使用位）。\n\n页号页框号装入时刻访问位\n\n071301\n\n142301\n\n222001\n\n392601\n\n当该进程执行到时刻 260 时，要访问逻辑地址为 17CAH 的数据。请回答下列问题：\n\n(1) 该逻辑地址对应的页号是多少？\n\n(2) 若采用先进先出 (FIFO) 置换算法，该逻辑地址对应的物理地址？要求给出计算过程。\n\n(3) 采用时钟 (CLOCK) 置换算法，该逻辑地址对应的物理地址是多少？要求给出计算过程（设搜索下一页的指针按顺时针方向移动，且指向当前 2 号页框，示意图如下图）。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2010/d12.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "某局域网采用 CSMA/CD 协议实现介质访问控制，数据传输速率为 10 Mbps，主机甲和主机乙之间的距离为 2 km，信号传播速度是 200 000 km/s。请回答下列问题，要求说明理由或写出计算过程。\n\n(1) 若主机甲和主机乙发送数据时发生冲突，则从开始发送数据时刻起，到两台主机均检测到冲突时刻止，最短需经过多长时间？最长需经过多长时间（假设主机甲和主机乙发送数据过程中，其他主机不发送数据）？\n\n(2) 若网络不存在任何冲突与差错，主机甲总是以标准的最长以太网数据帧（1518 字节）向主机乙发送数据，主机乙每成功收到一个数据帧后立即向主机甲发送一个 64 字节的确认帧，主机甲收到确认帧后方可发送下一个数据帧。此时主机甲的有效数据传输速率是多少（不考虑以太网的前导码）？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2010_408 = {
  id: P, year: Y,
  title: '2010 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2010 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2010_408.length,
  qids: questions2010_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2010',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
