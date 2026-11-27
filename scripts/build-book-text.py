#!/usr/bin/env python3
"""把 _ocr/<book>/page-*.json 重建成按节组织的正文与目录。

    python scripts/build-book-text.py --book os2025 --out public/booktext/os-wd2025

规则：
- 以 PDF 书签为准切章 / 节 / 小节，书签标题即权威标题；
- 页眉页脚、页码、水印、与书签重复的标题行会被剔除；
- 依据「是否缩进、上一行是否顶到右边距、上一行是否以句末标点结尾」还原段落；
- 行首 `1.xxx` 视为小节内的粗体小标题；「注意」「命题追踪」渲染为提示标签；
- 未识别到的页会记入 missing，可随时重跑补齐。
"""
import argparse
import gzip
import json
import os
import re
import statistics

HEAD_RE = re.compile(r"^(第\s*\d+\s*章|\d+(\.\d+){1,2}\s*[^\d]|\d+\.\s*[^\d])")
SENT_END = "。！？；：…」』）"
BOX_WORDS = ("注意", "命题追踪", "考点", "提示")
WATERMARK = ("算机教育", "机教育", "计算机教育", "王道考研", "王道论坛", "教育", "扫一扫", "视频讲解")
HEADER_JUNK = re.compile(r"(王道考研|王道论坛|计算机教育|考研复习指导|^\d{1,3}$|^第\s*\d+\s*页$)")
PURE_NO = re.compile(r"^(第\s*\d+\s*章|\d+(\s*[.．]\s*\d+)*)$")

# 高频 OCR 混淆，按整词替换，避免误伤正常用字
FIXES = [
    ("噪作系统", "操作系统"), ("操作系充", "操作系统"), ("充许", "允许"),
    ("停正", "停止"), ("1/0", "I/O"), ("I/0", "I/O"), ("l/O", "I/O"),
    ("进程调庋", "进程调度"), ("就绪队例", "就绪队列"), ("页表顼", "页表项"),
    ("地扯", "地址"), ("地止", "地址"), ("寄存嚣", "寄存器"), ("中断处埋", "中断处理"),
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
    return len(text) <= 8 and ("机教" in text or "王道" in text)


def is_heading(text):
    """小节内的粗体小标题：短、以编号开头、不是整句、不是答案行。"""
    if not HEAD_RE.match(text) or len(text) >= 32:
        return False
    if text[-1:] in SENT_END:
        return False
    if re.match(r"^\d+\s*[.．]\s*[A-D]$", text):          # 「01. C」答案行
        return False
    if re.match(r"^\d+(\.\d+)+\s*\d{1,3}$", text):         # 「1.1.5 4」标题带页码
        return False
    return True


def build_html(pages, sec, sub_entries, chapter_title=""):
    html, chars = [], 0
    missing = []
    chapter_keys = title_keys(chapter_title) if chapter_title else set()
    html.append(f'<h3 id="{sec["id"]}">{esc(sec["title"])}</h3>')
    for pno in range(sec["page"], sec["end"] + 1):
        page = pages.get(pno)
        if not page:
            missing.append(pno)
            continue
        lines = body_lines(page)
        page_titles = title_keys(sec["title"]) if pno == sec["page"] else set()
        page_titles |= chapter_keys
        # 小节标题按书签插入，并剔除页面上重复的那一行
        sub = next((s for s in sub_entries if s["page"] == pno), None)
        if sub:
            html.append(f'<h4 id="{sub["id"]}">{esc(sub["title"])}</h4>')
            page_titles |= title_keys(sub["title"])
        lines = [ln for ln in lines if norm(ln["text"]) not in page_titles]
        charw = statistics.median(
            [(ln["x1"] - ln["x0"]) / max(1, len(ln["text"])) for ln in lines] or [20]
        )
        left = statistics.quantiles([ln["x0"] for ln in lines], n=10)[0] if len(lines) > 3 else 0
        right = max([ln["x1"] for ln in lines], default=0)

        html.append(f'<div class="pgmark" data-p="{pno}">p.{pno}</div>')
        buf = []
        prev_line = None

        def flush():
            nonlocal buf, chars
            if buf:
                text = join_lines(buf)
                html.append(f"<p>{esc(text)}</p>")
                chars += len(text)
                buf = []

        force_join = False
        for i, ln in enumerate(lines):
            text = fix_text(ln["text"].strip())
            if not text or is_junk(text):
                continue
            # 题号单独成行（03.），与下一行题干合成一段
            if re.match(r"^\d+\s*[.．]$", text):
                flush()
                buf.append(text)
                prev_line = ln
                force_join = True
                continue
            if PURE_NO.match(text):
                continue
            # 「注意」「命题追踪」标题+下一行说明合并为提示块
            if text in BOX_WORDS or text.startswith(("命题追踪", "注意：")):
                flush()
                tail = text
                nxt = lines[i + 1]["text"].strip() if i + 1 < len(lines) else ""
                if len(nxt) < 42 and not SENT_END_in(nxt):
                    tail = f"{text} {nxt}"
                html.append(f'<p class="tip"><b>{esc(tail)}</b></p>')
                prev_line = None
                continue
            if is_heading(text):
                flush()
                html.append(f'<h4>{esc(text)}</h4>')
                prev_line = None
                continue
            new_para = (
                prev_line is None
                or ln["x0"] > left + charw * 1.5
                or prev_line["x1"] < right - charw * 2.2
                or (prev_line["text"][-1:] in SENT_END)
            )
            if force_join:
                new_para = False
                force_join = False
            if new_para:
                flush()
            buf.append(text)
            prev_line = ln
        flush()
    return "\n".join(html), chars, missing


def SENT_END_in(text):
    return text[-1:] in SENT_END



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
