/* ===================================================================
   作品集数据 —— 后续只改这个文件就能替换作品内容
   cat  : agent AI/工具 / ops 内容运营 / research 调研洞察 / biz 商业增长
   cover: 封面图路径，留空则用亮色渐变 + emoji 占位
   ================================================================== */
const WORKS = [
  {
    cat: 'agent', catName: 'AI / 工具', year: '2026', emoji: '🤖', badge: 'BEST',
    title: '内容生产 Agent：五段链路 + 10 余个 Skill',
    desc: '从「内容生产全靠人工、周产能受限」这个团队痛点出发，把流程拆成热点抓取→选题筛选→文案写作→配图生成→排版发布，逐段做成可独立调用、可替换的 Skill，并划清人机分工：机器出抓取、初稿和配图，人只保留封面与标题决策。',
    metrics: [{ n: '80%', l: 'AI 化率' }, { n: '-60%', l: '单篇耗时' }, { n: '3→10 篇', l: '周更能力' }],
    cover: 'assets/works/work-agent.jpg', tone: 'linear-gradient(140deg,#A99BFF 0%,#7C5CFF 100%)'
  },
  {
    cat: 'research', catName: '调研洞察', year: '2026', emoji: '🔍', badge: '看板',
    title: '竞品声量看板：3 条业务线的监测体系',
    desc: '面向百度 APP、百度健康、慧播星三条业务线的对标需求定义监测指标（声量、互动量、TOP 话题词、爆款内容），基于数说沉淀关键词库并搭建看板，覆盖豆包、DeepSeek、千问、Quark、蚂蚁阿福等 9 家竞品。',
    metrics: [{ n: '4h→1h', l: '产出周期' }, { n: '30+ 期', l: '累计输出' }, { n: '20+', l: '机会窗口' }],
    cover: 'assets/works/work-dashboard.jpg', tone: 'linear-gradient(140deg,#8FD3FF 0%,#4DA6FF 100%)'
  },
  {
    cat: 'ops', catName: '内容运营', year: '2026', emoji: '📈', badge: '0→1',
    title: 'To B 行业账号从 0 到 1',
    desc: '主运营 3 个 To B 行业账号，负责账号调研、人设定位、冷启动到内容排期全流程；设计 24h／3 日／7 日三段式流量-互动-转化复盘机制，按分时段数据表现决定加热与选题调整。',
    metrics: [{ n: '2000+', l: '0 预算涨粉' }, { n: '40%', l: '爆款率' }, { n: '10+', l: '合作意向' }],
    cover: 'assets/works/work-ops.jpg', tone: 'linear-gradient(140deg,#FF9EC4 0%,#FF4D82 100%)'
  },
  {
    cat: 'research', catName: '调研洞察', year: '2026', emoji: '🎤', badge: 'SOP',
    title: '专家访谈体系：8 天闭环 SOP',
    desc: '把专家访谈拆成需求确认→访谈框架对齐→5 家供应商需求发布→比价定价→线上访谈→纪要交付→当季 PO 结算，串联市场 BP 与采购等 3+ 个部门，并建立访谈知识库与专家评价档案。',
    metrics: [{ n: '5 场', l: '专家访谈' }, { n: '7 个 BU', l: '方案支撑' }, { n: '8 天', l: '闭环周期' }],
    cover: 'assets/works/work-interview.jpg', tone: 'linear-gradient(140deg,#7CE7D0 0%,#2ED3B7 100%)'
  },
  {
    cat: 'biz', catName: '商业增长', year: '2025', emoji: '🎪', badge: '创业',
    title: '校园文创：B2C 快闪 + B2B 定制双线',
    desc: '参与从注册公司到跑通生意模型全过程，负责营销与增长。B2C 主导 10+ 场线下快闪，覆盖新老校区、五一广场、靖港集市；B2B 把零售验证过的爆款元素复用进定制方案，缩短提案周期。',
    metrics: [{ n: '5000+ 元', l: '单日最高销售额' }, { n: '1000+', l: '累计增粉' }, { n: '10+ 场', l: '线下快闪' }],
    cover: 'assets/works/work-startup.jpg', tone: 'linear-gradient(140deg,#FFE066 0%,#FF9F45 100%)'
  },
  {
    cat: 'biz', catName: '商业增长', year: '2026', emoji: '🌏', badge: '跨境',
    title: '跨境电商 To B：投放与数据支持',
    desc: '负责雀巢、华硕、飞利浦等 50+ 品牌的跨境电商 To B 软件业务，基于领星 ERP 监控 ADS／GMV／ROI，结合精推与平铺策略调整投放；用 H10 做行业大盘与竞品排名分析，并搭建数据看板。',
    metrics: [{ n: '50+', l: '服务品牌' }, { n: '提前达成', l: 'GMV 目标' }, { n: '节约', l: '投放预算' }],
    cover: 'assets/works/work-cross.jpg', tone: 'linear-gradient(140deg,#FFB3E6 0%,#B07CFF 100%)'
  }
];
