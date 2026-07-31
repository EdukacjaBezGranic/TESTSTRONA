(() => {
  'use strict';

  const table = document.querySelector('[data-source-diversity-assessment]');
  const result = document.querySelector('[data-source-diversity-result]');
  if (!table || !result) return;

  const rows = [...table.querySelectorAll('tbody tr')];
  const progressEl = result.querySelector('[data-assessment-progress]');
  const scoreEl = result.querySelector('[data-assessment-score]');
  const profileEl = result.querySelector('[data-assessment-profile]');
  const descriptionEl = result.querySelector('[data-assessment-description]');
  const focusEl = result.querySelector('[data-assessment-focus]');
  const areasEl = result.querySelector('[data-assessment-areas]');
  const summaryField = document.querySelector('[data-save-key="m1-13-cwiczenia-i-karty-pracy-auto-summary"]');

  const getScore = row => {
    const checked = row.querySelector('input[type="radio"]:checked');
    if (!checked) return null;
    const explicit = Number(checked.dataset.score);
    if (Number.isFinite(explicit) && explicit >= 1 && explicit <= 5) return explicit;
    const match = String(checked.value || '').match(/-c([1-5])$/);
    return match ? Number(match[1]) : null;
  };

  const getProfile = total => {
    if (total <= 17) {
      return {
        title: 'Podstawy do wzmocnienia',
        description: 'Twoje odpowiedzi wskazują, że warto uporządkować podstawowe nawyki: częściej porównywać źródła, świadomie zatrzymywać się przed reakcją i sprawdzać materiały przed udostępnieniem.'
      };
    }
    if (total <= 27) {
      return {
        title: 'Świadome nawyki w rozwoju',
        description: 'Masz już część dobrych praktyk, ale nie są jeszcze jednakowo utrwalone. Największą korzyść da regularne ćwiczenie dwóch najsłabiej ocenionych obszarów.'
      };
    }
    return {
      title: 'Dobrze rozwinięte nawyki informacyjne',
      description: 'Twoje odpowiedzi pokazują wysoki poziom świadomości źródeł, algorytmów, emocji i ryzyka związanego z AI. Nadal warto rozwijać obszary z najniższymi wynikami i stosować te nawyki konsekwentnie.'
    };
  };

  const saveSummary = value => {
    if (!summaryField || summaryField.value === value) return;
    summaryField.value = value;
    summaryField.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const update = () => {
    const answers = rows.map((row, index) => ({
      row,
      index,
      score: getScore(row),
      area: row.dataset.assessmentArea || `Obszar ${index + 1}`,
      tip: row.dataset.assessmentTip || ''
    }));
    const completed = answers.filter(item => item.score !== null);

    progressEl.textContent = `${completed.length} z ${rows.length} odpowiedzi`;
    rows.forEach(row => row.classList.remove('is-focus-area'));

    if (completed.length !== rows.length) {
      scoreEl.textContent = '— / 35';
      profileEl.textContent = 'Uzupełnij wszystkie stwierdzenia';
      descriptionEl.textContent = `Pozostało ${rows.length - completed.length} ${rows.length - completed.length === 1 ? 'stwierdzenie' : 'stwierdzenia'}. Po zakończeniu zobaczysz orientacyjny profil oraz dwa obszary do dalszej pracy.`;
      focusEl.hidden = true;
      areasEl.innerHTML = '';
      result.classList.remove('is-complete');
      saveSummary('');
      return;
    }

    const total = answers.reduce((sum, item) => sum + item.score, 0);
    const profile = getProfile(total);
    const focus = [...answers].sort((a, b) => a.score - b.score || a.index - b.index).slice(0, 2);

    scoreEl.textContent = `${total} / 35`;
    profileEl.textContent = profile.title;
    descriptionEl.textContent = profile.description;
    areasEl.innerHTML = focus.map(item => `<li><strong>${item.area} — ${item.score}/5</strong><span>${item.tip}</span></li>`).join('');
    focus.forEach(item => item.row.classList.add('is-focus-area'));
    focusEl.hidden = false;
    result.classList.add('is-complete');

    const summary = `Wynik samooceny: ${total}/35. Profil orientacyjny: ${profile.title}. Obszary do dalszej pracy: ${focus.map(item => `${item.area} (${item.score}/5)`).join('; ')}.`;
    saveSummary(summary);
  };

  table.addEventListener('change', event => {
    if (event.target.matches('input[type="radio"]')) update();
  });

  update();
})();
