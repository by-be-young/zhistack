const K = 'k-math-'

export const questionsMath = [
  {
    id: 'q-math-001', subject: 'math', knowledgeId: K + '001', type: 'single', difficulty: 1,
    stem: '极限 lim(x→0) sin3x / x 的值为（ ）。',
    options: [{ key: 'A', text: '3' }, { key: 'B', text: '1' }, { key: 'C', text: '0' }, { key: 'D', text: '不存在' }],
    answer: ['A'], explain: '利用 sin3x ~ 3x，原式化为 3x/x，极限为 3；也可用重要极限 sin t/t → 1 做代换。',
    source: 'original'
  },
  {
    id: 'q-math-002', subject: 'math', knowledgeId: K + '002', type: 'single', difficulty: 1,
    stem: '当 x→0 时，与 x² 同阶的无穷小是（ ）。',
    options: [{ key: 'A', text: '1 - cos x' }, { key: 'B', text: 'sin x' }, { key: 'C', text: 'tan x' }, { key: 'D', text: 'ln(1 + x)' }],
    answer: ['A'], explain: '1-cos x ~ x²/2，与 x² 同阶；sin x、tan x、ln(1+x) 均与 x 同阶，阶数低于 x²。',
    source: 'original'
  },
  {
    id: 'q-math-003', subject: 'math', knowledgeId: K + '004', type: 'judge', difficulty: 1,
    stem: '若函数 f(x) 在 x0 处可导，则 f(x) 在 x0 处一定连续。',
    answer: ['T'], explain: '可导必连续：导数是差商的极限，极限存在意味着函数在该点连续；反过来连续不一定可导。',
    source: 'original'
  },
  {
    id: 'q-math-004', subject: 'math', knowledgeId: K + '004', type: 'single', difficulty: 1,
    stem: '函数 f(x)=|x| 在 x=0 处（ ）。',
    options: [{ key: 'A', text: '可导且导数为 0' }, { key: 'B', text: '连续但不可导' }, { key: 'C', text: '不连续' }, { key: 'D', text: '无定义' }],
    answer: ['B'], explain: '|x| 在 0 点连续，但左右导数分别为 -1 与 1，不相等，因此不可导。',
    source: 'original'
  },
  {
    id: 'q-math-005', subject: 'math', knowledgeId: K + '005', type: 'single', difficulty: 2,
    stem: '下列不属于罗尔定理条件的是（ ）。',
    options: [
      { key: 'A', text: '在闭区间上连续' },
      { key: 'B', text: '在开区间内可导' },
      { key: 'C', text: '区间端点函数值相等' },
      { key: 'D', text: '在区间内二阶可导' }
    ],
    answer: ['D'], explain: '罗尔定理只要求闭区间连续、开区间可导、端点值相等，不要求二阶可导。',
    source: 'original'
  },
  {
    id: 'q-math-006', subject: 'math', knowledgeId: K + '007', type: 'single', difficulty: 2,
    stem: '不定积分 ∫ x e^x dx 的结果是（ ）。',
    options: [
      { key: 'A', text: 'x e^x - e^x + C' },
      { key: 'B', text: 'x e^x + e^x + C' },
      { key: 'C', text: '(x²/2) e^x + C' },
      { key: 'D', text: 'e^x + C' }
    ],
    answer: ['A'], explain: '分部积分取 u=x、dv=e^x dx，得 x e^x - ∫ e^x dx = x e^x - e^x + C。',
    source: 'original'
  },
  {
    id: 'q-math-007', subject: 'math', knowledgeId: K + '008', type: 'judge', difficulty: 1,
    stem: '奇函数在关于原点对称的区间上的定积分为 0。',
    answer: ['T'], explain: '奇函数满足 f(-x)=-f(x)，对称区间上正负部分抵消，积分值为 0；偶函数则为半区间积分两倍。',
    source: 'original'
  },
  {
    id: 'q-math-008', subject: 'math', knowledgeId: K + '009', type: 'single', difficulty: 2,
    stem: '反常积分 ∫₁^∞ (1/x^p) dx 收敛的条件是（ ）。',
    options: [{ key: 'A', text: 'p < 1' }, { key: 'B', text: 'p > 1' }, { key: 'C', text: 'p = 1' }, { key: 'D', text: '任意 p' }],
    answer: ['B'], explain: 'p 积分在无穷限情形下，p>1 收敛，p≤1 发散；p=1 时为调和型对数发散。',
    source: 'original'
  },
  {
    id: 'q-math-009', subject: 'math', knowledgeId: K + '010', type: 'multiple', difficulty: 3,
    stem: '关于二元函数 z=f(x,y) 的可微性，下列说法正确的有（ ）。',
    options: [
      { key: 'A', text: '可微则偏导数存在' },
      { key: 'B', text: '偏导数连续则可微' },
      { key: 'C', text: '可微则函数连续' },
      { key: 'D', text: '偏导数存在则可微' }
    ],
    answer: ['A', 'B', 'C'], explain: '可微可推出偏导存在且函数连续；偏导连续是可微的充分条件。但偏导存在推不出可微，D 错误。',
    source: 'original'
  },
  {
    id: 'q-math-010', subject: 'math', knowledgeId: K + '012', type: 'single', difficulty: 1,
    stem: '设 D 为半径 2 的圆盘，则二重积分 ∬_D 1 dxdy 的值为（ ）。',
    options: [{ key: 'A', text: '2π' }, { key: 'B', text: 'π' }, { key: 'C', text: '4π' }, { key: 'D', text: '8π' }],
    answer: ['C'], explain: '被积函数为 1 时二重积分等于区域面积，圆盘面积为 πr²=4π。',
    source: 'original'
  },
  {
    id: 'q-math-011', subject: 'math', knowledgeId: K + '013', type: 'single', difficulty: 1,
    stem: '级数 Σ(1/n²) 的敛散性是（ ）。',
    options: [{ key: 'A', text: '发散' }, { key: 'B', text: '收敛' }, { key: 'C', text: '条件收敛' }, { key: 'D', text: '无法判断' }],
    answer: ['B'], explain: '这是 p=2 的 p 级数，p>1 时收敛；且各项为正，收敛即绝对收敛。',
    source: 'original'
  },
  {
    id: 'q-math-012', subject: 'math', knowledgeId: K + '014', type: 'single', difficulty: 2,
    stem: '幂级数 Σ (x^n / n) 的收敛半径是（ ）。',
    options: [{ key: 'A', text: '1' }, { key: 'B', text: '2' }, { key: 'C', text: '0' }, { key: 'D', text: '∞' }],
    answer: ['A'], explain: '系数 a_n=1/n，比值极限为 1，故收敛半径 R=1；端点 x=1 发散、x=-1 条件收敛。',
    source: 'original'
  },
  {
    id: 'q-math-013', subject: 'math', knowledgeId: K + '015', type: 'single', difficulty: 1,
    stem: '微分方程 y′=2x 满足 y(0)=1 的特解是（ ）。',
    options: [{ key: 'A', text: 'y=x²' }, { key: 'B', text: 'y=2x+1' }, { key: 'C', text: 'y=x²+1' }, { key: 'D', text: 'y=x²-1' }],
    answer: ['C'], explain: '积分得 y=x²+C，代入 y(0)=1 得 C=1，所以特解为 y=x²+1。',
    source: 'original'
  },
  {
    id: 'q-math-014', subject: 'math', knowledgeId: K + '016', type: 'judge', difficulty: 2,
    stem: '二阶常系数齐次线性微分方程的特征根为一对共轭复根时，其通解含有三角函数项。',
    answer: ['T'], explain: '共轭复根 α±βi 对应通解 e^{αx}(C₁cosβx+C₂sinβx)，因此一定含三角函数项。',
    source: 'original'
  },
  {
    id: 'q-math-015', subject: 'math', knowledgeId: K + '017', type: 'single', difficulty: 1,
    stem: '若三阶行列式某一行元素全为 0，则该行列式的值为（ ）。',
    options: [{ key: 'A', text: '1' }, { key: 'B', text: '0' }, { key: 'C', text: '-1' }, { key: 'D', text: '无法确定' }],
    answer: ['B'], explain: '按该行展开，每个代数余子式前系数均为 0，故行列式为 0。',
    source: 'original'
  },
  {
    id: 'q-math-016', subject: 'math', knowledgeId: K + '018', type: 'single', difficulty: 2,
    stem: '设 A 为 3×4 矩阵且 r(A)=3，则齐次方程组 Ax=0 的基础解系所含向量个数为（ ）。',
    options: [{ key: 'A', text: '0' }, { key: 'B', text: '1' }, { key: 'C', text: '3' }, { key: 'D', text: '4' }],
    answer: ['B'], explain: '基础解系向量个数为 n-r(A)=4-3=1，解空间是一维的。',
    source: 'original'
  },
  {
    id: 'q-math-017', subject: 'math', knowledgeId: K + '019', type: 'multiple', difficulty: 3,
    stem: '下列条件中，能保证 n 阶方阵 A 可相似对角化的有（ ）。',
    options: [
      { key: 'A', text: 'A 是实对称矩阵' },
      { key: 'B', text: 'A 有 n 个互不相同的特征值' },
      { key: 'C', text: 'A 有 n 个线性无关的特征向量' },
      { key: 'D', text: 'A 的所有特征值都非零' }
    ],
    answer: ['A', 'B', 'C'], explain: '实对称矩阵必可正交对角化；n 个互异特征值对应 n 个线性无关特征向量；C 是对角化的定义条件。特征值非零只说明可逆。',
    source: 'original'
  },
  {
    id: 'q-math-018', subject: 'math', knowledgeId: K + '020', type: 'single', difficulty: 1,
    stem: '设 X 服从标准正态分布 N(0,1)，则 P(X>0)=（ ）。',
    options: [{ key: 'A', text: '0' }, { key: 'B', text: '0.5' }, { key: 'C', text: '1' }, { key: 'D', text: '0.25' }],
    answer: ['B'], explain: '标准正态分布关于 0 对称，密度下总面积 1，因此 0 两侧各占 0.5。',
    source: 'original'
  },
  {
    id: 'q-math-019', subject: 'math', knowledgeId: K + '020', type: 'single', difficulty: 2,
    stem: '设 E(X)=2，D(X)=3，则 E(X²)=（ ）。',
    options: [{ key: 'A', text: '7' }, { key: 'B', text: '5' }, { key: 'C', text: '1' }, { key: 'D', text: '12' }],
    answer: ['A'], explain: '由 D(X)=E(X²)-[E(X)]²，得 E(X²)=D(X)+[E(X)]²=3+4=7。',
    source: 'original'
  },
  {
    id: 'q-math-020', subject: 'math', knowledgeId: K + '020', type: 'judge', difficulty: 2,
    stem: '大数定律表明，当样本容量足够大时，样本均值依概率收敛于总体期望。',
    answer: ['T'], explain: '辛钦大数定律在独立同分布、期望存在的条件下，样本均值依概率收敛于期望。',
    source: 'original'
  }
]
