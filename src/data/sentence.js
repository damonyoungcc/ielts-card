const sentence = [
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },

  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
  {
    eng: `There is considerable debate over how we should react if we detect a signal from an alien civilisation.`,
    zh: `如果我们探测到了来自外星文明的信号，我们应该如何回应是一个备受争议的问题。`,
  },
  {
    eng: 'The two world wars, which interrupted the supply of raw material from Japan, also stifled the European silk industry.',
    zh: '两次世界大战中断了来自日本的原材料供应，同时也抑制了欧洲的丝绸工业。',
  },
  {
    eng: 'Migration is a complex issue, and biologists define it differently, depending in part on what sorts of animals they study.',
    zh: '迁徙是一个复杂的问题，生物学家对它有不同的定义，部分取决于他们研究的动物种类',
  },
  {
    eng: 'One way is by organising backstage tours, so people can be shown round the building and learn how a theatre operates.',
    zh: '一种方式是组织参观后台，这样人们可以参观建筑，了解剧院是如何运作的。',
  },
  {
    eng: "What I'm afraid will happen is that books and magazines will all disappear, and there'll just be rows and rows of computers.",
    zh: '我担心会发生的是，书和杂志都将消失，剩下的只有一排排电脑。',
  },
  {
    eng: 'The psychological laboratory has a strong claim to legitimacy and evokes trust and confidence in those who perform there.',
    zh: '这个心理学实验室坚决声明拥有合法性并唤起了在那里参与实验的人们的信任和信心',
  },
  {
    eng: 'The displays of art museums serve as a warning of what critical practices can emerge when spontaneous criticism is suppressed.',
    zh: '艺术博物馆的陈列警示我们当自发的（艺术）批评被压制时会出现何种（艺术）批评。',
  },
  {
    eng: 'Vertical farming is an attempt to address the undoubted problems that we face in producing enough food for a growing population.',
    zh: '垂直农业试图解决我们在为不断增长的人口生产足够粮食时所面临的不容置疑的问题。',
  },
  {
    eng: 'It was not until 1500 BC, however, that the first hollow glass container was made by covering a sand core with a layer of molten glass.',
    zh: '然而，直到公元前1500年，第一个中空玻璃容器才通过用一层熔融玻璃覆盖砂芯制成。',
  },
  {
    eng: 'Many theorists believe the ideal boss should lead from behind, taking pride in collective accomplishment and giving credit where it is due.',
    zh: '许多理论家认为理想的老板应该在后方指挥，以集体成就为荣，并给予员工应得的荣誉。',
  },
];

export default sentence;
