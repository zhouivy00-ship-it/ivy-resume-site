/* ===================================================================
   全站内容数据 —— 只改这个文件就能替换网站内容，不用碰 HTML
   ================================================================== */

/* ===== 1. 身份信息 ===== */
const IDENTITY = [
  { k: '姓名', v: '周旺 Ivy', icon: '🙋‍♀️' },
  { k: '求职方向', v: '产品 / 运营 / 市场', icon: '🎯' },
  { k: '求职城市', v: '北京 · 上海 · 杭州 · 长沙 · 深圳', icon: '🏙️' },
  { k: '现居', v: '北京', icon: '📌' },
  { k: '籍贯', v: '长沙', icon: '📍' },
  { k: '学校', v: '湖南第一师范学院', icon: '🎓' },
  { k: '专业', v: '市场营销（管理学）', icon: '📚' },
  { k: '在校时间', v: '2023.09 – 2027.06', icon: '📅' },
  { k: 'GPA', v: '3.79 · 专业前 1%', icon: '📈' },
  { k: '语言', v: 'CET-6 · 普通话二级甲等', icon: '🗣️' },
  { k: '邮箱', v: '联系方式见简历', icon: '✉️' },
  { k: '手机', v: '联系方式见简历', icon: '📱' }
];

/* ===== 2. 实习与工作经历 ===== */
const EXPERIENCE = [
  {
    time: '2026.04 – 2026.08',
    place: '百度 · 全职实习',
    role: 'MEG 市场策略实习生',
    org: '百度',
    points: [
      'AI Agent 搭建：从团队痛点定义问题，拆出「热点抓取→选题筛选→文案写作→配图生成→排版发布」五段链路，自主开发并迭代 10+ Skill；划清人机分工，机器负责抓取、初稿与配图，人只保留封面与标题决策',
      '效果：AI 化率 80%，单篇生产耗时下降 60%，团队周更能力从 3 篇提到 10 篇；建立「生产—复盘—优化」迭代闭环，把账号数据与运营 learning 回灌为 Agent 的选题与写作规则，工具从个人使用推广为团队日常工具',
      '竞品监测产品：面向百度 APP／百度健康／慧播星 3 条业务线定义监测指标，搭建「竞品声量看板」覆盖 9 家竞品，流程周期由 4h 压缩到 1h，累计输出 30+ 期，识别 20+ 个机会窗口，推动 10+ 次营销动作落地',
      'To B 账号 0 到 1：主运营 3 个 To B 行业账号，0 预算下 4 个月粉丝突破 2000+，承接外部合作意向 10+；设计 24h／3 日／7 日三段式流量-互动-转化复盘机制，爆款率提升至 40%',
      '专家访谈体系：搭建 8 天闭环的访谈 SOP，累计完成 5 场行业专家访谈，直接支撑 7 个 BU 的营销方案与三年规划输入',
      '集团 S 级项目：参与 Create 2026 百度 AI 开发者大会协同，主导 Q2／Q3 全员会与部门团建全流程执行，预算控制在 1.3 万内、0 超支'
    ],
    tags: ['AI Agent', '竞品监测', 'To B 内容运营', '专家访谈 SOP']
  },
  {
    time: '2026.01 – 2026.03',
    place: '安克创新 · 实习',
    role: '跨境电商运营实习生',
    org: '安克创新科技股份有限公司',
    points: [
      '业务运营：负责雀巢、华硕、飞利浦等 50+ 品牌跨境电商 To B 软件业务，每日账号巡检与阶段报告输出',
      '投放优化：基于领星 ERP 监控 ADS／GMV／ROI 核心指标，结合精推与平铺投放调整策略，推动项目多次提前达成 GMV 目标并节约预算；参与新人 SOP 撰写',
      '数据支持：用 H10 做行业大盘、竞品排名与 GMV 分析，用 Excel 处理海量数据并搭建数据看板，与广告、物流 FBA 等跨部门协同'
    ],
    tags: ['跨境电商', '投放优化', '数据看板']
  },
  {
    time: '2024.09 – 至今',
    place: '长沙师韵文化 · 创业',
    role: '创始团队成员 · 营销负责人',
    org: '长沙师韵文化有限公司（校园文创零售）',
    points: [
      '业务从 0 到 1：参与从注册公司到跑通生意模型全过程，负责营销与增长模块；B2C 面向高校学生做文创零售，B2B 面向事业单位、企业、景区提供文创定制，两条线共用同一套设计与供应链能力',
      'B2C 零售（快闪 + 私域）：主导策划 10+ 场线下快闪，覆盖校内新老校区、五一广场、靖港集市等多场景，单日最高销售额 5000+ 元',
      'B2B 定制：对接事业单位、企业与景区定制需求，把零售验证过的爆款元素复用进定制方案，缩短提案周期',
      '获客链路：用线下快闪为小红书、社群账号导流，累计增粉 1000+，把一次性到店客流沉淀为可复用的私域流量',
      '团队与复盘：负责人员分工、资源协调与活动复盘，把每场活动的动线、物料、人力配置沉淀成可复用 checklist'
    ],
    tags: ['0 到 1', '线下快闪', '私域增长', 'B2B 定制']
  }
];

/* ===== 3. 经历与荣誉 =====
   每行格式：年份 - 内容        （可选加 " | 类别"）
   类别：荣誉 / 竞赛 / 活动 */

/* 证书 / 荣誉照片：图片放进 证书/ 文件夹后把路径填进 file */
const CERT_SUMMARY = '电子商务三创赛拿到全国总决赛金奖，省赛一等到三等共 5 项；国家励志奖学金 + 校级一等奖学金，连续两年校三好学生、校优秀学生干部；志愿服务累计 183 小时。';

