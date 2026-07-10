const projectLogo = 'grafiki/logo-projektu-symbol-transparent.png';
const competencesLogo = 'grafiki/kierunek-kompetencje.png';
const portalData = window.portalSiteData || {};

const normalizeDescription = (description) => {
  if (Array.isArray(description)) return description;
  if (!description) return [];
  return String(description).split('\n').map((line) => line.trim()).filter(Boolean);
};

const trainingEvents = (portalData.trainings || []).map((event) => ({
  ...event,
  description: normalizeDescription(event.description),
  logo: event.logo || (event.source === 'Kierunek Kompetencje 4.0' ? competencesLogo : projectLogo),
  button: event.button || (event.open ? 'Zapisz się - formularz Google' : 'Zapisy wkrótce'),
  tone: event.tone || 'blue'
}));

const minMonth = { year: 2026, month: 8 };
const maxMonth = { year: 2027, month: 11 };
const monthNames = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

let currentYear = 2026;
let currentMonth = 8;
let selectedEventId = 'fake-news';

const detailPanel = document.querySelector('.calendar-details');
const calendarGrid = document.querySelector('[data-calendar-grid]');
const calendarList = document.querySelector('[data-calendar-list]');
const calendarTitle = document.querySelector('[data-calendar-title]');
const prevButton = document.querySelector('[data-calendar-prev]');
const nextButton = document.querySelector('[data-calendar-next]');
const nearestButton = document.querySelector('[data-calendar-nearest]');
const calendarModeButtons = document.querySelectorAll('[data-calendar-mode]');
const calendarViews = document.querySelectorAll('[data-calendar-view]');

