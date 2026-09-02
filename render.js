/* ===== 小工具 ===== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ===================================================================
   0. 手绘小贴纸（原创 SVG，粗描边风格）
   用法：<span class="sticker-ico" data-sticker="star"></span>
   可选：star / heart / flower / cloud / spark / smile / peach / note
   ================================================================== */
const ST_COLOR = {
  star: '#FFD84D', heart: '#FF4D82', flower: '#FF8FB1', cloud: '#8FD3FF',
  spark: '#7C5CFF', smile: '#FFD84D', peach: '#FF9E7A', note: '#2ED3B7'
};

function stickerSVG(kind = 'star') {
  const f = ST_COLOR[kind] || ST_COLOR.star;
  const wrap = inner => `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#241F3D" stroke-width="7" stroke-linejoin="round" stroke-linecap="round">${inner}</g></svg>`;
  const shapes = {
    star: `<path d="M50 8l12 26 28 3-21 19 6 28-25-14-25 14 6-28L10 37l28-3z" fill="${f}"/>`,
    heart: `<path d="M50 88C22 68 10 54 10 38 10 24 21 14 34 14c7 0 13 3 16 8 3-5 9-8 16-8 13 0 24 10 24 24 0 16-12 30-40 50z" fill="${f}"/>`,
    flower: `<circle cx="50" cy="22" r="16" fill="${f}"/><circle cx="78" cy="42" r="16" fill="${f}"/><circle cx="67" cy="74" r="16" fill="${f}"/><circle cx="33" cy="74" r="16" fill="${f}"/><circle cx="22" cy="42" r="16" fill="${f}"/><circle cx="50" cy="50" r="13" fill="#FFF3CF"/>`,
    cloud: `<path d="M28 74c-11 0-19-8-19-18 0-9 7-17 16-18 3-12 14-20 26-20 14 0 26 10 28 24 9 1 15 8 15 17 0 9-8 15-18 15z" fill="${f}"/>`,
    spark: `<path d="M50 6l9 27 27 9-27 9-9 27-9-27-27-9 27-9z" fill="${f}"/><circle cx="84" cy="20" r="7" fill="${f}"/><circle cx="18" cy="82" r="6" fill="${f}"/>`,
    smile: `<circle cx="50" cy="50" r="40" fill="${f}"/><path d="M36 42h.5M64 42h.5" stroke-width="11"/><path d="M34 60c4 8 12 12 20 10 6-2 10-6 12-11" stroke-width="7"/>`,
    peach: `<path d="M50 90C28 90 14 76 14 58c0-15 11-26 24-26 4 0 8 1 12 4 4-3 8-4 12-4 13 0 24 11 24 26 0 18-14 32-36 32z" fill="${f}"/><path d="M50 32c2-8 8-14 16-16-2 9-7 14-16 16z" fill="#2ED3B7"/>`,
    note: `<path d="M30 20h44v44a14 14 0 11-10-13V32H40v40a14 14 0 11-10-13z" fill="${f}"/>`
  };
  return wrap(shapes[kind] || shapes.star);
}

document.querySelectorAll('[data-sticker]').forEach(el => {
  el.innerHTML = stickerSVG(el.dataset.sticker);
});



/* ===================================================================
   1. 身份信息
   ================================================================== */
$('#idGrid').innerHTML = IDENTITY.map(i => `
  <li>
    <span class="ic" aria-hidden="true">${i.icon}</span>
    <span class="kv"><span class="k">${esc(i.k)}</span><span class="v">${esc(i.v)}</span></span>
  </li>`).join('');

/* ===================================================================
   2. 自我评价
   ================================================================== */
$('#evalQuote').textContent = SELF_EVAL.quote;
$('#evalKw').innerHTML = SELF_EVAL.keywords.map(k => `<li># ${esc(k)}</li>`).join('');
$('#evalBody').innerHTML = SELF_EVAL.paras.map(p => `<p class="ph">${esc(p)}</p>`).join('');

/* ===================================================================
   2.5 实习与工作经历时间轴
   ================================================================== */
$('#expTimeline').innerHTML = EXPERIENCE.map(e => `
  <li class="tl-item">
    <div class="tl-meta"><time>${esc(e.time)}</time><span class="tl-loc">${esc(e.place)}</span></div>
    <div class="card tl-card">
      <span class="tl-dot" aria-hidden="true"></span>
      <h3>${esc(e.role)} <span class="at">@ ${esc(e.org)}</span></h3>
      <ul class="bullets">${e.points.map(p => `<li>${hlText(p)}</li>`).join('')}</ul>
      <div class="chips">${e.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
    </div>
  </li>`).join('');

