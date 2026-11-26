const P = 'paper-2024-math'
const Y = 2024
const SRC = 'https://gjb.ztbu.edu.cn/attachment/sites/item/2025_09/18_17/1066d05b0b708445.pdf'
const ANS = 'https://kaoyan.eol.cn/shiti/shuxue/202312/t20231226_2551143.shtml'

const base = (n, kid, extra = {}) => ({
  id: `q-math-2024-${String(n).padStart(2, '0')}`,
  subject: 'math',
  knowledgeId: kid,
  paperId: P,
  paperOnly: true,
  year: Y,
  number: n,
  source: 'real',
  sourceName: '2024 考研数学（一）原卷（公开网络版）',
  sourceUrl: SRC,
  ...extra
})

const single = (n, kid, stem, options, answer, explain, extra = {}) => base(n, kid, {
  type: 'single', difficulty: 2, score: 5, stem,
  options: options.map((t, i) => ({ key: 'ABCD'[i], text: t })),
  answer: [answer], explain, ...extra
})

const fill = (n, kid, stem, answer, explain) => base(n, kid, {
  type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, stem,
  answerText: answer, referenceAnswer: `答案：${answer}`, rubric: [{ text: '结果正确，过程可简要', points: 5 }],
  explain: '填空题以结果为准，自评时按最终答案是否正确给分；过程仅用于复盘。'
})

