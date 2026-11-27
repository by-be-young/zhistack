const P = 'paper-2015-math2'
const Y = 2015
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2015-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2015 考研数学（二）真题',
  ...extra
})

export const questions2015_math2 = [
  base(1, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列反常积分中收敛的是（ ）。",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_2^{+\\infty}\\frac{1}{\\sqrt{x}}\\,dx\\)" }, { key: "B", text: "\\(\\displaystyle\\int_2^{+\\infty}\\frac{\\ln x}{x}\\,dx\\)" }, { key: "C", text: "\\(\\displaystyle\\int_2^{+\\infty}\\frac{1}{x\\ln x}\\,dx\\)" }, { key: "D", text: "\\(\\displaystyle\\int_2^{+\\infty}\\frac{x}{e^x}\\,dx\\)" }],
    answer: ["D"],
    explain: "正确答案： D 已知： ∫ e x x ​ d x = − ( x + 1 ) e − x 计算： ∫ 2 + ∞ ​ e x x ​ d x = [ − ( x + 1 ) e − x ] 2 + ∞ ​ 代入上下限： = x → + ∞ lim ​ [ − ( x + 1 ) e − x ] − [ − ( 2 + 1 ) e − 2 ] 化简： = − x → + ∞ lim ​ ( x + 1 ) e − x + 3 e − 2 由于： x → + ∞ lim ​ ( x + 1 ) e − x = 0 因此： ∫ 2 + ∞ ​ e x x ​ d x = 3 e − 2"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)=\\lim_{t\\to0}\\left(1+\\frac{\\sin t}{x}\\right)^{x^2/t}\\) 在 \\((-\\infty,+\\infty)\\) 内（ ）。",
    options: [{ key: "A", text: "连续" }, { key: "B", text: "有可去间断点" }, { key: "C", text: "有跳跃间断点" }, { key: "D", text: "有无穷间断点" }],
    answer: ["B"],
    explain: "正确答案： B f ( x ) = lim t → 0 ​ ( 1 + x s i n t ​ ) t x 2 ​ = e l i m t → 0 ​ x t s i n t ⋅ x 2 ​ = e x ，其中 x  = 0 。 因此， f ( x ) 在 x = 0 处有一个可去间断点。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\\(f(x)=\\begin{cases} x^\\alpha\\cos\\dfrac1{x^\\beta},&x>0,\\\\ 0,&x\\le0, \\end{cases}\\;(\\alpha>0,\\beta>0).\\)若 \\(f'(x)\\) 在 \\(x=0\\) 处连续，则（ ）。",
    options: [{ key: "A", text: "\\(\\alpha-\\beta>1\\)" }, { key: "B", text: "\\(0<\\alpha-\\beta\\le1\\)" }, { key: "C", text: "\\(\\alpha-\\beta>2\\)" }, { key: "D", text: "\\(0<\\alpha-\\beta\\le2\\)" }],
    answer: ["A"],
    explain: "正确答案： A 当 x < 0 时， f ′ ( x ) = 0 ，且 f − ′ ​ ( 0 ) = 0 。 f + ′ ​ ( 0 ) = x → 0 + lim ​ x x α cos x β 1 ​ − 0 ​ = x → 0 + lim ​ x α − 1 cos x β 1 ​ 当 x > 0 时， f ′ ( x ) ​ = α x α − 1 cos x β 1 ​ + ( − 1 ) x α sin x β 1 ​ ( − β ) x β + 1 1 ​ = α x α − 1 cos x β 1 ​ + β x α − β − 1 sin x β 1 ​ ​ 若 f ′ ( x ) 在 x = 0 处连续，则： f − ′ ​ ( 0 ) = f + ′ ​ ( 0 ) = x → 0 + lim ​ x α − 1 cos x β 1 ​ = 0 由此可得 α − 1 > 0 。 又因为： f ′ ( 0 ) = x → 0 + lim ​ f ′ ( x ) = x → 0 + lim ​ ( α x α − 1 cos x β 1 ​ + β x α − β − 1 sin x β 1 ​ ) = 0 可得 α − β − 1 > 0 。 因此，答案选择 A。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在 \\((-\\infty,+\\infty)\\) 内连续，其二阶导函数 \\(f''(x)\\) 的图形如下图所示，则曲线 \\(y=f(x)\\) 的拐点个数为（ ）。",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["C"],
    explain: "正确答案： C 图中左侧零点处二阶导数不变号，因此不是拐点；右侧零点处二阶导数变号，对应 1 个拐点。另外在 x=0 处二阶导数不存在，但 f(x) 连续，且 f''(x) 在 x=0 两侧异号，曲线凹凸性发生改变，因此 x=0 对应的点也是拐点。故共有 2 个拐点，选 C。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(u,v)\\) 满足 \\(f\\left(x+y,\\frac yx\\right)=x^2-y^2,\\) 则\\(\\left.\\frac{\\partial f}{\\partial u}\\right|_{u=1,v=1},\\; \\left.\\frac{\\partial f}{\\partial v}\\right|_{u=1,v=1}\\)依次是（ ）。",
    options: [{ key: "A", text: "\\(\\dfrac12,0\\)" }, { key: "B", text: "\\(0,\\dfrac12\\)" }, { key: "C", text: "\\(-\\dfrac12,0\\)" }, { key: "D", text: "\\(0,-\\dfrac12\\)" }],
    answer: ["D"],
    explain: "正确答案： D 此题考查二元复合函数偏导的求解。 令 u = x + y ， v = x y ​ ，则 x = 1 + v u ​ , y = 1 + v uv ​ . 于是 f ( x + y , x y ​ ) = x 2 − y 2 可化为 f ( u , v ) = ( 1 + v u ​ ) 2 − ( 1 + v uv ​ ) 2 = 1 + v u 2 ( 1 − v ) ​ . 因此， ∂ u ∂ f ​ = 1 + v 2 u ( 1 − v ) ​ , ∂ v ∂ f ​ = − ( 1 + v ) 2 2 u 2 ​ . 代入 u = 1 ， v = 1 得 ∂ u ∂ f ​ ​ u = 1 v = 1 ​ ​ = 0 , ∂ v ∂ f ​ ​ u = 1 v = 1 ​ ​ = − 2 1 ​ . 故选 (D)。"
  }),
  base(6, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(D\\) 是第一象限中由曲线 \\(2xy=1,\\ 4xy=1\\) 与直线 \\(y=x,\\ y=\\sqrt3x\\) 围成的平面区域，函数 \\(f(x,y)\\) 在 \\(D\\) 上连续，则 \\(\\displaystyle\\iint_D f(x,y)\\,dxdy=\\)（ ）。",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_{\\pi/4}^{\\pi/3}d\\theta\\int_{1/(2\\sin2\\theta)}^{1/(\\sin2\\theta)}f(r\\cos\\theta,r\\sin\\theta)r\\,dr\\)" }, { key: "B", text: "\\(\\displaystyle\\int_{\\pi/4}^{\\pi/3}d\\theta\\int_{1/\\sqrt{2\\sin2\\theta}}^{1/\\sqrt{\\sin2\\theta}}f(r\\cos\\theta,r\\sin\\theta)r\\,dr\\)" }, { key: "C", text: "\\(\\displaystyle\\int_{\\pi/4}^{\\pi/3}d\\theta\\int_{1/(2\\sin2\\theta)}^{1/(\\sin2\\theta)}f(r\\cos\\theta,r\\sin\\theta)\\,dr\\)" }, { key: "D", text: "\\(\\displaystyle\\int_{\\pi/4}^{\\pi/3}d\\theta\\int_{1/\\sqrt{2\\sin2\\theta}}^{1/\\sqrt{\\sin2\\theta}}f(r\\cos\\theta,r\\sin\\theta)\\,dr\\)" }],
    answer: ["B"],
    explain: "正确答案： B 根据图示，在极坐标系下，该二重积分的积分区域为 D = { ( r , θ ) ​ 4 π ​ ≤ θ ≤ 3 π ​ , 2 sin 2 θ ​ 1 ​ ≤ r ≤ sin 2 θ ​ 1 ​ } 因此， ∬ D ​ f ( x , y ) d x d y = ∫ 4 π ​ 3 π ​ ​ d θ ∫ 2 s i n 2 θ ​ 1 ​ s i n 2 θ ​ 1 ​ ​ f ( r cos θ , r sin θ ) r d r 故选择 B。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix}1&1&1\\\\1&2&a\\\\1&4&a^2\\end{pmatrix},\\; b=\\begin{pmatrix}1\\\\d\\\\d^2\\end{pmatrix},\\)若集合 \\(\\Omega=\\{1,2\\}\\)，则线性方程组 \\(Ax=b\\) 有无穷多个解的充分必要条件为（ ）。",
    options: [{ key: "A", text: "\\(a\\notin\\Omega,\\ d\\notin\\Omega\\)" }, { key: "B", text: "\\(a\\notin\\Omega,\\ d\\in\\Omega\\)" }, { key: "C", text: "\\(a\\in\\Omega,\\ d\\notin\\Omega\\)" }, { key: "D", text: "\\(a\\in\\Omega,\\ d\\in\\Omega\\)" }],
    answer: ["D"],
    explain: "正确答案： D ( A , b ) = ​ 1 1 1 ​ 1 2 4 ​ 1 a a 2 ​ 1 d d 2 ​ ​ → ​ 1 0 0 ​ 1 1 0 ​ 1 a − 1 ( a − 1 ) ( a − 2 ) ​ 1 d − 1 ( d − 1 ) ( d − 2 ) ​ ​ , 由 r ( A ) = r ( A , b ) < 3 ，故 a = 1 或 a = 2 ，同时 d = 1 或 d = 2 。故选 (D)。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型 \\(f(x_1,x_2,x_3)\\) 在正交变换 \\(x=Py\\) 下的标准形为 \\(2y_1^2+y_2^2-y_3^2,\\) 其中 \\(P=(e_1,e_2,e_3)\\)。若 \\(Q=(e_1,-e_3,e_2)\\)，则 \\(f(x_1,x_2,x_3)\\) 在正交变换 \\(x=Qy\\) 下的标准形为（ ）。",
    options: [{ key: "A", text: "\\(2y_1^2-y_2^2+y_3^2\\)" }, { key: "B", text: "\\(2y_1^2+y_2^2-y_3^2\\)" }, { key: "C", text: "\\(2y_1^2-y_2^2-y_3^2\\)" }, { key: "D", text: "\\(2y_1^2+y_2^2+y_3^2\\)" }],
    answer: ["A"],
    explain: "正确答案： A 由 x = P y ，故 f = x T A x = y T ( P T A P ) y = 2 y 1 2 ​ + y 2 2 ​ − y 3 2 ​ ，且 P T A P = ​ 2 0 0 ​ 0 1 0 ​ 0 0 − 1 ​ ​ Q = P ​ 1 0 0 ​ 0 0 − 1 ​ 0 1 0 ​ ​ = PC Q T A Q = C T ( P T A P ) C = ​ 2 0 0 ​ 0 − 1 0 ​ 0 0 1 ​ ​ 所以 f = x T A x = y T ( Q T A Q ) y = 2 y 1 2 ​ − y 2 2 ​ + y 3 2 ​ 。选 (A)"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\\(\\begin{cases} x=\\arctan t,\\\\ y=3t+t^3, \\end{cases}\\)则 \\(\\left.\\frac{d^2y}{dx^2}\\right|_{t=1}=\\underline{\\qquad}.\\)",
    answerText: "】 48 【",
    referenceAnswer: "【答案】 48 【解析】 d x d y ​ = d t d x ​ d t d y ​ ​ = 1 + t 2 1 ​ 3 + 3 t 2 ​ = 3 ( 1 + t 2 ) 2 d x 2 d 2 y ​ = d x d ​ [ 3 ( 1 + t 2 ) 2 ] = d t d x ​ d t d ​ [ 3 ( 1 + t 2 ) 2 ] ​ = 1 + t 2 1 ​ 12 t ( 1 + t 2 ) ​ = 12 t ( 1 + t 2 ) 2 d x 2 d 2 y ​ ​ t = 1 ​ = 48",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数 \\(f(x)=x^2 2^x\\) 在 \\(x=0\\) 处的 \\(n\\) 阶导数 \\(f^{(n)}(0)=\\underline{\\qquad}.\\)",
    answerText: "】 n ( n − 1 ) ( ln 2 ) n − 2 【",
    referenceAnswer: "【答案】 n ( n − 1 ) ( ln 2 ) n − 2 【解析】 根据莱布尼茨公式可得： f ( n ) ( 0 ) = C n 2 ​ ⋅ 2 ⋅ ( 2 x ) ( n − 2 ) ​ x = 0 ​ = 2 n ( n − 1 ) ​ ⋅ 2 ⋅ ( ln 2 ) n − 2 = n ( n − 1 ) ( ln 2 ) n − 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 连续，\\(\\varphi(x)=\\int_0^{x^2}x f(t)\\,dt.\\) 若 \\(\\varphi(1)=1,\\ \\varphi'(1)=5\\)，则 \\(f(1)=\\underline{\\qquad}.\\)",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 已知 φ ( x ) = x ∫ 0 x 2 ​ f ( t ) d t ，求导得 φ ′ ( x ) = ∫ 0 x 2 ​ f ( t ) d t + 2 x 2 f ( x 2 ) 因此有 φ ( 1 ) = ∫ 0 1 ​ f ( t ) d t = 1 φ ′ ( 1 ) = 1 + 2 f ( 1 ) = 5 解得 f ( 1 ) = 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(y=y(x)\\) 是微分方程 \\(y''+y'-2y=0\\) 的解，且在 \\(x=0\\) 处 \\(y(x)\\) 取得极值 3，则 \\(y(x)=\\underline{\\qquad}.\\)",
    answerText: "】 y = 2 e x + e − 2 x 【",
    referenceAnswer: "【答案】 y = 2 e x + e − 2 x 【解析】 由题意知： y ( 0 ) = 3 ， y ′ ( 0 ) = 0 。 由特征方程： λ 2 + λ − 2 = 0 ，解得 λ 1 ​ = 1 ， λ 2 ​ = − 2 。 因此微分方程的通解为： y = C 1 ​ e x + C 2 ​ e − 2 x 。 代入 y ( 0 ) = 3 ， y ′ ( 0 ) = 0 ，解得： C 1 ​ = 2 ， C 2 ​ = 1 。 最终得： y = 2 e x + e − 2 x 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "若函数 \\(z=z(x,y)\\) 由方程 \\(e^{x+2y+3z}+xyz=1\\) 确定，则 \\(\\left.dz\\right|_{(0,0)}=\\underline{\\qquad}.\\)",
    answerText: "】 d z ∣ ( 0 , 0 ) ​ = − 3 1 ​ d x − 3 2 ​ d y 【",
    referenceAnswer: "【答案】 d z ∣ ( 0 , 0 ) ​ = − 3 1 ​ d x − 3 2 ​ d y 【解析】 当 x = 0 ， y = 0 时， z = 0 。两边对 x 求偏导可得： ( 3 e x + 2 y + 3 z + x y ) ∂ x ∂ z ​ = − yz − e x + 2 y + 3 z . 对 y 求偏导可得： ( 3 e x + 2 y + 3 z + x y ) ∂ y ∂ z ​ = − x z − 2 e x + 2 y + 3 z . 将 ( 0 , 0 , 0 ) 代入得： ∂ x ∂ z ​ ​ ( 0 , 0 ) ​ = − 3 1 ​ , ∂ y ∂ z ​ ​ ( 0 , 0 ) ​ = − 3 2 ​ . 因此可得： d z ∣ ( 0 , 0 ) ​ = − 3 1 ​ d x − 3 2 ​ d y = − 3 1 ​ ( d x + 2 d y ) .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 3 阶矩阵 \\(A\\) 的特征值为 \\(2,-2,1\\)，\\(B=A^2-A+E\\)，其中 \\(E\\) 为 3 阶单位矩阵，则 \\(|B|=\\underline{\\qquad}.\\)",
    answerText: "】 21 【",
    referenceAnswer: "【答案】 21 【解析】 矩阵 A 的所有特征值为 2 ， − 2 ， 1 。 矩阵 B 的所有特征值为： 2 2 − 2 + 1 = 3 , ( − 2 ) 2 − ( − 2 ) + 1 = 7 , 1 2 − 1 + 1 = 1. 因此， ∣ B ∣ = 3 × 7 × 1 = 21.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数 \\(f(x)=x+a\\ln(1+x)+bx\\sin x,\\; g(x)=kx^3.\\) 若 \\(f(x)\\) 与 \\(g(x)\\) 在 \\(x\\to0\\) 时是等价无穷小，求 \\(a,b,k\\) 的值。",
    referenceAnswer: "【答案】 a = − 1 , k = − 3 1 ​ , b = − 2 1 ​ 【解析】 方法一 ： 因为 ln ( 1 + x ) = x − 2 x 2 ​ + 3 x 3 ​ + o ( x 3 ) ， sin x = x − 3 ! x 3 ​ + o ( x 3 ) ， 那么， 1 ​ = x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ k x 3 x + a ln ( 1 + x ) + b x sin x ​ = x → 0 lim ​ k x 3 ( 1 + a ) x + ( b − 2 a ​ ) x 2 + 3 a ​ x 3 + o ( x 3 ) ​ , ​ 可得： { 1 + a = 0 b − 2 a ​ = 0 ​ 解得 ⎩ ⎨ ⎧ ​ a = − 1 b = − 2 1 ​ k = − 3 1 ​ ​ 方法二 ： 由题意得 1 = x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ k x 3 x + a ln ( 1 + x ) + b x sin x ​ = x → 0 lim ​ 3 k x 2 1 + 1 + x a ​ + b sin x + b x cos x ​ 由分母 lim x → 0 ​ 3 k x 2 = 0 ，得分子 lim x → 0 ​ ( 1 + 1 + x a ​ + b sin x + b x cos x ) = lim x → 0 ​ ( 1 + a ) = 0 ，求得 a = − 1 。 于是 1 = x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ 3 k x 2 1 − 1 + x 1 ​ + b sin x + b x cos x ​ ​ = x → 0 lim ​ 3 k x 2 ( 1 + x ) x + b ( 1 + x ) sin x + b x ( 1 + x ) cos x ​ = x → 0 lim ​ 3 k x 2 x + b ( 1 + x ) sin x + b x ( 1 + x ) cos x ​ = x → 0 lim ​ 6 k x 1 + b sin x + b ( 1 + x ) cos x + b ( 1 + x ) cos x + b x cos x − b x ( 1 + x ) sin x ​ ​ 由分母 lim x → 0 ​ 6 k x = 0 ，得分子 ​ x → 0 lim ​ [ 1 + b sin x + 2 b ( 1 + x ) cos x + b x cos x − b x ( 1 + x ) sin x ] = x → 0 lim ​ ( 1 + 2 b cos x ) = 0 , ​ 求得 b = − 2 1 ​ 。 进一步，将 b 值代入原式： 1 ​ = x → 0 lim ​ g ( x ) f ( x ) ​ = x → 0 lim ​ 6 k x 1 − 2 1 ​ sin x − ( 1 + x ) cos x − 2 1 ​ x cos x + 2 1 ​ x ( 1 + x ) sin x ​ = x → 0 lim ​ 6 k − 2 1 ​ cos x − cos x + ( 1 + x ) sin x − 2 1 ​ cos x + 2 1 ​ x sin x + 2 1 ​ ( 1 + x ) sin x + 2 1 ​ x sin x + 2 1 ​ x ( 1 + x ) cos x ​ = 6 k − 2 1 ​ ​ , 解得 k = − 3 1 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设 \\(A>0\\)，\\(D\\) 是由曲线段 \\(y=A\\sin x\\quad\\left(0\\le x\\le\\frac\\pi2\\right)\\) 及直线 \\(y=0,\\ x=\\dfrac\\pi2\\) 所围成的平面区域。\\(V_1,V_2\\) 分别表示 \\(D\\) 绕 \\(x\\) 轴与绕 \\(y\\) 轴旋转所成旋转体的体积。若 \\(V_1=V_2\\)，求 \\(A\\) 的值。",
    referenceAnswer: "【答案】 π 8 ​ 【解析】 由旋转体的体积公式，得 V 1 ​ = ∫ 0 2 π ​ ​ π f 2 ( x ) d x = ∫ 0 2 π ​ ​ π ( A sin x ) 2 d x = π A 2 ∫ 0 2 π ​ ​ 2 1 − cos 2 x ​ d x = 4 π 2 A 2 ​ V 2 ​ = ∫ 0 2 π ​ ​ 2 π x f ( x ) d x = − 2 π A ∫ 0 2 π ​ ​ x d ( cos x ) = 2 π A 由题设 V 1 ​ = V 2 ​ ，求得 A = π 8 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数 \\(f(x,y)\\) 满足 \\(f''_{xy}(x,y)=2(y+1)e^x,\\) \\(f'_x(x,0)=(x+1)e^x,\\; f(0,y)=y^2+2y,\\) 求 \\(f(x,y)\\) 的极值。",
    referenceAnswer: "【答案】 极小值 f ( 0 , − 1 ) = − 1 【解析】 已知 f x y ′′ ​ ( x , y ) = 2 ( y + 1 ) e x 。两边对 y 积分，得 f x ′ ​ ( x , y ) = 2 ( 2 1 ​ y 2 + y ) e x + φ ( x ) = ( y 2 + 2 y ) e x + φ ( x ) , 由 f x ′ ​ ( x , 0 ) = φ ( x ) = ( x + 1 ) e x ，可得 φ ( x ) = e x ( x + 1 ) , 因此 f x ′ ​ ( x , y ) = ( y 2 + 2 y ) e x + e x ( 1 + x ) . 两边关于 x 积分，得 f ( x , y ) ​ = ( y 2 + 2 y ) e x + ∫ e x ( 1 + x ) d x = ( y 2 + 2 y ) e x + ∫ ( 1 + x ) d e x = ( y 2 + 2 y ) e x + ( 1 + x ) e x − ∫ e x d x = ( y 2 + 2 y ) e x + ( 1 + x ) e x − e x + C = ( y 2 + 2 y ) e x + x e x + C . ​ 由 f ( 0 , y ) = y 2 + 2 y + C = y 2 + 2 y ，得 C = 0 ，所以 f ( x , y ) = ( y 2 + 2 y ) e x + x e x . 令 { f x ′ ​ = ( y 2 + 2 y ) e x + e x + x e x = 0 , f y ′ ​ = ( 2 y + 2 ) e x = 0 , ​ 解得 { x = 0 , y = − 1. ​ 又 f xx ′′ ​ = ( y 2 + 2 y ) e x + 2 e x + x e x , f x y ′′ ​ = 2 ( y + 1 ) e x , f yy ′′ ​ = 2 e x . 当 x = 0 ， y = − 1 时， A = f xx ′′ ​ ( 0 , − 1 ) = 1 , B = f x y ′′ ​ ( 0 , − 1 ) = 0 , C = f yy ′′ ​ ( 0 , − 1 ) = 2. 由于 A C − B 2 > 0 ，且 A > 0 ，因此 f ( 0 , − 1 ) = − 1 为极小值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算二重积分 \\(\\iint_D x(x+y)\\,dxdy,\\) 其中 \\(D=\\{(x,y)\\mid x^2+y^2\\le2,\\ y\\ge x^2\\}.\\)",
    referenceAnswer: "【答案】 4 π ​ − 5 2 ​ 【解析】 ∬ D ​ x ( x + y ) d x d y ​ = ∬ D ​ x 2 d x d y = 2 ∫ 0 1 ​ d x ∫ x 2 2 − x 2 ​ ​ x 2 d y = 2 ∫ 0 1 ​ x 2 ( 2 − x 2 ​ − x 2 ) d x = 2 ∫ 0 1 ​ x 2 2 − x 2 ​ d x − 5 2 ​ ​ 令 x = 2 ​ sin t ，则 ​ = 2 ∫ 0 4 π ​ ​ 2 sin 2 t ⋅ 2 cos 2 t d t − 5 2 ​ = 2 ∫ 0 4 π ​ ​ sin 2 2 t d t − 5 2 ​ ​ 令 u = 2 t ，则 ​ = ∫ 0 2 π ​ ​ sin 2 u d u − 5 2 ​ = 4 π ​ − 5 2 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数 \\(f(x)=\\int_x^1\\sqrt{1+t^2}\\,dt+\\int_1^{x^2}\\sqrt{1+t}\\,dt,\\) 求 \\(f(x)\\) 零点的个数。",
    referenceAnswer: "【答案】 2个 【解析】 首先求导： f ′ ( x ) = − 1 + x 2 ​ + 2 x 1 + x 2 ​ = 1 + x 2 ​ ( 2 x − 1 ) 令 f ′ ( x ) = 0 ，得驻点 x = 2 1 ​ 。 在区间 ( − ∞ , 2 1 ​ ) 上， f ( x ) 单调递减；在区间 ( 2 1 ​ , + ∞ ) 上， f ( x ) 单调递增。因此， f ( 2 1 ​ ) 是唯一的极小值，也是最小值。 计算该最小值： f ( 2 1 ​ ) ​ = ∫ 2 1 ​ 1 ​ 1 + t 2 ​ d t + ∫ 1 4 1 ​ ​ 1 + t ​ d t = ∫ 2 1 ​ 1 ​ 1 + t 2 ​ d t − ∫ 4 1 ​ 1 ​ 1 + t ​ d t = ∫ 2 1 ​ 1 ​ 1 + t 2 ​ d t − ∫ 2 1 ​ 1 ​ 1 + t ​ d t − ∫ 4 1 ​ 2 1 ​ ​ 1 + t ​ d t ​ 在区间 ( 2 1 ​ , 1 ) 上，有 1 + t 2 ​ < 1 + t ​ ，因此 ∫ 2 1 ​ 1 ​ 1 + t 2 ​ d t − ∫ 2 1 ​ 1 ​ 1 + t ​ d t < 0 从而可得 f ( 2 1 ​ ) < 0 。 再考虑极限情况： x → − ∞ lim ​ f ( x ) = x → − ∞ lim ​ [ ∫ x 1 ​ 1 + t 2 ​ d t + ∫ 1 x 2 ​ 1 + t ​ d t ] = + ∞ x → + ∞ lim ​ f ( x ) ​ = x → + ∞ lim ​ [ ∫ x 1 ​ 1 + t 2 ​ d t + ∫ 1 x 2 ​ 1 + t ​ d t ] = x → + ∞ lim ​ [ ∫ 1 x 2 ​ 1 + t ​ d t − ∫ 1 x ​ 1 + t 2 ​ d t ] ​ 利用极限比较： x → + ∞ lim ​ ∫ 1 x ​ 1 + t 2 ​ d t ∫ 1 x 2 ​ 1 + t ​ d t ​ = x → + ∞ lim ​ 1 + x 2 ​ 2 x 1 + x 2 ​ ​ = + ∞ 因此， lim x → + ∞ ​ f ( x ) = + ∞ 。 综上，函数 f ( x ) 在 ( − ∞ , 2 1 ​ ) 和 ( 2 1 ​ , + ∞ ) 上各有一个零点，故零点个数为 2。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知高温物体置于低温介质中，任一时刻该物体温度对时间的变化率与该时刻物体和介质的温差成正比。现将一初始温度为 \\(120^\\circ\\mathrm C\\) 的物体在 \\(20^\\circ\\mathrm C\\) 的恒温介质中冷却，30 min 后该物体温度降至 \\(30^\\circ\\mathrm C\\)。若要使物体的温度继续降至 \\(21^\\circ\\mathrm C\\)，还需冷却多长时间？",
    referenceAnswer: "【答案】 30 min 【解析】 设 t 时刻物体温度为 x ( t ) ，比例常数为 k > 0 ，介质温度为 m ，则 d t d x ​ = − k ( x − m ) 从而 x ( t ) = C e − k t + m 由 x ( 0 ) = 120 ， m = 20 ，得 C = 100 ，即 x ( t ) = 100 e − k t + 20 又 x ( 2 1 ​ ) = 30 ，代入得 30 = 100 e − k /2 + 20 ⇒ e − k /2 = 10 1 ​ ⇒ k = 2 ln 10 因此 x ( t ) = 100 e − 2 t l n 10 + 20 = 100 ⋅ 1 0 − 2 t + 20 即 x ( t ) = 10 0 t − 1 1 ​ + 20 当 x = 21 时， 21 = 10 0 t − 1 1 ​ + 20 ⇒ 10 0 t − 1 = 1 ⇒ t = 1 所以还需要冷却 30 min。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知函数 \\(f(x)\\) 在区间 \\([a,+\\infty)\\) 上具有 2 阶导数，\\(f(a)=0,\\qquad f'(x)>0,\\qquad f''(x)>0.\\) 设 \\(b>a\\)，曲线 \\(y=f(x)\\) 在点 \\((b,f(b))\\) 处的切线与 \\(x\\) 轴的交点是 \\((x_0,0)\\)，证明 \\(a<x_0<b.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 根据题意，点 ( b , f ( b )) 处的切线方程为 y − f ( b ) = f ′ ( b ) ( x − b ) 令 y = 0 ，解得 x 0 ​ = b − f ′ ( b ) f ( b ) ​ 由于 f ′ ( x ) > 0 ，函数 f ( x ) 单调递增。又因为 f ( a ) = 0 ，所以 f ( b ) > 0 ，且 f ′ ( b ) > 0 ，因此 x 0 ​ = b − f ′ ( b ) f ( b ) ​ < b 又 x 0 ​ − a = b − a − f ′ ( b ) f ( b ) ​ 在区间 ( a , b ) 上应用拉格朗日中值定理，存在 ξ ∈ ( a , b ) ，使得 b − a f ( b ) − f ( a ) ​ = f ′ ( ξ ) 即 b − a f ( b ) ​ = f ′ ( ξ ) 因此 x 0 ​ − a = f ′ ( ξ ) f ( b ) ​ − f ′ ( b ) f ( b ) ​ = f ( b ) ⋅ f ′ ( b ) f ′ ( ξ ) f ′ ( b ) − f ′ ( ξ ) ​ 由于 f ′′ ( x ) > 0 ，函数 f ′ ( x ) 单调递增，因此 f ′ ( b ) > f ′ ( ξ ) ，从而 x 0 ​ − a > 0 即 x 0 ​ > a 。 综上可得 a < x 0 ​ < b 结论得证。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设矩阵 \\(A=\\begin{pmatrix}a&1&0\\\\1&a&-1\\\\0&1&a\\end{pmatrix},\\) 且 \\(A^3=O\\)。（I）求 \\(a\\) 的值；（II）若矩阵 \\(X\\) 满足\\(X-XA^2-AX+AXA^2=E,\\) 其中 \\(E\\) 为 3 阶单位矩阵，求 \\(X\\)。",
    referenceAnswer: "【答案】 (1) a = 0 (2) X = ​ 3 1 2 ​ 1 1 1 ​ − 2 − 1 − 1 ​ ​ 【解析】 (1) A 3 = O ⇒ ∣ A ∣ = 0 ⇒ ​ a 1 0 ​ 1 a 1 ​ 0 − 1 a ​ ​ = ​ 0 1 − a 2 − a ​ 1 a 1 ​ 0 − 1 a ​ ​ = a 3 = 0 ⇒ a = 0 (2) 由题意知 ​ X − X A 2 − A X + A X A 2 = E ⇒ X ( E − A 2 ) − A X ( E − A 2 ) = E ⇒ ( E − A ) X ( E − A 2 ) = E ⇒ X = ( E − A ) − 1 ( E − A 2 ) − 1 = [( E − A 2 ) ( E − A ) ] − 1 ⇒ X = ( E − A 2 − A ) − 1 ​ E − A 2 − A = ​ 0 − 1 − 1 ​ − 1 1 − 1 ​ 1 1 2 ​ ​ 通过初等行变换求逆可得 X = ​ 3 1 2 ​ 1 1 1 ​ − 2 − 1 − 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设矩阵 \\(A=\\begin{pmatrix}0&2&-3\\\\-1&3&-3\\\\1&-2&a\\end{pmatrix}\\) 相似于矩阵 \\(B=\\begin{pmatrix}1&-2&0\\\\0&b&0\\\\0&3&1\\end{pmatrix}.\\)（I）求 \\(a,b\\) 的值；（II）求可逆矩阵 \\(P\\)，使 \\(P^{-1}AP\\) 为对角矩阵。",
    referenceAnswer: "【答案】 (1) a = 4 ， b = 5 (2) 可逆矩阵 P = ​ 2 1 0 ​ − 3 0 1 ​ − 1 − 1 1 ​ ​ 【解析】 (I) 由 A ∼ B 得 tr ( A ) = tr ( B ) ，即 3 + a = 1 + b + 1 又由 ∣ A ∣ = ∣ B ∣ 得 ​ 0 − 1 1 ​ 2 3 − 2 ​ − 3 − 3 a ​ ​ = ​ 1 0 0 ​ − 2 b 3 ​ 0 0 1 ​ ​ 解得 { a − b = − 1 2 a − b = 3 ​ ⇒ { a = 4 b = 5 ​ (II) A = ​ 0 − 1 1 ​ 2 3 − 2 ​ − 3 − 3 4 ​ ​ = ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ + ​ − 1 − 1 1 ​ 2 2 − 2 ​ − 3 − 3 3 ​ ​ = E + C 其中 C = ​ − 1 − 1 1 ​ 2 2 − 2 ​ − 3 − 3 3 ​ ​ = ​ − 1 − 1 1 ​ ​ ( 1 ​ − 2 ​ 3 ​ ) C 的特征值为 λ 1 ​ = λ 2 ​ = 0 ， λ 3 ​ = 4 。 当 λ = 0 时， ( 0 E − C ) x = 0 的基础解系为 ξ 1 ​ = ( 2 , 1 , 0 ) T , ξ 2 ​ = ( − 3 , 0 , 1 ) T 当 λ = 4 时， ( 4 E − C ) x = 0 的基础解系为 ξ 3 ​ = ( − 1 , − 1 , 1 ) T 于是 A 的特征值为 λ A ​ = 1 + λ C ​ ，即 1 , 1 , 5 。 令 P = ( ξ 1 ​ , ξ 2 ​ , ξ 3 ​ ) = ​ 2 1 0 ​ − 3 0 1 ​ − 1 − 1 1 ​ ​ 则有 P − 1 A P = ​ 1 ​ 1 ​ 5 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2015_math2 = {
  id: P, year: Y,
  title: '2015 年全国硕士研究生招生考试 数学（二）',
  short: '2015 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2015_math2.length,
  qids: questions2015_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
