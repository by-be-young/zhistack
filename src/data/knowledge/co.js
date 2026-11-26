export const knowledgeCo = [
  {
    id: 'k-co-001', subject: 'co', chapterId: 'co-ch1', gid: 'CO-1.1-01',
    title: '冯·诺依曼结构与性能指标', difficulty: 1, tags: ['体系结构', '性能'],
    summary: '存储程序、按地址顺序执行；性能由主频、CPI、指令数共同决定。',
    points: [
      'CPU 时间 = 指令数 × CPI × 时钟周期 = 指令数 × CPI / 主频。',
      'MIPS = 主频 / (CPI × 10⁶)，只反映指令吞吐，不反映单条指令能力。',
      '存储程序思想：指令与数据同等存放，按地址访问。'
    ],
    pitfalls: ['用 MIPS 直接比较不同指令集的机器性能。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch1', page: 5, confidence: 'approx' }],
    related: ['k-co-002', 'k-co-017'], estMin: 10
  },
  {
    id: 'k-co-002', subject: 'co', chapterId: 'co-ch1', gid: 'CO-1.2-01',
    title: '校验码：奇偶、海明与 CRC', difficulty: 3, tags: ['校验码', '海明码'],
    summary: '用冗余位检测/纠正错误：奇偶校验检 1 位错，海明码可纠 1 位，CRC 检突发错。',
    points: [
      '海明码校验位 k 满足 `2^k ≥ n+k+1`，校验位在 2 的幂位置。',
      'CRC 用生成多项式做模 2 除法，余数即校验位；检错能力强于纠错。',
      '奇偶校验只能发现奇数个位错，不能定位。'
    ],
    pitfalls: ['把海明码的「纠 1 位」当成能纠多位。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch1', page: 14, confidence: 'approx' }],
    related: ['k-co-001'], estMin: 16
  },
  {
    id: 'k-co-003', subject: 'co', chapterId: 'co-ch2', gid: 'CO-2.1-01',
    title: '总线结构与仲裁', difficulty: 2, tags: ['总线', '仲裁'],
    summary: '总线是共享传输通路，分数据/地址/控制线；多主设备争用需仲裁。',
    points: [
      '同步总线按时钟约定，异步总线用握手信号。',
      '集中式仲裁：链式查询、计数器定时查询、独立请求。',
      '总线带宽 = 总线宽度 × 传输频率；突发传输可提高有效带宽。'
    ],
    pitfalls: ['把总线带宽与存储器带宽混为一谈。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch2', page: 35, confidence: 'approx' }],
    related: ['k-co-004'], estMin: 12
  },
  {
    id: 'k-co-004', subject: 'co', chapterId: 'co-ch3', gid: 'CO-3.1-01',
    title: '存储器层次与主存容量扩展', difficulty: 2, tags: ['存储器', '扩展'],
    summary: '寄存器-Cache-主存-辅存形成层次结构；主存用位扩展与字扩展满足容量需求。',
    points: [
      '位扩展增加字长，字扩展增加单元数；地址线决定单元数，数据线决定字长。',
      '芯片数 = 目标容量 / 单片容量，地址译码用片选区分。',
      '层次结构靠局部性原理，越靠近 CPU 越快越贵越小。'
    ],
    pitfalls: ['字扩展时地址线未全部接入译码器，导致地址重叠。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch3', page: 65, confidence: 'approx' }],
    related: ['k-co-003', 'k-co-005'], estMin: 14
  },
  {
    id: 'k-co-005', subject: 'co', chapterId: 'co-ch3', gid: 'CO-3.1-02',
    title: 'DRAM 刷新与存取周期', difficulty: 2, tags: ['DRAM', '刷新'],
    summary: 'DRAM 用电容存储需定期刷新；刷新按行进行，与读写操作争用周期。',
    points: [
      '刷新周期通常 2 ms（64 ms 内完成全部行），集中/分散/异步三种方式。',
      '存取周期 > 存取时间，含恢复时间；刷新占用存取周期。',
      'SRAM 用触发器，不需刷新，速度快、集成度低。'
    ],
    pitfalls: ['把存取时间当作存取周期。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch3', page: 78, confidence: 'approx' }],
    related: ['k-co-004'], estMin: 12
  },
  {
    id: 'k-co-006', subject: 'co', chapterId: 'co-ch3', gid: 'CO-3.2-01',
    title: 'Cache 映射方式与替换算法', difficulty: 3, tags: ['Cache', '映射'],
    summary: '直接映射固定位置、全相联任意位置、组相联组内任意；替换用 LRU/FIFO/随机。',
    points: [
      '直接映射地址 = 标记 + 行号 + 块内地址，冲突率高。',
      '组相联地址 = 标记 + 组号 + 块内地址，兼顾成本与命中率。',
      '写策略：写直达一致但慢；写回快但需脏位，I/O 需刷回。'
    ],
    pitfalls: ['把 Cache 行号与主存块号混为一谈。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch3', page: 92, confidence: 'approx' }],
    related: ['k-co-004', 'k-co-007'], estMin: 18
  },
  {
    id: 'k-co-007', subject: 'co', chapterId: 'co-ch3', gid: 'CO-3.3-01',
    title: '虚拟存储器与 TLB', difficulty: 3, tags: ['虚拟存储', 'TLB'],
    summary: '用页表把虚拟地址映射到物理地址，TLB 缓存页表项加速转换，缺页时调入。',
    points: [
      '虚拟地址 = 虚页号 + 页内偏移，页表项含物理页框号与有效位/脏位。',
      'TLB 命中则无需访存取页表；缺失可能需多级页表多次访存。',
      'Cache 与 TLB 相互独立：TLB 管地址转换，Cache 管数据。'
    ],
    pitfalls: ['认为 TLB 命中就等于 Cache 命中。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch3', page: 118, confidence: 'approx' }],
    related: ['k-co-006', 'k-os-015'], estMin: 18
  },
  {
    id: 'k-co-008', subject: 'co', chapterId: 'co-ch4', gid: 'CO-4.1-01',
    title: 'I/O 方式：程序查询、中断与 DMA', difficulty: 2, tags: ['I/O', 'DMA'],
    summary: '程序查询占用 CPU 轮询；中断由设备主动通知；DMA 由控制器直接搬运数据块。',
    points: [
      '程序查询 CPU 利用率最低；中断适合低速随机设备。',
      'DMA 传输期间 CPU 可继续执行，仅在块传输结束时中断。',
      'DMA 与 CPU 争用总线，需周期挪用或成组传送。'
    ],
    pitfalls: ['认为 DMA 完全不占用 CPU，实际初始化与结束时仍需 CPU。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch4', page: 145, confidence: 'approx' }],
    related: ['k-co-009', 'k-co-010'], estMin: 14
  },
  {
    id: 'k-co-009', subject: 'co', chapterId: 'co-ch4', gid: 'CO-4.2-01',
    title: '中断系统与中断响应', difficulty: 3, tags: ['中断', '优先级'],
    summary: '中断请求经屏蔽与优先级排队，CPU 在指令周期末尾响应，保存断点转服务程序。',
    points: [
      '中断隐指令完成关中断、保存断点、取服务程序入口。',
      '中断优先级决定响应顺序；屏蔽字决定可被谁打断。',
      '中断响应在一条指令执行结束后，不在指令中间。'
    ],
    pitfalls: ['把中断响应时机说成「任意时刻」。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch4', page: 165, confidence: 'approx' }],
    related: ['k-co-008', 'k-co-018'], estMin: 16
  },
  {
    id: 'k-co-010', subject: 'co', chapterId: 'co-ch4', gid: 'CO-4.2-02',
    title: 'DMA 控制器与总线占用', difficulty: 2, tags: ['DMA', '总线'],
    summary: 'DMA 控制器接管总线直接在主存与设备间传送，结束发中断。',
    points: [
      'DMA 请求优先级通常高于 CPU，采用周期挪用。',
      '传送单位是数据块，需设置主存地址、传送长度、方向。',
      '与中断方式相比，DMA 省去逐字节的 CPU 介入。'
    ],
    pitfalls: ['把 DMA 传送说成按字节中断一次。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch4', page: 178, confidence: 'approx' }],
    related: ['k-co-008', 'k-co-009'], estMin: 12
  },
  {
    id: 'k-co-011', subject: 'co', chapterId: 'co-ch5', gid: 'CO-5.1-01',
    title: '原码、反码、补码与移码', difficulty: 2, tags: ['补码', '数制'],
    summary: '补码把减法变加法，0 表示唯一；移码用于浮点阶码，便于比较大小。',
    points: [
      'n 位补码范围 `-2^(n-1) ~ 2^(n-1)-1`，比原码多表示一个负数。',
      '补码求法：原码除符号位取反加 1；补码的补码是原码。',
      '移码 = 补码符号位取反，全 0 对应最小阶。'
    ],
    pitfalls: ['把补码范围写成对称区间，漏掉 -2^(n-1)。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch5', page: 190, confidence: 'approx' }],
    related: ['k-co-012', 'k-co-013'], estMin: 14
  },
  {
    id: 'k-co-012', subject: 'co', chapterId: 'co-ch5', gid: 'CO-5.1-02',
    title: '定点运算与溢出判断', difficulty: 3, tags: ['溢出', 'ALU'],
    summary: '补码加减统一为加法；溢出用双符号位或进位异或判断。',
    points: [
      '`[x+y]补 = [x]补 + [y]补`，符号位参与运算，进位丢弃。',
      '双符号位 `00` 正常、`01` 正溢、`10` 负溢；单符号位用 `Cout ⊕ Cn`。',
      '溢出 ≠ 进位：最高位进位丢弃不一定溢出。'
    ],
    pitfalls: ['用最高位进位判断溢出。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch5', page: 202, confidence: 'approx' }],
    related: ['k-co-011'], estMin: 16
  },
  {
    id: 'k-co-013', subject: 'co', chapterId: 'co-ch5', gid: 'CO-5.2-01',
    title: 'IEEE 754 浮点表示', difficulty: 3, tags: ['浮点', 'IEEE754'],
    summary: 'float 为 1+8+23 位，double 为 1+11+52 位；阶码用移码，尾数隐含 1。',
    points: [
      '真值 = `(-1)^S × 1.M × 2^(E-127)`（单精度）。',
      '阶码全 0 表示非规格化数/零，全 1 表示无穷/NaN。',
      'float 精度约 7 位十进制，double 约 16 位。'
    ],
    pitfalls: ['忘记尾数隐含的整数位 1，导致数值差 2 倍。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch5', page: 215, confidence: 'approx' }],
    related: ['k-co-011', 'k-co-014'], estMin: 18
  },
  {
    id: 'k-co-014', subject: 'co', chapterId: 'co-ch5', gid: 'CO-5.2-02',
    title: '浮点加减运算与舍入', difficulty: 3, tags: ['浮点运算', '舍入'],
    summary: '对阶、尾数加减、规格化、舍入、溢出判断五步。',
    points: [
      '对阶：小阶向大阶看齐，尾数右移，精度损失。',
      '规格化：尾数绝对值在 `[1/2,1)`（原码）或最高位与符号位不同（补码）。',
      '舍入方式：0 舍 1 入、恒置 1、就近舍入（IEEE 默认）。'
    ],
    pitfalls: ['对阶时大阶向小阶看齐，导致尾数左移溢出。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch5', page: 228, confidence: 'approx' }],
    related: ['k-co-013'], estMin: 16
  },
  {
    id: 'k-co-015', subject: 'co', chapterId: 'co-ch6', gid: 'CO-6.1-01',
    title: '指令格式与寻址方式', difficulty: 2, tags: ['指令', '寻址'],
    summary: '指令由操作码与地址码组成；寻址方式决定操作数地址的计算方法。',
    points: [
      '定长操作码译码简单，扩展操作码在字长内分级扩展。',
      '立即数在指令中，直接寻址给地址，间接寻址再访存一次。',
      '变址 = 形式地址 + 变址寄存器；基址 = 形式地址 + 基址寄存器。'
    ],
    pitfalls: ['把间接寻址的访存次数算错（需两次访存取操作数）。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch6', page: 250, confidence: 'approx' }],
    related: ['k-co-016', 'k-co-017'], estMin: 14
  },
  {
    id: 'k-co-016', subject: 'co', chapterId: 'co-ch6', gid: 'CO-6.2-01',
    title: 'CISC 与 RISC', difficulty: 1, tags: ['RISC', '指令集'],
    summary: 'CISC 指令多而复杂、周期长；RISC 指令精简、定长、单周期、寄存器多。',
    points: [
      'RISC 采用 load/store 结构，运算只对寄存器。',
      'RISC 更适合流水线，控制简单；CISC 代码密度高。',
      '现代 x86 内部把 CISC 指令译成微操作，接近 RISC 执行。'
    ],
    pitfalls: ['认为 RISC 一定比 CISC 快，实际取决于实现与负载。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch6', page: 268, confidence: 'approx' }],
    related: ['k-co-015', 'k-co-019'], estMin: 10
  },
  {
    id: 'k-co-017', subject: 'co', chapterId: 'co-ch7', gid: 'CO-7.1-01',
    title: 'CPU 结构与寄存器', difficulty: 1, tags: ['CPU', '寄存器'],
    summary: 'CPU 由运算器与控制器组成；寄存器分通用、状态、控制三类。',
    points: [
      'PC 存放下一条指令地址，IR 存放当前指令，MAR/MDR 连接总线。',
      '通用寄存器对程序员可见，MAR/MDR 通常不可见。',
      'PSW 保存标志位（ZF/SF/OF/CF）与中断使能。'
    ],
    pitfalls: ['把 PC 与 IR 混用：PC 指向待取指令，IR 是已取指令。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch7', page: 282, confidence: 'approx' }],
    related: ['k-co-018'], estMin: 10
  },
  {
    id: 'k-co-018', subject: 'co', chapterId: 'co-ch7', gid: 'CO-7.1-02',
    title: '指令周期与数据通路', difficulty: 3, tags: ['指令周期', '数据通路'],
    summary: '取指、间址、执行、中断四个阶段；数据通路描述数据在部件间的流动。',
    points: [
      '取指：PC→MAR→主存→MDR→IR，PC+1。',
      '执行阶段依指令类型走不同通路，可能需要 ALU 与寄存器堆。',
      '单总线结构需分时使用总线，多总线可并行。'
    ],
    pitfalls: ['忽略间址周期，导致间接寻址指令时序错误。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch7', page: 290, confidence: 'approx' }],
    related: ['k-co-017', 'k-co-019'], estMin: 16
  },
  {
    id: 'k-co-019', subject: 'co', chapterId: 'co-ch7', gid: 'CO-7.2-01',
    title: '流水线与性能计算', difficulty: 3, tags: ['流水线', '加速比'],
    summary: '把指令执行拆成多段并行；理想加速比接近段数，受启动与冒险限制。',
    points: [
      'k 段流水线执行 n 条指令时间 ≈ `(k + n - 1) × 时钟周期`。',
      '加速比 `S = n·k / (k+n-1)`，n 越大越接近 k。',
      '超标量、超流水、动态调度进一步提升 ILP。'
    ],
    pitfalls: ['把流水线加速比算成 k 倍而不考虑填充。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch7', page: 300, confidence: 'approx' }],
    related: ['k-co-018', 'k-co-020'], estMin: 16
  },
  {
    id: 'k-co-020', subject: 'co', chapterId: 'co-ch7', gid: 'CO-7.2-02',
    title: '流水线冒险与处理', difficulty: 3, tags: ['冒险', '旁路'],
    summary: '结构、数据、控制三类冒险分别用资源重复、旁路/停顿、预测/延迟槽处理。',
    points: [
      '数据冒险可用转发（旁路）解决，load-use 需插入一个气泡。',
      '控制冒险用分支预测、延迟槽或提前判断。',
      '结构冒险因部件争用，需分离指令/数据 Cache 或增加端口。'
    ],
    pitfalls: ['认为所有数据冒险都能靠旁路消除，load-use 不行。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch7', page: 312, confidence: 'approx' }],
    related: ['k-co-019'], estMin: 16
  },
  {
    id: 'k-co-021', subject: 'co', chapterId: 'co-ch8', gid: 'CO-8.1-01',
    title: '控制器与微程序', difficulty: 2, tags: ['控制器', '微程序'],
    summary: '硬布线控制器用组合逻辑产生控制信号；微程序控制器用微指令序列。',
    points: [
      '微指令格式分水平型（并行控制强）与垂直型（编码紧凑）。',
      '微程序存放在控制存储器（CM），一条机器指令对应一段微程序。',
      '硬布线速度快、不灵活；微程序灵活、速度稍慢。'
    ],
    pitfalls: ['把微程序与机器程序混淆：微程序由硬件执行，对程序员透明。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch8', page: 320, confidence: 'approx' }],
    related: ['k-co-018'], estMin: 12
  },
  {
    id: 'k-co-022', subject: 'co', chapterId: 'co-ch8', gid: 'CO-8.2-01',
    title: '磁盘参数与 RAID', difficulty: 2, tags: ['磁盘', 'RAID'],
    summary: '磁盘容量、平均存取时间由寻道、旋转延迟、传输时间组成；RAID 用冗余换可靠性。',
    points: [
      '平均旋转延迟 = 半圈时间 = `60/(2r)` 秒，r 为转速（转/分）。',
      '容量 = 柱面数 × 磁头数 × 扇区数 × 扇区大小。',
      'RAID0 条带无冗余，RAID1 镜像，RAID5 分布式奇偶校验。'
    ],
    pitfalls: ['把平均旋转延迟算成一整圈。'],
    bookRefs: [{ bookId: 'book-co-tang', chapterId: 'co-ch8', page: 352, confidence: 'approx' }],
    related: ['k-os-021'], estMin: 14
  }
]
