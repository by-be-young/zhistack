"""OCR 文本校正规则，供 build-book-text.py 调用。

只做高置信度的替换：上标被读成普通数字（2¹² → 212）、单位大小写（mS → ms）、
I/O 被读成 1/0、二值串里的 o/l 混入，以及少量已核实的形近字。
"""
import re

SUP = str.maketrans("0123456789", "⁰¹²³⁴⁵⁶⁷⁸⁹")

# 已核实的形近字（在全量 OCR 文本里逐个 count 过，不是猜的）
FIXES = [
    ("噪作系统", "操作系统"), ("操作系充", "操作系统"), ("充许", "允许"),
    ("停正", "停止"), ("进程调庋", "进程调度"), ("就绪队例", "就绪队列"),
    ("页表顼", "页表项"), ("地扯", "地址"), ("寄存嚣", "寄存器"),
    ("中断处埋", "中断处理"), ("卖者", "读者"), ("景响", "影响"),
    ("自标", "目标"), ("存诸", "存储"), ("地止", "地址"), ("缓中区", "缓冲区"),
    ("空问", "空间"), ("的可的程序", "的程序"), ("装装入", "装入"), ("的的", "的"), ("扫扫", ""), ("用户支可", "用户才可"), ("自的是", "目的是"), ("IⅡI.", "III."),
    # 已对照原书（PDF p13–19）核实
    ("利用因I/O", "利用其因I/O"), ("白为", "的"), ("白勺", "的"), ("是0系统的最高层软件", "是I/O系统的最高层软件"), ("包括活执行", "包括执行"), ("1缓和CPU", "1）缓和CPU"), ("图1.41", "图1.4"),
]

# I/O 的各种误读（只在 OS / 网络两本里做，避免误伤算式里的 1/0）
IO_VARIANTS = re.compile(r"(?:1/O|I/0|1/0|l/O|I/O)")

BINARY = re.compile(r"^[01oOlI\s]{8,}$")

EXP = r"(?:12|16|20|24|32|36|40|64)"

RULES = [
    # 2^10 被拆成 2'°
    (re.compile(r"2'°"), "2¹⁰"),
    # 2^20 / 2^10 / 2^30 被读成 22° / 21° / 23°
    (re.compile(r"(?<![\d。．.])2(\d)°"), lambda m: sup("2", int(m.group(1)) * 10)),
    # 10^9 读成 10°，10^3 读成 10’
    (re.compile(r"10°"), "10⁹"),
    (re.compile(r"10’"), "10³"),
    # 2¹²B / 2³²页 这类上标直接丢了
    (re.compile(r"(?<![\dA-Za-z])2(" + EXP + r")(?=[×B]|KB|MB|GB|字节|页|个|项|位|之多|/)"), lambda m: sup("2", int(m.group(1))),
    ),
]


def sup(base, exp):
    return base + str(exp).translate(SUP)


def fix_text(text, book=""):
    for bad, good in FIXES:
        text = text.replace(bad, good)
    if book in ("os2025", "cn2025"):
        text = IO_VARIANTS.sub("I/O", text)
        text = re.sub(r"(\d+)\s*mS\b", r"\1ms", text)
    for pat, rep in RULES:
        text = pat.sub(rep, text)
    if BINARY.match(text):
        text = text.replace("o", "0").replace("O", "0").replace("l", "1").replace("I", "1")
    return text


FORMULA_MARKS = "=×÷±≤≥→∑∫√∞"


def is_formula(text):
    """成行符号为主的内容：等式、位串、计算方法，单独成块，避免污染正文句子。"""
    if len(text) < 4:
        return False
    han = sum("\u4e00" <= ch <= "\u9fff" for ch in text)
    if han / len(text) > 0.35:
        return False
    if any(m in text for m in FORMULA_MARKS):
        return True
    if BINARY.match(text):
        return True
    return False

