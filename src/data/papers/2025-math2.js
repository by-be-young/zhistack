const P = 'paper-2025-math2'
const Y = 2025
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2025-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2025 考研数学（二）真题',
  ...extra
})

export const questions2025_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(z=z(x,y)\\) 由 \\(z+\\ln z-\\int_y^x e^{-t^2}\\,dt=0\\) 确定，则 \\(\\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=（ ）\\)",
    options: [{ key: "A", text: "\\(\\displaystyle\\frac{z}{z+1}\\left(e^{-x^2}-e^{-y^2}\\right)\\)" }, { key: "B", text: "\\(\\displaystyle\\frac{z}{z+1}\\left(e^{-x^2}+e^{-y^2}\\right)\\)" }, { key: "C", text: "\\(\\displaystyle-\\frac{z}{z+1}\\left(e^{-x^2}-e^{-y^2}\\right)\\)" }, { key: "D", text: "\\(\\displaystyle-\\frac{z}{z+1}\\left(e^{-x^2}+e^{-y^2}\\right)\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 z + ln z − ∫ y x ​ e − t 2 d t = 0 ，分别对 x ， y 求偏导，得： ∂ x ∂ z ​ + z 1 ​ ∂ x ∂ z ​ − e − x 2 = 0 ⇒ ∂ x ∂ z ​ = z + 1 z ​ e − x 2 ∂ y ∂ z ​ + z 1 ​ ∂ y ∂ z ​ + e − y 2 = 0. ⇒ ∂ y ∂ z ​ = z + 1 − z ​ e − y 2 ∂ x ∂ z ​ + ∂ y ∂ z ​ = z + 1 z ​ ( e − x 2 − e − y 2 )"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数 \\(f(x)=\\int_0^x e^{t^2}\\sin t\\,dt,\\) \\(g(x)=\\left(\\int_0^x e^{t^2}\\,dt\\right)\\sin^2x,\\) 则（ ）",
    options: [{ key: "A", text: "\\(x=0\\) 是 \\(f(x)\\) 的极值点，也是 \\(g(x)\\) 的极值点" }, { key: "B", text: "\\(x=0\\) 是 \\(f(x)\\) 的极值点，\\((0,0)\\) 是曲线 \\(y=g(x)\\) 的拐点" }, { key: "C", text: "\\(x=0\\) 是 \\(f(x)\\) 的极值点，\\((0,0)\\) 是曲线 \\(y=f(x)\\) 的拐点" }, { key: "D", text: "\\((0,0)\\) 是曲线 \\(y=f(x)\\) 的拐点，也是曲线 \\(y=g(x)\\) 的拐点" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 f ′ ( x ) = e x 2 sin x , f ′′ ( x ) = 2 x e x 2 sin x + e x 2 cos x f ′ ( 0 ) = 0 , f ′′ ( 0 ) = 1 > 0 . x = 0 是 f ( x ) 的极值点. g ′ ( x ) = e x 2 sin 2 x + sin 2 x ∫ 0 x ​ e t 2 d t ， g ′′ ( x ) = e x 2 sin 2 x + 2 x e x 2 sin 2 x + sin 2 x e x 2 + 2 cos 2 x ∫ 0 x ​ e t 2 d t g ′ ( 0 ) = 0 , g ′′ ( 0 ) = 0 , g ′′′ ( 0 ) > 0 . ( 0 , 0 ) 是 y = g ( x ) 的拐点."
  }),
  base(3, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "如果对微分方程 \\(y''-2ay'+(a+2)y=0\\) 的任一解 \\(y(x)\\)，反常积分 \\(\\int_0^{+\\infty}y(x)\\,dx\\) 均收敛，那么 \\(a\\) 的取值范围是（ ）",
    options: [{ key: "A", text: "\\((-2,-1]\\)" }, { key: "B", text: "\\((-\\infty,-1]\\)" }, { key: "C", text: "\\((-2,0)\\)" }, { key: "D", text: "\\((-\\infty,0)\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】特征方程为 \\(r^2-2ar+(a+2)=0\\)。要使任一解 \\(y(x)\\) 对应的反常积分 \\(\\int_0^{+\\infty}y(x)\\,dx\\) 都收敛，齐次方程的每个基本解都必须随 \\(x\\to+\\infty\\) 衰减，因此两个特征根的实部都必须小于 0。 对二次多项式 \\(r^2-2ar+(a+2)\\)，二阶 Hurwitz 条件等价于 \\[-2a>0,\\qquad a+2>0.\\] 即 \\(a<0\\) 且 \\(a>-2\\)，所以 \\(-2<a<0\\)。端点 \\(a=-2\\) 时有零特征根，\\(a=0\\) 时特征根为纯虚根，均不能保证任一解的反常积分收敛。故选 C。"
  }),
  base(4, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x),g(x)\\) 在 \\(x=0\\) 的某去心邻域内有定义且恒不为零。若当 \\(x\\to0\\) 时，\\(f(x)\\) 是 \\(g(x)\\) 的高阶无穷小，则当 \\(x\\to0\\) 时（ ）",
    options: [{ key: "A", text: "\\(f(x)+g(x)=o(g(x))\\)" }, { key: "B", text: "\\(f(x)g(x)=o(f^2(x))\\)" }, { key: "C", text: "\\(f(x)=o(e^{g(x)}-1)\\)" }, { key: "D", text: "\\(f(x)=o(g^2(x))\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】“\\(f(x)\\) 是 \\(g(x)\\) 的高阶无穷小”即 \\(f=o(g)\\)，因此 \\(g(x)\\to0\\) 且 \\[\\frac{f(x)}{g(x)}\\to0.\\] A：\\(\\dfrac{f+g}{g}=\\dfrac fg+1\\to1\\neq0\\)，故 \\(f+g\\neq o(g)\\)。 B：\\(\\dfrac{fg}{f^2}=\\dfrac gf\\)，它不可能由 \\(f/g\\to0\\) 推出趋于 0，故不成立。 C：利用 \\(e^{g}-1\\sim g\\)，有 \\[\\frac{f}{e^g-1}=\\frac fg\\cdot\\frac{g}{e^g-1}\\to0\\cdot1=0,\\] 所以 \\(f=o(e^g-1)\\)，C 正确。 D 不一定成立。例如取 \\(g(x)=x\\)、\\(f(x)=x^2\\)，则 \\(f=o(g)\\)，但 \\(f/g^2\\equiv1\\)，故 \\(f\\neq o(g^2)\\)。"
  }),
  base(5, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x,y)\\) 连续，则 \\(\\int_{-2}^{2}dx\\int_{4-x^2}^{4}f(x,y)\\,dy=（ ）\\)",
    options: [{ key: "A", text: "\\(\\int_0^4\\left[\\int_{-2}^{-\\sqrt{4-y}}f(x,y)\\,dx+\\int_{\\sqrt{4-y}}^2f(x,y)\\,dx\\right]dy\\)" }, { key: "B", text: "\\(\\int_0^4\\left[\\int_{-2}^{\\sqrt{4-y}}f(x,y)\\,dx+\\int_{\\sqrt{4-y}}^2f(x,y)\\,dx\\right]dy\\)" }, { key: "C", text: "\\(\\int_0^4\\left[\\int_{-2}^{-\\sqrt{4-y}}f(x,y)\\,dx+\\int_2^{\\sqrt{4-y}}f(x,y)\\,dx\\right]dy\\)" }, { key: "D", text: "\\(2\\int_0^4dy\\int_{\\sqrt{4-y}}^2f(x,y)\\,dx\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】由题易知，此二重积分积分区域为 D = { ( x , y ) ∣4 − x 2 ≤ y ≤ 4 , − 2 ≤ x ≤ 2 } ，对应图像为上图所示。 记 D 1 ​ = { ( x , y ) ∣4 − x 2 ≤ y ≤ 4 , − 2 ≤ x ≤ 0 } ， D 2 ​ = { ( x , y ) ∣4 − x 2 ≤ y ≤ 4 , 0 ≤ x ≤ 2 } ，且 I = ∫ − 2 2 ​ d x ∫ 4 − x 2 4 ​ f ( x , y ) d y ，则 I = D 1 ​ ∬ ​ f ( x , y ) d σ + D 2 ​ ∬ ​ f ( x , y ) d σ ，交换积分次序得 I = ∫ 0 4 ​ d y ∫ − 2 − 4 − y ​ ​ f ( x , y ) d x + ∫ 0 4 ​ d y ∫ 4 − y ​ 2 ​ f ( x , y ) d x = ∫ 0 4 ​ [ ∫ − 2 − 4 − y ​ ​ f ( x , y ) d x + ∫ 4 − y ​ 2 ​ f ( x , y ) d x ] d y 故 A 正确。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设单位质点 \\(p,q\\) 分别位于点 \\((0,0)\\) 和 \\((0,1)\\) 处，\\(p\\) 从点 \\((0,0)\\) 出发沿 \\(x\\) 轴正向移动，记 \\(G\\) 为引力常量，则当质点 \\(p\\) 移动到点 \\((t,0)\\) 时，克服质点 \\(q\\) 的引力所做的功为（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_0^t\\frac{G}{x^2+1}\\,dx\\)" }, { key: "B", text: "\\(\\displaystyle\\int_0^t\\frac{Gx}{(x^2+1)^{3/2}}\\,dx\\)" }, { key: "C", text: "\\(\\displaystyle\\int_0^t\\frac{G}{(x^2+1)^{3/2}}\\,dx\\)" }, { key: "D", text: "\\(\\displaystyle\\int_0^t\\frac{G(x+1)}{(x^2+1)^{3/2}}\\,dx\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】当质点 \\(P\\) 位于 \\((x,0)\\) 时，它与 \\(Q(0,1)\\) 的距离为 \\(r=\\sqrt{x^2+1}\\)，引力大小为 \\[F=\\frac{G}{x^2+1}.\\] 引力沿 \\(x\\) 轴方向的分量大小为 \\[F_x=F\\frac{x}{\\sqrt{x^2+1}}=\\frac{Gx}{(x^2+1)^{3/2}}.\\] 质点从 \\(x=0\\) 移到 \\(x=t\\) 时，克服引力所做的功为 \\[W=\\int_0^t\\frac{Gx}{(x^2+1)^{3/2}}\\,dx.\\] 故选 B。"
  }),
  base(7, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 连续，给出下列四个条件：① \\(\\displaystyle\\lim_{x\\to0}\\frac{|f(x)|-f(0)}x\\) 存在；② \\(\\displaystyle\\lim_{x\\to0}\\frac{f(x)-|f(0)|}x\\) 存在；③ \\(\\displaystyle\\lim_{x\\to0}\\frac{|f(x)|}x\\) 存在；④ \\(\\displaystyle\\lim_{x\\to0}\\frac{|f(x)|-|f(0)|}x\\) 存在。其中能得到“\\(f(x)\\) 在 \\(x=0\\) 处可导”的条件个数是（ ）",
    options: [{ key: "A", text: "\\(1\\)" }, { key: "B", text: "\\(2\\)" }, { key: "C", text: "\\(3\\)" }, { key: "D", text: "\\(4\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】逐项判断。 ① \\(\\displaystyle\\lim_{x\\to0}\\frac{f(x)-f(0)}x\\) 存在，这就是 \\(f'(0)\\) 的定义，所以必可导。 ② 若 \\(\\displaystyle\\lim_{x\\to0}\\frac{f(x)-|f(0)|}{x}\\) 存在且有限，则分子必须趋于 0。由连续性，\\(f(x)\\to f(0)\\)，故 \\(f(0)=|f(0)|\\)，即 \\(f(0)\\ge0\\)。于是该极限就是 \\(\\displaystyle\\lim_{x\\to0}\\frac{f(x)-f(0)}x\\)，所以可导。 ③ 若 \\(\\displaystyle\\lim_{x\\to0}\\frac{|f(x)|}{x}=L\\) 存在，则连续性先给出 \\(f(0)=0\\)。当 \\(x\\to0^+\\) 时比值非负，而 \\(x\\to0^-\\) 时比值非正；两侧极限相等只能有 \\(L=0\\)。因此 \\(|f(x)|=o(|x|)\\)，从而 \\(f(x)=o(x)\\)，故 \\(f'(0)=0\\)。 ④ 该条件等价于 \\(|f(x)|\\) 在 0 处可导。若 \\(f(0)\\neq0\\)，由连续性知 0 附近 \\(f(x)\\) 符号不变，故 \\(|f(x)|=\\pm f(x)\\)，于是 \\(f\\) 可导；若 \\(f(0)=0\\)，则退化为③，同样可导。 因此四个条件都能推出 \\(f(x)\\) 在 \\(x=0\\) 处可导，故选 D。"
  }),
  base(8, 'k-math-019', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\\(\\begin{pmatrix} 1&2&0\\\\ 2&a&0\\\\ 0&0&b \\end{pmatrix}\\)有一个正特征值和两个负特征值，则（ ）",
    options: [{ key: "A", text: "\\(a>4,\\ b>0\\)" }, { key: "B", text: "\\(a<4,\\ b>0\\)" }, { key: "C", text: "\\(a>4,\\ b<0\\)" }, { key: "D", text: "\\(a<4,\\ b<0\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 令 A = ​ 1 2 0 ​ 2 a 0 ​ 0 0 b ​ ​ ，为实对称矩阵，对应二次型为 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = x 1 2 ​ + a x 2 2 ​ + b x 3 2 ​ + 4 x 1 ​ x 2 ​ 。 用配方法将其化为标准型： f ( x 1 ​ , x 2 ​ , x 3 ​ ) = ( x 1 ​ + 2 x 2 ​ ) 2 + ( a − 4 ) x 2 2 ​ + b x 3 2 ​ 。 已知 A 有一正两负特征值，则 { a − 4 < 0 b < 0 ​ ⇒ { a < 4 b < 0 ​ 故选 D。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "下列矩阵中，可以经过若干初等行变换得到矩阵\\(\\begin{pmatrix} 1&1&0&1\\\\ 0&0&1&2\\\\ 0&0&0&0 \\end{pmatrix}\\)的是（ ）",
    options: [{ key: "A", text: "\\(\\begin{pmatrix}1&1&0&1\\\\1&2&1&3\\\\2&3&1&4\\end{pmatrix}\\)" }, { key: "B", text: "\\(\\begin{pmatrix}1&1&0&1\\\\1&1&2&5\\\\1&1&1&3\\end{pmatrix}\\)" }, { key: "C", text: "\\(\\begin{pmatrix}1&0&0&1\\\\0&1&0&3\\\\0&1&0&0\\end{pmatrix}\\)" }, { key: "D", text: "\\(\\begin{pmatrix}1&1&2&3\\\\1&2&2&3\\\\2&3&4&6\\end{pmatrix}\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 A选项： ​ 1 1 2 ​ 1 2 3 ​ 0 1 1 ​ 1 3 4 ​ ​ → ​ 1 0 0 ​ 1 1 1 ​ 0 1 1 ​ 1 2 2 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 0 1 0 ​ 1 2 0 ​ ​ B选项： ​ 1 1 1 ​ 1 1 1 ​ 0 2 1 ​ 1 5 3 ​ ​ → ​ 1 0 0 ​ 1 0 0 ​ 0 2 1 ​ 1 4 2 ​ ​ → ​ 1 0 0 ​ 1 0 0 ​ 0 1 0 ​ 1 2 0 ​ ​ C选项： ​ 1 0 0 ​ 0 1 1 ​ 0 0 0 ​ 1 3 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 0 ​ 0 0 1 ​ ​ D选项： ​ 1 1 2 ​ 1 2 3 ​ 2 2 4 ​ 3 3 6 ​ ​ → ​ 1 0 0 ​ 1 1 1 ​ 2 0 0 ​ 3 0 0 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 2 0 0 ​ 3 0 0 ​ ​"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 3 阶矩阵 \\(A,B\\) 满足 \\(r(AB)=r(BA)+1,\\) 则（ ）",
    options: [{ key: "A", text: "方程组 \\((A+B)x=0\\) 只有零解" }, { key: "B", text: "方程组 \\(Ax=0\\) 与方程组 \\(Bx=0\\) 均只有零解" }, { key: "C", text: "方程组 \\(Ax=0\\) 与方程组 \\(Bx=0\\) 没有公共非零解" }, { key: "D", text: "方程组 \\(ABAx=0\\) 与方程组 \\(BABx=0\\) 有公共非零解" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 取 A = ​ 1 1 1 ​ 1 1 1 ​ 1 1 1 ​ ​ ， B = ​ 1 1 1 ​ 0 0 0 ​ − 1 − 1 − 1 ​ ​ ， 则 AB = ​ 3 3 3 ​ 0 0 0 ​ − 3 − 3 − 3 ​ ​ ， r ( AB ) = 1 。 BA = ​ 0 0 0 ​ 0 0 0 ​ 0 0 0 ​ ​ ， r ( BA ) = 0 ，排除选项 B 和 C。 A + B = ​ 2 2 2 ​ 1 1 1 ​ 0 0 0 ​ ​ ， r ( A + B ) = 1 ，排除选项 A，故选 D。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设 \\(\\int_1^{+\\infty}\\frac{a}{x(2x+a)}\\,dx=\\ln2,\\) 则 \\(a=\\underline{\\qquad}.\\)",
    answerText: "】 \\(2\\) 【",
    referenceAnswer: "【答案】 \\(2\\) 【解析】 先作部分分式分解： \\[\\frac{a}{x(2x+a)}=\\frac1x-\\frac{2}{2x+a}.\\] 若积分在 \\([1,+\\infty)\\) 上无奇点，则 \\[\\int_1^{+\\infty}\\frac{a}{x(2x+a)}\\,dx\n=\\left[\\ln x-\\ln|2x+a|\\right]_1^{+\\infty}\n=\\ln\\frac{|a+2|}{2}.\\] 由 \\(\\ln\\dfrac{|a+2|}{2}=\\ln2\\) 得 \\(|a+2|=4\\)，所以 \\(a=2\\) 或 \\(a=-6\\)。 当 \\(a=-6\\) 时，分母 \\(2x+a=2x-6\\) 在 \\(x=3\\) 处为 0，原反常积分发散，舍去。因此 \\(a=2\\)。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）曲线 \\(y=\\sqrt[3]{x^3-3x^2+1}\\) 的渐近线方程为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 y = x − 1 【",
    referenceAnswer: "【答案】 y = x − 1 【解析】 可得无水平渐近线、铅直渐近线，故求斜渐近线即可． k = x → ∞ lim ​ x 3 x 3 − 3 x 2 + 1 ​ ​ = x → ∞ lim ​ 3 x 3 x 3 − 3 x 2 + 1 ​ ​ = 1 b ​ = x → ∞ lim ​ 3 x 3 − 3 x 2 + 1 ​ − x = x → ∞ lim ​ x ⋅ ( ( 1 + x 3 1 − 3 x 2 ​ ) 3 1 ​ − 1 ) = x → ∞ lim ​ x ⋅ 3 1 ​ ⋅ x 3 1 − 3 x 2 ​ = − 1 ​ 故 y = x − 1 ．",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\\(\\lim_{n\\to\\infty}\\frac1{n^2}\\left[\\ln\\frac1n+2\\ln\\frac2n+\\cdots+(n-1)\\ln\\frac{n-1}{n}\\right] =\\underline{\\qquad}.\\)",
    answerText: "】 - 4 1 ​ 【",
    referenceAnswer: "【答案】 - 4 1 ​ 【解析】 n → ∞ lim ​ n 2 1 ​ [ ln n 1 ​ + 2 ln n 2 ​ + ⋯ + ( n − 1 ) ln n n − 1 ​ ] = n → ∞ lim ​ ( n 1 ​ ln n 1 ​ + n 2 ​ ln n 2 ​ + ⋯ + n n − 1 ​ ln n n − 1 ​ ) ⋅ n 1 ​ = n → ∞ lim ​ ( n 1 ​ ln n 1 ​ + n 2 ​ ln n 2 ​ + ⋯ + n n − 1 ​ ln n n − 1 ​ + n n ​ ln n n ​ ) ⋅ n 1 ​ = n → ∞ lim ​ ∑ i = 1 n ​ n i ​ ln n i ​ ⋅ n 1 ​ = ∫ 0 1 ​ x ln x d x = 2 1 ​ ∫ 0 1 ​ ln x d x 2 = 2 1 ​ ( x 2 ln x ​ 0 1 ​ − ∫ 0 1 ​ x 2 ⋅ x 1 ​ d x ) = − 2 1 ​ ∫ 0 1 ​ x d x = − 4 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知函数 \\(y=y(x)\\) 由\\(\\begin{cases} x=\\ln(1+2t),\\\\ 2t-\\displaystyle\\int_1^{y+t^2}e^{-u^2}\\,du=0 \\end{cases}\\)确定，则 \\(\\left.\\frac{dy}{dx}\\right|_{t=0}=\\underline{\\qquad}.\\)",
    answerText: "】 e 【",
    referenceAnswer: "【答案】 e 【解析】 { x = ln ( 1 + 2 t ) 2 t − ∫ 1 y + t 2 ​ e − u 2 d u = 0 ​ 由②两边关于 t 求导，则 2 − e − ( y + t 2 ) 2 ⋅ ( d t d y ​ + 2 t ) = 0 。 当 t = 0 时， y = 1 ， 2 − e − 1 ⋅ d t d y ​ = 0 ⇒ d t d y ​ = 2 e 。 则 d x d y ​ ​ t = 0 ​ = d t d x ​ ​ t = 0 ​ d t d y ​ ​ t = 0 ​ ​ = 2 2 e ​ = e 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）微分方程 \\((2y-3x)\\,dx+(2x-5y)\\,dy=0\\) 满足条件 \\(y(1)=1\\) 的解为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 3 x 2 − 4 x y + 5 y 2 = 4 【",
    referenceAnswer: "【答案】 3 x 2 − 4 x y + 5 y 2 = 4 【解析】 解： ⇒ ⇒ ​ ( 2 y − 3 x ) d x + ( 2 x − 5 y ) d y = 0 2 y d x + 2 x d y − 3 x d x − 5 y d y = 0 d ( 2 x y ) − d ( 2 3 ​ x 2 ) − d ( 2 5 ​ y 2 ) = 0 ​ 即： ⇒ ​ d ( 2 x y − 2 3 ​ x 2 − 2 5 ​ y 2 ) = 0 2 x y − 2 3 ​ x 2 − 2 5 ​ y 2 = c ​ 又因为 y ( 1 ) = 1 ，则： 2 − 2 3 ​ − 2 5 ​ = c ⇒ c = − 2 即： 2 x y − 2 3 ​ x 2 − 2 5 ​ y 2 = − 2 整理得： 3 x 2 − 4 x y + 5 y 2 = 4 则所求方程为 y = 5 2 x + 20 − 11 x 2 ​ ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设矩阵 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4),\\) 若 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关，且 \\(\\alpha_1+\\alpha_2=\\alpha_3+\\alpha_4,\\) 则方程组 \\(Ax=\\alpha_1+4\\alpha_4\\) 的通解为 \\(x=\\underline{\\qquad}.\\)",
    answerText: "】 k ​ 1 1 − 1 − 1 ​ ​ + ​ 1 0 0 4 ​ ​ ，其中 k 为任意常数。 【",
    referenceAnswer: "【答案】 k ​ 1 1 − 1 − 1 ​ ​ + ​ 1 0 0 4 ​ ​ ，其中 k 为任意常数。 【解析】 由于 α 1 ​ + α 2 ​ = α 3 ​ + α 4 ​ ，可知 α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ 线性相关。 又已知 α 1 ​ , α 2 ​ , α 3 ​ 线性无关，因此 r ( A ) = 3 。 方程 A x = α 1 ​ + 4 α 4 ​ 等价于 ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) ⋅ ​ 1 0 0 4 ​ ​ = α 1 ​ + 4 α 4 ​ , 所以 ​ 1 0 0 4 ​ ​ 是该方程的一个特解。 由 α 1 ​ + α 2 ​ = α 3 ​ + α 4 ​ ，可得 α 1 ​ + α 2 ​ − α 3 ​ − α 4 ​ = 0 , 即 ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) ⋅ ​ 1 1 − 1 − 1 ​ ​ = 0 . 因此 ​ 1 1 − 1 − 1 ​ ​ 是齐次方程 A x = 0 的一个解向量。 由 s = n − r ( A ) = 4 − 3 = 1 可知，齐次方程的基础解系含一个向量，故 ​ 1 1 − 1 − 1 ​ ​ 即为 A x = 0 的一个基础解系。 于是，原方程 A x = α 1 ​ + 4 α 4 ​ 的通解为 k ​ 1 1 − 1 − 1 ​ ​ + ​ 1 0 0 4 ​ ​ , 其中 k 为任意常数。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）计算 \\(\\int_0^1\\frac1{(x+1)(x^2-2x+2)}\\,dx.\\)",
    referenceAnswer: "【答案】 10 3 ​ ln 2 + 10 π ​ 【解析】 首先，将积分拆分为部分分式： ∫ 0 1 ​ ( x + 1 ) ( x 2 − 2 x + 2 ) 1 ​ d x = ∫ 0 1 ​ ( x + 1 A ​ + x 2 − 2 x + 2 B x + C ​ ) d x 通过待定系数法，解得： A = 5 1 ​ , B = − 5 1 ​ , C = 5 3 ​ 代入后得： ∫ 0 1 ​ ( x + 1 1/5 ​ + x 2 − 2 x + 2 − 5 1 ​ x + 5 3 ​ ​ ) d x 分别计算各部分积分： 5 1 ​ ∫ 0 1 ​ x + 1 1 ​ d x = 5 1 ​ ln ∣ x + 1∣ ​ 0 1 ​ − 5 1 ​ ∫ 0 1 ​ x 2 − 2 x + 2 x − 3 ​ d x = − 10 1 ​ ln ∣ x 2 − 2 x + 2∣ ​ 0 1 ​ + 5 2 ​ arctan ( x − 1 ) ​ 0 1 ​ 代入上下限计算： 5 1 ​ ln ∣1 + 1∣ − 5 1 ​ ln ∣0 + 1∣ = 5 1 ​ ln 2 − 10 1 ​ ln ∣ 1 2 − 2 ⋅ 1 + 2∣ + 10 1 ​ ln ∣ 0 2 − 2 ⋅ 0 + 2∣ = − 10 1 ​ ln 1 + 10 1 ​ ln 2 = 10 1 ​ ln 2 5 2 ​ arctan ( 1 − 1 ) − 5 2 ​ arctan ( 0 − 1 ) = 5 2 ​ ( 0 − ( − 4 π ​ )) = 10 π ​ 合并结果： 5 1 ​ ln 2 + 10 1 ​ ln 2 + 10 π ​ = 10 3 ​ ln 2 + 10 π ​ 因此，原积分的值为： ∫ 0 1 ​ ( x + 1 ) ( x 2 − 2 x + 2 ) 1 ​ d x = 10 3 ​ ln 2 + 10 π ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(f(x)\\) 在 \\(x=0\\) 处连续，且 \\(\\lim_{x\\to0}\\frac{xf(x)-e^{2\\sin x}+1}{\\ln(1+x)+\\ln(1-x)}=-3,\\) 证明 \\(f(x)\\) 在 \\(x=0\\) 处可导，并求 \\(f'(0)\\)。",
    referenceAnswer: "【答案】 f ′ ( 0 ) = 5 【解析】 解： 已知 ln ( 1 + x ) + ln ( 1 − x ) = x − 2 1 ​ x 2 + o ( x 2 ) − x − 2 1 ​ x 2 + o ( x 2 ) = − x 2 + o ( x 2 ) e 2 s i n x = 1 + 2 sin x + 2 1 ​ ( 2 sin x ) 2 + o ( x 2 ) = 1 + 2 sin x + 2 sin 2 x + o ( x 2 ) 因此， − 3 = x → 0 lim ​ − x 2 x f ( x ) − e 2 s i n x + 1 ​ = x → 0 lim ​ − x 2 x f ( x ) − ( 1 + 2 sin x + 2 sin 2 x + o ( x 2 ) ) + 1 ​ = x → 0 lim ​ − x 2 x f ( x ) − 2 sin x ​ + x → 0 lim ​ − x 2 − 2 sin 2 x ​ 可以得出 x → 0 lim ​ − x 2 x f ( x ) − 2 sin x ​ = − 5 , x → 0 lim ​ x 2 x f ( x ) − 2 ( x − 6 1 ​ x 3 + o ( x 3 ) ) ​ = 5 , 进一步得到 x → 0 lim ​ x 2 x f ( x ) − 2 x ​ = 5 , 即 x → 0 lim ​ x f ( x ) − 2 ​ = 5. 由 x → 0 lim ​ [ f ( x ) − 2 ] = 0 可得 x → 0 lim ​ f ( x ) = 2 = f ( 0 ) , 故 f ′ ( 0 ) = x → 0 lim ​ x f ( x ) − 2 ​ = 5.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(f(x,y)\\) 可微且满足 \\(df(x,y)=-2xe^{-y}\\,dx+e^{-y}(x^2-y-1)\\,dy,\\) \\(f(0,0)=2\\)，求 \\(f(x,y)\\)，并求 \\(f(x,y)\\) 的极值。",
    referenceAnswer: "【答案】 \\(f(x,y)=-x^2e^{-y}+(y+2)e^{-y}\\)，驻点为 \\((0,-1)\\)，极大值为 \\(e\\)。 【解析】 由全微分可知 \\[f_x=-2xe^{-y},\\qquad f_y=e^{-y}(x^2-y-1).\\] 对 \\(x\\) 积分： \\[f(x,y)=-x^2e^{-y}+\\varphi(y).\\] 再与 \\(f_y\\) 比较，得到 \\[x^2e^{-y}+\\varphi'(y)=e^{-y}(x^2-y-1),\\qquad \\varphi'(y)=-(y+1)e^{-y}.\\] 故 \\(\\varphi(y)=(y+2)e^{-y}+C\\)。由 \\(f(0,0)=2\\) 得 \\(C=0\\)，于是 \\[f(x,y)=-x^2e^{-y}+(y+2)e^{-y}.\\] 驻点由 \\(f_x=f_y=0\\) 得 \\((0,-1)\\)。二阶偏导为 \\[f_{xx}=-2e^{-y},\\qquad f_{xy}=2xe^{-y},\\qquad f_{yy}=-e^{-y}(x^2-y-1)-e^{-y}=e^{-y}(y-x^2).\\] 在 \\((0,-1)\\) 处，\\(A=f_{xx}=-2e\\)、\\(B=f_{xy}=0\\)、\\(C=f_{yy}=-e\\)，故 \\[AC-B^2=2e^2>0,\\qquad A<0.\\] 所以 \\((0,-1)\\) 为极大值点，极大值为 \\(f(0,-1)=e\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知平面有界区域 \\(D=\\{(x,y)\\mid x^2+y^2\\le4x,\\ x^2+y^2\\le4y\\},\\) 计算 \\(\\iint_D(x-y)^2\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 \\(12\\pi-\\dfrac{112}{3}\\) 【解析】 由 \\[x^2+y^2\\le4x,\\qquad x^2+y^2\\le4y\\] 作极坐标变换 \\(x=r\\cos\\theta,\\ y=r\\sin\\theta\\)，得到 \\[r\\le4\\cos\\theta,\\qquad r\\le4\\sin\\theta.\\] 区域 \\(D\\) 关于直线 \\(y=x\\) 对称，被积函数 \\((x-y)^2\\) 也关于该直线对称。因此取 \\(0\\le\\theta\\le\\pi/4\\) 的一半区域时，应有 \\(0\\le r\\le4\\sin\\theta\\)。于是 \\[\\begin{aligned}\nI&=2\\int_0^{\\pi/4}\\!\\int_0^{4\\sin\\theta} r^2(\\cos\\theta-\\sin\\theta)^2\\,r\\,dr\\,d\\theta\\\\\n&=128\\int_0^{\\pi/4}\\left(\\sin^4\\theta-2\\sin^5\\theta\\cos\\theta\\right)d\\theta.\n\\end{aligned}\\] 其中 \\[\\int_0^{\\pi/4}\\sin^4\\theta\\,d\\theta=\\frac{3\\pi}{32}-\\frac14,\\qquad\n\\int_0^{\\pi/4}2\\sin^5\\theta\\cos\\theta\\,d\\theta=\\frac1{24}.\\] 所以 \\[I=128\\left(\\frac{3\\pi}{32}-\\frac14-\\frac1{24}\\right)=12\\pi-\\frac{112}{3}.\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(f(x)\\) 在区间 \\((a,b)\\) 内可导，证明导函数 \\(f'(x)\\) 在 \\((a,b)\\) 内严格单调增加的充分必要条件是：对 \\((a,b)\\) 内任意的 \\(x_1,x_2,x_3\\)，当 \\(x_1<x_2<x_3\\) 时，\\(\\frac{f(x_2)-f(x_1)}{x_2-x_1} < \\frac{f(x_3)-f(x_2)}{x_3-x_2}.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 必要性： 设 \\(f'(x)\\) 在 \\((a,b)\\) 内严格单调增加。任取 \\(x_1<x_2<x_3\\)。由拉格朗日中值定理，存在 \\(\\xi_1\\in(x_1,x_2)\\)、\\(\\xi_2\\in(x_2,x_3)\\)，使 \\[\\frac{f(x_2)-f(x_1)}{x_2-x_1}=f'(\\xi_1),\\qquad\n\\frac{f(x_3)-f(x_2)}{x_3-x_2}=f'(\\xi_2).\\] 因为 \\(\\xi_1<\\xi_2\\)，且 \\(f'\\) 严格递增，所以前一个割线斜率严格小于后一个割线斜率，题设不等式成立。 充分性： 反过来，假设对任意 \\(x_1<x_2<x_3\\) 都有题设的严格不等式。任取 \\(u<v\\)。 先取任意 \\(x<u\\)。由三点 \\(x<u<v\\)，有 \\[\\frac{f(u)-f(x)}{u-x}<\\frac{f(v)-f(u)}{v-u}.\\] 令 \\(x\\to u^-\\)，得到 \\[f'(u)\\le\\frac{f(v)-f(u)}{v-u}.\\] 再取任意 \\(y>v\\)。由 \\(u<v<y\\)，有 \\[\\frac{f(v)-f(u)}{v-u}<\\frac{f(y)-f(v)}{y-v}.\\] 令 \\(y\\to v^+\\)，得到 \\[\\frac{f(v)-f(u)}{v-u}\\le f'(v).\\] 因此对任意 \\(u<v\\)，都有 \\(f'(u)\\le f'(v)\\)，即 \\(f'\\) 单调不减。 若存在 \\(u<v\\) 使 \\(f'(u)=f'(v)\\)，由于 \\(f'\\) 已单调不减，就有 \\(f'(x)\\equiv f'(u)\\)（\\(u<x<v\\)）。于是由中值定理，\\(f\\) 在 \\((u,v)\\) 上为线性函数。任取 \\(u<x_1<x_2<x_3<v\\)，两段割线斜率就会相等，这与题设要求的严格不等式矛盾。 故任意 \\(u<v\\) 都有 \\(f'(u)<f'(v)\\)，所以 \\(f'(x)\\) 在 \\((a,b)\\) 内严格单调增加。充分性得证。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知矩阵\\(A=\\begin{pmatrix} 4&1&-2\\\\ 1&1&1\\\\ -2&1&a \\end{pmatrix}\\)与\\(B=\\begin{pmatrix} k&0&0\\\\ 0&6&0\\\\ 0&0&0 \\end{pmatrix}\\)合同。(1)求 \\(a\\) 的值及 \\(k\\) 的取值范围；(2)若存在正交矩阵 \\(Q\\)，使得 \\(Q^TAQ=B,\\) 求 \\(k\\) 及 \\(Q\\)。",
    referenceAnswer: "【答案】 (1) a = 4 ， k > 0 。 (2) k = 3 ， Q = ​ 3 ​ 1 ​ 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ − 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ 。 【解析】 （1） A 与 B 合同知，二者有相同的正负惯性指数 显然， B 的特征值为 k 、 6 、 0 ，故 A 有特征值 0 .故 ∣ A ∣ = 0 . 计算得 ∣ A ∣ = − 3 ( a − 4 ) ，即有 a = 4 . 此时 ∣ λ E − A ∣ = λ ( λ − 3 ) ( λ − 6 ) . 知 A 的特征值为 3 、 6 、 0 . P = 2 . 故 k > 0 . (2)由 Q T A Q = B ，知 Q − 1 A Q = B . 故 A 、 B 相似，特征值相同，故 k = 3 .对 A : λ = 3 时，解 ( 3 E − A ) X = 0 ， 得 c 1 ​ = ​ 1 1 1 ​ ​ ， λ = 6 时，解 ( 6 E − A ) x = 0 ，得 c 2 ​ = ​ − 1 0 1 ​ ​ λ = 0 时，解 ( 0 ⋅ E − A ) x = 0 得 c 3 ​ = [ 1 − 2 1 ​ ] 再单位化得： Q = ​ 3 ​ 1 ​ 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ − 6 ​ 2 ​ 6 ​ 1 ​ ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2025_math2 = {
  id: P, year: Y,
  title: '2025 年全国硕士研究生招生考试 数学（二）',
  short: '2025 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2025_math2.length,
  qids: questions2025_math2.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
