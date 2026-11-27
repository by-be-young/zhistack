const P = 'paper-2011-math1'
const Y = 2011
const SRC = '#/notes/study_methods-math-math1-2011'
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math1-2011-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  noteId: `study_methods-math-math1-${Y}`,
  source: 'real', sourceName: '2011 考研数学（一）原卷（站内镜像）', sourceUrl: SRC,
  ...extra
})

export const questions2011_math1 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\ny=(x−1)(x−2)2(x−3)3(x−4)4\n的拐点是（  ）",
    options: [{ key: "A", text: "( 1 , 0 )" }, { key: "B", text: "( 2 , 0 )" }, { key: "C", text: "( 3 , 0 )" }, { key: "D", text: "( 4 , 0 )" }],
    answer: ["C"],
    explain: "正确答案： C 由 y = ( x − 1 ) ( x − 2 ) 2 ( x − 3 ) 3 ( x − 4 ) 4 可知， 1 、 2 、 3 、 4 分别是方程 y = ( x − 1 ) ( x − 2 ) 2 ( x − 3 ) 3 ( x − 4 ) 4 = 0 的一、二、三、四重根。 因此，根据导数与原函数的关系可知： y ′ ( 1 )  = 0 ， y ′ ( 2 ) = y ′ ( 3 ) = y ′ ( 4 ) = 0 ， y ′′ ( 2 )  = 0 ， y ′′ ( 3 ) = y ′′ ( 4 ) = 0 ， y ′′′ ( 3 )  = 0 ， y ′′′ ( 4 ) = 0 。 由此可得，点 ( 3 , 0 ) 是一个拐点。"
  }),
  base(2, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设数列\n{an}\n单调减少，\nlimn→∞an=0\n且\nSn=∑k=1nak(n=1,2,⋯)\n无界，则幂级数\n∑n=1∞an(x−1)n\n的收敛域为（）。",
    options: [{ key: "A", text: "( 1 , 3 ]" }, { key: "B", text: "( 1 , 3 )" }, { key: "C", text: "[ 0 , 2 )" }, { key: "D", text: "( 0 , 2 ]" }],
    answer: ["C"],
    explain: "正确答案： C 已知 S n ​ = ∑ k = 1 n ​ a k ​ ( n = 1 , 2 , ⋯ ) 无界，说明幂级数 ∑ n = 1 ∞ ​ a n ​ ( x − 1 ) n 的收敛半径 R ≤ 1 。 由于 { a n ​ } 单调减少，且 lim n → ∞ ​ a n ​ = 0 ，可知级数 ∑ n = 1 ∞ ​ a n ​ ( − 1 ) n 收敛，进而说明幂级数 ∑ n = 1 ∞ ​ a n ​ ( x − 1 ) n 的收敛半径 R ≥ 1 。 因此，幂级数 ∑ n = 1 ∞ ​ a n ​ ( x − 1 ) n 的收敛半径 R = 1 ，收敛区间为 ( 0 , 2 ) 。 进一步地，当 x = 0 时幂级数收敛，当 x = 2 时幂级数发散，故收敛域为 [ 0 , 2 ) 。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n具有二阶连续导数，且\nf(x)>0\n，\nf′(0)=0\n，则函数\nz=f(x)lnf(y)\n在点\n(0,0)\n处取得极小值的一个充分条件是（）。",
    options: [{ key: "A", text: "f ( 0 ) > 1 , f ′′ ( 0 ) > 0" }, { key: "B", text: "f ( 0 ) > 1 , f ′′ ( 0 ) < 0" }, { key: "C", text: "f ( 0 ) < 1 , f ′′ ( 0 ) > 0" }, { key: "D", text: "f ( 0 ) < 1 , f ′′ ( 0 ) < 0" }],
    answer: ["A"],
    explain: "正确答案： A 由 z = f ( x ) ln f ( y ) 可知： z x ′ ​ = f ′ ( x ) ln f ( y ) , z y ′ ​ = f ( y ) f ( x ) ​ f ′ ( y ) , z x y ′′ ​ = f ( y ) f ′ ( x ) ​ f ′ ( y ) , z xx ′′ ​ = f ′′ ( x ) ln f ( y ) , z yy ′′ ​ = f ( x ) ⋅ f 2 ( y ) f ′′ ( y ) f ( y ) − ( f ′ ( y ) ) 2 ​ . 于是有： z x y ′′ ​ ​ x = 0 , y = 0 ​ = f ( 0 ) f ′ ( 0 ) ​ f ′ ( 0 ) = 0 , z xx ′′ ​ ​ x = 0 , y = 0 ​ = f ′′ ( 0 ) ln f ( 0 ) , z yy ′′ ​ ​ x = 0 , y = 0 ​ = f ( 0 ) ⋅ f 2 ( 0 ) f ′′ ( 0 ) f ( 0 ) − ( f ′ ( 0 ) ) 2 ​ = f ′′ ( 0 ) . 要使函数 z = f ( x ) ln f ( y ) 在点 ( 0 , 0 ) 处取得极小值，只需满足： z xx ′′ ​ ​ x = 0 , y = 0 ​ > 0 , 且 z xx ′′ ​ ​ x = 0 , y = 0 ​ ⋅ z yy ′′ ​ ​ x = 0 , y = 0 ​ − ( z x y ′′ ​ ​ x = 0 , y = 0 ​ ) 2 > 0 , 即： f ′′ ( 0 ) ln f ( 0 ) > 0. 由于 f ( x ) > 0 ，所以： 当 f ( 0 ) > 1 时， ln f ( 0 ) > 0 ，此时需 f ′′ ( 0 ) > 0 ； 当 f ( 0 ) < 1 时， ln f ( 0 ) < 0 ，此时需 f ′′ ( 0 ) < 0 。 结合选项可知，充分条件为： f ( 0 ) > 1 , f ′′ ( 0 ) > 0."
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nI=∫04πlnsinxdx\n，\nJ=∫04πlncotxdx\n，\nK=∫04πlncosxdx\n，则\nI\n，\nJ\n，\nK\n的大小关系是（ ）",
    options: [{ key: "A", text: "I < J < K" }, { key: "B", text: "I < K < J" }, { key: "C", text: "J < I < K" }, { key: "D", text: "K < J < I" }],
    answer: ["B"],
    explain: "正确答案： B 【考点分析】本题考查定积分的性质，直接将比较定积分的大小转化为比较对应的被积函数的大小即可。 【解析】当 x ∈ ( 0 , 4 π ​ ) 时， 0 < sin x < 2 2 ​ ​ < cos x < cot x ，因此 ln sin x < ln cos x < ln cot x 。 于是 ∫ 0 4 π ​ ​ ln sin x d x < ∫ 0 4 π ​ ​ ln cos x d x < ∫ 0 4 π ​ ​ ln cot x d x ，故选（B）。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为\n3\n阶矩阵，将\nA\n的第二列加到第一列得矩阵\nB\n，再交换\nB\n的第二行与第一行得单位矩阵。记\nP1=110010001\n，\nP2=100001010\n，则\nA=()",
    options: [{ key: "A", text: "P 1 ​ P 2 ​" }, { key: "B", text: "P 1 − 1 ​ P 2 ​" }, { key: "C", text: "P 2 ​ P 1 ​" }, { key: "D", text: "P 2 − 1 ​ P 1 ​" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】由初等矩阵与初等变换的关系知 A P 1 ​ = B ， P 2 ​ B = E ，所以 A = B P 1 − 1 ​ = P 2 − 1 ​ P 1 − 1 ​ = P 2 ​ P 1 − 1 ​ ，故选（ D ）。"
  }),
  base(6, 'k-math-018', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA=(α1,α2,α3,α4)\n是 4 阶矩阵，\nA∗\n为\nA\n的伴随矩阵，若\n(1,0,1,0)T\n是方程组\nAx=0\n的一个基础解系，则\nA∗x=0\n的基础解系可为（）。",
    options: [{ key: "A", text: "α 1 ​ , α 3 ​" }, { key: "B", text: "α 1 ​ , α 2 ​" }, { key: "C", text: "α 1 ​ , α 2 ​ , α 3 ​" }, { key: "D", text: "α 2 ​ , α 3 ​ , α 4 ​" }],
    answer: ["D"],
    explain: "正确答案： D 由 A x = 0 的基础解系只有一个知 r ( A ) = 3 ，所以 r ( A ∗ ) = 1 。 又由 A ∗ A = ∣ A ∣ E = 0 知， α 1 ​ 、 α 2 ​ 、 α 3 ​ 、 α 4 ​ 都是 A ∗ x = 0 的解。 由 A ( 1 , 0 , 1 , 0 ) T = 0 可得 α 1 ​ + α 3 ​ = 0 ，即 α 1 ​ 与 α 3 ​ 线性相关。 所以在 α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ 中， α 2 ​ , α 3 ​ , α 4 ​ 或 α 1 ​ , α 2 ​ , α 4 ​ 等可能为极大线性无关组，结合选项可知 (D) 正确。"
  }),
  base(7, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nF1(x)\n、\nF2(x)\n为两个分布函数，其相应的概率密度\nf1(x)\n、\nf2(x)\n是连续函数，则必为概率密度的是（）。",
    options: [{ key: "A", text: "f 1 ​ ( x ) f 2 ​ ( x )" }, { key: "B", text: "2 f 2 ​ ( x ) F 1 ​ ( x )" }, { key: "C", text: "f 1 ​ ( x ) F 2 ​ ( x )" }, { key: "D", text: "f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x )" }],
    answer: ["D"],
    explain: "正确答案： D 检验概率密度的性质：首先， f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x ) ≥ 0 ，因为 f 1 ​ ( x ) 、 f 2 ​ ( x ) 为概率密度非负， F 1 ​ ( x ) 、 F 2 ​ ( x ) 为分布函数单调不减且取值在 [ 0 , 1 ] 之间，故乘积和非负。 其次， ∫ − ∞ + ∞ ​ [ f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x )] d x = ∫ − ∞ + ∞ ​ f 1 ​ ( x ) F 2 ​ ( x ) d x + ∫ − ∞ + ∞ ​ f 2 ​ ( x ) F 1 ​ ( x ) d x 。 对第一项，令 u = F 2 ​ ( x ) ，则 d u = f 2 ​ ( x ) d x ，当 x → + ∞ ， u → 1 ； x → − ∞ ， u → 0 ，故第一项为 ∫ 0 1 ​ u d F 1 ​ ( x ) （此处通过分部积分可得）。 同理第二项为 ∫ 0 1 ​ u d F 2 ​ ( x ) ，最终可得积分结果为 F 1 ​ ( x ) F 2 ​ ( x ) ​ − ∞ + ∞ ​ = 1 ，可知 f 1 ​ ( x ) F 2 ​ ( x ) + f 2 ​ ( x ) F 1 ​ ( x ) 为概率密度，故选 (D)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且\nE(X)\n与\nE(Y)\n存在，记\nU=max{X,Y}\n，\nV=min{X,Y}\n，则\nE(UV)=\n（）",
    options: [{ key: "A", text: "E ( U ) ⋅ E ( V )" }, { key: "B", text: "E ( X ) ⋅ E ( Y )" }, { key: "C", text: "E ( U ) ⋅ E ( Y )" }, { key: "D", text: "E ( X ) ⋅ E ( V )" }],
    answer: ["B"],
    explain: "正确答案： B 由于 U V = max { X , Y } min { X , Y } = X Y ，可知 E ( U V ) = E ( max { X , Y } min { X , Y }) = E ( X Y ) 。又因为 X 与 Y 相互独立，所以 E ( X Y ) = E ( X ) E ( Y ) ，故应选 (B)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线\ny=∫0xtantdt(0≤x≤4π)\n的弧长\ns=",
    answerText: "】 ln ( 2 ​ + 1 ) 【",
    referenceAnswer: "【答案】 ln ( 2 ​ + 1 ) 【解析】 本题考查曲线弧长的计算，直接代公式即可。 s = ∫ 0 4 π ​ ​ ( y ′ ) 2 + 1 ​ d x = ∫ 0 4 π ​ ​ tan 2 x + 1 ​ d x = ∫ 0 4 π ​ ​ sec x d x = ln ∣ sec x + tan x ∣ ​ 0 4 π ​ ​ = ln ( 2 ​ + 1 )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）微分方程\ny′+y=e−xcosx\n满足条件\ny(0)=0\n的解为\ny=",
    answerText: "】 y = sin x e − x 【",
    referenceAnswer: "【答案】 y = sin x e − x 【解析】 本题考查一阶线性微分方程的求解。先按一阶线性微分方程的求解步骤求出其通解，再根据定解条件，确定通解中的任意常数。 原方程的通解为 y = e − ∫ 1 d x [ ∫ e − x cos x ⋅ e ∫ 1 d x d x + C ] = e − x [ ∫ cos x d x + C ] = e − x [ sin x + C ] 由 y ( 0 ) = 0 ，得 0 = e 0 [ sin 0 + C ] ，即 0 = 1 × ( 0 + C ) ，解得 C = 0 ，故所求解为 y = sin x e − x 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nF(x,y)=∫0y1+t2sintdt\n，则\n∂x2∂2Fx=0y=2=",
    answerText: "】 0 【",
    referenceAnswer: "【答案】 0 【解析】 本题考查偏导数的计算。由于 F ( x , y ) 中不含 x ，所以 ∂ x ∂ F ​ = 0 ，进而 ∂ x 2 ∂ 2 F ​ = 0 ，故在任意点处的值均为 0 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nL\n是柱面方程\nx2+y2=1\n与平面\nz=x+y\n的交线，从\nz\n轴正向往\nz\n轴负向看去为逆时针方向，则曲线积分\n∮Lxzdx+xdy+2y2dz=",
    answerText: "】 π 【",
    referenceAnswer: "【答案】 π 【解析】 本题考查第二类曲线积分的计算。首先将曲线写成参数方程的形式，再代入相应的计算公式计算即可。 L 的参数方程为 ⎩ ⎨ ⎧ ​ x = cos t y = sin t z = cos t + sin t ​ ， t 从 0 到 2 π 。 = = = ​ ∮ L ​ x z d x + x d y + 2 y 2 ​ d z ∫ 0 2 π ​ cos t ( cos t + sin t ) ( − sin t ) + cos t ⋅ cos t + 2 sin 2 t ​ ( cos t − sin t ) d t ∫ 0 2 π ​ ( − sin t cos 2 t − sin 2 t cos t + cos 2 t + 2 sin 2 t cos t ​ − 2 sin 3 t ​ ) d t ∫ 0 2 π ​ cos 2 t d t = π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）若二次曲面的方程为\nx2+3y2+z2+2axy+2xz+2yz=4\n，经正交变换化为\ny12+4z12=4\n，则\na=",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 本题考查二次型在正交变换下的标准型的相关知识。题目中的条件相当于告诉了二次型的特征值，通过特征值的相关性质可以解出 a 。 本题等价于将二次型 f ( x , y , z ) = x 2 + 3 y 2 + z 2 + 2 a x y + 2 x z + 2 yz 经正交变换后化为了 f = y 1 2 ​ + 4 z 1 2 ​ ，由正交变换的特点可知，该二次型的特征值为 1 , 4 , 0 。 二次型的矩阵 A = ​ 1 a 1 ​ a 3 1 ​ 1 1 1 ​ ​ ，因为特征值之和等于矩阵的迹，所以 1 + 4 + 0 = 1 + 3 + 1 ，恒成立；又因为特征值之积等于矩阵的行列式，即 ∣ A ∣ = 0 。 计算行列式： ​ 1 a 1 ​ a 3 1 ​ 1 1 1 ​ ​ = 1 × ( 3 × 1 − 1 × 1 ) − a × ( a × 1 − 1 × 1 ) + 1 × ( a × 1 − 3 × 1 ) = 2 − a ( a − 1 ) + ( a − 3 ) = − a 2 + 2 a − 1 令 ∣ A ∣ = 0 ，即 − a 2 + 2 a − 1 = 0 ，解得 a = 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二维随机变量\n(X,Y)\n服从\nN(μ,μ;σ2,σ2;0)\n，则\nE(XY2)=",
    answerText: "】 μ 3 + μ σ 2 【",
    referenceAnswer: "【答案】 μ 3 + μ σ 2 【解析】 本题考查二维正态分布的性质。由于 ρ = 0 ，由二维正态分布的性质可知随机变量 X 与 Y 独立。因此 E ( X Y 2 ) = E ( X ) ⋅ E ( Y 2 ) 。 由于 ( X , Y ) 服从 N ( μ , μ ; σ 2 , σ 2 ; 0 ) ，可知 E ( X ) = μ ， E ( Y 2 ) = D ( Y ) + ( E ( Y ) ) 2 = σ 2 + μ 2 ，则 E ( X Y 2 ) = μ ( μ 2 + σ 2 ) = μ 3 + μ σ 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求极限\n\nx→0lim(xln(1+x))ex−11",
    referenceAnswer: "【答案】 e − 2 1 ​ 【解析】 ​ x → 0 lim ​ ( x ln ( 1 + x ) ​ ) e x − 1 1 ​ = x → 0 lim ​ ( 1 + x ln ( 1 + x ) − x ​ ) e x − 1 1 ​ = e l i m x → 0 ​ x l n ( 1 + x ) − x ​ ⋅ e x − 1 1 ​ = e l i m x → 0 ​ x 2 l n ( 1 + x ) − x ​ = e l i m x → 0 ​ 2 x 1 + x 1 ​ − 1 ​ = e l i m x → 0 ​ 2 x ( 1 + x ) − x ​ = e − 2 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 9, mathHtml: true,
    stem: "（本题满分 9 分）设\nz=f(xy,yg(x))\n，其中函数\nf\n具有二阶连续偏导数，函数\ng(x)\n可导，且在\nx=1\n处取得极值\ng(1)=1\n，求\n∂x∂y∂2zx=1,y=1",
    referenceAnswer: "【答案】 f 11 ′′ ​ ( 1 , 1 ) + f 12 ′′ ​ ( 1 , 1 ) + f 1 ′ ​ ( 1 , 1 ) 【解析】 设 u = x y , v = y g ( x ) 则 z = f ( u , v ) = f ( x y , y g ( x )) 先对 x 求偏导，得 [\n\\frac{\\partial z}{\\partial x} f_1^{\\prime}(xy,yg(x))\\cdot y\n+\nf_2^{\\prime}(xy,yg(x))\\cdot yg^{\\prime}(x)\n] 再对 y 求偏导： ∂ x ∂ y ∂ 2 z ​ ​ = f 11 ′′ ​ ( x y , y g ( x )) ⋅ x y + f 12 ′′ ​ ( x y , y g ( x )) ⋅ y g ( x ) + f 1 ′ ​ ( x y , y g ( x )) + f 21 ′′ ​ ( x y , y g ( x )) ⋅ x y g ′ ( x ) + f 22 ′′ ​ ( x y , y g ( x )) ⋅ y g ( x ) g ′ ( x ) + f 2 ′ ​ ( x y , y g ( x )) ⋅ g ′ ( x ) ​ 由于 g ( x ) 在 x = 1 处取得极值，且 g ( x ) 可导，所以 g ′ ( 1 ) = 0 又因为 g ( 1 ) = 1 ，代入 x = 1 , y = 1 ，得 ∂ x ∂ y ∂ 2 z ​ ​ x = 1 , y = 1 ​ ​ = f 11 ′′ ​ ( 1 , 1 ) + f 12 ′′ ​ ( 1 , 1 ) + f 1 ′ ​ ( 1 , 1 ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 9 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求方程\nkarctanx−x=0\n不同实根的个数，其中\nk\n为参数。",
    referenceAnswer: "【答案】 当 k ≤ 1 时，方程有 1 个实根；当 k > 1 时，方程有 2 个实根。 【解析】 令 f ( x ) = k arctan x − x ，则 f ( 0 ) = 0 ，且 f ′ ( x ) = 1 + x 2 k ​ − 1 = 1 + x 2 k − 1 − x 2 ​ . (1) 当 k ≤ 1 时， f ′ ( x ) ≤ 0 （仅当 k = 1 且 x = 0 时等号成立），因此 f ( x ) 在 ( − ∞ , + ∞ ) 上单调递减，故方程仅有一个实根 x = 0 。 (2) 当 k > 1 时，令 f ′ ( x ) = 0 ，解得 x = ± k − 1 ​ 。在区间 ( − k − 1 ​ , k − 1 ​ ) 上， f ′ ( x ) > 0 ， f ( x ) 单调递增；在区间 ( − ∞ , − k − 1 ​ ) 和 ( k − 1 ​ , + ∞ ) 上， f ′ ( x ) < 0 ， f ( x ) 单调递减。 计算可得： f ( k − 1 ​ ) = k arctan k − 1 ​ − k − 1 ​ . 令 t = k − 1 ​ > 0 ，则 f ( k − 1 ​ ) = ( t 2 + 1 ) arctan t − t . 求导可知该函数在 t > 0 时大于 0。又因为 lim x → + ∞ ​ f ( x ) = − ∞ ，所以在区间 ( k − 1 ​ , + ∞ ) 上存在一个实根。 同理， f ( − k − 1 ​ ) < 0 ，且 lim x → − ∞ ​ f ( x ) = + ∞ ，但 f ( 0 ) = 0 ，因此在区间 ( − ∞ , − k − 1 ​ ) 上无实根。综上，当 k > 1 时，方程有两个实根（ x = 0 和一个正根）。 综上所述，当 k ≤ 1 时，方程有 1 个实根；当 k > 1 时，方程有 2 个实根。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）证明：\n\n(1) 对任意正整数\nn\n，都有\nn+11ln(1+n1)n1\n；\n\n(2) 设\nan=1+21+⋯+n1−lnn(n=1,2,⋯)\n，证明数列\n{an}\n收敛。",
    referenceAnswer: "【答案】 见解析 【解析】 (1) 令 x = n 1 ​ > 0 ，需证 1 + x x ​ < ln ( 1 + x ) < x 。 令 f ( x ) = x − ln ( 1 + x ) ，则 f ′ ( x ) = 1 − 1 + x 1 ​ = 1 + x x ​ > 0 （当 x > 0 时）。因此 f ( x ) 在 [ 0 , + ∞ ) 上单调递增，且 f ( x ) > f ( 0 ) = 0 ，即 ln ( 1 + x ) < x 。 再令 g ( x ) = ln ( 1 + x ) − 1 + x x ​ ，则 g ′ ( x ) = 1 + x 1 ​ − ( 1 + x ) 2 1 ​ = ( 1 + x ) 2 x ​ > 0 （当 x > 0 时）。因此 g ( x ) 在 [ 0 , + ∞ ) 上单调递增，且 g ( x ) > g ( 0 ) = 0 ，即 1 + x x ​ < ln ( 1 + x ) 。 综上，不等式得证。 (2) 考虑 a n + 1 ​ − a n ​ = n + 1 1 ​ − ln ( 1 + n 1 ​ ) 。由 (1) 知 n + 1 1 ​ < ln ( 1 + n 1 ​ ) ，因此 a n + 1 ​ − a n ​ < 0 ，即数列 { a n ​ } 单调递减。 又因为 a n ​ = k = 1 ∑ n ​ k 1 ​ − ln n > k = 1 ∑ n ​ ln ( 1 + k 1 ​ ) − ln n = ln ( n + 1 ) − ln n > 0 , 所以 { a n ​ } 有下界。 由单调有界收敛定理，数列 { a n ​ } 收敛。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知函数\nf(x,y)\n具有二阶连续偏导数，且\nf(1,y)=0\n，\nf(x,1)=0\n，\n∬Df(x,y)dxdy=a\n，其中\nD={(x,y)∣0≤x≤1,0≤y≤1}\n，计算二重积分\nI=∬Dxyfxy′′(x,y)dxdy\n。",
    referenceAnswer: "【答案】 a 【解析】 将二重积分化为累次积分： I = ∫ 0 1 ​ d y ∫ 0 1 ​ x y f x y ′′ ​ ( x , y ) d x 先计算内层积分 ∫ 0 1 ​ x y f x y ′′ ​ ( x , y ) d x ，将 y 视为常数，利用分部积分法： ∫ 0 1 ​ x y f x y ′′ ​ ( x , y ) d x ​ = y ∫ 0 1 ​ x d f y ′ ​ ( x , y ) = x y f y ′ ​ ( x , y ) ​ 0 1 ​ − y ∫ 0 1 ​ f y ′ ​ ( x , y ) d x = y f y ′ ​ ( 1 , y ) − y ∫ 0 1 ​ f y ′ ​ ( x , y ) d x ​ 由 f ( 1 , y ) = 0 ，得 f y ′ ​ ( 1 , y ) = 0 ，故内层积分化简为： − y ∫ 0 1 ​ f y ′ ​ ( x , y ) d x 因此： I = ∫ 0 1 ​ ( − y ∫ 0 1 ​ f y ′ ​ ( x , y ) d x ) d y = − ∫ 0 1 ​ d x ∫ 0 1 ​ y f y ′ ​ ( x , y ) d y 再对内层积分 ∫ 0 1 ​ y f y ′ ​ ( x , y ) d y 分部积分，将 x 视为常数： ∫ 0 1 ​ y f y ′ ​ ( x , y ) d y = ∫ 0 1 ​ y df ( x , y ) = y f ( x , y ) ∣ 0 1 ​ − ∫ 0 1 ​ f ( x , y ) d y = − ∫ 0 1 ​ f ( x , y ) d y 所以： I = − ∫ 0 1 ​ d x ∫ 0 1 ​ y f y ′ ​ ( x , y ) d y = ∫ 0 1 ​ d x ∫ 0 1 ​ f ( x , y ) d y = ∬ D ​ f ( x , y ) d x d y = a",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设向量组\nα1=(1,0,1)T\n，\nα2=(0,1,1)T\n，\nα3=(1,3,5)T\n不能由向量组\nβ1=(1,1,1)T\n，\nβ2=(1,2,3)T\n，\nβ3=(3,4,a)T\n线性表示。\n\n（Ⅰ）求\na\n的值；\n\n（Ⅱ）将\nβ1\n，\nβ2\n，\nβ3\n用\nα1\n，\nα2\n，\nα3\n线性表示。",
    referenceAnswer: "【答案】 （Ⅰ） a = 5 （Ⅱ） ⎩ ⎨ ⎧ ​ β 1 ​ = 2 α 1 ​ + 4 α 2 ​ − α 3 ​ , β 2 ​ = α 1 ​ + 2 α 2 ​ + 0 α 3 ​ , β 3 ​ = 5 α 1 ​ + 10 α 2 ​ − 2 α 3 ​ . ​ 【解析】 【解】 (Ⅰ) 方法一 α 1 ​ ， α 2 ​ ， α 3 ​ 为 3 个 3 维向量，因为 ∣ α 1 ​ , α 2 ​ , α 3 ​ ∣ = ​ 1 0 1 ​ 0 1 1 ​ 1 3 5 ​ ​ = 1  = 0 , 所以 α 1 ​ ， α 2 ​ ， α 3 ​ 线性无关。 由于 β 1 ​ ， β 2 ​ ， β 3 ​ 一定可由 α 1 ​ ， α 2 ​ ， α 3 ​ 线性表示，而 α 1 ​ ， α 2 ​ ， α 3 ​ 不能由 β 1 ​ ， β 2 ​ ， β 3 ​ 线性表示，所以 β 1 ​ ， β 2 ​ ， β 3 ​ 的秩小于 α 1 ​ ， α 2 ​ ， α 3 ​ 的秩。 从而 ∣ β 1 ​ , β 2 ​ , β 3 ​ ∣ = ​ 1 1 1 ​ 1 2 3 ​ 3 4 a ​ ​ = ​ 1 0 0 ​ 1 1 2 ​ 3 1 a − 3 ​ ​ = a − 5 = 0 , 故 a = 5 。 方法二 β 1 ​ ， β 2 ​ ， β 3 ​ ， α i ​ （ i = 1 , 2 , 3 ）为 4 个 3 维向量，则 β 1 ​ ， β 2 ​ ， β 3 ​ ， α i ​ （ i = 1 , 2 , 3 ）一定线性相关。 若 β 1 ​ ， β 2 ​ ， β 3 ​ 线性无关，而 β 1 ​ ， β 2 ​ ， β 3 ​ ， α i ​ （ i = 1 , 2 , 3 ）线性相关，则 α i ​ （ i = 1 , 2 , 3 ）可由向量组 β 1 ​ ， β 2 ​ ， β 3 ​ 线性表示，矛盾。 于是 ∣ β 1 ​ , β 2 ​ , β 3 ​ ∣ = 0 。由 ∣ β 1 ​ , β 2 ​ , β 3 ​ ∣ = ​ 1 1 1 ​ 1 2 3 ​ 3 4 a ​ ​ = a − 5 = 0 , 得 a = 5 。 (Ⅱ) 将矩阵 ( α 1 ​ , α 2 ​ , α 3 ​ , β 1 ​ , β 2 ​ , β 3 ​ ) 进行初等行变换得 ( α 1 ​ , α 2 ​ , α 3 ​ , β 1 ​ , β 2 ​ , β 3 ​ ) = ​ 1 0 1 ​ 0 1 1 ​ 1 3 5 ​ 1 1 1 ​ 1 2 3 ​ 3 4 5 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 2 4 − 1 ​ 1 2 0 ​ 5 10 − 2 ​ ​ , 于是 ⎩ ⎨ ⎧ ​ β 1 ​ = 2 α 1 ​ + 4 α 2 ​ − α 3 ​ , β 2 ​ = α 1 ​ + 2 α 2 ​ + 0 α 3 ​ , β 3 ​ = 5 α 1 ​ + 10 α 2 ​ − 2 α 3 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\nA\n为三阶实矩阵，\nR(A)=2\n，且\nA10−1101=−101101.\n\n（I）求\nA\n的特征值与特征向量；\n\n（II）求\nA\n。",
    referenceAnswer: "【答案】 （I） A 的特征值分别为 1 ， − 1 ， 0 ，对应的特征向量分别为 ​ 1 0 1 ​ ​ ， ​ − 1 0 1 ​ ​ ， ​ 0 1 0 ​ ​ 。 （II） A = ​ 0 0 1 ​ 0 0 0 ​ 1 0 0 ​ ​ 。 【解析】 （1）由 A ​ 1 0 1 ​ ​ = ​ 1 0 1 ​ ​ , A ​ − 1 0 1 ​ ​ = − ​ − 1 0 1 ​ ​ 可知： 1 ， − 1 均为 A 的特征值， ξ 1 ​ = ​ 1 0 1 ​ ​ 与 ξ 2 ​ = ​ − 1 0 1 ​ ​ 分别为它们的特征向量。 由于 r ( A ) = 2 ，可知 0 也是 A 的特征值，而 0 的特征向量与 ξ 1 ​ 、 ξ 2 ​ 正交。 设 ξ 3 ​ = ​ x 1 ​ x 2 ​ x 3 ​ ​ ​ 为 0 的特征向量，由正交条件可得 { x 1 ​ + x 3 ​ = 0 − x 1 ​ + x 3 ​ = 0 ​ 解得 ξ 3 ​ = k ​ 0 1 0 ​ ​ 。 因此， A 的特征值分别为 1 ， − 1 ， 0 ，对应的特征向量分别为 ​ 1 0 1 ​ ​ ， ​ − 1 0 1 ​ ​ ， ​ 0 1 0 ​ ​ 。 （2）由 A = P Λ P − 1 ，其中 Λ = ​ 1 ​ − 1 ​ 0 ​ ​ , P = ​ 1 0 1 ​ − 1 0 1 ​ 0 1 0 ​ ​ 可得 A = ​ 1 0 1 ​ − 1 0 1 ​ 0 1 0 ​ ​ ​ 1 ​ − 1 ​ 0 ​ ​ ​ 1 0 1 ​ − 1 0 1 ​ 0 1 0 ​ ​ − 1 计算逆矩阵得 P − 1 = ​ 2 1 ​ − 2 1 ​ 1 ​ 0 0 1 ​ 2 1 ​ 2 1 ​ 0 ​ ​ 代入得 A = ​ 1 0 1 ​ − 1 0 1 ​ 0 1 0 ​ ​ ​ 1 ​ − 1 ​ 0 ​ ​ ​ 2 1 ​ − 2 1 ​ 1 ​ 0 0 1 ​ 2 1 ​ 2 1 ​ 0 ​ ​ 计算后得到 A = ​ 0 0 1 ​ 0 0 0 ​ 1 0 0 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "(本题满分 11 分)\n\n设随机变量\nX\n与\nY\n的概率分布分别为\n\nXP031132\n\nYP−131031131\n\n且\nP{X2=Y2}=1\n。\n\n(Ⅰ) 求二维随机变量\n(X,Y)\n的概率分布；\n\n(Ⅱ) 求\nZ=XY\n的概率分布；\n\n(Ⅲ) 求\nX\n与\nY\n的相关系数\nρXY\n。",
    referenceAnswer: "【答案】 (Ⅰ) 二维随机变量 ( X , Y ) 的概率分布为： X \\ Y 0 1 ​ − 1 0 3 1 ​ ​ 0 3 1 ​ 0 ​ 1 0 3 1 ​ ​ ​ (Ⅱ) Z = X Y 的概率分布为： Z ∼ ( − 1 3 1 ​ ​ 0 3 1 ​ ​ 1 3 1 ​ ​ ) (Ⅲ) X 与 Y 的相关系数 ρ X Y ​ = 0 。 【解析】 (Ⅰ) 由 P { X 2 = Y 2 } = 1 ，得 P { X 2  = Y 2 } = 0 ， 于是 P { X = 0 , Y = − 1 } = P { X = 0 , Y = 1 } = P { X = 1 , Y = 0 } = 0 故 ( X , Y ) 的联合分布律为 X \\ Y 0 1 ​ − 1 0 3 1 ​ ​ 0 3 1 ​ 0 ​ 1 0 3 1 ​ ​ ​ (Ⅱ) Z = X Y 的可能取值为 − 1 , 0 , 1 ，且 P { Z = − 1 } = P { X = 1 , Y = − 1 } = 3 1 ​ P { Z = 0 } ​ = P { X = 0 , Y = − 1 } + P { X = 0 , Y = 0 } + P { X = 0 , Y = 1 } + P { X = 1 , Y = 0 } = 3 1 ​ ​ P { Z = 1 } = 1 − P { Z = − 1 } − P { Z = 0 } = 3 1 ​ 则 Z 的分布律为 Z ∼ ( − 1 3 1 ​ ​ 0 3 1 ​ ​ 1 3 1 ​ ​ ) (Ⅲ) 由 E ( X ) = 3 2 ​ , E ( Y ) = 0 , E ( X Y ) = E ( Z ) = 0 得 Cov ( X , Y ) = E ( X Y ) − E ( X ) E ( Y ) = 0 于是 ρ X Y ​ = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\nX1,X2,⋯,Xn\n为来自正态总体\nN(μ0,σ2)\n的简单随机样本，其中\nμ0\n已知，\nσ2>0\n未知，\nX\n和\nS2\n分别表示样本均值和样本方差。\n\n（Ⅰ）求参数\nσ2\n的最大似然估计\nσ2\n；\n\n（Ⅱ）计算\nE(σ2)\n和\nD(σ2)\n。",
    referenceAnswer: "【答案】 （Ⅰ） σ 2 = n 1 ​ ∑ i = 1 n ​ ( X i ​ − μ 0 ​ ) 2 （Ⅱ） E ( σ 2 ) = σ 2 ， D ( σ 2 ) = n 2 σ 4 ​ 【解析】 （Ⅰ）似然函数为 L ( σ 2 ) = f ( x 1 ​ ) f ( x 2 ​ ) ⋯ f ( x n ​ ) = ( 2 π σ 2 ) − 2 n ​ e − 2 σ 2 1 ​ ∑ i = 1 n ​ ( x i ​ − μ 0 ​ ) 2 , 取对数得 ln L ( σ 2 ) = − 2 n ​ ln 2 π − 2 n ​ ln σ 2 − 2 σ 2 1 ​ i = 1 ∑ n ​ ( x i ​ − μ 0 ​ ) 2 . 由 d ( σ 2 ) d ​ ln L ( σ 2 ) = − 2 σ 2 n ​ + 2 σ 4 1 ​ i = 1 ∑ n ​ ( x i ​ − μ 0 ​ ) 2 = 0 , 解得 σ 2 = n 1 ​ i = 1 ∑ n ​ ( x i ​ − μ 0 ​ ) 2 . 故 σ 2 的最大似然估计量为 σ 2 = n 1 ​ i = 1 ∑ n ​ ( X i ​ − μ 0 ​ ) 2 . （Ⅱ） 方法一 ： E ( σ 2 ) = n 1 ​ i = 1 ∑ n ​ E ( X i ​ − μ 0 ​ ) 2 = E ( X − μ 0 ​ ) 2 , = D ( X − μ 0 ​ ) + [ E ( X − μ 0 ​ ) ] 2 = D ( X ) = σ 2 . 又 D ( σ 2 ) = n 2 1 ​ i = 1 ∑ n ​ D ( X i ​ − μ 0 ​ ) 2 = n 1 ​ D ( X − μ 0 ​ ) 2 = n σ 4 ​ D ( σ X − μ 0 ​ ​ ) 2 . 因为 σ X − μ 0 ​ ​ ∼ N ( 0 , 1 ) ，所以 ( σ X − μ 0 ​ ​ ) 2 ∼ χ 2 ( 1 ) ，于是 D ( σ X − μ 0 ​ ​ ) 2 = 2 , 故 D ( σ 2 ) = n 2 σ 4 ​ . 方法二 ： 因为 ∑ i = 1 n ​ ( σ X i ​ − μ 0 ​ ​ ) 2 ∼ χ 2 ( n ) ，所以 i = 1 ∑ n ​ D ( σ X i ​ − μ 0 ​ ​ ) 2 = 2 n . 于是 D ( σ 2 ) = D [ n σ 2 ​ i = 1 ∑ n ​ ( σ X i ​ − μ 0 ​ ​ ) 2 ] = n 2 σ 4 ​ i = 1 ∑ n ​ D ( σ X i ​ − μ 0 ​ ​ ) 2 = n 2 σ 4 ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2011_math1 = {
  id: P, year: Y,
  title: '2011 年全国硕士研究生招生考试 数学（一）',
  short: '2011 数学一原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2011_math1.length,
  qids: questions2011_math1.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