const CERTS = [
  { name: '国家励志奖学金', year: '2024', level: '国家级', file: 'assets/certs/certs-01.jpg' },
  { name: '全国大学生电子商务三创赛 全国总决赛', year: '2025', level: '国家级', file: 'assets/certs/certs-02.jpg' },
  { name: '三创赛湖南赛区省级选拔赛 一等奖', year: '2025', level: '省级', file: 'assets/certs/certs-03.jpg' },
  { name: '三创赛湖南赛区省级选拔赛（产学用）二等奖', year: '2025', level: '省级', file: 'assets/certs/certs-04.jpg' },
  { name: '中国国际大学生创新大赛湖南省赛 三等奖', year: '2025', level: '省级', file: 'assets/certs/certs-05.jpg' },
  { name: '学创杯湖南省选拔赛 数字营销模拟 二等奖', year: '2025', level: '省级', file: 'assets/certs/certs-06.jpg' },
  { name: '湖南省大学生电子商务大赛 主题赛 二等奖', year: '2025', level: '省级', file: 'assets/certs/certs-07.jpg' },
  { name: '湖南省青马骨干网络培训班 结业', year: '2025', level: '省级', file: 'assets/certs/certs-08.jpg' },
  { name: '校级一等奖学金', year: '2025', level: '校级', file: 'assets/certs/certs-09.jpg' },
  { name: '校级二等奖学金', year: '2024', level: '校级', file: 'assets/certs/certs-10.jpg' },
  { name: '校三好学生', year: '2025', level: '校级', file: 'assets/certs/certs-11.jpg' },
  { name: '校三好学生', year: '2024', level: '校级', file: 'assets/certs/certs-12.jpg' },
  { name: '校优秀学生干部', year: '2025', level: '校级', file: 'assets/certs/certs-13.jpg' },
  { name: '校优秀共青团员', year: '2025', level: '校级', file: 'assets/certs/certs-14.jpg' },
  { name: '商学院十佳共青团员', year: '2025', level: '校级', file: 'assets/certs/certs-15.jpg' },
  { name: '优良学风宿舍', year: '2025', level: '校级', file: 'assets/certs/certs-16.jpg' },
  { name: '中国国际大学生创新大赛 校赛 一等奖', year: '2025', level: '校级', file: 'assets/certs/certs-17.jpg' },
  { name: '校职业规划大赛 成长赛道 三等奖', year: '2025', level: '校级', file: 'assets/certs/certs-18.jpg' },
  { name: '青马工程 优秀小组 一等奖', year: '2024', level: '校级', file: 'assets/certs/certs-19.jpg' },
  { name: '心理配音大赛 三等奖', year: '2024', level: '校级', file: 'assets/certs/certs-20.jpg' },
  { name: '校运动会 混合甲组接力', year: '2023', level: '校级', file: 'assets/certs/certs-21.jpg' },
  { name: '太阳慈善公益奖学金（2025 年度）', year: '2025', level: '校级', file: 'assets/certs/certs-22.jpg' },
  { name: '太阳慈善公益奖学金（2024 年度）', year: '2025', level: '校级', file: 'assets/certs/certs-23.jpg' },
  { name: '新华联助学奖励金', year: '2025', level: '校级', file: 'assets/certs/certs-24.jpg' },
  { name: '东风杯新媒体营销策划大赛 二等奖', year: '2024', level: '校级', file: 'assets/certs/certs-25.jpg' },
  { name: 'CET-4 成绩报告单 490 分', year: '2024', level: '技能', file: 'assets/certs/certs-26.jpg' },
  { name: '普通话水平测试 二级甲等', year: '2024', level: '技能', file: 'assets/certs/certs-27.jpg' },
  { name: '全国计算机二级 WPS Office', year: '2025', level: '技能', file: 'assets/certs/certs-28.jpg' },
  { name: '太阳树洞 优秀回信志愿者', year: '2024', level: '其他', file: 'assets/certs/certs-29.jpg' },
  { name: '太阳树洞 志愿服务', year: '2024', level: '其他', file: 'assets/certs/certs-30.jpg' },
  { name: '小学成长夏令营 志愿服务 48 小时', year: '2024', level: '其他', file: 'assets/certs/certs-31.jpg' },
  { name: '小问号 weekend 一对一志愿者', year: '2024', level: '其他', file: 'assets/certs/certs-32.jpg' },
  { name: '森林信使 优秀志愿者', year: '2025', level: '其他', file: 'assets/certs/certs-33.jpg' },
  { name: '森林信使 创意之星', year: '2025', level: '其他', file: 'assets/certs/certs-34.jpg' },
  { name: '童行在线课堂 课题之星', year: '2025', level: '其他', file: 'assets/certs/certs-35.jpg' },
  { name: '志愿服务时长 183 小时', year: '2025', level: '其他', file: 'assets/certs/certs-36.jpg' }
];

/* ===== 4. 我的大学 ===== */
const UNIVERSITY = {
  name: '湖南第一师范学院',
  major: '市场营销（管理学） · 2023.09 – 2027.06 ｜ 数智营销微专业 · 2024.09 – 2025.06',
  desc: '湖南第一师范学院前身可追溯至南宋时期创办的城南书院，素有「千年学府、百年师范」之誉，也是毛泽东青年时期求学的重要学府，学校现已形成城南书院校区与东方红校区相承发展的办学格局。我所就读的市场营销专业入选国家级一流本科专业建设点，课程涵盖市场调研、品牌营销、整合营销与新媒体营销；同时辅修数智营销微专业，系统学习商业数据分析、Python 与数智营销策略，逐步构建市场洞察、数据分析与业务实践相结合的能力体系。',
  tags: ['市场营销', '市场调研与预测', '整合营销', '商业大数据分析', 'Python / 爬虫', '数智营销'],
  photos: [
    { file: 'assets/campus/campus-01.jpg', cap: '东方红校区｜现代校园' },
    { file: 'assets/campus/campus-08.jpg', cap: '城南书院校区｜毛泽东母校老校区' },
    { file: 'assets/campus/campus-02.jpg', cap: '项目路演｜商业实践' },
    { file: 'assets/campus/campus-03.jpg', cap: '毕业晚会｜艺术团舞台实践' }
  ],
  stats: [
    { n: 'GPA 3.79', l: '专业前 1%' },
    { n: '双专业', l: '本专业 + 微专业' },
    { n: '25 项', l: '校级以上荣誉' }
  ]
};