/* ===================================================================
   2.7 个人特质长廊
   ================================================================== */
$('#traitsIntro').textContent = TRAITS_INTRO;
$('#traitTrack').innerHTML = TRAITS.map((t, i) => `
  <article class="trait ${t.size}" tabindex="0" role="button" aria-label="${esc(t.name)}，点击翻面看能力图">
    <div class="t-inner">
      <div class="t-face t-front" style="background:${t.tone}">
        <span class="t-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="sticker-ico t-st" data-sticker="${esc(t.sticker)}" aria-hidden="true"></span>
        <h3>${esc(t.name)}</h3>
        <p class="t-line">${esc(t.line)}</p>
        <p class="t-proof"><span>证据</span>${esc(t.proof)}</p>
        <span class="t-flip-hint">点一下翻面 ↻</span>
      </div>
      <div class="t-face t-back">
        ${t.img
          ? `<img src="${esc(t.img)}" alt="${esc(t.name)}的能力示意图">`
          : `<div class="t-back-ph" style="background:${t.tone}">
               <span class="sticker-ico t-back-st" data-sticker="${esc(t.sticker)}" aria-hidden="true"></span>
               <strong>${esc(t.key || t.name)}</strong>
               <em>能力图待生成</em>
             </div>`}
        ${t.num ? `<div class="t-ach"><strong>${esc(t.num)}</strong><span>${esc(t.numLabel)}</span></div>` : ''}
        <span class="t-back-cap">${esc(t.name)}</span>
      </div>
    </div>
  </article>`).join('') +
  `<article class="trait short trait-end">
     <div class="t-inner"><div class="t-face t-front">
       <h3>还有别的想问？</h3>
       <p class="t-line">直接翻下面的经历和作品，或者拉到最后加我微信。</p>
       <a class="btn btn-primary small" href="#contact">去联系我 →</a>
     </div></div>
   </article>`;

document.querySelectorAll('#traitTrack [data-sticker]').forEach(el => {
  el.innerHTML = stickerSVG(el.dataset.sticker);
});

/* ===================================================================
   3. 我的大学
   ================================================================== */
$('#uniName').textContent = UNIVERSITY.name;
$('#uniMajor').textContent = UNIVERSITY.major;
$('#uniDesc').textContent = UNIVERSITY.desc;
$('#uniTags').innerHTML = UNIVERSITY.tags.map(t => `<span>${esc(t)}</span>`).join('');
$('#uniStats').innerHTML = UNIVERSITY.stats
  .map(s => `<li><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></li>`).join('');
$('#uniPhotos').innerHTML = UNIVERSITY.photos.map(p => p.file
  ? `<figure class="photo" data-img="${esc(p.file)}" data-cap="${esc(p.cap)}">
       <img src="${esc(p.file)}" alt="${esc(p.cap)}" loading="lazy">
       <span class="cap">${esc(p.cap)}</span>
     </figure>`
  : `<figure class="photo"><div class="ph-box"><span>${esc(p.cap)}</span></div></figure>`).join('');

/* ===================================================================
   4. 经历与荣誉：解析「年份 - 内容 | 类别」，按年份倒序分组
   ================================================================== */

/* 证书墙：按 校级 / 省级 / 国家级 分组展示（每组放一起，不贴小标签） */
const CERT_GROUPS = [
  { key: '国家级', label: '国家级 · 国赛与国家级奖项' },
  { key: '省级', label: '省级 · 省赛与省级奖项' },
  { key: '校级', label: '校级 · 奖学金与校内荣誉' },
  { key: '技能', label: '技能与语言证书' },
  { key: '其他', label: '志愿服务与其他' }
];
/* 证书总览：各级别数量 + 一句话 */
(function () {
  const n = k => CERTS.filter(c => c.level === k).length;
  const stats = [
    { k: '国家级', v: n('国家级') },
    { k: '省级', v: n('省级') },
    { k: '校级', v: n('校级') },
    { k: '技能证书', v: n('技能') },
    { k: '志愿服务', v: n('其他') }
  ].filter(s => s.v);
  $('#certSummary').innerHTML = `
    <div class="cs-nums">
      ${stats.map(s => `<div class="cs-item"><strong>${s.v}</strong><span>${esc(s.k)}</span></div>`).join('')}
      <div class="cs-item is-total"><strong>${CERTS.length}</strong><span>合计</span></div>
    </div>
    <p class="cs-line">${CERT_SUMMARY}</p>`;
})();

