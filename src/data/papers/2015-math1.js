const P = 'paper-2015-math1'
const Y = 2015
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2015-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2015 考研数学（一）真题',
  ...extra
})

export const questions2015_math1 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n在\n(−∞,+∞)\n上连续，其二阶导数\nf′′(x)\n的图形如右图所示，则曲线\ny=f(x)\n在\n(−∞,+∞)\n的拐点个数为\n\n",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 对于连续函数的曲线而言，拐点处的二阶导数等于零或者不存在。 从图上可以看出有两个二阶导数等于零的点，以及一个二阶导数不存在的点 x = 0 。 对于这三个点，左边二阶导数等于零的点的两侧，二阶导数都是正的，因此对应的点不是拐点。 而另外两个点的两侧，二阶导数是异号的，对应的点才是拐点。 所以应该选 (C)。"
  }),
  base(2, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\ny=21e2x+(x−31)ex\n是二阶常系数非齐次线性微分方程\ny′′+ay′+by=cex\n的一个特解，则",
    options: [{ key: "A", text: "a = − 3 , b = 2 , c = − 1" }, { key: "B", text: "a = 3 , b = 2 , c = − 1" }, { key: "C", text: "a = − 3 , b = 2 , c = 1" }, { key: "D", text: "a = 3 , b = 2 , c = 1" }],
    answer: ["A"],
    explain: "正确答案： A 线性微分方程的特征方程为 r 2 + a r + b = 0 ，由特解可知 r 1 ​ = 2 一定是特征方程的一个实根。 如果 r 2 ​ = 1 不是特征方程的实根，则对应于 f ( x ) = c e x 的特解形式应为 Q ( x ) e x ，其中 Q ( x ) 应是一个零次多项式，即常数，这与条件不符。 因此， r 2 ​ = 1 也是特征方程的另一个实根。由韦达定理可得： a = − ( 2 + 1 ) = − 3 , b = 2 × 1 = 2. 同时， y ∗ = x e x 是原方程的一个解，代入可得 c = − 1 ，应选 (A)。"
  }),
  base(3, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若级数\n∑n=1∞an\n条件收敛，则\nx=3\n与\nx=3\n对于幂级数\n∑n=1∞nan(x−1)n\n的",
    options: [{ key: "A", text: "收敛点，收敛点" }, { key: "B", text: "收敛点，发散点" }, { key: "C", text: "发散点，收敛点" }, { key: "D", text: "发散点，发散点" }],
    answer: ["B"],
    explain: "正确答案： B 设幂级数 ∑ n = 1 ∞ ​ a n ​ 条件收敛，表明幂级数 ∑ n = 1 ∞ ​ a n ​ x n 在 x = 1 处条件收敛，即该幂级数的收敛半径为 1 ，故有： n → ∞ lim ​ ​ a n ​ a n + 1 ​ ​ ​ = 1. 因此，对于幂级数 ∑ n = 1 ∞ ​ n a n ​ ( x − 1 ) n ，其收敛半径为： R = n → ∞ lim ​ ​ ( n + 1 ) a n + 1 ​ n a n ​ ​ ​ = 1 , 收敛区间为 ( 0 , 2 ) 。 显然， x = 3 ​ 位于收敛区间内，为收敛点；而 x = 3 不在收敛区间内，为发散点。 因此，应选 (B)。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nD\n是第一象限中由曲线\n2xy=1\n，\n4xy=1\n与直线\ny=x\n，\ny=3x\n所围成的平面区域，函数\nf(x,y)\n在\nD\n上连续，则\n\n∬Df(x,y)dxdy\n\n化为极坐标下的二次积分是",
    options: [{ key: "A", text: "∫ 4 π ​ 3 π ​ ​ d θ ∫ 2 s i n 2 θ ​ 1 ​ s i n 2 θ ​ 1 ​ ​ f ( r cos θ , r sin θ ) r d r" }, { key: "B", text: "∫ 4 π ​ 3 π ​ ​ d θ ∫ s i n 2 θ ​ 1 ​ 2 s i n 2 θ ​ 1 ​ ​ f ( r cos θ , r sin θ ) r d r" }, { key: "C", text: "∫ 4 π ​ 3 π ​ ​ d θ ∫ 2 s i n θ ​ 1 ​ s i n θ ​ 1 ​ ​ f ( r cos θ , r sin θ ) d r" }, { key: "D", text: "∫ 4 π ​ 3 π ​ ​ d θ ∫ s i n θ ​ 1 ​ 2 s i n θ ​ 1 ​ ​ f ( r cos θ , r sin θ ) d r" }],
    answer: ["A"],
    explain: "正确答案： A 积分区域如图所示，化成极坐标方程： 曲线 2 x y = 1 化为 r 2 sin 2 θ = 1 ，即 r = 2 s i n 2 θ ​ 1 ​ 。 曲线 4 x y = 1 化为 r 2 sin 2 θ = 2 1 ​ ，即 r = s i n 2 θ ​ 1 ​ 。 直线 y = x 对应 θ = 4 π ​ ，直线 y = 3 ​ x 对应 θ = 3 π ​ 。 因此，积分表达式为： ∬ D ​ f ( x , y ) d x d y = ∫ 4 π ​ 3 π ​ ​ d θ ∫ 2 s i n 2 θ ​ 1 ​ s i n 2 θ ​ 1 ​ ​ f ( r cos θ , r sin θ ) r d r 应该选 (A)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设矩阵\nA=1111241aa2\n，\nb=1dd2\n，若集合\nΩ={1,2}\n，则线性方程组\nAx=b\n有无穷多解的充分必要条件是",
    options: [{ key: "A", text: "d ∈ / Ω" }, { key: "B", text: "d ∈ Ω" }, { key: "C", text: "d ∈ / Ω 且 a ∈ Ω" }, { key: "D", text: "d ∈ Ω 且 a ∈ Ω" }],
    answer: ["D"],
    explain: "正确答案： D 对线性方程组的增广矩阵进行初等行变换：方程组有无穷多解的充分必要条件是 r ( A ) = r ( A , b ) < 3 ，即 ( a − 1 ) ( a − 2 ) = 0 且 ( d − 1 ) ( d − 2 ) = 0 同时成立。因此，应选 (D)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型\nf(x1,x2,x3)\n在正交变换\nx=Py\n下的标准形为\n2y12+y22−y32\n，其中\nP=(e1,e2,e3)\n，若\nQ=(e1,−e3,e2)\n，则\nf(x1,x2,x3)\n在\nx=Qy\n下的标准形为",
    options: [{ key: "A", text: "2 y 1 2 ​ − y 2 2 ​ + y 3 2 ​" }, { key: "B", text: "2 y 1 2 ​ + y 2 2 ​ − y 3 2 ​" }, { key: "C", text: "2 y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }, { key: "D", text: "2 y 1 2 ​ + y 2 2 ​ + y 3 2 ​" }],
    answer: ["A"],
    explain: "正确答案： A 设 Q = ( e 1 ​ , − e 3 ​ , e 2 ​ ) = ( e 1 ​ , e 2 ​ , e 3 ​ ) ​ 1 0 0 ​ 0 0 − 1 ​ 0 1 0 ​ ​ = P ​ 1 0 0 ​ 0 0 − 1 ​ 0 1 0 ​ ​ ，则 Q T = ​ 1 0 0 ​ 0 0 1 ​ 0 − 1 0 ​ ​ P T 。 已知 f = x T A x = y T P T A P y = y T ​ 2 ​ 1 ​ − 1 ​ ​ y ，因此： Q T A Q ​ = ​ 1 0 0 ​ 0 0 1 ​ 0 − 1 0 ​ ​ P T A P ​ 1 0 0 ​ 0 0 − 1 ​ 0 1 0 ​ ​ = ​ 1 0 0 ​ 0 0 1 ​ 0 − 1 0 ​ ​ ​ 2 ​ 1 ​ − 1 ​ ​ ​ 1 0 0 ​ 0 0 − 1 ​ 0 1 0 ​ ​ = ​ 2 ​ − 1 ​ 1 ​ ​ . ​ 故选择 (A)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若\nA\n，\nB\n为任意两个随机事件，则",
    options: [{ key: "A", text: "P ( A B ) ≤ P ( A ) P ( B )" }, { key: "B", text: "P ( A B ) ≥ P ( A ) P ( B )" }, { key: "C", text: "P ( A B ) ≥ 2 P ( A ) + P ( B ) ​" }, { key: "D", text: "P ( A B ) ≥ 2 P ( A ) + P ( B ) ​" }],
    answer: ["C"],
    explain: "正确答案： C 因为 P ( A ) ≥ P ( A B ) 且 P ( B ) ≥ P ( A B ) ，所以 2 P ( A B ) ≤ P ( A ) + P ( B ) ，即 P ( A B ) ≤ 2 P ( A ) + P ( B ) ​ 。 快速选 (C)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n、\nY\n不相关，且\nEX=2\n，\nEY=1\n，\nDX=3\n，则\nE(X(X+Y−2))=()\n。",
    options: [{ key: "A", text: "− 3" }, { key: "B", text: "3" }, { key: "C", text: "− 5" }, { key: "D", text: "5" }],
    answer: ["D"],
    explain: "正确答案： D 首先，计算期望 E ( X ( X + Y − 2 )) ： E ( X ( X + Y − 2 )) = E ( X 2 ) + E ( X Y ) − 2 E ( X ) 接着，利用方差与期望的关系 D ( X ) = E ( X 2 ) − ( E ( X ) ) 2 ，代入 E ( X 2 ) = D ( X ) + ( E ( X ) ) 2 ： E ( X ( X + Y − 2 )) = D ( X ) + ( E ( X ) ) 2 + E ( X Y ) − 2 E ( X ) 由于 X 与 Y 相互独立，有 E ( X Y ) = E ( X ) E ( Y ) ，代入已知数值 D ( X ) = 3 ， E ( X ) = 2 ， E ( Y ) = 1 ： E ( X ( X + Y − 2 )) = 3 + 2 2 + 2 × 1 − 2 × 2 计算得： 3 + 4 + 2 − 4 = 5 因此，答案为 5 ，应选择 (D)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\nx→0limx2ln(cosx)=\n______",
    answerText: "】 − 2 1 ​ 【",
    referenceAnswer: "【答案】 − 2 1 ​ 【解析】 lim x → 0 ​ x 2 l n ( c o s x ) ​ = lim x → 0 ​ 2 x − t a n x ​ = − 2 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n∫−2π2π(1+cosxsinx+∣x∣)dx=\n______.",
    answerText: "】 4 π 2 ​ 【",
    referenceAnswer: "【答案】 4 π 2 ​ 【解析】 只要注意 1 + c o s x s i n x ​ 为奇函数，在对称区间上积分为零。 所以 ∫ − 2 π ​ 2 π ​ ​ ( 1 + c o s x s i n x ​ + ∣ x ∣ ) d x = 2 ∫ 0 2 π ​ ​ x d x = 4 π 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若函数\nz=z(x,y)\n是由方程\nez+xyz+x+cosx=2\n确定，则\ndz∣(0,1)=",
    answerText: "】 − d x 【",
    referenceAnswer: "【答案】 − d x 【解析】 我们已知函数 F ( x , y , z ) = e z + x yz + x + cos x − 2 其偏导数为： F x ′ ​ ( x , y , z ) = yz + 1 − sin x , F y ′ ​ ( x , y , z ) = x z , F z ′ ​ ( x , y , z ) = e z + x y 在点 ( x , y , z ) = ( 0 , 1 , 0 ) 处，有： F x ′ ​ ( 0 , 1 , 0 ) = 1 ⋅ 0 + 1 − sin 0 = 1 , F y ′ ​ ( 0 , 1 , 0 ) = 0 , F z ′ ​ ( 0 , 1 , 0 ) = e 0 + 0 ⋅ 1 = 1 由隐函数求导公式： ∂ x ∂ z ​ ​ ( 0 , 1 ) ​ = − F z ​ ( 0 , 1 , 0 ) F x ​ ( 0 , 1 , 0 ) ​ = − 1 , ∂ y ∂ z ​ ​ ( 0 , 1 ) ​ = − F z ​ ( 0 , 1 , 0 ) F y ​ ( 0 , 1 , 0 ) ​ = 0 因此， d z ∣ ( 0 , 1 ) ​ = − 1 ⋅ d x + 0 ⋅ d y = − d x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nΩ\n是由平面\nx+y+z=1\n和三个坐标面围成的空间区域，则\n\n∭Ω(x+2y+3z)dxdydz=",
    answerText: "】 4 1 ​ 【",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 【详解】注意在积分区域内，三个变量 x 、 y 、 z 具有轮换对称性，即 ∭ Ω ​ x d x d y d z = ∭ Ω ​ y d x d y d z = ∭ Ω ​ z d x d y d z 因此， ∭ Ω ​ ( x + 2 y + 3 z ) d x d y d z = 6 ∭ Ω ​ z d x d y d z 进一步计算： 6 ∭ Ω ​ z d x d y d z = 6 ∫ 0 1 ​ z d z ∬ D z ​ ​ d x d y 其中， D z ​ 为 z 固定时的截面区域，面积为 ( 1 − z ) 2 ，于是 6 ∫ 0 1 ​ z ( 1 − z ) 2 d z = 3 ∫ 0 1 ​ z ( 1 − z ) 2 d z 计算该积分： 3 ∫ 0 1 ​ z ( 1 − z ) 2 d z ​ = 3 ∫ 0 1 ​ ( z − 2 z 2 + z 3 ) d z = 3 [ 2 z 2 ​ − 3 2 z 3 ​ + 4 z 4 ​ ] 0 1 ​ = 3 ( 2 1 ​ − 3 2 ​ + 4 1 ​ ) = 4 1 ​ ​ 最终结果为 4 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\nn\n阶行列式\n2−1⋮0002⋱00⋯⋯⋱⋯⋯00⋮2−122⋮22=",
    answerText: "】 D n ​ = 2 n + 1 − 2 【",
    referenceAnswer: "【答案】 D n ​ = 2 n + 1 − 2 【解析】 按照第一行展开，得 D n ​ = 2 D n − 1 ​ + ( − 1 ) n + 1 ⋅ 2 ( − 1 ) n − 1 = 2 D n − 1 ​ + 2 , 于是有 D n ​ + 2 = 2 ( D n − 1 ​ + 2 ) . 已知 D 1 ​ = 2 ， D 2 ​ = 6 ，可得 D n ​ = 2 n + 1 − 2.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二维随机变量\n(X,Y)\n服从正态分布\nN(1,0;1,1;0)\n，则\nP{XY−Y0}=",
    answerText: "】 2 1 ​ 【",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 【详解】由于相关系数等于零，所以 X 、 Y 都服从正态分布， X ∼ N ( 1 , 1 ) ， Y ∼ N ( 0 , 1 ) ，且相互独立。因此， X − 1 ∼ N ( 0 , 1 ) 。 P { X Y − Y < 0 } = P { Y ( X − 1 ) < 0 } 由于 Y 与 X − 1 相互独立，且均服从标准正态分布，可得： P { Y ( X − 1 ) < 0 } = P { Y < 0 , X − 1 > 0 } + P { Y > 0 , X − 1 < 0 } = 2 1 ​ × 2 1 ​ + 2 1 ​ × 2 1 ​ = 4 1 ​ + 4 1 ​ = 2 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数\nf(x)=x+aln(1+x)+bxsinx\n，\ng(x)=kx3\n在\nx→0\n时为等价无穷小，求常数\na,b,k\n的取值。",
    referenceAnswer: "【答案】 a = − 1 ， b = − 2 1 ​ ， k = − 3 1 ​ 【解析】 设函数 f ( x ) = x + a ln ( 1 + x ) + b x sin x 与 g ( x ) = k x 3 在 x → 0 时为等价无穷小，即： x → 0 lim ​ g ( x ) f ( x ) ​ = 1 代入 f ( x ) 和 g ( x ) ： x → 0 lim ​ k x 3 x + a ln ( 1 + x ) + b x sin x ​ = 1 等价于： x → 0 lim ​ x 3 x + a ln ( 1 + x ) + b x sin x ​ = k 为确保极限存在，需使分子在 x = 0 处的低阶项为零。首先计算 f ( 0 ) ： f ( 0 ) = 0 + a ln 1 + b ⋅ 0 ⋅ sin 0 = 0 计算一阶导数 f ′ ( x ) ： f ′ ( x ) = 1 + a ⋅ 1 + x 1 ​ + b ( sin x + x cos x ) 在 x = 0 处： f ′ ( 0 ) = 1 + a ⋅ 1 + b ⋅ 0 = 1 + a 为使 f ( x ) 是比 x 更高阶的无穷小，需 f ′ ( 0 ) = 0 ，即： 1 + a = 0 ⟹ a = − 1 代入 a = − 1 ，得： f ( x ) = x − ln ( 1 + x ) + b x sin x 计算二阶导数 f ′′ ( x ) ： f ′ ( x ) = 1 − 1 + x 1 ​ + b sin x + b x cos x f ′′ ( x ) = ( 1 + x ) 2 1 ​ + b cos x + b cos x − b x sin x = ( 1 + x ) 2 1 ​ + 2 b cos x − b x sin x 在 x = 0 处： f ′′ ( 0 ) = 1 1 ​ + 2 b ⋅ 1 − 0 = 1 + 2 b 为使 f ( x ) 是比 x 2 更高阶的无穷小，需 f ′′ ( 0 ) = 0 ，即： 1 + 2 b = 0 ⟹ b = − 2 1 ​ 代入 b = − 2 1 ​ ，得： f ( x ) = x − ln ( 1 + x ) − 2 1 ​ x sin x 现在求极限： x → 0 lim ​ x 3 f ( x ) ​ = x → 0 lim ​ x 3 x − ln ( 1 + x ) − 2 1 ​ x sin x ​ 使用泰勒展开： ln ( 1 + x ) = x − 2 x 2 ​ + 3 x 3 ​ − O ( x 4 ) ， sin x = x − 6 x 3 ​ + O ( x 5 ) ，代入： x − ln ( 1 + x ) = x − ( x − 2 x 2 ​ + 3 x 3 ​ − O ( x 4 ) ) = 2 x 2 ​ − 3 x 3 ​ + O ( x 4 ) − 2 1 ​ x sin x = − 2 1 ​ x ( x − 6 x 3 ​ + O ( x 5 ) ) = − 2 1 ​ x 2 + 12 1 ​ x 4 + O ( x 6 ) 相加： f ( x ) = ( 2 x 2 ​ − 3 x 3 ​ ) + ( − 2 1 ​ x 2 ) + O ( x 4 ) = − 3 x 3 ​ + O ( x 4 ) 因此： x → 0 lim ​ x 3 f ( x ) ​ = x → 0 lim ​ x 3 − 3 x 3 ​ + O ( x 4 ) ​ = − 3 1 ​ 故 k = − 3 1 ​ 。 验证： x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ k x 3 f ( x ) ​ = x → 0 lim ​ − 3 1 ​ x 3 f ( x ) ​ = − 3 1 ​ lim x → 0 ​ x 3 f ( x ) ​ ​ = − 3 1 ​ − 3 1 ​ ​ = 1 满足等价无穷小条件。 因此，常数取值为 a = − 1 ， b = − 2 1 ​ ， k = − 3 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数\ny=f(x)\n在定义域\nI\n上的导数大于零，若对任意的\nx0∈I\n，曲线\ny=f(x)\n在点\n(x0,f(x0))\n处的切线与直线\nx=x0\n及\nx\n轴所围成区域的面积恒为 4，且\nf(0)=2\n，求\nf(x)\n的表达式。",
    referenceAnswer: "【答案】 y = 4 − x 8 ​ 【解析】 函数 y = f ( x ) 在点 ( x 0 ​ , f ( x 0 ​ )) 处的切线方程为 y = f ′ ( x 0 ​ ) ( x − x 0 ​ ) + f ( x 0 ​ ) 令 y = 0 ，解得 x = x 0 ​ − f ′ ( x 0 ​ ) f ( x 0 ​ ) ​ 曲线在该点处的切线与直线 x = x 0 ​ 及 x 轴所围成区域的面积为 S = 2 1 ​ f ( x 0 ​ ) ​ x 0 ​ − ( x 0 ​ − f ′ ( x 0 ​ ) f ( x 0 ​ ) ​ ) ​ = 4 整理得 2 f ′ ( x 0 ​ ) f 2 ( x 0 ​ ) ​ = 4 即 f ′ ( x ) = 8 1 ​ f 2 ( x ) 分离变量得 f ( x ) 1 ​ = C − 8 1 ​ x 由 f ( 0 ) = 2 得 C = 2 1 ​ ，所求函数表达式为 y = 4 − x 8 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数\nf(x,y)=x+y+xy\n，曲线\nC:x2+y2+xy=3\n，求\nf(x,y)\n在曲线\nC\n上的最大方向导数。",
    referenceAnswer: "【答案】 最大方向导数为 3 【解析】 函数 f ( x , y ) = x + y + x y 在 ( x , y ) 处的梯度为 grad f = ( 1 + y , 1 + x ) ，其模为 ∣ grad f ∣ = ( 1 + y ) 2 + ( 1 + x ) 2 ​ ，此问题转化为求函数 F ( x , y ) = ( 1 + x ) 2 + ( 1 + y ) 2 在条件 C : x 2 + y 2 + x y = 3 下的条件极值。用拉格朗日乘子法，令 L ( x , y , λ ) = ( 1 + x ) 2 + ( 1 + y ) 2 + λ ( x 2 + y 2 + x y − 3 ) ，解方程组 ⎩ ⎨ ⎧ ​ L x ′ ​ = 2 ( 1 + x ) + ( 2 x + y ) λ = 0 L y ′ ​ = 2 ( 1 + y ) + ( 2 y + x ) λ = 0 x 2 + y 2 + x y = 3 ​ 可得在点 ( 2 , − 1 ) 或 ( − 1 , 2 ) 处方向导数取到最大，最大值为 9 ​ = 3 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n(1) 设函数\nu(x)\n，\nv(x)\n都可导，利用导数定义证明\n(u(x)v(x))′=u′(x)v(x)+u(x)v′(x)\n；\n\n(2) 设函数\nu1(x)\n，\nu2(x)\n，\n⋯\n，\nun(x)\n都可导，\nf(x)=u1(x)u2(x)⋯un(x)\n，写出\nf(x)\n的求导公式。",
    referenceAnswer: "【答案】 (1) 见解析 (2) f ′ ( x ) = u 1 ′ ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) + u 1 ​ ( x ) u 2 ′ ​ ( x ) ⋯ u n ​ ( x ) + ⋯ + u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ′ ​ ( x ) 【解析】 (1) 证明：设 y = u ( x ) v ( x ) ，则 Δ y ​ = u ( x + Δ x ) v ( x + Δ x ) − u ( x ) v ( x ) = u ( x + Δ x ) v ( x + Δ x ) − u ( x ) v ( x + Δ x ) + u ( x ) v ( x + Δ x ) − u ( x ) v ( x ) = Δ u ⋅ v ( x + Δ x ) + u ( x ) ⋅ Δ v , ​ 所以 Δ x Δ y ​ = Δ x Δ u ​ ⋅ v ( x + Δ x ) + u ( x ) ⋅ Δ x Δ v ​ . 由导数的定义和可导与连续的关系，得 y ′ = Δ x → 0 lim ​ Δ x Δ y ​ = u ′ ( x ) v ( x ) + u ( x ) v ′ ( x ) . (2) 设 f ( x ) = u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) ，其求导公式为 f ′ ( x ) = u 1 ′ ​ ( x ) u 2 ​ ( x ) ⋯ u n ​ ( x ) + u 1 ​ ( x ) u 2 ′ ​ ( x ) ⋯ u n ​ ( x ) + ⋯ + u 1 ​ ( x ) u 2 ​ ( x ) ⋯ u n ′ ​ ( x ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）已知曲线\nL\n的方程为\n\n{z=2−x2−y2z=x\n\n起点为\nA(0,2,0)\n，终点为\nB(0,−2,0)\n，计算曲线积分\n\n∫L(y+z)dx+(z2−x2+y)dy+(x2+y2)dz",
    referenceAnswer: "【答案】 2 2 ​ ​ π 【解析】 曲线 L 的参数方程为 ⎩ ⎨ ⎧ ​ x = cos t y = 2 ​ sin t z = cos t ​ 起点 A ( 0 , 2 ​ , 0 ) 对应 t = 2 π ​ ，终点为 B ( 0 , − 2 ​ , 0 ) 对应 t = − 2 π ​ 。 ∫ L ​ ( y + z ) d x + ( z 2 − x 2 + y ) d y + ( x 2 + y 2 ) d z = ∫ 2 π ​ − 2 π ​ ​ ( 2 ​ sin t + cos t ) d ( cos t ) + ( 2 ​ cos t ) d ( 2 ​ cos t ) + ( 2 − cos 2 t ) d cos t = 2 2 ​ ∫ 0 2 π ​ ​ sin 2 t d t = 2 2 ​ ​ π",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设向量组\nα1\n，\nα2\n，\nα3\n为向量空间\nR3\n的一组基，\nβ1=2α1+2kα3\n，\nβ2=2α2\n，\nβ3=α1+(k+1)α3\n。\n\n(1) 证明：向量组\nβ1\n，\nβ2\n，\nβ3\n为向量空间\nR3\n的一组基；\n\n(2) 当\nk\n为何值时，存在非零向量\nξ\n，使得\nξ\n在基\nα1\n，\nα2\n，\nα3\n和基\nβ1\n，\nβ2\n，\nβ3\n下的坐标相同，并求出所有的非零向量。",
    referenceAnswer: "【答案】 (1) 见解析 (2) 当 k = 0 时，存在非零向量 ξ ，使得 ξ 在基 α 1 ​ ， α 2 ​ ， α 3 ​ 和基 β 1 ​ ， β 2 ​ ， β 3 ​ 下的坐标相同，所有非零向量为 ξ = c α 1 ​ − c α 3 ​ ，其中 c 为非零常数。 【解析】 (1) 由 ( β 1 ​ , β 2 ​ , β 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 2 0 2 k ​ 0 2 0 ​ 1 0 k + 1 ​ ​ ，计算矩阵行列式： ​ ​ 2 0 2 k ​ 0 2 0 ​ 1 0 k + 1 ​ ​ ​ = 2 × 2 × [( 2 ) ( k + 1 ) − 1 × 2 k ] = 4  = 0 故向量组 β 1 ​ 、 β 2 ​ 、 β 3 ​ 线性无关，为向量空间 R 3 的一组基。 (2) 设非零向量 ξ 在两组基下的坐标都是 ( x 1 ​ , x 2 ​ , x 3 ​ ) ，则： x 1 ​ α 1 ​ + x 2 ​ α 2 ​ + x 3 ​ α 3 ​ = x 1 ​ β 1 ​ + x 2 ​ β 2 ​ + x 3 ​ β 3 ​ 整理得： x 1 ​ ( − α 1 ​ − 2 k α 3 ​ ) + x 2 ​ ( − 2 α 2 ​ ) + x 3 ​ ( − α 1 ​ − k α 3 ​ ) = 0 即： ( − α 1 ​ − 2 k α 3 ​ , − 2 α 2 ​ , − α 1 ​ − k α 3 ​ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = 0 该齐次线性方程组有非零解的充要条件是系数矩阵行列式为零： ​ ​ − 1 0 − 2 k ​ 0 − 2 0 ​ − 1 0 − k ​ ​ ​ = ( − 1 ) × ( − 2 ) × [( − 1 ) ( − k ) − ( − 1 ) ( − 2 k )] = 2 × ( − k ) = 0 解得 k = 0 。此时方程组为： ( − α 1 ​ , − 2 α 2 ​ , − α 1 ​ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = 0 即： { − x 1 ​ − x 3 ​ = 0 − 2 x 2 ​ = 0 ​ 通解为 x 1 ​ = c ， x 2 ​ = 0 ， x 3 ​ = − c （ c  = 0 ），故所有非零向量为 ξ = c α 1 ​ − c α 3 ​ （ c 为非零常数）。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知矩阵\nA=0−1123−2−3−3a\n与\nB=100−2b3001\n相似。\n\n(1) 求\na\n，\nb\n的值；\n\n(2) 求可逆矩阵\nP\n，使\nP−1AP\n为对角矩阵。",
    referenceAnswer: "【答案】 (1) a = 4 ， b = 5 (2) P = ​ 2 1 0 ​ − 3 0 1 ​ 1 − 2 1 ​ ​ 【解析】 (1) 因为矩阵 A 与 B 相似，所以迹相等且行列式相等，即 { 0 + 3 + a = 1 + b + 1 ∣ A ∣ = ∣ B ∣ ​ 计算行列式： ∣ A ∣ = ​ 0 − 1 1 ​ 2 3 − 2 ​ − 3 − 3 a ​ ​ = 0 ⋅ ​ 3 − 2 ​ − 3 a ​ ​ − 2 ⋅ ​ − 1 1 ​ − 3 a ​ ​ ( − 3 ) ⋅ ​ − 1 1 ​ 3 − 2 ​ ​ = − 2 ( − a + 3 ) − 3 ( 2 − 3 ) = 2 a − 6 + 3 = 2 a − 3 ∣ B ∣ = ​ 1 0 0 ​ − 2 b 3 ​ 0 0 1 ​ ​ = 1 ⋅ b ⋅ 1 = b 因此得到方程组： { 3 + a = 2 + b 2 a − 3 = b ​ 解得 a = 4 ， b = 5 。 (2) 由 B 的特征值为其对角元素 1 （二重）和 5 ，故 A 的特征值也为 1 （二重）和 5 。 对于特征值 λ = 1 ，解方程组 ( E − A ) x = 0 ： E − A = ​ 1 1 − 1 ​ − 2 − 2 2 ​ 3 3 − 3 ​ ​ 经初等行变换得： ​ 1 0 0 ​ − 2 0 0 ​ 3 0 0 ​ ​ 基础解系为： ξ 1 ​ = ​ 2 1 0 ​ ​ , ξ 2 ​ = ​ − 3 0 1 ​ ​ 对于特征值 λ = 5 ，解方程组 ( 5 E − A ) x = 0 ： 5 E − A = ​ 5 1 − 1 ​ − 2 2 2 ​ 3 3 1 ​ ​ 经初等行变换得： ​ 1 0 0 ​ 0 1 0 ​ − 1 2 0 ​ ​ 基础解系为： ξ 3 ​ = ​ 1 − 2 1 ​ ​ 令 P = ( ξ 1 ​ , ξ 2 ​ , ξ 3 ​ ) = ​ 2 1 0 ​ − 3 0 1 ​ 1 − 2 1 ​ ​ ，则 P − 1 A P = ​ 1 0 0 ​ 0 1 0 ​ 0 0 5 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设\nf(x)={2−xln2,0,x>0x≤0\n，对\nX\n进行独立重复的观测，直到第 2 个大于 3 的观测值出现时停止，记\nY\n为观测次数。求：\n\n(1) 求\nY\n的概率分布；\n\n(2) 求数学期望\nE(Y)\n。",
    referenceAnswer: "【答案】 (1) P ( Y = k ) = 64 1 ​ ( k − 1 ) ( 8 7 ​ ) k − 2 , k = 2 , 3 , 4 , … (2) E ( Y ) = 16 【解析】 (1) 对 X 进行独立重复的观测，得到观测值大于 3 的概率为 P ( X > 3 ) = ∫ 3 + ∞ ​ 2 − x ln 2 d x = 8 1 ​ 显然 Y 的可能取值为 2 , 3 , 4 , … 且 P ( Y = k ) = 8 1 ​ × C k − 1 1 ​ 8 1 ​ × ( 8 7 ​ ) k − 2 = 64 1 ​ ( k − 1 ) ( 8 7 ​ ) k − 2 , k = 2 , 3 , 4 , … (2) 设 S ( x ) ​ = n = 2 ∑ ∞ ​ n ( n − 1 ) x n − 2 = n = 2 ∑ ∞ ​ ( x n ) ′′ = ( n = 2 ∑ ∞ ​ x n ) ′′ = ( 1 − x x 2 ​ ) ′′ = ( 1 − x ) 3 2 ​ , ∣ x ∣ < 1 ​ E ( Y ) = k = 2 ∑ ∞ ​ k P ( Y = k ) = n = 2 ∑ ∞ ​ 64 1 ​ k ( k − 1 ) ( 8 7 ​ ) k − 2 = 64 1 ​ S ( 8 7 ​ ) = 16",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设总体\nX\n的概率密度为\n\nf(x;θ)=⎩⎨⎧1−θ1,0,θ≤x≤1其他\n\n其中\nθ\n为未知参数，\nx1,x2,⋯,xn\n是来自总体的简单样本。\n\n(1) 求参数\nθ\n的矩估计量；\n\n(2) 求参数\nθ\n的最大似然估计量。",
    referenceAnswer: "【答案】 (1) 矩估计量： θ ^ = 2 x ˉ − 1 (2) 最大似然估计量： θ ^ = min ( x 1 ​ , x 2 ​ , ⋯ , x n ​ ) 【解析】 (1) 总体的数学期望为 E ( X ) = ∫ θ 1 ​ x ⋅ 1 − θ 1 ​ d x = 2 1 ​ ( 1 + θ ) 。 令 E ( X ) = X ˉ ，解得参数 θ 的矩估计量为 θ ^ = 2 x ˉ − 1 。 (2) 似然函数为 L ( x 1 ​ , x 2 ​ , ⋯ , x n ​ ; θ ) = { ( 1 − θ ) n 1 ​ , 0 , ​ θ ≤ x 1 ​ , x 2 ​ , ⋯ , x n ​ ≤ 1 其他 ​ 显然 L ( θ ) 是关于 θ 的单调递增函数。为了使似然函数达到最大，只要使参数 θ 尽可能大即可，因此参数 θ 的最大似然估计量为 θ ^ = min ( x 1 ​ , x 2 ​ , ⋯ , x n ​ ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2015_math1 = {
  id: P, year: Y,
  title: '2015 年全国硕士研究生招生考试 数学（一）',
  short: '2015 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2015_math1.length,
  qids: questions2015_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
