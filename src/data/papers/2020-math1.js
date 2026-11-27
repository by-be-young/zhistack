const P = 'paper-2020-math1'
const Y = 2020
const SRC = '#/notes/study_methods-math-math1-2020'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2020-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2020 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2020_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当\nx→0+\n时,下列无穷小量中最高阶的是( ).",
    options: [{ key: "A", text: "∫ 0 x ​ ( e t 2 − 1 ) d t" }, { key: "B", text: "∫ 0 x ​ ln ( 1 + t 3 ​ ) d t" }, { key: "C", text: "∫ 0 s i n x ​ sin t 2 d t" }, { key: "D", text: "∫ 0 1 − c o s x ​ sin t 3 ​ d t" }],
    answer: ["D"],
    explain: "正确答案： D 【解】 当 x → 0 + 时, ∫ 0 x ​ ( e t 2 − 1 ) d t ∼ ∫ 0 x ​ t 2 d t = 3 1 ​ x 3 ; ∫ 0 x ​ ln ( 1 + t 3 ​ ) d t ∼ ∫ 0 x ​ t 2 3 ​ d t = 5 2 ​ x 2 5 ​ ; ∫ 0 s i n x ​ sin t 2 d t ∼ ∫ 0 x ​ t 2 d t = 3 1 ​ x 3 ; ∫ 0 1 − c o s x ​ sin t 3 ​ d t ∼ ∫ 0 2 1 ​ x 2 ​ t 2 3 ​ d t = 20 2 ​ ​ x 5 , 应选(D)."
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n在区间\n(−1,1)\n内有定义,且\nlimx→0f(x)=0\n,则",
    options: [{ key: "A", text: "当 lim x → 0 ​ ∣ x ∣ ​ f ( x ) ​ = 0 时， f ( x ) 在 x = 0 处可导" }, { key: "B", text: "当 lim x → 0 ​ x 2 f ( x ) ​ = 0 时， f ( x ) 在 x = 0 处可导" }, { key: "C", text: "当 f ( x ) 在 x = 0 处可导时， lim x → 0 ​ ∣ x ∣ ​ f ( x ) ​ = 0" }, { key: "D", text: "当 f ( x ) 在 x = 0 处可导时， lim x → 0 ​ x 2 f ( x ) ​ = 0" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】当 f ( x ) 在 x = 0 处可导,则 f ( x ) 在 x = 0 处连续, f ( 0 ) = lim x → 0 ​ f ( x ) = 0 , f ′ ( 0 ) = x → 0 lim ​ x − 0 f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x f ( x ) ​ , 可得 x → 0 lim ​ ∣ x ∣ ​ f ( x ) ​ = x → 0 lim ​ x f ( x ) ​ ⋅ ∣ x ∣ ​ x ​ x → 0 + lim ​ x f ( x ) ​ ⋅ ∣ x ∣ ​ x ​ = x → 0 + lim ​ x f ( x ) ​ ⋅ x ​ x ​ = x → 0 + lim ​ x f ( x ) ​ ⋅ x ​ = f ′ ( 0 ) ⋅ 0 = 0 , x → 0 − lim ​ x f ( x ) ​ ⋅ ∣ x ∣ ​ x ​ = x → 0 − lim ​ x f ( x ) ​ ⋅ − x ​ x ​ = x → 0 − lim ​ x f ( x ) ​ ⋅ ( − − x ​ ) = f ′ ( 0 ) ⋅ 0 = 0 , 即 lim x → 0 ​ ∣ x ∣ ​ f ( x ) ​ = 0 ,故选(C)"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \nf(x)\n 在点 \n(0,0)\n 处可微，\nf(0,0)=0\n，\nn=(∂x∂f,∂y∂f,−1)(0,0)\n 且非零向量 \nd\n 与 \nn\n 垂直，则",
    options: [{ key: "A", text: "( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ ∣ n ⋅ ( x , y , f ( x , y )) ∣ ​ = 0 存在" }, { key: "B", text: "( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ ∣ n × ( x , y , f ( x , y )) ∣ ​ = 0 存在" }, { key: "C", text: "( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ ∣ d ⋅ ( x , y , f ( x , y )) ∣ ​ = 0 存在" }, { key: "D", text: "( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ ∣ d × ( x , y , f ( x , y )) ∣ ​ = 0 存在" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】因为 f ( x , y ) 在 ( 0 , 0 ) 处可微， f ( 0 , 0 ) = 0 ，所以 x → 0 y → 0 ​ lim ​ x 2 + y 2 ​ f ( x , y ) − f ( 0 , 0 ) − f x ′ ​ ( 0 , 0 ) ⋅ x − f y ′ ​ ( 0 , 0 ) ⋅ y ​ = 0 即 x → 0 y → 0 ​ lim ​ x 2 + y 2 ​ f ( x , y ) − f x ′ ​ ( 0 , 0 ) ⋅ x − f y ′ ​ ( 0 , 0 ) ⋅ y ​ = 0 因为 n ⋅ ( x , y , f ( x , y )) = f x ′ ​ ( 0 , 0 ) x + f y ′ ​ ( 0 , 0 ) y − f ( x , y ) ， 所以 ( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ ∣ n ⋅ ( x , y , f ( x , y )) ∣ ​ = 0 存在，故选 ( A ) 。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nR\n为幂级数\n∑n=1∞anxn\n的收敛半径。\nr\n是实数,则",
    options: [{ key: "A", text: "∑ n = 1 ∞ ​ a 2 n ​ r 2 n 发散时, ∣ r ∣ ≥ R" }, { key: "B", text: "∑ n = 1 ∞ ​ a 2 n ​ r 2 n 收敛时, ∣ r ∣ ≤ R" }, { key: "C", text: "∣ r ∣ ≥ R 时, ∑ n = 1 ∞ ​ a 2 n ​ r 2 n 发散" }, { key: "D", text: "∣ r ∣ ≤ R 时, ∑ n = 1 ∞ ​ a 2 n ​ r 2 n 收敛" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】由题知当 ∣ r ∣ < R 时，幂级数 ∑ n = 1 ∞ ​ a n ​ x n 收敛，所以当 ∣ r ∣ < R 时， ∑ n = 1 ∞ ​ a n ​ r 2 n 收敛，因其逆否命题也成立，所以若当 ∑ n = 1 ∞ ​ a n ​ r 2 n 发散时， ∣ r ∣ ≥ R ，故选 (A) 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若矩阵\nA\n经初等列变换化成\nB\n,则",
    options: [{ key: "A", text: "存在矩阵 P ,使得 P A = B" }, { key: "B", text: "存在矩阵 P ,使得 BP = A" }, { key: "C", text: "存在矩阵 P ,使得 PB = A" }, { key: "D", text: "方程组 A x = 0 与 B x = 0 同解" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 A 经初等列变换化成 B ，所以存在可逆矩阵 P 1 ​ 使得 A P 1 ​ = B ，所以 A = B P 1 − 1 ​ 。令 P = P 1 − 1 ​ ，所以 A = BP 。故选(B)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知直线\nL1\n:\na1x−a2=b1y−b2=c1z−c2\n与直线\nL2\n:\na2x−a3=b2y−b3=c2z−c3\n相交于一点，向量\nαi=(ai,bi,ci)T\n,\ni=1,2,3\n,则",
    options: [{ key: "A", text: "α 1 ​ 可由 α 2 ​ , α 3 ​ 线性表示" }, { key: "B", text: "α 2 ​ 可由 α 1 ​ , α 3 ​ 线性表示" }, { key: "C", text: "α 3 ​ 可由 α 1 ​ , α 2 ​ 线性表示" }, { key: "D", text: "α 1 ​ , α 2 ​ , α 3 ​ 线性无关" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】令 L 1 ​ 的方程 a 1 ​ x − a 2 ​ ​ = b 1 ​ y − b 2 ​ ​ = c 1 ​ z − c 2 ​ ​ = t ,即有 ​ x y z ​ ​ = ​ a 2 ​ b 2 ​ c 2 ​ ​ ​ + t ​ a 1 ​ b 1 ​ c 1 ​ ​ ​ = α 2 ​ + t α 1 ​ L 2 ​ 方程为 ​ x y z ​ ​ = ​ a 3 ​ b 3 ​ c 3 ​ ​ ​ + t ​ a 2 ​ b 2 ​ c 2 ​ ​ ​ = α 3 ​ + t α 2 ​ ，由直线 L 1 ​ 与 L 2 ​ 相交得存在 t 使 α 2 ​ + t α 1 ​ = α 3 ​ + t α 2 ​ ，即 α 3 ​ = t α 1 ​ + ( 1 − t ) α 2 ​ ,故 α 3 ​ 可由 α 1 ​ , α 2 ​ 线性表示,故应选(C)."
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n、\nB\n、\nC\n为三个随机事件，且\nP(A)=P(B)=P(C)=41\n，\nP(AB)=0\n，\nP(AC)=P(BC)=121\n，则\nA\n、\nB\n、\nC\n中恰有一个事件发生的概率为",
    options: [{ key: "A", text: "4 3 ​" }, { key: "B", text: "3 2 ​" }, { key: "C", text: "2 1 ​" }, { key: "D", text: "12 5 ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 P ( A BC ) = P ( A B ∪ C ) = P ( A ) − P [ A ( B ∪ C )] = P ( A ) − P ( A B + A C ) = P ( A ) + P ( A B ) − P ( A C ) + P ( A BC ) = 4 1 ​ − 0 − 12 1 ​ + 0 = 6 1 ​ ， P ( C B A ) = P ( C B ∪ A ) = P ( C ) − P [ C ∪ ( B ∪ A )] = P ( C ) + P ( CB ) − P ( C A ) + P ( A BC ) = 4 1 ​ − 12 1 ​ − 12 1 ​ + 0 = 12 1 ​ ， P ( A BC + A BC + A B C ) = P ( A BC ) + P ( A BC ) + P ( A B C ) = 6 1 ​ + 6 1 ​ + 12 1 ​ = 12 5 ​ 。 故选 (D)。"
  }),
  base(8, 'k-math-001', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1,X2,⋯,X100\n为来自总体\nX\n的简单随机样本,其中\nP(X=0)=P(X=1)=21\n,\nΦ(x)\n表示标准正态分布函数,则用中心极限定理可得\nP(∑i=1100Xi≤55)\n的近似值为",
    options: [{ key: "A", text: "1 − Φ ( 1 )" }, { key: "B", text: "Φ ( 1 )" }, { key: "C", text: "1 − Φ ( 2 )" }, { key: "D", text: "Φ ( 2 )" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】由题意 EX = 2 1 ​ ， D X = 4 1 ​ ， E ( ∑ i = 1 100 ​ X i ​ ) = 100 EX = 50 ， D ( ∑ i = 1 100 ​ X i ​ ) = 100 D X = 25 。由中心极限定理 ∑ i = 1 100 ​ X i ​ ∼ N ( 50 , 25 ) ，所以 P { ∑ i = 1 100 ​ X i ​ ≤ 55 } = P { 5 ∑ i = 1 100 ​ X i ​ − 55 ​ ≤ 5 55 − 50 ​ } = Φ ( 1 ) 。故选 ( B ) 。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\nx→0lim[ex−11−ln(1+x)1]=\n____.",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 ​ x → 0 lim ​ [ e x − 1 1 ​ − ln ( 1 + x ) 1 ​ ] = x → 0 lim ​ ( e x − 1 ) ln ( 1 + x ) ln ( 1 + x ) − e x + 1 ​ = x → 0 lim ​ x 2 ln ( 1 + x ) − e x + 1 ​ = x → 0 lim ​ 2 x 1 + x 1 ​ − e x ​ = − 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若\n{x=t2+1,y=ln(t+t2+1),\n则\ndx2d2yt=1=",
    answerText: "】 − 2 ​ 【",
    referenceAnswer: "【答案】 − 2 ​ 【解析】 由参数方程求导公式，一阶导数为： d x d y ​ = d t d x ​ d t d y ​ ​ = t 2 + 1 ​ t ​ t + t 2 + 1 ​ 1 ​ ( 1 + t 2 + 1 ​ t ​ ) ​ = t 1 ​ . 二阶导数为： d x 2 d 2 y ​ = d x d ( d x d y ​ ) ​ = d t d x ​ d t d ( d x d y ​ ) ​ ​ = t 2 + 1 ​ t ​ − t 2 1 ​ ​ = − t 3 t 2 + 1 ​ ​ . 代入 t = 1 ，得： d x 2 d 2 y ​ ​ t = 1 ​ = − 2 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若函数\nf(x)\n满足\nf′′(x)+af′(x)+f(x)=0(a>0)\n，且\nf(0)=m\n，\nf′(0)=n\n，则\n∫0+∞f(x)dx=",
    answerText: "】 n + am 【",
    referenceAnswer: "【答案】 n + am 【解析】 特征方程为 λ 2 + aλ + 1 = 0 ，特征根为 λ 1 ​ ， λ 2 ​ ，则 λ 1 ​ + λ 2 ​ = − a ， λ 1 ​ ⋅ λ 2 ​ = 1 ，特征根 λ 1 ​ < 0 ， λ 2 ​ < 0 。 ∫ 0 + ∞ ​ f ( x ) d x ​ = − ∫ 0 + ∞ ​ [ f ′′ ( x ) + a f ′ ( x ) ] d x = − [ f ′ ( x ) + a f ( x ) ] 0 + ∞ ​ = n + am ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(x,y)=∫0xyext2 dt\n，则\n∂x∂y∂2f(1,1)=",
    answerText: "】 4e 【",
    referenceAnswer: "【答案】 4e 【解析】 ∂ y ∂ f ​ ∂ x ∂ y ∂ 2 f ​ ∂ x ∂ y ∂ 2 f ​ ​ ( 1 , 1 ) ​ ​ = e x ( x y ) 2 ⋅ x = x e x 3 y 2 , = ∂ x ∂ ( ∂ y ∂ f ​ ) ​ = e x 3 y 2 + 3 x 3 y 2 e x 3 y 2 , = e + 3 e = 4 e . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）行列式\na0−110a1−1−11a01−10a=",
    answerText: "】 a 4 − 4 a 2 【",
    referenceAnswer: "【答案】 a 4 − 4 a 2 【解析】 ​ ​ a 0 − 1 1 ​ 0 a 1 − 1 ​ − 1 1 a 0 ​ 1 − 1 0 a ​ ​ = ​ a 0 − 1 0 ​ 0 a 1 0 ​ − 1 1 a a ​ 1 − 1 0 a ​ ​ = ​ 0 0 − 1 1 ​ a a 1 0 ​ − 1 + a 2 1 a a ​ 1 − 1 0 a ​ ​ = − ​ a a 0 ​ − 1 + a 2 1 a ​ 1 − 1 a ​ ​ = − ​ a a 0 ​ a 2 − 2 2 0 ​ 1 − 1 a ​ ​ = a 4 − 4 a 2 . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nX\n服从区间\n(−2π,2π)\n上的均匀分布，\nY=sinX\n，则\nCov(X,Y)=",
    answerText: "】 π 2 ​ 【",
    referenceAnswer: "【答案】 π 2 ​ 【解析】 概率密度函数为： f ( x ) = { π 1 ​ , 0 , ​ − 2 π ​ < x < 2 π ​ , 其他 . ​ 协方差的计算公式为： cov ( X , Y ) = E [ X Y ] − E [ X ] E [ Y ] 代入 Y = \\sin X，得： cov ( X , Y ) = E [ X sin X ] − E [ X ] E [ sin X ] 计算各项期望： E [ X sin X ] = ∫ − 2 π ​ 2 π ​ ​ x sin x ⋅ π 1 ​ d x E [ X ] = ∫ − 2 π ​ 2 π ​ ​ π 1 ​ x d x E [ sin X ] = ∫ − 2 π ​ 2 π ​ ​ π 1 ​ sin x d x ​ 由于 x 和 \\sin x 在对称区间上分别为奇函数和偶函数，有： E [ X ] = 0 , E [ sin X ] = 0 因此： cov ( X , Y ) = E [ X sin X ] = π 1 ​ ∫ − 2 π ​ 2 π ​ ​ x sin x d x 利用奇偶性化简： ∫ − 2 π ​ 2 π ​ ​ x sin x d x = 2 ∫ 0 2 π ​ ​ x sin x d x 所以： cov ( X , Y ) = π 2 ​ ∫ 0 2 π ​ ​ x sin x d x 使用分部积分法，令： u = x , d v = sin x d x 则： d u = d x , v = − cos x 于是： ∫ 0 2 π ​ ​ x sin x d x = − x cos x ∣ 0 2 π ​ ​ + ∫ 0 2 π ​ ​ cos x d x 计算得： − x cos x ∣ 0 2 π ​ ​ = 0 ∫ 0 2 π ​ ​ cos x d x = sin x ∣ 0 2 π ​ ​ = 1 因此： ∫ 0 2 π ​ ​ x sin x d x = 1 最终协方差为： cov ( X , Y ) = π 2 ​ ⋅ 1 = π 2 ​ π 2 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求函数\nf(x,y)=x3+8y3−xy\n的极值。",
    referenceAnswer: "【答案】 极小值为 − 216 1 ​ 【解析】 首先，求一阶偏导数： ∂ x ∂ f ​ = 3 x 2 − y , ∂ y ∂ f ​ = 24 y 2 − x . 令偏导数为零，解方程组： { ∂ x ∂ f ​ = 0 ∂ y ∂ f ​ = 0 ​ 得到： { x = 6 1 ​ y = 12 1 ​ ​ 接着，求二阶偏导数： ∂ x 2 ∂ 2 f ​ = 6 x , ∂ x ∂ y ∂ 2 f ​ = − 1 , ∂ y 2 ∂ 2 f ​ = 48 y . 当 x = 0 ， y = 0 时，计算： A = 0 , B = − 1 , C = 0 , A C − B 2 = − 1 < 0 , 因此该点不是极值点。 当 x = 6 1 ​ ， y = 12 1 ​ 时，计算： A = 1 , B = − 1 , C = 4 , A C − B 2 = 3 > 0 , A = 1 > 0 , 因此点 ( 6 1 ​ , 12 1 ​ ) 是极小值点。 极小值为： f ( 6 1 ​ , 12 1 ​ ) = ( 6 1 ​ ) 3 + 8 ( 12 1 ​ ) 3 − 6 1 ​ × 12 1 ​ = − 216 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）计算曲线积分\n\nI=∫L4x2+y24x−ydx+4x2+y2x+ydy,\n\n其中\nL\n是\nx2+y2=2\n，方向为逆时针方向。",
    referenceAnswer: "【答案】 π 【解析】 设 P = 4 x 2 + y 2 4 x − y ​ ， Q = 4 x 2 + y 2 x + y ​ ，则 ∂ x ∂ Q ​ = ∂ y ∂ P ​ = ( 4 x 2 + y 2 ) 2 − 4 x 2 + y 2 − 8 x y ​ . 取路径 L ε ​ : 4 x 2 + y 2 = ε 2 ，方向为顺时针方向，则 ∫ L ​ 4 x 2 + y 2 4 x − y ​ d x + 4 x 2 + y 2 x + y ​ d y ​ = ∫ L + L ε ​ ​ 4 x 2 + y 2 4 x − y ​ d x + 4 x 2 + y 2 x + y ​ d y − ∫ L ε ​ ​ 4 x 2 + y 2 4 x − y ​ d x + 4 x 2 + y 2 x + y ​ d y . ​ 进一步计算得 ​ = ∬ D ​ ( ∂ x ∂ Q ​ − ∂ y ∂ P ​ ) d x d y + ε 2 1 ​ ∫ L ε ​ ​ ( 4 x − y ) d x + ( x + y ) d y = 0 + ε 2 1 ​ ⋅ 2 ⋅ 2 π ε 2 ​ = π . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）设数列\n{an}\n满足\na1=1\n，\n(n+1)an+1=(n+21)an\n，证明：当\n∣x∣1\n时，幂级数\n∑n=1∞anxn\n收敛，并求其和函数。",
    referenceAnswer: "【答案】 S ( x ) = 1 − x ​ 2 ​ − 2 【解析】 R = n → ∞ lim ​ ​ a n + 1 ​ a n ​ ​ ​ = n → ∞ lim ​ ​ n + 2 n + 1 ​ ​ = 1 ，故 ∣ x ∣ < R = 1 时， n = 1 ∑ ∞ ​ a n ​ x n 收敛。 令 S ( x ) = n = 1 ∑ ∞ ​ a n ​ x n ， 则 S ′ ( x ) = n = 1 ∑ ∞ ​ n a n ​ x n − 1 = n = 0 ∑ ∞ ​ ( n + 1 ) a n + 1 ​ x n = a 1 ​ + n = 1 ∑ ∞ ​ ( n + 2 1 ​ ) a n ​ x n = 1 + n = 1 ∑ ∞ ​ n a n ​ x n + 2 1 ​ n = 1 ∑ ∞ ​ a n ​ x n = 1 + x S ′ ( x ) + 2 1 ​ S ( x ) ， 则 S ′ ( x ) − 2 ( 1 − x ) 1 ​ S ( x ) = 1 − x 1 ​ ，故 S ( x ) = e ∫ 2 ( 1 − x ) 1 ​ d x [ ∫ e ∫ 2 ( 1 − x ) − 1 ​ d x 1 − x 1 ​ d x + C ] = 1 − x ​ C ​ − 2 ， 由 S ( 0 ) = C − 2 = 0 ，故 C = 2 ，则 S ( x ) = 1 − x ​ 2 ​ − 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设\n∑\n为曲面\nz=x2+y2 (1≤x2+y2≤4)\n的下侧，\nf(x)\n是连续函数，计算\n\nI=∬∑[xf(xy)+2x−y]dydz+[yf(xy)+2y+x]dzdx+[zf(xy)+z]dxdy.",
    referenceAnswer: "【答案】 3 14 ​ π 【解析】 由题意， F ( x , y , z ) = z − x 2 + y 2 ​ 则 F x ′ ​ = − x 2 + y 2 ​ x ​ , F y ′ ​ = − x 2 + y 2 ​ y ​ , F z ′ ​ = 1. ​ 因此 I ​ = ∬ Σ ​ ( [ x f ( x y ) + 2 x − y ] F z ′ ​ F x ′ ​ ​ + [ y f ( x y ) + 2 y + x ] F z ′ ​ F y ′ ​ ​ + z f ( x y ) + z ) d x d y = ∬ Σ ​ ( [ x f ( x y ) + 2 x − y ] ( − x 2 + y 2 ​ x ​ ) + [ y f ( x y ) + 2 y + x ] ( − x 2 + y 2 ​ y ​ ) + z f ( x y ) + z ) d x d y = − ∬ Σ ​ x 2 + y 2 ​ d x d y = ∬ D x y ​ ​ x 2 + y 2 ​ d x d y = ∫ 0 2 π ​ d θ ∫ 1 2 ​ r 2 d r = 3 14 ​ π ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）设函数\nf(x)\n在区间\n[0,2]\n上具有连续导数，已知\nf(0)=f(2)=0\n，\nM=maxx∈[0,2]∣f(x)∣\n，证明：\n\n(I) 存在\nξ∈(0,2)\n，使得\n∣f′(ξ)∣≥M\n；\n\n(II) 若对任意的\nx∈(0,2)\n，\n∣f′(x)∣≤M\n，则\nM=0\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 设 x = x 0 ​ 时 ∣ f ( x 0 ​ ) ∣ = M ，由拉格朗日定理得： ∃ , ξ 1 ​ ∈ ( 0 , x 0 ​ ) ∣ f ′ ( ξ 1 ​ ) ∣ = ​ x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ ​ = x 0 ​ ∣ f ( x 0 ​ ) ∣ ​ = x 0 ​ M ​ ; ∃ , ξ 2 ​ ∈ ( x 0 ​ , 2 ) ∣ f ′ ( ξ 2 ​ ) ∣ = ​ x 0 ​ − 2 f ( x 0 ​ ) − f ( 2 ) ​ ​ = 2 − x 0 ​ ∣ f ( x 0 ​ ) ∣ ​ = 2 − x 0 ​ M ​ . 若 x 0 ​ ∈ ( 0 , 1 ] ，取 ξ = ξ 1 ​ ，有 ∣ f ′ ( ξ ) ∣ = x 0 ​ M ​ ≥ M ; 若 x 0 ​ ∈ ( 1 , 2 ) ，取 ξ = ξ 2 ​ ，有 ∣ f ′ ( ξ ) ∣ = 2 − x 0 ​ M ​ ≥ M . (II) M ​ = ∣ f ( x 0 ​ ) ∣ = ∣ f ( x 0 ​ ) − f ( 0 ) ∣ = ​ ∫ 0 x 0 ​ ​ f ′ ( x ) d x ​ ≤ ∫ 0 x 0 ​ ​ ∣ f ′ ( x ) ∣ d x ≤ ∫ 0 x 0 ​ ​ M d x = M x 0 ​ . ​ M ​ = ∣ f ( x 0 ​ ) ∣ = ∣ f ( 2 ) − f ( x 0 ​ ) ∣ = ​ ∫ x 0 ​ 2 ​ f ′ ( x ) d x ​ ≤ ∫ x 0 ​ 2 ​ ∣ f ′ ( x ) ∣ d x ≤ ∫ x 0 ​ 2 ​ M d x = M ( 2 − x 0 ​ ) . ​ 故 { M ( 1 − x 0 ​ ) ≤ 0 , M ( 1 − x 0 ​ ) ≥ 0 ​ 同时成立。 若 x 0 ​  = 1 ，显然 M = 0 ；\n若 x 0 ​ = 1 ，则 M ≤ ∫ 0 1 ​ ∣ f ′ ( x ) ∣ , d x ≤ M , M ≤ ∫ 1 2 ​ ∣ f ′ ( x ) ∣ , d x ≤ M . 当且仅当区间 ( 0 , 1 ) 和 ( 1 , 2 ) 上 ∣ f ′ ( x ) ∣ ≡ M 。\n若 M  = 0 ，则 f ′ ( x ) ≡ ± M 与 f ( 0 ) = f ( 2 ) = 0 矛盾，\n或 f ′ ( x ) 在 x = 1 处不可导，与已知矛盾。 故 M = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设二次型\nf(x1,x2)=x12−4x1x2+4x22\n经正交变换\n(x1x2)=Q(y1y2)\n化为二次型\ng(y1,y2)=ay12+4y1y2+by22\n，其中\na≥b\n。\n\n(I) 求\na\n，\nb\n的值；\n\n(II) 求正交矩阵\nQ\n。",
    referenceAnswer: "【答案】 (I) a = 4 , b = 1 (II) Q = 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ ) 【解析】 (I) 记 A = ( 1 − 2 ​ − 2 4 ​ ) ， B = ( a 2 ​ 2 b ​ ) ，则 Q T A Q = B ，且 A 与 B 相似，具有相同特征值。 计算特征多项式 ∣ λ E − A ∣ = λ 2 − 5 λ = 0 ，解得特征值 λ 1 ​ = 0 ， λ 2 ​ = 5 。 同理， ∣ λ E − B ∣ = λ 2 − ( a + b ) λ + ab − 4 = 0 。由于特征值相同，比较系数得： a + b = 5 , ab = 4. 又 a ≥ b ，解得 a = 4 ， b = 1 。 (II) 当 λ 1 ​ = 0 时，求解 ( 0 E − A ) x = 0 ，得基础解系 α 1 ​ = ( 2 , 1 ) T 。 当 λ 2 ​ = 5 时，求解 ( 5 E − A ) x = 0 ，得基础解系 α 2 ​ = ( 1 , − 2 ) T 。 对于矩阵 B ，当 λ 1 ​ = 0 时， ( 0 E − B ) x = 0 的基础解系为 β 1 ​ = ( 1 , − 2 ) T 。 当 λ 2 ​ = 5 时， ( 5 E − B ) x = 0 的基础解系为 β 2 ​ = ( 2 , 1 ) T 。 令 P 1 ​ = ( 2 1 ​ 1 − 2 ​ ) ， P 2 ​ = ( 1 − 2 ​ 2 1 ​ ) ，则有： P 1 − 1 ​ A P 1 ​ = P 2 − 1 ​ B P 2 ​ = ( 0 0 ​ 0 5 ​ ) . 因此， B = P 2 ​ P 1 − 1 ​ A P 1 ​ P 2 − 1 ​ . 计算得： P 1 ​ P 2 − 1 ​ = 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ ) . 故正交矩阵为： Q = 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设\nA\n为二阶矩阵，\nP=(α,Aα)\n，其中\nα\n是非零向量且不是\nA\n的特征向量。\n\n(I) 证明\nP\n是可逆矩阵；\n\n(II) 若\nA2α+Aα−6α=0\n，求\nP−1AP\n，并判断\nA\n是否相似于对角矩阵。",
    referenceAnswer: "【答案】 (I) 见解析 (II) P − 1 A P = ( 0 1 ​ 6 − 1 ​ ) ，且 A 相似于对角矩阵。 【解析】 （I） 法一 ：假设 P 不可逆，则 α 与 A α 线性相关，存在不全为零的实数 k 1 ​ 、 k 2 ​ ，使得 k 1 ​ α + k 2 ​ A α = 0 。若 k 2 ​ = 0 ，则 k 1 ​ = 0 ，矛盾，故 k 2 ​  = 0 ，从而 A α = − k 2 ​ k 1 ​ ​ α ，与 α 不是特征向量矛盾，所以 P 可逆。 法二 ：设 A α = β ，则 β  = k α ，即 α 、 β 线性无关，故 P = ( α , β ) 可逆。 （II）由 A 2 α + A α − 6 α = 0 ，得 A P ​ = A ( α , A α ) = ( A α , A 2 α ) = ( A α , 6 α − A α ) = ( α , A α ) ( 0 1 ​ 6 − 1 ​ ) = P ( 0 1 ​ 6 − 1 ​ ) , ​ 故 P − 1 A P = ( 0 1 ​ 6 − 1 ​ ) . 令 B = ( 0 1 ​ 6 − 1 ​ ) ，则 ∣ λ E − B ∣ = λ 2 + λ − 6 = 0 , 特征值为 λ 1 ​ = 2 、 λ 2 ​ = − 3 。由于 A 与 B 相似，故 A 的特征值为 2 和 − 3 ，且可相似对角化。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设随机变量\nX1\n，\nX2\n，\nX3\n相互独立，其中\nX1\n与\nX2\n均服从标准正态分布，\nX3\n的概率分布为\nP{X3=0}=P{X3=1}=21\n，已知\nY=X3X1+(1−X3)X2\n。\n\n(I) 求二维随机变量\n(X1,Y)\n的分布函数，结果用标准正态分布函数\nΦ(x)\n表示；\n\n(II) 证明随机变量\nY\n服从标准正态分布。",
    referenceAnswer: "【答案】 (I) 二维随机变量 ( X 1 ​ , Y ) 的分布函数为： F ( x , y ) = { 2 1 ​ Φ ( x ) Φ ( y ) + 2 1 ​ Φ ( x ) , 2 1 ​ Φ ( x ) Φ ( y ) + 2 1 ​ Φ ( y ) , ​ x ≤ y x > y ​ (II) 见解析。 【解析】 设随机变量 X 1 ​ ， X 2 ​ ， X 3 ​ 相互独立，其中 X 1 ​ 与 X 2 ​ 均服从标准正态分布， X 3 ​ 的概率分布为 P { X 3 ​ = 0 } = P { X 3 ​ = 1 } = 2 1 ​ ，已知 Y = X 3 ​ X 1 ​ + ( 1 − X 3 ​ ) X 2 ​ 。 (I) ( X 1 ​ , Y ) 的分布函数为： F ( x , y ) ​ = P { X 1 ​ ≤ x , Y ≤ y } = P { X 3 ​ = 0 , X 1 ​ ≤ x , Y ≤ y } + P { X 3 ​ = 1 , X 1 ​ ≤ x , Y ≤ y } = P { X 3 ​ = 0 , X 1 ​ ≤ x , X 2 ​ ≤ y } + P { X 3 ​ = 1 , X 1 ​ ≤ x , X 1 ​ ≤ y } = 2 1 ​ P { X 1 ​ ≤ x } P { X 2 ​ ≤ y } + 2 1 ​ P { X 1 ​ ≤ x , X 1 ​ ≤ y } ​ (1) 当 x ≤ y 时， F ( x , y ) = 2 1 ​ P { X 1 ​ ≤ x } P { X 2 ​ ≤ y } + 2 1 ​ P { X 1 ​ ≤ x } = 2 1 ​ Φ ( x ) Φ ( y ) + 2 1 ​ Φ ( x ) (2) 当 x > y 时， F ( x , y ) = 2 1 ​ P { X 1 ​ ≤ x } P { X 2 ​ ≤ y } + 2 1 ​ P { X 1 ​ ≤ y } = 2 1 ​ Φ ( x ) Φ ( y ) + 2 1 ​ Φ ( y ) 综上所述： F ( x , y ) = { 2 1 ​ Φ ( x ) Φ ( y ) + 2 1 ​ Φ ( x ) , 2 1 ​ Φ ( x ) Φ ( y ) + 2 1 ​ Φ ( y ) , ​ x ≤ y x > y ​ (II) F Y ​ ( y ) ​ = P { Y ≤ y } = P { X 3 ​ = 0 , Y ≤ y } + P { X 3 ​ = 1 , Y ≤ y } = P { X 3 ​ = 0 , X 3 ​ X 1 ​ + ( 1 − X 3 ​ ) X 2 ​ ≤ y } + P { X 3 ​ = 1 , X 3 ​ X 1 ​ + ( 1 − X 3 ​ ) X 2 ​ ≤ y } = P { X 3 ​ = 0 , X 2 ​ ≤ y } + P { X 3 ​ = 1 , X 1 ​ ≤ y } = 2 1 ​ P { X 2 ​ ≤ y } + 2 1 ​ P { X 1 ​ ≤ y } = Φ ( y ) , ​ 因此 Y ∼ N ( 0 , 1 ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设\nT\n的分布函数为\n\nF(t)={1−e−(θt)m,0,t≥0t0\n\n其中\nθ\n、\nm\n为参数且大于零。\n\n(I) 求概率\nP{T>t}\n与\nP{T>s+t∣T>s}\n，其中\ns>0\n，\nt>0\n；\n\n(II) 任取\nn\n个这种元件做寿命试验，测得它们的寿命分别为\nt1,t2,…,tn\n，若\nm\n已知，求\nθ\n的最大似然估计值\nθ^\n。",
    referenceAnswer: "【答案】 (I) P { T > t } = e − ( θ t ​ ) m P { T > s + t ∣ T > s } = e θ m s m − ( s + t ) m ​ (II) θ ^ = m n 1 ​ i = 1 ∑ n ​ t i m ​ ​ 【解析】 （I） P { T > t } = 1 − P { T ≤ t } = 1 − F ( t ) = e − ( θ t ​ ) m 。 P { T > s + t ∣ T > s } ​ = P { T > s } P { T > s + t , T > s } ​ = P { T > s } P { T > s + t } ​ = e − ( θ s ​ ) m e − ( θ s + t ​ ) m ​ = e θ m s m − ( s + t ) m ​ ​ （II）概率密度函数为 f ( t ) = F ′ ( t ) = { e − ( θ t ​ ) m θ m m t m − 1 ​ , 0 , ​ t > 0 , 其他 . ​ 似然函数为 L ( θ ) = i = 1 ∏ n ​ e − ( θ t i ​ ​ ) m θ m m t i m − 1 ​ ​ = e − θ m 1 ​ ∑ i = 1 n ​ t i m ​ m n ( i = 1 ∏ n ​ t i m − 1 ​ ) θ − nm , 其中 t i ​ > 0 , i = 1 , 2 , … , n 。 取对数得 ln L ( θ ) ​ = − θ m 1 ​ i = 1 ∑ n ​ t i m ​ + ln m n + ln ( i = 1 ∏ n ​ t i m − 1 ​ ) − nm ln θ . ​ 对 θ 求导并令导数为零： d θ d ln L ( θ ) ​ ​ = θ m + 1 m ​ i = 1 ∑ n ​ t i m ​ − θ nm ​ = 0 ⇒ θ = m n 1 ​ i = 1 ∑ n ​ t i m ​ ​ . ​ 因此， θ 的最大似然估计值为 θ ^ = m n 1 ​ i = 1 ∑ n ​ t i m ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2020_math1 = {
  id: P, year: Y,
  title: '2020 年全国硕士研究生招生考试 数学（一）',
  short: '2020 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2020_math1.length,
  qids: questions2020_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
