/*
  EDUKACJA BEZ GRANIC — subtelne ujawnianie sekcji.
  Skrypt jest wyłącznie warstwą prezentacyjną i nie ingeruje w logikę portalu.
*/
(() => {
  const start = () => {
    const body = document.body;
    if (!body?.classList.contains('public-page')) return;

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const selectors = [
      'main > section',
      'main > article',
      'main > .section',
      'main > .page-section',
      'main > .calendar-shell',
      'main > .trainer-shell',
      '.home-main > section',
      '.training-showcase-page main > *',
      '.online-catalog-page main > *'
    ];

    const items = [...new Set(
      selectors.flatMap(selector => [...document.querySelectorAll(selector)])
    )].filter(item => !item.closest('[hidden]'));

    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('redesign-reveal', 'redesign-inview'));
      body.classList.add('redesign-ready');
      return;
    }

    items.forEach((item, index) => {
      item.classList.add('redesign-reveal');
      item.style.setProperty('--redesign-delay', `${Math.min(index % 4, 3) * 55}ms`);
    });
    body.classList.add('redesign-ready');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('redesign-inview');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -7% 0px', threshold: 0.06 });

    items.forEach(item => observer.observe(item));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
