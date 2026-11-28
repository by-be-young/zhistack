"""把原书 PDF 里的插图按页裁切成 PNG，供书库 Markdown 直接引用。

用法：python scripts/extract_figures.py [--ch 1]
输出：public/booktext/os-wd2025/img/fig<章>-<图号>.png + scripts/figures.json（图题→文件名映射）
"""
import json
import re
import sys
import pathlib

import pymupdf
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
PDF = pathlib.Path(r"D:\02-资料\笔记资料\2025王道\2025王道操作系统（带书签）.pdf")
OCR = ROOT / "_ocr" / "os2025"
OUT = ROOT / "public" / "booktext" / "os-wd2025" / "img"
MAP = ROOT / "scripts" / "figures.json"

CAP_RE = re.compile(r"^\s*图\s*(\d+)\s*\.\s*(\d+)")


def page_data(p):
    f = OCR / f"page-{p:04d}.json"
    if not f.exists():
        return None
    d = json.loads(f.read_text(encoding="utf-8"))
    d["lines"] = [ln for ln in d["lines"] if 110 < ln["y0"] and ln["y1"] < 2020]
    return d


def merge_caption(lines, ln):
    """图题常被 OCR 拆成「图1.5」+「由模块…组合」两段，按同一行合并。"""
    parts = [ln["text"]]
    right = [x for x in lines
             if x is not ln and abs(x["y0"] - ln["y0"]) < 10 and x["x0"] > ln["x1"] - 5]
    for x in sorted(right, key=lambda z: z["x0"]):
        parts.append(x["text"])
        ln = {"y1": max(ln["y1"], x["y1"])}
    txt = " ".join(parts)
    txt = re.sub(r"\s*([，。：])\s*", r"\1", txt)
    txt = re.sub(r"\s+", " ", txt).strip()
    return txt, (ln["y1"] if isinstance(ln, dict) else ln["y1"])


def find_top(lines, cap_y0, width):
    """图的上边界＝图题上方最后一条「长正文行」的底边。"""
    long_min = 0.55 * width
    cands = [ln for ln in lines if ln["y1"] <= cap_y0 - 4 and (ln["x1"] - ln["x0"]) >= long_min]
    if not cands:
        return 196.0
    return max(196.0, max(ln["y1"] for ln in cands) + 6)


def trim_white(path, pad=14):
    """裁掉插图四周的大片留白（只按深色像素算，避免把浅灰水印当成内容）。"""
    im = Image.open(path).convert("L")
    mask = im.point(lambda v: 255 if v < 200 else 0)
    box = mask.getbbox()
    if not box:
        return
    l, t, r, b = box
    box = (max(0, l - pad), max(0, t - pad),
           min(im.width, r + pad), min(im.height, b + pad))
    Image.open(path).crop(box).save(path)


def main():
    ch = 1
    for i, a in enumerate(sys.argv):
        if a == "--ch":
            ch = int(sys.argv[i + 1])
    OUT.mkdir(parents=True, exist_ok=True)
    doc = pymupdf.open(PDF)
    mapping = json.loads(MAP.read_text(encoding="utf-8")) if MAP.exists() else {}
    done = []
    for p in range(13, 368):
        d = page_data(p)
        if not d:
            continue
        caps = []
        used = set()
        for ln in d["lines"]:
            m = CAP_RE.match(ln["text"].strip())
            if not m or int(m.group(1)) != ch or id(ln) in used:
                continue
            txt, bottom = merge_caption(d["lines"], ln)
            num = int(m.group(2))
            txt = re.sub(r"图\s*(\d+)\s*\.\s*(\d+)", r"图\1.\2", txt)
            if txt.startswith("图1.41"):
                txt = txt.replace("图1.41", "图1.4 ", 1)
                num = 4
            if len(txt) > 44 or "中显示" in txt or "所示" in txt:
                continue
            used.add(id(ln))
            caps.append((num, ln, txt, bottom))
        if not caps:
            continue
        page = doc[p - 1]
        scale = d["height"] / page.rect.height
        for num, ln, txt, bottom in sorted(caps, key=lambda x: x[1]["y0"]):
            top_px = find_top(d["lines"], ln["y0"], d["width"])
            clip = pymupdf.Rect(40 / scale, top_px / scale,
                                (d["width"] - 30) / scale, (ln["y0"] - 4) / scale)
            name = f"fig{ch}-{num}.png"
            page.get_pixmap(dpi=170, clip=clip).save(str(OUT / name))
            trim_white(OUT / name)
            mapping[f"图{ch}.{num}"] = {"file": name, "caption": txt, "page": p}
            done.append((name, p, txt[:30]))
    # 按图号归并，避免早期运行留下的「图1.41」残项
    clean = {}
    for k, v in mapping.items():
        cap = re.sub(r"^(图\s*(\d+)\.(\d+))\s*", r"\1 ", v["caption"])
        v["caption"] = cap
        m = re.match(r"图(\d+)\.(\d+)", cap)
        if not m:
            continue
        v["file"] = f"fig{m.group(1)}-{m.group(2)}.png"
        clean[f"图{m.group(1)}.{m.group(2)}"] = v
    MAP.write_text(json.dumps(clean, ensure_ascii=False, indent=2), encoding="utf-8")
    for x in done:
        print(*x)


if __name__ == "__main__":
    main()
