const P = 'paper-2013-math1'
const Y = 2013
const SRC = '#/notes/study_methods-math-math1-2013'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2013-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2013 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2013_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知\nx→0limxkx−arctanx=c\n，其中\nk,c\n为常数，且\nc=0\n，则（ ）",
    options: [{ key: "A", text: "k = 2 , c = − 2 1 ​" }, { key: "B", text: "k = 2 , c = 2 1 ​" }, { key: "C", text: "k = 3 , c = − 3 1 ​" }, { key: "D", text: "k = 3 , c = 3 1 ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】因为 c  = 0 ， c ​ = x → 0 lim ​ x k x − arctan x ​ = 洛 x → 0 lim ​ k x k − 1 1 − 1 + x 2 1 ​ ​ = x → 0 lim ​ k x k − 1 ( 1 + x 2 ) x 2 ​ = x → 0 lim ​ k x k − 1 x 2 ​ = k 1 ​ x → 0 lim ​ x 3 − k . ​ 所以 3 − k = 0 ， k = 3 ， c = k 1 ​ = 3 1 ​ ，故选 D。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲面\nx2+cos(xy)+yz+x=0\n在点\n(0,1,−1)\n的切平面方程为（  ）",
    options: [{ key: "A", text: "x − y + z = − 2" }, { key: "B", text: "x + y + z = 0" }, { key: "C", text: "x − 2 y + z = − 3" }, { key: "D", text: "x − y − z = 0" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】曲面在点 ( 0 , 1 , − 1 ) 处的法向量为 n ​ = ( F x ′ ​ , F y ′ ​ , F z ′ ​ ) ​ ( 0 , 1 , − 1 ) ​ = ( 2 x − y sin ( x y ) + 1 , − x sin ( x y ) + z , y ) ​ ( 0 , 1 , − 1 ) ​ = ( 1 , − 1 , 1 ) ​ 故曲面在点 ( 0 , 1 , − 1 ) 处的切平面方程为 1 ⋅ ( x − 0 ) − ( y − 1 ) + ( z + 1 ) = 0 即 x − y + z = − 2 故选 A。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf(x)=x−21\n，\nbn=2∫01f(x)sinnπxdx(n=1,2,⋯)\n。\n令\ns(x)=∑n=1∞bnsinnπx\n，则\ns(−49)=\n（ ）",
    options: [{ key: "A", text: "4 3 ​" }, { key: "B", text: "4 1 ​" }, { key: "C", text: "− 4 1 ​" }, { key: "D", text: "− 4 3 ​" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 函数 f ( x ) = ​ x − 2 1 ​ ​ 可表示为分段函数： f ( x ) = { 2 1 ​ − x , x − 2 1 ​ , ​ x ∈ [ 0 , 2 1 ​ ] x ∈ [ 2 1 ​ , 1 ] ​ 将 f ( x ) 作奇延拓，得到周期函数 F ( x ) ，其周期 T = 2 。 由于 F ( x ) 在点 x = − 4 9 ​ 处连续，因此有： S ( − 4 9 ​ ) = F ( − 4 9 ​ ) = F ( − 4 1 ​ ) = − F ( 4 1 ​ ) = − f ( 4 1 ​ ) = − 4 1 ​ 故选 C。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nL1:x2+y2=1\n，\nL2:x2+y2=2\n，\nL3:x2+2y2=2\n，\nL4:2x2+y2=2\n为四条逆时针方向的平面曲线，记\n\nIi=∮Li(y+6y3)dx+(2x−3x3)dy(i=1,2,3,4)\n\n则\nmax{I1,I2,I3,I4}=\n（  ）",
    options: [{ key: "A", text: "I 1 ​" }, { key: "B", text: "I 2 ​" }, { key: "C", text: "I 3 ​" }, { key: "D", text: "I 4 ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】记 P = y + 6 y 3 ​ ， Q = 2 x − 3 x 3 ​ ，则 ∂ x ∂ Q ​ − ∂ y ∂ P ​ = 2 − x 2 − 1 − 2 y 2 ​ = 1 − ( x 2 + 2 y 2 ​ ) 于是 I i ​ ​ = ∮ L i ​ ​ ( y + 6 y 3 ​ ) d x + ( 2 x − 3 x 3 ​ ) d y = ∬ D i ​ ​ ( ∂ x ∂ Q ​ − ∂ y ∂ P ​ ) d x d y = ∬ D i ​ ​ [ 1 − ( x 2 + 2 y 2 ​ ) ] d x d y ​ 用 D i ​ 表示 L i ​ 所围区域，可得 I 1 ​ = 8 5 ​ π , I 2 ​ = 2 1 ​ π , I 3 ​ = 8 3 2 ​ ​ , I 4 ​ = 2 2 ​ ​ π , 并有 I 4 ​ > I 1 ​ > I 3 ​ > I 2 ​ 。 故选 D。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n,\nB\n,\nC\n均为\nn\n阶矩阵，若\nAB=C\n，且\nB\n可逆，则",
    options: [{ key: "A", text: "矩阵 C 的行向量组与矩阵 A 的行向量组等价" }, { key: "B", text: "矩阵 C 的列向量组与矩阵 A 的列向量组等价" }, { key: "C", text: "矩阵 C 的行向量组与矩阵 B 的行向量组等价" }, { key: "D", text: "矩阵 C 的列向量组与矩阵 B 的列向量组等价" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】将 A , C 按列分块， A = ( α 1 ​ , … , α n ​ ) ， C = ( γ 1 ​ , … , γ n ​ ) 。 由于 A B = C ，故 ( α 1 ​ , … , α n ​ ) ​ b 11 ​ ⋮ b n 1 ​ ​ … ⋱ … ​ b 1 n ​ ⋮ b nn ​ ​ ​ = ( γ 1 ​ , … , γ n ​ ) 即 γ 1 ​ = b 11 ​ α 1 ​ + ⋯ + b n 1 ​ α n ​ , … , γ n ​ = b 1 n ​ α 1 ​ + ⋯ + b nn ​ α n ​ 因此， C 的列向量组可由 A 的列向量组线性表示。 又因为 B 可逆，有 A = C B − 1 ，所以 A 的列向量组也可由 C 的列向量组线性表示。 故选 B 。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "矩阵\n1a1aba1a1\n与\n2000b0000\n相似的充要条件为（ ）",
    options: [{ key: "A", text: "a = 0 , b = 2" }, { key: "B", text: "a = 0 , b 为任意常数" }, { key: "C", text: "a = 2 , b = 0" }, { key: "D", text: "a = 2 , b 为任意常数" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 将题目中的两个矩阵分别记为 A 和 B 。由于 A 为实对称矩阵，可以相似对角化，从而 A 与 B 相似的充分必要条件为 A 的特征值为 2 , b , 0 。又 ∣ λ E − A ∣ = ​ λ − 1 − a − 1 ​ − a λ − b − a ​ − 1 − a λ − 1 ​ ​ = λ [( λ − b ) ( λ − 2 ) − 2 a 2 ] , 从而 a = 0 , b 为任意常数。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1,X2,X3\n是随机变量，且\nX1∼N(0,1),X2∼N(0,22),X3∼N(5,32)\n，\npi=P{−2≤Xi≤2} (i=1,2,3)\n，则（ ）",
    options: [{ key: "A", text: "p 1 ​ > p 2 ​ > p 3 ​" }, { key: "B", text: "p 2 ​ > p 1 ​ > p 3 ​" }, { key: "C", text: "p 3 ​ > p 1 ​ > p 2 ​" }, { key: "D", text: "p 1 ​ > p 3 ​ > p 2 ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 首先计算 p 1 ​ = P { − 2 ≤ X 1 ​ ≤ 2 } 。由于 X 1 ​ ∼ N ( 0 , 1 ) ，有 p 1 ​ = Φ ( 2 ) − Φ ( − 2 ) = 2 Φ ( 2 ) − 1 接着计算 p 2 ​ = P { − 2 ≤ X 2 ​ ≤ 2 } ，其中 X 2 ​ ∼ N ( 0 , 4 ) 。标准化得 p 2 ​ = P { 2 − 2 − 0 ​ ≤ 2 X 2 ​ − 0 ​ ≤ 2 2 − 0 ​ } = Φ ( 1 ) − Φ ( − 1 ) = 2 Φ ( 1 ) − 1 再计算 p 3 ​ = P { − 2 ≤ X 3 ​ ≤ 2 } ，其中 X 3 ​ ∼ N ( 5 , 9 ) 。标准化得 p 3 ​ = P { 3 − 2 − 5 ​ ≤ 3 X 3 ​ − 5 ​ ≤ 3 2 − 5 ​ } = Φ ( − 1 ) − Φ ( − 3 7 ​ ) = Φ ( 3 7 ​ ) − Φ ( 1 ) 由下图可知， p 1 ​ > p 2 ​ > p 3 ​ ，因此选 A。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX∼t(n)\n，\nY∼F(1,n)\n，给定\nα (0α0.5)\n，常数\nc\n满足\nP{X>c}=α\n，则\nP{Y>c2}=",
    options: [{ key: "A", text: "α" }, { key: "B", text: "1 − α" }, { key: "C", text: "2 α" }, { key: "D", text: "1 − 2 α" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 设 X ∼ t ( n ) ，则 X 2 ∼ F ( 1 , n ) 。 于是 P { Y > c 2 } = P { X 2 > c 2 } = P { X > c } + P { X < − c } = 2 P { X > c } = 2 α ，\n因此选 C。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设函数\ny=f(x)\n由方程\ny−x=ex(1−y)\n确定，则\nlimn→∞n[f(n1)−1]=",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 x = 0 时， y = 1 方程两边对 x 求导得 y ′ − 1 = e x ( 1 − y ) ( 1 − y − x y ′ ) 所以 y ′ ( 0 ) = 1 l i m n → ∞ ​ n [ f ( n 1 ​ ) − 1 ] = l i m n → ∞ ​ n 1 ​ f ( n 1 ​ ) − f ( 0 ) ​ = f ′ ( 0 ) = 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知\ny1=e3x−xe2x\n，\ny2=ex−xe2x\n，\ny3=−xe2x\n是某二阶常系数非齐次线性微分方程的3个解，则该方程的通解\ny=",
    answerText: "】 y = c 1 ( e 3 x − e x ) + c 2 e x − x e 2 x 【",
    referenceAnswer: "【答案】 y = c 1 ( e 3 x − e x ) + c 2 e x − x e 2 x 【解析】 y 1 ​ − y 2 ​ = e 3 x − e x ， y 2 ​ − y 3 ​ = e x ， 对应齐次微分方程的通解 y 2 = c 1 ​ ( e 3 x − e x ) + c 2 ​ e x 非齐次微分方程的通解 y = c 1 ​ ( e 3 x − e x ) + c 2 ​ e x − x e 2 x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\n\n{x=sinty=tsint+cost\n\n（\nt\n为参数），求\n\ndx2d2yt=4π=",
    answerText: "】 2 ​ 【",
    referenceAnswer: "【答案】 2 ​ 【解析】 首先，计算一阶导数： d x d y ​ = d t d y ​ ⋅ d t d x ​ 1 ​ = cos t sin t + t cos t − sin t ​ = t 接着，计算二阶导数： d x 2 d 2 y ​ = d t d ( d x d y ​ ) ​ ⋅ d x d t ​ = d t d x ​ 1 ​ = cos t 1 ​ 最后，代入 t = 4 π ​ 得： d x 2 d 2 y ​ ​ t = 4 π ​ ​ = cos 4 π ​ 1 ​ = 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\n∫1+∞(1+x)2lnxdx=",
    answerText: "】 ln 2 【",
    referenceAnswer: "【答案】 ln 2 【解析】 考虑积分 I = ∫ 1 + ∞ ​ ( 1 + x ) 2 ln x ​ d x 采用分部积分法，令 u = ln x , d v = ( 1 + x ) 2 d x ​ 则 d u = x 1 ​ d x , v = − 1 + x 1 ​ 于是 I = − 1 + x ln x ​ ​ 1 + ∞ ​ + ∫ 1 + ∞ ​ x ( 1 + x ) 1 ​ d x 第一项在 x → + ∞ 时趋于 0，在 x = 1 时为 − 2 l n 1 ​ = 0 ，因此该部分为 0。 第二项可分解为 x ( 1 + x ) 1 ​ = x 1 ​ − 1 + x 1 ​ 所以 ∫ 1 + ∞ ​ x ( 1 + x ) 1 ​ d x = ∫ 1 + ∞ ​ ( x 1 ​ − 1 + x 1 ​ ) d x = ln 1 + x x ​ ​ 1 + ∞ ​ 当 x → + ∞ 时， 1 + x x ​ → 1 ，因此 ln 1 = 0 ； 当 x = 1 时， 1 + 1 1 ​ = 2 1 ​ ，因此 I = 0 − ln 2 1 ​ = ln 2 故 ∫ 1 + ∞ ​ ( 1 + x ) 2 ln x ​ d x = ln 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA=(aij)\n是\n3\n阶非零矩阵，\n∣A∣\n为 A 的行列式，\nAij\n为\naij\n的代数余子式，若\naij+Aij=0(i,j=1,2,3)\n，则\n∣A∣=",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 方法一：取特殊矩阵 A = ​ 1 0 0 ​ 0 − 1 0 ​ 0 0 1 ​ ​ ， ∣ A ∣ = − 1 方法二： A ∗ = − A T ，则 ∣ A ∗ ∣ = ∣ − A T ∣ ，整理得到 ∣ A ∣ 3 − 1 = ( − 1 ) 3 ∣ A ∣ ，即 ∣ A ∣ = − 1 或者 ∣ A ∣ = 0 ∣ A ∣ = a i 1 ​ A i 1 ​ + a i 2 ​ A i 2 ​ + a i 3 ​ A i 3 ​ = − ( a i 1 2 ​ + a i 2 2 ​ + a i 3 2 ​ ) ≤ 0 又因为 A O ，所以至少有一个 a ij ​ 0 ，所以 ∣ A ∣ = a i 1 ​ A i 1 ​ + a i 2 ​ A i 2 ​ + a i 3 ​ A i 3 ​ = − ( a i 1 2 ​ + a i 2 2 ​ + a i 3 2 ​ ) < 0 从而 ∣ A ∣ = − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nY\n服从参数为\n1\n的指数分布，\na\n为常数且大于零，则\n\nP{Y≤a+1∣Y>a}=",
    answerText: "】 1 − e 1 ​ 【",
    referenceAnswer: "【答案】 1 − e 1 ​ 【解析】 概率密度函数为 f ( y ) = { e − y , 0 , ​ y > 0 , y ≤ 0. ​ 所求条件概率为 P { Y ≤ a + 1 ∣ Y > a } = P { Y > a } P { Y > a , Y ≤ a + 1 } ​ = ∫ a + ∞ ​ f ( y ) d y ∫ a a + 1 ​ f ( y ) d y ​ . 代入 f ( y ) 得 ∫ a + ∞ ​ e − y d y ∫ a a + 1 ​ e − y d y ​ = e − a e − a − e − ( a + 1 ) ​ = 1 − e 1 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算\n\n∫01xf(x)dx,\n\n其中\n\nf(x)=∫1xtln(t+1)dt.",
    referenceAnswer: "【答案】 8 − 2 π − 4 ln 2 【解析】 已知 f ( x ) = ∫ 1 x ​ t l n ( t + 1 ) ​ d t ，则 f ′ ( x ) = x ln ( x + 1 ) ​ , f ( 1 ) = 0. 考虑积分 ∫ 0 1 ​ x ​ f ( x ) ​ d x . 利用分部积分法，令 u = f ( x ) ， d v = x ​ 1 ​ d x ，则 ∫ 0 1 ​ x ​ f ( x ) ​ d x = 2 ∫ 0 1 ​ f ( x ) d x ​ . 分部积分得 2 ∫ 0 1 ​ f ( x ) d x ​ = 2 f ( x ) x ​ ​ 0 1 ​ − 2 ∫ 0 1 ​ x ​ f ′ ( x ) d x . 代入上下限及 f ′ ( x ) 得 = 2 f ( 1 ) − 2 ∫ 0 1 ​ x ln ( x + 1 ) ​ ⋅ x ​ d x = − 2 ∫ 0 1 ​ x ​ ln ( x + 1 ) ​ d x . 进一步化为 = − 4 ∫ 0 1 ​ ln ( x + 1 ) d x ​ . 再次分部积分，令 u = ln ( x + 1 ) ， d v = d x ​ ，得 − 4 [ ln ( x + 1 ) x ​ ​ 0 1 ​ − ∫ 0 1 ​ 1 + x x ​ ​ d x ] = − 4 ln 2 + 4 ∫ 0 1 ​ 1 + x x ​ ​ d x . 下面计算 ∫ 0 1 ​ 1 + x x ​ ​ d x . 令 x ​ = t ，则 x = t 2 ， d x = 2 t d t ，代入得 ∫ 0 1 ​ 1 + t 2 t ​ ⋅ 2 t d t = 2 ∫ 0 1 ​ 1 + t 2 t 2 ​ d t . 拆分为 2 ∫ 0 1 ​ ( 1 − 1 + t 2 1 ​ ) d t = 2 ∫ 0 1 ​ d t − 2 ∫ 0 1 ​ 1 + t 2 1 ​ d t . 计算得 = 2 [ t − arctan t ] 0 1 ​ = 2 ( 1 − 4 π ​ ) . 代回原式得 原式 = − 4 ln 2 + 4 ⋅ 2 ( 1 − 4 π ​ ) = − 4 ln 2 + 8 − 2 π = 8 − 2 π − 4 ln 2.",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n设数列\n{an}\n满足条件:\na0=3\n，\na1=1\n，\nan−2−n(n−1)an=0(n≥2)\n，\nS(x)\n是幂级数\n∑n=0∞anxn\n的和函数\n\n(I) 证明:\nS′′(x)−S(x)=0\n\n(II) 求\nS(x)\n的表达式",
    referenceAnswer: "【答案】 S ( x ) = e − x + 2 e x 【解析】 S ( x ) = ∑ n = 0 ∞ ​ a n ​ x n ， S ′ ( x ) = ∑ n = 1 ∞ ​ n a n ​ x n − 1 ， S ′′ ( x ) = n = 2 ∑ ∞ ​ n ( n − 1 ) a n ​ x n − 2 = n = 0 ∑ ∞ ​ ( n + 2 ) ( n + 1 ) a n + 2 ​ x n S ′′ ( x ) − S ( x ) = n = 0 ∑ ∞ ​ [ ( n + 2 ) ( n + 1 ) a n + 2 ​ − a n ​ ] x n 因为 n ( n − 1 ) a n ​ − a n − 2 ​ = 0 （ n ≥ 2 ），所以 ( n + 2 ) ( n + 1 ) a n + 2 ​ − a n ​ = 0 ( n ≥ 0 ) ， ∴ ⎩ ⎨ ⎧ ​ S ′′ ( x ) − S ( x ) = 0 , S ( 0 ) = a 0 ​ = 3 , S ′ ( 0 ) = a 1 ​ = 1. ​ (II) λ 2 − 1 = 0 ， λ 1 ​ = 1 ， λ 2 ​ = − 1 ，所以 S ( x ) = C 1 ​ e − x + C 2 ​ e x 。 又 S ( 0 ) = 3 ， S ′ ( 0 ) = 1 ，所以 C 1 ​ = 1 ， C 2 ​ = 2 ， S ( x ) = e − x + 2 e x",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求函数\nf(x,y)=(y+3x3)ex+y\n的极值。",
    referenceAnswer: "【答案】 函数 f ( x , y ) 在点 ( 1 , − 3 4 ​ ) 处取得极小值 − e − 3 1 ​ ，点 ( − 1 , − 3 2 ​ ) 不是极值点。 【解析】 令 f x ′ ​ = e x + y ( x 2 + y + 3 x 3 ​ ) = 0 ， f y ′ ​ = e x + y ( 1 + y + 3 x 3 ​ ) = 0 。 解得 { x = 1 y = − 3 4 ​ ​ { x = − 1 y = − 3 2 ​ ​ 二阶偏导数为： f xx ′′ ​ = e x + y ( 2 x + 2 x 2 + y + 3 x 3 ​ ) , f x y ′′ ​ = e x + y ( 1 + x 2 + y + 3 x 3 ​ ) , f yy ′′ ​ = e x + y ( 2 + y + 3 x 3 ​ ) ​ 在点 ( 1 , − 3 4 ​ ) 处： A = f xx ′′ ​ ∣ ( 1 , − 3 4 ​ ) ​ = 3 e − 3 1 ​ , B = f x y ′′ ​ ∣ ( 1 , − 3 4 ​ ) ​ = e − 3 1 ​ , C = f yy ′′ ​ ∣ ( 1 , − 3 4 ​ ) ​ = e − 3 1 ​ 计算判别式： A C − B 2 = 3 e − 3 2 ​ − e − 3 2 ​ = 2 e − 3 2 ​ > 0 又因为 A > 0 ，所以 ( 1 , − 3 4 ​ ) 是 f ( x , y ) 的极小值点，极小值为： f ( 1 , − 3 4 ​ ) = − e − 3 1 ​ 在点 ( − 1 , − 3 2 ​ ) 处： A = f xx ′′ ​ ∣ ( − 1 , − 3 2 ​ ) ​ = − e − 3 5 ​ , B = f x y ′′ ​ ∣ ( − 1 , − 3 2 ​ ) ​ = e − 3 5 ​ , C = f yy ′′ ​ ∣ ( − 1 , − 3 2 ​ ) ​ = e − 3 5 ​ 由于 A C − B 2 < 0 ，因此 ( − 1 , − 3 2 ​ ) 不是 f ( x , y ) 的极值点。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设奇函数\nf(x)\n在\n[−1,1]\n上具有 2 阶导数，且\nf(1)=1\n。证明：\n\n(I) 存在\nξ∈(0,1)\n，使得\nf′(ξ)=1\n。\n\n(II) 存在\nη∈(−1,1)\n，使得\nf′′(η)+f′(η)=1\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 由于 f ( x ) 在 [ − 1 , 1 ] 上为奇函数，故 f ( − x ) = − f ( x ) ，则 f ( 0 ) = 0 。令 F ( x ) = f ( x ) − x ，则 F ( x ) 在 [ 0 , 1 ] 上连续，在 ( 0 , 1 ) 内可导，且 F ( 1 ) = f ( 1 ) − 1 = 0 ， F ( 0 ) = f ( 0 ) − 0 = 0 。由罗尔定理，存在 ξ ∈ ( 0 , 1 ) ，使得 F ′ ( ξ ) = 0 ，即 f ′ ( ξ ) = 1 。 (II) 由于 f ( x ) 在 [ − 1 , 1 ] 上为奇函数，则 f ′ ( x ) 在 [ − 1 , 1 ] 上为偶函数，所以由 (I) 得 f ′ ( − ξ ) = f ′ ( ξ ) = 1 。 令 G ( x ) = e x [ f ′ ( x ) − 1 ] ，则 G ( x ) 在 [ − 1 , 1 ] 上连续，在 ( − 1 , 1 ) 内可导，且 G ( ξ ) = G ( − ξ ) = 0 。由罗尔定理，存在 η ∈ ( − ξ , ξ ) ⊂ ( − 1 , 1 ) ，使得 G ′ ( η ) = 0 ，即 f ′′ ( η ) + f ′ ( η ) = 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n设直线\nL\n过\nA(1,0,0)\n，\nB(0,1,1)\n两点，将\nL\n绕\nz\n轴旋转一周得到曲面\n∑\n，\n∑\n与平面\nz=0\n，\nz=2\n所围成的立体为\nΩ\n。\n\n(I) 求曲面\n∑\n的方程，\n\n(II) 求\nΩ\n的形心坐标。",
    referenceAnswer: "【答案】 (I) x 2 + y 2 = 2 z 2 − 2 z + 1 (II) ( 0 , 0 , 5 7 ​ ) 【解析】 (I) 已知 A B = ( − 1 , 1 , 1 ) ，因此直线 L 的方程为 − 1 x − 1 ​ = 1 y ​ = 1 z ​ . 设 Σ 上任意一点是由直线 L 上的某点绕 z 轴旋转一周得到的，则有 { x 2 + y 2 = x 0 2 ​ + y 0 2 ​ , z = z 0 ​ . ​ 又因为 − 1 x 0 ​ − 1 ​ = 1 y 0 ​ ​ = 1 z 0 ​ ​ , 所以 Σ 的方程为 x 2 + y 2 = ( 1 − z ) 2 + z 2 = 2 z 2 − 2 z + 1. (II) 将方程改写为 x 2 + y 2 − 2 ( z − 2 1 ​ ) 2 = 2 1 ​ . 设形心坐标为 ( x ˉ , y ˉ ​ , z ˉ ) ，由于几何体关于坐标轴对称，可知 x ˉ = y ˉ ​ = 0. 计算 z = ∭ Ω ​ d v ∭ Ω ​ z d v ​ = ∫ 0 2 ​ d z x 2 + y 2 ≤ 2 z 2 − 2 z + 1 ∬ ​ d x d y ∫ 0 2 ​ z d z x 2 + y 2 ≤ 2 z 2 − 2 z + 1 ∬ ​ d x d y ​ . 因为 x 2 + y 2 ≤ 2 z 2 − 2 z + 1 ∬ ​ d x d y = π ( 2 z 2 − 2 z + 1 ) , 所以 z = π ∫ 0 2 ​ ( 2 z 2 − 2 z + 1 ) d z π ∫ 0 2 ​ z ( 2 z 2 − 2 z + 1 ) d z ​ = ∫ 0 2 ​ ( 2 z 2 − 2 z + 1 ) d z ∫ 0 2 ​ ( 2 z 3 − 2 z 2 + z ) d z ​ . 计算分子： ∫ 0 2 ​ ( 2 z 3 − 2 z 2 + z ) d z = [ 2 z 4 ​ − 3 2 z 3 ​ + 2 z 2 ​ ] 0 2 ​ = 8 − 3 16 ​ + 2 = 3 14 ​ . 计算分母： ∫ 0 2 ​ ( 2 z 2 − 2 z + 1 ) d z = [ 3 2 z 3 ​ − z 2 + z ] 0 2 ​ = 3 16 ​ − 4 + 2 = 3 10 ​ . 因此 z = 3 10 ​ 3 14 ​ ​ = 5 7 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）\n\n设\nA=(11a0)\n，\nB=(011b)\n，当\na\n、\nb\n为何值时，存在矩阵\nC\n使得\nAC−CA=B\n，并求所有矩阵 C 。",
    referenceAnswer: "【答案】 当 a = − 1 , b = 0 时，存在矩阵 C ，且 C = ( k 1 ​ + k 2 ​ + 1 k 1 ​ ​ − k 1 ​ k 2 ​ ​ ) ，其中 k 1 ​ , k 2 ​ 为任意常数。 【解析】 设 C = ( x 1 ​ x 3 ​ ​ x 2 ​ x 4 ​ ​ ) ，由 A C − C A = B 得 ( 1 1 ​ a 0 ​ ) ( x 1 ​ x 3 ​ ​ x 2 ​ x 4 ​ ​ ) − ( x 1 ​ x 3 ​ ​ x 2 ​ x 4 ​ ​ ) ( 1 1 ​ a 0 ​ ) = ( 0 1 ​ 1 b ​ ) ( x 1 ​ + a x 3 ​ x 1 ​ ​ x 2 ​ + a x 4 ​ x 2 ​ ​ ) − ( x 1 ​ + x 2 ​ x 3 ​ + x 4 ​ ​ a x 1 ​ a x 3 ​ ​ ) = ( 0 1 ​ 1 b ​ ) ⎩ ⎨ ⎧ ​ − x 2 ​ + a x 3 ​ = 0 − a x 1 ​ + x 2 ​ + a x 4 ​ = 1 x 1 ​ − x 3 ​ − x 4 ​ = 1 x 2 ​ − a x 3 ​ = b ​ 由于矩阵C存在，对方程组的增广矩阵进行初等行变换 ​ 0 − a 1 0 ​ − 1 1 0 1 ​ a 0 − 1 − a ​ 0 a − 1 0 ​ ⋮ ⋮ ⋮ ⋮ ​ 0 1 1 b ​ ​ → ​ 1 0 0 0 ​ 0 1 1 0 ​ − 1 − a − a 0 ​ − 1 0 0 0 ​ ⋮ ⋮ ⋮ ⋮ ​ 1 0 a + 1 b ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ − 1 − a 0 0 ​ − 1 0 0 0 ​ ⋮ ⋮ ⋮ ⋮ ​ 1 0 a + 1 b ​ ​ 方程组有解，故 a + 1 = 0 , b = 0 , 即 a = − 1 ， b = 0 。 此时存在矩阵 C 使得 A C − C A = B 。 当 a = − 1 ， b = 0 时，增广矩阵化为 ​ 1 0 0 0 ​ 0 1 0 0 ​ − 1 1 0 0 ​ − 1 0 0 0 ​ ⋮ ⋮ ⋮ ⋮ ​ 1 0 0 0 ​ ​ . 取 x 3 ​ 、 x 4 ​ 为自由变量。 令 x 3 ​ = 1 ， x 4 ​ = 0 ，代入相应齐次方程组，得 x 2 ​ = − 1 ， x 1 ​ = 1 ； 令 x 3 ​ = 0 ， x 4 ​ = 1 ，代入相应齐次方程组，得 x 2 ​ = 0 ， x 1 ​ = 1 。 故 ξ 1 ​ = ( 1 , − 1 , 1 , 0 ) T , ξ 2 ​ = ( 1 , 0 , 0 , 1 ) T . 令 x 3 ​ = 0 ， x 4 ​ = 0 ，得特解 η = ( 1 , 0 , 0 , 0 ) T . 方程组的通解为 x = k 1 ​ ξ 1 ​ + k 2 ​ ξ 2 ​ + η = ( k 1 ​ + k 2 ​ + 1 , − k 1 ​ , k 1 ​ , k 2 ​ ) T . 所以 C = ( k 1 ​ + k 2 ​ + 1 k 1 ​ ​ − k 1 ​ k 2 ​ ​ ) , k 1 ​ , k 2 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型\n\nf(x1,x2,x3)=(a1x1+a2x2+a3x3)2+(b1x1+b2x2+b3x3)2,\n\n记\n\nα=a1a2a3,β=b1b2b3.\n\n(I) 证明二次型\nf\n对应的矩阵为\n2ααT+ββT\n；\n\n(II) 若\nα,β\n正交且为单位向量，证明\nf\n在正交变换下的标准形为\n2y12+y22\n。",
    referenceAnswer: "【答案】 见解析 【解析】 证明： （I） f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 2 ( a 1 ​ x 1 ​ + a 2 ​ x 2 ​ + a 3 ​ x 3 ​ ) 2 + ( b 1 ​ x 1 ​ + b 2 ​ x 2 ​ + b 3 ​ x 3 ​ ) 2 ​ = 2 ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ a 1 ​ a 2 ​ a 3 ​ ​ ​ ( a 1 ​ , a 2 ​ , a 3 ​ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ + ( x 1 ​ , x 2 ​ , x 3 ​ ) ​ b 1 ​ b 2 ​ b 3 ​ ​ ​ ( b 1 ​ , b 2 ​ , b 3 ​ ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = ( x 1 ​ , x 2 ​ , x 3 ​ ) ( 2 α α T + β β T ) ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ = x T A x , A = 2 α α T + β β T , x = ( x 1 ​ , x 2 ​ , x 3 ​ ) T . ​ 所以二次型 f 对应的矩阵为 2 α α T + β β T 。 （II）由于 A = 2 α α T + β β T ，且 α 与 β 正交，故 α T β = 0 。又 α , β 为单位向量，故 ∥ α ∥ = α T α ​ = 1 ，因此 α T α = 1 ，同理 β T β = 1 。 计算得： A α = ( 2 α α T + β β T ) α = 2 α α T α + β β T α = 2 α , 由于 α  = 0 ，故 A 有特征值 λ 1 ​ = 2 。 又： A β = ( 2 α α T + β β T ) β = β , 由于 β  = 0 ，故 A 有特征值 λ 2 ​ = 1 。 矩阵的秩满足： r ( A ) ​ = r ( 2 α α T + β β T ) ≤ r ( 2 α α T ) + r ( β β T ) = r ( α α T ) + r ( β β T ) = 1 + 1 = 2 < 3 , ​ 所以 ∣ A ∣ = 0 ，故 λ 3 ​ = 0 。 因此， f 在正交变换下的标准形为 2 y 1 2 ​ + y 2 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n的概率密度为\n\nf(x)=⎩⎨⎧91x2,0,0x3其他\n\n令随机变量\n\nY=⎩⎨⎧2,X,1,X≤11X2X≥2\n\n（I）求\nY\n的分布函数；\n\n（II）求概率\nP{X≤Y}\n。",
    referenceAnswer: "【答案】 （I） Y 的分布函数为： F ( y ) = ⎩ ⎨ ⎧ ​ 0 , 27 1 ​ ( y 3 + 18 ) , 1 , ​ y < 1 1 ≤ y < 2 y ≥ 2 ​ （II） 见解析 【解析】 （I）设 y 的分布函数为 F ( y ) ，则 F ( y ) ​ = P { Y ≤ y } = P { Y ≤ y , X ≤ 1 } + P { Y ≤ y , 1 < X < 2 } + P { Y ≤ y , X ≥ 2 } = P { 2 ≤ y , X ≤ 1 } + P { X ≤ y , 1 < X < 2 } + P { 1 ≤ y , X ≥ 2 } ​ （II）当 y < 1 时， F ( y ) = 0 。 当 1 ≤ y < 2 时， F ( y ) = P { X ≤ y , 1 < X < 2 } + P { X ≥ 2 } = P { 1 < X ≤ y } + P { X ≥ 2 } = ∫ 1 y ​ 9 1 ​ x 2 d x + ∫ 2 3 ​ 9 1 ​ x 2 d x = 27 1 ​ ( y 3 − 1 ) + 27 1 ​ ( 3 3 − 2 3 ) = 27 1 ​ ( y 3 + 18 ) 当 y ≥ 2 时， F ( y ) = P { X ≤ 1 } + P { 1 < X < 2 } + P { X ≥ 2 } = 1",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设总体\nX\n的概率密度为\n\nf(x;θ)=⎩⎨⎧x3θ2e−xθ,0,x>0x≤0\n\n其中\nθ>0\n为未知参数，\nX1,X2,⋯,Xn\n为来自总体\nX\n的简单随机样本。\n\n(I) 求\nθ\n的矩估计量；\n\n(II) 求\nθ\n的最大似然估计量。",
    referenceAnswer: "【答案】 (I) θ ^ = X = n 1 ​ ∑ i = 1 n ​ X i ​ (II) θ ^ = ∑ i = 1 n ​ X i ​ 1 ​ 2 n ​ 【解析】 (I) E ( X ) = ∫ − ∞ + ∞ ​ x f ( x ; θ ) d x = ∫ 0 + ∞ ​ x ⋅ x 3 θ 2 ​ ⋅ e − x θ ​ d x = ∫ 0 + ∞ ​ x 2 θ 2 ​ ⋅ e − x θ ​ d x 令 t = x θ ​ ，则 x = t θ ​ ， d x = − t 2 θ ​ d t 。当 x → 0 + 时， t → + ∞ ；当 x → + ∞ 时， t → 0 。 E ( X ) = ∫ + ∞ 0 ​ ( t θ ​ ) 2 θ 2 ​ ⋅ e − t ⋅ ( − t 2 θ ​ ) d t = ∫ 0 + ∞ ​ θ e − t d t = θ 令 E ( X ) = X ，即 θ = X ，故 θ 的矩估计量为 θ ^ = X = n 1 ​ ∑ i = 1 n ​ X i ​ 。 (II) 似然函数为 L ( θ ) = i = 1 ∏ n ​ f ( x i ​ ; θ ) = { ∏ i = 1 n ​ x i 3 ​ θ 2 ​ e − x i ​ θ ​ , 0 , ​ x i ​ > 0 ( i = 1 , 2 , ⋯ , n ) 其他 ​ 当 x i ​ > 0 ( i = 1 , 2 , ⋯ , n ) 时，取对数得 ln L ( θ ) = i = 1 ∑ n ​ [ 2 ln θ − 3 ln x i ​ − x i ​ θ ​ ] 对 θ 求导并令其为 0： d θ d ln L ( θ ) ​ = θ 2 n ​ − i = 1 ∑ n ​ x i ​ 1 ​ = 0 解得 θ = ∑ i = 1 n ​ x i ​ 1 ​ 2 n ​ ，故 θ 的最大似然估计量为 θ ^ = ∑ i = 1 n ​ X i ​ 1 ​ 2 n ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2013_math1 = {
  id: P, year: Y,
  title: '2013 年全国硕士研究生招生考试 数学（一）',
  short: '2013 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2013_math1.length,
  qids: questions2013_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
