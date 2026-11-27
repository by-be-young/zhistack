const P = 'paper-2014-math2'
const Y = 2014
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2014-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2014 考研数学（二）真题',
  ...extra
})

export const questions2014_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当 \\(x\\to0^+\\) 时，若 \\(\\ln^\\alpha(1+2x),\\; (1-\\cos x)^{1/\\alpha}\\) 均是比 \\(x\\) 高阶的无穷小，则 \\(\\alpha\\) 的取值范围是（ ）。",
    options: [{ key: "A", text: "\\((2,+\\infty)\\)" }, { key: "B", text: "\\((1,2)\\)" }, { key: "C", text: "\\(\\left(\\dfrac12,1\\right)\\)" }, { key: "D", text: "\\(\\left(0,\\dfrac12\\right)\\)" }],
    answer: ["B"],
    explain: "正确答案： B 由定义可得： x → 0 lim ​ x ln α ( 1 + 2 x ) ​ = x → 0 lim ​ x ( 2 x ) α ​ = x → 0 lim ​ 2 α x α − 1 = 0 因此 α − 1 > 0 ，即 α > 1 。 当 x → 0 + 时，有： ( 1 − cos x ) α 1 ​ ∼ 2 α 1 ​ x α 2 ​ ​ 由题意可知 α 2 ​ − 1 > 0 ，即 α < 2 。 综上， α 的取值范围为 1 < α < 2 ，故选 B。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列曲线中有渐近线的是（ ）。",
    options: [{ key: "A", text: "\\(y=x+\\sin x\\)" }, { key: "B", text: "\\(y=x^2+\\sin x\\)" }, { key: "C", text: "\\(y=x+\\sin\\dfrac1x\\)" }, { key: "D", text: "\\(y=x^2+\\sin\\dfrac1x\\)" }],
    answer: ["C"],
    explain: "正确答案： C 首先，计算极限： x → ∞ lim ​ x x + sin x 1 ​ ​ = x → ∞ lim ​ ( 1 + x sin x 1 ​ ​ ) = 1 + 0 = 1 接着，考虑函数与渐近线的差： x → ∞ lim ​ [ x + sin x 1 ​ − x ] = x → ∞ lim ​ sin x 1 ​ = 0 因此，函数 y = x + sin x 1 ​ 存在斜渐近线 y = x ，故选 C。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 具有二阶导数，\\(g(x)=f(0)(1-x)+f(1)x,\\) 则在区间 \\([0,1]\\) 上（ ）。",
    options: [{ key: "A", text: "当 \\(f'(x)\\ge0\\) 时，\\(f(x)\\ge g(x)\\)" }, { key: "B", text: "当 \\(f'(x)\\ge0\\) 时，\\(f(x)\\le g(x)\\)" }, { key: "C", text: "当 \\(f''(x)\\ge0\\) 时，\\(f(x)\\ge g(x)\\)" }, { key: "D", text: "当 \\(f''(x)\\ge0\\) 时，\\(f(x)\\le g(x)\\)" }],
    answer: ["D"],
    explain: "正确答案： D 令 F ( x ) = g ( x ) − f ( x ) = f ( 0 ) ( 1 − x ) + f ( 1 ) x − f ( x ) ，则 F ( 0 ) = F ( 1 ) = 0 ， F ′ ( x ) = − f ( 0 ) + f ( 1 ) − f ′ ( x ) ， F ′′ ( x ) = − f ′′ ( x ) 。 若 f ′′ ( x ) ≥ 0 ，则 F ′′ ( x ) ≤ 0 ，即 F ( x ) 在 [ 0 , 1 ] 上为凸函数。又因为 F ( 0 ) = F ( 1 ) = 0 ，所以当 x ∈ [ 0 , 1 ] 时， F ( x ) ≥ 0 ，从而 g ( x ) ≥ f ( x ) 。 故选 D。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\\(\\begin{cases} x=t^2+7,\\\\ y=t^2+4t+1 \\end{cases}\\)上对应于 \\(t=1\\) 的点处的曲率半径是（ ）。",
    options: [{ key: "A", text: "\\(\\dfrac{\\sqrt{10}}{50}\\)" }, { key: "B", text: "\\(\\dfrac{\\sqrt{10}}{100}\\)" }, { key: "C", text: "\\(10\\sqrt{10}\\)" }, { key: "D", text: "\\(5\\sqrt{10}\\)" }],
    answer: ["C"],
    explain: "正确答案： C 已知 d x d y ​ ​ t = 1 ​ = 2 t 2 t + 4 ​ ​ t = 1 ​ = 3 ， d x 2 d 2 y ​ ​ t = 1 ​ = d x d y ′ ​ ​ t = 1 ​ = 2 t − t 2 2 ​ ​ ​ t = 1 ​ = − 1 ， 曲率公式为 k = ( 1 + y ′2 ) 2 3 ​ ∣ y ′′ ∣ ​ = ( 1 + 9 ) 2 3 ​ 1 ​ ， 因此 R = k 1 ​ = 10 10 ​ ，故选 C。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)=\\arctan x\\)，若 \\(f(x)=x f'(\\xi),\\) 则 \\(\\lim_{x\\to0}\\frac{\\xi^2}{x^2}=\\) （ ）。",
    options: [{ key: "A", text: "\\(1\\)" }, { key: "B", text: "\\(\\dfrac23\\)" }, { key: "C", text: "\\(\\dfrac12\\)" }, { key: "D", text: "\\(\\dfrac13\\)" }],
    answer: ["D"],
    explain: "正确答案： D 由于 x f ( x ) ​ = f ′ ( ξ ) = 1 + ξ 2 1 ​ ，可得 ξ 2 = f ( x ) x − f ( x ) ​ . 于是 x → 0 lim ​ x 2 ξ 2 ​ = x → 0 lim ​ x 2 f ( x ) x − f ( x ) ​ = x → 0 lim ​ x 2 arctan x x − arctan x ​ . 对分子分母分别求导， x → 0 lim ​ 3 x 2 1 − 1 + x 2 1 ​ ​ = 3 1 ​ . 因此正确答案为 D。"
  }),
  base(6, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(u(x,y)\\) 在有界闭区域 \\(D\\) 上连续，在 \\(D\\) 的内部具有二阶连续偏导数，且满足\\(\\frac{\\partial^2u}{\\partial x\\partial y}\\ne0, \\; \\frac{\\partial^2u}{\\partial x^2}+\\frac{\\partial^2u}{\\partial y^2}=0,\\)则（ ）。",
    options: [{ key: "A", text: "\\(u(x,y)\\) 的最大值和最小值都在 \\(D\\) 的边界上取得" }, { key: "B", text: "\\(u(x,y)\\) 的最大值和最小值都在 \\(D\\) 的内部取得" }, { key: "C", text: "\\(u(x,y)\\) 的最大值在 \\(D\\) 的内部取得，最小值在 \\(D\\) 的边界上取得" }, { key: "D", text: "\\(u(x,y)\\) 的最小值在 \\(D\\) 的内部取得，最大值在 \\(D\\) 的边界上取得" }],
    answer: ["A"],
    explain: "正确答案： A 记 A = ∂ x 2 ∂ 2 u ​ ， B = ∂ x ∂ y ∂ 2 u ​ ， C = ∂ y 2 ∂ 2 u ​ 。 由 B  = 0 且 A + C = 0 ，可得： Δ = A C − B 2 = − A 2 − B 2 < 0 因此， u ( x , y ) 在区域 D 内无极值，极值只能在边界处取得。 故选 A。"
  }),
  base(7, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "行列式\\(\\begin{vmatrix} 0&a&b&0\\\\ a&0&0&b\\\\ 0&c&d&0\\\\ c&0&0&d \\end{vmatrix}=\\)（ ）。",
    options: [{ key: "A", text: "\\((ad-bc)^2\\)" }, { key: "B", text: "\\(-(ad-bc)^2\\)" }, { key: "C", text: "\\(a^2d^2-b^2c^2\\)" }, { key: "D", text: "\\(b^2c^2-a^2d^2\\)" }],
    answer: ["B"],
    explain: "正确答案： B 由行列式的展开定理展开第一列， ​ 0 a 0 c ​ a 0 c 0 ​ b 0 d 0 ​ 0 b 0 d ​ ​ ​ = − a ​ a c 0 ​ b d 0 ​ 0 0 d ​ ​ − c ​ a 0 c ​ b 0 d ​ 0 b 0 ​ ​ = − a d ( a d − b c ) + b c ( a d − b c ) = − ( a d − b c ) 2 . ​ 故选 B。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 均为 3 维向量，则对任意常数 \\(a,b\\)，向量组 \\(\\alpha_1+a\\alpha_3,\\; \\alpha_2+b\\alpha_3\\) 线性无关是向量组 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性无关的（ ）。",
    options: [{ key: "A", text: "必要非充分条件" }, { key: "B", text: "充分非必要条件" }, { key: "C", text: "充分必要条件" }, { key: "D", text: "既非充分也非必要条件" }],
    answer: ["A"],
    explain: "正确答案： A ( α 1 ​ + a α 3 ​ , α 2 ​ + b α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 1 0 a ​ 0 1 b ​ ​ 。 若 α 1 ​ , α 2 ​ , α 3 ​ 线性无关，则矩阵的秩 r ( α 1 ​ + a α 3 ​ , α 2 ​ + b α 3 ​ ) = 2 ，因此该向量组线性无关。 举反例：令 α 3 ​ = 0 ，则 α 1 ​ , α 2 ​ 线性无关，但 α 1 ​ , α 2 ​ , α 3 ​ 线性相关。 综上所述，对任意常数 a , b ，向量组 α 1 ​ , α 2 ​ , α 3 ​ 线性无关能够推出向量组 α 1 ​ + a α 3 ​ , α 2 ​ + b α 3 ​ 线性无关，但反之不成立。因此，题设条件是原向量组线性无关的必要非充分条件，故选 A。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\int_{-\\infty}^{1}\\frac{1}{x^2+2x+5}\\,dx=\\) ________。",
    answerText: "】 8 3 ​ π 【",
    referenceAnswer: "【答案】 8 3 ​ π 【解析】 ​ ∫ − ∞ 1 ​ x 2 + 2 x + 5 1 ​ d x = ∫ − ∞ 1 ​ ( x + 1 ) 2 + 4 1 ​ d x = 2 1 ​ arctan 2 x + 1 ​ ​ − ∞ 1 ​ = 2 1 ​ [ 4 π ​ − ( − 2 π ​ ) ] = 8 3 ​ π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-004', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(f(x)\\) 是周期为 4 的可导奇函数，且 \\(f'(x)=2(x-1),\\; x\\in[0,2],\\) 则 \\(f(7)=\\) ________。",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 已知 f ′ ( x ) = 2 ( x − 1 ) ，其中 x ∈ [ 0 , 2 ] ，且 f ( x ) 为奇函数，因此其导函数为偶函数。 因此，当 x ∈ [ − 2 , 0 ] 时，有 f ′ ( x ) = 2 ( − x − 1 ) 。 积分可得 f ( x ) = − x 2 − 2 x + c ，又因为 f ( x ) 为奇函数，所以 c = 0 。 因此，当 x ∈ [ − 2 , 0 ] 时， f ( x ) = − x 2 − 2 x 。 又因为 f ( x ) 的周期为 4，所以 f ( 7 ) = f ( − 1 ) = 1 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(z=z(x,y)\\) 是由方程 \\(e^{2yz}+x+y^2+z=\\frac74\\) 确定的函数，则 \\(\\left.dz\\right|_{(1/2,\\,1/2)}=\\) ________。",
    answerText: "】 d z ∣ ( 2 1 ​ , 2 1 ​ ) ​ = − 2 1 ​ ( d x + d y ) 【",
    referenceAnswer: "【答案】 d z ∣ ( 2 1 ​ , 2 1 ​ ) ​ = − 2 1 ​ ( d x + d y ) 【解析】 对 e 2 yz + x + y 2 + z = 4 7 ​ 方程两边同时对 x 、 y 求偏导，得到： { e 2 yz ⋅ 2 y ⋅ ∂ x ∂ z ​ + 1 + ∂ x ∂ z ​ = 0 e 2 yz ( 2 z + 2 y ∂ y ∂ z ​ ) + 2 y + ∂ y ∂ z ​ = 0 ​ 当 x = 2 1 ​ ， y = 2 1 ​ 时， z = 0 。 代入得： ∂ x ∂ z ​ ​ ( 2 1 ​ , 2 1 ​ ) ​ = − 2 1 ​ , ∂ y ∂ z ​ ​ ( 2 1 ​ , 2 1 ​ ) ​ = − 2 1 ​ 因此： d z ∣ ( 2 1 ​ , 2 1 ​ ) ​ = − 2 1 ​ d x + ( − 2 1 ​ ) d y = − 2 1 ​ ( d x + d y )",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(L\\) 的极坐标方程为 \\(r=\\theta,\\) 则 \\(L\\) 在点 \\((r,\\theta)=\\left(\\frac\\pi2,\\frac\\pi2\\right)\\) 处的切线的直角坐标方程为 ________。",
    answerText: "】 y = − π 2 ​ x + 2 π ​ 【",
    referenceAnswer: "【答案】 y = − π 2 ​ x + 2 π ​ 【解析】 根据直角坐标与极坐标的关系，有 x = r cos θ = θ cos θ ， y = r sin θ = θ sin θ 。因此，当 ( r , θ ) = ( 2 π ​ , 2 π ​ ) 时，对应坐标为 ( x , y ) = ( 0 , 2 π ​ ) 。 切线的斜率为 d x d y ​ = d θ d x ​ d θ d y ​ ​ = cos θ − θ sin θ θ cos θ + sin θ ​ 代入 θ = 2 π ​ ，得 d x d y ​ ​ ( 0 , 2 π ​ ) ​ = − π 2 ​ 因此，切线方程为 y − 2 π ​ = − π 2 ​ ( x − 0 ) 即 y = − π 2 ​ x + 2 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "一根长度为 1 的细棒位于 \\(x\\) 轴的区间 \\([0,1]\\) 上，若其线密度 \\(\\rho(x)=-x^2+2x+1,\\) 则该细棒的质心坐标 \\(\\bar x=\\) ________。",
    answerText: "】 20 11 ​ 【",
    referenceAnswer: "【答案】 20 11 ​ 【解析】 质心位置公式为 x ˉ = ∫ 0 1 ​ ρ ( x ) d x ∫ 0 1 ​ x ρ ( x ) d x ​ 。 首先计算分母部分： ∫ 0 1 ​ ρ ( x ) d x = ∫ 0 1 ​ ( − x 2 + 2 x + 1 ) d x = [ − 3 x 3 ​ + x 2 + x ] 0 1 ​ = 3 5 ​ 接着计算分子部分： ∫ 0 1 ​ x ρ ( x ) d x = ∫ 0 1 ​ x ( − x 2 + 2 x + 1 ) d x = [ − 4 x 4 ​ + 3 2 ​ x 3 + 2 x 2 ​ ] 0 1 ​ = 12 11 ​ 因此，质心位置为： x ˉ = 3 5 ​ 12 11 ​ ​ = 20 11 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设二次型 \\(f(x_1,x_2,x_3)=x_1^2-x_2^2+2ax_1x_3+4x_2x_3\\) 的负惯性指数为 1，则 \\(a\\) 的取值范围是 ________。",
    answerText: "】 − 2 ≤ a ≤ 2 【",
    referenceAnswer: "【答案】 − 2 ≤ a ≤ 2 【解析】 配方法： f ( x 1 ​ , x 2 ​ , x 3 ​ ) = ( x 1 ​ + a x 3 ​ ) 2 − a 2 x 3 2 ​ − ( x 2 ​ − 2 x 3 ​ ) 2 + 4 x 3 2 ​ 由于二次型负惯性指数为 1，所以 4 − a 2 ≥ 0 ，故 − 2 ≤ a ≤ 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\\(\\lim_{x\\to+\\infty} \\dfrac{\\int_1^x\\left[t^2\\left(e^{1/t}-1\\right)-t\\right]dt}{x^2\\ln\\left(1+\\frac1x\\right)}.\\)",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 lim x → + ∞ ​ x 2 l n ( 1 + x 1 ​ ) ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ = lim x → + ∞ ​ x 2 ⋅ x 1 ​ ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ 利用等价无穷小替换 ln ( 1 + x 1 ​ ) ∼ x 1 ​ ，分母化为 x 。 由洛必达法则，对分子和分母分别求导： x → + ∞ lim ​ 1 x 2 ( e x 1 ​ − 1 ) − x ​ 令 t = x 1 ​ ，当 x → + ∞ 时， t → 0 + ，则原式化为： t → 0 + lim ​ 1 t 2 1 ​ ( e t − 1 ) − t 1 ​ ​ = t → 0 + lim ​ t 2 e t − 1 − t ​ 再次应用洛必达法则： t → 0 + lim ​ 2 t e t − 1 ​ = t → 0 + lim ​ 2 t t ​ = 2 1 ​ 因此，极限值为 2 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数 \\(y=y(x)\\) 满足微分方程 \\(x^2+y^2y'=1-y',\\) 且 \\(y(2)=0\\)，求 \\(y(x)\\) 的极大值与极小值。",
    referenceAnswer: "【答案】 y(x)的极大值为1，极小值为0。 【解析】 由 x 2 + y 2 y ′ = 1 − y ′ ，可得 ( y 2 + 1 ) y ′ = 1 − x 2 . 这是一个变量可分离方程，其通解为 3 1 ​ y 3 + y = x − 3 1 ​ x 3 + c . 由初始条件 y ( 2 ) = 0 ，代入得 c = 3 2 ​ . 又由原方程可得 y ′ ( x ) = y 2 + 1 1 − x 2 ​ . 当 y ′ ( x ) = 0 时，有 x = ± 1 ，且导数的符号变化如下： 当 x < − 1 时， y ′ ( x ) < 0 ； 当 − 1 < x < 1 时， y ′ ( x ) > 0 ； 当 x > 1 时， y ′ ( x ) < 0 。 因此， y ( x ) 在 x = − 1 处取得极小值，在 x = 1 处取得极大值。 代入解得 y ( − 1 ) = 0 , y ( 1 ) = 1. 即： y ( x ) 的极大值为 1，极小值为 0。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设平面区域 \\(D=\\{(x,y)\\mid1\\le x^2+y^2\\le4,\\ x\\ge0,\\ y\\ge0\\},\\) 计算 \\(I=\\iint_D\\frac{x\\sin\\left(\\pi\\sqrt{x^2+y^2}\\right)}{x+y}\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 − 4 3 ​ 【解析】 由于区域 D 关于 y = x 对称，满足轮换对称性，因此： ∬ D ​ x + y x sin ( π x 2 + y 2 ​ ) ​ d x d y = ∬ D ​ x + y y sin ( π x 2 + y 2 ​ ) ​ d x d y 于是： I ​ = ∬ D ​ x + y x sin ( π x 2 + y 2 ​ ) ​ d x d y = 2 1 ​ ∬ D ​ ​ x + y x sin ( π x 2 + y 2 ​ ) ​ + x + y y sin ( π x 2 + y 2 ​ ) ​ ​ d x d y = 2 1 ​ ∬ D ​ sin ( π x 2 + y 2 ​ ) d x d y ​ 在极坐标下，设 x = r cos θ ， y = r sin θ ，积分区域为 1 ≤ r ≤ 2 ， 0 ≤ θ ≤ 2 π ​ ，于是： I ​ = 2 1 ​ ∫ 0 2 π ​ ​ d θ ∫ 1 2 ​ sin ( π r ) ⋅ r d r = 4 π ​ ( − π 1 ​ ) ∫ 1 2 ​ r d ( cos π r ) = − 4 1 ​ [ cos π r ⋅ r ∣ 1 2 ​ − ∫ 1 2 ​ cos π r d r ] = − 4 1 ​ [ 2 + 1 − π 1 ​ sin π r ​ 1 2 ​ ] = − 4 3 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数 \\(f(u)\\) 具有二阶连续导数，\\(z=f(e^x\\cos y)\\) 满足\\(\\frac{\\partial^2z}{\\partial x^2}+\\frac{\\partial^2z}{\\partial y^2} =(4z+e^x\\cos y)e^{2x}.\\)若 \\(f(0)=0,\\; f'(0)=0,\\) 求 \\(f(u)\\) 的表达式。",
    referenceAnswer: "【答案】 f ( u ) = 16 1 ​ ( e 2 u − e − 2 u ) − 4 1 ​ u 【解析】 ∂ x ∂ z ​ = e x cos y ⋅ f ′ ， ∂ y ∂ z ​ = − e x sin y ⋅ f ′ 。 ∂ x 2 ∂ 2 z ​ = e x cos y ⋅ f ′ + e 2 x cos 2 y ⋅ f ′′ ， ∂ y 2 ∂ 2 z ​ = − e x cos y ⋅ f ′ + e 2 x sin 2 y ⋅ f ′′ 。 于是 ∂ x 2 ∂ 2 z ​ + ∂ y 2 ∂ 2 z ​ = e 2 x f ′′ 令 u = e x cos y ，由 ∂ x 2 ∂ 2 z ​ + ∂ y 2 ∂ 2 z ​ = ( 4 z + e x cos y ) e 2 x 得 f ′′ ( u ) = 4 f ( u ) + u , 或 f ′′ ( u ) − 4 f ( u ) = u 解得 f ( u ) = C 1 ​ e − 2 u + C 2 ​ e 2 u − 4 1 ​ u 由 f ( 0 ) = 0 ， f ′ ( 0 ) = 0 得 { C 1 ​ + C 2 ​ = 0 , − 2 C 1 ​ + 2 C 2 ​ − 4 1 ​ = 0 , ​ 解得 C 1 ​ = − 16 1 ​ ， C 2 ​ = 16 1 ​ 。 故 f ( u ) = 16 1 ​ ( e 2 u − e − 2 u ) − 4 1 ​ u",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数 \\(f(x),g(x)\\) 在区间 \\([a,b]\\) 上连续，且 \\(f(x)\\) 单调增加，\\(0\\le g(x)\\le1\\)。证明：\n\n（Ⅰ）\\(0\\le\\int_a^xg(t)\\,dt\\le x-a,\\; x\\in[a,b];\\)\n\n（Ⅱ）\\(\\int_a^{\\,a+\\int_a^b g(t)\\,dt}f(x)\\,dx \\le \\int_a^bf(x)g(x)\\,dx.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 由积分中值定理可得： ∫ a x ​ g ( t ) d t = g ( ξ ) ( x − a ) , ξ ∈ [ a , x ] . 由于 0 ≤ g ( x ) ≤ 1 ，因此： 0 ≤ g ( ξ ) ( x − a ) ≤ ( x − a ) , 进而： 0 ≤ ∫ a x ​ g ( t ) d t ≤ ( x − a ) . 定义函数： F ( u ) = ∫ a u ​ f ( x ) g ( x ) d x − ∫ a a + ∫ a u ​ g ( t ) d t ​ f ( x ) d x . 对其求导得： F ′ ( u ) ​ = f ( u ) g ( u ) − f ( a + ∫ a u ​ g ( t ) d t ) ⋅ g ( u ) = g ( u ) [ f ( u ) − f ( a + ∫ a u ​ g ( t ) d t ) ] . ​ 由 (I) 可知： 0 ≤ ∫ a u ​ g ( t ) d t ≤ ( u − a ) . 又因为 f ( x ) 单调递增，所以： f ( u ) − f ( a + ∫ a u ​ g ( t ) d t ) ≥ 0 , 从而 F ′ ( u ) ≥ 0 ，即 F ( u ) 单调不减。 因此： F ( u ) ≥ F ( a ) = 0. 取 u = b ，得 F ( b ) ≥ 0 ，即 (II) 成立。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设函数 \\(f(x)=\\frac{x}{1+x},\\; x\\in[0,1],\\) 定义函数列\\(f_1(x)=f(x),\\quad f_2(x)=f(f_1(x)),\\quad\\ldots,\\quad f_n(x)=f(f_{n-1}(x)),\\ldots\\)记 \\(S_n\\) 是由曲线 \\(y=f_n(x)\\)、直线 \\(x=1\\) 及 \\(x\\) 轴所围成平面图形的面积，求极限 \\(\\lim_{n\\to\\infty}nS_n.\\)",
    referenceAnswer: "【答案】 1 【解析】 f 1 ​ ( x ) = 1 + x x ​ ， f 2 ​ ( x ) = 1 + 2 x x ​ ， ⋯ ， f n ​ ( x ) = 1 + n x x ​ S n ​ ​ = ∫ 0 1 ​ f n ​ ( x ) d x = ∫ 0 1 ​ 1 + n x x ​ d x = ∫ 0 1 ​ 1 + n x x + n 1 ​ − n 1 ​ ​ d x = n 1 ​ ∫ 0 1 ​ 1 d x − n 1 ​ ∫ 0 1 ​ 1 + n x 1 ​ d x = n 1 ​ − n 2 1 ​ ln ( 1 + n x ) ​ 0 1 ​ = n 1 ​ − n 2 1 ​ ln ( 1 + n ) ​ ∴ n → ∞ lim ​ n S n ​ ​ = 1 − n → ∞ lim ​ n ln ( 1 + n ) ​ = 1 − x → ∞ lim ​ x ln ( 1 + x ) ​ = 1 − x → ∞ lim ​ 1 + x 1 ​ = 1 − 0 = 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知函数 \\(f(x,y)\\) 满足 \\(\\frac{\\partial f}{\\partial y}=2(y+1),\\) 且 \\(f(y,y)=(y+1)^2-(2-y)\\ln y.\\) 求曲线 \\(f(x,y)=0\\) 所围图形绕直线 \\(y=-1\\) 旋转所成旋转体的体积。",
    referenceAnswer: "【答案】 π ( 2 ln 2 − 4 5 ​ ) 【解析】 由于 ∂ y ∂ f ​ = 2 ( y + 1 ) ，可得 f ( x , y ) = y 2 + 2 y + φ ( x ) ，其中 φ ( x ) 为待定函数。 又已知 f ( y , y ) = ( y + 1 ) 2 − ( 2 − y ) ln y ，代入得 φ ( y ) = 1 − ( 2 − y ) ln y ，因此 f ( x , y ) = y 2 + 2 y + 1 − ( 2 − x ) ln x = ( y + 1 ) 2 − ( 2 − x ) ln x 令 f ( x , y ) = 0 ，得 ( y + 1 ) 2 = ( 2 − x ) ln x 。当 y = − 1 时，解得 x = 1 或 x = 2 。于是所求体积为 V ​ = π ∫ 1 2 ​ ( y + 1 ) 2 d x = π ∫ 1 2 ​ ( 2 − x ) ln x d x = π ∫ 1 2 ​ ln x d ( 2 x − 2 x 2 ​ ) = π [ ln x ( 2 x − 2 x 2 ​ ) ] 1 2 ​ − π ∫ 1 2 ​ ( 2 − 2 x ​ ) d x = π ⋅ 2 ln 2 − π [ 2 x − 4 x 2 ​ ] 1 2 ​ = π ⋅ 2 ln 2 − π ⋅ 4 5 ​ = π ( 2 ln 2 − 4 5 ​ ) ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设\\(A=\\begin{pmatrix} 1&-2&3&-4\\\\ 0&1&-1&1\\\\ 1&2&0&-3 \\end{pmatrix},\\) \\(E\\) 为 3 阶单位矩阵。\n\n（Ⅰ）求方程组 \\(Ax=0\\) 的一个基础解系；\n\n（Ⅱ）求满足 \\(AB=E\\) 的所有矩阵 \\(B\\)。",
    referenceAnswer: "【答案】 （Ⅰ）方程组 A x = 0 的一个基础解系为 ξ = ( − 1 , 2 , 3 , 1 ) T 。 （Ⅱ）满足 A B = E 的所有矩阵 B 为 B = ​ 2 − k 1 ​ 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ 6 − k 2 ​ 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ − 1 − k 3 ​ 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ ， 其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数。 【解析】 （Ⅰ） 对矩阵 A 进行行变换： A = ​ 1 0 1 ​ − 2 1 2 ​ 3 − 1 0 ​ − 4 1 − 3 ​ ​ → ​ 1 0 0 ​ − 2 1 4 ​ 3 − 1 − 3 ​ − 4 1 1 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 3 − 1 1 ​ − 4 1 − 3 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 0 0 1 ​ 5 − 2 − 3 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 − 2 − 3 ​ ​ 则方程组 A X = 0 的一个基础解系为 ξ = ( − 1 , 2 , 3 , 1 ) T 。 （Ⅱ） 方法一 由增广矩阵 ( A ∣ E ) = ​ 1 0 1 ​ − 2 1 2 ​ 3 − 1 0 ​ − 4 1 − 3 ​ ∣ ∣ ∣ ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ 进行行变换： → ​ 1 0 0 ​ − 2 1 4 ​ 3 − 1 − 3 ​ − 4 1 1 ​ ∣ ∣ ∣ ​ 1 0 − 1 ​ 0 1 0 ​ 0 0 1 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 0 0 1 ​ − 2 − 2 − 3 ​ ∣ ∣ ∣ ​ 4 1 − 1 ​ − 3 − 3 − 4 ​ 1 1 1 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 − 2 − 3 ​ ∣ ∣ ∣ ​ 2 1 − 1 ​ − 6 3 − 4 ​ − 1 1 1 ​ ​ 可得 B = ​ 2 − k 1 ​ 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ 6 − k 2 ​ 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ − 1 − k 3 ​ 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ 其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数。 方法二 令 B = ( X 1 ​ , X 2 ​ , X 3 ​ ) ， E = ( e 1 ​ , e 2 ​ , e 3 ​ ) ，则 A B = E 等价于 A X 1 ​ = e 1 ​ , A X 2 ​ = e 2 ​ , A X 3 ​ = e 3 ​ . 方程组 A X 1 ​ = e 1 ​ 的通解为 X 1 ​ = k 1 ​ ​ − 1 2 3 1 ​ ​ + ​ 2 − 1 − 1 0 ​ ​ = ​ − k 1 ​ + 2 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ ​ 其中 k 1 ​ 为任意常数。 方程组 A X 2 ​ = e 2 ​ 的通解为 X 2 ​ = k 2 ​ ​ − 1 2 3 1 ​ ​ + ​ 6 − 3 − 4 0 ​ ​ = ​ − k 2 ​ + 6 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ ​ 其中 k 2 ​ 为任意常数。 方程组 A X 3 ​ = e 3 ​ 的通解为 X 3 ​ = k 3 ​ ​ − 1 2 3 1 ​ ​ + ​ − 1 1 1 0 ​ ​ = ​ − k 3 ​ − 1 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ 其中 k 3 ​ 为任意常数。 因此 B = ​ − k 1 ​ + 2 2 k 1 ​ − 1 3 k 1 ​ − 1 k 1 ​ ​ − k 2 ​ + 6 2 k 2 ​ − 3 3 k 2 ​ − 4 k 2 ​ ​ − k 3 ​ − 1 2 k 3 ​ + 1 3 k 3 ​ + 1 k 3 ​ ​ ​ 其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数。 方法三 令 B = ​ x 1 ​ x 4 ​ x 7 ​ x 10 ​ ​ x 2 ​ x 5 ​ x 8 ​ x 11 ​ ​ x 3 ​ x 6 ​ x 9 ​ x 12 ​ ​ ​ 由 A B = E 得 ⎩ ⎨ ⎧ ​ x 1 ​ − 2 x 4 ​ + 3 x 7 ​ − 4 x 10 ​ = 1 , x 2 ​ − 2 x 5 ​ + 3 x 8 ​ − 4 x ",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n证明 \\(n\\) 阶矩阵\\(A=\\begin{pmatrix} 1&1&\\cdots&1\\\\ 1&1&\\cdots&1\\\\ \\vdots&\\vdots&&\\vdots\\\\ 1&1&\\cdots&1 \\end{pmatrix}\\)与\\(B=\\begin{pmatrix} 0&\\cdots&0&1\\\\ 0&\\cdots&0&2\\\\ \\vdots&&\\vdots&\\vdots\\\\ 0&\\cdots&0&n \\end{pmatrix}\\)相似。",
    referenceAnswer: "【答案】 见解析 【解析】 证明：设 A = ​ 1 1 ⋮ 1 ​ 1 1 ⋮ 1 ​ ⋯ ⋯ ⋯ ​ 1 1 ⋮ 1 ​ ​ , B = ​ 0 0 ⋮ 0 ​ ⋯ ⋯ ⋮ ⋯ ​ 0 0 0 ​ 1 2 ⋮ n ​ ​ . 分别求两个矩阵的特征值和特征向量如下： ∣ λ E − A ∣ = ​ λ − 1 − 1 ⋮ − 1 ​ − 1 λ − 1 ⋮ − 1 ​ ⋯ ⋯ ⋯ ​ − 1 − 1 ⋮ λ − 1 ​ ​ = ( λ − n ) λ n − 1 , 所以 A 的 n 个特征值为 λ 1 ​ = n , λ 2 ​ = λ 3 ​ = ⋯ = λ n ​ = 0 。 而且 A 是实对称矩阵，所以一定可以对角化，且 A ∼ ​ λ 1 ​ ​ 0 ​ ⋱ ​ 0 ​ ​ . ∣ λ E − B ∣ = ​ λ 0 ⋮ 0 ​ 0 λ ⋮ 0 ​ ⋯ ⋯ ⋯ ​ − 1 − 2 ⋮ λ − n ​ ​ = ( λ − n ) λ n − 1 , 所以 B 的 n 个特征值也为 λ 1 ​ = n , λ 2 ​ = λ 3 ​ = ⋯ = λ n ​ = 0 。 对于 n − 1 重特征值 λ = 0 ，由于矩阵 0 E − B = − B 的秩显然为 1，所以矩阵 B 对应 n − 1 重特征值 λ = 0 的特征向量应该有 n − 1 个线性无关。进一步，矩阵 B 存在 n 个线性无关的特征向量，即矩阵 B 一定可以对角化，且 B ∼ ​ λ 1 ​ ​ 0 ​ ⋱ ​ 0 ​ ​ . 从而可知 n 阶矩阵 ​ 1 1 ⋮ 1 ​ 1 1 ⋮ 1 ​ ⋯ ⋯ ⋯ ​ 1 1 ⋮ 1 ​ ​ 与 ​ 0 0 ⋮ 0 ​ ⋯ ⋯ ⋮ ⋯ ​ 0 0 0 ​ 1 2 ⋮ n ​ ​ 相似。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2014_math2 = {
  id: P, year: Y,
  title: '2014 年全国硕士研究生招生考试 数学（二）',
  short: '2014 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2014_math2.length,
  qids: questions2014_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