$('#certGrid').innerHTML = '<div class="cert-groups" id="certGroups"></div>';

function certFigure(c) {
  return `<figure class="cert" data-img="${esc(c.file)}" data-cap="${esc(c.name)}">
      <div class="thumb">${c.file ? `<img src="${esc(c.file)}" alt="${esc(c.name)}" loading="lazy">` : '📜'}</div>
      <figcaption class="cert-meta">
        <strong>${esc(c.name)}</strong>
        <span>${esc(c.year)}</span>
      </figcaption>
    </figure>`;
}

function renderCertGroups() {
  const groups = CERT_GROUPS
    .map(g => {
      const list = CERTS.filter(c => c.level === g.key);
      return list.length ? `<section class="cert-group">
          <h4 class="cert-group-title"><span class="cg-emoji">${g.key === '国家级' ? '🥇' : g.key === '省级' ? '🥈' : g.key === '校级' ? '🎖️' : g.key === '技能' ? '📜' : '🤝'}</span>${g.label}<span class="cg-count">${list.length} 张</span></h4>
          <div class="cert-grid">${list.map(certFigure).join('')}</div>
        </section>` : '';
    })
    .join('');
  $('#certGroups').innerHTML = groups || '<p class="ph">还没有证书。</p>';
  document.getElementById('certMore').textContent = `展开全部 ${CERTS.length} 张证书 ↓`;
}
renderCertGroups();

/* ===================================================================
   4.5 校园经历
   ================================================================== */
const ROLE_GROUPS = [
  { key: 'class', title: '班级职务' },
  { key: 'organ', title: '院级及以上' }
];
function roleCardHTML(r) {
  return `<article class="card role-card">
    <span class="role-ico" aria-hidden="true">${esc(r.icon)}</span>
    <span class="role-tag">${esc(r.tag)}</span>
    <h4>${esc(r.role)}</h4>
    <p class="role-meta">${esc(r.org)} · ${esc(r.time)}</p>
    <ul class="role-points">${r.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
  </article>`;
}
$('#roleGrid').innerHTML = ROLE_GROUPS.map(g => {
  const list = CAMPUS_ROLES.filter(r => r.level === g.key);
  if (!list.length) return '';
  return `<section class="role-group">
    <h4 class="role-group-title">${esc(g.title)}<span class="role-count">${list.length}</span></h4>
    <div class="role-grid">${list.map(roleCardHTML).join('')}</div>
  </section>`;
}).join('');

/* ===================================================================
   5. 常用工具
   ================================================================== */
$('#toolChips').innerHTML = TOOLS.map(t => `
  <div class="tool-row">
    <span class="tool-group">${esc(t.g)}</span>
    <div class="chips">${t.items.map(i => `<span>${esc(i)}</span>`).join('')}</div>
  </div>`).join('');

/* ===================================================================
   6. Hero 的「正在做的事」小卡
   ================================================================== */
$('#nowTitle').textContent = NOW_CARD.title;
$('#nowDesc').textContent = NOW_CARD.desc;

/* ===================================================================
   6.5 创业：师韵文化
   ================================================================== */
$('#suName').textContent = STARTUP.name;
$('#suMeta').textContent = `${STARTUP.role} · ${STARTUP.time}`;
$('#suIntro').textContent = STARTUP.intro;
$('#suStats').innerHTML = STARTUP.stats
  .map(s => `<li><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></li>`).join('');
$('#suGroups').innerHTML = STARTUP.groups.map(g => `
  <section class="su-group">
    <h4 class="su-group-title">${esc(g.title)}<span class="su-note">${esc(g.note)}</span></h4>
    <div class="su-grid">
      ${g.photos.map(p => `
        <figure class="su-item" data-img="${esc(p.file)}" data-cap="${esc(p.cap)}">
          <img src="${esc(p.file)}" alt="${esc(p.cap)}" loading="lazy">
          <figcaption>${esc(p.cap)}</figcaption>
        </figure>`).join('')}
    </div>
  </section>`).join('');

/* ===================================================================
   7. 生活碎片：旅行 / 摄影 / 日常
   ================================================================== */
$('#lifeIntro').textContent = LIFE_INTRO;
$('#citiesBeen').innerHTML = CITIES.been.map(c => `<span>${esc(c)}</span>`).join('');
if (CITIES.next && CITIES.next.length) {
  $('#citiesNext').innerHTML = CITIES.next.map(c => `<span>${esc(c)}</span>`).join('');
} else {
  $('#citiesNext').closest('.city-row').remove();   // 没填「想去」就不显示这一行
}
$('.city-label.been').textContent = '打卡 40+ 城 ✈️';

