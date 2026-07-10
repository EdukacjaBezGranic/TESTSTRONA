const APP_PATH_PREFIX = window.location.pathname.includes('/portal-szkolen/') ? '../' : '';
const appPath = path => `${APP_PATH_PREFIX}${path}`;

const TRAININGS = {
  ai: {
    title: 'Wykorzystanie sztucznej inteligencji w pracy i w edukacji',
    why: 'AI coraz częściej trafia do codziennej pracy biurowej, ale bez dobrych zasad łatwo o ogólniki, błędy i niekontrolowane dopowiadanie faktów.',
    goal: 'Celem szkolenia jest nauczenie uczestników praktycznego, bezpiecznego i świadomego korzystania z AI przy tekstach, notatkach, materiałach i zadaniach urzędowych.',
    points: ['praktyczne prompty', 'teksty urzędowe', 'ćwiczenia warsztatowe', 'bezpieczna praca z AI'],
    href: appPath('panel-ai-ex7-probe/index.html'),
    cta: 'Otwórz panel',
    accent: '#0e7490',
    accentRgb: '14,116,144'
  },
  'fake-news': {
    title: 'Fake newsy i krytyczne myślenie',
    why: 'Wiele fałszywych lub zmanipulowanych treści wygląda wiarygodnie, szczególnie gdy odwołuje się do emocji, autorytetu albo presji czasu.',
    goal: 'Celem szkolenia jest rozwijanie nawyku spokojnego sprawdzania informacji: źródła, kontekstu, intencji przekazu i sygnałów manipulacji.',
    points: ['fact-checking', 'źródła informacji', 'manipulacje', 'myślenie krytyczne'],
    href: appPath('panel-fake-news/index.html'),
    cta: 'Otwórz panel',
    accent: '#b25b72',
    accentRgb: '178,91,114'
  },
  komunikacja: {
    title: 'Komunikacja i wystąpienia',
    why: 'Dobra komunikacja decyduje o tym, czy odbiorcy rozumieją sens działań, decyzji, zasad i informacji przekazywanych przez instytucję.',
    goal: 'Celem szkolenia jest ćwiczenie jasnej struktury wypowiedzi, prostego języka, wystąpień publicznych i reagowania na pytania bez chaosu i napięcia.',
    points: ['wystąpienia', 'struktura wypowiedzi', 'storytelling', 'feedback'],
    href: appPath('panel-komunikacja/index.html'),
    cta: 'Otwórz panel',
    accent: '#6d5bd0',
    accentRgb: '109,91,208'
  },
  gamifikacja: {
    title: 'Gamifikacja',
    why: 'Uczestnicy szybciej angażują się w naukę, gdy zadanie ma jasny cel, informację zwrotną, element wyboru i widoczny postęp.',
    goal: 'Celem szkolenia jest projektowanie aktywności szkoleniowych z użyciem mechanik gry tak, aby wspierały uczenie się, a nie były tylko ozdobą.',
    points: ['mechaniki gry', 'zaangażowanie', 'praca zespołowa', 'projekt ćwiczeń'],
    href: appPath('panel-gamifikacja/index.html'),
    cta: 'Otwórz panel',
    accent: '#c36a12',
    accentRgb: '195,106,18'
  },
  sel: {
    title: 'SEL i kompetencje społeczno-emocjonalne',
    why: 'Kompetencje społeczno-emocjonalne pomagają lepiej współpracować, rozumieć reakcje innych i działać spokojniej w trudnych sytuacjach.',
    goal: 'Celem szkolenia jest wzmacnianie empatii, autorefleksji, regulacji emocji i komunikacji, które wspierają pracę zespołową oraz relacje z odbiorcami.',
    points: ['emocje', 'empatia', 'relacje', 'współpraca'],
    href: appPath('panel-sel/index.html'),
    cta: 'Otwórz panel',
    accent: '#0f8f68',
    accentRgb: '15,143,104'
  },
  cyber: {
    title: 'Cyberbezpieczeństwo',
    why: 'Najczęstsze zagrożenia cyfrowe zaczynają się od zwykłej wiadomości, linku, załącznika albo pośpiesznej decyzji użytkownika.',
    goal: 'Celem szkolenia jest wyrobienie praktycznych nawyków: sprawdzania linków, rozpoznawania phishingu, ochrony danych i reagowania zgodnie z procedurą.',
    points: ['phishing', 'podejrzane linki', 'ochrona danych', 'procedury'],
    href: appPath('panel-cyberbezpieczenstwo/index.html'),
    cta: 'Otwórz panel',
    accent: '#2563eb',
    accentRgb: '37,99,235'
  },
  mindfulness: {
    title: 'Mindfulness',
    why: 'Przeciążenie informacyjne, pośpiech i napięcie utrudniają koncentrację, podejmowanie decyzji oraz spokojną komunikację z innymi.',
    goal: 'Celem szkolenia jest poznanie prostych praktyk uważności, które pomagają wracać do koncentracji, regulować napięcie i pracować z większą świadomością.',
    points: ['uważność', 'koncentracja', 'mikropraktyki', 'dobrostan'],
    href: appPath('panel-mindfulness/index.html'),
    cta: 'Otwórz panel',
    accent: '#475569',
    accentRgb: '71,85,105'
  }
};

