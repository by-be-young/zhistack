const P = 'paper-2021-en2'
const Y = 2021
const A = (import.meta.env?.BASE_URL || '/') + 'notes/assets/'
const MATERIALS = {
  cloze: {
    title: "Section I · Use of English", fontSize: 16,
    blocks: [
      { label: "Text", text: "It’s not difficult to set targets for staff. It is much harder, (1)____ , to understand their negative consequences. Most work-related behaviors have multiple components. (2)____ one and the others become distorted.\n\nTravel on a London bus and you’ll (3)____ see how this works with drivers. Watch people get on and show their tickets. Are they carefully inspected? Never. Do people get on without paying? Of course! Are there inspectors to (4)____ that people have paid? Possibly, but very few. And people who run for the bus? They are (5)____ . How about jumping lights? Buses do so almost as frequently as cyclists.\n\nWhy? Because the target is (6)____ . People complained that buses were late and infrequent. (7)____ , the number of buses and bus lanes were increased, and drivers were (8)____ or punished according to the time they took. And drivers hit these targets. But they (9)____ hit cyclists. If the target was changed to safety, you would get more inspectors and more sensitive pricing. If the criterion changed to (10)____ you would have more (11)____ drivers who obeyed traffic laws. But both these criteria would be at the expense of time.\n\nThere is another (12)____ : people became immensely inventive in hitting targets. Have you (13)____ that you can leave on a flight an hour late but still arrive on time? Tailwinds? Of course not! Airlines have simply changed the time a (14)____ is meant to take. A one-hour flight is now billed as a two-hour flight.\n\nThe (15)____ of the story is simple. Most jobs are multidimensional, with multiple criteria. Choose one criterion and you may well (16)____ others. Everything can be done faster and made cheaper, but there is a (17)____ . Setting targets can and does have unforeseen negative consequences.\n\nThis is not an argument against target-setting. But it is an argument for exploring consequences first. All good targets should have multiple criteria (18)____ critical factors such as time, money, quality and customer feedback. The trick is not only to (19)____ just one or even two dimensions of the objective, but also to understand how to help people better (20)____ the objective." },
    ]
  },
  text1: {
    title: "Text 1", fontSize: 16,
    blocks: [
      { label: "Passage", text: "“Reskiling” is something that sounds like a buzzword but is actually a requirement if we plan to have a future where a lot of would-be workers do not get left behind. We know we are moving into a period where the jobs in demand will change rapidly, as will the requirements of the jobs that remain. Research by the WEF detailed in the Harvard Business Review, finds that on average 42 per cent of the core skill’l within job roles will change by 2022, at a pace that is three times faster than on average. That is a very short timeline, so we can only imagine what the changes will be like in the future.\n\nThe question of who should pay for reskiling is a thorny one. For individual companies, the temptation is always to let go of workers whose skills are no longer in demand and replace them with those whose skills are. That does not always happen. AT&T is often given as the gold standard of a company who decided to do a massive reskiling program rather than go with a fire-and-hire strategy, ultimately retraining 18,000 employers., Prepandemic, other companies including Amazon and Disney had also pledged to create their own plans. When the skills mismatch is in the broader economy though, the focus usually turns to government to handle. Efforts in Canada and elsewhere have been arguably languid at best, and have given us a situation where we frequently hear of employers begging for workers, even at times and in regions where unemployment is high.\n\nWith the pandemic, unemployment is very high indeed. In February, at 3.5 per cent and 5.4 per cent respectively, unemployment rates in Canada and the United States were at generational lows and worker shortages were everywhere. As of May, those rates had spiked up to 13.3 per cent and 13.7 per cent, and although many worker shortages had disappeared, not all had done so. In the medical filed, to take an obvious example, the pandemic meant that there were still clear shortages of doctors, nurses and other medical personnel.\n\nOf course, it is not like you can take an unemployed waiter and train him to be a doctor in a few weeks, no matter who pays for it. But even if you cannot close that gap, maybe you can close others, and doing so would be to the benefit of all concerned. That seems to be the case in Sweden: when forced to furlough 90 per cent of their cabin staff, Scandinavian Airlines decided to start up a short retraining program that reskilled the laid-off workers to support hospital staff. The effort was a collective one and involved other companies as well as a Swedish university." },
    ]
  },
  text2: {
    title: "Text 2", fontSize: 16,
    blocks: [
      { label: "Passage", text: "With the global population predicted to hit close to 10 billion by 2050, and forecasts that agricultural production in some regions will need to nearly double, the issue of food security is increasingly making headlines. In the UK, it has become a big talking point recently for a rather particular reason: Brexit.\n\nBrexit is seen by some as an opportunity to reverse a recent trend towards the UK importing food. The country produces only about 60 per cent of the food it eats, down from almost three-quarters in the late 1980s. A move back to self-sufficiency, the argument goes, would boost the farming industry, political sovereignty and even the nation’s health. Sounds great - but how feasible is this vision?\n\nAccording to a report on UK food production from the University of Leeds, UK, 85 per cent of the country’s total land area is associated with meat and dairy production. That supplies 80 per cent of what is consumed, so even covering the whole country in livestock farms wouldn’t allow us to cover all our meat and dairy needs.\n\nThere are many caveats to those figures, but they are still grave. To become much more self-sufficient, the UK would need to drastically reduce its consumption of animal foods, and probably also farm more intensively - meaning fewer green fields, and more factory-style production.\n\nBut switching to a mainly plant-based diet wouldn’t help. There is a good reason why the UK is dominated by animal husbandry: most of its terrain doesn’t have the right soil or climate to grow crops on a commercial basis. Just 25 per cent of the country’s land is suitable for crop-growing, most of which is already occupied by arable fields. Even if we converted all the suitable land to fields of fruit and veg - which would involve taking out all the ancient forests and removing thousands of people from their homes - we would achieve only a 30 per cent boost in crop production.\n\nJust 23 per cent of the fruit and vegetables consumed in the UK are currently home-grown, so even with the most extreme measures we could meet only 30 per cent of our fresh produce needs. That is before we look for the space to grow the grains, sugars, seeds and oils that provide us with the vast bulk of our current calorie intake." },
    ]
  },
  text3: {
    title: "Text 3", fontSize: 16,
    blocks: [
      { label: "Passage", text: "When Microsoft bought task management app Wunderlist and mobile calendar Sunrise in 2015. It picked up two newcomers that were attracting considerable buzz in Silicon Valley. Microsoft’s own Office dominates the market for “productivity” software, but the startups represented a new wave of technology designed from the ground up for the smartphone world.\n\nBoth apps, however, were later scrapped, after Microsoft said it had used their best features in its own products. Their teams of engineers stayed on, making them two of the many “acqui-hires” that the biggest companies have used to feed their insatiable hunger for tech-talent.\n\nTo Microsoft’s critics, the fates of Wunderlist and Sunrise are examples of a remorseless drive by Big Tech to chew up any innovative companies that lie in their path. “They bought the seedlings and closed them down,” complained Paul Arnold, a partner at San Francisco-based Switch Ventures, putting paid to businesses that might one day turn into competitors. Microsoft declined to comment.\n\nLike other startup investors, Mr. Arnold’s own business of ten depends on selling startups to larger tech companies, though he admits to mixed feelings about the result. “I think these things are good for me, if I put my selfish hat on, But are they good for the American economy? I don’t know.”\n\nThe US Federal Trade Commission says it wants to find the answer to that question. This week, it asked the five most valuable US tech companies for information about their many small acquisitions over the past decade. Although only a research project at this stage, the request has raised the prospect of regulators wading into early-stage tech markets that until now have been beyond their reach.\n\nGiven their combined market value of more than $5.5tm, rifling through such small deals - many of them much less prominent than Wunderlist and Sunrise - might seem beside the point. Between them, the five companies(Apple, Microsoft, Google, Amazon and Facebook) have spent an average of only $3.4bn a year on sub-$1bn acquisitions over the past five years - a drop in the ocean compared with their massive financial reserves, and the more than $130bn of venture capital that was invested in the US last year.\n\nHowever, critics say that the big companies use such deals to buy their most threatening potential competitors before their businesses have a chance to gain momentum, in some cases as part of a “buy and kill” tactic to simply close them down." },
    ]
  },
  text4: {
    title: "Text 4", fontSize: 16,
    blocks: [
      { label: "Passage", text: "We’re fairly good at judging people based on first impressions, thin slices of experience ranging from a glimpse of a photo to five-minute interaction, and deliberation can be not only extraneous but intrusive. In one study of the ability she dubbed “thin slicing,” the late psychologist Nalini Ambady asked participants to watch silent 10-second video clips of professors and to rate the instructor’s overall effectiveness. Their ratings correlated strongly with students’ end-of-semester ratings. Another set of participants had to count backward from 1,000 by nines as they watched the clips, occupying their conscious working memory. Their ratings were just as accurate, demonstrating the intuitive nature of the social processing.\n\nCritically, another group was asked to spend a minute writing down reasons for their judgment, before giving the rating. Accuracy dropped dramatically, Ambady suspected that deliberation focused them on vivid but misleading cues, such as certain gestures or utterances, rather than letting the complex interplay of subtle signals form a holistic impression. She found similar interference when participants watched 15-second clips of pairs of people and judged whether they were strangers, friends, or dating partners.\n\nOther research shows we’re better at detecting deception and sexual orientation from thin slices when we rely on intuition instead of reflection. “It’s as if you’re driving a stick shift,” says Judith Hall, a psychologist at Northeastern University, “and if you start thinking about it too much, you can’t remember what you’re doing. But if you go on automatic pilot, you’re fine. Much of our social life is like that.”\n\nThinking too much can also harm our ability to form preferences. College students’ ratings of strawberry jams and college courses aligned better with experts’ opinions when the students weren’t asked to analyze their rationale. And people made car-buying decisions that were both objectively better and more personally satisfying when asked to focus on their feelings rather than on details, but only if the decision was complex - when they had a lot of information to process.\n\nIntuition’s special powers are unleashed only in certain circumstances. In one study, participants completed a battery of eight tasks, including four that tapped reflective thinking (discerning rules, comprehending vocabulary) and four that tapped intuition and creativity (generating new products or figures of speech). Then they rated the degree to which they had used intuition (“gut feeling,” hunches,\" “my heart”). Use of their gut hurt their performance on the first four tasks, as expected, and helped them on the rest. Sometimes the heart is smarter than the head." },
    ]
  },
  partB: {
    title: "Part B · 新题型", fontSize: 16,
    blocks: [
      { label: "Passage & Options", text: "A. Stay calm\n\nB. Stay humble\n\nC. Be realistic about the risks\n\nD. Identify a shared goal\n\nE. Decide whether to wait\n\nF. Ask permission to disagree\n\nG. Don’t make judgments\n\nHow to Disagree with Someone More Powerful than You\n\nYour boss proposes a new initiative you think won’t work. Your senior colleague outlines a project timeline you think is unrealistic. What do you say when you disagree with someone who has more power than you do? How do you decide whether it’s worth speaking up? And if you do, what exactly should you say?\n\n41.________________\n\nYou may decide it’s best to hold off on voicing your opinion. Maybe “you haven’t finished thinking the problem through, the whole discussion was a surprise to you, or you want to get a clearer sense of what the group thinks,” says Weeks. “If you think other people are going to disagree too, you might want to gather your army first. People can contribute experience or information to your thinking all the things that would make the disagreement stronger or more valid.” It’s also a good idea to delay the conversation if you’re in a meeting or other public space. Discussing the issue in private will make the powerful person feel less defensive.\n\n42.________________\n\nBefore you share your thoughts, think about what the powerful person cares about—it may be “the credibility of their team or getting a project done on time,” says Grenny. You’re more likely to be heard if you can connect your disagreement to a higher purpose. “When you do speak up, don’t assume the link will be clear. You’ll want to state it overtly, contextualizing your statements so that you’re seen not as a disagreeable underling but as a colleague who’s trying to advance a shared goal. The discussion will then become “more like a chess game than a boxing match,” says Weeks.\n\n43.________________\n\nThis step may sound overly deferential, but, according to Grenny, it’s a smart way to give the powerful person “psychological safety” and control. You can say something like, “I know we seem to be moving toward a first-quarter commitment here. I have reasons to think that won’t work. I’d like to lay out my reasoning. Would that be OK?” This gives the person a choice, “allowing them to verbally opt in,” says Grenny. And, assuming they say yes, it will allow you to feel more confident about voicing your disagreement.\n\n44.________________\n\nYou might feel your heart racing or your face turning red, but do whatever you can to remain neutral in both your words and actions. When your body language communicates reluctance or anxiety, it undercuts the message, Weeks says. It sends “a mixed message, and your counterpart gets to choose what to read,” she explains. Deep breaths can help, as can speaking more slowly and deliberately. “When we feel panicky, we tend to talk louder and faster. You don’t want to be mousey or talk in a whisper, but simply slowing the pace and talking in an even tone helps calm the other person down and does the same for you,” says Grenny. It also makes you seem more confident, even if you aren’t.\n\n45.________________\n\nIt’s a well-informed, well-researched opinion, but it’s still an opinion, so voice it tentatively and slightly understate your confidence. “Instead of saying something like, ‘If we set an end-of-quarter deadline, we’ll never make it,’ say, ‘This is just my opinion, but I don’t see how we will make that deadline.’ “Weeks suggests adding a bit of hedging language, like “I’m thinking aloud here.” This will leave room for dialogue. Having asserted your position, “demonstrate equal curiosity about other views,” says Grenny. Remind the person that this is your point of view, and then invite critique. Weeks suggests trying something like, “Tell me where I’m wrong with this.” Be genuinely open to hearing other opinions." },
    ]
  },
  partC: {
    title: "Part C · 翻译", fontSize: 16,
    blocks: [
      { label: "Passage", text: "We tend to think that friends and family members are our biggest sources of connection, laughter, and warmth. While that may well be true, researchers have also recently found that interacting with strangers actually brings a boost in mood and feelings of belonging that we didn’t expect.\n\nIn one series of studies, researchers instructed Chicago-area commuters using public transportation to strike up a conversation with someone near them. On average, participants who followed this instruction felt better than those who had been told to stand or sit in silence. The researchers also argued that when we shy away from casual interactions with strangers, it is often due to a misplaced anxiety that they might not want to talk to us. Much of the time, however, this belief is false. As it turns out, many people are actually perfectly willing to talk—and may even be flattered to receive your attention." },
    ]
  },
}

