const P = 'paper-2025-math3'
const Y = 2025
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2025-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2025 考研数学（三）真题',
  ...extra
})

export const questions2025_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "在\nx→0+\n时，下列无穷小量中与\nx\n等价的是",
    options: [{ key: "A", text: "e − s in x − 1" }, { key: "B", text: "x + 1 ​ − cos x" }, { key: "C", text: "1 − cos 2 x ​" }, { key: "D", text: "1 − x l n ( 1 + x ) ​" }],
    answer: ["C"],
    explain: "正确答案： C e − s i n x − 1 ∼ − sin x ∼ − x 因此 A 不正确。 x + 1 ​ − cos x ∼ 2 1 ​ x 因此 B 不正确。 1 − cos 2 x ​ ∼ 2 1 ​ ( 2 x ​ ) 2 = x 因此 C 正确。 1 − x ln ( 1 + x ) ​ ​ = 1 − x x − 2 x 2 ​ + o ( x 2 ) ​ = 2 x ​ + o ( x ) ​ 因此 D 不正确。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数\nf(x)=∫0xet2sintdt\n，\ng(x)=∫0xet2dt⋅sin2x\n，则",
    options: [{ key: "A", text: "x = 0 是 f ( x ) 的极值点，也是 g ( x ) 的极值点。" }, { key: "B", text: "x = 0 是 f ( x ) 的极值点， ( 0 , 0 ) 是曲线 y = g ( x ) 的拐点。" }, { key: "C", text: "x = 0 是 f ( x ) 的极值点， ( 0 , 0 ) 是曲线 y = f ( x ) 的拐点。" }, { key: "D", text: "( 0 , 0 ) 是曲线 y = f ( x ) 的拐点， ( 0 , 0 ) 也是曲线 y = g ( x ) 的拐点。" }],
    answer: ["B"],
    explain: "正确答案： B f ′ ( x ) = e x 2 sin x , f ′′ ( x ) = 2 x e x 2 sin x + e x 2 cos x f ′ ( 0 ) = 0 , f ′′ ( 0 ) = 1 > 0 因此 x = 0 是 f ( x ) 的极值点。 g ′ ( x ) = e x 2 sin 2 x + sin 2 x ∫ 0 x ​ e t 2 d t g ′′ ( x ) = e x 2 sin 2 x + 2 x e x 2 sin 2 x + sin 2 x e x 2 + 2 cos 2 x ∫ 0 x ​ e t 2 d t g ′ ( 0 ) = 0 , g ′′ ( 0 ) = 0 , g ′′′ ( 0 ) > 0 因此点 ( 0 , 0 ) 是曲线 y = g ( x ) 的拐点。"
  }),
  base(3, 'k-math-013', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知\nk\n为常数，级数\n\nn=1∑∞(−1)n[n1−ln(1+n2k)]\n\n的敛散性为",
    options: [{ key: "A", text: "绝对收敛" }, { key: "B", text: "条件收敛" }, { key: "C", text: "发散" }, { key: "D", text: "敛散性与 k 的取值有关" }],
    answer: ["B"],
    explain: "正确答案： B 当 k = 0 时，级数为 ∑ n = 1 ∞ ​ ( − 1 ) n n 1 ​ ，条件收敛。 当 k  = 0 时，原级数可写为： n = 1 ∑ ∞ ​ ( − 1 ) n n 1 ​ − n = 1 ∑ ∞ ​ ( − 1 ) n ln ( 1 + n 2 k ​ ) 其中第一项条件收敛，第二项绝对收敛。因此原级数为条件收敛与绝对收敛之和，故整体条件收敛。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x)\n连续，\n∫01dy∫0yf(x)dx=",
    options: [{ key: "A", text: "∫ 0 1 ​ x f ( x ) d x" }, { key: "B", text: "∫ 0 1 ​ ( x + 1 ) f ( x ) d x" }, { key: "C", text: "∫ 0 1 ​ ( x − 1 ) f ( x ) d x" }, { key: "D", text: "∫ 0 1 ​ ( 1 − x ) f ( x ) d x" }],
    answer: ["D"],
    explain: "正确答案： D ​ ∫ 0 1 ​ d y ∫ 0 y ​ f ( x ) d x = ∫ 0 1 ​ ∫ 0 y ​ f ( x ) d x d y = y ∫ 0 y ​ f ( x ) d x ​ 0 1 ​ − ∫ 0 1 ​ y ⋅ f ( y ) d y = ∫ 0 1 ​ f ( x ) d x − ∫ 0 1 ​ y f ( y ) d y = ∫ 0 1 ​ f ( x ) d x − ∫ 0 1 ​ x f ( x ) d x = ∫ 0 1 ​ ( 1 − x ) f ( x ) d x ​"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA\n是\nm×n\n矩阵，\nβ\n是\nm\n维非零列向量。若\nA\n有\nk\n阶非零子式，则",
    options: [{ key: "A", text: "当 k = m 时， A x = β 有解。" }, { key: "B", text: "当 k = m 时， A x = β 无解。" }, { key: "C", text: "当 k < m 时， A x = β 有解。" }, { key: "D", text: "当 k < m 时， A x = β 无解。" }],
    answer: ["A"],
    explain: "正确答案： A r ( A ) ≥ k 若 k = m ，则 r ( A ) = m ，且 r ( A , β ) = m （因为 β 是 m 维向量），因此 r ( A ) = r ( A , β ) = m 于是 A x = β 有解。"
  }),
  base(6, 'k-math-019', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA\n为 3 阶矩阵，则“\nA3−A2\n可对角化”是“\nA\n可对角化”的（ ）。",
    options: [{ key: "A", text: "充分不必要条件" }, { key: "B", text: "必要不充分条件" }, { key: "C", text: "充分必要条件" }, { key: "D", text: "既不充分也不必要条件" }],
    answer: ["B"],
    explain: "正确答案： B 若 A 可对角化，则 A 有 3 个线性无关的特征向量，因此 f ( A ) = A 3 − A 2 也有 3 个线性无关的特征向量，即 f ( A ) 可对角化。这表明必要性成立。 现给出反例：取 A = ​ 0 0 0 ​ 0 0 0 ​ 1 0 0 ​ ​ , 则 f ( A ) = A 3 − A 2 = O , 而零矩阵可对角化，但 A 不可对角化。因此充分性不成立。 故选 B。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\nA=(1−22−a)\n，\nB=(110a)\n。若\nf(x,y)=∣xA+yB∣\n是正定二次型，则\na\n的取值范围是",
    options: [{ key: "A", text: "( 0 , 2 − 3 ​ ) 。" }, { key: "B", text: "( 2 − 3 ​ , 2 + 3 ​ ) 。" }, { key: "C", text: "( 2 + 3 ​ , 4 ) 。" }, { key: "D", text: "( 0 , 4 ) 。" }],
    answer: ["B"],
    explain: "正确答案： B f ( x , y ) ​ = ∣ x A + y B ∣ = ​ x + y − 2 x + y ​ 2 x − a x + a y ​ ​ = ( 4 − a ) x 2 + a y 2 − 2 x y = ( x , y ) ( 4 − a − 1 ​ − 1 a ​ ) ( x y ​ ) ​ 正定需满足： { 4 − a > 0 ( 4 − a ) a − ( − 1 ) ( − 1 ) > 0 ​ ⇒ { a < 4 a 2 − 4 a + 1 < 0 ​ ⇒ 2 − 3 ​ < a < 2 + 3 ​ 故 a ∈ ( 2 − 3 ​ , 2 + 3 ​ ) 。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n服从正态分布\nN(−1,1)\n，\nY\n服从正态分布\nN(1,2)\n，若\nX\n与\nX+2Y\n不相关，则\nX\n与\nX−Y\n的相关系数为？",
    options: [{ key: "A", text: "3 1 ​" }, { key: "B", text: "2 1 ​" }, { key: "C", text: "3 2 ​" }, { key: "D", text: "4 3 ​" }],
    answer: ["D"],
    explain: "正确答案： D 由 X 与 X + 2 Y 不相关，得 Cov ( X , X + 2 Y ) = Cov ( X , X ) + 2 Cov ( X , Y ) = D X + 2 Cov ( X , Y ) = 0 因为 D X = 1 ，所以 Cov ( X , Y ) = − 2 1 ​ 计算协方差： Cov ( X , X − Y ) ​ = Cov ( X , X ) − Cov ( X , Y ) = D X − Cov ( X , Y ) = 1 − ( − 2 1 ​ ) = 2 3 ​ ​ 计算方差： D ( X − Y ) = D X + D Y − 2 Cov ( X , Y ) = 1 + 2 − 2 × ( − 2 1 ​ ) = 4 相关系数为： ρ X , X − Y ​ = D X ​ ⋅ D ( X − Y ) ​ Cov ( X , X − Y ) ​ = 1 × 2 2 3 ​ ​ = 4 3 ​"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nX1,X2,⋯,X20\n是来自总体\nB(1,0.1)\n的简单随机样本，令\nT=∑i=120Xi\n，则用泊松近似方法可得\nP{T≤1}≈",
    options: [{ key: "A", text: "e 2 1 ​" }, { key: "B", text: "e 2 2 ​" }, { key: "C", text: "e 2 3 ​" }, { key: "D", text: "e 2 4 ​" }],
    answer: ["C"],
    explain: "正确答案： C 由题意， T ∼ B ( 20 , 0.1 ) ， n p = 20 × 0.1 = 2 ，使用泊松近似 T ∼ P ( 2 ) 。 P { T ≤ 1 } = P { T = 0 } + P { T = 1 } = 0 ! 2 0 ​ e − 2 + 1 ! 2 1 ​ e − 2 = e − 2 + 2 e − 2 = e 2 3 ​"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设总体\nX\n的分布函数为\nF(x)\n，\nx1,x2,⋯,xn\n为来自总体\nX\n的简单随机样本，样本的经验分布函数为\nFn(x)\n。对于给定的\nx\n（\n0F(x)1\n），\nD(Fn(x))=()\n。",
    options: [{ key: "A", text: "F ( x ) ( 1 − F ( x ))" }, { key: "B", text: "( F ( x ) ) 2" }, { key: "C", text: "n 1 ​ F ( x ) ( 1 − F ( x ))" }, { key: "D", text: "n 1 ​ ( F ( x ) ) 2" }],
    answer: ["C"],
    explain: "正确答案： C F n ​ ( x ) 为样本中 { x i ​ ≤ x } 发生的频率。令 I i ​ ( x ) = { 1 , 0 , ​ x i ​ ≤ x x i ​ > x ​ 则 I i ​ ( x ) ∼ B ( 1 , F ( x )) 。 由定义可得 F n ​ ( x ) = n 1 ​ i = 1 ∑ n ​ I i ​ ( x ) 因此 D ( F n ​ ( x )) = n 2 1 ​ i = 1 ∑ n ​ D ( I i ​ ( x )) = n 1 ​ F ( x ) ( 1 − F ( x )) ."
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\ng(x)\n是函数\nf(x)=21ln3−x3+x\n的反函数，则曲线\ny=g(x)\n的渐近线方程为",
    answerText: "】 y = 3 和 y = − 3 【",
    referenceAnswer: "【答案】 y = 3 和 y = − 3 【解析】 y ⇒ 2 y ⇒ e 2 y ⇒ x ​ = 2 1 ​ ln 3 − x 3 + x ​ = ln 3 − x 3 + x ​ = 3 − x 3 + x ​ = 3 − x 6 ​ − 1 = 3 − e 2 y + 1 6 ​ ​ g ( x ) = 3 − e 2 y + 1 6 ​ , x lim ​ g ( x ) = 3 , x lim ​ g ( x ) = − 3 故 y = g ( x ) 的渐近线方程为",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\n∫1+∞x(2x+a)adx=ln2\n，则\na=\n______。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 计算积分 ∫ 1 + ∞ ​ ( x 1 ​ − 2 x + a 2 ​ ) d x 可得 ln 2 x + a x ​ ​ 1 + ∞ ​ = ln 2 因此， a = 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）微分方程\nxy′−y+x2ex=0\n满足条件\ny(1)=−e\n的解为\ny=\n______。",
    answerText: "】 y = − x e x 【",
    referenceAnswer: "【答案】 y = − x e x 【解析】 x y ′ − y + x 2 e x = 0 ⇒ y ′ − x y ​ = − x e x y = e ∫ x 1 ​ d x [ ∫ e − ∫ x 1 ​ d x ( − x e x ) d x + C ] y = − x ( e x + C ) 代入 y ( 1 ) = − e 得 C = 0 。 因此解为 y = − x e x 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知函数\nz=z(x,y)\n由\n\nz+lnz−∫yxte−t2dt=1\n\n确定，则\n\n∂x2∂2z(1,1)=______",
    answerText: "】 8 1 ​ e − 2 【",
    referenceAnswer: "【答案】 8 1 ​ e − 2 【解析】 ∂ x ∂ z ​ ​ ( 1 , 1 ) ​ = 1 + z 1 ​ ∫ y x ​ e − t 2 d t + x e − x 2 ​ ​ ( 1 , 1 ) ​ = 2 e − 1 ​ ∂ x 2 ∂ 2 z ​ ​ ( 1 , 1 ) ​ = ( 1 + z 1 ​ ) 2 [ 2 e − x 2 + x e − x 2 ( − 2 x ) ] ( 1 + z 1 ​ ) + z 2 1 ​ ( ∫ y x ​ e − t 2 d t + x e − x 2 ) ∂ x ∂ z ​ ​ ( 1 , 1 ) ​ ​ 代入数值后得： 4 e − 1 ⋅ 2 e − 1 ​ ​ = 8 e − 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\n\nf(x)=2x+12x−32x+12x−434x24x2x+1−22x+1−21111,g(x)=2x+15x+102x1−21−22x+14x2x+14x3−32−4,\n\n且\nf(x)=g(x)\n，则不同的根的个数为",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 f ( x ) = ​ 2 x + 1 2 x 0 ​ 2 x + 1 4 x 0 ​ 1 − 2 0 ​ ​ = 0 g ( x ) = x ( − 8 x − 2 ) = 0 可得两个根 x 1 ​ = − 4 1 ​ ， x 2 ​ = 0 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\nA\n、\nB\n、\nC\n为三个随机事件，且\nA\n与\nB\n相互独立，\nB\n与\nC\n相互独立，\nA\n与\nC\n互不相容，已知\nP(A)=P(C)=41\n，\nP(B)=21\n，则在事件\nA\n、\nB\n、\nC\n至少有一个发生的条件下，\nA\n、\nB\n、\nC\n中恰有一个发生的概率为 ______。",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 首先计算事件 A ∪ B ∪ C 的概率： P ( A ∪ B ∪ C ) = P ( A ) + P ( B ) + P ( C ) − P ( A B ) − P ( BC ) 由于事件 A 与 B 相互独立， B 与 C 相互独立，代入已知概率： ​ = P ( A ) + P ( B ) + P ( C ) − P ( A ) P ( B ) − P ( B ) P ( C ) = 4 1 ​ + 2 1 ​ + 4 1 ​ − 8 1 ​ − 8 1 ​ = 4 3 ​ ​ 接下来计算仅有两个事件同时发生的概率： ​ P ( A B C ) + P ( A B C ) + P ( A BC ) = P ( A C ) + P ( A C ) = P ( A ) + P ( C ) − 2 P ( A C ) = 4 1 ​ + 4 1 ​ = 2 1 ​ ​ 最后计算条件概率： P = 4 3 ​ 2 1 ​ ​ = 3 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）计算\n\n∫01(x+1)(x2−2x+2)1dx",
    referenceAnswer: "【答案】 10 3 ​ ln 2 + 10 1 ​ π 【解析】 ​ ∫ 0 1 ​ ( x + 1 ) ( x 2 − 2 x + 2 ) 1 ​ d x = ∫ 0 1 ​ ( x + 1 A ​ + x 2 − 2 x + 2 B x + C ​ ) d x = ∫ 0 1 ​ ( x + 1 5 1 ​ ​ + x 2 − 2 x + 2 − 5 1 ​ x + 5 3 ​ ​ ) d x = 5 1 ​ ln ∣1 + x ∣ ​ 0 1 ​ − 10 1 ​ ln ∣ x 2 − 2 x + 2∣ ​ 0 1 ​ + 5 2 ​ arctan ( x − 1 ) ​ 0 1 ​ = 10 3 ​ ln 2 + 10 1 ​ π ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数\nf(x)\n在\nx=0\n处连续，且\n\nx→0limln(1+x)+ln(1−x)xf(x)−e2sinx+1=−3\n\n证明：\nf(x)\n在\nx=0\n处可导，并求\nf′(0)\n。",
    referenceAnswer: "【答案】 f ′ ( 0 ) = − 5 【解析】 已知 ln ( 1 + x ) + ln ( 1 − x ) = ln ( 1 − x 2 ) ∼ − x 2 （ x → 0 ）。 e 2 s i n x = 1 + 2 sin x + 2 1 ​ ( 2 sin x ) 2 + o ( x 2 ) = 1 + 2 sin x + 2 sin 2 x + o ( x 2 ) 因此， − 3 = x → 0 lim ​ − x 2 x f ( x ) − e 2 s i n x + 1 ​ = x → 0 lim ​ − x 2 x f ( x ) − 2 sin x − 2 sin 2 x ​ 进一步拆分为： x → 0 lim ​ x 2 x f ( x ) − 2 sin x ​ + x → 0 lim ​ − x 2 − 2 sin 2 x ​ 由于 lim x → 0 ​ − x 2 − 2 s i n 2 x ​ = 2 ，可得： x → 0 lim ​ x 2 x f ( x ) − 2 sin x ​ = − 5 将 sin x 展开为 sin x = x − 6 1 ​ x 3 + o ( x 3 ) ，代入得： x → 0 lim ​ x 2 x f ( x ) − 2 x + 3 1 ​ x 3 + o ( x 3 ) ​ = − 5 即： x → 0 lim ​ x 2 x ( f ( x ) − 2 ) + 3 1 ​ x 3 + o ( x 3 ) ​ = − 5 分子分母同除以 x ，得： x → 0 lim ​ x f ( x ) − 2 + 3 1 ​ x 2 + o ( x 2 ) ​ = − 5 由于分母趋于 0 且极限存在，分子必趋于 0，即： x → 0 lim ​ ( f ( x ) − 2 ) = 0 因此 f ( 0 ) = 2 。 于是： x → 0 lim ​ x f ( x ) − 2 ​ = − 5 即 f ′ ( 0 ) = − 5 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设区域\nD={(x,y)∣y2≤x,x2≤y}\n，计算\n∬D(x−y+1)2dxdy\n。",
    referenceAnswer: "【答案】 210 71 ​ 【解析】 ∬ D ​ ( x − y + 1 ) 2 d x d y = ∬ D ​ ( ( x − y ) 2 + 2 ( x − y ) + 1 ) d x d y 由轮换对称性， ∬ D ​ ( x − y ) d x d y = 0 。 计算 ∬ D ​ ( x − y ) 2 d x d y ： = ∫ 0 1 ​ d x ∫ x 2 x ​ ​ ( x − y ) 2 d y = ∫ 0 1 ​ [ 3 1 ​ ( y − x ) 3 ] x 2 x ​ ​ d x = 3 1 ​ ∫ 0 1 ​ [ ( x ​ − x ) 3 − ( x 2 − x ) 3 ] d x = 3 1 ​ × 70 1 ​ = 210 1 ​ 计算 ∬ D ​ 1 d x d y ： = ∫ 0 1 ​ d x ∫ x 2 x ​ ​ d y = ∫ 0 1 ​ ( x ​ − x 2 ) d x = 3 2 ​ − 3 1 ​ = 3 1 ​ 故原积分 = 210 1 ​ + 3 1 ​ = 210 71 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设函数\nf(x)\n在区间\n(a,b)\n内可导，证明：导函数\nf′(x)\n在\n(a,b)\n内严格单调增加的充分必要条件是：对\n(a,b)\n内任意的\nx1,x2,x3\n，且\nx1x2x3\n，有\n\nx2−x1f(x2)−f(x1)x3−x2f(x3)−f(x2)",
    referenceAnswer: "【答案】 见解析 【解析】 充分性证明 若对任意 x 1 ​ < x 2 ​ < x 3 ​ ，有 x 2 ​ − x 1 ​ f ( x 2 ​ ) − f ( x 1 ​ ) ​ < x 3 ​ − x 2 ​ f ( x 3 ​ ) − f ( x 2 ​ ) ​ , 在区间内取任意 x 1 ​ < x 2 ​ < x 3 ​ < x 4 ​ ，则有 x 2 ​ − x 1 ​ f ( x 2 ​ ) − f ( x 1 ​ ) ​ < x 3 ​ − x 2 ​ f ( x 3 ​ ) − f ( x 2 ​ ) ​ < x 4 ​ − x 3 ​ f ( x 4 ​ ) − f ( x 3 ​ ) ​ . 令 x 2 ​ → x 1 + ​ ，得 f + ′ ​ ( x 1 ​ ) ≤ x 3 ​ − x 1 ​ f ( x 3 ​ ) − f ( x 1 ​ ) ​ . 令 x 2 ​ → x 3 − ​ ，得 x 3 ​ − x 1 ​ f ( x 3 ​ ) − f ( x 1 ​ ) ​ ≤ f − ′ ​ ( x 3 ​ ) . 由 f ( x ) 可导，有 f + ′ ​ ( x 1 ​ ) = f − ′ ​ ( x 1 ​ ) = f ′ ( x 1 ​ ) , f + ′ ​ ( x 3 ​ ) = f − ′ ​ ( x 3 ​ ) = f ′ ( x 3 ​ ) , 因此 f ′ ( x 1 ​ ) < f ′ ( x 3 ​ ) , 即 f ′ ( x ) 严格单调递增。 必要性证明 已知 f ′ ( x ) 严格单调递增，在 [ x 1 ​ , x 2 ​ ] 和 [ x 2 ​ , x 3 ​ ] 上分别应用拉格朗日中值定理，存在 ξ 1 ​ ∈ ( x 1 ​ , x 2 ​ ) ， ξ 2 ​ ∈ ( x 2 ​ , x 3 ​ ) ，使得 f ′ ( ξ 1 ​ ) = x 2 ​ − x 1 ​ f ( x 2 ​ ) − f ( x 1 ​ ) ​ , f ′ ( ξ 2 ​ ) = x 3 ​ − x 2 ​ f ( x 3 ​ ) − f ( x 2 ​ ) ​ . 由于 ξ 1 ​ < ξ 2 ​ 且 f ′ ( x ) 严格递增，有 f ′ ( ξ 1 ​ ) < f ′ ( ξ 2 ​ ) , 即 x 2 ​ − x 1 ​ f ( x 2 ​ ) − f ( x 1 ​ ) ​ < x 3 ​ − x 2 ​ f ( x 3 ​ ) − f ( x 2 ​ ) ​ . 综上，充要条件得证。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设矩阵\n\nA=1−11−1013−2a0−a2−1−13\n\n的秩为\n2\n。\n\n（1）求\na\n的值；\n\n（2）求\nA\n的列向量组的一个极大线性无关组\nα,β\n，并求矩阵\nH\n，使得\nA=GH\n，其中\nG=(α,β)\n。",
    referenceAnswer: "【答案】 (1) a = 1 (2) 列向量组的一个极大线性无关组为 α = ​ 1 − 1 1 ​ ​ , β = ​ − 1 0 1 ​ ​ ，矩阵 H = [ 1 0 ​ 0 1 ​ 2 − 1 ​ 1 1 ​ 1 2 ​ ] 【解析】 (1) 对矩阵 A 作初等行变换： A → ​ 1 0 0 ​ − 1 − 1 0 ​ 3 1 a − 1 ​ 0 − a − 2 a + 2 ​ − 1 − 2 0 ​ ​ 因为 r ( A ) = 2 ，所以第三行元素全为 0，即 a − 1 = 0 且 − 2 a + 2 = 0 ，解得 a = 1 。 (2) 当 a = 1 时，矩阵 A 经初等行变换为： A → ​ 1 0 0 ​ − 1 − 1 0 ​ 3 1 0 ​ 0 − 1 0 ​ − 1 − 2 0 ​ ​ 令 A = ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ , α 5 ​ ) ，则列向量组的一个极大线性无关组为 α 1 ​ , α 2 ​ ，即 α = α 1 ​ = ( 1 , − 1 , 1 ) T ， β = α 2 ​ = ( − 1 , 0 , 1 ) T 。 由列向量线性关系： α 3 ​ = 2 α 1 ​ − α 2 ​ , α 4 ​ = α 1 ​ + α 2 ​ , α 5 ​ = α 1 ​ + 2 α 2 ​ 故矩阵 H = [ 1 0 ​ 0 1 ​ 2 − 1 ​ 1 1 ​ 1 2 ​ ] ，满足 A = G H 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）投保人的损失事件发生时，保险公司的赔付额\nY\n与投保人的损失额\nX\n的关系为\n\nY={0,X−100,X≤100X>100\n\nX\n的概率密度为\n\nf(x)=⎩⎨⎧(100+x)32×1002,0,x>0x≤0\n\n（1）求\nP{Y>0}\n及\nEY\n；\n\n（2）这种损失事件在一年内发生的次数记为\nN\n，保险公司在一年内就这种损失事件产生的理赔次数记为\nM\n，假设\nN\n服从参数为 8 的泊松分布，在\nN=n(n≥1)\n的条件下，\nM\n服从二项分布\nB(n,p)\n，其中\np=P{Y>0}\n，求\nM\n的概率分布。",
    referenceAnswer: "【答案】 (1) P { Y > 0 } = 4 1 ​ , E Y = 50 。 (2) M 的概率分布为 M ∼ P ( 2 ) ，即 P { M = m } = m ! 2 m e − 2 ​ , m = 0 , 1 , 2 , ⋯ 。 【解析】 (1) P { Y > 0 } = P { X > 100 } = ∫ 100 + ∞ ​ ( 100 + x ) 3 2 × 10 0 2 ​ d x 。 令 t = 100 + x ，则积分化为： ∫ 200 + ∞ ​ t 3 2 × 10 0 2 ​ d t = − t 2 10 0 2 ​ ​ 200 + ∞ ​ = 20 0 2 10 0 2 ​ = 4 1 ​ . 计算 E Y ： E Y = ∫ 100 + ∞ ​ ( x − 100 ) ⋅ ( 100 + x ) 3 2 × 10 0 2 ​ d x . 令 t = x − 100 ，则 x = t + 100 ，积分化为： ∫ 0 + ∞ ​ t ⋅ ( 200 + t ) 3 2 × 10 0 2 ​ d t . 再令 u = 200 + t ，则 t = u − 200 ，积分化为： 2 × 10 0 2 ∫ 200 + ∞ ​ u 3 u − 200 ​ d u = 2 × 10 0 2 ( ∫ 200 + ∞ ​ u 2 1 ​ d u − 200 ∫ 200 + ∞ ​ u 3 1 ​ d u ) . 计算得： 2 × 10 0 2 ( − u 1 ​ ​ 200 + ∞ ​ − 200 × − 2 u 2 1 ​ ​ 200 + ∞ ​ ) = 2 × 10 0 2 ( 200 1 ​ − 20 0 2 100 ​ ) = 50. (2) 由题意， N ∼ P ( 8 ) ， M ∣ N = n ∼ B ( n , 4 1 ​ ) 。 计算 M 的概率分布： P { M = m } ​ = n = m ∑ ∞ ​ P { N = n } ⋅ P { M = m ∣ N = n } = n = m ∑ ∞ ​ n ! 8 n e − 8 ​ ⋅ C n m ​ ( 4 1 ​ ) m ( 4 3 ​ ) n − m . ​ 化简得： m ! ( 8 × 4 1 ​ ) m e − 8 ​ n = m ∑ ∞ ​ ( n − m )! ( 8 × 4 3 ​ ) n − m ​ = m ! 2 m e − 8 ​ k = 0 ∑ ∞ ​ k ! 6 k ​ = m ! 2 m e − 8 ⋅ e 6 ​ = m ! 2 m e − 2 ​ . 因此， M 服从参数为 2 的泊松分布，即 M ∼ P ( 2 ) ，概率分布为： P { M = m } = m ! 2 m e − 2 ​ , m = 0 , 1 , 2 , ⋯ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2025_math3 = {
  id: P, year: Y,
  title: '2025 年全国硕士研究生招生考试 数学（三）',
  short: '2025 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2025_math3.length,
  qids: questions2025_math3.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