const ACCESS_PASSWORD = '2662WUP';
const ACCESS_SESSION_KEY = 'portalTrainerAccessGranted';

document.querySelectorAll('[data-app-path]').forEach(link => {
  link.href = appPath(link.dataset.appPath);
});

function hasPortalAccess() {
  try {
    return sessionStorage.getItem(ACCESS_SESSION_KEY) === '1';
  } catch (error) {
    return false;
  }
}

function rememberPortalAccess() {
  try {
    sessionStorage.setItem(ACCESS_SESSION_KEY, '1');
  } catch (error) {
    // Bramka nadal działa, tylko bez zapamiętywania w tej karcie.
  }
}

function requestPortalAccess(label) {
  if (hasPortalAccess()) return true;

  const password = window.prompt(`Podaj hasło dostępu do ${label || 'tej sekcji'}:`);
  if (password === null) return false;

  if (password.trim() === ACCESS_PASSWORD) {
    rememberPortalAccess();
    return true;
  }

  window.alert('Nieprawidłowe hasło.');
  return false;
}

document.addEventListener('click', event => {
  const protectedLink = event.target.closest('a[data-access-protected]');
  if (!protectedLink) return;

  const allowed = requestPortalAccess(protectedLink.dataset.accessLabel);
  if (!allowed) {
    event.preventDefault();
    event.stopPropagation();
  }
});

const trainingGrid = document.querySelector('.training-grid');
const trainingCards = Array.from(document.querySelectorAll('.training-card[data-training]'));
const trainingInfo = document.getElementById('trainingInfo');

function arrangeTrainingGrid(selectedCard, info) {
  if (!trainingGrid || !selectedCard || !info) return;

  const otherCards = trainingCards.filter(card => card !== selectedCard);
  const isMobile = window.matchMedia('(max-width: 980px)').matches;

  if (isMobile) {
    [selectedCard, info, ...otherCards].forEach(item => {
      trainingGrid.appendChild(item);
    });
    return;
  }

  const beforeCards = otherCards.slice(0, 3);
  const afterCards = otherCards.slice(3);

  [...beforeCards, selectedCard, info, ...afterCards].forEach(item => {
    trainingGrid.appendChild(item);
  });
}

function renderTrainingInfo(key, card) {
  const data = TRAININGS[key];
  const info = trainingInfo;
  if (!data || !info || !card) return;

  trainingCards.forEach(item => {
    item.classList.remove('is-selected');
  });
  card.classList.add('is-selected');

  info.style.setProperty('--accent', data.accent);
  info.style.setProperty('--accent-rgb', data.accentRgb);
  info.classList.remove('is-visible');
  info.innerHTML = `
    <span class="tag">szczegóły szkolenia</span>
    <h3>${data.title}</h3>
    <div class="info-copy">
      <div>
        <strong>Dlaczego ważne?</strong>
        <p>${data.why}</p>
      </div>
      <div>
        <strong>Cel szkolenia</strong>
        <p>${data.goal}</p>
      </div>
    </div>
    <div class="info-points">${data.points.map(point => `<span>${point}</span>`).join('')}</div>
    ${data.href ? `<a class="btn" href="${data.href}" data-access-protected="training" data-access-label="panelu szkolenia">${data.cta || 'Otwórz panel'}</a>` : '<button class="btn ghost" type="button" disabled>Panel w przygotowaniu</button>'}
  `;

  arrangeTrainingGrid(card, info);
  requestAnimationFrame(() => info.classList.add('is-visible'));
}

trainingCards.forEach(card => {
  card.addEventListener('click', event => {
    if (event.target.closest('a, button')) return;
    renderTrainingInfo(card.dataset.training, card);
  });

  card.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    renderTrainingInfo(card.dataset.training, card);
  });
});

const defaultCard = trainingCards.find(card => card.classList.contains('is-selected')) || trainingCards[0];
if (defaultCard) {
  renderTrainingInfo(defaultCard.dataset.training, defaultCard);
}

window.addEventListener('resize', () => {
  const selectedCard = trainingCards.find(card => card.classList.contains('is-selected')) || trainingCards[0];
  if (selectedCard) arrangeTrainingGrid(selectedCard, trainingInfo);
});
