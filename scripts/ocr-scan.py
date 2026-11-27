#!/usr/bin/env python3
"""扫描版教材 OCR：逐页渲染 -> RapidOCR -> 每页一个 JSON（断点续跑）。

  python scripts/ocr-scan.py --pdf "D:/02-资料/笔记资料/2025王道/2025王道数据结构（带书签）.pdf" \
      --out _ocr/wd2025 --dpi 250 --workers 4

输出 <out>/page-0001.json : {page,width,height,dpi,lines:[{box:[x1,y1,x2,y2],text,score}]}
已存在的页会跳过，可随时中断后重跑补齐。
"""
import argparse
import json
import os
import sys
import time
from concurrent.futures import ProcessPoolExecutor, as_completed

import pymupdf

_ENGINE = {}
_THREADS = 4


def _engine():
    if "ocr" not in _ENGINE:
        # 每个进程限制 onnxruntime 线程数，避免多进程互相抢核导致整体变慢
        for key in ("OMP_NUM_THREADS", "ORT_NUM_THREADS", "OPENBLAS_NUM_THREADS", "MKL_NUM_THREADS"):
            os.environ[key] = str(_THREADS)
        from rapidocr_onnxruntime import RapidOCR
        _ENGINE["ocr"] = RapidOCR()
    return _ENGINE["ocr"]


def ocr_page(job):
    pdf_path, page_no, dpi, out_dir, threads = job
    global _THREADS
    _THREADS = threads
    out_path = os.path.join(out_dir, f"page-{page_no:04d}.json")
    if os.path.exists(out_path):
        return page_no, 0, "skip"

    doc = pymupdf.open(pdf_path)
    page = doc[page_no - 1]
    pix = page.get_pixmap(dpi=dpi)
    started = time.time()
    res, _ = _engine()(pix.tobytes("png"))
    lines = []
    for item in res or []:
        box, text, score = item
        text = (text or "").strip()
        if not text:
            continue
        xs = [p[0] for p in box]
        ys = [p[1] for p in box]
        try:
            s = float(score)
        except (TypeError, ValueError):
            s = 0.0
        lines.append({
            "box": [round(min(xs), 1), round(min(ys), 1), round(max(xs), 1), round(max(ys), 1)],
            "text": text,
            "score": round(s, 4),
        })
    payload = {
        "page": page_no,
        "width": pix.width,
        "height": pix.height,
        "dpi": dpi,
        "elapsed": round(time.time() - started, 2),
        "lines": lines,
    }
    with open(out_path, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False)
    doc.close()
    return page_no, len(lines), "ok"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--dpi", type=int, default=250)
    ap.add_argument("--workers", type=int, default=3)
    ap.add_argument("--threads", type=int, default=4, help="每个进程的 onnx 线程数")
    ap.add_argument("--start", type=int, default=1)
    ap.add_argument("--end", type=int, default=0, help="0 表示到最后一页")
    args = ap.parse_args()

    out_dir = os.path.abspath(args.out)
    os.makedirs(out_dir, exist_ok=True)

    doc = pymupdf.open(args.pdf)
    total = doc.page_count
    doc.close()
    end = args.end or total
    todo = list(range(args.start, min(end, total) + 1))
    print(f"[ocr] pages {args.start}-{end} / total {total}, dpi={args.dpi}, workers={args.workers}", flush=True)

    done = 0
    started = time.time()
    jobs = [(args.pdf, p, args.dpi, out_dir, args.threads) for p in todo]
    with ProcessPoolExecutor(max_workers=args.workers) as pool:
        futures = [pool.submit(ocr_page, job) for job in jobs]
        for fut in as_completed(futures):
            page_no, count, status = fut.result()
            done += 1
            if done % 10 == 0 or status == "ok":
                rate = done / max(1e-6, time.time() - started)
                eta = (len(todo) - done) / max(1e-6, rate) / 60
                print(f"[ocr] {done}/{len(todo)} p{page_no} lines={count} {status} {rate:.2f}p/s ETA {eta:.1f}m", flush=True)
    print(f"[ocr] finished in {(time.time() - started) / 60:.1f} min", flush=True)


if __name__ == "__main__":
    sys.exit(main())
