export const knowledgeCn = [
  {
    id: 'k-cn-001', subject: 'cn', chapterId: 'cn-ch1', gid: 'CN-1.1-01',
    title: '网络体系结构与分层', difficulty: 1, tags: ['OSI', 'TCP/IP'],
    summary: 'OSI 七层与 TCP/IP 四层对应；分层让每层只关心自己的职责，通过封装传递。',
    points: [
      '应用层-运输层-网际层-网络接口层（TCP/IP 四层）。',
      '数据封装逐层加首部，解封装逐层去首部。',
      '协议是同级通信规则，服务是下层向上层提供的能力。'
    ],
    pitfalls: ['把 OSI 七层与 TCP/IP 四层一一对应，会话层/表示层在 TCP/IP 中并入应用层。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch1', page: 25, confidence: 'approx' }],
    related: ['k-cn-002', 'k-cn-003'], estMin: 10
  },
  {
    id: 'k-cn-002', subject: 'cn', chapterId: 'cn-ch1', gid: 'CN-1.2-01',
    title: '带宽、时延与 RTT', difficulty: 2, tags: ['性能', '时延'],
    summary: '时延由发送、传播、处理、排队组成；带宽指链路最高速率，吞吐是实际速率。',
    points: [
      '发送时延 = 数据长度 / 带宽；传播时延 = 距离 / 信号速度。',
      '时延带宽积 = 传播时延 × 带宽，表示链路中「在途比特数」。',
      'RTT 往返时间，TCP 拥塞控制与超时都依赖它。'
    ],
    pitfalls: ['把带宽当成传播速度。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch1', page: 18, confidence: 'approx' }],
    related: ['k-cn-001', 'k-cn-018'], estMin: 12
  },
  {
    id: 'k-cn-003', subject: 'cn', chapterId: 'cn-ch2', gid: 'CN-2.1-01',
    title: '编码与调制', difficulty: 2, tags: ['编码', '调制'],
    summary: '基带传输用编码（曼彻斯特、NRZ），频带传输用调制（ASK/FSK/PSK/QAM）。',
    points: [
      '曼彻斯特编码每位中间跳变，自带同步，效率 50%。',
      '奈氏准则限制码元速率，香农公式给出信道容量 `C=W log₂(1+S/N)`。',
      'QAM 同时调制幅度与相位，提高每码元比特数。'
    ],
    pitfalls: ['用香农公式计算无噪声信道的极限速率。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch2', page: 42, confidence: 'approx' }],
    related: ['k-cn-002', 'k-cn-004'], estMin: 14
  },
  {
    id: 'k-cn-004', subject: 'cn', chapterId: 'cn-ch2', gid: 'CN-2.2-01',
    title: '信道复用技术', difficulty: 2, tags: ['复用', 'FDMA'],
    summary: '频分、时分、波分、码分复用共享信道；CDMA 用正交码区分用户。',
    points: [
      'FDM 按频率划分，TDM 按时间片划分，WDM 是光的 FDM。',
      '统计时分复用按需分配时隙，提高利用率。',
      'CDMA 各用户码片正交，接收端用相同码片内积还原。'
    ],
    pitfalls: ['把 TDM 的时隙固定分配当作按需分配。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch2', page: 55, confidence: 'approx' }],
    related: ['k-cn-003'], estMin: 12
  },
  {
    id: 'k-cn-005', subject: 'cn', chapterId: 'cn-ch3', gid: 'CN-3.1-01',
    title: '成帧与差错检测', difficulty: 2, tags: ['成帧', 'CRC'],
    summary: '帧定界用字符计数、字符填充或比特填充；差错检测用 CRC 与校验和。',
    points: [
      '比特填充：连续 5 个 1 后插入 0，接收端删除。',
      'CRC 检错强，校验和（互联网）实现简单但检错能力弱。',
      'CRC 只能检错不能纠错（除非结合重传）。'
    ],
    pitfalls: ['认为 CRC 能纠正错误。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch3', page: 72, confidence: 'approx' }],
    related: ['k-cn-006', 'k-cn-007'], estMin: 12
  },
  {
    id: 'k-cn-006', subject: 'cn', chapterId: 'cn-ch3', gid: 'CN-3.1-02',
    title: 'PPP 协议与 HDLC', difficulty: 2, tags: ['PPP', 'HDLC'],
    summary: 'PPP 用于拨号/点对点链路，帧格式含标志、地址、控制、协议、FCS；HDLC 面向比特。',
    points: [
      'PPP 用 0x7E 标志，透明传输用字节填充或比特填充。',
      'PPP 不提供可靠传输，检错后丢弃，由上层负责。',
      'PPP 支持多协议（IP、IPX），LCP 协商链路参数。'
    ],
    pitfalls: ['认为 PPP 提供可靠传输。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch3', page: 84, confidence: 'approx' }],
    related: ['k-cn-005'], estMin: 12
  },
  {
    id: 'k-cn-007', subject: 'cn', chapterId: 'cn-ch3', gid: 'CN-3.2-01',
    title: 'CSMA/CD 与以太网帧', difficulty: 3, tags: ['CSMA/CD', '以太网'],
    summary: '先听后发、边发边听、冲突停发、随机重发；最小帧长保证能检测冲突。',
    points: [
      '最小帧长 = 2 × 传播时延 × 数据速率（64 字节 @10Mbps）。',
      '二进制指数退避：第 k 次冲突随机取 `0..2^k-1` 个争用期。',
      '以太网帧最小 64、最大 1518 字节，含前导码与 FCS。'
    ],
    pitfalls: ['计算最小帧长时漏掉往返时延的 2 倍。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch3', page: 90, confidence: 'approx' }],
    related: ['k-cn-005', 'k-cn-008'], estMin: 18
  },
  {
    id: 'k-cn-008', subject: 'cn', chapterId: 'cn-ch3', gid: 'CN-3.2-02',
    title: '交换机、VLAN 与自学习', difficulty: 2, tags: ['交换机', 'VLAN'],
    summary: '交换机按 MAC 地址表转发，自学习源地址；VLAN 用逻辑划分隔离广播域。',
    points: [
      '收到未知目的帧时泛洪，学习源 MAC 与端口。',
      'VLAN 间通信需三层设备（路由器或三层交换机）。',
      '802.1Q 标签 4 字节，VLAN ID 12 位（0–4095）。'
    ],
    pitfalls: ['认为交换机可以隔离广播域（需要 VLAN 或路由）。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch3', page: 105, confidence: 'approx' }],
    related: ['k-cn-007'], estMin: 14
  },
  {
    id: 'k-cn-009', subject: 'cn', chapterId: 'cn-ch4', gid: 'CN-4.1-01',
    title: 'IP 地址与子网划分', difficulty: 3, tags: ['IP', '子网掩码'],
    summary: 'IPv4 32 位，A/B/C 类默认掩码；子网划分借主机位作子网号，主机数 2^h-2。',
    points: [
      '网络号 + 子网号 + 主机号，广播地址主机位全 1。',
      '子网数 = 2^借位数，主机数 = 2^剩余主机位 − 2。',
      '私有地址 10/8、172.16/12、192.168/16 不参与公网路由。'
    ],
    pitfalls: ['计算可用主机数时忘记减 2（网络地址与广播地址）。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch4', page: 118, confidence: 'approx' }],
    related: ['k-cn-010', 'k-cn-011'], estMin: 18
  },
  {
    id: 'k-cn-010', subject: 'cn', chapterId: 'cn-ch4', gid: 'CN-4.1-02',
    title: 'CIDR 与路由聚合', difficulty: 3, tags: ['CIDR', '最长前缀'],
    summary: '用前缀长度表示网络，支持变长子网与路由聚合；转发按最长前缀匹配。',
    points: [
      '`a.b.c.d/n` 表示前 n 位为网络前缀。',
      '路由聚合把多个连续子网合并为更短前缀。',
      '最长前缀匹配优先，默认路由 0.0.0.0/0 最后匹配。'
    ],
    pitfalls: ['聚合时未检查地址块是否连续且对齐。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch4', page: 132, confidence: 'approx' }],
    related: ['k-cn-009', 'k-cn-013'], estMin: 16
  },
  {
    id: 'k-cn-011', subject: 'cn', chapterId: 'cn-ch4', gid: 'CN-4.2-01',
    title: 'ARP 与 ICMP', difficulty: 2, tags: ['ARP', 'ICMP'],
    summary: 'ARP 由 IP 求 MAC（广播请求、单播应答）；ICMP 报告差错与探测。',
    points: [
      'ARP 缓存有超时，跨网段解析的是下一跳路由器地址。',
      'ICMP 差错报文包括目的不可达、超时、重定向；不报告 ICMP 错误。',
      'ping 用 Echo 请求/应答，traceroute 用递增 TTL。'
    ],
    pitfalls: ['认为 ARP 请求可以跨网段广播。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch4', page: 140, confidence: 'approx' }],
    related: ['k-cn-009', 'k-cn-012'], estMin: 12
  },
  {
    id: 'k-cn-012', subject: 'cn', chapterId: 'cn-ch4', gid: 'CN-4.2-02',
    title: 'IP 分组格式与分片', difficulty: 3, tags: ['IP 分片', 'MTU'],
    summary: 'IP 首部 20 字节起，含标识、标志、片偏移；分片按 8 字节对齐。',
    points: [
      '片偏移以 8 字节为单位，故每片数据长度（除末片）是 8 的倍数。',
      'MF=1 表示还有分片，DF=1 禁止分片。',
      '总长度字段 16 位，最大 65535 字节。'
    ],
    pitfalls: ['片偏移按字节而非 8 字节计算。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch4', page: 148, confidence: 'approx' }],
    related: ['k-cn-011'], estMin: 16
  },
  {
    id: 'k-cn-013', subject: 'cn', chapterId: 'cn-ch4', gid: 'CN-4.3-01',
    title: '路由协议：RIP、OSPF、BGP', difficulty: 3, tags: ['路由', 'RIP'],
    summary: 'RIP 距离向量、OSPF 链路状态、BGP 路径向量；分别用于内部与外部路由。',
    points: [
      'RIP 以跳数为度量，最大 15 跳，16 表示不可达，周期 30 s 通告。',
      'OSPF 用 Dijkstra 算最短路径，支持区域划分与 CIDR。',
      'BGP 在 AS 间传递可达性，用路径属性避免环路。'
    ],
    pitfalls: ['把 OSPF 也当作距离向量协议。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch4', page: 158, confidence: 'approx' }],
    related: ['k-cn-010', 'k-cn-014'], estMin: 18
  },
  {
    id: 'k-cn-014', subject: 'cn', chapterId: 'cn-ch4', gid: 'CN-4.3-02',
    title: 'IPv6 与过渡技术', difficulty: 2, tags: ['IPv6', '双栈'],
    summary: '128 位地址、简化首部、内置安全；过渡用双栈、隧道、翻译。',
    points: [
      'IPv6 首部固定 40 字节，取消首部校验和与分片（由源端处理）。',
      '地址分全球单播、链路本地、组播等类型。',
      '双栈同时运行 v4/v6，隧道把 v6 包封装进 v4。'
    ],
    pitfalls: ['认为 IPv6 完全没有分片，实际是路由器不分片、源端可分片。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch4', page: 172, confidence: 'approx' }],
    related: ['k-cn-013'], estMin: 12
  },
  {
    id: 'k-cn-015', subject: 'cn', chapterId: 'cn-ch5', gid: 'CN-5.1-01',
    title: 'UDP 与 TCP 的差异', difficulty: 1, tags: ['UDP', 'TCP'],
    summary: 'UDP 无连接、不可靠、开销小；TCP 面向连接、可靠、有流量与拥塞控制。',
    points: [
      'UDP 首部 8 字节，TCP 首部 20 字节起。',
      'UDP 保留报文边界，TCP 是字节流。',
      'TCP 用端口复用，UDP 也支持端口但无连接状态。'
    ],
    pitfalls: ['认为 UDP 完全不检测错误，UDP 校验和可选但存在。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch5', page: 182, confidence: 'approx' }],
    related: ['k-cn-016', 'k-cn-017'], estMin: 10
  },
  {
    id: 'k-cn-016', subject: 'cn', chapterId: 'cn-ch5', gid: 'CN-5.1-02',
    title: 'TCP 三次握手与四次挥手', difficulty: 3, tags: ['握手', '挥手'],
    summary: '三次握手同步序号并确认双向可达；四次挥手因半关闭需分别确认。',
    points: [
      'SYN=1, seq=x → SYN+ACK, seq=y, ack=x+1 → ACK, seq=x+1, ack=y+1。',
      '第三次握手可携带数据，前两次不可。',
      '挥手时主动关闭方进入 TIME_WAIT，等待 2MSL 确保末次 ACK 到达。'
    ],
    pitfalls: ['把三次握手说成「防止重复连接」的全部原因，核心是同步双方序号。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch5', page: 190, confidence: 'approx' }],
    related: ['k-cn-015', 'k-cn-017'], estMin: 18
  },
  {
    id: 'k-cn-017', subject: 'cn', chapterId: 'cn-ch5', gid: 'CN-5.2-01',
    title: 'TCP 可靠传输与滑动窗口', difficulty: 3, tags: ['滑动窗口', '重传'],
    summary: '累计确认 + 超时重传 + 快速重传；窗口以字节为单位，由接收方通告。',
    points: [
      '发送窗口 = min(拥塞窗口, 接收窗口)。',
      '收到 3 个重复 ACK 触发快速重传，不必等超时。',
      '选择确认 SACK 可只重传丢失段。'
    ],
    pitfalls: ['把窗口单位当作报文段个数，TCP 窗口按字节计。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch5', page: 205, confidence: 'approx' }],
    related: ['k-cn-016', 'k-cn-018'], estMin: 18
  },
  {
    id: 'k-cn-018', subject: 'cn', chapterId: 'cn-ch5', gid: 'CN-5.2-02',
    title: 'TCP 拥塞控制四阶段', difficulty: 3, tags: ['拥塞控制', '慢开始'],
    summary: '慢开始指数增长、拥塞避免线性增长、快重传与快恢复；以 ssthresh 为界。',
    points: [
      '慢开始每 RTT 翻倍，达到 ssthresh 转拥塞避免（每 RTT +1）。',
      '超时：ssthresh = cwnd/2，cwnd = 1，重新慢开始。',
      '快重传后快恢复：ssthresh = cwnd/2，cwnd = ssthresh，直接进入拥塞避免。'
    ],
    pitfalls: ['把「慢开始」理解为 cwnd 增长慢，实际是指数增长。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch5', page: 215, confidence: 'approx' }],
    related: ['k-cn-017', 'k-cn-002'], estMin: 20
  },
  {
    id: 'k-cn-019', subject: 'cn', chapterId: 'cn-ch6', gid: 'CN-6.1-01',
    title: 'DNS 域名解析', difficulty: 2, tags: ['DNS', '递归查询'],
    summary: '域名到 IP 的分布式数据库；查询分递归与迭代，缓存减少查询次数。',
    points: [
      '根 → 顶级域 → 权威域名服务器，迭代查询由本地服务器逐级问。',
      'A 记录映射 IPv4，AAAA 映射 IPv6，CNAME 别名，MX 邮件。',
      'DNS 常用 UDP 53，响应过大时用 TCP。'
    ],
    pitfalls: ['认为 DNS 查询一定是递归的，客户端到本地服务器通常递归，服务器之间迭代。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch6', page: 237, confidence: 'approx' }],
    related: ['k-cn-020'], estMin: 14
  },
  {
    id: 'k-cn-020', subject: 'cn', chapterId: 'cn-ch6', gid: 'CN-6.1-02',
    title: 'HTTP 与持久连接', difficulty: 2, tags: ['HTTP', 'Cookie'],
    summary: 'HTTP 是无状态请求-响应协议；持久连接复用 TCP，Cookie 维持状态。',
    points: [
      'HTTP/1.0 默认短连接，1.1 默认持久连接与管道化。',
      '方法 GET/POST/PUT/DELETE；状态码 2xx/3xx/4xx/5xx。',
      'Cookie 由服务器 Set-Cookie 下发，客户端后续请求携带。'
    ],
    pitfalls: ['认为 HTTP 本身保存用户登录状态。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch6', page: 245, confidence: 'approx' }],
    related: ['k-cn-019', 'k-cn-021'], estMin: 12
  },
  {
    id: 'k-cn-021', subject: 'cn', chapterId: 'cn-ch6', gid: 'CN-6.2-01',
    title: '电子邮件系统与 FTP', difficulty: 2, tags: ['SMTP', 'FTP'],
    summary: 'SMTP 推送邮件、POP3/IMAP 拉取；FTP 用两条连接分离控制与数据。',
    points: [
      'SMTP 用 TCP 25，只传 ASCII，附件用 MIME 编码。',
      'POP3 下载后本地管理，IMAP 在服务器上管理文件夹。',
      'FTP 控制连接 21 持久，数据连接 20（主动）或临时端口（被动）。'
    ],
    pitfalls: ['认为 FTP 用一条连接完成控制与数据传输。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch6', page: 260, confidence: 'approx' }],
    related: ['k-cn-020'], estMin: 12
  },
  {
    id: 'k-cn-022', subject: 'cn', chapterId: 'cn-ch7', gid: 'CN-7.1-01',
    title: '网络安全：加密、认证与 HTTPS', difficulty: 2, tags: ['加密', 'HTTPS'],
    summary: '对称加密快、非对称加密便于密钥分发；数字签名保证不可否认，HTTPS 结合两者。',
    points: [
      '对称：DES/AES；非对称：RSA/ECC；哈希：MD5/SHA。',
      '数字签名用私钥签名、公钥验证，依赖证书链信任。',
      'HTTPS = HTTP over TLS，握手协商密钥后对称加密传输。'
    ],
    pitfalls: ['用公钥加密实现「签名」，方向相反。'],
    bookRefs: [{ bookId: 'book-cn-xie', chapterId: 'cn-ch7', page: 278, confidence: 'approx' }],
    related: ['k-cn-020'], estMin: 14
  }
]
