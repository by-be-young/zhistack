const P = 'paper-2012-math2'
const Y = 2012
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2012-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2012 考研数学（二）真题',
  ...extra
})

export const questions2012_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=\\frac{x^2+x}{x^2-1}\\) 的渐近线条数为（ ）。",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 根据渐近线的定义可知： x → ∞ lim ​ x 2 − 1 x 2 + x ​ = x → ∞ lim ​ 1 − x 2 1 ​ 1 + x 1 ​ ​ = 1 因此直线 y = 1 为已知曲线的水平渐近线。 又由 x → 1 lim ​ x 2 − 1 x 2 + x ​ = x → 1 lim ​ ( x − 1 ) ( x + 1 ) x ( x + 1 ) ​ = x → 1 lim ​ x − 1 x ​ = ∞ 得 x = 1 为垂直渐近线。 当 x → − 1 时： x → − 1 lim ​ x 2 − 1 x 2 + x ​ = x → − 1 lim ​ ( x − 1 ) ( x + 1 ) x ( x + 1 ) ​ = x → − 1 lim ​ x − 1 x ​ = − 2 − 1 ​ = 2 1 ​ 该极限存在，故 x = − 1 不是垂直渐近线。 没有斜渐近线，因此选 (C)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(f(x)=(e^x-1)(e^{2x}-2)\\cdots(e^{nx}-n),\\) 其中 \\(n\\) 为正整数，则 \\(f'(0)=\\)（ ）。",
    options: [{ key: "A", text: "\\((-1)^{n-1}(n-1)!\\)" }, { key: "B", text: "\\((-1)^n(n-1)!\\)" }, { key: "C", text: "\\((-1)^{n-1}n!\\)" }, { key: "D", text: "\\((-1)^n n!\\)" }],
    answer: ["A"],
    explain: "正确答案： A 方法一 ：令 g ( x ) = ( e 2 x − 2 ) ⋯ ( e n x − n ) ，则 f ( x ) = ( e x − 1 ) g ( x ) f ′ ( x ) = e x g ( x ) + ( e x − 1 ) g ′ ( x ) f ′ ( 0 ) = e 0 g ( 0 ) + ( e 0 − 1 ) g ′ ( 0 ) = 1 ⋅ g ( 0 ) + 0 ⋅ g ′ ( 0 ) = g ( 0 ) 又 g ( 0 ) = ( − 1 ) ⋅ ( − 2 ) ⋯ ( − ( n − 1 )) = ( − 1 ) n − 1 ( n − 1 )! 故应选 (A)。 方法二 ：由于 f ( 0 ) = 0 ，由导数定义知 f ′ ( 0 ) ​ = x → 0 lim ​ x f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x ( e x − 1 ) ( e 2 x − 2 ) ⋯ ( e n x − n ) ​ = x → 0 lim ​ x e x − 1 ​ ⋅ x → 0 lim ​ ( e 2 x − 2 ) ⋯ ( e n x − n ) = 1 ⋅ ( − 1 ) ⋅ ( − 2 ) ⋯ ( − ( n − 1 )) = ( − 1 ) n − 1 ( n − 1 )! ​ 方法三 ：排除法，取 n = 2 ，则 f ( x ) = ( e x − 1 ) ( e 2 x − 2 ) f ′ ( x ) = e x ( e 2 x − 2 ) + 2 e 2 x ( e x − 1 ) f ′ ( 0 ) = 1 ⋅ ( 1 − 2 ) + 2 ⋅ 1 ⋅ ( 1 − 1 ) = − 1 + 0 = − 1 将 n = 2 代入各选项，(A) 为 ( − 1 ) 1 ⋅ 1 ! = − 1 ，符合；(B)、(C)、(D) 均不正确，故应选 (A)。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(a_n>0\\ (n=1,2,\\ldots)\\)，\\(S_n=a_1+a_2+\\cdots+a_n\\)，则数列 \\(\\{S_n\\}\\) 有界是数列 \\(\\{a_n\\}\\) 收敛的（ ）。",
    options: [{ key: "A", text: "充分必要条件" }, { key: "B", text: "充分而非必要条件" }, { key: "C", text: "必要而非充分条件" }, { key: "D", text: "既非充分又非必要条件" }],
    answer: ["B"],
    explain: "正确答案： B 根据题意可知， a n ​ > 0 ，因此数列 { S n ​ } 是单调递增数列。 若 { S n ​ } 有界，则 lim n → ∞ ​ S n ​ 存在，就有 n → ∞ lim ​ a n ​ = n → ∞ lim ​ ( S n ​ − S n − 1 ​ ) = 0 , 得数列 { a n ​ } 收敛，故数列 { S n ​ } 有界是数列 { a n ​ } 收敛的充分条件。 反之，若 { a n ​ } 收敛，例如取 a n ​ = 1 ，满足 { a n ​ } 收敛（极限为 1），但 S n ​ = n ， { S n ​ } 无上界，因此 { S n ​ } 不一定有界。 所以应选 (B)。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(I_k=\\int_0^{k\\pi}e^{x^2}\\sin x\\,dx\\qquad(k=1,2,3),\\) 则 \\(I_1,I_2,I_3\\) 的大小关系为（ ）。",
    options: [{ key: "A", text: "\\(I_1<I_2<I_3\\)" }, { key: "B", text: "\\(I_3<I_2<I_1\\)" }, { key: "C", text: "\\(I_2<I_3<I_1\\)" }, { key: "D", text: "\\(I_2<I_1<I_3\\)" }],
    answer: ["D"],
    explain: "正确答案： D 根据题意可知 I 1 ​ = ∫ 0 π ​ e x 2 sin x d x I 2 ​ = ∫ 0 2 π ​ e x 2 sin x d x I 3 ​ = ∫ 0 3 π ​ e x 2 sin x d x 由于 I 2 ​ − I 1 ​ = ∫ π 2 π ​ e x 2 sin x d x ，由积分中值定理，存在 ξ 1 ​ ∈ ( π , 2 π ) ，使得 ∫ π 2 π ​ e x 2 sin x d x = e ξ 1 2 ​ sin ξ 1 ​ ⋅ π 在 ( π , 2 π ) 内 sin ξ 1 ​ < 0 ，故 I 2 ​ − I 1 ​ < 0 ，即 I 2 ​ < I 1 ​ 。 再有 I 3 ​ − I 2 ​ = ∫ 2 π 3 π ​ e x 2 sin x d x ，存在 ξ 2 ​ ∈ ( 2 π , 3 π ) ，使得 ∫ 2 π 3 π ​ e x 2 sin x d x = e ξ 2 2 ​ sin ξ 2 ​ ⋅ π 在 ( 2 π , 3 π ) 内 sin ξ 2 ​ > 0 ，故 I 3 ​ − I 2 ​ > 0 ，即 I 3 ​ > I 2 ​ 。 最后比较 I 3 ​ 与 I 1 ​ ， I 3 ​ − I 1 ​ = ∫ π 3 π ​ e x 2 sin x d x ，令 t = x − 2 π ，则 I 3 ​ − I 1 ​ ​ = ∫ − π π ​ e ( t + 2 π ) 2 sin ( t + 2 π ) d t = ∫ − π π ​ e ( t + 2 π ) 2 sin t d t = ∫ 0 π ​ e ( t + 2 π ) 2 sin t d t + ∫ − π 0 ​ e ( t + 2 π ) 2 sin t d t = ∫ 0 π ​ e ( t + 2 π ) 2 sin t d t − ∫ 0 π ​ e ( 2 π − t ) 2 sin t d t = ∫ 0 π ​ [ e ( t + 2 π ) 2 − e ( 2 π − t ) 2 ] sin t d t ​ 因为 t + 2 π > 2 π − t （ t ∈ ( 0 , π ) ），所以 e ( t + 2 π ) 2 > e ( 2 π − t ) 2 ，则被积函数大于 0，故 I 3 ​ − I 1 ​ > 0 ，即 I 3 ​ > I 1 ​ 。 综上， I 2 ​ < I 1 ​ < I 3 ​ 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x,y)\\) 可微，且对任意 \\((x,y)\\) 都有 \\(f_x(x,y)>0,\\;f_y(x,y)<0.\\) 则 \\(f(x_1,y_1)<f(x_2,y_2)\\) 的一个充分条件是（ ）。",
    options: [{ key: "A", text: "\\(x_1>x_2,\\ y_1<y_2\\)" }, { key: "B", text: "\\(x_1>x_2,\\ y_1>y_2\\)" }, { key: "C", text: "\\(x_1<x_2,\\ y_1<y_2\\)" }, { key: "D", text: "\\(x_1<x_2,\\ y_1>y_2\\)" }],
    answer: ["D"],
    explain: "正确答案： D 因为 ∂ x ∂ f ( x , y ) ​ > 0 ，所以当 x 1 ​ < x 2 ​ 时， f ( x 1 ​ , y ) < f ( x 2 ​ , y ) 。 又因为 ∂ y ∂ f ( x , y ) ​ < 0 ，所以当 y 1 ​ > y 2 ​ 时， f ( x 2 ​ , y 1 ​ ) < f ( x 2 ​ , y 2 ​ ) 。 因此，当 x 1 ​ < x 2 ​ 且 y 1 ​ > y 2 ​ 时， f ( x 1 ​ , y 1 ​ ) < f ( x 2 ​ , y 2 ​ ) 。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设平面区域 \\(D\\) 由曲线 \\(y=\\sin x\\)、直线 \\(x=\\pm\\dfrac\\pi2\\) 及 \\(y=1\\) 围成，则 \\(\\iint_D(x^5y-1)\\,dx\\,dy=\\) （ ）。",
    options: [{ key: "A", text: "\\(\\pi\\)" }, { key: "B", text: "\\(2\\)" }, { key: "C", text: "\\(-2\\)" }, { key: "D", text: "\\(-\\pi\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】将题中二重积分转化为X型二重积分： ∬ D ​ ( x y 5 − 1 ) d x d y = ∫ − 2 π ​ 2 π ​ ​ d x ∫ s i n x 1 ​ ( x y 5 − 1 ) d y = − π"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\\(\\alpha_1=\\begin{pmatrix}0\\\\0\\\\c_1\\end{pmatrix},\\quad \\alpha_2=\\begin{pmatrix}0\\\\1\\\\c_2\\end{pmatrix},\\quad \\alpha_3=\\begin{pmatrix}1\\\\-1\\\\c_3\\end{pmatrix},\\quad \\alpha_4=\\begin{pmatrix}-1\\\\1\\\\c_4\\end{pmatrix},\\)其中 \\(c_1,c_2,c_3,c_4\\) 为任意常数，则下列向量组线性相关的是（ ）。",
    options: [{ key: "A", text: "\\(\\alpha_1,\\alpha_2,\\alpha_3\\)" }, { key: "B", text: "\\(\\alpha_1,\\alpha_2,\\alpha_4\\)" }, { key: "C", text: "\\(\\alpha_1,\\alpha_3,\\alpha_4\\)" }, { key: "D", text: "\\(\\alpha_2,\\alpha_3,\\alpha_4\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】由于 \\(c_1,c_2,c_3,c_4\\) 为任意常数，应判断哪个向量组 恒 线性相关。 对各选项把三个向量作为列向量组成矩阵，计算行列式： \\[\n\\begin{aligned}\n\\det(\\alpha_1,\\alpha_2,\\alpha_3)&=-c_1,\\\\\n\\det(\\alpha_1,\\alpha_2,\\alpha_4)&=c_1,\\\\\n\\det(\\alpha_1,\\alpha_3,\\alpha_4)&=0,\\\\\n\\det(\\alpha_2,\\alpha_3,\\alpha_4)&=-(c_3+c_4).\n\\end{aligned}\n\\] 只有选项 (C) 的行列式对任意 \\(c_i\\) 都恒为 0，因此 \\(\\alpha_1,\\alpha_3,\\alpha_4\\) 必线性相关，故选 (C)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，\\(P\\) 为 3 阶可逆矩阵，且 \\(P^{-1}AP=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}.\\) 若\\(P=(\\alpha_1,\\alpha_2,\\alpha_3),\\;Q=(\\alpha_1+\\alpha_2,\\alpha_2,\\alpha_3),\\)则 \\(Q^{-1}AQ=\\)（ ）。",
    options: [{ key: "A", text: "\\(\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}\\)" }, { key: "B", text: "\\(\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}\\)" }, { key: "C", text: "\\(\\begin{pmatrix}2&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix}\\)" }, { key: "D", text: "\\(\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}\\)" }],
    answer: ["B"],
    explain: "正确答案： B 根据题意有 Q = P ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ ，从而 Q − 1 = ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ − 1 P − 1 = ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ P − 1 所以 Q − 1 A Q = ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ P − 1 A P ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ = ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ ​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​ ​ 0 1 0 ​ 1 0 0 ​ 0 0 1 ​ ​ = ​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​ 应选 (B)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(y=y(x)\\) 由方程 \\(x^2-y+1=e^y\\) 确定，则 \\(\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}=\\) ________。",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 将 x = 0 代入方程 x 2 − y + 1 = e y 得 y = 0 。 在方程两端对 x 求导，得 2 x − y ′ = y ′ e y ，将 x = 0 、 y = 0 代入得 y ′ ( 0 ) = 0 。 再在 2 x − y ′ = y ′ e y 两端对 x 求导，得 2 − y ′′ = y ′′ e y + ( y ′ ) 2 e y ，将 x = 0 、 y = 0 、 y ′ ( 0 ) = 0 代入得 y ′′ ( 0 ) = 1 ，即 ​ d x 2 d 2 y ​ ​ x = 0 ​ = 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\lim_{n\\to\\infty}n\\left(\\frac1{1+n^2}+\\frac1{2^2+n^2}+\\cdots+\\frac1{n^2+n^2}\\right)=\\) ________。",
    answerText: "】 4 π ​ 【",
    referenceAnswer: "【答案】 4 π ​ 【解析】 ​ n → ∞ lim ​ n ( 1 + n 2 1 ​ + 2 2 + n 2 1 ​ + ⋯ + n 2 + n 2 1 ​ ) = n → ∞ lim ​ n 1 ​ ( 1 + n 2 n 2 ​ + 2 2 + n 2 n 2 ​ + ⋯ + n 2 + n 2 n 2 ​ ) = n → ∞ lim ​ n 1 ​ ( 1 + ( n 1 ​ ) 2 1 ​ + 1 + ( n 2 ​ ) 2 1 ​ + ⋯ + 1 + ( n n ​ ) 2 1 ​ ) = n → ∞ lim ​ n 1 ​ i = 1 ∑ n ​ 1 + ( n i ​ ) 2 1 ​ = ∫ 0 1 ​ 1 + x 2 1 ​ d x = arctan x ∣ 0 1 ​ = 4 π ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(z=f\\left(\\ln x+\\frac1y\\right),\\) 其中 \\(f(u)\\) 可微，则 \\(x\\frac{\\partial z}{\\partial x}+y^2\\frac{\\partial z}{\\partial y}=\\) ________。",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 给定 z = f ( ln x + y 1 ​ ) ，其中 f ( u ) 可微。设 u = ln x + y 1 ​ ，则 z = f ( u ) 。 计算偏导数： ∂ x ∂ z ​ ∂ y ∂ z ​ ​ = ∂ u ∂ f ​ ⋅ ∂ x ∂ u ​ = f ′ ( u ) ⋅ x 1 ​ , = ∂ u ∂ f ​ ⋅ ∂ y ∂ u ​ = f ′ ( u ) ⋅ ( − y 2 1 ​ ) . ​ 代入表达式： x ∂ x ∂ z ​ + y 2 ∂ y ∂ z ​ ​ = x ( f ′ ( u ) ⋅ x 1 ​ ) + y 2 ( f ′ ( u ) ⋅ ( − y 2 1 ​ ) ) = f ′ ( u ) − f ′ ( u ) = 0. ​ 因此，结果为 0。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "微分方程 \\(y\\,dx+(x-3y^2)\\,dy=0\\) 满足条件 \\(y|_{x=1}=1\\) 的解为 \\(y=\\) ________。",
    answerText: "】 y = x ​ 【",
    referenceAnswer: "【答案】 y = x ​ 【解析】 由 y d x + ( x − 3 y 2 ) d y = 0 可得 d y d x ​ = 3 y − y x ​ , d y d x ​ + y x ​ = 3 y . ​ 这是一阶线性微分方程，利用通解公式可得 x = e − ∫ y 1 ​ d y [ ∫ 3 y e ∫ y 1 ​ d y d y + C ] = y 1 ​ ( y 3 + C ) . 将 x = 1 、 y = 1 代入得 C = 0 ，所以方程的解为 x = y 2 , y = x ​ ​ （舍去 y = − x ​ ）。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=x^2+x\\qquad(x<0)\\) 上曲率为 \\(\\dfrac{\\sqrt2}{2}\\) 的点的坐标为 ________。",
    answerText: "】 ( − 1 , 0 ) 【",
    referenceAnswer: "【答案】 ( − 1 , 0 ) 【解析】 由 y ′ = 2 x + 1 ， y ′′ = 2 ，曲率公式为 k = ( 1 + y ′ 2 ) 2 3 ​ ∣ y ′′ ∣ ​ = [ 1 + ( 2 x + 1 ) 2 ] 2 3 ​ 2 ​ = 2 2 ​ ​ 解得 x = 0 （舍去）， x = − 1 。 当 x = − 1 时， y = 0 ，所以坐标为 ( − 1 , 0 ) 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，\\(|A|=3\\)，\\(A^*\\) 为 \\(A\\) 的伴随矩阵。将 \\(A\\) 的第 1 行与第 2 行互换得到矩阵 \\(B\\)，则 \\(|BA^*|=\\) ________。",
    answerText: "】 -27 【",
    referenceAnswer: "【答案】 -27 【解析】 设 A 为 3 阶矩阵， ∣ A ∣ = 3 ， A ∗ 为 A 的伴随矩阵，若交换 A 的第 1 行与第 2 行得矩阵 B ，则 ∣ B ∣ = − ∣ A ∣ = − 3 ，又 ∣ A ∗ ∣ = ∣ A ∣ 2 = 9 。 因此 ∣ B A ∗ ∣ = ∣ B ∣ ⋅ ∣ A ∗ ∣ = ( − 3 ) × 9 = − 27 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设 \\(f(x)=\\frac{1+x}{\\sin x}-\\frac1x,\\) 且 \\(a=\\lim_{x\\to0}f(x).\\)\n\n（Ⅰ）求 \\(a\\)；\n\n（Ⅱ）若 \\(f(x)-a\\) 与 \\(x^k\\) 是同阶无穷小，求 \\(k\\)。",
    referenceAnswer: "【答案】 (I) a = 1; (II) k = 1 【解析】 (I) 根据题意 a ​ = x → 0 lim ​ f ( x ) = x → 0 lim ​ ( sin x 1 + x ​ − x 1 ​ ) = x → 0 lim ​ x sin x x + x 2 − sin x ​ = x → 0 lim ​ x 2 x + x 2 − sin x ​ = 1 + x → 0 lim ​ x 2 x − sin x ​ = 1 + x → 0 lim ​ x 2 x − [ x − 6 x 3 ​ + o ( x 3 ) ] ​ = 1 + 0 = 1 ​ (2) 考虑极限 x → 0 lim ​ x k f ( x ) − a ​ = x → 0 lim ​ x k f ( x ) − 1 ​ ​ = x → 0 lim ​ x k + 1 sin x x + x 2 − sin x − x sin x ​ = x → 0 lim ​ x k + 2 x + x 2 − sin x − x sin x ​ = x → 0 lim ​ x k + 2 ( x − sin x ) ( 1 + x ) ​ = x → 0 lim ​ x k + 2 6 1 ​ x 3 ​ ​ 由已知，当 x → 0 时， f ( x ) − a 与 x k 是同阶无穷小，则有 k + 2 = 3 ，解得 k = 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求函数 \\(f(x,y)=xe^{-\\frac{x^2+y^2}{2}}\\) 的极值。",
    referenceAnswer: "【答案】 函数 f ( x , y ) 的极大值为 e − 2 1 ​ ，在点 ( 1 , 0 ) 处取得；极小值为 − e − 2 1 ​ ，在点 ( − 1 , 0 ) 处取得。 【解析】 根据题意，由于 f x ′ ​ ( x , y ) = ( 1 − x 2 ) e − 2 x 2 + y 2 ​ 和 f y ′ ​ ( x , y ) = − x y e − 2 x 2 + y 2 ​ ，令 f x ′ ​ = 0 ， f y ′ ​ = 0 ，得函数 f ( x , y ) 的驻点为 ( 1 , 0 ) 和 ( − 1 , 0 ) 。 再求二阶偏导数： A = f xx ′′ ​ = − 2 x e − 2 x 2 + y 2 ​ − x ( 1 − x 2 ) e − 2 x 2 + y 2 ​ = x ( x 2 − 3 ) e − 2 x 2 + y 2 ​ , B = f x y ′′ ​ = − y ( 1 − x 2 ) e − 2 x 2 + y 2 ​ , C = f yy ′′ ​ = x ( y 2 − 1 ) e − 2 x 2 + y 2 ​ . 将 ( 1 , 0 ) 代入 A 、 B 、 C 中，得 A = − 2 e − 2 1 ​ < 0 ，且 B 2 − A C = − 2 e − 1 < 0 ，因此 ( 1 , 0 ) 是函数的极大值点，极大值为 f ( 1 , 0 ) = e − 2 1 ​ 。 将 ( − 1 , 0 ) 代入，得 A = 2 e − 2 1 ​ > 0 ，且 B 2 − A C = − 2 e − 1 < 0 ，因此 ( − 1 , 0 ) 是函数的极小值点，极小值为 f ( − 1 , 0 ) = − e − 2 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n过点 \\((0,1)\\) 作曲线 \\(L:y=\\ln x\\) 的切线，切点为 \\(A\\)，又 \\(L\\) 与 \\(x\\) 轴交于点 \\(B\\)，区域 \\(D\\) 由 \\(L\\) 与直线 \\(AB\\) 围成。求区域 \\(D\\) 的面积以及 \\(D\\) 绕 \\(x\\) 轴旋转一周所得旋转体的体积。",
    referenceAnswer: "【答案】 区域 \\(D\\) 的面积为 \\(S=2\\)，绕 \\(x\\) 轴旋转所得旋转体体积为 \\(V=\\dfrac{2\\pi}{3}(e^2-1)\\)。 【解析】 根据题意，设切点 A 的坐标为 ( x 0 ​ , y 0 ​ ) ，切线方程的斜率为 k ，则 y 0 ​ − 1 = k x 0 ​ , k = x 0 ​ 1 ​ , y 0 ​ = ln x 0 ​ , x 0 ​ = e 2 , y 0 ​ = 2 , k = e 2 1 ​ . ​ 得切线方程为： y = e 2 1 ​ x + 1 , 切点 A 为 ( e 2 , 2 ) ， L 与 x 轴的交点 B 为 ( 1 , 0 ) 。 可知直线 A B 的方程： l A B ​ : y = e 2 − 1 2 ​ ( x − 1 ) . 区域 D 的面积为： S ​ = ∫ 1 e 2 ​ ln x d x − ∫ 1 e 2 ​ e 2 − 1 2 ​ ( x − 1 ) d x = [ x ln x ​ 1 e 2 ​ − x ​ 1 e 2 ​ ] − e 2 − 1 2 ​ [ 2 1 ​ x 2 − x ] 1 e 2 ​ = e 2 + 1 − ( e 2 − 1 ) = 2. ​ D 绕 x 轴旋转一周所得旋转体的体积为 V ​ = π ∫ 1 e 2 ​ ( ln x ) 2 d x − π ∫ 1 e 2 ​ [ e 2 − 1 2 ​ ( x − 1 ) ] 2 d x = π ( 2 e 2 − 2 ) − π 3 4 ( e 2 − 1 ) ​ = 3 2 ​ π ( e 2 − 1 ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算 \\(\\iint_Dxy\\,d\\sigma,\\) 其中 \\(D\\) 是由极坐标曲线 \\(r=1+\\cos\\theta\\;(0\\le\\theta\\le\\pi)\\) 与极轴围成的区域。",
    referenceAnswer: "【答案】 15 16 ​ 【解析】 解：根据题意，令 x = ρ cos θ ， y = ρ sin θ ，其中 0 ≤ θ ≤ π 。 则 D ∬ ​ x y d σ ​ = ∫ 0 π ​ d θ ∫ 0 1 + c o s θ ​ ρ cos θ ⋅ ρ sin θ ⋅ ρ d ρ = ∫ 0 π ​ cos θ sin θ d θ ∫ 0 1 + c o s θ ​ ρ 3 d ρ = 4 1 ​ ∫ 0 π ​ ( 1 + cos θ ) 4 cos θ sin θ d θ = − 4 1 ​ ∫ 0 π ​ ( 1 + cos θ ) 4 cos θ d cos θ = − 4 1 ​ ∫ 1 − 1 ​ ( 1 + u ) 4 u d u = 15 16 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数 \\(f(x)\\) 满足 \\(f''(x)+f'(x)-2f(x)=0,\\) 且 \\(f'(x)+f(x)=2e^x.\\)\n\n（Ⅰ）求 \\(f(x)\\)；\n\n（Ⅱ）求曲线\\(y=f(x^2)\\int_0^x f(-t^2)\\,dt\\) 的拐点。",
    referenceAnswer: "【答案】 (I) \\(f(x)=e^x\\)； (II) 拐点为 \\((0,0)\\)。 【解析】 (Ⅰ) 方程\n\\[f''(x)+f'(x)-2f(x)=0\\]\n的特征方程为\n\\[r^2+r-2=0,\\]\n故\n\\[f(x)=C_1e^x+C_2e^{-2x}.\\]\n由题设的另一个条件\n\\[f'(x)+f(x)=2e^x\\]\n得\n\\[2C_1e^x-C_2e^{-2x}=2e^x.\\]\n比较系数可得 \\(C_1=1,\\ C_2=0\\)，所以\n\\[f(x)=e^x.\\] (Ⅱ) 因而\n\\[y=e^{x^2}\\int_0^x e^{-t^2}\\,dt.\\]\n求导得\n\\[y'=2xe^{x^2}\\int_0^x e^{-t^2}\\,dt+1,\\]\n\\[y''=2e^{x^2}(1+2x^2)\\int_0^x e^{-t^2}\\,dt+2x.\\]\n当 \\(x>0\\) 时，上式两项均为正，所以 \\(y''>0\\)；当 \\(x<0\\) 时，\\(\\int_0^x e^{-t^2}dt<0\\)，且 \\(2x<0\\)，故 \\(y''<0\\)。因此 \\(y''\\) 只在 \\(x=0\\) 处变号。又 \\(y(0)=0\\)，所以曲线的拐点为 \\((0,0)\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n证明不等式 \\(x\\ln\\frac{1+x}{1-x}+\\cos x\\ge 1+\\frac{x^2}{2}\\;(-1<x<1).\\)",
    referenceAnswer: "【答案】 见解析 【解析】 令\n\\[F(x)=x\\ln\\frac{1+x}{1-x}+\\cos x-1-\\frac{x^2}{2}.\\]\n注意 \\(F(x)\\) 是偶函数，因此只需证明 \\(0\\le x<1\\) 时 \\(F(x)\\ge0\\)。显然 \\(F(0)=0\\)。 当 \\(0<x<1\\) 时， \\[\n\\begin{aligned}\nF'(x)\n&=\\ln\\frac{1+x}{1-x}+\\frac{2x}{1-x^2}-\\sin x-x\\\\\n&=\\ln\\frac{1+x}{1-x}+x\\frac{1+x^2}{1-x^2}-\\sin x.\n\\end{aligned}\n\\] 此时 \\(\\ln\\frac{1+x}{1-x}>0\\)，并且\n\\[x\\frac{1+x^2}{1-x^2}>x>\\sin x,\\]\n所以 \\(F'(x)>0\\)。故 \\(F(x)\\ge F(0)=0\\) 对 \\(0\\le x<1\\) 成立。再由 \\(F\\) 为偶函数，可知对 \\(-1<x<1\\) 都有 \\(F(x)\\ge0\\)。因此 \\[\nx\\ln\\frac{1+x}{1-x}+\\cos x\\ge1+\\frac{x^2}{2}.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n（Ⅰ）证明：对任意大于 1 的正整数 \\(n\\)，方程\\(x^n+x^{n-1}+\\cdots+x=1\\) 在区间 \\(\\left(\\dfrac12,1\\right)\\) 内有且仅有一个实根；\n\n（Ⅱ）设上述实根为 \\(x_n\\)，证明 \\(\\lim_{n\\to\\infty}x_n\\) 存在，并求此极限。",
    referenceAnswer: "【答案】 lim n → ∞ ​ x n ​ = 2 1 ​ 【解析】 证明： (Ⅰ) 根据题意，令 f ( x ) = x n + x n − 1 + ⋯ + x − 1 ，则 f ( 2 1 ​ ) = ( 2 1 ​ ) n + ( 2 1 ​ ) n − 1 + ⋯ + 2 1 ​ − 1 = 1 − 2 1 ​ 2 1 ​ [ 1 − ( 2 1 ​ ) n ] ​ − 1 = − ( 2 1 ​ ) n < 0 , f ( 1 ) = 1 n + 1 n − 1 + ⋯ + 1 − 1 = n − 1 > 0. 因此由零点定理知， f ( x ) = 0 在 ( 2 1 ​ , 1 ) 内至少有一实根。 又 f ′ ( x ) = n x n − 1 + ( n − 1 ) x n − 2 + ⋯ + 2 x + 1 > 0 , x ∈ ( 2 1 ​ , 1 ) , 故 f ( x ) 在 ( 2 1 ​ , 1 ) 上是单调递增函数，所以 f ( x ) = 0 在该区间内有且仅有一个实根。 (Ⅱ) 根据题意，有 f ( x n ​ ) = 0 。又 f ′ ( x ) = n x n − 1 + ( n − 1 ) x n − 2 + ⋯ + 2 x + 1 > 1 , x ∈ ( 2 1 ​ , 1 ) . 设 F ( x ) = f ( x ) + 1 = x n + x n − 1 + ⋯ + x ，则 F ( x n ​ ) = 1 。 由拉格朗日中值定理，存在 ξ ∈ ( 2 1 ​ , x n ​ ) 使得 x n ​ − 2 1 ​ F ( x n ​ ) − F ( 2 1 ​ ) ​ = F ′ ( ξ ) . 由于 F ′ ( x ) = f ′ ( x ) > 1 ，可得 ​ x n ​ − 2 1 ​ F ( x n ​ ) − F ( 2 1 ​ ) ​ ​ = ∣ F ′ ( ξ ) ∣ > 1 , 进而 ​ x n ​ − 2 1 ​ ​ ≤ ​ F ( x n ​ ) − F ( 2 1 ​ ) ​ = ​ 1 − ( 1 − 2 n 1 ​ ) ​ = 2 n 1 ​ . 由夹逼定理， n → ∞ lim ​ ​ x n ​ − 2 1 ​ ​ = 0 , 所以 n → ∞ lim ​ x n ​ = 2 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\\(A=\\begin{pmatrix} 1&a&0&0\\\\ 0&1&a&0\\\\ 0&0&1&a\\\\ a&0&0&1 \\end{pmatrix},\\qquad \\beta=\\begin{pmatrix}1\\\\-1\\\\0\\\\0\\end{pmatrix}.\\)\n\n（Ⅰ）计算 \\(|A|\\)；\n\n（Ⅱ）当实数 \\(a\\) 取何值时，线性方程组 \\(Ax=\\beta\\) 有无穷多解？并求其通解。",
    referenceAnswer: "【答案】 (I) \\(|A|=1-a^4\\)。 (II) 当 \\(a=-1\\) 时方程组有无穷多解，通解为\n\\[\nx=k\\begin{pmatrix}1\\\\1\\\\1\\\\1\\end{pmatrix}+\\begin{pmatrix}0\\\\-1\\\\0\\\\0\\end{pmatrix},\\qquad k\\in\\mathbb R.\n\\] 【解析】 (Ⅰ) 按第一行展开可得 \\[\n|A|=1-a^4.\n\\] (Ⅱ) 若 \\(Ax=\\beta\\) 有无穷多解，则必须有 \\(|A|=0\\)，所以 \\(a=\\pm1\\)。 当 \\(a=1\\) 时，方程组为\n\\[\n\\begin{cases}\nx_1+x_2=1,\\\\\nx_2+x_3=-1,\\\\\nx_3+x_4=0,\\\\\nx_1+x_4=0.\n\\end{cases}\n\\]\n由后两式得 \\(x_3=-x_4=x_1\\)，再由第二式得 \\(x_2=-1-x_1\\)，代入第一式得到 \\(-1=1\\)，矛盾，因此无解。 当 \\(a=-1\\) 时，增广矩阵可化为 \\[\n\\left(\\begin{array}{cccc|c}\n1&-1&0&0&1\\\\\n0&1&-1&0&-1\\\\\n0&0&1&-1&0\\\\\n-1&0&0&1&0\n\\end{array}\\right)\n\\sim\n\\left(\\begin{array}{cccc|c}\n1&0&0&-1&0\\\\\n0&1&0&-1&-1\\\\\n0&0&1&-1&0\\\\\n0&0&0&0&0\n\\end{array}\\right).\n\\] 令自由变量 \\(x_4=k\\)，则\n\\[x_1=k,\\qquad x_2=k-1,\\qquad x_3=k.\\]\n故通解为\n\\[\nx=\\begin{pmatrix}k\\\\k-1\\\\k\\\\k\\end{pmatrix}\n=k\\begin{pmatrix}1\\\\1\\\\1\\\\1\\end{pmatrix}+\\begin{pmatrix}0\\\\-1\\\\0\\\\0\\end{pmatrix},\\qquad k\\in\\mathbb R.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\\(A=\\begin{pmatrix} 1&0&1\\\\ 0&1&1\\\\ -1&0&a\\\\ 0&a&-1 \\end{pmatrix},\\)二次型 \\(f(x_1,x_2,x_3)=x^T(A^TA)x\\) 的秩为 2。\n\n（Ⅰ）求实数 \\(a\\)；\n\n（Ⅱ）求正交变换 \\(x=Qy\\)，将二次型 \\(f\\) 化为标准形。",
    referenceAnswer: "【答案】 (I) a = − 1 (II) 正交变换矩阵 Q = ​ − 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 2 ​ 1 ​ 0 ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ ​ ，标准形 f = 2 y 2 2 ​ + 6 y 3 2 ​ 【解析】 (I) 对 A 作初等行变换： A = ​ 1 0 − 1 0 ​ 0 1 0 a ​ 1 1 a − 1 ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 1 1 a + 1 0 ​ ​ 当 a = − 1 时， r ( A ) = 2 ，满足二次型相关条件，故 a = − 1 。 (II) 当 a = − 1 时， A T A = ​ 2 0 2 ​ 0 2 2 ​ 2 2 4 ​ ​ 特征多项式为 ​ λ E − A T A ​ = λ ( λ − 2 ) ( λ − 6 ) ，特征值为 0 , 2 , 6 。 对 λ = 0 ，解 ( 0 E − A T A ) x = 0 得基础解系 ( − 1 , − 1 , 1 ) T ，单位化得 γ 1 ​ = 3 ​ 1 ​ ( − 1 , − 1 , 1 ) T ； 对 λ = 2 ，解 ( 2 E − A T A ) x = 0 得基础解系 ( − 1 , 1 , 0 ) T ，单位化得 γ 2 ​ = 2 ​ 1 ​ ( − 1 , 1 , 0 ) T ； 对 λ = 6 ，解 ( 6 E − A T A ) x = 0 得基础解系 ( 1 , 1 , 2 ) T ，单位化得 γ 3 ​ = 6 ​ 1 ​ ( 1 , 1 , 2 ) T 。 正交变换矩阵为 Q = ​ − 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 2 ​ 1 ​ 0 ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ ​ 标准形为 f = 2 y 2 2 ​ + 6 y 3 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2012_math2 = {
  id: P, year: Y,
  title: '2012 年全国硕士研究生招生考试 数学（二）',
  short: '2012 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2012_math2.length,
  qids: questions2012_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
