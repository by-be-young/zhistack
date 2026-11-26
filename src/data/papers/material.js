function splitBlocks(body) {
  const text = body.trim()
  const re = /(?:^|\n)(材料\s*[一二三四五六七八九十0-9]+)\s*\n/g
  const marks = []
  let m
  while ((m = re.exec(text)) !== null) {
    marks.push({ label: m[1].replace(/\s+/g, ''), start: m.index + (m[0].startsWith('\n') ? 1 : 0), bodyStart: m.index + m[0].length })
  }
  if (marks.length >= 2) {
    return marks.map((x, i) => ({
      label: x.label,
      text: text.slice(x.bodyStart, i + 1 < marks.length ? marks[i + 1].start : text.length).trim()
    })).filter(b => b.text)
  }
  return [{ label: '材料', text }]
}

/**
 * 政治材料分析题的原卷数据把材料与设问放在同一段 stem 中。
 * 这里在数据层拆出材料，题干只保留设问，UI 才能分栏同读。
 * 材料原文不做改写，仅按“材料1/材料2”标记分块。
 */
export function withMaterial(q) {
  if (!q || q.type !== 'subjective' || q.material || !q.stem) return q
  const cut = q.stem.search(/\n\n?（1）/)
  if (cut < 0) return q
  let body = q.stem.slice(0, cut).trim()
  const stem = q.stem.slice(cut).trim()
  body = body.replace(/^结合材料回答问题：?\s*/, '')
  if (!body) return q
  return {
    ...q,
    stem,
    material: {
      title: '阅读材料',
      blocks: splitBlocks(body)
    }
  }
}
