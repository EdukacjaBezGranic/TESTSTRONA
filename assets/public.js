const navToggle = document.querySelector('[data-nav-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

document.querySelectorAll('[data-current-year]').forEach(item => {
  item.textContent = String(new Date().getFullYear());
});

const trainingVideoModal = document.querySelector('[data-video-modal]');
const trainingVideoPlayer = document.querySelector('[data-video-player]');
const trainingVideoClose = document.querySelector('[data-video-close]');

function closeTrainingVideo() {
  if (!trainingVideoModal || !trainingVideoPlayer) return;
  trainingVideoPlayer.pause();
  trainingVideoPlayer.removeAttribute('src');
  trainingVideoPlayer.load();
  trainingVideoModal.classList.remove('is-open');
  trainingVideoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('video-modal-open');
}

document.querySelectorAll('[data-video-src]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    if (!trainingVideoModal || !trainingVideoPlayer) return;
    trainingVideoPlayer.src = trigger.dataset.videoSrc;
    trainingVideoModal.classList.add('is-open');
    trainingVideoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('video-modal-open');
    trainingVideoPlayer.play().catch(() => {});
  });
});

trainingVideoClose?.addEventListener('click', closeTrainingVideo);
trainingVideoModal?.addEventListener('click', event => {
  if (event.target === trainingVideoModal) closeTrainingVideo();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && trainingVideoModal?.classList.contains('is-open')) closeTrainingVideo();
});
