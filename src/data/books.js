// 书目只存公开出版信息、重组后的章节结构与起始印刷页，不含教材正文。
// 页码按目录推算，标记 approx，可在书库中做页码偏移校准。

export const books = [
  {
    id: 'book-ds-yan', subject: 'ds', title: '数据结构（C 语言版）', author: '严蔚敏、吴伟民',
    edition: '第 2 版', publisher: '清华大学出版社', pages: 272,
    note: '章节按高频考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'ds-ch1', title: '绪论', page: 1, children: [
        { id: 'ds-ch1-1', title: '数据结构基本概念', page: 1 },
        { id: 'ds-ch1-2', title: '算法与复杂度', page: 9 }] },
      { id: 'ds-ch2', title: '线性表', page: 18, children: [
        { id: 'ds-ch2-1', title: '顺序表', page: 18 },
        { id: 'ds-ch2-2', title: '链表', page: 27 }] },
      { id: 'ds-ch3', title: '栈和队列', page: 45, children: [
        { id: 'ds-ch3-1', title: '栈', page: 45 },
        { id: 'ds-ch3-2', title: '队列', page: 56 }] },
      { id: 'ds-ch4', title: '串', page: 72, children: [
        { id: 'ds-ch4-1', title: '串的存储与模式匹配', page: 72 }] },
      { id: 'ds-ch5', title: '树和二叉树', page: 88, children: [
        { id: 'ds-ch5-1', title: '二叉树性质与存储', page: 88 },
        { id: 'ds-ch5-2', title: '遍历与线索化', page: 100 },
        { id: 'ds-ch5-3', title: '哈夫曼树', page: 118 }] },
      { id: 'ds-ch6', title: '图', page: 155, children: [
        { id: 'ds-ch6-1', title: '图的存储与遍历', page: 155 },
        { id: 'ds-ch6-2', title: '最小生成树与最短路径', page: 170 },
        { id: 'ds-ch6-3', title: '拓扑排序与关键路径', page: 185 }] },
      { id: 'ds-ch7', title: '查找', page: 205, children: [
        { id: 'ds-ch7-1', title: '静态查找与折半', page: 205 },
        { id: 'ds-ch7-2', title: '树表与散列表', page: 215 }] },
      { id: 'ds-ch8', title: '内部排序与外部排序', page: 235, children: [
        { id: 'ds-ch8-1', title: '插入与交换排序', page: 235 },
        { id: 'ds-ch8-2', title: '选择、归并与基数排序', page: 248 },
        { id: 'ds-ch8-3', title: '外部排序', page: 262 }] }
    ]
  },
  {
    id: 'book-co-tang', subject: 'co', title: '计算机组成原理', author: '唐朔飞',
    edition: '第 2 版', publisher: '高等教育出版社', pages: 380,
    note: '章节按高频考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'co-ch1', title: '计算机系统概论', page: 1, children: [
        { id: 'co-ch1-1', title: '冯·诺依曼结构与性能指标', page: 1 },
        { id: 'co-ch1-2', title: '校验码', page: 14 }] },
      { id: 'co-ch2', title: '系统总线', page: 35, children: [
        { id: 'co-ch2-1', title: '总线结构与仲裁', page: 35 }] },
      { id: 'co-ch3', title: '存储器', page: 65, children: [
        { id: 'co-ch3-1', title: '主存与刷新', page: 65 },
        { id: 'co-ch3-2', title: 'Cache', page: 92 },
        { id: 'co-ch3-3', title: '虚拟存储器', page: 118 }] },
      { id: 'co-ch4', title: '输入输出系统', page: 145, children: [
        { id: 'co-ch4-1', title: 'I/O 接口与方式', page: 145 },
        { id: 'co-ch4-2', title: '中断与 DMA', page: 165 }] },
      { id: 'co-ch5', title: '计算机的运算方法', page: 190, children: [
        { id: 'co-ch5-1', title: '数制与定点表示', page: 190 },
        { id: 'co-ch5-2', title: '浮点表示与运算', page: 215 }] },
      { id: 'co-ch6', title: '指令系统', page: 250, children: [
        { id: 'co-ch6-1', title: '指令格式与寻址', page: 250 },
        { id: 'co-ch6-2', title: 'CISC 与 RISC', page: 268 }] },
      { id: 'co-ch7', title: 'CPU 的结构和功能', page: 280, children: [
        { id: 'co-ch7-1', title: '指令周期与数据通路', page: 280 },
        { id: 'co-ch7-2', title: '流水线', page: 300 }] },
      { id: 'co-ch8', title: '控制单元与外部设备', page: 320, children: [
        { id: 'co-ch8-1', title: '控制器与微程序', page: 320 },
        { id: 'co-ch8-2', title: '磁盘与 RAID', page: 352 }] }
    ]
  },
  {
    id: 'book-os-tang', subject: 'os', title: '计算机操作系统', author: '汤小丹等',
    edition: '第 4 版', publisher: '西安电子科技大学出版社', pages: 330,
    note: '章节按高频考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'os-ch1', title: '操作系统引论', page: 1, children: [
        { id: 'os-ch1-1', title: '目标、作用与结构', page: 1 },
        { id: 'os-ch1-2', title: '内核态与系统调用', page: 16 }] },
      { id: 'os-ch2', title: '进程管理', page: 30, children: [
        { id: 'os-ch2-1', title: '进程与线程', page: 30 },
        { id: 'os-ch2-2', title: '同步与信号量', page: 55 },
        { id: 'os-ch2-3', title: '经典同步问题', page: 72 }] },
      { id: 'os-ch3', title: '处理机调度与死锁', page: 85, children: [
        { id: 'os-ch3-1', title: '调度算法', page: 85 },
        { id: 'os-ch3-2', title: '死锁与银行家算法', page: 105 }] },
      { id: 'os-ch4', title: '存储器管理', page: 125, children: [
        { id: 'os-ch4-1', title: '连续分配', page: 125 },
        { id: 'os-ch4-2', title: '分页与分段', page: 138 }] },
      { id: 'os-ch5', title: '虚拟存储器', page: 160, children: [
        { id: 'os-ch5-1', title: '请求分页', page: 160 },
        { id: 'os-ch5-2', title: '置换算法与抖动', page: 172 }] },
      { id: 'os-ch6', title: '文件管理', page: 195, children: [
        { id: 'os-ch6-1', title: '逻辑结构与目录', page: 195 },
        { id: 'os-ch6-2', title: '物理结构与共享', page: 210 }] },
      { id: 'os-ch7', title: '磁盘与 I/O 管理', page: 235, children: [
        { id: 'os-ch7-1', title: '磁盘调度与空间管理', page: 235 },
        { id: 'os-ch7-2', title: '缓冲与 SPOOLing', page: 258 }] },
      { id: 'os-ch8', title: '多处理机与系统接口', page: 270, children: [
        { id: 'os-ch8-1', title: '多处理机与并行', page: 270 }] }
    ]
  },
  {
    id: 'book-cn-xie', subject: 'cn', title: '计算机网络', author: '谢希仁',
    edition: '第 8 版', publisher: '电子工业出版社', pages: 350,
    note: '章节按高频考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'cn-ch1', title: '概述', page: 1, children: [
        { id: 'cn-ch1-1', title: '体系结构与分层', page: 1 },
        { id: 'cn-ch1-2', title: '性能指标', page: 18 }] },
      { id: 'cn-ch2', title: '物理层', page: 40, children: [
        { id: 'cn-ch2-1', title: '编码与调制', page: 40 },
        { id: 'cn-ch2-2', title: '信道复用', page: 52 }] },
      { id: 'cn-ch3', title: '数据链路层', page: 70, children: [
        { id: 'cn-ch3-1', title: '成帧与差错检测', page: 70 },
        { id: 'cn-ch3-2', title: '以太网与交换', page: 88 }] },
      { id: 'cn-ch4', title: '网络层', page: 115, children: [
        { id: 'cn-ch4-1', title: 'IP 与子网', page: 115 },
        { id: 'cn-ch4-2', title: '路由协议', page: 145 },
        { id: 'cn-ch4-3', title: 'IPv6 与 ICMP', page: 165 }] },
      { id: 'cn-ch5', title: '运输层', page: 180, children: [
        { id: 'cn-ch5-1', title: 'UDP 与 TCP', page: 180 },
        { id: 'cn-ch5-2', title: '可靠传输与拥塞控制', page: 200 }] },
      { id: 'cn-ch6', title: '应用层', page: 235, children: [
        { id: 'cn-ch6-1', title: 'DNS 与 HTTP', page: 235 },
        { id: 'cn-ch6-2', title: '邮件与 FTP', page: 258 }] },
      { id: 'cn-ch7', title: '网络安全', page: 275, children: [
        { id: 'cn-ch7-1', title: '加密与认证', page: 275 }] }
    ]
  }
]

export const bookMap = Object.fromEntries(books.map(b => [b.id, b]))

export const chaptersByBook = Object.fromEntries(
  books.map(b => [b.id, b.chapters.flatMap(c => [c, ...(c.children || [])])])
)
