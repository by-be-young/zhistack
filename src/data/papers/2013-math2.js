const P = 'paper-2013-math2'
const Y = 2013
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2013-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2013 考研数学（二）真题',
  ...extra
})

export const questions2013_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(\\cos x-1=x\\sin\\alpha(x),\\; |\\alpha(x)|<\\frac\\pi2,\\) 则当 \\(x\\to0\\) 时，\\(\\alpha(x)\\) 是（ ）。",
    options: [{ key: "A", text: "比 \\(x\\) 高阶的无穷小" }, { key: "B", text: "比 \\(x\\) 低阶的无穷小" }, { key: "C", text: "与 \\(x\\) 同阶但不等价的无穷小" }, { key: "D", text: "与 \\(x\\) 等价的无穷小" }],
    answer: ["C"],
    explain: "正确答案： C 由于 x → 0 lim ​ x s i n α ( x ) ​ = x → 0 lim ​ x 2 c o s x − 1 ​ = − 2 1 ​ ，可得 x → 0 lim ​ sin α ( x ) = 0 。 因此当 x → 0 时， α ( x ) → 0 ，于是 sin α ( x ) ∼ α ( x ) 。 进而有： x → 0 lim ​ x sin α ( x ) ​ = x → 0 lim ​ x α ( x ) ​ = − 2 1 ​ 所以 α ( x ) 是与 x 同阶但不等价的无穷小。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(y=f(x)\\) 由方程 \\(\\cos(xy)+\\ln y-x=1\\) 确定，则 \\(\\lim_{n\\to\\infty}n\\left[f\\left(\\frac2n\\right)-1\\right]=\\) （ ）。",
    options: [{ key: "A", text: "\\(2\\)" }, { key: "B", text: "\\(1\\)" }, { key: "C", text: "\\(-1\\)" }, { key: "D", text: "\\(-2\\)" }],
    answer: ["A"],
    explain: "正确答案： A 由方程可知 f ( 0 ) = 1 ， n → ∞ lim ​ n [ f ( n 2 ​ ) − 1 ] = n → ∞ lim ​ 2 ⋅ n 2 ​ f ( n 2 ​ ) − f ( 0 ) ​ = 2 f ′ ( 0 ) . 对方程两边求导得： − ( y + x y ′ ) sin ( x y ) + y y ′ ​ − 1 = 0. 令 x = 0 ，此时 y = 1 ，代入得 f ′ ( 0 ) = 1 ， 因此 n → ∞ lim ​ n [ f ( n 2 ​ ) − 1 ] = 2."
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\\(f(x)= \\begin{cases} \\sin x,&0\\le x<\\pi,\\\\ 2,&\\pi\\le x\\le2\\pi, \\end{cases} \\; F(x)=\\int_0^x f(t)\\,dt,\\)则（ ）。",
    options: [{ key: "A", text: "\\(x=\\pi\\) 是函数 \\(F(x)\\) 的跳跃间断点" }, { key: "B", text: "\\(x=\\pi\\) 是函数 \\(F(x)\\) 的可去间断点" }, { key: "C", text: "\\(F(x)\\) 在 \\(x=\\pi\\) 处连续但不可导" }, { key: "D", text: "\\(F(x)\\) 在 \\(x=\\pi\\) 处可导" }],
    answer: ["C"],
    explain: "正确答案： C F ( x ) = ∫ 0 x ​ f ( t ) d t = { ∫ 0 x ​ sin t d t = 1 − cos x , ∫ 0 π ​ sin t d t + ∫ π x ​ 2 d t = 2 ( x − π + 1 ) , ​ 0 ≤ x < π π ≤ x ≤ 2 π ​ 由于 x → π − lim ​ F ( x ) = x → π + lim ​ F ( x ) = 2 ，因此 F ( x ) 在 x = π 处连续。 计算左右导数： x → π − lim ​ x − π F ( x ) − F ( π ) ​ = x → π − lim ​ x − π 1 − cos x − 2 ​ = 0 x → π + lim ​ x − π F ( x ) − F ( π ) ​ = x → π + lim ​ x − π 2 ( x − π ) ​ = 2 左右导数不相等，因此 F ( x ) 在 x = π 处不可导。"
  }),
  base(4, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\\(f(x)= \\begin{cases} \\dfrac1{(x-1)^{\\alpha-1}},&1<x<e,\\\\[6pt] \\dfrac1{x\\ln^{\\alpha+1}x},&x\\ge e, \\end{cases}\\)若反常积分 \\(\\int_1^{+\\infty}f(x)\\,dx\\) 收敛，则（ ）。",
    options: [{ key: "A", text: "\\(\\alpha<-2\\)" }, { key: "B", text: "\\(\\alpha>2\\)" }, { key: "C", text: "\\(-2<\\alpha<0\\)" }, { key: "D", text: "\\(0<\\alpha<2\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】反常积分需在两个区间分别收敛。 当 \\(1<x<e\\) 时， \\[\n\\int_1^e \\frac{dx}{(x-1)^{\\alpha-1}}\n=\\int_1^e (x-1)^{1-\\alpha}\\,dx.\n\\] 在 \\(x=1\\) 附近，幂函数反常积分收敛的条件为 \\(1-\\alpha>-1\\)，即 \\(\\alpha<2\\)。 当 \\(x\\ge e\\) 时，令 \\(u=\\ln x\\)，则 \\[\n\\int_e^{+\\infty}\\frac{dx}{x\\ln^{\\alpha+1}x}\n=\\int_1^{+\\infty}\\frac{du}{u^{\\alpha+1}},\n\\] 该积分收敛当且仅当 \\(\\alpha+1>1\\)，即 \\(\\alpha>0\\)。 综合得 \\(0<\\alpha<2\\)，故选 D。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(z=\\frac yx f(xy),\\) 其中函数 \\(f\\) 可微，则 \\(\\frac xy\\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=\\) （ ）。",
    options: [{ key: "A", text: "\\(2y f'(xy)\\)" }, { key: "B", text: "\\(-2y f'(xy)\\)" }, { key: "C", text: "\\(\\dfrac2x f(xy)\\)" }, { key: "D", text: "\\(-\\dfrac2x f(xy)\\)" }],
    answer: ["A"],
    explain: "正确答案： A 已知 z = x y ​ f ( x y ) ，则 ∂ x ∂ z ​ = − x 2 y ​ f ( x y ) + x y 2 ​ f ′ ( x y ) , ∂ y ∂ z ​ = x 1 ​ f ( x y ) + x y ​ ⋅ x f ′ ( x y ) = x 1 ​ f ( x y ) + y f ′ ( x y ) . 因此， y x ​ ∂ x ∂ z ​ + ∂ y ∂ z ​ = y x ​ ( − x 2 y ​ f ( x y ) + x y 2 ​ f ′ ( x y ) ) + x 1 ​ f ( x y ) + y f ′ ( x y ) . 展开并化简： = − x 1 ​ f ( x y ) + y f ′ ( x y ) + x 1 ​ f ( x y ) + y f ′ ( x y ) = 2 y f ′ ( x y ) ."
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(D_k\\) 是圆域 \\(D=\\{(x,y)\\mid x^2+y^2\\le1\\}\\) 在第 \\(k\\) 象限的部分，记 \\(I_k=\\iint_{D_k}(y-x)\\,dx\\,dy\\;(k=1,2,3,4),\\) 则（ ）。",
    options: [{ key: "A", text: "\\(I_1>0\\)" }, { key: "B", text: "\\(I_2>0\\)" }, { key: "C", text: "\\(I_3>0\\)" }, { key: "D", text: "\\(I_4>0\\)" }],
    answer: ["B"],
    explain: "正确答案： B 令 x = r cos θ ， y = r sin θ ，则 I k ​ = ∫ θ 1 ​ θ 2 ​ ​ ∫ 0 1 ​ ( r sin θ − r cos θ ) r d r d θ = ∫ θ 1 ​ θ 2 ​ ​ ( sin θ − cos θ ) d θ ∫ 0 1 ​ r 2 d r = 3 1 ​ ∫ θ 1 ​ θ 2 ​ ​ ( sin θ − cos θ ) d θ . 当 k = 2 时， θ 的范围为 2 π ​ 到 π ，此时 ∫ 2 π ​ π ​ ( sin θ − cos θ ) d θ = [ − cos θ − sin θ ] 2 π ​ π ​ = ( 1 − 0 ) − ( 0 − 1 ) = 2 > 0 , 故 I 2 ​ > 0 。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设矩阵 \\(A,B,C\\) 均为 \\(n\\) 阶矩阵，若 \\(AB=C\\)，且 \\(B\\) 可逆，则（ ）。",
    options: [{ key: "A", text: "矩阵 \\(C\\) 的行向量组与矩阵 \\(A\\) 的行向量组等价" }, { key: "B", text: "矩阵 \\(C\\) 的列向量组与矩阵 \\(A\\) 的列向量组等价" }, { key: "C", text: "矩阵 \\(C\\) 的行向量组与矩阵 \\(B\\) 的行向量组等价" }, { key: "D", text: "矩阵 \\(C\\) 的列向量组与矩阵 \\(B\\) 的列向量组等价" }],
    answer: ["B"],
    explain: "正确答案： B 由 C = A B 可知， C 的列向量组可由 A 的列向量组线性表示。 由于 B 可逆，可得 A = C B − 1 ，因此 A 的列向量组也可由 C 的列向量组线性表示。 根据向量组等价的定义，矩阵 C 的列向量组与矩阵 A 的列向量组等价。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "矩阵\\(\\begin{pmatrix} 1&a&1\\\\ a&b&a\\\\ 1&a&1 \\end{pmatrix}\\)与矩阵\\(\\begin{pmatrix} 2&0&0\\\\ 0&b&0\\\\ 0&0&0 \\end{pmatrix}\\)相似的充分必要条件为（ ）。",
    options: [{ key: "A", text: "\\(a=0,\\ b=2\\)" }, { key: "B", text: "\\(a=0,\\ b\\) 为任意常数" }, { key: "C", text: "\\(a=2,\\ b=0\\)" }, { key: "D", text: "\\(a=2,\\ b\\) 为任意常数" }],
    answer: ["B"],
    explain: "正确答案： B 相似矩阵的特征值相同，迹相同，行列式相同。 第二个矩阵的特征值为 2 , b , 0 ，则原矩阵的迹为 2 + b + 0 = 2 + b 。 原矩阵的迹为 1 + b + 1 = b + 2 ，满足迹相等。 原矩阵行列式为 0 （因为第三个特征值为 0 ）。 计算原矩阵行列式：按第一行展开得 1 × ( b × 1 − a × a ) − a × ( a × 1 − a × 1 ) + 1 × ( a × a − b × 1 ) = b − a 2 + 0 + a 2 − b = 0 恒成立。 对于特征值 2 ，代入 ∣ A − 2 E ∣ = 0 ，得 ​ − 1 a 1 ​ a b − 2 a ​ 1 a − 1 ​ ​ = 0 计算得 − 1 × [( b − 2 ) ( − 1 ) − a 2 ] − a × [ a × ( − 1 ) − a × 1 ] + 1 × [ a 2 − ( b − 2 ) × 1 ] = ( b − 2 + a 2 ) − a × ( − 2 a ) + ( a 2 − b + 2 ) = b − 2 + a 2 + 2 a 2 + a 2 − b + 2 = 4 a 2 = 0 ， 故 a = 0 ， b 无其他限制，为任意常数。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\lim_{x\\to0}\\left(2-\\frac{\\ln(1+x)}x\\right)^{1/x}=\\) ________。",
    answerText: "】 e 2 1 ​ 【",
    referenceAnswer: "【答案】 e 2 1 ​ 【解析】 原式 = e x → 0 l i m ​ x l n ( 1 + x l n ( 1 + x ) ​ ) ​ 。 考虑极限部分： x → 0 lim ​ x ln ( 1 + x l n ( 1 + x ) ​ ) ​ = x → 0 lim ​ x 1 − x l n ( 1 + x ) ​ ​ = x → 0 lim ​ x 1 − ( 1 − 2 1 ​ x + o ( x ) ) ​ = 2 1 ​ 因此答案为 e 2 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)=\\int_{-1}^x\\sqrt{1-e^t}\\,dt,\\) 则 \\(y=f(x)\\) 的反函数 \\(x=f^{-1}(y)\\) 在 \\(y=0\\) 处的导数 \\(\\left.\\frac{dx}{dy}\\right|_{y=0}=\\) ________。",
    answerText: "】 1 − e − 1 ​ 1 ​ 【",
    referenceAnswer: "【答案】 1 − e − 1 ​ 1 ​ 【解析】 已知 d x d y ​ = 1 − e x ​ ，因此 d y d x ​ = 1 − e x ​ 1 ​ 当 y = 0 时，对应的 x = − 1 ，代入得 d y d x ​ ​ y = 0 ​ = 1 − e x ​ 1 ​ ​ x = − 1 ​ = 1 − e − 1 ​ 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设封闭曲线 \\(L\\) 的极坐标方程为 \\(r=\\cos3\\theta\\;\\left(-\\frac\\pi6\\le\\theta\\le\\frac\\pi6\\right),\\) 则 \\(L\\) 所围平面图形的面积为 ________。",
    answerText: "】 S = 12 π ​ 【",
    referenceAnswer: "【答案】 S = 12 π ​ 【解析】 所围图形的面积为： S = 2 1 ​ ∫ − 6 π ​ 6 π ​ ​ cos 2 3 θ d θ 利用对称性及倍角公式，可改写为： S = ∫ 0 6 π ​ ​ 2 1 + cos 6 θ ​ d θ 计算得： S = 12 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\\(\\begin{cases} x=\\arctan t,\\\\ y=\\ln\\sqrt{1+t^2} \\end{cases}\\)在 \\(t=1\\) 处的法线方程为 ________。",
    answerText: "】 y + x − 4 π ​ − ln 2 ​ = 0 【",
    referenceAnswer: "【答案】 y + x − 4 π ​ − ln 2 ​ = 0 【解析】 已知 d x d y ​ = 1 + t 2 1 ​ 1 + t 2 t ​ ​ = t ，因此 d x d y ​ ​ t = 1 ​ = 1 。 当 t = 1 时， x = 4 π ​ ， y = ln 2 ​ 。 法线斜率为 − 1 ，故法线方程为： y − ln 2 ​ = − ( x − 4 π ​ ) 整理得： y + x − 4 π ​ − ln 2 ​ = 0",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知\\(y_1=e^{3x}-xe^{2x},\\; y_2=e^x-xe^{2x},\\; y_3=-xe^{2x}\\)是某二阶常系数非齐次线性微分方程的 3 个解，该方程满足条件 \\(y|_{x=0}=0,\\; y'|_{x=0}=1\\) 的解为 \\(y=\\) ________。",
    answerText: "】 y = e 3 x − e x − x e 2 x 【",
    referenceAnswer: "【答案】 y = e 3 x − e x − x e 2 x 【解析】 由题意可知： e 3 x 与 e x 是对应齐次方程的解，而 − x e 2 x 是非齐次方程的一个特解。 因此，非齐次方程的通解为： y = C 1 ​ e 3 x + C 2 ​ e x − x e 2 x 将初始条件代入通解，解得： C 1 ​ = 1 , C 2 ​ = − 1 于是满足条件的特解为： y = e 3 x − e x − x e 2 x",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A=(a_{ij})\\) 是 3 阶非零矩阵，\\(|A|\\) 为 \\(A\\) 的行列式，\\(A_{ij}\\) 为 \\(a_{ij}\\) 的代数余子式。若 \\(a_{ij}+A_{ij}=0\\;(i,j=1,2,3),\\) 则 \\(|A|=\\) ________。",
    answerText: "】 -1 【",
    referenceAnswer: "【答案】 -1 【解析】 由 a ij ​ + A ij ​ = 0 可知， A ⊤ = − A ∗ 。 ∣ A ∣ ​ = a i 1 ​ A i 1 ​ + a i 2 ​ A i 2 ​ + a i 3 ​ A i 3 ​ = a 1 j ​ A 1 j ​ + a 2 j ​ A 2 j ​ + a 3 j ​ A 3 j ​ = − j = 1 ∑ 3 ​ a ij 2 ​ = − i , j = 1 ∑ 3 ​ a ij 2 ​ < 0 ​ 从而有 ∣ A ∣ = ∣ A ⊤ ∣ = ∣ − A ∗ ∣ = ( − 1 ) 3 ∣ A ∗ ∣ = − ∣ A ∣ 2 , 故 ∣ A ∣ = − 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n当 \\(x\\to0\\) 时，\\(1-\\cos x\\cos2x\\cos3x\\) 与 \\(ax^n\\) 为等价无穷小，求 \\(n\\) 与 \\(a\\) 的值。",
    referenceAnswer: "【答案】 n = 2 , a = 7 【解析】 因为当 x → 0 时， 1 − cos x ⋅ cos 2 x ⋅ cos 3 x 与 a x n 为等价无穷小，所以 x → 0 lim ​ a x n 1 − cos x ⋅ cos 2 x ⋅ cos 3 x ​ = 1 又因为： 1 − cos x ⋅ cos 2 x ⋅ cos 3 x ​ = 1 − cos x + cos x − cos x ⋅ cos 2 x + cos x ⋅ cos 2 x − cos x ⋅ cos 2 x ⋅ cos 3 x ​ 即 1 − cos x ⋅ cos 2 x ⋅ cos 3 x ​ = 1 − cos x + cos x ( 1 − cos 2 x ) + cos x ⋅ cos 2 x ( 1 − cos 3 x ) ​ 因此， ​ x → 0 lim ​ a x n 1 − cos x ⋅ cos 2 x ⋅ cos 3 x ​ = x → 0 lim ​ a x n 1 − cos x + cos x ( 1 − cos 2 x ) + cos x ⋅ cos 2 x ( 1 − cos 3 x ) ​ = x → 0 lim ​ ( a x n 1 − cos x ​ + a x n cos x ( 1 − cos 2 x ) ​ + a x n cos x ⋅ cos 2 x ( 1 − cos 3 x ) ​ ) ​ 利用等价无穷小替换： 1 − cos x ∼ 2 1 ​ x 2 , 1 − cos 2 x ∼ 2 1 ​ ( 2 x ) 2 , 1 − cos 3 x ∼ 2 1 ​ ( 3 x ) 2 可得： x → 0 lim ​ ( a x n 2 1 ​ x 2 + o ( x 2 ) ​ + a x n 2 1 ​ ( 2 x ) 2 + o ( x 2 ) ​ + a x n 2 1 ​ ( 3 x ) 2 + o ( x 2 ) ​ ) 为使极限存在且为 1，必有 n = 2 ，且 2 a 1 ​ + 2 a 4 ​ + 2 a 9 ​ = 1 ⇒ 2 a 14 ​ = 1 ⇒ a = 7",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设 \\(D\\) 是由曲线 \\(y=x^{1/3},\\) 直线 \\(x=a\\ (a>0)\\) 及 \\(x\\) 轴所围成的平面图形，\\(V_x,V_y\\) 分别是 \\(D\\) 绕 \\(x\\) 轴、\\(y\\) 轴旋转一周所得旋转体的体积。若 \\(V_y=10V_x,\\) 求 \\(a\\) 的值。",
    referenceAnswer: "【答案】 a = 7 7 ​ 【解析】 由题意可得： V x ​ = π ∫ 0 a ​ ( x 3 1 ​ ) 2 d x = 5 3 ​ π a 3 5 ​ V y ​ = 2 π ∫ 0 a ​ x ⋅ x 3 1 ​ d x = 7 6 π ​ a 3 7 ​ ​ 因为 V y ​ = 10 V x ​ ，所以： 7 6 π ​ a 3 7 ​ = 10 × 5 3 ​ π a 3 5 ​ 解得： a = 7 7 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设平面区域 \\(D\\) 由直线 \\(x=3y,\\; y=3x,\\; x+y=8\\) 围成，计算 \\(\\iint_D x^2\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 3 416 ​ 【解析】 ∬ D ​ x 2 d x d y ​ = ∬ D 1 ​ ​ x 2 d x d y + ∬ D 2 ​ ​ x 2 d x d y = ∫ 0 2 ​ x 2 d x ∫ 3 x ​ 3 x ​ d y + ∫ 2 6 ​ x 2 d x ∫ 3 x ​ 8 − x ​ d y = 3 416 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设奇函数 \\(f(x)\\) 在 \\([-1,1]\\) 上具有二阶导数，且 \\(f(1)=1\\)。证明：\n\n（Ⅰ）存在 \\(\\xi\\in(0,1)\\)，使得 \\(f'(\\xi)=1\\)；\n\n（Ⅱ）存在 \\(\\eta\\in(-1,1)\\)，使得\\(f''(\\eta)+f'(\\eta)=1.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 （Ⅰ）令 \\(F(x)=f(x)-x\\)。因为 \\(f\\) 为奇函数，所以 \\(f(0)=0\\)。又 \\(f(1)=1\\)，故 \\(F(0)=F(1)=0\\)。由罗尔定理，存在 \\(\\xi\\in(0,1)\\)，使 \\(F'(\\xi)=0\\)，即 \\(f'(\\xi)=1\\)。 （Ⅱ）令 \\(G(x)=e^x\\bigl(f'(x)-1\\bigr)\\)。由（Ⅰ）知 \\(G(\\xi)=0\\)。又因为 \\(f\\) 为奇函数，所以 \\(f'\\) 为偶函数，从而 \\[\nG(-\\xi)=e^{-\\xi}\\bigl(f'(-\\xi)-1\\bigr)\n=e^{-\\xi}\\bigl(f'(\\xi)-1\\bigr)=0.\n\\] 对 \\(G\\) 在 \\([-\\xi,\\xi]\\) 上应用罗尔定理，存在 \\(\\eta\\in(-\\xi,\\xi)\\subset(-1,1)\\)，使 \\(G'(\\eta)=0\\)。于是 \\[\n0=G'(\\eta)=e^\\eta\\bigl[f''(\\eta)+f'(\\eta)-1\\bigr],\n\\] 故 \\(f''(\\eta)+f'(\\eta)=1\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求曲线 \\(x^3-xy+y^3=1\\;(x\\ge0,\\ y\\ge0)\\) 上的点到坐标原点的最长距离与最短距离。",
    referenceAnswer: "【答案】 最长距离为 2 ​ ，最短距离为 1。 【解析】 本题本质上是在条件 x 3 − x y + y 3 = 1 （ x ≥ 0 , y ≥ 0 ）下求函数 f ( x , y ) = x 2 + y 2 ​ 的最值。 因此，只需找出 x 2 + y 2 ​ 在条件 x 3 − x y + y 3 = 1 下的条件极值点，再与曲线端点 ( 0 , 1 ) 和 ( 1 , 0 ) 处的函数值比较，即可确定最大值与最小值。 由于函数 x 2 + y 2 ​ 与 x 2 + y 2 的单调性一致，可转化为求 x 2 + y 2 的条件极值点。 构造拉格朗日函数： L ( x , y , λ ) = x 2 + y 2 + λ ( x 3 − x y + y 3 − 1 ) 求其驻点，得到方程组： ⎩ ⎨ ⎧ ​ ∂ x ∂ L ​ = 2 x + 3 λ x 2 − λ y = 0 ∂ y ∂ L ​ = 2 y + 3 λ y 2 − λ x = 0 ∂ λ ∂ L ​ = x 3 − x y + y 3 − 1 = 0 ​ 将前两个方程变形为： { 2 x = λ y − 3 λ x 2 2 y = λ x − 3 λ y 2 ​ 进一步得到： { 2 x y = λ y 2 − 3 λ x 2 y 2 x y = λ x 2 − 3 λ x y 2 ​ 因此： λ x 2 − 3 λ x y 2 = λ y 2 − 3 λ x 2 y 整理得： λ ( x − y ) ( x + y + 3 x y ) = 0 所以有 λ = 0 ，或 x − y = 0 ，或 x + y + 3 x y = 0 。 当 λ = 0 时，有 x = y = 0 ，但无法满足方程 x 3 − x y + y 3 − 1 = 0 。 当 x + y + 3 x y = 0 时，由于 x ≥ 0 , y ≥ 0 ，只能有 x = y = 0 ，同样不满足第三个方程。 因此必有 x − y = 0 ，代入 x 3 − x y + y 3 − 1 = 0 得： 2 x 3 − x 2 − 1 = 0 解得 x = 1 , y = 1 ，即 ( 1 , 1 ) 是唯一的条件极值点。 计算得： f ( 1 , 1 ) = 2 ​ , f ( 0 , 1 ) = f ( 1 , 0 ) = 1 因此，曲线 x 3 − x y + y 3 = 1 （ x ≥ 0 , y ≥ 0 ）上的点到坐标原点的最长距离为 2 ​ ，最短距离为 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设函数 \\(f(x)=\\ln x+\\frac1x.\\)\n\n（Ⅰ）求 \\(f(x)\\) 的最小值；\n\n（Ⅱ）设数列 \\(\\{x_n\\}\\) 满足\\(\\ln x_n+\\frac1{x_{n+1}}<1,\\) 证明 \\(\\lim_{n\\to\\infty}x_n\\) 存在，并求此极限。",
    referenceAnswer: "【答案】 （1）\\(f(x)\\) 的最小值为 1。 （2）\\(\\displaystyle\\lim_{n\\to\\infty}x_n=1\\)。 【解析】 （1）函数定义域为 \\(x>0\\)，且 \\[\nf'(x)=\\frac1x-\\frac1{x^2}=\\frac{x-1}{x^2}.\n\\] 所以 \\(f\\) 在 \\((0,1]\\) 上单调递减，在 \\([1,+\\infty)\\) 上单调递增，故最小值为 \\(f(1)=1\\)。即对任意 \\(x>0\\)，都有 \\[\n\\ln x+\\frac1x\\ge1.\n\\] （2）由题设，各项 \\(x_n>0\\)。利用（1）中的不等式， \\[\n\\ln x_n+\\frac1{x_n}\\ge1\n>\\ln x_n+\\frac1{x_{n+1}}.\n\\] 因此 \\(\\frac1{x_n}>\\frac1{x_{n+1}}\\)，从而 \\(x_{n+1}>x_n\\)，所以 \\(\\{x_n\\}\\) 单调递增。 另一方面，由 \\(\\frac1{x_{n+1}}>0\\) 及题设可得 \\(\\ln x_n<1\\)，即 \\(x_n<e\\)。因此 \\(\\{x_n\\}\\) 单调递增且有上界，故极限存在。 设 \\(\\displaystyle\\lim_{n\\to\\infty}x_n=a\\)。由于 \\(x_n>0\\) 且单调递增，故 \\(a>0\\)，并且 \\(x_{n+1}\\to a\\)。对题设不等式取极限，得 \\[\n\\ln a+\\frac1a\\le1.\n\\] 而由（1）知 \\(\\ln a+\\frac1a\\ge1\\)，故只能取等号；最小值只在 \\(a=1\\) 处取得。因此 \\[\n\\boxed{\\lim_{n\\to\\infty}x_n=1}.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设曲线 \\(L\\) 的方程为 \\(y=\\frac14x^2-\\frac12\\ln x\\;(1\\le x\\le e).\\)\n\n（Ⅰ）求 \\(L\\) 的弧长；\n\n（Ⅱ）设 \\(D\\) 是由曲线 \\(L\\)、直线 \\(x=1\\)、\\(x=e\\) 及 \\(x\\) 轴所围成的平面图形，求 \\(D\\) 的形心的横坐标。",
    referenceAnswer: "【答案】 （1）弧长为 4 e 2 + 1 ​ 。 （2）形心的横坐标为 4 ( e 3 − 7 ) 3 ( e 4 − 2 e 2 − 3 ) ​ 。 【解析】 （1）由弧长的计算公式得 L 的弧长为 ​ ∫ 1 e ​ 1 + [ ( 4 1 ​ x 2 − 2 1 ​ ln x ) ′ ] 2 ​ d x = ∫ 1 e ​ 1 + ( 2 x ​ − 2 x 1 ​ ) 2 ​ d x = ∫ 1 e ​ 1 + 4 x 2 ​ + 4 x 2 1 ​ − 2 1 ​ ​ d x = ∫ 1 e ​ ( 2 x ​ + 2 x 1 ​ ) 2 ​ d x = 4 e 2 + 1 ​ ​ （2）由形心的计算公式可得，D 的形心的横坐标为 ∫ 1 e ​ ( 4 1 ​ x 2 − 2 1 ​ ln x ) d x ∫ 1 e ​ x ( 4 1 ​ x 2 − 2 1 ​ ln x ) d x ​ = 4 ( e 3 − 7 ) 3 ( e 4 − 2 e 2 − 3 ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\\(A=\\begin{pmatrix}1&a\\\\1&0\\end{pmatrix},\\; B=\\begin{pmatrix}0&1\\\\1&b\\end{pmatrix}.\\)当 \\(a,b\\) 为何值时，存在矩阵 \\(C\\) 使得 \\(AC-CA=B?\\) 并求所有矩阵 \\(C\\)。",
    referenceAnswer: "【答案】 当 a = − 1 ， b = 0 时，存在矩阵 C ，且 C = ( k 1 ​ + k 2 ​ + 1 k 1 ​ ​ − k 1 ​ k 2 ​ ​ ) ，其中 k 1 ​ , k 2 ​ 为任意常数。 【解析】 由题意可知矩阵 C 为 2 阶矩阵，故可设 C = ( x 1 ​ x 3 ​ ​ x 2 ​ x 4 ​ ​ ) , 则由 A C − C A = B 可得线性方程组： ⎩ ⎨ ⎧ ​ − x 2 ​ + a x 3 ​ = 0 , − a x 1 ​ + x 2 ​ + a x 4 ​ = 1 , x 1 ​ − x 3 ​ − x 4 ​ = 1 , x 2 ​ − a x 3 ​ = b . ​ ( 1 ) 对增广矩阵进行初等行变换： ​ 0 − a 1 0 ​ − 1 1 0 1 ​ a 0 − 1 − a ​ 0 a − 1 0 ​ 0 1 1 b ​ ​ → ​ 1 − a 0 0 ​ 0 1 − 1 1 ​ − 1 0 a − a ​ − 1 a 0 0 ​ 1 1 0 b ​ ​ → ​ 1 0 0 0 ​ 0 1 − 1 1 ​ − 1 − a a − a ​ − 1 0 0 0 ​ 1 1 + a 0 b ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ − 1 − a 0 0 ​ − 1 0 0 0 ​ 1 1 + a 1 + a b − 1 − a ​ ​ 由于方程组 (1) 有解，故 1 + a = 0 , b − 1 − a = 0 , 即 a = − 1 ， b = 0 。此时增广矩阵化为 ​ 1 0 0 0 ​ 0 1 0 0 ​ − 1 1 0 0 ​ − 1 0 0 0 ​ 1 0 0 0 ​ ​ . 解得 ⎩ ⎨ ⎧ ​ x 1 ​ = k 1 ​ + k 2 ​ + 1 , x 2 ​ = − k 1 ​ , x 3 ​ = k 1 ​ , x 4 ​ = k 2 ​ , ​ 其中 k 1 ​ 、 k 2 ​ 为任意常数。 因此 C = ( k 1 ​ + k 2 ​ + 1 k 1 ​ ​ − k 1 ​ k 2 ​ ​ ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二次型 \\(f(x_1,x_2,x_3)=2(a_1x_1+a_2x_2+a_3x_3)^2+(b_1x_1+b_2x_2+b_3x_3)^2,\\) 记\\(\\alpha=\\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix},\\; \\beta=\\begin{pmatrix}b_1\\\\b_2\\\\b_3\\end{pmatrix}.\\)\n\n（Ⅰ）证明二次型 \\(f\\) 对应的矩阵为\\(2\\alpha\\alpha^T+\\beta\\beta^T;\\)\n\n（Ⅱ）若 \\(\\alpha,\\beta\\) 正交且均为单位向量，证明二次型 \\(f\\) 在正交变换下的标准形为\\(2y_1^2+y_2^2.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 （Ⅰ）记 \\(X=(x_1,x_2,x_3)^T\\)。则 \\[\n\\alpha^T X=a_1x_1+a_2x_2+a_3x_3,\\qquad\n\\beta^T X=b_1x_1+b_2x_2+b_3x_3.\n\\] 因此 \\[\n\\begin{aligned}\nf(X)\n&=2(\\alpha^T X)^2+(\\beta^T X)^2\\\\\n&=X^T\\bigl(2\\alpha\\alpha^T+\\beta\\beta^T\\bigr)X.\n\\end{aligned}\n\\] 又 \\(2\\alpha\\alpha^T+\\beta\\beta^T\\) 是对称矩阵，所以它就是二次型 \\(f\\) 对应的矩阵。 （Ⅱ）令 \\(A=2\\alpha\\alpha^T+\\beta\\beta^T\\)。由于 \\(\\alpha,\\beta\\) 正交且均为单位向量， \\[\nA\\alpha=2\\alpha,\\qquad A\\beta=\\beta.\n\\] 再取单位向量 \\(\\gamma\\)，使 \\(\\gamma\\perp\\alpha\\) 且 \\(\\gamma\\perp\\beta\\)。则 \\(A\\gamma=0\\)。于是 \\(\\alpha,\\beta,\\gamma\\) 是 \\(A\\) 的一组标准正交特征向量，对应特征值分别为 \\(2,1,0\\)。 令正交矩阵 \\(Q=(\\alpha,\\beta,\\gamma)\\)，作正交变换 \\(X=QY\\)，则 \\[\nQ^TAQ=\\operatorname{diag}(2,1,0),\n\\] 故 \\[\nf=2y_1^2+y_2^2.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2013_math2 = {
  id: P, year: Y,
  title: '2013 年全国硕士研究生招生考试 数学（二）',
  short: '2013 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2013_math2.length,
  qids: questions2013_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
