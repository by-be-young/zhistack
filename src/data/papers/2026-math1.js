const P = 'paper-2026-math1'
const Y = 2026
const SRC = '#/notes/study_methods-math-math1-2026'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2026-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2026 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2026_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nz=z(x,y)\n由方程\nx−az=ey+az\n（\na\n是非 0 常数）确定，则（　　）",
    options: [{ key: "A", text: "∂ x ∂ z ​ − ∂ y ∂ z ​ = a 1 ​" }, { key: "B", text: "∂ x ∂ z ​ + ∂ y ∂ z ​ = a 1 ​" }, { key: "C", text: "∂ x ∂ z ​ − ∂ y ∂ z ​ = − a 1 ​" }, { key: "D", text: "∂ x ∂ z ​ + ∂ y ∂ z ​ = − a 1 ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 由方程 x − a z = e y + a z 确定隐函数 z = z ( x , y ) 。 对 x 求偏导数（ y 为常数）得： 1 − a ∂ x ∂ z ​ = a e y + a z ∂ x ∂ z ​ 解得： ∂ x ∂ z ​ = a ( 1 + e y + a z ) 1 ​ 对 y 求偏导数（ x 为常数）得： − a ∂ y ∂ z ​ = e y + a z ( 1 + a ∂ y ∂ z ​ ) 解得： ∂ y ∂ z ​ = − a ( 1 + e y + a z ) e y + a z ​ 计算： ∂ x ∂ z ​ − ∂ y ∂ z ​ = a ( 1 + e y + a z ) 1 ​ − ( − a ( 1 + e y + a z ) e y + a z ​ ) = a ( 1 + e y + a z ) 1 + e y + a z ​ = a 1 ​ 故选项 A 正确。"
  }),
  base(2, 'k-math-013', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "幂级数\n∑n=1∞(43+(−1)n)nx2n\n的收敛域是（　　）",
    options: [{ key: "A", text: "[ − 2 , 2 ]" }, { key: "B", text: "[ − 1 , 1 ]" }, { key: "C", text: "( − 2 , 2 )" }, { key: "D", text: "( − 1 , 1 )" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 考虑幂级数 n = 1 ∑ ∞ ​ ( 4 3 + ( − 1 ) n ​ ) n x 2 n . 令 b n ​ = ( 4 3 + ( − 1 ) n ​ ) n ，则级数可写成 n = 1 ∑ ∞ ​ b n ​ x 2 n . 由于 x 的指数为 2 n ，可设 y = x 2 ，从而转化为 n = 1 ∑ ∞ ​ b n ​ y n . 计算 b n ​ ： 当 n 为偶数时， ( − 1 ) n = 1 ，故 b n ​ = ( 4 4 ​ ) n = 1 ; 当 n 为奇数时， ( − 1 ) n = − 1 ，故 b n ​ = ( 4 2 ​ ) n = ( 2 1 ​ ) n . 使用根值判别法求收敛半径： n ∣ b n ​ ∣ ​ = 4 3 + ( − 1 ) n ​ , 当 n 为偶数时等于 1 ，当 n 为奇数时等于 2 1 ​ ，因此 n → ∞ lim sup ​ n ∣ b n ​ ∣ ​ = 1. 从而级数 ∑ b n ​ y n 的收敛半径为 R y ​ = 1 ，即当 ∣ y ∣ < 1 时收敛， ∣ y ∣ > 1 时发散。 由 y = x 2 得 ∣ x 2 ∣ < 1 ，即 ∣ x ∣ < 1 时收敛。 检查端点：当 ∣ x ∣ = 1 时， x 2 = 1 ，级数化为 ∑ n = 1 ∞ ​ b n ​ 。由于偶数项 b n ​ = 1 ，奇数项 b n ​ = ( 1/2 ) n ，部分和中包含无穷多个 1 ，故级数发散。 因此，收敛域为 ( − 1 , 1 ) ，对应选项 D。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x)\n在区间\n[−1,1]\n上有定义，则（　　）",
    options: [{ key: "A", text: "当 f ( x ) 在 ( − 1 , 0 ) 单调递减，在 ( 0 , 1 ) 单调递增时， f ( 0 ) 是极小值" }, { key: "B", text: "当 f ( 0 ) 是极小值时， f ( x ) 在 ( − 1 , 0 ) 单调递减，在 ( 0 , 1 ) 单调递增" }, { key: "C", text: "当 f ( x ) 的图形在 [ − 1 , 1 ] 是凹的时， x − 1 f ( x ) − f ( 1 ) ​ 在 [ − 1 , 1 ) 单调递增" }, { key: "D", text: "x − 1 f ( x ) − f ( 1 ) ​ 在 [ − 1 , 1 ) 单调递增时， f ( x ) 的图形在 [ − 1 , 1 ] 是凹的" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 对于选项 A，考虑反例：设 f ( x ) = − x + 1 当 x < 0 ， f ( 0 ) = 100 ， f ( x ) = x + 2 当 x > 0 。在 ( − 1 , 0 ) 上 f ( x ) 单调递减（导数为负），在 ( 0 , 1 ) 上单调递增（导数为正），但 f ( 0 ) = 100 比两侧值都大，是极大值而非极小值。因此 A 错误。 对于选项 B，考虑反例：设 f ( x ) = x 2 ( 2 + sin ( 1/ x )) 当 x  = 0 ， f ( 0 ) = 0 。 f ( 0 ) = 0 是极小值（因 f ( x ) ≥ x 2 > 0 当 x  = 0 ），但在任何包含 0 的区间上，由于 sin ( 1/ x ) 震荡， f ( x ) 在 ( − 1 , 0 ) 和 ( 0 , 1 ) 上均不单调。因此 B 错误。 对于选项 C，假设 f ( x ) 的图形在 [ − 1 , 1 ] 上是凹的（即凹向上，相当于 f ′′ ( x ) ≥ 0 或 f 为凸函数）。考虑函数 φ ( x ) = x − 1 f ( x ) − f ( 1 ) ​ 在 [ − 1 , 1 ) 上。当 f 凹向上时，其导数 f ′ ( x ) 单调递增。由拉格朗日中值定理，存在 ξ 介于 x 与 1 之间，使得 f ( x ) − f ( 1 ) = f ′ ( ξ ) ( x − 1 ) 。由于 f ′ 递增且 x − 1 < 0 ，有 f ( x ) − f ( 1 ) = f ′ ( ξ ) ( x − 1 ) ≤ f ′ ( x ) ( x − 1 ) 。计算 φ ′ ( x ) = ( x − 1 ) 2 f ′ ( x ) ( x − 1 ) − ( f ( x ) − f ( 1 )) ​ ≥ 0 ，故 φ ( x ) 单调递增。因此 C 正确。 对于选项 D，考虑反例：设 f ( x ) = x 4 − x 3 ，则 f ( 1 ) = 0 ， φ ( x ) = x − 1 f ( x ) − f ( 1 ) ​ = x − 1 x 4 − x 3 ​ = x 3 在 [ − 1 , 1 ) 上单调递增（因导数 3 x 2 ≥ 0 ）。但 f ′′ ( x ) = 12 x 2 − 6 x = 6 x ( 2 x − 1 ) ，在 ( 0 , 0.5 ) 上 f ′′ ( x ) < 0 ，故 f ( x ) 的图形在 [ − 1 , 1 ] 上不是凹的（凹向上需 f ′′ ( x ) ≥ 0 恒成立）。因此 D 错误。 综上，正确选项为 C。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知有界区域\nΩ\n由曲面\nz=4−x2−y2\n与\nz=x2+y2\n围成，函数\nf(u)\n连续，则\n\n∭Ωf(x2+y2+z2)dxdydz=（　　）",
    options: [{ key: "A", text: "∫ 0 2 π ​ d θ ∫ 0 2 ​ d r ∫ r 4 − r 2 ​ ​ f ( r 2 + z 2 ) r d z" }, { key: "B", text: "∫ 0 2 π ​ d θ ∫ 0 2 ​ ​ d r ∫ 0 4 − r 2 ​ ​ f ( r 2 + z 2 ) r d z" }, { key: "C", text: "∫ 0 2 π ​ d θ ∫ 0 4 π ​ ​ d φ ∫ 0 2 ​ f ( r 2 ) r 2 sin φ d r" }, { key: "D", text: "∫ 0 2 π ​ d θ ∫ 0 2 π ​ ​ d φ ∫ 0 2 ​ f ( r 2 ) r 2 sin φ d r" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 区域 Ω 由曲面 z = 4 − x 2 − y 2 ​ ( 上半球面，半径 2) 与 z = x 2 + y 2 ​ ( 圆锥面 ) 围成。被积函数为 f ( x 2 + y 2 + z 2 ) 适合用球坐标简化。 在球坐标下 x = r sin φ cos θ , y = r sin φ sin θ , z = r cos φ 体积元为 r 2 sin φ d r d φ d θ 且有 x 2 + y 2 + z 2 = r 2 故被积函数化为 f ( r 2 ) 区域 Ω 中的点满足 z ≥ x 2 + y 2 ​ 且 z ≤ 4 − x 2 − y 2 ​ 用球坐标表示： z = r cos φ , x 2 + y 2 ​ = r sin φ 于是条件化为 cos φ ≥ sin φ ⟹ tan φ ≤ 1 所以 φ ∈ [ 0 , 4 π ​ ] 由上半球面得 r ≤ 2 且原点在边界上，故 r ∈ [ 0 , 2 ] θ 自然取 θ ∈ [ 0 , 2 π ] 因此积分表达式为 ∫ 0 2 π ​ d θ ∫ 0 π /4 ​ d φ ∫ 0 2 ​ f ( r 2 ) r 2 sin φ d r 对应选项 C 。 选项 A 与 B 采用柱坐标，但 A 中 r 的上限定为 2 ，超出实际范围 2 ​ ； B 中 z 的下限为 0 ，而不是 r 。 二者均错误。 选项 D 的 φ 上限为 π /2 ，包含了圆锥面以下的区域，不符合 Ω 的定义。 正确答案为 C 。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "单位矩阵经过若干次互换两行得到的矩阵成为置换矩阵。设\nA\n为\nn\n阶置换矩阵，\nA∗\n为\nA\n的伴随矩阵，则（　　）",
    options: [{ key: "A", text: "A ∗ 为置换矩阵" }, { key: "B", text: "A − 1 为置换矩阵" }, { key: "C", text: "A − 1 = A ∗" }, { key: "D", text: "A − 1 = − A ∗" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 置换矩阵是由单位矩阵经过若干次行交换得到的矩阵，其行和列均为单位向量。置换矩阵是正交矩阵，满足 A − 1 = A T ，而 A T 也是置换矩阵，因此 A − 1 恒为置换矩阵，选项B正确。对于选项A，伴随矩阵 A ∗ = det ( A ) A − 1 ，当 det ( A ) = − 1 时， A ∗ 可能含有负元素，不满足置换矩阵的元素非负要求，故不一定成立。对于选项C和D，由 A − 1 = d e t ( A ) 1 ​ A ∗ 知，当 det ( A ) = 1 时 A − 1 = A ∗ ，当 det ( A ) = − 1 时 A − 1 = − A ∗ ，两者均不恒成立。因此，仅选项B正确。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA\n、\nB\n为\nn\n阶矩阵，\nβ\n是\nn\n维列向量，若\nA\n的列向量组可由\nB\n的列向量组表示，则（　　）",
    options: [{ key: "A", text: "当 A x = β 有解时， B x = β 有解" }, { key: "B", text: "当 A T x = β 有解时， B T x = β 有解" }, { key: "C", text: "当 B x = β 有解时， A x = β 有解" }, { key: "D", text: "当 B T x = β 有解时， A T x = β 有解" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 由题意可知，矩阵 A 的列向量组可由矩阵 B 的列向量组线性表示，即存在矩阵 C 使得 A = BC 这意味着 A 的列空间 Col ( A ) 是 B 的列空间 Col ( B ) 的子集，即 Col ( A ) ⊆ Col ( B ) 线性方程组 A x = β 有解当且仅当 β ∈ Col ( A ) ，而 B x = β 有解当且仅当 β ∈ Col ( B ) 。 因此，当 A x = β 有解时，有 β ∈ Col ( A ) ⊆ Col ( B ) 从而 B x = β 一定有解，故选项 A 正确。 对于选项 C，当 B x = β 有解时， β ∈ Col ( B ) ，但 β 不一定属于 Col ( A ) ，因此 A x = β 不一定有解。反例：取 B = I （单位矩阵）， A = 0 ，则 B x = β 总有解，但 A x = β 仅当 β = 0 时有解。 对于选项 B 和 D，考虑转置关系 A T = C T B T ，此时 Col ( A T ) ⊆ Col ( C T ) 但与 Col ( B T ) 没有直接的包含关系，因此无法由其中一个方程解的存在性推断另一个方程解的存在性，故选项 B 和 D 均不正确。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设二次型\nf(x1,x2,x3)=a(x12+x22+x32)+4x1x2+4x1x3+4x2x3\n。若方程\nf(x1,x2,x3)=−1\n表示的曲面为圆柱面，则（　　）",
    options: [{ key: "A", text: "a = − 4 ，且 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范型为 − y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }, { key: "B", text: "a = − 4 ，且 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 在正交变换下的标准型为 − 6 y 1 2 ​ − 6 y 2 2 ​" }, { key: "C", text: "a = 2 ，且 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范型为 − y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }, { key: "D", text: "a = 2 ，且 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 在正交变换下的标准型为 − 6 y 1 2 ​ − 6 y 2 2 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 二次型 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 对应的矩阵为 A = ​ a 2 2 ​ 2 a 2 ​ 2 2 a ​ ​ . 其特征值为 λ 1 ​ = a + 4 , λ 2 ​ = a − 2 （二重） . 要使方程 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = − 1 表示实圆柱面，矩阵 A 必须满足： 有一个特征值为 0； 其余特征值同号，以保证方程有实数解。 当 a = − 4 时，特征值为 0 , − 6 , − 6 。通过正交变换可将二次型化为 − 6 y 1 2 ​ − 6 y 2 2 ​ = − 1 , 即 y 1 2 ​ + y 2 2 ​ = 6 1 ​ , 表示圆柱面。 当 a = 2 时，特征值为 6 , 0 , 0 。二次型化为 6 y 1 2 ​ = − 1 , 无实数解，不表示实曲面。 因此，选项 B 中 a = − 4 且标准型为 − 6 y 1 2 ​ − 6 y 2 2 ​ 符合要求，该选项正确。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX∼N(1,2)\n，令\nf(t)=E[(X+t)2]\n，则\nf(t)\n的最小值点和最小值分别为（　　）",
    options: [{ key: "A", text: "1 , 2" }, { key: "B", text: "1 , 4" }, { key: "C", text: "− 1 , 2" }, { key: "D", text: "− 1 , 4" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 计算 f ( t ) = E [( X + t ) 2 ] ，展开得 f ( t ) = E [ X 2 ] + 2 tE [ X ] + t 2 . 由于 X ∼ N ( 1 , 2 ) ，即均值 μ = 1 ，方差 σ 2 = 2 ，故 E [ X ] = 1 , E [ X 2 ] = Var ( X ) + ( E [ X ] ) 2 = 2 + 1 2 = 3. 代入得 f ( t ) = t 2 + 2 t + 3. 这是一个开口向上的二次函数，最小值在顶点处，顶点 t = − 2 a b ​ = − 2 ⋅ 1 2 ​ = − 1 , 最小值为 f ( − 1 ) = ( − 1 ) 2 + 2 ( − 1 ) + 3 = 2. 因此最小值点为 − 1 ，最小值为 2 ，对应选项 C。"
  }),
  base(9, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设连续型随机变量\nX\n的分布函数为\nF(x)\n，随机变量\nY\n的分布函数为\nF(ay+b)\n，\nX\n的数学期望为\nμ\n，方差为\nσ2(σ>0)\n，若\nY\n的数学期望和方差分别为 0 和 1，则（　　）",
    options: [{ key: "A", text: "a = σ ， b = μ" }, { key: "B", text: "a = σ ， b = − μ" }, { key: "C", text: "a = σ 1 ​ ， b = μ" }, { key: "D", text: "a = σ 1 ​ ， b = − μ" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 由 Y 的分布函数为 F ( a y + b ) ，可得 P ( Y ≤ y ) = P ( X ≤ a y + b ) , 这意味着 X 与 Y 满足线性关系 X = aY + b , 即 Y = a X − b ​ . 已知 X 的数学期望为 μ ，方差为 σ 2 。对于线性变换 Y = a X − b ​ ，其数学期望与方差分别为 E [ Y ] = a μ − b ​ , Var ( Y ) = a 2 σ 2 ​ . 根据题意， E [ Y ] = 0 且 Var ( Y ) = 1 ，因此有 a μ − b ​ = 0 , a 2 σ 2 ​ = 1. 解方程得 b = μ , a = σ ( 取正根 ) . 故 a = σ , b = μ ，对应选项 A。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n的概率分布为\nP{X=k}=2k+11+3k1\n（\nk=1,2,…\n），则对于正整数\nm\n、\nn\n有（　　）",
    options: [{ key: "A", text: "P { X > m + n ∣ X > m } = P { X > m }" }, { key: "B", text: "P { X > m + n ∣ X > m } = P { X > n }" }, { key: "C", text: "P { X > m + n ∣ X > m } > P { X > m }" }, { key: "D", text: "P { X > m + n ∣ X > m } > P { X > n }" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 首先，计算 P { X > k } 对于正整数 k 。由分布 P { X = k } = 2 k + 1 1 ​ + 3 k 1 ​ 可得： P { X > k } = j = k + 1 ∑ ∞ ​ ( 2 j + 1 1 ​ + 3 j 1 ​ ) = 2 k + 1 1 ​ + 2 ⋅ 3 k 1 ​ . 条件概率 P { X > m + n ∣ X > m } = P { X > m } P { X > m + n } ​ ，代入表达式： P { X > m + n ∣ X > m } = 2 m + 1 1 ​ + 2 ⋅ 3 m 1 ​ 2 m + n + 1 1 ​ + 2 ⋅ 3 m + n 1 ​ ​ = a + b a ⋅ 2 − n + b ⋅ 3 − n ​ , 其中 a = 2 m + 1 1 ​ , b = 2 ⋅ 3 m 1 ​ 。由于 b a ​ = ( 2 3 ​ ) m > 1 ，有 a + b a ​ > 2 1 ​ 。因此上式是 2 − n 和 3 − n 的加权平均，且较大权重赋予较大的 2 − n 。而 P { X > n } = 2 n + 1 1 ​ + 2 ⋅ 3 n 1 ​ = 2 1 ​ 2 − n + 2 1 ​ 3 − n 是等权重平均。比较两者： a + b a 2 − n + b 3 − n ​ − ( 2 1 ​ 2 − n + 2 1 ​ 3 − n ) = ( a + b a ​ − 2 1 ​ ) ( 2 − n − 3 − n ) > 0 , 因为 a + b a ​ > 2 1 ​ 且 2 − n > 3 − n 。故 P { X > m + n ∣ X > m } > P { X > n } 对所有正整数 m , n 成立。 对于其他选项：A 和 B 要求等式成立，但由表达式依赖 m 可知不成立；C 要求大于 P { X > m } ，但当 n 较大时可能不成立，例如 m = 1 , n = 2 时 P { X > 3 ∣ X > 1 } ≈ 0.1944 < P { X > 1 } ≈ 0.4167 。因此 D 正确。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设向量\nv1=(0,x,z)\n，\nv2=(y,0,1)\n，令\nF(x,y,z)=v1×v2\n，则\ndivF=\n____________。",
    answerText: "】 1 + z 【",
    referenceAnswer: "【答案】 1 + z 【解析】 首先计算向量场 F = v 1 ​ × v 2 ​ ，其中 v 1 ​ = ( 0 , x , z ) ， v 2 ​ = ( y , 0 , 1 ) 。 叉积公式为 a × b = ( a 2 ​ b 3 ​ − a 3 ​ b 2 ​ , a 3 ​ b 1 ​ − a 1 ​ b 3 ​ , a 1 ​ b 2 ​ − a 2 ​ b 1 ​ ) 代入得： 第一分量： x ⋅ 1 − z ⋅ 0 = x ， 第二分量： z ⋅ y − 0 ⋅ 1 = yz ， 第三分量： 0 ⋅ 0 − x ⋅ y = − x y 。 因此 F = ( x , yz , − x y ) 散度定义为 div F = ∂ x ∂ F 1 ​ ​ + ∂ y ∂ F 2 ​ ​ + ∂ z ∂ F 3 ​ ​ 计算偏导数： ∂ x ∂ F 1 ​ ​ = ∂ x ∂ x ​ = 1 ， ∂ y ∂ F 2 ​ ​ = ∂ y ∂ ( yz ) ​ = z ， ∂ z ∂ F 3 ​ ​ = ∂ z ∂ ( − x y ) ​ = 0 。 求和得 div F = 1 + z + 0 = 1 + z",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "limx→0(x1−xsinxln(1+x))=\n____________。",
    answerText: "】 2 1 ​ 【",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 将原式通分： lim x → 0 ​ ( x 1 ​ − x s i n x l n ( 1 + x ) ​ ) = lim x → 0 ​ x s i n x s i n x − l n ( 1 + x ) ​ 。当 x → 0 时，分子和分母均趋于0，为 0/0 型未定式，可使用洛必达法则。首先对分子和分母分别求导：分子导数为 cos x − 1 + x 1 ​ ，分母导数为 sin x + x cos x ，得到 x → 0 lim ​ sin x + x cos x cos x − 1 + x 1 ​ ​ . 代入 x = 0 仍为 0/0 型，再次应用洛必达法则：分子导数为 − sin x + ( 1 + x ) 2 1 ​ ，分母导数为 2 cos x − x sin x ，得到 x → 0 lim ​ 2 cos x − x sin x − sin x + ( 1 + x ) 2 1 ​ ​ . 代入 x = 0 ，分子为1，分母为2，故极限为 2 1 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\ny=y(x)\n由参数方程\n\n{x=2sin2ty=t+cost(t∈(0,2π))\n\n确定，则\ndx2d2yt=4π=\n____________。",
    answerText: "】 − 8 2 ​ ​ 【",
    referenceAnswer: "【答案】 − 8 2 ​ ​ 【解析】 对于参数方程 x = 2 sin 2 t , y = t + cos t ，先求一阶导数 d x d y ​ = d x / d t d y / d t ​ 。 计算导数： d t d x ​ = d t d ​ ( 2 sin 2 t ) = 4 sin t cos t , d t d y ​ = d t d ​ ( t + cos t ) = 1 − sin t . 因此， d x d y ​ = 4 sin t cos t 1 − sin t ​ . 再求二阶导数 d x 2 d 2 y ​ = d t d ​ ( d x d y ​ ) / d t d x ​ 。 令 u = d x d y ​ ，则 d t d u ​ = d t d ​ ( 4 sin t cos t 1 − sin t ​ ) . 使用商法则，分子 f ( t ) = 1 − sin t ，分母 g ( t ) = 4 sin t cos t ，有 f ′ ( t ) = − cos t ， g ′ ( t ) = 4 cos 2 t 。 于是 d t d u ​ = ( 4 sin t cos t ) 2 ( − cos t ) ⋅ ( 4 sin t cos t ) − ( 1 − sin t ) ⋅ ( 4 cos 2 t ) ​ = 16 sin 2 t cos 2 t − 4 [ sin t cos 2 t + cos 2 t ( 1 − sin t )] ​ . 从而 d x 2 d 2 y ​ = d x / d t d u / d t ​ = 16 sin 2 t cos 2 t − 4 [ sin t cos 2 t + cos 2 t ( 1 − sin t )] ​ ⋅ 4 sin t cos t 1 ​ = − 16 sin 3 t cos 3 t sin t cos 2 t + cos 2 t ( 1 − sin t ) ​ . 代入 t = 4 π ​ ，其中 sin 4 π ​ = cos 4 π ​ = 2 2 ​ ​ ， cos 2 t = cos 2 π ​ = 0 。 计算分子： sin t cos 2 t = 2 2 ​ ​ ⋅ ( 2 2 ​ ​ ) 2 = 2 2 ​ ​ ⋅ 2 1 ​ = 4 2 ​ ​ , cos 2 t ( 1 − sin t ) = 0. 分母： 16 sin 3 t cos 3 t = 16 ( 2 2 ​ ​ ) 6 = 16 ⋅ 8 1 ​ = 2. 因此 d x 2 d 2 y ​ ​ t = 4 π ​ ​ = − 2 4 2 ​ ​ ​ = − 8 2 ​ ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\n∫1+∞x2ln(x+1)dx=\n____________。",
    answerText: "】 2 ln 2 【",
    referenceAnswer: "【答案】 2 ln 2 【解析】 考虑积分 I = ∫ 1 + ∞ ​ x 2 l n ( x + 1 ) ​ d x 。使用分部积分法，令 u = ln ( x + 1 ) ， d v = x 2 1 ​ d x ，则 d u = x + 1 1 ​ d x ， v = − x 1 ​ 。由分部积分公式： I = [ − x ln ( x + 1 ) ​ ] 1 + ∞ ​ − ∫ 1 + ∞ ​ ( − x 1 ​ ) ⋅ x + 1 1 ​ d x = [ − x ln ( x + 1 ) ​ ] 1 + ∞ ​ + ∫ 1 + ∞ ​ x ( x + 1 ) 1 ​ d x 计算边界项：当 x → + ∞ 时， x l n ( x + 1 ) ​ → 0 ，故 [ − x l n ( x + 1 ) ​ ] 1 + ∞ ​ = 0 − ( − 1 l n 2 ​ ) = ln 2 。 对于积分 ∫ 1 + ∞ ​ x ( x + 1 ) 1 ​ d x ，将被积函数分解为部分分式： x ( x + 1 ) 1 ​ = x 1 ​ − x + 1 1 ​ 。于是 ∫ 1 + ∞ ​ x ( x + 1 ) 1 ​ d x = ∫ 1 + ∞ ​ ( x 1 ​ − x + 1 1 ​ ) d x = b → ∞ lim ​ [ ln ( x + 1 x ​ ) ] 1 b ​ = b → ∞ lim ​ ( ln ( b + 1 b ​ ) − ln ( 2 1 ​ ) ) 当 b → ∞ 时， b + 1 b ​ → 1 ，故 ln ( b + 1 b ​ ) → 0 ，而 ln ( 2 1 ​ ) = − ln 2 ，所以该积分值为 0 − ( − ln 2 ) = ln 2 。 因此，原积分 I = ln 2 + ln 2 = 2 ln 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\n\nA=1200a202a,B=a−1−1−12−1−11a,\n\n记\nm(X)\n为3阶矩阵\nX\n的实特征值中的最大值。若\nm(A)m(B)\n，则\na\n的取值范围为 ____________。",
    answerText: "】 ( − ∞ , 0 ) 【",
    referenceAnswer: "【答案】 ( − ∞ , 0 ) 【解析】 矩阵 A 的特征多项式为 det ( A − λ I ) = ( 1 − λ ) ( ( a − λ ) 2 − 4 ) ，解得特征值 λ = 1 , a − 2 , a + 2 ，故 m ( A ) = max { 1 , a + 2 } 。当 a ⩽ − 1 时， m ( A ) = 1 ；当 a > − 1 时， m ( A ) = a + 2 。 对于矩阵 B ，易见 ( 1 , 0 , 1 ) T 是特征向量，对应特征值 a − 1 。进一步计算特征多项式得 B 的特征值为 a − 1 , 2 ( a + 3 ) ± ∣ a − 1∣ ​ 。讨论 a 与 1 的关系：若 a ⩽ 1 ，则特征值为 a − 1 , 2 , a + 1 ，其中最大值为 2 ；若 a > 1 ，则特征值为 a − 1 , a + 1 , 2 ，其中最大值为 a + 1 。故 m ( B ) = { 2 , a + 1 , ​ a ⩽ 1 , a > 1. ​ 由条件 m ( A ) < m ( B ) 分情况讨论： 当 a ⩽ − 1 时， m ( A ) = 1 < 2 = m ( B ) ，恒成立； 当 − 1 < a ⩽ 1 时， m ( A ) = a + 2 ， m ( B ) = 2 ，由 a + 2 < 2 得 a < 0 ，故 − 1 < a < 0 ； 当 a > 1 时， m ( A ) = a + 2 ， m ( B ) = a + 1 ，由 a + 2 < a + 1 得矛盾，无解。 综上，满足条件的 a 的取值范围为 a < 0 ，即 ( − ∞ , 0 ) 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设随机变量\nX\n服从参数为1的泊松分布，随机变量\nY\n服从参数为3的泊松分布，\nX\n与\nY−X\n相互独立，则\nE(XY)=\n____________。",
    answerText: "】 4 【",
    referenceAnswer: "【答案】 4 【解析】 由题意， X ∼ Poisson ( 1 ) ，故 E ( X ) = 1 ， E ( X 2 ) = Var ( X ) + [ E ( X ) ] 2 = 1 + 1 2 = 2 。 Y ∼ Poisson ( 3 ) ，故 E ( Y ) = 3 。 已知 X 与 Y − X 相互独立，因此有： E ( X Y ) = E [ X ( Y − X ) + X 2 ] = E [ X ( Y − X )] + E ( X 2 ) . 由于 X 与 Y − X 独立，故 E [ X ( Y − X )] = E ( X ) ⋅ E ( Y − X ) 。 计算 E ( Y − X ) = E ( Y ) − E ( X ) = 3 − 1 = 2 ，代入得： E [ X ( Y − X )] = 1 × 2 = 2. 因此， E ( X Y ) = 2 + 2 = 4.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n求\nf(x,y)=(2x2−y2)ex\n的极值。",
    referenceAnswer: "【答案】 函数 f ( x , y ) = ( 2 x 2 − y 2 ) e x 在点 ( − 2 , 0 ) 处取得极大值 8 e − 2 ，在点 ( 0 , 0 ) 处无极值（鞍点）。 【解析】 首先，求函数的一阶偏导数： f x ​ = ∂ x ∂ ​ [ ( 2 x 2 − y 2 ) e x ] = e x ( 2 x 2 + 4 x − y 2 ) , f y ​ = ∂ y ∂ ​ [ ( 2 x 2 − y 2 ) e x ] = − 2 y e x . 令偏导数为零，由于 e x > 0 ，得方程组： 2 x 2 + 4 x − y 2 = 0 , − 2 y = 0. 由第二式得 y = 0 ，代入第一式得 2 x 2 + 4 x = 0 ，解得 x = 0 或 x = − 2 。故临界点为 ( 0 , 0 ) 和 ( − 2 , 0 ) 。 其次，求二阶偏导数以判断临界点类型： f xx ​ = ∂ x ∂ ​ f x ​ = e x ( 2 x 2 + 8 x + 4 − y 2 ) , f yy ​ = ∂ y ∂ ​ f y ​ = − 2 e x , f x y ​ = ∂ y ∂ ​ f x ​ = − 2 y e x . 计算判别式 D = f xx ​ f yy ​ − ( f x y ​ ) 2 。 在点 ( 0 , 0 ) 处： f xx ​ = 4 , f yy ​ = − 2 , f x y ​ = 0 , D = 4 × ( − 2 ) − 0 2 = − 8 < 0. 故 ( 0 , 0 ) 是鞍点，不是极值点。 在点 ( − 2 , 0 ) 处： f xx ​ f yy ​ f x y ​ D ​ = e − 2 ( 8 − 16 + 4 ) = − 4 e − 2 < 0 , = − 2 e − 2 , = 0 , = ( − 4 e − 2 ) × ( − 2 e − 2 ) − 0 2 = 8 e − 4 > 0. ​ 由于 D > 0 且 f xx ​ < 0 ，故 ( − 2 , 0 ) 是极大值点。极大值为： f ( − 2 , 0 ) = ( 2 × ( − 2 ) 2 − 0 2 ) e − 2 = 8 e − 2 . 因此，函数有极大值 8 e − 2 ，在点 ( − 2 , 0 ) 处取得。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分12分）\n\n设\nf(u)\n在\n(0,+∞)\n内具有3阶连续导数，且存在可微函数\nF(x,y)\n使\n\ndF(x,y)=x2yf(xy)dx+xy2f′′(xy)dy(xy>0).\n\n(1) 证明：\nuf′′(u)−uf(u)=c\n，\nc\n为常数；\n\n(2) 设\nf(1)=1\n，\nf′(1)=−1\n，\nf′′(1)=0\n，求\nf(u)\n的表达式。",
    referenceAnswer: "【答案】 (1) 由全微分条件可得 u f ′′ ( u ) ​ − u f ( u ) ​ = c ，其中 c 为常数。 (2) f ( u ) = e 1 − u − e u − 1 + u 。 【解析】 (1) 设 M ( x , y ) = x 2 y f ( x y ) ​ ， N ( x , y ) = x y 2 f ′′ ( x y ) ​ 。由于 d F = M d x + N d y 是全微分，故有 ∂ y ∂ M ​ = ∂ x ∂ N ​ 。计算偏导数： ∂ y ∂ M ​ = ∂ y ∂ ​ ( x 2 y f ( x y ) ​ ) = x 2 y 2 x y f ′ ( x y ) − f ( x y ) ​ , ∂ x ∂ N ​ = ∂ x ∂ ​ ( x y 2 f ′′ ( x y ) ​ ) = x 2 y 2 x y f ′′′ ( x y ) − f ′′ ( x y ) ​ . 令两者相等，得 x y f ′ ( x y ) − f ( x y ) = x y f ′′′ ( x y ) − f ′′ ( x y ) . 令 u = x y ，则上式化为 u f ′ ( u ) − f ( u ) = u f ′′′ ( u ) − f ′′ ( u ) . 两边同除以 u 2 ，得 d u d ​ ( u f ′′ ( u ) ​ ) = d u d ​ ( u f ( u ) ​ ) . 积分得 u f ′′ ( u ) ​ = u f ( u ) ​ + c , 即 u f ′′ ( u ) ​ − u f ( u ) ​ = c , 其中 c 为常数。 (2) 由已知条件 f ( 1 ) = 1 ， f ′ ( 1 ) = − 1 ， f ′′ ( 1 ) = 0 ，代入上式得 c = 1 f ′′ ( 1 ) ​ − 1 f ( 1 ) ​ = 0 − 1 = − 1. 于是有 f ′′ ( u ) − f ( u ) = − u . 该方程为二阶线性常微分方程，其齐次方程 f ′′ ( u ) − f ( u ) = 0 的通解为 f h ​ ( u ) = A e u + B e − u ，特解可设为 f p ​ ( u ) = p u + q ，代入得 p = 1 ， q = 0 ，即 f p ​ ( u ) = u 。故通解为 f ( u ) = A e u + B e − u + u . 利用初始条件确定常数 A , B ： { f ( 1 ) = A e + B e − 1 + 1 = 1 , f ′ ( 1 ) = A e − B e − 1 + 1 = − 1 , ​ 解得 A = − e − 1 ， B = e 。因此 f ( u ) = − e − 1 e u + e ⋅ e − u + u = e 1 − u − e u − 1 + u .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n设有向曲线\nL\n为椭圆\nx2+3y2=1\n上沿逆时针方向从点\nA(−21,−21)\n到点\nB(21,21)\n的部分，计算曲线积分\n\nI=∫L(ex2sinx−2xy)dx+(6x−x2−ycos4y)dy.",
    referenceAnswer: "【答案】 I = π 3 ​ − 4 1 ​ 【解析】 考虑整个椭圆 E : x 2 + 3 y 2 = 1 沿逆时针方向，其围成的区域为 D e ​ 。设被积函数中 P = e x 2 sin x − 2 x y ， Q = 6 x − x 2 − y cos 4 y 。计算偏导数得： ∂ x ∂ Q ​ = 6 − 2 x , ∂ y ∂ P ​ = − 2 x , 故 ∂ x ∂ Q ​ − ∂ y ∂ P ​ = 6. 由格林公式， ∮ E ​ P d x + Q d y = ∬ D e ​ ​ 6 d A = 6 ⋅ Area ( D e ​ ) . 椭圆 x 2 + 3 y 2 = 1 的半长轴 a = 1 ，半短轴 b = 3 ​ 1 ​ ，面积 Area ( D e ​ ) = πab = 3 ​ π ​ 。因此 ∮ E ​ P d x + Q d y = 6 ⋅ 3 ​ π ​ = 2 π 3 ​ . 设 L 为椭圆上从点 A ( − 2 1 ​ , − 2 1 ​ ) 到点 B ( 2 1 ​ , 2 1 ​ ) 的逆时针弧， L 2 ​ 为椭圆上从 B 到 A 的逆时针弧（另一半椭圆）。则 E = L ∪ L 2 ​ ，且 ∮ E ​ = ∫ L ​ + ∫ L 2 ​ ​ . 为计算 ∫ L 2 ​ ​ ，补直线段 L 1 ′ ​ 从 A 到 B （方向从 A 到 B ），与 L 2 ​ 构成闭合曲线 C 2 ​ = L 2 ​ ∪ L 1 ′ ​ ，所围区域为 D 2 ​ 。由对称性，直线 y = x 将椭圆分成面积相等的两部分，故 Area ( D 2 ​ ) = 2 1 ​ Area ( D e ​ ) = 2 3 ​ π ​ 。对 C 2 ​ 应用格林公式（ C 2 ​ 为逆时针方向）： ∮ C 2 ​ ​ P d x + Q d y = ∬ D 2 ​ ​ 6 d A = 6 ⋅ 2 3 ​ π ​ = π 3 ​ . 又 ∮ C 2 ​ ​ = ∫ L 2 ​ ​ + ∫ L 1 ′ ​ ​ . 计算 ∫ L 1 ′ ​ ​ ：直线段 L 1 ′ ​ 参数化为 x = t , y = t ， t 从 − 2 1 ​ 到 2 1 ​ 。则 ∫ L 1 ′ ​ ​ P d x + Q d y = ∫ − 2 1 ​ 2 1 ​ ​ [ e t 2 sin t − 3 t 2 + 6 t − t cos 4 t ] d t . 被积函数中 e t 2 sin t 、 6 t 、 − t cos 4 t 为奇函数，在对称区间上积分为零； − 3 t 2 为偶函数，故 ∫ − 2 1 ​ 2 1 ​ ​ ( − 3 t 2 ) d t = − 6 ∫ 0 2 1 ​ ​ t 2 d t = − 6 ⋅ 24 1 ​ = − 4 1 ​ . 所以 ∫ L 1 ′ ​ ​ = − 4 1 ​ 。代入得 ∫ L 2 ​ ​ = ∮ C 2 ​ ​ − ∫ L 1 ′ ​ ​ = π 3 ​ − ( − 4 1 ​ ) = π 3 ​ + 4 1 ​ . 最后， ∫ L ​ = ∮ E ​ − ∫ L 2 ​ ​ = 2 π 3 ​ − ( π 3 ​ + 4 1 ​ ) = π 3 ​ − 4 1 ​ . 因此，所求曲线积分为 I = π 3 ​ − 4 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分） \n\n设可导函数\nf(x)\n严格单调递增且满足\n∫−11f(x)dx=0\n，记\na=∫01f(x)dx\n。\n\n(1) 证明：\na>0\n；\n\n(2) 令\nF(x)=a(1−x2)+∫1xf(t)dt\n，证明：存在\nξ∈(−1,1)\n使\nF′′(ξ)=0\n。",
    referenceAnswer: "【答案】 (1) a > 0 。\n(2) 存在 ξ ∈ ( − 1 , 1 ) 使得 F ′′ ( ξ ) = 0 。 【解析】 (1) 由于 f ( x ) 严格单调递增，对于 x ∈ ( − 1 , 0 ) 有 f ( x ) < f ( 0 ) ，对于 x ∈ ( 0 , 1 ) 有 f ( x ) > f ( 0 ) 。结合积分 ∫ − 1 1 ​ f ( x ) d x = 0 ，即 ∫ − 1 0 ​ f ( x ) d x + ∫ 0 1 ​ f ( x ) d x = 0 ，记 a = ∫ 0 1 ​ f ( x ) d x ，则 ∫ − 1 0 ​ f ( x ) d x = − a 。由严格不等式，有： ∫ − 1 0 ​ f ( x ) d x < ∫ − 1 0 ​ f ( 0 ) d x = f ( 0 ) , ∫ 0 1 ​ f ( x ) d x > ∫ 0 1 ​ f ( 0 ) d x = f ( 0 ) . 即 − a < f ( 0 ) 且 a > f ( 0 ) ，从而 a > f ( 0 ) > − a ，得 a > − a ，故 a > 0 。 (2) 由 F ( x ) = a ( 1 − x 2 ) + ∫ 1 x ​ f ( t ) d t ，计算得： F ( − 1 ) = a ( 1 − 1 ) + ∫ 1 − 1 ​ f ( t ) d t = 0 , F ( 1 ) = a ( 1 − 1 ) + ∫ 1 1 ​ f ( t ) d t = 0. 又 F ( 0 ) = a ( 1 − 0 ) + ∫ 1 0 ​ f ( t ) d t = a − ∫ 0 1 ​ f ( t ) d t = a − a = 0 。\n故 F ( − 1 ) = F ( 0 ) = F ( 1 ) = 0 。在区间 [ − 1 , 0 ] 和 [ 0 , 1 ] 上分别应用罗尔定理，存在 c 1 ​ ∈ ( − 1 , 0 ) 和 c 2 ​ ∈ ( 0 , 1 ) 使得 F ′ ( c 1 ​ ) = 0 和 F ′ ( c 2 ​ ) = 0 。由于 F ′ ( x ) = − 2 a x + f ( x ) 在 [ c 1 ​ , c 2 ​ ] 上连续，在 ( c 1 ​ , c 2 ​ ) 内可导，且 F ′ ( c 1 ​ ) = F ′ ( c 2 ​ ) = 0 ，由罗尔定理，存在 ξ ∈ ( c 1 ​ , c 2 ​ ) ⊂ ( − 1 , 1 ) 使得 F ′′ ( ξ ) = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n已知向量组\n\nα1=10−1−1,α2=1−10−2,α3=0−11−1,α4=01−11,\n\n记\nA=(α1,α2,α3,α4)\n，\nG=(α1,α2)\n。\n\n(1) 证明：\nα1,α2\n是\nα1,α2,α3,α4\n的极大线性无关组。\n\n(2) 求矩阵\nH\n使得\nA=GH\n，并求\nA10\n。",
    referenceAnswer: "【答案】 (1) 略 (2) H = ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) ， A 10 = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ − 9 − 1 10 8 ​ 9 1 − 10 − 8 ​ ​ 【解析】 (1) 首先证明 α 1 ​ , α 2 ​ 线性无关。设 k 1 ​ α 1 ​ + k 2 ​ α 2 ​ = 0 ，解得 k 1 ​ = k 2 ​ = 0 ，故线性无关。其次，解线性方程组得 α 3 ​ = − α 1 ​ + α 2 ​ ， α 4 ​ = α 1 ​ − α 2 ​ ，即 α 3 ​ , α 4 ​ 可由 α 1 ​ , α 2 ​ 线性表示，因此 α 1 ​ , α 2 ​ 是极大线性无关组。 (2) 由线性表示关系， α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ 在基 α 1 ​ , α 2 ​ 下的坐标分别为 ( 1 , 0 ) T , ( 0 , 1 ) T , ( − 1 , 1 ) T , ( 1 , − 1 ) T ，故 H = ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) . 由 A = G H ，得 A 10 = G ( H G ) 9 H 。计算 H G = ( 1 0 ​ − 1 1 ​ ) , 记 M = H G ，则 M = I + N ，其中 N = ( 0 0 ​ − 1 0 ​ ) 满足 N 2 = 0 ，故 M 9 = ( I + N ) 9 = I + 9 N = ( 1 0 ​ − 9 1 ​ ) . 计算 M 9 H = ( 1 0 ​ − 9 1 ​ − 10 1 ​ 10 − 1 ​ ) , 再与 G 相乘得 A 10 = G ( M 9 H ) = ​ 1 0 − 1 − 1 ​ 1 − 1 0 − 2 ​ ​ ( 1 0 ​ − 9 1 ​ − 10 1 ​ 10 − 1 ​ ) = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ − 9 − 1 10 8 ​ 9 1 − 10 − 8 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）\n\n假设某种元件寿命服从指数分布，其均值\nθ\n是未知参数。为估计\nθ\n，取\nn\n个这种元件同时做寿命实验，试验直到出现\nk\n（\n1≤k≤n\n）个元件失效时停止。\n\n(1) 若\nk=1\n，失效元件寿命记为\nT\n，\n(i) 求\nT\n的概率密度；\n(ii) 确定\na\n，使\nθ^=aT\n是\nθ\n的无偏估计，并求\nD(θ^)\n；\n\n(2) 已知\nk\n个失效元件寿命值分别为\nt1,t2,⋯,tk\n，且\nt1≤t2≤⋯≤tk\n，似然函数为\n\nL(θ)=θk1e−θ1[∑i=1kti+(n−k)tk],\n\n求\nθ\n的最大似然估计值。",
    referenceAnswer: "【答案】 (1) (i) T 的概率密度为 f T ​ ( t ) = θ n ​ e − θ n ​ t , t ≥ 0 (ii) 取 a = n ，此时 θ ^ = n T 是 θ 的无偏估计，且方差为 D ( θ ^ ) = θ 2 (2) θ 的最大似然估计值为 θ ^ = k 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] 【解析】 (1) (i) 元件寿命服从指数分布，均值为 θ ，即密度函数为 f ( t ) = θ 1 ​ e − t / θ , t ≥ 0 取 n 个独立元件进行试验，直到第一个元件失效，失效时间 T 为样本最小值。指数分布具有无记忆性，因此 T 仍服从指数分布：其生存函数为 P ( T > t ) = [ P ( X > t ) ] n = e − n t / θ 故累积分布函数为 F T ​ ( t ) = 1 − e − n t / θ 密度函数为 f T ​ ( t ) = d t d ​ F T ​ ( t ) = θ n ​ e − θ n ​ t , t ≥ 0 (ii) 计算 T 的期望： E ( T ) = ∫ 0 ∞ ​ t ⋅ θ n ​ e − θ n ​ t d t = n θ ​ 要使 θ ^ = a T 为无偏估计，需满足 E ( θ ^ ) = a E ( T ) = a ⋅ n θ ​ = θ 解得 a = n 。 计算 T 的方差：先求 E ( T 2 ) = ∫ 0 ∞ ​ t 2 ⋅ θ n ​ e − θ n ​ t d t = n 2 2 θ 2 ​ 因此 D ( T ) = E ( T 2 ) − [ E ( T ) ] 2 = n 2 2 θ 2 ​ − ( n θ ​ ) 2 = n 2 θ 2 ​ 于是 D ( θ ^ ) = D ( n T ) = n 2 D ( T ) = n 2 ⋅ n 2 θ 2 ​ = θ 2 (2) 给定似然函数 L ( θ ) = θ k 1 ​ e − θ 1 ​ [ ∑ i = 1 k ​ t i ​ + ( n − k ) t k ​ ] 取对数似然函数： ln L ( θ ) = − k ln θ − θ 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] 对 θ 求导并令其为零： d θ d ln L ( θ ) ​ = − θ k ​ + θ 2 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] = 0 解得 θ = k 1 ​ [ i = 1 ∑ k ​ t i ​ + ( n − k ) t k ​ ] 此即为 θ 的最大似然估计值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2026_math1 = {
  id: P, year: Y,
  title: '2026 年全国硕士研究生招生考试 数学（一）',
  short: '2026 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2026_math1.length,
  qids: questions2026_math1.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
