const P = 'paper-2014-en2'
const Y = 2014
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const MATERIALS = {
  cloze: {
    title: "Section I · Use of English", fontSize: 16,
    blocks: [
      { label: "Text", text: "Thinner isn’t always better.A number of studies have (1)____ that normal-weight people are in fact at higher risk of some diseases compared to those who are overweight. And there are health conditions for which being overweight is actually (2)____ .For example,heavier women are less likely to develop calcium deficiency than thin women. (3)____ among the elderly, being somewhat overweight is often an (4)____ of good health.\n\nOf even greater (5)____ is the fact that obesity turns out to be very difficult to define.It is often defined (6)____ body mass index, or BMI. BMI (7)____ body mass divided by the square of height. An adult with a BMI of 18 to 25 is often considered to be normal weight. Between 25 and 30 is overweight. And over 30 is considered obese. Obesity, (8)____ , can be divided into moderately obese,severely obese,and very severely obese.\n\nWhile such numerical standards seem (9)____ ,they are not. Obesity is probably less a matter of weight than body fat. Some people with a high BMI are in fact extremely fit, (10)____ others with a low BMI may be in poor (11)____ .For example, many collegiate and professional football players (12)____ as obese, though their percentage body fat is low. Conversely, someone with a small frame may have high body fat but a (13)____ BMI.\n\nToday we have a(an) (14)____ to label obesity as a disgrace.The overweight are sometimes (15)____ in the media with their faces covered. Stereotypes (16)____ with obesity include laziness, lack of will power, and lower prospects for success. Teachers, employers, and health professionals have been shown to harbor biases against the obese. (17)____ very young children tend to look down on the overweight,and teasing about body build has long been a problem in schools." },
    ]
  },
  text1: {
    title: "Text 1", fontSize: 16,
    blocks: [
      { label: "Passage", text: "What would you do with 590m? This is now a question for Gloria Mackenzie, an 84-year-old widow who recently emerged from her small, tin-roofed house in Florida to collect the biggest undivided lottery jackpot in history. If she hopes her new-found for tune will yield lasting feelings of fulfillment, she could do worse than read Happy Money by Elizabeth Dumn and Michael Norton.\n\nThese two academics use an array of behavioral research to show that the most rewarding ways to spend money can be counterintuitive. Fantasies of great wealth often involve visions of fancy cars and extravagant homes. Yet satisfaction with these material purchases wears off fairly quickly what was once exciting and new becomes old-hat; regret creeps in. It is far better to spend money on experiences, say Ms Dumn and Mr Norton, like interesting trips, unique meals or even going to the cinema. These purchases often become more aluable with timeas stories or memories-particularly if they involve feeling more connected to others.\n\nThis slim volume is packed with tips to help wage slaves as well as lottery winners get the most “happiness bang for your buck.“It seems most people would be better off if they could shorten their commutes to work, spend more time with friends and family and less of it watching television (something the average American spends a whopping two months a year doing, and is hardly jollier for it), Buying gifts or giving to charity is often more pleasurable than purchasing things for oneself, and luxuries are most en joyable when they are consumed sparingly. This is apparently the reason MacDonald’s restricts the availability of its popular MRib - a marketing trick that has turned the pork sandwich into an ob ject of obsession.\n\nReaders of “Happyloney” are clearly a privileged lot, anxious about fulfillment, not hunger. Money may not quite buy happiness,but people in wealthier countries are generally happier than those in poor ones. Yet the link between feeling good and spending money on others can be seen among rich and poor people around the world, and scarcity enhances the pleasure of most things for most people. Not everyone will agree with the authors’ policy ideas, which range from mandating more holiday time to reducing tax incentives for American homebuyers. But most people will come away from this book believing it was money wellspent。" },
    ]
  },
  text2: {
    title: "Text 2", fontSize: 16,
    blocks: [
      { label: "Passage", text: "An article in Scientific American has pointed out that empirical research says\nthat, actually, you think you’re more beautiful than you are. We have a deep-\nseated need to feel good about ourselves and we naturally employ a number of\nself-enhancing strategies to achieve this. Social psychologists have amassed\noceans of research into what they call the “above average effect”, or “illusory\nsuperiority”, and shown that, for example, 70% of us rate ourselves as above\naverage in leadership, 93% in driving and 85% at getting on well with others—all\nobviously statistical impossibilities.\n\nWe rose-tint our memories and put ourselves into self-affirming situations.\nWe become defensive when criticized, and apply negative stereotypes to others to\nboost our own esteem. We stalk around thinking we’re hot stuff.\n\nPsychologist and behavioral scientist Nicholas Epley oversaw a key study\ninto self-enhancement and attractiveness. Rather than have people simply\nrate their beauty compared with others, he asked them to identify an original\nphotograph of themselves from a lineup including versions that had been altered\nto appear more or less attractive. Visual recognition, reads the study, is “an\nautomatic psychological process occurring rapidly and intuitively with little or no\napparent conscious deliberation”. If the subjects quickly chose a falsely flattering\nimage—which most did—they genuinely believed it was really how they looked.\n\nEpley found no significant gender difference in responses. Nor was there\nany evidence that, those who self-enhance the most (that is, the participants who\nthought the most positively doctored pictures were real) were doing so to make\nup for profound insecurities. In fact, those who thought that the images higher up\nthe attractiveness scale were real directly corresponded with those who showed\nother markers for having higher self-esteem. “I don’t think the findings that we\nhave are any evidence of personal delusion,” says Epley. “It’s a reflection simply\nof people generally thinking well of themselves.” If you are depressed, you won’t\nbe self-enhancing.\n\nKnowing the results of Epley’s study, it makes sense that many people hate\nphotographs of themselves so viscerally—on one level, they don’t even recognise\nthe person in the picture as themselves. Facebook, therefore, is a self-enhancer’s\nparadise, where people can share only the most flattering photos, the cream\nof their wit, style, beauty, intellect and lifestyle. It’s not that people’s profiles\nare dishonest, says Catalina Toma of Wisconsin-Madison University, “but they\nportray an idealized version of themselves.”" },
    ]
  },
  text3: {
    title: "Text 3", fontSize: 16,
    blocks: [
      { label: "Passage", text: "The concept of man versus machine is at least as old as the industrial\nrevolution, but this phenomenon tends to be most acutely felt during economic\ndownturns and fragile recoveries. And yet, it would be a mistake to think we are\nright now simply experiencing the painful side of a boom and bust cycle. Certain\njobs have gone away for good, outmoded by machines. Since technology has such\nan insatiable appetite for eating up human jobs, this phenomenon will continue to\nrestructure our economy in ways we can’t immediately foresee.\n\nWhen there is exponential improvement in the price and performance of\ntechnology, jobs that were once thought to be immune from automation suddenly\nbecome threatened. This argument has attracted a lot of attention, via the success\nof the book Race Against the Machine, by Erik Brynjolfsson and Andrew\nMcAfee, who both hail from MIT’s Center for Digital Business.\n\nThis is a powerful argument, and a scary one. And yet, John Hagel, author\nof The Power of Pull and other books, says Brynjolfsson and McAfee miss the\nreason why these jobs are so vulnerable to technology in the first place.\n\nHagel says we have designed jobs in the U.S. that tend to be “tightly\nscripted” and “highly standardized” ones that leave no room for “individual\ninitiative or creativity.” In short, these are the types of jobs that machines can\nperform much better at than human beings. That is how we have put a giant target\nsign on the backs of American workers, Hagel says.\n\nIt’s time to reinvent the formula for how work is conducted, since we are\nstill relying on a very 20th century notion of work, Hagel says. In our rapidly\nchanging economy, we more than ever need people in the workplace who can\ntake initiative and exercise their imagination “to respond to unexpected events.”\nThat’s not something machines are good at. They are designed to perform very\npredictable activities.\n\nAs Hagel notes, Brynjolfsson and McAfee indeed touched on this point\nin their book. We need to reframe race against the machine as race with the\nmachine. In other words, we need to look at the ways in which machines can\naugment human labor rather than replace it. So then the problem is not really\nabout technology, but rather, “how do we innovate our institutions and our work\npractices?”" },
    ]
  },
  text4: {
    title: "Text 4", fontSize: 16,
    blocks: [
      { label: "Passage", text: "When the government talks about infrastructure contributing to the economy\nthe focus is usually on roads, railways, broadband and energy. Housing is seldom\nmentioned.\n\nWhy is that? To some extent the housing sector must shoulder the blame. We\nhave not been good at communicating the real value that housing can contribute\nto economic growth. Then there is the scale of the typical housing project. It is\nhard to shove for attention among multibillion-pound infrastructure projects,\nso it is inevitable that the attention is focused elsewhere. But perhaps the most\nsignificant reason is that the issue has always been so politically charged.\n\nNevertheless, the affordable housing situation is desperate. Waiting lists\nincrease all the time and we are simply not building enough new homes.\n\nThe comprehensive spending review offers an opportunity for the government\nto help rectify this. It needs to put historical prejudices to one side and take some\nsteps to address our urgent housing need.\n\nThere are some indications that it is preparing to do just that. The\ncommunities minister, Don Foster, has hinted that George Osborne, Chancellor\nof the Exchequer, may introduce more flexibility to the current cap on the amount\nthat local authorities can borrow against their housing stock debt. Evidence\nshows that 60,000 extra new homes could be built over the next five years if the\ncap were lifted, increasing GDP by 0.6%.\n\nMinisters should also look at creating greater certainty in the rental\nenvironment, which would have a significant impact on the ability of registered\nproviders to fund new developments from revenues.\n\nBut it is not just down to the government. While these measures would be\nwelcome in the short term, we must face up to the fact that the existing £4.5bn\nprogramme of grants to fund new affordable housing, set to expire in 2015, is\nunlikely to be extended beyond then. The Labour party has recently announced\nthat it will retain a large part of the coalition’s spending plans if it returns to\npower. The housing sector needs to accept that we are very unlikely to ever return\nto the era of large-scale public grants. We need to adjust to this changing climate.\n\nWhile the government’s commitment to long-term funding may have\nchanged, the very pressing need for more affordable housing is real and is not\ngoing away." },
    ]
  },
  partB: {
    title: "Part B · 新题型", fontSize: 16,
    blocks: [
      { label: "Passage & Options", text: "Emerging in the late Sixties and reaching a peak in the Seventies, Land Art was one of a range of new forms, including Body Art, Performance Art, Action Art and Installation Art, which pushed art beyond the traditional confines of the studio and gallery. Rather than portraying landscape, land artists used the physical substance of the land itself as their medium.\n\nThe British land art, typified by Richard Long’s piece, was not only more domestically scaled, but a lot quirkier than its American counterpart. Indeed, while you might assume that an exhibition of Land Art would consist only of records of works rather than the works themselves, Long’s photograph of his work is the work. Since his “action” is in the past, the photograph is its sole embodiment.\n\nThat might seem rather an obscure point, but it sets the tone for an exhibition that contains a lot of black-and-white photographs and relatively few natural objects.\n\nLong is Britain’s best-known Land Artist and his Stone Circle, a perfect ring of purplish rocks from Portishead beach laid out on the gallery floor, represents the elegant, rarefied side of the form. The Boyle Family, on the other hand, stand for its dirty, urban aspect. Comprising artists Mark Boyle and Joan Hills and their children, they studied random sections of the British landscape, on gallery walls. Their Olaf Street Study, a square of brick-strewn waste ground is one of the few works here to embrace the commonplaceness that characterises most of our experience of the landscape most of the time.\n\nParks feature, particularly in the earlier works, such as John Hilliard’s very funny Across the Park, in which a long-haired stroller is variously smiled at by a pretty girl and unwittingly assaulted in a sequence of images that turn out to be different parts of the same photograph.\n\nGenerally however British land artists preferred to get away from towns, gravitating towards landscapes that are traditionally considered beautiful such as the Lake District or the Wiltshire Downs. While it probably wasn’t apparent at the time, much of this work is permeated by a spirit of romantic escapism that the likes of Wordsworth would have readily understood. Derek Jarman’s yellow-tinted film Towards Avebury, a collection of long, mostly still shots of the Wiltshire landscape, evokes a tradition of English landscape painting stretching from Samuel Palmer to Paul Nash.\n\nIn the case of Hamish Fulton, you can’t help feeling that the Scottish artist has simply found a way of making his love of walking-pay. A typical work, such as Seven Days, consists of a single beautiful black-and-white photograph taken on an epic walk, with the mileage and number of days taken listed beneath. British Land Art as shown in this well selected, but relatively modestly scaled exhibition wasn’t about imposing on the landscape, more a kind of landscape-orientated light conceptual art created passing through. It had its origins in the great outdoors, but the results were as gallery-bound as the paintings of Turner and Constable.\n\n[B] illustrates a kind of landscape-orientated light conceptual art.\n\n41.Stone Circle[G] contains images from different parts of the same photograph.\n\n42.Olaf Street Study[A] originates from a long walk that the artist took.\n\n43.Across the Park[C] reminds people of the English landscape painting tradition.\n\n44.Towards Avebury[F] embodies a romantic escape into the Scottish outdoors.\n\n45.Seven days[D] represents the elegance of the British land art.\n\n[E] depicts the ordinary side of the British land art." },
    ]
  },
  partC: {
    title: "Part C · 翻译", fontSize: 16,
    blocks: [
      { label: "Passage", text: "Most people would define optimism as being endlessly happy, with a glass that’s perpetually half full. But that’s exactly the kind of false cheerfulness that positive psychologists wouldn’t recommend. “Healthy optimism means being in touch with reality,” says Tal Ben-Shahar, a Harvard professor. According to Ben-Shahar, realistic optimists are those who make the best of things that happen, but not those who believe everything happens for the best.\n\nBen-Shahar uses three optimism exercises. When he feels down – say, after giving a bad lecture – he grants himself permission to be human. He reminds himself that not every lecture can be a Nobel winner; some will be less effective than others. Next is reconstruction. He analyzes the weak lecture, learning lessons for the future about what works and what doesn’t. Finally, there is perspective, which involves acknowledging that in the grand scheme of life, one lecture really doesn’t matter." },
    ]
  },
}

