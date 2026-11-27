const P = 'paper-2013-math3'
const Y = 2013
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2013-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2013 考研数学（三）真题',
  ...extra
})

export const questions2013_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当\nx→0\n时，用\no(x)\n表示比\nx\n高阶的无穷小，则下列式子中错误的是",
    options: [{ key: "A", text: "x ∘ o ( x 2 ) = o ( x 3 )" }, { key: "B", text: "o ( x ) ∘ ( x 2 ) = o ( x 3 )" }, { key: "C", text: "o ( x 2 ) + o ( x 2 ) = o ( x 2 )" }, { key: "D", text: "o ( x ) + o ( x 2 ) = o ( x 2 )" }],
    answer: ["D"],
    explain: "正确答案： D 由高阶无穷小的定义可知，(A)、(B)、(C) 都是正确的。对于 (D)，可以找出反例： 例如，当 x → 0 时，设 f ( x ) = x 2 + x 3 = o ( x ) ， g ( x ) = x 3 = o ( x 2 ) 。但 f ( x ) + g ( x ) = o ( x ) ，而不是 o ( x 2 ) 。 因此，正确答案是 (D)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf(x)=x(x+1)ln∣x∣∣x∣x−1\n，则\nf(x)\n的间断点个数为",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 当 x → 0 时，有： ∣ x ∣ x − 1 = e x l n ∣ x ∣ − 1 ∼ x ln ∣ x ∣ 因此： x → 0 lim ​ f ( x ) = x → 0 lim ​ x ( x + 1 ) ln ∣ x ∣ ∣ x ∣ x − 1 ​ = x → 0 lim ​ x ln ∣ x ∣ x ln ∣ x ∣ ​ = 1 这表明 x = 0 是函数 f ( x ) 的可去间断点。 对于 x → 1 ： x → 1 lim ​ f ( x ) = x → 1 lim ​ x ( x + 1 ) ln ∣ x ∣ ∣ x ∣ x − 1 ​ = x → 1 lim ​ ( x + 1 ) ln ∣ x ∣ x ln ∣ x ∣ ​ = 2 1 ​ 因此， x = 1 也是函数 f ( x ) 的可去间断点。 对于 x → − 1 ： x → − 1 lim ​ f ( x ) = x → − 1 lim ​ x ( x + 1 ) ln ∣ x ∣ ∣ x ∣ x − 1 ​ 此时分母趋近于0，而分子趋近于非零常数，极限为 ∞ ，所以 x = − 1 是函数 f ( x ) 的无穷间断点。 综上，间断点个数为2，故应该选(C)。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nDk\n是区域\nD={(x,y)∣x2+y2≤1}\n的第\nk\n象限的部分，记\nIk=∬Dk(y−x)dxdy\n，则",
    options: [{ key: "A", text: "I 1 ​ > 0" }, { key: "B", text: "I 2 ​ > 0" }, { key: "C", text: "I 3 ​ > 0" }, { key: "D", text: "I 4 ​ > 0" }],
    answer: ["B"],
    explain: "正确答案： B 由极坐标系下二重积分的计算可知 I k ​ ​ = ∬ D k ​ ​ ( y − x ) d x d y = ∫ ( k − 1 ) 2 π ​ k 2 π ​ ​ d θ ∫ 0 1 ​ ( sin θ − cos θ ) r 2 d r = 3 1 ​ ∫ ( k − 1 ) 2 π ​ k 2 π ​ ​ ( sin θ − cos θ ) d θ = − 3 1 ​ ( sin θ + cos θ ) ​ ( k − 1 ) 2 π ​ k 2 π ​ ​ ​ 所以 I 1 ​ = I 3 ​ = 0 ， I 2 ​ = 3 2 ​ ， I 4 ​ = − 3 2 ​ ，应该选 (B)。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\n{an}\n为正项数列，则下列选项正确的是",
    options: [{ key: "A", text: "若 a n ​ > a n + 1 ​ ，则 ∑ n = 1 ∞ ​ ( − 1 ) n − 1 a n ​ 收敛；" }, { key: "B", text: "若 ∑ n = 1 ∞ ​ ( − 1 ) n − 1 a n ​ 收敛，则 a n ​ > a n + 1 ​ ；" }, { key: "C", text: "若 ∑ n = 1 ∞ ​ a n ​ 收敛，则存在常数 p > 1 ，使 lim n → ∞ ​ n p a n ​ 存在；" }, { key: "D", text: "若存在常数 p > 1 ，使 lim n → ∞ ​ n p a n ​ 存在，则 ∑ n = 1 ∞ ​ a n ​ 收敛。" }],
    answer: ["D"],
    explain: "正确答案： D 由正项级数的比较审敛法，可知选项 (D) 正确。 选项 (A) 缺少 lim n → ∞ ​ a n ​ = 0 条件，错误。 选项 (B) 中莱布尼兹条件只是交错级数收敛的充分条件，非必要条件，错误。 选项 (C) 反例可自行构造，错误。 故应选 (D)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n,\nB\n,\nC\n均为\nn\n阶矩阵，若\nAB=C\n，且\nB\n可逆，则",
    options: [{ key: "A", text: "矩阵C的行向量组与矩阵A的行向量组等价；" }, { key: "B", text: "矩阵C的列向量组与矩阵A的列向量组等价；" }, { key: "C", text: "矩阵C的行向量组与矩阵B的行向量组等价；" }, { key: "D", text: "矩阵C的列向量组与矩阵B的列向量组等价。" }],
    answer: ["B"],
    explain: "正确答案： B 将矩阵 A 和 C 列分块如下： A = ( α 1 ​ , α 2 ​ , ⋯ , α n ​ ) , C = ( γ 1 ​ , γ 2 ​ , ⋯ , γ n ​ ) 由于 A B = C ，则可知： γ i ​ = b 1 i ​ α 1 ​ + b 2 i ​ α 2 ​ + ⋯ + b ni ​ α n ​ ( i = 1 , 2 , ⋯ , n ) 这表明矩阵 C 的列向量组可由矩阵 A 的列向量组线性表示。同时，由于 B 可逆，即 A = C B − 1 ，同理可知矩阵 A 的列向量组可由矩阵 C 的列向量组线性表示。 因此，矩阵 C 的列向量组与矩阵 A 的列向量组等价，应该选 (B)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "矩阵\nA=1a1aba1a1\n与\nB=0000b0000\n相似的充分必要条件是",
    options: [{ key: "A", text: "a = 0 , b = 2 ；" }, { key: "B", text: "a = 0 ，b为任意常数；" }, { key: "C", text: "a = 2 , b = 0 ；" }, { key: "D", text: "a = 2 ，b为任意常数。" }],
    answer: ["B"],
    explain: "正确答案： B 计算行列式： ∣ λ E − A ∣ = ​ λ − 1 − a − 1 ​ − a λ − b − a ​ − 1 − a λ − 1 ​ ​ = − λ ( λ 2 − ( b + 2 ) λ + 2 b − 2 a 2 ) 由于矩阵 A 与 B 相似，它们的特征值对应相等。已知 B 的特征值为 0 , b , 0 ，因此 A 必有特征值 0 。将 λ = 0 代入行列式： 2 b − 2 a 2 = 0 解得 a = 0 ，而 b 为任意常数。因此，正确答案是 (B) 。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1\n、\nX2\n、\nX3\n是随机变量，且\nX1∼N(0,1)\n，\nX2∼N(0,22)\n，\nX3∼N(5,32)\n。令\nPi=P{−2≤Xi≤2}\n，则",
    options: [{ key: "A", text: "P 1 ​ > P 2 ​ > P 3 ​ ；" }, { key: "B", text: "P 2 ​ > P 1 ​ > P 3 ​ ；" }, { key: "C", text: "P 3 ​ > P 2 ​ > P 1 ​ ；" }, { key: "D", text: "P 1 ​ > P 3 ​ > P 2 ​ 。" }],
    answer: ["A"],
    explain: "正确答案： A 若 X ∼ N ( μ , σ 2 ) ，则 σ X − μ ​ ∼ N ( 0 , 1 ) 。 P 1 ​ = 2Φ ( 2 ) − 1 , P 2 ​ = P { − 2 ≤ X 2 ​ ≤ 2 } = P { − 1 ≤ 2 X 2 ​ ​ ≤ 1 } = 2Φ ( 1 ) − 1 , P 3 ​ ​ = P { − 2 ≤ X 3 ​ ≤ 2 } = P { 3 − 2 − 5 ​ ≤ 3 X 3 ​ − 5 ​ ≤ 3 2 − 5 ​ } = Φ ( − 1 ) − Φ ( − 3 7 ​ ) = Φ ( 3 7 ​ ) − Φ ( 1 ) , ​ 比较得 P 1 ​ > P 2 ​ ，且 P 3 ​ − P 2 ​ = 1 + Φ ( 3 7 ​ ) − 3Φ ( 1 ) < 0 , 故 P 1 ​ > P 2 ​ > P 3 ​ ，选择 (A)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n和\nY\n相互独立，且\nX\n和\nY\n的概率分布分别为\n\nxP021141281381\n\nYP−131031131\n\n则\nP(X+Y=2)=\n(",
    options: [{ key: "A", text: "1/12 ；" }, { key: "B", text: "1/8 ；" }, { key: "C", text: "1/6 ；" }, { key: "D", text: "1/2 。" }],
    answer: ["C"],
    explain: "正确答案： C P { X + Y = 2 } ​ = P { X = 1 , Y = 1 } + P { X = 2 , Y = 0 } + P { X = 3 , Y = − 1 } = 4 1 ​ × 3 1 ​ + 8 1 ​ × 3 1 ​ + 8 1 ​ × 3 1 ​ = 12 1 ​ + 24 1 ​ + 24 1 ​ = 6 1 ​ ​ 故选择 (C)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\ny=f(x)\n和\ny=x2−x\n在\nx=1\n处相切，\nlimn→∞nf(n+2n)=",
    answerText: "】 -2 【",
    referenceAnswer: "【答案】 -2 【解析】 由条件可知 f ( 1 ) = 0 ， f ′ ( 1 ) = 1 。所以 n → ∞ lim ​ n f ( n + 2 n ​ ) = n → ∞ lim ​ n + 2 − 2 ​ f ( 1 + n + 2 − 2 ​ ) − f ( 1 ) ​ ⋅ n + 2 − 2 n ​ = − 2 f ′ ( 1 ) = − 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nz=z(x,y)\n是由方程\n(z+y)x=xy\n确定，求\n∂x∂z(1,2)",
    answerText: "】 2 − 2 ln 2 【",
    referenceAnswer: "【答案】 2 − 2 ln 2 【解析】 设函数 z = z ( x , y ) 是由方程 ( z + y ) x = x y 确定，求 ∂ x ∂ z ​ ​ ( 1 , 2 ) ​ 设 F ( x , y , z ) = ( z + y ) x − x y ，则 F x ​ ( x , y , z ) = ( z + y ) x ln ( z + y ) − y , F z ​ ( x , y , z ) = x ( z + y ) x − 1 当 x = 1 ， y = 2 时，代入方程得 ( z + 2 ) 1 = 1 × 2 ，即 z = 0 ，所以 ∂ x ∂ z ​ ​ ( 1 , 2 ) ​ = − F z ​ ( 1 , 2 , 0 ) F x ​ ( 1 , 2 , 0 ) ​ = − 1 × ( 0 + 2 ) 1 − 1 ( 0 + 2 ) 1 ln ( 0 + 2 ) − 2 ​ = − 1 2 ln 2 − 2 ​ = 2 − 2 ln 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\n∫1+∞(1+x)2lnxdx=",
    answerText: "】 \\(\\ln 2 \\) 【",
    referenceAnswer: "【答案】 \\(\\ln 2 \\) 【解析】 ∫ 1 + ∞ ​ ( 1 + x ) 2 ln x ​ d x = − ∫ 1 + ∞ ​ ln x d 1 + x 1 ​ = − 1 + x ln x ​ ​ 1 + ∞ ​ + ∫ 1 + ∞ ​ x ( 1 + x ) 1 ​ d x 其中 − 1 + x l n x ​ ​ 1 + ∞ ​ = 0 − ( − 2 l n 1 ​ ) = 0 。 接下来计算剩余积分： ∫ 1 + ∞ ​ x ( 1 + x ) 1 ​ d x = ∫ 1 + ∞ ​ ( x 1 ​ − 1 + x 1 ​ ) d x = ln 1 + x x ​ ​ 1 + ∞ ​ = ln 1 − ln 2 1 ​ = ln 2 综上，原积分结果为： ln 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\ny′′−y′+41y=0\n的通解为",
    answerText: "】 y = ( C 1 ​ + C 2 ​ x ) e 2 1 ​ x 【",
    referenceAnswer: "【答案】 y = ( C 1 ​ + C 2 ​ x ) e 2 1 ​ x 【解析】 方程的特征方程为 λ 2 − λ + 4 1 ​ = 0 ，即 ( 2 λ − 1 ) 2 = 0 。解得两个相等实根 λ 1 ​ = λ 2 ​ = 2 1 ​ ，因此方程的通解为 y = ( C 1 ​ + C 2 ​ x ) e 2 1 ​ x 其中 C 1 ​ 和 C 2 ​ 为任意常数。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA=(aij)\n是三阶非零矩阵，\n∣A∣\n为其行列式，\nAij\n为元素\naij\n的代数余子式，且满足\nAij+aij=0\n(i,j=1,2,3)\n，则\n∣A∣=\n________",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 由条件 A ij ​ + a ij ​ = 0 （ i , j = 1 , 2 , 3 ）可知 A ∗ T = − A ，其中 A ∗ 为 A 的伴随矩阵。两边取行列式得 ∣ A ∗ T ∣ = ∣ − A ∣ ，即 ∣ A ∗ ∣ = ( − 1 ) 3 ∣ A ∣ = − ∣ A ∣ 。 又因为 ∣ A ∗ ∣ = ∣ A ∣ n − 1 = ∣ A ∣ 2 （ n = 3 ），所以 ∣ A ∣ 2 = − ∣ A ∣ ，即 ∣ A ∣ ( ∣ A ∣ + 1 ) = 0 ，解得 ∣ A ∣ = 0 或 ∣ A ∣ = − 1 。 若 ∣ A ∣ = 0 ，则 r ( A ) < 3 。由 A ∗ T = − A 可知 r ( A ∗ ) = r ( A ) ，但 r ( A ) < 3 时 r ( A ∗ ) ≤ 1 。而 A 为非零矩阵，若 r ( A ) = 1 ，则 r ( A ∗ ) = 1 ，此时 A ∗ T = − A 成立；若 r ( A ) = 0 ，则 A = O ，与非零矩阵矛盾。 再考虑特征值。假设 λ 是 A 的特征值， α 是对应的特征向量，则 A α = λ α 。两边左乘 A ∗ 得 A ∗ A α = λ A ∗ α 即 ∣ A ∣ α = λ A ∗ α 由 A ∗ T = − A 得 A ∗ = − A T ，所以 ∣ A ∣ α = λ ( − A T ) α = − λ ( A α ) T = − λ ( λ α ) T = − λ 2 α 即 ( ∣ A ∣ + λ 2 ) α = 0 因为 α  = 0 ，所以 ∣ A ∣ + λ 2 = 0 。若 ∣ A ∣ = 0 ，则 λ = 0 ，即 A 的特征值全为 0，那么 A ∗ = O ，从而 A = O ，矛盾。故 ∣ A ∣ = − 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n服从标准正态分布\nX∼N(0,1)\n，则\nE(Xe2X)=\n________。",
    answerText: "】 2 e 2 【",
    referenceAnswer: "【答案】 2 e 2 【解析】 E ( X e 2 X ) = ∫ − ∞ + ∞ ​ x e 2 x 2 π ​ 1 ​ e − 2 x 2 ​ d x = ∫ − ∞ + ∞ ​ 2 π ​ x ​ e − 2 x 2 − 4 x ​ d x = ∫ − ∞ + ∞ ​ 2 π ​ x ​ e − 2 ( x − 2 ) 2 ​ + 2 d x = e 2 ∫ − ∞ + ∞ ​ 2 π ​ x ​ e − 2 ( x − 2 ) 2 ​ d x 令 t = x − 2 ，则 x = t + 2 ，于是 e 2 ∫ − ∞ + ∞ ​ 2 π ​ t + 2 ​ e − 2 t 2 ​ d t = e 2 ( ∫ − ∞ + ∞ ​ 2 π ​ t ​ e − 2 t 2 ​ d t + 2 ∫ − ∞ + ∞ ​ 2 π ​ 1 ​ e − 2 t 2 ​ d t ) 其中第一项为 E ( T ) = 0 （ T ∼ N ( 0 , 1 ) ），第二项为 2 × 1 = 2 ，因此 E ( X e 2 X ) = 2 e 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n当\nx→0\n时，\n1−cosxcos2xcos3x\n与\naxn\n是等价无穷小，求常数\na\n和\nn\n。",
    referenceAnswer: "【答案】 a = 7 , n = 2 【解析】 当 x → 0 时， cos x = 1 − 2 1 ​ x 2 + o ( x 2 ) cos 2 x = 1 − 2 1 ​ ( 2 x ) 2 + o ( x 2 ) = 1 − 2 x 2 + o ( x 2 ) cos 3 x = 1 − 2 1 ​ ( 3 x ) 2 + o ( x 2 ) = 1 − 2 9 ​ x 2 + o ( x 2 ) 因此， 1 − cos x cos 2 x cos 3 x ​ = 1 − ( 1 − 2 1 ​ x 2 + o ( x 2 ) ) ( 1 − 2 x 2 + o ( x 2 ) ) ( 1 − 2 9 ​ x 2 + o ( x 2 ) ) = 7 x 2 + o ( x 2 ) ​ 由于 1 − cos x cos 2 x cos 3 x 与 a x n 是等价无穷小，所以 a = 7 ， n = 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nD\n是由曲线\ny=3x\n、直线\nx=a\n（\na>0\n）及\nx\n轴所围成的平面图形。\nVx\n、\nVy\n分别是\nD\n绕\nx\n轴和\ny\n轴旋转一周所形成的立体的体积。若\n10Vx=Vy\n，求\na\n的值。",
    referenceAnswer: "【答案】 7 【解析】 由微元法可知 V x ​ = π ∫ 0 a ​ y 2 d x = π ∫ 0 a ​ x 3 2 ​ d x = 5 3 ​ a 3 5 ​ π V y ​ = 2 π ∫ 0 a ​ x f ( x ) d x = 2 π ∫ 0 a ​ x 3 4 ​ d x = 7 6 ​ a 3 7 ​ π 由条件 10 V x ​ = V y ​ ，知 a = 7 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设平面区域\nD\n是由曲线\nx=3y\n、\ny=3x\n、\nx+y=8\n所围成，求\n\n∬Dx2dxdy.",
    referenceAnswer: "【答案】 3 416 ​ 【解析】 ∬ D ​ x 2 d x d y ​ = ∬ D 1 ​ ​ x 2 d x d y + ∬ D 2 ​ ​ x 2 d x d y = ∫ 0 2 ​ x 2 d x ∫ 3 x ​ 3 x ​ d y + ∫ 2 6 ​ x 2 d x ∫ 3 x ​ 8 − x ​ d y = 3 416 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设生产某产品的固定成本为6000元，可变成本为20元/件，价格函数为\nP=60−1000Q\n（\nP\n是单价，单位：元；\nQ\n是销量，单位：件）。已知产销平衡，求：\n\n该产品的边际利润。\n\n当\nP=50\n时的边际利润，并解释其经济意义。\n\n使得利润最大的定价\nP\n。\n",
    referenceAnswer: "【答案】 该产品的边际利润为 y ′ = 40 − 500 Q ​ . 当 P = 50 时，边际利润为 20，经济意义：当 P = 50 时，销量每增加1件，利润增加20元。 使得利润最大的定价 P 为 40. 【解析】 (1) 设利润为 y ，则利润函数为： y = PQ − ( 6000 + 20 Q ) = 40 Q − 1000 Q 2 ​ − 6000 边际利润为： y ′ = 40 − 500 Q ​ (2) 当 P = 50 时，销量为： Q = 10000 此时边际利润为： y ′ = 20 经济意义：当 P = 50 时，销量每增加1件，利润增加20元。 (3) 令边际利润为零： y ′ = 0 ⟹ Q = 20000 对应的价格为： P = 60 − 1000 20000 ​ = 40",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(x)\n在\n[0,+∞)\n上可导，\nf(0)=0\n，且\nlimx→∞f(x)=2\n，证明：\n存在\na>0\n，使得\nf(a)=1\n；对 (1) 中的\na\n，存在\nξ∈(0,a)\n，使得\nf′(ξ)=a1\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (1) 由 lim x → ∞ ​ f ( x ) = 2 ，所以存在 X > 0 ，当 x > X 时，有 2 3 ​ < f ( x ) < 2 5 ​ 。又因为 f ( x ) 在 [ 0 , + ∞ ) 上连续，所以 f ( x ) 在 [ 0 , X ] 上连续。 由介值定理，存在 a ∈ ( 0 , X ) ，使得 f ( a ) = 1 。 (2) 函数 f ( x ) 在 [ 0 , a ] 上可导，由拉格朗日中值定理，存在 ξ ∈ ( 0 , a ) 使得 f ′ ( ξ ) = a f ( a ) − f ( 0 ) ​ = a 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设矩阵\n\nA=(11a0),B=(011b),\n\n求所有矩阵\nC\n，使得\n\nAC−CA=B.",
    referenceAnswer: "【答案】 当 a = − 1 且 b = 0 时，所有矩阵 C 为 C = ( 1 + C 1 ​ C 1 ​ ​ − C 1 ​ C 2 ​ ​ ) 其中 C 1 ​ 、 C 2 ​ 为任意常数。 【解析】 设 C = ( x 1 ​ x 3 ​ ​ x 2 ​ x 4 ​ ​ ) ，由 A C − C A = B 可化为： ⎩ ⎨ ⎧ ​ − x 2 ​ + a x 3 ​ = 0 − a x 1 ​ + x 2 ​ + a x 4 ​ = 1 x 1 ​ − x 3 ​ − x 4 ​ = 1 x 2 ​ − a x 3 ​ = b ​ 对增广矩阵进行初等行变换： ( A ∣ b ) = ​ 0 − a 1 0 ​ − 1 1 0 1 ​ a 0 − 1 − a ​ 0 a − 1 0 ​ 0 1 1 b ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ − 1 − a 0 0 ​ − 1 0 0 0 ​ 1 0 1 + a b ​ ​ 当 a = − 1 ， b = 0 时，线性方程组有解。此时增广矩阵进一步化简为： ( A ∣ b ) → ​ 1 0 0 0 ​ 0 1 0 0 ​ − 1 1 0 0 ​ − 1 0 0 0 ​ 1 0 0 0 ​ ​ 通解为： x = ​ x 1 ​ x 2 ​ x 3 ​ x 4 ​ ​ ​ = ​ 1 0 0 0 ​ ​ + C 1 ​ ​ 1 − 1 1 0 ​ ​ + C 2 ​ ​ 0 0 0 1 ​ ​ 即矩阵 C 为： C = ( 1 + C 1 ​ C 1 ​ ​ − C 1 ​ C 2 ​ ​ ) 其中 C 1 ​ 、 C 2 ​ 为任意常数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型\n\nf(x1,x2,x3)=2(a1x1+a2x2+a3x3)2+(b1x1+b2x2+b3x3)2,\n\n记\n\nα=a1a2a3,β=b1b2b3.\n\n证明二次型\nf\n对应的矩阵为\n2αα⊤+ββ⊤\n；\n\n若\nα\n，\nβ\n正交且为单位向量，证明\nf\n在正交变换下的标准形为\n2y12+y22\n。\n",
    referenceAnswer: "【答案】 二次型 f 对应的矩阵为 2 α α ⊤ + β β ⊤ 。 f 在正交变换下的标准形为 2 y 1 2 ​ + y 2 2 ​ 。 【解析】 (1) f ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ = 2 ( a 1 ​ x 1 ​ + a 2 ​ x 2 ​ + a 3 ​ x 3 ​ ) 2 + ( b 1 ​ x 1 ​ + b 2 ​ x 2 ​ + b 3 ​ x 3 ​ ) 2 = 2 ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ a 1 ​ a 2 ​ a 3 ​ ​ ​ ( a 1 ​ , a 2 ​ , a 3 ​ ​ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ + ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ b 1 ​ b 2 ​ b 3 ​ ​ ​ ( b 1 ​ , b 2 ​ , b 3 ​ ​ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = ( x 1 ​ , x 2 ​ , x 3 ​ ) ( 2 α α ⊤ + β β ⊤ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ ​ 所以二次型 f 对应的矩阵为 2 α α ⊤ + β β ⊤ 。 (2) 设 A = 2 α α ⊤ + β β ⊤ 。由于 ∣ α ∣ = 1 ， β ⊤ α = 0 ，则： A α = ( 2 α α ⊤ + β β ⊤ ) α = 2 α ∣ α ∣ 2 + β ( β ⊤ α ) = 2 α 所以 α 为矩阵对应特征值 λ 1 ​ = 2 的特征向量。 A β = ( 2 α α ⊤ + β β ⊤ ) β = 2 α ( α ⊤ β ) + β ∣ β ∣ 2 = β 所以 β 为矩阵对应特征值 λ 2 ​ = 1 的特征向量。 矩阵 A 的秩 r ( A ) ≤ r ( 2 α α ⊤ ) + r ( β β ⊤ ) = 2 ，所以 λ 3 ​ = 0 也是矩阵的一个特征值。 故 f 在正交变换下的标准形为 2 y 1 2 ​ + y 2 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\n(X,Y)\n为二维随机变量，\nX\n的概率密度为\n\nfX(x)={3x2,0,0x1,其他.\n\n在给定\nX=x\n (0x1)\n的条件下，\nY\n的条件概率密度为\n\nfY∣X(y∣x)={x33y2,0,0yx,其他.\n\n(1) 求\n(X,Y)\n的联合概率密度\nf(x,y)\n；\n\n(2) 求\nY\n的边缘概率密度\nfY(y)\n。",
    referenceAnswer: "【答案】 (1) ( X , Y ) 的联合概率密度为 f ( x , y ) = { x 9 y 2 ​ , 0 , ​ 0 < y < x < 1 其他 ​ (2) Y 的边缘概率密度为 f Y ​ ( y ) = { − 9 y 2 ln y , 0 , ​ 0 < y < 1 其他 ​ 【解析】 (1) ( X , Y ) 的联合概率密度 f ( x , y ) 为： f ( x , y ) = f Y ∣ X ​ ( y ∣ x ) ⋅ f X ​ ( x ) = { x 9 y 2 ​ , 0 , ​ 0 < y < x < 1 otherwise ​ (2) Y 的边缘概率密度 f Y ​ ( y ) 为： f Y ​ ( y ) = ∫ − ∞ + ∞ ​ f ( x , y ) d x = { ∫ y 1 ​ x 9 y 2 ​ d x = − 9 y 2 ln y , 0 , ​ 0 < y < 1 otherwise ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率密度为\n\nf(x;θ)={x3θ2e−xθ,0,x>0其他\n\n其中\nθ\n为未知参数，\nX1,X2,⋯,Xn\n为来自总体\nX\n的简单随机样本。\n\n(1) 求\nθ\n的矩估计量；\n\n(2) 求\nθ\n的极大似然估计量。",
    referenceAnswer: "【答案】 (1) θ ^ = X ˉ = n 1 ​ ∑ i = 1 n ​ X i ​ (2) θ ^ = ∑ i = 1 n ​ X i ​ 1 ​ 2 n ​ 【解析】 (1) 首先计算总体的数学期望 E ( X ) ： E ( X ) = ∫ − ∞ + ∞ ​ x f ( x ; θ ) d x = ∫ 0 + ∞ ​ x 2 θ 2 ​ e − x θ ​ d x = θ 令 E ( X ) = X ˉ = n 1 ​ ∑ i = 1 n ​ X i ​ ，得到 θ 的矩估计量为： θ ^ = X ˉ = n 1 ​ i = 1 ∑ n ​ X i ​ (2) 当 x i ​ > 0 ( i = 1 , 2 , ⋯ , n ) 时，似然函数为： L ( θ ) = i = 1 ∏ n ​ ( x i 3 ​ θ 2 ​ e − x i ​ θ ​ ) = ( ∏ i = 1 n ​ x i ​ ) 3 θ 2 n ​ e − θ ( ∑ i = 1 n ​ x i ​ 1 ​ ) 取对数后得到： ln L ( θ ) = 2 n ln θ − θ ( i = 1 ∑ n ​ x i ​ 1 ​ ) − 3 i = 1 ∑ n ​ ln x i ​ 令 d θ d l n L ( θ ) ​ = 0 ，得到方程： θ 2 n ​ − i = 1 ∑ n ​ x i ​ 1 ​ = 0 解得 θ 的极大似然估计量为： θ ^ = ∑ i = 1 n ​ X i ​ 1 ​ 2 n ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2013_math3 = {
  id: P, year: Y,
  title: '2013 年全国硕士研究生招生考试 数学（三）',
  short: '2013 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2013_math3.length,
  qids: questions2013_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
