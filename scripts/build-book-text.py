#!/usr/bin/env python3
"""把 _ocr/<book>/page-*.json 重建成按节组织的正文与目录。

    python scripts/build-book-text.py --book os2025 --out public/booktext/os-wd2025

规则：
- 以 PDF 书签为准切章 / 节 / 小节，书签标题即权威标题；
- 页眉页脚、页码、水印、与书签重复的标题行会被剔除；
- 依据「首行缩进 + 是否以句末标点结尾 + 行宽」还原段落，段落允许跨页续写；
- 行首 `1.xxx` 视为小节内的粗体小标题；「注意」「命题追踪」渲染为提示标签；
- 图 / 表区域的碎片文字聚合成一个图注块，不再散落成一段段正文；
- 未识别到的页会记入 missing，可随时重跑补齐。
"""
import argparse
import gzip
import json
import os
import re
import statistics

HEAD_RE = re.compile(r"^(第\s*\d+\s*章|\d+(\.\d+){1,2}\s*[^\d]|\d+\.\s*[^\d])")
SENT_END = "。！？；：…」』）!?"
BOX_WORDS = ("注意", "命题追踪", "考点", "提示")
WATERMARK = ("算机教育", "机教育", "计算机教育", "王道考研", "王道论坛", "教育", "扫一扫", "视频讲解")
HEADER_JUNK = re.compile(r"(王道考研|王道论坛|计算机教育|考研复习指导|^\d{1,3}$|^第\s*\d+\s*页$)")
PURE_NO = re.compile(r"^(第\s*\d+\s*章|\d+(\s*[.．]\s*\d+)*)$")
# 页眉：章名 + 页码（含 OCR 常见的「一」「－」「‧」噪声）
RUNHEAD = re.compile(r"^第\s*\d+\s*章[^\n]{0,18}(?:[\s\-－—–‧·.,，]|[一二三四五六七八九十])?\s*\d{0,4}\s*$")
FIG_CAP = re.compile(r"^(图|表)\s*\d+\s*[.\-—－]\s*\d+")
LEAD_JUNK = re.compile(r"^[，、·•；;：:,。\s]+")

# 高频 OCR 混淆，按整词替换，避免误伤正常用字
FIXES = [
    ("噪作系统", "操作系统"), ("操作系充", "操作系统"), ("充许", "允许"),
    ("停正", "停止"), ("1/0", "I/O"), ("I/0", "I/O"), ("l/O", "I/O"),
    ("进程调庋", "进程调度"), ("就绪队例", "就绪队列"), ("页表顼", "页表项"),
    ("地扯", "地址"), ("地止", "地址"), ("寄存嚣", "寄存器"), ("中断处埋", "中断处理"),
    ("卖者", "读者"), ("景响", "影响"), ("自标", "目标"), ("居装入", "先装入"),
    ("的可的程序", "的程序"), ("装装入", "装入"), ("的的", "的"),
    ("调庋", "调度"), ("队例", "队列"), ("系充", "系统"),
    ("收缩宿", "收缩"), ("printfO", "printf()"), ("mallocO", "malloc()"),
    ("桌种", "某种"), ("启备队列", "后备队列"), ("就者队列", "就绪队列"),
    ("进租呈", "进程"), ("到送", "到达"), ("石磁盘", "磁盘"), ("天多数", "大多数"),
    ("第一族", "第一簇"), ("一族", "一簇"), ("族的整数倍", "簇的整数倍"),
    # 函数名结尾的括号被 OCR 认成字母 O
    ("waitO)", "wait()"), ("waitO", "wait()"), ("signalO)", "signal()"), ("signalO", "signal()"),
    ("waito", "wait()"), ("signalo", "signal()"), ("swapO", "swap()"), ("readO", "read()"),
    ("writeO", "write()"), ("acquireO", "acquire()"), ("releaseO", "release()"),
    ("openO", "open()"), ("scanfO", "scanf()"), ("sinO", "sin()"),
    ("take_awayO", "take_away()"), ("lockO", "lock()"), ("unlockO", "unlock()"),
    # 数字 1 被认成字母 l
    ("threadl", "thread1"), ("mutexl", "mutex1"), ("dirl", "dir1"),
    ("flagl", "flag1"), ("filel", "file1"), ("coursel", "course1"), ("offerl", "offer1"),
    # 其他高频错字
    ("石磁滋盘", "磁盘"), ("石滋盘", "磁盘"), ("磁滋盘", "磁盘"), ("STTF", "SSTF"),
    ("一一", "——"), ("程）序", "程序"), ("真因", "因"), ("自已", "自己"),
    ("个族", "个簇"), ("1×10243", "1×1024³"), ("1×10242", "1×1024²"),
]


