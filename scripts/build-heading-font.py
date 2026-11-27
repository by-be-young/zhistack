# -*- coding: utf-8 -*-
"""生成中文标题字体的 woff2 子集。

源字体：仓耳今楷 01 W04（仅个人自用）。原文件 18 MB，
若整站直接引用会让首屏多下载十几 MB；这里只保留「GB2312 常用字 +
全站标题里出现的字 + 标点符号」，输出到 src/assets/fonts。

用法：python scripts/build-heading-font.py [--full-gb2312]
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import re
import sys
import time

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_FONT = r"D:\01-项目\YoungBlog\youngblog\src\assets\fonts\仓耳今楷01-W04.ttf"
OUT_DIR = os.path.join(ROOT, "src", "assets", "fonts")
OUT_FILE = os.path.join(OUT_DIR, "canger-jinkai-subset.woff2")

PUNCT = (
    "".join(chr(c) for c in range(0x20, 0x7F))
    + "".join(chr(c) for c in range(0x2000, 0x206F))
    + "".join(chr(c) for c in range(0x2190, 0x21A0))
    + "".join(chr(c) for c in range(0x25A0, 0x25FF))
    + "".join(chr(c) for c in range(0x2600, 0x27C0))
    + "".join(chr(c) for c in range(0x3000, 0x3040))
    + "".join(chr(c) for c in range(0xFF00, 0xFFF0))
    + "·—–…“”‘’《》〈〉、。，；：！？（）【】〔〕『』「」"
)


def gb2312_chars(level: int) -> str:
    chars = []
    hi_start, hi_end = (0xB0, 0xD7) if level == 1 else (0xD8, 0xF7)
    for b1 in range(hi_start, hi_end + 1):
        for b2 in range(0xA1, 0xFF):
            try:
                chars.append(bytes([b1, b2]).decode("gb2312"))
            except UnicodeDecodeError:
                pass
    return "".join(chars)


def site_chars() -> str:
    """收集站内可能出现在标题里的字：笔记标题、书目录、知识点标题。"""
    buf = []
    index = os.path.join(ROOT, "src", "data", "notes", "index.js")
    if os.path.exists(index):
        buf.append(open(index, encoding="utf-8").read())
    for path in glob.glob(os.path.join(ROOT, "src", "data", "knowledge", "*.js")):
        buf.append(open(path, encoding="utf-8").read())
    for path in glob.glob(os.path.join(ROOT, "public", "booktext", "*", "toc.json")):
        try:
            data = json.load(open(path, encoding="utf-8"))
        except Exception:
            continue
        buf.append(json.dumps(data, ensure_ascii=False))
    text = "\n".join(buf)
    # 只保留汉字，去掉代码与注释里的拉丁字符噪声
    return "".join(ch for ch in text if "\u3400" <= ch <= "\u9fff")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--full-gb2312", action="store_true", help="同时保留 GB2312 二级字（更全，体积更大）")
    args = ap.parse_args()

    if not os.path.exists(SRC_FONT):
        print("找不到源字体：%s" % SRC_FONT)
        return 1

    charset = PUNCT + gb2312_chars(1) + site_chars()
    if args.full_gb2312:
        charset += gb2312_chars(2)
    charset = "".join(sorted(set(charset)))
    print("目标字符数：%d" % len(charset))

    os.makedirs(OUT_DIR, exist_ok=True)
    font = TTFont(SRC_FONT, lazy=True)
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.desubroutinize = True
    opts.layout_features = ["*"]
    opts.name_IDs = ["*"]
    opts.notdef_outline = True
    opts.drop_tables += ["DSIG"]
    subsetter = subset.Subsetter(options=opts)
    subsetter.populate(text=charset)
    subsetter.subset(font)
    font.save(OUT_FILE)

    size = os.path.getsize(OUT_FILE) / 1024 / 1024
    print("输出：%s（%.2f MB，%d 字形）" % (OUT_FILE, size, len(font.getGlyphOrder())))
    return 0


if __name__ == "__main__":
    sys.exit(main())
