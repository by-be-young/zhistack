# -*- coding: utf-8 -*-
"""Markdown 正文的排版整理：标点、空格、省略号、破折号、标题层级、错误换行。

供 scripts/build-book-markdown.py 调用。只做可判定的规整，不改写措辞：
1. 中文语境里的半角标点转全角，去掉标点前后的多余空格；
2. 省略号统一为「……」、破折号统一为「——」、数字区间里的「一」改「—」；
3. 直角/半角引号成对换成中文引号；
4. 标题行去掉尾部标点、压缩空格，并保证最高级标题是 h1、层级不跳级；
5. 「考纲内容」区块里被 OCR 读成冒号的分号改回「；」；
6. 上一段以「，、；」收尾说明是被硬换行切断的段落，与下一段接回。
"""
import re

CJK = r"\u4e00-\u9fff"
CJKALL = r"\u4e00-\u9fff\u3000-\u303f\uff01-\uff60"

# OCR 常把英文词之间的空格吃掉（都是正文里的产品/概念名，不是代码标识符）
WORD_FIXES = [
    ("WindowsAPI", "Windows API"), ("OperatingSystem", "Operating System"),
    ("VMwareWorkstation", "VMware Workstation"), ("MappedFiles", "Mapped Files"),
    ("BestFit", "Best Fit"), ("MacOs", "Mac OS"), ("POSIXPthreads", "POSIX Pthreads"),
    ("JavaAPI", "Java API"), ("AtomicOperation", "Atomic Operation"),
    ("threadlibrary", "thread library"),
]

DUP_PUNCT = [("，，", "，"), ("。。", "。"), ("、、", "、"), ("；；", "；"),
             ("：：", "："), ("？？", "？"), ("！！", "！")]


def fix_parens(s):
    """全角开括号配半角闭括号（或反过来）时统一成中文括号。"""
    stack, res = [], list(s)
    for i, ch in enumerate(s):
        if ch == "（":
            stack.append(("f", i))
        elif ch == "(":
            stack.append(("h", i))
        elif ch in "）)":
            if not stack:
                # 「1）」「2）」这类只有右括号的序号是正文写法，保留；其余落单的是噪声
                if not re.match(r"^\d{1,2}$", s[:i]):
                    res[i] = ""
                continue
            kind, pos = stack.pop()
            if kind == "f":
                res[i] = "）"
            elif re.search(r"[\u4e00-\u9fff]", s[pos + 1:i]) or (pos > 0 and re.match(r"[\u4e00-\u9fff]", s[pos - 1])):
                res[pos] = "（"
                res[i] = "）"
    return "".join(res)

HEAD_RE = re.compile(r"^(#{1,6})\s*(.*)$")
STRUCT_RE = re.compile(
    r"^(?:"
    r"[（(]\s*[一二三四五六七八九十\d]+\s*[）)]"      # （一）（2）
    r"|[一二三四五六七八九十]+、"                        # 一、
    r"|[①②③④⑤⑥⑦⑧⑨⑩]"
    r"|【"
    r"|例\s*\d|例题|真题"
    r"|答案|解析|注[：:]"
    r"|表\s*\d|图\s*\d"
    r"|>\s"
    r"|\d+\s*[.．、]\s*[A-D](?![-zA-Z])"
    r"|[A-D][.．]\s"                 # 01. C 答案行
    r")"
)


