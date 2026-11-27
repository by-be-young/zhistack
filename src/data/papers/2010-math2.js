const P = 'paper-2010-math2'
const Y = 2010
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2010-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2010 考研数学（二）真题',
  ...extra
})

export const questions2010_math2 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)=\\frac{x^2-x}{x^2-1}\\sqrt{1+\\frac1{x^2}}\\) 的无穷间断点的个数为（ ）。",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["B"],
    explain: "正确答案： B 函数 f ( x ) = x 2 − 1 x 2 − x ​ 1 + x 2 1 ​ ​ 有间断点 x = 0 , 1 , − 1 。 因为 x → 0 lim ​ f ( x ) = x → 0 lim ​ ( x + 1 ) ( x − 1 ) x ( x − 1 ) ​ 1 + x 2 1 ​ ​ = x → 0 lim ​ x 1 + x 2 1 ​ ​ , 其中 x → 0 + lim ​ x 1 + x 2 1 ​ ​ = 1 , x → 0 − lim ​ x 1 + x 2 1 ​ ​ = − 1 , 所以 x = 0 为跳跃间断点。 虽然 x → 1 lim ​ f ( x ) = 2 1 ​ 1 + 1 ​ = 2 2 ​ ​ , 所以 x = 1 为可去间断点。 而 x → − 1 lim ​ f ( x ) = x → − 1 lim ​ ( x + 1 ) ( x − 1 ) x ( x − 1 ) ​ 1 + x 2 1 ​ ​ = ∞ , 即 x = − 1 为无穷间断点。 故无穷间断点个数为 1。"
  }),
  base(2, 'k-math-015', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(y_1,y_2\\) 是一阶线性非齐次微分方程 \\(y'+p(x)y=q(x)\\) 的两个特解。若存在常数 \\(\\lambda,\\mu\\)，使 \\(\\lambda y_1+\\mu y_2\\) 是该方程的解，\\(\\lambda y_1-\\mu y_2\\) 是该方程对应齐次方程的解，则（ ）。",
    options: [{ key: "A", text: "\\(\\lambda=\\frac12,\\ \\mu=\\frac12\\)" }, { key: "B", text: "\\(\\lambda=-\\frac12,\\ \\mu=-\\frac12\\)" }, { key: "C", text: "\\(\\lambda=\\frac23,\\ \\mu=\\frac13\\)" }, { key: "D", text: "\\(\\lambda=\\frac23,\\ \\mu=\\frac23\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 记线性微分算子 \\(L[y]=y'+p(x)y\\)。因为 \\(y_1,y_2\\) 都是非齐次方程的特解，所以 \\[L[y_1]=L[y_2]=q(x).\\] 由 \\(\\lambda y_1-\\mu y_2\\) 是对应齐次方程的解，得 \\[0=L[\\lambda y_1-\\mu y_2]=(\\lambda-\\mu)q(x).\\] 这里“非齐次”表示 \\(q(x)\\not\\equiv0\\)，故 \\(\\lambda-\\mu=0\\)。 又因 \\(\\lambda y_1+\\mu y_2\\) 仍是原非齐次方程的解， \\[q(x)=L[\\lambda y_1+\\mu y_2]=(\\lambda+\\mu)q(x),\\] 所以 \\(\\lambda+\\mu=1\\)。联立得 \\[\\lambda=\\mu=\\frac12.\\] 故选 A。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=x^2\\) 与曲线 \\(y=a\\ln x\\)（\\(a\\ne0\\)）相切，则 \\(a=\\)（ ）。",
    options: [{ key: "A", text: "\\(4e\\)" }, { key: "B", text: "\\(3e\\)" }, { key: "C", text: "\\(2e\\)" }, { key: "D", text: "\\(e\\)" }],
    answer: ["C"],
    explain: "正确答案： C 由于曲线 y = x 2 与曲线 y = a ln x ( a  = 0 ) 相切，在切点处两条曲线的斜率相等，即 2 x = x a ​ , 解得 x = 2 a ​ ​ ( x > 0 ) . 在切点处两条曲线的纵坐标也相等。对于 y = x 2 ，当 x = 2 a ​ ​ 时， y = 2 a ​ . 对于 y = a ln x ，当 x = 2 a ​ ​ 时， y = a ln 2 a ​ ​ = 2 a ​ ln 2 a ​ . 因此有 2 a ​ = 2 a ​ ln 2 a ​ . 解得 a = 2 e . 故正确答案为 (C)。"
  }),
  base(4, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(m,n\\) 均为正整数，则反常积分 \\(\\int_0^1\\frac{\\sqrt[m]{\\ln^2(1-x)}}{\\sqrt[n]{x}}\\,dx\\) 的敛散性（ ）。",
    options: [{ key: "A", text: "仅与 \\(m\\) 的取值有关" }, { key: "B", text: "仅与 \\(n\\) 的取值有关" }, { key: "C", text: "与 \\(m,n\\) 的取值都有关" }, { key: "D", text: "与 \\(m,n\\) 的取值都无关" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 被积函数可写成 \\[\\frac{|\\ln(1-x)|^{2/m}}{x^{1/n}},\\qquad 0<x<1.\\] 需要分别考察 \\(x=0\\) 与 \\(x=1\\) 两个瑕点。 1. 当 \\(x\\to0^+\\) 时： 由 \\(\\ln(1-x)\\sim-x\\)，有 \\[\\frac{|\\ln(1-x)|^{2/m}}{x^{1/n}}\\sim x^{\\frac2m-\\frac1n}.\\] 因为 \\(m,n\\) 都是正整数， \\[\\frac2m-\\frac1n>-1,\\] 所以积分在 \\(x=0\\) 附近对任意正整数 \\(m,n\\) 都收敛。 2. 当 \\(x\\to1^-\\) 时： 令 \\(t=1-x\\)。此时 \\(x^{-1/n}\\to1\\)，只需考察 \\[\\int_0^\\varepsilon |\\ln t|^{2/m}\\,dt.\\] 再令 \\(u=-\\ln t\\)，则该积分化为尾积分 \\[\\int_{-\\ln\\varepsilon}^{+\\infty}u^{2/m}e^{-u}\\,du,\\] 显然收敛。因此原反常积分在 \\(x=1\\) 附近也总是收敛。 综上，无论 \\(m,n\\) 取何正整数，该反常积分均收敛，敛散性与 \\(m,n\\) 的取值都无关，故选 D。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(z=z(x,y)\\) 由方程 \\(F\\left(\\frac yx,\\frac zx\\right)=0\\) 确定，其中 \\(F\\) 为可微函数，且 \\(F'_2\\ne0\\)，则 \\(x\\frac{\\partial z}{\\partial x}+y\\frac{\\partial z}{\\partial y}=\\) （ ）。",
    options: [{ key: "A", text: "\\(x\\)" }, { key: "B", text: "\\(z\\)" }, { key: "C", text: "\\(-x\\)" }, { key: "D", text: "\\(-z\\)" }],
    answer: ["B"],
    explain: "正确答案： B 根据隐函数求导公式，有： ∂ x ∂ z ​ = − F z ′ ​ F x ′ ​ ​ = − F 2 ′ ​ ⋅ x 1 ​ F 1 ′ ​ ⋅ ( − x 2 y ​ ) + F 2 ′ ​ ⋅ ( − x 2 z ​ ) ​ = F 2 ′ ​ F 1 ′ ​ ⋅ x y ​ + F 2 ′ ​ ⋅ x z ​ ​ = x F 2 ′ ​ y F 1 ′ ​ + z F 2 ′ ​ ​ , ∂ y ∂ z ​ = − F z ′ ​ F y ′ ​ ​ = − F 2 ′ ​ ⋅ x 1 ​ F 1 ′ ​ ⋅ x 1 ​ ​ = − F 2 ′ ​ F 1 ′ ​ ​ . 因此， x ∂ x ∂ z ​ + y ∂ y ∂ z ​ = F 2 ′ ​ y F 1 ′ ​ + z F 2 ′ ​ ​ − F 2 ′ ​ y F 1 ′ ​ ​ = F 2 ′ ​ z F 2 ′ ​ ​ = z ."
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\lim_{n\\to\\infty}\\sum_{i=1}^n\\sum_{j=1}^n\\frac{n}{(n+i)(n^2+j^2)}=\\) （ ）。",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_0^1dx\\int_0^x\\frac{1}{(1+x)(1+y^2)}\\,dy\\)" }, { key: "B", text: "\\(\\displaystyle\\int_0^1dx\\int_0^x\\frac{1}{(1+x)(1+y)}\\,dy\\)" }, { key: "C", text: "\\(\\displaystyle\\int_0^1dx\\int_0^1\\frac{1}{(1+x)(1+y)}\\,dy\\)" }, { key: "D", text: "\\(\\displaystyle\\int_0^1dx\\int_0^1\\frac{1}{(1+x)(1+y^2)}\\,dy\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 先把二重求和拆成两个乘积： \\[\n\\sum_{i=1}^n\\sum_{j=1}^n\\frac{n}{(n+i)(n^2+j^2)}\n=\\left(\\sum_{i=1}^n\\frac1{n+i}\\right)\n \\left(\\sum_{j=1}^n\\frac{n}{n^2+j^2}\\right).\n\\] 分别写成黎曼和： \\[\n\\sum_{i=1}^n\\frac1{n+i}\n=\\frac1n\\sum_{i=1}^n\\frac1{1+i/n}\n\\longrightarrow \\int_0^1\\frac{dx}{1+x},\n\\] \\[\n\\sum_{j=1}^n\\frac{n}{n^2+j^2}\n=\\frac1n\\sum_{j=1}^n\\frac1{1+(j/n)^2}\n\\longrightarrow \\int_0^1\\frac{dy}{1+y^2}.\n\\] 因此原极限为 \\[\n\\left(\\int_0^1\\frac{dx}{1+x}\\right)\n\\left(\\int_0^1\\frac{dy}{1+y^2}\\right)\n=\\int_0^1dx\\int_0^1\\frac{1}{(1+x)(1+y^2)}\\,dy.\n\\] 故选 D。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设向量组 I：\\(\\alpha_1,\\alpha_2,\\ldots,\\alpha_r\\) 可由向量组 II：\\(\\beta_1,\\beta_2,\\ldots,\\beta_s\\) 线性表出，下列命题正确的是（ ）。",
    options: [{ key: "A", text: "若向量组 I 线性无关，则 \\(r\\le s\\)" }, { key: "B", text: "若向量组 I 线性相关，则 \\(r>s\\)" }, { key: "C", text: "若向量组 II 线性无关，则 \\(r\\le s\\)" }, { key: "D", text: "若向量组 II 线性相关，则 \\(r>s\\)" }],
    answer: ["A"],
    explain: "正确答案： A 由于向量组 I 能由向量组 II 线性表示，所以 r ( I ) ≤ r ( II ) ，即 r ( a 1 ​ , ⋯ , a r ​ ) ≤ r ( β 1 ​ , ⋯ , β s ​ ) ≤ s 若向量组 I 线性无关，则 r ( a 1 ​ , ⋯ , a r ​ ) = r ，所以 r = r ( a 1 ​ , ⋯ , a r ​ ) ≤ r ( β 1 ​ , ⋯ , β s ​ ) ≤ s 即 r ≤ s ，选 (A)。"
  }),
  base(8, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 4 阶实对称矩阵，且 \\(A^2+A=O.\\) 若 \\(A\\) 的秩为 3，则 \\(A\\) 相似于（ ）。",
    options: [{ key: "A", text: "\\(\\operatorname{diag}(1,1,1,0)\\)" }, { key: "B", text: "\\(\\operatorname{diag}(1,1,-1,0)\\)" }, { key: "C", text: "\\(\\operatorname{diag}(1,-1,-1,0)\\)" }, { key: "D", text: "\\(\\operatorname{diag}(-1,-1,-1,0)\\)" }],
    answer: ["D"],
    explain: "正确答案： D 设 λ 为 A 的特征值。由于 A 2 + A = 0 ，所以 λ 2 + λ = 0 ，即 λ ( λ + 1 ) = 0 。因此 A 的特征值只能为 − 1 或 0 。 由于 A 为实对称矩阵，故 A 可相似对角化，且相似对角矩阵中非零特征值的个数等于矩阵的秩。已知 r ( A ) = 3 ，所以 A 有 3 个非零特征值，即 3 个 − 1 和 1 个 0 。 因此 A 相似于 ​ − 1 ​ − 1 ​ − 1 ​ 0 ​ ​ ，选 (D)。"
  }),
  base(9, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "3 阶常系数线性齐次微分方程 \\(y'''-2y''+y'-2y=0\\) 的通解为 \\(y=\\) ________。",
    answerText: "】 y = C 1 ​ e 2 x + C 2 ​ cos x + C 3 ​ sin x 【",
    referenceAnswer: "【答案】 y = C 1 ​ e 2 x + C 2 ​ cos x + C 3 ​ sin x 【解析】 该常系数线性齐次微分方程的特征方程为 λ 3 − 2 λ 2 + λ − 2 = 0 。 因式分解得 λ 2 ( λ − 2 ) + ( λ − 2 ) = ( λ − 2 ) ( λ 2 + 1 ) = 0 。 解得特征根为 λ = 2 ， λ = ± i 。 因此通解为 y = C 1 ​ e 2 x + C 2 ​ cos x + C 3 ​ sin x 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=\\frac{2x^3}{x^2+1}\\) 的渐近线方程为 ________。",
    answerText: "】 y = 2 x 【",
    referenceAnswer: "【答案】 y = 2 x 【解析】 曲线 y = x 2 + 1 2 x 3 ​ 的斜渐近线方程为 由 lim x → ∞ ​ x x 2 + 1 2 x 3 ​ ​ = 2 ，可得该函数在无穷远处的斜率趋向于 2。 又因为 x → ∞ lim ​ x 2 + 1 2 x 3 ​ − 2 x = x → ∞ lim ​ x 2 + 1 2 x 3 − 2 x 3 − 2 x ​ = 0 说明函数与直线 y = 2 x 在无穷远处的纵向差距趋于零。 因此，该曲线的斜渐近线为 y = 2 x 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(y=\\ln(1-2x)\\) 在 \\(x=0\\) 处的 \\(n\\) 阶导数 \\(y^{(n)}(0)=\\) ________。",
    answerText: "】 − 2 n ( n − 1 )! 【",
    referenceAnswer: "【答案】 − 2 n ( n − 1 )! 【解析】 根据高阶导数公式可知： ln ( n ) ( 1 + x ) = ( − 1 ) n − 1 ( 1 + x ) n ( n − 1 )! ​ 因此： ln ( n ) ( 1 − 2 x ) = ( − 1 ) n − 1 ( 1 − 2 x ) n ( n − 1 )! ​ × ( − 2 ) n = − 2 n ( 1 − 2 x ) n ( n − 1 )! ​ 代入 x = 0 得： y ( n ) ( 0 ) = − 2 n ( 1 − 2 × 0 ) n ( n − 1 )! ​ = − 2 n ( n − 1 )!",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "当 \\(0\\le\\theta\\le\\pi\\) 时，对数螺线 \\(r=e^\\theta\\) 的弧长为 ________。",
    answerText: "】 2 ​ ( e π − 1 ) 【",
    referenceAnswer: "【答案】 2 ​ ( e π − 1 ) 【解析】 由于 0 ≤ θ ≤ π ，对数螺线 r = e θ 的极坐标弧长公式为： ∫ 0 π ​ ( e θ ) 2 + ( e θ ) 2 ​ d θ = ∫ 0 π ​ 2 ​ e θ d θ = 2 ​ ( e π − 1 )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知一个长方形的长 \\(l\\) 以 \\(2\\text{ cm/s}\\) 的速率增加，宽 \\(w\\) 以 \\(3\\text{ cm/s}\\) 的速率增加。则当 \\(l=12\\text{ cm},w=5\\text{ cm}\\) 时，它的对角线增加的速率为 ________。",
    answerText: "】 3 【",
    referenceAnswer: "【答案】 3 【解析】 设 l = x ( t ) ， w = y ( t ) 。由题意知，在 t = t 0 ​ 时刻， x ( t 0 ​ ) = 12 ， y ( t 0 ​ ) = 5 ，且 x ′ ( t 0 ​ ) = 2 ， y ′ ( t 0 ​ ) = 3 。 设该对角线长为 S ( t ) ，则： S ( t ) = x 2 ( t ) + y 2 ( t ) ​ . 对其求导得： S ′ ( t ) = x 2 ( t ) + y 2 ( t ) ​ x ( t ) x ′ ( t ) + y ( t ) y ′ ( t ) ​ . 代入 t = t 0 ​ 时的值： S ′ ( t 0 ​ ) = 1 2 2 + 5 2 ​ 12 × 2 + 5 × 3 ​ = 13 39 ​ = 3.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A,B\\) 为 3 阶矩阵，且 \\(|A|=3,\\qquad |B|=2,\\qquad |A^{-1}+B|=2,\\) 则 \\(|A+B^{-1}|=\\) ________。",
    answerText: "】 3 【",
    referenceAnswer: "【答案】 3 【解析】 由于 A ( A − 1 + B ) B − 1 = ( E + A B ) B − 1 = B − 1 + A ， 所以 ∣ A + B − 1 ∣ = ∣ A ( A − 1 + B ) B − 1 ∣ = ∣ A ∣ ⋅ ∣ A − 1 + B ∣ ⋅ ∣ B − 1 ∣. 已知 ∣ B ∣ = 2 ，因此 ∣ B − 1 ∣ = ∣ B ∣ − 1 = 2 1 ​ . 于是 ∣ A + B − 1 ∣ = ∣ A ∣ ⋅ ∣ A − 1 + B ∣ ⋅ ∣ B − 1 ∣ = 3 × 2 × 2 1 ​ = 3.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "求函数 \\(f(x)=\\int_1^{x^2}(x^2-t)e^{-t^2}\\,dt\\) 的单调区间与极值。",
    referenceAnswer: "【答案】 单调递减区间为 \\(( -\\infty,-1)\\cup(0,1)\\)，单调递增区间为 \\((-1,0)\\cup(1,+\\infty)\\)。 极大值点为 \\(x=0\\)，极大值为 \\(\\displaystyle\\frac{1-e^{-1}}2\\)；极小值点为 \\(x=\\pm1\\)，极小值为 \\(0\\)。 【解析】 题中 \\[f(x)=\\int_1^{x^2}(x^2-t)e^{-t^2}\\,dt.\\] 用莱布尼茨公式求导。由于当上限 \\(t=x^2\\) 时有 \\(x^2-t=0\\)，上限项恰为 0，因此 \\[\nf'(x)=\\int_1^{x^2}2x e^{-t^2}\\,dt\n=2x\\int_1^{x^2}e^{-t^2}\\,dt.\n\\] 由于 \\(e^{-t^2}>0\\)，故 \\(\\int_1^{x^2}e^{-t^2}dt\\) 的符号由 \\(x^2-1\\) 决定，于是 当 \\(x<-1\\) 时，\\(f'(x)<0\\)； 当 \\(-1<x<0\\) 时，\\(f'(x)>0\\)； 当 \\(0<x<1\\) 时，\\(f'(x)<0\\)； 当 \\(x>1\\) 时，\\(f'(x)>0\\)。 所以 \\(x=0\\) 为极大值点，\\(x=\\pm1\\) 为极小值点。 极值分别为 \\[\nf(\\pm1)=0,\n\\] 以及 \\[\nf(0)=\\int_1^0(-t)e^{-t^2}\\,dt\n=\\left.\\frac12e^{-t^2}\\right|_1^0\n=\\frac{1-e^{-1}}2.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（Ⅰ）比较\\(\\int_0^1|\\ln t|[\\ln(1+t)]^n\\,dt\\) 与 \\(\\int_0^1t^n|\\ln t|\\,dt\\qquad(n=1,2,\\ldots)\\) 的大小，并说明理由；\n\n（Ⅱ）记\\(u_n=\\int_0^1|\\ln t|[\\ln(1+t)]^n\\,dt\\qquad(n=1,2,\\ldots),\\) 求极限 \\(\\displaystyle\\lim_{n\\to\\infty}u_n\\)。",
    referenceAnswer: "【答案】 (I) ∫ 0 1 ​ ∣ ln t ∣ [ ln ( 1 + t ) ] n d t < ∫ 0 1 ​ ∣ ln t ∣ t n d t (II) lim n → ∞ ​ u n ​ = 0 【解析】 【解析】 (I) 当 0 < x < 1 时， 0 < ln ( 1 + x ) < x ，因此 [ ln ( 1 + t ) ] n < t n ，所以 ∣ ln t ∣ [ ln ( 1 + t ) ] n < ∣ ln t ∣ t n , 于是 ∫ 0 1 ​ ∣ ln t ∣ [ ln ( 1 + t ) ] n d t < ∫ 0 1 ​ ∣ ln t ∣ t n d t ( n = 1 , 2 , … ) . (II) 计算得 ∫ 0 1 ​ ∣ ln t ∣ t n d t = − ∫ 0 1 ​ ln t ⋅ t n d t = − n + 1 1 ​ ∫ 0 1 ​ ln t d ( t n + 1 ) = ( n + 1 ) 2 1 ​ , 因此 0 < u n ​ < ∫ 0 1 ​ ∣ ln t ∣ t n d t = ( n + 1 ) 2 1 ​ . 根据夹逼定理，有 0 ≤ n → ∞ lim ​ u n ​ ≤ n → ∞ lim ​ ( n + 1 ) 2 1 ​ = 0 , 所以 n → ∞ lim ​ u n ​ = 0.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "设函数 \\(y=f(x)\\) 由参数方程\\(\\begin{cases} x=2t+t^2,\\\\ y=\\psi(t) \\end{cases}\\qquad(t>-1)\\)所确定，其中 \\(\\psi(t)\\) 具有二阶导数，且 \\(\\psi(1)=\\frac52,\\qquad \\psi'(1)=6.\\) 已知 \\(\\frac{d^2y}{dx^2}=\\frac{3}{4(1+t)},\\) 求函数 \\(\\psi(t)\\)。",
    referenceAnswer: "【答案】 ψ ( t ) = 2 3 ​ t 2 + t 3 , t > − 1 【解析】 根据题意得： d x d y ​ = d t d x ​ d t d y ​ ​ = 2 t + 2 ψ ′ ( t ) ​ d x 2 d 2 y ​ = d t d x ​ d t d ​ ( 2 t + 2 ψ ′ ( t ) ​ ) ​ = ( 2 t + 2 ) 3 ψ ′′ ( t ) ( 2 t + 2 ) − 2 ψ ′ ( t ) ​ = 4 ( 1 + t ) 3 ​ 即： ψ ′′ ( t ) ( 2 t + 2 ) − 2 ψ ′ ( t ) = 6 ( t + 1 ) 2 整理得： ψ ′′ ( t ) ( t + 1 ) − ψ ′ ( t ) = 3 ( t + 1 ) 2 令 y ′ = ψ ′ ( t ) ，则方程化为： y ′ − 1 + t 1 ​ y = 3 ( 1 + t ) 其通解为： y = e ∫ 1 + t 1 ​ d t ( ∫ 3 ( 1 + t ) e − ∫ 1 + t 1 ​ d t d t + C ) = ( 1 + t ) ( 3 t + C ) ( t > − 1 ) 因为 y ( 1 ) = ψ ′ ( 1 ) = 6 ，所以： 6 = ( 1 + 1 ) ( 3 × 1 + C ) 解得 C = 0 ，故： y = 3 t ( t + 1 ) 即： ψ ′ ( t ) = 3 t ( t + 1 ) 则： ψ ( t ) = ∫ 3 t ( t + 1 ) d t = 2 3 ​ t 2 + t 3 + C 1 ​ 又由 ψ ( 1 ) = 2 5 ​ ，可得： 2 3 ​ × 1 2 + 1 3 + C 1 ​ = 2 5 ​ 解得 C 1 ​ = 0 ，故： ψ ( t ) = 2 3 ​ t 2 + t 3 , ( t > − 1 )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "一个高为 \\(h\\) 的柱体形贮油罐，底面是长轴为 \\(2a\\)、短轴为 \\(2b\\) 的椭圆。现将贮油罐平放。当油罐中油面高度为 \\(\\dfrac{3b}{2}\\) 时（如图），计算油的质量。（长度单位为 m，质量单位为 kg，油的密度为常量 \\(\\rho\\)，单位为 kg/m³。）",
    referenceAnswer: "【答案】 \\[\nm=\\rho abh\\left(\\frac{2\\pi}{3}+\\frac{\\sqrt3}{4}\\right).\n\\] 【解析】 油罐平放后，其轴向长度仍为题设的 \\(h\\)。取椭圆截面方程 \\[\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1.\\] 油面高度为 \\(\\frac{3b}{2}\\)，从最低点 \\(y=-b\\) 向上量，故液面对应 \\(y=\\frac b2\\)。截面中油所占面积为 \\[\nS=\\int_{-b}^{b/2}2a\\sqrt{1-\\frac{y^2}{b^2}}\\,dy.\n\\] 令 \\(y=b\\sin t\\)，则积分限由 \\(-\\frac\\pi2\\) 到 \\(\\frac\\pi6\\)，于是 \\[\nS=2ab\\int_{-\\pi/2}^{\\pi/6}\\cos^2t\\,dt\n=ab\\left[t+\\frac12\\sin2t\\right]_{-\\pi/2}^{\\pi/6}\n=ab\\left(\\frac{2\\pi}{3}+\\frac{\\sqrt3}{4}\\right).\n\\] 油的体积为 \\(V=Sh\\)，所以质量 \\[\nm=\\rho V=\\rho abh\\left(\\frac{2\\pi}{3}+\\frac{\\sqrt3}{4}\\right).\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "设函数 \\(u=f(x,y)\\) 具有二阶连续偏导数，且满足等式 \\(4\\frac{\\partial^2u}{\\partial x^2}+12\\frac{\\partial^2u}{\\partial x\\partial y}+5\\frac{\\partial^2u}{\\partial y^2}=0.\\) 确定 \\(a,b\\) 的值，使等式在变换 \\(\\xi=x+ay,\\qquad \\eta=x+by\\) 下简化为 \\(\\frac{\\partial^2u}{\\partial\\xi\\partial\\eta}=0.\\)",
    referenceAnswer: "【答案】 a = − 2 , b = − 5 2 ​ 或 a = − 5 2 ​ , b = − 2 【解析】 根据复合函数链式法则，得到以下偏导数关系： ∂ x ∂ u ​ = ∂ ξ ∂ u ​ + ∂ η ∂ u ​ , ∂ y ∂ u ​ = a ∂ ξ ∂ u ​ + b ∂ η ∂ u ​ , ∂ x 2 ∂ 2 u ​ = ∂ ξ 2 ∂ 2 u ​ + 2 ∂ ξ ∂ η ∂ 2 u ​ + ∂ η 2 ∂ 2 u ​ , ∂ x ∂ y ∂ 2 u ​ = a ∂ ξ 2 ∂ 2 u ​ + ( a + b ) ∂ ξ ∂ η ∂ 2 u ​ + b ∂ η 2 ∂ 2 u ​ , ∂ y 2 ∂ 2 u ​ = a 2 ∂ ξ 2 ∂ 2 u ​ + 2 ab ∂ ξ ∂ η ∂ 2 u ​ + b 2 ∂ η 2 ∂ 2 u ​ . 将上述结果代入原方程，得到： ​ 4 ( ∂ ξ 2 ∂ 2 u ​ + 2 ∂ ξ ∂ η ∂ 2 u ​ + ∂ η 2 ∂ 2 u ​ ) + 12 ( a ∂ ξ 2 ∂ 2 u ​ + ( a + b ) ∂ ξ ∂ η ∂ 2 u ​ + b ∂ η 2 ∂ 2 u ​ ) + 5 ( a 2 ∂ ξ 2 ∂ 2 u ​ + 2 ab ∂ ξ ∂ η ∂ 2 u ​ + b 2 ∂ η 2 ∂ 2 u ​ ) = 0. ​ 整理后得到： ( 4 + 12 a + 5 a 2 ) ∂ ξ 2 ∂ 2 u ​ + ( 8 + 12 ( a + b ) + 10 ab ) ∂ ξ ∂ η ∂ 2 u ​ + ( 4 + 12 b + 5 b 2 ) ∂ η 2 ∂ 2 u ​ = 0. 为了使方程化简为 ∂ ξ ∂ η ∂ 2 u ​ = 0 ，需要满足以下条件： ⎩ ⎨ ⎧ ​ 4 + 12 a + 5 a 2 = 0 , 4 + 12 b + 5 b 2 = 0 , 8 + 12 ( a + b ) + 10 ab  = 0. ​ 解方程 4 + 12 a + 5 a 2 = 0 ，得到 a = − 2 或 a = − 5 2 ​ 。 解方程 4 + 12 b + 5 b 2 = 0 ，得到 b = − 2 或 b = − 5 2 ​ 。 当 a = − 2 ， b = − 5 2 ​ 或 a = − 5 2 ​ ， b = − 2 时，计算： 8 + 12 ( a + b ) + 10 ab ​ = 8 + 12 ( − 2 − 5 2 ​ ) + 10 × ( − 2 ) × ( − 5 2 ​ ) = 8 − 5 144 ​ + 8 = 16 − 5 144 ​ = − 5 64 ​  = 0 , ​ 满足条件。 因此， a , b 的值为 ( − 2 , − 5 2 ​ ) 或 ( − 5 2 ​ , − 2 ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "计算二重积分 \\(I=\\iint_D r^2\\sin\\theta\\sqrt{1-r^2\\cos2\\theta}\\,dr\\,d\\theta,\\) 其中 \\(D=\\{(r,\\theta)\\mid 0\\le r\\le\\sec\\theta,\\ 0\\le\\theta\\le\\tfrac\\pi4\\}.\\)",
    referenceAnswer: "【答案】 I = 3 1 ​ − 16 π ​ 【解析】 将极坐标转换为直角坐标， x = r cos θ ， y = r sin θ ，以及 cos 2 θ = cos 2 θ − sin 2 θ ，则被积函数可化为： r 2 sin θ 1 − r 2 ( cos 2 θ − sin 2 θ ) ​ ​ = r 2 sin θ 1 − ( r cos θ ) 2 + ( r sin θ ) 2 ​ = r 2 sin θ 1 − x 2 + y 2 ​ . ​ 积分区域 D 中， 0 ≤ r ≤ sec θ ，即 r cos θ ≤ 1 ，也就是 x ≤ 1 ，且 0 ≤ θ ≤ 4 π ​ ，对应的直角坐标区域为 0 ≤ x ≤ 1 ， 0 ≤ y ≤ x 。 因此，二重积分可化为直角坐标下的累次积分： I = ∫ 0 4 π ​ ​ d θ ∫ 0 s e c θ ​ r 2 sin θ 1 − r 2 cos 2 θ ​ d r = ∫ 0 1 ​ d x ∫ 0 x ​ y 1 − x 2 + y 2 ​ d y . 令 u = 1 − x 2 + y 2 ，则 d u = 2 y d y 。当 y = 0 时， u = 1 − x 2 ；当 y = x 时， u = 1 ，于是： ∫ 0 x ​ y 1 − x 2 + y 2 ​ d y = 2 1 ​ ∫ 1 − x 2 1 ​ u ​ d u = 2 1 ​ × 3 2 ​ u 2 3 ​ ​ 1 − x 2 1 ​ = 3 1 ​ ( 1 − ( 1 − x 2 ) 2 3 ​ ) . 因此： I ​ = ∫ 0 1 ​ 3 1 ​ ( 1 − ( 1 − x 2 ) 2 3 ​ ) d x = 3 1 ​ ∫ 0 1 ​ 1 d x − 3 1 ​ ∫ 0 1 ​ ( 1 − x 2 ) 2 3 ​ d x = 3 1 ​ − 3 1 ​ × 16 3 π ​ = 3 1 ​ − 16 π ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在闭区间 \\([0,1]\\) 上连续，在开区间 \\((0,1)\\) 内可导，且 \\(f(0)=0,\\qquad f(1)=\\frac13.\\) 证明：存在 \\(\\xi\\in\\left(0,\\frac12\\right),\\qquad \\eta\\in\\left(\\frac12,1\\right),\\) 使得 \\(f'(\\xi)+f'(\\eta)=\\xi^2+\\eta^2.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 令 F ( x ) = f ( x ) − 3 1 ​ x 3 ，对 F ( x ) 在区间 [ 0 , 2 1 ​ ] 上应用拉格朗日中值定理，存在 ξ ∈ ( 0 , 2 1 ​ ) ，使得 F ( 2 1 ​ ) − F ( 0 ) = 2 1 ​ F ′ ( ξ ) . 再对 F ( x ) 在区间 [ 2 1 ​ , 1 ] 上应用拉格朗日中值定理，存在 η ∈ ( 2 1 ​ , 1 ) ，使得 F ( 1 ) − F ( 2 1 ​ ) = 2 1 ​ F ′ ( η ) . 将两式相加，得到 f ′ ( ξ ) + f ′ ( η ) = ξ 2 + η 2 . 因此，存在 ξ ∈ ( 0 , 2 1 ​ ) 与 η ∈ ( 2 1 ​ , 1 ) ，使得 f ′ ( ξ ) + f ′ ( η ) = ξ 2 + η 2 .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix} \\lambda&1&1\\\\ 0&\\lambda-1&0\\\\ 1&1&\\lambda \\end{pmatrix},\\qquad b=\\begin{pmatrix}a\\\\1\\\\1\\end{pmatrix}.\\)已知线性方程组 \\(Ax=b\\) 存在两个不同的解。\n\n（Ⅰ）求 \\(\\lambda,a\\)；\n\n（Ⅱ）求方程组 \\(Ax=b\\) 的通解。",
    referenceAnswer: "【答案】 （Ⅰ）\\(\\lambda=-1,\\ a=-2\\)。 （Ⅱ） \\[\nx=k\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}\n+\\begin{pmatrix}\\frac32\\\\-\\frac12\\\\0\\end{pmatrix},\\qquad k\\in\\mathbb R.\n\\] 【解析】 方程组有两个不同的解，说明它有无穷多解，因此必须满足 \\[r(A)=r(A\\mid b)<3.\\] 先由 \\[\n|A|=(\\lambda-1)^2(\\lambda+1)=0\n\\] 得 \\(\\lambda=1\\) 或 \\(\\lambda=-1\\)。 当 \\(\\lambda=1\\) 时，第二行方程左边恒为 0，而右端为 1，即出现 \\(0=1\\)，方程组无解，舍去。 故 \\(\\lambda=-1\\)。此时方程组为 \\[\n\\begin{cases}\n-x_1+x_2+x_3=a,\\\\\n-2x_2=1,\\\\\nx_1+x_2-x_3=1.\n\\end{cases}\n\\] 由第二式 \\(x_2=-\\frac12\\)。其余两式分别给出 \\[x_1-x_3=-a-\\frac12,\\qquad x_1-x_3=\\frac32,\\] 故 \\(a=-2\\)。令自由变量 \\(x_3=k\\)，则 \\[x_1=k+\\frac32,\\qquad x_2=-\\frac12,\\] 从而得到上述通解。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "设\\(A=\\begin{pmatrix} 0&-1&4\\\\ -1&3&a\\\\ 4&a&0 \\end{pmatrix},\\)正交矩阵 \\(Q\\) 使得 \\(Q^TAQ\\) 为对角矩阵。若 \\(Q\\) 的第 1 列为 \\(\\frac1{\\sqrt6}(1,2,1)^T,\\) 求 \\(a,Q\\)。",
    referenceAnswer: "【答案】 a = − 1 ， Q = ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ ​ 【解析】 已知 A = ​ 0 − 1 4 ​ − 1 3 a ​ 4 a 0 ​ ​ ，存在正交矩阵 Q ，使得 Q T A Q 为对角阵，且 Q 的第一列为 6 ​ 1 ​ ( 1 , 2 , 1 ) T ，故 A 对应于 λ 1 ​ 的特征向量为 ξ 1 ​ = 6 ​ 1 ​ ( 1 , 2 , 1 ) T 。 根据特征值与特征向量的定义，有 A ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ = λ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ , 即 ​ 0 − 1 4 ​ − 1 3 a ​ 4 a 0 ​ ​ ​ 1 2 1 ​ ​ = λ 1 ​ ​ 1 2 1 ​ ​ . 由此解得 a = − 1 ， λ 1 ​ = 2 。因此 A = ​ 0 − 1 4 ​ − 1 3 − 1 ​ 4 − 1 0 ​ ​ . 由 ∣ λ E − A ∣ = ​ λ 1 − 4 ​ 1 λ − 3 1 ​ − 4 1 λ ​ ​ = ( λ + 4 ) ( λ − 2 ) ( λ − 5 ) = 0 , 可得 A 的特征值为 λ 1 ​ = 2 ， λ 2 ​ = − 4 ， λ 3 ​ = 5 。 由 ( λ 2 ​ E − A ) x = 0 ，即 ​ − 4 1 − 4 ​ 1 − 7 1 ​ − 4 1 − 4 ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = 0 , 可解得对应于 λ 2 ​ = − 4 的线性无关特征向量为 ξ 2 ​ = ( − 1 , 0 , 1 ) T 。 由 ( λ 3 ​ E − A ) x = 0 ，即 ​ 5 1 − 4 ​ 1 2 1 ​ − 4 1 5 ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = 0 , 可解得对应于 λ 3 ​ = 5 的特征向量为 ξ 3 ​ = ( 1 , − 1 , 1 ) T 。 由于 A 为实对称矩阵， ξ 1 ​ , ξ 2 ​ , ξ 3 ​ 为对应于不同特征值的特征向量，故它们相互正交。将其单位化： η 1 ​ = ∣ ξ 1 ​ ∣ ξ 1 ​ ​ = 6 ​ 1 ​ ( 1 , 2 , 1 ) T , η 2 ​ = ∣ ξ 2 ​ ∣ ξ 2 ​ ​ = 2 ​ 1 ​ ( − 1 , 0 , 1 ) T , η 3 ​ = ∣ ξ 3 ​ ∣ ξ 3 ​ ​ = 3 ​ 1 ​ ( 1 , − 1 , 1 ) T . ​ 取 Q = ( η 1 ​ , η 2 ​ , η 3 ​ ) = ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ ​ , 则有 Q T A Q = Λ = ​ 2 ​ − 4 ​ 5 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2010_math2 = {
  id: P, year: Y,
  title: '2010 年全国硕士研究生招生考试 数学（二）',
  short: '2010 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2010_math2.length,
  qids: questions2010_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
