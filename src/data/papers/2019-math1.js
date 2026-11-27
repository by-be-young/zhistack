const P = 'paper-2019-math1'
const Y = 2019
const SRC = '#/notes/study_methods-math-math1-2019'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2019-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2019 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2019_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当\nx→0\n时，若\nx−tanx\n与\nxk\n是同阶无穷小，则\nk=",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2" }, { key: "C", text: "3" }, { key: "D", text: "4" }],
    answer: ["C"],
    explain: "正确答案： C x − tan x = x − ( x + 3 1 ​ x 3 + o ( x 3 )) ∼ − 3 1 ​ x 3 ，故 k = 3"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)={x∣x∣,xlnx,x≤0x>0\n则\nx=0\n是\nf(x)\n的",
    options: [{ key: "A", text: "可导点，极值点。" }, { key: "B", text: "不可导点，极值点。" }, { key: "C", text: "可导点，非极值点。" }, { key: "D", text: "不可导点，非极值点" }],
    answer: ["B"],
    explain: "正确答案： B lim x → 0 − ​ x − 0 f ( x ) − f ( 0 ) ​ = lim x → 0 − ​ x x ∣ x ∣ ​ = 0 ， lim x → 0 + ​ x − 0 f ( x ) − f ( 0 ) ​ = lim x → 0 + ​ x x l n x ​ = − ∞ ，故 f ( x ) 不可导。 当 x > 0 时， f ( x ) < 0 ;当 x < 0 时， f ( x ) < 0 .故 f ( x ) 在 x = 0 处取极大值.故选(B)."
  }),
  base(3, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\n{un}\n是单调递增的有界数列，则下列级数中收敛的是",
    options: [{ key: "A", text: "∑ n = 1 ∞ ​ n u n ​ ​" }, { key: "B", text: "∑ n = 1 ∞ ​ ( − 1 ) n u n ​ 1 ​" }, { key: "C", text: "∑ n = 1 ∞ ​ ( 1 − u n + 1 ​ u n ​ ​ )" }, { key: "D", text: "∑ n = 1 ∞ ​ ( u n + 1 2 ​ − u n 2 ​ )" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】举反例：（A） u n ​ = n n − 1 ​ （B） u n ​ = n n − 1 ​ （C） u n ​ = − n 1 ​"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nQ(x,y)=y2x\n，如果对上半平面\n(y>0)\n内的任意有向光滑封闭曲线 C 都有\n∮CP(x,y)dx+Q(x,y)dy=0\n,那么函数\nP(x,y)\n可取为",
    options: [{ key: "A", text: "y − y 3 x 2 ​" }, { key: "B", text: "y 1 ​ − y 3 x 2 ​" }, { key: "C", text: "x 1 ​ − y 1 ​" }, { key: "D", text: "x − y 1 ​" }],
    answer: ["D"],
    explain: "正确答案： D ∂ x ∂ Q ​ = y 2 1 ​ , 故只需选择在上半平面有连续偏导数，且满足 ∂ y ∂ P ​ = y 2 1 ​ 的 P 函数，只有 D 选项成立。"
  }),
  base(5, 'k-math-019', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 A 是 3 阶实对称矩阵，E 是 3 阶单位矩阵，若\nA2+A=2E\n,且\n∣A∣=4\n,则二次型\nxTAx\n的规范形为",
    options: [{ key: "A", text: "y 1 2 ​ + y 2 2 ​ + y 3 2 ​" }, { key: "B", text: "y 1 2 ​ + y 2 2 ​ − y 3 2 ​" }, { key: "C", text: "y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }, { key: "D", text: "− y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }],
    answer: ["C"],
    explain: "正确答案： C ∵ A 2 + A = 2 E ,设 A 的特征值为 λ ，则 λ 2 + λ = 2 ，即 ( λ + 2 ) ( λ − 1 ) = 0 ， ∴ λ = − 2 或 1 。 ∵ ∣ A ∣ = 4 ，故 A 的特征值为 λ 1 ​ = λ 2 ​ = − 2 , λ 3 ​ = 1 ，正惯性指数 p = 1 ，负惯性指数 q = 2 ，规范形为 y 1 2 ​ − y 2 2 ​ − y 3 2 ​ 。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "如图所示，有 3 张平面两两相交，交线相互平行，它们的方程\nai1x+ai2y+ai3z=di(i=1,2,3)\n组成的线性方程组的系数矩阵和增广矩阵分别记为\nA\n、\nAˉ\n，则\n\n",
    options: [{ key: "A", text: "r = 2 , r ( A ) = 3" }, { key: "B", text: "r = 2 , r ( A ) = 2" }, { key: "C", text: "r = 1 , r ( A ) = 2" }, { key: "D", text: "r = 1 , r ( A ) = 1" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 因为他们两两相交，且交线相互平行，所以 r ( A )  = r ( A ) ≤ 3 , 所以排除 B 和 D 选项； 又因为他们两两相交，故其中任意两个平面不平行，所以 2 ≤ r ( A ) , 故选 A。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 A , B 为随机事件，则\nP(A)=P(B)\n的充分必要条件是",
    options: [{ key: "A", text: "P ( A ∪ B ) = P ( A ) + P ( B )" }, { key: "B", text: "P ( A B ) = P ( A ) P ( B )" }, { key: "C", text: "P ( A B ) = P ( B A )" }, { key: "D", text: "P ( A B ) = P ( A B )" }],
    answer: ["C"],
    explain: "正确答案： C A 选项 ⇔ P ( A B ) = 0 ，排除； B 选项 ⇔ A 、 B 独立，排除； C 选项 ⇔ P ( A ) − P ( A B ) = P ( B ) − P ( A B ) ，即 P ( A ) = P ( B ) ，正确； D 选项 ⇔ 1 = P ( A ) + P ( B ) ，排除。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且都服从正态分布\nN(μ,σ2)\n，则\nP{∣X−Y∣1}",
    options: [{ key: "A", text: "与 μ 无关，而与 σ 2 有关。" }, { key: "B", text: "与 μ 有关，而与 σ 2 无关" }, { key: "C", text: "与 μ , σ 2 都有关。" }, { key: "D", text: "与 μ , σ 2 都无关。" }],
    answer: ["A"],
    explain: "正确答案： A E ( X − Y ) = 0 , D ( X − Y ) = D X + D Y = 2 σ 2 , 所以 2 σ ​ X − Y ​ ∼ N ( 0 , 1 ) . P { ∣ X − Y ∣ < 1 } = P { 2 σ ​ ∣ X − Y ∣ ​ < 2 σ ​ 1 ​ } = 2Φ ( 2 σ ​ 1 ​ ) − 1 与 σ 2 有关。故选(A)。"
  }),
  base(9, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\nf(u)\n可导，\nz=f(siny−sinx)+xy\n，则\ncosx1⋅∂x∂z+cosy1⋅∂y∂z=",
    answerText: "】 c o s x y ​ + c o s y x ​ 【",
    referenceAnswer: "【答案】 c o s x y ​ + c o s y x ​ 【解析】 ∂ x ∂ z ​ = f ′ ( sin y − sin x ) ( − cos x ) + y ∂ y ∂ z ​ = f ′ ( sin y − sin x ) cos y + x 故 ​ cos x 1 ​ ⋅ ∂ x ∂ z ​ + cos y 1 ​ ⋅ ∂ y ∂ z ​ = − f ′ ( sin y − sin x ) + cos x y ​ + f ′ ( sin y − sin x ) + cos y x ​ = cos x y ​ + cos y x ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\n2yy′−y2−2=0\n满足条件\ny(0)=1\n的特解\ny=",
    answerText: "】 y = 3 e x − 2 ​ 【",
    referenceAnswer: "【答案】 y = 3 e x − 2 ​ 【解析】 y ′ = 2 y 2 + y 2 ​ ⇒ ∫ 2 + y 2 2 y ​ d y = ∫ 1 d x ln ( 2 + y 2 ) = x + C 代入 y ( 0 ) = 1 得 C = ln 3 ，于是： ln ( 2 + y 2 ) = x + ln 3 ⇒ 2 + y 2 = 3 e x 因此： y = 3 e x − 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）求级数\n∑n=0∞(2n)!(−1)nxn\n在\n(0,+∞)\n内的和函数\nS(x)=",
    answerText: "】 cos x ​ 【",
    referenceAnswer: "【答案】 cos x ​ 【解析】 ∑ n = 0 ∞ ​ ( 2 n )! ( − 1 ) n ​ ( x ​ ) 2 n = cos x ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\n∑\n为曲面\nx2+y2+4z2=4(z≥0)\n的上侧，则\n∬∑4−x2−4z2dxdy=",
    answerText: "】 3 32 ​ 【",
    referenceAnswer: "【答案】 3 32 ​ 【解析】 ​ ∬ ∑ ​ 4 − x 2 − 4 z 2 ​ d x d y = ∬ D x y ​ ​ ∣ y ∣ d x d y = 4 ∬ D ′ ​ y d x d y = = 4 ∫ 0 2 π ​ ​ d θ ∫ 0 2 ​ r 2 sin θ d r = 3 32 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA=(α1,α2,α3)\n为三阶矩阵，若\nα1\n，\nα2\n线性无关，且\nα3=−α1+2α2\n，则线性方程组\nAx=0\n的通解为",
    answerText: "】 x = k ( 1 , − 2 , 1 ) T , k ∈ R 【",
    referenceAnswer: "【答案】 x = k ( 1 , − 2 , 1 ) T , k ∈ R 【解析】 α 1 ​ ， α 2 ​ 无关， A = ( α 1 ​ , α 2 ​ , α 3 ​ ) ∴ r ( A ) ≥ 2 ∵ α 3 ​ = − α 1 ​ + 2 α 2 ​ ∴ r ( A ) = 2 故 A x = 0 的基础解系中有 n − r ( A ) = 3 − 2 = 1 个解向量。 ∵ α 1 ​ − 2 α 2 ​ + α 3 ​ = 0 ∴ ( 1 , − 2 , 1 ) T 为 A x = 0 的解，作为基础解系。 ∴ 通解为 x = k ( 1 , − 2 , 1 ) T ， k ∈ R",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nf(x)={2x,0,0x2其他\n，\nF(x)\n为\nX\n的分布函数，\nEX\n为\nX\n的数学期望，则\nP{F(X)>EX−1}=",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 f ( x ) = { 2 x ​ , 0 , ​ 0 < x < 2 其他 ​ E ( X ) = ∫ − ∞ + ∞ ​ x f ( x ) d x = ∫ 0 2 ​ 2 x 2 ​ d x = 6 1 ​ x 3 ​ 0 2 ​ = 3 4 ​ F ( x ) = ∫ − ∞ x ​ f ( t ) d t = ⎩ ⎨ ⎧ ​ 0 , ∫ 0 x ​ 2 t ​ d t , 1 , ​ x < 0 0 ≤ x < 2 x ≥ 2 ​ ​ P ( F ( X ) > E ( X ) − 1 ) = P ( F ( X ) > 3 1 ​ ) = P ( 4 x 2 ​ > 3 1 ​ ) = P ( x > 3 ​ 2 ​ ) = ∫ 3 ​ 2 ​ 2 ​ 2 x ​ d x = 3 2 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设函数\ny(x)\n是微分方程\ny′+xy=e−2x2\n满足条件\ny(0)=0\n的特解。\n\n(Ⅰ) 求\ny(x)\n；\n\n(Ⅱ) 求曲线\ny=y(x)\n的凹凸区间及拐点。",
    referenceAnswer: "【答案】 (Ⅰ) y = x e − 2 x 2 ​ (Ⅱ) 曲线 y = y ( x ) 的凸区间为 ( − ∞ , − 3 ​ ) 及 ( 0 , 3 ​ ) ，凹区间为 ( − 3 ​ , 0 ) 及 ( 3 ​ , + ∞ ) ，拐点为 ( − 3 ​ , − 3 ​ e − 2 3 ​ ) ， ( 0 , 0 ) 及 ( 3 ​ , 3 ​ e − 2 3 ​ ) 。 【解析】 (Ⅰ) y ′ + x y = e − 2 x 2 ​ 的通解为 y = ( ∫ e − 2 x 2 ​ ⋅ e ∫ x d x d x + C ) e − ∫ x d x = ( x + C ) e − 2 x 2 ​ ，由 y ( 0 ) = 0 得 C = 0 ，故 y = x e − 2 x 2 ​ 。 (Ⅱ) y ′ = ( 1 − x 2 ) e − 2 x 2 ​ ， y ′′ = ( x 3 − 3 x ) e − 2 x 2 ​ = x ( x + 3 ​ ) ( x − 3 ​ ) e − 2 x 2 ​ ， 令 y ′′ = 0 得 x = − 3 ​ ， x = 0 ， x = 3 ​ 。 当 x ∈ ( − ∞ , − 3 ​ ) 时， y ′′ < 0 ； 当 x ∈ ( − 3 ​ , 0 ) 时， y ′′ > 0 ； 当 x ∈ ( 0 , 3 ​ ) 时， y ′′ < 0 ； 当 x ∈ ( 3 ​ , + ∞ ) 时， y ′′ > 0 。 故 y = x e − 2 x 2 ​ 的凸区间为 ( − ∞ , − 3 ​ ) 及 ( 0 , 3 ​ ) ；凹区间为 ( − 3 ​ , 0 ) 及 ( 3 ​ , + ∞ ) 。 曲线 y = x e − 2 x 2 ​ 的拐点为 ( − 3 ​ , − 3 ​ e − 2 3 ​ ) ， ( 0 , 0 ) 及 ( 3 ​ , 3 ​ e − 2 3 ​ ) 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设\na\n，\nb\n为实数，函数\nz=2+ax2+by2\n在点\n(3,4)\n处的方向导数中，沿方向\nl=−3i−4j\n的方向导数最大，最大值为\n10\n。\n\n（Ⅰ）求\na\n，\nb\n；\n\n（Ⅱ）求曲面\nz=2+ax2+by2 (z≥0)\n的面积。",
    referenceAnswer: "【答案】 （Ⅰ） a = − 1 ， b = − 1 （Ⅱ） 3 13 ​ π 【解析】 （Ⅰ） grad z = { 2 a x , 2 b y } ， grad z ​ ( 3 , 4 ) ​ = { 6 a , 8 b } ， 因为梯度的方向即为方向导数最大的方向，所以有 − 3 6 a ​ = − 4 8 b ​ ，即 a = b ， 再由 36 a 2 + 64 b 2 ​ = 10 得 a = b = − 1 。 （Ⅱ） 曲面 Σ : z = 2 − x 2 − y 2 , ( x , y ) ∈ D x y ​ 其中 D x y ​ = {( x , y ) ∣ x 2 + y 2 ≤ 2 } 则曲面 Σ 的面积为 S ​ = ∬ D x y ​ ​ 1 + z x ′2 ​ + z y ′2 ​ ​ d x d y = ∬ D x y ​ ​ 1 + 4 x 2 + 4 y 2 ​ d x d y = 2 π ∫ 0 2 ​ ​ r 1 + 4 r 2 ​ d r = 4 π ​ ∫ 0 2 ​ ​ ( 1 + 4 r 2 ) 2 1 ​ d ( 1 + 4 r 2 ) = 4 π ​ × 3 2 ​ ( 1 + 4 r 2 ) 2 3 ​ ​ 0 2 ​ ​ = 6 π ​ ( 27 − 1 ) = 3 13 ​ π . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求曲线\ny=e−xsinx (x≥0)\n与\nx\n轴之间图形的面积。",
    referenceAnswer: "【答案】 2 1 ​ + e π − 1 1 ​ 【解析】 所求的面积为 A = ∫ 0 + ∞ ​ e − x ∣ sin x ∣ d x = n → ∞ lim ​ k = 0 ∑ n ​ ( − 1 ) k ∫ kπ ( k + 1 ) π ​ e − x sin x d x = n → ∞ lim ​ k = 0 ∑ n ​ ( − 1 ) k [ − 2 1 ​ e − x ( sin x + cos x ) ] ​ kπ ( k + 1 ) π ​ = 2 1 ​ n → ∞ lim ​ k = 0 ∑ n ​ ( − 1 ) k + 1 [ e − ( k + 1 ) π ( − 1 ) k + 1 − e − kπ ( − 1 ) k ] = 2 1 ​ n → ∞ lim ​ k = 0 ∑ n ​ [ e − ( k + 1 ) π + e − kπ ] = 2 1 ​ n → ∞ lim ​ [ 1 + 2 k = 1 ∑ n ​ e − kπ + e − ( n + 1 ) π ] = 2 1 ​ ( 1 + 2 k = 1 ∑ ∞ ​ e − kπ ) = 2 1 ​ ( 1 + 1 − e − π 2 e − π ​ ) = 2 1 ​ ( 1 + e π − 1 2 ​ ) = 2 1 ​ + e π − 1 1 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设\nan=∫01xn1−x2dx(n=0,1,2,⋯)\n．\n\n（Ⅰ）证明数列\n{an}\n单调递减，且\nan=n+2n−1an−2(n=2,3,⋯)\n；\n\n（Ⅱ）求\nn→∞liman−1an\n．",
    referenceAnswer: "【答案】 (1) 见解析 (2) n → ∞ lim ​ a n − 1 ​ a n ​ ​ = 1 【解析】 （Ⅰ） 因为当 0 ≤ x ≤ 1 时， x n + 1 1 − x 2 ​ ≤ x n 1 − x 2 ​ , 所以 ∫ 0 1 ​ x n + 1 1 − x 2 ​ d x < ∫ 0 1 ​ x n 1 − x 2 ​ d x , 即 a n + 1 ​ < a n ​ ，故 { a n ​ } 单调递减。 令 x = sin t ，则 a n ​ = ∫ 0 2 π ​ ​ sin n t ⋅ cos 2 t d t = ∫ 0 2 π ​ ​ ( sin n t − sin n + 2 t ) d t . 于是 a n ​ = ∫ 0 2 π ​ ​ sin n t d t − ∫ 0 2 π ​ ​ sin n + 2 t d t = I n ​ − n + 2 n + 1 ​ I n ​ = n + 2 1 ​ I n ​ . 类似地， a n − 2 ​ = ∫ 0 2 π ​ ​ sin n − 2 t ⋅ cos 2 t d t = ∫ 0 2 π ​ ​ ( sin n − 2 t − sin n t ) d t , 即 a n − 2 ​ = I n − 2 ​ − I n ​ . 利用递推关系 I n ​ = n n − 1 ​ I n − 2 ​ ，得 I n − 2 ​ = n − 1 n ​ I n ​ ， 于是 a n − 2 ​ = n − 1 n ​ I n ​ − I n ​ = n − 1 1 ​ I n ​ . 因此 a n ​ = n + 2 n − 1 ​ a n − 2 ​ , n = 2 , 3 , … （Ⅱ） 因为 { a n ​ } 单调递减， a n ​ = n + 2 n − 1 ​ a n − 2 ​ > n + 2 n − 1 ​ a n − 1 ​ , 所以 n + 2 n − 1 ​ < a n − 1 ​ a n ​ ​ < 1. 由夹逼定理得 n → ∞ lim ​ a n − 1 ​ a n ​ ​ = 1.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分） 设\nΩ\n是由锥面\nx2+(y−z)2=(1−z)2(0≤z≤1)\n与平面\nz=0\n围成的锥体，求\nΩ\n的形心坐标。",
    referenceAnswer: "【答案】 ( 0 , 4 1 ​ , 4 1 ​ ) 【解析】 设 Ω 的形心坐标为 ( x ˉ , y ˉ ​ , z ˉ ) ，由对称性得 x ˉ = 0 ，且 y ˉ ​ = ∭ Ω ​ d x d y d z ∭ Ω ​ y d x d y d z ​ , z ˉ = ∭ Ω ​ d x d y d z ∭ Ω ​ z d x d y d z ​ . 体积为 ∭ Ω ​ d x d y d z ​ = ∫ 0 1 ​ d z ∬ x 2 + ( y − z ) 2 ≤ ( 1 − z ) 2 ​ d x d y = π ∫ 0 1 ​ ( 1 − z ) 2 d z = 3 π ​ ( z − 1 ) 3 ​ 0 1 ​ = 3 π ​ . ​ 计算 ∭ Ω ​ y d x d y d z ： ∭ Ω ​ y d x d y d z = ∫ 0 1 ​ d z ∬ x 2 + ( y − z ) 2 ≤ ( 1 − z ) 2 ​ y d x d y . 由代换 y = u + z ，得 ∬ x 2 + ( y − z ) 2 ≤ ( 1 − z ) 2 ​ y d x d y ​ = ∬ x 2 + u 2 ≤ ( 1 − z ) 2 ​ ( u + z ) d x d u = ∬ x 2 + u 2 ≤ ( 1 − z ) 2 ​ z d x d u = π z ( 1 − z ) 2 . ​ 因此 ∭ Ω ​ y d x d y d z = π ∫ 0 1 ​ z ( 1 − z ) 2 d z = 12 π ​ . 计算 ∭ Ω ​ z d x d y d z ： ∭ Ω ​ z d x d y d z = ∫ 0 1 ​ z d z ∬ x 2 + ( y − z ) 2 ≤ ( 1 − z ) 2 ​ d x d y = π ∫ 0 1 ​ z ( 1 − z ) 2 d z = 12 π ​ . 故 Ω 的形心坐标为 ( x ˉ , y ˉ ​ , z ˉ ) = ( 0 , 4 1 ​ , 4 1 ​ ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设向量组\nα1=(1,2,1)T\n，\nα2=(1,3,2)T\n，\nα3=(1,a,3)T\n为\nR3\n的一个基，\nβ=(1,1,1)T\n在这个基下的坐标为\n(b,c,1)T\n。\n\n（Ⅰ）求\na,b,c\n；\n\n（Ⅱ）证明\nα2,α3,β\n为\nR3\n的一个基，并求\nα2,α3,β\n到\nα1,α2,α3\n的过渡矩阵。",
    referenceAnswer: "【答案】 （Ⅰ） a = 3 , b = 2 , c = − 2 （Ⅱ）过渡矩阵 Q = ​ 1 − 2 1 ​ 2 1 ​ ​ 1 0 1 ​ 0 1 0 ​ ​ 【解析】 （Ⅰ）【解】 由题意得 b α 1 ​ + c α 2 ​ + α 3 ​ = β ，即 ⎩ ⎨ ⎧ ​ b + c + 1 = 1 , 2 b + 3 c + a = 1 , b + 2 c + 3 = 1 , ​ 解得 a = 3 ， b = 2 ， c = − 2 。 （Ⅱ）【证明】 因为 ∣ α 2 ​ , α 3 ​ , β ∣ = ​ 1 3 2 ​ 1 3 3 ​ 1 1 1 ​ ​ = ​ 1 0 0 ​ 1 0 1 ​ 1 − 2 − 1 ​ ​ = 2  = 0 , 所以 α 2 ​ , α 3 ​ , β 线性无关，故 α 2 ​ , α 3 ​ , β 为 R 3 的一个基。 设由 α 2 ​ , α 3 ​ , β 到 α 1 ​ , α 2 ​ , α 3 ​ 的过渡矩阵为 Q ，即 ( α 1 ​ , α 2 ​ , α 3 ​ ) = ( α 2 ​ , α 3 ​ , β ) Q , 于是 Q = ( α 2 ​ , α 3 ​ , β ) − 1 ( α 1 ​ , α 2 ​ , α 3 ​ ) . 由 ​ 1 3 2 ​ 1 3 3 ​ 1 1 1 ​ ⋮ ⋮ ⋮ ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ 1 0 1 ​ 1 − 2 − 1 ​ ⋮ ⋮ ⋮ ​ 1 − 3 − 2 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 1 − 1 1 ​ ⋮ ⋮ ⋮ ​ 1 − 2 2 3 ​ ​ 0 0 − 2 1 ​ ​ 0 1 0 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 0 0 1 ​ ⋮ ⋮ ⋮ ​ − 2 1 ​ − 2 1 ​ 2 3 ​ ​ 2 1 ​ − 2 1 ​ − 2 1 ​ ​ 0 1 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ⋮ ⋮ ⋮ ​ 0 − 2 1 ​ 2 3 ​ ​ 1 − 2 1 ​ − 2 1 ​ ​ − 1 1 0 ​ ​ 得 ( α 2 ​ , α 3 ​ , β ) − 1 = ​ 0 − 2 1 ​ 2 3 ​ ​ 1 − 2 1 ​ − 2 1 ​ ​ − 1 1 0 ​ ​ , 则 Q = ​ 0 − 2 1 ​ 2 3 ​ ​ 1 − 2 1 ​ − 2 1 ​ ​ − 1 1 0 ​ ​ ​ 1 2 1 ​ 1 3 2 ​ 1 3 3 ​ ​ = ​ 1 − 2 1 ​ 2 1 ​ ​ 1 0 1 ​ 0 1 0 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n已知矩阵\nA=−220−2x01−2−2\n与\nB=2001−1000y\n相似。\n\n(Ⅰ) 求\nx,y\n；\n\n(Ⅱ) 求可逆矩阵\nP\n使得\nP−1AP=B\n。",
    referenceAnswer: "【答案】 (Ⅰ) x = 3 ， y = − 2 (Ⅱ) P = ​ − 1 2 0 ​ − 1 1 0 ​ − 1 2 4 ​ ​ 【解析】 (Ⅰ) 因为 A ∼ B ，所以 tr A = tr B ，即 x − 4 = y + 1 ，或 y = x − 5 。 再由 ∣ A ∣ = ∣ B ∣ 得 − 2 ( − 2 x + 4 ) = − 2 y ，即 y = − 2 x + 4 。 解得 x = 3 ， y = − 2 。 (Ⅱ) A = ​ − 2 2 0 ​ − 2 3 0 ​ 1 − 2 − 2 ​ ​ , B = ​ 2 0 0 ​ 1 − 1 0 ​ 0 0 − 2 ​ ​ 显然矩阵 A , B 的特征值为 λ 1 ​ = − 2 ， λ 2 ​ = − 1 ， λ 3 ​ = 2 。 求矩阵 A 的特征向量 由 2 E + A → ​ 0 2 0 ​ − 2 1 0 ​ 1 0 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 4 1 ​ − 2 1 ​ 0 ​ ​ 得 A 的属于特征值 λ 1 ​ = − 2 的特征向量为 α 1 ​ = ​ − 1 2 4 ​ ​ 由 E + A → ​ 1 0 0 ​ 2 0 0 ​ − 1 1 0 ​ ​ → ​ 1 0 0 ​ 2 0 0 ​ 0 1 0 ​ ​ 得 A 的属于特征值 λ 2 ​ = − 1 的特征向量为 α 2 ​ = ​ − 2 1 0 ​ ​ 由 − 2 E + A → ​ − 4 2 0 ​ − 2 1 0 ​ 1 − 2 − 4 ​ ​ → ​ 1 0 0 ​ 2 1 ​ 0 0 ​ 0 1 0 ​ ​ 得 A 的属于特征值 λ 3 ​ = 2 的特征向量为 α 3 ​ = ​ − 1 2 0 ​ ​ 令 P 1 ​ = ​ − 1 2 4 ​ − 2 1 0 ​ − 1 2 0 ​ ​ 则 P 1 − 1 ​ A P 1 ​ = ​ − 2 0 0 ​ 0 − 1 0 ​ 0 0 2 ​ ​ 求矩阵 B 的特征向量 由 2 E + B → ​ 4 0 0 ​ 1 1 0 ​ 0 0 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 0 ​ ​ 得 B 的属于特征值 λ 1 ​ = − 2 的特征向量为 β 1 ​ = ​ 0 0 1 ​ ​ 由 E + B → ​ 3 0 0 ​ 1 0 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ 3 1 ​ 0 0 ​ 0 1 0 ​ ​ 得 B 的属于特征值 λ 2 ​ = − 1 的特征向量为 β 2 ​ = ​ − 1 3 0 ​ ​ 由 − 2 E + B → ​ 0 0 0 ​ 1 − 3 0 ​ 0 0 − 4 ​ ​ → ​ 0 0 0 ​ 1 0 0 ​ 0 1 0 ​ ​ 得 B 的属于特征值 λ 3 ​ = 2 的特征向量为 β 3 ​ = ​ 1 0 0 ​ ​ 令 P 2 ​ = ​ 0 0 1 ​ − 1 3 0 ​ 1 0 0 ​ ​ 则 P 2 − 1 ​ B P 2 ​ = ​ − 2 0 0 ​ 0 − 1 0 ​ 0 0 2 ​ ​ 求相似变换矩阵 P 由 P 1 − 1 ​ A P 1 ​ = P 2 − 1 ​ B P 2 ​ 得 ( P 1 ​ P 2 − 1 ​ ) − 1 A ( P 1 ​ P 2 − 1 ​ ) = B 。 故 P = P 1 ​ P 2 − 1 ​ = ​ − 1 2 0 ​ − 1 1 0 ​ − 1 2 4 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设随机变量\nX\n与\nY\n相互独立，\nX\n服从参数为\n1\n的指数分布，\nY\n的概率分布为\nP{Y=−1}=p\n，\nP{Y=1}=1−p (0p1)\n，令\nZ=XY\n。\n\n(Ⅰ) 求\nZ\n的概率密度；\n\n(Ⅱ)\np\n为何值时，\nX\n与\nZ\n不相关；\n\n(Ⅲ)\nX\n与\nZ\n是否相互独立？",
    referenceAnswer: "【答案】 (Ⅰ) f Z ​ ( z ) = { p e z , ( 1 − p ) e − z , ​ z < 0 , z ≥ 0. ​ (Ⅱ) p = 2 1 ​ (Ⅲ) X 与 Z 不相互独立 【解析】 (Ⅰ) 因为 X ∼ E ( 1 ) ，所以 X 的分布函数为 F ( x ) = { 1 − e − x , 0 , ​ x ≥ 0 , x < 0. ​ F Z ​ ( z ) ​ = P { X Y ≤ z } = P { Y = − 1 } P { X Y ≤ z ∣ Y = − 1 } + P { Y = 1 } P { X Y ≤ z ∣ Y = 1 } = pP { − X ≤ z } + ( 1 − p ) P { X ≤ z } = pP { X ≥ − z } + ( 1 − p ) P { X ≤ z } = p [ 1 − P { X ≤ − z }] + ( 1 − p ) P { X ≤ z } = p [ 1 − F ( − z )] + ( 1 − p ) F ( z ) ​ 当 z < 0 时， F Z ​ ( z ) = p e z ； 当 z ≥ 0 时， F Z ​ ( z ) = p + ( 1 − p ) ( 1 − e − z ) 。 故 f Z ​ ( z ) = { p e z , ( 1 − p ) e − z , ​ z < 0 , z ≥ 0. ​ (Ⅱ) Cov ( X , Z ) ​ = Cov ( X , X Y ) = E ( X 2 Y ) − E ( X ) ⋅ E ( X Y ) = E ( X 2 ) E ( Y ) − [ E ( X ) ] 2 E ( Y ) = D ( X ) ⋅ E ( Y ) ​ 因为 X ∼ E ( 1 ) ，所以 E ( X ) = 1 ， D ( X ) = 1 。 又因为 Y ∼ ( − 1 p ​ 1 1 − p ​ ) 所以 E ( Y ) = ( − 1 ) p + ( 1 − p ) = 1 − 2 p 。 X 与 Z 不相关的充分必要条件是 Cov ( X , Z ) = 0 ， 故当 p = 2 1 ​ 时， X 与 Z 不相关。 (Ⅲ) 设 F ( x , y ) 为 ( X , Z ) 的联合分布函数， F ( 1 , 1 ) ​ = P { X ≤ 1 , Z ≤ 1 } = P { X ≤ 1 , X Y ≤ 1 } = P { Y = − 1 } P { X ≤ 1 , X Y ≤ 1 ∣ Y = − 1 } + P { Y = 1 } P { X ≤ 1 , X Y ≤ 1 ∣ Y = 1 } = 2 1 ​ P { X ≤ 1 , − X ≤ 1 } + 2 1 ​ P { X ≤ 1 } = 2 1 ​ P { − 1 ≤ X ≤ 1 } + 2 1 ​ P { X ≤ 1 } = P { X ≤ 1 } = F ( 1 ) = 1 − e 1 ​ ​ F X ​ ( 1 ) = P { X ≤ 1 } = 1 − e 1 ​ F Z ​ ( 1 ) ​ = P { X Y ≤ 1 } = P { Y = − 1 } P { X Y ≤ 1 ∣ Y = − 1 } + P { Y = 1 } P { X Y ≤ 1 ∣ Y = 1 } = 2 1 ​ P { − X ≤ 1 } + 2 1 ​ P { X ≤ 1 } = 2 1 ​ P { X ≥ − 1 } + 2 1 ​ P { X ≤ 1 } = 2 1 ​ + 2 1 ​ ( 1 − e 1 ​ ) = 1 − 2 e 1 ​ ​ 因为 F ( 1 , 1 )  = F X ​ ( 1 ) ⋅ F Z ​ ( 1 ) ，所以 X 与 Z 不相互独立。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设总体\nX\n的概率密度为\n\nf(x;σ2)={σAe−2σ2(x−μ)2, x≥μ,0, xμ,\n\n其中\nμ\n是已知参数，\nσ>0\n是未知参数，\nA\n是常数。\nX1,X2,⋯,Xn\n是来自总体\nX\n的简单随机样本。\n\n（Ⅰ）求\nA\n；\n\n（Ⅱ）求\nσ2\n的最大似然估计量。",
    referenceAnswer: "【答案】 (Ⅰ) A = π 2 ​ ​ (Ⅱ) σ ^ 2 = n 1 ​ ∑ i = 1 n ​ ( X i ​ − μ ) 2 【解析】 (Ⅰ) 由归一性得： 1 ​ = ∫ μ + ∞ ​ σ A ​ e − 2 σ 2 ( x − μ ) 2 ​ d x = A ∫ μ + ∞ ​ e − 2 1 ​ ( σ x − μ ​ ) 2 d ( σ x − μ ​ ) = A ∫ 0 + ∞ ​ e − 2 x 2 ​ d x = 2 π ​ A ∫ 0 + ∞ ​ 2 π ​ 1 ​ e − 2 x 2 ​ d x = 2 2 π ​ ​ A ∫ − ∞ + ∞ ​ 2 π ​ 1 ​ e − 2 x 2 ​ d x = 2 2 π ​ ​ A ​ 解得： A = π 2 ​ ​ (Ⅱ) 似然函数为： L ( σ 2 ) = ( σ 2 ) 2 n ​ A n ​ e − 2 σ 2 1 ​ ∑ i = 1 n ​ ( x i ​ − μ ) 2 对数似然函数为： ln L ( σ 2 ) = n ln A − 2 n ​ ln σ 2 − 2 σ 2 1 ​ i = 1 ∑ n ​ ( x i ​ − μ ) 2 由： d σ 2 d ​ ln L ( σ 2 ) = − 2 n ​ ⋅ σ 2 1 ​ + 2 σ 4 1 ​ i = 1 ∑ n ​ ( x i ​ − μ ) 2 = 0 得 σ 2 的最大似然估计值为： σ ^ 2 = n 1 ​ i = 1 ∑ n ​ ( x i ​ − μ ) 2 故 σ 2 的最大似然估计量为： σ ^ 2 = n 1 ​ i = 1 ∑ n ​ ( X i ​ − μ ) 2",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2019_math1 = {
  id: P, year: Y,
  title: '2019 年全国硕士研究生招生考试 数学（一）',
  short: '2019 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2019_math1.length,
  qids: questions2019_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
