const P = 'paper-2016-math1'
const Y = 2016
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2016-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2016 考研数学（一）真题',
  ...extra
})

export const questions2016_math1 = [
  base(1, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若反常积分\n∫0+∞xa(1+x)b1dx\n收敛，则()",
    options: [{ key: "A", text: "a < 1 且 b > 1" }, { key: "B", text: "a > 1 且 b > 1" }, { key: "C", text: "a < 1 且 a + b > 1" }, { key: "D", text: "a > 1 且 a + b > 1" }],
    answer: ["C"],
    explain: "正确答案： C 我们考虑积分 I = ∫ 0 + ∞ ​ x a ( 1 + x ) b 1 ​ d x . 将其拆分为 I = ∫ 0 1 ​ x a ( 1 + x ) b 1 ​ d x + ∫ 1 + ∞ ​ x a ( 1 + x ) b 1 ​ d x . 第一部分 ： 在区间 ( 0 , 1 ] 上， ( 1 + x ) b 在 x → 0 + 时趋于 1 ，不影响收敛性。 比较对象是 ∫ 0 1 ​ x a 1 ​ d x , 它在 a < 1 时收敛。 因此第一部分收敛的条件是 a < 1. 第二部分 ： 在区间 [ 1 , + ∞ ) 上，做如下变形： x a ( 1 + x ) b 1 ​ = x a + b ( 1 + x 1 ​ ) b 1 ​ . 当 x → + ∞ 时， ( 1 + x 1 ​ ) b → 1 ，不影响收敛性。 比较对象是 ∫ 1 + ∞ ​ x a + b 1 ​ d x , 它在 a + b > 1 时收敛。 结论 ： 整个积分收敛的充分必要条件是 a < 1 且 a + b > 1."
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数\nf(x)={2(x−1),x1 lnx,x≥1\n，则\nf(x)\n的一个原函数是()",
    options: [{ key: "A", text: "F ( x ) = { ( x − 1 ) 2 , x < 1 x ( ln x − 1 ) , x ≥ 1 ​" }, { key: "B", text: "F ( x ) = { ( x − 1 ) 2 , x < 1 x ( ln x + 1 ) − 1 , x ≥ 1 ​" }, { key: "C", text: "F ( x ) = { ( x − 1 ) 2 , x < 1 x ( ln x + 1 ) + 1 , x ≥ 1 ​" }, { key: "D", text: "F ( x ) = { ( x − 1 ) 2 , x < 1 x ( ln x − 1 ) + 1 , x ≥ 1 ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 我们已知原函数的导数为分段形式： f ′ ( x ) = { 2 ( x − 1 ) , ​ x < 1 , ln x , ​ x ≥ 1. ​ 要求原函数 F ( x ) 满足在 x = 1 处连续。 1. 分段积分 当 x < 1 时： ∫ 2 ( x − 1 ) d x = ( x − 1 ) 2 + C 1 ​ . 取 C 1 ​ = 0 ，得： F ( x ) = ( x − 1 ) 2 , x < 1. 当 x ≥ 1 时： ∫ ln x d x = x ( ln x − 1 ) + C 2 ​ . 2. 利用连续性确定常数 在 x = 1 处，左极限： x → 1 − lim ​ F ( x ) = ( 1 − 1 ) 2 = 0. 右极限： F ( 1 ) = 1 ⋅ ( ln 1 − 1 ) + C 2 ​ = − 1 + C 2 ​ . 连续性要求： − 1 + C 2 ​ = 0 ⇒ C 2 ​ = 1. 3. 最终结果 F ( x ) = { ( x − 1 ) 2 , x ( ln x − 1 ) + 1 , ​ x < 1 , x ≥ 1. ​"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若\ny=(1+x2)2−1+x2\n和\ny=(1+x2)2+1+x2\n是微分方程\ny′+p(x)y=q(x)\n的两个解，则\nq(x)=()",
    options: [{ key: "A", text: "3 x ( 1 + x 2 )" }, { key: "B", text: "− 3 x ( 1 + x 2 )" }, { key: "C", text: "1 + x 2 x ​" }, { key: "D", text: "− 1 + x 2 x ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 我们已知原方程形式为： y ′ + p ( x ) y = q ( x ) 已知两个特解 y 1 ​ 和 y 2 ​ ，满足： y 1 ​ − y 2 ​ = − 2 1 + x 2 ​ 且 2 y 1 ​ + y 2 ​ ​ = ( 1 + x 2 ) 2 1. 求 p ( x ) 两解之差 y 1 ​ − y 2 ​ 是对应齐次方程 y ′ + p ( x ) y = 0 的解。 代入 y = − 2 1 + x 2 ​ ： 先求导： y ′ = − 2 ⋅ 1 + x 2 ​ x ​ = − 1 + x 2 ​ 2 x ​ 代入齐次方程： − 1 + x 2 ​ 2 x ​ + p ( x ) ⋅ [ − 2 1 + x 2 ​ ] = 0 − 1 + x 2 ​ 2 x ​ − 2 p ( x ) 1 + x 2 ​ = 0 两边乘以 − 1 ： 1 + x 2 ​ 2 x ​ + 2 p ( x ) 1 + x 2 ​ = 0 除以 2： 1 + x 2 ​ x ​ + p ( x ) 1 + x 2 ​ = 0 p ( x ) 1 + x 2 ​ = − 1 + x 2 ​ x ​ p ( x ) = − 1 + x 2 x ​ 2. 求 q ( x ) 将特解 2 y 1 ​ + y 2 ​ ​ = ( 1 + x 2 ) 2 代入原方程。 设 Y = ( 1 + x 2 ) 2 ，则 Y ′ = 2 ( 1 + x 2 ) ⋅ 2 x = 4 x ( 1 + x 2 ) 原方程： Y ′ + p ( x ) Y = q ( x ) 代入： 4 x ( 1 + x 2 ) + [ − 1 + x 2 x ​ ] ⋅ ( 1 + x 2 ) 2 = q ( x ) 第二项化简： − 1 + x 2 x ​ ⋅ ( 1 + x 2 ) 2 = − x ( 1 + x 2 ) 所以： 4 x ( 1 + x 2 ) − x ( 1 + x 2 ) = q ( x ) 3 x ( 1 + x 2 ) = q ( x ) 最终答案： p ( x ) = − 1 + x 2 x ​ , q ( x ) = 3 x ( 1 + x 2 ) ​"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数\nf(x)={x,x≤0frac1n,n+11x≤n1,n=1,2,⋯\n，则（  ）",
    options: [{ key: "A", text: "x = 0 是 f ( x ) 的第一类间断点" }, { key: "B", text: "x = 0 是 f ( x ) 的第二类间断点" }, { key: "C", text: "f ( x ) 在 x = 0 处连续但不可导" }, { key: "D", text: "f ( x ) 在 x = 0 处可导" }],
    answer: ["D"],
    explain: "正确答案： D 要判断函数 f ( x ) 在 x = 0 处的连续性与可导性，以及间断点类型，需从极限和导数定义入手分析。 一、 连续性分析 函数在 x = 0 处的定义 当 x ≤ 0 时， f ( x ) = x ，故 f ( 0 ) = 0 右极限计算 当 x 从右侧趋近于 0 时， x 落在区间 ( n + 1 1 ​ , n 1 ​ ] 内（ n 为正整数），此时 f ( x ) = n 1 ​ 随着 x → 0 + ， n → ∞ ，因此： x → 0 + lim ​ f ( x ) = n → ∞ lim ​ n 1 ​ = 0 左极限计算 当 x 从左侧趋近于 0 时， f ( x ) = x ，故： x → 0 − lim ​ f ( x ) = x → 0 − lim ​ x = 0 连续性结论 由于 x → 0 − lim ​ f ( x ) = x → 0 + lim ​ f ( x ) = f ( 0 ) = 0 因此函数 f ( x ) 在 x = 0 处连续，排除选项 (A) 和 (B)。 二、 可导性分析 根据导数定义，需判断左导数和右导数是否存在且相等。 左导数计算 f ′ = x → 0 − lim ​ x − 0 f ( x ) − f ( 0 ) ​ = 1 右导数计算 取 x n ​ = n 1 ​ （当 n → ∞ 时， x n ​ → 0 + ），则： x n ​ − 0 f ( x n ​ ) − f ( 0 ) ​ = n 1 ​ n 1 ​ − 0 ​ = 1 所以 n → ∞ lim ​ x n ​ f ( x n ​ ) − f ( 0 ) ​ = 1 进一步分析一般情况：对任意 x ∈ ( n + 1 1 ​ , n 1 ​ ] ，有 x − 0 f ( x ) − 0 ​ = x n 1 ​ ​ 由于 n + 1 1 ​ < x ≤ n 1 ​ 可得 1 < x n 1 ​ ​ ≤ n n + 1 ​ 当 n → ∞ 时， n n + 1 ​ → 1 ，由夹逼定理得 x → 0 + lim ​ x f ( x ) − f ( 0 ) ​ = 1 即 f + ′ ​ ( 0 ) = 1 可导性结论 左导数和右导数均为 1，故 f ( x ) 在 x = 0 处可导，导数为 1，排除选项 (C)，选择选项 (D)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n，\nB\n是可逆矩阵，且\nA\n与\nB\n相似，则下列结论错误的是()",
    options: [{ key: "A", text: "A T 与 B T 相似" }, { key: "B", text: "A − 1 与 B − 1 相似" }, { key: "C", text: "A + A T 与 B + B T 相似" }, { key: "D", text: "A + A − 1 与 B + B − 1 相似" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】由 A ∼ B ，存在可逆矩阵 P 使 P − 1 A P = B 。 (1) ( P − 1 A P ) T = B T ⇒ P T A T ( P T ) − 1 = B T ，故 A T ∼ B T ，(A) 正确； (2) ( P − 1 A P ) − 1 = B − 1 ⇒ P − 1 A − 1 P = B − 1 ，故 A − 1 ∼ B − 1 ，(B) 正确； (3) P − 1 ( A + A − 1 ) P = P − 1 A P + P − 1 A − 1 P = B + B − 1 ，故 A + A − 1 ∼ B + B − 1 ，(D) 正确； 对于 (C)， P − 1 ( A + A T ) P = P − 1 A P + P − 1 A T P ，而 P − 1 A T P 未必等于 B T ，故 (C) 错误。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型\nf(x1,x2,x3)=x12+x22+x32+4x1x2+4x1x3+4x2x3\n，则\nf(x1,x2,x3)\n在空间直角坐标下表示的二次曲面为()",
    options: [{ key: "A", text: "单叶双曲面" }, { key: "B", text: "双叶双曲面" }, { key: "C", text: "椭球面" }, { key: "D", text: "柱面" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 二次型的矩阵为 A = ​ 1 2 2 ​ 2 1 2 ​ 2 2 1 ​ ​ 求特征值：由特征方程 ∣ λ E − A ∣ = 0 解得 λ 1 ​ = 5 , λ 2 ​ = λ 3 ​ = − 1 因此，正惯性指数 p = 1 ，负惯性指数 q = 2 。 二次型的规范形为 f = z 1 2 ​ − z 2 2 ​ − z 3 2 ​ 对应曲面方程为 z 1 2 ​ − z 2 2 ​ − z 3 2 ​ = k ( k 为常数 ) 当 k > 0 时，该曲面为 双叶双曲面 。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX∼N(μ,σ2)(σ>0)\n，记\np=P{X≤μ+σ2}\n，则()",
    options: [{ key: "A", text: "p 随着 μ 的增加而增加" }, { key: "B", text: "p 随着 σ 的增加而增加" }, { key: "C", text: "p 随着 μ 的增加而减少" }, { key: "D", text: "p 随着 σ 的增加而减少" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】标准化得 p = P { X ≤ μ + σ 2 } = P { σ X − μ ​ ≤ σ } = Φ ( σ ) ，其中 Φ ( x ) 为标准正态分布的分布函数，单调递增，故 p 随 σ 的增加而增加。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "随机试验\nE\n有三种两两不相容的结果\nA1\n、\nA2\n、\nA3\n，且三种结果发生的概率均为\n31\n。将试验\nE\n独立重复做\n2\n次，\nX\n表示\n2\n次试验中结果\nA1\n发生的次数，\nY\n表示\n2\n次试验中结果\nA2\n发生的次数，则\nX\n与\nY\n的相关系数为（  ）",
    options: [{ key: "A", text: "− 2 1 ​" }, { key: "B", text: "− 3 1 ​" }, { key: "C", text: "3 1 ​" }, { key: "D", text: "2 1 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 已知 X ∼ B ( 2 , 3 1 ​ ) ， Y ∼ B ( 2 , 3 1 ​ ) ，则 E ( X ) = E ( Y ) = 3 2 ​ , D ( X ) = D ( Y ) = 9 4 ​ . 计算 E ( X Y ) ： E ( X Y ) = k = 0 ∑ 2 ​ l = 0 ∑ 2 ​ k l ⋅ P ( X = k , Y = l ) . 仅当 k = l = 1 时非零，此时 P ( X = 1 , Y = 1 ) = C 2 1 ​ ⋅ 3 1 ​ ⋅ 3 2 ​ ⋅ C 1 1 ​ ⋅ 3 1 ​ ⋅ 3 1 ​ = 9 2 ​ , 因此 E ( X Y ) = 1 × 1 × 9 2 ​ = 9 2 ​ . 相关系数为 ρ X Y ​ = D ( X ) D ( Y ) ​ E ( X Y ) − E ( X ) E ( Y ) ​ = 9 4 ​ 9 2 ​ − ( 3 2 ​ ) 2 ​ = − 2 1 ​ ."
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\nx→0lim1−cosx2∫0xtln(1+tsint)dt=",
    answerText: "】 2 1 ​ 【",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 x → 0 lim ​ 1 − cos x 2 ∫ 0 x ​ t ln ( 1 + t sin t ) d t ​ = x → 0 lim ​ 2 x sin x 2 x ln ( 1 + x sin x ) ​ = x → 0 lim ​ 2 x 2 x sin x ​ = 2 1 ​ x → 0 lim ​ x sin x ​ = 2 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）向量场\nA(x,y,z)=(x+y+z)i+xyj+zk\n的旋度\nrotA=\n______。",
    answerText: "】 j + ( y − 1 ) k 【",
    referenceAnswer: "【答案】 j + ( y − 1 ) k 【解析】 rot A = ​ i ∂ x ∂ ​ x + y + z ​ j ∂ y ∂ ​ x y ​ k ∂ z ∂ ​ z ​ ​ = j + ( y − 1 ) k",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(u,v)\n可微,\nz=z(x,y)\n由方程\n(x+1)z−y2=x2f(x−z,y)\n确定,则\ndz∣(0,1)=",
    answerText: "】 d z ∣ ( 0 , 1 ) ​ = − d x + 2 d y 【",
    referenceAnswer: "【答案】 d z ∣ ( 0 , 1 ) ​ = − d x + 2 d y 【解析】 已知方程 ( x + 1 ) z − y 2 = x 2 f ( x − z , y ) 两边分别关于 x 、 y 求偏导： 关于 x 求偏导： z + ( x + 1 ) z x ′ ​ = 2 x f ( x − z , y ) + x 2 f 1 ′ ​ ( x − z , y ) ⋅ ( 1 − z x ′ ​ ) 关于 y 求偏导： ( x + 1 ) z y ′ ​ − 2 y = x 2 [ f 1 ′ ​ ( x − z , y ) ⋅ ( − z y ′ ​ ) + f 2 ′ ​ ( x − z , y ) ] 将 x = 0 ， y = 1 ， z = 1 代入上述两式，可得 d z ∣ ( 0 , 1 ) ​ = − d x + 2 d y",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(x)=arctanx−1+ax2x\n，且\nf′′(0)=1\n，则\na=",
    answerText: "】 a = 2 1 ​ 【",
    referenceAnswer: "【答案】 a = 2 1 ​ 【解析】 【解析】 f ′ ( x ) = 1 + x 2 1 ​ − ( 1 + a x 2 ) 2 1 − a x 2 ​ f ′′ ( x ) = ( 1 + x 2 ) 2 − 2 x ​ − ( 1 + a x 2 ) 3 2 a 2 x 3 − 6 a x ​ f ′′′ ( x ) = ( 1 + x 2 ) 3 6 x 2 − 2 ​ + ( 1 + a x 2 ) 4 ( 6 a − 6 a 2 x 2 ) ( 1 + a x 2 ) − 6 a x ( 6 a x − 2 a 2 x 3 ) ​ 因此， f ′′′ ( 0 ) = − 2 + 6 a = 1 ，从而得 a = 2 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）行列式\n\nλ004−1λ030−1λ200−1λ+1=",
    answerText: "】 λ 4 + λ 3 + 2 λ 2 + 3 λ + 4 【",
    referenceAnswer: "【答案】 λ 4 + λ 3 + 2 λ 2 + 3 λ + 4 【解析】 ​ λ 0 0 4 ​ − 1 λ 0 3 ​ 0 − 1 λ 2 ​ 0 0 − 1 λ + 1 ​ ​ = λ ​ λ 0 3 ​ − 1 λ 2 ​ 0 − 1 λ + 1 ​ ​ + 4 × ( − 1 ) 4 + 1 ​ − 1 λ 0 ​ 0 − 1 λ ​ 0 0 − 1 ​ ​ = λ 4 + λ 3 + 2 λ 2 + 3 λ + 4",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nx1,x2,…,xn\n为来自总体\nN(μ,σ2)\n的简单随机样本，样本均值\nx=9.5\n，参数\nμ\n的置信度为\n0.95\n的双侧置信区间的置信上限为\n10.8\n，则\nμ\n的置信度为\n0.95\n的双侧置信区间为______。",
    answerText: "】 (8.2, 10.8) 【",
    referenceAnswer: "【答案】 (8.2, 10.8) 【解析】 P { − u 0.025 ​ < n ​ σ ​ x − μ ​ < u 0.025 ​ } = P { x − u 0.025 ​ n ​ σ ​ < μ < x + u 0.025 ​ n ​ σ ​ } = 0.95 。 因为 x + u 0.025 ​ n ​ σ ​ = 10.8 ，所以 u 0.025 ​ n ​ σ ​ = 1.3 。 因此，置信下限 x − u 0.025 ​ n ​ σ ​ = 8.2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知平面区域\nD={(r,θ)2≤r≤2(1+cosθ),−2π≤θ≤2π}\n，计算二重积分\n∬Dxdxdy\n。",
    referenceAnswer: "【答案】 5 π + 3 32 ​ 【解析】 D ∬ ​ x d x d y = ∫ − 2 π ​ 2 π ​ ​ d θ ∫ 2 2 ( 1 + c o s θ ) ​ r 2 cos θ d r = ∫ − 2 π ​ 2 π ​ ​ cos θ ⋅ 3 r 3 ​ ​ 2 2 ( 1 + c o s θ ) ​ d θ = 3 8 ​ ∫ − 2 π ​ 2 π ​ ​ ( 3 cos 2 θ + 3 cos 3 θ + cos 4 θ ) d θ = 8 ∫ − 2 π ​ 2 π ​ ​ cos 2 θ d θ + 8 ∫ − 2 π ​ 2 π ​ ​ cos 3 θ d θ + 3 8 ​ ∫ − 2 π ​ 2 π ​ ​ cos 4 θ d θ = 8 ∫ − 2 π ​ 2 π ​ ​ 2 cos 2 θ + 1 ​ d θ + 8 ∫ − 2 π ​ 2 π ​ ​ ( 1 − sin 2 θ ) d sin θ + 3 8 ​ ∫ − 2 π ​ 2 π ​ ​ cos 3 θ d sin θ = 4 ( 2 sin 2 θ ​ + θ ) ​ − 2 π ​ 2 π ​ ​ + 8 ( sin θ − 3 sin 3 θ ​ ) ​ − 2 π ​ 2 π ​ ​ + 3 8 ​ ∫ − 2 π ​ 2 π ​ ​ 3 sin 2 θ cos 2 θ d θ = 4 π + 3 32 ​ − 2 ∫ − 2 π ​ 2 π ​ ​ sin 2 2 θ d θ = 5 π + 3 32 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-009', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）设函数\ny(x)\n满足方程\ny′′+2y′+ky=0\n，其中\n0k1\n。\n\n(Ⅰ) 证明：反常积分\n∫0∞y(x)dx\n收敛；\n\n(Ⅱ) 若\ny(0)=1\n，\ny′(0)=1\n，求\n∫0∞y(x)dx\n的值。",
    referenceAnswer: "【答案】 (Ⅰ) 见解析 (Ⅱ) \\[\\frac{3}{k} \\] 【解析】 (Ⅰ) 证明反常积分 ∫ 0 ∞ ​ y ( x ) d x 收敛。 给定微分方程 y ′′ + 2 y ′ + k y = 0 , 其中 0 < k < 1 。 特征方程为 r 2 + 2 r + k = 0 , 判别式为 Δ = 4 − 4 k = 4 ( 1 − k ) > 0 ( 因为 0 < k < 1 ) , 故特征根为两个不同的实根： r = − 1 ± 1 − k ​ . 由于 0 < k < 1 ，有 1 − k ​ > 0 ，且 1 − k ​ < 1 ，因此 r 1 ​ = − 1 + 1 − k ​ < 0 , r 2 ​ = − 1 − 1 − k ​ < 0. 微分方程的通解为 y ( x ) = C 1 ​ e r 1 ​ x + C 2 ​ e r 2 ​ x , 其中 C 1 ​ 和 C 2 ​ 为常数。 由于 r 1 ​ < 0 和 r 2 ​ < 0 ，当 x → ∞ 时， y ( x ) ∼ e r x ( r < 0 ) ，即 y ( x ) 指数衰减。 因此，反常积分 ∫ 0 ∞ ​ y ( x ) d x 收敛。 (Ⅱ) 方法一：直接积分法 设 I = ∫ 0 ∞ ​ y ( x ) d x . 由通解形式： y ( x ) = C 1 ​ e r 1 ​ x + C 2 ​ e r 2 ​ x , 计算积分： I = ∫ 0 ∞ ​ ( C 1 ​ e r 1 ​ x + C 2 ​ e r 2 ​ x ) d x = − r 1 ​ C 1 ​ ​ − r 2 ​ C 2 ​ ​ . 利用初始条件： y ( 0 ) = C 1 ​ + C 2 ​ = 1 , y ′ ( 0 ) = r 1 ​ C 1 ​ + r 2 ​ C 2 ​ = 1 , 解得： C 1 ​ = r 1 ​ − r 2 ​ 1 − r 2 ​ ​ , C 2 ​ = r 1 ​ − r 2 ​ r 1 ​ − 1 ​ . 代入 I 得： I = − r 1 ​ − r 2 ​ 1 ​ ( r 1 ​ 1 − r 2 ​ ​ + r 2 ​ r 1 ​ − 1 ​ ) . 计算括号内表达式： r 1 ​ 1 − r 2 ​ ​ + r 2 ​ r 1 ​ − 1 ​ = r 1 ​ 1 ​ − r 1 ​ r 2 ​ ​ + r 2 ​ r 1 ​ ​ − r 2 ​ 1 ​ = ( r 1 ​ 1 ​ − r 2 ​ 1 ​ ) + ( r 2 ​ r 1 ​ ​ − r 1 ​ r 2 ​ ​ ) . 利用根与系数关系： r 1 ​ + r 2 ​ = − 2 , r 1 ​ r 2 ​ = k , 进一步化简得： I = k 3 ​ . 方法二：积分微分方程法 对原方程两边从 0 到 ∞ 积分： ∫ 0 ∞ ​ y ′′ ( x ) d x + 2 ∫ 0 ∞ ​ y ′ ( x ) d x + k ∫ 0 ∞ ​ y ( x ) d x = 0. 计算各项： ∫ 0 ∞ ​ y ′ ( x ) d x = [ y ( x ) ] 0 ∞ ​ = y ( ∞ ) − y ( 0 ) = 0 − 1 = − 1 , ∫ 0 ∞ ​ y ′′ ( x ) d x = [ y ′ ( x ) ] 0 ∞ ​ = y ′ ( ∞ ) − y ′ ( 0 ) = 0 − 1 = − 1. 设 I = ∫ 0 ∞ ​ y ( x ) d x ，代入得： − 1 + 2 ( − 1 ) + k I = 0 ⇒ − 3 + k I = 0 ⇒ I = k 3 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数\nf(x,y)\n满足\n\n∂x∂f(x,y)=(2x+1)e2x−y\n\n且\nf(0,y)=y+1\n，\nLt\n是从点\n(0,0)\n到点\n(1,t)\n的光滑曲线，计算曲线积分\n\nI(t)=∫Lt∂x∂f(x,y)dx+∂y∂f(x,y)dy,\n\n并求\nI(t)\n的最小值。",
    referenceAnswer: "【答案】 曲线积分 I ( t ) = t + e 2 − t ，当 t = 2 时取得最小值 3 。 【解析】 (1) 由 ∂ x ∂ f ( x , y ) ​ = ( 2 x + 1 ) e 2 x − y 可知： f ( x , y ) = ∫ ( 2 x + 1 ) e 2 x − y d x = e − y [ ∫ 2 x e 2 x d x + ∫ e 2 x d x ] = e − y ⋅ x e 2 x + φ ( y ) = x e 2 x − y + φ ( y ) 又 f ( 0 , y ) = y + 1 ，可知 φ ( y ) = y + 1 。 因此： f ( x , y ) = x e 2 x − y + y + 1 ∂ y ∂ f ( x , y ) ​ = − x e 2 x − y + 1 I ( t ) = ∫ L t ​ ​ ( 2 x + 1 ) e 2 x − y d x + ( 1 − x e 2 x − y ) d y 令 P = ( 2 x + 1 ) e 2 x − y ， Q = 1 − x e 2 x − y ，则： ∂ y ∂ P ​ = − ( 2 x + 1 ) e 2 x − y , ∂ x ∂ Q ​ = − e 2 x − y − 2 x e 2 x − y 因 ∂ y ∂ P ​ = ∂ x ∂ Q ​ ，故积分与路径无关。 I ( t ) = ∫ L t ​ ​ ( 2 x + 1 ) e 2 x − y d x + ( 1 − x e 2 x − y ) d y = ∫ 0 1 ​ ( 2 x + 1 ) e 2 x d x + ∫ 0 t ​ ( 1 − e 2 − y ) d y = e 2 + t + e 2 − t − e 2 = t + e 2 − t (2) I ( t ) = t + e 2 − t I ′ ( t ) = 1 − e 2 − t 令 I ′ ( t ) = 0 ，可知 t = 2 （有唯一驻点）。 又 I ′′ ( t ) = e 2 − t ，则 I ′′ ( 2 ) = 1 > 0 。 因此 t = 2 时， I ( t ) 有最小值，且： I ( 2 ) = 2 + e 2 − 2 = 2 + 1 = 3",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设有界区域\nΩ\n由平面\n2x+y+2z=2\n与三个坐标平面围成，\n∑\n为\nΩ\n整个表面的外侧，计算曲面积分\nI=∬∑(x2+1)dydz−2ydzdx+3zdxdy\n。",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 【解析】 设曲面积分 I = ∬ Σ ​ ( x 2 + 1 ) d y d z − 2 y d z d x + 3 z d x d y 令 P = x 2 + 1 ， Q = − 2 y ， R = 3 z 。 由高斯公式可得： I = ∭ Ω ​ ( ∂ x ∂ P ​ + ∂ y ∂ Q ​ + ∂ z ∂ R ​ ) d x d y d z 计算偏导数： ∂ x ∂ P ​ = 2 x , ∂ y ∂ Q ​ = − 2 , ∂ z ∂ R ​ = 3 代入得： I = ∭ Ω ​ ( 2 x − 2 + 3 ) d x d y d z = ∭ Ω ​ ( 2 x + 1 ) d x d y d z 积分区域 Ω 由平面 x + 2 y + 2 z = 2 与坐标面围成，投影到 x y 平面为区域 D x y ​ ，其中 z 的范围为 0 ≤ z ≤ 1 − x − 2 y ​ 。 于是： I = ∬ D x y ​ ​ [ ∫ 0 1 − x − 2 y ​ ​ ( 2 x + 1 ) d z ] d x d y 计算内层积分： ∫ 0 1 − x − 2 y ​ ​ ( 2 x + 1 ) d z = ( 2 x + 1 ) ( 1 − x − 2 y ​ ) 展开得： ( 2 x + 1 ) ( 1 − x − 2 y ​ ) = 2 x 2 + x − x y − 2 y ​ 因此： I = ∬ D x y ​ ​ ( 2 x 2 + x − x y − 2 y ​ ) d x d y 区域 D x y ​ 由 x = 0 ， y = 0 及 x + 2 y = 1 围成，即 0 ≤ x ≤ 1 ， 0 ≤ y ≤ 1 − 2 x 。 于是： I = ∫ 0 1 ​ ∫ 0 1 − 2 x ​ ( 2 x 2 + x − x y − 2 y ​ ) d y d x 先对 y 积分： ∫ 0 1 − 2 x ​ ( 2 x 2 + x − x y − 2 y ​ ) d y = [ ( 2 x 2 + x ) y − 2 1 ​ x y 2 − 4 1 ​ y 2 ] 0 1 − 2 x ​ 代入上限 y = 1 − 2 x ，下限 y = 0 得： ( 2 x 2 + x ) ( 1 − 2 x ) − 2 1 ​ x ( 1 − 2 x ) 2 − 4 1 ​ ( 1 − 2 x ) 2 展开并化简后，对 x 从 0 到 1 积分，最终结果为： I = 2 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n已知函数\nf(x)\n可导，且\nf(0)=1\n，\n0f′(x)21\n，设数列\n{xn}\n满足\nxn+1=f(xn)(n=1,2⋯)\n，证明：\n\n（I）级数\n∑n=1∞(xn+1−xn)\n绝对收敛；\n\n（II）\nlimn→∞xn\n存在，且\n0limn→∞xn2\n 。",
    referenceAnswer: "【答案】 见解析 【解析】 【证明】(1) x n + 1 ​ = f ( x n ​ ) ∣ x n + 1 ​ − x n ​ ∣ ​ = ∣ f ( x n ​ ) − f ( x n − 1 ​ ) ∣ = ∣ f ′ ( ξ ) ( x n ​ − x n − 1 ​ ) ∣ < 2 1 ​ ∣ x n ​ − x n − 1 ​ ∣ = 2 1 ​ ∣ f ( x n − 1 ​ ) − f ( x n − 2 ​ ) ∣ ​ 显然， ∑ n = 1 ∞ ​ 2 n − 1 1 ​ ∣ x 2 ​ − x 1 ​ ∣ 收敛，因此， ∑ n = 1 ∞ ​ ( x n + 1 ​ − x n ​ ) 绝对收敛; (2) ∑ n = 1 ∞ ​ ( x n + 1 ​ − x n ​ ) 的前 n 项和记为 S n ​ 易知， S n ​ = x n + 1 ​ − x 1 ​ ，由第一问可知 S n ​ 极限存在，因此 lim n → ∞ ​ x n ​ = A 存在 x n + 1 ​ = f ( x n ​ ) = f ( x n ​ ) − f ( 0 ) + 1 = f ′ ( ξ ) x n ​ + 1 （*） i）由已知 0 < f ′ ( x ) < 2 1 ​ ，易知 x n + 1 ​ = f ′ ( ξ ) x n ​ + 1 < 2 1 ​ x n ​ = 1 不等式两边取极限，可知 A < 2 1 ​ A + 1 ，即 A < 2 ； ii）若 A = 0 ，则（*）矛盾； iii）若 A < 0 ，则由（*）可知 ( 1 − f ′ ( ξ )) A = 1 ，而 0 < f ′ ( x ) < 2 1 ​ ，显然矛盾 综上， 0 < A < 2",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设矩阵\n\nA=12−1−1a1−11a,B=21−a−12a−2\n\n当\na\n为何值时，方程\nAX=B\n无解、有唯一解、有无穷多解？",
    referenceAnswer: "【答案】 当 a  = 1 且 a  = − 2 时，方程有唯一解； 当 a = − 2 时，方程无解； 当 a = 1 时，方程有无穷多解。 【解析】 【解析】对 A X = B 的增广阵做初等变换： ( A , B ) → ​ 1 0 0 ​ − 1 a + 2 0 ​ − 1 3 a − 1 ​ 2 − 3 1 − a ​ 2 a − 4 0 ​ ​ 当 ∣ A ∣  = 0 ，即 a  = 1 且 a  = − 2 时，方程组有唯一解。 当 ∣ A ∣ = 0 时， a = 1 或 a = − 2 ： 当 a = − 2 时，代入得矛盾方程，方程组无解。 当 a = 1 时，代入得 r ( A ) < 3 ，故方程组有无穷多解。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知矩阵\n\nA=020−1−30100\n\n（I）求\nA99\n。\n\n（II）设 3 阶矩阵\nB=(α1,α2,α3)\n满足\nB2=BA\n，记\nB100=(β1,β2,β3)\n，将\nβ1,β2,β3\n分别表示为\nα1,α2,α3\n的线性组合。",
    referenceAnswer: "【答案】 （I） A 99 = ​ − 2 + 2 99 − 2 + 2 100 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 98 2 − 2 99 0 ​ ​ （II） β 1 ​ β 2 ​ β 3 ​ ​ = ( − 2 + 2 99 ) α 1 ​ + ( − 2 + 2 100 ) α 2 ​ , = ( 1 − 2 99 ) α 1 ​ + ( 1 − 2 100 ) α 2 ​ , = ( 2 − 2 98 ) α 1 ​ + ( 2 − 2 99 ) α 2 ​ . ​ 【解析】 (1) 利用相似对角化，由特征方程 ∣ λ E − A ∣ = 0 得 A 的特征值为 λ 1 ​ = 0 , λ 2 ​ = − 1 , λ 3 ​ = − 2 , 于是 A ∼ Λ = ​ 0 ​ − 1 ​ − 2 ​ ​ 。 当 λ 1 ​ = 0 时，由 ( 0 E − A ) x = 0 解得属于 λ 1 ​ = 0 的特征向量为 γ 1 ​ = ​ 3 2 2 ​ ​ ; 当 λ 2 ​ = − 1 时，由 ( − E − A ) x = 0 解得属于 λ 2 ​ = − 1 的特征向量为 γ 2 ​ = ​ 1 1 0 ​ ​ ; 当 λ 3 ​ = − 2 时，由 ( − 2 E − A ) x = 0 解得属于 λ 3 ​ = − 2 的特征向量为 γ 3 ​ = ​ 1 2 0 ​ ​ . 取可逆矩阵 P = ( γ 1 ​ , γ 2 ​ , γ 3 ​ ) = ​ 3 2 2 ​ 1 1 0 ​ 1 2 0 ​ ​ , 则有 P − 1 A P = Λ ，即 A = P Λ P − 1 。于是 A 99 = P Λ 99 P − 1 . 计算可得 A 99 = ​ − 2 + 2 99 − 2 + 2 100 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 98 2 − 2 99 0 ​ ​ . (2) 由 B 2 = B A 可得 B 3 = B 2 A = B A 2 , 依此类推，有 B 100 = B A 99 . 已知 B = ( α 1 ​ , α 2 ​ , α 3 ​ ) ，且 B 100 = ( β 1 ​ , β 2 ​ , β 3 ​ ) ，因此 ( β 1 ​ , β 2 ​ , β 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) A 99 = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ − 2 + 2 99 − 2 + 2 100 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 98 2 − 2 99 0 ​ ​ . 于是可得 β 1 ​ β 2 ​ β 3 ​ ​ = ( − 2 + 2 99 ) α 1 ​ + ( − 2 + 2 100 ) α 2 ​ , = ( 1 − 2 99 ) α 1 ​ + ( 1 − 2 100 ) α 2 ​ , = ( 2 − 2 98 ) α 1 ​ + ( 2 − 2 99 ) α 2 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n在区域\nD={(x,y)∣0x1,x2yx}\n上服从均匀分布，令\n\nU={1,0,X≤YX>Y\n\n（Ⅰ）写出\n(X,Y)\n的概率密度；\n\n（Ⅱ）问\nU\n与\nX\n是否相互独立？并说明理由；\n\n（Ⅲ）求\nZ=U+X\n的分布函数\nF(z)\n。",
    referenceAnswer: "【答案】 （Ⅰ） ( X , Y ) 的概率密度为 f ( x , y ) = { 3 , 0 , ​ 0 < x < 1 , x 2 < y < x ​ , 其他 . ​ （Ⅱ） U 与 X 不相互独立。理由： P { U ≤ 2 1 ​ } = 2 1 ​ , P { X ≤ 2 1 ​ } = 2 1 ​ , 但 P { U ≤ 2 1 ​ , X ≤ 2 1 ​ }  = P { U ≤ 2 1 ​ } P { X ≤ 2 1 ​ } , 因此不独立。 （Ⅲ） Z = U + X 的分布函数为 F Z ​ ( z ) = ⎩ ⎨ ⎧ ​ 0 , 2 3 ​ z 2 − z 3 , 2 1 ​ + 2 ( z − 1 ) 3/2 − 2 3 ​ ( z − 1 ) 2 , 1 , ​ z < 0 , 0 ≤ z < 1 , 1 ≤ z < 2 , z ≥ 2. ​ 【解析】 (1) 区域 D 的面积为 s ( D ) = ∫ 0 1 ​ ( x ​ − x 2 ) d x = 3 1 ​ . 由于 ( X , Y ) 服从区域 D 上的均匀分布，因此 f ( x , y ) = { 3 , 0 , ​ 0 < x < 1 , x 2 < y < x ​ , 其他 . ​ (2) U 与 X 不独立。理由如下： P { U ≤ 2 1 ​ } = 2 1 ​ , P { X ≤ 2 1 ​ } = 2 1 ​ , 但 P { U ≤ 2 1 ​ , X ≤ 2 1 ​ }  = P { U ≤ 2 1 ​ } P { X ≤ 2 1 ​ } , 因此 U 与 X 不独立。 (3) F Z ​ ( z ) ​ = P { U + X ≤ z } = P { U + X ≤ z ∣ U = 0 } P { U = 0 } + P { U + X ≤ z ∣ U = 1 } P { U = 1 } . ​ 即 F Z ​ ( z ) = P { X ≤ z , X > Y } + P { 1 + X ≤ z , X ≤ Y } . 其中 P { X ≤ z , X > Y } = ⎩ ⎨ ⎧ ​ 0 , 2 3 ​ z 2 − z 3 , 2 1 ​ , ​ z < 0 , 0 ≤ z < 1 , z ≥ 1 , ​ P { X + 1 ≤ z , X ≤ Y } = ⎩ ⎨ ⎧ ​ 0 , 2 ( z − 1 ) 3/2 − 2 3 ​ ( z − 1 ) 2 , 2 1 ​ , ​ z < 1 , 1 ≤ z < 2 , z ≥ 2. ​ 因此 F Z ​ ( z ) = ⎩ ⎨ ⎧ ​ 0 , 2 3 ​ z 2 − z 3 , 2 1 ​ + 2 ( z − 1 ) 3/2 − 2 3 ​ ( z − 1 ) 2 , 1 , ​ z < 0 , 0 ≤ z < 1 , 1 ≤ z < 2 , z ≥ 2. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率密度为\n\nf(x,θ)=⎩⎨⎧θ33x2,0,0xθ其他\n\n其中\nθ∈(0,+∞)\n为未知参数，\nX1,X2,X3\n为来自总体\nX\n的简单随机样本，令\nT=max{X1,X2,X3}\n。\n\n(1) 求\nT\n的概率密度\n\n(2) 确定\na\n，使得\naT\n为\nθ\n的无偏估计",
    referenceAnswer: "【答案】 (1) T 的概率密度函数为 f T ​ ( t ) = ⎩ ⎨ ⎧ ​ θ 9 9 t 8 ​ , 0 , ​ 0 < t < θ 其他 ​ (2) a = 9 10 ​ 【解析】 （1） 由题意， X 1 ​ , X 2 ​ , X 3 ​ 独立同分布， T = max ( X 1 ​ , X 2 ​ , X 3 ​ ) 的分布函数为 F T ​ ( t ) ​ = P { max ( X 1 ​ , X 2 ​ , X 3 ​ ) ≤ t } = P { X 1 ​ ≤ t , X 2 ​ ≤ t , X 3 ​ ≤ t } = P { X 1 ​ ≤ t } ⋅ P { X 2 ​ ≤ t } ⋅ P { X 3 ​ ≤ t } = [ P { X 1 ​ ≤ t } ] 3 ​ 当 t < 0 时， F T ​ ( t ) = 0 ； 当 0 < t < θ 时， F T ​ ( t ) = [ ∫ 0 t ​ θ 3 3 x 2 ​ d x ] 3 = ( θ 3 t 3 ​ ) 3 = θ 9 t 9 ​ 当 t ≥ θ 时， F T ​ ( t ) = 1 。 对 F T ​ ( t ) 求导，得概率密度函数： f T ​ ( t ) = ⎩ ⎨ ⎧ ​ θ 9 9 t 8 ​ , 0 , ​ 0 < t < θ 其他 ​ （2） 计算 E ( a T ) ： E ( a T ) ​ = a E ( T ) = a ∫ 0 θ ​ t ⋅ θ 9 9 t 8 ​ d t = θ 9 9 a ​ ∫ 0 θ ​ t 9 d t = θ 9 9 a ​ ⋅ 10 θ 10 ​ = 10 9 a ​ θ ​ 若 a T 为 θ 的无偏估计，则需满足 E ( a T ) = θ 即 10 9 a ​ θ = θ ⇒ a = 9 10 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2016_math1 = {
  id: P, year: Y,
  title: '2016 年全国硕士研究生招生考试 数学（一）',
  short: '2016 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2016_math1.length,
  qids: questions2016_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
