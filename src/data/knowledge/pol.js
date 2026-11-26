export const knowledgePol = [
  {
    id: 'k-pol-001', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.1-01',
    title: '唯物论：物质与意识', difficulty: 1, tags: ['唯物论', '物质', '意识'],
    summary: '物质唯一特性是客观实在性，意识是物质世界长期发展的产物。',
    points: [
      '物质不依赖于意识而存在，能被意识所反映。',
      '意识是人脑的机能，内容来源于客观世界。',
      '意识对物质有能动反作用，但受客观规律制约。'
    ],
    pitfalls: ['把意识的能动作用夸大为可以创造或消灭规律。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 6, confidence: 'approx' }],
    related: ['k-pol-002', 'k-pol-004'], estMin: 12
  },
  {
    id: 'k-pol-002', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.1-02',
    title: '辩证法：联系与发展', difficulty: 1, tags: ['辩证法', '联系', '发展'],
    summary: '世界是普遍联系与永恒发展的，联系具有客观性、普遍性与多样性。',
    points: [
      '联系是事物内部与事物之间的相互影响、相互制约。',
      '发展的实质是新事物产生与旧事物灭亡。',
      '要用整体与部分、系统与要素的关系看问题。'
    ],
    pitfalls: ['把联系主观化，任意建立不存在的因果链条。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 12, confidence: 'approx' }],
    related: ['k-pol-003', 'k-pol-001'], estMin: 12
  },
  {
    id: 'k-pol-003', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.1-03',
    title: '三大规律：对立统一、量变质变、否定之否定', difficulty: 2, tags: ['三大规律', '矛盾'],
    summary: '对立统一是根本规律，量变质变揭示发展形式，否定之否定揭示方向。',
    points: [
      '矛盾双方既对立又统一，推动事物发展。',
      '量变是质变的必要准备，质变是量变的必然结果。',
      '否定之否定是螺旋式上升、波浪式前进。'
    ],
    pitfalls: ['把矛盾双方的对立绝对化，忽略统一与转化。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 18, confidence: 'approx' }],
    related: ['k-pol-002', 'k-pol-004'], estMin: 15
  },
  {
    id: 'k-pol-004', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.1-04',
    title: '认识论：实践与真理', difficulty: 2, tags: ['认识论', '实践', '真理'],
    summary: '实践是认识的基础，真理是绝对性与相对性的统一。',
    points: [
      '实践决定认识：来源、动力、检验标准与目的。',
      '真理具有客观性、绝对性与相对性。',
      '认识运动是实践—认识—再实践—再认识的循环上升。'
    ],
    pitfalls: ['把真理的相对性等同于真理包含错误。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 26, confidence: 'approx' }],
    related: ['k-pol-003', 'k-pol-005'], estMin: 15
  },
  {
    id: 'k-pol-005', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.1-05',
    title: '唯物史观：社会存在与社会意识', difficulty: 2, tags: ['唯物史观', '生产力', '群众'],
    summary: '社会存在决定社会意识，生产力与生产关系、经济基础与上层建筑矛盾运动。',
    points: [
      '生产力决定生产关系，生产关系反作用于生产力。',
      '经济基础决定上层建筑，上层建筑反作用于经济基础。',
      '人民群众是历史的创造者。'
    ],
    pitfalls: ['把社会意识对社会的反作用夸大为决定作用。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 34, confidence: 'approx' }],
    related: ['k-pol-004', 'k-pol-007'], estMin: 15
  },
  {
    id: 'k-pol-006', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.2-01',
    title: '劳动价值论', difficulty: 2, tags: ['商品', '价值', '劳动'],
    summary: '商品二因素与劳动二重性，价值量由社会必要劳动时间决定。',
    points: [
      '使用价值是自然属性，价值是社会属性。',
      '具体劳动创造使用价值，抽象劳动形成价值。',
      '劳动生产率提高使单位商品价值量下降。'
    ],
    pitfalls: ['把个别劳动时间当作价值量的决定因素。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 48, confidence: 'approx' }],
    related: ['k-pol-007', 'k-pol-001'], estMin: 15
  },
  {
    id: 'k-pol-007', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.2-02',
    title: '剩余价值与资本积累', difficulty: 2, tags: ['剩余价值', '资本', '积累'],
    summary: '剩余价值来自雇佣工人的剩余劳动，资本积累加剧矛盾。',
    points: [
      '不变资本转移价值，可变资本创造剩余价值。',
      '绝对剩余价值靠延长工时，相对剩余价值靠提高效率。',
      '资本积累是有机构成提高与相对过剩人口的基础。'
    ],
    pitfalls: ['认为剩余价值由全部资本共同创造。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 58, confidence: 'approx' }],
    related: ['k-pol-006', 'k-pol-008'], estMin: 15
  },
  {
    id: 'k-pol-008', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.2-03',
    title: '垄断资本主义', difficulty: 2, tags: ['垄断', '金融资本', '经济全球化'],
    summary: '生产集中走向垄断，金融资本与资本输出形成帝国主义特征。',
    points: [
      '垄断没有消除竞争，反而使竞争更复杂。',
      '垄断利润主要来自垄断价格与对市场的控制。',
      '经济全球化是生产社会化在国际范围的延伸。'
    ],
    pitfalls: ['认为垄断阶段竞争消失。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 70, confidence: 'approx' }],
    related: ['k-pol-007', 'k-pol-009'], estMin: 12
  },
  {
    id: 'k-pol-009', subject: 'pol', chapterId: 'po-ch1', gid: 'POL-1.2-04',
    title: '科学社会主义', difficulty: 1, tags: ['社会主义', '空想', '发展'],
    summary: '社会主义从空想到科学，唯物史观与剩余价值学说奠定理论基础。',
    points: [
      '空想社会主义是科学社会主义的直接思想来源。',
      '唯物史观与剩余价值学说使社会主义成为科学。',
      '社会主义发展是长期的历史过程。'
    ],
    pitfalls: ['把空想社会主义与科学社会主义混为一谈。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch1', page: 78, confidence: 'approx' }],
    related: ['k-pol-005', 'k-pol-010'], estMin: 12
  },
  {
    id: 'k-pol-010', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.1-01',
    title: '新民主主义革命', difficulty: 2, tags: ['新民主主义', '革命', '领导权'],
    summary: '无产阶级领导的、人民大众的、反帝反封建反官僚资本主义的革命。',
    points: [
      '革命对象是帝国主义、封建主义、官僚资本主义。',
      '领导权掌握在无产阶级手中，这是新旧民主主义的分界。',
      '三大法宝：统一战线、武装斗争、党的建设。'
    ],
    pitfalls: ['把革命性质误判为社会主义革命。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 90, confidence: 'approx' }],
    related: ['k-pol-011', 'k-pol-017'], estMin: 15
  },
  {
    id: 'k-pol-011', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.1-02',
    title: '社会主义改造', difficulty: 2, tags: ['三大改造', '过渡时期'],
    summary: '对农业、手工业和资本主义工商业的社会主义改造。',
    points: [
      '农业与手工业走合作化道路。',
      '资本主义工商业采用和平赎买政策。',
      '改造完成标志社会主义基本制度确立。'
    ],
    pitfalls: ['把赎买政策与无偿没收混淆。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 102, confidence: 'approx' }],
    related: ['k-pol-010', 'k-pol-012'], estMin: 12
  },
  {
    id: 'k-pol-012', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.1-03',
    title: '改革开放与十一届三中全会', difficulty: 1, tags: ['改革开放', '三中全会'],
    summary: '十一届三中全会实现工作重心转移，开启改革开放历史新时期。',
    points: [
      '重新确立解放思想、实事求是的思想路线。',
      '把工作重心转移到经济建设上来。',
      '改革开放是决定当代中国命运的关键一招。'
    ],
    pitfalls: ['把改革开放起点误记为其它会议。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 112, confidence: 'approx' }],
    related: ['k-pol-011', 'k-pol-013'], estMin: 12
  },
  {
    id: 'k-pol-013', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.2-01',
    title: '新时代社会主要矛盾', difficulty: 1, tags: ['新时代', '主要矛盾'],
    summary: '人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。',
    points: [
      '矛盾转化没有改变社会主义初级阶段的判断。',
      '发展仍是解决一切问题的基础与关键。',
      '要贯彻以人民为中心的发展思想。'
    ],
    pitfalls: ['把主要矛盾转化等同于初级阶段结束。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 130, confidence: 'approx' }],
    related: ['k-pol-014', 'k-pol-015'], estMin: 10
  },
  {
    id: 'k-pol-014', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.2-02',
    title: '五位一体总体布局', difficulty: 2, tags: ['总体布局', '经济', '生态'],
    summary: '经济建设、政治建设、文化建设、社会建设、生态文明建设五位一体。',
    points: [
      '经济建设是中心，但不再是唯一。',
      '生态文明建设关系人民福祉与民族未来。',
      '五个方面相互联系、相互促进。'
    ],
    pitfalls: ['把五位一体与四个全面混淆。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 138, confidence: 'approx' }],
    related: ['k-pol-013', 'k-pol-015'], estMin: 12
  },
  {
    id: 'k-pol-015', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.2-03',
    title: '四个全面战略布局', difficulty: 2, tags: ['四个全面', '战略'],
    summary: '全面建设社会主义现代化国家、全面深化改革、全面依法治国、全面从严治党。',
    points: [
      '全面建设社会主义现代化国家是战略目标。',
      '改革、法治、党建是三大战略举措。',
      '四个全面是相互支撑的有机整体。'
    ],
    pitfalls: ['把战略目标与战略举措的位置颠倒。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 146, confidence: 'approx' }],
    related: ['k-pol-014', 'k-pol-013'], estMin: 12
  },
  {
    id: 'k-pol-016', subject: 'pol', chapterId: 'po-ch2', gid: 'POL-2.2-04',
    title: '人类命运共同体', difficulty: 1, tags: ['外交', '共同体'],
    summary: '倡导合作共赢，建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。',
    points: [
      '核心理念是合作共赢，而非零和博弈。',
      '坚持共商共建共享的全球治理观。',
      '推动构建新型国际关系。'
    ],
    pitfalls: ['把共同体理念理解为输出制度模式。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch2', page: 155, confidence: 'approx' }],
    related: ['k-pol-015', 'k-pol-020'], estMin: 10
  },
  {
    id: 'k-pol-017', subject: 'pol', chapterId: 'po-ch3', gid: 'POL-3.1-01',
    title: '近现代史时间线与历史选择', difficulty: 2, tags: ['史纲', '时间线'],
    summary: '1840 鸦片战争至新中国成立的重大节点与历史必然性。',
    points: [
      '1840 鸦片战争是中国近代史起点。',
      '1919 五四运动是新民主主义革命的开端。',
      '1949 新中国成立标志新民主主义革命基本胜利。'
    ],
    pitfalls: ['把 1911 辛亥革命误作新民主主义革命起点。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch3', page: 168, confidence: 'approx' }],
    related: ['k-pol-010', 'k-pol-018'], estMin: 15
  },
  {
    id: 'k-pol-018', subject: 'pol', chapterId: 'po-ch4', gid: 'POL-4.1-01',
    title: '思想道德建设', difficulty: 1, tags: ['思修', '道德', '核心价值观'],
    summary: '社会主义道德建设以为人民服务为核心、以集体主义为原则。',
    points: [
      '为人民服务是道德建设的核心。',
      '集体主义是道德建设的原则。',
      '社会主义核心价值观分国家、社会、个人三个层面。'
    ],
    pitfalls: ['把集体主义理解为否定个人正当利益。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch4', page: 208, confidence: 'approx' }],
    related: ['k-pol-019', 'k-pol-001'], estMin: 12
  },
  {
    id: 'k-pol-019', subject: 'pol', chapterId: 'po-ch4', gid: 'POL-4.1-02',
    title: '法治与宪法', difficulty: 2, tags: ['法治', '宪法'],
    summary: '宪法是国家根本法，依法治国首先是依宪治国。',
    points: [
      '宪法具有最高法律效力，是根本活动准则。',
      '法律面前人人平等，任何组织个人不得超越宪法法律。',
      '坚持党的领导、人民当家作主、依法治国有机统一。'
    ],
    pitfalls: ['把依法治国与党的领导对立起来。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch4', page: 220, confidence: 'approx' }],
    related: ['k-pol-018', 'k-pol-020'], estMin: 15
  },
  {
    id: 'k-pol-020', subject: 'pol', chapterId: 'po-ch5', gid: 'POL-5.1-01',
    title: '时政命题与分析题结构', difficulty: 2, tags: ['时政', '分析题', '答题'],
    summary: '时政多与理论结合命题，分析题按「原理—材料—结论」组织答案。',
    points: [
      '先点明原理，再结合材料复述关键事实。',
      '多角度作答：是什么、为什么、怎么办。',
      '结尾回到方法论意义或现实要求。'
    ],
    pitfalls: ['只抄材料不写原理，或只背原理不结合材料。'],
    bookRefs: [{ bookId: 'book-pol-outline', chapterId: 'po-ch5', page: 248, confidence: 'approx' }],
    related: ['k-pol-016', 'k-pol-004'], estMin: 12
  }
]
