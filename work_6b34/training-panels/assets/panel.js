let timerDuration = 10 * 60;
let timerRemaining = timerDuration;
let timerEndAt = 0;
let timerInterval = null;
let timerHasStarted = false;
let timerStatusText = 'Gotowe do startu';

function openLayer(id) {
  document.getElementById(id)?.classList.add('active');
}

function closeLayer(id) {
  document.getElementById(id)?.classList.remove('active');
}

function renderQrImage(containerId, src) {
  const img = document.createElement('img');
  const container = document.getElementById(containerId);
  if (!container) return;
  img.src = src;
  img.alt = 'QR';
  container.replaceChildren(img);
}

function qrGenerate() {
  const input = document.getElementById('qrInput');
  const value = input?.value.trim() || '';
  if (!value) {
    alert('Wklej link.');
    return;
  }
  try {
    new URL(value);
  } catch (error) {
    alert('Wklej poprawny link zaczynający się od https:// albo http://');
    return;
  }
  const src = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=' + encodeURIComponent(value);
  renderQrImage('qrBox', src);
  const text = document.getElementById('qrText');
  if (text) text.textContent = value;
}

function qrClear() {
  const input = document.getElementById('qrInput');
  const box = document.getElementById('qrBox');
  const text = document.getElementById('qrText');
  if (input) input.value = '';
  if (box) box.textContent = 'Tutaj pojawi się kod QR';
  if (text) text.textContent = '';
}

function qrBig() {
  const input = document.getElementById('qrInput');
  const value = input?.value.trim() || '';
  if (!value) {
    alert('Najpierw wklej link i wygeneruj QR.');
    return;
  }
  try {
    new URL(value);
  } catch (error) {
    alert('Wklej poprawny link zaczynający się od https:// albo http://');
    return;
  }
  const src = 'https://api.qrserver.com/v1/create-qr-code/?size=900x900&data=' + encodeURIComponent(value);
  renderQrImage('qrFullImg', src);
  const text = document.getElementById('qrFullText');
  if (text) text.textContent = value;
  openLayer('qrFull');
}

function formatTimer(seconds) {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return `${minutes}:${String(rest).padStart(2, '0')}`;
}

function readTimerMinutes() {
  const input = document.getElementById('timerMinutes');
  const value = Number(input?.value || 10);
  return Math.min(180, Math.max(1, Number.isFinite(value) ? value : 10));
}

function setTimerState(status) {
  timerStatusText = status;
  const displays = ['timerDisplay', 'timerFullDisplay'].map(id => document.getElementById(id)).filter(Boolean);
  const statuses = ['timerStatus', 'timerFullStatus'].map(id => document.getElementById(id)).filter(Boolean);
  const bars = ['timerProgress', 'timerFullProgress'].map(id => document.getElementById(id)).filter(Boolean);
  const progressValue = timerDuration ? Math.max(0, Math.min(100, (timerRemaining / timerDuration) * 100)) : 0;
  displays.forEach(display => { display.textContent = formatTimer(timerRemaining); });
  statuses.forEach(statusBox => { statusBox.textContent = status; });
  bars.forEach(bar => { bar.style.width = `${progressValue}%`; });
}

function timerReset() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerHasStarted = false;
  timerDuration = readTimerMinutes() * 60;
  timerRemaining = timerDuration;
  setTimerState('Gotowe do startu');
}

function timerTick() {
  timerRemaining = Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000));
  if (timerRemaining <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerHasStarted = false;
    setTimerState('Czas minął');
    return;
  }
  setTimerState('Odliczanie trwa');
}

function timerStart() {
  if (timerInterval) return;
  if (timerRemaining <= 0) timerReset();
  if (!timerHasStarted) {
    timerDuration = readTimerMinutes() * 60;
    timerRemaining = timerDuration;
  }
  timerHasStarted = true;
  timerEndAt = Date.now() + timerRemaining * 1000;
  timerTick();
  timerInterval = setInterval(timerTick, 250);
}

function timerPause() {
  if (!timerInterval) return;
  clearInterval(timerInterval);
  timerInterval = null;
  setTimerState('Pauza');
}

function setTimerPreset(minutes) {
  const input = document.getElementById('timerMinutes');
  if (input) input.value = minutes;
  timerReset();
}

function bindActions() {
  document.querySelectorAll('[data-action]').forEach(button => {
    const action = button.dataset.action;
    if (action === 'agenda-open') button.addEventListener('click', () => openLayer('agendaFull'));
    if (action === 'agenda-close') button.addEventListener('click', () => closeLayer('agendaFull'));
    if (action === 'qr-generate') button.addEventListener('click', qrGenerate);
    if (action === 'qr-big') button.addEventListener('click', qrBig);
    if (action === 'qr-clear') button.addEventListener('click', qrClear);
    if (action === 'qr-close') button.addEventListener('click', () => closeLayer('qrFull'));
    if (action === 'timer-start') button.addEventListener('click', timerStart);
    if (action === 'timer-pause') button.addEventListener('click', timerPause);
    if (action === 'timer-reset') button.addEventListener('click', timerReset);
    if (action === 'timer-big') button.addEventListener('click', () => {
      openLayer('timerFull');
      setTimerState(timerStatusText);
    });
    if (action === 'timer-close') button.addEventListener('click', () => closeLayer('timerFull'));
  });

  document.querySelectorAll('[data-timer-preset]').forEach(button => {
    button.addEventListener('click', () => setTimerPreset(Number(button.dataset.timerPreset)));
  });

  const input = document.getElementById('timerMinutes');
  input?.addEventListener('input', () => {
    if (!timerInterval && !timerHasStarted) timerReset();
  });
  input?.addEventListener('change', () => {
    if (!timerInterval) timerReset();
  });

  timerReset();
}

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (document.getElementById('agendaFull')?.classList.contains('active')) {
    closeLayer('agendaFull');
    return;
  }
  if (document.getElementById('timerFull')?.classList.contains('active')) {
    closeLayer('timerFull');
    return;
  }
  if (document.getElementById('qrFull')?.classList.contains('active')) {
    closeLayer('qrFull');
  }
});

document.addEventListener('DOMContentLoaded', bindActions);
