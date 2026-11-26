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
  },
  {
    id: 'book-math-calculus', subject: 'math', title: '高等数学（上册·下册）', author: '同济大学数学系',
    edition: '第 7 版', publisher: '高等教育出版社', pages: 427,
    note: '章节按考研数学一考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'm-ch1', title: '函数、极限与连续', page: 1, children: [
        { id: 'm-ch1-1', title: '极限的定义与性质', page: 1 },
        { id: 'm-ch1-2', title: '无穷小与连续性', page: 28 }] },
      { id: 'm-ch2', title: '一元函数微分学', page: 60, children: [
        { id: 'm-ch2-1', title: '导数与微分', page: 60 },
        { id: 'm-ch2-2', title: '中值定理与导数应用', page: 92 }] },
      { id: 'm-ch3', title: '一元函数积分学', page: 140, children: [
        { id: 'm-ch3-1', title: '不定积分', page: 140 },
        { id: 'm-ch3-2', title: '定积分与反常积分', page: 175 }] },
      { id: 'm-ch4', title: '多元函数微分学', page: 230, children: [
        { id: 'm-ch4-1', title: '偏导数与全微分', page: 230 },
        { id: 'm-ch4-2', title: '极值与条件极值', page: 262 }] },
      { id: 'm-ch5', title: '重积分', page: 290, children: [
        { id: 'm-ch5-1', title: '二重积分的计算', page: 290 }] },
      { id: 'm-ch6', title: '无穷级数', page: 330, children: [
        { id: 'm-ch6-1', title: '数项级数', page: 330 },
        { id: 'm-ch6-2', title: '幂级数', page: 355 }] },
      { id: 'm-ch7', title: '常微分方程', page: 380, children: [
        { id: 'm-ch7-1', title: '一阶方程', page: 380 },
        { id: 'm-ch7-2', title: '高阶线性方程', page: 398 }] }
    ]
  },
  {
    id: 'book-math-linear', subject: 'math', title: '线性代数', author: '同济大学数学系',
    edition: '第 6 版', publisher: '高等教育出版社', pages: 200,
    note: '章节按考研数学一考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'ml-ch1', title: '行列式', page: 1, children: [
        { id: 'ml-ch1-1', title: '行列式的性质与计算', page: 1 }] },
      { id: 'ml-ch2', title: '矩阵及其运算', page: 30, children: [
        { id: 'ml-ch2-1', title: '矩阵运算与逆矩阵', page: 30 },
        { id: 'ml-ch2-2', title: '矩阵的秩', page: 60 }] },
      { id: 'ml-ch3', title: '向量与线性方程组', page: 85, children: [
        { id: 'ml-ch3-1', title: '向量组的线性相关性', page: 85 },
        { id: 'ml-ch3-2', title: '解的结构与通解', page: 110 }] },
      { id: 'ml-ch4', title: '特征值与二次型', page: 135, children: [
        { id: 'ml-ch4-1', title: '特征值与相似对角化', page: 135 },
        { id: 'ml-ch4-2', title: '二次型与正定性', page: 165 }] }
    ]
  },
  {
    id: 'book-math-prob', subject: 'math', title: '概率论与数理统计', author: '盛骤、谢式千、潘承毅',
    edition: '第 4 版', publisher: '高等教育出版社', pages: 300,
    note: '章节按考研数学一考点重组，页码为对应内容首次出现的印刷页；请按自己的版本校准。',
    chapters: [
      { id: 'mp-ch1', title: '随机事件与概率', page: 1, children: [
        { id: 'mp-ch1-1', title: '概率公式与条件概率', page: 1 }] },
      { id: 'mp-ch2', title: '一维随机变量及其分布', page: 35, children: [
        { id: 'mp-ch2-1', title: '分布函数与常见分布', page: 35 }] },
      { id: 'mp-ch3', title: '多维随机变量', page: 75, children: [
        { id: 'mp-ch3-1', title: '联合分布与独立性', page: 75 }] },
      { id: 'mp-ch4', title: '数字特征', page: 105, children: [
        { id: 'mp-ch4-1', title: '期望、方差与协方差', page: 105 }] },
      { id: 'mp-ch5', title: '大数定律与参数估计', page: 150, children: [
        { id: 'mp-ch5-1', title: '极限定理与区间估计', page: 150 }] }
    ]
  },
  {
    id: 'book-en-core', subject: 'en', title: '考研英语核心讲义', author: '知栈教研组',
    edition: '第 1 版', publisher: '内部讲义', pages: 260,
    note: '按考纲与公开真题语料重组章节，不含真题原文；词汇与例句为原创示例。',
    chapters: [
      { id: 'en-ch1', title: '词汇与构词', page: 1, children: [
        { id: 'en-ch1-1', title: '词根词缀与熟词僻义', page: 1 }] },
      { id: 'en-ch2', title: '长难句与语法', page: 40, children: [
        { id: 'en-ch2-1', title: '从句体系', page: 40 },
        { id: 'en-ch2-2', title: '非谓语与特殊句式', page: 72 }] },
      { id: 'en-ch3', title: '完形填空', page: 100, children: [
        { id: 'en-ch3-1', title: '逻辑衔接与词义辨析', page: 100 }] },
      { id: 'en-ch4', title: '阅读理解', page: 125, children: [
        { id: 'en-ch4-1', title: '主旨与细节', page: 125 },
        { id: 'en-ch4-2', title: '推理、态度与干扰项', page: 158 }] },
      { id: 'en-ch5', title: '新题型', page: 190, children: [
        { id: 'en-ch5-1', title: '排序与匹配', page: 190 }] },
      { id: 'en-ch6', title: '翻译', page: 210, children: [
        { id: 'en-ch6-1', title: '拆分与重组', page: 210 }] },
      { id: 'en-ch7', title: '写作', page: 228, children: [
        { id: 'en-ch7-1', title: '小作文与大作文', page: 228 }] }
    ]
  },
  {
    id: 'book-pol-outline', subject: 'pol', title: '考研政治大纲解析（整理版）', author: '知栈教研组',
    edition: '第 1 版', publisher: '内部讲义', pages: 280,
    note: '按考纲五部分重组章节，摘要为原创整理，不含大纲原文与领导人讲话原文。',
    chapters: [
      { id: 'po-ch1', title: '马克思主义基本原理', page: 1, children: [
        { id: 'po-ch1-1', title: '哲学部分', page: 1 },
        { id: 'po-ch1-2', title: '政治经济学部分', page: 45 }] },
      { id: 'po-ch2', title: '毛泽东思想和中国特色社会主义理论体系', page: 85, children: [
        { id: 'po-ch2-1', title: '革命与建设', page: 85 },
        { id: 'po-ch2-2', title: '新时代理论', page: 125 }] },
      { id: 'po-ch3', title: '中国近现代史纲要', page: 165, children: [
        { id: 'po-ch3-1', title: '时间线与历史选择', page: 165 }] },
      { id: 'po-ch4', title: '思想道德与法治', page: 205, children: [
        { id: 'po-ch4-1', title: '道德与法律', page: 205 }] },
      { id: 'po-ch5', title: '形势与政策', page: 245, children: [
        { id: 'po-ch5-1', title: '时政命题与分析题', page: 245 }] }
    ]
  }
]

export const bookMap = Object.fromEntries(books.map(b => [b.id, b]))

export const chaptersByBook = Object.fromEntries(
  books.map(b => [b.id, b.chapters.flatMap(c => [c, ...(c.children || [])])])
)
