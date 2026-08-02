(function () {
  if (!window.EXERCISES) return;

  const VISUALS = {
    prompt: {
      flow: ['Słaby prompt', 'Mini-brief', 'Lepsza odpowiedź'],
      taskTitle: 'Zamień luźne polecenie w mini-brief dla AI',
      taskLead: 'Najpierw wyłapujecie ryzykowne słowa i brakujące informacje, potem budujecie prompt, który ogranicza zgadywanie.',
      deliverables: [['01', 'Diagnoza', 'co jest ryzykowne'], ['02', 'Lepszy prompt', 'gotowy do wklejenia'], ['03', '3 zmiany', 'co poprawia wynik'], ['04', 'Kontrola', 'co sprawdzi człowiek']],
      sourceTiles: [['M1', 'Sytuacja szkolenia', 'praktyczne AI dla WUP i PUP', 'blue'], ['M2', 'Braki danych', 'daty, miejsca i linku nie wolno dopisać', 'red'], ['M3', 'Styl', 'spokojny komunikat zamiast reklamy', 'green']],
      decisions: [['Odbiorca', 'pracownicy instytucji publicznych'], ['Cel', 'krótka informacja o szkoleniu'], ['Ton', 'spokojny i profesjonalny'], ['Granice', 'bez nieznanych danych i obietnic']],
      path: ['Znajdź braki', 'Ustal ograniczenia', 'Napisz prompt', 'Sprawdź odpowiedź'],
      context: 'Pracujecie nad informacją o praktycznym szkoleniu z AI. Zadanie polega na poprawieniu promptu, a nie na pisaniu gotowego komunikatu.',
      warning: 'Największe ryzyko to zostawienie AI z ogólnym poleceniem i pozwolenie jej na dopisanie stylu, danych oraz obietnic.',
      weakPrompt: '„Przygotuj atrakcyjny opis szkolenia z AI dla pracowników urzędu...”',
      keep: ['odbiorcę', 'praktyczny charakter szkolenia', 'spokojny ton', 'zakaz dopisywania brakujących danych'],
      avoid: ['języka reklamowego', 'obietnic wzrostu efektywności', 'wymyślonych dat i linków', 'hasła o automatyzacji wszystkiego'],
      checklist: ['Czy prompt mówi, dla kogo piszemy?', 'Czy określa styl?', 'Czy blokuje nieznane dane?', 'Czy wynik da się sprawdzić?']
    },
    text: {
      flow: ['Tekst ciężki', 'Prosty język', 'Komunikat'],
      taskTitle: 'Uprość tekst urzędowy bez utraty sensu',
      taskLead: 'Nie chodzi o upiększanie tekstu. Chodzi o komunikat, po którym odbiorca wie, co ma zrobić.',
      deliverables: [['01', 'Problemy tekstu', 'co utrudnia odbiór'], ['02', 'Prompt', 'granice redakcji'], ['03', 'Nowa wersja', 'prostszy komunikat'], ['04', 'Kontrola', 'czy sens został zachowany']],
      sourceTiles: [['T1', 'Tekst wyjściowy', 'formalny, długi i mało przyjazny', 'blue'], ['T2', 'Informacje obowiązkowe', 'braki, termin i adres e-mail', 'green'], ['T3', 'Zakazy', 'bez konsekwencji i danych spoza materiału', 'red']],
      decisions: [['Sens', 'nie usuwamy ważnych informacji'], ['Układ', 'lista braków zamiast długiego zdania'], ['Ton', 'uprzejmy i rzeczowy'], ['Granice', 'bez dopisywania procedur']],
      path: ['Zaznacz problemy', 'Ustal informacje obowiązkowe', 'Napisz prompt', 'Sprawdź wersję'],
      context: 'Pracujecie z wiadomością o brakach w dokumentacji. AI ma pomóc w redakcji, ale nie może zmienić znaczenia.',
      warning: 'Największe ryzyko to tekst, który brzmi ładniej, ale usuwa ważną informację albo dopisuje konsekwencję bez podstawy.',
      weakPrompt: '„Popraw ten tekst, żeby był prostszy i bardziej przyjazny...”',
      keep: ['cztery braki w dokumentacji', 'termin 7 dni', 'prośbę o sprawdzenie adresu e-mail', 'spokojny ton urzędu'],
      avoid: ['stwierdzania winy odbiorcy', 'dopisywania regulaminu', 'konsekwencji bez podstawy', 'zbyt swobodnego języka'],
      checklist: ['Czy wszystkie braki zostały?', 'Czy termin jest zachowany?', 'Czy e-mail opisano ostrożnie?', 'Czy tekst jest prostszy?']
    },
    email: {
      flow: ['Emocje', 'Weryfikacja', 'Odpowiedź'],
      taskTitle: 'Odpowiedz spokojnie, ale bez przyznawania winy',
      taskLead: 'Najpierw oddzielacie emocjonalne twierdzenia od faktów do sprawdzenia, dopiero potem piszecie odpowiedź.',
      deliverables: [['01', 'Fakty i emocje', 'dwie oddzielne listy'], ['02', 'Prompt', 'bez ryzykownych obietnic'], ['03', 'Odpowiedź', 'krótka i spokojna'], ['04', 'Kontrola', 'czy niczego nie obiecuje']],
      sourceTiles: [['E1', 'Mail nadawcy', 'emocjonalny opis sprawy', 'amber'], ['E2', 'Braki danych', 'nie da się zidentyfikować sprawy', 'red'], ['E3', 'Bezpieczny ton', 'zrozumienie bez przyznania winy', 'green']],
      decisions: [['Empatia', 'traktujemy wiadomość poważnie'], ['Fakty', 'sprawa nie jest zweryfikowana'], ['Prośba', 'potrzebne dane identyfikacyjne'], ['Zakaz', 'bez obietnic i winy']],
      path: ['Oddziel emocje', 'Wypisz braki danych', 'Napisz prompt', 'Sprawdź obietnice'],
      context: 'Pracujecie z trudnym mailem od osoby niezadowolonej z obsługi sprawy. Odpowiedź ma obniżyć napięcie, ale nie może rozstrzygać sprawy.',
      warning: 'Największe ryzyko to uprzejma odpowiedź, która przyznaje błąd albo obiecuje dodatkowy termin bez weryfikacji.',
      weakPrompt: '„Przeproś za błąd, napisz, że sprawa zostanie ponownie rozpatrzona...”',
      keep: ['podziękowanie za wiadomość', 'informację o potrzebie weryfikacji', 'prośbę o dane sprawy', 'spokojny ton'],
      avoid: ['przeprosin za niepotwierdzony błąd', 'dodatkowego terminu', 'ponownego rozpatrzenia', 'oskarżania nadawcy'],
      checklist: ['Czy odpowiedź nie przyznaje winy?', 'Czy prosi o dane?', 'Czy nie obiecuje rozstrzygnięcia?', 'Czy ton nie jest chłodny?']
    },
    meeting: {
      flow: ['Chaos', 'Ustalenia', 'Tabela zadań'],
      taskTitle: 'Uporządkuj notatkę bez tworzenia pozornych ustaleń',
      taskLead: 'AI może zrobić elegancką tabelę, ale ma oznaczać braki jako do ustalenia, a nie je wymyślać.',
      deliverables: [['01', 'Decyzje', 'tylko potwierdzone'], ['02', 'Propozycje', 'oddzielone od decyzji'], ['03', 'Tabela', 'zadania, osoby, terminy'], ['04', 'Braki', 'do doprecyzowania']],
      sourceTiles: [['N1', 'Notatka', 'chaotyczne zapiski ze spotkania', 'blue'], ['N2', 'Niejasności', 'brak osób i terminów', 'red'], ['N3', 'Wynik', 'robocza tabela dla zespołu', 'green']],
      decisions: [['Decyzja', 'tylko gdy wynika z notatki'], ['Propozycja', 'nie udajemy ustalenia'], ['Właściciel', 'nie dopisujemy z domysłu'], ['Termin', 'nie zamieniamy ogólnika w datę']],
      path: ['Oznacz typy informacji', 'Wyciągnij zadania', 'Wpisz braki', 'Sprawdź tabelę'],
      context: 'Pracujecie z notatką ze spotkania organizacyjnego. Część informacji jest pewna, część tylko zasugerowana.',
      warning: 'Największe ryzyko to tabela, która wygląda profesjonalnie, ale zawiera osoby, terminy albo decyzje, których nie było na spotkaniu.',
      weakPrompt: '„Dopisz brakujące osoby i terminy, żeby tabela była kompletna...”',
      keep: ['różnicę między decyzją a propozycją', 'zadania warunkowe', 'braki informacyjne', 'ryzyka organizacyjne'],
      avoid: ['dopisywania właścicieli', 'wymyślania dat', 'zamykania propozycji jako decyzji', 'fałszywej pewności'],
      checklist: ['Czy AI nie dopisała osób?', 'Czy propozycje są oddzielone?', 'Czy braki są oznaczone?', 'Czy wynik jest roboczy?']
    },
    'recruitment-info': {
      flow: ['Dane projektu', 'Granice', 'Komunikat'],
      taskTitle: 'Napisz informację o naborze bez języka reklamy',
      taskLead: 'Celem jest spokojny komunikat publiczny: co wiadomo, czego jeszcze nie wiadomo i gdzie odbiorca ma szukać szczegółów.',
      deliverables: [['01', 'Prompt', 'do komunikatu'], ['02', 'Tekst', 'wersja informacyjna'], ['03', '3 zmiany', 'co zabezpieczono'], ['04', 'Kontrola', 'przed publikacją']],
      sourceTiles: [['R1', 'Projekt', 'wsparcie kompetencji osób dorosłych', 'blue'], ['R2', 'Nieznane dane', 'terminy, linki i liczba miejsc', 'red'], ['R3', 'Styl', 'informacja zamiast promocji', 'green']],
      decisions: [['Odbiorca', 'osoby dorosłe i partnerzy lokalni'], ['Cel', 'zapowiedź naboru'], ['Ton', 'spokojny i publiczny'], ['Zakaz', 'bez gwarancji pracy i presji']],
      path: ['Oddziel fakty', 'Zablokuj obietnice', 'Napisz prompt', 'Sprawdź komunikat'],
      context: 'Pracujecie nad komunikatem o planowanym naborze do projektu. Część informacji jest znana, ale szczegóły nie są jeszcze zatwierdzone.',
      warning: 'Największe ryzyko to tekst atrakcyjny marketingowo, ale niezgodny z faktami albo zbyt obiecujący.',
      weakPrompt: '„Napisz atrakcyjny tekst promujący nabór...”',
      keep: ['informację o projekcie', 'ogólną grupę odbiorców', 'ostrożne sformułowania', 'zachętę do śledzenia informacji'],
      avoid: ['ograniczonej liczby miejsc bez danych', 'gwarancji pracy', 'najlepszych szkoleń', 'presji typu ostatnia szansa'],
      checklist: ['Czy komunikat nie obiecuje efektów?', 'Czy nie dopisuje terminów?', 'Czy nie brzmi jak reklama?', 'Czy odbiorca wie, co dalej?']
    },
    'evaluation-survey': {
      flow: ['Cel badania', 'Pytania', 'Wnioski'],
      taskTitle: 'Zaprojektuj ankietę, która daje dane do działania',
      taskLead: 'Nie chodzi o pytania dla samej oceny. Ankieta ma pomóc poprawić szkolenie i zrozumieć potrzeby uczestników.',
      deliverables: [['01', 'Cel ankiety', 'co chcemy wiedzieć'], ['02', 'Pytania', 'krótkie i neutralne'], ['03', 'Skale', 'łatwe do analizy'], ['04', 'Kontrola', 'czy ankieta nie męczy']],
      sourceTiles: [['A1', 'Zakres szkolenia', 'co uczestnicy oceniali', 'blue'], ['A2', 'Ryzyko', 'pytania sugerujące lub zbyt ogólne', 'red'], ['A3', 'Wynik', 'ankieta 3-5 minut', 'green']],
      decisions: [['Długość', 'krótka ankieta po szkoleniu'], ['Język', 'prosty i neutralny'], ['Analiza', 'odpowiedzi dają wnioski'], ['Prywatność', 'bez danych zbędnych']],
      path: ['Ustal cel', 'Wybierz obszary', 'Napisz pytania', 'Sprawdź ankietę'],
      context: 'Przygotowujecie ankietę ewaluacyjną po szkoleniu. Ma być krótka, konkretna i użyteczna dla organizatora.',
      warning: 'Największe ryzyko to ankieta pełna ogólnych pytań, z których nie wynika, co poprawić.',
      weakPrompt: '„Zrób ankietę oceniającą szkolenie...”',
      keep: ['cel ankiety', 'krótki czas wypełnienia', 'neutralne pytania', 'miejsce na komentarz'],
      avoid: ['pytań sugerujących odpowiedź', 'zbyt długiej ankiety', 'zbędnych danych osobowych', 'pytań bez zastosowania'],
      checklist: ['Czy pytania są jasne?', 'Czy wynik da się przeanalizować?', 'Czy ankieta jest krótka?', 'Czy nie zbiera zbędnych danych?']
    },
    'source-presentation': {
      flow: ['Źródła', 'Przekaz', 'Slajdy'],
      taskTitle: 'Najpierw ustalcie przekaz, dopiero potem projekt slajdów',
      taskLead: 'Nie tworzycie od razu prezentacji. Budujecie krótką ścieżkę od źródeł do gotowego promptu dla narzędzia wizualnego.',
      deliverables: [['01', 'Pytania do źródeł', 'NotebookLM lub analiza ręczna'], ['02', 'Główny przekaz', 'jedno zdanie, bez reklamy'], ['03', 'Konspekt', 'około 8 slajdów'], ['04', 'Prompt', 'Gamma albo Canva'], ['05', 'Kontrola', 'zgodność ze źródłami']],
      sourceTiles: [['Ź1', 'AI w pracy biurowej', 'co AI wspiera i dlaczego prompt ma znaczenie', 'blue'], ['Ź2', 'Bezpieczeństwo', 'czego nie wolno wklejać i kto odpowiada za wynik', 'red'], ['Ź3', 'Zastosowania', 'konkretne przykłady zadań i ograniczenia', 'green']],
      decisions: [['Odbiorca', 'pracownicy WUP i PUP, różny poziom doświadczenia'], ['Ton', 'spokojny, praktyczny, bez promocyjnych obietnic'], ['Granice', 'tylko informacje wynikające ze źródeł'], ['Format', 'slajdy krótkie, szczegóły w notatkach prowadzącego']],
      path: ['Wybierz fakty', 'Ułóż narrację', 'Daj prompt narzędziu']
    },
    'conference-form': {
      flow: ['Potrzebne dane', 'Formularz', 'Kod'],
      taskTitle: 'Zaprojektuj formularz, który zbiera tylko potrzebne informacje',
      taskLead: 'Najpierw ustalacie strukturę formularza i ograniczenia, dopiero potem prosicie AI o kod Google Apps Script.',
      deliverables: [['01', 'Struktura', 'pola i typy pytań'], ['02', 'Zakazy', 'czego nie zbieramy'], ['03', 'Prompt', 'do Apps Script'], ['04', 'Kontrola', 'czy formularz jest bezpieczny']],
      sourceTiles: [['F1', 'Konferencja', 'zgłoszenia uczestników', 'blue'], ['F2', 'Dane', 'tylko potrzebne organizacyjnie', 'green'], ['F3', 'Ryzyko', 'nadmiar danych i klauzule z domysłu', 'red']],
      decisions: [['Wymagane', 'tylko konieczne pola'], ['Opcjonalne', 'dane pomocnicze bez presji'], ['RODO', 'bez tworzenia pełnej klauzuli'], ['Kod', 'tworzy formularz, nie wysyła danych']],
      path: ['Wybierz pola', 'Ustal typy', 'Napisz prompt', 'Sprawdź kod'],
      context: 'Pracujecie nad formularzem zapisów na konferencję. Formularz ma być użyteczny, ale nie może zbierać danych bez potrzeby.',
      warning: 'Największe ryzyko to formularz, który wygląda kompletnie, ale zbiera zbyt dużo danych albo dopisuje treści prawne bez podstawy.',
      weakPrompt: '„Zrób formularz zapisów na konferencję i dodaj wszystkie potrzebne dane...”',
      keep: ['imię i nazwisko', 'instytucję', 'adres e-mail', 'zgodę lub potwierdzenie informacyjne przygotowane przez organizatora'],
      avoid: ['PESEL-u', 'danych medycznych', 'pełnej klauzuli zmyślonej przez AI', 'pól bez jasnego celu'],
      checklist: ['Czy każde pole ma cel?', 'Czy typ pytania jest dobry?', 'Czy kod nie dodaje pól?', 'Czy formularz ma komunikat po wysłaniu?']
    },
    'canva-poster': {
      flow: ['Informacje', 'Hierarchia', 'Plakat'],
      taskTitle: 'Zbuduj brief plakatu zanim otworzysz Canvę',
      taskLead: 'Plakat ma być czytelny w kilka sekund. Najpierw wybieracie treść i układ, a dopiero potem prompt do Canvy.',
      deliverables: [['01', 'Brief', 'format, odbiorca, styl'], ['02', 'Treść', 'krótki tekst na plakat'], ['03', 'Prompt', 'instrukcja dla Canvy'], ['04', 'Kontrola', 'czytelność i brak dopisków']],
      sourceTiles: [['P1', 'Wydarzenie', 'AI i narzędzia cyfrowe', 'blue'], ['P2', 'Braki', 'data, miejsce i QR do uzupełnienia', 'red'], ['P3', 'Styl', 'nowoczesny, spokojny, publiczny', 'green']],
      decisions: [['Hierarchia', 'tytuł i temat największe'], ['Tekst', 'krótki, bez programu w całości'], ['QR', 'widoczny i opisany'], ['Logotypy', 'miejsce, ale bez dominacji']],
      path: ['Wybierz treść', 'Ułóż hierarchię', 'Napisz prompt', 'Sprawdź plakat'],
      context: 'Przygotowujecie brief i prompt do plakatu informacyjnego. Plakat ma prowadzić do zapisów, ale nie może być przeładowany.',
      warning: 'Największe ryzyko to efektowny plakat, który zawiera niepotwierdzone dane albo wygląda jak reklama komercyjna.',
      weakPrompt: '„Zrób nowoczesny plakat na konferencję o AI...”',
      keep: ['tytuł wydarzenia', 'dla kogo', 'krótkie hasło', 'miejsce na QR i logotypy'],
      avoid: ['rewolucji AI', 'niepotwierdzonej daty', 'nadmiaru ikon', 'zbyt wielu punktów programu'],
      checklist: ['Czy plakat rozumie się w 5 sekund?', 'Czy QR ma miejsce?', 'Czy tekst nie jest za długi?', 'Czy styl pasuje do urzędu?']
    }
  };

  const DEFAULTS = {
    info: ['Komunikat', 'Odbiorca', 'Gotowy tekst'],
    test: ['Materiał', 'Pytania', 'Test'],
    verify: ['Odpowiedź AI', 'Kontrola', 'Poprawki'],
    own: ['Zadanie z pracy', 'Prompt', 'Użycie'],
    summary: ['Materiał', 'Synteza', 'Wnioski'],
    workshop: ['Cel', 'Aktywność', 'Omówienie'],
    visual: ['Tekst', 'Struktura', 'Schemat'],
    forms: ['Cel ankiety', 'Pytania', 'Formularz'],
    'code-tool': ['Problem', 'Kod', 'Test'],
    'code-debug': ['Błąd', 'Diagnoza', 'Poprawka'],
    'code-data': ['Tabela', 'Analiza', 'Raport'],
    'code-script': ['Proces', 'Skrypt', 'Bezpiecznik'],
    'file-doc': ['Cel dokumentu', 'Struktura', 'Plik'],
    'file-text': ['Instrukcja', 'Format', 'Plik TXT'],
    'file-sheet': ['Dane', 'Kolumny', 'Arkusz'],
    'file-slides': ['Narracja', 'Slajdy', 'Notatki']
  };

  function asList(items) {
    return (items || []).map(item => `- ${item}`).join('\n');
  }

  function asNumbered(items) {
    return (items || []).map((item, index) => `${index + 1}. ${item}`).join('\n');
  }

  function card(tone, kicker, title, body, wide = false) {
    return { tone, kicker, title, body, wide };
  }

  function defaultVisual(type, exercise) {
    const flow = DEFAULTS[type] || ['Materiał', 'Decyzje', 'Wynik'];
    return {
      flow,
      taskTitle: exercise.heading || 'Przejdźcie od materiału do wyniku pracy',
      taskLead: 'Najpierw ustalcie, co jest dane i czego nie wolno dopowiedzieć. Dopiero potem przygotujcie prompt, tekst, strukturę albo projekt.',
      deliverables: [['01', 'Prompt', 'instrukcja dla AI'], ['02', 'Wynik', exercise.result || 'materiał do omówienia'], ['03', 'Kontrola', 'co sprawdzi człowiek']],
      sourceTiles: [['M1', flow[0], 'materiał wejściowy do pracy', 'blue'], ['M2', flow[1], 'najważniejsze decyzje i ograniczenia', 'amber'], ['M3', flow[2], 'wynik gotowy do sprawdzenia', 'green']],
      decisions: [['Odbiorca', 'dla kogo powstaje wynik'], ['Cel', 'po co wykonujemy zadanie'], ['Format', 'jaki wynik ma powstać'], ['Granice', 'czego AI nie może dopisać']],
      path: ['Rozpoznaj materiał', 'Ustal ograniczenia', 'Przygotuj prompt', 'Sprawdź wynik'],
      context: exercise.intro || 'Ćwiczenie wymaga przejścia od opisu sytuacji do praktycznego wyniku pracy z AI.',
      warning: 'Największe ryzyko to zbyt ogólne polecenie, po którym AI zacznie dopowiadać brakujące informacje.',
      weakPrompt: 'Przeanalizujcie polecenie wyjściowe z karty pracy i wskażcie, czego w nim brakuje.',
      keep: ['cel zadania', 'odbiorcę', 'format wyniku', 'ważne ograniczenia'],
      avoid: ['dopisywania faktów', 'zbyt ogólnych instrukcji', 'przyjmowania wyniku bez kontroli'],
      checklist: ['Czy wynik odpowiada na zadanie?', 'Czy nie ma dopisanych faktów?', 'Czy format jest zgodny?', 'Czy człowiek wie, co sprawdzić?']
    };
  }

  function buildTabs(exercise, type, visual) {
    const steps = exercise.steps || [];
    const keep = visual.keep || [];
    const avoid = visual.avoid || [];
    const checklist = visual.checklist || [];
    return [
      {
        id: 'participant',
        label: 'Pulpit pracy',
        cards: [
          card('blue', 'kontekst', 'Kontekst pracy', visual.context || exercise.intro || ''),
          card('teal', 'efekt', 'Wasz wynik', asList((visual.deliverables || []).map(item => Array.isArray(item) ? `${item[1]} - ${item[2]}` : `${item.title} - ${item.text}`))),
          card('amber', 'uwaga', 'Nie zaczynajcie od końca', visual.warning || ''),
          card('red', 'ryzyko', 'Niedopracowany prompt do analizy', visual.weakPrompt || 'Zobaczcie przykład w karcie pracy.', true),
          card('blue', 'proces', 'Kroki pracy', asNumbered(steps), true),
          card('green', 'zachować', 'Co musi zostać zachowane?', asList(keep)),
          card('amber', 'nie dopisywać', 'Czego nie wolno dopisać?', asList(avoid)),
          card('teal', 'kontrola', 'Checklista wyniku', asList(checklist), true)
        ].filter(item => item.body)
      },
      {
        id: 'materials',
        label: 'Materiały źródłowe',
        cards: [
          card('neutral', 'skrót', 'Skrót materiału wejściowego', visual.materialBrief || exercise.screenTask || exercise.intro || '', true),
          card('red', 'analiza', 'Niedopracowany prompt lub przykład', visual.weakPrompt || 'Zobaczcie kartę pracy uczestnika.', true),
          card('neutral', 'pełna karta', 'Pełna karta pracy uczestnika', exercise.participantTask || exercise.printTask || exercise.task || '', true),
          card('teal', 'punkt odniesienia', 'Przykład albo kryteria', [exercise.sample, exercise.check].filter(Boolean).join('\n\n'), true)
        ].filter(item => item.body)
      },
      {
        id: 'trainer',
        label: 'Dla prowadzącego',
        cards: [
          card('violet', 'metodyka', 'Sens ćwiczenia', visual.trainerFocus || exercise.intro || ''),
          card('blue', 'prowadzenie', 'Jak prowadzić?', visual.trainerLead || 'Zacznij od pokazania mapy pracy. Dopiero potem przejdź z grupą do pełnej karty uczestnika.'),
          card('green', 'obserwuj', 'Na co patrzeć podczas pracy?', asList(visual.trainerWatch || ['czy grupa zaczyna od celu', 'czy pilnuje ograniczeń', 'czy wynik jest możliwy do sprawdzenia'])),
          card('teal', 'omówienie', 'Pytania na koniec', asList(visual.trainerQuestions || ['Co było najważniejszą decyzją?', 'Czego AI nie powinna dopisać?', 'Co trzeba sprawdzić przed użyciem wyniku?'])),
          card('amber', 'wydruk', 'Pełny scenariusz', 'Pełny opis metodyczny zostaje w wydruku dla prowadzącego. Na ekranie pokazujemy tylko najważniejsze wskazówki, żeby nie dublować długiej karty pracy.', true)
        ].filter(item => item.body)
      }
    ];
  }

  function enrichExercise(type, exercise) {
    const visual = VISUALS[type] || defaultVisual(type, exercise);
    exercise.layout = 'workshop-v2';
    exercise.printParticipant = exercise.printParticipant || exercise.printTask || exercise.participantTask || exercise.task;
    if (exercise.guide && !exercise.printTrainer) exercise.printTrainer = exercise.guide;
    const existing = exercise.modern || {};
    exercise.modern = {
      ...existing,
      mode: 'guided',
      badge: existing.badge || 'pulpit wizualny',
      lead: existing.lead || 'Wizualny układ ćwiczenia: najpierw mapa pracy i decyzje, potem pełne materiały oraz scenariusz prowadzącego.',
      visual: {
        ...visual,
        ...(existing.visual || {})
      },
      tabs: existing.tabs || buildTabs(exercise, type, visual)
    };
  }

  Object.keys(window.EXERCISES).forEach(type => {
    const list = window.EXERCISES[type];
    if (!Array.isArray(list)) return;
    list.forEach(exercise => enrichExercise(type, exercise));
  });
})();
