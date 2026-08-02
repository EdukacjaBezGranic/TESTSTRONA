(() => {
  'use strict';
  const STORAGE_KEY = 'ebgCourseV2State';
  const ANSWERS_KEY = 'ebgCourseV2Answers';
  const FORMS_KEY = 'ebgCourseFormsStateV1';
  const safeStorage = (() => {
    try {
      const s = window.localStorage;
      const probe = '__ebg_probe__';
      s.setItem(probe, '1'); s.removeItem(probe);
      return s;
    } catch {
      const memory = new Map();
      return {
        getItem: key => memory.has(key) ? memory.get(key) : null,
        setItem: (key, value) => memory.set(key, String(value)),
        removeItem: key => memory.delete(key)
      };
    }
  })();
  const normalizeSearchText = value => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ł/g, 'l');
  function buildSearchIndex() {
    return [...document.querySelectorAll('[data-course-section]')].map(section => ({
      module: Number(section.dataset.moduleNumber),
      id: section.id,
      heading: section.querySelector('h2')?.textContent?.trim() || section.id,
      text: normalizeSearchText(section.textContent)
    }));
  }
  const modulePanels = [...document.querySelectorAll('[data-module-panel]')];
  const moduleButtons = [...document.querySelectorAll('[data-module-target]')];
  const moduleSidebarButtons = [...document.querySelectorAll('.sidebar-module-button')];
  const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
  const sections = [...document.querySelectorAll('[data-course-section]')];
  const sidebar = document.getElementById('courseSidebar');
  const sidebarBackdrop = document.querySelector('[data-sidebar-backdrop]');
  const sidebarOpen = document.querySelector('[data-sidebar-open]');
  const sidebarClose = document.querySelector('[data-sidebar-close]');
  let activeModule = 1;
  let activeSection = null;
  let completionTimers = new Map();

  function loadJSON(key, fallback) {
    try { return JSON.parse(safeStorage.getItem(key)) || fallback; } catch { return fallback; }
  }
  const state = loadJSON(STORAGE_KEY, { completed: [], activeModule: 1, activeSection: null });
  const answers = loadJSON(ANSWERS_KEY, {});
  state.completed = Array.isArray(state.completed) ? state.completed : [];
  const completed = new Set(state.completed);

  function saveState() {
    safeStorage.setItem(STORAGE_KEY, JSON.stringify({ completed:[...completed], activeModule, activeSection }));
  }
  function openSidebar() {
    sidebar?.classList.add('is-open');
    if (sidebarBackdrop) sidebarBackdrop.hidden = false;
    sidebarOpen?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar?.classList.remove('is-open');
    if (sidebarBackdrop) sidebarBackdrop.hidden = true;
    sidebarOpen?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  sidebarOpen?.addEventListener('click', openSidebar);
  sidebarClose?.addEventListener('click', closeSidebar);
  sidebarBackdrop?.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

  function activateModule(number, options = {}) {
    number = Number(number);
    if (!number || number < 1 || number > 5) return;
    activeModule = number;
    modulePanels.forEach(panel => panel.hidden = Number(panel.dataset.modulePanel) !== number);
    moduleSidebarButtons.forEach(button => {
      const isActive = Number(button.dataset.moduleTarget) === number;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    document.querySelectorAll('[data-section-nav]').forEach(nav => nav.hidden = Number(nav.dataset.sectionNav) !== number);
    updateProgress();
    saveState();
    if (options.scroll !== false) {
      const panel = document.querySelector(`[data-module-panel="${number}"]`);
      const target = options.sectionId ? document.getElementById(options.sectionId) : panel;
      target?.scrollIntoView({ behavior: options.instant ? 'auto' : 'smooth', block:'start' });
    }
    closeSidebar();
  }

  moduleButtons.forEach(button => button.addEventListener('click', () => activateModule(button.dataset.moduleTarget)));

  function setComplete(id, value = true) {
    if (value) completed.add(id); else completed.delete(id);
    document.querySelector(`[data-course-section="${CSS.escape(id)}"]`)?.classList.toggle('is-complete', value);
    document.querySelector(`[data-section-link="${CSS.escape(id)}"]`)?.classList.toggle('is-complete', value);
    updateProgress();
    saveState();
  }
  document.addEventListener('ebg:activity-complete', event => {
    const id = event.detail?.sectionId;
    if (id && document.querySelector(`[data-course-section="${CSS.escape(id)}"]`)) setComplete(id, true);
  });

  document.querySelectorAll('[data-toggle-complete]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.toggleComplete;
      setComplete(id, !completed.has(id));
    });
  });

  function updateProgress() {
    const total = sections.length;
    const done = completed.size;
    const pct = total ? Math.round(done / total * 100) : 0;
    document.querySelector('[data-overall-percent]').textContent = `${pct}%`;
    document.querySelector('[data-overall-bar]').style.width = `${pct}%`;
    document.querySelector('[data-progress-copy]').textContent = `${done} z ${total} tematów ukończonych`;
    for (let m = 1; m <= 5; m++) {
      const moduleSections = sections.filter(s => Number(s.dataset.moduleNumber) === m);
      const moduleDone = moduleSections.filter(s => completed.has(s.dataset.courseSection)).length;
      const modulePct = moduleSections.length ? Math.round(moduleDone / moduleSections.length * 100) : 0;
      document.querySelector(`[data-module-percent="${m}"]`).textContent = `${modulePct}%`;
      const bar = document.querySelector(`[data-module-progress-bar="${m}"]`);
      if (bar) bar.style.width = `${modulePct}%`;
    }
    sections.forEach(s => s.classList.toggle('is-complete', completed.has(s.dataset.courseSection)));
    sectionLinks.forEach(a => a.classList.toggle('is-complete', completed.has(a.dataset.sectionLink)));
    document.dispatchEvent(new CustomEvent('ebg:course-progress-updated', { detail: { done, total, percent: pct } }));
  }

  function setActiveSection(id) {
    if (!id || id === activeSection) return;
    activeSection = id;
    const section = document.getElementById(id);
    if (section) activeModule = Number(section.dataset.moduleNumber);
    sectionLinks.forEach(a => a.classList.toggle('is-active', a.dataset.sectionLink === id));
    history.replaceState(null, '', `#${id}`);
    saveState();
  }

  const ratios = new Map();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const id = entry.target.dataset.courseSection;
      ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
      if (entry.isIntersecting && entry.intersectionRatio >= .42 && !completed.has(id) && entry.target.dataset.completionMode !== 'activity') {
        clearTimeout(completionTimers.get(id));
        completionTimers.set(id, setTimeout(() => setComplete(id, true), 900));
      } else {
        clearTimeout(completionTimers.get(id));
      }
    }
    const visible = [...ratios.entries()].filter(([,ratio]) => ratio > 0).sort((a,b) => b[1]-a[1]);
    if (visible[0]) setActiveSection(visible[0][0]);
  }, { rootMargin:'-80px 0px -30% 0px', threshold:[0,.12,.25,.42,.6,.85] });
  sections.forEach(s => observer.observe(s));

  sectionLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const id = link.dataset.sectionLink;
    activateModule(link.dataset.moduleLink, { scroll:false });
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}));
    closeSidebar();
  }));

  function restoreAnswers() {
    document.querySelectorAll('[data-save-key]').forEach(field => {
      const key = field.dataset.saveKey;
      const value = answers[key];
      if (field.type === 'checkbox') field.checked = value === true;
      else if (field.type === 'radio') field.checked = value === field.value;
      else if (typeof value === 'string') field.value = value;
      field.addEventListener('input', () => {
        if (field.type === 'checkbox') answers[key] = field.checked;
        else if (field.type === 'radio') { if (field.checked) answers[key] = field.value; }
        else answers[key] = field.value;
        safeStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
      });
      field.addEventListener('change', () => field.dispatchEvent(new Event('input')));
    });
  }

  const searchInput = document.querySelector('[data-course-search]');
  const searchResults = document.querySelector('[data-search-results]');
  searchInput?.addEventListener('input', () => {
    const q = normalizeSearchText(searchInput.value.trim());
    if (q.length < 2) { searchResults.hidden = true; searchResults.innerHTML = ''; return; }
    // Rebuild on every query so content rendered later by activity scripts is searchable too.
    const results = buildSearchIndex().filter(item => normalizeSearchText(item.heading).includes(q) || item.text.includes(q)).slice(0, 10);
    searchResults.innerHTML = results.length ? results.map(item => `<button type="button" data-search-jump="${item.id}" data-search-module="${item.module}"><strong>M${item.module}</strong> ${item.heading}</button>`).join('') : '<span>Brak wyników</span>';
    searchResults.hidden = false;
  });
  searchResults?.addEventListener('click', e => {
    const button = e.target.closest('[data-search-jump]');
    if (!button) return;
    activateModule(button.dataset.searchModule, {scroll:false});
    document.getElementById(button.dataset.searchJump)?.scrollIntoView({behavior:'smooth',block:'start'});
    searchResults.hidden = true;
    closeSidebar();
  });

  document.querySelector('[data-continue-course]')?.addEventListener('click', () => {
    const id = state.activeSection && document.getElementById(state.activeSection) ? state.activeSection : null;
    activateModule(state.activeModule || 1, {sectionId:id});
  });
  document.querySelector('[data-reset-course]')?.addEventListener('click', () => {
    if (!confirm('Usunąć zapisany postęp i odpowiedzi w tym kursie?')) return;
    safeStorage.removeItem(STORAGE_KEY); safeStorage.removeItem(ANSWERS_KEY); safeStorage.removeItem(FORMS_KEY); safeStorage.removeItem('ebgCourseM1V3'); location.reload();
  });
  document.querySelectorAll('[data-scroll-top]').forEach(button => button.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'})));
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => backToTop?.classList.toggle('is-visible', window.scrollY > 800), {passive:true});

  restoreAnswers();
  updateProgress();
  const hashId = location.hash.slice(1);
  const hashSection = hashId ? document.getElementById(hashId) : null;
  if (hashSection?.dataset?.courseSection) {
    activateModule(hashSection.dataset.moduleNumber, {scroll:false});
    requestAnimationFrame(() => hashSection.scrollIntoView({behavior:'auto',block:'start'}));
  } else {
    activateModule(state.activeModule || 1, {scroll:false});
  }
})();
