#!/usr/bin/env python
"""把 OCR 正文整理成 Markdown：章一文件，节 ##，小节 ###、节内小标题 ####，表格还原成 md 表格。

分节边界与 build-book-text.py 一致（按标题行的 y 坐标切，避免上节习题串进下节）；
表格靠 OCR 行坐标还原列（同一 y 带内多 cell + x 间隙）。
"""
import argparse
import importlib.util
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("booktext", os.path.join(HERE, "build-book-text.py"))
B = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(B)

import sys
sys.path.insert(0, HERE)
import mdpolish as P

PAGE_NOISE = re.compile(r"^\d+(?:\.\d+)+\s+\d{1,3}$")
CAP_TABLE = re.compile(r"^表\s*\d+(?:[.．]\d+)?")
CAP_FIG = re.compile(r"^图\s*\d+(?:[.．]\d+)?")
BAND_GAP = 22
COL_GAP = 62
MIN_ROWS = 3


def strip_no(title):
    return re.sub(r"^第\s*\d+\s*章\s*", "", title).strip()


def fix_dup(no, title):
    """书签里 title 常自带编号，避免「1.1 1.1 xxx」。"""
    t = title.strip()
    if t.startswith(no):
        t = t[len(no):].strip()
    return t


def bands(items, tol=BAND_GAP):
    out, cur = [], []
    for idx, (text, ln) in enumerate(items):
        if cur and abs(ln["y0"] - cur[-1][2]["y0"]) > tol:
            out.append(cur)
            cur = []
        cur.append((idx, text, ln))
    if cur:
        out.append(cur)
    return out


def as_table(rows):
    if len(rows) < MIN_ROWS or any(len(r) < 2 for r in rows):
        return None
    allc = [(t, ln) for r in rows for _, t, ln in r]
    if any(len(t) > 22 for t, _ in allc):
        return None
    if any(len(t) > 26 and ln["x1"] > 1150 for t, ln in allc):
        return None
    centers = sorted({round((ln["x0"] + ln["x1"]) / 2) for _, ln in allc})
    cols = []
    for c in centers:
        if cols and c - cols[-1][-1] <= COL_GAP:
            cols[-1].append(c)
        else:
            cols.append([c])
    if not 2 <= len(cols) <= 8:
        return None
    centers = [sum(g) / len(g) for g in cols]
    grid = []
    for r in rows:
        line = [""] * len(centers)
        for _i, t, ln in r:
            c = (ln["x0"] + ln["x1"]) / 2
            k = min(range(len(centers)), key=lambda x: abs(centers[x] - c))
            line[k] = (line[k] + " " + t).strip() if line[k] else t
        grid.append(line)
    filled = sum(1 for row in grid for c in row if c)
    if filled < 0.55 * len(grid) * len(centers):
        return None                 # 空格太多，说明列没对齐，退回「｜」形式
    return grid


def md_table(grid):
    head = [h if h else f"列{i + 1}" for i, h in enumerate(grid[0])]
    out = ["| " + " | ".join(head) + " |", "|" + "|".join([" --- "] * len(head)) + "|"]
    for row in grid[1:]:
        out.append("| " + " | ".join(c.replace("|", "\\|") for c in row) + " |")
    return "\n".join(out)


def table_ranges(items):
    """在原始行上找表格；必须有「表 x.x」题注在正上方，避免把流程图当表。"""
    bs = bands(items, 10)          # 表格里行距小，容差要收紧，否则多行并成一行
    spans = []
    i = 0
    cap_y = None
    cap_page = None
    while i < len(bs):
        band = bs[i]
        # 题注行（「表 5.1」+ 表名）本身也是一个多 cell 带，先记下位置
        if any(CAP_TABLE.match(t.strip()) and len(t.strip()) <= 34 for _, t, _ in band):
            cap_y, cap_page = band[0][2]["y0"], band[0][2].get("_p")
            i += 1
            continue
        if len(band) < 2:
            if len(band) == 1 and len(band[0][1]) > 30:
                cap_y = None
            i += 1
            continue
        j = i
        while j < len(bs):
            b = bs[j]
            if any(CAP_TABLE.match(t.strip()) for _, t, _ in b):
                break
            if len(b) < 2:
                # 表格里被折行的单元格常单独成行：短行继续算表格，长行说明回到了正文
                if len(b[0][1]) > 28 and b[0][2]["x0"] < 340:
                    break
                if b[0][2].get("_p") != cap_page:
                    break
            j += 1
        region = bs[i:j]
        first = region[0][0][2]
        if cap_y is None or first.get("_p") != cap_page or not (0 < first["y0"] - cap_y <= 320):
            cap_y = None
            i = max(j, i + 1)
            continue
        multi = [r for r in region if len(r) >= 2]
        grid = as_table(multi)
        ids = {id(ln) for r in region for _, _, ln in r}
        if grid:
            spans.append((id(region[0][0][2]), ids, grid))
        else:
            # 题注锚定但列结构复杂（单元格跨行）：按行合并成「a ｜ b ｜ c」，不伪装成表格
            loose = []
            for r in region:
                cells = sorted(r, key=lambda x: x[2]["x0"])
                loose.append(" ｜ ".join(c[1].strip() for c in cells))
            spans.append((id(region[0][0][2]), ids, loose))
        cap_y = None
        i = j
    return spans


