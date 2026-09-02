/* ===================================================================
   作品集渲染 + 筛选
   ================================================================== */
const grid = document.getElementById('workGrid');

function cardHTML(w) {
  const cover = w.cover
    ? `<div class="work-cover" style="background-image:url('${w.cover}');background-size:cover;background-position:center">
         <span class="work-badge">${w.badge || ''}</span>
       </div>`
    : `<div class="work-cover" style="background:${w.tone}">
         <span class="work-badge">${w.badge || ''}</span>
         <span class="cover-emoji">${w.emoji || '✦'}</span>
       </div>`;
  const metrics = (w.metrics || [])
    .map(m => `<div><strong>${m.n}</strong><span>${m.l}</span></div>`).join('');
  return `<article class="card work-card reveal" data-cat="${w.cat}">
    ${cover}
    <div class="work-body">
      <div class="meta"><span class="cat">${w.catName}</span> · <span>${w.year}</span></div>
      <h3>${w.title}</h3>
      <p class="ph">${w.desc}</p>
      ${metrics ? `<div class="work-metrics">${metrics}</div>` : ''}
    </div>
  </article>`;
}

function renderWorks(filter = 'all') {
  const list = filter === 'all' ? WORKS : WORKS.filter(w => w.cat === filter);
  grid.innerHTML = list.length
    ? list.map(cardHTML).join('')
    : '<p class="ph">这个分类还没有作品，先去 works.js 里加一条。</p>';
  observeReveal();
}

document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.chip-btn');
  if (!btn) return;
  document.querySelectorAll('#filters .chip-btn').forEach(b => b.classList.toggle('is-on', b === btn));
  renderWorks(btn.dataset.f);
  /* 点具体小类时展开全屏浏览；点「全部」只在页内筛选 */
  if (btn.dataset.f !== 'all') openFullView(btn.dataset.f);
});

/* ===================================================================
   灵魂扭蛋机：技能蛋 / 兴趣蛋
   ================================================================== */
const DECKS = { skill: SKILL_CARDS, interest: INTEREST_CARDS };
let deckKey = 'skill';
const pool = { skill: [], interest: [] };   // 待抽
const drawn = { skill: [], interest: [] };  // 已抽

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function resetDeck(key = deckKey) {
  pool[key] = shuffle(DECKS[key]);
  drawn[key] = [];
  paintDeck();
}

/* 卡片插画上的小涂鸦：按卡片名稳定分配一组，重绘不会乱跳 */
const DOODLE_SETS = [
  [{ e: '⭐', p: 'd-tl' }, { e: '🌸', p: 'd-br' }, { e: '✨', p: 'd-tr' }],
  [{ e: '🎵', p: 'd-tr' }, { e: '💫', p: 'd-bl' }, { e: '🍀', p: 'd-br' }],
  [{ e: '⚡', p: 'd-tl' }, { e: '🦋', p: 'd-br' }, { e: '⭐', p: 'd-bl' }],
  [{ e: '💫', p: 'd-tl' }, { e: '🎀', p: 'd-tr' }, { e: '☁️', p: 'd-br' }],
];
function doodleSetFor(name) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.codePointAt(0)) % 997;
  return DOODLE_SETS[h % DOODLE_SETS.length];
}

function gcardHTML(c) {
  const doodles = (c.img ? doodleSetFor(c.name) : [])
    .map(d => `<span class="doodle ${d.p}" aria-hidden="true">${d.e}</span>`).join('');
  return `<article class="gcard${c.rare === 'SSR' ? ' is-ssr' : ''}">
    ${c.rare === 'SSR' ? `<span class="sticker-ico sm corner" aria-hidden="true">${stickerSVG('star')}</span>` : ''}
    <span class="rare ${c.rare}">${c.rare}</span>
    ${c.img ? `<figure class="g-shot">${doodles}<img src="${c.img}" alt="${c.name}" loading="lazy"></figure>` : ''}
    <div class="g-body">
      <span class="g-emoji" aria-hidden="true">${c.emoji}</span>
      <h4>${c.name}</h4>
      <p>${c.desc}</p>
    </div>
  </article>`;
}

function paintDeck() {
  const total = DECKS[deckKey].length;
  const got = drawn[deckKey].length;
  const box = document.getElementById('drawnGrid');
  box.innerHTML = got
    ? drawn[deckKey].map(gcardHTML).join('')
    : '<p class="empty-hint ph">扭蛋槽还是空的，左边那颗蛋等你 👈</p>';
  document.getElementById('progressFill').style.width = (got / total * 100) + '%';
  document.getElementById('progressTxt').textContent = `${got} / ${total}`;
  document.getElementById('deck').classList.toggle('is-empty', got === total);
  document.querySelector('#deck .deck-txt').textContent = got === total ? '这箱扭完啦' : '投币，扭一下 →';
}

