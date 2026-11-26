const K = 'k-en-'

export const questionsEn = [
  {
    id: 'q-en-001', subject: 'en', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: '在句子 "The report addresses the issue of rising costs." 中，addresses 的含义是（ ）。',
    options: [{ key: 'A', text: '给……写地址' }, { key: 'B', text: '处理、应对' }, { key: 'C', text: '向……致辞' }, { key: 'D', text: '称呼' }],
    answer: ['B'], explain: 'address 的熟词僻义为「处理、应对（问题）」，与 deal with 接近；此处不是「写地址」。',
    source: 'original'
  },
  {
    id: 'q-en-002', subject: 'en', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: '词根 spect 的基本含义是（ ）。',
    options: [{ key: 'A', text: '看' }, { key: 'B', text: '说' }, { key: 'C', text: '写' }, { key: 'D', text: '走' }],
    answer: ['A'], explain: 'spect 表示「看」，inspect、prospect、retrospect 都与此相关；掌握词根可帮助推断生词。',
    source: 'original'
  },
  {
    id: 'q-en-003', subject: 'en', knowledgeId: K + '004', type: 'judge', difficulty: 1,
    stem: 'that 不能引导非限制性定语从句。',
    answer: ['T'], explain: '非限制性定语从句用逗号与主句隔开，关系词用 which/who/whose 等，不能用 that。',
    source: 'original'
  },
  {
    id: 'q-en-004', subject: 'en', knowledgeId: K + '008', type: 'single', difficulty: 2,
    stem: '当 Not until 置于句首时，主句需要（ ）。',
    options: [{ key: 'A', text: '完全倒装' }, { key: 'B', text: '部分倒装' }, { key: 'C', text: '保持陈述语序' }, { key: 'D', text: '改为被动语态' }],
    answer: ['B'], explain: '否定词或 Only + 状语置于句首时，主句助动词提前，构成部分倒装，从句仍用陈述语序。',
    source: 'original'
  },
  {
    id: 'q-en-005', subject: 'en', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: '句子 "Having finished his homework, he went out to play." 中，分词短语表示的动作（ ）。',
    options: [
      { key: 'A', text: '与主句动作同时发生' },
      { key: 'B', text: '发生在主句动作之前' },
      { key: 'C', text: '发生在主句动作之后' },
      { key: 'D', text: '与主句动作无关' }
    ],
    answer: ['B'], explain: 'having done 是现在分词的完成式，明确表示该动作先于主句谓语发生。',
    source: 'original'
  },
  {
    id: 'q-en-006', subject: 'en', knowledgeId: K + '003', type: 'multiple', difficulty: 2,
    stem: '长难句的主干通常包括下列哪些成分（ ）。',
    options: [{ key: 'A', text: '主语' }, { key: 'B', text: '谓语' }, { key: 'C', text: '宾语或表语' }, { key: 'D', text: '定语从句' }],
    answer: ['A', 'B', 'C'], explain: '主干是主谓（宾/表）结构；定语从句、状语、同位语都属于修饰成分，不构成主干。',
    source: 'original'
  },
  {
    id: 'q-en-007', subject: 'en', knowledgeId: K + '009', type: 'single', difficulty: 1,
    stem: '完形填空中，however 通常表示（ ）关系。',
    options: [{ key: 'A', text: '因果' }, { key: 'B', text: '转折' }, { key: 'C', text: '递进' }, { key: 'D', text: '举例' }],
    answer: ['B'], explain: 'however 表转折，前后语义方向相反；therefore 表因果，moreover 表递进。',
    source: 'original'
  },
  {
    id: 'q-en-008', subject: 'en', knowledgeId: K + '010', type: 'single', difficulty: 1,
    stem: '做阅读主旨题时，最应优先关注（ ）。',
    options: [
      { key: 'A', text: '首末段与转折句' },
      { key: 'B', text: '所有数字与年份' },
      { key: 'C', text: '生词最多的句子' },
      { key: 'D', text: '引号内的例子' }
    ],
    answer: ['A'], explain: '主旨常出现在首段、末段与转折词之后；细节数据与例子服务于主旨，不能直接当中心。',
    source: 'original'
  },
  {
    id: 'q-en-009', subject: 'en', knowledgeId: K + '011', type: 'judge', difficulty: 1,
    stem: '阅读细节题的正确选项多为原文的同义替换，而非原词简单复现。',
    answer: ['T'], explain: '命题人常用同义改写设置正确项，用原词堆砌设置干扰项，因此要比对语义而非只看词形。',
    source: 'original'
  },
  {
    id: 'q-en-010', subject: 'en', knowledgeId: K + '012', type: 'single', difficulty: 1,
    stem: '在作者态度题中，indifferent 通常（ ）。',
    options: [
      { key: 'A', text: '是正确答案的高频词' },
      { key: 'B', text: '表示强烈支持' },
      { key: 'C', text: '多为干扰项' },
      { key: 'D', text: '表示客观中立' }
    ],
    answer: ['C'], explain: '作者写文章通常有立场，真正「漠不关心」很少见，indifferent 因此常被用作干扰项。',
    source: 'original'
  },
  {
    id: 'q-en-011', subject: 'en', knowledgeId: K + '013', type: 'single', difficulty: 2,
    stem: '新题型排序题中，判断首段最可靠的线索是（ ）。',
    options: [
      { key: 'A', text: '段落最长' },
      { key: 'B', text: '无代词指代、引出主题' },
      { key: 'C', text: '含有最多数字' },
      { key: 'D', text: '出现 however' }
    ],
    answer: ['B'], explain: '首段通常提出主题，不依赖前文指代；若段落开头有 it/this/they，说明前面还有内容。',
    source: 'original'
  },
  {
    id: 'q-en-012', subject: 'en', knowledgeId: K + '014', type: 'single', difficulty: 2,
    stem: '翻译强调句 "It is this policy that changed the market." 时，较合理的处理是（ ）。',
    options: [
      { key: 'A', text: '逐词译为「它是这个政策改变了市场」' },
      { key: 'B', text: '还原被强调成分，译为「正是这项政策改变了市场」' },
      { key: 'C', text: '删去 It is 不译' },
      { key: 'D', text: '把 that 译成「那个」' }
    ],
    answer: ['B'], explain: '强调句的核心是突出某一成分，中文用「正是……」「是……才……」等结构还原强调语气。',
    source: 'original'
  },
  {
    id: 'q-en-013', subject: 'en', knowledgeId: K + '015', type: 'single', difficulty: 1,
    stem: '写给不知姓名的机构的小作文，称呼应使用（ ）。',
    options: [{ key: 'A', text: 'Dear friend' }, { key: 'B', text: 'Dear Sir or Madam' }, { key: 'C', text: 'Hi there' }, { key: 'D', text: 'To whom it may concern' }],
    answer: ['B'], explain: '不知收信人姓名时用 Dear Sir or Madam；To whom it may concern 更适用于证明类公文。',
    source: 'original'
  },
  {
    id: 'q-en-014', subject: 'en', knowledgeId: K + '016', type: 'single', difficulty: 1,
    stem: '图表作文的首段通常应当（ ）。',
    options: [
      { key: 'A', text: '分析原因' },
      { key: 'B', text: '描述图表的主要趋势' },
      { key: 'C', text: '提出个人建议' },
      { key: 'D', text: '罗列全部数据' }
    ],
    answer: ['B'], explain: '首段描述图表总体趋势与关键极值，中段分析原因，末段总结或建议，结构才完整。',
    source: 'original'
  },
  {
    id: 'q-en-015', subject: 'en', knowledgeId: K + '008', type: 'judge', difficulty: 2,
    stem: 'not only 置于句首时，其所在的主句部分需要部分倒装。',
    answer: ['T'], explain: 'Not only ... but also ... 结构中，not only 置于句首时前一分句用部分倒装，后一分句保持陈述语序。',
    source: 'original'
  },
  {
    id: 'q-en-016', subject: 'en', knowledgeId: K + '009', type: 'single', difficulty: 1,
    stem: '完形填空中，therefore 表示（ ）关系。',
    options: [{ key: 'A', text: '转折' }, { key: 'B', text: '因果' }, { key: 'C', text: '让步' }, { key: 'D', text: '对比' }],
    answer: ['B'], explain: 'therefore 引出结果，前后为因果；however 才是转折，although 表让步。',
    source: 'original'
  },
  {
    id: 'q-en-017', subject: 'en', knowledgeId: K + '019', type: 'multiple', difficulty: 2,
    stem: '下列属于阅读干扰项常见手法的有（ ）。',
    options: [
      { key: 'A', text: '偷换概念' },
      { key: 'B', text: '绝对化表述' },
      { key: 'C', text: '无中生有' },
      { key: 'D', text: '同义替换' }
    ],
    answer: ['A', 'B', 'C'], explain: '偷换概念、绝对化、无中生有都是干扰项手法；同义替换恰是正确项的常见特征。',
    source: 'original'
  },
  {
    id: 'q-en-018', subject: 'en', knowledgeId: K + '018', type: 'single', difficulty: 1,
    stem: '考研英语阅读每篇的推荐用时约为（ ）。',
    options: [{ key: 'A', text: '5–8 分钟' }, { key: 'B', text: '15–18 分钟' }, { key: 'C', text: '25–30 分钟' }, { key: 'D', text: '40 分钟' }],
    answer: ['B'], explain: '四篇阅读共约 70 分钟，每篇 15–18 分钟较稳；超时先标记，避免挤占作文与翻译。',
    source: 'original'
  },
  {
    id: 'q-en-019', subject: 'en', knowledgeId: K + '014', type: 'judge', difficulty: 2,
    stem: '翻译时应当严格逐词直译，不需要调整语序。',
    answer: ['F'], explain: '英汉语序与表达习惯不同，翻译需先拆分意群、译出主干，再按中文习惯重组修饰成分。',
    source: 'original'
  },
  {
    id: 'q-en-020', subject: 'en', knowledgeId: K + '002', type: 'single', difficulty: 1,
    stem: '短语 shed light on 的含义是（ ）。',
    options: [{ key: 'A', text: '关灯' }, { key: 'B', text: '阐明、使……清楚' }, { key: 'C', text: '轻视' }, { key: 'D', text: '照亮房间' }],
    answer: ['B'], explain: 'shed light on 是固定搭配，意为「阐明、有助于理解」，常见于学术与评论类文章。',
    source: 'original'
  }
]
