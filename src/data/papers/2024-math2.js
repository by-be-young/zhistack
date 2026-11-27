const P = 'paper-2024-math2'
const Y = 2024
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2024-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2024 考研数学（二）真题',
  ...extra
})

export const questions2024_math2 = [
  base(1, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "函数 \\(f(x)=|x|^{\\frac1{(1-x)(x-2)}}\\) 的第一类间断点的个数为（ ）",
    options: [{ key: "A", text: "\\(3\\)" }, { key: "B", text: "\\(2\\)" }, { key: "C", text: "\\(1\\)" }, { key: "D", text: "\\(0\\)" }],
    answer: ["C"],
    explain: "正确答案： C f ( x ) 的所有间断点为0,1,2.且不难得到 l i m x → 1 ​ f ( x ) = l i m x → 1 ​ e x p ( ( 1 − x ) ( x − 2 ) l n x ​ ) = l i m x → 1 ​ e x p ( ( 1 − x ) ( x − 2 ) x − 1 ​ ) = e , l i m x → 2 − ​ f ( x ) = + ∞ , l i m x → 0 + ​ f ( x ) = + ∞ , 所以 f ( x ) 的第一类间断点只有 x = 1 ，答案选择 C。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "函数 \\(y=f(x)\\) 由参数方程\\(\\begin{cases} x=1+t^3,\\\\ y=e^{t^2} \\end{cases}\\)确定，则 \\(\\lim_{x\\to+\\infty}x\\left[f\\left(2+\\frac2x\\right)-f(2)\\right]=（ ）\\)",
    options: [{ key: "A", text: "\\(2e\\)" }, { key: "B", text: "\\(\\dfrac43e\\)" }, { key: "C", text: "\\(\\dfrac23e\\)" }, { key: "D", text: "\\(\\dfrac e3\\)" }],
    answer: ["B"],
    explain: "正确答案： B f ′ ( x ) = d x / d t d y / d t ​ = 3 t 2 2 t e t 2 ​ = 3 t 2 e t 2 ​ ，当 x → + ∞ 时， t → 1 （由 x = 1 + t 3 = 2 + x 2 ​ ，当 x 很大时， x 2 ​ 趋近于 0，故 t 3 ≈ 1 ， t ≈ 1 ），则 f ′ ( 2 ) = f ′ ( x ) ∣ t = 1 ​ = 3 × 1 2 e 1 ​ = 3 2 e ​ 。 l i m x → + ∞ ​ x [ f ( 2 + x 2 ​ ) − f ( 2 ) ] = 2 l i m x → + ∞ ​ x 2 ​ f ( 2 + x 2 ​ ) − f ( 2 ) ​ = 2 f ′ ( 2 ) = 2 × 3 2 e ​ = 3 4 ​ e , 选B."
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数\\(f(x)=\\int_0^{\\sin x}\\sin t^3\\,dt,\\; g(x)=\\int_0^xf(t)\\,dt,\\)则（ ）",
    options: [{ key: "A", text: "\\(f(x)\\) 为奇函数，\\(g(x)\\) 为奇函数" }, { key: "B", text: "\\(f(x)\\) 为奇函数，\\(g(x)\\) 为偶函数" }, { key: "C", text: "\\(f(x)\\) 为偶函数，\\(g(x)\\) 为偶函数" }, { key: "D", text: "\\(f(x)\\) 为偶函数，\\(g(x)\\) 为奇函数" }],
    answer: ["D"],
    explain: "正确答案： D 令 h ( x ) = ∫ 0 x ​ sin t 3 d t ，因为 sin ( − t ) 3 = − sin t 3 ，所以 h ( − x ) = ∫ 0 − x ​ sin t 3 d t = − ∫ 0 x ​ sin ( − u ) 3 d u = ∫ 0 x ​ sin u 3 d u = h ( x ) ，故 h ( x ) 是偶函数。则 f ( x ) = h ( sin x ) ，由于 sin ( − x ) = − sin x ，但 h 是偶函数，所以 f ( − x ) = h ( sin ( − x )) = h ( − sin x ) = h ( sin x ) = f ( x ) ，故 f ( x ) 为偶函数。 而奇函数的原函数若在 0 处有定义则为偶函数，偶函数的原函数为奇函数加上常数。 g ( x ) = ∫ 0 x ​ f ( t ) d t ，因为 f ( x ) 是偶函数，所以 g ( − x ) = ∫ 0 − x ​ f ( t ) d t = − ∫ 0 x ​ f ( − u ) d u = − ∫ 0 x ​ f ( u ) d u = − g ( x ) ，故 g ( x ) 为奇函数，选D."
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知数列 \\(\\{a_n\\}\\ (a_n\\ne0)\\)，若 \\(\\{a_n\\}\\) 发散，则（ ）",
    options: [{ key: "A", text: "\\(\\left\\{a_n+\\dfrac1{a_n}\\right\\}\\) 发散" }, { key: "B", text: "\\(\\left\\{a_n-\\dfrac1{a_n}\\right\\}\\) 发散" }, { key: "C", text: "\\(\\left\\{e^{a_n}+\\dfrac1{e^{a_n}}\\right\\}\\) 发散" }, { key: "D", text: "\\(\\left\\{e^{a_n}-\\dfrac1{e^{a_n}}\\right\\}\\) 发散" }],
    answer: ["D"],
    explain: "正确答案： D 对于A选项可取反例 a n ​ = 2 ( − 1 ) n ，当 n 为偶数时， a n ​ = 2 1 = 2 ；当 n 为奇数时， a n ​ = 2 − 1 = 2 1 ​ ，数列 { a n ​ } 发散。此时 a n ​ + a n ​ 1 ​ 为 2 + 2 1 ​ = 2 5 ​ 和 2 1 ​ + 2 = 2 5 ​ ，数列收敛，故A错误；对于B、C选项可取反例 a n ​ = ( − 1 ) n ，此时 a n ​ − a n ​ 1 ​ = ( − 1 ) n − ( − 1 ) n = 0 ，同时 e a n + e − a n = e + e −1 为常数，两数列均收敛，故B、C错误； 正确答案选 D，实际上函数 f ( x ) = e x − e x 1 ​ 是 ( − ∞ , + ∞ ) 上的单调增的连续函数，所以 f ( x ) 在 ( − ∞ , + ∞ ) 上存在连续的反函数 g ( x ) 。设 b n ​ = e a n ​ − e a n ​ 1 ​ ，则 a n ​ = g ( b n ​ ) 。如果 { b n ​ } 收敛于 b ，则 a n ​ = g ( b n ​ ) 收敛于 g ( b ) ，与 { a n ​ } 发散矛盾，所以 { b n ​ } 发散。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数\\(f(x,y)=\\begin{cases} (x^2+y^2)\\sin\\dfrac1{xy},&xy\\ne0,\\\\ 0,&xy=0, \\end{cases}\\)则函数 \\(f(x,y)\\) 在 \\((0,0)\\) 处（ ）",
    options: [{ key: "A", text: "\\(\\dfrac{\\partial f(x,y)}{\\partial x}\\) 连续，\\(f(x,y)\\) 可微" }, { key: "B", text: "\\(\\dfrac{\\partial f(x,y)}{\\partial x}\\) 连续，\\(f(x,y)\\) 不可微" }, { key: "C", text: "\\(\\dfrac{\\partial f(x,y)}{\\partial x}\\) 不连续，\\(f(x,y)\\) 可微" }, { key: "D", text: "\\(\\dfrac{\\partial f(x,y)}{\\partial x}\\) 不连续，\\(f(x,y)\\) 不可微" }],
    answer: ["C"],
    explain: "正确答案： C 在点 ( 0 , 0 ) 处， f x ′ ​ ( 0 , 0 ) = lim x → 0 ​ x f ( x , 0 ) − f ( 0 , 0 ) ​ = lim x → 0 ​ x 0 − 0 ​ = 0 ， 同理 f y ′ ​ ( 0 , 0 ) = 0 。 计算可微性： ( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ f ( x , y ) − f ( 0 , 0 ) − f x ′ ​ ( 0 , 0 ) x − f y ′ ​ ( 0 , 0 ) y ​ ​ = ( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ ( x 2 + y 2 ) sin x y 1 ​ ​ = ( x , y ) → ( 0 , 0 ) lim ​ x 2 + y 2 ​ sin x y 1 ​ = 0 , ​ 所以 f ( x , y ) 在点 ( 0 , 0 ) 处可微。 而当 x y  = 0 时， f x ′ ​ ( x , y ) = 2 x sin x y 1 ​ − x 2 y x 2 + y 2 ​ cos x y 1 ​ 。 取路径 y = x ，当 ( x , y ) → ( 0 , 0 ) 时， x → 0 lim ​ [ 2 x sin x 2 1 ​ − x 3 2 x 2 ​ cos x 2 1 ​ ] = x → 0 lim ​ [ 2 x sin x 2 1 ​ − x 2 ​ cos x 2 1 ​ ] , 其中 x 2 ​ cos x 2 1 ​ 极限不存在，故 lim ( x , y ) → ( 0 , 0 ) ​ f x ′ ​ ( x , y ) 不存在，即偏导数不连续，选 C 。"
  }),
  base(6, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(f(x,y)\\) 是连续函数，则 \\(\\int_{\\pi/6}^{\\pi/2}dx\\int_{\\sin x}^1f(x,y)\\,dy=（ ）\\)",
    options: [{ key: "A", text: "\\(\\displaystyle\\int_{1/2}^1dy\\int_{\\pi/6}^{\\arcsin y}f(x,y)\\,dx\\)" }, { key: "B", text: "\\(\\displaystyle\\int_{1/2}^1dy\\int_{\\arcsin y}^{\\pi/2}f(x,y)\\,dx\\)" }, { key: "C", text: "\\(\\displaystyle\\int_0^{1/2}dy\\int_{\\pi/6}^{\\arcsin y}f(x,y)\\,dx\\)" }, { key: "D", text: "\\(\\displaystyle\\int_0^{1/2}dy\\int_{\\arcsin y}^{\\pi/2}f(x,y)\\,dx\\)" }],
    answer: ["A"],
    explain: "正确答案： A 原积分区域为： 6 π ​ ≤ x ≤ 2 π ​ ， sin x ≤ y ≤ 1 。当 x = 6 π ​ 时， sin x = 2 1 ​ ；当 x = 2 π ​ 时， sin x = 1 。对于 y 的范围，当 y 从 2 1 ​ 到 1 时， x 的下限为 6 π ​ ，上限为 arcsin y （因为 y = sin x ，所以 x = arcsin y ，且在 x ∈ [ 6 π ​ , 2 π ​ ] 时， arcsin y 有意义）。故交换积分次序后为 ∫ 2 1 ​ 1 ​ d y ∫ 6 π ​ a r c s i n y ​ f ( x , y ) d x ，选A。"
  }),
  base(7, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设非负函数 \\(f(x)\\) 在 \\([0,+\\infty)\\) 连续，给出以下三个命题：1. 若 \\(\\displaystyle\\int_0^{+\\infty}f^2(x)\\,dx\\) 收敛，则 \\(\\displaystyle\\int_0^{+\\infty}f(x)\\,dx\\) 收敛；2. 若存在 \\(p>1\\)，使得 \\(\\displaystyle\\lim_{x\\to+\\infty}x^pf(x)\\) 存在，则 \\(\\displaystyle\\int_0^{+\\infty}f(x)\\,dx\\) 收敛；3. 若 \\(\\displaystyle\\int_0^{+\\infty}f(x)\\,dx\\) 收敛，则存在 \\(p>1\\)，使得 \\(\\displaystyle\\lim_{x\\to+\\infty}x^pf(x)\\) 存在。其中真命题的个数为（ ）",
    options: [{ key: "A", text: "\\(0\\)" }, { key: "B", text: "\\(1\\)" }, { key: "C", text: "\\(2\\)" }, { key: "D", text: "\\(3\\)" }],
    answer: ["B"],
    explain: "正确答案： B 对于命题(1)，取 f ( x ) = 1 + x 1 ​ ，则 f 2 ( x ) = ( 1 + x ) 2 1 ​ ， ∫ 0 + ∞ ​ f 2 ( x ) d x 收敛，但 ∫ 0 + ∞ ​ f ( x ) d x = ln ( 1 + x ) ​ 0 + ∞ ​ 发散，所以(1)错误。 对于命题(2)，如果极限 lim x → + ∞ ​ x p f ( x ) 存在，设为 M ，则存在 X > 0 ，当 x > X 时， ∣ x p f ( x ) ∣ ≤ ∣ M ∣ + 1 （利用极限的局部有界性），即 f ( x ) ≤ x p ∣ M ∣ + 1 ​ 。因为 p > 1 ， ∫ X + ∞ ​ x p 1 ​ d x 收敛，由比较判别法可知 ∫ 0 + ∞ ​ f ( x ) d x 收敛，故(2)正确。 对于命题(3)，取 f ( x ) = ( 2 + x ) l n 2 ( 2 + x ) 1 ​ ，则 ∫ 0 + ∞ ​ f ( x ) d x 收敛（可通过换元 t = ln ( 2 + x ) 验证），但对于任意 p > 1 ， lim x → + ∞ ​ x p f ( x ) = lim x → + ∞ ​ ( 2 + x ) l n 2 ( 2 + x ) x p ​ 。当 x 很大时， 2 + x ≈ x ，则表达式近似为 l n 2 x x p − 1 ​ 。当 p > 1 时， x p − 1 趋于无穷， ln 2 x 增长远慢于多项式，故该式趋于 + ∞ ，因此不存在有限极限，所以(3)错误。 综上，正确的个数是1，选B。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(A\\) 为三阶矩阵，\\(P=\\begin{pmatrix} 1&0&0\\\\ 0&1&0\\\\ 1&0&1 \\end{pmatrix},\\)若\\(P^TAP^2= \\begin{pmatrix} a+2c&0&c\\\\ 0&b&0\\\\ 2c&0&c \\end{pmatrix},\\)则 \\(A=\\)（ ）",
    options: [{ key: "A", text: "\\(\\begin{pmatrix}c&0&0\\\\0&a&0\\\\0&0&b\\end{pmatrix}\\)" }, { key: "B", text: "\\(\\begin{pmatrix}b&0&0\\\\0&c&0\\\\0&0&a\\end{pmatrix}\\)" }, { key: "C", text: "\\(\\begin{pmatrix}a&0&0\\\\0&b&0\\\\0&0&c\\end{pmatrix}\\)" }, { key: "D", text: "\\(\\begin{pmatrix}c&0&0\\\\0&b&0\\\\0&0&a\\end{pmatrix}\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】由于 P T A P 2 = ​ a + 2 c 0 2 c ​ 0 b 0 ​ c 0 c ​ ​ ，所以 A = ( P T ) − 1 ​ a + 2 c 0 2 c ​ 0 b 0 ​ c 0 c ​ ​ ( P 2 ) − 1 代入矩阵得： A = ​ 1 0 0 ​ 0 1 0 ​ − 1 0 1 ​ ​ ​ a + 2 c 0 2 c ​ 0 b 0 ​ c 0 c ​ ​ ​ 1 0 − 1 ​ 0 1 0 ​ 0 0 1 ​ ​ = ​ a 0 0 ​ 0 b 0 ​ 0 0 c ​ ​ 因此，正确答案为 C。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(A\\) 为 4 阶矩阵，\\(A^*\\) 为 \\(A\\) 的伴随矩阵，若 \\(A(A-A^*)=0,\\) 且 \\(A\\ne A^*\\)，则 \\(r(A)\\) 可能为（ ）",
    options: [{ key: "A", text: "\\(0\\) 或 \\(1\\)" }, { key: "B", text: "\\(1\\) 或 \\(3\\)" }, { key: "C", text: "\\(2\\) 或 \\(3\\)" }, { key: "D", text: "\\(1\\) 或 \\(2\\)" }],
    answer: ["D"],
    explain: "正确答案： D 首先， A 不可逆且 A  = O ，否则 A = A ∗ 矛盾。 于是 A A ∗ = ∣ A ∣ E = O ，即 A 2 = O ，所以 r ( A ) + r ( A ) ≤ 4 ⇒ r ( A ) ≤ 2 。 当 r ( A ) = 1 时，取 A = ​ 0 0 0 0 ​ 0 0 0 0 ​ 0 0 0 0 ​ 1 0 0 0 ​ ​ 满足题意。 当 r ( A )=2 时，例如可取 A=[[0,0,1,0],[0,0,0,1],[0,0,0,0],[0,0,0,0]] 。此时 A 2 =0，且 A * =0，同样满足题设。因此 r ( A ) 的可能取值恰为 1 或 2。"
  }),
  base(10, 'k-math-019', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(A,B\\) 为 2 阶矩阵，且 \\(AB=BA\\)，则“\\(A\\) 有两个不相等的特征值”是“\\(B\\) 可对角化”的（ ）",
    options: [{ key: "A", text: "充分必要条件" }, { key: "B", text: "充分不必要条件" }, { key: "C", text: "必要不充分条件" }, { key: "D", text: "既不充分也不必要条件" }],
    answer: ["B"],
    explain: "正确答案： B 如果 α 是 A 的特征值 λ 对应的特征向量，即 A α = λ α ，那么 A B α = B A α = λ B α 。若 B α = 0 ，则 α 是 B 的特征值0对应的特征向量；若 B α  = 0 ，则 B α 是 A 的特征值 λ 对应的特征向量，因 λ 是一重特征值，故存在常数 μ 使得 B α = μα ，说明 α 是 B 的特征向量。若 A 有两个不相等的特征值，则有两个线性无关的特征向量，从而 B 也有两个线性无关的特征向量， B 可对角化。反之，取 A = B = E ， B 可对角化，但 A 有两个相同的特征值，因此选B."
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）曲线 \\(y^2=x\\) 在点 \\((0,0)\\) 处的曲率圆方程为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 ( x − 2 1 ​ ) 2 + y 2 = 4 1 ​ 【",
    referenceAnswer: "【答案】 ( x − 2 1 ​ ) 2 + y 2 = 4 1 ​ 【解析】 将曲线看作函数 x = y 2 ，那么曲线在点 ( 0 , 0 ) 处的曲率为 K = [ 1 + ( x ′ ( y ) ) 2 ] 2 3 ​ ∣ x ′′ ( y ) ∣ ​ ​ y = 0 ​ = ( 1 + 4 y 2 ) 2 3 ​ 2 ​ ​ y = 0 ​ = 2 , 于是该点处的曲率半径为 R = K 1 ​ = 2 1 ​ 。由于曲线在 ( 0 , 0 ) 处与 y 轴相切，曲率中心位于切线的法线上。在该点处，法线方向沿 x 轴正向，因此曲率中心为 ( 2 1 ​ , 0 ) ，曲率圆的方程为 ( x − 2 1 ​ ) 2 + y 2 = 4 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设 \\(f(x,y)=2x^3-9x^2-6y^4+12x+24y,\\) 其极值点是 \\(\\underline{\\qquad}\\)。",
    answerText: "】 (1,1) 【",
    referenceAnswer: "【答案】 (1,1) 【解析】 先求一阶偏导： f x =6 x 2 −18 x +12=6( x −1)( x −2)， f y =24(1− y 3 )。令 f x = f y =0，得到两个驻点 (1,1) 与 (2,1)。二阶偏导数为 f xx ′′ ​ = 12 x − 18 , f x y ′′ ​ = 0 , f yy ′′ ​ = − 72 y 2 当 ( x , y ) = ( 1 , 1 ) 时, A = f xx ′′ ​ ( 1 , 1 ) = − 6 B = f x y ′′ ​ ( 1 , 1 ) = 0 ,\nC= f yy ′′ ​ ( 1 , 1 ) = − 72 ,此时 A C − B 2 > 0 ，所以 (1,1) 是极大值点。 当 ( x , y ) = ( 2 , 1 ) 时, A = f xx ′′ ​ ( 2 , 1 ) = 6 , B = f x y ′′ ​ ( 2 , 1 ) = 0 C= f yy ′′ ​ ( 2 , 1 ) = − 72 ，那么 A C − B 2 < 0 ，所以 (2,1) 不是极值点。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知微分方程 \\(y'=\\frac1{(x+y)^2},\\) 满足 \\(y(1)=0\\) 的解为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 y = arctan ( x + y ) − 4 π ​ 【",
    referenceAnswer: "【答案】 y = arctan ( x + y ) − 4 π ​ 【解析】 令 u = x + y ，则 y = u − x ，两边对 x 求导得 y ′ = u ′ − 1 。 代入原方程得： u ′ − 1 = u 2 1 ​ 整理得： d x d u ​ = 1 + u 2 1 ​ = u 2 u 2 + 1 ​ 分离变量得： u 2 + 1 u 2 ​ d u = d x 两边积分： ∫ u 2 + 1 u 2 ​ d u = ∫ d x 左边可化为： ∫ ( 1 − u 2 + 1 1 ​ ) d u = u − arctan u 因此： u − arctan u = x + C 代回 u = x + y 得： x + y − arctan ( x + y ) = x + C 化简得： y = arctan ( x + y ) − C 由初始条件 y ( 1 ) = 0 ，代入得： 0 = arctan ( 1 + 0 ) − C = arctan 1 − C = 4 π ​ − C 解得 C = 4 π ​ 。 因此原方程的解为： y = arctan ( x + y ) − 4 π ​ 或写作隐式形式： y = arctan ( x + y ) − 4 π ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）函数 \\(f(x)=x^2(e^x+1),\\) 求 \\(f^{(5)}(1)=\\underline{\\qquad}.\\)",
    answerText: "】 31e 【",
    referenceAnswer: "【答案】 31e 【解析】 由莱布尼茨公式容易得到 f ( 5 ) ( x ) = ( e x + 1 ) 5 x 2 + 5 ( e x + 1 ) ( 4 ) ⋅ 2 x + 10 ( e x + 1 ) ( 3 ) ⋅ 2 = ( x 2 + 10 x + 20 ) e x , 于是 f ( 5 ) ( 1 ) = 31 e",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）某物体以速度 \\(v(t)=t+k\\sin\\pi t\\) 作直线运动，若它从 \\(t=0\\) 到 \\(t=3\\) 的时间段内平均速度为 \\(\\dfrac52\\)，则 \\(k=\\underline{\\qquad}.\\)",
    answerText: "】 2 3 π ​ 【",
    referenceAnswer: "【答案】 2 3 π ​ 【解析】 由函数的平均值公式可得 3 ∫ 0 3 ​ t + k sin π t d t ​ = 2 5 ​ 解得 k = 2 3 π ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设\\(\\alpha_1=\\begin{pmatrix}a\\\\1\\\\-1\\\\1\\end{pmatrix},\\; \\alpha_2=\\begin{pmatrix}1\\\\1\\\\b\\\\a\\end{pmatrix},\\; \\alpha_3=\\begin{pmatrix}1\\\\a\\\\-1\\\\1\\end{pmatrix}.\\)若 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 线性相关，且其中任意两个向量均线性无关，则 \\(ab=\\underline{\\qquad}.\\)",
    answerText: "】 -4 【",
    referenceAnswer: "【答案】 -4 【解析】 首先由 α 1 ​ 、 α 3 ​ 线性无关可知 a  = 1 。对向量组 ( α 1 ​ , α 2 ​ , α 3 ​ ) 进行初等行变换可得： ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ = ​ a 1 − 1 1 ​ 1 1 b a ​ 1 a − 1 1 ​ ​ → ​ 1 1 − 1 a ​ 1 a b 1 ​ a 1 − 1 1 ​ ​ → ​ 1 0 0 0 ​ 1 a − 1 b + 1 1 − a ​ a 1 − a a − 1 1 − a 2 ​ ​ → ​ 1 0 0 0 ​ 1 1 b + 1 1 ​ a − 1 a − 1 1 + a ​ ​ → ​ 1 0 0 0 ​ 1 1 0 0 ​ a − 1 − a a + b a + 2 ​ ​ ​ 由条件有 r ( α 1 ​ , α 2 ​ , α 3 ​ ) = 2 ，于是 a + 2 = 0 ， a + b = 0 ，即 a = − 2 ， b = 2 。 此时 α 1 ​ 、 α 2 ​ 、 α 3 ​ 两两线性无关，于是 ab = − 4 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知平面有界区域 \\(D\\) 位于第一象限，由曲线 \\(xy=\\frac13,\\; xy=3\\) 与直线 \\(y=\\frac13x,\\; y=3x\\) 围成，计算 \\(\\iint_D(1+x-y)\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 3 8 ​ ln 3 【解析】 设平面有界区域 D 位于第一象限，由曲线 x y = 3 1 ​ , x y = 3 与直线 y = 3 1 ​ x , y = 3 x 围成，计算 ∬ D ​ ( 1 + x − y ) d x d y 。 【解析】积分区域关于直线 y = x 对称，由轮换对称性有 ∬ D ​ x d x d y = ∬ D ​ y d x d y ，于是 ∬ D ​ ( 1 + x − y ) d x d y ​ = ∬ D ​ d x d y = ∫ a r c t a n 3 1 ​ a r c t a n 3 ​ d θ ∫ s i n θ c o s θ 3 ​ ​ 3 s i n θ c o s θ 1 ​ ​ ​ r d r = 2 1 ​ ∫ a r c t a n 3 1 ​ a r c t a n 3 ​ ( sin θ cos θ 3 ​ − 3 sin θ cos θ 1 ​ ) d θ = 3 8 ​ ∫ a r c t a n 3 1 ​ a r c t a n 3 ​ sin 2 θ 1 ​ d θ = 3 4 ​ ln ∣ csc 2 θ − cot 2 θ ∣ ​ a r c t a n 3 1 ​ a r c t a n 3 ​ = 3 8 ​ ln 3 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知 \\(y(x)\\) 满足 \\(x^2y''+xy'-9y=0,\\) 且 \\(y(1)=2,\\ y'(1)=6\\)。(1)利用变换 \\(x=e^t\\) 将上述方程化为常系数线性方程，并求 \\(y(x)\\)；(2)计算 \\(\\int_1^2y(x)\\sqrt{4-x^2}\\,dx.\\)",
    referenceAnswer: "【答案】 (1) y = 2 x 3 (2) 5 22 ​ 3 ​ 【解析】 (1) 由于 x = e t ，则 t = ln x ，于是 d x d y ​ = d t d y ​ ⋅ d x d t ​ = x 1 ​ d t d y ​ , d x 2 d 2 y ​ = d x d ​ ( x 1 ​ d t d y ​ ) = − x 2 1 ​ d t d y ​ + x 1 ​ d t 2 d 2 y ​ ⋅ x 1 ​ = x 2 1 ​ ( d t 2 d 2 y ​ − d t d y ​ ) . 代入原方程可得 d t 2 d 2 y ​ − d t d y ​ + d t d y ​ − 9 y = d t 2 d 2 y ​ − 9 y = 0 , 于是方程的通解为 y = C 1 ​ e 3 t + C 2 ​ e − 3 t = C 1 ​ x 3 + C 2 ​ x − 3 . 代入 y ∣ x = 1 ​ = 2 ， y ′ ∣ x = 1 ​ = 6 可得 C 1 ​ = 2 ， C 2 ​ = 0 ，所以 y = 2 x 3 . (2) ∫ 1 2 ​ y ( x ) 4 − x 2 ​ d x = ∫ 1 2 ​ 2 x 3 4 − x 2 ​ d x = ∫ 1 2 ​ x 2 4 − x 2 ​ d ( x 2 ) . 令 t =√(4− x 2 )，则 x 2 =4− t 2 ， d ( x 2 )=−2 t dt 。当 x =1,2 时， t =√3,0，因此原积分化为 −∫ √3 0 (4− t 2 )· t ·2 t dt =2∫ 0 √3 (4 t 2 − t 4 ) dt =22√3/5。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设 \\(t>0\\)，平面有界区域 \\(D\\) 由曲线 \\(y=\\sqrt{x}e^{-x},\\) 直线 \\(x=t,\\ x=2t\\) 及 \\(x\\) 轴围成，\\(D\\) 绕 \\(x\\) 轴旋转一周所得旋转体的体积为 \\(V(t)\\)，求 \\(V(t)\\) 的最大值。",
    referenceAnswer: "【答案】 V ( t ) 的最大值为 ( 16 l n 2 ​ + 64 3 ​ ) π 【解析】 由题意可知 V ( t ) = π ∫ t 2 t ​ x e − 2 x d x ，那么 V ′ ( t ) = 4 π t e − 4 t − π t e − 2 t = π t e − 2 t ( 4 e − 2 t − 1 ) { > 0 , < 0 , ​ 0 < t < ln 2 t > ln 2 ​ 这说明 V ( t ) 在 ( 0 , ln 2 ] 上单调递增，在 [ ln 2 , + ∞ ) 上单调递减，所以 V ( t ) 的最大值为 V ( ln 2 ) = π ∫ l n 2 2 l n 2 ​ x e − 2 x d x = ( 16 ln 2 ​ + 64 3 ​ ) π",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知 \\(f(u,v)\\) 具有二阶连续偏导数，且 \\(g(x,y)=f(2x+y,3x-y)\\) 满足 \\(\\frac{\\partial^2g}{\\partial x^2}+\\frac{\\partial^2g}{\\partial x\\partial y}-6\\frac{\\partial^2g}{\\partial y^2}=1.\\) (1)求 \\(\\dfrac{\\partial^2f}{\\partial u\\partial v}\\)；(2)若\\(\\frac{\\partial f(u,0)}{\\partial u}=ue^{-u},\\; f(0,v)=\\frac1{50}v^2-1,\\)求 \\(f(u,v)\\) 的表达式。",
    referenceAnswer: "【答案】 (1) ∂ u ∂ v ∂ 2 f ​ = 25 1 ​ (2) f ( u , v ) = 25 1 ​ uv − e − u ( u + 1 ) + 50 1 ​ v 2 【解析】 （1）由于 g ( x , y ) = f ( 2 x + y , 3 x − y ) ，由复合函数求导可得： ∂ x ∂ g ​ ∂ y ∂ g ​ ∂ x 2 ∂ 2 g ​ ∂ x ∂ y ∂ 2 g ​ ∂ y 2 ∂ 2 g ​ ​ = 2 f 1 ′ ​ + 3 f 2 ′ ​ , = f 1 ′ ​ − f 2 ′ ​ , = 4 f 11 ′′ ​ + 12 f 12 ′′ ​ + 9 f 22 ′′ ​ , = 2 f 11 ′′ ​ + f 12 ′′ ​ − 3 f 22 ′′ ​ , = f 11 ′′ ​ − 2 f 12 ′′ ​ + f 22 ′′ ​ . ​ 代入原方程可得 25 f 12 ′′ ​ = 1 ，因此 ∂ u ∂ v ∂ 2 f ​ = 25 1 ​ 。 （2）由于 ∂ u ∂ v ∂ 2 f ​ = 25 1 ​ ，所以 f u ′ ​ ( u , v ) = 25 1 ​ v + g ( u ) 。又由 f u ′ ​ ( u , 0 ) = u e − u ⇒ g ( u ) = u e − u ⇒ f u ′ ​ ( u , v ) = 25 1 ​ v + u e − u , 可得 f ( u , v ) = 25 1 ​ uv − e − u ( u + 1 ) + h ( v ) 。又 f ( 0 , v ) = 50 1 ​ v 2 − 1 ，则 h ( v ) = 50 1 ​ v 2 ，因此 f ( u , v ) = 25 1 ​ uv − e − u ( u + 1 ) + 50 1 ​ v 2 .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(f(x)\\) 具有二阶导数，且 \\(f'(0)=f'(1),\\; |f''(x)|\\le1.\\) 证明：(1)当 \\(x\\in(0,1)\\) 时，\\(\\left|f(x)-f(0)(1-x)-f(1)x\\right|\\le\\frac{x(1-x)}2;\\) ( 2 ) \\(\\left|\\int_0^1f(x)\\,dx-\\frac{f(0)+f(1)}2\\right|\\le\\frac1{12}.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 证(1)令 g ( x ) = f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x − 2 x ( 1 − x ) ​ , x ∈ [ 0 , 1 ] ，那么 g ( 0 ) = g ( 1 ) = 0 且 g ′ ( x ) = f ′ ( x ) + f ( 0 ) − f ( 1 ) − 2 1 ​ + x , g ′′ ( x ) = f ′′ ( x ) + 1 ≥ 0 , 如果存在 x 0 ​ ∈ ( 0 , 1 ) ，使得 g ( x 0 ​ ) > 0 ，那么由拉格朗日中值定理可知,存在 ξ 1 ​ ∈ ( 0 , x 0 ​ ) , ξ 2 ​ ∈ ( x 0 ​ , 1 ) ，使得 g ′ ( ξ 1 ​ ) = x 0 ​ g ( x 0 ​ ) − g ( 0 ) ​ > 0 , g ′ ( ξ 2 ​ ) = 1 − x 0 ​ g ( 1 ) − g ( x 0 ​ ) ​ < 0 , 进一步存在 ξ ∈ ( ξ 1 ​ , ξ 2 ​ ) 使得 g ′′ ( ξ ) = ξ 2 ​ − ξ 1 ​ g ′ ( ξ 2 ​ ) − g ′ ( ξ 1 ​ ) ​ < 0 矛盾,因此对任意 x ∈ ( 0 , 1 ) 都有 g ( x ) ≤ 0 即 f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ≤ 2 x ( 1 − x ) ​ 同理还有 f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ≥ − 2 x ( 1 − x ) ​ , 综合起来即 ∣ f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ∣ ≤ 2 x ( 1 − x ) ​ , x ∈ [ 0 , 1 ] (2)将不等式 − 2 x ( 1 − x ) ​ ≤ f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ≤ 2 x ( 1 − x ) ​ 在 [0,1] 上积分，注意到 ∫ 0 1 ​ 2 x ( 1 − x ) ​ d x = 12 1 ​ ,且 ∫ 0 1 ​ [ f ( x ) − f ( 0 ) ( 1 − x ) − f ( 1 ) x ] d x = ∫ 0 1 ​ f ( x ) d x − 2 f ( 0 ) + f ( 1 ) ​ , 于是 − 12 1 ​ ≤ ∫ 0 1 ​ f ( x ) d x − 2 f ( 0 ) + f ( 1 ) ​ ≤ 12 1 ​ , 即 ​ ∫ 0 1 ​ f ( x ) d x − 2 f ( 0 ) + f ( 1 ) ​ ​ ≤ 12 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知 \\(A=\\begin{pmatrix} 0&1&a\\\\ 1&0&1 \\end{pmatrix}, \\; B=\\begin{pmatrix} 1&1\\\\ 1&1\\\\ b&2 \\end{pmatrix}.\\) \\(Ax=0\\) 的解均为 \\(B^Tx=0\\) 的解，但 \\(Ax=0\\) 与 \\(B^Tx=0\\) 不同解。（1）求 \\(a,b\\) 的值；（2）求正交变换 \\(x=Qy\\)，使 \\(f(x_1,x_2,x_3)=x^TBAx\\) 化为标准形。",
    referenceAnswer: "【答案】 (1) a = 1 , b = 2 . (2) 正交矩阵 Q = ​ 2 ​ 1 ​ − 2 ​ 1 ​ 0 ​ 3 ​ 1 ​ 3 ​ 1 ​ − 3 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ ​ ，将二次型 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 化为标准形 6 y 3 2 ​ . 【解析】 (1) 由题意可知 A x = 0 与 ( A B T ​ ) x = 0 同解，于是 r ( A B T ​ ) = r ( A ) = 2 对 ( A B T ​ ) 进行初等行变换可得 ( A B T ​ ) ​ = ​ 0 1 1 1 ​ 1 0 1 1 ​ a 1 b 2 ​ ​ → ​ 1 0 0 0 ​ 1 − 1 1 0 ​ 2 − 1 a b − 2 ​ ​ → ​ 1 0 0 0 ​ 1 1 0 0 ​ 2 1 a − 1 b − 2 ​ ​ ​ 所以 a = 1 ， b = 2 。 (2) 首先有 B A = ​ 1 1 2 ​ 1 1 2 ​ ​ ( 0 1 ​ 1 0 ​ 1 1 ​ ) = ​ 1 1 2 ​ 1 1 2 ​ 2 2 4 ​ ​ 是一个对称矩阵，所以二次型的矩阵 C = ​ 1 1 2 ​ 1 1 2 ​ 2 2 4 ​ ​ 且 r ( C ) = 1 ，那么 C 的特征值为 λ 1 ​ = λ 2 ​ = 0 ， λ 3 ​ = tr C = 6 。 对 λ 1 ​ = λ 2 ​ = 0 ，解方程组 C x = 0 得两个正交的单位特征向量 α 1 ​ = 2 ​ 1 ​ ( 1 , − 1 , 0 ) T , α 2 ​ = 3 ​ 1 ​ ( 1 , 1 , − 1 ) T 对 λ 3 ​ = 6 ，解方程组 ( 6 E − C ) x = 0 得单位特征向量 α 3 ​ = 6 ​ 1 ​ ( 1 , 1 , 2 ) T 令 Q = ( α 1 ​ , α 2 ​ , α 3 ​ ) = ​ 2 ​ 1 ​ − 2 ​ 1 ​ 0 ​ 3 ​ 1 ​ 3 ​ 1 ​ − 3 ​ 1 ​ ​ 6 ​ 1 ​ 6 ​ 1 ​ 6 ​ 2 ​ ​ ​ 则 Q 为正交矩阵，作正交变换 x = Q y ，则二次型 f ( x 1 ​ , x 2 ​ , x 3 ​ ) 化为标准形 6 y 3 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2024_math2 = {
  id: P, year: Y,
  title: '2024 年全国硕士研究生招生考试 数学（二）',
  short: '2024 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2024_math2.length,
  qids: questions2024_math2.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
