const P = 'paper-2018-408'
const Y = 2018
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, subject, knowledgeId, extra = {}) => ({
  id: `q-408-2018-${String(n).padStart(2, '0')}`,
  subject, knowledgeId, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real',
  sourceName: '2018 年 408 统考原卷（站内镜像）',
  sourceUrl: '#/notes/study_methods-408quiz-2018',
  ...extra
})
const opt = arr => arr.map((t, i) => ({ key: 'ABCD'[i], text: t }))
export const questions2018_408 = [
  base(1, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若栈 S1 中保存整数，栈 S2 中保存运算符，函数 F() 依次执行下述各步操作：\n\n从 S1 中依次弹出两个操作数 a 和 b;\n\n从 S2 中弹出一个运算符 op;\n\n执行相应的运算 b op a;\n\n将运算结果压入 S1 。\n\n假定 S1 中的操作数依次是 5,8,3,2（2 在栈顶），S2 中的运算符依次是 ×,−,+ （ + 在栈顶）。调用 3 次 F() 后，S1 栈顶保存的值是（ ）。",
    options: opt(["-15", "15", "-20", "20"]),
    answer: ["B"],
    explain: "本题考察 后序表达式求值，调用三次 `F()` 栈中内容如下表所示：\n\n调用次数 | S1 初始状态（栈底 → 栈顶） | S2 初始状态（栈底 → 栈顶） | 弹出操作数 a, b | 弹出运算符 op | 执行运算 b op a | 运算结果入栈后 S1 状态（栈底 → 栈顶）\n第一次 | 5, 8, 3, 2 | ×, −, + | a=2, b=3 | + | 3 + 2 = 5 | 5, 8, 5\n第二次 | 5, 8, 5 | ×, − | a=5, b=8 | − | 8 − 5 = 3 | 5, 3\n第三次 | 5, 3 | × | a=3, b=5 | × | 5 × 3 = 15 | 15\n\n调用三次 `F()` 后，S1 的栈顶是 15，因此选择 B。",
    tags: ["后序表达式求值"],
    noteId: "data_structure-array-application"
  }),
  base(2, 'ds', 'k-ds-005', {
    type: 'single', difficulty: 2, score: 2,
    stem: "现有队列 Q 与栈 S，初始时 Q 中的元素依次是 1,2,3,4,5,6（1 在队头），S 为空。若仅允许下列 3 种操作：\n\n① 出队并输出出队元素\n\n② 出队并将出队元素入栈\n\n③ 出栈并输出出栈元素\n\n则不可能得到的输出序列是（ ）。",
    options: opt(["1，2，5，6，4，3", "2，3，4，5，6，1", "3，4，5，6，1，2", "6，5，4，3，2，1"]),
    answer: ["C"],
    explain: "本题考察 入栈出栈序列：A 的操作顺序：①①②②①①③③。B 的操作顺序：②①①①①①③。D 的操作顺序：②②②②②①③③③③。对于 C：首先输出 3，说明 1 和 2 必须先依次入栈，而此后 2 肯定比 1 先输出，因此无法得到 1,2 的输出顺序。",
    tags: ["入栈出栈序列"],
    noteId: "data_structure-array-application"
  }),
  base(3, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设有一个\n12×12\n的对称矩阵\nM\n，将其上三角部分的元素\nmi,j(1≤i≤j≤12)\n按行优先存入 C 语言的一维数组\nN\n中，元素\nm6,6\n在\nN\n中的下标是（ ）。",
    options: opt(["50", "51", "55", "66"]),
    answer: ["A"],
    explain: "数组\nN\n的下标从\n0\n开始，第一个元素\nm1,1\n对应存入\nn0\n，矩阵\nM\n的第一行有 12 个元素，第二行有 11 个，第三行有 10 个，第四行有 9 个，第五行有 8 个，所以\nm6,6\n是第 12 + 11 + 10 + 9 + 8 + 1 = 51 个元素，下标应为 50, 故选 A。",
    tags: ["特殊矩阵"],
    noteId: "data_structure-array-matrix"
  }),
  base(4, 'ds', 'k-ds-008', {
    type: 'single', difficulty: 2, score: 2,
    stem: "设一棵非空完全二叉树 T 的所有叶结点均位于同一层，且每个非叶结点都有 2 个子结点。若 T 有 k 个叶结点，则 T 的结点总数是（ ）。",
    options: opt(["2k−1", "2k", "k2", "2k−1"]),
    answer: ["A"],
    explain: "非叶结点的度均为 2, 且所有叶结点都位于同一层的完全二叉树就是满二叉树。对一棵高度为 h 的满二叉树（空树\nh=0\n）, 其最后一层全部是叶结点，数量为\n2h−1\n; 总结点数为\n2h−1\n。因此当\n2h−1=k\n时，可以得到\n2h−1=2k−1\n。",
    tags: ["满二叉树"],
    noteId: "data_structure-tree-btree"
  }),
  base(5, 'ds', 'k-ds-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知字符集{a, b, c, d, e, f}，若各字符出现的次数分别为 6, 3, 8, 2, 10, 4，则对应字符集中各字符的哈夫曼编码可能是（ ）。",
    options: opt(["00, 1011, 01, 1010, 11, 100", "00, 100, 110, 000, 0010, 01", "10, 1011, 11, 0011, 00, 010", "0011, 10, 11, 0010, 01, 000"]),
    answer: ["A"],
    explain: "构造一棵符合题意的哈夫曼树，如下图所示。\n（图：见原题）\n由此可知，左子树为 0, 右子树为 1, 故答案为 A。\n\n这题也可以 使用排除法，因为哈夫曼编码是前缀编码，所以任意编码都不能是另一个编码的前缀，根据这一点可以排除掉 B、C 选项。\nD 选项也是错误的，因为字符 e 的出现次数为 10 很高，它不能哈夫曼编码长度最短，这不合理。",
    tags: ["哈夫曼树"],
    noteId: "data_structure-tree-app"
  }),
  base(6, 'ds', 'k-ds-018', {
    type: 'single', difficulty: 2, score: 2,
    stem: "已知二叉排序树如下图所示，元素之间应满足的大小关系是（ ）。",
    options: opt(["x1<x2<x3", "x1<x4<x5", "x3<x5<x4", "x4<x3<x5"]),
    answer: ["C"],
    explain: "根据 二叉排序树 的特性：中序遍历（LNR）得到的是一个递增序列。图中二叉排序树的中序遍历序列为\nxi,x3,x5,x4,x2\n, 可知\nx3<x5<x4\n。",
    tags: ["二叉排序树"],
    noteId: "data_structure-tree-btree", figures: [{ src: A + "study_methods-408quiz-2018/d2.svg", alt: '题图' }]
  }),
  base(7, 'ds', 'k-ds-016', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不是如下有向图的拓扑序列的是（ ）",
    options: opt(["1, 5, 2, 3, 6, 4", "5, 1, 2, 6, 3, 4", "5, 1, 2, 3, 6, 4", "5, 2, 1, 6, 3, 4"]),
    answer: ["D"],
    explain: "拓扑排序 每次选取入度为 0 的结点输出，经观察不难发现拓扑序列前两位一定是 1,5 或 5,1（因为只有 1 和 5 的入度均为 0，且其他结点都不满足仅有 1 或仅有 5 作为前驱）。因此 D 显然错误。",
    tags: ["拓扑排序"],
    noteId: "data_structure-basic-alg_design", figures: [{ src: A + "study_methods-408quiz-2018/d3.svg", alt: '题图' }]
  }),
  base(8, 'ds', 'k-ds-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "高度为 5 的 3 阶 B 树含有的关键字个数至少是（ ）",
    options: opt(["15", "31", "62", "242"]),
    answer: ["B"],
    explain: "m\n阶 B 树 的基本性质：根结点以外的非叶结点最少含有\n⌈m/2⌉−1\n个关键字，代入\nm=3\n得到每个非叶结点中最少包含 1 个关键字，而根结点含有 1 个关键字，因此所有非叶结点都有两个孩子。此时其树形与 h=5 的满二叉树相同，可求得关键字最少为 31 个。",
    tags: ["B树"],
    noteId: "data_structure-search-tree"
  }),
  base(9, 'ds', 'k-ds-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "现有长度为 7、初始为空的散列表 HT，散列函数 H(k) = k % 7，用线性探测再散列法解决冲突。将关键字 22, 43, 15 依次插人到 HT 后，查找成功的平均查找长度是（ ）",
    options: opt(["1.5", "1.6", "2", "3"]),
    answer: ["C"],
    explain: "可以构造得到如下的 HT：\n\n下标 | 0 | 1 | 2 | 3 | 4 | 5 | 6\n关键词 | | 22 | 43 | 15 | | | \n\n成功时的平均查找长度 = (1+2+3)/3 = 2。",
    tags: ["散列表", "平均查找长度"],
    noteId: "data_structure-search-hash"
  }),
  base(10, 'ds', 'k-ds-020', {
    type: 'single', difficulty: 2, score: 2,
    stem: "对初始数据序列 (8, 3, 9, 11, 2, 1, 4, 7, 5, 10, 6) 进行希尔排序。若第一趟排序结果为 (1, 3, 7, 5, 2, 6, 4, 9, 11, 10, 8)，第二趟排序结果为 (1, 2, 6, 4, 3, 7, 5, 8, 11, 10, 9)，则两趟排序采用的增量（间隔）依次是（ ）。",
    options: opt(["3,1", "3,2", "5,2", "5,3"]),
    answer: ["D"],
    explain: "参考 希尔排序，可以观察到，第一次排序后的数组沿 gap=5 有序，第二次排序后数组沿 gap=3 有序，所以答案选择 D。",
    tags: ["排序算法", "希尔排序"],
    noteId: "data_structure-sort-internal"
  }),
  base(11, 'ds', 'k-ds-022', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在将数据序列 (6, 1, 5, 9, 8, 4, 7) 建成大根堆时，正确的序列变化过程是（）。",
    options: opt(["6,1,7,9,8,4,5 → 6,9,7,1,8,4,5 → 9,6,7,1,8,4,5 → 9,8,7,1,6,4,5", "6,9,5,1,8,4,7 → 6,9,7,1,8,4,5 → 9,6,7,1,8,4,5 → 9,8,7,1,6,4,5", "6,9,5,1,8,4,7 → 9,6,5,1,8,4,7 → 9,6,7,1,8,4,5 → 9,8,7,1,6,4,5", "6,1,7,9,8,4,5 → 7,1,6,9,8,4,5 → 7,9,6,1,8,4,5 → 9,7,6,1,8,4,5 → 9,8,6,1,7,4,5"]),
    answer: ["A"],
    explain: "参考构造初始堆，该题的堆变化过程如下图所示：\n（图：见原题）\n答案选择 A。",
    tags: ["堆的概念"],
    noteId: "data_structure-sort-internal"
  }),
  base(12, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "冯诺依曼结构计算机中数据采用二进制编码表示，其主要原因是（）。\n\nⅠ.二进制的运算规则简单\n\nⅡ.制造两个稳态的物理器件较容易\n\nⅢ.便于用逻辑门电路实现算术运算",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅲ", "仅Ⅱ、Ⅲ", "Ⅰ、Ⅱ和Ⅲ"]),
    answer: ["D"],
    explain: "对于 I，二进制由千只有 0,1 两种数值，运算规则较简单，都是通过 ALU 部件转换成加法运算。对于 II，二进制只需要高电平和低电平两个状态就可以表示，这样的物理器件很容易制造。对于 III, 二进制与逻辑量相吻合。二进制的 0 和 1 正好与逻辑量的“真”和“假”相对应，因此用二进制数表示二值逻辑显得十分自然，采用逻辑门电路很容易实现运算。",
    tags: ["计算机体系结构"],
    noteId: "constitution_principle-overview-structure"
  }),
  base(13, 'co', 'k-co-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定带符号整数采用补码表示，若 int 型变量 x 和 y 的机器数分别是 FFFF FFDFH 和 0000 0041H，则 x、y 的值以及 x-y 的机器数分别是（ ）。",
    options: opt(["x=-65，y=41，x-y 的机器数溢出", "x=-33，y=65，x-y 的机器数为 FFFFFF9DH", "x=-33，y=65，x-y 的机器数为 FFFFFF9EH", "x=-65，y=41，x-y 的机器数为 FFFFFF96H"]),
    answer: ["C"],
    explain: "利用 补码转换成原码的规则：负数符号位不变数值位取反加 1；正数补码等于原码。两个机器数对应的原码是 [x]原 = 80000021H，对应的数值是 -33，[y]原=[y]补=00000041H=65。排除 A、D 选项。x-y 直接利用补码减法准则，[x]补-[y]补 =[x]补+[-y]补，-y 的补码是连同符号位取反加 1，最终减法变成加法，得出结果为 FFFFFF9EH。",
    tags: ["补码", "类型转换"],
    noteId: "constitution_principle-representation-integer"
  }),
  base(14, 'co', 'k-co-013', {
    type: 'single', difficulty: 2, score: 2,
    stem: "IEEE 754 单精度浮点格式表示的数中，最小的规格化正数是 (  )",
    options: opt(["1.0×2−126", "1.0×2−127", "1.0×2−128", "1.0×2−149"]),
    answer: ["A"],
    explain: "IEEE754 单精度浮点数的符号位、阶码位、尾数位（省去正数位 1）所占的位数分别是 1、8、23 位。最小正数，数符位取 0，移码的取值范围是 1~254，取 1，得阶码值 1-127=-126（127 为我们规定的偏置值），尾数取全 0，最终推出最小规格化正数为 A 选项。",
    tags: ["IEEE浮点数表示"],
    noteId: "constitution_principle-representation-floats"
  }),
  base(15, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某 32 位计算机按字节编址，采用小端（Little Endian）方式。若语句 `int i=0` 对应指令的机器代码为 `C7 45 FC 00 00 00 00`，则语句 `int i=-64` 对应指令的机器代码是（ ）。",
    options: opt(["C7 45 FC C0 FF FF FF", "C7 45 FC 0C FF FF FF", "C7 45 FC FF FF FF C0", "C7 45 FC FF FF FF 0C"]),
    answer: ["A"],
    explain: "按字节编址，采用 小端序，低位的数据存储在低地址位、高位的数据存储在高地址位，并且按照一个字节相对不变的顺序存储。由题意知机器代码的地址是递减的，存储 0 的位数是后 32 位，那么我们只需要把 -64 的补码按字节存储在其中即可，而 -64 表示成 32 位的十六进制数是 FFFFFF CO, 根据小端方式的特点，高字节存储在低地址，就是 CO FF FF FF, 故选 A。",
    tags: ["大小端"],
    noteId: "constitution_principle-instruction-alignment"
  }),
  base(16, 'co', 'k-co-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "整数 x 的机器数为 11011000，分别对 x 进行逻辑右移 1 位和算术右移 1 位操作，得到的机器数各是（ ）。",
    options: opt(["1110 1100、1110 1100", "0110 1100、1110 1100", "1110 1100、0110 1100", "0110 1100、0110 1100"]),
    answer: ["B"],
    explain: "逻辑移位：左移和右移空位都补 0, 并且所有数字参与移动。算术移位：符号位不参与移动，右移空位补符号位，左移空位补 0。根据该规则，轻松选出 B 选项。",
    tags: ["逻辑移位"],
    noteId: "constitution_principle-instruction-instruction_ops"
  }),
  base(17, 'co', 'k-co-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假定 DRAM 芯片中存储阵列的行数为 r、列数为 c，对于一个 2K×1 位的 DRAM 芯片，为保证其地址引脚数最少，并尽量减少刷新开销，则 r、c 的取值分别是（ ）。",
    options: opt(["2048、1", "64、32", "32、64", "1、2048"]),
    answer: ["C"],
    explain: "本题考察 主存容量的扩展，首先根据 DRAM 采用的是行列地址线复用技术，我们尽量选用行列差值不要太大的。对于 B、C 选项，地址线只需 6 根（取行或列所需地址线的最大值），轻松排除 A、D 选项。其次，为了减小刷新开销，而 DRAM 一般是按行刷新的，所以应选行数值较少的，答案为 C。",
    tags: ["主存容量的扩展"],
    noteId: "constitution_principle-storage-memory"
  }),
  base(18, 'co', 'k-co-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "按字节编址的计算机中，某 double 型数组 A 的首地址为 2000H，使用变址寻址和循环结构访问数组 A，保存数组下标的变址寄存器初值为 0，每次循环取一个数组元素，其偏移地址为变址值乘以 sizeof(double)，取完后变址寄存器内容自动加 1。若某次循环所取元素的地址为 2100H，则进入该次循环时变址寄存器的内容是（ ）。",
    options: opt(["25", "32", "64", "100"]),
    answer: ["B"],
    explain: "根据 变址寻址 的公式 EA=(IX)+A, 则 (IX)=2100H-2000H=100H=256，sizeof(double)=8（双精度浮点数用 8 位字节表示），因此数组的下标为 256/8=32, 答案选 B。",
    tags: ["指令寻址方式"],
    noteId: "constitution_principle-instruction-format"
  }),
  base(19, 'co', 'k-co-017', {
    type: 'single', difficulty: 2, score: 2,
    stem: "减法指令 `sub R1,R2,R3` 的功能为 `(R1)-(R2)→R3`，该指令执行后将生成进位/借位标志 CF 和溢出标志 OF。若 `(R1)=FFFFFFFFH`，`(R2)=FFFFFFF0H`，则该减法指令执行后，CF 与 OF 分别为（ ）。",
    options: opt(["CF=0，OF=0", "CF=1，OF=0", "CF=0，OF=1", "CF=1，OF=1"]),
    answer: ["A"],
    explain: "[x]补 = [y]补 = [x]补 + [-y]补，[-R2]补 = 00000010H, 很明显[R1]补 + [-R2]补的最高位进位和符号位进位都是 1（当最高位进位和符号位进位的 值不相同 时才产生溢出），可以判断溢出标志 OF 为 0。同时，减法操作只需判断借位标志，R1 大于 R2, 所以借位标志为 0, 综上选 A",
    tags: ["标志寄存器"],
    noteId: "constitution_principle-cpu-structure"
  }),
  base(20, 'co', 'k-co-019', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若某计算机最复杂指令的执行需要完成 5 个子功能，分别由功能部件 A~E 实现，各功能部件所需时间分别为 80ps、50ps、50ps、70ps 和 50ps，采用流水线方式执行指令，流水段寄存器延时为 20ps，则 CPU 时钟周期至少为（ ）。",
    options: opt(["60ps", "70ps", "80ps", "100ps"]),
    answer: ["D"],
    explain: "指令流水线的每个流水段时间单位为时钟周期，题中指令流水线的指令需要用到 A~E 五个部件，所以每个流水段时间应取：最大部件时间 80ps, 此外还有寄存器延时为 20ps, 则 CPU 时钟周期至少是 100ps。答案选 D。",
    tags: ["流水线概念"],
    noteId: "constitution_principle-cpu-pipeline"
  }),
  base(21, 'co', 'k-co-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，可提高同步总线数据传输率的是（ ）。\n\nⅠ. 增加总线宽度\n\nⅡ. 提高总线工作频率\n\nⅢ. 支持突发传输\n\nⅣ. 采用地址/数据线复用",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅰ、Ⅱ、Ⅲ", "仅Ⅲ、Ⅳ", "Ⅰ、Ⅱ、Ⅲ和Ⅳ"]),
    answer: ["B"],
    explain: "总线数据传输率 ＝ 总线工作频率 x 总线带宽（＝总线宽度 / 8）, 所以 Ⅰ 和 Ⅱ 会影响总线数据传输率。采用突发总线传输事务（也称猝发传输），在一个总线周期内传输存储地址连续的多个数据字，从而提高了传输效率。采用地址 I 数据线复用只是减少了线的数量，节省了成本，并不能提高传输率。",
    tags: ["总线指标"],
    noteId: "constitution_principle-bus-bus"
  }),
  base(22, 'co', 'k-co-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于外部 I/O 中断的叙述中，正确的是（ ）。",
    options: opt(["中断控制器按所接收中断请求的先后次序进行中断优先级排队", "CPU 响应中断时，通过执行中断隐指令完成通用寄存器的保护", "CPU 只有在处于中断允许状态时，才能响应外部设备的中断请求", "有中断请求时，CPU 立即暂停当前指令执行，转去执行中断服务程序"]),
    answer: ["C"],
    explain: "中断优先级由屏蔽字决定，而不是根据请求的先后次序，因此 A 错误。中断隐指令完成的工作有：① 关中断；② 保存断点；③ 引出中断服务程序，通用寄存器的保护由中断服务程序完成，B 错误。中断允许状态即开中断后，才能响应中断请求，C 正确。有中断请求时，先要由中断隐指令完成中断前程序的状态保存，D 错误。",
    tags: ["中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(23, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列关于多任务操作系统的叙述中，正确的是（  ）。\n\nⅠ.具有并发和并行的特点\n\nⅡ.需要实现对共享资源的保护\n\nⅢ.需要运行在多 CPU 的硬件平台上",
    options: opt(["仅Ⅰ", "仅Ⅱ", "仅Ⅰ、Ⅱ", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["C"],
    explain: "多任务操作系统可以在同一时间内运行多个应用程序，故 Ⅰ 正确。多个任务必须互斥地访问共享资源，为达到这一目标必须对共享资源进行必要的保护，故 Ⅱ 正确。现代操作系统都是多任务的（主要特点是并发和并行），并不一定需要运行在多 CPU 的硬件上，单个 CPU 也可以满足要求，Ⅲ 错误。综上所述，Ⅰ、Ⅱ 正确，Ⅲ 错误，故选 C。",
    tags: ["操作系统概念"],
    noteId: "operating_system-concepts-concept"
  }),
  base(24, 'os', 'k-os-009', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某系统采用基于优先权的非抢占式进程调度策略，完成一次进程调度和进程切换的系统时间开销为 1us。在 T 时刻就绪队列中有 3 个进程 P1、P2 和 P3，其在就绪队列中的等待时间、需要的 CPU 时间和优先权如下表所示。若优先权值大的进程优先获得 CPU，从 T 时刻起系统开始进程调度，则系统的平均周转时间为（）。\n\n进程等待时间需要的 CPU 时间优先级\n\nP130us12us10\n\nP215us24us30\n\nP318us36us20",
    options: opt(["54us", "73us", "74us", "75us"]),
    answer: ["D"],
    explain: "本题考察 非抢占式优先级调度，由优先权可知，进程的执行顺序为 P2 → P3 → P1。\n\nP2 的周转时间：1 +15+24= 40μs\n\nP3 的周转时间：18+1+24+1 +36= 80μs\n\nP1 的周转时间：30+1+24 +1 +36+1 +12=105μs\n\n平均周转时间： (40+80+105) /3= 225/3= 75μs, 故选 D。",
    tags: ["处理机调度算法"],
    noteId: "operating_system-process-scheduling"
  }),
  base(25, 'os', 'k-os-003', {
    type: 'single', difficulty: 2, score: 2,
    stem: "属于同一进程的两个线程 thread1 和 thread2 并发执行，共享初值为 0 的全局变量 x。thread1 和 thread2 实现对全局变量 x 加 1 的机器级代码描述如下：\n\nthread1\n\n`\nmov R1, x // (x) → R1\ninc R1 // (R1) + 1 → R1\nmov x, R1 // (R1) → x\n`\n\nthread2\n\n`\nmov R2, x // (x) → R2\ninc R2 // (R2) + 1 → R2\nmov x, R2 // (R2) → x\n`\n\n在所有可能的指令执行序列中，使 x 的值为 2 的序列个数是（）。",
    options: opt(["1", "2", "3", "4"]),
    answer: ["B"],
    explain: "仔细阅读两个线程代码可知，threadl 和 thread2 均是对 x 进行加 1 操作，x 初始值为 0，若要使得最终 x = 2，只有先执行 thread1 再执行 thread2，或先执行 thread2 再执行 threadl，故只有 2 种可能，选 B。",
    tags: ["进程和线程"],
    noteId: "operating_system-process-process_thread"
  }),
  base(26, 'os', 'k-os-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "假设系统中有 4 个同类资源，进程 P1、P2 和 P3 需要的资源数分别为 4、3 和 1，P1、P2 和 P3 已申请到的资源数分别为 2、1 和 0，则执行安全性检测算法的结果是（）。",
    options: opt(["不存在安全序列，系统处于不安全状态", "存在多个安全序列，系统处于安全状态", "存在唯一安全序列 P3、P1、P2，系统处于安全状态", "存在唯一安全序列 P3、P2、P1，系统处于安全状态"]),
    answer: ["A"],
    explain: "本题考察安全性检查，由题中数据可知，仅剩最后一个同类资源，若将其分给 P1 或 P2，则均无法正常执行；若分给 P3，则 P3 正常执行完成后，释放的这个资源仍无法使 P1、P2 正常执行，故不存在安全序列，选 A。",
    tags: ["银行家算法"],
    noteId: "operating_system-process-deadlock"
  }),
  base(27, 'os', 'k-os-004', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，可能导致当前进程 P 阻塞的事件是（  ）。\n\nⅠ.进程 P 申请临界资源\n\nⅡ.进程 P 从磁盘读数据\n\nⅢ.系统将 CPU 分配给高优先级的进程",
    options: opt(["仅Ⅰ", "仅Ⅱ", "仅Ⅰ、Ⅱ", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["C"],
    explain: "本题考察 进程的状态转化，进程等待某资源为可用（不包括处理机）或等待输入／输出完成均会进入阻塞状态，故 I、II 正确；III 中情况发生时，进程进入就绪状态，故 III 错误，答案选 C。",
    tags: ["进程状态"],
    noteId: "operating_system-process-process_thread"
  }),
  base(28, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "若 x 是管程内的条件变量，则当进程执行 x.wait() 时所做的工作是（）。",
    options: opt(["实现对变量 x 的互斥访问", "唤醒一个在 x 上阻塞的进程", "根据 x 的值判断该进程是否进入阻塞态", "阻塞该进程，并将之插入 x 的阻塞队列中"]),
    answer: ["D"],
    explain: "条件变量 是 管程 内部说明和使用的一种特殊变量，其作用类似于信号量机制中的信号量，都是用于实现进程同步的。需要注意的是，在同一时刻，管程中只能有一个进程在执行。如果进程 A 执行了 x.wait() 操作，那么该进程会阻塞，并挂到条件变量 x 对应的阻塞队列上。这样，管程的使用权被释放，就可以有另一个进程进入管程。如果进程 B 执行了 x.signal() 操作，那么会唤醒 x 对应的阻塞队列队头进程。在 Pascal 语言的管程中，规定只有一个进程要离开管程时才能调用 signal() 操作。",
    tags: ["管程", "条件变量"],
    noteId: "operating_system-process-sync"
  }),
  base(29, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "定时器产生时钟中断后，由时钟中断服务程序更新的部分内容是（  ）。\n\nⅠ.内核中时钟变量的值\n\nⅡ.当前进程占用 CPU 的时间\n\nⅢ.当前进程在时间片内的剩余执行时间",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅲ", "Ⅰ、Ⅱ、Ⅲ"]),
    answer: ["D"],
    explain: "时钟中断的主要工作是处理和时间有关的信息以及决定是否执行调度程序，和时间有关的所有信息，包括系统时间、进程的时间片、延时、使用 CPU 的时间、各种定时器，故 Ⅰ、Ⅱ、Ⅲ 均正确，选 D。",
    tags: ["中断IO"],
    noteId: "constitution_principle-cpu-interrupt"
  }),
  base(30, 'os', 'k-os-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "系统总是访问磁盘的某个磁道而不响应对其他磁道的访问请求，这种现象称为磁臂黏着。下列磁盘调度算法中，不会导致磁臂粘着的是（ ）。",
    options: opt(["先来先服务 (FCFS)", "最短寻道时间优先 (SSTF)", "扫描算法 (SCAN)", "循环扫描算法 (CSCAN)"]),
    answer: ["A"],
    explain: "参考 机械硬盘调度算法，当系统总是持续出现某个磁道的访问请求时，均持续满足最短寻道时间优先、扫描算法和循环扫描算法的访问条件，会一直服务该访问请求。因此，先来先服务按照请求次序进行调度，比较公平，故选 A。",
    tags: ["磁盘调度算法"],
    noteId: "operating_system-io_device-disks"
  }),
  base(31, 'os', 'k-os-023', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列优化方法中，可以提高文件访问速度的是（ ）。\n\nⅠ. 提前读\n\nⅡ. 为文件分配连续的簇\n\nⅢ. 延迟写\n\nⅣ. 采用磁盘高速缓存",
    options: opt(["仅Ⅰ、Ⅱ", "仅Ⅱ、Ⅲ", "仅Ⅰ、Ⅲ、Ⅳ", "Ⅰ、Ⅱ、Ⅲ、Ⅳ"]),
    answer: ["D"],
    explain: "II 和 IV 显然均能提高文件访问速度。对于 I，提前读是指在读当前盘块时，将下一个可能要访问的盘块数据读入缓冲区，以便需要时直接从缓冲区中读取，提高了文件的访问速度。对于 III，延迟写是先将写数据写入缓冲区，并置上“延迟写”标志，以备不久之后访问，当缓冲区需要再次被分配出去时才将缓冲区数据写入磁盘，减少了访问磁盘的次数，提高了文件的访问速度，III 也正确，答案选 D。",
    tags: ["缓冲区"],
    noteId: "operating_system-io_device-management"
  }),
  base(32, 'os', 'k-os-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "在下列同步机制中，可以实现让权等待的是（ ）。",
    options: opt(["Peterson 方法", "swap 指令", "信号量方法", "TestAndSet 指令"]),
    answer: ["C"],
    explain: "硬件方法实现进程同步需要通过 自旋锁，不能实现让权等待，故 B、D 错误；Peterson 算法满足有限等待但不满足让权等待，故 A 错误；记录型信号量由千引入阻塞机制，消除了不让权等待的情况，故 C 正确。",
    tags: ["硬件互斥指令", "信号量"],
    noteId: "operating_system-process-sync"
  }),
  base(33, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列 TCP/IP 应用层协议中，可以使用传输层无连接服务的是（ ）。",
    options: opt(["FTP", "DNS", "SMTP", "HTTP"]),
    answer: ["B"],
    explain: "FTP 用来传输文件，SMTP 用来发送电子邮件，HTTP 用来传输网页文件，都对可靠性的要求较高，因此都用传输层有连接的 TCP 服务。无连接 UDP 服务效率更高、开销小，DNS 在传输层采用无连接的 UDP 服务。",
    tags: ["网络协议"],
    noteId: "computer_network-overall-protocol"
  }),
  base(34, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "下列选项中，不属于物理层接口规范定义范畴的是（）。",
    options: opt(["接口形状", "引脚功能", "物理地址", "信号电平"]),
    answer: ["C"],
    explain: "物理层的接口规范主要分为 4 种：机械特性、电气特性、功能特性、规程特性。机械特性规定连接所用设备的规格，即 A 所说的接口形状。电气特性规定信号的电压高低、阻抗匹配等，如 D 所说的信号电平。功能特性规定线路上出现的电平代表什么意义、接口部件的信号线（数据线、控制线、定时线等）的用途，如 B 所说的引脚功能。选项 C 中的物理地址就是 MAC 地址，它属于数据链路层的范畴。",
    tags: ["物理层接口特性"],
    noteId: "computer_network-physical-concept"
  }),
  base(35, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "IEEE 802.11 无线局域网的 MAC 协议 CSMA/CA 进行信道预约的方法是（ ）。",
    options: opt(["发送确认帧", "采用二进制指数退避", "使用多个 MAC 地址", "交换 RTS 与 CTS 帧"]),
    answer: ["D"],
    explain: "参考 CSMA/CA 流程，CSMA/CA 协议进行信道预约主要使用的是请求发送帧 RTS（Request to Send）和允许发送帧 CTS（Clear to Send）。当一台主机想要发送信息时，先向无线站点发送一个 RTS 帧，说明要传输的 数据及相应的时间。当无线站点收到 RTS 帧之后，会广播一个 CTS 帧作为对此的响应，既给发送端发送许可，又指示其他主机不要在这个时间内发送数据，从而预约信道，避免碰撞。发送确认帧，主要是保证信息的可靠传输；二进制指数退避法是在 CSMA/CD 中的一种冲突处理 方法；C 选项则与预约信道无关。",
    tags: ["CSMA/CA"],
    noteId: ""
  }),
  base(36, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "主机甲采用停 - 等协议向主机乙发送数据，数据传输速率是 3 kbps，单向传播延时是 200 ms，忽略确认帧的传输延时。当信道利用率等于 40% 时，数据帧的长度为（ ）。",
    options: opt(["240 比特", "400 比特", "480 比特", "800 比特"]),
    answer: ["D"],
    explain: "信道利用率 = 传输帧的有效时间／传输帧的周期。假设帧的长度为 x 比特。对于有效时间，应该用帧的大小除以数据传输速率，即 x/3kbps。对于帧的传输周期，应包含 4 个部分：帧在发送端的发送时延、帧从发送端到接收端的单程传播时延、确认帧在接收端的发送时延、确认帧从接收端到发送端的单程传播时延。这 4 个时延中，由于题目中说“忽略确认帧的传输延时”，因此不计算确认帧的发送时延（注意传输时延和传播时延的区别，传输时延也称发送时延，和传播时延只有一字之差）。所以帧的传输周期由三部分组成：首先是帧在发送端的发送时延 x/3kbps，其次是帧从发送端到接收端的单程传播时延 200ms，最后是确认帧从接收端到发送端的单程传播时延 200ms，三者相加可得其周期应为 x/3kbps + 400ms。代入信道利用率的公式，求出 x = 800bit。答案选 D。",
    tags: ["ARQ协议", "信道利用率"],
    noteId: "computer_network-datalink-flow_control"
  }),
  base(37, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "路由器 R 通过以太网交换机 S1 和 S2 连接两个网络，R 的接口、主机 H1 和 H2 的 IP 地址与 MAC 地址如下图所示。若 H1 向 H2 发送一个 IP 分组 P，则 H1 发出的封装 P 的以太网帧的目的 MAC 地址、H2 收到的封装 P 的以太网帧的源 MAC 地址分别是（ ）。",
    options: opt(["00-a1-b2-c3-d4-62、00-1a-2b-3c-4d-52", "00-a1-b2-c3-d4-62、00-1a-2b-3c-4d-61", "00-1a-2b-3c-4d-51、00-1a-2b-3c-4d-52", "00-1a-2b-3c-4d-51、00-a1-b2-c3-d4-61"]),
    answer: ["D"],
    explain: "在网络的信息传递中，会经常用到两个地址：MAC 地址和 IP 地址。其中，MAC 地址会随着信息被发往不同的网络而改变，但 IP 地址当且仅当信息在私人网络中传递时才会改变。分组 P 在如题图所示的网络中传递时，首先由主机 H1 将分组发往路由器 R，此时源 MAC 地址为 1 主机本身的 MAC 地址，即 00-1a-2b-3c-4d-52，目的 MAC 地址 为路由器 R 的 MAC 地址，即 00-1a-2b-3c-4d-51。当路由器 R 收到分组 P 后，根据分组 P 的目的 IP 地址，得知应将分组从另一个端口转发出去，于是会给分组 P 更换新的 MAC 地址，此时由于从另外的端口转发出去，因此 P 的新源 MAC 地址变为负责转发的端口 MAC 地址，即 00-a1-b2-c3-d4-61, 目的 MAC 地址应为主机 H2 的 MAC 地址，即 00-a1-b2-c3-d4-62。根据分析过程，题目所问的 MAC 地址应为路由器 R 两个端口的 MAC 地址，故选 D。",
    tags: ["MAC地址"],
    noteId: "computer_network-datalink-dev", figures: [{ src: A + "study_methods-408quiz-2018/d5.svg", alt: '题图' }]
  }),
  base(38, 'cn', 'k-cn-001', {
    type: 'single', difficulty: 2, score: 2,
    stem: "某路由表中有转发接口相同的 4 条路由表项，其目的网络地址分别是 35.230.32.0/21、35.230.40.0/21、35.230.48.0/21 和 35.230.56.0/21，将该 4 条路由聚合后的目的网络地址为（ ）。",
    options: opt(["35.230.0.0/19", "35.230.0.0/20", "35.230.32.0/19", "35.230.32.0/20"]),
    answer: ["C"],
    explain: "对于此类题目，先分析需要聚合的 IP 地址。观察发现，题中的 4 个路由地址，前 16 位完全相同，不同之处在于第 3 段的 8 位中，将这 8 位展开写成二进制，分别如下：\n（图：见原题）\n观察发现，4 个地址的第 3 段中，从前向后最多有 3 位相同，因此这 3 位是能聚合的最大位数。将这些相同的位都保留，将第 3 段第 3 位之后的所有位都置 0，就得到了聚合后的 IP 地址 35.230.32.0，其网络前缀为 16+3，也即前 19 位，故聚合后的网络地址为 35.230.32.0/19，答案为 C。",
    tags: ["子网聚合"],
    noteId: "computer_network-network-ip"
  }),
  base(39, 'cn', 'k-cn-015', {
    type: 'single', difficulty: 2, score: 2,
    stem: "UDP 协议实现分用 (demultiplexing) 时所依据的头部字段是（ ）。",
    options: opt(["源端口号", "目的端口号", "长度", "校验和"]),
    answer: ["B"],
    explain: "传输层分用的定义是：接收方的传输层剥去报文首部后，能把这些数据正确交付到目的进程。C 和 D 选项显然不符。端口号是传输层服务访问点 TSAP, 用来标识主机中的应用进程。对于 A 和 B 选项，源端口号是在需要对方回信时选用，不需要时可用全 0。目的端口号是在终点交付报文时使用到，符合题意，故选 B。",
    tags: ["UDP"],
    noteId: "computer_network-transport-udp"
  }),
  base(40, 'cn', 'k-cn-021', {
    type: 'single', difficulty: 2, score: 2,
    stem: "无需转换即可由 SMTP 协议直接传输的内容是（ ）。",
    options: opt(["JPEG 图形", "MPEG 视频", "EXE 文件", "ASCII 文本"]),
    answer: ["D"],
    explain: "电子邮件 出现得较早，当时的数据传输能力较弱，使用者们往往也不需要传输较大的图片、视频等，因此 SMTP 具有一些目前来看较为老旧的性质，例如限制所有邮件报文的体部分，只能采用 7 位 ASCII 来表示。在如今的传输过程中，如果传输了非文本文件，往往需要将这些多媒体文件重新编码为 ASCII 再传输。因此无须转换即可传输的是 ASCII 文本，答案为 D。",
    tags: ["电子邮件"],
    noteId: "computer_network-application-mail"
  }),
  base(41, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "给定一个含 n(n≥1) 个整数的数组，请设计一个在时间上尽可能高效的算法，找出数组中未出现的最小正整数。例如，数组{-5, 3, 2, 3}中未出现的最小正整数是 1；数组{1, 2, 3}中未出现的最小正整数是 4。要求：\n\n(1) 给出算法的基本设计思想。\n\n(2) 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。\n\n(3) 说明你所设计算法的时间复杂度和空间复杂度。",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(42, 'ds', 'k-ds-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "拟建设一个光通信骨干网络连通 BJ、CS、XA、QD、JN、NJ、TL 和 WH 等 8 个城市，题 42 图中无向边上的权值表示两个城市间备选光缆的铺设费用。\n\n请回答下列问题。\n\n(1) 仅从铺设费用角度出发，给出所有可能的最经济的光缆铺设方案（用带权图表示），并计算相应方案的总费用。\n\n(2) 题 42 图可采用图的哪一种存储结构？给出求解问题 (1) 所使用的算法名称。\n\n(3) 假设每个城市采用一个路由器按 (1) 中得到的最经济方案组网，主机 H1 直接连接在 TL 的路由器上，主机 H2 直接连接在 BJ 的路由器上。若 H1 向 H2 发送一个 TTL=5 的 IP 分组，则 H2 是否可以收到该 IP 分组？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2018/d7.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(43, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 13,
    stem: "假定计算机的主频为 500MHz，CPI 为 4。现有设备 A 和 B，其数据传输率分别为 2MBps 和 40MBps，对应 I/O 接口中各有一个 32 位数据缓冲寄存器。请回答下列问题，要求给出计算过程。\n\n(1) 若设备 A 采用定时查询 I/O 方式，每次输入/输出都至少执行 10 条指令。设备 A 最多间隔多长时间查询一次才能不丢失数据？CPU 用于设备 A 输入/输出的时间占 CPU 总时间的百分比至少是多少？\n\n(2) 在中断 I/O 方式下，若每次中断响应和中断处理的总时钟周期数至少为 400，则设备 B 能否采用中断 I/O 方式？为什么？\n\n(3) 若设备 B 采用 DMA 方式，每次 DMA 传送的数据块大小 1000B，CPU 用于 DMA 预处理和后处理的总时钟周期数为 500，则 CPU 用于设备 B 输入/输出的时间占 CPU 总时间的百分比最大是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 13 }]
  }),
  base(44, 'co', 'k-co-001', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "某计算机采用页式虚拟存储管理方式，按字节编址。CPU 进行存储访问的过程如题 44 图所示。\n\n根据题 44 图回答下列问题。\n\n(1) 主存物理地址占多少位？\n\n(2) TLB 采用什么映射方式？TLB 用 SRAM 还是 DRAM 实现？\n\n(3) Cache 采用什么映射方式？若 Cache 采用 LRU 替换算法和回写（Write Back）策略，则 Cache 每行中除数据（Data）、Tag 和有效位外，还应有哪些附加位？Cache 总容量是多少？Cache 中有效位的作用是什么？\n\n(4) 若 CPU 给出的虚拟地址为 0008C040H，则对应的物理地址是多少？是否在 Cache 中命中？说明理由。若 CPU 给出的虚拟地址为 0007C260H，则该地址所在主存块映射到的 Cache 组号是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2018/d9.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 10 }]
  }),
  base(45, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 7,
    stem: "请根据题 44 图给出的虚拟存储管理方式，回答下列问题。\n\n(1) 某虚拟地址对应的页目录号为 6，在相应的页表中对应的页号为 6，页内偏移量为 8，该虚拟地址的十六进制表示是什么？\n\n(2) 寄存器 PDBR 用于保存当前进程的页目录起始地址，该地址是物理地址还是虚拟地址？进程切换时，PDBR 的内容是否会变化？说明理由。同一进程的线程切换时，PDBR 的内容是否会变化？说明理由。\n\n(3) 为了支持改进型 CLOCK 置换算法，需要在页表项中设置哪些字段？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 7 }]
  }),
  base(46, 'os', 'k-os-001', {
    type: 'subjective', difficulty: 3, score: 8,
    stem: "某文件系统采用索引节点存放文件的属性和地址信息，簇大小为 4KB。每个文件索引节点占 64B，有 11 个地址项，其中直接地址项 8 个，一级、二级和三级间接地址项各 1 个，每个地址项长度为 4B。请回答下列问题。\n\n(1) 该文件系统能支持的最大文件长度是多少？（给出计算表达式即可）\n\n(2) 文件系统用 1M（1M= \n220\n ）个簇存放文件索引节点，用 512M 个簇存放文件数据。若一个图像文件的大小为 5600B，则该文件系统最多能存放多少个这样的图像文件？\n\n(3) 若文件 F1 的大小为 6KB，文件 F2 的大小为 40KB，则该文件系统获取 F1 和 F2 最后一个簇的簇号需要的时间是否相同？为什么？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "",
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 8 }]
  }),
  base(47, 'cn', 'k-cn-001', {
    type: 'subjective', difficulty: 3, score: 9,
    stem: "某公司网络如题 47 图所示。IP 地址空间 192.168.1.0/24 被均分给销售部和技术部两个子网，并已分别为部分主机和路由器接口分配了 IP 地址，销售部子网的 MTU=1500 B，技术部子网的 MTU=800 B。\n\n请回答下列问题。\n\n(1) 销售部子网的广播地址是什么？技术部子网的子网地址是什么？若每个主机仅分配一个 IP 地址，则技术部子网还可以连接多少台主机？\n\n(2) 假设主机 192.168.1.1 向主机 192.168.1.208 发送一个总长度为 1500 B 的 IP 分组，IP 分组的头部长度为 20 B，路由器在通过接口 F1 转发该 IP 分组时进行了分配。若分片时尽可能分为最大片，则一个最大 IP 分片封装数据的字节数是多少？至少需要分为几个分片？每个分片的片偏移量是多少？",
    referenceAnswer: "原站未收录本题参考答案，请对照资料页原题自行作答：",
    tags: [],
    noteId: "", figures: [{ src: A + "study_methods-408quiz-2018/d10.svg", alt: '题图' }],
    explain: '本题为主观题，请对照下方参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考答案自评', points: 9 }]
  }),
]
export const paper2018_408 = {
  id: P, year: Y,
  title: '2018 年全国硕士研究生招生考试 408 计算机学科专业基础',
  short: '2018 408 原卷', group: '408',
  subjects: ['ds', 'co', 'os', 'cn'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2018_408.length,
  qids: questions2018_408.map(q => q.id),
  sourceName: '计算机考研杂货铺 站内镜像',
  sourceUrl: '#/notes/study_methods-408quiz-2018',
  note: '题干与选项按原站整理，图形题请对照资料页原图；分值为 2 分/题的选择题加主观题估算，总分 150。'
}
