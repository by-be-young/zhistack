const P = 'paper-2012-math1'
const Y = 2012
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2012-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2012 考研数学（一）真题',
  ...extra
})

export const questions2012_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\n\ny=x2−1x2+x\n\n渐近线的条数为（）",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】： x → 1 lim ​ x 2 − 1 x 2 + x ​ = ∞ ，所以 x = 1 为垂直渐近线。 x → ∞ lim ​ x 2 − 1 x 2 + x ​ = 1 ，所以 y = 1 为水平渐近线，没有斜渐近线，故两条选 C。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)=(ex−1)(e2x−2)⋯(enx−n)\n，其中\nn\n为正整数，则\nf′(0)=",
    options: [{ key: "A", text: "( − 1 ) n − 1 ( n − 1 )!" }, { key: "B", text: "( − 1 ) n ( n − 1 )!" }, { key: "C", text: "( − 1 ) n − 1 n !" }, { key: "D", text: "( − 1 ) n n !" }],
    answer: ["A"],
    explain: "正确答案： A 设 f ( x ) = k = 1 ∏ n ​ ( e k x − k ) . 由乘积求导法则， f ′ ( x ) = i = 1 ∑ n ​ ​ ( i e i x ) k = 1 k  = i ​ ∏ n ​ ( e k x − k ) ​ . 当 x = 0 时， e 0 − 1 = 0. 因此，除第一个因子求导对应的一项外，其余各项都含有因子 e 0 − 1 = 0 , 故均为零，仅剩第一项： f ′ ( 0 ) ​ = e 0 k = 2 ∏ n ​ ( e 0 − k ) = k = 2 ∏ n ​ ( 1 − k ) = ( − 1 ) ( − 2 ) ⋯ ( − ( n − 1 ) ) = ( − 1 ) n − 1 ( n − 1 )! . ​ 故选 A 。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "如果\nf(x,y)\n在\n(0,0)\n处连续，那么下列命题正确的是（ ）",
    options: [{ key: "A", text: "若极限 lim x → 0 y → 0 ​ ​ ∣ x ∣ + ∣ y ∣ f ( x , y ) ​ 存在,则 f ( x , y ) 在(0,0)处可微" }, { key: "B", text: "若极限 lim x → 0 y → 0 ​ ​ x 2 + y 2 f ( x , y ) ​ 存在,则 f ( x , y ) 在(0,0)处可微" }, { key: "C", text: "若 f ( x , y ) 在(0,0)处可微,则极限 lim x → 0 y → 0 ​ ​ ∣ x ∣ + ∣ y ∣ f ( x , y ) ​ 存在" }, { key: "D", text: "若 f ( x , y ) 在(0,0)处可微,则极限 lim x → 0 y → 0 ​ ​ x 2 + y 2 f ( x , y ) ​ 存在" }],
    answer: ["B"],
    explain: "正确答案： B 由于 f ( x , y ) 在 ( 0 , 0 ) 处连续，若极限 x → 0 y → 0 ​ lim ​ x 2 + y 2 f ( x , y ) ​ 存在，则 f ( 0 , 0 ) = x → 0 y → 0 ​ lim ​ f ( x , y ) = 0 此时， x → 0 y → 0 ​ lim ​ x 2 + y 2 f ( x , y ) ​ = Δ x → 0 Δ y → 0 ​ lim ​ Δ x 2 + Δ y 2 f ( Δ x , Δ y ) − f ( 0 , 0 ) ​ 存在，可知 Δ x → 0 Δ y → 0 ​ lim ​ Δ x 2 + Δ y 2 ​ f ( Δ x , Δ y ) − f ( 0 , 0 ) ​ = 0 即 f ( Δ x , Δ y ) − f ( 0 , 0 ) = 0 ⋅ Δ x + 0 ⋅ Δ y + o ( Δ x 2 + Δ y 2 ​ ) 由可微的定义可知 f ( x , y ) 在 ( 0 , 0 ) 处可微。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nIk=∫0kπex2sinxdx (k=1,2,3)\n，则有( )",
    options: [{ key: "A", text: "I 1 ​ < I 2 ​ < I 3 ​ ." }, { key: "B", text: "I 3 ​ < I 2 ​ < I 1 ​ ." }, { key: "C", text: "I 2 ​ < I 3 ​ < I 1 ​ ." }, { key: "D", text: "I 2 ​ < I 1 ​ < I 3 ​ ." }],
    answer: ["D"],
    explain: "正确答案： D 【解】由 I 2 ​ − I 1 ​ = ∫ π 2 π ​ e x 2 sin x d x < 0 ，得 I 1 ​ > I 2 ​ 。 由 I 3 ​ − I 2 ​ = ∫ 2 π 3 π ​ e x 2 sin x d x > 0 ，得 I 2 ​ < I 3 ​ 。 又 I 3 ​ − I 1 ​ = ∫ π 3 π ​ e x 2 sin x d x = ∫ π 2 π ​ e x 2 sin x d x + ∫ 2 π 3 π ​ e x 2 sin x d x , 而 ∫ 2 π 3 π ​ e x 2 sin x d x = x − π = t ∫ π 2 π ​ e ( t + π ) 2 sin ( t + π ) d t = − ∫ π 2 π ​ e ( x + π ) 2 sin x d x , 因此 I 3 ​ − I 1 ​ = ∫ π 2 π ​ [ e x 2 − e ( x + π ) 2 ] sin x d x > 0 , 得 I 1 ​ < I 3 ​ 。 综上， I 2 ​ < I 1 ​ < I 3 ​ ，应选 (D)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα1=00c1\n，\nα2=01c2\n，\nα3=1−1c3\n，\nα4=−11c4\n，其中\nc1,c2,c3,c4\n为任意常数，则下列向量组线性相关的是（  ）",
    options: [{ key: "A", text: "α 1 ​ , α 2 ​ , α 3 ​" }, { key: "B", text: "α 1 ​ , α 2 ​ , α 4 ​" }, { key: "C", text: "α 1 ​ , α 3 ​ , α 4 ​" }, { key: "D", text: "α 2 ​ , α 3 ​ , α 4 ​" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】：由于 ∣ ( α 1 ​ , α 3 ​ , α 4 ​ ) ∣ = ​ 0 0 c 1 ​ ​ 1 − 1 c 3 ​ ​ − 1 1 c 4 ​ ​ ​ = c 1 ​ ​ 1 − 1 ​ − 1 1 ​ ​ = 0 ，可知 α 1 ​ , α 3 ​ , α 4 ​ 线性相关。故选（C）。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\n3\n阶矩阵，\nP\n为\n3\n阶可逆矩阵，且\nP−1AP=100010002\n。若\nP=(α1,α2,α3)\n，\nQ=(α1+α2,α2,α3)\n，则\nQ−1AQ=()",
    options: [{ key: "A", text: "​ 1 0 0 ​ 0 2 0 ​ 0 0 1 ​ ​" }, { key: "B", text: "​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​" }, { key: "C", text: "​ 2 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​" }, { key: "D", text: "​ 2 0 0 ​ 0 2 0 ​ 0 0 1 ​ ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解】由 Q = ( α 1 ​ + α 2 ​ , α 2 ​ , α 3 ​ ) = P ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ， 得 Q − 1 A Q = ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ − 1 P − 1 A P ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ = ​ 1 − 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​ ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ = ​ 1 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​ ， 应选(B)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且分别服从参数为\n1\n与参数为\n4\n的指数分布，则\nP{XY}=()\n。",
    options: [{ key: "A", text: "5 1 ​" }, { key: "B", text: "3 1 ​" }, { key: "C", text: "3 2 ​" }, { key: "D", text: "5 4 ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】： ( X , Y ) 的联合概率密度为 f ( x , y ) = { e − x − 4 y , 0 , ​ x > 0 , y > 0 其它 ​ 。 则 P { X < Y } = x < y ∬ ​ f ( x , y ) d x d y = ∫ 0 + ∞ ​ d x ∫ 0 y ​ e − x − 4 y d x = ∫ 0 + ∞ ​ e − 5 y d y = 5 1 ​ 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "将长度为\n1m\n的木棒随机地截成两段，则两段长度的相关系数为（  ）",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2 1 ​" }, { key: "C", text: "− 2 1 ​" }, { key: "D", text: "− 1" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】：设两段长度分别为 x 、 y ，显然 x + y = 1 ，即 y = − x + 1 ，故两者是线性关系，且是负相关，所以相关系数为 − 1 。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若函数\nf(x)\n满足方程\nf′′(x)+f′(x)−2f(x)=0\n及\nf′′(x)+f(x)=2ex\n，则\nf(x)=\n______。",
    answerText: "】 e x 【",
    referenceAnswer: "【答案】 e x 【解析】 由观察知 f ′′ ( x ) + f ( x ) = 2 e x 的一特解为 f ( x ) = e x ，将其代入 f ′′ ( x ) + f ′ ( x ) − 2 f ( x ) = 0 中满足，故 f ( x ) = e x ．",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n∫02x2x−x2dx",
    answerText: "】 2 π ​ 【",
    referenceAnswer: "【答案】 2 π ​ 【解析】 令 t = x − 1 得 ∫ 0 2 ​ x 2 x − x 2 ​ d x = ∫ − 1 1 ​ ( t + 1 ) 1 − t 2 ​ d t = ∫ − 1 1 ​ 1 − t 2 ​ d t = 2 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n∇(xy+yz)(2,1,1)",
    answerText: "】 {1,1,1} 【",
    referenceAnswer: "【答案】 {1,1,1} 【解析】 g r a d ( x y + y z ​ ) ​ ( 2 , 1 , 1 ) ​ = { y , x − y 2 z ​ , y 1 ​ } ​ ( 2 , 1 , 1 ) ​ = { 1 , 1 , 1 }",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nΣ={(x,y,z)∣x+y+z=1,x≥0,y≥0,z≥0}\n，则\n∬Σy2ds=\n______。",
    answerText: "： 12 3 ​ ​",
    referenceAnswer: "答案 ： 12 3 ​ ​ 解析 ：由曲面积分的计算公式可知 ∬ ∑ ​ y 2 d s = ∬ D ​ y 2 1 + ( − 1 ) 2 + ( − 1 ) 2 ​ d x d y = 3 ​ ∬ D ​ y 2 d x d y ，其中 D = {( x , y ) ∣ x ≥ 0 , y ≥ 0 , x + y ≤ 1 } 。故原式 = 3 ​ ∫ 0 1 ​ d y ∫ 0 1 − y ​ y 2 d x = 3 ​ ∫ 0 1 ​ y 2 ( 1 − y ) d y = 12 3 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nα\n为\n3\n维单位列向量，\nE\n为 3 阶单位矩阵，则矩阵\nE−ααT\n的秩为______。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 方法一 取 α = ​ 1 0 0 ​ ​ ， α α T = ​ 1 0 0 ​ 0 0 0 ​ 0 0 0 ​ ​ ，由 E − α α T = ​ 0 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ，得 E − α α T 的秩为 2 。 方法二 令 A = E − α α T ，则 A 2 = ( E − α α T ) ( E − α α T ) = E − α α T = A 。 由 A ( E − A ) = O ，得 r ( A ) + r ( E − A ) ≤ 3 。 又由 r ( A ) + r ( E − A ) ≥ r ( E ) = 3 ，得 r ( A ) + r ( E − A ) = 3 。 而 r ( E − A ) = r ( α α T ) = r ( α ) = 1 ，所以 r ( A ) = r ( E − α α T ) = 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA\n、\nB\n、\nC\n是随机事件，\nA\n与\nC\n互不相容，\nP(AB)=21\n，\nP(C)=31\n，则\nP(AB∣C)",
    answerText: "】 4 3 ​ 【",
    referenceAnswer: "【答案】 4 3 ​ 【解析】 P ( A B ∣ C ˉ ) = P ( C ˉ ) P ( A B C ˉ ) ​ 其中 P ( C ˉ ) = 1 − P ( C ) = 1 − 3 1 ​ = 3 2 ​ 又 P ( A B C ˉ ) = P ( A B ) − P ( A BC ) = 2 1 ​ − P ( A BC ) 。 由于 A 与 C 互不相容，即 A C = ϕ ，所以 P ( A C ) = 0 。又因为 A BC ⊂ A C ，可得 P ( A BC ) = 0 。 代入得 P ( A B C ˉ ) = 2 1 ​ ，故 P ( A B ∣ C ˉ ) = 3 2 ​ 2 1 ​ ​ = 4 3 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n证明：\nxln1−x1+x+cosx≥1+2x2\n，\n−1x1",
    referenceAnswer: "【答案】 见解析 【解析】 令 f ( x ) = x ln 1 − x 1 + x ​ + cos x − 1 − 2 x 2 ​ ，可得 f ′ ( x ) ​ = ln 1 − x 1 + x ​ + x ⋅ ( 1 − x ) 2 2 ​ ⋅ 1 + x 1 − x ​ − sin x − x = ln 1 − x 1 + x ​ + 1 − x 2 2 x ​ − sin x − x = ln 1 − x 1 + x ​ + 1 − x 2 1 + x 2 ​ x − sin x ​ 当 0 < x < 1 时，有 ln 1 − x 1 + x ​ ≥ 0 ， 1 − x 2 1 + x 2 ​ > 1 ，所以 1 − x 2 1 + x 2 ​ x − sin x ≥ 0 ， 故 f ′ ( x ) ≥ 0 ，而 f ( 0 ) = 0 ，即得 x ln 1 − x 1 + x ​ + cos x − 1 − 2 x 2 ​ ≥ 0 所以 x ln 1 − x 1 + x ​ + cos x ≥ 2 x 2 ​ + 1 。 当 − 1 < x < 0 ，有 ln 1 − x 1 + x ​ ≤ 0 ， 1 − x 2 1 + x 2 ​ > 1 ，所以 1 − x 2 1 + x 2 ​ x − sin x ≤ 0 ， 故 f ′ ( x ) ≥ 0 ，即得 x ln 1 − x 1 + x ​ + cos x − 1 − 2 x 2 ​ ≥ 0 故知， x ln 1 − x 1 + x ​ + cos x ≥ 1 + 2 x 2 ​ , − 1 < x < 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求\nf(x,y)=xe−2x2+y2\n的极值。",
    referenceAnswer: "【答案】 函数在点 ( 1 , 0 ) 处取得极大值 e ​ 1 ​ ，在点 ( − 1 , 0 ) 处取得极小值 − e ​ 1 ​ 。 【解析】 f ( x , y ) = x e − 2 x 2 + y 2 ​ ，先求函数的驻点。 f x ′ ​ ( x , y ) = e − x 2 − y 2 /2 ( 1 − x 2 ) = 0 ， f y ′ ​ ( x , y ) = − y x e − 2 x 2 + y 2 ​ = 0 ，解得函数的驻点为 ( 1 , 0 ) 、 ( − 1 , 0 ) 。 对于驻点 ( 1 , 0 ) ： A = f xx ′′ ​ ( 1 , 0 ) = e − 2 1 ​ ( − 2 x + x 3 ) ​ x = 1 ​ = − e − 2 1 ​ B = f x y ′′ ​ ( 1 , 0 ) = e − 2 x 2 + y 2 ​ ( − x y ) ​ ( 1 , 0 ) ​ = 0 C = f yy ′′ ​ ( 1 , 0 ) = e − 2 x 2 + y 2 ​ ( y 2 − 1 ) ​ ( 1 , 0 ) ​ = − e − 2 1 ​ 所以 B 2 − A C = − e − 1 < 0 ，且 A < 0 ，故 f ( x , y ) 在点 ( 1 , 0 ) 处取得极大值 f ( 1 , 0 ) = e ​ 1 ​ 。 对于驻点 ( − 1 , 0 ) ： A = f xx ′′ ​ ( − 1 , 0 ) = e − 2 1 ​ ( − 2 x + x 3 ) ​ x = − 1 ​ = e − 2 1 ​ B = f x y ′′ ​ ( − 1 , 0 ) = 0 C = f yy ′′ ​ ( − 1 , 0 ) = − e − 2 1 ​ 所以 B 2 − A C = − e − 1 < 0 ，且 A > 0 ，故 f ( x , y ) 在点 ( − 1 , 0 ) 处取得极小值 f ( − 1 , 0 ) = − e ​ 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求幂级数\n∑n=0∞2n+14n2+4n+3x2n\n的收敛域及和函数。",
    referenceAnswer: "【答案】 收敛域为 ( − 1 , 1 ) ，和函数为 S ( x ) = { ( 1 − x 2 ) 2 1 + x 2 ​ + x 1 ​ ln 1 − x 1 + x ​ , 1 , ​ x ∈ ( − 1 , 1 ) x  = 0 x = 0 ​ 【解析】 收敛半径的计算如下： R ​ = n → ∞ lim ​ ​ a n + 1 ​ a n ​ ​ ​ = n → ∞ lim ​ ​ 2 ( n + 1 ) + 1 4 ( n + 1 ) 2 + 4 ( n + 1 ) + 3 ​ 2 n + 1 4 n 2 + 4 n + 3 ​ ​ ​ = n → ∞ lim ​ ​ 2 n + 1 4 n 2 + 4 n + 3 ​ ⋅ 4 n 2 + 12 n + 11 2 n + 3 ​ ​ = 1 ​ 因此，收敛半径为 R = 1 。 当 x = 1 时，通项 2 n + 1 4 n 2 + 4 n + 3 ​ ∼ 2 n ，且 lim n → ∞ ​ 2 n  = 0 ，所以级数发散。 当 x = − 1 时，通项为 2 n + 1 4 n 2 + 4 n + 3 ​ ( − 1 ) 2 n = 2 n + 1 4 n 2 + 4 n + 3 ​ ，同理级数发散。 因此，收敛域为 ( − 1 , 1 ) 。 设和函数为 S ( x ) = ∑ n = 0 ∞ ​ 2 n + 1 4 n 2 + 4 n + 3 ​ x 2 n ，将通项拆分： 2 n + 1 4 n 2 + 4 n + 3 ​ ​ = 2 n + 1 ( 4 n 2 + 4 n + 1 ) + 2 ​ = ( 2 n + 1 ) + 2 n + 1 2 ​ ​ 于是有： S ( x ) = n = 0 ∑ ∞ ​ ( 2 n + 1 ) x 2 n + 2 n = 0 ∑ ∞ ​ 2 n + 1 x 2 n ​ 对于 ∑ n = 0 ∞ ​ ( 2 n + 1 ) x 2 n ，已知 ∑ n = 0 ∞ ​ x 2 n = 1 − x 2 1 ​ ，两边求导得： n = 0 ∑ ∞ ​ 2 n x 2 n − 1 = ( 1 − x 2 ) 2 2 x ​ 两边乘以 x 得： n = 0 ∑ ∞ ​ 2 n x 2 n = ( 1 − x 2 ) 2 2 x 2 ​ 因此： n = 0 ∑ ∞ ​ ( 2 n + 1 ) x 2 n = ( 1 − x 2 ) 2 1 + x 2 ​ 对于 ∑ n = 0 ∞ ​ 2 n + 1 x 2 n ​ ，令 t = x 2 ，则： n = 0 ∑ ∞ ​ 2 n + 1 t n ​ = t ​ 1 ​ n = 0 ∑ ∞ ​ n + 1/2 t n + 1/2 ​ 积分可得： n = 0 ∑ ∞ ​ n + 1/2 t n + 1/2 ​ = ∫ 0 t ​ ​ 1 − u 2 1 ​ d u = 2 1 ​ ln 1 − t ​ 1 + t ​ ​ 因此： n = 0 ∑ ∞ ​ 2 n + 1 x 2 n ​ = x 1 ​ ⋅ 2 1 ​ ln 1 − x 1 + x ​ ( x  = 0 ) 当 x = 0 时，和为 1 。 综上，和函数为： S ( x ) = { ( 1 − x 2 ) 2 1 + x 2 ​ + x 1 ​ ln 1 − x 1 + x ​ , 1 , ​ x ∈ ( − 1 , 1 ) x  = 0 x = 0 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分\n10\n分）\n\n已知曲线\nL:{x=f(t)y=cost(0≤t2π)\n，其中函数\nf(t)\n具有连续导数，且\nf(0)=0\n，\nf′(t)>0 (0t2π)\n。若曲线\nL\n的切线与\nx\n轴的交点到切点的距离恒为\n1\n，求函数\nf(t)\n的表达式，并求以曲线\nL\n及\nx\n轴和\ny\n轴为边界的区域的面积。",
    referenceAnswer: "【答案】 函数 f ( t ) 的表达式为 f ( t ) = ln ( sec t + tan t ) − sin t ，以曲线 L 及 x 轴和 y 轴为边界的区域的面积为 4 π ​ 。 【解析】 【解】曲线 L 的切线的斜率为 k = d x / d t d y / d t ​ = − f ′ ( t ) sin t ​ , 切线方程为 y − cos t = − f ′ ( t ) sin t ​ [ x − f ( t )] . 令 y = 0 ，得切线与 x 轴交点的横坐标为 x = f ( t ) + sin t cos t ​ f ′ ( t ) , 由题意得 cot 2 t ⋅ f ′ 2 ( t ) + cos 2 t = 1. 因为 f ′ ( t ) > 0 ，所以 f ′ ( t ) = cos t sin 2 t ​ = sec t − cos t , 于是 f ( t ) = ln ( sec t + tan t ) − sin t + C . 再由 f ( 0 ) = 0 得 C = 0 ，故 f ( t ) = ln ( sec t + tan t ) − sin t . 由 f ( 0 ) = 0 ， lim t → 2 π ​ ​ f ( t ) = + ∞ 得曲线 L 及 x 轴及 y 轴围成的无界区域的面积为 A = ∫ 0 + ∞ ​ y d x = ∫ 0 2 π ​ ​ cos t ⋅ f ′ ( t ) d t = ∫ 0 2 π ​ ​ sin 2 t d t = 4 π ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分10分)\n\n已知\nL\n是第一象限中从点\n(0,0)\n沿圆周\nx2+y2=2x\n到点\n(2,0)\n，再沿圆周\nx2+y2=4\n到点\n(0,2)\n的曲线段，计算曲线积分\nI=∫L3x2ydx+(x3+x−2y)dy\n。",
    referenceAnswer: "【答案】 2 π ​ − 4 【解析】 【解】补充 L 0 ​ : x = 0 （起点 y = 2 ，终点 y = 0 ），记 L 与 L 0 ​ 围成的区域为 D ，由格林公式得 I = ∮ L + L 0 ​ ​ 3 x 2 y d x + ( x 3 + x − 2 y ) d y − ∫ L 0 ​ ​ 3 x 2 y d x + ( x 3 + x − 2 y ) d y = ∬ D ​ ( ∂ x ∂ Q ​ − ∂ y ∂ P ​ ) d σ − ∫ 2 0 ​ − 2 y d y = ∬ D ​ d x d y − ∫ 0 2 ​ 2 y d y = 2 π ​ − 4 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\n\nA=100aa1000a1000a1,β=1−100.\n\n（Ⅰ）计算行列式\n∣A∣\n；\n\n（Ⅱ）当实数\na\n为何值时，方程组\nAx=β\n有无穷多解，并求其通解．",
    referenceAnswer: "【答案】 （Ⅰ） ∣ A ∣ = 1 − a 4 （Ⅱ）当 a = − 1 时，方程组 A x = β 有无穷多解，通解为 x = C ​ 1 1 1 1 ​ ​ + ​ 0 − 1 0 0 ​ ​ , C . 【解析】 【解】（Ⅰ）由行列式按行或列展开的性质得 ∣ A ∣ = 1 × A 11 ​ + a ⋅ A 41 ​ = M 11 ​ − a M 41 ​ = 1 − a 4 （Ⅱ）若 A X = β 有无数个解，则 ∣ A ∣ = 0 ，即 a = − 1 或 a = 1 。 当 a = − 1 时， ( A ∣ β ) = ​ 1 0 0 − 1 ​ − 1 1 0 0 ​ 0 − 1 1 0 ​ 0 0 − 1 1 ​ 1 − 1 0 0 ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 0 0 1 0 ​ − 1 − 1 − 1 0 ​ 0 − 1 0 0 ​ ​ 因为 r ( A ) = r ( A ) = 3 < 4 ，所以方程组 A X = β 有无数个解，通解为 X = C ​ 1 1 1 1 ​ ​ + ​ 0 − 1 0 0 ​ ​ , C 当 a = 1 时， ( A ∣ β ) = ​ 1 0 0 1 ​ 1 1 0 0 ​ 0 1 1 0 ​ 0 0 1 1 ​ 1 − 1 0 0 ​ ​ → ​ 1 0 0 0 ​ 1 1 0 0 ​ 0 1 1 0 ​ 0 0 1 0 ​ 1 − 1 0 − 2 ​ ​ 因为 r ( A )  = r ( A ) ，所以方程组 A X = β 无解。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分 11 分)\n\n已知\nA=10−10010a11a−1\n，二次型\nf(x1,x2,x3)=xT(ATA)x\n的秩为 2。\n\n(Ⅰ) 求实数\na\n的值；\n\n(Ⅱ) 求正交变换\nx=Qy\n将二次型\nf\n化为标准形。",
    referenceAnswer: "【答案】 (Ⅰ) a = − 1 (Ⅱ) 在正交变换 x = Q y 下，二次型 f 的标准形为 f = 2 y 2 2 ​ + 6 y 3 2 ​ 。 【解析】 【解】(Ⅰ) A = ​ 1 0 − 1 0 ​ 0 1 0 a ​ 1 1 a − 1 ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 1 1 a + 1 − 1 − a ​ ​ ， 由 r ( A T A ) = 2 及 r ( A T A ) = r ( A ) 得 a = − 1 。 (Ⅱ) 当 a = − 1 时， A T A = ​ 2 0 2 ​ 0 2 2 ​ 2 2 4 ​ ​ ， 由 ∣ λ E − A T A ∣ = ​ λ − 2 0 − 2 ​ 0 λ − 2 − 2 ​ − 2 − 2 λ − 4 ​ ​ = λ ( λ − 2 ) ( λ − 6 ) = 0 ，得 A T A 的特征值为 λ 1 ​ = 0 ， λ 2 ​ = 2 ， λ 3 ​ = 6 。 当 λ 1 ​ = 0 时，由 ( 0 E − A T A ) X = 0 即 A T A X = 0 得 λ 1 ​ = 0 对应的特征向量为 ξ 1 ​ = ​ − 1 − 1 1 ​ ​ ； 当 λ 2 ​ = 2 时，由 ( 2 E − A T A ) X = 0 得 λ 2 ​ = 2 对应的特征向量为 ξ 2 ​ = ​ 1 − 1 0 ​ ​ ； 当 λ 3 ​ = 6 时，由 ( 6 E − A T A ) X = 0 得 λ 3 ​ = 6 对应的特征向量为 ξ 3 ​ = ​ 1 1 2 ​ ​ ， 单位化得 γ 1 ​ = 3 ​ 1 ​ ​ − 1 − 1 1 ​ ​ ， γ 2 ​ = 2 ​ 1 ​ ​ 1 − 1 0 ​ ​ ， γ 3 ​ = 6 ​ 1 ​ ​ 1 1 2 ​ ​ ， 令 Q = ​ − 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ 2 ​ 1 ​ − 2 ​ 1 ​ 0 ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ ​ ，在正交变换 X = Q Y 下，二次型 f 的标准形为 f = 2 y 2 2 ​ + 6 y 3 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维离散型随机变量\n(X,Y)\n的概率分布为\n\n(X,Y)0120410121103102410121\n\n（Ⅰ）求\nP{X=2Y}\n；\n\n（Ⅱ）求\nCov(X−Y,Y)\n。",
    referenceAnswer: "【答案】 （Ⅰ） P { X = 2 Y } = 4 1 ​ （Ⅱ） Cov ( X − Y , Y ) = − 3 2 ​ 【解析】 【解】（Ⅰ） P { X = 2 Y } = P { X = 0 , Y = 0 } + P { X = 2 , Y = 1 } = 4 1 ​ 。 （Ⅱ）由 ( X , Y ) 的联合分布律得 X 、 Y 、 X Y 的分布律为 X ∼ ( 0 2 1 ​ ​ 1 3 1 ​ ​ 2 6 1 ​ ​ ) ， Y ∼ ( 0 3 1 ​ ​ 1 3 1 ​ ​ 2 3 1 ​ ​ ) ， X Y ∼ ( 0 12 7 ​ ​ 1 3 1 ​ ​ 4 12 1 ​ ​ ) ， 于是 E ( X ) = 3 2 ​ ， E ( Y ) = 1 ， E ( Y 2 ) = 3 5 ​ ， D ( Y ) = E ( Y 2 ) − [ E ( Y ) ] 2 = 3 2 ​ ， E ( X Y ) = 3 2 ​ ， Cov ( X , Y ) = E ( X Y ) − E ( X ) E ( Y ) = 0 ， 故 Cov ( X − Y , Y ) = Cov ( X , Y ) − D ( Y ) = − 3 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n与\nY\n相互独立且分别服从正态分布\nN(μ,σ2)\n与\nN(μ,2σ2)\n，其中\nσ\n是未知参数且\nσ>0\n。记\nZ=X−Y\n。\n\n（Ⅰ）求\nZ\n的概率密度\nf(z;σ2)\n；\n\n（Ⅱ）设\nZ1,Z2,⋯,Zn\n为来自总体\nZ\n的简单随机样本，求\nσ2\n的最大似然估计量\nσ2\n；\n\n（Ⅲ）证明\nσ2\n为\nσ2\n的无偏估计量。",
    referenceAnswer: "答案 （Ⅰ） f Z ​ ( z ) = 6 π ​ σ 1 ​ e − 6 σ 2 z 2 ​ （Ⅱ） σ 2 = 3 n 1 ​ ∑ i = 1 n ​ Z i 2 ​ （Ⅲ） 见解析 解析 【解】 (Ⅰ) 因为 X 、 Y 相互独立，所以 Z = X − Y 服从正态分布。 由于 E ( Z ) = E ( X ) − E ( Y ) = 0 , D ( Z ) = D ( X ) + D ( Y ) = 3 σ 2 , 因此 Z ∼ N ( 0 , 3 σ 2 ) ，故 Z 的概率密度函数为 f Z ​ ( z ) = 6 π ​ σ 1 ​ e − 6 σ 2 z 2 ​ , ( − ∞ < z < + ∞ ) . (Ⅱ) 似然函数为 L = f ( z 1 ​ ) f ( z 2 ​ ) ⋯ f ( z n ​ ) = ( 6 π σ 2 ) − 2 n ​ e − 6 σ 2 1 ​ ∑ i = 1 n ​ z i 2 ​ . 取对数得 ln L = − 2 n ​ ln 6 π − 2 n ​ ln σ 2 − 6 σ 2 1 ​ i = 1 ∑ n ​ z i 2 ​ . 对 σ 2 求导，令导数为零： d ( σ 2 ) d ​ ln L = − 2 σ 2 n ​ + 6 σ 4 1 ​ i = 1 ∑ n ​ z i 2 ​ = 0 , 解得 σ 2 = 3 n 1 ​ i = 1 ∑ n ​ z i 2 ​ . 因此， σ 2 的最大似然估计量为 σ 2 = 3 n 1 ​ i = 1 ∑ n ​ Z i 2 ​ . (Ⅲ) 由于 E ( σ 2 ) = 3 n 1 ​ i = 1 ∑ n ​ E ( Z i 2 ​ ) = 3 1 ​ E ( Z 2 ) = 3 1 ​ [ D ( Z ) + ( E ( Z ) ) 2 ] = σ 2 , 因此 σ 2 = 3 n 1 ​ ∑ i = 1 n ​ Z i 2 ​ 是 σ 2 的无偏估计量。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2012_math1 = {
  id: P, year: Y,
  title: '2012 年全国硕士研究生招生考试 数学（一）',
  short: '2012 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2012_math1.length,
  qids: questions2012_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
