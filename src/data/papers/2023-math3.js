const P = 'paper-2023-math3'
const Y = 2023
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2023-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2023 考研数学（三）真题',
  ...extra
})

export const questions2023_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数\nf(x,y)=ln(y+∣xsiny∣)\n，则()",
    options: [{ key: "A", text: "∂ x ∂ f ​ ∣ ( 0 , 1 ) ​ 不存在， ∂ y ∂ f ​ ∣ ( 0 , 1 ) ​ 存在" }, { key: "B", text: "∂ x ∂ f ​ ∣ ( 0 , 1 ) ​ 存在， ∂ y ∂ f ​ ∣ ( 0 , 1 ) ​ 不存在" }, { key: "C", text: "∂ x ∂ f ​ ∣ ( 0 , 1 ) ​ 、 ∂ y ∂ f ​ ∣ ( 0 , 1 ) ​ 均存在" }, { key: "D", text: "∂ x ∂ f ​ ∣ ( 0 , 1 ) ​ 、 ∂ y ∂ f ​ ∣ ( 0 , 1 ) ​ 均不存在" }],
    answer: ["A"],
    explain: "正确答案： A f ( 0 , 1 ) = 0 ，由偏导数的定义 ∂ x ∂ f ​ ​ ( 0 , 1 ) ​ = x → 0 lim ​ x f ( x , 1 ) − f ( 0 , 1 ) ​ = x → 0 lim ​ x ln ( 1 + sin 1∣ x ∣ ) ​ = sin 1 x → 0 lim ​ x ∣ x ∣ ​ , 因为 x → 0 + lim ​ x ∣ x ∣ ​ = 1 , x → 0 − lim ​ x ∣ x ∣ ​ = − 1 , 所以 ∂ x ∂ f ​ ∣ ( 0 , 1 ) ​ 不存在。 而 ∂ y ∂ f ​ ​ ( 0 , 1 ) ​ = y → 1 lim ​ y − 1 f ( 0 , y ) − f ( 0 , 1 ) ​ = y → 1 lim ​ y − 1 ln y ​ = y → 1 lim ​ y − 1 y − 1 ​ = 1 , 所以 ∂ y ∂ f ​ ∣ ( 0 , 1 ) ​ 存在。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "函数\n\nf(x)={1+x21,(x+1)cosx,x≤0x>0\n\n的一个原函数为()",
    options: [{ key: "A", text: "F ( x ) = { ln ( 1 + x 2 ​ − x ) , ( x + 1 ) cos x − sin x , ​ x ≤ 0 x > 0 ​" }, { key: "B", text: "F ( x ) = { ln ( 1 + x 2 ​ − x ) + 1 , ( x + 1 ) cos x − sin x , ​ x ≤ 0 x > 0 ​" }, { key: "C", text: "F ( x ) = { ln ( 1 + x 2 ​ + x ) , ( x + 1 ) sin x + cos x , ​ x ≤ 0 x > 0 ​" }, { key: "D", text: "F ( x ) = { ln ( 1 + x 2 ​ + x ) + 1 , ( x + 1 ) sin x + cos x , ​ x ≤ 0 x > 0 ​" }],
    answer: ["D"],
    explain: "正确答案： D 当 x ≤ 0 时， ∫ f ( x ) d x = ∫ 1 + x 2 ​ d x ​ = ln ( x + 1 + x 2 ​ ) + C 1 ​ 当 x > 0 时， ∫ f ( x ) d x ​ = ∫ ( x + 1 ) cos x d x = ∫ ( x + 1 ) d sin x = ( x + 1 ) sin x − ∫ sin x d x = ( x + 1 ) sin x + cos x + C 2 ​ ​ 原函数在 ( − ∞ , + ∞ ) 内连续，则在 x = 0 处， x → 0 − lim ​ ln ( x + 1 + x 2 ​ ) + C 1 ​ = C 1 ​ , x → 0 + lim ​ ( x + 1 ) sin x + cos x + C 2 ​ = 1 + C 2 ​ 所以 C 1 ​ = 1 + C 2 ​ 。令 C 2 ​ = C ，则 C 1 ​ = 1 + C 。故 ∫ f ( x ) d x = { ln ( x + 1 + x 2 ​ ) + 1 + C , ( x + 1 ) sin x + cos x + C , ​ x ≤ 0 x > 0 ​ 结合选项，令 C = 0 ，则 f ( x ) 的一个原函数为 F ( x ) = { ln ( 1 + x 2 ​ + x ) + 1 , ( x + 1 ) sin x + cos x , ​ x ≤ 0 x > 0 ​"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "若微分方程\ny′′+ay′+by=0\n的解在\n(−∞,+∞)\n上有界，则 ( )",
    options: [{ key: "A", text: "a < 0 , b > 0" }, { key: "B", text: "a > 0 , b > 0" }, { key: "C", text: "a = 0 , b > 0" }, { key: "D", text: "a = 0 , b < 0" }],
    answer: ["C"],
    explain: "正确答案： C 微分方程 y ′′ + a y ′ + b y = 0 的特征方程为 λ 2 + aλ + b = 0 。 当判别式 Δ = a 2 − 4 b > 0 时，特征方程有两个不同的实根 λ 1 ​ 和 λ 2 ​ 。此时， λ 1 ​ 和 λ 2 ​ 至少有一个不等于零。若常数 C 1 ​ 和 C 2 ​ 都不为零，则微分方程的解为 y = C 1 ​ e λ 1 ​ x + C 2 ​ e λ 2 ​ x 在区间 ( − ∞ , + ∞ ) 上无界。 当判别式 Δ = a 2 − 4 b = 0 时，特征方程有两个相同的实根 λ 1 , 2 ​ = − 2 a ​ 。若 C 2 ​  = 0 ，则微分方程的解为 y = C 1 ​ e − 2 a ​ x + C 2 ​ x e − 2 a ​ x 在区间 ( − ∞ , + ∞ ) 上无界。 当判别式 Δ = a 2 − 4 b < 0 时，特征方程的根为 λ 1 , 2 ​ = − 2 a ​ ± 2 4 b − a 2 ​ ​ i 此时，通解为 y = e − 2 a ​ x ( C 1 ​ cos 2 4 b − a 2 ​ ​ x + C 2 ​ sin 2 4 b − a 2 ​ ​ x ) 要使微分方程的解在 ( − ∞ , + ∞ ) 上有界，必须满足 a = 0 。再由判别式条件 Δ = a 2 − 4 b < 0 ，可知 b > 0 。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知\nanbn (n=1,2,⋯)\n。若级数\n∑n=1∞an\n与\n∑n=1∞bn\n均收敛，则“\n∑n=1∞an\n绝对收敛”是“\n∑n=1∞bn\n绝对收敛”的",
    options: [{ key: "A", text: "充分必要条件." }, { key: "B", text: "充分不必要条件." }, { key: "C", text: "必要不充分条件." }, { key: "D", text: "既不充分也不必要条件." }],
    answer: ["A"],
    explain: "正确答案： A 由条件知 ∑ n = 1 ∞ ​ ( b n ​ − a n ​ ) 为收敛的正项级数，进而绝对收敛。 设 ∑ n = 1 ∞ ​ a n ​ 绝对收敛，则由不等式 ∣ b n ​ ∣ = ∣ b n ​ − a n ​ + a n ​ ∣ ≤ ∣ b n ​ − a n ​ ∣ + ∣ a n ​ ∣ 与比较判别法，得 ∑ n = 1 ∞ ​ b n ​ 绝对收敛。 设 ∑ n = 1 ∞ ​ b n ​ 绝对收敛，则由不等式 ∣ a n ​ ∣ = ∣ a n ​ − b n ​ + b n ​ ∣ ≤ ∣ b n ​ − a n ​ ∣ + ∣ b n ​ ∣ 与比较判别法，得 ∑ n = 1 ∞ ​ a n ​ 绝对收敛。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA\n、\nB\n为\nn\n阶可逆矩阵，\nE\n为\nn\n阶单位矩阵，\nM∗\n为矩阵\nM\n的伴随矩阵，则\n\n(AOEB)∗= ?",
    options: [{ key: "A", text: "( ∣ A ∣ B ∗ 0 ​ − B ∗ A ∗ ∣ B ∣ A ∗ ​ )" }, { key: "B", text: "( ∣ B ∣ A ∗ 0 ​ − A ∗ B ∗ ∣ A ∣ B ∗ ​ )" }, { key: "C", text: "( ∣ B ∣ A ∗ 0 ​ − B ∗ A ∗ ∣ A ∣ B ∗ ​ )" }, { key: "D", text: "( ∣ A ∣ B ∗ 0 ​ − A ∗ B ∗ ∣ B ∣ A ∗ ​ )" }],
    answer: ["B"],
    explain: "正确答案： B 结合伴随矩阵的核心公式，代入 (B) 计算知 ( A O ​ E B ​ ) ( ∣ B ∣ A ∗ O ​ − A ∗ B ∗ ∣ A ∣ B ∗ ​ ) = ( ∣ B ∣ A A ∗ O ​ − A A ∗ B ∗ + ∣ A ∣ E B ∗ ∣ A ∣ B B ∗ ​ ) 进一步化简得 ( ∣ B ∣∣ A ∣ E O ​ − ∣ A ∣ B ∗ + ∣ A ∣ B ∗ ∣ A ∣∣ B ∣ E ​ ) = ( ∣ B ∣∣ A ∣ E O ​ O ∣ A ∣∣ B ∣ E ​ ) = ∣ A ∣∣ B ∣ E 因此，(B) 正确。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "二次型\nf(x1,x2,x3)=(x1+x2)2+(x1+x3)2−4(x2−x3)2\n的规范形为()",
    options: [{ key: "A", text: "y 1 2 ​ + y 2 2 ​" }, { key: "B", text: "y 1 2 ​ − y 2 2 ​" }, { key: "C", text: "y 1 2 ​ + y 2 2 ​ − 4 y 3 2 ​" }, { key: "D", text: "y 1 2 ​ + y 2 2 ​ − y 3 2 ​" }],
    answer: ["B"],
    explain: "正确答案： B 由已知二次型： f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 2 x 1 2 ​ − 3 x 2 2 ​ − 3 x 3 2 ​ + 2 x 1 ​ x 2 ​ + 2 x 1 ​ x 3 ​ + 8 x 2 ​ x 3 ​ 其对应的实对称矩阵为： A = ​ 2 1 1 ​ 1 − 3 4 ​ 1 4 − 3 ​ ​ 计算特征方程： ∣ λ E − A ∣ = ​ λ − 2 − 1 − 1 ​ − 1 λ + 3 − 4 ​ − 1 − 4 λ + 3 ​ ​ = λ ( λ + 7 ) ( λ − 3 ) = 0 解得矩阵 A 的特征值为 0 ， − 7 ， 3 ，因此其规范形为： y 1 2 ​ − y 2 2 ​"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知向量\n\nα1=123,α2=211,β1=259,β2=101,\n\n若\nγ\n既可由\nα1\n、\nα2\n线性表示，也可由\nβ1\n、\nβ2\n线性表示，则\n\nγ=?",
    options: [{ key: "A", text: "k ​ 3 3 4 ​ ​ , k ∈ R" }, { key: "B", text: "k ​ 3 5 10 ​ ​ , k ∈ R" }, { key: "C", text: "k ​ − 1 1 2 ​ ​ , k ∈ R" }, { key: "D", text: "k ​ 1 5 8 ​ ​ , k ∈ R" }],
    answer: ["D"],
    explain: "正确答案： D 设 γ = x 1 ​ α 1 ​ + x 2 ​ α 2 ​ = y 1 ​ β 1 ​ + y 2 ​ β 2 ​ ， 则 x 1 ​ α 1 ​ + x 2 ​ α 2 ​ − y 1 ​ β 1 ​ − y 2 ​ β 2 ​ = 0 又 ( α 1 ​ , α 2 ​ , − β 1 ​ , − β 2 ​ ) = ​ 1 2 3 ​ 2 1 1 ​ − 2 − 5 − 9 ​ − 1 0 − 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 3 − 1 1 ​ ​ 故 ( x 1 ​ , x 2 ​ , y 1 ​ , y 2 ​ ) T = c ( − 3 , 1 , − 1 , 1 ) T , c ∈ R 所以 γ = − c β 1 ​ + c β 2 ​ = c ( − 1 , − 5 , − 8 ) T = − c ( 1 , 5 , 8 ) T = k ( 1 , 5 , 8 ) T , k ∈ R"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n服从参数为 1 的泊松分布，则\nE(∣X−E(X)∣)=",
    options: [{ key: "A", text: "e 1 ​ ." }, { key: "B", text: "2 1 ​ ." }, { key: "C", text: "e 2 ​ ." }, { key: "D", text: "1 ." }],
    answer: ["C"],
    explain: "正确答案： C 法1：由题可知 EX = 1 ，所以 E ∣ X − EX ∣ ​ = 1 ⋅ P { X = 0 } + k = 1 ∑ ∞ ​ ( k − 1 ) P { X = k } = e 1 ​ + k = 0 ∑ ∞ ​ ( k − 1 ) P { X = k } − ( 0 − 1 ) P { X = 0 } ​ = e 1 ​ + E ( X − 1 ) − ( 0 − 1 ) e 1 ​ = e 2 ​ ，选 (C)。 法2：随机变量 X 服从参数为 1 的泊松分布，即 P ( X = k ) = k ! 1 ​ e − 1 ( k = 0 , 1 , 2 , … ) ，期望 E ( X ) = 1 。 E ( ∣ X − E ( X ) ∣ ) ​ = E ( ∣ X − 1∣ ) = 1 ⋅ 0 ! 1 ​ e − 1 + 0 ⋅ 1 ! 1 ​ e − 1 + 1 ⋅ 2 ! 1 ​ e − 1 + ⋯ + ( k − 1 ) ⋅ k ! 1 ​ e − 1 + … = e − 1 + k = 2 ∑ ∞ ​ ( k − 1 ) ⋅ k ! 1 ​ e − 1 = e − 1 + k = 2 ∑ ∞ ​ k ! k ​ e − 1 − k = 2 ∑ ∞ ​ k ! 1 ​ e − 1 = e − 1 + k = 2 ∑ ∞ ​ ( k − 1 )! 1 ​ e − 1 − k = 2 ∑ ∞ ​ k ! 1 ​ e − 1 ​ = e − 1 + ( e − 1 ) e − 1 − ( e − 1 − 1 ) e − 1 = 2 e − 1 ，选 (C)。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nX1,X2,⋯,Xn\n为来自总体\nN(μ1,σ2)\n的简单随机样本，\nY1,Y2,⋯,Ym\n为来自总体\nN(μ2,2σ2)\n的简单随机样本，\n且两样本相互独立。\n\n记\n\nXˉ=n1i=1∑nXi,Yˉ=m1i=1∑mYi,\n\nS12=n−11i=1∑n(Xi−Xˉ)2,S22=m−11i=1∑m(Yi−Yˉ)2,\n\n则",
    options: [{ key: "A", text: "S 2 2 ​ S 1 2 ​ ​ ∼ F ( n , m )" }, { key: "B", text: "S 2 2 ​ S 1 2 ​ ​ ∼ F ( n − 1 , m − 1 )" }, { key: "C", text: "S 2 2 ​ 2 S 1 2 ​ ​ ∼ F ( n , m )" }, { key: "D", text: "S 2 2 ​ 2 S 1 2 ​ ​ ∼ F ( n − 1 , m − 1 )" }],
    answer: ["D"],
    explain: "正确答案： D 对于样本 X 1 ​ , X 2 ​ , … , X n ​ ，其样本方差为： S 1 2 ​ = n − 1 1 ​ i = 1 ∑ n ​ ( X i ​ − X ˉ ) 2 对于样本 Y 1 ​ , Y 2 ​ , … , Y m ​ ，其样本方差为： S 2 2 ​ = m − 1 1 ​ i = 1 ∑ m ​ ( Y i ​ − Y ˉ ) 2 根据卡方分布的性质，有： σ 2 ( n − 1 ) S 1 2 ​ ​ ∼ χ 2 ( n − 1 ) 2 σ 2 ( m − 1 ) S 2 2 ​ ​ ∼ χ 2 ( m − 1 ) 当两个样本相互独立时，可以构造 F 统计量： 2 σ 2 ( m − 1 ) S 2 2 ​ ​ / ( m − 1 ) σ 2 ( n − 1 ) S 1 2 ​ ​ / ( n − 1 ) ​ = S 2 2 ​ /2 σ 2 S 1 2 ​ / σ 2 ​ = S 2 2 ​ 2 S 1 2 ​ ​ ∼ F ( n − 1 , m − 1 )"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nX1\n,\nX2\n为来自总体\nN(μ,σ2)\n的简单随机样本，其中\nσ\n(\nσ>0\n) 是未知参数。记\nσ^=a∣X1−X2∣\n，若\nE(σ^)=σ\n，则\na=",
    options: [{ key: "A", text: "2 π ​ ​" }, { key: "B", text: "2 2 π ​ ​" }, { key: "C", text: "π ​" }, { key: "D", text: "2 π ​" }],
    answer: ["A"],
    explain: "正确答案： A 由题可知 X 1 ​ − X 2 ​ ∼ N ( 0 , 2 σ 2 ) ，令 Y = X 1 ​ − X 2 ​ ，则 Y 的概率密度为 f ( y ) = 2 π ​ 2 ​ σ 1 ​ e − 2 ⋅ 2 σ 2 y 2 ​ 计算 E ( ∣ Y ∣ ) ： E ( ∣ Y ∣ ) = ∫ − ∞ + ∞ ​ ∣ y ∣ 2 π ​ 2 ​ σ 1 ​ e − 2 ⋅ 2 σ 2 y 2 ​ d y = 2 π ​ 2 ​ σ 2 ​ ∫ 0 + ∞ ​ y e − 4 σ 2 y 2 ​ d y = π ​ 2 σ ​ 进一步求解： E ( a ∣ X 1 ​ − X 2 ​ ∣ ) = a E ( ∣ Y ∣ ) = a π ​ 2 σ ​ 由 E ( σ ) = σ ，可得： a = 2 π ​ ​ 故选 ( A ) 。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\nlimx→∞x2(2−xsinx1−cosx1)=",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 首先展开表达式： ​ x → ∞ lim ​ x 2 ( 2 − x sin x 1 ​ − cos x 1 ​ ) = x 2 [ 2 − x ( x 1 ​ − 6 x 3 1 ​ + o ( x 3 1 ​ ) ) − ( 1 − 2 x 2 1 ​ + o ( x 2 1 ​ ) ) ] ​ 简化后得到： x 2 [ 6 x 2 1 ​ + 2 x 2 1 ​ + o ( x 2 1 ​ ) ] = 3 2 ​ 最终结果为 3 2 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知函数\nf(x,y)\n满足\n\ndf(x,y)=x2+y2xdy−ydx,\n\n且\nf(1,1)=4π\n，则\nf(3,3)=",
    answerText: "】 3 π ​ 【",
    referenceAnswer: "【答案】 3 π ​ 【解析】 由题意可得 f x ′ ​ ( x , y ) = x 2 + y 2 − y ​ ，则 f ( x , y ) = − y ⋅ y 1 ​ ⋅ arctan y x ​ + c ( y ) = − arctan y x ​ + c ( y ) 又因为 f y ′ ​ ( x , y ) = x 2 + y 2 x ​ ，可得 c ′ ( y ) = 0 。由 f ( 1 , 1 ) = 4 π ​ 可得 c = 2 π ​ ，即 f ( x , y ) = − arctan y x ​ + 2 π ​ 故 f ( 3 ​ , 3 ) = 3 π ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\nn=0∑∞(2n)!x2n=",
    answerText: "】 2 1 ​ e x + 2 1 ​ e − x 【",
    referenceAnswer: "【答案】 2 1 ​ e x + 2 1 ​ e − x 【解析】 令 s ( x ) = ∑ n = 0 ∞ ​ ( 2 n )! x 2 n ​ ，则： s ′ ( x ) = n = 1 ∑ ∞ ​ ( 2 n − 1 )! x 2 n − 1 ​ s ′′ ( x ) = n = 1 ∑ ∞ ​ ( 2 n − 2 )! x 2 n − 2 ​ = n = 0 ∑ ∞ ​ ( 2 n )! x 2 n ​ = s ( x ) 即有微分方程 s ′′ ( x ) − s ( x ) = 0 ，其通解为： s ( x ) = C 1 ​ e x + C 2 ​ e − x 由初始条件 s ( 0 ) = 1 和 s ′ ( 0 ) = 0 ，可得： C 1 ​ + C 2 ​ = 1 C 1 ​ − C 2 ​ = 0 解得 C 1 ​ = C 2 ​ = 2 1 ​ ，因此： s ( x ) = 2 1 ​ e x + 2 1 ​ e − x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设某公司在\nt\n时刻的资产为\nf(t)\n，从\n0\n时刻到\nt\n时刻的平均资产等于\ntf(t)−t\n。假设\nf(t)\n连续且\nf(0)=0\n，则\nf(t)=",
    answerText: "】 f ( t ) = 2 e t − 2 t − 2 【",
    referenceAnswer: "【答案】 f ( t ) = 2 e t − 2 t − 2 【解析】 由题意可得方程 t ∫ 0 t ​ f ( x ) d x ​ = t f ( t ) ​ − t 即 ∫ 0 t ​ f ( x ) d x = f ( t ) − t 2 两边同时对 t 求导得 f ( t ) = f ′ ( t ) − 2 t 即 f ′ ( t ) − f ( t ) = 2 t 由一阶线性微分方程通解公式有： f ( t ) = e ∫ 1 d t ( ∫ 2 t e − ∫ 1 d t d t + C ) = e t ( ∫ 2 t e − t d t + C ) 计算积分部分： ∫ 2 t e − t d t = − ( 2 t + 2 ) e − t 因此通解为： f ( t ) = e t [ − ( 2 t + 2 ) e − t + C ] = C e t − 2 t − 2 又由于 f ( 0 ) = 0 ，代入得： C − 2 = 0 ⇒ C = 2 故最终解为： f ( t ) = 2 e t − 2 t − 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知线性方程组\n\n⎩⎨⎧αx1+x3=1x1+αx2+x3=0x1+2x2+αx3=0αx1+αx2=2\n\n有解，其中\nα,b\n为常数。若\n\nα110α211α=4,\n\n则\n\n11αα2b1α0=.",
    answerText: "】 8 【",
    referenceAnswer: "【答案】 8 【解析】 由已知 r ( A ) = r ( A , b ) ≤ 3 < 4 ，故 ∣ A , b ∣ = 0 。 即 ∣ A , b ∣ = ​ α 1 1 α ​ 0 α 2 b ​ 1 1 α 0 ​ 1 0 0 2 ​ ​ = 1 ⋅ ( − 1 ) 1 + 4 ​ 1 1 α ​ α 2 b ​ 1 α 0 ​ ​ + 2 ⋅ ( − 1 ) 4 + 4 ​ α 1 1 ​ 0 α 2 ​ 1 1 α ​ ​ = − ​ 1 1 α ​ α 2 b ​ 1 α 0 ​ ​ + 2 ⋅ 4 = 0 故 ​ 1 1 α ​ α 2 b ​ 1 α 0 ​ ​ = 8",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n与\nY\n相互独立，且\nX∼B(1,p)\n，\nY∼B(2,p)\n，\np∈(0,1)\n，则\nX+Y\n与\nX−Y\n的相关系数为",
    answerText: "】 − 3 1 ​ 【",
    referenceAnswer: "【答案】 − 3 1 ​ 【解析】 因为 X ∼ B ( 1 , p ) ，所以 D X = p ( 1 − p ) 。因为 Y ∼ B ( 2 , p ) ，所以 D Y = 2 p ( 1 − p ) 。 协方差计算如下： C o v ( X + Y , X − Y ) ​ = C o v ( X + Y , X ) − C o v ( X + Y , Y ) = C o v ( X , X ) + C o v ( Y , X ) − C o v ( X , Y ) − C o v ( Y , Y ) = D X − D Y = p ( 1 − p ) − 2 p ( 1 − p ) = − p ( 1 − p ) ​ 由于 X 与 Y 相互独立，方差计算如下： D ( X + Y ) = D X + D Y = 3 p ( 1 − p ) D ( X − Y ) = D X + D Y = 3 p ( 1 − p ) 因此，相关系数为： ρ = D ( X + Y ) D ( X − Y ) ​ C o v ( X + Y , X − Y ) ​ = − 3 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知可导函数\ny=y(x)\n满足\n\naex+y2+y−ln(1+x)cosy+b=0,\n\n且\ny(0)=0\n，\ny′(0)=0\n。\n\n(I) 求\na\n，\nb\n的值；\n\n(II) 判断\nx=0\n是否为\ny(x)\n的极值点。",
    referenceAnswer: "【答案】 (I) a = 1 ， b = − 1 (II) x = 0 是 y ( x ) 的极大值点。 【解析】 (1) 在题设方程两边同时对 x 求导得， a e x + 2 y ⋅ y ′ + y ′ − 1 + x cos y ​ + ln ( 1 + x ) ⋅ sin y ⋅ y ′ = 0 将 x = 0 ， y = 0 代入题设方程得， a + b = 0 ；将 x = 0 ， y = 0 ， y ′ ( 0 ) = 0 代入①式得， a − 1 = 0 。综上： a = 1 ， b = − 1 。 (2) 在等式①两边再对 x 求导得， a e x + 2 ( y ′ ) 2 + 2 y ⋅ y ′′ + y ′′ ( 1 + x ) 2 − sin y ⋅ y ′ ⋅ ( 1 + x ) − cos y ​ ( ln ( 1 + x ) ⋅ sin y ⋅ y ′ ) ′ = 0 将 x = 0 ， y = 0 ， y ′ ( 0 ) = 0 代入②式得， y ′′ ( 0 ) = − a − 1 = − 2 。由于 y ′ ( 0 ) = 0 ， y ′′ ( 0 ) = − 2 ，故 x = 0 是 y ( x ) 的极大值点。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n已知平面区域\nD={(x,y)∣0≤y≤x1+x21, x≥1}\n。\n\n(I) 求\nD\n的面积；\n\n(II) 求\nD\n绕\nx\n轴旋转所成旋转体的体积。",
    referenceAnswer: "【答案】 (I) ln ( 1 + 2 ​ ) (II) π ( 1 − 4 π ​ ) 【解析】 (1) 面积 S ​ = ∫ 1 + ∞ ​ x 1 + x 2 ​ 1 ​ d x = ∫ 4 π ​ 2 π ​ ​ tan t ⋅ sec t sec 2 t ​ d t = ∫ 4 π ​ 2 π ​ ​ csc t d t = ln ∣ csc t − cot t ∣ ∣ 4 π ​ 2 π ​ ​ = ln ( 1 + 2 ​ ) . ​ (2) 旋转体体积为 V x ​ ​ = ∫ 1 + ∞ ​ π y 2 d x = π ∫ 1 + ∞ ​ x 2 ( 1 + x 2 ) 1 ​ d x = π ∫ 1 + ∞ ​ ( x 2 1 ​ − 1 + x 2 1 ​ ) d x = π ( − x 1 ​ − arctan x ) ​ 1 + ∞ ​ = π ( 1 − 4 π ​ ) . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n已知平面区域\nD={(x,y)∣(x−1)2+y2≤1}\n，计算二重积分\n\nD∬x2+y2−1dxdy.",
    referenceAnswer: "【答案】 D ∬ ​ ​ x 2 + y 2 ​ − 1 ​ d x d y = − 9 π + 32 ​ + 3 3 ​ 【解析】 本题利用奇偶对称性化简，再切割积分区域，将积分区域分为三块，分别采用极坐标进行计算： D ∬ ​ ∣ x 2 + y 2 ​ − 1∣ d σ = 2 D 1 ​ + D 2 ​ + D 3 ​ ∬ ​ ∣ x 2 + y 2 ​ − 1∣ d σ = 2 D 1 ​ ∬ ​ 1 − x 2 + y 2 ​ d σ + 2 D 2 ​ ∬ ​ 1 − x 2 + y 2 ​ d σ + 2 D 3 ​ ∬ ​ x 2 + y 2 ​ − 1 d σ 分别采用极坐标计算： D 1 ​ ∬ ​ 1 − x 2 + y 2 ​ d σ = ∫ 0 3 π ​ ​ d θ ∫ 0 1 ​ r ( 1 − r ) d r = 3 π ​ ⋅ 6 1 ​ = 18 π ​ D 2 ​ ∬ ​ ( 1 − x 2 + y 2 ​ ) d σ ​ = ∫ 3 π ​ 2 π ​ ​ d θ ∫ 0 2 c o s θ ​ r ( 1 − r ) d r = ∫ 3 π ​ 2 π ​ ​ ( 2 cos 2 θ − 3 8 ​ cos 3 θ ) d θ = 6 π ​ − 9 16 ​ + 4 3 ​ 3 ​ ​ D 3 ​ ∬ ​ ( x 2 + y 2 ​ − 1 ) d σ ​ = ∫ 0 3 π ​ ​ d θ ∫ 1 2 c o s θ ​ r ( r − 1 ) d r = ∫ 0 3 π ​ ​ ( 3 8 ​ cos 3 θ − 2 cos 2 θ + 6 1 ​ ) d θ = 4 3 ​ 3 ​ − 3 π ​ + 18 π ​ ​ 综上，最终结果为： D ∬ ​ ∣ x 2 + y 2 ​ − 1∣ d σ = 2 ( 18 π ​ ) + 2 ( 6 π ​ − 9 16 ​ + 4 3 ​ 3 ​ ) + 2 ( 4 3 ​ 3 ​ − 3 π ​ + 18 π ​ ) = − 9 π + 32 ​ + 3 3 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分 12 分)\n\n设函数\nf(x)\n在\n[−a,a]\n上具有 2 阶连续导数，证明：\n\n（Ⅰ）若\nf(0)=0\n，则存在\nξ∈(−a,a)\n使得\n\nf′′(ξ)=a21[f(a)+f(−a)];\n\n（Ⅱ）若\nf(x)\n在\n(−a,a)\n内取得极值，则存在\nη∈(−a,a)\n，使得\n\nf′′(η)≥a21f(a)−f(−a).",
    referenceAnswer: "【答案】 见解析 【解析】 （1）证明： 由泰勒展开式可得： f ( x ) = f ( 0 ) + f ′ ( 0 ) x + 2 ! f ′′ ( η ) ​ x 2 = f ′ ( 0 ) x + 2 ! f ′′ ( η ) ​ x 2 其中 η 介于 0 与 x 之间。 分别取 x = a 和 x = − a ，得到： f ( a ) = f ′ ( 0 ) a + 2 ! f ′′ ( η 1 ​ ) ​ a 2 , 0 < η 1 ​ < a f ( − a ) = f ′ ( 0 ) ( − a ) + 2 ! f ′′ ( η 2 ​ ) ​ a 2 , − a < η 2 ​ < 0 将①和②相加： f ( a ) + f ( − a ) = 2 a 2 ​ [ f ′′ ( η 1 ​ ) + f ′′ ( η 2 ​ ) ] 由于 f ′′ ( x ) 在 [ η 2 ​ , η 1 ​ ] 上连续，设其最大值为 M ，最小值为 m ，则： m ≤ f ′′ ( η 1 ​ ) ≤ M , m ≤ f ′′ ( η 2 ​ ) ≤ M 从而： m ≤ 2 f ′′ ( η 1 ​ ) + f ′′ ( η 2 ​ ) ​ ≤ M 由介值定理，存在 ξ ∈ [ η 2 ​ , η 1 ​ ] ⊂ ( − a , a ) ，使得： 2 f ′′ ( η 1 ​ ) + f ′′ ( η 2 ​ ) ​ = f ′′ ( ξ ) 代入③得： f ( a ) + f ( − a ) = a 2 f ′′ ( ξ ) 即： f ′′ ( ξ ) = a 2 f ( a ) + f ( − a ) ​ （2）证明： 设 f ( x ) 在 x = x 0 ​ ∈ ( − a , a ) 处取得极值，且 f ( x ) 在 x = x 0 ​ 可导，则 f ′ ( x 0 ​ ) = 0 。 由泰勒展开式： f ( x ) = f ( x 0 ​ ) + f ′ ( x 0 ​ ) ( x − x 0 ​ ) + 2 ! f ′′ ( γ ) ​ ( x − x 0 ​ ) 2 = f ( x 0 ​ ) + 2 ! f ′′ ( γ ) ​ ( x − x 0 ​ ) 2 其中 γ 介于 0 与 x 之间。 分别取 x = − a 和 x = a ，得到： f ( − a ) = f ( x 0 ​ ) + 2 ! f ′′ ( γ 1 ​ ) ​ ( − a − x 0 ​ ) 2 , − a < γ 1 ​ < 0 f ( a ) = f ( x 0 ​ ) + 2 ! f ′′ ( γ 2 ​ ) ​ ( a − x 0 ​ ) 2 , 0 < γ 2 ​ < a 因此： ∣ f ( a ) − f ( − a ) ∣ = ​ 2 1 ​ ( a − x 0 ​ ) 2 f ′′ ( γ 2 ​ ) − 2 1 ​ ( a + x 0 ​ ) 2 f ′′ ( γ 1 ​ ) ​ ≤ 2 1 ​ ∣ ( a − x 0 ​ ) 2 f ′′ ( γ 2 ​ ) ∣ + 2 1 ​ ∣ ( a + x 0 ​ ) 2 f ′′ ( γ 1 ​ ) ∣ 设 M = max { ∣ f ′′ ( γ 1 ​ ) ∣ , ∣ f ′′ ( γ 2 ​ ) ∣ } ，则： ∣ f ( a ) − f ( − a ) ∣ ≤ 2 1 ​ M ( a + x 0 ​ ) 2 + 2 1 ​ M ( a − x 0 ​ ) 2 = M ( a 2 + x 0 2 ​ ) 由于 x 0 ​ ∈ ( − a , a ) ，有： ∣ f ( a ) − f ( − a ) ∣ ≤ M ( a 2 + x 0 2 ​ ) ≤ 2 M a 2 即： M ≥ 2 a 2 1 ​ ∣ f ( a ) − f ( − a ) ∣ 因此，存在 η = γ 1 ​ 或 η = γ 2 ​ ∈ ( − a , a ) ，使得： ∣ f ′′ ( η ) ∣ ≥ 2 a 2 1 ​ ∣ f ( a ) − f ( − a ) ∣",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设矩阵\nA\n对向量\nx1x2x3\n有\n\nAx1x2x3=x1+x2+x32x1−x2+x3x2−x3\n\n(I) 求\nA\n；\n\n(II) 求可逆矩阵\nP\n与对角矩阵\nΛ\n，使得\nP−1AP=Λ\n。",
    referenceAnswer: "【答案】 (I) A = ​ 1 2 0 ​ 1 − 1 1 ​ 1 1 − 1 ​ ​ (II) 可逆矩阵 P = ​ 0 − 1 1 ​ 4 3 1 ​ 1 0 − 2 ​ ​ ，对角矩阵 Λ = ​ − 2 0 0 ​ 0 2 0 ​ 0 0 − 1 ​ ​ 【解析】 (I) 由 A ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = ​ 1 2 0 ​ 1 − 1 1 ​ 1 1 − 1 ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ ，故矩阵 A = ​ 1 2 0 ​ 1 − 1 1 ​ 1 1 − 1 ​ ​ 。 (II) 特征多项式为： ∣ λ E − A ∣ = ​ λ − 1 − 2 0 ​ − 1 λ + 1 − 1 ​ − 1 − 1 λ + 1 ​ ​ 展开计算： = ( λ − 1 ) ⋅ ​ λ + 1 − 1 ​ − 1 λ + 1 ​ ​ + 2 ⋅ ​ − 1 − 1 ​ − 1 λ + 1 ​ ​ 进一步化简： = ( λ − 1 ) ( λ 2 + 2 λ ) − 2 ( λ + 2 ) = ( λ + 2 ) ( λ − 2 ) ( λ + 1 ) = 0 所以 A 的特征值为 λ 1 ​ = − 2 ， λ 2 ​ = 2 ， λ 3 ​ = − 1 。 对于 λ 1 ​ = − 2 ： λ 1 ​ E − A = ​ − 3 − 2 0 ​ − 1 − 1 − 1 ​ − 1 − 1 − 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 1 0 ​ ​ 对应的特征向量 α 1 ​ = ( 0 , − 1 , 1 ) T 。 对于 λ 2 ​ = 2 ： λ 2 ​ E − A = ​ 1 − 2 0 ​ − 1 3 − 1 ​ − 1 − 1 3 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ − 4 − 3 0 ​ ​ 对应的特征向量 α 2 ​ = ( 4 , 3 , 1 ) T 。 对于 λ 3 ​ = − 1 ： λ 3 ​ E − A = ​ − 2 − 2 0 ​ − 1 0 − 1 ​ − 1 − 1 0 ​ ​ → ​ 2 0 0 ​ 0 1 0 ​ 1 0 0 ​ ​ 对应的特征向量 α 3 ​ = ( 1 , 0 , − 2 ) T 。 令 P = ( α 1 ​ , α 2 ​ , α 3 ​ ) = ​ 0 − 1 1 ​ 4 3 1 ​ 1 0 − 2 ​ ​ ，则 P − 1 A P = ​ − 2 0 0 ​ 0 2 0 ​ 0 0 − 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分12分)\n\n设随机变量\nX\n的概率密度为\n\nf(x)=(1+ex)2ex,−∞x+∞\n\n令\nY=eX\n。\n\n（Ⅰ）求\nX\n的分布函数\nF(x)\n；\n\n（Ⅱ）求\nY\n的概率密度\nfY(y)\n；\n\n（Ⅲ）\nY\n的期望是否存在？",
    referenceAnswer: "【答案】 （Ⅰ） F ( x ) = 1 + e x e x ​ , x ∈ R （Ⅱ） f Y ​ ( y ) = { ( 1 + y ) 2 1 ​ , 0 , ​ y > 0 其他 ​ （Ⅲ）不存在 【解析】 （I） F ( x ) = ∫ − ∞ x ​ ( 1 + e x ) 2 e x ​ d x = − 1 + e x 1 ​ ​ − ∞ x ​ = 1 + e x e x ​ , x ∈ R （II） 【法1】分布函数法 F Y ​ ( y ) = P { Y ≤ y } = P { e X ≤ y } 当 y < 0 时， F Y ​ ( y ) = 0 当 y ≥ 0 时， F Y ​ ( y ) = P { X ≤ ln y } = F ( ln y ) = 1 + y y ​ 因此， Y 的概率密度为 f Y ​ ( y ) = { ( 1 + y ) 2 1 ​ , 0 , ​ y > 0 其他 ​ 【法2】公式法 因为 y = e x 在 ( − ∞ , + ∞ ) 上单调且处处可导，当 x ∈ ( − ∞ , + ∞ ) 时， y > 0 ，此时 x = ln y 。 所以 Y 的概率密度为 f Y ​ ( y ) = { f ( ln y ) ⋅ ( ln y ) ′ , 0 , ​ y > 0 其他 ​ = { ( 1 + e l n y ) 2 e l n y ​ ⋅ y 1 ​ , 0 , ​ y > 0 其他 ​ = { ( 1 + y ) 2 1 ​ , 0 , ​ y > 0 其他 ​ （Ⅲ） E Y = ∫ 0 + ∞ ​ ( 1 + y ) 2 y ​ d y = ( ln ( 1 + y ) + 1 + y 1 ​ ) ​ 0 + ∞ ​ = ∞ 因此， E Y 不存在。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2023_math3 = {
  id: P, year: Y,
  title: '2023 年全国硕士研究生招生考试 数学（三）',
  short: '2023 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2023_math3.length,
  qids: questions2023_math3.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
