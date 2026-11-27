const P = 'paper-2014-math3'
const Y = 2014
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2014-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2014 考研数学（三）真题',
  ...extra
})

export const questions2014_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nlimn→∞an=a\n，且\na=0\n，则当\nn\n充分大时有 ()",
    options: [{ key: "A", text: "∣ a n ​ ∣ > 2 ∣ a ∣ ​" }, { key: "B", text: "∣ a n ​ ∣ < 2 ∣ a ∣ ​" }, { key: "C", text: "a n ​ > a − n 1 ​" }, { key: "D", text: "a n ​ > a + n 1 ​" }],
    answer: ["A"],
    explain: "正确答案： A 根据极限的保号性推论：若 lim n → ∞ ​ a n ​ = a  = 0 ，则存在 N > 0 ，当 n > N 时， ∣ a n ​ ∣ > λ ∣ a ∣ , 0 < λ < 1 因此，正确答案为 (A)。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列曲线有渐近线的是",
    options: [{ key: "A", text: "y = x + sin x" }, { key: "B", text: "y = x 2 + sin x" }, { key: "C", text: "y = x + sin x 1 ​" }, { key: "D", text: "y = x 2 + sin x 1 ​" }],
    answer: ["C"],
    explain: "正确答案： C 计算过程如下： x → ∞ lim ​ x x + sin x 1 ​ ​ = x → ∞ lim ​ 1 + x → ∞ lim ​ x sin x 1 ​ ​ = 1 + 0 = 1 又因为： x → ∞ lim ​ [ x + sin x 1 ​ − x ] = x → ∞ lim ​ sin x 1 ​ = 0 所以函数 y = x + sin x 1 ​ 存在斜渐近线 y = x 。"
  }),
  base(3, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nP(x)=a+bx+cx2+dx3\n，当\nx→0\n时，若\nP(x)−tanx\n是比\nx3\n高阶的无穷小，则下列选项中错误的是",
    options: [{ key: "A", text: "a = 0" }, { key: "B", text: "b = 1" }, { key: "C", text: "c = 0" }, { key: "D", text: "d = 6 1 ​" }],
    answer: ["D"],
    explain: "正确答案： D 给定多项式 P ( x ) = a + b x + c x 2 + d x 3 ，已知 a = 0 。 计算极限： x → 0 lim ​ x 3 P ( x ) − tan x ​ = x → 0 lim ​ x 3 b x + c x 2 + d x 3 − tan x ​ = x → 0 lim ​ 3 x 2 b + 2 c x − sec 2 x ​ + d 由极限存在条件： x → 0 lim ​ ( b + 2 c x − sec 2 x ) = 0 ⟹ b = 1 进一步化简得： = x → 0 lim ​ 3 x 2 c ​ − 3 1 ​ + d = 0 ⟹ c = 0 , d = 3 1 ​"
  }),
  base(4, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\nf(x)\n具有二阶导数，\ng(x)=f(0)(1−x)+f(1)x\n，则在区间\n[0,1]\n上",
    options: [{ key: "A", text: "当 f ′′ ( x ) ≥ 0 时， f ( x ) ≥ g ( x )" }, { key: "B", text: "当 f ′ ( x ) ≥ 0 时， f ( x ) ≤ g ( x )" }, { key: "C", text: "当 f ′ ( x ) ≥ 0 时， f ( x ) ≥ g ( x )" }, { key: "D", text: "当 f ′′ ( x ) ≥ 0 时， f ( x ) ≤ g ( x )" }],
    answer: ["D"],
    explain: "正确答案： D 令 F ( x ) = g ( x ) − f ( x ) = f ( 0 ) ( 1 − x ) + f ( 1 ) x − f ( x ) ，则 F ( 0 ) = F ( 1 ) = 0 。 导数为： F ′ ( x ) = − f ( 0 ) + f ( 1 ) − f ′ ( x ) , F ′′ ( x ) = − f ′′ ( x ) 若 f ′′ ( x ) ≥ 0 ，则 F ′′ ( x ) ≤ 0 ，故 F ( x ) 在 [ 0 , 1 ] 上为凸函数。 由于 F ( 0 ) = F ( 1 ) = 0 ，对于 x ∈ [ 0 , 1 ] ，有 F ( x ) ≥ 0 ，即 g ( x ) ≥ f ( x ) 。 因此，本题应选 (D)。"
  }),
  base(5, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "行列式\n\n0a0ca0c0b0d00b0d= ?",
    options: [{ key: "A", text: "( a d − b c ) 2" }, { key: "B", text: "− ( a d − b c ) 2" }, { key: "C", text: "a 2 d 2 − b 2 c 2" }, { key: "D", text: "b 2 c 2 − a 2 d 2" }],
    answer: ["B"],
    explain: "正确答案： B 由行列式的展开定理展开第一列， ​ 0 a 0 c ​ a 0 c 0 ​ b 0 d 0 ​ 0 b 0 d ​ ​ = − a ​ a c 0 ​ b d 0 ​ 0 0 d ​ ​ − c ​ a 0 c ​ b 0 d ​ 0 b 0 ​ ​ 进一步计算得到： = − a d ( a d − b c ) + b c ( a d − b c ) = − ( a d − b c ) 2"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nα1\n、\nα2\n、\nα3\n均为三维向量，则对任意常数\nk\n、\nl\n，向量组\nα1+kα3\n、\nα2+lα3\n线性无关是向量\nα1\n、\nα2\n、\nα3\n线性无关的 ()",
    options: [{ key: "A", text: "必要非充分条件" }, { key: "B", text: "充分非必要条件" }, { key: "C", text: "充分必要条件" }, { key: "D", text: "既非充分也非必要条件" }],
    answer: ["A"],
    explain: "正确答案： A ( α 1 ​ + k α 3 ​ , α 2 ​ + l α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 1 0 k ​ 0 1 l ​ ​ 若 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性无关，则： r (( α 1 ​ + k α 3 ​ , α 2 ​ + l α 3 ​ )) = r ​ ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 1 0 k ​ 0 1 l ​ ​ ​ = r ​ 1 0 k ​ 0 1 l ​ ​ = 2 故 α 1 ​ + k α 3 ​ 与 α 2 ​ + l α 3 ​ 线性无关。 举反例令 α 3 ​ = 0 ，则 α 1 ​ 、 α 2 ​ 线性无关，但此时 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性相关。 综上所述，对任意常数 k ，向量 α 1 ​ + k α 3 ​ 与 α 2 ​ + l α 3 ​ 线性无关是向量 α 1 ​ 、 α 2 ​ 、 α 3 ​ 线性无关的必要非充分条件。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机事件\nA\n与\nB\n相互独立，且\nP(B)=0.5\n，\nP(A−B)=0.3\n，则\nP(B−A)=\n()",
    options: [{ key: "A", text: "0.1" }, { key: "B", text: "0.2" }, { key: "C", text: "0.3" }, { key: "D", text: "0.4" }],
    answer: ["B"],
    explain: "正确答案： B 已知 P ( A − B ) = 0.3 ， A 与 B 独立， P ( B ) = 0.5 。 根据概率差公式和独立性： P ( A − B ) ​ = P ( A ) − P ( A B ) = P ( A ) − P ( A ) P ( B ) = P ( A ) − 0.5 P ( A ) = 0.5 P ( A ) = 0.3 ​ 解得 P ( A ) = 0.6 。 再计算 P ( B − A ) ： P ( B − A ) ​ = P ( B ) − P ( A B ) = P ( B ) − P ( A ) P ( B ) = 0.5 − 0.5 × 0.6 = 0.5 − 0.3 = 0.2 ​ 应选 B 。"
  }),
  base(8, 'k-math-009', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nX1\n、\nX2\n、\nX3\n为来自正态总体\nN(0,σ2)\n的简单随机样本，则统计量\n\nS=2∣X3∣X1−X2\n\n服从的分布为 ()",
    options: [{ key: "A", text: "Γ ( 1 , 1 )" }, { key: "B", text: "F ( 2 , 1 )" }, { key: "C", text: "t ( 1 )" }, { key: "D", text: "N ( 0 , 1 )" }],
    answer: ["C"],
    explain: "正确答案： C X 1 ​ 、 X 2 ​ 、 X 3 ​ 来自总体 X ∼ N ( 0 , σ 2 ) ，则 X 1 ​ − X 2 ​ 与 ∣ X 3 ​ ∣ 独立。 X 1 ​ − X 2 ​ ∼ N ( 0 , 2 σ 2 ) 则 2 ​ σ X 1 ​ − X 2 ​ ​ ∼ N ( 0 , 1 ) 同样， σ X 3 ​ ​ ∼ N ( 0 , 1 ) 因此， σ 2 X 3 2 ​ ​ ∼ χ 2 ( 1 ) 利用分布的典型模式得到： σ 2 X 3 2 ​ ​ /1 ​ 2 ​ σ X 1 ​ − X 2 ​ ​ ​ ∼ t ( 1 ) 即 2 ​ ∣ X 3 ​ ∣ X 1 ​ − X 2 ​ ​ ∼ t ( 1 )"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设某商品的需求函数为\nQ=40−2p\n（\np\n为商品的价格），则该商品的边际收益为",
    answerText: "】 40 − 4 p 【",
    referenceAnswer: "【答案】 40 − 4 p 【解析】 收益函数为： R = P ⋅ Q = p ( 40 − 2 p ) 对应的边际收益为： d p d R ​ = 40 − 4 p",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nD\n是由曲线\nxy+1=0\n与直线\ny+x=0\n及\ny=2\n围成的有界区域，则\nD\n的面积为",
    answerText: "】 2 1 ​ + ln 2 【",
    referenceAnswer: "【答案】 2 1 ​ + ln 2 【解析】 该积分可以按如下方式计算： S = ∫ 0 1 ​ y d y + ∫ 1 2 ​ y 1 ​ d y 分别计算各部分： ∫ 0 1 ​ y d y = 2 y 2 ​ ​ 0 1 ​ = 2 1 ​ ∫ 1 2 ​ y 1 ​ d y = ln y ∣ 1 2 ​ = ln 2 合并结果： S = 2 1 ​ + ln 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\n∫0axe2xdx=41\n，则\na=",
    answerText: "】 2 1 ​ 【",
    referenceAnswer: "【答案】 2 1 ​ 【解析】 由于 ∫ x e 2 x d x = ( 2 x ​ − 4 1 ​ ) e 2 x + C ，则 ∫ 0 a ​ x e 2 x d x = ( 2 x ​ − 4 1 ​ ) e 2 x ​ 0 a ​ = ( 2 a ​ − 4 1 ​ ) e 2 a + 4 1 ​ 又 ∫ 0 a ​ x e 2 x d x = 4 1 ​ 所以 ( 2 a ​ − 4 1 ​ ) e 2 a = 0 即 a = 2 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）二次积分\n\n∫01dy∫y1(xex2−ey2)dx=",
    answerText: "】 2 1 ​ ( e − 1 ) 【",
    referenceAnswer: "【答案】 2 1 ​ ( e − 1 ) 【解析】 ​ ∫ 0 1 ​ d y ∫ y 1 ​ ( x e x 2 ​ − e y 2 ) d x = ∫ 0 1 ​ d y ∫ y 1 ​ x e x 2 ​ d x − ∫ 0 1 ​ d y ∫ y 1 ​ e y 2 d x = ∫ 0 1 ​ d x ∫ 0 x ​ x e x 2 ​ d y − ∫ 0 1 ​ ( 1 − y ) e y 2 d y = ∫ 0 1 ​ e x 2 d x − ∫ 0 1 ​ ( 1 − y ) e y 2 d y = ∫ 0 1 ​ y e y 2 d y = 2 1 ​ e y 2 ​ 0 1 ​ = 2 1 ​ ( e − 1 ) ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设二次型\nf(x1,x2,x3)=x12−x22+2ax1x3+4x2x3\n的负惯性指数是 1，则\na\n的取值范围为",
    answerText: "】 − 2 ≤ a ≤ 2 【",
    referenceAnswer: "【答案】 − 2 ≤ a ≤ 2 【解析】 配方法： f ( x 1 ​ , x 2 ​ , x 3 ​ ) = ( x 1 ​ + a x 3 ​ ) 2 − a 2 x 3 2 ​ − ( x 2 ​ − 2 x 3 ​ ) 2 + 4 x 3 2 ​ 由于二次型负惯性指数为1，所以： 4 − a 2 ≥ 0 故： − 2 ≤ a ≤ 2",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设总体\nX\n的概率密度为\n\nf(x,θ)={3θ22x,0,θx2θ其他\n\nX1,X2,⋯,Xn\n为来自总体\nX\n的样本，且满足\n\nE(ci=1∑nXi2)=θ2\n\n则\nc=",
    answerText: "】 c = 5 n 2 ​ 【",
    referenceAnswer: "【答案】 c = 5 n 2 ​ 【解析】 计算步骤如下： 首先计算 E ( X 2 ) ： E ( X 2 ) = ∫ − ∞ + ∞ ​ x 2 f ( x , θ ) d x = ∫ θ 2 θ ​ x 2 ⋅ 3 θ 2 2 x ​ d x = 3 θ 2 2 ​ ⋅ 4 1 ​ x 4 ​ θ 2 θ ​ = 2 5 θ 2 ​ 然后计算 E [ c ∑ i = 1 n ​ X i 2 ​ ] ： E [ c i = 1 ∑ n ​ X i 2 ​ ] = n c E ( X 2 ) = 2 5 n ​ θ 2 ⋅ c = θ 2 解得常数 c 为： c = 5 n 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求极限\n\nx→+∞limx2ln(1+x1)∫1x[t2(et2−1)−t]dt",
    referenceAnswer: "【答案】 2 1 ​ 【解析 x → ∞ lim ​ x 2 ln ( 1 + x 1 ​ ) ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ = x → ∞ lim ​ x 2 ⋅ x 1 ​ ∫ 1 x ​ [ t 2 ( e t 1 ​ − 1 ) − t ] d t ​ = x → + ∞ lim ​ [ x 2 ( e x 1 ​ − 1 ) − x ] 令 x 1 ​ = t ，则 t → 0 + lim ​ t 2 e t − 1 − t ​ = t → 0 + lim ​ 2 t e t − 1 ​ = t → 0 + lim ​ 2 t t ​ = 2 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n计算区域\nD={(x,y)∣1≤x2+y2≤4, x≥0, y≥0}\n上的二重积分\n\n∬Dx+yxsin(πx2+y2)dσ",
    referenceAnswer: "【答案】 -1/4 【解析】 关于 y = x 对称，满足轮换对称性，则： ​ ∬ D ​ x + y x sin ( π x 2 + y 2 ​ ) ​ d σ = 2 1 ​ ∬ D ​ ​ x + y x sin ( π x 2 + y 2 ​ ) ​ + x + y y sin ( π x 2 + y 2 ​ ) ​ ​ d x d y = 2 1 ​ ∬ D ​ sin ( π x 2 + y 2 ​ ) d x d y = 2 1 ​ ∫ 0 2 π ​ ​ d θ ∫ 1 2 ​ r sin ( π r ) d r = 4 π ​ [ − π r ​ cos ( π r ) + π 2 1 ​ sin ( π r ) ] 1 2 ​ = 4 π ​ [ − π 2 ​ cos ( 2 π ) + π 2 1 ​ sin ( 2 π ) + π 1 ​ cos ( π ) − π 2 1 ​ sin ( π ) ] = 4 π ​ ( − π 2 ​ + π 1 ​ ) = − 4 1 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(u)\n具有连续导数，且\nz=f(excosy)\n满足方程：\n\ncosy∂x∂z−siny∂y∂z=(4z+excosy)ex\n\n已知初始条件为\nf(0)=0\n和\nf′(0)=0\n，求\nf(u)\n的表达式。",
    referenceAnswer: "【答案】 f ( u ) = − 4 1 ​ u + 16 1 ​ ( e 4 u − 1 ) 【解析】 z = f ( e x cos y ) ，则： ∂ x ∂ z ​ = f ′ ( e x cos y ) ⋅ e x cos y ∂ y ∂ z ​ = f ′ ( e x cos y ) ⋅ ( − e x sin y ) 计算组合偏导数： cos y ⋅ ∂ x ∂ z ​ − sin y ⋅ ∂ y ∂ z ​ ​ = f ′ ( e x cos y ) ⋅ e x cos 2 y + f ′ ( e x cos y ) ⋅ e x sin 2 y = f ′ ( e x cos y ) ⋅ e x ​ 由已知条件： f ′ ( e x cos y ) ⋅ e x = ( 4 f ( e x cos y ) + e x cos y ) e x 令 t = e x cos y ，得到微分方程： f ′ ( t ) − 4 f ( t ) = t 求解该一阶线性微分方程： f ( t ) = e ∫ 4 d t [ ∫ t e − ∫ 4 d t d t + C ] = e 4 t [ ∫ t e − 4 t d t + C ] 计算积分： ∫ t e − 4 t d t = − 4 1 ​ t e − 4 t + 16 1 ​ e − 4 t + D 代入得到通解： f ( t ) = e 4 t ( − 4 1 ​ t e − 4 t + 16 1 ​ e − 4 t + C ) = − 4 1 ​ t + 16 1 ​ + C e 4 t 利用初始条件 f ( 0 ) = 0 ： 0 = − 4 1 ​ × 0 + 16 1 ​ + C e 0 ⟹ C = − 16 1 ​ 最终解为： f ( u ) = − 4 1 ​ u + 16 1 ​ ( e 4 u − 1 )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-013', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求幂级数\n∑n=0∞(n+1)(n+3)xn\n的收敛域及和函数。",
    referenceAnswer: "【答案】 收敛域为 ( − 1 , 1 ) ，和函数为 S ( x ) = ( 1 − x ) 3 3 − x ​ （ x ∈ ( − 1 , 1 ) ）。 【解析】 (I) 令 a n ​ = ( n + 1 ) ( n + 3 ) ，因为 n → ∞ lim ​ ​ a n ​ a n + 1 ​ ​ ​ = n → ∞ lim ​ ( n + 1 ) ( n + 3 ) ( n + 2 ) ( n + 4 ) ​ = 1 所以收敛半径 R = 1 。 当 x = 1 时， ∑ n = 0 ∞ ​ ( n + 1 ) ( n + 3 ) 发散；当 x = − 1 时， ∑ n = 0 ∞ ​ ( n + 1 ) ( n + 3 ) ( − 1 ) n 也发散。故收敛域为 ( − 1 , 1 ) 。 (II) 设 S ( x ) = ∑ n = 0 ∞ ​ ( n + 1 ) ( n + 3 ) x n ，令 σ ( x ) = ∑ n = 0 ∞ ​ ( n + 3 ) x n + 1 ，则 S ( x ) = σ ′ ( x ) 。 σ ( x ) ​ = n = 0 ∑ ∞ ​ ( n + 3 ) x n + 1 = n = 0 ∑ ∞ ​ ( n + 2 ) x n + 1 + n = 0 ∑ ∞ ​ x n + 1 = ( n = 0 ∑ ∞ ​ x n + 2 ) ′ + 1 − x x ​ = ( 1 − x x 2 ​ ) ′ + 1 − x x ​ = ( 1 − x ) 2 2 x − x 2 ​ + 1 − x x ​ = ( 1 − x ) 2 2 x − x 2 + x ( 1 − x ) ​ = ( 1 − x ) 2 3 x − 2 x 2 ​ ​ 所以 S ( x ) = ( ( 1 − x ) 2 3 x − 2 x 2 ​ ) ′ = ( 1 − x ) 3 3 − x ​ , x ∈ ( − 1 , 1 )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设函数\nf(x)\n,\ng(x)\n在区间\n[a,b]\n上连续，且\nf(x)\n单调增加，\n0≤g(x)≤1\n，证明：\n\n(I)\n0≤∫axg(t)dt≤x−a\n，\nx∈[a,b]\n；\n\n(II)\n∫aa+∫abg(t)dtf(x)dx≤∫abf(x)g(x)dx\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 由积分中值定理，存在 ζ ∈ [ a , x ] 使得 ∫ a x ​ g ( t ) d t = g ( ζ ) ( x − a ) 由于 0 ≤ g ( x ) ≤ 1 ，可得 0 ≤ g ( ζ ) ( x − a ) ≤ x − a 即 0 ≤ ∫ a x ​ g ( t ) d t ≤ x − a (II) 定义函数 F ( u ) = ∫ a b ​ f ( x ) g ( x ) d x − ∫ a a + ∫ a u ​ g ( t ) d t ​ f ( x ) d x 求导得 F ′ ( u ) ​ = f ( u ) g ( u ) − f ( a + ∫ a u ​ g ( t ) d t ) ⋅ g ( u ) = g ( u ) [ f ( u ) − f ( a + ∫ a u ​ g ( t ) d t ) ] ​ 由 (I) 可知 0 ≤ ∫ a u ​ g ( t ) d t ≤ u − a 因此 a ≤ a + ∫ a u ​ g ( t ) d t ≤ u 由于 f ( x ) 单调增加，有 f ( u ) ≥ f ( a + ∫ a u ​ g ( t ) d t ) 即 F ′ ( u ) ≥ 0 ，故 F ( u ) 在 [ a , b ] 上单调不减。从而 F ( b ) ≥ F ( a ) = 0 即 ∫ a a + ∫ a b ​ g ( t ) d t ​ f ( x ) d x ≤ ∫ a b ​ f ( x ) g ( x ) d x",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设矩阵\nA=101−2123−10−41−3\n，\nE\n为三阶单位阵。\n\n(I) 求方程组\nAx=0\n的一个基础解系；\n\n(II) 求满足\nAB=E\n的所有矩阵\nB\n。",
    referenceAnswer: "【答案】 (I) 方程组 Ax = 0 的一个基础解系为 ζ = ( − 1 , 2 , 3 , 1 ) T 。 (II) 满足 AB = E 的所有矩阵 B 为 B = ​ 1 − k 1 ​ 2 k 1 ​ 3 k 1 ​ k 1 ​ ​ − k 2 ​ 1 + 2 k 2 ​ 3 k 2 ​ k 2 ​ ​ − k 3 ​ 2 k 3 ​ 1 + 3 k 3 ​ k 3 ​ ​ ​ 其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数。 【解析】 (I) 对矩阵 A 进行初等行变换： ( A ∣0 ) ​ = ​ 1 0 1 ​ − 2 1 2 ​ 3 − 1 0 ​ − 4 1 − 3 ​ 0 0 0 ​ ​ → ​ 1 0 0 ​ − 2 1 4 ​ 3 − 1 − 3 ​ − 4 1 1 ​ 0 0 0 ​ ​ → ​ 1 0 0 ​ − 2 1 0 ​ 3 − 1 1 ​ − 4 1 − 3 ​ 0 0 0 ​ ​ → ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 − 2 − 3 ​ 0 0 0 ​ ​ ​ 所以方程组 A x = 0 的同解方程组为： ⎩ ⎨ ⎧ ​ x 1 ​ = − x 4 ​ x 2 ​ = 2 x 4 ​ x 3 ​ = 3 x 4 ​ ​ 令 x 4 ​ = 1 ，得基础解系为 ζ = ( − 1 , 2 , 3 , 1 ) T 。 (II) 设 B = ( b 1 ​ , b 2 ​ , b 3 ​ ) ，其中 b i ​ 为三维列向量，满足 A b i ​ = e i ​ （ e i ​ 为三阶单位阵的第 i 列）。 对于 A b 1 ​ = e 1 ​ = ( 1 , 0 , 0 ) T ，由(I)的行变换结果，增广矩阵为： ​ 1 0 0 ​ 0 1 0 ​ 0 0 1 ​ 1 − 2 − 3 ​ 1 0 0 ​ ​ 特解为 ( 1 , 0 , 0 , 0 ) T ，通解为： b 1 ​ = ( 1 , 0 , 0 , 0 ) T + k 1 ​ ( − 1 , 2 , 3 , 1 ) T = ( 1 − k 1 ​ , 2 k 1 ​ , 3 k 1 ​ , k 1 ​ ) T 同理，对于 A b 2 ​ = e 2 ​ = ( 0 , 1 , 0 ) T ，通解为： b 2 ​ = ( 0 , 1 , 0 , 0 ) T + k 2 ​ ( − 1 , 2 , 3 , 1 ) T = ( − k 2 ​ , 1 + 2 k 2 ​ , 3 k 2 ​ , k 2 ​ ) T 对于 A b 3 ​ = e 3 ​ = ( 0 , 0 , 1 ) T ，通解为： b 3 ​ = ( 0 , 0 , 1 , 0 ) T + k 3 ​ ( − 1 , 2 , 3 , 1 ) T = ( − k 3 ​ , 2 k 3 ​ , 1 + 3 k 3 ​ , k 3 ​ ) T 所以满足 A B = E 的所有矩阵 B 为： B = ​ 1 − k 1 ​ 2 k 1 ​ 3 k 1 ​ k 1 ​ ​ − k 2 ​ 1 + 2 k 2 ​ 3 k 2 ​ k 2 ​ ​ − k 3 ​ 2 k 3 ​ 1 + 3 k 3 ​ k 3 ​ ​ ​ 其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n证明\nn\n阶矩阵\n\nA=11⋮111⋮1⋯⋯⋱⋯11⋮1\n\n与\n\nB=00⋮0⋯⋯⋮⋯00⋱012⋮n\n\n相似。",
    referenceAnswer: "【答案】 见解析 【解析】 矩阵 A 可表示为 α β T ，其中 α = ( 1 , 1 , ⋯ , 1 ) T ， β = ( 1 , 1 , ⋯ , 1 ) T 。则 A 的特征值为 n （1重）和 0 （ n − 1 重）。 A 的秩为 1 ，所以属于特征值 0 的线性无关特征向量有 n − 1 个，故 A 相似于对角矩阵： Λ = ​ n ​ 0 ​ ⋱ ​ 0 ​ ​ 矩阵 B 的对角线元素为 0 , 0 , ⋯ , n ，其特征值为 n （1重）和 0 （ n − 1 重）。 B 的秩为 1 （因为除最后一列外其余列均为零向量，最后一列非零），所以属于特征值 0 的线性无关特征向量有 n − 1 个，故 B 也相似于对角矩阵 Λ 。 由相似关系的传递性，可知 A 与 B 相似。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n的概率分布为\nP{X=1}=P{X=2}=21\n，在给定\nX=i\n的条件下，随机变量\nY\n服从均匀分布\nU(0,i)\n（\ni=1,2\n）。\n\n(I) 求\nY\n的分布函数\nFY(y)\n。\n\n(II) 求\nEY\n。",
    referenceAnswer: "【答案】 (I) Y 的分布函数为 F Y ​ ( y ) = ⎩ ⎨ ⎧ ​ 0 , 4 3 y ​ , 2 1 ​ ( 1 + 2 y ​ ) , 1 , ​ y < 0 0 ≤ y < 1 1 ≤ y < 2 y ≥ 2 ​ (II) E Y = 4 3 ​ 【解析】 (I) 设 Y 的分布函数为 F Y ​ ( y ) ，则 F Y ​ ( y ) ​ = P ( Y ≤ y ) = P ( X = 1 ) P ( Y ≤ y ∣ X = 1 ) + P ( X = 2 ) P ( Y ≤ y ∣ X = 2 ) = 2 1 ​ P { Y ≤ y ∣ X = 1 } + 2 1 ​ P ( Y ≤ y ∣ X = 2 ) ​ 当 y < 0 时， F Y ​ ( y ) = 0 。 当 0 ≤ y < 1 时， F Y ​ ( y ) = 2 1 ​ ( y + 2 y ​ ) = 4 3 y ​ 。 当 1 ≤ y < 2 时， F Y ​ ( y ) = 2 1 ​ ( 1 + 2 y ​ ) 。 当 y ≥ 2 时， F Y ​ ( y ) = 1 。 所以 Y 的分布函数为 F Y ​ ( y ) = ⎩ ⎨ ⎧ ​ 0 , 4 3 y ​ , 2 1 ​ ( 1 + 2 y ​ ) , 1 , ​ y < 0 0 ≤ y < 1 1 ≤ y < 2 y ≥ 2 ​ (II) Y 的概率密度为 f Y ​ ( y ) = ⎩ ⎨ ⎧ ​ 4 3 ​ , 4 1 ​ , 0 , ​ 0 < y < 1 1 ≤ y < 2 其他 ​ 期望 E Y 的计算如下： E Y ​ = ∫ − ∞ + ∞ ​ y f Y ​ ( y ) d y = ∫ 0 1 ​ y 4 3 ​ d y + ∫ 1 2 ​ y 4 1 ​ d y = 4 3 ​ × 2 1 ​ + 4 1 ​ × 2 1 ​ ( 4 − 1 ) = 4 3 ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设随机变量\nX\n，\nY\n的概率分布相同，\nX\n的概率分布为\nP{X=0}=31\n，\nP{X=1}=32\n，且\nX\n与\nY\n的相关系数\nρXY=21\n。\n\n(I) 求\n(X,Y)\n的概率分布；\n\n(II) 求\nP{X+Y≤1}",
    referenceAnswer: "【答案】 (I) ( X , Y ) 的概率分布为： X = 0 X = 1 ​ Y = 0 9 1 ​ 9 2 ​ ​ Y = 1 9 2 ​ 9 5 ​ ​ ​ (II) P { X + Y ≤ 1 } = 9 4 ​ 【解析】 （I）相关系数由下式给出： ρ X Y ​ = D ( X ) ​ D ( Y ) ​ C o v ( X , Y ) ​ = D ( X ) ​ D ( Y ) ​ E ( X Y ) − E ( X ) E ( Y ) ​ 已知期望与方差为： E ( X Y ) = P { X = 1 , Y = 1 } , E ( X ) = 3 2 ​ , E ( Y ) = 3 2 ​ D ( X ) = D ( Y ) = 3 2 ​ × 3 1 ​ = 9 2 ​ 代入 ρ X Y ​ 可得： P { X = 1 , Y = 1 } = 9 5 ​ 因此， ( X , Y ) 的联合概率分布为： X = 0 X = 1 ​ Y = 0 9 1 ​ 9 2 ​ ​ Y = 1 9 2 ​ 9 5 ​ ​ ​ （II）概率 P { X + Y ≤ 1 } 的计算过程： P { X + Y ≤ 1 } = 1 − P { X + Y > 1 } = 1 − 9 5 ​ = 9 4 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2014_math3 = {
  id: P, year: Y,
  title: '2014 年全国硕士研究生招生考试 数学（三）',
  short: '2014 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2014_math3.length,
  qids: questions2014_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
