const P = 'paper-2008-math2'
const Y = 2008
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2008-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2008 考研数学（二）真题',
  ...extra
})

export const questions2008_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 f(x)=x2(x−1)(x−2)f(x)=x^2(x-1)(x-2)，求 f′(x)f'(x) 的零点个数（ ）",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["D"],
    explain: "正确答案： D 命题目的 考查乘积求导以及多项式零点个数的判断。 详细解答 由乘积求导， f ′( x )=2 x ( x −1)( x −2)+ x 2 ( x −2)+ x 2 ( x −1) 。\n整理得 f ′( x )=4 x 3 −9 x 2 +4 x = x (4 x 2 −9 x +4) 。 因此 f ′( x )=0 等价于 x =0 或 4 x 2 −9 x +4=0 。后二次方程判别式 Δ=81−64=17>0 ，有两个不同实根，且二者均不为 0。故 f ′( x ) 共有 3 个不同零点，选 D。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "如图，曲线段方程为 y=f(x)y=f(x)，函数在区间 [0,a][0,a] 上有连续导数，则定积分 ∫0axf′(x)dx\\displaystyle\\int_0^a xf'(x)\\,dx 等于（ ）",
    options: [{ key: "A", text: "曲边梯形 A B O D ABOD 面积" }, { key: "B", text: "梯形 A B O D ABOD 面积" }, { key: "C", text: "曲边三角形 A C D ACD 面积" }, { key: "D", text: "三角形 A C D ACD 面积" }],
    answer: ["C"],
    explain: "正确答案： C 命题目的 考查定积分的分部积分法及定积分的几何意义。 详细解答 ∫ 0 a ​ x f ′ ( x ) d x = ∫ 0 a ​ x df ( x ) = a f ( a ) − ∫ 0 a ​ f ( x ) d x 其中 a f ( a ) 表示矩形面积， ∫ 0 a ​ f ( x ) d x 表示曲边梯形的面积，因此 ∫ 0 a ​ x f ′ ( x ) d x 表示曲边三角形的面积。 易错辨析 若 f ( x ) ≤ 0 ，则曲边梯形的面积为： − ∫ 0 a ​ f ( x ) d x 延伸拓展 必须熟练掌握定积分的分部积分法及变量替换法。"
  }),
  base(3, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "在下列微分方程中，以 y=C1ex+C2cos2x+C3sin2xy=C_1e^x+C_2\\cos2x+C_3\\sin2x（C1,C2,C3C_1,C_2,C_3 为任意常数）为通解的是（ ）",
    options: [{ key: "A", text: "y ‴ + y ″ − 4 y ′ − 4 y = 0 y'''+y''-4y'-4y=0" }, { key: "B", text: "y ‴ + y ″ + 4 y ′ + 4 y = 0 y'''+y''+4y'+4y=0" }, { key: "C", text: "y ‴ − y ″ − 4 y ′ + 4 y = 0 y'''-y''-4y'+4y=0" }, { key: "D", text: "y ‴ − y ″ + 4 y ′ − 4 y = 0 y'''-y''+4y'-4y=0" }],
    answer: ["D"],
    explain: "正确答案： D 【命题目的】 考查高阶齐次常系数微分方程的解法。 【详细解答】 由 y = C 1 ​ e x + C 2 ​ cos 2 x + C 3 ​ sin 2 x 可知其特征根为 λ 1 ​ = 1 , λ 2 , 3 ​ = ± 2 i 特征方程为： ( λ − 1 ) ( λ + 2 i ) ( λ − 2 i ) = ( λ − 1 ) ( λ 2 + 4 ) 即 λ 3 − λ 2 + 4 λ − 4 = 0 所以所求微分方程为： y ′′′ − y ′′ + 4 y ′ − 4 y = 0 故选 (D)。 【易错辨析】 C 2 ​ cos 2 x + C 3 ​ sin 2 x 对应的特征方程为 ( λ + 2 i ) ( λ − 2 i ) = λ 2 + 4 【延伸拓展】 高阶齐次常系数微分方程的解法见同济大学《高等数学》第五版下册。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "判断函数 f(x)=ln|x||x−1|sinxf(x)=\\dfrac{\\ln|x|}{|x-1|}\\sin x 间断点的情况（ ）",
    options: [{ key: "A", text: "有1个可去间断点，1个跳跃间断点" }, { key: "B", text: "有1个跳跃间断点，1个无穷间断点" }, { key: "C", text: "有两个无穷间断点" }, { key: "D", text: "有两个跳跃间断点" }],
    answer: ["A"],
    explain: "正确答案： A 命题目的 考查函数间断点及其类型。 详细解答 函数 f ( x ) 的间断点为 x = 0 和 x = 1 。 计算极限得： x → 0 + lim ​ f ( x ) = 0 因此 x = 0 是可去间断点。 又： x → 1 + lim ​ f ( x ) = sin 1 , x → 1 − lim ​ f ( x ) = − sin 1 左右极限存在但不相等，因此 x = 1 是跳跃间断点。 故应选 (A)。 延伸拓展 在点 x 处可导一定连续，但连续不一定可导。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 f(x)f(x) 在 (−∞,+∞)(-\\infty,+\\infty) 内单调有界，{xn}\\{x_n\\} 为数列，下列命题正确的是（ ）",
    options: [{ key: "A", text: "若 { x n } \\{x_n\\} 收敛，则 { f ( x n ) } \\{f(x_n)\\} 收敛" }, { key: "B", text: "若 { x n } \\{x_n\\} 单调，则 { f ( x n ) } \\{f(x_n)\\} 收敛" }, { key: "C", text: "若 { f ( x n ) } \\{f(x_n)\\} 收敛，则 { x n } \\{x_n\\} 收敛" }, { key: "D", text: "若 { f ( x n ) } \\{f(x_n)\\} 单调，则 { x n } \\{x_n\\} 收敛" }],
    answer: ["B"],
    explain: "正确答案： B 命题目的 考查定理：单调有界数列一定有极限。 详细解答 若 x n ​ 单调，则由 f ( x ) 在 ( − ∞ , + ∞ ) 内单调有界，可知 f ( x n ​ ) 单调有界，因此 f ( x n ​ ) 收敛，故应选 (B)。 延伸拓展 “单调有界数列一定有极限”具体表述为： 单增有上界数列一定有极限； 单减有下界数列一定有极限。"
  }),
  base(6, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 ff 连续。若 F(u,v)=∬Duvf(x2+y2)x2+y2dxdyF(u,v)=\\displaystyle\\iint_{D_{uv}}\\frac{f(x^2+y^2)}{\\sqrt{x^2+y^2}}\\,dxdy，其中区域 DuvD_{uv} 为图中阴影部分，则 ∂F∂u=\\dfrac{\\partial F}{\\partial u}=（ ）",
    options: [{ key: "A", text: "v f ( u 2 ) vf(u^2)" }, { key: "B", text: "v u f ( u 2 ) \\dfrac{v}{u}f(u^2)" }, { key: "C", text: "v f ( u ) vf(u)" }, { key: "D", text: "v u f ( u ) \\dfrac{v}{u}f(u)" }],
    answer: ["A"],
    explain: "正确答案： A [命题目的]考查二重积分的极坐标变换及求偏导数和对定积分上限变量求导。 [详细解答]用极坐标得 F ( u , v ) = ∫ 0 v ​ d θ ∫ 1 u ​ r f ( r 2 ) ​ ⋅ r d r = v ∫ 1 u ​ f ( r 2 ) d r , 因此 ∂ u ∂ F ​ = v f ( u 2 ) ."
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 AA 为 nn 阶非零矩阵，EE 为 nn 阶单位矩阵。若 A3=OA^3=O，则（ ）",
    options: [{ key: "A", text: "E − A E-A 不可逆， E + A E+A 不可逆" }, { key: "B", text: "E − A E-A 不可逆， E + A E+A 可逆" }, { key: "C", text: "E − A E-A 可逆， E + A E+A 可逆" }, { key: "D", text: "E − A E-A 可逆， E + A E+A 不可逆" }],
    answer: ["C"],
    explain: "正确答案： C 命题目的 考查逆矩阵的概念。 详细解答 方法一 由已知 A 3 = 0 ，可得 ( E − A ) ( E + A + A 2 ) = E − A 3 = E , ( E + A ) ( E − A + A 2 ) = E + A 3 = E . 因此 E − A 与 E + A 均可逆。 方法二 设 A 的特征值为 λ ，由 A 3 = 0 可得 λ 3 = 0 ，从而 λ = 0 。 于是 E − A 与 E + A 的特征值均为 1，因此 ∣ E − A ∣ = 1 , ∣ E + A ∣ = 1 , 故 E − A 与 E + A 均可逆。 易错辨析 由 A 3 = 0 不能推出 A = 0 。 延伸拓展 矩阵 A 可逆的充要条件： 存在矩阵 B 满足 A B = B A = E ； 存在矩阵 B 满足 A B = E 或 B A = E ； ∣ A ∣  = 0 ； A 的所有特征值不等于 0； r ( A ) = n 。 设 A 的特征值为 λ ，则多项式 P n ​ ( A ) 的特征值为 P n ​ ( λ ) 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 A=(1221)A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}，则在实数域上与 AA 合同的矩阵为（ ）",
    options: [{ key: "A", text: "( − 2 1 1 − 2 ) \\begin{pmatrix}-2&1\\\\1&-2\\end{pmatrix}" }, { key: "B", text: "( 2 − 1 − 1 2 ) \\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}" }, { key: "C", text: "( 2 1 1 2 ) \\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}" }, { key: "D", text: "( 1 − 2 − 2 1 ) \\begin{pmatrix}1&-2\\\\-2&1\\end{pmatrix}" }],
    answer: ["D"],
    explain: "正确答案： D 【命题目的】考查两个矩阵合同的概念。 【详细解答】 方法一：计算特征值。 ∣ λ E − A ∣ = ​ λ − 1 − 2 ​ − 2 λ − 1 ​ ​ = ( λ − 1 ) 2 − 4 = λ 2 − 2 λ − 3 = ( λ + 1 ) ( λ − 3 ) = 0 因此 λ 1 ​ = − 1 ， λ 2 ​ = 3 。 记 D = ( 1 − 2 ​ − 2 1 ​ ) ，则 ∣ λ E − D ∣ = ​ λ − 1 2 ​ 2 λ − 1 ​ ​ = ( λ − 1 ) 2 − 4 = λ 2 − 2 λ − 3 = ( λ + 1 ) ( λ − 3 ) = 0 因此 λ 1 ​ = − 1 ， λ 2 ​ = 3 。 方法二：利用行列式与特征值的关系。 ∣ A ∣ = ​ 1 2 ​ 2 1 ​ ​ = − 3 = λ 1 ​ λ 2 ​ 说明 A 的特征值一正一负。 对于 D ： ∣ D ∣ = ​ 1 − 2 ​ − 2 1 ​ ​ = − 3 说明 D 的特征值也为一正一负。 A 与 D 的正负惯性指数相同，因此应选 (D)。 【易错辨析】方法二仅适用于本题（读者可自行思考原因）。 【延伸拓展】两个矩阵的等价、相似、合同概念存在不同之处。"
  }),
  base(9, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "f(x)f(x) 连续，limx→01−cos[xf(x)](ex2−1)f(x)=1\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos[xf(x)]}{(e^{x^2}-1)f(x)}=1，则 f(0)=f(0)= ________。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 命题目的 考查等价无穷小与函数连续性。 详细解答 由 f 在 x =0 连续， x →0 时 f ( x ) 有界，因此 x f ( x )→0 。利用 1−cos u ∼ u 2 /2 与 e x 2 −1∼ x 2 ，有 1=lim x →0 [(1−cos( x f ( x )))/(( e x 2 −1) f ( x ))]=lim x →0 f ( x )/2 。 由连续性得到 f (0)/2=1 ，所以 f (0)=2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "微分方程 (y+x2e−x)dx−xdy=0(y+x^2e^{-x})dx-xdy=0 的通解是 y=y= ________。",
    answerText: "】 y = − x e − x + C x 【",
    referenceAnswer: "【答案】 y = − x e − x + C x 【解析】 ## 题目\n（填空题）微分方程 ( y + x 2 e − x ) d x − x d y = 0 的通解是 y = 解析 命题目的考查求解一阶线性微分方程。 详细解答将方程整理为 y ′ − x y ​ = x e − x ， 其中 P = − x 1 ​ ， Q = x e − x 。 利用一阶线性微分方程通解公式： y = e ∫ x 1 ​ d x ( ∫ x e − x e ∫ x 1 ​ d x d x + C ) = x ( ∫ e − x d x + C ) = − x e − x + C x 延伸拓展： 也可用常数变易法求解一阶线性微分方程； 一阶线性微分方程通解 = 齐次方程通解 + 非齐次方程特解。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 sin(xy)+ln(y−x)=x\\sin(xy)+\\ln(y-x)=x 在点 (0,1)(0,1) 处的切线方程为 ________。",
    answerText: "】 y = x + 1 【",
    referenceAnswer: "【答案】 y = x + 1 【解析】 命题目的 ：考查隐函数求导及导数的几何意义。 详细解答 方法一 ：设 F ( x , y ) = sin ( x y ) + ln ( y − x ) − x , 计算 k = − F y ​ F x ​ ​ = − x cos ( x y ) + y − x 1 ​ y cos ( x y ) + y − x − 1 ​ − 1 ​ . 代入 x = 0 ， y = 1 ，得 k = 1 ，切线方程为 y = x + 1 。 方法二 ：方程两边对 x 求导， cos ( x y ) ⋅ ( y + x y ′ ) + y − x y ′ − 1 ​ = 1 , 令 x = 0 ， y = 1 ，得 k = y ′ ( 0 ) = 1 ，切线方程为 y = x + 1 。 易错辨析 ： sin ( x y ) 对 x 求导时， y 是中间变量。计算时不必求出 y ′ 的表达式，直接代入 x = 0 ， y = 1 即可得出 k = 1 。 延伸拓展 ：只要不对自变量 x 求导，都要按照复合函数求导。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "求函数 f(x)=(x−5)x23f(x)=(x-5)x^{\\frac23} 的拐点 ________。",
    answerText: "】 ( − 1 , − 6 ) 【",
    referenceAnswer: "【答案】 ( − 1 , − 6 ) 【解析】 命题目的考查拐点的概念。 详细解答计算 f ′ ( x ) = x 3 2 ​ + ( x − 5 ) ⋅ 3 2 ​ x − 3 1 ​ = 3 5 ​ ( x − 2 ) x − 3 1 ​ ，再求二阶导数 f ′′ ( x ) = 9 10 ​ x − 3 4 ​ ( x + 1 ) ，令其为零得 x = − 1 。 当 x = − 1 时， f ′′ ( x ) 左右两边符号改变，故拐点坐标为 ( − 1 , − 6 ) 。 当 x = 0 时，二阶导数不存在，且 f ′′ ( x ) 左右两边符号不变，故 ( 0 , 0 ) 不是拐点。 易错辨析 如果在 ( 0 , 0 ) 两侧 f ′′ ( x ) 符号改变，则 ( 0 , 0 ) 也是拐点； 拐点应表示为 ( x 0 ​ , f ( x 0 ​ )) 。 延伸拓展 如果在 ( x 0 ​ , f ( x 0 ​ )) 两侧 f ′′ ( x ) 符号改变，则 ( x 0 ​ , f ( x 0 ​ )) 是拐点。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知 z=(yx)xyz=\\left(\\dfrac{y}{x}\\right)^{\\frac{x}{y}}，则 ∂z∂x|(1,2)=\\left.\\dfrac{\\partial z}{\\partial x}\\right|_{(1,2)}= ________。",
    answerText: "】 2 2 ​ ​ ( ln 2 − 1 ) 【",
    referenceAnswer: "【答案】 2 2 ​ ​ ( ln 2 − 1 ) 【解析】 命题目的考查多元函数的复合函数求导。 详细解答 方法一 ：令 u = x y ​ ， v = y x ​ ，则 z = u v 。取对数后对 x 求导，可得： z 1 ​ ∂ x ∂ z ​ = y 1 ​ ln x y ​ − y 1 ​ 代入点 ( 1 , 2 ) 得： ∂ x ∂ z ​ ​ ( 1 , 2 ) ​ = 2 2 ​ ​ ( ln 2 − 1 ) 方法二 ：直接取对数后对 x 求导，代入 ( 1 , 2 , 2 ​ ) 得： ∂ x ∂ z ​ ​ ( 1 , 2 ) ​ = 2 2 ​ ​ ( ln 2 − 1 ) 易错辨析 ：方法二比方法一运算量小，不易出错。 延伸拓展 ：本题也可求全微分： d z = ∂ x ∂ z ​ d x + ∂ y ∂ z ​ d y",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "矩阵 AA 的特征值是 λ,2,3\\lambda,2,3，其中 λ\\lambda 未知，且 |2A|=−48|2A|=-48，则 λ=\\lambda= ________。",
    answerText: "】 λ = − 1 【",
    referenceAnswer: "【答案】 λ = − 1 【解析】 命题目的考查 ∣ A ∣ = λ 1 ​ λ 2 ​ ⋯ λ n ​ 与 ∣ k A ∣ = k n ∣ A ∣ 。 详细解答如下：由 ∣2 A ∣ = 2 3 ∣ A ∣ = − 48 ，得 ∣ A ∣ = − 6 。又因为 ∣ A ∣ = 2 × 3 × λ = − 6 ，故 λ = − 1 。 易错辨析：常见错误是误以为 ∣2 A ∣ = 2∣ A ∣ = − 48 ，正确应为 ∣2 A ∣ = 2 3 ∣ A ∣ 。 延伸拓展：假设 A 的特征值为 λ ，则 A 的多项式 P n ​ ( A ) 的特征值为 P n ​ ( λ ) 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "(本题满分9 分)求极限 limx→0[sinx−sin(sinx)]sinxx4\\displaystyle\\lim_{x\\to0}\\frac{[\\sin x-\\sin(\\sin x)]\\sin x}{x^4}。",
    referenceAnswer: "【答案】 6 1 ​ 【解析】 x → 0 lim ​ x 4 [ sin x − sin ( sin x )] sin x ​ ​ = x → 0 lim ​ x 3 sin x − sin ( sin x ) ​ = x → 0 lim ​ 3 x 2 cos x − cos ( sin x ) ⋅ cos x ​ = x → 0 lim ​ 3 x 2 cos x [ 1 − cos ( sin x )] ​ = x → 0 lim ​ 3 x 2 2 1 ​ sin 2 x ⋅ cos x ​ = 6 1 ​ . ​ [命题目的] 考查 0 0 ​ 型极限的计算。 [思路点拨] 先使用等价无穷小代换，然后使用洛必达法则。 [易错辨析] 对于加、减项不能使用等价无穷小代换。 [延伸拓展] “ 0 0 ​ ”、“ 1 ∞ ”等其他不定型的极限的求法。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分10 分)设函数 y=y(x)y=y(x) 由参数方程 {x=x(t),y=∫0t2ln(1+u)du\\begin{cases}x=x(t),\\\\[4pt]y=\\displaystyle\\int_0^{t^2}\\ln(1+u)\\,du\\end{cases} 确定，其中 x(t)x(t) 是初值问题 {dxdt−2te−x=0,x|t=0=0\\begin{cases}\\dfrac{dx}{dt}-2te^{-x}=0,\\\\[4pt]x|_{t=0}=0\\end{cases} 的解。求 d2ydx2\\dfrac{d^2y}{dx^2}。",
    referenceAnswer: "【答案】 \\[\\frac{d^{2}y}{dx^{2}} = (1 + t^{2})\\left[\\ln(1 + t^{2}) + 1\\right] \\] 【解析】 [详细解答] 已知 e x d x = 2 t d t ，积分得 e x = t 2 + C 。由 x ∣ t = 0 ​ = 0 得 C = 1 ，故 x = ln ( 1 + t 2 ) 。 d x d y ​ = x t ′ ​ y t ′ ​ ​ = 1 + t 2 2 t ​ 2 t ln ( 1 + t 2 ) ​ = ( 1 + t 2 ) ln ( 1 + t 2 ) d x 2 d 2 y ​ = x t ′ ​ [ ( 1 + t 2 ) ln ( 1 + t 2 ) ] ′ ​ = 1 + t 2 2 t ​ 2 t ln ( 1 + t 2 ) + 2 t ​ = ( 1 + t 2 ) [ ln ( 1 + t 2 ) + 1 ] [命题目的] 考查求微分方程特解和参数方程求导。 [思路点拨] 对 x 和 t ，为可分离变量方程； 求导过程中， t 是中间变量。 [延伸拓展] 可用相同方法求三阶导数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "(本题满分9 分)计算 ∫01x2arcsinx1−x2dx\\displaystyle\\int_0^1\\frac{x^2\\arcsin x}{\\sqrt{1-x^2}}\\,dx。",
    referenceAnswer: "【答案】 4 1 ​ + 16 π 2 ​ 【解析】 命题目的 考查定积分的变量替换。 思路点拨 对含 a 2 − x 2 ​ 类型的积分，令 x = a sin t 。 详细解答 令 x = sin t ，则 ∫ 0 1 ​ 1 − x 2 ​ x 2 arcsin x ​ d x ​ = ∫ 0 2 π ​ ​ cos t sin 2 t ⋅ t ​ cos t d t = ∫ 0 2 π ​ ​ t sin 2 t d t = 2 1 ​ ∫ 0 2 π ​ ​ t d t − 2 1 ​ ∫ 0 2 π ​ ​ t cos 2 t d t = 4 1 ​ + 16 π 2 ​ ​ 易错辨析 定积分变量替换一定要改变上下限。 延伸拓展 对含 a 2 + x 2 ​ 类型的积分，令 x = a tan t 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11 分)计算 ∬Dmax{xy,1}dxdy\\displaystyle\\iint_D\\max\\{xy,1\\}\\,dxdy，其中 D={(x,y)∣0≤x≤2,0≤y≤2}D=\\{(x,y)\\mid 0\\le x\\le2,\\ 0\\le y\\le2\\}。",
    referenceAnswer: "【答案】 4 19 ​ + ln 2 【解析】 曲线 x y = 1 将区域分成三个区域 D 1 ​ , D 2 ​ , D 3 ​ ： 从而所求的积分 ∬ D ​ max ( x y , 1 ) d x d y ​ = ∬ D 1 ​ ​ x y d x d y + ∬ D 2 ​ ​ 1 d x d y + ∬ D 3 ​ ​ 1 d x d y = ∫ 0 2 1 ​ ​ d x ∫ 0 2 ​ 1 d y + ∫ 2 1 ​ 2 ​ d x ∫ 0 x 1 ​ ​ 1 d y ∫ 2 1 ​ 2 ​ d x ∫ x 1 ​ 2 ​ x y d y = 1 + 2 ln 2 + 4 15 ​ − ln 2 = 4 19 ​ + ln 2. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11 分)设 f(x)f(x) 是区间 [0,+∞)[0,+\\infty) 上具有连续导数的单调增加函数，且 f(0)=1f(0)=1。对于任意的 t∈[0,+∞)t\\in[0,+\\infty)，直线 x=0,x=tx=0,x=t，曲线 y=f(x)y=f(x) 以及 xx 轴所围成曲边梯形绕 xx 轴旋转一周生成一旋转体。若该旋转体的侧面面积在数值上等于其体积的2倍，求函数 f(x)f(x) 的表达式。",
    referenceAnswer: "【答案】 f ( x ) = cosh x 【解析】 ## 解析\n旋转体的体积公式为： V ( t ) = π ∫ 0 t ​ [ f ( x ) ] 2 d x 旋转体的侧面积公式为： S ( t ) = 2 π ∫ 0 t ​ f ( x ) 1 + [ f ′ ( x ) ] 2 ​ d x 由题意可知 S ( t ) = 2 V ( t ) ，即： 2 π ∫ 0 t ​ f ( x ) 1 + [ f ′ ( x ) ] 2 ​ d x = 2 π ∫ 0 t ​ [ f ( x ) ] 2 d x 两边对 t 求导，得到： f ( t ) 1 + [ f ′ ( t ) ] 2 ​ = [ f ( t ) ] 2 化简得： 1 + [ f ′ ( t ) ] 2 ​ = f ( t ) 两边平方得： 1 + [ f ′ ( t ) ] 2 = [ f ( t ) ] 2 整理得： [ f ′ ( t ) ] 2 = [ f ( t ) ] 2 − 1 由于 f ( x ) 单调增加，因此： f ′ ( t ) = [ f ( t ) ] 2 − 1 ​ 分离变量得： f 2 − 1 ​ df ​ = d t 积分得： ln ( f + f 2 − 1 ​ ) = t + C 由初始条件 f ( 0 ) = 1 ，代入得 C = 0 ，因此： ln ( f + f 2 − 1 ​ ) = t 解得： f ( x ) = 2 e x + e − x ​ = cosh x [命题目的] 考查旋转体侧面积、体积计算及微分方程的综合应用。 [思路点拨] 由 V ( t ) S ( t ) ​ = 2 对上限变量求导得到微分方程。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(20, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11 分)（Ⅰ）证明积分中值定理：若函数 f(x)f(x) 在闭区间 [a,b][a,b] 上连续，则至少存在一点 η∈[a,b]\\eta\\in[a,b]，使得 ∫abf(x)dx=f(η)(b−a)\\displaystyle\\int_a^b f(x)\\,dx=f(\\eta)(b-a)；\n\n（Ⅱ）若函数 φ(x)\\varphi(x) 具有二阶导数，且满足 φ(2)>φ(1)\\varphi(2)>\\varphi(1)，φ(2)>∫23φ(x)dx\\displaystyle\\varphi(2)>\\int_2^3\\varphi(x)\\,dx，则至少存在一点 ξ∈(1,3)\\xi\\in(1,3)，使得 φ″(ξ)0\\varphi''(\\xi)。",
    referenceAnswer: "【答案】 见解析 【解析】 设 M 及 m 分别是函数 f ( x ) 在区间 [ a , b ] 上的最大值及最小值，则 m ( b − a ) ≤ ∫ a b ​ f ( x ) d x ≤ M ( b − a ) 将不等式两边除以 b − a ，得 m ≤ b − a 1 ​ ∫ a b ​ f ( x ) d x ≤ M 根据闭区间上连续函数的介值定理，在 [ a , b ] 上至少存在一点 η ，使得 f ( η ) = b − a 1 ​ ∫ a b ​ f ( x ) d x 即 ∫ a b ​ f ( x ) d x = f ( η ) ( b − a ) 由积分中值定理，存在 c ∈ ( 2 , 3 ) ，使得 ∫ 2 3 ​ φ ( x ) d x = φ ( c ) 由题设 φ ( 2 ) > φ ( 1 ) 且 φ ( 2 ) > φ ( c ) 。 对 φ ( x ) 在区间 [ 1 , 2 ] 和 [ 2 , c ] 上分别应用拉格朗日中值定理，得 φ ′ ( ξ 1 ​ ) = 2 − 1 φ ( 2 ) − φ ( 1 ) ​ > 0 , ξ 1 ​ ∈ ( 1 , 2 ) φ ′ ( ξ 2 ​ ) = c − 2 φ ( c ) − φ ( 2 ) ​ < 0 , ξ 2 ​ ∈ ( 2 , c ) 再对 φ ′ ( x ) 在区间 [ ξ 1 ​ , ξ 2 ​ ] 上应用拉格朗日中值定理，存在 ξ ∈ ( ξ 1 ​ , ξ 2 ​ ) ⊂ ( 1 , 3 ) 使得 φ ′′ ( ξ ) = ξ 2 ​ − ξ 1 ​ φ ′ ( ξ 2 ​ ) − φ ′ ( ξ 1 ​ ) ​ < 0 [命题目的] 考查积分中值定理证明及导数应用。 [思路点拨] 第一问的结果是解答第二问的关键。 [易错辨析] 连续函数的介值定理中 η 在闭区间 [ a , b ] 上。 [延伸拓展] 改进后的积分中值定理中 ξ 可在开区间 ( a , b ) 上。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11 分)求函数 u=x2+y2+z2u=x^2+y^2+z^2 在约束条件 z=x2+y2z=x^2+y^2 和 x+y+z=4x+y+z=4 下的最大和最小值。",
    referenceAnswer: "【答案】 最大值 72，最小值 6 【解析】 命题目的 考查条件极值的拉格朗日乘数法。 思路点拨 求解具有两个约束条件的条件极值，方法与单一约束条件的情形相同。 详细解答 设 F ( x , y , z ) = x 2 + y 2 + z 2 + λ 1 ​ ( x 2 + y 2 − z ) + λ 2 ​ ( x + y + z − 4 ) 得到方程组 ⎩ ⎨ ⎧ ​ F x ​ = 0 F y ​ = 0 F z ​ = 0 x 2 + y 2 − z = 0 x + y + z − 4 = 0 ​ 即 ⎩ ⎨ ⎧ ​ 2 x + 2 x λ 1 ​ + λ 2 ​ = 0 2 y + 2 y λ 1 ​ + λ 2 ​ = 0 2 z − λ 1 ​ + λ 2 ​ = 0 x 2 + y 2 − z = 0 x + y + z − 4 = 0 ​ 解得 ⎩ ⎨ ⎧ ​ x = − 2 y = − 2 z = 8 ​ 或 ⎩ ⎨ ⎧ ​ x = 1 y = 1 z = 2 ​ 于是 U m a x ​ = ( − 2 ) 2 + ( − 2 ) 2 + 8 2 = 72 U m i n ​ = 1 2 + 1 2 + 2 2 = 6 易错辨析 求解方程组是最容易出错的地方，计算时应仔细。 延伸拓展 可进一步探讨具有更多约束条件的最值问题。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分12 分)设 nn 元线性方程组 Ax=bAx=b，其中 A=(2a1a22a1⋱⋱⋱a22a1a22a)n×nA=\\begin{pmatrix}2a&1&&&\\\\a^2&2a&1&&\\\\&\\ddots&\\ddots&\\ddots&\\\\&&a^2&2a&1\\\\&&&a^2&2a\\end{pmatrix}_{n\\times n}，x=(x1x2⋮xn)x=\\begin{pmatrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{pmatrix}，b=(10⋮0)b=\\begin{pmatrix}1\\\\0\\\\\\vdots\\\\0\\end{pmatrix}。\n\n（Ⅰ）证明行列式 |A|=(n+1)an|A|=(n+1)a^n；\n\n（Ⅱ）当 aa 为何值时，该方程组有唯一解，并求 x1x_1；\n\n（Ⅲ）当 aa 为何值时，该方程组有无穷多解，并求通解。",
    referenceAnswer: "【答案】 (I) 见解析 (II) 当 a  = 0 时，方程组有唯一解，且 x 1 ​ = ( n + 1 ) a n ​ (III) 当 a = 0 时，方程组有无穷多解，且通解为 x = k ​ 1 0 0 ⋮ 0 ​ ​ + ​ 0 1 0 ⋮ 0 ​ ​ ，其中 k 为任意常数。 【解析】 命题目的 计算 n 阶三对角线行列式、求解非齐次方程组。 思路点拨 非齐次方程组的通解 = 齐次方程组的通解 + 非齐次方程组的特解。 详细解答 (I) ∣ A ∣ = ​ 2 a a 2 ​ 1 2 a ⋱ ​ ⋱ ⋱ ⋱ ​ ⋱ ⋱ a 2 ​ 1 2 a ​ ​ = ( n + 1 ) a n . 另一种方法（递推法）： D n ​ = ∣ A ∣ = ​ 2 a a 2 ​ 1 2 a a 2 ​ 1 2 a ⋱ ​ ⋱ ⋱ ⋱ ​ ⋱ ⋱ a 2 ​ 1 2 a ​ ​ = 2 a D n − 1 ​ − a 2 D n − 2 ​ . 直接计算得： D 1 ​ = 2 a = ( 1 + 1 ) a 1 ， D 2 ​ = 3 a 2 = ( 2 + 1 ) a 2 ， 假设 D n − 1 ​ = n a n − 1 ，则 D n ​ ​ = 2 a D n − 1 ​ − a 2 D n − 2 ​ = 2 a ⋅ n a n − 1 − a 2 ⋅ ( n − 1 ) a n − 2 = ( 2 n − n + 1 ) a n = ( n + 1 ) a n . ​ (II) 方程组有唯一解时，由 A x = B 知 ∣ A ∣  = 0 ，又 ∣ A ∣ = ( n + 1 ) a n ，故 a  = 0 。 记 A = A n × n ​ ，由克莱姆法则知， x 1 ​ = ∣ A ∣ ∣ A 1 ​ ∣ ​ , 其中 A 1 ​ 是将 A 的第一列替换为 b 后的行列式。经计算可得 x 1 ​ = ( n + 1 ) a n n a n − 1 ​ = ( n + 1 ) a n ​ . (III) 方程组有无穷多解时， ∣ A ∣ = 0 ，即 a = 0 。此时 ( A ∣ B ) = ​ 0 0 ⋮ 0 ​ 1 0 ⋮ 0 ​ 0 1 ⋮ 0 ​ ⋯ ⋯ ⋱ ⋯ ​ 1 0 ⋮ 0 ​ ​ . 对应的齐次方程组 A x = 0 的基础解系为 ξ = ( 1 , 0 , 0 , … , 0 ) T , 非齐次方程组的一个特解为 η = ( 0 , 1 , 0 , … , 0 ) T , 故通解为 x = k ( 1 , 0 , 0 , … , 0 ) T + ( 0 , 1 , 0 , … , 0 ) T , 其中 k 为任意常数。 易错辨析 用递推法计算 ∣ A ∣ 的值比使用行列式性质计算，运算量要小得多。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(23, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "(本题满分10 分)设 AA 为3阶矩阵，α1,α2\\alpha_1,\\alpha_2 为 AA 的分别属于特征值 −1,1-1,1 的特征向量，向量 α3\\alpha_3 满足 Aα3=α2+α3A\\alpha_3=\\alpha_2+\\alpha_3。\n\n（Ⅰ）证明 α1,α2,α3\\alpha_1,\\alpha_2,\\alpha_3 线性无关；\n\n（Ⅱ）令 P=(α1,α2,α3)P=(\\alpha_1,\\alpha_2,\\alpha_3)，求 P−1APP^{-1}AP。",
    referenceAnswer: "【答案】 (Ⅰ) 见解析； (Ⅱ) ( -1 0 0 0 1 1 0 0 1 ) \\begin{pmatrix}-1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix} 【解析】 命题目的 考查特征向量的线性无关性以及相似变换矩阵的求法。 (Ⅰ) 设 k 1 α 1 + k 2 α 2 + k 3 α 3 =0 。两边左乘 A ，利用 A α 1 =−α 1 ， A α 2 =α 2 ， A α 3 =α 2 +α 3 ，得 − k 1 α 1 +( k 2 + k 3 )α 2 + k 3 α 3 =0 。 与原式相减，得 2 k 1 α 1 − k 3 α 2 =0 。因 α 1 ,α 2 属于不同特征值，二者线性无关，故 k 1 = k 3 =0 ；再代回原式得 k 2 =0 。所以 α 1 ,α 2 ,α 3 线性无关。 (Ⅱ) 记 P =(α 1 ,α 2 ,α 3 ) 。按列计算： A P =(−α 1 , α 2 , α 2 +α 3 )= P ( -1 0 0 0 1 1 0 0 1 ) \\begin{pmatrix}-1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix} 。 由 (Ⅰ) 知 P 可逆，所以 P −1 A P = ( -1 0 0 0 1 1 0 0 1 ) \\begin{pmatrix}-1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix} 。 第三列必须是 (0,1,1) T ，故非对角元 1 应位于第 2 行第 3 列。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
]

export const paper2008_math2 = {
  id: P, year: Y,
  title: '2008 年全国硕士研究生招生考试 数学（二）',
  short: '2008 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2008_math2.length,
  qids: questions2008_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
