const P = 'paper-2024-math3'
const Y = 2024
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2024-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2024 考研数学（三）真题',
  ...extra
})

export const questions2024_math3 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数\nf(x)=limn→∞1+nx2n1+x\n，则\nf(x)\n在\nx=−1\n处和\nx=1\n处的连续性为（　　）",
    options: [{ key: "A", text: "在 x = 1 , x = − 1 处都连续" }, { key: "B", text: "在 x = 1 ,处连续 , x = − 1 处不连续" }, { key: "C", text: "在 x = 1 , x = − 1 处都不连续" }, { key: "D", text: "在 x = 1 处不连续, x = − 1 处连续" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 f ( x ) = { x + 1 , 0 , ​ ∣ x ∣ < 1 , 其他 ​ 由于 x → 1 − lim ​ f ( x ) = 2 , x → 1 + lim ​ f ( x ) = 0 , 所以在 x = 1 处不连续。 x → − 1 − lim ​ f ( x ) = 0 , x → − 1 + lim ​ f ( x ) = 0 , 所以在 x = − 1 处连续。 故选 (D)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nI=∫aa+kπ∣sinx∣dx\n，其中\nk\n为整数。则\nI\n的值（ ）。",
    options: [{ key: "A", text: "只与 a 有关" }, { key: "B", text: "只与 k 有关" }, { key: "C", text: "与 a , k 均有关" }, { key: "D", text: "与 a , k 均无关" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】由于 ∣ sin x ∣ 是周期为 2 π 的周期函数，因此 I = ∫ a a + kπ ​ ∣ sin x ∣ d x = ∫ 0 kπ ​ ∣ sin x ∣ d x = k ∫ 0 π ​ sin x d x = 2 k , 故选 B。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nf(x,y)\n是连续函数，则\n\n∫6π2πdx∫sinx1f(x,y)dy=",
    options: [{ key: "A", text: "∫ 2 1 ​ 1 ​ d y ∫ 6 π ​ a rcs in y ​ f ( x , y ) d x" }, { key: "B", text: "∫ 2 1 ​ 1 ​ d y ∫ a rcs in y 2 π ​ ​ f ( x , y ) d x" }, { key: "C", text: "∫ 0 2 1 ​ ​ d y ∫ 6 π ​ a rcs in y ​ f ( x , y ) d x" }, { key: "D", text: "∫ 0 2 1 ​ ​ d y ∫ a rcs in y 2 π ​ ​ f ( x , y ) d x" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 原积分区域为 D = { ( x , y ) ​ 6 π ​ ≤ x ≤ 2 π ​ , sin x ≤ y ≤ 1 } . 将其改写为 y 型区域： D = { ( x , y ) ​ 2 1 ​ ≤ y ≤ 1 , 6 π ​ ≤ x ≤ arcsin y } . 因此 ∫ 6 π ​ 2 π ​ ​ d x ∫ s i n x 1 ​ f ( x , y ) d y = ∫ 2 1 ​ 1 ​ d y ∫ 6 π ​ a r c s i n y ​ f ( x , y ) d x . 故选 A。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知幂级数\n∑n=0∞anxn\n的和函数为\nln(2+x)\n，则\n∑n=0∞na2n=\n( )",
    options: [{ key: "A", text: "− 6 1 ​" }, { key: "B", text: "− 3 1 ​" }, { key: "C", text: "6 1 ​" }, { key: "D", text: "3 1 ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】将 ln ( 2 + x ) 展开可得 ln ( 2 + x ) = ln 2 + ln ( 1 + 2 x ​ ) = ln 2 + n = 1 ∑ ∞ ​ n ( − 1 ) n − 1 ​ ( 2 x ​ ) n 于是 a 0 ​ = ln 2 ， a n ​ = 2 n n ( − 1 ) n − 1 ​ ，所以 n = 0 ∑ ∞ ​ n a 2 n ​ = − n = 1 ∑ ∞ ​ 2 2 n + 1 1 ​ = − 6 1 ​ 选 A。"
  }),
  base(5, 'k-math-017', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设二次型在正交变换下的标准型为\nf(x1,x2,x3)=y12−2y22+3y32\n，则二次型\nf\n的矩阵\nA\n的行列式与迹分别为（ ）",
    options: [{ key: "A", text: "− 6 , − 2" }, { key: "B", text: "6 , − 2" }, { key: "C", text: "− 6 , 2" }, { key: "D", text: "6 , 2" }],
    answer: ["C"],
    explain: "正确答案： C 矩阵 A 的特征值为 1 ， − 2 ， 3 。 因此行列式为 ∣ A ∣ = 1 × ( − 2 ) × 3 = − 6 , 迹为 tr ( A ) = 1 + ( − 2 ) + 3 = 2. 故答案为选项 C。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\nP=101010001\n，且\nPTAP=a+2c02c0b0c0c\n，则矩阵\nA\n为（ ）",
    options: [{ key: "A", text: "​ c 0 0 ​ 0 a 0 ​ 0 0 b ​ ​" }, { key: "B", text: "​ b 0 0 ​ 0 c 0 ​ 0 0 a ​ ​" }, { key: "C", text: "​ a 0 0 ​ 0 b 0 ​ 0 0 c ​ ​" }, { key: "D", text: "​ c 0 0 ​ 0 b 0 ​ 0 0 a ​ ​" }],
    answer: ["C"],
    explain: "正确答案： C A ​ = ( P T ) − 1 ​ a + 2 c 0 2 c ​ 0 b 0 ​ c 0 c ​ ​ ( P 2 ) − 1 = ​ 1 0 0 ​ 0 1 0 ​ − 1 0 1 ​ ​ ​ a + 2 c 0 2 c ​ 0 b 0 ​ c 0 c ​ ​ ​ 1 0 − 1 ​ 0 1 0 ​ 0 0 1 ​ ​ = ​ a 0 0 ​ 0 b 0 ​ 0 0 c ​ ​ , ​ 选 C。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\nA=a+1a1b2b1312\n，\nMij\n为\nA\n的代数余子式，且\n∣A∣=−21\n，\n−M21+M22−M23=0\n，则（ ）",
    options: [{ key: "A", text: "a = 0 或 a = − 2 3 ​" }, { key: "B", text: "a = 0 或 a = 2 3 ​" }, { key: "C", text: "b = 1 或 b = − 2 1 ​" }, { key: "D", text: "b = − 1 或 b = 2 1 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】由 − M 21 ​ + M 22 ​ − M 23 ​ = 0 可得 ​ a + 1 1 1 ​ b 1 1 ​ 3 1 2 ​ ​ = a − b + 1 = 0 因此 ∣ A ∣ = ​ a + 1 a 1 ​ a + 1 2 a + 1 ​ 1 ​ 3 1 2 ​ ​ = 2 ( 1 − a ) ( 2 a − 1 ) ​ = − 2 1 ​ 解得 a = 0 或 a = 2 3 ​ 。 选 B。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n的概率密度为\n\nf(x)={6x(1−x),0,0x1其他\n\n则\n\nE(X−EX)3=()",
    options: [{ key: "A", text: "− 32 1 ​" }, { key: "B", text: "0" }, { key: "C", text: "16 1 ​" }, { key: "D", text: "2 1 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 EX = ∫ 0 1 ​ x ⋅ 6 x ( 1 − x ) d x = 2 1 ​ ， 则 E ( X − EX ) 3 = ∫ 0 1 ​ ( x − 2 1 ​ ) 3 ⋅ 6 x ( 1 − x ) d x = 0 , 选 B。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n、\nY\n相互独立，\nX∼N(0,2)\n，\nY∼N(−1,1)\n，设\np1=P{2X>Y}\n，\np2=P{X−2Y>1}\n，则（ ）",
    options: [{ key: "A", text: "p 1 ​ > p 2 ​ > 2 1 ​" }, { key: "B", text: "p 2 ​ > p 1 ​ > 2 1 ​" }, { key: "C", text: "p 1 ​ < p 2 ​ < 2 1 ​" }, { key: "D", text: "p 2 ​ > p 1 ​ < 2 1 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 p 1 ​ p 2 ​ ​ = P ( 2 X > Y ) = P ( Y − 2 X < 0 ) = P ( 3 Y − 2 X + 1 ​ < 3 1 ​ ) = Φ ( 3 1 ​ ) , = P ( X − 2 Y > 1 ) = P ( 6 ​ X − 2 Y − 2 ​ > − 6 ​ 1 ​ ) = 1 − Φ ( − 6 ​ 1 ​ ) = Φ ( 6 ​ 1 ​ ) , ​ 于是 p 2 ​ > p 1 ​ > 2 1 ​ ，选 B。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n、\nY\n相互独立，且均服从参数为\nλ\n的指数分布，令\nZ=∣X−Y∣\n，则下列随机变量与\nZ\n同分布的是（　　）",
    options: [{ key: "A", text: "X + Y" }, { key: "B", text: "2 X + Y ​" }, { key: "C", text: "2 X" }, { key: "D", text: "X" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】先求 Z 的分布函数 F Z ​ ( z ) 。当 z ≤ 0 时，显然 F Z ​ ( z ) = 0 。当 z > 0 时， F Z ​ ( z ) ​ = P ( Z ≤ z ) = P ( ∣ X − Y ∣ ≤ z ) = 1 − P ( ∣ X − Y ∣ > z ) = 1 − 2 ∫ z + ∞ ​ d x ∫ 0 x − z ​ λ e − λ x ⋅ λ e − λ y d y = 1 − 2 ∫ z + ∞ ​ λ e − λ x ( 1 − e λ z − λ x ) d x = 1 − e − λ z , ​ 这说明 Z 服从参数为 λ 的指数分布，选 D。"
  }),
  base(11, 'k-math-002', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）当\nx→0\n时，\n∫0x1+cos2t(1+t2)sint2dt\n与\nxk\n是同阶无穷小，则\nk=\n。",
    answerText: "】 3 【",
    referenceAnswer: "【答案】 3 【解析】 当 x → 0 时， ∫ 0 x ​ 1 + cos t 2 ( 1 + t 2 ) sin t 2 ​ d t ∼ ∫ 0 x ​ 2 t 2 ​ d t = 6 x 3 ​ . 因此， k = 3 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\n\n∫2+∞x4+3x2−45dx=",
    answerText: "】 2 l n 3 ​ − 8 π ​ 【",
    referenceAnswer: "【答案】 2 l n 3 ​ − 8 π ​ 【解析】 x 4 + 3 x 2 − 4 5 ​ = ( x 2 − 1 ) ( x 2 + 4 ) 5 ​ = x 2 − 1 1 ​ − x 2 + 4 1 ​ = 2 ( x − 1 ) 1 ​ − 2 ( x + 1 ) 1 ​ − x 2 + 4 1 ​ 于是 ∫ 2 + ∞ ​ x 4 + 3 x 2 − 4 5 ​ d x ​ = ∫ 2 + ∞ ​ ( 2 ( x − 1 ) 1 ​ − 2 ( x + 1 ) 1 ​ − x 2 + 4 1 ​ ) d x = ( 2 1 ​ ln x + 1 x − 1 ​ − 2 1 ​ arctan 2 x ​ ) ​ 2 + ∞ ​ = 2 ln 3 ​ − 8 π ​ . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）函数\nf(x,y)=2x3−9x2−6y4+12x+24y\n的极值点为",
    answerText: "】 (1,1) 【",
    referenceAnswer: "【答案】 (1,1) 【解析】 由 { f x ′ ​ = 6 x 2 − 18 x + 12 = 0 f y ′ ​ = − 24 y 3 + 24 = 0 ​ 解得 ( x , y ) = ( 1 , 1 ) 或 ( 2 , 1 ) 。 进一步计算二阶偏导数： f xx ′′ ​ = 12 x − 18 , f x y ′′ ​ = 0 , f yy ′′ ​ = − 72 y 2 . 当 ( x , y ) = ( 1 , 1 ) 时： A = f xx ′′ ​ ( 1 , 1 ) = − 6 , B = f x y ′′ ​ ( 1 , 1 ) = 0 , C = f yy ′′ ​ ( 1 , 1 ) = − 72 , 此时 A C − B 2 > 0 ，因此 ( 1 , 1 ) 是极值点。 当 ( x , y ) = ( 2 , 1 ) 时： A = f xx ′′ ​ ( 2 , 1 ) = 6 , B = f x y ′′ ​ ( 2 , 1 ) = 0 , C = f yy ′′ ​ ( 2 , 1 ) = − 72 , 此时 A C − B 2 < 0 ，因此 ( 2 , 1 ) 不是极值点。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设某产品的价格函数为\n\np={25−0.25Q,35−0.75Q,Q≤20Q>20\n\n其中\nP\n为价格，\nQ\n为销量，成本函数为\nC=150+5Q+0.25Q2\n，求经营该产品可获得的最大利润为 ______。",
    answerText: "】 50 【",
    referenceAnswer: "【答案】 50 【解析】 利润函数为： L ( Q ) = pQ − C = { − 0.5 Q 2 + 20 Q − 150 , − Q 2 + 30 Q − 150 , ​ Q ≤ 20 Q > 20 ​ L ( Q ) 是连续函数。其一阶导数为： L ′ ( Q ) = { − Q + 20 > 0 , − 2 Q + 30 < 0 , ​ Q < 20 Q > 20 ​ 因此， L ( Q ) 在 Q = 20 处取得最大值，最大利润为： L ( 20 ) = 50",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\nA\n为 3 阶矩阵，\nA∗\n为\nA\n的伴随矩阵。若\nr(2E−A)=1\n，\nr(A+E)=2\n，求\n∣A∗∣=",
    answerText: "】 16 【",
    referenceAnswer: "【答案】 16 【解析】 由于 r ( 2 E − A ) = 1 ， r ( E + A ) = 2 ，可知 2 至少为 A 的二重特征值，而 − 1 也是 A 的特征值。 因此 A 的特征值为 2 , 2 , − 1 ，于是可得： ∣ A ∣ = − 4 , ∣ A ∗ ∣ = ∣ A ∣ 2 = 16",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设事件\nA\n每次成功的概率为\nP\n，在三次独立重复试验中，在事件\nA\n至少成功 1 次的条件下，3 次试验全部成功的概率为\n134\n，则\nP=",
    answerText: "】 p = 3 2 ​ 【",
    referenceAnswer: "【答案】 p = 3 2 ​ 【解析】 设在3次试验中， B 表示事件 A 至少成功1次， C 表示事件 A 成功3次，则 13 4 ​ = P ( C ∣ B ) = P ( B ) P ( C ) ​ = 1 − P ( B ) P ( C ) ​ = 1 − ( 1 − p ) 3 p 3 ​ ⇒ p = 3 2 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设平面有界区域\nD\n位于第一象限，由曲线\nxy=31\n、\nxy=3\n与直线\ny=31x\n、\ny=3x\n围成，计算\n\n∬D(1+x−y)dxdy.",
    referenceAnswer: "【答案】 3 8 ​ ln 3 【解析】 设平面有界区域 D 位于第一象限，由曲线 x y = 3 1 ​ 、 x y = 3 与直线 y = 3 1 ​ x 、 y = 3 x 围成，计算 ∬ D ​ ( 1 + x − y ) d x d y . 积分区域关于直线 y = x 对称，由轮换对称性有 ∬ D ​ x d x d y = ∬ D ​ y d x d y , 于是 ∬ D ​ ( 1 + x − y ) d x d y ​ = ∬ D ​ d x d y = ∫ a r c t a n 3 1 ​ a r c t a n 3 ​ d θ ∫ 3 s i n θ c o s θ 1 ​ ​ s i n θ c o s θ 3 ​ ​ ​ r d r = 2 1 ​ ∫ a r c t a n 3 1 ​ a r c t a n 3 ​ ( sin θ cos θ 3 ​ − 3 sin θ cos θ 1 ​ ) d θ = 3 8 ​ ∫ a r c t a n 3 1 ​ a r c t a n 3 ​ sin 2 θ 1 ​ d θ = 3 4 ​ ln ( csc 2 θ − cot 2 θ ) ​ a r c t a n 3 1 ​ a r c t a n 3 ​ = 3 8 ​ ln 3. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设函数\nz=z(x,y)\n由方程\n\nz+ex−yln(1+z2)=0\n\n确定，求\n\n(∂x2∂2z+∂y2∂2z)(0,0).",
    referenceAnswer: "【答案】 − 1 − 2 ln 2 【解析】 将 ( x , y ) = ( 0 , 0 ) 代入原方程可得 z ( 0 , 0 ) = − 1 。 方程两边对 x 求偏导可得 z x ′ ​ + e x − y ⋅ 1 + z 2 2 z z x ′ ​ ​ = 0 ⇒ z x ′ ​ ( 0 , 0 ) = − 1 上述等式两边继续对 x 求偏导可得 z xx ′′ ​ + e x − y ⋅ ∂ x ∂ ​ ( 1 + z 2 2 z z x ′ ​ ​ ) = 0 ⇒ z xx ′′ ​ ( 0 , 0 ) = − 1 原方程两边对 y 求偏导可得 z y ′ ​ − ln ( 1 + z 2 ) − y ⋅ 1 + z 2 2 z z y ′ ​ ​ = 0 ⇒ z y ′ ​ ( 0 , 0 ) = ln 2 上述等式两边继续对 y 求偏导可得 z yy ′′ ​ − 1 + z 2 2 z z y ′ ​ ​ − 1 + z 2 2 z z y ′ ​ ​ − y ⋅ ∂ y ∂ ​ ( 1 + z 2 2 z z y ′ ​ ​ ) = 0 ⇒ z yy ′′ ​ ( 0 , 0 ) = − 2 ln 2 因此， ( ∂ x 2 ∂ 2 z ​ + ∂ y 2 ∂ 2 z ​ ) ​ ( 0 , 0 ) ​ = − 1 − 2 ln 2",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设\nt>0\n，平面有界区域\nD\n由曲线\ny=xe−2x\n与直线\nx=t\n、\nx=2t\n及\nx\n轴围成，\nD\n的面积为\nS(t)\n，求\nS(t)\n的最大值。",
    referenceAnswer: "【答案】 S ( ln 2 ) = 16 ln 2 ​ + 64 3 ​ 【解析】 由题意可知 S ( t ) = ∫ t 2 t ​ x e − 2 x d x ，那么 S ′ ( t ) = 4 t e − 4 t − t e − 2 t = t e − 2 t ( 4 e − 2 t − 1 ) = ⎩ ⎨ ⎧ ​ > 0 , = 0 , < 0 , ​ 0 < t < ln 2 t = ln 2 t > ln 2 ​ 这说明 S ( t ) 在 ( 0 , ln 2 ] 上单调递增，在 [ ln 2 , + ∞ ) 上单调递减，所以 S ( t ) 的最大值为 S ( ln 2 ) = ∫ l n 2 2 l n 2 ​ x e − 2 x d x = 16 ln 2 ​ + 64 3 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设函数\nf(x)\n具有二阶导数，且\nf′(0)=f′(1)\n，\n∣f′′(x)∣≤1\n，证明：\n\n(1)\n\n当\nx∈(0,1)\n时，\n\n∣f(x)−f(0)(1−x)−f(1)x∣≤2x(1−x).\n\n(2)\n\n∫01f(x)dx−2f(0)+f(1)≤121.",
    referenceAnswer: "【答案】 见解析 【解析】 (1) 令 g ( x ) = f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x − 2 x ( 1 − x ) ​ , x ∈ [ 0 , 1 ] 。那么 g ( 0 ) = g ( 1 ) = 0 ，且 g ′ ( x ) = f ′ ( x ) + f ( 0 ) − f ( 1 ) − 2 1 ​ + x , g ′′ ( x ) = f ′′ ( x ) + 1 ≥ 0 如果存在 x 0 ​ ∈ ( 0 , 1 ) ，使得 g ( x 0 ​ ) > 0 ，那么由拉格朗日中值定理可知，存在 ξ 1 ​ ∈ ( 0 , x 0 ​ ) ， ξ 2 ​ ∈ ( x 0 ​ , 1 ) ，使得 g ′ ( ξ 1 ​ ) = x 0 ​ g ( x 0 ​ ) − g ( 0 ) ​ > 0 , g ′ ( ξ 2 ​ ) = 1 − x 0 ​ g ( 1 ) − g ( x 0 ​ ) ​ < 0 进一步存在 ξ ∈ ( ξ 1 ​ , ξ 2 ​ ) ，使得 g ′′ ( ξ ) = ξ 2 ​ − ξ 1 ​ g ′ ( ξ 2 ​ ) − g ′ ( ξ 1 ​ ) ​ < 0 矛盾。因此对任意 x ∈ ( 0 , 1 ) 都有 g ( x ) ≤ 0 ，即 f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ≤ 2 x ( 1 − x ) ​ 同理还有 f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ≥ − 2 x ( 1 − x ) ​ 综合起来即 ∣ f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ∣ ≤ 2 x ( 1 − x ) ​ , x ∈ [ 0 , 1 ] (2) 将不等式 − 2 x ( 1 − x ) ​ ≤ f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ≤ 2 x ( 1 − x ) ​ 在 [ 0 , 1 ] 上积分。注意到 ∫ 0 1 ​ 2 x ( 1 − x ) ​ d x = 12 1 ​ ，且 ∫ 0 1 ​ [ f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ] d x = ∫ 0 1 ​ f ( x ) d x − 2 f ( 0 ) + f ( 1 ) ​ 于是 − 12 1 ​ ≤ ∫ 0 1 ​ f ( x ) d x − 2 f ( 0 ) + f ( 1 ) ​ ≤ 12 1 ​ 即 ​ ∫ 0 1 ​ f ( x ) d x − 2 f ( 0 ) + f ( 1 ) ​ ​ ≤ 12 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设矩阵\n\nA=112−111002−136,B=1120−1−31a22a−1−2\n\n，\n\n且向量\nα=023,β=10−1\n。\n\n(1) 证明：方程组\nAx=α\n的解均为方程组\nBx=β\n的解；\n\n(2) 若方程组\nAx=α\n与方程组\nBx=β\n不同解，求\na\n的值。",
    referenceAnswer: "【答案】 (1) 见解析 (2) a=1 【解析】 (1) 首先解方程组 A x = α ，对增广矩阵 ( A , α ) 进行初等行变换可得： ( A , α ) ​ = ​ 1 1 2 ​ − 1 1 1 ​ 0 0 2 ​ − 1 3 6 ​ 0 2 3 ​ ​ → ​ 1 0 0 ​ − 1 2 3 ​ 0 0 2 ​ − 1 4 8 ​ 0 2 3 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 2 1 ​ 1 1 0 ​ ​ . ​ 令 x 4 ​ = k ，那么 x 1 ​ = 1 − k ， x 2 ​ = 1 − 2 k ， x 3 ​ = 1 − k ，则方程组 A x = α 的通解为： x = ( 1 − k , 1 − 2 k , 1 − k , k ) T = k ξ + η , 其中 ξ = ( − 1 , − 2 , − 1 , 1 ) T ， η = ( 1 , 1 , 1 , 0 ) T 。 容易验证 B ξ = 0 ， B η = β ，这就意味着 k ξ + η 都是方程组 B x = β 的解。 (2) 由于 A x = α 的解都是 B x = β 的解，如果这两个方程组不同解，则 r ( B ) < 3 。 对矩阵 B 进行初等行变换： B ​ = ​ 1 1 2 ​ 0 − 1 − 3 ​ 1 a 2 ​ 2 a − 1 − 2 ​ ​ → ​ 1 0 0 ​ 0 − 1 − 3 ​ 1 a − 1 0 ​ 2 a − 3 − 6 ​ ​ → ​ 1 0 0 ​ 0 − 1 0 ​ 1 a − 1 3 ( a − 1 ) ​ 2 a − 3 3 ( a − 1 ) ​ ​ , ​ 所以当 3 ( a − 1 ) = 0 ，即 a = 1 时， r ( B ) = 2 < 3 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设总体\nX\n服从\n[0,θ]\n上的均匀分布，其中\nθ∈(0,+∞)\n为未知参数。\nX1,X2,⋯,Xn\n是来自总体\nX\n的简单随机样本，记\n\nX(n)=max{X1,X2,⋯,Xn},Tc=cX(n)\n\n(1) 求\nc\n，使得\nE(Tc)=θ\n；\n\n(2) 记\nh(c)=E[(Tc−θ)2]\n，求\nc\n使得\nh(c)\n最小。",
    referenceAnswer: "【答案】 (1) c = n n + 1 ​ (2) c = n + 1 n + 2 ​ 【解析】 (1) 先求 X ( n ) ​ 的分布函数 F ( x ) = P ( X ( n ) ​ ≤ x ) 。当 x < 0 时， F ( x ) = 0 ；当 x > θ 时， F ( x ) = 1 ；当 0 ≤ x ≤ θ 时， F ( x ) ​ = P ( max { X 1 ​ , X 2 ​ , … , X n ​ } ≤ x ) = P ( X 1 ​ ≤ x , X 2 ​ ≤ x , … , X n ​ ≤ x ) = i = 1 ∏ n ​ P ( X i ​ ≤ x ) = [ P ( X ≤ x ) ] n = ( ∫ 0 x ​ θ 1 ​ d t ) n = θ n x n ​ . ​ 于是 X ( n ) ​ 的概率密度为 f ( x ) = { θ n n x n − 1 ​ , 0 , ​ 0 ≤ x ≤ θ , 其他 . ​ 计算期望： E ( X ( n ) ​ ) = ∫ 0 θ ​ x ⋅ θ n n x n − 1 ​ d x = n + 1 n ​ θ . 要使得 E ( T c ​ ) = θ ，则 c ⋅ n + 1 n ​ θ = θ , 解得 c = n n + 1 ​ 。 (2) 计算二阶矩： E ( X ( n ) 2 ​ ) = ∫ 0 θ ​ x 2 ⋅ θ n n x n − 1 ​ d x = n + 2 n ​ θ 2 . 于是 h ( c ) ​ = E [ ( T c ​ − θ ) 2 ] = E [ c 2 X ( n ) 2 ​ − 2 c θ X ( n ) ​ + θ 2 ] = c 2 E ( X ( n ) 2 ​ ) − 2 c θE ( X ( n ) ​ ) + θ 2 = ( n + 2 n ​ c 2 − n + 1 2 n ​ c + 1 ) θ 2 . ​ 这是一个关于 c 的二次函数，二次项系数 n + 2 n ​ > 0 ，因此当 c = − 2 a b ​ = − 2 ⋅ n + 2 n ​ − n + 1 2 n ​ ​ = n + 1 n + 2 ​ 时， h ( c ) 取得最小值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2024_math3 = {
  id: P, year: Y,
  title: '2024 年全国硕士研究生招生考试 数学（三）',
  short: '2024 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2024_math3.length,
  qids: questions2024_math3.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