def polish_text(s):
    """行内标点与空白规整。"""
    if not s:
        return s
    # 选择题选项 / 答案行的编号写法
    s = re.sub(r"^([A-D])[.．]\s*[：:]\s*", r"\1. ", s)
    s = re.sub(r"^([A-D])[.．、]\s*", r"\1. ", s)
    s = re.sub(rf"^([A-D])(?=[{CJK}])", r"\1. ", s)
    # 半角标点 → 全角（仅中文语境）
    s = re.sub(rf"(?<=[{CJK}])\s*,\s*", "，", s)
    s = re.sub(rf"(?<=[{CJK}])\s*;\s*", "；", s)
    s = re.sub(rf"(?<=[{CJK}])\s*:\s*", "：", s)
    s = re.sub(rf"(?<=[{CJK}])\s*\?\s*", "？", s)
    s = re.sub(rf"(?<=[{CJK}])\s*!\s*", "！", s)
    s = re.sub(rf"(?<=[{CJK}])\.(?=[\u4e00-\u9fff])", "。", s)
    # 括号：中文语境用全角
    s = re.sub(rf"(?<=[{CJK}])\((?=[^)]*[{CJK}])", "（", s)
    s = re.sub(rf"(?<=[{CJK}])\)", "）", s)
    s = re.sub(rf"\)(?=[{CJK}])", "）", s)
    # 省略号 / 破折号
    s = re.sub(r"(?:\.\s*){3,}", "……", s)
    s = re.sub(r"…{2,}", "……", s)
    s = re.sub(r"(?<=[\u4e00-\u9fff])…(?=[\u4e00-\u9fff]|$|，|。)", "……", s)
    s = re.sub(r"(?<=[\u4e00-\u9fff])——?", "——", s) if "——" not in s else s
    s = re.sub(r"(?<=[\u4e00-\u9fff])—(?![—])", "——", s)
    s = re.sub(r"(?<=[\u4e00-\u9fff])--+", "——", s)
    s = re.sub(r"(?<=\d)\s*一\s*(?=\d)", "—", s)
    # 中文引号
    s = re.sub(r'"([^"\n]{1,60})"', r"“\1”", s)
    # 「：当然」这类把分号读成冒号的过渡语
    s = s.replace("：再如", "；再如")
    # 英文缩写与汉字之间的多余空格
    s = re.sub(r"(?<=[A-Za-z]) +(?=[\u4e00-\u9fff])", "", s)
    s = re.sub(rf"(?<=[{CJK}]) +(?=[A-Za-z])", "", s)
    # 图 / 表编号后补空格
    s = re.sub(r"^([图表])\s*(\d+(?:\.\d+)?)\s*(?=[^\s\d.．])", r"\1\2 ", s)
    # 括号、英文词组、重复标点
    s = fix_parens(s)
    for bad, good in WORD_FIXES:
        s = s.replace(bad, good)
    for bad, good in DUP_PUNCT:
        s = s.replace(bad, good)
    # 空格清理
    s = re.sub(r"[ \t\u3000]+(?=[，。、；：？！）】」”])", "", s)
    s = re.sub(r"(?<=[（【「“])[ \t\u3000]+", "", s)
    s = re.sub(rf"(?<=[{CJK}])[ \t]+(?=[{CJK}])", "", s)
    s = re.sub(r"[ \t\u3000]{2,}", " ", s)
    return s.strip()


def tidy_heading(line):
    m = HEAD_RE.match(line)
    if not m:
        return line
    hashes, body = m.group(1), m.group(2)
    body = re.sub(r"\s+", " ", body.replace("\u3000", " ")).strip()
    # 「1）标题」「1 标题」统一成「1. 标题」
    body = re.sub(r"^(\d{1,2})\s*[）)]\s*", r"\1. ", body)
    body = re.sub(r"^(\d{1,2})\s+(?=[\u4e00-\u9fff])", r"\1. ", body)
    body = polish_text(body)
    body = body.rstrip("。，、；：．,.;:")
    body = re.sub(r"^(\d+(?:\.\d+)*\.?)\s*", r"\1 ", body)
    body = re.sub(r"\s+", " ", body).strip()
    return f"{hashes} {body}" if body else line


def normalize_headings(lines):
    """最高级标题统一为 h1；其余层级按原有相对关系平移（节 h2、小节 h3、小标题 h4）。"""
    levels = [len(HEAD_RE.match(l).group(1)) for l in lines if HEAD_RE.match(l)]
    if not levels:
        return lines
    base = min(levels)
    out = []
    for l in lines:
        m = HEAD_RE.match(l)
        if not m:
            out.append(l)
            continue
        lvl = min(len(m.group(1)) - base + 1, 6)
        out.append("#" * lvl + " " + m.group(2).strip())
    return out


def _colon_fix(block):
    """考纲列举里被读成「：」的分号：保留第一个冒号，其后的一律改为「；」。"""
    if block.count("：") >= 2:
        head, rest = block.split("：", 1)
        rest = rest.replace("：", "；").replace(":", "；")
        block = re.sub(r"[；;]\s*$", "", head + "：" + rest)
    return block


