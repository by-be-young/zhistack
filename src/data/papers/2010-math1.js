const P = 'paper-2010-math1'
const Y = 2010
const SRC = '#/notes/study_methods-math-math1-2010'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2010-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2010 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2010_math1 = [
  base(1, 'k-math-001', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "极限\nx→∞lim[(x−a)(x+b)x2]x=\n（）",
    options: [{ key: "A", text: "1" }, { key: "B", text: "e" }, { key: "C", text: "e a − b" }, { key: "D", text: "e b − a" }],
    answer: ["C"],
    explain: "正确答案： C 方法一 ​ x → ∞ lim ​ ( ( x − a ) ( x + b ) x 2 ​ ) x = x → ∞ lim ​ e l n ( ( x − a ) ( x + b ) x 2 ​ ) x = x → ∞ lim ​ e x ( l n ( x − a ) ( x + b ) x 2 ​ ) = x → ∞ lim ​ e x ( ( x − a ) ( x + b ) ( a − b ) x + ab ​ ) = x → ∞ lim ​ e ( x − a ) ( x + b ) ( a − b ) x 2 + ab x ​ = e a − b ​ 方法二 ​ x → ∞ lim ​ ( ( x − a ) ( x + b ) x 2 ​ ) x = x → ∞ lim ​ ( 1 + ( x − a ) ( x + b ) x 2 − ( x − a ) ( x + b ) ​ ) x = x → ∞ lim ​ ( 1 + ( x − a ) ( x + b ) ( a − b ) x + ab ​ ) x = x → ∞ lim ​ ( 1 + ( x − a ) ( x + b ) ( a − b ) x + ab ​ ) ( a − b ) x + ab ( x − a ) ( x + b ) ​ ⋅ ( x − a ) ( x + b ) ( a − b ) x + ab ​ ⋅ x = e l i m x → ∞ ​ ( x − a ) ( x + b ) ( a − b ) x + ab ​ ⋅ x = e a − b ​"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nz=z(x,y)\n，由方程\nF(xy,xz)=0\n确定，其中\nF\n为可微函数，且\nF2′=0\n，则\nx∂x∂z+y∂y∂z=\n( )",
    options: [{ key: "A", text: "x" }, { key: "B", text: "z" }, { key: "C", text: "− x" }, { key: "D", text: "− z" }],
    answer: ["B"],
    explain: "正确答案： B 对方程两边求全微分： F 1 ′ ​ ⋅ d ( x y ​ ) + F 2 ′ ​ ⋅ d ( x z ​ ) = 0 , 即 F 1 ′ ​ ⋅ x 2 x d y − y d x ​ + F 2 ′ ​ ⋅ x 2 x d z − z d x ​ = 0 , ⇒ F 1 ′ ​ ⋅ ( x d y − y d x ) + F 2 ′ ​ ⋅ ( x d z − z d x ) = 0. 因此， d z = x F 2 ′ ​ y F 1 ′ ​ + z F 2 ′ ​ ​ d x − F 2 ′ ​ F 1 ′ ​ ​ d y . 所以有 x ∂ x ∂ z ​ + y ∂ y ∂ z ​ = x F 2 ′ ​ y F 1 ′ ​ + z F 2 ′ ​ ​ ⋅ x − F 2 ′ ​ F 1 ′ ​ ​ ⋅ y = F 2 ′ ​ z F 2 ′ ​ ​ = z ."
  }),
  base(3, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nm,n\n是正整数，反常积分\n∫01nxmln2(1−x)dx\n的收敛性（　　）",
    options: [{ key: "A", text: "仅与 m 的取值有关" }, { key: "B", text: "仅与 n 的取值有关" }, { key: "C", text: "与 m , n 的取值都有关" }, { key: "D", text: "与 m , n 的取值都无关" }],
    answer: ["D"],
    explain: "正确答案： D 显然 x = 0 ， x = 1 是两个瑕点，有 ∫ 0 1 ​ n x ​ m ln 2 ( 1 − x ) ​ ​ d x = ∫ 0 2 1 ​ ​ n x ​ m ln 2 ( 1 − x ) ​ ​ d x + ∫ 2 1 ​ 1 ​ n x ​ m ln 2 ( 1 − x ) ​ ​ d x 对于 ∫ 0 2 1 ​ ​ n x ​ m l n 2 ( 1 − x ) ​ ​ d x ，当 x → 0 + 时，有 n x ​ m ln 2 ( 1 − x ) ​ ​ = ln m 2 ​ ( 1 − x ) ⋅ x − n 1 ​ ∼ ( − 1 ) m 2 ​ x m 2 ​ − n 1 ​ 而 ∫ 0 2 1 ​ ​ x m 2 ​ − n 1 ​ d x 收敛（因为 m 、 n 是正整数，且 m 2 ​ − n 1 ​ > − 1 ），故 ∫ 0 2 1 ​ ​ 收敛。 对于 ∫ 2 1 ​ 1 ​ n x ​ m l n 2 ( 1 − x ) ​ ​ d x ，当 x ∈ ( 1 − δ , 1 ) （其中 0 < δ < 2 1 ​ ）时，有 n x ​ m ln 2 ( 1 − x ) ​ ​ < 2 m 1 ​ ln m 2 ​ ( 1 − x ) < 2 n 1 ​ ( 1 − x ) m 2 ​ 而 ∫ 2 1 ​ 1 ​ ( 1 − x ) m 2 ​ d x 显然收敛，故 ∫ 2 1 ​ 1 ​ 收敛。 所以选 D。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "n→∞limi=1∑nj=1∑n(n+i)(n2+j2)n=\n( )",
    options: [{ key: "A", text: "∫ 0 1 ​ d x ∫ 0 x ​ ( 1 + x ) ( 1 + y 2 ) 1 ​ d y" }, { key: "B", text: "∫ 0 1 ​ d x ∫ 0 x ​ ( 1 + x ) ( 1 + y ) 1 ​ d y" }, { key: "C", text: "∫ 0 1 ​ d x ∫ 0 1 ​ ( 1 + x ) ( 1 + y ) 1 ​ d y" }, { key: "D", text: "∫ 0 1 ​ d x ∫ 0 1 ​ ( 1 + x ) ( 1 + y 2 ) 1 ​ d y" }],
    answer: ["D"],
    explain: "正确答案： D 考虑极限： n → ∞ lim ​ i = 1 ∑ n ​ j = 1 ∑ n ​ ( n + i ) ( n 2 + j 2 ) n ​ 将原式改写为： n → ∞ lim ​ i = 1 ∑ n ​ ( 1 + n i ​ ) 1 ​ ⋅ n 1 ​ j = 1 ∑ n ​ ( 1 + ( n j ​ ) 2 ) 1 ​ ⋅ n 1 ​ 当 n → ∞ 时，这等价于二重积分： ∫ 0 1 ​ d x ∫ 0 1 ​ ( 1 + x ) ( 1 + y 2 ) 1 ​ d y"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\nm×n\n型矩阵，\nB\n为\nn×m\n型矩阵，\nE\n为\nm\n阶单位矩阵，若\nAB=E\n，则（ ）",
    options: [{ key: "A", text: "\\( r(A) = m,; r(B) = m \\)." }, { key: "B", text: "\\( r(A) = m,; r(B) = n \\)." }, { key: "C", text: "\\( r(A) = n,; r(B) = m \\)." }, { key: "D", text: "\\( r(A) = n,; r(B) = n \\)." }],
    answer: ["A"],
    explain: "正确答案： A 本题主要考查的知识点是矩阵的秩的性质。 因为 A B = E ，所以 R ( A B ) = m 。 又因为 R ( A B ) = m ≤ min ( R ( A ) , R ( B )) ，即 R ( A ) ≥ m ， R ( B ) ≥ m 。 而 R ( A ) ≤ m ， R ( B ) ≤ m ，因此 R ( A ) = m ， R ( B ) = m 。"
  }),
  base(6, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\n4\n阶实对称矩阵，且\nA2+A=0\n，若\nA\n的秩为\n3\n，则\nA\n相似于（）。",
    options: [{ key: "A", text: "​ 1 ​ 1 ​ 1 ​ 0 ​ ​" }, { key: "B", text: "​ 1 ​ 1 ​ − 1 ​ 0 ​ ​" }, { key: "C", text: "​ 1 ​ − 1 ​ − 1 ​ 0 ​ ​" }, { key: "D", text: "​ − 1 ​ − 1 ​ − 1 ​ 0 ​ ​" }],
    answer: ["D"],
    explain: "正确答案： D 本题考查的知识点是矩阵相似的性质、实对称矩阵可对角化的性质、矩阵的特征值、矩阵的秩等。 设 A 的特征值为 λ ，因为 A 2 + A = 0 ，所以 λ 2 + λ = 0 ，即 λ ( λ + 1 ) = 0 ⇒ λ = 0 或 λ = − 1 。 又因为 R ( A ) = 3 ， A 必可相似对角化，且对角阵的秩也是 3 ，所以 λ = − 1 是三重特征根。 因此， A ∼ ​ − 1 ​ − 1 ​ − 1 ​ 0 ​ ​ 。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n的分布函数\n\nF(x)=⎩⎨⎧0,21,1−e−x,x0,0≤x1,x≥1,\n\n则\nP{X=1}=()",
    options: [{ key: "A", text: "0" }, { key: "B", text: "2 1 ​" }, { key: "C", text: "2 1 ​ − e − 1" }, { key: "D", text: "1 − e − 1" }],
    answer: ["C"],
    explain: "正确答案： C P { X = 1 } = F ( 1 ) − F ( 1 − ) = 1 − e − 1 − 2 1 ​ = 2 1 ​ − e − 1 ，所以选 C。 评注：本题实际上是考查分布函数的性质，即对任意随机变量 X ，均有 P ( X = x ) = F ( x ) − F ( x − ) 。这样的问题在辅导教程中出现过多次，属于基本概念的考查。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf1(x)\n为标准正态分布的概率密度，\nf2(x)\n为\n[−1,3]\n上均匀分布的概率密度，若\n\nf(x)={af1(x),bf2(x),x≤0,x>0(a>0,b>0)\n\n为概率密度，则\na,b\n应满足（  ）",
    options: [{ key: "A", text: "2 a + 3 b = 4" }, { key: "B", text: "3 a + 2 b = 4" }, { key: "C", text: "a + b = 1" }, { key: "D", text: "a + b = 2" }],
    answer: ["A"],
    explain: "正确答案： A 由概率密度的性质有 ​ ∫ − ∞ + ∞ ​ f ( x ) d x = a ∫ − ∞ 0 ​ f 1 ​ ( x ) d x + b ∫ 0 + ∞ ​ f 2 ​ ( x ) d x = 1 ⇒ a Φ ( 0 ) + b ∫ 0 3 ​ 4 1 ​ d x = 1 ⇒ 2 1 ​ a + 4 3 ​ b = 1 ⇒ 2 a + 3 b = 4 ​ 所以选 A。 评注：本题实际上是考查密度函数的性质与正态分布和均匀分布的基本性质，这里还需要知道的是标准正态分布取负值的概率为 2 1 ​ ，以及均匀分布的计算问题。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nx=e−t\n，\ny=∫0tln(1+u2)du\n，求\ndx2d2yt=0",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 已知 d x d y ​ = x ′ ( t ) y ′ ( t ) ​ = − e − t ln ( 1 + t 2 ) ​ ，\n则 d x 2 d 2 y ​ = d x d ​ ( d x d y ​ ) = d t d ​ ( d x d y ​ ) d x d t ​ = ( − e − t ln ( 1 + t 2 ) ​ ) ′ ⋅ x ′ ( t ) 1 ​ . 计算导数： ( − e − t ln ( 1 + t 2 ) ​ ) ′ = − ( e − t ) 2 1 + t 2 2 t ​ ⋅ e − t + ln ( 1 + t 2 ) ⋅ e − t ​ , 代入 x ′ ( t ) = − e − t ，得 d x 2 d 2 y ​ = − ( e − t ) 2 1 + t 2 2 t ​ e − t + ln ( 1 + t 2 ) e − t ​ ⋅ − e − t 1 ​ = e 2 t ( 1 + t 2 2 t ​ + ln ( 1 + t 2 ) ) . 当 t = 0 时， d x 2 d 2 y ​ ​ t = 0 ​ = 0.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n∫0π2xcosxdx\n=",
    answerText: "】 − 4 π 【",
    referenceAnswer: "【答案】 − 4 π 【解析 】 令 x ​ = t ，原式为 ∫ 0 π 2 ​ x ​ cos x ​ d x ​ = 2 ∫ 0 π ​ t 2 cos t d t = 2 ( t 2 sin t ​ 0 π ​ − ∫ 0 π ​ 2 t sin t d t ) = − 4 ∫ 0 π ​ t sin t d t = 4 ( t cos t ∣ 0 π ​ − ∫ 0 π ​ cos t d t ) = − 4 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知曲线\nL\n的方程为\ny=1−∣x∣\n，\nx∈[−1,1]\n，起点是\n(−1,0)\n，终点是\n(1,0)\n，则曲线积分\n∫Lxydx+x2dy",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 已知曲线 L 的方程为 y = 1 − ∣ x ∣ ， x ∈ [ − 1 , 1 ] ，起点是 ( − 1 , 0 ) ，终点是 ( 1 , 0 ) ，则曲线积分 ∫ L ​ x y d x + x 2 d y 令 L 1 ​ : L 2 ​ : ​ { x = t y = 1 + t ​ { x = t y = 1 − t ​ ​ − 1 ≤ t ≤ 0 , 0 ≤ t ≤ 1. ​ 有 ∫ L ​ x y d x + x 2 d y ​ = ∫ L 1 ​ ​ x y d x + x 2 d y + ∫ L 2 ​ ​ x y d x + x 2 d y = ∫ − 1 0 ​ [ t ( 1 + t ) + t 2 ] d t + ∫ 0 1 ​ [ t ( 1 − t ) − t 2 ] d t = ( 3 2 ​ t 3 + 2 t 2 ​ ) ​ − 1 0 ​ + ( 2 t 2 ​ − 3 2 ​ t 3 ) ​ 0 1 ​ = 0. ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nΩ={(x,y,z)∣x2+y2≤z≤1}\n，则\nΩ\n的质心坐标\nz=\n______。",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 z ​ = ∭ Ω ​ d x d y d z ∭ Ω ​ z d x d y d z ​ = ∫ 0 2 π ​ d θ ∫ 0 1 ​ r d r ∫ r 2 1 ​ d z ∫ 0 2 π ​ d θ ∫ 0 1 ​ r d r ∫ r 2 1 ​ z d z ​ = 2 π ​ 3 π ​ ​ = 3 2 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nα1=(1,2,−1,0)T\n，\nα2=(1,1,0,2)T\n，\nα3=(2,1,1,α)T\n，若由它们生成的向量空间维数是\n2\n，则\nα=",
    answerText: "】 α = 6 【",
    referenceAnswer: "【答案】 α = 6 【解析】 由题意知向量组 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性相关，而其中两个向量线性无关，所以 R ( α 1 ​ , α 2 ​ , α 3 ​ ) = 2 ，即 ​ 1 2 − 1 0 ​ 1 1 0 2 ​ 2 1 1 α ​ ​ → r 2 ​ − 2 r 1 ​ ​ 1 0 0 0 ​ 1 − 1 1 2 ​ 2 − 3 3 α ​ ​ → r 3 ​ + r 2 ​ ​ 1 0 0 0 ​ 1 − 1 0 0 ​ 2 − 3 0 α − 6 ​ ​ 因此 α − 6 = 0 ⇒ α = 6",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n的概率分布为\nP{X=k}=k!C\n，\nk=0,1,2,⋯\n，则\nEX2\n= ______",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 由概率分布的性质 ∑ k = 0 ∞ ​ P { X = k } = 1 ，有 k = 0 ∑ ∞ ​ k ! C ​ = 1 ​ ⇒ C k = 0 ∑ ∞ ​ k ! 1 ​ = 1 ⇒ C ⋅ e = 1 ⇒ C = e − 1 ​ 即 P { X = k } = k ! e − 1 ​ ， k = 0 , 1 , 2 , ⋯ ，参数为 1 的泊松分布，则有 EX = 1 , D X = 1 ⇒ E X 2 = D X + ( EX ) 2 = 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求微分方程\ny′′−3y′+2y=2xex\n的通解。",
    referenceAnswer: "【答案】 y = C 1 ​ e 2 x + C 2 ​ e x − x ( x + 2 ) e x 【解析】 齐次方程 y ′′ − 3 y ′ + 2 y = 0 的特征方程为 r 2 − 3 r + 2 = 0 ，由此得 r 1 ​ = 2 ， r 2 ​ = 1 。对应齐次方程的通解为 Y = C 1 ​ e 2 x + C 2 ​ e x 。 设非齐次方程的特解为 y ∗ = ( a x + b ) x e x ，则 y ∗ = ( a x 2 + ( 2 a + b ) x ) e x ， y ∗ ′′ = ( a x 2 + ( 4 a + b ) x + 2 a + 2 b ) e x 。 代入原方程得 a = − 1 ， b = − 2 ，从而所求解为 y = C 1 ​ e 2 x + C 2 ​ e x − x ( x + 2 ) e x 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求函数\nf(x)=∫1x2(x2−t)e−t2dt\n的单调区间与极值。",
    referenceAnswer: "【答案】 单调增加区间为 ( − 1 , 0 ) 及 ( 1 , + ∞ ) ，单调减少区间为 ( − ∞ , − 1 ) 及 ( 0 , 1 ) ；极小值为 f ( 1 ) = f ( − 1 ) = 0 ，极大值为 f ( 0 ) = 2 1 ​ ( 1 − e − 1 ) 。 【解析】 由 f ′ ( x ) = 2 x ∫ 1 x 2 ​ e − t 2 d t = 0 ，可得 x = 0 , ± 1 。 列表讨论如下： x f ′ ( x ) f ( x ) ​ ( − ∞ , − 1 ) − 减 ​ − 1 0 极小值 ​ ( − 1 , 0 ) + 增 ​ 0 0 极大值 ​ ( 0 , 1 ) − 减 ​ 1 0 极小值 ​ ( 1 , + ∞ ) + 增 ​ ​ 因此， f ( x ) 的单调增加区间为 ( − 1 , 0 ) 及 ( 1 , + ∞ ) ，单调减少区间为 ( − ∞ , − 1 ) 及 ( 0 , 1 ) ；极小值为 f ( 1 ) = f ( − 1 ) = 0 ，极大值为 f ( 0 ) = ∫ 0 1 ​ t e − t 2 d t = 2 1 ​ ( 1 − e − 1 ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分\n10\n分）\n\n(I) 比较\n∫01∣lnt∣[ln(1+t)]ndt\n与\n∫01tn∣lnt∣dt\n（\nn=1,2,⋯\n）的大小，说明理由\n\n(II) 设\nun=∫01∣lnt∣[ln(1+t)]ndt\n（\nn=1,2,⋯\n），求极限\nlimn→∞un",
    referenceAnswer: "【答案】 (I) ∫ 0 1 ​ ∣ ln t ∣ [ ln ( 1 + t ) ] n d t ≤ ∫ 0 1 ​ t n ∣ ln t ∣ d t （ n = 1 , 2 , ⋯ ） (II) lim n → ∞ ​ u n ​ = 0 【解析】 (I) 令 f ( t ) = ln ( 1 + t ) − t 。 当 0 ≤ t ≤ 1 时， f ′ ( t ) = 1 + t 1 ​ − 1 ≤ 0 , 因此 f ( t ) 在区间 [ 0 , 1 ] 上单调递减， f ( t ) ≤ f ( 0 ) = 0. 于是 0 ≤ ln ( 1 + t ) ≤ t ≤ 1 , 进而 [ ln ( 1 + t ) ] n ≤ t n ( n = 1 , 2 , … ) . 又因为 ∣ ln t ∣ ≥ 0 ，可得 ∫ 0 1 ​ ∣ ln t ∣ ⋅ [ ln ( 1 + t ) ] n d t ≤ ∫ 0 1 ​ t n ∣ ln t ∣ d t ( n = 1 , 2 , … ) . (II) 方法一 由 (I) 知 0 ≤ u n ​ = ∫ 0 1 ​ ∣ ln t ∣ ⋅ [ ln ( 1 + t ) ] n d t ≤ ∫ 0 1 ​ t n ∣ ln t ∣ d t . 计算右端积分： ∫ 0 1 ​ t n ∣ ln t ∣ d t = − ∫ 0 1 ​ t n ln t d t . 利用分部积分，设 u = ln t , d v = t n d t , 则 d u = t 1 ​ d t , v = n + 1 t n + 1 ​ , 于是 − ∫ 0 1 ​ t n ln t d t = − [ n + 1 t n + 1 ​ ln t ] 0 1 ​ + ∫ 0 1 ​ n + 1 t n ​ d t . 第一项为零，第二项为 n + 1 1 ​ ∫ 0 1 ​ t n d t = ( n + 1 ) 2 1 ​ . 因此 ∫ 0 1 ​ t n ∣ ln t ∣ d t = ( n + 1 ) 2 1 ​ . 当 n → ∞ 时， n → ∞ lim ​ ∫ 0 1 ​ t n ∣ ln t ∣ d t = 0. 由夹逼准则， n → ∞ lim ​ u n ​ = 0. 方法二 0 < ∫ 0 1 ​ t n ∣ ln t ∣ d t = − ∫ 0 1 ​ t n ln t d t . 利用分部积分（同上）得 ∫ 0 1 ​ t n ∣ ln t ∣ d t = ( n + 1 ) 2 1 ​ ≤ n + 1 1 ​ . 因此 n → ∞ lim ​ ∫ 0 1 ​ t n ∣ ln t ∣ d t = 0 , 由夹逼准则， n → ∞ lim ​ u n ​ = 0. 方法三 由 (I) 知 0 ≤ [ ln ( 1 + t ) ] n ≤ t n . 又因为 t → 0 lim ​ t ∣ ln t ∣ = 0 , 存在 M > 0 ，使得对任意 t ∈ [ 0 , 1 ] ， t ∣ ln t ∣ ≤ M . 于是 0 ≤ u n ​ ​ = ∫ 0 1 ​ ∣ ln t ∣ ⋅ [ ln ( 1 + t ) ] n d t ≤ ∫ 0 1 ​ ∣ ln t ∣ ⋅ t n d t ≤ M ∫ 0 1 ​ t n − 1 d t = n M ​ ( n = 2 , 3 , … ) . ​ 由于 n → ∞ lim ​ n M ​ = 0 , 因此 n → ∞ lim ​ u n ​ = 0.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分\n10\n分）\n\n求幂级数\n∑n=1∞2n−1(−1)n−1x2n\n的收敛域及和函数",
    referenceAnswer: "【答案】 收敛域为 [ − 1 , 1 ] ，和函数为 s ( x ) = x arctan x 。 【解析】 因为 n → ∞ lim ​ ​ u n ​ u n + 1 ​ ​ ​ = n → ∞ lim ​ ​ x 2 n ( 2 n + 1 ) x 2 n + 2 ( 2 n − 1 ) ​ ​ = x 2 , 所以当 x 2 < 1 ，即 − 1 < x < 1 时，级数绝对收敛； 当 x 2 > 1 ，即 x < − 1 或 x > 1 时，级数发散。 当 x = ± 1 时，级数化为 n = 1 ∑ ∞ ​ 2 n − 1 ( − 1 ) n − 1 ​ , 由莱布尼茨判别法知该交错级数收敛，因此收敛域为 [ − 1 , 1 ] 。 由于 n = 1 ∑ ∞ ​ 2 n − 1 ( − 1 ) n − 1 ​ x 2 n = x n = 1 ∑ ∞ ​ 2 n − 1 ( − 1 ) n − 1 ​ x 2 n − 1 , 设 n = 1 ∑ ∞ ​ 2 n − 1 ( − 1 ) n − 1 ​ x 2 n − 1 = f ( x ) , x ∈ ( − 1 , 1 ) , 则 f ′ ( x ) = n = 1 ∑ ∞ ​ ( − 1 ) n − 1 x 2 ( n − 1 ) = 1 + x 2 1 ​ . 由于 f ( 0 ) = 0 ，可得 f ( x ) = ∫ 0 x ​ f ′ ( t ) d t + f ( 0 ) = arctan x . 因此和函数为 s ( x ) = x arctan x , x ∈ [ − 1 , 1 ] .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n设\nP\n为椭球面\nS:x2+y2+z2−yz=1\n上的动点，若\nS\n在点\nP\n处的切平面与\nxOy\n面垂直，求点\nP\n的轨迹\nC\n，并计算\n\nI=∬Σ4+y2+z2−4yz(x+3)∣y−2z∣dS\n\n其中\nΣ\n是椭球面\nS\n位于曲线\nC\n上方的部分。",
    referenceAnswer: "【答案】 轨迹 C 为 { x 2 + y 2 + z 2 − yz = 1 y = 2 z ​ ，且 I = 2 π 。 【解析】 (1) 椭球面 S 的切平面法向量为 F x ​ = 2 x ， F y ​ = 2 y − z ， F z ​ = 2 z − y 。 因切平面与 x O y 面垂直，所以法向量的 z 分量为 0 ，即 2 z − y = 0 ⇒ z = 2 y ​ 。 所以轨迹为 { x 2 + y 2 + z 2 − yz = 1 y = 2 z ​ (2) 面积微元为 d S = 1 + z x 2 ​ + z y 2 ​ ​ d x d y = 2 z − y 4 x 2 + 5 y 2 + 5 z 2 − 8 yz ​ ​ d x d y 原式可化简为 ∬ D x y ​ ​ ( x + 3 ​ ) d x d y 其中 D x y ​ = { ( x , y ) ​ x 2 + 4 3 ​ y 2 ≤ 1 } 计算得 ∬ D x y ​ ​ x d x d y + ∬ D x y ​ ​ 3 ​ d x d y = 0 + 3 ​ ⋅ π ⋅ 1 ⋅ 3 ​ 2 ​ = 2 π",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\n\nA=λ011λ−1110λ,b=a11\n\n已知线性方程组\nAx=b\n存在 2 个不同的解，\n\n(I) 求\nλ,a\n；\n\n(II) 求方程组\nAx=b\n的通解。",
    referenceAnswer: "【答案】 (I) λ = − 1 , a = − 2 (II) 方程组 A x = b 的通解为 x = 2 1 ​ ​ 3 − 1 0 ​ ​ + k ​ 1 0 1 ​ ​ ，其中 k 为任意常数。 【解析】 (I) 设 η 1 ​ , η 2 ​ 为 A x = b 的两个不同的解，则 η 1 ​ − η 2 ​ 是 A x = 0 的非零解，故 ∣ A ∣ = ( λ − 1 ) 2 ( λ + 1 ) = 0 ，于是 λ = 1 或 λ = − 1 。 当 λ = 1 时， r ( A )  = r ( A ∣ b ) ，方程组无解，舍去； 当 λ = − 1 时，对增广矩阵作初等行变换： ( A ⋮ b ) = ​ − 1 0 1 ​ 1 − 2 1 ​ 1 0 − 1 ​ a 1 1 ​ ​ → ​ − 1 0 0 ​ 0 1 0 ​ − 1 0 0 ​ 2 3 ​ − 2 1 ​ a + 2 ​ ​ , 因为方程组有解，所以 a + 2 = 0 ⇒ a = − 2 。 (II) 当 λ = − 1 , a = − 2 时，增广矩阵化为 ​ − 1 0 0 ​ 0 1 0 ​ − 1 0 0 ​ 2 3 ​ − 2 1 ​ 0 ​ ​ , 方程组通解为 x = 2 1 ​ ​ 3 − 1 0 ​ ​ + k ​ 1 0 1 ​ ​ , 其中 k 为任意常数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知二次型\nf(x1,x2,x3)=xTAx\n在正交变换\nx=Qy\n下的标准形为\ny12+y22\n，且\nQ\n的第 3 列为\n(22,0,22)T\n。\n\n(I) 求矩阵\nA\n；\n\n(II) 证明\nA+E\n为正定矩阵，其中\nE\n为 3 阶单位矩阵。",
    referenceAnswer: "【答案】 (I) 矩阵 A = ​ 2 1 ​ 0 − 2 1 ​ ​ 0 1 0 ​ − 2 1 ​ 0 2 1 ​ ​ ​ (II) 见解析 【解析】 (I) 由 Q T A Q = Λ ，其中 Λ = ​ 1 ​ 1 ​ 0 ​ ​ ，故 A = Q Λ Q T 。设 Q 的其他列向量为 ( x 1 ​ , x 2 ​ , x 3 ​ ) T ，因 Q 为正交矩阵，所以 ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ 2 2 ​ ​ 0 2 2 ​ ​ ​ ​ = 0 ，即 x 1 ​ + x 3 ​ = 0 ，其基础解系为 α 1 ​ = ​ − 1 0 1 ​ ​ ， α 2 ​ = ​ 0 1 0 ​ ​ 。 将 α 1 ​ 单位化得 β 1 ​ = ​ − 2 2 ​ ​ 0 2 2 ​ ​ ​ ​ ，则 Q = ​ − 2 2 ​ ​ 0 2 2 ​ ​ ​ 0 1 0 ​ 2 2 ​ ​ 0 2 2 ​ ​ ​ ​ ， Q T = 2 2 ​ ​ ​ − 1 0 1 ​ 0 2 ​ 0 ​ 1 0 1 ​ ​ ，所以 A = Q Λ Q T = ​ 2 1 ​ 0 − 2 1 ​ ​ 0 1 0 ​ − 2 1 ​ 0 2 1 ​ ​ ​ 。 (II) 证明：因为 ( A + E ) T = A T + E = A + E ，所以 A + E 为实对称矩阵。又因为 A 的特征值为 1 , 1 , 0 ，所以 A + E 的特征值为 2 , 2 , 1 ，都大于 0 ，故 A + E 为正定矩阵。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n的概率密度为\n\nf(x,y)=Ae−2x2+2xy−y2,−∞x+∞,−∞y+∞,\n\n求常数\nA\n及条件概率密度\nfY∣X(y∣x)\n。",
    referenceAnswer: "【答案】 常数 A = π 1 ​ ，条件概率密度 f Y ∣ X ​ ( y ∣ x ) = π ​ 1 ​ e − ( x − y ) 2 。 【解析】 由概率密度的性质 ∫ − ∞ + ∞ ​ ∫ − ∞ + ∞ ​ f ( x , y ) d x d y = 1 ，可知 ∫ − ∞ + ∞ ​ ∫ − ∞ + ∞ ​ A e − 2 x 2 + 2 x y − y 2 d x d y = A ∫ − ∞ + ∞ ​ e − x 2 d x ∫ − ∞ + ∞ ​ e − ( x − y ) 2 d y = 1 又知 ∫ − ∞ + ∞ ​ e − x 2 d x = π ​ ，有 ∫ − ∞ + ∞ ​ e − x 2 d x ∫ − ∞ + ∞ ​ e − ( x − y ) 2 d y = π ​ ⋅ π ​ = π 所以 A = π 1 ​ ，即 f ( x , y ) = π 1 ​ e − 2 x 2 + 2 x y − y 2 X 的边缘概率密度为 f X ​ ( x ) = π 1 ​ e − x 2 ∫ − ∞ + ∞ ​ e − ( x − y ) 2 d y = π 1 ​ e − x 2 ⋅ π ​ = π ​ 1 ​ e − x 2 , − ∞ < x < + ∞ 条件概率密度为 f Y ∣ X ​ ( y ∣ x ) ​ = f X ​ ( x ) f ( x , y ) ​ = π ​ 1 ​ e − x 2 π 1 ​ e − 2 x 2 + 2 x y − y 2 ​ = π ​ 1 ​ e − ( x − y ) 2 , − ∞ < x < + ∞ , − ∞ < y < + ∞ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率分布为\n\nXP11−θ2θ−θ23θ2\n\n其中参数\nθ∈(0,1)\n未知。以\nNi\n表示来自总体\nX\n的简单随机样本（样本容量为\nn\n）中等于\ni\n的个数\n(i=1,2,3)\n。试求常数\na1\n、\na2\n、\na3\n，使\nT=∑i=13aiNi\n为\nθ\n的无偏估计量，并求\nT\n的方差。",
    referenceAnswer: "【答案】 a 1 ​ = 0 ， a 2 ​ = n 1 ​ ， a 3 ​ = n 1 ​ ， T = n N 2 ​ + N 3 ​ ​ = 1 − n N 1 ​ ​ ， D T = n ( 1 − θ ) θ ​ 【解析】 由题知 N 1 ​ 、 N 2 ​ 、 N 3 ​ 分别服从二项分布 B ( n , 1 − θ ) 、 B ( n , θ − θ 2 ) 、 B ( n , θ 2 ) ，则有 E N 1 ​ = n ( 1 − θ ) ， E N 2 ​ = n ( θ − θ 2 ) ， E N 3 ​ = n θ 2 。 ET = E ( ∑ i = 1 3 ​ a i ​ N i ​ ) = ∑ i = 1 3 ​ a i ​ E N i ​ = a 1 ​ n ( 1 − θ ) + a 2 ​ n ( θ − θ 2 ) + a 3 ​ n θ 2 = θ ，整理得 ⎩ ⎨ ⎧ ​ a 1 ​ n = 0 a 2 ​ n − a 1 ​ n = 1 a 3 ​ n − a 2 ​ n = 0 ​ 解得 ⎩ ⎨ ⎧ ​ a 1 ​ = 0 a 2 ​ = n 1 ​ a 3 ​ = n 1 ​ ​ 即 T = n N 2 ​ + N 3 ​ ​ = 1 − n N 1 ​ ​ 。 D T = D ( 1 − n N 1 ​ ​ ) = n 2 1 ​ D N 1 ​ = n 2 1 ​ ⋅ n ( 1 − θ ) θ = n ( 1 − θ ) θ ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2010_math1 = {
  id: P, year: Y,
  title: '2010 年全国硕士研究生招生考试 数学（一）',
  short: '2010 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2010_math1.length,
  qids: questions2010_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
