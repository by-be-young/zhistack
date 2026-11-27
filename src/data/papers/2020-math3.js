const P = 'paper-2020-math3'
const Y = 2020
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math3-2020-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2020 考研数学（三）真题',
  ...extra
})

export const questions2020_math3 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nlimx→∞x−af(x)−a=b\n，则\nlimx→∞x−asinf(x)−sina",
    options: [{ key: "A", text: "b sin a" }, { key: "B", text: "b cos a" }, { key: "C", text: "b sin f ( a )" }, { key: "D", text: "b cos f ( a )" }],
    answer: ["B"],
    explain: "正确答案： B 解析 利用中值定理可得： x → a lim ​ x − a sin f ( x ) − sin a ​ = x → a lim ​ x − a cos ξ [ f ( x ) − a ] ​ = b x → a lim ​ cos ξ 其中 ξ 介于 a 与 f ( x ) 之间。 由于 lim x → a ​ cos ξ = cos a 且 f ( a ) = a ，因此： x → a lim ​ x − a sin f ( x ) − sin a ​ = b cos a"
  }),
  base(2, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "函数\nf(x)=(ex−1)(x−2)ex−11ln∣1+x∣\n的第二类间断点的个数为",
    options: [{ key: "A", text: "1" }, { key: "B", text: "2" }, { key: "C", text: "3" }, { key: "D", text: "4" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】题目中 f ( x ) = ( e x − 1 ) ( x − 2 ) e x − 1 1 ​ l n ∣1 + x ∣ ​ 的极限分析如下： 当 x → 0 时： x → 0 lim ​ f ( x ) = x → 0 lim ​ ( e x − 1 ) ( x − 2 ) e x − 1 1 ​ ln ( 1 + x ) ​ = − 2 e − 1 ​ x → 0 lim ​ x x ​ = − 2 e 1 ​ , 当 x → 1 + 时： x → 1 + lim ​ f ( x ) = x → 1 + lim ​ ( e x − 1 ) ( x − 2 ) e x − 1 1 ​ ln ∣1 + x ∣ ​ = x → 1 − lim ​ ( e − 1 ) ( 1 − 2 ) e x − 1 1 ​ ln ∣1 + 1∣ ​ = ∞ , 当 x → 2 时： x → 2 lim ​ f ( x ) = x → 2 lim ​ ( e x − 1 ) ( x − 2 ) e x − 1 1 ​ ln ∣1 + x ∣ ​ = x → 2 lim ​ ( e 2 − 1 ) ( x − 2 ) e 2 − 1 1 ​ ln ∣1 + 2∣ ​ = ∞ , 当 x → − 1 时： x → − 1 lim ​ f ( x ) = x → − 1 lim ​ ( e x − 1 ) ( x − 2 ) e x − 1 1 ​ ln ∣1 + x ∣ ​ = ∞. 综上，正确答案为 (C)。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设奇函数\nf(x)\n在\n(−∞,+∞)\n上具有连续导数，则",
    options: [{ key: "A", text: "∫ 0 x ​ [ cos f ( t ) + f ′ ( t )] d t 是奇函数" }, { key: "B", text: "∫ 0 x ​ [ cos f ( t ) + f ′ ( t )] d t 是偶函数" }, { key: "C", text: "∫ 0 x ​ [ cos f ′ ( t ) + f ( t )] d t 是奇函数" }, { key: "D", text: "∫ 0 x ​ [ cos f ′ ( t ) + f ( t )] d t 是偶函数" }],
    answer: ["A"],
    explain: "正确答案： A 解析 对于选项 (A)，由于 F ′ ( x ) = [ ∫ 0 x ​ [ cos f ( t ) + f ′ ( t )] d t ] ′ = cos f ( x ) + f ′ ( x ) , 且 F ′ ( − x ) = cos [ f ( − x )] + f ′ ( − x ) = cos f ( x ) + f ′ ( x ) , 因此 F ′ ( x ) 为偶函数。 于是， F ( x ) = ∫ 0 x ​ [ cos f ( t ) + f ′ ( t )] d t 为奇函数，故 (A) 正确，(B) 错误。"
  }),
  base(4, 'k-math-013', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设幂级数\n∑n=1∞nan(x−2)n\n的收敛区间为\n(−2,6)\n，则\n∑n=1∞an(x+1)2n\n的收敛区间为",
    options: [{ key: "A", text: "(-2,6)" }, { key: "B", text: "(-3,1)" }, { key: "C", text: "(-5,3)" }, { key: "D", text: "(-17,15)" }],
    answer: ["C"],
    explain: "正确答案： C 解析 由于 ∑ n = 1 ∞ ​ n a n ​ ( x − 2 ) n 与 ∑ n = 1 ∞ ​ a n ​ ( x + 1 ) n 的收敛半径相同，因此由题设可知 ∑ n = 1 ∞ ​ n a n ​ ( x − 2 ) n 的收敛区间为 ( − 2 , 6 ) ，其收敛半径为 R = 4 。 于是， ∑ n = 1 ∞ ​ a n ​ ( x + 1 ) n 的收敛区间为 ( − 1 − 4 , − 1 + 4 ) ，即 ( − 5 , 3 ) 。"
  }),
  base(5, 'k-math-016', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设4阶矩阵\nA=(aij)\n不可逆，\na12\n的代数余子式\nA12=0\n，\nα1\n,\nα2\n,\nα3\n,\nα4\n为矩阵\nA\n的列向量组，\nA∗\n为\nA\n的伴随矩阵，则方程组\nA∗x=0\n的通解为",
    options: [{ key: "A", text: "x = k 1 ​ α 1 ​ + k 2 ​ α 2 ​ + k 3 ​ α 3 ​ ,其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数" }, { key: "B", text: "x = k 1 ​ α 1 ​ + k 2 ​ α 2 ​ + k 3 ​ α 4 ​ ,其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数" }, { key: "C", text: "x = k 1 ​ α 1 ​ + k 2 ​ α 3 ​ + k 3 ​ α 4 ​ ,其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数" }, { key: "D", text: "x = k 1 ​ α 2 ​ + k 2 ​ α 3 ​ + k 3 ​ α 4 ​ ,其中 k 1 ​ , k 2 ​ , k 3 ​ 为任意常数" }],
    answer: ["C"],
    explain: "正确答案： C 因为 A 不可逆，所以 r ( A ) < 4 。又因为 A 12 ​  = 0 ，故 r ( A ∗ ) ≥ 1 ，所以 r ( A ) ≥ n − 1 = 3 , r ( A ) = 3 , r ( A ∗ ) = 1 , ∣ A ∣ = 0 由于 A 12 ​  = 0 ，所以 α 1 ​ , α 3 ​ , α 4 ​ 线性无关。 A ∗ x = 0 的基础解系中有 4 − 1 = 3 个无关解向量。又因为 A ∗ A = ∣ A ∣ E = 0 ，所以 A 的列向量为 A ∗ x = 0 的解。 因此， A ∗ x = 0 的通解为 k 1 ​ α 1 ​ + k 2 ​ α 3 ​ + k 3 ​ α 4 ​ 。"
  }),
  base(6, 'k-math-019', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n为 3 阶矩阵，\nα1,α2\n为\nA\n属于特征值为 1 的线性无关的特征向量，\nα3\n为\nA\n的属于特征值\n−1\n的特征向量，则满足\n\nP−1AP=1000−10001\n\n的可逆矩阵\nP\n为",
    options: [{ key: "A", text: "( α 1 ​ + α 3 ​ , α 2 ​ , − α 3 ​ )" }, { key: "B", text: "( α 1 ​ + α 2 ​ , α 2 ​ , − α 3 ​ )" }, { key: "C", text: "( α 1 ​ + α 3 ​ , − α 3 ​ , α 2 ​ )" }, { key: "D", text: "( α 1 ​ + α 2 ​ , − α 3 ​ , α 2 ​ )" }],
    answer: ["D"],
    explain: "正确答案： D 解析 由于 α 1 ​ 和 α 2 ​ 线性无关，且为特征值 1 对应的特征向量，所以 1 至少为 2 重特征值。 因为 α 3 ​ 为 -1 对应的特征向量，且 A 为 3 阶矩阵，所以 A 的特征值为 1, 1, -1。 在矩阵 P − 1 A P 中，第二列为 -1 对应的特征向量，故 P 的第二列应为 α 3 ​ 的线性组合，而第一列和第三列为 α 1 ​ 和 α 2 ​ 的线性组合。因此，正确答案为 (D)。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\nA\n、\nB\n、\nC\n为三个随机事件，且\nP(A)=P(B)=P(C)=41\n，\nP(AB)=0\n，\nP(AC)=P(BC)=121\n。则\nA\n、\nB\n、\nC\n中恰有一个事件发生的概率为",
    options: [{ key: "A", text: "4 3 ​" }, { key: "B", text: "3 2 ​" }, { key: "C", text: "2 1 ​" }, { key: "D", text: "12 5 ​" }],
    answer: ["D"],
    explain: "正确答案： D 解析 法1: A、B、C 中恰有一个事件发生的概率为 P ( A B ˉ C ˉ ) + P ( A ˉ B C ˉ ) + P ( A ˉ B ˉ C ) 。 P ( A BC ) = P ( A B ) − P ( A B C ) = P ( A ) − P ( A B ) − [ P ( A C ) − P ( A BC )] P ( A B C ) = P ( A B ) − P ( A BC ) = P ( B ) − P ( A B ) − [ P ( BC ) − P ( BC A )] P ( A BC ) = P ( B C ) − P ( B C A ) = P ( C ) − P ( CB ) − [ P ( C A ) − P ( C A B )] 因为 P ( A B ) = 0 ，而 A BC ⊂ A B ，则 0 ≤ P ( A BC ) ≤ P ( A B ) = 0 ，故 P ( A BC ) = 0 。 将题干的已知代入以上三个式子中，得 P ( A BC ) = 4 1 ​ − 12 1 ​ = 12 2 ​ , P ( A B C ) = 4 1 ​ − 12 1 ​ = 12 2 ​ , P ( A BC ) = 4 1 ​ − 12 1 ​ − 12 1 ​ = 12 1 ​ 故所求概率为 12 2 ​ + 12 2 ​ + 12 1 ​ = 12 5 ​ ，故选 (D)。 法2: p = P ( A + B + C ) − P ( A B ) − P ( A C ) − P ( BC ) + 2 P ( A BC ) 。 P ( A B ) = 0 ⇒ P ( A BC ) = 0 P ( A + B + C ) ​ = P ( A ) + P ( B ) + P ( C ) − P ( A B ) − P ( A C ) − P ( BC ) + P ( A BC ) = 4 1 ​ + 4 1 ​ + 4 1 ​ − 0 − 12 1 ​ − 12 1 ​ + 0 = 12 7 ​ ​ p = P ( A + B + C ) − P ( A B ) − P ( A C ) − P ( BC ) + 2 P ( A BC ) = 12 7 ​ − 0 − 12 1 ​ − 12 1 ​ + 0 = 12 5 ​ 故选 (D)。"
  }),
  base(8, 'k-math-020', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设随机变量\n(X,Y)\n服从二维正态分布\nN(0,0;1,4;−21)\n，则下列随机变量中服从标准正态分布且与\nX\n独立的是",
    options: [{ key: "A", text: "5 5 ​ ​ ( X + Y )" }, { key: "B", text: "5 5 ​ ​ ( X − Y )" }, { key: "C", text: "3 3 ​ ​ ( X + Y )" }, { key: "D", text: "3 3 ​ ​ ( X − Y )" }],
    answer: ["C"],
    explain: "正确答案： C 解析 由已知， C o v ( X , Y ) = − 2 1 ​ ⋅ 1 ⋅ 4 ​ = − 1 。 而只有 C o v ( X , X + Y ) = D ( X ) + C o v ( X , Y ) = 0 , 故与 X 相互独立的只有 (A) 和 (C)。 又因为 D ( X + Y ) = D ( X ) + D ( Y ) + 2 C o v ( X , Y ) = 3 , 所以 3 3 ​ ​ ( X + Y ) ∼ N ( 0 , 1 ) ，选 (C)。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nz=arctan[xy+sin(x+y)]\n，则\ndz∣(0,π)=",
    answerText: "】 d z ∣ ( 0 , π ) ​ = ( π − 1 ) d x − d y 【",
    referenceAnswer: "【答案】 d z ∣ ( 0 , π ) ​ = ( π − 1 ) d x − d y 【解析】 计算 z 在点 ( 0 , π ) 处关于 x 的偏导数： ∂ x ∂ z ​ ​ ( 0 , π ) ​ = 1 + [ x y + sin ( x + y ) ] 2 y + cos ( x + y ) ​ ​ ( 0 , π ) ​ = 1 + sin 2 π π + cos π ​ = π − 1 计算 z 在点 ( 0 , π ) 处关于 y 的偏导数： ∂ y ∂ z ​ ​ ( 0 , π ) ​ = 1 + [ x y + sin ( x + y ) ] 2 x + cos ( x + y ) ​ ​ ( 0 , π ) ​ = 1 + sin 2 π cos π ​ = − 1 因此， z 在点 ( 0 , π ) 处的全微分为： d z ∣ ( 0 , π ) ​ = ( π − 1 ) d x − d y",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）曲线\nx+y+e2xy=0\n在点\n(0,−1)\n处的切线方程为",
    answerText: "】 y = x − 1 【",
    referenceAnswer: "【答案】 y = x − 1 【解析】 方程两边对 x 求导得： 1 + y ′ + e 2 x y ( 2 y + 2 x y ′ ) = 0 代入 x = 0 ， y = − 1 ，得到： y ′ = 1 因此，切线方程为： y = x − 1",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设\nQ\n表示产量，成本\nC(Q)=100+13Q\n，单价\np\n，需求量\nq(p)=p+3800−2\n，则工厂取得利润最大时的产量为。",
    answerText: "】 8 【",
    referenceAnswer: "【答案】 8 【解析】 由需求函数 Q ( P ) = p + 3 800 ​ − 2 ，可得反需求函数： P = Q + 2 800 ​ − 3 利润函数为： L ( Q ) = PQ − C ( Q ) = ( Q + 2 800 ​ − 3 ) Q − ( 100 + 13 Q ) 化简后得到： L ( Q ) = − Q + 2 1600 ​ − 16 Q + 700 求导并令导数为零： L ′ ( Q ) = ( Q + 2 ) 2 1600 ​ − 16 = 0 解得最优产量： Q = 8 验证二阶导数： L ′′ ( Q ) = ( Q + 2 ) 3 − 3200 ​ ​ Q = 8 ​ = − 5 16 ​ < 0 因此，当 Q = 8 时，利润 L ( Q ) 达到最大值。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）设平面区域\nD={(x,y)∣2x≤y≤1+x21,0≤x≤1}\n，则\nD\n绕\ny\n轴旋转所成旋转体的体积为\n\n。",
    answerText: "】 V y ​ = π ln 2 − 3 π ​ 【",
    referenceAnswer: "【答案】 V y ​ = π ln 2 − 3 π ​ 【解析】 旋转体体积计算如下： V y ​ ​ = ∫ 0 1 ​ 2 π x ( 1 + x 2 1 ​ − 2 x ​ ) d x = 2 π ∫ 0 1 ​ 1 + x 2 x ​ d x − π ∫ 0 1 ​ x 2 d x = π ln ( 1 + x 2 ) ​ 0 1 ​ − 3 π ​ x 3 ​ 0 1 ​ = π ln 2 − 3 π ​ ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-017', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）行列式\n\na0−110a1−1−11a01−10a=",
    answerText: "】 a 4 − 4 a 2 【",
    referenceAnswer: "【答案】 a 4 − 4 a 2 【解析】 ​ ​ a 0 − 1 1 ​ 0 a 1 − 1 ​ − 1 1 a 0 ​ 1 − 1 0 a ​ ​ = a ​ a 1 − 1 ​ 1 a 0 ​ 0 a a ​ ​ − ​ 0 − 1 1 ​ a 1 − 1 ​ 0 a a ​ ​ = − a ​ 1 a ​ a 2 2 a ​ ​ − 2 a ​ 0 − 1 ​ a 1 ​ ​ = − a ( 2 a − a 3 ) − 2 a 2 = a 4 − 4 a 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-015', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "（填空题）\n\n随机变量\nX\n的概率分布为\n\nP{X=k}=2k1,k=1,2,3,⋯\n\nY\n表示\nX\n被\n3\n除的余数，则\n\nE(Y)=",
    answerText: "】 7 8 ​ 【",
    referenceAnswer: "【答案】 7 8 ​ 【解析】 随机变量 X 的概率分布为 P { X = k } = 2 k 1 ​ , k = 1 , 2 , 3 , ⋯ Y 表示 X 被 3 除的余数，则 E ( Y ) = 计算各概率如下： P { Y = 0 } = k = 1 ∑ ∞ ​ P { X = 3 k } = k = 1 ∑ ∞ ​ 2 3 k 1 ​ = 1 − 8 1 ​ 8 1 ​ ​ = 7 1 ​ P { Y = 1 } = k = 0 ∑ ∞ ​ P { X = 3 k + 1 } = k = 0 ∑ ∞ ​ 2 3 k + 1 1 ​ = 1 − 8 1 ​ 2 1 ​ ​ = 7 4 ​ P { Y = 2 } = k = 0 ∑ ∞ ​ P { X = 3 k + 2 } = k = 0 ∑ ∞ ​ 2 3 k + 2 1 ​ = 1 − 8 1 ​ 4 1 ​ ​ = 7 2 ​ 期望值为： E ( Y ) = 0 × 7 1 ​ + 1 × 7 4 ​ + 2 × 7 2 ​ = 7 8 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n已知\na,b\n为常数，\n(1+n1)n−e\n与\nnab\n，当\nn→∞\n时是等价无穷小，求\na,b\n。",
    referenceAnswer: "【答案】 a = 1 , b = − 2 1 ​ e 【解析】 由等价无穷小的定义可知 n → ∞ lim ​ n a b ​ ( 1 + n 1 ​ ) n − e ​ ​ = n → ∞ lim ​ n a b ​ e n l n ( 1 + n 1 ​ ) − e ​ = n → ∞ lim ​ n a b ​ e ( e n l n ( 1 + n 1 ​ ) − 1 − 1 ) ​ = n → ∞ lim ​ n a b ​ e ( n ln ( 1 + n 1 ​ ) − 1 ) ​ = 1 ​ 进一步推导可得 ​ t → 0 + lim ​ b t a e ( t l n ( 1 + t ) ​ − 1 ) ​ = t → 0 + lim ​ b t a + 1 e ( ln ( 1 + t ) − t ) ​ = t → 0 + lim ​ b t a + 1 e ( − 2 1 ​ t 2 ) ​ = 1 ​ 则若使该极限存在必有 a + 1 = 2 ，即 a = 1 。可得 b = − 2 1 ​ e 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）\n\n求函数\nf(x,y)=x3+8y3−xy\n的极值。",
    referenceAnswer: "【答案】 函数在点 ( 6 1 ​ , 12 1 ​ ) 处取得极小值 − 216 1 ​ 。 【解析】 由方程组 ⎩ ⎨ ⎧ ​ ∂ x ∂ f ​ = 3 x 2 − y = 0 ∂ y ∂ f ​ = 24 y 2 − x = 0 ​ 计算可得两组解： { x = 0 y = 0 ​ 或 ⎩ ⎨ ⎧ ​ x = 6 1 ​ y = 12 1 ​ ​ 进一步计算二阶偏导数： ∂ x 2 ∂ 2 f ​ = 6 x , ∂ x ∂ y ∂ 2 f ​ = − 1 , ∂ y 2 ∂ 2 f ​ = 48 y 1. 在点 ( 0 , 0 ) 处 A = 0 , B = − 1 , C = 0 判别式： A C − B 2 = − 1 < 0 因此， ( 0 , 0 ) 不是极值点。 2. 在点 ( 6 1 ​ , 12 1 ​ ) 处 A = 1 , B = − 1 , C = 4 判别式： A C − B 2 = 3 > 0 解得 A > 0 因此， ( 6 1 ​ , 12 1 ​ ) 是极小值点，极小值为： f ( 6 1 ​ , 12 1 ​ ) = − 216 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-018', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分），设函数\ny=f(x)\n满足\ny′′+2y′+5y=0\n，且\nf(0)=1\n，\nf′(0)=−1\n。\n\n（I）求\nf(x)\n的表达式；\n\n（II）设\nan=∫nπ+∞f(x)dx\n，求\n∑n=1∞an\n。",
    referenceAnswer: "【答案】 （I） f ( x ) = e − x cos 2 x （II） ∑ n = 1 ∞ ​ a n ​ = 5 ( e π − 1 ) 1 ​ 【解析】 （I）微分方程 y ′′ + 2 y ′ + 5 y = 0 的特征方程为 r 2 + 2 r + 5 = 0 解得 r 1 ​ = − 1 + 2 i , r 2 ​ = − 1 − 2 i 通解为 y = e − x ( C 1 ​ cos 2 x + C 2 ​ sin 2 x ) 由初始条件 f ( 0 ) = 1 和 f ′ ( 0 ) = − 1 ，得 C 1 ​ = 1 , C 2 ​ = 0 故特解为 f ( x ) = e − x cos 2 x （II）定义 a n ​ = ∫ nπ + ∞ ​ e − x cos 2 x d x = 5 e nπ 1 ​ 设 I = ∫ nπ + ∞ ​ e − x cos 2 x d x 利用分部积分： I = 2 1 ​ ∫ nπ + ∞ ​ e − x d ( sin 2 x ) = 2 1 ​ [ e − x sin 2 x ​ nπ + ∞ ​ − ∫ nπ + ∞ ​ sin 2 x d ( e − x ) ] 由于 e − x sin 2 x → 0 （当 x → + ∞ ），且 sin 2 nπ = 0 ，第一项为 0，于是 I = − 2 1 ​ ∫ nπ + ∞ ​ sin 2 x ⋅ ( − e − x ) d x = 2 1 ​ ∫ nπ + ∞ ​ e − x sin 2 x d x 再次分部积分： I = − 4 1 ​ ∫ nπ + ∞ ​ e − x d ( cos 2 x ) = − 4 1 ​ [ e − x cos 2 x ​ nπ + ∞ ​ + ∫ nπ + ∞ ​ cos 2 x ⋅ ( − e − x ) d x ] 第一项在 x → + ∞ 时为 0，在 x = nπ 处为 − e − nπ cos 2 nπ = − e − nπ ，所以 I = − 4 1 ​ [ − e − nπ − I ] = 4 1 ​ e − nπ + 4 1 ​ I 移项得 I − 4 1 ​ I = 4 1 ​ e − nπ ⇒ 4 5 ​ I = 4 1 ​ e − nπ 因此 I = 5 e nπ 1 ​ 最终 n = 1 ∑ ∞ ​ a n ​ = 5 1 ​ n = 1 ∑ ∞ ​ e − nπ = 5 1 ​ n = 1 ∑ ∞ ​ ( e − π ) n = 5 ( e π − 1 ) 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分），设\nD={(x,y)∣x2+y2≤1,y≥0}\n，连续函数\nf(x,y)\n满足\n\nf(x,y)=y1−x2+x∬Df(x,y)dxdy\n\n求\n∬Dxf(x,y)dxdy\n。",
    referenceAnswer: "【答案】 128 3 π 2 ​ 【解析】 令 ∬ D ​ f ( x , y ) d x d y = A ，则 f ( x , y ) = y 1 − x 2 ​ + A x 于是 ∬ D ​ f ( x , y ) d x d y = ∬ D ​ ( y 1 − x 2 ​ + A x ) d x d y = ∬ D ​ y 1 − x 2 ​ d x d y 计算得 2 ∫ 0 1 ​ 1 − x 2 ​ d x ∫ 0 1 − x 2 ​ ​ y d y = ∫ 0 1 ​ ( 1 − x 2 ) 2 3 ​ d x = 16 3 π ​ 故 A = 16 3 π ​ 接下来计算 ∬ D ​ x f ( x , y ) d x d y = ∬ D ​ ( x y 1 − x 2 ​ + A x 2 ) d x d y = A ∬ D ​ x 2 d x d y 转换为极坐标 A ∫ 0 π ​ cos 2 θ d θ ∫ 0 1 ​ r 3 d r = 2 A ​ ∫ 0 2 π ​ ​ cos 2 θ d θ = 2 A ​ ⋅ 2 1 ​ ⋅ 2 π ​ = 128 3 π 2 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分），设函数\nf(x)\n在区间\n[0,2]\n上具有连续导数，已知\nf(0)=f(2)=0\n，\nM=x∈[0,2]max{∣f(x)∣}\n。证明：\n\n（I）存在\nξ∈(0,2)\n，使得\n∣f′(ξ)∣≥M\n；\n\n（II）若对任意的\nx∈(0,2)\n，\n∣f′(x)∣≤M\n，则\nM=0\n。",
    referenceAnswer: "【答案】 见解析 【解析】 (I) 设 x = x 0 ​ 时 ∣ f ( x 0 ​ ) ∣ = M ，由拉格朗日定理： ∃ ξ 1 ​ ∈ ( 0 , x 0 ​ ) ∣ f ′ ( ξ 1 ​ ) ∣ = ​ x 0 ​ − 0 f ( x 0 ​ ) − f ( 0 ) ​ ​ = x 0 ​ ∣ f ( x 0 ​ ) ∣ ​ = x 0 ​ M ​ ∃ ξ 2 ​ ∈ ( x 0 ​ , 2 ) ∣ f ′ ( ξ 2 ​ ) ∣ = ​ x 0 ​ − 2 f ( x 0 ​ ) − f ( 2 ) ​ ​ = 2 − x 0 ​ ∣ f ( x 0 ​ ) ∣ ​ = 2 − x 0 ​ M ​ 若 x 0 ​ ∈ ( 0 , 1 ] ，取 ξ = ξ 1 ​ ，有： ∣ f ′ ( ξ ) ∣ = ∣ f ′ ( ξ 1 ​ ) ∣ = x 0 ​ M ​ ≥ M 若 x 0 ​ ∈ ( 1 , 2 ) ，取 ξ = ξ 2 ​ ，有： ∣ f ′ ( ξ ) ∣ = ∣ f ′ ( ξ 2 ​ ) ∣ = 2 − x 0 ​ M ​ ≥ M (II) 由积分性质可得： M = ∣ f ( x 0 ​ ) ∣ = ∣ f ( x 0 ​ ) − f ( 0 ) ∣ = ​ ∫ 0 x 0 ​ ​ f ′ ( x ) d x ​ ≤ ∫ 0 x 0 ​ ​ ∣ f ′ ( x ) ∣ d x ≤ ∫ 0 x 0 ​ ​ M d x ≤ M x 0 ​ M = ∣ f ( x 0 ​ ) ∣ = ∣ f ( 2 ) − f ( x 0 ​ ) ∣ = ​ ∫ x 0 ​ 2 ​ f ′ ( x ) d x ​ ≤ ∫ x 0 ​ 2 ​ ∣ f ′ ( x ) ∣ d x ≤ ∫ x 0 ​ 2 ​ M d x ≤ M ( 2 − x 0 ​ ) 因此，不等式组： { M ( 1 − x 0 ​ ) ≤ 0 M ( 1 − x 0 ​ ) ≥ 0 ​ 同时成立。 若 x 0 ​  = 1 ，显然 M = 0 ；若 x 0 ​ = 1 ，则： M ≤ ∫ 0 1 ​ ∣ f ′ ( x ) ∣ d x ≤ ∫ 0 1 ​ M d x = M M ≤ ∫ 1 2 ​ ∣ f ′ ( x ) ∣ d x ≤ ∫ 1 2 ​ M d x ≤ M 当且仅当在区间 ( 0 , 1 ) 和 ( 1 , 2 ) 上 ∣ f ′ ( x ) ∣ = M 成立。假设 M  = 0 ： 若 f ′ ( x ) ≡ ± M ，与 f ( 0 ) = f ( 2 ) = 0 矛盾； 若 f ′ ( x ) = { ± M ∓ M ​ 0 < x < 1 1 < x < 2 ​ ，则 f ( x ) 在 x = 1 处不可导，与已知矛盾。 故 M = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）\n\n设二次型\nf(x1,x2)=x12−4x1x2+4x22\n经正交变换\n(x1x2)=Q(y1y2)\n化为二次型\ng(y1,y2)=ay12+4y1y2+by22\n，其中\na≥b\n。\n\n（I）求\na,b\n的值；\n\n（II）求正交矩阵\nQ\n。",
    referenceAnswer: "【答案】 (I) a = 4 ， b = 1 (II) Q = 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ ) 【解析】 (I) 记 A = ( 1 − 2 ​ − 2 4 ​ ) , B = ( a 2 ​ 2 b ​ ) 其中 Q 是正交矩阵，满足 Q T A Q = B 。由于 A 与 B 相似，它们有相同的特征值。 计算 A 的特征多项式： ∣ λ E − A ∣ = ​ λ − 1 2 ​ 2 λ − 4 ​ ​ = λ 2 − 5 λ = 0 得到特征值为 λ 1 ​ = 0 和 λ 2 ​ = 5 。 计算 B 的特征多项式： ∣ λ E − B ∣ = ​ λ − a − 2 ​ − 2 λ − b ​ ​ = λ 2 − ( a + b ) λ + ab − 4 = 0 由于 B 的特征值也为 λ 1 ​ = 0 和 λ 2 ​ = 5 ，可得方程组： ab = 4 , a + b = 5 结合条件 a ≥ b ，解得 a = 4 ， b = 1 。 (II) 对于矩阵 A ： 当 λ 1 ​ = 0 时， ( 0 E − A ) x = 0 的基础解系为 α 1 ​ = ( 2 , 1 ) T 。 当 λ 2 ​ = 5 时， ( 5 E − A ) x = 0 的基础解系为 α 2 ​ = ( 1 , − 2 ) T 。 对于矩阵 B ： 当 λ 1 ​ = 0 时， ( 0 E − B ) x = 0 的基础解系为 β 1 ​ = ( 1 , − 2 ) T 。 当 λ 2 ​ = 5 时， ( 5 E − B ) x = 0 的基础解系为 β 2 ​ = ( 2 , 1 ) T 。 令 P 1 ​ = ( 2 1 ​ 1 − 2 ​ ) , P 2 ​ = ( 1 − 2 ​ 2 1 ​ ) 则有 P 1 − 1 ​ A P 1 ​ = ( 0 0 ​ 0 5 ​ ) , P 2 − 1 ​ B P 2 ​ = ( 0 0 ​ 0 5 ​ ) 因此 P 1 − 1 ​ A P 1 ​ = P 2 − 1 ​ B P 2 ​ ⟹ B = P 2 ​ P 1 − 1 ​ A P 1 ​ P 2 − 1 ​ 计算 P 1 ​ P 2 − 1 ​ ： P 1 ​ P 2 − 1 ​ = ( 2 1 ​ 1 − 2 ​ ) ( 1 − 2 ​ 2 1 ​ ) − 1 = 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ ) 由于 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ ) 是正交矩阵，故 Q = 5 1 ​ ( 4 − 3 ​ − 3 − 4 ​ )",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分11分）\n\n设\nA\n为2阶矩阵，\nP=(α,Aα)\n，其中\nα\n是非零向量且不是\nA\n的特征向量。\n\n（Ⅰ）证明：\nP\n为可逆矩阵；\n\n（Ⅱ）若\nA2α+Aα−6α=0\n，求\nP−1AP\n，并判断\nA\n是否相似于对角矩阵。",
    referenceAnswer: "【答案】 (I) 见解析 (II) P − 1 A P = [ 0 1 ​ 6 − 1 ​ ] ，且 A 相似于对角矩阵。 【解析】 (I) 解法一 证明：假设 P 不是可逆矩阵，则 α 与 A α 线性相关。根据线性相关的定义，存在不全为 0 的实数 k 1 ​ , k 2 ​ ，使得成立 k 1 ​ α + k 2 ​ A α = 0. 若 k 2 ​ = 0 ，则有 k 1 ​ α = 0 。由于 α 是非零向量，则 k 1 ​ = 0 ，与 k 1 ​ , k 2 ​ 不全为 0 矛盾。因此， k 2 ​  = 0 ，于是 A α = − k 2 ​ k 1 ​ ​ α . 这与 α 不是 A 的特征向量矛盾，故假设不成立，所以 P 是可逆矩阵。 解法二 设 A α = β ，则 β  = k α ，即 α , β 线性无关。因此， P = ( α , β ) = ( α , A α ) 是可逆矩阵。 (II) 因为 A 2 α + A α − 6 α = 0 ，所以 A P = A ( α , A α ) = ( A α , A 2 α ) = ( A α , 6 α − A α ) = ( α , A α ) [ 0 1 ​ 6 − 1 ​ ] . 由于 P 是可逆矩阵，故 P − 1 A P = [ 0 1 ​ 6 − 1 ​ ] . 记 B = [ 0 1 ​ 6 − 1 ​ ] ，计算其特征多项式： ∣ λ E − B ∣ = ​ λ − 1 ​ − 6 λ + 1 ​ ​ = λ 2 + λ − 6 = 0. 解得 B 的特征值为 λ 1 ​ = 2 ， λ 2 ​ = − 3 。由于 A 与 B 相似，故 A 的特征值也为 λ 1 ​ = 2 ， λ 2 ​ = − 3 ，因此 A 可相似对角化。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n设二维随机变量\n(X,Y)\n在区域\nD={(x,y)∣0y1−x2}\n上服从均匀分布，令\n\nZ1={1,0,X−Y>0,X−Y≤0,Z2={1,0,X+Y>0,X+Y≤0\n\n（Ⅰ）求二维随机变量\n(Z1,Z2)\n的概率分布；\n\n（Ⅱ）求\nZ1\n与\nZ2\n的相关系数。",
    referenceAnswer: "【答案】 （Ⅰ）二维随机变量 ( Z 1 ​ , Z 2 ​ ) 的概率分布为： 0 1 ​ 0 4 1 ​ 0 4 1 ​ ​ 1 2 1 ​ 4 1 ​ 4 3 ​ ​ 4 3 ​ 4 1 ​ ​ ​ （Ⅱ） Z 1 ​ 与 Z 2 ​ 的相关系数为 3 1 ​ 。 【解析】 P { Z 1 ​ = 1 } = P { X − Y > 0 } = ∬ x > y ​ f ( x , y ) d x d y = 2 1 ​ π × 1 2 8 1 ​ π × 1 2 ​ = 4 1 ​ P { Z 1 ​ = 0 } = 1 − 4 1 ​ = 4 3 ​ P { Z 2 ​ = 0 } = P { X + Y ≤ 0 } = ∬ y ≤ − x ​ f ( x , y ) d x d y = 2 1 ​ π × 1 2 8 1 ​ π × 1 2 ​ = 4 1 ​ P { Z 2 ​ = 1 } = 1 − 4 1 ​ = 4 3 ​ P { Z 1 ​ = 1 , Z 2 ​ = 0 } = 0 联合概率分布： 0 1 ​ 0 4 1 ​ 0 4 1 ​ ​ 1 2 1 ​ 4 1 ​ 4 3 ​ ​ 4 3 ​ 4 1 ​ ​ ​ E ( Z 1 ​ ) = 4 1 ​ , E ( Z 2 ​ ) = 4 3 ​ , E ( Z 1 2 ​ ) = 4 1 ​ , E ( Z 2 2 ​ ) = 4 3 ​ , E ( Z 1 ​ Z 2 ​ ) = 4 1 ​ D ( Z 1 ​ ) = E ( Z 1 2 ​ ) − E 2 ( Z 1 ​ ) = 4 1 ​ − ( 4 1 ​ ) 2 = 16 3 ​ D ( Z 2 ​ ) = E ( Z 2 2 ​ ) − E 2 ( Z 2 ​ ) = 4 3 ​ − ( 4 3 ​ ) 2 = 16 3 ​ C o v ( Z 1 ​ , Z 2 ​ ) = E ( Z 1 ​ Z 2 ​ ) − E ( Z 1 ​ ) E ( Z 2 ​ ) = 16 1 ​ ρ Z 1 ​ Z 2 ​ ​ = D ( Z 1 ​ ) ​ D ( Z 2 ​ ) ​ C o v ( Z 1 ​ , Z 2 ​ ) ​ = 16 3 ​ 16 1 ​ ​ = 3 1 ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）\n\n给定分布函数\n\nF(t)={1−e−(θt)m,0,t≥0,其他,\n\n其中\nθ\n和\nm\n为参数且大于零。\n\n(I) 求概率\nP{T>t}\n与\nP{T>s∣T>S}\n，其中\nS>0\n，\nt>0\n；\n\n(II) 任取\nn\n个这种元件做寿命试验，测得它们的寿命分别为\nt1,t2,⋯,tn\n。若\nm\n已知，求\nθ\n的最大似然估计值\nθ^\n。",
    referenceAnswer: "【答案】 (I) P { T > t } = e − ( θ t ​ ) m ， P { T > s + t ∣ T > s } = e θ m s m − ( s + t ) m ​ (II) θ ^ = m n 1 ​ ∑ i = 1 n ​ t i m ​ ​ 【解析】 (I) P { T > t } = 1 − P { T ≤ t } = 1 − F ( t ) = e − ( θ t ​ ) m P { T > s + t ∣ T > s } ​ = P { T > s } P { T > s + t , T > s } ​ = P { T > s } P { T > s + t } ​ = e − ( θ s ​ ) m e − ( θ s + t ​ ) m ​ = e θ m s m − ( s + t ) m ​ ​ (II) 概率密度函数： f ( t ) = F ′ ( t ) = { e − ( θ t ​ ) m θ m m t m − 1 ​ , 0 , ​ t > 0 其他 ​ 似然函数： L ( θ ) ​ = i = 1 ∏ n ​ e − ( θ t i ​ ​ ) m θ m m t i m − 1 ​ ​ = e − θ m 1 ​ ∑ i = 1 n ​ t i m ​ m n ( i = 1 ∏ n ​ t i m − 1 ​ ) θ − nm , ( t i ​ > 0 , i = 1 , 2 , … , n ) ​ 对数似然函数： ln L ( θ ) ​ = − θ m 1 ​ i = 1 ∑ n ​ t i m ​ + ln m n + ln ( i = 1 ∏ n ​ t i m − 1 ​ ) − nm ln θ ​ 求导并令导数为零： d θ d ln L ( θ ) ​ ​ = θ m + 1 m ​ i = 1 ∑ n ​ t i m ​ − θ nm ​ = 0 ⇒ θ = m n 1 ​ i = 1 ∑ n ​ t i m ​ ​ ​ 因此， θ 的最大似然估计为： θ = m n 1 ​ i = 1 ∑ n ​ t i m ​ ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2020_math3 = {
  id: P, year: Y,
  title: '2020 年全国硕士研究生招生考试 数学（三）',
  short: '2020 数学三原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2020_math3.length,
  qids: questions2020_math3.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
