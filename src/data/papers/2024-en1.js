const P = 'paper-2024-en1'
const Y = 2024
const SRC = 'http://gw.xztu.edu.cn/__local/D/E7/8F/6B6587FC3240F79352945961A9A_F9522866_48FEEC.pdf'
const ANS = 'https://kaoyan.eol.cn/shiti/yingyu/202312/t20231226_2551123.shtml'

const MATERIALS = {
  cloze: {
    key: 'en1-cloze',
    title: 'Section I · Use of English',
    wide: true,
    autoFocus: true,
    blocks: [{
      label: 'Text',
      text: `There's nothing more welcoming than a door opening for you. __1__ the need to be touched to open or close, automatic doors are essential in __2__ disabled access to buildings and helping provide general __3__ to commercial buildings.

Self-sliding doors began to emerge as a commercial product in 1960 after being invented six years __4__ by two Americans Dee Horton and Lew Hewitt. They __5__ as a novelty feature, but as their use has grown, their __6__ have extended within our technologically advanced world. Particularly __7__ in busy locations or during times of emergency, the doors __8__ crowd management by reducing the obstacles put in people's way.

__9__ making access both in and out of buildings easier for people, the difference in the way many of these doors open helps reduce the total area __10__ by them. Automatic doors often open to the side, with the panels sliding across one another. Replacing swing doors, these __11__ smaller buildings to maximise the usable space inside without having to __12__ the way for a large, sticking-out door. There are many different types of automatic door, with each __13__ specific signals to tell them when to open. __14__ these methods differ, the main __15__ remain the same.

Each automatic door system __16__ the light, sound, weight or movement in their vicinity as a signal to open. Sensor types are chosen to __17__ the different environments they are needed in. __18__, a busy street might not __19__ a motion-sensored door, as it would constantly be opening for passers-by. A pressure-sensitive mat would be more __20__ to limit the surveyed area.`
    }]
  },

  text1: {
    key: 'en1-text1',
    title: 'Text 1 · The price of nails',
    wide: true,
    blocks: [{
      label: 'Passage',
      text: `Nearly 2000 years ago, as the Romans began to pull out of Scotland, they left behind a curious treasure: 10 tons of nails, nearly a million of the things. The nail hoard was discovered in 1960 in a four-metre-deep pit covered by two metres of gravel.

Why had the Romans buried a million nails? The likely explanation is that the withdrawal was rushed, and they didn't want the local Caledonians getting their hands on 10 tons of weapon-grade iron. The Romans buried the nails so deep that they would not be discovered for almost two millennia.

Later civilisations would value the skilled blacksmith's labour in a nail even more than the raw material. As Roma Agrawal explains in her new delightful book Nuts and Bolts, early 17th-century Virginians would sometimes burn down their homes if they were planning to relocate. This was an attempt to recover the valuable nails, which could be reused after sifting the ashes. The idea that one might burn down an entire house just to reclaim the nails underlines how scarce, costly and valuable the simple-seeming technology was.

The price of nails fell by 90% between the late 1700s and mid-1900s, as economist Daniel Sichel points out in a research paper. According to Sichel, although the falling price of nails was driven partly by cheaper iron and cheaper energy, most of the credit goes to nail manufacturers who simply found more efficient ways to turn steel into nails.

Nails themselves have changed over the years, but Sichel studied them because they haven't changed much. Roman lamps and Roman chariots are very different from LED strips and sports cars, but Roman nails are still clearly nails. It would be absurd to try to track the changing price of sports cars since 1695, but to ask the same question of nails makes perfect sense.

I make no apology for being obsessed by a particular feature of these objects: their price. I am an economist, after all. After writing two books about the history of inventions, one thing I've learnt is that while it is the enchantingly sophisticated technologies that get all the hype, it's the cheap technologies that change the world.

The Gutenberg printing press transformed civilisation not by changing the nature of writing but by changing its cost—and it would have achieved little without a parallel collapse in the price of surfaces to write on, thanks to an often-overlooked technology called paper. Solar panels had few niche uses until they became cheap; now they are transforming the global energy system.`
    }]
  },

  text2: {
    key: 'en1-text2',
    title: 'Text 2 · Learning from hunter-gatherers',
    wide: true,
    blocks: [{
      label: 'Passage',
      text: `Parenting tips obtained from hunter-gatherers in Africa may be the key to bringing up more contented children, researchers have suggested. The idea is based on studies of communities such as the Kung of Botswana, where each child is cared for by many adults. Kung children as young as four will help to look after younger ones and "baby-wearing", in which infants are carried in slings, is considered the norm.

According to Dr Nikhil Chaudhary, an evolutionary anthropologist at Cambridge University, these practices, known as alloparenting, could lead to less anxiety for children and parents.

Dr Annie Swanepoel, a child psychiatrist, believes that there are ways to incorporate them into western life. In Germany, one scheme has paired an old people's home with a nursery. The residents help to look after the children, an arrangement akin to alloparenting. Another measure could be encouraging friendships between children in different school years to mirror the unsupervised mixed-age playgroups in hunter-gatherer communities.

In a paper published in the Journal of Child Psychology and Psychiatry, researchers said that the western nuclear family was a recent invention which broke with evolutionary history. This abrupt shift to an "intensive mothering narrative", which suggests that mothers should manage childcare alone, was likely to have been harmful. "Such narratives can lead to maternal exhaustion and have dangerous consequences," they wrote.

By contrast, in hunter-gatherer societies adults other than the parents can provide almost half of a child's care. One previous study looked at the Efé people of the Democratic Republic of Congo. It found that infants had an average of 14 alloparents a day by the time they were 18 weeks old and were passed between caregivers eight times an hour.

Chaudhary said that parents now had less childcare support from family and social networks than during most of humans' evolutionary history, but introducing additional caregivers could reduce stress and maternal depression, which could have a "knock-on" benefit to a child's wellbeing. An infant born to a hunter-gatherer society could have more than ten caregivers—this contrasts starkly to nursery settings in the UK where regulations call for a ratio of one carer to four children aged two to three.

While hunter-gatherer children learnt from observation and imitation in mixed-age playgroups, researchers said that western "instructive teaching", where pupils are asked to sit still, may contribute to conditions such as attention deficit hyperactivity disorder. Chaudhary said that Britain should explore the possibility that older siblings helping their parents "might also enhance their own social development."`
    }]
  },

  text3: {
    key: 'en1-text3',
    title: 'Text 3 · Artists and AI generators',
    wide: true,
    blocks: [{
      label: 'Passage',
      text: `Rutkowski is a Polish digital artist who uses classical painting styles to create dreamy fantasy landscapes. He has made illustrations for games such as Sony's Horizon Forbidden West, Ubisoft's Anno, Dungeons & Dragons, and Magic: The Gathering. And he's become a sudden hit in the new world of text-to-image AI generation.

His distinctive style is now one of the most commonly used prompts in the new open-source AI art generator Stable Diffusion, which was launched late last month. The tool, along with other popular image-generation AI models, allows anyone to create impressive images based on text prompts. For example, type in "Wizard with sword and a glowing orb of magic fire fights a fierce dragon Greg Rutkowski," and the system will produce something that looks not a million miles away from works in Rutkowski's style.

But these open-source programs are built by scraping images from the Internet, often without permission and proper attribution to artists. As a result, they are raising tricky questions about ethics and copyright. And artists like Rutkowski have had enough.

According to the website Lexica, which tracks over 10 million images and prompts generated by Stable Diffusion, Rutkowski's name has been used as a prompt around 93,000 times. Some of the world's most famous artists, such as Michelangelo, Pablo Picasso, and Leonardo da Vinci, brought up around 2,000 prompts each or less. Rutkowski's name also features as a prompt thousands of times in the Discord of another text-to-image generator, Midjourney. Rutkowski was initially surprised but thought it might be a good way to reach new audiences. Then he tried searching for his name to see if a piece he had worked on had been published. The online search brought back work that had his name attached to it but wasn't his.

"It's been just a month. What about in a year? I probably won't be able to find my work out there because [the internet] will be flooded with AI art," Rutkowski says. "That's concerning."

"There is a coalition growing within artist industries to figure out how to tackle or mitigate this," says Ortiz. The group is in its early days of mobilization, which could involve pushing for new policies or regulation. One suggestion is that AI models could be trained on images in the public domain, and AI companies could forge partnerships with museums and artists, Ortiz says.`
    }]
  },

  text4: {
    key: 'en1-text4',
    title: 'Text 4 · The Chesapeake Bay',
    wide: true,
    blocks: [{
      label: 'Passage',
      text: `The miracle of the Chesapeake Bay lies not in its depths, but in the complexity of its natural construction, the interaction of fresh and saline water and the mix of land and water. The shallows provide homes for hundreds of species while storing floodwaters, filtering pollutants from water, and protecting nearby communities from potentially destructive storm surges.

All this was put at great risk late last month, when the US Supreme Court issued a ruling in an Idaho case that provides the EPA far less authority to regulate wetlands and waterways. Specifically, a 5-4 majority decided that wetlands protected by the EPA under the Clean Water Act authority must have a "continuous surface connection" to bodies of water. This narrowing of the regulatory scope was a victory for builders, mining operators and other commercial interests often at odds with environmental rules. And it carries "significant repercussions for water quality and flood control throughout the US," as Justice Brett Kavanaugh observed.

In Maryland, the good news is that there are many state laws in place that provide wetlands protections. But that's a very shortsighted view, particularly when it comes to the Chesapeake Bay. The reality is that water and the pollutants that so often come with it, don't respect state boundaries. The Chesapeake draws from a 64,000-square-mile watershed that extends to Virginia, Pennsylvania, New York, West Virginia, the District of Columbia and Delaware. Will those jurisdictions extend the same protections now denied under Sackett v. EPA? Perhaps some, but all? That seems unlikely.

It is too easy, and misleading, to see such court rulings as merely standing up for the rights of land owners when the consequences can be so dire for their neighbors. And it's reminder that the EPA's involvement in the Chesapeake Bay program has long been crucial as the means to transcend the influence of deep-pocketed special interests in neighboring states. Pennsylvania farmers, to use one telling example, aren't thinking about next year's blue crab harvest in Maryland when they decide whether to spread animal waste on their fields, yet the runoff into nearby creeks can have enormous impacts downstream.

And so we would also call on state lawmakers from Richmond to Albany to consider reviewing their own wetlands protections and see for themselves the enormous stakes involved. We can't offer them a trip to the Chesapeake Bay model. It's been gone since the 1980s but perhaps a visit to Blackwater National Wildlife Refuge in Dorchester County where American bald eagles fly over tidal marshes so shallow you could not paddle a boat across them but teaming with aquatic life. It's worth the scenic drive.`
    }]
  },

  partB: {
    key: 'en1-partB',
    title: 'Part B · Museum comments',
    wide: true,
    blocks: [{
      label: 'Comments',
      text: `(41) Hannah

Simply, there are people in Nigeria who cannot travel to the Smithsonian Institution to see that part of their history and culture represented by the Benin Bronzes. These should be available to them as part of their cultural heritage and history and as a source of national pride. There is no good reason that these artifacts should be beyond the ordinary reach of the educational objectives or inspiration of the generations to which they were left. They serve no purpose in a museum in the United States or elsewhere except as curious objects. They cannot be compared to works of art produced for sale which can be passed from hand to hand and place to place by purchase.

(42) Buck

We know very exact reproductions of artwork can be and are regularly produced. Perhaps museums and governments might explore some role for the use of nearly exact reproductions as a means of resolving issues relating to returning works of art and antiquities. The context of any exhibit is more important to me than whether the object being displayed is 2,000 years old or 2 months old. In many cases the experts have a hard time agreeing on what is the real object and what is a forgery. Again, the story an exhibit is trying to tell is what matters. The monetary value of the objects on display is a distant second place in importance.

(43) Sara

When visiting the Baltimore Museum of Art, I came across a magnificent 15th-century Chinese sculpture. It inspired me to learn more about the culture that it represented. Artifacts in museums have the power to inspire, and perhaps spark that need to learn and understand the nature of their creators. Having said that, I do feel that whatever artifacts find their way to public museums should, in fact, be sanctioned as having been obtained on loan, legally purchased, or obtained by treaty. Stealing artifacts from other peoples' cultures is obscene; it robs not only the physical objects, but the dignity and spirit of their creators.

(44) Victor

Ancient art that is displayed in foreign countries by all means should be returned to the original country. The foreign countries have no right to hold back returning the items. I would ask that the foreign nations and the original country discuss the terms of transfer. Yes, there is the risk that the original country will not have as good security as do the foreign countries. But look at what happened to Boston's Gardner Museum theft in 1990, including the loss of Rembrandt, Vermeer, Manet, and other masterpieces. Nothing is absolutely safe anywhere, and now Climate Change agitators are attacking publicly displayed work in European museums.

(45) Julia

To those of you in the comments section who are having strong feelings about artifacts being removed from cities in the US and Britain and returned to their countries of origin, I would ask you to consider: why do you think Americans have more of a right to easily access the Benin Bronzes than people of Nigeria? Why are people who live within a day's drive of London entitled to go and see the Elgin Marbles whenever they want, but the people of Athens aren't? What intrinsic factors make the West a suitable home for these artifacts but preclude them from being preserved and displayed by their countries of origin? If your conclusion is that the West is better able to preserve these artifacts, think about why you're assuming that to be true.`
    }]
  },

  partC: {
    key: 'en1-partC',
    title: 'Part C · Elephants never forget',
    wide: true,
    blocks: [{
      label: 'Passage',
      text: `"Elephants never forget"—or so they say—and that piece of folklore seems to have some foundation.

The African savanna elephant, also known as the African bush elephant, is distributed across 37 African countries. **(46)** They sometimes travel more than sixty miles to find food or water, and are very good at working out where other elephants are—even when they are out of sight. Using tracking devices, researchers have shown that they have "remarkable spatial acuity": when finding their way to waterholes, they headed off in exactly the right direction, on one occasion from a distance of roughly thirty miles. What is more, they almost always seem to choose the nearest water hole. **(47)** The researchers are convinced that the elephants always know precisely where they are in relation to all the resources they need, and can therefore take shortcuts, as well as following familiar routes.

Although the cues used by African elephants for long-distance navigation are not yet understood, smell may well play a part.

Elephants are very choosy eaters, but until recently little was known about how they selected their food. **(48)** One possibility was that they merely used their eyes and tried out the plants they found, but that would probably result in a lot of wasted time and energy, not least because their eyesight is actually not very good.

**(49)** The volatile chemicals produced by plants can be carried a long way, and they are very characteristic: Each plant or tree has its own particular odor signature. What is more, they can be detected even when they are not actually visible. New research suggests that smell is a crucial factor in guiding elephants—and probably other herbivores—to the best food resources.

The researchers first established what kinds of plant the elephants preferred either to eat or avoid when foraging freely. They then set up a "food station" experiment, in which they gave elephants a series of choices based only on smell. **(50)** The experiment showed that elephants may well use smell to identify patches of trees that are good to eat, and secondly to assess the quality of the trees within each patch. Free-ranging elephants presumably also use this information to locate their preferred food.`
    }]
  }
}

