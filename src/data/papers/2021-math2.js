const P = 'paper-2021-math2'
const Y = 2021
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2021-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2021 考研数学（二）真题',
  ...extra
})

export const questions2021_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "当 \\(x\\to0\\) 时，\\(\\int_0^{x^2}(e^{t^3}-1)\\,dt\\) 是 \\(x^7\\) 的（ ）",
    options: [{ key: "A", text: "低阶无穷小" }, { key: "B", text: "等价无穷小" }, { key: "C", text: "高阶无穷小" }, { key: "D", text: "同阶但非等价无穷小" }],
    answer: ["C"],
    explain: "正确答案： C 因为 x → 0 lim ​ x 7 ∫ 0 x 2 ​ ( e t 3 − 1 ) d t ​ = x → 0 lim ​ x 7 ∫ 0 x 2 ​ t 3 d t ​ = x → 0 lim ​ x 7 4 1 ​ t 4 ​ = x → 0 lim ​ x 7 4 1 ​ x 8 ​ = 0 , 故当 x → 0 时， ∫ 0 x 2 ​ ( e t 3 − 1 ) d t 是 x 7 的高阶无穷小。 因此应选 (C)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "函数\\(f(x)=\\begin{cases} \\dfrac{e^x-1}{x},&x\\ne0,\\\\ 1,&x=0 \\end{cases}\\)在 \\(x=0\\) 处（ ）",
    options: [{ key: "A", text: "连续且取极大值" }, { key: "B", text: "连续且取极小值" }, { key: "C", text: "可导且导数为 \\(0\\)" }, { key: "D", text: "可导且导数不为 \\(0\\)" }],
    answer: ["D"],
    explain: "正确答案： D 因 lim x → 0 ​ f ( x ) = lim x → 0 ​ x e x − 1 ​ = lim x → 0 ​ x x ​ = 1 = f ( 0 ) ，故 f ( x ) 在 x = 0 处连续。 又 f ′ ( 0 ) = x → 0 lim ​ x f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x x e x − 1 ​ − 1 ​ = x → 0 lim ​ x 2 e x − 1 − x ​ = x → 0 lim ​ x 2 1 + x + 2 1 ​ x 2 + o ( x 2 ) − 1 − x ​ = 2 1 ​ , 故应选 (D)。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "有一圆柱体底面半径与高随时间变化的速率分别为 \\(2\\text{ cm/s}\\)、\\(-3\\text{ cm/s}\\)，当底面半径为 \\(10\\text{ cm}\\)、高为 \\(5\\text{ cm}\\) 时，圆柱体的体积与表面积随时间变化的速率分别为（ ）",
    options: [{ key: "A", text: "\\(125\\pi\\text{ cm}^3/\\text{s},\\ 40\\pi\\text{ cm}^2/\\text{s}\\)" }, { key: "B", text: "\\(125\\pi\\text{ cm}^3/\\text{s},\\ -40\\pi\\text{ cm}^2/\\text{s}\\)" }, { key: "C", text: "\\(-100\\pi\\text{ cm}^3/\\text{s},\\ 40\\pi\\text{ cm}^2/\\text{s}\\)" }, { key: "D", text: "\\(-100\\pi\\text{ cm}^3/\\text{s},\\ -40\\pi\\text{ cm}^2/\\text{s}\\)" }],
    answer: ["C"],
    explain: "正确答案： C 设圆柱体的底面半径为 r ，高为 h ，则圆柱体的体积 V = π r 2 h ，圆柱体的表面积 S = 2 π r 2 + 2 π r h ，从而 V ′ ( t ) = π [ 2 r ⋅ r ′ ( t ) ⋅ h + r 2 ⋅ h ′ ( t ) ] S ′ ( t ) = 2 π ⋅ 2 r ⋅ r ′ ( t ) + 2 π [ r ′ ( t ) ⋅ h + r ⋅ h ′ ( t ) ] 将 r = 10 ， h = 5 ， r ′ ( t ) = 2 ， h ′ ( t ) = − 3 分别代入，解得 V ′ ( t ) ∣ r = 10 h = 5 ​ ​ = − 100 π cm 3 / s S ′ ( t ) ∣ r = 10 h = 5 ​ ​ = 40 π cm 2 / s 故应选 (C)。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x)=ax-b\\ln x\\;(a>0)\\) 有两个零点，则 \\(\\dfrac ba\\) 的取值范围是（ ）",
    options: [{ key: "A", text: "\\((e,+\\infty)\\)" }, { key: "B", text: "\\((0,e)\\)" }, { key: "C", text: "\\(\\left(0,\\dfrac1e\\right)\\)" }, { key: "D", text: "\\(\\left(\\dfrac1e,+\\infty\\right)\\)" }],
    answer: ["A"],
    explain: "正确答案： A 因 f ( x ) = a x − b ln x ，故 f ′ ( x ) = a − x b ​ 。 又因 a > 0 ，若 b ≤ 0 ，则 f ′ ( x ) > 0 ， f ( x ) 严格单调递增，这与 f ( x ) 有 2 个零点矛盾，故 b > 0 。 x → 0 + lim ​ f ( x ) = + ∞ , x → + ∞ lim ​ f ( x ) = + ∞ , f ′ ( x ) = a − x b ​ ，令 f ′ ( x ) = 0 ，解得 x = a b ​ 。 f ′′ ( x ) = x 2 b ​ > 0 ，因 f ( x ) 有 2 个零点，故 f ( a b ​ ) = a ⋅ a b ​ − b ln a b ​ < 0 , 即 b ( 1 − ln a b ​ ) < 0 ，从而 1 − ln a b ​ < 0 ，故 ln a b ​ > 1 ，得 a b ​ > e ，故应选 (A)。"
  }),
  base(5, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x)=\\sec x\\) 在 \\(x=0\\) 处的 2 次泰勒多项式为 \\(1+ax+bx^2,\\) 则（ ）",
    options: [{ key: "A", text: "\\(a=1,\\ b=-\\dfrac12\\)" }, { key: "B", text: "\\(a=1,\\ b=\\dfrac12\\)" }, { key: "C", text: "\\(a=0,\\ b=-\\dfrac12\\)" }, { key: "D", text: "\\(a=0,\\ b=\\dfrac12\\)" }],
    answer: ["D"],
    explain: "正确答案： D 由题意知 f ( x ) = sec x = c o s x 1 ​ = 1 + a x + b x 2 + o ( x 2 ) ，故 1 ​ = cos ( 1 + a x + b x 2 + o ( x 2 ) ) = ( 1 − 2 1 ​ x 2 + o ( x 2 ) ) ( 1 + a x + b x 2 + o ( x 2 ) ) = 1 + a x + ( b − 2 1 ​ ) x 2 + o ( x 2 ) , ​ 由系数对应得 { a = 0 , b − 2 1 ​ = 0 ​ 即 { a = 0 , b = 2 1 ​ . ​ 故应选 (D)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x,y)\\) 可微，且 \\(f(x+1,e^x)=x(x+1)^2,\\) \\(f(x,x^2)=2x^2\\ln x,\\) 则 \\(df(1,1)=\\)（ ）",
    options: [{ key: "A", text: "\\(dx+dy\\)" }, { key: "B", text: "\\(dx-dy\\)" }, { key: "C", text: "\\(dy\\)" }, { key: "D", text: "\\(-dy\\)" }],
    answer: ["C"],
    explain: "正确答案： C 分别对题中两个复合函数等式求导。 由 \\(f(x+1,e^x)=x(x+1)^2\\)，有 \\[\nf_x(x+1,e^x)+e^x f_y(x+1,e^x)=3x^2+4x+1.\n\\] 令 \\(x=0\\)，得到 \\[f_x(1,1)+f_y(1,1)=1.\\] 又由 \\(f(x,x^2)=2x^2\\ln x\\)，有 \\[\nf_x(x,x^2)+2x f_y(x,x^2)=4x\\ln x+2x.\n\\] 令 \\(x=1\\)，得到 \\[f_x(1,1)+2f_y(1,1)=2.\\] 联立解得 \\(f_x(1,1)=0\\)，\\(f_y(1,1)=1\\)。因此 \\[df(1,1)=f_x(1,1)\\,dx+f_y(1,1)\\,dy=dy,\\] 故应选 (C)。"
  }),
  base(7, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在区间 \\([0,1]\\) 上连续，则 \\(\\int_0^1f(x)\\,dx=\\) （ ）",
    options: [{ key: "A", text: "\\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n f\\left(\\frac{2k-1}{2n}\\right)\\frac1{2n}\\)" }, { key: "B", text: "\\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n f\\left(\\frac{2k-1}{2n}\\right)\\frac1n\\)" }, { key: "C", text: "\\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{2n} f\\left(\\frac{k-1}{2n}\\right)\\frac1n\\)" }, { key: "D", text: "\\(\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{2n} f\\left(\\frac{k}{2n}\\right)\\frac2n\\)" }],
    answer: ["B"],
    explain: "正确答案： B 将区间 [ 0 , 1 ] 上均分成 n 份，取 ξ k ​ 为第 k 个小区间的中点，则 ξ k ​ = 2 n k − 1 ​ + n k ​ ​ = 2 n 2 k − 1 ​ . 因此， ∫ 0 1 ​ f ( x ) d x = n → ∞ lim ​ k = 1 ∑ n ​ f ( 2 n 2 k − 1 ​ ) ⋅ n 1 ​ , 故应选 (B)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "二次型 \\(f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_2+x_3)^2-(x_3-x_1)^2\\) 的正惯性指数与负惯性指数依次为（ ）",
    options: [{ key: "A", text: "\\(2,0\\)" }, { key: "B", text: "\\(1,1\\)" }, { key: "C", text: "\\(2,1\\)" }, { key: "D", text: "\\(1,2\\)" }],
    answer: ["B"],
    explain: "正确答案： B 展开二次型： \\[\nf=2x_2^2+2x_1x_2+2x_1x_3+2x_2x_3,\n\\qquad\nA=\\begin{pmatrix}0&1&1\\\\1&2&1\\\\1&1&0\\end{pmatrix}.\n\\] 其特征多项式为 \\[\n|\\lambda E-A|=\\lambda(\\lambda-3)(\\lambda+1),\n\\] 故特征值为 \\(3,0,-1\\)。正特征值、负特征值各有 1 个，所以正惯性指数与负惯性指数依次为 \\(1,1\\)，故应选 (B)。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 3 阶矩阵 \\(A=(\\alpha_1,\\alpha_2,\\alpha_3),\\;B=(\\beta_1,\\beta_2,\\beta_3),\\) 若向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 可以由向量组 \\(\\beta_1,\\beta_2,\\beta_3\\) 线性表出，则（ ）",
    options: [{ key: "A", text: "\\(Ax=0\\) 的解均为 \\(Bx=0\\) 的解" }, { key: "B", text: "\\(A^Tx=0\\) 的解均为 \\(B^Tx=0\\) 的解" }, { key: "C", text: "\\(Bx=0\\) 的解均为 \\(Ax=0\\) 的解" }, { key: "D", text: "\\(B^Tx=0\\) 的解均为 \\(A^Tx=0\\) 的解" }],
    answer: ["D"],
    explain: "正确答案： D 因为向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 可以由向量组 \\(\\beta_1,\\beta_2,\\beta_3\\) 线性表出，所以存在矩阵 \\(P\\)，使 \\[A=BP.\\] 于是 \\(A^T=P^TB^T\\)。若 \\(B^Tx=0\\)，则 \\[A^Tx=P^TB^Tx=0.\\] 因此 \\(B^Tx=0\\) 的解均为 \\(A^Tx=0\\) 的解，故应选 (D)。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知矩阵\\(A=\\begin{pmatrix} 1&0&-1\\\\ 2&-1&1\\\\ -1&2&-5 \\end{pmatrix},\\)若下三角可逆矩阵 \\(P\\) 和上三角可逆矩阵 \\(Q\\)，使 \\(PAQ\\) 为对角矩阵，则 \\(P,Q\\) 可以分别取（ ）",
    options: [{ key: "A", text: "\\(P=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix},\\qquad Q=\\begin{pmatrix}1&0&1\\\\0&1&3\\\\0&0&1\\end{pmatrix}\\)" }, { key: "B", text: "\\(P=\\begin{pmatrix}1&0&0\\\\2&-1&0\\\\-3&2&1\\end{pmatrix},\\qquad Q=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)" }, { key: "C", text: "\\(P=\\begin{pmatrix}1&0&0\\\\2&-1&0\\\\-3&2&1\\end{pmatrix},\\qquad Q=\\begin{pmatrix}1&0&1\\\\0&1&3\\\\0&0&1\\end{pmatrix}\\)" }, { key: "D", text: "\\(P=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\1&3&1\\end{pmatrix},\\qquad Q=\\begin{pmatrix}1&2&-3\\\\0&-1&2\\\\0&0&1\\end{pmatrix}\\)" }],
    answer: ["C"],
    explain: "正确答案： C 取选项 (C) 中 \\[\nP=\\begin{pmatrix}1&0&0\\\\2&-1&0\\\\-3&2&1\\end{pmatrix},\n\\qquad\nQ=\\begin{pmatrix}1&0&1\\\\0&1&3\\\\0&0&1\\end{pmatrix}.\n\\] 其中 \\(P\\) 为下三角可逆矩阵，\\(Q\\) 为上三角可逆矩阵。直接计算： \\[\nPA=\n\\begin{pmatrix}\n1&0&-1\\\\\n0&1&-3\\\\\n0&0&0\n\\end{pmatrix},\n\\] \\[\nPAQ=\n\\begin{pmatrix}\n1&0&0\\\\\n0&1&0\\\\\n0&0&0\n\\end{pmatrix},\n\\] 确为对角矩阵，因此应选 (C)。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "\\(\\int_{-\\infty}^{+\\infty}|x|3^{-x^2}\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 l n 3 1 ​ 【",
    referenceAnswer: "【答案】 l n 3 1 ​ 【解析】 由于被积函数 ∣ x ∣ 3 − x 2 是偶函数，因此有： ∫ − ∞ + ∞ ​ ∣ x ∣ 3 − x 2 d x ​ = 2 ∫ 0 + ∞ ​ x 3 − x 2 d x = ∫ 0 + ∞ ​ 3 − x 2 d ( x 2 ) ​ 令 t = x 2 ，则： = − ln 3 3 − t ​ ​ 0 + ∞ ​ = − ln 3 1 ​ ( t → ∞ lim ​ 3 − t − 1 ) = ln 3 1 ​ 因此，原积分值为 ln 3 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(y=y(x)\\) 由参数方程\\(\\begin{cases} x=2e^t+t+1,\\\\ y=4(t-1)e^t+t^2 \\end{cases}\\)确定，则 \\(\\left.\\frac{d^2y}{dx^2}\\right|_{t=0}=\\underline{\\qquad}.\\)",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 首先，求一阶导数： d x d y ​ = d t d x ​ d t d y ​ ​ = 2 e t + 1 4 [ e t + ( t − 1 ) e t ] + 2 t ​ = 2 e t + 1 4 t e t + 2 t ​ = 2 t . 接着，求二阶导数： d x 2 d 2 y ​ = d x d ​ ( d x d y ​ ) = d x d ​ ( 2 t ) = 2 ⋅ 2 e t + 1 1 ​ . 最后，代入 t = 0 ： d x 2 d 2 y ​ ​ t = 0 ​ = 3 2 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(z=z(x,y)\\) 由方程 \\((x+1)z+y\\ln z-\\arctan(2xy)=1\\) 确定，则 \\(\\left.\\frac{\\partial z}{\\partial x}\\right|_{(0,2)}=\\underline{\\qquad}.\\)",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 在等式 ( x + 1 ) z + y ln z − arctan ( 2 x y ) = 1 两边对 x 求偏导，有： z + ( x + 1 ) ⋅ ∂ x ∂ z ​ + y ⋅ z 1 ​ ⋅ ∂ x ∂ z ​ − 1 + ( 2 x y ) 2 2 y ​ = 0 将 x = 0 ， y = 2 代入原方程，得 z + 2 ln z = 1 ，易知 z = 1 。 再将 x = 0 、 y = 2 、 z = 1 代入偏导方程，解得： ∂ x ∂ z ​ ​ ( 0 , 2 ) ​ = 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数 \\(f(t)=\\int_1^{t^2} dx\\int_{\\sqrt{x}}^t\\sin\\frac{x}{y}\\,dy,\\) 则 \\(f'\\left(\\frac\\pi2\\right)=\\underline{\\qquad}.\\)",
    answerText: "】 \\(\\displaystyle \\frac{\\pi}{2}\\cos\\frac{2}{\\pi}\\) 【",
    referenceAnswer: "【答案】 \\(\\displaystyle \\frac{\\pi}{2}\\cos\\frac{2}{\\pi}\\) 【解析】 设 \\[\nf(t)=\\int_1^{t^2}\\left(\\int_{\\sqrt{x}}^t\\sin\\frac{x}{y}\\,dy\\right)dx.\n\\] 对 \\(t\\) 求导。由莱布尼茨公式，外层积分上限 \\(t^2\\) 带来的边界项为 \\[\n2t\\int_t^t\\sin\\frac{t^2}{y}\\,dy=0.\n\\] 而内层积分对上限 \\(t\\) 求导得到 \\(\\sin(x/t)\\)，故 \\[\nf'(t)=\\int_1^{t^2}\\sin\\frac{x}{t}\\,dx\n=\\left[-t\\cos\\frac{x}{t}\\right]_1^{t^2}\n=t\\left(\\cos\\frac1t-\\cos t\\right).\n\\] 代入 \\(t=\\frac{\\pi}{2}\\)，有 \\[\nf'\\!\\left(\\frac{\\pi}{2}\\right)\n=\\frac{\\pi}{2}\\left(\\cos\\frac{2}{\\pi}-\\cos\\frac{\\pi}{2}\\right)\n=\\frac{\\pi}{2}\\cos\\frac{2}{\\pi}.\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "微分方程 \\(y'''-y=0\\) 的通解 \\(y=\\underline{\\qquad}\\)。",
    answerText: "】 y = C 1 ​ e x + e − 2 1 ​ x ( C 2 ​ cos ( 2 3 ​ ​ x ) + C 3 ​ sin ( 2 3 ​ ​ x ) ) , C 1 ​ , C 2 ​ , C 3 ​ ∈ R . 【",
    referenceAnswer: "【答案】 y = C 1 ​ e x + e − 2 1 ​ x ( C 2 ​ cos ( 2 3 ​ ​ x ) + C 3 ​ sin ( 2 3 ​ ​ x ) ) , C 1 ​ , C 2 ​ , C 3 ​ ∈ R . 【解析】 由特征方程 λ 3 − 1 = 0 得 λ 1 ​ = 1 , λ 2 , 3 ​ = − 2 1 ​ ± 2 3 ​ ​ i 故方程通解为 y = C 1 ​ e x + e − 2 1 ​ x ( C 2 ​ cos ( 2 3 ​ ​ x ) + C 3 ​ sin ( 2 3 ​ ​ x ) ) , C 1 ​ , C 2 ​ , C 3 ​ ∈ R .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "多项式\\(f(x)= \\begin{vmatrix} x&x&1&2x\\\\ 1&x&2&-1\\\\ 2&1&x&1\\\\ 2&-1&1&x \\end{vmatrix}\\)中 \\(x^3\\) 项的系数为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 -5 【",
    referenceAnswer: "【答案】 -5 【解析】 四阶行列式中含 x 3 的项为： ( − 1 ) τ ( 2134 ) a 12 ​ a 21 ​ a 33 ​ a 44 ​ = − x 3 以及 ( − 1 ) τ ( 4231 ) a 14 ​ a 22 ​ a 33 ​ a 41 ​ = − 4 x 3 因此， x 3 的系数为 − 1 − 4 = − 5 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求极限 \\(\\lim_{x\\to0}\\left(\\frac{1+\\int_0^x e^{t^2}\\,dt}{e^x-1}-\\frac1{\\sin x}\\right).\\)",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 首先，将原极限表达式改写为通分形式： x → 0 lim ​ ( e x − 1 1 + ∫ 0 x ​ e t 2 d t ​ − sin x 1 ​ ) ​ = x → 0 lim ​ ( e x − 1 ) sin x sin x + sin x ⋅ ∫ 0 x ​ e t 2 d t − e x + 1 ​ ​ 接下来，将极限拆分为两部分： ​ = x → 0 lim ​ x 2 sin x − e x + 1 ​ + x → 0 lim ​ x 2 sin x ⋅ ∫ 0 x ​ e t 2 d t ​ ​ 利用泰勒展开计算第一部分： x → 0 lim ​ x 2 sin x − e x + 1 ​ ​ = x → 0 lim ​ x 2 x + o ( x 2 ) − ( 1 + x + 2 1 ​ x 2 + o ( x 2 ) ) + 1 ​ = x → 0 lim ​ x 2 − 2 1 ​ x 2 + o ( x 2 ) ​ = − 2 1 ​ ​ 计算第二部分： x → 0 lim ​ x 2 sin x ⋅ ∫ 0 x ​ e t 2 d t ​ ​ = x → 0 lim ​ x ∫ 0 x ​ e t 2 d t ​ ​ 应用洛必达法则： x → 0 lim ​ x ∫ 0 x ​ e t 2 d t ​ ​ = x → 0 lim ​ e x 2 = 1 ​ 将两部分结果相加： − 2 1 ​ + 1 = 2 1 ​ ​ 因此，原极限值为 2 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知 \\(f(x)=\\frac{x|x|}{1+x},\\) 求 \\(f(x)\\) 的凹凸性及渐近线。",
    referenceAnswer: "【答案】 曲线 \\(y=f(x)\\) 的凹区间为 \\(( -\\infty,-1)\\) 和 \\((0,+\\infty)\\)，凸区间为 \\((-1,0)\\)。渐近线为 \\(x=-1\\)，以及 \\(x\\to+\\infty\\) 时的 \\(y=x-1\\) 和 \\(x\\to-\\infty\\) 时的 \\(y=-x+1\\)。 【解析】 由绝对值可写成 \\[\nf(x)=\\begin{cases}\n\\dfrac{x^2}{1+x},&x\\ge0,\\\\[4pt]\n-\\dfrac{x^2}{1+x},&x<0,\\ x\\ne-1.\n\\end{cases}\n\\] 在相应区间内二阶导数为 \\[\nf''(x)=\\begin{cases}\n\\dfrac{2}{(1+x)^3},&x>0,\\\\[4pt]\n-\\dfrac{2}{(1+x)^3},&x<0,\\ x\\ne-1.\n\\end{cases}\n\\] 因此 \\(f''(x)>0\\) 在 \\(( -\\infty,-1)\\) 与 \\((0,+\\infty)\\) 上成立，\\(f''(x)<0\\) 在 \\((-1,0)\\) 上成立，得到题述凹凸区间。 在 \\(x=-1\\) 处， \\[\n\\lim_{x\\to-1^-}f(x)=+\\infty,\n\\qquad\n\\lim_{x\\to-1^+}f(x)=-\\infty,\n\\] 所以 \\(x=-1\\) 是铅垂渐近线。 当 \\(x>0\\) 时， \\[\nf(x)=\\frac{x^2}{x+1}=x-1+\\frac1{x+1},\n\\] 故 \\(x\\to+\\infty\\) 时斜渐近线为 \\(y=x-1\\)。当 \\(x<0\\) 时， \\[\nf(x)=-\\frac{x^2}{x+1}=-x+1-\\frac1{x+1},\n\\] 故 \\(x\\to-\\infty\\) 时斜渐近线为 \\(y=-x+1\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\\(f(x)\\) 满足 \\(\\int\\frac{f(x)}{\\sqrt{x}}\\,dx=\\frac16x^2-x+C,\\) \\(L\\) 为曲线 \\(y=f(x)\\ (4\\le x\\le9)\\)，\\(L\\) 的弧长为 \\(s\\)，\\(L\\) 绕 \\(x\\) 轴旋转一周所形成的曲面的面积为 \\(A\\)，求 \\(s\\) 和 \\(A\\)。",
    referenceAnswer: "【答案】 S = 3 22 ​ , A = 9 425 ​ π 【解析】 在等式 ∫ x ​ f ( x ) ​ d x = 6 1 ​ x 2 − x + C 的两端对 x 求导，有 x ​ f ( x ) ​ = 3 1 ​ x − 1 , 故 f ( x ) = 3 1 ​ x x ​ − x ​ . 进一步求导得 f ′ ( x ) = 2 1 ​ x ​ − 2 x ​ 1 ​ = 2 1 ​ ( x ​ − x ​ 1 ​ ) = 2 1 ​ ⋅ x ​ x − 1 ​ . 则弧长 S = ∫ 4 9 ​ 1 + [ f ′ ( x ) ] 2 ​ d x = ∫ 4 9 ​ 2 x ​ x + 1 ​ d x = ∫ 4 9 ​ ( x + 1 ) d ( x ​ ) . 换元后 S = ∫ 2 3 ​ ( x 2 + 1 ) d x = 3 1 ​ x 3 ​ 2 3 ​ + 1 = 3 1 ​ ( 27 − 8 ) + 1 = 3 22 ​ . 旋转体表面积 A = 2 π ∫ 4 9 ​ f ( x ) 1 + [ f ′ ( x ) ] 2 ​ d x = 2 π ∫ 4 9 ​ ( 3 1 ​ x x ​ − x ​ ) ⋅ 2 x ​ x + 1 ​ d x . 化简得 A = 2 π ∫ 4 9 ​ ( 6 1 ​ x 2 − 3 1 ​ x − 2 1 ​ ) d x = 2 π ⋅ 18 425 ​ = 9 425 ​ π .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设 \\(y=y(x)\\ (x>0)\\) 是微分方程 \\(xy'-6y=-6\\) 的解，且满足 \\(y(\\sqrt3)=10\\)。（1）求 \\(y(x)\\)；（2）\\(P\\) 为曲线 \\(y=y(x)\\) 上的一点，曲线 \\(y=y(x)\\) 在点 \\(P\\) 的法线在 \\(y\\) 轴上的截距为 \\(I_y\\)，为使 \\(I_y\\) 最小，求 \\(P\\) 的坐标。",
    referenceAnswer: "【答案】 （Ⅰ） y ( x ) = 1 + 3 1 ​ x 6 （Ⅱ）点 P 的坐标为 ( 1 , 3 4 ​ ) 【解析】 （Ⅰ）由 x y ′ − 6 y = − 6 ，可得 y ′ − x 6 ​ y = − x 6 ​ ，于是 y ​ = e ∫ x 6 ​ d x ( ∫ − x 6 ​ ⋅ x 6 1 ​ d x + C ) = x 6 ( x − 6 + C ) = 1 + C x 6 ​ 又 y ( 3 ​ ) = 10 ，代入得 C = 3 1 ​ ，因此 y ( x ) = 1 + 3 1 ​ x 6 。 （Ⅱ）曲线 y = y ( x ) 在点 P 的法线方程为 Y − ( 1 + 3 1 ​ x 6 ) = − 2 x 5 1 ​ ( X − x ) 令 X = 0 ，得 Y = 1 + 3 1 ​ x 6 + 2 x 4 1 ​ 设 g ( x ) = 1 + 3 1 ​ x 6 + 2 x 4 1 ​ ，其中 x > 0 ，则 g ′ ( x ) ​ = 2 x 5 + 2 1 ​ ⋅ ( − 4 ) x − 5 = 2 ( x 5 − x − 5 ) = 2 ⋅ x 5 x 10 − 1 ​ ​ 令 g ′ ( x ) = 0 ，解得 x = 1 。 当 x > 1 时， g ′ ( x ) > 0 ；当 0 < x < 1 时， g ′ ( x ) < 0 ，故 x = 1 为唯一的极小值点，且为最小值点。 此时点 P 的坐标为 ( 1 , 3 4 ​ ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）曲线 \\((x^2+y^2)^2=x^2-y^2\\;(x\\ge0,\\ y\\ge0)\\) 与 \\(x\\) 轴围成的区域为 \\(D\\)，求 \\(\\iint_Dxy\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 48 1 ​ 【解析】 首先，将积分区域 D 用极坐标表示，并计算二重积分： ∬ D ​ x y d x d y = ∫ 0 4 π ​ ​ d θ ∫ 0 c o s 2 θ ​ ​ r cos θ ⋅ r sin θ ⋅ r d r 化简被积函数： = ∫ 0 4 π ​ ​ cos θ sin θ ∫ 0 c o s 2 θ ​ ​ r 3 d r 计算内层积分： ∫ 0 c o s 2 θ ​ ​ r 3 d r = 4 1 ​ r 4 ​ 0 c o s 2 θ ​ ​ = 4 1 ​ cos 2 2 θ 代入外层积分： = ∫ 0 4 π ​ ​ sin θ cos θ ⋅ 4 1 ​ cos 2 2 θ d θ 利用三角恒等式 sin θ cos θ = 2 1 ​ sin 2 θ ： = 4 1 ​ ∫ 0 4 π ​ ​ 2 1 ​ sin 2 θ ⋅ cos 2 2 θ d θ = 8 1 ​ ∫ 0 4 π ​ ​ sin 2 θ cos 2 2 θ d θ 注意到 sin 2 θ d θ = − 2 1 ​ d ( cos 2 θ ) ，因此： = − 16 1 ​ ∫ 0 4 π ​ ​ cos 2 2 θ d ( cos 2 θ ) 计算积分： = − 16 1 ​ ⋅ 3 1 ​ cos 3 2 θ ​ 0 4 π ​ ​ = − 48 1 ​ ( cos 3 2 π ​ − cos 3 0 ) 代入上下限： cos 2 π ​ = 0 , cos 0 = 1 = − 48 1 ​ ( 0 − 1 ) = 48 1 ​ 最终结果为： ∬ D ​ x y d x d y = 48 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设矩阵\\(A=\\begin{pmatrix} 2&1&0\\\\ 1&2&0\\\\ 1&a&b \\end{pmatrix}\\)仅有两个不同的特征值。若 \\(A\\) 相似于对角矩阵，求 \\(a,b\\) 的值，并求可逆矩阵 \\(P\\)，使 \\(P^{-1}AP\\) 为对角矩阵。",
    referenceAnswer: "【答案】 有两种情况： ① \\(a=1,\\ b=1\\)，可取 \\[\nP=\\begin{pmatrix}-1&0&1\\\\1&0&1\\\\0&1&1\\end{pmatrix},\n\\qquad\nP^{-1}AP=\\operatorname{diag}(1,1,3).\n\\] ② \\(a=-1,\\ b=3\\)，可取 \\[\nP=\\begin{pmatrix}1&0&-1\\\\1&0&1\\\\0&1&1\\end{pmatrix},\n\\qquad\nP^{-1}AP=\\operatorname{diag}(3,3,1).\n\\] 【解析】 特征多项式为 \\[\n|\\lambda E-A|\n=(\\lambda-b)\\bigl[(\\lambda-2)^2-1\\bigr]\n=(\\lambda-b)(\\lambda-1)(\\lambda-3).\n\\] 因为矩阵只有两个不同的特征值，所以 \\(b=1\\) 或 \\(b=3\\)。 情况 ①：\\(b=1\\)。 此时 \\(\\lambda=1\\) 是二重特征值。要使 \\(A\\) 可对角化，必须有 \\(\\dim\\ker(A-E)=2\\)，等价于 \\(r(A-E)=1\\)。 \\[\nA-E=\\begin{pmatrix}1&1&0\\\\1&1&0\\\\1&a&0\\end{pmatrix}.\n\\] 由秩为 1 得 \\(a=1\\)。此时可取 \\(\\lambda=1\\) 的两个线性无关特征向量 \\[\n\\alpha_1=(-1,1,0)^T,\\qquad \\alpha_2=(0,0,1)^T,\n\\] 以及 \\(\\lambda=3\\) 的特征向量 \\(\\alpha_3=(1,1,1)^T\\)。令 \\(P=(\\alpha_1,\\alpha_2,\\alpha_3)\\)，即得到上面的第一个 \\(P\\)。 情况 ②：\\(b=3\\)。 此时 \\(\\lambda=3\\) 是二重特征值。可对角化要求 \\(r(A-3E)=1\\)，而 \\[\nA-3E=\\begin{pmatrix}-1&1&0\\\\1&-1&0\\\\1&a&0\\end{pmatrix},\n\\] 故 \\(a=-1\\)。此时可取 \\(\\lambda=3\\) 的两个线性无关特征向量 \\[\n\\beta_1=(1,1,0)^T,\\qquad \\beta_2=(0,0,1)^T,\n\\] 以及 \\(\\lambda=1\\) 的特征向量 \\(\\beta_3=(-1,1,1)^T\\)。令 \\(P=(\\beta_1,\\beta_2,\\beta_3)\\)，即得到上面的第二个 \\(P\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2021_math2 = {
  id: P, year: Y,
  title: '2021 年全国硕士研究生招生考试 数学（二）',
  short: '2021 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2021_math2.length,
  qids: questions2021_math2.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
