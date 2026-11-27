const P = 'paper-2020-math2'
const Y = 2020
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2020-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2020 考研数学（二）真题',
  ...extra
})

export const questions2020_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当 \\(x\\to0^+\\) 时，下列无穷小的阶数最高的是（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_0^x(e^{t^2}-1)\\,dt\\)" }, { key: "B", text: "\\(\\displaystyle\\int_0^x\\ln\\left(1+\\sqrt{t^3}\\right)\\,dt\\)" }, { key: "C", text: "\\(\\displaystyle\\int_0^{\\sin x}\\sin t^2\\,dt\\)" }, { key: "D", text: "\\(\\displaystyle\\int_0^{1-\\cos x}\\sqrt{\\sin^3t}\\,dt\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 A. ∫ 0 x ​ ( e t 2 − 1 ) d t ∼ ∫ 0 x ​ t 2 d t = 3 x 3 ​ ； B. ∫ 0 x ​ ln ( 1 + t 3 ​ ) d t ∼ ∫ 0 x ​ t 2 3 ​ d t = 5 2 ​ x 2 5 ​ ； C. ∫ 0 s i n x ​ sin t 2 d t ∼ ∫ 0 x ​ t 2 d t = 3 1 ​ x 3 ； D. ∫ 0 1 − c o s x ​ sin 3 t ​ d t ∼ ∫ 0 2 1 ​ x 2 ​ t 2 3 ​ d t = 5 2 ​ t 2 5 ​ ​ 0 2 1 ​ x 2 ​ = 5 2 ​ ⋅ ( 2 1 ​ ) 2 5 ​ ⋅ x 5 。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)=\\frac{e^{\\frac1{x-1}}\\ln|1+x|}{(e^x-1)(x-2)}\\) 的第二类间断点个数为（ ）",
    options: [{ key: "A", text: "\\(1\\)" }, { key: "B", text: "\\(2\\)" }, { key: "C", text: "\\(3\\)" }, { key: "D", text: "\\(4\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 函数可能出现间断的点为 \\(x=-1,0,1,2\\)。分别判断： 当 \\(x\\to0\\) 时，利用 \\(\\ln(1+x)\\sim x\\)、\\(e^x-1\\sim x\\)，有 \\[\n\\lim_{x\\to0}f(x)\n=\\frac{e^{-1}}{-2}\n=-\\frac1{2e},\n\\] 极限有限，因此 \\(x=0\\) 为可去间断点，属于第一类间断点。 当 \\(x\\to-1\\) 时，\\(\\ln|1+x|\\to-\\infty\\)，而其余因子趋于有限非零值，所以 \\[\n\\lim_{x\\to-1}f(x)=-\\infty,\n\\] 故 \\(x=-1\\) 为第二类间断点。 当 \\(x\\to1\\) 时， \\[\n\\lim_{x\\to1^-}f(x)=0,\\qquad\n\\lim_{x\\to1^+}f(x)=-\\infty,\n\\] 右极限为无穷，因此 \\(x=1\\) 为第二类间断点。 当 \\(x\\to2\\) 时，分子趋于正常数，而分母中的 \\(x-2\\) 变号，故 \\[\n\\lim_{x\\to2^-}f(x)=-\\infty,\\qquad\n\\lim_{x\\to2^+}f(x)=+\\infty.\n\\] 因此 \\(x=2\\) 也是第二类间断点。 综上，第二类间断点共有 \\(3\\) 个：\\(x=-1,1,2\\)，故选 (C)。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\int_0^1\\frac{\\arcsin\\sqrt{x}}{\\sqrt{x(1-x)}}\\,dx=（ ）\\)",
    options: [{ key: "A", text: "\\(\\frac{\\pi^2}{4}\\)" }, { key: "B", text: "\\(\\frac{\\pi^2}{8}\\)" }, { key: "C", text: "\\(\\frac\\pi4\\)" }, { key: "D", text: "\\(\\frac\\pi8\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】令 x ​ = sin t ，则 x = sin 2 t ， d x = 2 sin t cos t d t 。 于是有： ∫ 0 1 ​ x ( 1 − x ) ​ arcsin x ​ ​ d x = ∫ 0 2 π ​ ​ sin t cos t t ​ ⋅ 2 sin t cos t d t = ∫ 0 2 π ​ ​ 2 t d t 计算该积分： ∫ 0 2 π ​ ​ 2 t d t = t 2 ​ 0 2 π ​ ​ = ( 2 π ​ ) 2 − 0 = 4 π 2 ​ 因此，原积分值为 4 π 2 ​ 。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)=x^2\\ln(1-x)\\)，当 \\(n\\ge3\\) 时，\\(f^{(n)}(0)=\\)（ ）",
    options: [{ key: "A", text: "\\(-\\dfrac{n!}{n-2}\\)" }, { key: "B", text: "\\(\\dfrac{n!}{n-2}\\)" }, { key: "C", text: "\\(-\\dfrac{(n-2)!}{n}\\)" }, { key: "D", text: "\\(\\dfrac{(n-2)!}{n}\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 由展开式 ln ( 1 − x ) = − n = 1 ∑ ∞ ​ n x n ​ , 则 x 2 ln ( 1 − x ) = − n = 1 ∑ ∞ ​ n x n + 2 ​ = − n = 3 ∑ ∞ ​ n − 2 x n ​ . 故 f ( n ) ( 0 ) = − n − 2 n ! ​ ."
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "对函数\\(f(x,y)=\\begin{cases} xy,&xy\\ne0,\\\\ x,&y=0,\\\\ y,&x=0, \\end{cases}\\)给出以下结论：① \\(\\left.\\dfrac{\\partial f}{\\partial x}\\right|_{(0,0)}=1\\)；② \\(\\left.\\dfrac{\\partial^2f}{\\partial x\\partial y}\\right|_{(0,0)}=1\\)；③ \\(\\displaystyle\\lim_{(x,y)\\to(0,0)}f(x,y)=0\\)；④ \\(\\displaystyle\\lim_{y\\to0}\\lim_{x\\to0}f(x,y)=0\\)。正确的个数是（ ）",
    options: [{ key: "A", text: "\\(4\\)" }, { key: "B", text: "\\(3\\)" }, { key: "C", text: "\\(2\\)" }, { key: "D", text: "\\(1\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 ∂ x ∂ f ​ ​ ( 0 , 0 ) ​ = lim x → 0 ​ x − 0 f ( x , 0 ) − f ( 0 , 0 ) ​ = lim x → 0 ​ x − 0 x − 0 ​ = 1 ， 因此（1）正确。 ∂ x ∂ y ∂ 2 f ​ ​ ( 0 , 0 ) ​ = lim y → 0 ​ y − 0 ∂ x ∂ f ​ ∣ ( 0 , y ) ​ − ∂ x ∂ f ​ ∣ ( 0 , 0 ) ​ ​ = lim y → 0 ​ y ∂ x ∂ f ​ ∣ ( 0 , y ) ​ − 1 ​ ， 其中 ∂ x ∂ f ​ ​ ( 0 , y ) ​ = lim x → 0 ​ x − 0 f ( x , y ) − f ( 0 , y ) ​ = lim x → 0 ​ x x y − y ​ = lim x → 0 ​ x y ( x − 1 ) ​ 不存在， 因此（2）错误。 由 ∣ f ( x , y ) ∣ ≤ ∣ x ∣ + ∣ y ∣ ，当 ( x , y ) → ( 0 , 0 ) 时， lim ( x , y ) → ( 0 , 0 ) ​ f ( x , y ) = 0 ， 所以（3）正确。 lim x → 0 ​ f ( x , y ) = { 0 , y , ​ y  = 0 y = 0 ​ ， 从而 lim y → 0 ​ lim x → 0 ​ f ( x , y ) = 0 ， （4）正确。"
  }),
  base(6, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)\\) 在区间 \\([-2,2]\\) 上可导，且 \\(f'(x)>f(x)>0\\)，则（ ）",
    options: [{ key: "A", text: "\\(\\dfrac{f(-2)}{f(-1)}>1\\)" }, { key: "B", text: "\\(\\dfrac{f(0)}{f(-1)}>e\\)" }, { key: "C", text: "\\(\\dfrac{f(1)}{f(-1)}<e^2\\)" }, { key: "D", text: "\\(\\dfrac{f(2)}{f(-1)}<e^3\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 令 F ( x ) = e x f ( x ) ​ ，则 F ′ ( x ) = e 2 x f ′ ( x ) e x − f ( x ) e x ​ = e x f ′ ( x ) − f ( x ) ​ . 由题意知 F ′ ( x ) > 0 ，从而 F ( x ) = e x f ( x ) ​ 单调递增。 因此， F ( 0 ) > F ( − 1 ) ，即 e 0 f ( 0 ) ​ > e − 1 f ( − 1 ) ​ . 又 f ( x ) > 0 ，故 f ( − 1 ) f ( 0 ) ​ > e ."
  }),
  base(7, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知四阶矩阵 \\(A=(a_{ij})\\) 不可逆，\\(a_{12}\\) 的代数余子式 \\(A_{12}\\ne0\\)，\\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 为矩阵 \\(A\\) 的列向量组，\\(A^*\\) 为 \\(A\\) 的伴随矩阵，则方程组 \\(A^*x=0\\) 的通解为（ ）",
    options: [{ key: "A", text: "\\(x=k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_3\\)，其中 \\(k_1,k_2,k_3\\) 为任意常数" }, { key: "B", text: "\\(x=k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_4\\)，其中 \\(k_1,k_2,k_3\\) 为任意常数" }, { key: "C", text: "\\(x=k_1\\alpha_1+k_2\\alpha_3+k_3\\alpha_4\\)，其中 \\(k_1,k_2,k_3\\) 为任意常数" }, { key: "D", text: "\\(x=k_1\\alpha_2+k_2\\alpha_3+k_3\\alpha_4\\)，其中 \\(k_1,k_2,k_3\\) 为任意常数" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 已知 ∣ A ∣ = 0 ， r ( A ) = 3 ，故 r ( A ∗ ) = 1 ，因此 A ∗ x = 0 的基础解系中解向量的个数为 3 。 由 A 12 ​  = 0 得 α 1 ​ 、 α 3 ​ 、 α 4 ​ 线性无关，则通解为 x = k 1 ​ α 1 ​ + k 2 ​ α 3 ​ + k 3 ​ α 4 ​ , 其中 k 1 ​ 、 k 2 ​ 、 k 3 ​ 为任意常数，故选择 (C)。"
  }),
  base(8, 'k-math-019', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，\\(\\alpha_1,\\alpha_2\\) 为矩阵 \\(A\\) 属于特征值 \\(1\\) 的线性无关的特征向量，\\(\\alpha_3\\) 为 \\(A\\) 的属于特征值 \\(-1\\) 的特征向量，则满足\\(P^{-1}AP=\\begin{pmatrix} 1&0&0\\\\ 0&-1&0\\\\ 0&0&1 \\end{pmatrix}\\)的可逆矩阵 \\(P\\) 可为（ ）",
    options: [{ key: "A", text: "\\((\\alpha_1+\\alpha_3,\\ \\alpha_2,\\ -\\alpha_3)\\)" }, { key: "B", text: "\\((\\alpha_1+\\alpha_2,\\ \\alpha_2,\\ -\\alpha_3)\\)" }, { key: "C", text: "\\((\\alpha_1+\\alpha_3,\\ -\\alpha_3,\\ \\alpha_2)\\)" }, { key: "D", text: "\\((\\alpha_1+\\alpha_2,\\ -\\alpha_3,\\ \\alpha_2)\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 若 \\(P^{-1}AP=\\operatorname{diag}(1,-1,1)\\)，则 \\(P\\) 的三列应依次为 \\(A\\) 对应特征值 \\(1,-1,1\\) 的线性无关特征向量。 因为 \\(\\alpha_1,\\alpha_2\\) 都属于特征值 \\(1\\)，所以 \\[\nA(\\alpha_1+\\alpha_2)=\\alpha_1+\\alpha_2,\\qquad\nA(\\alpha_2)=\\alpha_2.\n\\] 又因为 \\(\\alpha_3\\) 属于特征值 \\(-1\\)，所以 \\[\nA(-\\alpha_3)=-1\\cdot(-\\alpha_3).\n\\] 其中 \\(\\alpha_1+\\alpha_2\\) 与 \\(\\alpha_2\\) 在线性无关的 \\(\\alpha_1,\\alpha_2\\) 张成的特征子空间内仍线性无关，而 \\(-\\alpha_3\\) 属于另一特征值对应的特征子空间，因此三者线性无关。 故可取 \\[\nP=(\\alpha_1+\\alpha_2,\\,-\\alpha_3,\\,\\alpha_2),\n\\] 与选项 (D) 一致。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\\(\\begin{cases} x=\\sqrt{t^2+1},\\\\ y=\\ln\\left(t+\\sqrt{t^2+1}\\right), \\end{cases}\\)则 \\(\\left.\\frac{d^2y}{dx^2}\\right|_{t=1}=\\underline{\\qquad}.\\)",
    answerText: "】 − 2 ​ 【",
    referenceAnswer: "【答案】 − 2 ​ 【解析】 首先，求一阶导数： d x d y ​ = d x / d t d y / d t ​ = t + t 2 + 1 ​ 1 + t 2 + 1 ​ t ​ ​ ⋅ t t 2 + 1 ​ ​ = t 1 ​ 接着，求二阶导数： d x 2 d 2 y ​ = d t d ( t 1 ​ ) ​ ⋅ d x d t ​ = − t 2 1 ​ ⋅ t t 2 + 1 ​ ​ = − t 3 t 2 + 1 ​ ​ 最后，代入 t = 1 得： d x 2 d 2 y ​ ​ t = 1 ​ = − 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\int_0^1dy\\int_{\\sqrt y}^{1}\\sqrt{x^3+1}\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 9 2 ​ ( 2 2 ​ − 1 ) 【",
    referenceAnswer: "【答案】 9 2 ​ ( 2 2 ​ − 1 ) 【解析】 ∫ 0 1 ​ d y ∫ y ​ 1 ​ x 3 + 1 ​ d x ​ = ∫ 0 1 ​ d x ∫ 0 x 2 ​ x 3 + 1 ​ d y = ∫ 0 1 ​ x 2 x 3 + 1 ​ d x = 3 1 ​ ∫ 0 1 ​ x 3 + 1 ​ d ( x 3 + 1 ) = 9 2 ​ ( x 3 + 1 ) 2 3 ​ ​ 0 1 ​ = 9 2 ​ ( 2 2 ​ − 1 ) ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(z=\\arctan[xy+\\sin(x+y)],\\) 则 \\(\\left.dz\\right|_{(0,\\pi)}=\\underline{\\qquad}.\\)",
    answerText: "】 d z ​ ( 0 , π ) ​ = ( π − 1 ) d x − d y 【",
    referenceAnswer: "【答案】 d z ​ ( 0 , π ) ​ = ( π − 1 ) d x − d y 【解析】 全微分公式为 d z = ∂ x ∂ z ​ d x + ∂ y ∂ z ​ d y 其中， ∂ x ∂ z ​ = 1 + [ x y + sin ( x + y ) ] 2 y + cos ( x + y ) ​ 将点 ( 0 , π ) 代入，得 ∂ x ∂ z ​ = π − 1 , ∂ y ∂ z ​ = − 1 因此， d z ​ ( 0 , π ) ​ = ( π − 1 ) d x − d y",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "斜边长为 \\(2a\\) 的等腰直角三角形平板铅直地沉没在水中，且斜边与水面齐平。设重力加速度为 \\(g\\)，水的密度为 \\(\\rho\\)，则该平板一侧所受的水压力为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 3 1 ​ ρ g a 3 【",
    referenceAnswer: "【答案】 3 1 ​ ρ g a 3 【解析】 以水平面向右为 x 轴，以垂直于三角板斜边向上为 y 轴建立直角坐标系。此时，三角板右斜边所在的直线方程为 y = x − a 。 取微元 d y ，则微元受力为： d F = − y ⋅ 2 x ρ g d y = − 2 ρ g y ( y + a ) d y 因此，一侧的压力为： F = ∫ − a 0 ​ − 2 ρ g y ( y + a ) d y = ρ g ( − 3 2 ​ y 3 − a y 2 ) ​ − a 0 ​ = 3 1 ​ ρ g a 3",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(y=y(x)\\) 满足 \\(y''+2y'+y=0,\\) 且 \\(y(0)=0,\\ y'(0)=1\\)，则 \\(\\int_0^{+\\infty}y(x)\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 由方程可得特征方程为 λ 2 + 2 λ + 1 = 0 ，则特征方程的根为 λ 1 ​ = − 1 ， λ 2 ​ = − 1 。 于是微分方程的通解为 y = c 1 ​ e − x + c 2 ​ x e − x 。 由 y ( 0 ) = 0 ， y ′ ( 0 ) = 1 可得 c 1 ​ = 0 ， c 2 ​ = 1 ，因此 y ( x ) = x e − x 。 接下来计算积分： ∫ 0 + ∞ ​ y ( x ) d x ​ = ∫ 0 + ∞ ​ x e − x d x = − ∫ 0 + ∞ ​ x d ( e − x ) = − ( x e − x ​ 0 + ∞ ​ − ∫ 0 + ∞ ​ e − x d x ) = 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "行列式\\(\\begin{vmatrix} a&0&-1&1\\\\ 0&a&1&-1\\\\ -1&1&a&0\\\\ 1&-1&0&a \\end{vmatrix} =\\underline{\\qquad}.\\)",
    answerText: "】 \\(a^4-4a^2\\) 【",
    referenceAnswer: "【答案】 \\(a^4-4a^2\\) 【解析】 记原行列式为 \\(D\\)。先作列变换 \\(C_1\\leftarrow C_1+C_2+C_3+C_4\\)，则第一列变为 \\((a,a,a,a)^T\\)，所以 \\[\nD=a\\begin{vmatrix}\n1&0&-1&1\\\\\n1&a&1&-1\\\\\n1&1&a&0\\\\\n1&-1&0&a\n\\end{vmatrix}.\n\\] 再作列变换 \\(C_3\\leftarrow C_3+C_1\\)、\\(C_4\\leftarrow C_4-C_1\\)，得 \\[\nD=a\\begin{vmatrix}\n1&0&0&0\\\\\n1&a&2&-2\\\\\n1&1&a+1&-1\\\\\n1&-1&1&a-1\n\\end{vmatrix}.\n\\] 按第一行展开： \\[\nD=a\\begin{vmatrix}\na&2&-2\\\\\n1&a+1&-1\\\\\n-1&1&a-1\n\\end{vmatrix}.\n\\] 计算三阶行列式： \\[\n\\begin{aligned}\nD\n&=a\\bigl(a^3-4a\\bigr)\\\\\n&=a^4-4a^2\n=a^2(a^2-4).\n\\end{aligned}\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求曲线 \\(y=\\frac{x^{1+x}}{(1+x)^x}\\;(x>0)\\) 的斜渐近线方程。",
    referenceAnswer: "【答案】 y = e 1 ​ x + 2 e 1 ​ 【解析】 由 k ​ = x → + ∞ lim ​ x y ​ = x → + ∞ lim ​ x ( 1 + x ) x x 1 + x ​ = x → + ∞ lim ​ ( 1 + x ) x x x ​ = x → + ∞ lim ​ ( 1 + x 1 ​ ) x 1 ​ = e 1 ​ . ​ b ​ = x → + ∞ lim ​ ( y − k x ) = x → + ∞ lim ​ ( ( 1 + x ) x x 1 + x ​ − e 1 ​ x ) = x → + ∞ lim ​ x ( e x l n 1 + x x ​ − e 1 ​ ) = e − 1 x → + ∞ lim ​ x ( e x l n 1 + x x ​ + 1 − 1 ) = e − 1 x → + ∞ lim ​ x ( x ln 1 + x x ​ + 1 ) x 1 ​ = t e − 1 t → 0 + lim ​ t 2 ln 1 + t 1 ​ + t ​ 洛必达法则 e − 1 t → 0 + lim ​ 2 t − 1 + t 1 ​ + 1 ​ = e − 1 t → 0 + lim ​ 2 ( 1 + t ) 1 ​ = 2 e 1 ​ . ​ 故所求斜渐近线为 y = e 1 ​ x + 2 e 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知函数 \\(f(x)\\) 连续且 \\(\\lim_{x\\to0}\\frac{f(x)}x=1,\\) \\(g(x)=\\int_0^1f(xt)\\,dt.\\) 求 \\(g'(x)\\)，并证明 \\(g'(x)\\) 在 \\(x=0\\) 处连续。",
    referenceAnswer: "【答案】 g ′ ( x ) = { 2 1 ​ , x f ( x ) ​ − x 2 1 ​ ∫ 0 x ​ f ( u ) d u , ​ x = 0 , x  = 0. ​ 并且 g ′ ( x ) 在 x = 0 处连续。 【解析】 已知 lim x → 0 ​ x f ( x ) ​ = 1 且 f ( x ) 连续，可得 f ( 0 ) = 0 。 定义函数 g ( x ) = ∫ 0 1 ​ f ( x t ) d t x t = u ​ x 1 ​ ∫ 0 x ​ f ( u ) d u , 当 x = 0 时，有 g ( 0 ) = 0 ，因此 g ( x ) = { 0 , x 1 ​ ∫ 0 x ​ f ( u ) d u , ​ x = 0 , x  = 0. ​ 计算 g ′ ( 0 ) ： g ′ ( 0 ) = x → 0 lim ​ x − 0 g ( x ) − g ( 0 ) ​ = x → 0 lim ​ x x 1 ​ ∫ 0 x ​ f ( u ) d u − 0 ​ = x → 0 lim ​ x 2 ∫ 0 x ​ f ( u ) d u ​ . 应用洛必达法则： x → 0 lim ​ x 2 ∫ 0 x ​ f ( u ) d u ​ 分子分母分别求导 ​ x → 0 lim ​ 2 x f ( x ) ​ = 2 1 ​ . 因此 g ′ ( 0 ) = 2 1 ​ 。 对于 x  = 0 ，有 g ′ ( x ) = x f ( x ) ​ − x 2 1 ​ ∫ 0 x ​ f ( u ) d u . 综上， g ′ ( x ) = { 2 1 ​ , x f ( x ) ​ − x 2 1 ​ ∫ 0 x ​ f ( u ) d u , ​ x = 0 , x  = 0. ​ 考虑 g ′ ( x ) 在 x = 0 处的连续性： x → 0 lim ​ g ′ ( x ) = x → 0 lim ​ [ x f ( x ) ​ − x 2 1 ​ ∫ 0 x ​ f ( u ) d u ] = x → 0 lim ​ x f ( x ) ​ − x → 0 lim ​ x 2 1 ​ ∫ 0 x ​ f ( u ) d u . 由已知 lim x → 0 ​ x f ( x ) ​ = 1 ，且 lim x → 0 ​ x 2 1 ​ ∫ 0 x ​ f ( u ) d u = 2 1 ​ ，故 x → 0 lim ​ g ′ ( x ) = 1 − 2 1 ​ = 2 1 ​ = g ′ ( 0 ) . 因此， g ′ ( x ) 在 x = 0 处连续。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求函数 \\(f(x,y)=x^3+8y^3-xy\\) 的极值。",
    referenceAnswer: "【答案】 函数在点 \\(\\left(\\frac16,\\frac1{12}\\right)\\) 处取得极小值 \\(-\\frac1{216}\\)。 【解析】 由 \\[\nf_x=3x^2-y,\\qquad f_y=24y^2-x,\n\\] 令 \\(f_x=f_y=0\\)，得到两个驻点 \\[\n(0,0),\\qquad \\left(\\frac16,\\frac1{12}\\right).\n\\] 二阶偏导数为 \\[\nf_{xx}=6x,\\qquad f_{xy}=-1,\\qquad f_{yy}=48y.\n\\] 在 \\((0,0)\\) 处， \\[\nA=f_{xx}=0,\\quad B=f_{xy}=-1,\\quad C=f_{yy}=0,\n\\] 于是 \\(AC-B^2=-1<0\\)，故 \\((0,0)\\) 不是极值点。 在 \\(\\left(\\frac16,\\frac1{12}\\right)\\) 处， \\[\nA=1,\\qquad B=-1,\\qquad C=4,\n\\] 因此 \\[\nAC-B^2=1\\cdot4-(-1)^2=3>0,\\qquad A>0,\n\\] 故该点为极小值点，且 \\[\nf\\left(\\frac16,\\frac1{12}\\right)\n=\\frac1{216}+\\frac1{216}-\\frac1{72}\n=-\\frac1{216}.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数 \\(f(x)\\) 的定义域为 \\((0,+\\infty)\\) 且满足 \\(2f(x)+x^2f\\left(\\frac1x\\right)=\\frac{x^2+2x}{\\sqrt{1+x^2}},\\) 求 \\(f(x)\\)，并求曲线 \\(y=f(x)\\)、\\(y=\\frac12\\)、\\(y=\\frac{\\sqrt3}{2}\\) 及 \\(y\\) 轴所围图形绕 \\(x\\) 轴旋转所成旋转体的体积。",
    referenceAnswer: "【答案】 函数 f ( x ) = 1 + x 2 ​ x ​ ，旋转体的体积为 6 π 2 ​ 。 【解析】 ⎩ ⎨ ⎧ ​ 2 f ( x ) + x 2 f ( x 1 ​ ) = 1 + x 2 ​ x 2 + 2 x ​ 2 f ( x 1 ​ ) + x 2 1 ​ f ( x ) = 1 + x 2 1 ​ ​ x 2 1 ​ + 2 ​ ​ 解得 f ( x ) = 1 + x 2 ​ x ​ 。 体积 V x ​ = ∫ 2 1 ​ 2 3 ​ ​ ​ 2 π y x d y = ∫ 2 1 ​ 2 3 ​ ​ ​ 2 π 1 − y 2 ​ y 2 ​ d y ，令 y = sin t ，则 = ∫ 6 π ​ 3 π ​ ​ 2 π cos t sin 2 t ​ cos t d t = 2 π ∫ 6 π ​ 3 π ​ ​ 2 1 − cos 2 t ​ d t = π ∫ 6 π ​ 3 π ​ ​ ( 1 − cos 2 t ) d t = π ( t − 2 1 ​ sin 2 t ) ​ 6 π ​ 3 π ​ ​ = π ( 3 π ​ − 2 1 ​ ⋅ 2 3 ​ ​ ) − π ( 6 π ​ − 2 1 ​ ⋅ 2 3 ​ ​ ) = 6 π 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设平面区域 \\(D\\) 由直线 \\(x=1\\)、\\(x=2\\)、\\(y=x\\) 与 \\(x\\) 轴围成，计算 \\(\\iint_D\\frac{\\sqrt{x^2+y^2}}x\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 4 3 ​ 2 ​ + 4 3 ​ ln ( 2 ​ + 1 ) 【解析】 ​ ∬ D ​ x x 2 + y 2 ​ ​ d x d y = ∫ 0 4 π ​ ​ d θ ∫ s e c θ 2 s e c θ ​ r cos θ r ​ ⋅ r d r = ∫ 0 4 π ​ ​ cos θ 1 ​ ⋅ 2 1 ​ ⋅ 3 sec 2 θ d θ = 2 3 ​ ∫ 0 4 π ​ ​ sec 3 θ d θ = 2 3 ​ ∫ 0 4 π ​ ​ sec θ d tan θ = 2 3 ​ sec θ tan θ ​ 0 4 π ​ ​ − 2 3 ​ ∫ 0 4 π ​ ​ tan θ ⋅ sec θ tan θ d θ = 2 3 ​ 2 ​ − 2 3 ​ ∫ 0 4 π ​ ​ ( sec 3 θ − sec θ ) d θ = 4 3 ​ 2 ​ + 4 3 ​ ∫ 0 4 π ​ ​ sec θ d θ = 4 3 ​ 2 ​ + 4 3 ​ ln ( 2 ​ + 1 ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设函数 \\(f(x)=\\int_1^xe^{t^2}\\,dt.\\) （1）证明：存在 \\(\\xi\\in(1,2)\\)，使 \\(f(\\xi)=(2-\\xi)e^{\\xi^2};\\) （2）证明：存在 \\(\\eta\\in(1,2)\\)，使 \\(f(2)=\\ln2\\cdot\\eta e^{\\eta^2}.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 （I） 法 1 ：令 F ( x ) = f ( x ) + ( x − 2 ) e x 2 , 则 F ( 1 ) = f ( 1 ) + ( 1 − 2 ) e 1 2 = 0 − e = − e < 0 , F ( 2 ) = f ( 2 ) + ( 2 − 2 ) e 2 2 = ∫ 1 2 ​ e t 2 d t > 0. ​ 由零点定理知，存在 ξ ∈ ( 1 , 2 ) ，使得 F ( ξ ) = 0 ，即 f ( ξ ) = ( 2 − ξ ) e ξ 2 . 法 2 ：因 f ′ ( x ) = e x 2 ，则 f ( ξ ) = ( 2 − ξ ) e ξ 2 满足 f ( ξ ) = ( 2 − ξ ) f ′ ( ξ ) . 令 F ( x ) = ( x − 2 ) f ( x ) = ( x − 2 ) ∫ 1 x ​ e t 2 d t , 则 F ( 1 ) = 0 , F ( 2 ) = 0. 由罗尔定理知，存在 ξ ∈ ( 1 , 2 ) ，使得 F ′ ( ξ ) = 0 。 又 F ′ ( x ) = ∫ 1 x ​ e t 2 d t + ( x − 2 ) e x 2 , 即 f ( ξ ) = ( 2 − ξ ) e ξ 2 . （II） 令 g ( x ) = ln x ，则 g ′ ( x ) = x 1 ​  = 0 。 由柯西中值定理，存在 η ∈ ( 1 , 2 ) ，使得 g ( 2 ) − g ( 1 ) f ( 2 ) − f ( 1 ) ​ = g ′ ( η ) f ′ ( η ) ​ . 而 f ( 1 ) = 0 ，故 ln 2 f ( 2 ) ​ = η 1 ​ e η 2 ​ , 即 f ( 2 ) = ln 2 ⋅ η e η 2 .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设 \\(f(x)\\) 可导，且 \\(f'(x)>0\\)，曲线 \\(y=f(x)\\ (x\\ge0)\\) 经过坐标原点，其上任意一点 \\(M\\) 处的切线与 \\(x\\) 轴交于 \\(T\\)，又 \\(MP\\) 垂直 \\(x\\) 轴于点 \\(P\\)。已知曲线 \\(y=f(x)\\)、直线 \\(MP\\) 以及 \\(x\\) 轴所围图形面积与 \\(\\triangle MTP\\) 面积之比恒为 \\(3:2\\)，求满足上述条件的曲线方程。",
    referenceAnswer: "【答案】 y = C x 3 其中 C > 0 【解析】 设切点 M ( x , y ) ，则切线方程为 Y − y = y ′ ( X − x ) 。令 Y = 0 ，得 T ( x − y ′ y ​ , 0 ) 。 所围图形面积为 S 1 ​ = ∫ 0 x ​ y ( t ) d t , 三角形 MTP 的面积为 S 2 ​ = 2 1 ​ y [ x − ( x − y ′ y ​ ) ] = 2 y ′ y 2 ​ . 由 S 2 ​ S 1 ​ ​ = 2 3 ​ ，得 ∫ 0 x ​ y ( t ) d t = 4 3 ​ y ′ y 2 ​ (1) . 对 (1) 两边求导，得 y = 4 3 ​ ( y ′ ) 2 2 y ( y ′ ) 2 − y 2 y ′′ ​ , 化简得 3 y y ′′ = 2 ( y ′ ) 2 (2) . 令 y ′ = p ，则 y ′′ = p d y d p ​ ，代入 (2) 得 3 y p d y d p ​ = 2 p 2 . 解得 p = C 1 ​ y 3 2 ​ , 即 d x d y ​ = C 1 ​ y 3 2 ​ . 积分得 3 y 3 1 ​ = C 1 ​ x + C 2 ​ . 因曲线过原点， f ( 0 ) = 0 ，故 C 2 ​ = 0 ，即 y = C x 3 ( C > 0 ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设二次型 \\(f(x_1,x_2,x_3)=x_1^2+x_2^2+x_3^2+2ax_1x_2+2ax_1x_3+2ax_2x_3\\) 经可逆线性变换\\(\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\end{pmatrix} =P\\begin{pmatrix}y_1\\\\y_2\\\\y_3\\end{pmatrix}\\)化为二次型 \\(g(y_1,y_2,y_3)=y_1^2+y_2^2+4y_3^2+2y_1y_2.\\) （1）求 \\(a\\)；（2）求可逆矩阵 \\(P\\)。",
    referenceAnswer: "【答案】 (I) a = − 2 1 ​ (II) P = ​ 1 0 0 ​ 2 1 1 ​ 3 ​ 2 ​ 3 ​ 4 ​ 0 ​ ​ 【解析】 令 A = ​ 1 a a ​ a 1 a ​ a a 1 ​ ​ ， B = ​ 1 1 0 ​ 1 1 0 ​ 0 0 4 ​ ​ ，则 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = x T A x ， g ( y 1 ​ , y 2 ​ , y 3 ​ ) = y T B y 。 （1）由题可知， A 与 B 合同，即 P T A P = B 。所以 A 与 B 的正负惯性指数相同。 由正负惯性指数性质得： A 与 B 的正负特征值个数对应相等。 因为 ∣ B − λ E ∣ = 0 ，所以 B 的特征值为 λ 1 ​ = 0 ， λ 2 ​ = 2 ， λ 3 ​ = 4 。 所以 ∣ A − λ E ∣ = ​ 1 − λ a a ​ a 1 − λ a ​ a a 1 − λ ​ ​ = ( 1 + 2 a − λ ) ( 1 − a − λ ) 2 = 0 ， 所以 λ 1 ​ = 1 + 2 a = 0 ， λ 2 , 3 ​ = 1 − a > 0 ，故 a = − 2 1 ​ 。 （2）配方法： f ( x 1 ​ , x 2 ​ , x 3 ​ ) = x 1 2 ​ + x 2 2 ​ + x 3 2 ​ − x 1 ​ x 2 ​ − x 1 ​ x 3 ​ − x 2 ​ x 3 ​ = ( x 1 ​ − 2 1 ​ x 2 ​ − 2 1 ​ x 3 ​ ) 2 + 4 3 ​ ( x 2 ​ − x 3 ​ ) 2 。 令 ​ z 1 ​ z 2 ​ z 3 ​ ​ ​ = P 1 ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ ，其中 P 1 ​ = ​ 1 0 0 ​ − 2 1 ​ 2 3 ​ ​ 0 ​ − 2 1 ​ − 2 3 ​ ​ 1 ​ ​ 。 g ( y 1 ​ , y 2 ​ , y 3 ​ ) = y 1 2 ​ + y 2 2 ​ + 4 y 3 2 ​ + 2 y 1 ​ y 2 ​ = ( y 1 ​ + y 2 ​ ) 2 + 4 y 3 2 ​ 。 令 ​ z 1 ​ z 2 ​ z 3 ​ ​ ​ = P 2 ​ ​ y 1 ​ y 2 ​ y 3 ​ ​ ​ ，其中 P 2 ​ = ​ 1 0 0 ​ 1 0 1 ​ 0 2 0 ​ ​ 。 故 P = P 1 − 1 ​ P 2 ​ = ​ 1 0 0 ​ 2 1 1 ​ 3 ​ 2 ​ 3 ​ 4 ​ 0 ​ ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设 \\(A\\) 为 2 阶矩阵，\\(P=(\\alpha,A\\alpha)\\)，其中 \\(\\alpha\\) 是非零向量且不是 \\(A\\) 的特征向量。（1）证明 \\(P\\) 为可逆矩阵；（2）若 \\(A^2\\alpha+A\\alpha-6\\alpha=0,\\) 求 \\(P^{-1}AP\\)，并判断 \\(A\\) 是否相似于对角矩阵。",
    referenceAnswer: "【答案】 （I）见解析 （II） P − 1 A P = [ 0 1 ​ 6 − 1 ​ ] ，且 A 相似于对角矩阵 【解析】 （I） 解法一 假设 P 不是可逆矩阵，则 α 与 A α 线性相关。 根据线性相关的定义，存在不全为零的实数 k 1 ​ 、 k 2 ​ ，使得 k 1 ​ α + k 2 ​ A α = 0 若 k 2 ​ = 0 ，则 k 1 ​ α = 0 。 由于 α 是非零向量，必有 k 1 ​ = 0 ，与 k 1 ​ 、 k 2 ​ 不全为零矛盾，因此 k 2 ​  = 0 。 于是有 A α = − k 2 ​ k 1 ​ ​ α 这与 α 不是 A 的特征向量矛盾。 所以假设不成立，故 P 是可逆矩阵。 解法二 设 A α = β ，则 β  = k α ，即 α 、 β 线性无关。 因此 P = ( α , β ) = ( α , A α ) 为可逆矩阵。 （II） 由 A 2 α + A α − 6 α = 0 ，可得 A P = A ( α , A α ) = ( A α , A 2 α ) = ( A α , 6 α − A α ) = ( α , A α ) [ 0 1 ​ 6 − 1 ​ ] 又因为 P 可逆，所以 P − 1 A P = [ 0 1 ​ 6 − 1 ​ ] 记 B = [ 0 1 ​ 6 − 1 ​ ] ，计算特征多项式： ∣ λ E − B ∣ = ​ λ − 1 ​ − 6 λ + 1 ​ ​ = λ 2 + λ − 6 = 0 解得 B 的特征值为 λ 1 ​ = 2 、 λ 2 ​ = − 3 。 由于 A 与 B 相似，故 A 的特征值也为 λ 1 ​ = 2 、 λ 2 ​ = − 3 ，从而 A 可相似对角化。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2020_math2 = {
  id: P, year: Y,
  title: '2020 年全国硕士研究生招生考试 数学（二）',
  short: '2020 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2020_math2.length,
  qids: questions2020_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
