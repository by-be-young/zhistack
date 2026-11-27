export const questions2022_math1 = [
  {
    "id": "q-math1-2022-01",
    "subject": "math",
    "knowledgeId": "k-math-001",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 1,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设函数 $f(x)$ 满足 $\\lim\\limits_{x\\to 1}\\dfrac{f(x)}{\\ln x}=1$，则（　　）",
    "options": [
      {
        "key": "A",
        "text": "$f(1)=0$"
      },
      {
        "key": "B",
        "text": "$\\lim\\limits_{x\\to1}f(x)=0$"
      },
      {
        "key": "C",
        "text": "$f'(1)=1$"
      },
      {
        "key": "D",
        "text": "$\\lim\\limits_{x\\to1}f'(x)=1$"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "由极限存在且分母趋于 $0$，分子必趋于 $0$，故 $\\lim_{x\\to1}f(x)=0$。$f(1)$ 未必为 $0$，$f'(1)$ 也未必存在，选 B。"
  },
  {
    "id": "q-math1-2022-02",
    "subject": "math",
    "knowledgeId": "k-math-010",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 2,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设函数 $z=xyf\\left(\\dfrac{y}{x}\\right)$，其中 $f(u)$ 可导，若 $x\\dfrac{\\partial z}{\\partial x}+y\\dfrac{\\partial z}{\\partial y}=xy(\\ln y-\\ln x)$，则（　　）",
    "options": [
      {
        "key": "A",
        "text": "$f(1)=\\dfrac12,\\ f'(1)=0$"
      },
      {
        "key": "B",
        "text": "$f(1)=0,\\ f'(1)=\\dfrac12$"
      },
      {
        "key": "C",
        "text": "$f(1)=\\dfrac12,\\ f'(1)=1$"
      },
      {
        "key": "D",
        "text": "$f(1)=0,\\ f'(1)=1$"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "令 $u=y/x$，直接求偏导得 $x z_x+y z_y=2xyf(u)$。由题意 $2f(u)=\\ln u$，故 $f(1)=0,\\ f'(1)=1/2$，选 B。"
  },
  {
    "id": "q-math1-2022-03",
    "subject": "math",
    "knowledgeId": "k-math-001",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 3,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设有数列 $\\{x_n\\}$，$-\\dfrac{\\pi}{2}\\le x_n\\le\\dfrac{\\pi}{2}$，则（　　）",
    "options": [
      {
        "key": "A",
        "text": "若 $\\lim\\limits_{n\\to\\infty}\\cos(\\sin x_n)$ 存在，则 $\\lim\\limits_{n\\to\\infty}x_n$ 存在"
      },
      {
        "key": "B",
        "text": "若 $\\lim\\limits_{n\\to\\infty}\\sin(\\cos x_n)$ 存在，则 $\\lim\\limits_{n\\to\\infty}x_n$ 存在"
      },
      {
        "key": "C",
        "text": "若 $\\lim\\limits_{n\\to\\infty}\\cos(\\sin x_n)$ 存在，则 $\\lim\\limits_{n\\to\\infty}\\sin x_n$ 存在，但 $\\lim\\limits_{n\\to\\infty}x_n$ 不一定存在"
      },
      {
        "key": "D",
        "text": "若 $\\lim\\limits_{n\\to\\infty}\\sin(\\cos x_n)$ 存在，则 $\\lim\\limits_{n\\to\\infty}\\cos x_n$ 存在，但 $\\lim\\limits_{n\\to\\infty}x_n$ 不一定存在"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "$\\sin t$ 在 $[0,1]$ 上单调，故 $\\sin(\\cos x_n)$ 收敛可推出 $\\cos x_n$ 收敛；但 $\\cos x_n$ 收敛不能推出 $x_n$ 收敛（可取正负交替的两列），选 D。"
  },
  {
    "id": "q-math1-2022-04",
    "subject": "math",
    "knowledgeId": "k-math-008",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 4,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "已知 $I_1=\\displaystyle\\int_0^1\\frac{x}{2(1+\\cos x)}\\,dx$，$I_2=\\displaystyle\\int_0^1\\frac{\\ln(1+x)}{1+\\cos x}\\,dx$，$I_3=\\displaystyle\\int_0^1\\frac{2x}{1+\\sin x}\\,dx$，则（　　）",
    "options": [
      {
        "key": "A",
        "text": "$I_1<I_2<I_3$"
      },
      {
        "key": "B",
        "text": "$I_2<I_1<I_3$"
      },
      {
        "key": "C",
        "text": "$I_1<I_3<I_2$"
      },
      {
        "key": "D",
        "text": "$I_3<I_2<I_1$"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "在 $(0,1)$ 上比较被积函数：$x/2<\\ln(1+x)$，且 $1+\\cos x>1+\\sin x$ 不恒成立，但综合比较可得 $I_1<I_2<I_3$，选 A。"
  },
  {
    "id": "q-math1-2022-05",
    "subject": "math",
    "knowledgeId": "k-math-019",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 5,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "下列是 $A_{3\\times3}$ 可对角化的充分而非必要条件是（　　）",
    "options": [
      {
        "key": "A",
        "text": "$A$ 有 3 个互不相等的特征值"
      },
      {
        "key": "B",
        "text": "$A$ 有 3 个线性无关的特征向量"
      },
      {
        "key": "C",
        "text": "$A$ 有 3 个两两线性无关的特征向量"
      },
      {
        "key": "D",
        "text": "$A$ 的属于不同特征值的特征向量正交"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "3 个互异特征值必可对角化，但可对角化也可有重特征值，因此是充分非必要条件；B 是充要条件，选 A。"
  },
  {
    "id": "q-math1-2022-06",
    "subject": "math",
    "knowledgeId": "k-math-018",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 6,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设 $A,B$ 为 $n$ 阶矩阵，$E$ 为单位矩阵，若方程组 $Ax=0$ 与 $Bx=0$ 同解，则（　　）",
    "options": [
      {
        "key": "A",
        "text": "方程组 $\\begin{pmatrix}A&O\\\\E&B\\end{pmatrix}y=0$ 只有零解"
      },
      {
        "key": "B",
        "text": "方程组 $\\begin{pmatrix}E&A\\\\O&AB\\end{pmatrix}y=0$ 只有零解"
      },
      {
        "key": "C",
        "text": "方程组 $\\begin{pmatrix}A&B\\\\O&B\\end{pmatrix}y=0$ 与 $\\begin{pmatrix}B&A\\\\O&A\\end{pmatrix}y=0$ 同解"
      },
      {
        "key": "D",
        "text": "方程组 $\\begin{pmatrix}AB&B\\\\O&A\\end{pmatrix}y=0$ 与 $\\begin{pmatrix}BA&A\\\\O&B\\end{pmatrix}y=0$ 同解"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "$Ax=0$ 与 $Bx=0$ 同解说明 $A,B$ 行等价。对 C 中两个分块矩阵作初等行变换可互相化归，故同解；选 C。"
  },
  {
    "id": "q-math1-2022-07",
    "subject": "math",
    "knowledgeId": "k-math-017",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 7,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设 $\\alpha_1=\\begin{pmatrix}\\lambda\\\\1\\\\1\\end{pmatrix},\\alpha_2=\\begin{pmatrix}1\\\\\\lambda\\\\1\\end{pmatrix},\\alpha_3=\\begin{pmatrix}1\\\\1\\\\\\lambda\\end{pmatrix},\\alpha_4=\\begin{pmatrix}1\\\\\\lambda\\\\\\lambda^2\\end{pmatrix}$，若向量组 $\\alpha_1,\\alpha_2,\\alpha_3$ 与 $\\alpha_1,\\alpha_2,\\alpha_4$ 等价，则 $\\lambda$ 的取值范围是（　　）",
    "options": [
      {
        "key": "A",
        "text": "$\\{0,1\\}$"
      },
      {
        "key": "B",
        "text": "$\\{\\lambda\\mid\\lambda\\in\\mathbb R,\\lambda\\ne-2\\}$"
      },
      {
        "key": "C",
        "text": "$\\{\\lambda\\mid\\lambda\\in\\mathbb R,\\lambda\\ne-1,\\lambda\\ne-2\\}$"
      },
      {
        "key": "D",
        "text": "$\\{\\lambda\\mid\\lambda\\in\\mathbb R,\\lambda\\ne-1\\}$"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "两组向量等价需秩相同。计算含 $\\alpha_1,\\alpha_2,\\alpha_3$ 的矩阵行列式，在 $\\lambda=-1,-2$ 时秩发生退化，故须排除，选 C。"
  },
  {
    "id": "q-math1-2022-08",
    "subject": "math",
    "knowledgeId": "k-math-020",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 8,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设随机变量 $X\\sim U(0,3)$，$Y\\sim P(2)$，$\\operatorname{Cov}(X,Y)=-1$，求 $D(2X-Y+1)=$（　　）",
    "options": [
      {
        "key": "A",
        "text": "$10$"
      },
      {
        "key": "B",
        "text": "$9$"
      },
      {
        "key": "C",
        "text": "$1$"
      },
      {
        "key": "D",
        "text": "$0$"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "$D(2X-Y+1)=4DX+DY-4\\operatorname{Cov}(X,Y)=4\\cdot\\frac34+2+4=9$，选 B。"
  },
  {
    "id": "q-math1-2022-09",
    "subject": "math",
    "knowledgeId": "k-math-020",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 9,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设随机变量序列 $X_1,X_2,\\cdots,X_n,\\cdots$ 独立同分布，且 $E(X_i^k)=\\mu_k$，用切比雪夫不等式估计 $P\\left\\{\\left|\\dfrac1n\\sum_{i=1}^n x_i-\\mu_1\\right|\\ge\\varepsilon\\right\\}\\le$（　　）",
    "options": [
      {
        "key": "A",
        "text": "$\\dfrac{\\mu_4-\\mu_2^2}{n\\varepsilon^2}$"
      },
      {
        "key": "B",
        "text": "$\\dfrac{\\mu_4-\\mu_2^2}{\\sqrt n\\varepsilon^2}$"
      },
      {
        "key": "C",
        "text": "$\\dfrac{\\mu_2-\\mu_1^2}{n\\varepsilon^2}$"
      },
      {
        "key": "D",
        "text": "$\\dfrac{\\mu_2-\\mu_1^2}{\\sqrt n\\varepsilon^2}$"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "$\\operatorname{Var}(\\bar X)=\\frac1n(\\mu_2-\\mu_1^2)$，由切比雪夫不等式得上界为 $\\frac{\\mu_2-\\mu_1^2}{n\\varepsilon^2}$，选 C。"
  },
  {
    "id": "q-math1-2022-10",
    "subject": "math",
    "knowledgeId": "k-math-020",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 10,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "single",
    "difficulty": 3,
    "score": 5,
    "stem": "设 $X\\sim N(0,1)$，在 $X=x$ 的条件下，$Y\\sim N(x,1)$，则 $X$ 与 $Y$ 的相关系数为（　　）",
    "options": [
      {
        "key": "A",
        "text": "$1$"
      },
      {
        "key": "B",
        "text": "$\\dfrac12$"
      },
      {
        "key": "C",
        "text": "$\\dfrac{\\sqrt3}{3}$"
      },
      {
        "key": "D",
        "text": "$\\dfrac{\\sqrt2}{2}$"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "$Y=X+\\varepsilon$，$\\operatorname{Cov}(X,Y)=DX=1$，$DY=2$，故相关系数为 $1/\\sqrt2=\\sqrt2/2$，选 D。"
  },
  {
    "id": "q-math1-2022-11",
    "subject": "math",
    "knowledgeId": "k-math-010",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 11,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "subtype": "fill",
    "difficulty": 3,
    "score": 5,
    "stem": "$f(x,y)=x^2+2y^2$ 在 $(0,1)$ 处最大的方向导数为________．",
    "answer": [
      "$4$"
    ],
    "explain": "梯度为 $(0,4)$，其模为 $4$，最大方向导数等于梯度模。",
    "answerText": "$4$",
    "referenceAnswer": "答案：$4$",
    "rubric": [
      {
        "text": "结果正确；等价形式同样给分",
        "points": 5
      }
    ]
  },
  {
    "id": "q-math1-2022-12",
    "subject": "math",
    "knowledgeId": "k-math-007",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 12,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "subtype": "fill",
    "difficulty": 3,
    "score": 5,
    "stem": "$\\displaystyle\\int_1^{e^2}\\frac{\\ln x}{\\sqrt{x}}\\,dx=$________．",
    "answer": [
      "$4$"
    ],
    "explain": "令 $t=\\sqrt x$，化为 $4\\int_1^e\\ln t\\,dt=4$。",
    "answerText": "$4$",
    "referenceAnswer": "答案：$4$",
    "rubric": [
      {
        "text": "结果正确；等价形式同样给分",
        "points": 5
      }
    ]
  },
  {
    "id": "q-math1-2022-13",
    "subject": "math",
    "knowledgeId": "k-math-011",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 13,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "subtype": "fill",
    "difficulty": 3,
    "score": 5,
    "stem": "设 $x\\ge0,y\\ge0$，满足 $x^2+y^2\\le ke^{x+y}$，则 $k$ 的最小值为________．",
    "answer": [
      "$\\dfrac{4}{e^2}$"
    ],
    "explain": "等价于 $(x^2+y^2)e^{-(x+y)}\\le k$，求其最大值，在边界 $(0,2)$ 或 $(2,0)$ 处取得 $4e^{-2}$。",
    "answerText": "$\\dfrac{4}{e^2}$",
    "referenceAnswer": "答案：$\\dfrac{4}{e^2}$",
    "rubric": [
      {
        "text": "结果正确；等价形式同样给分",
        "points": 5
      }
    ]
  },
  {
    "id": "q-math1-2022-14",
    "subject": "math",
    "knowledgeId": "k-math-014",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 14,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "subtype": "fill",
    "difficulty": 3,
    "score": 5,
    "stem": "级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{n!}{n^n}e^{-nx}$ 的收敛域为 $(a,+\\infty)$，则 $a=$________．",
    "answer": [
      "$-1$"
    ],
    "explain": "由比值判别法，$\\left|\\frac{u_{n+1}}{u_n}\\right|\\to e^{-x-1}<1$，得 $x>-1$，故 $a=-1$。",
    "answerText": "$-1$",
    "referenceAnswer": "答案：$-1$",
    "rubric": [
      {
        "text": "结果正确；等价形式同样给分",
        "points": 5
      }
    ]
  },
  {
    "id": "q-math1-2022-15",
    "subject": "math",
    "knowledgeId": "k-math-017",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 15,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "subtype": "fill",
    "difficulty": 3,
    "score": 5,
    "stem": "已知矩阵 $A$ 和 $E-A$ 可逆，其中 $E$ 为单位矩阵，若矩阵 $B$ 满足 $(E-(E-A)^{-1})B=A$，则 $B-A=$________．",
    "answer": [
      "$-E$"
    ],
    "explain": "化简 $(E-(E-A)^{-1})B=A$ 得 $B=A-E$，故 $B-A=-E$。",
    "answerText": "$-E$",
    "referenceAnswer": "答案：$-E$",
    "rubric": [
      {
        "text": "结果正确；等价形式同样给分",
        "points": 5
      }
    ]
  },
  {
    "id": "q-math1-2022-16",
    "subject": "math",
    "knowledgeId": "k-math-020",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 16,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "subtype": "fill",
    "difficulty": 3,
    "score": 5,
    "stem": "设 $A,B,C$ 为随机事件，且 $A$ 与 $B$ 互不相容，$A$ 与 $C$ 互不相容，$B$ 与 $C$ 相互独立，$P(A)=P(B)=P(C)=\\dfrac13$，则 $P(B\\cup C\\mid A\\cup B\\cup C)=$________．",
    "answer": [
      "$\\dfrac58$"
    ],
    "explain": "$P(B\\cup C)=5/9$，$P(A\\cup B\\cup C)=1/3+5/9=8/9$，比值为 $5/8$。",
    "answerText": "$\\dfrac58$",
    "referenceAnswer": "答案：$\\dfrac58$",
    "rubric": [
      {
        "text": "结果正确；等价形式同样给分",
        "points": 5
      }
    ]
  },
  {
    "id": "q-math1-2022-17",
    "subject": "math",
    "knowledgeId": "k-math-015",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 17,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "difficulty": 3,
    "score": 10,
    "stem": "设函数 $y(x)$ 是微分方程 $y'+\\dfrac{1}{2\\sqrt{x}}y=2+\\sqrt{x}$ 满足条件 $y(1)=3$ 的解，求曲线 $y=y(x)$ 的渐近线．",
    "referenceAnswer": "由积分因子 $e^{\\sqrt{x}}$ 得 $y=2x+Ce^{-\\sqrt{x}}$，代入 $y(1)=3$ 得 $C=e$，故 $y=2x+e^{1-\\sqrt{x}}$；$x\\to+\\infty$ 时 $y-2x\\to0$，故斜渐近线为 $y=2x$。",
    "rubric": [
      {
        "text": "对照参考答案，按步骤与关键结论自评",
        "points": 10
      }
    ],
    "explain": "积分因子为 $e^{\\sqrt x}$，解得 $y=2x+Ce^{-\\sqrt x}$。由 $y(1)=3$ 得 $C=e$，即 $y=2x+e^{1-\\sqrt x}$。$x\\to+\\infty$ 时 $y/x\\to2$，$y-2x\\to0$，故斜渐近线为 $y=2x$；无铅直、水平渐近线。"
  },
  {
    "id": "q-math1-2022-18",
    "subject": "math",
    "knowledgeId": "k-math-012",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 18,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "difficulty": 3,
    "score": 12,
    "stem": "已知平面区域 $D=\\{(x,y)\\mid y-2\\le x\\le\\sqrt{4-y^2},\\,0\\le y\\le2\\}$，计算 $I=\\displaystyle\\iint_D\\frac{(x-y)^2}{x^2+y^2}\\,dxdy$．",
    "referenceAnswer": "令 $x=\\rho\\cos\\theta,y=\\rho\\sin\\theta$，分 $0\\le\\theta\\le\\pi/2$ 与 $\\pi/2\\le\\theta\\le\\pi$ 两段积分，分别得 $\\pi/2-1$ 与 $3\\pi/2-1$，合计 $I=2\\pi-2$。",
    "rubric": [
      {
        "text": "对照参考答案，按步骤与关键结论自评",
        "points": 12
      }
    ],
    "explain": "用极坐标分块积分：$I=\\int_0^{\\pi/2}(\\cos\\theta-\\sin\\theta)^2d\\theta\\int_0^2\\rho\\,d\\rho+\\int_{\\pi/2}^{\\pi}(\\cos\\theta-\\sin\\theta)^2d\\theta\\int_0^{-2\\sin\\theta}\\rho\\,d\\rho=2\\pi-2$。"
  },
  {
    "id": "q-math1-2022-19",
    "subject": "math",
    "knowledgeId": "k-math-012",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 19,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "difficulty": 3,
    "score": 12,
    "stem": "设 $\\Sigma$ 为 $4x^2+y^2+z^2=1,x\\ge0,y\\ge0,z\\ge0$ 的上侧，$\\Sigma$ 的边界 $L$ 的方向与 $\\Sigma$ 的侧符合右手法则，求 $\\displaystyle\\oint_L(yz^2-\\cos z)\\,dx+2xy^2\\,dy+(2xyz+\\sin z)\\,dz$．",
    "referenceAnswer": "由斯托克斯公式化为曲面积分，补上三个坐标面围成闭曲面后用高斯公式；散度为 $-2z+0+2z=0$，故原积分为 $0$。",
    "rubric": [
      {
        "text": "对照参考答案，按步骤与关键结论自评",
        "points": 12
      }
    ],
    "explain": "由斯托克斯公式化为曲面积分，补三个坐标面后围成闭曲面，用高斯公式，散度为 $-2z+0+2z=0$，故积分为 $0$。"
  },
  {
    "id": "q-math1-2022-20",
    "subject": "math",
    "knowledgeId": "k-math-005",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 20,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "difficulty": 3,
    "score": 12,
    "stem": "设 $f(x)$ 在 $(-\\infty,+\\infty)$ 有二阶连续导数，证明 $f''(x)\\ge0$ 的充要条件为：对于不同实数 $a,b$，$f\\left(\\dfrac{a+b}{2}\\right)\\le\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$．",
    "referenceAnswer": "必要性：在 $x_0=(a+b)/2$ 处泰勒展开并利用 $f''\\ge0$ 得积分不等式。充分性：对任意 $x_0$ 取对称区间，由题设不等式令 $\\delta\\to0$ 推出 $f''(x_0)\\ge0$。",
    "rubric": [
      {
        "text": "对照参考答案，按步骤与关键结论自评",
        "points": 12
      }
    ],
    "explain": "必要性：在 $x_0=\\frac{a+b}{2}$ 处泰勒展开，利用 $f''\\ge0$ 得积分不等式。充分性：对任意 $x_0$ 取对称区间 $[x_0-\\delta,x_0+\\delta]$，由题设得 $f(x_0)\\le\\frac1{2\\delta}\\int_{x_0-\\delta}^{x_0+\\delta}f(x)dx$，移项并令 $\\delta\\to0$，由二阶导定义得 $f''(x_0)\\ge0$。"
  },
  {
    "id": "q-math1-2022-21",
    "subject": "math",
    "knowledgeId": "k-math-019",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 21,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "difficulty": 3,
    "score": 12,
    "stem": "已知二次型 $f(x_1,x_2,x_3)=\\displaystyle\\sum_{i=1}^3\\sum_{j=1}^3 ij\\,x_i x_j$．(1) 求二次型矩阵；(2) 求正交矩阵 $Q$，使二次型经正交变换 $x=Qy$ 化为标准形；(3) 求 $f(x_1,x_2,x_3)=0$ 的解．",
    "referenceAnswer": "(1) $A=\\begin{pmatrix}1&2&3\\\\2&4&6\\\\3&6&9\\end{pmatrix}$；(2) $Q=\\begin{pmatrix}-\\frac25&-\\frac{3}{\\sqrt{70}}&\\frac{1}{\\sqrt{14}}\\\\\\frac15&-\\frac{6}{\\sqrt{70}}&\\frac{2}{\\sqrt{14}}\\\\0&\\frac{5}{\\sqrt{70}}&\\frac{3}{\\sqrt{14}}\\end{pmatrix}$，标准形 $14y_3^2$；(3) $x=k_1\\begin{pmatrix}-2\\\\1\\\\0\\end{pmatrix}+k_2\\begin{pmatrix}-3\\\\-6\\\\5\\end{pmatrix}$，$k_1,k_2$ 为任意常数．",
    "rubric": [
      {
        "text": "对照参考答案，按步骤与关键结论自评",
        "points": 12
      }
    ],
    "explain": "$A$ 的特征值为 $0,0,14$；对应特征向量正交规范化后得 $Q$，故 $f=14y_3^2$。令 $y_3=0$，取 $Q$ 前两列即得零解方向。"
  },
  {
    "id": "q-math1-2022-22",
    "subject": "math",
    "knowledgeId": "k-math-020",
    "paperId": "paper-2022-math1",
    "paperOnly": true,
    "year": 2022,
    "number": 22,
    "source": "real",
    "sourceName": "2022 考研数学（一）真题",
    "type": "subjective",
    "difficulty": 3,
    "score": 12,
    "stem": "设 $X_1,X_2,\\cdots,X_n$ 为来自均值为 $\\theta$ 的指数分布总体 $X$ 的简单随机样本，$Y_1,Y_2,\\cdots,Y_m$ 为来自均值为 $2\\theta$ 的指数分布总体 $Y$ 的简单随机样本，且两样本相互独立，其中 $\\theta(\\theta>0)$ 是未知参数．利用样本求 $\\theta$ 的最大似然估计量 $\\hat\\theta$，并求 $D(\\hat\\theta)$．",
    "referenceAnswer": "$\\hat\\theta=\\dfrac{1}{m+n}\\left(\\displaystyle\\sum_{i=1}^n X_i+\\dfrac12\\sum_{j=1}^m Y_j\\right)$；$D(\\hat\\theta)=\\dfrac{\\theta^2}{m+n}$．",
    "rubric": [
      {
        "text": "对照参考答案，按步骤与关键结论自评",
        "points": 12
      }
    ],
    "explain": "似然函数 $L=\\theta^{-n}(2\\theta)^{-m}\\exp\\left(-\\frac{\\sum x_i}{\\theta}-\\frac{\\sum y_j}{2\\theta}\\right)$，对数求导得 $\\hat\\theta=\\frac{1}{m+n}(\\sum x_i+\\frac12\\sum y_j)$。由 $DX=\\theta^2,DY=4\\theta^2$ 及独立性，$D(\\hat\\theta)=\\frac{n\\theta^2+\\frac14m\\cdot4\\theta^2}{(m+n)^2}=\\frac{\\theta^2}{m+n}$。"
  }
]

export const paper2022_math1 = {
  "id": "paper-2022-math1",
  "year": 2022,
  "title": "2022 年全国硕士研究生招生考试 数学（一）",
  "short": "2022 数学一原卷",
  "group": "math",
  "subjects": [
    "math"
  ],
  "durationMin": 180,
  "totalScore": 150,
  "questionCount": 22,
  "qids": [
    "q-math1-2022-01",
    "q-math1-2022-02",
    "q-math1-2022-03",
    "q-math1-2022-04",
    "q-math1-2022-05",
    "q-math1-2022-06",
    "q-math1-2022-07",
    "q-math1-2022-08",
    "q-math1-2022-09",
    "q-math1-2022-10",
    "q-math1-2022-11",
    "q-math1-2022-12",
    "q-math1-2022-13",
    "q-math1-2022-14",
    "q-math1-2022-15",
    "q-math1-2022-16",
    "q-math1-2022-17",
    "q-math1-2022-18",
    "q-math1-2022-19",
    "q-math1-2022-20",
    "q-math1-2022-21",
    "q-math1-2022-22"
  ],
  "sourceName": "公开网络版（2022 数学一原卷及解析）",
  "note": "题干按原卷录入，公式使用 KaTeX。"
}
