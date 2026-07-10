const EXERCISES = window.EXERCISES || {};
const APP_VERSION = '20260709-03';
const TOOL_SETS = {
  default: {
    intro: 'Użyjcie narzędzia, do którego macie dostęp. Wystarczy jedno narzędzie tekstowe; nie trzeba testować wszystkich.',
    items: [
      ['ChatGPT', 'do przygotowania pierwszej wersji, poprawiania polecenia i porównania wariantów', 'https://chatgpt.com'],
      ['Claude', 'do spokojniejszej analizy dłuższych tekstów i zachowania sensu materiału', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli korzystacie z niego w środowisku służbowym', 'https://copilot.microsoft.com'],
      ['Gemini', 'jako alternatywne narzędzie do pracy z tekstem', 'https://gemini.google.com']
    ]
  },
  prompt: {
    intro: 'Ćwiczenie można wykonać w dowolnym narzędziu generatywnej AI. Najważniejsze jest porównanie słabego i lepszego polecenia.',
    items: [
      ['ChatGPT', 'do szybkiego testowania promptu i sprawdzania, jak zmienia się odpowiedź', 'https://chatgpt.com'],
      ['Claude', 'do porównania odpowiedzi i spokojnej oceny, czy polecenie jest wystarczająco precyzyjne', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli jest dostępny w pracy lub w pakiecie służbowym', 'https://copilot.microsoft.com'],
      ['Gemini', 'jako drugie narzędzie do sprawdzenia, czy prompt działa podobnie także poza jednym modelem', 'https://gemini.google.com']
    ]
  },
  text: {
    intro: 'Ćwiczenie można wykonać w dowolnym narzędziu generatywnej AI, które umożliwia pracę z tekstem.',
    items: [
      ['ChatGPT', 'do poprawy tekstu, uproszczenia języka, przygotowania listy zmian i porównania wersji', 'https://chatgpt.com'],
      ['Claude', 'do dłuższej redakcji tekstu, zachowania sensu i spokojniejszej analizy stylu', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli uczestnicy korzystają z niego w środowisku służbowym', 'https://copilot.microsoft.com'],
      ['Gemini', 'jako alternatywne narzędzie do pracy z tekstem', 'https://gemini.google.com'],
      ['DeepL Write', 'do językowej poprawy tekstu, gdy celem jest głównie styl, płynność i poprawność', 'https://www.deepl.com/write']
    ]
  },
  info: {
    intro: 'Do przygotowania komunikatu wystarczy jedno narzędzie tekstowe. Wybierzcie to, do którego macie dostęp.',
    items: [
      ['ChatGPT', 'do przygotowania kilku wersji komunikatu i dopracowania tonu', 'https://chatgpt.com'],
      ['Claude', 'do spokojnej redakcji informacji i pilnowania, żeby tekst nie brzmiał reklamowo', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli komunikat ma później trafić do Worda, Outlooka lub środowiska Microsoft 365', 'https://copilot.microsoft.com'],
      ['Gemini', 'jako alternatywa do tworzenia krótkich komunikatów', 'https://gemini.google.com'],
      ['DeepL Write', 'do końcowego wygładzenia języka', 'https://www.deepl.com/write']
    ]
  },
  test: {
    intro: 'Do pytań, quizów i testów wybierzcie narzędzie, które dobrze pracuje z listami i formatem odpowiedzi.',
    items: [
      ['ChatGPT', 'do generowania pytań, wariantów odpowiedzi i klucza', 'https://chatgpt.com'],
      ['Claude', 'do sprawdzenia, czy pytania są zrozumiałe i nie sugerują odpowiedzi', 'https://claude.ai'],
      ['Gemini', 'jako alternatywa do przygotowania quizu', 'https://gemini.google.com'],
      ['Google Forms', 'do późniejszego przeniesienia pytań do formularza', 'https://forms.google.com'],
      ['Microsoft Forms', 'jeżeli formularze są tworzone w środowisku Microsoft', 'https://forms.office.com']
    ]
  },
  verify: {
    intro: 'Tu najważniejsze jest sprawdzanie i krytyczne czytanie. Narzędzie AI pomaga, ale ostateczną decyzję podejmuje człowiek.',
    items: [
      ['ChatGPT', 'do wskazania błędów, ogólników, ryzyk i brakujących informacji', 'https://chatgpt.com'],
      ['Claude', 'do dokładniejszej analizy argumentacji i tonu odpowiedzi', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli materiał jest sprawdzany w środowisku służbowym', 'https://copilot.microsoft.com'],
      ['Perplexity', 'do sprawdzenia informacji wymagających źródeł', 'https://www.perplexity.ai'],
      ['Dokument źródłowy', 'jako najważniejszy punkt odniesienia przy ocenie wyniku AI', '']
    ]
  },
  own: {
    intro: 'Wybierzcie narzędzie, którego realnie możecie używać po szkoleniu. Ćwiczenie ma prowadzić do promptu przydatnego w pracy.',
    items: [
      ['ChatGPT', 'do szybkiego przygotowania i testowania własnego promptu', 'https://chatgpt.com'],
      ['Claude', 'do dopracowania bardziej złożonych poleceń i dłuższych materiałów', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli codzienna praca odbywa się w Microsoft 365', 'https://copilot.microsoft.com'],
      ['Gemini', 'jeżeli zespół korzysta z narzędzi Google', 'https://gemini.google.com']
    ]
  },
  summary: {
    intro: 'Do streszczeń najlepiej użyć narzędzia, które dobrze radzi sobie z dłuższym tekstem lub plikiem źródłowym.',
    items: [
      ['Claude', 'do pracy z dłuższym tekstem i zachowania głównego sensu materiału', 'https://claude.ai'],
      ['ChatGPT', 'do streszczenia, listy wniosków i pytań kontrolnych', 'https://chatgpt.com'],
      ['NotebookLM', 'jeżeli materiał jest w pliku lub pochodzi z kilku źródeł', 'https://notebooklm.google.com'],
      ['Microsoft Copilot', 'jeżeli tekst znajduje się w Wordzie lub środowisku Microsoft 365', 'https://copilot.microsoft.com'],
      ['Gemini', 'jako alternatywa do podsumowania tekstu', 'https://gemini.google.com']
    ]
  },
  workshop: {
    intro: 'Do projektowania aktywności szkoleniowej użyjcie narzędzia tekstowego. Później warto sprawdzić wynik z perspektywy prowadzącego.',
    items: [
      ['ChatGPT', 'do szybkiego szkicu ćwiczenia, instrukcji i pytań do omówienia', 'https://chatgpt.com'],
      ['Claude', 'do dopracowania przebiegu, celu i języka instrukcji', 'https://claude.ai'],
      ['Gemini', 'jako alternatywa do generowania pomysłów', 'https://gemini.google.com'],
      ['Canva', 'jeżeli efekt ma być później pokazany jako karta pracy lub slajd', 'https://www.canva.com']
    ]
  },
  visual: {
    intro: 'Najpierw przygotujcie dobry opis procesu. Dopiero potem przenieście go do narzędzia wizualnego.',
    items: [
      ['ChatGPT', 'do uporządkowania procesu w kroki i decyzje', 'https://chatgpt.com'],
      ['Claude', 'do doprecyzowania opisów i zależności między etapami', 'https://claude.ai'],
      ['Napkin AI', 'do zamiany uporządkowanego tekstu w schemat lub mapę', 'https://www.napkin.ai'],
      ['Canva', 'do dopracowania grafiki, jeżeli schemat ma trafić do materiałów', 'https://www.canva.com']
    ]
  },
  forms: {
    intro: 'Najpierw przygotujcie pytania i logikę ankiety, a dopiero potem przenieście je do formularza.',
    items: [
      ['ChatGPT', 'do przygotowania pytań, skal odpowiedzi i komunikatu wprowadzającego', 'https://chatgpt.com'],
      ['Claude', 'do sprawdzenia, czy pytania są neutralne i zrozumiałe', 'https://claude.ai'],
      ['Google Forms', 'do utworzenia formularza online', 'https://forms.google.com'],
      ['Microsoft Forms', 'jeżeli formularz ma działać w środowisku Microsoft', 'https://forms.office.com'],
      ['Gemini', 'jako alternatywa do pracy nad pytaniami', 'https://gemini.google.com']
    ]
  },
  meeting: {
    intro: 'Do porządkowania notatek użyjcie narzędzia tekstowego. Nie wklejajcie danych wrażliwych ani informacji, których nie wolno udostępniać.',
    items: [
      ['ChatGPT', 'do zamiany notatek w decyzje, zadania i tabelę odpowiedzialności', 'https://chatgpt.com'],
      ['Claude', 'do analizy dłuższych, chaotycznych notatek', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli notatki są w Wordzie, Teams albo OneNote', 'https://copilot.microsoft.com'],
      ['Gemini', 'jeżeli notatki są w środowisku Google', 'https://gemini.google.com']
    ]
  },
  email: {
    intro: 'Do maila wybierzcie narzędzie tekstowe. Ważne: nie wklejajcie danych osobowych, pełnych spraw ani informacji poufnych.',
    items: [
      ['ChatGPT', 'do przygotowania spokojnej odpowiedzi i kilku wariantów tonu', 'https://chatgpt.com'],
      ['Claude', 'do wyważenia tonu i unikania eskalacji', 'https://claude.ai'],
      ['Microsoft Copilot', 'jeżeli pracujecie w Outlooku lub Microsoft 365', 'https://copilot.microsoft.com'],
      ['Gemini', 'jako alternatywa do redakcji wiadomości', 'https://gemini.google.com'],
      ['DeepL Write', 'do końcowej korekty językowej', 'https://www.deepl.com/write']
    ]
  },
  'code-tool': {
    intro: 'Ćwiczenie można wykonać na koncie w narzędziu AI. Kod traktujcie jako szkic do sprawdzenia, nie jako gotowy system urzędowy.',
    items: [
      ['ChatGPT', 'do przygotowania prostego kodu HTML, CSS i JavaScript oraz listy testów', 'https://chatgpt.com'],
      ['Claude', 'do wygenerowania czytelnego kodu i wyjaśnienia, co robią poszczególne elementy', 'https://claude.ai'],
      ['Gemini', 'jako alternatywa do prostych zadań kodowych', 'https://gemini.google.com'],
      ['CodePen', 'do szybkiego uruchomienia małego przykładu w przeglądarce', 'https://codepen.io/pen/'],
      ['JSFiddle', 'jako alternatywne miejsce do testowania krótkiego kodu', 'https://jsfiddle.net']
    ]
  },
  'code-debug': {
    intro: 'Do debugowania użyjcie AI jako pomocnika, ale każdą poprawkę sprawdźcie ręcznie na prostym przykładzie.',
    items: [
      ['ChatGPT', 'do znalezienia błędu, zaproponowania poprawki i testów ręcznych', 'https://chatgpt.com'],
      ['Claude', 'do dokładniejszego wyjaśnienia błędu w kodzie', 'https://claude.ai'],
      ['Gemini', 'jako alternatywa do analizy krótkiego fragmentu kodu', 'https://gemini.google.com'],
      ['CodePen', 'do uruchomienia poprawionego przykładu', 'https://codepen.io/pen/'],
      ['Przeglądarka', 'do sprawdzenia, czy poprawka faktycznie działa', '']
    ]
  },
  'code-data': {
    intro: 'Do małego raportu można użyć AI oraz arkusza. Nie wklejajcie prawdziwych danych osobowych.',
    items: [
      ['ChatGPT', 'do przygotowania opisu raportu, kodu pomocniczego albo formuł', 'https://chatgpt.com'],
      ['Claude', 'do analizy tabeli i opisania wniosków', 'https://claude.ai'],
      ['Google Sheets', 'do sprawdzenia danych, filtrów i prostych formuł', 'https://sheets.google.com'],
      ['Microsoft Excel', 'jeżeli arkusz ma działać w środowisku Microsoft', 'https://www.microsoft.com/microsoft-365/excel'],
      ['Gemini', 'jako alternatywa do pracy z tabelą', 'https://gemini.google.com']
    ]
  },
  'code-script': {
    intro: 'W tym ćwiczeniu projektujecie bezpieczny szkic automatyzacji. Skrypt nie powinien niczego wysyłać ani usuwać bez decyzji człowieka.',
    items: [
      ['ChatGPT', 'do napisania promptu i szkicu prostego Google Apps Script', 'https://chatgpt.com'],
      ['Claude', 'do sprawdzenia ryzyk i opisania działania skryptu', 'https://claude.ai'],
      ['Google Apps Script', 'do późniejszego testowania skryptu na kopii pliku', 'https://script.google.com'],
      ['Google Sheets', 'jako arkusz testowy dla automatyzacji', 'https://sheets.google.com'],
      ['Gemini', 'jako alternatywa do prostych zadań kodowych', 'https://gemini.google.com']
    ]
  },
  'file-doc': {
    intro: 'Do dokumentu użyjcie narzędzia tekstowego oraz edytora dokumentów, w którym zespół realnie pracuje.',
    items: [
      ['ChatGPT', 'do przygotowania struktury dokumentu i pierwszej wersji treści', 'https://chatgpt.com'],
      ['Claude', 'do dopracowania dłuższych fragmentów i logicznego układu', 'https://claude.ai'],
      ['Google Docs', 'do utworzenia dokumentu współdzielonego', 'https://docs.google.com'],
      ['Microsoft Word', 'jeżeli dokument ma powstać w środowisku Microsoft', 'https://www.microsoft.com/microsoft-365/word'],
      ['DeepL Write', 'do końcowej korekty językowej', 'https://www.deepl.com/write']
    ]
  },
  'file-text': {
    intro: 'Do pliku tekstowego wystarczy narzędzie AI i zwykły edytor tekstu. Najważniejsza jest czytelna struktura.',
    items: [
      ['ChatGPT', 'do przygotowania instrukcji w prostym języku', 'https://chatgpt.com'],
      ['Claude', 'do uporządkowania dłuższej instrukcji i sprawdzenia, czy niczego nie brakuje', 'https://claude.ai'],
      ['Notatnik lub TextEdit', 'do zapisania prostego pliku tekstowego', ''],
      ['Google Docs', 'jeżeli instrukcja ma być później współdzielona', 'https://docs.google.com'],
      ['StackEdit', 'jeżeli grupa chce przygotować czytelny plik Markdown', 'https://stackedit.io/app']
    ]
  },
  'file-sheet': {
    intro: 'Do arkusza użyjcie narzędzia AI do projektu oraz arkusza kalkulacyjnego do sprawdzenia formuł.',
    items: [
      ['ChatGPT', 'do zaprojektowania kolumn, formuł i zasad walidacji', 'https://chatgpt.com'],
      ['Claude', 'do sprawdzenia logiki arkusza i opisania ryzyk', 'https://claude.ai'],
      ['Google Sheets', 'do utworzenia i przetestowania arkusza', 'https://sheets.google.com'],
      ['Microsoft Excel', 'jeżeli arkusz ma działać w środowisku Microsoft', 'https://www.microsoft.com/microsoft-365/excel'],
      ['Gemini', 'jako alternatywa do pracy z tabelą i formułami', 'https://gemini.google.com']
    ]
  },
  'file-slides': {
    intro: 'Do prezentacji użyjcie AI do struktury i narzędzia prezentacyjnego do slajdów. Nie chodzi o piękne slajdy, tylko o dobry szkielet.',
    items: [
      ['ChatGPT', 'do zaprojektowania układu slajdów, tytułów i notatek prowadzącego', 'https://chatgpt.com'],
      ['Claude', 'do dopracowania narracji i kolejności slajdów', 'https://claude.ai'],
      ['Google Slides', 'do złożenia prezentacji w środowisku Google', 'https://slides.google.com'],
      ['PowerPoint', 'jeżeli prezentacja ma powstać w środowisku Microsoft', 'https://www.microsoft.com/microsoft-365/powerpoint'],
      ['Gamma lub Canva', 'do szybkiego szkicu wizualnego, jeśli grupa ma do nich dostęp', 'https://gamma.app']
    ]
  }
};
let currentExerciseType = 'prompt';
let currentExercise = null;
let timerDuration = 10 * 60;
let timerRemaining = timerDuration;
let timerEndAt = 0;
let timerInterval = null;
let timerHasStarted = false;
let timerStatusText = 'Gotowe do startu';

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

const RICH_LABELS = [
    'Materiał do pracy',
    'Materiał dla uczestników',
    'Opis ćwiczenia',
    'Sytuacja zawodowa',
    'Co wiadomo o szkoleniu',
    'Odbiorcy komunikatu',
    'Informacje, których jeszcze nie znamy',
    'Jakiego stylu oczekujemy',
    'Niedopracowany prompt do analizy',
    'Dlaczego ten prompt wymaga poprawy',
    'Zadanie dla uczestników',
    'Przebieg pracy',
    'Checklista dobrego promptu',
    'Przykład poprawionego promptu',
    'Przykład notatki po pracy',
    'Omówienie dla prowadzącego',
    'Wariant bez logowania',
    'Wariant trudniejszy',
    'Czas',
    'Forma pracy',
    'Narzędzia do wykonania ćwiczenia',
    'Karta sytuacji',
    'Przebieg',
    'Efekt pracy',
    'Efekt pracy uczestników',
    'Słaby prompt',
    'Tekst wyjściowy',
    'Trzeba zachować',
    'Nie wolno dopisać',
    'Wasze zadanie',
    'Wasz prompt powinien określać',
    'Czego nie robicie w tym ćwiczeniu',
    'Na końcu zapiszcie',
    'Dobra odpowiedź AI powinna',
    'Kontekst',
    'Tekst do poprawy',
    'Brief roboczy',
    'Tytuł szkolenia',
    'Odbiorcy',
    'Cel',
    'Cel komunikatu',
    'Cel ćwiczenia',
    'Co się wydarzyło',
    'Informacje obowiązkowe',
    'Informacje do wykorzystania',
    'Elementy do uwzględnienia',
    'Ton',
    'Styl',
    'Długość',
    'Ograniczenie',
    'Zakaz',
    'Kanał',
    'Miejsce publikacji',
    'Temat',
    'Forma',
    'Zakres',
    'Obszary',
    'Materiał A',
    'Materiał B',
    'Polecenie dla AI',
    'Odpowiedź AI',
    'Notatka',
    'Mail',
    'Podpowiedzi',
    'Kontrola jakości',
    'Kontrola testu',
    'Kontrola wyniku',
    'Kontrola formularza',
    'Kontrola scenariusza',
    'Kontrola wizualizacji',
    'Kontrola notatki',
    'Kontrola odpowiedzi',
    'Pytania do omówienia',
    'Przykładowe polecenie do AI',
    'Przykładowy start',
    'Przykładowy szkielet promptu',
    'Karta zadania uczestnika',
    'Uzupełnijcie',
    'Przykładowy mail roboczy',
    'Przykładowy dokument do pracy',
    'Opis działania projektowego',
    'Opis sprawy',
    'Materiał do streszczenia',
    'Materiał do streszczenia dla kadry zarządzającej',
    'Materiał do podsumowania dla uczestników',
    'Materiał do analizy działań',
    'Materiał do notatki służbowej',
    'Założenia ćwiczenia',
    'Założenia aktywności otwierającej',
    'Pytanie startowe',
    'Założenia pracy w parach',
    'Założenia ćwiczenia z dyskusją',
    'Materiał do analizy błędu',
    'Założenia ćwiczenia wdrożeniowego',
    'Opis do zamiany w schemat',
    'Opis procesu',
    'Materiał do mapy',
    'Sytuacje do schematu decyzyjnego',
    'Opis procesu rekrutacji',
    'Materiał do infografiki',
    'Cel ankiety',
    'Cel ankiety po warsztacie',
    'Cel badania potrzeb',
    'Cel ankiety satysfakcji',
    'Założenia formularza',
    'Założenia automatyzacji',
    'Zakres materiału szkolenia',
    'Zakres quizu na start',
    'Materiał do pytań sytuacyjnych',
    'Zakres modułu „Pisanie skutecznych promptów”',
    'Założenia testu',
    'Cel rozmowy sprawdzającej',
    'Przykładowa odpowiedź AI do oceny',
    'Tekst wygenerowany przez AI',
    'Fragment odpowiedzi AI',
    'Materiał do oceny',
    'Komunikat wygenerowany przez AI',
    'Dane wejściowe',
    'Dane testowe',
    'Kod do analizy',
    'Wymagania',
    'Warunki',
    'Oczekiwane działanie',
    'Błąd do znalezienia',
    'Testy ręczne',
    'Bezpiecznik',
    'Dane źródłowe',
    'Struktura dokumentu',
    'Plik wynikowy',
    'Format wyjściowy',
    'Kontrola dokumentu',
    'Kontrola pliku',
    'Kontrola arkusza',
    'Kontrola prezentacji',
    'Układ slajdów',
    'Zasady pracy'
  ];

function getRichHeading(line) {
  const trimmed = line.trim();
  const markdownHeading = trimmed.match(/^(#{1,3})\s+(.+)$/);
  if (markdownHeading) {
    return { title: markdownHeading[2], level: markdownHeading[1].length };
  }
  if (/^Krok\s+\d+\./i.test(trimmed)) return { title: trimmed, level: 4 };
  const labelOnly = trimmed.match(/^(.{2,90}):$/);
  if (labelOnly && RICH_LABELS.includes(labelOnly[1])) {
    return { title: labelOnly[1], level: 3 };
  }
  const labelWithText = trimmed.match(/^(.{2,90}):\s+(.+)$/);
  if (labelWithText && RICH_LABELS.includes(labelWithText[1])) {
    return { title: labelWithText[1], level: 3, lead: labelWithText[2] };
  }
  return null;
}

function formatParagraph(lines) {
  let text = lines.join(' ').trim();
  if (!text) return '';
  const isMarkdownQuote = lines.some(line => /^>\s?/.test(line.trim()));
  if (isMarkdownQuote) {
    text = lines
      .map(line => line.trim().replace(/^>\s?/, '').trim())
      .filter(Boolean)
      .join('\n\n');
  }
  const className = isMarkdownQuote || /^„/.test(text) || /^"[^"]/.test(text) ? ' class="rich-quote"' : '';
  return `<p${className}>${escapeHtml(text)}</p>`;
}

function formatStructuredText(value) {
  const lines = String(value || '').replace(/\r\n?/g, '\n').split('\n');
  let html = '<div class="rich-content">';
  let sectionOpen = false;
  let paragraph = [];
  let listType = '';
  let tableRows = [];

  const closeList = () => {
    if (!listType) return;
    html += `</${listType}>`;
    listType = '';
  };
  const parseTableRow = (line) => {
    const cells = line.split('|').map(cell => cell.trim());
    if (!cells[0]) cells.shift();
    if (!cells[cells.length - 1]) cells.pop();
    return cells;
  };
  const isSeparatorRow = (cells) => cells.length && cells.every(cell => /^:?-{3,}:?$/.test(cell));
  const buildTableCells = (cells, tag) => cells.map(cell => `<${tag}>${escapeHtml(cell)}</${tag}>`).join('');
  const closeTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.map(parseTableRow).filter(row => row.length);
    const hasHeader = rows.length > 1 && isSeparatorRow(rows[1]);
    const bodyRows = hasHeader ? rows.slice(2) : rows;
    const header = hasHeader ? `<thead><tr>${buildTableCells(rows[0], 'th')}</tr></thead>` : '';
    const body = `<tbody>${bodyRows.map(row => `<tr>${buildTableCells(row, 'td')}</tr>`).join('')}</tbody>`;
    html += `<div class="rich-table-wrap"><table class="rich-table">${header}${body}</table></div>`;
    tableRows = [];
  };
  const closeParagraph = () => {
    if (!paragraph.length) return;
    html += formatParagraph(paragraph);
    paragraph = [];
  };
  const closeSection = () => {
    closeParagraph();
    closeList();
    closeTable();
    if (sectionOpen) html += '</section>';
    sectionOpen = false;
  };
  const openSection = (heading) => {
    closeSection();
    const levelClass = heading.level <= 1 ? 'major' : heading.level === 2 ? 'standard' : 'compact';
    html += `<section class="rich-section rich-section-${levelClass}"><h4>${escapeHtml(heading.title)}</h4>`;
    sectionOpen = true;
    if (heading.lead) paragraph.push(heading.lead);
  };
  const appendListItem = (type, text) => {
    closeParagraph();
    closeTable();
    if (listType && listType !== type) closeList();
    if (!listType) {
      html += `<${type}>`;
      listType = type;
    }
    html += `<li>${escapeHtml(text)}</li>`;
  };

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) {
      closeParagraph();
      closeList();
      closeTable();
      return;
    }
    if (/^---+$/.test(trimmed)) {
      closeSection();
      return;
    }
    const heading = getRichHeading(trimmed);
    if (heading) {
      openSection(heading);
      return;
    }
    if (/^\|.+\|$/.test(trimmed)) {
      closeParagraph();
      closeList();
      tableRows.push(trimmed);
      return;
    }
    const bullet = trimmed.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      appendListItem('ul', bullet[1]);
      return;
    }
    const number = trimmed.match(/^\d+\.\s+(.+)$/);
    if (number) {
      appendListItem('ol', number[1]);
      return;
    }
    closeTable();
    closeList();
    paragraph.push(trimmed);
  });

  closeSection();
  html += '</div>';
  return html;
}

function formatRichText(value) {
  return formatStructuredText(value);
}

function setRichText(id, value) {
  document.getElementById(id).innerHTML = formatRichText(value);
}

function formatGuideText(value) {
  return formatStructuredText(value);
}

function setTrainingGuide(value) {
  const guide = document.getElementById('trainerGuide');
  const content = document.getElementById('exGuide');
  if (!guide || !content) return;
  if (!String(value || '').trim()) {
    guide.classList.remove('active');
    content.innerHTML = '';
    return;
  }
  content.innerHTML = formatGuideText(value);
  guide.classList.add('active');
}


function normalizeToolItem(item) {
  if (Array.isArray(item)) return { name: item[0], description: item[1], url: item[2] || '' };
  return item || {};
}

function getExerciseTools(e, type = currentExerciseType) {
  return e?.tools || TOOL_SETS[type] || TOOL_SETS.default;
}

function buildToolName(name, url) {
  if (!url) return `<strong>${escapeHtml(name)}</strong>`;
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer"><strong>${escapeHtml(name)}</strong></a>`;
}

function buildToolsHtml(tools, headingTag = 'h3') {
  const safeTools = tools || TOOL_SETS.default;
  const items = (safeTools.items || []).map(normalizeToolItem).filter(item => item.name);
  return `
    <span class="tag">narzędzia</span>
    <${headingTag}>Narzędzia do wykonania ćwiczenia</${headingTag}>
    <p>${escapeHtml(safeTools.intro || TOOL_SETS.default.intro)}</p>
    <ul class="tool-list">
      ${items.map(item => `<li>${buildToolName(item.name, item.url)} <span>${escapeHtml(item.description || '')}</span></li>`).join('')}
    </ul>
  `;
}

function setExerciseTools(containerId, e, type = currentExerciseType) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = buildToolsHtml(getExerciseTools(e, type));
}

function getExerciseModal() {
  return document.querySelector('#exerciseOverlay .modal');
}

function ensureModernExerciseContainer() {
  let container = document.getElementById('exerciseModern');
  if (container) return container;
  container = document.createElement('div');
  container.id = 'exerciseModern';
  container.className = 'modern-exercise';
  const meta = document.querySelector('#exerciseOverlay .meta');
  if (meta) meta.insertAdjacentElement('afterend', container);
  return container;
}

function hideModernExercise() {
  const modal = getExerciseModal();
  const container = document.getElementById('exerciseModern');
  modal?.classList.remove('modal-modern');
  if (container) {
    container.hidden = true;
    container.innerHTML = '';
  }
}

function buildModernCard(card) {
  const classes = [
    'modern-card',
    `modern-card-${card.tone || 'neutral'}`,
    card.wide ? 'modern-card-wide' : ''
  ].filter(Boolean).join(' ');
  return `
    <article class="${classes}">
      ${card.kicker ? `<span class="tag">${escapeHtml(card.kicker)}</span>` : ''}
      <h3>${escapeHtml(card.title || '')}</h3>
      <div class="modern-card-body">${formatRichText(card.body || '')}</div>
    </article>
  `;
}

function findModernTab(tabs, id) {
  return (tabs || []).find(tab => tab.id === id) || { cards: [] };
}

function findModernCard(tabs, tabId, titlePart) {
  const tab = findModernTab(tabs, tabId);
  return (tab.cards || []).find(card => String(card.title || '').includes(titlePart)) || {};
}

function buildGuidedPanel(card, extraClass = '') {
  const classes = [
    'guided-panel',
    `guided-panel-${card.tone || 'neutral'}`,
    extraClass
  ].filter(Boolean).join(' ');
  return `
    <section class="${classes}">
      ${card.kicker ? `<span class="tag">${escapeHtml(card.kicker)}</span>` : ''}
      <h3>${escapeHtml(card.title || '')}</h3>
      <div class="guided-body">${formatRichText(card.body || '')}</div>
    </section>
  `;
}

function hasGuidedCard(card) {
  return Boolean(card && (card.title || card.body));
}

function buildGuidedPanelIfAny(card, extraClass = '') {
  return hasGuidedCard(card) ? buildGuidedPanel(card, extraClass) : '';
}

function buildGuidedSource(card, index) {
  return `
    <details class="source-detail" ${index === 0 ? 'open' : ''}>
      <summary>
        <span>${escapeHtml(card.title || `Materiał ${index + 1}`)}</span>
        <em>pełny tekst źródłowy</em>
      </summary>
      <div class="source-detail-body">${formatRichText(card.body || '')}</div>
    </details>
  `;
}

function buildGuidedTrainerCard(card) {
  return `
    <section class="trainer-strip trainer-strip-${card.tone || 'neutral'}">
      ${card.kicker ? `<span class="tag">${escapeHtml(card.kicker)}</span>` : ''}
      <h3>${escapeHtml(card.title || '')}</h3>
      <div class="guided-body">${formatRichText(card.body || '')}</div>
    </section>
  `;
}

function getGuidedVisual(e) {
  return e?.modern?.visual || {};
}

function normalizeVisualItem(item, index, prefix = '') {
  if (Array.isArray(item)) {
    return {
      number: item[0] || `${prefix}${index + 1}`,
      title: item[1] || '',
      text: item[2] || '',
      tone: item[3] || 'neutral'
    };
  }
  return {
    number: item?.number || item?.mark || `${prefix}${index + 1}`,
    title: item?.title || '',
    text: item?.text || item?.body || '',
    tone: item?.tone || 'neutral'
  };
}

function buildGuidedHeroMap(e) {
  const visual = getGuidedVisual(e);
  const flow = (visual.flow && visual.flow.length ? visual.flow : ['Materiał', 'Decyzje', 'Wynik']).slice(0, 3);
  return `
    <div class="guided-hero-map" aria-hidden="true">
      <span>${escapeHtml(flow[0] || '')}</span>
      <i></i>
      <span>${escapeHtml(flow[1] || '')}</span>
      <i></i>
      <span>${escapeHtml(flow[2] || '')}</span>
    </div>
  `;
}

function buildGuidedDeliverables(e) {
  const visual = getGuidedVisual(e);
  const items = (visual.deliverables && visual.deliverables.length
    ? visual.deliverables
    : [
      ['01', 'Wynik pracy', e.result || 'materiał do omówienia'],
      ['02', 'Prompt', 'instrukcja gotowa do użycia'],
      ['03', 'Kontrola', 'sprawdzenie wyniku AI']
    ]).map((item, index) => normalizeVisualItem(item, index, '0'));
  return `
    <div class="guided-deliverables" aria-label="Efekty pracy">
      ${items.map(item => `
        <div class="guided-deliverable">
          <strong>${escapeHtml(item.number)}</strong>
          <span>${escapeHtml(item.title)}</span>
          <small>${escapeHtml(item.text)}</small>
        </div>
      `).join('')}
    </div>
  `;
}

function buildGuidedSourceTiles(e) {
  const visual = getGuidedVisual(e);
  const sources = (visual.sourceTiles || []).map((item, index) => normalizeVisualItem(item, index, 'Ź'));
  if (!sources.length) return '';
  return `
    <section class="guided-source-tiles" aria-label="Mapa materiałów źródłowych">
      <div>
        <span class="tag">${escapeHtml(visual.sourceKicker || 'mapa pracy')}</span>
        <h3>${escapeHtml(visual.sourceTitle || 'Zanim czytacie szczegóły, zobaczcie z czego składa się zadanie')}</h3>
      </div>
      <div class="guided-source-grid">
        ${sources.map(item => `
          <article class="guided-source-tile guided-source-${item.tone}">
            <b>${escapeHtml(item.number)}</b>
            <h4>${escapeHtml(item.title)}</h4>
            <p>${escapeHtml(item.text)}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function buildGuidedDecisionCards(e) {
  const cards = (getGuidedVisual(e).decisions || []).map((item, index) => normalizeVisualItem(item, index));
  if (!cards.length) return '';
  return `
    <section class="guided-decision-strip" aria-label="Decyzje projektowe">
      ${cards.map(item => `
        <article>
          <span>${escapeHtml(item.title)}</span>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `).join('')}
    </section>
  `;
}

function buildGuidedPromptPath(e) {
  const path = (getGuidedVisual(e).path || ['Rozpoznaj materiał', 'Ułóż instrukcję', 'Sprawdź wynik']).slice(0, 4);
  return `
    <div class="guided-prompt-path" aria-label="Przepływ pracy">
      ${path.map((item, index) => `
        <div class="prompt-path-node">
          <strong>${index + 1}</strong>
          <span>${escapeHtml(item)}</span>
        </div>
        ${index < path.length - 1 ? '<div class="prompt-path-line"></div>' : ''}
      `).join('')}
    </div>
  `;
}

function buildGuidedExerciseHtml(e) {
  const modern = e.modern || {};
  const visual = getGuidedVisual(e);
  const tabs = modern.tabs || [];
  const context = findModernCard(tabs, 'participant', 'Kontekst pracy');
  const outcome = findModernCard(tabs, 'participant', 'Wasz wynik');
  const warning = findModernCard(tabs, 'participant', 'Nie zaczynajcie').title
    ? findModernCard(tabs, 'participant', 'Nie zaczynajcie')
    : findModernCard(tabs, 'participant', 'Największe ryzyko');
  const weakPrompt = findModernCard(tabs, 'participant', 'Niedopracowany prompt');
  const keep = findModernCard(tabs, 'participant', 'Co musi');
  const avoid = findModernCard(tabs, 'participant', 'Czego nie');
  const checklist = findModernCard(tabs, 'participant', 'Checklista');
  const materialCards = findModernTab(tabs, 'materials').cards || [];
  const trainerCards = findModernTab(tabs, 'trainer').cards || [];
  const steps = e.steps || [];
  return `
    <div class="modern-hero guided-hero">
      <div>
        ${modern.badge ? `<span class="tag">${escapeHtml(modern.badge)}</span>` : ''}
        <h3>${escapeHtml(e.heading || e.title)}</h3>
        ${modern.lead ? `<p>${escapeHtml(modern.lead)}</p>` : ''}
      </div>
      ${buildGuidedHeroMap(e)}
      <div class="modern-print-actions" aria-label="Opcje ćwiczenia">
        <button class="btn print-btn" type="button" data-modern-print="participant">Drukuj dla uczestnika</button>
        <button class="btn ghost" type="button" data-modern-print="trainer">Drukuj dla prowadzącego</button>
        <button class="btn screen-mode-btn" type="button" data-modern-screen>Tryb ekranowy</button>
      </div>
    </div>
    <div class="modern-tabs guided-tabs" role="tablist" aria-label="Widoki ćwiczenia">
      <button class="modern-tab active" type="button" data-modern-tab="guided-work" role="tab" aria-selected="true">Pulpit pracy</button>
      <button class="modern-tab" type="button" data-modern-tab="guided-materials" role="tab" aria-selected="false">Materiały źródłowe</button>
      <button class="modern-tab" type="button" data-modern-tab="guided-trainer" role="tab" aria-selected="false">Dla prowadzącego</button>
    </div>
    <div class="modern-views guided-views">
      <section class="modern-view active" data-modern-view="guided-work" role="tabpanel">
        <div class="guided-layout">
          <main class="guided-main">
            <section class="guided-task-card">
              <span class="tag">wasze zadanie</span>
              <h3>${escapeHtml(visual.taskTitle || 'Najpierw ustalcie sens pracy, potem uruchomcie narzędzie AI')}</h3>
              <p>${escapeHtml(visual.taskLead || 'Zbudujcie krótki proces pracy: od materiału wejściowego, przez decyzje i ograniczenia, do wyniku gotowego do sprawdzenia przez człowieka.')}</p>
              ${buildGuidedDeliverables(e)}
            </section>
            ${buildGuidedPanelIfAny(context, 'guided-context')}
            ${buildGuidedSourceTiles(e)}
            ${buildGuidedDecisionCards(e)}
            <section class="guided-process">
              <span class="tag">proces</span>
              <h3>Kolejność pracy</h3>
              <ol>
                ${steps.map(step => `<li><span>${escapeHtml(step)}</span></li>`).join('')}
              </ol>
            </section>
            ${[keep, avoid].some(hasGuidedCard) ? `
              <div class="guided-duo">
                ${buildGuidedPanelIfAny(keep)}
                ${buildGuidedPanelIfAny(avoid)}
              </div>
            ` : ''}
            ${buildGuidedPanelIfAny(weakPrompt, 'guided-wide')}
            ${buildGuidedPanelIfAny(checklist, 'guided-wide')}
          </main>
          <aside class="guided-sidebar">
            <section>
              <span class="tag">efekt</span>
              <h3>Co ma powstać?</h3>
              ${buildGuidedPromptPath(e)}
            </section>
            <section>
              <span class="tag">${escapeHtml(visual.sideKicker || 'materiały')}</span>
              <h3>${escapeHtml(visual.sideTitle || 'Na czym pracujecie?')}</h3>
              <p>${escapeHtml(visual.sideText || 'Pełne materiały są w zakładce „Materiały źródłowe”. W pulpicie zostawiamy tylko orientację i decyzje robocze.')}</p>
            </section>
            <section class="guided-sidebar-tools">
              ${buildToolsHtml(getExerciseTools(e), 'h3')}
            </section>
            ${hasGuidedCard(warning) ? `
              <section class="guided-sidebar-warning">
                <span class="tag">uważajcie</span>
                <h3>Największe ryzyko</h3>
                ${formatRichText(warning.body || '')}
              </section>
            ` : ''}
          </aside>
        </div>
      </section>
      <section class="modern-view" data-modern-view="guided-materials" role="tabpanel">
        <div class="source-layout">
          <div class="source-intro">
            <span class="tag">materiały do pracy</span>
            <h3>${escapeHtml(visual.materialsTitle || 'Pełne materiały do ćwiczenia')}</h3>
            <p>${escapeHtml(visual.materialsText || 'Ta zakładka przechowuje pełną kartę pracy, materiał wejściowy, przykłady i elementy kontrolne. Pulpit pracy celowo pokazuje tylko najważniejsze sygnały.')}</p>
          </div>
          ${buildGuidedSourceTiles(e)}
          <div class="source-stack">
            ${materialCards.slice(0, 3).map(buildGuidedSource).join('')}
          </div>
          <div class="guided-duo">
            ${materialCards.slice(3).map(card => buildGuidedPanel(card)).join('')}
          </div>
        </div>
      </section>
      <section class="modern-view" data-modern-view="guided-trainer" role="tabpanel">
        <div class="trainer-layout">
          <div class="source-intro">
            <span class="tag">scenariusz prowadzącego</span>
            <h3>${escapeHtml(visual.trainerTitle || 'Instrukcja metodyczna bez obciążania uczestnika')}</h3>
            <p>${escapeHtml(visual.trainerText || 'Ta część pomaga prowadzącemu wprowadzić ćwiczenie, obserwować pracę grup i omówić wynik bez dublowania całej karty uczestnika.')}</p>
          </div>
          ${trainerCards.map(buildGuidedTrainerCard).join('')}
        </div>
      </section>
    </div>
  `;
}

function buildModernExerciseHtml(e) {
  const modern = e.modern || {};
  if (modern.mode === 'guided') return buildGuidedExerciseHtml(e);
  const tabs = modern.tabs || [];
  return `
    <div class="modern-hero">
      <div>
        ${modern.badge ? `<span class="tag">${escapeHtml(modern.badge)}</span>` : ''}
        <h3>${escapeHtml(e.heading || e.title)}</h3>
        ${modern.lead ? `<p>${escapeHtml(modern.lead)}</p>` : ''}
      </div>
      <div class="modern-print-actions" aria-label="Opcje ćwiczenia">
        <button class="btn print-btn" type="button" data-modern-print="participant">Drukuj dla uczestnika</button>
        <button class="btn ghost" type="button" data-modern-print="trainer">Drukuj dla prowadzącego</button>
        <button class="btn screen-mode-btn" type="button" data-modern-screen>Tryb ekranowy</button>
      </div>
    </div>
    <div class="modern-tabs" role="tablist" aria-label="Widoki ćwiczenia">
      ${tabs.map((tab, index) => `
        <button class="modern-tab ${index === 0 ? 'active' : ''}" type="button" data-modern-tab="${escapeHtml(tab.id)}" role="tab" aria-selected="${index === 0 ? 'true' : 'false'}">
          ${escapeHtml(tab.label)}
        </button>
      `).join('')}
    </div>
    <div class="modern-views">
      ${tabs.map((tab, index) => `
        <section class="modern-view ${index === 0 ? 'active' : ''}" data-modern-view="${escapeHtml(tab.id)}" role="tabpanel">
          <div class="modern-card-grid">
            ${(tab.cards || []).map(buildModernCard).join('')}
          </div>
        </section>
      `).join('')}
    </div>
  `;
}

function activateModernTab(container, tabId) {
  container.querySelectorAll('[data-modern-tab]').forEach(button => {
    const active = button.dataset.modernTab === tabId;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  container.querySelectorAll('[data-modern-view]').forEach(view => {
    view.classList.toggle('active', view.dataset.modernView === tabId);
  });
}

function renderModernExercise(e) {
  const container = ensureModernExerciseContainer();
  const modal = getExerciseModal();
  container.innerHTML = buildModernExerciseHtml(e);
  container.hidden = false;
  modal?.classList.add('modal-modern');
  container.onclick = event => {
    const tabButton = event.target.closest('[data-modern-tab]');
    if (tabButton) {
      activateModernTab(container, tabButton.dataset.modernTab);
      return;
    }
    const printButton = event.target.closest('[data-modern-print]');
    if (printButton) {
      printCurrentExercise(printButton.dataset.modernPrint);
      return;
    }
    if (event.target.closest('[data-modern-screen]')) openScreenExercise();
  };
}

function getParticipantHeading(e) {
  return e?.participantHeading || e?.heading || 'Zadanie';
}

function getParticipantTask(e) {
  return e?.participantTask || e?.task || '';
}

function getScreenHeading(e) {
  return e?.screenHeading || getParticipantHeading(e);
}

function getScreenTask(e) {
  return e?.screenTask || getParticipantTask(e);
}

function getPrintTask(e) {
  return e?.printTask || e?.screenTask || getParticipantTask(e);
}

function renderScreenExercise(e) {
  document.getElementById('screenTitle').textContent = e.title;
  document.getElementById('screenIntro').textContent = e.intro || '';
  document.getElementById('screenHeading').textContent = getScreenHeading(e);
  setRichText('screenTask', getScreenTask(e));
  setExerciseTools('screenTools', e);
  setRichText('screenHint', e.hint);
  setRichText('screenSample', e.sample);
  setRichText('screenCheck', e.check);
  ['screenHint','screenSample','screenCheck'].forEach(id => document.getElementById(id).classList.remove('active'));
}

function getExerciseList(type) {
  const list = EXERCISES[type] || EXERCISES.prompt;
  return Array.isArray(list) ? list : [];
}
function canRandomizeExercise(type = currentExerciseType) {
  return getExerciseList(type).length > 1;
}
function updateRandomButton() {
  const button = document.querySelector('[data-action="random-exercise"]');
  if (button) button.hidden = !canRandomizeExercise();
}
function pickExercise(type) {
  const list = getExerciseList(type);
  return list[Math.floor(Math.random() * list.length)];
}
function pickDefaultExercise(type) {
  const list = getExerciseList(type);
  return list[0];
}
function renderExercise(e) {
  currentExercise = e;
  const steps = e.steps || [
    'Przeczytajcie zadanie i zaznaczcie, czego brakuje w pierwszej wersji.',
    'Przygotujcie własną wersję w parach lub małych grupach.',
    'Sprawdźcie wynik z kryteriami i poprawcie najważniejsze słabe miejsce.',
    'Porównajcie z przykładem i wybierzcie jedną zasadę do zapamiętania.'
  ];
  document.getElementById('exTitle').textContent = e.title;
  document.getElementById('exIntro').textContent = e.intro || '';
  document.getElementById('exTime').textContent = e.time || '10-15 min';
  document.getElementById('exForm').textContent = e.form || 'praca w parach lub grupach';
  if (e.layout === 'workshop-v2' && e.modern) {
    renderModernExercise(e);
  } else {
    hideModernExercise();
  }
  document.getElementById('exHeading').textContent = getParticipantHeading(e);
  setRichText('exTask', getParticipantTask(e));
  setExerciseTools('exTools', e);
  setTrainingGuide(e.guide);
  setRichText('exHint', e.hint);
  setRichText('exCheck', e.check);
  setRichText('exSample', e.sample);
  document.getElementById('exResult').textContent = e.result;
  setRichText('exDiscuss', e.discuss || 'Porównajcie wynik pracy z przykładem i wskażcie, co można poprawić.');
  document.getElementById('exSteps').replaceChildren(...steps.map(step => {
    const item = document.createElement('div');
    item.textContent = step;
    return item;
  }));
  ['exHint','exCheck','exSample','exDiscuss'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById('exWork').value = '';
  updateRandomButton();
  if (document.getElementById('exerciseScreen').classList.contains('active')) renderScreenExercise(e);
}
function openExercise(type) {
  currentExerciseType = type;
  renderExercise(pickDefaultExercise(type));
  document.getElementById('exerciseOverlay').classList.add('active');
}
function randomizeCurrentExercise() {
  if (!canRandomizeExercise()) return;
  renderExercise(pickExercise(currentExerciseType));
}
function closeExercise() {
  document.getElementById('exerciseOverlay').classList.remove('active');
}
function openScreenExercise() {
  if (!currentExercise) return;
  renderScreenExercise(currentExercise);
  document.getElementById('exerciseScreen').classList.add('active');
}
function closeScreenExercise() {
  document.getElementById('exerciseScreen').classList.remove('active');
}
function toggle(id) {
  document.getElementById(id).classList.toggle('active');
}
function buildCustomPrintableExercise(e, content, kicker) {
  return `
    <div class="print-header">
      <p class="print-kicker">${escapeHtml(kicker)}</p>
      <h1>${escapeHtml(e.title)}</h1>
      ${e.intro ? `<p>${escapeHtml(e.intro)}</p>` : ''}
    </div>
    <div class="print-meta">
      <div><strong>Czas:</strong> ${escapeHtml(e.time || '10-15 min')}</div>
      <div><strong>Forma:</strong> ${escapeHtml(e.form || 'praca w parach lub grupach')}</div>
      <div><strong>Efekt:</strong> ${escapeHtml(e.result || 'wynik do omówienia')}</div>
    </div>
    <div class="print-body">${formatRichText(content)}</div>
  `;
}

function buildPrintableExercise(e, audience = 'participant') {
  if (audience === 'trainer' && e.printTrainer) {
    return buildCustomPrintableExercise(e, e.printTrainer, 'Scenariusz dla prowadzącego');
  }
  if (e.printParticipant) {
    return buildCustomPrintableExercise(e, e.printParticipant, 'Karta pracy uczestnika');
  }
  const steps = e.steps || [
    'Przeczytajcie zadanie i zaznaczcie, czego brakuje w pierwszej wersji.',
    'Przygotujcie własną wersję w parach lub małych grupach.',
    'Sprawdźcie wynik z kryteriami i poprawcie najważniejsze słabe miejsce.',
    'Porównajcie z przykładem i wybierzcie jedną zasadę do zapamiętania.'
  ];
  return `
    <div class="print-header">
      <p class="print-kicker">Ćwiczenie dla uczestników</p>
      <h1>${escapeHtml(e.title)}</h1>
      ${e.intro ? `<p>${escapeHtml(e.intro)}</p>` : ''}
    </div>
    <div class="print-meta">
      <div><strong>Czas:</strong> ${escapeHtml(e.time || '10-15 min')}</div>
      <div><strong>Forma:</strong> ${escapeHtml(e.form || 'praca w parach lub grupach')}</div>
      <div><strong>Efekt:</strong> ${escapeHtml(e.result || 'wynik do omówienia')}</div>
    </div>
    <div class="print-tools">${buildToolsHtml(getExerciseTools(e), 'h2')}</div>
    <h2>${escapeHtml(getParticipantHeading(e))}</h2>
    <div class="print-task">${formatRichText(getPrintTask(e))}</div>
    <h2>Jak wykonać zadanie?</h2>
    <ol>${steps.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
  `;
}
function printCurrentExercise(audience = 'participant') {
  if (!currentExercise) return;
  const printArea = document.getElementById('printExercise');
  if (!printArea) return;
  const safeAudience = typeof audience === 'string' ? audience : 'participant';
  printArea.innerHTML = buildPrintableExercise(currentExercise, safeAudience);
  window.print();
}
function qrGenerate() {
  const v = document.getElementById('qrInput').value.trim();
  if (!v) { alert('Wklej link.'); return; }
  try { new URL(v); } catch(e) { alert('Wklej poprawny link zaczynający się od https:// albo http://'); return; }
  const src = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=' + encodeURIComponent(v);
  renderQrImage('qrBox', src);
  document.getElementById('qrText').textContent = v;
}
function qrClear() {
  document.getElementById('qrInput').value = '';
  document.getElementById('qrBox').textContent = 'Tutaj pojawi się kod QR';
  document.getElementById('qrText').textContent = '';
}
function qrBig() {
  const v = document.getElementById('qrInput').value.trim();
  if (!v) { alert('Najpierw wklej link i wygeneruj QR.'); return; }
  try { new URL(v); } catch(e) { alert('Wklej poprawny link zaczynający się od https:// albo http://'); return; }
  const src = 'https://api.qrserver.com/v1/create-qr-code/?size=900x900&data=' + encodeURIComponent(v);
  renderQrImage('qrFullImg', src);
  document.getElementById('qrFullText').textContent = v;
  document.getElementById('qrFull').classList.add('active');
}
function closeQrBig() {
  document.getElementById('qrFull').classList.remove('active');
}
function timerBig() {
  document.getElementById('timerFull').classList.add('active');
  setTimerState(timerStatusText);
}
function closeTimerBig() {
  document.getElementById('timerFull').classList.remove('active');
}
function openAgenda() {
  document.getElementById('agendaFull')?.classList.add('active');
}
function closeAgenda() {
  document.getElementById('agendaFull')?.classList.remove('active');
}
function renderQrImage(containerId, src) {
  const img = document.createElement('img');
  const container = document.getElementById(containerId);
  img.src = src;
  img.alt = 'QR';
  container.replaceChildren(img);
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
  const statusBoxes = ['timerStatus', 'timerFullStatus'].map(id => document.getElementById(id)).filter(Boolean);
  const progressBars = ['timerProgress', 'timerFullProgress'].map(id => document.getElementById(id)).filter(Boolean);
  const timerCards = ['timerCard', 'timerFull'].map(id => document.getElementById(id)).filter(Boolean);
  if (!displays.length || !statusBoxes.length || !progressBars.length) return;
  const progressValue = timerDuration ? Math.max(0, Math.min(100, (timerRemaining / timerDuration) * 100)) : 0;
  displays.forEach(display => { display.textContent = formatTimer(timerRemaining); });
  statusBoxes.forEach(statusBox => { statusBox.textContent = status; });
  progressBars.forEach(progress => { progress.style.width = `${progressValue}%`; });
  timerCards.forEach(card => { card.classList.toggle('done', timerRemaining <= 0); });
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
function compareVersions(remoteVersion, currentVersion) {
  const remote = String(remoteVersion || '').match(/\d+/g)?.map(Number) || [];
  const current = String(currentVersion || '').match(/\d+/g)?.map(Number) || [];
  const length = Math.max(remote.length, current.length);
  for (let i = 0; i < length; i += 1) {
    const remotePart = remote[i] || 0;
    const currentPart = current[i] || 0;
    if (remotePart > currentPart) return 1;
    if (remotePart < currentPart) return -1;
  }
  return 0;
}
function setVersionStatus(message) {
  const status = document.getElementById('versionStatus');
  if (status) status.textContent = message;
}
async function clearLocalAppCache() {
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(registration => registration.unregister()));
  }
  if ('caches' in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
  }
}
function reloadWithoutCache() {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set('check', Date.now().toString());
  window.location.replace(nextUrl.toString());
}
async function checkForNewVersion() {
  const button = document.querySelector('[data-action="check-version"]');
  if (button) button.disabled = true;
  setVersionStatus('Sprawdzam wersję...');
  try {
    const response = await fetch(`version.json?check=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Nie udało się pobrać pliku wersji.');
    const data = await response.json();
    const remoteVersion = data.version || '';
    if (compareVersions(remoteVersion, APP_VERSION) > 0) {
      setVersionStatus('Jest nowsza wersja. Czyszczę pamięć i odświeżam...');
      await clearLocalAppCache();
      reloadWithoutCache();
      return;
    }
    setVersionStatus('Masz aktualną wersję.');
  } catch (error) {
    setVersionStatus('Nie udało się sprawdzić. Spróbuj odświeżyć stronę ręcznie.');
  } finally {
    if (button) button.disabled = false;
  }
}
function bindTimer() {
  const input = document.getElementById('timerMinutes');
  if (!input) return;
  input.addEventListener('input', () => {
    if (!timerInterval && !timerHasStarted) timerReset();
  });
  input.addEventListener('change', () => {
    if (!timerInterval) timerReset();
  });
  document.querySelectorAll('[data-timer-preset]').forEach(button => {
    button.addEventListener('click', () => setTimerPreset(Number(button.dataset.timerPreset)));
  });
  timerReset();
}
function bindUiActions() {
  document.querySelectorAll('[data-exercise]').forEach(button => {
    button.addEventListener('click', () => openExercise(button.dataset.exercise));
  });
  document.querySelectorAll('[data-toggle]').forEach(button => {
    button.addEventListener('click', () => toggle(button.dataset.toggle));
  });
  document.querySelectorAll('[data-action]').forEach(button => {
    const action = button.dataset.action;
    if (action === 'close-exercise') button.addEventListener('click', closeExercise);
    if (action === 'screen-exercise') button.addEventListener('click', openScreenExercise);
    if (action === 'screen-close') button.addEventListener('click', closeScreenExercise);
    if (action === 'random-exercise') button.addEventListener('click', randomizeCurrentExercise);
    if (action === 'print-exercise') button.addEventListener('click', printCurrentExercise);
    if (action === 'qr-generate') button.addEventListener('click', qrGenerate);
    if (action === 'qr-big') button.addEventListener('click', qrBig);
    if (action === 'qr-clear') button.addEventListener('click', qrClear);
    if (action === 'qr-close') button.addEventListener('click', closeQrBig);
    if (action === 'timer-start') button.addEventListener('click', timerStart);
    if (action === 'timer-pause') button.addEventListener('click', timerPause);
    if (action === 'timer-reset') button.addEventListener('click', timerReset);
    if (action === 'timer-big') button.addEventListener('click', timerBig);
    if (action === 'timer-close') button.addEventListener('click', closeTimerBig);
    if (action === 'agenda-open') button.addEventListener('click', openAgenda);
    if (action === 'agenda-close') button.addEventListener('click', closeAgenda);
    if (action === 'check-version') button.addEventListener('click', checkForNewVersion);
  });
  document.getElementById('exerciseScreen')?.addEventListener('click', event => {
    if (event.target.closest('[data-action="screen-close"]')) closeScreenExercise();
  });
  bindTimer();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('exerciseScreen').classList.contains('active')) {
      closeScreenExercise();
      return;
    }
    if (document.getElementById('timerFull').classList.contains('active')) {
      closeTimerBig();
      return;
    }
    if (document.getElementById('agendaFull').classList.contains('active')) {
      closeAgenda();
      return;
    }
    if (document.getElementById('qrFull').classList.contains('active')) {
      closeQrBig();
      return;
    }
    closeExercise();
  }
});
document.addEventListener('DOMContentLoaded', bindUiActions);