def build_section_md(items, sub_by_y, out, sub_id=None):
    spans = table_ranges(items)
    table_map = {s: g for s, _ids, g in spans}
    table_ids = set()
    for _s, ids, _g in spans:
        table_ids |= ids

    buf = []
    prev = [None]
    force_join = [False]
    outline = [False]
    used_subs = set()
    used_ids = set()

    def flush():
        if buf:
            lead = buf[0][:1]
            text = B.clean_para(B.join_lines(buf), bullet=(lead in "，·•"))
            if text:
                if lead in "，·•":
                    out.append("- " + text.lstrip("，·• "))
                else:
                    out.append(text)
                out.append("")
            buf.clear()
        prev[0] = None

    i = 0
    while i < len(items):
        text, ln = items[i]
        if id(ln) in table_ids:
            if id(ln) in table_map:
                flush()
                payload = table_map[id(ln)]
                if isinstance(payload[0], str):
                    out.extend("> " + ln0 for ln0 in payload)
                else:
                    out.append(md_table(payload))
                out.append("")
            i += 1
            continue
        # 小节（###）在标题行处插入（pos 为过滤后条目流中的位置）
        for pos, s in sub_by_y:
            if pos not in used_subs and i >= pos:
                flush()
                out.append(f"## {s['no']} {fix_dup(s['no'], s['title'])}".replace("  ", " "))
                out.append("")
                used_subs.add(pos)
        t = B.fix_text(text.strip())
        if not t or PAGE_NOISE.match(t):
            i += 1
            continue
        if re.match(r"^\d+\s*[.．]$", t):
            flush()
            buf.append(t)
            prev[0] = ln
            force_join[0] = True
            i += 1
            continue
        if B.PURE_NO.match(t):
            if (re.match(r"^\d+\.\d+(\.\d+)*$", t) and i + 1 < len(items)
                    and 2 < len(items[i + 1][0]) <= 30
                    and not re.match(r"^[\d.．A-Za-z]", items[i + 1][0])):
                flush()
                num = t
                head = f"{num} {items[i + 1][0].strip()}"
                out.append(f"### {head}")
                out.append("")
                i += 2
                continue
            i += 1
            continue
        if t in B.BOX_WORDS or t.startswith(("命题追踪", "注意：", "【注意】")):
            flush()
            label = t
            parts = []
            j = i + 1
            limit = 1 if label.startswith("命题追踪") else 4
            while j < len(items) and len(parts) < limit:
                nt = items[j][0].strip()
                if (B.is_heading(nt) or CAP_FIG.match(nt) or CAP_TABLE.match(nt) or nt.startswith("【")):
                    break
                if not parts and len(nt) > 48:
                    break
                parts.append(nt)
                j += 1
                if nt[-1:] in "。！？…）)" or label.startswith("命题追踪"):
                    break
            body = "".join(parts)
            out.append(f"> **{label}**{('　' + body) if body else ''}")
            out.append("")
            i = j
            continue
        if CAP_TABLE.match(t) and len(t) <= 34:
            flush()
            out.append(f"**{t.strip()}**")
            out.append("")
            i += 1
            continue
        if CAP_FIG.match(t):
            flush()
            out.append(f"> {t.strip()}")
            out.append("")
            i += 1
            continue
        if re.match(r"^\d+[）)]\s*操作系统(作为|实现)", t):
            flush()
            out.append(f"### {t}")
            out.append("")
            i += 1
            continue
        if B.is_heading(t):
            flush()
            out.append(f"### {B.clean_heading(t)}")
            out.append("")
            i += 1
            continue
        p = prev[0]
        left, charw, body = ln.get("_l", LEFT[0]), ln.get("_c", CHARW[0]), ln.get("_b", BODY[0])
        indent = (ln["x0"] - left) >= charw * 1.3
        gap = ((ln["y0"] - p["y1"]) / max(1.0, p["y1"] - p["y0"])) if p is not None else 0
        p_end = p["text"].rstrip()[-1:] if p is not None else ""
        # 【考纲内容】区块是知识点罗列，OCR 常把「（抢占式/非抢占｜式）」拦腰截断，
        # 除条目起始行外一律接在同一段里。
        if t.startswith("【"):
            outline[0] = t.startswith("【考纲内容】")
        elif B.is_heading(t) or CAP_FIG.match(t) or CAP_TABLE.match(t):
            outline[0] = False
        item_start = bool(re.match(r"^[（(]\s*[一二三四五六七八九十\d]+\s*[）)]|^[一二三四五六七八九十]+、", t))
        p_label = bool(p is not None and len(p["text"].strip()) <= 18
                       and re.match(r"^[（(]\s*[一二三四五六七八九十\d]+\s*[）)]|^[一二三四五六七八九十]+、|^【", p["text"].strip()))
        new_para = (
            p is None
            or (ln["x0"] - left) >= charw * 1.9
            or item_start
            or t.startswith("【")
            or t[:1] in "，·•"
            # 上一行是「（一）／一、／【…】」这类短条目，下一行必须另起
            or p_label
            # 句末标点 + 首行缩进 / 行没写满 / 行间空隙大 → 真的段落结束
            or (p_end in "。！？…" and (indent or B.line_w(p) < body * 0.92 or gap >= 1.05))
            # 行间空隙明显大（正文行距的 1.45 倍以上）→ 换段，但上一行以逗号收尾时仍算同一段
            or (gap >= 1.45 and p_end not in "，、；：")
        )
        if outline[0] and p is not None and not item_start and not t.startswith("【") and not p_label:
            new_para = False
        if force_join[0]:
            new_para = False
            force_join[0] = False
        if new_para:
            flush()
        buf.append(t)
        prev[0] = ln
        i += 1
    flush()


