const P = 'paper-2025-math'
const Y = 2025
const SRC = 'https://kaoyan.eol.cn/shiti/shuxue/202508/t20250828_2686951.shtml'

const base = (n, kid, extra = {}) => ({
  id: `q-math-2025-${String(n).padStart(2, '0')}`,
  subject: 'math',
  knowledgeId: kid,
  paperId: P,
  paperOnly: true,
  year: Y,
  number: n,
  source: 'real',
  sourceName: '2025 考研数学（一）原卷（公开网络版）',
  sourceUrl: SRC,
  ...extra
})

const single = (n, kid, stem, options, answer, explain) => base(n, kid, {
  type: 'single', difficulty: 2, score: 5, stem,
  options: options.map((t, i) => ({ key: 'ABCD'[i], text: t })),
  answer: [answer], explain
})

const fill = (n, kid, stem, answer, explain) => base(n, kid, {
  type: 'subjective', subtype: 'fill', difficulty: 2, score: 5, stem,
  answerText: answer,
  referenceAnswer: `答案：$${answer}$`,
  rubric: [{ text: '结果正确；等价形式同样给分', points: 5 }],
  explain
})

const solution = (n, kid, score, stem, referenceAnswer, rubric, explain) => base(n, kid, {
  type: 'subjective', difficulty: 3, score, stem,
  referenceAnswer, rubric, explain
})