/* ===== 4.5 校园经历（学生工作） ===== */
const CAMPUS_ROLES = [
  {
    level: 'organ',
    role: '校新媒体中心宣传部干部', org: '湖南第一师范学院 · 校新媒体中心',
    time: '2023.09 – 2026.06', tag: '新媒体', icon: '📣',
    points: [
      '负责校级新媒体账号的选题、文案与配图，参与日常内容排期与发布',
      '承接校内活动的宣传物料，从海报、推文到现场记录一条线跟到底',
      '做得久了对「什么标题会被点开」有了手感，后来直接用在实习的账号运营上'
    ]
  },
  {
    level: 'class',
    role: '23 级营销 1 班副班长', org: '商学院 · 市场营销 1 班',
    time: '2025.09 – 2026.09', tag: '班级', icon: '🧑‍🤝‍🧑',
    points: [
      '协助班长处理班级日常事务，跟进考勤、评奖评优与材料汇总',
      '牵头班级活动的分工与排期，把流程写成 checklist 交接给下一届'
    ]
  },
  {
    level: 'class',
    role: '23 级营销 1 班组织委员', org: '商学院 · 市场营销 1 班',
    time: '2023.09 – 2024.06', tag: '班级', icon: '📋',
    points: [
      '负责班级团组织生活、志愿服务与团日活动的组织落地',
      '统计成员参与情况并做记录归档，志愿服务时长累计 183 小时'
    ]
  },
  {
    level: 'organ',
    role: '商学院学生会文体部副部长', org: '商学院 · 学生会文体部',
    time: '2024.09 – 2025.06', tag: '学生会', icon: '🎤',
    points: [
      '统筹学院文艺与体育活动，从策划、排练到现场执行全流程跟进',
      '协调场地、器材与人员分工，对接多个班级完成节目与赛事报名',
      '带队参与院校两级活动，也在毕业晚会等场合自己上台演出'
    ]
  },
  {
    level: 'class',
    role: '23 级营销 1 班班长', org: '商学院 · 市场营销 1 班',
    time: '2024.09 – 2025.09', tag: '班级', icon: '⭐',
    points: [
      '负责班级整体运转：课务对接、评优组织、日常事务与信息传达',
      '任内班级获评优良学风宿舍等集体荣誉，个人连续两年获校三好学生'
    ]
  },
  {
    level: 'organ',
    role: '商学院艺术团表演队队长', org: '商学院 · 艺术团表演队',
    time: '2024.06 – 2025.06', tag: '艺术团', icon: '💃',
    points: [
      '带表演队排练与参演，负责节目编排、排练排期和演出统筹',
      '院级晚会、迎新与毕业晚会的舞台节目基本都参与其中'
    ]
  }
];

/* ===== 5. 自我评价 ===== */
const SELF_EVAL = {
  keywords: ['善用工具', '数据里找答案', '产品 / 运营 / 市场', 'ENFJ · 爱交朋友'],
  quote: '善用工具，习惯从数据里找答案——这套打法，产品、运营、市场都适用。',
  paras: [
    '产品、运营、市场这三个方向，我都是真干过的：在百度把内容生产的流程拆开、做成一套 Agent，写稿效率提了六成；独立运营 3 个 To B 账号，0 预算做到 2000+ 粉；还管过跨境电商的投放和数据分析。不是「了解过」，是亲手跑通的那种。',
    '我的工作习惯一句话：把重复的活交给工具，用数据说人话。先定指标再动手，做完一定复盘归因——账号做 24h／3 日／7 日三段式复盘，竞品搭声量看板，机会点都是拿数据一个个找出来的。Python、Tableau、SPSS 这些自己上手，新工具也总想第一个试。',
    'ENFJ 本人，性格外向、爱交朋友，跟谁都能聊到一块——聊着聊着就能摸出对方真正的需求。私下爱打王者荣耀、第五人格，也爱上网冲浪看热点，这些在我这儿都是「观察场」：游戏里看玩家心理，评论区里看舆论风向，顺手就攒成了做内容、做产品的素材。'
  ]
};

/* ===== 5.5 个人特质（横向拖拽长廊）=====
   每条：特质名 + 一句话说明 + 一个能证明它的事实
   size 用 'tall' / 'short' 交替，做错落节奏 */
