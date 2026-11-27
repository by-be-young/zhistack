const P = 'paper-2011-math2'
const Y = 2011
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2011-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2011 考研数学（二）真题',
  ...extra
})

export const questions2011_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知当 \\(x\\to0\\) 时，函数 \\(f(x)=3\\sin x-\\sin3x\\) 与 \\(cx^k\\) 是等价无穷小，则（ ）。",
    options: [{ key: "A", text: "\\(k=1,c=4\\)" }, { key: "B", text: "\\(k=1,c=-4\\)" }, { key: "C", text: "\\(k=3,c=4\\)" }, { key: "D", text: "\\(k=3,c=-4\\)" }],
    answer: ["C"],
    explain: "正确答案： C 根据泰勒公式及无穷小阶的比较可得。 sin x = x − 3 ! x 3 ​ + o ( x 3 ) , sin 3 x = 3 x − 3 ! 27 x 3 ​ + o ( x 3 ) x → 0 lim ​ c x k 3 sin x − sin 3 x ​ = x → 0 lim ​ c x k − 2 x 3 ​ + 2 9 x 3 ​ + o ( x 3 ) ​ = x → 0 lim ​ c x k 4 x 3 ​ = 1 因此 c = 4 ， k = 3 。 x → 0 lim ​ c x k 3 sin x − sin 3 x ​ ​ = x → 0 lim ​ c k x k − 1 3 cos x − 3 cos 3 x ​ = x → 0 lim ​ c k 3 ​ ⋅ x k − 1 − 2 sin 2 x sin ( − x ) ​ = c k 12 ​ x → 0 lim ​ x k − 1 x 2 ​ = 1 ​ 所以 k − 1 = 2 ， c k = 12 ，即 k = 3 ， c = 4 。"
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在 \\(x=0\\) 处可导，且 \\(f(0)=0\\)，则 \\(\\lim_{x\\to0}\\frac{x^2f(x)-2f(x^3)}{x^3}=\\) （ ）。",
    options: [{ key: "A", text: "\\(-2f'(0)\\)" }, { key: "B", text: "\\(-f'(0)\\)" }, { key: "C", text: "\\(f'(0)\\)" }, { key: "D", text: "\\(0\\)" }],
    answer: ["B"],
    explain: "正确答案： B 根据导数在某点的定义求解。 x → 0 lim ​ x 3 x 2 f ( x ) − 2 f ( x 3 ) ​ = x → 0 lim ​ x 3 x 2 f ( x ) − x 2 f ( 0 ) ​ − x → 0 lim ​ x 3 2 f ( x 3 ) − 2 f ( 0 ) ​ = f ′ ( 0 ) − 2 f ′ ( 0 ) = − f ′ ( 0 )"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)=\\ln|(x-1)(x-2)(x-3)|\\) 的驻点个数为（ ）。",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 函数的一阶导数为零的点为驻点，即 f ′ ( x ) = 0 的解为 x = 2 ± 3 ​ 1 ​ 。"
  }),
  base(4, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "微分方程 \\(y''-\\lambda^2y=e^{\\lambda x}+e^{-\\lambda x}\\;(\\lambda>0)\\) 的特解形式为（ ）。",
    options: [{ key: "A", text: "\\(a(e^{\\lambda x}+e^{-\\lambda x})\\)" }, { key: "B", text: "\\(ax(e^{\\lambda x}+e^{-\\lambda x})\\)" }, { key: "C", text: "\\(x(ae^{\\lambda x}+be^{-\\lambda x})\\)" }, { key: "D", text: "\\(x^2(ae^{\\lambda x}+be^{-\\lambda x})\\)" }],
    answer: ["C"],
    explain: "正确答案： C 当特征值为 ± λ ，且非齐次项中 ± λ 分别与特征根相等时，特解可设为： x ( a e λ x + b e − λ x )"
  }),
  base(5, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x),g(x)\\) 均有二阶连续导数，且满足 \\(f(0)>0,\\; g(0)<0,\\; f'(0)=g'(0)=0.\\) 则函数 \\(z=f(x)g(y)\\) 在点 \\((0,0)\\) 处取得极小值的一个充分条件是（ ）。",
    options: [{ key: "A", text: "\\(f''(0)<0,\\ g''(0)>0\\)" }, { key: "B", text: "\\(f''(0)<0,\\ g''(0)<0\\)" }, { key: "C", text: "\\(f''(0)>0,\\ g''(0)>0\\)" }, { key: "D", text: "\\(f''(0)>0,\\ g''(0)<0\\)" }],
    answer: ["A"],
    explain: "正确答案： A 根据 z x ​ z y ​ ​ = f ′ ( x ) g ( y ) = 0 , = f ( x ) g ′ ( y ) = 0 ​ 以及 z xx ​ = f ′′ ( x ) g ( y ) , z yy ​ = f ( x ) g ′′ ( y ) , z x y ​ = f ′ ( x ) g ′ ( y ) , 对于点 ( 0 , 0 ) ，有 z xx ​ ( 0 , 0 ) = f ′′ ( 0 ) g ( 0 ) , z yy ​ ( 0 , 0 ) = f ( 0 ) g ′′ ( 0 ) , z x y ​ ( 0 , 0 ) = f ′ ( 0 ) g ′ ( 0 ) . 已知 f ( 0 ) > 0 ， g ( 0 ) < 0 ，且 f ′ ( 0 ) = g ′ ( 0 ) = 0 。根据题意可判断： f ′′ ( 0 ) < 0 , g ′′ ( 0 ) > 0."
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\\(I=\\int_0^{\\pi/4}\\ln(\\sin x)\\,dx,\\; J=\\int_0^{\\pi/4}\\ln(\\cot x)\\,dx,\\; K=\\int_0^{\\pi/4}\\ln(\\cos x)\\,dx,\\)则 \\(I,J,K\\) 的大小关系为（ ）。",
    options: [{ key: "A", text: "\\(I<J<K\\)" }, { key: "B", text: "\\(I<K<J\\)" }, { key: "C", text: "\\(J<I<K\\)" }, { key: "D", text: "\\(K<J<I\\)" }],
    answer: ["B"],
    explain: "正确答案： B 在区间 [ 0 , 4 π ​ ] 上，有 ln sin x < ln cos x < ln cot x 。 根据定积分比较大小的性质，可知应选 (B)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，将 \\(A\\) 的第 2 列加到第 1 列得矩阵 \\(B\\)，再交换 \\(B\\) 的第 2 行与第 3 行得单位矩阵。记\\(P_1=\\begin{pmatrix}1&0&0\\\\1&1&0\\\\0&0&1\\end{pmatrix},\\;P_2=\\begin{pmatrix}1&0&0\\\\0&0&1\\\\0&1&0\\end{pmatrix},\\)则 \\(A=\\)（ ）。",
    options: [{ key: "A", text: "\\(P_1P_2\\)" }, { key: "B", text: "\\(P_1^{-1}P_2\\)" }, { key: "C", text: "\\(P_2P_1\\)" }, { key: "D", text: "\\(P_2P_1^{-1}\\)" }],
    answer: ["D"],
    explain: "正确答案： D 由初等变换及初等矩阵的性质易知 P 2 ​ A P 1 ​ = E ，从而 A = P 2 − 1 ​ P 1 − 1 ​ = P 2 ​ P 1 − 1 ​ , 答案应选 (D)。"
  }),
  base(8, 'k-math-018', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)\\) 是 4 阶矩阵，\\(A^*\\) 为 \\(A\\) 的伴随矩阵。若 \\((1,0,1,0)^T\\) 是方程组 \\(Ax=0\\) 的一个基础解系，则 \\(A^*x=0\\) 的一个基础解系可为（ ）。",
    options: [{ key: "A", text: "\\(\\alpha_1,\\alpha_3\\)" }, { key: "B", text: "\\(\\alpha_1,\\alpha_2\\)" }, { key: "C", text: "\\(\\alpha_1,\\alpha_2,\\alpha_3\\)" }, { key: "D", text: "\\(\\alpha_2,\\alpha_3,\\alpha_4\\)" }],
    answer: ["D"],
    explain: "正确答案： D 由 ( 1 , 0 , 1 , 0 ) ⊤ 是方程 A X = 0 的一个基础解系，可知 r ( A ) = 3 ，从而 r ( A ∗ ) = 1 ，且 ∣ A ∣ = 0 。 于是 A ∗ A = ∣ A ∣ E = 0 ，即 a 1 ​ , a 2 ​ , a 3 ​ , a 4 ​ 为 A ∗ X = 0 的解。 由 a 1 ​ + a 3 ​ = 0 ，可知 a 1 ​ , a 3 ​ 线性相关。又由 r ( A ) = 3 ，可知 a 2 ​ , a 3 ​ , a 4 ​ 线性无关。 同时 r ( A ∗ ) = 1 ，因此 a 2 ​ , a 3 ​ , a 4 ​ 为 A ∗ X = 0 的基础解系。 故应选 (D)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\lim_{x\\to0}\\left(\\frac{1+2^x}{2}\\right)^{1/x}=\\) ________。",
    answerText: "】 2 ​ 【",
    referenceAnswer: "【答案】 2 ​ 【解析】 首先，我们考虑极限： x → 0 lim ​ ( 2 1 + 2 x ​ ) x 1 ​ 为了简化计算，我们取自然对数并利用指数函数的连续性： x → 0 lim ​ ( 2 1 + 2 x ​ ) x 1 ​ = e l i m x → 0 ​ x 1 ​ l n ( 2 1 + 2 x ​ ) 接下来，我们处理指数部分： x → 0 lim ​ x 1 ​ ln ( 2 1 + 2 x ​ ) 注意到： 2 1 + 2 x ​ = 1 + 2 2 x − 1 ​ 因此，我们可以将极限改写为： x → 0 lim ​ x 1 ​ ln ( 1 + 2 2 x − 1 ​ ) 当 x → 0 时， 2 2 x − 1 ​ 是一个无穷小量，因此我们可以使用近似公式 ln ( 1 + y ) ≈ y 当 y → 0 时： ln ( 1 + 2 2 x − 1 ​ ) ≈ 2 2 x − 1 ​ 于是： x → 0 lim ​ x 1 ​ ⋅ 2 2 x − 1 ​ 进一步化简： 2 1 ​ x → 0 lim ​ x 2 x − 1 ​ 我们知道： x → 0 lim ​ x 2 x − 1 ​ = ln 2 因此： 2 1 ​ ⋅ ln 2 = ln 2 ​ 最后，代入指数函数： e l n 2 ​ = 2 ​ 所以： x → 0 lim ​ ( 2 1 + 2 x ​ ) x 1 ​ = 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "微分方程 \\(y'+y=e^{-x}\\cos x\\) 满足条件 \\(y(0)=0\\) 的解为 \\(y=\\) ________。",
    answerText: "】 y = e − x sin x 【",
    referenceAnswer: "【答案】 y = e − x sin x 【解析】 已知方程的解为： y = e − ∫ 1 d x ( C + ∫ e − x cos x e ∫ 1 d x d x ) = e − x ( C + sin x ) 代入初始条件 y ( 0 ) = 0 得： 0 = e 0 ( C + sin 0 ) = 1 ⋅ ( C + 0 ) = C 因此 C = 0 。 最终解为： y = e − x sin x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=\\int_0^x\\tan t\\,dt\\;\\left(0\\le x\\le\\frac\\pi4\\right)\\) 的弧长 \\(s=\\) ________。",
    answerText: "】 ln ( 2 ​ + 1 ) 【",
    referenceAnswer: "【答案】 ln ( 2 ​ + 1 ) 【解析】 要计算积分 s = ∫ 0 4 π ​ ​ 1 + tan 2 x ​ d x 首先，利用三角恒等式 1 + tan 2 x = sec 2 x 因此 1 + tan 2 x ​ = sec 2 x ​ = ∣ sec x ∣ 在区间 [ 0 , 4 π ​ ] 上， sec x > 0 ，所以 ∣ sec x ∣ = sec x 于是积分变为 s = ∫ 0 4 π ​ ​ sec x d x 已知 ∫ sec x d x = ln ∣ sec x + tan x ∣ + C 因此 s = [ ln ( sec x + tan x ) ] 0 4 π ​ ​ 代入上下限： 当 x = 4 π ​ 时， sec ( 4 π ​ ) = 2 ​ , tan ( 4 π ​ ) = 1 所以 ln ( sec 4 π ​ + tan 4 π ​ ) = ln ( 2 ​ + 1 ) 当 x = 0 时， sec 0 = 1 , tan 0 = 0 所以 ln ( sec 0 + tan 0 ) = ln ( 1 + 0 ) = ln 1 = 0 因此 s = ln ( 2 ​ + 1 ) − 0 = ln ( 2 ​ + 1 ) 最终结果为 s = ln ( 2 ​ + 1 )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\\(f(x)=\\begin{cases} \\lambda e^{-\\lambda x},&x>0,\\\\ 0,&x\\le0, \\end{cases}\\;\\lambda>0,\\)则 \\(\\int_{-\\infty}^{+\\infty}xf(x)\\,dx=\\) ________。",
    answerText: "】 \\(\\dfrac{1}{\\lambda}\\) 【",
    referenceAnswer: "【答案】 \\(\\dfrac{1}{\\lambda}\\) 【解析】 直接按反常积分计算即可，不需要引入概率分布。 \\[\n\\int_{-\\infty}^{+\\infty}x f(x)\\,dx\n=\\int_0^{+\\infty}x\\lambda e^{-\\lambda x}\\,dx.\n\\] 分部积分，取 \\(u=x\\)，\\(dv=\\lambda e^{-\\lambda x}dx\\)，则 \\(du=dx\\)，\\(v=-e^{-\\lambda x}\\)。由于 \\(\\lambda>0\\)，有 \\(xe^{-\\lambda x}\\to0\\ (x\\to+\\infty)\\)。 \\[\n\\int_0^{+\\infty}x\\lambda e^{-\\lambda x}\\,dx\n=\\left[-xe^{-\\lambda x}\\right]_0^{+\\infty}+\\int_0^{+\\infty}e^{-\\lambda x}\\,dx\n=\\frac1\\lambda.\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设平面区域 \\(D\\) 由直线 \\(y=x\\)、圆 \\(x^2+y^2=2y\\) 及 \\(y\\) 轴围成，则二重积分 \\(\\iint_Dxy\\,d\\sigma=\\) ________。",
    answerText: "】 \\(\\dfrac{7}{12}\\) 【",
    referenceAnswer: "【答案】 \\(\\dfrac{7}{12}\\) 【解析】 圆 \\(x^2+y^2=2y\\) 化为极坐标是 \\(r=2\\sin\\theta\\)。由直线 \\(y=x\\) 与 \\(y\\) 轴可知 \\[\nD=\\left\\{(r,\\theta)\\ \\middle|\\ \\frac{\\pi}{4}\\le\\theta\\le\\frac{\\pi}{2},\\ 0\\le r\\le2\\sin\\theta\\right\\}.\n\\] 又 \\(x=r\\cos\\theta\\)，\\(y=r\\sin\\theta\\)，\\(d\\sigma=r\\,dr\\,d\\theta\\)，所以 \\[\n\\begin{aligned}\n\\iint_Dxy\\,d\\sigma\n&=\\int_{\\pi/4}^{\\pi/2}\\!\\int_0^{2\\sin\\theta}r^3\\sin\\theta\\cos\\theta\\,dr\\,d\\theta\\\\\n&=4\\int_{\\pi/4}^{\\pi/2}\\sin^5\\theta\\cos\\theta\\,d\\theta\\\\\n&=4\\int_{\\sqrt2/2}^{1}u^5\\,du\n=\\frac23\\left(1-\\frac18\\right)\n=\\frac7{12}.\n\\end{aligned}\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "二次型 \\(f(x_1,x_2,x_3)=x_1^2+3x_2^2+x_3^2+2x_1x_2+2x_1x_3+2x_2x_3,\\) 则 \\(f\\) 的正惯性指数为 ________。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 【详解1】二次型 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = x 1 2 ​ + 3 x 2 2 ​ + x 3 2 ​ + 2 x 1 ​ x 2 ​ + 2 x 1 ​ x 3 ​ + 2 x 2 ​ x 3 ​ 可通过配方法化为 y 1 2 ​ + 4 y 2 2 ​ ，因此正惯性指数为 2。 【详解2】本题也可通过求二次型矩阵的特征值，进一步得到正惯性指数为 2。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分10 分)已知函数 \\(F(x)=\\dfrac{\\int_0^x\\ln(1+t^2)\\,dt}{x^a},\\) 设 \\(\\lim_{x\\to+\\infty}F(x)=\\lim_{x\\to0^+}F(x)=0,\\) 试求 \\(a\\) 的取值范围。",
    referenceAnswer: "【答案】 \\(1<a<3\\) 【解析】 本页题干的分母是 \\(x^a\\)，因此应按当前题干计算，而不能沿用 \\(x^{3a}\\) 的解析。 当 \\(x\\to0^+\\) 时，\\(\\ln(1+t^2)\\sim t^2\\)，故 \\[\n\\int_0^x\\ln(1+t^2)\\,dt\\sim\\frac{x^3}{3},\\qquad\nF(x)\\sim\\frac13x^{3-a}.\n\\] 要使 \\(\\lim_{x\\to0^+}F(x)=0\\)，必须且只需 \\(a<3\\)。 当 \\(x\\to+\\infty\\) 时，令 \\(N(x)=\\int_0^x\\ln(1+t^2)\\,dt\\)。由洛必达法则， \\[\n\\lim_{x\\to+\\infty}\\frac{N(x)}{x\\ln x}\n=\\lim_{x\\to+\\infty}\\frac{\\ln(1+x^2)}{\\ln x+1}=2,\n\\] 所以 \\(N(x)\\sim2x\\ln x\\)，从而 \\(F(x)\\sim2x^{1-a}\\ln x\\)。要使 \\(\\lim_{x\\to+\\infty}F(x)=0\\)，必须且只需 \\(a>1\\)。 综上，\\(\\boxed{1<a<3}\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分11 分)设函数 \\(y=y(x)\\) 由参数方程\\(\\begin{cases} x=\\dfrac13t^3+t+\\dfrac13,\\\\[4pt] y=\\dfrac13t^3-t+\\dfrac13 \\end{cases}\\)确定，求 \\(y=y(x)\\) 的极值和曲线 \\(y=y(x)\\) 的凹凸区间及拐点。",
    referenceAnswer: "【答案】 极小值点：当 t = 1 时， ( x , y ) = ( 3 5 ​ , − 3 1 ​ ) 极大值点：当 t = − 1 时， ( x , y ) = ( − 1 , 1 ) 拐点：当 t = 0 时， ( x , y ) = ( 3 1 ​ , 3 1 ​ ) 凸区间： t < 0 凹区间： t > 0 【解析】 解： d x d y ​ = t 2 + 1 t 2 − 1 ​ , d x 2 d 2 y ​ = ( t 2 + 1 ) 3 4 t ​ 当 t = 1 时， x = 3 5 ​ ， y = − 3 1 ​ ，是极小值。 当 t = − 1 时， x = − 1 ， y = 1 ，是极大值。 当 t = 0 时， x = 3 1 ​ ， y = 3 1 ​ ，是拐点。 当 t < 0 时，是凸区间。 当 t > 0 时，是凹区间。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分9 分)设函数 \\(z=f\\bigl(xy,yg(x)\\bigr),\\) 其中函数 \\(f\\) 具有二阶连续偏导数，函数 \\(g(x)\\) 可导，且在 \\(x=1\\) 处取得极值，\\(g(1)=1\\)。求 \\(\\left.\\frac{\\partial^2z}{\\partial x\\partial y}\\right|_{x=1,y=1}.\\)",
    referenceAnswer: "【答案】 \\[\n\\left.\\frac{\\partial^2 z}{\\partial x\\partial y}\\right|_{x=1,y=1}\n=f_1'(1,1)+f_{11}''(1,1)+f_{12}''(1,1).\n\\] 【解析】 令 \\(u=xy\\)，\\(v=yg(x)\\)，则 \\(z=f(u,v)\\)。注意对 \\(x\\) 求偏导时 \\(v_x=yg'(x)\\)，这里不能漏掉因子 \\(y\\)。 \\[\n\\frac{\\partial z}{\\partial x}=y f_1'+y g'(x)f_2'.\n\\] 再对 \\(y\\) 求偏导（各偏导均在 \\((u,v)\\) 处取值）： \\[\n\\frac{\\partial^2 z}{\\partial x\\partial y}\n=f_1'+xyf_{11}''+yg(x)f_{12}''+g'(x)f_2'\n+xyg'(x)f_{21}''+yg(x)g'(x)f_{22}''.\n\\] 因为 \\(g(x)\\) 在 \\(x=1\\) 处可导且取得极值，所以 \\(g'(1)=0\\)；又 \\(g(1)=1\\)。代入 \\(x=y=1\\) 得 \\[\n\\left.\\frac{\\partial^2 z}{\\partial x\\partial y}\\right|_{x=1,y=1}\n=f_1'(1,1)+f_{11}''(1,1)+f_{12}''(1,1).\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分10 分)设函数 \\(y(x)\\) 具有二阶导数，且曲线 \\(l:y=y(x)\\) 与直线 \\(y=x\\) 相切于原点。记 \\(\\alpha\\) 为曲线 \\(l\\) 在点 \\((x,y)\\) 处切线的倾角，若 \\(\\frac{d\\alpha}{dx}=\\frac{dy}{dx},\\) 求 \\(y(x)\\) 的表达式。",
    referenceAnswer: "【答案】 y ( x ) = arcsin ( 2 2 ​ ​ e x ) − 4 π ​ 【解析】 由题意知 y ( 0 ) = 0 ， y ′ ( 0 ) = 1 。因为 α 为曲线 l 在点 ( x , y ) 处切线的倾角，所以 tan α = d x d y ​ 。 两边同时对 x 求导，得： sec 2 α ⋅ d x d α ​ = d x 2 d 2 y ​ . 由题知 d x d α ​ = d x d y ​ ，且 sec 2 α = 1 + tan 2 α ，代入得： d x 2 d 2 y ​ = d x d y ​ + ( d x d y ​ ) 3 . 结合初值条件，得到微分方程组： ⎩ ⎨ ⎧ ​ d x 2 d 2 y ​ = d x d y ​ + ( d x d y ​ ) 3 , y ( 0 ) = 0 , y ′ ( 0 ) = 1. ​ 此方程不显含 x ，令 y ′ = p ，则 y ′′ = p d y d p ​ ，代入方程得： p d y d p ​ = p + p 3 . 若 p  = 0 ，两边除以 p 得： d y d p ​ = 1 + p 2 . 分离变量得： 1 + p 2 d p ​ = d y . 积分得： arctan p = y + C 1 ​ . 即： y ′ = tan ( y + C 1 ​ ) . 由 y ′ ( 0 ) = 1 ，代入得： tan ( C 1 ​ ) = 1 ⇒ C 1 ​ = 4 π ​ . 因此： y ′ = tan ( y + 4 π ​ ) . 此为可分离变量方程，改写为： d x d y ​ = tan ( y + 4 π ​ ) . 分离变量得： cot ( y + 4 π ​ ) d y = d x . 积分得： ln ​ sin ( y + 4 π ​ ) ​ = x + C 2 ​ . 即： sin ( y + 4 π ​ ) = C e x . 由 y ( 0 ) = 0 得： sin ( 4 π ​ ) = C ⇒ C = 2 2 ​ ​ . 因此： sin ( y + 4 π ​ ) = 2 2 ​ ​ e x . 解得： y ( x ) = arcsin ( 2 2 ​ ​ e x ) − 4 π ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（Ⅰ）证明：对任意正整数 \\(n\\)，都有\\(\\frac1{n+1}<\\ln\\left(1+\\frac1n\\right)<\\frac1n;\\)\n\n（Ⅱ）设\\(a_n=1+\\frac12+\\cdots+\\frac1n-\\ln n\\qquad(n=1,2,\\ldots),\\) 证明数列 \\(\\{a_n\\}\\) 收敛。",
    referenceAnswer: "【答案】 见解析 【解析】 证明： ① 先证明当 0 ⩽ x ⩽ 1 时，有 x + 1 x ​ < ln ( 1 + x ) < x . 可以利用导数得到函数单调性，结论是明显的。令 x = n 1 ​ ，就得到证明结论。 ② 先证明数列 { a n ​ } 单调递减： a n + 1 ​ − a n ​ = n + 1 1 ​ − ln ( n + 1 ) + ln n = n + 1 1 ​ − ln ( 1 + n 1 ​ ) < 0. 再证明数列 { a n ​ } 有下界： a n ​ ​ = 1 + 2 1 ​ + ⋯ + n 1 ​ − ln n > ln ( 1 + 1 1 ​ ) + ln ( 1 + 2 1 ​ ) + ⋯ + ln ( 1 + n 1 ​ ) − ln n = ln ( 1 2 ​ ⋅ 2 3 ​ ⋯ n n + 1 ​ ⋅ n 1 ​ ) = ln ( n n + 1 ​ ) > 0. ​ 所以数列 { a n ​ } 收敛。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "一容器的内侧是由图中曲线绕 \\(y\\) 轴旋转一周而成的曲面，该曲线由 \\(x^2+y^2=2y\\quad\\left(y\\ge\\frac12\\right)\\) 与 \\(x^2+y^2=1\\quad\\left(y\\le\\frac12\\right)\\) 连接而成。\n\n（Ⅰ）求容器的容积；\n\n（Ⅱ）若将容器内盛满的水从容器顶部全部抽出，至少需要做多少功？（长度单位：m，重力加速度为 \\(g\\) m/s²，水的密度为 \\(10^3\\) kg/m³。）",
    referenceAnswer: "【答案】 （Ⅰ）\\(\\dfrac{9\\pi}{4}\\)；（Ⅱ）\\(\\dfrac{27}{8}\\pi\\times10^3g=3375\\pi g\\) J。 【解析】 绕 \\(y\\) 轴旋转后，在高度 \\(y\\) 处的横截面为圆。由两段曲线可得半径平方 \\[\nR^2(y)=\n\\begin{cases}\n1-y^2,&-1\\le y\\le\\dfrac12,\\\\[4pt]\n2y-y^2,&\\dfrac12\\le y\\le2.\n\\end{cases}\n\\] （Ⅰ）容积为 \\[\n\\begin{aligned}\nV&=\\pi\\int_{-1}^{1/2}(1-y^2)\\,dy\n+\\pi\\int_{1/2}^{2}(2y-y^2)\\,dy\\\\\n&=\\pi\\left(\\frac98+\\frac98\\right)=\\frac{9\\pi}{4}.\n\\end{aligned}\n\\] （Ⅱ）顶部在 \\(y=2\\)，高度为 \\(y\\) 的薄层被抽到顶部需要提升 \\(2-y\\) 米。取水的密度 \\(\\rho=10^3\\,\\mathrm{kg/m^3}\\)，则 \\[\n\\begin{aligned}\nW\n&=10^3\\pi g\\left[\n\\int_{-1}^{1/2}(2-y)(1-y^2)\\,dy\n+\\int_{1/2}^{2}(2-y)(2y-y^2)\\,dy\n\\right]\\\\\n&=10^3\\pi g\\left(\\frac{153}{64}+\\frac{63}{64}\\right)\n=\\frac{27}{8}\\pi\\times10^3g\n=3375\\pi g\\ \\mathrm{J}.\n\\end{aligned}\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "已知函数 \\(f(x,y)\\) 具有连续二阶偏导数，且 \\(f(1,y)=f(x,1)=0,\\qquad \\iint_Df(x,y)\\,dx\\,dy=a,\\) 其中 \\(D=\\{(x,y)\\mid0\\le x\\le1,\\ 0\\le y\\le1\\}.\\) 计算二重积分 \\(I=\\iint_Dxy\\,f''_{xy}(x,y)\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 I = a 【解析】 根据二重积分的计算，有： D ∬ ​ x y f x y ′′ ​ ( x , y ) d x d y = ∫ 0 1 ​ x ( ∫ 0 1 ​ y f x y ′′ ​ ( x , y ) d y ) d x 对内部积分进行计算： ∫ 0 1 ​ y f x y ′′ ​ ( x , y ) d y = ∫ 0 1 ​ y d f x ′ ​ ( x , y ) = [ y f x ′ ​ ( x , y ) ] y = 0 y = 1 ​ − ∫ 0 1 ​ f x ′ ​ ( x , y ) d y = f x ′ ​ ( x , 1 ) − ∫ 0 1 ​ f x ′ ​ ( x , y ) d y = − ∫ 0 1 ​ f x ′ ​ ( x , y ) d y 代入原式： = ∫ 0 1 ​ x ( − ∫ 0 1 ​ f x ′ ​ ( x , y ) d y ) d x = − ∫ 0 1 ​ ( ∫ 0 1 ​ x f x ′ ​ ( x , y ) d x ) d y 进一步计算： − ∫ 0 1 ​ ( ∫ 0 1 ​ x f x ′ ​ ( x , y ) d x ) d y = − ∫ 0 1 ​ ( ∫ 0 1 ​ x df ( x , y ) ) d y = − ∫ 0 1 ​ ( [ x f ( x , y ) ] x = 0 x = 1 ​ − ∫ 0 1 ​ f ( x , y ) d x ) d y = − ∫ 0 1 ​ ( f ( 1 , y ) − ∫ 0 1 ​ f ( x , y ) d x ) d y = D ∬ ​ f ( x , y ) d x d y = a",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "设向量组 \\(\\alpha_1=(1,0,1)^T,\\quad \\alpha_2=(0,1,1)^T,\\quad \\alpha_3=(1,3,5)^T\\) 不能由向量组 \\(\\beta_1=(1,1,1)^T,\\quad \\beta_2=(1,2,3)^T,\\quad \\beta_3=(3,4,a)^T\\) 线性表示。\n\n（Ⅰ）求 \\(a\\) 的值；\n\n（Ⅱ）将 \\(\\beta_1,\\beta_2,\\beta_3\\) 用 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示。",
    referenceAnswer: "【答案】 （Ⅰ） a = 5 。 （Ⅱ） ( β 1 ​ ​ β 2 ​ ​ β 3 ​ ​ ) = ( α 1 ​ ​ α 2 ​ ​ α 3 ​ ​ ) ​ 2 4 − 1 ​ 1 2 0 ​ 5 10 − 2 ​ ​ 。 【解析】 (1) 易知 α 1 ​ ， α 2 ​ ， α 3 ​ 线性无关。由于它们不能被 β 1 ​ ， β 2 ​ ， β 3 ​ 线性表出，可得 β 1 ​ ， β 2 ​ ， β 3 ​ 线性相关，从而 r ( β 1 ​ , β 2 ​ , β 3 ​ ) < 3 。 由 ​ 1 1 1 ​ 1 2 3 ​ 3 4 a ​ ​ → ​ 1 0 0 ​ 1 1 2 ​ 3 1 a − 3 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 1 1 a − 5 ​ ​ 得 a = 5 。 (2) 由 ​ 1 0 1 ​ 0 1 1 ​ 1 3 5 ​ 1 1 1 ​ 1 2 3 ​ 3 4 5 ​ ​ → ​ 1 0 0 ​ 0 1 1 ​ 1 3 4 ​ 1 1 0 ​ 1 2 2 ​ 3 4 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 1 3 1 ​ 1 1 − 1 ​ 1 2 0 ​ 3 4 − 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 2 4 − 1 ​ 1 2 0 ​ 5 10 − 2 ​ ​ 得 ( β 1 ​ ​ β 2 ​ ​ β 3 ​ ​ ) = ( α 1 ​ ​ α 2 ​ ​ α 3 ​ ​ ) ​ 2 4 − 1 ​ 1 2 0 ​ 5 10 − 2 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶实对称矩阵，\\(A\\) 的秩为 2，且\\(A\\begin{pmatrix} 1&1\\\\ 0&0\\\\ -1&1 \\end{pmatrix} = \\begin{pmatrix} -1&1\\\\ 0&0\\\\ 1&1 \\end{pmatrix}.\\)\n\n（Ⅰ）求 \\(A\\) 的所有特征值与特征向量；\n\n（Ⅱ）求矩阵 \\(A\\)。",
    referenceAnswer: "【答案】 （Ⅰ）特征值：-1, 1, 0；对应的特征向量分别为 ​ 1 0 − 1 ​ ​ , ​ 1 0 1 ​ ​ , ​ 0 1 0 ​ ​ 。 （Ⅱ）矩阵 A = ​ 0 0 1 ​ 0 0 0 ​ 1 0 0 ​ ​ 。 【解析】 (1) 易知特征值 − 1 对应的特征向量为 ​ 1 0 − 1 ​ ​ , 特征值 1 对应的特征向量为 ​ 1 0 1 ​ ​ . 由 r ( A ) = 2 知 A 的另一个特征值为 0 。 因为实对称矩阵不同特征值的特征向量正交，从而特征值 0 对应的特征向量为 ​ 0 1 0 ​ ​ . (2) 由 A = ​ 1 0 − 1 ​ 1 0 1 ​ 0 1 0 ​ ​ ​ − 1 0 0 ​ 0 1 0 ​ 0 0 0 ​ ​ ​ 1 0 − 1 ​ 1 0 1 ​ 0 1 0 ​ ​ − 1 得 A = ​ 0 0 1 ​ 0 0 0 ​ 1 0 0 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2011_math2 = {
  id: P, year: Y,
  title: '2011 年全国硕士研究生招生考试 数学（二）',
  short: '2011 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2011_math2.length,
  qids: questions2011_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