export const questions2024_math1 = [
  single(1, 'k-math-001',
    String.raw`已知函数 $f(x)=\int_0^x e^{\cos t}\,\mathrm{d}t$，$g(x)=\int_0^{\sin x} e^{t^2}\,\mathrm{d}t$，则`,
    [
      String.raw`$f(x)$ 为奇函数，$g(x)$ 为偶函数`,
      String.raw`$f(x)$ 为偶函数，$g(x)$ 为奇函数`,
      String.raw`$f(x)$ 与 $g(x)$ 均为奇函数`,
      String.raw`$f(x)$ 与 $g(x)$ 均为周期函数`
    ],
    'C', String.raw`$e^{\cos t}$ 为偶函数，积分上限为 $x$，故 $f(x)$ 为奇函数；$e^{t^2}$ 为偶函数，上限 $\sin x$ 为奇函数，故 $g(x)$ 为奇函数。`),

  single(2, 'k-math-008',
    String.raw`设 $P=P(x,y,z)$、$Q=Q(x,y,z)$ 均为连续函数，$\Sigma$ 为曲面 $z=\sqrt{1-x^2-y^2}\ (x\ge0,y\ge0)$ 的上侧，则 $\displaystyle\iint_\Sigma P\,\mathrm{d}y\mathrm{d}z+Q\,\mathrm{d}z\mathrm{d}x=$`,
    [
      String.raw`$\displaystyle\iint_\Sigma\left(\frac{x}{z}P+\frac{y}{z}Q\right)\mathrm{d}x\mathrm{d}y$`,
      String.raw`$\displaystyle\iint_\Sigma\left(-\frac{x}{z}P+\frac{y}{z}Q\right)\mathrm{d}x\mathrm{d}y$`,
      String.raw`$\displaystyle\iint_\Sigma\left(\frac{x}{z}P-\frac{y}{z}Q\right)\mathrm{d}x\mathrm{d}y$`,
      String.raw`$\displaystyle\iint_\Sigma\left(-\frac{x}{z}P-\frac{y}{z}Q\right)\mathrm{d}x\mathrm{d}y$`
    ],
    'A', String.raw`曲面法向量为 $(x,y,z)$，上侧取正，$\mathrm{d}y\mathrm{d}z=\cos\alpha\,\mathrm{d}S=\frac{x}{z}\mathrm{d}x\mathrm{d}y$，$\mathrm{d}z\mathrm{d}x=\frac{y}{z}\mathrm{d}x\mathrm{d}y$，故化为 A。`),

  single(3, 'k-math-010',
    String.raw`已知幂级数 $\displaystyle\sum_{n=0}^{\infty}a_nx^n$ 的和函数为 $\ln(2+x)$，则 $\displaystyle\sum_{n=0}^{\infty}na_{2n}=$`,
    [String.raw`$-\dfrac{1}{6}$`, String.raw`$-\dfrac{1}{3}$`, String.raw`$\dfrac{1}{6}$`, String.raw`$\dfrac{1}{3}$`],
    'A', String.raw`$\ln(2+x)=\ln2+\ln(1+x/2)$，比较系数得 $a_n=\frac{(-1)^{n-1}}{n2^n}\ (n\ge1)$，再求偶数项加权和，得 $-1/6$。`),

  single(4, 'k-math-003',
    String.raw`设函数 $f(x)$ 在区间 $(-1,1)$ 上有定义，且 $\displaystyle\lim_{x\to0}f(x)=0$，则`,
    [
      String.raw`当 $\displaystyle\lim_{x\to0}\frac{f(x)}{x}=m$ 时，$f'(0)=m$`,
      String.raw`当 $f'(0)=m$ 时，$\displaystyle\lim_{x\to0}\frac{f(x)}{x}=m$`,
      String.raw`当 $\displaystyle\lim_{x\to0}f'(x)=m$ 时，$f'(0)=m$`,
      String.raw`当 $f'(0)=m$ 时，$\displaystyle\lim_{x\to0}f'(x)=m$`
    ],
    'B', String.raw`$f'(0)=m$ 说明 $f$ 在 $0$ 处可导，从而连续，$f(0)=\lim f(x)=0$，由导数定义 $\lim\frac{f(x)}{x}=\frac{f(x)-f(0)}{x-0}=f'(0)=m$；其余选项涉及导数连续或极限存在，均不能推出。`),

  single(5, 'k-math-013',
    String.raw`在空间直角坐标系 $O$-$xyz$ 中，三张平面 $\pi_i:a_ix+b_iy+c_iz=d_i\ (i=1,2,3)$ 的位置关系如题 5 图所示。记 $\boldsymbol\alpha_i=(a_i,b_i,c_i)$，$\boldsymbol\beta_i=(a_i,b_i,c_i,d_i)$，若 $r\begin{pmatrix}\boldsymbol\alpha_1\\\boldsymbol\alpha_2\\\boldsymbol\alpha_3\end{pmatrix}=m$，$r\begin{pmatrix}\boldsymbol\beta_1\\\boldsymbol\beta_2\\\boldsymbol\beta_3\end{pmatrix}=n$，则`,
    [String.raw`$m=1,\ n=2$`, String.raw`$m=n=2$`, String.raw`$m=2,\ n=3$`, String.raw`$m=n=3$`],
    'B', String.raw`三平面交于一条直线且不重合，方程组有无穷多解，故 $r(A)=r(\bar A)<3$；又存在两平面法向量不共线，$r(A)\ge2$，故 $m=n=2$。`,
    { figureNote: '题 5 图为三平面相交于一条直线的位置关系，原图见试卷 PDF。' }),

  single(6, 'k-math-012',
    String.raw`设向量 $\boldsymbol\alpha_1=\begin{pmatrix}a\\1\\-1\\1\end{pmatrix}$，$\boldsymbol\alpha_2=\begin{pmatrix}1\\1\\b\\a\end{pmatrix}$，$\boldsymbol\alpha_3=\begin{pmatrix}1\\a\\-1\\1\end{pmatrix}$，若 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性相关，且其中任意两个向量均线性无关，则`,
    [String.raw`$a=1,\ b\ne-1$`, String.raw`$a=1,\ b=-1$`, String.raw`$a\ne-2,\ b=2$`, String.raw`$a=-2,\ b=2$`],
    'D', String.raw`三向量线性相关给出 $a=1$ 或 $a=-2$；$a=1$ 时 $\boldsymbol\alpha_1$ 与 $\boldsymbol\alpha_3$ 相关，不合题意；$a=-2$ 时由行列式为零得 $b=2$，且任意两向量无关。`),

  single(7, 'k-math-013',
    String.raw`设 $\boldsymbol A$ 是秩为 2 的 3 阶矩阵，$\boldsymbol\alpha$ 是满足 $\boldsymbol A\boldsymbol\alpha=\boldsymbol0$ 的非零向量。若对满足 $\boldsymbol\beta^{\mathrm T}\boldsymbol\alpha=0$ 的任意向量 $\boldsymbol\beta$，均有 $\boldsymbol A\boldsymbol\beta=\boldsymbol\beta$，则`,
    [String.raw`$\boldsymbol A^3$ 的迹为 2`, String.raw`$\boldsymbol A^3$ 的迹为 5`, String.raw`$\boldsymbol A^5$ 的迹为 7`, String.raw`$\boldsymbol A^5$ 的迹为 9`],
    'A', String.raw`与 $\boldsymbol\alpha$ 正交的平面上 $\boldsymbol A$ 为恒等变换，特征值为 1,1；$\boldsymbol A\boldsymbol\alpha=0$ 给出特征值 0，故特征值为 1,1,0，$A^k$ 的迹为 2。`),

  single(8, 'k-math-019',
    String.raw`设随机变量 $X$ 与 $Y$ 相互独立，$X\sim N(0,2)$，$Y\sim N(-2,2)$。若 $P\{2X+Y<a\}=P\{X>Y\}$，则 $a=$`,
    [String.raw`$-2-\sqrt{10}$`, String.raw`$-2+\sqrt{10}$`, String.raw`$-2-\sqrt{6}$`, String.raw`$-2+\sqrt{6}$`],
    'B', String.raw`$2X+Y\sim N(-2,10)$，$X-Y\sim N(2,4)$。由概率相等并标准化，得 $\frac{a+2}{\sqrt{10}}=1$，故 $a=-2+\sqrt{10}$。`),

  single(9, 'k-math-019',
    String.raw`设随机变量 $X$ 的概率密度为 $f_X(x)=\begin{cases}2(1-x),&0<x<1\\0,&\text{其他}\end{cases}$。在 $X=x$ 的条件下，$Y$ 在区间 $(x,1)$ 上服从均匀分布，则 $\operatorname{Cov}(X,Y)=$`,
    [String.raw`$-\dfrac{1}{36}$`, String.raw`$-\dfrac{1}{72}$`, String.raw`$\dfrac{1}{72}$`, String.raw`$\dfrac{1}{36}$`],
    'D', String.raw`条件密度 $f_{Y|X}(y|x)=\frac{1}{1-x}$，联合密度为 $2\ (0<x<y<1)$。算得 $E(XY)=1/4$，$E X=1/3$，$E Y=2/3$，协方差为 $1/4-2/9=1/36$。`),

  single(10, 'k-math-019',
    String.raw`设随机变量 $X$ 和 $Y$ 相互独立，且都服从参数为 $\lambda$ 的指数分布。令 $Z=|X-Y|$，则下列随机变量与 $Z$ 同分布的是`,
    [String.raw`$X+Y$`, String.raw`$\dfrac{X+Y}{2}$`, String.raw`$2X$`, String.raw`$X$`],
    'D', String.raw`求 $Z$ 的分布函数，$z\ge0$ 时 $F_Z(z)=1-e^{-\lambda z}$，与参数为 $\lambda$ 的指数分布相同，故选 D。`),

  fill(11, 'k-math-001',
    String.raw`若 $\displaystyle\lim_{x\to0}\frac{(1+ax^2)^{\sin x}-1}{x^3}=6$，则 $a=$ ______。`,
    '$a=6$', String.raw`用 $e^{u}-1\sim u$ 与 $\sin x\sim x$ 等价替换，极限化为 $\lim\frac{ax^2\cdot x}{x^3}=a$，故 $a=6$。`),

  fill(12, 'k-math-004',
    String.raw`设 $z=f(u,v)$ 有二阶连续偏导数，且 $\mathrm{d}f|_{(1,1)}=3\mathrm{d}u+4\mathrm{d}v$。若 $y=f(\cos x,1+x^2)$，则 $\left.\dfrac{\mathrm{d}^2y}{\mathrm{d}x^2}\right|_{x=0}=$ ______。`,
    '$5$', String.raw`$f_u(1,1)=3$，$f_v(1,1)=4$。链式法则求二阶导，在 $x=0$ 处代入得 $-f_u+2f_v=5$。`),

  fill(13, 'k-math-010',
    String.raw`已知 $f(x)=x+1$，若 $f(x)=\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}a_n\cos nx,\ x\in[0,\pi]$，则 $\displaystyle\lim_{n\to\infty}n^2\sin a_{2n-1}=$ ______。`,
    String.raw`$-\dfrac{1}{\pi}$`, String.raw`由余弦级数系数公式得 $a_{2n-1}=-\frac{4}{\pi(2n-1)^2}$，再用 $\sin a\sim a$ 求极限，得 $-1/\pi$。`),

  fill(14, 'k-math-006',
    String.raw`微分方程 $y'=\dfrac{1}{(x+y)^2}$ 满足条件 $y(1)=0$ 的解为 ______。`,
    String.raw`$x=\tan\left(y+\dfrac{\pi}{4}\right)-y$`, String.raw`令 $u=x+y$，化为 $u'=1+1/u^2$，分离变量积分并用初值确定常数，得隐式解。`),

  fill(15, 'k-math-014',
    String.raw`设实矩阵 $\boldsymbol A=\begin{pmatrix}a+1&a\\a&a\end{pmatrix}$。若对任意实向量 $\boldsymbol\alpha=\begin{pmatrix}x_1\\x_2\end{pmatrix}$、$\boldsymbol\beta=\begin{pmatrix}y_1\\y_2\end{pmatrix}$，不等式 $(\boldsymbol\alpha^{\mathrm T}\boldsymbol A\boldsymbol\beta)^2\le\boldsymbol\alpha^{\mathrm T}\boldsymbol A\boldsymbol\alpha\cdot\boldsymbol\beta^{\mathrm T}\boldsymbol A\boldsymbol\beta$ 都成立，则 $a$ 的取值范围是 ______。`,
    String.raw`$a\ge0$`, String.raw`不等式等价于 $\boldsymbol A$ 半正定，顺序主子式满足 $a+1\ge0$、$a\ge0$，得 $a\ge0$。`),

  fill(16, 'k-math-019',
    String.raw`随机试验每次成功的概率为 $p$。进行 3 次独立重复试验，已知至少成功一次的条件下全部成功的概率为 $\dfrac{4}{13}$，则 $p=$ ______。`,
    String.raw`$p=\dfrac{2}{3}$`, String.raw`条件概率为 $\frac{p^3}{1-(1-p)^3}=\frac{4}{13}$，解得 $p=2/3$。`),

  base(17, 'k-math-009', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: String.raw`已知平面区域 $D=\{(x,y)\mid\sqrt{1-y^2}\le x\le1,\ -1\le y\le1\}$，计算 $\displaystyle\iint_D\frac{x}{\sqrt{x^2+y^2}}\,\mathrm{d}\sigma$。`,
    referenceAnswer: String.raw`区域关于 $x$ 轴对称，被积函数关于 $y$ 为偶函数，化为第一象限并交换积分次序：$$I=2\int_0^1\mathrm{d}y\int_{\sqrt{1-y^2}}^1\frac{x}{\sqrt{x^2+y^2}}\mathrm{d}x=2\int_0^1\left(\sqrt{1+y^2}-1\right)\mathrm{d}y.$$ 令 $y=\tan t$，计算得 $$I=\sqrt2+\ln(1+\sqrt2)-2.$$`,
    rubric: [
      { text: '利用对称性化为第一象限并正确交换次序', points: 4 },
      { text: '内层积分结果为 $\sqrt{1+y^2}-1$', points: 3 },
      { text: '三角代换与最终结果 $\sqrt2+\ln(1+\sqrt2)-2$', points: 3 }
    ],
    explain: '主观题。自评按“对称性—积分次序—代换—结果”四步给分，结果对但过程缺失可给 6–8 分。'
  }),

  base(18, 'k-math-007', {
    type: 'subjective', difficulty: 3, score: 12,
    stem: String.raw`设 $f(x,y)=x^3+y^3-(x+y)^2+3$，曲面 $z=f(x,y)$ 在点 $(1,1,1)$ 处的切平面为 $T$，$T$ 与三个坐标面所围有界区域在 $xOy$ 面上的投影为 $D$。（1）求 $T$ 的方程；（2）求 $f(x,y)$ 在 $D$ 上的最大值和最小值。`,
    referenceAnswer: String.raw`（1）$f_x=3x^2-2(x+y)$，$f_y=3y^2-2(x+y)$，在 $(1,1)$ 处均为 $-1$。切平面为 $-(x-1)-(y-1)-(z-1)=0$，即 $x+y+z=3$。\n（2）$D=\{x+y\le3,\ x\ge0,\ y\ge0\}$。内部驻点解 $3x^2-2(x+y)=0$、$3y^2-2(x+y)=0$，得 $(x,y)=(4/3,4/3)$，$f=17/27$。边界上分别求驻点与端点：$f(3,0)=21$，$f(0,3)=21$，$f(2/3,0)=77/27$，$f(0,2/3)=77/27$，$f(3/2,3/2)=3/4$。故最大值为 21，最小值为 $17/27$。`,
    rubric: [
      { text: '切平面法向量与方程 $x+y+z=3$', points: 4 },
      { text: '区域 D 的边界与内部驻点', points: 3 },
      { text: '边界驻点、端点比较', points: 3 },
      { text: '最大值 21、最小值 17/27', points: 2 }
    ],
    explain: '主观题。自评重点看是否比较了内部驻点与三条边界，仅写驻点不比较边界最多 6 分。'
  }),

  base(19, 'k-math-005', {
    type: 'subjective', difficulty: 3, score: 12,
    stem: String.raw`设 $f(x)$ 具有二阶导数，且 $f'(0)=f'(1)$，$|f''(x)|\le1$。证明：\n（1）当 $x\in[0,1]$ 时，$\left|f(x)-f(0)(1-x)-f(1)x\right|\le\dfrac{x(1-x)}{2}$；\n（2）$\left|\displaystyle\int_0^1f(x)\mathrm{d}x-\dfrac{f(0)+f(1)}{2}\right|\le\dfrac{1}{12}$。`,
    referenceAnswer: String.raw`（1）令 $g(x)=f(x)-f(0)(1-x)-f(1)x$，则 $g(0)=g(1)=0$。由 $f'(0)=f'(1)$ 得 $g'(0)=g'(1)$。对 $g$ 用罗尔定理与拉格朗日中值定理，结合 $|g''|=|f''|\le1$，可得 $|g(x)|\le\frac{x(1-x)}{2}$。也可在 $0$ 与 $1$ 处分别泰勒展开相减。\n（2）对（1）的 inequality 在 $[0,1]$ 上积分：$$\left|\int_0^1g(x)\mathrm{d}x\right|\le\int_0^1\frac{x(1-x)}{2}\mathrm{d}x=\frac{1}{12}.$$ 而 $\int_0^1g(x)\mathrm{d}x=\int_0^1f(x)\mathrm{d}x-\frac{f(0)+f(1)}{2}$，即得。`,
    rubric: [
      { text: '构造辅助函数并说明端点值、导数值', points: 4 },
      { text: '用中值定理或泰勒展开证明（1）', points: 4 },
      { text: '对（1）积分并计算 $\int x(1-x)/2=1/12$', points: 3 },
      { text: '结论完整、等号条件说明', points: 1 }
    ],
    explain: '主观题。自评按“辅助函数—估计—积分”三段给分；直接引用结论不写过程只给 4 分。'
  }),

  base(20, 'k-math-011', {
    type: 'subjective', difficulty: 3, score: 12,
    stem: String.raw`已知有向曲线 $L$ 为球面 $x^2+y^2+z^2=2x$ 与平面 $2x-z-1=0$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向。计算曲线积分 $$\int_L(6xyz-yz^2)\,\mathrm{d}x+2x^2z\,\mathrm{d}y+xyz\,\mathrm{d}z.$$`,
    referenceAnswer: String.raw`由平面方程 $z=2x-1$ 消去 $z$，交线在 $xOy$ 面上的投影为 $(x-\tfrac32)^2+\tfrac{y^2}{5}=\tfrac14$。取上侧，用斯托克斯公式化为例题：$$I=\iint_\Sigma\begin{vmatrix}\mathrm{d}y\mathrm{d}z&\mathrm{d}z\mathrm{d}x&\mathrm{d}x\mathrm{d}y\\ \partial_x&\partial_y&\partial_z\\ 6xyz-yz^2&2x^2z&xyz\end{vmatrix}.$$ 计算旋度并代入 $z=2x-1$，化简后面积分为常数乘投影面积，得 $$I=\frac{4\sqrt5\pi}{25}.$$`,
    rubric: [
      { text: '消元得投影曲线并确定方向、上侧', points: 4 },
      { text: '斯托克斯公式行列式与旋度计算正确', points: 4 },
      { text: '化为二重积分并计算面积', points: 3 },
      { text: '最终结果 $4\sqrt5\pi/25$', points: 1 }
    ],
    explain: '主观题。自评注意方向与上侧是否匹配，旋度符号错误会整体翻号。'
  }),

  base(21, 'k-math-015', {
    type: 'subjective', difficulty: 3, score: 12,
    stem: String.raw`已知数列 $\{x_n\},\{y_n\},\{z_n\}$ 满足 $x_0=-1$，$y_0=0$，$z_0=2$，且 $$\begin{cases}x_n=-2x_{n-1}+2z_{n-1}\\y_n=-2y_{n-1}-2z_{n-1}\\z_n=-6x_{n-1}-3y_{n-1}+3z_{n-1}\end{cases}$$ 记 $\boldsymbol\alpha_n=\begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$，写出满足 $\boldsymbol\alpha_n=\boldsymbol A\boldsymbol\alpha_{n-1}$ 的矩阵 $\boldsymbol A$，并求 $\boldsymbol A^n$ 及 $x_n,y_n,z_n\ (n=1,2,\cdots)$。`,
    referenceAnswer: String.raw`$\boldsymbol A=\begin{pmatrix}-2&0&2\\0&-2&-2\\-6&-3&3\end{pmatrix}$。特征值为 $\lambda_1=0,\lambda_2=\lambda_3=-2$，对应特征向量可取 $(1,-1,1)^{\mathrm T}$、$(-1,2,0)^{\mathrm T}$、$(2,-2,3)^{\mathrm T}$。令 $\boldsymbol P$ 为特征向量矩阵，则 $\boldsymbol P^{-1}\boldsymbol A\boldsymbol P=\operatorname{diag}(0,-2,-2)$。对 $n\ge1$，$$\boldsymbol A^n=\begin{pmatrix}-(-2)^n-4&-(-2)^n-2&2\\-(-2)^{n+1}+4&-(-2)^{n+1}+2&-2\\-6&-3&3\end{pmatrix}.$$ 代入初值 $\boldsymbol\alpha_0=(-1,0,2)^{\mathrm T}$，得 $$x_n=8+(-2)^n,\quad y_n=-8+(-2)^{n+1},\quad z_n=12.$$`,
    rubric: [
      { text: '矩阵 A 写对', points: 2 },
      { text: '特征值与特征向量正确', points: 4 },
      { text: '对角化求 $A^n$ 正确', points: 4 },
      { text: '通项 $x_n,y_n,z_n$ 正确', points: 2 }
    ],
    explain: '主观题。自评按“A—特征值—对角化—通项”四段给分，矩阵幂符号错误扣 2–3 分。'
  }),

  base(22, 'k-math-020', {
    type: 'subjective', difficulty: 3, score: 12,
    stem: String.raw`设总体 $X\sim U(0,\theta)$，$\theta$ 未知，$X_1,X_2,\cdots,X_n$ 为简单随机样本，$X_{(n)}=\max\{X_1,X_2,\cdots,X_n\}$，$T_c=cX_{(n)}$。\n（1）求 $c$，使 $T_c$ 为 $\theta$ 的无偏估计；\n（2）记 $h(c)=E(T_c-\theta)^2$，求 $c$ 使 $h(c)$ 最小。`,
    referenceAnswer: String.raw`（1）$X_{(n)}$ 的密度为 $f_{(n)}(x)=\frac{n x^{n-1}}{\theta^n}\ (0<x<\theta)$，故 $E X_{(n)}=\frac{n}{n+1}\theta$。无偏要求 $c\frac{n}{n+1}\theta=\theta$，得 $c=\frac{n+1}{n}$。\n（2）$E X_{(n)}^2=\frac{n}{n+2}\theta^2$，于是 $$h(c)=\left(\frac{n c^2}{n+2}-\frac{2nc}{n+1}+1\right)\theta^2.$$ 对 $c$ 求导并令其为零，得 $c=\frac{n+2}{n+1}$；此时二阶导为正，取得最小值。`,
    rubric: [
      { text: '最大次序统计量的密度', points: 4 },
      { text: '期望与无偏条件，得 $c=(n+1)/n$', points: 3 },
      { text: '二阶矩与 $h(c)$ 表达式', points: 3 },
      { text: '求导得 $c=(n+2)/(n+1)$ 并说明最小', points: 2 }
    ],
    explain: '主观题。自评注意 $X_{(n)}$ 密度的积分上限为 $\theta$，以及无偏条件对应的是 $\theta$ 而非 $X$ 的期望。'
  })
]

export const paper2024_math1 = {
  id: P,
  year: Y,
  title: '2024 年全国硕士研究生招生考试 数学（一）',
  short: '2024 数学一原卷',
  group: 'math',
  subjects: ['math'],
  durationMin: 180,
  totalScore: 150,
  questionCount: questions2024_math1.length,
  qids: questions2024_math1.map(q => q.id),
  sourceName: '公开网络版（郑州工商学院试卷 PDF / 中国教育在线答案）',
  sourceUrl: SRC,
  answerUrl: ANS,
  note: '题干含公式，页面使用 KaTeX 渲染；填空题按结果自评，解答题按步骤要点自评。'
}
