const P = 'paper-2014-math1'
const Y = 2014
const SRC = '#/notes/study_methods-math-math1-2014'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2014-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2014 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2014_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列曲线中有渐近线的是",
    options: [{ key: "A", text: "y = x + s in x" }, { key: "B", text: "y = x 2 + s in x" }, { key: "C", text: "y = x + s in x 1 ​" }, { key: "D", text: "y = x 2 + s in x 1 ​" }],
    answer: ["C"],
    explain: "正确答案： C a = x → ∞ lim ​ x f ( x ) ​ = x → ∞ lim ​ x x + s in x 1 ​ ​ = x → ∞ lim ​ ( 1 + x 1 ​ s in x 1 ​ ) = 1 b = x → ∞ lim ​ [ f ( x ) − a x ] = x → ∞ lim ​ [ x + s in x 1 ​ − x ] = x → ∞ lim ​ s in x 1 ​ = 0 ∴ y = x 是 y = x + s in x 1 ​ 的渐近线"
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n具有2阶导数，\ng(x)=f(0)(1−x)+f(1)x\n，则在区间\n[0,1]\n上()",
    options: [{ key: "A", text: "当 f ′ ( x ) ≥ 0 时， f ( x ) ≥ g ( x ) ." }, { key: "B", text: "当 f ′ ( x ) ≥ 0 时， f ( x ) ≤ g ( x )" }, { key: "C", text: "当 f ′′ ( x ) ≥ 0 时， f ( x ) ≥ g ( x ) ." }, { key: "D", text: "当 f ′′ ( x ) ≥ 0 时， f ( x ) ≤ g ( x )" }],
    answer: ["D"],
    explain: "正确答案： D 当 f ′′ ( x ) ≥ 0 时， f ( x ) 是凹函数，而 g ( x ) 是连接 ( 0 , f ( 0 )) 与 ( 1 , f ( 1 )) 的直线段，故 f ( x ) ≤ g ( x )"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf(x,y)\n是连续函数，则\n∫01dy∫−1−y21−yf(x,y)dx=",
    options: [{ key: "A", text: "∫ 0 1 ​ d x ∫ 1 x − 1 ​ f ( x , y ) d y + ∫ − 1 0 ​ d x ∫ 0 1 − x 2 ​ ​ f ( x , y ) d y" }, { key: "B", text: "∫ 0 1 ​ d x ∫ 0 1 − x ​ f ( x , y ) d y + ∫ − 1 0 ​ d x ∫ − 1 − x 2 ​ 0 ​ f ( x , y ) d y" }, { key: "C", text: "∫ 0 2 π ​ ​ d θ ∫ 0 cos θ + s in θ 1 ​ ​ f ( rcos θ , rs in θ ) d r + ∫ 2 π ​ π ​ d θ ∫ 0 1 ​ f ( rcos θ , rs in θ ) d r" }, { key: "D", text: "∫ 0 2 π ​ ​ d θ ∫ 0 cos θ + s in θ 1 ​ ​ f ( rcos θ , rs in θ ) r d r + ∫ 2 π ​ π ​ d θ ∫ 0 1 ​ f ( rcos θ , rs in θ ) r d r" }],
    answer: ["D"],
    explain: "正确答案： D 积分区域为 0 ≤ y ≤ 1 ， − 1 − y 2 ​ ≤ x ≤ 1 − y ，用极坐标表示， D 1 ​ ： 2 π ​ ≤ θ ≤ π ， 0 ≤ r ≤ 1 ； D 2 ​ ： 0 ≤ θ ≤ 2 π ​ ， 0 ≤ r ≤ cos θ + s in θ 1 ​"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若\n∫−ππ(x−a1cosx−b1sinx)2dx=mina,b∈R{∫−ππ(x−acosx−bsinx)2dx}\n，则\na1cosx+b1sinx=",
    options: [{ key: "A", text: "2 π sin x" }, { key: "B", text: "2 cos x" }, { key: "C", text: "2 π sin x" }, { key: "D", text: "2 π cos x" }],
    answer: ["A"],
    explain: "正确答案： A 令 Z ( a , b ) = ∫ − π π ​ ( x − a cos x − b sin x ) 2 d x ，求偏导并令其为 0： { Z a ′ ​ = 2 ∫ − π π ​ ( x − a cos x − b sin x ) ( − cos x ) d x = 0 Z b ′ ​ = 2 ∫ − π π ​ ( x − a cos x − b sin x ) ( − sin x ) d x = 0 ​ 由第一式得 a = 0 ，由第二式得 b = ∫ 0 π ​ sin 2 x d x ∫ 0 π ​ x sin x d x ​ = 2 ，故 a 1 ​ cos x + b 1 ​ sin x = 2 sin x 。"
  }),
  base(5, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "行列式\n0a0ca0c0b0d00b0d=",
    options: [{ key: "A", text: "( a d − b c ) 2" }, { key: "B", text: "− ( a d − b c ) 2" }, { key: "C", text: "a 2 d 2 − b 2 c 2" }, { key: "D", text: "b 2 c 2 − a 2 d 2" }],
    answer: ["B"],
    explain: "正确答案： B 按第4行展开： ​ = − c ⋅ b ( − 1 ) 3 + 2 ​ a c ​ b d ​ ​ + d ⋅ a ⋅ ( − 1 ) 2 + 1 ​ a c ​ b d ​ ​ = ( a d − b c ) ⋅ b c − a d ( a d − b c ) = ( a d − b c ) ( b c − a d ) = − ( a d − b c ) 2 ​"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα1\n，\nα2\n，\nα3\n均为 3 维向量，则对任意常数\nk\n，\nl\n，向量组\nα1+kα3\n，\nα2+lα3\n线性无关是向量组\nα1\n，\nα2\n，\nα3\n线性无关的（ ）",
    options: [{ key: "A", text: "必要非充分条件." }, { key: "B", text: "充分非必要条件." }, { key: "C", text: "充分必要条件." }, { key: "D", text: "既非充分也非必要条件。" }],
    answer: ["A"],
    explain: "正确答案： A 由 ( α 1 ​ + k α 3 ​ , α 2 ​ + l α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 1 0 k ​ 0 1 l ​ ​ 可知，当 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性无关时，向量组 α 1 ​ + k α 3 ​ 、 α 2 ​ + l α 3 ​ 线性无关。 反之不成立。例如，当 α 3 ​ = 0 ，且 α 1 ​ 与 α 2 ​ 线性无关时， α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性相关。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机事件\nA\n与\nB\n相互独立，且\nP(B)=0.5\n，\nP(A−B)=0.3\n，则\nP(B−A)=()",
    options: [{ key: "A", text: "0.1" }, { key: "B", text: "0.2" }, { key: "C", text: "0.3" }, { key: "D", text: "0.4" }],
    answer: ["B"],
    explain: "正确答案： B P ( A − B ) = P ( A ) − P ( A B ) ，因为 A 与 B 相互独立，所以 P ( A B ) = P ( A ) P ( B ) ，则 P ( A − B ) = P ( A ) − P ( A ) P ( B ) = P ( A ) [ 1 − P ( B )] = 0.3 ，解得 P ( A ) = 0.6 ， P ( A B ) = 0.6 × 0.5 = 0.3 ，故 P ( B − A ) = P ( B ) − P ( A B ) = 0.5 − 0.3 = 0.2"
  }),
  base(8, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设连续性随机变量\nX1\n与\nX2\n相互独立，且方差均存在，\nX1\n与\nX2\n的概率密度分别为\nf1(x)\n与\nf2(x)\n，随机变量\nY1\n的概率密度为\nfY1(y)=21[f1(y)+f2(y)]\n，随机变量\nY2=21(X1+X2)\n。则（ ）",
    options: [{ key: "A", text: "E Y 1 ​ > E Y 2 ​ ， D Y 1 ​ > D Y 2 ​" }, { key: "B", text: "E Y 1 ​ = E Y 2 ​ ， D Y 1 ​ = D Y 2 ​" }, { key: "C", text: "E Y 1 ​ = E Y 2 ​ ， D Y 1 ​ < D Y 2 ​" }, { key: "D", text: "E Y 1 ​ = E Y 2 ​ ， D Y 1 ​ > D Y 2 ​" }],
    answer: ["D"],
    explain: "正确答案： D 首先，计算 E Y 1 ​ ： E Y 1 ​ = ∫ − ∞ + ∞ ​ y [ 2 1 ​ f 1 ​ ( y ) + 2 1 ​ f 2 ​ ( y ) ] d y = 2 1 ​ ∫ − ∞ + ∞ ​ y f 1 ​ ( y ) d y + 2 1 ​ ∫ − ∞ + ∞ ​ y f 2 ​ ( y ) d y = 2 1 ​ E X 1 ​ + 2 1 ​ E X 2 ​ 接着，计算 E Y 2 ​ ： E Y 2 ​ = E [ 2 1 ​ ( X 1 ​ + X 2 ​ ) ] = 2 1 ​ E X 1 ​ + 2 1 ​ E X 2 ​ 因此， E Y 1 ​ = E Y 2 ​ 接下来，计算 E Y 1 2 ​ ： E Y 1 2 ​ = ∫ − ∞ + ∞ ​ y 2 [ 2 1 ​ f 1 ​ ( y ) + 2 1 ​ f 2 ​ ( y ) ] d y = 2 1 ​ E X 1 2 ​ + 2 1 ​ E X 2 2 ​ 然后，计算 D Y 1 ​ ： D Y 1 ​ = E Y 1 2 ​ − ( E Y 1 ​ ) 2 = 2 1 ​ E X 1 2 ​ + 2 1 ​ E X 2 2 ​ − ( 2 1 ​ E X 1 ​ + 2 1 ​ E X 2 ​ ) 2 = 2 1 ​ E X 1 2 ​ + 2 1 ​ E X 2 2 ​ − 4 1 ​ ( E X 1 ​ ) 2 − 4 1 ​ ( E X 2 ​ ) 2 − 2 1 ​ E X 1 ​ E X 2 ​ = 4 1 ​ D X 1 ​ + 4 1 ​ D X 2 ​ + 4 1 ​ E X 1 2 ​ + 4 1 ​ E X 2 2 ​ − 2 1 ​ E X 1 ​ E X 2 ​ = 4 1 ​ D X 1 ​ + 4 1 ​ D X 2 ​ + 4 1 ​ [ E X 1 2 ​ + E X 2 2 ​ − 2 E ( X 1 ​ X 2 ​ ) ] = 4 1 ​ D X 1 ​ + 4 1 ​ D X 2 ​ + 4 1 ​ E ( X 1 ​ − X 2 ​ ) 2 最后，计算 D Y 2 ​ ： D Y 2 ​ = D [ 2 1 ​ ( X 1 ​ + X 2 ​ ) ] = 4 1 ​ D X 1 ​ + 4 1 ​ D X 2 ​ 由于 E ( X 1 ​ − X 2 ​ ) 2 > 0 ，可得： D Y 1 ​ > D Y 2 ​ 【答案】D"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲面\nz=x2(1−siny)+y2(1−sinx)\n在点\n(1,0,1)\n处的切平面方程为 ______。",
    answerText: "】 2 x − y − z − 1 = 0 【",
    referenceAnswer: "【答案】 2 x − y − z − 1 = 0 【解析】 曲面 z = x 2 ( 1 − sin y ) + y 2 ( 1 − sin x ) 在点 ( 1 , 0 , 1 ) 处的切平面方程为 ______。 在点 ( 1 , 0 , 1 ) 处， z x ​ ​ ( 1 , 0 , 1 ) ​ = ( 1 , 0 , 1 ) 2 x ( 1 − sin y ) − y 2 cos x ​ = 2 , z y ​ ​ ( 1 , 0 , 1 ) ​ = [ − x 2 cos y + 2 y ( 1 − sin x ) ] ( 1 , 0 , 1 ) ​ = − 1. 切平面方程为 z x ​ ( x − 1 ) + z y ​ ( y − 0 ) + ( − 1 ) ( z − 1 ) = 0 , 即 2 x − y − z − 1 = 0.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nf(x)\n是周期为\n4\n的可导奇函数，且\nf′(x)=2(x−1)\n，\nx∈[0,2]\n，则\nf(7)=",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 f ( x ) 是周期为 4 的可导函数，因此 f ( 7 ) = f ( 3 ) = f ( − 1 ) = − f ( 1 ) ，且 f ( 0 ) = 0 。 又因为 f ′ ( x ) = 2 ( x − 1 ) ，所以 f ( x ) = x 2 − 2 x + c 。将 f ( 0 ) = 0 代入得 c = 0 ，于是 f ( x ) = x 2 − 2 x ，其中 x ∈ [ 0 , 2 ] 。 因此 f ( 1 ) = − 1 ，从而 f ( 7 ) = − f ( 1 ) = 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\nxy′+y(lnx−lny)=0\n满足条件\ny(1)=e\n的解为\ny=",
    answerText: "】 y = x e 【",
    referenceAnswer: "【答案】 y = x e 【解析】 原方程为 x y ′ + y ( ln x − ln y ) = 0 ，即 x y ′ + y ln y x ​ = 0 。 两边同除以 x ，得 y ′ + x y ​ ln y x ​ = 0 令 u = x y ​ ，则 y = xu ，且 d x d y ​ = u + x d x d u ​ 代入上式，得 u + x d x d u ​ + u ln u 1 ​ = 0 整理得 u ( ln u − 1 ) d u ​ = x 1 ​ d x 两端积分，得 ∫ u ( ln u − 1 ) d u ​ = ∫ x 1 ​ d x + ln C 注意到 ∫ u ( ln u − 1 ) d u ​ = ∫ ln u − 1 d ( ln u − 1 ) ​ 所以 ln ∣ ln u − 1∣ = ln ∣ x ∣ + ln C 即 ln u − 1 = C x u = e C x + 1 y = x e C x + 1 代入初值条件 y ( 1 ) = e ，得 e = 1 ⋅ e C + 1 ⇒ C = 0 因此特解为 y = x e 1 = x e",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设 L 是柱面\nx2+y2=1\n与平面\ny+z=0\n的交线，从 z 轴正向往 z 轴负向看去为逆时针方向，则曲线积分\n∫Lzdx+ydz=",
    answerText: "】 π 【",
    referenceAnswer: "【答案】 π 【解析】 已知曲线 \\(L \\) 的参数方程为： ⎩ ⎨ ⎧ ​ x = cos t y = sin t z = − sin t ​ t ∈ [ 0 , 2 π ] 计算曲线积分： ∫ L ​ z d x + y d z 代入参数表达式： d x = − sin t d t , d z = − cos t d t z = − sin t , y = sin t 代入积分： ∫ L ​ z d x + y d z = ∫ 0 2 π ​ [ ( − sin t ) ( − sin t ) + sin t ⋅ ( − cos t ) ] d t = ∫ 0 2 π ​ ( sin 2 t − sin t cos t ) d t 分别计算两项： 对 \\(\\sin^2 t\\) 项： ∫ 0 2 π ​ sin 2 t d t = ∫ 0 2 π ​ 2 1 − cos 2 t ​ d t = 2 1 ​ ∫ 0 2 π ​ 1 d t − 2 1 ​ ∫ 0 2 π ​ cos 2 t d t = 2 1 ​ ⋅ 2 π − 0 = π 对 \\(\\sin t \\cos t\\) 项： ∫ 0 2 π ​ sin t cos t d t = ∫ 0 2 π ​ 2 1 ​ sin 2 t d t = 0 因此： ∫ L ​ z d x + y d z = π + 0 = π 积分结果为 \\(\\pi\\)。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二次型\nf(x1,x2,x3)=x12−x22+2ax1x3+4x2x3\n的负惯性指数是\n1\n，则\na\n的取值范围是（ ）。",
    answerText: "】 − 2 ≤ a ≤ 2 【",
    referenceAnswer: "【答案】 − 2 ≤ a ≤ 2 【解析】 考虑二次型矩阵 A = ​ 1 0 a ​ 0 − 1 2 ​ a 2 0 ​ ​ 已知其负惯性指数为 1 ，设特征值 λ 1 ​ < 0 ，其余 λ 2 ​ ≥ 0 ， λ 3 ​ ≥ 0 。 由特征值性质及行列式计算可得 ∣ A ∣ = a 2 − 4 分析可知，当 − 2 ≤ a ≤ 2 时，满足负惯性指数为 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设总体\nX\n的概率密度为\n\nf(x;θ)=⎩⎨⎧3θ22x,0,θx2θ其他\n\n其中\nθ\n是未知参数，\nX1,X2,⋯,Xn\n为来自总体\nX\n的简单随机样本。若\nc∑i=1nXi2\n是\nθ2\n的无偏估计，则\nc=\n______。",
    answerText: "】 5 n 2 ​ 【",
    referenceAnswer: "【答案】 5 n 2 ​ 【解析】 E ( X 2 ) = ∫ θ 2 θ ​ x 2 ⋅ 3 θ 2 2 x ​ d x = 3 θ 2 2 ​ ∫ θ 2 θ ​ x 3 d x = 6 θ 2 1 ​ ⋅ 15 θ 4 = 2 5 ​ θ 2 。 E ( c ∑ i = 1 n ​ X i 2 ​ ) = c ⋅ n ⋅ 2 5 ​ θ 2 ，令其等于 θ ，解得 c = 5 n 2 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nx→+∞limx2ln(1+x1)∫1x[t2(et1−1)−t]dt",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 【解】 x → + ∞ lim ​ x 2 ln ( 1 + x 1 ​ ) ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ = x → + ∞ lim ​ x ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ ⋅ ln ( 1 + x 1 ​ ) x 1 ​ ​ 注意到 x → + ∞ lim ​ ln ( 1 + x 1 ​ ) x 1 ​ ​ = 1 , 因此原式化为 x → + ∞ lim ​ x ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ . 由洛必达法则， x → + ∞ lim ​ x ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ = x → + ∞ lim ​ [ x 2 ( e x 1 ​ − 1 ) − x ] . 令 t = x 1 ​ ，当 x → + ∞ 时 t → 0 + ，有 x → + ∞ lim ​ x 2 ( e x 1 ​ − 1 − x 1 ​ ) = t → 0 lim ​ t 2 e t − 1 − t ​ . 再次使用洛必达法则， t → 0 lim ​ t 2 e t − 1 − t ​ = t → 0 lim ​ 2 t e t − 1 ​ = 2 1 ​ . 因此，原极限值为 2 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\ny=f(x)\n由方程\n\ny3+xy2+x2y+6=0\n\n确定，求\nf(x)\n的极值。",
    referenceAnswer: "【答案】 函数 f ( x ) 在 x = 1 处取得极小值 − 2 . 【解析】 【解】由 y 3 + x y 2 + x 2 y + 6 = 0 得 3 y 2 d x d y ​ + y 2 + 2 x y d x d y ​ + 2 x y + x 2 d x d y ​ = 0 , 解得 d x d y ​ = − x 2 + 2 x y + 3 y 2 2 x y + y 2 ​ . 由 d x d y ​ = 0 得 y = − 2 x ，代入原式得 { x = 1 , y = − 2. ​ 进一步求二阶导数： d x 2 d 2 y ​ = − ( x 2 + 2 x y + 3 y 2 ) 2 ( 2 y + 2 x d x d y ​ + 2 y d x d y ​ ) ( x 2 + 2 x y + 3 y 2 ) − ( 2 x y + y 2 ) ( 2 x + 2 y + 2 x d x d y ​ + 6 y d x d y ​ ) ​ . 将 { x = 1 , y = − 2 ​ 代入得 d x 2 d 2 y ​ = 9 4 ​ > 0 ，故 x = 1 为极小点，极小值为 y = − 2 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(u)\n二阶连续可导，\nz=f(excosy)\n满足\n\n∂x2∂2z+∂y2∂2z=(4z+excosy)e2x,\n\n若\nf(0)=0\n，\nf′(0)=0\n，求\nf(u)\n的表达式。",
    referenceAnswer: "【答案】 f ( u ) = − 16 1 ​ ( e − 2 u − e 2 u ) − 4 1 ​ u 【解析】 首先，计算一阶偏导数： ∂ x ∂ z ​ = e x cos y ⋅ f ′ , ∂ y ∂ z ​ = − e x sin y ⋅ f ′ . 接着，计算二阶偏导数： ∂ x 2 ∂ 2 z ​ = e x cos y ⋅ f ′ + e 2 x cos 2 y ⋅ f ′′ , ∂ y 2 ∂ 2 z ​ = − e x cos y ⋅ f ′ + e 2 x sin 2 y ⋅ f ′′ . 将两者相加，得到： ∂ x 2 ∂ 2 z ​ + ∂ y 2 ∂ 2 z ​ = e 2 x f ′′ . 令 u = e x cos y ，由题设条件 ∂ x 2 ∂ 2 z ​ + ∂ y 2 ∂ 2 z ​ = ( 4 z + e x cos y ) e 2 x , 代入得： f ′′ ( u ) = 4 f ( u ) + u , 即： f ′′ ( u ) − 4 f ( u ) = u . 解此常微分方程，得通解： f ( u ) = C 1 ​ e − 2 u + C 2 ​ e 2 u − 4 1 ​ u . 由初始条件 f ( 0 ) = 0 ， f ′ ( 0 ) = 0 ，代入得方程组： { C 1 ​ + C 2 ​ = 0 , − 2 C 1 ​ + 2 C 2 ​ − 4 1 ​ = 0. ​ 解得： C 1 ​ = − 16 1 ​ , C 2 ​ = 16 1 ​ . 因此，函数表达式为： f ( u ) = − 16 1 ​ ( e − 2 u − e 2 u ) − 4 1 ​ u .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nΣ\n为曲面\nz=x2+y2 (z≤1)\n的上侧，计算曲面积分\n\nI=∬Σ(x−1)3dydz+(y−1)3dzdx+(z−1)dxdy.",
    referenceAnswer: "【答案】 − 4 π 【解析】 【解】令 ∑ 0 ​ : z = 1 ( x 2 + y 2 ≤ 1 ) ，取下侧，其中 ∑ 与 ∑ 0 ​ 围成的几何体为 Ω 。 由高斯公式得： ​ ∬ ​ ∑ + ∑ 0 ​ ​ ( x − 1 ) 3 d y d z + ( y − 1 ) 3 d z d x + ( z − 1 ) d x d y = − ∭ Ω ​ [ 3 ( x − 1 ) 2 + 3 ( y − 1 ) 2 + 1 ] d v = − ∭ Ω ​ [ 3 ( x 2 + y 2 ) − 6 x − 6 y + 7 ] d v = − ∭ Ω ​ [ 3 ( x 2 + y 2 ) + 7 ] d v = − ∫ 0 1 ​ d z ∬ x 2 + y 2 ≤ z ​ [ 3 ( x 2 + y 2 ) + 7 ] d v = − ∫ 0 1 ​ d z ∫ 0 2 π ​ d θ ∫ 0 z ​ ​ ( 3 r 3 + 7 r ) d r ​ 计算得： = − 2 π ∫ 0 1 ​ ( 4 3 ​ z 2 + 2 7 ​ z ) d z = − 2 π ( 4 1 ​ + 4 7 ​ ) = − 4 π 而 ∬ ∑ 0 ​ ​ ( x − 1 ) 3 d y d z + ( y − 1 ) 3 d z d x + ( z − 1 ) d x d y = ∬ ∑ 0 ​ ​ ( z − 1 ) d x d y = 0 故 I = ∬ ∑ ​ ( x − 1 ) 3 d y d z + ( y − 1 ) 3 d z d x + ( z − 1 ) d x d y = − 4 π",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设数列\n{an}\n，\n{bn}\n满足\n0an2π,0bn2π,cosan−an=cosbn\n，\n且级数\nn=1∑∞bn\n收敛。\n\n（Ⅰ）证明\nn→∞liman=0\n；\n\n（Ⅱ）证明级数\nn=1∑∞bnan\n收敛。",
    referenceAnswer: "【答案】 见解析 【解析】 （Ⅰ）由 cos a n ​ − a n ​ = cos b n ​ 得 a n ​ = cos a n ​ − cos b n ​ . 因为 a n ​ > 0 ，所以 a n ​ = cos a n ​ − cos b n ​ > 0 , 故 0 < a n ​ < b n ​ . 又因为 ∑ n = 1 ∞ ​ b n ​ 收敛，所以 ∑ n = 1 ∞ ​ a n ​ 收敛，故 n → ∞ lim ​ a n ​ = 0. （Ⅱ） 方法一 ： 由 a n ​ = cos a n ​ − cos b n ​ 得 b n ​ a n ​ ​ = b n ​ cos a n ​ − cos b n ​ ​ = − b n ​ 2 sin ( 2 a n ​ + b n ​ ​ ) sin ( 2 a n ​ − b n ​ ​ ) ​ ∼ 2 b n ​ b n 2 ​ − a n 2 ​ ​ . 因为 0 ⩽ 2 b n ​ b n 2 ​ − a n 2 ​ ​ ⩽ 2 b n ​ ​ , 且 ∑ n = 1 ∞ ​ b n ​ 收敛，所以 ∑ n = 1 ∞ ​ 2 b n ​ b n 2 ​ − a n 2 ​ ​ 收敛。 由正项级数比较审敛法得 ∑ n = 1 ∞ ​ b n ​ a n ​ ​ 收敛。 方法二 ： 由 n → ∞ lim ​ b n ​ b n ​ a n ​ ​ ​ ​ = n → ∞ lim ​ b n 2 ​ a n ​ ​ = n → ∞ lim ​ b n 2 ​ 1 − cos b n ​ ​ ⋅ 1 − cos b n ​ a n ​ ​ = 2 1 ​ n → ∞ lim ​ 1 − cos b n ​ a n ​ ​ = 2 1 ​ n → ∞ lim ​ a n ​ + 1 − cos b n ​ a n ​ ​ = 2 1 ​ , ​ 且级数 ∑ n = 1 ∞ ​ b n ​ 收敛，根据正项级数比较审敛法得级数 ∑ n = 1 ∞ ​ b n ​ a n ​ ​ 收敛。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11分)\n\n设\nA=101−2123−10−41−3\n，\nE\n为3阶单位矩阵。\n\n(Ⅰ)求方程\nAx=0\n的一个基础解系；\n\n(Ⅱ)求满足\nAB=E\n的所有矩阵\nB\n.",
    referenceAnswer: "【答案】 (Ⅰ) 方程 A x = 0 的一个基础解系为 ξ = ( − 1 , 2 , 3 , 1 ) T 。 (Ⅱ) 满足 A B = E 的所有矩阵 B 为 B = ​ − k 1 ​ + 2 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ − k 2 ​ + 6 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ − k 3 ​ − 1 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ ( k 1 ​ , k 2 ​ , k 3 ​ ) . 【解析】 （Ⅰ） 对矩阵 A 作初等行变换： A = ​ 1 0 1 ​ − 2 1 2 ​ 3 − 1 0 ​ − 4 1 − 3 ​ ​ → ​ 1 0 0 ​ − 2 1 4 ​ 3 − 1 − 3 ​ − 4 1 1 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 3 − 1 1 ​ − 4 1 − 3 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 0 0 1 ​ 5 − 2 − 3 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 − 2 − 3 ​ ​ . 则方程组 AX = 0 的一个基础解系为 ξ ​ = ( − 1 , 2 , 3 , 1 ) T . （Ⅱ） 方法一 由增广矩阵 ( A ⋮ E ) 出发： ( A ⋮ E ) = ​ 1 0 1 ​ − 2 1 2 ​ 3 − 1 0 ​ − 4 1 − 3 ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 2 1 4 ​ 3 − 1 − 3 ​ − 4 1 1 ​ 1 0 − 1 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 3 − 1 1 ​ − 4 1 − 3 ​ 1 0 − 1 ​ 0 1 − 4 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 0 0 1 ​ 5 − 2 − 3 ​ 4 − 1 − 1 ​ 12 − 3 − 4 ​ − 3 1 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 − 2 − 3 ​ 2 − 1 − 1 ​ 6 − 3 − 4 ​ − 1 1 1 ​ ​ . 得 B = ​ 2 k 1 ​ + 6 k 2 ​ − k 3 ​ − 1 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ ( k 1 ​ , k 2 ​ , k 3 ​ ) . 方法二 令 B = ( X 1 ​ , X 2 ​ , X 3 ​ ) ， E = ( e 1 ​ , e 2 ​ , e 3 ​ ) ，则 AB = E 等价于 AX 1 ​ = e 1 ​ , AX 2 ​ = e 2 ​ , AX 3 ​ = e 3 ​ . 方程组 AX 1 ​ = e 1 ​ 的通解为 X 1 ​ = k 1 ​ ​ − 1 2 3 1 ​ ​ + ​ 2 − 1 − 1 0 ​ ​ = ​ − k 1 ​ + 2 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ ​ ( k 1 ​ ) . 方程组 AX 2 ​ = e 2 ​ 的通解为 X 2 ​ = k 2 ​ ​ − 1 2 3 1 ​ ​ + ​ 6 − 3 − 4 0 ​ ​ = ​ − k 2 ​ + 6 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ ​ ( k 2 ​ ) . 方程组 AX 3 ​ = e 3 ​ 的通解为 X 3 ​ = k 3 ​ ​ − 1 2 3 1 ​ ​ + ​ − 1 1 1 0 ​ ​ = ​ − k 3 ​ − 1 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ ( k 3 ​ ) . 故 B = ​ − k 1 ​ + 2 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ − k 2 ​ + 6 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ − k 3 ​ − 1 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ ( k 1 ​ , k 2 ​ , k 3 ​ ) . 方法三 令 B = ​ x 1 ​ x 4 ​ x 7 ​ x 10 ​ ​ x 2 ​ x 5 ​ x 8 ​ x 11 ​ ​ x 3 ​ x 6 ​ x 9 ​ x 12 ​ ​ ​ . 由 AB = E 得 ⎩ ⎨ ⎧ ​ x 1 ​ − 2 x 4 ​ + 3 x 7 ​ − 4 x 10 ​ = 1 , x 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分11分)\n\n证明\nn\n阶矩阵\n11⋮111⋮1⋯⋯⋯11⋮1\n与\n00⋮0⋯⋯⋮⋯00⋮012⋮n\n相似。",
    referenceAnswer: "【答案】 见解析 【解析】 【证明】 令 A = ​ 1 1 ⋮ 1 ​ 1 1 ⋮ 1 ​ ⋯ ⋯ ⋯ ​ 1 1 ⋮ 1 ​ ​ ， B = ​ 0 0 ⋮ 0 ​ ⋯ ⋯ ⋯ ​ 0 0 ⋮ 0 ​ 1 2 ⋮ n ​ ​ 由 ∣ λ E − A ∣ = 0 得 A 的特征值为 λ 1 ​ = ⋯ = λ n − 1 ​ = 0 ， λ n ​ = n ， 由 ∣ λ E − B ∣ = 0 得 B 的特征值为 λ 1 ​ = ⋯ = λ n − 1 ​ = 0 ， λ n ​ = n ， 因为 A 2 = A ，所以 A 可对角化； 因为 r ( 0 E − B ) = r ( B ) = 1 ，所以 B 可对角化， 因为 A , B 特征值相同且都可对角化，所以 A ∼ B 。 方法点评：本题考查矩阵相似。 设 A , B 为两个 n 阶矩阵，若 A ∼ B ，则 A , B 的特征值相同；反之，若 A , B 的特征值相同，两矩阵不一定相似，即特征值相同是两个矩阵相似的必要而非充分条件。 注意如下结论： （1）若 A , B 特征值相同，且 A , B 都可相似对角化，则 A ∼ B ； （2）若 A , B 特征值相同，但 A , B 中一个可相似对角化，另一个不可相似对角化，则两矩阵一定不相似。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n的概率分布为\nP{X=1}=P{X=2}=21\n．在给定\nX=i\n的条件下，随机变量\nY\n服从均匀分布\nU(0,i) (i=1,2)\n．\n\n（Ⅰ）求\nY\n的分布函数\nFY(y)\n；\n\n（Ⅱ）求\nE(Y)\n。",
    referenceAnswer: "【答案】 （Ⅰ）Y的分布函数为 F Y ​ ( y ) = ⎩ ⎨ ⎧ ​ 0 , 4 3 y ​ , 2 1 ​ + 4 y ​ , 1 , ​ y < 0 , 0 ≤ y < 1 , 1 ≤ y < 2 , y ≥ 2. ​ （Ⅱ） E ( Y ) = 4 3 ​ . 【解析】 （Ⅰ） 求 Y 的分布函数 F Y ​ ( y ) 分布函数 F Y ​ ( y ) = P { Y ≤ y } ，根据全概率公式，结合 X 的取值情况展开： F Y ​ ( y ) ​ = P { X = 1 } P { Y ≤ y ∣ X = 1 } + P { X = 2 } P { Y ≤ y ∣ X = 2 } = 2 1 ​ P { Y ≤ y ∣ X = 1 } + 2 1 ​ P { Y ≤ y ∣ X = 2 } ​ 当 y < 0 时， P { Y ≤ y ∣ X = 1 } = 0 ， P { Y ≤ y ∣ X = 2 } = 0 ，故 F Y ​ ( y ) = 0 。 当 0 ≤ y < 1 时， Y ∣ X = 1 ∼ U ( 0 , 1 ) ，则 P { Y ≤ y ∣ X = 1 } = y ； Y ∣ X = 2 ∼ U ( 0 , 2 ) ，则 P { Y ≤ y ∣ X = 2 } = 2 y ​ 。 因此 F Y ​ ( y ) = 2 1 ​ ⋅ y + 2 1 ​ ⋅ 2 y ​ = 4 3 y ​ 。 当 1 ≤ y < 2 时， P { Y ≤ y ∣ X = 1 } = 1 ； P { Y ≤ y ∣ X = 2 } = 2 y ​ 。 因此 F Y ​ ( y ) = 2 1 ​ ⋅ 1 + 2 1 ​ ⋅ 2 y ​ = 2 1 ​ + 4 y ​ 。 当 y ≥ 2 时， P { Y ≤ y ∣ X = 1 } = 1 ， P { Y ≤ y ∣ X = 2 } = 1 ，故 F Y ​ ( y ) = 1 。 综上， Y 的分布函数为： F Y ​ ( y ) = ⎩ ⎨ ⎧ ​ 0 , 4 3 y ​ , 2 1 ​ + 4 y ​ , 1 , ​ y < 0 , 0 ≤ y < 1 , 1 ≤ y < 2 , y ≥ 2. ​ （Ⅱ） 求 E ( Y ) 可先求 Y 的概率密度函数 f Y ​ ( y ) ，对 F Y ​ ( y ) 求导： 当 0 < y < 1 时， f Y ​ ( y ) = 4 3 ​ ； 当 1 < y < 2 时， f Y ​ ( y ) = 4 1 ​ ； 其余区间 f Y ​ ( y ) = 0 。 根据期望的定义 E ( Y ) = ∫ − ∞ + ∞ ​ y f Y ​ ( y ) d y ，计算得： E ( Y ) ​ = ∫ 0 1 ​ y ⋅ 4 3 ​ d y + ∫ 1 2 ​ y ⋅ 4 1 ​ d y = 4 3 ​ ⋅ 2 y 2 ​ ​ 0 1 ​ + 4 1 ​ ⋅ 2 y 2 ​ ​ 1 2 ​ = 8 3 ​ + 8 1 ​ ⋅ ( 4 − 1 ) = 8 3 ​ + 8 3 ​ = 8 6 ​ = 4 3 ​ ​ 或者，利用全期望公式 E ( Y ) = E [ E ( Y ∣ X )] ： E ( Y ∣ X = 1 ) = 2 0 + 1 ​ = 2 1 ​ （均匀分布 U ( 0 , 1 ) 的期望）； E ( Y ∣ X = 2 ) = 2 0 + 2 ​ = 1 （均匀分布 U ( 0 , 2 ) 的期望）； 因此： E ( Y ) ​ = P { X = 1 } E ( Y ∣ X = 1 ) + P { X = 2 } E ( Y ∣ X = 2 ) = 2 1 ​ ⋅ 2 1 ​ + 2 1 ​ ⋅ 1 = 4 1 ​ + 2 1 ​ = 4 3 ​ ​ 最终，（Ⅰ）分布函数如上述分段函数；（Ⅱ） E ( Y ) = 4 3 ​ ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "本题满分 11 分\n\n设总体\nX\n的分布函数为\n\nF(x)={0,1−e−θx2,x0x≥0\n\n其中\nθ>0\n为未知参数，\nX1,X2,⋯,Xn\n为来自总体\nX\n的简单随机样本。\n\n(I) 求\nEX\n及\nEX2\n。\n\n(II) 求\nθ\n的最大似然估计量\nθ^\n。\n\n(III) 是否存在实数\na\n，使得对任意的\nε>0\n，都有\nlimn→∞P{∣θ^−a∣≥ε}=0\n？",
    referenceAnswer: "【答案】 (I) EX = 2 π θ ​ ​ , E X 2 = θ (II) θ ^ = n 1 ​ ∑ i = 1 n ​ X i 2 ​ (III) 存在实数 a = θ 【解析】 （I）概率密度函数为 f ( x ) = ⎩ ⎨ ⎧ ​ 0 , θ 2 x ​ e − θ x 2 ​ , ​ x ≤ 0 , x > 0. ​ 计算期望： EX = ∫ − ∞ + ∞ ​ x f ( x ) d x = 2 ∫ 0 + ∞ ​ θ x 2 ​ e − θ x 2 ​ d x . 令 t = θ x 2 ​ ，则 EX = 2 ∫ 0 + ∞ ​ t e − t ⋅ 2 t ​ θ ​ ​ d t = θ ​ ∫ 0 + ∞ ​ t ​ e − t d t = θ ​ Γ ( 2 1 ​ + 1 ) = 2 π θ ​ ​ . 计算二阶矩： E X 2 = ∫ − ∞ + ∞ ​ x 2 f ( x ) d x = 2 ∫ 0 + ∞ ​ θ x 3 ​ e − θ x 2 ​ d x . 作变量替换，令 u = θ x 2 ​ ，得 E X 2 = θ ∫ 0 + ∞ ​ θ x 2 ​ e − θ x 2 ​ d ( θ x 2 ​ ) = θ Γ ( 2 ) = θ . （II）似然函数为 L ( θ ) = θ n 2 n x 1 ​ x 2 ​ ⋯ x n ​ ​ e − θ x 1 2 ​ + x 2 2 ​ + ⋯ + x n 2 ​ ​ . 取对数得 ln L ( θ ) = n ln 2 + i = 1 ∑ n ​ ln x i ​ − n ln θ − θ ∑ i = 1 n ​ x i 2 ​ ​ . 对 θ 求导并令导数为零： d θ d ​ ln L ( θ ) = − θ n ​ + θ 2 ∑ i = 1 n ​ x i 2 ​ ​ = 0 , 解得最大似然估计量为 θ ^ = n 1 ​ i = 1 ∑ n ​ X i 2 ​ . （III）由大数定律， θ ^ = n 1 ​ ∑ i = 1 n ​ X i 2 ​ 依概率收敛于 E X 2 = θ 。 因此存在 a = θ ，使得对任意 ε > 0 ，有 n → ∞ lim ​ P { ​ θ ^ − a ​ ≥ ε } = 0.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2014_math1 = {
  id: P, year: Y,
  title: '2014 年全国硕士研究生招生考试 数学（一）',
  short: '2014 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2014_math1.length,
  qids: questions2014_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
