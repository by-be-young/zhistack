export const knowledgeMath = [
  {
    id: 'k-math-001', subject: 'math', chapterId: 'm-ch1', gid: 'MATH-1.1-01',
    title: '极限的定义与存在性', difficulty: 2, tags: ['极限', 'ε-N', '夹逼'],
    summary: '数列与函数极限的 ε-N / ε-δ 定义，存在性的夹逼与单调有界准则。',
    points: [
      '极限存在与函数在该点是否有定义无关，只看去心邻域。',
      '夹逼准则要求两侧数列/函数同趋于同一极限。',
      '单调有界数列必收敛，是递推数列求极限的常用依据。'
    ],
    pitfalls: ['把「函数值等于极限值」误当成极限存在的条件。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch1', page: 5, confidence: 'approx' }],
    related: ['k-math-002', 'k-math-003'], estMin: 20
  },
  {
    id: 'k-math-002', subject: 'math', chapterId: 'm-ch1', gid: 'MATH-1.2-01',
    title: '无穷小阶的比较', difficulty: 2, tags: ['无穷小', '等价替换', '泰勒'],
    summary: '高阶、低阶、同阶与等价无穷小的判定，常用等价量替换的条件。',
    points: [
      'β/α → 0 表示 β 是 α 的高阶无穷小，记作 o(α)。',
      '等价替换只适用于乘除因子，加减项替换需谨慎。',
      '1-cos x ~ x²/2，x-sin x ~ x³/6，tan x - x ~ x³/3。'
    ],
    pitfalls: ['在加减法中直接替换等价无穷小导致阶数丢失。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch1', page: 32, confidence: 'approx' }],
    related: ['k-math-001', 'k-math-006'], estMin: 18
  },
  {
    id: 'k-math-003', subject: 'math', chapterId: 'm-ch1', gid: 'MATH-1.2-02',
    title: '连续与间断点分类', difficulty: 1, tags: ['连续', '间断点'],
    summary: '连续的三个等价条件，第一类与第二类间断点的判别。',
    points: [
      '连续要求极限存在、函数值存在且两者相等。',
      '可去与跳跃间断点属于第一类，左右极限都存在。',
      '无穷与振荡间断点属于第二类，至少一侧极限不存在。'
    ],
    pitfalls: ['把左右极限存在但不相等的点误判为可去间断点。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch1', page: 48, confidence: 'approx' }],
    related: ['k-math-001', 'k-math-004'], estMin: 15
  },
  {
    id: 'k-math-004', subject: 'math', chapterId: 'm-ch2', gid: 'MATH-2.1-01',
    title: '导数定义与可导性', difficulty: 2, tags: ['导数', '可导', '连续'],
    summary: '导数定义式、左右导数与「可导必连续」的单向关系。',
    points: [
      '可导的充要条件是左右导数存在且相等。',
      '可导一定连续，连续不一定可导，如 |x| 在 0 点。',
      '分段函数分点处必须用定义或左右导数判断。'
    ],
    pitfalls: ['用求导公式直接代入分段点，忽略分点处定义。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch2', page: 64, confidence: 'approx' }],
    related: ['k-math-003', 'k-math-005'], estMin: 18
  },
  {
    id: 'k-math-005', subject: 'math', chapterId: 'm-ch2', gid: 'MATH-2.2-01',
    title: '微分中值定理', difficulty: 3, tags: ['罗尔', '拉格朗日', '柯西'],
    summary: '罗尔、拉格朗日、柯西三定理的条件与结论，辅助函数的构造。',
    points: [
      '罗尔定理三条件：闭区间连续、开区间可导、端点值相等。',
      '拉格朗日定理给出 f(b)-f(a)=f′(ξ)(b-a)。',
      '柯西定理用于两个函数增量之比，是洛必达法则的基础。'
    ],
    pitfalls: ['忽略「开区间可导」条件，或把 ξ 误认为区间中点。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch2', page: 98, confidence: 'approx' }],
    related: ['k-math-006', 'k-math-004'], estMin: 25
  },
  {
    id: 'k-math-006', subject: 'math', chapterId: 'm-ch2', gid: 'MATH-2.2-02',
    title: '洛必达法则与泰勒展开', difficulty: 3, tags: ['洛必达', '泰勒', '极限'],
    summary: '0/0 与 ∞/∞ 型的处理，泰勒公式在极限与估值中的使用。',
    points: [
      '洛必达每次求导后需重新检查是否仍为未定式。',
      '泰勒展开的阶数要与分母同阶，否则余项无法抵消。',
      '常用展开：e^x、sin x、ln(1+x)、1/(1-x)。'
    ],
    pitfalls: ['对非未定式反复使用洛必达，或展开阶数不足。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch2', page: 122, confidence: 'approx' }],
    related: ['k-math-002', 'k-math-005'], estMin: 25
  },
  {
    id: 'k-math-007', subject: 'math', chapterId: 'm-ch3', gid: 'MATH-3.1-01',
    title: '不定积分的换元与分部', difficulty: 2, tags: ['换元', '分部积分'],
    summary: '第一类与第二类换元法，分部积分的选 u 与 dv 顺序。',
    points: [
      '凑微分是第一类换元的核心，注意回代与常数 C。',
      '分部积分按「反对幂指三」选 u，降低复杂度。',
      '有理函数先做多项式除法与部分分式分解。'
    ],
    pitfalls: ['换元后忘记换回原变量，或漏写积分常数。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch3', page: 145, confidence: 'approx' }],
    related: ['k-math-008', 'k-math-004'], estMin: 22
  },
  {
    id: 'k-math-008', subject: 'math', chapterId: 'm-ch3', gid: 'MATH-3.2-01',
    title: '定积分的性质与对称性', difficulty: 2, tags: ['定积分', '奇偶性', '变上限'],
    summary: '定积分的线性、区间可加性，奇偶函数在对称区间的简化。',
    points: [
      '奇函数在对称区间积分为 0，偶函数为半区间两倍。',
      '变上限积分求导时注意上限是复合函数需乘链式因子。',
      '换元时上下限必须同步替换，不用回代。'
    ],
    pitfalls: ['换元后仍用原上下限，导致符号或数值错误。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch3', page: 180, confidence: 'approx' }],
    related: ['k-math-007', 'k-math-009'], estMin: 20
  },
  {
    id: 'k-math-009', subject: 'math', chapterId: 'm-ch3', gid: 'MATH-3.2-02',
    title: '反常积分的敛散性', difficulty: 2, tags: ['反常积分', 'p 积分'],
    summary: '无穷限与瑕积分的定义，p 积分与比较判别法。',
    points: [
      '∫₁^∞ 1/x^p 在 p>1 时收敛，p≤1 时发散。',
      '瑕积分在奇点附近用极限定义，需拆成单侧极限。',
      '比较判别法要求被积函数非负，极限形式需有限非零。'
    ],
    pitfalls: ['忽略瑕点，直接把奇点当普通端点计算。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch3', page: 205, confidence: 'approx' }],
    related: ['k-math-008', 'k-math-013'], estMin: 18
  },
  {
    id: 'k-math-010', subject: 'math', chapterId: 'm-ch4', gid: 'MATH-4.1-01',
    title: '偏导数与全微分', difficulty: 2, tags: ['偏导', '全微分', '链式法则'],
    summary: '偏导存在与可微的关系，全微分形式不变性与复合求导。',
    points: [
      '偏导存在不一定可微；偏导连续是可微的充分条件。',
      '可微则偏导存在且连续，反之不成立。',
      '复合函数求导用链式法则，注意中间变量层级。'
    ],
    pitfalls: ['把「偏导存在」当作「可微」的充要条件。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch4', page: 235, confidence: 'approx' }],
    related: ['k-math-011', 'k-math-005'], estMin: 22
  },
  {
    id: 'k-math-011', subject: 'math', chapterId: 'm-ch4', gid: 'MATH-4.2-01',
    title: '多元极值与条件极值', difficulty: 3, tags: ['极值', '拉格朗日乘子'],
    summary: '无条件极值的驻点判别，条件极值的拉格朗日乘子法。',
    points: [
      '驻点处用 AC-B² 判别：大于 0 有极值，小于 0 为鞍点。',
      '条件极值构造 L=f+λg，解方程组后比较函数值。',
      '闭区域最值需同时比较内部驻点与边界。'
    ],
    pitfalls: ['只求内部驻点，漏掉边界与不可导点。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch4', page: 268, confidence: 'approx' }],
    related: ['k-math-010', 'k-math-012'], estMin: 25
  },
  {
    id: 'k-math-012', subject: 'math', chapterId: 'm-ch5', gid: 'MATH-5.1-01',
    title: '二重积分的计算', difficulty: 2, tags: ['二重积分', '极坐标', '换序'],
    summary: '直角坐标与极坐标下的累次积分，交换积分次序与对称性。',
    points: [
      '先画区域再定限，X 型与 Y 型的选择影响计算量。',
      '极坐标面积元为 r dr dθ，不要漏掉 r。',
      '轮换对称性与奇偶性可大幅简化对称区域上的积分。'
    ],
    pitfalls: ['极坐标变换漏乘 r，或角度范围判断错误。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch5', page: 295, confidence: 'approx' }],
    related: ['k-math-011', 'k-math-008'], estMin: 22
  },
  {
    id: 'k-math-013', subject: 'math', chapterId: 'm-ch6', gid: 'MATH-6.1-01',
    title: '数项级数的敛散判别', difficulty: 2, tags: ['级数', '比值法', '比较法'],
    summary: '正项级数的比较、比值、根值判别，交错级数与绝对收敛。',
    points: [
      'p 级数 Σ1/n^p 在 p>1 收敛，调和级数发散。',
      '比值法与根值法在极限等于 1 时失效，需换方法。',
      '绝对收敛必收敛，条件收敛需另判原级数。'
    ],
    pitfalls: ['用比值法极限为 1 就断定收敛。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch6', page: 335, confidence: 'approx' }],
    related: ['k-math-009', 'k-math-014'], estMin: 20
  },
  {
    id: 'k-math-014', subject: 'math', chapterId: 'm-ch6', gid: 'MATH-6.2-01',
    title: '幂级数的收敛域与和函数', difficulty: 3, tags: ['幂级数', '收敛半径'],
    summary: '收敛半径的求法、端点单独讨论，逐项求导与积分求和。',
    points: [
      '收敛半径 R=1/lim|a_{n+1}/a_n|，端点必须单独判敛。',
      '逐项求导与逐项积分不改变收敛半径，可能改变端点。',
      '和函数常通过已知展开式积分或求导回到目标形式。'
    ],
    pitfalls: ['只写开区间，漏掉收敛端点的讨论。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch6', page: 360, confidence: 'approx' }],
    related: ['k-math-013', 'k-math-006'], estMin: 25
  },
  {
    id: 'k-math-015', subject: 'math', chapterId: 'm-ch7', gid: 'MATH-7.1-01',
    title: '一阶微分方程', difficulty: 2, tags: ['可分离', '一阶线性', '伯努利'],
    summary: '可分离变量、齐次、一阶线性与伯努利方程的识别与求解。',
    points: [
      '一阶线性方程用通解公式 y=e^{-∫P}(∫Qe^{∫P}dx+C)。',
      '齐次方程令 u=y/x 化为可分离。',
      '伯努利方程令 z=y^{1-n} 化为一阶线性。'
    ],
    pitfalls: ['求通解后忘记用初值条件确定常数。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch7', page: 385, confidence: 'approx' }],
    related: ['k-math-016', 'k-math-007'], estMin: 20
  },
  {
    id: 'k-math-016', subject: 'math', chapterId: 'm-ch7', gid: 'MATH-7.2-01',
    title: '高阶线性微分方程', difficulty: 3, tags: ['特征方程', '通解', '特解'],
    summary: '二阶常系数齐次与非齐次方程的解结构，特解形式设定。',
    points: [
      '齐次通解由特征根类型决定：实单根、重根、共轭复根。',
      '非齐次特解按自由项形式设定，遇特征根需乘 x^k。',
      '通解 = 齐次通解 + 一个非齐次特解。'
    ],
    pitfalls: ['自由项与特征根重根时，特解未乘足够的 x 因子。'],
    bookRefs: [{ bookId: 'book-math-calculus', chapterId: 'm-ch7', page: 402, confidence: 'approx' }],
    related: ['k-math-015', 'k-math-014'], estMin: 25
  },
  {
    id: 'k-math-017', subject: 'math', chapterId: 'ml-ch1', gid: 'MATH-LA-1.1',
    title: '行列式与矩阵的秩', difficulty: 2, tags: ['行列式', '秩', '初等变换'],
    summary: '行列式的性质与展开，矩阵秩的定义与初等变换求法。',
    points: [
      '行列式互换两行变号，某行乘 k 行列式乘 k。',
      '秩等于非零子式的最高阶数，也等于行阶梯形的非零行数。',
      '初等行变换不改变秩，但会改变行列式的值。'
    ],
    pitfalls: ['用行变换求秩时误把行列式性质一起套用。'],
    bookRefs: [{ bookId: 'book-math-linear', chapterId: 'ml-ch1', page: 6, confidence: 'approx' }],
    related: ['k-math-018', 'k-math-019'], estMin: 18
  },
  {
    id: 'k-math-018', subject: 'math', chapterId: 'ml-ch3', gid: 'MATH-LA-3.2',
    title: '线性方程组解的结构', difficulty: 3, tags: ['基础解系', '通解', '秩'],
    summary: '齐次与非齐次方程组有解的判定，基础解系与通解写法。',
    points: [
      'Ax=0 的基础解系含 n-r(A) 个线性无关解。',
      '非齐次有解要求 r(A)=r(A|b)，通解为特解加齐次通解。',
      '解空间维数等于未知数个数减秩。'
    ],
    pitfalls: ['非齐次通解漏写齐次部分，或基础解系个数算成 r。'],
    bookRefs: [{ bookId: 'book-math-linear', chapterId: 'ml-ch3', page: 115, confidence: 'approx' }],
    related: ['k-math-017', 'k-math-019'], estMin: 22
  },
  {
    id: 'k-math-019', subject: 'math', chapterId: 'ml-ch4', gid: 'MATH-LA-4.1',
    title: '特征值与相似对角化', difficulty: 3, tags: ['特征值', '对角化', '实对称'],
    summary: '特征多项式、特征向量，可对角化的条件与实对称矩阵性质。',
    points: [
      'n 个互异特征值必可对角化；重根需检查几何重数。',
      '实对称矩阵必可正交对角化，不同特征值的特征向量正交。',
      'A^k 可通过 PΛ^kP^{-1} 快速计算。'
    ],
    pitfalls: ['只看代数重数，忽略几何重数不足导致不可对角化。'],
    bookRefs: [{ bookId: 'book-math-linear', chapterId: 'ml-ch4', page: 140, confidence: 'approx' }],
    related: ['k-math-018', 'k-math-020'], estMin: 25
  },
  {
    id: 'k-math-020', subject: 'math', chapterId: 'mp-ch4', gid: 'MATH-PR-4.1',
    title: '随机变量的数字特征', difficulty: 2, tags: ['期望', '方差', '正态分布'],
    summary: '期望与方差的性质、常见分布的数字特征与正态分布对称性。',
    points: [
      'D(X)=E(X²)-[E(X)]²，线性变换下 D(aX+b)=a²D(X)。',
      'X~N(μ,σ²) 时 P(X>μ)=0.5，标准化后查表。',
      '独立时 E(XY)=E(X)E(Y)，协方差为 0。'
    ],
    pitfalls: ['把 D(X+Y)=D(X)+D(Y) 无条件使用，忽略相关性。'],
    bookRefs: [{ bookId: 'book-math-prob', chapterId: 'mp-ch4', page: 110, confidence: 'approx' }],
    related: ['k-math-013', 'k-math-018'], estMin: 20
  }
]
