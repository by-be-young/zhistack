const P = 'paper-2016-math2'
const Y = 2016
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2016-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2016 考研数学（二）真题',
  ...extra
})

export const questions2016_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\\(\\alpha_1=x(\\cos\\sqrt{x}-1),\\; \\alpha_2=\\sqrt{x}\\ln(1+\\sqrt[3]{x}),\\; \\alpha_3=\\sqrt[3]{x+1}-1.\\)当 \\(x\\to0^+\\) 时，以上 3 个无穷小量按照从低阶到高阶的排序是（ ）。",
    options: [{ key: "A", text: "\\(\\alpha_1,\\alpha_2,\\alpha_3\\)" }, { key: "B", text: "\\(\\alpha_2,\\alpha_3,\\alpha_1\\)" }, { key: "C", text: "\\(\\alpha_2,\\alpha_1,\\alpha_3\\)" }, { key: "D", text: "\\(\\alpha_3,\\alpha_2,\\alpha_1\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 当 \\(x\\to0^+\\) 时，利用等价无穷小： \\[\n\\alpha_1=x(\\cos\\sqrt{x}-1)\\sim-\\frac12x^2,\n\\qquad\n\\alpha_2=\\sqrt{x}\\ln(1+\\sqrt[3]{x})\\sim \\sqrt{x}\\,\\sqrt[3]{x}=x^{5/6},\n\\qquad\n\\alpha_3=\\sqrt[3]{1+x}-1\\sim\\frac13x.\n\\] 幂次依次为 \\(\\frac56,1,2\\)。当 \\(x\\to0^+\\) 时，幂次越小，无穷小的阶越低。因此从低阶到高阶为 \\(\\alpha_2,\\alpha_3,\\alpha_1\\)，故选 B。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数\\(f(x)=\\begin{cases} 2(x-1),&x<1,\\\\ \\ln x,&x\\ge1, \\end{cases}\\)则 \\(f(x)\\) 的一个原函数是（ ）。",
    options: [{ key: "A", text: "\\(\\displaystyle F(x)=\\begin{cases}(x-1)^2,&x<1,\\\\x(\\ln x-1),&x\\ge1\\end{cases}\\)" }, { key: "B", text: "\\(\\displaystyle F(x)=\\begin{cases}(x-1)^2,&x<1,\\\\x(\\ln x+1)-1,&x\\ge1\\end{cases}\\)" }, { key: "C", text: "\\(\\displaystyle F(x)=\\begin{cases}(x-1)^2,&x<1,\\\\x(\\ln x+1)+1,&x\\ge1\\end{cases}\\)" }, { key: "D", text: "\\(\\displaystyle F(x)=\\begin{cases}(x-1)^2,&x<1,\\\\x(\\ln x-1)+1,&x\\ge1\\end{cases}\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 设 F ( x ) = ∫ f ( x ) d x ，由题设得 F ( x ) = { ( x − 1 ) 2 , x ln x − x + C , ​ x < 1 , x > 1 , ​ 由于 F ( x ) 连续，需满足 F ( 1 − ) = F ( 1 + ) . 代入计算得 ( 1 − 1 ) 2 = 1 ⋅ ln 1 − 1 + C ⇒ 0 = − 1 + C , 因此 C = 1."
  }),
  base(3, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "反常积分\\(\\text{① }\\int_{-\\infty}^{0}\\frac1{x^2}e^{1/x}\\,dx, \\; \\text{② }\\int_{0}^{+\\infty}\\frac1{x^2}e^{1/x}\\,dx\\)的敛散性为（ ）。",
    options: [{ key: "A", text: "①收敛，②收敛" }, { key: "B", text: "①收敛，②发散" }, { key: "C", text: "①发散，②收敛" }, { key: "D", text: "①发散，②发散" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 考虑积分 ∫ − ∞ 0 ​ x 2 1 ​ e x 1 ​ d x ， 令 u = x 1 ​ ，则 d u = − x 2 1 ​ d x ， 于是原积分化为 ∫ − ∞ 0 ​ x 2 1 ​ e x 1 ​ d x = − ∫ − ∞ 0 ​ e x 1 ​ d ( x 1 ​ ) = − e x 1 ​ ​ − ∞ 0 ​ 代入上下限得 − ( x → 0 − lim ​ e x 1 ​ − x → − ∞ lim ​ e x 1 ​ ) = − ( 0 − 1 ) = 1 该积分收敛。 再考虑 ∫ 0 + ∞ ​ x 2 1 ​ e x 1 ​ d x ， 类似地有 ∫ 0 + ∞ ​ x 2 1 ​ e x 1 ​ d x = − ∫ 0 + ∞ ​ e x 1 ​ d ( x 1 ​ ) = − e x 1 ​ ​ 0 + ∞ ​ 代入上下限得 − ( x → + ∞ lim ​ e x 1 ​ − x → 0 + lim ​ e x 1 ​ ) = − ( 1 − ∞ ) = + ∞ 该积分发散。 因此，应选 B。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在 \\((-\\infty,+\\infty)\\) 内连续，其导函数的图形如图所示，则（ ）。",
    options: [{ key: "A", text: "函数 \\(f(x)\\) 有 2 个极值点，曲线 \\(y=f(x)\\) 有 2 个拐点" }, { key: "B", text: "函数 \\(f(x)\\) 有 2 个极值点，曲线 \\(y=f(x)\\) 有 3 个拐点" }, { key: "C", text: "函数 \\(f(x)\\) 有 3 个极值点，曲线 \\(y=f(x)\\) 有 1 个拐点" }, { key: "D", text: "函数 \\(f(x)\\) 有 3 个极值点，曲线 \\(y=f(x)\\) 有 2 个拐点" }],
    answer: ["B"],
    explain: "正确答案： B 根据极值的必要条件可知，极值点可能是驻点或导数不存在的点。根据极值的充分条件可知，在某点左右导函数符号发生改变，则该点是极值点。因此从图形可知函数 f ( x ) 有 2 个极值点。 根据拐点的必要条件可知，拐点可能是二阶导为零的点或二阶导不存在的点。根据拐点的充分条件可知，曲线在某点左右导函数的单调性发生改变，则该点是曲线的拐点。因此曲线 y = f ( x ) 有 3 个拐点，故选 B。"
  }),
  base(5, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f_i(x)\\ (i=1,2)\\) 具有二阶连续导数，且 \\(f_i''(x_0)<0\\;(i=1,2).\\) 若两条曲线 \\(y=f_i(x)\\ (i=1,2)\\) 在点 \\((x_0,y_0)\\) 处具有公切线 \\(y=g(x)\\)，且在该点处曲线 \\(y=f_1(x)\\) 的曲率大于曲线 \\(y=f_2(x)\\) 的曲率，则在 \\(x_0\\) 的某个邻域内，有（ ）。",
    options: [{ key: "A", text: "\\(f_1(x)\\le f_2(x)\\le g(x)\\)" }, { key: "B", text: "\\(f_2(x)\\le f_1(x)\\le g(x)\\)" }, { key: "C", text: "\\(f_1(x)\\le g(x)\\le f_2(x)\\)" }, { key: "D", text: "\\(f_2(x)\\le g(x)\\le f_1(x)\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】因为 f i ′′ ​ ( x ) 连续且 f i ′′ ​ ( x 0 ​ ) < 0 ，根据连续的定义与极限的保号性，在 x 0 ​ 的某邻域 U ( x 0 ​ ) 内，有 f i ′′ ​ ( x ) < 0 ，因此 f i ​ ( x ) 在 U ( x 0 ​ ) 内是凸函数。 又因为在 x = x 0 ​ 处两曲线具有公切线 y = g ( x ) ，根据凸函数的几何意义，曲线与切线的位置关系为 f i ​ ( x ) ≤ g ( x ) 。 在点 x 0 ​ 处， y = f 1 ​ ( x ) 的曲率大于 y = f 2 ​ ( x ) 的曲率，因此 f 1 ′′ ​ ( x 0 ​ ) < f 2 ′′ ​ ( x 0 ​ ) < 0 。 令 F ( x ) = f 1 ​ ( x ) − f 2 ​ ( x ) ，由于在 x = x 0 ​ 处具有公切线 y = g ( x ) ，可得 F ( x 0 ​ ) = 0 ， F ′ ( x 0 ​ ) = 0 。 又由 F ′′ ( x 0 ​ ) < 0 可知， F ( x 0 ​ ) = 0 是 F ( x ) 的极大值，因此在 x 0 ​ 的某邻域 U 1 ​ ( x 0 ​ ) 内，有 F ( x ) ≤ 0 ，即 f 1 ​ ( x ) ≤ f 2 ​ ( x ) 。 综合可得 f 1 ​ ( x ) ≤ f 2 ​ ( x ) ≤ g ( x ) ，故选 A。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数 \\(f(x,y)=\\frac{e^x}{x-y},\\) 则（ ）。",
    options: [{ key: "A", text: "\\(f'_x-f'_y=0\\)" }, { key: "B", text: "\\(f'_x+f'_y=0\\)" }, { key: "C", text: "\\(f'_x-f'_y=f\\)" }, { key: "D", text: "\\(f'_x+f'_y=f\\)" }],
    answer: ["D"],
    explain: "正确答案： D 由于 f x ′ ​ ( x , y ) = ( x − y ) 2 e x ( x − y ) − e x ​ 和 f y ′ ​ ( x , y ) = ( x − y ) 2 e x ​ ， 因此有 f x ′ ​ ( x , y ) + f y ′ ​ ( x , y ) = ( x − y ) 2 e x ( x − y ) − e x ​ + ( x − y ) 2 e x ​ = x − y e x ​ = f ( x , y ) 故应选 D。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A,B\\) 是可逆矩阵，且 \\(A\\) 与 \\(B\\) 相似，则下列结论错误的是（ ）。",
    options: [{ key: "A", text: "\\(A^T\\) 与 \\(B^T\\) 相似" }, { key: "B", text: "\\(A^{-1}\\) 与 \\(B^{-1}\\) 相似" }, { key: "C", text: "\\(A+A^T\\) 与 \\(B+B^T\\) 相似" }, { key: "D", text: "\\(A+A^{-1}\\) 与 \\(B+B^{-1}\\) 相似" }],
    answer: ["C"],
    explain: "正确答案： C 由于矩阵 A 与 B 相似，存在可逆矩阵 P 使得 P − 1 A P = B 。 对 B 取转置得： B T = P T A T ( P T ) − 1 = P T A T ( P − 1 ) T , 因此 A T 与 B T 相似。 对 B 取逆得： B − 1 = P − 1 A − 1 P , 因此 A − 1 与 B − 1 相似。 又由 B = P − 1 A P ，可得： B − 1 + B = P − 1 A − 1 P + P − 1 A P = P − 1 ( A − 1 + A ) P , 即 A + A − 1 与 B − 1 + B 相似。 因此正确选项为 C。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型 \\(f(x_1,x_2,x_3)=a(x_1^2+x_2^2+x_3^2)+2x_1x_2+2x_2x_3+2x_1x_3\\) 的正、负惯性指数分别为 \\(1,2\\)，则（ ）。",
    options: [{ key: "A", text: "\\(a>1\\)" }, { key: "B", text: "\\(a<-2\\)" }, { key: "C", text: "\\(-2<a<1\\)" }, { key: "D", text: "\\(a=1\\) 或 \\(a=-2\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】二次型 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 对应的矩阵为 A = ​ a 1 1 ​ 1 a 1 ​ 1 1 a ​ ​ . 由 ∣ λ E − A ∣ = ​ λ − a − 1 − 1 ​ − 1 λ − a − 1 ​ − 1 − 1 λ − a ​ ​ = ( λ − a − 2 ) ( λ − a + 1 ) 2 = 0 可得，矩阵 A 的特征值为 λ 1 ​ = a + 2 , λ 2 ​ = λ 3 ​ = a − 1. 由于 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的正惯性指数为 1，负惯性指数为 2，且正负惯性指数等于特征值中正、负数的个数，因此有 a + 2 > 0 且 a − 1 < 0 , 即 − 2 < a < 1. 故选 C。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线 \\(y=\\frac{x^3}{1+x^2}+\\arctan(1+x^2)\\) 的斜渐近线方程为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 y = x + 2 π ​ 【",
    referenceAnswer: "【答案】 y = x + 2 π ​ 【解析】 因为 a = x → ∞ lim ​ x y ​ = x → ∞ lim ​ x 1 ​ ( 1 + x 2 x 3 ​ + arctan ( 1 + x 2 ) ) = 1 , b = x → ∞ lim ​ ( y − a x ) = x → ∞ lim ​ ( 1 + x 2 x 3 ​ + arctan ( 1 + x 2 ) − x ) = 2 π ​ . ​ 所以斜渐近线为 y = x + 2 π ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-001', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）极限 \\(\\lim_{n\\to\\infty}\\frac1{n^2}\\left(\\sin\\frac1n+2\\sin\\frac2n+\\cdots+n\\sin\\frac nn\\right)=\\underline{\\qquad}.\\)",
    answerText: "】 sin 1 − cos 1 【",
    referenceAnswer: "【答案】 sin 1 − cos 1 【解析】 因为 lim n → ∞ ​ n 2 1 ​ ( sin n 1 ​ + 2 sin n 2 ​ + ⋯ + n sin n n ​ ) = lim n → ∞ ​ n 1 ​ ( n 1 ​ sin n 1 ​ + n 2 ​ sin n 2 ​ + ⋯ + n n ​ sin n n ​ ) 该极限可视为定积分的定义形式，即 ∫ 0 1 ​ x sin x d x 计算该积分： ∫ 0 1 ​ x sin x d x = sin 1 − cos 1 因此，原极限值为 sin 1 − cos 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）以 \\(y=x^2-e^x\\) 和 \\(y=x^2\\) 为特解的一阶非齐次线性微分方程为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 y ′ − y = 2 x − x 2 【",
    referenceAnswer: "【答案】 y ′ − y = 2 x − x 2 【解析】 设一阶非齐次线性微分方程为 y ′ + p ( x ) y = q ( x ) 。 根据线性微分方程齐次与非齐次解之间的关系，可知 x 2 − ( x 2 − e x ) = e x 是 y ′ + p ( x ) y = 0 的解，因此可得 p ( x ) = − 1 。 又因为 y = x 2 是 y ′ + p ( x ) y = q ( x ) 的解，代入可得 q ( x ) = 2 x − x 2 。 故所求一阶非齐次线性微分方程为 y ′ − y = 2 x − x 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知函数 \\(f(x)\\) 在 \\((-\\infty,+\\infty)\\) 上连续，且 \\(f(x)=(x+1)^2+2\\int_0^x f(t)\\,dt,\\) 则当 \\(n\\ge2\\) 时，\\(f^{(n)}(0)=\\underline{\\qquad}.\\)",
    answerText: "】 \\(\\displaystyle \\frac52\\,2^n\\) 【",
    referenceAnswer: "【答案】 \\(\\displaystyle \\frac52\\,2^n\\) 【解析】 由题设 \\[\nf(x)=(x+1)^2+2\\int_0^x f(t)\\,dt.\n\\] 取 \\(x=0\\) 得 \\(f(0)=1\\)。两边求导： \\[\nf'(x)=2(x+1)+2f(x),\n\\] 故 \\(f'(0)=4\\)。再求导得 \\[\nf''(x)=2+2f'(x),\\qquad f''(0)=10.\n\\] 当 \\(n\\ge2\\) 时继续求导，有 \\[\nf^{(n)}(x)=2^{\\,n-2}f''(x).\n\\] 因此 \\[\nf^{(n)}(0)=10\\cdot2^{n-2}=\\frac52\\,2^n.\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知动点 \\(P\\) 在曲线 \\(y=x^3\\) 上运动，记坐标原点与点 \\(P\\) 间的距离为 \\(l\\)。若点 \\(P\\) 的横坐标对时间的变化率为常数 \\(v_0\\)，则当点 \\(P\\) 运动到点 \\((1,1)\\) 时，\\(l\\) 对时间的变化率是 \\(\\underline{\\qquad}\\)。",
    answerText: "】 2 2 ​ v 0 ​ 【",
    referenceAnswer: "【答案】 2 2 ​ v 0 ​ 【解析】 设 l = x 2 + y 2 ​ = x 2 + x 6 ​ ，对 t 求导得： d t d l ​ = d x d l ​ ⋅ d t d x ​ = 2 x 2 + x 6 ​ 2 x + 6 x 5 ​ ⋅ d t d x ​ . 当 x = 1 时，已知 d t d x ​ = v 0 ​ ，代入得： d t d l ​ ​ x = 1 ​ = 2 1 + 1 ​ 2 + 6 ​ ⋅ v 0 ​ = 2 2 ​ 8 ​ v 0 ​ = 2 2 ​ v 0 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设矩阵 \\(\\begin{pmatrix}a&-1&-1\\\\-1&a&-1\\\\-1&-1&a\\end{pmatrix}\\) 与矩阵 \\(\\begin{pmatrix}1&1&0\\\\0&-1&1\\\\1&0&1\\end{pmatrix}\\) 等价，则 \\(a=\\underline{\\qquad}.\\)",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 首先计算矩阵 B 的行列式： ∣ B ∣ = ​ 1 0 1 ​ 1 − 1 0 ​ 0 1 1 ​ ​ = 0 因此 r ( B ) = 2 。 接着计算矩阵 A 的行列式： ∣ A ∣ = ​ a − 1 − 1 ​ − 1 a − 1 ​ − 1 − 1 a ​ ​ = ( a + 1 ) 2 ( a − 2 ) = 0 当 a = − 1 时， r ( A ) = 1 ；当 a = 2 时， r ( A ) = 2 。因此 a = 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求极限 \\(\\lim_{x\\to0}(\\cos2x+2x\\sin x)^{1/x^4}.\\)",
    referenceAnswer: "【答案】 \\(\\displaystyle e^{1/3}\\) 【解析】 设 \\[\nL=\\lim_{x\\to0}\\left(\\cos2x+2x\\sin x\\right)^{1/x^4}.\n\\] 因为底数趋于 1，所以 \\[\n\\ln L=\\lim_{x\\to0}\\frac{\\ln(\\cos2x+2x\\sin x)}{x^4}\n=\\lim_{x\\to0}\\frac{\\cos2x+2x\\sin x-1}{x^4}.\n\\] 利用泰勒展开 \\[\n\\cos2x=1-2x^2+\\frac23x^4+o(x^4),\\qquad\n2x\\sin x=2x^2-\\frac13x^4+o(x^4),\n\\] 于是 \\[\n\\ln L=\\lim_{x\\to0}\\frac{\\frac13x^4+o(x^4)}{x^4}=\\frac13.\n\\] 故 \\(\\displaystyle L=e^{1/3}\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数 \\(f(x)=\\int_0^1|t^2-x^2|\\,dt\\;(x>0),\\) 求 \\(f'(x)\\)，并求 \\(f(x)\\) 的最小值。",
    referenceAnswer: "【答案】 f ′ ( x ) = { 4 x 2 − 2 x 2 x ​ 0 < x ≤ 1 x > 1 ​ f ( x ) 的最小值为 4 1 ​ 。 【解析】 f ( x ) = ∫ 0 1 ​ ∣ t 2 − x 2 ∣ d t ( x > 0 ) 当 0 < x ≤ 1 时， f ( x ) ​ = ∫ 0 x ​ ( x 2 − t 2 ) d t + ∫ x 1 ​ ( t 2 − x 2 ) d t = x 3 − 3 1 ​ x 3 + 3 1 ​ − 3 1 ​ x 3 − x 2 ( 1 − x ) = 3 4 ​ x 3 − x 2 + 3 1 ​ ​ 当 x > 1 时， f ( x ) = ∫ 0 1 ​ ( x 2 − t 2 ) d t = x 2 ∫ 0 1 ​ d t − ∫ 0 1 ​ t 2 d t = x 2 − 3 1 ​ 即 f ( x ) = { 3 4 ​ x 3 − x 2 + 3 1 ​ x 2 − 3 1 ​ ​ 0 < x ≤ 1 x > 1 ​ f ′ ( x ) = { 4 x 2 − 2 x 2 x ​ 0 < x ≤ 1 x > 1 ​ 令 f ′ ( x ) = 0 ，可得当 0 < x ≤ 1 时 x = 2 1 ​ 为驻点且为极小值点， f ( 2 1 ​ ) = 4 1 ​ ，而 f ( 1 ) = 3 2 ​ 。 因此， f ( x ) 的最小值为 4 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数 \\(z=z(x,y)\\) 由方程 \\((x^2+y^2)z+\\ln z+2(x+y+1)=0\\) 确定，求 \\(z=z(x,y)\\) 的极值。",
    referenceAnswer: "【答案】 在点 ( − 1 , − 1 ) 处取得极大值，极大值为 z = 1 。 【解析】 给定方程组： { 2 x z + x 2 ∂ x ∂ z ​ + y 2 ∂ x ∂ z ​ + z 1 ​ ∂ x ∂ z ​ + 2 = 0 x 2 ∂ y ∂ z ​ + 2 yz + y 2 ∂ y ∂ z ​ + z 1 ​ ∂ y ∂ z ​ + 2 = 0 ​ 整理可得： ⎩ ⎨ ⎧ ​ x z + 1 = 0 yz + 1 = 0 x 2 z + y 2 z + ln z + 2 ( x + y + 1 ) = 0 ​ ⇒ ⎩ ⎨ ⎧ ​ x = − 1 y = − 1 z = 1 ​ 由第一个方程 2 x z + x 2 ∂ x ∂ z ​ + y 2 ∂ x ∂ z ​ + z 1 ​ ∂ x ∂ z ​ + 2 = 0 再对 x 求导得： 2 z + 2 x ∂ x ∂ z ​ + ( x 2 + y 2 ) ∂ x 2 ∂ 2 z ​ − z 2 1 ​ ( ∂ x ∂ z ​ ) 2 + z 1 ​ ⋅ ∂ x 2 ∂ 2 z ​ = 0 代入 ∂ x ∂ z ​ = 0 ， x = − 1 ， y = − 1 ， z = 1 ，得： A = ∂ x 2 ∂ 2 z ​ = − 3 2 ​ < 0 同理可得 ∂ y 2 ∂ 2 z ​ < 0 。 由第一个方程对 y 求导得： 2 x ∂ y ∂ z ​ + 2 y ∂ x ∂ z ​ + ( x 2 + y 2 ) ∂ x ∂ y ∂ 2 z ​ − z 2 1 ​ ⋅ ∂ x ∂ z ​ ⋅ ∂ y ∂ z ​ + z 1 ​ ⋅ ∂ x ∂ y ∂ 2 z ​ = 0 代入 ∂ x ∂ z ​ = 0 ， ∂ y ∂ z ​ = 0 ， x = − 1 ， y = − 1 ， z = 1 ，得： ∂ x ∂ y ∂ 2 z ​ = 0 由于 A C − B 2 > 0 且 A < 0 ，故在点 ( − 1 , − 1 ) 处取得极大值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设 \\(D\\) 是由直线 \\(y=1,\\ y=x,\\ y=-x\\) 围成的有界区域，计算二重积分 \\(\\iint_D\\frac{x^2-xy-y^2}{x^2+y^2}\\,dxdy.\\)",
    referenceAnswer: "【答案】 \\(\\displaystyle 1-\\frac{\\pi}{2}\\) 【解析】 记 \\[\nI=\\iint_D\\frac{x^2-xy-y^2}{x^2+y^2}\\,dx\\,dy.\n\\] 将被积函数拆开： \\[\nI=\\iint_D1\\,dx\\,dy\n-\\iint_D\\frac{xy}{x^2+y^2}\\,dx\\,dy\n-2\\iint_D\\frac{y^2}{x^2+y^2}\\,dx\\,dy.\n\\] 区域 \\(D\\) 关于 \\(y\\) 轴对称，而 \\(\\frac{xy}{x^2+y^2}\\) 关于 \\(x\\) 为奇函数，所以中间一项为 0。又 \\(D\\) 的面积为 1，故 \\[\nI=1-2\\iint_D\\frac{y^2}{x^2+y^2}\\,dx\\,dy.\n\\] 利用关于 \\(y\\) 轴的对称性，取右半区域 \\(0\\le y\\le1,\\ 0\\le x\\le y\\)： \\[\n2\\iint_D\\frac{y^2}{x^2+y^2}\\,dx\\,dy\n=4\\int_0^1\\!\\int_0^y\\frac{y^2}{x^2+y^2}\\,dx\\,dy.\n\\] 内层积分为 \\[\n\\int_0^y\\frac{y^2}{x^2+y^2}\\,dx\n=y\\left[\\arctan\\frac{x}{y}\\right]_0^y\n=\\frac{\\pi}{4}y.\n\\] 因此 \\[\n2\\iint_D\\frac{y^2}{x^2+y^2}\\,dx\\,dy\n=\\pi\\int_0^1y\\,dy=\\frac{\\pi}{2},\n\\] 从而 \\(\\displaystyle I=1-\\frac{\\pi}{2}\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知 \\(y_1(x)=e^x,\\ y_2(x)=u(x)e^x\\) 是二阶微分方程 \\((2x-1)y''-(2x+1)y'+2y=0\\) 的两个解。若 \\(u(-1)=e,\\ u(0)=-1\\)，求 \\(u(x)\\)，并写出该微分方程的通解。",
    referenceAnswer: "【答案】 \\(\\displaystyle \\mu(x)=(-2x-1)e^{-x}\\)，通解可写为 \\(\\displaystyle y=C_1e^x+C_2(2x+1)\\)。 【解析】 令 \\(y_2=\\mu(x)e^x\\)。代入 \\[\n(2x-1)y''-(2x+1)y'+2y=0\n\\] 并整理，得 \\[\n(2x-1)\\mu''=(3-2x)\\mu'.\n\\] 于是 \\[\n\\frac{\\mu''}{\\mu'}=\\frac{3-2x}{2x-1},\n\\qquad\n\\mu'(x)=C_1(2x-1)e^{-x}.\n\\] 积分得 \\[\n\\mu(x)=C_1(-2x-1)e^{-x}+C_2.\n\\] 由 \\(\\mu(-1)=e\\)、\\(\\mu(0)=-1\\) 得 \\(C_1=1,\\ C_2=0\\)，故 \\[\n\\mu(x)=(-2x-1)e^{-x}.\n\\] 注意题设中的第二个解是 \\(y_2=\\mu e^x\\)，因此 \\[\ny_2(x)=(-2x-1)e^{-x}e^x=-2x-1.\n\\] 与 \\(y_1=e^x\\) 线性无关，所以原方程通解为 \\[\ny=C_1e^x+C_2(2x+1).\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设 \\(D\\) 是由曲线 \\(y=\\sqrt{1-x^2}\\;(0\\le x\\le1)\\) 与曲线\\(\\begin{cases} x=\\cos^3t,\\\\ y=\\sin^3t, \\end{cases} \\;\\left(0\\le t\\le\\frac\\pi2\\right)\\)围成的平面区域，求 \\(D\\) 绕 \\(x\\) 轴旋转一周所得旋转体的体积和表面积。",
    referenceAnswer: "【答案】 体积 \\(\\displaystyle V=\\frac{18\\pi}{35}\\)，表面积 \\(\\displaystyle S=\\frac{16\\pi}{5}\\)。 【解析】 1. 体积 外边界 \\(y=\\sqrt{1-x^2}\\) 绕 \\(x\\) 轴形成半球，内边界参数曲线绕 \\(x\\) 轴形成内部旋转体。因此 \\[\nV=\\pi\\int_0^1(1-x^2)\\,dx-\\pi\\int_{\\pi/2}^{0}\\sin^6t\\,d(\\cos^3t).\n\\] 由于 \\(d(\\cos^3t)=-3\\cos^2t\\sin t\\,dt\\)，故 \\[\nV=\\frac{2\\pi}{3}-3\\pi\\int_0^{\\pi/2}\\sin^7t\\cos^2t\\,dt.\n\\] 又 \\[\n\\int_0^{\\pi/2}\\sin^7t\\cos^2t\\,dt\n=\\int_0^{\\pi/2}(\\sin^7t-\\sin^9t)\\,dt\n=\\frac{16}{315},\n\\] 所以 \\[\nV=\\frac{2\\pi}{3}-\\frac{16\\pi}{105}=\\frac{18\\pi}{35}.\n\\] 2. 表面积 半圆弧绕 \\(x\\) 轴所得曲面面积为 \\[\nS_1=2\\pi\\int_0^1\\sqrt{1-x^2}\\sqrt{1+\\frac{x^2}{1-x^2}}\\,dx=2\\pi.\n\\] 参数曲线满足 \\(x=\\cos^3t,\\ y=\\sin^3t\\)，且 \\[\n\\sqrt{(x')^2+(y')^2}=3\\sin t\\cos t\\qquad\\left(0\\le t\\le\\frac\\pi2\\right).\n\\] 故其旋转曲面面积为 \\[\nS_2=2\\pi\\int_0^{\\pi/2}\\sin^3t\\cdot3\\sin t\\cos t\\,dt\n=6\\pi\\int_0^{\\pi/2}\\sin^4t\\cos t\\,dt\n=\\frac{6\\pi}{5}.\n\\] 因此总表面积 \\[\nS=S_1+S_2=2\\pi+\\frac{6\\pi}{5}=\\frac{16\\pi}{5}.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知函数 \\(f(x)\\) 在 \\(\\left[0,\\dfrac{3\\pi}{2}\\right]\\) 上连续，在 \\(\\left(0,\\dfrac{3\\pi}{2}\\right)\\) 内是函数 \\(\\frac{\\cos x}{2x-3\\pi}\\) 的一个原函数，且 \\(f(0)=0\\)。（I）求 \\(f(x)\\) 在区间 \\(\\left[0,\\dfrac{3\\pi}{2}\\right]\\) 上的平均值；（II）证明 \\(f(x)\\) 在区间 \\(\\left(0,\\dfrac{3\\pi}{2}\\right)\\) 内存在唯一零点。",
    referenceAnswer: "【答案】 （1）\\(\\displaystyle \\frac1{3\\pi}\\)；（2）见解析。 【解析】 （1） 由 \\(f(0)=0\\) 且 \\(f'(x)=\\frac{\\cos x}{2x-3\\pi}\\)，有 \\[\nf(x)=\\int_0^x\\frac{\\cos t}{2t-3\\pi}\\,dt.\n\\] 交换积分次序： \\[\n\\int_0^{3\\pi/2}f(x)\\,dx\n=\\int_0^{3\\pi/2}\\frac{\\cos t}{2t-3\\pi}\\left(\\frac{3\\pi}{2}-t\\right)dt\n=-\\frac12\\int_0^{3\\pi/2}\\cos t\\,dt\n=\\frac12.\n\\] 因此平均值为 \\[\n\\frac{1}{3\\pi/2}\\int_0^{3\\pi/2}f(x)\\,dx=\\frac1{3\\pi}.\n\\] （2） 在 \\(0 \\[\nf'(x)<0\\quad\\left(0 0\\quad\\left(\\frac\\pi2 于是 \\(f\\) 先减后增，且 \\(f(0)=0\\)，所以 \\(0 再看右端点。令 \\(s=\\frac{3\\pi}{2}-t\\)，则 \\[\nf\\!\\left(\\frac{3\\pi}{2}\\right)\n=\\frac12\\int_0^{3\\pi/2}\\frac{\\sin s}{s}\\,ds.\n\\] 其中 \\[\n\\int_0^{\\pi}\\frac{\\sin s}{s}\\,ds\n\\ge \\int_0^{\\pi/2}\\frac{\\sin s}{s}\\,ds\n\\ge \\frac{2}{\\pi}\\int_0^{\\pi/2}\\sin s\\,ds=\\frac{2}{\\pi},\n\\] 而 \\[\n-\\int_{\\pi}^{3\\pi/2}\\frac{\\sin s}{s}\\,ds\n\\le \\frac1\\pi\\int_{\\pi}^{3\\pi/2}(-\\sin s)\\,ds=\\frac1\\pi.\n\\] 故 \\(f(3\\pi/2)>0\\)。由于 \\(f\\) 在 \\((\\pi/2,3\\pi/2)\\) 上严格递增，从负值增到正值，所以该区间内恰有一个零点；结合 \\((0,\\pi/2]\\) 内无零点，得 \\(f(x)\\) 在 \\((0,3\\pi/2)\\) 内存在唯一零点。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设矩阵\\(A=\\begin{pmatrix}1&1&1-a\\\\1&0&a\\\\a+1&1&a+1\\end{pmatrix},\\; \\beta=\\begin{pmatrix}0\\\\1\\\\2a-2\\end{pmatrix},\\)且方程组 \\(Ax=\\beta\\) 无解。（I）求 \\(a\\) 的值；（II）求方程组\\(A^TAx=A^T\\beta\\) 的通解。",
    referenceAnswer: "【答案】 （1） a = 0 （2） x = k ​ 0 − 1 1 ​ ​ + ​ 1 − 2 0 ​ ​ , k ∈ R 【解析】 （1）由方程组 A x = β 无解，可知 r ( A )  = r ( A , β ) ，因此 ∣ A ∣ = 0 。 计算行列式： ∣ A ∣ = ​ 1 1 a + 1 ​ 1 0 1 ​ 1 − a a a + 1 ​ ​ = 0 解得 a = 0 或 a = 2 。 当 a = 0 时， r ( A )  = r ( A , β ) ；当 a = 2 时， r ( A ) = r ( A , β ) 。因此 a = 0 符合题意。 （2）当 a = 0 时， A T A = ​ 3 2 2 ​ 2 2 2 ​ 2 2 2 ​ ​ , A T β = ​ − 1 − 2 − 2 ​ ​ 于是 ( A T A , A T β ) = ​ 3 2 2 ​ 2 2 2 ​ 2 2 2 ​ − 1 − 2 − 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 1 0 ​ 1 − 2 0 ​ ​ 因此，方程组 A T A x = A T β 的通解为： x = k ​ 0 − 1 1 ​ ​ + ​ 1 − 2 0 ​ ​ , k ∈ R",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知矩阵 \\(A=\\begin{pmatrix}0&-1&1\\\\2&-3&0\\\\0&0&0\\end{pmatrix}.\\)（I）求 \\(A^{99}\\)；（II）设 3 阶矩阵 \\(B=(\\alpha_1,\\alpha_2,\\alpha_3)\\) 满足 \\(B^2=BA\\)。记\\(B^{100}=(\\beta_1,\\beta_2,\\beta_3),\\) 将 \\(\\beta_1,\\beta_2,\\beta_3\\) 分别表示为 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 的线性组合。",
    referenceAnswer: "【答案】 (1) A 99 = ​ − 2 + 2 99 − 2 + 2 100 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 99 2 − 2 99 0 ​ ​ (2) β 1 ​ = ( − 2 + 2 99 ) α 1 ​ + ( − 2 + 2 100 ) α 2 ​ β 2 ​ = ( 1 − 2 99 ) α 1 ​ + ( 1 − 2 100 ) α 2 ​ β 3 ​ = ( 2 − 2 99 ) α 1 ​ + ( 2 − 2 99 ) α 2 ​ 【解析】 (1) 由 ∣ λ E − A ∣ = λ ( λ + 1 ) ( λ + 2 ) = 0 ，得 λ 1 ​ = 0 , λ 2 ​ = − 1 , λ 3 ​ = − 2 。 因此 A 可相似对角化，且 A 与 ​ 0 ​ − 1 ​ − 2 ​ ​ 相似。 由 ( 0 E − A ) x = 0 得 η 1 ​ = ​ 2 3 ​ 1 1 ​ ​ ； 由 ( − E − A ) x = 0 得 η 2 ​ = ​ 1 1 0 ​ ​ ； 由 ( − 2 E − A ) x = 0 得 η 3 ​ = ​ 1 2 0 ​ ​ 。 令 P = ​ 2 3 ​ 1 1 ​ 1 1 0 ​ 1 2 0 ​ ​ ，则 P − 1 A P = ​ 0 ​ − 1 ​ − 2 ​ ​ = Λ 因此 A = P Λ P − 1 ，可得 A 99 = P Λ 99 P − 1 = ​ − 2 + 2 99 − 2 + 2 100 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 99 2 − 2 99 0 ​ ​ (2) 由 B 2 = B A 得 B 3 = B 2 A = B A 2 ⇒ B 4 = B 2 A 2 = B A 3 ⇒ ⋯ ⇒ B 100 = B A 99 因此 ( β 1 ​ β 2 ​ β 3 ​ ) = ( α 1 ​ α 2 ​ α 3 ​ ) A 99 于是 β 1 ​ = ( − 2 + 2 99 ) α 1 ​ + ( − 2 + 2 100 ) α 2 ​ β 2 ​ = ( 1 − 2 99 ) α 1 ​ + ( 1 − 2 100 ) α 2 ​ β 3 ​ = ( 2 − 2 99 ) α 1 ​ + ( 2 − 2 99 ) α 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2016_math2 = {
  id: P, year: Y,
  title: '2016 年全国硕士研究生招生考试 数学（二）',
  short: '2016 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2016_math2.length,
  qids: questions2016_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
