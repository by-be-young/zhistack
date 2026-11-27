/* 正文渲染前处理：标题层级归一 + 表格包裹 + 深色主题下的代码配色。
   数据里的标题从 h3 起跳（Docsy/Booktext 导出结果），这里整体上提到 h1 顶层，
   让「h1 = 一级标题」在数据层和视觉层同时成立。 */

const DARK_SYNTAX = {
  '#000': '#C9D3CE',
  '#000000': '#C9D3CE',
  '#8f5902': '#93A79C', // 注释
  '#204a87': '#8FB4E3', // 关键字 / 类型
  '#ce5c00': '#E8A76B', // 内建名
  '#0000cf': '#A5A2FF', // 常量 / 数字
  '#4e9a06': '#9BCB7A', // 字符串
  '#f57900': '#F0B36A',
  '#a40000': '#F08F8F', // 强调 / 错误
  '#f8f8f8': 'transparent'
}

export function isDarkTheme() {
  return document.documentElement.dataset.theme !== 'light'
}

/** 把标题整体上提，使最小层级落到 h1；返回偏移量供目录复用。 */
export function levelHeadings(html) {
  const levels = []
  for (const m of html.matchAll(/<h([1-6])\b/g)) levels.push(Number(m[1]))
  if (!levels.length) return { html, shift: 0 }
  const min = Math.min(...levels)
  if (min <= 1) return { html, shift: 0 }
  const shift = min - 1
  const out = html.replace(/<(\/?)h([1-6])\b/g, (m, close, lv) => `<${close}h${Math.max(1, Number(lv) - shift)}`)
  return { html: out, shift }
}

/** 包一层滚动容器，让宽表能横向滚动且保留圆角。 */
function wrapTables(html) {
  return html
    .replace(/<table\b([^>]*)>/gi, '<div class="doc-table"><table$1>')
    .replace(/<\/table>/gi, '</table></div>')
}

/** 源代码块的行内颜色是浅色主题写死的，深色下要映射成可读的同色系。 */
function paintSyntax(html) {
  return html.replace(/(^|[;"'\s])color:\s*(#[0-9a-fA-F]{3,6})/g, (m, pre, hex) => {
    const to = DARK_SYNTAX[hex.toLowerCase()] || hex
    return `${pre}color:${to}`
  })
}

/** 统一的正文预处理入口。 */
export function prepareDocHtml(html) {
  if (!html) return { html: '', shift: 0 }
  const leveled = levelHeadings(html)
  let out = wrapTables(leveled.html)
  if (isDarkTheme()) out = paintSyntax(out)
  return { html: out, shift: leveled.shift }
}

/** 监听主题切换，回调里重新渲染正文。 */
export function watchTheme(cb) {
  const root = document.documentElement
  let last = root.dataset.theme
  const mo = new MutationObserver(() => {
    if (root.dataset.theme === last) return
    last = root.dataset.theme
    cb(last)
  })
  mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
  return () => mo.disconnect()
}