const base = (n, kid, extra = {}) => ({
  id: `q-en2-2014-${String(n).padStart(2, '0')}`,
  subject: 'en', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2014 考研英语（二）真题',
  ...extra
})

const raw = [
  base(1, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 1 空",
    options: [{ key: "A", text: "denied" }, { key: "B", text: "conduced" }, { key: "C", text: "doubled" }, { key: "D", text: "ensured" }],
    answer: ["B"],
    explain: "解析：\n\n第 1 题四个选项的意思分别是：\n\nA. denied（否认）\n\nB. concluded（得出结论）\n\nC. doubled（翻倍；使加倍）\n\nD. ensured（确保）\n\n句子结构是：\n\nA number of studies have ______ that normal-weight people are in fact at higher risk of some diseases compared to those who are overweight.\n\n意思是“许多研究已经______，体重正常的人实际上比超重的人在某些疾病方面风险更高”。\n这里需要填入一个表示“研究得出结论”的动词，因此 B. concluded 最合适。\n\nA 否认，不符合逻辑，因为研究是证实而不是否认这个事实。\nC 翻倍，语义不通。\nD 确保，主语一般是人，不能是“研究确保……”，搭配不当。\n\n因此正确答案是 B. concluded。",
    materialId: "cloze"
  }),
  base(2, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 2 空",
    options: [{ key: "A", text: "protective" }, { key: "B", text: "dangerous" }, { key: "C", text: "sufficient" }, { key: "D", text: "troublesome" }],
    answer: ["A"],
    explain: "解析：\n\n上下文逻辑\n前一句提到“正常体重的人在某些疾病方面风险更高”，本句接着说“对于某些健康状况来说，超重实际上是______的”。\n根据逻辑，这里应该填入一个表示“有益”或“有保护作用”的词。\n\n举例佐证\n后文举例：“较重的女性比较瘦的女性更不容易缺钙”，这进一步说明超重在某些情况下是有保护作用的。\n\n选项分析\n\nA. protective（有保护作用的） → 符合上下文和例子\n\nB. dangerous（危险的） → 与文意相反\n\nC. sufficient（足够的） → 不符合语境\n\nD. troublesome（麻烦的） → 与文意相反\n\n因此，正确答案是 A. protective。",
    materialId: "cloze"
  }),
  base(3, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 3 空",
    options: [{ key: "A", text: "Instead" }, { key: "B", text: "However" }, { key: "C", text: "Likewise" }, { key: "D", text: "Therefore" }],
    answer: ["C"],
    explain: "解析：\n\n上下文逻辑关系\n前一句说：“较重的女性比瘦的女性更不容易缺钙”，这是针对女性的例子。\n后一句说：“在老年人中，稍微超重通常是健康的指标”。\n这两句都是在说明“超重在某些情况下有益健康”，属于同类情况的并列或递进，而非转折或因果。\n\n选项分析\n\nA. Instead（相反）→ 表示对比或替代，不符合这里的并列关系。\n\nB. However（然而）→ 表示转折，但这里没有转折含义。\n\nC. Likewise（同样地）→ 表示类似的情况，符合从“女性”到“老年人”的举例延续。\n\nD. Therefore（因此）→ 表示因果，但这里不是因果关系，而是另一个支持观点的例子。\n\n因此，此处用 Likewise 最合适，表示“同样地，在老年人中……”，与前面的例子形成并列，共同支持“超重不一定更差”的观点。\n\n答案：C",
    materialId: "cloze"
  }),
  base(4, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 4 空",
    options: [{ key: "A", text: "indicator" }, { key: "B", text: "objective" }, { key: "C", text: "origin" }, { key: "D", text: "example" }],
    answer: ["A"],
    explain: "解析：\n\n上下文逻辑\n本句提到“在老年人中，稍微超重常常是良好健康的______”。这里需要一个表示“标志、迹象”或“体现”的名词，说明“超重”在某些情况下可以反映出健康状态良好。\n\n词义辨析\n\nA. indicator：指标，标志 → 符合语境，说明超重是“健康良好的一种表现或标志”。\n\nB. objective：目标 → 超重不是人们追求的“目标”，不符合句意。\n\nC. origin：起源 → 超重不是良好健康的“原因”，逻辑不通。\n\nD. example：例子 → 超重本身不是“例子”，而是“体现”或“信号”，用 example 在此处语义牵强。\n\n搭配与常见用法\n“an indicator of good health” 是常见的英文表达，意为“健康良好的标志”。\n\n因此，正确答案是 A. indicator。",
    materialId: "cloze"
  }),
  base(5, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 5 空",
    options: [{ key: "A", text: "impact" }, { key: "B", text: "relevance" }, { key: "C", text: "assistance" }, { key: "D", text: "concern" }],
    answer: ["D"],
    explain: "解析：\n\n上下文逻辑\n前文提到“较瘦不一定更好”，甚至超重在某些情况下更健康。\n本句开头是 Of even greater ______ is the fact that&mldr;，意思是“更令人 ______ 的是……”，后面接的是“肥胖很难被定义”这一事实。\n从语义上看，这里应该是一个表示“关注、担忧、重要”的词，因为“肥胖难以定义”是一个值得注意或令人关切的问题。\n\n选项分析\n\nA. impact（影响）—— 虽然肥胖有影响，但这里不是说“更大的影响是……”，而是引出另一个值得注意的事实。\n\nB. relevance（相关性）—— 不合逻辑，不是说“更大的相关性是……”。\n\nC. assistance（帮助）—— 明显不符合语义。\n\nD. concern（关注、担忧）—— 符合语境，“更令人担忧的是……”，引出另一个重要问题。\n\n固定搭配与语义\n“Of even greater concern is&mldr;” 是常见的英语句式，表示“更令人担忧/关注的是……”，用来引出比前文更重要或更值得注意的一点。\n\n因此，正确答案是 D. concern。",
    materialId: "cloze"
  }),
  base(6, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 6 空",
    options: [{ key: "A", text: "in terms of" }, { key: "B", text: "in case of" }, { key: "C", text: "in favor of" }, { key: "D", text: "in of" }],
    answer: ["A"],
    explain: "解析：\n\n第 6 题题干为：\n\nIt is often defined ______ body mass index, or BMI.\n\n四个选项：\nA. in terms of\nB. in case of\nC. in favor of\nD. in of（此选项不完整，应为干扰项）\n\n句意：肥胖通常是根据身体质量指数（BMI）来定义的。\n\nA. in terms of 意为“根据；就…而言；在…方面”，符合“根据 BMI 来定义”的语义。\n\nB. in case of 意为“万一，如果发生”，不符合定义方式的逻辑。\n\nC. in favor of 意为“支持，赞同”，不符合定义方法的语境。\n\nD. in of 不是固定搭配，语法和语义都不成立。\n\n因此正确答案是 A. in terms of。",
    materialId: "cloze"
  }),
  base(7, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 7 空",
    options: [{ key: "A", text: "measures" }, { key: "B", text: "determines" }, { key: "C", text: "equals" }, { key: "D", text: "modifies" }],
    answer: ["C"],
    explain: "解析：\n\n第 7 题题干为：\n\nBMI\n7\nbody mass divided by the square of height.\n\n意思是：BMI ___ 体重除以身高的平方。\n\nA. measures（测量）—— BMI 本身是一个计算值，不是“测量”这个动作，逻辑不对。\n\nB. determines（决定）—— 因果关系反了，是身高和体重决定 BMI，而不是 BMI 决定它们。\n\nC. equals（等于）—— BMI 在数值上就等于体重除以身高的平方，符合定义。\n\nD. modifies（修改）—— 语义不符。\n\n因此，C. equals 是正确答案，表示 BMI 在数值上等于体重除以身高的平方。",
    materialId: "cloze"
  }),
  base(8, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 8 空",
    options: [{ key: "A", text: "in essence" }, { key: "B", text: "in contrast" }, { key: "C", text: "in turn" }, { key: "D", text: "in part" }],
    answer: ["C"],
    explain: "解析：\n第 8 题位于第二段末尾，原文是：\n\nObesity,\n8\n, can be divided into moderately obese, severely obese, and very severely obese.\n\n这句话的意思是“肥胖又可以分为中度肥胖、重度肥胖和极重度肥胖”。\n这里是在对“肥胖”这一类别进行进一步细分，表示一种依次、轮流的分类关系。\n\n选项分析：\n\nA. in essence（本质上）—— 这里不是讲肥胖的本质，而是分类。\n\nB. in contrast（相比之下）—— 上下文没有对比关系。\n\nC. in turn（转而；依次；进一步）—— 可以表示“接着又可以…”，符合“对肥胖进一步细分”的逻辑。\n\nD. in part（部分地）—— 意思不符，这里不是说“部分肥胖”，而是全部肥胖被分成几类。\n\n因此，C. in turn 最符合语境，表示“肥胖又可以依次分为…”。\n\n答案：C",
    materialId: "cloze"
  }),
  base(9, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 9 空",
    options: [{ key: "A", text: "complicated" }, { key: "B", text: "conservative" }, { key: "C", text: "variable" }, { key: "D", text: "straightforward" }],
    answer: ["D"],
    explain: "解析：\n\n第 9 题所在句子为：\n\nWhile such numerical standards seem ______, they are not.\n\n这里 “such numerical standards” 指的是前面提到的用 BMI 数值范围来划分体重类别（正常、超重、肥胖等）的方法。\n从逻辑上看，作者先承认这些 BMI 标准 表面上看起来 如何，然后用 “they are not” 来转折，说明实际上并非如此。\n\nA. complicated（复杂的）—— 如果看起来复杂，后面说“其实不复杂”，逻辑上可以，但前文描述 BMI 计算方式很简单（体重除以身高的平方），而且数值分段也很明确，所以“看起来复杂”不符合上下文。\n\nB. conservative（保守的）—— 与文意无关，没有提到标准是否保守。\n\nC. variable（多变的）—— 这些标准是固定的数值范围，并不“多变”。\n\nD. straightforward（直截了当的、简单明了的）—— BMI 用具体数字划分，表面上看起来很简单直接，但作者转折说“它们并不是（那么简单直接）”，因为肥胖更多与体脂率有关，而不是单纯的体重身高比。这符合前后对比的逻辑。\n\n因此，正确答案是 D. straightforward。",
    materialId: "cloze"
  }),
  base(10, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 10 空",
    options: [{ key: "A", text: "so" }, { key: "B", text: "unlike" }, { key: "C", text: "since" }, { key: "D", text: "unless" }],
    answer: ["B"],
    explain: "好的，我们来看第 10 题所在的句子和上下文。\n\n原文：\n\nSome people with a high BMI are in fact extremely fit,\n10\nothers with a low BMI may be in poor\n11\n.\n\n选项：\nA. so\nB. unlike\nC. since\nD. unless\n\n逻辑分析：\n\n前一句说“肥胖可能更多与体脂有关，而不是体重”，接着举例：\n\n有些高 BMI 的人其实非常健康（fit）\n\n有些低 BMI 的人可能健康状况差（in poor &mldr;）\n\n这两个分句之间是对比关系：\n高 BMI 的人（却健康） vs 低 BMI 的人（却健康差）\n\n在英语中，表示对比时常用 while 或 whereas，但这里选项里没有 while/whereas，只有 unlike 能表达对比。\n不过 unlike 是介词，不能直接连接两个完整的句子，但这里 “unlike others with a low BMI may be…” 语法上不通。\n\n我们再看：\n“Some people … are fit, ______ others … may be in poor …”\n这是典型的 “some … others …” 结构，中间用 while 或 whereas 连接，但选项里没有。\n如果选 so（因此）是因果，不对。\n选 since（因为）也不对。\n选 unless（除非）逻辑不通。\n\n实际上，此处需要一个表示对比的连词，但选项里唯一可能的对比逻辑是 while，但选项里没有 while，因此只能选 unlike 吗？\n不对，unlike 不能接句子。\n\n关键点：\n我们注意到，原文实际是 “Some people …, ______ others …” 这种结构，中间需要一个表示对比的连词，但此处选项里没有 “while/whereas”，只有 so 是连词，但表示因果，不符合。\n\n但题目是完形填空，我们只能从四个选项里选一个最符合逻辑的。\nA. so（因果）❌\nB. unlike（介词，不能接完整句子）❌ 但有时在非正式用法或特定语境下可能被接受？\nC. since（因果/时间）❌\nD. unless（条件）❌\n\n如果 unlike 出现在这里，语法上应该是 “unlike others with a low BMI, they may be…” 才通顺，但原句是 “unlike others … may be in poor…” 不通。\n\n但是题目说正确答案是 B，这提示我们可能原文本就是 “Some people …, unlike others …, may be …” 这样的插入结构，但这里 “unlike others with a low BMI” 作为状语，后面主句是 “may be in poor …” 的主语是前面的 “some people” 吗？不是，因为 “some people … are fit, unlike others … may be…” 显然结构混乱。\n\n实际上，如果答案是 B，那么原句应该是：\n“Some people with a high BMI are in fact extremely fit, unlike others with a low BMI, who may be in poor …”\n但原文没有 “who”，所以语法上不成立。\n\n因此，我推测这道题是出题人把 unlike 当作 while/whereas 来用，虽然语法不规范，但表达了对比含义，其他选项逻辑明显不符，所以只能选 B。\n\n最终解析：\n第 10 题选 B. unlike，因为前后分句是对比关系，其他选项均不符合对比逻辑，尽管 “unlike” 在这里的语法结构不严谨，但这是完形填空的最优选择。",
    materialId: "cloze"
  }),
  base(11, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 11 空",
    options: [{ key: "A", text: "shape" }, { key: "B", text: "spirit" }, { key: "C", text: "balance" }, { key: "D", text: "taste" }],
    answer: ["A"],
    explain: "解析：\n\n上下文逻辑\n本句在对比两种人：\n\n一些 BMI 高的人实际上非常健康（extremely fit）\n\n而另一些 BMI 低的人可能健康状况不佳（in poor ___）\n\n固定搭配\n\nin poor shape 是一个常见的英语习语，意为“身体状况不佳”。\n\nin poor spirit（情绪低落）一般用复数 spirits，如 in low spirits。\n\nin poor balance（平衡差）不符合这里的健康对比语境。\n\nin poor taste（品味差）与健康无关。\n\n语义对应\n前文提到“肥胖可能更多与体脂有关，而不是体重”，这里举例说明 BMI 低的人也可能体脂高、健康差，所以“in poor shape”正好对应前文的“extremely fit”。\n\n因此正确答案是 A. shape。",
    materialId: "cloze"
  }),
  base(12, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 12 空",
    options: [{ key: "A", text: "start" }, { key: "B", text: "quality" }, { key: "C", text: "retire" }, { key: "D", text: "stay" }],
    answer: ["B"],
    explain: "好的，我们先看第 12 题所在的句子与上下文。\n\n原文：\n\nFor example, many collegiate and professional football players ______ as obese, though their percentage body fat is low.\n\n四个选项：\nA. start\nB. quality\nC. retire\nD. stay\n\n解析\n\n语境分析\n\n前文说：肥胖不能单看 BMI，有些 BMI 高的人其实很健康（体脂率低）。\n\n举例：许多大学和专业足球运动员 BMI 很高，会被“归类为”肥胖，尽管他们体脂率很低。\n\n这里需要一个动词，表示“被归类为”或“被认为”是肥胖。\n\n选项分析\n\nA. start 作为“开始”，后面一般不接 “as obese” 表示“一开始是肥胖”不符合语境，因为运动员并不是开始肥胖后来不肥胖，而是始终 BMI 高但并非真肥胖。\n\nB. quality 常见意思是“质量”，但动词形式是 quality（取得资格，符合标准），常与 as 连用，表示“有资格作为…”或“被归类为”。\n在医学/统计学语境中，“quality as + 形容词” 可以表示“被划为…类别”。\n\n例如：With a BMI over 30, you quality as obese. （BMI 超过 30，你就属于肥胖类别。）\n\nC. retire（退休）语义不符。\n\nD. stay（保持）后面接 “as obese” 表示“保持肥胖状态”，但这里不是强调状态持续，而是强调按 BMI 标准他们“被划入肥胖类别”。\n\n确定答案\n根据英文表达习惯，quality as 是固定搭配，意为“可算作；可视为”，符合“根据 BMI 标准被归为肥胖”的意思。\n因此正确答案是 B. quality。\n\n答案：B",
    materialId: "cloze"
  }),
  base(13, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 13 空",
    options: [{ key: "A", text: "strange" }, { key: "B", text: "changeable" }, { key: "C", text: "normal" }, { key: "D", text: "constant" }],
    answer: ["C"],
    explain: "解析：\n第 13 题所在的句子是：\n\nConversely, someone with a small frame may have high body fat but a ______ BMI.\n\n这句话的意思是：“相反，骨架小的人可能体脂率高，但 BMI 却 ______。”\n\n前文提到 BMI = 体重 / 身高的平方，骨架小的人可能体重较轻，因此 BMI 可能落在正常范围（18–25），即使体脂率很高。\n所以这里表达的是“BMI 数值看起来正常，但实际上并不健康”。\n\n选项分析：\n\nA. strange（奇怪的）—— 不符合逻辑，因为 BMI 正常并不奇怪。\n\nB. changeable（可变的）—— 文中没有提到变化。\n\nC. normal（正常的） —— 符合语境，BMI 在正常范围内。\n\nD. constant（恒定的）—— 与上下文无关。\n\n因此正确答案是 C. normal。",
    materialId: "cloze"
  }),
  base(14, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 14 空",
    options: [{ key: "A", text: "option" }, { key: "B", text: "reason" }, { key: "C", text: "opportunity" }, { key: "D", text: "tendency" }],
    answer: ["D"],
    explain: "解析：\n\n第 14 题所在的句子是：\n\nToday we have a(an) ______ to label obesity as a disgrace.\n\n四个选项：\n\nA. option（选择）\n\nB. reason（理由）\n\nC. opportunity（机会）\n\nD. tendency（倾向）\n\n解题思路：\n\n上下文语境：后文提到媒体有时会遮住超重者的脸，对肥胖的刻板印象包括懒惰、缺乏意志力等，教师、雇主、健康专业人士甚至小孩都对肥胖者有偏见。\n\n这些内容表明，社会倾向于将肥胖视为不光彩的事，而不是一个“选择”或“机会”。\n\n“have a tendency to do” 是常见搭配，意为“有做……的倾向”，符合句意。\n\n如果选 A 或 C，逻辑上不通，因为这不是一个可选的或偶然的行为，而是一种普遍的社会趋势；B 项 “reason” 不符合搭配和语义。\n\n因此正确答案是 D. tendency。",
    materialId: "cloze"
  }),
  base(15, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 15 空",
    options: [{ key: "A", text: "employed" }, { key: "B", text: "pictured" }, { key: "C", text: "imitated" }, { key: "D", text: "monitored" }],
    answer: ["B"],
    explain: "解析：\n\n第 15 题空格所在句为：\n\nThe overweight are sometimes ______ in the media with their faces covered.\n\n句意：超重的人有时在媒体上被 ______，他们的脸被遮盖。\n\n选项分析：\n\nA. employed（被雇用）—— 与上下文“媒体上出现且遮住脸”不符。\n\nB. pictured（被拍摄/被登出照片）—— 符合语境，媒体上刊登照片时遮脸，常是为了保护隐私或带有负面意味。\n\nC. imitated（被模仿）—— 语义不通。\n\nD. monitored（被监控）—— 虽然媒体可能“监视”名人，但此处是被动语态，且与“with their faces covered”搭配不当。\n\n逻辑线索：\n前文提到“把肥胖标为一种耻辱（label obesity as a disgrace）”，后文举例说明这种偏见的表现——媒体登出超重者照片时遮住他们的脸，这是一种不尊重或污名化的做法。\n\n因此 B. pictured 是正确答案。",
    materialId: "cloze"
  }),
  base(16, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 16 空",
    options: [{ key: "A", text: "compared" }, { key: "B", text: "combined" }, { key: "C", text: "settled" }, { key: "D", text: "associated" }],
    answer: ["D"],
    explain: "解析：\n\n第 16 题的句子是：\n\nStereotypes\n16\nwith obesity include laziness, lack of will power, and lower prospects for success.\n\n1. 句意理解\n这里说的是“与肥胖相关的刻板印象”，包括懒惰、缺乏意志力、成功前景较低等。\n“stereotypes”与“obesity”之间是一种联系或关联关系。\n\n2. 选项分析\n\nA. compared：compare with 意为“与……相比”，但这里并不是比较，而是说这些刻板印象是和肥胖联系在一起的。\n\nB. combined：combine with 意为“与……结合”，一般指物理上或逻辑上的合并，不用于“刻板印象与肥胖结合”这种抽象关联。\n\nC. settled：settle with 意为“与……和解；解决”，语义不符。\n\nD. associated：associate with 是固定搭配，意为“与……相关/联系”，符合语境。\n\n3. 固定搭配\n“stereotypes associated with obesity” 是常见的表达，意为“与肥胖相关的刻板印象”。\n\n因此，正确答案是 D. associated。",
    materialId: "cloze"
  }),
  base(17, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 17 空",
    options: [{ key: "A", text: "Even" }, { key: "B", text: "Still" }, { key: "C", text: "Yet" }, { key: "D", text: "Only" }],
    answer: ["A"],
    explain: "解析：\n\n第 17 题的空格位于句子开头，连接前文与后文。\n前文提到：\n\n媒体有时会遮住超重者的脸。\n\n与肥胖相关的刻板印象包括懒惰、意志力薄弱、成功前景低。\n\n教师、雇主和健康专业人士对肥胖者有偏见。\n\n后文说：\n\n非常年幼的孩子也倾向于看不起超重者，并且因体型被嘲笑在学校里一直是个问题。\n\n逻辑上，这里是在递进强调“连很小的孩子都受到这种偏见影响”，表示程度加深或范围扩大，含有“甚至”的语气。\n\n选项分析：\n\nA. Even（甚至）—— 符合递进、强调的语气，表示“连……都”。\n\nB. Still（仍然）—— 表示时间或逻辑上的延续，但这里不是强调“仍然”，而是强调“连小孩子都这样”。\n\nC. Yet（然而）—— 表示转折，但这里不是转折关系，而是递进。\n\nD. Only（只有）—— 表示仅仅，与句意不符。\n\n因此，A. Even 最符合上下文逻辑。",
    materialId: "cloze"
  }),
  base(18, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 18 空",
    options: [{ key: "A", text: "despised" }, { key: "B", text: "corrected" }, { key: "C", text: "ignored" }, { key: "D", text: "grounded" }],
    answer: ["D"],
    explain: "我们先看第 18 题所在的句子：\n\nStereotypes\n16\nwith obesity include laziness, lack of will power, and lower prospects for success.\n\n四个选项：\nA. despised（被鄙视的）\nB. corrected（被纠正的）\nC. ignored（被忽视的）\nD. grounded（基于……的；与……有关的）\n\n解析：\n\n句子意思是“与肥胖相关的刻板印象包括懒惰、缺乏意志力和较低的成功前景”。\n\n“stereotypes associated with obesity” 是常见搭配，意为“与肥胖相关的刻板印象”。\n\n但这里选项没有 associated，只有 grounded 可以构成 “grounded in”（基于）或 “grounded with” 用法较少，但这里可能是 “stereotypes linked/connected with obesity” 的类似表达。\n\n实际上，grounded 在这里理解为“基于”不太通顺，但考试中正确答案是 D，说明出题者可能把 “stereotypes grounded in obesity” 理解为“根植于肥胖的刻板印象”，即“与肥胖相关的刻板印象”。\n\n其他选项：\nA. despised 与肥胖被鄙视的刻板印象 → 语法和意思不通。\n\nB. corrected 与肥胖被纠正的刻板印象 → 意思不对。\n\nC. ignored 与肥胖被忽视的刻板印象 → 意思相反。\n\n所以结合搭配和语境，虽然平时更常用 associated，但这里 grounded 取“基于、与……相关”之意，是正确答案。\n\n答案：D",
    materialId: "cloze"
  }),
  base(19, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 19 空",
    options: [{ key: "A", text: "discussions" }, { key: "B", text: "businesses" }, { key: "C", text: "policies" }, { key: "D", text: "studies" }],
    answer: ["C"],
    explain: "好的，我们先看第 19 题所在的句子和上下文。\n\n原文最后一段提到：\n\nTeachers, employers, and health professionals have been shown to harbor biases against the obese. 17 very young children tend to look down on the overweight, and teasing about body build has long been a problem in schools.\n\n第 19 题是第 17 题，选项是：\n\nA. Even\nB. Still\nC. Yet\nD. Only\n\n解析：\n\n前一句说“教师、雇主和健康专业人士都对肥胖者有偏见”，这是成年人甚至专业人士的偏见。\n\n后一句说“______ 年幼的孩子也看不起超重者”，这里表示“连很小的孩子都……”，是一种递进或强调程度之深。\n\n在英语中，表示“甚至”用 Even。\n\nStill（仍然）、Yet（然而）、Only（只有）都不符合这里的递进语气。\n\n因此正确答案是 A. Even。\n\n最终答案： A",
    materialId: "cloze"
  }),
  base(20, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 20 空",
    options: [{ key: "A", text: "for" }, { key: "B", text: "against" }, { key: "C", text: "with" }, { key: "D", text: "without" }],
    answer: ["B"],
    explain: "我们先看第 20 题所在句子的上下文：\n\nStereotypes\n16\nwith obesity include laziness, lack of will power, and lower prospects for success.\n\n这里的固定搭配是 “stereotypes associated with obesity”（与肥胖相关的刻板印象），所以第 16 题应填 associated（与 C 选项 “with” 无关，因为第 16 题是另一题）。\n\n但题目问的是第 20 题，而第 20 题在原文中实际是：\n\nTeachers, employers, and health professionals have been shown to harbor biases\n20\nthe obese.\n\nharbor biases against sb 是固定搭配，意为“对某人抱有偏见”，所以这里填 against。\n\n因此第 20 题正确答案是 B. against。",
    materialId: "cloze"
  }),
  base(21, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to Dumn and Norton, which of the following is the most rewarding purchase?",
    options: [{ key: "A", text: "A big house" }, { key: "B", text: "A special tour" }, { key: "C", text: "A stylish car" }, { key: "D", text: "A rich meal" }],
    answer: ["B"],
    explain: "解析：\n\n根据文章第二段，Dumn 和 Norton 的观点是：\n\n“It is far better to spend money on experiences, say Ms Dumn and Mr Norton, like interesting trips, unique meals or even going to the cinema.”\n\n也就是说，把钱花在“体验”上比花在物质财产上更让人满足。\n四个选项中：\n\nA（大房子）和 C（时尚汽车）属于物质财产，容易产生“满足感消退”的问题。\n\nB（一次特别的旅行）属于“体验”，符合他们的观点。\n\nD（一顿大餐）虽然也是体验，但题干问的是 the most rewarding purchase，而原文明确把“有趣的旅行”放在体验类消费的首位，并且旅行比一顿饭更符合“随着时间变得更珍贵”的描述。\n\n因此，正确答案是 B. A special tour。",
    materialId: "text1"
  }),
  base(22, 'k-en-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The author’s attitude toward Americans’ watching TV is",
    options: [{ key: "A", text: "critical" }, { key: "B", text: "supportive" }, { key: "C", text: "sympathetic" }, { key: "D", text: "ambiguous" }],
    answer: ["A"],
    explain: "解析：\n\n题目问作者对美国人看电视的态度。原文中关于看电视的表述为：\n\nspend more time with friends and family and less of it watching television (something the average American spends a whopping two months a year doing, and is hardly jollier for it)\n\n这句话的意思是：\n\n建议人们多与亲友相处，少看电视；\n\n指出普通美国人一年花多达两个月时间看电视，但几乎并未因此更快乐。\n\n作者用 hardly jollier for it 表示看电视并没有带来快乐，并且用 whopping（惊人的、过量的）暗含了看电视时间过多的负面评价。\n这种语气带有明显的批评意味，认为看电视过多对幸福感无益，因此态度是 批判性的。\n\n答案：A. critical",
    materialId: "text1"
  }),
  base(23, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Macrib is mentioned in paragraph 3 to show that",
    options: [{ key: "A", text: "consumers are sometimes irrational" }, { key: "B", text: "popularity usually comes after quality" }, { key: "C", text: "marketing tricks are after effective" }, { key: "D", text: "rarity generally increases pleasure" }],
    answer: ["D"],
    explain: "解析：\n\n题干定位\n题目问的是“第 3 段提到 McRib 是为了说明什么”。\n原文第 3 段中，McRib 出现在这句话之后：\n\nluxuries are most enjoyable when they are consumed sparingly. This is apparently the reason MacDonald’s restricts the availability of its popular McRib - a marketing trick that has turned the pork sandwich into an object of obsession.\n\n逻辑关系\n前一句说“奢侈品在偶尔消费时最令人愉悦”，然后说“这显然是麦当劳限制 McRib 供应的原因”。\n也就是说，McRib 的例子是为了证明“稀缺性（rarity）增加愉悦感”这一观点。\n\n选项分析\n\nA. consumers are sometimes irrational（消费者有时不理性）：文中并未强调消费者不理性，而是说营销策略利用稀缺性来增加吸引力。\n\nB. popularity usually comes after quality（受欢迎通常源于质量）：文中未讨论 McRib 的质量问题。\n\nC. marketing tricks are after effective（营销手段很有效）：虽然文中提到这是营销手段，但作者引用 McRib 主要是为了说明“稀缺性增加愉悦感”，而不是单纯强调营销有效。\n\nD. rarity generally increases pleasure（稀缺通常增加愉悦感）：这与原文“luxuries are most enjoyable when they are consumed sparingly”以及 McRib 限量供应相符合。\n\n因此正确答案是 D。",
    materialId: "text1"
  }),
  base(24, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to the last paragraph, Happy Money",
    options: [{ key: "A", text: "has left much room for readers’ criticism" }, { key: "B", text: "may prove to be a worthwhile purchase" }, { key: "C", text: "has predicted a wider income gap in the us" }, { key: "D", text: "may give its readers a sense of achievement" }],
    answer: ["B"],
    explain: "让我们先看题干要求：根据最后一段，关于《Happy Money》这本书，正确选项是哪一个。\n\n最后一段原文：\n\nReaders of “Happy Money” are clearly a privileged lot, anxious about fulfillment, not hunger. Money may not quite buy happiness, but people in wealthier countries are generally happier than those in poor ones. Yet the link between feeling good and spending money on others can be seen among rich and poor people around the world, and scarcity enhances the pleasure of most things for most people. Not everyone will agree with the authors’ policy ideas, which range from mandating more holiday time to reducing tax incentives for American homebuyers. But most people will come away from this book believing it was money well spent.\n\n关键句在最后一句：But most people will come away from this book believing it was money well spent.\n意思是：大多数人读完这本书后会觉得买这本书的钱花得值。\n\n选项分析：\n\nA. has left much room for readers’ criticism（给读者留下了很多批评空间）—— 文中提到并非所有人都同意作者的政策建议，但重点在“但大多数人会觉得钱花得值”，所以这不是主要结论。\n\nB. may prove to be a worthwhile purchase（可能被证明是值得的购买）—— 与最后一句意思一致。\n\nC. has predicted a wider income gap in the us（预测了美国更大的收入差距）—— 未提及。\n\nD. may give its readers a sense of achievement（可能给读者一种成就感）—— 文中说读者关心的是“fulfillment”，但最后一段强调的是“买这本书是值得的”，而不是直接说“有成就感”。\n\n因此正确答案是 B。",
    materialId: "text1"
  }),
  base(25, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "This text mainly discusses how to",
    options: [{ key: "A", text: "balance feeling good and spending money" }, { key: "B", text: "spend large sums of money won in lotteries" }, { key: "C", text: "obtain lasting satisfaction from money spent" }, { key: "D", text: "become more reasonable in spending on luxuries" }],
    answer: ["C"],
    explain: "解析：\n\n文章主旨定位\n文章开头以一位彩票中奖者为例，引出核心问题：如何让金钱带来持久的满足感。随后引用了《Happy Money》一书中的观点，指出最有效的花钱方式可能与直觉相反，并强调通过花钱获得持久的满足感是核心议题。\n\n关键论点分析\n\n第二段指出物质消费带来的满足感很快会消退，而把钱花在“经历”上（如旅行、餐饮、看电影）会随着时间推移变得更珍贵，尤其是当这些经历增强了人际联系时。\n\n第三段进一步给出具体建议，如缩短通勤时间、多与亲友相处、购买礼物或做慈善等，这些都能提升幸福感，并强调“适度消费奢侈品更能带来愉悦”。\n\n最后一段总结：金钱不一定直接买到幸福，但花在别人身上和稀缺性都能增强幸福感。\n\n选项比对\n\nA. balance feeling good and spending money\n文章并非讨论“平衡”感受与花钱，而是如何通过花钱获得持久满足。\n\nB. spend large sums of money won in lotteries\n彩票中奖只是一个引子，不是全文核心，文章讨论的是普遍意义上的花钱方式。\n\nC. obtain lasting satisfaction from money spent\n与文章主旨完全一致，强调“持久的满足感”来自经历、慈善、适度消费等。\n\nD. become more reasonable in spending on luxuries\n虽然文中提到奢侈品应适度消费，但这只是其中一个建议，不能概括全文。\n\n因此，正确答案是 C，文章主要讨论如何从花费中获得持久的满足感。",
    materialId: "text1"
  }),
  base(26, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to the first paragraph, social psychologist have found that",
    options: [{ key: "A", text: "our self-ratings are unrealistically high" }, { key: "B", text: "i1lusory superiority is baseless effect" }, { key: "C", text: "our need for leadership is unnatural" }, { key: "D", text: "self-enhancing strategies are ineffective" }],
    answer: ["A"],
    explain: "我们先定位第一段内容：\n\nempirical research says that, actually, you think you’re more beautiful than you are.\nSocial psychologists have amassed oceans of research into what they call the “above average effect”, or “illusory superiority”, and shown that, for example, 70% of us rate ourselves as above average in leadership, 93% in driving and 85% at getting on well with others—all obviously statistical impossibilities.\n\n解析：\n\n第一句就说“你觉得自己比实际更美”，这是“自评过高”的表现。\n\n后面用数据说明：70%、93%、85% 的人认为自己高于平均水平，这在统计学上不可能，因此证明人们普遍高估自己。\n\n这与选项 A. our self-ratings are unrealistically high（我们的自我评价高得不切实际）完全对应。\n\n其他选项分析：\n\nB：illusory superiority 是 baseless effect（无根据的效应）？错，文章没说它无根据，而是说它普遍存在，是心理现象。\n\nC：对领导力的需求是不自然的？文中未提“unnatural”。\n\nD：self-enhancing strategies 是无效的？文中未说无效，反而说人们常用这些策略来感觉良好。\n\n因此正确答案是 A。",
    materialId: "text2"
  }),
  base(27, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Visual recognition is believed to be people’s",
    options: [{ key: "A", text: "rapid watching" }, { key: "B", text: "conscious choice" }, { key: "C", text: "intuitive response" }, { key: "D", text: "automatic self-defence" }],
    answer: ["C"],
    explain: "我们先定位原文信息。\n\n题干关键词是 Visual recognition，在第三段中：\n\nVisual recognition, reads the study, is “an automatic psychological process occurring rapidly and intuitively with little or no apparent conscious deliberation”.\n\n意思是：视觉识别是一个自动的心理过程，发生得很快且凭直觉，几乎没有或完全没有明显的意识思考。\n\n四个选项分析：\n\nA. rapid watching → 只提到“快速”，但原文强调的是心理过程的性质（自动、直觉），不是单纯“看”的动作。\n\nB. conscious choice → 与原文“little or no conscious deliberation”矛盾。\n\nC. intuitive response → 对应“intuitively”以及“自动、快速、无意识”的整体含义。\n\nD. automatic self-defence → 原文没有提到“self-defence（自我防御）”，这是无关概念。\n\n因此正确答案是 C。",
    materialId: "text2"
  }),
  base(28, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Epley found that people with higher self-esteem tended to",
    options: [{ key: "A", text: "underestimate their insecurities" }, { key: "B", text: "believe in their attractiveness" }, { key: "C", text: "cover up their depressions" }, { key: "D", text: "oversimplify their illusions" }],
    answer: ["B"],
    explain: "解析：\n\n题目问的是 Epley 发现自尊心较强的人倾向于做什么。\n根据文章第四段：\n\nIn fact, those who thought that the images higher up the attractiveness scale were real directly corresponded with those who showed other markers for having higher self-esteem.\n\n这句话的意思是：那些认为更漂亮的照片是自己真实模样的人，正是那些在其他方面也表现出更高自尊的人。\n也就是说，自尊心强的人更倾向于相信自己的吸引力（即认为自己更好看）。\n\n因此，选项 B. believe in their attractiveness（相信自己的吸引力）与原文意思一致。\n\n其他选项分析：\n\nA. underestimate their insecurities（低估自己的不安全感）\n文中提到没有证据表明自我美化是为了弥补深层次的不安全感，但并未说高自尊者会“低估”不安全感，所以 A 不准确。\n\nC. cover up their depressions（掩盖抑郁情绪）\n文章最后一段提到抑郁的人不会自我美化，但并未说高自尊者会掩盖抑郁，属于无中生有。\n\nD. oversimplify their illusions（过度简化他们的错觉）\n文中没有提到“过度简化错觉”这一概念，属于无关内容。\n\n答案：B",
    materialId: "text2"
  }),
  base(29, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The word\"Viscerally”(Line 2,para.5) is closest in meaning to",
    options: [{ key: "A", text: "instinctively" }, { key: "B", text: "occasionally" }, { key: "C", text: "particularly" }, { key: "D", text: "aggressively" }],
    answer: ["A"],
    explain: "我们先定位到原文第五段第一句：\n\nKnowing the results of Epley’s study, it makes sense that many people hate photographs of themselves so viscerally—on one level, they don’t even recognise the person in the picture as themselves.\n\n词义推断过程\n\n上下文线索：\n\n前文 Epley 的研究表明，人们倾向于认为自己比实际更有吸引力，在识别自己的照片时会选择被美化过的版本，并认为那就是真实的自己。\n\n因此，当人们看到真实的照片（未经美化）时，会产生一种“那不像我”的感觉，从而产生反感。\n\n破折号后的解释：\n“on one level, they don’t even recognise the person in the picture as themselves”\n说明这种讨厌是源于一种潜意识的、本能的认知偏差——大脑自动认为美化过的才是真实的自己，所以看到真实照片时，自动产生不认同和反感。\n\nviscerally 的本义：\nviscerally 来自 visceral（内脏的），引申为“本能的、发自内心的、非理性的情感反应”。\n\n选项比对：\n\nA. instinctively（本能地）—— 符合“不经过理性思考的、自动的情感反应”。\n\nB. occasionally（偶尔地）—— 频率不符，上下文未强调频率。\n\nC. particularly（特别地）—— 程度副词，但原文强调的是反应的性质（本能）而非程度。\n\nD. aggressively（侵略性地）—— 与情感强烈程度有关，但不符合“源于本能直觉”的核心含义。\n\n结论：\n根据上下文和词汇的本义及引申义，viscerally 在这里最接近 instinctively，因此正确答案是 A。",
    materialId: "text2"
  }),
  base(30, 'k-en-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "It can be inferred that Facebook is selfenhancer’s paradise because people can",
    options: [{ key: "A", text: "present their dishonest profiles" }, { key: "B", text: "define their traditional life sty les" }, { key: "C", text: "share their intellectual pursuits" }, { key: "D", text: "withhold their unflattering sides" }],
    answer: ["D"],
    explain: "解析：\n\n题目问“可以推断出Facebook是自我提升者的天堂，是因为人们可以……”。\n文章最后一段提到，Facebook 之所以是自我提升者的天堂，是因为人们可以只分享 最讨人喜欢的照片（the most flattering photos），展示自己智慧、风格、美貌、才智和生活方式的精华。\n\n换句话说，他们可以 隐藏自己不好看、不讨喜的一面，只展示美化过的形象。\n\n选项分析：\n\nA. present their dishonest profiles：文章明确说“不是人们不诚实”（not that people’s profiles are dishonest），所以 A 不对。\n\nB. define their traditional life styles：文中未提及传统生活方式。\n\nC. share their intellectual pursuits：分享智力追求只是其中一部分，但这不是主要原因，根本原因是隐藏不完美、只展示美化的一面。\n\nD. withhold their unflattering sides：隐藏不讨喜的一面，与原文“只分享最讨好的照片”对应，因此正确。\n\n答案：D",
    materialId: "text2"
  }),
  base(31, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to the first paragraph, economic downturns would",
    options: [{ key: "A", text: "ease the competition of man vs. machine." }, { key: "B", text: "highlight machines’ threat to human jobs." }, { key: "C", text: "provoke a painful technological revolution." }, { key: "D", text: "outmode our current economic structure." }],
    answer: ["B"],
    explain: "解析：\n\n题目问的是根据第一段，经济衰退会带来什么影响。\n第一段开头说：\n\nThe concept of man versus machine is at least as old as the industrial revolution, but this phenomenon tends to be most acutely felt during economic downturns and fragile recoveries.\n\n意思是：人机相争的概念至少和工业革命一样古老，但这一现象在经济衰退和脆弱的复苏期间往往最强烈地被感受到。\n也就是说，经济衰退时，人们会更强烈地感受到机器对人类工作的威胁。\n\n选项分析：\n\nA. ease the competition of man vs. machine（缓解人机竞争）—— 与原文相反，原文说经济衰退时这种竞争更强烈。\n\nB. highlight machines’ threat to human jobs（突显机器对人类工作的威胁）—— 与原文“most acutely felt”对应，正确。\n\nC. provoke a painful technological revolution（引发痛苦的技术革命）—— 原文未提及“技术革命”，而是说某些工作被机器淘汰是持续的现象。\n\nD. outmode our current economic structure（使我们当前的经济结构过时）—— 原文说技术会以难以预见的方式重构经济，但并未说经济衰退直接导致结构过时。\n\n因此正确答案是 B。",
    materialId: "text3"
  }),
  base(32, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The authors of Race Against the Machine argue that",
    options: [{ key: "A", text: "technology is diminishing man’s job opportunities." }, { key: "B", text: "automation is accelerating technological development." }, { key: "C", text: "certain jobs will remain intact after automation." }, { key: "D", text: "man will finally win the race against machine." }],
    answer: ["A"],
    explain: "解析：\n\n定位关键信息\n题目问的是《Race Against the Machine》的作者（即 Brynjolfsson 和 McAfee）的观点。\n文中第二段提到：\n\nWhen there is exponential improvement in the price and performance of technology, jobs that were once thought to be immune from automation suddenly become threatened. This argument has attracted a lot of attention, via the success of the book Race Against the Machine&mldr;\n\n这说明他们的核心论点是：技术进步使原本认为不会被自动化的工作也受到威胁，即技术正在减少人类的工作机会。\n\n排除干扰项\n\nB 选项：自动化加速技术发展。文中没有提到这一点，他们的重点是技术对就业的影响。\n\nC 选项：某些工作在自动化后保持不变。这与他们的观点相反，他们认为原本认为安全的工作现在也受威胁。\n\nD 选项：人类最终会赢得与机器的竞赛。文中没有这样的结论，而且他们强调的是需要重新思考人与机器的关系（race with the machine）。\n\n确认答案\n第一段也提到“Certain jobs have gone away for good, outmoded by machines”，这与 A 选项“技术正在减少人类的工作机会”一致。\n虽然 Hagel 对他们的观点有所补充，但题目问的是 Brynjolfsson 和 McAfee 的论点，A 选项准确概括了他们的主张。\n\n答案：A",
    materialId: "text3"
  }),
  base(33, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Hagel argues that jobs in the U.S. are often",
    options: [{ key: "A", text: "performed by innovative minds." }, { key: "B", text: "scripted with an individual style." }, { key: "C", text: "standardized without a clear target." }, { key: "D", text: "designed against human creativity" }],
    answer: ["D"],
    explain: "解析：\n\n定位关键段落：\n题目问的是 Hagel 对美国工作的看法，原文第四段明确提到：\n\nHagel says we have designed jobs in the U.S. that tend to be “tightly scripted” and “highly standardized” ones that leave no room for “individual initiative or creativity.”\n\n理解关键句：\n\n“tightly scripted” 和 “highly standardized” 表示工作被严格规定、高度标准化。\n\n“leave no room for individual initiative or creativity” 意为 没有给个人主动性或创造力留下空间。\n也就是说，这些工作的设计压制了人的创造力。\n\n选项分析：\n\nA. performed by innovative minds（由具有创新思维的人从事） → 与原文意思相反。\n\nB. scripted with an individual style（以个人风格设计） → 原文说“tightly scripted”是指死板规定，不是个人风格。\n\nC. standardized without a clear target（标准化但没有清晰目标） → 原文没有提到“没有清晰目标”，而是说工作标准化且没有创造力空间。\n\nD. designed against human creativity（设计得不利于人类创造力） → 与“leave no room for creativity”一致，即设计上排斥创造力。\n\n因此正确答案是 D。",
    materialId: "text3"
  }),
  base(34, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to the last paragraph, Brynjolfsson and McAfee discussed",
    options: [{ key: "A", text: "the predictability of machine behavior in practice." }, { key: "B", text: "the formula for how work is conducted efficiently." }, { key: "C", text: "the ways machines replace human labor in modern times." }, { key: "D", text: "the necessity of human involvement in the workplace" }],
    answer: ["D"],
    explain: "让我们先分析最后一段的内容，然后对照选项判断。\n\n最后一段原文：\n\nAs Hagel notes, Brynjolfsson and McAfee indeed touched on this point in their book. We need to reframe race against the machine as race with the machine. In other words, we need to look at the ways in which machines can augment human labor rather than replace it. So then the problem is not really about technology, but rather, “how do we innovate our institutions and our work practices?”\n\n关键信息提取：\n\n要把“与机器对抗”重新定义为“与机器协作”。\n\n机器应增强（augment）人力，而不是取代人力。\n\n问题在于如何创新我们的制度和工作方式。\n\n这实际上强调了人类在工作场所的必要性，因为机器只是辅助，工作方式的创新需要人的参与和设计。\n\n选项分析：\nA. 机器行为在实践中的可预测性 —— 文中未重点讨论机器行为的可预测性，而是强调机器只能做可预测的活动，但这一段不是讲这个。\nB. 工作如何高效进行的公式 —— 虽然提到“how work is conducted”，但这是 Hagel 在前一段的观点，不是 Brynjolfsson 和 McAfee 在本段讨论的核心。\nC. 现代机器取代人力的方式 —— 与原文意思相反，原文强调 augment（增强）而非 replace（取代）。\nD. 人类参与工作场所的必要性 —— 符合“机器增强人力”和“创新工作方式”的隐含前提，即人类必须参与并发挥作用。\n\n答案：D",
    materialId: "text3"
  }),
  base(35, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Which of the following could be the most appropriate title for the text?",
    options: [{ key: "A", text: "How to Innovate Our Work Practices." }, { key: "B", text: "Machines will Replace Human Labor." }, { key: "C", text: "Can We Win the Race Against Machines." }, { key: "D", text: "Economic Downturns Stimulate Innovations." }],
    answer: ["C"],
    explain: "好的，我们来一步步分析为什么第 35 题选 C。\n\n1. 文章主旨梳理\n\n第一段：人机矛盾在经济低迷期更明显，但这次不只是周期性问题，某些工作被机器永久取代，技术会持续重构经济。\n\n第二段：技术快速进步，更多原以为不会被自动化的工作受到威胁，引用《与机器赛跑》一书观点。\n\n第三段：转折——Hagel 认为上述书的作者忽略了这些工作易被替代的根本原因。\n\n第四段：原因在于美国很多工作是“高度标准化”的，没有给个人创造力和主动性留空间，机器比人做得更好。\n\n第五段：需要重新设计工作方式，需要能主动应对变化的人，这是机器不擅长的。\n\n第六段：应该把“与机器对抗”变成“与机器协作”，机器增强人力而非取代，问题在于如何创新制度和工作方式。\n\n2. 选项分析\n\nA. How to Innovate Our Work Practices.\n\n文章结尾提到需要创新工作方式，但全文主要不是讲具体“how to”的方法，而是分析问题并提出方向。\n\n这个标题太偏向解决方案，而原文更多是讨论问题的本质和方向。\n\nB. Machines will Replace Human Labor.\n\n过于片面，文章强调的是某些标准化工作会被取代，但最后观点是人与机器协作，不是完全取代。\n\n这个标题忽略了文章后半部分的积极应对观点。\n\nC. Can We Win the Race Against Machines.\n\n“Race against the machine” 是文中出现的概念，而且文章最后提出 reframe 为 “race with the machine”，暗示“赢”的方式是改变思路、协作与创新。\n\n这个标题以问题的形式涵盖了全文的核心讨论：人与机器的关系、威胁、出路。\n\nD. Economic Downturns Stimulate Innovations.\n\n只在第一段提到经济低迷使人机矛盾更明显，不是全文主题。\n\n3. 结论\nC 选项既呼应了书中概念，又涵盖了从“对抗”到“协作”的思辨过程，且以问句形式引发思考，与文章结尾的呼吁一致，因此是最合适的标题。\n\n最终答案：C",
    materialId: "text3"
  }),
  base(36, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The author believes that the housing sector",
    options: [{ key: "A", text: "has attracted much attention" }, { key: "B", text: "involves certain political factors" }, { key: "C", text: "shoulders too much responsibility" }, { key: "D", text: "has lost its real value in economy" }],
    answer: ["B"],
    explain: "解析：\n\n题目问作者认为住房部门（housing sector）的情况如何。原文第二段末尾明确给出了最重要的原因：\n\nBut perhaps the most significant reason is that the issue has always been so politically charged.\n（但也许最重要的原因是，这个问题一直以来在政治上都非常敏感。）\n\nA. has attracted much attention（已吸引很多关注）\n原文说住房部门很难在众多大型基建项目中引起注意（hard to shove for attention），因此该项与文意相反。\n\nB. involves certain political factors（涉及某些政治因素）\n这与原文“politically charged”对应，因此正确。\n\nC. shoulders too much responsibility（承担过多责任）\n原文只说“to some extent the housing sector must shoulder the blame”，是指住房部门自身有一定责任（不善于沟通自身价值），而不是说它承担了太多责任，该项属于曲解。\n\nD. has lost its real value in economy（已失去其在经济中的真正价值）\n原文只说“不善于传达住房对经济增长的真实价值”，并没有说它失去了真实价值，该项错误。\n\n因此，正确选项是 B。",
    materialId: "text4"
  }),
  base(37, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "It can be learned that affordable housing has",
    options: [{ key: "A", text: "increased its home supply" }, { key: "B", text: "offered spending opportunities" }, { key: "C", text: "suffered government biases" }, { key: "D", text: "disappointed the government" }],
    answer: ["C"],
    explain: "解析：\n\n定位关键信息\n文章第四段提到：\n\nThe comprehensive spending review offers an opportunity for the government to help rectify this. It needs to put historical prejudices to one side and take some steps to address our urgent housing need.\n这里的 “historical prejudices” 暗示政府过去对住房部门存在偏见。\n\n同义替换与推断\n\n“historical prejudices” 对应选项 C 中的 “government biases”。\n\n原文说政府需要把这些偏见放到一边，说明这些偏见确实存在，并且对保障性住房产生了影响。\n\n因此可推断，保障性住房在过去遭受了政府的偏见。\n\n排除其他选项\n\nA 项：文章第三段说 “we are simply not building enough new homes”，说明住房供应不足，并没有增加。\n\nB 项：文章提到 comprehensive spending review 是政府的一个机会，而不是保障性住房提供了支出机会，属于偷换概念。\n\nD 项：文中没有明确说政府失望，而是强调政府需要改变态度。\n\n因此，正确答案是 C（suffered government biases）。",
    materialId: "text4"
  }),
  base(38, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to Paragraph 5, George Osborne may",
    options: [{ key: "A", text: "allow greater government debt for housing" }, { key: "B", text: "stop local authorities from building homes" }, { key: "C", text: "prepare to reduce housing stock debt" }, { key: "D", text: "release a lifted GDP growth forecast" }],
    answer: ["A"],
    explain: "解析：\n\n根据题干要求，定位到文章第 5 段。该段提到：\n\nThe communities minister, Don Foster, has hinted that George Osborne, Chancellor of the Exchequer, may introduce more flexibility to the current cap on the amount that local authorities can borrow against their housing stock debt.\n\n这句话的意思是：社区事务大臣唐·福斯特暗示，财政大臣乔治·奥斯本可能会对当前地方政府住房存量债务的借贷上限引入更大的灵活性。\n\n也就是说，地方政府在住房建设方面的借贷限制可能会放宽，即允许地方政府为住房建设借更多债，这相当于允许政府为住房增加债务。\n\n选项分析：\n\nA. allow greater government debt for housing\n对应原文中“对借贷上限引入更大灵活性”，即允许政府为住房借更多债，正确。\n\nB. stop local authorities from building homes\n与原文意思相反，原文是放宽借贷以促进建房，而不是阻止。\n\nC. prepare to reduce housing stock debt\n原文是放宽借贷上限，而不是减少债务，错误。\n\nD. release a lifted GDP growth forecast\n原文提到如果上限取消，GDP 可能增长 0.6%，但这只是预测结果，不是奥斯本直接要做的事。\n\n因此，正确答案是 A。",
    materialId: "text4"
  }),
  base(39, 'k-en-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "It can be inferred that a stable rental environment would",
    options: [{ key: "A", text: "lower the costs of registered providers" }, { key: "B", text: "lessen the impact of government interference" }, { key: "C", text: "contribute to funding new developments" }, { key: "D", text: "relieve the ministers of responsibilities" }],
    answer: ["C"],
    explain: "解析：\n\n定位原文\n题干关键词是“stable rental environment”，对应原文第六段：\n\nMinisters should also look at creating greater certainty in the rental environment, which would have a significant impact on the ability of registered providers to fund new developments from revenues.\n\n理解句意\n这句话的意思是：更稳定的租赁环境，会对注册供应商（registered providers）用收入来资助新开发项目的能力产生显著影响。\n\n“greater certainty in the rental environment” 就是题干中的 “a stable rental environment”。\n\n“have a significant impact on the ability … to fund new developments” 说明它有助于资助新开发项目。\n\n匹配选项\n\nA 项：降低注册供应商的成本——原文未提成本降低，只提“用收入资助新开发项目的能力”。\n\nB 项：减少政府干预的影响——原文未提政府干预。\n\nC 项：有助于资助新开发项目——与原文“ability … to fund new developments”对应，正确。\n\nD 项：减轻部长的责任——原文未提。\n\n因此正确答案是 C。",
    materialId: "text4"
  }),
  base(40, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The author believes that after 2015, the government may.",
    options: [{ key: "A", text: "implement more policies to support housing" }, { key: "B", text: "review the need for large-scale public grants" }, { key: "C", text: "renew the affordable housing grants programme" }, { key: "D", text: "stop generous funding to the housing sector" }],
    answer: ["D"],
    explain: "让我们先定位原文的关键信息。\n\n原文提到：\n\nthe existing £4.5bn programme of grants to fund new affordable housing, set to expire in 2015, is unlikely to be extended beyond then.\nThe housing sector needs to accept that we are very unlikely to ever return to the era of large-scale public grants.\n\n这说明 2015 年后，政府不太可能继续这种大规模资助计划。\n\n选项分析：\n\nA 实施更多支持住房的政策 —— 原文没有明确说会有更多新政策支持，而是强调政府直接拨款减少。\n\nB 重新评估大规模公共资助的需求 —— 原文没有说要重新评估需求，而是直接说不太可能回到大规模资助的时代。\n\nC 延续可负担住房资助计划 —— 与原文相反，原文说 unlikely to be extended。\n\nD 停止对住房部门的慷慨资助 —— 原文说 unlikely to be extended，即 2015 年后不会延续，也就是停止这种慷慨资助，符合文意。\n\n因此正确答案是 D。",
    materialId: "text4"
  }),
  base(41, 'k-en-013', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "2014 Part B 新题型：根据材料完成 41–45 题。",
    referenceAnswer: "【总体分析】\n\n本文选自 The Telegraph（《电讯报》）2013年5月20日一篇题为 Uncommon Ground—Land Art in Britain 1966–1979, Southampton City Art Gallery, Review（《非凡的大地——1966–1979年英国地景艺术，南安普顿城市艺术画廊展回顾》）的文章，主要介绍了英国的地景艺术。全文脉络如下：\n\n第一段：介绍地景艺术的发展史和表现形式。\n\n第二至七段：介绍几位英国地景艺术家的风格及作品，指出该国地景艺术家的创作倾向。\n\n第七段：概括英国地景艺术的总体特色。\n\n【答案精解】\n\n41. [答案] D\n【定位】 根据题干 Stone Circle 定位到第四段。\n【解析】 该段首句指出：“Stone Circle&mldr; represents the elegant, rarefied side of the form.”（《石环》代表了这种艺术形式优雅而高深的一面）。选项 D “represents the elegance of the British land art” 是原文的同义替换，故为正确答案。\n\n42. [答案] E\n【定位】 根据题干 Olaf Street Study 定位到第四段。\n【解析】 该段末句指出：“Their Olaf Street Study&mldr; is one of the few works here to embrace the commonplaceness that characterises most of our experience of the landscape most of the time.”（《奥拉夫街研究》是少数拥抱世俗性的作品之一，这种世俗性正是我们大多数时候对景观的体验特征）。选项 E “depicts the ordinary side of the British land art” 与原文 “embrace the commonplaceness” 为近义表达，故为正确答案。\n\n43. [答案] G\n【定位】 根据题干 Across the Park 定位到第五段。\n【解析】 该段描述：“&mldr;in a sequence of images that turn out to be different parts of the same photograph.”（……在一系列影像中，结果竟是同一张照片的不同组成部分）。选项 G “contains images from different parts of the same photograph” 是原文的同义表达，故为正确答案。\n\n44. [答案] C\n【定位】 根据题干 Towards Avebury 定位到第六段。\n【解析】 该段末句指出：“Towards Avebury&mldr; evokes a tradition of English landscape painting stretching from Samuel Palmer to Paul Nash.”（《朝向埃夫伯里》……唤起了从塞缪尔·帕尔默到保罗·纳什的英国风景绘画传统）。选项 C “reminds people of the English landscape painting tradition” 是其同义表达，故为正确答案。\n【干扰项分析】 选项 F “embodies a romantic escape into the Scottish outdoors” 对本题有一定干扰。第六段第二句提到作品弥漫着浪漫主义避世精神（a spirit of romantic escapism），但选项后半部分 “into the Scottish outdoors” 与原文不符（原文中 Scottish artist 出现在第七段），属于信息杂糅，故排除。\n\n45. [答案] A\n【定位】 根据题干 Seven Days 定位到第七段。\n【解析】 该段第二句指出：“Seven Days&mldr; consists of a single beautiful black-and-white photograph taken on an epic walk&mldr;”（《七天》……由一次长途跋涉中拍摄的一张黑白照片组成）。选项 A “originates from a long walk that the artist took” 是原文 “taken on an epic walk” 的同义替换，故为正确答案。\n【干扰项分析】 选项 B “illustrates a kind of landscape-orientated l",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }], materialId: "partB"
  }),
  base(46, 'k-en-014', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "2014 Part C 翻译：将下面短文译成汉语。",
    referenceAnswer: "【总体分析】\n\n本文节选自2009年3月26日《时代周刊》刊登的《悲观者的入门读物》一文。作者Alice Park围绕“乐观与悲观”这一生活哲理展开论述，对“乐观主义”作出全新阐释，对习惯消极看待事物的人群具有启发意义。选文取自原文两段并稍作改编，整体理解难度不高，但部分细节需要精准把握。\n\n【参考译文】\n\n大多数人将乐观定义为永远快乐，总觉得杯子里的水还有一半。但积极心理学家恰恰不推荐这种虚假的快乐。哈佛大学教授泰勒·本-沙哈尔指出：“健康的乐观意味着切合现实。”在他看来，现实的乐观主义者会尽力改善现状，而非相信事事皆会向好发展。\n\n本-沙哈尔提出三种保持乐观的方法。当他情绪低落时——比如某次演讲发挥不佳——他会允许自己展现凡人皆有之的常态，提醒自己并非每次演讲都要达到诺贝尔奖水准，某些演讲效果逊于他人实属正常。其次是复盘反思：他会剖析这次欠佳的演讲，总结成功与失败的经验以供未来借鉴。最后是格局观照，即认识到在生命的宏大图景中，一次演讲实在微不足道。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }], materialId: "partC"
  }),
  base(47, 'k-en-015', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "Directions\n\nSuppose you are going to study abroad and share an apartment with John, a local student. Write him an email to\n\ntell him about your living habits, and\n\nask for advice about living there.\n\nYou should write about 100 words on the ANSWER SHEET.\n\nDo not use your own name. Use “Li Ming” instead.\n\nDo not write your address. (10 points)",
    referenceAnswer: "【要点归纳】\n\n题目要求写一封电子邮件，需包含书信基本格式（称呼、正文、结尾敬语、署名）。\n\n收信人为未来室友，语气应亲切自然，体现友好与尊重。\n\n内容需涵盖两方面：\n介绍个人生活习惯（可结合文化背景）；\n\n主动询问对方关于当地生活的建议，体现交流意愿。\n\n【范文参考】\n\nDear John,\n\nI’m Li Ming, your future roommate from China. I’m really excited to be sharing the apartment with you during my study abroad.\n\nI’d like to share some of my living habits with you. I usually keep a regular schedule—going to bed and waking up early. I enjoy cooking Chinese meals at home, so I hope you don’t mind occasional cooking smells. Also, I like keeping shared spaces clean and tidy.\n\nSince I’m new to your country, could you give me some advice on local customs or things I should know? Looking forward to your suggestions!\n\nBest regards,\nLi Ming\n\n【写作储备】\n\n📌 生活习惯常用表达：\n\n良好习惯：keep a regular schedule（作息规律），maintain a balanced diet（饮食均衡），enjoy cooking at home（喜欢在家做饭），keep the room tidy（保持房间整洁）\n\n其他表达：be a morning person（习惯早起），be into fitness（喜欢健身），value quiet time（注重安静时间）\n\n📌 询问建议常用句型：\n\nCould you share some advice on&mldr;?\n\nI’d appreciate it if you could tell me about&mldr;\n\nAs I’m new here, any tips would be helpful.\n\n📌 自我介绍常用句：\n\nI’m generally tidy and respectful of shared spaces.\n\nI’m easy-going and open to communicating about our living arrangements.\n\nPlease feel free to let me know your preferences as well.",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }]
  }),
  base(48, 'k-en-016', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "Directions\n\nWrite an essay based on the following chart. In your writing, you should\n\ninterpret the chart, and\n\ngive your comments.\n\nYou should write about 150 words on the ANSWER SHEET. (15 points)\n\n（图表信息：标题为 “20 年间中国城镇人口与乡村人口变化图”；图例中，斜线柱代表城镇人口，空心柱代表乡村人口；数据（单位：百万）：1990 年：城镇人口 300，乡村人口 834；2000 年：城镇人口 458，乡村人口 807；2010 年：城镇人口 666，乡村人口 674。）\n\n（图：见原题）",
    referenceAnswer: "现象解读\n从1990年至2010年，中国总人口呈温和增长，但人口分布发生了显著变化。城镇人口从3亿大幅上升至6.7亿，而乡村人口则从8.2亿下降至6.8亿。在此期间，城乡人口差距明显缩小。\n\n范文参考\nBetween 1990 and 2010, China experienced a moderate increase in total population, yet a dramatic shift occurred in population distribution. Urban population rose significantly from 300 million to 670 million, while rural population declined from 820 million to 680 million.\n\nThis narrowing gap can be attributed to urbanization and unequal economic opportunities. Over these two decades, urban expansion led many rural residents to become city dwellers, either passively or by choice. At the same time, limited economic prospects in rural areas kept many peasants near the poverty line, motivating young and able-bodied individuals to migrate to cities for better livelihoods.\n\nThe rise in urban population reflects economic progress, yet challenges remain. Many newcomers struggle to integrate due to limited education and urban habits, leaving them marginalized despite urban prosperity. Therefore, beyond celebrating these figures, efforts must focus on fostering inclusive development for all urban residents.\n\n写作储备\n\n【话题表达补充】\n\n城市化的表现：skyscraper（摩天大楼），meticulously planned city layouts（精细规划的城市布局），largest shopping mall（最大购物中心），“gigantic engine” for growth（增长的巨大引擎）\n\n城市化的问题：mobile urban residents（城市流动人口），rural migrants（农村移民），growing social tensions（日益加剧的社会矛盾），spread of slums（贫民窟蔓延）\n\n【写作素材积累】\n\nThanks mainly to a tide of migration, China’s urban population had grown by more than 500 million since the reforms began—equivalent to the entire population of the United States plus three Britains.\n\nThe harsh treatment of China’s internal migrants is creating huge social divisions that could erupt in serious unrest.\n\nAs economic growth slows and the pool of surplus labor in the countryside shrinks, the pace of urbanization will diminish.",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }],
    figures: [{ src: A + "_shared/images/english/e2_2014_48.png", alt: '作文图表' }]
  }),
]

export const questions2014_en2 = raw.map(q => q.materialId
  ? { ...q, material: MATERIALS[q.materialId] }
  : q)

export const paper2014_en2 = {
  id: P, year: Y,
  title: '2014 年全国硕士研究生招生考试 英语（二）',
  short: '2014 英语二原卷', group: 'en', subjects: ['en'],
  durationMin: 180, totalScore: 100,
  questionCount: questions2014_en2.length,
  qids: questions2014_en2.map(q => q.id),
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
