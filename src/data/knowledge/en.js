export const knowledgeEn = [
  {
    id: 'k-en-001', subject: 'en', chapterId: 'en-ch1', gid: 'EN-1.1-01',
    title: '词根词缀与熟词僻义', difficulty: 1, tags: ['词汇', '词根', '熟词僻义'],
    summary: '用词根词缀拆解生词，优先掌握高频词的僻义与搭配。',
    points: [
      '常见词根：spect（看）、port（携带）、duc（引导）、vert（转）。',
      '熟词僻义是阅读的主要陷阱，如 address 作「处理、解决」。',
      '记词以「词块 + 例句」为单位，避免只背中文对应。'
    ],
    pitfalls: ['只记单词第一义，遇到僻义时误判整句。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch1', page: 4, confidence: 'approx' }],
    related: ['k-en-002', 'k-en-003'], estMin: 15
  },
  {
    id: 'k-en-002', subject: 'en', chapterId: 'en-ch1', gid: 'EN-1.1-02',
    title: '高频短语与固定搭配', difficulty: 1, tags: ['短语', '搭配'],
    summary: '动词短语、介词搭配与逻辑连接词的固定用法。',
    points: [
      'account for（解释、占比）、give rise to（引起）、subject to（受制于）。',
      '连接词决定句间关系：however 转折、therefore 因果、moreover 递进。',
      '同一动词搭配不同介词，意义可能完全改变。'
    ],
    pitfalls: ['按字面直译短语，忽略其固定含义。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch1', page: 24, confidence: 'approx' }],
    related: ['k-en-001', 'k-en-009'], estMin: 12
  },
  {
    id: 'k-en-003', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.1-01',
    title: '长难句主干识别', difficulty: 2, tags: ['长难句', '主干', '修饰'],
    summary: '先找谓语动词，再定主语与宾语，最后挂接从句与修饰成分。',
    points: [
      '一个句子有几个谓语，就可能有几套主谓结构。',
      '介词短语、分词短语、同位语多作修饰，先跳过再回填。',
      '主干决定句子的基本命题，修饰只改变范围与态度。'
    ],
    pitfalls: ['把从句谓语当主句谓语，导致主干判断错误。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 44, confidence: 'approx' }],
    related: ['k-en-004', 'k-en-007'], estMin: 18
  },
  {
    id: 'k-en-004', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.1-02',
    title: '定语从句与关系词', difficulty: 2, tags: ['定语从句', '关系词'],
    summary: '限制性与非限制性定语从句的区别，that/which/whose 的选择。',
    points: [
      '非限制性从句用逗号隔开，不能用 that 引导。',
      '先行词是人用 who/whom，物用 which，所属关系用 whose。',
      '介词 + which/whom 的结构需判断介词来源。'
    ],
    pitfalls: ['在非限制性从句中使用 that，或关系词与先行词不一致。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 52, confidence: 'approx' }],
    related: ['k-en-003', 'k-en-005'], estMin: 16
  },
  {
    id: 'k-en-005', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.1-03',
    title: '状语从句与逻辑关系', difficulty: 1, tags: ['状语从句', '逻辑'],
    summary: '时间、条件、让步、原因、结果等状语从句的连词选择。',
    points: [
      '让步用 although/though/even if，不能与 but 连用。',
      '条件用 if/unless/provided that，注意真实与虚拟的区别。',
      '状语从句位置灵活，句首时常用逗号隔开。'
    ],
    pitfalls: ['although 与 but 同时出现，或 because 与 so 连用。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 62, confidence: 'approx' }],
    related: ['k-en-004', 'k-en-009'], estMin: 14
  },
  {
    id: 'k-en-006', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.1-04',
    title: '名词性从句', difficulty: 2, tags: ['主语从句', '宾语从句', '同位语'],
    summary: '主语、宾语、表语、同位语从句的引导词与语序。',
    points: [
      '名词性从句一律用陈述语序，不再倒装。',
      'that 在宾语从句中常可省略，在主语从句中不可省。',
      'whether 与 if 在主语从句、介词后通常只用 whether。'
    ],
    pitfalls: ['从句中保留疑问语序，如 what does he want。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 70, confidence: 'approx' }],
    related: ['k-en-003', 'k-en-004'], estMin: 16
  },
  {
    id: 'k-en-007', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.2-01',
    title: '非谓语动词', difficulty: 2, tags: ['分词', '不定式', '动名词'],
    summary: '不定式、动名词、现在分词与过去分词的功能与逻辑主语。',
    points: [
      '分词作状语时，其逻辑主语应与主句主语一致。',
      'having done 表示动作发生在主句谓语之前。',
      '不定式多表目的或将来，动名词多表抽象动作。'
    ],
    pitfalls: ['分词状语逻辑主语与主句主语不一致，形成悬垂修饰。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 78, confidence: 'approx' }],
    related: ['k-en-003', 'k-en-008'], estMin: 18
  },
  {
    id: 'k-en-008', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.2-02',
    title: '虚拟语气与倒装', difficulty: 3, tags: ['虚拟', '倒装', '强调'],
    summary: 'if 虚拟三时态、wish/建议类虚拟，否定词置首的倒装。',
    points: [
      '与现在事实相反用 did/were，与过去相反用 had done。',
      'suggest/insist 表「建议、坚持」时从句用 (should) do。',
      'Not until、Never、Only + 状语置句首时主句部分倒装。'
    ],
    pitfalls: ['把 suggest 表「暗示」的句子误用虚拟语气。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 86, confidence: 'approx' }],
    related: ['k-en-007', 'k-en-015'], estMin: 18
  },
  {
    id: 'k-en-009', subject: 'en', chapterId: 'en-ch3', gid: 'EN-3.1-01',
    title: '完形填空的逻辑衔接', difficulty: 2, tags: ['完形', '衔接', '词义辨析'],
    summary: '先通读定主题，再按句间关系与搭配筛选选项。',
    points: [
      '先做逻辑连接题，再做词义辨析题，最后复查固定搭配。',
      '转折、因果、并列、举例四类关系决定连接词方向。',
      '同一空格的两个近义词，靠搭配与上下文语义场区分。'
    ],
    pitfalls: ['逐句填词不回读，导致全文逻辑前后矛盾。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch3', page: 104, confidence: 'approx' }],
    related: ['k-en-002', 'k-en-005'], estMin: 18
  },
  {
    id: 'k-en-010', subject: 'en', chapterId: 'en-ch4', gid: 'EN-4.1-01',
    title: '阅读主旨题', difficulty: 2, tags: ['主旨', '标题', '段落'],
    summary: '通过首末段、转折句与高频复现词确定文章中心。',
    points: [
      '主旨题答案覆盖全文，不选只在某一段出现的细节。',
      '转折词（but/however/yet）之后常是作者真正观点。',
      '标题题需同时满足「准确」与「有吸引力但不夸大」。'
    ],
    pitfalls: ['把某段细节当成全文主旨，或选择范围过大的标题。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch4', page: 130, confidence: 'approx' }],
    related: ['k-en-011', 'k-en-012'], estMin: 18
  },
  {
    id: 'k-en-011', subject: 'en', chapterId: 'en-ch4', gid: 'EN-4.1-02',
    title: '阅读细节题', difficulty: 1, tags: ['细节', '同义替换', '定位'],
    summary: '按题干关键词回文定位，比对同义替换而非原词复现。',
    points: [
      '定位句通常在关键词所在句及其下一句。',
      '正确项多为原文的同义改写，原词堆砌常是干扰项。',
      '注意否定词、比较级与时间状语的范围。'
    ],
    pitfalls: ['凭常识作答，忽略原文的具体限定条件。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch4', page: 138, confidence: 'approx' }],
    related: ['k-en-010', 'k-en-019'], estMin: 18
  },
  {
    id: 'k-en-012', subject: 'en', chapterId: 'en-ch4', gid: 'EN-4.2-01',
    title: '推理判断与态度题', difficulty: 3, tags: ['推理', '态度', '干扰项'],
    summary: '基于原文做一步推理，态度题抓评价性形容词与转折。',
    points: [
      '推理题答案必须有原文依据，不能连续推两步。',
      '态度词分支持、反对、客观、冷漠；indifferent 多为干扰。',
      '作者态度常藏在引号、让步与转折之后。'
    ],
    pitfalls: ['把文中他人的观点当成作者态度。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch4', page: 162, confidence: 'approx' }],
    related: ['k-en-010', 'k-en-019'], estMin: 20
  },
  {
    id: 'k-en-013', subject: 'en', chapterId: 'en-ch5', gid: 'EN-5.1-01',
    title: '新题型排序与匹配', difficulty: 3, tags: ['新题型', '排序', '衔接'],
    summary: '利用代词、连接词、重复词与时间线确定段落顺序。',
    points: [
      '先确定首段：通常无代词指代、引出主题。',
      '代词 it/they/this 必须向前找指代对象。',
      '匹配题先读选项关键词，再回文找同义段落。'
    ],
    pitfalls: ['只看单句关键词，忽略段落之间的指代链。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch5', page: 194, confidence: 'approx' }],
    related: ['k-en-010', 'k-en-003'], estMin: 20
  },
  {
    id: 'k-en-014', subject: 'en', chapterId: 'en-ch6', gid: 'EN-6.1-01',
    title: '翻译的拆分与重组', difficulty: 3, tags: ['翻译', '拆分', '语序'],
    summary: '先切分意群，再译出主干，最后按中文语序重组修饰。',
    points: [
      '按标点、连词、从句引导词切分意群。',
      '定语从句短则前置，长则后置或独立成句。',
      '被动语态常转主动，抽象名词常转动词。'
    ],
    pitfalls: ['逐词直译不调整语序，导致中文不通顺。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch6', page: 214, confidence: 'approx' }],
    related: ['k-en-003', 'k-en-004'], estMin: 22
  },
  {
    id: 'k-en-015', subject: 'en', chapterId: 'en-ch7', gid: 'EN-7.1-01',
    title: '小作文书信格式', difficulty: 1, tags: ['小作文', '书信', '格式'],
    summary: '称呼、开头目的句、正文要点、客套结尾与署名的固定结构。',
    points: [
      '称呼用 Dear Sir or Madam（不知姓名）或 Dear Mr. Smith。',
      '首句直接说明写信目的，不绕弯。',
      '结尾用 Yours sincerely / faithfully，再署名。'
    ],
    pitfalls: ['遗漏题目要求的要点，或格式称谓与署名不匹配。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch7', page: 232, confidence: 'approx' }],
    related: ['k-en-016', 'k-en-017'], estMin: 18
  },
  {
    id: 'k-en-016', subject: 'en', chapterId: 'en-ch7', gid: 'EN-7.1-02',
    title: '大作文图表描述', difficulty: 2, tags: ['大作文', '图表', '数据'],
    summary: '首段描述图表，中段分析原因，末段总结趋势或提出建议。',
    points: [
      '描述段抓总体趋势与极值，不罗列所有数据。',
      '常用句式：witness a rise, account for, peak at。',
      '分析段从经济、社会、技术、心理四个角度选两点。'
    ],
    pitfalls: ['通篇描述数据，缺少原因分析与结论。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch7', page: 240, confidence: 'approx' }],
    related: ['k-en-015', 'k-en-017'], estMin: 22
  },
  {
    id: 'k-en-017', subject: 'en', chapterId: 'en-ch7', gid: 'EN-7.1-03',
    title: '写作衔接与句式变化', difficulty: 2, tags: ['衔接', '句式', '作文'],
    summary: '用连接词、指代与长短句交替，避免模板化堆砌。',
    points: [
      '段落之间用 To begin with / Moreover / Consequently 明确层次。',
      '长短句交替：主干短句保证清晰，从句补充信息。',
      '避免连续使用同一主语开头，可用分词或倒装变化。'
    ],
    pitfalls: ['连接词过度堆砌，反而暴露模板痕迹。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch7', page: 248, confidence: 'approx' }],
    related: ['k-en-016', 'k-en-008'], estMin: 16
  },
  {
    id: 'k-en-018', subject: 'en', chapterId: 'en-ch4', gid: 'EN-4.2-02',
    title: '真题时间分配与做题顺序', difficulty: 1, tags: ['时间分配', '策略'],
    summary: '按分值与时耗安排顺序：作文 → 阅读 → 新题型 → 翻译 → 完形。',
    points: [
      '阅读每篇控制在 15–18 分钟，超时先标记后回看。',
      '作文预留 60 分钟，先列提纲再动笔。',
      '完形分值低，放在最后，避免挤占阅读时间。'
    ],
    pitfalls: ['在完形上耗时过多，导致作文仓促收尾。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch4', page: 186, confidence: 'approx' }],
    related: ['k-en-010', 'k-en-015'], estMin: 12
  },
  {
    id: 'k-en-019', subject: 'en', chapterId: 'en-ch4', gid: 'EN-4.2-03',
    title: '干扰项的四种常见手法', difficulty: 2, tags: ['干扰项', '阅读', '辨析'],
    summary: '偷换概念、绝对化、无中生有、因果倒置是主要干扰来源。',
    points: [
      '偷换概念：把原文的 A 换成范围更大或更小的 B。',
      '绝对化：加入 all/never/only 等原文没有的限定。',
      '无中生有：看似合理但原文没有任何依据。'
    ],
    pitfalls: ['凭「听起来合理」选择，未回文验证依据。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch4', page: 170, confidence: 'approx' }],
    related: ['k-en-011', 'k-en-012'], estMin: 16
  },
  {
    id: 'k-en-020', subject: 'en', chapterId: 'en-ch2', gid: 'EN-2.2-03',
    title: '长难句真题拆解流程', difficulty: 3, tags: ['长难句', '拆解', '真题'],
    summary: '四步法：找谓语、切分句、定主干、还原修饰。',
    points: [
      '第一步圈出所有谓语动词，区分主句与从句。',
      '第二步按引导词与标点切成意群。',
      '第三步译主干，第四步把修饰按中文习惯前置或后置。'
    ],
    pitfalls: ['跳过主干直接翻译修饰，导致句子逻辑散架。'],
    bookRefs: [{ bookId: 'book-en-core', chapterId: 'en-ch2', page: 92, confidence: 'approx' }],
    related: ['k-en-003', 'k-en-014'], estMin: 20
  }
]