function parseDate(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function monthIndex(year, month) {
  return year * 12 + month;
}

function formatMonth(year, month) {
  return `${monthNames[month][0].toUpperCase()}${monthNames[month].slice(1)} ${year}`;
}

function formatFullDate(value) {
  return new Intl.DateTimeFormat('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(parseDate(value));
}

function eventsInMonth(year, month) {
  return trainingEvents
    .filter(event => {
      const eventDate = parseDate(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    })
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

function eventById(id) {
  return trainingEvents.find(event => event.id === id) || trainingEvents[0];
}

function setText(selector, value) {
  const element = detailPanel?.querySelector(selector);
  if (element) element.textContent = value;
}

function setDescription(paragraphs) {
  const container = detailPanel?.querySelector('[data-detail-description]');
  if (!container) return;
  container.innerHTML = '';
  paragraphs.forEach(paragraph => {
    const item = document.createElement('p');
    item.textContent = paragraph;
    container.append(item);
  });
}

function renderAction(event) {
  const action = detailPanel?.querySelector('[data-detail-action]');
  if (!action) return;

  if (event.open && event.link) {
    action.innerHTML = `<a class="public-btn calendar-form-btn" href="${event.link}" target="_blank" rel="noopener noreferrer">${event.button || 'Zapisz się'}</a>`;
    return;
  }

  action.innerHTML = '<span class="public-btn signup-btn-disabled" aria-disabled="true">Zapisy wkrótce</span>';
}

function renderDetailLogo(event) {
  const logo = detailPanel?.querySelector('[data-detail-logo]');
  const logoWrap = detailPanel?.querySelector('[data-detail-icon]');
  if (!logo || !logoWrap) return;

  logo.src = event.logo || projectLogo;
  logoWrap.style.setProperty('--detail-color', event.color);
}

function selectEvent(id) {
  const event = eventById(id);
  selectedEventId = event.id;

  setText('[data-detail-source]', event.source);
  setText('[data-detail-title]', event.title);
  setText('[data-detail-date]', formatFullDate(event.date));
  setText('[data-detail-time]', event.time);
  setText('[data-detail-place]', event.place);
  setText('[data-detail-audience]', event.audience);
  setDescription(event.description);
  renderDetailLogo(event);
  renderAction(event);

  document.querySelectorAll('[data-event-id]').forEach(item => {
    item.classList.toggle('is-active', item.dataset.eventId === event.id);
  });
}

function makeEventButton(event) {
  const button = document.createElement('button');
  button.className = `calendar-event ${event.open ? 'is-open' : 'is-waiting'} is-${event.tone}`;
  button.type = 'button';
  button.dataset.eventId = event.id;
  button.innerHTML = `<small>${event.time}</small>${event.shortTitle}`;
  return button;
}

function renderMonth() {
  if (!calendarGrid || !calendarTitle) return;

  calendarTitle.textContent = formatMonth(currentYear, currentMonth);
  calendarGrid.innerHTML = '';

  const firstDay = new Date(currentYear, currentMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(currentYear, currentMonth, 1 - startOffset);
  const monthEvents = eventsInMonth(currentYear, currentMonth);

  for (let index = 0; index < 42; index += 1) {
    const cellDate = new Date(startDate);
    cellDate.setDate(startDate.getDate() + index);

    const day = document.createElement('div');
    day.className = 'calendar-day';
    if (cellDate.getMonth() !== currentMonth) day.classList.add('is-muted');

    const dayNumber = document.createElement('span');
    dayNumber.textContent = String(cellDate.getDate());
    day.append(dayNumber);

    const events = monthEvents.filter(event => {
      const eventDate = parseDate(event.date);
      return eventDate.toDateString() === cellDate.toDateString();
    });

    events.forEach(event => day.append(makeEventButton(event)));
    calendarGrid.append(day);
  }

  renderList(monthEvents);
  updateMonthButtons();
  selectEvent(selectedEventId);
}

function renderList(monthEvents) {
  if (!calendarList) return;
  calendarList.innerHTML = '';

  if (!monthEvents.length) {
    const empty = document.createElement('p');
    empty.className = 'calendar-empty';
    empty.textContent = 'W tym miesiącu nie ma jeszcze opublikowanych terminów szkoleń.';
    calendarList.append(empty);
    return;
  }

  monthEvents.forEach(event => {
    const button = document.createElement('button');
    button.className = 'calendar-list-item';
    button.type = 'button';
    button.dataset.eventId = event.id;
    button.innerHTML = `<span><strong>${formatFullDate(event.date)}</strong><small>${event.time}</small></span><b>${event.title}</b>`;
    calendarList.append(button);
  });
}

function updateMonthButtons() {
  const current = monthIndex(currentYear, currentMonth);
  const min = monthIndex(minMonth.year, minMonth.month);
  const max = monthIndex(maxMonth.year, maxMonth.month);

  if (prevButton) prevButton.disabled = current <= min;
  if (nextButton) nextButton.disabled = current >= max;
}

function changeMonth(delta) {
  const next = new Date(currentYear, currentMonth + delta, 1);
  const nextIndex = monthIndex(next.getFullYear(), next.getMonth());
  const min = monthIndex(minMonth.year, minMonth.month);
  const max = monthIndex(maxMonth.year, maxMonth.month);

  if (nextIndex < min || nextIndex > max) return;

  currentYear = next.getFullYear();
  currentMonth = next.getMonth();

  const monthEvents = eventsInMonth(currentYear, currentMonth);
  if (monthEvents.length) selectedEventId = monthEvents[0].id;
  renderMonth();
}

function goToNearestEvent() {
  const firstEvent = trainingEvents[0];
  const date = parseDate(firstEvent.date);
  currentYear = date.getFullYear();
  currentMonth = date.getMonth();
  selectedEventId = firstEvent.id;
  renderMonth();
}

document.addEventListener('click', event => {
  const item = event.target.closest('[data-event-id]');
  if (!item) return;
  selectEvent(item.dataset.eventId);
});

prevButton?.addEventListener('click', () => changeMonth(-1));
nextButton?.addEventListener('click', () => changeMonth(1));
nearestButton?.addEventListener('click', goToNearestEvent);

calendarModeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedMode = button.dataset.calendarMode;

    calendarModeButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    calendarViews.forEach(view => {
      view.classList.toggle('is-active', view.dataset.calendarView === selectedMode);
    });
  });
});

document.querySelector('.calendar-close')?.addEventListener('click', () => {
  selectEvent(selectedEventId);
});

renderMonth();
