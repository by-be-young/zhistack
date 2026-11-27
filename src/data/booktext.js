// 全文录入的书目：正文不入仓库打包，按节从 public/booktext/ 懒加载。
// 目录由 scripts/build-book-markdown.py（Markdown 书）或 scripts/build-book-text.py（HTML 书）生成，勿手工编辑。
// text.md = true 表示正文是 public/booktext/<base>/md/<id>.md，由前端用 markdown-it 渲染。
import osWd2025 from './booktext/os-wd2025.js'
import cnWd2025 from './booktext/cn-wd2025.js'
import dsWd2025 from './booktext/ds-wd2025.js'

export const textBooks = [
  {
    id: 'book-os-wd2025', subject: 'os',
    title: '2025 操作系统考研复习指导', author: '王道论坛',
    edition: '2025 版', publisher: '电子工业出版社', pages: 368,
    note: '整本按原书目录逐页 OCR 录入，正文为 Markdown（标题、提示块、表格均已结构化），插图未图形化，个别字符可能有识别误差。',
    text: { base: 'booktext/os-wd2025', md: true, sections: osWd2025.chapters.reduce((n, c) => n + c.children.length, 0), chars: osWd2025.chars },
    chapters: osWd2025.chapters
  },
  {
    id: 'book-ds-wd2025', subject: 'ds',
    title: '2025 数据结构考研复习指导', author: '王道论坛',
    edition: '2025 版', publisher: '电子工业出版社', pages: 420,
    note: '整本按原书目录逐页 OCR 录入，非 PDF 挂载；结构图以「主项 ｜ 分支」的文字近似呈现，算法代码保留原行序，个别字符可能有识别误差。',
    text: { base: 'booktext/ds-wd2025', sections: dsWd2025.chapters.reduce((n, c) => n + c.children.length, 0), chars: dsWd2025.chars },
    chapters: dsWd2025.chapters
  },
  {
    id: 'book-cn-wd2025', subject: 'cn',
    title: '2025 计算机网络考研复习指导', author: '王道论坛',
    edition: '2025 版', publisher: '电子工业出版社', pages: 310,
    note: '整本按原书目录逐页 OCR 录入，非 PDF 挂载；协议时序图与表格以文字近似呈现，个别字符可能有识别误差。',
    text: { base: 'booktext/cn-wd2025', sections: cnWd2025.chapters.reduce((n, c) => n + c.children.length, 0), chars: cnWd2025.chars },
    chapters: cnWd2025.chapters
  },
]
