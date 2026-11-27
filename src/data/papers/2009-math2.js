const P = 'paper-2009-math2'
const Y = 2009
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2009-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2009 考研数学（二）真题',
  ...extra
})

export const questions2009_math2 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 f(x)=x−x3sinπxf(x)=\\frac{x-x^3}{\\sin \\pi x} 的可去间断点的个数为（ ）",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2" }, { key: "C", text: "3" }, { key: "D", text: "无穷多个" }],
    answer: ["C"],
    explain: "正确答案： C 函数 f ( x ) = s i n π x x − x 3 ​ 在 x 取任意整数时均无定义，因此其间断点有无穷多个。可去间断点是指极限存在的点，应出现在 x − x 3 = 0 的解处，即 x 1 , 2 , 3 ​ = 0 , ± 1 。 计算各点极限如下： x → 0 lim ​ sin π x x − x 3 ​ = x → 0 lim ​ π cos π x 1 − 3 x 2 ​ = π 1 ​ x → 1 lim ​ sin π x x − x 3 ​ = x → 1 lim ​ π cos π x 1 − 3 x 2 ​ = π 2 ​ x → − 1 lim ​ sin π x x − x 3 ​ = x → − 1 lim ​ π cos π x 1 − 3 x 2 ​ = π 2 ​ 因此，可去间断点共有三个，分别为 0 、 1 和 − 1 。"
  }),
  base(2, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当 x→0x\\to0 时，f(x)=x−sinaxf(x)=x-\\sin ax 与 g(x)=x2ln(1−bx)g(x)=x^2\\ln(1-bx) 是等价无穷小，则（ ）",
    options: [{ key: "A", text: "a = 1 , b = − 1 6 a=1,\\ b=-\\frac16" }, { key: "B", text: "a = 1 , b = 1 6 a=1,\\ b=\\frac16" }, { key: "C", text: "a = − 1 , b = − 1 6 a=-1,\\ b=-\\frac16" }, { key: "D", text: "a = − 1 , b = 1 6 a=-1,\\ b=\\frac16" }],
    answer: ["A"],
    explain: "正确答案： A f ( x ) = x − sin ( a x ) ， g ( x ) = x 2 ln ( 1 − b x ) 为等价无穷小，则 x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ x 2 ln ( 1 − b x ) x − sin ( a x ) ​ = x → 0 lim ​ x 2 ⋅ ( − b x ) x − sin ( a x ) ​ . 使用洛必达法则： = x → 0 lim ​ − 3 b x 2 1 − a cos ( a x ) ​ . 再次使用洛必达法则： = x → 0 lim ​ − 6 b x a 2 sin ( a x ) ​ = x → 0 lim ​ − a 6 b ​ ⋅ a x a 2 sin ( a x ) ​ = − 6 b a 3 ​ = 1. 因此 a 3 = − 6 b ，故排除 B、C。 另外，极限 x → 0 lim ​ − 3 b x 2 1 − a cos ( a x ) ​ 存在，蕴含 1 − a cos ( a x ) → 0 当 x → 0 ，故 a = 1 ，排除 D。 所以本题选 A。"
  }),
  base(3, 'k-math-010', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 z=f(x,y)z=f(x,y) 的全微分为 dz=xdx+ydy,dz=x\\,dx+y\\,dy, 则点 (0,0)(0,0)（ ）",
    options: [{ key: "A", text: "不是 f ( x , y ) f(x,y) 的连续点" }, { key: "B", text: "不是 f ( x , y ) f(x,y) 的极值点" }, { key: "C", text: "是 f ( x , y ) f(x,y) 的极大值点" }, { key: "D", text: "是 f ( x , y ) f(x,y) 的极小值点" }],
    answer: ["D"],
    explain: "正确答案： D 由 d z = x d x + y d y 可得 ∂ x ∂ z ​ = x ， ∂ y ∂ z ​ = y 。 A = ∂ x 2 ∂ 2 z ​ = 1 , B = ∂ x ∂ y ∂ 2 z ​ = ∂ y ∂ x ∂ 2 z ​ = 0 , C = ∂ y 2 ∂ 2 z ​ = 1 在 ( 0 , 0 ) 处， ∂ x ∂ z ​ = 0 ， ∂ y ∂ z ​ = 0 。 A C − B 2 = 1 > 0 因此， ( 0 , 0 ) 是函数 z = f ( x , y ) 的一个极小值点。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 f(x,y)f(x,y) 连续，则 ∫12dx∫x2f(x,y)dy+∫12dy∫y4−yf(x,y)dx=\\int_1^2 dx\\int_x^2 f(x,y)\\,dy+\\int_1^2dy\\int_y^{4-y}f(x,y)\\,dx= （ ）",
    options: [{ key: "A", text: "∫ 1 2 d x ∫ 1 4 − x f ( x , y ) d y \\displaystyle \\int_1^2dx\\int_1^{4-x}f(x,y)\\,dy" }, { key: "B", text: "∫ 1 2 d x ∫ x 4 − x f ( x , y ) d y \\displaystyle \\int_1^2dx\\int_x^{4-x}f(x,y)\\,dy" }, { key: "C", text: "∫ 1 2 d y ∫ 1 4 − y f ( x , y ) d x \\displaystyle \\int_1^2dy\\int_1^{4-y}f(x,y)\\,dx" }, { key: "D", text: "∫ 1 2 d y ∫ y 2 f ( x , y ) d x \\displaystyle \\int_1^2dy\\int_y^2f(x,y)\\,dx" }],
    answer: ["C"],
    explain: "正确答案： C 给定积分表达式为： ∫ 1 2 ​ d x ∫ x 2 ​ f ( x , y ) d y + ∫ 1 2 ​ d y ∫ y 4 − y ​ f ( x , y ) d x 其积分区域分为两部分： D 1 ​ = {( x , y ) ∣ 1 ≤ x ≤ 2 , x ≤ y ≤ 2 } , D 2 ​ = {( x , y ) ∣ 1 ≤ y ≤ 2 , y ≤ x ≤ 4 − y } 将两个区域合并为一块： D = {( x , y ) ∣ 1 ≤ y ≤ 2 , 1 ≤ x ≤ 4 − y } 因此，二重积分可表示为： ∫ 1 2 ​ d y ∫ 1 4 − y ​ f ( x , y ) d x 故答案为 C。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若 f″(x)f''(x) 不变号，且曲线 y=f(x)y=f(x) 在点 (1,1)(1,1) 处的曲率圆为 x2+y2=2,x^2+y^2=2, 则函数 f(x)f(x) 在区间 (1,2)(1,2) 内（ ）",
    options: [{ key: "A", text: "有极值点，无零点" }, { key: "B", text: "无极值点，有零点" }, { key: "C", text: "有极值点，有零点" }, { key: "D", text: "无极值点，无零点" }],
    answer: ["B"],
    explain: "正确答案： B 由题意可知， f ( x ) 是一个凸函数，即 f ′′ ( x ) < 0 ，且在点 ( 1 , 1 ) 处的曲率为： ρ = ( 1 + ( y ′ ) 2 ) 2 3 ​ ∣ y ′′ ∣ ​ = 2 ​ 1 ​ 同时已知 f ′ ( 1 ) = − 1 ， f ′′ ( 1 ) = − 2 。 在区间 [ 1 , 2 ] 上， f ′ ( x ) ≤ f ′ ( 1 ) = − 1 < 0 ，说明 f ( x ) 在该区间上单调递减，没有极值点。 根据拉格朗日中值定理，存在 ζ ∈ ( 1 , 2 ) 使得： f ( 2 ) − f ( 1 ) = f ′ ( ζ ) < − 1 因此 f ( 2 ) < 0 ，而 f ( 1 ) = 1 > 0 。 由零点定理可知，在区间 [ 1 , 2 ] 上 f ( x ) 存在零点，故应选 (B)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 y=f(x)y=f(x) 在区间 [−1,3][-1,3] 上的图形如原卷所示，则函数 F(x)=∫0xf(t)dtF(x)=\\int_0^x f(t)\\,dt 的图形为（ ）",
    options: [{ key: "A", text: "（见题图 A）" }, { key: "B", text: "（见题图 B）" }, { key: "C", text: "（见题图 C）" }, { key: "D", text: "（见题图 D）" }],
    answer: ["D"],
    explain: "正确答案： D 当 x ∈ [ 0 , 1 ] 时， F ( x ) ≤ 0 且单调递减。 当 x ∈ [ 1 , 2 ] 时， F ( x ) 单调递增。 当 x ∈ [ 2 , 3 ] 时， F ( x ) 为常函数。 当 x ∈ [ − 1 , 0 ] 时， F ( x ) ≤ 0 为线性函数，且单调递增。 由于 F ( x ) 为连续函数，结合上述特点，可见正确选项为 D。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 A,BA,B 均为 2 阶矩阵，A*,B*A^*,B^* 分别为 A,BA,B 的伴随矩阵，若 |A|=2,|B|=3|A|=2,|B|=3，则分块矩阵 (OABO)\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix} 的伴随矩阵为（ ）",
    options: [{ key: "A", text: "( O 3 B * 2 A * O ) \\begin{pmatrix}O&3B^*\\\\2A^*&O\\end{pmatrix}" }, { key: "B", text: "( O 2 B * 3 A * O ) \\begin{pmatrix}O&2B^*\\\\3A^*&O\\end{pmatrix}" }, { key: "C", text: "( O 3 A * 2 B * O ) \\begin{pmatrix}O&3A^*\\\\2B^*&O\\end{pmatrix}" }, { key: "D", text: "( O 2 A * 3 B * O ) \\begin{pmatrix}O&2A^*\\\\3B^*&O\\end{pmatrix}" }],
    answer: ["B"],
    explain: "正确答案： B 根据 C C ∗ = ∣ C ∣ E ，若 C ∗ = ∣ C ∣ C − 1 ，则 C − 1 = ∣ C ∣ 1 ​ C ∗ 。 考虑分块矩阵 ( 0 B ​ A 0 ​ ) 的行列式为 ​ 0 B ​ A 0 ​ ​ = ( − 1 ) 2 × 2 ∣ A ∣∣ B ∣ = 2 × 3 = 6. 其伴随矩阵为 6 ( 0 A − 1 ​ B − 1 0 ​ ) = 6 ( 0 ∣ A ∣ 1 ​ A ∗ ​ ∣ B ∣ 1 ​ B ∗ 0 ​ ) = 6 ( 0 2 1 ​ A ∗ ​ 3 1 ​ B ∗ 0 ​ ) = ( 0 3 A ∗ ​ 2 B ∗ 0 ​ ) . 因此答案为 B。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 A,PA,P 均为 3 阶矩阵，PTP^T 为 PP 的转置矩阵，且 PTAP=(100010002).P^TAP=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}. 若 P=(α1,α2,α3)P=(\\alpha_1,\\alpha_2,\\alpha_3)，Q=(α1+α2,α2,α3)Q=(\\alpha_1+\\alpha_2,\\alpha_2,\\alpha_3)，则 QTAQQ^TAQ 为（ ）",
    options: [{ key: "A", text: "( 2 1 0 1 1 0 0 0 2 ) \\begin{pmatrix}2&1&0\\\\1&1&0\\\\0&0&2\\end{pmatrix}" }, { key: "B", text: "( 1 1 0 1 2 0 0 0 2 ) \\begin{pmatrix}1&1&0\\\\1&2&0\\\\0&0&2\\end{pmatrix}" }, { key: "C", text: "( 2 0 0 0 1 0 0 0 2 ) \\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}" }, { key: "D", text: "( 1 0 0 0 2 0 0 0 2 ) \\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&2\\end{pmatrix}" }],
    answer: ["A"],
    explain: "正确答案： A 设 Q = P E 12 ​ ( 1 ) ，其中 E 12 ​ ( 1 ) 为初等矩阵，则 Q ⊤ A Q ​ = [ P E 12 ​ ( 1 ) ] ⊤ A [ P E 12 ​ ( 1 ) ] = E 12 ⊤ ​ ( 1 ) [ P ⊤ A P ] E 12 ​ ( 1 ) = ​ 1 0 0 ​ 1 1 0 ​ 0 0 1 ​ ​ ⊤ ​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​ ​ 1 0 0 ​ 1 1 0 ​ 0 0 1 ​ ​ = ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​ ​ 1 0 0 ​ 1 1 0 ​ 0 0 1 ​ ​ = ​ 1 1 0 ​ 1 2 0 ​ 0 0 2 ​ ​ ​ 故答案为 A。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线{x=∫01−te−u2du,y=t2ln(2−t2)\\begin{cases} x=\\displaystyle\\int_0^{1-t}e^{-u^2}\\,du,\\\\[4pt] y=t^2\\ln(2-t^2) \\end{cases}在点 (0,0)(0,0) 处的切线方程为 ________。",
    answerText: "】 y = 2 x y=2x 。 【",
    referenceAnswer: "【答案】 y = 2 x y=2x 。 【解析】 在点 ( 0 , 0 ) (0,0) 处，由 x = ∫ 0 1 − t e − u 2 d u = 0 x=\\int_0^{1-t}e^{-u^2}\\,du=0 且被积函数恒正，得 t = 1 t=1 。又 d x d t = − e − ( 1 − t ) 2 , d y d t = 2 t ln ( 2 − t 2 ) − 2 t 3 2 − t 2 . \\frac{dx}{dt}=-e^{-(1-t)^2},\\qquad\n\\frac{dy}{dt}=2t\\ln(2-t^2)-\\frac{2t^3}{2-t^2}. 当 t = 1 t=1 时， d x d t = − 1 \\dfrac{dx}{dt}=-1 ， d y d t = − 2 \\dfrac{dy}{dt}=-2 ，所以 d y d x | t = 1 = − 2 − 1 = 2 . \\left.\\frac{dy}{dx}\\right|_{t=1}=\\frac{-2}{-1}=2. 故过 ( 0 , 0 ) (0,0) 的切线方程为 y = 2 x . y=2x.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知 ∫−∞+∞ek|x|dx=1,\\int_{-\\infty}^{+\\infty}e^{k|x|}\\,dx=1, 则 k=k= ________。",
    answerText: "】 k = − 2 【",
    referenceAnswer: "【答案】 k = − 2 【解析】 首先计算积分： 1 = ∫ − ∞ + ∞ ​ e k ∣ x ∣ d x = 2 ∫ 0 + ∞ ​ e k x d x 进一步计算： 2 ∫ 0 + ∞ ​ e k x d x = 2 b → + ∞ lim ​ k 1 ​ e k x ​ 0 b ​ 为使极限存在，需满足 k < 0 ，此时： 1 = 2 b → + ∞ lim ​ k 1 ​ ( e kb − 1 ) = − k 2 ​ 解得： k = − 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "limn→∞∫01e−xsinnxdx=\\lim_{n\\to\\infty}\\int_0^1e^{-x}\\sin nx\\,dx= ________。",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 令 I n ​ = ∫ 0 1 ​ e − x sin n x d x ，利用分部积分法可得： I n ​ = − n 2 + 1 n cos n x + sin n x ​ e − x ​ 0 1 ​ 则： n → ∞ lim ​ I n ​ = n → ∞ lim ​ ( − ( n 2 + 1 ) e n cos n + sin n ​ + n 2 + 1 n ​ ) = 0",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 y=y(x)y=y(x) 是由方程 xy+ey=x+1xy+e^y=x+1 确定的隐函数，则 d2ydx2|x=0=\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}= ________。",
    answerText: "】 -3 【",
    referenceAnswer: "【答案】 -3 【解析】 对方程两边求导得 y + x y ′ + e y y ′ = 1 。 当 x = 0 时，代入原方程得 0 + e y = 0 + 1 ，即 y = 0 。 此时 0 + 0 + e 0 y ′ = 1 ，解得 y ′ ( 0 ) = 1 。 再对 y + x y ′ + e y y ′ = 1 求导得： 2 y ′ + x y ′′ + ( y ′ ) 2 e y + y ′′ e y = 0 将 x = 0 、 y = 0 、 y ′ ( 0 ) = 1 代入得： 2 × 1 + 0 + 1 2 × 1 + y ′′ × 1 = 0 解得 y ′′ ( 0 ) = − 3 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 y=x2xy=x^{2x} 在区间 (0,1](0,1] 上的最小值为 ________。",
    answerText: "】 e − e 2 ​ 【",
    referenceAnswer: "【答案】 e − e 2 ​ 【解析】 函数 y = x 2 x = e 2 x l n x ，求导得 y ′ = e 2 x l n x ( 2 ln x + 2 ) = x 2 x ( 2 ln x + 2 ) 令 y ′ = 0 ，得 ln x = − 1 ，即 x = e 1 ​ 。 当 0 < x < e 1 ​ 时， ln x < − 1 ，因此 2 ln x + 2 < 0 ，即 y ′ < 0 ； 当 x > e 1 ​ 时， ln x > − 1 ，因此 2 ln x + 2 > 0 ，即 y ′ > 0 。 所以 x = e 1 ​ 为极小值点，最小值为 y ( e 1 ​ ) = ( e 1 ​ ) 2 × e 1 ​ = e − e 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 α,β\\alpha,\\beta 为 3 维列向量，βT\\beta^T 为 β\\beta 的转置，若矩阵 αβT\\alpha\\beta^T 相似于 (200000000),\\begin{pmatrix}2&0&0\\\\0&0&0\\\\0&0&0\\end{pmatrix}, 则 βTα=\\beta^T\\alpha= ________。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 α β ⊤ 为矩阵，其主对角线元素之和为 β ⊤ α 。 矩阵 ​ 2 0 0 ​ 0 0 0 ​ 0 0 0 ​ ​ 的主对角线元素之和为 2 + 0 + 0 = 2 ，故 β ⊤ α = 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分 9 分）求极限 limx→0(1−cosx)[x−ln(1+tanx)]sin4x.\\lim_{x\\to0}\\frac{(1-\\cos x)\\,[x-\\ln(1+\\tan x)]}{\\sin^4x}.",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 ​ x → 0 lim ​ sin 4 x ( 1 − cos x ) [ x − ln ( 1 + tan x )] ​ = x → 0 lim ​ sin 4 x 2 1 ​ x 2 [ x − ln ( 1 + tan x )] ​ = 2 1 ​ x → 0 lim ​ x 2 x − ln ( 1 + tan x ) ​ = 2 1 ​ x → 0 lim ​ x 2 tan x − 2 t a n 2 x ​ + o ( tan 2 x ) ​ = 2 1 ​ x → 0 lim ​ x 2 x − 2 x 2 ​ + o ( x 2 ) ​ = 4 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(16, 'k-math-008', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）计算不定积分 ∫ln(1+1+xx)dx(x>0).\\int\\ln\\left(1+\\sqrt{\\frac{1+x}{x}}\\right)dx\\qquad(x>0).",
    referenceAnswer: "【答案】 ∫ ln ( 1 + x 1 + x ​ ​ ) d x = x ln ( 1 + x 1 + x ​ ​ ) + 2 1 ​ ln ( 1 + x ​ + x ​ ) + 2 1 ​ x − 2 1 ​ x + x 2 ​ + C 【解析】 令 x 1 + x ​ ​ = t ，得 x = t 2 − 1 1 ​ ， d x = ( t 2 − 1 ) 2 − 2 t ​ d t 。 ∫ ln ( 1 + t ) d ( t 2 − 1 1 ​ ) = t 2 − 1 ln ( 1 + t ) ​ − ∫ ( t 2 − 1 ) ( t + 1 ) 1 ​ d t 而 ∫ ( t 2 − 1 ) ( t + 1 ) 1 ​ d t = ∫ ( t − 1 ) ( t + 1 ) 2 1 ​ d t = 4 1 ​ ∫ ( t − 1 1 ​ − t + 1 1 ​ − ( t + 1 ) 2 2 ​ ) d t = 4 1 ​ ln ∣ t − 1∣ − 4 1 ​ ln ∣ t + 1∣ + 2 ( t + 1 ) 1 ​ + C 所以 ∫ ln ( 1 + x 1 + x ​ ​ ) d x = t 2 − 1 ln ( 1 + t ) ​ + 4 1 ​ ln t − 1 t + 1 ​ − 2 ( t + 1 ) 1 ​ + C = x ln ( 1 + x 1 + x ​ ​ ) + 2 1 ​ ln ( 1 + x ​ + x ​ ) − 2 ( 1 + x ​ + x ​ ) x ​ ​ + C = x ln ( 1 + x 1 + x ​ ​ ) + 2 1 ​ ln ( 1 + x ​ + x ​ ) + 2 1 ​ x − 2 1 ​ x + x 2 ​ + C",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设 z=f(x+y,x−y,xy),z=f(x+y,x-y,xy), 其中 ff 具有二阶连续偏导数，求 dzdz 与 ∂2z∂x∂y\\dfrac{\\partial^2z}{\\partial x\\partial y}。",
    referenceAnswer: "【答案】 记 f i ′ = ∂ f ∂ u i f_i'=\\dfrac{\\partial f}{\\partial u_i} ， f i j ″ = ∂ 2 f ∂ u i ∂ u j f_{ij}''=\\dfrac{\\partial^2f}{\\partial u_i\\partial u_j} ，各偏导均在 ( x + y , x − y , x y ) (x+y,x-y,xy) 处取值。则 d z = ( f 1 ′ + f 2 ′ + y f 3 ′ ) d x + ( f 1 ′ − f 2 ′ + x f 3 ′ ) d y , dz=(f_1'+f_2'+yf_3')\\,dx+(f_1'-f_2'+xf_3')\\,dy, ∂ 2 z ∂ x ∂ y = f 3 ′ + f 11 ″ − f 22 ″ + x y f 33 ″ + ( x + y ) f 13 ″ + ( x − y ) f 23 ″ . \\frac{\\partial^2z}{\\partial x\\partial y}\n=f_3'+f_{11}''-f_{22}''+xyf_{33}''+(x+y)f_{13}''+(x-y)f_{23}''. 【解析】 令 u = x + y , v = x − y , w = x y , u=x+y,\\qquad v=x-y,\\qquad w=xy, 则 z = f ( u , v , w ) z=f(u,v,w) 。由链式法则， ∂ z ∂ x = f 1 ′ + f 2 ′ + y f 3 ′ , ∂ z ∂ y = f 1 ′ − f 2 ′ + x f 3 ′ . \\frac{\\partial z}{\\partial x}=f_1'+f_2'+yf_3',\\qquad\n\\frac{\\partial z}{\\partial y}=f_1'-f_2'+xf_3'. 因此 d z = ∂ z ∂ x d x + ∂ z ∂ y d y = ( f 1 ′ + f 2 ′ + y f 3 ′ ) d x + ( f 1 ′ − f 2 ′ + x f 3 ′ ) d y . dz=\\frac{\\partial z}{\\partial x}\\,dx+\\frac{\\partial z}{\\partial y}\\,dy\n=(f_1'+f_2'+yf_3')\\,dx+(f_1'-f_2'+xf_3')\\,dy. 再对 ∂ z ∂ x \\dfrac{\\partial z}{\\partial x} 关于 y y 求偏导： ∂ 2 z ∂ x ∂ y = f 11 ″ − f 12 ″ + x f 13 ″ + f 21 ″ − f 22 ″ + x f 23 ″ + f 3 ′ + y ( f 31 ″ − f 32 ″ + x f 33 ″ ) . \\begin{aligned}\n\\frac{\\partial^2z}{\\partial x\\partial y}\n={}&f_{11}''-f_{12}''+xf_{13}''\n+f_{21}''-f_{22}''+xf_{23}'' \\\\\n&+f_3'+y\\bigl(f_{31}''-f_{32}''+xf_{33}''\\bigr).\n\\end{aligned} 由于 f f 具有二阶连续偏导数， f 12 ″ = f 21 ″ f_{12}''=f_{21}'' ， f 13 ″ = f 31 ″ f_{13}''=f_{31}'' ， f 23 ″ = f 32 ″ f_{23}''=f_{32}'' ，整理得 ∂ 2 z ∂ x ∂ y = f 3 ′ + f 11 ″ − f 22 ″ + x y f 33 ″ + ( x + y ) f 13 ″ + ( x − y ) f 23 ″ . \\frac{\\partial^2z}{\\partial x\\partial y}\n=f_3'+f_{11}''-f_{22}''+xyf_{33}''+(x+y)f_{13}''+(x-y)f_{23}''.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设非负函数 y=y(x)y=y(x)（x≥0x\\ge0）满足微分方程 xy″−y′+2=0.xy''-y'+2=0. 当曲线 y=y(x)y=y(x) 过原点时，其与直线 x=1x=1 及 y=0y=0 围成的平面区域 DD 的面积为 2，求 DD 绕 yy 轴旋转所得旋转体的体积。",
    referenceAnswer: "【答案】 6 17 π ​ 【解析】 解微分方程 x y ′′ − y ′ + 2 = 0 ，令 p = y ′ ，则方程化为 x p ′ − p + 2 = 0 ，即 d x d p ​ − x 1 ​ p = − x 2 ​ . 其通解为 p ​ = e ∫ x 1 ​ d x ( ∫ − x 2 ​ e − ∫ x 1 ​ d x d x + C 1 ​ ) = x ( − 2 ∫ x 2 1 ​ d x + C 1 ​ ) = x ( x 2 ​ + C 1 ​ ) = 2 + C 1 ​ x . ​ 所以 y ′ = 2 + C 1 ​ x ，积分得 y = 2 x + 2 1 ​ C 1 ​ x 2 + C 2 ​ . 因为曲线过原点，所以 C 2 ​ = 0 ，即 y = 2 x + 2 1 ​ C 1 ​ x 2 . 由区域 D 的面积为 2，得 ∫ 0 1 ​ ( 2 x + 2 1 ​ C 1 ​ x 2 ) d x = 2 , 即 [ x 2 + 6 C 1 ​ ​ x 3 ] 0 1 ​ = 1 + 6 C 1 ​ ​ = 2 , 解得 C 1 ​ = 6 。 所以 y = 2 x + 3 x 2 . D 绕 y 轴旋转所得旋转体体积用柱壳法计算： V ​ = 2 π ∫ 0 1 ​ x ( 2 x + 3 x 2 ) d x = 2 π ∫ 0 1 ​ ( 2 x 2 + 3 x 3 ) d x = 2 π [ 3 2 ​ x 3 + 4 3 ​ x 4 ] 0 1 ​ = 2 π ( 3 2 ​ + 4 3 ​ ) = 2 π × 12 17 ​ = 6 17 π ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）计算二重积分 ∬D(x−y)dxdy,\\iint_D(x-y)\\,dx\\,dy, 其中 D={(x,y)∣(x−1)2+(y−1)2≤2,y≥x}.D=\\{(x,y)\\mid (x-1)^2+(y-1)^2\\le2,\\ y\\ge x\\}.",
    referenceAnswer: "【答案】 − 3 8 ​ 【解析】 区域 D 是以 ( 1 , 1 ) 为圆心、 2 ​ 为半径的圆中 y ≥ x 的部分。使用极坐标变换，令 x = 1 + r cos θ ， y = 1 + r sin θ ，则 r ≤ 2 ​ ， θ 的范围为 4 π ​ ≤ θ ≤ 4 5 π ​ 。 ∫ D ​ ( x − y ) d x d y = ∫ 4 π ​ 4 5 π ​ ​ d θ ∫ 0 2 ​ ​ [ ( 1 + r cos θ ) − ( 1 + r sin θ ) ] r d r = ∫ 4 π ​ 4 5 π ​ ​ ( cos θ − sin θ ) d θ ∫ 0 2 ​ ​ r 2 d r = [ sin θ + cos θ ] 4 π ​ 4 5 π ​ ​ × [ 3 1 ​ r 3 ] 0 2 ​ ​ = ( sin 4 5 π ​ + cos 4 5 π ​ − sin 4 π ​ − cos 4 π ​ ) × 3 1 ​ × ( 2 ​ ) 3 = ( − 2 2 ​ ​ − 2 2 ​ ​ − 2 2 ​ ​ − 2 2 ​ ​ ) × 3 2 2 ​ ​ = ( − 2 2 ​ ) × 3 2 2 ​ ​ = − 3 8 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设 y=y(x)y=y(x) 是区间 (−π,π)(-\\pi,\\pi) 内过点 (−π2,π2)\\left(-\\frac{\\pi}{\\sqrt2},\\frac{\\pi}{\\sqrt2}\\right) 的光滑曲线。当 −πx0-\\pi 时，曲线上任一点处的法线都过原点；当 0≤xπ0\\le x 时，函数 y(x)y(x) 满足 y″+y+x=0.y''+y+x=0. 求函数 y(x)y(x) 的表达式。",
    referenceAnswer: "【答案】 y = { π 2 − x 2 ​ , π cos x + sin x − x , ​ − π < x < 0 0 ≤ x < π ​ 【解析】 由题意，当 − π < x < 0 时， y = − y ′ x ​ ，即 y d y = − x d x ，得 y 2 = − x 2 + c 。 将 y ( − 2 ​ π ​ ) = 2 ​ π ​ 代入 y 2 = − x 2 + c ，得 c = π 2 ，从而有 x 2 + y 2 = π 2 。 当 0 ≤ x < π 时， y ′′ + y + x = 0 ，得 y ′′ + y = 0 的通解为 y ∗ = c 1 ​ cos x + c 2 ​ sin x 。 令特解为 y 1 ​ = A x + b ，代入得 0 + A x + b + x = 0 ，解得 A = − 1 ， b = 0 ，故 y 1 ​ = − x 。 因此 y ′′ + y + x = 0 的通解为 y = c 1 ​ cos x + c 2 ​ sin x − x 。 由于 y = y ( x ) 是 ( − π , π ) 内的光滑曲线，故 y 在 x = 0 处连续。 由 y ( 0 − ) = ± π ， y ( 0 + ) = c 1 ​ ，得 c 1 ​ = ± π 时， y = y ( x ) 在 x = 0 处连续。 当 − π < x < 0 时，由 2 x + 2 y ⋅ y ′ = 0 ，得 y − ′ ​ ( 0 ) = − y x ​ = 0 。 当 0 ≤ x < π 时， y ′ = − c 1 ​ sin x + c 2 ​ cos x − 1 ，得 y + ′ ​ ( 0 ) = c 2 ​ − 1 。 由 y − ′ ​ ( 0 ) = y + ′ ​ ( 0 ) 得 c 2 ​ − 1 = 0 ，即 c 2 ​ = 1 。 因此 y = y ( x ) 的表达式为： y = { π 2 − x 2 ​ , π cos x + sin x − x , ​ − π < x < 0 0 ≤ x < π ​ 或 y = { − π 2 − x 2 ​ , − π cos x + sin x − x , ​ − π < x < 0 0 ≤ x < π ​ 又因为曲线过点 ( − 2 ​ π ​ , 2 ​ π ​ ) ，所以取： y = { π 2 − x 2 ​ , π cos x + sin x − x , ​ − π < x < 0 0 ≤ x < π ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）（Ⅰ）证明拉格朗日中值定理：若函数 f(x)f(x) 在 [a,b][a,b] 上连续，在 (a,b)(a,b) 内可导，则存在 ξ∈(a,b)\\xi\\in(a,b)，使得f(b)−f(a)=f′(ξ)(b−a).f(b)-f(a)=f'(\\xi)(b-a).\n\n（Ⅱ）证明：若函数 f(x)f(x) 在 x=0x=0 处连续，在 (0,δ)(0,\\delta)（δ>0\\delta>0）内可导，且limx→0+f′(x)=A,\\lim_{x\\to0^+}f'(x)=A, 则右导数 f′+(0)f'_+(0) 存在，且 f′+(0)=Af'_+(0)=A。",
    referenceAnswer: "【答案】 (I) 见解析 (II) f + ′ ​ ( 0 ) = A 【解析】 构造辅助函数 φ ( x ) = f ( x ) − f ( a ) − b − a f ( b ) − f ( a ) ​ ( x − a ) 。 则 φ ( x ) 在 [ a , b ] 上连续，在 ( a , b ) 内可导，且 φ ( a ) = 0 ， φ ( b ) = 0 。 根据罗尔定理，存在 ξ ∈ ( a , b ) ，使得 φ ′ ( ξ ) = 0 ，即 f ′ ( ξ ) − b − a f ( b ) − f ( a ) ​ = 0 ，因此 f ( b ) − f ( a ) = f ′ ( ξ ) ( b − a ) 。 任取 x 0 ​ ∈ ( 0 , δ ) ，在 [ 0 , x 0 ​ ] 上应用拉格朗日中值定理，存在 ξ ∈ ( 0 , x 0 ​ ) ，使得 x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ = f ′ ( ξ ) 。 当 x 0 ​ → 0 + 时， ξ → 0 + 。因为 lim x → 0 + ​ f ′ ( x ) = A ，所以 x 0 ​ → 0 + lim ​ x 0 ​ f ( x 0 ​ ) − f ( 0 ) ​ = ξ → 0 + lim ​ f ′ ( ξ ) = A , 即 f + ′ ​ ( 0 ) = A 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设A=(1−1−1−1110−4−2),ξ1=(−11−2).A=\\begin{pmatrix} 1&-1&-1\\\\ -1&1&1\\\\ 0&-4&-2 \\end{pmatrix},\\qquad \\xi_1=\\begin{pmatrix}-1\\\\1\\\\-2\\end{pmatrix}.\n\n（Ⅰ）求满足 Aξ2=ξ1A\\xi_2=\\xi_1，A2ξ3=ξ1A^2\\xi_3=\\xi_1 的所有向量 ξ2,ξ3\\xi_2,\\xi_3；\n\n（Ⅱ）对（Ⅰ）中的任意向量 ξ2,ξ3\\xi_2,\\xi_3，证明：ξ1,ξ2,ξ3\\xi_1,\\xi_2,\\xi_3 线性无关。",
    referenceAnswer: "【答案】 （Ⅰ） ξ 2 = s ( 1 − 1 2 ) + ( 0 0 1 ) , s ∈ ℝ , \\xi_2=s\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}\n+\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix},\\qquad s\\in\\mathbb R, ξ 3 = t ( − 1 1 0 ) + u ( 0 0 1 ) + ( − 1 2 0 0 ) , t , u ∈ ℝ . \\xi_3=t\\begin{pmatrix}-1\\\\1\\\\0\\end{pmatrix}\n+u\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\n+\\begin{pmatrix}-\\frac12\\\\0\\\\0\\end{pmatrix},\\qquad t,u\\in\\mathbb R. （Ⅱ）见解析。 【解析】 （Ⅰ）由 A ξ 2 = ξ 1 A\\xi_2=\\xi_1 ，对增广矩阵作初等行变换，可得一个自由变量，其通解为 ξ 2 = s ( 1 − 1 2 ) + ( 0 0 1 ) . \\xi_2=s\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}\n+\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}. 计算 A 2 = ( 2 2 0 − 2 − 2 0 4 4 0 ) . A^2=\n\\begin{pmatrix}\n2&2&0\\\\\n-2&-2&0\\\\\n4&4&0\n\\end{pmatrix}. 设 ξ 3 = ( x 1 , x 2 , x 3 ) T \\xi_3=(x_1,x_2,x_3)^T ，则 A 2 ξ 3 = ξ 1 A^2\\xi_3=\\xi_1 等价于 x 1 + x 2 = − 1 2 , x_1+x_2=-\\frac12, 而 x 3 x_3 自由。因此有两个自由参数，通解应为 ξ 3 = t ( − 1 1 0 ) + u ( 0 0 1 ) + ( − 1 2 0 0 ) . \\xi_3=t\\begin{pmatrix}-1\\\\1\\\\0\\end{pmatrix}\n+u\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\n+\\begin{pmatrix}-\\frac12\\\\0\\\\0\\end{pmatrix}. （Ⅱ）把任意解写成 ξ 2 = ( s − s 2 s + 1 ) , ξ 3 = ( − t − 1 2 t u ) . \\xi_2=\\begin{pmatrix}s\\\\-s\\\\2s+1\\end{pmatrix},\\qquad\n\\xi_3=\\begin{pmatrix}-t-\\frac12\\\\t\\\\u\\end{pmatrix}. 于是 det ( ξ 1 , ξ 2 , ξ 3 ) = ∣ − 1 s − t − 1 2 1 − s t − 2 2 s + 1 u ∣ = − 1 2 ≠ 0 . \\det(\\xi_1,\\xi_2,\\xi_3)\n=\\begin{vmatrix}\n-1&s&-t-\\frac12\\\\\n1&-s&t\\\\\n-2&2s+1&u\n\\end{vmatrix}\n=-\\frac12\\ne0. 所以对任意 s , t , u ∈ ℝ s,t,u\\in\\mathbb R ，向量 ξ 1 , ξ 2 , ξ 3 \\xi_1,\\xi_2,\\xi_3 均线性无关。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设二次型 f(x1,x2,x3)=ax12+ax22+(a−1)x32+2x1x3−2x2x3.f(x_1,x_2,x_3)=ax_1^2+ax_2^2+(a-1)x_3^2+2x_1x_3-2x_2x_3.\n\n（Ⅰ）求二次型 ff 的矩阵的所有特征值；\n\n（Ⅱ）若二次型 ff 的规范形为 y12+y22y_1^2+y_2^2，求 aa 的值。",
    referenceAnswer: "【答案】 （Ⅰ）特征值为 λ 1 = a , λ 2 = a − 2 , λ 3 = a + 1 . \\lambda_1=a,\\qquad \\lambda_2=a-2,\\qquad \\lambda_3=a+1. （Ⅱ） a = 2 a=2 。 【解析】 （Ⅰ）二次型的矩阵为 A = ( a 0 1 0 a − 1 1 − 1 a − 1 ) . A=\\begin{pmatrix}\na&0&1\\\\\n0&a&-1\\\\\n1&-1&a-1\n\\end{pmatrix}. 其特征多项式为 | λ E − A | = ( λ − a ) [ ( λ − a ) ( λ − a + 1 ) − 2 ] = ( λ − a ) ( λ − a + 2 ) ( λ − a − 1 ) . \\begin{aligned}\n|\\lambda E-A|\n&=(\\lambda-a)\\bigl[(\\lambda-a)(\\lambda-a+1)-2\\bigr]\\\\\n&=(\\lambda-a)(\\lambda-a+2)(\\lambda-a-1).\n\\end{aligned} 因此全部特征值为 a , a − 2 , a + 1 . a,\\qquad a-2,\\qquad a+1. （Ⅱ）规范形为 y 1 2 + y 2 2 y_1^2+y_2^2 ，说明二次型有两个正特征值和一个零特征值。 若 a = 0 a=0 ，三个特征值为 0 , − 2 , 1 0,-2,1 ，不符合；若 a = 2 a=2 ，三个特征值为 2 , 0 , 3 2,0,3 ，符合；若 a = − 1 a=-1 ，三个特征值为 − 1 , − 3 , 0 -1,-3,0 ，不符合。 故 a = 2 . a=2.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2009_math2 = {
  id: P, year: Y,
  title: '2009 年全国硕士研究生招生考试 数学（二）',
  short: '2009 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2009_math2.length,
  qids: questions2009_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
