// 全文录入的书目：正文不入仓库打包，按节从 public/booktext/ 懒加载。
// 目录由 scripts/build-book-text.py 生成，勿手工编辑 booktext/*.json。
import osWd2025 from './booktext/os-wd2025.js'

export const textBooks = [
  {
    id: 'book-os-wd2025', subject: 'os',
    title: '2025 操作系统考研复习指导', author: '王道论坛',
    edition: '2025 版', publisher: '电子工业出版社', pages: 368,
    note: '整本按原书目录逐页 OCR 录入，非 PDF 挂载；插图未图形化，公式与表格以文字近似呈现，个别字符可能有识别误差。',
    text: { base: 'booktext/os-wd2025', sections: osWd2025.chapters.reduce((n, c) => n + c.children.length, 0), chars: osWd2025.chars },
    chapters: osWd2025.chapters
  }
]
