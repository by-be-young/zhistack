const P = 'paper-2016-math3'
const Y = 2016
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2016-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2016 考研数学（三）真题',
  ...extra
})

export const questions2016_math3 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n在\n(−∞,+∞)\n内连续, 其导函数\nf′(x)\n的图形如下所示, 则",
    options: [{ key: "A", text: "函数 f ( x ) 有 2 个极值点, 曲线 y = f ( x ) 有 2 个拐点." }, { key: "B", text: "函数 f ( x ) 有 2 个极值点, 曲线 y = f ( x ) 有 3 个拐点." }, { key: "C", text: "函数 f ( x ) 有 3 个极值点, 曲线 y = f ( x ) 有 1 个拐点." }, { key: "D", text: "函数 f ( x ) 有 3 个极值点, 曲线 y = f ( x ) 有 2 个拐点." }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 设 f ′ ( x ) 与 x 轴的交点为 x 1 ​ , x 2 ​ , x 3 ​ (从左到右)。 由图可知，在 x 1 ​ , x 2 ​ 左右两侧 f ′ ( x ) 异号，因此 f ( x ) 在 x 1 ​ , x 2 ​ 处均取得极值。 从图中可以看出， f ′ ( x ) 有两个转折点 x 4 ​ , x 5 ​ (从左到右)，并且在 x 4 ​ , x 5 ​ 左右两侧 f ′′ ( x ) 异号，因此 x 4 ​ , x 5 ​ 即为 f ( x ) 的两个拐点。 值得注意的是， x = 1 也是 f ( x ) 的拐点，虽然 f ( x ) 在 x = 1 处无定义，但当 x < 1 时， f ′′ ( x ) < 0 ，当 1 < x < x 4 ​ 时， f ′′ ( x ) > 0 ，因此 x = 1 是 f ( x ) 的拐点，即 f ( x ) 一共有 3个拐点 。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数\nf(x,y)=x−yex\n，则",
    options: [{ key: "A", text: "f x ′ ​ − f y ′ ​ = 0" }, { key: "B", text: "f x ′ ​ + f y ′ ​ = 0" }, { key: "C", text: "f x ′ ​ − f y ′ ​ = f" }, { key: "D", text: "f x ′ ​ + f y ′ ​ = f" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 f x ′ ​ = ( x − y ) 2 e x ( x − y ) − e x ​ f y ′ ​ = ( x − y ) 2 e x ​ 因此 f x ′ ​ + f y ′ ​ = f ."
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nJi=∬Dix−ydxdy(i=1,2,3)\n，其中\n\nD1={(x,y)∣0≤x≤1,0≤y≤1},\n\nD2={(x,y)∣0≤x≤1,0≤y≤x},\n\nD3={(x,y)∣0≤x≤1,x2≤y≤1},\n\n则",
    options: [{ key: "A", text: "J 1 ​ < J 2 ​ < J 3 ​ ." }, { key: "B", text: "J 3 ​ < J 1 ​ < J 2 ​ ." }, { key: "C", text: "J 2 ​ < J 3 ​ < J 1 ​ ." }, { key: "D", text: "J 2 ​ < J 1 ​ < J 3 ​ ." }],
    answer: ["B"],
    explain: "正确答案： B 【解析】因为 D 1 ​ 关于 y = x 对称，所以由轮换对称性得 J 1 ​ = ∬ D 1 ​ ​ 3 x − y ​ d x d y = ∬ D 1 ​ ​ 3 y − x ​ d x d y , 故 J 1 ​ = 0 ； 令 D 0 ​ = {( x , y ) ∣ 0 ≤ x ≤ 1 , y 2 ≤ y ≤ x ​ } ， 因为 D 0 ​ 关于 y = x 对称，所以由轮换对称性得 J 0 ​ = 0 ， 则 J 2 ​ J 3 ​ ​ = ∬ D 2 ​ ​ 3 x − y ​ d x d y = ∬ D 0 ​ ​ 3 x − y ​ d x d y + ∬ D 2 ​ ∖ D 0 ​ ​ 3 x − y ​ d x d y = ∬ D 2 ​ ∖ D 0 ​ ​ 3 x − y ​ d x d y > 0 , = ∬ D 3 ​ ​ 3 x − y ​ d x d y = ∬ D 0 ​ ​ 3 x − y ​ d x d y + ∬ D 3 ​ ∖ D 0 ​ ​ 3 x − y ​ d x d y = ∬ D 3 ​ ∖ D 0 ​ ​ 3 x − y ​ d x d y < 0 , ​ 从而 J 3 ​ < J 1 ​ < J 2 ​ 。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "级数\n∑n=1∞nsin(n)+C\n（\nC\n为常数）为（ ）",
    options: [{ key: "A", text: "绝对收敛" }, { key: "B", text: "条件收敛" }, { key: "C", text: "发散" }, { key: "D", text: "收敛性与 C 有关" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 ​ ( n ​ 1 ​ − n + 1 ​ 1 ​ ) sin ( n + k ) ​ ≤ n ​ 1 ​ − n + 1 ​ 1 ​ , 令 S n ​ ​ = i = 1 ∑ n ​ ( i ​ 1 ​ − i + 1 ​ 1 ​ ) = 1 − 2 ​ 1 ​ + 2 ​ 1 ​ − 3 ​ 1 ​ + ⋯ + n ​ 1 ​ − n + 1 ​ 1 ​ = 1 − n + 1 ​ 1 ​ , ​ 则 n → ∞ lim ​ S n ​ = 1 , 故级数 n = 1 ∑ ∞ ​ ( n ​ 1 ​ − n + 1 ​ 1 ​ ) 收敛，因此级数 n = 1 ∑ ∞ ​ ( n ​ 1 ​ − n + 1 ​ 1 ​ ) sin ( n + k ) 绝对收敛。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA,B\n是可逆矩阵，且\nA\n与\nB\n相似，则下列结论 错误 的是：",
    options: [{ key: "A", text: "A T 与 B T 相似" }, { key: "B", text: "A − 1 与 B − 1 相似" }, { key: "C", text: "A + A − 1 与 B + B − 1 相似" }, { key: "D", text: "A + A T 与 B + B T 相似" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 A 与 B 相似，则存在可逆矩阵 P 使得 P − 1 A P = B 。 两边同时取逆得 P − 1 A − 1 P = B − 1 ，因此 P − 1 ( A + A − 1 ) P = B + B − 1 , 从而 A − 1 与 B − 1 相似， A + A − 1 与 B + B − 1 相似。 P − 1 A P = B 两边同时取转置得 P T A T ( P T ) − 1 = B T ，显然 A T 与 B T 相似，但 A + A T 与 B + B T 不相似。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型\nf(x1,x2,x3)=a(x12+x22+x32)+2x1x2+2x1x3+2x2x3\n的正、负惯性指数分别为 1, 2, 则",
    options: [{ key: "A", text: "a > 1 ." }, { key: "B", text: "a < − 2 ." }, { key: "C", text: "− 2 < a < 1 ." }, { key: "D", text: "a = 1 或 a = − 2 ." }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 二次型 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的系数矩阵为 A = ​ a 1 1 ​ 1 a 1 ​ 1 1 a ​ ​ . 矩阵 A 的特征方程为 ∣ λ E − A ∣ = ( λ − a − 2 ) ( λ − a + 1 ) 2 = 0 , 故其特征值为 λ 1 ​ = λ 2 ​ = a − 1 , λ 3 ​ = a + 2. 若二次型的正、负惯性指数分别为 1 , 2 ，则 { a + 2 > 0 , a − 1 < 0 , ​ 解得 − 2 < a < 1."
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA,B\n为两个随机事件, 且\n0P(A)1,0P(B)1\n. 如果\nP(A∣B)=1\n, 则",
    options: [{ key: "A", text: "P ( B ∣ A ) = 1 ." }, { key: "B", text: "P ( A ∣ B ) = 0 ." }, { key: "C", text: "P ( A ∪ B ) = 1 ." }, { key: "D", text: "P ( B ∣ A ) = 1 ." }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 由 P ( A ∣ B ) = 1 可知 B ⊆ A ，则 A ˉ ⊆ B ˉ ，从而 P ( B ˉ ∣ A ˉ ) = 1 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立, 且\nX∼N(1,2),Y∼N(1,4)\n, 则\nD(XY)=",
    options: [{ key: "A", text: "6" }, { key: "B", text: "8" }, { key: "C", text: "14" }, { key: "D", text: "15" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】由题意可得 E ( X ) = E ( Y ) = 1 , D ( X ) = 2 , D ( Y ) = 4 . 由随机变量 X 与 Y 相互独立, 得 E ( X Y ) = E ( X ) E ( Y ) = 1 , E ( X 2 ) = D ( X ) + E 2 ( X ) = 3 , E ( Y 2 ) = D ( Y ) + E 2 ( Y ) = 5 , 故 D ( X Y ) = E ( X 2 Y 2 ) − E 2 ( X Y ) = E ( X 2 ) E ( Y 2 ) − [ E ( X ) E ( Y ) ] 2 = 14 ."
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知函数\nf(x)\n满足\nlimx→0e3x−11+f(x)sin2x−1=2\n，则\nlimx→0f(x)=\n.",
    answerText: "】 6 【",
    referenceAnswer: "【答案】 6 【解析】 x → 0 lim ​ e 3 x − 1 1 + f ( x ) sin 2 x ​ − 1 ​ = x → 0 lim ​ 3 x 2 1 ​ f ( x ) sin 2 x ​ = 3 1 ​ x → 0 lim ​ f ( x ) = 2 , 则 x → 0 lim ​ f ( x ) = 6.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-001', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）极限\nlimn→∞n1(sinn1+2sinn2+⋯+nsinnn)=\n.",
    answerText: "】 sin 1 − cos 1 【",
    referenceAnswer: "【答案】 sin 1 − cos 1 【解析】 原式可写为 n → ∞ lim ​ n 1 ​ k = 1 ∑ n ​ n k ​ sin n k ​ . 由定积分定义， n → ∞ lim ​ n 1 ​ k = 1 ∑ n ​ n k ​ sin n k ​ = ∫ 0 1 ​ x sin x d x . 计算得 ∫ 0 1 ​ x sin x d x = sin 1 − cos 1.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(u,v)\n可微，\nz=z(x,y)\n由方程\n(x+1)z−y2=x2f(x−z,y)\n确定，则\ndz∣(0,1)=\n.",
    answerText: "】 − d x + 2 d y 【",
    referenceAnswer: "【答案】 − d x + 2 d y 【解析】 将 x = 0 , y = 1 代入题中所给方程, 得 z = 1 .\n方程两边同时对 x 求偏导, 得 z + ( x + 1 ) z x ​ = 2 x f ( u , v ) + x 2 f 1 ′ ​ ⋅ ( 1 − z x ​ ) 将点 ( 0 , 1 , 1 ) 代入其中得 z x ​ ∣ ( 0 , 1 ) ​ = − 1 ; 方程两边同时对 y 求偏导, 得 ( x + 1 ) z y ​ − 2 y = x 2 [ f 1 ′ ​ ⋅ ( − z y ​ ) + f 2 ′ ​ ] , 将点 ( 0 , 1 , 1 ) 代入其中得 z y ​ ∣ ( 0 , 1 ) ​ = 2 , 因此, d z ∣ ( 0 , 1 ) ​ = − d x + 2 d y .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nD={(x,y)∣∣x∣≤y≤1,−1≤x≤1}\n，则\n∬Dx2e−y2dxdy=\n.",
    answerText: "】 3 1 ​ − 3 e 2 ​ 【",
    referenceAnswer: "【答案】 3 1 ​ − 3 e 2 ​ 【解析】 ∬ D ​ x 2 e − y 2 d x d y ​ = ∫ 0 1 ​ e − y 2 d y ∫ − y y ​ x 2 d x = 3 1 ​ ∫ 0 1 ​ e − y 2 ( x 3 ​ − y y ​ ) d y = 3 2 ​ ∫ 0 1 ​ e − y 2 y 3 d y = 3 1 ​ ∫ 0 1 ​ e − y 2 ⋅ y 2 d ( y 2 ) = − 3 1 ​ [ y 2 e − y 2 + e − y 2 ] ​ 0 1 ​ = 3 1 ​ − 3 e 2 ​ . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\n行列式\n\nλ004−1λ030−1λ200−1λ+1=",
    answerText: "】 λ 4 + λ 3 + 2 λ 2 + 3 λ + 4 【",
    referenceAnswer: "【答案】 λ 4 + λ 3 + 2 λ 2 + 3 λ + 4 【解析】 【解析】按第一列展开 ​ λ 0 0 4 ​ − 1 λ 0 3 ​ 0 − 1 λ 2 ​ 0 0 − 1 λ + 1 ​ ​ = λ ( λ 3 + λ 2 + 2 λ + 3 ) + 4 = λ 4 + λ 3 + 2 λ 2 + 3 λ + 4.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设袋中有红、白、黑球各\n1\n个，从中放回地取球，每次取\n1\n个，直到三种颜色的球都取到时停止，则取球次数恰好为\n4\n的概率为",
    answerText: "】 9 2 ​ 【",
    referenceAnswer: "【答案】 9 2 ​ 【解析】 若取球次数恰好为 4, 则前三次只能取到两种颜色的球, 第四次为第三种颜色,\n则 P = 3 4 C 3 2 ​ C 3 1 ​ C 1 1 ​ C 2 1 ​ ​ = 9 2 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分 10 分)\n\n求极限\nlimx→0(cos2x+2xsinx)x41",
    referenceAnswer: "【答案】 \\[e^{\\frac{1}{3}} \\] 【解析】 由泰勒展开得 cos 2 x = 1 − 2 ! 4 x 2 ​ + 4 ! 16 x 4 ​ + ⋯ , − ∞ < x < ∞ ; sin x = x − 3 ! x 3 ​ + ⋯ , − ∞ < x < + ∞. ​ 故原式= ​ x → 0 lim ​ [ 1 − 2 ! 4 x 2 ​ + 4 ! 16 x 4 ​ + 2 x ( x − 3 ! x 3 ​ ) + o ( x 4 ) ] x 4 1 ​ = x → 0 lim ​ [ 1 + 3 1 ​ x 4 + o ( x 4 ) ] x 4 1 ​ = x → 0 lim ​ ( 1 + 3 1 ​ x 4 ) x 4 3 ​ ⋅ 3 1 ​ = e 3 1 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分 10 分)\n\n设某商品的最大需求量为 1200 件，该商品的需求函数为\nQ=Q(P)\n，需求弹性\n\nη=120−PP(η>0)\n\nP\n为单价 (万元)。\n\n(1) 求需求函数的表达式;\n\n(2) 求\nP=100\n万元时的边际收益，并说明其经济意义。",
    referenceAnswer: "【答案】 (1) 需求函数： Q ( P ) = 1200 − 10 P (2) 边际收益：80万元，经济意义：销售第201件商品所得收益为80万元。 【解析】 (1) 由 η = − Q / P d Q / d P ​ = 120 − P P ​ 可知 d P d Q ​ + 120 − P 1 ​ Q = 0 , 解得 Q = C ( 120 − P ) ，由 Q ( 0 ) = 1 200 知 C = 10 ，故 Q ( P ) = 1 200 − 10 P . (2) 收益函数 R ( Q ) = PQ = 10 ( 1200 − Q ) Q ​ 故 d Q d R ​ = 10 1200 − 2 Q ​ . 因此当 P = 100 时， Q = 200 ，此时 d Q d R ​ ​ Q = 200 ​ = 80. 其经济意义为销售第 201 件商品所得收益为 80 万元。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分 10 分)\n\n设函数\nf(x)=∫0x∣t2−x2∣dt(x>0)\n，求\nf′(x)\n，并求\nf(x)\n的最小值。",
    referenceAnswer: "【答案】 f ′ ( x ) = { 4 x 2 − 2 x , 2 x , ​ 0 < x < 1 x ≥ 1 ​ ，最小值为 4 1 ​ 【解析】 当 x ≥ 1 时， f ( x ) = ∫ 0 1 ​ ( x 2 − t 2 ) d t = x 2 − 3 1 ​ ； 当 0 < x < 1 时， f ( x ) = ∫ 0 x ​ ( x 2 − t 2 ) d t + ∫ x 1 ​ ( t 2 − x 2 ) d t = 3 4 ​ x 3 − x 2 + 3 1 ​ 。 且 lim x → 1 + ​ f ′ ( x ) = lim x → 1 − ​ f ′ ( x ) = 2 ，故 f ( x ) 在 x = 1 处可导。 所以 f ′ ( x ) = { 4 x 2 − 2 x , 2 x , ​ 0 < x < 1 ; x ≥ 1. ​ 故 x ∈ ( 0 , 2 1 ​ ) ， f ′ ( x ) < 0 ; x ∈ ( 2 1 ​ , + ∞ ) ， f ′ ( x ) > 0 。因此 f ( x ) 的最小值为 f ( 2 1 ​ ) = 3 4 ​ × ( 2 1 ​ ) 3 − ( 2 1 ​ ) 2 + 3 1 ​ = 4 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分 10 分)\n\n设函数\nf(x)\n连续，且满足\n∫0xf(x−t)dt=∫0x(x−t)f(t)dt+e−x−1\n，求\nf(x)\n。",
    referenceAnswer: "【答案】 f ( x ) = − 2 1 ​ ( e x + e − x ) 【解析】 令 x − t = u ，则 ∫ 0 x ​ f ( x − t ) d t = ∫ 0 x ​ f ( u ) d u , 又 ∫ 0 x ​ ( x − t ) f ( t ) d t = x ∫ 0 x ​ f ( t ) d t − ∫ 0 x ​ t f ( t ) d t , 故原式可化为 ∫ 0 x ​ f ( t ) d t = x ∫ 0 x ​ f ( t ) d t − ∫ 0 x ​ t f ( t ) d t + e − x − 1 , 上式两边同时对 x 求导得 f ( x ) = ∫ 0 x ​ f ( t ) d t + x f ( x ) − x f ( x ) − e − x = ∫ 0 x ​ f ( t ) d t − e − x , 可得 f ( 0 ) = − 1 , 上式两边再对 x 求导得 f ′ ( x ) = f ( x ) + e − x , 即 f ′ ( x ) − f ( x ) = e − x , 解得 f ( x ) = ( ∫ e − x e ∫ − 1 d x d x + C ) e ∫ − 1 d x = C e x − 2 1 ​ e − x , 由 f ( 0 ) = − 1 ，得 C = − 2 1 ​ ，故 f ( x ) = − 2 1 ​ ( e x + e − x ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分 10 分)\n\n求幂级数\n\nn=0∑∞(n+1)(2n+1)x2n+2\n\n的收敛域及和函数。",
    referenceAnswer: "【答案】 收敛域为 [ − 1 , 1 ] ，和函数为 S ( x ) = { ( 1 + x ) ln ( 1 + x ) − ( 1 − x ) ln ( 1 − x ) , 2 ln 2 , ​ − 1 < x < 1 , x = ± 1. ​ 【解析】 由 lim n → ∞ ​ ( n + 1 ) ( 2 n + 1 ) ( n + 2 ) ( 2 n + 3 ) ​ = 1 得收敛半径 R = 1 。 当 x = ± 1 时，该级数收敛，故收敛域为 [ − 1 , 1 ] 。 和函数 S ( x ) = ∑ n = 0 ∞ ​ ( n + 1 ) ( 2 n + 1 ) 1 ​ x 2 n + 2 。 (1) 当 − 1 < x < 1 时， S ′ ( x ) = n = 0 ∑ ∞ ​ ( n + 1 ) ( 2 n + 1 ) ( 2 n + 2 ) ​ x 2 n + 1 = n = 0 ∑ ∞ ​ ( 2 n + 1 ) 2 ​ x 2 n + 1 , S ′′ ( x ) = n = 0 ∑ ∞ ​ 2 n + 1 2 ( 2 n + 1 ) ​ x 2 n = 1 − x 2 2 ​ . 积分得 S ′ ( x ) = ∫ 1 − x 2 2 ​ d x = ∫ ( 1 − x 1 ​ + 1 + x 1 ​ ) d x = ln 1 − x 1 + x ​ + C 1 ​ , S ( x ) = ∫ ( ln 1 − x 1 + x ​ + C 1 ​ ) d x = ( 1 + x ) ln ( 1 + x ) − ( 1 − x ) ln ( 1 − x ) + C 1 ​ x + C 2 ​ . 由 S ( 0 ) = 0 , S ′ ( 0 ) = 0 知 C 1 ​ = C 2 ​ = 0 , 故 S ( x ) = ( 1 + x ) ln ( 1 + x ) − ( 1 − x ) ln ( 1 − x ) . (2) 当 x = ± 1 时， S ( x ) = n = 0 ∑ ∞ ​ ( n + 1 ) ( 2 n + 1 ) 1 ​ = 2 n = 0 ∑ ∞ ​ ( 2 n + 1 1 ​ − 2 n + 2 1 ​ ) = 2 n = 1 ∑ ∞ ​ n ( − 1 ) n + 1 ​ = 2 ln 2. 故 S ( x ) = { ( 1 + x ) ln ( 1 + x ) − ( 1 − x ) ln ( 1 − x ) , 2 ln 2 , ​ − 1 < x < 1 , x = ± 1. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分 11 分)\n\n设矩阵\nA=11a+11011−aaa+1\n，\nβ=012a−2\n，且方程组\nAx=β\n无解。\n\n(1) 求\na\n的值；\n\n(2) 求方程组\nATAx=ATβ\n的通解。",
    referenceAnswer: "【答案】 (1) a = 0 (2) 方程组 A T A x = A T β 的通解为 x = k ​ 0 − 1 1 ​ ​ + ​ 1 − 2 0 ​ ​ ，其中 k 为任意常数。 【解析】 (1) ( A , β ) = ​ 1 1 a + 1 ​ 1 0 1 ​ 1 − a a a + 1 ​ 0 1 2 a − 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ a 1 − 2 a a ( 2 − a ) ​ 1 − 1 a − 2 ​ ​ , 因为方程组 A x = β 无解，则 r ( A )  = r ( A , β ) ，故 a = 0 。 (2) 由(1)知， A = ​ 1 1 1 ​ 1 0 1 ​ 1 0 1 ​ ​ , A T A = ​ 3 2 2 ​ 2 2 2 ​ 2 2 2 ​ ​ , A T β = ​ − 1 − 2 − 2 ​ ​ , ( A T A ∣ A T β ) = ​ 3 2 2 ​ 2 2 2 ​ 2 2 2 ​ − 1 − 2 − 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 1 0 ​ 1 − 2 0 ​ ​ , 故方程组 A x = β 的通解为 x = k ​ 0 − 1 1 ​ ​ + ​ 1 − 2 0 ​ ​ （ k 为任意常数）。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知矩阵\nA=020−1−30100\n.\n\n(1) 求\nA99\n;\n\n(2) 设 3 阶矩阵\nB=(α1,α2,α3)\n满足\nB2=BA\n, 记\nB100=(β1,β2,β3)\n, 将\nβ1,β2,β3\n分别表示为\nα1,α2,α3\n的线性组合。",
    referenceAnswer: "【答案】 (1) A 99 = ​ 2 99 − 2 2 100 − 2 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 98 2 − 2 99 0 ​ ​ (2) ⎩ ⎨ ⎧ ​ β 1 ​ = ( 2 99 − 2 ) α 1 ​ + ( 2 100 − 2 ) α 2 ​ , β 2 ​ = ( 1 − 2 99 ) α 1 ​ + ( 1 − 2 100 ) α 2 ​ , β 3 ​ = ( 2 − 2 98 ) α 1 ​ + ( 2 − 2 99 ) α 2 ​ ​ 【解析】 (1) 由 ∣ λ E − A ∣ = ​ λ − 2 0 ​ 1 λ + 3 0 ​ − 1 0 λ ​ ​ = λ ( λ + 2 ) ( λ + 1 ) = 0 可知 A 的特征值为 λ 1 ​ = 0 , λ 2 ​ = − 1 , λ 3 ​ = − 2. 将 A 对角化， 当 λ 1 ​ = 0 时，由 ( OE − A ) X = 0 得特征向量 X 1 ​ = ​ 3 2 2 ​ ​ ； 当 λ 2 ​ = − 1 时，由 ( − E − A ) X = 0 得特征向量 X 2 ​ = ​ 1 1 0 ​ ​ ； 当 λ 3 ​ = − 2 时，由 ( − 2 E − A ) X = 0 得特征向量 X 3 ​ = ​ 1 2 0 ​ ​ 。 令 P = ​ 3 2 2 ​ 1 1 0 ​ 1 2 0 ​ ​ ，则 P − 1 A P = ​ 0 0 0 ​ 0 − 1 0 ​ 0 0 − 2 ​ ​ ，因此 P − 1 A 99 P = ​ 0 0 0 ​ 0 ( − 1 ) 99 0 ​ 0 0 ( − 2 ) 99 ​ ​ 所以有 A 99 = P ​ 0 0 0 ​ 0 ( − 1 ) 99 0 ​ 0 0 ( − 2 ) 99 ​ ​ P − 1 = ​ 2 99 − 2 2 100 − 2 0 ​ 1 − 2 99 1 − 2 100 0 ​ 2 − 2 98 2 − 2 99 0 ​ ​ (2) B 100 = B 98 B 2 = B 98 B A = ⋯ = B A 99 ， 故 ( β 1 ​ , β 2 ​ , β 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) A 99 ，因此有 ⎩ ⎨ ⎧ ​ β 1 ​ = ( 2 99 − 2 ) α 1 ​ + ( 2 100 − 2 ) α 2 ​ , β 2 ​ = ( 1 − 2 99 ) α 1 ​ + ( 1 − 2 100 ) α 2 ​ , β 3 ​ = ( 2 − 2 98 ) α 1 ​ + ( 2 − 2 99 ) α 2 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n在区域\nD={(x,y)∣0x1,x2yx}\n上服从均匀分布,\n令\nU={1,0,X≤Y,X>Y.\n\n(1) 写出\n(X,Y)\n的概率密度;\n\n(2) 问\nU\n与\nX\n是否相互独立? 并说明理由。\n\n(3) 求\nZ=U+X\n的分布函数\nF(z)\n.",
    referenceAnswer: "【答案】 (1) ( X , Y ) 的概率密度函数为 f ( x , y ) = { 3 , 0 , ​ ( x , y ) ∈ D , 其他 . ​ (2) U 与 X 不相互独立。 (3) Z = U + X 的分布函数为 F ( z ) = ⎩ ⎨ ⎧ ​ 0 , 2 3 ​ z 2 − z 3 , 2 ( z − 1 ) 2 3 ​ − 2 3 ​ ( z − 1 ) 2 + 2 1 ​ , 1 , ​ z < 0 , 0 ≤ z < 1 , 1 ≤ z < 2 , z ≥ 2. ​ 【解析】 (1) 区域 D 的面积为 S D ​ = ∫ 0 1 ​ ( x ​ − x 2 ) d x = ( 3 2 ​ x 2 3 ​ − 3 1 ​ x 3 ) ​ 0 1 ​ = 3 1 ​ , 故 ( X , Y ) 的概率密度函数为 f ( x , y ) = { 3 , 0 , ​ ( x , y ) ∈ D , 其他 . ​ (2) 设 U 和 X 的联合分布函数为 G ( u , x ) , G ( 0 , t ) = P { U = 0 , X ≤ t } = P { X > Y , X ≤ t } = ∫ 0 t ​ ∫ x 2 x ​ f ( x , y ) d y d x = 2 3 ​ t 2 − t 3 ; G ( 1 , t ) = P { U = 1 , X ≤ t } = 2 t 2 3 ​ − 2 3 ​ t 2 . 由于 P { U = 0 } = P { X > Y } = ∫ 0 1 ​ ∫ x 2 x ​ f ( x , y ) d y d x = 2 1 ​ = P { U = 1 } , 显然 G ( u , x )  = P { U = u } P { X ≤ x } , 故 U 与 X 不独立。 (3) 当 z < 0 时， F ( z ) = 0 ; 当 0 ≤ z < 1 时， F ( z ) = P { U = 0 , X ≤ z } = 2 3 ​ z 2 − z 3 ; 当 1 ≤ z < 2 时， F ( z ) = P { U = 1 , X ≤ z − 1 } + P { U = 0 , X ≤ z } = 2 ( z − 1 ) 2 3 ​ − 2 3 ​ ( z − 1 ) 2 + 2 1 ​ ; 当 z ≥ 2 时， F ( z ) = 1 。 故 F ( z ) = ⎩ ⎨ ⎧ ​ 0 , 2 3 ​ z 2 − z 3 , 2 ( z − 1 ) 2 3 ​ − 2 3 ​ ( z − 1 ) 2 + 2 1 ​ , 1 , ​ z < 0 , 0 ≤ z < 1 , 1 ≤ z < 2 , z ≥ 2. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率密度为\n\nf(x;θ)={θ33x2,0,0xθ,其他,\n\n其中\nθ∈(0,+∞)\n为未知参数,\nX1,X2,X3\n为来自总体\nX\n的简单随机样本, 令\n\nT=max{X1,X2,X3}.\n\n(1) 求\nT\n的概率密度;\n\n(2) 确定\na\n, 使得\nE(aT)=θ\n。",
    referenceAnswer: "【答案】 (1) g ( t ) = { θ 9 9 t 8 ​ , 0 , ​ 0 < t < θ , 其他 ​ (2) a = 9 10 ​ 【解析】 (1) 当 0 < x ≤ θ 时， X 的分布函数为 F ( x ) = ∫ 0 x ​ θ 3 3 t 2 ​ d t = θ 3 x 3 ​ . 故 F ( x ) = ⎩ ⎨ ⎧ ​ 0 , θ 3 x 3 ​ , 1 , ​ x ≤ 0 , 0 < x ≤ θ , x > θ . ​ 设 T 的分布函数为 G ( t ) ，则当 0 < t ≤ θ 时， G ( t ) ​ = P { T ≤ t } = P { X 1 ​ ≤ t , X 2 ​ ≤ t , X 3 ​ ≤ t } = P { X 1 ​ ≤ t } P { X 2 ​ ≤ t } P { X 3 ​ ≤ t } = θ 9 t 9 ​ , ​ 故 G ( t ) = ⎩ ⎨ ⎧ ​ 0 , θ 9 t 9 ​ , 1 , ​ t ≤ 0 , 0 < t ≤ θ , t > θ . ​ 因此 T 的密度函数为 g ( t ) = { θ 9 9 t 8 ​ , 0 , ​ 0 < t < θ , 其他 . ​ (2) E ( T ) = ∫ 0 θ ​ θ 9 9 t 8 ​ d t = 10 9 ​ θ , 由 θ = E ( a T ) = a E ( T ) = 10 9 ​ a θ 知 a = 9 10 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2016_math3 = {
  id: P, year: Y,
  title: '2016 年全国硕士研究生招生考试 数学（三）',
  short: '2016 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2016_math3.length,
  qids: questions2016_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
