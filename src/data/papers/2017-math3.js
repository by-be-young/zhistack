const P = 'paper-2017-math3'
const Y = 2017
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2017-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2017 考研数学（三）真题',
  ...extra
})

export const questions2017_math3 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数\nf(x)={1−cosx,ax+b,x>0x≤0\n在\nx=0\n处连续，则（ ）",
    options: [{ key: "A", text: "ab = 2 1 ​" }, { key: "B", text: "ab = − 2 1 ​" }, { key: "C", text: "a + b = 2 1 ​" }, { key: "D", text: "a + b = 2" }],
    answer: ["A"],
    explain: "正确答案： A 详解 当 x → 0 + 时，有： 1 − cos x ​ ∼ 2 1 ​ x 因此，极限可表示为： x → 0 + lim ​ f ( x ) = x → 0 + lim ​ a x + b 2 1 ​ x ​ 在 x → 0 + 时，分母趋近于 b 。为了使极限存在且函数在 x = 0 处连续，分子分母必须为同阶无穷小，即 b = 0 。此时： x → 0 + lim ​ f ( x ) = x → 0 + lim ​ a x 2 1 ​ x ​ = 2 a 1 ​ 由左极限和连续性条件： x → 0 − lim ​ f ( x ) = b = 0 = f ( 0 ) 可知 2 a 1 ​ = 0 不成立，说明原解析中题目可能存在排版问题。 推测题目应为： f ( x ) = { a x 1 − c o s x ​ ​ , b , ​ x > 0 x ≤ 0 ​ 此时： x → 0 + lim ​ f ( x ) = x → 0 + lim ​ a x 2 1 ​ x ​ = 2 a 1 ​ x → 0 − lim ​ f ( x ) = b = f ( 0 ) 函数在 x = 0 处连续必须满足： 2 a 1 ​ = b ⇒ ab = 2 1 ​ 因此，应选 (A)。"
  }),
  base(2, 'k-math-011', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "二元函数\nz=xy(3−x−y)\n的极值点是（ ）",
    options: [{ key: "A", text: "( 0 , 0 )" }, { key: "B", text: "( 0 , 3 )" }, { key: "C", text: "( 3 , 0 )" }, { key: "D", text: "( 1 , 1 )" }],
    answer: ["D"],
    explain: "正确答案： D 详解 首先计算偏导数： ∂ x ∂ z ​ = y ( 3 − x − y ) − x y = 3 y − 2 x y − y 2 ∂ y ∂ z ​ = 3 x − x 2 − 2 x y 二阶偏导数为： ∂ x 2 ∂ 2 z ​ = − 2 y ∂ y 2 ∂ 2 z ​ = − 2 x ∂ x ∂ y ∂ 2 z ​ = ∂ y ∂ x ∂ 2 z ​ = 3 − 2 x 令偏导数为零，求解驻点： { ∂ x ∂ z ​ = 3 y − 2 x y − y 2 = 0 ∂ y ∂ z ​ = 3 x − x 2 − 2 x y = 0 ​ 在点 ( 1 , 1 ) 处计算判别式： A = − 2 × 1 = − 2 C = − 2 × 1 = − 2 B = 3 − 2 × 1 = 1 判别式结果为： A C − B 2 = ( − 2 ) × ( − 2 ) − 1 2 = 4 − 1 = 3 > 0 且 A = C = − 2 < 0 ，因此 ( 1 , 1 ) 为函数的极大值点。所以应该选 (D) 。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n是可导函数，且满足\nf(x)f′(x)>0\n，则（ ）",
    options: [{ key: "A", text: "f ( 1 ) > f ( − 1 )" }, { key: "B", text: "(f(1)" }, { key: "C", text: "∣ f ( 1 ) ∣ > ∣ f ( − 1 ) ∣" }, { key: "D", text: "∣ f ( 1 ) ∣ < ∣ f ( − 1 ) ∣" }],
    answer: ["C"],
    explain: "正确答案： C 设 g ( x ) = ( f ( x ) ) 2 ，则导数为： g ′ ( x ) = 2 f ( x ) f ′ ( x ) > 0 这表明 ( f ( x ) ) 2 是单调递增函数。因此，可以得到： ( f ( 1 ) ) 2 > ( f ( − 1 ) ) 2 ⇒ ∣ f ( 1 ) ∣ > ∣ f ( − 1 ) ∣ 所以正确答案是 (C) 。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若级数\n∑n=2∞[sinn1−kln(1−n1)]\n收敛，则\nk=( )\n。",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2" }, { key: "C", text: "− 1" }, { key: "D", text: "− 2" }],
    answer: ["C"],
    explain: "正确答案： C 当 n → ∞ 时，有以下等价关系： sin n 1 ​ ∼ n 1 ​ ln ( 1 − n 1 ​ ) ∼ − n 1 ​ − 2 n 2 1 ​ + o ( n 2 1 ​ ) 因此，表达式可以展开为： sin n 1 ​ − k ln ( 1 − n 1 ​ ) = n 1 ​ − k ( − n 1 ​ − 2 n 2 1 ​ ) + o ( n 2 1 ​ ) 进一步化简为： ( 1 + k ) n 1 ​ + 2 n 2 k ​ + o ( n 2 1 ​ ) 级数收敛的条件是一般项为 n 1 ​ 的高阶无穷小，即 1 + k = 0 ，解得 k = − 1 。此时，一般项为 n 2 1 ​ 的无穷小，级数收敛。因此，正确答案为 (C)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα\n为\nn\n维单位列向量，\nE\n为\nn\n阶单位矩阵，则（ ）",
    options: [{ key: "A", text: "E − α α T 不可逆" }, { key: "B", text: "E + α α T 不可逆" }, { key: "C", text: "E + 2 α α T 不可逆" }, { key: "D", text: "E − 2 α α T 不可逆" }],
    answer: ["A"],
    explain: "正确答案： A 矩阵 α α T 的特征值为 1 和 n − 1 个 0 。由此可得： 矩阵 E − α α T 的特征值为 1 − 1 = 0 和 n − 1 个 1 。 矩阵 E + α α T 的特征值为 1 + 1 = 2 和 n − 1 个 1 。 矩阵 E + 2 α α T 的特征值为 1 + 2 = 3 和 n − 1 个 1 。 矩阵 E − 2 α α T 的特征值为 1 − 2 = − 1 和 n − 1 个 1 。 显然，只有 E − α α T 存在零特征值，因此不可逆，应选 (A)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\n\nA=200020011,B=200120001,C=100020002,\n\n则（ ）",
    options: [{ key: "A", text: "A ， C 相似， B ， C 相似" }, { key: "B", text: "A ， C 相似， B ， C 不相似" }, { key: "C", text: "A ， C 不相似， B ， C 相似" }, { key: "D", text: "A ， C 不相似， B ， C 不相似" }],
    answer: ["B"],
    explain: "正确答案： B 矩阵 A 和 B 的特征值都是 λ 1 ​ = λ 2 ​ = 2 ， λ 3 ​ = 1 。判断它们是否可对角化，只需考察 λ = 2 的情况。 对于矩阵 A ，有： 2 E − A = ​ 0 0 0 ​ 0 0 0 ​ 0 − 1 1 ​ ​ 其秩为 1 ，因此对应 λ = 2 有 3 − 1 = 2 个线性无关的特征向量。故 A 可对角化，且与 C 相似。 对于矩阵 B ，有： 2 E − B = ​ 0 0 0 ​ − 1 0 0 ​ 0 0 1 ​ ​ 其秩为 2 ，因此对应 λ = 2 只有 3 − 2 = 1 个线性无关的特征向量。故 B 不可对角化，且与 C 不相似。 综上所述，正确答案为 (B)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n，\nB\n，\nC\n是三个随机事件，且\nA\n，\nC\n相互独立，\nB\n，\nC\n相互独立，则\nA∪B\n与\nC\n相互独立的充分必要条件是（ ）",
    options: [{ key: "A", text: "A ， B 相互独立" }, { key: "B", text: "A ， B 互不相容" }, { key: "C", text: "A B ， C 相互独立" }, { key: "D", text: "A B ， C 互不相容" }],
    answer: ["C"],
    explain: "正确答案： C 详解 首先计算 P (( A ∪ B ) C ) ： P (( A ∪ B ) C ) ​ = P ( A C + BC ) = P ( A C ) + P ( BC ) − P ( A BC ) = P ( A ) P ( C ) + P ( B ) P ( C ) − P ( A BC ) ​ 接着计算 P ( A ∪ B ) P ( C ) ： P ( A ∪ B ) P ( C ) ​ = ( P ( A ) + P ( B ) − P ( A B ) ) P ( C ) = P ( A ) P ( C ) + P ( B ) P ( C ) − P ( A B ) P ( C ) ​ 比较两式可知， A ∪ B 与 C 相互独立的充分必要条件是： P ( A BC ) = P ( A B ) P ( C ) 即 A B 与 C 相互独立。因此，正确答案为 (C) 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1,X2,⋯,Xn(n≥2)\n为来自正态总体\nN(μ,1)\n的简单随机样本，若\nXˉ=n1∑i=1nXi\n，则下列结论中不正确的是（ ）",
    options: [{ key: "A", text: "∑ i = 1 n ​ ( X i ​ − μ ) 2 服从 χ 2 分布" }, { key: "B", text: "2 ( X n ​ − X 1 ​ ) 2 服从 χ 2 分布" }, { key: "C", text: "∑ i = 1 n ​ ( X i ​ − X ˉ ) 2 服从 χ 2 分布" }, { key: "D", text: "n ( X ˉ − μ ) 2 服从 χ 2 分布" }],
    answer: ["B"],
    explain: "正确答案： B 详解 (A): 因为 ( X i ​ − μ ) ∼ N ( 0 , 1 ) ，所以 ( X i ​ − μ ) 2 ∼ χ 2 ( 1 ) ，且相互独立。因此， ∑ i = 1 n ​ ( X i ​ − μ ) 2 服从 χ 2 ( n ) 分布，结论正确。 (B): ( X n ​ − X 1 ​ ) ∼ N ( 0 , 2 ) ，则 2 ​ X n ​ − X 1 ​ ​ ∼ N ( 0 , 1 ) ，所以 2 1 ​ ( X n ​ − X 1 ​ ) 2 ∼ χ 2 ( 1 ) 。然而， 2 ( X n ​ − X 1 ​ ) 2 不服从 χ 2 分布，结论错误。 (C): ∑ i = 1 n ​ ( X i ​ − X ˉ ) 2 = ( n − 1 ) S 2 ，其中 S 2 为样本方差，且 σ 2 ( n − 1 ) S 2 ​ ∼ χ 2 ( n − 1 ) 。这里 σ 2 = 1 ，所以 ∑ i = 1 n ​ ( X i ​ − X ˉ ) 2 服从 χ 2 ( n − 1 ) 分布，结论正确。 (D): X ˉ ∼ N ( μ , n 1 ​ ) ，则 n ​ ( X ˉ − μ ) ∼ N ( 0 , 1 ) ，所以 n ( X ˉ − μ ) 2 ∼ χ 2 ( 1 ) ，结论正确。 综上所述，不正确的是 (B)，应该选择 (B)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\n∫−ππ(sin3x+π2−x2)dx=",
    answerText: "】 2 π 3 ​ 【",
    referenceAnswer: "【答案】 2 π 3 ​ 【解析】 由对称性知 ∫ − π π ​ ( sin 3 x + π 2 − x 2 ​ ) d x = 2 ∫ 0 π ​ π 2 − x 2 ​ d x = 2 π 3 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）差分方程\nyt+1−2yt=2t\n的通解为",
    answerText: "】 y = C ⋅ 2 t + 2 1 ​ t ⋅ 2 t 【",
    referenceAnswer: "【答案】 y = C ⋅ 2 t + 2 1 ​ t ⋅ 2 t 【解析】 齐次差分方程 y t + 1 ​ − 2 y t ​ = 0 的通解为 y = C ⋅ 2 t 。 设非齐次差分方程 y t + 1 ​ − 2 y t ​ = 2 t 的特解为 y t ​ = a t ⋅ 2 t ，代入方程后解得 a = 2 1 ​ 。 因此，差分方程 y t + 1 ​ − 2 y t ​ = 2 t 的通解为 y = C ⋅ 2 t + 2 1 ​ t ⋅ 2 t 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设生产某产品的平均成本为\nCˉ(Q)=1+e−Q\n，其中产量为\nQ\n，则边际成本为\n\n。",
    answerText: "】 1 + ( 1 − Q ) e − Q 【",
    referenceAnswer: "【答案】 1 + ( 1 − Q ) e − Q 【解析】 平均成本为 C ˉ ( Q ) = 1 + e − Q ，则总成本为 C ( Q ) = Q C ˉ ( Q ) = Q + Q e − Q 边际成本为 C ′ ( Q ) = 1 + ( 1 − Q ) e − Q",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(x,y)\n具有一阶连续的偏导数，且已知\n\ndf(x,y)=yeydx+x(1+y)eydy,\n\nf(0,0)=0\n，则\nf(x,y)=",
    answerText: "】 f ( x , y ) = x y e y 【",
    referenceAnswer: "【答案】 f ( x , y ) = x y e y 【解析】 我们有以下微分形式： df ( x , y ) = y e y d x + x ( 1 + y ) e y d y = d ( x y e y ) 因此，可以得到： f ( x , y ) = x y e y + C 由初始条件 f ( 0 , 0 ) = 0 ，解得 C = 0 。最终结果为： f ( x , y ) = x y e y",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA=110011121\n，\nα1\n、\nα2\n、\nα3\n为线性无关的三维列向量，则向量组\nAα1\n、\nAα2\n、\nAα3\n的秩为 __________。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 对矩阵 A 进行初等行变换： A = ​ 1 1 0 ​ 0 1 1 ​ 1 2 1 ​ ​ → ​ 1 0 0 ​ 0 1 1 ​ 1 1 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 1 1 0 ​ ​ 所以矩阵 A 的秩为 2。 因为 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性无关，所以向量组 A α 1 ​ 、 A α 2 ​ 、 A α 3 ​ 的秩等于矩阵 A 的秩，即为 2。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n的概率分布为\nP{X=−2}=21\n，\nP{X=1}=a\n，\nP{X=3}=b\n。若\nE(X)=0\n，则\nD(X)=\n________。",
    answerText: "】 2 9 ​ 【",
    referenceAnswer: "【答案】 2 9 ​ 【解析】 由概率分布的性质，知 a + b + 2 1 ​ = 1 。 期望值计算如下： EX = − 2 × 2 1 ​ + 1 × a + 3 × b = a + 3 b − 1 = 0 解得 a = 4 1 ​ ， b = 4 1 ​ 。 进一步计算二阶矩和方差： E X 2 = ( − 2 ) 2 × 2 1 ​ + 1 2 × 4 1 ​ + 3 2 × 4 1 ​ = 2 + 4 1 ​ + 4 9 ​ = 2 9 ​ D X = E X 2 − ( EX ) 2 = 2 9 ​ − 0 = 2 9 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nx→0+limx3∫0xx−tetdt",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 令 x − t = u ，则 t = x − u ， d t = − d u 。于是积分变换为： ∫ 0 x ​ x − t ​ e t d t = ∫ 0 x ​ u ​ e x − u d u 接下来计算极限： x → 0 + lim ​ x 3 ​ ∫ 0 x ​ x − t ​ e t d t ​ = x → 0 + lim ​ x 3 ​ e x ∫ 0 x ​ u ​ e − u d u ​ 由于 e x → 1 当 x → 0 + ，可以简化为： x → 0 + lim ​ x 3 ​ ∫ 0 x ​ u ​ e − u d u ​ 应用洛必达法则，分子和分母分别对 x 求导： x → 0 + lim ​ 2 3 ​ x ​ x ​ e − x ​ = 3 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算积分\n\n∬D(1+x2+y4)2y3dxdy\n\n其中\nD\n是以曲线\ny=x\n与\nx\n轴为边界的无界区域。",
    referenceAnswer: "【答案】 8 π ​ ( 1 − 2 2 ​ ​ ) 【解析】 ∬ D ​ ( 1 + x 2 + y 4 ) 2 y 3 ​ d x d y ​ = ∫ 0 + ∞ ​ d x ∫ 0 x ​ ​ ( 1 + x 2 + y 4 ) 2 y 3 ​ d y = 4 1 ​ ∫ 0 + ∞ ​ d x ∫ 0 x ​ ​ ( 1 + x 2 + y 4 ) 2 d ( 1 + x 2 + y 4 ) ​ = 4 1 ​ ∫ 0 + ∞ ​ ( 1 + x 2 1 ​ − 1 + 2 x 2 1 ​ ) d x = 8 π ​ ( 1 − 2 2 ​ ​ ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nn→∞limk=1∑nn2kln(1+nk)",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 由定积分的定义 n → ∞ lim ​ k = 1 ∑ n ​ n 2 k ​ ln ( 1 + n k ​ ) ​ = n → ∞ lim ​ n 1 ​ k = 1 ∑ n ​ n k ​ ln ( 1 + n k ​ ) = ∫ 0 1 ​ x ln ( 1 + x ) d x = 2 1 ​ ∫ 0 1 ​ ln ( 1 + x ) d x 2 = 4 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知方程\nln(1+x)1−x1=k\n在区间\n(−1,0)∪(0,+∞)\n内有实根，确定常数\nk\n的取值范围。",
    referenceAnswer: "【答案】 (0,1) 【解析】 设 f ( x ) = l n ( 1 + x ) 1 ​ − x 1 ​ ，其中 x ∈ ( 0 , 1 ) 。则 f ′ ( x ) = − ( 1 + x ) ln 2 ( 1 + x ) 1 ​ + x 2 1 ​ = x 2 ( 1 + x ) ln 2 ( 1 + x ) ( 1 + x ) ln 2 ( 1 + x ) − x 2 ​ 令 g ( x ) = ( 1 + x ) ln 2 ( 1 + x ) − x 2 ，则 g ( 0 ) = 0 ， g ( 1 ) = 2 ln 2 2 − 1 。 g ′ ( x ) = ln 2 ( 1 + x ) − 2 ln ( 1 + x ) − 2 x , g ′ ( 0 ) = 0 g ′′ ( x ) = 1 + x 2 ( ln ( 1 + x ) − x ) ​ < 0 由于 g ′′ ( x ) < 0 在 ( 0 , 1 ) 上成立，所以 g ′ ( x ) 在 ( 0 , 1 ) 上单调减少。又因为 g ′ ( 0 ) = 0 ，所以当 x ∈ ( 0 , 1 ) 时， g ′ ( x ) < 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\na0=1\n,\na1=0\n,\nan+1=n+11(nan+an−1)\n(n=1,2,3⋯)\n.\nS(x)\n为幂级数\n∑n=0∞anxn\n的和函数。\n\n(1) 证明\n∑n=0∞anxn\n的收敛半径不小于 1。\n\n(2) 证明\n(1−x)S′(x)−xS(x)=0\n(x∈(−1,1))\n, 并求出和函数的表达式。",
    referenceAnswer: "【答案】 (1) 见解析。 (2) S ( x ) = 1 − x e − x ​ 【解析】 由条件 a n + 1 ​ = n + 1 1 ​ ( n a n ​ + a n − 1 ​ ) 可得 ( n + 1 ) a n + 1 ​ = n a n ​ + a n − 1 ​ 。于是得到： ( n + 1 ) ( a n + 1 ​ − a n ​ ) = − ( a n ​ − a n − 1 ​ ) 进一步得到： a n ​ − a n − 1 ​ a n + 1 ​ − a n ​ ​ = − n + 1 1 ​ , n = 1 , 2 , ⋯ 展开乘积关系： a 1 ​ − a 0 ​ a n + 1 ​ − a n ​ ​ = k = 1 ∏ n ​ a k ​ − a k − 1 ​ a k + 1 ​ − a k ​ ​ = ( − 1 ) n ( n + 1 )! 1 ​ 因此： a n + 1 ​ − a n ​ = ( − 1 ) n + 1 ( n + 1 )! 1 ​ 递推求和： a n + 1 ​ = k = 2 ∑ n ​ ( − 1 ) k + 1 k ! 1 ​ 收敛半径分析： ρ = n → ∞ lim ​ n ∣ a n ​ ∣ ​ ≤ n → ∞ lim ​ n 2 ! 1 ​ + 3 ! 1 ​ + ⋯ + n ! 1 ​ ​ ≤ n → ∞ lim ​ n e ​ = 1 所以收敛半径 R ≥ 1 。 对于幂级数 ∑ n = 0 ∞ ​ a n ​ x n ，求导得： S ′ ( x ) = n = 1 ∑ ∞ ​ n a n ​ x n − 1 计算 ( 1 − x ) S ′ ( x ) ： ( 1 − x ) S ′ ( x ) ​ = ( 1 − x ) n = 1 ∑ ∞ ​ n a n ​ x n − 1 = n = 1 ∑ ∞ ​ n a n ​ x n − 1 − n = 1 ∑ ∞ ​ n a n ​ x n = n = 0 ∑ ∞ ​ ( n + 1 ) a n + 1 ​ x n − n = 1 ∑ ∞ ​ n a n ​ x n = a 1 ​ + n = 1 ∑ ∞ ​ ( ( n + 1 ) a n + 1 ​ − n a n ​ ) x n = n = 1 ∑ ∞ ​ a n − 1 ​ x n = x n = 0 ∑ ∞ ​ a n ​ x n = x S ( x ) ​ 得到微分方程： ( 1 − x ) S ′ ( x ) − x S ( x ) = 0 , x ∈ ( − 1 , 1 ) 解此方程得： S ( x ) = 1 − x C e − x ​ 由初始条件 S ( 0 ) = a 0 ​ = 1 ，得 C = 1 。因此： S ( x ) = 1 − x e − x ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设三阶矩阵\nA=(α1,α2,α3)\n有三个不同的特征值，且\nα3=α1+2α2\n。\n\n(1) 证明：\nr(A)=2\n；\n\n(2) 若\nβ=α1+α2+α3\n，求方程组\nAx=β\n的通解。",
    referenceAnswer: "【答案】 (1) 见解析 (2) x = k ​ 1 2 − 1 ​ ​ + ​ 1 1 1 ​ ​ , k ∈ R 【解析】 (1) 证明：因为矩阵有三个不同的特征值，所以 A 是非零矩阵，即 r ( A ) ≥ 1 。 假若 r ( A ) = 1 ，则 r = 0 是矩阵的二重特征值，与条件矛盾，因此 r ( A ) ≥ 2 。又因为 α 3 ​ − α 1 ​ + 2 α 2 ​ = 0 ，即 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性相关，故 r ( A ) < 3 ，因此 r ( A ) = 2 。 (2) 因为 r ( A ) = 2 ，所以 A x = 0 的基础解系中只有一个线性无关的解向量。由于 α 3 ​ − α 1 ​ + 2 α 2 ​ = 0 ，故 x = ​ 1 2 − 1 ​ ​ 是 A x = 0 的解。 设 β = α 1 ​ + α 2 ​ + α 3 ​ ，则 A x = β 有特解 x = ​ 1 1 1 ​ ​ 因此， A x = β 的通解为 x = k ​ 1 2 − 1 ​ ​ + ​ 1 1 1 ​ ​ , k ∈ R",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型\n\nf(x1,x2,x3)=2x12−x22+ax32+2x1x2−8x1x3+2x2x3\n\n在正交变换\nx=Qy\n下的标准形为\nλ1y12+λ2y22\n，求\na\n的值及一个正交矩阵\nQ\n。\n\n已知二次型的矩阵为\n\nA=21−41−11−41a",
    referenceAnswer: "【答案】 a = 2 正交矩阵 Q = ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ 【解析】 因为二次型的标准形为 λ 1 ​ y 1 2 ​ + λ 2 ​ y 2 2 ​ ，也就说明矩阵 A 有零特征值，所以 ∣ A ∣ = 0 ，故 a = 2 。 ∣ λ E − A ∣ = ​ λ − 1 1 4 ​ − 1 λ + 1 − 1 ​ 4 1 λ − 2 ​ ​ = λ ( λ + 3 ) ( λ − 6 ) 令 ∣ λ E − A ∣ = 0 ，得矩阵的特征值为 λ 1 ​ = − 3 ， λ 2 ​ = 6 ， λ 3 ​ = 0 。 对于 λ 1 ​ = − 3 ，解方程 ( λ 1 ​ E − A ) x = 0 ，得特征向量： ξ 1 ​ = 3 ​ 1 ​ ​ 1 − 1 1 ​ ​ 对于 λ 2 ​ = 6 ，得特征向量： ξ 2 ​ = 2 ​ 1 ​ ​ − 1 0 1 ​ ​ 对于 λ 3 ​ = 0 ，得特征向量： ξ 3 ​ = 6 ​ 1 ​ ​ 1 2 1 ​ ​ 正交矩阵 S 由特征向量组成： S = ( ξ 1 ​ , ξ 2 ​ , ξ 3 ​ ) = ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "设随机变量\nX\n、\nY\n相互独立，且\nX\n的概率分布为\nP{X=0}=P{X=2}=21\n，\nY\n的概率密度为\n\nf(y)={2y,0,0y1其他\n\n(1) 求概率\nP(Y≤EY)\n；\n\n(2) 求\nZ=X+Y\n的概率密度。",
    referenceAnswer: "【答案】 (1) P ( Y ≤ E Y ) = 9 4 ​ (2) Z = X + Y 的概率密度为 f Z ​ ( z ) = ⎩ ⎨ ⎧ ​ z , z − 2 , 0 , ​ 0 ≤ z ≤ 1 2 ≤ z < 3 其他 . ​ 【解析】 （1） Y 的期望值为： E Y = ∫ − ∞ + ∞ ​ y f Y ​ ( y ) d y = ∫ 0 1 ​ 2 y 2 d y = 3 2 ​ . 因此： P { Y ≤ E Y } = P { Y ≤ 3 2 ​ } = ∫ 0 3 2 ​ ​ 2 y d y = 9 4 ​ . （2） Z = X + Y 的分布函数为： F Z ​ ( z ) ​ = P { Z ≤ z } = P { X + Y ≤ z } = P { X + Y ≤ z , X = 0 } + P { X + Y ≤ z , X = 2 } = P { X = 0 , Y ≤ z } + P { X = 2 , Y ≤ z − 2 } = 2 1 ​ P { Y ≤ z } + 2 1 ​ P { Y ≤ z − 2 } = 2 1 ​ [ F Y ​ ( z ) + F Y ​ ( z − 2 ) ] . ​ Z = X + Y 的概率密度为： f Z ​ ( z ) = F Z ′ ​ ( z ) ​ = 2 1 ​ [ f ( z ) + f ( z − 2 ) ] = ⎩ ⎨ ⎧ ​ z , z − 2 , 0 , ​ 0 ≤ z ≤ 1 2 ≤ z < 3 其他 . ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n某工程师为了解一台天平的精度，用该天平对一物体的质量做了\nn=72\n次测量。该物体的质量\nμ\n是已知的。设\nn\n次测量结果\nX1,X2,⋯,Xn\n相互独立且均服从正态分布\nN(μ,σ2)\n。该工程师记录的是\nn\n次测量的绝对误差\nZi=∣Xi−μ∣\n（\ni=1,2,⋯,n\n），利用\nZ1,Z2,⋯,Zn\n估计参数\nσ\n。\n\n(1) 求\nzi\n的概率密度；\n\n(2) 利用一阶矩求\nσ\n的矩估计量；\n\n(3) 求参数\nσ\n的最大似然估计量。",
    referenceAnswer: "【答案】 (1) z i ​ 的概率密度函数为： f Z ​ ( z ) = { 2 π ​ σ 2 ​ e − 2 σ 2 z 2 ​ , 0 , ​ z ≥ 0 z < 0 ​ (2) σ 的矩估计量为： σ ^ = 2 2 π ​ ​ Z ˉ = 2 n 2 π ​ ​ i = 1 ∑ n ​ Z i ​ (3) σ 的最大似然估计量为： σ ^ = n 1 ​ i = 1 ∑ n ​ z i 2 ​ ​ 【解析】 (1) 首先求 z i ​ 的分布函数： F z ​ ( z ) = P { Z i ​ ≤ z } = P { ∣ X i ​ − μ ∣ ≤ z } = P { σ ∣ X i ​ − μ ∣ ​ ≤ σ z ​ } 当 z < 0 时，显然 F z ​ ( z ) = 0 ；当 z ≥ 0 时， z i ​ 的概率密度为： f Z ​ ( z ) = F Z ′ ​ ( z ) = { 2 π ​ σ 2 ​ e − 2 σ 2 z 2 ​ , 0 , ​ z ≥ 0 z < 0 ​ (2) 数学期望为： E Z i ​ = ∫ 0 + ∞ ​ z f ( z ) d z = ∫ 0 + ∞ ​ 2 π ​ σ 2 ​ e − 2 σ 2 z 2 ​ d z = 2 π ​ 2 σ ​ 令 EZ = Z ˉ = n 1 ​ ∑ i = 1 n ​ Z i ​ ，解得 σ 的矩估计量： σ ^ = 2 2 π ​ ​ Z ˉ = 2 n 2 π ​ ​ i = 1 ∑ n ​ Z i ​ (3) 设 Z 1 ​ , Z 2 ​ , ⋯ , Z n ​ 的观测值为 z 1 ​ , z 2 ​ , ⋯ , z n ​ 。当 z i ​ > 0 ， i = 1 , 2 , ⋯ , n 时，似然函数为： L ( σ ) = i = 1 ∏ n ​ f ( z i ​ , σ ) = ( 2 π ​ σ ) n 2 n ​ e − 2 σ 2 1 ​ ∑ i = 1 n ​ z i 2 ​ 取对数得： ln L ( σ ) = n ln 2 − 2 n ​ ln ( 2 π ) − n ln σ − 2 σ 2 1 ​ i = 1 ∑ n ​ z i 2 ​ 令导数为零： d σ d ln L ( σ ) ​ = − σ n ​ + σ 3 1 ​ i = 1 ∑ n ​ z i 2 ​ = 0 解得 σ 的最大似然估计量： σ ^ = n 1 ​ i = 1 ∑ n ​ z i 2 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2017_math3 = {
  id: P, year: Y,
  title: '2017 年全国硕士研究生招生考试 数学（三）',
  short: '2017 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2017_math3.length,
  qids: questions2017_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
