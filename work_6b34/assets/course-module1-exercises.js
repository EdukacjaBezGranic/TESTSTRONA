(() => {
  'use strict';

  const dispatchSave = field => {
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const setSummary = (exercise, text) => {
    const hidden = exercise.querySelector('[data-habit-summary]');
    if (hidden && hidden.value !== text) {
      hidden.value = text;
      dispatchSave(hidden);
    }
  };

  const selectedText = select => select?.selectedOptions?.[0]?.textContent?.trim() || '';

  function updateChannels(exercise) {
    const checked = [...exercise.querySelectorAll('input[type="checkbox"]:checked')];
    const awareness = exercise.querySelector('[data-save-key="m1-e1-awareness"]');
    const share = exercise.querySelector('[data-save-key="m1-e1-active-share"]');
    const result = exercise.querySelector('[data-habit-result="channels"]');
    const title = result?.querySelector('strong');
    const copy = result?.querySelector('[data-habit-result-copy]');
    if (!result || !title || !copy) return;

    if (!checked.length || !awareness?.value || !share?.value) {
      title.textContent = 'Uzupełnij kanały i dwa pytania.';
      copy.textContent = 'Podsumowanie pojawi się po zaznaczeniu co najmniej jednego kanału oraz wybraniu dwóch odpowiedzi.';
      result.classList.remove('is-complete');
      setSummary(exercise, '');
      return;
    }

    const active = checked.filter(x => x.dataset.channelKind === 'active').length;
    const passive = checked.filter(x => x.dataset.channelKind === 'passive').length;
    let profile;
    if (share.value === 'most' && active >= passive) {
      profile = 'Twój kontakt z informacjami opiera się w dużej mierze na świadomym wyborze źródeł.';
    } else if (share.value === 'almost-none' || (passive > active && share.value === 'minority')) {
      profile = 'Duża część informacji dociera do Ciebie przez rekomendacje, inne osoby lub narzędzia AI.';
    } else {
      profile = 'Łączysz samodzielne wyszukiwanie z treściami podsuwanymi przez platformy i inne osoby.';
    }

    const awarenessCopy = {
      always: 'Zwykle rozpoznajesz mechanizm wyboru treści, co ułatwia świadome korzystanie z rekomendacji.',
      often: 'Najczęściej zauważasz, kto lub co wybrało treść, lecz część rekomendacji może pozostawać niezauważona.',
      rarely: 'Rzadko rozpoznajesz mechanizm wyboru treści. Zwracaj uwagę na oznaczenia rekomendacji, powiadomienia i kanały „Dla Ciebie”.',
      never: 'Nie analizujesz jeszcze sposobu doboru treści. Zacznij od prostego pytania: „Czy znalazłem tę informację sam, czy została mi podsunęta?”.'
    }[awareness.value];

    title.textContent = 'Twój sposób docierania do informacji';
    copy.textContent = `${profile} ${awarenessCopy}`;
    result.classList.add('is-complete');
    setSummary(exercise, `Sposób docierania do informacji: ${profile} ${awarenessCopy}`);
  }

  function updateEcosystem(exercise) {
    const checked = [...exercise.querySelectorAll('.choice-grid input[type="checkbox"]:checked')];
    const compare = exercise.querySelector('[data-save-key="m1-e2-compare"]');
    const independent = exercise.querySelector('[data-save-key="m1-e2-independent"]');
    const primary = exercise.querySelector('[data-save-key="m1-e2-primary"]');
    const risk = exercise.querySelector('[data-save-key="m1-e2-risk"]');
    const result = exercise.querySelector('[data-habit-result="ecosystem"]');
    const title = result?.querySelector('strong');
    const copy = result?.querySelector('[data-habit-result-copy]');
    if (!result || !title || !copy) return;

    if (!checked.length || !compare?.value || !independent?.value || !primary?.value || !risk?.value) {
      title.textContent = 'Uzupełnij źródła i cztery pytania.';
      copy.textContent = 'Podsumowanie pojawi się po zaznaczeniu co najmniej jednej grupy źródeł i wybraniu wszystkich odpowiedzi.';
      result.classList.remove('is-complete');
      setSummary(exercise, '');
      return;
    }

    let diversity;
    if (checked.length <= 2) diversity = 'Korzystasz z dość wąskiego zestawu źródeł. Warto okresowo sięgać do innej grupy, szczególnie do materiałów oficjalnych lub pierwotnych.';
    else if (checked.length <= 4) diversity = 'Korzystasz z kilku grup źródeł. Sama różnorodność nie wystarcza, jeśli publikacje powtarzają ten sam materiał.';
    else diversity = 'Twój ekosystem obejmuje różne grupy źródeł. Sprawdzaj jednak ich niezależność i pochodzenie informacji.';

    let verification;
    const strong = compare.value === 'always' && independent.value === 'yes' && primary.value === 'usually';
    const weak = compare.value === 'rarely' || ['no', 'dontknow'].includes(independent.value) || ['rarely', 'never'].includes(primary.value);
    if (strong) verification = 'Regularnie porównujesz informacje, sprawdzasz niezależność źródeł i docierasz do materiałów pierwotnych.';
    else if (weak) verification = 'Największy obszar do rozwoju to regularne docieranie do źródła pierwotnego i sprawdzanie, czy publikacje są od siebie niezależne.';
    else verification = 'Stosujesz część dobrych praktyk weryfikacyjnych, lecz nie zawsze robisz to regularnie.';

    const riskText = selectedText(risk);
    title.textContent = `${checked.length} z 5 grup źródeł w Twoim ekosystemie`;
    copy.textContent = `${diversity} ${verification} Wybrany obszar uwagi: ${riskText}.`;
    result.classList.add('is-complete');
    setSummary(exercise, `Ekosystem informacyjny: ${diversity} ${verification} Obszar uwagi: ${riskText}.`);
  }

  function updatePlan(exercise, changed) {
    const grid = exercise.querySelector('[data-max-choices]');
    const max = Number(grid?.dataset.maxChoices || 3);
    const all = [...grid.querySelectorAll('input[type="checkbox"]')];
    let checked = all.filter(x => x.checked);
    if (checked.length > max && changed) {
      changed.checked = false;
      checked = all.filter(x => x.checked);
      changed.closest('.choice-card')?.classList.add('is-limit-warning');
      setTimeout(() => changed.closest('.choice-card')?.classList.remove('is-limit-warning'), 900);
    }

    all.forEach(input => {
      input.disabled = checked.length >= max && !input.checked;
    });

    const note = exercise.querySelector('[data-plan-count]');
    if (note) note.textContent = `Wybrano ${checked.length} z maksymalnie ${max} działań.`;

    const result = exercise.querySelector('[data-habit-result="plan"]');
    const title = result?.querySelector('strong');
    const copy = result?.querySelector('[data-habit-result-copy]');
    if (!result || !title || !copy) return;

    if (!checked.length) {
      title.textContent = 'Wybierz od jednego do trzech działań.';
      copy.textContent = 'Najłatwiej utrzymać niewielką liczbę konkretnych zmian.';
      result.classList.remove('is-complete');
      setSummary(exercise, '');
      return;
    }

    const labels = checked.map(input => input.closest('.choice-card')?.innerText.trim()).filter(Boolean);
    title.textContent = `Twój plan obejmuje ${checked.length} ${checked.length === 1 ? 'działanie' : 'działania'}.`;
    copy.textContent = labels.join(' • ');
    result.classList.add('is-complete');
    setSummary(exercise, `Plan poprawy nawyków medialnych: ${labels.join('; ')}.`);
  }

  document.querySelectorAll('[data-habit-exercise]').forEach(exercise => {
    const kind = exercise.dataset.habitExercise;
    const update = event => {
      if (kind === 'channels') updateChannels(exercise);
      if (kind === 'ecosystem') updateEcosystem(exercise);
      if (kind === 'plan') updatePlan(exercise, event?.target?.matches('input[type="checkbox"]') ? event.target : null);
    };
    exercise.addEventListener('change', update);
    exercise.addEventListener('input', update);
    update();
  });
})();
