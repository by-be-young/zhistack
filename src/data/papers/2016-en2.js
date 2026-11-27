const P = 'paper-2016-en2'
const Y = 2016
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const MATERIALS = {
  cloze: {
    title: "Section I · Use of English", fontSize: 16,
    blocks: [
      { label: "Text", text: "Happy people work differently. They’re more productive, more creative, and willing to take greater risks. And new research suggests that happiness might influence (1)____ firms work, too. Companies located in places with happier people invest more, according to a recent research paper. (2)____ , firms in happy places spend more on R&D (research and development). That’s because happiness is linked to the kind of longer-term thinking (3)____ for making investments for the future. The researchers wanted to know if the (4)____ and inclination for risk-taking that come with happiness would (5)____ the way companies invested. So they compared U.S. cities’ average happiness (6)____ by Gallup polling with the investment activity of publicly traded firms in those areas. (7)____ enough, firms’ investment and R&D intensity were correlated with the happiness of the area in which they were (8)____ . But is it really happiness that’s linked to investment, or could something else about happier cities (9)____ why firms there spend more on R&D? To find out, the researchers controlled for various (10)____ that might make firms more likely to invest—like size, industry, and sales—and for indicators that a place was (11)____ to live in, like growth in wages or population. The link between happiness and investment generally (12)____ even after accounting for these things. The correlation between happiness and investment was particularly strong for younger firms, which the authors (13)____ to “less codified decision making process” and the possible presence of “younger and less (14)____ managers who are more likely to be influenced by sentiment.” The relationship was (15)____ stronger in places where happiness was spread more (16)____ . Firms seem to invest more in places where most people are relatively happy, rather than in places with happiness inequality. (17)____ this doesn’t prove that happiness causes firms to invest more or to take a longer-term view, the authors believe it at least (18)____ at that possibility. It’s not hard to imagine that local culture and sentiment would help (19)____ how executives think about the future. “It surely seems plausible that happy people would be more forward-thinking and creative and (20)____ R&D more than the average,” said one researcher." },
    ]
  },
  text1: {
    title: "Text 1", fontSize: 16,
    blocks: [
      { label: "Passage", text: "It’s true that high-school coding classes aren’t essential for learning computer science in college. Students without experience can catch up after a few introductory courses, said Tom Cortina, the assistant dean at Carnegie Mellon’s School of Computer Science.\n\nHowever, Cortina said, early exposure is beneficial. When younger kids learn computer science, they learn that it’s not just a confusing, endless string of letters and numbers – but a tool to build apps, or create artwork, or test hypotheses. It’s not as hard for them to transform their thought processes as it is for older students. Breaking down problems into bite-sized chunks and using code to solve them becomes normal. Giving more children this training could increase the number of people interested in the field and help fill the jobs gap, Cortina said.\n\nStudents also benefit from learning something about coding before they get to college, where introductory computer-science classes are packed to the brim, which can drive the less-experienced or -determined students away.\n\nThe Flatiron School, where people pay to learn programming, started as one of the many coding bootcamps that’s become popular for adults looking for a career change. The high-schoolers get the same curriculum, but “we try to gear lessons toward things they’re interested in,” said Victoria Friedman, an instructor. For instance, one of the apps the students are developing suggests movies based on your mood.\n\nThe students in the Flatiron class probably won’t drop out of high school and build the next Facebook. Programming languages have a quick turnover, so the “Ruby on Rails” language they learned may not even be relevant by the time they enter the job market. But the skills they learn – how to think logically through a problem and organize the results – apply to any coding language, said Deborah Seehorn, an education consultant for the state of North Carolina.\n\nIndeed, the Flatiron students might not go into IT at all. But creating a future army of coders is not the sole purpose of the classes. These kids are going to be surrounded by computers – in their pockets, in their offices, in their homes – for the rest of their lives. The younger they learn how computers think, how to coax the machine into producing what they want – the earlier they learn that they have the power to do that – the better." },
    ]
  },
  text2: {
    title: "Text 2", fontSize: 16,
    blocks: [
      { label: "Passage", text: "Biologists estimate that as many as 2 million lesser prairie chickens – a kind of bird living on stretching grasslands – once lent red to the often grey landscape of the midwestern and southwestern United States. But just some 22,000 birds remain today, occupying about 16% of the species’ historic range.\n\nThe crash was a major reason the U.S. Fish and Wildlife Service (USFWS) decided to formally list the bird as threatened. “The lesser prairie chicken is in a desperate situation,” said USFWS Director Daniel Ashe. Some environmentalists, however, were disappointed. They had pushed the agency to designate the bird as “endangered,” a status that gives federal officials greater regulatory power to crack down on threats. But Ashe and others argued that the “threatened” tag gave the federal government flexibility to try out new, potentially less confrontational conservation approaches. In particular, they called for forming closer collaborations with western state governments, which are often uneasy with federal action, and with the private landowners who control an estimated 95% of the prairie chicken’s habitat.\n\nUnder the plan, for example, the agency said it would not prosecute landowners or businesses that unintentionally kill, harm, or disturb the bird, as long as they had signed a range-wide management plan to restore prairie chicken habitat. Negotiated by USFWS and the states, the plan requires individuals and businesses that damage habitat as part of their operations to pay into a fund to replace every acre destroyed with 2 new acres of suitable habitat. The fund will also be used to compensate landowners who set aside habitat. USFWS also set an interim goal of restoring prairie chicken populations to an annual average of 67,000 birds over the next 10 years. And it gives the Western Association of Fish and Wildlife Agencies (WAFWA), a coalition of state agencies, the job of monitoring progress. Overall, the idea is to let “states remain in the driver’s seat for managing the species,” Ashe said.\n\nNot everyone buys the win-win rhetoric. Some Congress members are trying to block the plan, and at least a dozen industry groups, four states, and three environmental groups are challenging it in federal court. Not surprisingly, industry groups and states generally argue it goes too far; environmentalists say it doesn’t go far enough. “The federal government is giving responsibility for managing the bird to the same industries that are pushing it to extinction,” says biologist Jay Lininger." },
    ]
  },
  text3: {
    title: "Text 3", fontSize: 16,
    blocks: [
      { label: "Passage", text: "That everyone’s too busy these days is a cliché. But one specific complaint is made especially mournfully: There’s never any time to read.\n\nWhat makes the problem thornier is that the usual time-management techniques don’t seem sufficient. The web’s full of articles offering tips on making time to read: “Give up TV” or “Carry a book with you at all times.” But in my experience, using such methods to free up the odd 30 minutes doesn’t work. Sit down to read and the flywheel of work-related thoughts keeps spinning – or else you’re so exhausted that a challenging book’s the last thing you need. The modern mind, Tim Parks, a novelist and critic, writes, “is overwhelmingly inclined toward communication&mldr;. It is not simply that one is interrupted; it is that one is actually inclined to interruption.” Deep reading requires not just time, but a special kind of time which can’t be obtained merely by becoming more efficient.\n\nIn fact, “becoming more efficient” is part of the problem. Thinking of time as a resource to be maximised means you approach it instrumentally, judging any given moment as well spent only in so far as it advances progress toward some goal. Immersive reading, by contrast, depends on being willing to risk inefficiency, goallessness, even time-wasting. Try to slot it in as a to-do list item and you’ll manage only goal-focused reading – useful, sometimes, but not the most fulfilling kind. “The future comes at us like empty bottles along an unstoppable and nearly infinite conveyor belt,” writes Gary Eberle in his book Sacred Time, and “we feel a pressure to fill these different-sized bottles (days, hours, minutes) as they pass, for if they get by without being filled, we will have wasted them.” No mind-set could be worse for losing yourself in a book.\n\nSo what does work? Perhaps surprisingly, scheduling regular times for reading. You’d think this might fuel the efficiency mind-set, but in fact, Eberle notes, such ritualistic behaviour helps us “step outside time’s flow” into “soul time.” You could limit distractions by reading only physical books, or on single-purpose e-readers. “Carry a book with you at all times” can actually work, too – providing you dip in often enough, so that reading becomes the default state from which you temporarily surface to take care of business, before dropping back down. On a really good day, it no longer feels as if you’re “making time to read,” but just reading, and making time for everything else." },
    ]
  },
  text4: {
    title: "Text 4", fontSize: 16,
    blocks: [
      { label: "Passage", text: "Against a backdrop of drastic changes in economy and population structure, younger Americans are drawing a new 21st-century road map to success, a latest poll has found.\n\nAcross generational lines, Americans continue to prize many of the same traditional milestones of a successful life, including getting married, having children, owning a home, and retiring in their sixties. But while young and old mostly agree on what constitutes the finish line of a fulfilling life, they offer strikingly different paths for reaching it.\n\nYoung people who are still getting started in life were more likely than older adults to prioritize personal fulfillment in their work, to believe they will advance their careers most by regularly changing jobs, to favor communities with more public services and a faster pace of life, to agree that couples should be financially secure before getting married or having children, and to maintain that children are best served by two parents working outside the home, the survey found.\n\nFrom career to community and family, these contrasts suggest that in the aftermath of the searing Great Recession, those just starting out in life are defining priorities and expectations that will increasingly spread through virtually all aspects of American life, from consumer preferences to housing patterns to politics.\n\nYoung and old converge on one key point: Overwhelming majorities of both groups said they believe it is harder for young people today to get started in life than it was for earlier generations. While younger people are somewhat more optimistic than their elders about the prospects for those starting out today, big majorities in both groups believe those “just getting started in life” face a tougher climb than earlier generations in reaching such signpost achievements as securing a good-paying job, starting a family, managing debt, and finding affordable housing.\n\nPete Schneider considers the climb tougher today. Schneider, a 27-year-old auto technician from the Chicago suburbs, says he struggled to find a job after graduating from college. Even now that he is working steadily, he said, “I can’t afford to pay my monthly mortgage payments on my own, so I have to rent rooms out to people to make that happen.” Looking back, he is struck that his parents could provide a comfortable life for their children even though neither had completed college when he was young. “I still grew up in an upper middle-class home with parents who didn’t have college degrees,” Schneider said. “I don’t think people are capable of that anymore.”" },
    ]
  },
  partB: {
    title: "Part B · 新题型", fontSize: 16,
    blocks: [
      { label: "Passage & Options", text: "[A] Be silly\n\n[B] Have fun\n\n[C] Ask for help\n\n[D] Express your emotions\n\n[E] Don’t overthink it\n\n[F] Be easily pleased\n\n[G] Notice things\n\nAct Your Shoe Size, Not Your Age\n\nAs adults, it seems that we are constantly pursuing happiness, often with mixed results. Yet children appear to have it down to an art – and for the most part they don’t need self-help books or therapy. Instead, they look after their wellbeing instinctively, and usually more effectively than we do as grownups. Perhaps it’s time to learn a few lessons from them.\n\n41.__________________________\n\nWhat does a child do when he’s sad? He cries. When he’s angry? He shouts. Scared? Probably a bit of both. As we grow up, we learn to control our emotions so they are manageable and don’t dictate our behaviours, which is in many ways a good thing. But too often we take this process too far and end up suppressing emotions, especially negative ones. That’s about as effective as brushing dirt under a carpet and can even make us ill. What we need to do is find a way to acknowledge and express what we feel appropriately, and then – again, like children – move on.\n\n42.__________________________\n\nA couple of Christmases ago, my youngest stepdaughter, who was nine years old at the time, got a Superman T-shirt for Christmas. It cost less than a fiver but she was overjoyed, and couldn’t stop talking about it. Too often we believe that a new job, bigger house or better car will be the magic silver bullet that will allow us to finally be content, but the reality is these things have very little lasting impact on our happiness levels. Instead, being grateful for small things every day is a much better way to improve wellbeing.\n\nHave you ever noticed how much children laugh? If we adults could indulge in a bit of silliness and giggling, we would reduce the stress hormones in our bodies, increase good hormones like endorphins, improve blood flow to our hearts and even have a greater chance of fighting off infection. All of which would, of course, have a positive effect on our happiness levels.\n\n44.__________________________\n\nThe problem with being a grownup is that there’s an awful lot of serious stuff to deal with – work, mortgage payments, figuring out what to cook for dinner. But adults also have the luxury of being able to control our own diaries and it’s important that we schedule in time to enjoy the things we love. Those things might be social, sporting, creative or completely random (dancing around the living room, anyone?) – it doesn’t matter, so long as they’re enjoyable, and not likely to have negative side effects, such as drinking too much alcohol or going on a wild spending spree if you’re on a tight budget.\n\n45.__________________________\n\nHaving said all of the above, it’s important to add that we shouldn’t try too hard to be happy. Scientists tell us this can backfire and actually have a negative impact on our wellbeing. As the Chinese philosopher Chuang Tzu is reported to have said: “Happiness is the absence of striving for happiness.” And in that, once more, we need to look to the example of our children, to whom happiness is not a goal but a natural byproduct of the way they live." },
    ]
  },
  partC: {
    title: "Part C · 翻译", fontSize: 16,
    blocks: [
      { label: "Passage", text: "The supermarket is designed to lure customers into spending as much time as possible within its doors. The reason for this is simple: The longer you stay in the store, the more stuff you’ll see, and the more stuff you see, the more you’ll buy. And supermarkets contain a lot of stuff. The average supermarket, according to the Food Marketing Institute, carries some 44,000 different items, and many carry tens of thousands more. The sheer volume of available choice is enough to send shoppers into a state of information overload. According to brain-scan experiments, the demands of so much decision-making quickly become too much for us. After about 40 minutes of shopping, most people stop struggling to be rationally selective, and instead begin shopping emotionally – which is the point at which we accumulate the 50 percent of stuff in our cart that we never intended buying." },
    ]
  },
}