const TRAITS = [
  { name: '把重复的活做成工具', line: '同一件事做到第三遍，我就想把它做成工具——产品和运营都靠这个提效。',
    proof: '内容生产拆成五段链路 + 10 余个 Skill，AI 化率 80%', sticker: 'note', size: 'tall', tone: 'var(--purple-soft)', img: 'assets/traits/tr-auto.jpg', num: '80%', numLabel: 'AI 化率', key: '自动化' },
  { name: '数据敏感', line: '先定义指标再动手，做完一定复盘归因——运营和投放都得这么盯。',
    proof: '账号 24h／3 日／7 日三段式复盘，爆款率提到 40%', sticker: 'star', size: 'short', tone: 'var(--yellow-soft)', img: 'assets/traits/tr-data.jpg', num: '40%', numLabel: '爆款率', key: '看数据' },
  { name: '抗压且要结果', line: '事情堆一起的时候先排优先级，不靠硬扛。',
    proof: 'Q2／Q3 全员会与团建全流程，预算 1.3 万内 0 超支', sticker: 'spark', size: 'tall', tone: 'var(--pink-soft)', img: 'assets/traits/tr-tough.jpg', num: '1.3 万内', numLabel: '预算 0 超支', key: '扛得住' },
  { name: '跨部门推得动', line: '把需求讲成对方能接的话，事才落得下去。',
    proof: '专家访谈串联市场 BP 与采购 3+ 部门，支撑 7 个 BU', sticker: 'smile', size: 'short', tone: 'var(--mint-soft)', img: 'assets/traits/tr-drive.jpg', num: '7 个 BU', numLabel: '方案支撑', key: '推得动' },
  { name: '从 0 到 1 的执行力', line: '没有现成流程的时候，我反而更兴奋一点。',
    proof: '0 预算把 3 个 To B 账号做到 2000+ 粉；参与开公司跑通生意模型', sticker: 'heart', size: 'tall', tone: 'var(--yellow-soft)', img: 'assets/traits/tr-zero.jpg', num: '2000+', numLabel: '0 预算涨粉', key: '从 0 开始' },
  { name: '学得快', line: '缺什么就去补，补完立刻用在手上的活里。',
    proof: '本专业之外双修数智营销微专业，Python 与爬虫现学现用', sticker: 'cloud', size: 'short', tone: 'var(--purple-soft)', img: 'assets/traits/tr-learn.jpg', num: '前 1%', numLabel: 'GPA 3.79', key: '现学现用' },
  { name: '会观察，也在乎审美', line: '逛街逛平台都在想「这个体验为什么这样设计」，需求就是这么攒出来的。',
    proof: '爱好摄影与旅游；和团队把校园元素做成能卖出去的文创', sticker: 'peach', size: 'tall', tone: 'var(--pink-soft)', img: 'assets/traits/tr-observe.jpg', num: '40+', numLabel: '走过的城市', key: '爱观察' },
  { name: '组织与统筹', line: '排期、分工、复盘 checklist，我习惯先写清楚再开工。',
    proof: '班长 + 艺术团表演队队长；主导 10+ 场线下快闪', sticker: 'flower', size: 'short', tone: 'var(--mint-soft)', img: 'assets/traits/tr-plan.jpg', num: '10+ 场', numLabel: '线下快闪', key: '统筹' }
];

const TRAITS_INTRO = '八条特质，每条都配一件能证明它的事。点卡片可以翻面看对应的能力图，左右拖动看完整条长廊。';

/* ===== 6. 扭蛋机：技能蛋 ===== */
const SKILL_CARDS = [
  { name: 'AI Agent 搭建', emoji: '🤖', rare: 'SSR', desc: '产品向：五段式内容链路拆解 + 10 余个 Skill 迭代，AI 化率做到 80%。', img: 'assets/gacha/gk-agent.jpg' },
  { name: '数据分析', emoji: '📊', rare: 'SSR', desc: '三个方向都吃饭的家伙：Python、SPSS、Tableau、Excel 透视，能自己搭看板。', img: 'assets/gacha/gk-data.jpg' },
  { name: '竞品监测', emoji: '🔍', rare: 'SSR', desc: '市场向：定义指标、搭声量看板，把 4 小时的活压到 1 小时。', img: 'assets/gacha/gk-compete.jpg' },
  { name: 'GTM 与新品孵化', emoji: '🚀', rare: 'SR', desc: '运营 + 市场：分阶段策略、推广资源整合，负责把新东西推出去。', img: 'assets/gacha/gk-gtm.jpg' },
  { name: '用户与行业调研', emoji: '🎤', rare: 'SR', desc: '产品向：问卷、访谈、竞品拆解与需求输出，专家访谈 SOP 8 天闭环。', img: 'assets/gacha/gk-research.jpg' },
  { name: '跨部门协同', emoji: '🤝', rare: 'SR', desc: '串联产研、业务、市场、采购，推动项目真正落地。', img: 'assets/gacha/gk-team.jpg' },
  { name: '产品工具', emoji: '🧩', rare: 'R', desc: 'Axure、Figma、Canva、Xmind、飞书文档协同。', img: 'assets/gacha/gk-tools.jpg' },
  { name: '平台工具', emoji: '🛠️', rare: 'R', desc: '数说（舆情监测）、领星 ERP、H10、亚马逊后台。', img: 'assets/gacha/gk-platform.jpg' }
];

/* ===== 7. 扭蛋机：兴趣蛋 ===== */
const INTEREST_CARDS = [
  { name: '摄影', emoji: '📷', rare: 'SSR', desc: '出门必带相机，负重也认。看画面看久了，对细节和情绪就更敏感。', img: 'assets/gacha/gk-photo.jpg' },
  { name: '旅游', emoji: '✈️', rare: 'SSR', desc: '车票攒了 40+ 座城市，顺手记街边小店的品牌感和陈列逻辑。', img: 'assets/gacha/gk-travel.jpg' },
  { name: '爬山', emoji: '⛰️', rare: 'SSR', desc: '衡山看过日出，玉龙雪山喘着气也拍了一张。', img: 'assets/gacha/gk-climb.jpg' },
  { name: '徒步', emoji: '🥾', rare: 'SR', desc: '虎跳峡下到江边才知道腿会抖，走完还是想再来。', img: 'assets/gacha/gk-hike.jpg' },
  { name: '露营', emoji: '⛺', rare: 'SR', desc: '搭帐篷、生火、发呆看星星，一整套流程做得挺熟。', img: 'assets/gacha/gk-camp.jpg' },
  { name: '游泳', emoji: '🏊', rare: 'SR', desc: '夏天的固定项目，还顺便学会了潜水。', img: 'assets/gacha/gk-swim.jpg' },
  { name: '舞台表演', emoji: '💃', rare: 'SR', desc: '商学院艺术团表演队队长，统筹排练也上台跳。', img: 'assets/gacha/gk-stage.jpg' },
  { name: '文创设计', emoji: '🎨', rare: 'SR', desc: '和团队一起把校园元素做成能卖出去的文创产品。', img: 'assets/gacha/gk-design.jpg' },
  { name: '打王者', emoji: '⚔️', rare: 'SR', desc: '王者荣耀，常驻中路，输了会复盘，赢了话更多。', img: 'assets/gacha/gk-king.jpg' },
  { name: '上网冲浪', emoji: '🏄', rare: 'R', desc: '热点、梗、评论区都是素材库，刷完顺手记到选题里。', img: 'assets/gacha/gk-surfing.jpg' },
  { name: '桌游', emoji: '🎲', rare: 'R', desc: '喜欢要动脑的那种，输了会复盘，赢了话更多。', img: 'assets/gacha/gk-boardgame.jpg' },
  { name: '看电影', emoji: '🎬', rare: 'R', desc: '一个人也能进影院，看完喜欢跟人掰扯设定和细节。', img: 'assets/gacha/gk-movie.jpg' },
  { name: '听音乐', emoji: '🎧', rare: 'R', desc: '通勤、写稿、发呆都得有背景音，歌单按心情分好几套。', img: 'assets/gacha/gk-music.jpg' },
  { name: '小酌', emoji: '🍹', rare: 'R', desc: '不贪杯，就爱那个氛围——一杯就够聊到打烊。', img: 'assets/gacha/gk-drink.jpg' },
  { name: '追新 AI 工具', emoji: '📲', rare: 'R', desc: '新模型新工具第一批上手，顺手就想着能不能接进工作流。', img: 'assets/gacha/gk-ai.jpg' }
];

