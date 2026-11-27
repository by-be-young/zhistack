const P = 'paper-2010-en2'
const Y = 2010
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const MATERIALS = {
  cloze: {
    title: "Section I · Use of English", fontSize: 16,
    blocks: [
      { label: "Text", text: "The outbreak of swine flu that was first detected in Mexico was declared a global epidemic on June 11, 2009. It is the first worldwide epidemic (1)____ by the World Health Organization in 41 years.\n\nThe heightened alert (2)____ an emergency meeting with flu experts in Geneva that assembled after a sharp rise in cases in Australia, and rising (3)____ in Britain, Japan, Chile and elsewhere.\n\nBut the epidemic is “ (4)____ ” in severity, according to Margaret Chan, the organization’s director general, (5)____ the overwhelming majority of patients experiencing only mild symptoms and a full recovery, often in the (6)____ of any medical treatment.\n\nThe outbreak came to global (7)____ in late April 2009, when Mexican authorities noted an unusually large number of hospitalizations and deaths (8)____ healthy adults. As much of Mexico City shut down at the height of a panic, cases began to (9)____ in New York City, the southwestern United States and around the world.\n\nIn the United States, new cases seemed to fade (10)____ warmer weather arrived. But in late September 2009, officials reported there was (11)____ flu activity in almost every state and that virtually all the (12)____ tested are the new swine flu, also known as A(H1N1), not seasonal flu. In the U.S., it has (13)____ more than one million people, and caused more than 600 deaths and more than 6,000 hospitalizations.\n\nFederal health officials (14)____ Tamiflu for children from the national stockpile and began (15)____ orders from the states for the new swine flu vaccine. The new vaccine, which is different from the annual flu vaccine, is (16)____ ahead of expectations. More than three million doses were to be made available in early October 2009, though most of those (17)____ doses were of the FluMist nasal spray type, which is not (18)____ for pregnant women, people over 50 or those with breathing difficulties, heart disease or several other (19)____ . But it was still possible to vaccinate people in other high-risk groups: health care workers, people (20)____ infants and healthy young people." },
    ]
  },
  text1: {
    title: "Text 1", fontSize: 16,
    blocks: [
      { label: "Passage", text: "The longest bull run in a century of art-market history ended on a dramatic note with a sale of 56 works by Damien Hirst, \"Beautiful Inside My Head Forever\", at Sotheby's in London on September 15th 2008. All but two pieces sold, fetching more than £70m, a record for a sale by a single artist. It was a last victory. As the auctioneer called out bids, in New York one of the oldest banks on Wall Street, Lehman Brothers, filed for bankruptcy.\n\nThe world art market had already been losing momentum for a while after rising vertiginously since 2003. At its peak in 2007 it was worth some $65 billion, reckons Clare McAndrew, founder of Arts Economics, a research firm—double the figure five years earlier. Since then it may have come down to $50 billion. But the market generates interest far beyond its size because it brings together great wealth, enormous egos, greed, passion and controversy in a way matched by few other industries.\n\nIn the weeks and months that followed Mr Hirst's sale, spending of any sort became deeply unfashionable, especially in New York, where the bail-out of the banks coincided with the loss of thousands of jobs and the financial demise of many art-buying investors. In the art world that meant collectors stayed away from galleries and salerooms. Sales of contemporary art fell by two-thirds, and in the most overheated sector—for Chinese contemporary art—they were down by nearly 90% in the year to November 2008. Within weeks the world's two biggest auction houses, Sotheby's and Christie's, had to pay out nearly $200m in guarantees to clients who had placed works for sale with them.\n\nThe current downturn in the art market is the worst since the Japanese stopped buying Impressionists at the end of 1989, a move that started the most serious contraction in the market since the second world war. This time experts reckon that prices are about 40% down on their peak on average, though some have been far more volatile. But Edward Dolman, Christie's chief executive, says: \"I'm pretty confident we're at the bottom.\"\n\nWhat makes this slump different from the last, he says, is that there are still buyers in the market, whereas in the early 1990s, when interest rates were high, there was no demand even though many collectors wanted to sell. Christie's revenues in the first half of 2009 were still higher than in the first half of 2006. Almost everyone who was interviewed for this special report said that the biggest problem at the moment is not a lack of demand but a lack of good work to sell. The three Ds—death, debt and divorce—still deliver works of art to the market. But anyone who does not have to sell is keeping away, waiting for confidence to return." },
    ]
  },
  text2: {
    title: "Text 2", fontSize: 16,
    blocks: [
      { label: "Passage", text: "I was addressing a small gathering in a suburban Virginia living room -- a women's group that had invited men to join them. Throughout the evening one man had been particularly talkative, frequently offering ideas and anecdotes, while his wife sat silently beside him on the couch. Toward the end of the evening I commented that women frequently complain that their husbands don't talk to them. This man quickly concurred. He gestured toward his wife and said, \"She's the talker in our family.\" The room burst into laughter; the man looked puzzled and hurt. \"It's true,\" he explained. \"When I come home from work I have nothing to say. If she didn't keep the conversation going, we'd spend the whole evening in silence.\"\n\nThis episode crystallizes the irony that although American men tend to talk more than women in public situations, they often talk less at home. And this pattern is wreaking havoc with marriage.\n\nThe pattern was observed by political scientist Andrew Hacker in the late '70s. Sociologist Catherine Kohler Riessman reports in her new book \"Divorce Talk\" that most of the women she interviewed -- but only a few of the men -- gave lack of communication as the reason for their divorces. Given the current divorce rate of nearly 50 percent, that amounts to millions of cases in the United States every year -- a virtual epidemic of failed conversation.\n\nIn my own research, complaints from women about their husbands most often focused not on tangible inequities such as having given up the chance for a career to accompany a husband to his, or doing far more than their share of daily life-support work like cleaning, cooking, social arrangements and errands. Instead they focused on communication: \"He doesn't listen to me.\" \"He doesn't talk to me.\" I found, as Hacker observed years before, that most wives want their husbands to be, first and foremost, conversational partners, but few husbands share this expectation of their wives.\n\nIn short, the image that best represents the current crisis is the stereotypical cartoon scene of a man sitting at the breakfast table with a newspaper held up in front of his face, while a woman glares at the back of it, wanting to talk." },
    ]
  },
  text3: {
    title: "Text 3", fontSize: 16,
    blocks: [
      { label: "Passage", text: "Over the past decade, many companies had perfected the art of creating automatic behaviors — habits — among consumers. These habits have helped companies earn billions of dollars when customers eat snacks, apply lotions and wipe counters almost without thinking, often in response to a carefully designed set of daily cues.\n\n\"There are fundamental public health problems, like hand washing with soap, that remain killers only because we can't figure out how to change people's habits,\" Dr. Curtis said. \"We wanted to learn from private industry how to create new behaviors that happen automatically.\"\n\nThe companies that Dr. Curtis turned to — Procter & Gamble, Colgate-Palmolive and Unilever — had invested hundreds of millions of dollars finding the subtle cues in consumers' lives that corporations could use to introduce new routines.\n\nIf you look hard enough, you'll find that many of the products we use every day — chewing gums, skin moisturizers, disinfecting wipes, air fresheners, water purifiers, health snacks, antiperspirants, colognes, teeth whiteners, fabric softeners, vitamins — are results of manufactured habits. A century ago, few people regularly brushed their teeth multiple times a day. Today, because of canny advertising and public health campaigns, many Americans habitually give their pearly whites a cavity-preventing scrub twice a day, often with Colgate, Crest or one of the other brands.\n\nA few decades ago, many people didn't drink water outside of a meal. Then beverage companies started bottling the production of far-off springs, and now office workers unthinkingly sip bottled water all day long. Chewing gum, once bought primarily by adolescent boys, is now featured in commercials as a breath freshener and teeth cleanser for use after a meal. Skin moisturizers are advertised as part of morning beauty rituals, slipped in between hair brushing and putting on makeup.\n\n\"Our products succeed when they become part of daily or weekly patterns,\" said Carol Berning, a consumer psychologist who recently retired from Procter & Gamble, the company that sold $76 billion of Tide, Crest and other products last year. \"Creating positive habits is a huge part of improving our consumers' lives, and it's essential to making new products commercially viable.\"\n\nThrough experiments and observation, social scientists like Dr. Berning have learned that there is power in tying certain behaviors to habitual cues through relentless advertising. As this new science of habit has emerged, controversies have erupted when the tactics have been used to sell questionable beauty creams or unhealthy foods." },
    ]
  },
  text4: {
    title: "Text 4", fontSize: 16,
    blocks: [
      { label: "Passage", text: "Many Americans regard the jury system as a concrete expression of crucial democratic values, including the principles that all citizens who meet minimal qualifications of age and literacy are equally competent to serve on juries; that jurors should be selected randomly from a representative cross section of the community; that no citizen should be denied the right to serve on a jury on account of race, religion, sex, or national origin; that defendants are entitled to trial by their peers; and that verdicts should represent the conscience of the community and not just the letter of the law. The jury is also said to be the best surviving example of direct rather than representative democracy. In a direct democracy, citizens take turns governing themselves, rather than electing representatives to govern for them.\n\nBut as recently as in 1986, jury selection procedures conflicted with these democratic ideals. In some states, for example, jury duty was limited to persons of supposedly superior intelligence, education, and moral character. Although the Supreme Court of the United States had prohibited intentional racial discrimination in jury selection as early as the 1880 case of Strauder v. West Virginia, the practice of selecting so-called elite or blue-ribbon juries provided a convenient way around this and other antidiscrimination laws.\n\nThe system also failed to regularly include women on juries until the mid-20th century. Although women first served on state juries in Utah in 1898, it was not until the 1940s that a majority of states made women eligible for jury duty. Even then several states automatically exempted women from jury duty unless they personally asked to have their names included on the jury list. This practice was justified by the claim that women were needed at home, and it kept juries unrepresentative of women through the 1960s.\n\nIn 1968, the Congress of the United States passed the Jury Selection and Service Act, ushering in a new era of democratic reforms for the jury. This law abolished special educational requirements for federal jurors and required them to be selected at random from a cross section of the entire community. In the landmark 1975 decision Taylor v. Louisiana, the Supreme Court extended the requirement that juries be representative of all parts of the community to the state level. The Taylor decision also declared sex discrimination in jury selection to be unconstitutional and ordered states to use the same procedures for selecting male and female jurors." },
    ]
  },
  partB: {
    title: "Part B · 新题型", fontSize: 16,
    blocks: [
      { label: "Passage & Options", text: "Copying Birds May Save Aircraft Fuel\n\nBoth Boeing and Airbus have trumpeted the efficiency of their newest aircraft, the 787 and A350 respectively. Their clever designs and lightweight composites certainly make a difference. But a group of researchers at Stanford University, led by Ilan Kroo, has suggested that airlines could take a more naturalistic approach to cutting jet fuel use and it would not require them to buy new aircraft.\n\nThe answer, says Dr. Kroo, lies with birds. Since 1914, scientists have known that birds flying in formation - a V-shape - expend less energy. The air flowing over a bird’s wings curls upwards behind the wingtips, a phenomenon known as upwash. Other birds flying in the upwash experience reduced drag, and spend less energy propelling themselves. Peter Lissaman, an aeronautics expert who was formerly at Caltech and the University of Southern California, has suggested that a formation of 25 birds might enjoy a range increase of 71%.\n\nWhen applied to aircraft, the principles are not substantially different, Dr. Kroo and his team modeled what would happen if three passenger jets departing from Los Angeles, San Francisco and Las Vegas were to assemble over Utah, assume an inverted V-formation, occasionally change places so all could have a turn in the most favourable positions, and proceed to London. They found that the aircraft consumed as much as 15% less fuel (coupled with a reduction in carbon-dioxide output). Nitrogen-oxide emissions during the cruising portions of the flight fell by around a quarter.\n\nThere are, of course, knots to be worked out. One consideration is safety, or at least the perception of it. Would passengers feel comfortable travelling in companion? Dr. Kroo points out that the aircraft could be separated by several nautical miles, and would not be in the intimate groupings favoured by display teams like the Red Arrows. A passenger peering out of the window might not even see the other planes. Whether the separation distances involved would satisfy air-traffic-control regulations is another matter, although a working group at the International Civil Aviation Organisation has included the possibility of formation flying in a blueprint for new operational guidelines.\n\nIt remains to be seen how weather conditions affect the air flows that make formation flight more efficient. In zones of increased turbulence, the planes’ wakes will decay more quickly and the effect will diminish. Dr. Kroo says this is one of the areas his team will investigate further. It might also be hard for airlines to co-ordinate the departure times and destinations of passenger aircraft in a way that would allow them to gain from formation flight. Cargo aircraft, in contrast, might be easier to reschedule, as might routine military flights.\n\nAs it happens, America’s armed forces are on the case already. Earlier this year the country’s Defence Advanced Research Projects Agency announced plans to pay Boeing to investigate formation flight, though the programme has yet to begin. There are reports that some military aircraft flew in formation when they were low on fuel during the Second World War, but Dr. Lissaman says they are unsubstantiated. “My father was an RAF pilot and my cousin the skipper of a Lancaster lost over Berlin,” he adds. So he should know.\n\nFindings of the Stanford University researchers will promote the sales of new Boeing and Airbus aircraft.\n\nThe upwash experience may save propelling energy as well as reducing resistance.\n\nFormation flight is more comfortable because passengers can not see the other planes.\n\nThe role that weather plays in formation flight has not yet been clearly defined.\n\nIt has been documented that during World War II, America’s armed forces once tried formation flight to save fuel." },
    ]
  },
  partC: {
    title: "Part C · 翻译", fontSize: 16,
    blocks: [
      { label: "Passage", text: "“Sustainability” has become a popular word these days, but to Ted Ning, the concept will always have personal meaning. Having endured a painful period of unsustainability in his own life made it clear to him that sustainability-oriented values must be expressed through everyday action and choice.\n\nNing recalls spending a confusing year in the late 1990s selling insurance. He’d been through the dot-com boom and burst and, desperate for a job, signed on with a Boulder agency.\n\nIt didn’t go well. “It was a really bad move because that’s not my passion,” says Ning, whose dilemma about the job translated, predictably, into a lack of sales. “I was miserable. I had so much anxiety that I would wake up in the middle of the night and stare at the ceiling. I had no money and needed the job. Everyone said, ‘Just wait, you’ll turn the corner, give it some time.’”" },
    ]
  },
}

