const P = 'paper-2018-math3'
const Y = 2018
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2018-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2018 考研数学（三）真题',
  ...extra
})

export const questions2018_math3 = [
  base(1, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列函数中，在\nx=0\n处不可导的是（ ）。",
    options: [{ key: "A", text: "f ( x ) = ∣ x ∣ sin ( ∣ x ∣ )" }, { key: "B", text: "f ( x ) = ∣ x ∣ sin ( ∣ x ∣ ​ )" }, { key: "C", text: "f ( x ) = cos ( ∣ x ∣ )" }, { key: "D", text: "f ( x ) = cos ( ∣ x ∣ ​ )" }],
    answer: ["D"],
    explain: "正确答案： D A 可导: f ′ ( 0 ) = x → 0 − lim ​ x ∣ x ∣ sin ( ∣ x ∣ ) ​ = x → 0 − lim ​ x x ⋅ sin x ​ = 0 f + ′ ​ ( 0 ) = x → 0 + lim ​ x ∣ x ∣ sin ( ∣ x ∣ ) ​ = x → 0 + lim ​ x x ⋅ sin x ​ = 0 B 可导: f ′ ( 0 ) = x → 0 − lim ​ x ∣ x ∣ sin ∣ x ∣ ​ ​ = x → 0 − lim ​ x − x ⋅ sin − x ​ ​ = 0 f + ′ ​ ( 0 ) = x → 0 + lim ​ x ∣ x ∣ sin ∣ x ∣ ​ ​ = x → 0 + lim ​ x x ⋅ sin x ​ ​ = 0 C 可导: f ′ ( 0 ) = x → 0 − lim ​ x cos ∣ x ∣ − 1 ​ = x → 0 − lim ​ x − 2 1 ​ x 2 ​ = 0 f + ′ ​ ( 0 ) = x → 0 + lim ​ x cos ∣ x ∣ − 1 ​ = x → 0 + lim ​ x − 2 1 ​ x 2 ​ = 0 D 不可导: f ′ ( 0 ) = x → 0 − lim ​ x cos ∣ x ∣ ​ − 1 ​ = x → 0 − lim ​ x − 2 1 ​ ( − x ) ​ = 2 1 ​ f + ′ ​ ( 0 ) = x → 0 + lim ​ x cos ∣ x ∣ ​ − 1 ​ = x → 0 + lim ​ x − 2 1 ​ x ​ = − 2 1 ​ f + ′ ​ ( 0 )  = f ′ ( 0 )"
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知函数\nf(x)\n在\n[0,1]\n上二阶可导，且\n∫01f(x)dx=0\n，则",
    options: [{ key: "A", text: "当 f ′ ( x ) < 0 时， f ( 2 1 ​ ) < 0" }, { key: "B", text: "当 f ′′ ( x ) < 0 时， f ( 2 1 ​ ) < 0" }, { key: "C", text: "当 f ′ ( x ) > 0 时， f ( 2 1 ​ ) < 0" }, { key: "D", text: "当 f ′′ ( x ) > 0 时， f ( 2 1 ​ ) < 0" }],
    answer: ["D"],
    explain: "正确答案： D A错误 f ( x ) = − x + 2 1 ​ ∫ 0 1 ​ f ( x ) d x = ∫ 0 1 ​ ( − x + 2 1 ​ ) d x = 0 f ′ ( x ) = − 1 < 0 f ( 2 1 ​ ) = 0 B错误 f ( x ) = − x 2 + 3 1 ​ ∫ 0 1 ​ f ( x ) d x = ∫ 0 1 ​ ( − x 2 + 3 1 ​ ) d x = 0 f ′′ ( x ) = − 2 < 0 f ( 2 1 ​ ) = − 4 1 ​ + 3 1 ​ = 12 1 ​ > 0 C错误 f ( x ) = x − 2 1 ​ ∫ 0 1 ​ f ( x ) d x = ∫ 0 1 ​ ( x − 2 1 ​ ) d x = 0 f ′ ( x ) = 1 > 0 f ( 2 1 ​ ) = 0 D正确 方法1：由 f ′′ ( x ) > 0 可知，由凸函数性质得出 f ( 2 1 ​ ) < 0 。 方法2： f ( x ) = f ( 2 1 ​ ) + f ′ ( 2 1 ​ ) ( x − 2 1 ​ ) + f ′′ ( ξ ) ( x − 2 1 ​ ) 2 其中 ξ 在 x 与 2 1 ​ 之间。 ∫ 0 1 ​ f ( x ) d x = ∫ 0 1 ​ [ f ( 2 1 ​ ) + f ′ ( 2 1 ​ ) ( x − 2 1 ​ ) + f ′′ ( ξ ) ( x − 2 1 ​ ) 2 ] d x = f ( 2 1 ​ ) + f ′′ ( ξ ) ∫ 0 1 ​ ( x − 2 1 ​ ) 2 d x = 0 由于 f ′′ ( x ) > 0 ，故 f ( 2 1 ​ ) < 0 。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\n\nM=∫−2π2π1+x2(1+x)2dx\n\nN=∫−2π2πex1+xdx\n\nK=∫−2π2π(1+cosx)dx\n\n则",
    options: [{ key: "A", text: "M > N > K" }, { key: "B", text: "M > K > N" }, { key: "C", text: "K > M > N" }, { key: "D", text: "K > N > M" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 M = ∫ − 2 π ​ 2 π ​ ​ 1 + x 2 ( 1 + x ) 2 ​ d x = ∫ − 2 π ​ 2 π ​ ​ 1 + x 2 1 + x 2 + 2 x ​ d x = π 令 f ( x ) = e x 1 + x ​ ，而 f ′ ( x ) = − e 2 x x e x ​ = − e x x ​ 因此 f ( x ) 在 x = 0 处取得最大值，即在区间 [ − 2 π ​ , 2 π ​ ] 上有 f ( x ) ≤ f ( 0 ) = 1 则 N = ∫ − 2 π ​ 2 π ​ ​ f ( x ) d x < ∫ − 2 π ​ 2 π ​ ​ 1 d x = π 令 g ( x ) = 1 + cos x ​ ，则在区间 [ − 2 π ​ , 2 π ​ ] 上有 g ( x ) ≥ 1 则 K = ∫ − 2 π ​ 2 π ​ ​ g ( x ) d x > ∫ − 2 π ​ 2 π ​ ​ 1 d x = π 因此， K > M > N"
  }),
  base(4, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设某产品的成本函数\nC(Q)\n可导，其中\nQ\n为产量。若产量为\nQ0\n时平均成本最小，则：\n\ndQd(QC(Q))Q=Q0=0",
    options: [{ key: "A", text: "C ( Q 0 ​ ) = 0" }, { key: "B", text: "C ′ ( Q 0 ​ ) = C ( Q 0 ​ )" }, { key: "C", text: "C ′ ( Q 0 ​ ) = Q 0 ​ C ( Q 0 ​ )" }, { key: "D", text: "Q 0 ​ C ′ ( Q 0 ​ ) = C ( Q 0 ​ )" }],
    answer: ["D"],
    explain: "正确答案： D 平均成本 C ˉ = Q C ( Q ) ​ 。当产量为 Q 0 ​ 时平均成本最小，则有 ( C ) ′ ​ Q = Q 0 ​ ​ = Q 2 C ′ ( Q ) Q − C ( Q ) ​ ​ Q = Q 0 ​ ​ = Q 0 2 ​ C ′ ( Q 0 ​ ) Q 0 ​ − C ( Q 0 ​ ) ​ = 0 由此可得 Q 0 ​ C ′ ( Q 0 ​ ) = C ( Q 0 ​ )"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设矩阵\nQ=100110011\n，则与\nQ\n相似的矩阵是()",
    options: [{ key: "A", text: "​ 1 0 0 ​ 1 1 0 ​ − 1 1 1 ​ ​" }, { key: "B", text: "​ 1 0 0 ​ 0 1 0 ​ − 1 1 1 ​ ​" }, { key: "C", text: "​ 1 0 0 ​ 1 1 0 ​ − 1 0 1 ​ ​" }, { key: "D", text: "​ 1 0 0 ​ 0 1 0 ​ − 1 0 1 ​ ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】令 P = ​ 1 0 0 ​ 1 1 0 ​ 0 1 1 ​ ​ ，显然本题5个矩阵的特征值都为 λ 1 ​ = λ 2 ​ = λ 3 ​ = 1 ，现计算对应于特征值1的线性无关的特征向量的个数。 r ( E − P ) = r ​ 0 0 0 ​ − 1 0 0 ​ 0 − 1 0 ​ ​ = 2 因此对应于特征值1的线性无关的特征向量为1个。 令 A = ​ 1 0 0 ​ 1 1 0 ​ − 1 1 1 ​ ​ ，且 r ( E − A ) = r ​ 0 0 0 ​ − 1 0 0 ​ 1 − 1 0 ​ ​ = 2 ，因此线性无关的特征向量也为1个， 因此，矩阵 P 与矩阵 A 相似。同理可得矩阵 P 与其他选项中的矩阵不相似。"
  }),
  base(6, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n，\nB\n为\nn\n阶矩阵，记\nr(X)\n为矩阵\nX\n的秩，\n(X,Y)\n表示分块矩阵，则",
    options: [{ key: "A", text: "r ( A ​ A B ​ ) = r" }, { key: "B", text: "r ( A ​ B A ​ ) = r" }, { key: "C", text: "r ( A ​ B ​ ) = max { r , r }" }, { key: "D", text: "r ( A B ) = r ( A T B T )" }],
    answer: ["A"],
    explain: "正确答案： A r ( E , B ) = n ⇒ r ( A , A B ) = r [ A ( E , B )] = r ( A ) ，故选 (A)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf(x)\n为某分布的概率密度函数，满足\nf(1+x)=f(1−x)\n，且\n∫02f(x)dx=0.6\n，则\nP{X0}=",
    options: [{ key: "A", text: "0.2" }, { key: "B", text: "0.3" }, { key: "C", text: "0.4" }, { key: "D", text: "0.6" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】由题意可得， ∫ − ∞ 0 ​ f ( x ) d x + ∫ 2 ∞ ​ f ( x ) d x = 1 − 0.6 = 0.4 , ∫ 2 ∞ ​ f ( x ) d x = ∫ − ∞ − 1 ​ f ( 1 − t ) d t , 由 f ( 1 + x ) = f ( 1 − x ) 可知， ∫ − ∞ − 1 ​ f ( 1 − t ) d t = ∫ − ∞ − 1 ​ f ( 1 + t ) d t = ∫ − ∞ 0 ​ f ( x ) d x , 故 ∫ − ∞ 0 ​ f ( x ) d x = ∫ 2 ∞ ​ f ( x ) d x ，因此 P { X < 0 } = ∫ − ∞ 0 ​ f ( x ) d x = 0.2 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知\nX1,X2,…,Xn\n为来自总体\nX∼N(μ,σ2)\n的简单随机样本，\n\nX=n1i=1∑nXi,\n\nS=n−11i=1∑n(Xi−X)2,\n\nS∗=n−11i=1∑n(Xi−μ)2,\n\n则",
    options: [{ key: "A", text: "S n ​ ( X − μ ) ​ ∼ t ( n )" }, { key: "B", text: "S n ​ ( X − μ ) ​ ∼ t ( n − 1 )" }, { key: "C", text: "S ∗ n ​ ( X − μ ) ​ ∼ t ( n )" }, { key: "D", text: "S ∗ n ​ ( X − μ ) ​ ∼ t ( n − 1 )" }],
    answer: ["B"],
    explain: "正确答案： B X ∼ N ( μ , n σ 2 ​ ) ，且 σ / n ​ X − μ ​ ∼ N ( 0 , 1 ) 。 σ 2 ( n − 1 ) S 2 ​ ∼ χ 2 ( n − 1 ) ，且 X 与 S 2 相互独立。因此， S n ​ ( X − μ ) ​ ∼ t ( n − 1 ) ，故选项 B 正确。 对于选项 A， σ X − μ ​ ∼ N ( 0 , 1 ) ，但 σ 2 ( n − 1 ) S 2 ​ ∼ χ 2 ( n ) 不成立。此外， X 与 S 2 相互独立，因此 n − 1 ​ S ∗ n ( X − μ ) ​ ∼ t ( n ) 也不成立。故选项 C 和 D 错误。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线\nf(x)=x2+2lnx\n在其拐点处的切线方程是",
    answerText: "】 y = 4 x − 3 【",
    referenceAnswer: "【答案】 y = 4 x − 3 【解析】 给定函数： y = x 2 + 2 ln x 定义域 ： { x ∣ x > 0 } 导数 ： y ′ = 2 x + x 2 ​ 二阶导数 ： y ′′ = 2 − x 2 2 ​ 令 y ′′ = 0 ，解得 x 0 ​ = ± 1 。由于定义域限制 x > 0 ，故 x 0 ​ = 1 。 拐点 ： ( 1 , 1 ) 切线斜率 ： y ′ ( x 0 ​ ) = 4 切线方程 ： y − 1 = 4 ( x − 1 ) 即 y = 4 x − 3",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n∫exarcsin1−e2xdx=",
    answerText: "】 e x arccos e x − 1 − e 2 x ​ + C 【",
    referenceAnswer: "【答案】 e x arccos e x − 1 − e 2 x ​ + C 【解析】 要求解积分 ∫ e x arcsin 1 − e 2 x ​ d x ，我们逐步进行： 首先，进行变量替换： ∫ e x arcsin 1 − e 2 x ​ d x = ∫ arcsin 1 − e 2 x ​ d e x 令 t = e x ，则积分变为： ∫ arcsin 1 − t 2 ​ d t 接下来，进行另一个变量替换 t = cos u ： − ∫ u sin u d u = u cos u − ∫ cos u d u = u cos u − sin u + C 最后，代回原始变量： e x arccos e x − 1 − e 2 x ​ + C 解为： ∫ e x arcsin 1 − e 2 x ​ d x = e x arccos e x − 1 − e 2 x ​ + C",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）差分方程\nΔ2yx−yx=5\n的解为",
    answerText: "】 y = C 1 ​ + C 2 ​ 2 x − 5 【",
    referenceAnswer: "【答案】 y = C 1 ​ + C 2 ​ 2 x − 5 【解析】 Δ 2 y x ​ − y x ​ = 5 可以转化为差分方程： y x + 2 ​ − 2 y x + 1 ​ = 5 特征方程为： r 2 − 2 r = 0 解得特征根为 r 1 ​ = 0 和 r 2 ​ = 2 。 齐次形式的通解为： y = C 1 ​ + C 2 ​ 2 x 由于非齐次项 f ( x ) = 5 ，设特解为常数 y = a ，代入原方程得： a = − 5 综上，通解为： y = C 1 ​ + C 2 ​ 2 x − 5",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(x)\n满足\n\nf(x+Δx)−f(x)=2xf(x)Δx+o(Δx),\n\n且\nf(0)=2\n，则\nf(1)=",
    answerText: "】 2 e 【",
    referenceAnswer: "【答案】 2 e 【解析】 给定方程： f ( x + Δ x ) − f ( x ) = 2 x f ( x ) Δ x + o ( Δ x ) 当 Δ x → 0 时取极限： Δ x → 0 lim ​ Δ x f ( x + Δ x ) − f ( x ) ​ = 2 x f ( x ) 由此得到微分方程： f ′ ( x ) = 2 x f ( x ) 其通解为： f ( x ) = C e x 2 代入初始条件 C = f ( 0 ) = 2 ： f ( x ) = 2 e x 2 最终计算 x = 1 处的函数值： f ( 1 ) = 2 e",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA\n为 3 阶矩阵，\nα1\n、\nα2\n、\nα3\n为线性无关的向量组，若\n\nAα1=2α1+α2+α3,\n\nAα2=α2+2α3,\n\nAα3=−α2+α3,\n\n则\nA\n的实特征值为 （）。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 ( A α 1 ​ , A α 2 ​ , A α 3 ​ ) = A ( α 1 ​ , α 2 ​ , α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 2 1 1 ​ 0 1 2 ​ 0 − 1 1 ​ ​ α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性无关，令 P = ( α 1 ​ , α 2 ​ , α 3 ​ ) ，则 P − 1 A P = ​ 2 1 1 ​ 0 1 2 ​ 0 − 1 1 ​ ​ = B A 与 B 相似，特征值相等。 ∣ λ E − B ∣ = ( λ − 2 ) ( λ 2 − 2 λ + 3 ) = 0 ⇒ λ = 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知事件\nA\n、\nB\n、\nC\n相互独立，且\nP(A)=P(B)=P(C)=21\n，则\n\nP(AC∣A∪B)=",
    answerText: "】 3 1 ​ 【",
    referenceAnswer: "【答案】 3 1 ​ 【解析】 概率计算可分解如下： P ( A C ∣ A ∪ B ) = P ( A ∪ B ) P ( A C ∩ ( A ∪ B )) ​ = P ( A ∪ B ) P ( A C ∪ A BC ) ​ 简化分子与分母： = P ( A ) + P ( B ) − P ( A B ) P ( A C ) + P ( A BC ) − P ( A BC ) ​ 代入给定概率进一步简化： = P ( A ) + P ( B ) − P ( A ) P ( B ) P ( A ) P ( C ) ​ = 2 1 ​ + 2 1 ​ − 2 1 ​ × 2 1 ​ 2 1 ​ × 2 1 ​ ​ = 4 3 ​ 4 1 ​ ​ = 3 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nx→+∞lim[(ax+b)ex1−x]=2\n\n中的\na\n和\nb\n的值。",
    referenceAnswer: "【答案】 a=1, b=1 【解析】 方法1： ​ x → + ∞ lim ​ [ ( a x + b ) e x 1 ​ − x ] = t → 0 + lim ​ t ( a + b t ) e t ​ − t 1 ​ = t → 0 + lim ​ t ( a + b t ) ( 1 + t + o ( t )) − 1 ​ = t → 0 + lim ​ t ( a − 1 ) + ( a + b ) t + o ( t ) ​ = 2 ​ { a − 1 = 0 a + b = 2 ​ ⇒ { a = 1 b = 1 ​ 方法2： ​ x → + ∞ lim ​ [ ( a x + b ) e x 1 ​ − x ] = x → + ∞ lim ​ ( a x + b ) [ 1 + x 1 ​ + o ( x 1 ​ ) ] − x = x → + ∞ lim ​ [ ( a − 1 ) x + a + b + x b ​ + ( a x + b ) o ( x 1 ​ ) ] = 2 ​ { a − 1 = 0 a + b = 2 ​ ⇒ { a = 1 b = 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求\n∬Dx2dxdy\n，其中\nD\n由\ny=3(1−x2)\n与\ny=3x\n围成的有界区域。",
    referenceAnswer: "【答案】 32 3 ​ π ​ − 16 3 ​ ​ 【解析】 ∬ D ​ x 2 d x d y = ∫ 0 2 2 ​ ​ ​ d x ∫ 3 ​ x 3 ( 1 − x 2 ) ​ ​ x 2 d y = 32 3 ​ π ​ − 16 3 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n将长度为\n2m\n的铁丝截成三段，分别弯成圆、正三角形、正方形。问这三段分别为多长时，所得图形的面积总和最小？并求该最小值。",
    referenceAnswer: "【答案】 三段铁丝的长度分别为 π + 4 + 3 3 ​ 2 π ​ m、 π + 4 + 3 3 ​ 6 3 ​ ​ m、 π + 4 + 3 3 ​ 8 ​ m 时，所得图形的面积总和最小，最小值为 π + 4 + 3 3 ​ 1 ​ m²。 【解析】 已知条件： 铁丝总长度： 2 m 三段长度分别为 x 、 y 、 z ，满足： x + y + z = 2 弯成的图形及其面积： 圆：周长 x ，面积 A 圆 ​ = π r 2 ，其中 r = 2 π x ​ A 圆 ​ = π ( 2 π x ​ ) 2 = 4 π x 2 ​ 正三角形：周长 y ，边长 a = 3 y ​ ，面积 A 正三角形 ​ = 4 3 ​ ​ a 2 A 正三角形 ​ = 4 3 ​ ​ ( 3 y ​ ) 2 = 36 3 ​ y 2 ​ 正方形：周长 z ，边长 b = 4 z ​ ，面积 A 正方形 ​ = b 2 A 正方形 ​ = ( 4 z ​ ) 2 = 16 z 2 ​ 目标： 求总面积 S 的最小值： S = 4 π x 2 ​ + 36 3 ​ y 2 ​ + 16 z 2 ​ 约束条件为 x + y + z = 2 。 假设圆的半径为 x ，正方形边长为 y ，正三角形边长为 z ，则有 2 π x + 4 y + 3 z = 2 , x ≥ 0 , y ≥ 0 , z ≥ 0 令 f ( x , y , z ) = π x 2 + y 2 + 4 3 ​ ​ z 2 + λ ( 2 π x + 4 y + 3 z − 2 ) 由极值条件得到方程组： ⎩ ⎨ ⎧ ​ ∂ x ∂ f ​ = 2 π x + 2 πλ = 0 ∂ y ∂ f ​ = 2 y + 4 λ = 0 ∂ z ∂ f ​ = 2 3 ​ ​ z + 3 λ = 0 2 π x + 4 y + 3 z − 2 = 0 ​ 解得最优解为 x = π + 4 + 3 3 ​ 1 ​ , y = π + 4 + 3 3 ​ 2 ​ , z = π + 4 + 3 3 ​ 2 3 ​ ​ 最小面积为 S m i n ​ = π + 4 + 3 3 ​ 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分），已知\ncos2x−(1+x)21=∑n=0∞anxn\n，求\nan\n。",
    referenceAnswer: "【答案】 a n ​ = ⎩ ⎨ ⎧ ​ ( − 1 ) 2 n ​ n ! 2 n ​ − ( n + 1 ) , − ( n + 1 ) , ​ n 为偶数 n 为奇数 ​ 【解析】 由泰勒展开可知： cos 2 x = n = 0 ∑ ∞ ​ ( − 1 ) n ( 2 n )! 2 2 n ​ x 2 n ( 1 + x ) 2 1 ​ = n = 1 ∑ ∞ ​ n ( − 1 ) n − 1 x n − 1 = n = 0 ∑ ∞ ​ ( n + 1 ) ( − 1 ) n x n 因此 a n ​ = ⎩ ⎨ ⎧ ​ ( − 1 ) 2 n ​ n ! 2 n ​ − ( n + 1 ) , − ( n + 1 ) , ​ n 为偶数 n 为奇数 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n数列\n{xn}\n满足\nx1>0\n，且满足递推关系\n\nxnexn+1=exn−1(n=1,2,⋯)\n\n证明数列\n{xn}\n收敛，并求\n\nn→∞limxn",
    referenceAnswer: "【答案】 0 【解析】 由 x n ​ e x n + 1 ​ = e x n ​ − 1 得 x n + 1 ​ = ln x n ​ e x n ​ − 1 ​ 。 单调性 ：令 g ( x ) = e x − 1 − x e x ，则 g ′ ( x ) = − x e x < 0 （ x > 0 ），故 g ( x ) 单调递减。 有界性 ：由 e x − 1 > x （ x > 0 ）知 x n ​ e x n ​ − 1 ​ > 1 ，故 x n + 1 ​ = ln x n ​ e x n ​ − 1 ​ > 0 ，数列有下界。 根据单调有界定理， lim n → ∞ ​ x n ​ 存在，设为 a ，则 a e a = e a − 1 ，解得 a = 0 。 综上，数列收敛且 lim n → ∞ ​ x n ​ = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设实二次型\n\nf(x)=f(x1,x2,x3)=(x1−x2+x3)2+(x2+x3)2+(x1+ax3)2,\n\n其中\na\n是参数。\n求\nf(x1,x2,x3)=0\n的解；求\nf(x1,x2,x3)\n的规范形。",
    referenceAnswer: "【答案】 当 a  = 2 时， f ( x ) = 0 的解为 x = 0 ；当 a = 2 时，解为 x = k ​ − 2 − 1 1 ​ ​ ，其中 k 为任意常数。 当 a  = 2 时， f ( x ) 的规范形为 y 1 2 ​ + y 2 2 ​ + y 3 2 ​ ；当 a = 2 时，规范形为 y 1 2 ​ + y 2 2 ​ 。 【解析】 (1) 若 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 0 ，则 ⎩ ⎨ ⎧ ​ x 1 ​ − x 2 ​ + x 3 ​ = 0 , x 2 ​ + x 3 ​ = 0 , x 1 ​ + a x 3 ​ = 0 , ​ 即 0 = ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = A X ，则 ∣ A ∣ = a − 2 。 当 a  = 2 时， ∣ A ∣  = 0 ，则 X = ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = ​ 0 0 0 ​ ​ ； 当 a = 2 时， A = ​ 1 0 1 ​ − 1 1 0 ​ 1 1 2 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 2 1 0 ​ ​ ，则 X = k 1 ​ ​ − 2 − 1 1 ​ ​ ， k 1 ​  = 0 。 (2) 当 a  = 2 时，令 ⎩ ⎨ ⎧ ​ y 1 ​ = x 1 ​ − x 2 ​ + x 3 ​ , y 2 ​ = x 2 ​ + x 3 ​ , y 3 ​ = x 1 ​ + a x 3 ​ , ​ 即 ​ y 1 ​ y 2 ​ y 3 ​ ​ ​ = ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = A X . 则 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范形为 f ( y 1 ​ , y 2 ​ , y 3 ​ ) = y 1 2 ​ + y 2 2 ​ + y 3 2 ​ 。 当 a = 2 时， A 不可逆，则 f ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ = ( x 1 ​ − x 2 ​ + x 3 ​ ) 2 + ( x 2 ​ + x 3 ​ ) 2 + ( x 1 ​ + 2 x 3 ​ ) 2 = 2 x 1 2 ​ + 2 x 2 2 ​ + 6 x 3 2 ​ − 2 x 1 ​ x 2 ​ + 6 x 1 ​ x 3 ​ = 2 ( x 1 ​ − 2 1 ​ x 2 ​ + 2 3 ​ x 3 ​ ) 2 + 2 3 ​ ( x 2 ​ + x 3 ​ ) 2 , ​ 令 ⎩ ⎨ ⎧ ​ y 1 ​ = 2 ​ ( x 1 ​ − 2 1 ​ x 2 ​ + 2 3 ​ x 3 ​ ) , y 2 ​ = 2 6 ​ ​ ( x 2 ​ + x 3 ​ ) , y 3 ​ = x 3 ​ , ​ 则 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范形为 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = y 1 2 ​ + y 2 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知矩阵\nA=112237a0−a\n，\nB=10−1a11211\n。\n\n(1) 求\na\n；\n\n(2) 求满足\nAP=B\n的可逆矩阵\nP",
    referenceAnswer: "【答案】 (1) a = 2 (2) 可逆矩阵 P = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ ，其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数，且 k 2 ​  = k 3 ​ 【解析】 (1) 初等列变换不改变行列式的值，故 ∣ A ∣ = ∣ B ∣ ， 即 − 3 a + 7 a − 6 a + 2 a = 1 − a + 2 − 1 ， 解得 a = 2 。 (2) ( A ∣ B ) = ​ 1 1 2 ​ 2 3 7 ​ 2 0 − 2 ​ 1 0 − 1 ​ 2 1 1 ​ 2 1 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 6 − 2 0 ​ 3 − 1 0 ​ 4 − 1 0 ​ 4 − 1 0 ​ ​ . 可得 X 1 ​ X 2 ​ X 3 ​ ​ = k 1 ​ ​ − 6 2 1 ​ ​ + ​ 3 − 1 0 ​ ​ , = k 2 ​ ​ − 6 2 1 ​ ​ + ​ 4 − 1 0 ​ ​ , = k 3 ​ ​ − 6 2 1 ​ ​ + ​ 4 − 1 0 ​ ​ ( k 1 ​ , k 2 ​ , k 3 ​ ) . ​ 故 A X = B 的通解为 X = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ ( k 1 ​ , k 2 ​ , k 3 ​ ) . 因为 ∣ X ∣ = k 3 ​ − k 2 ​ ，所以可逆矩阵 P = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ ( k 1 ​ , k 2 ​ , k 3 ​ , k 2 ​  = k 3 ​ ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分），已知随机变量\nX\n和\nY\n相互独立，且\nP(X=1)=P(X=−1)=21\n，\nY\n服从参数为\nλ\n的泊松分布，\nZ=XY\n。\n求\nCov(X,Z)\n；求\nZ\n的分布律。",
    referenceAnswer: "【答案】 Cov ( X , Z ) = λ Z 的分布律为： P { Z = k } = ⎩ ⎨ ⎧ ​ 2 1 ​ e − λ k ! λ k ​ , e − λ , 2 1 ​ e − λ ( − k )! λ − k ​ , ​ k ∈ N + , k = 0 , − k ∈ N + . ​ 【解析】 (1) Y 服从参数为 λ 的泊松分布，故 E ( Y ) = λ 。 由题意可得， E ( X ) = 0 , E ( X 2 ) = 1 。又由于 X 与 Y 相互独立，故 Cov ( X , Z ) ​ = E ( XZ ) − E ( X ) ⋅ E ( Z ) = E ( X 2 Y ) − E ( X ) ⋅ E ( X Y ) = E ( X 2 ) ⋅ E ( Y ) − E ( X ) ⋅ E ( X ) ⋅ E ( Y ) = λ . ​ (2) 当 k ∈ N + 时， P { Z = k } = 2 1 ​ P { Y = k } + 2 1 ​ P { Y = − k } = 2 1 ​ e − λ k ! λ k ​ , 当 k = 0 时， P { Z = 0 } = P { Y = 0 } = e − λ ; 当 − k ∈ N + 时， P { Z = k } = 2 1 ​ P { Y = k } + 2 1 ​ P { Y = − k } = 2 1 ​ e − λ ( − k )! λ − k ​ , 故 P { Z = k } = ⎩ ⎨ ⎧ ​ 2 1 ​ e − λ k ! λ k ​ , e − λ , 2 1 ​ e − λ ( − k )! λ − k ​ , ​ k ∈ N + , k = 0 , − k ∈ N + . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知总体\nX\n的密度函数为\n\nf(x,σ)=2σ1e−σ∣x∣(−∞x+∞,σ>0),\n\n其中\nσ\n为未知参数，\nX1,X2,…,Xn\n为来自总体\nX\n的简单随机样本。\n\n(1) 求\nσ\n的最大似然估计量\nσ^\n；\n\n(2) 求\nσ^\n的方差\nD(σ^)\n。",
    referenceAnswer: "【答案】 (1) σ ^ = n 1 ​ ∑ i = 1 n ​ ∣ X i ​ ∣ (2) D ( σ ^ ) = n σ 2 ​ 【解析】 (1) 似然函数 L ( σ ) ​ = f ( X 1 ​ ; σ ) ⋯ f ( X n ​ ; σ ) = ( 2 σ ) n 1 ​ e − ∑ i = 1 n ​ ∣ X i ​ ∣ ( − ∞ < x i ​ < + ∞ , i = 1 , 2 , ⋯ , n ) . ​ 取对数： ln L ( σ ) = − n ln 2 − n ln σ − σ ∑ i = 1 n ​ ∣ x i ​ ∣ ​ . 令 d σ d ​ ln L ( σ ) = − σ n ​ + σ 2 ∑ i = 1 n ​ ∣ x i ​ ∣ ​ = 0 , 得 σ 的最大似然估计量： σ ^ = n 1 ​ i = 1 ∑ n ​ ∣ X i ​ ∣. (2) E ( ∣ X i ​ ∣ ) = 2 ∫ 0 ∞ ​ 2 σ 1 ​ x e − σ x ​ d x = 2 × 2 σ 1 ​ × σ 2 × 1 = σ , E ( X i 2 ​ ) = 2 ∫ 0 ∞ ​ 2 σ 1 ​ x 2 e − σ x ​ d x = σ 1 ​ ∫ 0 ∞ ​ y 2 e − y d y = 2 σ 2 . 由于 X 1 ​ , ⋯ , X n ​ 相互独立，故 E ( σ ^ ) = n 1 ​ i = 1 ∑ n ​ E ( ∣ X i ​ ∣ ) = σ , D ( σ ^ ) = n 2 1 ​ i = 1 ∑ n ​ D ( ∣ X i ​ ∣ ) = n 2 1 ​ i = 1 ∑ n ​ ( 2 σ 2 − σ 2 ) = n σ 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2018_math3 = {
  id: P, year: Y,
  title: '2018 年全国硕士研究生招生考试 数学（三）',
  short: '2018 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2018_math3.length,
  qids: questions2018_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
