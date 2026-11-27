const P = 'paper-2021-math1'
const Y = 2021
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2021-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2021 考研数学（一）真题',
  ...extra
})

export const questions2021_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x)={xex−1,1,x=0,x=0\n，则\nf(x)\n在\nx=0\n处（ ）",
    options: [{ key: "A", text: "连续且取极大值" }, { key: "B", text: "连续且取极小值" }, { key: "C", text: "可导且导数为 0" }, { key: "D", text: "可导且导数不为 0" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 lim x → 0 ​ f ( x ) = lim x → 0 ​ x e x − 1 ​ = lim x → 0 ​ x x ​ = 1 = f ( 0 ) ，故 f ( x ) 在 x = 0 处连续。又 f ′ ( 0 ) = lim x → 0 ​ x f ( x ) − f ( 0 ) ​ = lim x → 0 ​ x x e x − 1 ​ − 1 ​ = lim x → 0 ​ x 2 e x − 1 − x ​ = lim x → 0 ​ x 2 1 + x + 2 1 ​ x 2 + o ( x 2 ) − 1 − x ​ = 2 1 ​ ，故应选(D)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x,y)\n可微，且\nf(x+1,ex)=x(x+1)2\n，\nf(x,x2)=2x2lnx\n，则\ndf(1,1)=\n（ ）",
    options: [{ key: "A", text: "d x + d y" }, { key: "B", text: "d x − d y" }, { key: "C", text: "d y" }, { key: "D", text: "− d y" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 f x ′ ​ ( x , y ) = 2 x ln y , f y ′ ​ ( x , y ) = y x 2 ​ , 则 f x ′ ​ ( 1 , 1 ) = 0 ， f y ′ ​ ( 1 , 1 ) = 1 ，得 df ( 1 , 1 ) = d y ，故应选(C)。"
  }),
  base(3, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x)=1+x2sinx\n在\nx=0\n处的3次泰勒多项式为\nax+bx2+cx3\n，则（ ）",
    options: [{ key: "A", text: "a = 1 , b = 0 , c = − 6 7 ​" }, { key: "B", text: "a = 1 , b = 0 , c = 6 7 ​" }, { key: "C", text: "a = − 1 , b = − 1 , c = − 6 7 ​" }, { key: "D", text: "a = − 1 , b = − 1 , c = 6 7 ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】由题意知， f ( x ) = 1 + x 2 s i n x ​ = a x + b x 2 + c x 3 + o ( x 3 ) ，故 sin x ​ = ( 1 + x 2 ) ( a x + b x 2 + c x 3 + o ( x 3 ) ) = a x + b x 2 + ( a + c ) x 3 + o ( x 3 ) , ​ 又 sin x = x − 6 1 ​ x 3 + o ( x 3 ) ，由泰勒展开的唯一性，比较系数，有 ⎩ ⎨ ⎧ ​ a = 1 , b = 0 , a + c = − 6 1 ​ , ​ 解得 ⎩ ⎨ ⎧ ​ a = 1 , b = 0 , c = − 6 7 ​ , ​ 故应选(A)。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\nf(x)\n在区间\n[0,1]\n上连续，则\n∫01f(x)dx=\n（ ）",
    options: [{ key: "A", text: "lim n → ∞ ​ ∑ k = 1 n ​ f ( 2 n 2 k − 1 ​ ) 2 n 1 ​" }, { key: "B", text: "lim n → ∞ ​ ∑ k = 1 n ​ f ( 2 n 2 k − 1 ​ ) n 1 ​" }, { key: "C", text: "lim n → ∞ ​ ∑ k = 1 2 n ​ f ( 2 n k − 1 ​ ) n 1 ​" }, { key: "D", text: "lim n → ∞ ​ ∑ k = 1 2 n ​ f ( 2 n k ​ ) n 2 ​" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】将区间 [ 0 , 1 ] 上均分成 n 份，取 ξ k ​ 为第 k 个小区间的中点，则 ξ k ​ = 2 n k − 1 ​ + n k ​ ​ = 2 n 2 k − 1 ​ ， ∫ 0 1 ​ f ( x ) d x = n → ∞ lim ​ k = 1 ∑ n ​ f ( 2 n 2 k − 1 ​ ) ⋅ n 1 ​ , 故应选(B)。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "二次型\nf(x1,x2,x3)=(x1+x2)2+(x2+x3)2−(x3−x1)2\n的正惯性指数与负惯性指数依次为（ ）",
    options: [{ key: "A", text: "2 ， 0" }, { key: "B", text: "1 ， 1" }, { key: "C", text: "2 ， 1" }, { key: "D", text: "1 ， 2" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 f = ( x 1 ​ + x 2 ​ ) 2 + ( x 2 ​ + x 3 ​ ) 2 − ( x 3 ​ − x 1 ​ ) 2 = 2 x 2 2 ​ + 2 x 1 ​ x 2 ​ + 2 x 1 ​ x 3 ​ + 2 x 2 ​ x 3 ​ , 对应的矩阵 A = ​ 0 1 1 ​ 1 2 1 ​ 1 1 0 ​ ​ ， ∣ λ E − A ∣ = ​ λ − 1 − 1 ​ − 1 λ − 2 − 1 ​ − 1 − 1 λ ​ ​ = λ ( λ − 3 ) ( λ + 1 ) , A 的特征值为 3 ， − 1 ， 0 ，故 f 的正、负惯性指数都是 1 ，故应选(B)。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nα1=101\n，\nα2=121\n，\nα3=312\n，\nβ1=α1\n，\nβ2=α2−kβ1\n，\nβ3=α3−l1β1−l2β2\n，若\nβ1\n，\nβ2\n，\nβ3\n两两正交，则\nl1\n，\nl2\n依次为（ ）",
    options: [{ key: "A", text: "2 5 ​ ， 2 1 ​" }, { key: "B", text: "2 5 ​ ， − 2 1 ​" }, { key: "C", text: "− 2 5 ​ ， 2 1 ​" }, { key: "D", text: "− 2 5 ​ ， − 2 1 ​" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】由已知，有 β 1 ​ = α 1 ​ , β 2 ​ = α 2 ​ − k β 1 ​ = α 2 ​ − k α 1 ​ , β 3 ​ = α 3 ​ − l 1 ​ β 1 ​ − l 2 ​ β 2 ​ = α 3 ​ − l 1 ​ α 1 ​ − l 2 ​ ( α 2 ​ − k α 1 ​ ) , 又 β 1 ​ ， β 2 ​ ， β 3 ​ 两两正交，故 ( β 1 ​ , β 2 ​ ) = 0 ，即 ( α 1 ​ , α 2 ​ − k α 1 ​ ) = ( α 1 ​ , α 2 ​ ) − k ( α 1 ​ , α 1 ​ ) = 2 − 2 k = 0 , 得 k = 1 ，此时 β 3 ​ = α 3 ​ − ( l 1 ​ − l 2 ​ ) α 1 ​ − l 2 ​ α 2 ​ 。又 ( β 1 ​ , β 3 ​ ) ​ = ( α 1 ​ , α 3 ​ − ( l 1 ​ − l 2 ​ ) α 1 ​ − l 2 ​ α 2 ​ ) = ( α 1 ​ , α 3 ​ ) − ( l 1 ​ − l 2 ​ ) ( α 1 ​ , α 1 ​ ) − l 2 ​ ( α 1 ​ , α 2 ​ ) = 5 − ( l 1 ​ − l 2 ​ ) ⋅ 2 − 2 l 2 ​ = 5 − 2 l 1 ​ = 0 , ​ 得 l 1 ​ = 2 5 ​ 。 β 2 ​ = α 2 ​ − α 1 ​ = ​ 0 2 0 ​ ​ ，又 ( β 2 ​ , β 3 ​ ) ​ = ( β 2 ​ , α 3 ​ − ( l 1 ​ − l 2 ​ ) α 1 ​ − l 2 ​ α 2 ​ ) = ( β 2 ​ , α 3 ​ ) − ( l 1 ​ − l 2 ​ ) ( β 2 ​ , α 1 ​ ) − l 2 ​ ( β 2 ​ , α 2 ​ ) = 2 − ( l 1 ​ − l 2 ​ ) ⋅ 0 − l 2 ​ ⋅ 4 = 2 − 4 l 2 ​ = 0 , ​ 得 l 2 ​ = 2 1 ​ ，故应选(A)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA\n，\nB\n为\nn\n阶实矩阵，下列不成立的是（ ）",
    options: [{ key: "A", text: "r ( A O ​ O A T A ​ ) = 2 r" }, { key: "B", text: "r ( A O ​ A B A T ​ ) = 2 r" }, { key: "C", text: "r ( A O ​ B A A A T ​ ) = 2 r" }, { key: "D", text: "r ( A B A ​ O A T ​ ) = 2 r" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 对于(A) ： r ( A O ​ O A T A ​ ) = r ( A ) + r ( A T A ) = r ( A ) + r ( A ) = 2 r ( A ) ； 对于(B) ： r ( A O ​ A B A T ​ ) = r ( A A T ​ ) + r ( A B ) ，因 ( E ​ B ​ ) 行满秩，所以 r ( A ​ A B ​ ) = r ( A ) ，于是 r ( A O ​ A B A T ​ ) = r ( A ) + r ( A T ) = 2 r ( A ) ； 对于(D) ： r ( A B A ​ O A T ​ ) = r ( A ) + r ( A T ) = 2 r ( A ) ； 对于(C) ：取 A = ( 1 1 ​ 0 0 ​ ) ， B = ( 1 0 ​ 0 0 ​ ) ，则 ( A O ​ B A A A T ​ ) = ​ 1 1 0 0 ​ 0 0 0 0 ​ 1 0 1 1 ​ 0 0 1 1 ​ ​ ， r ( A O ​ B A A A T ​ ) = 3  = 2 r ( A ) = 2 ，故应选 (C)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nA,B\n为随机事件，且\n0P(B)1\n，下列命题中为假命题的是( ).",
    options: [{ key: "A", text: "若 P ( A ∣ B ) = P ，则 P ( A ∣ B ) = P" }, { key: "B", text: "若 P ( A ∣ B ) > P ，则 P ( A ∣ B ) > P ( A )" }, { key: "C", text: "若 P ( A ∣ B ) > P ( A ∣ B ) ，则 P ( A ∣ B ) > P ( B )" }, { key: "D", text: "若 P ( A ∣ A ∪ B ) > P ( A ∣ A ∪ B ) ，则 P ( A ) > P ( B )" }],
    answer: ["D"],
    explain: "正确答案： D 【解】由 P ( A ∣ B ) = P ( A ) 得 P ( A B ) = P ( A ) P ( B ) ,即事件A,B独立, 于是 P ( A ∣ B ) = P ( B ) P ( A B ) ​ = P ( B ) P ( A ) P ( B ) ​ = P ( A ) ; 由 P ( A ∣ B ) > P ( A ) 得 P ( A B ) > P ( A ) P ( B ) , 从而 P ( A ∣ B ) = P ( B ) P ( A B ) ​ = 1 − P ( B ) 1 − P ( A ) − P ( B ) + P ( A B ) ​ > 1 − P ( B ) 1 − P ( A ) − P ( B ) + P ( A ) P ( B ) ​ = 1 − P ( A ) = P ( A ) ; 由 P ( A ∣ B ) > P ( A ∣ B ) 得 P ( B ) P ( A B ) ​ > 1 − P ( B ) P ( A ) − P ( A B ) ​ ，整理得 P ( A B ) > P ( A ) P ( B ) , 则 P ( A ∣ B ) = P ( B ) P ( A B ) ​ > P ( B ) P ( A ) P ( B ) ​ = P ( A ) ,应选(D)."
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\n(X1,Y1),(X2,Y2),⋯,(Xn,Yn)\n为来自总体\nN(μ1,μ2;σ12,σ22;ρ)\n的简单随机样本，令\nθ=μ1−μ2\n，\nX=n1∑i=1nXi\n，\nY=n1∑i=1nYi\n，\nθ^=X−Y\n，则（）",
    options: [{ key: "A", text: "θ ^ 是 θ 的无偏估计， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ ​" }, { key: "B", text: "θ ^ 不是 θ 的无偏估计， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ ​" }, { key: "C", text: "θ ^ 是 θ 的无偏估计， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ − 2 ρ σ 1 ​ σ 2 ​ ​" }, { key: "D", text: "θ ^ 不是 θ 的无偏估计， D ( θ ^ ) = n σ 1 2 ​ + σ 2 2 ​ − 2 ρ σ 1 ​ σ 2 ​ ​" }],
    answer: ["C"],
    explain: "正确答案： C 【解】 X ∼ N ( μ 1 ​ , n σ 1 2 ​ ​ ) ， Y ∼ N ( μ 2 ​ , n σ 2 2 ​ ​ ) ， 则 E ( θ ^ ) = E ( X ) − E ( Y ) = μ 1 ​ − μ 2 ​ = θ ； D ( θ ^ ) = D ( X − Y ) = D ( X ) + D ( Y ) − 2 Cov ( X , Y ) = n σ 1 2 ​ ​ + n σ 2 2 ​ ​ − n 2 ​ [ Cov ( X 1 ​ , Y ) + Cov ( X 2 ​ , Y ) + ⋯ + Cov ( X n ​ , Y )] = n σ 1 2 ​ ​ + n σ 2 2 ​ ​ − n 2 2 ​ [ Cov ( X 1 ​ , Y 1 ​ ) + Cov ( X 2 ​ , Y 2 ​ ) + ⋯ + Cov ( X n ​ , Y n ​ )] = n σ 1 2 ​ ​ + n σ 2 2 ​ ​ − n 2 2 ​ ⋅ n ρ σ 1 ​ σ 2 ​ = n σ 1 2 ​ + σ 2 2 ​ − 2 ρ σ 1 ​ σ 2 ​ ​ ，应选（C）."
  }),
  base(10, 'k-math-020', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\nX1,X2,⋯,X16\n是来自总体\nN(μ,4)\n的简单随机样本，考虑假设检验问题：\nH0:μ≤10\n，\nH1:μ>10\n，\nΦ(x)\n表示标准正态分布函数，若该检验问题的拒绝域为\nW={X≥11}\n，其中\nX=161∑i=116Xi\n，则\nμ=11.5\n时，该检验犯第二类错误的概率为（）。",
    options: [{ key: "A", text: "1 − Φ ( 0.5 )" }, { key: "B", text: "1 − Φ ( 1 )" }, { key: "C", text: "1 − Φ ( 1.5 )" }, { key: "D", text: "1 − Φ ( 2 )" }],
    answer: ["B"],
    explain: "正确答案： B 【解】 由题 X ∼ N ( 11.5 , 4 1 ​ ) ，或 2 1 ​ X − 11.5 ​ ∼ N ( 0 , 1 ) ， 犯第二类错误的概率为 P { X < 11 } = P { 2 1 ​ X − 11.5 ​ < − 1 } = Φ ( − 1 ) = 1 − Φ ( 1 ) ， 应选（B）。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\n\n∫0+∞x2+2x+21dx=",
    answerText: "】 4 π ​ 【",
    referenceAnswer: "【答案】 4 π ​ 【解析】 ∫ 0 + ∞ ​ x 2 + 2 x + 2 1 ​ d x ​ = ∫ 0 + ∞ ​ ( x + 1 ) 2 + 1 1 ​ d x = a rc t an ( x + 1 ) ∣ 0 + ∞ ​ = l i m x → + ∞ ​ a rc t an ( x + 1 ) − a rc t an ( 1 ) = 2 π ​ − 4 π ​ = 4 π ​ . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设函数\ny=y(x)\n由参数方程\n{x=2et+t+1,y=4(t−1)et+t2\n所确定，则\ndx2d2yt=0=\n______。",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 d x d y ​ = d x / d t d y / d t ​ = 2 e t + 1 4 t e t + 2 t ​ = 2 t d x 2 d 2 y ​ = d x / d t d ( 2 t ) / d t ​ = 2 e t + 1 2 ​ ∴ d x 2 d 2 y ​ ​ t = 0 ​ = 3 2 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）欧拉方程\nx2y′′+xy′−4y=0\n满足条件\ny(1)=1\n，\ny′(1)=2\n的解为\ny=\n______。",
    answerText: "】 x 2 【",
    referenceAnswer: "【答案】 x 2 【解析】 令 x = e t ， D = d t d ​ ，则 x y ′ = Dy ， x 2 y ′′ = D ( D − 1 ) y ， 代入欧拉方程得 d t 2 d 2 y ​ − 4 y = 0 ， 特征方程为 λ 2 − 4 = 0 ，特征根为 λ 1 ​ = − 2 ， λ 2 ​ = 2 ， d t 2 d 2 y ​ − 4 y = 0 的通解为 y = C 1 ​ e − 2 t + C 2 ​ e 2 t ，原方程的通解为 y = x 2 C 1 ​ ​ + C 2 ​ x 2 ， 由 y ( 1 ) = 1 ， y ′ ( 1 ) = 2 得 C 1 ​ + C 2 ​ = 1 ， − 2 C 1 ​ + 2 C 2 ​ = 2 ，解得 C 1 ​ = 0 ， C 2 ​ = 1 ， 故 y = x 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设Σ为空间区域\n{(x,y,z)∣x2+4y2≤4,0≤z≤2}\n表面的外侧，则曲面积分\n∬Σx2dydz+y2dzdx+zdxdy=\n______．",
    answerText: "】 4π 【",
    referenceAnswer: "【答案】 4π 【解析】 设Σ所围成的几何体为 Ω ，由高斯公式得 I = ∬ Σ ​ x 2 d y d z + y 2 d z d x + z d x d y = ∭ Ω ​ ( 2 x + 2 y + 1 ) d v ， 由积分的奇偶性得 I = ∭ Ω ​ 1 d v = 2 ∬ D x y ​ ​ d x d y = 2 ⋅ π ⋅ 1 ⋅ 2 = 4 π ．",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\nA=a(ij)\n为3阶矩阵，\nAij\n为代数余子式，若 A 的每行元素之和均为2，且\n∣A∣=3\n， 则\nA11+A21+A31=",
    answerText: "】 2 3 ​ 【",
    referenceAnswer: "【答案】 2 3 ​ 【解析】 【分析】求 A 11 ​ + A 21 ​ + A 31 ​ ，相当于求 A ∗ 的第1行元素之和 已知 A 的每行元素之和均为2，故 A ​ 1 1 1 ​ ​ = ​ 2 2 2 ​ ​ = 2 ​ 1 1 1 ​ ​ 又 A ∗ A = ∣ A ∣ E = 3 E ，故 A ∗ ​ 1 1 1 ​ ​ = 2 3 ​ ​ 1 1 1 ​ ​ , 故 A 11 ​ + A 21 ​ + A 31 ​ = 2 3 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）甲，乙两个盒子中各装有\n2\n个红球和\n2\n个白球，先从甲盒中任取一球，观察颜色后放入乙盒中，再从乙盒中任取一球。令\nX\n，\nY\n分别表示从甲盒和乙盒中取到的红球个数，则\nX\n与\nY\n的相关系数为",
    answerText: "】 5 1 ​ 【",
    referenceAnswer: "【答案】 5 1 ​ 【解析】 由题意有 P { X = 0 } = P { X = 1 } = 2 1 ​ , P { Y = 0 } ​ = P { Y = 0∣ X = 0 } P { X = 0 } + P { Y = 0∣ X = 1 } P { X = 1 } = 5 3 ​ ⋅ 2 1 ​ + 5 2 ​ ⋅ 2 1 ​ = 2 1 ​ , ​ P { Y = 1 } = 1 − P { Y = 0 } = 2 1 ​ , P { X = 0 , Y = 0 } ​ = P { Y = 0∣ X = 0 } P { X = 0 } = 5 3 ​ ⋅ 2 1 ​ = 10 3 ​ , ​ 故 ( X , Y ) 的概率分布为 Y = 0 Y = 1 ​ X = 0 10 3 ​ 10 2 ​ ​ X = 1 10 2 ​ 10 3 ​ ​ ​ 从而 ρ X Y ​ = D X ​ ⋅ D Y ​ co v ( X , Y ) ​ = D X ​ ⋅ D Y ​ E ( X Y ) − E ( X ) E ( Y ) ​ = 2 1 ​ 2 1 ​ 10 3 ​ − 2 1 ​ 2 1 ​ ​ = 5 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分10分）\n\n求极限\nx→0lim(ex−11+∫0xet2dt−sinx1)\n。",
    referenceAnswer: "【答案】 1/2 【解析】 方法一 ​ x → 0 lim ​ ( e x − 1 1 + ∫ 0 x ​ e t 2 d t ​ − sin x 1 ​ ) = x → 0 lim ​ ( e x − 1 ) sin x ( 1 + ∫ 0 x ​ e t 2 d t ) sin x − e x + 1 ​ = x → 0 lim ​ x 2 ( 1 + ∫ 0 x ​ e t 2 d t ) sin x − e x + 1 ​ = x → 0 lim ​ ( x 2 sin x − x ​ + x 2 ∫ 0 x ​ e t 2 d t ⋅ sin x − e x + 1 + x ​ ) = x → 0 lim ​ x 2 ∫ 0 x ​ e t 2 d t ⋅ sin x − e x + 1 + x ​ = x → 0 lim ​ x sin x ​ ⋅ x ∫ 0 x ​ e t 2 d t ​ − x → 0 lim ​ x 2 e x − 1 − x ​ = x → 0 lim ​ e x 2 − x → 0 lim ​ 2 x e x − 1 ​ = 1 − 2 1 ​ = 2 1 ​ . ​ 方法二 x → 0 lim ​ ( e x − 1 1 + ∫ 0 x ​ e t 2 d t ​ − sin x 1 ​ ) = x → 0 lim ​ ( e x − 1 ∫ 0 x ​ e t 2 d t ​ + e x − 1 1 ​ − sin x 1 ​ ) , 由 x → 0 lim ​ e x − 1 ∫ 0 x ​ e t 2 d t ​ = x → 0 lim ​ e x e x 2 ​ = 1 , x → 0 lim ​ ( e x − 1 1 ​ − sin x 1 ​ ) ​ = x → 0 lim ​ ( e x − 1 ) sin x sin x − e x + 1 ​ = x → 0 lim ​ x 2 sin x − e x + 1 ​ = 2 1 ​ x → 0 lim ​ x cos x − e x ​ = 2 1 ​ x → 0 lim ​ ( − sin x − e x ) = − 2 1 ​ . ​ 得 x → 0 lim ​ ( e x − 1 1 + ∫ 0 x ​ e t 2 d t ​ − sin x 1 ​ ) = 1 − 2 1 ​ = 2 1 ​ . 方法三 由泰勒公式得 e t 2 = 1 + t 2 + o ( t 2 ) , 从而 ∫ 0 x ​ e t 2 d t = x + 3 x 3 ​ + o ( x 3 ) , 于是有 ​ x → 0 lim ​ ( e x − 1 1 + ∫ 0 x ​ e t 2 d t ​ − sin x 1 ​ ) = x → 0 lim ​ [ e x − 1 1 + x + 3 x 3 ​ + o ( x 3 ) ​ − sin x 1 ​ ] = x → 0 lim ​ ( e x − 1 1 + x ​ − sin x 1 ​ ) = x → 0 lim ​ e x − 1 x ​ + x → 0 lim ​ ( e x − 1 1 ​ − sin x 1 ​ ) = 1 + x → 0 lim ​ ( e x − 1 ) sin x sin x − e x + 1 ​ = 1 + x → 0 lim ​ x 2 sin x − e x + 1 ​ = 1 + x → 0 lim ​ 2 x cos x − e x ​ = 1 + x → 0 lim ​ 2 − sin x − e x ​ = 2 1 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分12分)\n\n设\nun(x)=e−nx+n(n+1)xn+1(n=1,2,⋯)\n，求级数\n∑n=1∞un(x)\n的收敛域及和函数.",
    referenceAnswer: "【答案】 收敛域为 ( 0 , 1 ] ，和函数为 S ( x ) = ⎩ ⎨ ⎧ ​ e x − 1 1 ​ + ( 1 − x ) ln ( 1 − x ) + x , e − 1 e ​ , ​ 0 < x < 1 , x = 1. ​ 【解析】 ∑ n = 1 ∞ ​ u n ​ ( x ) = ∑ n = 1 ∞ ​ e − n x + ∑ n = 1 ∞ ​ n ( n + 1 ) x n + 1 ​ 。 当 lim n → ∞ ​ e − n x e − ( n + 1 ) x ​ = e − x < 1 ，即 x > 0 时， ∑ n = 1 ∞ ​ e − n x 收敛。 再由 lim n → ∞ ​ n ( n + 1 ) 1 ​ ( n + 1 ) ( n + 2 ) 1 ​ ​ = 1 得， ∑ n = 1 ∞ ​ n ( n + 1 ) x n + 1 ​ 的收敛半径为 R = 1 。 当 x = ± 1 时， n = 1 ∑ ∞ ​ n ( n + 1 ) ( ± 1 ) n + 1 ​ = n = 1 ∑ ∞ ​ n ( n + 1 ) 1 ​ = 1 , 故 ∑ n = 1 ∞ ​ n ( n + 1 ) x n + 1 ​ 的收敛域为 [ − 1 , 1 ] 。 因此级数 ∑ n = 1 ∞ ​ u n ​ ( x ) 的收敛域为 ( 0 , 1 ] 。 令 S ( x ) = n = 1 ∑ ∞ ​ u n ​ ( x ) = n = 1 ∑ ∞ ​ e − n x + n = 1 ∑ ∞ ​ n ( n + 1 ) x n + 1 ​ = S 1 ​ ( x ) + S 2 ​ ( x ) , 其中 S 1 ​ ( x ) = n = 1 ∑ ∞ ​ e − n x = 1 − e − x e − x ​ = e x − 1 1 ​ , S 2 ​ ( x ) ​ = n = 1 ∑ ∞ ​ n ( n + 1 ) x n + 1 ​ = n = 1 ∑ ∞ ​ n x n + 1 ​ − n = 1 ∑ ∞ ​ n + 1 x n + 1 ​ = x n = 1 ∑ ∞ ​ n x n ​ − n = 1 ∑ ∞ ​ n x n ​ + x = ( 1 − x ) ln ( 1 − x ) + x ( 0 < x < 1 ) . ​ 当 x = 1 时，由 S 1 ​ ( 1 ) = e − 1 1 ​ ， S 2 ​ ( 1 ) = 1 得 S ( 1 ) = e − 1 1 ​ + 1 = e − 1 e ​ . 故 S ( x ) = ⎩ ⎨ ⎧ ​ e x − 1 1 ​ + ( 1 − x ) ln ( 1 − x ) + x , e − 1 e ​ , ​ 0 < x < 1 , x = 1. ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分12分)\n\n已知曲线\nC:{x2+2y2−z=6,4x+2y+z=30,\n求\nC\n上的点到\nxOy\n坐标面距离的最大值.",
    referenceAnswer: "【答案】 66 【解析】 设 M ( x , y , z ) ∈ C ，点 M 到 x O y 坐标面的距离 d = ∣ z ∣ ， 令 F = z 2 + λ ( x 2 + 2 y 2 − z − 6 ) + μ ( 4 x + 2 y + z − 30 ) ， 由 ⎩ ⎨ ⎧ ​ F x ′ ​ = 2 λ x + 4 μ = 0 , F y ′ ​ = 4 λ y + 2 μ = 0 , F z ′ ​ = 2 z − λ + μ = 0 , F λ ′ ​ = x 2 + 2 y 2 − z − 6 = 0 , F μ ′ ​ = 4 x + 2 y + z − 30 = 0 ​ 得 ⎩ ⎨ ⎧ ​ x = 4 , y = 1 , z = 12 , ​ 或 ⎩ ⎨ ⎧ ​ x = − 8 , y = − 2 , z = 66 , ​ 故 C 上的点 ( − 8 , − 2 , 66 ) 到 x O y 面的距离最大为 66 .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分12分）\n\n设\nD⊂R2\n是有界单连通闭区域，\nI(D)=∬D(4−x2−y2)dxdy\n取得最大值的积分区域为\nD1\n。\n\n（Ⅰ）求\nI(D1)\n的值；\n\n（Ⅱ）计算\n∫∂D1x2+4y2(xex2+4y2+y)dx+(4yex2+4y2−x)dy\n，其中\n∂D1\n是\nD1\n的正向边界。",
    referenceAnswer: "【答案】 （Ⅰ） I ( D 1 ​ ) = 8 π ；（Ⅱ） − π 【解析】 （Ⅰ）显然 I ( D ) = ∬ D ​ ( 4 − x 2 − y 2 ) d x d y 取最大值的区域为 4 − x 2 − y 2 ≥ 0 ， 即 D 1 ​ = {( x , y ) ∣ x 2 + y 2 ≤ 4 } ，则 I ( D 1 ​ ) ​ = ∬ D 1 ​ ​ ( 4 − x 2 − y 2 ) d x d y = 2 π ∫ 0 2 ​ r ( 4 − r 2 ) d r = 2 π ∫ 0 2 ​ ( 4 r − r 3 ) d r = 2 π ( 8 − 4 ) = 8 π ​ （Ⅱ）令 L 0 ​ : x 2 + 4 y 2 = r 2 ( r > 0 , L 0 ​ 在 L 内，取逆时针 ) ，设 ∂ D 1 ​ 与 L 0 − ​ 所围成的区域为 D 0 ​ ， L 0 ​ 围成的区域为 D 2 ​ ，则 ​ ∫ ∂ D 1 ​ ​ x 2 + 4 y 2 ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y ​ = ∮ ∂ D 1 ​ + L 0 − ​ ​ x 2 + 4 y 2 ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y ​ + ∫ L 0 ​ ​ x 2 + 4 y 2 ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y ​ , ​ 而 ∮ ∂ D 1 ​ + L 0 − ​ ​ x 2 + 4 y 2 ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y ​ = ∬ D 0 ​ ​ ( ∂ x ∂ Q ​ − ∂ y ∂ P ​ ) d x d y = 0 ​ ∫ L 0 ​ ​ x 2 + 4 y 2 ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y ​ = r 2 1 ​ ∫ L 0 ​ ​ ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y = r 2 1 ​ ∬ D 2 ​ ​ ( 8 x y e x 2 + 4 y 2 − 1 − 8 x y e x 2 + 4 y 2 − 1 ) d x d y = r 2 − 2 ​ ∬ D 2 ​ ​ d x d y = r 2 − 2 ​ ⋅ π ⋅ r ⋅ 2 r ​ = − π . ​ 故 ∫ ∂ D 1 ​ ​ x 2 + 4 y 2 ( x e x 2 + 4 y 2 + y ) d x + ( 4 y e x 2 + 4 y 2 − x ) d y ​ = − π .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "(本题满分12分)\n\n已知\nA=a1−11a−1−1−1a\n。\n\n(Ⅰ)求正交矩阵\nP\n，使得\nPTAP\n为对角矩阵；\n\n(Ⅱ)求正定矩阵\nC\n，使得\nC2=(a+3)E−A\n。",
    referenceAnswer: "【答案】 (Ⅰ) 正交矩阵 P = ​ − 2 ​ 1 ​ 2 ​ 1 ​ 0 ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ − 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ ​ (Ⅱ) 正定矩阵 C = 3 1 ​ ​ 5 − 1 1 ​ − 1 5 1 ​ 1 1 5 ​ ​ 【解析】 (Ⅰ)由 ∣ λ E − A ∣ = ​ λ − a − 1 1 ​ − 1 λ − a 1 ​ 1 1 λ − a ​ ​ = ​ λ − a + 1 − 1 1 ​ − ( λ − a + 1 ) λ − a 1 ​ 0 1 λ − a ​ ​ = ( λ − a + 1 ) ​ 1 − 1 1 ​ − 1 λ − a 1 ​ 0 1 λ − a ​ ​ = ( λ − a + 1 ) ​ 1 − 1 1 ​ 0 λ − a − 1 2 ​ 0 1 λ − a ​ ​ = ( λ − a + 1 ) 2 ( λ − a − 2 ) = 0 ， 得 λ 1 ​ = λ 2 ​ = a − 1 ， λ 3 ​ = a + 2 ， 由 ( a − 1 ) E − A = ​ − 1 − 1 1 ​ − 1 − 1 1 ​ 1 1 − 1 ​ ​ → ​ 1 0 0 ​ 1 0 0 ​ − 1 0 0 ​ ​ 得 λ 1 ​ = λ 2 ​ = a − 1 对应的线性无关的特征向量为 α 1 ​ = ​ − 1 1 0 ​ ​ ， α 2 ​ = ​ 1 0 1 ​ ​ ； 由 ( a + 2 ) E − A = ​ 2 − 1 1 ​ − 1 2 1 ​ 1 1 2 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ − 1 1 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 1 1 0 ​ ​ 得 λ 3 ​ = a + 2 对应的特征向量为 α 3 ​ = ​ − 1 − 1 1 ​ ​ ， 令 β 1 ​ = α 1 ​ = ​ − 1 1 0 ​ ​ ， β 2 ​ = α 2 ​ − ( β 1 ​ , β 1 ​ ) ( α 2 ​ , β 1 ​ ) ​ β 1 ​ = ​ 1 0 1 ​ ​ + 2 1 ​ ​ − 1 1 0 ​ ​ = 2 1 ​ ​ 1 1 2 ​ ​ ， β 3 ​ = α 3 ​ = ​ − 1 − 1 1 ​ ​ ， 再令 γ 1 ​ = 2 ​ 1 ​ ​ − 1 1 0 ​ ​ ， γ 2 ​ = 6 ​ 1 ​ ​ 1 1 2 ​ ​ ， γ 3 ​ = 3 ​ 1 ​ ​ − 1 − 1 1 ​ ​ ， 得正交矩阵 P = ​ − 2 ​ 1 ​ 2 ​ 1 ​ 0 ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ − 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ ​ ， 使得 P T A P = ​ a − 1 0 0 ​ 0 a − 1 0 ​ 0 0 a + 2 ​ ​ 。 (Ⅱ)由 P T [( a + 3 ) E − A ] P = ​ 4 0 0 ​ 0 4 0 ​ 0 0 1 ​ ​ 得 ( a + 3 ) E − A = P ​ 4 0 0 ​ 0 4 0 ​ 0 0 1 ​ ​ P T = P ​ 2 0 0 ​ 0 2 0 ​ 0 0 1 ​ ​ P T ⋅ P ​ 2 0 0 ​ 0 2 0 ​ 0 0 1 ​ ​ P T ， 令 C = P ​ 2 0 0 ​ 0 2 0 ​ 0 0 1 ​ ​ P T ， = ​ − 2 ​ 1 ​ 2 ​ 1 ​ 0 ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ − 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ ​ ​ 2 0 0 ​ 0 2 0 ​ 0 0 1 ​ ​ ​ − 2 ​ 1 ​ 6 ​ 1 ​ − 3 ​ 1 ​ ​ 2 ​ 1 ​ 6 ​ 1 ​ − 3 ​ 1 ​ ​ 0 − 3 ​ 1 ​ 3 ​ 1 ​ ​ ​ = 3 1 ​ ​ 5 − 1 1 ​ − 1 5 1 ​ 1 1 5 ​ ​ 。 则 C 2 = ( a + 3 ) E − A 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分12分）\n\n在区间\n(0,2)\n上随机取一点，将该区间分成两段，较短一段的长度为\nX\n，较长一段的长度为\nY\n，令\nZ=XY\n.\n\n(Ⅰ)求\nX\n的概率密度；\n\n(Ⅱ)求\nZ\n的概率密度；\n\n(Ⅲ)求\nE(YX)\n.",
    referenceAnswer: "【答案】 (Ⅰ) X 的概率密度为 f X ​ ( x ) = { 1 , 0 , ​ 0 < x < 1 , 其他 ​ (Ⅱ) Z 的概率密度为 f Z ​ ( z ) = { 0 , ( z + 1 ) 2 2 ​ , ​ z ≤ 1 , z > 1. ​ (Ⅲ) E ( Y X ​ ) = 2 ln 2 − 1 【解析】 (Ⅰ) X的密度函数为 f X ​ ( x ) = { 1 , 0 , ​ 0 < x < 1 , 其他 ​ (Ⅱ) 由 Y = 2 − X 得 Z = X 2 − X ​ , F Z ​ ( z ) = P { Z ≤ z } = P { X 2 ​ − 1 ≤ z } , 当 z < 1 时, F Z ​ ( z ) = 0 ; 当 z ≥ 1 时, F Z ​ ( z ) = P { X ≥ z + 1 2 ​ } = ∫ z + 1 2 ​ 1 ​ 1 d x = 1 − z + 1 2 ​ = z + 1 z − 1 ​ , 即 F Z ​ ( z ) = { 0 , z + 1 z − 1 ​ , ​ z < 1 , z ≥ 1 , ​ 故Z的密度函数为 f Z ​ ( z ) = { 0 , ( z + 1 ) 2 2 ​ , ​ z ≤ 1 , z > 1. ​ (Ⅲ) E ( Y X ​ ) = E ( 2 − X X ​ ) = ∫ 0 1 ​ 2 − x x ​ d x = 2 ln 2 − 1 .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2021_math1 = {
  id: P, year: Y,
  title: '2021 年全国硕士研究生招生考试 数学（一）',
  short: '2021 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2021_math1.length,
  qids: questions2021_math1.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
