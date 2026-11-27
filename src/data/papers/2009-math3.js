const P = 'paper-2009-math3'
const Y = 2009
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2009-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2009 考研数学（三）真题',
  ...extra
})

export const questions2009_math3 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数\nf(x)=sinπxx−x3\n的可去间断点的个数为",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2" }, { key: "C", text: "3" }, { key: "D", text: "无穷多个" }],
    answer: ["C"],
    explain: "正确答案： C 当 x 取任何整数时， f ( x ) 均无意义。因此， f ( x ) 的间断点有无穷多个。 可去间断点为极限存在的点，所以需要求解 x − x 3 = 0 的解。因此，可去间断点为 3 个，即 0 、 ± 1 。"
  }),
  base(2, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当\nx→0\n时，\nf(x)=x−sinax\n与\ng(x)=x2ln(1−bx)\n是等价无穷小，则",
    options: [{ key: "A", text: "a = 1 , b = − 6 1 ​" }, { key: "B", text: "a = 1 , b = 6 1 ​" }, { key: "C", text: "a = − 1 , b = − 6 1 ​" }, { key: "D", text: "a = − 1 , b = 6 1 ​" }],
    answer: ["A"],
    explain: "正确答案： A 设 f ( x ) = x − sin a x 和 g ( x ) = x 2 ln ( 1 − b x ) 为等价无穷小，则有 lim x → 0 ​ g ( x ) f ( x ) ​ = 1 。 利用泰勒展开： sin a x = a x − 6 ( a x ) 3 ​ + o ( x 3 ) 因此： f ( x ) = x − ( a x − 6 a 3 x 3 ​ ) + o ( x 3 ) = ( 1 − a ) x + 6 a 3 x 3 ​ + o ( x 3 ) 对于 ln ( 1 − b x ) 的展开： ln ( 1 − b x ) ∼ − b x − 2 ( b x ) 2 ​ − 3 ( b x ) 3 ​ + o ( x 3 ) 因此： g ( x ) = x 2 ( − b x ) + o ( x 3 ) = − b x 3 + o ( x 3 ) 要使极限成立： x → 0 lim ​ − b x 3 ( 1 − a ) x + 6 a 3 x 3 ​ ​ = 1 需满足分子分母最低阶项次数相同且系数相等，故： 1 − a = 0 ⇒ a = 1 此时分子为： 6 1 ​ x 3 + o ( x 3 ) 分母为： − b x 3 + o ( x 3 ) 因此： − b 6 1 ​ ​ = 1 ⇒ b = − 6 1 ​"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "使不等式\n∫1xtsintdt>lnx\n成立的\nx\n的范围是",
    options: [{ key: "A", text: "( 0 , 1 )" }, { key: "B", text: "( 1 , 2 π ​ )" }, { key: "C", text: "( 2 π ​ , π )" }, { key: "D", text: "( π , + ∞ )" }],
    answer: ["A"],
    explain: "正确答案： A 原问题可转化为求函数 f ( x ) 的取值范围： f ( x ) = ∫ 1 x ​ t sin t ​ d t − ln x = ∫ 1 x ​ t sin t − 1 ​ d t = − ∫ x 1 ​ t 1 − sin t ​ d t > 0 由于 t 1 − s i n t ​ > 0 （因为 t > 0 且 sin t < 1 对所有 t  = 2 π ​ + 2 kπ 成立），当 x ∈ ( 0 , 1 ) 时，积分上限 1 > x ，此时被积函数 t 1 − s i n t ​ > 0 ，因此积分值为正，即 f ( x ) > 0 。 综上，正确答案为 (A) 。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\ny=f(x)\n在区间\n[−1,3]\n上的图形为（图形描述略），则函数\nF(x)=∫0xf(t)dt\n的图形为",
    options: [{ key: "A", text: "（见题图 A）" }, { key: "B", text: "（见题图 B）" }, { key: "C", text: "（见题图 C）" }, { key: "D", text: "（见题图 D）" }],
    answer: ["D"],
    explain: "正确答案： D 由定积分的几何意义， F ( x ) 表示 f ( t ) 从 0 到 x 与 t 轴围成的面积代数和。分析各区间特征： ① 当 x ∈ [ 0 , 1 ] 时， f ( x ) ≤ 0 ，故 F ( x ) 单调递减且 F ( x ) ≤ 0 。 ② 当 x ∈ [ 1 , 2 ] 时， f ( x ) ≥ 0 ，故 F ( x ) 单调递增。 ③ 当 x ∈ [ 2 , 3 ] 时， f ( x ) = 0 ，故 F ( x ) 为常函数。 ④ 当 x ∈ [ − 1 , 0 ] 时， f ( x ) 为线性函数且 f ( x ) ≤ 0 ，故 F ( x ) 为线性递增函数（因积分是累加负面积，斜率为负但 x 从 -1 到 0 时积分值增大）。 ⑤ F ( x ) 连续。 结合选项，(D) 符合上述特征。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA,B\n均为 2 阶矩阵，\nA∗,B∗\n分别为\nA,B\n的伴随矩阵，若\n∣A∣=2,∣B∣=3\n，则分块矩阵\n\n(0BA0)\n\n的伴随矩阵为",
    options: [{ key: "A", text: "( 0 2 A ∗ ​ 3 B ∗ 0 ​ )" }, { key: "B", text: "( 0 3 A ∗ ​ 2 B ∗ 0 ​ )" }, { key: "C", text: "( 0 2 B ∗ ​ 3 A ∗ 0 ​ )" }, { key: "D", text: "( 0 3 B ∗ ​ 2 A ∗ 0 ​ )" }],
    answer: ["B"],
    explain: "正确答案： B 对于分块矩阵 C = ( 0 B ​ A 0 ​ ) ，其行列式为： ∣ C ∣ = ( − 1 ) 2 × 2 ∣ A ∣∣ B ∣ = 2 × 3 = 6 伴随矩阵 C ∗ 满足 C ∗ = ∣ C ∣ C − 1 ，而根据分块矩阵逆的性质： C − 1 = ( 0 A − 1 ​ B − 1 0 ​ ) 又因为： A − 1 = ∣ A ∣ 1 ​ A ∗ = 2 1 ​ A ∗ , B − 1 = ∣ B ∣ 1 ​ B ∗ = 3 1 ​ B ∗ 所以： C ∗ = 6 ( 0 2 1 ​ A ∗ ​ 3 1 ​ B ∗ 0 ​ ) = ( 0 3 A ∗ ​ 2 B ∗ 0 ​ ) 因此，正确答案为 (B)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nP\n为 3 阶矩阵，\nPTAP=100010002\n。若\nP=(α1,α2,α3)\n，\nQ=(α1+α2,α2,α3)\n，则\nQTAQ\n为",
    options: [{ key: "A", text: "​ 2 1 0 ​ 1 1 0 ​ 0 0 2 ​ ​" }, { key: "B", text: "​ 1 1 0 ​ 1 2 0 ​ 0 0 2 ​ ​" }, { key: "C", text: "​ 2 0 0 ​ 0 1 0 ​ 0 0 2 ​ ​" }, { key: "D", text: "​ 1 0 0 ​ 0 2 0 ​ 0 0 2 ​ ​" }],
    answer: ["A"],
    explain: "正确答案： A 由 Q = P ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ，记 E = ​ 1 1 0 ​ 0 1 0 ​ 0 0 1 ​ ​ ，则： Q T A Q = ( PE ) T A ( PE ) = E T ( P T A P ) E 代入 P T A P = diag ( 1 , 1 , 2 ) ，计算 E T diag ( 1 , 1 , 2 ) E ： E T = ​ 1 0 0 ​ 1 1 0 ​ 0 0 1 ​ ​ , E T diag ( 1 , 1 , 2 ) = ​ 1 0 0 ​ 1 1 0 ​ 0 0 2 ​ ​ 进一步计算： ​ 1 0 0 ​ 1 1 0 ​ 0 0 2 ​ ​ E = ​ 1 × 1 + 1 × 1 0 × 1 + 1 × 1 0 ​ 1 × 0 + 1 × 1 0 × 0 + 1 × 1 0 + 2 × 0 ​ 0 0 0 × 0 + 2 × 1 ​ 0 ​ ​ = ​ 2 1 0 ​ 1 1 0 ​ 0 0 2 ​ ​ 故选 (A)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设事件\nA\n与事件\nB\n互不相容，则",
    options: [{ key: "A", text: "P ( A B ) = 0" }, { key: "B", text: "P ( A B ) = P ( A ) P ( B )" }, { key: "C", text: "P ( A ) = 1 − P ( B )" }, { key: "D", text: "P ( A ∪ B ) = 1" }],
    answer: ["D"],
    explain: "正确答案： D 因为 A , B 互不相容，所以 P ( A B ) = 0 。 (A) P ( A B ) = P ( A ∪ B ) = 1 − P ( A ∪ B ) 。 但 P ( A ∪ B ) 不一定为1，故(A)错误。 (B) 当 P ( A ) , P ( B ) 不为0时，独立事件满足 P ( A B ) = P ( A ) P ( B ) 。 但互不相容事件未必独立，故(B)错误。 (C) 仅当 A , B 为对立事件时， P ( A ) = 1 − P ( B ) 。 但互不相容未必对立，故(C)错误。 (D) P ( A ∪ B ) = P ( A B ) = 1 − P ( A B ) = 1 − 0 = 1 ， 故(D)正确。"
  }),
  base(8, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且\nX\n服从标准正态分布\nN(0,1)\n，\nY\n的概率分布为\nP{Y=0}=P{Y=1}=21\n。记\nFZ(z)\n为随机变量\nZ=XY\n的分布函数，则函数\nFZ(z)\n的间断点个数为",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["B"],
    explain: "正确答案： B 由全概率公式， F Z ​ ( z ) = P ( X Y ≤ z ) = P ( Y = 0 ) P ( X ⋅ 0 ≤ z ) + P ( Y = 1 ) P ( X ≤ z ) = 2 1 ​ [ P ( 0 ≤ z ) + Φ ( z )] 其中 Φ ( z ) 为标准正态分布函数。 当 z < 0 时， P ( 0 ≤ z ) = 0 ，故 F Z ​ ( z ) = 2 1 ​ Φ ( z ) 当 z ≥ 0 时， P ( 0 ≤ z ) = 1 ，故 F Z ​ ( z ) = 2 1 ​ ( 1 + Φ ( z )) 在 z = 0 处，左极限为 z → 0 − lim ​ F Z ​ ( z ) = 2 1 ​ Φ ( 0 ) = 2 1 ​ × 2 1 ​ = 4 1 ​ 右极限为 z → 0 + lim ​ F Z ​ ( z ) = 2 1 ​ ( 1 + Φ ( 0 )) = 2 1 ​ × 2 3 ​ = 4 3 ​ 左右极限存在但不相等，故 z = 0 为唯一间断点，选(B)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\nx→0lim31+x2−1e−ecosx=",
    answerText: "】 2 3 ​ e 【",
    referenceAnswer: "【答案】 2 3 ​ e 【解析】 计算过程如下： x → 0 lim ​ 3 1 + x 2 ​ − 1 e − e c o s x ​ ​ = x → 0 lim ​ 3 1 + x 2 ​ − 1 e ( 1 − e c o s x − 1 ) ​ = x → 0 lim ​ 3 1 ​ x 2 e ( 1 − cos x ) ​ = x → 0 lim ​ 3 1 ​ x 2 e ⋅ 2 1 ​ x 2 ​ = 2 3 ​ e ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nz=(x+ey)x\n，则\n∂x∂z(1,0)=",
    answerText: "】 2 ln 2 + 1 【",
    referenceAnswer: "【答案】 2 ln 2 + 1 【解析】 由 z = ( x + e y ) x ，故 z ( x , 0 ) = ( x + 1 ) x 。 d x d z ​ = [( x + 1 ) x ] ′ = [ e x l n ( 1 + x ) ] ′ = e x l n ( 1 + x ) [ ln ( 1 + x ) + 1 + x x ​ ] 代入 x = 1 得， ∂ x ∂ z ​ ​ ( 1 , 0 ) ​ = e l n 2 ( ln 2 + 2 1 ​ ) = 2 ln 2 + 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）幂级数\n∑n=1∞n2en−(−1)nxn\n的收敛半径为",
    answerText: "】 e 1 ​ 【",
    referenceAnswer: "【答案】 e 1 ​ 【解析】 数列 a n ​ = n 2 e n − ( − 1 ) n ​ > 0 对所有 n 均为正。 考虑相邻项的比值： ​ a n ​ a n + 1 ​ ​ ​ = ( n + 1 ) 2 e n + 1 − ( − 1 ) n + 1 ​ ⋅ e n − ( − 1 ) n n 2 ​ 简化表达式： ( n + 1 ) 2 n 2 ​ ⋅ e n [ 1 − ( − e 1 ​ ) n ] e n + 1 [ 1 − ( − e 1 ​ ) n + 1 ] ​ → e ( n → ∞ ) 因此，该幂级数的收敛半径为 e 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设某产品的需求函数为\nQ=Q(P)\n，其对应价格\nP\n的弹性\nξP=0.2\n，则当需求量为\n10000\n件时，价格增加\n1\n元会使产品收益增加",
    answerText: "】 8000 【",
    referenceAnswer: "【答案】 8000 【解析】 所求即为 ( QP ) ′ = Q ′ P + Q ，因为 ξ P ​ = Q P ​ Q ′ = − 0.2 ，所以 Q ′ P = − 0.2 Q 。 因此： ( QP ) ′ = − 0.2 Q + Q = 0.8 Q 将 Q = 10000 代入得： ( QP ) ′ = 8000",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nα=(1,1,1)⊤\n，\nβ=(1,0,k)⊤\n，若\nαβ⊤\n的特征值为\n3,0,0\n，则\nk=\n______",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 α β ⊤ 的特征值为 3, 0, 0，而 α ⊤ β 为矩阵 α β ⊤ 的对角元素之和，即： 1 + k = 3 + 0 + 0 因此： k = 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nX1,X2,⋯,Xn\n为来自二项分布总体\nB(n,p)\n的简单随机样本，\nX\n和\nS2\n分别为样本均值和样本方差，记统计量\nT=X−S2\n，则\nE(T)=\n__________",
    answerText: "】 n p 2 【",
    referenceAnswer: "【答案】 n p 2 【解析】 由 ET = E ( X − S 2 ) = E X − E S 2 = n p − n p ( 1 − p ) = n p 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分9分）\n\n求二元函数\nf(x,y)=x2(2+y2)+ylny\n的极值。",
    referenceAnswer: "【答案】 函数在点 ( 0 , e 1 ​ ) 处取得极小值 − e 1 ​ 。 【解析】 偏导数为： f x ′ ​ ( x , y ) = 2 x ( 2 + y 2 ) = 0 f y ′ ​ ( x , y ) = 2 x 2 y + ln y + 1 = 0 由此得到临界点： x = 0 y = e 1 ​ 二阶偏导数为： f xx ′′ ​ = 2 ( 2 + y 2 ) , f yy ′′ ​ = 2 x 2 + y 1 ​ , f x y ′′ ​ = 4 x y 在临界点 ( 0 , e 1 ​ ) 处取值： f xx ′′ ​ ​ ( 0 , e 1 ​ ) ​ = 2 ( 2 + e 2 1 ​ ) , f x y ′′ ​ ​ ( 0 , e 1 ​ ) ​ = 0 , f yy ′′ ​ ​ ( 0 , e 1 ​ ) ​ = e 由于： f xx ′′ ​ > 0 且 ( f x y ′′ ​ ) 2 − f xx ′′ ​ f yy ′′ ​ < 0 函数在 f ( 0 , e 1 ​ ) = − e 1 ​ 处取得局部极小值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(16, 'k-math-008', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n计算不定积分\n∫ln(1+x1+x)dx(x>0)",
    referenceAnswer: "【答案】 x ln ( 1 + x 1 + x ​ ​ ) + 2 1 ​ ln ( 1 + x ​ + x ​ ) − 2 1 ​ ⋅ 1 + x ​ + x ​ x ​ ​ + C 【解析】 令 x 1 + x ​ ​ = t ，可得： x = t 2 − 1 1 ​ , d x = ( t 2 − 1 ) 2 − 2 t d t ​ 原积分变换为： ∫ ln ( 1 + x 1 + x ​ ​ ) d x = ln ( 1 + t ) d ( t 2 − 1 1 ​ ) 分部积分后得到： t 2 − 1 ln ( 1 + t ) ​ − ∫ t 2 − 1 1 ​ ⋅ t + 1 1 ​ d t 进一步分解积分项： ∫ t 2 − 1 1 ​ ⋅ t + 1 1 ​ d t = 4 1 ​ ∫ ( t − 1 1 ​ − t + 1 1 ​ − ( t + 1 ) 2 2 ​ ) d t 计算得： 4 1 ​ ln ( t − 1 ) − 4 1 ​ ln ( t + 1 ) + t + 1 2 ​ + C 因此，原积分为： t 2 − 1 ln ( 1 + t ) ​ + 4 1 ​ ln ( t − 1 t + 1 ​ ) − 2 ( t + 1 ) 1 ​ + C 代回变量 x 得最终结果： x ln ( 1 + x 1 + x ​ ​ ) + 2 1 ​ ln ( 1 + x ​ + x ​ ) − 2 1 ​ ⋅ 1 + x ​ + x ​ x ​ ​ + C",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n计算二重积分\n\n∬D(x−y)dxdy\n\n其中积分区域\nD\n定义为\n\nD={(x,y)∣(x−1)2+(y−1)2≤2,y≥x}",
    referenceAnswer: "【答案】 − 3 8 ​ 【解析】 x = r cos θ , y = r sin θ , 则 (D) 的极坐标表示是 0 ≤ r ≤ 2 ( cos θ + sin θ ) , 4 π ​ ≤ θ ≤ 4 3 π ​ . 于是 I ​ = ∬ D ​ ( x − y ) d σ = ∫ π /4 3 π /4 ​ d θ ∫ 0 2 ( c o s θ + s i n θ ) ​ r ( cos θ − sin θ ) ⋅ r d r = ∫ π /4 3 π /4 ​ ( cos θ − sin θ ) ⋅ 3 1 ​ r 3 ​ 0 2 ( c o s θ + s i n θ ) ​ d θ = 3 8 ​ ∫ π /4 3 π /4 ​ ( cos θ − sin θ ) ( cos θ + sin θ ) 3 d θ = 3 8 ​ ∫ π /4 3 π /4 ​ ( cos θ + sin θ ) 3 d ( cos θ + sin θ ) = 3 8 ​ ⋅ 4 1 ​ ( cos θ + sin θ ) 4 ​ π /4 3 π /4 ​ = 3 8 ​ ⋅ 4 1 ​ ⋅ ( − 4 ) = − 3 8 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）\n\n(I)\n证明拉格朗日中值定理：\n若函数\nf(x)\n在\n[a,b]\n上连续，在\n(a,b)\n上可导，则\n∃ξ∈(a,b)\n，使得\n\nf(b)−f(a)=f′(ξ)(b−a)\n\n(II)\n证明：\n若函数\nf(x)\n在\nx=0\n处连续，在\n(0,σ)\n（\nσ>0\n）内可导，且\n\nx→0+limf′(x)=A\n\n则\nf+′(0)\n存在，且\n\nf+′(0)=A",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 作辅助函数 φ ( x ) = f ( x ) − f ( a ) − b − a f ( b ) − f ( a ) ​ ( x − a ) 易验证 φ ( x ) 满足： φ ( a ) = φ ( b ) φ ( x ) 在闭区间 [ a , b ] 上连续 在开区间 ( a , b ) 内可导，且 ϕ ′ ( x ) = f ′ ( x ) − b − a f ( b ) − f ( a ) ​ 根据罗尔定理，可得在 ( a , b ) 内至少有一点 ξ ，使 φ ′ ( ξ ) = 0 ，即 f ′ ( ξ ) − b − a f ( b ) − f ( a ) ​ = 0 , ∴ f ( b ) − f ( a ) = f ′ ( ξ ) ( b − a ) (II) 任取 x 0 ​ ∈ ( 0 , δ ) ，则函数 f ( x ) 满足： 在闭区间 [ 0 , x 0 ​ ] 上连续 在开区间 ( 0 , x 0 ​ ) 内可导 从而由拉格朗日中值定理可得：存在 ξ x 0 ​ ​ ∈ ( 0 , x 0 ​ ) ⊂ ( 0 , δ ) ，使得 f ′ ( ξ x 0 ​ ​ ) = x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ ⋯⋯ ( ∗ ) 又由于 lim x → 0 + ​ f ′ ( x ) = A ，对上式（ ∗ 式）两边取 x 0 ​ → 0 + 时的极限可得： f + ′ ​ ( 0 ) = x 0 ​ → 0 + lim ​ x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ = x 0 ​ → 0 + lim ​ f ′ ( ξ x 0 ​ ​ ) = ξ x 0 ​ ​ → 0 + lim ​ f ′ ( ξ x 0 ​ ​ ) = A 故 f + ′ ​ ( 0 ) 存在，且 f + ′ ​ ( 0 ) = A 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(19, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（满分 10 分）\n\n设曲线\ny=f(x)\n，其中\nf(x)\n是可导函数，且\nf(x)>0\n。已知曲线\ny=f(x)\n与直线\ny=0\n、\nx=1\n及\nx=t\n（\nt>1\n）所围成的曲边梯形绕\nx\n轴旋转一周所得的立体体积值是该曲边梯形面积值的\nπt\n倍。求该曲线的方程。",
    referenceAnswer: "【答案】 y = 3 x − 2 ​ 1 ​ 【解析】 旋转体的体积为 V = ∫ 1 t ​ π f 2 ( x ) d x = π ∫ 1 t ​ f 2 ( x ) d x 曲边梯形的面积为 S = ∫ 1 t ​ f ( x ) d x 由题可知 π ∫ 1 t ​ f 2 ( x ) d x = π t ∫ 1 t ​ f ( x ) d x 两边对 t 求导可得 f 2 ( t ) = ∫ 1 t ​ f ( x ) d x + t f ( t ) ⇒ f 2 ( t ) − t f ( t ) = ∫ 1 t ​ f ( x ) d x 继续求导可得 2 f ( t ) f ′ ( t ) − f ( t ) − t f ′ ( t ) = f ( t ) 化简后（过程略），最终曲线方程为 y = 3 x − 2 ​ 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n(I)\n\n求满足\n\nAξ2=ξ1\n，\nA2ξ3=ξ1\n\n的所有向量\nξ2\n、\nξ3\n，其中\n\nA=1−10−11−4−11−2,ξ1=−11−2\n\n(II)\n\n对 (I) 中的任意向量\nξ2\n、\nξ3\n，证明\nξ1\n、\nξ2\n、\nξ3\n线性无关。",
    referenceAnswer: "【答案】 (I) ξ 2 ​ = k 1 ​ ​ 1 − 1 2 ​ ​ + ​ 0 0 1 ​ ​ ，其中 k 1 ​ 为任意常数。 ξ 3 ​ = k 1 ​ ​ 1 − 1 0 ​ ​ + k 2 ​ ​ 0 0 − 1 ​ ​ + ​ − 2 1 ​ 0 0 ​ ​ ，其中 k 1 ​ , k 2 ​ 为任意常数。 (II) 见解析。 【解析】 (I) 解方程 A ξ 2 ​ = ξ 1 ​ 。 已知 r ( A ) = 2 ，故有一个自由变量。令 x 3 ​ = 2 ，由 A x = 0 解得 x 2 ​ = − 1 ， x 1 ​ = 1 。 求特解时，令 x 1 ​ = x 2 ​ = 0 ，得 x 3 ​ = 1 。因此， ξ 2 ​ = k 1 ​ ​ 1 − 1 2 ​ ​ + ​ 0 0 1 ​ ​ 其中 k 1 ​ 为任意常数。 解方程 A 2 ξ 3 ​ = ξ 1 ​ ，首先计算 A 2 ： A 2 = ​ 2 − 2 4 ​ 2 − 2 4 ​ 0 0 0 ​ ​ 增广矩阵为： ( A 2 , ξ 1 ​ ) = ​ 2 − 2 4 ​ 2 − 2 4 ​ 0 0 0 ​ − 1 1 − 2 ​ ​ → ​ 1 0 0 ​ 1 0 0 ​ 0 0 0 ​ − 2 1 ​ 0 0 ​ ​ 有两个自由变量。令 x 2 ​ = − 1 ， x 3 ​ = 0 ，由 A 2 x = 0 得 x 1 ​ = 1 ；令 x 2 ​ = 0 ， x 3 ​ = − 1 ，得 x 1 ​ = 0 。 求得特解 η 2 ​ = ​ − 2 1 ​ 0 0 ​ ​ ，因此， ξ 3 ​ = k 1 ​ ​ 1 − 1 0 ​ ​ + k 2 ​ ​ 0 0 − 1 ​ ​ + ​ − 2 1 ​ 0 0 ​ ​ 其中 k 1 ​ , k 2 ​ 为任意常数。 (II) 证明线性无关性： 计算行列式： ​ ​ − 1 1 − 2 ​ k 1 ​ − k 1 ​ 2 k 1 ​ + 1 ​ k 2 ​ + 2 1 ​ − k 2 ​ 0 ​ ​ = 2 k 1 ​ k 2 ​ + ( 2 k 1 ​ + 1 ) ( k 2 ​ + 2 1 ​ ) − 2 k 1 ​ ( k 2 ​ + 2 1 ​ ) − k 2 ​ ( 2 k 1 ​ + 1 ) = 2 1 ​  = 0 ​ 故 ξ 1 ​ ， ξ 2 ​ ， ξ 3 ​ 线性无关。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型\n\nf(x1,x2,x3)=ax12+ax22+(a−1)x32+2x1x3−2x2x3\n\n(I) 求二次型\nf\n的矩阵的所有特征值。\n\n(II) 若二次型\nf\n的规范形为\ny12+y22\n，求\na\n的值。",
    referenceAnswer: "【答案】 (I) λ 1 ​ = a , λ 2 ​ = a − 2 , λ 3 ​ = a + 1 (II) a = 2 【解析】 (I) 二次型矩阵为 A = ​ a 0 1 ​ 0 a − 1 ​ 1 − 1 a − 1 ​ ​ 其特征多项式为 ∣ λ E − A ∣ = ( λ − a ) ( λ − a + 2 ) ( λ − a − 1 ) 因此，特征值为 λ 1 ​ = a , λ 2 ​ = a − 2 , λ 3 ​ = a + 1 (II) 规范形为 y 1 2 ​ + y 2 2 ​ ，说明有两个正特征值，一个零特征值。 若 λ 1 ​ = a = 0 ，则 λ 2 ​ = − 2 < 0 ， λ 3 ​ = 1 ，不符合条件。 若 λ 2 ​ = 0 ，即 a = 2 ，则 λ 1 ​ = 2 > 0 ， λ 3 ​ = 3 > 0 ，符合条件。 若 λ 3 ​ = 0 ，即 a = − 1 ，则 λ 1 ​ = − 1 < 0 ， λ 2 ​ = − 3 < 0 ，不符合条件。 综上， a = 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n的概率密度为\n\nf(x,y)={e−x00yx,其他.\n\n(I) 求条件概率密度\nfY∣X(y∣x)\n。\n\n(II) 求条件概率\nP[X≤1∣Y≤1]\n。",
    referenceAnswer: "【答案】 (I) 条件概率密度 f Y ∣ X ​ ( y ∣ x ) = { x 1 ​ 0 ​ 0 < y < x 其他 ​ (II) 条件概率 P [ X ≤ 1∣ Y ≤ 1 ] = e − 1 e − 2 ​ 【解析】 (I) 由 f ( x , y ) 得边缘密度 f X ​ ( x ) = ∫ 0 x ​ e − x d y = x e − x ( x > 0 ) 故条件概率密度 f Y ∣ X ​ ( y ∣ x ) = f X ​ ( x ) f ( x , y ) ​ = { x 1 ​ 0 ​ 0 < y < x 其他 ​ (II) 计算条件概率 P [ X ≤ 1∣ Y ≤ 1 ] = P [ Y ≤ 1 ] P [ X ≤ 1 , Y ≤ 1 ] ​ 先求联合概率 P [ X ≤ 1 , Y ≤ 1 ] = ∫ 0 1 ​ d x ∫ 0 x ​ e − x d y = ∫ 0 1 ​ x e − x d x = 1 − 2 e − 1 边缘密度 f Y ​ ( y ) = ∫ y + ∞ ​ e − x d x = e − y ( y > 0 ) 计算 P [ Y ≤ 1 ] P [ Y ≤ 1 ] = ∫ 0 1 ​ e − y d y = 1 − e − 1 最终结果 P [ X ≤ 1∣ Y ≤ 1 ] = 1 − e − 1 1 − 2 e − 1 ​ = e − 1 e − 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n袋中有一个红球，两个黑球，三个白球，现在放回地从袋中取两次，每次取一个。以\nX\n、\nY\n、\nZ\n分别表示两次取球所取得的红、黑与白球的个数。\n\n(I) 求\nP[X=1∣Z=0]\n；\n\n(II) 求二维随机变量\n(X,Y)\n的概率分布。",
    referenceAnswer: "【答案】 (I) 9 4 ​ (II) 二维随机变量 ( X , Y ) 的概率分布为： X \\ Y 0 1 2 ​ 0 4 1 ​ 6 1 ​ 36 1 ​ ​ 1 3 1 ​ 9 1 ​ 0 ​ 2 9 1 ​ 0 0 ​ ​ 【解析】 (I) 在没有取白球的情况下取了一次红球，利用压缩样本空间则相当于只有 1 个红球，2 个黑球放回摸两次，其中摸了一个红球： P ( X = 1 ∣ Z = 0 ) = C 3 1 ​ C 3 1 ​ C 2 1 ​ × 2 ​ = 9 4 ​ (II) X 和 Y 的取值范围为 0, 1, 2，因此联合概率分布为： P ( X = 0 , Y = 0 ) = C 6 1 ​ C 6 1 ​ C 3 1 ​ C 3 1 ​ ​ = 4 1 ​ P ( X = 1 , Y = 0 ) = C 6 1 ​ C 6 1 ​ C 2 1 ​ C 3 1 ​ ​ = 6 1 ​ P ( X = 2 , Y = 0 ) = C 6 1 ​ C 6 1 ​ 1 ​ = 36 1 ​ P ( X = 0 , Y = 1 ) = C 6 1 ​ C 6 1 ​ C 2 1 ​ C 2 1 ​ C 3 1 ​ ​ = 3 1 ​ P ( X = 1 , Y = 1 ) = C 6 1 ​ C 6 1 ​ C 2 1 ​ C 2 1 ​ ​ = 9 1 ​ P ( X = 2 , Y = 1 ) = 0 P ( X = 0 , Y = 2 ) = C 6 1 ​ C 6 1 ​ C 2 1 ​ C 2 1 ​ ​ = 9 1 ​ P ( X = 1 , Y = 2 ) = 0 , P ( X = 2 , Y = 2 ) = 0 联合概率分布表： X \\ Y 0 1 2 ​ 0 4 1 ​ 6 1 ​ 36 1 ​ ​ 1 3 1 ​ 9 1 ​ 0 ​ 2 9 1 ​ 0 0 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2009_math3 = {
  id: P, year: Y,
  title: '2009 年全国硕士研究生招生考试 数学（三）',
  short: '2009 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2009_math3.length,
  qids: questions2009_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
