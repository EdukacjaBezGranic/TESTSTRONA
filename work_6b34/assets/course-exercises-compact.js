(() => {
  'use strict';

  const MODULE_COPY = {
    1: {
      area: 'nawyki korzystania ze źródeł',
      low: 'Twoje odpowiedzi pokazują, że podstawowe nawyki weryfikacji wymagają jeszcze uporządkowania. W kolejnych modułach zwróć szczególną uwagę na porównywanie źródeł, rozpoznawanie wpływu algorytmów i sprawdzanie treści przed udostępnieniem.',
      mid: 'Masz już część świadomych nawyków informacyjnych, lecz nie stosujesz ich jeszcze jednakowo często. Najwięcej korzyści przyniesie regularne ćwiczenie najsłabiej ocenionego obszaru.',
      high: 'Twoje odpowiedzi wskazują na dobrze rozwiniętą świadomość źródeł, algorytmów i odpowiedzialnego udostępniania. Utrwalaj te nawyki w sytuacjach, które wywołują silną emocję lub presję czasu.'
    },
    2: {
      area: 'rozpoznawanie manipulacji i weryfikacja',
      low: 'Warto wrócić do różnicy między błędną informacją a dezinformacją, sygnałów emocjonalnego języka oraz podstaw metody SIFT. Traktuj podejrzaną treść jako sygnał do zatrzymania się, a nie do szybkiej reakcji.',
      mid: 'Rozpoznajesz część mechanizmów dezinformacji i znasz podstawy weryfikacji. Skup się na regularnym stosowaniu SIFT oraz sprawdzaniu, jak emocje i błędy poznawcze wpływają na Twoją ocenę.',
      high: 'Twoje odpowiedzi wskazują na dobrą orientację w mechanizmach dezinformacji i praktykach weryfikacyjnych. Zwracaj uwagę na sytuacje, w których presja czasu lub zgodność treści z Twoimi poglądami osłabia czujność.'
    },
    3: {
      area: 'krytyczna ocena źródeł i dowodów',
      low: 'Wróć do rozróżnienia faktu, opinii i interpretacji oraz do pytań o źródło, dowody i kontekst danych. Przed podjęciem decyzji ustal, czego jeszcze nie wiesz.',
      mid: 'Potrafisz oceniać część źródeł i argumentów, lecz nie wszystkie elementy analizy są jeszcze utrwalone. Najwięcej uwagi poświęć najsłabiej ocenionej umiejętności.',
      high: 'Twoje odpowiedzi wskazują na dobrze rozwiniętą ocenę źródeł, danych i argumentów. Utrzymuj ten standard także wtedy, gdy informacja potwierdza Twoje wcześniejsze przekonanie.'
    },
    4: {
      area: 'analiza tematów społecznie wrażliwych',
      low: 'W tematach wrażliwych wracaj do źródła, kontekstu i języka użytego wobec ludzi. Przed udostępnieniem oceń możliwą szkodę oraz sprawdź, czy przekaz nie opiera się na stereotypie lub pojedynczym przypadku.',
      mid: 'Rozpoznajesz część ram interpretacyjnych i zagrożeń etycznych. Utrwalaj analizę języka, obrazów, kontekstu oraz możliwych skutków udostępnienia.',
      high: 'Twoje odpowiedzi wskazują na świadome podejście do tematów społecznie wrażliwych. Zachowuj tę ostrożność szczególnie przy drastycznych nagraniach, treściach o grupach społecznych i materiałach generowanych przez AI.'
    },
    5: {
      area: 'odporność informacyjna i dobrostan',
      low: 'Warto zacząć od prostych granic: ograniczyć częstotliwość sprawdzania wiadomości, rozpoznawać sygnały przeciążenia i robić przerwę przed reakcją na emocjonalną treść.',
      mid: 'Masz część nawyków wspierających odporność informacyjną, lecz nie są jeszcze stabilne. Wybierz jeden obszar do ćwiczenia przez najbliższy tydzień.',
      high: 'Twoje odpowiedzi wskazują na dobrze rozwinięte nawyki związane z dobrostanem, dialogiem i odpowiedzialnym udostępnianiem. Pilnuj ich zwłaszcza w okresach dużego natężenia wiadomości.'
    }
  };

  const profileFor = score => {
    if (score <= 12) return { label: 'Podstawy do wzmocnienia', band: 'low' };
    if (score <= 19) return { label: 'Umiejętności w rozwoju', band: 'mid' };
    return { label: 'Dobrze rozwinięte kompetencje', band: 'high' };
  };

  const dispatchSave = field => field.dispatchEvent(new Event('input', { bubbles: true }));

  document.querySelectorAll('[data-compact-assessment]').forEach(table => {
    const moduleNumber = Number(table.dataset.compactAssessment || table.closest('[data-module-number]')?.dataset.moduleNumber || 0);
    const config = MODULE_COPY[moduleNumber] || MODULE_COPY[1];
    const result = table.closest('.course-section-body')?.querySelector('[data-assessment-result]') || table.parentElement?.nextElementSibling;
    if (!result) return;

    const rows = [...table.querySelectorAll('tbody tr')];
    const title = result.querySelector('strong');
    const copy = result.querySelector('[data-assessment-copy]');
    const focus = result.querySelector('[data-assessment-focus]');
    const section = table.closest('.course-section');

    let summaryField = section?.querySelector(`[data-save-key="m${moduleNumber}-self-assessment-summary"]`);
    if (!summaryField && section) {
      summaryField = document.createElement('input');
      summaryField.type = 'hidden';
      summaryField.className = 'course-answer';
      summaryField.dataset.saveKey = `m${moduleNumber}-self-assessment-summary`;
      summaryField.dataset.workbookLabel = `Wynik samooceny – Moduł ${moduleNumber}`;
      section.querySelector('.course-section-body')?.append(summaryField);
    }

    const update = () => {
      const items = rows.map((row, index) => {
        const checked = row.querySelector('input[type="radio"]:checked');
        return {
          row,
          index,
          label: row.dataset.assessmentItem || row.querySelector('th[scope="row"]')?.textContent.trim() || `Obszar ${index + 1}`,
          value: checked ? Number(checked.value) : null
        };
      });
      const completed = items.filter(item => Number.isFinite(item.value));
      rows.forEach(row => row.classList.remove('is-assessment-focus'));

      if (completed.length !== rows.length) {
        title.textContent = `${completed.length} z ${rows.length} odpowiedzi`;
        copy.textContent = 'Po zaznaczeniu wszystkich odpowiedzi zobaczysz wynik, opis profilu i obszar wymagający największej uwagi.';
        focus.textContent = '';
        result.classList.remove('is-complete');
        if (summaryField && summaryField.value) {
          summaryField.value = '';
          dispatchSave(summaryField);
        }
        return;
      }

      const score = items.reduce((sum, item) => sum + item.value, 0);
      const profile = profileFor(score);
      const weakestValue = Math.min(...items.map(item => item.value));
      const weakest = items.filter(item => item.value === weakestValue).slice(0, 2);
      weakest.forEach(item => item.row.classList.add('is-assessment-focus'));

      title.textContent = `${score} / 25 – ${profile.label}`;
      copy.textContent = config[profile.band];
      focus.textContent = `Obszar do dalszej pracy: ${weakest.map(item => `${item.label} (${item.value}/5)`).join(' oraz ')}.`;
      result.classList.add('is-complete');

      const summary = `Wynik: ${score}/25. Profil: ${profile.label}. ${config[profile.band]} ${focus.textContent}`;
      if (summaryField && summaryField.value !== summary) {
        summaryField.value = summary;
        dispatchSave(summaryField);
      }
    };

    table.addEventListener('change', event => {
      if (event.target.matches('input[type="radio"]')) update();
    });
    update();
  });
})();
