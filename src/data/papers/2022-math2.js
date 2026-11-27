const P = 'paper-2022-math2'
const Y = 2022
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2022-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2022 考研数学（二）真题',
  ...extra
})

export const questions2022_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "当 \\(x\\to0\\) 时，\\(\\alpha(x),\\beta(x)\\) 是非零无穷小量，则以下命题中：① 若 \\(\\alpha(x)\\sim\\beta(x)\\)，则 \\(\\alpha^2(x)\\sim\\beta^2(x)\\)；② 若 \\(\\alpha^2(x)\\sim\\beta^2(x)\\)，则 \\(\\alpha(x)\\sim\\beta(x)\\)；③ 若 \\(\\alpha(x)\\sim\\beta(x)\\)，则 \\(\\alpha(x)-\\beta(x)=o(\\alpha(x))\\)；④ 若 \\(\\alpha(x)-\\beta(x)=o(\\alpha(x))\\)，则 \\(\\alpha(x)\\sim\\beta(x)\\)。真命题的序号为（ ）",
    options: [{ key: "A", text: "①③" }, { key: "B", text: "①④" }, { key: "C", text: "①③④" }, { key: "D", text: "②③④" }],
    answer: ["C"],
    explain: "正确答案： C 分析本题主要考查无穷小量的概念。四个命题均与无穷小量等价这个概念有关。 当 x → 0 时， α ( x ) ∼ β ( x ) 意味着 lim x → 0 ​ β ( x ) α ( x ) ​ = 1 ； o ( α ( x )) 满足 lim x → 0 ​ α ( x ) o ( α ( x )) ​ = 0 。依次分析四个命题。 若 α ( x ) ∼ β ( x ) ，则 lim x → 0 ​ β ( x ) α ( x ) ​ = 1 ，从而 lim x → 0 ​ β 2 ( x ) α 2 ( x ) ​ = 1 ，即 α 2 ( x ) ∼ β 2 ( x ) ，命题①是真命题。 由 α 2 ( x ) ∼ β 2 ( x ) 并不能得到 α ( x ) ∼ β ( x ) 。考虑 β ( x ) = − α ( x ) ，则 lim x → 0 ​ β 2 ( x ) α 2 ( x ) ​ = lim x → 0 ​ α 2 ( x ) α 2 ( x ) ​ = 1 ，即 α 2 ( x ) ∼ β 2 ( x ) ，但 lim x → 0 ​ β ( x ) α ( x ) ​ = lim x → 0 ​ − α ( x ) α ( x ) ​ = − 1 ， α ( x ) 与 β ( x ) 只是同阶但并不等价的无穷小量，命题②不是真命题。 要说明 α ( x ) − β ( x ) = o ( α ( x )) ，只需说明 lim x → 0 ​ α ( x ) α ( x ) − β ( x ) ​ = 0 ， x → 0 lim ​ α ( x ) α ( x ) − β ( x ) ​ ​ = 1 − x → 0 lim ​ α ( x ) β ( x ) ​ = 1 − 1 = 0. ​ 命题③是真命题。 要说明 α ( x ) ∼ β ( x ) ，只需说明 lim x → 0 ​ α ( x ) β ( x ) ​ = 1 ， x → 0 lim ​ α ( x ) β ( x ) ​ ​ = x → 0 lim ​ α ( x ) α ( x ) − [ α ( x ) − β ( x )] ​ = 1 − x → 0 lim ​ α ( x ) α ( x ) − β ( x ) ​ = 1 − 0 = 1. ​ 命题④是真命题。 综上所述，应选 C。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "\\(\\int_0^2dy\\int_y^2\\frac{y}{\\sqrt{1+x^3}}\\,dx=（ ）\\)",
    options: [{ key: "A", text: "\\(\\dfrac{\\sqrt2}{6}\\)" }, { key: "B", text: "\\(\\dfrac13\\)" }, { key: "C", text: "\\(\\dfrac{\\sqrt2}{3}\\)" }, { key: "D", text: "\\(\\dfrac23\\)" }],
    answer: ["D"],
    explain: "正确答案： D 分析本题主要考查交换积分次序。 本题中的二次积分，按照题目给定的先 x 后 y 的次序不太好算，故应考虑交换积分次序。 如图 (a) 所示，二次积分对应的积分区域 D 是由直线 y = x 、 x = 2 以及 x 轴所围成的三角形区域。原二次积分采用的是先 x 后 y 的积分次序，改写成先 y 后 x 的积分次序，即将 D 写成 X 型区域，如图 (b) 所示。 D = {( x , y ) ∣ ​ 0 ≤ y ≤ x , 0 ≤ x ≤ 2 ​ } 因此， 原积分 ​ = ∬ D ​ 1 + x 3 ​ y ​ d x d y = ∫ 0 2 ​ 1 + x 3 ​ 1 ​ d x ∫ 0 x ​ y d y = 2 1 ​ ∫ 0 2 ​ 1 + x 3 ​ x 2 ​ d x = 6 1 ​ ∫ 0 2 ​ 1 + x 3 ​ d ( 1 + x 3 ) ​ = 6 1 ​ ⋅ 2 1 + x 3 ​ ​ 0 2 ​ = 3 1 ​ × ( 3 − 1 ) = 3 2 ​ . ​ 应选 D。"
  }),
  base(3, 'k-math-004', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(f(x)\\) 在 \\(x=x_0\\) 处有二阶导数，则（ ）",
    options: [{ key: "A", text: "当 \\(f(x)\\) 在 \\(x_0\\) 的某邻域内单调增加时，\\(f'(x_0)>0\\)" }, { key: "B", text: "当 \\(f'(x_0)>0\\) 时，\\(f(x)\\) 在 \\(x_0\\) 的某邻域内单调增加" }, { key: "C", text: "当 \\(f(x)\\) 在 \\(x_0\\) 的某邻域内是凹函数时，\\(f''(x_0)>0\\)" }, { key: "D", text: "当 \\(f''(x_0)>0\\) 时，\\(f(x)\\) 在 \\(x_0\\) 的某邻域内是凹函数" }],
    answer: ["B"],
    explain: "正确答案： B 分析本题主要考查一阶导数、二阶导数与函数性态的关系。 函数的单调性与一阶导数的关系：设函数 f ( x ) 在 [ a , b ] 上连续，在 ( a , b ) 内可导。若在 ( a , b ) 内 f ′ ( x ) ≥ 0 ，且等号只在有限个点处成立，则 f ( x ) 在 [ a , b ] 上单调增加（单调减少的情况对应于 f ′ ( x ) ≤ 0 的情况）。 函数的凹凸性与二阶导数的关系：设函数 f ( x ) 在 [ a , b ] 上连续，在 ( a , b ) 内二阶可导。若在 ( a , b ) 内 f ′′ ( x ) ≥ 0 ，且等号只在有限个点处成立，则 f ( x ) 为 [ a , b ] 上的凹函数（凸函数的情况对应于 f ′′ ( x ) ≤ 0 的情况）。 在不确定一阶导函数的连续性的情况下，单点处的一阶导符号不能确定该点邻域内的函数的单调性。在不确定二阶导函数的连续性的情况下，单点处的二阶导符号不能确定该点邻域内的曲线的凹凸性。 注意到题设给出 f 在 x 0 处有二阶导数，这意味着 f ' 在 x 0 处可导，因此 f ' 在 x 0 处连续。若 f '( x 0 )>0，则由连续性可知存在 δ>0，使得当 | x − x 0 |<δ 时有 f '( x )>0，从而 f 在该邻域内单调增加。因此 B 正确。 下面说明选项 A、C、D 不正确。 在一阶导数连续的条件下，当 f ( x ) 在 x 0 ​ 的某邻域内单调增加时，我们能得到在该邻域内 f ′ ( x ) ≥ 0 ，但却不能保证 f ′ ( x ) > 0 ，因为可能存在有限个点，在这些点处 f ′ ( x ) = 0 ，例如 f ( x ) = x 3 ，该函数在 ( − ∞ , + ∞ ) 上单调增加，但是 f ′ ( 0 ) = 0 ，选项 A 不正确。 对选项 C，考虑 f ( x ) = x 4 ，则 f ( x ) 为 ( − ∞ , + ∞ ) 上的凹函数，但是 f ′′ ( 0 ) = 0 ，选项 C 不正确。 对选项 D，我们可以考虑二阶导函数存在间断点的例子。若 x 0 ​ 为 f ′′ ( x ) 的间断点，则 lim x → x 0 ​ ​ f ′′ ( x ) = f ′′ ( x 0 ​ ) > 0 不成立，从而无法通过极限的定义得到 x 0 ​ 的一个小邻域，在该小邻域内 f ′′ ( x ) > 0 。 如函数 f ( x ) = { x 4 sin x 1 ​ + 4 x 2 ​ , 0 , ​ x  = 0 , x = 0 , ​ f ′′ ( x ) 在 x = 0 处不连续。 当 x  = 0 时， f ′ ( x ) = 4 x 3 sin x 1 ​ − x 2 cos x 1 ​ + 2 1 ​ x . 当 x = 0 时，由导数定义， f ′ ( 0 ) = x → 0 lim ​ x − 0 f ( x ) − f ( 0 ) ​ = x → 0 lim ​ x x 4 sin x 1 ​ + 4 x 2 ​ ​ = 0. 因此， f ′ ( x ) = { 4 x 3 sin x 1 ​ − x 2 cos x 1 ​ + 2 1 ​ x , 0 , ​ x  = 0 , x = 0. ​ f ′ ( x ) 在 x = 0 处连续。 当 x = 0 时，由导数定义， f ′′ ( 0 ) = x → 0 lim ​ x − 0 f ′ ( x ) − f ′ ( 0 ) ​ = x → 0 lim ​ x 4 x 3 sin x 1 ​ − x 2 cos x 1 ​ + 2 1 ​ x ​ = 2 1 ​ > 0. 当 x  = 0 时， f ′′ ( x ) = 12 x 2 sin x 1 ​ − 6 x cos x 1 ​ − sin x 1 ​ + 2 1 ​ , f ′′ ( x ) 在 x = 0 附近振荡，振幅为 1，在 x = 0 附近不存在小邻域使得 f ′′ ( x ) 在该邻域上保持不变号，即不存在 x = 0 的小邻域，使得 f ( x ) 在该邻域上是凹函数或凸函数，选项 D 不正确。"
  }),
  base(4, 'k-math-003', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "已知 \\(f(t)\\) 连续，令 \\(F(x,y)=\\int_0^{x-y}(x-y-t)f(t)\\,dt,\\) 则（ ）",
    options: [{ key: "A", text: "\\(\\displaystyle\\frac{\\partial F}{\\partial x}=\\frac{\\partial F}{\\partial y},\\quad \\frac{\\partial^2F}{\\partial x^2}=\\frac{\\partial^2F}{\\partial y^2}\\)" }, { key: "B", text: "\\(\\displaystyle\\frac{\\partial F}{\\partial x}=\\frac{\\partial F}{\\partial y},\\quad \\frac{\\partial^2F}{\\partial x^2}=-\\frac{\\partial^2F}{\\partial y^2}\\)" }, { key: "C", text: "\\(\\displaystyle\\frac{\\partial F}{\\partial x}=-\\frac{\\partial F}{\\partial y},\\quad \\frac{\\partial^2F}{\\partial x^2}=\\frac{\\partial^2F}{\\partial y^2}\\)" }, { key: "D", text: "\\(\\displaystyle\\frac{\\partial F}{\\partial x}=-\\frac{\\partial F}{\\partial y},\\quad \\frac{\\partial^2F}{\\partial x^2}=-\\frac{\\partial^2F}{\\partial y^2}\\)" }],
    answer: ["C"],
    explain: "正确答案： C 分析本题主要考查变限积分求偏导数。 F ( x , y ) 是由含参变量的变限积分给出的二元函数，求它的偏导数时，可以先将参变量从被积函数中分离出去，再利用变限积分求导公式计算偏导数。 整理 F ( x , y ) 的表达式： F ( x , y ) = ∫ 0 x − y ​ ( x − y − t ) f ( t ) d t = ( x − y ) ∫ 0 x − y ​ f ( t ) d t − ∫ 0 x − y ​ t f ( t ) d t 分别计算 ∂ x ∂ F ​ 、 ∂ x 2 ∂ 2 F ​ 、 ∂ y ∂ F ​ 、 ∂ y 2 ∂ 2 F ​ ： ∂ x ∂ F ​ = ( x − y ) f ( x − y ) + ∫ 0 x − y ​ f ( t ) d t − ( x − y ) f ( x − y ) = ∫ 0 x − y ​ f ( t ) d t ∂ x 2 ∂ 2 F ​ = ∂ x ∂ [ ∫ 0 x − y ​ f ( t ) d t ] ​ = f ( x − y ) ∂ y ∂ F ​ = − ( x − y ) f ( x − y ) − ∫ 0 x − y ​ f ( t ) d t + ( x − y ) f ( x − y ) = − ∫ 0 x − y ​ f ( t ) d t ∂ y 2 ∂ 2 F ​ = ∂ y ∂ [ − ∫ 0 x − y ​ f ( t ) d t ] ​ = f ( x − y ) 因此， ∂ x ∂ F ​ = − ∂ y ∂ F ​ ， ∂ x 2 ∂ 2 F ​ = ∂ y 2 ∂ 2 F ​ ，应选 C。"
  }),
  base(5, 'k-math-009', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(p\\) 为常数，若反常积分 \\(\\int_0^1\\frac{\\ln x}{x^p(1-x)^{1-p}}\\,dx\\) 收敛，则 \\(p\\) 的取值范围是（ ）",
    options: [{ key: "A", text: "\\((-1,1)\\)" }, { key: "B", text: "\\((-1,2)\\)" }, { key: "C", text: "\\((-\\infty,1)\\)" }, { key: "D", text: "\\((-\\infty,2)\\)" }],
    answer: ["A"],
    explain: "正确答案： A 题目解析 本题主要考查反常积分审敛。本题中的反常积分为瑕积分，有两个点需要考虑： x = 0 和 x = 1 。 无界函数的极限审敛法：设函数 f ( x ) 在区间 ( a , b ] 上连续， f ( x ) ≥ 0 ， lim x → a + ​ f ( x ) = + ∞ ，并且存在常数 p ，使得 lim x → a + ​ ( x − a ) p f ( x ) = A 。 (1) 若 0 ≤ A < + ∞ ， 0 < p < 1 ，则 ∫ a b ​ f ( x ) d x 收敛； (2) 若 0 < A ≤ + ∞ ， p ≥ 1 ，则 ∫ a b ​ f ( x ) d x 发散。 解：由于 x = 0 和 x = 1 均为可能的瑕点，故将积分拆成两部分： ∫ 0 1 ​ x p ( 1 − x ) 1 − p ln x ​ d x = ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p ln x ​ d x + ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p ln x ​ d x 先考虑 ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p l n x ​ d x 。 当 p < 0 时， lim x → 0 + ​ x p ( 1 − x ) 1 − p l n x ​ = 0 ， x = 0 不是瑕点， ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p l n x ​ d x 为常义积分。 当 0 ≤ p < 1 时，取 δ > 0 使得 0 < p + δ < 1 ，则： x → 0 + lim ​ x p + δ ⋅ x p ( 1 − x ) 1 − p ln x ​ = x → 0 + lim ​ x δ ln x = x → 0 + lim ​ x − δ ln x ​ = 洛必达 x → 0 + lim ​ − δ x − δ 1 ​ = 0 由无界函数的极限审敛法可知， ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p l n x ​ d x 收敛。 当 p = 1 时： ∫ 0 2 1 ​ ​ x ln x ​ d x = ∫ 0 2 1 ​ ​ ln x d ( ln x ) = 2 ( ln x ) 2 ​ ​ 0 2 1 ​ ​ = − ∞ 于是，当 p ≥ 1 时， ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p l n x ​ d x 发散。 因此，当 p < 1 时， ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p l n x ​ d x 收敛；当 p ≥ 1 时， ∫ 0 2 1 ​ ​ x p ( 1 − x ) 1 − p l n x ​ d x 发散。 再考虑 ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 。 x → 1 − lim ​ x p ( 1 − x ) 1 − p ln x ​ = x → 1 − lim ​ x p ( 1 − x ) 1 − p ln ( 1 + x − 1 ) ​ = x → 1 − lim ​ ( 1 − x ) 1 − p − ( 1 − x ) ​ = − x → 1 − lim ​ ( 1 − x ) p 于是，当 p ≥ 0 时， x = 1 不是瑕点， ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 为常义积分。 当 0 < − p < 1 ，即 − 1 < p < 0 时： x → 1 − lim ​ ( 1 − x ) − p ⋅ x p ( 1 − x ) 1 − p − ln x ​ = x → 1 − lim ​ ( 1 − x ) − p ⋅ ( 1 − x ) p = 1 由无界函数的极限审敛法可知， ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 收敛。 当 − p ≥ 1 ，即 p ≤ − 1 时，同理可得： x → 1 − lim ​ ( 1 − x ) − p ⋅ x p ( 1 − x ) 1 − p − ln x ​ = 1 从而由无界函数的极限审敛法可知， ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 发散。 因此，当 p > − 1 时， ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 收敛；当 p ≤ − 1 时， ∫ 2 1 ​ 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 发散。 综上所述， ∫ 0 1 ​ x p ( 1 − x ) 1 − p l n x ​ d x 收敛当且仅当 p ∈ ( − ∞ , 1 ) ∩ ( − 1 , + ∞ ) = ( − 1 , 1 ) 。应选 A。 拓展 以下为历年真题中关于反常积分审敛的同类真题。 【例】设 m 是正整数，反常积分 ∫ 0 1 ​ n x ​ m l n 2 ( 1 − x ) ​ ​ d x 的敛散性（ ）（2010 年数学一、二试题） (A) 仅与 m 的取值有关。 (B) 仅与 n 的取值有关。 (C) 与 m 、 n 的取值都有关。 (D) 与 m 、 n 的取值都无关。 答案 D。 【例】若反常积分 ∫ 0 + ∞ ​ x a ( 1 + x ) b 1 ​ d x 收敛，则（ ）（2016 年数学一试题） (A) a < 1 且 b > 1 。 (B) a > 1 且 b > 1 。 (C) a < 1 且 a + b > 1 。 (D) a > 1 且 a + b > 1 。 答案 C。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设数列 \\(\\{x_n\\}\\) 满足 \\(-\\frac\\pi2\\le x_n\\le\\frac\\pi2,\\) 则（ ）",
    options: [{ key: "A", text: "若 \\(\\displaystyle\\lim_{n\\to\\infty}\\cos(\\sin x_n)\\) 存在，则 \\(\\displaystyle\\lim_{n\\to\\infty}x_n\\) 存在" }, { key: "B", text: "若 \\(\\displaystyle\\lim_{n\\to\\infty}\\sin(\\cos x_n)\\) 存在，则 \\(\\displaystyle\\lim_{n\\to\\infty}x_n\\) 存在" }, { key: "C", text: "若 \\(\\displaystyle\\lim_{n\\to\\infty}\\cos(\\sin x_n)\\) 存在，则 \\(\\displaystyle\\lim_{n\\to\\infty}\\sin x_n\\) 存在，但 \\(\\displaystyle\\lim_{n\\to\\infty}x_n\\) 不一定存在" }, { key: "D", text: "若 \\(\\displaystyle\\lim_{n\\to\\infty}\\sin(\\cos x_n)\\) 存在，则 \\(\\displaystyle\\lim_{n\\to\\infty}\\cos x_n\\) 存在，但 \\(\\displaystyle\\lim_{n\\to\\infty}x_n\\) 不一定存在" }],
    answer: ["D"],
    explain: "正确答案： D 本题主要考查数列极限与函数极限的关系。 题目中出现的 sin ( cos x ) 与 cos ( sin x ) 均为复合函数。要将 lim n → ∞ ​ sin ( cos x n ​ ) 与 lim n → ∞ ​ cos ( sin x n ​ ) 内层的数列取出来，可以考虑在外层再复合上外层函数的反函数（如果存在的话）。 若 lim n → ∞ ​ sin ( cos x n ​ ) 存在，则将其记为 α 。由于 sin x 在 [ − 2 π ​ , 2 π ​ ] 上存在反函数 arcsin ，有 n → ∞ lim ​ cos x n ​ = n → ∞ lim ​ arcsin ( sin ( cos x n ​ )) = arcsin ( n → ∞ lim ​ sin ( cos x n ​ ) ) = arcsin α 但是 lim n → ∞ ​ cos x n ​ 存在并不能保证 lim n → ∞ ​ x n ​ 存在。例如取 x n ​ = ( − 1 ) n 2 π ​ ，则 lim n → ∞ ​ cos x n ​ = 0 ，但 lim n → ∞ ​ x n ​ 不存在。因此选项 B 错误，选项 D 正确，应选 D。 由于 cos x 在 [ − 2 π ​ , 2 π ​ ] 上并不单调，故由 lim n → ∞ ​ cos ( sin x n ​ ) 存在并不能保证 lim n → ∞ ​ sin x n ​ 存在。同样取 x n ​ = ( − 1 ) n 2 π ​ ，则 lim n → ∞ ​ cos ( sin x n ​ ) = cos 1 ，但 lim n → ∞ ​ sin x n ​ 和 lim n → ∞ ​ x n ​ 均不存在。因此选项 A、C 不正确。 注 ： 考虑到 cos x 是偶函数，形如 x n ​ = ( − 1 ) n a ， a ∈ [ − 2 π ​ , 2 π ​ ] 的数列均可作为选项 A、B、C 的反例。 这道题的出题思路在 2017 年的一道数二真题当中也出现过。 【例】 设数列 { x n ​ } 收敛，则（ ）（2017 年数学二试题） (A) 当 lim n → ∞ ​ sin x n ​ = 0 时， lim n → ∞ ​ x n ​ = 0 ； (B) 当 lim n → ∞ ​ ( x n ​ + ∣ x n ​ ∣ ​ ) = 0 时， lim n → ∞ ​ x n ​ = 0 ； (C) 当 lim n → ∞ ​ ( x n ​ + x n 2 ​ ) = 0 时， lim n → ∞ ​ x n ​ = 0 ； (D) 当 lim n → ∞ ​ ( x n ​ + sin x n ​ ) = 0 时， lim n → ∞ ​ x n ​ = 0 。 答案：D。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "若 \\(I_1=\\int_0^1\\frac{x}{2(1+\\cos x)}\\,dx,\\) \\(I_2=\\int_0^1\\frac{\\ln(1+x)}{1+\\cos x}\\,dx,\\) \\(I_3=\\int_0^1\\frac{2x}{1+\\sin x}\\,dx,\\) 则（ ）",
    options: [{ key: "A", text: "\\(I_1<I_2<I_3\\)" }, { key: "B", text: "\\(I_2<I_1<I_3\\)" }, { key: "C", text: "\\(I_1<I_3<I_2\\)" }, { key: "D", text: "\\(I_3<I_2<I_1\\)" }],
    answer: ["A"],
    explain: "正确答案： A 题目解析 本题主要考查定积分比较大小。三个定积分的积分区间相同，故只需比较被积函数的大小。 通过观察可发现，要比较 I 1 ​ 与 I 2 ​ 的大小，只需比较 2 x ​ 与 ln ( 1 + x ) 的大小。 令 f ( x ) = ln ( 1 + x ) − 2 x ​ ，则 f ( 0 ) = 0 ， f ′ ( x ) = 1 + x 1 ​ − 2 1 ​ 。 当 0< x <1 时，有 1<1+ x <2，因此 1/(1+ x )>1/2。于是 f '( x )=1/(1+ x )−1/2>0，故 f ( x ) 单调增加，并且 f ( x )> f (0)=0，即 ln(1+ x )> x /2。 因此， 1 + c o s x l n ( 1 + x ) ​ > 2 ( 1 + c o s x ) x ​ ，所以 I 2 ​ > I 1 ​ 。 此外，用同样的方法不难证明在 ( 0 , 1 ) 内， ln ( 1 + x ) < x ，因此 1 + c o s x l n ( 1 + x ) ​ < 1 + c o s x x ​ 。 另一方面，由于在 ( 0 , 1 ) 内， 0 < sin x < 1 ， cos x < 1 ， 1 < 1 + sin x < 2 ，故 I 3 ​ 的被积函数 1 + s i n x 2 x ​ > x 。 结合 ln ( 1 + x ) < x ，可得 1 + s i n x 2 x ​ > x > 1 + c o s x l n ( 1 + x ) ​ ，因此 I 3 ​ > I 2 ​ 。 综上所述，应选 A。"
  }),
  base(8, 'k-math-019', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，\\(\\Lambda=\\begin{pmatrix} 1&0&0\\\\ 0&-1&0\\\\ 0&0&0 \\end{pmatrix},\\)则 \\(A\\) 的特征值为 \\(1,-1,0\\) 的充分必要条件是（ ）",
    options: [{ key: "A", text: "存在可逆矩阵 \\(P,Q\\)，使得 \\(A=P\\Lambda Q\\)" }, { key: "B", text: "存在可逆矩阵 \\(P\\)，使得 \\(A=P\\Lambda P^{-1}\\)" }, { key: "C", text: "存在正交矩阵 \\(Q\\)，使得 \\(A=Q\\Lambda Q^{-1}\\)" }, { key: "D", text: "存在可逆矩阵 \\(P\\)，使得 \\(A=P\\Lambda P^T\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】 设 Λ=diag(1,−1,0)。若 A 的特征值恰为 1、−1、0，因为三个特征值互不相同，所以 A 一定可对角化，并且与 Λ 相似；反过来，与 Λ 相似的矩阵具有完全相同的特征值。因此“存在可逆矩阵 P，使 A=PΛP −1 ”正好是所求的充分必要条件，选 B。 选项 A 只表示 A 与 Λ 等价。矩阵等价只保持秩：Λ 的秩为 2，所以 A=PΛQ 只能说明 rank(A)=2，不能确定特征值。例如 diag(2,3,0) 与 Λ 等价，但它的特征值不是 1、−1、0。 选项 C 要求 A 可被正交矩阵对角化，这比“相似于 Λ”更强。比如 A 0 =[[1,1,0],[0,−1,0],[0,0,0]] 的特征值就是 1、−1、0，但 A 0 不是实对称矩阵，因此不能正交对角化。 选项 D 是合同关系。A=PΛP T 只固定实对称矩阵的惯性指数，并不固定具体特征值。例如取 P=diag(2,1,1)，则 PΛP T =diag(4,−1,0)，显然不满足题设特征值。"
  }),
  base(9, 'k-math-010', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设矩阵\\(A=\\begin{pmatrix} 1&1&1\\\\ 1&a&a^2\\\\ 1&b&b^2 \\end{pmatrix}, \\;\\mathbf b=\\begin{pmatrix}1\\\\2\\\\4\\end{pmatrix},\\)则线性方程组 \\(Ax=\\mathbf b\\) 的解的情况为（ ）",
    options: [{ key: "A", text: "无解" }, { key: "B", text: "有解" }, { key: "C", text: "有无穷多解或无解" }, { key: "D", text: "有唯一解或无解" }],
    answer: ["D"],
    explain: "正确答案： D 分析本题主要考查线性方程组的解的情况。 本题的方程组的系数矩阵带参数，故需要分情况讨论。但若注意到系数矩阵行列式与范德蒙德行列式有关，则有一种情况实际上是很好判断的。 解 （法一）注意到 ∣ A ∣ = ​ 1 1 1 ​ 1 a b ​ 1 a 2 b 2 ​ ​ = ( b − a ) ( b − 1 ) ( a − 1 ) 当 a  = 1 ， b  = 1 ，且 a  = b 时， ∣ A ∣  = 0 。由克拉默法则可知，此时方程组 A x = b 有唯一解。 当 a = 1 时， ( A , b ) = ​ 1 1 1 ​ 1 1 b ​ 1 1 b 2 ​ 1 2 4 ​ ​ → ​ 1 0 1 ​ 1 0 b ​ 1 0 b 2 ​ 1 1 4 ​ ​ r ( A , b )  = r ( A ) ，方程组无解。同理可得，当 b = 1 时，方程组无解。 当 a = b 时， ( A , b ) = ​ 1 1 1 ​ 1 a b ​ 1 a 2 b 2 ​ 1 2 4 ​ ​ → ​ 1 1 0 ​ 1 a 0 ​ 1 a 2 0 ​ 1 2 2 ​ ​ r ( A , b )  = r ( A ) ，方程组无解。 综上所述，方程组 A x = b 的解的情况只有两种可能：有唯一解或无解。应选 D。 （法二）直接对增广矩阵 ( A , b ) 作初等行变换 ( A , b ) = ​ 1 1 1 ​ 1 a b ​ 1 a 2 b 2 ​ 1 2 4 ​ ​ → ​ 1 0 0 ​ 1 a − 1 b − 1 ​ 1 a 2 − 1 b 2 − 1 ​ 1 1 3 ​ ​ 当 a = b = 1 时， r ( A ) = 1 ， r ( A , b ) = 2 ，方程组无解。 当 a = 1 ， b  = 1 或 a  = 1 ， b = 1 时， r ( A ) = 2 ， r ( A , b ) = 3 ，方程组无解。 当 a = b ，但均不等于 1 时， r ( A ) = 2 ， r ( A , b ) = 3 ，方程组无解。 当 a  = 1 ， b  = 1 ，且 a  = b 时， r ( A ) = r ( A , b ) = 3 ，方程组有唯一解。 综上所述，方程组 A x = b 的解的情况只有两种可能：有唯一解或无解。应选 D。"
  }),
  base(10, 'k-math-011', {
    type: 'single', difficulty: 2, score: 5, mathHtml: true,
    stem: "设\\(\\alpha_1=(\\lambda,1,1)^T,\\quad \\alpha_2=(1,\\lambda,1)^T,\\quad \\alpha_3=(1,1,\\lambda)^T,\\quad \\alpha_4=(1,\\lambda,\\lambda^2)^T.\\)若 \\(\\alpha_1,\\alpha_2,\\alpha_3\\) 与 \\(\\alpha_1,\\alpha_2,\\alpha_4\\) 等价，则 \\(\\lambda\\) 的取值范围是（ ）",
    options: [{ key: "A", text: "\\(\\{0,1\\}\\)" }, { key: "B", text: "\\(\\{\\lambda\\mid\\lambda\\in\\mathbb R,\\ \\lambda\\ne-2\\}\\)" }, { key: "C", text: "\\(\\{\\lambda\\mid\\lambda\\in\\mathbb R,\\ \\lambda\\ne-1,\\ \\lambda\\ne-2\\}\\)" }, { key: "D", text: "\\(\\{\\lambda\\mid\\lambda\\in\\mathbb R,\\ \\lambda\\ne-1\\}\\)" }],
    answer: ["C"],
    explain: "正确答案： C 分析本题主要考查向量组等价。 向量组 α 1 ​ 、 α 2 ​ 、 α 3 ​ 与 α 1 ​ 、 α 2 ​ 、 α 4 ​ 等价的充分必要条件是： r ( α 1 ​ , α 2 ​ , α 3 ​ ) = r ( α 1 ​ , α 2 ​ , α 4 ​ ) = r ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) 由这一条件出发，可以考虑对矩阵 ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) 作初等行变换并讨论秩来得到 λ 的取值。 （法一）当 λ = 1 时， α 1 ​ = α 2 ​ = α 3 ​ = α 4 ​ = ( 1 , 1 , 1 ) T ，显然 α 1 ​ 、 α 2 ​ 、 α 3 ​ 与 α 1 ​ 、 α 2 ​ 、 α 4 ​ 等价。 当 λ  = 1 时，考虑矩阵 A = ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) ，通过初等行变换可得： r ( α 1 ​ , α 2 ​ , α 3 ​ ) = 3 当且仅当 λ  = − 2 ； r ( α 1 ​ , α 2 ​ , α 4 ​ ) = 3 当且仅当 λ  = − 1 。 因此，当 λ  = 1 时， r ( A ) = r ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) = r ( α 1 ​ , α 2 ​ , α 3 ​ ) = r ( α 1 ​ , α 2 ​ , α 4 ​ ) 当且仅当 λ  = − 2 且 λ  = − 1 。 注意到 λ = 1 也包含在条件 λ  = − 2 且 λ  = − 1 中，故： r ( α 1 ​ , α 2 ​ , α 3 ​ , α 4 ​ ) = r ( α 1 ​ , α 2 ​ , α 3 ​ ) = r ( α 1 ​ , α 2 ​ , α 4 ​ ) 当且仅当 λ  = − 2 且 λ  = − 1 。 （法二）分别计算行列式： ∣ α 1 ​ , α 2 ​ , α 3 ​ ∣ = ( 1 − λ ) 2 ( λ + 2 ) , ∣ α 1 ​ , α 2 ​ , α 4 ​ ∣ = ( 1 − λ ) 2 ( 1 + λ ) 2 当 λ  = 1 , − 2 , − 1 时， ∣ α 1 ​ , α 2 ​ , α 3 ​ ∣ 与 ∣ α 1 ​ , α 2 ​ , α 4 ​ ∣ 均不为 0 ，此时两向量组等价； 当 λ = − 2 或 λ = − 1 时，两向量组的秩不相等，从而不等价； 当 λ = 1 时，两向量组等价。 综上所述， α 1 ​ 、 α 2 ​ 、 α 3 ​ 与 α 1 ​ 、 α 2 ​ 、 α 4 ​ 等价当且仅当 λ  = − 2 且 λ  = − 1 ，应选 C。"
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\\(\\lim_{x\\to0}\\left(\\frac{1+e^x}{2}\\right)^{\\cot x}=\\underline{\\qquad}.\\)",
    answerText: "】 e ​ 【",
    referenceAnswer: "【答案】 e ​ 【解析】 本题主要考查极限计算。 函数 ( 2 1 + e x ​ ) c o t x 为幂指函数，且极限为 1 ∞ 型未定式，故可以采用取对数再计算极限的方法。 取对数再求极限： x → 0 lim ​ ( 2 1 + e x ​ ) c o t x = x → 0 lim ​ e c o t x ⋅ l n 2 1 + e x ​ = e l i m x → 0 ​ c o t x ⋅ l n 2 1 + e x ​ 下面计算 lim x → 0 ​ cot x ⋅ ln 2 1 + e x ​ ： x → 0 lim ​ cot x ⋅ ln 2 1 + e x ​ = x → 0 lim ​ tan x ln 2 1 + e x ​ ​ ∼ x → 0 lim ​ x ln ( 1 + 2 e x − 1 ​ ) ​ = x → 0 lim ​ x 2 e x − 1 ​ ​ = 2 1 ​ 因此，原极限 = e 2 1 ​ = e ​ 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知函数 \\(y=y(x)\\) 由方程 \\(x^2+xy+y^3=3\\) 确定，则 \\(y''(1)=\\underline{\\qquad}.\\)",
    answerText: "】 − 32 31 ​ 【",
    referenceAnswer: "【答案】 − 32 31 ​ 【解析】 本题主要考查隐函数的导数计算。 将 x = 1 代入原方程可得： 1 + y + y 3 = 3 , 即： y 3 + y − 2 = 0. 通过观察可得 y = 1 是该方程的一个解。令 f ( y ) = y 3 + y − 2 ，则： f ′ ( y ) = 3 y 2 + 1 > 0 , f ( y ) 为单调增加函数，从而 y = 1 为 y 3 + y − 2 = 0 的唯一解。 对 x 2 + x y + y 3 = 3 两端关于 x 求导可得： 2 x + y + x y ′ + 3 y 2 y ′ = 0 , 即： 2 x + y + ( x + 3 y 2 ) y ′ = 0. 代入 x = 1 ， y ( 1 ) = 1 可得： 3 + 4 y ′ ( 1 ) = 0 , 解得： y ′ ( 1 ) = − 4 3 ​ . 对上述求导后的式子两端再次关于 x 求导可得： 2 + y ′ + ( 1 + 6 y y ′ ) y ′ + ( x + 3 y 2 ) y ′′ = 0. 代入 x = 1 ， y ( 1 ) = 1 ， y ′ ( 1 ) = − 4 3 ​ 可得： 8 31 ​ + 4 y ′′ ( 1 ) = 0 , 解得： y ′′ ( 1 ) = − 32 31 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）\\(\\int_0^1\\frac{2x+3}{x^2-x+1}\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 9 8 3 ​ π ​ 【",
    referenceAnswer: "【答案】 9 8 3 ​ π ​ 【解析】 本题主要考查定积分的计算。被积函数为有理函数，形如 x 2 + p x + q M x + N ​ ，其中分母为没有实根的二次三项式，分子为一次多项式。对此类积分，可以拆分为两种基本类型。 注意到 ( x 2 − x + 1 ) ′ = 2 x − 1 ，故可以将被积函数拆成两部分： x 2 − x + 1 2 x + 3 ​ = x 2 − x + 1 2 x − 1 ​ + x 2 − x + 1 4 ​ . 因此， ∫ 0 1 ​ x 2 − x + 1 2 x + 3 ​ d x ​ = ∫ 0 1 ​ x 2 − x + 1 2 x − 1 ​ d x + 4 ∫ 0 1 ​ ( x − 2 1 ​ ) 2 + 4 3 ​ 1 ​ d x = ∫ 0 1 ​ x 2 − x + 1 d ( x 2 − x + 1 ) ​ + 3 16 ​ ∫ 0 1 ​ 1 + [ 3 ​ 2 ​ ( x − 2 1 ​ ) ] 2 1 ​ d x = ln ( x 2 − x + 1 ) ​ 0 1 ​ + 3 8 3 ​ ​ arctan 3 ​ 2 ​ ( x − 2 1 ​ ) ​ 0 1 ​ = 3 8 3 ​ ​ × 3 π ​ = 9 8 3 ​ π ​ . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(14, 'k-math-016', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）微分方程 \\(y'''-2y''+5y'=0\\) 的通解为 \\(y(x)=\\underline{\\qquad}\\)。",
    answerText: "】 y = C 1 ​ + e x ( C 2 ​ cos 2 x + C 3 ​ sin 2 x ) 【",
    referenceAnswer: "【答案】 y = C 1 ​ + e x ( C 2 ​ cos 2 x + C 3 ​ sin 2 x ) 【解析】 本题主要考查高阶常系数齐次线性微分方程的解。此类题的解法为，先写出特征方程，然后根据特征方程的根的情况写出通解。 y ′′′ − 2 y ′′ + 5 y ′ = 0 的特征方程为 r 3 − 2 r 2 + 5 r = 0 ，分解因式得 r ( r 2 − 2 r + 5 ) = 0 ，解得 r 1 ​ = 0 ， r 2 , 3 ​ = 1 ± 2 i 。 根据常系数齐次线性微分方程的通解与特征方程的根的关系，可得 y ′′′ − 2 y ′′ + 5 y ′ = 0 的通解为 y = C 1 ​ + e x ( C 2 ​ cos 2 x + C 3 ​ sin 2 x ) ，其中 C 1 ​ 、 C 2 ​ 、 C 3 ​ 为任意常数。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(15, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）已知曲线 \\(L\\) 的极坐标方程为 \\(r=\\sin3\\theta\\;\\left(0\\le\\theta\\le\\frac\\pi3\\right),\\) 则 \\(L\\) 围成的有界区域的面积为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 12 π ​ 【",
    referenceAnswer: "【答案】 12 π ​ 【解析】 已知曲线 L 的极坐标方程为 r = sin 3 θ ( 0 ≤ θ ≤ 3 π ​ ) ，则 L 围成的有界区域的面积为 本题主要考查定积分在几何上的应用。对于由极坐标形式 r = r ( θ ) （ α ≤ θ ≤ β ）给出的封闭曲线 L ，其围成的平面图形的面积为 A = ∫ α β ​ 2 1 ​ [ r ( θ ) ] 2 d θ . 由面积公式得： A ​ = 2 1 ​ ∫ 0 3 π ​ ​ ( sin 3 θ ) 2 d θ = 4 1 ​ ∫ 0 3 π ​ ​ ( 1 − cos 6 θ ) d θ = 12 π ​ − 24 1 ​ sin 6 θ ​ 0 3 π ​ ​ = 12 π ​ . ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(16, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, mathHtml: true,
    stem: "（填空题）设 \\(A\\) 为 3 阶矩阵，交换 \\(A\\) 的第 2 行和第 3 行，再将第 2 列的 \\(-1\\) 倍加到第 1 列，得到矩阵\\(\\begin{pmatrix} -2&1&-1\\\\ 1&-1&0\\\\ -1&0&0 \\end{pmatrix},\\)则 \\(A^{-1}\\) 的迹 \\(\\operatorname{tr}(A^{-1})=\\underline{\\qquad}.\\)",
    answerText: "】 tr(A −1 )=−1。 【",
    referenceAnswer: "【答案】 tr(A −1 )=−1。 【解析】 记交换第 2、3 行的初等矩阵为 R=[[1,0,0],[0,0,1],[0,1,0]]。将第 2 列的 −1 倍加到第 1 列，即 C 1 ←C 1 −C 2 ，对应右乘 E=[[1,0,0],[−1,1,0],[0,0,1]]。 令 B=[[-2,1,−1],[1,−1,0],[−1,0,0]]。由题意 B=RAE，因此 A −1 =E B −1 R。 直接求得 B −1 =[[0,0,−1],[0,−1,−1],[−1,−1,1]]，从而 A −1 =[[0,−1,0],[0,0,−1],[−1,1,−1]]。 所以 tr(A −1 )=0+0−1=−1。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }]
  }),
  base(17, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知函数 \\(f(x)\\) 在 \\(x=1\\) 处可导且 \\(\\lim_{x\\to0}\\frac{f(e^{x^2})-3f(1+\\sin^2x)}{x^2}=2,\\) 求 \\(f'(1)\\)。",
    referenceAnswer: "【答案】 f ′ ( 1 ) = − 1 【解析】 由 f ( x ) 在 x = 1 处可导可得 f ( x ) 在 x = 1 处连续，故由 x → 0 lim ​ x 2 f ( e x 2 ) − 3 f ( 1 + sin 2 x ) ​ = 2 可得 x → 0 lim ​ [ f ( e x 2 ) − 3 f ( 1 + sin 2 x ) ] = f − 2 f ( 1 ) = 0 于是， f ( 1 ) = 0 。 另一方面， x → 0 lim ​ x 2 f ( e x 2 ) ​ = x → 0 lim ​ [ e x 2 − 1 f ( e x 2 ) − f ( 1 ) ​ ⋅ x 2 e x 2 − 1 ​ ] = f ′ ( 1 ) x → 0 lim ​ x 2 f ( 1 + sin 2 x ) ​ = x → 0 lim ​ [ ( 1 + sin 2 x ) − 1 f ( 1 + sin 2 x ) − f ( 1 ) ​ ⋅ x 2 sin 2 x ​ ] = f ′ ( 1 ) 因此， x → 0 lim ​ x 2 f ( e x 2 ) − 3 f ( 1 + sin 2 x ) ​ = f ′ ( 1 ) − 3 f ′ ( 1 ) = − 2 f ′ ( 1 ) = 2 综上所述， f ′ ( 1 ) = − 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(y(x)\\) 是微分方程 \\(2xy'-4y=2\\ln x-1\\) 的满足条件 \\(y(1)=\\frac14\\) 的解，求曲线 \\(y=y(x)\\) 在 \\(1\\le x\\le e\\) 上的弧长。",
    referenceAnswer: "【答案】 4 e 2 + 1 ​ 【解析】 整理原方程可得 y ′ − x 2 y ​ = 2 x 2 l n x − 1 ​ ，这是一个一阶非齐次线性微分方程。 由求解公式可得： y ​ = e ∫ x 2 ​ d x [ ∫ 2 x 2 ln x − 1 ​ ⋅ e − ∫ x 2 ​ d x d x + C ] = x 2 [ ∫ ln x ⋅ x − 3 d x − ∫ 2 1 ​ x − 3 d x + C ] = C x 2 − 2 ln x ​ . ​ 代入 y ( 1 ) = 4 1 ​ 可得 C = 4 1 ​ ，因此： y ( x ) = 4 x 2 ​ − 2 ln x ​ . 计算得： y ′ = 2 x ​ − 2 x 1 ​ = 2 1 ​ ( x − x 1 ​ ) . 代入曲线弧长的计算公式可得： s ​ = ∫ 1 e ​ 1 + [ y ′ ( x ) ] 2 ​ d x = ∫ 1 e ​ 4 1 ​ ( x + x 1 ​ ) 2 ​ d x = 2 1 ​ ∫ 1 e ​ ( x + x 1 ​ ) d x = 2 1 ​ ( 2 x 2 ​ + ln x ) ​ 1 e ​ = 4 e 2 + 1 ​ . ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知平面区域 \\(D=\\left\\{(x,y)\\mid y-2\\le x\\le\\sqrt{4-y^2},\\ 0\\le y\\le2\\right\\},\\) 计算 \\(I=\\iint_D\\frac{(x-y)^2}{x^2+y^2}\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 2 π − 2 【解析】 在极坐标系下计算，由 D 的表达式可知， D 是由直线 y = x + 2 、圆 x 2 + y 2 = 4 以及 x 轴围成的部分。 直线 y = x + 2 在极坐标系下的表示为 r = s i n θ − c o s θ 2 ​ ，圆 x 2 + y 2 = 4 在极坐标系下的表示为 r = 2 。 将 D 分为两部分 D 1 ​ 和 D 2 ​ ： D 1 ​ = { ( r , θ ) ∣ 0 ≤ r ≤ 2 , 0 ≤ θ ≤ 2 π ​ } D 2 ​ = { ( r , θ ) ∣ 0 ≤ r ≤ sin θ − cos θ 2 ​ , 2 π ​ ≤ θ ≤ π } 因此， ∬ D ​ x 2 + y 2 ( x − y ) 2 ​ d x d y ​ 极坐标变换 ​ ∬ D ​ r 2 r 2 ( cos θ − sin θ ) 2 ​ ⋅ r d r d θ = ∬ D ​ ( cos θ − sin θ ) 2 ⋅ r d r d θ = ∫ 0 2 π ​ ​ ( cos θ − sin θ ) 2 d θ ∫ 0 2 ​ r d r ∫ 2 π ​ π ​ ( cos θ − sin θ ) 2 d θ ∫ 0 s i n θ − c o s θ 2 ​ ​ r d r = 2 ∫ 0 2 π ​ ​ ( 1 − 2 sin θ cos θ ) d θ ∫ 2 π ​ π ​ ( cos θ − sin θ ) 2 ⋅ ( sin θ − cos θ ) 2 2 ​ d θ = 2 ( 2 π ​ − sin 2 θ ​ 0 2 π ​ ​ ) + ∫ 2 π ​ π ​ 2 d θ = 2 ( 2 π ​ − 1 ) + ( π − 2 π ​ ) × 2 = 2 π − 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(20, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知可微函数 \\(f(u,v)\\) 满足\\(\\frac{\\partial f(u,v)}{\\partial u}-\\frac{\\partial f(u,v)}{\\partial v} =2(u-v)e^{-(u+v)},\\)且 \\(f(u,0)=u^2e^{-u}.\\)（I）记 \\(g(x,y)=f(x,y-x)\\)，求 \\(\\dfrac{\\partial g(x,y)}{\\partial x}\\)；（II）求 \\(f(u,v)\\) 的表达式与极值。",
    referenceAnswer: "【答案】 (I) ∂ x ∂ g ( x , y ) ​ = ( 4 x − 2 y ) e − y (II) f ( u , v ) = ( u 2 + v 2 ) e − ( u + v ) ，极小值点为 ( 0 , 0 ) ，极小值为 0 。 【解析】 (I) 根据链式法则， ∂ x ∂ g ( x , y ) ​ = ∂ x ∂ f ( x , y − x ) ​ = f 1 ′ ​ ( x , y − x ) − f 2 ′ ​ ( x , y − x ) . 令 u = x ， v = y − x ，并代入 ∂ u ∂ f ( u , v ) ​ − ∂ v ∂ f ( u , v ) ​ = 2 ( u − v ) e − ( u + v ) 可得 f 1 ′ ​ ( x , y − x ) − f 2 ′ ​ ( x , y − x ) = 2 ( 2 x − y ) e − y , 因此， ∂ x ∂ g ( x , y ) ​ = ( 4 x − 2 y ) e − y . (II) 通过积分先计算 g ( x , y ) ，即 f ( x , y − x ) 的表达式： f ( x , y − x ) ​ = g ( x , y ) = ∫ ∂ x ∂ g ( x , y ) ​ d x = ∫ ( 4 x − 2 y ) e − y d x = ( 2 x 2 − 2 x y ) e − y + φ ( y ) = 2 x ( x − y ) e − y + φ ( y ) , ​ 其中 φ ( y ) 为关于 y 的一元函数。 令 u = x ， v = y − x ，可得 f ( u , v ) = − 2 uv e − ( u + v ) + φ ( u + v ) . 代入 f ( u , 0 ) = u 2 e − u 可得 φ ( u ) = u 2 e − u , 于是， f ( u , v ) = − 2 uv e − ( u + v ) + ( u + v ) 2 e − ( u + v ) = ( u 2 + v 2 ) e − ( u + v ) . 计算 f ( u , v ) 的驻点： f 1 ′ ​ ( u , v ) = ( 2 u − u 2 − v 2 ) e − ( u + v ) , f 2 ′ ​ ( u , v ) = ( 2 v − u 2 − v 2 ) e − ( u + v ) . 解方程组 { 2 u − u 2 − v 2 = 0 , 2 v − u 2 − v 2 = 0 , ​ 两式相减得 u = v ，将其代入 2 u − u 2 − v 2 = 0 可得 2 u − 2 u 2 = 0 ，从而 u = 0 或 u = 1 ，故驻点为 ( 0 , 0 ) 和 ( 1 , 1 ) 。 计算 f ( u , v ) 的二阶偏导数： f 11 ′′ ​ ( u , v ) f 12 ′′ ​ ( u , v ) f 22 ′′ ​ ( u , v ) ​ = ( u 2 + v 2 − 4 u + 2 ) e − ( u + v ) , = ( u 2 + v 2 − 2 u − 2 v ) e − ( u + v ) , = ( u 2 + v 2 − 4 v + 2 ) e − ( u + v ) . ​ 对点 ( 0 , 0 ) ： A = f 11 ′′ ​ ( 0 , 0 ) = 2 , B = f 12 ′′ ​ ( 0 , 0 ) = 0 , C = f 22 ′′ ​ ( 0 , 0 ) = 2 , 由于 A C − B 2 > 0 ，且 A > 0 ，故点 ( 0 , 0 ) 为 f ( u , v ) 的极小值点，极小值为 f ( 0 , 0 ) = 0 。 对点 ( 1 , 1 ) ： A = f 11 ′′ ​ ( 1 , 1 ) = 0 , B = f 12 ′′ ​ ( 1 , 1 ) = − 2 e − 2 , C = f 22 ′′ ​ ( 1 , 1 ) = 0 , 由于 A C − B 2 < 0 ，故点 ( 1 , 1 ) 不是极值点。 综上所述， f ( u , v ) 的表达式为 ( u 2 + v 2 ) e − ( u + v ) ，该函数有极小值，极小值为 f ( 0 , 0 ) = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(21, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）设函数 \\(f(x)\\) 在 \\((-\\infty,+\\infty)\\) 上有二阶连续导数。证明：\\(f''(x)\\ge0\\) 的充分必要条件是对任意不同的实数 \\(a,b\\)，都有 \\(f\\left(\\frac{a+b}{2}\\right)\\le\\frac{1}{b-a}\\int_a^b f(x)\\,dx\\) 成立。",
    referenceAnswer: "【答案】 见解析。 【解析】 不妨设 a<b，并记 m=(a+b)/2，h=(b−a)/2。 必要性： 若 f''(x)≥0，则 f 为凸函数。对任意 0≤t≤h，由凸性在中点处的性质， 2f(m)≤f(m−t)+f(m+t)。 两边从 0 到 h 积分，得到 2h·f(m)≤∫ 0 h [f(m−t)+f(m+t)]dt=∫ a b f(x)dx。 由于 2h=b−a，故 f((a+b)/2)≤(1/(b−a))∫ a b f(x)dx。 充分性： 反过来，假设上述不等式对任意不同的 a,b 都成立。固定任意 x，取 a=x−h、b=x+h（h>0），则 f(x)≤(1/(2h))∫ x−h x+h f(t)dt。 因为 f 有二阶连续导数，在 x 处作二阶 Taylor 展开：f(x+s)=f(x)+f'(x)s+(1/2)f''(x)s 2 +o(s 2 )。在 s∈[−h,h] 上积分并除以 2h，得 (1/(2h))∫ x−h x+h f(t)dt=f(x)+(f''(x)/6)h 2 +o(h 2 )。 代回不等式，除以 h 2 后令 h→0 + ，得到 f''(x)/6≥0，因此 f''(x)≥0。由于 x 任意，充分性得证。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 12, mathHtml: true,
    stem: "（本题满分 12 分）已知二次型 \\(f(x_1,x_2,x_3)=3x_1^2+4x_2^2+3x_3^2+2x_1x_3.\\)（I）求正交矩阵 \\(Q\\)，使正交变换 \\(x=Qy\\) 将二次型 \\(f(x_1,x_2,x_3)\\) 化为标准形；（II）证明\\(\\min_{x\\ne0}\\frac{f(x)}{x^Tx}=2.\\)",
    referenceAnswer: "【答案】 (I) 可取 Q = [ 1/√2   0   −1/√2\n      0      1    0\n      1/√2   0    1/√2 ] 则标准形为 4y 1 2 +4y 2 2 +2y 3 2 。 (II) 最小值为 2。 【解析】 二次型对应的实对称矩阵为 A=[[3,0,1],[0,4,0],[1,0,3]]。 其特征多项式为 |λI−A|=(λ−4) 2 (λ−2)，所以特征值为 4、4、2。可分别取单位特征向量 q 1 =(1/√2,0,1/√2) T ，q 2 =(0,1,0) T ，q 3 =(−1/√2,0,1/√2) T 。 令 Q=(q 1 ,q 2 ,q 3 )，则 Q T Q=I，且 Q T AQ=diag(4,4,2)。因此在 x=Qy 下， f(x)=4y 1 2 +4y 2 2 +2y 3 2 。 同时，x T x=(Qy) T (Qy)=y T Q T Qy=y T y=y 1 2 +y 2 2 +y 3 2 。 故对 x≠0（等价于 y≠0）， f(x)/(x T x)=[4y 1 2 +4y 2 2 +2y 3 2 ]/[y 1 2 +y 2 2 +y 3 2 ]≥2。 当 y 1 =y 2 =0 且 y 3 ≠0 时等号成立，因此最小值确实取到，且 min f(x)/(x T x)=2。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 12 }]
  }),
]

export const paper2022_math2 = {
  id: P, year: Y,
  title: '2022 年全国硕士研究生招生考试 数学（二）',
  short: '2022 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2022_math2.length,
  qids: questions2022_math2.map(q => q.id),
  note: '选择题 5 分、填空题 5 分，解答题按步骤自评。'
}
