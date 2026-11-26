const K = 'k-co-'

export const questionsCo = [
  {
    id: 'q-co-001', subject: 'co', knowledgeId: K + '001', type: 'single', difficulty: 2,
    stem: '某程序共 10⁶ 条指令，平均 CPI 为 2，CPU 主频 2 GHz，其执行时间约为（ ）。',
    options: [{ key: 'A', text: '0.5 ms' }, { key: 'B', text: '1 ms' }, { key: 'C', text: '2 ms' }, { key: 'D', text: '10 ms' }],
    answer: ['B'],
    explain: 'T = 指令数 × CPI / 主频 = 10⁶ × 2 / (2×10⁹) = 1×10⁻³ s = 1 ms。',
    source: 'original'
  },
  {
    id: 'q-co-002', subject: 'co', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: 'MIPS 指标主要反映（ ）。',
    options: [{ key: 'A', text: '单条指令的执行能力' }, { key: 'B', text: '每秒执行百万条指令的吞吐' }, { key: 'C', text: '存储器容量' }, { key: 'D', text: '总线带宽' }],
    answer: ['B'],
    explain: 'MIPS = 主频/(CPI×10⁶)，是指令吞吐量，不能跨指令集比较单条指令能力。',
    source: 'original'
  },
  {
    id: 'q-co-003', subject: 'co', knowledgeId: K + '002', type: 'single', difficulty: 3,
    stem: '对 8 位数据进行海明校验，至少需要校验位（ ）。',
    options: [{ key: 'A', text: '3 位' }, { key: 'B', text: '4 位' }, { key: 'C', text: '5 位' }, { key: 'D', text: '8 位' }],
    answer: ['B'],
    explain: '需满足 2^k ≥ n+k+1，即 2^k ≥ 8+k+1；k=4 时 16≥13 成立，k=3 时 8≥12 不成立。',
    source: 'original'
  },
  {
    id: 'q-co-004', subject: 'co', knowledgeId: K + '003', type: 'single', difficulty: 2,
    stem: '总线宽度 32 位，工作频率 100 MHz，每个时钟周期传送一次数据，其带宽为（ ）。',
    options: [{ key: 'A', text: '32 MB/s' }, { key: 'B', text: '100 MB/s' }, { key: 'C', text: '400 MB/s' }, { key: 'D', text: '800 MB/s' }],
    answer: ['C'],
    explain: '32 位 = 4 B，4 B × 100 M = 400 MB/s。',
    source: 'original'
  },
  {
    id: 'q-co-005', subject: 'co', knowledgeId: K + '004', type: 'single', difficulty: 2,
    stem: '某存储器有 20 根地址线、8 根数据线，其容量为（ ）。',
    options: [{ key: 'A', text: '1 MB' }, { key: 'B', text: '1 Mbit' }, { key: 'C', text: '2 MB' }, { key: 'D', text: '20 MB' }],
    answer: ['A'],
    explain: '2²⁰ 个单元 × 1 B = 1 MB；地址线定单元数，数据线定字长。',
    source: 'original'
  },
  {
    id: 'q-co-006', subject: 'co', knowledgeId: K + '006', type: 'single', difficulty: 3,
    stem: '直接映射 Cache 中，主存地址的划分通常是（ ）。',
    options: [
      { key: 'A', text: '标记 + 行号 + 块内地址' },
      { key: 'B', text: '标记 + 组号 + 块内地址' },
      { key: 'C', text: '仅标记 + 块内地址' },
      { key: 'D', text: '行号 + 块内地址' }
    ],
    answer: ['A'],
    explain: '直接映射需用行号定位唯一 Cache 行，剩余高位作标记，低位为块内地址。',
    source: 'original'
  },
  {
    id: 'q-co-007', subject: 'co', knowledgeId: K + '006', type: 'single', difficulty: 2,
    stem: '与直接映射相比，组相联映射的主要优势是（ ）。',
    options: [{ key: 'A', text: '硬件成本更低' }, { key: 'B', text: '冲突缺失更少' }, { key: 'C', text: '不需要标记' }, { key: 'D', text: '访问速度更快' }],
    answer: ['B'],
    explain: '组内可放到任意行，减少了直接映射中固定行冲突导致的缺失。',
    source: 'original'
  },
  {
    id: 'q-co-008', subject: 'co', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: 'TLB 的作用是（ ）。',
    options: [{ key: 'A', text: '缓存主存数据块' }, { key: 'B', text: '缓存页表项以加速地址转换' }, { key: 'C', text: '缓存磁盘页' }, { key: 'D', text: '保存中断向量' }],
    answer: ['B'],
    explain: 'TLB 是页表项的高速缓存，命中时无需访存取页表。',
    source: 'original'
  },
  {
    id: 'q-co-009', subject: 'co', knowledgeId: K + '009', type: 'single', difficulty: 2,
    stem: 'CPU 响应可屏蔽中断的时机是（ ）。',
    options: [{ key: 'A', text: '任意时刻立即响应' }, { key: 'B', text: '一条指令执行结束后' }, { key: 'C', text: '取指周期中间' }, { key: 'D', text: '仅在程序结束时' }],
    answer: ['B'],
    explain: '中断在指令周期末尾检查并响应，保证指令的原子性。',
    source: 'original'
  },
  {
    id: 'q-co-010', subject: 'co', knowledgeId: K + '010', type: 'single', difficulty: 2,
    stem: 'DMA 方式与中断方式相比，主要优点是（ ）。',
    options: [{ key: 'A', text: '不需要 CPU 参与任何工作' }, { key: 'B', text: '数据块传送由控制器完成，减少 CPU 介入' }, { key: 'C', text: '不需要总线' }, { key: 'D', text: '只能用于低速设备' }],
    answer: ['B'],
    explain: 'DMA 控制器直接搬运数据块，CPU 只在初始化和结束时介入；仍需占用总线。',
    source: 'original'
  },
  {
    id: 'q-co-011', subject: 'co', knowledgeId: K + '011', type: 'single', difficulty: 2,
    stem: '8 位补码能表示的整数范围是（ ）。',
    options: [{ key: 'A', text: '-127 ~ 127' }, { key: 'B', text: '-128 ~ 127' }, { key: 'C', text: '-128 ~ 128' }, { key: 'D', text: '0 ~ 255' }],
    answer: ['B'],
    explain: 'n 位补码范围 -2^(n-1) ~ 2^(n-1)-1，8 位即 -128 ~ 127。',
    source: 'original'
  },
  {
    id: 'q-co-012', subject: 'co', knowledgeId: K + '012', type: 'single', difficulty: 3,
    stem: '两个 8 位补码数 0111 1111 与 0000 0001 相加，结果为（ ）。',
    options: [{ key: 'A', text: '1000 0000，正常' }, { key: 'B', text: '1000 0000，发生正溢出' }, { key: 'C', text: '0000 0000，正常' }, { key: 'D', text: '1111 1111，发生负溢出' }],
    answer: ['B'],
    explain: '127+1=128 超出 8 位补码上限 127，双符号位由 00 变 01，属正溢出。',
    source: 'original'
  },
  {
    id: 'q-co-013', subject: 'co', knowledgeId: K + '012', type: 'single', difficulty: 2,
    stem: '判断补码加法溢出的常用方法是（ ）。',
    options: [{ key: 'A', text: '看最高位进位' }, { key: 'B', text: '看符号位与最高位进位是否一致' }, { key: 'C', text: '看结果是否为 0' }, { key: 'D', text: '看操作数位数' }],
    answer: ['B'],
    explain: '溢出时符号位进位与最高位进位不同（单符号位用 Cout⊕Cn，双符号位看 01/10）。',
    source: 'original'
  },
  {
    id: 'q-co-014', subject: 'co', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: 'IEEE 754 单精度浮点数的阶码偏移量（偏置值）是（ ）。',
    options: [{ key: 'A', text: '127' }, { key: 'B', text: '128' }, { key: 'C', text: '1023' }, { key: 'D', text: '255' }],
    answer: ['A'],
    explain: '单精度阶码 8 位，偏置 127；双精度阶码 11 位，偏置 1023。',
    source: 'original'
  },
  {
    id: 'q-co-015', subject: 'co', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: 'IEEE 754 单精度规格化数的尾数隐含的整数位是（ ）。',
    options: [{ key: 'A', text: '0' }, { key: 'B', text: '1' }, { key: 'C', text: '由阶码决定' }, { key: 'D', text: '不存在隐含位' }],
    answer: ['B'],
    explain: '规格化数尾数形如 1.M，整数位 1 隐含不存，可多一位精度。',
    source: 'original'
  },
  {
    id: 'q-co-016', subject: 'co', knowledgeId: K + '014', type: 'single', difficulty: 2,
    stem: '浮点数加减运算的第一步是（ ）。',
    options: [{ key: 'A', text: '尾数相加' }, { key: 'B', text: '对阶' }, { key: 'C', text: '规格化' }, { key: 'D', text: '舍入' }],
    answer: ['B'],
    explain: '先对阶（小阶向大阶看齐），再尾数加减、规格化、舍入、判断溢出。',
    source: 'original'
  },
  {
    id: 'q-co-017', subject: 'co', knowledgeId: K + '015', type: 'single', difficulty: 2,
    stem: '采用间接寻址方式取操作数，需要访问内存的次数为（ ）。',
    options: [{ key: 'A', text: '0 次' }, { key: 'B', text: '1 次' }, { key: 'C', text: '2 次' }, { key: 'D', text: '3 次' }],
    answer: ['C'],
    explain: '第一次访存取出有效地址，第二次访存取出操作数；取指令本身另计。',
    source: 'original'
  },
  {
    id: 'q-co-018', subject: 'co', knowledgeId: K + '016', type: 'multiple', difficulty: 2,
    stem: '下列属于 RISC 典型特征的有（ ）。',
    options: [
      { key: 'A', text: '指令长度固定、格式规整' },
      { key: 'B', text: '采用 load/store 结构，运算只对寄存器' },
      { key: 'C', text: '指令数量多且功能复杂' },
      { key: 'D', text: '通用寄存器数量较多' }
    ],
    answer: ['A', 'B', 'D'],
    explain: 'RISC 指令精简、定长、寄存器多、访存受限；C 描述的是 CISC。',
    source: 'original'
  },
  {
    id: 'q-co-019', subject: 'co', knowledgeId: K + '017', type: 'single', difficulty: 1,
    stem: 'CPU 中存放当前正在执行指令的寄存器是（ ）。',
    options: [{ key: 'A', text: 'PC' }, { key: 'B', text: 'IR' }, { key: 'C', text: 'MAR' }, { key: 'D', text: 'MDR' }],
    answer: ['B'],
    explain: 'IR 存当前指令，PC 存放下一条待取指令地址，MAR/MDR 连接总线。',
    source: 'original'
  },
  {
    id: 'q-co-020', subject: 'co', knowledgeId: K + '019', type: 'single', difficulty: 3,
    stem: 'k 段流水线执行 n 条指令，若每段耗时一个时钟周期，总时间约为（ ）。',
    options: [{ key: 'A', text: 'n·k 个周期' }, { key: 'B', text: 'k + n - 1 个周期' }, { key: 'C', text: 'k·n + 1 个周期' }, { key: 'D', text: 'n 个周期' }],
    answer: ['B'],
    explain: '第一条指令需 k 个周期填满流水线，之后每周期完成一条，共 k+n-1。',
    source: 'original'
  },
  {
    id: 'q-co-021', subject: 'co', knowledgeId: K + '019', type: 'single', difficulty: 3,
    stem: '5 段流水线执行 100 条指令，理想情况下的加速比约为（ ）。',
    options: [{ key: 'A', text: '4.2' }, { key: 'B', text: '5' }, { key: 'C', text: '20' }, { key: 'D', text: '100' }],
    answer: ['B'],
    explain: 'S = n·k/(k+n-1) = 500/104 ≈ 4.81，接近理想上限「段数 5」，故按理想加速比取 5。',
    source: 'original'
  },
  {
    id: 'q-co-022', subject: 'co', knowledgeId: K + '020', type: 'single', difficulty: 3,
    stem: '紧跟在 load 指令之后的运算指令若使用 load 的目标寄存器，通常需要（ ）。',
    options: [{ key: 'A', text: '仅靠旁路即可解决' }, { key: 'B', text: '插入一个气泡（停顿一拍）' }, { key: 'C', text: '不需要任何处理' }, { key: 'D', text: '刷新流水线' }],
    answer: ['B'],
    explain: 'load-use 冒险的数据在访存结束才可用，旁路来不及，需停顿一拍。',
    source: 'original'
  },
  {
    id: 'q-co-023', subject: 'co', knowledgeId: K + '021', type: 'single', difficulty: 2,
    stem: '微程序控制器中，微指令存放在（ ）。',
    options: [{ key: 'A', text: '主存' }, { key: 'B', text: '控制存储器（CM）' }, { key: 'C', text: 'Cache' }, { key: 'D', text: '通用寄存器' }],
    answer: ['B'],
    explain: '微程序固化在 CPU 内的控制存储器中，对程序员透明。',
    source: 'original'
  },
  {
    id: 'q-co-024', subject: 'co', knowledgeId: K + '022', type: 'single', difficulty: 3,
    stem: '磁盘转速 7200 r/min，其平均旋转延迟约为（ ）。',
    options: [{ key: 'A', text: '2.1 ms' }, { key: 'B', text: '4.2 ms' }, { key: 'C', text: '8.3 ms' }, { key: 'D', text: '16.7 ms' }],
    answer: ['B'],
    explain: '一圈时间 = 60/7200 s ≈ 8.3 ms，平均旋转延迟为半圈 ≈ 4.2 ms。',
    source: 'original'
  },
  {
    id: 'q-co-025', subject: 'co', knowledgeId: K + '002', type: 'single', difficulty: 2,
    stem: 'CRC 校验的主要能力是（ ）。',
    options: [{ key: 'A', text: '纠正任意位数错误' }, { key: 'B', text: '检测错误但不能定位纠正' }, { key: 'C', text: '只能检测一位错' }, { key: 'D', text: '替代重传机制' }],
    answer: ['B'],
    explain: 'CRC 检错能力强（尤其突发错），通常配合重传使用，本身不纠错。',
    source: 'original'
  },
  {
    id: 'q-co-026', subject: 'co', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: '下列关于 Cache 与虚拟存储器的说法，正确的是（ ）。',
    options: [
      { key: 'A', text: '两者都由硬件自动完成地址转换' },
      { key: 'B', text: 'Cache 缺失由硬件处理，缺页由操作系统处理' },
      { key: 'C', text: 'Cache 与虚存都按字节交换' },
      { key: 'D', text: 'TLB 命中意味着数据一定在 Cache 中' }
    ],
    answer: ['B'],
    explain: 'Cache 缺失由硬件填充；缺页需陷入内核由 OS 调入。TLB 与 Cache 相互独立。',
    source: 'original'
  }
]
