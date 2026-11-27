const P = 'paper-2017-math2'
const Y = 2017
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2017-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2017 考研数学（二）真题',
  ...extra
})

export const questions2017_math2 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若函数\\(f(x)=\\begin{cases} \\dfrac{1-\\cos\\sqrt{x}}{ax},&x>0,\\\\ b,&x\\le0 \\end{cases}\\)在 \\(x=0\\) 处连续，则（ ）。",
    options: [{ key: "A", text: "\\(ab=\\dfrac12\\)" }, { key: "B", text: "\\(ab=-\\dfrac12\\)" }, { key: "C", text: "\\(ab=0\\)" }, { key: "D", text: "\\(ab=2\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 首先计算极限： x → 0 + lim ​ a x 1 − cos x ​ ​ = x → 0 + lim ​ a x 2 1 ​ x ​ = 2 a 1 ​ 由题设条件 2 a 1 ​ = b ，可得： ab = 2 1 ​"
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二阶可导函数 \\(f(x)\\) 满足 \\(f(1)=f(-1)=1,\\ f(0)=-1\\)，且 \\(f''(x)>0\\)，则（ ）。",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_{-1}^{1}f(x)\\,dx>0\\)" }, { key: "B", text: "\\(\\displaystyle\\int_{-1}^{1}f(x)\\,dx<0\\)" }, { key: "C", text: "\\(\\displaystyle\\int_{-1}^{0}f(x)\\,dx>\\int_{0}^{1}f(x)\\,dx\\)" }, { key: "D", text: "\\(\\displaystyle\\int_{-1}^{0}f(x)\\,dx<\\int_{0}^{1}f(x)\\,dx\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 当 f ( x ) 为偶函数时满足题设条件，此时 ∫ − 1 0 ​ f ( x ) d x = ∫ 0 1 ​ f ( x ) d x , 因此排除 C 和 D。 取 f ( x ) = 2 x 2 − 1 ，该函数满足条件，则 ∫ − 1 1 ​ f ( x ) d x = ∫ − 1 1 ​ ( 2 x 2 − 1 ) d x = − 3 2 ​ < 0 , 因此选择 B。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设数列 \\(\\{x_n\\}\\) 收敛，则（ ）。",
    options: [{ key: "A", text: "当 \\(\\displaystyle\\lim_{n\\to\\infty}\\sin x_n=0\\) 时，\\(\\displaystyle\\lim_{n\\to\\infty}x_n=0\\)" }, { key: "B", text: "当 \\(\\displaystyle\\lim_{n\\to\\infty}(x_n+\\sqrt{|x_n|})=0\\) 时，\\(\\displaystyle\\lim_{n\\to\\infty}x_n=0\\)" }, { key: "C", text: "当 \\(\\displaystyle\\lim_{n\\to\\infty}(x_n+x_n^2)=0\\) 时，\\(\\displaystyle\\lim_{n\\to\\infty}x_n=0\\)" }, { key: "D", text: "当 \\(\\displaystyle\\lim_{n\\to\\infty}(x_n+\\sin x_n)=0\\) 时，\\(\\displaystyle\\lim_{n\\to\\infty}x_n=0\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 采用特例法： 对于选项 (A)，取 x n ​ = π ，则有 n → ∞ lim ​ sin x n ​ = 0 , n → ∞ lim ​ x n ​ = π , 因此 A 错误。 对于选项 (B) 和 (C)，取 x n ​ = − 1 ，可以排除。 综上，正确选项为 D。"
  }),
  base(4, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "微分方程 \\(y''-4y'+8y=e^{2x}(1+\\cos2x)\\) 的特解可设为 \\(y^*=\\)（ ）。",
    options: [{ key: "A", text: "\\(Ae^{2x}+e^{2x}(B\\cos2x+C\\sin2x)\\)" }, { key: "B", text: "\\(Axe^{2x}+e^{2x}(B\\cos2x+C\\sin2x)\\)" }, { key: "C", text: "\\(Ae^{2x}+xe^{2x}(B\\cos2x+C\\sin2x)\\)" }, { key: "D", text: "\\(Axe^{2x}+xe^{2x}(B\\cos2x+C\\sin2x)\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 特征方程为： λ 2 − 4 λ + 8 = 0 ⇒ λ 1 , 2 ​ = 2 ± 2 i 由于 f ( x ) = e 2 x ( 1 + cos 2 x ) = e 2 x + e 2 x cos 2 x 因此 y 1 ∗ ​ = A e 2 x , y 2 ∗ ​ = x e 2 x ( B cos 2 x + C sin 2 x ) 故特解为： y ∗ = y 1 ∗ ​ + y 2 ∗ ​ = A e 2 x + x e 2 x ( B cos 2 x + C sin 2 x ) 选 C。"
  }),
  base(5, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(f(x,y)\\) 具有一阶偏导数，且对任意的 \\((x,y)\\)，都有\\(\\frac{\\partial f(x,y)}{\\partial x}>0,\\;\\frac{\\partial f(x,y)}{\\partial y}<0,\\)则（ ）。",
    options: [{ key: "A", text: "\\(f(0,0)>f(1,1)\\)" }, { key: "B", text: "\\(f(0,0)<f(1,1)\\)" }, { key: "C", text: "\\(f(0,1)>f(1,0)\\)" }, { key: "D", text: "\\(f(0,1)<f(1,0)\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 已知 ∂ x ∂ f ( x , y ) ​ > 0 ， ∂ y ∂ f ( x , y ) ​ < 0 ， 这表明 f ( x , y ) 是关于 x 的单调递增函数，是关于 y 的单调递减函数。 因此，有 f ( 0 , 1 ) < f ( 1 , 1 ) < f ( 1 , 0 ) ， 故答案选 D。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "甲、乙两人赛跑，计时开始时，甲在乙前方 10 m 处。图中实线表示甲的速度曲线 \\(v=v_1(t)\\)，虚线表示乙的速度曲线 \\(v=v_2(t)\\)，三块阴影部分面积的数值依次为 \\(10,20,3\\)。计时开始后乙追上甲的时刻记为 \\(t_0\\)（单位：s），则（ ）。",
    options: [{ key: "A", text: "\\(t_0=10\\)" }, { key: "B", text: "\\(15<t_0<20\\)" }, { key: "C", text: "\\(t_0=25\\)" }, { key: "D", text: "\\(t_0>25\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】设甲、乙从计时开始后的位移分别为 \\[S_1(t)=\\int_0^t v_1(\\tau)\\,d\\tau,\\qquad S_2(t)=\\int_0^t v_2(\\tau)\\,d\\tau.\\] 乙第一次追上甲时，应满足 \\(S_2(t_0)-S_1(t_0)=10\\)。 由图可知，在 \\(0\\le t\\le10\\) 内实线在虚线上方，故 \\[\\int_0^{10}\\bigl(v_1(t)-v_2(t)\\bigr)\\,dt=10.\\] 甲原本领先 10 m，因此到 \\(t=10\\) 时甲领先 \\(10+10=20\\) m。 在 \\(10\\le t\\le25\\) 内虚线在实线上方，第二块阴影面积为 20，即 \\[\\int_{10}^{25}\\bigl(v_2(t)-v_1(t)\\bigr)\\,dt=20.\\] 这 20 m 恰好抵消甲在 \\(t=10\\) 时的 20 m 领先量；且在 \\((10,25)\\) 内乙的相对位移单调增加，所以第一次追上发生在 \\(t_0=25\\)。故选 C。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，\\(P=(\\alpha_1,\\alpha_2,\\alpha_3)\\) 为可逆矩阵，使得 \\(P^{-1}AP=\\begin{pmatrix}0&0&0\\\\0&1&0\\\\0&0&2\\end{pmatrix},\\) 则 \\(A(\\alpha_1+\\alpha_2+\\alpha_3)=\\text{（ ）}.\\)",
    options: [{ key: "A", text: "\\(\\alpha_1+\\alpha_2\\)" }, { key: "B", text: "\\(\\alpha_2+2\\alpha_3\\)" }, { key: "C", text: "\\(\\alpha_2+\\alpha_3\\)" }, { key: "D", text: "\\(\\alpha_1+2\\alpha_2\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】由 P − 1 A P = ​ 0 ​ 1 ​ 2 ​ ​ 得： A P = P ​ 0 ​ 1 ​ 2 ​ ​ 即： A ( α 1 ​ , α 2 ​ , α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 0 ​ 1 ​ 2 ​ ​ = α 2 ​ + 2 α 3 ​ 因此，选项 B 正确。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知矩阵\\(A=\\begin{pmatrix}2&0&0\\\\0&2&1\\\\0&0&1\\end{pmatrix},\\quad B=\\begin{pmatrix}2&1&0\\\\0&2&0\\\\0&0&1\\end{pmatrix},\\quad C=\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&2\\end{pmatrix},\\)则（ ）。",
    options: [{ key: "A", text: "\\(A\\) 与 \\(C\\) 相似，\\(B\\) 与 \\(C\\) 相似" }, { key: "B", text: "\\(A\\) 与 \\(C\\) 相似，\\(B\\) 与 \\(C\\) 不相似" }, { key: "C", text: "\\(A\\) 与 \\(C\\) 不相似，\\(B\\) 与 \\(C\\) 相似" }, { key: "D", text: "\\(A\\) 与 \\(C\\) 不相似，\\(B\\) 与 \\(C\\) 不相似" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】三个矩阵的特征值均为 \\(2,2,1\\)。关键看重特征值 \\(\\lambda=2\\) 的特征子空间维数。 对 \\(A\\)： \\[2E-A=\\begin{pmatrix}0&0&0\\\\0&0&-1\\\\0&0&1\\end{pmatrix},\\qquad r(2E-A)=1,\\] 所以 \\(\\dim\\ker(2E-A)=3-1=2\\)，等于特征值 2 的代数重数。故 \\(A\\) 可相似对角化，且 \\[A\\sim\\operatorname{diag}(2,2,1)\\sim C.\\] 对 \\(B\\)： \\[2E-B=\\begin{pmatrix}0&-1&0\\\\0&0&0\\\\0&0&1\\end{pmatrix},\\qquad r(2E-B)=2,\\] 所以 \\(\\dim\\ker(2E-B)=3-2=1<2\\)。因此 \\(B\\) 不可相似对角化，而 \\(C\\) 是对角矩阵，故 \\(B\\not\\sim C\\)。所以选 B。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线 \\(y=x\\left(1+\\arcsin\\frac2x\\right)\\) 的斜渐近线方程为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 y = x + 2 【",
    referenceAnswer: "【答案】 y = x + 2 【解析】 由于 x → ∞ lim ​ x y ​ = x → ∞ lim ​ ( 1 + arcsin x 2 ​ ) = 1 , 并且 x → ∞ lim ​ ( y − x ) = x → ∞ lim ​ x arcsin x 2 ​ = 2 , 因此 y = x + 2.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数 \\(y=y(x)\\) 由参数方程\\(\\begin{cases} x=t+e^t,\\\\ y=\\sin t \\end{cases}\\)确定，则 \\(\\left.\\frac{d^2y}{dx^2}\\right|_{t=0}=\\underline{\\qquad}.\\)",
    answerText: "】 − 8 1 ​ 【",
    referenceAnswer: "【答案】 − 8 1 ​ 【解析】 已知 d t d y ​ = cos t , d t d x ​ = 1 + e t 因此 d x d y ​ = 1 + e t cos t ​ 进一步求二阶导数 d x 2 d 2 y ​ = d t d x ​ ( 1 + e t c o s t ​ ) ′ ​ = ( 1 + e t ) 2 − sin t ( 1 + e t ) − cos t ⋅ e t ​ 代入 t = 0 得 d x 2 d 2 y ​ ​ t = 0 ​ = − 8 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\\(\\int_0^{+\\infty}\\frac{\\ln(1+x)}{(1+x)^2}\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 ∫ 0 + ∞ ​ ( 1 + x ) 2 ln ( 1 + x ) ​ d x ​ = − ∫ 0 + ∞ ​ ln ( 1 + x ) d ( 1 + x 1 ​ ) = − [ 1 + x ln ( 1 + x ) ​ ​ 0 + ∞ ​ − ∫ 0 + ∞ ​ ( 1 + x ) 2 1 ​ d x ] = ∫ 0 + ∞ ​ ( 1 + x ) 2 1 ​ d x = 1. ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数 \\(f(x,y)\\) 具有一阶连续偏导数，且 \\(df(x,y)=ye^y\\,dx+x(1+y)e^y\\,dy,\\) \\(f(0,0)=0\\)，则 \\(f(x,y)=\\underline{\\qquad}.\\)",
    answerText: "】 f ( x , y ) = x y e y 【",
    referenceAnswer: "【答案】 f ( x , y ) = x y e y 【解析】 给定偏导数 f x ′ ​ = y e y 和 f y ′ ​ = x ( 1 + y ) e y ，我们可以通过积分求得原函数。 首先，对 f x ′ ​ 关于 x 积分： f ( x , y ) = ∫ y e y d x = x y e y + c ( y ) , 其中 c ( y ) 是仅依赖于 y 的任意函数。 接下来，对 f ( x , y ) 关于 y 求偏导： f y ′ ​ = x e y + x y e y + c ′ ( y ) = x e y + x y e y . 比较两边，可得： c ′ ( y ) = 0 , 因此 c ( y ) = C ，其中 C 为常数。 利用初始条件 f ( 0 , 0 ) = 0 ，代入原函数： f ( 0 , 0 ) = 0 ⋅ 0 ⋅ e 0 + C = 0 ⇒ C = 0. 最终得到： f ( x , y ) = x y e y .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\\(\\int_0^1dy\\int_y^1\\frac{\\tan x}{x}\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 \\(-\\ln(\\cos 1)\\) 【",
    referenceAnswer: "【答案】 \\(-\\ln(\\cos 1)\\) 【解析】 积分区域为 \\(0\\le y\\le x\\le1\\)。交换积分次序： \\[\\begin{aligned}\n\\int_0^1dy\\int_y^1\\frac{\\tan x}{x}\\,dx\n&=\\int_0^1dx\\int_0^x\\frac{\\tan x}{x}\\,dy\\\\\n&=\\int_0^1\\tan x\\,dx\\\\\n&=\\bigl[-\\ln(\\cos x)\\bigr]_0^1\\\\\n&=-\\ln(\\cos1).\n\\end{aligned}\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设矩阵 \\(A=\\begin{pmatrix}4&1&-2\\\\1&2&a\\\\3&1&-1\\end{pmatrix}\\) 的一个特征向量为 \\(\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix},\\) 则 \\(a=\\underline{\\qquad}\\)。",
    answerText: "】 a = -1 【",
    referenceAnswer: "【答案】 a = -1 【解析】 由 A α = λ α 得： ​ 4 1 3 ​ 1 2 1 ​ − 2 a − 1 ​ ​ ​ 1 1 2 ​ ​ = λ ​ 1 1 2 ​ ​ 计算得： ​ 1 3 + 2 a 2 ​ ​ = ​ λ λ 2 λ ​ ​ 故有 3 + 2 a = λ 且 2 = 2 λ ， 解得 λ = 1 ，代入得 3 + 2 a = 1 ， 所以 a = − 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求极限 \\(\\lim_{x\\to0^+}\\dfrac{\\int_0^x\\sqrt{x-t}\\,e^t\\,dt}{\\sqrt{x^3}}.\\)",
    referenceAnswer: "【答案】 \\(\\dfrac23\\) 【解析】 令 \\(u=x-t\\)，则 \\(t=x-u\\)、\\(dt=-du\\)，所以 \\[\\int_0^x\\sqrt{x-t}\\,e^t\\,dt\n=e^x\\int_0^x\\sqrt{u}\\,e^{-u}\\,du.\\] 再令 \\(u=xs\\)，得到 \\[\\begin{aligned}\n\\frac{\\int_0^x\\sqrt{x-t}\\,e^t\\,dt}{x^{3/2}}\n&=e^x\\int_0^1\\sqrt{s}\\,e^{-xs}\\,ds.\n\\end{aligned}\\] 当 \\(x\\to0^+\\) 时，\\(e^x\\to1\\)，且 \\(e^{-xs}\\to1\\)，故 \\[\\lim_{x\\to0^+}e^x\\int_0^1\\sqrt{s}\\,e^{-xs}\\,ds\n=\\int_0^1\\sqrt{s}\\,ds=\\frac23.\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数 \\(f(u,v)\\) 具有 2 阶连续偏导数，\\(y=f(e^x,\\cos x),\\) 求\\(\\left.\\frac{dy}{dx}\\right|_{x=0},\\;\\left.\\frac{d^2y}{dx^2}\\right|_{x=0}.\\)",
    referenceAnswer: "【答案】 d x d y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) , d x 2 d 2 y ​ ​ x = 0 ​ = f 11 ′′ ​ ( 1 , 1 ) + f 1 ′ ​ ( 1 , 1 ) − f 2 ′ ​ ( 1 , 1 ) 【解析】 已知 y = f ( e x , cos x ) ，当 x = 0 时，有 y ( 0 ) = f ( 1 , 1 ) 。 一阶导数为： d x d y ​ = f 1 ′ ​ e x + f 2 ′ ​ ( − sin x ) 代入 x = 0 得： d x d y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) ⋅ 1 + f 2 ′ ​ ( 1 , 1 ) ⋅ 0 = f 1 ′ ​ ( 1 , 1 ) 二阶导数为： d x 2 d 2 y ​ ​ = f 11 ′′ ​ e 2 x + f 12 ′′ ​ e x ( − sin x ) + f 21 ′′ ​ e x ( − sin x ) + f 22 ′′ ​ sin 2 x + f 1 ′ ​ e x − f 2 ′ ​ cos x ​ 代入 x = 0 得： d x 2 d 2 y ​ ​ x = 0 ​ = f 11 ′′ ​ ( 1 , 1 ) + f 1 ′ ​ ( 1 , 1 ) − f 2 ′ ​ ( 1 , 1 ) 结论： d x d y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) d x 2 d 2 y ​ ​ x = 0 ​ = f 11 ′′ ​ ( 1 , 1 ) + f 1 ′ ​ ( 1 , 1 ) − f 2 ′ ​ ( 1 , 1 )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求 \\(\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{k}{n^2}\\ln\\left(1+\\frac{k}{n}\\right).\\)",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 n → ∞ lim ​ k = 1 ∑ n ​ n 2 k ​ ln ( 1 + n k ​ ) ​ = ∫ 0 1 ​ x ln ( 1 + x ) d x = 2 1 ​ ∫ 0 1 ​ ln ( 1 + x ) d ( x 2 ) = 2 1 ​ ( ln ( 1 + x ) ⋅ x 2 ​ 0 1 ​ − ∫ 0 1 ​ 1 + x x 2 ​ d x ) = 4 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知函数 \\(y(x)\\) 由方程 \\(x^3+y^3-3x+3y-2=0\\) 确定，求 \\(y(x)\\) 的极值。",
    referenceAnswer: "【答案】 极大值为 y ( 1 ) = 1 ，极小值为 y ( − 1 ) = 0 。 【解析】 对原方程两边求导，得： 3 x 2 + 3 y 2 ⋅ y ′ − 3 + 3 y ′ = 0 令 y ′ = 0 ，解得 x = ± 1 。 对（1）式两边关于 x 再次求导，得： 6 x + 6 y ⋅ ( y ′ ) 2 + 3 y 2 ⋅ y ′′ + 3 y ′′ = 0 (2) 将 x = ± 1 代入原方程，得： { x = 1 , x = − 1 , ​ y = 1 y = 0 ​ 将 x = 1 、 y = 1 代入（2）式，得： y ′′ ( 1 ) = − 1 < 0 将 x = − 1 、 y = 0 代入（2）式，得： y ′′ ( − 1 ) = 2 > 0 因此， x = 1 为极大值点， y ( 1 ) = 1 ； x = − 1 为极小值点， y ( − 1 ) = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数 \\(f(x)\\) 在区间 \\([0,1]\\) 上具有 2 阶导数，且 \\(f(1)>0,\\;\\lim_{x\\to0^+}\\frac{f(x)}x<0.\\) 证明：（I）方程 \\(f(x)=0\\) 在区间 \\((0,1)\\) 内至少存在一个实根；（II）方程\\(f(x)f''(x)+[f'(x)]^2=0\\) 在区间 \\((0,1)\\) 内至少存在两个不同实根。",
    referenceAnswer: "【答案】 见解析 【解析】 （I） 由 \\[L=\\lim_{x\\to0^+}\\frac{f(x)}x<0\\] 及极限的保号性，存在 \\(\\delta>0\\)，使得当 \\(0\\lt x\\lt\\delta\\) 时 \\(f(x)/x<0\\)。由于此时 \\(x>0\\)，故 \\(f(x)<0\\)。任取 \\(x_0\\in(0,\\delta)\\)，则 \\(f(x_0)<0\\)。 又因 \\(f\\) 在 \\([0,1]\\) 上二阶可导，所以连续；结合 \\(f(1)>0\\)，由零点定理，存在 \\(\\xi\\in(x_0,1)\\)，使 \\(f(\\xi)=0\\)。因此 \\(f(x)=0\\) 在 \\((0,1)\\) 内至少有一个实根。 （II） 由于上述极限存在且为有限负数， \\[f(x)=x\\,\\frac{f(x)}x\\longrightarrow0\\qquad(x\\to0^+).\\] 而 \\(f\\) 在 \\(x=0\\) 连续，故 \\(f(0)=0\\)。由 \\(f(0)=f(\\xi)=0\\)，对 \\(f\\) 在 \\([0,\\xi]\\) 上应用罗尔定理，存在 \\(\\eta\\in(0,\\xi)\\)，使 \\(f'(\\eta)=0\\)。 令 \\(F(x)=f(x)f'(x)\\)。于是 \\[F(0)=F(\\eta)=F(\\xi)=0.\\] 分别在 \\([0,\\eta]\\) 与 \\([\\eta,\\xi]\\) 上对 \\(F\\) 应用罗尔定理，可得两个不同点 \\(\\eta_1\\in(0,\\eta)\\)、\\(\\eta_2\\in(\\eta,\\xi)\\)，使得 \\[F'(\\eta_1)=F'(\\eta_2)=0.\\] 而 \\[F'(x)=f(x)f''(x)+[f'(x)]^2,\\] 所以方程 \\(f(x)f''(x)+[f'(x)]^2=0\\) 在 \\((0,1)\\) 内至少有两个不同实根。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知平面区域 \\(D=\\{(x,y)\\mid x^2+y^2\\le2y\\},\\) 计算二重积分 \\(\\iint_D(x+1)^2\\,dxdy.\\)",
    referenceAnswer: "【答案】 4 5 π ​ 【解析】 首先，将积分展开： ∬ D ​ ( x + 1 ) 2 d x d y ​ = ∬ D ​ ( x 2 + 2 x + 1 ) d x d y = ∬ D ​ x 2 d x d y + 2 ∬ D ​ x d x d y + ∬ D ​ 1 d x d y ​ 由于区域 D 关于 y 轴对称，而 x 是奇函数，因此 2 ∬ D ​ x d x d y = 0 于是原式化简为： ∬ D ​ x 2 d x d y + ∬ D ​ 1 d x d y 接下来，利用极坐标变换： 令 x = r cos θ ， y = r sin θ ，区域 D 的方程化为 r 2 ≤ 2 r sin θ ⇒ r ≤ 2 sin θ ( θ ∈ [ 0 , π ]) 计算第一个积分： ∬ D ​ x 2 d x d y = ∫ 0 π ​ d θ ∫ 0 2 s i n θ ​ r 2 cos 2 θ ⋅ r d r = ∫ 0 π ​ cos 2 θ d θ ∫ 0 2 s i n θ ​ r 3 d r 先计算内层积分： ∫ 0 2 s i n θ ​ r 3 d r = [ 4 r 4 ​ ] 0 2 s i n θ ​ = 4 sin 4 θ 代入得： ∬ D ​ x 2 d x d y = ∫ 0 π ​ cos 2 θ ⋅ 4 sin 4 θ d θ 利用三角恒等式化简并计算，可得该积分值为 4 π ​ 。 第二个积分 ∬ D ​ 1 d x d y 表示区域 D 的面积。 区域 D 是圆心在 ( 0 , 1 ) 、半径为 1 的圆，其面积为 π 。 因此，原式结果为： 4 π ​ + π = 4 5 π ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设 \\(y(x)\\) 是区间 \\(\\left(0,\\dfrac32\\right)\\) 内的可导函数，且 \\(y(1)=0\\)。点 \\(P\\) 是曲线 \\(l:y=y(x)\\) 上的任意一点，\\(l\\) 在点 \\(P\\) 处的切线与 \\(y\\) 轴相交于点 \\((0,Y_P)\\)，法线与 \\(x\\) 轴相交于点 \\((X_P,0)\\)。若 \\(X_P=Y_P\\)，求 \\(l\\) 上点的坐标 \\((x,y)\\) 满足的方程。",
    referenceAnswer: "【答案】 arctan x y ​ + 2 1 ​ ln ( x 2 + y 2 ) = 0 , x ∈ ( 0 , 2 3 ​ ) 【解析】 由题意可知，过点 P 的切线方程为： Y − y = y ′ ( X − x ) ⋯ ( 1 ) 过点 P 的法线方程为： Y − y = y ′ − 1 ​ ( X − x ) ⋯ ( 2 ) 对式 (1)，令 X = 0 ，得： Y P ​ = y − x y ′ 对式 (2)，令 Y = 0 ，得： X P ​ = x + y y ′ 因此，有： y − x y ′ = x + y y ′ ⇒ y ′ = y + x y − x ​ = x y ​ + 1 x y ​ − 1 ​ 令 u = x y ​ ，则 y = ux ，故： y ′ = u ′ x + u 代入得： u ′ x + u = u + 1 u − 1 ​ ⇒ u ′ x = u + 1 − 1 − u 2 ​ 整理得： 1 + u 2 ( 1 + u ) d u ​ = x − 1 ​ d x 积分得： arctan u + 2 1 ​ ln ( 1 + u 2 ) = − ln ∣ x ∣ + C 已知 y ( 1 ) = 0 ，代入得 C = 0 ，故： arctan x y ​ + ln x 2 x 2 + y 2 ​ ​ + ln x = 0 化简为： arctan x y ​ + 2 1 ​ ln ( x 2 + y 2 ) = 0 , x ∈ ( 0 , 2 3 ​ )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设 3 阶矩阵 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3)\\) 有 3 个不同的特征值，且 \\(\\alpha_3=\\alpha_1+2\\alpha_2.\\)（I）证明 \\(r(A)=2\\)；（II）若 \\(\\beta=\\alpha_1+\\alpha_2+\\alpha_3\\)，求方程组 \\(Ax=\\beta\\) 的通解。",
    referenceAnswer: "【答案】 （I）见解析 （II）方程组 A x = β 的通解为 k ​ 1 2 − 1 ​ ​ + ​ 1 1 1 ​ ​ ，其中 k ∈ R 【解析】 （I）证明：由 α 3 ​ = α 1 ​ + 2 α 2 ​ 可得 α 1 ​ + 2 α 2 ​ − α 3 ​ = 0 ，即 α 1 ​ , α 2 ​ , α 3 ​ 线性相关。 因此， ∣ A ∣ = ∣ α 1 ​ α 2 ​ α 3 ​ ∣ = 0 ，即 A 的特征值必有 0 。 又因为 A 有三个不同的特征值，则三个特征值中只有 1 个为 0 ，另外两个非 0 。 且由于 A 必可相似对角化，则可设其对角矩阵为 Λ = ​ λ 1 ​ ​ λ 2 ​ ​ 0 ​ ​ ，其中 λ 1 ​  = λ 2 ​  = 0 。 所以 r ( A ) = r ( Λ ) = 2 。 （II）由（I）知 r ( A ) = 2 ，则 3 − r ( A ) = 1 ，即 A x = 0 的基础解系只有 1 个解向量。 由 α 1 ​ + 2 α 2 ​ − α 3 ​ = 0 可得 ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 1 2 − 1 ​ ​ = A ​ 1 2 − 1 ​ ​ = 0 ，则 A x = 0 的基础解系为 ​ 1 2 − 1 ​ ​ 。 又 β = α 1 ​ + α 2 ​ + α 3 ​ ，即 ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 1 1 1 ​ ​ = A ​ 1 1 1 ​ ​ = β ，则 A x = β 的一个特解为 ​ 1 1 1 ​ ​ 。 综上， A x = β 的通解为 k ​ 1 2 − 1 ​ ​ + ​ 1 1 1 ​ ​ ，其中 k ∈ R 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型 \\(f(x_1,x_2,x_3)=2x_1^2-x_2^2+ax_3^2+2x_1x_2-8x_1x_3+2x_2x_3\\) 在正交变换 \\(x=Qy\\) 下的标准形为 \\(\\lambda_1y_1^2+\\lambda_2y_2^2,\\) 求 \\(a\\) 的值及一个正交矩阵 \\(Q\\)。",
    referenceAnswer: "【答案】 a = 2 ，正交矩阵 Q = ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ 【解析】 设 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = X T A X ，其中 A = ​ 2 1 − 4 ​ 1 − 1 1 ​ − 4 1 a ​ ​ . 由于 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = X T A X 经正交变换后，得到的标准形为 λ 1 ​ y 1 2 ​ + λ 2 ​ y 2 2 ​ ， 故 r ( A ) = 2 ⇒ ∣ A ∣ = 0 ⇒ ​ 2 1 − 4 ​ 1 − 1 1 ​ − 4 1 a ​ ​ = 0 ⇒ a = 2 。 将 a = 2 代入，满足 r ( A ) = 2 ，因此 a = 2 符合题意。 此时 A = ​ 2 1 − 4 ​ 1 − 1 1 ​ − 4 1 2 ​ ​ . 则 ∣ λ E − A ∣ = ​ λ − 2 − 1 4 ​ − 1 λ + 1 − 1 ​ 4 − 1 λ − 2 ​ ​ = 0 ⇒ λ 1 ​ = − 3 , λ 2 ​ = 0 , λ 3 ​ = 6. 由 ( − 3 E − A ) x = 0 ，可得 A 的属于特征值 − 3 的特征向量为 α 1 ​ = ​ 1 − 1 1 ​ ​ . 由 ( 6 E − A ) x = 0 ，可得 A 的属于特征值 6 的特征向量为 α 2 ​ = ​ − 1 0 1 ​ ​ . 由 ( 0 E − A ) x = 0 ，可得 A 的属于特征值 0 的特征向量为 α 3 ​ = ​ 1 2 1 ​ ​ . 令 P = ( α 1 ​ , α 2 ​ , α 3 ​ ) ，则 P − 1 A P = ​ − 3 ​ 6 ​ 0 ​ ​ . 由于 α 1 ​ , α 2 ​ , α 3 ​ 彼此正交，故只需单位化即可： β 1 ​ = 3 ​ 1 ​ ( 1 , − 1 , 1 ) T , β 2 ​ = 2 ​ 1 ​ ( − 1 , 0 , 1 ) T , β 3 ​ = 6 ​ 1 ​ ( 1 , 2 , 1 ) T . 则 Q = ( β 1 ​ , β 2 ​ , β 3 ​ ) = ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ , Q T A Q = ​ − 3 ​ 6 ​ 0 ​ ​ . 于是 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = x = Q y − 3 y 1 2 ​ + 6 y 2 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2017_math2 = {
  id: P, year: Y,
  title: '2017 年全国硕士研究生招生考试 数学（二）',
  short: '2017 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2017_math2.length,
  qids: questions2017_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
