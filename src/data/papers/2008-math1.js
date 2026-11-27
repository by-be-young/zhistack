const P = 'paper-2008-math1'
const Y = 2008
const SRC = '#/notes/study_methods-math-math1-2008'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2008-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2008 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2008_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)=∫0x2ln(2+t)dt\n，则\nf′(x)\n的零点个数为（）。",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["B"],
    explain: "正确答案： B f ′ ( x ) = [ ln ( 2 + x 2 )] ⋅ 2 x ， f ′ ( 0 ) = 0 ，即 x = 0 是 f ′ ( x ) 的一个零点。 又 f ′′ ( x ) = 2 ln ( 2 + x 2 ) + 2 + x 2 4 x 2 ​ > 0 ，从而 f ′ ( x ) 单调递增 ( x ∈ ( − ∞ , + ∞ )) 。 所以 f ′ ( x ) 只有一个零点。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数\nf(x,y)=arctanyx\n在点\n(0,1)\n处的梯度等于 ( )",
    options: [{ key: "A", text: "i" }, { key: "B", text: "− i" }, { key: "C", text: "j" }, { key: "D", text: "− j" }],
    answer: ["A"],
    explain: "正确答案： A 因为 f x ′ ​ = 1 + x 2 / y 2 1/ y ​ ， f y ′ ​ = 1 + x 2 / y 2 − x / y 2 ​ ， 所以 f x ′ ​ ( 0 , 1 ) = 1 ， f y ′ ​ ( 0 , 1 ) = 0 ， 因此 grad f ( 0 , 1 ) = 1 ⋅ i + 0 ⋅ j = i 。"
  }),
  base(3, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "在下列微分方程中，以\ny=C1ex+C2cos2x+C3sin2x\n（\nC1\n、\nC2\n、\nC3\n为任意常数）为通解的是（ ）",
    options: [{ key: "A", text: "y ′′′ + y ′′ − 4 y ′ − 4 y = 0" }, { key: "B", text: "y ′′′ + y ′′ + 4 y ′ + 4 y = 0" }, { key: "C", text: "y ′′′ − y ′′ − 4 y ′ + 4 y = 0" }, { key: "D", text: "y ′′′ − y ′′ + 4 y ′ − 4 y = 0" }],
    answer: ["D"],
    explain: "正确答案： D 由微分方程的通解中含有 e x 、 cos 2 x 、 sin 2 x 可知，齐次线性方程所对应的特征方程有根 r = 1 ， r = ± 2 i 。 因此，特征方程为： ( r − 1 ) ( r − 2 i ) ( r + 2 i ) = 0 展开得： r 3 − r 2 + 4 r − 4 = 0 故以已知函数为通解的微分方程为： y ′′′ − y ′′ + 4 y ′ − 4 y = 0"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n在\n(−∞,+∞)\n内单调有界，\n{xn}\n为数列，下列命题正确的是（　　）",
    options: [{ key: "A", text: "若 { x n ​ } 收敛,则 { f ( x n ​ )} 收敛" }, { key: "B", text: "若 { x n ​ } 单调,则 { f ( x n ​ )} 收敛" }, { key: "C", text: "若 { f ( x n ​ )} 收敛,则 { x n ​ } 收敛" }, { key: "D", text: "若 { f ( x n ​ )} 单调,则 { x n ​ } 收敛" }],
    answer: ["B"],
    explain: "正确答案： B 因为 f ( x ) 在 ( − ∞ , + ∞ ) 内单调有界，且 { x n ​ } 单调，所以 { f ( x n ​ )} 单调且有界，故 { f ( x n ​ )} 一定存在极限。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\nn\n阶非零矩阵，\nE\n为\nn\n阶单位矩阵，若\nA3=0\n，则（ ）",
    options: [{ key: "A", text: "E − A 不可逆, E + A 不可逆" }, { key: "B", text: "E − A 不可逆, E + A 可逆" }, { key: "C", text: "E − A 可逆, E + A 可逆" }, { key: "D", text: "E − A 可逆, E + A 不可逆" }],
    answer: ["C"],
    explain: "正确答案： C ( E − A ) ( E + A + A 2 ) = E − A 3 = E ， ( E + A ) ( E − A + A 2 ) = E + A 3 = E ， 故 E − A 与 E + A 均可逆。"
  }),
  base(6, 'k-math-019', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型\nf(x,y,z)=XTAX\n（\nX=(x,y,z)T\n）的图形如图，则\nA\n的正特征值个数为（ ）\n\n",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["B"],
    explain: "正确答案： B 图示的二次曲面为双叶双曲面，其方程为 a 2 x ′2 ​ − b 2 y ′2 ​ − c 2 z ′2 ​ = 1 , 即二次型的标准形为 f = a 2 x ′2 ​ − b 2 y ′2 ​ − c 2 z ′2 ​ . 因此，正惯性指数为 1 ，说明矩阵 A 的正特征值个数为 1 。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n、\nY\n独立同分布，且\nX\n的分布函数为\nF(x)\n，则\nZ=max{X,Y}\n的分布函数为（  ）",
    options: [{ key: "A", text: "F 2 ( x )" }, { key: "B", text: "F ( x ) F ( y )" }, { key: "C", text: "1 − [ 1 − F ( x ) ] 2" }, { key: "D", text: "[ 1 − F ( x )] [ 1 − F ( y )]" }],
    answer: ["A"],
    explain: "正确答案： A F Z ​ ( x ) = P ( Z ≤ x ) = P { max { X , Y } ≤ x } = P ( X ≤ x ) P ( Y ≤ x ) = F ( x ) F ( x ) = F 2 ( x )"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX∼N(0,1)\n，\nY∼N(1,4)\n且相关系数\nρXY=1\n，则()",
    options: [{ key: "A", text: "P { Y = − 2 X − 1 } = 1" }, { key: "B", text: "P { Y = 2 X − 1 } = 1" }, { key: "C", text: "P { Y = − 2 X + 1 } = 1" }, { key: "D", text: "P { Y = 2 X + 1 } = 1" }],
    answer: ["D"],
    explain: "正确答案： D 用排除法，设 Y = a X + b 。 由 ρ X Y ​ = 1 ，可知 X 与 Y 正相关，得 a > 0 ，排除 (A) 和 (C)。 由 X ∼ N ( 0 , 1 ) ， Y ∼ N ( 1 , 4 ) ，得 E ( X ) = 0 ， E ( Y ) = 1 。 于是 E ( Y ) = E ( a X + b ) = a E ( X ) + b = a × 0 + b = 1 , 所以 b = 1 ，排除 (B)。 故选择 (D)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\nxy′+y=0\n满足条件\ny(1)=1\n的解是\ny=",
    answerText: "】 y = x 1 ​ 【",
    referenceAnswer: "【答案】 y = x 1 ​ 【解析】 由 d x d y ​ = x − y ​ 分离变量积分得 − ln ∣ y ∣ = ln ∣ x ∣ + C 1 ​ ， 所以 ∣ y ∣ 1 ​ = ∣ x ∣ ⋅ C 。 又 y ( 1 ) = 1 ， 所以 y = x 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线\nsin(xy)+ln(y−x)=x\n在点\n(0,1)\n处的切线方程为",
    answerText: "】 y = x + 1 【",
    referenceAnswer: "【答案】 y = x + 1 【解析】 设 F ( x , y ) = sin ( x y ) + ln ( y − x ) − x ，则 d x d y ​ = − F y ′ ​ F x ′ ​ ​ = − x cos ( x y ) + y − x 1 ​ y cos ( x y ) − y − x 1 ​ − 1 ​ 将 y ( 0 ) = 1 代入得 d x d y ​ ​ x = 0 ​ = 1 故切线方程为 y − 1 = x − 0 即 y = x + 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知幂级数\n∑n=0∞an(x+2)n\n在\nx=0\n处收敛，在\nx=−4\n处发散，则幂级数\n∑n=0∞an(x−3)n\n的收敛域为（）",
    answerText: "】 ( 1 , 5 ] 【",
    referenceAnswer: "【答案】 ( 1 , 5 ] 【解析】 幂级数 ∑ n = 0 ∞ ​ a n ​ ( x + 2 ) n 的收敛区间以 x = − 2 为中心。 由于该级数在 x = 0 处收敛，在 x = − 4 处发散，因此其收敛半径为 2 ，收敛域为 ( − 4 , 0 ] 。 即当 − 2 < x + 2 ≤ 2 时级数收敛，亦即 ∑ n = 0 ∞ ​ a n ​ t n 的收敛半径为 2 ，收敛域为 ( − 2 , 2 ] 。 对于 ∑ n = 0 ∞ ​ a n ​ ( x − 3 ) n ，其收敛半径仍为 2 。 由 − 2 < x − 3 ≤ 2 可得 1 < x ≤ 5 ， 因此幂级数 ∑ n = 0 ∞ ​ a n ​ ( x − 3 ) n 的收敛域为 ( 1 , 5 ] 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设曲面\nΣ\n是\nz=4−x2−y2\n的上侧，则\n∬Σxydydz+xdzdx+x2dxdy=",
    answerText: "】 4π 【",
    referenceAnswer: "【答案】 4π 【解析】 给定曲面 ∑ 1 ​ : z = 0 （其中 x 2 + y 2 ≤ 4 ）的下侧，记 ∑ 与 ∑ 1 ​ 所围成的空间区域为 Ω 。 则原式可表示为： ∬ ∑ + ∑ 1 ​ ​ ( x y d y d z + x d z d x + x 2 d x d y ) − ∬ ∑ 1 ​ ​ ( x y d y d z + x d z d x + x 2 d x d y ) 利用高斯公式，第一项化为： ∭ Ω ​ y d x d y d z 第二项由于 ∑ 1 ​ 取下侧，其法向量与 z 轴反向，故： ∬ x 2 + y 2 ≤ 4 ​ x 2 d x d y 因此原式等于： ∭ Ω ​ y d x d y d z − ( − ∬ x 2 + y 2 ≤ 4 ​ x 2 d x d y ) 由于 Ω 关于 x 轴对称且被积函数 y 为奇函数，故： ∭ Ω ​ y d x d y d z = 0 剩余部分为： ∬ x 2 + y 2 ≤ 4 ​ x 2 d x d y 利用对称性： ∬ x 2 + y 2 ≤ 4 ​ x 2 d x d y = 2 1 ​ ∬ x 2 + y 2 ≤ 4 ​ ( x 2 + y 2 ) d x d y 转换为极坐标： 2 1 ​ ∫ 0 2 π ​ d θ ∫ 0 2 ​ r 3 d r = 2 1 ​ ⋅ 2 π ⋅ 4 16 ​ = 4 π 最终结果为： 4 π",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA\n为\n2\n阶矩阵，\nα1\n，\nα2\n为线性无关的\n2\n维列向量，\nAα1=0\n，\nAα2=2α1+α2\n，则\nA\n的非零特征值为（）",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 由 A ( α 1 ​ , α 2 ​ ) = ( α 1 ​ , α 2 ​ ) ( 0 0 ​ 2 1 ​ ) ，记 P = ( α 1 ​ , α 2 ​ ) ， B = ( 0 0 ​ 2 1 ​ ) ，则 A 与 B 相似。 由 ∣ λ E − B ∣ = λ ( λ − 1 ) = 0 ，得 B 的特征值为 0 和 1 ，故 A 的非零特征值为 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n服从参数为\n1\n的泊松分布，则\nP{X=EX2}=\n______",
    answerText: "】 2 e 1 ​ 【",
    referenceAnswer: "【答案】 2 e 1 ​ 【解析】 由 D X = E X 2 − ( EX ) 2 ， X 服从参数为 1 的泊松分布，故 D X = EX = 1 。 所以 E X 2 = 1 + 1 = 2 ，则 P { X = 2 } = 2 ! 1 2 ​ e − 1 = 2 e 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分 9 分）\n\n求极限\n\nx→0limx4[sinx−sin(sinx)]sinx",
    referenceAnswer: "【答案】 6 1 ​ 【解析】 方法一： x → 0 lim ​ x 4 [ sin x − sin ( sin x )] sin x ​ ​ = x → 0 lim ​ x 3 sin x − sin ( sin x ) ​ = x → 0 lim ​ 3 x 2 cos x − cos ( sin x ) cos x ​ = x → 0 lim ​ 3 x 2 1 − cos ( sin x ) ​ = x → 0 lim ​ 3 x 2 2 1 ​ sin 2 x ​ = 6 1 ​ ​ 方法二： ∵ sin x sin ( sin x ) ​ = x − 6 1 ​ x 3 + o ( x 3 ) , = sin x − 6 1 ​ sin 3 x + o ( sin 3 x ) ​ ∴ x → 0 lim ​ x 4 [ sin x − sin ( sin x )] sin x ​ ​ = x → 0 lim ​ [ 6 x 4 sin 4 x ​ + x 4 o ( sin 4 x ) ​ ] = 6 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分 9 分）\n\n计算曲线积分\n∫Lsin2xdx+2(x2−1)ydy\n，其中\nL\n是曲线\ny=sinx\n上从点\n(0,0)\n到点\n(π,0)\n的一段。",
    referenceAnswer: "【答案】 − 2 π 2 ​ 【解析】 方法一 ：（直接取 x 为参数，将对坐标的曲线积分化成定积分计算） ∫ L ​ sin 2 x d x + 2 ( x 2 − 1 ) y d y ​ = ∫ 0 π ​ [ sin 2 x + 2 ( x 2 − 1 ) sin x ⋅ cos x ] d x = ∫ 0 π ​ x 2 sin 2 x d x = − 2 x 2 ​ cos 2 x ​ 0 π ​ + ∫ 0 π ​ x cos 2 x d x = − 2 π 2 ​ + 2 x ​ sin 2 x ​ 0 π ​ − 2 1 ​ ∫ 0 π ​ sin 2 x d x = − 2 π 2 ​ ​ 方法二 ：（添加 x 轴上的直线段，用格林公式化成二重积分计算） 取 L 1 ​ 为 x 轴上从点 ( π , 0 ) 到点 ( 0 , 0 ) 的一段， D 是由 L 与 L 1 ​ 围成的区域。 ​ ∫ L ​ sin 2 x d x + 2 ( x 2 − 1 ) y d y = ∫ L + L 1 ​ ​ sin 2 x d x + 2 ( x 2 − 1 ) y d y − ∫ L 1 ​ ​ sin 2 x d x + 2 ( x 2 − 1 ) y d y = − ∬ D ​ 4 x y d x d y − ∫ π 0 ​ sin 2 x d x = − ∫ 0 π ​ d x ∫ 0 s i n x ​ 4 x y d y − 2 1 ​ cos 2 x ​ 0 π ​ = − ∫ 0 π ​ 2 x sin 2 x d x = − ∫ 0 π ​ x ( 1 − cos 2 x ) d x = − 2 x 2 ​ ​ 0 π ​ + 2 x ​ sin 2 x ​ 0 π ​ − 2 1 ​ ∫ 0 π ​ sin 2 x d x = − 2 π 2 ​ ​ 方法三 ：（将其拆成 ∫ L ​ sin 2 x d x − 2 y d y + ∫ L ​ 2 x 2 y d y ，前者与路径无关，选择沿 x 轴上的直线段积分，后者化成定积分计算） ∫ L ​ sin 2 x d x + 2 ( x 2 − 1 ) y d y ​ = ∫ L ​ sin 2 x d x − 2 y d y + ∫ L ​ 2 x 2 y d y = I 1 ​ + I 2 ​ ​ 对于 I 1 ​ ，因为 ∂ y ∂ P ​ = ∂ x ∂ Q ​ = 0 ，故曲线积分与路径无关，取 ( 0 , 0 ) 到 ( π , 0 ) 的直线段积分。 I 1 ​ ​ = ∫ 0 π ​ sin 2 x d x = 0 ​ I 2 ​ ​ = ∫ L ​ 2 x 2 y d y = ∫ 0 π ​ 2 x 2 sin x cos x d x = ∫ 0 π ​ x 2 sin 2 x d x = − 2 1 ​ ∫ 0 π ​ x 2 d cos 2 x = − 2 1 ​ x 2 cos 2 x ​ 0 π ​ + 2 1 ​ ∫ 0 π ​ 2 x cos 2 x d x = − 2 1 ​ π 2 + 2 1 ​ ∫ 0 π ​ x d sin 2 x = − 2 1 ​ π 2 + 2 1 ​ [ x sin 2 x + 2 1 ​ cos 2 x ] 0 π ​ = − 2 1 ​ π 2 ​ 所以，原式 = − 2 1 ​ π 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知曲线\nC:{x2+y2−2z2=0x+y+3z=5\n，求曲线\nC\n距离\nXOY\n面最远的点和最近的点。",
    referenceAnswer: "【答案】 最远点为 ( − 5 , − 5 , 5 ) ，最近点为 ( 1 , 1 , 1 ) 。 【解析】 点 ( x , y , z ) 到 x O y 面的距离为 ∣ z ∣ ，故求 C 上距离 x O y 面的最远点和最近点的坐标，等价于求函数 H = z 2 在条件 x 2 + y 2 − 2 z 2 = 0 与 x + y + 3 z = 5 下的最大值点和最小值点。 令 L ( x , y , z , λ , μ ) = z 2 + λ ( x 2 + y 2 − 2 z 2 ) + μ ( x + y + 3 z − 5 ) 则有 ⎩ ⎨ ⎧ ​ L x ′ ​ = 2 λ x + μ = 0 L y ′ ​ = 2 λ y + μ = 0 L z ′ ​ = 2 z − 4 λ z + 3 μ = 0 x 2 + y 2 − 2 z 2 = 0 x + y + 3 z = 5 ​ ( 1 ) ( 2 ) ( 3 ) ( 4 ) ( 5 ) ​ 由 (1) 和 (2) 得 x = y ，代入 (4) 和 (5) 得 { x 2 − z 2 = 0 2 x + 3 z = 5 ​ 解得 ⎩ ⎨ ⎧ ​ x = − 5 y = − 5 z = 5 ​ 或 ⎩ ⎨ ⎧ ​ x = 1 y = 1 z = 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nf(x)\n是连续函数，\n\n(1) 利用定义证明函数\nF(x)=∫0xf(t)dt\n可导，且\nF′(x)=f(x)\n；\n\n(2) 当\nf(x)\n是以\n2\n为周期的周期函数时，证明函数\nG(x)=2∫0xf(t)dt−x∫02f(t)dt\n也是以\n2\n为周期的周期函数。",
    referenceAnswer: "【答案】 见解析 【解析】 (1) 对任意的 x ，由于 f 是连续函数，所以 Δ x → 0 lim ​ Δ x F ( x + Δ x ) − F ( x ) ​ ​ = Δ x → 0 lim ​ Δ x ∫ 0 x + Δ x ​ f ( t ) d t − ∫ 0 x ​ f ( t ) d t ​ = Δ x → 0 lim ​ Δ x ∫ x x + Δ x ​ f ( t ) d t ​ = Δ x → 0 lim ​ Δ x f ( ξ ) Δ x ​ = Δ x → 0 lim ​ f ( ξ ) , ξ x x + Δ x ​ 由于 lim Δ x → 0 ​ f ( ξ ) = f ( x ) ，可知函数 F ( x ) 在 x 处可导，且 F ′ ( x ) = f ( x ) 。 (2) 方法一：要证明 G ( x ) 以 2 为周期，即要证明对任意的 x ，都有 G ( x + 2 ) = G ( x ) 。 令 H ( x ) = G ( x + 2 ) − G ( x ) ，则 H ′ ( x ) ​ = ( 2 ∫ 0 x + 2 ​ f ( t ) d t − ( x + 2 ) ∫ 0 2 ​ f ( t ) d t ) ′ − ( 2 ∫ 0 x ​ f ( t ) d t − x ∫ 0 2 ​ f ( t ) d t ) ′ = 2 f ( x + 2 ) − ∫ 0 2 ​ f ( t ) d t − 2 f ( x ) + ∫ 0 2 ​ f ( t ) d t = 0 ​ 又因为 H ( 0 ) = G ( 2 ) − G ( 0 ) = ( 2 ∫ 0 2 ​ f ( t ) d t − 2 ∫ 0 2 ​ f ( t ) d t ) − 0 = 0 所以 H ( x ) = 0 ，即 G ( x + 2 ) = G ( x ) 。 方法二：由于 f 是以 2 为周期的连续函数，所以对任意的 x ，有 ​ G ( x + 2 ) − G ( x ) = 2 ∫ 0 x + 2 ​ f ( t ) d t − ( x + 2 ) ∫ 0 2 ​ f ( t ) d t − 2 ∫ 0 x ​ f ( t ) d t + x ∫ 0 2 ​ f ( t ) d t = 2 [ ∫ 0 2 ​ f ( t ) d t + ∫ 2 x + 2 ​ f ( t ) d t − ∫ 0 x ​ f ( t ) d t ] = 2 [ − ∫ 0 x ​ f ( t ) d t + ∫ 0 x ​ f ( u + 2 ) d u ] = 2 ∫ 0 x ​ [ f ( t + 2 ) − f ( t )] d t = 0 ​ 即 G ( x ) 是以 2 为周期的周期函数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分\n11\n分）\n\n将\nf(x)=1−x2 (0≤x≤π)\n展开为余弦级数，并求级数\n∑n=1∞n2(−1)n−1\n的和。",
    referenceAnswer: "【答案】 ∑ n = 1 ∞ ​ n 2 ( − 1 ) n − 1 ​ = 12 π 2 ​ 【解析】 由于 a 0 ​ = π 2 ​ ∫ 0 π ​ ( 1 − x 2 ) d x = 2 − 3 2 π 2 ​ , a n ​ = π 2 ​ ∫ 0 π ​ ( 1 − x 2 ) cos n x d x = ( − 1 ) n + 1 n 2 4 ​ ( n = 1 , 2 , … ) , 所以 f ( x ) = 2 a 0 ​ ​ + n = 1 ∑ ∞ ​ a n ​ cos n x = 1 − 3 π 2 ​ + 4 n = 1 ∑ ∞ ​ n 2 ( − 1 ) n + 1 ​ cos n x ( 0 ≤ x ≤ π ) . 令 x = 0 ，有 f ( 0 ) = 1 − 3 π 2 ​ + 4 n = 1 ∑ ∞ ​ n 2 ( − 1 ) n + 1 ​ . 又 f ( 0 ) = 1 ，所以 n = 1 ∑ ∞ ​ n 2 ( − 1 ) n + 1 ​ = 12 π 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(20, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nα,β\n为 3 维列向量，矩阵\nA=ααT+ββT\n，其中\nαT,βT\n分别是\nα,β\n的转置。证明：\n\n（Ⅰ）\nr(A)≤2\n；\n\n（Ⅱ）若\nα,β\n线性相关，则秩\nr(A)2\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 我们有 r ( A ) = r ( α α T + β β T ) ≤ r ( α α T ) + r ( β β T ) ≤ r ( α ) + r ( β ) ≤ 2 。 (II) 由于 α 、 β 线性相关，不妨设 α = k β 。于是 r ( A ) = r ( α α T + β β T ) = r (( 1 + k 2 ) β β T ) ≤ r ( β ) ≤ 1 < 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(21, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设\nn\n元线性方程组\nAx=b\n，其中\n\nA=2aa212aa212a⋱⋱⋱a212a,x=x1x2⋮xn,b=10⋮0.\n\n(Ⅰ) 证明行列式\n∣A∣=(n+1)an\n；\n\n(Ⅱ) 当\na\n为何值时，该方程组有唯一解，并求\nx1\n；\n\n(Ⅲ) 当\na\n为何值时，该方程组有无穷多解，并求通解。",
    referenceAnswer: "【答案】 （Ⅰ）见解析 （Ⅱ）当 a  = 0 时，方程组有唯一解，且 x 1 ​ = ( n + 1 ) a n ​ （Ⅲ）当 a = 0 时，方程组有无穷多解，且通解为 x = ​ 0 1 0 ⋮ 0 ​ ​ + k ​ 1 0 0 ⋮ 0 ​ ​ ，其中 k 为任意常数。 【解析】 （Ⅰ） 证明 记 D n ​ = ∣ A ∣ = ​ 2 a a 2 ​ 1 2 a a 2 ​ 1 2 a ⋱ ​ ⋱ ⋱ a 2 ​ 1 2 a ​ ​ n ​ , 下面用数学归纳法证明 D n ​ = ( n + 1 ) a n 。 当 n = 1 时， D 1 ​ = 2 a ，结论成立。 当 n = 2 时， D 2 ​ = ​ 2 a a 2 ​ 1 2 a ​ ​ = 3 a 2 , 结论成立。 假设结论对小于 n 的情况成立，将 D n ​ 按第一行展开，得 D n ​ = 2 a D n − 1 ​ − ​ a 2 0 ​ 1 2 a a 2 ​ 1 2 a ⋱ ​ ⋱ ⋱ a 2 ​ 1 2 a ​ ​ n − 1 ​ . 第二个行列式等于 a 2 D n − 2 ​ , 因此 D n ​ = 2 a D n − 1 ​ − a 2 D n − 2 ​ . 代入归纳假设 D n − 1 ​ = n a n − 1 , D n − 2 ​ = ( n − 1 ) a n − 2 , 得 D n ​ = 2 a ⋅ n a n − 1 − a 2 ⋅ ( n − 1 ) a n − 2 = ( n + 1 ) a n . 故 ∣ A ∣ = ( n + 1 ) a n . （Ⅱ） 解 当 a  = 0 时，方程组系数行列式 D n ​  = 0 ，故方程组有唯一解。 由 Cramer 法则，将 D n ​ 的第一列换成 b ，得行列式 Δ 1 ​ = ​ 1 0 a 2 ​ 1 2 a 2 a ⋱ ​ 1 1 ⋱ a 2 ​ ⋱ 2 a a 2 ​ 1 2 a ​ ​ n ​ . 按第一列展开，等于 ​ 2 a a 2 ​ 1 2 a a 2 ​ 1 2 a ⋱ ​ ⋱ ⋱ a 2 ​ 1 2 a ​ ​ n − 1 ​ = D n − 1 ​ . 已知 D n − 1 ​ = n a n − 1 , 因此 x 1 ​ = D n ​ Δ 1 ​ ​ = ( n + 1 ) a n n a n − 1 ​ = ( n + 1 ) a n ​ . （Ⅲ） 解 当 a = 0 时，方程组化为 ​ 0 ​ 1 0 ​ 1 ⋱ ​ ⋱ 0 ​ 1 0 ​ ​ ​ x 1 ​ x 2 ​ ⋮ x n − 1 ​ x n ​ ​ ​ = ​ 1 0 ⋮ 0 0 ​ ​ . 系数矩阵的秩与增广矩阵的秩均为 n − 1 ，方程组有无穷多解，通解为 x = ( 0 , 1 , 0 , … , 0 ) T + k ( 1 , 0 , 0 , … , 0 ) T , 其中 k 为任意常数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n与\nY\n相互独立，\nX\n的概率分布为\nP{X=i}=31 (i=−1,0,1)\n，\nY\n的概率密度为\n\nfY(y)={1,0,0≤y1其他\n\n记\nZ=X+Y\n。\n\n(Ⅰ) 求\nP{Z≤21X=0}\n；\n\n(Ⅱ) 求\nZ\n的概率密度\nfZ(z)\n。",
    referenceAnswer: "【答案】 (Ⅰ) P { Z ≤ 2 1 ​ ​ X = 0 } = 2 1 ​ (Ⅱ) f Z ​ ( z ) = { 3 1 ​ , 0 , ​ − 1 ≤ z < 2 其他 ​ 【解析】 (1) P { Z ≤ 2 1 ​ ​ X = 0 } ​ = P ( X + Y ≤ 2 1 ​ ​ X = 0 ) = P ( X = 0 ) P ( X = 0 , Y ≤ 2 1 ​ ) ​ = P ( Y ≤ 2 1 ​ ) = ∫ 0 2 1 ​ ​ 1 d y = 2 1 ​ . ​ (2) F Z ​ ( z ) ​ = P { Z ≤ z } = P { X + Y ≤ z } = 3 1 ​ [ P { Y ≤ z + 1 } + P { Y ≤ z } + P { Y ≤ z − 1 } ] = 3 1 ​ [ F Y ​ ( z + 1 ) + F Y ​ ( z ) + F Y ​ ( z − 1 ) ] , ​ 所以 f Z ​ ( z ) = 3 1 ​ [ f Y ​ ( z + 1 ) + f Y ​ ( z ) + f Y ​ ( z − 1 ) ] = { 3 1 ​ , 0 , ​ − 1 ≤ z < 2 , otherwise . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\nX1,X2,⋯,Xn\n是总体\nN(μ,σ2)\n的简单随机样本，记\n\nXˉ=n1∑i=1nXi\n，\nS2=n−11∑i=1n(Xi−Xˉ)2\n，\nT=Xˉ2−n1S2\n。\n\n（Ⅰ）证明\nT\n是\nμ2\n的无偏估计量；\n\n（Ⅱ）当\nμ=0\n，\nσ=1\n时，求\nD(T)\n。",
    referenceAnswer: "【答案】 （Ⅰ）见解析 （Ⅱ） D ( T ) = n ( n − 1 ) 2 ​ 【解析】 (1) 因为 X ∼ N ( μ , σ 2 ) ，所以 X ˉ ∼ N ( μ , n σ 2 ​ ) ，从而 E X ˉ = μ ， D X ˉ = n σ 2 ​ 。 于是有： E ( T ) ​ = E ( X ˉ 2 − n 1 ​ S 2 ) = E X ˉ 2 − n 1 ​ E ( S 2 ) = D X ˉ + ( E X ˉ ) 2 − n 1 ​ E ( S 2 ) = n 1 ​ σ 2 + μ 2 − n 1 ​ σ 2 = μ 2 , ​ 因此 T 是 μ 2 的无偏估计量。 (2) 方法一：由 D ( T ) = E T 2 − ( ET ) 2 ，当 μ = 0 ， σ = 1 时， E ( T ) = 0 ， E ( S 2 ) = σ 2 = 1 。 计算可得： E ( X ˉ 4 ) = n 2 3 ​ , E S 4 = n − 1 n + 1 ​ , 于是： E T 2 = n 2 3 ​ − n 2 ​ ⋅ n 1 ​ ⋅ 1 + n 2 1 ​ ⋅ n − 1 n + 1 ​ = n ( n − 1 ) 2 ​ , 即 D ( T ) = n ( n − 1 ) 2 ​ 。 方法二：当 μ = 0 ， σ = 1 时，有： D ( T ) = D ( X ˉ 2 − n 1 ​ S 2 ) = D X ˉ 2 + n 2 1 ​ D S 2 . 进一步计算： D X ˉ 2 = n 2 1 ​ D ( n ​ X ˉ ) 2 = n 2 1 ​ ⋅ 2 , D S 2 = ( n − 1 ) 2 1 ​ D [ ( n − 1 ) S 2 ] = ( n − 1 ) 2 1 ​ ⋅ 2 ( n − 1 ) = n − 1 2 ​ , 所以： D ( T ) = n 2 2 ​ + n 2 1 ​ ⋅ n − 1 2 ​ = n ( n − 1 ) 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2008_math1 = {
  id: P, year: Y,
  title: '2008 年全国硕士研究生招生考试 数学（一）',
  short: '2008 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2008_math1.length,
  qids: questions2008_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