const base = (n, kid, extra = {}) => ({
  id: `q-en2-2010-${String(n).padStart(2, '0')}`,
  subject: 'en', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2010 考研英语（二）真题',
  ...extra
})

const raw = [
  base(1, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 1 空",
    options: [{ key: "A", text: "criticized" }, { key: "B", text: "appointed" }, { key: "C", text: "commented" }, { key: "D", text: "designated" }],
    answer: ["D"],
    explain: "解析：\n\n句意理解\n第一段说：“首次在墨西哥发现的猪流感疫情于 2009 年 6 月 11 日被宣布为全球流行病。这是世界卫生组织 41 年来首次____的全球流行病。”\n空格处需要一个表示“指定、认定、宣布为”的词，与“全球流行病”搭配。\n\n选项辨析\n\nA. criticized（批评）—— 语义不符，世卫组织不是批评流行病。\n\nB. appointed（任命）—— 用于职位，不用于流行病。\n\nC. commented（评论）—— 后面一般接 on，且意思不够正式和官方。\n\nD. designated（指定、认定）—— 常用于官方宣布、命名某种状态，符合“世卫组织将此次疫情指定为全球流行病”的语境。\n\n搭配与用法\n“designate &mldr; as &mldr;” 是常见搭配，这里省略了 as，但意思仍是“官方指定”。\n在公共卫生领域，世卫组织“designate a pandemic”是标准用法。\n\n因此正确答案是 D. designated。",
    materialId: "cloze"
  }),
  base(2, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 2 空",
    options: [{ key: "A", text: "proceeded" }, { key: "B", text: "activated" }, { key: "C", text: "followed" }, { key: "D", text: "prompted" }],
    answer: ["C"],
    explain: "解析：\n\n第 2 题原文为：\n\nThe heightened alert ______ an emergency meeting with flu experts in Geneva that assembled after a sharp rise in cases in Australia, and rising ______ in Britain, Japan, Chile and elsewhere.\n\n逻辑关系分析：\n\n这里讲的是“提高的警报级别”与“紧急会议”之间的时间顺序关系。\n\n从上下文看，是因为澳大利亚病例急剧增加，以及在英国、日本等地病例增多，所以召开了紧急会议，然后才宣布了“提高的警报级别”。\n\n因此，警报级别的提高是在紧急会议之后发生的，即“警报级别提高” followed（跟随/在……之后）紧急会议。\n\n选项分析：\n\nA. proceeded（在……之前发生）—— 逻辑反了。\n\nB. activated（激活、启动）—— 是警报启动会议，还是会议启动警报？这里逻辑上应是会议在前，警报在后，所以不是“激活”。\n\nC. followed（跟随）—— 符合“先开会，后提高警报”的时间顺序。\n\nD. prompted（促使）—— 如果是 prompted，则逻辑为“警报促使了会议召开”，但原文会议召开的原因不是警报，而是病例增加，且警报是在会议之后才宣布的。\n\n因此正确答案是 C. followed。",
    materialId: "cloze"
  }),
  base(3, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 3 空",
    options: [{ key: "A", text: "digits" }, { key: "B", text: "numbers" }, { key: "C", text: "amounts" }, { key: "D", text: "sums" }],
    answer: ["B"],
    explain: "解析：\n\n第 3 题所在的句子是：\n\nThe heightened alert 2 an emergency meeting with flu experts in Geneva that assembled after a sharp rise in cases in Australia, and rising 3 in Britain, Japan, Chile and elsewhere.\n\n这里 “rising 3” 与前面的 “a sharp rise in cases” 并列，都是指病例数量的增加。\n\nA. digits 一般指数位、数字（0-9），不用于表示数量。\n\nB. numbers 可以表示“数量”，尤其用于可数名词，如病例数（cases）。\n\nC. amounts 通常用于不可数名词。\n\nD. sums 多指金额、总数，不用于“病例数”这种语境。\n\n此处 “rising numbers” 指“（病例）数量的增加”，符合语境，因此选 B。",
    materialId: "cloze"
  }),
  base(4, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 4 空",
    options: [{ key: "A", text: "moderate" }, { key: "B", text: "normal" }, { key: "C", text: "unusual" }, { key: "D", text: "extreme" }],
    answer: ["A"],
    explain: "解析：\n\n第4题所在句子为：\n\nBut the epidemic is “______” in severity, according to Margaret Chan, &mldr;\n\n后文紧接着说：\n\n&mldr; the overwhelming majority of patients experiencing only mild symptoms and a full recovery&mldr;\n\n这说明虽然世卫组织宣布了全球大流行，但多数患者症状轻微且能痊愈，因此严重程度并不高。\n\n四个选项：\n\nA. moderate（中等的，温和的）\n\nB. normal（正常的）\n\nC. unusual（不寻常的）\n\nD. extreme（极端的）\n\n根据“多数患者症状轻微”可推断，疫情严重程度是“温和的”，而不是极端的或不寻常的，也不是“正常的”（因为流感大流行本身不是常态事件）。\n\n因此正确答案是 A. moderate。",
    materialId: "cloze"
  }),
  base(5, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 5 空",
    options: [{ key: "A", text: "with" }, { key: "B", text: "in" }, { key: "C", text: "from" }, { key: "D", text: "by" }],
    answer: ["A"],
    explain: "解析：\n\n第 5 题所在句为：\n\nBut the epidemic is “moderate” in severity, according to Margaret Chan, the organization’s director general, ______ the overwhelming majority of patients experiencing only mild symptoms and a full recovery&mldr;\n\n结构分析：\n\n主句是 “the epidemic is ‘moderate’ in severity”。\n\n逗号后面是 独立主格结构（absolute construction），用来补充说明情况。\n\n独立主格常见形式为：with + 名词 + 现在分词/过去分词，表示伴随状况或原因。\n\n这里 “the overwhelming majority of patients experiencing&mldr;” 是一个名词 + 现在分词短语，逻辑主语是 “patients”，与主句主语不同，因此前面用 with 引导独立主格。\n\n选项分析：\n\nA. with ✅ 正确，构成 “with + 名词 + 现在分词” 的独立主格，表示伴随情况。\n\nB. in ❌ 不符合独立主格结构。\n\nC. from ❌ 表示来源，不符合此处逻辑。\n\nD. by ❌ 表示方式或动作执行者，不适用于此处的伴随说明。\n\n句意：\n“但该流行病严重程度‘适中’，因为绝大多数患者只出现轻微症状并完全康复，且常常是在没有任何医疗的情况下。”\n“with&mldr;” 在这里解释为什么说严重程度是“适中”的。\n\n答案：A",
    materialId: "cloze"
  }),
  base(6, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 6 空",
    options: [{ key: "A", text: "progress" }, { key: "B", text: "absence" }, { key: "C", text: "presence" }, { key: "D", text: "favor" }],
    answer: ["B"],
    explain: "解析：\n\n第 6 题所在句子为：\n\n&mldr; the overwhelming majority of patients experiencing only mild symptoms and a full recovery, often in the 6 of any medical treatment.\n\n句意理解：\n大多数患者只有轻微症状并且完全康复，而且通常是在 没有 任何医疗治疗的情况下。\n\n选项分析：\n\nA. progress（进展）→ in the progress of 表示“在…的进程中”，与“无治疗”意思不符。\n\nB. absence（缺乏）→ in the absence of 是固定搭配，意为“在没有…的情况下”，符合句意。\n\nC. presence（存在）→ in the presence of 意为“在…存在的情况下”，与句意相反。\n\nD. favor（赞同）→ in favor of 意为“支持、有利于”，此处语义不通。\n\n因此，正确答案是 B. absence。",
    materialId: "cloze"
  }),
  base(7, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 7 空",
    options: [{ key: "A", text: "reality" }, { key: "B", text: "phenomenon" }, { key: "C", text: "concept" }, { key: "D", text: "notice" }],
    answer: ["D"],
    explain: "解析：\n第 7 题所在句子为：\n\nThe outbreak came to global __ 7 __ in late April 2009, when Mexican authorities noted an unusually large number of hospitalizations and deaths…\n\n1. 句意理解\n这句话的意思是“这次疫情在 2009 年 4 月下旬引起了全球的______”，后面说墨西哥当局注意到很多住院和死亡病例。\n这里显然是指疫情被全球注意到、知晓。\n\n2. 固定搭配\n\ncome to one’s notice 是固定搭配，意为“引起某人的注意”。\n\n此处是 come to global notice，即“引起全球的注意”。\n\n3. 选项分析\n\nA. reality（现实）→ “come to global reality” 不符合搭配，且逻辑不通（疫情本来就存在，不是到 2009 年 4 月才成为现实）。\n\nB. phenomenon（现象）→ “come to global phenomenon” 搭配不当，且语义重复（疫情本身就是一种现象）。\n\nC. concept（概念）→ “come to global concept” 不合逻辑。\n\nD. notice（注意）→ 符合搭配与句意。\n\n因此正确答案是 D. notice。",
    materialId: "cloze"
  }),
  base(8, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 8 空",
    options: [{ key: "A", text: "over" }, { key: "B", text: "for" }, { key: "C", text: "among" }, { key: "D", text: "to" }],
    answer: ["C"],
    explain: "解析：\n\n第 8 题所在句子为：\n\nMexican authorities noted an unusually large number of hospitalizations and deaths ______ healthy adults.\n\n句意：墨西哥当局注意到，在健康的成年人中，住院和死亡人数异常之多。\n\n选项分析：\n\nA. over 表示“超过”或“在…之上”，一般用于时间、数量或位置，不用于表示“在某个群体中”。\n\nB. for 表示“为了”或“对于”，与语境不符。\n\nC. among 表示“在…之中”，用于表示在某一群体中发生的情况，符合“在健康的成年人群体中”这一含义。\n\nD. to 表示“向、对”，不用于表示“在…之中”。\n\n因此正确答案是 C. among，表示住院和死亡发生在“健康的成年人群体之中”，强调这一群体出现了异常情况。",
    materialId: "cloze"
  }),
  base(9, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 9 空",
    options: [{ key: "A", text: "stay up" }, { key: "B", text: "crop up" }, { key: "C", text: "fill up" }, { key: "D", text: "cover up" }],
    answer: ["B"],
    explain: "解析：\n\n第 9 题所在句子为：\n\nAs much of Mexico City shut down at the height of a panic, cases began to ______ in New York City, the southwestern United States and around the world.\n\n选项分析：\n\nA. stay up 意为“熬夜；保持高位”，不符合“病例出现”的语境。\n\nB. crop up 意为“突然出现、涌现”，常用来形容疾病、问题等在多个地方出现，符合语境。\n\nC. fill up 意为“填满”，主语一般是容器或空间，不用于“病例”的出现。\n\nD. cover up 意为“掩盖”，与文意相反。\n\n句意理解：\n在墨西哥城因恐慌而几乎停摆时，纽约、美国西南部以及世界各地开始出现猪流感病例。\n“crop up” 生动地表达了病例在不同地方突然出现的含义，因此 B 为正确选项。",
    materialId: "cloze"
  }),
  base(10, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 10 空",
    options: [{ key: "A", text: "as" }, { key: "B", text: "if" }, { key: "C", text: "unless" }, { key: "D", text: "until" }],
    answer: ["A"],
    explain: "解析：\n\n第 10 题所在句子为：\n\nIn the United States, new cases seemed to fade ______ warmer weather arrived.\n\n选项分析：\n\nA. as 表示“随着”，引导时间状语从句，强调两个动作同时发生。\n\nB. if 表示“如果”，引导条件状语从句。\n\nC. unless 表示“除非”，引导条件状语从句。\n\nD. until 表示“直到”，强调动作持续到某个时间点为止。\n\n语境理解：\n原文意思是“随着天气转暖，美国的新增病例似乎逐渐减少”，这里描述的是病例减少与天气变暖这两个情况同时发生，因此需要表示“随着”的连接词。\n\n因此正确答案是 A. as。",
    materialId: "cloze"
  }),
  base(11, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 11 空",
    options: [{ key: "A", text: "excessive" }, { key: "B", text: "enormous" }, { key: "C", text: "significant" }, { key: "D", text: "magnificent" }],
    answer: ["C"],
    explain: "解析：\n\n第 11 题空格所在的句子是：\n\nBut in late September 2009, officials reported there was 11 flu activity in almost every state&mldr;\n\n四个选项的意思分别是：\n\nA. excessive 过多的（常带贬义，指超过正常或合理的量）\n\nB. enormous 巨大的（常指体积、规模、数量大）\n\nC. significant 显著的、相当大的（可用于描述程度或重要性）\n\nD. magnificent 壮丽的、宏伟的（多用于赞美景色、成就等，不用于疾病活动）\n\n解题思路：\n\n上下文语境：前文说美国新病例似乎随着天气变暖而减少，但这里用“But”转折，说明 9 月底情况发生变化——流感活动在几乎每个州都很活跃。\n\n搭配习惯：描述“流感活动（flu activity）”的程度时，常用 significant 表示“显著的、相当数量的”，是公共卫生报告中的常用表达。\n\n排除其他选项：\nexcessive 带有“过度、过量”的负面评价含义，但这里只是客观描述流感活动增加，并没有强调“过度”的贬义。\n\nenormous 虽然可以表示数量大，但更强调“庞大、巨大”，不如 significant 贴合“显著、值得注意”的语境。\n\nmagnificent 明显不符合语义，不能修饰疾病活动。\n\n因此，C. significant 最符合上下文逻辑和搭配习惯，表示“显著的流感活动”。\n\n答案：C",
    materialId: "cloze"
  }),
  base(12, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 12 空",
    options: [{ key: "A", text: "categories" }, { key: "B", text: "examples" }, { key: "C", text: "patterns" }, { key: "D", text: "samples" }],
    answer: ["D"],
    explain: "解析：\n\n第 12 题所在句子为：\n\n&mldr; and that virtually all the 12 tested are the new swine flu, also known as A(H1N1), not seasonal flu.\n\n句意理解：\n这里说的是“几乎所有被检测的 ______ 都是新型猪流感（A(H1N1)），而不是季节性流感”。\n检测的对象应该是从病人身上采集的“样本”，比如鼻咽拭子、血液样本等，然后送到实验室检测病毒类型。\n\n选项分析：\n\nA. categories（类别）—— 不符合逻辑，检测的不是类别，而是具体样本。\n\nB. examples（例子）—— 一般不用在医学检测语境中表示被检测的实物。\n\nC. patterns（模式、图案）—— 可以指病毒的模式，但此处是“被检测的”东西，patterns 一般不是直接“检测”的宾语，而是分析得出的结果。\n\nD. samples（样本）—— 医学检测中常用词，指从患者身上采集的用于检测的标本，完全符合语境。\n\n因此正确答案是 D. samples。",
    materialId: "cloze"
  }),
  base(13, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 13 空",
    options: [{ key: "A", text: "imparted" }, { key: "B", text: "immersed" }, { key: "C", text: "injected" }, { key: "D", text: "infected" }],
    answer: ["D"],
    explain: "解析：\n\n第 13 题所在句子为：\n\nIn the U.S., it has ______ more than one million people, and caused more than 600 deaths and more than 6,000 hospitalizations.\n\n句意理解：\n这里说的是甲型 H1N1 流感在美国的影响，空格后接“超过 100 万人”，并且与“导致 600 多人死亡、6000 多人住院”并列。显然，空格处应表示“感染”的意思。\n\n选项分析：\n\nA. imparted：传授，告知（知识、信息等），不用于疾病感染。\n\nB. immersed：浸入，使沉浸于（液体或某种活动），不用于疾病感染。\n\nC. injected：注射（药物等），主语一般是人/医生，不是疾病本身。\n\nD. infected：使感染，传染（疾病），主语可以是疾病，宾语是人。\n\n语法与搭配：\n“it”指代 swine flu（猪流感），疾病可以 infect people（感染人），是常见搭配。\n\n因此，正确答案是 D. infected。",
    materialId: "cloze"
  }),
  base(14, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 14 空",
    options: [{ key: "A", text: "released" }, { key: "B", text: "relayed" }, { key: "C", text: "relieved" }, { key: "D", text: "remained" }],
    answer: ["A"],
    explain: "解析：\n\n第 14 题所在句子为：\n\nFederal health officials\n14\nTamiflu for children from the national stockpile and began\n15\norders from the states for the new swine flu vaccine.\n\n1. 句意理解\n这句话描述联邦卫生官员从国家储备中 发放 Tamiflu（抗流感药物）给儿童，并开始处理各州对新型猪流感疫苗的订单。\n\n2. 选项分析\n\nA. released：有“发布；发放；投放”的意思，尤其指从储备中发放物资或药物。\n\nB. relayed：转播，转达，传递（信息），不用于发放药物。\n\nC. relieved：减轻（痛苦等），或解除（职务），不符合语境。\n\nD. remained：保持，剩余，是不及物动词，不能直接接“Tamiflu”作宾语。\n\n3. 搭配与语境\n“release &mldr; from the national stockpile” 是常见搭配，意为“从国家储备中发放……”。\n因此，A. released 是唯一符合逻辑与搭配的选项。\n\n答案：A ✅",
    materialId: "cloze"
  }),
  base(15, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 15 空",
    options: [{ key: "A", text: "placing" }, { key: "B", text: "delivering" }, { key: "C", text: "taking" }, { key: "D", text: "giving" }],
    answer: ["C"],
    explain: "解析：\n\n第15题所在句子为：\n\nFederal health officials &mldr; began 15 orders from the states for the new swine flu vaccine.\n\n选项分析：\n\nA. placing：表示“下订单”，但主语是联邦卫生官员，他们是从各州接收订单，而不是向别人下订单。\n\nB. delivering：表示“递送”，但这里说的是 orders（订单），搭配不当，且逻辑上应是联邦官员接收订单，而不是递送订单。\n\nC. taking：take orders 意为“接受订单”，符合语境——各州向联邦政府申请疫苗，联邦官员开始接受这些订单。\n\nD. giving：give orders 意为“下命令”，不符合语境，因为联邦官员不是给各州下命令，而是处理各州的疫苗订单。\n\n因此，C. taking 是正确答案。",
    materialId: "cloze"
  }),
  base(16, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 16 空",
    options: [{ key: "A", text: "feasible" }, { key: "B", text: "available" }, { key: "C", text: "reliable" }, { key: "D", text: "applicable" }],
    answer: ["B"],
    explain: "解析：\n\n第 16 题空格所在句为：\n\nThe new vaccine, which is different from the annual flu vaccine, is ______ ahead of expectations.\n\n句意理解：\n这里说新的疫苗“比预期更早地______”，显然是指疫苗的供应或可用时间比预想的要早。\n\n选项分析：\n\nA. feasible（可行的）—— 一般用于计划、方案等是否可行，不用于表示“物品已可得到”。\n\nB. available（可获得的）—— 符合语境，表示疫苗比预期更早上市/可用。\n\nC. reliable（可靠的）—— 与时间提前无关。\n\nD. applicable（适用的）—— 强调适用性，不强调时间上的提前可用。\n\n逻辑线索：\n下一句提到 “More than three million doses were to be made available in early October 2009” 印证了 “available ahead of expectations” 的意思。\n\n因此正确答案是 B. available。",
    materialId: "cloze"
  }),
  base(17, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 17 空",
    options: [{ key: "A", text: "prevalent" }, { key: "B", text: "principal" }, { key: "C", text: "innovative" }, { key: "D", text: "initial" }],
    answer: ["D"],
    explain: "解析：\n\n上下文线索：\n前一句提到“More than three million doses were to be made available in early October 2009”，说明在十月初会有第一批疫苗可用。\n接着用“though”表示转折，意思是“虽然这些______剂型是鼻喷雾型……”，暗示这里说的是早期提供的疫苗。\n\n词义辨析：\n\nA. prevalent（流行的）→ 不修饰“doses”\n\nB. principal（主要的）→ 上下文未强调“主要剂型”\n\nC. innovative（创新的）→ 虽然鼻喷雾型是新型，但这里强调的是时间上的先后，不是创新性\n\nD. initial（最初的）→ 符合“早期可用”的语境，表示第一批提供的疫苗是鼻喷雾型\n\n逻辑对应：\n文章提到十月初能提供的疫苗是“initial doses”，后面再说明这些早期剂型的限制（不适合孕妇等），符合叙事顺序。\n\n因此正确答案是 D. initial。",
    materialId: "cloze"
  }),
  base(18, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 18 空",
    options: [{ key: "A", text: "presented" }, { key: "B", text: "restricted" }, { key: "C", text: "recommended" }, { key: "D", text: "introduced" }],
    answer: ["C"],
    explain: "解析：\n\n第 18 题所在句子为：\n\n&mldr; most of those initial doses were of the FluMist nasal spray type, which is not ______ for pregnant women, people over 50 or those with breathing difficulties, heart disease or several other problems.\n\n逻辑分析：\n\n这里说的是 FluMist 鼻喷式疫苗的适用人群限制。\n\n从后文可知，孕妇、50 岁以上的人、有呼吸系统疾病、心脏病等患者不能使用这种疫苗。\n\n在医学或药品说明中，“not recommended for&mldr;” 是固定表达，意为“不建议用于……人群”，即不推荐某类人群使用。\n\n其他选项：\nA. presented（呈现）—— 语义不符。\n\nB. restricted（被限制）—— 常用被动 be restricted to，但这里主语是疫苗，用 not restricted for 会变成“对……不限制”，与文意相反。\n\nD. introduced（引入）—— 语义不符。\n\n因此，C. recommended 是正确答案，构成 “is not recommended for” 表示“不推荐给……使用”。",
    materialId: "cloze"
  }),
  base(19, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 19 空",
    options: [{ key: "A", text: "problems" }, { key: "B", text: "issues" }, { key: "C", text: "agonies" }, { key: "D", text: "sufferings" }],
    answer: ["A"],
    explain: "解析：\n\n第 19 题所在句子为：\n\n&mldr; which is not recommended for pregnant women, people over 50 or those with breathing difficulties, heart disease or several other ______.\n\n1. 语境分析\n这里列举的是不适合使用该疫苗的人群，包括：\n\n孕妇\n\n50 岁以上的人\n\n有呼吸困难的人\n\n心脏病患者\n\n或其他几种 ______\n\n显然，空白处应填入表示“疾病、健康问题”的词。\n\n2. 选项辨析\n\nA. problems：可以指“健康问题”，搭配常见（如 health problems / medical problems）。\n\nB. issues：虽然也可指“问题”，但多用于抽象或争议性问题，较少直接用于医学上列举具体疾病。\n\nC. agonies：意为“极度痛苦”，强调疼痛感，不用于泛指疾病种类。\n\nD. sufferings：意为“苦难、痛苦经历”，也不用于指代具体的疾病类型。\n\n3. 搭配习惯\n在医学或公共卫生语境中，“other &mldr; problems” 常用来指代其他疾病或健康问题，例如：\n\nheart problems\n\nbreathing problems\n\nother medical problems\n\n因此，A. problems 是最自然且符合英语搭配习惯的选项。\n\n答案：A",
    materialId: "cloze"
  }),
  base(20, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 20 空",
    options: [{ key: "A", text: "involved in" }, { key: "B", text: "caring for" }, { key: "C", text: "concerned with" }, { key: "D", text: "warding off" }],
    answer: ["B"],
    explain: "解析：\n\n第 20 题空格所在句为：\n\nBut it was still possible to vaccinate people in other high-risk groups: health care workers, people ______ infants and healthy young people.\n\n句意分析：\n这里列举的是其他高风险群体：医护人员、______ 婴儿的人以及健康的年轻人。\n逻辑上，空格处修饰的是与“婴儿”相关的人，并且属于高风险群体。\n\n选项分析：\n\nA. involved in（涉及、卷入）—— 含义太宽泛，不特指“照顾婴儿”这一关系。\n\nB. caring for（照顾、照料）—— 常用来指“照顾婴儿、老人、病人”，符合“高风险群体”中与婴儿密切接触的人，例如父母、保育员等。\n\nC. concerned with（与……有关、关心）—— 多指事务相关或关注，不强调日常护理。\n\nD. warding off（避开、防止）—— 与句意相反，这里是指接触婴儿的人，而不是避开婴儿的人。\n\n最佳答案：\n在公共卫生语境下，“照顾婴儿的人”因与婴幼儿密切接触而可能传播或感染流感，因此属于优先接种疫苗的高风险群体，所以选 B. caring for。",
    materialId: "cloze"
  }),
  base(21, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "In the first paragraph, Damien Hirst's sale was referred to as \"a last victory\" because ____.",
    options: [{ key: "A", text: "the art market had witnessed a succession of victories" }, { key: "B", text: "the auctioneer finally got the two pieces at the highest bids" }, { key: "C", text: "Beautiful Inside My Head Forever won over all masterpieces" }, { key: "D", text: "it was successfully made just before the world financial crisis" }],
    answer: ["D"],
    explain: "解析：\n\n题目问：为什么第一段中达米恩·赫斯特的拍卖被称为“最后的胜利”？\n\n第一段内容回顾：\n\n2008年9月15日，达米恩·赫斯特的56件作品在伦敦苏富比拍卖，名为“美丽永驻我脑中”。\n\n除两件外全部售出，总价超过7000万英镑，创下个人艺术家拍卖纪录。\n\n文章称这是“最后的胜利”。\n\n紧接着提到：就在拍卖师喊价的同时，纽约华尔街最古老的银行之一雷曼兄弟申请破产。\n\n逻辑分析：\n\n“最后的胜利”意味着在这之后，形势急转直下。\n\n雷曼兄弟破产是2008年全球金融危机的标志性事件，发生在同一天。\n\n因此，这次拍卖的成功正好发生在金融危机爆发前夕，是艺术市场牛市结束前的最后一次辉煌。\n\n选项分析：\nA. 艺术市场见证了一系列胜利 → 文中未强调“一系列”，只强调这是“最后的”。\nB. 拍卖师最终停止了喊价 → 与事实不符，拍卖是成功的。\nC. 拍卖名称“美丽永驻我脑中”赢得了所有杰作 → 无关信息。\nD. 它在世界金融危机爆发前成功举行 → 与雷曼破产时间点吻合，正确。\n\n答案：D",
    materialId: "text1"
  }),
  base(22, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "By saying \"spending of any sort became deeply unfashionable\" (Line 1-2, Para. 3), the author suggests that ____.",
    options: [{ key: "A", text: "collectors were no longer actively involved in art-market auctions" }, { key: "B", text: "people stopped every kind of spending and stayed away from galleries" }, { key: "C", text: "art collection as a fashion had lost its appeal to a great extent" }, { key: "D", text: "works of art in general had gone out of fashion so they were not worth buying" }],
    answer: ["A"],
    explain: "我们先看题干引用的句子位置和上下文：\n\nIn the weeks and months that followed Mr. Hirst’s sale, spending of any sort became deeply unfashionable. In the art world that meant collectors stayed away from galleries and salerooms.\n\n这句话出现在第三段开头，用来总结 Hirst 拍卖之后那段时间的社会消费心态。\n\n第一句是比喻说法，意思是“任何形式的消费都变得很不合时宜”，说明经济环境恶化，人们不愿花钱。\n\n第二句具体到艺术市场：对艺术界来说，这意味着收藏家们远离画廊和拍卖行。\n\n选项分析：\n\nA. collectors were no longer actively involved in art-market auctions\n（收藏家不再积极参与艺术市场拍卖）\n→ 这与原文 “collectors stayed away from galleries and salerooms” 直接对应，是对 “spending of any sort became deeply unfashionable” 在艺术市场的具体说明，正确。\n\nB. people stopped every kind of spending and stayed away from galleries\n（人们停止一切消费，并且远离画廊）\n→ 前半句 “stopped every kind of spending” 是字面化理解，原文是“变得很不时尚”，不是完全停止一切消费，而且主语是 “people” 太宽泛，原文在艺术市场特指收藏家，所以不准确。\n\nC. art collection as a fashion had lost its appeal to a great extent\n（艺术收藏作为一种时尚在很大程度上失去了吸引力）\n→ 原文强调的是经济环境导致人们不愿花钱，而不是艺术收藏本身不时尚了，属于偷换概念。\n\nD. works of art in general had gone out of fashion so they were not worth buying\n（艺术品总体上已过时，因此不值得买）\n→ 原文没有说艺术品过时或不值得买，只是说人们暂时不买，所以错误。\n\n结论：\nA 正确，因为它准确对应了原文在艺术市场的具体表现：收藏家不再积极参与拍卖。",
    materialId: "text1"
  }),
  base(23, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Which of the following statements is NOT true?",
    options: [{ key: "A", text: "Sales of contemporary art fell dramatically from 2007 to 2008." }, { key: "B", text: "The art market surpassed many other industries in momentum." }, { key: "C", text: "The market generally went downward in various ways." }, { key: "D", text: "Some art dealers were awaiting better chances to come." }],
    answer: ["B"],
    explain: "我们逐项分析：\n\n题干要求：选 NOT true（不正确的陈述）。\n\nA 项：\n原文第三段提到 “Sales of contemporary art fell by two-thirds, and in the most overheated sector, they were down by nearly 90% in the year to November 2008.”\n2007 年是高峰，2008 年 9 月赫斯特拍卖后，当代艺术销量大幅下降，因此 A 正确。\n\nB 项：\n原文第二段说 “the market generates interest far beyond its size because it brings together great wealth, enormous egos, greed, passion and controversy in a way matched by few other industries.”\n这里说的是艺术市场引起的关注度（interest）远超其规模，而不是说它在 momentum（势头/增长动力） 上超过其他行业。\n事实上，第二段开头说 “The world art market had already been losing momentum for a while&mldr;”，说明它的势头在减弱，而不是超过其他行业。\n所以 B 与原文不符。\n\nC 项：\n原文第三、四段表明艺术市场在各方面下行（销量下降、拍卖行支付保证金、价格下跌等），所以 C 正确。\n\nD 项：\n原文最后一句 “But anyone who does not have to sell is keeping away, waiting for confidence to return.”\n说明一些交易商在等待更好时机，所以 D 正确。\n\n因此 B 是 NOT true 的选项。\n\n答案：B",
    materialId: "text1"
  }),
  base(24, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The three Ds mentioned in the last paragraph are ____.",
    options: [{ key: "A", text: "auction houses' favorites" }, { key: "B", text: "contemporary trends" }, { key: "C", text: "factors promoting artwork circulation" }, { key: "D", text: "styles representing Impressionists" }],
    answer: ["C"],
    explain: "解析：\n\n定位原文\n题干问的是“最后一段提到的三个 D 是什么”，因此我们看最后一段的内容：\n\nThe three Ds - death, debt and divorce - still deliver works of art to the market.\n\n理解句子意思\n这句话的意思是：三个 D（死亡、债务、离婚）仍然会把艺术品输送到市场。\n也就是说，这三个 D 是促使艺术品进入市场流通的原因。\n\n选项分析\n\nA. auction houses’ favorites（拍卖行的最爱）—— 原文未说拍卖行最喜欢这三个 D，只是说它们是艺术品来源的原因。\n\nB. contemporary trends（当代趋势）—— 这三个 D 是长期存在的因素，不是当代艺术界的趋势。\n\nC. factors promoting artwork circulation（促进艺术品流通的因素）—— 与原文“deliver works of art to the market”意思一致，即它们促使艺术品进入市场流通。\n\nD. styles representing Impressionists（代表印象派的风格）—— 三个 D 与印象派无关。\n\n结论\n三个 D 是迫使人们出售艺术品的原因，因此它们是促进艺术品在市场流通的因素，正确答案是 C。",
    materialId: "text1"
  }),
  base(25, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The most appropriate title for this text could be ____.",
    options: [{ key: "A", text: "Fluctuation of Art Prices" }, { key: "B", text: "Up-to-date Art Auctions" }, { key: "C", text: "Art Market in Decline" }, { key: "D", text: "Shifted Interest in Arts" }],
    answer: ["C"],
    explain: "解析：\n\n文章主旨分析\n文章开篇即指出“The longest bull run in a century of art-market history ended&mldr;”，说明艺术市场长期繁荣结束，进入下行阶段。\n接着描述了 2008 年 9 月雷曼兄弟破产等事件，以及艺术市场交易额大幅下降、拍卖行支付保证金等事实，都在强调艺术市场正在衰退。\n\n各段内容归纳\n\n第一段：赫斯特作品拍卖是“最后的胜利”，紧接着金融危机爆发。\n\n第二段：艺术市场在 2007 年达到顶峰后开始下滑。\n\n第三段：拍卖销售额大幅下降，收藏家远离市场。\n\n第四段：当前衰退是自 1989 年以来最严重的，价格比峰值下降约 40%。\n\n第五段：虽然仍有买家，但市场信心不足，卖家惜售。\n\n全文核心是 艺术市场的衰退状况，而不是单纯的价格波动（A）、最新拍卖（B）或兴趣转移（D）。\n\n选项对比\n\nA. Fluctuation of Art Prices：价格波动只是衰退的一个表现，不是全文核心。\n\nB. Up-to-date Art Auctions：最新拍卖只是引子，不是主题。\n\nC. Art Market in Decline：准确概括了全文讨论的艺术市场下行趋势。\n\nD. Shifted Interest in Arts：文中未强调兴趣转移，而是需求存在但信心不足。\n\n因此，最合适的标题是 C. Art Market in Decline（艺术市场在衰退）。",
    materialId: "text1"
  }),
  base(26, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "What is most wives' main expectation of their husbands?",
    options: [{ key: "A", text: "Talking to them." }, { key: "B", text: "Trusting them." }, { key: "C", text: "Supporting their careers." }, { key: "D", text: "Sharing housework." }],
    answer: ["A"],
    explain: "解析：\n\n题干定位\n题目问的是“大多数妻子对丈夫的主要期望是什么”，这对应原文第四段末尾的表述：\n\nmost wives want their husbands to be, first and foremost, conversational partners\n\n同义转换\n“conversational partners” 意思是“谈话的伴侣”，也就是希望丈夫能和她们交谈。\n选项 A. Talking to them 与此完全一致。\n\n排除干扰项\n\nB. Trusting them（信任她们）：文中未提及信任问题。\n\nC. Supporting their careers（支持她们的事业）：文中提到有些女性放弃事业随丈夫搬迁，但这不是大多数妻子抱怨的核心，核心是沟通。\n\nD. Sharing housework（分担家务）：文中提到女性做更多家务，但她们最不满的不是这种有形的不平等，而是缺乏沟通。\n\n上下文印证\n文章开头举例说明丈夫在家不说话，第三段提到缺乏沟通是离婚的主要原因之一，最后一段用漫画场景再次强调女性希望与丈夫交谈却被报纸阻隔，都指向 交谈 是核心期望。\n\n因此正确答案是 A。",
    materialId: "text2"
  }),
  base(27, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Judging from the context, the phrase \"wreaking havoc\" (Line 3, Para. 2) most probably means ____.",
    options: [{ key: "A", text: "generating motivation." }, { key: "B", text: "exerting influence" }, { key: "C", text: "causing damage" }, { key: "D", text: "creating pressure" }],
    answer: ["C"],
    explain: "解析：\n\n定位原文语境\n原文第二段最后一句：\n\nThis pattern is wreaking havoc with marriage.\n其中 “this pattern” 指前文提到的现象——男性在公共场合比女性健谈，但在家里却说话很少。\n\n上下文逻辑推断\n\n第三段提到，社会学家在离婚研究中发现，许多女性将“缺乏沟通”作为离婚的理由。\n\n作者指出，美国离婚率接近 50%，这种沟通问题相当于每年数百万起婚姻失败，可称之为“交谈失败的流行病”。\n\n因此，“wreaking havoc with marriage” 应表示这种模式对婚姻造成了严重的负面影响，甚至导致破裂。\n\n短语含义分析\n\n“wreak havoc” 是英语固定搭配，意为“造成严重破坏、带来灾难”。\n\n选项分析：\nA. generating motivation（产生动力）→ 与上下文负面后果不符。\n\nB. exerting influence（施加影响）→ 语气中性，不能体现破坏性。\n\nC. causing damage（造成损害） → 与“离婚率上升、婚姻破裂”语境一致。\n\nD. creating pressure（制造压力）→ 虽有一定关联，但不如“damage”贴近“havoc”的破坏程度及后果。\n\n结论\n结合上下文关于离婚原因的论述，以及“wreak havoc”本身的词义，应选择 C. causing damage。\n\n答案：C",
    materialId: "text2"
  }),
  base(28, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "All of the following are true EXCEPT ____.",
    options: [{ key: "A", text: "men tend to talk more in public than women" }, { key: "B", text: "nearly 50 percent of recent divorces are caused by failed conversation" }, { key: "C", text: "women attach much importance to communication between couples" }, { key: "D", text: "a female tends to be more talkative at home than her spouse" }],
    answer: ["B"],
    explain: "让我们逐一分析选项，并与原文内容进行比对。\n\nA. men tend to talk more in public than women\n原文第二段第一句：\n\nThis episode crystallizes the irony that although American men tend to talk more than women in public situations, they often talk less at home.\n明确提到男性在公共场合比女性说话更多，因此 A 正确。\n\nB. nearly 50 percent of recent divorces are caused by failed conversation\n原文第三段：\n\nGiven the current divorce rate of nearly 50 percent, that amounts to millions of cases in the United States every year — a virtual epidemic of failed conversation.\n这里的意思是：目前离婚率接近 50%，而大多数女性受访者把缺乏沟通作为离婚的原因，所以每年有数百万的离婚案例可归因于沟通失败。\n但要注意，原文并没有说“近 50% 的离婚是由沟通失败造成的”，而是说离婚率接近 50%，其中许多离婚是因为沟通问题。\nB 选项把“离婚率 50%”偷换成了“50% 的离婚由沟通失败造成”，因此 B 错误。\n\nC. women attach much importance to communication between couples\n原文第四段提到，女性对丈夫的抱怨往往集中在沟通上，而不是具体的不平等家务分工等，并且大多数妻子希望丈夫首先是交谈伙伴。\n因此 C 正确。\n\nD. a female tends to be more talkative at home than her spouse\n文章开头例子中，那位丈夫说妻子是家里爱说话的人，研究也指出男性在家说话比妻子少，因此 D 正确。\n\n所以，不符合原文的选项是 B。",
    materialId: "text2"
  }),
  base(29, 'k-en-010', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Which of the following can best summarize the main idea of this text?",
    options: [{ key: "A", text: "The moral decaying deserves more research by sociologists." }, { key: "B", text: "Marriage break-up stems from sex inequalities." }, { key: "C", text: "Husband and wife have different expectations from their marriage." }, { key: "D", text: "Conversational patterns between man and wife are different." }],
    answer: ["D"],
    explain: "好的，我们一步步分析。\n\n1. 文章主要内容回顾\n\n开头用作者亲身经历的一个场景引出：在公共场合健谈的男人，在家里可能很少与妻子交谈。\n\n接着指出这种现象对婚姻有破坏作用。\n\n引用社会学家研究：许多女性提出离婚的原因是缺乏沟通，而男性很少这样认为。\n\n作者自己的研究也发现，女性对丈夫的主要抱怨不是具体的不平等，而是“他不听我说话”“他不和我说话”。\n\n大多数妻子希望丈夫是谈话伙伴，但丈夫大多没有这种期望。\n\n结尾用经典漫画场景概括：丈夫看报纸不理睬，妻子想谈话。\n\n2. 选项分析\n\nA. The moral decaying deserves more research by sociologists.\n文中没有讨论“道德败坏”，也没有呼吁社会学家多做研究，只是陈述现象和已有研究。\n\nB. Marriage break-up stems from sex inequalities.\n文中明确说，女性抱怨的重点不是 tangible inequities（有形的不平等，如做更多家务、放弃事业等），而是沟通问题，所以“性别不平等”不是本文核心原因。\n\nC. Husband and wife have different expectations of their marriage.\n这一点在文中确实提到（妻子想要谈话伙伴，丈夫不这么想），但这只是现象的一部分，用来解释“沟通模式不同”带来的后果。文章主旨更侧重描述沟通模式差异及其对婚姻的影响，而不是仅仅说“期望不同”。\n\nD. Conversational patterns between man and wife are different.\n全文从头到尾都在讲男女在公开场合与在家里的谈话模式差异，以及这种差异对婚姻的破坏。这是贯穿全文的核心。\n\n3. 结论\n\n最能概括全文主旨的是 D，因为它直接抓住了“谈话模式差异”这一中心，而其他选项要么偏离重点，要么只是细节。\n\n最终答案：D",
    materialId: "text2"
  }),
  base(30, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "In the following part immediately after this text, the author will most probably focus on ____.",
    options: [{ key: "A", text: "a vivid account of the new book Divorce Talk" }, { key: "B", text: "a detailed description of the stereotypical cartoon" }, { key: "C", text: "other possible reasons for a high divorce rate in the U.S." }, { key: "D", text: "a brief introduction to the political scientist Andrew Hacker" }],
    answer: ["B"],
    explain: "让我们一步步推理。\n\n1. 文章结构回顾\n\n开头：作者在一次聚会中遇到一对夫妻，丈夫在公共场合健谈，但在家沉默，妻子是家里维持对话的人。\n\n接着：指出这种现象很普遍，并点明这是婚姻危机的一个原因。\n\n引用研究：政治学家 Hacker 和社会学家 Riessman 的研究，说明缺乏沟通是女性提出离婚的主要原因。\n\n作者自己的研究也发现，妻子最需要丈夫成为交谈伙伴，但丈夫很少这样期望妻子。\n\n最后一段总结：最能代表当前危机的形象（image）是那幅刻板印象的漫画——男人早餐时举着报纸遮住脸，女人盯着报纸背面想说话。\n\n2. 题干要求\n\n在这篇文章之后，作者接下来最可能讨论什么？\n\n文章结尾最后一句话是：\n\nIn short, the image that best represents the current crisis is the stereotypical cartoon scene of a man sitting at the breakfast table with a newspaper held up in front of his face, while a woman glares at the back of it, wanting to talk.\n\n这是一个高度概括的比喻/形象（stereotypical cartoon），用来总结前文论述的“丈夫在家不愿交谈”的问题。\n\n3. 逻辑推断\n\n通常，当作者在结尾提出一个生动的形象（image）或比喻时，如果下文要继续，很可能会对这个形象进行展开描述或分析，从而更具体地说明问题。\n本文已经用研究数据和案例阐述了现象与原因，结尾用漫画场景作为概括，接下来自然可以详细描绘这个漫画，并分析它如何体现沟通失败，从而引出更深讨论或解决方案。\n\n4. 选项分析\n\nA. a vivid account of the new book Divorce Talk\n书中内容在前文已经引用过（lack of communication 导致离婚），不太可能在下文再详细描述整本书。\n\nB. a detailed description of the stereotypical cartoon\n结尾刚提到这个漫画形象，接下来展开描述它，非常自然。\n\nC. other possible reasons for high divorce rate in the U.S.\n本文聚焦的是沟通问题，且已经把它作为主要原因，突然转向“其他原因”会偏离主线。\n\nD. a brief introduction to the political scientist Andrew Hacker\nHacker 只是前文引用过的研究者之一，没必要在结尾之后专门介绍他。\n\n5. 结论\n\n最符合行文逻辑的是 B，即对结尾提到的典型漫画场景进行详细描述，从而继续强调沟通问题对婚姻的影响。\n\n最终答案：B",
    materialId: "text2"
  }),
  base(31, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "According to Dr. Curtis, habits like hand washing with soap ____.",
    options: [{ key: "A", text: "should be further cultivated" }, { key: "B", text: "should be changed gradually" }, { key: "C", text: "are deeply rooted in history" }, { key: "D", text: "are basically private concerns" }],
    answer: ["A"],
    explain: "让我们先定位原文中 Dr. Curtis 的观点。\n\n原文第二段：\n\n“There are fundamental public health problems, like dirty hands instead of a soap habit, that remain killers only because we can’t figure out how to change people’s habits,” said Dr. Curtis … “We wanted to learn from private industry how to create new behaviors that happen automatically.”\n\n这句话的意思是：\n\n用肥皂洗手这样的习惯还没有普及，导致一些公共卫生问题依然致命。\n\n他们想向企业学习如何让人们自动形成新行为（比如用肥皂洗手）。\n\n由此可知，Dr. Curtis 认为用肥皂洗手这样的习惯 应该被培养形成，但目前还没找到有效方法，所以需要向企业学习如何“创造新行为”。\n\n选项分析：\n\nA. should be further cultivated（应该进一步培养）—— 与原文逻辑一致，他们想建立这种习惯。\n\nB. should be changed gradually（应该逐渐改变）—— 原文不是“改变旧习惯”，而是“建立新习惯”。\n\nC. are deeply rooted in history（在历史上根深蒂固）—— 原文未提及，且肥皂洗手习惯并不普遍，所以不是“根深蒂固”。\n\nD. are basically private concerns（基本上是私人问题）—— 原文强调这是公共卫生问题，不是私人问题。\n\n因此正确答案是 A。",
    materialId: "text3"
  }),
  base(32, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Bottled water, chewing gum and skin moisturizers are mentioned in Paragraph 5 so as to ____.",
    options: [{ key: "A", text: "reveal their impact on people's habits" }, { key: "B", text: "show the urgent need of daily necessities" }, { key: "C", text: "indicate their effect on people's buying power" }, { key: "D", text: "manifest the significant role of good habits" }],
    answer: ["A"],
    explain: "好的，我们先来看题目。\n\n题干问：\n\nBottled water, chewing gum and skin moisturizers are mentioned in Paragraph 5 so as to ______\n（第 5 段提到瓶装水、口香糖和润肤露是为了______）\n\n第 5 段原文内容回顾（根据你提供的文本整理）：\n\nA few decades ago, many people didn’t drink water outside of a meal. Then beverage companies started bottling the production of far-off springs, and now office workers unthinkingly sip bottled water all day long. Chewing gum, once bought primarily by adolescent boys, is now featured in commercials as a breath freshener and teeth cleanser for use after a meal. Skin moisturizers are advertised as part of morning beauty rituals, slipped in between hair brushing and putting on makeup.\n\n段落主旨分析：\n\n瓶装水：以前人们不会在非用餐时间喝水，现在办公室人员整天不假思索地喝瓶装水。\n\n口香糖：以前主要是青少年男孩买，现在广告把它定位为饭后口气清新、清洁牙齿的产品。\n\n润肤露：被广告宣传为早晨美容程序的一部分，穿插在梳头和化妆之间。\n\n这三个例子都在说明：通过广告策略，这些产品被嵌入到人们的日常习惯中，改变了人们原有的行为模式。\n\n选项分析：\nA. reveal their impact on people’s habits （揭示它们对人们习惯的影响）\n—— 符合，三个例子都在展示这些产品如何改变了人们的日常行为，形成了新习惯。\n\nB. show the urgent need of daily necessities （显示日用必需品的迫切需求）\n—— 原文没有强调“迫切需求”，而是强调习惯的改变。\n\nC. indicate their effect on people’s buying power （表明它们对人们购买力的影响）\n—— 没有涉及购买力的变化。\n\nD. manifest the significant role of good habits （显示好习惯的重要作用）\n—— 原文没有强调这些习惯是“好”是“坏”，只是说明广告商利用习惯来销售产品。\n\n因此正确答案是 A，因为这些例子在第 5 段的作用是说明它们如何影响了人们的日常习惯。",
    materialId: "text3"
  }),
  base(33, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Which of the following does NOT belong to products that help create people's habits?",
    options: [{ key: "A", text: "Tide" }, { key: "B", text: "Crest" }, { key: "C", text: "Colgate" }, { key: "D", text: "Unilever" }],
    answer: ["D"],
    explain: "我们先分析题目。\n\n题目问的是：下列哪一项不属于帮助塑造人们习惯的产品？\n\n原文信息回顾\n\n文章提到 Dr. Curtis 求助的公司有 Procter & Gamble, Colgate-Palmolive and Unilever，这些公司投入巨资研究消费者习惯。\n\n后面举例产品时提到：\n牙膏品牌 Colgate, Crest（属于 P&G 或竞争品牌）\n\nTide（汰渍，P&G 旗下洗衣粉）在消费者心理学家 Carol Berning（来自 P&G）的叙述中提到。\n\nUnilever（联合利华）在文中是作为被求助的公司之一出现，但问题问的是“产品”，Unilever 是公司名称，不是具体产品品牌。\n\n选项分析\nA. Tide → 产品（洗衣粉）\nB. Crest → 产品（牙膏）\nC. Colgate → 产品（牙膏）\nD. Unilever → 公司名称，不是具体产品\n\n因此 D 不属于帮助塑造人们习惯的“产品”，而是公司。\n\n答案：D",
    materialId: "text3"
  }),
  base(34, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "From the text we know that some of consumers' habits are developed due to ____.",
    options: [{ key: "A", text: "perfected art of products" }, { key: "B", text: "automatic behavior creation" }, { key: "C", text: "commercial promotions" }, { key: "D", text: "scientific experiments" }],
    answer: ["C"],
    explain: "解析：\n\n题干关键：题目问的是“消费者的一些习惯形成是由于什么原因”。\n原文中多次强调，这些习惯是公司通过精心设计的广告和营销活动培养出来的。\n\n原文依据：\n\n第一段提到“many companies had perfected the art of creating automatic behaviors - habits - among consumers”，并指出这些习惯是“in response to a carefully designed set of daily cues”。\n\n第四段举例说明“because of shrewd advertising and public health campaigns, many Americans habitually&mldr;”。\n\n第五段继续举例，饮料公司推广瓶装水、口香糖广告定位为饭后清新剂、护肤品被植入早晨美容流程等，都是商业推广的结果。\n\n第六段引用宝洁公司消费心理学家的话，强调“Creating positive habits&mldr; essential to making new products commercially viable”。\n\n最后一段明确说“tying certain behaviors to habitual cues through ruthless advertising”。\n\n选项分析：\n\nA. perfected art of products：原文说的是“perfected the art of creating habits”，不是产品本身的艺术。\n\nB. automatic behavior creation：这是习惯的表现，而不是原因。\n\nC. commercial promotions：与原文中广告、营销活动、商业推广等内容完全对应。\n\nD. scientific experiments：虽然最后一段提到实验，但这是企业研究习惯形成的方法，不是消费者习惯形成的主要原因。\n\n因此，正确选项是 C。",
    materialId: "text3"
  }),
  base(35, 'k-en-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The author's attitude toward the influence of advertisement on people's habits is ____.",
    options: [{ key: "A", text: "indifferent" }, { key: "B", text: "negative" }, { key: "C", text: "positive" }, { key: "D", text: "biased" }],
    answer: ["B"],
    explain: "好的，我们先来梳理文章内容，然后分析作者对广告影响习惯的态度。\n\n文章主旨与脉络\n\n开头指出很多公司已经善于在消费者中制造“自动行为”（习惯），这些习惯为公司带来巨额利润。\n\nCurtis 博士指出，公共健康领域应该向私营企业学习如何塑造人们的自动行为。\n\n举例说明企业如何通过广告等策略让刷牙、喝瓶装水、嚼口香糖、用润肤霜等成为人们的日常习惯。\n\n引用宝洁消费心理学家的话，说明产品成功在于成为日常模式，创造习惯对商业成功很重要。\n\n最后一段提到，这种将行为与习惯线索绑定的策略有“力量”，但也引发争议，比如被用来推销有问题的美容霜或不健康食品。\n\n关键态度线索\n\n作者在描述公司做法时，用了“shrewd advertising”（精明的广告）、“ruthless advertising”（无情的广告）这类略带贬义的词汇。\n\n最后一句明确点出争议（controversies have erupted），尤其当这些策略用于推销 questionable（有问题的）或不健康的产品时。\n\n全文虽然客观陈述了企业利用习惯带来的商业成功，但结尾的批判语气更明显，暗示作者对这种广告影响习惯的做法持 负面看法，因为可能被滥用，损害消费者利益。\n\n选项分析\n\nA. indifferent（漠不关心）—— 明显不对，作者关注并讨论了其负面影响。\n\nB. negative（负面）—— 符合结尾的争议提示与用词倾向。\n\nC. positive（积极）—— 文中虽有肯定企业成功的部分，但整体倾向不是赞扬广告的影响。\n\nD. biased（有偏见）—— 作者是基于事实与争议来评论，并非无根据的偏见，且这不是态度倾向的正确概括。\n\n答案：B",
    materialId: "text3"
  }),
  base(36, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "From the principles of the U.S. jury system, we learn that ____.",
    options: [{ key: "A", text: "both literate and illiterate people can serve on juries" }, { key: "B", text: "defendants are immune from trial by their peers" }, { key: "C", text: "no age limit should be imposed for jury service" }, { key: "D", text: "judgment should consider the opinion of the public" }],
    answer: ["D"],
    explain: "我们先分析题干：\n题干问“从美国陪审团制度的原则中，我们了解到什么”，所以我们要回到原文第一段提到的原则部分。\n\n第一段原文关键句（根据你提供的文本整理后）：\n\nall who meet minimal qualifications of age and literacy are equally competent to serve on juries\n\njurors should be selected randomly from a representative cross section of the community\n\nno one should be denied the right to serve on account of race, religion, sex, or national origin\n\ndefendants are entitled to trial by their peers\n\nverdicts should represent the conscience of the community and not just the letter of the law\n\n选项分析：\n\nA. both literate and illiterate people can serve on juries\n→ 错，因为原文说的是 minimal qualifications of age and literacy，所以有 literacy 要求，并不是文盲也可以。\n\nB. defendants are immune from trial by their peers\n→ 错，immune 是“免于”，但原文说 defendants are entitled to trial by their peers（有权接受同辈审判），意思相反。\n\nC. no age limit should be imposed for jury service\n→ 错，原文提到 minimal qualifications of age and literacy，所以有最低年龄要求。\n\nD. judgment should consider the opinion of the public\n→ 对，因为原文说 verdicts should represent the conscience of the community，即判决应反映社会良知，也就是要考虑公众意见。\n\n答案：D",
    materialId: "text4"
  }),
  base(37, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The practice of selecting so-called elite jurors prior to 1968 showed ____.",
    options: [{ key: "A", text: "the inadequacy of antidiscrimination laws" }, { key: "B", text: "the prevalent discrimination against certain races" }, { key: "C", text: "the conflicting ideals in jury selection procedures" }, { key: "D", text: "the arrogance common among the Supreme Court judges" }],
    answer: ["A"],
    explain: "好的，我们先回顾一下原文的关键信息，然后分析选项。\n\n原文关键信息\n\n第一段：描述美国陪审团制度的民主理想，包括随机从社区代表中选人、不因种族、性别等歧视。\n\n第二段：But as recently as in 1968, jury selection procedures conflicted with these democratic ideals.\n举例：某些州陪审团职责仅限于高智商、高教育、高道德品质的人。\n虽然最高法院在 1880 年 Strauder v. West Virginia 案中禁止了故意的种族歧视，但选所谓的“精英或蓝带陪审团”的做法，提供了一条绕过这条及其他反歧视法的方便途径（convenient way around this and other antidiscrimination laws）。\n\n题干\n1968 年之前挑选所谓的“精英陪审员”的做法表明了什么？\n\n选项分析\n\nA. the inadequacy of antidiscrimination laws\n原文明确说这种 elite jury 是绕过反歧视法的“方便途径”，说明当时的反歧视法存在漏洞，不够完善，不能有效阻止这种变相歧视。\n\nB. the prevalent discrimination against certain races\n这种做法确实可能导致种族歧视，但原文强调的是它用来绕过禁止种族歧视的法律，所以重点在于法律本身有漏洞，而不是强调种族歧视普遍存在（虽然可能存在，但此处不是直接表明的内容）。\n\nC. the conflicting ideals in jury selection procedures\n第二段第一句确实说了程序与理想冲突，但题干问的是“选精英陪审员”这一做法表明了什么，而这一做法的具体说明是用来绕过法律，所以更直接的是表明法律不完善，而不是仅仅说存在冲突（冲突是事实，但这一做法表明的是法律有缺陷）。\n\nD. the arrogance common among the Supreme Court judges\n文中没有提到最高法院法官的傲慢。\n\n逻辑推导\n原文说：\n\nthe practice of selecting so-called elite or blue-ribbon juries provided a convenient way around this and other antidiscrimination laws.\n\n“绕过反歧视法” → 反歧视法管不住这种行为 → 反歧视法有不足（inadequacy）。\n\n因此正确选项是 A。",
    materialId: "text4"
  }),
  base(38, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Even in the 1960s, women were seldom on the jury list in some states because ____.",
    options: [{ key: "A", text: "they were automatically banned by state laws" }, { key: "B", text: "they fell far short of the required qualifications" }, { key: "C", text: "they were supposed to perform domestic duties" }, { key: "D", text: "they tended to evade public engagement" }],
    answer: ["C"],
    explain: "我们先分析题干：\n题目问“即使在 1960 年代，一些州的陪审团名单中仍然很少出现女性，原因是什么”。\n\n原文关键信息定位\n文中提到：\n\nAlthough women first served on state juries in Utah in 1898, it was not until the 1940s that a majority of states made women eligible for jury duty. Even then several states automatically exempted women from jury duty unless they personally asked to have their names included on the jury list.\nThis practice was justified by the claim that women were needed at home, and it kept juries unrepresentative of women through the 1960s.\n\n逻辑分析\n\n原文说“several states automatically exempted women&mldr; unless they personally asked to be included” —— 说明女性默认被排除，除非主动要求。\n\n理由（justification）是 “women were needed at home” —— 即女性应该在家履行家庭职责。\n\n这种状况一直持续到 1960 年代，导致陪审团中女性很少。\n\n选项比对\n\nA：they were automatically banned by state laws\n原文是“自动免除（exempted）”而非“法律明令禁止（banned）”，且理由是家庭角色，不是全面禁止，所以 A 不准确。\n\nB：they fell far short of the required qualifications\n文中没有说女性不符合资格条件，而是说法律自动免除她们，所以 B 错。\n\nC：they were supposed to perform domestic duties\n对应 “women were needed at home”，正是原因。\n\nD：they tended to evade public engagement\n文中没有说女性自己逃避，而是制度安排，所以 D 错。\n\n答案：C",
    materialId: "text4"
  }),
  base(39, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "After the Jury Selection and Service Act was passed, ____.",
    options: [{ key: "A", text: "sex discrimination in jury selection was unconstitutional and had to be abolished" }, { key: "B", text: "educational requirements became less rigid in the selection of federal jurors" }, { key: "C", text: "jurors at the state level ought to be representative of the entire community" }, { key: "D", text: "states ought to conform to the federal court in reforming the jury system" }],
    answer: ["B"],
    explain: "我们先来分析一下题目。\n\n题目问的是 《陪审团遴选与服务法案》（Jury Selection and Service Act）通过之后 的情况。\n\n原文关键信息（根据原文内容整理）：\n\n1968 年以前，一些州对陪审员有智力、教育、道德方面的过高要求，即所谓的“精英陪审团”（blue-ribbon juries）。\n\n1975 年 Taylor v. Louisiana 案中，最高法院确认陪审团必须从社区的“代表性横截面”中挑选。\n\n但在这之前，1968 年通过的《陪审团遴选与服务法案》 已经引领了改革，尤其是在联邦层面。\n\n该法案 废除了对联邦陪审员的一些特殊教育要求，并要求从“社区代表性横截面”随机挑选。\n\n选项分析：\n\nA：性别歧视在陪审团遴选中违宪并必须废除 —— 性别歧视被判定违宪是在 1975 年 Taylor 案，不是 1968 年法案直接导致的，所以 A 错。\n\nB：教育要求在联邦陪审员遴选中变得不那么严格 —— 这与原文“该法案废除了联邦陪审员特殊教育要求”一致，所以 B 对。\n\nC：州一级的陪审员必须代表整个社区 —— 这是 1975 年 Taylor 案确立的，不是 1968 年法案的直接结果（该法案主要针对联邦法院）。\n\nD：各州在改革陪审团制度时应当遵从联邦法院 —— 原文未明确说该法案要求各州必须遵从联邦法院，而是说该法案在联邦层面改革，后来最高法院才在州层面确立原则。\n\n因此正确答案是 B，因为 1968 年法案确实降低了联邦陪审员的教育要求。",
    materialId: "text4"
  }),
  base(40, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "In discussing the U.S. jury system, the text centers on ____.",
    options: [{ key: "A", text: "its nature and problems" }, { key: "B", text: "its characteristics and tradition" }, { key: "C", text: "its problems and their solutions" }, { key: "D", text: "its tradition and development" }],
    answer: ["D"],
    explain: "让我们一步步分析。\n\n1. 文章结构回顾\n\n第一段：描述美国陪审团制度的理想原则（民主价值观、平等、随机挑选、代表社区良知等），并称其为直接民主的典范。\n\n第二段：指出在 1968 年及以前，陪审团挑选程序与这些民主理想冲突，举例说明某些州限制陪审员为高智商、高教育、高道德的人，并提到虽然 1880 年最高法院禁止种族歧视，但“精英陪审团”的做法绕开了反歧视法。\n\n第三段：指出制度直到 20 世纪中期才常规纳入女性，一些州自动豁免女性，直到 1960 年代才通过最高法院案例废除这类做法。\n\n第四段：1968 年国会通过《陪审团遴选与服务法案》，将美国陪审团制度推向更民主、更具代表性的新阶段。\n\n2. 核心内容归纳\n\n文章先讲陪审团制度的理念与理想（体现民主传统），\n\n然后讲历史上（直到 20 世纪中期）存在的问题（种族、性别、教育等歧视），\n\n最后讲通过立法和判例逐步改革与发展，走向更具代表性的制度。\n\n因此，全文是围绕 “美国陪审团制度的传统与发展” 展开的。\n\n3. 选项分析\n\nA. its nature and problems\n涉及了本质（第一段）和问题（第二、三段），但未突出“发展”这一重要后半部分内容，不全面。\n\nB. its characteristics and tradition\n只讲了特征与传统，没讲问题与改革，不全面。\n\nC. its problems and their solutions\n忽略了第一段对传统理念的阐述，侧重问题与解决，但原文开头重点在理想原则（传统），所以不准确。\n\nD. its tradition and development\n“tradition”对应第一段的民主理念与传统，“development”对应后文历史问题及 1968 年法案的改革，概括最全面。\n\n4. 结论\n\n正确答案是 D，因为它完整覆盖了文章从传统理念到历史实践缺陷再到立法改进的发展脉络。",
    materialId: "text4"
  }),
  base(41, 'k-en-013', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "2010 Part B 新题型：根据材料完成 41–45 题。",
    referenceAnswer: "41. Findings of the Stanford University researchers will promote the sales of new Boeing and Airbus aircraft.\n\n[答案] F\n\n[精解]\n根据题干中的关键词“Stanford University researchers”和“Boeing and Airbus aircraft”定位至第一段。该段第三句明确指出，研究人员提出的方法“would not require them to buy new aircraft”，即不需要航空公司购买新飞机。因此，研究结果并不会促进波音和空客新机型的销售，题干表述与原文相反。\n\n42. The upwash experience may save propelling energy as well as reducing resistance.\n\n[答案] T\n\n[精解]\n根据题干关键词“upwash experience”“save propelling energy”和“reducing resistance”定位至第二段第四句。原文说明，鸟类在“upwash”中飞行时，“experience reduced drag, and spend less energy propelling themselves”，即阻力减小，同时推进自身所需的能量也减少。题干中的“save propelling energy”和“reducing resistance”准确概括了原文内容，因此表述正确。\n\n43. Formation flight is more comfortable because passengers can not see the other planes.\n\n[答案] F\n\n[精解]\n根据题干关键词“Formation flight”“comfortable”“passengers”定位至第四段。原文提到，飞机在编队飞行时可以保持数海里距离，乘客甚至可能看不到其他飞机，从而不会感到不适。但这只是为了说明编队飞行“不会降低舒适度”，并未说它“更舒适”。题干将“可能不感到不适”曲解为“更舒适”，属于过度推断，因此表述错误。\n\n44. The role that weather plays in formation flight has not yet been clearly defined.\n\n[答案] T\n\n[精解]\n根据题干关键词“weather”定位至第五段首句。原文指出：“It remains to be seen how weather conditions affect the air flows that make formation flight more efficient”，即天气对编队飞行效率的影响尚待研究。题干中的“has not yet been clearly defined”与原文“remains to be seen”对应，因此表述正确。\n\n45. It has been documented that during World War II, America’s armed forces once tried formation flight to save fuel.\n\n[答案] F\n\n[精解]\n根据题干关键词“during World War II”“America’s armed forces”定位至最后一段。原文提到虽有报道称二战期间军机曾因燃油不足编队飞行，但紧接着指出这些报道“are unsubstantiated”，即未经证实。题干中的“It has been documented”表示“有文件记载/确凿证据”，与原文“未经证实”相矛盾，因此表述错误。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }], materialId: "partB"
  }),
  base(46, 'k-en-014', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "2010 Part C 翻译：将下面短文译成汉语。",
    referenceAnswer: "【总体分析】\n\n本文围绕核心概念“承受力”(sustainability)展开，通过主人公泰德·宁的个人经历，阐释了这一概念的内涵。宁在经历了一段难以承受的人生困境后，深刻认识到以承受力为导向的价值观必须通过日常行动和选择来体现。从翻译角度看，文本句式结构相对简单，但需注意以下难点：\n\n核心术语“sustainability”需结合语境译为“承受力”，体现其“持续承受困境”的内涵；\n\n人物心理活动的描写需保持情感张力；\n\n口语化表达需转换为符合中文习惯的表述。\n\n【翻译】\n\n近来，“承受力”一词风靡一时，但对泰德·宁而言，这个概念始终承载着个人的深刻体悟。在经历了一段痛苦难熬的人生低谷后，他清楚地认识到：以提升承受力为目标的价值观，必须通过日常行动与抉择来体现。\n\n宁回忆起20世纪90年代末从事保险销售那迷茫的一年。在亲历互联网泡沫的膨胀与破灭后，他迫于生计与博尔德公司签下合约。\n\n然而情况并不顺利。“这步棋走得实在糟糕，因为它完全不是我的热情所在，”宁坦言。可以预见，这种工作上的两难境地直接导致他的销售业绩惨淡。“我痛苦不堪，内心充满焦虑，经常半夜惊醒，凝视着天花板。当时身无分文，又不得不继续这份工作。所有人都劝我‘坚持住，假以时日总会迎来转机。’”\n\n【难点解析】\n\n“unsustainability”译为“人生低谷”既保留原文“不可持续”的核心语义，又符合中文表达习惯；\n\n“dilemma about the job translated&mldr;into lack of sales”采用意译手法，将抽象的心理矛盾转化为具体的业绩表现；\n\n“stare at the ceiling”译为“凝视天花板”保留原文意象，同时通过“经常”一词体现动作的重复性；\n\n结尾俗语“turn the corner”译为“迎来转机”，准确传达“渡过难关”的隐喻意义。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }], materialId: "partC"
  }),
  base(47, 'k-en-015', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "Directions\n\nYou have just come back from the U.S. as a member of a Sino-American cultural exchange program. Write a letter to your American colleague to\n\nexpress your thanks for his/her warm reception;\n\nwelcome him/her to visit China in due course.\n\nYou should write about 100 words on ANSWER SHEET 2.\n\nDo not sign your own name at the end of the letter. Use “Zhang Wei” instead.\n\nDo not write your address. (10 points)",
    referenceAnswer: "解析\n\n一、要点归纳\n\n应用文类型：书信。需注意格式完整，包括称呼、正文、结尾敬语及署名。\n\n语言风格：收信人为美国同事，用语不必过于正式，保持礼貌、亲切即可。\n\n内容要点：\n表达对美国同事热情接待的感谢；\n\n为使感谢更自然，可适当回顾对方的款待细节，提及在对方帮助下的收获；\n\n最后诚挚邀请对方在合适的时候访问中国。\n\n二、范文参考\n\nDear [Friend’s Name],\n\nThank you very much for your warm reception during my visit to the U.S. as a delegate of the Sino-American cultural exchange program. Your thoughtful arrangements made me feel completely at home. With your detailed explanations of American customs, I was able to quickly overcome culture shock and gain a deeper understanding of your culture. I truly appreciate everything you did for me.\n\nI sincerely welcome you to visit China in due course. It would be my great pleasure to reciprocate your kindness and show you around. I am sure you will have a wonderful experience and gain rich insights into Chinese culture.\n\nLooking forward to your visit!\n\nYours sincerely,\nZhang Wei\n\n三、写作储备\n\n1. 传达谢意\n\nexpress gratitude 表达感恩\n\nGratitude is the sign of noble souls. 感恩是高尚灵魂的象征。\n\nWith sincere appreciation, I would like to thank you. 我要带着真诚的谢意感谢你。\n\nLife is so much easier with great friends like you. 有你这么好的朋友，生活变得更加轻松。\n\nYour support has made me a strong and driven individual, and I will forever be grateful to you. 你的支持让我成为一个坚强而奋发向上的人，我将永远对你心存感激。\n\n2. 感谢信常用表达\n\n开头语：\nI really appreciate your hospitality during my visit to&mldr;\n\nThank you for all the help you have given me with my&mldr;\n\nI wish to express my heartfelt thanks to you for&mldr;\n\nI want you to know how much I appreciate your&mldr;\n\n发展部分：\nYou helped me to&mldr;\n\nYou taught me to&mldr;\n\n结束语：\nI truly appreciate your help.\n\nThanks again for your hospitality.\n\nThank you for your consideration.",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }]
  }),
  base(48, 'k-en-016', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "Directions\n\nIn this section, you are asked to write an essay based on the following chart. In your writing, you should\n\ninterpret the chart and\n\ngive your comments.\n\nYou should write at least 150 words.\n\nWrite your essay on ANSWER SHEET 2. (15 points)\n\n（图表数据趋势：发展中国家手机订阅量在 2000-2008 年间呈显著增长态势，而发达国家增长相对平缓，后期发展中国家订阅量远超发达国家。）\n\n（图：见原题）",
    referenceAnswer: "图表解读\n\n该图表对比了2000年至2008年间发展中国家与发达国家的手机用户订阅量增长趋势。在此期间，发展中国家的手机订阅量呈现迅猛增长，从5亿激增至40亿。相比之下，发达国家的增长则较为平缓，订阅量仅从7亿缓慢上升至10亿。\n\n现象分析\n\n造成这一差异的主要原因在于两类国家处于不同的市场发展阶段。在发展中国家，手机市场远未饱和，庞大的人口基数为市场提供了巨大的潜在用户群体。同时，经济的持续发展使得越来越多的人有能力购买和使用手机，从而推动了订阅量的快速增长。反观发达国家，手机普及率已处于较高水平，市场接近饱和，增长空间相对有限。\n\n未来展望\n\n基于上述分析，可以预见：发展中国家的手机订阅量仍将保持较快增长，但随着市场逐渐饱和，增速可能会放缓；而发达国家的市场已趋于成熟，订阅量预计将保持稳定，除非有新的需求刺激。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }],
    figures: [{ src: A + "_shared/images/english/e2_2010_48.png", alt: '作文图表' }]
  }),
]

export const questions2010_en2 = raw.map(q => q.materialId
  ? { ...q, material: MATERIALS[q.materialId] }
  : q)

export const paper2010_en2 = {
  id: P, year: Y,
  title: '2010 年全国硕士研究生招生考试 英语（二）',
  short: '2010 英语二原卷', group: 'en', subjects: ['en'],
  durationMin: 180, totalScore: 100,
  questionCount: questions2010_en2.length,
  qids: questions2010_en2.map(q => q.id),
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
