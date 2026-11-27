const P = 'paper-2026-math2'
const Y = 2026
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2026-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2026 考研数学（二）真题',
  ...extra
})

export const questions2026_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知当 \\(x\\to0\\) 时，\\(ax^2+bx+\\arcsin x\\) 与 \\(\\sqrt[3]{1+x^2}-1\\) 是等价无穷小，则（ ）",
    options: [{ key: "A", text: "\\(a=\\dfrac13,\\ b=-1\\)" }, { key: "B", text: "\\(a=\\dfrac13,\\ b=1\\)" }, { key: "C", text: "\\(a=\\dfrac23,\\ b=-1\\)" }, { key: "D", text: "\\(a=\\dfrac23,\\ b=1\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 当 x → 0 时，两函数等价无穷小意味着 x → 0 lim ​ 3 1 + x 2 ​ − 1 a x 2 + b x + arcsin x ​ = 1. 首先，对分母展开： 3 1 + x 2 ​ − 1 = ( 1 + x 2 ) 3 1 ​ − 1 ∼ 3 1 ​ x 2 . 对分子展开： arcsin x = x + 6 x 3 ​ + O ( x 5 ) , 因此分子为 a x 2 + b x + x + 6 x 3 ​ + ⋯ = ( b + 1 ) x + a x 2 + 6 x 3 ​ + ⋯ . 为使分子与分母同阶（均以 x 2 为主导），必须消去 x 项，即 b + 1 = 0 , 得 b = − 1 。 代入 b = − 1 ，分子化为 a x 2 + 6 x 3 ​ + ⋯ , 分母为 3 1 ​ x 2 , 比值为 3 1 ​ x 2 a x 2 ​ + ⋯ = 3 a + ⋯ . 令极限为 1 ，即 3 a = 1 , 得 a = 3 1 ​ 。 因此 a = 3 1 ​ , b = − 1 ，对应选项 A。"
  }),
  base(2, 'k-math-016', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(y_1(x),y_2(x)\\) 是某二阶非齐次线性微分方程的两个特解。若常数 \\(\\lambda,\\mu\\) 使得 \\(2\\lambda y_1(x)+\\mu y_2(x)\\) 是该方程的解，\\(\\lambda y_1(x)-2\\mu y_2(x)\\) 是该方程对应的齐次方程的解，则（ ）",
    options: [{ key: "A", text: "\\(\\lambda=\\dfrac15,\\ \\mu=\\dfrac25\\)" }, { key: "B", text: "\\(\\lambda=\\dfrac25,\\ \\mu=\\dfrac15\\)" }, { key: "C", text: "\\(\\lambda=\\dfrac14,\\ \\mu=\\dfrac12\\)" }, { key: "D", text: "\\(\\lambda=\\dfrac12,\\ \\mu=\\dfrac14\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 设非齐次线性微分方程为 L [ y ] = f ( x ) , 其中 L 为线性微分算子， f ( x )  = 0 。由于 y 1 ​ ( x ) 和 y 2 ​ ( x ) 是非齐次方程的特解，有 L [ y 1 ​ ] = f ( x ) , L [ y 2 ​ ] = f ( x ) . 对于 u ( x ) = 2 λ y 1 ​ ( x ) + μ y 2 ​ ( x ) , 由其为非齐次方程的解，得 L [ u ] = ( 2 λ + μ ) f ( x ) = f ( x ) , 即 2 λ + μ = 1. 对于 v ( x ) = λ y 1 ​ ( x ) − 2 μ y 2 ​ ( x ) , 由其为对应齐次方程的解，得 L [ v ] = ( λ − 2 μ ) f ( x ) = 0 , 即 λ − 2 μ = 0. 联立方程 { 2 λ + μ = 1 , λ − 2 μ = 0 , ​ 解得 λ = 2 μ ，代入得 5 μ = 1 , 故 μ = 5 1 ​ , λ = 5 2 ​ , 对应选项 B。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(z=z(x,y)\\) 由方程 \\(x-az=e^{y+az}\\) 确定，其中 \\(a\\) 是非零常数，则（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}-\\frac{\\partial z}{\\partial y}=\\frac1a\\)" }, { key: "B", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=\\frac1a\\)" }, { key: "C", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}-\\frac{\\partial z}{\\partial y}=-\\frac1a\\)" }, { key: "D", text: "\\(\\displaystyle \\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=-\\frac1a\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 令\n\\[F(x,y,z)=x-az-e^{y+az}=0.\\]\n则\n\\[F_x=1,\\qquad F_y=-e^{y+az},\\qquad F_z=-a\\bigl(1+e^{y+az}\\bigr).\\]\n由隐函数求导公式，\n\\[z_x=-\\frac{F_x}{F_z}=\\frac{1}{a(1+e^{y+az})},\\qquad\nz_y=-\\frac{F_y}{F_z}=-\\frac{e^{y+az}}{a(1+e^{y+az})}.\\]\n因此\n\\[z_x-z_y=\\frac{1+e^{y+az}}{a(1+e^{y+az})}=\\frac1a.\\]\n故选 A。"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设线密度为 \\(1\\) 的细直棒的两个端点分别位于点 \\((-1,0)\\) 和点 \\((1,0)\\) 处，质量为 \\(m\\) 的质点位于点 \\((0,1)\\) 处，\\(G\\) 为引力常量，则该细直棒对该质点的引力大小为（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle \\int_0^1\\frac{2Gmx}{(x^2+1)^{1/2}}\\,dx\\)" }, { key: "B", text: "\\(\\displaystyle \\int_0^1\\frac{2Gm}{(x^2+1)^{1/2}}\\,dx\\)" }, { key: "C", text: "\\(\\displaystyle \\int_0^1\\frac{2Gmx}{(x^2+1)^{3/2}}\\,dx\\)" }, { key: "D", text: "\\(\\displaystyle \\int_0^1\\frac{2Gm}{(x^2+1)^{3/2}}\\,dx\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 取细棒上位于 \\((x,0)\\) 的质量微元 \\(dm=dx\\)。它到质点 \\((0,1)\\) 的距离为\n\\[r=\\sqrt{x^2+1}.\\]\n引力微元的大小为 \\(dF=Gm\\,dx/r^2\\)。由于细棒关于 \\(y\\) 轴对称，水平方向的分量相互抵消，只需叠加竖直分量。竖直方向的方向余弦为 \\(1/r\\)，故\n\\[dF_y=\\frac{Gm}{(x^2+1)^{3/2}}\\,dx.\\]\n于是引力大小为\n\\[F=\\int_{-1}^{1}\\frac{Gm}{(x^2+1)^{3/2}}\\,dx\n=2\\int_0^1\\frac{Gm}{(x^2+1)^{3/2}}\\,dx.\\]\n这正是选项 D。"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在区间 \\([-1,1]\\) 上有定义，则（ ）",
    options: [{ key: "A", text: "当 \\(f(x)\\) 在 \\((-1,0)\\) 单调递减、在 \\((0,1)\\) 单调递增时，\\(f(0)\\) 是极小值" }, { key: "B", text: "当 \\(f(0)\\) 是极小值时，\\(f(x)\\) 在 \\((-1,0)\\) 单调递减、在 \\((0,1)\\) 单调递增" }, { key: "C", text: "当 \\(f(x)\\) 的图形在 \\([-1,1]\\) 上是凹的时，\\(\\displaystyle\\frac{f(x)-f(1)}{x-1}\\) 在 \\([-1,1)\\) 上单调递增" }, { key: "D", text: "当 \\(\\displaystyle\\frac{f(x)-f(1)}{x-1}\\) 在 \\([-1,1)\\) 上单调递增时，\\(f(x)\\) 的图形在 \\([-1,1]\\) 上是凹的" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】 选项 A 错误。即使函数在 ( − 1 , 0 ) 上单调递减且在 ( 0 , 1 ) 上单调递增，如果 f ( x ) 在 x = 0 处不连续，则 f ( 0 ) 可能不是极小值。例如：定义 f ( x ) = ⎩ ⎨ ⎧ ​ − x , 1 , x , ​ x < 0 x = 0 x > 0 ​ 此时 f ( 0 ) = 1 大于两侧邻近值，不是极小值。 选项 B 错误。如果 f ( 0 ) 是极小值且 f ( x ) 在 ( − 1 , 0 ) 上单调递减，并不能推出 f ( x ) 在 ( 0 , 1 ) 上单调递增。反例：设 f ( x ) = ⎩ ⎨ ⎧ ​ − x , 0 , x 2 sin x 1 ​ , ​ x < 0 x = 0 x > 0 ​ （补充定义 f ( 0 ) = 0 ）。此时 f ( 0 ) 是极小值，但 f ( x ) 在 ( 0 , 1 ) 上振荡，不单调。 选项 C 和 D 涉及函数图形的凹凸性，此处“凹的”指的是图形凹向上，即函数为凸函数。对于凸函数，差商 x − 1 f ( x ) − f ( 1 ) ​ 关于 x 单调递增，因此 C 正确。 选项 D 错误。差商单调递增不能推出函数是凸函数。反例：令 f ( x ) = x 4 − x 3 ，则 f ( 1 ) = 0 ，计算得 x − 1 f ( x ) − f ( 1 ) ​ = x 3 在 [ − 1 , 1 ) 上单调递增，但 f ′′ ( x ) = 12 x 2 − 6 x 在 x = 0.2 处为负，故 f ( x ) 不是凸函数。 因此正确选项为 C。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数 \\(f(x)=\\int_1^{x^3}\\frac{e^t}{1+t^2}\\,dt,\\) \\(f\\) 的反函数为 \\(g\\)，则（ ）",
    options: [{ key: "A", text: "\\(g(0)=1,\\quad g'(0)=\\dfrac32e\\)" }, { key: "B", text: "\\(g(0)=1,\\quad g'(0)=\\dfrac{2}{3e}\\)" }, { key: "C", text: "\\(g(1)=0,\\quad g'(1)=\\dfrac32e\\)" }, { key: "D", text: "\\(g(1)=0,\\quad g'(1)=\\dfrac{2}{3e}\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 由\n\\[f(x)=\\int_1^{x^3}\\frac{e^t}{1+t^2}\\,dt\\]\n可知 \\(f(1)=0\\)，所以反函数 \\(g\\) 满足 \\(g(0)=1\\)。 对 \\(f\\) 求导时要同时考虑上限 \\(x^3\\) 的导数：\n\\[f'(x)=\\frac{e^{x^3}}{1+x^6}\\cdot 3x^2.\\]\n因此\n\\[f'(1)=\\frac{3e}{2}.\\]\n由反函数求导公式\n\\[g'(0)=\\frac{1}{f'(g(0))}=\\frac{1}{f'(1)}=\\frac{2}{3e}.\\]\n故选 B。"
  }),
  base(7, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设函数 \\(f(x,y)\\) 在区域 \\(D=\\{(x,y)\\mid 0\\le x\\le1,\\ 0\\le y\\le1\\}\\) 上连续，且 \\(f(x,y)=f(y,x)\\)，则 \\(\\iint_D f(x,y)\\,dx\\,dy=（ ）\\)",
    options: [{ key: "A", text: "\\(2\\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sum_{j=n+1-i}^{n} f\\!\\left(\\frac{i}{n},\\frac{j}{n}\\right)\\frac1{n^2}\\)" }, { key: "B", text: "\\(\\frac12\\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\sum_{j=i}^{n} f\\!\\left(\\frac{i}{n},\\frac{j}{n}\\right)\\frac1{n^2}\\)" }, { key: "C", text: "\\(2\\lim_{n\\to\\infty}\\sum_{i=1}^{2n}\\sum_{j=1}^{2n+1-i} f\\!\\left(\\frac{i}{2n},\\frac{j}{2n}\\right)\\frac1{n^2}\\)" }, { key: "D", text: "\\(\\frac12\\lim_{n\\to\\infty}\\sum_{i=1}^{2n}\\sum_{j=1}^{i} f\\!\\left(\\frac{i}{2n},\\frac{j}{2n}\\right)\\frac1{n^2}\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 题目中的区域是单位正方形\n\\[D=[0,1]\\times[0,1].\\]\n令 \\(T=\\{(x,y):0\\le y\\le x\\le1\\}\\)。由于 \\(f(x,y)=f(y,x)\\)，正方形关于直线 \\(y=x\\) 分成的两个三角形上的积分相等，所以\n\\[\\iint_D f(x,y)\\,dx\\,dy=2\\iint_T f(x,y)\\,dx\\,dy.\\] 对选项 D，取网格步长 \\(\\Delta x=\\Delta y=1/(2n)\\)，则\n\\[\\sum_{i=1}^{2n}\\sum_{j=1}^{i}f\\!\\left(\\frac{i}{2n},\\frac{j}{2n}\\right)\\frac{1}{4n^2}\n\\longrightarrow \\iint_T f(x,y)\\,dx\\,dy.\\]\n而选项 D 中的系数满足\n\\[\\frac12\\cdot\\frac1{n^2}=2\\cdot\\frac1{4n^2},\\]\n因此选项 D 的极限恰好等于 \\(2\\iint_T f=\\iint_D f\\)。故选 D。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "单位矩阵经过若干次互换两行得到的矩阵称为置换矩阵。设 \\(A\\) 为 \\(n\\) 阶置换矩阵，\\(A^*\\) 为 \\(A\\) 的伴随矩阵，则（ ）",
    options: [{ key: "A", text: "\\(A^*\\) 为置换矩阵" }, { key: "B", text: "\\(A^{-1}\\) 为置换矩阵" }, { key: "C", text: "\\(A^*=A^{-1}\\)" }, { key: "D", text: "\\(A^*=-A^{-1}\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 置换矩阵是由单位矩阵经过若干次行交换得到的矩阵，其每行每列有且仅有一个元素为1，其余为0。置换矩阵是正交矩阵，满足 A T A = I ，因此其逆矩阵等于转置矩阵，即 A − 1 = A T 。由于 A T 也是一个置换矩阵（对应原排列的逆排列），故 A − 1 总是置换矩阵，选项B正确。 对于伴随矩阵 A ∗ ，有性质 A ∗ = ( det A ) A − 1 。置换矩阵的行列式 det A = ± 1 （偶数次行交换为1，奇数次为-1）。若 det A = 1 ，则 A ∗ = A − 1 = A T ，此时 A ∗ 是置换矩阵；若 det A = − 1 ，则 A ∗ = − A − 1 = − A T ，其元素为0或-1，不符合置换矩阵的定义（元素仅为0和1），故选项A不一定成立。 由 A ∗ = ( det A ) A − 1 可知， A − 1 = A ∗ 当且仅当 det A = 1 ， A − 1 = − A ∗ 当且仅当 det A = − 1 ，而置换矩阵的行列式不一定为1或-1中的特定值，因此选项C和D不一定成立。 综上，只有选项B总是成立。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix} 1&0&1\\\\ 0&0&1\\\\ 1&1&3\\\\ 1&1&1 \\end{pmatrix},\\;C=\\begin{pmatrix} 2&0\\\\ 1&1\\\\ 1&1\\\\ a&b \\end{pmatrix}.\\)若存在矩阵 \\(B\\) 满足 \\(AB=C\\)，则（ ）",
    options: [{ key: "A", text: "\\(a=-1,\\ b=-1\\)" }, { key: "B", text: "\\(a=2,\\ b=2\\)" }, { key: "C", text: "\\(a=-1,\\ b=2\\)" }, { key: "D", text: "\\(a=2,\\ b=-1\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】 矩阵方程 A B = C 有解当且仅当 C 的每一列都是 A 的列向量的线性组合。设 B 为 3 × 2 矩阵，将方程按列分解为两个线性系统： A x = ​ 2 1 1 a ​ ​ 和 A y = ​ 0 1 1 b ​ ​ 。 对第一个系统的增广矩阵进行行简化： ​ 1 0 1 1 ​ 0 0 1 1 ​ 1 1 3 1 ​ 2 1 1 a ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 1 2 1 0 ​ 2 − 1 1 a + 1 ​ ​ 解得 a = − 1 时系统相容。 对第二个系统的增广矩阵进行行简化： ​ 1 0 1 1 ​ 0 0 1 1 ​ 1 1 3 1 ​ 0 1 1 b ​ ​ → ​ 1 0 0 0 ​ 0 1 0 0 ​ 1 2 1 0 ​ 0 1 1 b + 1 ​ ​ 解得 b = − 1 时系统相容。 因此，当 a = − 1 且 b = − 1 时，存在矩阵 B 满足 A B = C ，对应选项 A。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 3 阶矩阵 \\(A,B\\) 满足 \\(AB+BA=A^2+B^2,\\) 且 \\(A\\ne B\\)，则下列结论中错误的是（ ）",
    options: [{ key: "A", text: "\\((A-B)^3=O\\)" }, { key: "B", text: "\\(A-B\\) 只有零特征值" }, { key: "C", text: "\\(A,B\\) 不能都是对角矩阵" }, { key: "D", text: "\\(A-B\\) 只有一个线性无关的特征向量" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】 由\n\\[AB+BA=A^2+B^2\\]\n移项得\n\\[(A-B)^2=A^2-AB-BA+B^2=O.\\]\n又因 \\(A\\ne B\\)，故 \\(M=A-B\\ne O\\)，且 \\(M^2=O\\)。 A：由 \\(M^2=O\\) 立即有 \\(M^3=O\\)，正确。 B：幂零矩阵的特征值全为 0，正确。 C：若 \\(A,B\\) 都是对角矩阵，则 \\(M=A-B\\) 也是对角矩阵；由 \\(M^2=O\\) 可知其每个对角元的平方都为 0，从而 \\(M=O\\)，与 \\(A\\ne B\\) 矛盾。因此 C 正确。 D：由 \\(M^2=O\\) 有 \\(\\operatorname{Im}M\\subseteq\\ker M\\)，所以 \\(\\operatorname{rank}M\\le\\operatorname{nullity}M\\)。又 \\(M\\) 是 3 阶非零矩阵，故 \\(\\operatorname{rank}M=1\\)，\\(\\operatorname{nullity}M=2\\)。于是特征值 0 的特征子空间维数为 2，即有两个线性无关的特征向量。因此“只有一个线性无关的特征向量”错误。 故错误的是 D。"
  }),
  base(11, 'k-math-009', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(p\\) 为常数，若反常积分 \\(\\int_0^{+\\infty}\\frac{\\arctan x}{x^p(x+1)}\\,dx\\) 收敛，则 \\(p\\) 的取值范围是______。",
    answerText: "】 0 < p < 2 【",
    referenceAnswer: "【答案】 0 < p < 2 【解析】 考虑反常积分 ∫ 0 + ∞ ​ x p ( x + 1 ) a r c t a n x ​ d x ，它有两个反常点： x = 0 和 x = + ∞ 。需分别讨论在这两点附近的收敛性。 在 x = 0 附近，当 x → 0 + 时， arctan x ∼ x ，且 x + 1 ∼ 1 ，因此被积函数满足 x p ( x + 1 ) a r c t a n x ​ ∼ x p x ​ = x 1 − p 。积分在 0 附近收敛当且仅当 1 − p > − 1 ，即 p < 2 。 在 x → + ∞ 时， arctan x → 2 π ​ ，且 x + 1 ∼ x ，因此被积函数满足 x p ( x + 1 ) a r c t a n x ​ ∼ x p + 1 π /2 ​ 。积分在无穷远处收敛当且仅当 p + 1 > 1 ，即 p > 0 。 原积分收敛需要两个反常点处同时收敛，因此 p 的取值范围为 0 < p < 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "\\(\\lim_{x\\to0}\\left(\\frac1x-\\frac{\\ln(1+x)}{x\\sin x}\\right)=\\underline{\\qquad}.\\)",
    answerText: "】 2 1 ​ 【",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 首先，将原式合并为单一分数： x → 0 lim ​ ( x 1 ​ − x sin x ln ( 1 + x ) ​ ) = x → 0 lim ​ x sin x sin x − ln ( 1 + x ) ​ . 当 x → 0 时，分子和分母均趋于 0，属于 0 0 ​ 型未定式，可以使用洛必达法则或泰勒展开求解。 使用泰勒展开 在 x = 0 处， sin x = x − 6 x 3 ​ + O ( x 5 ) , ln ( 1 + x ) = x − 2 x 2 ​ + 3 x 3 ​ − 4 x 4 ​ + O ( x 5 ) . 则分子 sin x − ln ( 1 + x ) = ( x − 6 x 3 ​ ) − ( x − 2 x 2 ​ + 3 x 3 ​ − 4 x 4 ​ ) + O ( x 5 ) = 2 x 2 ​ − 2 x 3 ​ + 4 x 4 ​ + O ( x 5 ) . 分母 x sin x = x ( x − 6 x 3 ​ + O ( x 5 ) ) = x 2 − 6 x 4 ​ + O ( x 6 ) . 因此，原式化为 x 2 − 6 x 4 ​ + O ( x 6 ) 2 x 2 ​ − 2 x 3 ​ + 4 x 4 ​ + O ( x 5 ) ​ = 1 − 6 x 2 ​ + O ( x 4 ) 2 1 ​ − 2 x ​ + 4 x 2 ​ + O ( x 3 ) ​ . 当 x → 0 时，极限为 2 1 ​ 。 亦可使用洛必达法则 对分子分母分别求导： 分子导数为 cos x − 1 + x 1 ​ ， 分母导数为 sin x + x cos x 。 代入 x = 0 仍为 0 0 ​ 型，再次求导： 分子导数为 − sin x + ( 1 + x ) 2 1 ​ ， 分母导数为 2 cos x − x sin x 。 代入 x = 0 得 2 1 ​ 。 故极限值为 2 1 ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "曲线 \\(x^2+2\\sqrt3\\,xy+y^2=1\\) 在点 \\((0,1)\\) 处的曲率半径为______。",
    answerText: "】 4 【",
    referenceAnswer: "【答案】 4 【解析】 曲线方程为 x 2 + 2 3 ​ x y + y 2 = 1 ，点 ( 0 , 1 ) 在曲线上。通过隐函数求导求曲率半径。 首先求一阶导数 y ′ ： 对原方程两边对 x 求导，得 2 x + 2 3 ​ ( y + x y ′ ) + 2 y y ′ = 0 , 整理得 ( 2 3 ​ x + 2 y ) y ′ + ( 2 x + 2 3 ​ y ) = 0 , 解得 y ′ = − 3 ​ x + y x + 3 ​ y ​ . 代入点 ( 0 , 1 ) ，得 y ′ = − 3 ​ ⋅ 0 + 1 0 + 3 ​ ⋅ 1 ​ = − 3 ​ . 然后求二阶导数 y ′′ ： 由 y ′ = − 3 ​ x + y x + 3 ​ y ​ ，令 u = x + 3 ​ y ， v = 3 ​ x + y ，则 y ′ = − v u ​ 。求导得 y ′′ = − v 2 u ′ v − u v ′ ​ , 其中 u ′ = 1 + 3 ​ y ′ , v ′ = 3 ​ + y ′ . 在点 ( 0 , 1 ) 处， y ′ = − 3 ​ ，计算得 u ′ v ′ u ​ = 1 + 3 ​ ( − 3 ​ ) = − 2 , = 3 ​ + ( − 3 ​ ) = 0 , = 3 ​ , v = 1. ​ 代入得 y ′′ = − 1 2 ( − 2 ) ⋅ 1 − 3 ​ ⋅ 0 ​ = 2. 曲率公式为 κ = ( 1 + ( y ′ ) 2 ) 3/2 ∣ y ′′ ∣ ​ . 代入 y ′ = − 3 ​ ， ( y ′ ) 2 = 3 ， 1 + ( y ′ ) 2 = 4 ， ( 1 + ( y ′ ) 2 ) 3/2 = 4 3/2 = 8 ， ∣ y ′′ ∣ = 2 ，得 κ = 8 2 ​ = 4 1 ​ . 曲率半径 R = κ 1 ​ = 4.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知函数 \\(f(x,y)\\) 可微，且 \\(df(0,0)=\\pi\\,dx+3\\,dy.\\) 记 \\(g(x)=f(\\ln x,\\sin\\pi x),\\) 则 \\(g'(1)=\\)______。",
    answerText: "】 − 2 π 【",
    referenceAnswer: "【答案】 − 2 π 【解析】 已知函数 f ( x , y ) 可微，且 df ( 0 , 0 ) = π d x + 3 d y ，由全微分形式可知在点 ( 0 , 0 ) 处有偏导数 f x ​ ( 0 , 0 ) = π ， f y ​ ( 0 , 0 ) = 3 。 设 g ( x ) = f ( ln x , sin π x ) ，则 g ( x ) 是 x 的复合函数。令 u ( x ) = ln x ， v ( x ) = sin π x ，由链式法则得： g ′ ( x ) = f x ​ ( u ( x ) , v ( x )) ⋅ u ′ ( x ) + f y ​ ( u ( x ) , v ( x )) ⋅ v ′ ( x ) , 其中 u ′ ( x ) = x 1 ​ ， v ′ ( x ) = π cos π x 。 计算 x = 1 时的值： u ( 1 ) = ln 1 = 0 ， v ( 1 ) = sin π = 0 ， u ′ ( 1 ) = 1 ， v ′ ( 1 ) = π cos π = − π 。 代入链式法则： g ′ ( 1 ) = f x ​ ( 0 , 0 ) ⋅ 1 + f y ​ ( 0 , 0 ) ⋅ ( − π ) = π ⋅ 1 + 3 ⋅ ( − π ) = π − 3 π = − 2 π . 因此， g ′ ( 1 ) = − 2 π 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "函数 \\(f(x)=\\ln(2+x)\\) 在区间 \\([0,2]\\) 上的平均值为______。",
    answerText: "】 3 ln 2 − 1 【",
    referenceAnswer: "【答案】 3 ln 2 − 1 【解析】 函数在区间 [ 0 , 2 ] 上的平均值公式为 b − a 1 ​ ∫ a b ​ f ( x ) d x , 其中 a = 0 ， b = 2 。因此，平均值为 2 1 ​ ∫ 0 2 ​ ln ( 2 + x ) d x . 计算积分：令 u = 2 + x ，则当 x = 0 时 u = 2 ，当 x = 2 时 u = 4 ，且 d u = d x ，积分化为 ∫ 2 4 ​ ln u d u . 利用公式 ∫ ln u d u = u ln u − u + C ，得 ∫ 2 4 ​ ln u d u = [ u ln u − u ] 2 4 ​ = ( 4 ln 4 − 4 ) − ( 2 ln 2 − 2 ) = 4 ln 4 − 2 ln 2 − 2. 由 ln 4 = 2 ln 2 ，有 4 ln 4 = 8 ln 2 ，代入得积分为 8 ln 2 − 2 ln 2 − 2 = 6 ln 2 − 2. 故平均值为 2 1 ​ ( 6 ln 2 − 2 ) = 3 ln 2 − 1.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix} 1&b&-1\\\\ a+2&3&-3a \\end{pmatrix}.\\)若二次型 \\(x^T(AA^T)x\\) 的规范形为 \\(y_1^2\\)，则 \\(a+b=\\)______。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 二次型 x T ( A A T ) x 的规范形为 y 1 2 ​ ，意味着矩阵 B = A A T 的秩为 1 且正惯性指数为 1，即 B 半正定且秩为 1。由于 rank ( B ) = rank ( A ) ，故 A 的秩也为 1。矩阵 A = ( 1 a + 2 ​ b 3 ​ − 1 − 3 a ​ ) 秩为 1 当且仅当其行成比例，即存在常数 t 使得： a + 2 = t ⋅ 1 , 3 = t ⋅ b , − 3 a = t ⋅ ( − 1 ) . 由第一式得 t = a + 2 ，代入第三式得 − 3 a = − ( a + 2 ) ，解得 a = 1 。进而 t = 3 ，代入第二式得 3 = 3 b ，故 b = 1 。因此 a + b = 2 。验证：当 a = 1 , b = 1 时， A = ( 1 3 ​ 1 3 ​ − 1 − 3 ​ ) 行成比例，秩为 1，计算 B = A A T = ( 3 9 ​ 9 27 ​ ) ，其特征值为 0 和 30，规范形为 y 1 2 ​ ，符合条件。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）计算 \\(I=\\int_{-1}^{1}dx\\int_{|x|}^{\\sqrt{2-x^2}}y\\sin\\sqrt{x^2+y^2}\\,dy.\\)",
    referenceAnswer: "【答案】 4 sin 2 ​ − 2 2 ​ 【解析】 首先，注意到被积函数关于 x 是偶函数，积分区域关于 y 轴对称，因此 I = 2 ∫ 0 1 ​ d x ∫ x 2 − x 2 ​ ​ y sin x 2 + y 2 ​ d y . 对内侧积分作换元：令 u = x 2 + y 2 ​ ，则 y d y = u d u ，积分限变为 u 从 2 ​ x 到 2 ​ ，于是 ∫ x 2 − x 2 ​ ​ y sin x 2 + y 2 ​ d y = ∫ 2 ​ x 2 ​ ​ u sin u d u . 从而 I = 2 ∫ 0 1 ​ ( ∫ 2 ​ x 2 ​ ​ u sin u d u ) d x . 交换积分次序：区域由 0 ≤ x ≤ 1 ， 2 ​ x ≤ u ≤ 2 ​ 确定，等价于 0 ≤ u ≤ 2 ​ ， 0 ≤ x ≤ u / 2 ​ ，故 I = 2 ∫ 0 2 ​ ​ ∫ 0 u / 2 ​ ​ u sin u d x d u = 2 ∫ 0 2 ​ ​ u sin u ⋅ 2 ​ u ​ d u = 2 ​ ∫ 0 2 ​ ​ u 2 sin u d u . 计算积分 ∫ u 2 sin u d u ，利用分部积分： ∫ u 2 sin u d u = − u 2 cos u + 2 u sin u + 2 cos u + C . 代入上下限得 ∫ 0 2 ​ ​ u 2 sin u d u = [ − u 2 cos u + 2 u sin u + 2 cos u ] 0 2 ​ ​ = 2 2 ​ sin ( 2 ​ ) − 2. 因此， I = 2 ​ ( 2 2 ​ sin ( 2 ​ ) − 2 ) = 4 sin ( 2 ​ ) − 2 2 ​ . 亦可使用极坐标验证：令 x = r cos θ ， y = r sin θ ，区域由 y ≥ ∣ x ∣ 和 x 2 + y 2 ≤ 2 给出，对应极坐标下 π /4 ≤ θ ≤ 3 π /4 ， 0 ≤ r ≤ 2 ​ ，被积函数变为 r 2 sin θ sin r ，积分分离变量后结果相同。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知函数 \\(g(x)\\) 连续，\\(f(x)=\\int_0^{x^2}g(xt)\\,dt.\\) 求 \\(f'(x)\\) 的表达式，并判断 \\(f'(x)\\) 在 \\(x=0\\) 处的连续性。",
    referenceAnswer: "【答案】 f ′ ( x ) = ⎩ ⎨ ⎧ ​ 3 x g ( x 3 ) − x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s , 0 , ​ x  = 0 x = 0 ​ 且 f ′ ( x ) 在 x = 0 处连续。 【解析】 已知函数 g ( x ) 连续， f ( x ) = ∫ 0 x 2 ​ g ( x t ) d t 。 先求 f ′ ( x ) 的表达式。 当 x = 0 时， f ( 0 ) = ∫ 0 0 ​ g ( 0 ) d t = 0 ，由导数定义： f ′ ( 0 ) = x → 0 lim ​ x f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x 1 ​ ∫ 0 x 2 ​ g ( x t ) d t . 由于 g 连续，对任意 x ，存在 ξ ∈ [ 0 , x 2 ] 使得 ∫ 0 x 2 ​ g ( x t ) d t = g ( x ξ ) x 2 （积分中值定理）。则 x f ( x ) ​ = g ( x ξ ) x , 当 x → 0 时， ∣ x ξ ∣ ≤ ∣ x ∣ 3 → 0 ，故 g ( x ξ ) → g ( 0 ) ，所以 g ( x ξ ) x → 0 ，即 f ′ ( 0 ) = 0 。 当 x  = 0 时，令 u = x t ，则 t = x u ​ ， d t = x d u ​ 。当 t = 0 时 u = 0 ；当 t = x 2 时 u = x ⋅ x 2 = x 3 。于是 f ( x ) = ∫ 0 x 3 ​ g ( u ) ⋅ x d u ​ = x 1 ​ ∫ 0 x 3 ​ g ( s ) d s . 令 G ( v ) = ∫ 0 v ​ g ( s ) d s ，则 f ( x ) = x G ( x 3 ) ​ 。求导得： f ′ ( x ) = x 2 3 x 2 g ( x 3 ) ⋅ x − G ( x 3 ) ​ = 3 x g ( x 3 ) − x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s . 再判断 f ′ ( x ) 在 x = 0 处的连续性。需证 x → 0 lim ​ f ′ ( x ) = f ′ ( 0 ) = 0 。 计算极限： x → 0 lim ​ f ′ ( x ) = x → 0 lim ​ [ 3 x g ( x 3 ) − x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s ] . 由于 g 连续，当 x → 0 时 x 3 → 0 ，故 g ( x 3 ) → g ( 0 ) ，所以 3 x g ( x 3 ) → 0 。 对积分项，由积分中值定理，存在 θ ∈ [ 0 , x 3 ] 使得 ∫ 0 x 3 ​ g ( s ) d s = g ( θ ) x 3 ，则 x 2 1 ​ ∫ 0 x 3 ​ g ( s ) d s = g ( θ ) x → 0 ( x → 0 ) . 因此 x → 0 lim ​ f ′ ( x ) = 0 ，与 f ′ ( 0 ) 相等，故 f ′ ( x ) 在 x = 0 处连续。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）求函数 \\(f(x,y)=(2x^2-y^2)e^x\\) 的极值。",
    referenceAnswer: "【答案】 函数在点 ( − 2 , 0 ) 处取得极大值 e 2 8 ​ ，无极小值。 【解析】 首先求一阶偏导数： f x ​ = ∂ x ∂ ​ [( 2 x 2 − y 2 ) e x ] = e x ( 2 x 2 + 4 x − y 2 ) , f y ​ = ∂ y ∂ ​ [( 2 x 2 − y 2 ) e x ] = − 2 y e x . 令 f x ​ = 0 ， f y ​ = 0 ，并利用 e x > 0 ，得到方程组： { 2 x 2 + 4 x − y 2 = 0 , − 2 y = 0. ​ 由第二式得 y = 0 ，代入第一式得 2 x 2 + 4 x = 0 ，即 2 x ( x + 2 ) = 0 ，解得 x = 0 或 x = − 2 。 故驻点为 ( 0 , 0 ) 和 ( − 2 , 0 ) 。 再求二阶偏导数： f xx ​ = ∂ x ∂ ​ f x ​ = e x ( 2 x 2 + 8 x + 4 − y 2 ) , f x y ​ = ∂ y ∂ ​ f x ​ = − 2 y e x , f yy ​ = ∂ y ∂ ​ f y ​ = − 2 e x . Hessian 矩阵为 H ( x , y ) = ( f xx ​ f x y ​ ​ f x y ​ f yy ​ ​ ) . 在点 ( 0 , 0 ) 处： f xx ​ ( 0 , 0 ) = 4 , f x y ​ ( 0 , 0 ) = 0 , f yy ​ ( 0 , 0 ) = − 2 , det H ( 0 , 0 ) = 4 × ( − 2 ) − 0 2 = − 8 < 0 , 故 ( 0 , 0 ) 是鞍点，不是极值点。 在点 ( − 2 , 0 ) 处： f xx ​ ( − 2 , 0 ) = − e 2 4 ​ < 0 , f x y ​ ( − 2 , 0 ) = 0 , f yy ​ ( − 2 , 0 ) = − e 2 2 ​ , det H ( − 2 , 0 ) = ( − e 2 4 ​ ) × ( − e 2 2 ​ ) − 0 2 = e 4 8 ​ > 0 , 且 f xx ​ ( − 2 , 0 ) < 0 ，故函数在 ( − 2 , 0 ) 处取得极大值。极大值为 f ( − 2 , 0 ) = ( 2 × ( − 2 ) 2 − 0 2 ) e − 2 = 8 e − 2 = e 2 8 ​ . 因此，函数有极大值 e 2 8 ​ ，无极小值。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知 \\(M(x_0,y_0)\\) 是曲线 \\(y=\\frac1{1+x^2}\\quad(x\\ge0)\\) 的拐点，\\(O\\) 为坐标原点。记 \\(D\\) 是第一象限中以曲线 \\(y=\\frac1{1+x^2}\\quad(x\\ge x_0),\\) 线段 \\(OM\\) 及 \\(x\\) 轴正半轴为边界的无界区域，求 \\(D\\) 绕 \\(x\\) 轴旋转所成旋转体的体积。",
    referenceAnswer: "【答案】 6 π 2 ​ − 16 3 ​ π ​ 【解析】 首先，求曲线 y = 1 + x 2 1 ​ ( x ≥ 0 ) 的拐点。计算二阶导数： y ′ = − ( 1 + x 2 ) 2 2 x ​ , y ′′ = ( 1 + x 2 ) 3 2 ( 3 x 2 − 1 ) ​ . 令 y ′′ = 0 得 3 x 2 − 1 = 0 ，解得 x 0 ​ = 3 ​ 1 ​ (因 x ≥ 0 )，代入曲线方程得 y 0 ​ = 4 3 ​ ，故拐点为 M ( 3 ​ 1 ​ , 4 3 ​ ) 。 区域 D 的边界由曲线 y = 1 + x 2 1 ​ ( x ≥ x 0 ​ )、线段 OM 及 x 正半轴组成。线段 OM 的方程为 y = x 0 ​ y 0 ​ ​ x = 4 3 3 ​ ​ x ( 0 ≤ x ≤ x 0 ​ )。因此，区域 D 可描述为：在 x 轴上方，上边界为 f ( x ) = { 4 3 3 ​ ​ x , 1 + x 2 1 ​ , ​ 0 ≤ x ≤ x 0 ​ , x ≥ x 0 ​ . ​ 将 D 绕 x 轴旋转，所得旋转体的体积为 V = π ∫ 0 + ∞ ​ [ f ( x ) ] 2 d x = π ​ ∫ 0 x 0 ​ ​ ( 4 3 3 ​ ​ x ) 2 d x + ∫ x 0 ​ + ∞ ​ ( 1 + x 2 1 ​ ) 2 d x ​ . 计算第一个积分： ∫ 0 1/ 3 ​ ​ ( 4 3 3 ​ ​ x ) 2 d x = 16 27 ​ ∫ 0 1/ 3 ​ ​ x 2 d x = 16 27 ​ ⋅ 3 1 ​ ( 3 ​ 1 ​ ) 3 = 16 27 ​ ⋅ 3 1 ​ ⋅ 3 3 ​ 1 ​ = 16 3 ​ 3 ​ = 16 3 ​ ​ . 计算第二个积分： ∫ 1/ 3 ​ + ∞ ​ ( 1 + x 2 ) 2 1 ​ d x = [ 2 1 ​ arctan x + 2 1 ​ ⋅ 1 + x 2 x ​ ] 1/ 3 ​ + ∞ ​ . 当 x → + ∞ 时，值为 4 π ​ ；在 x = 3 ​ 1 ​ 处，值为 2 1 ​ ⋅ 6 π ​ + 2 1 ​ ⋅ 4 3 ​ ​ = 12 π ​ + 8 3 ​ ​ 。因此， ∫ 1/ 3 ​ + ∞ ​ ( 1 + x 2 ) 2 1 ​ d x = 4 π ​ − 12 π ​ − 8 3 ​ ​ = 6 π ​ − 8 3 ​ ​ . 于是， V = π ( 16 3 ​ ​ + 6 π ​ − 8 3 ​ ​ ) = π ( 6 π ​ − 16 3 ​ ​ ) = 6 π 2 ​ − 16 3 ​ π ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）求微分方程 \\(x^2y''-2xy'-(y')^2=0\\;(x>2)\\) 满足条件\\(\\left.y\\right|_{x=3}=\\frac12,\\;\\left.y'\\right|_{x=3}=-9\\)的解。",
    referenceAnswer: "【答案】 y = − 2 x 2 ​ − 2 x − 4 ln ( x − 2 ) + 11 【解析】 令 p = y ′ ，则 y ′′ = d x d p ​ ，代入原方程 x 2 y ′′ − 2 x y ′ − ( y ′ ) 2 = 0 得： x 2 d x d p ​ − 2 x p − p 2 = 0 假设 p  = 0 ，两边除以 p 2 ： p 2 x 2 ​ d x d p ​ − p 2 x ​ − 1 = 0 令 u = p 1 ​ ，则 d x d p ​ = − u 2 1 ​ d x d u ​ ，代入上式： x 2 ⋅ u 2 ⋅ ( − u 2 1 ​ d x d u ​ ) − 2 xu − 1 = 0 化简得： − x 2 d x d u ​ − 2 xu − 1 = 0 即： x 2 d x d u ​ + 2 xu + 1 = 0 注意到左边为 d x d ​ ( x 2 u ) ，故： d x d ​ ( x 2 u ) = − 1 积分得： x 2 u = − x + C 其中 C 为积分常数。代回 u = p 1 ​ 得： y ′ 1 ​ = x 2 C − x ​ 所以： y ′ = C − x x 2 ​ 利用初始条件 y ′ ( 3 ) = − 9 ，代入得： − 9 = C − 3 9 ​ 解得 C = 2 。于是： y ′ = 2 − x x 2 ​ 对 y ′ 积分求 y ： y = ∫ 2 − x x 2 ​ d x 化简被积函数： 2 − x x 2 ​ = − x − 2 x 2 ​ = − ( x + 2 + x − 2 4 ​ ) = − x − 2 − x − 2 4 ​ 积分得： y = ∫ ( − x − 2 − x − 2 4 ​ ) d x = − 2 x 2 ​ − 2 x − 4 ln ∣ x − 2∣ + D 由于 x > 2 ，故 ∣ x − 2∣ = x − 2 。再利用初始条件 y ( 3 ) = 2 1 ​ ： y ( 3 ) = − 2 9 ​ − 6 − 4 ln 1 + D = − 2 21 ​ + D = 2 1 ​ 解得 D = 11 。因此所求解为： y = − 2 x 2 ​ − 2 x − 4 ln ( x − 2 ) + 11",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知向量组\\(\\alpha_1=\\begin{pmatrix}1\\\\0\\\\-1\\\\-1\\end{pmatrix},\\quad \\alpha_2=\\begin{pmatrix}1\\\\-1\\\\0\\\\-2\\end{pmatrix},\\quad \\alpha_3=\\begin{pmatrix}0\\\\-1\\\\1\\\\-1\\end{pmatrix},\\quad \\alpha_4=\\begin{pmatrix}0\\\\1\\\\-1\\\\1\\end{pmatrix}.\\)记\\(A=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4),\\;G=(\\alpha_1,\\alpha_2).\\)(1)证明：\\(\\alpha_1,\\alpha_2\\) 是 \\(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4\\) 的极大线性无关组；(2)求矩阵 \\(H\\) 使得 \\(A=GH\\)，并求 \\(A^{10}\\)。",
    referenceAnswer: "【答案】 (1) 略。\n(2) H = ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) ， A 10 = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ − 9 − 1 10 8 ​ 9 1 − 10 − 8 ​ ​ 。 【解析】 (1) 设 c 1 ​ α 1 ​ + c 2 ​ α 2 ​ = 0 ，解得 c 1 ​ = c 2 ​ = 0 ，故 α 1 ​ , α 2 ​ 线性无关。由 α 3 ​ = − α 1 ​ + α 2 ​ ， α 4 ​ = α 1 ​ − α 2 ​ 知 α 3 ​ , α 4 ​ 可由 α 1 ​ , α 2 ​ 线性表示，因此 α 1 ​ , α 2 ​ 构成一个极大线性无关组。 (2) 令 A = ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) ， G = ( α 1 ​ , α 2 ​ ) 。 由 α 3 ​ = − α 1 ​ + α 2 ​ ， α 4 ​ = α 1 ​ − α 2 ​ ，可得 A = G H ，其中 H = ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) . 计算 H G = ( 1 0 ​ − 1 1 ​ ) , 记 B = H G ，则 B = I + N ， N = ( 0 0 ​ − 1 0 ​ ) , N 2 = 0. 因此 B 9 = ( I + N ) 9 = I + 9 N = ( 1 0 ​ − 9 1 ​ ) . 于是 A 10 = G B 9 H = ​ 1 0 − 1 − 1 ​ 1 − 1 0 − 2 ​ ​ ( 1 0 ​ − 9 1 ​ ) ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) . 首先计算中间结果： ​ 1 0 − 1 − 1 ​ 1 − 1 0 − 2 ​ ​ ( 1 0 ​ − 9 1 ​ ) = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ ​ . 进而得 A 10 = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ ​ ( 1 0 ​ 0 1 ​ − 1 1 ​ 1 − 1 ​ ) = ​ 1 0 − 1 − 1 ​ − 8 − 1 9 7 ​ − 9 − 1 10 8 ​ 9 1 − 10 − 8 ​ ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2026_math2 = {
  id: P, year: Y,
  title: '2026 年全国硕士研究生招生考试 数学（二）',
  short: '2026 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2026_math2.length,
  qids: questions2026_math2.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