FRAG_OK = re.compile(r"^[\u4e00-\u9fffA-Za-z（）()\u3001、，,：:0-9]{1,20}$")


def group_fragments(merged, skip_idx):
    """示意图被 OCR 拆成一行一行的碎片时，收进同一个引用块，别混在正文段落里。"""
    out, i = [], 0
    while i < len(merged):
        b = merged[i]
        t = b[0].strip() if len(b) == 1 else ""
        if (t and i not in skip_idx and FRAG_OK.match(t)
                and t[-1] not in "。！？…：；，、"
                and not STRUCT_RE.match(t)):
            j, run = i, []
            while j < len(merged):
                t2 = merged[j][0].strip() if len(merged[j]) == 1 else None
                if not t2 or j in skip_idx or not FRAG_OK.match(t2):
                    break
                if t2[-1] in "。！？…：；，、" or STRUCT_RE.match(t2):
                    break
                run.append(t2)
                j += 1
            if len(run) >= 3:
                for k in range(0, len(run), 8):
                    out.append("> " + "　·　".join(run[k:k + 8]))
                    out.append("")
                i = j
                continue
        out.extend(b)
        out.append("")
        i += 1
    return out


Q_GLUE = re.compile(r"(?<=[\u4e00-\u9fff）】”…。，、；：0-9A-Za-z])\s*(\d{2})[.．]\s*(?=[\u4e00-\u9fffA-Za-z【（(])")
OPT_GLUE = re.compile(r"(?<=[\u4e00-\u9fff）】”])\s*([A-D])[.．]\s*(?=[\u4e00-\u9fff0-9A-Za-z])")
# 选项按两列排时同一行会粘成「A. … B. …」，在空格处拆开
OPT_COL = re.compile(r"\s+([B-D])[.．]\s*(?=[\u4e00-\u9fff0-9A-Za-z])")
# 罗马序号项粘在一起：「…直接交互II.批处理系统…」
ROMAN_GLUE = re.compile(r"(?<=[\u4e00-\u9fff0-9）】”])\s*(?=(?:III|IV|II|I)[.．][\u4e00-\u9fff])")
# 罗马序号丢了点和空格：「…特点II需要实现…」
ROMAN_NODOT = re.compile(r"(?<=[\u4e00-\u9fff])\s*(?=(?:III|IV|II|I)(?=[\u4e00-\u9fff]))")


ANS_GLUE = re.compile(r"^(\d{2})\.\s*([A-D])\s*(?=[\u4e00-\u9fff])")


def split_glued(text):
    """一行里粘上了下一道题的题号 / 下一个选项 / 答案字母后的解析时拆开。"""
    m = ANS_GLUE.match(text)
    if m:
        return [f"{m.group(1)}. {m.group(2)}", text[m.end():].strip()]
    pieces = [text]
    for pat in (Q_GLUE, OPT_GLUE, OPT_COL, ROMAN_GLUE, ROMAN_NODOT):
        nxt = []
        for p in pieces:
            start = 0
            for m in pat.finditer(p):
                nxt.append(p[start:m.start()].rstrip())
                start = m.start()
            nxt.append(p[start:].strip())
        pieces = [p for p in nxt if p]
    return pieces


def _is_body(line):
    return bool(line) and not line.startswith(("#", ">", "|", "**", "-", "*")) and not STRUCT_RE.match(line)


def blocks(lines):
    out, cur = [], []
    for l in lines:
        if l.strip() == "":
            if cur:
                out.append(cur)
                cur = []
        else:
            cur.append(l)
    if cur:
        out.append(cur)
    return out


