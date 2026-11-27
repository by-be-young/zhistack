const P = 'paper-2023-math2'
const Y = 2023
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2023-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2023 考研数学（二）真题',
  ...extra
})

export const questions2023_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "曲线 \\(y=x\\ln\\left(e+\\frac1{x-1}\\right)\\) 的斜渐近线方程为（ ）",
    options: [{ key: "A", text: "\\(y=x+e\\)" }, { key: "B", text: "\\(y=x+\\dfrac1e\\)" }, { key: "C", text: "\\(y=x\\)" }, { key: "D", text: "\\(y=x-\\dfrac1e\\)" }],
    answer: ["B"],
    explain: "正确答案： B （方法一） 首先计算斜率 k ： k = x → ∞ lim ​ x y ​ = x → ∞ lim ​ ln ( e + x − 1 1 ​ ) = 1. 接着计算截距 b ： b ​ = x → ∞ lim ​ ( y − k x ) = x → ∞ lim ​ x [ ln ( e + x − 1 1 ​ ) − 1 ] = x → ∞ lim ​ x [ ln ( 1 + e ( x − 1 ) 1 ​ ) ] = x → ∞ lim ​ e ( x − 1 ) x ​ = e 1 ​ , ​ 其中 lim x → ∞ ​ { x ln [ 1 + e ( x − 1 ) 1 ​ ] − e 1 ​ } = 0 。 因此，所求斜渐近线方程为 y = x + e 1 ​ 。 （方法二） 将函数 y 展开： y = x ln ( e + x − 1 1 ​ ) = x + x ln [ 1 + e ( x − 1 ) 1 ​ ] = x + e 1 ​ + { x ln [ 1 + e ( x − 1 ) 1 ​ ] − e 1 ​ } ,"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "函数\\(f(x)=\\begin{cases} \\dfrac1{\\sqrt{1+x^2}},&x\\le0,\\\\ (x+1)\\cos x,&x>0 \\end{cases}\\)的一个原函数为（ ）",
    options: [{ key: "A", text: "\\(F(x)=\\begin{cases} \\ln(\\sqrt{1+x^2}-x),&x\\le0,\\\\ (x+1)\\cos x-\\sin x,&x>0 \\end{cases}\\)" }, { key: "B", text: "\\(F(x)=\\begin{cases} \\ln(\\sqrt{1+x^2}-x)+1,&x\\le0,\\\\ (x+1)\\cos x-\\sin x,&x>0 \\end{cases}\\)" }, { key: "C", text: "\\(F(x)=\\begin{cases} \\ln(\\sqrt{1+x^2}+x),&x\\le0,\\\\ (x+1)\\sin x+\\cos x,&x>0 \\end{cases}\\)" }, { key: "D", text: "\\(F(x)=\\begin{cases} \\ln(\\sqrt{1+x^2}+x)+1,&x\\le0,\\\\ (x+1)\\sin x+\\cos x,&x>0 \\end{cases}\\)" }],
    answer: ["D"],
    explain: "正确答案： D ∫ f ( x ) d x ​ = { ∫ 1 + x 2 ​ 1 ​ d x , ∫ ( x + 1 ) cos x d x , ​ x ≤ 0 , x > 0 , ​ = { ln ( x + x 2 + 1 ​ ) + C 1 ​ , ( x + 1 ) sin x + cos x + C 2 ​ , ​ x ≤ 0 , x > 0. ​ ​ 由于 f ( x ) 为连续函数，所以 C 1 ​ = 1 + C 2 ​ 。 ∫ f ( x ) d x = { ln ( x + x 2 + 1 ​ ) + 1 + C , ( x + 1 ) sin x + cos x + C , ​ x ≤ 0 , x > 0. ​ (D) 为正确答案。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知 \\(\\{x_n\\},\\{y_n\\}\\) 满足 \\(x_1=y_1=\\frac12,\\; x_{n+1}=\\sin x_n,\\; y_{n+1}=y_n^2\\quad(n=1,2,\\ldots),\\) 则当 \\(n\\to\\infty\\) 时（ ）",
    options: [{ key: "A", text: "\\(x_n\\) 是 \\(y_n\\) 的高阶无穷小" }, { key: "B", text: "\\(y_n\\) 是 \\(x_n\\) 的高阶无穷小" }, { key: "C", text: "\\(x_n\\) 与 \\(y_n\\) 是等价无穷小" }, { key: "D", text: "\\(x_n\\) 与 \\(y_n\\) 是同阶但不等价的无穷小" }],
    answer: ["B"],
    explain: "正确答案： B 由递推关系可知， { x n ​ } 、 { y n ​ } 均为单调减数列，且为无穷小。由 y 1 ​ = 2 1 ​ ， y n + 1 ​ = y n 2 ​ 可知， y 2 ​ = ( 2 1 ​ ) 2 , y 3 ​ = ( 2 1 ​ ) 2 2 , ⋯ , y n + 1 ​ = ( 2 1 ​ ) 2 n = ( 4 1 ​ ) 2 n − 1 由于 sin x > π 2 ​ x （当 0 < x < 2 π ​ 时），有 x n + 1 ​ > π 2 ​ x n ​ > ( π 2 ​ ) 2 x n − 1 ​ > ⋯ > ( π 2 ​ ) n x 1 ​ = 2 1 ​ ( π 2 ​ ) n 故 0 < x n + 1 ​ y n + 1 ​ ​ < 2 1 ​ ( π 2 ​ ) n ( 4 1 ​ ) 2 n − 1 ​ → 0 ( 当 n → ∞ 时 ) 因此， y n ​ 是 x n ​ 的高阶无穷小。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "若微分方程 \\(y''+ay'+by=0\\) 的解在 \\((-\\infty,+\\infty)\\) 上有界，则（ ）",
    options: [{ key: "A", text: "\\(a<0,\\ b>0\\)" }, { key: "B", text: "\\(a>0,\\ b>0\\)" }, { key: "C", text: "\\(a=0,\\ b>0\\)" }, { key: "D", text: "\\(a=0,\\ b<0\\)" }],
    answer: ["C"],
    explain: "正确答案： C 微分方程的特征方程为 λ 2 + aλ + b = 0 ，特征根为 λ 1 , 2 ​ = 2 − a ± a 2 − 4 b ​ ​ 。 若 a 2 − 4 b > 0 ，特征方程有两个实根且 λ 1 ​  = λ 2 ​ ，微分方程的解为 y = C 1 ​ e λ 1 ​ x + C 2 ​ e λ 2 ​ x ，在 ( − ∞ , + ∞ ) 上无界。 若 a 2 − 4 b = 0 ，则 λ 1 ​ = λ 2 ​ = − 2 a ​ ，微分方程的解为 y = ( C 1 ​ + C 2 ​ x ) e − 2 a ​ x ，在 ( − ∞ , + ∞ ) 上无界。 若 a 2 − 4 b < 0 ，则 λ 1 , 2 ​ = 2 − a ± 4 b − a 2 ​ i ​ ，微分方程的解为 y = e − 2 a ​ x ( C 1 ​ cos 2 4 b − a 2 ​ ​ x + C 2 ​ sin 2 4 b − a 2 ​ ​ x ) 。若此解在 ( − ∞ , + ∞ ) 上有界，则 a = 0 ，进而 b > 0 。 因此答案选 (C)。 【评注】本题还可从选项出发，验证只有 (C) 符合条件。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(y=f(x)\\) 由\\(\\begin{cases} x=2t+|t|,\\\\ y=|t|\\sin t \\end{cases}\\)确定，则（ ）",
    options: [{ key: "A", text: "\\(f(x)\\) 连续，\\(f'(0)\\) 不存在" }, { key: "B", text: "\\(f'(0)\\) 存在，\\(f'(x)\\) 在 \\(x=0\\) 处不连续" }, { key: "C", text: "\\(f'(x)\\) 连续，\\(f''(0)\\) 不存在" }, { key: "D", text: "\\(f''(0)\\) 存在，\\(f''(x)\\) 在 \\(x=0\\) 处不连续" }],
    answer: ["C"],
    explain: "正确答案： C 当 t ≥ 0 时， { x = 3 t y = t sin t ​ 即 y = 3 x ​ sin 3 x ​ ； 当 t < 0 时， { x = t y = − t sin t ​ 即 y = − x sin x 。 因此， y = { 3 x ​ sin 3 x ​ , − x sin x , ​ x ≥ 0 x < 0 ​ 计算一阶导数： y ′ ( x ) = ⎩ ⎨ ⎧ ​ 3 1 ​ sin 3 x ​ + 9 x ​ cos 3 x ​ , 0 , − sin x − x cos x , ​ x > 0 , x = 0 , x < 0 ​ 由 y + ′ ​ ( 0 ) = x → 0 + lim ​ x 3 x ​ sin 3 x ​ − 0 ​ = 0 , y − ′ ​ ( 0 ) = x → 0 − lim ​ x − x sin x − 0 ​ = 0 , 故 f ′ ( 0 ) = 0 ，且 f ′ ( x ) 在 x = 0 处连续。 计算二阶导数： y + ′′ ​ ( 0 ) = x → 0 + lim ​ x 3 1 ​ sin 3 x ​ + 9 x ​ cos 3 x ​ − 0 ​ = 9 2 ​ , y − ′′ ​ ( 0 ) = x → 0 − lim ​ x − sin x − x cos x − 0 ​ = − 2. 左右二阶导数不相等，故 f ′′ ( 0 ) 不存在。 【评注】泰勒公式判断导数存在性： y = { 3 x ​ sin 3 x ​ = 9 x 2 ​ + ⋯ , x ≥ 0 , − x sin x = − x 2 + ⋯ , x < 0 ​ 故 y + ′′ ​ ( 0 ) = 9 2 ​ ， y − ′′ ​ ( 0 ) = − 2 ，因此 y ′′ ( 0 ) 不存在。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "若函数 \\(f(\\alpha)=\\int_2^{+\\infty}\\frac1{x(\\ln x)^{\\alpha+1}}\\,dx\\) 在 \\(\\alpha=\\alpha_0\\) 处取得最小值，则 \\(\\alpha_0=\\)（ ）",
    options: [{ key: "A", text: "\\(-\\dfrac1{\\ln(\\ln2)}\\)" }, { key: "B", text: "\\(-\\ln(\\ln2)\\)" }, { key: "C", text: "\\(\\dfrac1{\\ln2}\\)" }, { key: "D", text: "\\(\\ln2\\)" }],
    answer: ["A"],
    explain: "正确答案： A 广义积分 ∫ 2 + ∞ ​ x ( l n x ) α + 1 d x ​ 当 α > 0 时收敛，所以 f ( α ) 的定义域为 α > 0 。 当 α > 0 时， f ( α ) = ∫ 2 + ∞ ​ x ( ln x ) α + 1 d x ​ = ∫ 2 + ∞ ​ ( ln x ) α + 1 d ln x ​ = − α ( ln x ) α 1 ​ ​ 2 + ∞ ​ = α ( ln 2 ) α 1 ​ . 记 g ( α ) = α ( ln 2 ) α ，则 g ′ ( α ) = ( ln 2 ) α + α ( ln 2 ) α ln ( ln 2 ) = ( ln 2 ) α [ 1 + α ln ( ln 2 ) ] . 令 g ′ ( α ) = 0 ，得 α = − l n ( l n 2 ) 1 ​ 。 当 0 < α < − l n ( l n 2 ) 1 ​ 时， g ′ ( α ) > 0 ；当 α > − l n ( l n 2 ) 1 ​ 时， g ′ ( α ) < 0 。 所以 g ( α ) 在 α 0 ​ = − l n ( l n 2 ) 1 ​ 点取得最大值，从而 f ( α ) 在 α 0 ​ = − l n ( l n 2 ) 1 ​ 点取得最小值。"
  }),
  base(7, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x)=(x^2+a)e^x,\\) 若 \\(f(x)\\) 没有极值点，但曲线 \\(y=f(x)\\) 有拐点，则 \\(a\\) 的取值范围是（ ）",
    options: [{ key: "A", text: "\\([0,1)\\)" }, { key: "B", text: "\\([1,+\\infty)\\)" }, { key: "C", text: "\\([1,2)\\)" }, { key: "D", text: "\\([2,+\\infty)\\)" }],
    answer: ["C"],
    explain: "正确答案： C 由 f ( x ) = ( x 2 + a ) e x 可知， f ′ ( x ) = ( x 2 + 2 x + a ) e x , f ′′ ( x ) = ( x 2 + 4 x + a + 2 ) e x . 要使得 f ( x ) 没有极值点，二次多项式 x 2 + 2 x + a 的判别式 Δ = 4 − 4 a ≤ 0 ，即 a ≥ 1 。 要使得 f ( x ) 有拐点，二次多项式 x 2 + 4 x + ( a + 2 ) 的判别式 Δ = 16 − 4 ( a + 2 ) > 0 ，即 a < 2 。 所以 a ∈ [ 1 , 2 ) 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(A,B\\) 为 \\(n\\) 阶可逆矩阵，\\(E\\) 为 \\(n\\) 阶单位矩阵，\\(M^*\\) 为矩阵 \\(M\\) 的伴随矩阵，则 \\(\\begin{pmatrix}A&E\\\\0&B\\end{pmatrix}^*=（ ）\\)",
    options: [{ key: "A", text: "\\(\\begin{pmatrix} |A|B^*&-B^*A^*\\\\ 0&|B|A^* \\end{pmatrix}\\)" }, { key: "B", text: "\\(\\begin{pmatrix} |A|B^*&-A^*B^*\\\\ 0&|B|A^* \\end{pmatrix}\\)" }, { key: "C", text: "\\(\\begin{pmatrix} |B|A^*&-B^*A^*\\\\ 0&|A|B^* \\end{pmatrix}\\)" }, { key: "D", text: "\\(\\begin{pmatrix} |B|A^*&-A^*B^*\\\\ 0&|A|B^* \\end{pmatrix}\\)" }],
    answer: ["D"],
    explain: "正确答案： D （方法一）分别令 (A)、(B)、(C)、(D) 选项中的矩阵为 I 1 ​ 、 I 2 ​ 、 I 3 ​ 、 I 4 ​ 。 [ A O ​ E B ​ ] I 4 ​ ​ = [ A O ​ E B ​ ] [ ∣ B ∣ A ∗ O ​ − A ∗ B ∗ ∣ A ∣ B ∗ ​ ] = [ ∣ A ∣∣ B ∣ E O ​ − ∣ A ∣ B ∗ + ∣ A ∣ B ∗ ∣ A ∣∣ B ∣ E ​ ] = [ ∣ A ∣∣ B ∣ E O ​ O ∣ A ∣∣ B ∣ E ​ ] ​ 因此，选项 (D) 是正确的。 （方法二） [ A O ​ E B ​ ] ∗ ​ = ​ A O ​ E B ​ ​ [ A O ​ E B ​ ] − 1 = ∣ A ∣∣ B ∣ [ A − 1 O ​ − A − 1 B − 1 B − 1 ​ ] = [ ∣ A ∣∣ B ∣ A − 1 O ​ − ∣ A ∣∣ B ∣ A − 1 B − 1 ∣ A ∣∣ B ∣ B − 1 ​ ] = [ ∣ B ∣ A ∗ O ​ − A ∗ B ∗ ∣ A ∣ B ∗ ​ ] ​"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "二次型 \\(f(x_1,x_2,x_3)=(x_1+x_2)^2+(x_1+x_3)^2-4(x_2-x_3)^2\\) 的规范形为（ ）",
    options: [{ key: "A", text: "\\(y_1^2+y_2^2\\)" }, { key: "B", text: "\\(y_1^2-y_2^2\\)" }, { key: "C", text: "\\(y_1^2+y_2^2-4y_3^2\\)" }, { key: "D", text: "\\(y_1^2+y_2^2-y_3^2\\)" }],
    answer: ["B"],
    explain: "正确答案： B （方法一）配方法 = = = = = ​ ( x 1 ​ + x 2 ​ ) 2 + ( x 1 ​ + x 3 ​ ) 2 − 4 ( x 2 ​ − x 3 ​ ) 2 x 1 2 ​ + 2 x 1 ​ x 2 ​ + x 2 2 ​ + x 1 2 ​ + 2 x 1 ​ x 3 ​ + x 3 2 ​ − 4 x 2 2 ​ + 8 x 2 ​ x 3 ​ − 4 x 3 2 ​ 2 x 1 2 ​ − 3 x 2 2 ​ − 3 x 3 2 ​ + 2 x 1 ​ x 2 ​ + 2 x 1 ​ x 3 ​ + 8 x 2 ​ x 3 ​ 2 [ ( x 1 ​ + 2 1 ​ x 2 ​ + 2 1 ​ x 3 ​ ) 2 − 4 1 ​ x 2 2 ​ − 4 1 ​ x 3 2 ​ − 2 1 ​ x 2 ​ x 3 ​ ] − 3 x 2 2 ​ − 3 x 3 2 ​ + 8 x 2 ​ x 3 ​ 2 ( x 1 ​ + 2 1 ​ x 2 ​ + 2 1 ​ x 3 ​ ) 2 − 2 7 ​ x 2 2 ​ − 2 7 ​ x 3 2 ​ + 7 x 2 ​ x 3 ​ 2 ( x 1 ​ + 2 1 ​ x 2 ​ + 2 1 ​ x 3 ​ ) 2 − 2 7 ​ ( x 2 ​ − x 3 ​ ) 2 ​ 正确答案为（B）。 （方法二）合同变换法 二次型对应的对称矩阵为 A = ​ 2 1 1 ​ 1 − 3 4 ​ 1 4 − 3 ​ ​ 通过合同变换可得正惯性指数为 1 ，负惯性指数为 1 ，故选（B）。 （方法三）特征值法 计算 ∣ λ E − A ∣ = λ ( λ + 7 ) ( λ − 3 ) = 0 特征值为 0 、 3 、 − 7 ，正惯性指数为 1 ，负惯性指数为 1 ，故选（B）。 （方法四）可逆线性变换 令 ⎩ ⎨ ⎧ ​ z 1 ​ = x 1 ​ + x 2 ​ , z 2 ​ = x 1 ​ + x 3 ​ , z 3 ​ = x 3 ​ , ​ 则 f = − 3 z 1 2 ​ − 3 z 2 2 ​ + 8 z 1 ​ z 2 ​ 其对应的矩阵特征值为 1 、 − 7 、 0 ，正惯性指数为 1 ，负惯性指数为 1 ，故选（B）。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知向量\\(\\alpha_1=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix},\\quad \\alpha_2=\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix},\\quad \\beta_1=\\begin{pmatrix}2\\\\5\\\\9\\end{pmatrix},\\quad \\beta_2=\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}.\\)若 \\(\\gamma\\) 既可由 \\(\\alpha_1,\\alpha_2\\) 线性表示，也可由 \\(\\beta_1,\\beta_2\\) 线性表示，则 \\(\\gamma=\\)（ ）",
    options: [{ key: "A", text: "\\(k\\begin{pmatrix}3\\\\3\\\\4\\end{pmatrix},\\ k\\in\\mathbb R\\)" }, { key: "B", text: "\\(k\\begin{pmatrix}3\\\\5\\\\10\\end{pmatrix},\\ k\\in\\mathbb R\\)" }, { key: "C", text: "\\(k\\begin{pmatrix}-1\\\\1\\\\2\\end{pmatrix},\\ k\\in\\mathbb R\\)" }, { key: "D", text: "\\(k\\begin{pmatrix}1\\\\5\\\\8\\end{pmatrix},\\ k\\in\\mathbb R\\)" }],
    answer: ["D"],
    explain: "正确答案： D 设 γ = x 1 ​ α 1 ​ + x 2 ​ α 2 ​ = x 3 ​ β 1 ​ + x 4 ​ β 2 ​ ，即 x 1 ​ α 1 ​ + x 2 ​ α 2 ​ − x 3 ​ β 1 ​ − x 4 ​ β 2 ​ = 0 。 对矩阵 [ α 1 ​ , α 2 ​ , − β 1 ​ , − β 2 ​ ] 进行行初等变换，得到行最简形： ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 3 − 1 1 ​ ​ 方程组的解为： x = x 4 ​ ​ − 3 1 − 1 1 ​ ​ , x 4 ​ ∈ R 则： γ = − 3 x 4 ​ α 1 ​ + x 4 ​ α 2 ​ = x 4 ​ ​ − 3 − 6 − 9 ​ ​ + x 4 ​ ​ 2 1 1 ​ ​ = k ​ 1 5 8 ​ ​ 其中 k = − x 4 ​ ∈ R 。 正确答案为 (D)。"
  }),
  base(11, 'k-math-002', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）当 \\(x\\to0\\) 时，函数 \\(f(x)=ax+bx^2+\\ln(1+x)\\) 与 \\(g(x)=e^{x^2}-\\cos x\\) 是等价无穷小，则 \\(ab=\\underline{\\qquad}.\\)",
    answerText: "】 -2 【",
    referenceAnswer: "【答案】 -2 【解析】 由题设知： 1 ​ = x → 0 lim ​ e x 2 − cos x a x + b x 2 + ln ( 1 + x ) ​ = x → 0 lim ​ [ 1 + x 2 + o ( x 2 ) ] − [ 1 − 2 x 2 ​ + o ( x 2 ) ] a x + b x 2 + x − 2 x 2 ​ + o ( x 2 ) ​ = x → 0 lim ​ 2 3 ​ x 2 + o ( x 2 ) ( a + 1 ) x + ( b − 2 1 ​ ) x 2 + o ( x 2 ) ​ , ​ 则 a + 1 = 0 且 b − 2 1 ​ = 2 3 ​ ，解得 a = − 1 ， b = 2 ，故 ab = − 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）曲线 \\(y=\\int_{-\\sqrt3}^{x}\\sqrt{3-t^2}\\,dt\\) 的弧长为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 3 ​ + 3 4 ​ π 【",
    referenceAnswer: "【答案】 3 ​ + 3 4 ​ π 【解析】 函数 y = ∫ − 3 ​ x ​ 3 − t 2 ​ d t 的定义域为 [ − 3 ​ , 3 ​ ] 。 所求弧长为： s = ∫ − 3 ​ 3 ​ ​ 1 + y ′2 ​ d x = ∫ − 3 ​ 3 ​ ​ 4 − x 2 ​ d x 由于被积函数为偶函数，可得： s = 2 ∫ 0 3 ​ ​ 4 − x 2 ​ d x 令 x = 2 sin t ，则： s = 2 ∫ 0 3 π ​ ​ 4 cos 2 t d t = 8 ∫ 0 3 π ​ ​ cos 2 t d t 利用恒等式 cos 2 t = 2 1 + c o s 2 t ​ ，得： s = 4 ∫ 0 3 π ​ ​ ( 1 + cos 2 t ) d t 计算积分： s = 4 [ t + 2 sin 2 t ​ ] 0 3 π ​ ​ = 4 ( 3 π ​ + 2 sin 3 2 π ​ ​ ) = 4 ( 3 π ​ + 4 3 ​ ​ ) = 3 ​ + 3 4 ​ π 因此，弧长为 3 ​ + 3 4 ​ π 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设函数 \\(z=z(x,y)\\) 由 \\(e^z+xz=2x-y\\) 确定，则 \\(\\left.\\frac{\\partial^2z}{\\partial x^2}\\right|_{(1,1)}=\\underline{\\qquad}.\\)",
    answerText: "】 \\(-\\dfrac{3}{2}\\) 【",
    referenceAnswer: "【答案】 \\(-\\dfrac{3}{2}\\) 【解析】 当 \\(x=y=1\\) 时，由 \\(e^z+z=1\\) 得 \\(z=0\\)。 对方程 \\(e^z+xz=2x-y\\) 关于 \\(x\\) 求偏导： \\[\n(e^z+x)z_x+z=2.\n\\] 代入 \\((x,y,z)=(1,1,0)\\)，得 \\(2z_x=2\\)，所以 \\(z_x(1,1)=1\\)。 再对上式关于 \\(x\\) 求偏导： \\[\ne^z z_x^2+(e^z+x)z_{xx}+2z_x=0.\n\\] 代入 \\((x,y,z)=(1,1,0)\\) 及 \\(z_x(1,1)=1\\)，得 \\[\n1+2z_{xx}+2=0,\n\\] 故 \\[\n\\left.\\frac{\\partial^2 z}{\\partial x^2}\\right|_{(1,1)}=-\\frac32.\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）曲线 \\(3x^3=y^5+2y^3\\) 在 \\(x=1\\) 对应点处的法线斜率为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 \\(-\\dfrac{11}{9}\\) 【",
    referenceAnswer: "【答案】 \\(-\\dfrac{11}{9}\\) 【解析】 将 \\(x=1\\) 代入 \\(3x^3=y^5+2y^3\\)，得 \\(y=1\\)。 两端对 \\(x\\) 求导： \\[\n9x^2=(5y^4+6y^2)y'.\n\\] 在 \\((1,1)\\) 处，切线斜率为 \\[\ny'(1)=\\frac{9}{11}.\n\\] 因此法线斜率为切线斜率的负倒数： \\[\nk_n=-\\frac{1}{y'(1)}=-\\frac{11}{9}.\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-003', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设连续函数 \\(f(x)\\) 满足 \\(f(x+2)-f(x)=x,\\qquad \\int_0^2f(x)\\,dx=0,\\) 则 \\(\\int_1^3f(x)\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 \\(\\dfrac12\\) 【",
    referenceAnswer: "【答案】 \\(\\dfrac12\\) 【解析】 将积分拆开，并对第二段作平移代换： \\[\n\\begin{aligned}\n\\int_1^3 f(x)\\,dx\n&=\\int_1^2 f(x)\\,dx+\\int_2^3 f(x)\\,dx\\\\\n&=\\int_1^2 f(x)\\,dx+\\int_0^1 f(t+2)\\,dt.\n\\end{aligned}\n\\] 由 \\(f(t+2)-f(t)=t\\)，有 \\(f(t+2)=f(t)+t\\)。因此 \\[\n\\begin{aligned}\n\\int_1^3 f(x)\\,dx\n&=\\int_1^2 f(x)\\,dx+\\int_0^1[f(t)+t]dt\\\\\n&=\\int_0^2 f(x)\\,dx+\\int_0^1 t\\,dt\\\\\n&=0+\\frac12=\\frac12.\n\\end{aligned}\n\\]",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知线性方程组\\(\\begin{cases} ax_1+x_3=1,\\\\ x_1+ax_2+x_3=0,\\\\ x_1+2x_2+ax_3=0,\\\\ ax_1+bx_2=2 \\end{cases}\\)有解，其中 \\(a,b\\) 为常数。若\\(\\begin{vmatrix} a&0&1\\\\ 1&a&1\\\\ 1&2&a \\end{vmatrix}=4,\\)则\\(\\begin{vmatrix} 1&a&1\\\\ 1&2&a\\\\ a&b&0 \\end{vmatrix}=\\underline{\\qquad}.\\)",
    answerText: "】 8 【",
    referenceAnswer: "【答案】 8 【解析】 已知题中方程组有解，所以 r ( A ) = r ( B ) ，其中 A = ​ a 1 1 a ​ 0 a 2 b ​ 1 1 a 0 ​ ​ , B = ​ a 1 1 a ​ 0 a 2 b ​ 1 1 a 0 ​ 1 0 0 2 ​ ​ . 又因为 ​ a 1 1 ​ 0 a 2 ​ 1 1 a ​ ​ = 4  = 0 , 所以 r ( A ) = 3 ，从而 r ( B ) = 3 ， ∣ B ∣ = 0 。 计算行列式： ∣ B ∣ = ​ a 1 1 a ​ 0 a 2 b ​ 1 1 a 0 ​ 1 0 0 2 ​ ​ = 4 − ​ 1 1 a ​ a 2 b ​ 1 a 0 ​ ​ + 2 ​ a 1 1 ​ 0 a 2 ​ 1 1 a ​ ​ = 8 − ​ 1 1 a ​ a 2 b ​ 1 a 0 ​ ​ = 0. 所以 ​ 1 1 a ​ a 2 b ​ 1 a 0 ​ ​ = 8.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设曲线 \\(L:y=y(x)\\ (x>e)\\) 经过点 \\((e^2,0)\\)，\\(L\\) 上任一点 \\(P(x,y)\\) 到 \\(y\\) 轴的距离等于该点处的切线在 \\(y\\) 轴上的截距。(1)求 \\(y(x)\\)；(2)在 \\(L\\) 上求一点，使该点处的切线与两坐标轴所围三角形的面积最小，并求此最小面积。",
    referenceAnswer: "【答案】 (1) y ( x ) = x ( 2 − ln x ) (2) 所求点为 ( e 2 3 ​ , 2 1 ​ e 2 3 ​ ) ，最小面积为 e 3 【解析】 (1) 设曲线 y = y ( x ) 在点 ( x , y ) 处的切线方程为 Y − y = y ′ ( X − x ) , 则在 y 轴上的截距为 y − x y ′ ，从而有 x = y − x y ′ , 即 y ′ − x 1 ​ y = − 1. 解此方程得 y ( x ) = x ( C − ln x ) . 由 y ( e 2 ) = 0 可知， C = 2 ，则 y ( x ) = x ( 2 − ln x ) . (2) 设曲线 y = x ( 2 − ln x ) 在点 ( x , y ) 处的切线方程为 Y − y = y ′ ( X − x ) , 令 X = 0 得 Y = y − x y ′ = x , 令 Y = 0 得 X = ln x − 1 x ​ . 该切线与两坐标轴所围三角形的面积为 S ( x ) = 2 1 ​ X Y = 2 ( ln x − 1 ) x 2 ​ . 则 S ′ ( x ) = 2 ( ln x − 1 ) 2 x ( 2 ln x − 3 ) ​ . 令 S ′ ( x ) = 0 得驻点 x = e 2 3 ​ ，且当 e < x < e 2 3 ​ 时 S ′ ( x ) < 0 ，当 x > e 2 3 ​ 时 S ′ ( x ) > 0 ，故 S ( x ) 在 x = e 2 3 ​ 处取最小值，最小值为 S ( e 2 3 ​ ) = e 3 . 因而所求点为 ( e 2 3 ​ , 2 1 ​ e 2 3 ​ ) , 所围三角形的最小面积为 e 3 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）求函数 \\(f(x,y)=xe^{\\cos y}+\\frac{x^2}{2}\\) 的极值。",
    referenceAnswer: "【答案】 函数在点 ( − e , kπ ) （其中 k 为偶数）处取极小值 − 2 e 2 ​ 。 【解析】 由 { f x ′ ​ = e c o s y + x = 0 f y ′ ​ = − x sin y e c o s y = 0 ​ 得驻点为 ( − e ( − 1 ) k , kπ ) ，其中 k = 0 , ± 1 , ⋯ 。 可计算： A = f xx ′′ ​ = 1 , B = f x y ′′ ​ = − sin y e c o s y , C = f yy ′′ ​ = − x ( cos y − sin 2 y ) e c o s y . 在驻点处，判别式为 Δ = B 2 − A C = − e ( − 1 ) k ⋅ ( − 1 ) k e ( − 1 ) k . 当 k 为奇数时， Δ = e − 2 > 0 ，不是极值点； 当 k 为偶数时， Δ = − e 2 < 0 ，且 A = 1 > 0 ，此时函数取极小值： f ( − e , kπ ) = − 2 e 2 ​ , ( k ) .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知平面区域 \\(D=\\left\\{(x,y)\\mid 0\\le y\\le\\frac1{x\\sqrt{1+x^2}},\\ x\\ge1\\right\\}.\\) (1)求 \\(D\\) 的面积；（2）求 \\(D\\) 绕 \\(x\\) 轴旋转所成旋转体的体积。",
    referenceAnswer: "【答案】 (1) ln ( 1 + 2 ​ ) (2) π ( 1 − 4 π ​ ) 【解析】 (1) 所求面积为 S ​ = ∫ 1 + ∞ ​ x 1 + x 2 ​ d x ​ = ∫ 1 + ∞ ​ x 2 1 + ( x 1 ​ ) 2 ​ d x ​ = − ∫ 1 + ∞ ​ 1 + ( x 1 ​ ) 2 ​ d ( x 1 ​ ) ​ = − ln ( x 1 ​ + 1 + x 2 1 ​ ​ ) ​ 1 + ∞ ​ = ln ( 1 + 2 ​ ) . ​ (2) 所求旋转体体积为 V ​ = π ∫ 1 + ∞ ​ x 2 ( 1 + x 2 ) d x ​ = π ∫ 1 + ∞ ​ ( x 2 1 ​ − 1 + x 2 1 ​ ) d x = − π ( x 1 ​ + arctan x ) ​ 1 + ∞ ​ = π ( 1 − 4 π ​ ) . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设平面有界区域 \\(D\\) 位于第一象限，由曲线 \\(x^2+y^2-xy=1,\\; x^2+y^2-xy=2\\) 与直线 \\(y=\\sqrt3x,\\; y=0\\) 围成，计算 \\(\\iint_D\\frac1{3x^2+y^2}\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 24 3 ​ l n 2 ​ π 【解析】 曲线 x 2 + y 2 − x y = 1 和 x 2 + y 2 − x y = 2 的极坐标方程为： r 1 2 ​ = 1 − cos θ sin θ 1 ​ , r 2 2 ​ = 1 − cos θ sin θ 2 ​ . 则 ∬ D ​ 3 x 2 + y 2 1 ​ d x d y = ∫ 0 3 π ​ ​ d θ ∫ 1 − c o s θ s i n θ 1 ​ ​ 1 − c o s θ s i n θ 2 ​ ​ ​ r 2 ( 3 cos 2 θ + sin 2 θ ) 1 ​ ⋅ r d r . 计算内层积分： ∫ 1 − c o s θ s i n θ 1 ​ ​ 1 − c o s θ s i n θ 2 ​ ​ ​ r ( 3 cos 2 θ + sin 2 θ ) 1 ​ d r = 3 cos 2 θ + sin 2 θ 1 ​ ⋅ ln 2 ​ . 于是 ∬ D ​ 3 x 2 + y 2 1 ​ d x d y = ∫ 0 3 π ​ ​ ln 2 ​ ⋅ 3 cos 2 θ + sin 2 θ 1 ​ d θ = 2 1 ​ ln 2 ⋅ ∫ 0 3 π ​ ​ 3 + tan 2 θ d tan θ ​ . 进一步计算： 2 1 ​ ln 2 ⋅ ∫ 0 3 π ​ ​ 3 + tan 2 θ d tan θ ​ = 2 3 ​ ln 2 ​ ⋅ arctan 3 ​ tan θ ​ ​ 0 3 π ​ ​ = 24 3 ​ ln 2 ​ π .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(f(x)\\) 在 \\([-a,a]\\) 上具有二阶连续导数。证明：(1)若 \\(f(0)=0\\)，则存在 \\(\\xi\\in(-a,a)\\)，使得 \\(f''(\\xi)=\\frac1{a^2}[f(a)+f(-a)];\\) （2）若 \\(f(x)\\) 在 \\((-a,a)\\) 内取得极值，则存在 \\(\\eta\\in(-a,a)\\)，使得 \\(|f''(\\eta)|\\ge\\frac1{2a^2}|f(a)-f(-a)|.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 （Ⅰ）由 \\(f(0)=0\\)，分别在 \\(0\\) 点对 \\(f(a)\\) 与 \\(f(-a)\\) 使用带拉格朗日余项的二阶泰勒公式，存在 \\(\\xi_1\\in(0,a)\\)、\\(\\xi_2\\in(-a,0)\\)，使 \\[\n\\begin{aligned}\nf(a)&=f'(0)a+\\frac12 f''(\\xi_1)a^2,\\\\\nf(-a)&=-f'(0)a+\\frac12 f''(\\xi_2)a^2.\n\\end{aligned}\n\\] 两式相加： \\[\nf(a)+f(-a)=\\frac{a^2}{2}\\bigl[f''(\\xi_1)+f''(\\xi_2)\\bigr].\n\\] 由于 \\(f''\\) 连续，\\(\\dfrac{f''(\\xi_1)+f''(\\xi_2)}2\\) 介于 \\(f''\\) 在 \\([\\xi_2,\\xi_1]\\) 上的最小值与最大值之间，所以存在 \\(\\xi\\in( -a,a )\\)，使 \\[\nf''(\\xi)=\\frac{f''(\\xi_1)+f''(\\xi_2)}2\n=\\frac{f(a)+f(-a)}{a^2}.\n\\] （Ⅱ）设 \\(f\\) 在 \\(x_0\\in(-a,a)\\) 处取得极值，则 \\(f'(x_0)=0\\)。分别对 \\(f(a)\\)、\\(f(-a)\\) 在 \\(x_0\\) 处使用二阶泰勒公式，存在 \\(\\eta_1\\in(x_0,a)\\)、\\(\\eta_2\\in(-a,x_0)\\)，使 \\[\n\\begin{aligned}\nf(a)&=f(x_0)+\\frac12 f''(\\eta_1)(a-x_0)^2,\\\\\nf(-a)&=f(x_0)+\\frac12 f''(\\eta_2)(a+x_0)^2.\n\\end{aligned}\n\\] 两式相减并取绝对值： \\[\n\\begin{aligned}\n|f(a)-f(-a)|\n&\\le \\frac12\\Bigl(|f''(\\eta_1)|(a-x_0)^2+|f''(\\eta_2)|(a+x_0)^2\\Bigr).\n\\end{aligned}\n\\] 令 \\(M=\\max\\{|f''(\\eta_1)|,|f''(\\eta_2)|\\}\\)，并在 \\(\\eta_1,\\eta_2\\) 中取一点 \\(\\eta\\) 使 \\(|f''(\\eta)|=M\\)。由于 \\(|x_0|<a\\)， \\[\n\\begin{aligned}\n|f(a)-f(-a)|\n&\\le \\frac{M}{2}\\bigl[(a-x_0)^2+(a+x_0)^2\\bigr]\\\\\n&=M(a^2+x_0^2)\\le 2a^2M.\n\\end{aligned}\n\\] 因此存在 \\(\\eta\\in(-a,a)\\)，使 \\[\n|f''(\\eta)|\\ge \\frac{1}{2a^2}|f(a)-f(-a)|.\n\\]",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设矩阵 \\(A\\) 满足：对任意 \\(x_1,x_2,x_3\\)，均有\\(A\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\end{pmatrix} = \\begin{pmatrix} x_1+x_2+x_3\\\\ 2x_1-x_2+x_3\\\\ x_2-x_3 \\end{pmatrix}.\\)( 1 )求 \\(A\\)；(2)求可逆矩阵 \\(P\\) 与对角矩阵 \\(\\Lambda\\)，使得 \\(P^{-1}AP=\\Lambda.\\)",
    referenceAnswer: "【答案】 (1) A = ​ 1 2 0 ​ 1 − 1 1 ​ 1 1 − 1 ​ ​ (2) 特征值： λ 1 ​ = − 1 , λ 2 ​ = − 2 , λ 3 ​ = 2 ；特征向量： ξ 1 ​ = ​ − 1 0 2 ​ ​ , ξ 2 ​ = ​ 0 1 − 1 ​ ​ , ξ 3 ​ = ​ 4 3 1 ​ ​ ；令 P = ​ − 1 0 2 ​ 0 1 − 1 ​ 4 3 1 ​ ​ ，则 P − 1 A P = ​ − 1 0 0 ​ 0 − 2 0 ​ 0 0 2 ​ ​ 。 【解析】 (1) A = A E = A ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ ​ = ​ 1 2 0 ​ 1 − 1 1 ​ 1 1 − 1 ​ ​ 。 (2) 令 ∣ A − λ E ∣ = ​ 1 − λ 2 0 ​ 1 − 1 − λ 1 ​ 1 1 − 1 − λ ​ ​ = − ( λ + 2 ) ( λ − 2 ) ( λ + 1 ) = 0 ，求得 A 的特征值为 λ 1 ​ = − 1 ， λ 2 ​ = − 2 ， λ 3 ​ = 2 。 先求解方程组 ( A + E ) x = 0 ，其中 A + E = ​ 2 2 0 ​ 1 0 1 ​ 1 1 0 ​ ​ 。 经行变换得 ​ 1 0 0 ​ 0 1 0 ​ 2 1 ​ 0 0 ​ ​ ，通解为 x = k 1 ​ ( − 1 , 0 , 2 ) T ，取属于 λ 1 ​ = − 1 的特征向量为 ξ 1 ​ = ( − 1 , 0 , 2 ) T 。 再求解 ( A + 2 E ) x = 0 ，其中 A + 2 E = ​ 3 2 0 ​ 1 1 1 ​ 1 1 1 ​ ​ 。 经行变换得 ​ 1 0 0 ​ 0 1 0 ​ 0 1 0 ​ ​ ，通解为 x = k 2 ​ ( 0 , 1 , − 1 ) T ，取属于 λ 2 ​ = − 2 的特征向量为 ξ 2 ​ = ( 0 , 1 , − 1 ) T 。 最后求解 ( A − 2 E ) x = 0 ，其中 A − 2 E = ​ − 1 2 0 ​ 1 − 3 1 ​ 1 1 − 3 ​ ​ 。 经行变换得 ​ 1 0 0 ​ 0 1 0 ​ − 4 − 3 0 ​ ​ ，通解为 x = k 3 ​ ( 4 , 3 , 1 ) T ，取属于 λ 3 ​ = 2 的特征向量为 ξ 3 ​ = ( 4 , 3 , 1 ) T 。 令 P = [ ξ 1 ​ , ξ 2 ​ , ξ 3 ​ ] = ​ − 1 0 2 ​ 0 1 − 1 ​ 4 3 1 ​ ​ ，则 P − 1 A P = ​ − 1 0 0 ​ 0 − 2 0 ​ 0 0 2 ​ ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2023_math2 = {
  id: P, year: Y,
  title: '2023 年全国硕士研究生招生考试 数学（二）',
  short: '2023 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2023_math2.length,
  qids: questions2023_math2.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