const base = (n, kid, extra = {}) => ({
  id: `q-en1-2024-${String(n).padStart(2, '0')}`,
  subject: 'en',
  knowledgeId: kid,
  paperId: P,
  paperOnly: true,
  year: Y,
  number: n,
  source: 'real',
  sourceName: '2024 考研英语（一）原卷（公开网络版）',
  sourceUrl: SRC,
  ...extra
})

const single = (n, kid, score, stem, options, answer, explain, extra = {}) => base(n, kid, {
  type: 'single',
  difficulty: 2,
  score,
  stem,
  options: options.map((text, i) => ({ key: String.fromCharCode(65 + i), text })),
  answer: [answer],
  explain,
  ...extra
})

const choice = (n, kid, stem, options, answer, explain, materialId, score = 2) =>
  single(n, kid, score, stem, options, answer, explain, { materialId })

const cloze = (n, kid, options, answer, explain) =>
  single(n, kid, 0.5, `选填第 ${n} 空`, options, answer, explain, { materialId: 'cloze' })

const subjective = (n, kid, score, stem, referenceAnswer, rubric, explain, extra = {}) => base(n, kid, {
  type: 'subjective',
  difficulty: 3,
  score,
  stem,
  referenceAnswer,
  rubric,
  explain,
  ...extra
})

