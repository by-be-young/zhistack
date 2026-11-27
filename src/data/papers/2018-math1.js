const P = 'paper-2018-math1'
const Y = 2018
const SRC = '#/notes/study_methods-math-math1-2018'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2018-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2018 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2018_math1 = [
  base(1, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列函数中，在\nx=0\n处不可导的是（  ）",
    options: [{ key: "A", text: "f ( x ) = ∣ x ∣ sin ∣ x ∣" }, { key: "B", text: "f ( x ) = ∣ x ∣ sin ∣ x ∣ ​" }, { key: "C", text: "f ( x ) = cos ∣ x ∣" }, { key: "D", text: "f ( x ) = cos ∣ x ∣ ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解】 方法一 对 f ( x ) = cos ∣ x ∣ ​ , x → 0 lim ​ x f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x c o s ∣ x ∣ ​ − 1 ​ = − 2 1 ​ x → 0 lim ​ x ∣ x ∣ ​ 不存在，即 f ( x ) = cos ∣ x ∣ ​ 在 x = 0 处不可导，应选(D). 方法二 当 f ( x ) = ∣ x ∣ sin ∣ x ∣ 时， f ( x ) − f ( 0 ) ∼ x 2 , f ( x ) 在 x = 0 处可导且导数为 0,不选(A); 当 f ( x ) = ∣ x ∣ sin ∣ x ∣ ​ 时， f ( x ) − f ( 0 ) ∼ ∣ x ∣ 2 3 ​ , f ( x ) 在 x = 0 处可导且导数为 0,不选(B); 当 f ( x ) = cos ∣ x ∣ 时， f ( x ) − f ( 0 ) ∼ − 2 1 ​ x 2 , f ( x ) 在 x = 0 处可导且导数为 0,不选(C), 应选(D)."
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "过点\n(1,0,0)\n、\n(0,1,0)\n，且与曲面\nz=x2+y2\n相切的平面为（　　）",
    options: [{ key: "A", text: "z = 0 与 x + y − z = 1" }, { key: "B", text: "z = 0 与 2 x + 2 y − z = 2" }, { key: "C", text: "x = y 与 x + y − z = 1" }, { key: "D", text: "x = y 与 2 x + 2 y − z = 2" }],
    answer: ["B"],
    explain: "正确答案： B 【解】 设切点为 ( x 0 ​ , y 0 ​ , z 0 ​ ) ，则 ⎩ ⎨ ⎧ ​ z 0 ​ = x 0 2 ​ + y 0 2 ​ , ( 2 x 0 ​ , 2 y 0 ​ , − 1 ) ⋅ ( 1 , − 1 , 0 ) = 0 , ( 2 x 0 ​ , 2 y 0 ​ , − 1 ) ⋅ ( x 0 ​ − 1 , y 0 ​ , z 0 ​ ) = 0 , ​ 解之得 ⎩ ⎨ ⎧ ​ x 0 ​ = 0 , y 0 ​ = 0 , z 0 ​ = 0 , ​ 或 ⎩ ⎨ ⎧ ​ x 0 ​ = 1 , y 0 ​ = 1 , z 0 ​ = 2 , ​ 故所求切平面为 z = 0 或 2 x + 2 y − z = 2 应选(B)"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "∑n=0∞(−1)n(2n+1)!2n+3=()",
    options: [{ key: "A", text: "sin 1 + cos 1" }, { key: "B", text: "2 sin 1 + cos 1" }, { key: "C", text: "2 sin 1 + 2 cos 1" }, { key: "D", text: "2 sin 1 + 3 cos 1" }],
    answer: ["B"],
    explain: "正确答案： B 【解】 n = 0 ∑ ∞ ​ ( − 1 ) n ( 2 n + 1 )! 2 n + 3 ​ = n = 0 ∑ ∞ ​ ( − 1 ) n ( 2 n )! 1 ​ + 2 n = 0 ∑ ∞ ​ ( − 1 ) n ( 2 n + 1 )! 1 ​ = cos 1 + 2 sin 1 ， 应选(B)."
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nM=∫−2π2π1+x2(1+x)2dx\n，\nN=∫−2π2πex1+xdx\n，\nK=∫−2π2π(1+cosx)dx\n，则（ ）",
    options: [{ key: "A", text: "M > N > K" }, { key: "B", text: "M > K > N" }, { key: "C", text: "K > M > N" }, { key: "D", text: "K > N > M" }],
    answer: ["C"],
    explain: "正确答案： C 【解】 M = ∫ − 2 π ​ 2 π ​ ​ 1 + x 2 ( 1 + x ) 2 ​ d x = ∫ − 2 π ​ 2 π ​ ​ ( 1 + 1 + x 2 2 x ​ ) d x = ∫ − 2 π ​ 2 π ​ ​ 1 d x = π ， 当 − 2 π ​ ≤ x ≤ 2 π ​ 时， 1 + cos x ​ > 1 > e x 1 + x ​ ， ∫ − 2 π ​ 2 π ​ ​ ( 1 + cos x ​ ) d x > ∫ − 2 π ​ 2 π ​ ​ 1 d x > ∫ − 2 π ​ 2 π ​ ​ e x 1 + x ​ d x ，即 K > M > N 应选(C)."
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列矩阵中，与矩阵\n100110011\n相似的为（ ）",
    options: [{ key: "A", text: "​ 1 0 0 ​ 1 1 0 ​ − 1 1 1 ​ ​" }, { key: "B", text: "​ 1 0 0 ​ 0 1 0 ​ − 1 1 1 ​ ​" }, { key: "C", text: "​ 1 0 0 ​ 1 1 0 ​ − 1 0 1 ​ ​" }, { key: "D", text: "​ 1 0 0 ​ 0 1 0 ​ − 1 0 1 ​ ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解】 方法一 令 M = ​ 1 0 0 ​ 1 1 0 ​ 0 1 1 ​ ​ ， A = ​ 1 0 0 ​ 1 1 0 ​ − 1 1 1 ​ ​ ， B = ​ 1 0 0 ​ 0 1 0 ​ − 1 1 1 ​ ​ ， C = ​ 1 0 0 ​ 1 1 0 ​ − 1 0 1 ​ ​ ， D = ​ 1 0 0 ​ 0 1 0 ​ − 1 0 1 ​ ​ ， 显然矩阵 A ， B ， C ， D 的特征值都是 λ 1 ​ = λ 2 ​ = λ 3 ​ = 1 ， E − M = ​ 0 0 0 ​ − 1 0 0 ​ 0 − 1 0 ​ ​ ， E − A = ​ 0 0 0 ​ − 1 0 0 ​ 1 − 1 0 ​ ​ ， E − B = ​ 0 0 0 ​ 0 0 0 ​ 1 − 1 0 ​ ​ ， E − C = ​ 0 0 0 ​ − 1 0 0 ​ 1 0 0 ​ ​ ， E − D = ​ 0 0 0 ​ 0 0 0 ​ 1 0 0 ​ ​ ， 因为 r ( E − M ) = r ( E − A ) = 2 ，所以应选（A）. 方法二 取 P = ​ 1 0 0 ​ − 1 1 0 ​ 0 0 1 ​ ​ ，则 P − 1 = ​ 1 0 0 ​ 1 1 0 ​ 0 0 1 ​ ​ ，因为 P − 1 ​ 1 0 0 ​ 1 1 0 ​ − 1 1 1 ​ ​ P = ​ 1 0 0 ​ 1 1 0 ​ 0 1 1 ​ ​ ，所以 ​ 1 0 0 ​ 1 1 0 ​ 0 1 1 ​ ​ 与 ​ 1 0 0 ​ 1 1 0 ​ − 1 1 1 ​ ​ 相似，应选（A）."
  }),
  base(6, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA,B\n为\nn\n阶矩阵，记\nr(X)\n为矩阵\nX\n的秩，\n(X,Y)\n表示分块矩阵，则（ ）",
    options: [{ key: "A", text: "r ( A , A B ) = r" }, { key: "B", text: "r ( A , B A ) = r" }, { key: "C", text: "r ( A , B ) = max { r ( A ) , r ( B )}" }, { key: "D", text: "r ( A , B ) = r ( A T , B T )" }],
    answer: ["A"],
    explain: "正确答案： A 【解】 ( A , A B ) = A ( E , B ) ， 显然 r ( A , A B ) = r [ A ( E , B )] ≤ r ( A ) ， 又 r ( A , A B ) ≥ r ( A ) ， 于是 r ( A , A B ) = r ( A ) ，应选(A)."
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n的概率密度\nf(x)\n满足\nf(1+x)=f(1−x)\n，且\n∫02f(x)dx=0.6\n，则\nP{X0}=",
    options: [{ key: "A", text: "0.2" }, { key: "B", text: "0.3" }, { key: "C", text: "0.4" }, { key: "D", text: "0.5" }],
    answer: ["A"],
    explain: "正确答案： A 【解】 ∫ 0 1 ​ f ( x ) d x = ∫ 1 2 ​ f ( x ) d x = 2 1 ​ ∫ 0 2 ​ f ( x ) d x = 0.3 ， P ( X < 0 ) = ∫ − ∞ 0 ​ f ( x ) d x = ∫ − ∞ 1 ​ f ( x ) d x − ∫ 0 1 ​ f ( x ) d x = 0.5 − 0.3 = 0.2 ，应选(A)。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设总体\nX\n服从正态分布\nN(μ,σ2)\n。\nX1,X2,⋯,Xn\n是来自总体\nX\n的简单随机样本，据此样本检验假设：\nH0:μ=μ0,H1:μ=μ0\n，则（ ）",
    options: [{ key: "A", text: "如果在检验水平 α = 0.05 下拒绝 H 0 ​ ，那么 α = 0.01 下必拒绝 H 0 ​ 。" }, { key: "B", text: "如果在检验水平 α = 0.05 下拒绝 H 0 ​ ，那么 α = 0.01 下必接受 H 0 ​ 。" }, { key: "C", text: "如果在检验水平 α = 0.05 下接受 H 0 ​ ，那么 α = 0.01 下必拒绝 H 0 ​ 。" }, { key: "D", text: "如果在检验水平 α = 0.05 下接受 H 0 ​ ，那么 α = 0.01 下必接受 H 0 ​ 。" }],
    answer: ["D"],
    explain: "正确答案： D 【解】 若 σ 2 已知，则假设 H 0 ​ 的接受域： ∣ u ∣ < u 2 α ​ ​ ，其中 u 2 α ​ ​ 为正态分布的 2 α ​ （上）分位数。 若 σ 2 未知，则假设 H 0 ​ 的接受域： ∣ t ∣ < t 2 α ​ ​ ( n − 1 ) ，其中 t 2 α ​ ​ ( n − 1 ) 为自由度是 n − 1 的 t 分布的 2 α ​ （上）分位数。显然检验水平 α 变小，接受域都变大。应选(D)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若\nx→0lim(1+tanx1−tanx)sinkx1=e\n，则\nk=\n______．",
    answerText: "】 − 2 【",
    referenceAnswer: "【答案】 − 2 【解析】 因为 x 0 lim ​ s i n k x 1 ​ ⋅ ( 1 + t a n x 1 − t a n x ​ − 1 ) = x 0 lim ​ s i n k x 1 ​ ⋅ 1 + t a n x − 2 t a n x ​ = x 0 lim ​ k x 1 ​ ⋅ 1 + t a n x − 2 x ​ = k − 2 ​ ， 故 x 0 lim ​ ( 1 + t a n x 1 − t a n x ​ ) s i n k x 1 ​ = e k − 2 ​ = e ，即 k = − 2 ．",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(x)\n具有\n2\n阶连续导数。若曲线\ny=f(x)\n过点\n(0,0)\n且与曲线\ny=2x\n在点\n(1,2)\n处相切，则\n∫01xf′′(x)dx=\n______.",
    answerText: "】 2 ( ln 2 − 1 ) 【",
    referenceAnswer: "【答案】 2 ( ln 2 − 1 ) 【解析】 f ′ ( 1 ) = ( 2 x ) ′ ∣ x = 1 ​ = 2 ln 2 , ∫ 0 1 ​ x f ′′ ( x ) d x = ∫ 0 1 ​ x d f ′ ( x ) = x f ′ ( x ) ∣ 0 1 ​ − ∫ 0 1 ​ f ′ ( x ) d x = f ′ ( 1 ) − f ( 1 ) + f ( 0 ) = 2 ln 2 − 2 = 2 ( ln 2 − 1 )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nF(x,y,z)=xyi−yzj+zxk\n,则\nrot F(1,1,0)=",
    answerText: "】 i − k 【",
    referenceAnswer: "【答案】 i − k 【解析】 设 F ( x , y , z ) = x y i − yz j + z x k ,则 rot F ( 1 , 1 , 0 ) = ​ i ∂ x ∂ ​ x y ​ j ∂ y ∂ ​ − yz ​ k ∂ z ∂ ​ z x ​ ​ ( 1 , 1 , 0 ) ​ = ( y i − z j − x k ) ​ ( 1 , 1 , 0 ) ​ = i − k",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设 L 为球面\nx2+y2+z2=1\n与平面\nx+y+z=0\n的交线，则\n∮Lxyds=\n______．",
    answerText: "】 − 3 π ​ 【",
    referenceAnswer: "【答案】 − 3 π ​ 【解析】 ∮ L ​ x y d s = 3 1 ​ ∮ L ​ ( x y + yz + x z ) d s = 6 1 ​ ∮ L ​ [( x + y + z ) 2 − ( x 2 + y 2 + z 2 )] d s = − 6 1 ​ ∮ L ​ d s = − 3 π ​ ．",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二阶矩阵\nA\n有两个不同的特征值，\nα1\n，\nα2\n是\nA\n的线性无关的特征向量，\nA2(α1+α2)=α1+α2\n，则\n∣A∣=",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 因为 α 1 ​ 和 α 2 ​ 线性无关，所以 α 1 ​ + α 2 ​  = 0 。 由 A 2 ( α 1 ​ + α 2 ​ ) = α 1 ​ + α 2 ​ 可知， α 1 ​ + α 2 ​ 是 A 2 对应特征值 1 的特征向量。 又因为 A 有两个不同的特征值，设为 λ 1 ​ 和 λ 2 ​ ，则 A 2 的特征值为 λ 1 2 ​ 和 λ 2 2 ​ 。 由于 A 2 有特征值 1 ，且 α 1 ​ 和 α 2 ​ 是 A 的特征向量，所以 λ 1 2 ​ = 1 ， λ 2 2 ​ = 1 ，解得 λ 1 ​ = ± 1 ， λ 2 ​ = ± 1 。 又因为 λ 1 ​  = λ 2 ​ ，所以 λ 1 ​ = 1 ， λ 2 ​ = − 1 ，则 ∣ A ∣ = λ 1 ​ λ 2 ​ = − 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机事件 A 与 B 相互独立，A 与 C 相互独立，\nBC=∅\n。若\nP(A)=P(B)=21\n，\nP(AC∣AB∪C)=41\n，则\nP(C)=\n______。",
    answerText: "】 4 1 ​ 【",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 由 BC = ∅ ，得 P ( BC ) = 0 。 因为 A BC ⊂ BC ，所以 P ( A BC ) = 0 。 P ( A C ∣ A B ∪ C ) ​ = P ( A B ∪ C ) P [ A C ( A B ∪ C )] ​ = P ( A B ∪ C ) P [( A BC ) ∪ ( A C )] ​ = P ( A B ∪ C ) P ( A C ) ​ = P ( A ) P ( B ) + P ( C ) − P ( A BC ) P ( A ) P ( C ) ​ = 2 1 ​ × 2 1 ​ + P ( C ) − 0 2 1 ​ ⋅ P ( C ) ​ = 4 1 ​ ​ 解得 P ( C ) = 4 1 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-008', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求不定积分\n∫e2xarctanex−1dx",
    referenceAnswer: "【答案】 2 1 ​ e 2 x arctan e x − 1 ​ − 6 1 ​ ( e x + 2 ) e x − 1 ​ + C 【解析】 ∫ e 2 x arctan e x − 1 ​ d x = 2 1 ​ ∫ arctan e x − 1 ​ d e 2 x = 2 1 ​ e 2 x arctan e x − 1 ​ − 2 1 ​ ∫ e 2 x d arctan e x − 1 ​ = 2 1 ​ e 2 x arctan e x − 1 ​ − 4 1 ​ ∫ e x − 1 ​ e 2 x ​ d x = 2 1 ​ e 2 x arctan e x − 1 ​ − 2 1 ​ ∫ e x d e x − 1 ​ = 2 1 ​ e 2 x arctan e x − 1 ​ − 2 1 ​ ( e x e x − 1 ​ − ∫ e x − 1 ​ d e x ) = 2 1 ​ e 2 x arctan e x − 1 ​ − 2 1 ​ [ e x e x − 1 ​ − 3 2 ​ ( e x − 1 ) 2 3 ​ ] + C = 2 1 ​ e 2 x arctan e x − 1 ​ − 6 1 ​ ( e x + 2 ) e x − 1 ​ + C",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n将长为 2m 的铁丝分成三段，依次围成圆、正方形与正三角形.三个图形的面积之和是否存在最小值？若存在，求出最小值。",
    referenceAnswer: "【答案】 最小值为 π + 4 + 3 3 ​ 1 ​ 【解析】 设铁丝分成的三段长分别是 x,y,z,则 x+y+z=2,且依次围成的圆、正方形与正三角形三个图形的面积之和为 f ( x , y , z ) = ( 2 x ​ ) 2 + ( 4 y ​ ) 2 + 4 3 ​ ​ ( 3 z ​ ) 2 = 4 x 2 ​ + 16 y 2 ​ + 36 3 ​ ​ z 2 , 构造拉格朗日函数： L ( x , y , z , ) = 4 x 2 ​ + 16 y 2 ​ + 36 3 ​ ​ z 2 + ( x + y + z − 2 ) 令 ⎩ ⎨ ⎧ ​ L x ′ ​ = 2 x ​ + = 0 , L y ′ ​ = 8 y ​ + = 0 , L z ′ ​ = 18 3 ​ ​ z + = 0 , L ′ ​ = x + y + z − 2 = 0 , ​ 得 ⎩ ⎨ ⎧ ​ x 0 ​ = + 4 + 3 3 ​ 2 ​ , y 0 ​ = + 4 + 3 3 ​ 8 ​ , z 0 ​ = + 4 + 3 3 ​ 6 3 ​ ​ , ​ 此时 f ( x 0 ​ , y 0 ​ , z 0 ​ ) = + 4 + 3 3 ​ 1 ​ 又当 x + y + z = 2 , x yz = 0 时， f ( x , y , z ) 的最小值为 f ( 0 , 4 + 3 3 ​ 8 ​ , 4 + 3 3 ​ 6 3 ​ ​ ) = 4 + 3 3 ​ 1 ​ 所以三个图形的面积之和存在最小值，最小值为 f ( x 0 ​ , y 0 ​ , z 0 ​ ) = + 4 + 3 3 ​ 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n设\nΣ\n是曲面\nx=1−3y2−3z2\n的前侧，计算曲面积分\n\nI=∬Σxdydz+(y3+2)dzdx+z3dxdy",
    referenceAnswer: "【答案】 45 14 π ​ 【解析】 补曲面 Σ 1 ​ : { x = 0 , 3 y 2 + 3 z 2 = 1 ​ ，取后侧， Ω 为 Σ 与 Σ 1 ​ 所围成的立体。利用高斯公式可得 I ​ = ∬ Σ + Σ 1 ​ ​ x d y d z + ( y 3 + 2 ) d z d x + z 3 d x d y − ∬ Σ 1 ​ ​ x d y d z + ( y 3 + 2 ) d z d x + z 3 d x d y = ∭ Ω ​ ( 1 + 3 y 2 + 3 z 2 ) d x d y d z − 0 = ∭ Ω ​ ( 1 + 3 y 2 + 3 z 2 ) d x d y d z ​ 利用柱坐标变换 y = r cos θ ， z = r sin θ ， x = x 得 ∭ Ω ​ ( 1 + 3 y 2 + 3 z 2 ) d x d y d z ​ = ∫ 0 2 π ​ d θ ∫ 0 3 3 ​ ​ ​ d r ∫ 0 1 − 3 r 2 ​ ​ ( 1 + 3 r 2 ) r d x = 2 π ∫ 0 3 3 ​ ​ ​ 1 − 3 r 2 ​ ( 1 + 3 r 2 ) r d r = 3 2 π ​ ∫ 0 1 ​ ( 2 − t 2 ) t 2 d t = 45 14 π ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分） 已知微分方程\ny′+y=f(x)\n，其中\nf(x)\n是\nR\n上的连续函数。\n\n(Ⅰ) 若\nf(x)=x\n，求方程的通解；\n\n(Ⅱ) 若\nf(x)\n是周期为\nT\n的函数，证明：方程存在唯一的以\nT\n为周期的解。",
    referenceAnswer: "【答案】 (Ⅰ) y = C e − x + x − 1 (Ⅱ) 见解析 【解析】 (Ⅰ) 当 f ( x ) = x 时，方程化为 y ′ + y = x ，其通解为 y = e − ∫ d x ( C + ∫ x e ∫ d x d x ) = e − x ( C + x e x − e x ) = C e − x + x − 1 (Ⅱ) 方程 y ′ + y = f ( x ) 的通解为 y = e − ∫ 0 x ​ d t [ C + ∫ 0 x ​ e ∫ 0 t ​ d s f ( t ) d t ] ， 即 y = e − x [ C + ∫ 0 x ​ e t f ( t ) d t ] 得 y ( x + T ) − y ( x ) = e − x [ ( e T 1 ​ − 1 ) C + e T 1 ​ ∫ 0 x + T ​ e t f ( t ) d t − ∫ 0 x ​ e t f ( t ) d t ] 若 f ( x ) 是周期为 T 的连续函数，则 e T 1 ​ ∫ 0 x + T ​ e t f ( t ) d t = e T 1 ​ ∫ 0 T ​ e t f ( t ) d t + e T 1 ​ ∫ T x + T ​ e t f ( t ) d t = e T 1 ​ ∫ 0 T ​ e t f ( t ) d t + e T 1 ​ ∫ 0 x ​ e u + T f ( u + T ) d u = e T 1 ​ ∫ 0 T ​ e t f ( t ) d t + e T 1 ​ ∫ 0 x ​ e T e u f ( u ) d u = e T 1 ​ ∫ 0 T ​ e t f ( t ) d t + ∫ 0 x ​ e u f ( u ) d u 于是 y ( x + T ) − y ( x ) = e − x [ ( e T 1 ​ − 1 ) C + e T 1 ​ ∫ 0 T ​ e t f ( t ) d t ] ， 因此当且仅当 C = e T − 1 1 ​ ∫ 0 T ​ e t f ( t ) d t 时， y ( x + T ) − y ( x ) = 0 ，即方程存在唯一的以 T 为周期的解。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设数列\n{xn}\n满足：\nx1>0\n，\nxnexn+1=exn−1\n（\nn=1,2,⋯\n）．证明数列\n{xn}\n收敛，并求\nn→∞limxn\n．",
    referenceAnswer: "【答案】 n → ∞ lim ​ x n ​ = 0 【解析】 因为 x 1 ​  = 0 ，所以 e x 2 ​ = x 1 ​ e x 1 ​ − 1 ​ ． 由微分中值定理，存在 ξ ∈ ( 0 , x 1 ​ ) ，使得 x 1 ​ e x 1 ​ − 1 ​ = e ξ ，即 e x 2 ​ = e ξ ，因此 0 < x 2 ​ < x 1 ​ ． 假设 0 < x n + 1 ​ < x n ​ ，则 e x n + 2 ​ = x n + 1 ​ e x n + 1 ​ − 1 ​ = e η （ 0 < η < x n + 1 ​ ），得 0 < x n + 2 ​ < x n + 1 ​ 。故 { x n ​ } 是单调减少的数列，且有下界，从而 { x n ​ } 收敛． 设 n → ∞ lim ​ x n ​ = a ，在等式 x n ​ e x n + 1 ​ = e x n ​ − 1 两边取极限，得 a e a = e a − 1 ，显然 a = 0 为其解。 又令 f ( x ) = x e x − e x + 1 ，则 f ′ ( x ) = x e x 。 当 x > 0 时， f ′ ( x ) = x e x > 0 ，函数 f ( x ) 在 [ 0 , + ∞ ) 上单调增加， 所以 a = 0 是方程 a e a = e a − 1 在 [ 0 , + ∞ ) 上的唯一解，故 n → ∞ lim ​ x n ​ = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设实二次型\nf(x1,x2,x3)=(x1−x2+x3)2+(x2+x3)2+(x1+ax3)2\n，其中\na\n是参数。\n\n(Ⅰ) 求\nf(x1,x2,x3)=0\n的解；\n\n(Ⅱ) 求\nf(x1,x2,x3)\n的规范形。",
    referenceAnswer: "【答案】 （Ⅰ）当 a  = 2 时， f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 0 的解为 x = ( x 1 ​ , x 2 ​ , x 3 ​ ) T = ( 0 , 0 , 0 ) T ；当 a = 2 时，解为 x = k ( − 2 , − 1 , 1 ) T ，其中 k  = 0 。 （Ⅱ）当 a  = 2 时， f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范形为 y 1 2 ​ + y 2 2 ​ + y 3 2 ​ ；当 a = 2 时，规范形为 y 1 2 ​ + y 2 2 ​ 。 【解析】 （Ⅰ）函数 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = ( x 1 ​ − x 2 ​ + x 3 ​ ) 2 + ( x 2 ​ + x 3 ​ ) 2 + ( x 1 ​ + a x 3 ​ ) 2 = 0 的充分必要条件是 ⎩ ⎨ ⎧ ​ x 1 ​ − x 2 ​ + x 3 ​ = 0 , x 2 ​ + x 3 ​ = 0 , x 1 ​ + a x 3 ​ = 0. ​ 对齐次线性方程组的系数矩阵作初等行变换得 A = ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ → ​ 1 0 0 ​ − 1 1 1 ​ 1 1 a − 1 ​ ​ → ​ 1 0 0 ​ − 1 1 0 ​ 1 1 a − 2 ​ ​ . 当 a  = 2 时， f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 0 只有零解 x = ( x 1 ​ , x 2 ​ , x 3 ​ ) T = ( 0 , 0 , 0 ) T 。 当 a = 2 时， A → ​ 1 0 0 ​ 0 1 0 ​ 2 1 0 ​ ​ , f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 0 有非零解 x = ( x 1 ​ , x 2 ​ , x 3 ​ ) T = k ( − 2 , − 1 , 1 ) T ，其中 k  = 0 。 （Ⅱ）当 a  = 2 时，令 ​ y 1 ​ y 2 ​ y 3 ​ ​ ​ = ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ . 由于 ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ = ​ 1 0 0 ​ − 1 1 0 ​ 1 1 a − 2 ​ ​ = a − 2  = 0 , 矩阵 ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ 可逆，因此 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范形为 f ( y 1 ​ , y 2 ​ , y 3 ​ ) = y 1 2 ​ + y 2 2 ​ + y 3 2 ​ . 当 a = 2 时， f ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ = ( x 1 ​ − x 2 ​ + x 3 ​ ) 2 + ( x 2 ​ + x 3 ​ ) 2 + ( x 1 ​ + 2 x 3 ​ ) 2 = 2 x 1 2 ​ + 2 x 2 2 ​ + 6 x 3 2 ​ − 2 x 1 ​ x 2 ​ + 6 x 1 ​ x 3 ​ . ​ 进一步整理得 f ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ = 2 ( x 1 ​ − x 2 ​ + x 3 ​ ) 2 + 2 3 ​ x 2 2 ​ + 2 3 ​ x 3 2 ​ + 3 x 2 ​ x 3 ​ = 2 ( x 1 ​ − x 2 ​ + x 3 ​ ) 2 + 2 3 ​ ( x 2 ​ + x 3 ​ ) 2 . ​ 因此 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 的规范形为 f ( y 1 ​ , y 2 ​ , y 3 ​ ) = y 1 2 ​ + y 2 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知\na\n是常数，且矩阵\nA=112237a0−a\n可经初等列变换化为矩阵\nB=10−1a11211\n。\n\n(Ⅰ) 求\na\n；\n\n(Ⅱ) 求满足\nAP=B\n的可逆矩阵\nP\n。",
    referenceAnswer: "【答案】 (Ⅰ) a = 2 (Ⅱ) 可逆矩阵 P = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ ，其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数，且 k 2 ​  = k 3 ​ 。 【解析】 (Ⅰ) 显然 r ( A ) = 2 ，因为初等变换不改变矩阵的秩，所以 r ( B ) = 2 ， 而 B = ​ 1 0 − 1 ​ a 1 1 ​ 2 1 1 ​ ​ → ​ 1 0 0 ​ a 1 a + 1 ​ 2 1 3 ​ ​ → ​ 1 0 0 ​ a 1 0 ​ 2 1 2 − a ​ ​ ，故 a = 2 。 (Ⅱ) A = ​ 1 1 2 ​ 2 3 7 ​ 2 0 − 2 ​ ​ ， B = ​ 1 0 − 1 ​ 2 1 1 ​ 2 1 1 ​ ​ ，令 P = ( X 1 ​ , X 2 ​ , X 3 ​ ) ， 由 ( A ⋮ B ) = ​ 1 1 2 ​ 2 3 7 ​ 2 0 − 2 ​ ⋮ ⋮ ⋮ ​ 1 0 − 1 ​ 2 1 1 ​ 2 1 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 6 − 2 0 ​ ⋮ ⋮ ⋮ ​ 3 − 1 0 ​ 4 − 1 0 ​ 4 − 1 0 ​ ​ 得 X 1 ​ = k 1 ​ ​ − 6 2 1 ​ ​ + ​ 3 − 1 0 ​ ​ = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ ​ ， X 2 ​ = k 2 ​ ​ − 6 2 1 ​ ​ + ​ 4 − 1 0 ​ ​ = ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ ​ ， X 3 ​ = k 3 ​ ​ − 6 2 1 ​ ​ + ​ 4 − 1 0 ​ ​ = ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ ， 则所求的可逆矩阵为 P = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ （ k 1 ​ , k 2 ​ , k 3 ​ 为任意常数且 k 2 ​  = k 3 ​ ）。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n与\nY\n相互独立，\nX\n的概率分布为\nP{X=1}=P{X=−1}=21\n，\nY\n服从参数为\nλ\n的泊松分布。令\nZ=XY\n\n(Ⅰ) 求\nCov(X,Z)\n；\n\n(Ⅱ) 求\nZ\n的概率分布。",
    referenceAnswer: "【答案】 (Ⅰ) Cov ( X , Z ) = λ (Ⅱ) Z 的概率分布为： P ( Z = k ) = ⎩ ⎨ ⎧ ​ 2 1 ​ ⋅ k ! λ k ​ e − λ , e − λ , 2 1 ​ ⋅ ( − k )! λ − k ​ e − λ , ​ k = 1 , 2 , 3 , ⋯ k = 0 , k = − 1 , − 2 , − 3 , ⋯ ​ 【解析】 (Ⅰ) 由于 E ( X ) = 0 ， E ( X 2 ) = 1 ， E ( Y ) = λ ，且 X 与 Y 相互独立，可得 Cov ( X , Z ) ​ = Cov ( X , X Y ) = E ( X 2 Y ) − E ( X ) E ( X Y ) = E ( X 2 ) E ( Y ) − [ E ( X ) ] 2 E ( Y ) = λ . ​ (Ⅱ) 已知 Y ∼ Poisson ( λ ) ，即 P ( Y = j ) = j ! λ j ​ e − λ , j = 0 , 1 , 2 , … 于是 Z 的所有可能取值为全体整数。其概率分布如下： 当 k 为正整数时， P ( Z = k ) ​ = P ( X Y = k ) = P ( X = 1 , Y = k ) = P ( X = 1 ) P ( Y = k ) = 2 1 ​ ⋅ k ! λ k ​ e − λ , k = 1 , 2 , 3 , … ​ 当 k 为负整数时， P ( Z = k ) ​ = P ( X Y = k ) = P ( X = − 1 , Y = − k ) = P ( X = − 1 ) P ( Y = − k ) = 2 1 ​ ⋅ ( − k )! λ − k ​ e − λ , k = − 1 , − 2 , − 3 , … ​ 当 k = 0 时， P ( Z = 0 ) ​ = P ( X Y = 0 ) = P ( X = − 1 , Y = 0 ) + P ( X = 1 , Y = 0 ) = 2 1 ​ e − λ + 2 1 ​ e − λ = e − λ . ​ 综上， P ( Z = k ) = ⎩ ⎨ ⎧ ​ 2 1 ​ ⋅ k ! λ k ​ e − λ , e − λ , 2 1 ​ ⋅ ( − k )! λ − k ​ e − λ , ​ k = 1 , 2 , 3 , … k = 0 , k = − 1 , − 2 , − 3 , … ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率密度为\n\nf(x;σ)=2σ1e−σ∣x∣,−∞x+∞,\n\n其中\nσ∈(0,+∞)\n为未知参数，\nX1,X2,⋯,Xn\n为来自总体\nX\n的简单随机样本。记\nσ\n的最大似然估计量为\nσ^\n\n(Ⅰ) 求\nσ^\n;\n\n(Ⅱ) 求\nE(σ^)\n,\nD(σ^)",
    referenceAnswer: "【答案】 (Ⅰ) σ ^ = n 1 ​ ∑ i = 1 n ​ ∣ X i ​ ∣ (Ⅱ) E ( σ ^ ) = σ , D ( σ ^ ) = n σ 2 ​ 【解析】 (Ⅰ) 似然函数为 L ( x 1 ​ , x 2 ​ , … , x n ​ ; σ ) = i = 1 ∏ n ​ f ( x i ​ ; σ ) = 2 n σ n 1 ​ exp ( − σ 1 ​ i = 1 ∑ n ​ ∣ x i ​ ∣ ) , − ∞ < x i ​ < + ∞ , i = 1 , 2 , … 于是 ln L = − n ln 2 − n ln σ − σ 1 ​ i = 1 ∑ n ​ ∣ x i ​ ∣. 令 d σ d ln L ​ = − σ n ​ + σ 2 1 ​ i = 1 ∑ n ​ ∣ x i ​ ∣ = 0 , 得 σ 的最大似然估计量为 σ ^ = n 1 ​ i = 1 ∑ n ​ ∣ X i ​ ∣. (Ⅱ) E ( σ ^ ) ​ = n 1 ​ i = 1 ∑ n ​ E ( ∣ X i ​ ∣ ) = E ( ∣ X ∣ ) = ∫ − ∞ + ∞ ​ ∣ x ∣ ⋅ 2 σ 1 ​ e − σ ∣ x ∣ ​ d x = ∫ 0 + ∞ ​ σ x ​ e − σ x ​ d x = − ∫ 0 + ∞ ​ x d e − σ x ​ = − x e − σ x ​ ​ 0 + ∞ ​ + ∫ 0 + ∞ ​ e − σ x ​ d x = σ . ​ D ( σ ^ ) ​ = n 2 1 ​ i = 1 ∑ n ​ D ( ∣ X i ​ ∣ ) = n D ( ∣ X ∣ ) ​ = n E [ ∣ X ∣ 2 ] − E 2 ( ∣ X ∣ ) ​ = n 1 ​ ( ∫ − ∞ + ∞ ​ ∣ x ∣ 2 ⋅ 2 σ 1 ​ e − σ ∣ x ∣ ​ d x − σ 2 ) = n 1 ​ ( ∫ 0 + ∞ ​ σ x 2 ​ e − σ x ​ d x − σ 2 ) = n 1 ​ ( ∫ 0 + ∞ ​ − x 2 d e − σ x ​ − σ 2 ) = n 1 ​ ( ∫ 0 + ∞ ​ 2 x e − σ x ​ d x − σ 2 ) = n 1 ​ ( 2 σ 2 − σ 2 ) = n σ 2 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2018_math1 = {
  id: P, year: Y,
  title: '2018 年全国硕士研究生招生考试 数学（一）',
  short: '2018 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2018_math1.length,
  qids: questions2018_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
