const P = 'paper-2019-math2'
const Y = 2019
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2019-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2019 考研数学（二）真题',
  ...extra
})

export const questions2019_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当 \\(x\\to0\\) 时，若 \\(x-\\tan x\\) 与 \\(x^k\\) 是同阶无穷小，则 \\(k=\\)（ ）",
    options: [{ key: "A", text: "\\(1\\)" }, { key: "B", text: "\\(2\\)" }, { key: "C", text: "\\(3\\)" }, { key: "D", text: "\\(4\\)" }],
    answer: ["C"],
    explain: "正确答案： C 利用泰勒展开， tan x = x + 3 x 3 ​ + o ( x 3 ) ， 则 x − tan x = − 3 x 3 ​ + o ( x 3 ) ， 故与 x 3 同阶， k = 3 。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(y=x\\sin x+2\\cos x\\ \\left(-\\frac{\\pi}{2}<x<\\frac{3\\pi}{2}\\right)\\) 的拐点坐标为（ ）",
    options: [{ key: "A", text: "\\(\\left(\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)" }, { key: "B", text: "\\((0,2)\\)" }, { key: "C", text: "\\((\\pi,-2)\\)" }, { key: "D", text: "\\(\\left(\\frac{3\\pi}{2},-\\frac{3\\pi}{2}\\right)\\)" }],
    answer: ["C"],
    explain: "正确答案： C 由 \\(y=x\\sin x+2\\cos x\\) 得 \\(y' = x\\cos x-\\sin x\\)，\\(y''=-x\\sin x\\)。在区间 \\((-\\frac{\\pi}{2},\\frac{3\\pi}{2})\\) 内，\\(x=0\\) 处二阶导数不变号，\\(x=\\pi\\) 处二阶导数变号，故拐点为 \\((\\pi,-2)\\)，选择 C。"
  }),
  base(3, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列反常积分发散的是（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_0^{+\\infty}xe^{-x}\\,dx\\)" }, { key: "B", text: "\\(\\displaystyle\\int_0^{+\\infty}xe^{-x^2}\\,dx\\)" }, { key: "C", text: "\\(\\displaystyle\\int_0^{+\\infty}\\frac{\\arctan x}{1+x^2}\\,dx\\)" }, { key: "D", text: "\\(\\displaystyle\\int_0^{+\\infty}\\frac{x}{1+x^2}\\,dx\\)" }],
    answer: ["D"],
    explain: "正确答案： D 逐项判断敛散性：A 中 \\(\\int_0^{+\\infty}xe^{-x}\\,dx\\) 收敛；B 中令 \\(u=x^2\\)，可得 \\(\\int_0^{+\\infty}xe^{-x^2}\\,dx=\\frac12\\)；C 中令 \\(u=\\arctan x\\)，则积分化为 \\(\\int_0^{\\pi/2}u\\,du=\\frac{\\pi^2}{8}\\)，也收敛。D 中 \\[\\int_0^{+\\infty}\\frac{x}{1+x^2}\\,dx=\\frac12\\ln(1+x^2)\\Big|_0^{+\\infty}=+\\infty,\\] 故发散的是 D。"
  }),
  base(4, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知微分方程 \\(y''+ay'+by=ce^x\\) 的通解为 \\(y=(C_1+C_2x)e^{-x}+e^x,\\) 则 \\(a,b,c\\) 依次为（ ）",
    options: [{ key: "A", text: "\\(1,0,1\\)" }, { key: "B", text: "\\(1,0,2\\)" }, { key: "C", text: "\\(2,1,3\\)" }, { key: "D", text: "\\(2,1,4\\)" }],
    answer: ["D"],
    explain: "正确答案： D 通解中齐次方程的解为 ( C 1 ​ + C 2 ​ x ) e − x ，故齐次方程特征方程为 ( r + 1 ) 2 = 0 ，即 r 2 + 2 r + 1 = 0 ，所以 a = 2 ， b = 1 。 非齐次特解为 e x ，代入原方程得 1 + 2 × 1 + 1 × 1 = c ，解得 c = 4 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知平面区域 \\(D=\\left\\{(x,y)\\mid |x|+|y|\\le\\frac\\pi2\\right\\},\\) \\(I_1=\\iint_D\\sqrt{x^2+y^2}\\,dx\\,dy,\\) \\(I_2=\\iint_D\\sin\\sqrt{x^2+y^2}\\,dx\\,dy,\\) \\(I_3=\\iint_D\\left(1-\\cos\\sqrt{x^2+y^2}\\right)\\,dx\\,dy,\\) 则（ ）",
    options: [{ key: "A", text: "\\(I_3<I_2<I_1\\)" }, { key: "B", text: "\\(I_2<I_1<I_3\\)" }, { key: "C", text: "\\(I_1<I_2<I_3\\)" }, { key: "D", text: "\\(I_2<I_3<I_1\\)" }],
    answer: ["A"],
    explain: "正确答案： A 记 \\(r=\\sqrt{x^2+y^2}\\)。由 \\(|x|+|y|\\le \\frac{\\pi}{2}\\) 可知 \\(0\\le r\\le \\frac{\\pi}{2}\\)。当 \\(0<r<\\frac{\\pi}{2}\\) 时， \\[1-\\cos r<\\sin r<r.\\] 其中 \\(\\sin r<r\\) 为基本不等式，而 \\(1-\\cos r<\\sin r\\) 等价于 \\(\\sin r+\\cos r>1\\)。边界处的等号不影响二重积分的严格大小关系，因此 \\[I_3<I_2<I_1.\\] 故选择 A。"
  }),
  base(6, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知 \\(f(x),g(x)\\) 二阶可导且二阶导函数在 \\(x=a\\) 处连续，则 \\(\\lim_{x\\to a}\\frac{f(x)-g(x)}{(x-a)^2}=0\\) 是曲线 \\(y=f(x)\\) 和 \\(y=g(x)\\) 在 \\(x=a\\) 对应的点处相切且曲率相等的（ ）",
    options: [{ key: "A", text: "充分非必要条件" }, { key: "B", text: "充分必要条件" }, { key: "C", text: "必要非充分条件" }, { key: "D", text: "既非充分又非必要条件" }],
    answer: ["A"],
    explain: "正确答案： A 令 \\(h(x)=f(x)-g(x)\\)。若 \\[\\lim_{x\\to a}\\frac{h(x)}{(x-a)^2}=0,\\] 则必有 \\(h(a)=0\\)、\\(h'(a)=0\\)。又因二阶导数在 \\(a\\) 处连续，由泰勒公式 \\[h(x)=\\frac12h''(a)(x-a)^2+o((x-a)^2),\\] 故极限为 0 还推出 \\(h''(a)=0\\)。于是 \\(f(a)=g(a)\\)、\\(f'(a)=g'(a)\\)、\\(f''(a)=g''(a)\\)，两曲线在对应点相切且曲率相等，所以该条件是充分的。 但它不是必要条件。例如取 \\(f(x)=(x-a)^2\\)、\\(g(x)=-(x-a)^2\\)，两曲线在 \\(x=a\\) 处相切，且曲率都为 2，而 \\[\\frac{f(x)-g(x)}{(x-a)^2}=2\\not\\to0.\\] 故为充分非必要条件，选择 A。"
  }),
  base(7, 'k-math-018', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 是 4 阶矩阵，\\(A^*\\) 是 \\(A\\) 的伴随矩阵，若线性方程组 \\(Ax=0\\) 的基础解系中只有 2 个向量，则 \\(r(A^*)=（ ）\\)",
    options: [{ key: "A", text: "\\(0\\)" }, { key: "B", text: "\\(1\\)" }, { key: "C", text: "\\(2\\)" }, { key: "D", text: "\\(3\\)" }],
    answer: ["A"],
    explain: "正确答案： A 由 A x = 0 的基础解系含 2 个向量，知 r ( A ) = 4 − 2 = 2 。 对于 n 阶矩阵，当 r ( A ) < n − 1 时， r ( A ∗ ) = 0 。此处 n = 4 ， r ( A ) = 2 < 3 ，故 r ( A ∗ ) = 0 。"
  }),
  base(8, 'k-math-019', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 是 3 阶实对称矩阵，\\(E\\) 是 3 阶单位矩阵。若 \\(A^2+A=2E,\\;|A|=4,\\) 则二次型 \\(x^TAx\\) 的规范形为（ ）",
    options: [{ key: "A", text: "\\(y_1^2+y_2^2+y_3^2\\)" }, { key: "B", text: "\\(y_1^2+y_2^2-y_3^2\\)" }, { key: "C", text: "\\(y_1^2-y_2^2-y_3^2\\)" }, { key: "D", text: "\\(-y_1^2-y_2^2-y_3^2\\)" }],
    answer: ["C"],
    explain: "正确答案： C 因为 \\(A\\) 为实对称矩阵，所以可正交对角化。由 \\[A^2+A=2E\\] 知任一特征值 \\(\\lambda\\) 满足 \\(\\lambda^2+\\lambda-2=0\\)，故 \\(\\lambda=1\\) 或 \\(\\lambda=-2\\)。又 \\(|A|=4\\)，三个特征值的乘积为 4，因此只能是 \\[1,-2,-2.\\] 所以二次型的正惯性指数为 1，负惯性指数为 2。根据惯性定理，其规范形为 \\[y_1^2-y_2^2-y_3^2.\\] 故选择 C。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\lim_{x\\to0}\\left(x+2^x\\right)^{\\frac2x}=\\underline{\\qquad}.\\)",
    answerText: "】 4 e 2 【",
    referenceAnswer: "【答案】 4 e 2 【解析】 lim x → 0 ​ ( x + 2 x ) x 2 ​ = lim x → 0 ​ [ ( 1 + x + 2 x − 1 ) x + 2 x − 1 1 ​ ] x 2 ( x + 2 x − 1 ) ​ = e 2 l i m x → 0 ​ ( 1 + x 2 x − 1 ​ ) = e 2 ( 1 + l n 2 ) = e l n e 2 = 4 e 2 .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\\(\\begin{cases} x=t-\\sin t,\\\\ y=1-\\cos t \\end{cases}\\)在 \\(t=\\frac{3\\pi}{2}\\) 对应点处的切线在 \\(y\\) 轴上的截距为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 2 3 π ​ + 2 【",
    referenceAnswer: "【答案】 2 3 π ​ + 2 【解析】 t = 2 3 π ​ 对应曲线上的点为 ( 2 3 π ​ + 1 , 1 ) , d x d y ​ = 1 − cos t sin t ​ 斜率为 d x d y ​ ​ t = 2 3 π ​ ​ = − 1 切线方程为 y − 1 = − ( x − 2 3 π ​ − 1 ) 令 x = 0 得切线在 y 轴上的截距为 y = 2 3 π ​ + 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(u)\\) 可导，\\(z=yf\\left(\\frac{y^2}{x}\\right),\\) 则 \\(2x\\frac{\\partial z}{\\partial x}+y\\frac{\\partial z}{\\partial y}=\\underline{\\qquad}.\\)",
    answerText: "】 y f ( x y 2 ​ ) 【",
    referenceAnswer: "【答案】 y f ( x y 2 ​ ) 【解析】 ∂ x ∂ z ​ = − x 2 y 3 ​ f ′ ( x y 2 ​ ) , ∂ y ∂ z ​ = f ( x y 2 ​ ) + x 2 y 2 ​ f ′ ( x y 2 ​ ) , 则 2 x ∂ x ∂ z ​ + y ∂ y ∂ z ​ = − x 2 y 3 ​ f ′ ( x y 2 ​ ) + y f ( x y 2 ​ ) + x 2 y 3 ​ f ′ ( x y 2 ​ ) = y f ( x y 2 ​ )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=\\ln\\cos x\\;\\left(0\\le x\\le\\frac\\pi6\\right)\\) 的弧长为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 \\(\\displaystyle \\frac12\\ln3\\) 【",
    referenceAnswer: "【答案】 \\(\\displaystyle \\frac12\\ln3\\) 【解析】 由 \\(y=\\ln\\cos x\\) 得 \\(y'=-\\tan x\\)，因此 \\[\\sqrt{1+(y')^2}=\\sqrt{1+\\tan^2x}=\\sec x.\\] 在 \\(0\\le x\\le \\frac{\\pi}{6}\\) 上 \\(\\cos x>0\\)，故弧长 \\[s=\\int_0^{\\pi/6}\\sec x\\,dx=\\ln(\\sec x+\\tan x)\\Big|_0^{\\pi/6}=\\ln\\sqrt3=\\frac12\\ln3.\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数 \\(f(x)=x\\int_1^x\\frac{\\sin t^2}{t}\\,dt,\\) 则 \\(\\int_0^1f(x)\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 4 cos 1 − 1 ​ . 【",
    referenceAnswer: "【答案】 4 cos 1 − 1 ​ . 【解析】 ∫ 0 1 ​ f ( x ) d x ​ = ∫ 0 1 ​ ( ∫ 1 x ​ t sin t 2 ​ d t ) d ( 2 x 2 ​ ) = ( 2 x 2 ​ ∫ 1 x ​ t sin t 2 ​ d t ) ​ 0 1 ​ − ∫ 0 1 ​ 2 x 2 ​ ⋅ x sin x 2 ​ d x = − 2 1 ​ ∫ 0 1 ​ x sin x 2 d x = − 4 1 ​ ∫ 0 1 ​ sin x 2 d ( x 2 ) = 4 1 ​ cos x 2 ​ 0 1 ​ = 4 cos 1 − 1 ​ . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知矩阵\\(A=\\begin{pmatrix} 1&-1&0&0\\\\ -2&1&-1&1\\\\ 3&-2&2&-1\\\\ 0&0&3&4 \\end{pmatrix},\\) \\(A_{ij}\\) 表示 \\(|A|\\) 中 \\((i,j)\\) 元的代数余子式，则 \\(A_{11}-A_{12}=\\underline{\\qquad}.\\)",
    answerText: "】 -4 【",
    referenceAnswer: "【答案】 -4 【解析】 A 11 ​ − A 12 ​ = 1 × A 11 ​ − 1 × A 12 ​ + 0 A 13 ​ + 0 A 14 ​ = ∣ A ∣ = ​ 1 − 2 3 0 ​ − 1 1 − 2 0 ​ 0 − 1 2 3 ​ 0 1 − 1 4 ​ ​ = ​ 1 − 2 3 0 ​ 0 − 1 1 0 ​ 0 − 1 2 3 ​ 0 1 − 1 4 ​ ​ = ​ − 1 1 0 ​ − 1 2 3 ​ 1 − 1 4 ​ ​ = ​ − 1 0 0 ​ − 1 1 3 ​ 1 0 4 ​ ​ = − 4",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知函数\\(f(x)=\\begin{cases} x^{2x},&x>0,\\\\ xe^x+1,&x\\le0, \\end{cases}\\)求 \\(f'(x)\\)，并求 \\(f(x)\\) 的极值。",
    referenceAnswer: "【答案】 导数： f ′ ( x ) = { e x ( x + 1 ) , 2 e 2 x l n x ( ln x + 1 ) , ​ x < 0 , x > 0. ​ 极值： 极小值点： x = − 1 ，极小值 f ( − 1 ) = 1 − e − 1 ； x = e 1 ​ ，极小值 f ( e 1 ​ ) = e − e 2 ​ 。 极大值点： x = 0 ，极大值 f ( 0 ) = 1 。 【解析】 f ′ ( x ) = { e x ( x + 1 ) , 2 e 2 x l n x ( ln x + 1 ) , ​ x < 0 , x > 0. ​ x = − 1 和 x = e 1 ​ 是 f ( x ) 的极小值点，极小值分别为 f ( − 1 ) = 1 − e − 1 和 f ( e 1 ​ ) = e − e 2 ​ ； x = 0 是 f ( x ) 的极大值点，极大值为 f ( 0 ) = 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-008', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求不定积分 \\(\\int\\frac{3x+6}{(x-1)^2(x^2+x+1)}\\,dx.\\)",
    referenceAnswer: "【答案】 ∫ ( x − 1 ) 2 ( x 2 + x + 1 ) 3 x + 6 ​ d x = − 2 ln ∣ x − 1∣ − x − 1 3 ​ + ln ( x 2 + x + 1 ) + C 【解析】 令 ( x − 1 ) 2 ( x 2 + x + 1 ) 3 x + 6 ​ = x − 1 A ​ + ( x − 1 ) 2 B ​ + x 2 + x + 1 C x + D ​ 由 A ( x − 1 ) ( x 2 + x + 1 ) + B ( x 2 + x + 1 ) + ( C x + D ) ( x − 1 ) 2 = 3 x + 6 得 ⎩ ⎨ ⎧ ​ A + C = 0 , B − 2 C + D = 0 , B + C − 2 D = 3 , − A + B + D = 6 , ​ 解得 A = − 2 , B = 3 , C = 2 , D = 1 ,故 ∫ ( x − 1 ) 2 ( x 2 + x + 1 ) 3 x + 6 ​ d x = ∫ [ x − 1 − 2 ​ + ( x − 1 ) 2 3 ​ + x 2 + x + 1 2 x + 1 ​ ] d x = − 2 ln ∣ x − 1∣ − x − 1 3 ​ + ln ( x 2 + x + 1 ) + C .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数 \\(y(x)\\) 是微分方程 \\(y'-xy=\\frac{1}{2\\sqrt{x}}e^{x^2/2}\\) 满足条件 \\(y(1)=\\sqrt e\\) 的特解。（I）求 \\(y(x)\\)；（II）设平面区域\\(D=\\{(x,y)\\mid1\\le x\\le2,\\ 0\\le y\\le y(x)\\},\\) 求 \\(D\\) 绕 \\(x\\) 轴旋转所得旋转体的体积。",
    referenceAnswer: "【答案】 (I) \\(\\displaystyle y(x)=\\sqrt{x}\\,e^{x^2/2}\\) (II) \\(\\displaystyle V=\\frac{\\pi}{2}(e^4-e)\\) 【解析】 (I) 方程为 \\[y'-xy=\\frac{1}{2\\sqrt{x}}e^{x^2/2}.\\] 取积分因子 \\(\\mu(x)=e^{-x^2/2}\\)，则 \\[\\bigl(ye^{-x^2/2}\\bigr)'=\\frac{1}{2\\sqrt{x}}.\\] 积分得 \\[ye^{-x^2/2}=\\sqrt{x}+C,\\qquad y=(\\sqrt{x}+C)e^{x^2/2}.\\] 由 \\(y(1)=\\sqrt e=e^{1/2}\\) 得 \\(C=0\\)，所以 \\[y(x)=\\sqrt{x}\\,e^{x^2/2}.\\] (II) 绕 \\(x\\) 轴旋转，体积为 \\[V=\\pi\\int_1^2y^2\\,dx=\\pi\\int_1^2xe^{x^2}\\,dx=\\frac{\\pi}{2}e^{x^2}\\Big|_1^2=\\frac{\\pi}{2}(e^4-e).\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知平面区域 \\(D=\\left\\{(x,y)\\mid |x|\\le y,\\ (x^2+y^2)^3\\le y^4\\right\\},\\) 计算二重积分 \\(\\iint_D\\frac{x+y}{\\sqrt{x^2+y^2}}\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 120 43 ​ 2 ​ 【解析】 由对称性得 ∬ D ​ x 2 + y 2 ​ x + y ​ d x d y = ∬ D ​ x 2 + y 2 ​ y ​ d x d y , 令 { x = r cos θ y = r sin θ ​ 其中 4 π ​ ≤ θ ≤ 4 3 π ​ , 0 ≤ r ≤ sin 2 θ ，则 ∬ D ​ x 2 + y 2 ​ x + y ​ d x d y ​ = ∫ 4 π ​ 4 3 π ​ ​ d θ ∫ 0 s i n 2 θ ​ r sin θ d r = 2 1 ​ ∫ 4 π ​ 4 3 π ​ ​ sin 5 θ d θ = − 2 1 ​ ∫ 4 π ​ 4 3 π ​ ​ ( 1 − cos 2 θ ) 2 d ( cos θ ) = c o s θ = t − 2 1 ​ ∫ 2 2 ​ ​ − 2 2 ​ ​ ​ ( 1 − t 2 ) 2 d t = ∫ 0 2 2 ​ ​ ​ ( 1 − t 2 ) 2 d t = ∫ 0 2 2 ​ ​ ​ ( 1 − 2 t 2 + t 4 ) d t = ( 2 2 ​ ​ − 3 2 ​ × 4 2 ​ ​ + 5 1 ​ × 8 2 ​ ​ ) = 120 43 ​ 2 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设 \\(n\\) 为正整数，记 \\(S_n\\) 为曲线 \\(y=e^{-x}\\sin x\\;(0\\le x\\le n\\pi)\\) 与 \\(x\\) 轴所围图形的面积，求 \\(S_n\\)，并求 \\(\\lim_{n\\to\\infty}S_n.\\)",
    referenceAnswer: "【答案】 S n ​ = 2 1 ​ [ 1 + 1 − e − π 2 e − π ( 1 − e − nπ ) ​ − e − nπ ] lim n → ∞ ​ S n ​ = 2 1 ​ + e π − 1 1 ​ 【解析】 S n ​ ​ = k = 0 ∑ n − 1 ​ ( − 1 ) k ∫ kπ ( k + 1 ) π ​ e − x sin x d x = k = 0 ∑ n − 1 ​ ( − 1 ) k [ − 2 1 ​ e − x ( sin x + cos x ) ] ​ kπ ( k + 1 ) π ​ = 2 1 ​ k = 0 ∑ n − 1 ​ ( − 1 ) k + 1 [ e − ( k + 1 ) π ( − 1 ) k + 1 − e − kπ ( − 1 ) k ] = 2 1 ​ k = 0 ∑ n − 1 ​ [ e − ( k + 1 ) π + e − kπ ] = 2 1 ​ [ 1 + 2 k = 1 ∑ n − 1 ​ e − kπ − e − nπ ] = 2 1 ​ [ 1 + 1 − e − π 2 e − π ( 1 − e − nπ ) ​ − e − nπ ] . ​ 故 n → ∞ lim ​ S n ​ = n → ∞ lim ​ 2 1 ​ [ 1 + 1 − e − π 2 e − π ( 1 − e − nπ ) ​ − e − nπ ] = 2 1 ​ + e π − 1 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知函数 \\(u(x,y)\\) 满足\\(2\\frac{\\partial^2u}{\\partial x^2}-2\\frac{\\partial^2u}{\\partial y^2} +3\\frac{\\partial u}{\\partial x}+3\\frac{\\partial u}{\\partial y}=0,\\)求 \\(a,b\\) 的值，使得在变换 \\(u(x,y)=v(x,y)e^{ax+by}\\) 下，上述等式可化为 \\(v(x,y)\\) 不含一阶偏导数的等式。",
    referenceAnswer: "【答案】 a = − 4 3 ​ , b = 4 3 ​ 【解析】 ∂ x ∂ u ​ = ∂ x ∂ v ​ e a x + b y + a v e a x + b y , ∂ y ∂ u ​ = ∂ y ∂ v ​ e a x + b y + b v e a x + b y , ∂ x 2 ∂ 2 u ​ = ∂ x 2 ∂ 2 v ​ e a x + b y + 2 a ∂ x ∂ v ​ e a x + b y + a 2 v e a x + b y , ∂ y 2 ∂ 2 u ​ = ∂ y 2 ∂ 2 v ​ e a x + b y + 2 b ∂ y ∂ v ​ e a x + b y + b 2 v e a x + b y , 代入已知等式得 2 ∂ x 2 ∂ 2 v ​ e a x + b y + 4 a ∂ x ∂ v ​ e a x + b y + 2 a 2 v e a x + b y − 2 ∂ y 2 ∂ 2 v ​ e a x + b y − 4 b ∂ y ∂ v ​ e a x + b y − 2 b 2 v e a x + b y + 3 ∂ x ∂ v ​ e a x + b y + 3 a v e a x + b y + 3 ∂ y ∂ v ​ e a x + b y + 3 b v e a x + b y = 0 , 整理得 2 ∂ x 2 ∂ 2 v ​ − 2 ∂ y 2 ∂ 2 v ​ + ( 4 a + 3 ) ∂ x ∂ v ​ + ( 3 − 4 b ) ∂ y ∂ v ​ + ( 2 a 2 − 2 b 2 + 3 a + 3 b ) v = 0 , 由题意得 { 4 a + 3 = 0 , 3 − 4 b = 0 , ​ 解得 a = − 4 3 ​ , b = 4 3 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知函数 \\(f(x)\\) 在 \\([0,1]\\) 上具有二阶导数，且 \\(f(0)=0,\\;f(1)=1,\\;\\int_0^1f(x)\\,dx=1.\\) 证明：（I）存在 \\(\\xi\\in(0,1)\\)，使得 \\(f'(\\xi)=0\\)；（II）存在 \\(\\eta\\in(0,1)\\)，使得 \\(f''(\\eta)<-2\\)。",
    referenceAnswer: "【答案】 见解析 【解析】 【证明】(Ⅰ)令 F ( x ) = ∫ 0 x ​ f ( t ) d t , 则 F ′ ( x ) = f ( x ) , 由拉格朗日中值定理得 1 = ∫ 0 1 ​ f ( x ) d x = F ( 1 ) − F ( 0 ) = F ′ ( c ) ( 1 − 0 ) = f ( c ) ( 0 < c < 1 ) , 因为 f ( c ) = f ( 1 ) = 1 , 所以由罗尔定理, 存在 ξ ∈ ( c , 1 ) ⊂ ( 0 , 1 ) , 使得 f ′ ( ξ ) = 0 . (Ⅱ)令 φ ( x ) = f ( x ) + x 2 , φ ( 0 ) = 0 , φ ( c ) = f ( c ) + c 2 = 1 + c 2 , φ ( 1 ) = 2 , 由拉格朗日中值定理, 存在 η 1 ​ ∈ ( 0 , c ) , η 2 ​ ∈ ( c , 1 ) , 使得 φ ′ ( η 1 ​ ) = c φ ( c ) − φ ( 0 ) ​ = c 1 + c 2 ​ = c + c 1 ​ , φ ′ ( η 2 ​ ) = 1 − c φ ( 1 ) − φ ( c ) ​ = 1 − c 2 − 1 − c 2 ​ = 1 + c , 再由拉格朗日中值定理, 存在 η ∈ ( η 1 ​ , η 2 ​ ) ⊂ ( 0 , 1 ) , 使得 φ ′′ ( η ) = η 2 ​ − η 1 ​ φ ′ ( η 2 ​ ) − φ ′ ( η 1 ​ ) ​ = η 2 ​ − η 1 ​ 1 + c − c − c 1 ​ ​ = η 2 ​ − η 1 ​ 1 − c 1 ​ ​ < 0 , 而 φ ′′ ( x ) = f ′′ ( x ) + 2 , 即 f ′′ ( η ) + 2 < 0 , 故 f ′′ ( η ) < − 2 .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知向量组 I：\\(\\alpha_1=\\begin{pmatrix}1\\\\1\\\\4\\end{pmatrix},\\quad \\alpha_2=\\begin{pmatrix}1\\\\0\\\\4\\end{pmatrix},\\quad \\alpha_3=\\begin{pmatrix}1\\\\2\\\\a^2+3\\end{pmatrix},\\)与向量组 II：\\(\\beta_1=\\begin{pmatrix}1\\\\1\\\\a+3\\end{pmatrix},\\quad \\beta_2=\\begin{pmatrix}0\\\\2\\\\1-a\\end{pmatrix},\\quad \\beta_3=\\begin{pmatrix}1\\\\3\\\\a^2+3\\end{pmatrix}.\\)若向量组 I 与 II 等价，求 \\(a\\) 的值，并将 \\(\\beta_3\\) 用 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性表示。",
    referenceAnswer: "【答案】 \\(\\displaystyle a\\ne-1\\)，且可取\n\\[\\beta_3=\\alpha_1-\\alpha_2+\\alpha_3.\\] 【解析】 记 \\[A_0=(\\alpha_1,\\alpha_2,\\alpha_3),\\qquad B_0=(\\beta_1,\\beta_2,\\beta_3).\\] 直接计算得 \\[|A_0|=1-a^2,\\qquad |B_0|=2(a^2-1).\\] 当 \\(a\\ne\\pm1\\) 时，两个向量组的秩都为 3，均张成 \\(\\mathbb R^3\\)，因此等价。 当 \\(a=1\\) 时，\\(\\alpha_1,\\alpha_2,\\alpha_3\\) 均满足第三个分量等于第一个分量的 4 倍，且秩为 2。此时 \\[\\beta_1=\\alpha_1,\\qquad \\beta_2=2(\\alpha_3-\\alpha_1),\\qquad \\beta_3=\\alpha_1-\\alpha_2+\\alpha_3,\\] 故两个向量组仍然等价。 当 \\(a=-1\\) 时，向量组 I 仍张成平面 \\(z=4x\\)，但 \\(\\beta_1=(1,1,2)^T\\) 不在该平面内，因此两个向量组不等价。 综上， \\[a\\ne-1.\\] 另外，对任意 \\(a\\) 都有恒等式 \\[\\alpha_1-\\alpha_2+\\alpha_3=(1,3,a^2+3)^T=\\beta_3,\\] 所以所求线性表示可取 \\(\\beta_3=\\alpha_1-\\alpha_2+\\alpha_3\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知矩阵\\(A=\\begin{pmatrix} -2&-2&1\\\\ 2&x&-2\\\\ 0&0&-2 \\end{pmatrix}\\)与\\(B=\\begin{pmatrix} 2&1&0\\\\ 0&-1&0\\\\ 0&0&y \\end{pmatrix}\\)相似。（I）求 \\(x,y\\)；（II）求可逆矩阵 \\(P\\)，使得 \\(P^{-1}AP=B\\)。",
    referenceAnswer: "【答案】 (Ⅰ) x = 3 , y = − 2 (Ⅱ) P = ​ − 1 2 0 ​ − 1 1 0 ​ − 1 2 4 ​ ​ 【解析】 (Ⅰ) 因为 A ∼ B ，所以 tr ( A ) = tr ( B ) ，即 x − 4 = y + 1 ，或 y = x − 5 ，再由 ∣ A ∣ = ∣ B ∣ 得 − 2 ( − 2 x + 4 ) = − 2 y ，即 y = − 2 x + 4 ，解得 x = 3 , y = − 2 。 A = ​ − 2 2 0 ​ − 2 3 0 ​ 1 − 2 − 2 ​ ​ , B = ​ 2 0 0 ​ 1 − 1 0 ​ 0 0 − 2 ​ ​ 显然矩阵 A , B 的特征值为 λ 1 ​ = − 2 , λ 2 ​ = − 1 , λ 3 ​ = 2 。 由 2 E + A → ​ 0 2 0 ​ − 2 1 0 ​ 1 0 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 4 1 ​ − 2 1 ​ 0 ​ ​ 得 A 的属于特征值 λ 1 ​ = − 2 的线性无关的特征向量为 α 1 ​ = ​ − 1 2 4 ​ ​ 。 由 E + A → ​ 1 0 0 ​ 2 0 0 ​ − 1 1 0 ​ ​ → ​ 1 0 0 ​ 2 0 0 ​ 0 1 0 ​ ​ 得 A 的属于特征值 λ 2 ​ = − 1 的线性无关的特征向量为 α 2 ​ = ​ − 2 1 0 ​ ​ 。 由 2 E − A → ​ 2 0 0 ​ 1 0 0 ​ − 2 1 0 ​ ​ → ​ 1 0 0 ​ 2 1 ​ 0 0 ​ 0 1 0 ​ ​ 得 A 的属于特征值 λ 3 ​ = 2 的线性无关的特征向量为 α 3 ​ = ​ − 1 2 0 ​ ​ 。 令 P 1 ​ = ​ − 1 2 4 ​ − 2 1 0 ​ − 1 2 0 ​ ​ ，则 P 1 − 1 ​ A P 1 ​ = ​ − 2 0 0 ​ 0 − 1 0 ​ 0 0 2 ​ ​ 。 由 2 E + B = ​ 4 0 0 ​ 1 1 0 ​ 0 0 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 0 ​ ​ 得 B 的属于特征值 λ 1 ​ = − 2 的线性无关的特征向量为 β 1 ​ = ​ 0 0 1 ​ ​ 。 由 E + B = ​ 3 0 0 ​ 1 0 0 ​ 0 0 − 1 ​ ​ → ​ 1 0 0 ​ 3 1 ​ 0 0 ​ 0 1 0 ​ ​ 得 B 的属于特征值 λ 2 ​ = − 1 的线性无关的特征向量为 β 2 ​ = ​ − 1 3 0 ​ ​ 。 由 2 E − B = ​ 0 0 0 ​ − 1 3 0 ​ 0 0 4 ​ ​ → ​ 0 0 0 ​ 1 0 0 ​ 0 1 0 ​ ​ 得 B 的属于特征值 λ 3 ​ = 2 的线性无关的特征向量为 β 3 ​ = ​ 1 0 0 ​ ​ 。 令 P 2 ​ = ​ 0 0 1 ​ − 1 3 0 ​ 1 0 0 ​ ​ ，则 P 2 − 1 ​ B P 2 ​ = ​ − 2 0 0 ​ 0 − 1 0 ​ 0 0 2 ​ ​ 。 由 P 1 − 1 ​ A P 1 ​ = P 2 − 1 ​ B P 2 ​ 得 ( P 1 ​ P 2 − 1 ​ ) − 1 A ( P 1 ​ P 2 − 1 ​ ) = B ，故 P = P 1 ​ P 2 − 1 ​ = ​ − 1 2 0 ​ − 1 1 0 ​ − 1 2 4 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2019_math2 = {
  id: P, year: Y,
  title: '2019 年全国硕士研究生招生考试 数学（二）',
  short: '2019 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2019_math2.length,
  qids: questions2019_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
