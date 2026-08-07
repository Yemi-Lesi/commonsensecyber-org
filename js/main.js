(() => {
  'use strict';

  const SUPPORTED_LANGS = ['en', 'fr', 'es', 'zh', 'ar', 'hi', 'yo', 'ig', 'ha', 'pcm'];
  const LANG_STORAGE_KEY = 'csc-lang';

  /* Non-translated media/link data, indexed to match the i18n content arrays below */
  const STORY_VIDEO_SRCS = ['assets/video/gp-scam.mp4', 'assets/video/grandparent-scam-news.mp4', 'assets/video/sextortion-scam-news.mp4', 'assets/video/gaming-scam-news.mp4'];
  const STORY_VIDEO_POSTERS = ['assets/img/poster-call-1.svg', 'assets/img/poster-call-2.svg', 'assets/img/poster-call-3.svg', 'assets/img/poster-call-4.svg'];
  /* Community-submitted stories, reviewed and added by the site owner.
     Not translated — each story is displayed exactly as submitted. */
  const COMMUNITY_STORIES = [
    { body: "Scam call from a 'cousin', lost money before realizing." },
  ];
  const RESOURCE_URLS = [
    ['https://antifraudcentre-centreantifraude.ca', 'https://www.cyber.gc.ca', 'https://www.getcybersafe.gc.ca', 'https://competitionbureau.gc.ca/en/consumer-protection'],
    ['https://consumer.ftc.gov', 'https://www.actionfraud.police.uk', 'https://www.ic3.gov'],
    ['https://apwg.org', 'https://transparencyreport.google.com/safe-browsing/search', 'https://www.securities-administrators.ca']
  ];

  /* ============================================================
     Icon library (Phosphor-style outline SVGs, consistent stroke)
     ============================================================ */
  const icons = {
    warning: '<path d="M12 9v4M12 16h.01M10.3 3.9L2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    eyeSlash: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><line x1="4" y1="4" x2="20" y2="20"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/>',
    wifi: '<path d="M5 12.5a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0M12 19.5h.01"/>',
    check: '<path d="M5 13l4 4L19 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M9 12.5l2 2 4-4.5"/>',
    listBadge: '<path d="M4 6h16M4 12h16M4 18h10"/><circle cx="19" cy="18" r="2"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    card: '<rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>',
    chevDown: '<path d="M6 9l6 6 6-6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    leaf: '<path d="M5 20c0-9 6-15 15-15 0 9-6 15-15 15z"/><path d="M5 20c3-6 7-10 13-13"/>'
  };
  const fillIcons = {
    star: '<path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z"/>',
    heart: '<path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c2 0 3.5 1.5 4.5 3 1-1.5 2.5-3 4.5-3 3.5 0 6 3.5 4 7.5C19 16.65 12 21 12 21z"/>'
  };

  function svgIcon(name, size = 24, extraClass = '') {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}" aria-hidden="true">${icons[name] || ''}</svg>`;
  }
  function fillIcon(name, size = 14) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${fillIcons[name] || ''}</svg>`;
  }

  /* ============================================================
     i18n core
     ============================================================ */
  function detectInitialLang() {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    const map = { en: 'en', fr: 'fr', es: 'es', zh: 'zh', ar: 'ar', hi: 'hi', yo: 'yo', ig: 'ig', ha: 'ha' };
    return map[nav] || 'en';
  }

  function getPath(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  let currentLang = 'en';
  function t() { return window.CSC_I18N[currentLang]; }

  function applyStaticText() {
    const data = t();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = getPath(data, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
        const [attr, path] = pair.split(':');
        const val = getPath(data, path.trim());
        if (val !== undefined) el.setAttribute(attr.trim(), val);
      });
    });
    document.getElementById('pageTitleTag').textContent = data.pageTitle;
    document.title = data.pageTitle;
    document.getElementById('metaDescriptionTag').setAttribute('content', data.metaDescription);
    document.getElementById('copyrightLine').innerHTML =
      `© <span id="year">${new Date().getFullYear()}</span> ` + data.footer.copyright.replace('© {year} ', '');
  }

  /* ============================================================
     Section renderers (data-driven, language-aware)
     ============================================================ */
  function renderPillars() {
    const grid = document.getElementById('pillarsGrid');
    if (!grid) return;
    const pillarIcons = ['shield', 'checkCircle', 'listBadge'];
    const bg = ['#fde3d4', '#fbe6c0', '#d9efe9'];
    const fg = ['var(--color-primary-dark)', 'var(--color-secondary-dark)', 'var(--color-accent-dark)'];
    grid.innerHTML = t().mission.pillars.map((p, i) => `
      <div class="pillar reveal">
        <div class="pillar-icon" style="background:${bg[i]}; color:${fg[i]};" aria-hidden="true">${svgIcon(pillarIcons[i], 26)}</div>
        <h3>${p.title}</h3>
        <p>${p.body}</p>
      </div>
    `).join('');
  }

  function renderTips() {
    const grid = document.getElementById('tipGrid');
    if (!grid) return;
    const tipIconNames = ['warning', 'key', 'lock', 'eyeSlash', 'shield', 'wifi'];
    grid.innerHTML = t().basics.tips.map((tip, i) => `
      <article class="tip-card reveal" style="transition-delay:${i * 60}ms">
        <div class="tip-card-icon">${svgIcon(tipIconNames[i], 24)}</div>
        <h3>${tip.title}</h3>
        <p>${tip.summary}</p>
        <details>
          <summary>${t().basics.seeTips} ${svgIcon('chevDown', 16, 'chev')}</summary>
          <ul>${tip.points.map(p => `<li>${p}</li>`).join('')}</ul>
        </details>
      </article>
    `).join('');
  }

  function renderTracks() {
    const grid = document.getElementById('tracksGrid');
    if (!grid) return;
    const d = t().tracks;
    grid.innerHTML = `
      <div class="track-card kids reveal">
        <span class="track-badge">${fillIcon('star')} ${d.kids.badge}</span>
        <h3>${d.kids.title}</h3>
        <p>${d.kids.body}</p>
        <ul>${d.kids.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <a class="btn btn-secondary" href="#basics" style="background:rgba(255,255,255,.15); border-color:transparent; color:#fff;">${d.kids.cta}</a>
      </div>
      <div class="track-card seniors reveal">
        <span class="track-badge">${fillIcon('heart')} ${d.seniors.badge}</span>
        <h3>${d.seniors.title}</h3>
        <p>${d.seniors.body}</p>
        <ul>${d.seniors.points.map(p => `<li>${p}</li>`).join('')}</ul>
        <a class="btn btn-secondary" href="#basics" style="background:rgba(255,255,255,.15); border-color:transparent; color:#fff;">${d.seniors.cta}</a>
      </div>
    `;
  }

  function renderAnatomy() {
    const grid = document.getElementById('anatomyGrid');
    if (!grid) return;
    const steps = t().anatomy.steps;
    const stepIcons = ['phone', 'clock', 'eyeSlash', 'card'];
    const numBg = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-accent)', 'var(--color-danger)'];
    const iconBg = ['#fde3d4', '#fbe6c0', '#d9efe9', 'var(--color-danger-bg)'];
    const iconFg = ['var(--color-primary-dark)', 'var(--color-secondary-dark)', 'var(--color-accent-dark)', 'var(--color-danger)'];
    const arrow = `<div class="anatomy-arrow reveal" aria-hidden="true">${svgIcon('chevDown', 22).replace('viewBox="0 0 24 24"', 'viewBox="0 0 24 24" style="transform:rotate(-90deg)"')}</div>`;
    grid.innerHTML = steps.map((s, i) => `
      <div class="anatomy-step reveal">
        <div class="anatomy-number" style="background:${numBg[i]};">${i + 1}</div>
        <div class="anatomy-icon" style="background:${iconBg[i]}; color:${iconFg[i]};">${svgIcon(stepIcons[i], 26)}</div>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
      </div>
      ${i < steps.length - 1 ? arrow : ''}
    `).join('');
  }

  function renderResources() {
    const list = document.getElementById('resourceList');
    if (!list) return;
    const resources = t().report.resources;
    list.innerHTML = resources.map((r, i) => `
      <li>
        ${i === 0
          ? `<a href="https://antifraudcentre-centreantifraude.ca" target="_blank" rel="noopener">${r.title}</a>`
          : `<strong>${r.title}</strong>`}
        <p style="margin:4px 0 0;">${r.body}</p>
      </li>
    `).join('');
  }

  function renderStoryList() {
    const wrap = document.getElementById('storyList');
    if (!wrap) return;
    const items = t().story.items;
    wrap.innerHTML = items.map((item, i) => `
      <div class="story-layout reveal">
        <div>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <p class="story-quote">${item.quote}</p>
        </div>
        <div>
          <div class="video-frame">
            <video controls preload="metadata" poster="${STORY_VIDEO_POSTERS[i]}" aria-label="${item.videoLabel}">
              <source src="${STORY_VIDEO_SRCS[i]}" type="video/mp4">
              ${t().story.videoFallback} <a href="${STORY_VIDEO_SRCS[i]}">${t().story.videoDownload}</a>
            </video>
          </div>
        </div>
      </div>
    `).join('');
  }

  const RESOURCE_GROUP_ICONS = ['leaf', 'globe', 'lock'];
  const RESOURCE_GROUP_STYLES = [
    { bg: '#fde3d4', fg: 'var(--color-primary-dark)' },
    { bg: '#d9efe9', fg: 'var(--color-accent-dark)' },
    { bg: '#fbe6c0', fg: 'var(--color-secondary-dark)' }
  ];

  function renderResourceGroups() {
    const wrap = document.getElementById('resourceGroups');
    if (!wrap) return;
    const groups = t().resources.groups;
    wrap.innerHTML = groups.map((group, gi) => `
      <div class="resource-group reveal">
        <div class="resource-group-heading">
          <div class="resource-group-icon" style="background:${RESOURCE_GROUP_STYLES[gi].bg}; color:${RESOURCE_GROUP_STYLES[gi].fg};">${svgIcon(RESOURCE_GROUP_ICONS[gi], 24)}</div>
          <h3>${group.title}</h3>
        </div>
        <ul class="resource-list">
          ${group.items.map((item, ii) => `
            <li>
              <a href="${RESOURCE_URLS[gi][ii]}" target="_blank" rel="noopener">${item.title}</a>
              <p style="margin:4px 0 0;">${item.body}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  function renderCommunityStories() {
    const wrap = document.getElementById('communityStoryList');
    if (!wrap) return;
    const d = t().community;
    if (!COMMUNITY_STORIES.length) {
      wrap.innerHTML = `
        <div class="community-empty">
          <h3>${d.emptyTitle}</h3>
          <p>${d.emptyBody}</p>
        </div>
      `;
      return;
    }
    wrap.innerHTML = `<ul class="community-story-list">${COMMUNITY_STORIES.map(s => `
      <li class="community-story-card">
        <p>${s.body}</p>
        <span class="community-story-name">${s.name || d.anonymousName}</span>
      </li>
    `).join('')}</ul>`;
  }

  function renderFaq() {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.innerHTML = t().faq.items.map(item => `
      <details class="faq-item reveal">
        <summary>${item.q}${svgIcon('chevDown', 18, 'chev')}</summary>
        <p>${item.a}</p>
      </details>
    `).join('');
  }

  function renderLegal() {
    const list = document.getElementById('legalList');
    if (!list) return;
    list.innerHTML = t().legal.items.map(item => `
      <details class="legal-item">
        <summary>${item.q}${svgIcon('chevDown', 16, 'chev')}</summary>
        <p>${item.a}</p>
      </details>
    `).join('');
  }

  /* ============================================================
     Quiz
     ============================================================ */
  let quizIndex = 0;
  let quizScore = 0;
  let answered = false;

  function renderQuizProgress() {
    const bar = document.getElementById('quizProgress');
    if (!bar) return;
    const total = t().quiz.questions.length;
    bar.innerHTML = Array.from({ length: total }, (_, i) => {
      const cls = i < quizIndex ? 'done' : i === quizIndex ? 'current' : '';
      return `<span class="${cls}"></span>`;
    }).join('');
  }

  function renderQuizQuestion() {
    answered = false;
    renderQuizProgress();
    const body = document.getElementById('quizBody');
    if (!body) return;
    const q = t().quiz;
    const item = q.questions[quizIndex];
    const isLast = quizIndex === q.questions.length - 1;
    body.innerHTML = `
      <p style="font-weight:600; color:var(--color-text-muted); margin-bottom:4px;">${q.questionOf.replace('{n}', quizIndex + 1).replace('{total}', q.questions.length)}</p>
      <h3 style="margin-bottom:0;">${item.q}</h3>
      <div class="quiz-options" role="group" aria-label="${q.answerGroupLabel}">
        ${item.options.map((opt, i) => `<button type="button" class="quiz-option" data-index="${i}">${opt}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <div style="margin-top:24px; display:flex; justify-content:flex-end;">
        <button type="button" class="btn btn-primary" id="quizNext" disabled>${isLast ? q.resultsLabel : q.nextLabel}</button>
      </div>
    `;
    body.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(btn, item));
    });
    document.getElementById('quizNext').addEventListener('click', nextQuestion);
  }

  function selectAnswer(btn, item) {
    if (answered) return;
    answered = true;
    const chosenIndex = Number(btn.dataset.index);
    const isCorrect = chosenIndex === item.correct;
    if (isCorrect) quizScore++;

    document.querySelectorAll('.quiz-option').forEach((el, i) => {
      el.disabled = true;
      if (i === item.correct) el.classList.add('correct');
      else if (i === chosenIndex) el.classList.add('incorrect');
    });

    const feedback = document.getElementById('quizFeedback');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `${svgIcon(isCorrect ? 'check' : 'x', 22)}<span>${isCorrect ? item.why.correct : item.why.incorrect}</span>`;

    document.getElementById('quizNext').disabled = false;
  }

  function nextQuestion() {
    quizIndex++;
    if (quizIndex >= t().quiz.questions.length) {
      renderQuizResult();
    } else {
      renderQuizQuestion();
    }
  }

  function renderQuizResult() {
    renderQuizProgress();
    const body = document.getElementById('quizBody');
    const q = t().quiz;
    body.innerHTML = `
      <div class="quiz-result">
        <img class="mascot-result" src="assets/logo.svg" alt="" aria-hidden="true">
        <h3>${q.resultTitle.replace('{score}', quizScore).replace('{total}', q.questions.length)}</h3>
        <p style="margin-inline:auto;">${q.resultBody}</p>
        <button type="button" class="btn btn-primary" id="quizRetry">${q.retryLabel}</button>
      </div>
    `;
    document.getElementById('quizRetry').addEventListener('click', () => {
      quizIndex = 0;
      quizScore = 0;
      renderQuizQuestion();
    });
  }

  /* ============================================================
     Reveal on scroll
     ============================================================ */
  let revealObserver;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    }
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
  }

  /* ============================================================
     Language switching
     ============================================================ */
  function populateLangSelect() {
    const select = document.getElementById('langSelect');
    select.innerHTML = SUPPORTED_LANGS.map(code =>
      `<option value="${code}">${window.CSC_I18N[code].meta.name}</option>`
    ).join('');
    select.value = currentLang;
    select.addEventListener('change', () => setLanguage(select.value));
  }

  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    const meta = t().meta;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', meta.dir);

    applyStaticText();
    renderPillars();
    renderTips();
    renderTracks();
    renderAnatomy();
    renderStoryList();
    renderResourceGroups();
    renderResources();
    renderFaq();
    renderCommunityStories();
    renderLegal();
    quizIndex = 0;
    quizScore = 0;
    renderQuizQuestion();

    const select = document.getElementById('langSelect');
    if (select) select.value = lang;

    observeReveals();
  }

  /* ============================================================
     Header: mobile nav + text size toggle
     ============================================================ */
  function initHeaderScrollShadow() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    function update() {
      header.classList.toggle('scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function initHeader() {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? t().header.menuClose : t().header.menuOpen);
    });
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', t().header.menuOpen);
      });
    });

    const sizes = ['', 'text-lg', 'text-xl'];
    let sizeIndex = Number(localStorage.getItem('csc-text-size') || 0);
    const textToggle = document.getElementById('textSizeToggle');
    function applySize() {
      sizes.forEach(s => s && document.body.classList.remove(s));
      if (sizes[sizeIndex]) document.body.classList.add(sizes[sizeIndex]);
      textToggle.setAttribute('aria-pressed', String(sizeIndex > 0));
      localStorage.setItem('csc-text-size', String(sizeIndex));
    }
    applySize();
    textToggle.addEventListener('click', () => {
      sizeIndex = (sizeIndex + 1) % sizes.length;
      applySize();
    });
  }

  /* ============================================================
     Forms
     Both forms POST to /api/submit, a Cloudflare Pages Function
     that relays the message straight to our inbox — no mail app
     required on the visitor's end. See functions/api/submit.js.
     ============================================================ */
  async function submitForm(payload, form, successEl, errorEl) {
    const submitBtn = form.querySelector('button[type="submit"]');
    errorEl.classList.remove('show');
    successEl.classList.remove('show');
    submitBtn.disabled = true;
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('submit failed');
      successEl.classList.add('show');
      form.reset();
    } catch {
      errorEl.classList.add('show');
    } finally {
      submitBtn.disabled = false;
    }
  }

  function initForm() {
    const form = document.getElementById('helpForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      submitForm({
        type: 'contact',
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim(),
        website: form.website.value
      }, form, document.getElementById('formSuccess'), document.getElementById('formError'));
    });
  }

  /* ============================================================
     Community stories: submission form
     Submissions are relayed to our inbox for manual review before
     being added to COMMUNITY_STORIES above — nothing here posts
     to the site automatically.
     ============================================================ */
  function initCommunityForm() {
    const form = document.getElementById('communityForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      submitForm({
        type: 'community',
        name: form.communityName.value.trim(),
        anonymous: form.communityAnonymous.checked,
        story: form.communityStory.value.trim(),
        email: form.communityEmail.value.trim(),
        website: form.website.value
      }, form, document.getElementById('communityFormSuccess'), document.getElementById('communityFormError'));
    });
  }

  /* ============================================================
     Check & Protect: security checkup
     Everything here is client-side only — answers are never sent,
     stored, or persisted anywhere, not even in localStorage.
     ============================================================ */
  function initSecurityCheckup() {
    const boxes = document.querySelectorAll('.cp-check');
    if (!boxes.length) return;
    const panels = document.querySelectorAll('.cp-status-panel');

    function update() {
      const checked = Array.from(boxes).filter(b => b.checked).length;
      const band = checked >= 7 ? 'strong' : checked >= 4 ? 'okay' : 'needs';
      panels.forEach(p => { p.hidden = p.dataset.band !== band; });
      boxes.forEach(b => {
        const rec = document.querySelector('.cp-rec[data-for="' + b.id + '"]');
        if (rec) rec.hidden = b.checked;
      });
    }
    boxes.forEach(b => b.addEventListener('change', update));
    update();
  }

  /* ============================================================
     Init
     ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    currentLang = detectInitialLang();
    populateLangSelect();
    setLanguage(currentLang);
    initHeader();
    initHeaderScrollShadow();
    initForm();
    initCommunityForm();
    initSecurityCheckup();
  });
})();
