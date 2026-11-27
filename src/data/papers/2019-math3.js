const P = 'paper-2019-math3'
const Y = 2019
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2019-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2019 考研数学（三）真题',
  ...extra
})

export const questions2019_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "当\nx→0\n时，若\nx−tanx\n与\nxk\n是同阶无穷小，则\nk=",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2" }, { key: "C", text: "3" }, { key: "D", text: "4" }],
    answer: ["C"],
    explain: "正确答案： C x − tan x = x − ( x + 3 1 ​ x 3 + o ( x 3 ) ) ∼ − 3 1 ​ x 3 因此， k = 3 。"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知方程\nx5−5x+k=0\n有 3 个不同的实根，则\nk\n的取值范围为",
    options: [{ key: "A", text: "( − ∞ , − 4 )" }, { key: "B", text: "( 4 , + ∞ )" }, { key: "C", text: "[ − 4 , 4 ]" }, { key: "D", text: "( − 4 , 4 )" }],
    answer: ["D"],
    explain: "正确答案： D 令 f ( x ) = x 5 − 5 x + k ，则导数为： f ′ ( x ) = 5 x 4 − 5 = 5 ( x 4 − 1 ) = 5 ( x 2 + 1 ) ( x 2 − 1 ) 分析导数符号变化： 当 x < − 1 时， f ′ ( x ) > 0 ； 当 − 1 < x < 1 时， f ′ ( x ) < 0 ； 当 x > 1 时， f ′ ( x ) > 0 。 极限行为： x → + ∞ lim ​ f ( x ) = + ∞ , x → − ∞ lim ​ f ( x ) = − ∞ 结合单调性可知，当 f ( − 1 ) > 0 且 f ( 1 ) < 0 时，函数有三个实数根。即： f ( − 1 ) = − 1 + 5 + k > 0 , f ( 1 ) = 1 − 5 + k < 0 解得 k 的范围为： − 4 < k < 4"
  }),
  base(3, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "已知微分方程\ny′′+ay′+by=cex\n的通解为\ny=(C1+C2x)e−x+ex\n，则\na\n、\nb\n、\nc\n依次为",
    options: [{ key: "A", text: "1,0,1" }, { key: "B", text: "1,0,2" }, { key: "C", text: "2,1,3" }, { key: "D", text: "2,1,4" }],
    answer: ["D"],
    explain: "正确答案： D 由题干分析出 − 1 为特征方程 r 2 + a r + b = 0 的二重根，即 ( r + 1 ) 2 = 0 。 因此可得： a = 2 , b = 1 又因为 e x 为方程 y ′′ + 2 y ′ + y = c e x 的解，代入方程后得到： c = 4"
  }),
  base(4, 'k-math-005', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若\n∑n=1∞nun\n绝对收敛，若\n∑n=1∞nvn\n条件收敛，则",
    options: [{ key: "A", text: "∑ n = 1 ∞ ​ u n ​ v n ​ 条件收敛" }, { key: "B", text: "∑ n = 1 ∞ ​ u n ​ v n ​ 绝对收敛" }, { key: "C", text: "∑ n = 1 ∞ ​ ( u n ​ + v n ​ ) 收敛" }, { key: "D", text: "∑ n = 1 ∞ ​ ( u n ​ + v n ​ ) 发散" }],
    answer: ["B"],
    explain: "正确答案： B A、C 反例： u n ​ = n 3 1 ​ , v n ​ = ( − 1 ) n D 反例： u n ​ = n 3 1 ​ , v n ​ = ( − 1 ) n ln n 1 ​"
  }),
  base(5, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n是四阶矩阵，\nA∗\n是\nA\n的伴随矩阵。若线性方程组\nAx=0\n的基础解系中只有 2 个向量，则\nA∗\n的秩是",
    options: [{ key: "A", text: "0" }, { key: "B", text: "1" }, { key: "C", text: "2" }, { key: "D", text: "3" }],
    answer: ["A"],
    explain: "正确答案： A 由于 A X = 0 的基础解系有只有两个解向量，则由 4 − R ( A ) = 2 可得 R ( A ) = 2 < 3 。 故 R ( A ∗ ) = 0 。"
  }),
  base(6, 'k-math-019', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n是 3 阶实对称矩阵，\nE\n是 3 阶单位矩阵。若\nA2+A=2E\n，且\n∣A∣=4\n，则二次型\nxTAx\n的规范形为",
    options: [{ key: "A", text: "y 1 2 ​ + y 2 2 ​ + y 3 2 ​" }, { key: "B", text: "y 1 2 ​ + y 2 2 ​ − y 3 2 ​" }, { key: "C", text: "y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }, { key: "D", text: "− y 1 2 ​ − y 2 2 ​ − y 3 2 ​" }],
    answer: ["C"],
    explain: "正确答案： C ∵ A 2 + A = 2 E ，设 A 的特征值为 λ ， 则 λ 2 + λ = 2 ， 即 ( λ + 2 ) ( λ − 1 ) = 0 ， 因此 λ = − 2 或 1 。 ∵ ∣ A ∣ = 4 ， 所以 A 的特征值为 λ 1 ​ = λ 2 ​ = − 2 ， λ 3 ​ = 1 。 设 p = 1 ， q = 2 ，则 X T A X 的规范形为： y 1 2 ​ − y 2 2 ​ − y 3 2 ​"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n,\nB\n为随机事件，则\nP(A)=P(B)\n的充分必要条件是",
    options: [{ key: "A", text: "P ( A ∪ B ) = P + P" }, { key: "B", text: "P ( A B ) = PP" }, { key: "C", text: "P ( A B ) = P ( B A )" }, { key: "D", text: "P ( A B ) = P ( A B )" }],
    answer: ["C"],
    explain: "正确答案： C 选项 A ⇔ P ( A B ) = 0 ，因此排除 A。 选项 B ⇔ A 与 B 相互独立，因此排除 B。 选项 C ⇔ P ( A ) − P ( A B ) = P ( B ) − P ( A B ) ，可简化为 P ( A ) = P ( B ) ，因此 C 正确。 选项 D ⇔ P ( A B ) = P ( A ∪ B ) = 1 − P ( A ∪ B ) = 1 − P ( A ) − P ( B ) + P ( A B ) 。这意味着 1 = P ( A ) + P ( B ) ，因此排除 D。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\nX\n与\nY\n相互独立，且都服从正态分布\nN(μ,σ2)\n，则\nP{∣X−Y∣1}\n。",
    options: [{ key: "A", text: "与 μ 无关,而与 σ 2 有关." }, { key: "B", text: "与 μ 有关,而与 σ 2 无关." }, { key: "C", text: "与 μ , σ 2 都有关." }, { key: "D", text: "与 μ , σ 2 都无关." }],
    answer: ["A"],
    explain: "正确答案： A X 和 Y 独立且服从正态分布，则 Z = X − Y ∼ N ( 0 , 2 σ 2 ) 。 计算概率： P ( ∣ X − Y ∣ < 1 ) = P ( − 1 < Z < 1 ) 进一步展开： P ( ∣ X − Y ∣ < 1 ) = Φ ( 2 ​ σ 1 ​ ) − Φ ( 2 ​ σ − 1 ​ ) 其中， Φ 为标准正态分布的累积分布函数。"
  }),
  base(9, 'k-math-001', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）求极限：\n\nn→∞lim[1⋅21+2⋅31+⋯+n(n+1)1]",
    answerText: "】 e − 1 【",
    referenceAnswer: "【答案】 e − 1 【解析】 原式可表示为： n → ∞ lim ​ ( 1 − 2 1 ​ + 2 1 ​ − 3 1 ​ + ⋯ + n 1 ​ − n + 1 1 ​ ) n 进一步化简为： n → ∞ lim ​ ( 1 − n + 1 1 ​ ) n = e − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线\ny=xsinx+2cosx(−2πx23π)\n的拐点坐标为______",
    answerText: "】 ( π , − 2 ) 【",
    referenceAnswer: "【答案】 ( π , − 2 ) 【解析】 导数和二阶导数计算如下： y ′ = sin x + x cos x − 2 sin x = x cos x − sin x y ′′ = cos x − x sin x − cos x = − x sin x 令 y ′′ = 0 ，解得 x = 0 或 x = π 。 当 x > π 时， y ′′ > 0 ；当 x < π 时， y ′′ < 0 。因此，点 ( π , − 2 ) 为拐点。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）已知\nf(x)=∫1x1+t4dt\n，则\n∫01x2f(x)dx=\n______",
    answerText: "】 18 1 − 2 2 ​ ​ 【",
    referenceAnswer: "【答案】 18 1 − 2 2 ​ ​ 【解析】 ∫ 0 1 ​ x 2 f ( x ) d x ​ = 3 x 3 ​ f ( x ) ​ 0 1 ​ − ∫ 0 1 ​ 3 x 3 ​ f ′ ( x ) d x = 0 − ∫ 0 1 ​ 3 x 3 ​ 1 + x 4 ​ d x = − 3 1 ​ × 4 1 ​ ∫ 0 1 ​ 1 + x 4 ​ d ( 1 + x 4 ) = − 12 1 ​ ⋅ 3 2 ​ ( 1 + x 4 ) 2 3 ​ ​ 0 1 ​ = − 18 2 2 ​ − 1 ​ = 18 1 − 2 2 ​ ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）商品 A、B 的价格分别为\nPA\n、\nPB\n，需求函数为\n\nQA=500−PA2−PAPB+2PB2\n\n已知\nPA=10\n，\nPB=20\n，求商品 A 对自身价格的需求弹性\nηAA\n（\nη>0\n）：______",
    answerText: "】 5 2 ​ 【",
    referenceAnswer: "【答案】 5 2 ​ 【解析】 解析 当 P B ​ = 20 时，需求函数为： Q A ​ = 500 − P A 2 ​ − 20 P A ​ + 800 需求价格弹性公式为： η = ​ d P A ​ d Q A ​ ​ ⋅ Q A ​ P A ​ ​ ​ = ​ ( − 2 P A ​ − 20 ) ⋅ 1300 − P A 2 ​ − 20 P A ​ P A ​ ​ ​ 当 P A ​ = 10 时，弹性值为： η = 5 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设矩阵\nA=110011−1−1a2−1\n，向量\nb=01a\n。若线性方程组\nAX=b\n有无穷多解，则\na=\n______。",
    answerText: "】 a = 1 【",
    referenceAnswer: "【答案】 a = 1 【解析】 对于线性方程组 AX = b 有无穷多解的情况，需要满足秩条件： R ( A , b ) = R ( A ) ≤ 2 因此，行列式必须为零： ∣ A ∣ = a 2 − 1 = 0 解得： a = ± 1 进一步验证： 当 a = 1 时， R ( A , b ) = R ( A ) = 2 ，满足条件。 当 a = − 1 时， R ( A , b ) > R ( A ) ，不满足条件。 综上，唯一解为： a = 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-020', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）变量\nX\n的概率密度为\n\nf(x)={2x,0,0x2其他\n\nF(x)\n为\nX\n的分布函数，\nE(X)\n为\nX\n的数学期望，则\n\nP{F(X)>E(X)−1}=",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 概率密度函数为： f ( x ) = { 2 x ​ , 0 , ​ 0 < x < 2 其他 ​ 期望值计算： E ( x ) = ∫ − ∞ ∞ ​ x f ( x ) d x = ∫ 0 2 ​ 2 x 2 ​ d x = 6 1 ​ x 3 ​ 0 2 ​ = 3 4 ​ 累积分布函数： F ( x ) = ∫ − ∞ x ​ f ( t ) d t = ⎩ ⎨ ⎧ ​ 0 , ∫ 0 x ​ 2 t ​ d t , 1 , ​ x < 0 0 ≤ x < 2 x ≥ 2 ​ 求解概率： P ( F ( x ) > E ( x ) − 1 ) ​ = P ( F ( x ) > 3 1 ​ ) = P ( 4 x 2 ​ > 3 1 ​ ) = P ( x > 3 ​ 2 ​ ) = ∫ 3 ​ 2 ​ 2 ​ 2 x ​ d x = 3 2 ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知函数\n\nf(x)={x2x,xex+1,x>0,x≤0,\n\n求\nf′(x)\n并讨论\nf(x)\n的极值情况。",
    referenceAnswer: "【答案】 f ′ ( x ) = { x 2 x ( 2 ln x + 2 ) , e x ( 1 + x ) , ​ x > 0 x < 0 ​ 且 f ( x ) 在 x = 0 处取得极大值，极大值为 f ( 0 ) = 1 。 【解析】 当 x > 0 时，导数为： f ′ ( x ) = ( e 2 x l n x ) ′ = e 2 x l n x ( 2 ln x + 2 ) = x 2 x ( 2 ln x + 2 ) 当 x < 0 时，导数为： f ′ ( x ) = ( x e x ) ′ = e x + x e x 左导数和右导数的计算如下： f − ′ ​ ( 0 ) = x → 0 − lim ​ x − 0 f ( x ) − f ( 0 ) ​ = x → 0 − lim ​ x x e x + 1 − 1 ​ = 1 f + ′ ​ ( 0 ) = x → 0 + lim ​ x − 0 f ( x ) − f ( 0 ) ​ = x → 0 + lim ​ x x 2 x − 1 ​ = x → 0 + lim ​ x 2 x ln x ​ = − ∞ 综上，导函数为： f ′ ( x ) = { x 2 x ( 2 ln x + 2 ) , e x ( 1 + x ) , ​ x > 0 x < 0 ​ 在 x = 0 附近的分析： 当 x > 0 时， f ′ ( x ) < 0 ， f ( x ) 单调递减； 当 x < 0 时， f ′ ( x ) > 0 ， f ( x ) 单调递增。 因此， f ( x ) 在 x = 0 处取得极大值，极大值为 f ( 0 ) = 1 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知\nf(u,v)\n具有2阶连续偏导数，且\n\ng(x,y)=xy−f(x+y,x−y),\n\n求\n\n∂x2∂2g+∂x∂y∂2g+∂y2∂2g.",
    referenceAnswer: "【答案】 1 − 3 f 11 ′′ ​ − f 22 ′′ ​ 【解析】 给定函数关系式： g ( x , y ) = x y − f ( x + y , x − y ) 计算一阶偏导数： ∂ x ∂ g ​ = y − f 1 ′ ​ − f 2 ′ ​ ∂ y ∂ g ​ = x − f 1 ′ ​ + f 2 ′ ​ 计算二阶偏导数： ∂ x 2 ∂ 2 g ​ = − f 11 ′′ ​ − f 12 ′′ ​ − f 21 ′′ ​ − f 22 ′′ ​ = − f 11 ′′ ​ − 2 f 12 ′′ ​ − f 22 ′′ ​ ∂ x ∂ y ∂ 2 g ​ = 1 − f 11 ′′ ​ − f 12 ′′ ​ ( − 1 ) − f 21 ′′ ​ − f 22 ′′ ​ ( − 1 ) = 1 − f 11 ′′ ​ + f 22 ′′ ​ ∂ y 2 ∂ 2 g ​ = − f 11 ′′ ​ + f 12 ′′ ​ + f 21 ′′ ​ + f 22 ′′ ​ ( − 1 ) = − f 11 ′′ ​ + 2 f 12 ′′ ​ − f 22 ′′ ​ 最终组合结果： ∂ x 2 ∂ 2 g ​ + ∂ x ∂ y ∂ 2 g ​ + ∂ y 2 ∂ 2 g ​ = 1 − 3 f 11 ′′ ​ − f 22 ′′ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分），已知\ny(x)\n满足微分方程\n\ny′−xy=2x1e2x2,\n\n且有\ny(e)=e\n。\n求\ny(x)\n；设\nD={(x,y)∣1≤x≤2,0≤y≤y(x)}\n，求平面区域\nD\n绕\nx\n轴旋转成的旋转体积。",
    referenceAnswer: "【答案】 y ( x ) = x ​ e 2 x 2 ​ 平面区域 D 绕 x 轴旋转成的旋转体积为 2 π ​ ( e 4 − e ) 【解析】 (1) 解微分方程： y = e − ∫ ( − x ) d x ( ∫ 2 x ​ 1 ​ e 2 x 2 ​ e ∫ ( − x ) d x d x + C ) 化简得： y = e 2 x 2 ​ ( ∫ 2 x ​ 1 ​ d x + C ) = e 2 x 2 ​ ( x ​ + C ) 由初始条件 y ( e ) = e ​ 可得 C = 0 ，故解为： y = x ​ e 2 x 2 ​ (2) 计算旋转体体积： V = ∫ 1 2 ​ π y 2 d x = ∫ 1 2 ​ π x e x 2 d x = 2 π ​ ( e 4 − e )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求曲线\ny=e−xsinx\n（\nx≥0\n）与\nx\n轴之间图形的面积。",
    referenceAnswer: "【答案】 A = 2 1 ​ + e π − 1 1 ​ 【解析】 所求面积为： A = ∫ 0 + ∞ ​ ∣ e − x sin x ∣ d x 计算过程如下： ∫ 0 + ∞ ​ ∣ e − x sin x ∣ d x ​ = n → ∞ lim ​ k = 0 ∑ n ​ ( − 1 ) k ∫ kπ ( k + 1 ) π ​ e − x sin x d x = n → ∞ lim ​ k = 0 ∑ n ​ ( − 1 ) k [ − 2 1 ​ e − x ( cos x + sin x ) ] kπ ( k + 1 ) π ​ = 2 1 ​ n → ∞ lim ​ k = 0 ∑ n ​ ( − 1 ) k + 1 [ e − ( k + 1 ) π ( − 1 ) k + 1 − e − kπ ( − 1 ) k ] = 2 1 ​ n → ∞ lim ​ k = 0 ∑ n ​ [ e − ( k + 1 ) π + e − kπ ] = 2 1 ​ n → ∞ lim ​ [ 1 + 2 k = 1 ∑ n ​ e − kπ + e − ( n + 1 ) π ] = 2 1 ​ [ 1 + e π − 1 2 ​ ] = 2 1 ​ + e π − 1 1 ​ ​ 最终结果为： A = 2 1 ​ + e π − 1 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n设\nan=∫01xn1−x2dx(n=0,1,2,…)\n。\n\n证明：\n{an}\n单调递减；且\nan=n+2n−1an−2(n=2,3,…)\n；\n求\nlimn→∞an−1an\n。\n",
    referenceAnswer: "【答案】 (1) 见解析 (2) 当 n 为偶数时， lim n → ∞ ​ a n − 1 ​ a n ​ ​ = 2 π ​ ；当 n 为奇数时， lim n → ∞ ​ a n − 1 ​ a n ​ ​ = π 2 ​ 【解析】 (1) 令 x = sin t ，则 a n ​ = ∫ 0 2 π ​ ​ sin n t cos 2 t d t = ∫ 0 2 π ​ ​ sin n t ( 1 − sin 2 t ) d t = ∫ 0 2 π ​ ​ sin n t d t − ∫ 0 2 π ​ ​ sin n + 2 t d t 由奇偶性分析可得 a n ​ a n + 1 ​ ​ < 1 ，故 { a n ​ } 单调递减。且对奇数或偶数 n 均有 a n − 2 ​ a n ​ ​ = n + 2 n − 1 ​ ⇒ a n ​ = n + 2 n − 1 ​ a n − 2 ​ , n ≥ 2 (2) 按奇偶性讨论极限： 若 n 为偶数， n → ∞ lim ​ a n − 1 ​ a n ​ ​ = 2 π ​ 若 n 为奇数， n → ∞ lim ​ a n − 1 ​ a n ​ ​ = π 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n已知向量组\n\n(I)α1=114,α2=104,α3=12a2+3,\n\n(II)β1=11a+3,β2=021−a,β3=13a2+3.\n\n若向量组 (I) 和向量组 (II) 等价，求\na\n的取值，并将\nβ3\n用\nα1\n、\nα2\n、\nα3\n线性表示。",
    referenceAnswer: "【答案】 a = 1 ，且 β 3 ​ = ( − k − 1 ) α 1 ​ + k α 2 ​ + 2 α 3 ​ ，其中 k 为任意实数。 【解析】 ​ 1 1 4 ​ 1 0 4 ​ 1 2 a 2 + 3 ​ ​ → ​ 1 0 0 ​ 1 − 1 0 ​ 1 1 a 2 − 1 ​ ​ ​ 1 1 a + 3 ​ 0 2 1 − a ​ 1 3 a 2 + 3 ​ ​ → ​ 1 0 0 ​ 0 2 1 − a ​ 1 2 a 2 − a ​ ​ 所以 a = 1 。 ​ 1 1 4 ​ 1 0 4 ​ 1 2 4 ​ ⋮ ⋮ ⋮ ​ 1 3 4 ​ ​ → ​ 1 0 0 ​ 1 0 0 ​ 1 1 0 ​ ⋮ ⋮ ⋮ ​ − 1 2 0 ​ ​ 所以 β 3 ​ = k ​ − 1 1 0 ​ ​ + ​ − 1 0 2 ​ ​ , k ∈ R 。 因此， β 3 ​ = ( − k − 1 ) α 1 ​ + k α 2 ​ + 2 α 3 ​ , k ∈ R 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）已知矩阵\nA=−220−2x01−2−2\n与\nB=2001−1000y\n相似，\n\n（1）求\nx\n与\ny\n的值；\n\n（2）求可逆矩阵\nP\n使得\nP−1AP=B\n；",
    referenceAnswer: "【答案】 （1） x = 3 , y = − 2 ；\n（2） P = ​ − 1 2 0 ​ − 1 1 0 ​ − 1 2 4 ​ ​ 。 【解析】 （1） 由 A ∼ B 可得： { tr A = tr B ∣ A ∣ = ∣ B ∣ ​ ⇒ { 2 x + y = 4 x − y = 5 ​ 解得 x = 3 ， y = − 2 。 （2） 由 ∣ λ E − A ∣ = ∣ λ E − B ∣ = 0 得 A 和 B 的特征值为 λ 1 ​ = 2 ， λ 2 ​ = − 1 ， λ 3 ​ = − 2 。 对于 λ 1 ​ = 2 ，解 ( 2 E − A ) x = 0 和 ( 2 E − B ) x = 0 ，得到 A 和 B 的线性无关特征向量分别为： α 1 ​ = ( − 1 , 2 , 0 ) T , β 1 ​ = ( 1 , 0 , 0 ) T 对于 λ 2 ​ = − 1 ，解 ( − E − A ) x = 0 和 ( − E − B ) x = 0 ，得到： α 2 ​ = ( − 2 , 1 , 0 ) T , β 2 ​ = ( − 1 , 3 , 0 ) T 对于 λ 3 ​ = − 2 ，解 ( − 2 E − A ) x = 0 和 ( − 2 E − B ) x = 0 ，得到： α 3 ​ = ( − 1 , 2 , 0 ) T , β 3 ​ = ( 0 , 0 , 1 ) T 设 P 1 ​ = ( α 1 ​ , α 2 ​ , α 3 ​ ) ， P 2 ​ = ( β 1 ​ , β 2 ​ , β 3 ​ ) ，则： P 1 − 1 ​ A P 1 ​ = P 2 − 1 ​ B P 2 ​ = ​ 2 ​ − 1 ​ − 2 ​ ​ 从而 P 2 ​ P 1 − 1 ​ A P 1 ​ P 2 − 1 ​ = B 。 令 P = P 1 ​ P 2 − 1 ​ ，即： P = ​ − 1 2 0 ​ − 1 1 0 ​ − 1 2 4 ​ ​ 满足 P − 1 A P = B 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）设随机变量\nX\n与\nY\n相互独立，\nX\n服从参数为1的指数分布，\nY\n的概率分布为\nP{Y=−1}=p\n，\nP{Y=1}=1−p\n。令\nZ=XY\n。\n\n(1) 求\nZ\n的概率密度；\n\n(2)\np\n为何值时，\nX\n与\nZ\n不相关；\n\n(3)\nX\n与\nZ\n是否相互独立；",
    referenceAnswer: "【答案】 (1) Z 的概率密度为： f Z ​ ( z ) = ⎩ ⎨ ⎧ ​ ( 1 − p ) e − z , p e z , 0 , ​ z > 0 z < 0 其他 ​ (2) 当 p = 2 1 ​ 时， X 与 Z 不相关。 (3) X 与 Z 不相互独立。 【解析】 （1）首先计算 F Z ​ ( z ) ： F Z ​ ( z ) ​ = P ( X Y ≤ z ) = P ( X Y ≤ z , Y = − 1 ) + P ( X Y ≤ z , Y = 1 ) = P ( − X ≤ z ) P ( Y = − 1 ) + P ( X ≤ z ) P ( Y = 1 ) = pP ( X ≥ − z ) + ( 1 − p ) P ( X ≤ z ) = p ( 1 − F X ​ ( − z )) + ( 1 − p ) F X ​ ( z ) ​ 已知 f X ​ ( z ) 的表达式为： f X ​ ( z ) = { e − z , 0 , ​ z > 0 其他 ​ f X ​ ( − z ) = { e z , 0 , ​ z < 0 其他 ​ 因此， f Z ​ ( z ) 的表达式为： f Z ​ ( z ) = p f X ​ ( − z ) + ( 1 − p ) f X ​ ( z ) f Z ​ ( z ) = ⎩ ⎨ ⎧ ​ ( 1 − p ) e − z , p e z , 0 , ​ z > 0 z < 0 其他 ​ （2）计算协方差 cov ( X , Z ) ： cov ( X , Z ) = 0 cov ( X , X Y ) = 0 进一步展开： cov ( X , X Y ) ​ = E ( X 2 Y ) − E ( X ) E ( X Y ) = E ( X 2 ) E ( Y ) − ( E ( X ) ) 2 E ( Y ) = E ( Y ) D ( X ) ​ 代入具体值： cov ( X , X Y ) = 1 − 2 p 当 1 − 2 p = 0 时， X 与 Z 不相关，解得： p = 2 1 ​ （3） X 与 Z 不独立。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）设总体\nX\n的概率密度为\n\nf(x,σ2)=⎩⎨⎧σAe−2σ2(x−μ)2,0,x≥μxμ\n\n其中\nμ\n是已知参数，\nσ>0\n是未知参数，\nA\n是常数，\nX1,X2,⋯,Xn\n是来自总体\nX\n的简单随机样本。\n\n（1）求\nA\n；\n\n（2）求\nσ2\n的最大似然估计量；",
    referenceAnswer: "【答案】 (1) A = π 2 ​ ​ (2) σ ^ 2 = n 1 ​ ∑ i = 1 n ​ ( x i ​ − μ ) 2 【解析】 (1) 根据概率密度归一性，有 ∫ μ + ∞ ​ σ A ​ e − 2 σ 2 ( x − μ ) 2 ​ d x = 1 设 σ x − μ ​ = t ，则 ∫ μ + ∞ ​ σ A ​ e − 2 σ 2 ( x − μ ) 2 ​ d x = ∫ 0 + ∞ ​ A e − 2 t 2 ​ d t = 2 2 π ​ ​ A = 1 解得 A = π 2 ​ ​ 。 (2) 似然函数为 L ( σ ) = σ n A n ​ e − 2 σ 2 ∑ i = 1 n ​ ( x i ​ − μ ) 2 ​ 取对数得 ln ( L ( σ )) = n ln A − 2 n ​ ln σ 2 − 2 σ 2 ∑ i = 1 n ​ ( x i ​ − μ ) 2 ​ 对 σ 2 求导，有 d ( σ 2 ) d ( ln ( L ( σ ))) ​ = − 2 σ 2 n ​ + 2 ( σ 2 ) 2 ∑ i = 1 n ​ ( x i ​ − μ ) 2 ​ = 0 解得 σ 2 = n 1 ​ i = 1 ∑ n ​ ( x i ​ − μ ) 2 因此， σ 2 的最大似然估计量为 σ ^ 2 = n 1 ​ i = 1 ∑ n ​ ( x i ​ − μ ) 2",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2019_math3 = {
  id: P, year: Y,
  title: '2019 年全国硕士研究生招生考试 数学（三）',
  short: '2019 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2019_math3.length,
  qids: questions2019_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
