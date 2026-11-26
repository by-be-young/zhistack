const P = 'paper-2023-math'
const Y = 2023
const SRC = 'https://www.ztbu.edu.cn/uploadfile/files/2023/05/24/20230524103825547.pdf'
const ANS = 'https://kaoyan.eol.cn/shiti/shuxue/202212/t20221227_2263121.shtml'

const base = (n, kid, extra = {}) => ({
  id: `q-math-2023-${String(n).padStart(2, '0')}`,
  subject: 'math',
  knowledgeId: kid,
  paperId: P,
  paperOnly: true,
  year: Y,
  number: n,
  source: 'real',
  sourceName: '2023 考研数学（一）原卷（公开网络版）',
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

export const questions2023_math1 = [
  single(1, 'k-math-001',
    String.raw`曲线 $y=x\ln\left(e+\dfrac{1}{x-1}\right)$ 的渐近线方程为`,
    [
      String.raw`$y=x+e$`,
      String.raw`$y=x+\dfrac{1}{e}$`,
      String.raw`$y=x$`,
      String.raw`$y=x-\dfrac{1}{e}$`
    ],
    'B',
    String.raw`$k=\lim_{x\to\infty}\frac{y}{x}=1$；$b=\lim_{x\to\infty}(y-x)=\lim_{x\to\infty}x\ln\left(1+\frac{1}{e(x-1)}\right)=\frac{1}{e}$，故斜渐近线为 $y=x+\frac{1}{e}$。`),

  single(2, 'k-math-006',
    String.raw`若微分方程 $y''+ay'+by=0$ 的解在 $(-\infty,+\infty)$ 上有界，则`,
    [
      String.raw`$a<0,\ b>0$`,
      String.raw`$a>0,\ b>0$`,
      String.raw`$a=0,\ b>0$`,
      String.raw`$a=0,\ b<0$`
    ],
    'C',
    String.raw`特征根实部必须非正且纯虚根时不能出现多项式因子。判别式小于零时通解为 $e^{-ax/2}(C_1\cos\cdots+C_2\sin\cdots)$，要全体有界需 $a=0$，再由 $\Delta=-4b<0$ 得 $b>0$。`),

  single(3, 'k-math-002',
    String.raw`设函数 $y=f(x)$ 由 $\begin{cases}x=2t+|t|,\\ y=|t|\sin t\end{cases}$ 确定，则`,
    [
      String.raw`$f(x)$ 连续，$f'(0)$ 不存在`,
      String.raw`$f'(0)$ 存在，$f'(x)$ 在 $x=0$ 处不连续`,
      String.raw`$f'(x)$ 连续，$f''(0)$ 不存在`,
      String.raw`$f''(0)$ 存在，$f''(x)$ 在 $x=0$ 处不连续`
    ],
    'C',
    String.raw`$t\ge0$ 时 $x=3t,y=t\sin t$，得 $y=\frac{x}{3}\sin\frac{x}{3}$；$t<0$ 时 $x=t,y=-t\sin t$，得 $y=-x\sin x$。分段求导可得 $f'(0)=0$ 且 $f'(x)$ 连续，但左右二阶导数分别为 $\frac{2}{9}$ 与 $-2$，故 $f''(0)$ 不存在。`),

  single(4, 'k-math-010',
    String.raw`已知 $a_n<b_n\ (n=1,2,\cdots)$，若级数 $\displaystyle\sum_{n=1}^{\infty}a_n$ 与 $\displaystyle\sum_{n=1}^{\infty}b_n$ 均收敛，则“$\displaystyle\sum_{n=1}^{\infty}a_n$ 绝对收敛”是“$\displaystyle\sum_{n=1}^{\infty}b_n$ 绝对收敛”的`,
    [
      String.raw`充分必要条件`,
      String.raw`充分不必要条件`,
      String.raw`必要不充分条件`,
      String.raw`既不充分也不必要条件`
    ],
    'A',
    String.raw`由 $a_n<b_n$ 及两交织级数收敛，知 $\sum(b_n-a_n)$ 为正项收敛级数。若 $\sum|a_n|$ 收敛，由 $|b_n|\le|b_n-a_n|+|a_n|$ 得 $\sum|b_n|$ 收敛；反之同理，故互为充要条件。`),

  single(5, 'k-math-009',
    String.raw`已知 $n$ 阶矩阵 $A,B,C$ 满足 $ABC=0$，$E$ 为 $n$ 阶单位矩阵，记矩阵 $\begin{pmatrix}0&A\\BC&E\end{pmatrix}$、$\begin{pmatrix}AB&C\\0&E\end{pmatrix}$、$\begin{pmatrix}E&AB\\AB&0\end{pmatrix}$ 的秩分别为 $\gamma_1,\gamma_2,\gamma_3$，则`,
    [
      String.raw`$\gamma_1\le\gamma_2\le\gamma_3$`,
      String.raw`$\gamma_1\le\gamma_3\le\gamma_2$`,
      String.raw`$\gamma_3\le\gamma_1\le\gamma_2$`,
      String.raw`$\gamma_2\le\gamma_1\le\gamma_3$`
    ],
    'B',
    String.raw`对第一个矩阵作分块初等变换，利用 $ABC=0$ 得 $\gamma_1=n$；第二个矩阵得 $\gamma_2=n+r(AB)$；第三个矩阵得 $\gamma_3=n+r(ABAB)$。由 $r(ABAB)\le r(AB)$，故 $\gamma_1\le\gamma_3\le\gamma_2$。`),

  single(6, 'k-math-009',
    String.raw`下列矩阵中不能相似于对角矩阵的是`,
    [
      String.raw`$\begin{pmatrix}1&1&a\\0&2&2\\0&0&3\end{pmatrix}$`,
      String.raw`$\begin{pmatrix}1&1&a\\1&2&0\\a&0&3\end{pmatrix}$`,
      String.raw`$\begin{pmatrix}1&1&a\\0&2&0\\0&0&2\end{pmatrix}$`,
      String.raw`$\begin{pmatrix}1&1&a\\0&2&2\\0&0&2\end{pmatrix}$`
    ],
    'D',
    String.raw`A 有三个互异特征值，必可对角化；B 为实对称矩阵，必可对角化；C 的二重特征值 2 满足 $3-r(C-2E)=2$，可对角化；D 的二重特征值 2 只有一维特征空间，不可对角化。`),

  single(7, 'k-math-009',
    String.raw`已知向量 $\alpha_1=\begin{pmatrix}1\\2\\3\end{pmatrix}$，$\alpha_2=\begin{pmatrix}2\\1\\1\end{pmatrix}$，$\beta_1=\begin{pmatrix}2\\5\\9\end{pmatrix}$，$\beta_2=\begin{pmatrix}1\\0\\1\end{pmatrix}$，若 $\gamma$ 既可由 $\alpha_1,\alpha_2$ 线性表示，也可由 $\beta_1,\beta_2$ 线性表示，则 $\gamma=$`,
    [
      String.raw`$k\begin{pmatrix}3\\3\\4\end{pmatrix},\ k\in\mathbb R$`,
      String.raw`$k\begin{pmatrix}3\\5\\10\end{pmatrix},\ k\in\mathbb R$`,
      String.raw`$k\begin{pmatrix}-1\\1\\2\end{pmatrix},\ k\in\mathbb R$`,
      String.raw`$k\begin{pmatrix}1\\5\\8\end{pmatrix},\ k\in\mathbb R$`
    ],
    'D',
    String.raw`设 $\gamma=x_1\alpha_1+x_2\alpha_2=y_1\beta_1+y_2\beta_2$，解齐次方程组得 $x_1=-3c,x_2=c,y_1=-c,y_2=c$，故 $\gamma=c(-\beta_1+\beta_2)=c(-1,-5,-8)^T=k(1,5,8)^T$。`),

  single(8, 'k-math-011',
    String.raw`设随机变量 $X$ 服从参数为 $1$ 的泊松分布，则 $E\left(\left|X-E(X)\right|\right)=$`,
    [
      String.raw`$\dfrac{1}{e}$`,
      String.raw`$\dfrac{1}{2}$`,
      String.raw`$\dfrac{2}{e}$`,
      String.raw`$1$`
    ],
    'C',
    String.raw`$E(X)=1$，$|X-1|$ 在 $X=0$ 时为 1，在 $X=k\ge1$ 时为 $k-1$。计算得 $E|X-1|=P(X=0)+E(X-1)+(1)P(X=0)=\frac{1}{e}+0+\frac{1}{e}=\frac{2}{e}$。`),

  single(9, 'k-math-011',
    String.raw`设 $X_1,\cdots,X_n$ 为来自总体 $N(\mu_1,\sigma^2)$ 的简单随机样本，$Y_1,\cdots,Y_m$ 为来自总体 $N(\mu_2,2\sigma^2)$ 的简单随机样本，且两样本相互独立。记 $\bar X=\frac1n\sum X_i$，$\bar Y=\frac1m\sum Y_i$，$S_1^2=\frac{1}{n-1}\sum(X_i-\bar X)^2$，$S_2^2=\frac{1}{m-1}\sum(Y_i-\bar Y)^2$，则`,
    [
      String.raw`$\dfrac{S_1^2}{S_2^2}\sim F(n,m)$`,
      String.raw`$\dfrac{S_1^2}{S_2^2}\sim F(n-1,m-1)$`,
      String.raw`$\dfrac{2S_1^2}{S_2^2}\sim F(n,m)$`,
      String.raw`$\dfrac{2S_1^2}{S_2^2}\sim F(n-1,m-1)$`
    ],
    'D',
    String.raw`$\frac{(n-1)S_1^2}{\sigma^2}\sim\chi^2(n-1)$，$\frac{(m-1)S_2^2}{2\sigma^2}\sim\chi^2(m-1)$。两卡方相除并约去自由度，得 $\frac{2S_1^2}{S_2^2}\sim F(n-1,m-1)$。`),

  single(10, 'k-math-011',
    String.raw`设 $X_1,X_2$ 为来自总体 $N(\mu,\sigma^2)$ 的简单随机样本，其中 $\sigma\ (\sigma>0)$ 是未知参数。若 $\hat\sigma=a|X_1-X_2|$ 为 $\sigma$ 的无偏估计，则 $a=$`,
    [
      String.raw`$\dfrac{\sqrt{\pi}}{2}$`,
      String.raw`$\dfrac{\sqrt{2\pi}}{2}$`,
      String.raw`$\sqrt{\pi}$`,
      String.raw`$\sqrt{2\pi}$`
    ],
    'A',
    String.raw`$X_1-X_2\sim N(0,2\sigma^2)$，故 $E|X_1-X_2|=\sqrt{\frac{2}{\pi}}\cdot\sqrt{2}\sigma=\frac{2\sigma}{\sqrt\pi}$。由 $aE|X_1-X_2|=\sigma$ 得 $a=\frac{\sqrt\pi}{2}$。`),

  fill(11, 'k-math-001',
    String.raw`当 $x\to0$ 时，函数 $f(x)=ax+bx^2+\ln(1+x)$ 与 $g(x)=e^{x^2}-\cos x$ 是等价无穷小，则 $ab=$ ______。`,
    '-2',
    String.raw`展开到二次项：$f(x)=(a+1)x+(b-\frac12)x^2+o(x^2)$，$g(x)=\frac32x^2+o(x^2)$。等价要求一次项系数为零、二次项系数相等，故 $a=-1,b=2$，$ab=-2$。`),

  fill(12, 'k-math-008',
    String.raw`曲面 $z=x+2y+\ln(1+x^2+y^2)$ 在点 $(0,0,0)$ 处的切平面方程为 ______。`,
    'x+2y-z=0',
    String.raw`令 $F=x+2y+\ln(1+x^2+y^2)-z$，在原点法向量为 $(F_x,F_y,F_z)=(1,2,-1)$，切平面为 $x+2y-z=0$。`),

  fill(13, 'k-math-010',
    String.raw`设 $f(x)$ 为周期为 $2$ 的周期函数，且 $f(x)=1-x,\ x\in[0,1]$。若 $f(x)=\dfrac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos n\pi x$，则 $\sum_{n=1}^{\infty}a_{2n}=$ ______。`,
    '0',
    String.raw`由余弦级数知 $f$ 为偶函数，计算得 $a_n=\frac{2}{n^2\pi^2}(1-\cos n\pi)$。当 $n$ 为偶数时 $\cos 2k\pi=1$，故 $a_{2n}=0$，级数和为 0。`),

  fill(14, 'k-math-003',
    String.raw`设连续函数 $f(x)$ 满足 $f(x+2)-f(x)=x$，$\displaystyle\int_0^2f(x)\,\mathrm dx=0$，则 $\displaystyle\int_1^3f(x)\,\mathrm dx=$ ______。`,
    String.raw`$\dfrac12$`,
    String.raw`令 $x=t+2$，则 $\int_2^3f(x)dx=\int_0^1f(t+2)dt=\int_0^1[f(t)+t]dt$。于是原式 $=\int_0^1f+\int_1^2f+\int_0^1t\,dt=\int_0^2f+\frac12=\frac12$。`),

  fill(15, 'k-math-009',
    String.raw`已知向量 $\alpha_1=\begin{pmatrix}1\\0\\1\\1\end{pmatrix}$，$\alpha_2=\begin{pmatrix}-1\\-1\\0\\1\end{pmatrix}$，$\alpha_3=\begin{pmatrix}0\\1\\-1\\1\end{pmatrix}$，$\beta=\begin{pmatrix}1\\1\\1\\-1\end{pmatrix}$，$\gamma=k_1\alpha_1+k_2\alpha_2+k_3\alpha_3$。若 $\gamma^T\alpha_i=\beta^T\alpha_i\ (i=1,2,3)$，则 $k_1^2+k_2^2+k_3^2=$ ______。`,
    String.raw`$\dfrac{11}{9}$`,
    String.raw`分别用 $\alpha_i^T$ 左乘 $\gamma$ 的表达式，利用 $\alpha_i^T\alpha_j=0\ (i\ne j)$、$\alpha_i^T\alpha_i=3$，得 $k_1=\frac13,k_2=-1,k_3=-\frac13$，平方和为 $\frac{11}{9}$。`),

  fill(16, 'k-math-011',
    String.raw`设随机变量 $X$ 与 $Y$ 相互独立，且 $X\sim B\left(1,\frac13\right)$，$Y\sim B\left(2,\frac12\right)$，则 $P\{X=Y\}=$ ______。`,
    String.raw`$\dfrac13$`,
    String.raw`$P(X=Y)=P(X=0)P(Y=0)+P(X=1)P(Y=1)=\frac23\cdot\frac14+\frac13\cdot\frac12=\frac13$。`),

  solution(17, 'k-math-003', 10,
    String.raw`设曲线 $y=y(x)\ (x>0)$ 经过点 $(1,2)$，该曲线上任一点 $P(x,y)$ 到 $y$ 轴的距离等于该点处的切线在 $y$ 轴上的截距。

（Ⅰ）求 $y(x)$；
（Ⅱ）求函数 $f(x)=\displaystyle\int_1^xy(t)\,\mathrm dt$ 在 $(0,+\infty)$ 上的最大值。`,
    String.raw`（Ⅰ）点 $(x,y)$ 处切线为 $Y-y=y'(X-x)$，在 $y$ 轴截距为 $y-xy'$。由题意 $x=y-xy'$，即 $y'-\frac1x y=-1$。解得 $y=x(C-\ln x)$。由 $y(1)=2$ 得 $C=2$，故 $y=x(2-\ln x)$。

（Ⅱ）$f'(x)=x(2-\ln x)$，驻点 $x=e^2$。$0<x<e^2$ 时 $f'>0$，$x>e^2$ 时 $f'<0$，故最大值为
$$f(e^2)=\int_1^{e^2}x(2-\ln x)\,dx=\frac14e^4-\frac54.$$`,
    [
      { text: '建立切线截距方程并解一阶线性微分方程', points: 5 },
      { text: '利用初值确定常数，得到 $y=x(2-\\ln x)$', points: 3 },
      { text: '求驻点并判断最大值，算出 $\\frac14e^4-\\frac54$', points: 2 }
    ],
    '第（Ⅰ）问关键是“截距 = 点到 y 轴距离”，第（Ⅱ）问直接用变上限积分求导。'),

  solution(18, 'k-math-005', 12,
    String.raw`求函数 $f(x,y)=(y-x^2)(y-x^3)$ 的极值。`,
    String.raw`解方程组
$$\begin{cases}f_x=-x(2y+3xy-5x^3)=0,\\ f_y=2y-x^2-x^3=0,\end{cases}$$
得驻点 $(0,0),(1,1),\left(\frac23,\frac{10}{27}\right)$。

计算 $f_{xx}=-(2y+3xy-5x^3)-x(3y-15x^2)$，$f_{xy}=-x(2+3x)$，$f_{yy}=2$。

在 $(0,0)$，$AC-B^2=0$，改用路径 $y=x^2+kx^3$：$f=kx^5+o(x^5)$，在 $x$ 两侧变号，故不是极值点。
在 $(1,1)$，$A=12,B=-5,C=2$，$AC-B^2<0$，不是极值点。
在 $\left(\frac23,\frac{10}{27}\right)$，$A=\frac{100}{27},B=-\frac83,C=2$，$AC-B^2>0$ 且 $A>0$，为极小值点，极小值为
$$f\left(\frac23,\frac{10}{27}\right)=-\frac{4}{729}.$$`,
    [
      { text: '正确求出三个驻点', points: 5 },
      { text: '计算二阶偏导并判断 $(0,0)$、$(1,1)$', points: 4 },
      { text: '判定极小值点并算出 $-\\frac{4}{729}$', points: 3 }
    ],
    '$(0,0)$ 是鞍点而非极值点，必须用路径或定义说明；只写 $AC-B^2=0$ 不能下结论。'),

  solution(19, 'k-math-008', 12,
    String.raw`已知空间有界闭区域 $\Omega$ 由柱面 $x^2+y^2=1$、平面 $z=0$ 和 $x+z=1$ 围成，$\Sigma$ 为 $\Omega$ 边界的外侧，计算曲面积分
$$I=\oiint_\Sigma 2xz\,\mathrm dy\,\mathrm dz+z\cos y\,\mathrm dz\,\mathrm dx+yz\sin x\,\mathrm dx\,\mathrm dy.$$`,
    String.raw`由高斯公式，
$$I=\iiint_\Omega(2z-z\sin y+y\sin x)\,\mathrm dV.$$
$\Omega$ 关于 $xOz$ 面对称，$-z\sin y+y\sin x$ 关于 $y$ 为奇函数，积分为 0，故
$$I=2\iiint_\Omega z\,\mathrm dV=2\iint_{x^2+y^2\le1}\int_0^{1-x}z\,\mathrm dz\,\mathrm dx\mathrm dy
=\iint_{x^2+y^2\le1}(1-2x+x^2)\,\mathrm dx\mathrm dy.$$
由对称性 $\iint x=0$，且 $\iint(x^2+y^2)=\frac{\pi}{2}$，所以
$$I=\pi+\frac12\cdot\frac{\pi}{2}=\frac{5\pi}{4}.$$`,
    [
      { text: '正确使用高斯公式并写出三重积分', points: 4 },
      { text: '利用对称性消去奇函数项', points: 3 },
      { text: '化三重积分并计算，得 $\\frac{5\\pi}{4}$', points: 5 }
    ],
    '先高斯公式，再用对称性；直接硬算柱坐标也可，但容易漏掉奇函数项。'),

  solution(20, 'k-math-004', 12,
    String.raw`设函数 $f(x)$ 在 $[-a,a]$ 上具有二阶连续导数，证明：

（Ⅰ）若 $f(0)=0$，则存在 $\xi\in(-a,a)$，使得
$$f''(\xi)=\frac{1}{a^2}[f(a)+f(-a)].$$
（Ⅱ）若 $f(x)$ 在 $(-a,a)$ 内取得极值，则存在 $\eta\in(-a,a)$，使得
$$\left|f''(\eta)\right|\ge\frac{1}{2a^2}\left|f(a)-f(-a)\right|.$$`,
    String.raw`（Ⅰ）把 $f(a)$、$f(-a)$ 分别在 0 处泰勒展开：
$$f(a)=f'(0)a+\frac{f''(\xi_1)}2a^2,\qquad f(-a)=-f'(0)a+\frac{f''(\xi_2)}2a^2.$$
两式相加得 $f(a)+f(-a)=\frac{a^2}{2}[f''(\xi_1)+f''(\xi_2)]$。因 $f''$ 连续，由介值定理，存在 $\xi$ 使 $f''(\xi)=\frac{f''(\xi_1)+f''(\xi_2)}2$，代入即得结论。

（Ⅱ）设极值点为 $x_0\in(-a,a)$，则 $f'(x_0)=0$。在 $x_0$ 处展开：
$$f(a)=f(x_0)+\frac{f''(\gamma_2)}2(a-x_0)^2,\quad f(-a)=f(x_0)+\frac{f''(\gamma_1)}2(a+x_0)^2.$$
相减并取绝对值，放缩得
$$|f(a)-f(-a)|\le M\left[(a-x_0)^2+(a+x_0)^2\right]=2M(a^2+x_0^2)\le 4Ma^2,$$
其中 $M=\max\{|f''(\gamma_1)|,|f''(\gamma_2)|\}$。于是 $M\ge\frac{1}{2a^2}|f(a)-f(-a)|$，取对应点 $\eta$ 即可。`,
    [
      { text: '第（Ⅰ）问在 0 点展开并相加', points: 4 },
      { text: '用介值定理找到 $\\xi$，完成证明', points: 2 },
      { text: '第（Ⅱ）问在极值点展开，利用 $f\'(x_0)=0$', points: 4 },
      { text: '正确放缩并取到 $\\eta$，完成证明', points: 2 }
    ],
    '证明题按“展开—相加/相减—介值或放缩”给分；直接引用结论不给过程分。'),

  solution(21, 'k-math-009', 12,
    String.raw`已知二次型
$$f(x_1,x_2,x_3)=x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_1x_3,$$
$$g(y_1,y_2,y_3)=y_1^2+y_2^2+y_3^2+2y_2y_3.$$
（Ⅰ）求可逆变换 $x=Py$，将 $f$ 化为 $g$；
（Ⅱ）是否存在正交变换 $x=Qy$，将 $f$ 化为 $g$。`,
    String.raw`（Ⅰ）配方：
$$f=(x_1+x_2-x_3)^2+(x_2+x_3)^2,$$
令 $z_1=x_1+x_2-x_3,\ z_2=x_2+x_3,\ z_3=x_3$，则 $f=z_1^2+z_2^2$。
又 $g=y_1^2+(y_2+y_3)^2$，令 $z_1=y_1,\ z_2=y_2+y_3,\ z_3=y_3$。联立得
$$\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
=\begin{pmatrix}1&1&-1\\0&1&1\\0&0&1\end{pmatrix}^{-1}
\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix}
\begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}
=\begin{pmatrix}1&-1&1\\0&1&0\\0&0&1\end{pmatrix}y.$$
故 $P=\begin{pmatrix}1&-1&1\\0&1&0\\0&0&1\end{pmatrix}$。

（Ⅱ）$f$ 的矩阵 $A=\begin{pmatrix}1&1&-1\\1&2&0\\-1&0&2\end{pmatrix}$，$g$ 的矩阵 $B=\begin{pmatrix}1&0&0\\0&1&1\\0&1&1\end{pmatrix}$。若存在正交变换，则 $A$ 与 $B$ 相似，迹必须相等；但 $\operatorname{tr}A=5$，$\operatorname{tr}B=3$，矛盾。故不存在。`,
    [
      { text: '正确配方并写出两组变量替换', points: 5 },
      { text: '求出可逆矩阵 $P$', points: 3 },
      { text: '第（Ⅱ）问用迹或特征值判定不相似', points: 4 }
    ],
    '第（Ⅰ）问配方不唯一，验算 $P^TAP$ 的规范形即可；第（Ⅱ）问只要抓住“正交相似必合同且迹相等”。'),

  solution(22, 'k-math-011', 12,
    String.raw`设二维随机变量 $(X,Y)$ 的概率密度为
$$f(x,y)=\begin{cases}\dfrac{2}{\pi}(x^2+y^2),&x^2+y^2\le1,\\0,&\text{其他}.\end{cases}$$
（Ⅰ）求 $X$ 与 $Y$ 的协方差；
（Ⅱ）判断 $X$ 与 $Y$ 是否相互独立；
（Ⅲ）求 $Z=X^2+Y^2$ 的概率密度函数。`,
    String.raw`（Ⅰ）由对称性 $E(X)=E(Y)=0$，且 $E(XY)=\iint_{x^2+y^2\le1}\frac{2}{\pi}xy(x^2+y^2)\,dxdy=0$，故
$$\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=0.$$

（Ⅱ）边缘密度为
$$f_X(x)=\frac{4}{\pi}\left[x^2\sqrt{1-x^2}+\frac13(1-x^2)^{3/2}\right],\ |x|\le1,$$
$f_Y(y)$ 同理。显然 $f_X(x)f_Y(y)\ne f(x,y)$，故 $X,Y$ 不独立。

（Ⅲ）当 $0\le z<1$ 时，
$$F_Z(z)=P(X^2+Y^2\le z)=\iint_{x^2+y^2\le z}\frac{2}{\pi}(x^2+y^2)\,dxdy
=\frac{2}{\pi}\int_0^{2\pi}d\theta\int_0^{\sqrt z}r^3dr=z^2.$$
$z<0$ 时 $F_Z=0$，$z\ge1$ 时 $F_Z=1$。求导得
$$f_Z(z)=\begin{cases}2z,&0<z<1,\\0,&\text{其他}.\end{cases}$$`,
    [
      { text: '第（Ⅰ）问利用对称性算协方差为 0', points: 4 },
      { text: '第（Ⅱ）问写出边缘密度并判定不独立', points: 3 },
      { text: '第（Ⅲ）问求分布函数并分段', points: 3 },
      { text: '求导得密度 $2z$（$0<z<1$）', points: 2 }
    ],
    '协方差为 0 不代表独立，第（Ⅱ）问必须回到联合密度与边缘密度比较。')
]

export const paper2023_math1 = {
  id: P,
  year: Y,
  title: '2023 年全国硕士研究生招生考试 数学（一）',
  short: '2023 数学一原卷',
  group: 'math',
  subjects: ['math'],
  durationMin: 180,
  totalScore: 150,
  questionCount: questions2023_math1.length,
  qids: questions2023_math1.map(q => q.id),
  sourceName: '公开网络版（郑州商学院试卷 PDF / 中国教育在线答案）',
  sourceUrl: SRC,
  answerUrl: ANS,
  note: '题干按原卷录入，公式使用 KaTeX；解答题参考答案按步骤整理，自评时按评分要点选择得分比例。'
}
