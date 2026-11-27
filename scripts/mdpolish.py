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
    """考纲列举里被读成「：」的分号。只在这一节的第一块列举里动。"""
    if block.rstrip().endswith(("：", ":")) and block.count("：") + block.count(":") >= 2:
        block = block.replace("：", "；").replace(":", "；")
        block = re.sub(r"[；;]\s*$", "", block)
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


Q_GLUE = re.compile(r"(?<=[\u4e00-\u9fff）】”\u3001])(\d{2}\.\s*(?=[\u4e00-\u9fff]))")
OPT_GLUE = re.compile(r"(?<=[\u4e00-\u9fff）】”])([B-D]\.\s*(?=[\u4e00-\u9fff]))")


def split_glued(text):
    """一行里粘上了下一道题的题号 / 下一个选项时拆开。"""
    pieces = [text]
    for pat in (Q_GLUE, OPT_GLUE):
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
        if len(b) == 1 and len(t) <= 60:
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
            split.append([polish_text(piece)])
    return group_fragments(split, set())


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
    return normalize_headings(out)