const LIFE_TAGS = ['全部', ...new Set(LIFE_PHOTOS.map(p => p.tag))];
$('#lifeFilters').innerHTML = LIFE_TAGS
  .map((t, i) => `<button class="chip-btn${i === 0 ? ' is-on' : ''}" data-lt="${esc(t)}">${esc(t)}</button>`)
  .join('');

function renderLife(tag = '全部') {
  const g = $('#lifeGrid');
  if (g) g.classList.add('is-clamped');   // 每次切换都先只露两排 8 张
  const moreBtn = document.getElementById('lifeMore');
  if (moreBtn) moreBtn.textContent = '展开全部照片 ↓';
  const list = tag === '全部' ? LIFE_PHOTOS : LIFE_PHOTOS.filter(p => p.tag === tag);
  $('#lifeGrid').innerHTML = list.map(p => `
    <figure class="life-item"
      ${p.file ? `data-img="${esc(p.file)}" data-cap="${esc(p.cap)}"` : ''}>
      ${p.file
        ? `<img src="${esc(p.file)}" alt="${esc(p.cap)}" loading="lazy">`
        : '<div class="ph-box"><span>照片占位</span></div>'}
      <span class="l-tag">${esc(p.tag)}</span>
      <figcaption class="l-cap">${esc(p.cap)}</figcaption>
    </figure>`).join('') || '<p class="ph">这个分类下还没有照片。</p>';
}
renderLife();

$('#lifeFilters').addEventListener('click', e => {
  const b = e.target.closest('.chip-btn');
  if (!b) return;
  $('#lifeFilters').querySelectorAll('.chip-btn').forEach(x => x.classList.toggle('is-on', x === b));
  renderLife(b.dataset.lt);
});

/* ===================================================================
   8. Agent Skill：卡片 + 在线试用弹层
   ================================================================== */
$('#skillsIntro').textContent = SKILLS_INTRO;

/* 主区只放 3 个大卡，其余折叠成紧凑列表（名称 + 一句介绍 + 下载） */
const SKILL_MAIN = SKILLS.slice(0, 3);
const SKILL_REST = SKILLS.slice(3);

$('#skillGrid').innerHTML = SKILL_MAIN.map(s => `
  <article class="card skill-card" data-skill="${esc(s.id)}">
    <span class="sticker-ico corner" data-sticker="${esc(s.sticker)}" aria-hidden="true"></span>
    <h3>${esc(s.name)}</h3>
    <p class="skill-tagline">${esc(s.tagline)}</p>
    <p class="ph">${esc(s.desc)}</p>
    <div class="chips">${s.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div>
    <code class="skill-cmd">${esc(s.install)}</code>
    <div class="skill-actions">
      ${s.demo ? `<button class="btn btn-primary small js-try" data-skill="${esc(s.id)}">在线试用 ▶</button>` : ''}
      <a class="btn btn-ghost small" href="${esc(s.file)}" download>下载 ↓</a>
    </div>
  </article>`).join('');

document.querySelectorAll('.skill-card [data-sticker]').forEach(el => {
  el.innerHTML = stickerSVG(el.dataset.sticker);
});

if (SKILL_REST.length) {
  $('#skillMoreList').innerHTML = SKILL_REST.map(s => `
    <div class="skill-mini">
      <div class="sm-txt">
        <strong>${esc(s.name)}</strong>
        <span>${esc(s.tagline)}</span>
      </div>
      <a class="btn btn-ghost small" href="${esc(s.file)}" download>下载 ↓</a>
    </div>`).join('');
} else {
  const m = document.getElementById('skillMore');
  if (m) m.hidden = true;
}


/* 工作经历里数字和重点高亮：数字/百分比上底色，句首关键词加粗 */
function hlText(text) {
  let t = esc(text);
  /* 数字 / 百分比 / 带 + 号数字 / 万 / 期 / 篇 / 场 / 粉 / BU / 预算金额 */
  t = t.replace(/(\d+(?:\.\d+)?\s*(?:%|\+|\s*万|\s*篇|\s*场|\s*期|\s*个?\s*BU|\s*粉|\s*次|\s*家|\s*条|\s*个\s*部门|\s*天|\s*小时|\s*h|\s*元|\s*机会窗口|\s*位|\s*场访谈|\s*个\s*账号|\s*条\s*业务线|\s*预算|\s*个月|\s*超支|\s*到|\s*条线|\s*部门|\s*品牌|\s*账号))/g, '<b class="hl-num">$1</b>');
  /* 句首「重点：」关键词加粗 */
  t = t.replace(/^([^：]{2,12}?)：/, '<b class="hl-key">$1</b>：');
  return t;
}

