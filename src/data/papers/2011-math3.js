const P = 'paper-2011-math3'
const Y = 2011
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2011-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2011 考研数学（三）真题',
  ...extra
})

export const questions2011_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知当\nx→0\n时，\nf(x)=3sinx−sin3x\n与\ncxk\n是等价无穷小，则()",
    options: [{ key: "A", text: "k = 1 , c = 4" }, { key: "B", text: "k = 1 , c = − 4" }, { key: "C", text: "k = 3 , c = 4" }, { key: "D", text: "k = 3 , c = − 4" }],
    answer: ["C"],
    explain: "正确答案： C 本题涉及的主要知识点： 当 x → 0 时， sin x ∼ x 。 解题过程如下： ​ x → 0 lim ​ c x k 3 sin x − sin 3 x ​ = x → 0 lim ​ c x k 3 sin x − sin x cos 2 x − cos x sin 2 x ​ = x → 0 lim ​ c x k sin x ( 3 − cos 2 x − 2 cos 2 x ) ​ = x → 0 lim ​ c x k − 1 3 − cos 2 x − 2 cos 2 x ​ = x → 0 lim ​ c x k − 1 3 − ( 2 cos 2 x − 1 ) − 2 cos 2 x ​ = x → 0 lim ​ c x k − 1 4 − 4 cos 2 x ​ = x → 0 lim ​ c x k − 1 4 sin 2 x ​ = x → 0 lim ​ c x k − 1 4 x 2 ​ = x → 0 lim ​ c x k − 3 4 ​ = 1 ​ 由此可得： k − 3 = 0 , c = 4 故选择 (C)。"
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n在\nx=0\n处可导，且\nf(0)=0\n，则\n\nx→0limx3x2f(x)−2f(x3)=()",
    options: [{ key: "A", text: "− 2 f ′ ( 0 )" }, { key: "B", text: "− f ′ ( 0 )" }, { key: "C", text: "f ′ ( 0 )" }, { key: "D", text: "0" }],
    answer: ["B"],
    explain: "正确答案： B 本题涉及到的主要知识点： 导数的定义 lim x → 0 ​ Δ x f ( x 0 ​ + Δ x ) − f ( x 0 ​ ) ​ = f ′ ( x 0 ​ ) 。 在本题中， x → 0 lim ​ x 3 x 2 f ( x ) − 2 f ( x 3 ) ​ ​ = x → 0 lim ​ x 3 x 2 f ( x ) − x 2 f ( 0 ) − 2 f ( x 3 ) + 2 f ( 0 ) ​ = x → 0 lim ​ [ x f ( x ) − f ( 0 ) ​ − 2 x 3 f ( x 3 ) − f ( 0 ) ​ ] = f ′ ( 0 ) − 2 f ′ ( 0 ) = − f ′ ( 0 ) ​ 故应选(B)。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\n{un}\n是数列，则下列命题正确的是()",
    options: [{ key: "A", text: "若 ∑ n = 1 ∞ ​ u n ​ 收敛，则 ∑ n = 1 ∞ ​ ( u 2 n − 1 ​ + u 2 n ​ ) 收敛" }, { key: "B", text: "若 ∑ n = 1 ∞ ​ ( u 2 n − 1 ​ + u 2 n ​ ) 收敛，则 ∑ n = 1 ∞ ​ u n ​ 收敛" }, { key: "C", text: "若 ∑ n = 1 ∞ ​ u n ​ 收敛，则 ∑ n = 1 ∞ ​ ( u 2 n − 1 ​ − u 2 n ​ ) 收敛" }, { key: "D", text: "若 ∑ n = 1 ∞ ​ ( u 2 n − 1 ​ − u 2 n ​ ) 收敛，则 ∑ n = 1 ∞ ​ u n ​ 收敛" }],
    answer: ["A"],
    explain: "正确答案： A 本题涉及到的主要知识点： 级数的基本性质：若级数 ∑ n = 1 ∞ ​ u n ​ 收敛，按任意方式添加括号后形成的新级数仍收敛，且其和不变。 ∑ n = 1 ∞ ​ ( u 2 n − 1 ​ + u 2 n ​ ) 是将原级数 ∑ n = 1 ∞ ​ u n ​ 按相邻两项添加括号得到的新级数。因此，若原级数收敛，则该级数也收敛，故(A)正确。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nI=∫04πlnsinxdx\n，\nJ=∫04πlncosxdx\n，\nK=∫04πlncotxdx\n，\n\n则它们的大小关系为()",
    options: [{ key: "A", text: "I < J < K" }, { key: "B", text: "I < K < J" }, { key: "C", text: "J < I < K" }, { key: "D", text: "K < J < I" }],
    answer: ["B"],
    explain: "正确答案： B 本题涉及到的主要知识点： 如果在区间 [ a , b ] 上， f ( x ) ≤ g ( x ) ，则 ∫ a b ​ f ( x ) d x ≤ ∫ a b ​ g ( x ) d x （其中 a < b ）。 在本题中，因为 0 < x < 4 π ​ ，所以 sin x < cos x < cot x 。由于 ln 是单调递增函数，可以得到： ln sin x < ln cos x < ln cot x ( x ∈ ( 0 , 4 π ​ ) ) 因此： ∫ 0 4 π ​ ​ ln sin x d x < ∫ 0 4 π ​ ​ ln cos x d x < ∫ 0 4 π ​ ​ ln cot x d x 即 I 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为 3 阶矩阵，将\nA\n的第 2 列加到第 1 列得矩阵\nB\n，再交换\nB\n的第 2 行与第 3 行得单位矩阵，记\n\nP1=110010001,P2=100001010,\n\n则\nA=()\n。",
    options: [{ key: "A", text: "P 1 ​ P 2 ​" }, { key: "B", text: "P 1 − 1 ​ P 2 ​" }, { key: "C", text: "P 2 ​ P 1 ​" }, { key: "D", text: "P 2 ​ P 1 − 1 ​" }],
    answer: ["D"],
    explain: "正确答案： D 本题涉及的主要知识点： 设 A 是一个 m × n 矩阵，对 A 施行一次初等行变换，相当于在 A 的左边乘以相应的 m 阶初等矩阵；对 A 施行一次初等列变换，相当于在 A 的右边乘以相应的 n 阶初等矩阵。 由题意， A P 1 ​ = B （对 A 的第 2 列加到第 1 列，对应右乘初等矩阵 P 1 ​ ）， P 2 ​ B = E （对 B 交换第 2 行与第 3 行，对应左乘初等矩阵 P 2 ​ ）。 故 B = P 2 − 1 ​ E = P 2 ​ （因 P 2 ​ 是对换矩阵， P 2 − 1 ​ = P 2 ​ ），因此 A = B P 1 − 1 ​ = P 2 ​ P 1 − 1 ​ 。 故选 (D)。"
  }),
  base(6, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\n4×3\n矩阵，\nη1\n、\nη2\n、\nη3\n是非齐次线性方程组\nAx=β\n的 3 个线性无关的解，\nk1\n、\nk2\n为任意常数，则\nAx=β\n的通解为 ()",
    options: [{ key: "A", text: "2 η 2 ​ + η 3 ​ ​ + k 1 ​ ( η 2 ​ − η 1 ​ )" }, { key: "B", text: "2 η 2 ​ − η 3 ​ ​ + k 1 ​ ( η 2 ​ − η 1 ​ )" }, { key: "C", text: "2 η 2 ​ + η 3 ​ ​ + k 1 ​ ( η 2 ​ − η 1 ​ ) + k 2 ​ ( η 3 ​ − η 1 ​ )" }, { key: "D", text: "2 η 2 ​ − η 3 ​ ​ + k 1 ​ ( η 2 ​ − η 1 ​ ) + k 2 ​ ( η 3 ​ − η 1 ​ )" }],
    answer: ["C"],
    explain: "正确答案： C 本题涉及的主要知识点： 如果 ξ 1 ​ 和 ξ 2 ​ 是 A x = b 的两个解，则 ξ 1 ​ − ξ 2 ​ 是 A x = 0 的解。 若n元线性方程组 A x = b 有解，设 ξ 0 ​ 是其特解， η 1 ​ , η 2 ​ , ⋯ , η t ​ 是对应齐次方程组 A x = 0 的基础解系，则通解为： ξ 0 ​ + k 1 ​ η 1 ​ + k 2 ​ η 2 ​ + ⋯ + k t ​ η t ​ 在本题中， η 1 ​ , η 2 ​ , η 3 ​ 线性无关，故 η 2 ​ − η 1 ​ 和 η 3 ​ − η 1 ​ 是 A x = 0 的两个线性无关的解。 由 3 − r ( A ) ≥ 2 得 r ( A ) ≤ 1 ，又 r ( A ) ≥ 1 ，故 r ( A ) = 1 。齐次方程基础解系含 3 − 1 = 2 个解向量，因此通解需包含2个自由参数。 2 η 2 ​ + η 3 ​ ​ 是特解（因为 A 2 η 2 ​ + η 3 ​ ​ = β ），故通解为： 2 η 2 ​ + η 3 ​ ​ + k 1 ​ ( η 2 ​ − η 1 ​ ) + k 2 ​ ( η 3 ​ − η 1 ​ ) 因此，正确答案是(C)。"
  }),
  base(7, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nF1(x)\n，\nF2(x)\n为两个分布函数，其相应的概率密度\nf1(x)\n与\nf2(x)\n是连续函数，则必为概率密度的是 ()",
    options: [{ key: "A", text: "f 1 ​ ( x ) f 2 ​ ( x )" }, { key: "B", text: "2 f 2 ​ ( x ) F 1 ​ ( x )" }, { key: "C", text: "f 1 ​ ( x ) F 2 ​ ( x )" }, { key: "D", text: "f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x )" }],
    answer: ["D"],
    explain: "正确答案： D 本题涉及到的主要知识点： 连续型随机变量的概率密度 f ( x ) 需满足以下条件： ∫ − ∞ + ∞ ​ f ( x ) d x = 1 f ( x ) ≥ 0 在本题中，对于选项(D)： ∫ − ∞ + ∞ ​ [ f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x ) ] d x ​ = ∫ − ∞ + ∞ ​ F 2 ​ ( x ) d F 1 ​ ( x ) + ∫ − ∞ + ∞ ​ F 1 ​ ( x ) d F 2 ​ ( x ) = F 1 ​ ( x ) F 2 ​ ( x ) ​ − ∞ + ∞ ​ − ∫ − ∞ + ∞ ​ F 1 ​ ( x ) d F 2 ​ ( x ) + ∫ − ∞ + ∞ ​ F 1 ​ ( x ) d F 2 ​ ( x ) = 1 × 1 − 0 + 0 = 1 ​ 此外，由于概率密度和分布函数均非负，即： f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x ) ≥ 0 因此，(D)满足概率密度的定义，选(D)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设总体\nX\n服从参数为\nλ(λ>0)\n的泊松分布，\nX1,X2,⋯,Xn(n≥2)\n为来自该总体的简单随机样本，则对于统计量\n\nT1=n1i=1∑nXi\n\n和\n\nT2=n−11i=1∑n−1Xi+n1Xn\n\n有()",
    options: [{ key: "A", text: "E ( T 1 ​ ) > E ( T 2 ​ ) , D ( T 1 ​ ) > D ( T 2 ​ )" }, { key: "B", text: "E ( T 1 ​ ) > E ( T 2 ​ ) , D ( T 1 ​ ) < D ( T 2 ​ )" }, { key: "C", text: "E ( T 1 ​ ) < E ( T 2 ​ ) , D ( T 1 ​ ) > D ( T 2 ​ )" }, { key: "D", text: "E ( T 1 ​ ) < E ( T 2 ​ ) , D ( T 1 ​ ) < D ( T 2 ​ )" }],
    answer: ["D"],
    explain: "正确答案： D 本题涉及到的主要知识点： (1) 泊松分布 X ∼ P ( λ ) 的数学期望 E ( X ) = λ ，方差 D ( X ) = λ ； (2) 期望与方差的性质： E ( c X ) = c E ( X ) E ( X + Y ) = E ( X ) + E ( Y ) D ( c X ) = c 2 D ( X ) D ( X + Y ) = D ( X ) + D ( Y ) （X与Y独立） 在本题中， E ( T 1 ​ ) = E ( n 1 ​ i = 1 ∑ n ​ X i ​ ) = n 1 ​ ⋅ nλ = λ , E ( T 2 ​ ) ​ = E ( n − 1 1 ​ i = 1 ∑ n − 1 ​ X i ​ + n 1 ​ X n ​ ) = n − 1 1 ​ ⋅ ( n − 1 ) λ + n 1 ​ λ = λ + n λ ​ = λ ( 1 + n 1 ​ ) , ​ 故 E ( T 1 ​ ) D ( T 1 ​ ) = D ( n 1 ​ i = 1 ∑ n ​ X i ​ ) = n 2 1 ​ ⋅ nλ = n λ ​ , D ( T 2 ​ ) ​ = D ( n − 1 1 ​ i = 1 ∑ n − 1 ​ X i ​ + n 1 ​ X n ​ ) = ( n − 1 ) 2 1 ​ ⋅ ( n − 1 ) λ + n 2 1 ​ λ = n − 1 λ ​ + n 2 λ ​ > n λ ​ = D ( T 1 ​ ) , ​ 故选(D)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nf(x)=limt→0x(1+3t)tx\n，则\nf′(x)=",
    answerText: "】 e 3 x ( 1 + 3 x ) 【",
    referenceAnswer: "【答案】 e 3 x ( 1 + 3 x ) 【解析】 本题涉及到的主要知识点为重要极限公式： t → 0 lim ​ ( 1 + a t ) t b ​ = e ab 在本题中： f ( x ) = t → 0 lim ​ x ( 1 + 3 t ) t x ​ = x t → 0 lim ​ [ ( 1 + 3 t ) t 1 ​ ] 3 x = x e 3 x 所以有： f ′ ( x ) = e 3 x + 3 x e 3 x = e 3 x ( 1 + 3 x )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nz=(1+yx)y\n，则\ndz(1,1)=\n___",
    answerText: "】 d x + ( 2 ln 2 − 1 ) d y 【",
    referenceAnswer: "【答案】 d x + ( 2 ln 2 − 1 ) d y 【解析】 使用对数求导法，两边取对数得： ln z = y ln ( 1 + y x ​ ) 对 x 求偏导： z 1 ​ ∂ x ∂ z ​ = y ⋅ 1 + y x ​ y 1 ​ ​ = 1 + y x ​ 1 ​ 即： ∂ x ∂ z ​ = z ⋅ 1 + y x ​ 1 ​ = ( 1 + y x ​ ) y ⋅ x + y y ​ 对 y 求偏导： z 1 ​ ∂ y ∂ z ​ = ln ( 1 + y x ​ ) + y ⋅ 1 + y x ​ − y 2 x ​ ​ = ln ( 1 + y x ​ ) − x + y x ​ 即： ∂ y ∂ z ​ = z [ ln ( 1 + y x ​ ) − x + y x ​ ] = ( 1 + y x ​ ) y [ ln ( 1 + y x ​ ) − x + y x ​ ] 令 x = 1 ， y = 1 ，得： z = ( 1 + 1 ) 1 = 2 ∂ x ∂ z ​ ​ ( 1 , 1 ) ​ = 2 ⋅ 1 + 1 1 ​ = 1 ∂ y ∂ z ​ ​ ( 1 , 1 ) ​ = 2 [ ln 2 − 2 1 ​ ] = 2 ln 2 − 1 从而： d z ∣ ( 1 , 1 ) ​ ​ = 1 ⋅ d x + ( 2 ln 2 − 1 ) d y = ( 1 + 2 ln 2 ) d x − ( 1 − 2 ln 2 ) d y = ( 1 + 2 ln 2 ) ( d x − d y ) ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\ntan(x+y+4π)=ey\n，则在\n(0,0)\n处的切线方程为___",
    answerText: "】 y = − 2 x 【",
    referenceAnswer: "【答案】 y = − 2 x 【解析】 方程变形为 x + y + 4 π ​ = arctan ( e y ) 方程两边对 x 求导得 1 + y ′ = 1 + e 2 y e y ​ y ′ 在点 ( 0 , 0 ) 处， 1 + y ′ ( 0 ) = 1 + e 0 e 0 ​ y ′ ( 0 ) 即 1 + y ′ ( 0 ) = 2 1 ​ y ′ ( 0 ) 解得 y ′ ( 0 ) = − 2 ，从而得到曲线在点 ( 0 , 0 ) 处的切线方程为 y = − 2 x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线\ny=x2−1\n，直线\nx=2\n及\nx\n轴所围成的平面图形绕\nx\n轴旋转所成的旋转体的体积为___",
    answerText: "】 3 4 ​ π 【",
    referenceAnswer: "【答案】 3 4 ​ π 【解析】 曲线 y = x 2 − 1 ​ ，直线 x = 2 及 x 轴所围成的平面图形绕 x 轴旋转所成的旋转体的体积为___ 本题涉及的主要知识点为旋转体体积的计算。设有连续曲线 y = f ( x ) 定义在区间 a ≤ x ≤ b 上，则该曲线与直线 x = a 、 x = b 及 x 轴围成的平面图形绕 x 轴旋转一周所生成的旋转体体积公式为： V x ​ = π ∫ a b ​ f 2 ( x ) d x 在本题中，具体计算过程如下： V = π ∫ 1 2 ​ y 2 d x = π ∫ 1 2 ​ ( x 2 − 1 ) d x 计算定积分： π ⋅ ( 3 1 ​ x 3 − x ) ​ 1 2 ​ = π [ ( 3 8 ​ − 2 ) − ( 3 1 ​ − 1 ) ] 简化表达式： π ( 3 2 ​ + 3 2 ​ ) = 3 4 ​ π 最终结果为 3 4 ​ π 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二次型\nf(x1,x2,x3)=x⊤Ax\n的秩为 1，\nA\n中各行元素之和为 3，则\nf\n在正交变换\nx=Qy\n下的标准形为___",
    answerText: "】 3 y 1 2 【",
    referenceAnswer: "【答案】 3 y 1 2 【解析】 本题涉及到的主要知识点为：任何二次型 f = ∑ i , j = 1 n ​ a ij ​ x i ​ x j ​ （其中 a ij ​ = a ji ​ ），总有正交变换 x = P y 使 f 化为标准形： f = λ 1 ​ y 1 2 ​ + λ 2 ​ y 2 2 ​ + ⋯ + λ n ​ y n 2 ​ 其中 λ 1 ​ , λ 2 ​ , ⋯ , λ n ​ 是 f 的矩阵 A = ( a ij ​ ) 的特征值。 在本题中， A 的各行元素之和为 3，即： A ​ 1 1 1 ​ ​ = 3 ​ 1 1 1 ​ ​ 所以 λ = 3 是 A 的一个特征值。再由二次型 x ⊤ A x 的秩为 1，知 A 的秩为 1，因此 0 是 A 的 2 重特征值。 最终，正交变换下的标准形为： 3 y 1 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二维随机变量\n(X,Y)\n服从正态分布\nN(μ,μ;σ2,σ2;0)\n，则\nE(XY2)=\n___",
    answerText: "】 μ ( μ 2 + σ 2 ) 【",
    referenceAnswer: "【答案】 μ ( μ 2 + σ 2 ) 【解析】 本题涉及的主要知识点包括： 如果随机变量 X 和 Y 的相关系数 ρ X Y ​ = 0 ，则称 X 与 Y 不相关。 若随机变量 X 与 Y 的联合分布是二维正态分布，则 X 与 Y 独立的充要条件是 X 与 Y 不相关。 如果随机变量 X 与 Y 相互独立，则有 E ( X Y ) = EX ⋅ E Y 。 在本题中，由于 ( X , Y ) 服从正态分布 N ( μ , μ ; σ 2 , σ 2 ; 0 ) ，说明 X 和 Y 独立同分布，故 X 与 Y 2 也独立。 由期望的性质有： E ( X Y 2 ) = EX ⋅ E Y 2 又因为： EX = μ E Y 2 = D Y + ( E Y ) 2 = σ 2 + μ 2 所以最终结果为： E ( X Y 2 ) = μ ( μ 2 + σ 2 )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nx→0limxln(1+x)1+2sinx−x−1",
    referenceAnswer: "【答案】 − 2 1 ​ 【解析】 本题涉及的主要知识点： 当 x → 0 时， ln ( 1 + x ) ∼ x 。 计算过程如下： x → 0 lim ​ x ln ( 1 + x ) 1 + 2 sin x ​ − x − 1 ​ ​ = x → 0 lim ​ x 2 1 + 2 sin x ​ − x − 1 ​ = x → 0 lim ​ 2 x 2 1 + 2 s i n x ​ 2 c o s x ​ − 1 ​ = x → 0 lim ​ 2 x 1 + 2 sin x ​ cos x − 1 + 2 sin x ​ ​ = x → 0 lim ​ 2 x cos x − 1 + 2 sin x ​ ​ = x → 0 lim ​ 2 − sin x − 1 + 2 s i n x ​ c o s x ​ ​ = − x → 0 lim ​ 2 1 + 2 sin x ​ cos x ​ = − 2 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数\nf(u,v)\n具有连续的二阶偏导数，\nf(1,1)=2\n是\nf(u,v)\n的极值，\nz=f(x+y,f(x,y))\n。求\n∂x∂y∂2z(1,1)\n。",
    referenceAnswer: "【答案】 f 11 ′′ ​ ( 2 , 2 ) + f 2 ′ ​ ( 2 , 2 ) ⋅ f 12 ′′ ​ ( 1 , 1 ) 【解析】 本题涉及到的主要知识点: 极值存在的必要条件设 z = f ( x , y ) 在点 ( x 0 ​ , y 0 ​ ) 具有偏导数，且在点 ( x 0 ​ , y 0 ​ ) 处有极值，则必有 f x ′ ​ ( x 0 ​ , y 0 ​ ) = 0 和 f y ′ ​ ( x 0 ​ , y 0 ​ ) = 0 。 在本题中， z = f ( x + y , f ( x , y )) ，其一阶偏导数为： ∂ x ∂ z ​ = f 1 ′ ​ ( x + y , f ( x , y )) + f 2 ′ ​ ( x + y , f ( x , y )) ⋅ f 1 ​ ( x , y ) 二阶混合偏导数为： ∂ x ∂ y ∂ 2 z ​ ​ = f 11 ′′ ​ ( x + y , f ( x , y )) + f 12 ′′ ​ ( x + y , f ( x , y )) f 2 ​ ( x , y ) + f 1 ​ ( x , y ) [ f 21 ′′ ​ ( x + y , f ( x , y )) + f 22 ′′ ​ ( x + y , f ( x , y )) f 2 ′ ​ ( x , y ) ] + f 2 ′ ​ ( x + y , f ( x , y )) ⋅ f 12 ′′ ​ ( x , y ) ​ 由于 f ( 1 , 1 ) = 2 是 f ( u , v ) 的极值，因此 f 1 ′ ​ ( 1 , 1 ) = f 2 ′ ​ ( 1 , 1 ) = 0 。 最终在点 ( 1 , 1 ) 处的二阶混合偏导数为： ∂ x ∂ y ∂ 2 z ​ ​ ( 1 , 1 ) ​ = f 11 ′′ ​ ( 2 , 2 ) + f 2 ′ ​ ( 2 , 2 ) ⋅ f 12 ′′ ​ ( 1 , 1 )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-008', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求不定积分\n\n∫xarcsinx+lnxdx",
    referenceAnswer: "【答案】 2 x ​ arcsin x ​ + 2 1 − x ​ + 2 x ​ ln x − 4 x ​ + C 【解析】 本题涉及到的主要知识点： (1) 变量替换积分法： 设 x = φ ( t ) ，则 ∫ f ( x ) d x = ∫ f [ φ ( t )] φ ′ ( t ) d t = G ( t ) + C = G [ φ − 1 ( x )] + C . (2) 分部积分法： ∫ u d v = uv − ∫ v d u . (3) 积分线性性质： ∫ [ f ( x ) ± g ( x )] d x = ∫ f ( x ) d x ± ∫ g ( x ) d x . 在本题中，令 t = x ​ ，则 x = t 2 ， d x = 2 t d t 。于是有： ∫ x ​ arcsin x ​ + ln x ​ d x ​ = ∫ t arcsin t + ln t 2 ​ ⋅ 2 t d t = 2 ∫ ( arcsin t + ln t 2 ) d t = 2 t arcsin t − 2 ∫ 1 − t 2 ​ t ​ d t + 2 ∫ ln t 2 d t = 2 t arcsin t + 2 1 − t 2 ​ + 2 t ln t 2 − 4 t + C = 2 x ​ arcsin x ​ + 2 1 − x ​ + 2 x ​ ln x − 4 x ​ + C ​ 其中 C 是任意常数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n证明方程\n\n4arctanx−x+34π−3=0\n\n恰有两个实根。",
    referenceAnswer: "【答案】 见解析 【解析】 本题涉及到的主要知识点： 零点定理 设函数 f ( x ) 在闭区间 [ a , b ] 上连续，且 f ( a ) 与 f ( b ) 异号（即 f ( a ) ⋅ f ( b ) < 0 ），那么在开区间 ( a , b ) 内至少有一点 ξ ，使 f ( ξ ) = 0 。 函数单调性的判定法 设函数 y = f ( x ) 在 [ a , b ] 上连续，在 ( a , b ) 内可导： 如果在 ( a , b ) 内 f ′ ( x ) > 0 ，那么函数 y = f ( x ) 在 [ a , b ] 上单调增加； 如果在 ( a , b ) 内 f ′ ( x ) < 0 ，那么函数 y = f ( x ) 在 [ a , b ] 上单调减少。 在本题中，令 f ( x ) = 4 arctan x − x + 3 4 π ​ − 3 ​ 其导数为 f ′ ( x ) = 1 + x 2 4 ​ − 1 当 ∣ x ∣ > 3 ​ 时， f ′ ( x ) < 0 ， f ( x ) 单调递减； 当 ∣ x ∣ < 3 ​ 时， f ′ ( x ) > 0 ， f ( x ) 单调递增。 计算 f ( − 3 ​ ) ： f ( − 3 ​ ) = 4 arctan ( − 3 ​ ) − ( − 3 ​ ) + 3 4 π ​ − 3 ​ = − 4 × 3 π ​ + 3 ​ + 3 4 π ​ − 3 ​ = 0 当 x < − 3 ​ 时， f ( x ) 单调递减，故在 x ∈ ( − ∞ , − 3 ​ ) 上， f ( x ) > 0 ； 当 − 3 ​ < x < 3 ​ 时， f ( x ) 单调递增，故在 x ∈ ( − 3 ​ , 3 ​ ) 上， f ( x ) > 0 。 因此， x = − 3 ​ 是函数 f ( x ) 在 ( − ∞ , 3 ​ ) 上唯一的零点。 计算 f ( 3 ​ ) ： f ( 3 ​ ) = 4 arctan 3 ​ − 3 ​ + 3 4 π ​ − 3 ​ = 4 × 3 π ​ − 3 ​ + 3 4 π ​ − 3 ​ = 3 8 π ​ − 2 3 ​ > 0 计算极限： x → + ∞ lim ​ f ( x ) = x → + ∞ lim ​ ( 4 arctan x − x + 3 4 π ​ − 3 ​ ) = − ∞ 由零点定理可知，存在 x 0 ​ ∈ ( 3 ​ , + ∞ ) ，使得 f ( x 0 ​ ) = 0 。因此，方程 4 arctan x − x + 3 4 π ​ − 3 ​ = 0 恰有两个实根。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(x)\n在区间\n[0,1]\n上具有连续导数，且满足\nf(0)=1\n。已知对于任意\nt∈(0,1]\n，有\n\n∬Dtf′(x+y)dxdy=∬Dtf(t)dxdy,\n\n其中积分区域\nDt\n定义为\n\nDt={(x,y)∣0≤y≤t−x,0≤x≤t}.\n\n问题：求函数\nf(x)\n的表达式。",
    referenceAnswer: "【答案】 f ( x ) = ( x − 2 ) 2 4 ​ ( 0 ≤ x ≤ 1 ) 【解析】 首先化简所给的两个二重积分得 ∬ D t ​ ​ f ( t ) d x d y = 2 1 ​ t 2 f ( t ) , ∬ D t ​ ​ f ′ ( x + y ) d x d y = ∫ 0 t ​ d x ∫ 0 t − x ​ f ′ ( x + y ) d y = ∫ 0 t ​ ( f ( t ) − f ( x )) d x = t f ( t ) − ∫ 0 t ​ f ( x ) d x . 从而由题设有 t f ( t ) − ∫ 0 t ​ f ( x ) d x = 2 1 ​ t 2 f ( t ) 。上式两端求导，整理得 ( 2 − t ) f ′ ( t ) = 2 f ( t ) . 这是可分离变量微分方程，解得 f ( t ) = ( t − 2 ) 2 C ​ 。代入 f ( 0 ) = 1 ，得 C = 4 。所以 f ( x ) = ( x − 2 ) 2 4 ​ ( 0 ≤ x ≤ 1 ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设向量组\nα1=(1,0,1)⊤\n，\nα2=(0,1,1)⊤\n，\nα3=(1,3,5)⊤\n不能由向量组\nβ1=(1,1,1)⊤\n，\nβ2=(1,2,3)⊤\n，\nβ3=(3,4,a)⊤\n线性表出。\n\n求\na\n的值；\n\n将\nβ1\n，\nβ2\n，\nβ3\n用\nα1\n，\nα2\n，\nα3\n线性表出。\n",
    referenceAnswer: "【答案】 a = 5 β 1 ​ = 2 α 1 ​ + 4 α 2 ​ − α 3 ​ ， β 2 ​ = α 1 ​ + 2 α 2 ​ ， β 3 ​ = 5 α 1 ​ + 10 α 2 ​ − 2 α 3 ​ 【解析】 本题涉及的主要知识点： 向量组 b 1 ​ , b 2 ​ , ⋯ , b l ​ 能由向量组 a 1 ​ , a 2 ​ , ⋯ , a m ​ 线性表示的充分必要条件是： r ( a 1 ​ , a 2 ​ , ⋯ , a m ​ ) = r ( a 1 ​ , a 2 ​ , ⋯ , a m ​ , b 1 ​ , b 2 ​ , ⋯ , b l ​ ) (1) 因为行列式： ∣ α 1 ​ , α 2 ​ , α 3 ​ ∣ = ​ 1 0 1 ​ 0 1 1 ​ 1 3 5 ​ ​ = 1  = 0 所以 α 1 ​ , α 2 ​ , α 3 ​ 线性无关。又因为 α 1 ​ , α 2 ​ , α 3 ​ 不能由 β 1 ​ , β 2 ​ , β 3 ​ 线性表出，所以 β 1 ​ , β 2 ​ , β 3 ​ 线性相关，即： ∣ β 1 ​ , β 2 ​ , β 3 ​ ∣ = ​ 1 1 1 ​ 1 2 3 ​ 3 4 a ​ ​ = ​ 1 0 0 ​ 1 1 2 ​ 3 1 a − 3 ​ ​ = a − 5 = 0 所以 a = 5 。 (2) 对矩阵 ( α 1 ​ , α 2 ​ , α 3 ​ , β 1 ​ , β 2 ​ , β 3 ​ ) 作初等行变换： ​ 1 0 1 ​ 0 1 1 ​ 1 3 5 ​ 1 1 1 ​ 1 2 3 ​ 3 4 5 ​ ​ → ​ 1 0 0 ​ 0 1 1 ​ 1 3 4 ​ 1 1 0 ​ 1 2 2 ​ 3 4 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 1 3 1 ​ 1 1 − 1 ​ 1 2 0 ​ 3 4 − 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 2 4 − 1 ​ 1 2 0 ​ 5 10 − 2 ​ ​ 故： β 1 ​ = 2 α 1 ​ + 4 α 2 ​ − α 3 ​ β 2 ​ = α 1 ​ + 2 α 2 ​ β 3 ​ = 5 α 1 ​ + 10 α 2 ​ − 2 α 3 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\nA10−1101=−101101\n\n(I) 求\nA\n的所有特征值与特征向量；\n\n(II) 求矩阵\nA\n。",
    referenceAnswer: "【答案】 (I) 矩阵 A 的特征值为 1 , − 1 , 0 ；特征向量依次为 k 1 ​ ​ 1 0 1 ​ ​ , k 2 ​ ​ 1 0 − 1 ​ ​ , k 3 ​ ​ 0 1 0 ​ ​ ，其中 k 1 ​ , k 2 ​ , k 3 ​ 均是不为 0 的任意常数。 (II) 矩阵 A = ​ 0 0 1 ​ 0 0 0 ​ 1 0 0 ​ ​ 。 【解析】 本题涉及到的主要知识点: (1) A α = λ α （ α  = 0 ）， λ 为矩阵 A 的特征值， α 为对应的特征向量。 (2) 对于实对称矩阵，不同特征值的特征向量互相正交。 (I) 因 r ( A ) = 2 知 ∣ A ∣ = 0 ，所以 λ = 0 是 A 的特征值。 A ​ 1 0 − 1 ​ ​ = ​ − 1 0 1 ​ ​ = − ​ 1 0 − 1 ​ ​ , A ​ 1 0 1 ​ ​ = ​ 1 0 1 ​ ​ = ​ 1 0 1 ​ ​ 所以按定义 λ = 1 是 A 的特征值， α 1 ​ = ( 1 , 0 , 1 ) ⊤ 是 A 属于 λ = 1 的特征向量； λ = − 1 是 A 的特征值， α 2 ​ = ( 1 , 0 , − 1 ) ⊤ 是 A 属于 λ = − 1 的特征向量。 设 α 3 ​ = ( x 1 ​ , x 2 ​ , x 3 ​ ) ⊤ 是 A 属于特征值 λ = 0 的特征向量。作为实对称矩阵，不同特征值对应的特征向量相互正交，因此： { α 1 ⊤ ​ α 3 ​ = x 1 ​ + x 3 ​ = 0 , α 2 ⊤ ​ α 3 ​ = x 1 ​ − x 3 ​ = 0 , ​ 解出 α 3 ​ = ( 0 , 1 , 0 ) ⊤ 。 故矩阵 A 的特征值为1, -1, 0；特征向量依次为 k 1 ​ ( 1 , 0 , 1 ) ⊤ , k 2 ​ ( 1 , 0 , − 1 ) ⊤ , k 3 ​ ( 0 , 1 , 0 ) ⊤ ，其中 k 1 ​ , k 2 ​ , k 3 ​ 均是不为0的任意常数。 (II) 由 A ( α 1 ​ , α 2 ​ , α 3 ​ ) = ( α 1 ​ , − α 2 ​ , 0 ) ，有： A = ( α 1 ​ , − α 2 ​ , 0 ) ( α 1 ​ , α 2 ​ , α 3 ​ ) − 1 = ​ 1 0 1 ​ − 1 0 1 ​ 0 0 0 ​ ​ ​ 1 0 1 ​ 1 0 − 1 ​ 0 1 0 ​ ​ − 1 = ​ 0 0 1 ​ 0 0 0 ​ 1 0 0 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n与\nY\n的概率分布分别为\nx1P32y−101P313131\nP(X2=Y2)=1\n\n(I) 求二维随机变量\n(X,Y)\n的概率分布；\n\n(II) 求\nZ=XY\n的概率分布；\n\n(III) 求\nX\n与\nY\n的相关系数\nρXY\n。",
    referenceAnswer: "【答案】 (I) 二维随机变量 ( X , Y ) 的概率分布为： Y = − 1 Y = 0 Y = 1 X = 0 0 3 1 ​ 0 X = 1 3 1 ​ 0 3 1 ​ (II) Z = X Y 的概率分布为： Z − 1 0 1 P 3 1 ​ 3 1 ​ 3 1 ​ (III) X 与 Y 的相关系数 ρ X Y ​ = 0 。 【解析】 本题涉及到的主要知识点: ( 1 ) 协方差公式 cov ( X , Y ) = E ( X Y ) − E ( X ) ⋅ E ( Y ) ( 2 ) 相关系数公式 ρ X Y ​ = D ( X ) ​ D ( Y ) ​ cov ( X , Y ) ​ 设 ( X , Y ) 的概率分布为 Y = − 1 Y = 0 Y = 1 边缘概率 X = 0 p 11 ​ p 12 ​ p 13 ​ 3 1 ​ X = 1 p 21 ​ p 22 ​ p 23 ​ 3 2 ​ 边缘概率 3 1 ​ 3 1 ​ 3 1 ​ 根据已知条件 P { X 2 = Y 2 } = 1 ，即 P { X = 0 , Y = 0 } + P { X = 1 , Y = − 1 } + P { X = 1 , Y = 1 } = 1 ，可知 p 11 ​ = p 13 ​ = p 22 ​ = 0 ，从而 p 12 ​ = p 21 ​ = p 23 ​ = 3 1 ​ 。 ( X , Y ) 的联合分布为 Y = − 1 Y = 0 Y = 1 X = 0 0 3 1 ​ 0 X = 1 3 1 ​ 0 3 1 ​ (1) Z = X Y 的所有可能取值为 − 1 , 0 , 1 。 P { Z = − 1 } = P { X = 1 , Y = − 1 } = 3 1 ​ P { Z = 1 } = P { X = 1 , Y = 1 } = 3 1 ​ P { Z = 0 } = 1 − P { Z = 1 } − P { Z = − 1 } = 3 1 ​ Z = X Y 的概率分布为 Z − 1 0 1 P 3 1 ​ 3 1 ​ 3 1 ​ (3) E ( X ) = 3 2 ​ ， E ( Y ) = 0 ， E ( X Y ) = 0 ，故 Cov ( X , Y ) = E ( X Y ) − E ( X ) ⋅ E ( Y ) = 0 从而 ρ X Y ​ = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n服从区域\nG\n上的均匀分布，其中\nG\n是由\nx−y=0\n、\nx+y=2\n与\ny=0\n所围成的三角形区域。\n求\nX\n的概率密度\nfX(x)\n；（5分）求条件概率密度\nfX∣Y(x∣y)\n；（6分）",
    referenceAnswer: "【答案】 X 的概率密度为 f X ​ ( x ) = ⎩ ⎨ ⎧ ​ x , 2 − x , 0 , ​ 0 < x < 1 , 1 ≤ x < 2 , 其他 ​ 条件概率密度为 当 0 < y < 1 时， f X ∣ Y ​ ( x ∣ y ) = ⎩ ⎨ ⎧ ​ 2 − 2 y 1 ​ , 0 , ​ y < x < 2 − y , 其他 ​ 【解析】 二维连续型随机变量 ( X , Y ) 的概率密度为 f ( x , y ) = { 1 , 0 , ​ 0 < y < 1 , y < x < 2 − y , 其他 ​ (Ⅰ) 当 0 < x < 1 时， f X ​ ( x ) = ∫ − ∞ + ∞ ​ f ( x , y ) d y = ∫ 0 x ​ 1 d y = x . 当 1 ≤ x < 2 时， f X ​ ( x ) = ∫ − ∞ + ∞ ​ f ( x , y ) d y = ∫ 0 2 − x ​ 1 d y = 2 − x . X 的边缘概率密度为 f X ​ ( x ) = ⎩ ⎨ ⎧ ​ x , 2 − x , 0 , ​ 0 < x < 1 , 1 ≤ x < 2 , 其他 ​ (Ⅱ) 当 0 < y < 1 时， Y 的边缘概率密度为 f Y ​ ( y ) = ∫ − ∞ + ∞ ​ f ( x , y ) d x = ∫ y 2 − y ​ 1 d x = 2 − 2 y . 当 0 < y < 1 时， f X ∣ Y ​ ( x ∣ y ) 有意义，条件概率密度为 f X ∣ Y ​ ( x ∣ y ) = f Y ​ ( y ) f ( x , y ) ​ = ⎩ ⎨ ⎧ ​ 2 − 2 y 1 ​ , 0 , ​ y < x < 2 − y , 其他 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2011_math3 = {
  id: P, year: Y,
  title: '2011 年全国硕士研究生招生考试 数学（三）',
  short: '2011 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2011_math3.length,
  qids: questions2011_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