export const questions2025_math1 = [
  single(1, 'k-math-001',
    String.raw`已知函数 $f(x)=\displaystyle\int_0^x e^{t^2}\sin t\,\mathrm dt$，$g(x)=\displaystyle\int_0^x e^{t^2}\,\mathrm dt\cdot\sin^2x$，则`,
    [
      String.raw`$x=0$ 是 $f(x)$ 的极值点，也是 $g(x)$ 的极值点`,
      String.raw`$x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=g(x)$ 的拐点`,
      String.raw`$x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=f(x)$ 的拐点`,
      String.raw`$(0,0)$ 是曲线 $y=f(x)$ 的拐点，也是曲线 $y=g(x)$ 的拐点`
    ],
    'B',
    String.raw`$f\'(0)=0$，$f\'\'(0)=e^0\sin0=0$，$f\'\'\'(0)=1>0$，故 $x=0$ 是 $f$ 的极值点；$g\'\'(0)=0$、$g\'\'\'(0)=2>0$，故 $(0,0)$ 是 $g$ 的拐点。`),
  single(2, 'k-math-006',
    String.raw`已知级数：① $\displaystyle\sum_{n=1}^{\infty}\sin\frac{n^3\pi}{n^2+1}$；② $\displaystyle\sum_{n=1}^{\infty}(-1)^n\left(\frac1{\sqrt{n^2}}-\tan\frac1{\sqrt{n^2}}\right)$，则`,
    [
      String.raw`①与②均条件收敛`,
      String.raw`①条件收敛，②绝对收敛`,
      String.raw`①绝对收敛，②条件收敛`,
      String.raw`①与②均绝对收敛`
    ],
    'B',
    String.raw`①中 $\sin\frac{n^3\pi}{n^2+1}=\sin\left(n\pi-\frac{n\pi}{n^2+1}\right)=(-1)^{n+1}\sin\frac{n\pi}{n^2+1}$，通项等价于 $\frac{n\pi}{n^2+1}$，为交错级数且单调减，条件收敛；②中 $\frac1n-\tan\frac1n\sim-\frac1{3n^3}$，绝对值级数收敛，故绝对收敛。`),
  single(3, 'k-math-002',
    String.raw`设函数 $f(x)$ 在区间 $[0,+\infty)$ 上可导，则`,
    [
      String.raw`当 $\displaystyle\lim_{x\to+\infty}f(x)$ 存在时，$\displaystyle\lim_{x\to+\infty}f\'(x)$ 存在`,
      String.raw`当 $\displaystyle\lim_{x\to+\infty}f\'(x)$ 存在时，$\displaystyle\lim_{x\to+\infty}f(x)$ 存在`,
      String.raw`当 $\displaystyle\lim_{x\to+\infty}\frac{\int_0^x f(t)\,\mathrm dt}{x}$ 存在时，$\displaystyle\lim_{x\to+\infty}f(x)$ 存在`,
      String.raw`当 $\displaystyle\lim_{x\to+\infty}f(x)$ 存在时，$\displaystyle\lim_{x\to+\infty}\frac{\int_0^x f(t)\,\mathrm dt}{x}$ 存在`
    ],
    'D',
    String.raw`取 $f(x)=\sin x^2$ 可排除 A、C；取 $f(x)=x$ 可排除 B；由洛必达法则，若 $\lim f(x)$ 存在，则 $\lim \frac{\int_0^x f(t)dt}{x}=\lim f(x)$，D 正确。`),
  single(4, 'k-math-010',
    String.raw`设函数 $f(x,y)$ 连续，则 $\displaystyle\int_{-2}^{2}\mathrm dx\int_{4-x^2}^{4}f(x,y)\,\mathrm dy=$`,
    [
      String.raw`$\displaystyle\int_0^4\left[\int_{-2}^{-\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,\mathrm dx\right]\mathrm dy$`,
      String.raw`$\displaystyle\int_0^4\left[\int_{-2}^{\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_{\sqrt{4-y}}^{2}f(x,y)\,\mathrm dx\right]\mathrm dy$`,
      String.raw`$\displaystyle\int_0^2\mathrm dy\int_{-2}^{\sqrt{4-y}}f(x,y)\,\mathrm dx+\int_2^4\mathrm dy\int_{\sqrt{4-y}}^{y-4}f(x,y)\,\mathrm dx$`,
      String.raw`$\displaystyle2\int_0^2\mathrm dx\int_{4-x}^{4}f(x,y)\,\mathrm dy$`
    ],
    'A',
    String.raw`积分区域为 $-2\le x\le2,\ 4-x^2\le y\le4$，即 $0\le y\le4,\ |x|\le\sqrt{4-y}$。交换次序后按 $x<0$ 与 $x>0$ 分成两段，得 A。`),
  single(5, 'k-math-009',
    String.raw`二次型 $f(x_1,x_2,x_3)=x_1^2+2x_1x_2+2x_1x_3$ 的正惯性指数为`,
    [
      String.raw`$0$`,
      String.raw`$1$`,
      String.raw`$2$`,
      String.raw`$3$`
    ],
    'B',
    String.raw`二次型矩阵为 $\begin{pmatrix}1&1&1\\1&0&0\\1&0&0\end{pmatrix}$，秩为 2，且一阶主子式 $1>0$、二阶主子式 $-1<0$，故正惯性指数为 1。`),
  single(6, 'k-math-009',
    String.raw`设 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 是 $n$ 维列向量，$\alpha_1,\alpha_2$ 线性无关，$\alpha_1,\alpha_2,\alpha_3$ 线性相关，且 $\alpha_1+\alpha_2+\alpha_4=0$。在空间直角坐标系 $O-xyz$ 中，关于 $x,y,z$ 的方程组 $x\alpha_1+y\alpha_2+z\alpha_3=\alpha_4$ 的几何图形是`,
    [
      String.raw`过原点的一个平面`,
      String.raw`过原点的一条直线`,
      String.raw`不过原点的一个平面`,
      String.raw`不过原点的一条直线`
    ],
    'D',
    String.raw`$\alpha_4=-(\alpha_1+\alpha_2)$，故原方程有解，且解集为 $x\alpha_1+y\alpha_2+z\alpha_3=-(\alpha_1+\alpha_2)$。因 $\alpha_3$ 可由 $\alpha_1,\alpha_2$ 表示，系数矩阵秩为 2，解集是一条直线；$x=y=z=0$ 不满足方程，故直线不过原点。`),
  single(7, 'k-math-009',
    String.raw`设 $n$ 阶矩阵 $A,B,C$ 满足 $r(A)+r(B)+r(C)=r(ABC)+2n$，给出下列四个结论：① $r(ABC)+n=r(AB)+r(C)$；② $r(AB)+n=r(A)+r(B)$；③ $r(A)=r(B)=r(C)=n$；④ $r(AB)=r(BC)=n$。其中正确的选项是`,
    [
      String.raw`①②`,
      String.raw`①③`,
      String.raw`②④`,
      String.raw`③④`
    ],
    'A',
    String.raw`由 $r(AB)\le\min\{r(A),r(B)\}$ 及 $r(ABC)\le\min\{r(AB),r(C)\}$，结合已知可推出 ①②；③④不一定成立。`),
  single(8, 'k-math-011',
    String.raw`设二维随机变量 $(X,Y)$ 服从正态分布 $N(0,0;1,1;\rho)$，其中 $\rho\in(-1,1)$。若 $a,b$ 为满足 $a^2+b^2=1$ 的任意实数，则 $D(aX+bY)$ 的最大值为`,
    [
      String.raw`$1$`,
      String.raw`$2$`,
      String.raw`$1+|\rho|$`,
      String.raw`$1+\rho^2$`
    ],
    'C',
    String.raw`$D(aX+bY)=a^2+b^2+2ab\rho=1+2ab\rho$。由 $2|ab|\le a^2+b^2=1$ 得最大值为 $1+|\rho|$。`),
  single(9, 'k-math-011',
    String.raw`设 $X_1,X_2,\cdots,X_{20}$ 是来自总体 $B(1,0.1)$ 的简单随机样本，令 $T=\displaystyle\sum_{i=1}^{20}X_i$。利用泊松分布近似表示二项分布的方法可得 $P\{T\le1\}\approx$`,
    [
      String.raw`$\dfrac1{e^2}$`,
      String.raw`$\dfrac2{e^2}$`,
      String.raw`$\dfrac3{e^2}$`,
      String.raw`$\dfrac4{e^2}$`
    ],
    'C',
    String.raw`$T\sim B(20,0.1)$，取 $\lambda=np=2$，$P(T\le1)\approx e^{-2}(1+2)=3e^{-2}$。`),
  single(10, 'k-math-011',
    String.raw`设 $X_1,X_2,\cdots,X_n$ 为来自正态总体 $N(\mu,2)$ 的简单随机样本，记 $\bar X=\frac1n\sum_{i=1}^nX_i$，$Z_\alpha$ 表示标准正态分布的上侧 $\alpha$ 分位数。假设检验问题 $H_0:\mu\le1,\ H_1:\mu>1$ 的显著性水平为 $\alpha$ 的检验的拒绝域为`,
    [
      String.raw`$\left\{(x_1,\cdots,x_n):\bar X>1+\dfrac{2}{n}Z_\alpha\right\}$`,
      String.raw`$\left\{(x_1,\cdots,x_n):\bar X>1+\dfrac{\sqrt2}{n}Z_\alpha\right\}$`,
      String.raw`$\left\{(x_1,\cdots,x_n):\bar X>1+\dfrac{2}{\sqrt n}Z_\alpha\right\}$`,
      String.raw`$\left\{(x_1,\cdots,x_n):\bar X>1+\dfrac{\sqrt2}{\sqrt n}Z_\alpha\right\}$`
    ],
    'D',
    String.raw`总体方差为 2，$\bar X\sim N(\mu,2/n)$，检验统计量 $\frac{\bar X-1}{\sqrt2/\sqrt n}\sim N(0,1)$，拒绝域为 $\bar X>1+\frac{\sqrt2}{\sqrt n}Z_\alpha$。`),
  fill(11, 'k-math-001',
    String.raw`$\displaystyle\lim_{x\to0^+}\frac{x^x-1}{\ln x\cdot\ln(1-x)}=$ ______。`,
    String.raw`-1`,
    String.raw`$x^x=e^{x\ln x}=1+x\ln x+o(x\ln x)$，$\ln(1-x)\sim-x$，故原式 $=\lim\frac{x\ln x}{-x\ln x}=-1$。`),
  fill(12, 'k-math-008',
    String.raw`已知函数 $f(x)=\begin{cases}0,&0\le x<\frac12,\\x^2,&\frac12\le x\le1\end{cases}$ 的傅里叶级数为 $\displaystyle\sum_{n=1}^{\infty}b_n\sin n\pi x$，$S(x)$ 为 $\sum_{n=1}^{\infty}b_n\sin n\pi x$ 的和函数，则 $S\left(-\frac72\right)=$ ______。`,
    String.raw`$\dfrac18$`,
    String.raw`正弦级数作奇延拓、周期 2 延拓，$S(-7/2)=S(1/2)$；$1/2$ 为间断点，取左右极限平均 $\frac{0+1/4}{2}=\frac18$。`),
  fill(13, 'k-math-010',
    String.raw`已知函数 $U(x,y,z)=xy^2z^3$，向量 $\boldsymbol n=(2,2,-1)$，则 $\left.\dfrac{\partial U}{\partial \boldsymbol n}\right|_{(1,1,1)}=$ ______。`,
    String.raw`$1$`,
    String.raw`$\nabla U(1,1,1)=(1,2,3)$，$\boldsymbol n^0=\frac13(2,2,-1)$，方向导数为 $\frac{2+4-3}{3}=1$。`),
  fill(14, 'k-math-003',
    String.raw`已知有向曲线 $L$ 是沿抛物线 $y=1-x^2$ 从点 $(1,0)$ 到点 $(-1,0)$ 的一段，则曲线积分 $\displaystyle\int_L(y+\cos x)\mathrm dx+(2x+\cos y)\mathrm dy=$ ______。`,
    String.raw`$\dfrac43-2\sin1$`,
    String.raw`代入 $y=1-x^2$、$\mathrm dy=-2x\mathrm dx$，被积式为 $1-5x^2+\cos x-2x\cos(1-x^2)$，从 1 到 $-1$ 积分得 $\frac43-2\sin1$。`),
  fill(15, 'k-math-009',
    String.raw`设矩阵 $A=\begin{pmatrix}4&2&-3\\a&3&-4\\b&5&-7\end{pmatrix}$，若方程组 $A^TX=0$ 与 $AX=0$ 不同解，则 $a-b=$ ______。`,
    String.raw`-4`,
    String.raw`两齐次方程组同解的必要条件是 $r(A)=r(A^T)=r(A)$ 且行空间一致；不同解则 $|A|=0$。计算 $|A|=b-a-4$，故 $a-b=-4$。`),
  fill(16, 'k-math-011',
    String.raw`设 $A,B$ 为两个不同随机事件，且相互独立，已知 $P(A)=2P(B)$，$P(A\cup B)=\frac58$，则在事件 $A,B$ 至少有一个发生的条件下，$A,B$ 中恰有一个发生的概率为 ______。`,
    String.raw`$\dfrac45$`,
    String.raw`设 $P(B)=p$，则 $3p-2p^2=\frac58$，得 $p=\frac14$。所求为 $\frac{P(A)+P(B)-2P(AB)}{P(A\cup B)}=\frac{\frac12+\frac14-\frac14}{\frac58}=\frac45$。`),
  solution(17, 'k-math-003', 10,
    String.raw`计算 $\displaystyle\int_0^1\frac{1}{(x+1)(x^2-2x+2)}\mathrm dx$。`,
    String.raw`裂项：$\dfrac1{(x+1)(x^2-2x+2)}=\dfrac{A}{x+1}+\dfrac{Bx+C}{x^2-2x+2}$，得 $A=\frac15,\ B=-\frac15,\ C=\frac35$。于是\n\n$$\int_0^1\left(\frac{1}{5(x+1)}-\frac{x-3}{5(x^2-2x+2)}\right)dx=\frac15\ln2-\frac1{10}\left[\ln(x^2-2x+2)\right]_0^1+\frac25\left[\arctan(x-1)\right]_0^1=\frac3{10}\ln2+\frac{\pi}{10}.$$`,
    [{"text": "裂项正确", "points": 3}, {"text": "两个基本积分计算正确", "points": 5}, {"text": "代入上下限得最终结果", "points": 2}],
    String.raw`先裂项，再拆成对数与反正切两部分；注意 $\arctan$ 项的上下限。`),
  solution(18, 'k-math-005', 12,
    String.raw`已知函数 $f(u)$ 在区间 $(0,+\infty)$ 内具有二阶导数，记 $g(x,y)=f\left(\frac{x}{y}\right)$。若 $g(x,y)$ 满足\n\n$$x^2\frac{\partial^2g}{\partial x^2}+xy\frac{\partial^2g}{\partial x\partial y}+y^2\frac{\partial^2g}{\partial y^2}=1,$$\n\n且 $g(x,x)=1$，$\left.\frac{\partial g}{\partial x}\right|_{(x,x)}=\frac2x$，求 $f(u)$。`,
    String.raw`令 $u=\frac{x}{y}$，求得\n\n$$x^2g_{xx}+xyg_{xy}+y^2g_{yy}=u^2f\'\'(u)+uf\'(u)=1.$$\n\n即 $f\'\'(u)+\frac1u f\'(u)=\frac1{u^2}$。令 $p=f\'(u)$，解一阶线性方程得 $p=\frac{\ln u+C}{u}$。由 $g(x,x)=f(1)=1$、$g_x(x,x)=\frac1x f\'(1)=\frac2x$ 得 $f\'(1)=2$，故 $C=2$。再积分并由 $f(1)=1$ 得\n\n$$f(u)=\frac12(\ln u)^2+2\ln u+1.$$`,
    [{"text": "链式法则求偏导并合并", "points": 5}, {"text": "解 $f''(u)+\\frac1u f'(u)=\\frac1{u^2}$", "points": 4}, {"text": "利用初值确定常数", "points": 3}],
    String.raw`关键是把 $x^2g_{xx}+xyg_{xy}+y^2g_{yy}$ 化成只含 $u$ 的表达式，再用一阶线性方程。`),
  solution(19, 'k-math-008', 12,
    String.raw`设函数 $f(x)$ 在区间 $(a,b)$ 内可导。证明：导函数 $f\'(x)$ 在 $(a,b)$ 内严格单调增加的充分必要条件是：对 $(a,b)$ 内任意的 $x_1,x_2,x_3$，当 $x_1<x_2<x_3$ 时，\n\n$$\frac{f(x_2)-f(x_1)}{x_2-x_1}<\frac{f(x_3)-f(x_2)}{x_3-x_2}.$$`,
    String.raw`必要性：设 $f\'$ 严格递增，在 $[x_1,x_2]$、$[x_2,x_3]$ 上用拉格朗日中值定理，存在 $\xi_1\in(x_1,x_2)$、$\xi_2\in(x_2,x_3)$，使两差商分别等于 $f\'(\xi_1)$、$f\'(\xi_2)$。由 $\xi_1<\xi_2$ 及 $f\'$ 严格递增得 $f\'(\xi_1)<f\'(\xi_2)$，即不等式成立。\n\n充分性：任取 $x_1<x_2$，再取 $x_3>x_2$。由题设不等式及拉格朗日中值定理，存在 $\xi_1\in(x_1,x_2)$、$\xi_2\in(x_2,x_3)$，使得 $f\'(\xi_1)<f\'(\xi_2)$。令 $x_3\to x_2^+$，得 $f\'(\xi_1)\le f\'(x_2)$；再令 $x_1\to x_2^-$，得 $f\'(x_2)\le f\'(\xi_2)$。由此可证 $f\'$ 严格递增。`,
    [{"text": "必要性：两次拉格朗日中值定理", "points": 6}, {"text": "充分性：构造 $x_3$ 并取极限", "points": 6}],
    String.raw`必要性与充分性都要用拉格朗日中值定理把差商换成导数值。`),
  solution(20, 'k-math-004', 12,
    String.raw`设 $\Sigma$ 是由直线 $\begin{cases}x=0,\\y=0\end{cases}$ 绕直线 $\begin{cases}x=t,\\y=t,\\z=t\end{cases}$（$t$ 为参数）旋转一周得到的曲面，$\Sigma_1$ 是 $\Sigma$ 介于平面 $x+y+z=0$ 与 $x+y+z=1$ 之间部分的外侧。计算曲面积分\n\n$$I=\iint_{\Sigma_1}x\,\mathrm dy\mathrm dz+(y+1)\,\mathrm dz\mathrm dx+(z+2)\,\mathrm dx\mathrm dy.$$`,
    String.raw`旋转轴为 $x=y=z$，母线为 $z$ 轴，旋转得圆锥面 $(x-y)^2+(y-z)^2+(z-x)^2=3r^2$。用高斯公式补上平面 $x+y+z=0$ 与 $x+y+z=1$ 所围部分，计算得\n\n$$I=\frac{2\sqrt3\pi}{9}-\frac{8\sqrt2}{3}.$$`,
    [{"text": "识别旋转曲面并写出方程", "points": 3}, {"text": "补面用高斯公式", "points": 6}, {"text": "计算两个部分并相减", "points": 3}],
    String.raw`先认旋转轴与母线，再用高斯公式补面；注意 $\Sigma_1$ 取外侧。`),
  solution(21, 'k-math-009', 12,
    String.raw`设矩阵 $A=\begin{pmatrix}0&-1&2\\-1&0&2\\-1&-1&a\end{pmatrix}$，已知 $1$ 是 $A$ 的特征多项式的重根。\n\n（1）求 $a$ 的值；\n\n（2）求所有满足 $A\alpha=\alpha+\beta$，$A^2\alpha=\alpha+2\beta$ 的非零列向量 $\alpha,\beta$。`,
    String.raw`（1）$|\lambda E-A|=(\lambda-1)[(\lambda-a)(\lambda+1)+4]$，因 $\lambda=1$ 为重根，代入得 $(1-a)\cdot2+4=0$，故 $a=3$。\n\n（2）由两式相减得 $(A-E)^2\alpha=0$。当 $a=3$ 时 $A-E=\begin{pmatrix}-1&-1&2\\-1&-1&2\\-1&-1&2\end{pmatrix}$，秩为 1，且 $(A-E)^2=0$。令 $\alpha=(k_1,k_2,k_3)^T$，$k=-k_1-k_2+2k_3$，则\n\n$$\beta=(A-E)\alpha=(k,k,k)^T.$$\n\n要求 $\alpha,\beta$ 非零，故 $(k_1,k_2,k_3)\ne(0,0,0)$ 且 $k\ne0$。`,
    [{"text": "求特征多项式并定 $a=3$", "points": 6}, {"text": "由 $(A-E)^2\\alpha=0$ 求 $\\alpha,\\beta$", "points": 6}],
    String.raw`第二问关键是先导出 $(A-E)^2\alpha=0$，再注意 $\beta$ 非零。`),
  solution(22, 'k-math-011', 12,
    String.raw`投保人的损失事件发生时，保险公司的赔付额 $Y$ 与投保人的损失额 $X$ 的关系为\n\n$$Y=\begin{cases}0,&X\le100,\\X-100,&X>100.\end{cases}$$\n\n设损失事件发生时，投保人的损失额 $X$ 的概率密度为\n\n$$f(x)=\begin{cases}\dfrac{2\times100^2}{(100+x)^3},&x>0,\\0,&x\le0.\end{cases}$$\n\n（1）求 $P\{Y>0\}$ 及 $EY$；\n\n（2）这种损失事件在一年内发生的次数记为 $N$，保险公司在一年内就这种损失事件产生的理赔次数记为 $M$。假设 $N$ 服从参数为 8 的泊松分布，在 $N=n\ (n\ge1)$ 的条件下，$M$ 服从二项分布 $B(n,p)$，其中 $p=P\{Y>0\}$，求 $M$ 的概率分布。`,
    String.raw`（1）$P\{Y>0\}=P\{X>100\}=\displaystyle\int_{100}^{\infty}\frac{2\cdot100^2}{(100+x)^3}dx=\frac14$。\n\n$$EY=\int_{100}^{\infty}(x-100)\frac{2\cdot100^2}{(100+x)^3}dx=50.$$\n\n（2）$N\sim P(8)$，$p=\frac14$。由泊松过程的分解（稀疏化），$M$ 服从参数为 $8p=2$ 的泊松分布，即\n\n$$P\{M=m\}=\frac{2^m}{m!}e^{-2},\quad m=0,1,2,\cdots.$$`,
    [{"text": "求 $P\\{Y>0\\}$", "points": 4}, {"text": "求 $EY$", "points": 4}, {"text": "说明 $M\\sim P(2)$ 并写出分布律", "points": 4}],
    String.raw`先算 $p=\\frac14$，再用泊松稀疏化：$N\\sim P(8)$ 以概率 $p$ 保留，得到 $M\\sim P(8p)$。`),
]

export const paper2025_math1 = {
  id: P,
  year: Y,
  title: '2025 年全国硕士研究生招生考试 数学（一）',
  short: '2025 数学一原卷',
  group: 'math',
  subjects: ['math'],
  durationMin: 180,
  totalScore: 150,
  questionCount: questions2025_math1.length,
  qids: questions2025_math1.map(q => q.id),
  sourceName: '公开网络版（中国教育在线 / 启航解析）',
  sourceUrl: SRC,
  answerUrl: SRC,
  note: ''
}