/* ===== 8. 常用工具 ===== */
const TOOLS = [
  { g: '数据分析', items: ['Python', 'SPSS', 'Excel（函数/透视）'] },
  { g: '可视化与看板', items: ['Tableau', 'Gephi', '数说（舆情监测）'] },
  { g: '产品与设计', items: ['Axure', 'Figma', 'Xmind', 'Canva'] },
  { g: '电商与投放', items: ['领星 ERP', 'H10', '亚马逊后台'] },
  { g: '协作', items: ['飞书文档'] }
];

/* ===== 9. 生活碎片（旅行 / 摄影 / 日常）=====
   把照片放进 生活照/ 文件夹，file 填路径，留空显示占位色块
   size 填 'big' 时占两格 */
const LIFE_PHOTOS = [
  { file: 'assets/travel/travel-01.jpg', cap: '万宁｜冲浪没学会，日落全看会了', tag: '旅行', size: 'big' },
  { file: 'assets/travel/travel-02.jpg', cap: '三亚｜咸咸的风，不想上岸的下午', tag: '旅行' },
  { file: 'assets/travel/travel-03.jpg', cap: '东莞｜顺手把街边小店逛了个遍', tag: '旅行' },
  { file: 'assets/travel/travel-04.jpg', cap: '乌镇｜桥比导航还多', tag: '旅行' },
  { file: 'assets/travel/travel-05.jpg', cap: '佛山｜早茶从八点吃到十一点', tag: '旅行' },
  { file: 'assets/travel/travel-06.jpg', cap: '南京｜梧桐叶落满一整条街', tag: '旅行' },
  { file: 'assets/travel/travel-07.jpg', cap: '南昌｜拌粉配瓦罐汤，一天两顿', tag: '旅行' },
  { file: 'assets/travel/travel-08.jpg', cap: '大理｜风花雪月那套我全信了', tag: '旅行', size: 'big' },
  { file: 'assets/travel/travel-09.jpg', cap: '广州｜地铁挤过，糖水也没少喝', tag: '旅行' },
  { file: 'assets/travel/travel-10.jpg', cap: '成都｜辣到掉眼泪还要再来一口', tag: '旅行' },
  { file: 'assets/travel/travel-11.jpg', cap: '昆明｜四季如春不是广告词', tag: '旅行' },
  { file: 'assets/travel/travel-12.jpg', cap: '杭州｜绕西湖走完一整圈，脚废', tag: '旅行' },
  { file: 'assets/travel/travel-13.jpg', cap: '武汉｜过江轮渡比高铁浪漫', tag: '旅行' },
  { file: 'assets/travel/travel-14.jpg', cap: '海口｜骑车去看海，耳朵被吹麻', tag: '旅行' },
  { file: 'assets/travel/travel-15.jpg', cap: '澳门｜赌场没进，蛋挞吃了三家', tag: '旅行', size: 'big' },
  { file: 'assets/travel/travel-16.jpg', cap: '苏州｜园林每扇窗都是取景框', tag: '旅行' },
  { file: 'assets/travel/travel-17.jpg', cap: '重庆｜导航失灵，八楼原来是一楼', tag: '旅行' },
  { file: 'assets/travel/travel-18.jpg', cap: '香格里拉｜海拔上来了，话变少了', tag: '旅行' },
  { file: 'assets/travel/travel-19.jpg', cap: '香港｜霓虹底下走到腿软', tag: '旅行' },
  { file: 'assets/travel/travel-20.jpg', cap: '北海｜海鲜吃到扶墙，日落追了三天', tag: '旅行' },
  { file: 'assets/travel/travel-21.jpg', cap: '桂林｜山水真跟课本上一样', tag: '旅行' },
  { file: 'assets/travel/travel-22.jpg', cap: '绍兴｜黄酒抿一口，臭豆腐吃两份', tag: '旅行' },
  { file: 'assets/photo/photo-01.jpg', cap: '我拍的 · 01', tag: '摄影' },
  { file: 'assets/photo/photo-02.jpg', cap: '我拍的 · 02', tag: '摄影' },
  { file: 'assets/photo/photo-03.jpg', cap: '我拍的 · 03', tag: '摄影' },
  { file: 'assets/photo/photo-04.jpg', cap: '我拍的 · 04', tag: '摄影' },
  { file: 'assets/photo/photo-05.jpg', cap: '我拍的 · 05', tag: '摄影' },
  { file: 'assets/photo/photo-06.jpg', cap: '我拍的 · 06', tag: '摄影' },
  { file: 'assets/photo/photo-07.jpg', cap: '我拍的 · 07', tag: '摄影' },
  { file: 'assets/photo/photo-08.jpg', cap: '我拍的 · 08', tag: '摄影' },
  { file: 'assets/photo/photo-09.jpg', cap: '我拍的 · 09', tag: '摄影' },
  { file: 'assets/photo/photo-10.jpg', cap: '我拍的 · 10', tag: '摄影' },
  { file: 'assets/photo/photo-11.jpg', cap: '我拍的 · 11', tag: '摄影' },
  { file: 'assets/photo/photo-12.jpg', cap: '我拍的 · 12', tag: '摄影' },
  { file: 'assets/photo/photo-13.jpg', cap: '我拍的 · 13', tag: '摄影' },
  { file: 'assets/photo/photo-14.jpg', cap: '我拍的 · 14', tag: '摄影' },
  { file: 'assets/photo/photo-15.jpg', cap: '我拍的 · 15', tag: '摄影' },
  { file: 'assets/photo/photo-16.jpg', cap: '我拍的 · 16', tag: '摄影' },
  { file: 'assets/photo/photo-17.jpg', cap: '我拍的 · 17', tag: '摄影' },
  { file: 'assets/photo/photo-18.jpg', cap: '我拍的 · 18', tag: '摄影' },
  { file: 'assets/photo/photo-19.jpg', cap: '我拍的 · 19', tag: '摄影' },
  { file: 'assets/photo/photo-20.jpg', cap: '我拍的 · 20', tag: '摄影' },
  { file: 'assets/photo/photo-21.jpg', cap: '我拍的 · 21', tag: '摄影' },
  { file: 'assets/photo/photo-22.jpg', cap: '我拍的 · 22', tag: '摄影' },
  { file: 'assets/photo/photo-23.jpg', cap: '我拍的 · 23', tag: '摄影' },
  { file: 'assets/photo/photo-24.jpg', cap: '我拍的 · 24', tag: '摄影' },
  { file: 'assets/photo/photo-25.jpg', cap: '我拍的 · 25', tag: '摄影' },
  { file: 'assets/photo/photo-26.jpg', cap: '我拍的 · 26', tag: '摄影' },
  { file: 'assets/photo/photo-27.jpg', cap: '我拍的 · 27', tag: '摄影' },
  { file: 'assets/photo/photo-28.jpg', cap: '我拍的 · 28', tag: '摄影' },
  { file: 'assets/photo/photo-29.jpg', cap: '我拍的 · 29', tag: '摄影' },
  { file: 'assets/photo/photo-30.jpg', cap: '我拍的 · 30', tag: '摄影' },
  { file: 'assets/photo/photo-31.jpg', cap: '我拍的 · 31', tag: '摄影' },
  { file: 'assets/photo/photo-32.jpg', cap: '我拍的 · 32', tag: '摄影' },
  { file: 'assets/photo/photo-33.jpg', cap: '我拍的 · 33', tag: '摄影' },
  { file: 'assets/photo/photo-34.jpg', cap: '我拍的 · 34', tag: '摄影' },
  { file: 'assets/photo/photo-35.jpg', cap: '我拍的 · 35', tag: '摄影' },
  { file: 'assets/photo/photo-36.jpg', cap: '我拍的 · 36', tag: '摄影' },
  { file: 'assets/photo/photo-37.jpg', cap: '我拍的 · 37', tag: '摄影' },
  { file: 'assets/photo/photo-38.jpg', cap: '我拍的 · 38', tag: '摄影' },
  { file: 'assets/photo/photo-39.jpg', cap: '我拍的 · 39', tag: '摄影' },
  { file: 'assets/photo/photo-40.jpg', cap: '我拍的 · 40', tag: '摄影' },
  { file: 'assets/hobby/hobby-01.jpg', cap: '徒步｜路边这朵蘑菇比我高', tag: '户外' },
  { file: 'assets/hobby/hobby-02.jpg', cap: '虎跳峡｜下到江边才知道腿会抖', tag: '户外' },
  { file: 'assets/hobby/hobby-11.jpg', cap: '玉龙雪山｜喘着气也要拍一张', tag: '户外', size: 'big' },
  { file: 'assets/hobby/hobby-12.jpg', cap: '衡山｜起早看日出，冷得直跳', tag: '户外' },
  { file: 'assets/hobby/hobby-14.jpg', cap: '武功山｜云海是爬上去才给看的', tag: '户外' },
  { file: 'assets/hobby/hobby-09.jpg', cap: '滑翔伞｜起飞前很怂，落地想再来', tag: '户外' },
  { file: 'assets/hobby/hobby-15.jpg', cap: '深潜｜第一次在水下呼吸', tag: '户外' },
  { file: 'assets/hobby/hobby-16.jpg', cap: '浮潜｜贴近海面看另一种蓝', tag: '户外' },
  { file: 'assets/hobby/hobby-08.jpg', cap: '游泳｜夏天的固定项目', tag: '户外' },
  { file: 'assets/hobby/hobby-13.jpg', cap: '野餐｜带的吃的比玩的多', tag: '户外' },
];