def fix_text(text):
    for bad, good in FIXES:
        text = text.replace(bad, good)
    return text


def norm(text):
    return re.sub(r"[\s·．.、]+", "", text)


def load_pages(src):
    pages = {}
    for name in os.listdir(src):
        m = re.match(r"page-(\d{4})\.json$", name)
        if not m:
            continue
        with open(os.path.join(src, name), encoding="utf-8") as fh:
            data = json.load(fh)
        pages[int(m.group(1))] = data
    return pages


def line_w(ln):
    return ln["x1"] - ln["x0"]


def body_lines(page):
    """去掉页眉页脚、页码、水印，按阅读顺序返回行。"""
    h, w = page["height"], page["width"]
    keep = []
    for ln in sorted(page["lines"], key=lambda l: (round(l["y0"] / 10), l["x0"])):
        if ln["y0"] < h * 0.055 or ln["y1"] > h * 0.965:
            continue
        text = ln["text"].strip()
        if not text or HEADER_JUNK.search(text):
            continue
        keep.append(ln)
    return keep


def layout(lines):
    """正文栏的左边距、右边距与单字宽度。只用较宽的行估计，避开图注碎行。"""
    if not lines:
        return 0, 0, 20
    maxw = max(line_w(l) for l in lines)
    wide = [l for l in lines if line_w(l) >= maxw * 0.5] or lines
    left = statistics.median(l["x0"] for l in wide)
    right = max(l["x1"] for l in wide)
    charw = statistics.median([line_w(l) / max(1, len(l["text"])) for l in wide]) or 20
    return left, right, charw


def split_entries(pdf_toc):
    chapters, sections, subs = [], [], []
    for lv, title, pg in pdf_toc:
        title = re.sub(r"\s+", " ", title).strip()
        if lv == 1 and title.startswith("第") and "章" in title:
            chapters.append({"no": re.match(r"第(\d+)章", title).group(1), "title": title, "page": pg})
        elif lv == 2 and chapters:
            sections.append({"chapter": len(chapters), "no": title.split(" ")[0], "title": title, "page": pg})
        elif lv == 3 and sections:
            subs.append({"section": len(sections) - 1, "no": title.split(" ")[0], "title": title, "page": pg})
    return chapters, sections, subs


def title_keys(title):
    """标题的多种写法：带编号、去编号、去「第N章」。"""
    bare = re.sub(r"^第\s*\d+\s*章\s*", "", title)
    bare = re.sub(r"^\d+(\.\d+)*\s*", "", bare)
    return {norm(title), norm(bare)}


def is_junk(text):
    if text in WATERMARK:
        return True
    if RUNHEAD.match(text):
        return True
    return len(text) <= 8 and ("机教" in text or "王道" in text or text.endswith("教育"))


def clean_heading(text):
    text = text.replace("\u3000", " ")
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"^(\d+(?:\.\d+)*\.?)\s*", r"\1 ", text)
    return text


def is_heading(text):
    """小节内的粗体小标题：短、以编号开头、不是整句、不是答案行。"""
    if not HEAD_RE.match(text) or len(text) >= 32:
        return False
    if text[-1:] in SENT_END:
        return False
    if re.match(r"^\d+\s*[.．]\s*[A-D]$", text):          # 「01. C」答案行
        return False
    if re.match(r"^\d+(\.\d+)+\s*\d{1,3}$", text):        # 「1.1.5 4」标题带页码
        return False
    return True


def is_fig_frag(text, ln, body):
    """图 / 表中被 OCR 拆成单行的碎片：窄、短、不以句末标点收尾。"""
    if line_w(ln) > body * 0.46:
        return False
    if len(text) > 26:
        return False
    if text[-1:] in "。！？；…":
        return False
    if HEAD_RE.match(text):
        return False
    if re.match(r"^[（(]\s*[一二三四五六七八九十\d]+\s*[）)]", text):   # 「（1）绝对装入」这类正文条目
        return False
    if text.startswith("【"):
        return False
    return True


