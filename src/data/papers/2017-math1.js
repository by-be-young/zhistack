const P = 'paper-2017-math1'
const Y = 2017
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2017-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2017 考研数学（一）真题',
  ...extra
})

export const questions2017_math1 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若函数\nf(x)=⎩⎨⎧ax1−cosx,b,x>0,x≤0\n在\nx=0\n处连续，则( )",
    options: [{ key: "A", text: "ab = 2 1 ​" }, { key: "B", text: "ab = − 2 1 ​" }, { key: "C", text: "ab = 0" }, { key: "D", text: "ab = 2" }],
    answer: ["A"],
    explain: "正确答案： A 【解】 f ( 0 + 0 ) = x → 0 + lim ​ a x 1 − cos x ​ ​ = 2 a 1 ​ ， f ( 0 ) = f ( 0 − 0 ) = b ， 因为 f ( x ) 在 x = 0 处连续，所以 f ( 0 + 0 ) = f ( 0 ) = f ( 0 − 0 ) ， 从而 ab = 2 1 ​ ，应选(A)."
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n可导，且\nf(x)f′(x)>0\n，则（）",
    options: [{ key: "A", text: "f ( 1 ) > f ( − 1 ) ．" }, { key: "B", text: "f ( 1 ) < f ( − 1 ) ．" }, { key: "C", text: "∣ f ( 1 ) ∣ > ∣ f ( − 1 ) ∣ ．" }, { key: "D", text: "∣ f ( 1 ) ∣ < ∣ f ( − 1 ) ∣ ．" }],
    answer: ["C"],
    explain: "正确答案： C 【解】 方法一 若 f ( x ) > 0 ，则 f ′ ( x ) > 0 ，从而 f ( 1 ) > f ( − 1 ) > 0 ； 若 f ( x ) < 0 ，则 f ′ ( x ) < 0 ，从而 f ( 1 ) < f ( − 1 ) < 0 ， 故 ∣ f ( 1 ) ∣ > ∣ f ( − 1 ) ∣ ，应选（C）． 方法二 由 f ( x ) ⋅ f ′ ( x ) = [ 2 1 ​ f 2 ( x ) ] ′ > 0 得 f 2 ( x ) 单调递增， 从而 f 2 ( 1 ) > f 2 ( − 1 ) ，故 ∣ f ( 1 ) ∣ > ∣ f ( − 1 ) ∣ ，应选（C）．"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数\nf(x,y,z)=x2y+z2\n在点\n(1,2,0)\n处沿向量\nn=(1,2,2)\n的方向导数为( )",
    options: [{ key: "A", text: "12" }, { key: "B", text: "6" }, { key: "C", text: "4" }, { key: "D", text: "2" }],
    answer: ["D"],
    explain: "正确答案： D 【解】 ∂ x ∂ f ​ = 2 x y ， ∂ y ∂ f ​ = x 2 ， ∂ z ∂ f ​ = 2 z ， ∂ x ∂ f ​ ​ ( 1 , 2 , 0 ) ​ = 4 ， ∂ y ∂ f ​ ​ ( 1 , 2 , 0 ) ​ = 1 ， ∂ z ∂ f ​ ​ ( 1 , 2 , 0 ) ​ = 0 ， cos α = 3 1 ​ ， cos β = 3 2 ​ ， cos γ = 3 2 ​ ， 所求的方向导数为 ∂ n ​ ∂ f ​ ​ ( 1 , 2 , 0 ) ​ = 4 × 3 1 ​ + 1 × 3 2 ​ = 2 ，应选(D). 【答案】(D)."
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "甲、乙两人赛跑，计时开始时，甲在乙前方 10（单位：m）处，图中，实线表示甲的速度曲线\nv=v1(t)\n（单位：m/s），虚线表示乙的速度曲线\nv=v2(t)\n，三块阴影部分面积的数值依次是 10,20,3。计时开始后乙追上甲的时刻记为\nt0\n（单位：s），则（）\n\n",
    options: [{ key: "A", text: "t 0 ​ = 10" }, { key: "B", text: "15 < t 0 ​ < 20" }, { key: "C", text: "t 0 ​ = 25" }, { key: "D", text: "t 0 ​ > 25" }],
    answer: ["C"],
    explain: "正确答案： C 【解】 从 t = 0 到 t = t 0 ​ 的时间段内，甲、乙走过的距离分别为 S 1 ​ = ∫ 0 t 0 ​ ​ v 1 ​ ( t ) d t , S 2 ​ = ∫ 0 t 0 ​ ​ v 2 ​ ( t ) d t . 在 t = t 0 ​ 时，有 S 1 ​ = S 2 ​ + 10 ，即 ∫ 0 t 0 ​ ​ v 1 ​ ( t ) d t = ∫ 0 t 0 ​ ​ v 2 ​ ( t ) d t + 10 , 或写作 ∫ 0 t 0 ​ ​ [ v 1 ​ ( t ) − v 2 ​ ( t ) ] d t = 10. 由此解得 t 0 ​ = 25 ，应选（C）。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα\n为\nn\n维单位列向量，\nE\n为\nn\n阶单位矩阵，则（）",
    options: [{ key: "A", text: "E − α α T 不可逆。" }, { key: "B", text: "E + α α T 不可逆。" }, { key: "C", text: "E + 2 α α T 不可逆。" }, { key: "D", text: "E − 2 α α T 不可逆。" }],
    answer: ["A"],
    explain: "正确答案： A 【解】 方法一 令 A = α α T ， A 2 = A ， 令 A X = λ X ，由 ( A 2 − A ) X = ( λ 2 − λ ) X = 0 得 λ 2 − λ = 0 ， λ = 0 或 λ = 1 ， 因为 t r A = α T α = 1 = λ 1 ​ + ⋯ + λ n ​ 得 A 的特征值为 λ 1 ​ = ⋯ = λ n − 1 ​ = 0 ， λ n ​ = 1 ， E − α α T 的特征值为 λ 1 ​ = ⋯ = λ n − 1 ​ = 1 ， λ n ​ = 0 ，从而 ∣ E − α α T ∣ = 0 ， 即 E − α α T 不可逆，应选（A）. 方法二 令 A = E − α α T ， A 2 = ( E − α α T ) ⋅ ( E − α α T ) = E − 2 α α T + α α T = A ， 由 A ( E − A ) = O 得 r ( A ) + r ( E − A ) ≤ n ， 再由 r ( A ) + r ( E − A ) ≥ r [ A + ( E − A )] = r ( E ) = n 得 r ( A ) + r ( E − A ) = n ， 而 E − A = α α T ， r ( E − A ) = r ( α α T ) = r ( α ) = 1 ， 于是 r ( A ) = n − 1 < n ，即 E − α α T 不可逆，应选（A）."
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知矩阵\nA=200020011\n,\nB=200120001\n,\nC=100020002\n, 则( )",
    options: [{ key: "A", text: "A 与 C 相似， B 与 C 相似。" }, { key: "B", text: "A 与 C 相似， B 与 C 不相似。" }, { key: "C", text: "A 与 C 不相似， B 与 C 相似。" }, { key: "D", text: "A 与 C 不相似， B 与 C 不相似。" }],
    answer: ["B"],
    explain: "正确答案： B 【解】 显然矩阵 A , B , C 的特征值都是 λ 1 ​ = λ 2 ​ = 2 , λ 3 ​ = 1 , 由 2 E − A = ​ 0 0 0 ​ 0 0 0 ​ 0 − 1 1 ​ ​ 得 r ( 2 E − A ) = 1 , 则 A 可相似对角化，从而 A ∼ C ; 由 2 E − B = ​ 0 0 0 ​ − 1 0 0 ​ 0 0 1 ​ ​ 得 r ( 2 E − B ) = 2 , 则 B 不可相似对角化，从而 B 与 A , C 不相似， 应选 (B)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA,B\n为随机事件.若\n0P(A)1,0P(B)1\n，则\nP(A∣B)>P(A∣B)\n的充分必要条件是( )",
    options: [{ key: "A", text: "P ( B ∣ A ) > P ( B ∣ A )" }, { key: "B", text: "P ( B ∣ A ) < P ( B ∣ A )" }, { key: "C", text: "P ( B ∣ A ) > P ( B ∣ A )" }, { key: "D", text: "P ( B ∣ A ) < P ( B ∣ A )" }],
    answer: ["A"],
    explain: "正确答案： A 【解】 由 P ( A ∣ B ) > P ( A ∣ B ) 得 P ( B ) P ( A B ) ​ > P ( B ) P ( A B ) ​ = 1 − P ( B ) P ( A ) − P ( A B ) ​ ，即 P ( A ∣ B ) > P ( A ∣ B ) 等价于 P ( A B ) > P ( A ) P ( B ) ； 由 P ( B ∣ A ) > P ( B ∣ A ) 得 P ( A ) P ( A B ) ​ > 1 − P ( A ) P ( B ) − P ( A B ) ​ ，即 P ( B ∣ A ) > P ( B ∣ A ) 等价于 P ( A B ) > P ( A ) P ( B ) ，应选(A)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1,X2,⋯,Xn(n≥2)\n为来自总体\nN(μ,1)\n的简单随机样本，记\nX=n1∑i=1nXi\n，则下列结论中不正确的是（）",
    options: [{ key: "A", text: "∑ i = 1 n ​ ( X i ​ − μ ) 2 服从 χ 2 分布。" }, { key: "B", text: "2 ( X n ​ − X 1 ​ ) 2 服从 χ 2 分布。" }, { key: "C", text: "∑ i = 1 n ​ ( X i ​ − X ) 2 服从 χ 2 分布。" }, { key: "D", text: "n ( X − μ ) 2 服从 χ 2 分布。" }],
    answer: ["B"],
    explain: "正确答案： B 【解】 若总体 X ∼ N ( μ , σ 2 ) ，则 σ 2 1 ​ ∑ i = 1 n ​ ( X i ​ − μ ) 2 ∼ χ 2 ( n ) ， σ 2 1 ​ ∑ i = 1 n ​ ( X i ​ − X ) 2 ∼ χ 2 ( n − 1 ) ， 因为总体 X ∼ N ( μ , 1 ) ，所以 ∑ i = 1 n ​ ( X i ​ − μ ) 2 ∼ χ 2 ( n ) ， ∑ i = 1 n ​ ( X i ​ − X ) 2 ∼ χ 2 ( n − 1 ) ， 再由 X ∼ N ( μ , n 1 ​ ) 得 n ​ 1 ​ X − μ ​ = n ​ ( X − μ ) ∼ N ( 0 , 1 ) ，从而 n ( X − μ ) 2 ∼ χ 2 ( 1 ) ， 不正确的是（B），应选（B）."
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知函数\nf(x)=1+x21\n，则\nf(3)(0)=\n______．",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 方法一 f ( x ) = 1 + x 2 1 ​ = 1 − x 2 + x 4 − x 6 + x 8 + o ( x 8 ) ， 由 3 ! f ( 3 ) ( 0 ) ​ = 0 得 f ( 3 ) ( 0 ) = 0 。 方法二 根据求导改变奇偶性的性质，因为 f ( x ) 为偶函数，所以 f ( 3 ) ( x ) 为奇函数， 故 f ( 3 ) ( 0 ) = 0 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\ny′′+2y′+3y=0\n的通解为\ny=\n______．",
    answerText: "】 e − x ( C 1 ​ cos 2 ​ x + C 2 ​ sin 2 ​ x ) （ C 1 ​ , C 2 ​ 为任意常数） 【",
    referenceAnswer: "【答案】 e − x ( C 1 ​ cos 2 ​ x + C 2 ​ sin 2 ​ x ) （ C 1 ​ , C 2 ​ 为任意常数） 【解析】 【解】 特征方程为 λ 2 + 2 λ + 3 = 0 ，特征值为 λ 1 , 2 ​ = − 1 ± 2 ​ i ，通解为 y = e − x ( C 1 ​ cos 2 ​ x + C 2 ​ sin 2 ​ x ) （ C 1 ​ , C 2 ​ 为任意常数）",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若曲线积分\n∫Lx2+y2−1xdx−aydy\n在区域\nD={(x,y)∣x2+y21}\n内与路径无关，则\na=\n______．",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 P = x 2 + y 2 − 1 x ​ , Q = − x 2 + y 2 − 1 a y ​ ∂ y ∂ P ​ = − ( x 2 + y 2 − 1 ) 2 2 x y ​ , ∂ x ∂ Q ​ = ( x 2 + y 2 − 1 ) 2 2 a x y ​ 由于曲线积分与路径无关， ∂ x ∂ Q ​ = ∂ y ∂ P ​ 代入得 ( x 2 + y 2 − 1 ) 2 2 a x y ​ = − ( x 2 + y 2 − 1 ) 2 2 x y ​ 因此 a = − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）幂级数\n∑n=1∞(−1)n−1nxn−1\n在区间\n(−1,1)\n内的和函数\nS(x)=\n______．",
    answerText: "】 ( 1 + x ) 2 1 ​ 【",
    referenceAnswer: "【答案】 ( 1 + x ) 2 1 ​ 【解析】 方法一 ： S ( x ) = ∑ n = 1 ∞ ​ ( − 1 ) n − 1 n x n − 1 = − [ ∑ n = 1 ∞ ​ ( − 1 ) n x n ] ′ = − ( 1 + x − x ​ ) ′ = ( 1 + x ) 2 1 ​ 方法二 ： 令 S ( x ) = ∑ n = 1 ∞ ​ ( − 1 ) n − 1 n x n − 1 ， 则 ∫ 0 x ​ S ( x ) d x = ∑ n = 1 ∞ ​ ∫ 0 x ​ ( − 1 ) n − 1 n x n − 1 d x = ∑ n = 1 ∞ ​ ( − 1 ) n − 1 x n = − ∑ n = 1 ∞ ​ ( − x ) n = − 1 + x − x ​ = 1 + x x ​ ， 故 S ( x ) = ( 1 + x x ​ ) ′ = ( 1 + x ) 2 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设矩阵\nA=110011121,\nα1,α2,α3\n为线性无关的\n3\n维列向量组，则向量组\nAα1,Aα2,Aα3\n的秩为______．",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 ( A α 1 ​ , A α 2 ​ , A α 3 ​ ) = A ( α 1 ​ , α 2 ​ , α 3 ​ ) 。 因为 α 1 ​ , α 2 ​ , α 3 ​ 线性无关，所以 ( α 1 ​ , α 2 ​ , α 3 ​ ) 可逆，从而 r ( A α 1 ​ , A α 2 ​ , A α 3 ​ ) = r ( A ) 由 A → ​ 1 0 0 ​ 0 1 0 ​ 1 1 0 ​ ​ , 得 r ( A ) = 2 ，故向量组 A α 1 ​ , A α 2 ​ , A α 3 ​ 的秩为 2。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设随机变量\nX\n的分布函数为\nF(x)=0.5Φ(x)+0.5Φ(2x−4)\n，其中\nΦ(x)\n为标准正态分布函数，则\nE(X)=\n______．",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 随机变量 X 的概率密度函数为 f ( x ) = 0.5 φ ( x ) + 0.25 φ ( 2 x − 4 ​ ) , 其数学期望为 E ( X ) ​ = ∫ − ∞ + ∞ ​ x f ( x ) d x = 0.5 ∫ − ∞ + ∞ ​ x φ ( x ) d x + 0.25 ∫ − ∞ + ∞ ​ x φ ( 2 x − 4 ​ ) d x = 0 + ∫ − ∞ + ∞ ​ ( 2 x − 4 ​ + 2 ) φ ( 2 x − 4 ​ ) d ( 2 x − 4 ​ ) = ∫ − ∞ + ∞ ​ ( t + 2 ) φ ( t ) d t ( 令 t = 2 x − 4 ​ ) = 2 ∫ − ∞ + ∞ ​ φ ( t ) d t = 2. ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(u,v)\n具有 2 阶连续偏导数，\ny=f(ex,cosx)\n，求\ndxdyx=0\n，\ndx2d2yx=0\n．",
    referenceAnswer: "【答案】 d x d y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) d x 2 d 2 y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) + f 11 ′′ ​ ( 1 , 1 ) − f 2 ′ ​ ( 1 , 1 ) 【解析】 d x d y ​ = e x f 1 ′ ​ − sin x ⋅ f 2 ′ ​ , d x d y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) d x 2 d 2 y ​ ​ = e x f 1 ′ ​ + e x ( e x f 11 ′′ ​ − sin x ⋅ f 12 ′′ ​ ) − cos x ⋅ f 2 ′ ​ − sin x ( e x f 21 ′′ ​ − sin x ⋅ f 22 ′′ ​ ) ​ d x 2 d 2 y ​ ​ x = 0 ​ = f 1 ′ ​ ( 1 , 1 ) + f 11 ′′ ​ ( 1 , 1 ) − f 2 ′ ​ ( 1 , 1 )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\nn→∞limk=1∑nn2kln(1+nk)=",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 ​ n → ∞ lim ​ k = 1 ∑ n ​ n 2 k ​ ln ( 1 + n k ​ ) = n → ∞ lim ​ n 1 ​ k = 1 ∑ n ​ n k ​ ln ( 1 + n k ​ ) = ∫ 0 1 ​ x ln ( 1 + x ) d x = 2 1 ​ ∫ 0 1 ​ ln ( 1 + x ) d ( x 2 ) = [ 2 1 ​ x 2 ln ( 1 + x ) ] 0 1 ​ − 2 1 ​ ∫ 0 1 ​ 1 + x x 2 ​ d x = 2 1 ​ ln 2 − 2 1 ​ ∫ 0 1 ​ ( x − 1 + 1 + x 1 ​ ) d x = 2 1 ​ ln 2 − 2 1 ​ [ 2 x 2 ​ − x + ln ( 1 + x ) ] 0 1 ​ = 2 1 ​ ln 2 − 2 1 ​ ( 2 1 ​ − 1 + ln 2 ) = 2 1 ​ ln 2 − 2 1 ​ ( ln 2 − 2 1 ​ ) = 2 1 ​ ln 2 − 2 1 ​ ln 2 + 4 1 ​ = 4 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数\ny(x)\n由方程\nx3+y3−3x+3y−2=0\n确定，求\ny(x)\n的极值。",
    referenceAnswer: "【答案】 极小值点为 x = − 1 ， y = 0 ；极大值点为 x = 1 ， y = 1 。 【解析】 【解】 x 3 + y 3 − 3 x + 3 y − 2 = 0 两边对 x 求导得 3 x 2 + 3 y 2 y ′ − 3 + 3 y ′ = 0 ， 令 y ′ = 0 得 x 1 ​ = − 1 ， x 2 ​ = 1 ，对应的函数值为 y 1 ​ = 0 ， y 2 ​ = 1 ； 3 x 2 + 3 y 2 y ′ − 3 + 3 y ′ = 0 两边再对 x 求导得 6 x + 6 y y ′ y ′′ + 3 y 2 y ′′ + 3 y ′′ = 0 ， 由 y ′′ ( − 1 ) = 2 > 0 得 x = − 1 为极小值点，极小值为 y = 0 ； 由 y ′′ ( 1 ) = − 1 < 0 得 x = 1 为极大值点，极大值为 y = 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(x)\n在区间\n[0,1]\n上具有 2 阶导数，且\nf(1)>0,x→0+limxf(x)0\n证明：\n\n(Ⅰ)方程\nf(x)=0\n在区间\n(0,1)\n内至少存在一个实根；\n\n(Ⅱ)方程\nf(x)f′′(x)+[f′(x)]2=0\n在区间\n(0,1)\n内至少存在两个不同实根。",
    referenceAnswer: "【答案】 见解析 【解析】 (Ⅰ) 根据极限的保号性，由于 x → 0 + lim ​ x f ( x ) ​ < 0 , 存在 δ > 0 ，使得当 x ∈ ( 0 , δ ) 时， x f ( x ) ​ < 0 , 即当 x ∈ ( 0 , δ ) 时， f ( x ) < 0 。 于是存在 c ∈ ( 0 , δ ) ，满足 f ( c ) < 0 。 又因为 f ( c ) ⋅ f ( 1 ) < 0 ，由介值定理可知，存在 x 0 ​ ∈ ( c , 1 ) ⊂ ( 0 , 1 ) ，使得 f ( x 0 ​ ) = 0. (Ⅱ) 令 F ( x ) = f ( x ) ⋅ f ′ ( x ) , 则 F ′ ( x ) = f ( x ) f ′′ ( x ) + ( f ′ ( x ) ) 2 . 由 f ( 0 ) = f ( x 0 ​ ) = 0 ，根据罗尔定理，存在 ξ 1 ​ ∈ ( 0 , x 0 ​ ) ，使得 f ′ ( ξ 1 ​ ) = 0. 由于 f ( 0 ) = f ( x 0 ​ ) = 0 ，可得 F ( 0 ) = F ( ξ 1 ​ ) = F ( x 0 ​ ) = 0. 再次应用罗尔定理，存在 η 1 ​ ∈ ( 0 , ξ 1 ​ ) 与 η 2 ​ ∈ ( ξ 1 ​ , x 0 ​ ) ，使得 F ′ ( η 1 ​ ) = 0 , F ′ ( η 2 ​ ) = 0 , 即方程 f ( x ) f ′′ ( x ) + ( f ′ ( x ) ) 2 = 0 在区间 ( 0 , 1 ) 内至少有两个不同的实根。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设薄片型物体\nS\n是圆锥面\nz=x2+y2\n被柱面\nz2=2x\n割下的有限部分，其上任一点的密度为\nμ(x,y,z)=9x2+y2+z2\n。记圆锥面与柱面的交线为 C。\n\n(Ⅰ)求\nC\n在\nxOy\n平面上的投影曲线的方程；\n\n(Ⅱ)求\nS\n的质量\nM\n。",
    referenceAnswer: "【答案】 (Ⅰ) C 在 x O y 平面上的投影曲线的方程为 { ( x − 1 ) 2 + y 2 = 1 z = 0 ​ 。 (Ⅱ) S 的质量 M = 64 。 【解析】 （Ⅰ）由 { z = x 2 + y 2 ​ z 2 = 2 x ​ ，得 x 2 + y 2 = 2 x ， 故 C 在 xOy 平面上的投影曲线为 L : { ( x − 1 ) 2 + y 2 = 1 z = 0 ​ （Ⅱ） M = ∬ S ​ 9 x 2 + y 2 + z 2 ​ d S 由 z x ′ ​ = x 2 + y 2 ​ x ​ , z y ′ ​ = x 2 + y 2 ​ y ​ 得 d S = 1 + z x ′2 ​ + z y ′2 ​ ​ d x d y = 2 ​ d x d y 则 M ​ = ∬ S ​ 9 x 2 + y 2 + z 2 ​ d S = 9 2 ​ ∬ D ​ x 2 + y 2 ​ ⋅ 2 ​ d x d y = 18 ∬ D ​ x 2 + y 2 ​ d x d y = 18 ∫ − 2 π ​ 2 π ​ ​ d θ ∫ 0 2 c o s θ ​ r 2 d r = 18 × 3 8 ​ ∫ − 2 π ​ 2 π ​ ​ cos 3 θ d θ = 18 × 3 16 ​ ∫ 0 2 π ​ ​ cos 3 θ d θ = 64 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设 3 阶矩阵\nA=(α1,α2,α3)\n有 3 个不同的特征值，且\nα3=α1+2α2\n。\n\n(Ⅰ) 证明\nr(A)=2\n；\n\n(Ⅱ) 设\nβ=α1+α2+α3\n，求方程组\nAx=β\n的通解。",
    referenceAnswer: "【答案】 (Ⅰ) 见解析 (Ⅱ) 方程组 A x = β 的通解为 X = k ​ 1 2 − 1 ​ ​ + ​ 1 1 1 ​ ​ ，其中 k 为任意常数。 【解析】 【证明】(Ⅰ)设 A 的特征值为 λ 1 ​ , λ 2 ​ , λ 3 ​ ， 因为 A 有三个不同的特征值，所以 A 可以相似对角化，即存在可逆矩阵 P ，使得 P − 1 A P = ​ λ 1 ​ ​ λ 2 ​ ​ λ 3 ​ ​ ​ 因为 λ 1 ​ , λ 2 ​ , λ 3 ​ 两两不同，所以 r ( A ) ≥ 2 ， 又因为 α 3 ​ = α 1 ​ + 2 α 2 ​ ，所以 α 1 ​ , α 2 ​ , α 3 ​ 线性相关，从而 r ( A ) < 3 ，于是 r ( A ) = 2 。 (Ⅱ)因为 r ( A ) = 2 ，所以 A X = 0 基础解系含一个线性无关的解向量， 由 { α 1 ​ + 2 α 2 ​ − α 3 ​ = 0 , α 1 ​ + α 2 ​ + α 3 ​ = β , ​ 得 A X = β 的通解为 X = k ​ 1 2 − 1 ​ ​ + ​ 1 1 1 ​ ​ ( k ∈ R )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型\nf(x1,x2,x3)=2x12−x22+ax32+2x1x2−8x1x3+2x2x3\n在正交变换\nx=Qy\n下的标准形为\nλ1y12+λ2y22\n，求\na\n的值及一个正交矩阵\nQ\n．",
    referenceAnswer: "【答案】 a = 2，正交矩阵 Q = ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ ，标准形为 − 3 y 1 2 ​ + 6 y 2 2 ​ 。 【解析】 【解】 A = ​ 2 1 − 4 ​ 1 − 1 1 ​ − 4 1 a ​ ​ ， X = ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ ， f ( x 1 ​ , x 2 ​ , x 3 ​ ) = X T A X ， 因为 λ 3 ​ = 0 ，所以 ∣ A ∣ = 0 。 由 ∣ A ∣ = ​ 2 1 − 4 ​ 1 − 1 1 ​ − 4 1 a ​ ​ = − 3 ( a − 2 ) = 0 ，得 a = 2 。 由 ∣ λ E − A ∣ = ​ λ − 2 − 1 4 ​ − 1 λ + 1 − 1 ​ 4 − 1 λ − 2 ​ ​ = λ ( λ + 3 ) ( λ − 6 ) = 0 ，得 λ 1 ​ = − 3 ， λ 2 ​ = 6 ， λ 3 ​ = 0 ． 由 − 3 E − A → ​ 5 1 − 4 ​ 1 2 1 ​ − 4 1 5 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ − 1 1 0 ​ ​ 得 λ 1 ​ = − 3 对应的线性无关的特征向量为 α 1 ​ = ​ 1 − 1 1 ​ ​ ； 由 6 E − A = ​ 4 − 1 4 ​ − 1 7 − 1 ​ 4 − 1 4 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 1 0 0 ​ ​ 得 λ 2 ​ = 6 对应的线性无关的特征向量为 α 2 ​ = ​ − 1 0 1 ​ ​ ； 由 0 E − A → ​ 1 0 0 ​ 0 1 0 ​ − 1 − 2 0 ​ ​ 得 λ 3 ​ = 0 对应的线性无关的特征向量为 α 3 ​ = ​ 1 2 1 ​ ​ 。 规范化得 γ 1 ​ = 3 ​ 1 ​ ​ 1 − 1 1 ​ ​ ， γ 2 ​ = 2 ​ 1 ​ ​ − 1 0 1 ​ ​ ， γ 3 ​ = 6 ​ 1 ​ ​ 1 2 1 ​ ​ ，故正交矩阵为 Q = ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ − 2 ​ 1 ​ 0 2 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ ​ ， f ( x 1 ​ , x 2 ​ , x 3 ​ ) = X T A X = x = Q y − 3 y 1 2 ​ + 6 y 2 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n，\nY\n相互独立，且\nX\n的概率分布为\nP{X=0}=P{X=2}=21\n，\nY\n的概率密度为\n\nf(y)={2y,0,0y1,其他\n\n(Ⅰ) 求\nP{Y≤E(Y)}\n；\n\n(Ⅱ) 求\nZ=X+Y\n的概率密度。",
    referenceAnswer: "【答案】 (Ⅰ) P { Y ≤ E ( Y )} = 9 4 ​ (Ⅱ) Z = X + Y 的概率密度为 f Z ​ ( z ) = ⎩ ⎨ ⎧ ​ z , z − 2 , 0 , ​ 0 < z < 1 , 2 < z < 3 , 其他 . ​ 【解析】 （Ⅰ） E ( Y ) = ∫ 0 1 ​ y ⋅ 2 y d y = 3 2 ​ ， P { Y ≤ E ( Y )} = P { Y ≤ 3 2 ​ } = ∫ 0 3 2 ​ ​ 2 y d y = 9 4 ​ . （Ⅱ） 方法一 F Z ​ ( z ) = P { Z ≤ z } = P { X + Y ≤ z } . 当 z < 0 时， F Z ​ ( z ) = 0 ； 当 z ≥ 3 时， F Z ​ ( z ) = 1 ； 当 0 ≤ z < 1 时， F Z ​ ( z ) = P { X = 0 , Y ≤ z } = P { X = 0 } P { Y ≤ z } = 2 1 ​ ∫ 0 z ​ 2 y d y = 2 z 2 ​ ; 当 1 ≤ z < 2 时， F Z ​ ( z ) = P { X = 0 , Y ≤ z } = P { X = 0 } P { Y ≤ 1 } = 2 1 ​ ; 当 2 ≤ z < 3 时， F Z ​ ( z ) = P { X = 0 , Y ≤ z } + P { X = 2 , Y ≤ z − 2 } = P { X = 0 } P { Y ≤ 1 } + P { X = 2 } P { Y ≤ z − 2 } = 2 1 ​ + 2 1 ​ ∫ 0 z − 2 ​ 2 y d y = 2 1 ​ + 2 1 ​ ( z − 2 ) 2 . 综上， F Z ​ ( z ) = ⎩ ⎨ ⎧ ​ 0 , 2 z 2 ​ , 2 1 ​ , 2 1 ​ + 2 1 ​ ( z − 2 ) 2 , 1 , ​ z < 0 , 0 ≤ z < 1 , 1 ≤ z < 2 , 2 ≤ z < 3 , z ≥ 3. ​ 概率密度为 f Z ​ ( z ) = ⎩ ⎨ ⎧ ​ z , z − 2 , 0 , ​ 0 < z < 1 , 2 < z < 3 , 其他 . ​ 方法二 由全概率公式， F Z ​ ( z ) = P { Z ≤ z } = P { X + Y ≤ z } = P { X = 0 } P { X + Y ≤ z ∣ X = 0 } + P { X = 2 } P { X + Y ≤ z ∣ X = 2 } = 2 1 ​ P { Y ≤ z } + 2 1 ​ P { Y ≤ z − 2 } . 当 z < 0 时， F Z ​ ( z ) = 0 ； 当 0 ≤ z < 1 时， F Z ​ ( z ) = 2 1 ​ P { Y ≤ z } = 2 1 ​ ∫ 0 z ​ 2 y d y = 2 z 2 ​ ; 当 1 ≤ z < 2 时， F Z ​ ( z ) = 2 1 ​ P { Y ≤ 1 } = 2 1 ​ ; 当 2 ≤ z < 3 时， F Z ​ ( z ) = 2 1 ​ + 2 1 ​ P { Y ≤ z − 2 } = 2 1 ​ + 2 1 ​ ∫ 0 z − 2 ​ 2 y d y = 2 1 ​ + 2 ( z − 2 ) 2 ​ ; 当 z ≥ 3 时， F Z ​ ( z ) = 1 。 故 f Z ​ ( z ) = F ′ ( z ) = ⎩ ⎨ ⎧ ​ z , z − 2 , 0 , ​ 0 < z < 1 , 2 < z < 3 , 其他 . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n某工程师为了解一台天平的精度，用该天平对一物体的质量做\nn\n次测量，该物体的质量\nμ\n是已知的。设\nn\n次测量结果\nX1,X2,⋯,Xn\n相互独立且均服从正态分布\nN(μ,σ2)\n，该工程师记录的是\nn\n次测量的绝对误差\nZi=∣Xi−μ∣ (i=1,2,⋯,n)\n。利用\nZ1,Z2,⋯,Zn\n估计\nσ\n。\n\n(Ⅰ) 求\nZ1\n的概率密度；\n\n(Ⅱ) 利用一阶矩求\nσ\n的矩估计量；\n\n(Ⅲ) 求\nσ\n的最大似然估计量。",
    referenceAnswer: "【答案】 （Ⅰ） Z 1 ​ 的概率密度为： f ( z ) = { 0 , σ 2 ​ φ ( σ z ​ ) , ​ z ≤ 0 , z > 0 , ​ 其中 φ ( ⋅ ) 是标准正态分布的概率密度函数。 （Ⅱ） σ 的矩估计量为： σ ^ = 2 π ​ ​ Z . （Ⅲ） σ 的最大似然估计量为： σ ^ = n 1 ​ i = 1 ∑ n ​ Z i 2 ​ ​ . 【解析】 【解】 （Ⅰ）由 X 1 ​ ∼ N ( μ , σ 2 ) 得 σ X 1 ​ − μ ​ ∼ N ( 0 , 1 ) 。 Z 1 ​ 的分布函数为 F ( z ) = P { Z 1 ​ ≤ z } 。 当 z < 0 时， F ( z ) = 0 ； 当 z ≥ 0 时， F ( z ) = P { ​ σ X 1 ​ − μ ​ ​ ≤ σ z ​ } = Φ ( σ z ​ ) − Φ ( − σ z ​ ) = 2Φ ( σ z ​ ) − 1 , 因此 F ( z ) = { 0 , 2Φ ( σ z ​ ) − 1 , ​ z < 0 , z ≥ 0. ​ Z 1 ​ 的密度函数为 f ( z ) = { 0 , σ 2 ​ φ ( σ z ​ ) , ​ z ≤ 0 , z > 0. ​ （Ⅱ） E ( Z ) = E ( ∣ X i ​ − μ ∣ ) = E ( ∣ X 1 ​ − μ ∣ ) = ∫ 0 + ∞ ​ z ⋅ σ 2 ​ φ ( σ z ​ ) d z = 2 σ ∫ 0 + ∞ ​ σ z ​ φ ( σ z ​ ) d ( σ z ​ ) = 2 σ ∫ 0 + ∞ ​ tφ ( t ) d t = 2 π ​ 2 σ ​ ∫ 0 + ∞ ​ t e − 2 t 2 ​ d t = 2 π ​ 2 σ ​ ∫ 0 + ∞ ​ e − 2 t 2 ​ d ( 2 t 2 ​ ) = 2 π ​ 2 σ ​ . 由 2 π ​ 2 σ ​ = n 1 ​ ∑ i = 1 n ​ Z i ​ = Z ，得 σ 的矩估计量为 σ ^ = 2 π ​ ​ Z . （Ⅲ）似然函数为 L = f ( z 1 ​ ) ⋯ f ( z n ​ ) = σ n 2 n ​ ⋅ ( 2 π ​ 1 ​ ) n ⋅ e − 2 σ 2 1 ​ ( z 1 2 ​ + ⋯ + z n 2 ​ ) ( z i ​ > 0 , i = 1 , 2 , … , n ) , ln L = n ln 2 − n ln σ − n ln 2 π ​ − 2 σ 2 1 ​ ( z 1 2 ​ + ⋯ + z n 2 ​ ) . 由 d σ d ln L ​ = − σ n ​ + σ 3 1 ​ ( z 1 2 ​ + ⋯ + z n 2 ​ ) = 0 得 σ ^ = n 1 ​ i = 1 ∑ n ​ z i 2 ​ ​ , 故 σ 的最大似然估计量为 σ ^ = n 1 ​ i = 1 ∑ n ​ Z i 2 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2017_math1 = {
  id: P, year: Y,
  title: '2017 年全国硕士研究生招生考试 数学（一）',
  short: '2017 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2017_math1.length,
  qids: questions2017_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