/* 去过的城市 / 想去的城市（先按籍贯长沙放了几个，你自己改） */
const CITIES = {
  been: ['万宁', '三亚', '东莞', '乌镇', '佛山', '南京', '南昌', '大理', '广州', '成都', '昆明', '杭州', '武汉', '海口', '澳门', '苏州', '重庆', '香格里拉', '香港', '北海', '桂林', '绍兴', '未完待续…'],
  next: ['西藏', '西班牙', '法国', '日本', '冰岛', '摩洛哥']
};

const LIFE_INTRO = '车票攒了 40+ 座城市，相机存了几万张。下面这些是随手翻出来的几张——山爬过、伞飞过、水下也待过。看得多了，做内容时对画面和情绪就更有把握。';

/* Hero 右下角的「正在做的事」小卡 */
const NOW_CARD = { title: '产品 / 运营 / 市场', desc: '补产品方法论，也在继续迭代内容与增长的工具' };

/* ===== 9. 创业：师韵文化 ===== */
const STARTUP = {
  name: '师韵文化 · 青年红色文创',
  role: '联合创办 · 负责营销与增长',
  time: '2024.09 – 至今',
  intro: '师韵文化由湖南第一师范学院跨专业在校生团队共同发起，围绕红色文化与湖南非遗开展文创产品开发。目前已与 20+ 家企业签订合作，并在长沙开设两家线下门店。我自公司注册阶段起参与项目，负责营销与增长：B2C 通过线下快闪与门店验证产品并沉淀私域流量，B2B 将零售端验证有效的产品元素复用于机构定制方案，形成零售与定制协同发展的业务模式。',
  stats: [
    { n: '20+', l: '合作企业' },
    { n: '2 家', l: '线下门店' },
    { n: '5000+ 元', l: '单日最高销售额' },
    { n: '10+ 场', l: '线下快闪' },
    { n: '1000+', l: '累计增粉' },
    { n: '2 条线', l: 'B2C + B2B 定制' }
  ],
  groups: [
    {
      title: '品牌与账号', note: '建立小红书、抖音与公众号矩阵，统一品牌视觉与内容表达',
      photos: [
        { file: 'assets/startup/startup-38.jpg', cap: '线下门店 1' },
        { file: 'assets/startup/startup-39.jpg', cap: '线下门店 2' },
        { file: 'assets/startup/startup-29.jpg', cap: '合作企业' },
        { file: 'assets/startup/startup-33.jpg', cap: '跳蚤市场' },
        { file: 'assets/startup/startup-01.jpg', cap: '小红书主页' },
        { file: 'assets/startup/startup-02.jpg', cap: '抖音主页' },
        { file: 'assets/startup/startup-26.jpg', cap: '公众号' },
        { file: 'assets/startup/startup-34.jpg', cap: '兼职群' },
        { file: 'assets/startup/startup-35.jpg', cap: '私域运营群聊' }
      ]
    },
    {
      title: '市中心市集', note: '受邀参与五一商圈文创市集，单日最高销售额 5000+ 元',
      photos: [
        { file: 'assets/startup/startup-03.jpg', cap: '五一油脂厂｜湖南文旅厅邀请' },
        { file: 'assets/startup/startup-04.jpg', cap: '五一油脂厂｜摊位全景' },
        { file: 'assets/startup/startup-05.jpg', cap: '五一油脂厂｜品牌视觉' },
        { file: 'assets/startup/startup-06.jpg', cap: '五一油脂厂｜产品特写' }
      ]
    },
    {
      title: '古镇与老校区', note: '进入景区与红色文化场馆，验证不同客群的产品偏好',
      photos: [
        { file: 'assets/startup/startup-07.jpg', cap: '靖港古镇｜集市开摊' },
        { file: 'assets/startup/startup-08.jpg', cap: '靖港古镇｜客流最旺那阵' },
        { file: 'assets/startup/startup-09.jpg', cap: '靖港古镇｜和游客聊产品' },
        { file: 'assets/startup/startup-10.jpg', cap: '靖港古镇｜收摊前' },
        { file: 'assets/startup/startup-11.jpg', cap: '城南老校区｜毛泽东纪念馆' },
        { file: 'assets/startup/startup-12.jpg', cap: '城南老校区｜纪念馆门口摆摊' }
      ]
    },
    {
      title: '校园场景', note: '围绕开学季、毕业季与校运会等节点开展场景化营销',
      photos: [
        { file: 'assets/startup/startup-13.jpg', cap: '开学季｜人流最猛那几天' },
        { file: 'assets/startup/startup-14.jpg', cap: '毕业季｜毕业礼定制' },
        { file: 'assets/startup/startup-15.jpg', cap: '校园藏宝｜自己策划的玩法' },
        { file: 'assets/startup/startup-16.jpg', cap: '校运会｜看比赛的人顺路买单' },
        { file: 'assets/startup/startup-27.jpg', cap: '毕遇 520｜毕业季活动推文' },
        { file: 'assets/startup/startup-30.jpg', cap: '校园跑活动' },
        { file: 'assets/startup/startup-31.jpg', cap: '套圈游戏' },
        { file: 'assets/startup/startup-32.jpg', cap: '校庆活动' }
      ]
    },
    {
      title: '品牌合作与公益', note: '通过品牌联动与公益议题拓展项目的传播价值与社会价值',
      photos: [
        { file: 'assets/startup/startup-17.jpg', cap: '益声友你｜和品牌联办' },
        { file: 'assets/startup/startup-18.jpg', cap: '艾滋病防治宣传｜校园快闪' },
        { file: 'assets/startup/startup-19.jpg', cap: '艾滋病防治宣传｜物料发放' },
        { file: 'assets/startup/startup-20.jpg', cap: '艾滋病防治宣传｜现场互动' },
        { file: 'assets/startup/startup-28.jpg', cap: '薪之火团队｜帮扶残障人士调研考察' },
        { file: 'assets/startup/startup-36.jpg', cap: '援助新疆孩子' }
      ]
    },
    {
      title: '对外交流', note: '参与省级文创交流及共青团主题活动，拓展项目展示渠道',
      photos: [
        { file: 'assets/startup/startup-21.jpg', cap: '湖南省文创交流｜带产品参展' },
        { file: 'assets/startup/startup-22.jpg', cap: '长沙共青团活动｜团市委市集' },
        { file: 'assets/startup/startup-23.jpg', cap: '长沙共青团活动｜展位' },
        { file: 'assets/startup/startup-24.jpg', cap: '长沙共青团活动｜现场讲解' },
        { file: 'assets/startup/startup-25.jpg', cap: '长沙共青团活动｜团队合影' },
        { file: 'assets/startup/startup-37.jpg', cap: '文创出国' }
      ]
    }
  ]
};