const raw = [
  cloze(1, 'k-en-009',
    ['Through', 'Despite', 'Besides', 'Without'],
    'D', '“Without the need to be touched” 表示“无需触碰即可开门”，与后文自动门的意义衔接。'),
  cloze(2, 'k-en-009',
    ['revealing', 'demanding', 'improving', 'tracing'],
    'C', 'improving disabled access 意为“改善无障碍通行”，是自动门的核心功能之一。'),
  cloze(3, 'k-en-009',
    ['experience', 'convenience', 'guidance', 'reference'],
    'B', 'provide general convenience to commercial buildings 指为商业建筑提供普遍便利。'),
  cloze(4, 'k-en-009',
    ['previously', 'temporarily', 'successively', 'eventually'],
    'A', '1960 年商业化，六年前发明，即“先前”被发明；previously 与完成时搭配。'),
  cloze(5, 'k-en-009',
    ['held on', 'started out', 'settled down', 'went by'],
    'B', 'started out as a novelty feature 表示“起初作为新奇功能出现”。'),
  cloze(6, 'k-en-009',
    ['relations', 'volumes', 'benefits', 'sources'],
    'C', 'their benefits have extended 指自动门带来的好处不断扩展。'),
  cloze(7, 'k-en-009',
    ['useful', 'simple', 'flexible', 'stable'],
    'A', 'particularly useful in busy locations 指在繁忙场所尤其有用。'),
  cloze(8, 'k-en-009',
    ['call for', 'yield to', 'insist on', 'act as'],
    'D', 'act as crowd management 表示“起到人群管理的作用”。'),
  cloze(9, 'k-en-009',
    ['As well as', 'In terms of', 'Thanks to', 'Rather than'],
    'A', 'As well as making access easier 表示“除了让进出更容易之外”。'),
  cloze(10, 'k-en-009',
    ['connected', 'shared', 'represented', 'occupied'],
    'D', 'the total area occupied by them 指门开启时“占据”的总面积。'),
  cloze(11, 'k-en-009',
    ['allow', 'expect', 'require', 'direct'],
    'A', 'allow smaller buildings to maximise... 表示“使较小的建筑得以最大化利用空间”。'),
  cloze(12, 'k-en-009',
    ['adopt', 'lead', 'clear', 'change'],
    'C', 'clear the way for a large door 意为“为大门让出通道”。'),
  cloze(13, 'k-en-009',
    ['adapting to', 'deriving from', 'relying on', 'pointing at'],
    'C', 'each relying on specific signals 指每种自动门依赖特定信号开启。'),
  cloze(14, 'k-en-009',
    ['Once', 'Since', 'Unless', 'Although'],
    'D', 'Although these methods differ 表示让步：方法不同，原理相同。'),
  cloze(15, 'k-en-009',
    ['records', 'positions', 'principles', 'reasons'],
    'C', 'the main principles remain the same 指主要原理保持不变。'),
  cloze(16, 'k-en-009',
    ['controls', 'analyses', 'produces', 'mixes'],
    'B', 'analyses the light, sound, weight or movement 指系统“分析”周边信号。'),
  cloze(17, 'k-en-009',
    ['decorate', 'compare', 'protect', 'complement'],
    'D', 'complement the different environments 指传感器补充、适配不同环境。'),
  cloze(18, 'k-en-009',
    ['In conclusion', 'By contrast', 'For example', 'Above all'],
    'C', '后文以繁忙街道为例，故用 For example。'),
  cloze(19, 'k-en-009',
    ['identify', 'suit', 'secure', 'include'],
    'B', 'might not suit a motion-sensored door 指繁忙街道不适合运动传感器门。'),
  cloze(20, 'k-en-009',
    ['appropriate', 'obvious', 'impressive', 'delicate'],
    'A', 'a pressure-sensitive mat would be more appropriate 指压力感应垫更合适。'),

  choice(21, 'k-en-011', 'The Romans buried the nails probably for the sake of ___.',
    ['saving them for future use', 'keeping them from rusting', 'letting them grow in value', 'hiding them from the locals'],
    'D', '第二段明确说撤退仓促，不想让当地 Caledonians 拿到这批武器级铁，即“藏起来不落当地人手中”。', 'text1'),
  choice(22, 'k-en-011', 'The example of early 17th-century Virginians is used to ___.',
    ['highlight the thriftiness of early American colonists', 'illustrate the high status of blacksmiths in that period', 'contrast the attitudes of different civilisations toward nails', 'show the preciousness of nail-making technology at that time'],
    'D', '烧掉房子只为回收钉子，说明当时制钉技术及其产品稀缺、昂贵，对应 D。', 'text1'),
  choice(23, 'k-en-011', 'What played the major role in lowering the price of nails after the late 1700s?',
    ['Increased productivity.', 'Wider use of new energies.', 'Fiercer market competition.', 'Reduced cost of raw materials.'],
    'A', '第四段说大部分功劳归于制钉厂商找到更高效的方法，即生产率提高；原料与能源只是部分原因。', 'text1'),
  choice(24, 'k-en-011', 'It can be learned from Paragraph 5 that nails ___.',
    ['have undergone many technological improvements', 'have remained basically the same since Roman times', 'are less studied than other everyday products', "are one of the world's most significant inventions"],
    'B', '第五段说钉子多年来变化不大，罗马钉子仍然 clearly nails，对应 B。', 'text1'),
  choice(25, 'k-en-010', 'Which of the following best summarises the last two paragraphs?',
    ['Cheap technologies bring about revolutionary change.', 'Technological innovation is integral to economic success.', "Technology defines people's understanding of the world.", 'Sophisticated technologies develop from small inventions.'],
    'A', '末两段以印刷机、纸张、太阳能电池板说明便宜技术带来革命性变化，对应 A。', 'text1'),

  choice(26, 'k-en-011', 'According to the first two paragraphs, alloparenting refers to the practice of ___.',
    ['sharing child care among community members', 'assigning babies to specific adult caregivers', 'teaching parenting details to older children', 'carrying infants around by their parent'],
    'A', '前两段说每个孩子由许多成年人照看，四岁孩子也帮忙，alloparenting 即社区成员共同育儿。', 'text2'),
  choice(27, 'k-en-012', 'The scheme in Germany is mentioned to illustrate ___.',
    ['an attempt to facilitate intergenerational communication', 'an approach to integrating alloparenting into western culture', 'the conventional parenting style in western culture', 'the differences between western and African ways of living'],
    'B', '德国把养老院与托儿所配对的方案，是用以说明如何把 alloparenting 融入西方生活，对应 B。', 'text2'),
  choice(28, 'k-en-012', 'According to Paragraph 4, the "intensive mothering narrative" ___.',
    ['alleviates parenting pressure', 'consolidates family relationships', 'results in the child-centered family', 'departs from the course of evolution'],
    'D', '第四段说西方核心家庭是近代产物，与进化史断裂；集约母职叙事偏离进化历程，对应 D。', 'text2'),
  choice(29, 'k-en-011', 'According to Paragraph 6, what can we learn about nursery in the UK?',
    ['They tend to fall short of official requirements.', 'They have difficulty finding enough caregivers.', 'They ought to improve their carer-to-child ratio.', 'They should try to prevent parental depression.'],
    'C', '第六段说英国托儿所规定一名照护者对四名幼儿，与狩猎采集社会十多名照护者形成对比，暗示应改善比例，对应 C。', 'text2'),
  choice(30, 'k-en-010', 'Which of the following would be the best title for the text?',
    ['Instructive teaching: a dilemma for anxious parents', 'For a happier family, learn from the hunter-gatherers', 'Mix-aged playgroup, a better choice for lonely children', 'Tracing the history of parenting: from Africa to Europe'],
    'B', '全文主旨是借鉴狩猎采集社会的共同育儿，让家庭更幸福，B 最能概括。', 'text2'),

  choice(31, 'k-en-012', 'What can be learned about Rutkowski from the first two paragraphs?',
    ['He is enthusiastic about AI-generated painting.', 'He is popular with the users of an AI art generator.', 'He attracts admiration from other illustrators.', 'He specializes in classical painting digitalization.'],
    'B', '前两段说他的名字成为 Stable Diffusion 最常用提示词之一，即受到 AI 绘画用户欢迎，对应 B。', 'text3'),
  choice(32, 'k-en-011', 'The problem with open-source AI art generators is that they ___.',
    ['lack flexibility in responding to prompts', 'produce artworks in unpredictable styles', 'make unauthorized use of online images', 'collect user information without consent'],
    'C', '第三段说这些程序抓取网络图片，常常未经许可、未署名，即未经授权使用在线图像，对应 C。', 'text3'),
  choice(33, 'k-en-011', 'After searching online, Rutkowski found ___.',
    ['a unique way to reach audiences', 'a new method to identify AI images', 'AI-generated work bearing his name', 'heated disputes regarding his copyright'],
    'C', '第四段说搜索返回了附有他名字、却并非他创作的作品，对应 C。', 'text3'),
  // 答案存疑：部分公开答案页标 C；原文末段 Ortiz 明确建议改用公共领域图像训练并与博物馆、艺术家合作，按语义取 D。
  choice(34, 'k-en-012', 'According to Ortiz, AI companies are advised to ___.',
    ['campaign for new policies or regulations', 'offer their services to public institutions', 'strengthen their relationships with AI users', 'adopt a different strategy for AI model training'],
    'D', '末段建议用公共领域图像训练模型，并与博物馆、艺术家合作，属于改变训练策略，对应 D。', 'text3'),
  choice(35, 'k-en-010', 'What is the text mainly about?',
    ["Artists' responses to AI art generation.", "AI's expanded role in artistic creation.", 'Privacy issues in the application of AI.', 'Opposing views on AI development.'],
    'A', '全文围绕艺术家对 AI 生成艺术、版权与伦理问题的反应展开，对应 A。', 'text3'),

  choice(36, 'k-en-011', 'The Chesapeake Bay is described in Paragraph 1 as ___.',
    ['a valuable natural environment', 'a controversial conservation area', 'a place with commercial potential', 'a headache for nearby communities'],
    'A', '首段描述浅滩为数百物种提供栖息地、蓄洪、过滤污染物，强调其自然价值，对应 A。', 'text4'),
  choice(37, 'k-en-011', "The U.S. Supreme Court's ruling in the Idaho case ___.",
    ['reinforces water pollution control', "weakens the EPA's regulatory power", 'will end conflicts among local residents', 'may face opposition from mining operators'],
    'B', '第二段明确说裁决让 EPA 监管湿地与水域的权力大大减少，对应 B。', 'text4'),
  choice(38, 'k-en-012', 'How does the author feel about the future of the Chesapeake Bay?',
    ['Worried.', 'Puzzled.', 'Relieved.', 'Encouraged.'],
    'A', '作者说各州是否跟进保护“unlikely”，并强调后果严重，态度是担忧，对应 A。', 'text4'),
  choice(39, 'k-en-012', "What can be inferred about the EPA's involvement in the Chesapeake Bay Program?",
    ['It has restored the balance among neighboring jurisdictions.', 'It has triggered a radical reform in commercial fisheries.', 'It has set a fine example of respecting state authorities.', 'It has ensured the coordination of protection efforts.'],
    'D', '第四段说 EPA 的参与长期是关键，用以超越邻州特殊利益、协调保护努力，对应 D。', 'text4'),
  choice(40, 'k-en-012', 'The author holds that the state lawmakers should ___.',
    ['be cautious about the influence of landowners', 'attach due importance to wetlands protections', 'recognize the need to expand wildlife refuges', 'improve the wellbeing of endangered species'],
    'B', '末段呼吁州议员审查本州湿地保护，认清利害，即应重视湿地保护，对应 B。', 'text4'),

  choice(41, 'k-en-013', 'Choose the best statement for (41) Hannah.',
    ['It is clear that countries of origin have never been compensated for stolen artifacts.', 'It is a flawed line of reasoning to argue against returning artifacts to their countries of origin.', 'Museum visitors can still learn as much from artifact copies after the originals are returned.', 'Reproductions, even if perfectly made, cannot take the place of the authentic objects.', 'The real value of artifacts can only be recognized in their countries of origin rather than anywhere else.', 'Ways to get artifacts from other countries must be decent and lawful.', 'Concern over security is no excuse for refusing to return artifacts to their countries of origin.'],
    'E', 'Hannah 强调文物应回到尼日利亚，成为当地文化遗产与民族自豪感来源，对应 E。', 'partB'),
  choice(42, 'k-en-013', 'Choose the best statement for (42) Buck.',
    ['It is clear that countries of origin have never been compensated for stolen artifacts.', 'It is a flawed line of reasoning to argue against returning artifacts to their countries of origin.', 'Museum visitors can still learn as much from artifact copies after the originals are returned.', 'Reproductions, even if perfectly made, cannot take the place of the authentic objects.', 'The real value of artifacts can only be recognized in their countries of origin rather than anywhere else.', 'Ways to get artifacts from other countries must be decent and lawful.', 'Concern over security is no excuse for refusing to return artifacts to their countries of origin.'],
    'C', 'Buck 认为近乎精确的复制品可解决归还问题，展览叙事比真伪更重要，对应 C。', 'partB'),
  choice(43, 'k-en-013', 'Choose the best statement for (43) Sara.',
    ['It is clear that countries of origin have never been compensated for stolen artifacts.', 'It is a flawed line of reasoning to argue against returning artifacts to their countries of origin.', 'Museum visitors can still learn as much from artifact copies after the originals are returned.', 'Reproductions, even if perfectly made, cannot take the place of the authentic objects.', 'The real value of artifacts can only be recognized in their countries of origin rather than anywhere else.', 'Ways to get artifacts from other countries must be decent and lawful.', 'Concern over security is no excuse for refusing to return artifacts to their countries of origin.'],
    'F', 'Sara 强调文物应通过借展、合法购买或条约获得，偷窃不道德，对应 F。', 'partB'),
  choice(44, 'k-en-013', 'Choose the best statement for (44) Victor.',
    ['It is clear that countries of origin have never been compensated for stolen artifacts.', 'It is a flawed line of reasoning to argue against returning artifacts to their countries of origin.', 'Museum visitors can still learn as much from artifact copies after the originals are returned.', 'Reproductions, even if perfectly made, cannot take the place of the authentic objects.', 'The real value of artifacts can only be recognized in their countries of origin rather than anywhere else.', 'Ways to get artifacts from other countries must be decent and lawful.', 'Concern over security is no excuse for refusing to return artifacts to their countries of origin.'],
    'G', 'Victor 承认原属国安保可能较弱，但以波士顿失窃案说明没有绝对安全，安保不能成为拒还理由，对应 G。', 'partB'),
  choice(45, 'k-en-013', 'Choose the best statement for (45) Julia.',
    ['It is clear that countries of origin have never been compensated for stolen artifacts.', 'It is a flawed line of reasoning to argue against returning artifacts to their countries of origin.', 'Museum visitors can still learn as much from artifact copies after the originals are returned.', 'Reproductions, even if perfectly made, cannot take the place of the authentic objects.', 'The real value of artifacts can only be recognized in their countries of origin rather than anywhere else.', 'Ways to get artifacts from other countries must be decent and lawful.', 'Concern over security is no excuse for refusing to return artifacts to their countries of origin.'],
    'B', 'Julia 连续反问西方占有文物的理由，指出反对归还的论证有缺陷，对应 B。', 'partB'),

  subjective(46, 'k-en-014', 2, '将文中划线部分（46）译成汉语。',
    '它们有时跋涉六十多英里寻找食物或水，并且非常善于判断其他大象的位置——即使它们不在视线范围内。',
    [{ text: '“travel more than sixty miles”与“find food or water”译准', points: 1 }, { text: '“working out where other elephants are”与“out of sight”译顺', points: 1 }],
    '翻译按段给分：行程与目的、判断位置与视线外两层信息各 1 分；漏译“even when”扣分。', { materialId: 'partC' }),
  subjective(47, 'k-en-014', 2, '将文中划线部分（47）译成汉语。',
    '研究人员确信，大象总是精确地知道自己相对于所需全部资源的位置，因此能够走捷径，也能沿熟悉的路线行进。',
    [{ text: '“are convinced that”与“in relation to”译准', points: 1 }, { text: '“take shortcuts”与“following familiar routes”译全', points: 1 }],
    '“be convinced”译为“确信/相信”，不是“被说服”；“as well as”应体现“也/并且”。', { materialId: 'partC' }),
  subjective(48, 'k-en-014', 2, '将文中划线部分（48）译成汉语。',
    '一种可能是，它们仅凭眼睛观察并逐一试吃发现的植物，但这可能浪费大量时间和精力，尤其是因为它们的视力其实并不好。',
    [{ text: '“One possibility was that”与“tried out”译准', points: 1 }, { text: '“not least because”与“eyesight”译顺', points: 1 }],
    '“not least because”意为“尤其是因为”，不能译成“不是因为”。', { materialId: 'partC' }),
  subjective(49, 'k-en-014', 2, '将文中划线部分（49）译成汉语。',
    '植物产生的挥发性化学物质可以被带到很远的地方，而且这些物质具有很强的特征性：每种植物或树木都有自己独特的气味标记。',
    [{ text: '“volatile chemicals”与“carried a long way”译准', points: 1 }, { text: '“characteristic”与“odor signature”译顺', points: 1 }],
    '“volatile”译为“挥发性的”；“signature”此处是“特征/标记”，不是“签名”。', { materialId: 'partC' }),
  subjective(50, 'k-en-014', 2, '将文中划线部分（50）译成汉语。',
    '实验表明，大象很可能利用嗅觉识别适合食用的树丛，其次评估每一树丛中树木的品质。',
    [{ text: '“may well use smell”与“patches of trees”译准', points: 1 }, { text: '“assess the quality”与“within each patch”译全', points: 1 }],
    '“may well”表示“很可能”；“secondly”对应“其次/第二”。', { materialId: 'partC' }),

  subjective(51, 'k-en-015', 10,
    `Read the following email from a student. Write a reply.

Dear Li Ming,

I've got a class assignment to make an oral report on an ancient Chinese scientist. I am not sure how to prepare for it. Could you give me some advice? Thanks for your help.

Yours,
Paul

Write your letter in no less than 100 words. Don't sign your own name at the end of the letter. Use "Li Ming" instead.`,
    `Dear Paul,

It's really a pleasure to hear from you. Hearing that you are struggling with how to prepare for an oral report on an ancient Chinese scientist, I am writing this email to offer you some helpful suggestions.

Firstly, you need to select a prominent ancient Chinese scientist, such as Zhang Heng or Shen Kuo, and then conduct in-depth research on their lives, contributions, and impact on science and technology. Secondly, you should utilize reliable sources such as books, academic articles, and journals to gather accurate and detailed information. Lastly, it is advisable to organize your research findings into an outline, highlighting key aspects of the scientist's life and work, including their significant discoveries, inventions, and theories.

I hope you will find the information above practical. Feel free to contact me if you have any further questions.

Yours truly,
Li Ming`,
    [{ text: '回应任务：给出准备口头报告的具体建议', points: 4 }, { text: '语言准确、衔接自然、句式有变化', points: 4 }, { text: '书信格式与署名正确，不少于 100 词', points: 2 }],
    '自评重点：是否逐条回应“选题—查资料—列提纲”，而不是泛泛说“多练习”；格式错（缺称呼/结尾）扣 1–2 分。'),

  subjective(52, 'k-en-016', 20,
    `Write an essay of 160–200 words based on the picture and the chart below. In your essay, you should
1) describe the picture and the chart briefly,
2) interpret the implied meaning, and
3) give your comments.

Write your answer on the ANSWER SHEET.`,
    `As is vividly depicted in the drawing on the left side, several people are doing exercise in the sports zone reserved for citizens while a man praises that the newly built park is fantastic. Meanwhile, emerging from the bar chart on the right side is the fact that the number of parks in a certain city has constantly increased from 406 in 2020 to 670 in 2022. The drawing and the chart above are intended to imply that great accomplishments have been made in the construction of public sports facilities.

Why should this phenomenon take place? Generally, several factors may account for it. One of the contributing factors is that over the past four decades, the economy has been advancing at an unprecedented speed. With the tremendous improvement of living standards, people attach great importance to physical well-being and a healthy lifestyle, which produces greater demand for public sports facilities. Another potential cause is that many favorable policies have been implemented with the government's support, such as increasing investment in constructing sports facilities and parks.

To sum up, from the analysis above, we can draw a conclusion that residents' living environment has tremendously improved. It may be predicted that such a tendency will continue in the foreseeable future.`,
    [{ text: '描述图画与柱状图关键信息（406 / 532 / 670）', points: 5 }, { text: '阐释含义：公共体育设施建设与健康生活', points: 8 }, { text: '评论与收束，语言与结构', points: 7 }],
    '自评重点：三段式是否完整、图表数据是否引用、有没有只描述不解释。字数不足 160 词扣 2–3 分。',
    {
      figures: [{
        src: '/zhistack/img/en1-2024-writing.png',
        alt: '2024 英语一作文题配图：市民健身场景与 2020–2022 年某市公园数量柱状图',
        caption: '原卷配图：左图为市民健身场景，右图为某市 2020–2022 年公园数量 406 / 532 / 670。'
      }]
    })
]