function bounceDeck() {
  const ico = document.querySelector('.deck-ico');
  if (!ico) return;
  ico.classList.remove('is-pop');
  void ico.offsetWidth;          // 强制重排，让动画能重复触发
  ico.classList.add('is-pop');
  setTimeout(() => ico.classList.remove('is-pop'), 420);
}

function drawCard() {
  if (!pool[deckKey].length) { toast('这箱蛋扭完了，换一箱吧 ↺'); return; }
  const c = pool[deckKey].pop();
  drawn[deckKey].push(c);
  paintDeck();
  bounceDeck();
  if (c.rare === 'SSR') confetti(24);
  if (!pool[deckKey].length) {
    confetti(60);
    toast(deckKey === 'skill' ? '技能蛋全收集！这就是我的全部装备 💪' : '兴趣蛋全收集！现在你挺了解我了 🎀');
  }
}

document.getElementById('deck').addEventListener('click', drawCard);
document.getElementById('deck').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); drawCard(); }
});
document.getElementById('resetDeck').addEventListener('click', () => resetDeck(deckKey));
document.getElementById('gachaTabs').addEventListener('click', e => {
  const b = e.target.closest('.chip-btn');
  if (!b) return;
  document.querySelectorAll('#gachaTabs .chip-btn').forEach(x => x.classList.toggle('is-on', x === b));
  deckKey = b.dataset.deck;
  const gacha = document.querySelector('#cards .gacha');
  /* 兴趣蛋一样要一颗颗扭，只是卡片排得更紧凑，全收集后刚好一屏 */
  gacha.classList.toggle('is-interest', deckKey === 'interest');
  if (!pool[deckKey].length && !drawn[deckKey].length) resetDeck(deckKey);
  else paintDeck();
});

/* ===================================================================
   个人特质长廊：拖拽 / 横向滚轮 / 键盘
   ================================================================== */
const rail = document.getElementById('traitRail');
const track = document.getElementById('traitTrack');
const railFill = document.getElementById('railFill');

if (rail && track) {
  let x = 0, dragging = false, startX = 0, startPos = 0, moved = 0, tapCard = null;
  const maxShift = () => Math.max(0, track.scrollWidth - rail.clientWidth + 48);

  function applyRail() {
    x = Math.min(0, Math.max(-maxShift(), x));
    track.style.transform = `translate3d(${x}px,0,0)`;
    const p = maxShift() ? (-x / maxShift()) * 100 : 100;
    if (railFill) railFill.style.width = Math.max(6, p) + '%';
  }

  rail.addEventListener('pointerdown', e => {
    dragging = true; moved = 0; startX = e.clientX; startPos = x;
    /* 记下按在哪个卡上（setPointerCapture 会把 click 重定向到 rail，翻面得靠这个判定） */
    const card = e.target.closest('.trait');
    tapCard = card && !card.classList.contains('trait-end') && !e.target.closest('a') ? card : null;
    rail.setPointerCapture(e.pointerId);
    rail.classList.add('is-drag');
    track.style.transition = 'none';
  });
  rail.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    moved = Math.abs(dx);
    x = startPos + dx;
    applyRail();
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    rail.classList.remove('is-drag');
    track.style.transition = '';
    applyRail();
    if (moved <= 8 && tapCard) tapCard.classList.toggle('is-flipped');
    tapCard = null;
  }
  rail.addEventListener('pointerup', endDrag);
  rail.addEventListener('pointercancel', endDrag);
  /* 拖动结束时别误触卡片里的链接 */
  rail.addEventListener('click', e => { if (moved > 8) { e.preventDefault(); e.stopPropagation(); } }, true);

  /* 触控板横扫 */
  rail.addEventListener('wheel', e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    x -= e.deltaX;
    applyRail();
  }, { passive: false });

  rail.addEventListener('keydown', e => {
    const step = rail.clientWidth * 0.6;
    if (e.key === 'ArrowRight') { x -= step; applyRail(); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { x += step; applyRail(); e.preventDefault(); }
  });

  window.addEventListener('resize', applyRail);
  applyRail();

  /* 键盘翻面（Enter / Space） */
  track.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.trait');
    if (!card || card.classList.contains('trait-end')) return;
    e.preventDefault();
    card.classList.toggle('is-flipped');
  });
}

