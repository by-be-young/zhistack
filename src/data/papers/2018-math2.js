const P = 'paper-2018-math2'
const Y = 2018
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const base = (n, kid, extra = {}) => ({
  id: `q-math2-2018-${String(n).padStart(2, '0')}`,
  subject: 'math', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2018 考研数学（二）真题',
  ...extra
})

export const questions2018_math2 = [
  base(1, 'k-math-002', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "若 \\(\\lim_{x\\to 0}\\left(e^x+ax^2+bx\\right)^{\\frac{1}{x^2}}=1,\\) 则（ ）",
    options: [{ key: "A", text: "\\(a=\\frac12,\\ b=-1\\)" }, { key: "B", text: "\\(a=-\\frac12,\\ b=-1\\)" }, { key: "C", text: "\\(a=\\frac12,\\ b=1\\)" }, { key: "D", text: "\\(a=-\\frac12,\\ b=1\\)" }],
    answer: ["B"],
    explain: "正确答案： B 【解析】令 \\(u=e^x+ax^2+bx-1\\)。原极限可写为 \\[\n\\exp\\!\\left(\\lim_{x\\to0}\\frac{\\ln(1+u)}{x^2}\\right)=1.\n\\] 因为 \\(u\\to0\\) 且 \\(\\ln(1+u)\\sim u\\)，所以必须有 \\[\n\\lim_{x\\to0}\\frac{e^x+ax^2+bx-1}{x^2}=0.\n\\] 展开 \\(e^x=1+x+\\frac{x^2}{2}+o(x^2)\\)，则分子为 \\[\n(1+b)x+\\left(a+\\frac12\\right)x^2+o(x^2).\n\\] 要使上式除以 \\(x^2\\) 后极限为 0，先有 \\(1+b=0\\)，故 \\(b=-1\\)；再有 \\(a+\\frac12=0\\)，故 \\(a=-\\frac12\\)。因此选 B。"
  }),
  base(2, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列函数中，在 \\(x=0\\) 处不可导的是（ ）",
    options: [{ key: "A", text: "\\(f(x)=|x|\\sin|x|\\)" }, { key: "B", text: "\\(f(x)=|x|\\sin\\sqrt{|x|}\\)" }, { key: "C", text: "\\(f(x)=\\cos|x|\\)" }, { key: "D", text: "\\(f(x)=\\cos\\sqrt{|x|}\\)" }],
    answer: ["D"],
    explain: "正确答案： D A 可导： f − ′ ​ ( 0 ) = lim x → 0 − ​ x ∣ x ∣ s i n ( ∣ x ∣ ) ​ = lim x → 0 − ​ x x ⋅ s i n x ​ = 0 ， f + ′ ​ ( 0 ) = lim x → 0 + ​ x ∣ x ∣ s i n ( ∣ x ∣ ) ​ = lim x → 0 + ​ x x ⋅ s i n x ​ = 0 。 B 可导： f − ′ ​ ( 0 ) = lim x → 0 − ​ x ∣ x ∣ s i n ∣ x ∣ ​ ​ = lim x → 0 − ​ x − x ⋅ s i n − x ​ ​ = 0 ， f + ′ ​ ( 0 ) = lim x → 0 + ​ x ∣ x ∣ s i n ∣ x ∣ ​ ​ = lim x → 0 + ​ x x ⋅ s i n x ​ ​ = 0 。 C 可导： f − ′ ​ ( 0 ) = lim x → 0 − ​ x c o s ∣ x ∣ − 1 ​ = lim x → 0 − ​ x − 2 1 ​ x 2 ​ = 0 ， f + ′ ​ ( 0 ) = lim x → 0 + ​ x c o s ∣ x ∣ − 1 ​ = lim x → 0 + ​ x − 2 1 ​ x 2 ​ = 0 。 D 不可导： f − ′ ​ ( 0 ) = lim x → 0 − ​ x c o s ∣ x ∣ ​ − 1 ​ = lim x → 0 − ​ x − 2 1 ​ ( − x ) ​ = 2 1 ​ ， f + ′ ​ ( 0 ) = lim x → 0 + ​ x c o s ∣ x ∣ ​ − 1 ​ = lim x → 0 + ​ x − 2 1 ​ x ​ = − 2 1 ​ 。 f + ′ ​ ( 0 )  = f − ′ ​ ( 0 ) 。"
  }),
  base(3, 'k-math-003', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数\\(f(x)=\\begin{cases}-1,&x<0,\\\\1,&x\\ge 0,\\end{cases} \\; g(x)=\\begin{cases} 2-ax,&x\\le -1,\\\\ x,&-1<x<0,\\\\ x-b,&x\\ge 0. \\end{cases}\\)若 \\(f(x)+g(x)\\) 在 \\(\\mathbb R\\) 上连续，则（ ）",
    options: [{ key: "A", text: "\\(a=3,\\ b=1\\)" }, { key: "B", text: "\\(a=3,\\ b=2\\)" }, { key: "C", text: "\\(a=-3,\\ b=1\\)" }, { key: "D", text: "\\(a=-3,\\ b=2\\)" }],
    answer: ["D"],
    explain: "正确答案： D 【解析】只需检查分段点 \\(x=0\\) 与 \\(x=-1\\)。 在 \\(x=0\\) 处， \\[\n\\lim_{x\\to0^-}[f(x)+g(x)]=-1,\\qquad\n\\lim_{x\\to0^+}[f(x)+g(x)]=1-b.\n\\] 由连续性得 \\(-1=1-b\\)，所以 \\(b=2\\)。 在 \\(x=-1\\) 处，注意当 \\(x\\le -1\\) 时 \\(g(x)=2-ax\\)，故 \\[\n\\lim_{x\\to-1^-}[f(x)+g(x)]=-1+[2-a(-1)]=1+a,\n\\] \\[\n\\lim_{x\\to-1^+}[f(x)+g(x)]=-1+(-1)=-2.\n\\] 由连续性得 \\(1+a=-2\\)，所以 \\(a=-3\\)。因此 \\(a=-3,\\ b=2\\)，选 D。"
  }),
  base(4, 'k-math-004', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(f(x)\\) 在 \\([0,1]\\) 上二阶可导，且 \\(\\int_0^1 f(x)\\,dx=0,\\) 则（ ）",
    options: [{ key: "A", text: "当 \\(f'(x)<0\\) 时，\\(f\\left(\\frac12\\right)<0\\)" }, { key: "B", text: "当 \\(f''(x)<0\\) 时，\\(f\\left(\\frac12\\right)<0\\)" }, { key: "C", text: "当 \\(f'(x)>0\\) 时，\\(f\\left(\\frac12\\right)<0\\)" }, { key: "D", text: "当 \\(f''(x)>0\\) 时，\\(f\\left(\\frac12\\right)<0\\)" }],
    answer: ["D"],
    explain: "正确答案： D B 错误：取函数 f ( x ) = − x 2 + 3 1 ​ ，则有 ∫ 0 1 ​ f ( x ) d x = ∫ 0 1 ​ ( − x 2 + 3 1 ​ ) d x = 0 , 同时 f ′′ ( x ) = − 2 < 0 ，而 f ( 2 1 ​ ) = − 4 1 ​ + 3 1 ​ = 12 1 ​ > 0. C 错误：取函数 f ( x ) = x − 2 1 ​ ，则有 ∫ 0 1 ​ f ( x ) d x = ∫ 0 1 ​ ( x − 2 1 ​ ) d x = 0 , 同时 f ′ ( x ) = 1 > 0 ，而 f ( 2 1 ​ ) = 0. D 正确：（解析过程结合凸函数性质，当 f ′′ ( x ) > 0 时函数下凸，由积分值为 0 可推导出中点函数值小于 0 ，具体过程略）"
  }),
  base(5, 'k-math-006', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设\\(M=\\int_{-\\frac\\pi2}^{\\frac\\pi2}\\frac{(1+x)^2}{1+x^2}\\,dx, \\; N=\\int_{-\\frac\\pi2}^{\\frac\\pi2}\\frac{1+x}{e^x}\\,dx, \\; K=\\int_{-\\frac\\pi2}^{\\frac\\pi2}\\left(1+\\sqrt{\\cos x}\\right)\\,dx,\\)则（ ）",
    options: [{ key: "A", text: "\\(M>N>K\\)" }, { key: "B", text: "\\(M>K>N\\)" }, { key: "C", text: "\\(K>M>N\\)" }, { key: "D", text: "\\(K>N>M\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】先看 \\(M\\)： \\[\n\\frac{(1+x)^2}{1+x^2}=1+\\frac{2x}{1+x^2}.\n\\] 其中 \\(\\frac{2x}{1+x^2}\\) 为奇函数，因此 \\[\nM=\\int_{-\\pi/2}^{\\pi/2}1\\,dx=\\pi.\n\\] 对 \\(K\\)，区间内部有 \\(\\sqrt{\\cos x}>0\\)，故 \\[\nK=\\int_{-\\pi/2}^{\\pi/2}(1+\\sqrt{\\cos x})\\,dx>M.\n\\] 对 \\(N\\)，令 \\(h(x)=(1+x)e^{-x}\\)，则 \\(h'(x)=-xe^{-x}\\)。所以 \\(h\\) 在 \\((-\\infty,0]\\) 上递增、在 \\([0,+\\infty)\\) 上递减，最大值为 \\(h(0)=1\\)。于是 \\[\nN=\\int_{-\\pi/2}^{\\pi/2}h(x)\\,dx<\\int_{-\\pi/2}^{\\pi/2}1\\,dx=M.\n\\] 综上 \\(K>M>N\\)，选 C。原解析中“\\(h(x)\\) 为偶函数”的说法不成立，这里已改正。"
  }),
  base(6, 'k-math-007', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\int_{-1}^{0}dx\\int_{-x}^{2-x^2}(1-xy)\\,dy + \\int_0^1dx\\int_x^{2-x^2}(1-xy)\\,dy =（ ）\\)",
    options: [{ key: "A", text: "\\(\\frac53\\)" }, { key: "B", text: "\\(\\frac56\\)" }, { key: "C", text: "\\(\\frac73\\)" }, { key: "D", text: "\\(\\frac76\\)" }],
    answer: ["C"],
    explain: "正确答案： C 【解析】两个积分区域合起来为 \\[\nD=\\{(x,y)\\mid -1\\le x\\le1,\\ |x|\\le y\\le2-x^2\\},\n\\] 区域 \\(D\\) 关于 \\(y\\) 轴对称，而 \\(xy\\) 关于 \\(x\\) 是奇函数，因此 \\[\n\\iint_D(1-xy)\\,dx\\,dy=\\iint_D1\\,dx\\,dy\n=2\\int_0^1\\int_x^{2-x^2}dy\\,dx.\n\\] \\[\n2\\int_0^1(2-x^2-x)\\,dx\n=2\\left(2-\\frac13-\\frac12\\right)=\\frac73.\n\\] 故应选 C，而不是原页面标注的 A。"
  }),
  base(7, 'k-math-008', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "下列矩阵中，与矩阵\\(\\begin{pmatrix} 1&1&0\\\\ 0&1&1\\\\ 0&0&1 \\end{pmatrix}\\)相似的为（ ）",
    options: [{ key: "A", text: "\\(\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\)" }, { key: "B", text: "\\(\\begin{pmatrix}1&0&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\)" }, { key: "C", text: "\\(\\begin{pmatrix}1&1&-1\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)" }, { key: "D", text: "\\(\\begin{pmatrix}1&0&-1\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)" }],
    answer: ["A"],
    explain: "正确答案： A 【解析】记题中矩阵为 \\(J\\)。若矩阵 \\(Q\\) 与 \\(J\\) 相似，则 \\(I-Q\\) 与 \\(I-J\\) 相似，因而秩相等。 \\[\nI-J=\\begin{pmatrix}0&-1&0\\\\0&0&-1\\\\0&0&0\\end{pmatrix},\\qquad r(I-J)=2.\n\\] 逐项计算可得：A 项 \\(r(I-A)=2\\)，而 B、C、D 三项均有 \\(r(I-Q)=1\\)。因此只有 A 可能与 \\(J\\) 相似。 进一步，A 项的 \\((A-I)^2\\ne0\\) 且 \\((A-I)^3=0\\)，与 \\(J\\) 具有同样的 3 阶 Jordan 块结构，所以选 A。"
  }),
  base(8, 'k-math-017', {
    type: 'single', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A,B\\) 为 \\(n\\) 阶矩阵，记 \\(r(X)\\) 为矩阵 \\(X\\) 的秩，\\((X,Y)\\) 表示分块矩阵，则（ ）",
    options: [{ key: "A", text: "\\(r(A,AB)=r(A)\\)" }, { key: "B", text: "\\(r(A,BA)=r(A)\\)" }, { key: "C", text: "\\(r(A,B)=\\max\\{r(A),r(B)\\}\\)" }, { key: "D", text: "\\(r(A,B)=r(A^T,B^T)\\)" }],
    answer: ["A"],
    explain: "正确答案： A 因为 r ( E , B ) = n （ E 为单位矩阵），所以 r ( A , A B ) = r [ A ( E , B )] = r ( A ) , 故选 A。"
  }),
  base(9, 'k-math-010', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\lim_{x\\to+\\infty}x^2\\big[\\arctan(x+1)-\\arctan x\\big]=\\underline{\\qquad}.\\)",
    answerText: "】 1 【",
    referenceAnswer: "【答案】 1 【解析】 当 x → + ∞ 时，利用拉格朗日中值定理，存在 ε ∈ ( x , x + 1 ) ，使得 arctan ( x + 1 ) − arctan x = 1 + ε 2 1 ​ . 于是， x → + ∞ lim ​ x 2 ⋅ 1 + ε 2 1 ​ = 1.",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(10, 'k-math-011', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线 \\(y=x^2+2\\ln x\\) 在其拐点处的切线方程是 \\(\\underline{\\qquad}\\)。",
    answerText: "】 y = 4 x − 3 【",
    referenceAnswer: "【答案】 y = 4 x − 3 【解析】 曲线 y = x 2 + 2 ln x 的定义域为 { x ∣ x > 0 } 。 其一阶导数为 y ′ = 2 x + x 2 ​ ，二阶导数为 y ′′ = 2 − x 2 2 ​ 。 令 y ′′ = 0 ，解得 x 0 ​ = ± 1 。由于 x > 0 ，故取 x 0 ​ = 1 ，此时拐点为 ( 1 , 1 ) 。 在 x 0 ​ = 1 处， y ′ ( x 0 ​ ) = 4 ，则过拐点 ( 1 , 1 ) 的切线方程为 y − 1 = 4 ( x − 1 ) ，即 y = 4 x − 3 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(11, 'k-math-012', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "\\(\\int_5^{+\\infty}\\frac{1}{x^2-4x+3}\\,dx=\\underline{\\qquad}.\\)",
    answerText: "】 2 1 ​ ln 2 【",
    referenceAnswer: "【答案】 2 1 ​ ln 2 【解析】 首先，将原式拆分为部分分式： ∫ 5 + ∞ ​ x 2 − 4 x + 3 1 ​ d x = ∫ 5 + ∞ ​ ( x − 3 ) ( x − 1 ) 1 ​ d x = ∫ 5 + ∞ ​ 2 1 ​ ( x − 3 1 ​ − x − 1 1 ​ ) d x 然后逐项积分： = 2 1 ​ ln ​ x − 1 x − 3 ​ ​ ​ 5 + ∞ ​ 计算上限： x → + ∞ lim ​ ln x − 1 x − 3 ​ = ln 1 = 0 计算下限： 2 1 ​ ln ​ x − 1 x − 3 ​ ​ ​ x = 5 ​ = 2 1 ​ ln 4 2 ​ = 2 1 ​ ln 2 1 ​ 因此： ∫ 5 + ∞ ​ x 2 − 4 x + 3 1 ​ d x = 0 − ( − 2 1 ​ ln 2 ) = 2 1 ​ ln 2 最终结果为： 2 1 ​ ln 2 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(12, 'k-math-013', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "曲线\\(\\begin{cases} x=\\cos^3 t,\\\\ y=\\sin^3 t, \\end{cases}\\)在 \\(t=\\frac\\pi4\\) 对应点处的曲率为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 3 2 ​ 【",
    referenceAnswer: "【答案】 3 2 ​ 【解析】 首先求一阶导数： y ′ = d x d y ​ = d t d x ​ d t d y ​ ​ = − 3 cos 2 t sin t 3 sin 2 t cos t ​ = − tan t , 则 y ′ ∣ t = 4 π ​ ​ = − 1. 再求二阶导数： y ′′ = d x d ​ ( y ′ ) = d t d x ​ d t d ​ ( y ′ ) ​ = − 3 cos 2 t sin t − sec 2 t ​ = 3 cos 4 t sin t 1 ​ , 代入 t = 4 π ​ 得： y ′′ ∣ t = 4 π ​ ​ = 3 ( 2 2 ​ ​ ) 4 ⋅ 2 2 ​ ​ 1 ​ = 3 × 16 4 ​ × 2 2 ​ ​ 1 ​ = 3 4 2 ​ ​ . 曲率为： k = ( 1 + y ′2 ) 2 3 ​ ∣ y ′′ ∣ ​ = ( 1 + 1 ) 2 3 ​ 3 4 2 ​ ​ ​ = 2 2 ​ 3 4 2 ​ ​ ​ = 3 2 ​ .",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(13, 'k-math-014', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设函数 \\(z=z(x,y)\\) 由方程 \\(\\ln z+e^{z-1}=xy\\) 确定，则 \\(\\left.\\frac{\\partial z}{\\partial x}\\right|_{\\left(2,\\frac12\\right)}=\\underline{\\qquad}.\\)",
    answerText: "】 4 1 ​ 【",
    referenceAnswer: "【答案】 4 1 ​ 【解析】 令 F ( x , y , z ) = ln z + e z − 1 − x y ，则 ∂ x ∂ F ​ = − y , ∂ z ∂ F ​ = z 1 ​ + e z − 1 . 当 x = 2 ， y = 2 1 ​ 时，代入方程可得 ln z + e z − 1 = 2 × 2 1 ​ = 1 , 解得 z = 1 。 因此， ∂ x ∂ z ​ = − ∂ z ∂ F ​ ∂ x ∂ F ​ ​ = − z 1 ​ + e z − 1 − y ​ = z 1 ​ + e z − 1 y ​ 将 z = 1 ， y = 2 1 ​ 代入得 1 1 ​ + e 0 2 1 ​ ​ = 1 + 1 2 1 ​ ​ = 4 1 ​",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(14, 'k-math-019', {
    type: 'subjective', subtype: 'fill', difficulty: 2, score: 4, mathHtml: true,
    stem: "设 \\(A\\) 为 3 阶矩阵，\\(\\alpha_1,\\alpha_2,\\alpha_3\\) 为线性无关的向量组。若 \\(A\\alpha_1=2\\alpha_1+\\alpha_2+\\alpha_3,\\) \\(A\\alpha_2=\\alpha_2+2\\alpha_3,\\) \\(A\\alpha_3=-\\alpha_2+\\alpha_3,\\) 则 \\(A\\) 的实特征值为 \\(\\underline{\\qquad}\\)。",
    answerText: "】 2 【",
    referenceAnswer: "【答案】 2 【解析】 ( A α 1 ​ , A α 2 ​ , A α 3 ​ ) = A ( α 1 ​ , α 2 ​ , α 3 ​ ) = ( α 1 ​ , α 2 ​ , α 3 ​ ) ​ 2 1 1 ​ 0 1 2 ​ 0 − 1 1 ​ ​ 由于 α 1 ​ , α 2 ​ , α 3 ​ 线性无关，因此 P = ( α 1 ​ , α 2 ​ , α 3 ​ ) 可逆。 于是有： P − 1 A P = ​ 2 1 1 ​ 0 1 2 ​ 0 − 1 1 ​ ​ = B 因此 A 与 B 相似，特征值相等。 计算特征多项式： ∣ λ E − B ∣ = ( λ − 2 ) ( λ 2 − 2 λ + 3 ) = 0 解得实特征值 λ = 2 。",
    explain: '本题为填空题，请对照参考答案自评得分比例。',
    rubric: [{ text: '结果正确；等价形式同样给分', points: 4 }]
  }),
  base(15, 'k-math-008', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）求不定积分 \\(\\int e^{2x}\\arctan\\sqrt{e^x-1}\\,dx.\\)",
    referenceAnswer: "【答案】 2 1 ​ ( e 2 x arctan e x − 1 ​ − 3 1 ​ ( e x − 1 ) 2 3 ​ − e x − 1 ​ ) + C 【解析】 原式 ​ = 2 1 ​ ∫ arctan e x − 1 ​ d e 2 x = 2 1 ​ ( e 2 x arctan e x − 1 ​ − ∫ e 2 x ⋅ 1 + e x − 1 1 ​ ⋅ 2 e x − 1 ​ e x ​ d x ) = 2 1 ​ ( e 2 x arctan e x − 1 ​ − ∫ 2 e x − 1 ​ e 2 x ​ d x ) = 2 1 ​ ( e 2 x arctan e x − 1 ​ − ∫ 2 e x − 1 ​ e x ​ d e x ) = 2 1 ​ ( e 2 x arctan e x − 1 ​ − 3 1 ​ ( e x − 1 ) 2 3 ​ − e x − 1 ​ ) + C ​ 对于 ∫ 2 e x − 1 ​ e x ​ d e x ，令 e x − 1 ​ = t ，则 e x = t 2 + 1 ， x = ln ( t 2 + 1 ) 。 ∫ 2 e x − 1 ​ e x ​ d e x ​ = ∫ 2 t ( t 2 + 1 ) 2 ​ ⋅ t 2 + 1 2 t ​ d t = ∫ ( t 2 + 1 ) d t = 3 1 ​ t 3 + t + C = 3 1 ​ ( e x − 1 ) 2 3 ​ + e x − 1 ​ + C ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(16, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知连续函数 \\(f(x)\\) 满足 \\(\\int_0^x f(t)\\,dt+\\int_0^x t f(x-t)\\,dt=ax^2.\\)（I）求 \\(f(x)\\)；（II）若 \\(f(x)\\) 在区间 \\([0,1]\\) 上的平均值为 1，求 \\(a\\) 的值。",
    referenceAnswer: "【答案】 (I) f ( x ) = e − x ( 2 a e x − 2 a ) (II) a = 2 e ​ 【解析】 （I） 考虑积分 ∫ 0 x ​ t f ( x − t ) d t ，令 x − t = u ，则 d t = − d u ，当 t = 0 时 u = x ，当 t = x 时 u = 0 ，于是 ∫ 0 x ​ t f ( x − t ) d t ​ = ∫ x 0 ​ ( x − u ) f ( u ) ( − d u ) = ∫ 0 x ​ ( x − u ) f ( u ) d u = x ∫ 0 x ​ f ( u ) d u − ∫ 0 x ​ u f ( u ) d u . ​ 原等式为 ∫ 0 x ​ f ( t ) d t + x ∫ 0 x ​ f ( u ) d u − ∫ 0 x ​ u f ( u ) d u = a x 2 . 两边对 x 求导得 f ( x ) + ∫ 0 x ​ f ( u ) d u = 2 a x . 再求导得 f ′ ( x ) + f ( x ) = 2 a , 解得 f ( x ) = e − x ( 2 a e x + C ) . 当 x = 0 时， f ( 0 ) = 0 ，代入得 C = − 2 a ，综上 f ( x ) = e − x ( 2 a e x − 2 a ) . （II） 由 ∫ 0 1 ​ f ( x ) d x = 1 ，得 ∫ 0 1 ​ e − x ( 2 a e x − 2 a ) d x = 1. 计算积分： ∫ 0 1 ​ 2 a d x − ∫ 0 1 ​ 2 a e − x d x = 2 a − 2 a ( 1 − e − 1 ) = 2 a e − 1 . 于是 2 a e − 1 = 1 ⇒ a = 2 e ​ .",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(17, 'k-math-012', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）设平面区域 \\(D\\) 由曲线\\(\\begin{cases} x=t-\\sin t,\\\\ y=1-\\cos t, \\end{cases} \\; 0\\le t\\le 2\\pi\\)与 \\(x\\) 轴围成，计算二重积分 \\(\\iint_D(x+2y)\\,dx\\,dy.\\)",
    referenceAnswer: "【答案】 3 π 2 + 5 π 【解析】 ​ ∬ D ​ ( x + 2 y ) d x d y = ∫ 0 2 π ​ d x ∫ 0 y ( x ) ​ ( x + 2 y ) d y = ∫ 0 2 π ​ [ ( x y + y 2 ) ​ 0 y ( x ) ​ ] d x = ∫ 0 2 π ​ [ x y ( x ) + ( y ( x ) ) 2 ] d x ​ 令 x = t − sin t ，则 y ( x ) = 1 − cos t 。 ​ = ∫ 0 2 π ​ [ ( t − sin t ) ( 1 − cos t ) 2 + ( 1 − cos t ) 3 ] d t = 3 π 2 + 5 π ​",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(18, 'k-math-019', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）已知常数 \\(k\\ge \\ln2-1\\)。证明：\\((x-1)\\left(x-\\ln^2x+2k\\ln x-1\\right)\\ge0.\\)",
    referenceAnswer: "【答案】 见解析 【解析】 定义 \\[\nf(x)=x-\\ln^2x+2k\\ln x-1,\\qquad x>0.\n\\] 要证的就是 \\((x-1)f(x)\\ge0\\)。又 \\[\nf'(x)=1-\\frac{2\\ln x}{x}+\\frac{2k}{x}\n=\\frac{x-2\\ln x+2k}{x}.\n\\] 令 \\(g(x)=x-2\\ln x+2k\\)，则 \\[\ng'(x)=1-\\frac2x.\n\\] 所以 \\(g\\) 在 \\((0,2)\\) 上递减、在 \\((2,+\\infty)\\) 上递增，并在 \\(x=2\\) 处取得最小值。由 \\(k\\ge\\ln2-1\\)， \\[\ng(2)=2-2\\ln2+2k\\ge0.\n\\] 于是对一切 \\(x>0\\)，均有 \\(f'(x)=g(x)/x\\ge0\\)，即 \\(f\\) 单调不减。又 \\(f(1)=0\\)，因此： 当 \\(0 当 \\(x>1\\) 时，\\(f(x)\\ge0\\)，同时 \\(x-1>0\\)； 当 \\(x=1\\) 时乘积为 0。 故对所有 \\(x>0\\)，都有 \\((x-1)(x-\\ln^2x+2k\\ln x-1)\\ge0\\)。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(19, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 10, mathHtml: true,
    stem: "（本题满分 10 分）将长为 \\(2\\text{ m}\\) 的铁丝分成三段，依次围成圆、正方形与正三角形。三个图形的面积之和是否存在最小值？若存在，求出最小值。",
    referenceAnswer: "【答案】 最小值为 π + 4 + 3 3 ​ 1 ​ 【解析】 设圆半径为 x ，正方形边长为 y ，正三角形边长为 z ，则约束条件为： 2 π x + 4 y + 3 z = 2 ( x , y , z ≥ 0 ) 目标函数为面积之和： f ( x , y , z ) = π x 2 + y 2 + 4 3 ​ ​ z 2 构造拉格朗日函数： L ( x , y , z , λ ) = π x 2 + y 2 + 4 3 ​ ​ z 2 + λ ( 2 π x + 4 y + 3 z − 2 ) 求偏导并令其为零： ⎩ ⎨ ⎧ ​ ∂ x ∂ L ​ = 2 π x + 2 πλ = 0 ∂ y ∂ L ​ = 2 y + 4 λ = 0 ∂ z ∂ L ​ = 2 3 ​ ​ z + 3 λ = 0 2 π x + 4 y + 3 z = 2 ​ 解得驻点： x = π + 4 + 3 3 ​ 1 ​ , y = π + 4 + 3 3 ​ 2 ​ , z = π + 4 + 3 3 ​ 2 3 ​ ​ 代入计算最小值： S m i n ​ ​ = π ( π + 4 + 3 3 ​ 1 ​ ) 2 + ( π + 4 + 3 3 ​ 2 ​ ) 2 + 4 3 ​ ​ ( π + 4 + 3 3 ​ 2 3 ​ ​ ) 2 = π + 4 + 3 3 ​ 1 ​ ​ 故存在最小值，最小值为 π + 4 + 3 3 ​ 1 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 10 }]
  }),
  base(20, 'k-math-001', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 10 分）已知曲线 \\(L:y=\\frac49x^2\\quad(x\\ge0),\\) 点 \\(O(0,0)\\)，点 \\(A(0,1)\\)。设 \\(P\\) 是 \\(L\\) 上的动点，\\(S\\) 是直线 \\(OA\\) 与直线 \\(AP\\) 及曲线 \\(L\\) 所围图形的面积。若 \\(P\\) 运动到点 \\((3,4)\\) 时沿 \\(x\\) 轴正向的速度是 4，求此时 \\(S\\) 关于时间 \\(t\\) 的变化率。",
    referenceAnswer: "【答案】 10 【解析】 不妨设点 P ( a , 9 4 ​ a 2 ) , a  = 0 , a = a ( t ) , 则直线 A P 的方程为 y = ( 9 4 ​ a − a 1 ​ ) x + 1 , 故 S = ∫ 0 a ​ ∫ 9 4 ​ x 2 ( 9 4 ​ a − a 1 ​ ) x + 1 ​ d y d x = ∫ 0 a ​ [ ( 9 4 ​ a − a 1 ​ ) x + 1 − 9 4 ​ x 2 ] d x = ( 9 4 ​ a − a 1 ​ ) 2 a 2 ​ + a − 9 4 ​ × 3 a 3 ​ = 9 2 ​ a 3 − 2 a ​ + a − 27 4 ​ a 3 = 27 2 ​ a 3 + 2 a ​ , 当 P 在点 ( 0 , 0 ) 处，显然 S = 0 。 综上， S = 27 2 ​ a 3 + 2 a ​ 。 由题 d t d a ( t ) ​ ​ ( 3 , 4 ) ​ = 4 ，故 d t d S ​ ​ ( 3 , 4 ) ​ = ( 27 2 ​ ⋅ 3 a 2 + 2 1 ​ ) d t d a ( t ) ​ ​ ( 3 , 4 ) ​ = ( 9 2 ​ × 9 + 2 1 ​ ) × 4 = 10 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(21, 'k-math-002', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设数列 \\(\\{x_n\\}\\) 满足：\\(x_1>0\\)，\\(x_ne^{x_{n+1}}=e^{x_n}-1\\qquad(n=1,2,\\ldots).\\) 证明 \\(\\{x_n\\}\\) 收敛，并求 \\(\\lim_{n\\to\\infty}x_n.\\)",
    referenceAnswer: "【答案】 0 【解析】 (1) 由 x n ​ e x n + 1 ​ = e x n ​ − 1 ，有 e x n + 1 ​ = x n ​ e x n ​ − 1 ​ ⇒ x n + 1 ​ = ln x n ​ e x n ​ − 1 ​ . 则 x 2 ​ = ln x 1 ​ e x 1 ​ − 1 ​ . 设 f ( x ) = e x − 1 − x ， ∵ f ′ ( x ) = e x − 1 > 0 ( x > 0 ) , 且 f ( 0 ) = 0 ， ∴ f ( x ) f ( x ) > 0 , 即 e x − 1 > x ( x > 0 ) 。 因此 x 1 ​ e x 1 ​ − 1 ​ 在 x 1 ​ 时大于 1，而 x 2 ​ = ln x 1 ​ e x 1 ​ − 1 ​ > 0. 用数学归纳法可证：对 ∀ n ， x n ​ > 0 。 考虑 x n + 1 ​ − x n ​ = ln x n ​ e x n ​ − 1 ​ − x n ​ = ln x n ​ e x n ​ − 1 ​ − ln e x n ​ = ln x n ​ e x n ​ e x n ​ − 1 ​ . 设 g ( x ) = e x − 1 − x e x ， ∵ g ′ ( x ) = − x e x , 显然当 x > 0 时， g ′ ( x ) < 0 ，则 g ( x ) 单调递减。 又 ∵ g ( 0 ) = 0 ， ∴ g ( x ) < g ( 0 ) = 0 , ∴ e x − 1 < x e x ⇒ x e x e x − 1 ​ < 1. 因此 x n + 1 ​ − x n ​ = ln x n ​ e x n ​ e x n ​ − 1 ​ < 0 , n = 1 , 2 , 3 , ⋯ , 故 { x n ​ } 单调递减。 综上， { x n ​ } 单调递减且存在下界， ∴ n → ∞ lim ​ x n ​ 存在。 (2) 设 n → ∞ lim ​ x n ​ = a ，由原式得 a e a = e a − 1 , 解得 a = 0 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(22, 'k-math-003', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）设实二次型 \\(f(x_1,x_2,x_3)=(x_1-x_2+x_3)^2+(x_2+x_3)^2+(x_1+ax_3)^2,\\) 其中 \\(a\\) 是参数。（I）求 \\(f(x_1,x_2,x_3)=0\\) 的解；（II）求 \\(f(x_1,x_2,x_3)\\) 的规范形。",
    referenceAnswer: "【答案】 (1) 当 a  = 2 时，解为 x 1 ​ = x 2 ​ = x 3 ​ = 0 ；当 a = 2 时，解为 x = k ​ 2 1 − 1 ​ ​ ，其中 k ∈ R 。 (2) 当 a  = 2 时，规范形为 y 1 2 ​ + y 2 2 ​ + y 3 2 ​ ；当 a = 2 时，规范形为 y 1 2 ​ + y 2 2 ​ 。 【解析】 (1) 由 f ( x 1 ​ , x 2 ​ , x 3 ​ ) = 0 得方程组： ⎩ ⎨ ⎧ ​ x 1 ​ − x 2 ​ + x 3 ​ = 0 x 2 ​ + x 3 ​ = 0 x 1 ​ + a x 3 ​ = 0 ​ 系数矩阵为 A = ​ 1 0 1 ​ − 1 1 0 ​ 1 1 a ​ ​ → ​ 1 0 0 ​ − 1 1 0 ​ 1 1 a − 2 ​ ​ . 当 a  = 2 时， r ( A ) = 3 ，唯一解为 x 1 ​ = x 2 ​ = x 3 ​ = 0 。 当 a = 2 时， r ( A ) = 2 ，通解为 x = k ​ 2 1 − 1 ​ ​ ，其中 k ∈ R 。 (2) - 当 a  = 2 时，二次型正定，规范形为 y 1 2 ​ + y 2 2 ​ + y 3 2 ​ 。 当 a = 2 时，二次型矩阵为 B = ​ 2 − 1 3 ​ − 1 2 0 ​ 3 0 6 ​ ​ , 特征值为 λ 1 ​ = 0 ， λ 2 , 3 ​ = 5 ± 7 ​ ，规范形为 y 1 2 ​ + y 2 2 ​ 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
  base(23, 'k-math-004', {
    type: 'subjective', difficulty: 3, score: 11, mathHtml: true,
    stem: "（本题满分 11 分）已知 \\(a\\) 是常数，且矩阵\\(A=\\begin{pmatrix} 1&2&a\\\\ 1&3&0\\\\ 2&7&-a \\end{pmatrix}\\)可经初等列变换化为矩阵\\(B=\\begin{pmatrix} 1&a&2\\\\ 0&1&1\\\\ -1&1&1 \\end{pmatrix}.\\)（I）求 \\(a\\)；（II）求满足 \\(AP=B\\) 的可逆矩阵 \\(P\\)。",
    referenceAnswer: "【答案】 (1) a = 2 (2) 所有满足 A P = B 的可逆矩阵 P 为 P = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ , 其中 k 2 ​  = k 3 ​ ，且 k 1 ​ , k 2 ​ , k 3 ​ ∈ R . 【解析】 (1) 矩阵 A 经过初等列变换得到矩阵 B ，矩阵 A 、 B 等价，故 r ( A ) = r ( B ) 。 矩阵 A = ​ 1 1 2 ​ 2 3 7 ​ a 0 − a ​ ​ → ​ 1 1 0 ​ 2 3 0 ​ a 0 0 ​ ​ , 矩阵 B = ​ 1 0 − 1 ​ a 1 1 ​ 2 1 1 ​ ​ → ​ 1 0 0 ​ a 1 0 ​ 2 1 2 − a ​ ​ . 所以 2 − a = 0 ，解得 a = 2 。 (2) 对 ( A , B ) = ​ 1 1 2 ​ 2 3 7 ​ a 0 − a ​ 1 0 − 1 ​ a 1 1 ​ 2 1 1 ​ ​ 进行初等行变换。 当 a = 2 时， ( A , B ) → ​ 1 0 0 ​ 0 1 0 ​ 6 − 2 0 ​ 3 − 1 0 ​ 4 − 1 0 ​ 4 − 1 0 ​ ​ . 可得 P 的列向量表达式为 X = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ ​ , Y = ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ ​ , Z = ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ , 其中 k 1 ​ , k 2 ​ , k 3 ​ ∈ R 。 因为 P 可逆，所以其列向量线性无关。由 P 的行列式可知需 k 2 ​  = k 3 ​ ， 故所有满足条件的可逆矩阵为 P = ​ − 6 k 1 ​ + 3 2 k 1 ​ − 1 k 1 ​ ​ − 6 k 2 ​ + 4 2 k 2 ​ − 1 k 2 ​ ​ − 6 k 3 ​ + 4 2 k 3 ​ − 1 k 3 ​ ​ ​ , 其中 k 2 ​  = k 3 ​ ，且 k 1 ​ , k 2 ​ , k 3 ​ ∈ R 。",
    explain: '本题为解答题，请对照参考答案按步骤自评。',
    rubric: [{ text: '步骤与结果对应给分', points: 11 }]
  }),
]

export const paper2018_math2 = {
  id: P, year: Y,
  title: '2018 年全国硕士研究生招生考试 数学（二）',
  short: '2018 数学二原卷', group: 'math', subjects: ['math'],
  durationMin: 180, totalScore: 150,
  questionCount: questions2018_math2.length,
  qids: questions2018_math2.map(q => q.id),
  note: '选择题 4 分、填空题 4 分，解答题按步骤自评。'
}
