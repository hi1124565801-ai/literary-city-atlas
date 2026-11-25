(() => {
  const yecaoStories = [
    "题辞", "秋夜", "影的告别", "求乞者", "我的失恋", "复仇", "复仇（其二）", "希望",
    "雪", "风筝", "好的故事", "过客", "死火", "狗的驳诘", "失掉的好地狱", "墓碣文",
    "颓败线的颤动", "立论", "死后", "这样的战士", "聪明人和傻子和奴才", "腊叶",
    "淡淡的血痕中", "一觉"
  ];

  const yecaoAnchor = {
    lat: 39.9284,
    lng: 116.3557,
    searchLabel: "北京鲁迅博物馆（北京鲁迅故居）, 北京市西城区"
  };

  const yecaoEntries = [
    {
      id: "preface-baiyunlou",
      story: "题辞",
      name: "广州白云楼旧址（《野草·题辞》写作地）",
      city: "广州",
      country: "中国",
      lat: 23.1158,
      lng: 113.2765,
      searchLabel: "白云楼鲁迅旧居, 白云路, 广州",
      confidence: "likely",
      precision: "former_site",
      page: 7,
      intro: "1927 年，鲁迅在广州白云楼为《野草》写下题辞，把这丛文字放在明暗、生死、过去与未来之间。",
      note: "白云楼原址在广州东堤白云路一带；现存城市坐标为旧址区域近似定位。",
      excerpts: [
        "当我沉默着的时候，我觉得充实；我将开口，同时感到空虚。",
        "我以这一丛野草，在明与暗，生与死，过去与未来之际，献于友与仇，人与兽，爱者与不爱者之前作证。"
      ]
    },
    {
      id: "autumn-night-garden",
      story: "秋夜",
      name: "北京鲁迅故居 · 后园与枣树（文本空间）",
      page: 9,
      intro: "深夜的后园里，枣树、星眼、霜与扑火的小虫构成一场沉默而倔强的对峙。",
      excerpts: [
        "在我的后园，可以看见墙外有两株树，一株是枣树，还有一株也是枣树。",
        "而最直最长的几枝，却已默默地铁似的直刺着奇怪而高的天空；直刺着天空中圆满的月亮，使月亮窘得发白。"
      ]
    },
    {
      id: "shadow-nowhere",
      story: "影的告别",
      name: "北京鲁迅故居 · 明暗之间的无地（文本空间）",
      page: 11,
      intro: "影拒绝天堂、地狱和未来的黄金世界，选择在明暗交界处独自远行。",
      excerpts: [
        "我不过一个影，要别你而沉没在黑暗里了。然而黑暗又会吞并我，然而光明又会使我消失。",
        "我独自远行，不但没有你，并且再没有别的影在黑暗里。只有我被黑暗沉没，那世界全属于我自己。"
      ]
    },
    {
      id: "beggar-grey-road",
      story: "求乞者",
      name: "北京鲁迅故居 · 灰土街路（文本空间）",
      page: 13,
      intro: "剥落高墙旁，求乞与布施互相照见；叙述者最终也在灰土里设想自己的求乞方式。",
      excerpts: [
        "我不布施，我无布施心，我但居布施者之上，给与烦腻，疑心，憎恶。",
        "我将用无所为和沉默求乞……我至少将得到虚无。微风起来，四面都是灰土。"
      ]
    },
    {
      id: "lost-love-city",
      story: "我的失恋",
      name: "北京鲁迅故居 · 山腰闹市河滨与豪家（文本空间）",
      page: 15,
      intro: "四个夸张地点轮番上场，鲁迅用打油诗拆解当时流行的哀艳失恋诗。",
      excerpts: [
        "我的所爱在闹市；想去寻她人拥挤，仰头无法泪沾耳。爱人赠我双燕图；回她什么：冰糖壶卢。"
      ]
    },
    {
      id: "revenge-wilderness",
      story: "复仇",
      name: "北京鲁迅故居 · 广漠旷野（文本空间）",
      page: 17,
      intro: "一男一女持刃对立，以不拥抱也不杀戮的静止，让围观者自己的无聊反噬自身。",
      excerpts: [
        "然而他们俩对立着，在广漠的旷野之上，裸着全身，捏着利刃，然而也不拥抱，也不杀戮。",
        "于是只剩下广漠的旷野，而他们俩在其间裸着全身，捏着利刃，干枯地立着。"
      ]
    },
    {
      id: "revenge-golgotha",
      story: "复仇（其二）",
      name: "各各他（《复仇〔其二〕》文本场景）",
      city: "耶路撒冷",
      country: "巴勒斯坦地区",
      lat: 31.7785,
      lng: 35.2296,
      searchLabel: "Church of the Holy Sepulchre, Jerusalem",
      confidence: "ambiguous",
      precision: "area",
      page: 19,
      intro: "作品借受难场景书写肉身的痛、悲悯与仇恨；这是宗教文本空间，不是作者亲历地点。",
      note: "坐标以耶路撒冷传统受难地范围为文学参照，不主张历史地点的唯一确定性。",
      excerpts: [
        "十字架竖起来了；他悬在虚空中。他没有喝那用没药调和的酒，要分明地玩味以色列人怎样对付他们的神之子。",
        "上帝离弃了他，他终于还是一个“人之子”；然而以色列人连“人之子”都钉杀了。"
      ]
    },
    {
      id: "hope-dark-night",
      story: "希望",
      name: "北京鲁迅故居 · 空虚中的暗夜（文本空间）",
      page: 21,
      intro: "当身外的青春仿佛也已逝去，叙述者放下希望之盾，转身肉薄没有星月的暗夜。",
      excerpts: [
        "我只得由我来肉薄这空虚中的暗夜了，纵使寻不到身外的青春，也总得自己来一掷我身中的迟暮。",
        "绝望之为虚妄，正与希望相同！"
      ]
    },
    {
      id: "snow-jiangnan",
      story: "雪",
      name: "江南雪野（文本空间）",
      city: "江南",
      country: "中国",
      lat: 30.2741,
      lng: 120.1551,
      searchLabel: "杭州, 浙江, 中国",
      confidence: "ambiguous",
      precision: "regional",
      page: 24,
      intro: "江南的雪被写成青春的消息，柔润、明艳，也短暂地容纳孩子们共同塑出的雪罗汉。",
      note: "“江南”是作品中的区域性意象；坐标只作地图参照，不对应唯一实景。",
      excerpts: [
        "江南的雪，可是滋润美艳之至了；那是还在隐约着的青春的消息，是极壮健的处子的皮肤。"
      ]
    },
    {
      id: "snow-north",
      story: "雪",
      name: "朔方雪原（文本空间）",
      page: 25,
      intro: "朔方的雪不再粘连，独自在晴天与旋风中蓬勃升腾，成为全篇更冷峻的精神形象。",
      excerpts: [
        "但是，朔方的雪花在纷飞之后，却永远如粉，如沙，他们决不粘连，撒在屋上，地上，枯草上，就是这样。",
        "是的，那是孤独的雪，是死掉的雨，是雨的精魂。"
      ]
    },
    {
      id: "kite-winter-sky",
      story: "风筝",
      name: "北京鲁迅故居 · 冬日风筝天空（文本空间）",
      page: 26,
      intro: "北京冬日的一二风筝唤回故乡春天，也唤回一次无法补偿的童年伤害。",
      excerpts: [
        "北京的冬季，地上还有积雪，灰黑色的秃树枝丫叉于晴朗的天空中，而远处有一二风筝浮动，在我是一种惊异和悲哀。",
        "四面都还是严冬的肃杀，而久经诀别的故乡的久经逝去的春天，却就在这天空中荡漾了。"
      ]
    },
    {
      id: "good-story-water",
      story: "好的故事",
      name: "北京鲁迅故居 · 水中云锦（梦境空间）",
      page: 29,
      intro: "昏沉的夜里，灯火与水波展开一篇美的人与美的事，梦醒后只剩碎影与追忆。",
      excerpts: [
        "许多美的人和美的事，错综起来像一天云锦，而且万颗奔星似的飞动着，同时又展开去，以至于无穷。",
        "但我总记得见过这一篇好的故事，在昏沉的夜……"
      ]
    },
    {
      id: "passer-grave-road",
      story: "过客",
      name: "北京鲁迅故居 · 通向坟地的荒路（文本空间）",
      page: 31,
      intro: "黄昏的土屋外，受伤的过客拒绝回头和停息，向坟与野百合所在的前方继续走。",
      excerpts: [
        "我不知道。从我还能记得的时候起，我就在这么走，要走到一个地方去，这地方就在前面。",
        "然而我不能！我只得走。我还是走好罢……"
      ]
    },
    {
      id: "dead-fire-ice-valley",
      story: "死火",
      name: "北京鲁迅故居 · 冰谷与死火（梦境空间）",
      page: 37,
      intro: "冰谷里凝固的火被体温唤醒；冻灭与烧完之间，死火选择一次明亮而决绝的跃起。",
      excerpts: [
        "这是死火。有炎炎的形，但毫不摇动，全体冰结，像珊瑚枝；尖端还有凝固的黑烟。",
        "“那我就不如烧完！”他忽而跃起，如红彗星，并我都出冰谷口外。"
      ]
    },
    {
      id: "dog-alley",
      story: "狗的驳诘",
      name: "北京鲁迅故居 · 隘巷（梦境空间）",
      page: 39,
      intro: "破衣的行人在隘巷斥责一条“势利的狗”，却被狗以人类最熟练的等级辨认反驳。",
      excerpts: [
        "我惭愧：我终于还不知道分别铜和银；还不知道分别布和绸；还不知道分别官和民；还不知道分别主和奴；还不知道……"
      ]
    },
    {
      id: "lost-hell",
      story: "失掉的好地狱",
      name: "北京鲁迅故居 · 荒野旁的地狱（梦境空间）",
      page: 40,
      intro: "魔鬼讲述人类如何以解放之名接管地狱，并把旧刑罚整顿得更有效率。",
      excerpts: [
        "地狱原已废弛得很久了：剑树消却光芒；沸油的边际早不腾涌；大火聚有时不过冒些青烟，远处还萌生曼陀罗花。",
        "这是人类的成功，是鬼魂的不幸……"
      ]
    },
    {
      id: "tomb-inscription",
      story: "墓碣文",
      name: "北京鲁迅故居 · 颓坏孤坟（梦境空间）",
      page: 42,
      intro: "叙述者绕到墓碣背面，看见无心无肝的死者，并听见一场关于自食其心的诘问。",
      excerpts: [
        "于浩歌狂热之际中寒；于天上看见深渊。于一切眼中看见无所有；于无所希望中得救。",
        "“待我成尘时，你将见我的微笑！”"
      ]
    },
    {
      id: "trembling-wilderness",
      story: "颓败线的颤动",
      name: "北京鲁迅故居 · 无边荒野（梦境空间）",
      page: 44,
      intro: "被家庭抛弃的老女人走入无边荒野，把一生的养育、屈辱、爱与复仇并合成无词的言语。",
      excerpts: [
        "她赤身露体地，石像似的站在荒野的中央，于一刹那间照见过往的一切：饥饿，苦痛，惊异，羞辱，欢欣，于是发抖。",
        "她于是举两手尽量向天，口唇间漏出人与兽的，非人间所有，所以无词的言语。"
      ]
    },
    {
      id: "argument-classroom",
      story: "立论",
      name: "北京鲁迅故居 · 小学校讲堂（梦境空间）",
      page: 47,
      intro: "一堂关于“怎样说才不错”的作文课，把祝福、谎言、真话与挨打放在同一张桌面上。",
      excerpts: [
        "说要死的必然，说富贵的许谎。但说谎的得好报，说必然的遭打。你……"
      ]
    },
    {
      id: "after-death-road",
      story: "死后",
      name: "北京鲁迅故居 · 死去的道路（梦境空间）",
      page: 48,
      intro: "叙述者死在路上，意识仍困在身体里，继续听围观者议论并忍受尘土、苍蝇与公共意见。",
      excerpts: [
        "但人应该死在那里呢？我先前以为人在地上虽没有任意生存的权利，却总有任意死掉的权利的。现在才知道并不然，也很难适合人们的公意。",
        "万不料人的思想，是死掉之后也还会变化的。"
      ]
    },
    {
      id: "warrior-nothingness",
      story: "这样的战士",
      name: "北京鲁迅故居 · 无物之阵（文本空间）",
      page: 52,
      intro: "战士面对点头、旗帜、好名称和空外套，一次次举起投枪，直到自己衰老。",
      excerpts: [
        "他走进无物之阵，所遇见的都对他一式点头。他知道这点头就是敌人的武器，是杀人不见血的武器。",
        "在这样的境地里，谁也不闻战叫：太平。太平……但他举起了投枪！"
      ]
    },
    {
      id: "slave-room",
      story: "聪明人和傻子和奴才",
      name: "北京鲁迅故居 · 奴才的破屋（文本空间）",
      page: 54,
      intro: "傻子试图为阴湿破屋砸出一扇窗，奴才却最先呼喊“强盗”，维护了困住自己的墙。",
      excerpts: [
        "傻子跟奴才到他屋外，动手就砸那泥墙。“先生！你干什么？”他大惊地说。“我给你打开一个窗洞来。”",
        "“有人要来毁咱们的屋子，我首先叫喊起来，大家一同把他赶走了。”他恭敬而得胜地说。"
      ]
    },
    {
      id: "withered-leaf-courtyard",
      story: "腊叶",
      name: "北京鲁迅故居 · 庭前枫树与书桌（文本空间）",
      page: 56,
      intro: "一片夹在《雁门集》中的病叶，把保存、凋零与记忆消退压缩在灯下。",
      excerpts: [
        "大概是愿使这将坠的被蚀而斑斓的颜色，暂得保存，不即与群叶一同飘散罢。",
        "将坠的病叶的斑斓，似乎也只能在极短时中相对，更何况是葱郁的呢。"
      ]
    },
    {
      id: "bloodstain-ruins",
      story: "淡淡的血痕中",
      name: "铁狮子胡同 · 三一八惨案历史锚点",
      city: "北京",
      country: "中国",
      lat: 39.9335,
      lng: 116.4172,
      searchLabel: "三一八惨案发生地旧址, 张自忠路, 北京",
      confidence: "likely",
      precision: "area",
      page: 57,
      intro: "作品为死者、生者与未生者而写；废墟、荒坟和被时光冲淡的血痕成为历史记忆的空间。",
      note: "坐标标示三一八惨案相关历史区域，作品本身并未把场景收束为单一地点。",
      excerpts: [
        "几片废墟和几个荒坟散在地上，映以淡淡的血痕，人们都在其间咀嚼着人我的渺茫的悲苦。",
        "叛逆的猛士出于人间；他屹立着，洞见一切已改和现有的废墟和荒坟，记得一切深广和久远的苦痛。"
      ]
    },
    {
      id: "awakening-study",
      story: "一觉",
      name: "北京鲁迅故居 · 四方小书斋",
      page: 59,
      intro: "飞机掠过北京城，鲁迅在书斋编校青年文稿；死的威胁反而让“在人间活着”的感觉更清晰。",
      excerpts: [
        "每听得机件搏击空气的声音，我常觉到一种轻微的紧张，宛然目睹了“死”的袭来，但同时也深切地感着“生”的存在。",
        "是的，青年的魂灵屹立在我眼前，他们已经粗暴了，或者将要粗暴了，然而我爱这些流血和隐痛的魂灵，因为他使我觉得是在人间，是在人间活着。"
      ]
    }
  ];

  const yecaoPlaces = yecaoEntries.map((entry, index) => ({
    id: `yecao-${entry.id}`,
    placeId: `yecao-${entry.id}`,
    name: entry.name,
    modernName: entry.searchLabel || yecaoAnchor.searchLabel,
    searchLabel: entry.searchLabel || yecaoAnchor.searchLabel,
    country: entry.country || "中国",
    lat: entry.lat ?? yecaoAnchor.lat,
    lng: entry.lng ?? yecaoAnchor.lng,
    type: entry.type || (entry.confidence === "likely" ? "former_site" : "textual_space"),
    confidence: entry.confidence || "ambiguous",
    precision: entry.precision || "area",
    pages: [entry.page],
    mentions: 1,
    literaryNote: entry.intro,
    evidenceSummary: entry.intro,
    mapNote: entry.note || "这是作品中的寓言、梦境或象征空间；坐标锚定《野草》写作时期的北京鲁迅故居，不代表故事真实发生于此。",
    workId: "yecao",
    workTitle: "野草",
    workAuthor: "鲁迅",
    storyTitle: entry.story,
    color: "#5f6849",
    sourceNote: "用户提供《野草》PDF；题辞与二十三篇散文诗逐篇整理，原文按完整场景选取。",
    quoteLabel: "发生在此地的文学场景",
    passages: entry.excerpts.map((text, passageIndex) => ({
      id: `yecao-${entry.id}-passage-${passageIndex + 1}`,
      text,
      kind: passageIndex ? "reflection" : "narrative-scene",
      type: passageIndex ? "reflection" : "narrative-scene",
      language: "zh",
      sceneContext: entry.intro
    })),
    sceneIds: [`scene-yecao-${entry.id}`],
    narrativeOrder: index + 1
  }));

  const yecaoScenes = yecaoEntries.map((entry, index) => ({
    id: `scene-yecao-${entry.id}`,
    sceneTitle: entry.name.replace(/^.*? · /, "").replace(/（.*?空间）/g, ""),
    sceneIntro: entry.intro,
    narrativeOrder: index + 1,
    excerpts: entry.excerpts.map((text, passageIndex) => ({
      id: `yecao-${entry.id}-scene-${passageIndex + 1}`,
      text,
      kind: passageIndex ? "reflection" : "narrative-scene",
      language: "zh"
    })),
    placeId: `yecao-${entry.id}`,
    workId: "yecao",
    storyTitle: entry.story,
    featured: true,
    navigationPriority: true,
    contentTier: "core"
  }));

  const solitudeEntries = [
    {
      id: "macondo-river",
      name: "马孔多河岸（虚构地点）",
      city: "马孔多",
      lat: 10.5915,
      lng: -74.184,
      page: 6,
      title: "河岸上新生的世界",
      intro: "小说从尚未被命名的马孔多展开，河水、卵石与冰块记忆把一个家族的一百年折叠进第一句话。",
      excerpts: [
        "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
        "那时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的屋子沿河岸排开，湍急的河水清澈见底，河床里卵石洁白光滑宛如史前巨蛋。"
      ]
    },
    {
      id: "gypsy-camp",
      name: "吉卜赛人营地（虚构地点）",
      city: "马孔多",
      lat: 10.594,
      lng: -74.181,
      page: 6,
      title: "磁石唤醒万物",
      intro: "每年三月，吉卜赛人的帐篷把发明、魔法和外部世界带到村边，马孔多第一次学会惊奇。",
      excerpts: [
        "铁锅、铁盆、铁钳、小铁炉纷纷跌落，木板因钉子绝望挣扎、螺丝奋力挣脱而吱嘎作响，甚至连那些丢失多日的物件也在久寻不见的地方出现。",
        "“万物皆有灵，”吉卜赛人用嘶哑的嗓音宣告，“只需唤起它们的灵性。”"
      ]
    },
    {
      id: "buendia-house",
      name: "布恩迪亚家（虚构地点）",
      city: "马孔多",
      lat: 10.5904,
      lng: -74.1835,
      page: 11,
      title: "一座房子成为家族宇宙",
      intro: "这座不断扩建、衰败又被记忆占满的房子，是家族日常、爱情、战争和幽灵共同生活的中心。",
      excerpts: [
        "从一开始他家的房子就是村里最好的，成为他人仿效的对象。他家有一间敞亮的小厅，一间鲜花盛开、颜色喜人的露台餐厅，两间卧室，一座栽着一棵大栗树的庭院。",
        "短短几年里，三百名居民的马孔多成为当时已知村镇中最勤勉有序的典范。它的确是一处乐土，没人超过三十岁，也没人死去。"
      ]
    },
    {
      id: "enchanted-forest-ship",
      name: "着魔森林中的西班牙大帆船（虚构地点）",
      city: "马孔多北方森林",
      lat: 10.653,
      lng: -74.239,
      page: 14,
      title: "森林深处的遗忘之船",
      intro: "寻找大海的远征队在内陆森林里发现大帆船，时间、地理和常识同时失去边界。",
      excerpts: [
        "整整一个星期，他们几乎没有说话，只借着某些昆虫发出的微弱光亮，像梦游人一般穿过阴惨的世界，肺叶间满溢令人窒息的鲜血味道。",
        "整艘船仿佛占据着一个独特的空间，属于孤独和遗忘的空间，远离时光的侵蚀，避开飞鸟的骚扰。"
      ]
    },
    {
      id: "insomnia-street",
      name: "贴满标签的马孔多街道（虚构地点）",
      city: "马孔多",
      lat: 10.5922,
      lng: -74.1804,
      page: 41,
      title: "用词语暂时维系现实",
      intro: "失眠症带来失忆，居民给每件物品写下名称和用途，试图阻止现实从语言中退场。",
      excerpts: [
        "他用小刷子蘸上墨水给每样东西注明名称：桌子，椅子，钟，门，墙，床，平锅。",
        "就这样，人们继续在捉摸不定的现实中生活，只是一旦标签文字的意义也被遗忘，这般靠词语暂时维系的现实终将一去不返。"
      ]
    },
    {
      id: "melquiades-room",
      name: "梅尔基亚德斯的羊皮卷房间（虚构地点）",
      city: "布恩迪亚家",
      lat: 10.5908,
      lng: -74.1822,
      page: 42,
      title: "记忆从死亡的遗忘中返回",
      intro: "梅尔基亚德斯在贴满标签的房间里归来，随后留下预写家族命运的羊皮卷。",
      excerpts: [
        "那并不是心中暂时的尚可补救的遗忘，而是另一种更残酷且不可逆转的遗忘，他对此绝不陌生，因为那正是死亡的遗忘。",
        "他给何塞·阿尔卡蒂奥·布恩迪亚喝下一种淡色液体，重新燃起了他的记忆之光。"
      ]
    },
    {
      id: "chestnut-tree",
      name: "布恩迪亚家庭院的栗树（虚构地点）",
      city: "马孔多",
      lat: 10.5901,
      lng: -74.1838,
      page: 112,
      title: "在无穷房间里走向现实",
      intro: "被缚在栗树下的何塞·阿尔卡蒂奥·布恩迪亚在无穷房间的梦里行走，最终把梦中的房间当作现实。",
      excerpts: [
        "一个人的时候，何塞·阿尔卡蒂奥·布恩迪亚在一个有无穷房间的梦中得到慰藉。",
        "他喜欢从一间走到另一间，仿佛漫步在镜廊中，直到普鲁邓希奥·阿基拉尔轻拍他的肩头。"
      ]
    },
    {
      id: "goldfish-workshop",
      name: "奥雷里亚诺上校的金银器作坊（虚构地点）",
      city: "布恩迪亚家",
      lat: 10.5909,
      lng: -74.1816,
      page: 135,
      title: "三十二场战争之后的小金鱼",
      intro: "上校在作坊里反复熔化和重铸小金鱼，把战争后的孤独变成封闭循环。",
      excerpts: [
        "自从那个遥远的午后父亲带他去见识冰块，他唯一的快乐时光就是在金银器作坊里打造小金鱼的时刻。",
        "他被迫发动三十二场战争，打破与死亡之间的所有协定，并像猪一样在荣誉的猪圈里打滚，最后耽搁了将近四十年才发现纯真的可贵。"
      ]
    },
    {
      id: "railway-station",
      name: "马孔多火车站（虚构地点）",
      city: "马孔多",
      lat: 10.5962,
      lng: -74.189,
      page: 176,
      title: "火车把现代世界送进马孔多",
      intro: "铁路带来电话、外乡人和香蕉公司，也把马孔多推向最喧闹、最残酷的一段历史。",
      excerpts: [
        "上帝仿佛决心要试验人类惊奇的极限，令马孔多人时时摇摆于欢乐与失望、疑惑与明了之间，结果再没有人能确切分清何处是现实的界限。",
        "铁路正式开通之后，火车于每个星期三上午十一点定时抵达，于是一座简易的木屋小站盖起来了。"
      ]
    },
    {
      id: "remedios-garden",
      name: "美人儿蕾梅黛丝升天的花园（虚构地点）",
      city: "布恩迪亚家",
      lat: 10.5898,
      lng: -74.1828,
      page: 184,
      title: "床单与她一起升向高处",
      intro: "一个叠床单的下午，美人儿蕾梅黛丝在家人眼前离开地面，日常劳作忽然向奇迹敞开。",
      excerpts: [
        "美人儿蕾梅黛丝正攥着床单的另一侧，露出一个怜悯的笑容。“正相反，”她说，“我从来没这么好过。”",
        "乌尔苏拉便任凭床单随光芒而去，看着美人儿蕾梅黛丝挥手告别，身边鼓荡放光的床单和她一起冉冉上升。"
      ]
    },
    {
      id: "banana-enclave",
      name: "香蕉公司电网区与种植园（虚构地点）",
      city: "马孔多",
      lat: 10.602,
      lng: -74.195,
      page: 232,
      title: "电网包围的公司城",
      intro: "香蕉公司以另一套秩序占据马孔多；罢工、军队与被否认的死亡都从这片种植园扩散。",
      excerpts: [
        "他发觉军队在小广场周围布下多处机枪掩体，电网内的香蕉公司所在地也被炮兵保护起来，便感觉不妙，口中涌上一阵苦涩。"
      ]
    },
    {
      id: "station-massacre",
      name: "马孔多火车站前空地（虚构地点）",
      city: "马孔多",
      lat: 10.5962,
      lng: -74.189,
      page: 233,
      title: "三千多人等待一列不会到来的火车",
      intro: "工人、妇女和孩子在车站前等待谈判专列，广场从集市般的午后转为集体屠杀与官方遗忘。",
      excerpts: [
        "包括工人、妇女和孩子在内的三千多人挤满了站前的空地，又挤进一旁已被军队用一排排机枪封锁的街道。",
        "“死人。”他解释道，“所有在车站的人都死了。”"
      ]
    },
    {
      id: "endless-rain-house",
      name: "四年雨季中的布恩迪亚家（虚构地点）",
      city: "马孔多",
      lat: 10.5899,
      lng: -74.1842,
      page: 240,
      title: "雨下了四年十一个月零两天",
      intro: "屠杀之后，漫长暴雨覆盖城市和记忆，房屋在修补、霉变与等待中慢慢失去边界。",
      excerpts: [
        "雨下了四年十一个月零两天。间或有细雨绵绵的日子，一开始人人都还身着盛装，带着久病初愈的神情预备庆祝天晴。",
        "暴雨倾盆破空而降，飓风自北方而来，掀瓴破瓦，推墙倒垣，将种植园里的残株连根拔起。"
      ]
    },
    {
      id: "turkish-street",
      name: "土耳其人大街（虚构地点）",
      city: "马孔多",
      lat: 10.5935,
      lng: -74.1795,
      page: 251,
      title: "暴雨后幸存的旧街",
      intro: "雨停后，外来繁荣已成废墟，老住户和阿拉伯商人却在苔藓、白蚁与霉味中恢复日常。",
      excerpts: [
        "市集上的商品破败不堪，店门口的货物苔藓满布，柜台被白蚁蛀坏，墙壁受潮气侵蚀，然而第三代阿拉伯人仍坐在同样的地方，带着和祖辈父辈同样的神态。"
      ]
    },
    {
      id: "parchment-final-room",
      name: "羊皮卷最后一页的房间（虚构地点）",
      city: "布恩迪亚家",
      lat: 10.5907,
      lng: -74.182,
      page: 310,
      title: "读到正在发生的最后一刻",
      intro: "奥雷里亚诺破译羊皮卷时，家族历史、正在阅读的此刻与马孔多的毁灭同时发生。",
      excerpts: [
        "那是他家族的历史，连最琐碎的细节也无一遗漏，百年前由梅尔基亚德斯预先写出。",
        "这座镜子之城——或蜃景之城——将在奥雷里亚诺·巴比伦全部译出羊皮卷之时被飓风抹去，从世人记忆中根除。",
        "羊皮卷上所载一切自永远至永远不会再重复，因为注定经受百年孤独的家族不会有第二次机会在大地上出现。"
      ]
    }
  ];

  const solitudePlaces = solitudeEntries.map((entry) => ({
    id: `solitude-${entry.id}`,
    placeId: `solitude-${entry.id}`,
    name: entry.name,
    modernName: "阿拉卡塔卡（马孔多文学地理参照）, 马格达莱纳省, 哥伦比亚",
    searchLabel: "Aracataca, Magdalena, Colombia",
    country: "哥伦比亚（文学地理参照）",
    lat: entry.lat,
    lng: entry.lng,
    type: "fictional_site",
    confidence: "ambiguous",
    precision: "area",
    pages: [entry.page],
    mentions: 1,
    literaryNote: entry.intro,
    evidenceSummary: entry.intro,
    mapNote: "马孔多及其内部地点均为小说虚构空间；坐标以马尔克斯故乡阿拉卡塔卡为文学地理参照，不等同于故事的真实发生地。",
    workId: "solitude",
    workTitle: "百年孤独",
    workAuthor: "Gabriel García Márquez",
    color: "#7d5538",
    sourceNote: "用户提供《百年孤独》中文 PDF；虚构地理明确标识，原文按完整文学场景选取。",
    quoteLabel: "发生在此地的文学场景",
    passages: entry.excerpts.map((text, passageIndex) => ({
      id: `solitude-${entry.id}-passage-${passageIndex + 1}`,
      text,
      kind: passageIndex ? "reflection" : "narrative-scene",
      type: passageIndex ? "reflection" : "narrative-scene",
      language: "zh",
      sceneContext: entry.intro
    })),
    sceneIds: [`scene-solitude-${entry.id}`]
  }));

  const solitudeScenes = solitudeEntries.map((entry, index) => ({
    id: `scene-solitude-${entry.id}`,
    sceneTitle: entry.title,
    sceneIntro: entry.intro,
    narrativeOrder: index + 1,
    excerpts: entry.excerpts.map((text, passageIndex) => ({
      id: `solitude-${entry.id}-scene-${passageIndex + 1}`,
      text,
      kind: passageIndex ? "reflection" : "narrative-scene",
      language: "zh"
    })),
    placeId: `solitude-${entry.id}`,
    workId: "solitude",
    featured: true,
    navigationPriority: true,
    contentTier: "core"
  }));

  window.LITERARY_MAP_ADDITIONS = {
    works: [
      {
        id: "yecao",
        title: "野草",
        author: "鲁迅",
        color: "#5f6849",
        format: "散文诗集",
        stories: yecaoStories,
        collectionCountLabel: "题辞 + 23 篇",
        source: "用户提供《野草》PDF；题辞与二十三篇散文诗逐篇整理，寓言、梦境与历史空间均明确标识。",
        cover: "./images/yecao-cover.webp",
        coverWidth: 226,
        coverThumb: "./images/yecao-cover-96.webp",
        coverAnchorPlaceId: "yecao-autumn-night-garden",
        coverCaption: "封面落在北京鲁迅故居：二十三篇散文诗的主要写作锚点。",
        coverOffset: [-20, -12]
      },
      {
        id: "solitude",
        title: "百年孤独",
        originalTitle: "Cien años de soledad",
        author: "Gabriel García Márquez",
        translator: "范晔",
        color: "#7d5538",
        source: "用户提供《百年孤独》中文 PDF；马孔多及其内部地点按虚构地理整理，并以阿拉卡塔卡作明确标注的文学参照。",
        cover: "./images/solitude-cover.webp",
        coverWidth: 224,
        coverThumb: "./images/solitude-cover-96.webp",
        coverAnchorPlaceId: "solitude-macondo-river",
        coverCaption: "封面落在马孔多河岸：一百年家族记忆从这里展开。",
        coverOffset: [26, -14]
      }
    ],
    places: [...yecaoPlaces, ...solitudePlaces],
    scenes: [...yecaoScenes, ...solitudeScenes]
  };
})();
