const P = 'paper-2009-math1'
const Y = 2009
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2009-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2009 考研数学（一）真题',
  ...extra
})

export const questions2009_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当\nx→0\n时，\nf(x)=x−sinax\n与\ng(x)=x2ln(1−bx)\n等价无穷小，则",
    options: [{ key: "A", text: "a = 1 , b = − 6 1 ​" }, { key: "B", text: "a = 1 , b = 6 1 ​" }, { key: "C", text: "a = − 1 , b = − 6 1 ​" }, { key: "D", text: "a = − 1 , b = 6 1 ​" }],
    answer: ["A"],
    explain: "正确答案： A f ( x ) = x − sin a x ， g ( x ) = x 2 ln ( 1 − b x ) 为等价无穷小，则 x → 0 lim ​ g ( x ) f ( x ) ​ ​ = x → 0 lim ​ x 2 ln ( 1 − b x ) x − sin a x ​ = x → 0 lim ​ x 2 ⋅ ( − b x ) x − sin a x ​ = 洛必达 x → 0 lim ​ − 3 b x 2 1 − a cos a x ​ = 洛必达 x → 0 lim ​ − 6 b x a 2 sin a x ​ = x → 0 lim ​ − a 6 b ​ ⋅ a x a 2 sin a x ​ = − 6 b a 3 ​ = 1 ⇒ a 3 = − 6 b ​ 另外， lim x → 0 ​ − 3 b x 2 1 − a c o s a x ​ 存在，蕴含 1 − a cos a x → 0 ( x → 0 ) ，故 a = 1 ，排除 (D)。 所以本题选 (A)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "如图，正方形\n{(x,y)∣∣x∣≤1,∣y∣≤1}\n被其对角线划分为四个区域\nDk(k=1,2,3,4)\n，\nIk=∬Dkycosxdxdy\n，则\nmax1≤k≤4{∣Ik∣}=()\n\n",
    options: [{ key: "A", text: "I 1 ​" }, { key: "B", text: "I 2 ​" }, { key: "C", text: "I 3 ​" }, { key: "D", text: "I 4 ​" }],
    answer: ["A"],
    explain: "正确答案： A 本题利用二重积分区域的对称性及被积函数的奇偶性。 D 2 ​ 、 D 4 ​ 两区域关于 x 轴对称，而 f ( x , − y ) = − y cos x = − f ( x , y ) ，即被积函数是关于 y 的奇函数，所以 I 2 ​ = I 4 ​ = 0 。 D 1 ​ 、 D 3 ​ 两区域关于 y 轴对称，而 f ( − x , y ) = y cos ( − x ) = y cos x = f ( x , y ) ，即被积函数是关于 x 的偶函数，因此： I 1 ​ = 2 ∬ {( x , y ) ∣ y ≥ x , 0 ≤ x ≤ 1 } ​ y cos x d x d y > 0 I 3 ​ = 2 ∬ {( x , y ) ∣ y ≤ − x , 0 ≤ x ≤ 1 } ​ y cos x d x d y 在 I 3 ​ 的积分区域内， y ≤ − x ≤ 0 且 cos x > 0 ，故 I 3 ​ ≤ 0 。 因此，最大值为 I 1 ​ 。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\ny=f(x)\n在区间\n[−1,3]\n上的图形如下图所示，则函数\nF(x)=∫0xf(t)dt\n的图形为\n\n",
    options: [{ key: "A", text: "A" }, { key: "B", text: "B" }, { key: "C", text: "C" }, { key: "D", text: "D" }],
    answer: ["D"],
    explain: "正确答案： D 此题为定积分的应用知识考核。由 y = f ( x ) 的图形可见，其图像与 x 轴、 y 轴及 x = x 0 ​ 所围图形的代数面积为所求函数 F ( x ) ，从而可得出以下几个方面的特征： 当 x ∈ [ 0 , 1 ] 时， F ( x ) ≤ 0 ，且单调递减； 当 x ∈ [ 1 , 2 ] 时， F ( x ) 单调递增； 当 x ∈ [ 2 , 3 ] 时， F ( x ) 为常函数； 当 x ∈ [ − 1 , 0 ] 时， F ( x ) ≤ 0 ，为线性函数，且单调递增； 由于 F ( x ) 为连续函数，结合上述特点，可见正确选项为 (D)。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设有两个数列\n{an}\n，\n{bn}\n，若\nn→∞liman=0\n，则",
    options: [{ key: "A", text: "当 ∑ n = 1 ∞ ​ b n ​ 收敛时， ∑ n = 1 ∞ ​ a n ​ b n ​ 收敛" }, { key: "B", text: "当 ∑ n = 1 ∞ ​ b n ​ 发散时， ∑ n = 1 ∞ ​ a n ​ b n ​ 发散" }, { key: "C", text: "当 ∑ n = 1 ∞ ​ ∣ b n ​ ∣ 收敛时， ∑ n = 1 ∞ ​ a n 2 ​ b n 2 ​ 收敛" }, { key: "D", text: "当 ∑ n = 1 ∞ ​ ∣ b n ​ ∣ 发散时， ∑ n = 1 ∞ ​ a n 2 ​ b n 2 ​ 发散" }],
    answer: ["C"],
    explain: "正确答案： C 方法一：举反例： (A) 取 a n ​ = b n ​ = ( − 1 ) n n ​ 1 ​ ，此时 ∑ b n ​ 收敛但 ∑ a n ​ b n ​ = ∑ n 1 ​ 发散，故 (A) 错误； (B) 取 a n ​ = b n ​ = n 1 ​ ，此时 ∑ b n ​ 发散但 ∑ a n ​ b n ​ = ∑ n 2 1 ​ 收敛，故 (B) 错误； (D) 取 a n ​ = b n ​ = n 1 ​ ，此时 ∑ ∣ b n ​ ∣ 发散但 ∑ a n 2 ​ b n 2 ​ = ∑ n 4 1 ​ 收敛，故 (D) 错误； 方法二： 因为 lim n → ∞ ​ a n ​ = 0 ，则由定义可知 ∃ N 1 ​ ，使得 n > N 1 ​ 时，有 ∣ a n ​ ∣ < 1 。 又因为 ∑ n = 1 ∞ ​ ∣ b n ​ ∣ 收敛，可得 lim n → ∞ ​ ∣ b n ​ ∣ = 0 ，则由定义可知 ∃ N 2 ​ ，使得 n > N 2 ​ 时，有 ∣ b n ​ ∣ < 1 。 从而，当 n > N 1 ​ + N 2 ​ 时，有 a n 2 ​ b n 2 ​ < ∣ b n ​ ∣ ，则由正项级数的比较判别法可知 ∑ n = 1 ∞ ​ a n 2 ​ b n 2 ​ 收敛。 故答案为 (C)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα1\n、\nα2\n、\nα3\n是 3 维向量空间\nR3\n的一组基，则由基\nα1\n、\n21α2\n、\n31α3\n到基\nα1+α2\n、\nα2+α3\n、\nα3+α1\n的过渡矩阵为",
    options: [{ key: "A", text: "​ 1 2 0 ​ 0 2 3 ​ 1 0 3 ​ ​" }, { key: "B", text: "​ 1 0 1 ​ 2 2 0 ​ 0 3 3 ​ ​" }, { key: "C", text: "​ 2 1 ​ − 2 1 ​ 2 1 ​ ​ 4 1 ​ 4 1 ​ − 4 1 ​ ​ − 6 1 ​ 6 1 ​ 6 1 ​ ​ ​" }, { key: "D", text: "​ 2 1 ​ 4 1 ​ − 6 1 ​ ​ − 2 1 ​ 4 1 ​ 6 1 ​ ​ 2 1 ​ − 4 1 ​ 6 1 ​ ​ ​" }],
    answer: ["A"],
    explain: "正确答案： A 因为 ( η 1 ​ , η 2 ​ , ⋯ , η n ​ ) = ( α 1 ​ , α 2 ​ , ⋯ , α n ​ ) A ，则 A 称为基 α 1 ​ , α 2 ​ , ⋯ , α n ​ 到 η 1 ​ , η 2 ​ , ⋯ , η n ​ 的过渡矩阵。 则由基 α 1 ​ 、 2 1 ​ α 2 ​ 、 3 1 ​ α 3 ​ 到 α 1 ​ + α 2 ​ 、 α 2 ​ + α 3 ​ 、 α 3 ​ + α 1 ​ 的过渡矩阵 M 满足： ( α 1 ​ + α 2 ​ , α 2 ​ + α 3 ​ , α 3 ​ + α 1 ​ ) ​ = ( α 1 ​ , 2 1 ​ α 2 ​ , 3 1 ​ α 3 ​ ) M = ( α 1 ​ , 2 1 ​ α 2 ​ , 3 1 ​ α 3 ​ ) ​ 1 2 0 ​ 0 2 3 ​ 1 0 3 ​ ​ ​ 所以此题选（A）。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n，\nB\n均为 2 阶矩阵，\nA∗\n，\nB∗\n分别为\nA\n，\nB\n的伴随矩阵。若\n∣A∣=2\n，\n∣B∣=3\n，则分块矩阵\n(OBAO)\n的伴随矩阵为",
    options: [{ key: "A", text: "( O 2 A ∗ ​ 3 B ∗ O ​ )" }, { key: "B", text: "( O 3 A ∗ ​ 2 B ∗ O ​ )" }, { key: "C", text: "( O 2 B ∗ ​ 3 A ∗ O ​ )" }, { key: "D", text: "( O 3 B ∗ ​ 2 A ∗ O ​ )" }],
    answer: ["B"],
    explain: "正确答案： B 根据 C C ∗ = ∣ C ∣ E ，若 C 可逆，则 C ∗ = ∣ C ∣ C − 1 。 分块矩阵 ( O B ​ A O ​ ) 的行列式为 ​ ( O B ​ A O ​ ) ​ = ( − 1 ) 2 × 2 ∣ A ∣∣ B ∣ = 2 × 3 = 6 , 即矩阵可逆。 于是有 ( O B ​ A O ​ ) ∗ ​ = ​ O B ​ A O ​ ​ ( O B ​ A O ​ ) − 1 = 6 ( O A − 1 ​ B − 1 O ​ ) = 6 ( O ∣ A ∣ 1 ​ A ∗ ​ ∣ B ∣ 1 ​ B ∗ O ​ ) = 6 ( O 2 1 ​ A ∗ ​ 3 1 ​ B ∗ O ​ ) = ( O 3 A ∗ ​ 2 B ∗ O ​ ) . ​ 故答案为 (B)。"
  }),
  base(7, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n的分布函数为\nF(x)=0.3Φ(x)+0.7Φ(2x−1)\n，其中\nΦ(x)\n为标准正态分布函数，则\nEX=",
    options: [{ key: "A", text: "0" }, { key: "B", text: "0.3" }, { key: "C", text: "0.7" }, { key: "D", text: "1" }],
    answer: ["C"],
    explain: "正确答案： C 因为 F ( x ) = 0.3Φ ( x ) + 0.7Φ ( 2 x − 1 ​ ) ，所以 F ′ ( x ) = 0.3 Φ ′ ( x ) + 2 0.7 ​ Φ ′ ( 2 x − 1 ​ ) . 于是， EX ​ = ∫ − ∞ + ∞ ​ x F ′ ( x ) d x = ∫ − ∞ + ∞ ​ x [ 0.3 Φ ′ ( x ) + 0.35 Φ ′ ( 2 x − 1 ​ ) ] d x = 0.3 ∫ − ∞ + ∞ ​ x Φ ′ ( x ) d x + 0.35 ∫ − ∞ + ∞ ​ x Φ ′ ( 2 x − 1 ​ ) d x . ​ 而 ∫ − ∞ + ∞ ​ x Φ ′ ( x ) d x = 0 。 令 2 x − 1 ​ = u ，则 ∫ − ∞ + ∞ ​ x Φ ′ ( 2 x − 1 ​ ) d x = 2 ∫ − ∞ + ∞ ​ ( 2 u + 1 ) Φ ′ ( u ) d u = 2 ( 2 × 0 + 1 ) = 2. 所以， EX = 0 + 0.35 × 2 = 0.7."
  }),
  base(8, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且\nX\n服从标准正态分布\nN(0,1)\n，\nY\n的概率分布为\nP{Y=0}=P{Y=1}=21\n，记\nFZ(z)\n为随机变量\nZ=XY\n的分布函数，则函数\nFZ(z)\n的间断点个数为",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["B"],
    explain: "正确答案： B F Z ​ ( z ) ​ = P ( X Y ≤ z ) = P ( X Y ≤ z ∣ Y = 0 ) P ( Y = 0 ) + P ( X Y ≤ z ∣ Y = 1 ) P ( Y = 1 ) = 2 1 ​ [ P ( X ⋅ 0 ≤ z ∣ Y = 0 ) + P ( X ≤ z ∣ Y = 1 ) ] = 2 1 ​ [ P ( 0 ≤ z ) + P ( X ≤ z ) ] ​ 由于 X 与 Y 相互独立，因此： (1) 若 z < 0 ，则 F Z ​ ( z ) = 2 1 ​ Φ ( z ) ； (2) 若 z ≥ 0 ，则 F Z ​ ( z ) = 2 1 ​ ( 1 + Φ ( z ) ) 。 在 z = 0 处，左极限为 2 1 ​ Φ ( 0 ) ，右极限为 2 1 ​ ( 1 + Φ ( 0 ) ) 。 由于 Φ ( 0 ) = 2 1 ​ ，左右极限不相等，故 z = 0 为间断点，因此选择 (B)。"
  }),
  base(9, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(u,v)\n具有连续偏导数，\nz=f(x,xy)\n，则\n∂x∂y∂2z=",
    answerText: "】 x f 12 ′′ ​ + f 2 ′ ​ + x y f 22 ′′ ​ 【",
    referenceAnswer: "【答案】 x f 12 ′′ ​ + f 2 ′ ​ + x y f 22 ′′ ​ 【解析】 ∂ x ∂ z ​ = f 1 ′ ​ + f 2 ′ ​ ⋅ y ∂ x ∂ y ∂ 2 z ​ = x f 12 ′′ ​ + f 2 ′ ​ + y x ⋅ f 22 ′′ ​ = x f 12 ′′ ​ + f 2 ′ ​ + x y f 22 ′′ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若二阶常系数线性齐次微分方程\ny′′+ay′+by=0\n的通解为\ny=(C1+C2x)ex\n，则非齐次方程\ny′′+ay′+by=x\n满足条件\ny(0)=2\n，\ny′(0)=0\n的解为\ny=",
    answerText: "】 y = − x e x + x + 2 【",
    referenceAnswer: "【答案】 y = − x e x + x + 2 【解析】 已知 y = ( c 1 ​ + c 2 ​ x ) e x ，可得 λ 1 ​ = λ 2 ​ = 1 ，因此 a = − 2 ， b = 1 。 对应的微分方程为 y ′′ − 2 y ′ + y = x 。 设特解 y ∗ = A x + B ，代入方程得 y ′ = A ， y ′′ = 0 。 代入原方程： − 2 A + ( A x + B ) = x 比较系数得 A = 1 ， − 2 + B = 0 ，解得 B = 2 。 因此特解为 y ∗ = x + 2 ，通解为 y = ( c 1 ​ + c 2 ​ x ) e x + x + 2 代入初始条件 y ( 0 ) = 2 ， y ′ ( 0 ) = 0 ： y ( 0 ) = c 1 ​ + 2 = 2 ⇒ c 1 ​ = 0 y ′ = c 2 ​ e x + ( c 1 ​ + c 2 ​ x ) e x + 1 代入 x = 0 ， y ′ ( 0 ) = c 2 ​ + c 1 ​ + 1 = 0 ，结合 c 1 ​ = 0 得 c 2 ​ = − 1 。 因此所求特解为 y = − x e x + x + 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知曲线\nL:y=x2 (0≤x≤2)\n，则\n∫Lxds=\n______",
    answerText: "】 6 13 ​ 【",
    referenceAnswer: "【答案】 6 13 ​ 【解析】 由题意可知， x = x ， y = x 2 ，且 0 ≤ x ≤ 2 ​ 。 则弧长微元为： d s = ( x ′ ) 2 + ( y ′ ) 2 ​ d x = 1 + 4 x 2 ​ d x 因此所求积分为： ∫ L ​ x d s = ∫ 0 2 ​ ​ x 1 + 4 x 2 ​ d x 利用凑微分法： ∫ 0 2 ​ ​ x 1 + 4 x 2 ​ d x = 8 1 ​ ∫ 0 2 ​ ​ 1 + 4 x 2 ​ d ( 1 + 4 x 2 ) 计算得： 8 1 ​ ⋅ 3 2 ​ ( 1 + 4 x 2 ) 3 ​ ​ 0 2 ​ ​ = 12 1 ​ [ ( 1 + 8 ) 3/2 − 1 ] = 12 1 ​ ( 27 − 1 ) = 12 26 ​ = 6 13 ​ 故： ∫ L ​ x d s = 6 13 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nΩ={(x,y,z)∣x2+y2+z2≤1}\n，则\n∭Ωz2dxdydz=",
    answerText: "】 15 4 π ​ 【",
    referenceAnswer: "【答案】 15 4 π ​ 【解析】 方法一： ∭ z 2 d x d y d z = ∫ 0 2 π ​ d θ ∫ 0 π ​ d φ ∫ 0 1 ​ ρ 2 sin φ ⋅ ρ 2 cos 2 φ d ρ = 2 π ⋅ [ − 3 cos 3 φ ​ ] 0 π ​ ⋅ 5 1 ​ = 15 4 ​ π 方法二： 由轮换对称性可知 ∭ Ω ​ z 2 d x d y d z = ∭ Ω ​ x 2 d x d y d z = ∭ Ω ​ y 2 d x d y d z 因此 3 2 π ​ ∫ 0 π ​ sin φ d φ ∫ 0 1 ​ r 4 d r = 15 4 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若\n3\n维列向量\nα\n、\nβ\n满足\nαTβ=2\n，其中\nαT\n为\nα\n的转置，则矩阵\nβαT\n的非零特征值为。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 因为 α T β = 2 ，所以 β α T β = β ( α T β ) = 2 ⋅ β 故 β α T 的非零特征值为 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nX1\n，\nX2\n，\n⋯\n，\nXm\n为来自二项分布总体\nB(n,p)\n的简单随机样本，\nXˉ\n和\nS2\n分别为样本均值和样本方差，若\nXˉ+kS2\n为\nnp2\n的无偏估计量，则\nk=",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 因为 X ˉ + k S 2 是 n p 2 的无偏估计，所以有 E ( X ˉ + k S 2 ) = n p 2 . 代入期望得 n p + kn p ( 1 − p ) = n p 2 . 两边同时除以 n 并化简得 p + k p ( 1 − p ) = p 2 , 即 1 + k ( 1 − p ) = p . 整理得 k ( 1 − p ) = p − 1 , 因此 k = − 1.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分 9 分）\n\n求二元函数\nf(x,y)=x2(2+y2)+ylny\n的极值。",
    referenceAnswer: "【答案】 极小值为 − e 1 ​ ，在点 ( 0 , e 1 ​ ) 处取得。 【解析】 求二元函数 f ( x , y ) = x 2 ( 2 + y 2 ) + y ln y 的极值。 解析 f x ′ ​ ( x , y ) = 2 x ( 2 + y 2 ) = 0 ， f y ′ ​ ( x , y ) = 2 x 2 y + ln y + 1 = 0 ， 故 x = 0 ， y = e 1 ​ 。 二阶偏导数为： f xx ′′ ​ = 2 ( 2 + y 2 ) , f yy ′′ ​ = 2 x 2 + y 1 ​ , f x y ′′ ​ = 4 x y . 在点 ( 0 , e 1 ​ ) 处有： f xx ′′ ​ ∣ ( 0 , e 1 ​ ) ​ = 2 ( 2 + e 2 1 ​ ) , f x y ′′ ​ ​ ( 0 , e 1 ​ ) ​ = 0 , f yy ′′ ​ ​ ( 0 , e 1 ​ ) ​ = e . 由于 f xx ′′ ​ > 0 ，且 ( f x y ′′ ​ ) 2 − f xx ′′ ​ f yy ′′ ​ < 0 ， 因此二元函数在极小值 f ( 0 , e 1 ​ ) = − e 1 ​ 处取得极小值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分\n9\n分）\n\n设\nan\n为曲线\ny=xn\n与\ny=xn+1\n（\nn=1,2,…\n）所围成区域的面积，记\nS1=∑n=1∞an\n，\nS2=∑n=1∞a2n−1\n，求\nS1\n与\nS2\n的值。",
    referenceAnswer: "【答案】 S 1 ​ = 2 1 ​ , S 2 ​ = 1 − ln 2 【解析】 由题意， y = x n 与 y = x n + 1 （ n = 1 , 2 , … ）在点 x = 0 和 x = 1 处相交。 所以 a n ​ = ∫ 0 1 ​ ( x n − x n + 1 ) d x = ( n + 1 1 ​ x n + 1 − n + 2 1 ​ x n + 2 ) ​ 0 1 ​ = n + 1 1 ​ − n + 2 1 ​ . 从而 S 1 ​ ​ = n = 1 ∑ ∞ ​ a n ​ = N → ∞ lim ​ n = 1 ∑ N ​ a n ​ = N → ∞ lim ​ ( 2 1 ​ − 3 1 ​ + ⋯ + N + 1 1 ​ − N + 2 1 ​ ) = N → ∞ lim ​ ( 2 1 ​ − N + 2 1 ​ ) = 2 1 ​ . ​ 又 S 2 ​ ​ = n = 1 ∑ ∞ ​ a 2 n − 1 ​ = n = 1 ∑ ∞ ​ ( 2 n 1 ​ − 2 n + 1 1 ​ ) = ( 2 1 ​ − 3 1 ​ + ⋯ + 2 N 1 ​ − 2 N + 1 1 ​ ) = 2 1 ​ − 3 1 ​ + 4 1 ​ − 5 1 ​ + 6 1 ​ − ⋯ ​ 由 ln ( 1 + x ) = x − 2 1 ​ x 2 + ⋯ + ( − 1 ) n − 1 n x n ​ + ⋯ ，取 x = 1 得 ln 2 = 1 − ( 2 1 ​ − 3 1 ​ + 4 1 ​ − ⋯ ) = 1 − S 2 ​ ⇒ S 2 ​ = 1 − ln 2.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n曲面\nS1\n是椭圆\n4x2+3y2=1\n绕\nx\n轴旋转而成，圆锥面\nS2\n是过点\n(4,0)\n且与椭圆\n4x2+3y2=1\n相切的直线绕\nx\n轴旋转而成。\n\n(I) 求\nS1\n及\nS2\n的方程；\n\n(II) 求\nS1\n与\nS2\n之间的立体体积。",
    referenceAnswer: "【答案】 (I) S 1 ​ 的方程为 4 x 2 ​ + 3 y 2 + z 2 ​ = 1 ， S 2 ​ 的方程为 y 2 + z 2 = ( 2 1 ​ x − 2 ) 2 。 (II) π 解析】** （I） S 1 ​ 的方程为 4 x 2 ​ + 3 y 2 + z 2 ​ = 1 。过点 ( 4 , 0 ) 与椭圆 4 x 2 ​ + 3 y 2 ​ = 1 的切线为 y = ± ( 2 1 ​ x − 2 ) ，因此 S 2 ​ 的方程为 y 2 + z 2 = ( 2 1 ​ x − 2 ) 2 。 （II） S 1 ​ 与 S 2 ​ 之间的体积等于一个底面半径为 2 3 ​ 、高为 3 的圆锥体积 4 9 ​ π 与部分椭球体积 V 之差。其中 V = 4 3 π ​ ∫ 1 2 ​ ( 4 − x 2 ) d x = 4 5 π ​ ，故所求体积为 4 9 ​ π − 4 5 ​ π = π 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n(I) 证明拉格朗日中值定理：若函数\nf(x)\n在\n[a,b]\n上连续，在\n(a,b)\n内可导，则存在\nξ∈(a,b)\n，使得\nf(b)−f(a)=f′(ξ)(b−a)\n。\n\n(II) 证明：若函数\nf(x)\n在\nx=0\n处连续，在\n(0,δ)(δ>0)\n内可导，且\nlimx→0+f′(x)=A\n，则\nf+′(0)\n存在，且\nf+′(0)=A\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 作辅助函数 φ ( x ) = f ( x ) − f ( a ) − b − a f ( b ) − f ( a ) ​ ( x − a ) ，易验证 φ ( x ) 满足 φ ( a ) = φ ( b ) ； φ ( x ) 在闭区间 [ a , b ] 上连续，在开区间 ( a , b ) 内可导，且 φ ′ ( x ) = f ′ ( x ) − b − a f ( b ) − f ( a ) ​ 。 根据罗尔定理，可得在 ( a , b ) 内至少有一点 ξ ，使 φ ′ ( ξ ) = 0 ，即 f ′ ( ξ ) − b − a f ( b ) − f ( a ) ​ = 0 , ∴ f ( b ) − f ( a ) = f ′ ( ξ ) ( b − a ) . (II) 任取 x 0 ​ ∈ ( 0 , δ ) ，则函数 f ( x ) 满足：在闭区间 [ 0 , x 0 ​ ] 上连续，开区间 ( 0 , x 0 ​ ) 内可导。 从而由拉格朗日中值定理可得：存在 ξ x 0 ​ ​ ∈ ( 0 , x 0 ​ ) ⊂ ( 0 , δ ) ，使得 f ′ ( ξ x 0 ​ ​ ) = x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ . ⋯⋯ ( ∗ ) 又由于 lim x → 0 + ​ f ′ ( x ) = A ，对上式（ ∗ 式）两边取 x 0 ​ → 0 + 时的极限可得： f + ′ ​ ( 0 ) = x 0 ​ → 0 + lim ​ x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ = x 0 ​ → 0 + lim ​ f ′ ( ξ x 0 ​ ​ ) = ξ x 0 ​ ​ → 0 + lim ​ f ′ ( ξ x 0 ​ ​ ) = A . 故 f + ′ ​ ( 0 ) 存在，且 f + ′ ​ ( 0 ) = A 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分\n10\n分）\n\n计算曲面积分\n\nI=∬∑(x2+y2+z2)23xdydz+ydzdx+zdxdy\n\n，\n其中\n∑\n是曲面\n2x2+2y2+z2=4\n的外侧。",
    referenceAnswer: "【答案】 4 π 【解析】 考虑曲面积分 I = ∬ ​ Σ ​ ( x 2 + y 2 + z 2 ) 3/2 x d y d z + y d x d z + z d x d y ​ , 其中曲面 Σ 由方程 2 x 2 + 2 y 2 + z 2 = 4 给出。 计算偏导数如下： ∂ x ∂ ​ ( ( x 2 + y 2 + z 2 ) 3/2 x ​ ) = ( x 2 + y 2 + z 2 ) 5/2 y 2 + z 2 − 2 x 2 ​ , ∂ y ∂ ​ ( ( x 2 + y 2 + z 2 ) 3/2 y ​ ) = ( x 2 + y 2 + z 2 ) 5/2 x 2 + z 2 − 2 y 2 ​ , ∂ z ∂ ​ ( ( x 2 + y 2 + z 2 ) 3/2 z ​ ) = ( x 2 + y 2 + z 2 ) 5/2 x 2 + y 2 − 2 z 2 ​ . 将以上三式相加，得 ∂ x ∂ ​ ( ( x 2 + y 2 + z 2 ) 3/2 x ​ ) + ∂ y ∂ ​ ( ( x 2 + y 2 + z 2 ) 3/2 y ​ ) + ∂ z ∂ ​ ( ( x 2 + y 2 + z 2 ) 3/2 z ​ ) = 0. 由于被积函数及其偏导数在点 ( 0 , 0 , 0 ) 处不连续，作封闭曲面（外侧） ∑ 1 ​ : x 2 + y 2 + z 2 = R 2 （ 0 < R < 1 ），将原点包含在内，则 ∬ ​ ∑ ​ = ∬ ∑ 1 ​ ​ ( x 2 + y 2 + z 2 ) 3/2 x d y d z + y d x d z + z d x d y ​ . 在 ∑ 1 ​ 上，有 x 2 + y 2 + z 2 = R 2 ，所以 ∬ ​ ∑ ​ = ∬ ∑ 1 ​ ​ R 3 x d y d z + y d x d z + z d x d y ​ . 由高斯公式（散度定理）， ∬ ∑ 1 ​ ​ R 3 x d y d z + y d x d z + z d x d y ​ = R 3 1 ​ ∭ Ω ​ 3 d V , 其中 Ω 是由 ∑ 1 ​ 所围成的球体。于是 R 3 1 ​ ∭ Ω ​ 3 d V = R 3 3 ​ ⋅ 3 4 π R 3 ​ = 4 π .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\nA=1−10−11−4−11−2\n，\nξ1=−11−2\n。\n\n(I) 求满足\nAξ2=ξ1\n的所有向量\nξ2\n，\nA2ξ3=ξ1\n的所有向量\nξ3\n；\n\n(II) 对 (I) 中的任意向量\nξ2\n，\nξ3\n，证明\nξ1\n，\nξ2\n，\nξ3\n线性无关。",
    referenceAnswer: "【答案】 (I) 满足 A ξ 2 ​ = ξ 1 ​ 的所有向量 ξ 2 ​ 为 ξ 2 ​ = k 1 ​ ​ 1 − 1 2 ​ ​ + ​ 0 0 1 ​ ​ ，其中 k 1 ​ 为任意常数。 满足 A 2 ξ 3 ​ = ξ 1 ​ 的所有向量 ξ 3 ​ 为 ξ 3 ​ = k 2 ​ ​ − 1 1 0 ​ ​ + k 3 ​ ​ 0 0 1 ​ ​ + ​ − 2 1 ​ 0 0 ​ ​ ，其中 k 2 ​ , k 3 ​ 为任意常数。 (II) 见解析。 【解析】 (I) 解方程 A ξ 2 ​ = ξ 1 ​ ，其中 ( A , ξ 1 ​ ) = ​ 1 − 1 0 ​ − 1 1 − 4 ​ − 1 1 − 2 ​ − 1 1 − 2 ​ ​ → ​ 1 0 0 ​ − 1 0 2 ​ − 1 0 1 ​ − 1 0 1 ​ ​ → ​ 1 0 0 ​ − 1 2 0 ​ − 1 1 0 ​ − 1 1 0 ​ ​ . 由于 r ( A ) = 2 ，故有一个自由变量。令 x 3 ​ = 2 ，由 A x = 0 解得 x 2 ​ = − 1 ， x 1 ​ = 1 。 求特解时，令 x 1 ​ = x 2 ​ = 0 ，得 x 3 ​ = 1 ，故 ξ 2 ​ = k 1 ​ ​ 1 − 1 2 ​ ​ + ​ 0 0 1 ​ ​ , 其中 k 1 ​ 为任意常数。 解方程 A 2 ξ 3 ​ = ξ 1 ​ ，其中 A 2 = ​ 2 − 2 4 ​ 2 − 2 4 ​ 0 0 0 ​ ​ , ( A 2 , ξ 1 ​ ) = ​ 2 − 2 4 ​ 2 − 2 4 ​ 0 0 0 ​ − 1 1 − 2 ​ ​ → ​ 1 0 0 ​ 1 0 0 ​ 0 0 0 ​ − 2 1 ​ 0 0 ​ ​ . 故有两个自由变量。令 x 2 ​ = 0 ， x 3 ​ = t （ t 为任意常数），由 A 2 x = 0 得 x 1 ​ = − x 2 ​ = 0 。 取特解为 ​ − 2 1 ​ 0 0 ​ ​ ，故 ξ 3 ​ = k 2 ​ ​ − 1 1 0 ​ ​ + k 3 ​ ​ 0 0 1 ​ ​ + ​ − 2 1 ​ 0 0 ​ ​ , 其中 k 2 ​ , k 3 ​ 为任意常数。 (II) 证明：设 k 1 ​ ξ 1 ​ + k 2 ​ ξ 2 ​ + k 3 ​ ξ 3 ​ = 0 ，即 k 1 ​ ​ − 1 1 − 2 ​ ​ + k 2 ​ ​ k 1 ′ ​ ​ 1 − 1 2 ​ ​ + ​ 0 0 1 ​ ​ ​ + k 3 ​ ​ k 2 ′ ​ ​ − 1 1 0 ​ ​ + k 3 ′ ​ ​ 0 0 1 ​ ​ + ​ − 2 1 ​ 0 0 ​ ​ ​ = ​ 0 0 0 ​ ​ . 整理后可得关于 k 1 ​ , k 2 ​ , k 3 ​ 的线性方程组，其系数行列式为 ​ − 1 1 − 2 ​ 0 0 1 ​ − 2 1 ​ 0 0 ​ ​ = − 1 ⋅ ( 0 ⋅ 0 − 1 ⋅ ( − 2 1 ​ )) − 0 + ( − 2 1 ​ ) ⋅ ( 1 ⋅ 1 − 0 ⋅ ( − 2 )) = − 2 1 ​ + ( − 2 1 ​ ) = − 1  = 0. 故 ξ 1 ​ , ξ 2 ​ , ξ 3 ​ 线性无关。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设二次型\n\nf(x1,x2,x3)=ax12+ax22+(a−1)x32+2x1x3−2x2x3\n\n（I）求二次型\nf\n的矩阵的所有特征值；\n（II）若二次型\nf\n的规范形为\ny12+y22\n，求\na\n的值。",
    referenceAnswer: "【答案】 （I）二次型 f 的矩阵的所有特征值为 a ， a − 2 ， a + 1 。 （II） a = 2 。 【解析】 （I）设矩阵 A = ​ a 0 1 ​ 0 a − 1 ​ 1 − 1 a − 1 ​ ​ 。 计算特征多项式： ∣ λ E − A ∣ ​ = ​ λ − a 0 − 1 ​ 0 λ − a 1 ​ − 1 1 λ − a + 1 ​ ​ = ( λ − a ) ​ λ − a 1 ​ 1 λ − a + 1 ​ ​ − ​ 0 − 1 ​ λ − a 1 ​ ​ = ( λ − a ) [ ( λ − a ) ( λ − a + 1 ) − 1 ] − [ 0 + ( λ − a ) ] = ( λ − a ) [ ( λ − a ) ( λ − a + 1 ) − 2 ] = ( λ − a ) [ λ 2 − 2 aλ + λ + a 2 − a − 2 ] = ( λ − a ) { [ aλ + 2 1 ​ ( 1 − 2 a ) ] 2 − 4 9 ​ } = ( λ − a ) ( λ − a + 2 ) ( λ − a − 1 ) ​ 因此，特征值为 λ 1 ​ = a , λ 2 ​ = a − 2 , λ 3 ​ = a + 1 （II）若规范形为 y 1 2 ​ + y 2 2 ​ ，说明有两个正特征值，一个零特征值。 分情况讨论： 若 λ 1 ​ = a = 0 ，则 λ 2 ​ = − 2 < 0 ， λ 3 ​ = 1 > 0 ，不符合题意。 若 λ 2 ​ = 0 ，即 a = 2 ，则 λ 1 ​ = 2 > 0 ， λ 3 ​ = 3 > 0 ，符合题意。 若 λ 3 ​ = 0 ，即 a = − 1 ，则 λ 1 ​ = − 1 < 0 ， λ 2 ​ = − 3 < 0 ，不符合题意。 综上所述， a = 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）袋中有\n1\n个红色球、\n2\n个黑色球与\n3\n个白球，现有放回地从袋中取两次，每次取一球，以\nX\n、\nY\n、\nZ\n分别表示两次取球所取得的红球、黑球与白球的个数。\n\n(I) 求\nP{X=1∣Z=0}\n；\n\n(II) 求二维随机变量\n(X,Y)\n的概率分布。",
    referenceAnswer: "【答案】 (I) P { X = 1 ∣ Z = 0 } = 9 4 ​ (II) 二维随机变量 ( X , Y ) 的概率分布为： X ∖ Y 0 1 2 ​ 0 4 1 ​ 6 1 ​ 36 1 ​ ​ 1 3 1 ​ 9 1 ​ 0 ​ 2 9 1 ​ 0 0 ​ ​ 【解析】 (I) 在没有取白球的情况下取了一次红球，利用压缩样本空间则相当于只有 1 个红球、 2 个黑球放回摸两次，其中摸了一个红球。 因此， P ( X = 1 ∣ Z = 0 ) = C 3 1 ​ ⋅ C 3 1 ​ C 2 1 ​ × 2 ​ = 9 4 ​ . (II) X 、 Y 的取值范围为 0 , 1 , 2 ，故 P ( X = 0 , Y = 0 ) = C 6 1 ​ ⋅ C 6 1 ​ C 3 1 ​ ⋅ C 3 1 ​ ​ = 4 1 ​ , P ( X = 1 , Y = 0 ) = C 6 1 ​ ⋅ C 6 1 ​ C 2 1 ​ ⋅ C 3 1 ​ ​ = 6 1 ​ , P ( X = 2 , Y = 0 ) = C 6 1 ​ ⋅ C 6 1 ​ 1 ​ = 36 1 ​ , P ( X = 0 , Y = 1 ) = C 6 1 ​ ⋅ C 6 1 ​ C 2 1 ​ ⋅ C 2 1 ​ ⋅ C 3 1 ​ ​ = 3 1 ​ , P ( X = 1 , Y = 1 ) = C 6 1 ​ ⋅ C 6 1 ​ C 2 1 ​ ⋅ C 2 1 ​ ​ = 9 1 ​ , P ( X = 2 , Y = 1 ) = 0 , P ( X = 0 , Y = 2 ) = C 6 1 ​ ⋅ C 6 1 ​ C 2 1 ​ ⋅ C 2 1 ​ ​ = 9 1 ​ , P ( X = 1 , Y = 2 ) = 0 , P ( X = 2 , Y = 2 ) = 0. ​ 联合分布表如下： X ∖ Y 0 1 2 ​ 0 4 1 ​ 6 1 ​ 36 1 ​ ​ 1 3 1 ​ 9 1 ​ 0 ​ 2 9 1 ​ 0 0 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设总体\nX\n的概率密度为\n\nf(x)={λ2xe−λx,0,x>0其他\n\n其中参数\nλ(λ>0)\n未知，\nX1,X2,⋯,Xn\n是来自总体\nX\n的简单随机样本。\n\n(I) 求参数\nλ\n的矩估计量；\n(II) 求参数\nλ\n的最大似然估计量。",
    referenceAnswer: "【答案】 (I) 参数 λ 的矩估计量为 λ ^ = X ˉ 2 ​ 。 (II) 参数 λ 的最大似然估计量为 λ ^ = X ˉ 2 ​ 。 【解析】 (1) 由 EX = X ˉ ，而 EX = ∫ 0 + ∞ ​ λ 2 x 2 e − λ x d x = λ 2 ​ = X ˉ ⇒ λ ^ = X ˉ 2 ​ 为总体的矩估计量。 (2) 构造似然函数 L ( x 1 ​ , ⋯ , x n ​ ; λ ) = i = 1 ∏ n ​ f ( x i ​ ; λ ) = λ 2 n ⋅ i = 1 ∏ n ​ x i ​ ⋅ e − λ ∑ i = 1 n ​ x i ​ . 取对数 ln L = 2 n ln λ + i = 1 ∑ n ​ ln x i ​ − λ i = 1 ∑ n ​ x i ​ . 令 d λ d ln L ​ = 0 ⇒ λ 2 n ​ − i = 1 ∑ n ​ x i ​ = 0 ⇒ λ = ∑ i = 1 n ​ x i ​ 2 n ​ = n 1 ​ ∑ i = 1 n ​ x i ​ 2 ​ . 故其最大似然估计量为 λ ^ = X ˉ 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2009_math1 = {
  id: P, year: Y,
  title: '2009 年全国硕士研究生招生考试 数学（一）',
  short: '2009 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2009_math1.length,
  qids: questions2009_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