MATERIALS.cloze.blocks[0].text = MATERIALS.cloze.blocks[0].text.replace(/__(\d+)__/g, '**__$1__**')

export const questions2024_en1 = raw.map(q => q.materialId
  ? { ...q, material: { ...MATERIALS[q.materialId], fontSize: 16 } }
  : q)

export const paper2024_en1 = {
  id: P,
  year: Y,
  title: '2024 年全国硕士研究生招生考试 英语（一）',
  short: '2024 英语一原卷',
  group: 'en',
  subjects: ['en'],
  durationMin: 180,
  totalScore: 100,
  questionCount: questions2024_en1.length,
  qids: questions2024_en1.map(q => q.id),
  sections: [
    { name: 'Section I 完形填空', short: '完形 20 题', score: 10 },
    { name: 'Section II Part A 阅读理解', short: '阅读 20 题', score: 40 },
    { name: 'Section II Part B 新题型', short: '新题型 5 题', score: 10 },
    { name: 'Section II Part C 翻译', short: '翻译 5 段', score: 10 },
    { name: 'Section III 写作', short: '小作文 + 大作文', score: 30 }
  ],
  sourceName: '公开网络版（忻州师范学院 PDF / 中国教育在线答案）',
  sourceUrl: SRC,
  answerUrl: ANS,
  note: '原文按公开原卷录入，未改写；完形与阅读在左栏独立滚动，题干、选项与作答在右栏。译文与作文范文供自评对照。'
}