/* ===== 10. 我做的 Agent Skill（可下载 + 可在线试用）===== */
const SKILLS = [
  {
    id: 'hot-score',
    name: '热点选题打分器',
    sticker: 'star',
    tagline: '给一个热点打分，判断值不值得写',
    desc: '在百度做账号时沉淀的选题规则：按传播度、相关度、时效性、写作成本四个维度打分，输出推荐指数和一句建议，替代凭手感拍脑袋。',
    tags: ['选题', '热点', '内容运营'],
    install: 'npx skills add zhouwang/hot-topic-scorer',
    file: 'skills/hot-topic-scorer.zip',
    demo: { engine: 'score', label: '想评估的热点', placeholder: '例如：某大厂宣布全员 AI 考核' }
  },
  {
    id: 'xhs-title',
    name: '标题生成器',
    sticker: 'spark',
    tagline: '输入一个主题，产出 1 主 5 备的标题',
    desc: '把「实体名 + 数字 + 悬念缺口」的结构固化成规则。这是五段式内容链路里「文案写作」那一段抽出来的独立 Skill。',
    tags: ['文案', '标题', 'To B 账号'],
    install: 'npx skills add zhouwang/title-writer',
    file: 'skills/xhs-title-writer.zip',
    demo: { engine: 'title', label: '想写的主题', placeholder: '例如：To B 账号 0 到 1' }
  },
  {
    id: 'copy-polish',
    name: '文案去 AI 味',
    sticker: 'heart',
    tagline: '把一段像 AI 写的文案改回人话',
    desc: 'Agent 出的初稿常常一股 AI 味，这个 Skill 负责识别排比、空心大词、破折号滥用，给出可直接替换的口语化版本。',
    tags: ['润色', '风格', 'AI 协作'],
    install: 'npx skills add zhouwang/copy-humanizer',
    file: 'skills/copy-humanizer.zip',
    demo: { engine: 'polish', label: '粘贴一段文案', placeholder: '例如：这不仅是一次升级，更是一场深刻的变革……' }
  },
  {
    id: 'xhs-humanize',
    name: '小红书去 AI 味',
    sticker: 'flower',
    tagline: '把小红书观点文里的 AI 味去掉',
    desc: '专治小红书风格 AI／科技观点文的「议论文腔」：识别万能开场、空心大词、排比堆叠和破折号，保留人设、章节标题和加粗金句，只改语气不改信息。',
    tags: ['小红书', '观点文', '去 AI 味'],
    install: 'npx skills add zhouwang/xiaohongshu-humanizer',
    file: 'skills/xiaohongshu-humanizer.zip',
    demo: { engine: 'redbook', label: '粘贴一段小红书观点文', placeholder: '例如：AI 正在深刻改变内容行业，这不仅是技术升级，更是一场颠覆……' }
  },
  {
    id: 'xiaobi-cover',
    name: '小比封面图',
    sticker: 'peach',
    tagline: '给「小比」号生成统一风格的封面',
    desc: '面向小红书账号「小比」的封面生成器：输入标题，让小狗用一眼能看懂的表情、动作和道具把标题演出来，输出 3:4 纯白底封面。',
    tags: ['封面', '小红书', '小比'],
    install: 'npx skills add zhouwang/xiaobi-cover',
    file: 'skills/xiaobi-cover.zip'
  },
  {
    id: 'baoan-cover',
    name: '风口保安封面图',
    sticker: 'spark',
    tagline: '给「风口保安」号生成统一风格的封面',
    desc: '面向小红书账号「风口保安」的封面生成器：按账号人设把选题变成有钩子的封面标题与配图。',
    tags: ['封面', '小红书', '风口保安'],
    install: 'npx skills add zhouwang/baoan-cover',
    file: 'skills/baoan-cover.zip'
  },
  {
    id: 'lueluelue-cover',
    name: '略略略封面图',
    sticker: 'smile',
    tagline: '给「略略略」号生成统一风格的封面',
    desc: '面向小红书账号「略略略」的封面生成器：把话题整理成「实体名 + 数字 + 悬念缺口」的封面标题，配统一视觉。',
    tags: ['封面', '小红书', '略略略'],
    install: 'npx skills add zhouwang/lueluelue-cover',
    file: 'skills/lueluelue-cover.zip'
  },
  {
    id: 'dachang-scout',
    name: '大厂瓜流水线',
    sticker: 'star',
    tagline: '抓瓜 → 打分选题 → 写稿一条流',
    desc: '面向大厂职场爆料的全流程 Skill：先抓最近 24 小时脉脉爆料打分出表，选号后再按小红书爆款结构写成稿，对标「大厂瓜保田」。',
    tags: ['吃瓜', '选题', '爆款'],
    install: 'npx skills add zhouwang/dachang-scout',
    file: 'skills/dachang-scout.zip'
  },
  {
    id: 'meeting-and-brief',
    name: '会议纪要',
    sticker: 'note',
    tagline: '访谈 / 会议内容一键整理成正式纪要',
    desc: '输入「访谈提纲 + 访谈转写稿」，按提纲逐题对齐输出正式纪要（markdown + docx），关键数字单独成表，ASR 错字自动校对，支持归档入库与跨访谈检索。',
    tags: ['访谈纪要', '会议', 'docx'],
    install: 'npx skills add zhouwang/meeting-and-brief',
    file: 'skills/meeting-and-brief.zip'
  }
];

const SKILLS_INTRO = '在百度实习期间，我把内容生产拆成「热点抓取→选题筛选→文案写作→配图生成→排版发布」五段，自主开发并迭代了 10+ 个 Skill，AI 化率 80%、单篇耗时下降 60%。下面 3 个可以直接在页面里试玩，其余几个做成可下载的完整包。';