def clean_para(text, bullet=False):
    text = LEAD_JUNK.sub("", text) if not bullet else text.lstrip("，、·•；;：: ")
    text = re.sub(r"[ \u3000]{2,}", " ", text)
    return text.strip()


def para_class(text):
    if re.match(r"^[（(]\s*[一二三四五六七八九十\d]+\s*[）)]", text):
        return ' class="item"'
    if re.match(r"^[①②③④⑤⑥⑦⑧⑨⑩]", text):
        return ' class="item"'
    if text.startswith("【") and text.endswith("】") and len(text) <= 32:
        return ' class="tag"'
    return ""


def render_figure(frags):
    """把一簇图注碎片合成图块；「图 x.x」行收在前一张图的图题上，一簇可含多张图。"""
    segments, start = [], 0
    for k, t in enumerate(frags):
        if not FIG_CAP.match(t):
            continue
        cap_parts, nxt = [t], k + 1
        while (nxt < len(frags) and len(cap_parts) < 2
               and not FIG_CAP.match(frags[nxt]) and len(frags[nxt]) <= 40):
            cap_parts.append(frags[nxt])
            nxt += 1
        segments.append((frags[start:k], " ".join(cap_parts)))
        start = nxt
    if start < len(frags):
        segments.append((frags[start:], None))

    out = []
    for bodies, cap in segments:
        if not bodies and not cap:
            continue
        if cap:
            cap = re.sub(r"^(图|表)\s*(\d+(?:\.\d+)?)\s*", r"\1\2 ", cap)
        if not bodies:
            out.append(f'<p class="figcap">{html_text(cap)}</p>')
            continue
        inner = f'<div class="fig-body">{"　｜　".join(html_text(t) for t in bodies)}</div>'
        cap_html = f"<figcaption>{html_text(cap)}</figcaption>" if cap else ""
        out.append(f'<figure class="fig">{inner}{cap_html}</figure>')
    return "\n".join(out)


def join_lines(texts):
    out = texts[0]
    for t in texts[1:]:
        if re.search(r"[A-Za-z0-9]$", out) and re.match(r"[A-Za-z0-9]", t):
            out += " " + t
        else:
            out += t
    return out