const base = (n, kid, extra = {}) => ({
  id: `q-en2-2021-${String(n).padStart(2, '0')}`,
  subject: 'en', knowledgeId: kid, paperId: P, paperOnly: true, year: Y, number: n,
  source: 'real', sourceName: '2021 考研英语（二）真题',
  ...extra
})

const raw = [
  base(1, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 1 空",
    options: [{ key: "A", text: "therefore" }, { key: "B", text: "however" }, { key: "C", text: "again" }, { key: "D", text: "moreover" }],
    answer: ["B"],
    explain: "解析：\n\n第一句说“为员工设定目标并不难”，第二句说“理解其负面后果要困难得多”。\n\n两句之间是转折关系，而不是因果、递进或重复。\n\nhowever 表示“然而”，用于引出与前面相反或对比的意思，符合语境。\n\n其他选项：\nA. therefore 因此（因果）\n\nC. again 再次（重复）\n\nD. moreover 而且（递进）\n均不符合逻辑。\n\n答案：B. however",
    materialId: "cloze"
  }),
  base(2, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 2 空",
    options: [{ key: "A", text: "Emphasize" }, { key: "B", text: "Identify" }, { key: "C", text: "Access" }, { key: "D", text: "Explain" }],
    answer: ["A"],
    explain: "解析：\n\n第 2 题原文是：\n\nMost work-related behaviors have multiple components. 2 one and the others become distorted.\n\n这句话的意思是：大多数与工作相关的行为有多个组成部分。强调其中一个，其他的就会扭曲。\n\nA. Emphasize（强调）\n放入句中：“强调其中一个，其他的就会扭曲”，逻辑通顺，符合“只突出一个指标就会导致其他方面失衡”的意思。\n\nB. Identify（识别）\n“识别其中一个，其他的就会扭曲” —— 识别并不会直接导致扭曲，逻辑不如 A 合理。\n\nC. Access（访问、获取）\n“获取其中一个” 与 “其他扭曲” 之间因果关系不明显。\n\nD. Explain（解释）\n“解释其中一个” 与 “其他扭曲” 没有直接因果联系。\n\n结合上下文，这里是在说“设定目标时只强调一个方面，就会导致其他方面被忽视或扭曲”，所以 A. Emphasize 最合适。",
    materialId: "cloze"
  }),
  base(3, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 3 空",
    options: [{ key: "A", text: "nearly" }, { key: "B", text: "curiously" }, { key: "C", text: "eagerly" }, { key: "D", text: "quickly" }],
    answer: ["D"],
    explain: "解析：\n\n第 3 题原文语境为：\n\nTravel on a London bus and you’ll\n3\nsee how this works with drivers.\n\n意思是：“乘坐一次伦敦的公交车，你很快就会看到司机是如何体现这一点的。”\n\n这里的“很快”强调的是短时间内就能观察到，而不是几乎、好奇地或渴望地。\n\nA. nearly（几乎）——不符合逻辑，不是“几乎看到”，而是确实能看到。\n\nB. curiously（好奇地）——上下文没有强调观察者的好奇心理。\n\nC. eagerly（渴望地）——没有体现乘客的渴望情绪。\n\nD. quickly（很快）——符合“一次乘坐就能很快明白”的语义，强调迅速理解现象。\n\n因此正确答案是 D. quickly。",
    materialId: "cloze"
  }),
  base(4, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 4 空",
    options: [{ key: "A", text: "claim" }, { key: "B", text: "prove" }, { key: "C", text: "check" }, { key: "D", text: "recall" }],
    answer: ["C"],
    explain: "解析：\n第 4 题所在句子是：\n\nAre there inspectors to\n4\nthat people have paid? Possibly, but very few.\n\n句子意思：有没有检票员去 ______ 人们已经付了车费？可能有，但很少。\n\n选项分析：\n\nA. claim（声称）——检票员不是去“声称”人们已付钱，而是去核实。\n\nB. prove（证明）——检票员不是去“证明”付钱的事实，而是去检查。\n\nC. check（检查）——检票员的职责就是检查乘客是否买票，符合语境。\n\nD. recall（回忆）——语义不符。\n\n因此，正确答案是 C. check。",
    materialId: "cloze"
  }),
  base(5, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 5 空",
    options: [{ key: "A", text: "ignored" }, { key: "B", text: "threatened" }, { key: "C", text: "mocked" }, { key: "D", text: "blamed" }],
    answer: ["A"],
    explain: "解析：\n\n第 5 题所在句子为：\n\nAnd people who run for the bus? They are ______.\n\n前文提到，在伦敦坐公交车时，可以看到一些现象：\n\n车票很少被仔细检查\n\n有人不付钱上车\n\n检票员很少\n\n公交车经常闯红灯\n\n接着说到“跑着赶公交车的人”会怎样。从上下文看，作者在列举公交系统中被忽视或不受约束的行为。\n“跑着赶车的人”显然是在车快开走时匆忙追赶，但司机或系统并不会特别关照他们——不会特意等待，也不会因他们跑就惩罚他们，而是忽略他们。\n\n选项分析：\n\nA. ignored（被忽略）——符合语境，司机和系统对他们没有特别反应。\n\nB. threatened（被威胁）——与文意不符，文中没有威胁他们的意思。\n\nC. mocked（被嘲笑）——无依据。\n\nD. blamed（被责备）——文中未提及他们因赶车而受责备。\n\n因此，A. ignored 最符合上下文逻辑。",
    materialId: "cloze"
  }),
  base(6, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 6 空",
    options: [{ key: "A", text: "punctuality" }, { key: "B", text: "hospitality" }, { key: "C", text: "competition" }, { key: "D", text: "innovation" }],
    answer: ["A"],
    explain: "解析：\n\n第 6 题所在段落描述了伦敦公交车司机的情况：\n\n人们抱怨公交车不准时、班次少。\n\n于是增加了公交车和公交专用道，并根据司机所用时间对他们进行奖励或惩罚。\n\n司机们实现了“目标”，但撞到骑车人的情况增加了。\n\n由此可知，这里设定的“目标”是准时，即 punctuality。\n其他选项：\n\nB. hospitality（好客）与公交运营无关\n\nC. competition（竞争）不是这里强调的核心目标\n\nD. innovation（创新）也不符合上下文\n\n因此正确答案是 A. punctuality。",
    materialId: "cloze"
  }),
  base(7, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 7 空",
    options: [{ key: "A", text: "Yet" }, { key: "B", text: "So" }, { key: "C", text: "Besides" }, { key: "D", text: "Still" }],
    answer: ["B"],
    explain: "解析：\n\n第 7 题位于以下句子中：\n\nPeople complained that buses were late and infrequent.\n7\n, the number of buses and bus lanes were increased, and drivers were rewarded or punished according to the time they took.\n\n逻辑关系分析：\n\n前一句说“人们抱怨公交车晚点且班次少”，后一句说“公交车和公交专用道数量增加，司机根据所用时间受到奖励或惩罚”。\n\n后一句显然是针对前一句问题的应对措施或结果，因此是因果关系。\n\n选项中：\nA. Yet（然而）表示转折\n\nB. So（所以）表示因果\n\nC. Besides（此外）表示递进\n\nD. Still（仍然）表示让步或转折\n\n根据上下文，这里应该是“因此，于是”的意思，所以选 B. So。\n\n答案：B",
    materialId: "cloze"
  }),
  base(8, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 8 空",
    options: [{ key: "A", text: "hired" }, { key: "B", text: "trained" }, { key: "C", text: "rewarded" }, { key: "D", text: "grouped" }],
    answer: ["C"],
    explain: "解析：\n第 8 题所在句子为：\n\n…drivers were\n8\nor punished according to the time they took.\n\n这里有一个并列结构 rewarded or punished（奖励或惩罚），是常见的绩效管理表达，意思是根据完成时间的长短进行奖励或处罚。\n\n其他选项：\nhired（雇佣）——与“惩罚”并列不合理；\n\ntrained（培训）——与“惩罚”不是对立或并列关系；\n\ngrouped（分组）——不符合语境。\n\n因此正确答案是 C. rewarded。",
    materialId: "cloze"
  }),
  base(9, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 9 空",
    options: [{ key: "A", text: "only" }, { key: "B", text: "rather" }, { key: "C", text: "once" }, { key: "D", text: "also" }],
    answer: ["D"],
    explain: "解析：\n\n第 9 题所在句子为：\n\nBut they\n9\nhit cyclists.\n\n前文提到，为了提高准点率，公交公司给司机设定了时间目标，司机们确实达到了这些目标。\n接着用 But 转折，暗示他们达到目标的同时，却带来了另一个负面结果——撞到骑自行车的人。\n\n逻辑上，这里要表达的是：司机们不仅达到了准点目标，而且还撞了骑车人。\n四个选项中：\n\nA. only（仅仅）—— 不符合，因为撞人不是唯一结果。\n\nB. rather（而是）—— 常用于“not…but rather…”结构，这里没有对比否定前文。\n\nC. once（一旦）—— 逻辑不通。\n\nD. also（也）—— 符合语境，表示“同时还有撞人”的负面结果。\n\n因此正确答案是 D. also。",
    materialId: "cloze"
  }),
  base(10, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 10 空",
    options: [{ key: "A", text: "comfort" }, { key: "B", text: "revenue" }, { key: "C", text: "efficiency" }, { key: "D", text: "security" }],
    answer: ["B"],
    explain: "好的，我们先看第 10 题所在的段落。\n\n原文相关部分：\n\nIf the target was changed to safety, you would get more inspectors and more sensitive pricing.\nIf the criterion changed to ______ you would have more polite drivers who obeyed traffic laws.\nBut both these criteria would be at the expense of time.\n\n分析：\n\n第一个假设是目标改为 safety（安全），会带来更多检查员和更敏感的票价机制。\n\n第二个假设是目标改为 ______，会带来更有礼貌、更遵守交通规则的司机。\n\n礼貌、遵守交通规则，通常与 服务态度 和 乘客体验 有关，但这里给出的选项是：\n\nA. comfort（舒适）\n\nB. revenue（收入）\n\nC. efficiency（效率）\n\nD. security（安全，但前面已用过 safety，这里不会重复）\n\n如果目标是 revenue（收入），那么司机会更礼貌、更遵守交通规则吗？\n\n有可能，因为礼貌和遵守交规可以减少事故、减少投诉，从而减少公司因罚款、事故赔偿等造成的损失，最终有助于提高收入。\n\n而且，如果司机为了增加收入，可能会更注重吸引乘客、避免因事故或违规造成的成本，因此会更礼貌、更守规矩。\n\n其他选项分析：\n\ncomfort（舒适）：礼貌的司机确实可能让乘客更舒适，但原文没有直接强调舒适性，而且“遵守交通规则”与舒适不完全对应。\n\nefficiency（效率）：效率目标在前面已经暗示会导致司机抢时间、闯红灯等，与礼貌和守规则相矛盾。\n\nsecurity（安全）：与前面的 safety 意思重复，且安全目标已在上一句提过，这里应该是另一个维度。\n\n结合上下文逻辑，这里是在讲不同的考核标准会带来不同的行为：\n\n考核准点 → 司机开快车、闯红灯\n\n考核安全 → 增加检查员、调整票价\n\n考核收入 → 司机会礼貌、守交规（因为事故和投诉会减少收入）\n\n所以第 10 题正确答案是 B. revenue。",
    materialId: "cloze"
  }),
  base(11, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 11 空",
    options: [{ key: "A", text: "friendly" }, { key: "B", text: "quiet" }, { key: "C", text: "cautious" }, { key: "D", text: "diligent" }],
    answer: ["C"],
    explain: "解析：\n\n第 11 题所在句为：\n\nIf the criterion changed to ______ you would have more ______ drivers who obeyed traffic laws.\n\n上文提到，当前的目标是 准时（the target is time），所以司机为了赶时间会出现闯红灯、撞到骑车者等行为。\n而如果标准改为 安全（safety），那么司机会更遵守交通法规，开车更小心谨慎。\n\n四个选项：\n\nA. friendly（友好的）—— 与遵守交通法规、安全驾驶没有直接对应\n\nB. quiet（安静的）—— 不符合语境\n\nC. cautious（谨慎的）—— 与“遵守交通法规”直接对应，符合“安全”目标下的司机行为\n\nD. diligent（勤奋的）—— 与安全驾驶逻辑关系较弱\n\n因此，C. cautious 最符合文意。\n\n答案：C",
    materialId: "cloze"
  }),
  base(12, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 12 空",
    options: [{ key: "A", text: "purpose" }, { key: "B", text: "problem" }, { key: "C", text: "prejudice" }, { key: "D", text: "policy" }],
    answer: ["B"],
    explain: "解析：\n\n第 12 题位于段落开头，原文是：\n\nThere is another ______ : people became immensely inventive in hitting targets.\n\n这里冒号后面的内容是对前面空格的解释，意思是“人们在达成目标方面变得非常有创意”。\n这实际上是在说明目标设定带来的另一个问题——人们可能会通过扭曲行为、钻空子的方式来“达成”目标，而不是真正提高效率或服务质量。\n\nA. purpose（目的）——不符合，这里不是在讲目标设定的目的。\n\nB. problem（问题）——符合，因为这种“耍小聪明”是目标设定带来的负面问题。\n\nC. prejudice（偏见）——与上下文无关。\n\nD. policy（政策）——这里不是在讨论某项政策，而是指出问题。\n\n因此，正确答案是 B. problem。",
    materialId: "cloze"
  }),
  base(13, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 13 空",
    options: [{ key: "A", text: "reported" }, { key: "B", text: "revealed" }, { key: "C", text: "admitted" }, { key: "D", text: "noticed" }],
    answer: ["D"],
    explain: "解析：\n\n第 13 题所在句子为：\n\nHave you\nnoticed\nthat you can leave on a flight an hour late but still arrive on time?\n\n选项分析：\n\nA. reported（报告）—— 主语一般是“人”或“媒体”，这里主语是 you，强调“个人是否报告”不太符合语境。\n\nB. revealed（揭示）—— 主语通常是“调查、证据、某人”等，表示揭露隐藏的事实，但这里是在问读者是否“自己察觉到”一个现象，不是“揭露”。\n\nC. admitted（承认）—— 主语一般是“人”，且常用于承认错误或事实，但这里不是问“你是否承认”，而是问“是否注意到”。\n\nD. noticed（注意到）—— 最符合语境，作者在引导读者注意一个常见的现象：航班起飞晚点却仍能准点到达，是因为航空公司调整了计划时间。\n\n逻辑对应：\n后文说“Airlines have simply changed the time a flight is meant to take”，这是一种乘客可以观察到的现象，所以用 noticed 最自然。\n\n因此正确答案是 D. noticed。",
    materialId: "cloze"
  }),
  base(14, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 14 空",
    options: [{ key: "A", text: "break" }, { key: "B", text: "trip" }, { key: "C", text: "department" }, { key: "D", text: "transfer" }],
    answer: ["B"],
    explain: "解析：\n\n第 14 题所在句子为：\n\nAirlines have simply changed the time a ______ is meant to take. A one-hour flight is now billed as a two-hour flight.\n\nA. break 意为“休息、中断”，与飞行时间不搭配。\n\nB. trip 意为“旅行、行程”，可以指一次航班飞行，符合语境。\n\nC. department 意为“部门”，与飞行时间无关。\n\nD. transfer 意为“转机”，虽然与航空有关，但这里指的是整个航班行程的时间，不是特指转机。\n\n原文说“航空公司改变了 一次行程 预期花费的时间”，并且后面举例“一小时的航班现在被标为两小时”，因此 trip 最合适。\n\n答案：B",
    materialId: "cloze"
  }),
  base(15, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 15 空",
    options: [{ key: "A", text: "moral" }, { key: "B", text: "background" }, { key: "C", text: "style" }, { key: "D", text: "form" }],
    answer: ["A"],
    explain: "解析：\n\n第 15 题空格所在的句子是：\n\nThe\n15\nof the story is simple.\n\n这句话的意思是“这个故事的____很简单”，后面紧接着是作者总结的道理：\n\nMost jobs are multidimensional, with multiple criteria. Choose one criterion and you may well sacrifice others.\n\n这是在总结一个寓意、教训，而不是在说故事的背景、风格或形式。\n\nA. moral 意为“寓意、教训”，常用于寓言或故事结尾的总结。\n\nB. background 意为“背景”，不符合文意。\n\nC. style 意为“风格”，不贴合上下文。\n\nD. form 意为“形式”，也不符合。\n\n因此，A. moral 是正确答案。",
    materialId: "cloze"
  }),
  base(16, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 16 空",
    options: [{ key: "A", text: "interpret" }, { key: "B", text: "criticize" }, { key: "C", text: "sacrifice" }, { key: "D", text: "tolerate" }],
    answer: ["C"],
    explain: "解析：\n\n第 16 题所在句子为：\n\nChoose one criterion and you may well\n16\nothers.\n\n上下文逻辑是：大多数工作是多维度的，有多个评判标准。如果只选择其中一个标准作为目标，那么可能会牺牲其他标准。\n\nA. interpret（解释）—— 不符合“选择一种标准会导致其他标准受影响”的语义。\n\nB. criticize（批评）—— 与“标准”搭配不当，逻辑不通。\n\nC. sacrifice（牺牲）—— 符合语境，意为“为了一个目标而放弃或损害其他目标”。\n\nD. tolerate（容忍）—— 语义不符，这里不是“容忍其他标准”，而是“牺牲其他标准”。\n\n前文提到，如果只关注时间目标，就会牺牲安全和礼貌；如果只关注安全，就会牺牲时间。因此 C. sacrifice 是正确选项。",
    materialId: "cloze"
  }),
  base(17, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 17 空",
    options: [{ key: "A", text: "task" }, { key: "B", text: "secret" }, { key: "C", text: "protect" }, { key: "D", text: "cost" }],
    answer: ["D"],
    explain: "解析：\n\n第 17 题所在句子为：\n\nEverything can be done faster and made cheaper, but there is a ______.\n\n语境分析：\n这句话的意思是“一切都可以做得更快、更便宜，但是会有一个______”。\n从逻辑上看，前面说“更快、更便宜”，后面用“但是”转折，说明这样做是有代价或不利之处的。\n而且前文多次提到，只追求单一目标（如时间）会导致其他方面（如安全、服务）受损，这就是一种“代价”或“成本”。\n\n选项分析：\n\nA. task（任务）——不符合转折语气，不能表达“代价”的含义。\n\nB. secret（秘密）——语义不符。\n\nC. protect（保护）——词性不对，这里需要名词，且意思不匹配。\n\nD. cost（成本，代价）——符合语境，表示“更快更便宜”会带来其他方面的损失。\n\n因此正确答案是 D. cost。",
    materialId: "cloze"
  }),
  base(18, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 18 空",
    options: [{ key: "A", text: "leading to" }, { key: "B", text: "calling for" }, { key: "C", text: "relating to" }, { key: "D", text: "accounting for" }],
    answer: ["C"],
    explain: "解析：\n\n第 18 题空格处所在的句子是：\n\nAll good targets should have multiple criteria ______ critical factors such as time, money, quality and customer feedback.\n\n句意：所有好的目标都应该有与关键因素（如时间、金钱、质量和客户反馈）______ 的多个标准。\n\n选项分析：\n\nA. leading to（导致）—— 这里不是因果关系，而是标准与关键因素之间的关联。\n\nB. calling for（要求）—— 逻辑不通，不是“标准要求关键因素”。\n\nC. relating to（与…相关）—— 表示这些标准涉及或关系到这些关键因素，符合句意。\n\nD. accounting for（解释；占…比例）—— 这里不是解释原因或占比，而是标准覆盖这些因素。\n\n逻辑判断：\n这句话是说好的目标应该有多重标准，这些标准与关键因素（时间、金钱、质量、客户反馈）有关。\nrelating to 表示“涉及、关于”，最符合语境。\n\n因此正确答案是 C。",
    materialId: "cloze"
  }),
  base(19, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 19 空",
    options: [{ key: "A", text: "specify" }, { key: "B", text: "predict" }, { key: "C", text: "restore" }, { key: "D", text: "create" }],
    answer: ["A"],
    explain: "解析：\n\n第 19 题所在句子是：\n\nThe trick is not only to ____________ just one or even two dimensions of the objective, but also to understand how to help people better achieve the objective.\n\n选项分析：\n\nA. specify（明确说明，规定）\n\nB. predict（预测）\n\nC. restore（恢复）\n\nD. create（创造）\n\n语境理解：\n文章前面一直在讨论设定单一目标的弊端，强调大多数工作是多维的，如果只关注一个标准（如时间），就会忽略其他方面（如安全、质量）。\n因此，这里作者想表达的是：关键不只是“规定”目标的一两个维度，而是理解如何帮助人们更好地实现目标。\n\nspecify 在这里意为“明确规定”，符合“设定目标时只规定一两个方面”的意思，与全文批评“单一目标设定”的逻辑一致。\n其他选项：\n\npredict 与目标设定过程不直接相关；\n\nrestore 和 create 在此处语义不通。\n\n因此正确答案是 A. specify。",
    materialId: "cloze"
  }),
  base(20, 'k-en-009', {
    type: 'single', difficulty: 2, score: 0.5,
    stem: "选填第 20 空",
    options: [{ key: "A", text: "modify" }, { key: "B", text: "review" }, { key: "C", text: "present" }, { key: "D", text: "achieve" }],
    answer: ["D"],
    explain: "解析：\n\n第 20 题所在句子是：\n\nThe trick is not only to &mldr; just one or even two dimensions of the objective, but also to understand how to help people better ______ the objective.\n\n逻辑分析：\n\n前半句说“不仅要关注目标的一个或两个维度”，后半句是“还要理解如何帮助人们更好地 ______ 目标”。\n\n从上下文看，整篇文章在讲设定目标（target）与实现目标之间的关系，以及如何避免片面追求某一目标而忽视其他方面。\n\n在管理或工作目标的情境中，最终目的是“实现目标”（achieve the objective）。\n\n其他选项：\nA. modify（修改）—— 不符合“帮助人们更好地实现目标”的语义。\n\nB. review（回顾）—— 与“实现目标”的直接关系不强。\n\nC. present（呈现）—— 与帮助人们达成目标无关。\n\nD. achieve（实现）—— 符合语境，与全文关于目标管理的主题一致。\n\n因此，正确答案是 D. achieve。",
    materialId: "cloze"
  }),
  base(21, 'k-en-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Research by the World Economic Forum suggests",
    options: [{ key: "A", text: "a controversy about the “core skills”" }, { key: "B", text: "an increase in full-time employment" }, { key: "C", text: "an urgent demand for new job skills" }, { key: "D", text: "a steady growth of job opportunities" }],
    answer: ["C"],
    explain: "解析：\n\n题干问“世界经济论坛的研究表明什么”，定位到第一段中关于 WEF（World Economic Forum）的研究内容。\n\n原文提到：\nResearch by the WEF &mldr; finds that on average 42 per cent of the core skills within job roles will change by 2022, at a pace that is three times faster than on average.\n意思是：到 2022 年，工作岗位中 42% 的核心技能将会改变，速度是过去平均速度的三倍。\n\n这直接说明 工作技能需要快速更新，因此 C（对新工作技能的迫切需求） 符合文意。\n\nA 项（关于“核心技能”的争议）未提及；\nB 项（全职就业增加）未提及；\nD 项（就业机会稳定增长）未提及。\n\n答案：C",
    materialId: "text1"
  }),
  base(22, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "AT&T is cited to show",
    options: [{ key: "A", text: "an immediate need for government support" }, { key: "B", text: "an alternative to the fire-and-hire strategy" }, { key: "C", text: "the characteristics of reskilling programs" }, { key: "D", text: "the importance of staff appraisal standards" }],
    answer: ["B"],
    explain: "解析：\n\n题目问的是“引用 AT&T 的例子是为了说明什么”。\n\n1. 定位原文内容\n原文第二段提到：\n\nFor individual companies, the temptation is always to let go of workers whose skills are no longer in demand and replace them with those whose skills are. That does not always happen. AT&T is often given as the gold standard of a company who decided to do a massive reskilling program rather than go with a fire-and-hire strategy, ultimately retraining 18,000 employees.\n\n2. 逻辑关系分析\n\n前面说：公司通常倾向于解雇技能过时的员工，然后招聘新员工（fire-and-hire）。\n\n接着转折说“这并不总是发生”，然后举出 AT&T 作为“黄金标准”的例子。\n\nAT&T 的做法是：大规模再培训，而不是采用“解雇再招聘”策略。\n\n3. 选项比对\n\nA. 政府支持的迫切需要 → 原文此处并未强调政府支持，而是讲企业自身的选择。\n\nB. 替代“解雇再招聘”策略的一种方案 → 符合原文逻辑，AT&T 的做法正是“不 fire-and-hire，而是 reskill”。\n\nC. 再培训项目的特征 → 原文没有详细描述 reskilling 项目的具体特征，只是说它规模大，是替代策略。\n\nD. 员工评估标准的重要性 → 原文未提及。\n\n因此正确答案是 B：AT&T 的例子是为了展示企业可以选择“再培训”作为“解雇再招聘”策略的替代方案。",
    materialId: "text1"
  }),
  base(23, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Efforts to resolve the skills mismatch in Canada",
    options: [{ key: "A", text: "have appeared to be insufficient" }, { key: "B", text: "have driven up labour costs" }, { key: "C", text: "have proved to be inconsistent" }, { key: "D", text: "have met with fierce opposition" }],
    answer: ["A"],
    explain: "解析：\n\n题目问的是“加拿大解决技能不匹配问题的努力”如何。\n文章第二段末尾明确提到：\n\nEfforts in Canada and elsewhere have been arguably languid at best, and have given us a situation where we frequently hear of employers begging for workers, even at times and in regions where unemployment is high.\n\n其中 languid 意思是“迟缓的、无力的”，也就是说这些努力最多只能算是“不够积极”或“不足”。\n选项 A. have appeared to be insufficient（显得不足）与原文意思完全一致。\n\n其他选项：\n\nB. have driven up labour costs（推高了劳动力成本）—— 原文未提及。\n\nC. have proved to be inconsistent（被证明不一致）—— 原文未强调“不一致”，而是强调“无力/不足”。\n\nD. have met with fierce opposition（遇到激烈反对）—— 原文未提及。\n\n因此正确答案是 A。",
    materialId: "text1"
  }),
  base(24, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "We can learn from Paragraph 3 that there was",
    options: [{ key: "A", text: "a sign of economic recovery" }, { key: "B", text: "a call for policy adjustment" }, { key: "C", text: "a change on hiring practice" }, { key: "D", text: "a lack of medical workers" }],
    answer: ["D"],
    explain: "解析：\n\n题目要求从第 3 段中推断出什么信息。我们来看第 3 段的内容：\n\n疫情前（2020 年 2 月），加拿大和美国失业率处于历史低位（3.5% 和 5.4%），到处都有劳动力短缺。\n\n到 2020 年 5 月，失业率飙升到 13.3% 和 13.7%，许多劳动力短缺消失了，但并非全部。\n\n紧接着举了一个明显的例子：在医疗领域，疫情意味着医生、护士和其他医务人员仍然明显短缺。\n\n因此，第 3 段明确说明在疫情期间，尽管整体失业率上升，但医疗工作者仍然短缺，即 D. a lack of medical workers（缺乏医务人员） 是符合原文的。\n\n其他选项分析：\n\nA. a sign of economic recovery（经济复苏的迹象）：文中没有提到经济复苏，而是说失业率大幅上升，与复苏相反。\n\nB. a call for policy adjustment（政策调整的呼吁）：第 3 段只是描述现象，没有提到呼吁政策调整。\n\nC. a change on hiring practice（招聘做法的改变）：第 3 段没有讨论招聘方式的变化，而是讲失业率与特定行业劳动力短缺并存的现象。\n\n答案：D",
    materialId: "text1"
  }),
  base(25, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Scandinavian Airlines decided to",
    options: [{ key: "A", text: "create job vacancies for the unemployed" }, { key: "B", text: "retrain their cabin staff for better services" }, { key: "C", text: "prepare their laid-off workers for other jobs" }, { key: "D", text: "finance their staff’s college education" }],
    answer: ["C"],
    explain: "解析：\n\n题目问的是“Scandinavian Airlines 决定做什么”。\n\n根据文章最后一段内容：\n\nwhen forced to furlough 90 per cent of their cabin staff, Scandinavian Airlines decided to start up a short retraining program that reskilled the laid-off workers to support hospital staff.\n\n这句话的意思是：\n\n他们让 90% 的客舱工作人员暂时休假（furlough），然后启动了一个短期再培训计划。\n\n这个计划让被裁的员工获得新技能，以支援医院工作人员。\n\n也就是说，航空公司为被解雇的员工提供再培训，使他们能够从事其他工作（这里是支援医院工作）。\n\n选项分析：\n\nA. create job vacancies for the unemployed\n错误，他们不是为失业者创造职位空缺，而是培训自己的员工去做其他工作。\n\nB. retrain their cabin staff for better services\n错误，培训目的不是为了让他们在航空公司提供更好的服务，而是为了支援医院，即转岗。\n\nC. prepare their laid-off workers for other jobs\n正确，与原文“reskilled the laid-off workers to support hospital staff”一致。\n\nD. finance their staff’s college education\n错误，文中只提到短期再培训计划，没有提到资助大学教育。\n\n因此正确答案是 C。",
    materialId: "text1"
  }),
  base(26, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Some people argue that food self-sufficiency in the UK would",
    options: [{ key: "A", text: "be hindered by its population growth" }, { key: "B", text: "contribute to the nation’s well-being" }, { key: "C", text: "become a priority of the government" }, { key: "D", text: "pose a challenge to its farming industry" }],
    answer: ["B"],
    explain: "让我们一步步分析。\n\n1. 题干定位\n题干说：\n\nSome people argue that food self-sufficiency in the UK would &mldr;\n\n在原文中，对应的是第二段：\n\nA move back to self-sufficiency, the argument goes, would boost the farming industry, political sovereignty and even the nation’s health.\n\n2. 选项分析\n\nA. be hindered by its population growth\n原文没有说自给自足会被人口增长阻碍，只是说全球人口到 2050 年会接近 100 亿，英国自给率下降，但这是背景，不是主张自给自足的人的观点。\n\nB. contribute to the nation’s well-being\n原文提到 “nation’s health” 以及 “political sovereignty” 和 “farming industry” 都会得到促进，这都属于国家的福祉（well-being），所以 B 正确。\n\nC. become a priority of the government\n文中没有提到政府优先事项，只是讨论可行性。\n\nD. pose a challenge to its farming industry\n这是后文分析可行性时指出的困难，不是主张自给自足的人的观点。\n\n3. 结论\n主张自给自足的人认为这会对国家有好处，所以答案是 B。",
    materialId: "text2"
  }),
  base(27, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The report by the University of Leeds shows that in the UK",
    options: [{ key: "A", text: "farmland has been inefficiently utilized" }, { key: "B", text: "factory-style production needs reforming" }, { key: "C", text: "most land is used for meat and dairy production" }, { key: "D", text: "more green fields will be converted for farming" }],
    answer: ["C"],
    explain: "解析：\n\n定位关键信息\n题目问的是“利兹大学的报告显示，在英国……”，因此需要找到文中关于利兹大学报告的描述。\n原文第三段第一句：\n\nAccording to a report on UK food production from the University of Leeds, UK, 85 per cent of the country’s total land area is associated with meat and dairy production.\n\n理解句子含义\n这句话的意思是：英国 85% 的土地面积与肉类和奶制品生产有关。\n也就是说，大部分土地用于肉类和奶制品生产。\n\n匹配选项\n\nA 项：农田利用效率低下（文中未直接讨论效率问题）\n\nB 项：工厂化生产需要改革（文中提到集约化生产，但未说需要改革）\n\nC 项：大部分土地用于肉类和奶制品生产（与原文 85% 对应）\n\nD 项：更多绿地将转为农田（与报告内容无关，且文中暗示这不可行）\n\n排除干扰\n虽然文中后面提到如果要提高自给率可能需要更集约化生产（即减少绿地、增加工厂化农场），但这不是利兹大学报告直接显示的，而是作者的分析。\n报告直接给出的信息就是 C 选项的内容。\n\n因此正确答案是 C。",
    materialId: "text2"
  }),
  base(28, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Crop-growing in the UK is restricted due to",
    options: [{ key: "A", text: "its farming technology" }, { key: "B", text: "its dietary tradition" }, { key: "C", text: "its natural conditions" }, { key: "D", text: "its commercial interests" }],
    answer: ["C"],
    explain: "让我们仔细分析文章内容。\n\n1. 定位相关信息\n题干问的是“Crop-growing in the UK is restricted due to”（英国农作物种植受限的原因是），我们需要找到文中关于英国种植农作物的限制因素的描述。\n\n2. 查找原文\n文章第五段提到：\n\nThere is a good reason why the UK is dominated by animal husbandry: most of its terrain doesn’t have the right soil or climate to grow crops on a commercial basis.\nJust 25 per cent of the country’s land is suitable for crop-growing, most of which is already occupied by arable fields.\n\n这里明确说明：英国大部分地区没有适合商业化种植农作物的土壤或气候，只有 25% 的土地适合种农作物。\n\n3. 选项分析\n\nA. its farming technology（农业技术）—— 文中未提及技术落后导致限制。\n\nB. its dietary tradition（饮食传统）—— 文中虽然提到动物性食品消费多，但这不是农作物种植受限的原因，而是结果或另一现象。\n\nC. its natural conditions（自然条件）—— 土壤和气候属于自然条件，与原文匹配。\n\nD. its commercial interests（商业利益）—— 文中提到“on a commercial basis”是指商业化种植的条件不具备，而不是商业利益导致限制。\n\n4. 结论\n限制英国农作物种植的主要原因是自然条件（土壤和气候），因此正确答案是 C。",
    materialId: "text2"
  }),
  base(29, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "It can be learned from the last paragraph that British people",
    options: [{ key: "A", text: "rely largely on imports for fresh produce" }, { key: "B", text: "enjoy a steady rise in fruit consumption" }, { key: "C", text: "are seeking effective ways to cut calorie intake" }, { key: "D", text: "are trying to grow new varieties of grains" }],
    answer: ["A"],
    explain: "解析：\n\n最后一段原文提到：\n\nJust 23 per cent of the fruit and vegetables consumed in the UK are currently home-grown, so even with the most extreme measures we could meet only 30 per cent of our fresh produce needs.\n\n这句话的意思是：\n\n英国目前只有 23% 的水果和蔬菜是本国自产的。\n\n即使采取极端措施，也只能满足 30% 的新鲜农产品需求。\n\n由此可推断，英国大部分水果和蔬菜（超过 70%）依赖进口，因此 A. rely largely on imports for fresh produce（新鲜农产品主要依赖进口）是正确的。\n\n其他选项分析：\n\nB：文中未提到水果消费量稳定增长。\n\nC：文中未提到人们在寻找减少热量摄入的有效方法，而是讨论食物自给问题。\n\nD：文中未提到英国在尝试种植新的谷物品种，而是说谷物等作物需要大量土地，而英国土地有限。\n\n因此正确答案是 A。",
    materialId: "text2"
  }),
  base(30, 'k-en-012', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The author’s attitude to food self-sufficiency in the UK is",
    options: [{ key: "A", text: "defensive" }, { key: "B", text: "doubtful" }, { key: "C", text: "tolerant" }, { key: "D", text: "optimistic" }],
    answer: ["B"],
    explain: "解析：\n\n文章主旨与作者立场\n文章讨论了英国实现粮食自给自足的可能性。作者引用了利兹大学的研究数据，指出英国大部分土地用于畜牧业，而适合种植作物的土地有限，即使采取极端措施（如砍伐森林、迁移居民），也只能将作物产量提高 30%，仍远不能满足需求。这些数据和论证表明，作者对英国实现粮食自给自足持怀疑态度。\n\n关键证据\n\n英国目前仅生产 60% 的粮食，且土地资源有限。\n\n即使全国覆盖畜牧业，也无法满足肉类和乳制品需求。\n\n转向植物性饮食的潜力有限，因为适合种植作物的土地仅占 25%。\n\n极端情况下，新鲜果蔬的自给率仅能提升至 30%，仍无法满足需求。\n\n态度判断\n作者通过客观数据和逻辑分析，指出英国实现粮食自给自足的诸多困难，语气中透露出对这一愿景的怀疑与否定，而非支持（A 防御性）、容忍（C）或乐观（D）。\n\n因此，正确答案是 B. doubtful（怀疑的）。",
    materialId: "text2"
  }),
  base(31, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "What is true about Wunderlist and Sunrise after their acquisitions?",
    options: [{ key: "A", text: "Their products were re-priced." }, { key: "B", text: "Their market values declined." }, { key: "C", text: "Their tech features improved." }, { key: "D", text: "Their engineers were retained." }],
    answer: ["D"],
    explain: "解析：\n\n题目问的是：Wunderlist 和 Sunrise 被收购后，哪一项描述是正确的？\n\n文章第二段提到：\n\nBoth apps, however, were later scrapped, after Microsoft said it had used their best features in its own products. Their teams of engineers stayed on, making them two of the many “acqui-hires” that the biggest companies have used to feed their insatiable hunger for tech talent.\n\n关键信息是：\n\n两款应用后来被废弃（scrapped），微软把它们的优秀功能整合进自己的产品。\n\n它们的工程师团队留了下来（stayed on），属于“收购式招聘”（acqui-hire）。\n\n对应选项：\nA. 产品重新定价 → 未提及。\nB. 市场价值下降 → 未直接提及，且它们被关停，不是市场价值问题。\nC. 技术特性提升 → 未提及，是微软的产品用了它们的技术，不是它们本身提升。\nD. 工程师被保留 → 与原文 “Their teams of engineers stayed on” 一致。\n\n因此正确答案是 D。",
    materialId: "text3"
  }),
  base(32, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Microsoft’s critics believe that the big tech companies tend to",
    options: [{ key: "A", text: "eliminate their potential competitors." }, { key: "B", text: "exaggerate their product quality." }, { key: "C", text: "treat new tech talent unfairly." }, { key: "D", text: "ignore public opinions." }],
    answer: ["A"],
    explain: "解析：\n\n题目问的是 微软的批评者认为大型科技公司倾向于做什么。\n根据原文第三段第一句：\n\nTo Microsoft’s critics, the fates of Wunderlist and Sunrise are examples of a remorseless drive by Big Tech to chew up any innovative companies that lie in their path.\n\n这里的 chew up any innovative companies that lie in their path 意思就是“吞掉/消灭任何挡路的创新公司”，即 消除潜在竞争对手。\n\n另外，第七段也明确提到：\n\nHowever, critics say that the big companies use such deals to buy their most threatening potential competitors before their businesses have a chance to gain momentum, in some cases as part of a “buy and kill” tactic to simply close them down.\n\n这直接对应选项 A. eliminate their potential competitors（消除潜在竞争对手）。\n\n其他选项：\n\nB（夸大产品质量）文中未提及。\n\nC（不公平对待新技术人才）不是批评者的核心论点。\n\nD（忽视公众舆论）文中未涉及。\n\n因此正确答案是 A。",
    materialId: "text3"
  }),
  base(33, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Paul Arnold is concerned that small acquisitions might",
    options: [{ key: "A", text: "weaken big tech companies." }, { key: "B", text: "harm the national economy." }, { key: "C", text: "worsen market competition." }, { key: "D", text: "discourage start-up investors" }],
    answer: ["B"],
    explain: "我们先定位文中关于 Paul Arnold 的内容。\n\n原文相关段落：\n\nLike other startup investors, Mr. Arnold’s own business often depends on selling startups to larger tech companies, though he admits to mixed feelings about the result. “I think these things are good for me, if I put my selfish hat on, But are they good for the American economy? I don’t know.”\n\n这里 Paul Arnold 在承认这种收购对他个人（作为投资者）有利的同时，提出了一个疑问：这些收购对美国经济是否有好处？\n这表明他担心（concerned）这类小规模收购可能对国家经济有害，尽管他还不确定。\n\n选项分析：\nA. weaken big tech companies → 文中没有说削弱大公司，反而大公司因此更强。\nB. harm the national economy → 对应他质疑“对美国经济好吗？不知道”，说明他担忧可能有害。\nC. worsen market competition → 虽然收购减少了潜在竞争，但 Arnold 的担忧是从国家经济角度说的，不是直接说“恶化市场竞争”。\nD. discourage start-up investors → 没有提到会打击投资者，反而投资者能通过收购退出获利。\n\n因此，正确选项是 B. harm the national economy。",
    materialId: "text3"
  }),
  base(34, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "The US Federal Trade Commission intends to",
    options: [{ key: "A", text: "limit Big Tech’s expansion." }, { key: "B", text: "examine small acquisitions." }, { key: "C", text: "encourage research collaboration." }, { key: "D", text: "supervise start-ups’ operations." }],
    answer: ["B"],
    explain: "解析：\n\n题目问的是“美国联邦贸易委员会（FTC）打算做什么”，我们需要在文中找到与FTC意图相关的描述。\n\n文章第五段提到：\n“The US Federal Trade Commission says it wants to find the answer to that question. This week, it asked the five most valuable US tech companies for information about their many small acquisitions over the past decade.”\n这句话明确指出，FTC 想要了解这些大公司对小公司的收购是否对经济有利，因此要求五家科技巨头提供过去十年间小型收购的信息。\n\n选项分析：\n\nA. limit Big Tech’s expansion（限制大型科技公司的扩张）—— 文中只说FTC在收集信息，并未提到要限制扩张。\n\nB. examine small acquisitions（审查小型收购）—— 与原文“要求提供小型收购的信息”一致，FTC的目的就是调查这些收购的影响。\n\nC. encourage research collaboration（鼓励研究合作）—— 文中未提及。\n\nD. supervise start-ups’ operations（监督初创公司的运营）—— 文中FTC关注的是大公司收购小公司的行为，而不是直接监督初创公司运营。\n\n因此，正确答案是 B。",
    materialId: "text3"
  }),
  base(35, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "For the five biggest tech companies, their small acquisitions have",
    options: [{ key: "A", text: "generated considerable profits." }, { key: "B", text: "raised few management challenges." }, { key: "C", text: "set an example for future deals." }, { key: "D", text: "brought little financial pressure." }],
    answer: ["D"],
    explain: "我们先看题干问的是：对于五大科技公司来说，它们的小型收购带来了什么。\n\n文中与“小型收购”相关的关键信息出现在第六段：\n\nBetween them, the five companies … have spent an average of only $3.4bn a year on sub-$1bn acquisitions over the past five years — a drop in the ocean compared with their massive financial reserves, and the more than $130bn of venture capital that was invested in the US last year.\n\n这句话的意思是：五大公司每年在“低于 10 亿美元”的收购上平均花费 34 亿美元，但这对它们的巨额现金储备来说只是“九牛一毛”（a drop in the ocean）。\n\n也就是说，这些小型收购对它们的财务压力极小。\n\n选项分析：\n\nA. generated considerable profits.\n→ 文中未提这些小收购是否带来大量利润，只提了可能是为了消除竞争或获取人才。\n\nB. raised few management challenges.\n→ 未提及管理挑战的问题。\n\nC. set an example for future deals.\n→ 未提及是否成为未来交易的范例。\n\nD. brought little financial pressure.\n→ 与“a drop in the ocean”对应，即几乎没有财务压力。\n\n因此正确答案是 D。",
    materialId: "text3"
  }),
  base(36, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Nalini Ambady’s study deals with",
    options: [{ key: "A", text: "the reliability of first impressions." }, { key: "B", text: "people’s ability to influence others." }, { key: "C", text: "instructor-student interaction." }, { key: "D", text: "the power of people’s memory." }],
    answer: ["A"],
    explain: "解析：\n\n题目问的是 Nalini Ambady 的研究是关于什么内容的。\n文章第一段介绍了她的实验：让参与者观看教授上课的 10 秒无声视频片段，然后对教师的整体教学效果评分，结果这些评分与学期末学生的评价高度相关。\n即使让另一组参与者分心做数学计算（占用工作记忆），他们的评分准确性仍然很高，这说明人们能通过极短时间的观察（thin slicing）形成准确的印象。\n\n第二段进一步说明，当要求参与者写下判断理由时，准确性反而大幅下降，这说明第一印象的直觉判断是可靠的，而过度思考会干扰这种能力。\n\n因此，Ambady 的研究核心是 第一印象的可靠性，对应选项 A。\n\n其他选项：\n\nB（人们影响他人的能力）未在研究中涉及。\n\nC（师生互动）只是实验材料，不是研究主题。\n\nD（记忆力）在实验中只是作为干扰任务出现，不是研究重点。\n\n正确答案：A",
    materialId: "text4"
  }),
  base(37, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "In Ambady’s study, rating accuracy dropped when participants",
    options: [{ key: "A", text: "discussed with one another." }, { key: "B", text: "gave the rating in limited time." }, { key: "C", text: "watched shorter video clips." }, { key: "D", text: "focused on specific details" }],
    answer: ["D"],
    explain: "解析：\n\n题干问的是“在 Ambady 的研究中，参与者的评分准确性在什么时候下降”。\n\n根据文章第一段和第二段：\n\n第一组参与者只看 10 秒无声视频片段给教授评分，结果与学期末学生评价高度相关。\n\n第二组参与者边看视频边做倒数任务（占用工作记忆），评分准确性不受影响，说明社会直觉处理是自动的。\n\n关键在第三组：要求他们花一分钟写下评分理由，结果准确性显著下降。\n\nAmbady 认为，这是因为刻意思考让他们关注到鲜明但误导性的线索（如某些手势或话语），而不是让复杂微妙的信号自然形成整体印象。\n\n因此，准确性下降的原因是他们聚焦于具体细节，对应选项 D. focused on specific details。\n\n其他选项：\nA. discussed with one another（文中未提及互相讨论）\nB. gave the rating in limited time（不是限时导致，而是写理由导致）\nC. watched shorter video clips（研究没有比较不同视频长度对同一任务的影响）\n\n答案：D",
    materialId: "text4"
  }),
  base(38, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "Judith Hall mentions driving to show that",
    options: [{ key: "A", text: "deception is difficult to detect." }, { key: "B", text: "memory can be selective." }, { key: "C", text: "social skills must be cultivated." }, { key: "D", text: "reflection can be distracting." }],
    answer: ["D"],
    explain: "解析：\n\n题目问 Judith Hall 提到“开车”是为了说明什么。\n\n原文中 Judith Hall 说：\n\n“It’s as if you’re driving a stick shift, and if you start thinking about it too much, you can’t remember what you’re doing. But if you go on automatic pilot, you’re fine. Much of our social life is like that.”\n\n这里的比喻意思是：\n\n开手动挡汽车时，如果过度思考换挡动作，反而会忘记正在做什么。\n\n但如果依靠自动化的直觉（自动模式），就能顺利驾驶。\n\n社会生活中的很多判断也是如此，直觉更有效，反思反而会干扰。\n\n因此，这个例子是为了说明 反思（reflection）会干扰（distracting） 某些直觉性的、自动化的处理过程。\n\n对应选项：\nD. reflection can be distracting（反思可能分散注意力/造成干扰）\n\nA、B、C 三项在文中均未通过这个比喻体现，因此正确答案是 D。",
    materialId: "text4"
  }),
  base(39, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "When you are making complex decisions, it is advisable to",
    options: [{ key: "A", text: "collect enough data." }, { key: "B", text: "list your preferences." }, { key: "C", text: "follow your feelings." }, { key: "D", text: "seek expert advice." }],
    answer: ["C"],
    explain: "解析：\n\n题目问的是“当你做复杂决定时，建议怎么做”。\n\n文章第四段提到：\n\nAnd people made car-buying decisions that were both objectively better and more personally satisfying when asked to focus on their feelings rather than on details, but only if the decision was complex - when they had a lot of information to process.\n\n这句话明确说明，在复杂决策（信息量很大）时，关注感受（focus on their feelings） 比关注细节更好，结果更令人满意。\n\n选项分析：\n\nA. collect enough data → 与文中建议相反，文中说信息很多时不要过多分析细节。\n\nB. list your preferences → 文中未提及列偏好清单，且与“凭直觉/感受”不符。\n\nC. follow your feelings → 对应 focus on their feelings，是文中建议。\n\nD. seek expert advice → 文中未建议寻求专家意见，只在果酱和课程评价中提到过专家意见作为比较标准，但不是对复杂决策的建议。\n\n因此正确答案是 C。",
    materialId: "text4"
  }),
  base(40, 'k-en-011', {
    type: 'single', difficulty: 2, score: 2,
    stem: "What can we learn from the last paragraph?",
    options: [{ key: "A", text: "Intuition may affect reflective tasks." }, { key: "B", text: "Generating new products takes time." }, { key: "C", text: "Vocabulary comprehension needs creativity." }, { key: "D", text: "Objective thinking may boost intuitiveness." }],
    answer: ["A"],
    explain: "让我们先看最后一段的内容：\n\nIntuition’s special powers are unleashed only in certain circumstances. In one study, participants completed a battery of eight tasks, including four that tapped reflective thinking (discerning rules, comprehending vocabulary) and four that tapped intuition and creativity (generating new products or figures of speech). Then they rated the degree to which they had used intuition (“gut feeling,” hunches,\" “my heart”). Use of their gut hurt their performance on the first four tasks, as expected, and helped them on the rest. Sometimes the heart is smarter than the head.\n\n关键信息提取：\n\n实验包含两类任务：\n需要反思性思维的任务（如理解规则、词汇理解）\n\n需要直觉和创造力的任务（如生成新产品、修辞手法）\n\n结果：\n凭直觉做前四类（反思性任务）会损害表现\n\n凭直觉做后四类（创造性任务）有帮助\n\n结论：直觉只在某些情况下有用，在需要反思的任务中反而有害。\n\n选项分析：\nA. Intuition may affect reflective tasks.\n（直觉可能影响反思性任务）\n→ 文中明确说“Use of their gut hurt their performance on the first four tasks”，即直觉损害了反思性任务的表现，所以“affect”在这里是“影响（负面）”的意思，符合文意。\n\nB. Generating new products takes time.\n→ 文中未提及所需时间，无关信息。\n\nC. Vocabulary comprehension needs creativity.\n→ 文中词汇理解属于反思性任务，依赖直觉反而不好，所以此选项与文意相反。\n\nD. Objective thinking may boost intuitiveness.\n→ 文中未讨论客观思维提升直觉，且逻辑与实验结论不符。\n\n因此正确答案是 A。",
    materialId: "text4"
  }),
  base(41, 'k-en-013', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "2021 Part B 新题型：根据材料完成 41–45 题。",
    referenceAnswer: "【文章总体分析】\n\n来源：Harvard Business Review《哈佛商业评论》2016年3月17日文章《How to Disagree with Someone More Powerful than You》（如何向比你更有权力的人表达不同意见）。\n主题：如何恰当地向上司表达反对意见。\n脉络：文章首段引出话题“如何向上司表达反对意见”，随后分段列出合理提出异议的方法和技巧，内容涵盖“进言前的准备”到“进言时的言行举止”。\n\n【题目精解】\n\n41. [答案] E\n【解析】\n第二段指出，如果尚未充分考虑问题、想先了解同事看法，或身处会议室等公共场合，最好暂缓提出反对意见，即等待合适的时机或场合。E项“决定是否等待”与该段主旨相符，其中“Decide”原词复现首句“You may decide”，“wait”近义复现“hold off on”和“delay”。\n\n【干扰项分析】\n\nB项“保持谦卑”虽能解释暂缓提异议的部分原因（避免让上司感到受威胁），但全段重点在于客观时机或场合不合适，而非主观表现谦卑态度，且第一条原因（②至④句）未体现“谦卑”，故排除。\n\nC项“务实对待风险”看似合理，但本段并未全面评估向上司表达异议的风险，而是侧重介绍具体做法，故不选。\n\nD项“确定共同目标”仅能对应③④句“众人为共同目标齐心协力”，无法概括全段“何时需暂缓表达异议”的主旨，故排除。\n\n42. [答案] D\n【解析】\n第三段建议在进言前先了解上司关注的目标，并将个人异议与该目标相结合，进言时明确说明二者的关联，以表明自己是努力推进共同目标的同事。D项“确定共同目标”准确概括本段主旨。\n\n43. [答案] F\n【解析】\n第四段评价“这一做法”看似过于顺从，实则是给予上司心理安全感的明智之举，并通过举例说明如何向上司请求表达异议的许可。F项“请求允许表达异议”与该段主旨一致，其中“Ask permission”与“Would that be OK”的请求之意相符。\n\n【干扰项分析】\n\nB项“保持谦卑”虽近义复现段首“deferential”，也与“would like to”等体现的谦恭态度相符，但全段重点在于“征得表达异议的许可”，而非单纯强调谦卑，故排除。\n\n44. [答案] A\n【解析】\n第五段指出向上司提异议时应尽力保持镇定，避免紧张情绪影响沟通效果，并提出深呼吸、放慢语速等具体建议。A项“保持冷静”准确概括本段主旨。\n\n45. [答案] B\n【解析】\n第六段建议读者强调自己仅提供“个人观点”而非“绝对真理”，采用试探性表达、收敛自信，并耐心倾听对方意见甚至批评。B项“保持谦逊”准确概括这些建议，其中“Stay humble”近义复现“understate your confidence”。\n\n【干扰项分析】\n\nG项“不要下评判”看似与“不将自己的观点视作真理”一致，但段落重点在于谦恭陈述己见并乐于接受他人观点，而非评判他人意见，故排除。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }], materialId: "partB"
  }),
  base(46, 'k-en-014', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "2021 Part C 翻译：将下面短文译成汉语。",
    referenceAnswer: "【原文分析】\n本文节选自《今日心理学》旗下网站 Psychology Today 2016年4月21日文章《为何要与陌生人交谈》。文章指出，虽然亲友常被视为情感支持的主要来源，但研究发现与陌生人互动也能显著提升情绪与归属感。语言贴近生活，但句式结构较复杂，需注意汉语语序调整与逻辑衔接。\n\n【参考译文】\n我们往往认为，朋友和家人是人际关系、快乐与温暖最重要的源泉。这话固然不假，但研究人员最近还发现：与陌生人交流，其实能带来意想不到的心情提升和归属感。在一系列研究中，研究者要求芝加哥乘坐公共交通工具的通勤者与身旁的人交谈。结果显示，平均而言，遵照指示的参与者比那些被要求保持沉默的人感觉更佳。研究者还指出，我们之所以回避与陌生人随意交流，往往源于一种不必要的忧虑——担心对方不愿搭理自己。然而多数时候，这种想法并不正确。事实上，很多人其实非常乐意交谈，甚至因受到你的关注而感到荣幸。\n\n【翻译要点】\n\n“brings a boost in mood and feelings of belonging” 译为“带来心情提升和归属感”，以动词结构强化动态表达；\n\n“strike up a conversation” 译为“交谈”，未直译“开启对话”，更符合汉语习惯；\n\n“misplaced anxiety” 译为“不必要的忧虑”，准确传达原文中“错误定位的焦虑”含义；\n\n末句“flattered” 译为“感到荣幸”，既保留积极情感，又避免“奉承”的贬义色彩。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }], materialId: "partC"
  }),
  base(47, 'k-en-015', {
    type: 'subjective', difficulty: 3, score: 10,
    stem: "Directions\n\nSuppose you are organizing an online meeting. Write an email to Jack, an international student, to\n\ninvite him to participate, and\n\ntell him the details.\n\nYou should write about 100 words on the ANSWER SHEET.\n\nDo not use your own name. Use “Li Ming” instead.\n\nDo not write your address. (10 points)",
    referenceAnswer: "解析\n\n一、归纳要点\n\n格式：书信（邀请信）。\n\n语域：面向国际学生及同辈的公务信函，应使用正式语体，同时保持礼貌亲切。\n\n内容要点：\n邀请收信人参加线上会议；\n\n说明会议的具体安排与细节。\n\n二、行文思路\n\n第一段：表明写作目的，发出邀请，并简要介绍会议的基本信息（时间、方式等）。\n\n第二段：阐述会议主题、目的及具体内容，鼓励对方参与交流。\n\n第三段：表达期待，并附上相关安排供参考。\n\n三、参考范文\n\nDear Jack,\n\nAs an organizer of our monthly reading session, I am writing to invite you to our online meeting scheduled for next Friday from 2 p.m. to 4 p.m. via Zoom.\n\nWith the theme of “A Famous Writer from Your Country,” this meeting aims to expose participants to writers and works from diverse cultures. Attendees from various backgrounds will gather to engage in cross-cultural exchanges and deepen their understanding of literature. As a literary enthusiast, you are highly welcome to share your insights into the differences between English and Chinese literature.\n\nThe meeting arrangements are attached for your reference. We would be very pleased if you could accept our invitation.\n\nYours sincerely,\nLi Ming\n\n四、写作储备\n\n1. 开篇段常用表达（说明写作目的）\n\nOn behalf of&mldr;, I am writing to extend to you an official invitation to&mldr;\n\nWe sincerely invite you to attend&mldr; located at (place) on (date).\n\n2. 中间段常用表达（活动内容与安排）\n\nHosted by&mldr;, this meeting is aimed at&mldr;\n\nDuring the meeting, participants will&mldr;\n\n3. 结尾段常用表达（表达期待）\n\nWe will be greatly honored if you could attend our meeting.\n\nAn early reply would be much appreciated. We look forward to your attendance.",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 10 }]
  }),
  base(48, 'k-en-016', {
    type: 'subjective', difficulty: 3, score: 15,
    stem: "Directions\n\nWrite an essay based on the chart below. In your writing, you should\n\ninterpret the chart, and\n\ngive your comments.\n\nYou should write about 150 words on the ANSWER SHEET. (15 points)\n\n(图表为“某市居民体育锻炼方式调查”，展示了不同锻炼方式的占比情况：“独自锻炼”占比54.3%；“和朋友一起”占比47.7%；“和家人一起”占比28.9%；“团队活动”占比16.8%。)\n\n（图：见原题）",
    referenceAnswer: "图表解读\n该图表揭示了某市居民在体育锻炼方式选择上的显著倾向。数据显示，“独自锻炼”以54.3%的占比成为最主流的方式，远超“和朋友一起”（47.7%）、“和家人一起”（28.9%）及“团队活动”（16.8%）。这表明，居民普遍偏好灵活性高、不受他人约束的锻炼形式。\n\n现象分析\n人们更倾向于独自锻炼，主要源于其便利性与自主性。现代生活节奏快，个人时间难以协调，独自锻炼无需迁就他人日程，可随时随地进行。此外，健身视频、运动APP及便携器材的普及，使家庭健身成为便捷选择。相比之下，团队活动因需集体协调，门槛较高。\n\n另一值得注意的现象是，与朋友锻炼的比例明显高于家人。这可能由于家人间存在作息、年龄及健身习惯差异，或部分人与家人分居两地。而与朋友结伴则既能相互督促，又更具社交乐趣。\n\n趋势评论\n在当今繁忙的社会中，独自锻炼因其高效灵活，预计将持续流行。然而，若有条件，结伴锻炼亦有其优势——不仅能通过相互督促提升动力，还能增进情感交流。因此，理想的模式或许是在享受独自锻炼自由的同时，适时寻找伙伴，以保持运动的积极性与乐趣。",
    explain: '本题为主观题，请对照参考答案与评分要点自行估分。',
    rubric: [{ text: '对照参考范文/译文自评', points: 15 }],
    figures: [{ src: A + "_shared/images/english/e2_2021_48.png", alt: '作文图表' }]
  }),
]

export const questions2021_en2 = raw.map(q => q.materialId
  ? { ...q, material: MATERIALS[q.materialId] }
  : q)

export const paper2021_en2 = {
  id: P, year: Y,
  title: '2021 年全国硕士研究生招生考试 英语（二）',
  short: '2021 英语二原卷', group: 'en', subjects: ['en'],
  durationMin: 180, totalScore: 100,
  questionCount: questions2021_en2.length,
  qids: questions2021_en2.map(q => q.id),
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
