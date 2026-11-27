const P = 'paper-2008-math3'
const Y = 2008
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2008-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2008 考研数学（三）真题',
  ...extra
})

export const questions2008_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nx=0\n是函数\ng(x)=x∫0xf(t)dt\n的()",
    options: [{ key: "A", text: "跳跃间断点" }, { key: "B", text: "可去间断点" }, { key: "C", text: "无穷间断点" }, { key: "D", text: "振荡间断点" }],
    answer: ["B"],
    explain: "正确答案： B 详解 对于极限表达式： x → 0 lim ​ g ( x ) = x → 0 lim ​ x ∫ 0 x ​ f ( t ) d t ​ 应用洛必达法则，得到： x → 0 lim ​ x ∫ 0 x ​ f ( t ) d t ​ = x → 0 lim ​ f ( x ) = f ( 0 ) 因此， x = 0 是函数 g ( x ) 的可去间断点。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线段方程为\ny=f(x)\n，函数\nf(x)\n在区间\n[0,a]\n上有连续的导数，则定积分\n\n∫0axf′(x)dx\n\n等于()",
    options: [{ key: "A", text: "曲边梯形 ABCD 面积" }, { key: "B", text: "梯形 ABCD 面积" }, { key: "C", text: "曲边三角形 ACD 面积" }, { key: "D", text: "三角形 ACD 面积" }],
    answer: ["C"],
    explain: "正确答案： C 详解 首先，我们来看积分 ∫ 0 a ​ x f ′ ( x ) d x 的计算过程： ∫ 0 a ​ x f ′ ( x ) d x = ∫ 0 a ​ x df ( x ) = x f ( x ) ∣ 0 a ​ − ∫ 0 a ​ f ( x ) d x = a f ( a ) − ∫ 0 a ​ f ( x ) d x 接下来，我们从几何角度解释这个结果： a f ( a ) 表示矩形 ABOC 的面积。 ∫ 0 a ​ f ( x ) d x 表示曲边梯形 ABO 的面积。 因此， ∫ 0 a ​ x f ′ ( x ) d x 实际上表示的是曲边三角形的面积。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知\nf(x,y)=ex2+y2\n，则()",
    options: [{ key: "A", text: "f x ′ ​ ( 0 , 0 ) ， f y ′ ​ ( 0 , 0 ) 都存在" }, { key: "B", text: "f x ′ ​ ( 0 , 0 ) 不存在， f y ′ ​ ( 0 , 0 ) 存在" }, { key: "C", text: "f x ′ ​ ( 0 , 0 ) 不存在， f y ′ ​ ( 0 , 0 ) 不存在" }, { key: "D", text: "f x ′ ​ ( 0 , 0 ) ， f y ′ ​ ( 0 , 0 ) 都不存在" }],
    answer: ["B"],
    explain: "正确答案： B 详解 计算 f x ′ ​ ( 0 , 0 ) ： f x ′ ​ ( 0 , 0 ) = x → 0 lim ​ x − 0 f ( x , 0 ) − f ( 0 , 0 ) ​ = x → 0 lim ​ x e x 2 + 0 2 ​ − 1 ​ = x → 0 lim ​ x e ∣ x ∣ − 1 ​ 分别计算左右极限： x → 0 + lim ​ x e x − 1 ​ = 1 , x → 0 − lim ​ x e − x − 1 ​ = − 1 由于左右极限不相等，故 f x ′ ​ ( 0 , 0 ) 不存在。 计算 f y ′ ​ ( 0 , 0 ) ： f y ′ ​ ( 0 , 0 ) = y → 0 lim ​ y − 0 f ( 0 , y ) − f ( 0 , 0 ) ​ = y → 0 lim ​ y e 0 + y 2 ​ − 1 ​ = y → 0 lim ​ y e ∣ y ∣ − 1 ​ 当 y → 0 时， ∣ y ∣ → 0 ，且 e ∣ y ∣ − 1 ∼ ∣ y ∣ 。因此： y → 0 lim ​ y e ∣ y ∣ − 1 ​ = 0 所以 f y ′ ​ ( 0 , 0 ) 存在。综上，正确答案为 B 。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nF(u,v)=∬Duvx2+y2f(x2+y2)dxdy\n，其中\nDuv\n为圆环域\n1≤x2+y2≤u2\n，\n0≤v≤2π\n，则\n∂u∂F=( )\n。",
    options: [{ key: "A", text: "v f ( u 2 )" }, { key: "B", text: "u v ​ f ( u 2 )" }, { key: "C", text: "u f ( v 2 )" }, { key: "D", text: "u v ​ f ( u )" }],
    answer: ["A"],
    explain: "正确答案： A 详解 使用极坐标变换得到： F ( u , v ) = ∬ D ​ r f ( r 2 ) ​ ⋅ r d r d θ = ∫ 0 v ​ d θ ∫ 1 u ​ f ( r 2 ) d r = v ∫ 1 u ​ f ( r 2 ) d r 因此： ∂ u ∂ F ​ = v f ( u 2 )"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\nn\n阶非零矩阵，\nE\n为\nn\n阶单位矩阵，若\nA3=0\n，则()",
    options: [{ key: "A", text: "E − A 不可逆， E + A 不可逆" }, { key: "B", text: "E − A 不可逆， E + A 可逆" }, { key: "C", text: "E − A 可逆， E + A 可逆" }, { key: "D", text: "E − A 可逆， E + A 不可逆" }],
    answer: ["C"],
    explain: "正确答案： C 详解 我们有： ( E − A ) ( E + A + A 2 ) = E − A 3 = E 以及： ( E + A ) ( E − A + A 2 ) = E + A 3 = E 因此， E − A 和 E + A 均可逆。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA=(1221)\n，则与\nA\n合同的矩阵为()",
    options: [{ key: "A", text: "( − 2 1 ​ 1 − 2 ​ )" }, { key: "B", text: "( 2 − 1 ​ − 1 2 ​ )" }, { key: "C", text: "( 2 1 ​ 1 2 ​ )" }, { key: "D", text: "( 1 − 2 ​ − 2 1 ​ )" }],
    answer: ["D"],
    explain: "正确答案： D 详解 记矩阵 D = ( 1 − 2 ​ − 2 1 ​ ) ，则其特征多项式为： ∣ λ E − D ∣ = ​ λ − 1 2 ​ 2 λ − 1 ​ ​ = ( λ − 1 ) 2 − 4 对于矩阵 A ，其特征多项式为： ∣ λ E − A ∣ = ​ λ − 1 − 2 ​ − 2 λ − 1 ​ ​ = ( λ − 1 ) 2 − 4 因此， A 和 D 具有相同的特征多项式，即相同的特征值。 由于 A 和 D 是同阶实对称矩阵，而实对称矩阵相似必合同，故选项 D 正确。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "随机变量\nX\n、\nY\n独立同分布且\nX\n的分布函数为\nF(x)\n，则\nZ=max{X,Y}\n的分布函数为",
    options: [{ key: "A", text: "F 2 ( x )" }, { key: "B", text: "F ( x ) F ( y )" }, { key: "C", text: "1 − [ 1 − F ( x ) ] 2" }, { key: "D", text: "[ 1 − F ( x )] [ 1 − F ( y )]" }],
    answer: ["A"],
    explain: "正确答案： A 详解 设 Z = max { X , Y } ，则其分布函数为： F Z ​ ( z ) = P ( Z ≤ z ) = P { max { X , Y } ≤ z } 由于 max { X , Y } ≤ z 等价于 X ≤ z 且 Y ≤ z ，且 X 和 Y 独立，因此： F Z ​ ( z ) = P ( X ≤ z ) P ( Y ≤ z ) = F ( z ) F ( z ) = F 2 ( z ) 其中 F ( z ) 为 X 和 Y 的公共分布函数。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "随机变量\nX∼N(0,1)\n，\nY∼N(1,4)\n且相关系数\nρXY=1\n，则 ( )",
    options: [{ key: "A", text: "P { Y = − 2 X − 1 } = 1" }, { key: "B", text: "P { Y = 2 X − 1 } = 1" }, { key: "C", text: "P { Y = − 2 X + 1 } = 1" }, { key: "D", text: "P { Y = 2 X + 1 } = 1" }],
    answer: ["D"],
    explain: "正确答案： D 详解 设 Y = a X + b 。由 ρ X Y ​ = 1 可知 X 和 Y 正相关，因此 a > 0 ，排除选项 (A) 和 (C)。 已知 X ∼ N ( 0 , 1 ) 和 Y ∼ N ( 1 , 4 ) ，则： E ( X ) = 0 , E ( Y ) = 1 根据线性变换的期望： E ( Y ) = E ( a X + b ) = a E ( X ) + b = b = 1 因此 b = 1 ，排除选项 (B)。最终选择 (D)。"
  }),
  base(9, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\n\nf(x)={x2+1,∣x∣2,∣x∣≤c∣x∣>c\n\n在\n(−∞,+∞)\n内连续，则\nc=\n________",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 因为 lim x → c − ​ f ( x ) = lim x → c − ​ ( x 2 + 1 ) = c 2 + 1 ，而 lim x → c + ​ f ( x ) = lim x → c + ​ ∣ x ∣ 2 ​ = c 2 ​ 。 由于 f ( x ) 在 ( − ∞ , + ∞ ) 内连续，必然在 x = c 处连续，因此有： x → c + lim ​ f ( x ) = x → c − lim ​ f ( x ) = f ( c ) 即： c 2 + 1 = c 2 ​ 解得 c = 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nf(x+x1)=1+x4x+x3\n，则\n∫222f(x)dx=",
    answerText: "】 2 1 ​ ln 3 【",
    referenceAnswer: "【答案】 2 1 ​ ln 3 【解析】 给定函数关系式： f ( x + x 1 ​ ) = x 2 1 ​ + x 2 x 1 ​ + x ​ = ( x 1 ​ + x ) 2 − 2 x 1 ​ + x ​ 令 t = x 1 ​ + x ，则函数可表示为： f ( t ) = t 2 − 2 t ​ 于是，积分计算如下： ∫ 2 2 2 ​ ​ f ( x ) d x = ∫ 2 2 2 ​ ​ x 2 − 2 x ​ d x 利用换元积分法，得到： 2 1 ​ ln ( x 2 − 2 ) ​ 2 2 2 ​ ​ = 2 1 ​ ( ln 6 − ln 2 ) = 2 1 ​ ln 3 最终结果为： 2 1 ​ ln 3",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nD={(x,y)∣x2+y2≤1}\n，则\n\n∬D(x2−y)dxdy=",
    answerText: "】 4 π ​ 【",
    referenceAnswer: "【答案】 4 π ​ 【解析】 利用函数奇偶性，由于区域 D 关于 x 轴对称，而函数 y 关于 x 轴为奇函数，因此 ∬ D ​ ( − y ) d x d y = 0. 于是只需计算 ∬ D ​ x 2 d x d y . 利用极坐标变换： x = r cos θ , d x d y = r d r d θ , 则 ∬ D ​ x 2 d x d y ​ = ∫ 0 2 π ​ ∫ 0 1 ​ ( r cos θ ) 2 ⋅ r d r d θ = ∫ 0 2 π ​ cos 2 θ d θ ∫ 0 1 ​ r 3 d r = π × 4 1 ​ = 4 π ​ . ​ 因此， ∬ D ​ ( x 2 − y ) d x d y = 4 π ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\nxy′+y=0\n满足条件\ny(1)=1\n的解为\ny=",
    answerText: "】 y = x 1 ​ 【",
    referenceAnswer: "【答案】 y = x 1 ​ 【解析】 方程可化为 d x d y ​ = − x y ​ 分离变量得 − ln ∣ y ∣ = ln ∣ x ∣ + C 1 ​ 即 ∣ y ∣ 1 ​ = ∣ x ∣ ⋅ C 又 y ( 1 ) = 1 ，所以 C = 1 ，故 y = x 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设3阶矩阵\nA\n的特征值为1，2，2，\nE\n为3阶单位矩阵，则\n4A−1−E=\n____________",
    answerText: "】 3 【",
    referenceAnswer: "【答案】 3 【解析】 A 的特征值为1，2，2，所以 A − 1 的特征值为1， 2 1 ​ ， 2 1 ​ 。 则 4 A − 1 − E 的特征值为： 4 × 1 − 1 = 3 4 × 2 1 ​ − 1 = 1 4 × 2 1 ​ − 1 = 1 所以行列式的值为： ∣4 A − 1 − E ∣ = 3 × 1 × 1 = 3",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n服从参数为 1 的泊松分布，则\nP{X=E(X2)}=",
    answerText: "】 2 1 ​ e − 1 【",
    referenceAnswer: "【答案】 2 1 ​ e − 1 【解析】 由 D X = E X 2 − ( EX ) 2 ， X 服从参数为1的泊松分布，故 EX = D X = 1 。 因此， E X 2 = 1 + 1 2 = 2 。 于是， P { X = 2 } = 2 ! 1 2 ​ e − 1 = 2 1 ​ e − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nx→0limx21ln(xsinx)",
    referenceAnswer: "【答案】 -1/6 【解析】 方法一： x → 0 lim ​ x 2 1 ​ ln x sin x ​ ​ = x → 0 lim ​ x 2 1 ​ ln ( 1 + x sin x ​ − 1 ) = x → 0 lim ​ x 3 sin x − x ​ = x → 0 lim ​ 3 x 2 cos x − 1 ​ = − x → 0 lim ​ 6 x sin x ​ = − 6 1 ​ ​ 洛必达法则： x → 0 lim ​ 6 x 2 − x sin x ​ = − 6 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nz=z(x,y)\n是由方程\nx2+y2−z=φ(x+y+z)\n所确定的函数，其中\nφ\n具有 2 阶导数且\nφ′=−1\n时。\n\n(1) 求\ndz\n\n(2) 记\nu(x,y)=x−y1(∂x∂z−∂y∂z)\n，求\n∂x∂u",
    referenceAnswer: "【答案】 (1) d z = φ ′ + 1 ( − φ ′ + 2 x ) d x + ( − φ ′ + 2 y ) d y ​ (2) ∂ x ∂ u ​ = − ( φ ′ + 1 ) 3 4 x φ ′′ ​ 【解析】 (1) 2 x d x + 2 y d y − d z = φ ′ ( x + y + z ) ⋅ ( d x + d y + d z ) ( φ ′ + 1 ) d z = ( − φ ′ + 2 x ) d x + ( − φ ′ + 2 y ) d y d z = φ ′ + 1 ( − φ ′ + 2 x ) d x + ( − φ ′ + 2 y ) d y ​ ( ∵ φ ′  = − 1 ) (2) 由上一问可知： ∂ x ∂ z ​ = φ ′ + 1 − φ ′ + 2 x ​ , ∂ y ∂ z ​ = φ ′ + 1 − φ ′ + 2 y ​ 所以： u ( x , y ) = x − y 1 ​ ( ∂ x ∂ z ​ − ∂ y ∂ z ​ ) = x − y 1 ​ ( φ ′ + 1 − φ ′ + 2 x ​ − φ ′ + 1 − φ ′ + 2 y ​ ) = x − y 1 ​ φ ′ + 1 − 2 y + 2 x ​ = φ ′ + 1 2 ​ 所以： ∂ x ∂ u ​ = ( φ ′ + 1 ) 2 − 2 φ ′′ ( 1 + ∂ x ∂ z ​ ) ​ = − ( φ ′ + 1 ) 2 2 φ ′′ ( 1 + 1 + φ ′ 2 x − φ ′ ​ ) ​ = − ( φ ′ + 1 ) 3 2 φ ′′ ( 1 + φ ′ + 2 x − φ ′ ) ​ = − ( φ ′ + 1 ) 3 2 ( 2 x ) φ ′′ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分11分）\n\n计算\n∬Dmax(xy,1)dxdy\n，其中\nD={(x,y)∣0≤x≤2,0≤y≤2}\n。",
    referenceAnswer: "【答案】 4 19 ​ + ln 2 【解析】 曲线 x y = 1 将区域分成三个区域 D 1 ​ , D 2 ​ , D 3 ​ ： 从而所求的积分 ∬ D ​ max ( x y , 1 ) d x d y ​ = ∬ D 1 ​ ​ x y d x d y + ∬ D 2 ​ ​ 1 d x d y + ∬ D 3 ​ ​ 1 d x d y = ∫ 0 2 1 ​ ​ d x ∫ 0 2 ​ 1 d y + ∫ 2 1 ​ 2 ​ d x ∫ 0 x 1 ​ ​ 1 d y ∫ 2 1 ​ 2 ​ d x ∫ x 1 ​ 2 ​ x y d y = 1 + 2 ln 2 + 4 15 ​ − ln 2 = 4 19 ​ + ln 2. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n设\nf(x)\n是周期为2的连续函数。\n\n(1) 证明对任意实数\nt\n，有\n\n∫tt+2f(x)dx=∫02f(x)dx\n\n(2) 证明\n\nG(x)=∫0x[2f(t)−∫tt+2f(s)ds]dt\n\n是周期为2的周期函数。",
    referenceAnswer: "【答案】 见解析 【解析】 (1) 由积分的性质知对任意的实数 t ， ∫ t t + 2 ​ f ( x ) d x = ∫ t 0 ​ f ( x ) d x + ∫ 0 2 ​ f ( x ) d x + ∫ 2 t + 2 ​ f ( x ) d x 令 x = 2 + u ，则 ∫ 2 t + 2 ​ f ( x ) d x = ∫ 0 t ​ f ( 2 + u ) d u = ∫ 0 t ​ f ( u ) d u = − ∫ t 0 ​ f ( x ) d x 因此， ∫ t t + 2 ​ f ( x ) d x = ∫ t 0 ​ f ( x ) d x + ∫ 0 2 ​ f ( x ) d x − ∫ t 0 ​ f ( x ) d x = ∫ 0 2 ​ f ( x ) d x 另一种方法：设 F ( t ) = ∫ t t + 2 ​ f ( x ) d x 。由于 F ′ ( t ) = f ( t + 2 ) − f ( t ) = 0 所以 F ( t ) 为常数，从而有 F ( t ) = F ( 0 ) 。而 F ( 0 ) = ∫ 0 2 ​ f ( x ) d x 因此， ∫ t t + 2 ​ f ( x ) d x = ∫ 0 2 ​ f ( x ) d x (2) 由(1)知，对任意的 t 有 ∫ t t + 2 ​ f ( s ) d s = ∫ 0 2 ​ f ( s ) d s 记 a = ∫ 0 2 ​ f ( s ) d s ，则 G ( x ) = 2 ∫ 0 x ​ f ( t ) d t − a x 对任意的 x ， G ( x + 2 ) − G ( x ) ​ = 2 ∫ 0 x + 2 ​ f ( t ) d t − a ( x + 2 ) − 2 ∫ 0 x ​ f ( t ) d t + a x = 2 ∫ x x + 2 ​ f ( t ) d t − 2 a = 2 ∫ 0 2 ​ f ( t ) d t − 2 a = 0 ​ 所以 G ( x ) 是周期为2的周期函数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设银行存款的年利率为\nr=0.05\n，并依年复利计算。某基金会希望通过存款\nA\n万元，实现：\n第一年提取\n19\n万元，第二年提取\n28\n万元，⋯\n，第\nn\n年提取\n(10+9n)\n万元，\n并能按此规律一直提取下去。问\nA\n至少应为多少万元？",
    referenceAnswer: "【答案】 3980 万元 【解析】 方法一 ：设 A n ​ 为用于第 n 年提取 ( 10 + 9 n ) 万元的贴现值，则 A n ​ = ( 1 + r ) − n ( 10 + 9 n ) 因此，总现值为： A = n = 1 ∑ ∞ ​ A n ​ = n = 1 ∑ ∞ ​ ( 1 + r ) n 10 + 9 n ​ = 10 n = 1 ∑ ∞ ​ ( 1.05 ) n 1 ​ + 9 n = 1 ∑ ∞ ​ ( 1.05 ) n n ​ 设 S ( x ) = ∑ n = 1 ∞ ​ n x n （ ∣ x ∣ < 1 ），因为： S ( x ) = x n = 1 ∑ ∞ ​ n x n − 1 = x ⋅ ( 1 − x ) 2 1 ​ = ( 1 − x ) 2 x ​ 所以： S ( 1.05 1 ​ ) = ( 1 − 1.05 1 ​ ) 2 1.05 1 ​ ​ = 420 （万元） 最终结果为： A = 10 × 1 − 1.05 1 ​ 1.05 1 ​ ​ + 9 × 420 = 10 × 20 + 3780 = 3980 （万元） 方法二 ：设第 t 年取款后的余款为 y t ​ ，由题意知 y t ​ 满足方程： y t ​ = ( 1 + 0.05 ) y t − 1 ​ − ( 10 + 9 t ) 即： y t ​ − 1.05 y t − 1 ​ = − ( 10 + 9 t ) 对应的齐次方程通解为： y t ​ = C ( 1.05 ) t 设特解为 y t ​ = a t + b ，代入解得： a = 180 , b = 3980 所以通解为： y t ​ = C ( 1.05 ) t + 180 t + 3980 由初始条件 y 0 ​ = A 及 y t ​ ≥ 0 得： A = C + 3980 且 C ≥ 0 因此， A 至少为 3980 万元。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设\n\nA=2aa212aa212a⋱⋱⋱a212an×n,X=x1⋮xn,B=10⋮0\n求证\n∣A∣=(n+1)ana\n为何值时，方程组\nAX=B\n有唯一解；a\n为何值时，方程组\nAX=B\n有无穷多解。",
    referenceAnswer: "【答案】 见解析 a  = 0 a = 0 【解析】 (1) 证法一 ：通过行列式行变换（如 r i + 1 ​ − i + 1 i ​ a r i ​ ）将矩阵化为上三角，得行列式为 2 a ⋅ 2 3 a ​ ⋅ 3 4 a ​ ⋯ n ( n + 1 ) a ​ = ( n + 1 ) a n 证法二 ：数学归纳法。当 n = 1 时， ∣ A ∣ = 2 a ；假设 n = k 时成立，即 D k ​ = ( k + 1 ) a k ，则 n = k + 1 时，按第一行展开得 D k + 1 ​ = 2 a D k ​ − a 2 D k − 1 ​ = 2 a ( k + 1 ) a k − a 2 k a k − 1 = ( k + 2 ) a k + 1 结论成立。 证法三 ：递推法。记 D n ​ = ∣ A ∣ ，则 D n ​ = 2 a D n − 1 ​ − a 2 D n − 2 ​ ，特征方程 r 2 − 2 a r + a 2 = 0 得重根 r = a ，通解 D n ​ = ( C 1 ​ + C 2 ​ n ) a n 代入初始条件 D 1 ​ = 2 a ， D 2 ​ = 3 a 2 得 C 1 ​ = 1 ， C 2 ​ = 1 ，故 D n ​ = ( n + 1 ) a n (2) 方程组有唯一解当且仅当 ∣ A ∣  = 0 ，即 ( n + 1 ) a n  = 0 ，故 a  = 0 。 (3) 方程组有无穷多解当且仅当 ∣ A ∣ = 0 且系数矩阵与增广矩阵秩相等。由 ∣ A ∣ = 0 得 a = 0 ，此时矩阵 A 为零矩阵（除第一行第一列为0，其余位置？需结合原矩阵结构，实际当 a = 0 时， A 为上三角矩阵，主对角线为0，第一行为 ( 0 , 1 , 0 , ⋯ , 0 ) ，其余行前两列依次为 0 , 0 等，增广矩阵为 ( 1 , 0 , ⋯ , 0 ) ⊤ ，此时系数矩阵秩为 n − 1 ，增广矩阵秩也为 n − 1 ，故 a = 0 时有无穷多解。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nA\n为 3 阶矩阵，\na1\n、\na2\n为\nA\n的分别属于特征值\n−1\n、\n1\n的特征向量，向量\na3\n满足\nAa3=a2+a3\n。证明：\na1\n、\na2\n、\na3\n线性无关；令\nP=(a1,a2,a3)\n，求\nP−1AP\n。",
    referenceAnswer: "【答案】 见解析 ​ − 1 0 0 ​ 0 1 0 ​ 0 1 1 ​ ​ 【解析】 (1) 证法一 ：假设 α 1 ​ , α 2 ​ , α 3 ​ 线性相关。因为 α 1 ​ , α 2 ​ 分别属于不同特征值的特征向量，故 α 1 ​ , α 2 ​ 线性无关。则 α 3 ​ 可由 α 1 ​ , α 2 ​ 线性表出，不妨设 α 3 ​ = l 1 ​ α 1 ​ + l 2 ​ α 2 ​ ，其中 l 1 ​ , l 2 ​ 不全为零（若 l 1 ​ , l 2 ​ 同时为 0，则 α 3 ​ = 0 ，由 A α 3 ​ = α 2 ​ + α 3 ​ 可知 α 2 ​ = 0 ，而特征向量都是非零向量，矛盾）。 A α 1 ​ = − α 1 ​ , A α 2 ​ = α 2 ​ A α 3 ​ = α 2 ​ + α 3 ​ = α 2 ​ + l 1 ​ α 1 ​ + l 2 ​ α 2 ​ A α 3 ​ = A ( l 1 ​ α 1 ​ + l 2 ​ α 2 ​ ) = − l 1 ​ α 1 ​ + l 2 ​ α 2 ​ − l 1 ​ α 1 ​ + l 2 ​ α 2 ​ = α 2 ​ + l 1 ​ α 1 ​ + l 2 ​ α 2 ​ , 移项整理得 2 l 1 ​ α 1 ​ + α 2 ​ = 0 则 α 1 ​ , α 2 ​ 线性相关，矛盾。所以 α 1 ​ , α 2 ​ , α 3 ​ 线性无关。 证法二 ：设存在数 k 1 ​ , k 2 ​ , k 3 ​ ，使得 k 1 ​ α 1 ​ + k 2 ​ α 2 ​ + k 3 ​ α 3 ​ = 0 ( 1 ) 用 A 左乘 (1) 的两边，并由 A α 1 ​ = − α 1 ​ , A α 2 ​ = α 2 ​ 得 − k 1 ​ α 1 ​ + ( k 2 ​ + k 3 ​ ) α 2 ​ + k 3 ​ α 3 ​ = 0 ( 2 ) (1) - (2) 得 2 k 1 ​ α 1 ​ − k 3 ​ α 2 ​ = 0 因为 α 1 ​ , α 2 ​ 是 A 的属于不同特征值的特征向量，所以 α 1 ​ , α 2 ​ 线性无关，从而 k 1 ​ = k 3 ​ = 0 。代入 (1) 得 k 2 ​ α 2 ​ = 0 ，又由于 α 2 ​  = 0 ，所以 k 2 ​ = 0 。故 α 1 ​ , α 2 ​ , α 3 ​ 线性无关。 (2) 记 P = ( α 1 ​ , α 2 ​ , α 3 ​ ) ，则 P 可逆。 A P ​ = A ( α 1 ​ , α 2 ​ , α 3 ​ ) = ( A α 1 ​ , A α 2 ​ , A α 3 ​ ) = ( − α 1 ​ , α 2 ​ , α 2 ​ + α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ − 1 0 0 ​ 0 1 0 ​ 0 1 1 ​ ​ = P ​ − 1 0 0 ​ 0 1 0 ​ 0 1 1 ​ ​ ​ P − 1 A P = ​ − 1 0 0 ​ 0 1 0 ​ 0 1 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n与\nY\n相互独立。\nX\n的概率分布为\nP{X=i}=31\n(i=−1,0,1)\n，\nY\n的概率密度为\n\nfY(y)={1,0,0≤y≤1其他\n\n记\nZ=X+Y\n。\n\n求\nP{Z≤21∣X=0}\n；\n\n求\nZ\n的概率密度。\n",
    referenceAnswer: "【答案】 P { Z ≤ 2 1 ​ ∣ X = 0 } = 2 1 ​ Z 的概率密度函数为 f Z ​ ( z ) = { 3 1 ​ , 0 , ​ − 1 ≤ z < 2 其他 ​ 【解析】 (1) P ( Z ≤ 2 1 ​ ∣ X = 0 ) ​ = P ( X + Y ≤ 2 1 ​ ∣ X = 0 ) = P ( X = 0 ) P ( X = 0 , Y ≤ 2 1 ​ ) ​ = P ( Y ≤ 2 1 ​ ) = ∫ 0 2 1 ​ ​ 1 d y = 2 1 ​ ​ (2) F Z ​ ( z ) ​ = P { Z ≤ z } = P { X + Y ≤ z } = P { X + Y ≤ z , X = − η } + P { X + Y ≤ z , X = 0 } + P { X + Y ≤ z , X = η } = P { Y ≤ z + η , X = − η } + P { Y ≤ z , X = 0 } + P { Y ≤ z − η , X = η } = P { Y ≤ z + η } P { X = − η } + P { Y ≤ z } P { X = 0 } + P { Y ≤ z − η } P { X = η } = 3 1 ​ [ P { Y ≤ z + η } + P { Y ≤ z } + P { Y ≤ z − η } ] = 3 1 ​ [ F Y ​ ( z + η ) + F Y ​ ( z ) + F Y ​ ( z − η ) ] ​ 求得概率密度函数： f Z ​ ( z ) = 3 1 ​ [ f Y ​ ( z + η ) + f Y ​ ( z ) + f Y ​ ( z − η ) ] = ⎩ ⎨ ⎧ ​ 3 1 ​ , 0 , ​ − η ≤ z < 2 η 其他 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\nX1,X2,⋯,Xn\n是总体为\nN(μ,σ2)\n的简单随机样本，记\n\nXˉ=n1i=1∑nXi,S2=n−11i=1∑n(Xi−Xˉ)2\n\n定义统计量\n\nT=Xˉ2−n1S2\n\n证明\nT\n是\nμ2\n的无偏估计量。\n\n当\nμ=0\n，\nσ=1\n时，求\nDT\n。\n",
    referenceAnswer: "【答案】 见解析 D ( T ) = n ( n − 1 ) 2 ​ 【解析】 (1) 因为 X ∼ N ( μ , σ 2 ) ，所以 X ˉ ∼ N ( μ , n σ 2 ​ ) ，从而 E X ˉ = μ ， D X ˉ = n σ 2 ​ 。 E ( T ) ​ = E ( X 2 − n 1 ​ S 2 ) = E X 2 − n 1 ​ E ( S 2 ) = D X + ( E X ) 2 − n 1 ​ E ( S 2 ) = n 1 ​ σ 2 + μ 2 − n 1 ​ σ 2 = μ 2 ​ 所以， T 是 μ 2 的无偏估计量。 (2) 方法一 ： D ( T ) = E T 2 − ( ET ) 2 。当 μ = 0 时， E ( T ) = 0 ， E ( S 2 ) = σ 2 = 1 。 D ( T ) ​ = E T 2 = E ( X 4 − n 2 ​ X 2 ⋅ S 2 + n 2 S 4 ​ ) = E ( X 4 ) − n 2 ​ E ( X 2 ) E ( S 2 ) + n 2 1 ​ E ( S 4 ) ​ 因为 X ∼ N ( 0 , 1 ) ，所以 X ˉ ∼ N ( 0 , n 1 ​ ) 。 E X ˉ = 0 , D X ˉ = n 1 ​ , E X ˉ 2 = D X ˉ + ( E X ˉ ) 2 = n 1 ​ E ( X 4 ) ​ = D ( X 2 ) + E 2 ( X 2 ) = D ( n ​ 1 ​ n ​ X ˉ ) 2 + [ D ( X ˉ ) + E 2 ( X ˉ ) ] 2 = n 2 1 ​ D ( n ​ X ˉ ) 2 + [ D ( X ˉ ) ] 2 = n 2 1 ​ × 2 + ( n 1 ​ ) 2 = n 2 3 ​ ​ E S 4 = E [ ( S 2 ) 2 ] = D S 2 + ( E S 2 ) 2 = D S 2 + 1 因为 W = σ 2 ( n − 1 ) S 2 ​ = ( n − 1 ) S 2 ∼ χ 2 ( n − 1 ) ，所以 D W = 2 ( n − 1 ) 。又因为 D W = ( n − 1 ) 2 D S 2 ，所以 D S 2 = ( n − 1 ) 2 ​ 。因此， E S 4 = ( n − 1 ) 2 ​ + 1 = n − 1 n + 1 ​ E T 2 = n 2 3 ​ − n 2 ​ ⋅ n 1 ​ × 1 + n 2 1 ​ ⋅ n − 1 n + 1 ​ = n ( n − 1 ) 2 ​ 方法二 ：当 μ = 0 ， σ = 1 时， D ( T ) ​ = D ( X 2 − n 1 ​ S 2 ) ( X S 2 ) = D X 2 + n 2 1 ​ D S 2 = n 2 1 ​ D ( n ​ X ) 2 + n 2 1 ​ ⋅ ( n − 1 ) 2 1 ​ D [ ( n − 1 ) S 2 ] ​ 由于 n ​ X ∼ N ( 0 , 1 ) ，则 ( n ​ X ) 2 ∼ χ 2 ( 1 ) ，故 D ( n ​ X ) 2 = 2 ，所以 n 2 1 ​ D ( n ​ X ) 2 = n 2 2 ​ 又因为 ( n − 1 ) S 2 ∼ χ 2 ( n − 1 ) ，其方差为 2 ( n − 1 ) ，所以 n 2 1 ​ ⋅ ( n − 1 ) 2 1 ​ D [ ( n − 1 ) S 2 ] = n 2 1 ​ ⋅ ( n − 1 ) 2 2 ( n − 1 ) ​ = n 2 ( n − 1 ) 2 ​ 因此， D ( T ) = n 2 2 ​ + n 2 ( n − 1 ) 2 ​ = n 2 ( n − 1 ) 2 ( n − 1 ) + 2 ​ = n 2 ( n − 1 ) 2 n ​ = n ( n − 1 ) 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2008_math3 = {
  id: P, year: Y,
  title: '2008 年全国硕士研究生招生考试 数学（三）',
  short: '2008 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2008_math3.length,
  qids: questions2008_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