def esc(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


SUP_FIXES = [("0～232-1", "0～2<sup>32</sup>−1")]


def html_text(text):
    out = esc(text)
    for bad, good in SUP_FIXES:
        out = out.replace(bad, good)
    return out


def build_html(pages, sec, sub_entries, chapter_title=""):
    html, chars = [], 0
    missing = []
    chapter_keys = title_keys(chapter_title) if chapter_title else set()
    html.append(f'<h3 id="{sec["id"]}">{esc(clean_heading(sec["title"]))}</h3>')

    buf, frags, marks = [], [], []
    buf_lead = [""]
    prev = [None]     # 上一行正文行（用列表避免 nonlocal 混乱）
    force_join = [False]

    def flush_marks():
        if marks:
            for m in marks:
                html.append(f'<div class="pgmark" data-p="{m}">p.{m}</div>')
            marks.clear()

    def flush_fig():
        nonlocal chars
        if frags:
            if len(frags) == 1 and not FIG_CAP.match(frags[0]):
                text = frags[0]
                html.append(f"<p{para_class(text)}>{html_text(text)}</p>")
                chars += len(text)
            else:
                block = render_figure(frags)
                if block:
                    html.append(block)
                chars += sum(len(t) for t in frags)
            frags.clear()

    def flush_para():
        nonlocal chars, buf
        if buf:
            lead = buf_lead[0][:1]
            text = clean_para(join_lines(buf), bullet=(lead in "，·•"))
            if text:
                cls = para_class(text)
                if lead in "，·•":
                    cls = ' class="li"'
                html.append(f"<p{cls}>{html_text(text)}</p>")
                chars += len(text)
            buf = []
            buf_lead[0] = ""
        prev[0] = None

    for pno in range(sec["page"], sec["end"] + 1):
        page = pages.get(pno)
        if not page:
            missing.append(pno)
            continue
        lines = body_lines(page)
        page_titles = title_keys(sec["title"]) if pno == sec["page"] else set()
        page_titles |= chapter_keys
        sub = next((s for s in sub_entries if s["page"] == pno), None)
        if sub:
            flush_para()
            flush_fig()
            flush_marks()
            html.append(f'<h4 id="{sub["id"]}">{esc(clean_heading(sub["title"]))}</h4>')
            page_titles |= title_keys(sub["title"])
        lines = [ln for ln in lines if norm(ln["text"]) not in page_titles]
        left, right, charw = layout(lines)
        body = max(1, right - left)

        items = [(fix_text(ln["text"].strip()), ln) for ln in lines]
        items = [(t, ln) for t, ln in items if t and not is_junk(t)]
        cand = [is_fig_frag(t, ln, body) for t, ln in items]
        frag_flag = [
            c and ((i > 0 and cand[i - 1]) or (i + 1 < len(cand) and cand[i + 1]))
            for i, c in enumerate(cand)
        ]

        marks.append(pno)
        if not buf:
            flush_marks()

        i = 0
        while i < len(items):
            text, ln = items[i]
            # 题号单独成行（03.），与下一行题干合成一段
            if re.match(r"^\d+\s*[.．]$", text):
                flush_para()
                buf.append(text)
                prev[0] = ln
                force_join[0] = True
                i += 1
                continue
            if PURE_NO.match(text):
                i += 1
                continue
            # 「注意」「命题追踪」标题 + 紧随的说明合并成提示块
            if text in BOX_WORDS or text.startswith(("命题追踪", "注意：", "【注意】")):
                flush_para()
                flush_fig()
                label = text
                parts, j = [], i + 1
                # 「命题追踪」只带上紧随的一行考点标题；「注意」要续到句子收尾
                limit = 1 if label.startswith("命题追踪") else 4
                while j < len(items) and len(parts) < limit:
                    nxt = items[j][0]
                    if (is_heading(nxt) or FIG_CAP.match(nxt) or nxt.startswith("【")
                            or re.match(r"^[（(]\s*[一二三四五六七八九十\d]+\s*[）)]", nxt)):
                        break
                    if not parts and len(nxt) > 48:
                        break
                    parts.append(nxt)
                    j += 1
                    if nxt[-1:] in "。！？…）)" or label.startswith("命题追踪"):
                        break
                content = "".join(parts)
                html.append(f'<p class="tip"><b>{html_text(label)}</b>{("　" + html_text(content)) if content else ""}</p>')
                chars += len(label) + len(content)
                i = j
                continue
            # 图 / 表碎片成簇聚合
            if frag_flag[i]:
                flush_para()
                frags.append(text)
                i += 1
                continue
            if frags:
                flush_fig()
            if is_heading(text):
                flush_para()
                html.append(f"<h5>{esc(clean_heading(text))}</h5>")
                i += 1
                continue
            # 新段落：首行缩进 ≥ 1.7 字；或上一行已收句且明显不满行宽；或本行是条目/标签起点
            prev_ln = prev[0]
            indent = (ln["x0"] - left) >= charw * 1.3
            new_para = (
                prev_ln is None
                or (ln["x0"] - left) >= charw * 1.9
                or (prev_ln["text"][-1:] in "。！？…" and (indent or line_w(prev_ln) < body * 0.9))
                or line_w(prev_ln) < body * 0.55
                or re.match(r"^[（(]\s*[一二三四五六七八九十\d]+\s*[）)]", text)
                or text.startswith("【")
                or text[:1] in "，·•"
            )
            if force_join[0]:
                new_para = False
                force_join[0] = False
            if new_para:
                flush_para()
                flush_marks()
            if not buf:
                buf_lead[0] = text
            buf.append(text)
            prev[0] = ln
            i += 1

        # 段落允许跨页续写：页尾不强行 flush
        if frags:
            flush_fig()
    flush_para()
    flush_fig()
    flush_marks()
    return "\n".join([h for h in html if h]), chars, missing


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--book", default="os2025")
    ap.add_argument("--src")
    ap.add_argument("--out", required=True)
    ap.add_argument("--slug", default="os-wd2025")
    ap.add_argument("--title", default="2025 操作系统考研复习指导")
    ap.add_argument("--prefix", default="osw", help="章节 id 前缀，需与该书其他版本区分")
    args = ap.parse_args()

    src = args.src or os.path.join("_ocr", args.book)
    os.makedirs(args.out, exist_ok=True)
    pages = load_pages(src)
    with open(os.path.join(src, "toc.json"), encoding="utf-8") as fh:
        pdf_toc = json.load(fh)

    chapters, sections, subs = split_entries(pdf_toc)
    # 每一节的范围：到下一个二级 / 一级标题为止
    bounds = sorted(set([s["page"] for s in sections] + [c["page"] for c in chapters] + [max(pages or [1]) + 1]))
    for i, sec in enumerate(sections):
        nxt = [b for b in bounds if b > sec["page"]]
        sec["end"] = (nxt[0] - 1) if nxt else sec["page"]
        sec["id"] = f"{args.prefix}-{sec['no'].replace('.', '-')}"

    for i, sub in enumerate(subs):
        sub["id"] = f"{sections[sub['section']]['id']}-{sub['no'].split('.')[-1]}"

    by_section = {}
    for sub in subs:
        by_section.setdefault(sub["section"], []).append(sub)

    toc = {"book": args.slug, "title": args.title, "source": {"ocr": "RapidOCR", "dpi": 200}, "chapters": []}
    total_chars = 0
    missing_all = {}

    for ci, ch in enumerate(chapters, start=1):
        node = {"id": f"{args.prefix}-ch{ci}", "no": ch["no"], "title": ch["title"], "page": ch["page"], "sections": []}
        for si, sec in enumerate(sections):
            if sec["chapter"] != ci:
                continue
            html, chars, missing = build_html(pages, sec, by_section.get(si, []), ch["title"])
            if missing:
                missing_all[sec["id"]] = missing
            payload = {
                "id": sec["id"], "no": sec["no"], "title": sec["title"],
                "page": sec["page"], "endPage": sec["end"], "html": html, "chars": chars,
            }
            with open(os.path.join(args.out, sec["id"] + ".json.gz"), "wb") as fh:
                fh.write(gzip.compress(
                    json.dumps(payload, ensure_ascii=False).encode("utf-8"), 9))
            total_chars += chars
            node["sections"].append({
                "id": sec["id"], "no": sec["no"], "title": sec["title"],
                "page": sec["page"], "endPage": sec["end"], "chars": chars,
                "subs": [{"id": s["id"], "title": s["title"], "page": s["page"]} for s in by_section.get(si, [])],
            })
        toc["chapters"].append(node)

    toc["chars"] = total_chars
    toc["missing"] = missing_all
    with open(os.path.join(args.out, "toc.json"), "w", encoding="utf-8") as fh:
        json.dump(toc, fh, ensure_ascii=False, indent=1)

    # 构建期用的精简目录（供 books.js / 书目页读取，不重复正文）
    js_dir = os.path.join("src", "data", "booktext")
    os.makedirs(js_dir, exist_ok=True)
    slim = {
        "book": args.slug, "title": args.title, "chars": total_chars,
        "chapters": [
            {
                "id": ch["id"], "title": f"第{ch['no']}章 {ch['title'].split(' ', 1)[-1]}",
                "page": ch["page"],
                "children": [
                    {"id": s["id"], "title": s["title"], "page": s["page"]}
                    for s in ch["sections"]
                ],
            }
            for ch in toc["chapters"]
        ],
    }
    with open(os.path.join(js_dir, args.slug + ".js"), "w", encoding="utf-8") as fh:
        fh.write("// 由 scripts/build-book-text.py 生成，勿手工编辑。\n")
        fh.write("export default " + json.dumps(slim, ensure_ascii=False, indent=1) + "\n")

    print(f"[build] {args.slug}: {len(chapters)} 章 {len(sections)} 节 "
          f"{len(subs)} 小节, {total_chars} 字, 缺页 {sum(len(v) for v in missing_all.values())} 页")
    for sid, miss in missing_all.items():
        print(f"  missing {sid}: {miss}")


if __name__ == "__main__":
    main()