def polish_blocks(lines):
    """处理考纲区块的冒号，把被硬换行切断的段落接回去，选择题选项收成紧凑列表。"""
    bs = blocks(lines)

    # 考纲内容区块：从「【考纲内容】」到下一个【 或标题
    in_outline = False
    outline_idx = set()
    for i, b in enumerate(bs):
        t = b[0].strip()
        if t.startswith("【"):
            in_outline = t.startswith("【考纲内容】")
            continue
        if HEAD_RE.match(t) or not in_outline:
            continue
        outline_idx.add(i)
        if len(b) == 1 and len(t) <= 120:
            b[0] = _colon_fix(t)

    # 硬换行接回：上一块以「，、；」收尾且下一块是正文
    # 考纲列举本身按条目排版，不做接回；「；」后面若是长句才算被切断
    merged, cur, cur_i = [], None, -1
    for i, b in enumerate(bs):
        if cur is not None:
            prev_txt = cur[-1].strip()
            dangling = prev_txt.endswith(("，", "、", ",", "；", ";"))
            if cur_i in outline_idx:
                dangling = False
            if prev_txt.endswith(("；", ";")) and len(prev_txt) <= 44:
                dangling = False
            if (dangling
                    and _is_body(b[0]) and not STRUCT_RE.match(b[0])
                    and not prev_txt.startswith(("#", ">", "|"))):
                cur[-1] = prev_txt + b[0].strip()
                cur.extend(b[1:])
                continue
            merged.append(cur)
            cur = None
        cur, cur_i = list(b), i
    if cur is not None:
        merged.append(cur)

    split = []
    for b in merged:
        for piece in split_glued("".join(b)):
            split.append([piece if piece.startswith(("#", ">", "|")) else polish_text(piece)])
    split = roman_sort(split)
    return group_fragments(split, set())


