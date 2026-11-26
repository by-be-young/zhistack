const IMG = (import.meta.env?.BASE_URL || '/') + 'img/408-2022/'

export const questions2022_408 = [
  {
    "id": "q-408-2022-01",
    "subject": "ds",
    "knowledgeId": "k-ds-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 1,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列程序段的时间复杂度是（ ）。\n\n```c\nint sum = 0;\nfor (int i = 1; i < n; i *= 2)\nfor (int j = 0; j < i; j++)\nsum++;\n```",
    "options": [
      {
        "key": "A",
        "text": "$O(log_{2}n)$"
      },
      {
        "key": "B",
        "text": "$O(n)$"
      },
      {
        "key": "C",
        "text": "$O(nlog_{2}n)$"
      },
      {
        "key": "D",
        "text": "$O(n^{2})$"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "外层循环的 $i$ 依次取 $1,2,4,\\ldots$，满足 $i<n$；内层循环执行 $i$ 次。设 $k=\\lceil\\log_2 n\\rceil$，总次数为\n\n$$\nT(n)=1+2+\\cdots+2^{k-1}=2^k-1.\n$$\n\n由 $n\\le2^k<2n$ 可得 $n-1\\le T(n)<2n-1$，因此时间复杂度为 $O(n)$，答案为 $B$。仅在 $n$ 是 $2$ 的整数次幂时，精确次数才等于 $n-1$。"
  },
  {
    "id": "q-408-2022-02",
    "subject": "ds",
    "knowledgeId": "k-ds-005",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 2,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "给定有限符号集 $S$，$\\mathrm{in}$ 和 $\\mathrm{out}$ 均为 $S$ 中所有元素的任意排列。对于初始为空的栈 $\\mathrm{ST}$，下列叙述中，正确的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "若 $\\mathrm{in}$ 是 $\\mathrm{ST}$ 的入栈序列，则不能判断 $\\mathrm{out}$ 是否为其可能的出栈序列"
      },
      {
        "key": "B",
        "text": "若 $\\mathrm{out}$ 是 $\\mathrm{ST}$ 的出栈序列，则不能判断 $\\mathrm{in}$ 是否为其可能的入栈序列"
      },
      {
        "key": "C",
        "text": "若 $\\mathrm{in}$ 是 $\\mathrm{ST}$ 的入栈序列，$\\mathrm{out}$ 是对应 $\\mathrm{in}$ 的出栈序列，则 $\\mathrm{in}$ 与 $\\mathrm{out}$ 一定不同"
      },
      {
        "key": "D",
        "text": "若 $\\mathrm{in}$ 是 $\\mathrm{ST}$ 的入栈序列，$\\mathrm{out}$ 是对应的出栈序列，则 $\\mathrm{in}$ 与 $\\mathrm{out}$ 可能互为倒序"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "栈（$\\mathrm{ST}$）是一种遵循后进先出（LIFO）原则的数据结构。给定入栈序列 $\\mathrm{in}$ 和出栈序列 $\\mathrm{out}$，我们需要分析选项的正确性。\n\n- 选项$A$：若 $\\mathrm{in}$ 是 $\\mathrm{ST}$ 的入栈序列，可以通过模拟栈操作来判断 $\\mathrm{out}$ 是否为其可能的出栈序列。因此，选项$A$是错误的。\n\n- 选项$B$：若 $\\mathrm{out}$ 是 $\\mathrm{ST}$ 的出栈序列，可以通过逆向操作推断可能的入栈序列 $\\mathrm{in}$。因此，选项$B$是错误的。\n\n- 选项$C$：若 $\\mathrm{in}$ 是 $\\mathrm{ST}$ 的入栈序列，$\\mathrm{out}$ 是对应 $\\mathrm{in}$ 的出栈序列，$\\mathrm{in}$ 和 $\\mathrm{out}$ 可以相同（例如，所有元素依次入栈后立即出栈）。因此，选项$C$是错误的。\n\n- 选项$D$：若 $\\mathrm{in}$ 是 $\\mathrm{ST}$ 的入栈序列，$\\mathrm{out}$ 是对应的出栈序列，则 $\\mathrm{in}$ 与 $\\mathrm{out}$ 可能互为倒序。例如，当所有元素依次入栈后，再依次出栈时，$\\mathrm{out}$ 就是 $\\mathrm{in}$ 的倒序。因此，选项$D$是正确的。\n\n$D$"
  },
  {
    "id": "q-408-2022-03",
    "subject": "ds",
    "knowledgeId": "k-ds-009",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 3,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "若结点 $p$ 与 $q$ 在二叉树 $T$ 的中序遍历序列中相邻，且 $p$ 在 $q$ 之前，则下列 $p$ 与 $q$ 的关系中，不可能的是（    ）。\n\nI.$q$是 $p$ 的双亲    II. $q$ 是 $p$ 的右孩子  III. $q$ 是 $p$ 的右兄弟    IV. $q$ 是 $p$ 的双亲的双亲",
    "options": [
      {
        "key": "A",
        "text": "仅 I"
      },
      {
        "key": "B",
        "text": "仅 III"
      },
      {
        "key": "C",
        "text": "仅 II、III"
      },
      {
        "key": "D",
        "text": "仅 II、IV"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "中序遍历按左子树、根、右子树访问。\n\n- I 可以：$p$ 为 $q$ 的左孩子且无右子树。\n\n- II 可以：$q$ 为 $p$ 的右孩子且无左子树。\n\n- III 不可能：若 $p,q$ 互为左右兄弟，访问完左子树后必须先访问它们的双亲，再访问右子树，因此两者不能直接相邻。\n\n- IV 可以：$q$ 的左孩子为 $x$，$x$ 的右孩子为 $p$，且 $p$ 无右子树，则中序次序为 $x,p,q$，$q$ 正是 $p$ 的双亲的双亲。$p$ 应位于该右子树的最右侧。\n\n所以仅 III 不可能，答案为 $B$。\n\n[[IMG:https://pgcode-image.oss-cn-beijing.aliyuncs.com/408-exam-paper/pic/2022/2022-03-answer_detail-01-115211ac0428.png]]"
  },
  {
    "id": "q-408-2022-04",
    "subject": "ds",
    "knowledgeId": "k-ds-008",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 4,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "若三叉树 $T$ 中有 244 个结点（叶结点的高度为 1），则 $T$ 的高度至少是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "8"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "5"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "要确定三叉树 $T$ 的最小高度，我们需要考虑一个完全三叉树的结构。对于高度为 $h$ 的完全三叉树，其结点总数 $N$ 可以通过以下公式计算：\n\n$$\nN = 1 + 3 + 3^2 + \\cdots + 3^{h-1} = \\frac{3^h - 1}{2}\n$$\n\n我们需要找到最小的 $h$ 使得 $\\frac{3^h - 1}{2} \\geq 244$。解这个不等式：\n\n$$\n\\frac{3^h - 1}{2} \\geq 244 \\\\\n3^h - 1 \\geq 488 \\\\\n3^h \\geq 489\n$$\n\n接下来计算 $3^h$ 的值：\n\n$$\n3^5 = 243 \\\\\n3^6 = 729\n$$\n\n因为 $3^6 = 729 \\geq 489$，所以最小的 $h$ 是 $6$。\n\n因此，三叉树 $T$ 的高度至少是 $6$。\n\n$C$"
  },
  {
    "id": "q-408-2022-05",
    "subject": "ds",
    "knowledgeId": "k-ds-008",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 5,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "对任意给定的含 $n$（$n>2$）个字符的有限集 $S$，用二叉树表示 $S$ 的哈夫曼编码集和定长编码集，分别得到二叉树 $T_{1}$ 和 $T_{2}$。下列叙述中，正确的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "$T_{1}$ 与 $T_{2}$ 的结点数相同"
      },
      {
        "key": "B",
        "text": "$T_{1}$ 的高度大于 $T_{2}$ 的高度"
      },
      {
        "key": "C",
        "text": "出现频次不同的字符在 $T_{1}$ 中处于不同的层"
      },
      {
        "key": "D",
        "text": "出现频次不同的字符在 $T_{2}$ 中处于相同的层"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "定长编码树中，每个字符对应的叶结点具有相同深度。哈夫曼树使用变长编码，字符叶结点的深度可以不同，也可能恰好相同，因此 $D$ 正确。\n\n定长编码的码长为 $\\lceil\\log_2 n\\rceil$，哈夫曼树高度不一定低于定长编码树；二者结点个数也不一定相同。选项 $A$、$B$、$C$ 的普遍性断言均不成立，答案为 $D$。\n\n[[IMG:https://pgcode-image.oss-cn-beijing.aliyuncs.com/408-exam-paper/pic/2022/2022-05-answer_detail-01-083c13957e04.png]]"
  },
  {
    "id": "q-408-2022-06",
    "subject": "ds",
    "knowledgeId": "k-ds-012",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 6,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "对于无向图 $G$ = ( V, $E$)，下列选项中，正确的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "当| V | > | $E$ |时，$G$ 一定是连通的"
      },
      {
        "key": "B",
        "text": "当| V | < | $E$ |时，$G$ 一定是连通的"
      },
      {
        "key": "C",
        "text": "当| V | = | $E$ | – 1 时，$G$ 一定是不连通的"
      },
      {
        "key": "D",
        "text": "当| V | > | $E$ | + 1 时，$G$ 一定是不连通的"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "含 $|V|$ 个顶点的连通无向图至少有 $|V|-1$ 条边，因此当 $|V|>|E|+1$ 时必不连通，$D$ 正确。\n\n其余条件均不能保证所述结论：\n\n- $A$：三个顶点仅一条边，满足 $|V|>|E|$，却不连通。\n\n- $B$：完全图 $K_4$ 加一个孤立顶点，有 $5$ 个顶点、$6$ 条边，满足 $|V|<|E|$，却不连通。\n\n- $C$：从 $K_4$ 删除一条边，仍连通，有 $4$ 个顶点、$5$ 条边，满足 $|V|=|E|-1$。\n\n答案为 $D$。\n\n[[IMG:https://pgcode-image.oss-cn-beijing.aliyuncs.com/408-exam-paper/pic/2022/2022-06-answer_detail-01-3124a9097943.png]]"
  },
  {
    "id": "q-408-2022-07",
    "subject": "ds",
    "knowledgeId": "k-ds-016",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 7,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下图是一个有 10 个活动的 AOE 网，时间余量最大的活动是 ( )。",
    "options": [
      {
        "key": "A",
        "text": "$c$"
      },
      {
        "key": "B",
        "text": "$g$"
      },
      {
        "key": "C",
        "text": "$h$"
      },
      {
        "key": "D",
        "text": "$j$"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "在 AOE 网中，活动的时间余量 = 结束顶点的最迟开始时间 - 开始顶点的最早开始时间 - 该活动的持续时间。根据关键路径算法得到下表：\n\n结点编号\n1\n2\n3\n4\n5\n6\n\n最早开始时间 ve($i$)\n0\n2\n5\n8\n9\n12\n\n最迟开始时间 vl($i$)\n0\n4\n5\n8\n11\n12\n\n$c$ 的时间余量 = vl(3) - ve(2) - 1 = 5 - 2 - 1 = 2，$g$ 的时间余量 = vl(6) - ve(3) - 1 = 12 - 5 - 1 = 6， $h$ 的时间余量 = vl(5) - ve(4) - 1 = 11 - 8 - 1 = 2，$j$ 的时间余量 = vl(6) - ve(5) - 1 = 12 - 9 - 1 = 2， 时间余量最大的活动是 $g$。",
    "figures": [
      {
        "src": IMG + "q7.png",
        "alt": "题 7 图"
      }
    ]
  },
  {
    "id": "q-408-2022-08",
    "subject": "ds",
    "knowledgeId": "k-ds-017",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 8,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "在下图所示的 5 阶 $B$ 树 $T$ 中，删除关键字 260 之后需要进行必要的调整，得到新的 $B$ 树 $T_{1}$。下列选项中，不可能是 $T_{1}$ 根结点中关键字序列的是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "60，90，280"
      },
      {
        "key": "B",
        "text": "60，90，350"
      },
      {
        "key": "C",
        "text": "60，85，110，350"
      },
      {
        "key": "D",
        "text": "60，90，110，350"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "在 5 阶 $B$ 树中，除根结点外的非叶子结点的关键字数 $k$ 需要满足 2 ≤ $k≤4$。当被删关键字 $x$ 不在终端结点（最底层非叶子结点）时，可以用 $x$ 的前驱（或后继) 关键字 $y$ 来替代 $x$，然后在相应结点中删除 $y$。\n\n情况①：删除 260，将其前驱 110 放入 260 处，删除 110 后的结点 不满足 5 阶 $B$ 树定义，从左兄弟中借 85，将 85 放入根中，将根中的 90 移入结点 变为 <90, 100>。\n\n情况②：删除 260，将其后继 280 放入 260 处，结点 不满足 5 阶 $B$ 树定义且左右兄弟都不够借，结点 可以和左兄弟 <100, 110> 以及关键字 280 合并成一个新的结点 <100, 110, 280, 300>。\n\n情况③：在情况②中，结点 也可以和右兄弟 <400, 500> 以及关键字 350 合并成一个新的结点 <300, 350, 400, 500>。综上，$T_{1}$ 根结点中的关键字序列可能是 <60, 85, 110, 350> 或 <60, 90, 350> 或 <60, 90, 280>，仅 $D$ 不可能。",
    "figures": [
      {
        "src": IMG + "q8.png",
        "alt": "题 8 图"
      }
    ]
  },
  {
    "id": "q-408-2022-09",
    "subject": "ds",
    "knowledgeId": "k-ds-019",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 9,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列因素中，影响散列（哈希）方法平均查找长度的是（ ）。\n\nI. 装填因子\n\nII. 散列函数\n\nIII. 冲突解决策略",
    "options": [
      {
        "key": "A",
        "text": "仅 I、II"
      },
      {
        "key": "B",
        "text": "仅 I、III"
      },
      {
        "key": "C",
        "text": "仅 II、III"
      },
      {
        "key": "D",
        "text": "I、 II、 III"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "散列（哈希）方法的平均查找长度（ASL）受以下因素影响：\n\n- 装填因子（I）：装填因子 $\\alpha$ 定义为哈希表中已存储的元素个数 $n$ 与哈希表大小 $m$ 的比值，即 $\\alpha = \\frac{n}{m}$。$\\alpha$ 越大，哈希表越满，发生冲突的概率越高，从而增加平均查找长度。\n\n- 散列函数（II）：散列函数 $h(k)$ 的设计直接影响键值的分布均匀性。一个好的散列函数能够将键值均匀分布在哈希表中，减少冲突，从而降低平均查找长度。\n\n- 冲突解决策略（III）：常见的冲突解决策略包括链地址法和开放寻址法（如线性探测、二次探测等）。不同的策略在冲突发生时的处理方式不同，直接影响查找效率。例如，链地址法在冲突时使用链表存储相同哈希值的元素，而开放寻址法则会寻找下一个空闲位置。\n\n综上所述，装填因子、散列函数和冲突解决策略均会影响散列方法的平均查找长度。\n\n$D$"
  },
  {
    "id": "q-408-2022-10",
    "subject": "ds",
    "knowledgeId": "k-ds-023",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 10,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "使用二路归并排序对含 $n$ 个元素的数组 $M$ 进行排序时，二路归并操作的功能是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "将两个有序表合并为一个新的有序表"
      },
      {
        "key": "B",
        "text": "将 $M$ 划分为两部分，两部分的元素个数大致相等"
      },
      {
        "key": "C",
        "text": "将 $M$ 划分为 $n$ 个部分，每个部分中仅含有一个元素"
      },
      {
        "key": "D",
        "text": "将 $M$ 划分为两部分，一部分元素的值均小于另一部分元素的值"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "二路归并排序是一种基于分治思想的排序算法。其核心操作是 二路归并，具体步骤如下：\n\n- 分解：将数组 $M$ 递归地分成两个子数组，直到每个子数组只包含一个元素（此时自然有序）。\n\n- 合并：将两个 已经有序的子数组合并为一个新的有序数组。这是二路归并排序的关键步骤。\n\n选项分析：\n\n- $A$：正确描述了二路归并操作的功能，即将两个有序表合并为一个新的有序表。\n\n- $B$：描述的是分解步骤，而非归并操作。\n\n- $C$：描述的是分解的最底层情况，每个部分仅含一个元素，但这不是归并操作。\n\n- $D$：描述的是快速排序的划分操作，与归并排序无关。\n\n因此，正确答案是 $A$。\n\n$A$"
  },
  {
    "id": "q-408-2022-11",
    "subject": "ds",
    "knowledgeId": "k-ds-020",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 11,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "对数据进行排序时，若采用直接插入排序而不采用快速排序，则可能的原因是（    ）。\n\nI. 大部分元素己有序\n\nII. 待排序元素数量很少\n\nIII. 要求空间复杂度为 $O(1)$\n\nIV. 要求排序算法是稳定的",
    "options": [
      {
        "key": "A",
        "text": "仅 I、II"
      },
      {
        "key": "B",
        "text": "仅 III、IV"
      },
      {
        "key": "C",
        "text": "仅 I、II、IV"
      },
      {
        "key": "D",
        "text": "I、II、III、IV"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "直接插入排序和快速排序在不同场景下各有优劣，题目中列举的四种情况都是可能选择直接插入排序而不采用快速排序的原因：\n\n- 大部分元素已有序（I）：\n\n直接插入排序在近乎有序的数据上表现优异，时间复杂度接近 $O(n)$，而快速排序在这种情况下可能退化为 $O(n^2)$。\n\n- 待排序元素数量很少（II）：\n\n当数据量较小时，直接插入排序的常数因子较小，实际运行效率可能高于快速排序，尽管两者时间复杂度理论值分别为 $O(n^2)$ 和 $O(n \\log n)$。\n\n- 要求空间复杂度为 $O(1)$（III）：\n\n直接插入排序是原地排序算法，空间复杂度为 $O(1)$；而快速排序虽然平均空间复杂度为 $O(\\log n)$（递归栈开销），但在最坏情况下会退化为 $O(n)$。\n\n- 要求排序算法是稳定的（IV）：\n\n直接插入排序是稳定的排序算法，而快速排序是不稳定的（分区操作可能导致相同元素的相对位置改变）。\n\n因此，四种情况均可能成为选择直接插入排序的理由。\n\n$D$"
  },
  {
    "id": "q-408-2022-12",
    "subject": "co",
    "knowledgeId": "k-co-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 12,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "某计算机主频为 1GHz，程序 $p$ 运行过程中，共执行了 10000 条指令，其中，80%的指令执行平均需 1 个时钟周期，20%的指令执行平均需 10 个时钟周期。程序 $P$ 的平均 CPI 和 CPU 执行时间分别是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "2.8，$28\\,\\mu\\mathrm{s}$"
      },
      {
        "key": "B",
        "text": "28, $28\\,\\mu\\mathrm{s}$"
      },
      {
        "key": "C",
        "text": "2.8, 28ms"
      },
      {
        "key": "D",
        "text": "28, 28ms"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "程序 $P$ 的平均 CPI（Cycles Per Instruction）可以通过加权平均计算得到。具体步骤如下：\n\n- 计算不同指令的时钟周期贡献：\n\n- 80% 的指令贡献： $0.8 \\times 1 = 0.8$ 个时钟周期\n\n- 20% 的指令贡献： $0.2 \\times 10 = 2$ 个时钟周期\n\n- 平均 CPI 为两部分之和：\n\n$\\text{CPI} = 0.8 + 2 = 2.8$\n\n- 计算 CPU 执行时间：\n\n- 总时钟周期数： $\\text{CPI} \\times \\text{指令数} = 2.8 \\times 10000 = 28000$ 个时钟周期\n\n- 主频为 1GHz，即时钟周期时间为 $\\frac{1}{1 \\times 10^9} = 1 \\text{ns}$\n\n- CPU 执行时间： $28000 \\times 1 \\text{ns} = 28000 \\text{ns} = 28 \\mu \\text{s}$\n\n因此，程序 $P$ 的平均 CPI 为 $2.8$，CPU 执行时间为 $28 \\mu \\text{s}$。\n\n$A$"
  },
  {
    "id": "q-408-2022-13",
    "subject": "co",
    "knowledgeId": "k-co-011",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 13,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "32 位补码所能表示的整数范围是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "－$2^{32}$～$2^{31}$ – 1"
      },
      {
        "key": "B",
        "text": "－$2^{31}$～$2^{31}$ – 1"
      },
      {
        "key": "C",
        "text": "－$2^{32}$～$2^{32}$ – 1"
      },
      {
        "key": "D",
        "text": "－$2^{31}$～$2^{32}$ – 1"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "在计算机中，$n$ 位补码表示的整数范围可以表示为：\n\n$$\n-2^{n-1} \\sim 2^{n-1} - 1\n$$\n\n对于 $32$ 位补码，$n = 32$，因此其表示的范围为：\n\n$$\n-2^{31} \\sim 2^{31} - 1\n$$\n\n具体来说：\n\n- 最小值为 $-2^{31}$，因为最高位是符号位，表示负数，剩余的 $31$ 位用于表示数值部分。\n\n- 最大值为 $2^{31} - 1$，因为最高位为 $0$ 表示正数，剩余的 $31$ 位全为 $1$ 时表示最大值。\n\n因此，正确答案是 $-2^{31} \\sim 2^{31} - 1$。\n\n$B$"
  },
  {
    "id": "q-408-2022-14",
    "subject": "co",
    "knowledgeId": "k-co-013",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 14,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "－0.4375 的 IEEE 754 单精度浮点数表示为（    ）。",
    "options": [
      {
        "key": "A",
        "text": "BEE0 0000H"
      },
      {
        "key": "B",
        "text": "BF60 0000H"
      },
      {
        "key": "C",
        "text": "BF70 0000H"
      },
      {
        "key": "D",
        "text": "C0E0 0000H"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "首先将十进制数 -0.4375 转换为二进制表示：\n\n- 转换小数部分 0.4375：\n\n$0.4375 \\times 2 = 0.875$ → 取整数部分 0\n\n$0.875 \\times 2 = 1.75$ → 取整数部分 1\n\n$0.75 \\times 2 = 1.5$ → 取整数部分 1\n\n$0.5 \\times 2 = 1.0$ → 取整数部分 1\n\n因此，0.4375 的二进制表示为 $0.0111_2$。\n\n- 科学记数法表示：\n\n$-0.0111_2 = -1.11_2 \\times 2^{-2}$。\n\n- IEEE 754 单精度浮点数格式（32位）：\n\n- 符号位（$S$）：1 位（1 表示负数）\n\n- 指数位（$E$）：8 位（实际指数 + 127）\n\n- 尾数位（$M$）：23 位（去掉隐含的1）\n\n- 计算各部分：\n\n- 符号位：$S = 1$（因为是负数）\n\n- 指数部分：实际指数为 -2，加上偏置 127，得到 $E = -2 + 127 = 125$。\n\n转换为二进制：$125_{10} = 01111101_2$。\n\n- 尾数部分：科学记数法中的尾数是 $1.11_2$，去掉隐含的1后是 $11000000000000000000000_2$（不足23位补0）。\n\n- 组合各部分：\n\n- 符号位：1\n\n- 指数位：01111101\n\n- 尾数位：11000000000000000000000\n\n组合起来：$1\\ 01111101\\ 11000000000000000000000_2$。\n\n- 转换为十六进制：\n\n将上述二进制每4位一组转换为十六进制：\n\n$1011 1110 1110 0000 0000 0000 0000 0000_2$ → $BEE0 0000H$。\n\n$A$"
  },
  {
    "id": "q-408-2022-15",
    "subject": "co",
    "knowledgeId": "k-co-007",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 15,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "某计算机主存地址为 24 位，采用分页虚拟存储管理方式，虚拟地址空间大小为 4GB，页大小为 4KB，按字节编址。某进程的页表部分内容如下表所示。当 CPU 访问虚拟地址 00082840H，虚 - 实地址转换的结果是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "得到主存地址 02 4840H"
      },
      {
        "key": "B",
        "text": "得到主存地址 18 0840H"
      },
      {
        "key": "C",
        "text": "得到主存地址 01 8840H"
      },
      {
        "key": "D",
        "text": "检测到缺页异常"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "页大小为 $4\\mathrm{KB}=2^{12}\\mathrm{B}$，页内偏移12位；虚拟空间 $4\\mathrm{GB}=2^{32}\\mathrm{B}$，虚页号20位。\n\n虚拟地址 $00082840\\mathrm{H}$ 的虚页号为 $82\\mathrm{H}=130$，偏移为 $840\\mathrm{H}$。题表虚页号使用十进制，查130号表项，其存在位为1、页框号为 $018\\mathrm{H}$。\n\n拼接页框号与偏移得到物理地址 $018840\\mathrm{H}$，答案为 $C$。",
    "figures": [
      {
        "src": IMG + "q15.png",
        "alt": "题 15 图"
      }
    ]
  },
  {
    "id": "q-408-2022-16",
    "subject": "co",
    "knowledgeId": "k-co-006",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 16,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "若计算机主存地址为 32 位，按字节编址，某 Cache 的数据区容量为 32KB，主存块大小为 64B，采用 8 路组相联映射方式，该 Cache 中比较器的个数和位数分别为（    ）。",
    "options": [
      {
        "key": "A",
        "text": "8, 20"
      },
      {
        "key": "B",
        "text": "8, 23"
      },
      {
        "key": "C",
        "text": "64, 20"
      },
      {
        "key": "D",
        "text": "64, 23"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "首先，我们需要根据题目给出的信息逐步计算比较器的个数和位数。\n\n- 主存地址结构分析：\n\n- 主存地址为 $32$ 位，按字节编址。\n\n- 主存块大小为 $64B$，因此块内地址需要 $\\log_2{64} = 6$ 位。\n\n- Cache 结构分析：\n\n- Cache 数据区容量为 $32KB$，主存块大小为 $64B$，因此 Cache 中可以存放的块数为：\n$$\n\\frac{32KB}{64B} = \\frac{32768}{64} = 512 \\text{ 块}\n$$\n\n- 采用 $8$ 路组相联映射方式，因此 Cache 的组数为：\n$$\n\\frac{512}{8} = 64 \\text{ 组}\n$$\n\n- 组号需要 $\\log_2{64} = 6$ 位。\n\n- $\\mathrm{Tag}$ 位计算：\n\n- 主存地址的 $32$ 位可以划分为：$Tag$ 位 + 组号 $6$ 位 + 块内地址 $6$ 位。\n\n- 因此，$Tag$ 位数为：\n$$\n32 - 6 - 6 = 20 \\text{ 位}\n$$\n\n- 比较器的个数和位数：\n\n- 在 $8$ 路组相联映射中，每一组有 $8$ 个块，因此需要 $8$ 个比较器同时比较 $Tag$ 位。\n\n- 每个比较器的位数为 $Tag$ 的位数，即 $20$ 位。\n\n综上所述，比较器的个数为 $8$，位数为 $20$。\n\n$A$\n\n[[IMG:https://pgcode-image.oss-cn-beijing.aliyuncs.com/408-exam-paper/pic/2022/2022-16-answer_detail-01-a53c053ebbfb.png]]"
  },
  {
    "id": "q-408-2022-17",
    "subject": "co",
    "knowledgeId": "k-co-004",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 17,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "某内存条包含 8 个 8192×8192×8 位的 DRAM 芯片，按字节编址，支持突发传送方式，对应存储器总线宽度为 64 位，每个 DRAM 芯片内有一个行缓冲区。下列关于该内存条的叙述中，不正确的是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "内存条的容量为 512MB"
      },
      {
        "key": "B",
        "text": "采用多模块交叉编址方式"
      },
      {
        "key": "C",
        "text": "芯片的地址引脚为 26 位"
      },
      {
        "key": "D",
        "text": "芯片内行缓冲有 8192×8 位"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "首先，我们分析题目给出的信息：\n\n- DRAM芯片结构：每个DRAM芯片的存储结构为 $8192 \\times 8192 \\times 8$ 位，即每个芯片有 $8192$ 行和 $8192$ 列，每个存储单元存储 $8$ 位数据。\n\n- 内存条总容量：内存条包含 $8$ 个这样的DRAM芯片，因此总容量为：\n\n$$\n8 \\times 8192 \\times 8192 \\times 8 \\text{ 位} = 8 \\times 8192 \\times 8192 \\times 1 \\text{ 字节} = 512 \\text{ MB}\n$$\n\n所以选项$A$是正确的。\n\n- 芯片地址引脚数量：每个DRAM芯片的存储单元数量为 $8192 \\times 8192 = 2^{13} \\times 2^{13} = 2^{26}$，因此需要 $26$ 位地址来寻址。但是，DRAM芯片通常采用行列地址复用的方式，实际地址引脚数为行地址和列地址的较大值。行地址和列地址均为 $13$ 位（因为 $8192 = 2^{13}$），因此地址引脚数为 $13$ 位，而不是 $26$ 位。所以选项$C$是错误的。\n\n- 多模块交叉编址：题目提到内存条支持突发传送方式，且总线宽度为 $64$ 位，而每个芯片的数据宽度为 $8$ 位，因此需要 $8$ 个芯片并行工作（$8 \\times 8 = 64$ 位）。这种配置通常采用多模块交叉编址方式以提高带宽，所以选项$B$是正确的。\n\n- 行缓冲区大小：题目说明每个DRAM芯片有一个行缓冲区，其大小为 $8192 \\times 8$ 位（即一行数据），所以选项$D$是正确的。\n\n综上所述，不正确的叙述是选项$C$。\n\n$C$"
  },
  {
    "id": "q-408-2022-18",
    "subject": "co",
    "knowledgeId": "k-co-016",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 18,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列选项中，属于指令集体系结构（ISA）规定的内容是（ ）。\n\nⅠ. 指令字格式和指令类型\n\nⅡ. CPU 的时钟周期\n\nⅢ. 通用寄存器个数和位数\n\nⅣ. 加法器的进位方式",
    "options": [
      {
        "key": "A",
        "text": "仅Ⅰ、Ⅱ"
      },
      {
        "key": "B",
        "text": "仅Ⅰ、Ⅲ"
      },
      {
        "key": "C",
        "text": "仅Ⅱ、Ⅳ"
      },
      {
        "key": "D",
        "text": "仅Ⅰ、Ⅲ、Ⅳ"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "指令集体系结构（ISA）是计算机体系结构中软件与硬件的接口规范，它定义了程序员可见的计算机状态、指令集及其操作语义。具体分析各选项：\n\n- I. 指令字格式和指令类型：这是 ISA 的核心内容，规定了指令的编码格式（如 $\\text{opcode}$ 和 $\\text{operand}$ 的布局）以及支持的指令类型（如算术、逻辑、控制等）。\n\n- II. CPU 的时钟周期：这是微架构（Microarchitecture）的实现细节，属于处理器设计的物理层面，不属于 ISA 的范畴。\n\n- IV. 加法器的进位方式：这是硬件实现的具体技术（如行波进位、超前进位），属于微架构或电路设计层面，与 ISA 无关。\n\n- III. 通用寄存器个数和位数：这是 ISA 定义的可见编程资源，程序员需要知道寄存器的数量（如 $\\text{32}$ 个）和位宽（如 $\\text{64-bit}$）。\n\n综上，I 和 III 是 ISA 规定的内容，而 II 和 IV 不是。因此正确答案是 $B$。\n\n$B$"
  },
  {
    "id": "q-408-2022-19",
    "subject": "co",
    "knowledgeId": "k-co-015",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 19,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "设计某指令系统时，假设采用 16 位定长指令字格式，操作码使用扩展编码方式，地址码为 6位，包含零地址、一地址和二地址 3 种格式的指令。若二地址指令有 12 条，一地址指令有 254条，则零地址指令的条数最多为（    ）。",
    "options": [
      {
        "key": "A",
        "text": "0"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "64"
      },
      {
        "key": "D",
        "text": "128"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "指令字长为 $16$ 位，二地址指令每个地址字段占 $6$ 位，因此操作码占 $4$ 位。已有 $12$ 条二地址指令，余下 $2^4-12=4$ 个操作码前缀可扩展成一地址指令。\n\n每个前缀可产生 $2^6=64$ 条一地址指令，共 $256$ 条；已有 $254$ 条，余下 $2$ 个一地址操作码前缀可继续扩展。零地址指令可把剩余 $6$ 位全部作为操作码，所以最多有\n\n$$\n[(2^4-12)2^6-254]2^6=2\\times64=128\n$$\n\n条零地址指令，答案为 $D$。\n\n[[IMG:https://pgcode-image.oss-cn-beijing.aliyuncs.com/408-exam-paper/pic/2022/2022-19-answer_detail-01-08e954985cd1.png]]"
  },
  {
    "id": "q-408-2022-20",
    "subject": "co",
    "knowledgeId": "k-co-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 20,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "将高级语言源程序转换为可执行目标文件的主要过程是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "预处理→编译→汇编→链接"
      },
      {
        "key": "B",
        "text": "预处理→汇编→编译→链接"
      },
      {
        "key": "C",
        "text": "预处理→编译→链接→汇编"
      },
      {
        "key": "D",
        "text": "预处理→汇编→链接→编译"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "将高级语言源程序转换为可执行目标文件的主要过程分为以下四个步骤：\n\n- 预处理（Preprocessing）：\n\n预处理器处理源代码中的宏定义（如 $\\#define$ ）、文件包含（如 $\\#include$ ）和条件编译（如 $\\#ifdef$ ）等指令，生成一个扩展的源代码文件（通常为 $.i$ 或 $.ii$ 文件）。\n\n- 编译（Compilation）：\n\n编译器将预处理后的代码翻译成汇编代码（Assembly Code），生成一个汇编语言文件（通常为 $.s$ 文件）。这一步会进行词法分析、语法分析、语义分析和代码优化。\n\n- 汇编（Assembly）：\n\n汇编器将汇编代码转换为机器指令，生成目标文件（通常为 $.o$ 或 $.obj$ 文件）。目标文件包含二进制代码，但尚未解决外部引用。\n\n- 链接（Linking）：\n\n链接器将一个或多个目标文件与库文件合并，解析外部引用，生成最终的可执行目标文件（如 $.exe$ 或 $.out$ 文件）。\n\n因此，正确的顺序是：\n\n$\\text{预处理} \\rightarrow \\text{编译} \\rightarrow \\text{汇编} \\rightarrow \\text{链接}$\n\n$A$"
  },
  {
    "id": "q-408-2022-21",
    "subject": "co",
    "knowledgeId": "k-co-008",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 21,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列关于中断 I/O 方式的叙述中，不正确的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "适用于键盘、针式打印机等字符型设备"
      },
      {
        "key": "B",
        "text": "外设和主机之间的数据传送通过软件完成"
      },
      {
        "key": "C",
        "text": "外设准备数据的时间应小于中断处理时间"
      },
      {
        "key": "D",
        "text": "外设为某进程准备数据时 CPU 可运行其他进程"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "中断I/O方式中，CPU通过中断服务程序完成数据传送，适合键盘等字符设备；外设准备数据期间CPU可以执行其他进程。\n\n若外设准备下一份数据所需时间短于一次中断处理时间，CPU来不及处理，可能造成数据覆盖或丢失。因此题中$C$要求准备时间更短的论断错误，答案为 $C$。"
  },
  {
    "id": "q-408-2022-22",
    "subject": "co",
    "knowledgeId": "k-co-016",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 22,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列关于并行处理技术的叙述中，不正确的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "多核处理器属于 MIMD 结构"
      },
      {
        "key": "B",
        "text": "向量处理器属于 SIMD 结构"
      },
      {
        "key": "C",
        "text": "硬件多线程技术只可用于多核处理器"
      },
      {
        "key": "D",
        "text": "SMP 中所有处理器共享单一物理地址空间"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "并行处理技术涉及多种架构和方法，以下是各选项的详细分析：\n\n- 选项$A$：多核处理器（Multi-core Processor）通常属于 MIMD（Multiple Instruction Multiple Data）结构，因为每个核心可以独立执行不同的指令流和处理不同的数据。因此，该叙述是正确的。\n\n- 选项$B$：向量处理器（Vector Processor）通过单条指令对多个数据执行相同操作，属于 SIMD（Single Instruction Multiple Data）结构。因此，该叙述是正确的。\n\n- 选项$C$：硬件多线程技术（Hardware Multithreading）不仅可用于多核处理器，也可用于单核处理器。例如，超线程技术（Hyper-Threading）允许单个物理核心模拟多个逻辑核心。因此，该叙述是不正确的。\n\n- 选项$D$：SMP（Symmetric Multiprocessing）系统中，所有处理器共享单一的物理地址空间，这是 SMP 的主要特征之一。因此，该叙述是正确的。\n\n综上所述，不正确的是选项 $C$。\n\n$C$"
  },
  {
    "id": "q-408-2022-23",
    "subject": "os",
    "knowledgeId": "k-os-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 23,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列关于多道程序系统的叙述中，不正确的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "支持进程的并发执行"
      },
      {
        "key": "B",
        "text": "不必支持虚拟存储管理"
      },
      {
        "key": "C",
        "text": "需要实现对共享资源的管理"
      },
      {
        "key": "D",
        "text": "进程数越多 CPU 利用率越高"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "在多道程序系统中，多个程序可以同时驻留在内存中，通过分时共享 CPU 资源。以下是对各选项的分析：\n\nA. 支持进程的并发执行：多道程序系统通过进程调度实现多个进程的并发执行，这是其核心特性之一。因此该叙述正确。\n\nB. 不必支持虚拟存储管理：多道程序系统可以在没有虚拟存储管理的情况下运行（例如早期的批处理系统），虚拟存储管理是后续技术的扩展。因此该叙述正确。\n\nC. 需要实现对共享资源的管理：多道程序系统中，多个进程共享 CPU、内存、I/O 设备等资源，必须通过同步、互斥等机制管理共享资源。因此该叙述正确。\n\nD. 进程数越多 CPU 利用率越高：虽然增加进程数可以提高 CPU 利用率，但当进程数超过一定限度时，系统开销（如进程切换、资源竞争）会显著增加，反而可能降低 CPU 利用率。因此该叙述不正确。\n\n$D$"
  },
  {
    "id": "q-408-2022-24",
    "subject": "os",
    "knowledgeId": "k-os-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 24,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列选项中，需要在操作系统进行初始化过程中创建的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "中断向量表"
      },
      {
        "key": "B",
        "text": "文件系统的根目录"
      },
      {
        "key": "C",
        "text": "硬盘分区表"
      },
      {
        "key": "D",
        "text": "文件系统的索引结点表"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "在操作系统初始化过程中，需要创建的关键数据结构包括 $中断向量表$ 。中断向量表是操作系统用于管理硬件中断的核心数据结构，它存储了各种中断服务程序（ISR）的入口地址。当硬件触发中断时，CPU 会根据中断号从 $中断向量表$ 中查找对应的 ISR 并执行。\n\n其他选项的解释如下：\n\n- $B. 文件系统的根目录$ 和 $D. 文件系统的索引结点表$ 是文件系统初始化时创建的，属于文件系统管理的范畴，而非操作系统初始化的核心步骤。\n\n- $C. 硬盘分区表$ 是由磁盘分区工具（如 fdisk）创建的，属于磁盘管理层面，不属于操作系统初始化过程。\n\n因此，正确答案是 $A$ 。\n\n$A$"
  },
  {
    "id": "q-408-2022-25",
    "subject": "os",
    "knowledgeId": "k-os-009",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 25,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "进程 $P_{0}$、$P_{1}$、$P_{2}$ 和 $P_{3}$ 进入就绪队列的时刻、优先级（值越小优先权越高）及 CPU 执行时间如下表所示。\n\n进程\n进入就绪队列的时刻\n优先级\nCPU 执行时间\n\n$P_{0}$\n0 ms\n15\n100 ms\n\n$P_{1}$\n10 ms\n20\n60 ms\n\n$P_{2}$\n10 ms\n10\n20 ms\n\n$P_{3}$\n15 ms\n6\n10 ms\n\n若系统采用基于优先权的抢占式进程调度算法，则从 0ms 时刻开始调度，到 4 个进程都运行结束为止，发生进程调度的总次数为（ ）。",
    "options": [
      {
        "key": "A",
        "text": "4"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "7"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "采用抢占式短进程优先调度，每次就绪状态变化后选择剩余运行时间最短的进程。\n\n时间区间\n执行进程\n说明\n\n$0\\sim10$\n$P_0$\n剩余90\n\n$10\\sim15$\n$P_2$\n抢占，剩余15\n\n$15\\sim25$\n$P_3$\n抢占并完成\n\n$25\\sim40$\n$P_2$\n完成剩余15\n\n$40\\sim130$\n$P_0$\n完成剩余90\n\n$130\\sim190$\n$P_1$\n完成\n\n共进行 $6$ 次 CPU 调度，答案为 $C$。"
  },
  {
    "id": "q-408-2022-26",
    "subject": "os",
    "knowledgeId": "k-os-011",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 26,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "系统中有三个进程 $P_{0}$、$P_{1}$、$P_{2}$ 及三类资源 A. B. $C$。若某时刻系统分配资源的情况如下表所示，则此时系统中存在的安全序列的个数为（ ）。",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "2"
      },
      {
        "key": "C",
        "text": "3"
      },
      {
        "key": "D",
        "text": "4"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "初始时系统中的可用资源数为 <1,3,2>，只能满足 $P_{0}$ 的需求 <0,2,1>，所以安全分配序列第一个只能是 $P_{0}$， 将资源分配给 $P_{0}$ 后，$P_{0}$ 执行完释放所占资源，可用资源数变为 <1,3,2> + <2,0,1> = <3,3,3>， 此时可用资源数既能满足 $P_{1}$，也能满足 $P_{2}$，可以先分配给 $P_{1}$，$P_{1}$ 执行完释放资源再分配给 $P_{2}$， 也可以先分配给 $P_{2}$，$P_{2}$ 执行完释放资源再分配给 $P_{1}$。 所以安全序列可以是 ①$P_{0}$、$P_{1}$、$P_{2}$ 或 ②$P_{0}$、$P_{2}$、$P_{1}$",
    "figures": [
      {
        "src": IMG + "q26.png",
        "alt": "题 26 图"
      }
    ]
  },
  {
    "id": "q-408-2022-27",
    "subject": "os",
    "knowledgeId": "k-os-002",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 27,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列关于 CPU 模式的叙述中，正确的是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "CPU 处于用户态时只能执行特权指令"
      },
      {
        "key": "B",
        "text": "CPU 处于内核态时只能执行特权指令"
      },
      {
        "key": "C",
        "text": "CPU 处于用户态时只能执行非特权指令"
      },
      {
        "key": "D",
        "text": "CPU 处于内核态时只能执行非特权指令"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "CPU 的工作模式主要分为用户态（User Mode）和内核态（Kernel Mode），这两种模式的区别在于对系统资源的访问权限不同。\n\n- 用户态（User Mode）：\n\n- CPU 在用户态下运行时，只能执行非特权指令（Non-privileged Instructions）。\n\n- 非特权指令是指那些不会直接访问硬件资源或影响系统整体运行的指令，例如普通的算术运算、逻辑运算等。\n\n- 如果用户态程序尝试执行特权指令（Privileged Instructions），CPU 会触发异常或中断，交由操作系统处理。\n\n- 内核态（Kernel Mode）：\n\n- CPU 在内核态下运行时，可以执行特权指令和非特权指令。\n\n- 特权指令是指那些可以直接访问硬件资源或修改系统关键数据的指令，例如 I/O 操作、内存管理指令等。\n\n- 内核态通常用于运行操作系统的核心代码，具有更高的权限。\n\n根据以上分析：\n\n- 选项 $A$ 错误，因为用户态不能执行特权指令。\n\n- 选项 $B$ 错误，因为内核态可以执行非特权指令。\n\n- 选项 $C$ 正确，用户态只能执行非特权指令。\n\n- 选项 $D$ 错误，因为内核态可以执行特权指令。\n\n$C$"
  },
  {
    "id": "q-408-2022-28",
    "subject": "os",
    "knowledgeId": "k-os-004",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 28,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列事件或操作中，可能导致进程 $P$ 由执行态变为阻塞态的是（ ）。\n\nⅠ. 进程 $P$ 读文件\n\nⅡ. 进程 $P$ 的时间片用完\n\nⅢ. 进程 $P$ 申请外设\n\nⅣ. 进程 $P$ 执行信号量的 wait() 操作",
    "options": [
      {
        "key": "A",
        "text": "仅Ⅰ、Ⅳ"
      },
      {
        "key": "B",
        "text": "仅Ⅱ、Ⅲ"
      },
      {
        "key": "C",
        "text": "仅Ⅲ、Ⅳ"
      },
      {
        "key": "D",
        "text": "仅Ⅰ、Ⅲ、Ⅳ"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "进程的状态转换是操作系统中的重要概念。本题考察从执行态（Running）变为阻塞态（Blocked）的条件。阻塞态通常发生在进程需要等待某个事件或资源时。我们逐一分析每个选项：\n\nI. 进程 $P$ 读文件：读文件属于 I/O 操作，通常需要等待磁盘响应，因此会从 $\\text{执行态}$ 进入 $\\text{阻塞态}$。\n\nII. 进程 $P$ 的时间片用完：时间片用完会导致进程从 $\\text{执行态}$ 进入 $\\text{就绪态}$（Ready），而非阻塞态。\n\nIII. 进程 $P$ 申请外设：申请外设（如打印机）属于 I/O 操作，需要等待资源，因此会进入 $\\text{阻塞态}$。\n\nIV. 进程 $P$ 执行信号量的 wait() 操作：如果信号量 $S \\leq 0$，wait() 操作会导致进程阻塞，进入 $\\text{阻塞态}$。\n\n综上，I、III、IV 会导致进程阻塞，而 II 不会。因此正确答案是 $D$。\n\n$D$"
  },
  {
    "id": "q-408-2022-29",
    "subject": "os",
    "knowledgeId": "k-os-013",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 29,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "某进程访问的页 $b$ 不在内存中，导致产生缺页异常，该缺页异常处理过程中不一定包含的操作是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "淘汰内存中的页"
      },
      {
        "key": "B",
        "text": "建立页号与页框号的对应关系"
      },
      {
        "key": "C",
        "text": "将页 $b$ 从外存读入内存"
      },
      {
        "key": "D",
        "text": "修改页表中页 $b$ 对应的存在位"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "缺页异常处理过程通常包含以下步骤：\n\n- 操作系统需要 建立页号与页框号的对应关系（对应选项 $B$），即在页表中为页 $b$ 分配一个页框。\n\n- 将页 $b$ 从外存读入内存（对应选项 $C$），这是缺页异常处理的核心操作。\n\n- 修改页表中页 $b$ 对应的存在位（对应选项 $D$），将其标记为已加载到内存中。\n\n然而，淘汰内存中的页（选项 $A$）并不一定总是发生。只有在内存中没有空闲页框时，才需要通过页面置换算法淘汰一个页面以腾出空间。如果内存中有空闲页框，则无需淘汰页面。因此，选项 $A$ 是缺页异常处理过程中不一定包含的操作。\n\n$A$"
  },
  {
    "id": "q-408-2022-30",
    "subject": "os",
    "knowledgeId": "k-os-016",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 30,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列选项中，不会影响系统缺页率的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "页置换算法"
      },
      {
        "key": "B",
        "text": "工作集的大小"
      },
      {
        "key": "C",
        "text": "进程的数量"
      },
      {
        "key": "D",
        "text": "页缓冲队列的长度"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "页面置换算法、工作集大小及进程数量都会影响缺页率。页缓冲队列缓存被淘汰但尚未覆盖的页面，影响缺页后的处理速度和磁盘读写开销；按本题的缺页统计口径，其长度不改变是否发生缺页的判定。因此选 $D$。"
  },
  {
    "id": "q-408-2022-31",
    "subject": "os",
    "knowledgeId": "k-os-002",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 31,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "执行系统调用的过程涉及下列操作，其中由操作系统完成的是（ ）。\n\nⅠ. 保存断点和程序状态字\n\nⅡ. 保存通用寄存器的内容\n\nⅢ. 执行系统调用服务程序\n\nⅣ. 将 CPU 模式改为内核态",
    "options": [
      {
        "key": "A",
        "text": "仅Ⅰ、Ⅲ"
      },
      {
        "key": "B",
        "text": "仅Ⅱ、Ⅲ"
      },
      {
        "key": "C",
        "text": "仅Ⅱ、Ⅳ"
      },
      {
        "key": "D",
        "text": "仅Ⅱ、Ⅲ、Ⅳ"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "在执行系统调用的过程中，操作系统的职责和用户程序的职责需要明确区分。具体分析如下：\n\n- 保存断点和程序状态字（I）：这是由硬件（如中断机制）自动完成的，不属于操作系统的职责。硬件会在中断发生时自动保存当前的程序计数器 $PC$ 和程序状态字 $PSW$。\n\n- 保存通用寄存器的内容（II）：这是由操作系统完成的。操作系统需要保存用户程序的上下文（包括通用寄存器），以便在系统调用结束后恢复用户程序的执行状态。\n\n- 执行系统调用服务例程（III）：这是操作系统的核心功能。操作系统根据系统调用号执行相应的服务例程，完成用户请求的功能。\n\n- 将 CPU 模式改为内核态（IV）：这是由硬件自动完成的。当触发系统调用或中断时，硬件会自动将 CPU 模式从用户态切换到内核态。\n\n因此，由操作系统完成的操作是 II 和 III。\n\n$B$"
  },
  {
    "id": "q-408-2022-32",
    "subject": "os",
    "knowledgeId": "k-os-023",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 32,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下列关于驱动程序的叙述中，不正确的是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "驱动程序与 I/O 控制方式无关"
      },
      {
        "key": "B",
        "text": "初始化设备是由驱动程序控制完成的"
      },
      {
        "key": "C",
        "text": "进程在执行驱动程序时可能进入阻塞态"
      },
      {
        "key": "D",
        "text": "读/写设备的操作是由驱动程序控制完成的"
      }
    ],
    "answer": [
      "A"
    ],
    "explain": "驱动程序是操作系统与硬件设备之间的桥梁，负责管理和控制设备的操作。关于选项的具体分析如下：\n\n- 选项$A$：驱动程序与 I/O 控制方式密切相关。不同的 I/O 控制方式（如程序控制 I/O、中断驱动 I/O、DMA 等）需要驱动程序进行相应的处理。因此，驱动程序的设计和实现会受到 I/O 控制方式的影响，该叙述不正确。\n\n- 选项$B$：初始化设备通常由驱动程序控制完成。驱动程序在设备启动或系统初始化时，会配置设备的寄存器、分配资源等，确保设备处于就绪状态。该叙述正确。\n\n- 选项$C$：进程在执行驱动程序时可能因等待 I/O 操作完成而进入阻塞态。例如，当设备繁忙或数据未就绪时，进程会被阻塞。该叙述正确。\n\n- 选项$D$：读/写设备的操作由驱动程序控制完成。驱动程序负责将用户或内核的请求转换为设备能够理解的命令，并管理数据的传输。该叙述正确。\n\n综上所述，不正确的是选项$A$。\n\n$A$"
  },
  {
    "id": "q-408-2022-33",
    "subject": "cn",
    "knowledgeId": "k-cn-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 33,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "在 ISO/OSI 参考模型中，实现两个相邻结点间流量控制功能的是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "物理层"
      },
      {
        "key": "B",
        "text": "数据链路层"
      },
      {
        "key": "C",
        "text": "网络层"
      },
      {
        "key": "D",
        "text": "传输层"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "在 ISO/OSI 参考模型中，数据链路层（Data Link Layer）负责实现两个相邻结点间的流量控制功能。具体分析如下：\n\n- 物理层（Physical Layer）：主要负责比特流的传输，不涉及流量控制。\n\n- 数据链路层（Data Link Layer）：主要功能包括：\n\n- 帧的封装与解封装\n\n- 差错控制（如 CRC 校验）\n\n- 流量控制（通过滑动窗口协议等技术实现相邻结点间的数据传输速率匹配）\n\n- 介质访问控制（MAC）\n\n- 网络层（Network Layer）：主要负责路由选择和分组转发，实现的是端到端的通信，而非相邻结点间的流量控制。\n\n- 传输层（Transport Layer）：提供端到端的流量控制，但这是针对通信的两个主机之间，而非相邻结点。\n\n因此，实现两个相邻结点间流量控制功能的是数据链路层。\n\n$B$"
  },
  {
    "id": "q-408-2022-34",
    "subject": "cn",
    "knowledgeId": "k-cn-002",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 34,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "在一条带宽为 200 kHz 的无噪声信道上，若采用 4 个幅值的 ASK 调制，则该信道的最大数据传输速率是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "200kbps"
      },
      {
        "key": "B",
        "text": "400kbps"
      },
      {
        "key": "C",
        "text": "800kbps"
      },
      {
        "key": "D",
        "text": "1600kbps"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "在无噪声信道中，最大数据传输速率可以通过奈奎斯特公式计算：\n\n$C = 2B \\log_2 V$\n\n其中：\n\n- $C$ 是最大数据传输速率（单位：bps）\n\n- $B$ 是信道带宽（单位：Hz）\n\n- $V$ 是调制电平数（即幅值的数量）\n\n题目中给出的参数为：\n\n- 带宽 $B = 200 \\text{ kHz} = 200,000 \\text{ Hz}$\n\n- 幅值数量 $V = 4$（因为采用 4 个幅值的 ASK 调制）\n\n将数值代入公式：\n\n$C = 2 \\times 200,000 \\times \\log_2 4$\n\n计算 $\\log_2 4$：\n\n$\\log_2 4 = 2$\n\n因此：\n\n$C = 2 \\times 200,000 \\times 2 = 800,000 \\text{ bps} = 800 \\text{ kbps}$\n\n$C$"
  },
  {
    "id": "q-408-2022-35",
    "subject": "cn",
    "knowledgeId": "k-cn-009",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 35,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "若某主机的 IP 地址是 183.80.72.48，子网掩码是 255.255.192.0，则该主机所在网络的网络地址是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "183.80.0.0"
      },
      {
        "key": "B",
        "text": "183.80.64.0"
      },
      {
        "key": "C",
        "text": "183.80.72.0"
      },
      {
        "key": "D",
        "text": "183.80.192.0"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "要计算该主机所在网络的网络地址，需要将 IP 地址和子网掩码进行按位与运算。具体步骤如下：\n\n- 将 IP 地址 $183.80.72.48$ 和子网掩码 $255.255.192.0$ 转换为二进制形式：\n\n- IP 地址 $183.80.72.48$ 的二进制表示：\n\n- $183$ 的二进制：$10110111$\n\n- $80$ 的二进制：$01010000$\n\n- $72$ 的二进制：$01001000$\n\n- $48$ 的二进制：$00110000$\n\n完整二进制形式：$10110111.01010000.01001000.00110000$\n\n- 子网掩码 $255.255.192.0$ 的二进制表示：\n\n- $255$ 的二进制：$11111111$\n\n- $255$ 的二进制：$11111111$\n\n- $192$ 的二进制：$11000000$\n\n- $0$ 的二进制：$00000000$\n\n完整二进制形式：$11111111.11111111.11000000.00000000$\n\n- 对 IP 地址和子网掩码进行按位与运算：\n\n- 按位与运算规则：$1 \\& 1 = 1$，其他情况为 $0$。\n\n- 运算结果：\n\n- 第一字节：$10110111 \\& 11111111 = 10110111$（$183$）\n\n- 第二字节：$01010000 \\& 11111111 = 01010000$（$80$）\n\n- 第三字节：$01001000 \\& 11000000 = 01000000$（$64$）\n\n- 第四字节：$00110000 \\& 00000000 = 00000000$（$0$）\n\n- 将运算结果转换为十进制形式：\n\n- 网络地址为：$183.80.64.0$。\n\n因此，正确答案是 $183.80.64.0$。\n\n$B$"
  },
  {
    "id": "q-408-2022-36",
    "subject": "cn",
    "knowledgeId": "k-cn-011",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 36,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "下图所示网络中的主机 $H$ 的子网掩码与默认网关分别是（ ）。",
    "options": [
      {
        "key": "A",
        "text": "255.255.255.192, 192.168.1.1"
      },
      {
        "key": "B",
        "text": "255.255.255.192, 192.168.1.62"
      },
      {
        "key": "C",
        "text": "255.255.255.224, 192.168.1.1"
      },
      {
        "key": "D",
        "text": "255.255.255.224, 192.168.1.62"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "默认网关可以理解为离当前主机最近的路由器的端口地址，所以是 192.168.1.62， 而该主机的子网掩码和网关的子网掩码也相同，/27 即为 255.255.255.224。",
    "figures": [
      {
        "src": IMG + "q36.png",
        "alt": "题 36 图"
      }
    ]
  },
  {
    "id": "q-408-2022-37",
    "subject": "cn",
    "knowledgeId": "k-cn-001",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 37,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "在 SDN 网络体系结构中，SDN 控制器向数据平面的 SDN 交换机下发流表时所使用的接口是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "东向接口"
      },
      {
        "key": "B",
        "text": "南向接口"
      },
      {
        "key": "C",
        "text": "西向接口"
      },
      {
        "key": "D",
        "text": "北向接口"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "在 SDN（软件定义网络）体系结构中，网络被分为三个主要平面：数据平面、控制平面和应用平面。各平面之间的通信通过特定接口实现：\n\n- 南向接口（Southbound Interface）：负责 SDN 控制器与数据平面设备（如 SDN 交换机）之间的通信。控制器通过南向接口向交换机下发流表（Flow Table），指导数据包的转发行为。常见的南向接口协议包括 OpenFlow、NETCONF 等。\n\n- 北向接口（Northbound Interface）：位于控制平面与应用平面之间，为上层应用程序提供编程接口，例如 RESTful API。\n\n- 东向接口（Eastbound Interface） 和 西向接口（Westbound Interface）：主要用于多个 SDN 控制器之间的协同通信，不属于题目描述的场景。\n\n题目中明确提到“控制器向数据平面的交换机下发流表”，因此正确答案是 南向接口。\n\n$B$"
  },
  {
    "id": "q-408-2022-38",
    "subject": "cn",
    "knowledgeId": "k-cn-018",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 38,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "假设主机甲和主机乙已建立一个 TCP 连接，最大段长 MSS = 1KB,甲一直有数据向乙发送，当甲的拥塞窗口为 16KB 时，计时器发生了超时，则甲的拥塞窗口再次增长到 16KB 所需要的时间至少是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "4RTT"
      },
      {
        "key": "B",
        "text": "5RTT"
      },
      {
        "key": "C",
        "text": "11RTT"
      },
      {
        "key": "D",
        "text": "16RTT"
      }
    ],
    "answer": [
      "C"
    ],
    "explain": "当 TCP 连接发生超时，拥塞控制算法会采取以下步骤：\n\n- 首先，将慢启动阈值 $ssthresh$ 设置为当前拥塞窗口的一半，即 $ssthresh = \\frac{16KB}{2} = 8KB$。\n\n- 然后将拥塞窗口 $cwnd$ 重置为 1 个 MSS（即 $1KB$），进入慢启动阶段。\n\n- 在慢启动阶段，每经过一个 $RTT$，$cwnd$ 会指数增长（乘以 2），直到 $cwnd$ 达到 $ssthresh$：\n\n- 第 1 个 $RTT$ 后：$cwnd = 2KB$\n\n- 第 2 个 $RTT$ 后：$cwnd = 4KB$\n\n- 第 3 个 $RTT$ 后：$cwnd = 8KB$（达到 $ssthresh$）\n\n- 之后进入拥塞避免阶段，每经过一个 $RTT$，$cwnd$ 线性增长 1 个 MSS（即 $1KB$），直到 $cwnd$ 增长到 $16KB$：\n\n- 第 4 个 $RTT$ 后：$cwnd = 9KB$\n\n- 第 5 个 $RTT$ 后：$cwnd = 10KB$\n\n- 第 6 个 $RTT$ 后：$cwnd = 11KB$\n\n- 第 7 个 $RTT$ 后：$cwnd = 12KB$\n\n- 第 8 个 $RTT$ 后：$cwnd = 13KB$\n\n- 第 9 个 $RTT$ 后：$cwnd = 14KB$\n\n- 第 10 个 $RTT$ 后：$cwnd = 15KB$\n\n- 第 11 个 $RTT$ 后：$cwnd = 16KB$\n\n因此，从超时发生到 $cwnd$ 再次增长到 $16KB$，至少需要 $11RTT$。\n\n$C$"
  },
  {
    "id": "q-408-2022-39",
    "subject": "cn",
    "knowledgeId": "k-cn-016",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 39,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "假设客户 $C$ 和服务器 $S$ 已建立一个 TCP 连接，通信往返时间 RTT=50ms，最长报文段寿命 MSL= 800ms，数据传输结束后，$C$ 主动请求断开连接。若从 $C$ 主动向 $S$ 发出 FIN 段时刻算起，则 $C$和 $S$ 进入 CLOSED 状态所需的时间至少分别是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "850ms，50ms"
      },
      {
        "key": "B",
        "text": "1650ms, 50ms"
      },
      {
        "key": "C",
        "text": "850ms, 75ms"
      },
      {
        "key": "D",
        "text": "1650ms, 75ms"
      }
    ],
    "answer": [
      "D"
    ],
    "explain": "单向传播时延为 $25\\mathrm{ms}$。客户端 $C$ 在 $t=0$ 发送 FIN；服务器 $S$ 在 $25\\mathrm{ms}$ 收到后立即发送 ACK 和 FIN；$C$ 在 $50\\mathrm{ms}$ 收到并发送最后的 ACK，同时进入 TIME_WAIT；$S$ 在 $75\\mathrm{ms}$ 收到 ACK 后关闭。\n\n$C$ 的 TIME_WAIT 持续 $2\\mathrm{MSL}=1600\\mathrm{ms}$，所以 $C$ 在 $50+1600=1650\\mathrm{ms}$ 关闭，$S$ 在 $75\\mathrm{ms}$ 关闭，答案为 $D$。"
  },
  {
    "id": "q-408-2022-40",
    "subject": "cn",
    "knowledgeId": "k-cn-020",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 40,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "single",
    "difficulty": 2,
    "score": 2,
    "stem": "假设主机 $H$ 通过 HTTP/1.1 请求浏览某 Web 服务器 $S$ 上的 Web 页 news408.html，news408 引用了同目录下的 1 幅图像，news408.html 文件大小为 1MSS（最大段长），图像文件大小为 3MSS，$H$ 访问 $S$ 的往返时间 RTT=10ms，忽略 HTTP 响应报文的首部开销和 TCP 段传输时延。若 $H$ 已完成域名解析，则从 $H$ 请求与 $S$ 建立 TCP 连接时刻起，到接收到全部内容止，所需的时间至少是（    ）。",
    "options": [
      {
        "key": "A",
        "text": "30ms"
      },
      {
        "key": "B",
        "text": "40ms"
      },
      {
        "key": "C",
        "text": "50ms"
      },
      {
        "key": "D",
        "text": "60ms"
      }
    ],
    "answer": [
      "B"
    ],
    "explain": "使用持久 HTTP 连接，按题设初始拥塞窗口为一个 MSS、慢开始且不计传输时延：\n\n- 第一个 RTT 建立 TCP 连接，第三次握手可同时携带 HTTP 请求。\n\n- 第二个 RTT 取得一个 MSS 的 HTML 文档。\n\n- 第三个 RTT 取得图像的前两个 MSS。\n\n- 第四个 RTT 取得图像剩余一个 MSS。\n\n总时间为 $4\\times10\\mathrm{ms}=40\\mathrm{ms}$，答案为 $B$。TCP 握手最后的 ACK 可携带请求，因此无需单独再计一个往返。"
  },
  {
    "id": "q-408-2022-41",
    "subject": "ds",
    "knowledgeId": "k-ds-018",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 41,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 13,
    "stem": "已知非空二叉树 $T$ 的结点值均为正整数，采用顺序存储方式保存，数据结构定义如下：\n\n```c\ntypedef struct {                    // MAX_SIZE 为已定义常量\nElemtype SqBiTNode[MAX_SIZE];   // 保存二叉树结点值的数组\nint ElemNum;                    // 实际占用的数组元素个数\n}SqBiTree;\n```\n\n$T$ 中不存在的结点在数组 SqBiTNode 中用 -1 表示。例如，对于下图所示的两棵非空二叉树 $T_{1}$ 和 $T_{2}$：\n\n\n$T_{1}$ 的存储结果如下：\n\n\n$T_{2}$ 的存储结果如下：\n\n\n（图中 $T_1.\\mathrm{ElemNum}=11$ 的标注应为 $T_2.\\mathrm{ElemNum}=11$。）\n\n请设计一个尽可能高效的算法，判定一棵采用这种方式存储的二叉树是否为二叉搜索树，若是，则返回 true，否则，返回 false，要求：\n\n(1) 给出算法的基本设计思想。\n\n(2) 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。",
    "referenceAnswer": "（1）二叉搜索树的中序序列严格递增。按顺序存储的下标规则递归访问左子树、当前结点、右子树，并用 $\\mathrm{prev}$ 保存前一个值。题给结点值均为正整数，可令初始 prev=0；遇到当前值不大于 $\\mathrm{prev}$ 即返回false。空结点应在递归前判断。\n\n（2）实现如下：\n\n```c\nbool checkBST(const SqBiTree *tree, int k, int &prev) {\nif (k >= tree->ElemNum || tree->SqBiTNode[k] == -1) return true;\nif (!checkBST(tree, 2*k+1, prev)) return false;\nif (tree->SqBiTNode[k] <= prev) return false;\nprev = tree->SqBiTNode[k];\nreturn checkBST(tree, 2*k+2, prev);\n}\nbool isBST(const SqBiTree *tree) {\nint prev = 0;\nreturn checkBST(tree, 0, prev);\n}\n```\n\n每个存在结点访问一次，时间 $O(n)$；递归辅助空间为 $O(h)$，其中 $h$ 为树高。",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 13
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。",
    "figures": [
      {
        "src": IMG + "q41a.png",
        "alt": "题 41 图（1/3）"
      },
      {
        "src": IMG + "q41b.png",
        "alt": "题 41 图（2/3）"
      },
      {
        "src": IMG + "q41c.png",
        "alt": "题 41 图（3/3）"
      }
    ]
  },
  {
    "id": "q-408-2022-42",
    "subject": "ds",
    "knowledgeId": "k-ds-022",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 42,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 10,
    "stem": "现有 $n$（$n$＞100000）个数保存在一维数组 $M$ 中，需要查找 $M$ 中最小的 10 个数，请回答下列问题：\n\n（1）设计一个完成上述查找任务的算法，要求平均情况下的比较次数尽可能少，简述算法思想（不需要程序实现）\n\n（2）说明你所设计的算法平均情况下的时间复杂度和空间复杂度",
    "referenceAnswer": "【答案 1】\n\n定义含 10 个元素的数组 $A$，初始时元素值均为该数组类型能表示的最大数 $MAX$。\n\nfor M 中的每个元素 s\nif (s < A[9]) 丢弃 A[9]并将 s 按升序插入到 A 中；\n\n当数据全部扫描完毕，数组 $A[0]$~$A[9]$保存的即是最小的 10 个数。\n\n【答案 2】\n\n定义含 10 个元素的大根堆 $H$，元素值均为该堆元素类型能表示的最大数 $MAX$。\n\nfor M 中的每个元素 s\nif (s < H 的堆顶元素)\n删除堆顶元素并将 s 插入到 H 中；\n\n当数据全部扫描完毕，堆 $H$ 中保存的即是最小的 10 个数。\n\n2)算法平均情况下的时间复杂度是$O(n)$,空间复杂度是$O(1)$。",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 10
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。"
  },
  {
    "id": "q-408-2022-43",
    "subject": "co",
    "knowledgeId": "k-co-018",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 43,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 15,
    "stem": "某 CPU 中部分数据通路如图所示，其中，GPRs 为通用寄存器组；FR 为标志寄存器，用于存放 ALU 产生的标志信息；带箭头虚线表示控制信号，如控制信号 ReaD. Write 分别表示主存读、主存写，MDRin 表示内部总线上数据写入 MDR，MDRout 表示 MDR 的内容送内部总线。\n\n\n(1) ALU 的输入端 A. $B$ 及输出端 $F$ 的最高位分别为 A15 、 B15 及 $F_{15}$ ，FR 中的符号标志和溢出标志分别为 SF 和 OF，则 SF 的逻辑表达式是什么？$A$ 加 B. $A$ 减 $B$ 时 OF 的逻辑表达式分别是什么？要求逻辑表达式的输入变量为 A15、B15 及 $F_{15}$ 。\n\n(2) 为什么要设置暂存器 $Y$ 和 $Z$？\n\n(3) 若 GPRs 的输入端 $\\mathrm{rs}$、$\\mathrm{rd}$ 分别为所读、写的通用寄存器的编号，则 GPRs 中最多有多少个通用寄存器？$\\mathrm{rs}$ 和 $\\mathrm{rd}$ 来自图中的哪个寄存器？已知 GPRs 内部有一个地址译码器和一个多路选择器，$\\mathrm{rd}$ 应该连接地址译码器还是多路选择器？\n\n(4) 取指令阶段（不考虑 PC 增量操作）的控制信号序列是什么？若从发出主存读命令到主存读出数据并传送到 MDR 共需 5 个时钟周期，则取指令阶段至少需要几个时钟周期？\n\n(5) 图中控制信号由什么部件产生？图中哪些寄存器的输出信号会连到该部件的输入端？",
    "referenceAnswer": "1）符号标志 $SF$ 表示运算结果的正负性，因此 $SF = F_{15}$。\n\n对于加法运算 $A + B \\rightarrow F$，若 $A$、$B$ 为负，且 $F$ 为正，则说明发生溢出；或者，若 $A$、$B$ 为正，且 $F$ 为负，也说明发生溢出。因此，加运算时，溢出标志 $OF = \\overline{A_{15}} \\cdot \\overline{B_{15}} \\cdot F_{15} + A_{15} \\cdot B_{15} \\cdot \\overline{F_{15}}$。\n\n对于减法运算 $A - B \\rightarrow F$，若 $A$ 为负、$B$ 为正，且 $F$ 为正，则说明发生溢出；或者，若 $A$ 为正、$B$ 为负，且 $F$ 为负，也说明发生溢出。因此，减运算时，溢出标志 $OF = \\overline{A_{15}} \\cdot B_{15} \\cdot F_{15} + A_{15} \\cdot \\overline{B_{15}} \\cdot \\overline{F_{15}}$。\n\n2）因为在单总线结构中，每一时刻总线上只有一个数据有效，而 $ALU$ 有两个输入端和一个输出端。因此，当 $ALU$ 运算时，需要先用暂存器 $Y$ 缓存其中一个输入端的数据，再通过总线传送另一个输入端的数据。与此同时，$ALU$ 的输出端产生运算结果，但由于总线正被占用，因此需要暂存器 $Z$，以缓存 $ALU$ 的输出端数据。\n\n3）由图可知，$rs$ 和 $rd$ 都是 4bit，因此 $GPRs$ 中最多有 $2^{4} = 16$ 个通用寄存器；$rs$ 和 $rd$ 来自指令寄存器 $IR$；$rd$ 表示寄存器编号，应连接地址译码器。\n\n4）取指阶段需要根据程序计数器 $PC$ 取出主存中的指令，并将指令写入指令寄存器 $IR$ 中。控制信号序列如下：\n\n① $PC_{out}, MAR_{in}$ // 将指令的地址写入 $MAR$\n\n② $Read$ // 读主存，并将读出的数据写入 $MDR$\n\n③ $MDR_{out}, IR_{in}$ // 将 $MDR$ 的内容写入指令寄存器 $IR$\n\n步骤①需要 1 个时钟周期，步骤②需要 5 个时钟周期，步骤③需要 1 个时钟周期，因此取指令阶段至少需要 7 个时钟周期。\n\n5）图中控制信号由控制部件（$CU$）产生。指令寄存器 $IR$ 和标志寄存器 $FR$ 的输出信号会连到控制部件的输入端。",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 15
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。",
    "figures": [
      {
        "src": IMG + "q43.png",
        "alt": "题 43 图"
      }
    ]
  },
  {
    "id": "q-408-2022-44",
    "subject": "co",
    "knowledgeId": "k-co-022",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 44,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 8,
    "stem": "假设某磁盘驱动器中有 4 个双面盘片，每个盘面有 20000 个磁道，每个磁道有 500 个扇区，每个扇区可记录 512 字节的数据，盘片转速为 7200RPM（转/分），平均寻道时间为 5ms。请回答下列问题。\n\n（1）每个扇区包含数据及其地址信息，地址信息分为 3 个字段。这 3 个字段的名称各是什么？对于该磁盘，各字段至少占多少位？\n\n（2）一个扇区的平均访问时间约为多少？\n\n（3）若采用周期挪用 DMA 方式进行磁盘与主机之间的数据传送，磁盘控制器中的数据缓冲区大小为 64 位，则在一个扇区读写过程中，DMA 控制器向 CPU 发送了多少次总线请求？若 CPU检测到 DMA 控制器的总线请求信号时也需要访问主存，则 DMA 控制器是否可以获得总线使用权？为什么？",
    "referenceAnswer": "1）3 个字段的名称为柱面号（或磁道号）、磁头号（或盘面号）、扇区号。由于每个盘面有 20000 个磁道，因此该磁盘共有 20000 个柱面，柱面号字段至少占 $\\lceil \\log_{2}20000 \\rceil = 15$ 位；由于该磁盘共有 4 个盘片，每个盘片有 2 个盘面，因此磁头号字段至少占 $\\log_{2}(4 \\times 2) = 3$ 位；由于每个磁道有 500 个扇区，因此扇区号字段至少占 $\\lceil \\log_{2}500 \\rceil = 9$ 位。\n\n2）一个扇区的访问时间由寻道时间、延迟时间、传输时间三部分组成。平均寻道时间为 5ms，平均延迟时间等于磁盘转半圈所需要的时间，平均传输时间等于一个扇区划过磁头下方所需要的时间。而该磁盘转一圈的时间为 $60 \\times 10^{3}/7200 \\approx 8.33$ ms，因此一个扇区的平均访问时间约为 $5 + 8.33/2 + 8.33/500 \\approx 9.18$ ms。\n\n3）磁盘控制器中的数据缓冲区每充满一次，DMA 控制器就需要发出一次总线请求，将这 64bit 数据通过总线传送到主存，因此，在一个扇区读写过程中，DMA 控制器向 CPU 发送了 $(512B × 8bit/B)/64bit = 64$ 次总线请求。由于采用周期挪用 DMA 方式，因此当 CPU 和 DMA 控制器都需要访问主存时，DMA 控制器可以优先获得总线使用权。因为一旦磁盘开始读写，就必须按时完成数据传送，否则数据缓冲区中的数据会发生丢失。",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 8
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。"
  },
  {
    "id": "q-408-2022-45",
    "subject": "os",
    "knowledgeId": "k-os-019",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 45,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 7,
    "stem": "某文件系统的磁盘块大小为 4KB，目录项由文件名和索引节点号构成，每个索引节点占 256 字节，其中包含直接地址项 10 个，一级、二级和三级间接地址项各 1 个，每个地址项占 4 字节。该文件系统中子目录 stu 的结构如题 45($a$) 图所示，stu 包含子目录 course 和文件 doc，course 子目录包含文件 course1 和 course2。各文件的文件名、索引节点号、占用磁盘块的块号如题 45($b$) 图所示。\n\n\n\n请回答下列问题。\n\n(1) 目录文件 stu 中每个目录项的内容是什么？\n\n(2) 文件 doc 占用的磁盘块的块号 $x$ 的值是多少？\n\n(3) 若目录文件 course 的内容已在内存，则打开文件 course1 并将其读入内存，需要读几个磁盘块？说明理由。\n\n(4) 若文件 course2 的大小增长到 6MB，为了存取 course2 需要使用该文件索引节点的哪几级间接地址项？说明理由。",
    "referenceAnswer": "1）在该文件系统中，目录项由文件名和索引结点号构成。由图 $a$ 可知，stu 目录下有两个文 件，分别是 course 和 doc。由图 $b$ 可知，这两个文件分别对应索引结点号 2 和 10。因此， 目录文件 stu 中两个目录项的内容是\n\n文件名\n索引结点号\n\ncourse\n2\n\ndoc\n10\n\n2）由图 $b$ 可知，文件 doc 和文件 course1 对应的索引结点号都是 10。说明 doc 和 course1 两 个目录项共享同一个索引结点，本质上对应同一个文件。而文件 course1 存储在 30 号磁盘 块，因此文件 doc 占用的磁盘块的块号 $x$ 为 30。\n\n3）需要读 2 个磁盘块。先读 course1 的索引结点所在的磁盘块，再读 course1 的内容所在的 磁盘块。目录文件 course 的内容已在内存中，即 coursel、course2 对应的目录项己在内存 中，根据 coursel 对应的目录项可以知道其索引结点号，即可读入 course1 的索引结点所 在的磁盘块：根据 course1 的索引结点可知该文件存储在 30 号磁盘块，因此可再读入 coursel 的内容所在的磁盘块。\n\n4）存取 course2 需要使用索引结点的一级和二级间接地址项。6MB 大小的文件需要占用 6MB/4KB=1536 个磁盘块。直接地址项可以记录 10 个磁盘块号，一级间接地址块可以记 录 4KB/4B=1024 个磁盘块号，二级间接地址块可以记录 1024×1024 个磁盘块号，而 $10 + 1024 < 1536 < 10 + 1024 + 1024 \\times  1024$ 。因此，6MB 大小的文件，需要使用一级间接地址 项和二级间接地址项（拓展：若文件的总大小超出 $10 + 1024 + 1024 \\times  1024$ 块，则还需使 用三级间接地址项）。",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 7
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。",
    "figures": [
      {
        "src": IMG + "q45a.png",
        "alt": "题 45 图（1/2）"
      },
      {
        "src": IMG + "q45b.png",
        "alt": "题 45 图（2/2）"
      }
    ]
  },
  {
    "id": "q-408-2022-46",
    "subject": "os",
    "knowledgeId": "k-os-006",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 46,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 8,
    "stem": "某进程的两个线程 $T_{1}$ 和 $T_{2}$ 并发执行 A. B. C. D. $E$ 和 $F$ 共 6 个操作，其中 $T_{1}$ 执行 A. $E$ 和 $F$，$T_{2}$ 执行 B. $C$ 和 $D$。题 46 图表示上述 6 个操作的执行顺序所必须满足的约束：$C$ 在 $A$ 和 $B$ 完成后执行，$D$ 和 $E$ 在 $C$ 完成后执行，$F$ 在 $E$ 完成后执行。请使用信号量的 wait()、signal() 操作描述 $T_{1}$ 和 $T_{2}$ 之间的同步关系，并说明所用信号量的作用及其初值。",
    "referenceAnswer": "进程 $T_{1}$ 要依次执行 $A$、$E$、$F$。进程 $T_{2}$ 要执行 $B$、$C$、$D$。由图可知，$T_{2}$ 执行 $C$ 必须在 $T_{1}$ 执行完 $A$ 之后；$T_{1}$ 执行 $E$ 必须在 $T_{2}$ 执行完 $C$ 之后。因此，有两对同步关系。信号量的定义和同步关系的描述如下：\n\n```c\nsemaphore AC = 0;\nsemaphore CE = 0;\n\nT1() {\nA;\nsignal(AC);\nwait(CE);\nE;\nF;\n}\n```\n\nT2() {\nB;\nwait(AC);\nC;\nsignal(CE);\nD;\n}",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 8
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。",
    "figures": [
      {
        "src": IMG + "q46.png",
        "alt": "题 46 图"
      }
    ]
  },
  {
    "id": "q-408-2022-47",
    "subject": "cn",
    "knowledgeId": "k-cn-007",
    "paperId": "paper-2022-408",
    "paperOnly": true,
    "year": 2022,
    "number": 47,
    "source": "real",
    "sourceName": "2022 年 408 统考原卷（公开网络版）",
    "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
    "type": "subjective",
    "difficulty": 3,
    "score": 9,
    "stem": "某网络拓扑如题 47 图所示，$R$ 为路由器，$S$ 为以太网交换机，AP 是 802.11 接入点，路由器的 E0 接口和 DHCP 服务器的 IP 地址配置如图中所示；$H_{1}$ 与 $H_{2}$ 属于同一个广播域，但不属于同一个冲突域；$H_{2}$ 和 $H_{3}$ 属于同一个冲突域；$H_{4}$ 和 $H_{5}$ 已经接入网络，并通过 DHCP 动态获取了 IP 地址。现有路由器、100BaseT 以太网交换机和 100BaseT 集线器 (Hub) 三类设备各若干台。\n\n\n请回答下列问题。\n\n- 设备 1 和设备 2 应该分别选择哪类设备？\n\n- 若信号传播速度为 2x10⁸ $m$/$s$, 以太网最小帧长为 64 $B$, 信号通过设备 2 时会产生额外的 1.51 µ$s$ 的时间延迟，则 $H_{2}$ 与 $H_{3}$ 之间可以相距的最远距离是多少？\n\n- 在 $H_{4}$ 通过 DHCP 动态获取 IP 地址过程中，$H_{4}$ 首先发送了 DHCP 报文 $M,M$ 是哪种 DHCP 报文？路由器 E0 接口能否收到封装 $M$ 的以太网帧？$S$ 向 DHCP 服务器转发的封装 $M$ 的以太网帧的目的 MAC 地址是什么？\n\n- 若 $H_{4}$ 向 $H_{5}$ 发送一个 1P 分组 $P$, 则 $H_{5}$ 收到的封装 $P$ 的 802.11 帧的地址 1、地址 2 和地址 3 分别是什么？",
    "referenceAnswer": "（1）设备1选100BaseT以太网交换机，隔离冲突域但保持广播域；设备2选100BaseT集线器，使$H_{2}$、$H_{3}$处在同一个冲突域。\n\n（2）以太网使用 CSMA/CD。最短帧的发送时间应不小于最坏情况下冲突信号的往返传播时延。设双绞线长度为 $D$，集线器单向转发时延为 $1.51\\mu\\mathrm{s}$，则\n\n$$\n\\frac{64\\times8}{100\\times10^6}=2\\left(1.51\\times10^{-6}+\\frac{D}{2\\times10^8}\\right).\n$$\n\n由此得到 $D=210\\mathrm{m}$。\n\n（3）$M$ 为 DHCP Discover 发现报文。它以广播方式发送，路由器E0接口可以收到其以太网帧；$S$转发帧的目的MAC地址为 FF-FF-FF-FF-FF-FF。\n\n（4）AP向$H_{5}$发送的802.11帧中，地址1为接收端$H_{5}$的 00-11-11-11-11-E1，地址2为AP的 00-11-11-11-11-C1，地址3为原发送端$H_{4}$的 00-11-11-11-11-D1。",
    "rubric": [
      {
        "text": "对照参考答案，按要点覆盖程度自评",
        "points": 9
      }
    ],
    "explain": "按参考答案中的关键结论与推导过程自评得分比例。",
    "figures": [
      {
        "src": IMG + "q47.png",
        "alt": "题 47 图"
      }
    ]
  }
]

export const paper2022_408 = {
  "id": "paper-2022-408",
  "year": 2022,
  "title": "2022 年全国硕士研究生招生考试 408 计算机学科专业基础",
  "short": "2022 408 原卷",
  "group": "408",
  "subjects": [
    "ds",
    "co",
    "os",
    "cn"
  ],
  "durationMin": 180,
  "totalScore": 150,
  "questionCount": 47,
  "qids": [
    "q-408-2022-01",
    "q-408-2022-02",
    "q-408-2022-03",
    "q-408-2022-04",
    "q-408-2022-05",
    "q-408-2022-06",
    "q-408-2022-07",
    "q-408-2022-08",
    "q-408-2022-09",
    "q-408-2022-10",
    "q-408-2022-11",
    "q-408-2022-12",
    "q-408-2022-13",
    "q-408-2022-14",
    "q-408-2022-15",
    "q-408-2022-16",
    "q-408-2022-17",
    "q-408-2022-18",
    "q-408-2022-19",
    "q-408-2022-20",
    "q-408-2022-21",
    "q-408-2022-22",
    "q-408-2022-23",
    "q-408-2022-24",
    "q-408-2022-25",
    "q-408-2022-26",
    "q-408-2022-27",
    "q-408-2022-28",
    "q-408-2022-29",
    "q-408-2022-30",
    "q-408-2022-31",
    "q-408-2022-32",
    "q-408-2022-33",
    "q-408-2022-34",
    "q-408-2022-35",
    "q-408-2022-36",
    "q-408-2022-37",
    "q-408-2022-38",
    "q-408-2022-39",
    "q-408-2022-40",
    "q-408-2022-41",
    "q-408-2022-42",
    "q-408-2022-43",
    "q-408-2022-44",
    "q-408-2022-45",
    "q-408-2022-46",
    "q-408-2022-47"
  ],
  "sourceName": "公开网络版（厦门工学院试卷 PDF / 欧新宇参考答案）",
  "sourceUrl": "https://www.xit.edu.cn/_upload/article/files/c1/ce/26986f79493495bbaacba9738587/aea64e47-90e0-4cb1-8e12-10eed1a3c5f7.pdf",
  "answerUrl": "http://datastructure.ouxinyu.cn/PastPapers/Answer2022.pdf",
  "note": "题干按公开原卷录入；带图题保留原卷题图。"
}
