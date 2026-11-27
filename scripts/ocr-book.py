#!/usr/bin/env python3
"""三本扫描教材共用的 OCR 入口：逐页渲染 -> RapidOCR -> 每页一个 JSON（断点续跑）。

同一台机器上并行跑多本时，用 --workers 控制本任务槽位、--slots 控制全局上限：
每个 worker 只开 2 个 ONNX 线程，靠多进程吃多核，避免线程风暴把机器压死。

    python scripts/ocr-book.py --book os2025 --workers 3

输出 <out>/page-0001.json（--out 缺省为 _ocr/<book>）:
  {page, width, height, dpi, elapsed, lines:[{x0,y0,x1,y1,text,score}]}
已存在的页会跳过，可随时中断后重跑补齐。
"""
import os

# 必须在导入 numpy / onnxruntime 之前设定，否则每个进程会各开满核线程
os.environ.setdefault("OMP_NUM_THREADS", "2")
os.environ.setdefault("ORT_NUM_THREADS", "2")
os.environ.setdefault("OPENBLAS_NUM_THREADS", "2")

import argparse
import atexit
import json
import sys
import time
import uuid
from concurrent.futures import ProcessPoolExecutor, as_completed

import pymupdf

BOOKS = {
    "os2025": r"D:\02-资料\笔记资料\2025王道\2025王道操作系统（带书签）.pdf",
    "ds2025": r"D:\02-资料\笔记资料\2025王道\2025王道数据结构（带书签）.pdf",
    "cn2025": r"D:\02-资料\笔记资料\2025王道\2025王道计算机网络（带书签）.pdf",
    "co2025": r"D:\02-资料\笔记资料\2025王道\2025王道计算机组成原理（带书签）.pdf",
}

BASE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "_ocr"))
POOL_DIR = os.path.join(BASE, ".pool")

_ENGINE = {}
_SLOT = None


def _acquire_slot(tag, max_slots):
    """全局槽位：_ocr/.pool 下的原子文件，防止三个任务各自开满进程。"""
    if max_slots <= 0:
        return None
    os.makedirs(POOL_DIR, exist_ok=True)
    path = None
    while True:
        stale = []
        for name in os.listdir(POOL_DIR):
            if not name.startswith("slot-"):
                continue
            full = os.path.join(POOL_DIR, name)
            try:
                if time.time() - os.path.getmtime(full) > 600:
                    stale.append(full)
            except OSError:
                pass
        for full in stale:
            try:
                os.remove(full)
            except OSError:
                pass
        active = [n for n in os.listdir(POOL_DIR) if n.startswith("slot-")]
        if len(active) < max_slots:
            path = os.path.join(POOL_DIR, f"slot-{tag}-{os.getpid()}-{uuid.uuid4().hex[:6]}")
            try:
                with open(path, "x", encoding="utf-8") as fh:
                    fh.write(str(os.getpid()))
                return path
            except FileExistsError:
                continue
        else:
            time.sleep(2)


def _release_slot():
    if _SLOT and os.path.exists(_SLOT):
        try:
            os.remove(_SLOT)
        except OSError:
            pass


def init_worker(pdf_path, out_dir, dpi, tag, max_slots):
    global _SLOT
    from rapidocr_onnxruntime import RapidOCR
    _ENGINE["ocr"] = RapidOCR()
    _ENGINE["doc"] = pymupdf.open(pdf_path)
    _ENGINE["out_dir"] = out_dir
    _ENGINE["dpi"] = dpi
    _SLOT = _acquire_slot(tag, max_slots)
    atexit.register(_release_slot)


def ocr_page(page_no):
    out_dir = _ENGINE["out_dir"]
    out_path = os.path.join(out_dir, f"page-{page_no:04d}.json")
    if os.path.exists(out_path):
        return page_no, 0, "skip"
    if _SLOT and os.path.exists(_SLOT):
        os.utime(_SLOT, None)
    page = _ENGINE["doc"][page_no - 1]
    pix = page.get_pixmap(dpi=_ENGINE["dpi"])
    started = time.time()
    res, _ = _ENGINE["ocr"](pix.tobytes("png"))
    lines = []
    for item in res or []:
        box, text, score = item[0], item[1], item[2]
        text = (text or "").strip()
        if not text:
            continue
        xs = [float(p[0]) for p in box]
        ys = [float(p[1]) for p in box]
        try:
            s = float(score)
        except (TypeError, ValueError):
            s = 0.0
        lines.append({
            "x0": round(min(xs), 1), "y0": round(min(ys), 1),
            "x1": round(max(xs), 1), "y1": round(max(ys), 1),
            "text": text, "score": round(s, 4),
        })
    payload = {
        "page": page_no, "width": pix.width, "height": pix.height,
        "dpi": _ENGINE["dpi"], "elapsed": round(time.time() - started, 2), "lines": lines,
    }
    tmp = out_path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False)
    os.replace(tmp, out_path)
    return page_no, len(lines), "ok"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--book", choices=sorted(BOOKS), help="预置书目；也可用 --pdf 指定")
    ap.add_argument("--pdf")
    ap.add_argument("--out")
    ap.add_argument("--dpi", type=int, default=200)
    ap.add_argument("--workers", type=int, default=3)
    ap.add_argument("--slots", type=int, default=8, help="全局并发槽位上限，0 表示不限制")
    ap.add_argument("--start", type=int, default=1)
    ap.add_argument("--end", type=int, default=0, help="0 表示到最后一页")
    args = ap.parse_args()

    pdf = args.pdf or (BOOKS[args.book] if args.book else None)
    if not pdf:
        ap.error("需要 --book 或 --pdf")
    tag = args.book or os.path.splitext(os.path.basename(pdf))[0]
    out_dir = os.path.abspath(args.out or os.path.join(BASE, tag))
    os.makedirs(out_dir, exist_ok=True)

    doc = pymupdf.open(pdf)
    total = doc.page_count
    doc.close()
    end = args.end or total
    end = min(end, total)
    todo = [p for p in range(args.start, end + 1)
            if not os.path.exists(os.path.join(out_dir, f"page-{p:04d}.json"))]
    print(f"[ocr] {tag} pages {args.start}-{end}/{total}, todo={len(todo)}, "
          f"dpi={args.dpi}, workers={args.workers}, slots={args.slots}", flush=True)
    if not todo:
        print("[ocr] nothing to do", flush=True)
        return 0

    done = 0
    started = time.time()
    with ProcessPoolExecutor(
        max_workers=args.workers,
        initializer=init_worker,
        initargs=(pdf, out_dir, args.dpi, tag, args.slots),
    ) as pool:
        for chunk_start in range(0, len(todo), args.workers * 6):
            chunk = todo[chunk_start:chunk_start + args.workers * 6]
            futures = [pool.submit(ocr_page, p) for p in chunk]
            for fut in as_completed(futures):
                try:
                    page_no, count, status = fut.result()
                except Exception as exc:  # 单页失败不拖垮整批
                    print(f"[ocr] page failed: {exc!r}", flush=True)
                    done += 1
                    continue
                done += 1
                if done % 5 == 0 or done == len(todo):
                    rate = done / max(1e-6, time.time() - started)
                    eta = (len(todo) - done) / max(1e-6, rate) / 60
                    print(f"[ocr] {done}/{len(todo)} p{page_no} lines={count} {status} "
                          f"{rate:.2f}p/s ETA {eta:.1f}m", flush=True)
    print(f"[ocr] finished in {(time.time() - started) / 60:.1f} min", flush=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
