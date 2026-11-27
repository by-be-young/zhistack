import { paper2024_408 } from './2024-408.js'
import { paper2024_pol } from './2024-pol.js'
import { paper2024_math1 } from './2024-math1.js'
import { paper2024_en1 } from './2024-en1.js'
import { paper2023_en1 } from './2023-en1.js'
import { paper2023_pol } from './2023-pol.js'
import { paper2023_math1 } from './2023-math1.js'
import { paper2023_408 } from './2023-408.js'
import { paper2022_408 } from './2022-408.js'
import { paper2022_pol } from './2022-pol.js'
import { paper2022_math1 } from './2022-math1.js'
import { paper2022_en1 } from './2022-en1.js'
import { paper2025_408 } from './2025-408.js'
import { paper2025_math1 } from './2025-math1.js'
import { paper2025_en1 } from './2025-en1.js'
import { paper2025_pol } from './2025-pol.js'
import { paper2009_408 } from './2009-408.js'
import { paper2010_408 } from './2010-408.js'
import { paper2011_408 } from './2011-408.js'
import { paper2012_408 } from './2012-408.js'
import { paper2013_408 } from './2013-408.js'
import { paper2014_408 } from './2014-408.js'
import { paper2015_408 } from './2015-408.js'
import { paper2016_408 } from './2016-408.js'
import { paper2017_408 } from './2017-408.js'
import { paper2018_408 } from './2018-408.js'
import { paper2019_408 } from './2019-408.js'
import { paper2020_408 } from './2020-408.js'
import { paper2021_408 } from './2021-408.js'
import { paper2026_408 } from './2026-408.js'
export const papers = [
  paper2025_408,
  paper2025_math1,
  paper2025_en1,
  paper2025_pol,
  paper2024_408,
  paper2024_pol,
  paper2024_math1,
  paper2024_en1,
  paper2023_en1,
  paper2023_pol,
  paper2023_math1,
  paper2023_408,
  paper2022_408,
  paper2022_math1,
  paper2022_en1,
  paper2022_pol,
  paper2009_408,
  paper2010_408,
  paper2011_408,
  paper2012_408,
  paper2013_408,
  paper2014_408,
  paper2015_408,
  paper2016_408,
  paper2017_408,
  paper2018_408,
  paper2019_408,
  paper2020_408,
  paper2021_408,
  paper2026_408
]

export const paperById = Object.fromEntries(papers.map(p => [p.id, p]))

export const papersByYear = papers.reduce((acc, p) => {
  (acc[p.year] ||= []).push(p)
  return acc
}, {})

export const papersBySubject = papers.reduce((acc, p) => {
  for (const s of p.subjects) (acc[s] ||= []).push(p)
  return acc
}, {})
