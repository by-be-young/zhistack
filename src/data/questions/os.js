const K = 'k-os-'

export const questionsOs = [
  {
    id: 'q-os-001', subject: 'os', knowledgeId: K + '002', type: 'single', difficulty: 1,
    stem: '下列事件中，会使用户程序从用户态转入内核态执行的是（ ）。',
    options: [{ key: 'A', text: '执行一条加法指令' }, { key: 'B', text: '执行系统调用' }, { key: 'C', text: '访问自身局部变量' }, { key: 'D', text: '进行算术比较' }],
    answer: ['B'],
    explain: '系统调用通过陷入指令进入内核态；普通运算与局部变量访问不需要特权。',
    source: 'original'
  },
  {
    id: 'q-os-002', subject: 'os', knowledgeId: K + '003', type: 'multiple', difficulty: 2,
    stem: '同一进程内的多个线程共享的资源包括（ ）。',
    options: [
      { key: 'A', text: '代码段与全局数据' },
      { key: 'B', text: '打开的文件描述符' },
      { key: 'C', text: '各自的栈与寄存器现场' },
      { key: 'D', text: '进程的地址空间' }
    ],
    answer: ['A', 'B', 'D'],
    explain: '线程共享进程的地址空间、代码、全局数据与打开文件；栈和寄存器是线程私有的。',
    source: 'original'
  },
  {
    id: 'q-os-003', subject: 'os', knowledgeId: K + '004', type: 'single', difficulty: 2,
    stem: '下列进程状态转换中，不可能发生的是（ ）。',
    options: [{ key: 'A', text: '就绪 → 运行' }, { key: 'B', text: '运行 → 阻塞' }, { key: 'C', text: '阻塞 → 运行' }, { key: 'D', text: '运行 → 就绪' }],
    answer: ['C'],
    explain: '阻塞态必须先等事件完成转入就绪态，再由调度器选中才能运行。',
    source: 'original'
  },
  {
    id: 'q-os-004', subject: 'os', knowledgeId: K + '005', type: 'single', difficulty: 1,
    stem: '下列不属于临界区管理基本原则的是（ ）。',
    options: [{ key: 'A', text: '空闲让进' }, { key: 'B', text: '忙则等待' }, { key: 'C', text: '无限等待' }, { key: 'D', text: '有限等待' }],
    answer: ['C'],
    explain: '临界区四原则为：空闲让进、忙则等待、有限等待、让权等待。',
    source: 'original'
  },
  {
    id: 'q-os-005', subject: 'os', knowledgeId: K + '006', type: 'single', difficulty: 2,
    stem: '互斥信号量初值为 1，两个进程先后执行 P 操作，第二个进程执行 P 后（ ）。',
    options: [{ key: 'A', text: '信号量变为 0，继续执行' }, { key: 'B', text: '信号量变为 -1，进入阻塞' }, { key: 'C', text: '信号量变为 2，继续执行' }, { key: 'D', text: '发生死锁' }],
    answer: ['B'],
    explain: '第一个 P 使 S 由 1 变 0；第二个 P 使 S=-1，进程进入等待队列。',
    source: 'original'
  },
  {
    id: 'q-os-006', subject: 'os', knowledgeId: K + '007', type: 'single', difficulty: 3,
    stem: '生产者-消费者问题中，生产者进入临界区前正确的 P 操作顺序是（ ）。',
    options: [{ key: 'A', text: 'P(mutex) → P(empty)' }, { key: 'B', text: 'P(empty) → P(mutex)' }, { key: 'C', text: 'P(full) → P(mutex)' }, { key: 'D', text: 'P(mutex) → P(full)' }],
    answer: ['B'],
    explain: '先申请空缓冲区再申请互斥锁；顺序颠倒会在缓冲区满时持锁阻塞，导致死锁。',
    source: 'original'
  },
  {
    id: 'q-os-007', subject: 'os', knowledgeId: K + '009', type: 'single', difficulty: 1,
    stem: '在作业运行时间已知的前提下，平均等待时间最短的调度算法是（ ）。',
    options: [{ key: 'A', text: 'FCFS' }, { key: 'B', text: 'SJF' }, { key: 'C', text: '时间片轮转' }, { key: 'D', text: '优先级调度' }],
    answer: ['B'],
    explain: '短作业优先每次选择运行时间最短者，可使平均等待时间最小（长作业可能饥饿）。',
    source: 'original'
  },
  {
    id: 'q-os-008', subject: 'os', knowledgeId: K + '009', type: 'single', difficulty: 3,
    stem: '两作业：P1 在 0 时刻到达、运行 8；P2 在 1 时刻到达、运行 4。采用 SJF，平均周转时间为（ ）。',
    options: [{ key: 'A', text: '8' }, { key: 'B', text: '9.5' }, { key: 'C', text: '11' }, { key: 'D', text: '12' }],
    answer: ['B'],
    explain: '0 时刻只有 P1，先运行 8；P2 在 8 开始、12 完成。周转 P1=8、P2=11，平均 9.5。',
    source: 'original'
  },
  {
    id: 'q-os-009', subject: 'os', knowledgeId: K + '009', type: 'single', difficulty: 2,
    stem: '时间片轮转调度中，若时间片过大，其效果接近于（ ）。',
    options: [{ key: 'A', text: 'SJF' }, { key: 'B', text: 'FCFS' }, { key: 'C', text: '优先级调度' }, { key: 'D', text: '多级反馈队列' }],
    answer: ['B'],
    explain: '时间片大于多数进程运行时间时，每个进程一次跑完，退化为先来先服务。',
    source: 'original'
  },
  {
    id: 'q-os-010', subject: 'os', knowledgeId: K + '010', type: 'single', difficulty: 1,
    stem: '下列不属于死锁必要条件的是（ ）。',
    options: [{ key: 'A', text: '互斥使用资源' }, { key: 'B', text: '请求并保持' }, { key: 'C', text: '资源可共享' }, { key: 'D', text: '循环等待' }],
    answer: ['C'],
    explain: '死锁四条件：互斥、请求并保持、不可剥夺、循环等待；资源可共享反而破坏互斥条件。',
    source: 'original'
  },
  {
    id: 'q-os-011', subject: 'os', knowledgeId: K + '011', type: 'single', difficulty: 3,
    stem: '银行家算法中，判断系统处于安全状态的核心依据是（ ）。',
    options: [{ key: 'A', text: '可用资源是否大于 0' }, { key: 'B', text: '能否找到一个安全序列' }, { key: 'C', text: '所有进程是否都在运行' }, { key: 'D', text: '是否存在循环等待' }],
    answer: ['B'],
    explain: '按 Need ≤ Work 依次模拟完成进程并回收资源，若所有进程都能完成则存在安全序列。',
    source: 'original'
  },
  {
    id: 'q-os-012', subject: 'os', knowledgeId: K + '013', type: 'single', difficulty: 3,
    stem: '页大小 4 KB，逻辑地址 0x2A5F，其页号为（ ）。',
    options: [{ key: 'A', text: '0' }, { key: 'B', text: '2' }, { key: 'C', text: '5' }, { key: 'D', text: '10' }],
    answer: ['B'],
    explain: '4 KB = 2¹²，页号 = 0x2A5F >> 12 = 0x2 = 2，页内偏移 0xA5F。',
    source: 'original'
  },
  {
    id: 'q-os-013', subject: 'os', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: '页大小为 8 KB 时，逻辑地址中页内偏移占（ ）位。',
    options: [{ key: 'A', text: '8' }, { key: 'B', text: '10' }, { key: 'C', text: '12' }, { key: 'D', text: '13' }],
    answer: ['D'],
    explain: '8 KB = 2¹³，故页内偏移 13 位，剩余高位为页号。',
    source: 'original'
  },
  {
    id: 'q-os-014', subject: 'os', knowledgeId: K + '014', type: 'single', difficulty: 2,
    stem: '与分页相比，分段的主要优点是（ ）。',
    options: [{ key: 'A', text: '没有碎片' }, { key: 'B', text: '便于按逻辑单位共享与保护' }, { key: 'C', text: '地址转换更快' }, { key: 'D', text: '不需要页表' }],
    answer: ['B'],
    explain: '段按程序逻辑划分（代码段、数据段），便于共享与权限保护；分段仍有外部碎片。',
    source: 'original'
  },
  {
    id: 'q-os-015', subject: 'os', knowledgeId: K + '015', type: 'single', difficulty: 2,
    stem: '访问的页面不在内存时触发的中断属于（ ）。',
    options: [{ key: 'A', text: '外中断' }, { key: 'B', text: '缺页异常（内中断）' }, { key: 'C', text: 'I/O 中断' }, { key: 'D', text: '时钟中断' }],
    answer: ['B'],
    explain: '缺页由当前指令的访存行为引起，属于异常/内中断，处理完可重新执行该指令。',
    source: 'original'
  },
  {
    id: 'q-os-016', subject: 'os', knowledgeId: K + '016', type: 'single', difficulty: 2,
    stem: '下列页面置换算法中，可能出现 Belady 异常的是（ ）。',
    options: [{ key: 'A', text: 'OPT' }, { key: 'B', text: 'LRU' }, { key: 'C', text: 'FIFO' }, { key: 'D', text: 'Clock 的改进版' }],
    answer: ['C'],
    explain: 'FIFO 不具备栈性质，增加页框可能导致缺页次数反而上升；OPT 与 LRU 不会。',
    source: 'original'
  },
  {
    id: 'q-os-017', subject: 'os', knowledgeId: K + '016', type: 'judge', difficulty: 2,
    stem: 'LRU 页面置换算法可能出现 Belady 异常。',
    options: [],
    answer: ['F'],
    explain: 'LRU 具有栈性质，页框增加时缺页次数只减不增，不会出现 Belady 异常。',
    source: 'original'
  },
  {
    id: 'q-os-018', subject: 'os', knowledgeId: K + '017', type: 'single', difficulty: 2,
    stem: '系统发生抖动（颠簸）的根本原因是（ ）。',
    options: [{ key: 'A', text: 'CPU 主频太低' }, { key: 'B', text: '分配给进程的页框少于其工作集' }, { key: 'C', text: '磁盘容量不足' }, { key: 'D', text: '进程优先级过高' }],
    answer: ['B'],
    explain: '页框不足导致刚换出的页很快又被访问，频繁缺页，CPU 利用率骤降。',
    source: 'original'
  },
  {
    id: 'q-os-019', subject: 'os', knowledgeId: K + '018', type: 'single', difficulty: 1,
    stem: '采用索引结点（inode）的目录中，目录项通常存放（ ）。',
    options: [{ key: 'A', text: '文件全部内容' }, { key: 'B', text: '文件名与 inode 号' }, { key: 'C', text: '文件数据块' }, { key: 'D', text: '磁盘空闲块' }],
    answer: ['B'],
    explain: '目录项只存文件名与 inode 号，文件属性与数据块指针存于 inode，减小目录体积。',
    source: 'original'
  },
  {
    id: 'q-os-020', subject: 'os', knowledgeId: K + '019', type: 'single', difficulty: 2,
    stem: '连续分配方式的主要缺点是（ ）。',
    options: [{ key: 'A', text: '不支持顺序访问' }, { key: 'B', text: '产生外部碎片且难以扩展' }, { key: 'C', text: '不能随机访问' }, { key: 'D', text: '索引块开销大' }],
    answer: ['B'],
    explain: '连续分配要求整块空间，文件增长困难，删除后留下外部碎片；优点是寻道少、支持随机访问。',
    source: 'original'
  },
  {
    id: 'q-os-021', subject: 'os', knowledgeId: K + '019', type: 'single', difficulty: 2,
    stem: '索引分配方式相对于链接分配的主要优势是（ ）。',
    options: [{ key: 'A', text: '不需要磁盘空间' }, { key: 'B', text: '支持直接访问且便于文件增长' }, { key: 'C', text: '不产生任何开销' }, { key: 'D', text: '只能顺序访问' }],
    answer: ['B'],
    explain: '索引块保存所有数据块指针，可直接定位任意块；代价是索引块占用空间。',
    source: 'original'
  },
  {
    id: 'q-os-022', subject: 'os', knowledgeId: K + '021', type: 'single', difficulty: 2,
    stem: '最短寻道时间优先（SSTF）磁盘调度算法的主要问题是（ ）。',
    options: [{ key: 'A', text: '平均寻道长' }, { key: 'B', text: '可能使远端请求饥饿' }, { key: 'C', text: '实现复杂' }, { key: 'D', text: '不支持任何请求' }],
    answer: ['B'],
    explain: 'SSTF 总是选最近的请求，若近处请求源源不断，远端请求可能长期得不到服务。',
    source: 'original'
  },
  {
    id: 'q-os-023', subject: 'os', knowledgeId: K + '021', type: 'single', difficulty: 3,
    stem: '磁头当前在 53，请求序列 98、183、37、122、14、124、65、67，采用 SCAN（先向磁道增大方向）总移动磁道数为（ ）。',
    options: [{ key: 'A', text: '208' }, { key: 'B', text: '299' }, { key: 'C', text: '326' }, { key: 'D', text: '365' }],
    answer: ['B'],
    explain: '向大：53→65→67→98→122→124→183（130）；折返向小：183→37→14（169）；合计 299。',
    source: 'original'
  },
  {
    id: 'q-os-024', subject: 'os', knowledgeId: K + '023', type: 'single', difficulty: 1,
    stem: 'SPOOLing 系统的主要组成部分是（ ）。',
    options: [{ key: 'A', text: '输入井与输出井' }, { key: 'B', text: '页表与段表' }, { key: 'C', text: 'TLB 与 Cache' }, { key: 'D', text: '信号量与管程' }],
    answer: ['A'],
    explain: 'SPOOLing 用磁盘上的输入井/输出井缓冲作业，配合输入输出进程把独占设备改造为共享设备。',
    source: 'original'
  },
  {
    id: 'q-os-025', subject: 'os', knowledgeId: K + '023', type: 'single', difficulty: 1,
    stem: '引入缓冲技术的主要目的是（ ）。',
    options: [{ key: 'A', text: '增加内存容量' }, { key: 'B', text: '缓解 CPU 与 I/O 设备速度不匹配' }, { key: 'C', text: '减少进程数量' }, { key: 'D', text: '提高磁盘转速' }],
    answer: ['B'],
    explain: '缓冲平滑速度差异，减少等待与中断频率，提高并行度。',
    source: 'original'
  },
  {
    id: 'q-os-026', subject: 'os', knowledgeId: K + '024', type: 'single', difficulty: 1,
    stem: '对称多处理（SMP）系统的特点是（ ）。',
    options: [{ key: 'A', text: '所有处理器平等共享同一主存' }, { key: 'B', text: '每个处理器有独立主存' }, { key: 'C', text: '只有一个处理器可执行内核' }, { key: 'D', text: '处理器之间不能通信' }],
    answer: ['A'],
    explain: 'SMP 各 CPU 地位对等、共享内存与总线；NUMA 才按节点划分访存距离。',
    source: 'original'
  }
]
