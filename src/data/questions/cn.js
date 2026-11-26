const K = 'k-cn-'

export const questionsCn = [
  {
    id: 'q-cn-001', subject: 'cn', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: 'TCP/IP 体系结构中，运输层对应 OSI 的（ ）。',
    options: [{ key: 'A', text: '网络层' }, { key: 'B', text: '运输层' }, { key: 'C', text: '会话层' }, { key: 'D', text: '数据链路层' }],
    answer: ['B'],
    explain: 'TCP/IP 的运输层与 OSI 运输层对应，提供端到端通信；会话层/表示层在 TCP/IP 中并入应用层。',
    source: 'original'
  },
  {
    id: 'q-cn-002', subject: 'cn', knowledgeId: K + '002', type: 'single', difficulty: 2,
    stem: '信号在 1000 km 光纤中传播，传播速度 2×10⁸ m/s，传播时延约为（ ）。',
    options: [{ key: 'A', text: '0.5 ms' }, { key: 'B', text: '2 ms' }, { key: 'C', text: '5 ms' }, { key: 'D', text: '50 ms' }],
    answer: ['C'],
    explain: 't = 1000×10³ / (2×10⁸) = 5×10⁻³ s = 5 ms。',
    source: 'original'
  },
  {
    id: 'q-cn-003', subject: 'cn', knowledgeId: K + '002', type: 'single', difficulty: 3,
    stem: '带宽 4 kHz、信噪比 1000（30 dB）的信道，按香农公式其极限数据率约为（ ）。',
    options: [{ key: 'A', text: '4 kbps' }, { key: 'B', text: '20 kbps' }, { key: 'C', text: '40 kbps' }, { key: 'D', text: '400 kbps' }],
    answer: ['C'],
    explain: 'C = 4k × log₂(1+1000) ≈ 4k × 9.97 ≈ 39.9 kbps，约 40 kbps。',
    source: 'original'
  },
  {
    id: 'q-cn-004', subject: 'cn', knowledgeId: K + '003', type: 'single', difficulty: 2,
    stem: '曼彻斯特编码的编码效率为（ ）。',
    options: [{ key: 'A', text: '25%' }, { key: 'B', text: '50%' }, { key: 'C', text: '75%' }, { key: 'D', text: '100%' }],
    answer: ['B'],
    explain: '每位中间都有跳变，波特率是数据率的两倍，编码效率 50%，但自带时钟同步。',
    source: 'original'
  },
  {
    id: 'q-cn-005', subject: 'cn', knowledgeId: K + '004', type: 'single', difficulty: 2,
    stem: 'CDMA 中区分不同用户的依据是（ ）。',
    options: [{ key: 'A', text: '不同频率' }, { key: 'B', text: '不同时隙' }, { key: 'C', text: '相互正交的码片序列' }, { key: 'D', text: '不同波长' }],
    answer: ['C'],
    explain: '各用户使用正交码片，接收端用相同码片做内积即可分离出目标信号。',
    source: 'original'
  },
  {
    id: 'q-cn-006', subject: 'cn', knowledgeId: K + '005', type: 'single', difficulty: 2,
    stem: 'HDLC 的比特填充规则是发送端在连续出现（ ）个 1 后插入一个 0。',
    options: [{ key: 'A', text: '3' }, { key: 'B', text: '4' }, { key: 'C', text: '5' }, { key: 'D', text: '6' }],
    answer: ['C'],
    explain: '连续 5 个 1 后插 0，避免与标志字段 01111110 混淆；接收端对应删除。',
    source: 'original'
  },
  {
    id: 'q-cn-007', subject: 'cn', knowledgeId: K + '005', type: 'single', difficulty: 2,
    stem: 'CRC 校验中，发送端计算校验位使用的方法是（ ）。',
    options: [{ key: 'A', text: '普通除法' }, { key: 'B', text: '模 2 除法' }, { key: 'C', text: '加法' }, { key: 'D', text: '哈希' }],
    answer: ['B'],
    explain: 'CRC 用生成多项式做模 2 除法（异或），余数作为 FCS 附加在数据后。',
    source: 'original'
  },
  {
    id: 'q-cn-008', subject: 'cn', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: '10 Mbps 以太网规定的最小帧长为（ ）。',
    options: [{ key: 'A', text: '64 字节' }, { key: 'B', text: '128 字节' }, { key: 'C', text: '512 字节' }, { key: 'D', text: '1518 字节' }],
    answer: ['A'],
    explain: '最小帧长 = 2×传播时延×速率 = 64 B，保证发送端在发送完前能检测到冲突。',
    source: 'original'
  },
  {
    id: 'q-cn-009', subject: 'cn', knowledgeId: K + '008', type: 'single', difficulty: 2,
    stem: '交换机收到目的 MAC 地址未知的帧时，会（ ）。',
    options: [{ key: 'A', text: '直接丢弃' }, { key: 'B', text: '向除接收端口外的所有端口泛洪' }, { key: 'C', text: '发给默认网关' }, { key: 'D', text: '缓存后永不转发' }],
    answer: ['B'],
    explain: '转发表中没有该目的地址时，交换机向其他端口泛洪，并在收到应答后学习新表项。',
    source: 'original'
  },
  {
    id: 'q-cn-010', subject: 'cn', knowledgeId: K + '008', type: 'single', difficulty: 1,
    stem: 'VLAN 的主要作用是（ ）。',
    options: [{ key: 'A', text: '扩大广播域' }, { key: 'B', text: '在逻辑上划分网络、隔离广播域' }, { key: 'C', text: '提高链路带宽' }, { key: 'D', text: '替代 IP 路由' }],
    answer: ['B'],
    explain: 'VLAN 在同一物理网络中划分多个逻辑广播域，VLAN 间通信需要三层设备。',
    source: 'original'
  },
  {
    id: 'q-cn-011', subject: 'cn', knowledgeId: K + '009', type: 'single', difficulty: 2,
    stem: '子网 192.168.1.0/26 可用的主机地址数量为（ ）。',
    options: [{ key: 'A', text: '30' }, { key: 'B', text: '62' }, { key: 'C', text: '64' }, { key: 'D', text: '126' }],
    answer: ['B'],
    explain: '主机位 32-26=6，可表示 64 个地址，去掉网络地址与广播地址，可用 62 个。',
    source: 'original'
  },
  {
    id: 'q-cn-012', subject: 'cn', knowledgeId: K + '009', type: 'single', difficulty: 2,
    stem: '/27 对应的子网掩码是（ ）。',
    options: [{ key: 'A', text: '255.255.255.128' }, { key: 'B', text: '255.255.255.192' }, { key: 'C', text: '255.255.255.224' }, { key: 'D', text: '255.255.255.240' }],
    answer: ['C'],
    explain: '/27 即前 27 位为 1：24 位全 1 加 3 位 1（1110 0000 = 224），故为 255.255.255.224。',
    source: 'original'
  },
  {
    id: 'q-cn-013', subject: 'cn', knowledgeId: K + '010', type: 'single', difficulty: 2,
    stem: '路由器转发分组时，若多条路由都能匹配，应选择（ ）。',
    options: [{ key: 'A', text: '前缀最短的路由' }, { key: 'B', text: '前缀最长的路由' }, { key: 'C', text: '最早加入的路由' }, { key: 'D', text: '随机选择' }],
    answer: ['B'],
    explain: '最长前缀匹配更具体，优先使用；默认路由前缀长度为 0，最后匹配。',
    source: 'original'
  },
  {
    id: 'q-cn-014', subject: 'cn', knowledgeId: K + '011', type: 'single', difficulty: 2,
    stem: '主机跨网段发送数据时，ARP 解析的目标地址是（ ）。',
    options: [{ key: 'A', text: '最终目的主机的 MAC' }, { key: 'B', text: '下一跳路由器的 MAC' }, { key: 'C', text: 'DNS 服务器的 MAC' }, { key: 'D', text: '广播地址' }],
    answer: ['B'],
    explain: '跨网段时链路层只负责跳到下一跳，故解析下一跳路由器的 MAC，而非远端主机。',
    source: 'original'
  },
  {
    id: 'q-cn-015', subject: 'cn', knowledgeId: K + '012', type: 'single', difficulty: 3,
    stem: 'IP 数据报总长 4020 字节（首部 20），MTU=1500，第二片的片偏移字段为（ ）。',
    options: [{ key: 'A', text: '185' }, { key: 'B', text: '370' }, { key: 'C', text: '1480' }, { key: 'D', text: '2960' }],
    answer: ['A'],
    explain: '每片数据最多 1480 B；第一片偏移 0，第二片偏移 = 1480/8 = 185。',
    source: 'original'
  },
  {
    id: 'q-cn-016', subject: 'cn', knowledgeId: K + '013', type: 'single', difficulty: 1,
    stem: 'RIP 协议中表示「不可达」的跳数值是（ ）。',
    options: [{ key: 'A', text: '0' }, { key: 'B', text: '15' }, { key: 'C', text: '16' }, { key: 'D', text: '255' }],
    answer: ['C'],
    explain: 'RIP 最大有效跳数为 15，16 视为不可达，从而限制网络直径。',
    source: 'original'
  },
  {
    id: 'q-cn-017', subject: 'cn', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: 'OSPF 属于（ ）路由协议。',
    options: [{ key: 'A', text: '距离向量' }, { key: 'B', text: '链路状态' }, { key: 'C', text: '路径向量' }, { key: 'D', text: '静态' }],
    answer: ['B'],
    explain: 'OSPF 通过洪泛链路状态、构建全网拓扑后运行 Dijkstra 计算最短路径。',
    source: 'original'
  },
  {
    id: 'q-cn-018', subject: 'cn', knowledgeId: K + '016', type: 'single', difficulty: 3,
    stem: 'TCP 三次握手：客户端发送 seq=x，服务器回复 seq=y、ack=x+1，客户端第三次发送的确认号为（ ）。',
    options: [{ key: 'A', text: 'x' }, { key: 'B', text: 'x+1' }, { key: 'C', text: 'y' }, { key: 'D', text: 'y+1' }],
    answer: ['D'],
    explain: '第三次握手确认服务器序号 y，故 ack=y+1（同时携带自身 seq=x+1）。',
    source: 'original'
  },
  {
    id: 'q-cn-019', subject: 'cn', knowledgeId: K + '016', type: 'single', difficulty: 2,
    stem: 'TCP 主动关闭方进入 TIME_WAIT 状态需等待（ ）。',
    options: [{ key: 'A', text: '1 个 MSS' }, { key: 'B', text: '2 倍报文最大生存时间（2MSL）' }, { key: 'C', text: '一个 RTT' }, { key: 'D', text: '立即关闭' }],
    answer: ['B'],
    explain: '等待 2MSL 确保最后一个 ACK 能到达，并让旧连接的重复报文在网络中消亡。',
    source: 'original'
  },
  {
    id: 'q-cn-020', subject: 'cn', knowledgeId: K + '017', type: 'single', difficulty: 2,
    stem: 'TCP 发送方的实际发送窗口大小取（ ）。',
    options: [{ key: 'A', text: '拥塞窗口与接收窗口的较大者' }, { key: 'B', text: '拥塞窗口与接收窗口的较小者' }, { key: 'C', text: '仅拥塞窗口' }, { key: 'D', text: '仅接收窗口' }],
    answer: ['B'],
    explain: '发送窗口 = min(cwnd, rwnd)，同时受网络拥塞与接收方缓冲限制。',
    source: 'original'
  },
  {
    id: 'q-cn-021', subject: 'cn', knowledgeId: K + '018', type: 'single', difficulty: 2,
    stem: 'TCP 慢开始阶段，拥塞窗口每个 RTT 的增长方式是（ ）。',
    options: [{ key: 'A', text: '加 1' }, { key: 'B', text: '翻倍' }, { key: 'C', text: '保持不变' }, { key: 'D', text: '减半' }],
    answer: ['B'],
    explain: '慢开始每收到一个 ACK 就把 cwnd 加 1，一个 RTT 内近似翻倍，呈指数增长。',
    source: 'original'
  },
  {
    id: 'q-cn-022', subject: 'cn', knowledgeId: K + '018', type: 'single', difficulty: 2,
    stem: 'TCP 收到连续 3 个重复 ACK 时，通常执行（ ）。',
    options: [{ key: 'A', text: '超时重传' }, { key: 'B', text: '快速重传并进入快恢复' }, { key: 'C', text: '关闭连接' }, { key: 'D', text: '重置窗口为 0' }],
    answer: ['B'],
    explain: '3 个重复 ACK 表明某段丢失，立即重传该段并调整 ssthresh、cwnd 进入快恢复。',
    source: 'original'
  },
  {
    id: 'q-cn-023', subject: 'cn', knowledgeId: K + '015', type: 'single', difficulty: 1,
    stem: 'UDP 首部的固定长度是（ ）。',
    options: [{ key: 'A', text: '4 字节' }, { key: 'B', text: '8 字节' }, { key: 'C', text: '20 字节' }, { key: 'D', text: '40 字节' }],
    answer: ['B'],
    explain: 'UDP 首部 8 B：源端口、目的端口、长度、校验和各 2 B（校验和可选）。',
    source: 'original'
  },
  {
    id: 'q-cn-024', subject: 'cn', knowledgeId: K + '019', type: 'single', difficulty: 1,
    stem: 'DNS 查询默认使用的运输层协议与端口是（ ）。',
    options: [{ key: 'A', text: 'TCP 53' }, { key: 'B', text: 'UDP 53' }, { key: 'C', text: 'UDP 80' }, { key: 'D', text: 'TCP 25' }],
    answer: ['B'],
    explain: 'DNS 默认用 UDP 53，报文过长或区域传送时改用 TCP 53。',
    source: 'original'
  },
  {
    id: 'q-cn-025', subject: 'cn', knowledgeId: K + '020', type: 'single', difficulty: 1,
    stem: 'HTTP 状态码 404 表示（ ）。',
    options: [{ key: 'A', text: '请求成功' }, { key: 'B', text: '资源未找到（客户端错误）' }, { key: 'C', text: '服务器内部错误' }, { key: 'D', text: '永久重定向' }],
    answer: ['B'],
    explain: '4xx 为客户端错误，404 表示请求的资源不存在；5xx 才是服务器错误。',
    source: 'original'
  },
  {
    id: 'q-cn-026', subject: 'cn', knowledgeId: K + '022', type: 'single', difficulty: 2,
    stem: 'HTTPS 在 TLS 握手完成后，实际传输数据使用的加密方式是（ ）。',
    options: [{ key: 'A', text: '仅非对称加密' }, { key: 'B', text: '对称加密' }, { key: 'C', text: '仅哈希' }, { key: 'D', text: '不加密' }],
    answer: ['B'],
    explain: '握手阶段用非对称加密协商出会话密钥，之后用对称加密传输数据，兼顾安全与性能。',
    source: 'original'
  }
]
