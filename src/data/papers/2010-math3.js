const P = 'paper-2010-math3'
const Y = 2010
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2010-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2010 考研数学（三）真题',
  ...extra
})

export const questions2010_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若\nlimx→0[x1−(x1−a)ex]=1\n，则\na\n等于",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 分析 通分直接计算等式左边的极限，进而解出 a 。 详解 由于 x → 0 lim ​ [ x 1 ​ − ( x 1 ​ − a ) e x ] ​ = x → 0 lim ​ x 1 − e x + a x e x ​ = x → 0 lim ​ x 1 − e x ​ + a e x = x → 0 lim ​ x 1 − e x ​ + x → 0 lim ​ a e x = a − 1 ​ 从而由题设可得 a − 1 = 1 ，即 a = 2 ，故应选 (C)。"
  }),
  base(2, 'k-math-015', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\ny1\n，\ny2\n是一阶线性非齐次微分方程\n\ny′+p(x)y=q(x)\n\n的两个特解。若常数\nλ\n，\nμ\n满足\nλy1+μy2\n是该方程的解，且\nλy1−μy2\n是对应的齐次方程的解，则",
    options: [{ key: "A", text: "λ = 2 1 ​ ， μ = 2 1 ​" }, { key: "B", text: "λ = − 2 1 ​ ， μ = − 2 1 ​" }, { key: "C", text: "λ = 3 2 ​ ， μ = 3 1 ​" }, { key: "D", text: "λ = 3 2 ​ ， μ = 3 2 ​" }],
    answer: ["A"],
    explain: "正确答案： A 分析 此题主要考查线性微分方程解的性质和结构。 详解 因为 y 1 ​ 、 y 2 ​ 是一阶线性非齐次微分方程 y ′ + p ( x ) y = q ( x ) 的两个特解，所以 y 1 ′ ​ + p ( x ) y 1 ​ = y 2 ′ ​ + p ( x ) y 2 ​ = q ( x ) 由于 λ y 1 ​ + μ y 2 ​ 是该方程的解，则 ( λ y 1 ′ ​ + μ y 2 ′ ​ ) + p ( x ) ( λ y 1 ​ + μ y 2 ​ ) = q ( x ) 即 λ ( y 1 ′ ​ + p ( x ) y 1 ​ ) + μ ( y 2 ′ ​ + p ( x ) y 2 ​ ) = q ( x ) 将上式代入可得： λ + μ = 1 (2) 由于 λ y 1 ​ − μ y 2 ​ 是对应的齐次方程的解，则 ( λ y 1 ′ ​ − μ y 2 ′ ​ ) + p ( x ) ( λ y 1 ​ − μ y 2 ​ ) = 0 即 λ ( y 1 ′ ​ + p ( x ) y 1 ​ ) − μ ( y 2 ′ ​ + p ( x ) y 2 ​ ) = 0 将上式代入可得： λ − μ = 0 (3) 由 (2)、(3) 可得 λ = μ = 2 1 ​ 故应选 (A)。 评注 设 y 1 ​ , y 2 ​ , ⋯ , y s ​ 是一阶线性非齐次微分方程 y ′ + p ( x ) y = q ( x ) 的解，则对于常数 k 1 ​ , k 2 ​ , ⋯ , k s ​ ，有下列结论： 若 k 1 ​ + k 2 ​ + ⋯ + k s ​ = 1 ，则 k 1 ​ y 1 ​ + k 2 ​ y 2 ​ + ⋯ + k s ​ y s ​ 是方程 y ′ + p ( x ) y = q ( x ) 的解； 若 k 1 ​ + k 2 ​ + ⋯ + k s ​ = 0 ，则 k 1 ​ y 1 ​ + k 2 ​ y 2 ​ + ⋯ + k s ​ y s ​ 是方程 y ′ + p ( x ) y = 0 的解。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n，\ng(x)\n具有二阶导数，且\ng′′(x)0\n。若\ng(x0)=a\n是\ng(x)\n的极值，则\nf(g(x))\n在\nx0\n取极大值的一个充分条件是",
    options: [{ key: "A", text: "f ′ ( a ) < 0" }, { key: "B", text: "f ′ ( a ) > 0" }, { key: "C", text: "f ′′ ( a ) < 0" }, { key: "D", text: "f ′′ ( a ) > 0" }],
    answer: ["B"],
    explain: "正确答案： B 分析 本题主要考查导数的应用，求 f ( g ( x )) 的一、二阶导数，利用取得极值的必要条件及充分条件。 详解 令 F ( x ) = f ( g ( x )) ，则 F ′ ( x ) = [ f ( g ( x )) ] ′ = f ′ ( g ( x )) g ′ ( x ) , F ′′ ( x ) = [ f ( g ( x )) ] ′′ = f ′′ ( g ( x )) [ g ′ ( x ) ] 2 + f ′ ( g ( x )) g ′′ ( x ) . 由 g ( x 0 ​ ) = a 是 g ( x ) 的极值知 g ′ ( x 0 ​ ) = 0 。于是有 F ′ ( x 0 ​ ) = 0 , F ′′ ( x 0 ​ ) = f ′ ( a ) g ′′ ( x 0 ​ ) . 由于 g ′′ ( x ) < 0 ，要使 F ′′ ( x 0 ​ ) = [ f ( g ( x 0 ​ )) ] ′′ < 0 ，只要 f ′ ( a ) > 0 。 因此应选 (B) 。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf(x)=ln10x\n，\ng(x)=x\n，\nh(x)=e10x\n，则当\nx\n充分大时有",
    options: [{ key: "A", text: "g ( x ) < h ( x ) < f ( x )" }, { key: "B", text: "h ( x ) < g ( x ) < f ( x )" }, { key: "C", text: "f ( x ) < g ( x ) < h ( x )" }, { key: "D", text: "g ( x ) < f ( x ) < h ( x )" }],
    answer: ["C"],
    explain: "正确答案： C 【分析】 计算两两比的极限便可得到答案。 【详解】 因为 x → ∞ lim ​ g ( x ) f ( x ) ​ = x → ∞ lim ​ x ln 10 x ​ = 10 x → ∞ lim ​ x ln 9 x ​ = ⋯ = 10 ! x → ∞ lim ​ x 1 ​ = 0 , x → ∞ lim ​ h ( x ) g ( x ) ​ = x → ∞ lim ​ e 10 x ​ x ​ = x → ∞ lim ​ e 10 x ​ 10 ​ = 0 , 由此可知当 x 充分大时， f ( x )"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设向量组 I:\nα1\n,\nα2\n,\n⋯\n,\nαr\n可由向量组 II:\nβ1\n,\nβ2\n,\n⋯\n,\nβs\n线性表示，则下列命题正确的是",
    options: [{ key: "A", text: "若向量组I线性无关，则 r ≤ s" }, { key: "B", text: "若向量组I线性相关，则 r > s" }, { key: "C", text: "若向量组II线性无关，则 r ≤ s" }, { key: "D", text: "若向量组II线性相关，则 r > s" }],
    answer: ["A"],
    explain: "正确答案： A 分析 本题考查向量组的线性相关性。 详解 因向量组I能由向量组II线性表示，所以 r ( I ) ≤ r ( II ) ，即 r ( α 1 ​ , α 2 ​ , ⋯ , α r ​ ) ≤ r ( β 1 ​ , β 2 ​ , ⋯ , β s ​ ) ≤ s . 若向量组I线性无关，则 r ( α 1 ​ , α 2 ​ , ⋯ , α r ​ ) = r ，所以 r ≤ s 。故应选(A)。 评注 “若 α 1 ​ , α 2 ​ , … , α r ​ 线性无关且可由 β 1 ​ , β 2 ​ , … , β s ​ 线性表示，则 r ≤ s ”这是线性代数中的一个重要定理，对定理熟悉的考生可直接得正确答案。"
  }),
  base(6, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为 4 阶对称矩阵，且\nA2+A=0\n。若\nA\n的秩为 3，则\nA\n相似于",
    options: [{ key: "A", text: "​ 1 ​ 1 ​ 1 ​ 0 ​ ​" }, { key: "B", text: "​ 1 ​ 1 ​ − 1 ​ 0 ​ ​" }, { key: "C", text: "​ 1 ​ − 1 ​ − 1 ​ 0 ​ ​" }, { key: "D", text: "​ − 1 ​ − 1 ​ − 1 ​ 0 ​ ​" }],
    answer: ["D"],
    explain: "正确答案： D 分析 考查矩阵特征值、特征值的性质及实对称矩阵的性质。 详解 由于 A 2 + A = 0 ，所以 A ( A + E ) = 0 。由于 A 的秩为 3，所以 A + E 不可逆，从而 ∣ A ∣ = 0 ， ∣ A + E ∣ = 0 。因此， λ 1 ​ = 0 和 λ 2 ​ = − 1 是矩阵 A 的特征值。 假设 λ 是矩阵 A 的特征值，则 λ 2 + λ = 0 ，所以 λ 只能是 0 或 -1。 由于 A 是实对称矩阵，且 A 的秩为 3，所以其全部特征值为 -1, -1, -1, 0。因此应选 (D)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n的分布函数为\n\nF(x)=⎩⎨⎧0,21,1−e−x,x00≤x1x≥1\n\n则\nP{X=1}=",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2 1 ​ − e − 1" }, { key: "D", text: "1 − e − 1" }],
    answer: ["C"],
    explain: "正确答案： C 分析 考查如何利用分布函数计算随机变量取值的概率。 详解 由分布函数的性质可知： P { X = 1 } ​ = P { X ≤ 1 } − P { X < 1 } = F ( 1 ) − x → 1 − lim ​ F ( x ) = ( 1 − e − 1 ) − 2 1 ​ = 2 1 ​ − e − 1 ​ 故应选 (C)。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nf1(x)\n为标准正态分布的概率密度，\nf2(x)\n为\n[−1,3]\n上均匀分布的概率密度，且\n\nf(x)={af1(x),bf2(x),x≤0x>0\n\n为概率密度，则\na,b\n满足",
    options: [{ key: "A", text: "2 a + 3 b = 4" }, { key: "B", text: "3 a + 2 b = 4" }, { key: "C", text: "a + b = 1" }, { key: "D", text: "a + b = 2" }],
    answer: ["A"],
    explain: "正确答案： A 分析 考查概率密度的性质： ① f ( x ) ≥ 0 ； ② ∫ − ∞ + ∞ ​ f ( x ) d x = 1 。 详解 由已知可得： f 1 ​ ( x ) = 2 π ​ 1 ​ e − 2 x 2 ​ , f 2 ​ ( x ) = { 4 1 ​ , 0 , ​ − 1 ≤ x ≤ 3 其他 ​ 由概率密度的性质可知： ∫ − ∞ + ∞ ​ f ( x ) d x = 1 所以 1 = a ∫ − ∞ 0 ​ f 1 ​ ( x ) d x + b ∫ 0 + ∞ ​ f 2 ​ ( x ) d x = a ⋅ 2 1 ​ + b ∫ 0 3 ​ 4 1 ​ d x = 2 a ​ + 4 3 b ​ 两边同乘 4 得： 2 a + 3 b = 4 因此应选 (A)。"
  }),
  base(9, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设可导函数\ny=y(x)\n由方程\n\n∫0x+ye−t2dt=∫0xxsint2dt\n\n所确定，则\n\ndxdyx=0=",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 法一： 由 ∫ 0 x + y ​ e − t 2 d t = ∫ 0 x ​ x sin t 2 d t ，令 x = 0 得 y = 0 。 等式两边对 x 求导得 e − ( x + y ) 2 ( 1 + d x d y ​ ) = ∫ 0 x ​ sin t 2 d t + x sin x 2 将 x = 0 ， y = 0 代入上式得 d x d y ​ ∣ x = 0 ​ = − 1 法二： 由 ∫ 0 x + y ​ e − t 2 d t = ∫ 0 x ​ x sin t 2 d t ，令 x = 0 得 y = 0 。 等式两边对 x 微分得 e − ( x + y ) 2 ( d x + d y ) = ( ∫ 0 x ​ sin t 2 d t ) d x + x sin x 2 d x 将 x = 0 ， y = 0 代入上式得 ( d x + d y ) ∣ x = 0 ​ = 0 从而 d x d y ​ ∣ x = 0 ​ = − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设位于曲线\ny=x(1+ln2x)1\n（\ne≤x+∞\n）下方，\nx\n轴上方的无界区域为\nG\n，则\nG\n绕\nx\n轴旋转一周所得空间区域的体积为。",
    answerText: "】 4 π 2 ​ 【",
    referenceAnswer: "【答案】 4 π 2 ​ 【解析】 利用旋转体的体积公式计算，这是一个反常积分。 体积公式为： V = π ∫ e + ∞ ​ y 2 d x = π ∫ e + ∞ ​ x ( 1 + ln 2 x ) 1 ​ d x 令 t = ln x ，则 d t = x 1 ​ d x 。当 x = e 时， t = 1 ；当 x → + ∞ 时， t → + ∞ 。 因此，体积可以转化为： V = π ∫ 1 + ∞ ​ 1 + t 2 1 ​ d t = π ( arctan t ) ​ 1 + ∞ ​ 计算积分结果： V = π ( 2 π ​ − 4 π ​ ) = 4 π 2 ​ 最终体积为 4 π 2 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设某商品的收益函数为\nR(p)\n，收益弹性为\n1+p\n，其中\np\n为价格，且\nR(1)=1\n，则\nR(p)=",
    answerText: "】 R ( p ) = p e p − 1 【",
    referenceAnswer: "【答案】 R ( p ) = p e p − 1 【解析】 收益弹性为 R d p p d R ​ = 1 + p ，即： R d R ​ = ( 1 + p ) p d p ​ 分离变量得： R d R ​ = ( 1 + p 1 ​ ) d p 两端积分得： ln R = p + ln p + C 即： R = Cp e p 由 R ( 1 ) = 1 得 C e = 1 ，所以 C = e 1 ​ 。故： R ( p ) = p e p − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若曲线\ny=x3+ax2+bx+1\n有拐点\n(−1,0)\n，则\nb=",
    answerText: "】 3 【",
    referenceAnswer: "【答案】 3 【解析】 对函数 y = x 3 + a x 2 + b x + 1 求导，得到一阶导数为： y ′ = 3 x 2 + 2 a x + b 再对 y ′ 求导，得到二阶导数为： y ′′ = 6 x + 2 a 由于点 ( − 1 , 0 ) 是函数的拐点，因此 y ′′ ( − 1 ) = 0 ，代入计算： 6 × ( − 1 ) + 2 a = 0 解得： a = 3 又因为点 ( − 1 , 0 ) 在曲线上，代入原函数： 0 = ( − 1 ) 3 + 3 × ( − 1 ) 2 + b × ( − 1 ) + 1 化简得： 0 = − 1 + 3 − b + 1 解得： b = 3",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nA\n、\nB\n为 3 阶矩阵，且\n∣A∣=3\n，\n∣B∣=2\n，\n∣A−1+B∣=2\n，则\n∣A+B−1∣=",
    answerText: "】 3 【",
    referenceAnswer: "【答案】 3 【解析】 因为 ∣ A + B − 1 ∣ = ∣ B − 1 ( B A + E ) ∣ = ∣ B − 1 ∣∣ B A + E ∣ = ∣ B ∣ 1 ​ ∣ B A + E ∣ 又 ∣ A − 1 + B ∣ = ∣ A − 1 ( E + A B ) ∣ = ∣ A − 1 ∣∣ E + A B ∣ = ∣ A ∣ 1 ​ ∣ E + A B ∣ = 2 所以 ∣ E + A B ∣ = 2∣ A ∣ = 6 而 ∣ B A + E ∣ = ∣ ( A B + E ) T ∣ = ∣ A B + E ∣ = 6 故 ∣ A + B − 1 ∣ = 2 1 ​ × 6 = 3",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nX1,X2,⋯,Xn\n是来自总体\nN(μ,σ2)(σ>0)\n的简单随机样本，统计量\nT=n1∑i=1nXi2\n，则\nE(T)=\n________。",
    answerText: "】 σ 2 + μ 2 【",
    referenceAnswer: "【答案】 σ 2 + μ 2 【解析】 根据简单随机样本的性质， X i ​ 相互独立且与总体同分布，即 X i ​ ∼ N ( μ , σ 2 ) 。于是： E ( X i ​ ) = μ , D ( X i ​ ) = σ 2 E ( X i 2 ​ ) = D ( X i ​ ) + ( E ( X i ​ ) ) 2 = σ 2 + μ 2 因此： E ( T ) = E ( n 1 ​ i = 1 ∑ n ​ X i 2 ​ ) = n 1 ​ i = 1 ∑ n ​ E ( X i 2 ​ ) = σ 2 + μ 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\nx→∞lim(xx1−1)lnx1",
    referenceAnswer: "【答案】 e 1 ​ 【解析】 ​ x → ∞ lim ​ ( x x 1 ​ − 1 ) l n x 1 ​ = x → ∞ lim ​ e l n x l n ( x x 1 ​ − 1 ) ​ = x → ∞ lim ​ e l n x l n ( e x l n x ​ − 1 ) ​ ( t = x 1 ​ , x → ∞ t → 0 + ) = t → 0 + lim ​ e − l n t l n ( e − t l n t − 1 ) ​ ≈ t → 0 + lim ​ e − l n t l n ( − t l n t ) ​ ( t → 0 + e − t l n t − 1 ∼ − t ln t ) = t → 0 + lim ​ e − l n t l n t + l n ( − l n t ) ​ = t → 0 + lim ​ e − l n t l n t ​ + − l n t l n ( − l n t ) ​ = t → 0 + lim ​ e − 1 + − l n t l n ( − l n t ) ​ = e − 1 + 0 = e − 1 = e 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算二重积分\n∬D(x+y)3dxdy\n，其中\nD\n由曲线\nx=1+y2\n与直线\nx+2y=0\n及\nx−2y=0\n围成。",
    referenceAnswer: "【答案】 15 14 ​ 【解析】 显然 D 关于 x 轴对称，且 D = D 1 ​ ∪ D 2 ​ ，其中 D 1 ​ = { ( x , y ) ∣ 0 ≤ y ≤ 1 , 2 ​ y ≤ x ≤ 1 + y 2 ​ } , D 2 ​ = { ( x , y ) ∣ − 1 ≤ y ≤ 0 , − 2 ​ y ≤ x ≤ 1 + y 2 ​ } . ∬ D ​ ( x + y ) 3 d x d y ​ = ∬ D ​ ( x 3 + 3 x 2 y + 3 x y 2 + y 3 ) d x d y = ∬ D ​ ( 3 x 2 y + y 3 ) d x d y + ∬ D ​ ( x 3 + 3 x y 2 ) d x d y . ​ 由于被积函数 3 x 2 y + y 3 是关于 y 的奇函数， x 3 + 3 x y 2 是关于 y 的偶函数，所以 ∬ D ​ ( x + y ) 3 d x d y ​ = 2 ∬ D 1 ​ ​ ( x 3 + 3 x y 2 ) d x d y = 2 ∫ 0 1 ​ d y ∫ 2 ​ y 1 + y 2 ​ ​ ( x 3 + 3 x y 2 ) d x = 2 ∫ 0 1 ​ [ 4 1 ​ x 4 + 2 3 ​ x 2 y 2 ] 2 ​ y 1 + y 2 ​ ​ d y = 2 ∫ 0 1 ​ [ 4 1 ​ ( 1 + y 2 ) 2 + 2 3 ​ ( 1 + y 2 ) y 2 − 4 1 ​ ( 2 ​ y ) 4 − 2 3 ​ ( 2 ​ y ) 2 y 2 ] d y = 2 ∫ 0 1 ​ [ 4 1 ​ ( 1 + 2 y 2 + y 4 ) + 2 3 ​ y 2 + 2 3 ​ y 4 − 4 1 ​ × 4 y 4 − 2 3 ​ × 2 y 4 ] d y = 2 ∫ 0 1 ​ [ 4 1 ​ + 2 1 ​ y 2 + 4 1 ​ y 4 + 2 3 ​ y 2 + 2 3 ​ y 4 − y 4 − 3 y 4 ] d y = 2 ∫ 0 1 ​ ( 4 1 ​ + 2 y 2 − 4 9 ​ y 4 ) d y = 2 [ 4 1 ​ y + 3 2 ​ y 3 − 20 9 ​ y 5 ] 0 1 ​ = 2 ( 4 1 ​ + 3 2 ​ − 20 9 ​ ) = 2 × 60 15 + 40 − 27 ​ = 2 × 60 28 ​ = 15 14 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求函数\nu=xy+2yz\n在约束条件\nx2+y2+z2=10\n下的最大值和最小值。",
    referenceAnswer: "【答案】 最大值为 5 5 ​ ，最小值为 − 5 5 ​ 。 【解析】 令 F ( x , y , z , λ ) = x y + 2 yz + λ ( x 2 + y 2 + z 2 − 10 ) ，解方程组 ⎩ ⎨ ⎧ ​ F x ′ ​ = y + 2 λ x = 0 F y ′ ​ = x + 2 z + 2 λ y = 0 F z ′ ​ = 2 y + 2 λ z = 0 F λ ′ ​ = x 2 + y 2 + z 2 − 10 = 0 ​ 当 y  = 0 时，由 y + 2 λ x = 0 得 λ = − 2 x y ​ 。由 2 y + 2 λ z = 0 得 λ = − z y ​ ，所以 − 2 x y ​ = − z y ​ ，即 z = 2 x 。 将 z = 2 x 代入 x + 2 z + 2 λ y = 0 得 x + 4 x + 2 λ y = 0 ，即 5 x + 2 λ y = 0 。又 λ = − 2 x y ​ ，所以： 5 x + 2 × ( − 2 x y ​ ) y = 0 ⟹ 5 x − x y 2 ​ = 0 ⟹ y 2 = 5 x 2 ⟹ y = ± 5 ​ x 将 z = 2 x 和 y = ± 5 ​ x 代入 x 2 + y 2 + z 2 = 10 得： x 2 + 5 x 2 + 4 x 2 = 10 ⟹ 10 x 2 = 10 ⟹ x = ± 1 当 x = 1 时， y = ± 5 ​ ， z = 2 ；当 x = − 1 时， y = ± 5 ​ ， z = − 2 。 当 y = 0 时，由 F x ′ ​ = 0 得 0 + 2 λ x = 0 。若 x  = 0 ，则 λ = 0 。由 F z ′ ​ = 0 得 0 + 2 λ z = 0 ，恒成立。此时约束条件为： x 2 + 0 + z 2 = 10 ⟹ x 2 + z 2 = 10 令 x = k ，则 z = ± 10 − k 2 ​ ，此时 u = 0 + 0 = 0 。 综上，驻点为 ( 1 , 5 ​ , 2 ) , ( − 1 , 5 ​ , − 2 ) , ( 10 ​ , 0 , 0 ) , ​ ( 1 , − 5 ​ , 2 ) , ( − 1 , − 5 ​ , − 2 ) , ( − 10 ​ , 0 , 0 ) . ​ 后两点实际为 y = 0 时的特殊情况，代入计算 u 均为 0。 计算各驻点处的 u 值： u ( 1 , 5 ​ , 2 ) u ( 1 , − 5 ​ , 2 ) u ( − 1 , 5 ​ , − 2 ) u ( − 1 , − 5 ​ , − 2 ) u ( 10 ​ , 0 , 0 ) u ( − 10 ​ , 0 , 0 ) ​ = 1 × 5 ​ + 2 × 5 ​ × 2 = 5 ​ + 4 5 ​ = 5 5 ​ = 1 × ( − 5 ​ ) + 2 × ( − 5 ​ ) × 2 = − 5 ​ − 4 5 ​ = − 5 5 ​ = − 1 × 5 ​ + 2 × 5 ​ × ( − 2 ) = − 5 ​ − 4 5 ​ = − 5 5 ​ = − 1 × ( − 5 ​ ) + 2 × ( − 5 ​ ) × ( − 2 ) = 5 ​ + 4 5 ​ = 5 5 ​ = 0 = 0 ​ 所以函数 u 的最大值为 5 5 ​ ，最小值为 − 5 5 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n(1) 比较\n∫01∣lnt∣[ln(1+t)]ndt\n与\n∫01tn∣lnt∣dt\n（\nn=1,2,⋯\n）的大小，说明理由。\n\n(2) 记\nun=∫01∣lnt∣[ln(1+t)]ndt\n（\nn=1,2,⋯\n），求极限\nlimn→∞un\n。",
    referenceAnswer: "【答案】 (1) ∫ 0 1 ​ ∣ ln t ∣ [ ln ( 1 + t ) ] n d t ≤ ∫ 0 1 ​ t n ∣ ln t ∣ d t ( n = 1 , 2 , ⋯ ) (2) n → ∞ lim ​ u n ​ = 0 【解析】 (1) 当 t ∈ ( 0 , 1 ) 时，有 0 < ln ( 1 + t ) < t ，因此 [ ln ( 1 + t ) ] n < t n 。又因为 ∣ ln t ∣ ≥ 0 ，所以： ∣ ln t ∣ [ ln ( 1 + t ) ] n ≤ t n ∣ ln t ∣ 其中等号仅在 t = 0 或 t = 1 时成立，但由于积分区间为开区间，不影响积分值。根据定积分的保序性可得： ∫ 0 1 ​ ∣ ln t ∣ [ ln ( 1 + t ) ] n d t ≤ ∫ 0 1 ​ t n ∣ ln t ∣ d t ( n = 1 , 2 , ⋯ ) (2) 由 (1) 可知 0 ≤ u n ​ ≤ ∫ 0 1 ​ t n ∣ ln t ∣ d t 。计算 ∫ 0 1 ​ t n ∣ ln t ∣ d t ： ∫ 0 1 ​ t n ∣ ln t ∣ d t ​ = ∫ 0 1 ​ t n ( − ln t ) d t = − ∫ 0 1 ​ t n ln t d t = u = t n + 1 − n + 1 1 ​ ∫ 0 1 ​ ln t d u = − n + 1 1 ​ [ t n + 1 ln t ∣ 0 1 ​ − ∫ 0 1 ​ t n + 1 ⋅ t 1 ​ d t ] = − n + 1 1 ​ [ 0 − ∫ 0 1 ​ t n d t ] = n + 1 1 ​ ⋅ n + 1 1 ​ = ( n + 1 ) 2 1 ​ ​ 由于 lim n → ∞ ​ ( n + 1 ) 2 1 ​ = 0 ，根据夹逼定理可得： n → ∞ lim ​ u n ​ = 0",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(x)\n在闭区间\n[0,3]\n上连续，在开区间\n(0,3)\n内存在二阶导数，且\n\n2f(0)=∫02f(x)dx=f(2)+f(3)\n证明 存在\nη∈(0,2)\n使得\nf(η)=f(0)\n。证明 存在\nξ∈(0,3)\n使得\nf′′(ξ)=0\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (1) 令 F ( x ) = ∫ 0 x ​ f ( t ) d t 。因为 f ( x ) 在 [ 0 , 2 ] 上连续，所以 F ( x ) 在 [ 0 , 2 ] 上连续，在 ( 0 , 2 ) 内可导。由拉格朗日中值定理，存在 η ∈ ( 0 , 2 ) ，使得 F ( 2 ) − F ( 0 ) = F ′ ( η ) ( 2 − 0 ) 即 ∫ 0 2 ​ f ( x ) d x = 2 f ( η ) 又已知 2 f ( 0 ) = ∫ 0 2 ​ f ( x ) d x ，所以 2 f ( 0 ) = 2 f ( η ) 即 f ( η ) = f ( 0 ) ，得证。 (2) 由 2 f ( 0 ) = f ( 2 ) + f ( 3 ) 可得 f ( 0 ) = 2 f ( 2 ) + f ( 3 ) ​ 因为 f ( x ) 在 [ 2 , 3 ] 上连续，根据闭区间上连续函数的介值定理，存在 γ ∈ [ 2 , 3 ] ，使得 f ( γ ) = 2 f ( 2 ) + f ( 3 ) ​ = f ( 0 ) 此时， f ( x ) 在 [ 0 , η ] 和 [ η , γ ] 上分别满足罗尔中值定理条件（因为 f ( 0 ) = f ( η ) = f ( γ ) ），所以： 存在 ξ 1 ​ ∈ ( 0 , η ) ，使得 f ′ ( ξ 1 ​ ) = 0 ； 存在 ξ 2 ​ ∈ ( η , γ ) ，使得 f ′ ( ξ 2 ​ ) = 0 。 又因为 f ′ ( x ) 在 [ ξ 1 ​ , ξ 2 ​ ] 上连续，在 ( ξ 1 ​ , ξ 2 ​ ) 内可导，再由罗尔中值定理，存在 ξ ∈ ( ξ 1 ​ , ξ 2 ​ ) ⊂ ( 0 , 3 ) ，使得 f ′′ ( ξ ) = 0 得证。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-016', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n给定矩阵\nA=λ101011λ−11λ\n，向量\nb=a11\n，以及线性方程组\nAX=b\n。\n求\nλ\n和\na\n的值；求方程组\nAX=b\n的通解。",
    referenceAnswer: "【答案】 λ = − 1 ， a = − 2 。 方程组 AX = b 的通解为 X = k ( 1 , 0 , 1 ) ⊤ + ( 2 3 ​ , − 2 1 ​ , 0 ) ⊤ ，其中 k 为任意常数。 【解析】 （1）由于线性方程组 A X = b 存在两个不同的解，所以该方程组有无穷多解，从而 r ( A ) = r ( A ) < 3 。 A ​ = ​ λ 0 1 ​ 1 λ − 1 1 ​ 1 0 λ ​ a 1 1 ​ ​ → ​ 1 0 λ ​ 1 λ − 1 1 ​ λ 0 1 ​ 1 1 a ​ ​ → ​ 1 0 0 ​ 1 λ − 1 1 − λ ​ λ 0 1 − λ 2 ​ 1 1 a − λ ​ ​ → ​ 1 0 0 ​ 1 λ − 1 0 ​ λ 0 1 − λ 2 ​ 1 1 a + 1 − λ ​ ​ ​ 由 ⎩ ⎨ ⎧ ​ 1 − λ 2 = 0 a + 1 − λ = 0 λ − 1  = 0 ​ 得 λ = − 1 ， a = − 2 。 （2）当 λ = − 1 ， a = − 2 时， A → ​ 1 0 0 ​ 1 − 2 0 ​ − 1 0 0 ​ 1 1 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ − 1 0 0 ​ 2 3 ​ − 2 1 ​ 0 ​ ​ 对应的方程组为 { x 1 ​ = x 3 ​ + 2 3 ​ x 2 ​ = − 2 1 ​ ​ 所以通解为 X = k ( 1 , 0 , 1 ) ⊤ + ( 2 3 ​ , − 2 1 ​ , 0 ) ⊤ 其中 k 为任意常数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）\n\n已知矩阵\n\nA=0−14−13a4a0,\n\n其中\nQ\n为正交矩阵，使得\nQ⊤AQ\n为对角矩阵，且\nQ\n的第一列为\n\n61121.\n\n求\na\n及\nQ\n。",
    referenceAnswer: "【答案】 a = − 1 ，正交矩阵 Q 为 Q = ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ 2 ​ 1 ​ 0 − 2 ​ 1 ​ ​ ​ . 【解析】 由题意， 6 ​ 1 ​ A ( 1 , 2 , 1 ) ⊤ = λ 1 ​ 6 ​ 1 ​ ( 1 , 2 , 1 ) ⊤ ，于是 ​ 0 − 1 4 ​ − 1 3 a ​ 4 a 0 ​ ​ ( 1 , 2 , 1 ) ⊤ = λ 1 ​ ( 1 , 2 , 1 ) ⊤ 即 ( 2 , a + 5 , 4 + 2 a ) ⊤ = λ 1 ​ ( 1 , 2 , 1 ) ⊤ ，从而 a = − 1 ， λ 1 ​ = 2 。 由于 A 的特征多项式 ∣ λ E − A ∣ ​ = ​ λ 1 − 4 ​ 1 λ − 3 1 ​ − 4 1 λ ​ ​ → r 1 ​ + r 2 ​ + r 3 ​ ​ λ − 5 1 − 4 ​ 5 − λ λ − 3 1 ​ λ − 5 1 λ ​ ​ = ( λ − 5 ) ​ 1 1 − 4 ​ − 1 λ − 3 1 ​ 1 1 λ ​ ​ = ( λ − 2 ) ( λ − 5 ) ( λ + 4 ) ​ 所以 A 的特征值为 2 , 5 , − 4 。 由于方程组 ( 5 E − A ) X = 0 的基础解系为 η = ( 1 , − 1 , 1 ) ⊤ ，所以属于特征值 5 的一个单位特征向量为 3 ​ 1 ​ ( 1 , − 1 , 1 ) ⊤ 。 又方程组 ( − 4 E − A ) X = 0 的基础解系为 β = ( 1 , 0 , − 1 ) ⊤ ，所以属于特征值 − 4 的一个单位特征向量为 ( 2 ​ 1 ​ , 0 , − 2 ​ 1 ​ ) ⊤ 。 故正交矩阵 Q = ​ 6 ​ 1 ​ 6 ​ 2 ​ 6 ​ 1 ​ ​ 3 ​ 1 ​ − 3 ​ 1 ​ 3 ​ 1 ​ ​ 2 ​ 1 ​ 0 − 2 ​ 1 ​ ​ ​ 且 Q ⊤ A Q = ​ 2 0 0 ​ 0 5 0 ​ 0 0 − 4 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n的概率密度为\n\nf(x,y)=Ae−2x2+2xy−y2,−∞x+∞,−∞y+∞\n\n其中\nA\n为常数。\n\n(1) 求常数\nA\n；\n\n(2) 求\nX\n的边缘概率密度\nfX(x)\n；\n\n(3) 求条件概率密度\nfY∣X(y∣x)\n；\n\n(4) 求\nP{Y≤1∣X≤1}\n。",
    referenceAnswer: "【答案】 (1) A = π 1 ​ (2) f X ​ ( x ) = π ​ 1 ​ e − x 2 (3) f Y ∣ X ​ ( y ∣ x ) = π ​ 1 ​ e − x 2 + 2 x y − y 2 【解析】 解析 由概率密度的性质得 1 ​ = ∫ − ∞ + ∞ ​ d x ∫ − ∞ + ∞ ​ A e − 2 x 2 + 2 x y − y 2 d y = A ∫ − ∞ + ∞ ​ e − x 2 d x ∫ − ∞ + ∞ ​ e − ( y − x ) 2 d y = A ∫ − ∞ + ∞ ​ e − x 2 d x ∫ − ∞ + ∞ ​ e − t 2 d t = A π ​ ⋅ π ​ = A π ​ 所以 A = π 1 ​ ，即 f ( x , y ) = π 1 ​ e − 2 x 2 + 2 x y − y 2 。 因为 X 的边缘概率密度为 f X ​ ( x ) ​ = ∫ − ∞ + ∞ ​ f ( x , y ) d y = π 1 ​ ∫ − ∞ + ∞ ​ e − 2 x 2 + 2 x y − y 2 d y = π 1 ​ e − x 2 ∫ − ∞ + ∞ ​ e − ( y − x ) 2 d y = π 1 ​ e − x 2 ∫ − ∞ + ∞ ​ e − t 2 d t = π ​ 1 ​ e − x 2 ​ 故条件概率密度为 f Y ∣ X ​ ( y ∣ x ) = f X ​ ( x ) f ( x , y ) ​ = π ​ 1 ​ e − x 2 + 2 x y − y 2 , − ∞ < y < + ∞",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n箱中装有6个球，其中红、白、黑球个数分别为1, 2, 3个。现从箱中随机地取出2个球，记\nX\n为取出红球的个数，\nY\n为取出白球的个数。\n求随机变量\n(X,Y)\n的概率分布；求\nCov(X,Y)\n。",
    referenceAnswer: "【答案】 随机变量 ( X , Y ) 的概率分布如下表： Y ╲ X 0 1 P { X = i } 0 3/15 3/15 6/15 1 6/15 2/15 8/15 2 1/15 0 1/15 P { Y = j } 10/15 5/15 1 Cov ( X , Y ) = − 45 4 ​ 【解析】 （1）随机变量 X 的所有可能取值为 0 , 1 ， Y 的所有可能取值为 0 , 1 , 2 。 { X = 0 , Y = 0 } 表示取到两个黑球，概率为 P { X = 0 , Y = 0 } = C 6 2 ​ C 3 2 ​ ​ = 15 3 ​ 。 { X = 0 , Y = 1 } 表示取到一个白球与一个黑球，概率为 P { X = 0 , Y = 1 } = C 6 2 ​ C 2 1 ​ C 3 1 ​ ​ = 15 6 ​ 。 { X = 0 , Y = 2 } 表示取到两个白球，概率为 P { X = 0 , Y = 2 } = C 6 2 ​ C 2 2 ​ ​ = 15 1 ​ 。 { X = 1 , Y = 0 } 表示取到一个红球与一个黑球，概率为 P { X = 1 , Y = 0 } = C 6 2 ​ C 1 1 ​ C 3 1 ​ ​ = 15 3 ​ 。 { X = 1 , Y = 1 } 表示取到一个红球与一个白球，概率为 P { X = 1 , Y = 1 } = C 6 2 ​ C 1 1 ​ C 2 1 ​ ​ = 15 2 ​ 。 { X = 1 , Y = 2 } 不可能发生，故 P { X = 1 , Y = 2 } = 0 。 二维随机变量 ( X , Y ) 的概率分布如下： Y ╲ X 0 1 P { X = i } 0 3/15 3/15 6/15 1 6/15 2/15 8/15 2 1/15 0 1/15 P { Y = j } 10/15 5/15 1 （2）计算期望 E ( X ) 、 E ( Y ) 和 E ( X Y ) ： E ( X ) = 0 × 15 10 ​ + 1 × 15 5 ​ = 15 5 ​ = 3 1 ​ E ( Y ) = 0 × 15 6 ​ + 1 × 15 8 ​ + 2 × 15 1 ​ = 15 10 ​ = 3 2 ​ E ( X Y ) ​ = 0 × 0 × 15 3 ​ + 0 × 1 × 15 6 ​ + 0 × 2 × 15 1 ​ + 1 × 0 × 15 3 ​ + 1 × 1 × 15 2 ​ + 1 × 2 × 0 = 15 2 ​ ​ 协方差为： Cov ( X , Y ) = E ( X Y ) − E ( X ) E ( Y ) = 15 2 ​ − 3 1 ​ × 3 2 ​ = 15 2 ​ − 9 2 ​ = − 45 4 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2010_math3 = {
  id: P, year: Y,
  title: '2010 年全国硕士研究生招生考试 数学（三）',
  short: '2010 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2010_math3.length,
  qids: questions2010_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
