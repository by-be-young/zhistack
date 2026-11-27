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
import { paper2010_pol } from './2010-pol.js'
import { paper2011_pol } from './2011-pol.js'
import { paper2012_pol } from './2012-pol.js'
import { paper2013_pol } from './2013-pol.js'
import { paper2014_pol } from './2014-pol.js'
import { paper2015_pol } from './2015-pol.js'
import { paper2016_pol } from './2016-pol.js'
import { paper2017_pol } from './2017-pol.js'
import { paper2018_pol } from './2018-pol.js'
import { paper2019_pol } from './2019-pol.js'
import { paper2020_pol } from './2020-pol.js'
import { paper2021_pol } from './2021-pol.js'
import { paper2026_pol } from './2026-pol.js'
import { paper2010_en1 } from './2010-en1.js'
import { paper2011_en1 } from './2011-en1.js'
import { paper2012_en1 } from './2012-en1.js'
import { paper2013_en1 } from './2013-en1.js'
import { paper2014_en1 } from './2014-en1.js'
import { paper2015_en1 } from './2015-en1.js'
import { paper2016_en1 } from './2016-en1.js'
import { paper2017_en1 } from './2017-en1.js'
import { paper2018_en1 } from './2018-en1.js'
import { paper2019_en1 } from './2019-en1.js'
import { paper2020_en1 } from './2020-en1.js'
import { paper2021_en1 } from './2021-en1.js'
import { paper2026_en1 } from './2026-en1.js'
import { paper2008_math1 } from './2008-math1.js'
import { paper2009_math1 } from './2009-math1.js'
import { paper2010_math1 } from './2010-math1.js'
import { paper2011_math1 } from './2011-math1.js'
import { paper2012_math1 } from './2012-math1.js'
import { paper2013_math1 } from './2013-math1.js'
import { paper2014_math1 } from './2014-math1.js'
import { paper2015_math1 } from './2015-math1.js'
import { paper2016_math1 } from './2016-math1.js'
import { paper2017_math1 } from './2017-math1.js'
import { paper2018_math1 } from './2018-math1.js'
import { paper2019_math1 } from './2019-math1.js'
import { paper2020_math1 } from './2020-math1.js'
import { paper2021_math1 } from './2021-math1.js'
import { paper2026_math1 } from './2026-math1.js'
export const papers = [
  paper2026_math1,
  paper2021_math1,
  paper2020_math1,
  paper2019_math1,
  paper2018_math1,
  paper2017_math1,
  paper2016_math1,
  paper2015_math1,
  paper2014_math1,
  paper2013_math1,
  paper2012_math1,
  paper2011_math1,
  paper2010_math1,
  paper2009_math1,
  paper2008_math1,
  paper2026_en1,
  paper2021_en1,
  paper2020_en1,
  paper2019_en1,
  paper2018_en1,
  paper2017_en1,
  paper2016_en1,
  paper2015_en1,
  paper2014_en1,
  paper2013_en1,
  paper2012_en1,
  paper2011_en1,
  paper2010_en1,
  paper2026_pol,
  paper2021_pol,
  paper2020_pol,
  paper2019_pol,
  paper2018_pol,
  paper2017_pol,
  paper2016_pol,
  paper2015_pol,
  paper2014_pol,
  paper2013_pol,
  paper2012_pol,
  paper2011_pol,
  paper2010_pol,
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
