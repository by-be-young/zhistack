export const knowledgeOs = [
  {
    id: 'k-os-001', subject: 'os', chapterId: 'os-ch1', gid: 'OS-1.1-01',
    title: '操作系统的目标与功能', difficulty: 1, tags: ['OS', '资源管理'],
    summary: '管理软硬件资源、提供用户接口；四大功能为处理机、存储器、文件与设备管理。',
    points: [
      'OS 是资源管理者，也是用户与硬件的接口。',
      '特征：并发、共享、虚拟、异步；并发与共享互为条件。',
      '分时系统追求响应，实时系统追求截止时间。'
    ],
    pitfalls: ['把并发（宏观同时）与并行（微观同时）混用。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch1', page: 3, confidence: 'approx' }],
    related: ['k-os-002', 'k-os-003'], estMin: 10
  },
  {
    id: 'k-os-002', subject: 'os', chapterId: 'os-ch1', gid: 'OS-1.2-01',
    title: '内核态、用户态与系统调用', difficulty: 2, tags: ['内核态', '系统调用'],
    summary: 'CPU 分特权级，用户程序通过陷入指令进入内核态执行特权操作，完成后返回。',
    points: [
      '系统调用是用户程序主动请求内核服务的唯一入口。',
      '中断/异常/陷入都会切换到内核态，切换需保存现场。',
      '特权指令只能在内核态执行，如修改页表基址、关中断。'
    ],
    pitfalls: ['认为系统调用与普通函数调用一样不切换态。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch1', page: 16, confidence: 'approx' }],
    related: ['k-os-001', 'k-os-004'], estMin: 12
  },
  {
    id: 'k-os-003', subject: 'os', chapterId: 'os-ch2', gid: 'OS-2.1-01',
    title: '进程与线程', difficulty: 1, tags: ['进程', '线程'],
    summary: '进程是资源分配单位，线程是调度执行单位；同进程线程共享地址空间。',
    points: [
      '进程拥有独立地址空间与 PCB；线程共享代码、数据、打开文件。',
      '线程切换不切换页表，开销小于进程切换。',
      '用户级线程由库管理，内核不可见；内核级线程可并行调度。'
    ],
    pitfalls: ['认为线程拥有独立的地址空间。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch2', page: 32, confidence: 'approx' }],
    related: ['k-os-001', 'k-os-004'], estMin: 10
  },
  {
    id: 'k-os-004', subject: 'os', chapterId: 'os-ch2', gid: 'OS-2.1-02',
    title: '进程状态与 PCB', difficulty: 2, tags: ['进程状态', 'PCB'],
    summary: '三态：就绪、运行、阻塞；五态增加创建与终止；PCB 记录进程全部控制信息。',
    points: [
      '就绪→运行需调度，运行→阻塞由自身请求资源，阻塞→就绪由事件完成。',
      '运行→就绪是被剥夺，阻塞不能直接变运行。',
      'PCB 含标识、状态、程序计数器、寄存器现场、资源清单、优先级。'
    ],
    pitfalls: ['认为阻塞态可以直接转为运行态。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch2', page: 40, confidence: 'approx' }],
    related: ['k-os-003', 'k-os-009'], estMin: 12
  },
  {
    id: 'k-os-005', subject: 'os', chapterId: 'os-ch2', gid: 'OS-2.2-01',
    title: '进程同步与互斥', difficulty: 2, tags: ['同步', '临界区'],
    summary: '互斥保证临界区不被打断，同步保证并发进程按约定顺序执行。',
    points: [
      '临界区四原则：空闲让进、忙则等待、有限等待、让权等待。',
      '软件方法 Peterson 满足互斥但可能忙等；硬件用 TestAndSet/Swap。',
      '互斥是同步的特殊情形，同步还包含次序约束。'
    ],
    pitfalls: ['把「同步」等同于「互斥」。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch2', page: 55, confidence: 'approx' }],
    related: ['k-os-006', 'k-os-007'], estMin: 12
  },
  {
    id: 'k-os-006', subject: 'os', chapterId: 'os-ch2', gid: 'OS-2.2-02',
    title: '信号量与 PV 操作', difficulty: 3, tags: ['信号量', 'PV'],
    summary: '信号量是整型变量，P 申请（减 1，小于 0 则阻塞），V 释放（加 1，唤醒等待者）。',
    points: [
      '互斥信号量初值 1；同步信号量初值通常为 0 或资源数。',
      'P/V 必须成对出现，互斥 P 在同步 P 之前，V 顺序无关。',
      '信号量值为负时，绝对值等于等待队列中的进程数。'
    ],
    pitfalls: ['互斥 P 放在同步 P 之后，导致死锁。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch2', page: 62, confidence: 'approx' }],
    related: ['k-os-005', 'k-os-007'], estMin: 18
  },
  {
    id: 'k-os-007', subject: 'os', chapterId: 'os-ch2', gid: 'OS-2.3-01',
    title: '经典同步问题：生产者消费者', difficulty: 3, tags: ['生产者消费者', '同步'],
    summary: '缓冲区满则生产者等待，空则消费者等待；用 empty/full/mutex 三个信号量协调。',
    points: [
      '`empty=n`、`full=0`、`mutex=1`；生产者先 P(empty) 再 P(mutex)。',
      '消费者先 P(full) 再 P(mutex)，取出后 V(mutex) 与 V(empty)。',
      '若互斥 P 先于资源 P，缓冲区满时持锁阻塞，造成死锁。'
    ],
    pitfalls: ['P 操作顺序颠倒导致死锁。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch2', page: 72, confidence: 'approx' }],
    related: ['k-os-006', 'k-os-008'], estMin: 18
  },
  {
    id: 'k-os-008', subject: 'os', chapterId: 'os-ch2', gid: 'OS-2.3-02',
    title: '进程通信与管道', difficulty: 2, tags: ['IPC', '管道'],
    summary: '共享存储、消息传递、管道三种方式；管道是半双工的字节流缓冲区。',
    points: [
      '共享存储需自行同步；消息传递天然同步，适合分布式。',
      '匿名管道用于亲缘进程，命名管道可用于无亲缘进程。',
      '管道读写在两端关闭后收到 EOF。'
    ],
    pitfalls: ['认为管道是全双工且可随机定位。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch2', page: 80, confidence: 'approx' }],
    related: ['k-os-007'], estMin: 10
  },
  {
    id: 'k-os-009', subject: 'os', chapterId: 'os-ch3', gid: 'OS-3.1-01',
    title: '调度算法：FCFS、SJF、RR、优先级', difficulty: 3, tags: ['调度', '周转时间'],
    summary: '按不同目标选择进程：FCFS 公平但短作业排队，SJF 最优平均等待，RR 保证响应。',
    points: [
      '周转时间 = 完成时刻 − 到达时刻；带权周转 = 周转 / 运行时间。',
      'SJF 平均等待时间最小，但需预知运行时间且长作业饥饿。',
      'RR 时间片过大退化为 FCFS，过小切换开销大。'
    ],
    pitfalls: ['计算等待时间时忘记减去到达时刻。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch3', page: 88, confidence: 'approx' }],
    related: ['k-os-004', 'k-os-010'], estMin: 18
  },
  {
    id: 'k-os-010', subject: 'os', chapterId: 'os-ch3', gid: 'OS-3.2-01',
    title: '死锁的四个必要条件', difficulty: 2, tags: ['死锁', '必要条件'],
    summary: '互斥、请求与保持、不可剥夺、循环等待；四个条件同时成立才可能死锁。',
    points: [
      '破坏任一条件即可预防：资源一次性分配、可剥夺、按序申请。',
      '死锁避免用银行家算法；检测用资源分配图化简。',
      '死锁与饥饿不同：死锁是互相等待成环，饥饿是长期得不到资源。'
    ],
    pitfalls: ['认为四个条件之一成立就必然死锁。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch3', page: 105, confidence: 'approx' }],
    related: ['k-os-011', 'k-os-009'], estMin: 14
  },
  {
    id: 'k-os-011', subject: 'os', chapterId: 'os-ch3', gid: 'OS-3.2-02',
    title: '银行家算法', difficulty: 3, tags: ['银行家算法', '安全序列'],
    summary: '分配前检查是否存在安全序列：按需求不超过可用资源的进程依次完成。',
    points: [
      'Need = Max − Allocation；Work 初值为 Available。',
      '每轮找 `Need ≤ Work` 的进程，回收其 Allocation，重复直到全部完成。',
      '找到安全序列则分配安全；找不到则拒绝本次请求。'
    ],
    pitfalls: ['把安全状态等同于不会死锁——安全状态一定无死锁，不安全状态只是可能死锁。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch3', page: 112, confidence: 'approx' }],
    related: ['k-os-010'], estMin: 18
  },
  {
    id: 'k-os-012', subject: 'os', chapterId: 'os-ch4', gid: 'OS-4.1-01',
    title: '连续分配与碎片', difficulty: 2, tags: ['分区', '碎片'],
    summary: '单一连续、固定分区、动态分区；动态分区产生外部碎片，可用紧凑解决。',
    points: [
      '首次适应、最佳适应、最坏适应、邻近适应四种放置策略。',
      '最佳适应残留小碎片最多；首次适应性能通常较好。',
      '固定分区有内部碎片，动态分区有外部碎片。'
    ],
    pitfalls: ['混淆内部碎片与外部碎片的产生场景。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch4', page: 128, confidence: 'approx' }],
    related: ['k-os-013', 'k-os-014'], estMin: 14
  },
  {
    id: 'k-os-013', subject: 'os', chapterId: 'os-ch4', gid: 'OS-4.2-01',
    title: '分页存储与地址转换', difficulty: 3, tags: ['分页', '页表'],
    summary: '逻辑地址分页号与页内偏移，页表把页号映射到物理块号，无外部碎片。',
    points: [
      '页大小是 2 的幂，页内偏移位数 = log₂(页大小)。',
      '物理地址 = 块号 × 页大小 + 偏移；页表项常含存在位、保护位。',
      '两级页表把页表再分页，减少连续空间需求。'
    ],
    pitfalls: ['把页号与块号位数算错，忽略页大小。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch4', page: 138, confidence: 'approx' }],
    related: ['k-os-012', 'k-os-014', 'k-co-007'], estMin: 18
  },
  {
    id: 'k-os-014', subject: 'os', chapterId: 'os-ch4', gid: 'OS-4.2-02',
    title: '分段与段页式', difficulty: 3, tags: ['分段', '段页式'],
    summary: '分段按逻辑单位划分，便于共享与保护；段页式先分段再分页，兼顾两者。',
    points: [
      '段表项含段长与基址，地址 = 段号 + 段内偏移，需检查越界。',
      '分段有外部碎片，分页有内部碎片。',
      '段页式地址转换需查段表再查页表，访存次数更多，靠 TLB 缓解。'
    ],
    pitfalls: ['认为分段没有碎片；分段仍有外部碎片。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch4', page: 152, confidence: 'approx' }],
    related: ['k-os-013'], estMin: 16
  },
  {
    id: 'k-os-015', subject: 'os', chapterId: 'os-ch5', gid: 'OS-5.1-01',
    title: '虚拟内存与请求分页', difficulty: 3, tags: ['虚拟内存', '缺页'],
    summary: '只装入部分页即可运行，访问不在内存的页触发缺页中断调入。',
    points: [
      '缺页中断属于内中断，处理时可能需置换页面并修改页表。',
      '虚拟地址空间可大于物理内存，依靠局部性原理。',
      '页表项增加有效位、访问位、修改位、外存地址。'
    ],
    pitfalls: ['认为虚拟内存等于外存，实际是地址空间抽象。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch5', page: 162, confidence: 'approx' }],
    related: ['k-os-013', 'k-os-016', 'k-co-007'], estMin: 16
  },
  {
    id: 'k-os-016', subject: 'os', chapterId: 'os-ch5', gid: 'OS-5.2-01',
    title: '页面置换算法与 Belady 异常', difficulty: 3, tags: ['置换', 'LRU'],
    summary: 'OPT 最优不可实现，FIFO 简单但可能异常，LRU 近似最优但开销大。',
    points: [
      'FIFO 增加页框可能增加缺页数（Belady 异常）；LRU 与 OPT 不会。',
      'Clock 用访问位循环检查，近似 LRU，开销小。',
      '缺页率 = 缺页次数 / 访问次数，受页框数与访问串影响。'
    ],
    pitfalls: ['认为所有算法增加页框都会减少缺页。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch5', page: 174, confidence: 'approx' }],
    related: ['k-os-015', 'k-os-017'], estMin: 18
  },
  {
    id: 'k-os-017', subject: 'os', chapterId: 'os-ch5', gid: 'OS-5.2-02',
    title: '抖动与工作集', difficulty: 3, tags: ['抖动', '工作集'],
    summary: '页框不足导致频繁换页，CPU 利用率骤降；工作集描述近期访问页集合。',
    points: [
      '抖动根因是分配给进程的页框少于其工作集。',
      '工作集窗口 Δ 内的不同页数即工作集大小，用于分配页框。',
      '预防：局部置换 + 工作集模型 + 挂起部分进程。'
    ],
    pitfalls: ['用增加多道程序度来缓解抖动，反而加剧。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch5', page: 186, confidence: 'approx' }],
    related: ['k-os-016'], estMin: 14
  },
  {
    id: 'k-os-018', subject: 'os', chapterId: 'os-ch6', gid: 'OS-6.1-01',
    title: '文件逻辑结构与目录', difficulty: 1, tags: ['文件', '目录'],
    summary: '文件按逻辑结构分有结构/无结构；目录实现按名存取，常用树形与索引结点。',
    points: [
      '目录项存文件名与 inode 号，FCB 存文件属性与物理位置。',
      '绝对路径从根开始，相对路径从当前目录开始。',
      '硬链接共享 inode，软链接是独立文件存路径。'
    ],
    pitfalls: ['把目录当成文件内容的存储位置，实际只存索引。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch6', page: 197, confidence: 'approx' }],
    related: ['k-os-019', 'k-os-020'], estMin: 12
  },
  {
    id: 'k-os-019', subject: 'os', chapterId: 'os-ch6', gid: 'OS-6.2-01',
    title: '文件物理结构：连续、链接、索引', difficulty: 2, tags: ['文件分配', '索引'],
    summary: '连续分配寻道少但难扩展；链接分配无碎片但不支持随机；索引分配支持随机但索引块开销。',
    points: [
      '连续分配支持顺序与随机访问，需预知文件大小，有外部碎片。',
      '隐式链接只能顺序访问；显式链接用 FAT 表支持随机。',
      '多级索引与混合索引（直接+间接）兼顾大小文件。'
    ],
    pitfalls: ['认为链接分配支持随机访问（隐式链接不支持）。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch6', page: 212, confidence: 'approx' }],
    related: ['k-os-018', 'k-os-022'], estMin: 16
  },
  {
    id: 'k-os-020', subject: 'os', chapterId: 'os-ch6', gid: 'OS-6.2-02',
    title: '文件共享与保护', difficulty: 2, tags: ['共享', '权限'],
    summary: '硬链接与符号链接实现共享；访问控制用权限位或访问控制表。',
    points: [
      '硬链接计数为 0 才真正删除文件；软链接失效产生悬空链接。',
      '权限位 rwx 分属主、组、其他；ACL 更细粒度。',
      '共享文件需考虑并发写的一致性问题。'
    ],
    pitfalls: ['删除硬链接就认为文件被删除（还有其它链接时不会）。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch6', page: 225, confidence: 'approx' }],
    related: ['k-os-018'], estMin: 12
  },
  {
    id: 'k-os-021', subject: 'os', chapterId: 'os-ch7', gid: 'OS-7.1-01',
    title: '磁盘调度算法', difficulty: 2, tags: ['磁盘调度', '寻道'],
    summary: 'FCFS、SSTF、SCAN、C-SCAN、LOOK 决定磁头移动顺序，影响总寻道长度。',
    points: [
      'SSTF 每次选最近请求，平均寻道短但可能饥饿远端请求。',
      'SCAN 单向扫到端点再折返（电梯算法）；C-SCAN 只单向服务。',
      'LOOK 到最远请求即折返，不必到物理端点。'
    ],
    pitfalls: ['计算总寻道长度时漏算折返段。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch7', page: 237, confidence: 'approx' }],
    related: ['k-os-022', 'k-co-022'], estMin: 16
  },
  {
    id: 'k-os-022', subject: 'os', chapterId: 'os-ch7', gid: 'OS-7.1-02',
    title: '磁盘空间管理与成组链接', difficulty: 3, tags: ['空闲空间', '成组链接'],
    summary: '空闲表、位示图、成组链接管理空闲块；成组链接适合大磁盘。',
    points: [
      '位示图一位对应一块，占用空间小，易找连续块。',
      '成组链接每组存若干空闲块号，最后指向下一组。',
      'UNIX 用成组链接，分配回收都在栈顶进行。'
    ],
    pitfalls: ['把成组链接与索引分配混淆。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch7', page: 248, confidence: 'approx' }],
    related: ['k-os-019', 'k-os-021'], estMin: 16
  },
  {
    id: 'k-os-023', subject: 'os', chapterId: 'os-ch7', gid: 'OS-7.2-01',
    title: '缓冲技术与 SPOOLing', difficulty: 2, tags: ['缓冲', 'SPOOLing'],
    summary: '缓冲缓解速度不匹配；SPOOLing 用磁盘把独占设备虚拟为共享设备。',
    points: [
      '单缓冲、双缓冲、循环缓冲、缓冲池逐级提升并行度。',
      'SPOOLing 由输入井、输出井与守护进程组成。',
      '缓冲减少中断次数与 CPU 等待。'
    ],
    pitfalls: ['把 SPOOLing 只当成打印队列，实际是通用独占设备共享技术。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch7', page: 262, confidence: 'approx' }],
    related: ['k-os-021'], estMin: 12
  },
  {
    id: 'k-os-024', subject: 'os', chapterId: 'os-ch8', gid: 'OS-8.1-01',
    title: '多处理机与并行调度', difficulty: 2, tags: ['多处理机', '并行'],
    summary: 'SMP 共享内存、NUMA 分域访存；调度需考虑负载均衡与亲和性。',
    points: [
      '对称多处理（SMP）所有 CPU 平等访问同一内存。',
      'NUMA 访存延迟与节点相关，需本地性调度。',
      '多核下自旋锁适合短临界区，睡眠锁适合长等待。'
    ],
    pitfalls: ['认为核数翻倍性能就翻倍，忽略串行部分（Amdahl 定律）。'],
    bookRefs: [{ bookId: 'book-os-tang', chapterId: 'os-ch8', page: 272, confidence: 'approx' }],
    related: ['k-os-009'], estMin: 12
  }
]