/* --- 本地演示引擎：纯模板，不联网 --- */
const DEMO_ENGINES = {
  title(kw) {
    const k = kw || '这个话题';
    return [
      '主标题：' + `${k}｜我踩过的 3 个坑，第 2 个最亏`,
      '',
      '备选 1：关于「' + k + '」，没人告诉你的 5 件事',
      '备选 2：做了 2 年' + k + '，我只留下这 3 条经验',
      '备选 3：' + k + '这件事，90% 的人第一步就错了',
      '备选 4：别急着' + k + '，先看完这份避坑清单',
      '备选 5：' + k + '｜从 0 到有结果，我花了多久',
      '',
      '结构说明：实体名（' + k + '）+ 数字（3/5）+ 悬念缺口（第 2 个最亏 / 没人告诉你）'
    ].join('\n');
  },
  score(topic) {
    const t = topic || '这个热点';
    const seed = [...t].reduce((a, c) => a + c.charCodeAt(0), 0);
    const pick = (min, max) => min + (seed % (max - min + 1));
    const spread = pick(6, 9), relate = pick(5, 9), fresh = pick(6, 10), cost = pick(3, 7);
    const total = ((spread + relate + fresh + (10 - cost)) / 4).toFixed(1);
    const advice = total >= 8 ? '值得马上写，抢时效' : total >= 6.5 ? '可以写，但要找一个新角度' : '先观察，别急着跟';
    return [
      '热点：' + t,
      '',
      '传播度   ' + '■'.repeat(spread) + '□'.repeat(10 - spread) + '  ' + spread + '/10',
      '相关度   ' + '■'.repeat(relate) + '□'.repeat(10 - relate) + '  ' + relate + '/10',
      '时效性   ' + '■'.repeat(fresh) + '□'.repeat(10 - fresh) + '  ' + fresh + '/10',
      '写作成本 ' + '■'.repeat(cost) + '□'.repeat(10 - cost) + '  ' + cost + '/10（越低越好）',
      '',
      '推荐指数：' + total + ' / 10',
      '建议：' + advice
    ].join('\n');
  },
  polish(text) {
    if (!text) return '先粘贴一段文案，我来找里面的 AI 痕迹。';
    const rules = [
      [/不仅[^。！？]{0,40}，更/g, '「不仅…更…」排比，删掉前半句直接说结论'],
      [/——/g, '破折号滥用，改成逗号或句号'],
      [/在.{0,8}的今天，?|随着.{0,12}的发展，?/g, '万能开场，直接进正题'],
      [/值得注意的是，?|需要指出的是，?|不难发现，?/g, '废话连接词，删掉']
    ];
    /* 空心大词只给替换建议，不硬替换，避免改出病句 */
    const bigWords = {
      赋能: '帮到 / 让…能做到',
      抓手: '具体办法',
      闭环: '完整跑通一遍',
      颠覆: '改写规则',
      重塑: '重新做一遍',
      深刻的变革: '很大的改动',
      全新的: '新的',
      生态: '上下游的一串环节'
    };
    const hits = [];
    rules.forEach(([re, tip]) => {
      const m = text.match(re);
      if (m) hits.push('· ' + tip + '（' + m.length + ' 处）');
    });
    const words = Object.keys(bigWords).filter(w => text.includes(w));
    words.forEach(w => hits.push('· 空心大词「' + w + '」→ 建议改成：' + bigWords[w]));

    const out = text
      .replace(/在.{0,8}的今天，?/g, '')
      .replace(/随着.{0,12}的发展，?/g, '')
      .replace(/不仅[^。！？]{0,40}，更/g, '')
      .replace(/——/g, '，')
      .replace(/值得注意的是，?|需要指出的是，?|不难发现，?/g, '')
      .replace(/，，+/g, '，')
      .replace(/^[，、]+/, '');

    const lines = [
      '检测到的 AI 痕迹：',
      hits.length ? hits.join('\n') : '· 没有明显痕迹，这段挺像人写的',
      '',
      '结构改写后：',
      out.trim() || '（原文被清空了，说明整段都是套话）'
    ];
    if (words.length) {
      lines.push('', '还剩 ' + words.length + ' 个空心大词要你自己换，机器换容易改出病句。');
    }
    return lines.join('\n');
  },
  redbook(text) {
    if (!text) return '先粘贴一段小红书观点文，我来找里面的 AI 味。';
    const hits = [];
    /* 议论文腔信号 */
    const rules = [
      [/在.{0,8}的今天，?|随着.{0,12}的发展，?/g, '万能开场，直接进正题'],
      [/不仅[^。！？]{0,40}，更/g, '「不仅…更…」排比，删掉前半句直接说结论'],
      [/值得(关注|注意)的是，?|不难发现，?|需要指出的是，?/g, '议论文连接词，删掉'],
      [/——/g, '破折号滥用，改成逗号或句号'],
      [/总而言之|综上所述/g, '结尾套话，删掉或换成互动']
    ];
    rules.forEach(([re, tip]) => {
      const m = text.match(re);
      if (m) hits.push('· ' + tip + '（' + m.length + ' 处）');
    });
    const bigWords = { 赋能: '帮到', 抓手: '办法', 闭环: '跑通一遍', 颠覆: '改写规则', 重塑: '重做一遍', 深刻的变革: '很大的改动', 生态: '上下游' };
    const words = Object.keys(bigWords).filter(w => text.includes(w));
    words.forEach(w => hits.push('· 空心大词「' + w + '」→ 建议改成：' + bigWords[w]));
    const out = text
      .replace(/在.{0,8}的今天，?/g, '')
      .replace(/随着.{0,12}的发展，?/g, '')
      .replace(/不仅[^。！？]{0,40}，更/g, '')
      .replace(/值得(关注|注意)的是，?|不难发现，?|需要指出的是，?/g, '')
      .replace(/总而言之|综上所述/g, '')
      .replace(/——/g, '，')
      .replace(/，，+/g, '，')
      .replace(/^[，、]+/, '');
    return [
      '检测到的 AI 味：',
      hits.length ? hits.join('\n') : '· 没闻到明显的 AI 味，这段挺像真人聊天',
      '',
      '去掉 AI 味之后：',
      out.trim() || '（原文基本全是套话，删完没剩几句）',
      '',
      '注意：章节标题、加粗金句、结尾互动原文保留，那是小红书观点的骨架，不动。'
    ].join('\n');
  }
};

