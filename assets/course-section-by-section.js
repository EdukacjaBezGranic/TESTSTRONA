(() => {
  const introLabels = {
    3: 'Wprowadzenie do AI i oszustw cyfrowych',
    4: 'Wprowadzenie do fact-checkingu',
    5: 'Film i wprowadzenie'
  };

  function activeModuleId() {
    const button = document.querySelector('.course-shell-module.is-active[data-course-module]');
    return Number(button?.dataset.courseModule || 0);
  }

  function normalizeStageHeadings() {
    document.querySelectorAll('#moduleView .content-block.course-scene > h3').forEach(heading => {
      if (heading.classList.contains('stage-heading-normalized')) return;
      const pill = heading.querySelector(':scope > .stage-pill');
      const subtitle = heading.querySelector(':scope > small');
      const status = heading.querySelector(':scope > .m1-section-status');
      if (!pill && !subtitle && !status) return;

      const titleParts = [];
      [...heading.childNodes].forEach(node => {
        if (node === pill || node === subtitle || node === status) return;
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) titleParts.push(node.textContent.trim());
      });
      const title = document.createElement('span');
      title.className = 'stage-heading-title';
      title.textContent = titleParts.join(' ').replace(/\s+/g, ' ').trim();

      [...heading.childNodes].forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.remove();
      });
      if (pill) pill.after(title); else heading.prepend(title);
      heading.classList.add('stage-heading-normalized');
    });
  }

  function updateTopicLabels() {
    const moduleId = activeModuleId();
    if (!moduleId) return;
    if (introLabels[moduleId]) {
      const intro = introLabels[moduleId];
      const stageFirst = document.querySelector('.course-stage-button:nth-child(1) .course-stage-label');
      const sidebarFirst = document.querySelector('.course-shell-topic-button[data-course-topic-index="0"] .course-shell-topic-label');
      if (stageFirst && stageFirst.textContent.trim() !== intro) stageFirst.textContent = intro;
      if (sidebarFirst && sidebarFirst.textContent.trim() !== intro) sidebarFirst.textContent = intro;
    }
    if (moduleId === 5) {
      const label = 'Podsumowanie analizy przypadków';
      const stageRecap = document.querySelector('.course-stage-button:nth-child(11) .course-stage-label');
      const sidebarRecap = document.querySelector('.course-shell-topic-button[data-course-topic-index="10"] .course-shell-topic-label');
      if (stageRecap && stageRecap.textContent.trim() !== label) stageRecap.textContent = label;
      if (sidebarRecap && sidebarRecap.textContent.trim() !== label) sidebarRecap.textContent = label;
    }
  }

  function buildModuleFiveRecap() {
    if (activeModuleId() !== 5) return;
    const host = document.querySelector('#exampleSectionBlock #exampleSection');
    if (!host || host.querySelector('.module-five-recap')) return;
    const placeholder = host.querySelector('.placeholder');
    if (!placeholder) return;

    const topicButtons = [...document.querySelectorAll('.course-shell-topic-button[data-course-topic-index]')];
    const items = topicButtons.slice(2, 8).map((button, index) => ({
      stage: Number(button.dataset.courseTopicIndex),
      label: button.querySelector('.course-shell-topic-label')?.textContent?.trim() || `Studium przypadku ${index + 1}`
    }));

    host.innerHTML = `
      <div class="module-five-recap">
        <p class="module-five-recap-lead">Wróć do wybranego studium przypadku i porównaj sposób analizy materiału, źródła, kontekstu oraz celu przekazu.</p>
        <div class="module-five-recap-grid">
          ${items.map((item, index) => `
            <button type="button" class="module-five-recap-card" data-recap-stage="${item.stage}">
              <span class="module-five-recap-number">${String(index + 1).padStart(2, '0')}</span>
              <strong>${item.label}</strong>
              <span>Otwórz etap</span>
            </button>`).join('')}
        </div>
      </div>`;

    const heading = document.getElementById('exampleSectionHeading');
    if (heading) {
      heading.innerHTML = '<span class="stage-pill">ETAP 11</span> Podsumowanie analizy przypadków<small>Wróć do dowolnego studium przypadku i przeanalizuj je ponownie.</small><span class="m1-section-status">6 przypadków</span>';
      heading.classList.remove('stage-heading-normalized');
    }
  }

  function cleanupHiddenLegacyBlocks() {
    document.querySelectorAll('#moduleView [hidden]').forEach(element => {
      element.classList.remove('course-scene--reading','course-scene--balanced-media','course-scene--reverse','course-scene--split','course-primary-media','is-active','is-host-active');
      element.removeAttribute('data-course-scene');
    });
  }

  function applySectionCorrections() {
    cleanupHiddenLegacyBlocks();
    updateTopicLabels();
    buildModuleFiveRecap();
    normalizeStageHeadings();
  }

  document.addEventListener('click', event => {
    const recap = event.target.closest('[data-recap-stage]');
    if (recap) {
      document.querySelector(`.course-shell-topic-button[data-course-topic-index="${recap.dataset.recapStage}"]`)?.click();
      return;
    }
    if (event.target.closest('.course-shell-module,.course-shell-topic-button,.course-scene-nav-button,.module-card .btn')) {
      setTimeout(applySectionCorrections, 40);
      setTimeout(applySectionCorrections, 180);
    }
  });

  const moduleView = document.getElementById('moduleView');
  if (moduleView) {
    new MutationObserver(() => requestAnimationFrame(applySectionCorrections))
      .observe(moduleView, { childList:true, subtree:true, attributes:true, attributeFilter:['class'] });
  }

  window.addEventListener('load', applySectionCorrections);
  setTimeout(applySectionCorrections, 250);
})();
