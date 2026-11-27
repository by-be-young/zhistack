const P = 'paper-2012-math3'
const Y = 2012
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2012-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2012 考研数学（三）真题',
  ...extra
})

export const questions2012_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\ny=x2−1x2+x\n的渐近线条数为()",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C lim x → 1 ​ x 2 − 1 x 2 + x ​ = ∞ ，所以 x = 1 为垂直渐近线。 lim x → ∞ ​ x 2 − 1 x 2 + x ​ = 1 ，所以 y = 1 为水平渐近线。 没有斜渐近线，故渐近线条数为 2，选 C。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)=(ex−1)(e2x−2)⋯(enx−n)\n，其中\nn\n为正整数，则\nf′(0)=",
    options: [{ key: "A", text: "( − 1 ) n − 1 ( n − 1 )!" }, { key: "B", text: "( − 1 ) n ( n − 1 )!" }, { key: "C", text: "( − 1 ) n − 1 n !" }, { key: "D", text: "( − 1 ) n n !" }],
    answer: ["C"],
    explain: "正确答案： C f ′ ( x ) 的表达式为： f ′ ( x ) ​ = e x ( e 2 x − 2 ) ⋯ ( e n x − n ) + ( e x − 1 ) ( 2 e 2 x ) ⋯ ( e n x − n ) + ⋯ + ( e x − 1 ) ( e 2 x − 2 ) ⋯ ( n e n x ) ​ 当 x = 0 时，每一项的求值如下： 第一项： e 0 ( e 0 − 2 ) ⋯ ( e 0 − n ) = 1 × ( − 1 ) × ( − 2 ) ⋯ × ( − ( n − 1 )) = ( − 1 ) n − 1 ( n − 1 )! 其余项：由于至少包含一个 ( e k x − k ) 因子，在 x = 0 时均为 0。 因此，导数值为： f ′ ( 0 ) = ( − 1 ) n − 1 n ! 最终答案为 C 。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(r2)\n连续，则二次积分\n\n∫02πdθ∫2cosθ2f(r2)rdr=()",
    options: [{ key: "A", text: "∫ 0 2 ​ d x ∫ 2 x − x 2 ​ 4 − x 2 ​ ​ x 2 + y 2 ​ f ( x 2 + y 2 ) d y" }, { key: "B", text: "∫ 0 2 ​ d x ∫ 2 x − x 2 ​ 4 − x 2 ​ ​ f ( x 2 + y 2 ) d y" }, { key: "C", text: "∫ 0 2 ​ d x ∫ − 2 x − x 2 ​ 4 − x 2 ​ ​ x 2 + y 2 ​ f ( x 2 + y 2 ) d y" }, { key: "D", text: "∫ 0 2 ​ d x ∫ − 2 x − x 2 ​ 4 − x 2 ​ ​ f ( x 2 + y 2 ) d y" }],
    answer: ["B"],
    explain: "正确答案： B 极坐标下积分区域转换为直角坐标 X-型区域时，有以下转换关系： r = 2 cos θ 转换为直角坐标方程 x 2 + y 2 = 2 x ，即 ( x − 1 ) 2 + y 2 = 1 。 r = 2 对应直角坐标方程 x 2 + y 2 = 4 。 在第一象限内， y 的范围为： y ∈ [ 2 x − x 2 ​ , 4 − x 2 ​ ] 被积函数为 f ( x 2 + y 2 ) ，因此排除以下选项： 含 x 2 + y 2 ​ 的选项 (A) 和 (C)。 含负号下限的选项 (D)。 最终选择 (B) 。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知级数\n∑n=1∞(−1)nnsinnα1\n绝对收敛，\n∑n=1∞n2−α(−1)n\n条件收敛，则\nα\n的取值范围为()",
    options: [{ key: "A", text: "0 < α ≤ 2 1 ​" }, { key: "B", text: "2 1 ​ < α ≤ 1" }, { key: "C", text: "1 < α ≤ 2 3 ​" }, { key: "D", text: "2 3 ​ < α ≤ 2" }],
    answer: ["D"],
    explain: "正确答案： D 考察绝对收敛和条件收敛的定义及P级数的收敛性。 对于级数 ∑ n = 1 ∞ ​ ( − 1 ) n n ​ sin n α 1 ​ ，当 n ​ ⋅ n α 1 ​ = n α − 2 1 ​ 1 ​ 时，绝对收敛要求 α − 2 1 ​ > 1 ，即 α > 2 3 ​ 。 对于级数 ∑ n = 1 ∞ ​ n 2 − α ( − 1 ) n ​ ，条件收敛要求满足： 2 − α ≤ 1 且 2 − α > 0 即： 1 ≤ 2 − α < 1 解得 α ≤ 2 且 α > 1 。 综合以上结果，得到 2 3 ​ < α ≤ 2 ，故选(D)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα1=00a1\n,\nα2=01a2\n,\nα3=1−1a3\n,\nα4=−11a4\n，其中\na1,a2,a3,a4\n为任意常数，则下列向量组线性相关的是()",
    options: [{ key: "A", text: "α 1 ​ , α 2 ​ , α 3 ​" }, { key: "B", text: "α 1 ​ , α 2 ​ , α 4 ​" }, { key: "C", text: "α 1 ​ , α 3 ​ , α 4 ​" }, { key: "D", text: "α 2 ​ , α 3 ​ , α 4 ​" }],
    answer: ["C"],
    explain: "正确答案： C 计算行列式： ∣ ( α 1 ​ , α 3 ​ , α 4 ​ ) ∣ = ​ 0 0 a 1 ​ ​ 1 − 1 a 3 ​ ​ − 1 1 a 4 ​ ​ ​ = a 1 ​ ​ 1 − 1 ​ − 1 1 ​ ​ = 0 故 α 1 ​ , α 3 ​ , α 4 ​ 线性相关，选 (C)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为 3 阶矩阵，\nP=(α1,α2,α3)\n是可逆矩阵，满足\n\nP−1AP=112,\n\n若\nQ=(α1+α2,α2,α3)\n，则\nQ−1AQ=",
    options: [{ key: "A", text: "​ 1 ​ 2 ​ 1 ​ ​" }, { key: "B", text: "​ 1 ​ 1 ​ 2 ​ ​" }, { key: "C", text: "​ 2 ​ 1 ​ 2 ​ ​" }, { key: "D", text: "​ 2 ​ 2 ​ 1 ​ ​" }],
    answer: ["B"],
    explain: "正确答案： B 由 Q = P ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ，得 Q − 1 = ​ 1 − 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ P − 1 则 Q − 1 A Q = ​ 1 − 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ P − 1 A P ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ 代入 P − 1 A P = ​ 1 ​ 1 ​ 2 ​ ​ ，得 Q − 1 A Q = ​ 1 − 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ​ 1 ​ 1 ​ 2 ​ ​ ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ = ​ 1 ​ 1 ​ 2 ​ ​ 故选 (B)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且都服从区间\n(0,1)\n上的均匀分布，则\nP{X2+Y2≤1}=",
    options: [{ key: "A", text: "4 1 ​" }, { key: "B", text: "2 1 ​" }, { key: "C", text: "8 π ​" }, { key: "D", text: "4 π ​" }],
    answer: ["D"],
    explain: "正确答案： D X 与 Y 独立且服从 ( 0 , 1 ) 均匀分布，联合概率密度 f ( x , y ) = 1 （ 0 < x < 1 ， 0 < y < 1 ）。 定义 Z = X + Y ，则 Z 的取值范围为 ( 0 , 2 ) 。对于 0 < z < 1 ，有： f Z ​ ( z ) = ∫ 0 z ​ f ( x , z − x ) d x = ∫ 0 z ​ 1 d x = z 对于 1 ≤ z < 2 ，有： f Z ​ ( z ) = ∫ z − 1 1 ​ f ( x , z − x ) d x = ∫ z − 1 1 ​ 1 d x = 2 − z 综上， Z 的概率密度函数为： f Z ​ ( z ) = ⎩ ⎨ ⎧ ​ z , 2 − z , 0 , ​ 0 < z < 1 1 ≤ z < 2 其他 ​"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1,X2,X3,X4\n为来自总体\nN(1,σ2)\n(σ>0)\n的简单随机样本，则统计量\n\n∣X3+X4−2∣X1−X2\n\n的分布为()",
    options: [{ key: "A", text: "N ( 0 , 1 )" }, { key: "B", text: "t ( 1 )" }, { key: "C", text: "χ 2 ( 1 )" }, { key: "D", text: "F ( 1 , 1 )" }],
    answer: ["B"],
    explain: "正确答案： B 令 U = 2 ​ σ X 1 ​ − X 2 ​ ​ ∼ N ( 0 , 1 ) ， V = 2 ​ σ X 3 ​ + X 4 ​ − 2 ​ ∼ N ( 0 , 1 ) ，且 U 与 V 独立。 则有： ∣ V ∣/ 1 ​ U ​ ∼ t ( 1 ) 即统计量： ∣ X 3 ​ + X 4 ​ − 2∣ X 1 ​ − X 2 ​ ​ = ∣ V ∣ U ​ ∼ t ( 1 ) 故选 (B)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\nx→4πlim(tanx)cosx−sinx1",
    answerText: "】 e − 2 ​ 【",
    referenceAnswer: "【答案】 e − 2 ​ 【解析】 x → 4 π ​ lim ​ ( tan x ) c o s x − s i n x 1 ​ = e l i m [ ( t a n x − 1 ) c o s x − s i n x 1 ​ ] x → 4 π ​ lim ​ [ ( tan x − 1 ) cos x − sin x 1 ​ ] ​ = x → 4 π ​ lim ​ cos x − sin x tan x − tan 4 π ​ ​ = x → 4 π ​ lim ​ 2 ​ sin ( 4 π ​ − x ) tan ( x − 4 π ​ ) ( 1 + tan x tan 4 π ​ ) ​ = x → 4 π ​ lim ​ 2 ​ ( − ( x − 4 π ​ ) ) ( x − 4 π ​ ) ( 1 + tan x tan 4 π ​ ) ​ = − 2 ​ 1 + 1 ​ = − 2 ​ ​ 所以 x → 4 π ​ lim ​ ( tan x ) c o s x − s i n x 1 ​ = e c o s x − s i n x 1 ​ = e − 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\n\nf(x)={lnx,2x−1,x≥1x1\n\ny=f(f(x))\n，求\ndxdyx=0\n。",
    answerText: "】 4 【",
    referenceAnswer: "【答案】 4 【解析】 d x d y ​ ​ x = 0 ​ = f ′ ( f ( x )) f ′ ( x ) ∣ x = 0 ​ = f ′ ( f ( 0 )) f ′ ( 0 ) = f ′ ( − 1 ) f ′ ( 0 ) 由 f ( x ) 的表达式知，当 x < 1 时， f ′ ( x ) = 2 ，所以 f ′ ( 0 ) = f ′ ( − 1 ) = 2 。 因此， d x d y ​ ​ x = 0 ​ = 2 × 2 = 4",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nz=f(x,y)\n满足\n\nx→0y→1limx2+(y−1)2f(x,y)−2x+y−2=0,\n\n则\ndz∣(0,1)=",
    answerText: "】 d z ∣ ( 0 , 1 ) ​ = 2 d x − d y 【",
    referenceAnswer: "【答案】 d z ∣ ( 0 , 1 ) ​ = 2 d x − d y 【解析】 由题意可知分子应为分母的高阶无穷小，即 f ( x , y ) = 2 x − y + 2 + o ( x 2 + ( y − 1 ) 2 ​ ) 。 因此： ∂ x ∂ z ​ ​ ( 0 , 1 ) ​ = 2 ∂ y ∂ z ​ ​ ( 0 , 1 ) ​ = − 1 故： d z ∣ ( 0 , 1 ) ​ = 2 d x − d y",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）由曲线\ny=x4\n和直线\ny=x\n及\ny=4x\n在第一象限中所围图形的面积为？",
    answerText: "】 4 \\ln 2 【",
    referenceAnswer: "【答案】 4 \\ln 2 【解析】 用被积函数为1的二重积分来求，图形在第一象限的交点为： y = x 与 y = x 4 ​ 交于 ( 2 , 2 ) ， y = 4 x 与 y = x 4 ​ 交于 ( 1 , 4 ) 。 将区域分为两部分： 当 0 < y ≤ 2 时， x 的范围是 4 y ​ 到 y 。 当 2 < y ≤ 4 时， x 的范围是 4 y ​ 到 y 4 ​ 。 所以面积 S 为： S = ∫ 0 2 ​ d y ∫ 4 y ​ y ​ d x + ∫ 2 4 ​ d y ∫ 4 y ​ y 4 ​ ​ d x 计算第一个积分： ∫ 0 2 ​ ( y − 4 y ​ ) d y = ∫ 0 2 ​ 4 3 y ​ d y = 8 3 ​ y 2 ​ 0 2 ​ = 2 3 ​ 计算第二个积分： ∫ 2 4 ​ ( y 4 ​ − 4 y ​ ) d y = ( 4 ln y − 8 y 2 ​ ) ​ 2 4 ​ 代入上下限： 4 ln 4 − 2 − ( 4 ln 2 − 0.5 ) = 4 ln 2 − 1.5 最终面积为： S = 2 3 ​ + 4 ln 2 − 1.5 = 4 ln 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA\n为 3 阶矩阵，\n∣A∣=3\n，\nA∗\n为\nA\n的伴随矩阵。若交换\nA\n的第一行与第二行得到矩阵\nB\n，则\n∣BA∗∣=",
    answerText: "】 -27 【",
    referenceAnswer: "【答案】 -27 【解析】 由于交换 A 的第一行与第二行得到矩阵 B ，即 B = E 12 ​ A （其中 E 12 ​ 为交换单位矩阵第一、二行的初等矩阵），则 B A ∗ = E 12 ​ A ⋅ A ∗ 因为 A A ∗ = ∣ A ∣ E = 3 E ，所以 B A ∗ = E 12 ​ ⋅ 3 E = 3 E 12 ​ 行列式 ∣3 E 12 ​ ∣ = 3 3 ∣ E 12 ​ ∣ = 27 × ( − 1 ) = − 27 （因为交换两行的初等矩阵行列式为 − 1 ）。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA\n、\nB\n、\nC\n为随机事件，\nA\n与\nC\n互不相容，\nP(AB)=21\n，\nP(C)=31\n，则\nP(AB∣C)=",
    answerText: "】 4 3 ​ 【",
    referenceAnswer: "【答案】 4 3 ​ 【解析】 根据条件概率公式： P ( A B ∣ C ) = P ( C ) P ( A B C ) ​ 已知： P ( C ) = 1 − P ( C ) = 1 − 3 1 ​ = 3 2 ​ 由于事件 A 与 C 互不相容，即 A C = ∅ ，因此： A BC ⊆ A C = ∅ ⟹ P ( A BC ) = 0 进一步分解 A B ： A B = A B C ∪ A BC 其中 A B C 与 A BC 互斥，故： P ( A B ) = P ( A B C ) + P ( A BC ) 代入已知条件： P ( A B C ) = P ( A B ) − P ( A BC ) = 2 1 ​ − 0 = 2 1 ​ 最终计算条件概率： P ( A B ∣ C ) = 3 2 ​ 2 1 ​ ​ = 4 3 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算\n\nx→0limx4ex2−e2−2cosx",
    referenceAnswer: "【答案】 6 1 ​ 【解析】 x → 0 lim ​ x 4 e x 2 − e 2 − 2 c o s x ​ ​ = x → 0 lim ​ e 2 − 2 c o s x x 4 e x 2 − 2 + 2 c o s x − 1 ​ = x → 0 lim ​ x 4 x 2 − 2 + 2 cos x ​ ( 等价无穷小替换 ) = x → 0 lim ​ x 4 x 2 − 2 + 2 ( 1 − 2 x 2 ​ + 12 x 4 ​ + o ( x 4 ) ) ​ = x → 0 lim ​ x 4 6 x 4 ​ + o ( x 4 ) ​ = 6 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算\n∬Dexxydxdy\n，其中\nD\n由\ny=x\n与\ny=x1\n所围区域。",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 由题意知，区域 D = {( x , y ) ∣ 0 < x ≤ 1 , x ​ < y < x ​ 1 ​ } ，则有 ∬ D ​ e x x y d x d y ​ = ∫ 0 1 ​ d x ∫ x ​ x ​ 1 ​ ​ e x x y d y = ∫ 0 1 ​ e x x [ 2 1 ​ y 2 ] x ​ x ​ 1 ​ ​ d x = 2 1 ​ ∫ 0 1 ​ e x x ( x 1 ​ − x ) d x = 2 1 ​ ∫ 0 1 ​ e x ( 1 − x 2 ) d x = 2 1 ​ [ ∫ 0 1 ​ e x d x − ∫ 0 1 ​ x 2 e x d x ] = 2 1 ​ [ e x ​ 0 1 ​ − ( x 2 e x ​ 0 1 ​ − 2 ∫ 0 1 ​ x e x d x ) ] = 2 1 ​ [ ( e − 1 ) − ( e − 2 ( x e x ​ 0 1 ​ − ∫ 0 1 ​ e x d x ) ) ] = 2 1 ​ [ ( e − 1 ) − ( e − 2 ( e − ( e − 1 ) ) ) ] = 2 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n某企业为生产甲、乙两种型号的产品，投入的固定成本为\n10000\n万元，设该企业生产甲、乙两种产品的产量分别为\nx\n(件) 和\ny\n(件)，且两种产品的边际成本分别为\n20+2x\n(万元/件) 与\n6+y\n(万元/件)。\n\n求生产甲、乙两种产品的总成本函数\nC(x,y)\n(万元)。\n\n当总产量为\n50\n件时，甲、乙两种的产量各为多少时可以使总成本最小？求最小的成本。\n\n求总产量为\n50\n件时且总成本最小时甲产品的边际成本，并解释其经济意义。\n",
    referenceAnswer: "【答案】 总成本函数为 C ( x , y ) = 20 x + 4 x 2 ​ + 6 y + 2 1 ​ y 2 + 10000 。 当总产量为50件时，甲产品产量为24件，乙产品产量为26件时总成本最小，最小成本为11118万元。 总产量为50件且总成本最小时，甲产品的边际成本为32万元/件，其经济意义为：在要求总产量为50件时，当甲产品为24件，这时改变一个单位的甲产品产量，成本会发生32万元的改变。 【解析】 设成本函数为 C ( x , y ) ，由题意有： C x ′ ​ ( x , y ) = 20 + 2 x ​ 对 x 积分得： C ( x , y ) = 20 x + 4 x 2 ​ + D ( y ) 再对 y 求导有： C y ′ ​ ( x , y ) = D ′ ( y ) = 6 + y 再对 y 积分有： D ( y ) = 6 y + 2 1 ​ y 2 + c 所以： C ( x , y ) = 20 x + 4 x 2 ​ + 6 y + 2 1 ​ y 2 + c 又 C ( 0 , 0 ) = 10000 ，故 c = 10000 ，所以： C ( x , y ) = 20 x + 4 x 2 ​ + 6 y + 2 1 ​ y 2 + 10000 若 x + y = 50 ，则 y = 50 − x （ 0 ≤ x ≤ 50 ），代入到成本函数中，有： C ( x ) ​ = 20 x + 4 x 2 ​ + 6 ( 50 − x ) + 2 1 ​ ( 50 − x ) 2 + 10000 = 4 3 ​ x 2 − 36 x + 11550 ​ 令 C ′ ( x ) = 2 3 ​ x − 36 = 0 ，得 x = 24 ， y = 26 。此时总成本最小： C ( 24 , 26 ) = 11118 总产量为50件且总成本最小时，甲产品的边际成本为： C x ′ ​ ( 24 , 26 ) = 20 + 2 24 ​ = 32 表示在要求总产量为50件时，当甲产品为24件，这时改变一个单位的甲产品产量，成本会发生32万元的改变。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n证明：\n\nxln1−x1+x+cosx≥1+2x2,−1x1",
    referenceAnswer: "【答案】 见解析 【解析】 令 f ( x ) = x ln 1 − x 1 + x ​ + cos x − 1 − 2 x 2 ​ ，可得导数为： f ′ ( x ) ​ = ln 1 − x 1 + x ​ + x ⋅ ( 1 + x ) ( 1 − x ) 2 ​ − sin x − x = ln 1 − x 1 + x ​ + 1 − x 2 2 x ​ − sin x − x = ln 1 − x 1 + x ​ + x ( 1 − x 2 2 ​ − 1 ) − sin x = ln 1 − x 1 + x ​ + x ⋅ 1 − x 2 1 + x 2 ​ − sin x ​ 当 0 < x < 1 时， ln 1 − x 1 + x ​ ≥ 0 ，且 1 − x 2 1 + x 2 ​ > 1 。因此： 1 − x 2 1 + x 2 ​ x − sin x ≥ x − sin x ≥ 0 因为 x ≥ sin x 在 x ≥ 0 时成立，故 f ′ ( x ) ≥ 0 。又因为 f ( 0 ) = 0 ，所以当 0 < x < 1 时， f ( x ) ≥ 0 ，即： x ln 1 − x 1 + x ​ + cos x ≥ 1 + 2 x 2 ​ 当 − 1 < x < 0 时，令 t = − x ，则 0 < t < 1 。此时： f ( x ) = − t ln 1 + t 1 − t ​ + cos ( − t ) − 1 − 2 t 2 ​ = t ln 1 − t 1 + t ​ + cos t − 1 − 2 t 2 ​ 由上述 0 < t < 1 时的结论可知 f ( x ) ≥ 0 ，即： x ln 1 − x 1 + x ​ + cos x ≥ 1 + 2 x 2 ​ 综上，不等式： x ln 1 − x 1 + x ​ + cos x ≥ 1 + 2 x 2 ​ 在 − 1 < x < 1 时成立。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数\nf(x)\n满足方程\nf′′(x)+f′(x)−2f(x)=0\n及\nf′(x)+f(x)=2ex\n。\n\n求表达式\nf(x)\n；\n\n求曲线\ny=f(x2)∫0xf(−t2)dt\n的拐点。\n",
    referenceAnswer: "【答案】 f ( x ) = e x 拐点为 ( 0 , 0 ) 【解析】 特征方程为 r 2 + r − 2 = 0 ，特征根为 r 1 ​ = 1 ， r 2 ​ = − 2 。齐次微分方程 f ′′ ( x ) + f ′ ( x ) − 2 f ( x ) = 0 的通解为 f ( x ) = C 1 ​ e x + C 2 ​ e − 2 x 。 由 f ′ ( x ) + f ( x ) = 2 e x 得： ( C 1 ​ e x − 2 C 2 ​ e − 2 x ) + ( C 1 ​ e x + C 2 ​ e − 2 x ) = 2 e x 即： 2 C 1 ​ e x − C 2 ​ e − 2 x = 2 e x 所以 C 1 ​ = 1 ， C 2 ​ = 0 ，故 f ( x ) = e x 。 曲线方程为 y = e x 2 ∫ 0 x ​ e − t 2 d t ，则： y ′ = 2 x e x 2 ∫ 0 x ​ e − t 2 d t + e x 2 ⋅ e − x 2 = 2 x e x 2 ∫ 0 x ​ e − t 2 d t + 1 y ′′ = 2 e x 2 ∫ 0 x ​ e − t 2 d t + 4 x 2 e x 2 ∫ 0 x ​ e − t 2 d t + 2 x = 2 ( 1 + 2 x 2 ) e x 2 ∫ 0 x ​ e − t 2 d t + 2 x 令 y ′′ = 0 ： 当 x = 0 时， y ′′ = 0 。 当 x > 0 时， 2 x > 0 ，且 2 ( 1 + 2 x 2 ) e x 2 ∫ 0 x ​ e − t 2 d t > 0 ，故 y ′′ > 0 。 当 x < 0 时， 2 x < 0 ，且 ∫ 0 x ​ e − t 2 d t = − ∫ x 0 ​ e − t 2 d t < 0 ，故 2 ( 1 + 2 x 2 ) e x 2 ∫ 0 x ​ e − t 2 d t < 0 ，因此 y ′′ < 0 。 因此， x = 0 左右两边 y ′′ 符号改变，曲线在 ( 0 , 0 ) 点左右凹凸性相反，所以曲线的拐点为 ( 0 , 0 ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\n\nA=100aa1000a1000a1,b=1−100\n\n(I) 求\n∣A∣\n\n(II) 已知线性方程组\nAx=b\n有无穷多解，求\na\n，并求\nAx=b\n的通解。",
    referenceAnswer: "【答案】 (I) ∣ A ∣ = 1 − a 4 (II) a = − 1 ，通解为 x = k ​ 1 1 1 1 ​ ​ + ​ 0 − 1 0 0 ​ ​ ，其中 k 为任意常数。 【解析】 (I) ​ 1 0 0 a ​ a 1 0 0 ​ 0 a 1 0 ​ 0 0 a 1 ​ ​ = 1 × ​ 1 0 0 ​ a 1 0 ​ 0 a 1 ​ ​ + a × ( − 1 ) 4 + 1 ​ a 1 0 ​ 0 a 1 ​ 0 0 a ​ ​ = 1 − a 4 (II) ​ ​ 1 0 0 a ​ a 1 0 0 ​ 0 a 1 0 ​ 0 0 a 1 ​ 1 − 1 0 0 ​ ​ → ​ 1 0 0 0 ​ a 1 0 − a 2 ​ 0 a 1 0 ​ 0 0 a 1 ​ 1 − 1 0 − a ​ ​ → ​ 1 0 0 0 ​ a 1 0 0 ​ 0 a 1 a 3 ​ 0 0 a 1 ​ 1 − 1 0 − a − a 2 ​ ​ → ​ 1 0 0 0 ​ a 1 0 0 ​ 0 a 1 0 ​ 0 0 a 1 − a 4 ​ 1 − 1 0 − a − a 2 ​ ​ ​ 当原线性方程组有无穷多解时，需满足 1 − a 4 = 0 且 − a − a 2 = 0 ，解得 a = − 1 。 当 a = − 1 时，增广矩阵的初等行变换为： ​ 1 0 0 0 ​ − 1 1 0 0 ​ 0 − 1 1 0 ​ 0 0 − 1 0 ​ 1 − 1 0 0 ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 0 0 1 0 ​ − 1 − 1 − 1 0 ​ 0 − 1 0 0 ​ ​ 方程组的通解为： x = k ​ 1 1 1 1 ​ ​ + ​ 0 − 1 0 0 ​ ​ , k ∈ R .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设矩阵\nA=λ011λ−1110λ\n，线性方程组\nAx=b\n存在2个不同的解。\n\n求\nλ\n的值；\n\n求二次型对应的二次型矩阵，并将二次型化为标准型，写出正交变换过程。\n",
    referenceAnswer: "【答案】 λ = − 1 二次型矩阵为 ​ 2 0 2 ​ 0 2 2 ​ 2 2 4 ​ ​ ，标准型为 2 y 2 2 ​ + 6 y 3 2 ​ ，正交变换过程见解析。 【解析】 由线性方程组 A x = b 存在 2 个不同的解，可知方程组有无穷多解，故 r ( A ) = r ( A ) < 3 ，且 ∣ A ∣ = 0 。 计算行列式： ∣ A ∣ = ​ λ 0 1 ​ 1 λ − 1 1 ​ 1 0 λ ​ ​ = ( λ − 1 ) 2 ( λ + 1 ) = 0 解得 λ = 1 或 λ = − 1 。 当 λ = 1 时： A = ​ 1 0 1 ​ 1 0 1 ​ 1 0 1 ​ ​ 此时 r ( A ) = 1 ，增广矩阵 A 的秩可能为 2，不满足 r ( A ) = r ( A ) ，舍去。 当 λ = − 1 时，题目中可能存在笔误。结合后续二次型部分，推测此处应与矩阵： A = ​ 1 0 − 1 ​ 0 1 0 ​ 1 1 a ​ ​ 相关。由 r ( A ⊤ A ) = r ( A ) = 2 可得： ​ 1 0 − 1 ​ 0 1 0 ​ 1 1 a ​ ​ = a + 1 = 0 ⇒ a = − 1 二次型： f ​ = x ⊤ A ⊤ A x = ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ 2 0 2 ​ 0 2 2 ​ 2 2 4 ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = 2 x 1 2 ​ + 2 x 2 2 ​ + 4 x 3 2 ​ + 4 x 1 ​ x 2 ​ + 4 x 2 ​ x 3 ​ ​ 对应的二次型矩阵为： B = ​ 2 0 2 ​ 0 2 2 ​ 2 2 4 ​ ​ 计算特征值： ∣ λ E − B ∣ = ​ λ − 2 0 − 2 ​ 0 λ − 2 − 2 ​ − 2 − 2 λ − 4 ​ ​ = λ ( λ − 2 ) ( λ − 6 ) = 0 解得特征值为 λ 1 ​ = 0 ， λ 2 ​ = 2 ， λ 3 ​ = 6 。 对于 λ 1 ​ = 0 ，解 ( λ 1 ​ E − B ) X = 0 得特征向量： η 1 ​ = ​ 1 1 − 1 ​ ​ 对于 λ 2 ​ = 2 ，解 ( λ 2 ​ E − B ) X = 0 得特征向量： η 2 ​ = ​ 1 − 1 0 ​ ​ 对于 λ 3 ​ = 6 ，解 ( λ 3 ​ E − B ) X = 0 得特征向量： η 3 ​ = ​ 1 1 2 ​ ​ 将特征向量单位化： α 1 ​ = 3 ​ 1 ​ ​ 1 1 − 1 ​ ​ , α 2 ​ = 2 ​ 1 ​ ​ 1 − 1 0 ​ ​ , α 3 ​ = 6 ​ 1 ​ ​ 1 1 2 ​ ​ 令正交矩阵 Q = ( α 1 ​ , α 2 ​ , α 3 ​ ) ，则经正交变换 x = Q y ，二次型化为标准型： f = 0 y 1 2 ​ + 2 y 2 2 ​ + 6 y 3 2 ​ = 2 y 2 2 ​ + 6 y 3 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知随机变量\nX\n,\nY\n以及\nXY\n的分布律如下表所示：\n\nXP021131261\n\nYP031131231\n\nXYP012711212614121\n\n求：\nP(X=2Y)COV(X−Y,Y)ρXY",
    referenceAnswer: "【答案】 P ( X = 2 Y ) = 4 1 ​ COV ( X − Y , Y ) = − 3 2 ​ ρ X Y ​ = 0 【解析】 （1）概率 P ( X = 2 Y ) 的计算如下： P ( X = 2 Y ) = P ( X = 0 , Y = 0 ) + P ( X = 2 , Y = 1 ) 根据联合分布： P ( X = 0 , Y = 0 ) = P ( X = 0 ) P ( Y = 0 ) = 2 1 ​ × 3 1 ​ = 6 1 ​ （因为 X 与 Y 独立）。但联合分布需满足 P ( X Y = 0 ) = 12 7 ​ ，即： P ( X = 0 , Y = 0 ) + P ( X = 0 , Y = 1 ) + P ( X = 0 , Y = 2 ) P ( X = 1 , Y = 0 ) + P ( X = 2 , Y = 0 ) = 12 7 ​ ​ 经分析，正确计算为： P ( X = 2 Y ) = P ( X = 0 , Y = 0 ) + P ( X = 2 , Y = 1 ) 其中： P ( X = 2 , Y = 1 ) = P ( X = 2 ) P ( Y = 1 ) = 6 1 ​ × 3 1 ​ = 18 1 ​ 但题目所给解为 4 1 ​ ，可能存在数据不一致的情况。 （2）协方差 co v ( X − Y , Y ) 的计算如下： co v ( X − Y , Y ) = co v ( X , Y ) − co v ( Y , Y ) 首先计算期望： EX = 0 × 2 1 ​ + 1 × 3 1 ​ + 2 × 6 1 ​ = 3 2 ​ E Y = 0 × 3 1 ​ + 1 × 3 1 ​ + 2 × 3 1 ​ = 1 EX Y = 0 × 12 7 ​ + 1 × 12 1 ​ + 2 × 6 1 ​ + 4 × 12 1 ​ = 3 2 ​ 接着计算协方差： co v ( X , Y ) = EX Y − EXE Y = 3 2 ​ − 3 2 ​ × 1 = 0 cov ( Y , Y ) ​ = D Y = E Y 2 − ( E Y ) 2 = ( 0 2 × 3 1 ​ + 1 2 × 3 1 ​ + 2 2 × 3 1 ​ ) − 1 2 = 3 5 ​ − 1 = 3 2 ​ ​ 因此： co v ( X − Y , Y ) = 0 − 3 2 ​ = − 3 2 ​ （3）相关系数 ρ X Y ​ 的计算如下： ρ X Y ​ = D X ​ D Y ​ co v ( X , Y ) ​ = 9 5 ​ ​ × 3 2 ​ ​ 0 ​ = 0",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设随机变量\nX\n和\nY\n相互独立，且均服从参数为\n1\n的指数分布，定义\nV=min(X,Y)\n，\nU=max(X,Y)\n。\n\n求：\n随机变量\nV\n的概率密度；E(U+V)\n。",
    referenceAnswer: "【答案】 随机变量 V 的概率密度为 f V ​ ( v ) = { 2 e − 2 v , 0 , ​ v > 0 otherwise ​ E ( U + V ) = 2 【解析】 (1) 随机变量 X 和 Y 的概率密度函数为： f ( x ) = { e − x , 0 , ​ x > 0 其他 ​ 分布函数为： F ( x ) = { 1 − e − x , 0 , ​ x > 0 其他 ​ 定义 V = min ( X , Y ) ，其分布函数为： F V ​ ( v ) = P { V ≤ v } = 1 − P { X > v , Y > v } = 1 − [ 1 − F ( v ) ] 2 = { 1 − e − 2 v , 0 , ​ v > 0 otherwise ​ 概率密度函数为： f V ​ ( v ) = F V ′ ​ ( v ) = { 2 e − 2 v , 0 , ​ v > 0 其他 ​ (2) 定义 U = max ( X , Y ) ，其分布函数为： F U ​ ( u ) = P { U ≤ u } = P { X ≤ u , Y ≤ u } = [ F ( u ) ] 2 = { ( 1 − e − u ) 2 , 0 , ​ u > 0 其他 ​ 概率密度函数为： f U ​ ( u ) = 2 ( 1 − e − u ) e − u , u > 0 计算期望： E U = ∫ 0 + ∞ ​ u ⋅ 2 ( 1 − e − u ) e − u d u = ∫ 0 + ∞ ​ 2 u ( e − u − e − 2 u ) d u = 2 [ ∫ 0 + ∞ ​ u e − u d u − ∫ 0 + ∞ ​ u e − 2 u d u ] = 2 ( 1 − 4 1 ​ ) = 2 3 ​ E V = ∫ 0 + ∞ ​ v ⋅ 2 e − 2 v d v = 2 1 ​ 因此： E ( U + V ) = E U + E V = 2 3 ​ + 2 1 ​ = 2",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2012_math3 = {
  id: P, year: Y,
  title: '2012 年全国硕士研究生招生考试 数学（三）',
  short: '2012 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2012_math3.length,
  qids: questions2012_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