/* ===================================================================
   作品集全屏浏览层：点小类铺满整屏
   ================================================================== */
const CAT_NAMES = { all: '全部项目', agent: 'AI / 工具', ops: '内容运营', research: '调研洞察', biz: '商业增长' };
const fullView = document.getElementById('fullView');

document.getElementById('fvFilters').innerHTML = Object.entries(CAT_NAMES)
  .map(([k, v]) => `<button class="chip-btn" data-fv="${k}">${v}</button>`).join('');

function openFullView(cat) {
  const list = cat === 'all' ? WORKS : WORKS.filter(w => w.cat === cat);
  document.getElementById('fvTitle').textContent = CAT_NAMES[cat] || '作品集';
  document.getElementById('fvCount').textContent = list.length + ' 个项目';
  const grid = document.getElementById('fvGrid');
  /* 数量决定排版：1 个就横向铺满整屏，2 个两栏，3 个以上三栏 */
  grid.dataset.n = Math.min(list.length, 3);
  grid.innerHTML = list.map(cardHTML).join('')
    || '<p class="ph">这个分类下还没有项目。</p>';
  grid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-in'));
  document.querySelectorAll('#fvFilters .chip-btn')
    .forEach(b => b.classList.toggle('is-on', b.dataset.fv === cat));
  fullView.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeFullView() {
  fullView.hidden = true;
  document.body.style.overflow = '';
}

document.getElementById('fvFilters').addEventListener('click', e => {
  const b = e.target.closest('.chip-btn');
  if (b) openFullView(b.dataset.fv);
});
document.getElementById('fvClose').addEventListener('click', closeFullView);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFullView(); });

/* ===================================================================
   图片放大层：校园照 / 证书
   ================================================================== */
const lb = document.getElementById('lightbox');
document.addEventListener('click', e => {
  const t = e.target.closest('[data-img]');
  if (t) {
    document.getElementById('lbImg').src = t.dataset.img;
    document.getElementById('lbCap').textContent = t.dataset.cap || '';
    lb.hidden = false;
    return;
  }
  if (e.target === lb || e.target.closest('#lbClose')) lb.hidden = true;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });

/* ===================================================================
   小巧思：复制联系方式 / 头像换表情 / 键盘彩蛋
   ================================================================== */
let toastTimer;
function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-on'), 2000);
}

function confetti(n = 30) {
  const colors = ['#F0325B', '#FF4D82', '#FFD84D', '#7C5CFF', '#2ED3B7', '#4DA6FF'];
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'confetti';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.background = colors[i % colors.length];
    s.style.animationDuration = (1.6 + Math.random() * 1.4) + 's';
    s.style.animationDelay = (Math.random() * .5) + 's';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3600);
  }
}

document.querySelectorAll('.copyable').forEach(a => {
  a.addEventListener('click', e => {
    const val = a.dataset.copy;
    if (!val || val === '待填写') return;
    e.preventDefault();
    navigator.clipboard?.writeText(val).then(() => toast('已复制：' + val));
  });
});

let typed = '';
document.addEventListener('keydown', e => {
  if (e.key.length !== 1) return;
  typed = (typed + e.key.toLowerCase()).slice(-3);
  if (typed === 'ivy') { confetti(80); toast('找到彩蛋了！谢谢你看到这里 🎉'); typed = ''; }
});

/* ===================================================================
   导航高亮 / 移动端菜单 / 滚动动画
   ================================================================== */
const nav = document.getElementById('nav');
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links
  .filter(a => (a.getAttribute('href') || '').startsWith('#'))
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function onScroll() {
  nav.classList.toggle('is-stuck', window.scrollY > 8);
  const y = window.scrollY + 140;
  let current = null;
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', onScroll, { passive: true });

const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') navLinks.classList.remove('is-open');
});

const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll('.reveal:not(.is-in)').forEach(el => io.observe(el));
}

/* 板块出场特效：板块进入视口时打上 .sec-in，内部元素错峰入场 */
const secIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('sec-in'); secIO.unobserve(en.target); }
  });
}, { threshold: 0.12 });
function observeSections() {
  document.querySelectorAll('section.section').forEach(el => secIO.observe(el));
}

/* ===== 初始化 ===== */
document.querySelectorAll('.card, .sec-head, .sub-title, .hero-text, .hero-visual, .contact-list, .id-grid, .honor-list, .photo-collage, .cert-grid, .gacha, .life-top, .life-grid')
  .forEach(el => el.classList.add('reveal'));
renderWorks();
resetDeck('skill');
observeReveal();
observeSections();
onScroll();
