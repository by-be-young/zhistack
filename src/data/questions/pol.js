const K = 'k-pol-'

export const questionsPol = [
  {
    id: 'q-pol-001', subject: 'pol', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: '物质的唯一特性是（ ）。',
    options: [{ key: 'A', text: '运动性' }, { key: 'B', text: '客观实在性' }, { key: 'C', text: '可知性' }, { key: 'D', text: '广延性' }],
    answer: ['B'], explain: '物质是不依赖于人的意识并能为意识所反映的客观实在，客观实在性是其唯一特性。',
    source: 'original'
  },
  {
    id: 'q-pol-002', subject: 'pol', knowledgeId: K + '003', type: 'multiple', difficulty: 2,
    stem: '唯物辩证法的三大规律包括（ ）。',
    options: [
      { key: 'A', text: '对立统一规律' },
      { key: 'B', text: '量变质变规律' },
      { key: 'C', text: '否定之否定规律' },
      { key: 'D', text: '因果必然规律' }
    ],
    answer: ['A', 'B', 'C'], explain: '三大规律为对立统一、量变质变、否定之否定；因果联系属于联系的形式，不是三大规律之一。',
    source: 'original'
  },
  {
    id: 'q-pol-003', subject: 'pol', knowledgeId: K + '004', type: 'judge', difficulty: 1,
    stem: '实践是认识的基础，是检验认识真理性的唯一标准。',
    answer: ['T'], explain: '实践决定认识的来源、动力、目的与检验标准，这是认识论的基本观点。',
    source: 'original'
  },
  {
    id: 'q-pol-004', subject: 'pol', knowledgeId: K + '005', type: 'single', difficulty: 1,
    stem: '「社会存在决定社会意识」这一命题属于（ ）。',
    options: [{ key: 'A', text: '唯物史观' }, { key: 'B', text: '唯心史观' }, { key: 'C', text: '机械唯物主义' }, { key: 'D', text: '客观唯心主义' }],
    answer: ['A'], explain: '唯物史观以社会存在决定社会意识为核心，并揭示生产力与生产关系、经济基础与上层建筑的矛盾运动。',
    source: 'original'
  },
  {
    id: 'q-pol-005', subject: 'pol', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: '剩余价值的来源是（ ）。',
    options: [
      { key: 'A', text: '全部资本的共同投入' },
      { key: 'B', text: '雇佣工人的剩余劳动' },
      { key: 'C', text: '机器设备的自然损耗' },
      { key: 'D', text: '商品流通中的加价' }
    ],
    answer: ['B'], explain: '不变资本只转移价值，可变资本购买劳动力，剩余价值由工人在剩余劳动时间内创造。',
    source: 'original'
  },
  {
    id: 'q-pol-006', subject: 'pol', knowledgeId: K + '008', type: 'single', difficulty: 2,
    stem: '垄断利润的主要来源是（ ）。',
    options: [
      { key: 'A', text: '自由竞争带来的平均利润' },
      { key: 'B', text: '垄断价格与对市场的控制' },
      { key: 'C', text: '政府财政补贴' },
      { key: 'D', text: '工人工资的下降' }
    ],
    answer: ['B'], explain: '垄断组织通过制定垄断价格、控制市场与原料来源获取高额利润，其基础仍是工人创造的剩余价值。',
    source: 'original'
  },
  {
    id: 'q-pol-007', subject: 'pol', knowledgeId: K + '009', type: 'judge', difficulty: 1,
    stem: '空想社会主义是科学社会主义的直接思想来源。',
    answer: ['T'], explain: '圣西门、傅立叶、欧文等人的空想社会主义为科学社会主义提供了思想素材，但科学社会主义的理论基石是唯物史观与剩余价值学说。',
    source: 'original'
  },
  {
    id: 'q-pol-008', subject: 'pol', knowledgeId: K + '010', type: 'single', difficulty: 1,
    stem: '新民主主义革命的领导阶级是（ ）。',
    options: [{ key: 'A', text: '资产阶级' }, { key: 'B', text: '无产阶级' }, { key: 'C', text: '农民阶级' }, { key: 'D', text: '城市小资产阶级' }],
    answer: ['B'], explain: '领导权掌握在无产阶级手中，这是新民主主义革命区别于旧民主主义革命的根本标志。',
    source: 'original'
  },
  {
    id: 'q-pol-009', subject: 'pol', knowledgeId: K + '011', type: 'multiple', difficulty: 2,
    stem: '社会主义改造的主要对象包括（ ）。',
    options: [
      { key: 'A', text: '农业' },
      { key: 'B', text: '手工业' },
      { key: 'C', text: '资本主义工商业' },
      { key: 'D', text: '官僚资本主义' }
    ],
    answer: ['A', 'B', 'C'], explain: '三大改造指对农业、手工业和资本主义工商业的改造；官僚资本在此前已被没收，不属于三大改造对象。',
    source: 'original'
  },
  {
    id: 'q-pol-010', subject: 'pol', knowledgeId: K + '012', type: 'single', difficulty: 1,
    stem: '改革开放的历史起点是（ ）。',
    options: [
      { key: 'A', text: '党的七大' },
      { key: 'B', text: '党的十一届三中全会' },
      { key: 'C', text: '党的十四大' },
      { key: 'D', text: '党的十八届三中全会' }
    ],
    answer: ['B'], explain: '十一届三中全会重新确立实事求是的思想路线，把工作重心转移到经济建设上来，开启改革开放新时期。',
    source: 'original'
  },
  {
    id: 'q-pol-011', subject: 'pol', knowledgeId: K + '013', type: 'single', difficulty: 1,
    stem: '新时代我国社会主要矛盾是（ ）。',
    options: [
      { key: 'A', text: '生产力与生产关系的矛盾' },
      { key: 'B', text: '人民日益增长的物质文化需要同落后的社会生产之间的矛盾' },
      { key: 'C', text: '人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾' },
      { key: 'D', text: '城乡矛盾与区域矛盾' }
    ],
    answer: ['C'], explain: '新时代主要矛盾已转化为人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾，但初级阶段判断没有变。',
    source: 'original'
  },
  {
    id: 'q-pol-012', subject: 'pol', knowledgeId: K + '014', type: 'multiple', difficulty: 2,
    stem: '「五位一体」总体布局包括（ ）。',
    options: [
      { key: 'A', text: '经济建设' },
      { key: 'B', text: '政治建设' },
      { key: 'C', text: '文化建设' },
      { key: 'D', text: '社会建设与生态文明建设' },
      { key: 'E', text: '党的建设' }
    ],
    answer: ['A', 'B', 'C', 'D'], explain: '五位一体为经济、政治、文化、社会、生态文明建设；党的建设属于「四个全面」中的全面从严治党。',
    source: 'original'
  },
  {
    id: 'q-pol-013', subject: 'pol', knowledgeId: K + '015', type: 'judge', difficulty: 2,
    stem: '「四个全面」战略布局包括全面建设社会主义现代化国家、全面深化改革、全面依法治国、全面从严治党。',
    answer: ['T'], explain: '全面建设社会主义现代化国家是战略目标，改革、法治、党建是三大战略举措，四者相互支撑。',
    source: 'original'
  },
  {
    id: 'q-pol-014', subject: 'pol', knowledgeId: K + '016', type: 'single', difficulty: 1,
    stem: '人类命运共同体理念的核心理念是（ ）。',
    options: [{ key: 'A', text: '零和博弈' }, { key: 'B', text: '合作共赢' }, { key: 'C', text: '文明冲突' }, { key: 'D', text: '单边主义' }],
    answer: ['B'], explain: '共同体理念主张合作共赢、共商共建共享，反对零和博弈与单边主义。',
    source: 'original'
  },
  {
    id: 'q-pol-015', subject: 'pol', knowledgeId: K + '017', type: 'single', difficulty: 1,
    stem: '中国近代史的开端是（ ）。',
    options: [{ key: 'A', text: '1840 年鸦片战争' }, { key: 'B', text: '1911 年辛亥革命' }, { key: 'C', text: '1919 年五四运动' }, { key: 'D', text: '1949 年新中国成立' }],
    answer: ['A'], explain: '鸦片战争使中国开始沦为半殖民地半封建社会，成为中国近代史起点；五四运动则是新民主主义革命的开端。',
    source: 'original'
  },
  {
    id: 'q-pol-016', subject: 'pol', knowledgeId: K + '018', type: 'single', difficulty: 1,
    stem: '社会主义道德建设的核心是（ ）。',
    options: [{ key: 'A', text: '集体主义' }, { key: 'B', text: '为人民服务' }, { key: 'C', text: '诚实守信' }, { key: 'D', text: '爱国主义' }],
    answer: ['B'], explain: '为人民服务是社会主义道德建设的核心，集体主义是原则，诚实守信与爱国主义是具体规范。',
    source: 'original'
  },
  {
    id: 'q-pol-017', subject: 'pol', knowledgeId: K + '019', type: 'multiple', difficulty: 2,
    stem: '我国宪法的基本原则包括（ ）。',
    options: [
      { key: 'A', text: '坚持党的领导' },
      { key: 'B', text: '人民主权原则' },
      { key: 'C', text: '法治原则' },
      { key: 'D', text: '三权分立原则' }
    ],
    answer: ['A', 'B', 'C'], explain: '我国宪法坚持党的领导、人民主权、法治与民主集中制等原则；三权分立是部分国家的体制，不符合我国宪法原则。',
    source: 'original'
  },
  {
    id: 'q-pol-018', subject: 'pol', knowledgeId: K + '019', type: 'judge', difficulty: 1,
    stem: '中华人民共和国公民在法律面前一律平等。',
    answer: ['T'], explain: '宪法确立法律面前人人平等原则，任何组织或个人都不得有超越宪法和法律的特权。',
    source: 'original'
  },
  {
    id: 'q-pol-019', subject: 'pol', knowledgeId: K + '020', type: 'single', difficulty: 1,
    stem: '政治分析题较稳妥的答题结构是（ ）。',
    options: [
      { key: 'A', text: '只抄材料' },
      { key: 'B', text: '只背原理' },
      { key: 'C', text: '原理 + 材料 + 结论' },
      { key: 'D', text: '先结论后随意展开' }
    ],
    answer: ['C'], explain: '先点明原理，再结合材料关键事实分析，最后落到方法论意义或现实要求，层次清晰。',
    source: 'original'
  },
  {
    id: 'q-pol-020', subject: 'pol', knowledgeId: K + '020', type: 'single', difficulty: 2,
    stem: '马原分析题作答的第一步通常是（ ）。',
    options: [
      { key: 'A', text: '罗列所有哲学原理' },
      { key: 'B', text: '点明材料对应的核心原理' },
      { key: 'C', text: '先写个人感受' },
      { key: 'D', text: '抄写设问' }
    ],
    answer: ['B'], explain: '先准确点明材料所体现的原理（如矛盾观、实践观），再结合材料展开，避免原理堆砌与答非所问。',
    source: 'original'
  }
]
