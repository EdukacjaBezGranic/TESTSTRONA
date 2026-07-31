(() => {
  const GRID_SELECTORS = [
    '.mini-card-grid','.competence-grid','.repetition-grid','.confirmation-grid',
    '.social-proof-grid','.authority-grid','.availability-anchor-grid',
    '.m5-tools','.m5-game-grid','.m5-options','.module2-stop-grid','.m5-signal-grid'
  ].join(',');

  let resizeTimer = null;
  let observer = null;

  function visible(element){
    if (!element || !element.isConnected) return false;
    const style = getComputedStyle(element);
    return style.display !== 'none' && style.visibility !== 'hidden';
  }

  function equalizeGridRows(grid){
    const children = [...grid.children].filter(visible);
    children.forEach(child => child.style.removeProperty('min-height'));
    if (window.innerWidth <= 700 || children.length < 2) return;

    const rows = new Map();
    children.forEach(child => {
      const top = Math.round(child.getBoundingClientRect().top / 4) * 4;
      if (!rows.has(top)) rows.set(top, []);
      rows.get(top).push(child);
    });
    rows.forEach(row => {
      if (row.length < 2) return;
      const max = Math.max(...row.map(child => child.getBoundingClientRect().height));
      row.forEach(child => child.style.minHeight = `${Math.ceil(max)}px`);
    });
  }

  function normalizeMedia(scene){
    scene.querySelectorAll('img').forEach(image => {
      const apply = () => {
        if (!image.naturalWidth || !image.naturalHeight) return;
        const ratio = image.naturalWidth / image.naturalHeight;
        image.dataset.courseAspect = ratio >= 1.85 ? 'wide' : ratio >= 1.18 ? 'landscape' : ratio >= .82 ? 'square' : 'portrait';
      };
      if (image.complete) apply();
      else image.addEventListener('load', () => { apply(); scheduleAudit(); }, { once:true });
    });
  }

  function normalizeScene(scene){
    normalizeMedia(scene);
    scene.querySelectorAll(GRID_SELECTORS).forEach(equalizeGridRows);

    // Krótkie opisy i przyciski mają ten sam punkt startowy i pełną szerokość kolumny.
    scene.querySelectorAll('.m5-option,.m1-option,.m5-tool,.m5-game-card,.m5-step,.m5-signal,.module2-stop-grid > article').forEach(node => {
      node.classList.add('course-audited-field');
    });
  }

  function runAudit(){
    const scenes = [...document.querySelectorAll('#moduleView .course-scene')];
    scenes.forEach(normalizeScene);
  }

  function scheduleAudit(){
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => window.requestAnimationFrame(runAudit), 60);
  }

  const previousInit = window.initModuleExperience;
  if (typeof previousInit === 'function') {
    window.initModuleExperience = function initModuleExperienceWithSectionAudit(...args){
      const result = previousInit.apply(this,args);
      scheduleAudit();
      window.setTimeout(runAudit,180);
      return result;
    };
  }

  document.addEventListener('click', event => {
    if (!event.target.closest('.course-stage-button,.course-scene-nav-button,.course-shell-module,.m5-option')) return;
    scheduleAudit();
  });
  window.addEventListener('resize', scheduleAudit, { passive:true });

  const moduleView = document.getElementById('moduleView');
  if (moduleView) {
    observer = new MutationObserver(scheduleAudit);
    observer.observe(moduleView,{childList:true,subtree:true,attributes:true,attributeFilter:['class','open']});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',scheduleAudit,{once:true});
  else scheduleAudit();
})();
