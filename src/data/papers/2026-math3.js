const P = 'paper-2026-math3'
const Y = 2026
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2026-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2026 考研数学（三）真题',
  ...extra
})

export const questions2026_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "曲线\ny=xex1\n（ ）",
    options: [{ key: "A", text: "无水平渐近线，无铅直渐近线" }, { key: "B", text: "有水平渐近线，有铅直渐近线" }, { key: "C", text: "无水平渐近线，有铅直渐近线" }, { key: "D", text: "有水平渐近线，无铅直渐近线" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 函数定义域为 x  = 0 。 对于 水平渐近线 ，考虑 x → ∞ 和 x → − ∞ ： 当 x → ∞ 时， e x 1 ​ → 1 ，故 y ∼ x → ∞ ； 当 x → − ∞ 时，同样 e x 1 ​ → 1 ， y ∼ x → − ∞ 。 因此 无水平渐近线 。 对于 铅直渐近线 ，考虑 x → 0 ： 当 x → 0 + 时，令 t = x 1 ​ → + ∞ ，则 y = t e t ​ → + ∞ ； 当 x → 0 − 时，令 t = x 1 ​ → − ∞ ，则 y = t e t ​ → 0 。 由于在 x = 0 处有一侧极限为无穷，故 x = 0 为 铅直渐近线 。 综上，曲线无水平渐近线，有一条铅直渐近线 x = 0 。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(z=z(x,y)\\) 由方程 \\(x-az=e^{y+az}\\) 确定，其中 \\(a\\) 是非零常数，则（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}-\\frac{\\partial z}{\\partial y}=\\frac1a\\)" }, { key: "B", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=\\frac1a\\)" }, { key: "C", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}-\\frac{\\partial z}{\\partial y}=-\\frac1a\\)" }, { key: "D", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=-\\frac1a\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 令\n\\[F(x,y,z)=x-az-e^{y+az}=0.\\]\n则\n\\[F_x=1,\\qquad F_y=-e^{y+az},\\qquad F_z=-a\\bigl(1+e^{y+az}\\bigr).\\]\n由隐函数求导公式，\n\\[z_x=-\\frac{F_x}{F_z}=\\frac{1}{a(1+e^{y+az})},\\qquad\nz_y=-\\frac{F_y}{F_z}=-\\frac{e^{y+az}}{a(1+e^{y+az})}.\\]\n因此\n\\[z_x-z_y=\\frac{1+e^{y+az}}{a(1+e^{y+az})}=\\frac1a.\\]\n故选 A。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数 \\(f(x)=\\int_1^{x^3}\\frac{e^t}{1+t^2}\\,dt,\\) \\(f\\) 的反函数为 \\(g\\)，则（ ）",
    options: [{ key: "A", text: "\\(g(0)=1,\\quad g'(0)=\\dfrac32e\\)" }, { key: "B", text: "\\(g(0)=1,\\quad g'(0)=\\dfrac{2}{3e}\\)" }, { key: "C", text: "\\(g(1)=0,\\quad g'(1)=\\dfrac32e\\)" }, { key: "D", text: "\\(g(1)=0,\\quad g'(1)=\\dfrac{2}{3e}\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 由\n\\[f(x)=\\int_1^{x^3}\\frac{e^t}{1+t^2}\\,dt\\]\n可知 \\(f(1)=0\\)，所以反函数 \\(g\\) 满足 \\(g(0)=1\\)。 对 \\(f\\) 求导时要同时考虑上限 \\(x^3\\) 的导数：\n\\[f'(x)=\\frac{e^{x^3}}{1+x^6}\\cdot 3x^2.\\]\n因此\n\\[f'(1)=\\frac{3e}{2}.\\]\n由反函数求导公式\n\\[g'(0)=\\frac{1}{f'(g(0))}=\\frac{1}{f'(1)}=\\frac{2}{3e}.\\]\n故选 B。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nt\n时刻某证券的交易单价为\np(t)\n，某机构持有该证券的份额为\nq(t)\n，若该机构在\n[0,T]\n持续购入一定份额该证券，则这些证券的平均购入价格为\n(　　)",
    options: [{ key: "A", text: "T 1 ​ ∫ 0 T ​ p ( t ) d t" }, { key: "B", text: "q ( T ) − q ( 0 ) 1 ​ ∫ 0 T ​ p ( t ) d t" }, { key: "C", text: "T 1 ​ ∫ 0 T ​ p ( t ) q ′ ( t ) d t" }, { key: "D", text: "q ( T ) − q ( 0 ) 1 ​ ∫ 0 T ​ p ( t ) q ′ ( t ) d t" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 平均购入价格定义为总购买金额除以总购买份额。在连续购买过程中，时刻 t 的购买单价为 p ( t ) ，购买份额的微元为 q ′ ( t ) d t ，因此购买金额的微元为 p ( t ) q ′ ( t ) d t 。总购买金额为积分 ∫ 0 T ​ p ( t ) q ′ ( t ) d t ，总购买份额为区间 [ 0 , T ] 内份额的增量 q ( T ) − q ( 0 ) 。故平均购入价格为 q ( T ) − q ( 0 ) ∫ 0 T ​ p ( t ) q ′ ( t ) d t ​ 对应选项 D。其他选项中，选项 A、B 未考虑购买份额的权重，选项 C 除以时间 T 而非总份额，均不符合平均购入价格的定义。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix} 1&0&1\\\\ 0&0&1\\\\ 1&1&3\\\\ 1&1&1 \\end{pmatrix},\\;C=\\begin{pmatrix} 2&0\\\\ 1&1\\\\ 1&1\\\\ a&b \\end{pmatrix}.\\)若存在矩阵 \\(B\\) 满足 \\(AB=C\\)，则（ ）",
    options: [{ key: "A", text: "\\(a=-1,\\ b=-1\\)" }, { key: "B", text: "\\(a=2,\\ b=2\\)" }, { key: "C", text: "\\(a=-1,\\ b=2\\)" }, { key: "D", text: "\\(a=2,\\ b=-1\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 矩阵方程 A B = C 有解当且仅当 C 的每一列都是 A 的列向量的线性组合。设 B 为 3 × 2 矩阵，将方程按列分解为两个线性系统： A x = ​ 2 1 1 a ​ ​ 和 A y = ​ 0 1 1 b ​ ​ 。 对第一个系统的增广矩阵进行行简化： ​ 1 0 1 1 ​ 0 0 1 1 ​ 1 1 3 1 ​ 2 1 1 a ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 1 2 1 0 ​ 2 − 1 1 a + 1 ​ ​ 解得 a = − 1 时系统相容。 对第二个系统的增广矩阵进行行简化： ​ 1 0 1 1 ​ 0 0 1 1 ​ 1 1 3 1 ​ 0 1 1 b ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 1 2 1 0 ​ 0 1 1 b + 1 ​ ​ 解得 b = − 1 时系统相容。 因此，当 a = − 1 且 b = − 1 时，存在矩阵 B 满足 A B = C ，对应选项 A。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA\n为 3 阶非零矩阵，\nA∗\n为\nA\n的伴随矩阵。若\nA∗=−2A\n，则\nA2=\n（　　）",
    options: [{ key: "A", text: "​ − 4 0 0 ​ 0 − 4 0 ​ 0 0 − 4 ​ ​" }, { key: "B", text: "​ − 4 0 0 ​ 0 − 4 0 ​ 0 0 4 ​ ​" }, { key: "C", text: "​ − 4 0 0 ​ 0 4 0 ​ 0 0 4 ​ ​" }, { key: "D", text: "​ 4 0 0 ​ 0 4 0 ​ 0 0 4 ​ ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 由伴随矩阵性质， A A ∗ = ( det A ) I 。将 A ∗ = − 2 A 代入得 A ( − 2 A ) = − 2 A 2 = ( det A ) I , 故 A 2 = − 2 1 ​ ( det A ) I . 对 A ∗ = − 2 A 两边取行列式，有 det ( A ∗ ) = det ( − 2 A ) . 对于 3 阶矩阵， det ( A ∗ ) = ( det A ) 2 ，且 det ( − 2 A ) = ( − 2 ) 3 det A = − 8 det A ，因此 ( det A ) 2 = − 8 det A , 即 det A ( det A + 8 ) = 0. 因 A 非零且由选项知 A 2 非零，故 det A  = 0 ，解得 det A = − 8. 代入 A 2 = − 2 1 ​ ( det A ) I 得 A 2 = − 2 1 ​ × ( − 8 ) I = 4 I , 即对角矩阵 ​ 4 0 0 ​ 0 4 0 ​ 0 0 4 ​ ​ , 对应选项 D。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 3 阶矩阵 \\(A,B\\) 满足 \\(AB+BA=A^2+B^2,\\) 且 \\(A\\ne B\\)，则下列结论中错误的是（ ）",
    options: [{ key: "A", text: "\\((A-B)^3=O\\)" }, { key: "B", text: "\\(A-B\\) 只有零特征值" }, { key: "C", text: "\\(A,B\\) 不能都是对角矩阵" }, { key: "D", text: "\\(A-B\\) 只有一个线性无关的特征向量" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 由\n\\[AB+BA=A^2+B^2\\]\n移项得\n\\[(A-B)^2=A^2-AB-BA+B^2=O.\\]\n又因 \\(A\\ne B\\)，故 \\(M=A-B\\ne O\\)，且 \\(M^2=O\\)。 A：由 \\(M^2=O\\) 立即有 \\(M^3=O\\)，正确。 B：幂零矩阵的特征值全为 0，正确。 C：若 \\(A,B\\) 都是对角矩阵，则 \\(M=A-B\\) 也是对角矩阵；由 \\(M^2=O\\) 可知其每个对角元的平方都为 0，从而 \\(M=O\\)，与 \\(A\\ne B\\) 矛盾。因此 C 正确。 D：由 \\(M^2=O\\) 有 \\(\\operatorname{Im}M\\subseteq\\ker M\\)，所以 \\(\\operatorname{rank}M\\le\\operatorname{nullity}M\\)。又 \\(M\\) 是 3 阶非零矩阵，故 \\(\\operatorname{rank}M=1\\)，\\(\\operatorname{nullity}M=2\\)。于是特征值 0 的特征子空间维数为 2，即有两个线性无关的特征向量。因此“只有一个线性无关的特征向量”错误。 故错误的是 D。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nx\n和\ny\n独立同分布，\nx\n概率密度为\n\nf(x)={(1+x)21,0,x>0x≤0,\n\n则\nP{XY≤1}=\n（　　）",
    options: [{ key: "A", text: "4 3 ​" }, { key: "B", text: "2 1 ​" }, { key: "C", text: "3 1 ​" }, { key: "D", text: "6 1 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 由于 X 与 Y 独立同分布，其联合概率密度函数为 f ( x ) f ( y ) = ( 1 + x ) 2 1 ​ ⋅ ( 1 + y ) 2 1 ​ , x > 0 , y > 0. 计算概率 P ( X Y ≤ 1 ) = x > 0 , y > 0 , x y ≤ 1 ∬ ​ f ( x ) f ( y ) d x d y . 先对 y 积分：对固定的 x > 0 ，当 0 < y ≤ 1/ x 时， ∫ 0 1/ x ​ ( 1 + y ) 2 1 ​ d y = − 1 + y 1 ​ ​ 0 1/ x ​ = 1 − 1 + 1/ x 1 ​ = 1 + x 1 ​ . 再对 x 积分： ∫ 0 ∞ ​ 1 + x 1 ​ ⋅ ( 1 + x ) 2 1 ​ d x = ∫ 0 ∞ ​ ( 1 + x ) 3 1 ​ d x = − 2 ( 1 + x ) 2 1 ​ ​ 0 ∞ ​ = 2 1 ​ . 因此所求概率为 2 1 ​ ，对应选项 B。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX∼N(0,1)\n，随机变量\nY∼B(2,21)\n，且\nX\n与\nY\n独立，则\nXY\n与\nX+Y\n的相关系数为（　　）",
    options: [{ key: "A", text: "3 6 ​ ​" }, { key: "B", text: "2 2 ​ ​" }, { key: "C", text: "3 2 ​" }, { key: "D", text: "2 1 ​" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 首先，由 X ∼ N ( 0 , 1 ) 得 E [ X ] = 0 ， E [ X 2 ] = 1 ；由 Y ∼ B ( 2 , 2 1 ​ ) 得 E [ Y ] = 1 ， E [ Y 2 ] = 2 3 ​ ，且 X 与 Y 独立。相关系数 ρ = Var ( X Y ) ⋅ Var ( X + Y ) ​ Cov ( X Y , X + Y ) ​ 计算协方差： Cov ( X Y , X + Y ) = E [ X Y ( X + Y )] − E [ X Y ] E [ X + Y ] 由于 E [ X Y ] = E [ X ] E [ Y ] = 0 ， E [ X + Y ] = E [ X ] + E [ Y ] = 1 ，故 Cov ( X Y , X + Y ) = E [ X 2 Y + X Y 2 ] = E [ X 2 ] E [ Y ] + E [ X ] E [ Y 2 ] = 1 × 1 + 0 × 2 3 ​ = 1 计算方差： Var ( X + Y ) = Var ( X ) + Var ( Y ) = 1 + 2 1 ​ = 2 3 ​ Var ( X Y ) = E [ X 2 Y 2 ] − ( E [ X Y ] ) 2 = E [ X 2 ] E [ Y 2 ] − 0 = 1 × 2 3 ​ = 2 3 ​ 因此， ρ = 2 3 ​ × 2 3 ​ ​ 1 ​ = 2 3 ​ 1 ​ = 3 2 ​"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n的概率分布为\nP{X=k}=2k+11+3k1\n（\nk=1,2,…\n），则对于正整数\nm\n、\nn\n有（　　）",
    options: [{ key: "A", text: "P { X > m + n ∣ X > m } = P { X > m }" }, { key: "B", text: "P { X > m + n ∣ X > m } = P { X > n }" }, { key: "C", text: "P { X > m + n ∣ X > m } > P { X > m }" }, { key: "D", text: "P { X > m + n ∣ X > m } > P { X > n }" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 首先，计算 P { X > k } 对于正整数 k 。由分布 P { X = k } = 2 k + 1 1 ​ + 3 k 1 ​ 可得： P { X > k } = j = k + 1 ∑ ∞ ​ ( 2 j + 1 1 ​ + 3 j 1 ​ ) = 2 k + 1 1 ​ + 2 ⋅ 3 k 1 ​ . 条件概率 P { X > m + n ∣ X > m } = P { X > m } P { X > m + n } ​ ，代入表达式： P { X > m + n ∣ X > m } = 2 m + 1 1 ​ + 2 ⋅ 3 m 1 ​ 2 m + n + 1 1 ​ + 2 ⋅ 3 m + n 1 ​ ​ = a + b a ⋅ 2 − n + b ⋅ 3 − n ​ , 其中 a = 2 m + 1 1 ​ , b = 2 ⋅ 3 m 1 ​ 。由于 b a ​ = ( 2 3 ​ ) m > 1 ，有 a + b a ​ > 2 1 ​ 。因此上式是 2 − n 和 3 − n 的加权平均，且较大权重赋予较大的 2 − n 。而 P { X > n } = 2 n + 1 1 ​ + 2 ⋅ 3 n 1 ​ = 2 1 ​ 2 − n + 2 1 ​ 3 − n 是等权重平均。比较两者： a + b a 2 − n + b 3 − n ​ − ( 2 1 ​ 2 − n + 2 1 ​ 3 − n ) = ( a + b a ​ − 2 1 ​ ) ( 2 − n − 3 − n ) > 0 , 因为 a + b a ​ > 2 1 ​ 且 2 − n > 3 − n 。故 P { X > m + n ∣ X > m } > P { X > n } 对所有正整数 m , n 成立。 对于其他选项：A 和 B 要求等式成立，但由表达式依赖 m 可知不成立；C 要求大于 P { X > m } ，但当 n 较大时可能不成立，例如 m = 1 , n = 2 时 P { X > 3 ∣ X > 1 } ≈ 0.1944 < P { X > 1 } ≈ 0.4167 。因此 D 正确。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "∫01x(x−1)(x−21)dx=\n_________________________.",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 首先，将被积函数展开为多项式： x ( x − 1 ) ( x − 2 1 ​ ) = ( x 2 − x ) ( x − 2 1 ​ ) = x 3 − 2 1 ​ x 2 − x 2 + 2 1 ​ x = x 3 − 2 3 ​ x 2 + 2 1 ​ x 然后计算定积分： ∫ 0 1 ​ ( x 3 − 2 3 ​ x 2 + 2 1 ​ x ) d x = [ 4 x 4 ​ − 2 3 ​ ⋅ 3 x 3 ​ + 2 1 ​ ⋅ 2 x 2 ​ ] 0 1 ​ = [ 4 x 4 ​ − 2 1 ​ x 3 + 4 1 ​ x 2 ] 0 1 ​ 代入上下限： F ( 1 ) = 4 1 ​ − 2 1 ​ + 4 1 ​ = 0 , F ( 0 ) = 0 因此，积分结果为： F ( 1 ) − F ( 0 ) = 0",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "limx→0x1(sinx1+x2−tanx1)=\n_________________________.",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 首先化简原式：由 tan x = c o s x s i n x ​ 得 t a n x 1 ​ = s i n x c o s x ​ ，于是 x 1 ​ ( sin x 1 + x 2 ​ ​ − tan x 1 ​ ) = x 1 ​ ⋅ sin x 1 + x 2 ​ − cos x ​ = x sin x 1 + x 2 ​ − cos x ​ . 当 x → 0 时，分子和分母均趋于0，为 0 0 ​ 型极限，可用泰勒展开或洛必达法则求解。 方法一（泰勒展开）：\n在 x = 0 处展开， 1 + x 2 ​ = 1 + 2 1 ​ x 2 − 8 1 ​ x 4 + O ( x 6 ) , cos x = 1 − 2 x 2 ​ + 24 x 4 ​ + O ( x 6 ) , sin x = x − 6 x 3 ​ + O ( x 5 ) . 代入得 1 + x 2 ​ − cos x = ( 1 + 2 x 2 ​ − 8 x 4 ​ ) − ( 1 − 2 x 2 ​ + 24 x 4 ​ ) + O ( x 6 ) = x 2 − 6 x 4 ​ + O ( x 6 ) , x sin x = x ( x − 6 x 3 ​ + O ( x 5 ) ) = x 2 − 6 x 4 ​ + O ( x 6 ) . 因此， x sin x 1 + x 2 ​ − cos x ​ = x 2 − 6 x 4 ​ + O ( x 6 ) x 2 − 6 x 4 ​ + O ( x 6 ) ​ = 1 − 6 x 2 ​ + O ( x 4 ) 1 − 6 x 2 ​ + O ( x 4 ) ​ → 1 ( x → 0 ) . 方法二（洛必达法则）：\n对分子分母分别求导： d x d ​ ( 1 + x 2 ​ − cos x ) = 1 + x 2 ​ x ​ + sin x , d x d ​ ( x sin x ) = sin x + x cos x . 所以 x → 0 lim ​ x sin x 1 + x 2 ​ − cos x ​ = x → 0 lim ​ sin x + x cos x 1 + x 2 ​ x ​ + sin x ​ . 此极限仍为 0 0 ​ 型，可再次使用洛必达法则，或直接化简。将分子分母同除以 x ： x → 0 lim ​ x s i n x ​ + cos x 1 + x 2 ​ 1 ​ + x s i n x ​ ​ = 1 + 1 1 + 1 ​ = 1. 故原极限值为1。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-009', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(p\\) 为常数，若反常积分 \\(\\int_0^{+\\infty}\\frac{\\arctan x}{x^p(x+1)}\\,dx\\) 收敛，则 \\(p\\) 的取值范围是______。",
    answerText: "】 0 < p < 2 【",
    referenceAnswer: "【答案】 0 < p < 2 【解析】 考虑反常积分 ∫ 0 + ∞ ​ x p ( x + 1 ) a r c t a n x ​ d x ，它有两个反常点： x = 0 和 x = + ∞ 。需分别讨论在这两点附近的收敛性。 在 x = 0 附近，当 x → 0 + 时， arctan x ∼ x ，且 x + 1 ∼ 1 ，因此被积函数满足 x p ( x + 1 ) a r c t a n x ​ ∼ x p x ​ = x 1 − p 。积分在 0 附近收敛当且仅当 1 − p > − 1 ，即 p < 2 。 在 x → + ∞ 时， arctan x → 2 π ​ ，且 x + 1 ∼ x ，因此被积函数满足 x p ( x + 1 ) a r c t a n x ​ ∼ x p + 1 π /2 ​ 。积分在无穷远处收敛当且仅当 p + 1 > 1 ，即 p > 0 。 原积分收敛需要两个反常点处同时收敛，因此 p 的取值范围为 0 < p < 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "微分方程\ny′′−2y′=ex\n满足条件\ny(0)=1,y′(0)=1\n的解为\ny=\n_________________________.",
    answerText: "】 y = 1 + e 2 x − e x 【",
    referenceAnswer: "【答案】 y = 1 + e 2 x − e x 【解析】 首先求解齐次方程 y ′′ − 2 y ′ = 0 。特征方程为 r 2 − 2 r = 0 ，解得 r = 0 或 r = 2 ，齐次解为 y h ​ = C 1 ​ + C 2 ​ e 2 x 。 对于非齐次项 e x ，由于 e x 不是齐次解的一部分，设特解为 y p ​ = A e x 。代入原方程得 A e x − 2 A e x = e x 即 − A e x = e x 解得 A = − 1 ，特解为 y p ​ = − e x 。 通解为 y = C 1 ​ + C 2 ​ e 2 x − e x 应用初始条件 y ( 0 ) = 1 和 y ′ ( 0 ) = 1 。 由 y ( 0 ) = C 1 ​ + C 2 ​ − 1 = 1 得 C 1 ​ + C 2 ​ = 2 ； 由 y ′ = 2 C 2 ​ e 2 x − e x 和 y ′ ( 0 ) = 2 C 2 ​ − 1 = 1 得 C 2 ​ = 1 ，代入得 C 1 ​ = 1 。 因此特解为 y = 1 + e 2 x − e x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix} 1&b&-1\\\\ a+2&3&-3a \\end{pmatrix}.\\)若二次型 \\(x^T(AA^T)x\\) 的规范形为 \\(y_1^2\\)，则 \\(a+b=\\)______。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 二次型 x T ( A A T ) x 的规范形为 y 1 2 ​ ，意味着矩阵 B = A A T 的秩为 1 且正惯性指数为 1，即 B 半正定且秩为 1。由于 rank ( B ) = rank ( A ) ，故 A 的秩也为 1。矩阵 A = ( 1 a + 2 ​ b 3 ​ − 1 − 3 a ​ ) 秩为 1 当且仅当其行成比例，即存在常数 t 使得： a + 2 = t ⋅ 1 , 3 = t ⋅ b , − 3 a = t ⋅ ( − 1 ) . 由第一式得 t = a + 2 ，代入第三式得 − 3 a = − ( a + 2 ) ，解得 a = 1 。进而 t = 3 ，代入第二式得 3 = 3 b ，故 b = 1 。因此 a + b = 2 。验证：当 a = 1 , b = 1 时， A = ( 1 3 ​ 1 3 ​ − 1 − 3 ​ ) 行成比例，秩为 1，计算 B = A A T = ( 3 9 ​ 9 27 ​ ) ，其特征值为 0 和 30，规范形为 y 1 2 ​ ，符合条件。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n服从参数为1的泊松分布，随机变量\nY\n服从参数为3的泊松分布，\nX\n与\nY−X\n相互独立，则\nE(XY)=\n____________。",
    answerText: "】 4 【",
    referenceAnswer: "【答案】 4 【解析】 由题意， X ∼ Poisson ( 1 ) ，故 E ( X ) = 1 ， E ( X 2 ) = Var ( X ) + [ E ( X ) ] 2 = 1 + 1 2 = 2 。 Y ∼ Poisson ( 3 ) ，故 E ( Y ) = 3 。 已知 X 与 Y − X 相互独立，因此有： E ( X Y ) = E [ X ( Y − X ) + X 2 ] = E [ X ( Y − X )] + E ( X 2 ) . 由于 X 与 Y − X 独立，故 E [ X ( Y − X )] = E ( X ) ⋅ E ( Y − X ) 。 计算 E ( Y − X ) = E ( Y ) − E ( X ) = 3 − 1 = 2 ，代入得： E [ X ( Y − X )] = 1 × 2 = 2. 因此， E ( X Y ) = 2 + 2 = 4.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数\nf(x)\n满足\n\nf(x)=(2−x)21−∫01f(x)dx,\n\n将\nf(x)\n展开成\nx\n的幂级数。",
    referenceAnswer: "【答案】 f ( x ) = n = 1 ∑ ∞ ​ 2 n + 2 n + 1 ​ x n . 【解析】 设 C = ∫ 0 1 ​ f ( x ) d x ，则原方程化为 f ( x ) = ( 2 − x ) 2 1 ​ − C 。两边在 [ 0 , 1 ] 上积分得 C = ∫ 0 1 ​ ( 2 − x ) 2 1 ​ d x − ∫ 0 1 ​ C d x . 计算积分： ∫ 0 1 ​ ( 2 − x ) 2 1 ​ d x = [ 2 − x 1 ​ ] 0 1 ​ = 1 1 ​ − 2 1 ​ = 2 1 ​ , ∫ 0 1 ​ C d x = C . 代入得 C = 2 1 ​ − C ，解得 C = 4 1 ​ 。于是 f ( x ) = ( 2 − x ) 2 1 ​ − 4 1 ​ . 将 ( 2 − x ) 2 1 ​ 展开为幂级数。注意到 ( 2 − x ) 2 1 ​ = 4 1 ​ ⋅ ( 1 − 2 x ​ ) 2 1 ​ , 利用已知展开式 ( 1 − u ) 2 1 ​ = ∑ n = 0 ∞ ​ ( n + 1 ) u n （ ∣ u ∣ < 1 ），令 u = 2 x ​ 得 ( 1 − 2 x ​ ) 2 1 ​ = n = 0 ∑ ∞ ​ ( n + 1 ) ( 2 x ​ ) n = n = 0 ∑ ∞ ​ 2 n n + 1 ​ x n . 因此， ( 2 − x ) 2 1 ​ = 4 1 ​ n = 0 ∑ ∞ ​ 2 n n + 1 ​ x n = n = 0 ∑ ∞ ​ 2 n + 2 n + 1 ​ x n . 代入 f ( x ) 得 f ( x ) = n = 0 ∑ ∞ ​ 2 n + 2 n + 1 ​ x n − 4 1 ​ . 当 n = 0 时，常数项为 4 1 ​ ，与减去的 4 1 ​ 相消，故 f ( x ) = n = 1 ∑ ∞ ​ 2 n + 2 n + 1 ​ x n . 该幂级数的收敛半径为 ∣ x ∣ < 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知函数 \\(g(x)\\) 连续，\\(f(x)=\\int_0^{x^2}g(xt)\\,dt.\\) 求 \\(f'(x)\\) 的表达式，并判断 \\(f'(x)\\) 在 \\(x=0\\) 处的连续性。",
    referenceAnswer: "【答案】 f ′ ( x ) = ⎩ ⎨ ⎧ ​ 3 x g ( x 3 ) − x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s , 0 , ​ x  = 0 x = 0 ​ 且 f ′ ( x ) 在 x = 0 处连续。 【解析】 已知函数 g ( x ) 连续， f ( x ) = ∫ 0 x 2 ​ g ( x t ) d t 。 先求 f ′ ( x ) 的表达式。 当 x = 0 时， f ( 0 ) = ∫ 0 0 ​ g ( 0 ) d t = 0 ，由导数定义： f ′ ( 0 ) = x → 0 lim ​ x f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x 1 ​ ∫ 0 x 2 ​ g ( x t ) d t . 由于 g 连续，对任意 x ，存在 ξ ∈ [ 0 , x 2 ] 使得 ∫ 0 x 2 ​ g ( x t ) d t = g ( x ξ ) x 2 （积分中值定理）。则 x f ( x ) ​ = g ( x ξ ) x , 当 x → 0 时， ∣ x ξ ∣ ≤ ∣ x ∣ 3 → 0 ，故 g ( x ξ ) → g ( 0 ) ，所以 g ( x ξ ) x → 0 ，即 f ′ ( 0 ) = 0 。 当 x  = 0 时，令 u = x t ，则 t = x u ​ ， d t = x d u ​ 。当 t = 0 时 u = 0 ；当 t = x 2 时 u = x ⋅ x 2 = x 3 。于是 f ( x ) = ∫ 0 x 3 ​ g ( u ) ⋅ x d u ​ = x 1 ​ ∫ 0 x 3 ​ g ( s ) d s . 令 G ( v ) = ∫ 0 v ​ g ( s ) d s ，则 f ( x ) = x G ( x 3 ) ​ 。求导得： f ′ ( x ) = x 2 3 x 2 g ( x 3 ) ⋅ x − G ( x 3 ) ​ = 3 x g ( x 3 ) − x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s . 再判断 f ′ ( x ) 在 x = 0 处的连续性。需证 x → 0 lim ​ f ′ ( x ) = f ′ ( 0 ) = 0 。 计算极限： x → 0 lim ​ f ′ ( x ) = x → 0 lim ​ [ 3 x g ( x 3 ) − x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s ] . 由于 g 连续，当 x → 0 时 x 3 → 0 ，故 g ( x 3 ) → g ( 0 ) ，所以 3 x g ( x 3 ) → 0 。 对积分项，由积分中值定理，存在 θ ∈ [ 0 , x 3 ] 使得 ∫ 0 x 3 ​ g ( s ) d s = g ( θ ) x 3 ，则 x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s = g ( θ ) x → 0 ( x → 0 ) . 因此 x → 0 lim ​ f ′ ( x ) = 0 ，与 f ′ ( 0 ) 相等，故 f ′ ( x ) 在 x = 0 处连续。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分10分）\n\n求\nf(x,y)=(2x2−y2)ex\n的极值。",
    referenceAnswer: "【答案】 函数 f ( x , y ) = ( 2 x 2 − y 2 ) e x 在点 ( − 2 , 0 ) 处取得极大值 8 e − 2 ，在点 ( 0 , 0 ) 处无极值（鞍点）。 【解析】 首先，求函数的一阶偏导数： f x ​ = ∂ x ∂ ​ [ ( 2 x 2 − y 2 ) e x ] = e x ( 2 x 2 + 4 x − y 2 ) , f y ​ = ∂ y ∂ ​ [ ( 2 x 2 − y 2 ) e x ] = − 2 y e x . 令偏导数为零，由于 e x > 0 ，得方程组： 2 x 2 + 4 x − y 2 = 0 , − 2 y = 0. 由第二式得 y = 0 ，代入第一式得 2 x 2 + 4 x = 0 ，解得 x = 0 或 x = − 2 。故临界点为 ( 0 , 0 ) 和 ( − 2 , 0 ) 。 其次，求二阶偏导数以判断临界点类型： f xx ​ = ∂ x ∂ ​ f x ​ = e x ( 2 x 2 + 8 x + 4 − y 2 ) , f yy ​ = ∂ y ∂ ​ f y ​ = − 2 e x , f x y ​ = ∂ y ∂ ​ f x ​ = − 2 y e x . 计算判别式 D = f xx ​ f yy ​ − ( f x y ​ ) 2 。 在点 ( 0 , 0 ) 处： f xx ​ = 4 , f yy ​ = − 2 , f x y ​ = 0 , D = 4 × ( − 2 ) − 0 2 = − 8 < 0. 故 ( 0 , 0 ) 是鞍点，不是极值点。 在点 ( − 2 , 0 ) 处： f xx ​ f yy ​ f x y ​ D ​ = e − 2 ( 8 − 16 + 4 ) = − 4 e − 2 < 0 , = − 2 e − 2 , = 0 , = ( − 4 e − 2 ) × ( − 2 e − 2 ) − 0 2 = 8 e − 4 > 0. ​ 由于 D > 0 且 f xx ​ < 0 ，故 ( − 2 , 0 ) 是极大值点。极大值为： f ( − 2 , 0 ) = ( 2 × ( − 2 ) 2 − 0 2 ) e − 2 = 8 e − 2 . 因此，函数有极大值 8 e − 2 ，在点 ( − 2 , 0 ) 处取得。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设平面区域\nD={(x,y)∣0≤x≤1,0≤y≤1}\n，计算二重积分\n\n∬D(1+x2+y2)23ydxdy.",
    referenceAnswer: "【答案】 2 1 ​ ( ln 3 ​ + 1 3 ​ − 1 ​ − ln 2 ​ + 1 2 ​ − 1 ​ ) 【解析】 计算二重积分 I = ∬ D ​ ( 1 + x 2 + y 2 ) 2 3 ​ y ​ d x d y , 其中积分区域 D = {( x , y ) ∣ 0 ≤ x ≤ 1 , 0 ≤ y ≤ 1 } 。 化为累次积分 I = ∫ 0 1 ​ ( ∫ 0 1 ​ ( 1 + x 2 + y 2 ) 2 3 ​ y ​ d x ) d y . 首先计算内层积分。对固定的 y ， ∫ 0 1 ​ ( 1 + x 2 + y 2 ) 2 3 ​ y ​ d x = y ∫ 0 1 ​ ( 1 + y 2 + x 2 ) 2 3 ​ 1 ​ d x . 令 a 2 = 1 + y 2 ，利用积分公式 ∫ ( a 2 + x 2 ) 2 3 ​ d x ​ = a 2 a 2 + x 2 ​ x ​ + C , 得到 ∫ 0 1 ​ ( 1 + y 2 + x 2 ) 2 3 ​ 1 ​ d x = [ ( 1 + y 2 ) 1 + y 2 + x 2 ​ x ​ ] 0 1 ​ = ( 1 + y 2 ) 2 + y 2 ​ 1 ​ . 于是内层积分为 ( 1 + y 2 ) 2 + y 2 ​ y ​ . 代入外积分得到 I = ∫ 0 1 ​ ( 1 + y 2 ) 2 + y 2 ​ y ​ d y . 令代换 u = 2 + y 2 ​ ，则 u 2 = 2 + y 2 ， y 2 = u 2 − 2 ，且 y d y = u d u 。\n积分限变化： y = 0 时 u = 2 ​ ， y = 1 时 u = 3 ​ 。于是 I = ∫ 2 ​ 3 ​ ​ ( u 2 − 1 ) u u ​ d u = ∫ 2 ​ 3 ​ ​ u 2 − 1 1 ​ d u . 将被积函数分解为部分分式 u 2 − 1 1 ​ = 2 ( u − 1 ) 1 ​ − 2 ( u + 1 ) 1 ​ , 所以 ∫ u 2 − 1 1 ​ d u = 2 1 ​ ln ​ u + 1 u − 1 ​ ​ + C . 因此 I = [ 2 1 ​ ln ( u + 1 u − 1 ​ ) ] 2 ​ 3 ​ ​ = 2 1 ​ [ ln ( 3 ​ + 1 3 ​ − 1 ​ ) − ln ( 2 ​ + 1 2 ​ − 1 ​ ) ] . 此即为所求积分的结果。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n已知向量组\n\nα1=10−1−1,α2=1−10−2,α3=0−11−1,α4=01−11,\n\n记\nA=(α1,α2,α3,α4)\n，\nG=(α1,α2)\n。\n\n(1) 证明：\nα1,α2\n是\nα1,α2,α3,α4\n的极大线性无关组。\n\n(2) 求矩阵\nH\n使得\nA=GH\n，并求\nA10\n。",
    referenceAnswer: "【答案】 (1) 略 (2) H = ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) ， A 10 = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ − 9 − 1 10 8 ​ 9 1 − 10 − 8 ​ ​ 【解析】 (1) 首先证明 α 1 ​ , α 2 ​ 线性无关。设 k 1 ​ α 1 ​ + k 2 ​ α 2 ​ = 0 ，解得 k 1 ​ = k 2 ​ = 0 ，故线性无关。其次，解线性方程组得 α 3 ​ = − α 1 ​ + α 2 ​ ， α 4 ​ = α 1 ​ − α 2 ​ ，即 α 3 ​ , α 4 ​ 可由 α 1 ​ , α 2 ​ 线性表示，因此 α 1 ​ , α 2 ​ 是极大线性无关组。 (2) 由线性表示关系， α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ 在基 α 1 ​ , α 2 ​ 下的坐标分别为 ( 1 , 0 ) T , ( 0 , 1 ) T , ( − 1 , 1 ) T , ( 1 , − 1 ) T ，故 H = ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) . 由 A = G H ，得 A 10 = G ( H G ) 9 H 。计算 H G = ( 1 0 ​ − 1 1 ​ ) , 记 M = H G ，则 M = I + N ，其中 N = ( 0 0 ​ − 1 0 ​ ) 满足 N 2 = 0 ，故 M 9 = ( I + N ) 9 = I + 9 N = ( 1 0 ​ − 9 1 ​ ) . 计算 M 9 H = ( 1 0 ​ − 9 1 ​ − 10 1 ​ 10 − 1 ​ ) , 再与 G 相乘得 A 10 = G ( M 9 H ) = ​ 1 0 − 1 − 1 ​ 1 − 1 0 − 2 ​ ​ ( 1 0 ​ − 9 1 ​ − 10 1 ​ 10 − 1 ​ ) = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ − 9 − 1 10 8 ​ 9 1 − 10 − 8 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n假设某种元件寿命服从指数分布，其均值\nθ\n是未知参数。为估计\nθ\n，取\nn\n个这种元件同时做寿命实验，试验直到出现\nk\n（\n1≤k≤n\n）个元件失效时停止。\n\n(1) 若\nk=1\n，失效元件寿命记为\nT\n，\n(i) 求\nT\n的概率密度；\n(ii) 确定\na\n，使\nθ^=aT\n是\nθ\n的无偏估计，并求\nD(θ^)\n；\n\n(2) 已知\nk\n个失效元件寿命值分别为\nt1,t2,⋯,tk\n，且\nt1≤t2≤⋯≤tk\n，似然函数为\n\nL(θ)=θk1e−θ1[∑i=1kti+(n−k)tk],\n\n求\nθ\n的最大似然估计值。",
    referenceAnswer: "【答案】 (1) (i) T 的概率密度为 f T ​ ( t ) = θ n ​ e − θ n ​ t , t ≥ 0 (ii) 取 a = n ，此时 θ ^ = n T 是 θ 的无偏估计，且方差为 D ( θ ^ ) = θ 2 (2) θ 的最大似然估计值为 θ ^ = k 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] 【解析】 (1) (i) 元件寿命服从指数分布，均值为 θ ，即密度函数为 f ( t ) = θ 1 ​ e − t / θ , t ≥ 0 取 n 个独立元件进行试验，直到第一个元件失效，失效时间 T 为样本最小值。指数分布具有无记忆性，因此 T 仍服从指数分布：其生存函数为 P ( T > t ) = [ P ( X > t ) ] n = e − n t / θ 故累积分布函数为 F T ​ ( t ) = 1 − e − n t / θ 密度函数为 f T ​ ( t ) = d t d ​ F T ​ ( t ) = θ n ​ e − θ n ​ t , t ≥ 0 (ii) 计算 T 的期望： E ( T ) = ∫ 0 ∞ ​ t ⋅ θ n ​ e − θ n ​ t d t = n θ ​ 要使 θ ^ = a T 为无偏估计，需满足 E ( θ ^ ) = a E ( T ) = a ⋅ n θ ​ = θ 解得 a = n 。 计算 T 的方差：先求 E ( T 2 ) = ∫ 0 ∞ ​ t 2 ⋅ θ n ​ e − θ n ​ t d t = n 2 2 θ 2 ​ 因此 D ( T ) = E ( T 2 ) − [ E ( T ) ] 2 = n 2 2 θ 2 ​ − ( n θ ​ ) 2 = n 2 θ 2 ​ 于是 D ( θ ^ ) = D ( n T ) = n 2 D ( T ) = n 2 ⋅ n 2 θ 2 ​ = θ 2 (2) 给定似然函数 L ( θ ) = θ k 1 ​ e − θ 1 ​ [ ∑ i = 1 k ​ t i ​ + ( n − k ) t k ​ ] 取对数似然函数： ln L ( θ ) = − k ln θ − θ 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] 对 θ 求导并令其为零： d θ d ln L ( θ ) ​ = − θ k ​ + θ 2 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] = 0 解得 θ = k 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] 此即为 θ 的最大似然估计值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2026_math3 = {
  id: P, year: Y,
  title: '2026 年全国硕士研究生招生考试 数学（三）',
  short: '2026 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2026_math3.length,
  qids: questions2026_math3.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