let currentSkill = null;
const modal = $('#tryModal');

function openTry(id) {
  const s = SKILLS.find(x => x.id === id);
  if (!s) return;
  currentSkill = s;
  $('#tryTitle').textContent = s.name;
  $('#tryDesc').textContent = s.desc;
  $('#tryLabel').textContent = s.demo.label;
  $('#tryInput').value = '';
  $('#tryInput').placeholder = s.demo.placeholder;
  $('#tryOut').textContent = '输出会显示在这里 · 本地模板演示，不联网、不调用模型';
  $('#tryDownload').href = s.file;
  modal.hidden = false;
  $('#tryInput').focus();
}

document.addEventListener('click', e => {
  const t = e.target.closest('.js-try');
  if (t) { openTry(t.dataset.skill); return; }
  if (e.target === modal || e.target.closest('#tryClose')) modal.hidden = true;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.hidden = true; });

$('#tryRun').addEventListener('click', () => {
  if (!currentSkill) return;
  const fn = DEMO_ENGINES[currentSkill.demo.engine];
  $('#tryOut').textContent = fn ? fn($('#tryInput').value.trim()) : '这个 skill 还没配演示引擎。';
});
$('#tryCopyCmd').addEventListener('click', () => {
  if (!currentSkill) return;
  navigator.clipboard?.writeText(currentSkill.install)
    .then(() => window.toast?.('已复制安装命令'));
});



/* ===================================================================
   9. 照片墙 / 证书墙的「展开全部」
   ================================================================== */
function bindMore(btnId, gridId, labelOpen, labelClose) {
  const btn = document.getElementById(btnId);
  const grid = document.getElementById(gridId);
  if (!btn || !grid) return;
  btn.addEventListener('click', () => {
    const clamped = grid.classList.toggle('is-clamped');
    btn.textContent = clamped ? labelOpen : labelClose;
    if (clamped) grid.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}
bindMore('lifeMore', 'lifeGrid', '展开全部照片 ↓', '收起一些 ↑');

bindMore('certMore', 'certGrid', `展开全部 ${CERTS.length} 张证书 ↓`, '收起证书 ↑');