const base = (n, kid, extra = {}) => ({
  id: `q-en2-2016-${String(n).padStart(2, '0')}`,
  subject: 'en', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2016 考研英语（二）真题',
  ...extra
})

const raw = [
  base(1, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 1 空",
    options: [{ key: "A", text: "why" }, { key: "B", text: "how" }, { key: "C", text: "where" }, { key: "D", text: "when" }],
    answer: ["B"],
    explain: "解析：\n\n第 1 题空格所在的句子是：\n\nAnd new research suggests that happiness might influence ______ firms work, too.\n\n这里要表达的是“幸福感可能影响公司如何运作”。\n\nfirms work 是一个主谓结构，需要填入一个关系副词或连接词，表示“方式”。\n\nwhy 表示原因，how 表示方式，where 表示地点，when 表示时间。\n\n从上下文看，这里是在说幸福感会影响公司的工作方式（与前面提到的“工作更高效、更有创造力”等呼应），因此选 how。\n\n答案：B. how",
    materialId: "cloze"
  }),
  base(2, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 2 空",
    options: [{ key: "A", text: "In return" }, { key: "B", text: "In particular" }, { key: "C", text: "In contrast" }, { key: "D", text: "In conclusion" }],
    answer: ["B"],
    explain: "解析：\n\n上下文逻辑\n前一句提到“公司位于居民更快乐的地方会投资更多”，本句接着说“快乐地区的公司在研发上花费更多”。\n后者是前者的一个具体表现或强调，属于从一般到具体的递进关系。\n\n选项分析\n\nA. In return（作为回报）→ 上下文没有“互为因果”或“回报”的逻辑。\n\nB. In particular（尤其，特别）→ 表示具体说明，符合“投资更多”中特别强调“研发支出更多”的语义。\n\nC. In contrast（相比之下）→ 表示对比，但这里不是对比，而是具体化。\n\nD. In conclusion（总之）→ 用于总结，这里并非总结前文。\n\n因此，此处应选 B. In particular，表示“特别是，快乐地区的公司会在研发上投入更多”。\n\n答案：B",
    materialId: "cloze"
  }),
  base(3, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 3 空",
    options: [{ key: "A", text: "necessary" }, { key: "B", text: "famous" }, { key: "C", text: "perfect" }, { key: "D", text: "sufficient" }],
    answer: ["A"],
    explain: "解析：\n第 3 题所在句子为：\n\nThat’s because happiness is linked to the kind of longer-term thinking necessary for making investments for the future.\n\n分析：\n\n句子结构是 “the kind of longer-term thinking ___ for making investments”，这里需要一个形容词，表示这种“长远思维”对于未来投资来说是必需的。\n\nnecessary for 是固定搭配，意为“对……是必要的”，符合语境。\n\nfamous for（因……出名）、perfect for（对……完美）、sufficient for（对……足够）在语义上都不如 necessary 贴切，因为这里强调因果关系：幸福促进长远思维，而长远思维是未来投资必需的，不是仅仅“足够”或“完美”而已。\n\n因此正确答案是 A. necessary。",
    materialId: "cloze"
  }),
  base(4, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 4 空",
    options: [{ key: "A", text: "individualism" }, { key: "B", text: "realism" }, { key: "C", text: "optimism" }, { key: "D", text: "modernism" }],
    answer: ["C"],
    explain: "解析：\n\n上下文逻辑\n文章提到快乐的人更富有创造力、更愿意承担风险，而研究想探讨的是快乐带来的 “什么” 和 “冒险倾向” 是否影响公司投资方式。\n从常识和语境来看，快乐通常与积极、乐观的心态相关，而乐观（optimism）会让人更愿意进行长期投资和承担风险。\n\n词义搭配\n\nA. individualism（个人主义）—— 与“快乐带来的”直接关联性不强，且与风险倾向并列不合适。\n\nB. realism（现实主义）—— 现实主义不一定与快乐相关，甚至可能更谨慎，不符合语境。\n\nC. optimism（乐观主义）—— 快乐常带来乐观，乐观的人更可能进行长期投资，符合上下文。\n\nD. modernism（现代主义）—— 与快乐、风险倾向无直接关系。\n\n复现线索\n后文提到 “forward-thinking and creative” 以及 “longer-term thinking”，这些都与 乐观（optimism） 的心理特征一致。\n\n因此，第 4 题选 C. optimism。",
    materialId: "cloze"
  }),
  base(5, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 5 空",
    options: [{ key: "A", text: "miss" }, { key: "B", text: "echo" }, { key: "C", text: "spoil" }, { key: "D", text: "change" }],
    answer: ["D"],
    explain: "解析：\n\n上下文逻辑\n文章提到快乐的人更愿意承担风险，而研究人员想知道这种由快乐带来的风险倾向是否会 影响 公司的投资方式。\n空格前的部分是“happiness would ______ the way companies invested”，即“快乐会 ______ 公司投资的方式”。\n\n词义与搭配\n\nA. miss（错过）—— 不符合语义，快乐不会“错过”投资方式。\n\nB. echo（呼应）—— 语义不通，快乐不是“呼应”投资方式。\n\nC. spoil（破坏）—— 带有负面含义，与文章积极语境不符。\n\nD. change（改变）—— 符合逻辑，快乐可能“改变”公司投资的方式，与后文研究结果一致。\n\n后文验证\n后文说研究人员比较了城市幸福指数与公司投资活动，发现投资和研发强度与当地幸福指数相关，说明幸福确实可能 改变 公司的投资行为。\n\n因此正确答案是 D. change。",
    materialId: "cloze"
  }),
  base(6, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 6 空",
    options: [{ key: "A", text: "imagined" }, { key: "B", text: "measured" }, { key: "C", text: "invented" }, { key: "D", text: "assumed" }],
    answer: ["B"],
    explain: "解析：\n\n第 6 题所在句子为：\n\nSo they compared U.S. cities’ average happiness\nmeasured\nby Gallup polling with the investment activity of publicly traded firms in those areas.\n\n分析：\n\n这里说的是“美国城市的平均幸福水平”是由 Gallup polling（盖洛普民调） 来 测量/衡量 的。\n\n“happiness”在这里是一个需要被量化的抽象概念，通常通过问卷调查、民意测验等方式来 测量（measure）。\n\nA. imagined（想象）、C. invented（发明）、D. assumed（假设）都不符合语境，因为盖洛普是实际通过民调来 测量 幸福水平，而不是凭空想象或假设。\n\n因此，正确答案是 B. measured。",
    materialId: "cloze"
  }),
  base(7, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 7 空",
    options: [{ key: "A", text: "Sure" }, { key: "B", text: "Odd" }, { key: "C", text: "Unfortunate" }, { key: "D", text: "Often" }],
    answer: ["A"],
    explain: "好的，我们先看第 7 题所在的句子：\n\nSo they compared U.S. cities’ average happiness measured by Gallup polling with the investment activity of publicly traded firms in those areas.\n______ enough, firms’ investment and R&D intensity were correlated with the happiness of the area in which they were located.\n\n1. 结构分析\n这里 “______ enough” 是一个常见的口语化表达，比如：\n\nSure enough（果然，果真）\n\nOdd enough（够奇怪的）\n\nStrange enough（奇怪的是）\n\nInterestingly enough（有趣的是）\n\n2. 上下文逻辑\n前文说研究人员想看看快乐是否会影响公司投资方式，于是做了对比。\n接着这句话说：______ enough，公司的投资和研发强度与所在地的幸福指数相关。\n这明显是研究结果与预期一致，所以用 Sure enough（果然）最合适。\n\n3. 选项分析\n\nA. Sure → Sure enough 表示“果然”，符合“发现与假设一致”的语境。\n\nB. Odd → Odd enough 表示“够奇怪的”，但这里没有“奇怪”的意味。\n\nC. Unfortunate → Unfortunate enough 不常见，且意思不符。\n\nD. Often → Often enough 表示“经常”，但这里不是频率，而是对发现的确认。\n\n4. 最终答案\n答案是 A. Sure。",
    materialId: "cloze"
  }),
  base(8, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 8 空",
    options: [{ key: "A", text: "divided" }, { key: "B", text: "advertised" }, { key: "C", text: "overtaxed" }, { key: "D", text: "headquartered" }],
    answer: ["D"],
    explain: "解析：\n\n第 8 题所在句子为：\n\nfirms’ investment and R&D intensity were correlated with the happiness of the area in which they were 8.\n\n此处要表达的意思是：公司的投资和研发强度与它们 所在地（所在地区）的幸福指数相关。\n四个选项的含义为：\n\nA. divided → 被分割\n\nB. advertised → 被广告宣传\n\nC. overtaxed → 被过度征税\n\nD. headquartered → 总部设在\n\n根据上下文，这里是在说“公司所在地区”的幸福指数，headquartered 可以表示“总部所在地”，也可泛指“主要办公地点所在地区”，符合“公司位于某地”的含义。\n其他选项与“位于某地”无关，因此正确答案是 D. headquartered。",
    materialId: "cloze"
  }),
  base(9, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 9 空",
    options: [{ key: "A", text: "summarize" }, { key: "B", text: "overstate" }, { key: "C", text: "explain" }, { key: "D", text: "emphasize" }],
    answer: ["C"],
    explain: "解析：\n\n第 9 题所在的句子是：\n\nBut is it really happiness that’s linked to investment, or could something else about happier cities ______ why firms there spend more on R&D?\n\n逻辑分析：\n\n这里作者在提出一个疑问：真的是“快乐”本身导致投资增加，还是快乐城市中的其他因素能够说明（解释）为什么这些公司研发支出更多？\n\n空格后面是“why firms there spend more on R&D”，即“为什么那里的公司研发支出更多”，需要一个动词表示“解释原因”。\n\nexplain 直接对应“解释为什么”，符合句意。\n\n其他选项分析：\n\nA. summarize（总结）—— 不用于“why”从句前表示“解释原因”。\n\nB. overstate（夸大）—— 与文意不符，这里不是讨论夸大原因。\n\nD. emphasize（强调）—— 虽然可以接宾语，但“强调为什么”不如“解释为什么”自然，且不符合研究者的质疑逻辑。\n\n因此，正确答案是 C. explain。",
    materialId: "cloze"
  }),
  base(10, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 10 空",
    options: [{ key: "A", text: "factors" }, { key: "B", text: "stages" }, { key: "C", text: "levels" }, { key: "D", text: "methods" }],
    answer: ["A"],
    explain: "解析：\n\n第 10 题所在句子：\n\nTo find out, the researchers controlled for various\n10\nthat might make firms more likely to invest—like size, industry, and sales&mldr;\n\n句意理解：\n研究人员为了排除其他可能影响企业投资的因素，控制了各种 变量（如企业规模、行业、销售额等）。这些变量是可能影响投资决策的“因素”。\n\n选项分析：\n\nA. factors（因素）—— 符合语境，指可能影响投资的各种变量。\n\nB. stages（阶段）—— 与“规模、行业、销售额”等不匹配。\n\nC. levels（水平、层次）—— 虽然可以说“不同水平”，但这里列举的是不同性质的因素，不是层次。\n\nD. methods（方法）—— 企业规模、行业等不是“方法”，而是企业特征或影响因素。\n\n因此正确答案是 A。",
    materialId: "cloze"
  }),
  base(11, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 11 空",
    options: [{ key: "A", text: "desirable" }, { key: "B", text: "sociable" }, { key: "C", text: "reliable" }, { key: "D", text: "reputable" }],
    answer: ["A"],
    explain: "解析：\n\n第 11 题空格所在句子为：\n\n&mldr; and for indicators that a place was ______ to live in, like growth in wages or population.\n\n1. 上下文语义\n这里说的是研究人员控制了可能影响企业投资的多种因素，包括“一个地方是否 ______ 居住的指标”，例如工资增长或人口增长。\n工资增长和人口增长通常反映一个地方的吸引力，说明该地是 适合居住的、令人向往的。\n\n2. 选项分析\n\nA. desirable（合意的，理想的）→ 表示“理想的居住地”，符合“工资增长、人口增长”所暗示的吸引力。\n\nB. sociable（好交际的）→ 一般形容人，不形容地方“适合居住”。\n\nC. reliable（可靠的）→ 一般形容事物或人的可信度，不用于“居住的适宜性”。\n\nD. reputable（声誉好的）→ 虽然地方可以有声誉，但这里强调的是“适宜居住”的直接吸引力，而不是声誉。\n\n3. 搭配与常见用法\n“a place is desirable to live in” 是常见表达，意为“理想的居住地”。\n因此，正确答案是 A. desirable。",
    materialId: "cloze"
  }),
  base(12, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 12 空",
    options: [{ key: "A", text: "resumed" }, { key: "B", text: "emerged" }, { key: "C", text: "held" }, { key: "D", text: "broke" }],
    answer: ["C"],
    explain: "解析：\n\n第 12 题原文为：\n\nThe link between happiness and investment generally held even after accounting for these things.\n\n句意：即使在控制了这些因素之后，幸福与投资之间的关联仍然成立。\n\n选项分析：\n\nA. resumed（恢复）：表示中断后重新开始，但这里没有中断的意思。\n\nB. emerged（出现）：表示之前不存在，现在出现，但上下文是“在控制变量后”关联仍然存在，不是新出现。\n\nC. held（保持、成立）：指关系或结论在考虑其他因素后仍然成立，符合语境。\n\nD. broke（打破）：意思相反，不符合逻辑。\n\n因此，C. held 是正确答案。",
    materialId: "cloze"
  }),
  base(13, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 13 空",
    options: [{ key: "A", text: "assign" }, { key: "B", text: "attribute" }, { key: "C", text: "transfer" }, { key: "D", text: "compare" }],
    answer: ["B"],
    explain: "解析：\n\n第 13 题所在句子为：\n\nThe correlation between happiness and investment was particularly strong for younger firms, which the authors ______ to “less codified decision making process” and the possible presence of “younger and less ______ managers who are more likely to be influenced by sentiment.”\n\n1. 句意理解\n作者在解释为什么年轻公司的幸福感和投资之间的相关性更强。他们提出了两个可能的原因：\n\n决策过程不那么制度化（less codified decision making process）\n\n可能存在更年轻、经验更少的管理者（more likely to be influenced by sentiment）\n\n2. 动词搭配与用法\n\nassign to：指派、分配任务，不用于解释原因。\n\nattribute to：把……归因于，用于说明原因，符合语境。\n\ntransfer to：转移，不适用。\n\ncompare to：比作，不用于因果关系。\n\n3. 逻辑关系\n这里是在给出原因，所以“归因于”（attribute to）最合适。\n\n因此，正确答案是 B. attribute。",
    materialId: "cloze"
  }),
  base(14, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 14 空",
    options: [{ key: "A", text: "serious" }, { key: "B", text: "civilized" }, { key: "C", text: "ambitious" }, { key: "D", text: "experienced" }],
    answer: ["D"],
    explain: "解析：\n\n第 14 题位于这一句中：\n\n&mldr; “younger and less ___ managers who are more likely to be influenced by sentiment.”\n\n这里在描述年轻公司的决策特点：\n\n决策流程不那么制度化（less codified）\n\n经理人更年轻，并且 less ___，因此更容易受情绪影响\n\n对比选项：\n\nA. serious（严肃的）—— 与“容易被情绪影响”没有直接逻辑对比\n\nB. civilized（文明的）—— 不符合语境\n\nC. ambitious（有野心的）—— 有野心的人也可能受情绪影响，但这里强调的是缺乏某种东西导致容易受情绪影响\n\nD. experienced（有经验的）—— 经验不足的年轻经理更可能被情绪左右，符合逻辑\n\n因此，less experienced 与 “younger” 并列，构成年轻且经验不足的管理者，这解释了他们更容易受幸福感（sentiment）影响投资决策。\n\n答案：D",
    materialId: "cloze"
  }),
  base(15, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 15 空",
    options: [{ key: "A", text: "instead" }, { key: "B", text: "thus" }, { key: "C", text: "also" }, { key: "D", text: "never" }],
    answer: ["C"],
    explain: "解析：\n第 15 题所在的句子是：\n\nThe relationship was\n15\nstronger in places where happiness was spread more\n16\n.\n\n前文提到幸福感与投资之间的相关性在年轻公司中更强，这里进一步指出，在幸福感分布更均匀的地方，这种关系“更强”。\n显然这是在补充说明另一个使关系更强的条件，而不是转折（instead）、因果（thus）或否定（never）。\n因此，also（“也”）符合语境，表示“除了年轻公司之外，在幸福感分布均匀的地方，这种关系也更强”。\n\n答案：C",
    materialId: "cloze"
  }),
  base(16, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 16 空",
    options: [{ key: "A", text: "rapidly" }, { key: "B", text: "directly" }, { key: "C", text: "regularly" }, { key: "D", text: "equally" }],
    answer: ["D"],
    explain: "解析：\n\n第 16 题所在句子为：\n\nThe relationship was ___ stronger in places where happiness was spread more ___.\n\n前半句说“这种关系在……的地方更强”，后半句解释是“幸福分布更……的地方”。\n根据下一句的解释：\n\nFirms seem to invest more in places where most people are relatively happy, rather than in places with happiness inequality.\n\n这里明确对比了“大多数人相对幸福”和“幸福不平等”两种情况，说明作者强调的是幸福分布更平等的地方，公司投资更多。\n\n四个选项：\n\nA. rapidly（快速地） → 与幸福分布无关\n\nB. directly（直接地） → 不符合语境\n\nC. regularly（规律地） → 不贴合“分布”概念\n\nD. equally（平等地） → 与 inequality 形成反义，符合文意\n\n因此正确答案是 D. equally。",
    materialId: "cloze"
  }),
  base(17, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 17 空",
    options: [{ key: "A", text: "While" }, { key: "B", text: "Until" }, { key: "C", text: "After" }, { key: "D", text: "Since" }],
    answer: ["A"],
    explain: "解析：\n\n第 17 题所在句子为：\n\n“______ this doesn’t prove that happiness causes firms to invest more or to take a longer-term view, the authors believe it at least … at that possibility.”\n\n句子结构是：前半部分说“这并不能证明幸福导致公司投资更多或采取更长远的观点”，后半部分说“作者相信它至少暗示了这种可能性”。\n前后是让步关系，即“虽然……但是……”。\n\nA. While 可以表示“虽然”，引导让步状语从句，符合逻辑。\n\nB. Until “直到”，表示时间，不符合。\n\nC. After “在……之后”，表示时间，不符合。\n\nD. Since “因为”或“自从”，表示原因或时间，也不符合。\n\n因此，正确答案是 A. While。\n\n整句翻译：\n虽然这并不能证明幸福导致公司投资更多或采取更长远的观点，但作者相信它至少暗示了这种可能性。",
    materialId: "cloze"
  }),
  base(18, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 18 空",
    options: [{ key: "A", text: "arrives" }, { key: "B", text: "jumps" }, { key: "C", text: "hints" }, { key: "D", text: "strikes" }],
    answer: ["C"],
    explain: "解析：\n\n第 18 题所在句子为：\n\n&mldr; this doesn’t prove that happiness causes firms to invest more or to take a longer-term view, the authors believe it at least ________ at that possibility.\n\n选项分析：\n\nA. arrives 常与 at 搭配，但意思是“到达、达成（结论）”，主语一般是人，且语义上不表示“暗示”或“指向”。\n\nB. jumps 与 at 搭配可表示“扑向；欣然接受”，但主语一般是人，且不符合“指向可能性”的语境。\n\nC. hints 与 at 搭配，意为“暗示、略微表明”，符合上下文逻辑：虽然不能证明，但至少暗示了这种可能性。\n\nD. strikes 与 at 搭配可表示“袭击；打击”，不符合语境。\n\n因此正确答案是 C. hints，表示“暗示、略微指向”。",
    materialId: "cloze"
  }),
  base(19, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 19 空",
    options: [{ key: "A", text: "share" }, { key: "B", text: "rediscover" }, { key: "C", text: "simplify" }, { key: "D", text: "shape" }],
    answer: ["D"],
    explain: "解析：\n\n第 19 题所在句子为：\n\nIt’s not hard to imagine that local culture and sentiment would help ______ how executives think about the future.\n\n选项分析：\n\nA. share（分享）→ 文化和情绪不能“分享”高管的想法，逻辑不通。\n\nB. rediscover（重新发现）→ 与“影响思维方式”无直接关系。\n\nC. simplify（简化）→ 文化和情绪不一定简化对未来的思考，且与上下文逻辑不符。\n\nD. shape（塑造）→ “塑造思维方式”是常见搭配，且符合上下文：当地文化和情绪会影响高管对未来的看法。\n\n上下文逻辑：\n前文提到幸福与投资、长期思维有关，这里进一步说明文化和情绪会**影响（shape）**高管的未来观，与全文“幸福影响公司决策”的主题一致。\n\n因此正确答案是 D. shape。",
    materialId: "cloze"
  }),
  base(20, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 20 空",
    options: [{ key: "A", text: "pray for" }, { key: "B", text: "lean towards" }, { key: "C", text: "send out" }, { key: "D", text: "give away" }],
    answer: ["B"],
    explain: "解析：\n\n上下文语境\n本句是研究人员的总结性观点，指出快乐的人更可能具有前瞻性思维和创造力，并且在研发（R&D）方面会有更多投入。\n前文提到 “firms in happy places spend more on R&D”，所以这里要表达的是“快乐的人更倾向于重视或选择 R&D”。\n\n选项分析\n\nA. pray for（祈求）—— 研发投入不是“祈求”来的，不符合企业决策的语境。\n\nB. lean towards（倾向于）—— 表示一种倾向或偏好，与“更愿意在 R&D 上投入”的意思完全吻合。\n\nC. send out（发出、派遣）—— 不能与“R&D”合理搭配，语义不通。\n\nD. give away（赠送、泄露）—— 与研发投入无关。\n\n逻辑与搭配\n“lean towards R&D” 意为“倾向于研发”，即更愿意在研发上投入资源，这与前文“happiness is linked to longer-term thinking”以及“firms spend more on R&D”的逻辑一致。\n\n答案：B",
    materialId: "cloze"
  }),
  base(21, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Cortina holds that early exposure to computer science makes it easier to ______.",
    options: [{ key: "A", text: "complete future job training" }, { key: "B", text: "remodel the way of thinking" }, { key: "C", text: "formulate logical hypotheses" }, { key: "D", text: "perfect artwork production" }],
    answer: ["B"],
    explain: "解析：\n\n定位 Cortina 的观点\n文章第二段提到：\n\nHowever, Cortina said, early exposure is beneficial. When younger kids learn computer science, they learn that it’s not just a confusing, endless string of letters and numbers – but a tool to build apps, or create artwork, or test hypotheses. It’s not as hard for them to transform their thought processes as it is for older students.\n\n理解关键句\n“transform their thought processes” 意思是“改变他们的思维过程”，也就是重塑思维方式。\n这与选项 B. remodel the way of thinking 对应。\n\n排除其他选项\n\nA. complete future job training（完成未来的职业培训）—— 文中未直接强调这一点，虽然提到有助于填补工作缺口，但不是 Cortina 说的“更容易”的直接内容。\n\nC. formulate logical hypotheses（形成逻辑假设）—— 文中提到“test hypotheses”只是举例说明计算机科学的用途，不是主要强调的思维转变。\n\nD. perfect artwork production（完善艺术创作）—— 同样只是举例用途之一，不是核心观点。\n\n因此，正确答案是 B。",
    materialId: "text1"
  }),
  base(22, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "In delivering lessons for high-schoolers, Flatiron has considered their ______.",
    options: [{ key: "A", text: "experience" }, { key: "B", text: "interest" }, { key: "C", text: "career prospects" }, { key: "D", text: "academic backgrounds" }],
    answer: ["B"],
    explain: "解析：\n题目问的是 Flatiron 学校在给高中生授课时考虑了他们的什么。\n\n文章第四段提到：\n\nThe high-schoolers get the same curriculum, but “we try to gear lessons toward things they’re interested in,” said Victoria Friedman, an instructor.\n\n这里明确说明 Flatiron 学校会调整课程内容，使其更贴近学生感兴趣的东西，因此考虑的是他们的 interest（兴趣）。\n\n选项分析：\n\nA. experience（经验）—— 文中未强调根据经验调整课程。\n\nB. interest（兴趣）—— 与原文直接对应。\n\nC. career prospects（职业前景）—— 虽然学校可能考虑职业，但此处强调的是兴趣。\n\nD. academic backgrounds（学术背景）—— 未提及。\n\n答案：B",
    materialId: "text1"
  }),
  base(23, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Deborah Seehorn believes that the skills learned at Flatiron will ______.",
    options: [{ key: "A", text: "help students learn other computer languages" }, { key: "B", text: "have to be upgraded when new technologies come" }, { key: "C", text: "need improving when students look for jobs" }, { key: "D", text: "enable students to make big quick money" }],
    answer: ["A"],
    explain: "解析：\n\n题目问的是 Deborah Seehorn 认为在 Flatiron 学到的技能会如何。\n根据文章第五段最后一句：\n\nBut the skills they learn – how to think logically through a problem and organize the results – apply to any coding language, said Deborah Seehorn&mldr;\n\n这句话明确说明，他们学到的技能（逻辑思考问题、组织结果）可以适用于任何编程语言。\n也就是说，这些技能能帮助学生学习其他计算机语言。\n\n选项分析：\n\nA. help students learn other computer languages ✅ 与原文“apply to any coding language”对应，即这些通用技能有助于学习其他语言。\n\nB. have to be upgraded when new technologies come ❌ 文中强调这些技能是通用的，不会因技术更新而过时。\n\nC. need improving when students look for jobs ❌ 文中未提及找工作时要改进这些技能。\n\nD. enable students to make big quick money ❌ 文中没有提到赚钱的内容，而且前面说他们可能不会退学去创建下一个 Facebook，说明并非快速致富。\n\n因此正确答案是 A。",
    materialId: "text1"
  }),
  base(24, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to the last paragraph, Flatiron students are expected to ______.",
    options: [{ key: "A", text: "bring forth innovative computer technologies" }, { key: "B", text: "stay longer in the information technology industry" }, { key: "C", text: "become better prepared for the digitalized world" }, { key: "D", text: "compete with a future army of programmers" }],
    answer: ["C"],
    explain: "解析：\n\n题目问的是“根据最后一段，Flatiron 学校的学生被期望会______”。\n最后一段的核心信息是：\n\n这些学生可能根本不会进入 IT 行业（But creating a future army of coders is not the sole purpose of the classes）。\n\n他们一生都将被电脑包围（in their pockets, in their offices, in their homes）。\n\n越早学习计算机的思维方式、如何让机器实现他们想要的东西，就越好（The younger they learn&mldr; the better）。\n\n所以，作者强调的是：无论他们是否成为程序员，这种早期训练都能让他们在未来的数字化生活中更好地理解和运用技术。\n\n选项分析：\n\nA（带来创新的计算机技术）—— 最后一段没有强调他们要发明新技术。\n\nB（在信息技术行业待更久）—— 文中说他们可能根本不会进入 IT 行业。\n\nC（为数字化世界做更好的准备）—— 与“一生被电脑包围，越早学越好”对应。\n\nD（与未来的程序员大军竞争）—— 文中无此意。\n\n因此正确答案是 C。",
    materialId: "text1"
  }),
  base(25, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The word “coax” (Line 4, Para. 6) is closest in meaning to ______.",
    options: [{ key: "A", text: "persuade" }, { key: "B", text: "frighten" }, { key: "C", text: "misguide" }, { key: "D", text: "challenge" }],
    answer: ["A"],
    explain: "解析：\n\n定位原文\n第六段最后一句提到：\n\nThe younger they learn how computers think, how to coax the machine into producing what they want &mldr; the better.\n这里说的是“学会如何让计算机产生他们想要的结果”。\n\n语境分析\n“coax the machine into producing what they want” 直译是“ coax 机器去产生他们想要的东西”。\n“coax” 本意是“哄劝；耐心引导”，常用于 coax someone into doing something（劝某人做某事）。\n在计算机语境下，是指通过编程技巧或指令，让计算机按人的意图执行任务，是一种拟人化表达。\n\n选项比对\n\nA. persuade（劝说；说服） —— 与“ coax ”的比喻意义最接近，都是通过某种方式使对象按意愿行事。\n\nB. frighten（恐吓） —— 与计算机操作无关，语义不符。\n\nC. misguide（误导） —— 与文意相反，这里是要得到正确结果。\n\nD. challenge（挑战） —— 不符合语境逻辑。\n\n结论\n结合上下文，这里强调通过编程让计算机“听从”人的指令，实现人的目的，因此 A. persuade 是最贴近的释义。\n\n答案：A",
    materialId: "text1"
  }),
  base(26, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The major reason for listing the lesser prairie chicken as threatened is ______.",
    options: [{ key: "A", text: "its drastically decreased population" }, { key: "B", text: "the underestimate of the grassland acreage" }, { key: "C", text: "a desperate appeal from some biologists" }, { key: "D", text: "the insistence of private landowners" }],
    answer: ["A"],
    explain: "解析：\n\n题干定位\n题目问的是“将小草原榛鸡列为受威胁物种的主要原因”。\n原文中第一段提到：\n\nBiologists estimate that as many as 2 million lesser prairie chickens &mldr; once lent red to &mldr; But just some 22,000 birds remain today, occupying about 16% of the species’ historic range.\nThe crash was a major reason the U.S. Fish and Wildlife Service (USFWS) decided to formally list the bird as threatened.\n\n关键信息提取\n\n“crash”指的是种群数量的急剧下降（从 200 万只减少到约 2.2 万只）。\n\n明确说 The crash was a major reason，所以主要原因就是数量大幅下降。\n\n选项比对\n\nA. its drastically decreased population（其急剧下降的种群数量） → 与原文“crash”对应，正确。\n\nB. 对草原面积的低估 → 原文未提及。\n\nC. 某些生物学家的迫切呼吁 → 虽有 USFWS 官员说情况 desperate，但这不是主要原因，而是对现状的描述。\n\nD. 私人土地所有者的坚持 → 文中私人土地所有者是合作对象，不是要求列为受威胁物种的原因。\n\n因此正确答案是 A。",
    materialId: "text2"
  }),
  base(27, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The “threatened” tag disappointed some environmentalists in that it ______.",
    options: [{ key: "A", text: "was a give-in to governmental pressure" }, { key: "B", text: "would involve fewer agencies in action" }, { key: "C", text: "granted less federal regulatory power" }, { key: "D", text: "went against conservation policies" }],
    answer: ["C"],
    explain: "解析：\n\n定位关键信息\n题干问的是“threatened”标签让一些环保主义者失望的原因。\n原文第二段提到：\n\nSome environmentalists, however, were disappointed. They had pushed the agency to designate the bird as “endangered,” a status that gives federal officials greater regulatory power to crack down on threats. But Ashe and others argued that the “threatened” tag gave the federal government flexibility to try out new, potentially less confrontational conservation approaches.\n\n对比“endangered”与“threatened”\n\n“endangered” → 赋予联邦官员 更大的监管权力（greater regulatory power）\n\n“threatened” → 更灵活，对抗性更小（less confrontational）\n因此，“threatened”标签意味着联邦监管权力比“endangered”小。\n\n匹配选项\n\nA 项：向政府压力屈服——原文未提及。\n\nB 项：涉及更少的机构参与——原文未强调机构数量变化。\n\nC 项：授予更少的联邦监管权力——与原文“greater regulatory power”对比，符合。\n\nD 项：违背保护政策——原文说这是一种不同的保护方法，并非违背政策。\n\n答案：C",
    materialId: "text2"
  }),
  base(28, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "It can be learned from Paragraph 3 that unintentional harm-doers will not be prosecuted if they ______.",
    options: [{ key: "A", text: "agree to pay a sum for compensation" }, { key: "B", text: "volunteer to set up an equally big habitat" }, { key: "C", text: "offer to support the WAFWA monitoring job" }, { key: "D", text: "promise to raise funds for USFWS operations" }],
    answer: ["A"],
    explain: "解析：\n\n题目问的是：从第3段可知，无意造成伤害的人不会被起诉，前提是他们______。\n\n第3段原文明确提到：\n\nUnder the plan, for example, the agency said it would not prosecute landowners or businesses that unintentionally kill, harm, or disturb the bird, as long as they had signed a range-wide management plan to restore prairie chicken habitat. Negotiated by USFWS and the states, the plan requires individuals and businesses that damage habitat as part of their operations to pay into a fund to replace every acre destroyed with 2 new acres of suitable habitat.\n\n也就是说，不被起诉的条件是：\n\n签署大范围管理计划；\n\n该计划要求损害栖息地的个人或企业向一个基金付款，用于补偿被破坏的栖息地（每破坏1英亩，要补偿2英亩适宜栖息地）。\n\n选项分析：\n\nA. agree to pay a sum for compensation（同意支付一笔补偿金）\n这与原文“pay into a fund to replace every acre destroyed”相符，即通过支付补偿金来换取不被起诉。\n\nB. volunteer to set up an equally big habitat（自愿建立同等大小的栖息地）\n原文是要求付款到基金，由基金负责补偿栖息地，并不是要求破坏者自己去建立栖息地，所以错误。\n\nC. offer to support the WAFWA monitoring job（主动支持WAFWA的监测工作）\n原文未提及支持监测工作是不被起诉的条件。\n\nD. promise to raise funds for USFWS operations（承诺为USFWS的运作筹集资金）\n原文是向基金付款用于补偿栖息地，而不是为USFWS的运营筹款，所以错误。\n\n因此，正确选项是 A。",
    materialId: "text2"
  }),
  base(29, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to Ashe, the leading role in managing the species is ______.",
    options: [{ key: "A", text: "the federal government" }, { key: "B", text: "the wildlife agencies" }, { key: "C", text: "the landowners" }, { key: "D", text: "the states" }],
    answer: ["D"],
    explain: "解析：\n\n题干关键信息：\n\n题干问的是 Ashe 的观点。\n\n问的是在管理该物种方面，leading role（主导作用）是谁扮演的。\n\n定位原文：\n第三段末尾明确提到：\n\nOverall, the idea is to let “states remain in the driver’s seat for managing the species,” Ashe said.\n“in the driver’s seat” 是一个习语，意思是“处于主导地位、掌控局面”。\n\n选项对应：\n\nA. the federal government → 与 Ashe 主张的“让州主导”不符。\n\nB. the wildlife agencies → 虽然有 WAFWA 参与监测，但 Ashe 强调的是 states 整体。\n\nC. the landowners → 文中提到与私有土地主合作，但他们并非主导。\n\nD. the states → 与 “states remain in the driver’s seat” 完全对应。\n\n因此正确答案是 D。",
    materialId: "text2"
  }),
  base(30, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Jay Lininger would most likely support ______.",
    options: [{ key: "A", text: "industry groups" }, { key: "B", text: "the win-win rhetoric" }, { key: "C", text: "environmental groups" }, { key: "D", text: "the plan under challenge" }],
    answer: ["C"],
    explain: "解析：\n\n定位 Jay Lininger 的观点\n文章最后一段提到 Jay Lininger 的评论：\n\n“The federal government is giving responsibility for managing the bird to the same industries that are pushing it to extinction.”\n这句话的意思是：联邦政府把管理这种鸟的责任交给了那些正在导致它灭绝的行业。\n这明显是批评当前计划，认为它过于依赖行业自我管理，保护力度不够。\n\n判断其立场\n从 Lininger 的批评可以看出，他认为该计划对行业过于宽容，保护不足。\n这种立场与环保团体（environmental groups） 的观点一致，因为前文提到环保团体认为该计划 “doesn’t go far enough”（做得不够）。\n\n排除错误选项\n\nA 行业团体：行业团体认为该计划 “goes too far”（管得太多），与 Lininger 立场相反。\n\nB 双赢说辞：文中明确说 “Not everyone buys the win-win rhetoric”，Lininger 显然不认同这种说法。\n\nD 受质疑的计划：该计划正是 Lininger 所批评的对象，他不会支持。\n\n因此，Jay Lininger 最可能支持的是 C 环保团体。",
    materialId: "text2"
  }),
  base(31, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The usual time-management techniques don’t work because ______.",
    options: [{ key: "A", text: "what they can offer does not ease the modern mind" }, { key: "B", text: "what challenging books demand is repetitive reading" }, { key: "C", text: "what people often forget is carrying a book with them" }, { key: "D", text: "what deep reading requires cannot be guaranteed" }],
    answer: ["D"],
    explain: "解析：\n\n题目问的是“常规的时间管理技巧不起作用的原因”，这需要定位到原文第二段。\n\n定位关键句：\n第二段中提到：\n\nBut in my experience, using such methods to free up the odd 30 minutes doesn’t work. Sit down to read and the flywheel of work-related thoughts keeps spinning – or else you’re so exhausted that a challenging book’s the last thing you need.\nDeep reading requires not just time, but a special kind of time which can’t be obtained merely by becoming more efficient.\n\n理解核心逻辑：\n作者指出，常规的时间管理技巧（如“放弃看电视”或“随身带书”）只能挤出零碎的几十分钟，但无法让人进入深度阅读所需的状态。\n深度阅读不仅需要时间，还需要一种特殊的时间——这种时间不能仅通过提高效率获得。\n\n选项分析：\n\nA：它们提供的东西不能缓解现代人的思维状态。\n虽然原文提到现代思维倾向于被打扰，但这只是部分原因，核心在于“特殊时间”无法通过常规技巧保证。\n\nB：有挑战性的书需要重复阅读。\n原文未提及“重复阅读”这一概念。\n\nC：人们经常忘记随身带书。\n这是对文中举例的曲解，并非原因。\n\nD：深度阅读所需的条件无法得到保证。\n这正是原文强调的核心——深度阅读需要“特殊时间”，而常规时间管理技巧无法提供这种条件。\n\n因此，正确答案是 D，因为它准确概括了原文中“常规时间管理技巧无法保证深度阅读所需条件”的核心论点。",
    materialId: "text3"
  }),
  base(32, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The “empty bottles” metaphor illustrates that people feel a pressure to ______.",
    options: [{ key: "A", text: "update their to-do lists" }, { key: "B", text: "make passing time fulfilling" }, { key: "C", text: "carry their plans through" }, { key: "D", text: "pursue carefree reading" }],
    answer: ["B"],
    explain: "解析：\n\n定位原文\n题目中的 “empty bottles” 比喻出现在第三段，原文是：\n\n“The future comes at us like empty bottles along an unstoppable and nearly infinite conveyor belt,” writes Gary Eberle &mldr; and “we feel a pressure to fill these different-sized bottles (days, hours, minutes) as they pass, for if they get by without being filled, we will have wasted them.”\n\n理解比喻含义\n\n“empty bottles” 比喻的是未来的时间（天、小时、分钟）。\n\n“conveyor belt” 表示时间不停流逝。\n\n“fill these bottles” 意思是把时间填满，让时间过得充实（即不让时间浪费）。\n\n人们感到的压力是：不能让时间空着过去，否则就是浪费。\n\n选项分析\n\nA. update their to-do lists：原文并未强调更新待办事项，而是强调“填满时间”。\n\nB. make passing time fulfilling：与 “fill these bottles” 对应，即让流逝的时间变得充实，符合比喻的含义。\n\nC. carry their plans through：重点不是完成计划，而是“不让时间空过”。\n\nD. pursue carefree reading：比喻本身与阅读无直接关系，而是描述人们对时间的心态。\n\n结合上下文\n第三段前面提到，现代人习惯把时间看作要最大化利用的资源，这种心态不利于沉浸式阅读。\n“empty bottles” 的比喻正是说明这种“必须把时间填满”的压力，因此选 B。\n\n答案：B",
    materialId: "text3"
  }),
  base(33, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Eberle would agree that scheduling regular times for reading helps ______.",
    options: [{ key: "A", text: "encourage the efficiency mind-set" }, { key: "B", text: "develop online reading habits" }, { key: "C", text: "promote ritualistic reading" }, { key: "D", text: "achieve immersive reading" }],
    answer: ["D"],
    explain: "解析：\n\n题目问的是 Eberle 会同意“安排固定的阅读时间”有助于什么。\n文章最后一段提到，安排固定的阅读时间，你可能会以为这会助长效率思维，但 Eberle 指出，这种仪式化的行为能帮助我们 “step outside time’s flow” into “soul time”（跳出时间之流，进入灵魂时间）。\n\n这种“跳出时间之流”的状态，实际上就是沉浸式阅读（immersive reading）所需要的状态——不追求效率、不赶任务、忘记时间流逝。\n而前文在第三段也提到，沉浸式阅读（immersive reading）需要愿意冒险低效率、无目标甚至浪费时间。\n\n因此，安排固定的阅读时间，正是为了创造这种沉浸阅读的条件，而不是为了效率（A错）、也不是单纯为了养成在线阅读习惯（B错）、也不是仅仅为了推广仪式化阅读（C是手段，不是最终目的）。\n\n所以正确选项是 D. achieve immersive reading（实现沉浸式阅读）。",
    materialId: "text3"
  }),
  base(34, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "“Carry a book with you at all times” can work if ______.",
    options: [{ key: "A", text: "reading becomes your primary business of the day" }, { key: "B", text: "all the daily business has been promptly dealt with" }, { key: "C", text: "you are able to drop back to business after reading" }, { key: "D", text: "time can be evenly split for reading and business" }],
    answer: ["A"],
    explain: "让我们先定位原文中关于 “Carry a book with you at all times” 的部分。\n\n原文最后一段提到：\n\n“Carry a book with you at all times” can actually work, too – providing you dip in often enough, so that reading becomes the default state from which you temporarily surface to take care of business, before dropping back down.\n\n关键句是：reading becomes the default state（阅读成为默认状态），然后你只是偶尔暂时从中出来处理事务，再回到阅读状态。\n\n也就是说，要让 “随时带一本书” 这个方法有效，前提是阅读要变成你一天中的主要状态，而不是在繁忙中硬挤时间。\n\n选项分析：\n\nA. reading becomes your primary business of the day\n这与 “default state” 意思一致，即阅读是主要活动，其他事务是暂时性的。\n\nB. all the daily business has been promptly dealt with\n原文并未说必须先处理完所有事务，而是可以在阅读中偶尔处理事务。\n\nC. you are able to drop back to business after reading\n这与原文逻辑相反，原文是“从阅读状态中暂时出来处理事务，再回到阅读”，不是先阅读再回去工作。\n\nD. time can be evenly split for reading and business\n原文没有强调平均分配时间，而是强调以阅读为默认状态。\n\n因此正确答案是 A。",
    materialId: "text3"
  }),
  base(35, 'k-en-010', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The best title for this text could be ______.",
    options: [{ key: "A", text: "How to Enjoy Easy Reading" }, { key: "B", text: "How to Find Time to Read" }, { key: "C", text: "How to Set Reading Goals" }, { key: "D", text: "How to Read Extensively" }],
    answer: ["B"],
    explain: "解析：\n\n文章的核心问题是：现代人普遍抱怨“没时间读书”，而常规的时间管理技巧往往无效。作者层层深入地分析了原因，并最终提出了有效的解决方案。\n\n提出问题与困境：\n\n第一段：指出“没时间读书”是一个普遍且令人苦恼的问题。\n\n第二段：说明常规时间管理技巧（如放弃电视、随身带书）效果不佳，因为深层次阅读需要的不只是零碎时间，而是一种不受干扰、能够沉浸其中的“特殊时间”。现代人的思维模式倾向于被打断，难以进入深度阅读状态。\n\n分析问题根源：\n\n第三段：指出问题的核心在于“效率至上”的思维模式。如果把时间仅仅看作需要最大化利用的资源，那么无目的、看似“低效”的沉浸式阅读就无法存在。这种思维是与深度阅读相悖的。\n\n提出解决方案：\n\n第四段：给出了真正有效的方法。关键是改变与时间的关系，而不是挤时间。具体建议包括：\n安排固定的阅读时间：这能帮助我们进入“心灵时间”，摆脱时间流逝的压力。\n\n创造无干扰环境：如阅读纸质书或专用电子阅读器。\n\n让阅读成为默认状态：通过频繁地沉浸其中，使阅读成为生活背景，而处理事务只是暂时的“中断”。\n\n结论：\n全文始终围绕“时间”这一核心矛盾展开，探讨了为什么找不到时间读书，以及如何才能真正找到（或创造）用于阅读的时间。选项A（如何享受轻松阅读）、C（如何设定阅读目标）和D（如何广泛阅读）都只是文中提到的零星细节，并非文章主旨。\n\n因此，最能概括全文内容的标题是 B. How to Find Time to Read（如何找到时间阅读）。",
    materialId: "text3"
  }),
  base(36, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "One cross-generation mark of a successful life is ______.",
    options: [{ key: "A", text: "trying out different lifestyles" }, { key: "B", text: "having a family with children" }, { key: "C", text: "working beyond retirement age" }, { key: "D", text: "setting up a profitable business" }],
    answer: ["B"],
    explain: "解析：\n\n题目问的是“成功生活的一个跨代标志”，即年轻人和老年人都认同的成功要素。\n\n文章第二段明确提到：\n“Across generational lines, Americans continue to prize many of the same traditional milestones of a successful life, including getting married, having children, owning a home, and retiring in their sixties.”\n这句话说明，不同代际的人都认为结婚、生子、拥有住房、六十多岁退休是传统意义上的成功里程碑。\n\n四个选项中：\nA. 尝试不同生活方式 —— 文中未提及这是跨代共识。\nB. 拥有一个有孩子的家庭 —— 对应 having children，属于文中明确提到的跨代共同认可的成功标志。\nC. 超过退休年龄继续工作 —— 与文中“六十多岁退休”相悖。\nD. 创办盈利企业 —— 文中未提及这是跨代共识。\n\n因此，正确答案是 B。",
    materialId: "text4"
  }),
  base(37, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "It can be learned from Paragraph 3 that young people tend to ______.",
    options: [{ key: "A", text: "favor a slower life pace" }, { key: "B", text: "hold an occupation longer" }, { key: "C", text: "attach importance to pre-marital finance" }, { key: "D", text: "give priority to childcare outside the home" }],
    answer: ["C"],
    explain: "解析：\n\n题目要求从第3段推断年轻人倾向于做什么。第3段原文关键信息为：\n\nYoung people &mldr; were more likely than older adults to &mldr; agree that couples should be financially secure before getting married or having children &mldr;\n\n这句话的意思是：年轻人比年长者更可能认同夫妻在结婚或生孩子之前应在经济上有保障。\n\n选项分析：\n\nA. favor a slower life pace → 错误。原文说年轻人喜欢 faster pace of life，不是 slower。\n\nB. hold an occupation longer → 错误。原文说年轻人认为通过 regularly changing jobs 来发展事业，所以不会在一个岗位上待更久。\n\nC. attach importance to pre-marital finance → 正确。原文 “financially secure before getting married” 即强调婚前的经济保障。\n\nD. give priority to childcare outside the home → 错误。原文说他们认为孩子最好由父母都在外工作抚养，但这不等于优先考虑“家庭外育儿”，而是双亲都工作。\n\n因此正确答案是 C。",
    materialId: "text4"
  }),
  base(38, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The priorities and expectations defined by the young will ______.",
    options: [{ key: "A", text: "become increasingly clear" }, { key: "B", text: "focus on materialistic issues" }, { key: "C", text: "depend largely on political preferences" }, { key: "D", text: "reach almost all aspects of American life" }],
    answer: ["D"],
    explain: "解析：\n\n题目问的是“年轻人定义的优先事项和期望将会______”。\n文章第四段明确提到：\n\nthese contrasts suggest that &mldr; those just starting out in life are defining priorities and expectations that will increasingly spread through virtually all aspects of American life, from consumer preferences to housing patterns to politics.\n\n这句话的意思是：这些差异表明，年轻人正在定义的优先事项和期望将越来越多地渗透到美国生活的几乎所有方面，从消费偏好到住房模式再到政治。\n\n对应选项：\n\nA. become increasingly clear（变得越来越清晰）—— 文中并未强调“清晰度”的变化，而是强调影响范围的扩大。\n\nB. focus on materialistic issues（集中在物质问题上）—— 文中没有说只关注物质问题。\n\nC. depend largely on political preferences（主要取决于政治偏好）—— 因果关系颠倒，文中是说会影响政治，而不是依赖政治偏好。\n\nD. reach almost all aspects of American life（触及美国生活的几乎所有方面）—— 与原文 “spread through virtually all aspects of American life” 完全一致。\n\n因此正确答案是 D。",
    materialId: "text4"
  }),
  base(39, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Both young and old agree that ______.",
    options: [{ key: "A", text: "good-paying jobs are less available" }, { key: "B", text: "the old made more life achievements" }, { key: "C", text: "housing loans today are easy to obtain" }, { key: "D", text: "getting established is harder for the young" }],
    answer: ["D"],
    explain: "解析：\n\n题目问的是年轻人和年长者在哪个观点上达成一致。\n文章第五段明确提到：\n\nYoung and old converge on one key point: Overwhelming majorities of both groups said they believe it is harder for young people today to get started in life than it was for earlier generations.\n\n这句话的意思是：年轻人和年长者在一个关键点上看法一致——绝大多数人都认为，现在的年轻人比前几代人更难开始生活。\n\n选项 D “getting established is harder for the young” 正是对 “harder for young people today to get started in life” 的同义改写。\n\n其他选项：\n\nA：高薪工作更难找——虽然文中提到这是年轻人面临的挑战之一，但并不是双方明确共同强调的唯一关键点。\n\nB：年长者取得更多人生成就——文中没有直接比较成就数量，而是比较了难度。\n\nC：现在住房贷款容易获得——与文中 Pete Schneider 的例子相反，他付不起月供，说明并不容易。\n\n因此正确答案是 D。",
    materialId: "text4"
  }),
  base(40, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Which of the following is true about Schneider?",
    options: [{ key: "A", text: "He found a dream job after graduating from college." }, { key: "B", text: "His parents believe working steadily is a must for success." }, { key: "C", text: "His parents’ good life has little to do with a college degree." }, { key: "D", text: "He thinks his job as a technician quite challenging." }],
    answer: ["C"],
    explain: "解析：\n\n题目问“关于 Schneider，以下哪一项是正确的？” 四个选项如下：\n\nA. 他大学毕业后找到了梦想的工作。\nB. 他的父母认为稳定工作是成功的必要条件。\nC. 他父母的好生活与大学学位关系不大。\nD. 他认为自己作为技师的工作很有挑战性。\n\n定位原文内容：\n倒数第二段提到：\n\nSchneider, a 27-year-old auto technician from the Chicago suburbs, says he struggled to find a job after graduating from college.\n&mldr;\nLooking back, he is struck that his parents could provide a comfortable life for their children even though neither had completed college when he was young.\n“I still grew up in an upper middle-class home with parents who didn’t have college degrees,” Schneider said. “I don’t think people are capable of that anymore.”\n\n逐项分析：\n\nA：错误。原文说 struggled to find a job，并不是“找到了梦想的工作”。\n\nB：错误。文中没有提到他父母对“稳定工作”的看法。\n\nC：正确。原文明确说父母没有大学学位，但依然提供了优渥的中上层生活，说明好生活与大学学位关系不大。\n\nD：错误。文中没有说他觉得技师工作很有挑战性，只提到他经济上困难，需要出租房间来还房贷。\n\n答案：C",
    materialId: "text4"
  }),
  base(41, 'k-en-013', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "2016 Part B 新题型：根据材料完成 41–45 题。",
    referenceAnswer: "【总体分析】\n本文选自《卫报》一篇题为《Act Your Shoe Size, Not Your Age》的文章。文章指出，成年人不断追求幸福却常常难以如愿，因此应当向孩子学习如何获得幸福。\n\n【解析】\n\n第一步：迅速阅读选项，把握大意\n选项关键词包括“成年人”“学习”“孩子”“幸福”等，可推测文章主题为“成年人如何向孩子学习获取幸福”。\n\n第二步：逐段分析，匹配标题\n\n41. 答案：D Express your emotions\n\n段落结构：\n开头描述孩子直接表达情绪的方式（悲伤时哭，生气时喊）。\n\n中间指出成年人过度控制情绪，甚至压抑负面情绪，可能带来负面影响。\n\n结尾建议应像孩子一样，适当承认并表达情绪，然后继续前行。\n\n核心主旨：鼓励表达情绪，尤其是负面情绪。\n\n匹配标题：D（表达情绪）。\n\n42. 答案：F Be easily pleased\n\n段落结构：\n举例说明孩子因一件廉价T恤而欣喜若狂。\n\n对比成年人总认为大事件（如换工作、买房）才能带来幸福。\n\n指出真正提升幸福感的方法是感激日常小事。\n\n核心主旨：幸福源于对小事的满足与感激。\n\n匹配标题：F（容易满足）。\n\n43. 答案：A Be silly\n\n段落结构：\n以孩子爱笑为例，引出成年人也应保留一些“傻气”和笑声。\n\n列举这样做对健康的益处（减轻压力、增加快乐激素等）。\n\n总结其对提升幸福感的积极影响。\n\n核心主旨：适当“犯傻”和欢笑有益于幸福。\n\n匹配标题：A（傻一点）。\n\n干扰项分析：G（注意事物）易因首句“Have you ever noticed…”误选，但段落重点不在“注意”，而在“傻笑与放松”。\n\n44. 答案：B Have fun\n\n段落结构：\n先承认成年人需处理很多严肃事务。\n\n转折指出成年人也有能力安排时间享受喜爱的事物。\n\n举例说明何种活动能带来快乐，并提醒避免负面后果。\n\n核心主旨：应在生活中安排时间享受乐趣。\n\n匹配标题：B（找乐子）。\n\n干扰项分析：C（寻求帮助）可能因段首“严肃事务”被误选，但后文未提“求助”，而是强调“主动安排娱乐”。\n\n45. 答案：E Don’t overthink it\n\n段落结构：\n明确提出“不应过分追求幸福”。\n\n引用科学研究和庄子名言说明：刻意追求幸福反而适得其反。\n\n指出孩子之所以幸福，正因幸福是他们生活的自然副产品，而非目标。\n\n核心主旨：不要过度执着于追求幸福，应顺其自然。\n\n匹配标题：E（不要想太多）。\n\n未使用选项：C（Ask for help）、G（Notice things）",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }], materialId: "partB"
  }),
  base(46, 'k-en-014', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "2016 Part C 翻译：将下面短文译成汉语。",
    referenceAnswer: "文本分析\n\n1. 原文来源与主题\n\n节选自《国家地理》2015年6月15日刊载的《战胜超市的隐秘心理学》一文\n\n核心主题为揭示超市通过环境设计影响消费行为的心理机制\n\n2. 内容结构解析\n\n设计策略：通过空间布局延长顾客停留时间\n\n行为逻辑：停留时长→商品曝光量→购买数量（正相关循环）\n\n数据支撑：\n普通超市商品种类约44,000项（食品营销协会数据）\n\n部分超市商品超出此数量级\n\n心理机制：\n选择过载导致决策疲劳（脑扫描实验证实）\n\n40分钟为理性购物转感性购物的临界点\n\n非计划购物比例达购物车总量的50%\n\n3. 翻译要点\n\n需准确处理多义词在商业语境中的特定含义（如\"carry\"译为\"陈列商品\"）\n\n保持\"信息过载\"“理性选择\"等专业术语的一致性\n\n注意长难句拆分，如\"which is the point&mldr;“的递进处理\n\n参考译文\n\n超市的设计旨在吸引顾客在店内停留尽可能长的时间。其原理很简单：停留时间越长，接触的商品就越多；接触的商品越多，购买量就越大。超市陈列的商品数量极为庞大——根据食品营销协会统计，普通超市约有4.4万种不同商品，许多超市更有多出数万种的品类。海量选择足以使顾客陷入信息过载状态。脑部扫描实验表明，大量决策需求会很快使人不堪重负。约40分钟后，多数消费者便不再坚持理性筛选，转而开始情感驱动式购物——此刻推车里堆积的商品中，近半数都源于临时起意。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }], materialId: "partC"
  }),
  base(47, 'k-en-015', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "Directions\n\nSuppose you won a translation contest and your friend, Jack, wrote an email to congratulate you and ask for advice on translation. Write him a reply to\n\nthank him, and\n\ngive your advice.\n\nYou should write about 100 words on the ANSWER SHEET.\n\nDo not use your own name. Use “Li Ming” instead.\n\nDo not write your address. (10 points)",
    referenceAnswer: "【题目解析】\n\n信件类型：这是一封回复朋友祝贺并给予建议的回信，属于半正式书信。\n\n语气要求：语气应热情友好，体现感谢之意与分享精神。\n\n内容要点：\n感谢对方的祝贺；\n\n针对翻译学习提出具体建议（2–3条）；\n\n表达进一步交流的意愿并期待回复。\n\n格式规范：需包含称呼、正文、结尾敬语及署名，注意字数控制在100词左右。\n\n【参考范文】\n\nDear Jack,\n\nThank you so much for your warm congratulations on my translation contest success.\n\nAs for advice, I believe the key lies in consistent practice and extensive reading. Try to engage with diverse texts—both Chinese and English—to enhance your sense of language. Also, learning about the cultures behind the languages can help you grasp nuanced meanings. Most importantly, keep practicing and stay curious.\n\nI hope these suggestions help. Feel free to ask me more—I’m always happy to discuss!\n\nLooking forward to your reply.\n\nYours sincerely,\nLi Ming\n\n【写作储备】\n\n▌开头常用句式：\n\nI’m writing to express my sincere thanks for your congratulations.\n\nThank you for your kind words regarding my achievement.\n\n▌提出建议常用表达：\n\nYou asked for my advice on…, so I’d like to suggest that…\n\nIt might be helpful to…\n\nI strongly recommend that you…\n\nAnother useful tip is to…\n\n▌结尾常用语句：\n\nI hope you find my suggestions practical.\n\nI’m more than willing to talk more if you need.\n\nFeel free to reach out anytime for further discussion.\n\n改写说明：\n\n结构和条理优化：将原有内容拆分为解析、范文、句式积累三大板块，采用分级标题和条目化表达，使层次更清晰、逻辑更顺畅。\n\n表达精炼与规范：对原有冗余或口语化语句进行精简，统一术语和表达风格，提升解析和范文的专业性和正式度。\n\n格式标准化：整体采用更正式、易读的文档格式，合理运用标题、分段和列表，突出各板块重点。\n\n如果您需要其他风格或针对特定环节的改写，我可以继续为您调整内容。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }]
  }),
  base(48, 'k-en-016', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "Directions\n\nWrite an essay based on the chart below. In your writing, you should\n\ninterpret the chart, and\n\ngive your comments.\n\nYou should write about 150 words on the ANSWER SHEET. (15 points)\n\n（图表内容：饼图标题为 “某高校学生旅游目的调查”，各旅游目的及对应比例分别为：欣赏风景 37%、缓解压力 33%、广交朋友 9%、培养独立能力 6%、其他 15%。）\n\n（图：见原题）",
    referenceAnswer: "【审题立意解析】\n\n图表解读：\n该饼图清晰展示了某高校学生群体旅游目的的调查数据。其中，“欣赏风景”（37%）与“缓解压力”（33%）是学生出游的两大主要动因，合计占比达七成。此外，“广交朋友”（9%）和“培养独立能力”（6%）也占有一定比例，另有“其他”目的占15%。\n\n写作要点提示：\n\n核心分析： 文章应重点解读“欣赏风景”与“缓解压力”这两大主流目的。考生可结合自身认知，分析其背后反映的当代大学生渴望亲近自然、探索世界以及应对学业、人际等多重压力的心理诉求与现实原因。\n\n次要分析： 可对占比相对较小的“广交朋友”与“培养独立能力”进行简要评述，说明旅游在个人成长与社会化过程中的辅助作用。\n\n观点评价： 可在文章结尾部分对大学生的旅游观念进行评价与升华，探讨旅游除休闲娱乐外更深层次的教育意义与个人价值。\n\n【参考范文】\n\nThis pie chart clearly illustrates the primary purposes of travel among university students based on a survey. As revealed, appreciating scenery is the foremost reason, cited by 37% of respondents, followed closely by relieving pressure at 33%. Other motivations include making friends (9%), cultivating independence (6%), and other aims (15%).\n\nThe data indicates that most students travel for leisure and relaxation. On one hand, drawn by the allure of nature and cultural sites, students are eager to explore beyond campus to broaden their horizons. On the other hand, facing academic and social pressures, they view travel as an effective escape to unwind and recharge.\n\nIn my view, while seeking enjoyment is understandable, students could derive greater value from travel. Journeys offer opportunities for deep cultural immersion, meaningful social interactions, and personal growth. By embracing these aspects, travel can become a more enriching and transformative experience.\n\n【范文结构分析】\n\n第一段：图表描述\n\n首句概括图表主题（大学生旅游目的）。\n\n后续句子具体描述各项占比，突出主要数据（欣赏风景37%，缓解压力33%）。\n\n第二段：核心目的分析\n\n首句总结两大主要目的（休闲与放松）。\n\n随后分两点阐释：\n探索欲与开阔眼界（对应“欣赏风景”）。\n\n压力应对与身心恢复（对应“缓解压力”）。\n\n第三段：观点评述与升华\n\n提出个人见解：旅游意义可超越娱乐。\n\n建议深化旅游体验：文化沉浸、社交互动、个人成长。\n\n总结旅游的潜在价值：丰富与转变性的经历。\n\n【写作素材积累】\n\n句式借鉴：\n\n“The data indicates that&mldr;\"（数据表明……）\n\n“On one hand&mldr; On the other hand&mldr;\"（一方面……另一方面……）\n\n“In my view, while&mldr;, &mldr; could&mldr;\"（在我看来，虽然……，但……可以……）\n\n主题词汇：\n\npurposes / motivations（目的/动机）\n\nappreciate scenery（欣赏风景）\n\nrelieve pressure（缓解压力）\n\nbroaden horizons（开阔眼界）\n\nunwind and recharge（放松与恢复精力）\n\ncultural immersion（文化沉浸）\n\npersonal growth（个人成长）\n\nenriching experience（丰富的经历）\n\n名言",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }],
    figures: [{ src: A + "_shared/images/english/e2_2016_48.png", alt: '作文图表' }]
  }),
]

export const questions2016_en2 = raw.map(q => q.materialId
  ? { ...q, material: MATERIALS[q.materialId] }
  : q)

export const paper2016_en2 = {
  id: P, year: Y,
  title: '2016 年全国硕士研究生招生考试 英语（二）',
  short: '2016 英语二原卷', group: 'en', subjects: ['en'],
  durationMin: 180, totalScore: 100,
  questionCount: questions2016_en2.length,
  qids: questions2016_en2.map(q => q.id),
  sections: [
    { name: 'Section I 完形填空', short: '完形 20 题', score: 10 },
    { name: 'Section II Part A 阅读理解', short: '阅读 20 题', score: 40 },
    { name: 'Section II Part B 新题型', short: '新题型', score: 10 },
    { name: 'Section II Part C 翻译', short: '翻译', score: 15 },
    { name: 'Section III 写作', short: '小作文 + 大作文', score: 25 }
  ],
  sourceName: '考研英语（二）历年真题',
  note: '完形 0.5 分/题、阅读 2 分/题；新题型、翻译、写作为主观自评。',
}
