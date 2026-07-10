function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderCard(item) {
  const [tag, title, text] = item;
  return `<article class="card"><span class="tag">${escapeHtml(tag)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p><button class="btn ghost" type="button" disabled>Do opracowania</button></article>`;
}

function renderTool(item) {
  const [tag, title, text, href] = item;
  const action = href
    ? `<a class="btn" target="_blank" rel="noopener noreferrer" href="${escapeHtml(href)}">Otwórz</a>`
    : '<button class="btn ghost" type="button" disabled>Do uzupełnienia</button>';
  return `<article class="card"><span class="tag">${escapeHtml(tag)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p>${action}</article>`;
}

function renderAgendaItem(item, index) {
  const [title, label] = String(item).split('|');
  if (title === 'Przerwa') {
    return `<li class="agenda-break"><span>${escapeHtml(label || '')}</span><strong>Przerwa</strong></li>`;
  }
  return `<li><span>${String(index).padStart(2, '0')}</span><strong>${escapeHtml(title)}</strong></li>`;
}

function renderPanel(panel) {
  document.title = panel.title;
  document.body.style.setProperty('--accent', panel.accent);
  document.body.style.setProperty('--accent-rgb', panel.accentRgb);
  document.body.style.setProperty('--accent-soft', panel.accentSoft);
  document.body.style.setProperty('--accent-line', panel.accentLine);

  const root = document.getElementById('panelRoot');
  if (!root) return;
  let agendaNumber = 0;
  const agendaHtml = panel.agenda.map(item => {
    if (String(item).startsWith('Przerwa|')) return renderAgendaItem(item, 0);
    agendaNumber += 1;
    return renderAgendaItem(item, agendaNumber);
  }).join('');
  const heroHtml = panel.banner
    ? `<section class="training-hero training-hero-image"><h1 class="sr-only">${escapeHtml(panel.title)}</h1><a href="../index.html?v=20260709-04" aria-label="Przejdź do strony głównej projektu Edukacja bez granic"><img src="${escapeHtml(panel.banner)}" alt="${escapeHtml(panel.bannerAlt || panel.title)}"></a></section>`
    : `<section class="training-hero">
        <div class="hero-content">
          <span class="tag">panel szkolenia</span>
          <h1>${escapeHtml(panel.title)}</h1>
          <p>${escapeHtml(panel.subtitle)}</p>
        </div>
        <div class="hero-mark">${escapeHtml(panel.number)}</div>
      </section>`;

  root.innerHTML = `
    <main class="wrap">
      ${heroHtml}

      <div class="agenda-bar">
        <a class="mini-link" href="../panel-trenera.html">Panel trenera</a>
        <button class="agenda-btn" type="button" data-action="agenda-open">Agenda szkolenia</button>
      </div>

      <section class="section materials">
        <h2>Materiały</h2>
        <div class="grid">
          <article class="card"><span class="tag">prezentacja</span><h3>Prezentacja główna</h3><p>Miejsce na link do prezentacji szkoleniowej.</p><button class="btn ghost" type="button" disabled>Link do uzupełnienia</button></article>
          <article class="card"><span class="tag">materiały</span><h3>Materiały szkoleniowe</h3><p>Miejsce na folder z kartami pracy, przykładami i materiałami dla uczestników.</p><button class="btn ghost" type="button" disabled>Folder do uzupełnienia</button></article>
        </div>
      </section>

      <section class="section exercises">
        <h2>Ćwiczenia warsztatowe</h2>
        <div class="grid">${panel.exercises.map(renderCard).join('')}</div>
      </section>

      <section class="section tools">
        <h2>Narzędzia i zasoby</h2>
        <div class="grid">${panel.tools.map(renderTool).join('')}</div>
      </section>

      <section class="section qr-section">
        <h2>Kod QR do testu lub ankiety</h2>
        <p class="lead">Wklej link do testu, ankiety, formularza albo materiałów.</p>
        <div class="card qr"><div><h3>Generator QR</h3><input id="qrInput" class="input" placeholder="Wklej link, np. https://forms.gle/..."><div class="actions"><button class="btn" data-action="qr-generate">Generuj QR</button><button class="btn ghost" data-action="qr-big">Powiększ</button><button class="btn ghost" data-action="qr-clear">Wyczyść</button></div><p class="small">Generator QR wymaga internetu.</p></div><div><div class="qrbox" id="qrBox">Tutaj pojawi się kod QR</div><p class="small" id="qrText"></p></div></div>
      </section>

      <section class="section timer-section">
        <h2>Timer ćwiczenia</h2>
        <p class="lead">Ustaw czas pracy dla grupy i zostaw licznik widoczny na ekranie.</p>
        <div class="card timer"><div><span class="tag">czas pracy</span><h3>Odliczanie dla ćwiczeń</h3><p>Wybierz gotowy czas albo wpisz własny.</p><label class="small" for="timerMinutes"><strong>Czas w minutach</strong></label><input id="timerMinutes" class="input timer-input" type="number" min="1" max="180" step="1" value="10"><div class="actions"><button class="btn ghost" data-timer-preset="5">5 min</button><button class="btn ghost" data-timer-preset="10">10 min</button><button class="btn ghost" data-timer-preset="15">15 min</button><button class="btn ghost" data-timer-preset="20">20 min</button></div></div><div class="timer-face"><div class="timer-display" id="timerDisplay">10:00</div><div class="timer-status" id="timerStatus">Gotowe do startu</div><div class="timer-progress"><span id="timerProgress"></span></div><div class="actions timer-controls"><button class="btn" data-action="timer-start">Start</button><button class="btn ghost" data-action="timer-pause">Pauza</button><button class="btn ghost" data-action="timer-reset">Reset</button><button class="btn" data-action="timer-big">Powiększ</button></div></div></div>
      </section>

      <p class="footer">Panel roboczy szkolenia. Materiały i ćwiczenia do dalszego opracowania.</p>
    </main>

    <div class="fullscreen agenda-full" id="agendaFull"><div class="agenda-panel"><div class="panel-head"><div><span class="tag">agenda</span><h2>Agenda szkolenia</h2><p>${escapeHtml(panel.agendaIntro)}</p></div><button class="btn ghost" data-action="agenda-close">Zamknij</button></div><ol class="agenda-list">${agendaHtml}</ol></div></div>
    <div class="fullscreen" id="qrFull"><div class="qr-full-panel"><h2>Kod QR</h2><div id="qrFullImg"></div><p class="small" id="qrFullText"></p><button class="btn" data-action="qr-close">Zamknij</button></div></div>
    <div class="fullscreen" id="timerFull"><div class="timer-full-panel"><span class="tag">timer</span><div class="timer-display" id="timerFullDisplay">10:00</div><div class="timer-status" id="timerFullStatus">Gotowe do startu</div><div class="timer-progress"><span id="timerFullProgress"></span></div><div class="actions timer-controls"><button class="btn" data-action="timer-start">Start</button><button class="btn ghost" data-action="timer-pause">Pauza</button><button class="btn ghost" data-action="timer-reset">Reset</button><button class="btn ghost" data-action="timer-close">Zamknij</button></div></div></div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const key = document.body.dataset.panel;
  const panel = window.TRAINING_PANELS?.[key] || window.TRAINING_PANELS?.['fake-news'];
  renderPanel(panel);
});