LEFT, CHARW, BODY = [0], [10], [1100]


def shift_headings(lines):
    """章节文件里整体降一级：节 `# ` → `## `。"""
    return [("#" + l) if l.startswith("#") else l for l in lines]


def count_chars(lines):
    return sum(len(l) for l in lines if l and not l.startswith(("#", ">", "|", "<", "-", "*")))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--book", default="os2025")
    ap.add_argument("--src", default=None)
    ap.add_argument("--out", default="md/2025操作系统")
    ap.add_argument("--slug", default="os-wd2025", help="public/booktext/<slug>/ 下的分节 md")
    ap.add_argument("--public", default="public/booktext", help="分节 md 的根目录；传空字符串则不导出")
    ap.add_argument("--js-dir", default="src/data/booktext")
    ap.add_argument("--title", default="2025 操作系统考研复习指导")
    ap.add_argument("--prefix", default="osw")
    ap.add_argument("--single", action="store_true")
    args = ap.parse_args()

    src = args.src or os.path.join(os.path.dirname(HERE), "_ocr", args.book)
    pages = B.load_pages(src)
    with open(os.path.join(src, "toc.json"), encoding="utf-8") as fh:
        toc = json.load(fh)

    chapters, sections, subs = B.split_entries(toc)
    bounds = sorted(set([s["page"] for s in sections] + [c["page"] for c in chapters] + [max(pages or [1]) + 1]))
    for sec in sections:
        nxt = [b for b in bounds if b > sec["page"]]
        sec["end"] = (nxt[0] - 1) if nxt else sec["page"]

    last_page = max(pages or [1])
    for i, sec in enumerate(sections):
        limit = sections[i + 1]["page"] if i + 1 < len(sections) else max(sec["end"], sec["page"])
        sec["page"], sec["startY"] = B.find_section_start(pages, sec, max(limit, sec["page"]))
        if i == 0 or sections[i - 1]["chapter"] != sec["chapter"]:
            sec["startY"] = -1
    for i, sec in enumerate(sections):
        if i + 1 < len(sections):
            sec["end"], sec["endY"] = sections[i + 1]["page"], sections[i + 1]["startY"]
        else:
            sec["end"], sec["endY"] = last_page, None

    sub_of = {}
    for sub in subs:
        sub_of.setdefault(sub["section"], []).append(sub)

    os.makedirs(args.out, exist_ok=True)
    pub_dir = os.path.join(args.public, args.slug, "md") if args.public else None
    if pub_dir:
        os.makedirs(pub_dir, exist_ok=True)
    toc_node = []
    total_chars = 0
    for ci, ch in enumerate(chapters, start=1):
        lines = [f"# 第{ch['no']}章 {strip_no(ch['title'])}", ""]
        ch_sections = []
        for si, sec in enumerate(sections):
            if sec["chapter"] != ci:
                continue
            items = []
            subs_here = sub_of.get(si, [])
            sub_y = []
            for pno in range(sec["page"], sec["end"] + 1):
                page = pages.get(pno)
                if not page:
                    continue
                labels = B.title_keys(ch["title"]) | B.title_keys(strip_no(ch["title"]))
                if pno == sec["page"]:
                    labels |= B.title_keys(sec["title"])
                page_subs = [s for s in subs_here if s["page"] == pno]
                for s in page_subs:
                    labels |= B.title_keys(s["title"])
                    labels.add(B.norm(s["no"]))
                # 小节标题的位置：用「过滤后条目流的插入位」，跨页也不会错位
                pos = len(items)
                keep = []
                for t, ln in B.page_items(page):
                    hit = None
                    for s in page_subs:
                        if B.norm(t) in B.title_keys(s["title"]):
                            hit = s
                            break
                    if B.norm(t) in labels:
                        if hit is not None:
                            sub_y.append((pos + len(keep), hit))
                        continue
                    if pno == sec["page"] and sec["startY"] >= 0 and ln["y0"] < sec["startY"]:
                        continue
                    if pno == sec["end"] and sec["endY"] is not None and ln["y0"] >= sec["endY"]:
                        continue
                    keep.append((B.fix_text(t), ln))
                left, right, charw = B.layout([ln for _, ln in keep])
                for _t, ln in keep:
                    ln["_l"], ln["_c"], ln["_b"] = left, charw, max(1, right - left)
                    ln["_p"] = pno
                items.extend(keep)

            sid = f"{args.prefix}-{sec['no'].replace('.', '-')}"
            sub_ids = {}
            for s in subs_here:
                sub_ids[s["no"]] = f"{sid}-{s['no'].split('.')[-1]}"
            frag = [f"# {sec['no']} {fix_dup(sec['no'], sec['title'])}".replace("  ", " "), ""]
            sub_y.sort(key=lambda x: x[0])
            build_section_md(items, sub_y, frag, sub_id=sub_ids)
            frag = P.polish_document(frag, sec=sid)

            chars = count_chars(frag[2:])
            total_chars += chars
            ch_sections.append({
                "id": sid, "no": sec["no"], "title": sec["title"],
                "page": sec["page"], "endPage": sec["end"],
                "chars": chars,
                "subs": [{"id": sub_ids[s["no"]], "title": s["title"], "page": s["page"]} for s in subs_here],
            })
            if pub_dir:
                with open(os.path.join(pub_dir, sid + ".md"), "w", encoding="utf-8") as fh:
                    fh.write("\n".join(frag).rstrip() + "\n")
            lines.append("")
            lines.extend(shift_headings(frag))

        toc_node.append({
            "id": f"{args.prefix}-ch{ci}", "no": ch["no"], "title": ch["title"],
            "page": ch["page"], "sections": ch_sections,
        })

        name = f"第{ch['no']}章-{re.sub(r'[\\\\/:*?\"<>| ]+', '', strip_no(ch['title']))}.md"
        with open(os.path.join(args.out, name), "w", encoding="utf-8") as fh:
            fh.write("\n".join(lines).rstrip() + "\n")
        print(f"[md] {name}: {len(lines)} 行")

    toc = {
        "book": args.slug, "title": args.title, "fmt": "markdown",
        "chapters": toc_node, "chars": total_chars,
    }
    if pub_dir:
        base = os.path.dirname(pub_dir)                       # public/booktext/os-wd2025
        with open(os.path.join(base, "toc.json"), "w", encoding="utf-8") as fh:
            json.dump(toc, fh, ensure_ascii=False, indent=1)

    slim = {
        "book": args.slug, "title": args.title, "chars": total_chars, "fmt": "markdown",
        "chapters": [
            {
                "id": c["id"], "title": f"第{c['no']}章 {strip_no(c['title'])}", "page": c["page"],
                "children": [{"id": s["id"], "title": s["title"], "page": s["page"]} for s in c["sections"]],
            }
            for c in toc_node
        ],
    }
    os.makedirs(args.js_dir, exist_ok=True)
    with open(os.path.join(args.js_dir, args.slug + ".js"), "w", encoding="utf-8") as fh:
        fh.write("// 由 scripts/build-book-markdown.py 生成，勿手工编辑。\n")
        fh.write("export default " + json.dumps(slim, ensure_ascii=False, indent=1) + "\n")

    if args.single:
        parts = []
        for ch in chapters:
            p = os.path.join(args.out, f"第{ch['no']}章-{re.sub(r'[\\\\/:*?\"<>| ]+', '', strip_no(ch['title']))}.md")
            with open(p, encoding="utf-8") as fh:
                parts.append(fh.read().rstrip())
        with open(os.path.join(args.out, "2025操作系统.md"), "w", encoding="utf-8") as fh:
            fh.write("\n\n".join(parts) + "\n")


if __name__ == "__main__":
    main()

