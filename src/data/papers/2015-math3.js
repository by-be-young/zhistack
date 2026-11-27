const P = 'paper-2015-math3'
const Y = 2015
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2015-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2015 考研数学（三）真题',
  ...extra
})

export const questions2015_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\n{xn}\n是数列。下列命题中不正确的是( )",
    options: [{ key: "A", text: "若 n → ∞ lim ​ x n ​ = a ,则 n → ∞ lim ​ x 2 n ​ = n → ∞ lim ​ x 2 n + 1 ​ = a" }, { key: "B", text: "若 n → ∞ lim ​ x 2 n ​ = n → ∞ lim ​ x 2 n + 1 ​ = a ,则 n → ∞ lim ​ x n ​ = a" }, { key: "C", text: "若 n → ∞ lim ​ x n ​ = a ,则 n → ∞ lim ​ x 3 n ​ = n → ∞ lim ​ x 3 n + 1 ​ = a" }, { key: "D", text: "若 n → ∞ lim ​ x 3 n ​ = n → ∞ lim ​ x 3 n + 1 ​ = a ,则 n → ∞ lim ​ x n ​ = a" }],
    answer: ["D"],
    explain: "正确答案： D 解析 答案为 D 。本题考查数列极限与子列极限的关系。 数列 x n ​ → a （当 n → ∞ ）的充要条件是：对任意的子列 { x n k ​ ​ } ，均有 x n k ​ ​ → a （当 k → ∞ ）。因此，选项 A 、 B 、 C 均正确。 D 选项错误，因为缺少对子列 x 3 n + 2 ​ 敛散性的讨论。故选 D 。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n在\n(−∞,+∞)\n内连续，其 2 阶导函数\nf′′(x)\n的图形如右图所示，则曲线\ny=f(x)\n的拐点个数为（ ）",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 解析 根据拐点的必要条件，拐点可能是 f ′′ ( x ) 不存在的点或 f ′′ ( x ) = 0 的点处产生。因此， y = f ( x ) 有三个点可能是拐点。 根据拐点的定义，即凹凸性改变的点，二阶导函数 f ′′ ( x ) 符号发生改变的点即为拐点。从图中可知，拐点个数为 2，故选 C。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nD={(x,y)∣x2+y2≤2x,x2+y2≤2y}\n，函数\nf(x,y)\n在\nD\n上连续，则\n\nD∬f(x,y)dxdy=()",
    options: [{ key: "A", text: "∫ 0 4 π ​ ​ d θ ∫ 0 2 c o s θ ​ f ( r cos θ , r sin θ ) r d r + ∫ 4 π ​ 2 π ​ ​ d θ ∫ 0 2 s i n θ ​ f ( r cos θ , r sin θ ) r d r ." }, { key: "B", text: "∫ 0 4 π ​ ​ d θ ∫ 0 2 s i n θ ​ f ( r cos θ , r sin θ ) r d r + ∫ 4 π ​ 2 π ​ ​ d θ ∫ 0 2 c o s θ ​ f ( r cos θ , r sin θ ) r d r ." }, { key: "C", text: "2 ∫ 0 1 ​ d x ∫ 1 − 1 − x 2 ​ x ​ f ( x , y ) d y ." }, { key: "D", text: "2 ∫ 0 1 ​ d x ∫ x 2 x − x 2 ​ ​ f ( x , y ) d y ." }],
    answer: ["B"],
    explain: "正确答案： B 根据图可得，在极坐标系下该二重积分要分成两个积分区域： D 1 ​ = { ( r , θ ) ​ 0 ≤ θ ≤ 4 π ​ , 0 ≤ r ≤ 2 sin θ } D 2 ​ = { ( r , θ ) ​ 4 π ​ ≤ θ ≤ 2 π ​ , 0 ≤ r ≤ 2 cos θ } 因此，积分表达式为： D ∬ ​ f ( x , y ) d x d y ​ = ∫ 0 4 π ​ ​ d θ ∫ 0 2 s i n θ ​ f ( r cos θ , r sin θ ) r d r + ∫ 4 π ​ 2 π ​ ​ d θ ∫ 0 2 c o s θ ​ f ( r cos θ , r sin θ ) r d r ​ 故选 B。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列级数中发散的是（ ）\n\nA.n=1∑∞n21B.n=1∑∞n1C.n=1∑∞nn1D.n=1∑∞n(−1)n",
    options: [{ key: "A", text: "∑ n = 1 ∞ ​ 3 n n ​" }, { key: "B", text: "∑ n = 1 ∞ ​ n ​ 1 ​ ln ( 1 + n 1 ​ )" }, { key: "C", text: "∑ n = 2 ∞ ​ l n n ( − 1 ) n + 1 ​" }, { key: "D", text: "∑ n = 1 ∞ ​ n n n ! ​" }],
    answer: ["C"],
    explain: "正确答案： C 解析 A为正项级数，因为 n → ∞ lim ​ 3 n n ​ 3 n + 1 n + 1 ​ ​ = n → ∞ lim ​ 3 n n + 1 ​ = 3 1 ​ < 1 根据正项级数的比值判别法， n = 1 ∑ ∞ ​ 3 n n ​ 收敛。 B为正项级数，因为 n ​ 1 ​ ln ( 1 + n 1 ​ ) □ n 2 3 ​ 1 ​ 根据 P 级数收敛准则， n = 1 ∑ ∞ ​ n ​ 1 ​ ln ( 1 + n 1 ​ ) 收敛。 C中， n = 1 ∑ ∞ ​ ln n ( − 1 ) n + 1 ​ = n = 1 ∑ ∞ ​ ln n ( − 1 ) n ​ + n = 1 ∑ ∞ ​ ln n 1 ​ 根据莱布尼茨判别法， n = 1 ∑ ∞ ​ l n n ( − 1 ) n ​ 收敛，而 n = 1 ∑ ∞ ​ l n n 1 ​ 发散。因此，根据级数收敛定义， n = 1 ∑ ∞ ​ l n n ( − 1 ) n + 1 ​ 发散。 D为正项级数，因为 n → ∞ lim ​ n n n ! ​ ( n + 1 ) n + 1 ( n + 1 )! ​ ​ = n → ∞ lim ​ n ! ( n + 1 )! ​ ⋅ ( n + 1 ) n + 1 n n ​ = n → ∞ lim ​ ( n + 1 n ​ ) n = e 1 ​ < 1 根据正项级数的比值判别法， n = 1 ∑ ∞ ​ n n n ! ​ 收敛。 综上，选 C 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设矩阵\nA=1111241aa2\n，\nb=1dd2\n。若集合\nΩ={1,2}\n，则线性方程组\nAx=b\n有无穷多解的充分必要条件为( )",
    options: [{ key: "A", text: "a ∈ / Ω , d ∈ / Ω" }, { key: "B", text: "a ∈ / Ω , d ∈ Ω" }, { key: "C", text: "a ∈ Ω , d ∈ / Ω" }, { key: "D", text: "a ∈ Ω , d ∈ Ω" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 增广矩阵的初等行变换过程： ( A , b ) = ​ 1 1 1 ​ 1 2 4 ​ 1 a a 2 ​ 1 d d 2 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 1 a − 1 ( a − 1 ) ( a − 2 ) ​ 1 d − 1 ( d − 1 ) ( d − 2 ) ​ ​ 由 r ( A ) = r ( A , b ) < 3 ，可得 a = 1 或 a = 2 ，同时 d = 1 或 d = 2 。 故选（D）。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型\nf(x1,x2,x3)\n在正交变换\nx=Py\n下的标准形为\n2y12+y22−y32\n，其中\nP=(e1,e2,e3)\n。若\nQ=(e1,−e3,e2)\n，则\nf(x1,x2,x3)\n在正交变换\nx=Qy\n下的标准形为( )",
    options: [{ key: "A", text: "2 y 2 1 ​ − y 2 2 ​ + y 2 3 ​" }, { key: "B", text: "2 y 2 1 ​ + y 2 2 ​ − y 2 3 ​" }, { key: "C", text: "2 y 2 1 ​ − y 2 2 ​ − y 2 3 ​" }, { key: "D", text: "2 y 2 1 ​ + y 2 2 ​ + y 2 3 ​" }],
    answer: ["A"],
    explain: "正确答案： A 解析 由 x = P y ，故 f = x T A x = y T ( P T A P ) y = 2 y 1 2 ​ + y 2 2 ​ − y 3 2 ​ 且 P T A P = ​ 2 0 0 ​ 0 1 0 ​ 0 0 − 1 ​ ​ 又因为 Q = P ​ 1 0 0 ​ 0 0 − 1 ​ 0 1 0 ​ ​ = PC 故有 Q T A Q = C T ( P T A P ) C = ​ 2 0 0 ​ 0 − 1 0 ​ 0 0 1 ​ ​ 所以 f = x T A x = y T ( Q T A Q ) y = 2 y 1 2 ​ − y 2 2 ​ + y 3 2 ​ 选（A）。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若\nA,B\n为任意两个随机事件，则（ ）",
    options: [{ key: "A", text: "P ( A B ) ≤ P ( A ) P ( B )" }, { key: "B", text: "P ( A B ) ≥ P ( A ) P ( B )" }, { key: "C", text: "P ( A B ) ≤ 2 P ( A ) + P ( B ) ​" }, { key: "D", text: "P ( A B ) ≥ 2 P ( A ) + P ( B ) ​" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】由于 A B ⊂ A ， A B ⊂ B ，按概率的基本性质，我们有： P ( A B ) ≤ P ( A ) 且 P ( A B ) ≤ P ( B ) 从而 P ( A B ) ≤ P ( A ) ⋅ P ( B ) ​ ≤ 2 P ( A ) + P ( B ) ​ 选 (C)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设总体\nX∼B(m,θ)\n，\nX1,X2,⋯,Xn\n为来自该总体的简单随机样本，\nX\n为样本均值，则\n\nE[i=1∑n(Xi−X)2]= ",
    options: [{ key: "A", text: "( m − 1 ) n θ ( 1 − θ )" }, { key: "B", text: "m ( n − 1 ) θ ( 1 − θ )" }, { key: "C", text: "( m − 1 ) ( n − 1 ) θ ( 1 − θ )" }, { key: "D", text: "mn θ ( 1 − θ )" }],
    answer: ["B"],
    explain: "正确答案： B 解析 根据样本方差的性质： S 2 = n − 1 1 ​ i = 1 ∑ n ​ ( X i ​ − X ) 2 其期望满足 E ( S 2 ) = D ( X ) ，而总体方差 D ( X ) = m θ ( 1 − θ ) 。因此： E [ i = 1 ∑ n ​ ( X i ​ − X ) 2 ] = ( n − 1 ) E ( S 2 ) = m ( n − 1 ) θ ( 1 − θ ) 最终答案为 B ​ 。 注 X 表示样本均值。上述推导利用了样本方差的期望性质，结合总体方差求解相关期望。这一方法在数理统计中常用于参数估计和数字特征计算。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\nx→0limx2ln(cosx)=",
    answerText: "】 − 2 1 ​ 【",
    referenceAnswer: "【答案】 − 2 1 ​ 【解析】 原极限可以表示为： x → 0 lim ​ x 2 ln ( 1 + cos x − 1 ) ​ 利用等价无穷小替换，当 x → 0 时， ln ( 1 + t ) ≈ t （其中 t = cos x − 1 ），因此上式可化简为： x → 0 lim ​ x 2 cos x − 1 ​ 进一步利用泰勒展开或已知极限公式， cos x ≈ 1 − 2 x 2 ​ ，代入得： x → 0 lim ​ x 2 − 2 x 2 ​ ​ = − 2 1 ​ 最终结果为： − 2 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(x)\n连续，\nφ(x)=∫0x2xf(t)dt\n。若\nφ(1)=1\n，\nφ′(1)=5\n，则\nf(1)=",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 因为 f ( x ) 连续，所以 φ ( x ) 可导，因此 φ ′ ( x ) = ∫ 0 x 2 ​ f ( t ) d t + 2 x 2 f ( x 2 ) 因为 φ ( 1 ) = 1 ，所以 φ ( 1 ) = ∫ 0 1 ​ f ( t ) d t = 1 又因为 φ ′ ( 1 ) = 5 ，所以 φ ′ ( 1 ) = ∫ 0 1 ​ f ( t ) d t + 2 f ( 1 ) = 5 故 f ( 1 ) = 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若函数\nz=z(x,y)\n由方程\nex+2y+3z+xyz=1\n确定，则\ndz∣(0,0)=",
    answerText: "】 d z ∣ ( 0 , 0 ) ​ = − 3 1 ​ d x − 3 2 ​ d y 【",
    referenceAnswer: "【答案】 d z ∣ ( 0 , 0 ) ​ = − 3 1 ​ d x − 3 2 ​ d y 【解析】 当 x = 0 ， y = 0 时，代入方程 e x + 2 y + 3 z + x yz = 1 ，得到 z = 0 。 对 e x + 2 y + 3 z + x yz = 1 求微分，得到： d ( e x + 2 y + 3 z + x yz ) = e x + 2 y + 3 z d ( x + 2 y + 3 z ) + d ( x yz ) 进一步展开为： e x + 2 y + 3 z ( d x + 2 d y + 3 d z ) + yz d x + x z d y + x y d z = 0 将 x = 0 ， y = 0 ， z = 0 代入上式，得到： d x + 2 d y + 3 d z = 0 因此， d z ∣ ( 0 , 0 ) ​ = − 3 1 ​ d x − 3 2 ​ d y 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\ny=y(x)\n是微分方程\ny′′+y′−2y=0\n的解，且在\nx=0\n处\ny(x)\n取得极值\n3\n，则\ny(x)=",
    answerText: "】 y ( x ) = e − 2 x + 2 e x 【",
    referenceAnswer: "【答案】 y ( x ) = e − 2 x + 2 e x 【解析】 微分方程 y ′′ + y ′ − 2 y = 0 的特征方程为 λ 2 + λ − 2 = 0 特征根为 λ = − 2 和 λ = 1 ，因此该齐次微分方程的通解为 y ( x ) = C 1 ​ e − 2 x + C 2 ​ e x 由于 y ( x ) 可导， x = 0 为驻点，即满足 y ( 0 ) = 3 , y ′ ( 0 ) = 0 代入解得 C 1 ​ = 1 ， C 2 ​ = 2 ，故特解为 y ( x ) = e − 2 x + 2 e x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\n3\n阶矩阵\nA\n的特征值为\n2\n，\n−2\n，\n1\n，\nB=A2−A+E\n，其中\nE\n为\n3\n阶单位矩阵，则行列式\n∣B∣=\n______。",
    answerText: "】 21 【",
    referenceAnswer: "【答案】 21 【解析】 A 的所有特征值为 2 , − 2 , 1 。 B 的所有特征值为 3 , 7 , 1 。 所以 ∣ B ∣ = 3 × 7 × 1 = 21",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二维随机变量\n(X,Y)\n服从正态分布\nN(1,0;1,1;0)\n，则\nP{XY−Y0}=",
    answerText: "】 2 1 ​ 【",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 由题设知， X ∼ N ( 1 , 1 ) ， Y ∼ N ( 0 , 1 ) ，而且 X 、 Y 相互独立，从而 P { X Y − Y < 0 } ​ = P {( X − 1 ) Y < 0 } = P { X − 1 > 0 , Y < 0 } + P { X − 1 < 0 , Y > 0 } = P { X > 1 } P { Y < 0 } + P { X < 1 } P { Y > 0 } = 2 1 ​ × 2 1 ​ + 2 1 ​ × 2 1 ​ = 2 1 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(x)=x+aln(1+x)+bxsinx\n，\ng(x)=kx3\n。若\nf(x)\n与\ng(x)\n在\nx→0\n时是等价无穷小，求\na\n，\nb\n，\nk\n的值。",
    referenceAnswer: "【答案】 a = − 1 , b = − 2 1 ​ , k = − 3 1 ​ 【解析】 已知泰勒展开式： ln ( 1 + x ) = x − 2 x 2 ​ + 3 x 3 ​ + o ( x 3 ) sin x = x − 6 x 3 ​ + o ( x 3 ) 将 f ( x ) 和 g ( x ) 代入极限表达式： 1 = x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ k x 3 x + a ln ( 1 + x ) + b x sin x ​ 展开并整理分子： x + a ( x − 2 x 2 ​ + 3 x 3 ​ ) + b x ( x − 6 x 3 ​ ) + o ( x 3 ) 合并同类项后得到： ( 1 + a ) x + ( b − 2 a ​ ) x 2 + ( 3 a ​ − 6 b ​ ) x 3 + o ( x 3 ) 为使极限存在且为 1，各阶系数需满足： ⎩ ⎨ ⎧ ​ 1 + a = 0 b − 2 a ​ = 0 3 a ​ − 6 b ​ = k ​ 解得： ⎩ ⎨ ⎧ ​ a = − 1 b = − 2 1 ​ k = − 3 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算二重积分\n\nD∬x(x+y)dxdy,\n\n其中积分区域\nD\n定义为\n\nD={(x,y)∣x2+y2≤2,y≥x2}.",
    referenceAnswer: "【答案】 4 π ​ − 5 2 ​ 【解析】 D ∬ ​ x ( x + y ) d x d y ​ = D ∬ ​ x 2 d x d y = 2 ∫ 0 1 ​ d x ∫ x 2 2 − x 2 ​ ​ x 2 d y = 2 ∫ 0 1 ​ x 2 ( 2 − x 2 ​ − x 2 ) d x = 2 ∫ 0 1 ​ x 2 2 − x 2 ​ d x − 5 2 ​ = 2 ∫ 0 4 π ​ ​ 2 sin 2 t ⋅ 2 cos 2 t d t − 5 2 ​ = 2 ∫ 0 4 π ​ ​ sin 2 2 t d t − 5 2 ​ = ∫ 0 2 π ​ ​ sin 2 u d u − 5 2 ​ = 4 π ​ − 5 2 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n为了实现利润最大化，厂商需要对某商品确定其定价模型。设\nQ\n为该商品的需求量，\np\n为价格，\nMC\n为边际成本，\nη\n为需求弹性（\nη>0\n）。\n\n(I) 证明定价模型为\n\np=1−η1MC.\n\n(II) 若该商品的成本函数为\nC(Q)=1600+Q2\n，需求函数为\nQ=40−p\n，试由（Ⅰ）中的定价模型确定此商品的价格。",
    referenceAnswer: "【答案】 (I) 见解析 (II) P = 30 【解析】 (I) 利润函数为 L ( Q ) = R ( Q ) − C ( Q ) = PQ − C ( Q ) 两边对 Q 求导，得 d Q d L ​ = P + Q d Q d P ​ − C ′ ( Q ) = P + Q d Q d P ​ − MC 当 d Q d L ​ = 0 时，利润 L ( Q ) 最大。 由需求价格弹性 η = − Q P ​ ⋅ d P d Q ​ ，可得 d Q d P ​ = − η 1 ​ ⋅ Q P ​ 因此，利润最大化条件为 P = 1 − η 1 ​ MC ​ (II) 已知边际成本 MC = C ′ ( Q ) = 2 Q = 2 ( 40 − P ) ，需求价格弹性为 η = 40 − P P ​ 代入 (I) 的定价模型，得 P = 1 − P 40 − P ​ 2 ( 40 − P ) ​ 解得 P = 30",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n设函数\nf(x)\n在定义域\nI\n上的导数大于零。若对任意的\nx0∈I\n，曲线\ny=f(x)\n在点\n(x0,f(x0))\n处的切线与直线\nx=x0\n及\nx\n轴所围成区域的面积恒为 4，且\nf(0)=2\n，求\nf(x)\n的表达式。",
    referenceAnswer: "【答案】 f ( x ) = 4 − x 8 ​ 【解析】 曲线的切线方程为 y − f ( x 0 ​ ) = f ′ ( x 0 ​ ) ( x − x 0 ​ ) 切线与 x 轴的交点为 ( x 0 ​ − f ′ ( x 0 ​ ) f ( x 0 ​ ) ​ , 0 ) 故面积为 S = 2 1 ​ f ′ ( x 0 ​ ) f 2 ( x 0 ​ ) ​ = 4 因此， f ( x ) 满足的方程为 f 2 ( x ) = 8 f ′ ( x ) 此为可分离变量的微分方程，解得 f ( x ) = x + C − 8 ​ 又由于 f ( 0 ) = 2 ，代入可得 C = − 4 从而 f ( x ) = 4 − x 8 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n(I) 设函数\nu(x)\n、\nv(x)\n可导，利用导数定义证明\n\n[u(x)v(x)]′=u′(x)v(x)+u(x)v′(x)\n\n(II) 设函数\nu1(x)\n、\nu2(x)\n、\n⋯\n、\nun(x)\n可导，\nf(x)=u1(x)u2(x)⋯un(x)\n，写出\nf(x)\n的求导公式。",
    referenceAnswer: "【答案】 f ′ ( x ) ​ = [ u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) ] ′ = u 1 ′ ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) + u 1 ​ ( x ) u 2 ′ ​ ( x ) ⋯ u n ​ ( x ) + ⋯ + u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ′ ​ ( x ) ​ 【解析】 （I） [ u ( x ) v ( x ) ] ′ ​ = h → 0 lim ​ h u ( x + h ) v ( x + h ) − u ( x ) v ( x ) ​ = h → 0 lim ​ h u ( x + h ) v ( x + h ) − u ( x + h ) v ( x ) + u ( x + h ) v ( x ) − u ( x ) v ( x ) ​ = h → 0 lim ​ u ( x + h ) h v ( x + h ) − v ( x ) ​ + h → 0 lim ​ h u ( x + h ) − u ( x ) ​ v ( x ) = u ( x ) v ′ ( x ) + u ′ ( x ) v ( x ) ​ （II）由题意得 f ′ ( x ) ​ = [ u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) ] ′ = u 1 ′ ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) + u 1 ​ ( x ) u 2 ′ ​ ( x ) ⋯ u n ​ ( x ) + ⋯ + u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ′ ​ ( x ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11分)\n\n设矩阵\nA=a101a10−1a\n，且\nA3=O\n。\n\n(Ⅰ) 求\na\n的值；\n\n(Ⅱ) 若矩阵\nX\n满足\nX−XA2−AX+AXA2=E\n，其中\nE\n为3阶单位矩阵，求\nX\n。",
    referenceAnswer: "【答案】 a = 0 ， X = ​ 3 1 2 ​ 1 1 1 ​ − 2 − 1 − 1 ​ ​ 【解析】 (I) A 3 = O ⇒ ∣ A ∣ = 0 ⇒ ​ a 1 0 ​ 1 a 1 ​ 0 − 1 a ​ ​ = ​ 0 1 − a 2 − a ​ 1 a 1 ​ 0 − 1 a ​ ​ = a 3 = 0 ⇒ a = 0 (II) 由题意知 X − X A 2 − A X + A X A 2 = E ⇒ X ( E − A 2 ) − A X ( E − A 2 ) = E ⇒ ( E − A ) X ( E − A 2 ) = E ⇒ X = ( E − A ) − 1 ( E − A 2 ) − 1 = [( E − A 2 ) ( E − A ) ] − 1 ⇒ X = ( E − A 2 − A ) − 1 E − A 2 − A = ​ 0 − 1 − 1 ​ − 1 1 − 1 ​ 1 1 2 ​ ​ ​ 0 − 1 − 1 ​ − 1 1 − 1 ​ 1 1 2 ​ ∣ ∣ ∣ ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 − 1 ​ − 1 − 1 − 1 ​ − 1 1 2 ​ ∣ ∣ ∣ ​ 0 1 0 ​ − 1 0 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 1 1 − 2 ​ − 1 − 1 1 ​ ∣ ∣ ∣ ​ 0 − 1 0 ​ − 1 0 − 1 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 1 1 0 ​ − 1 − 1 − 1 ​ ∣ ∣ ∣ ​ 0 − 1 − 2 ​ − 1 0 − 1 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 1 1 0 ​ 0 0 1 ​ ∣ ∣ ∣ ​ 2 1 2 ​ 0 − 1 1 ​ − 1 1 − 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ∣ ∣ ∣ ​ 3 1 2 ​ 1 1 1 ​ − 2 − 1 − 1 ​ ​ ∴ X = ​ 3 1 2 ​ 1 1 1 ​ − 2 − 1 − 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分 11 分)\n\n设矩阵\nA=0−1123−2−3−3a\n相似于矩阵\nB=100−2b3001\n。\n\n(Ⅰ) 求\na\n、\nb\n的值；\n\n(Ⅱ) 求可逆矩阵\nP\n，使\nP−1AP\n为对角矩阵。",
    referenceAnswer: "【答案】 a = 4 , b = 5 , P = ​ 2 1 0 ​ − 3 0 1 ​ − 1 − 1 1 ​ ​ 【解析】 (1) A ∼ B ⇒ tr ( A ) = tr ( B ) ⇒ 3 + a = 1 + b + 1 ∣ A ∣ = ∣ B ∣ ⇒ ​ 0 − 1 1 ​ 2 3 − 2 ​ − 3 − 3 a ​ ​ = ​ 1 0 0 ​ − 2 b 3 ​ 0 0 1 ​ ​ 解得 { a − b = − 1 2 a − b = 3 ​ ⇒ { a = 4 b = 5 ​ 因此 A = ​ 0 − 1 1 ​ 2 3 − 2 ​ − 3 − 3 3 ​ ​ = ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ + ​ − 1 − 1 1 ​ 2 2 − 2 ​ − 3 − 3 3 ​ ​ = E + C 其中 C = ​ − 1 − 1 1 ​ 2 2 − 2 ​ − 3 − 3 3 ​ ​ = ​ − 1 − 1 1 ​ ​ ( 1 ​ − 2 ​ 3 ​ ) 矩阵 C 的特征值为 λ 1 ​ = λ 2 ​ = 0 , λ 3 ​ = 4 。 当 λ = 0 时， ( 0 E − C ) x = 0 的基础解系为 ξ 1 ​ = ( 2 , 1 , 0 ) T , ξ 2 ​ = ( − 3 , 0 , 1 ) T 当 λ = 4 时， ( 4 E − C ) x = 0 的基础解系为 ξ 3 ​ = ( − 1 , − 1 , 1 ) T 矩阵 A 的特征值为 λ A ​ = 1 + λ C ​ ，即 1 , 1 , 5 。 令 P = ( ξ 1 ​ , ξ 2 ​ , ξ 3 ​ ) = ​ 2 1 0 ​ − 3 0 1 ​ − 1 − 1 1 ​ ​ 则有 P − 1 A P = ​ 1 ​ 1 ​ 5 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）\n\n设随机变量\nX\n的概率密度为\n\nf(x)={2−xln2,0,x>0,x≤0.\n\n对\nX\n进行独立重复的观测，直到第2个大于3的观测值出现时停止，记\nY\n为观测次数。\n\n(Ⅰ) 求\nY\n的概率分布；\n\n(Ⅱ) 求\nE(Y)\n。",
    referenceAnswer: "【答案】 (I) P { Y = n } = C n − 1 1 ​ p ( 1 − p ) n − 2 p = ( n − 1 ) ( 8 1 ​ ) 2 ( 8 7 ​ ) n − 2 , n = 2 , 3 , ⋯ (II) E ( Y ) = 16 【解析】 (I) 记 p 为观测值大于 3 的概率，则 p = P ( X > 3 ) = ∫ 3 + ∞ ​ 2 − x ln 2 d x = 8 1 ​ 从而 P { Y = n } = C n − 1 1 ​ p ( 1 − p ) n − 2 p = ( n − 1 ) ( 8 1 ​ ) 2 ( 8 7 ​ ) n − 2 , n = 2 , 3 , ⋯ 为 Y 的概率分布。 (II) 法一：分解法 将随机变量 Y 分解成 Y = M + N 两个过程，其中 M 表示从 1 到 n （ n < k ）次试验中观测值大于 3 首次发生， N 表示从 n + 1 次到第 k 次试验中观测值大于 3 首次发生。 则 M ∼ G e ( n , p ) , N ∼ G e ( k − n , p ) （注： G e 表示几何分布） 所以 E ( Y ) = E ( M + N ) = E ( M ) + E ( N ) = p 1 ​ + p 1 ​ = p 2 ​ = 8 1 ​ 2 ​ = 16 法二：直接计算 E ( Y ) = n = 2 ∑ ∞ ​ n ⋅ P { Y = n } = n = 2 ∑ ∞ ​ n ⋅ ( n − 1 ) ( 8 1 ​ ) 2 ( 8 7 ​ ) n − 2 记 S 1 ​ ( x ) = n = 2 ∑ ∞ ​ n ⋅ ( n − 1 ) x n − 2 , − 1 < x < 1 则 S 1 ​ ( x ) = n = 2 ∑ ∞ ​ n ⋅ ( n − 1 ) x n − 2 = ( n = 2 ∑ ∞ ​ n ⋅ x n − 1 ) ′ = ( n = 2 ∑ ∞ ​ x n ) ′′ = ( 1 − x ) 3 2 ​ S 2 ​ ( x ) = n = 2 ∑ ∞ ​ n ⋅ ( n − 1 ) x n − 1 = x S 1 ​ ( x ) = ( 1 − x ) 3 2 x ​ S 3 ​ ( x ) = n = 2 ∑ ∞ ​ n ⋅ ( n − 1 ) x n = x 2 S 1 ​ ( x ) = ( 1 − x ) 3 2 x 2 ​ ​ 所以 S ( x ) = S 1 ​ ( x ) − 2 S 2 ​ ( x ) + S 3 ​ ( x ) = ( 1 − x ) 3 2 − 4 x + 2 x 2 ​ = 1 − x 2 ​ 从而 E ( Y ) = S ( 8 7 ​ ) = 16",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率密度为\n\nf(x;θ)=⎩⎨⎧1−θ1,0,θ⩽x⩽1,其他,\n\n其中\nθ\n为未知参数。\nX1,X2,⋯,Xn\n为来自该总体的简单随机样本。\n\n(Ⅰ) 求\nθ\n的矩估计量；\n\n(Ⅱ) 求\nθ\n的最大似然估计量。",
    referenceAnswer: "【答案】 (I) θ ^ = 2 X − 1 ，其中 X = n 1 ​ ∑ i = 1 n ​ X i ​ 。 (II) θ ^ = min { X 1 ​ , X 2 ​ , ⋯ , X n ​ } 。 【解析】 (I) 计算期望： E ( X ) = ∫ − ∞ + ∞ ​ x f ( x ; θ ) d x = ∫ θ 1 ​ x ⋅ 1 − θ 1 ​ d x = 2 1 + θ ​ 令 E ( X ) = X ，即 2 1 + θ ​ = X 解得矩估计量： θ ^ = 2 X − 1 其中 X = n 1 ​ ∑ i = 1 n ​ X i ​ 。 (II) 似然函数： L ( θ ) = i = 1 ∏ n ​ f ( x i ​ ; θ ) = ⎩ ⎨ ⎧ ​ ( 1 − θ 1 ​ ) n , 0 , ​ θ ≤ x i ​ ≤ 1 otherwise ​ 当 θ ≤ x i ​ ≤ 1 时： L ( θ ) = i = 1 ∏ n ​ 1 − θ 1 ​ = ( 1 − θ 1 ​ ) n 对数似然函数： ln L ( θ ) = − n ln ( 1 − θ ) 求导： d θ d ln L ( θ ) ​ = 1 − θ n ​ 由于导数关于 θ 单调增加，最大似然估计量为： θ ^ = min { X 1 ​ , X 2 ​ , … , X n ​ }",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2015_math3 = {
  id: P, year: Y,
  title: '2015 年全国硕士研究生招生考试 数学（三）',
  short: '2015 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2015_math3.length,
  qids: questions2015_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
