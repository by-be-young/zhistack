const P = 'paper-2021-math3'
const Y = 2021
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2021-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2021 考研数学（三）真题',
  ...extra
})

export const questions2021_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "当\nx→0\n时，\n∫0x2(et3−1)dt\n是\nx7\n的",
    options: [{ key: "A", text: "低阶无穷小." }, { key: "B", text: "等价无穷小." }, { key: "C", text: "高阶无穷小." }, { key: "D", text: "同阶但非等价无穷小." }],
    answer: ["C"],
    explain: "正确答案： C 因为当 x → 0 时， [ ∫ 0 x 2 ​ ( e t 3 − 1 ) d t ] ′ = 2 x ( e x 6 − 1 ) ∼ x 7 所以 ∫ 0 x 2 ​ ( e t 3 − 1 ) d t 是 x 7 的高阶无穷小，正确答案为 C。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\n\nf(x)={xex−1,1,x0x=0\n\n在\nx=0\n处",
    options: [{ key: "A", text: "连续且取极大值." }, { key: "B", text: "连续且取极小值." }, { key: "C", text: "可导且导数为0." }, { key: "D", text: "可导且导数不为0." }],
    answer: ["D"],
    explain: "正确答案： D 因为 lim x → 0 ​ f ( x ) = lim x → 0 ​ x e x − 1 ​ = 1 = f ( 0 ) ，故 f ( x ) 在 x = 0 处连续。 进一步计算导数： x → 0 lim ​ x − 0 f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x x e x − 1 ​ − 1 ​ = x → 0 lim ​ x 2 e x − 1 − x ​ = 2 1 ​ 因此， f ′ ( 0 ) = 2 1 ​ ，所以正确答案是 D。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x)=ax+blnx\n（\na>0\n）有两个零点，则\nab\n的取值范围是",
    options: [{ key: "A", text: "( e , + ∞ ) ." }, { key: "B", text: "( − ∞ , e ) ." }, { key: "C", text: "( 0 , e 1 ​ ) ." }, { key: "D", text: "( e 1 ​ , + ∞ ) ." }],
    answer: ["A"],
    explain: "正确答案： A 令 f ( x ) = a x + b ln x = 0 ，其导数为 f ′ ( x ) = a + x b ​ 。令 f ′ ( x ) = 0 ，得到驻点 x = − a b ​ 。 由 f ( − a b ​ ) = a ⋅ ( − a b ​ ) + b ⋅ ln ( − a b ​ ) < 0 ，可得： ln ( − a b ​ ) > 1 进而有： − a b ​ > e ⇒ a b ​ < − e 但选项中无此结果，推测题目中函数应为 f ( x ) = a x − b ln x （ a > 0 ）。 此时导数为 f ′ ( x ) = a − x b ​ ，驻点为 x = a b ​ 。由 f ( a b ​ ) = a ⋅ a b ​ − b ⋅ ln a b ​ < 0 ，可得： ln a b ​ > 1 因此： a b ​ > e 正确答案为 A 。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x,y)\n可微，\nf(x+1,ex)=x(x+1)2\n，\nf(x,x2)=2x2lnx\n，则\ndf(1,1)=",
    options: [{ key: "A", text: "d x + d y ." }, { key: "B", text: "d x − d y ." }, { key: "C", text: "d y ." }, { key: "D", text: "− d y ." }],
    answer: ["C"],
    explain: "正确答案： C 对 f ( x + 1 , e x ) = x ( x + 1 ) 2 两边求导得： f 1 ′ ​ ( x + 1 , e x ) + e x f 2 ′ ​ ( x + 1 , e x ) = ( x + 1 ) 2 + 2 x ( x + 1 ) 对 f ( x , x 2 ) = 2 x 2 ln x 两边求导得： f 1 ′ ​ ( x , x 2 ) + 2 x f 2 ′ ​ ( x , x 2 ) = 4 x ln x + 2 x 将 x = 0 代入第一式得： f 1 ′ ​ ( 1 , 1 ) + f 2 ′ ​ ( 1 , 1 ) = 1 将 x = 1 代入第二式得： f 1 ′ ​ ( 1 , 1 ) + 2 f 2 ′ ​ ( 1 , 1 ) = 2 联立解得： f 1 ′ ​ ( 1 , 1 ) = 0 , f 2 ′ ​ ( 1 , 1 ) = 1 因此： df ( 1 , 1 ) = f 1 ′ ​ ( 1 , 1 ) d x + f 2 ′ ​ ( 1 , 1 ) d y = d y 正确答案为 C 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "二次型\nf(x1,x2,x3)=(x1+x2)2+(x2+x3)2−(x3−x1)2\n的正惯性指数与负惯性指数依次为",
    options: [{ key: "A", text: "2,0." }, { key: "B", text: "1,1." }, { key: "C", text: "2,1." }, { key: "D", text: "1,2." }],
    answer: ["B"],
    explain: "正确答案： B 将二次型展开得： f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 2 x 2 2 ​ + 2 x 1 ​ x 2 ​ + 2 x 2 ​ x 3 ​ + 2 x 1 ​ x 3 ​ 对应的矩阵为： A = ​ 0 1 1 ​ 1 2 1 ​ 1 1 0 ​ ​ 计算特征多项式： ∣ λ E − A ∣ = ​ λ − 1 − 1 ​ − 1 λ − 2 − 1 ​ − 1 − 1 λ ​ ​ = ( λ + 1 ) ( λ − 3 ) λ 令其等于零，得到特征值为 λ = − 1 , 3 , 0 。因此，该二次型的正惯性指数为 1，负惯性指数为 1，应选 B。"
  }),
  base(6, 'k-math-016', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA=(α1,α2,α3,α4)\n为 4 阶正交矩阵，若矩阵\nB=α1Tα2Tα3T\n，\nβ=111\n，\nk\n表示任意常数，则线性方程组\nBx=β\n的通解\nx=\n（  ）",
    options: [{ key: "A", text: "α 2 ​ + α 3 ​ + α 4 ​ + k α 1 ​" }, { key: "B", text: "α 1 ​ + α 3 ​ + α 4 ​ + k α 2 ​" }, { key: "C", text: "α 1 ​ + α 2 ​ + α 4 ​ + k α 3 ​" }, { key: "D", text: "α 1 ​ + α 2 ​ + α 3 ​ + k α 4 ​" }],
    answer: ["D"],
    explain: "正确答案： D 因为 A = ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) 为4阶正交矩阵，所以向量组 α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ 是一组标准正交向量组，则 r ( B ) = 3 。 又 B α 4 ​ = ​ α 1 T ​ α 2 T ​ α 3 T ​ ​ ​ α 4 ​ = 0 所以齐次线性方程组 B x = 0 的通解为 k α 4 ​ 。 而 B ( α 1 ​ + α 2 ​ + α 3 ​ ) = ​ α 1 T ​ α 2 T ​ α 3 T ​ ​ ​ ( α 1 ​ + α 2 ​ + α 3 ​ ) = ​ 1 1 1 ​ ​ = β 故线性方程组 B x = β 的通解为 x = α 1 ​ + α 2 ​ + α 3 ​ + k α 4 ​ 其中 k 为任意常数。故应选D。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA=12−10−12−11−5\n，\nP\n为三阶可逆矩阵，\nQ\n为三阶矩阵，使\nPAQ\n为对角矩阵，则\nP\n，\nQ\n可以分别取",
    options: [{ key: "A", text: "​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ， ​ 1 0 0 ​ 0 1 0 ​ 1 3 1 ​ ​ 。" }, { key: "B", text: "​ 1 2 − 3 ​ 0 − 1 2 ​ 0 0 1 ​ ​ ， ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ 。" }, { key: "C", text: "​ 1 2 − 3 ​ 0 − 1 2 ​ 0 0 1 ​ ​ ， ​ 1 0 0 ​ 0 1 0 ​ 1 3 1 ​ ​ 。" }, { key: "D", text: "​ 1 0 1 ​ 0 1 3 ​ 0 0 1 ​ ​ ， ​ 1 0 0 ​ 2 − 1 0 ​ − 3 2 1 ​ ​ 。" }],
    answer: ["C"],
    explain: "正确答案： C 对 ( A , E ) 进行初等行变换： ​ 1 2 − 1 ​ 0 − 1 2 ​ − 1 1 − 5 ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ 0 − 1 2 ​ − 1 3 − 6 ​ 1 − 2 1 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ − 1 − 3 0 ​ 1 2 − 3 ​ 0 − 1 2 ​ 0 0 1 ​ ​ 得到： P = ​ 1 2 − 3 ​ 0 − 1 2 ​ 0 0 1 ​ ​ 再通过列变换得到： Q = ​ 1 0 0 ​ 0 1 0 ​ 1 3 1 ​ ​ 故正确答案为 C。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机事件\nA\n、\nB\n，下列不成立的是",
    options: [{ key: "A", text: "若 P ( A ∣ B ) = P ，则 P ( A ∣ B ) = P ( A ) 。" }, { key: "B", text: "若 P ( A ∣ B ) > P ，则 P ( A ∣ B ) > P ( A ) 。" }, { key: "C", text: "若 P ( A ∣ B ) > P ( A ∣ B ) ，则 P ( A ∣ B ) > P 。" }, { key: "D", text: "若 P ( A ∣ A ∪ B ) > P ( A ∣ A ∪ B ) ，则 P > P 。" }],
    answer: ["D"],
    explain: "正确答案： D 计算条件概率： P ( A ∣ A ∪ B ) = P ( A ∪ B ) P ( A ) ​ P ( A ∣ A ∪ B ) = P ( A ∪ B ) P ( A B ) ​ = P ( A ∪ B ) P ( B ) − P ( A B ) ​ 由不等式 P ( A ∣ A ∪ B ) > P ( A ∣ A ∪ B ) 可得： P ( A ) > P ( B ) − P ( A B ) 但无法进一步推出 P ( A ) > P ( B ) ，因此正确答案为 D。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\n(X1,Y1)\n，\n(X2,Y2)\n，…，\n(Xn,Yn)\n为来自总体\nN(μ1,μ2;σ12,σ22;ρ)\n的简单随机样本，\nθ=μ1−μ2\n，\nX=n1∑i=1nXi\n，\nY=n1∑i=1nYi\n，\nθ^=X−Y\n，则",
    options: [{ key: "A", text: "E ( θ ^ ) = θ ， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ ​ 。" }, { key: "B", text: "E ( θ ^ ) = θ ， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ − 2 ρ σ 1 ​ σ 2 ​ ​ 。" }, { key: "C", text: "E ( θ ^ )  = θ ， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ ​ 。" }, { key: "D", text: "E ( θ ^ )  = θ ， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ − 2 ρ σ 1 ​ σ 2 ​ ​ 。" }],
    answer: ["B"],
    explain: "正确答案： B 因为 X 和 Y 是二维正态分布，所以 X 与 Y 也服从二维正态分布。因此， X − Y 服从正态分布。 期望值为： E ( θ ^ ) = E ( X − Y ) = E ( X ) − E ( Y ) = μ 1 ​ − μ 2 ​ = θ 方差为： D ( θ ^ ) = D ( X − Y ) = D ( X ) + D ( Y ) − 2 cov ( X , Y ) = n σ 1 2 ​ + σ 2 2 ​ − 2 ρ σ 1 ​ σ 2 ​ ​ 故正确答案为 B 。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设总体\nX\n的概率分布为\n\nP{X=1}=21−θ,P{X=2}=P{X=3}=41+θ\n\n利用来自总体的样本值\n1,3,2,2,1,3,1,2\n，可得\nθ\n的最大似然估计值为",
    options: [{ key: "A", text: "4 1 ​ 。" }, { key: "B", text: "8 3 ​ 。" }, { key: "C", text: "2 1 ​ 。" }, { key: "D", text: "2 5 ​ 。" }],
    answer: ["A"],
    explain: "正确答案： A 似然函数为： L ( θ ) = ( 2 1 − θ ​ ) 3 ( 4 1 + θ ​ ) 5 取对数后得到： ln L ( θ ) = 3 ln ( 2 1 − θ ​ ) + 5 ln ( 4 1 + θ ​ ) 对 θ 求导并令导数为零： d θ d ln L ( θ ) ​ = 1 − θ − 3 ​ + 1 + θ 5 ​ = 0 解得： θ = 4 1 ​ 因此，正确答案为 A 。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）若\ny=cos(e−x)\n，求\ndxdy\n在\nx=1\n处的值。",
    answerText: "】 \\[\\frac{\\sin \\frac{1}{e}}{2 e} \\] 【",
    referenceAnswer: "【答案】 \\[\\frac{\\sin \\frac{1}{e}}{2 e} \\] 【解析】 给定导数表达式： \\[\\frac{d y}{d x} = -\\sin e^{-\\sqrt{x}} \\left( e^{-\\sqrt{x}} \\cdot \\frac{1}{-2 \\sqrt{x}} \\right) \\] 在 x = 1 处的导数值为： \\[\\left. \\frac{d y}{d x} \\right|_{x=1} = \\frac{\\sin \\frac{1}{e}}{2 e} \\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）计算\n∫55∣x2−9∣xdx",
    answerText: "】 6 【",
    referenceAnswer: "【答案】 6 【解析】 计算以下积分： ∫ 5 ​ 3 ​ 9 − x 2 ​ x ​ d x + ∫ 3 5 ​ x 2 − 9 ​ x ​ d x 第一步：简化第一个积分 令 u = 9 − x 2 ，则 d u = − 2 x d x ，即 x d x = − 2 1 ​ d u 。积分限变为： 当 x = 5 ​ ， u = 9 − 5 = 4 当 x = 3 ， u = 9 − 9 = 0 因此，第一个积分可表示为： ∫ 5 ​ 3 ​ 9 − x 2 ​ x ​ d x = − 2 1 ​ ∫ 4 0 ​ u ​ d u ​ = 2 1 ​ ∫ 0 4 ​ u − 1/2 d u 第二步：简化第二个积分 令 v = x 2 − 9 ，则 d v = 2 x d x ，即 x d x = 2 1 ​ d v 。积分限变为： 当 x = 3 ， v = 9 − 9 = 0 当 x = 5 ， v = 25 − 9 = 16 因此，第二个积分可表示为： ∫ 3 5 ​ x 2 − 9 ​ x ​ d x = 2 1 ​ ∫ 0 16 ​ v − 1/2 d v 第三步：计算积分 计算第一个积分： 2 1 ​ ∫ 0 4 ​ u − 1/2 d u = 2 1 ​ [ 2 u 1/2 ] 0 4 ​ = 4 ​ − 0 ​ = 2 计算第二个积分： 2 1 ​ ∫ 0 16 ​ v − 1/2 d v = 2 1 ​ [ 2 v 1/2 ] 0 16 ​ = 16 ​ − 0 ​ = 4 第四步：求和 将两个积分结果相加： 2 + 4 = 6 因此，最终结果为： 6",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设平面区域\nD\n由曲线\ny=x⋅sinπx\n（\n0≤x≤1\n）与\nx\n轴围成，求\nD\n绕\nx\n轴旋转所成旋转体的体积\n\n。",
    answerText: "】 4 π ​ 【",
    referenceAnswer: "【答案】 4 π ​ 【解析】 首先，我们计算体积 V ： V = π ∫ 0 1 ​ ( x ​ sin π x ) 2 d x = π ∫ 0 1 ​ x sin 2 π x d x 进行变量替换，设 π x = t ，则 d x = π d t ​ ，积分限变为 0 到 π ： V = π 1 ​ ∫ 0 π ​ t sin 2 t d t 利用三角恒等式 sin 2 t = 2 1 − c o s 2 t ​ ，积分变为： V = 2 π 1 ​ ∫ 0 π ​ t ( 1 − cos 2 t ) d t 拆分为两部分： V = 2 π 1 ​ ( ∫ 0 π ​ t d t − ∫ 0 π ​ t cos 2 t d t ) 计算第一部分： ∫ 0 π ​ t d t = 2 π 2 ​ 计算第二部分，利用分部积分： ∫ 0 π ​ t cos 2 t d t = 2 t sin 2 t ​ ​ 0 π ​ − 2 1 ​ ∫ 0 π ​ sin 2 t d t = 0 − 2 1 ​ ( − 2 cos 2 t ​ ) ​ 0 π ​ = 0 因此，体积为： V = 2 π 1 ​ ( 2 π 2 ​ − 0 ) = 4 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）求差分方程\nΔyt=t\n的通解",
    answerText: "】 y = 2 1 ​ t 2 − 2 1 ​ t + C 【",
    referenceAnswer: "【答案】 y = 2 1 ​ t 2 − 2 1 ​ t + C 【解析】 齐次解为 y = C 。设特解形式为： y ∗ = 2 1 ​ ( a t + b ) 将特解代入原方程： ( t + 1 ) ( a ( t + 1 ) + b ) − t ( a t + b ) = t 展开并整理方程： 2 a t + a + b = t 比较系数解得： a = 2 1 ​ , b = − 2 1 ​ 因此，通解为： y = y ∗ + y ˉ ​ = 2 1 ​ t 2 − 2 1 ​ t + C 其中 C 为任意常数。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\n\nf(x)=x122xx1−112x12x−11x,\n\n求展开式中\nx3\n项的系数。",
    answerText: "】 -5 【",
    referenceAnswer: "【答案】 -5 【解析】 设行列式 f ( x ) = ​ x 1 2 2 ​ x x 1 − 1 ​ 1 2 x 1 ​ 2 x − 1 1 x ​ ​ 将其按第一行展开，并计算各子式： f ( x ) ​ = x ​ x 1 − 1 ​ 2 x 1 ​ − 1 1 x ​ ​ − x ​ 1 2 2 ​ 2 x 1 ​ − 1 1 x ​ ​ + 1 ⋅ ​ 1 2 2 ​ x 1 − 1 ​ − 1 1 x ​ ​ − 2 x ​ 1 2 2 ​ x 1 − 1 ​ 2 x 1 ​ ​ = x A − x B + C − 2 x D ​ 计算得 A = x 3 − 4 x − 3 , B = x 2 − 2 x + 1 , C = − 2 x 2 + 3 x + 5 , D = 2 x 2 − x − 7 代入得 f ( x ) = x 4 − 5 x 3 − 2 x 2 + 13 x + 5 故 x^3 项的系数为 -5. − 5 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）甲乙两个盒子中各装有 \\(2\\) 个红球和 \\(2\\) 个白球，先从甲盒中任取一球，观察颜色后放入乙盒中，再从乙盒中任取一球，令 \\(X\\) 和 \\(Y\\) 分别表示从甲盒和乙盒中取到的红球个数，求 \\(X\\) 与 \\(Y\\) 的相关系数",
    answerText: "】 5 1 ​ 【",
    referenceAnswer: "【答案】 5 1 ​ 【解析】 详解 随机变量 X 和 Y 的分布分别为： X ∼ ( 0 2 1 ​ ​ 1 2 1 ​ ​ ) , Y ∼ ( 0 2 1 ​ ​ 1 2 1 ​ ​ ) 计算得到协方差和方差： co v ( X , Y ) = 20 1 ​ , D X = 4 1 ​ , D Y = 4 1 ​ 因此，相关系数为： ρ X Y ​ = D X ⋅ D Y ​ co v ( X , Y ) ​ = 4 1 ​ ⋅ 4 1 ​ ​ 20 1 ​ ​ = 5 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知\nx→0lim[αarctanx1+(1+∣x∣)x1]\n存在，求\nα\n的值。",
    referenceAnswer: "【答案】 α = π 1 ​ ( e 1 ​ − e ) 【解析】 要使极限存在，必须保证左右极限相等。 考虑 x → 0 + 时的极限： x → 0 + lim ​ [ α arctan x 1 ​ + ( 1 + ∣ x ∣ ) x 1 ​ ] = 2 π ​ α + e 再考虑 x → 0 − 时的极限： x → 0 − lim ​ [ α arctan x 1 ​ + ( 1 + ∣ x ∣ ) x 1 ​ ] = − 2 π ​ α + e 1 ​ 令左右极限相等，得到方程： 2 π ​ α + e = − 2 π ​ α + e 1 ​ 解得： α = π 1 ​ ( e 1 ​ − e )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分12分）\n\n求函数\n\nf(x,y)=2ln∣x∣+2x2(x−1)2+y2\n\n的极值。",
    referenceAnswer: "【答案】 函数在点 ( 1 , 0 ) 处取极小值 2 ，在点 ( 2 1 ​ , 0 ) 处取极小值 2 1 ​ − 2 ln 2 。 【解析】 (1) 求驻点： { f x ′ ​ = x 3 2 x 2 + x − 1 − y 2 ​ = 0 f y ′ ​ = x 2 y ​ = 0 ​ 即： { 2 x 2 + x − 1 − y 2 = 0 y = 0 ​ 解得驻点 ( 1 , 0 ) 和 ( 2 1 ​ , 0 ) 。 (2) 计算二阶偏导数： ⎩ ⎨ ⎧ ​ f xx ∗ ​ = x 4 ( 4 x + 1 ) x − 3 ( 2 x 2 + x − 1 − y 2 ) ​ f x y ∗ ​ = x 3 − 2 y ​ f yy ∗ ​ = x 2 1 ​ ​ (3) 极值判定： 在驻点 ( 1 , 0 ) 处（注：原解析中 ( − 1 , 0 ) 应为 ( 1 , 0 ) ）： A = 3 , B = 0 , C = 1 A C − B 2 = 3 > 0 , A > 0 故 f ( x , y ) 在 ( 1 , 0 ) 处取极小值 2。 在驻点 ( 2 1 ​ , 0 ) 处： A = 24 , B = 0 , C = 4 A C − B 2 = 96 > 0 故 f ( x , y ) 在 ( 2 1 ​ , 0 ) 处取极小值 2 1 ​ − 2 ln 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分12分）\n\n设有界区域\nD\n是\nx2+y2=1\n和直线\ny=x\n以及\nx\n轴在第一象限围成的部分，计算二重积分\n\n∬De(x+y)2(x2−y2)dxdy.",
    referenceAnswer: "【答案】 8 1 ​ e 2 − 4 1 ​ e + 8 1 ​ 【解析】 设有界区域 D 为单位圆在第一象限中由 x 轴和直线 y = x 所截的扇形区域，其极坐标表示为 0 ≤ r ≤ 1 ， 0 ≤ θ ≤ 4 π ​ 。计算二重积分 I = ∬ D ​ e ( x + y ) 2 ( x 2 − y 2 ) d x d y . 作变量代换 u = x + y ， v = x − y ，则雅可比行列式为 2 1 ​ ，且 x 2 − y 2 = uv ， ( x + y ) 2 = u 2 。积分变为 I = 2 1 ​ ∬ D ′ ​ e u 2 uv d u d v , 其中 D ′ 为 D 在 uv 平面上的对应区域，由 v = 0 ， v = u 及圆 u 2 + v 2 = 2 围成。 将 D ′ 按 u 的范围分为两部分： 当 0 ≤ u ≤ 1 时， 0 ≤ v ≤ u ； 当 1 ≤ u ≤ 2 ​ 时， 0 ≤ v ≤ 2 − u 2 ​ 。 则 ∬ D ′ ​ e u 2 uv d u d v = ∫ 0 1 ​ ∫ 0 u ​ e u 2 uv d v d u + ∫ 1 2 ​ ​ ∫ 0 2 − u 2 ​ ​ e u 2 uv d v d u . 计算内层积分： ∫ 0 u ​ v d v = 2 u 2 ​ , ∫ 0 2 − u 2 ​ ​ v d v = 2 2 − u 2 ​ . 代入得 ∬ D ′ ​ e u 2 uv d u d v = 2 1 ​ ∫ 0 1 ​ e u 2 u 3 d u + ∫ 1 2 ​ ​ e u 2 u ( 1 − 2 u 2 ​ ) d u . 计算各定积分： ∫ 0 1 ​ e u 2 u 3 d u = [ 2 1 ​ e u 2 ( u 2 − 1 ) ] 0 1 ​ = 2 1 ​ , ∫ 1 2 ​ ​ e u 2 u d u = [ 2 1 ​ e u 2 ] 1 2 ​ ​ = 2 1 ​ ( e 2 − e ) , ∫ 1 2 ​ ​ e u 2 u 3 d u = [ 2 1 ​ e u 2 ( u 2 − 1 ) ] 1 2 ​ ​ = 2 1 ​ e 2 . 因此， ∬ D ′ ​ e u 2 uv d u d v = 2 1 ​ ⋅ 2 1 ​ + 2 1 ​ ( e 2 − e ) − 2 1 ​ ⋅ 2 1 ​ e 2 = 4 1 ​ + 2 1 ​ e 2 − 2 1 ​ e − 4 1 ​ e 2 = 4 1 ​ + 4 1 ​ e 2 − 2 1 ​ e . 于是 I = 2 1 ​ ( 4 1 ​ + 4 1 ​ e 2 − 2 1 ​ e ) = 8 1 ​ + 8 1 ​ e 2 − 4 1 ​ e = 8 1 ​ ( 1 + e 2 − 2 e ) = 8 1 ​ ( e − 1 ) 2 . 故原积分的值为 8 ( e − 1 ) 2 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设\nn\n为正整数，\ny=yn(x)\n是微分方程\n\nxy′−(n+1)y=0\n\n满足条件\nyn(1)=n(n+1)1\n的解。\n\n求\nyn(x)\n；\n\n求级数\n∑n=1∞yn(x)\n的收敛域及和函数。\n",
    referenceAnswer: "【答案】 y n ​ ( x ) = n ( n + 1 ) 1 ​ x n + 1 收敛域为 [ − 1 , 1 ] ，和函数为 S ( x ) = { ( 1 − x ) ln ( 1 − x ) + x , 1 , ​ x ∈ [ − 1 , 1 ) x = 1 ​ 【解析】 (1) 微分方程 y ′ − x n + 1 ​ y = 0 的通解为： y = C e ∫ x n + 1 ​ d x = C x n + 1 代入初始条件 y n ​ ( 1 ) = n ( n + 1 ) 1 ​ 得： C = n ( n + 1 ) 1 ​ 因此特解为： y n ​ ( x ) = n ( n + 1 ) 1 ​ x n + 1 (2) 级数 ∑ n = 1 ∞ ​ n ( n + 1 ) 1 ​ x n + 1 的收敛半径为 1。在 x = − 1 处收敛，在 x = 1 处需单独判断。 设和函数为： S ( x ) = n = 1 ∑ ∞ ​ n ( n + 1 ) 1 ​ x n + 1 = n = 1 ∑ ∞ ​ n x n + 1 ​ − n = 1 ∑ ∞ ​ n + 1 x n + 1 ​ 通过逐项求导和积分可得： S ( x ) = ( 1 − x ) ln ( 1 − x ) + x , x ∈ ( − 1 , 1 ) 由于 S ( x ) 在 [ − 1 , 1 ] 上连续，且 S ( 1 ) = lim x → 1 − ​ S ( x ) = 1 ，故和函数为： S ( x ) = { ( 1 − x ) ln ( 1 − x ) + x , 1 , ​ x ∈ [ − 1 , 1 ) x = 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分 12 分)\n\n设矩阵\nA=21112a00b\n仅有两个不同的特征值。若\nA\n相似于对角矩阵，求\na\n，\nb\n的值，并求可逆矩阵\nP\n，使\nP−1AP\n为对角矩阵。",
    referenceAnswer: "【答案】 当 a = − 1 ， b = 3 时，可逆矩阵 P = ​ 1 1 0 ​ 0 0 1 ​ − 1 1 1 ​ ​ ，使得 P − 1 A P 为对角矩阵。 当 a = 1 ， b = 1 时，可逆矩阵 P = ​ − 1 1 0 ​ 0 0 1 ​ 1 1 1 ​ ​ ，使得 P − 1 A P 为对角矩阵。 【解析】 由行列式计算得到特征方程： ∣ λ E − A ∣ = ​ λ − 2 − 1 − 1 ​ − 1 λ − 2 − a ​ 0 0 λ − b ​ ​ = ( λ − b ) ( λ − 3 ) ( λ − 1 ) = 0 解得特征值 λ 1 ​ = 3 ， λ 2 ​ = 1 ， λ 3 ​ = b 。 情况1： b = 3 对于二重特征值 λ = 3 ，矩阵为： 3 E − A = ​ 1 − 1 − 1 ​ − 1 1 − a ​ 0 0 0 ​ ​ 要求有两个线性无关的特征向量，矩阵秩必须为1，因此： − a − 1 = 0 ⇒ a = − 1 此时特征向量为 α 1 ​ = ( 1 , 1 , 0 ) T ， α 2 ​ = ( 0 , 0 , 1 ) T 。对于 λ 3 ​ = 1 ，对应的特征向量为 α 3 ​ = ( − 1 , 1 , 1 ) T 。 情况2： b = 1 对于二重特征值 λ = 1 ，矩阵为： E − A = ​ − 1 − 1 − 1 ​ − 1 − 1 − a ​ 0 0 0 ​ ​ 同样要求秩为1，得到： − a + 1 = 0 ⇒ a = 1 此时特征向量为 β 1 ​ = ( − 1 , 1 , 0 ) T ， β 2 ​ = ( 0 , 0 , 1 ) T 。对于 λ 3 ​ = 3 ，对应的特征向量为 α 3 ​ = ( 1 , 1 , 1 ) T 。 结论 当 a = − 1 , b = 3 或 a = 1 , b = 1 时，存在可逆矩阵 P 使得 P − 1 A P 为对角矩阵。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "本小题满分12分\n\n在区间\n(0,2)\n上随机取一点，将该区间分成两段，较短一段长度记为\nX\n，较长的一段长度记为\nY\n，令\nZ=XY\n。\n\n求\nX\n的概率密度；\n\n求\nZ\n的概率密度；\n\n求\nE(YX)\n",
    referenceAnswer: "【答案】 (1) X 的概率密度为 f ( x ) = { 1 , 0 , ​ 0 < x < 1 其他 ​ (2) Z 的概率密度为 f Z ​ ( z ) = { ( z + 1 ) 2 2 ​ , 0 , ​ z ≥ 1 其他 ​ (3) E ( Y X ​ ) = − 1 + 2 ln 2 【解析】 (1) 当随机点在 ( 0 , 1 ) 时， X 为该点到 0 的距离，即 X ∼ U ( 0 , 1 ) ，故 X 的概率密度为 f ( x ) = { 1 , 0 , ​ 0 < x < 1 其他 ​ (2) 设 Y = 2 − X ，则 Z = X 2 − X ​ 。当 z ≥ 1 时， F Z ​ ( z ) = P { X 2 − X ​ ≤ z } = 1 − P { X ≤ z + 1 2 ​ } = 1 − z + 1 2 ​ 故 Z 的概率密度为 f Z ​ ( z ) = { ( z + 1 ) 2 2 ​ , 0 , ​ z ≥ 1 其他 ​ (3) 期望计算为 E ( Y X ​ ) = E ( 2 − X X ​ ) = ∫ 0 1 ​ 2 − x x ​ d x = − 1 + 2 ln 2",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2021_math3 = {
  id: P, year: Y,
  title: '2021 年全国硕士研究生招生考试 数学（三）',
  short: '2021 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2021_math3.length,
  qids: questions2021_math3.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