ROMAN = {"I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6}
ROMAN_RE = re.compile(r"^(I{1,3}|IV|VI|V)[.．]")


def roman_sort(bs):
    """「I. / II. / III. / IV.」四项被 OCR 打乱顺序时按序排回（如 13 题的并行项）。"""
    out, i = [], 0
    while i < len(bs):
        m = ROMAN_RE.match(bs[i][0].strip()) if len(bs[i]) == 1 else None
        if m:
            j, run = i, []
            while j < len(bs) and len(bs[j]) == 1 and ROMAN_RE.match(bs[j][0].strip()):
                run.append(bs[j])
                j += 1
            got = sorted(ROMAN.get(ROMAN_RE.match(b[0].strip()).group(1), 99) for b in run)
            if got == [1, 2, 3, 4] and len(run) == 4:
                run.sort(key=lambda b: ROMAN[ROMAN_RE.match(b[0].strip()).group(1)])
            out.extend(run)
            i = j
            continue
        out.append(bs[i])
        i += 1
    return out


LABEL_RE = re.compile(r"^（[1-9]）[^。，；：！？]{2,12}$")

OPT_RE = re.compile(r"^([A-D]|I{1,3}|IV|VI|V)[.．]\s*")
EMPTY_OPT = re.compile(r"^([A-Da-d]|I{1,3}|IV|VI|V)[.．]$")
LETTER_ORD = ["A", "B", "C", "D"]


def _fix_option_labels(bs):
    """OCR 把选项字母单独成行、把正文落到下一行时并回去；小写字母统一为大写。"""
    out, i = [], 0
    while i < len(bs):
        b = bs[i]
        t = b[0].strip() if len(b) == 1 else ""
        m = EMPTY_OPT.match(t) if t else None
        if m and i + 1 < len(bs):
            nxt = bs[i + 1]
            nt = nxt[0].strip()
            if not EMPTY_OPT.match(nt) and not HEAD_RE.match(nt):
                out.append([f"{m.group(1).upper()}. {nt}"])
                if len(nxt) > 1:
                    out.append(nxt[1:])
                i += 2
                continue
        if t and re.match(r"^[a-d][.．]", t):
            out.append([t[0].upper() + t[1:]])
            i += 1
            continue
        if t and re.match(r"^(I{1,3}|IV|VI|V)(?=[\u4e00-\u9fff])", t):
            out.append([re.match(r"^(I{1,3}|IV|VI|V)", t).group(1) + ". " +
                        t[re.match(r"^(I{1,3}|IV|VI|V)", t).end():]])
            i += 1
            continue
        out.append(b)
        i += 1
    return out


def join_option_paragraphs(lines):
    """连着排的选项各自成段时，把它们之间的空行去掉，交给 pack_options 合成一块。"""
    out = []
    for l in lines:
        t = l.strip()
        if not t:
            out.append(l)
            continue
        if OPT_RE.match(t):
            k = len(out) - 1
            while k >= 0 and not out[k].strip():
                k -= 1
            if k >= 0 and OPT_RE.match(out[k].strip()) and k < len(out) - 1:
                del out[k + 1:]
        out.append(l)
    return out


def pack_options(lines):
    """选择题选项（A./B./C./D.）与罗马序号项：先按原序号排正，再合成一个紧凑块。"""
    bs = blocks(lines)
    bs = _fix_option_labels(bs)
    out, i = [], 0
    while i < len(bs):
        t = bs[i][0].strip() if len(bs[i]) == 1 else ""
        if t and OPT_RE.match(t):
            j, run = i, []
            while j < len(bs):
                tj = bs[j][0].strip() if len(bs[j]) == 1 else ""
                if not tj or not OPT_RE.match(tj):
                    break
                run.append(tj)
                j += 1
            if run:
                # 字母重复说明这一串混进了前后两道题，按「字母重新出现」切段
                groups, cur = [], []
                for x in run:
                    L = OPT_RE.match(x).group(1)
                    if cur and L in {OPT_RE.match(y).group(1) for y in cur}:
                        groups.append(cur)
                        cur = [x]
                    else:
                        cur.append(x)
                groups.append(cur)
                for g in groups:
                    if len(g) < 2:
                        out.append([g[0]])
                        continue
                    letters = [x for x in g if x[0] in LETTER_ORD]
                    romans = [x for x in g if x[0] not in LETTER_ORD]
                    letters.sort(key=lambda x: LETTER_ORD.index(x[0]))
                    romans.sort(key=lambda x: ROMAN.get(OPT_RE.match(x).group(1), 9))
                    seq = []
                    for x in romans + letters:
                        m = OPT_RE.match(x)
                        tail = x[m.end():].strip()
                        seq.append(f"{m.group(1)}. {tail}" if tail else f"{m.group(1)}.")
                    out.append(["  \n".join(seq)])
                i = j
                continue
        out.append(bs[i])
        i += 1
    res = []
    for b in out:
        res.extend(b)
        res.append("")
    return res


JOIN_HEAD = "又并而且即其以为在由经"
END_PUNCT = "。？！）"

ANS_LINE = re.compile(r"^(0\d|1\d)\. ?([A-D])$")
QUIZ_NO = re.compile(r"^(0\d|1\d)\.(?=\S)")
QUIZ_KIND = re.compile(r"^([一二三])、([\u4e00-\u9fff]{2,8})$")


def shape_quiz(lines):
    """习题区：答案字母加粗、题号后补空格、题型标签加粗。"""
    out, in_answer = [], False
    for l in lines:
        t = l.strip()
        m = HEAD_RE.match(t)
        if m and len(m.group(1)) == 2:
            in_answer = "答案与解析" in m.group(2)
        if t and not t.startswith(("#", ">", "|")):
            if in_answer:
                a = ANS_LINE.match(t)
                if a:
                    out.append(f"**{a.group(1)}. {a.group(2)}**")
                    continue
            k = QUIZ_KIND.match(t)
            if k:
                out.append(f"**{k.group(1)}、{k.group(2)}**")
                continue
            q = QUIZ_NO.match(t)
            if q:
                out.append(q.group(1) + ". " + t[q.end():])
                continue
        out.append(l)
    return out


def join_broken(lines):
    """前半句没有句末标点、下一行以「又/并/而且…」起的短碎片，接回上一句。"""
    out = []
    for l in lines:
        t = l.strip()
        if not t:
            out.append(l)
            continue
        k = len(out) - 1
        while k >= 0 and not out[k].strip():
            k -= 1
        if (k >= 0 and t[0] in JOIN_HEAD and len(t) <= 26 and t[-1] in END_PUNCT
                and not out[k].strip().startswith(("#", ">", "|"))
                and out[k].strip()[-1] not in "。？！：；】"):
            out[k] = out[k].rstrip() + t
            del out[k + 1:]
            continue
        out.append(l)
    return out


def promote_labels(lines):
    """「（1）处理机管理」这类独立短标签升成 h4，正文层次更清楚。"""
    out, prev_head = [], False
    for l in lines:
        t = l.strip()
        if t == "":
            out.append(l)
            prev_head = False
            continue
        if LABEL_RE.match(t) and not t.startswith(("#", ">", "|", "**")):
            out.append(f"#### {t}")
            out.append("")
            prev_head = True
            continue
        prev_head = bool(HEAD_RE.match(t)) or prev_head
        out.append(l)
    return out


TERMS = ["并发", "并行", "共享", "虚拟", "异步", "临界资源",
         "命令接口", "程序接口", "系统调用", "裸机", "扩充机器",
         "虚拟处理器", "虚拟存储器"]


def bold_terms(lines):
    """术语加粗只落在定义句上（「X是指…」「称为X」），每节每个术语只加一次。"""
    done = set()
    out, in_body = [], False
    for l in lines:
        t = l.strip()
        if HEAD_RE.match(t) and t.startswith("## "):
            in_body = True
        if (not in_body or not t or t.startswith(("#", ">", "|", "**")) or len(t) < 12):
            out.append(l)
            continue
        for term in TERMS:
            if term in done:
                continue
            m = (re.search(rf"(?:称为|叫做)({re.escape(term)})(?=[，。、；：）]|$)", t)
                 or re.search(rf"{re.escape(term)}(?=是指|指的是)", t))
            if not m:
                continue
            if m.re.groups:
                t = t[:m.start(1)] + "**" + m.group(1) + "**" + t[m.end(1):]
            else:
                t = t[:m.start()] + "**" + m.group(0) + "**" + t[m.end():]
            done.add(term)
        if "包括并发、共享、虚拟和异步" in t:
            t = t.replace("包括并发、共享、虚拟和异步",
                          "包括**并发**、**共享**、**虚拟**和**异步**")
            done.update(["并发", "共享", "虚拟", "异步"])
        out.append(t)
    return out


def split_outline(lines):
    """考纲里并列的子项在原书各自换行，恢复成独立段落。"""
    out = []
    for l in lines:
        t = l.strip()
        if t.startswith("CPU运行模式") and "程序的链接与装入" in t:
            for p in re.split(r"(?=中断和异常的处理|程序的链接与装入)", t):
                if p.strip():
                    out.extend([p.strip(), ""])
            continue
        out.append(l)
    return out


# 原书有、OCR 整行缺失的句子（已对照 PDF 逐字核对，只补不缺）
TEXT_PATCHES = [
    ("解释执行作业说明书",
     "解释执行作业说明书上的命令，从而间接地控制作业的运行。脱机命令接口可以这样理解："
     "“雇主”将要“工人”做的事写在清单上，“工人”按照清单命令逐条完成这些事，这就是批处理。",
     "这就是批处理"),
]

# 整行替换（已对照原书 PDF 逐行核对）
EXACT_LINE = {
    "I. 机床控制IV. AutoCAD": "III. 机床控制  \nIV. AutoCAD",
    "I.机床控制IV. AutoCAD": "III. 机床控制  \nIV. AutoCAD",
    "A. I、Ⅱ和ⅢI": "A. I、II和III",
    "A. I、II和IIII": "A. I、II和III",
    "B. I、II和IV": "B. I、III和IV",
    "D. I、II和VI": "D. I、III和VI",
    # 5.2 第 34 题：带圈序号被 OCR 读成数字，选项整行按原书改
    "③启动I/O设备④将抽象要求转化为具体要求": "③启动I/O设备  \n④将抽象要求转化为具体要求",
    "检查设备的状态": "⑤检查设备的状态",
    "A. 04523": "A. ①④⑤②③",
    "B. 40623": "B. ④①⑤②③",
    "C. 00263": "C. ①④②⑤③",
    "D. 40253": "D. ④①②⑤③",
    # 1.2 第 18、19 题：罗马数字被 OCR 混读/带圈序号错位
    "A. 仅I、IⅢI": "A. 仅I、III",
    "C. 仅IⅡ、ⅢI": "C. 仅I、II、III",
    "D. I、II、II": "D. I、II、III",
    "I. 具有并发和并行的特点II需要实现对共享资源白为保护":
        "I. 具有并发和并行的特点  \nII. 需要实现对共享资源的保护",
    "I. 具有并发和并行的特点II需要实现对共享资源的保护":
        "I. 具有并发和并行的特点  \nII. 需要实现对共享资源的保护",
    # 1.2 第 17 题选项
    "A. 仅II、ⅢI": "A. 仅II、III",
    "C. 仅I、IⅡ": "C. 仅I、II",
    "D. 仅、II": "D. 仅III",
    "在学习本节时，请读者思考以下问题：1当处理机和外部设备的速度差距较大时，有什么办法可以解决问题？":
        "在学习本节时，请读者思考以下问题：  \n1）当处理机和外部设备的速度差距较大时，有什么办法可以解决问题？",
}


def content_patches(lines):
    out = []
    for l in lines:
        t = l.strip()
        if t in EXACT_LINE:
            out.append(EXACT_LINE[t])
            continue
        for old, new, mark in TEXT_PATCHES:
            if old in l and mark not in l:
                l = l.replace(old, new, 1)
        # 第 13 题的 II/III 两项被 OCR 互换了内容，按原书换回来
        if re.match(r"(II|III)[.．]", t) and "处理机与" in t:
            l = (l.replace("处理机与通道", "\x01").replace("处理机与设备", "\x02")
                 .replace("\x01", "处理机与设备").replace("\x02", "处理机与通道"))
        out.append(l)
    return out






# 拼装后（选项块成形之后）才出现的整块更正
POST_FIX = [
    ("I. 机床控制IV. AutoCAD", "III. 机床控制  \nIV. AutoCAD"),
    ("I. 机床控制 IV. AutoCAD", "III. 机床控制  \nIV. AutoCAD"),
    ("目的主要如下：1缓和CPU", "目的主要如下：  \n1）缓和CPU"),
    ("目的主要如下：1 缓和CPU", "目的主要如下：  \n1）缓和CPU"),
]


DROP_HEADINGS = {"### 4.3.4 J"}


def dedupe_headings(lines):
    """同一个标题在图表旁被 OCR 重复读一次时，去掉后面那个。"""
    out, seen = [], set()
    for idx, l in enumerate(lines):
        m = HEAD_RE.match(l.strip())
        if m:
            txt = m.group(2).strip()
            j = idx + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            nxt = lines[j].strip() if j < len(lines) else ""
            if l.strip() in DROP_HEADINGS:
                continue
            if txt in seen:
                continue
            seen.add(txt)
        out.append(l)
    return out


def drop_leadin_heading(lines):
    """「在学习本节时…」这类节导语前面的重复小节标题是 OCR 噪声，去掉。"""
    out = []
    i = 0
    while i < len(lines):
        l = lines[i]
        m = HEAD_RE.match(l.strip())
        if m:
            j = i + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            if j < len(lines) and lines[j].strip().startswith("在学习本节时"):
                i = j
                continue
        out.append(l)
        i += 1
    return out


def final_patches(lines):
    out = []
    for l in lines:
        for old, new in POST_FIX:
            if old in l and new not in l:
                l = l.replace(old, new, 1)
        out.append(l)
    return out


def polish_document(lines):
    out = []
    for l in lines:
        if HEAD_RE.match(l):
            out.append(tidy_heading(l))
        elif l.startswith(">"):
            inner = l[1:].strip()
            out.append(l.rstrip() if inner.startswith("**") else "> " + polish_text(inner))
        elif l.startswith(("|", "**")):
            out.append(l.rstrip())
        else:
            out.append(polish_text(l))
    out = polish_blocks(out)
    out = join_broken(out)
    out = content_patches(out)
    out = shape_quiz(out)
    out = split_outline(out)
    out = pack_options(out)
    out = final_patches(out)
    out = promote_labels(out)
    out = bold_terms(out)
    out = drop_leadin_heading(out)
    out = dedupe_headings(out)
    out = normalize_headings(out)
    # 压掉多余空行
    squeezed = []
    for l in out:
        if l.strip() == "" and squeezed and squeezed[-1] == "":
            continue
        squeezed.append(l.rstrip())
    return squeezed
