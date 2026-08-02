(() => {
  'use strict';

  const FORM_STATE_KEY = 'ebgCourseFormsStateV1';
  const COURSE_STATE_KEY = 'ebgCourseV2State';
  const formKeys = ['registration', 'pretest', 'finaltest', 'evaluation'];
  const config = window.EBG_COURSE_FORMS || {};

  const storage = (() => {
    try {
      const s = window.localStorage;
      const probe = '__ebg_forms_probe__';
      s.setItem(probe, '1');
      s.removeItem(probe);
      return s;
    } catch {
      const memory = new Map();
      return {
        getItem: key => memory.has(key) ? memory.get(key) : null,
        setItem: (key, value) => memory.set(key, String(value))
      };
    }
  })();

  const readJson = (key, fallback) => {
    try {
      const parsed = JSON.parse(storage.getItem(key));
      return parsed && typeof parsed === 'object' ? parsed : fallback;
    } catch {
      return fallback;
    }
  };

  const writeJson = (key, value) => storage.setItem(key, JSON.stringify(value));
  const getFormState = () => ({
    registration: false,
    pretest: false,
    finaltest: false,
    evaluation: false,
    privacyAccepted: false,
    ...readJson(FORM_STATE_KEY, {})
  });

  const isValidUrl = value => {
    try {
      const url = new URL(String(value || '').trim());
      return ['https:', 'http:'].includes(url.protocol);
    } catch {
      return false;
    }
  };

  function configureLinks() {
    document.querySelectorAll('[data-google-form]').forEach(link => {
      const key = link.dataset.googleForm;
      const entry = config[key] || {};
      const url = String(entry.url || '').trim();
      const status = link.querySelector('small');

      if (isValidUrl(url)) {
        link.href = url;
        link.classList.remove('is-pending');
        link.removeAttribute('aria-disabled');
        link.removeAttribute('tabindex');
        if (status) status.textContent = 'Google Forms';
      } else {
        link.removeAttribute('href');
        link.classList.add('is-pending');
        link.setAttribute('aria-disabled', 'true');
        link.setAttribute('tabindex', '-1');
        if (status) status.textContent = 'Link zostanie dodany po utworzeniu formularza';
      }
    });
  }

  function moduleCompletion() {
    const courseState = readJson(COURSE_STATE_KEY, { completed: [] });
    const completed = new Set(Array.isArray(courseState.completed) ? courseState.completed : []);
    let completedModules = 0;

    for (let module = 1; module <= 5; module += 1) {
      const sections = [...document.querySelectorAll(`.course-section[data-module-number="${module}"]`)];
      if (sections.length && sections.every(section => completed.has(section.dataset.courseSection))) {
        completedModules += 1;
      }
    }

    return completedModules;
  }

  function updateUi() {
    const state = getFormState();
    document.querySelectorAll('[data-form-complete]').forEach(input => {
      input.checked = Boolean(state[input.dataset.formComplete]);
    });
    const privacyInput = document.querySelector('[data-privacy-accepted]');
    const enterButton = document.querySelector('[data-enter-course]');
    const privacyStatus = document.querySelector('[data-privacy-status]');
    if (privacyInput) privacyInput.checked = Boolean(state.privacyAccepted);
    if (enterButton) {
      enterButton.disabled = !state.privacyAccepted;
      enterButton.setAttribute('aria-disabled', String(!state.privacyAccepted));
      enterButton.title = state.privacyAccepted ? '' : 'Najpierw potwierdź zapoznanie się z klauzulą informacyjną.';
    }
    if (privacyStatus) {
      privacyStatus.textContent = state.privacyAccepted
        ? 'Potwierdzenie zapisano na tym urządzeniu.'
        : 'Potwierdzenie jest wymagane przed przejściem do kursu.';
      privacyStatus.classList.toggle('is-complete', Boolean(state.privacyAccepted));
    }

    const formsDone = formKeys.filter(key => state[key]).length;
    const modulesDone = moduleCompletion();
    const totalSteps = 9;
    const doneSteps = formsDone + modulesDone;
    const percent = Math.round((doneSteps / totalSteps) * 100);
    const startDone = ['registration', 'pretest'].filter(key => state[key]).length;

    document.querySelectorAll('[data-start-form-status]').forEach(node => {
      node.textContent = `${startDone} z 2 etapów startowych oznaczonych jako wykonane`;
    });
    document.querySelectorAll('[data-certificate-forms]').forEach(node => {
      node.textContent = `${formsDone} z 4`;
    });
    document.querySelectorAll('[data-certificate-modules]').forEach(node => {
      node.textContent = `${modulesDone} z 5`;
    });
    document.querySelectorAll('[data-certificate-progress-text]').forEach(node => {
      node.textContent = `${percent}%`;
    });
    document.querySelectorAll('[data-certificate-bar]').forEach(node => {
      node.style.width = `${percent}%`;
    });
    document.querySelectorAll('[data-certificate-status]').forEach(node => {
      if (formsDone === 4 && modulesDone === 5) {
        node.textContent = 'Możesz pobrać potwierdzenie do weryfikacji';
      } else if (doneSteps >= 5) {
        node.textContent = 'Jesteś blisko ukończenia wszystkich warunków';
      } else {
        node.textContent = 'Warunki certyfikatu nie są jeszcze kompletne';
      }
    });

    document.querySelectorAll('[data-form-card]').forEach(card => {
      card.classList.toggle('is-complete', Boolean(state[card.dataset.formCard]));
    });
    document.dispatchEvent(new CustomEvent('ebg:certificate-requirements-updated', {
      detail: { formsDone, modulesDone, eligible: formsDone === 4 && modulesDone === 5, percent }
    }));
  }

  document.querySelectorAll('[data-form-complete]').forEach(input => {
    input.addEventListener('change', () => {
      const state = getFormState();
      state[input.dataset.formComplete] = input.checked;
      state.updatedAt = new Date().toISOString();
      writeJson(FORM_STATE_KEY, state);
      updateUi();
    });
  });

  document.querySelectorAll('[data-google-form]').forEach(link => {
    link.addEventListener('click', event => {
      if (link.getAttribute('aria-disabled') === 'true') {
        event.preventDefault();
      }
    });
  });

  const privacyModal = document.querySelector('[data-privacy-modal]');
  const privacyPanel = privacyModal?.querySelector('.course-privacy-modal__panel');
  let privacyReturnFocus = null;

  function openPrivacyModal() {
    if (!privacyModal) return;
    privacyReturnFocus = document.activeElement;
    privacyModal.hidden = false;
    document.body.classList.add('has-privacy-modal');
    requestAnimationFrame(() => privacyPanel?.focus());
  }

  function closePrivacyModal() {
    if (!privacyModal) return;
    privacyModal.hidden = true;
    document.body.classList.remove('has-privacy-modal');
    if (privacyReturnFocus instanceof HTMLElement) privacyReturnFocus.focus();
  }

  document.querySelector('[data-privacy-open]')?.addEventListener('click', openPrivacyModal);
  privacyModal?.querySelectorAll('[data-privacy-close]').forEach(node => {
    node.addEventListener('click', closePrivacyModal);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && privacyModal && !privacyModal.hidden) closePrivacyModal();
  });

  document.querySelector('[data-privacy-accepted]')?.addEventListener('change', event => {
    const state = getFormState();
    state.privacyAccepted = event.currentTarget.checked;
    state.updatedAt = new Date().toISOString();
    writeJson(FORM_STATE_KEY, state);
    updateUi();
  });

  document.querySelector('[data-start-requirements]')?.addEventListener('click', () => {
    document.getElementById('courseRequirements')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelector('[data-enter-course]')?.addEventListener('click', event => {
    const state = getFormState();
    if (!state.privacyAccepted) {
      event.preventDefault();
      openPrivacyModal();
      return;
    }
    document.querySelector('[data-module-target="1"]')?.click();
    requestAnimationFrame(() => {
      document.querySelector('[data-module-panel="1"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelector('[data-go-requirements]')?.addEventListener('click', () => {
    document.getElementById('courseRequirements')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.addEventListener('click', event => {
    if (event.target.closest('[data-toggle-complete]')) {
      setTimeout(updateUi, 50);
    }
  });

  window.addEventListener('storage', event => {
    if ([FORM_STATE_KEY, COURSE_STATE_KEY].includes(event.key)) updateUi();
  });

  configureLinks();
  updateUi();
})();
