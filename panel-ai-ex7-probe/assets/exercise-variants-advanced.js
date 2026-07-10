(function(){
  if (!window.EXERCISES) return;

  function pushVariants(type, variants) {
    window.EXERCISES[type] = window.EXERCISES[type] || [];
    window.EXERCISES[type].push(...variants);
  }

  function codeToolVariant(item) {
    return {
      title: `Ćwiczenie: ${item.title}`,
      heading: item.heading,
      task: `Materiał do pracy:\n${item.material}\n\nDane wejściowe:\n${item.data}\n\nOczekiwane działanie:\n${item.expected}\n\nWarunki:\n- narzędzie ma działać jako jeden prosty plik HTML,\n- bez instalowania czegokolwiek,\n- bez logowania,\n- bez zewnętrznych bibliotek,\n- bez wysyłania danych gdziekolwiek,\n- dane są przykładowe i nie zawierają informacji wrażliwych.\n\nPrzebieg:\n1. Napiszcie prompt do ChatGPT albo Claude, który najpierw prosi AI o krótki plan działania, a dopiero potem o kod.\n2. Doprecyzujcie pola, reguły liczenia, komunikaty i ograniczenia bezpieczeństwa.\n3. Poproście AI o 5 testów ręcznych: jakie wartości wpisać i jaki wynik powinien się pojawić.\n4. Oceńcie, czy kod odpowiada zadaniu i czy da się go sprawdzić bez wiedzy programistycznej.\n\nEfekt pracy:\nPrompt do stworzenia mini narzędzia, lista testów oraz 2-3 poprawki, które warto dopisać do polecenia.`,
      hint: "Podpowiedzi:\n- Nie musicie rozumieć całego kodu. Macie umieć sprawdzić, czy narzędzie robi to, o co prosiliście.\n- Zacznijcie od reguł działania, nie od wyglądu.\n- Poproście o komentarze w kodzie przy najważniejszych miejscach.\n- Testy powinny obejmować przypadek prosty, graniczny i błędne dane.",
      check: "Kontrola jakości:\n1. Czy prompt opisuje użytkownika i cel narzędzia?\n2. Czy wiadomo, jakie pola mają być w formularzu?\n3. Czy reguły liczenia są jednoznaczne?\n4. Czy AI nie użyła zewnętrznych bibliotek ani usług?\n5. Czy testy pozwalają zauważyć błędny wynik?",
      sample: `Przykładowe polecenie do AI:\nPrzygotuj jeden prosty plik HTML z CSS i JavaScriptem. Narzędzie ma pomóc w zadaniu: ${item.prompt}. Najpierw pokaż krótki plan działania, potem kod w jednym bloku, a na końcu 5 testów ręcznych z oczekiwanym wynikiem. Nie używaj zewnętrznych bibliotek ani usług. Nie wysyłaj danych poza przeglądarkę.`,
      result: "prompt do stworzenia prostego narzędzia, kod do oceny i lista testów ręcznych",
      discuss: "Pytania do omówienia:\n- Co trzeba było doprecyzować, żeby AI nie zgadywała reguł?\n- Który test najlepiej sprawdza poprawność narzędzia?\n- Jak poprosić AI o poprawkę, jeśli wynik jest błędny?",
      intro: "Projektujecie małe narzędzie pomocnicze do pracy urzędowej. Celem nie jest programowanie samo w sobie, tylko umiejętność opisania działania, ograniczeń i testów.",
      time: item.time || "22-30 min",
      form: "pary lub małe grupy",
      steps: [
        "Ustalcie minimalne wymagania dla narzędzia.",
        "Napiszcie prompt, który prowadzi AI od planu do kodu.",
        "Poproście o testy ręczne i sprawdźcie, czy obejmują różne przypadki.",
        "Zapiszcie zasadę pracy z AI przy generowaniu prostych narzędzi."
      ]
    };
  }

  function debugVariant(item) {
    return {
      title: `Ćwiczenie: ${item.title}`,
      heading: item.heading,
      task: `Materiał do pracy:\n${item.material}\n\nKod do analizy:\n${item.code}\n\nOczekiwane działanie:\n${item.expected}\n\nPrzebieg:\n1. Przeczytajcie kod jak instrukcję działania. Co miał zrobić?\n2. Napiszcie prompt do ChatGPT albo Claude: poproście o znalezienie błędu, wyjaśnienie bez żargonu i minimalną poprawkę.\n3. Dodajcie warunek: AI ma wskazać, które linie są ryzykowne i dlaczego.\n4. Poproście o 3 testy ręczne z oczekiwanym wynikiem.\n\nEfekt pracy:\nPrompt do debugowania, poprawiona wersja kodu oraz krótka notatka „co było błędem i jak to sprawdzić”.`,
      hint: "Podpowiedzi:\n- Nie pytajcie tylko „napraw”. Poproście najpierw o opis działania kodu.\n- Minimalna poprawka jest lepsza niż przebudowa całego rozwiązania.\n- Wyjaśnienie ma być zrozumiałe dla osoby nietechnicznej.\n- Testy powinny sprawdzić także sytuację braku danych albo danych granicznych.",
      check: "Kontrola jakości:\n1. Czy AI wyjaśniła, co kod miał robić?\n2. Czy wskazała konkretny błąd, a nie tylko przepisała kod?\n3. Czy poprawka jest minimalna?\n4. Czy testy mają oczekiwane wyniki?\n5. Czy opis błędu da się zrozumieć bez znajomości JavaScriptu?",
      sample: "Przykładowe polecenie do AI:\nPrzeanalizuj poniższy kod jak recenzent. Najpierw napisz jednym akapitem, co kod miał robić. Potem wskaż błędy, wyjaśnij je prostym językiem i zaproponuj minimalną poprawkę bez przebudowy całego kodu. Na końcu podaj 3 testy ręczne z oczekiwanym wynikiem. Nie zakładaj, że odbiorca jest programistą.",
      result: "poprawiony kod, wyjaśnienie błędu i zestaw testów sprawdzających",
      discuss: "Pytania do omówienia:\n- Czy AI naprawiła tylko błąd, czy zmieniła zakres zadania?\n- Co w promptcie pomogło dostać zrozumiałe wyjaśnienie?\n- Jak używać AI do kontroli kodu bez bycia programistą?",
      intro: "Ćwiczycie rozmowę z AI o błędzie w krótkim kodzie. Ważniejsze od samej poprawki jest wyjaśnienie, testy i kontrola, czy kod nadal robi właściwą rzecz.",
      time: "20-25 min",
      form: "pary",
      steps: [
        "Ustalcie, jaki wynik kod powinien zwrócić.",
        "Napiszcie prompt do analizy błędu i minimalnej poprawki.",
        "Poproście o testy i oczekiwane wyniki.",
        "Zapiszcie, jak rozpoznaliście, że poprawka jest sensowna."
      ]
    };
  }

  function dataVariant(item) {
    return {
      title: `Ćwiczenie: ${item.title}`,
      heading: item.heading,
      task: `Materiał do pracy:\n${item.material}\n\nDane testowe:\n${item.data}\n\nWymagania:\n${item.requirements}\n\nPrzebieg:\n1. Napiszcie prompt do ChatGPT albo Claude, który prosi o raport dla człowieka oraz prosty kod JavaScript do powtórzenia analizy.\n2. Dodajcie warunek, że AI ma najpierw przepisać dane do tabeli kontrolnej, żeby łatwo zauważyć pomyłki.\n3. Poproście o ręczne sprawdzenie najważniejszych liczb.\n4. Oceńcie, czy wynik AI zgadza się z danymi, zanim uznacie raport za gotowy.\n\nEfekt pracy:\nPrompt do analizy danych, raport kontrolny i prosta procedura sprawdzania wyniku.`,
      hint: "Podpowiedzi:\n- Dane są małe celowo, żeby dało się ręcznie sprawdzić wynik.\n- Poproście AI o sposób liczenia, nie tylko o wynik.\n- Jeśli AI wygeneruje kod, poproście o komentarze przy najważniejszych liniach.\n- Przy prawdziwych danych najpierw trzeba usunąć dane osobowe i wrażliwe.",
      check: `Kontrola wyniku:\n${item.check}\n5. Czy kod albo opis działania da się powtórzyć na podobnej tabeli?`,
      sample: `Przykładowe polecenie do AI:\nNa podstawie poniższych danych przygotuj raport kontrolny oraz prosty kod JavaScript, który można wykorzystać ponownie dla podobnej tabeli. Najpierw przepisz dane do czytelnej tabeli, potem wykonaj analizę: ${item.analysis}. Nie zmieniaj danych źródłowych. Na końcu pokaż ręczne sprawdzenie wyniku krok po kroku.`,
      result: "raport z danych, prosty kod pomocniczy i lista kontroli wyniku",
      discuss: "Pytania do omówienia:\n- Co było ważniejsze: kod czy sposób sprawdzenia wyniku?\n- Gdzie AI mogłaby pomylić się przy większej tabeli?\n- Jak zmienić prompt, gdy dane mają inne kolumny?",
      intro: "Ćwiczenie pokazuje, jak użyć AI do porządkowania małych danych urzędowych i jednocześnie nie oddać jej pełnej kontroli nad wynikiem.",
      time: "24-30 min",
      form: "małe grupy",
      steps: [
        "Przeczytajcie dane i ustalcie, co trzeba policzyć.",
        "Napiszcie prompt do raportu, kodu i kontroli wyniku.",
        "Sprawdźcie ręcznie najważniejsze liczby.",
        "Zapiszcie, jak zabezpieczyć podobne zadanie przy większych danych."
      ]
    };
  }

  function scriptVariant(item) {
    return {
      title: `Ćwiczenie: ${item.title}`,
      heading: item.heading,
      task: `Materiał do pracy:\n${item.material}\n\nDane wejściowe:\n${item.data}\n\nOczekiwane działanie:\n${item.expected}\n\nBezpiecznik:\n${item.safety}\n\nPrzebieg:\n1. Przygotujcie prompt do ChatGPT albo Claude, który opisuje arkusz, kolumny i ograniczenia.\n2. Poproście AI o kod Google Apps Script oraz instrukcję, gdzie go wkleić.\n3. Dodajcie wymóg testu na kopii arkusza i 3 przykładowych wierszach.\n4. Poproście AI o listę ryzyk: co sprawdzić przed uruchomieniem na prawdziwym arkuszu.\n\nEfekt pracy:\nPrompt do wygenerowania skryptu, bezpieczna lista ograniczeń oraz plan testu na przykładowych danych.`,
      hint: "Podpowiedzi:\n- W automatyzacji najważniejsze są ograniczenia: czego skrypt nie może zrobić.\n- Zacznijcie od działań odwracalnych, np. wpisania tekstu do kolumny roboczej.\n- Poproście o komentarze w kodzie i instrukcję cofnięcia zmian.\n- Uruchomienie skryptu jest opcjonalne. Najważniejszy jest bezpieczny projekt działania.",
      check: "Kontrola bezpieczeństwa:\n1. Czy prompt jasno zakazuje niebezpiecznych działań?\n2. Czy skrypt działa tylko na wskazanych kolumnach?\n3. Czy jest instrukcja testu na kopii danych?\n4. Czy AI podała listę ryzyk przed uruchomieniem?\n5. Czy człowiek zachowuje kontrolę nad wysyłką, usuwaniem lub zmianą danych?",
      sample: `Przykładowe polecenie do AI:\nNapisz kod Google Apps Script dla arkusza opisanego poniżej. Zadanie: ${item.prompt}. Nie wolno wysyłać maili, usuwać danych, zmieniać statusów ani pobierać informacji z zewnątrz, chyba że wyraźnie to opisano jako test na kopii danych. Dodaj komentarze w kodzie, instrukcję testu i listę ryzyk do sprawdzenia przed użyciem.`,
      result: "prompt do bezpiecznej automatyzacji, kod do oceny i lista ryzyk przed uruchomieniem",
      discuss: "Pytania do omówienia:\n- Jaki bezpiecznik jest tutaj najważniejszy?\n- Co mogłoby pójść źle przy prawdziwych danych?\n- Jak sprawdzić skrypt bez ryzyka dla arkusza roboczego?",
      intro: "Projektujecie automatyzację do arkusza w sposób kontrolowany. Celem nie jest szybkie „zrób skrypt”, tylko opisanie działania, zakazów i testu.",
      time: "25-35 min",
      form: "małe grupy lub demonstracja prowadzona",
      steps: [
        "Zdefiniujcie kolumny, działanie i zakazy dla skryptu.",
        "Napiszcie prompt do wygenerowania kodu i instrukcji testu.",
        "Sprawdźcie, czy kod nie wykonuje działań bez kontroli człowieka.",
        "Zapiszcie zasadę bezpieczeństwa przy automatyzacjach tworzonych z AI."
      ]
    };
  }

  function fileVariant(type, item) {
    const labels = {
      "file-doc": ["Dokument Google Docs", "Kontrola dokumentu", "szkic dokumentu Google Docs"],
      "file-text": ["Plik tekstowy z instrukcją", "Kontrola pliku", "treść pliku TXT/Markdown"],
      "file-sheet": ["Arkusz Excel lub Google Sheets", "Kontrola arkusza", "projekt arkusza Excel/Google Sheets"],
      "file-slides": ["Prezentacja w Google Slides", "Kontrola prezentacji", "szkielet prezentacji Google Slides"]
    }[type];
    return {
      title: `Ćwiczenie: ${labels[0]}`,
      heading: item.heading,
      task: `Materiał do pracy:\n${item.material}\n\nDane źródłowe:\n${item.data}\n\nFormat wyjściowy:\n${item.format}\n\nPlik wynikowy:\n${item.output}\n\nPrzebieg:\n1. Napiszcie prompt do ChatGPT albo Claude, który tworzy strukturę pliku i jego zawartość.\n2. Poproście o format łatwy do przeniesienia do docelowego narzędzia.\n3. Dodajcie ograniczenia: brak danych osobowych, brak dopowiadania faktów, oznaczanie luk.\n4. Sprawdźcie, czy wynik da się wykorzystać po krótkiej redakcji człowieka.\n\nEfekt pracy:\n${item.effect}`,
      hint: item.hint,
      check: `${labels[1]}:\n${item.check}`,
      sample: `Przykładowe polecenie do AI:\n${item.sample}`,
      result: labels[2],
      discuss: "Pytania do omówienia:\n- Czy plik pomaga wykonać realne zadanie urzędowe?\n- Które informacje AI mogłaby niebezpiecznie dopowiedzieć?\n- Jak człowiek powinien sprawdzić plik przed użyciem?",
      intro: item.intro,
      time: item.time,
      form: "pary lub małe grupy",
      steps: [
        "Ustalcie, do czego plik ma być użyty.",
        "Napiszcie prompt z formatem, ograniczeniami i odbiorcą.",
        "Sprawdźcie strukturę i brakujące informacje.",
        "Zapiszcie jedną zasadę tworzenia plików z pomocą AI."
      ]
    };
  }

  pushVariants("code-tool", [
    codeToolVariant({
      title: "Kalkulator terminu odpowiedzi",
      heading: "Zaprojektujcie mini kalkulator terminu sprawy",
      material: "Pracownik urzędu chce szybko sprawdzić orientacyjny termin odpowiedzi w prostej sprawie. Narzędzie ma działać edukacyjnie i pomocniczo, bez zastępowania procedur prawnych.",
      data: "- data wpływu sprawy,\n- liczba dni na odpowiedź,\n- liczba dni przerwy technicznej,\n- informacja, czy sprawa wymaga uzupełnienia dokumentów.",
      expected: "Po wpisaniu danych strona pokazuje orientacyjną datę końcową i komunikat, czy sprawa wymaga kontaktu z klientem.",
      prompt: "policzenie orientacyjnego terminu odpowiedzi na podstawie daty wpływu, liczby dni i przerwy technicznej",
      time: "24-30 min"
    }),
    codeToolVariant({
      title: "Kontrola kompletności dokumentów",
      heading: "Zaprojektujcie prostą checklistę kompletności",
      material: "Zespół obsługujący nabór potrzebuje prostego formularza, który pomaga sprawdzić, czy wniosek ma podstawowe załączniki. Narzędzie nie ocenia merytorycznie sprawy.",
      data: "- typ wniosku,\n- zaznaczenie: formularz główny, podpis, załącznik finansowy, oświadczenie, dane kontaktowe,\n- pole na krótką uwagę.",
      expected: "Po zaznaczeniu pól strona pokazuje: „kompletne do wstępnej kontroli” albo listę braków do uzupełnienia.",
      prompt: "sprawdzenie kompletności przykładowego wniosku na podstawie zaznaczonych pól checklisty",
      time: "22-28 min"
    }),
    codeToolVariant({
      title: "Licznik miejsc w naborze",
      heading: "Zaprojektujcie licznik wolnych miejsc",
      material: "W urzędzie trwa nabór na spotkanie informacyjne. Potrzebny jest prosty licznik, który pokazuje, ile miejsc zostało i czy można dopisać kolejne osoby.",
      data: "- limit miejsc,\n- liczba osób zapisanych,\n- liczba osób na liście rezerwowej,\n- liczba nowych zgłoszeń.",
      expected: "Narzędzie pokazuje liczbę wolnych miejsc, informację o nadwyżce i propozycję: przyjąć, dopisać na rezerwę albo zamknąć nabór.",
      prompt: "policzenie wolnych miejsc i nadwyżki zgłoszeń w naborze na spotkanie informacyjne",
      time: "20-26 min"
    }),
    codeToolVariant({
      title: "Generator pytań do klienta",
      heading: "Zaprojektujcie formularz pytań uzupełniających",
      material: "Pracownik przygotowuje rozmowę z klientem i chce mieć prostą listę pytań zależną od typu sprawy. Narzędzie ma pomagać uporządkować rozmowę, nie podejmować decyzji.",
      data: "- typ sprawy: rejestracja, szkolenie, staż, oferta pracy,\n- kanał kontaktu: telefon, mail, spotkanie,\n- poziom pilności,\n- pole „czego brakuje w dokumentach”.",
      expected: "Strona pokazuje krótką listę pytań do zadania klientowi oraz przypomnienie, żeby nie wpisywać danych wrażliwych do narzędzi AI.",
      prompt: "wygenerowanie listy pytań organizacyjnych zależnie od typu sprawy i kanału kontaktu",
      time: "24-30 min"
    })
  ]);

  pushVariants("code-debug", [
    debugVariant({
      title: "Błąd w liczeniu aktywnych spraw",
      heading: "Znajdźcie błąd w liczniku statusów",
      material: "Kod miał policzyć sprawy aktywne w krótkiej liście testowej. Wynik jest zawyżony.",
      code: "const sprawy = [\n  { id: 1, status: 'aktywna' },\n  { id: 2, status: 'zamknięta' },\n  { id: 3, status: 'aktywna' }\n];\n\nfunction policzAktywne(lista) {\n  let wynik = 0;\n  lista.forEach(sprawa => {\n    if (sprawa.status = 'aktywna') wynik++;\n  });\n  return wynik;\n}\n\nconsole.log(policzAktywne(sprawy));",
      expected: "Dla powyższych danych wynik powinien wynosić 2."
    }),
    debugVariant({
      title: "Błąd w filtrowaniu pilnych kontaktów",
      heading: "Sprawdźcie filtr kontaktów do wykonania",
      material: "Kod miał wypisać osoby, z którymi trzeba się skontaktować. W wyniku pojawia się za dużo pozycji.",
      code: "const kontakty = [\n  { imie: 'Anna', status: 'do kontaktu' },\n  { imie: 'Piotr', status: 'zamknięte' },\n  { imie: 'Ewa', status: 'do kontaktu' }\n];\n\nconst wynik = kontakty.filter(osoba => osoba.status.includes('do'));\nconsole.log(wynik.map(osoba => osoba.imie));",
      expected: "Wynik powinien zawierać tylko Annę i Ewę. AI ma sprawdzić, czy warunek filtrowania jest wystarczająco precyzyjny."
    }),
    debugVariant({
      title: "Błąd w średnim wyniku testu",
      heading: "Naprawcie liczenie średniej",
      material: "Kod miał policzyć średni wynik krótkiego testu, ale uwzględnia osoby, które testu nie rozwiązały.",
      code: "const wyniki = [8, 0, 7, null, 9];\n\nfunction srednia(lista) {\n  const suma = lista.reduce((a, b) => a + b, 0);\n  return suma / lista.length;\n}\n\nconsole.log(srednia(wyniki));",
      expected: "Średnia powinna być liczona tylko dla faktycznych wyników testu, bez null. Trzeba też ustalić, czy 0 oznacza brak testu, czy wynik 0."
    }),
    debugVariant({
      title: "Błąd w komunikacie o brakach",
      heading: "Znajdźcie problem w tekście komunikatu",
      material: "Kod tworzy komunikat o brakujących dokumentach. Przy pustej liście braków nadal pokazuje ostrzeżenie.",
      code: "function komunikat(braki) {\n  if (braki) {\n    return 'Brakuje: ' + braki.join(', ');\n  }\n  return 'Dokumenty kompletne.';\n}\n\nconsole.log(komunikat([]));",
      expected: "Dla pustej listy braków komunikat powinien brzmieć: „Dokumenty kompletne.”"
    })
  ]);

  pushVariants("code-data", [
    dataVariant({
      title: "Raport z ofert pracy",
      heading: "Uporządkujcie małą tabelę ofert pracy",
      material: "Macie testową listę ofert pracy. Trzeba sprawdzić liczbę ofert według branży, statusu i miejsca.",
      data: "id;branza;miejsce;status\n1;administracja;miasto;aktywna\n2;produkcja;powiat;aktywna\n3;usługi;miasto;zamknięta\n4;administracja;powiat;aktywna\n5;IT;zdalnie;aktywna\n6;usługi;miasto;aktywna",
      requirements: "- policz oferty według branży,\n- policz statusy,\n- wskaż oferty aktywne,\n- pokaż, jak ręcznie sprawdzić wynik.",
      analysis: "liczbę ofert według branży, statusy ofert i listę ofert aktywnych",
      check: "1. Czy administracja ma 2 oferty?\n2. Czy aktywnych ofert jest 5?\n3. Czy oferta zamknięta nie trafiła do listy aktywnych?\n4. Czy oferta zdalna nie została pominięta?"
    }),
    dataVariant({
      title: "Analiza uczestnictwa w spotkaniach",
      heading: "Przygotujcie raport frekwencji",
      material: "Macie przykładową listę obecności na spotkaniach informacyjnych. Dane są fikcyjne i służą wyłącznie do ćwiczenia.",
      data: "spotkanie;grupa;obecni;limit\nAI w pracy;A;14;16\nCV i rozmowa;B;9;12\nDotacje;A;16;16\nStaże;C;7;10\nPoradnictwo;B;12;12",
      requirements: "- policz wolne miejsca,\n- wskaż spotkania z pełną frekwencją,\n- policz średnie wykorzystanie miejsc,\n- przygotuj krótkie podsumowanie.",
      analysis: "wolne miejsca, pełne spotkania i średnie wykorzystanie limitu miejsc",
      check: "1. Czy spotkania „Dotacje” i „Poradnictwo” są pełne?\n2. Czy „AI w pracy” ma 2 wolne miejsca?\n3. Czy nie dzielimy przez 0?\n4. Czy podsumowanie nie dopowiada przyczyn frekwencji?"
    }),
    dataVariant({
      title: "Lista spraw do uzupełnienia",
      heading: "Wskażcie sprawy wymagające kontaktu",
      material: "Macie testową listę spraw z brakującymi elementami. Trzeba przygotować raport do kontaktu z klientami, bez używania prawdziwych danych.",
      data: "sprawa;typ;brak;pilnosc\nS-01;wniosek;podpis;wysoka\nS-02;staz;brak;niska\nS-03;dotacja;zalacznik;wysoka\nS-04;szkolenie;brak;niska\nS-05;wniosek;oswiadczenie;srednia",
      requirements: "- wypisz sprawy z brakami,\n- pogrupuj braki według typu,\n- wskaż sprawy o wysokiej pilności,\n- nie dopowiadaj nazwisk ani danych klientów.",
      analysis: "sprawy z brakami, braki według typu i pilne kontakty",
      check: "1. Czy sprawy S-02 i S-04 nie są na liście braków?\n2. Czy sprawy wysokiej pilności to S-01 i S-03?\n3. Czy typ „wniosek” pojawia się dwa razy?\n4. Czy raport nie tworzy danych osobowych?"
    }),
    dataVariant({
      title: "Podsumowanie konsultacji z pracodawcami",
      heading: "Zamieńcie dane w krótkie wnioski",
      material: "Macie przykładowe wyniki konsultacji z pracodawcami. Trzeba wyciągnąć wnioski bez udawania pełnego badania.",
      data: "firma;temat;zainteresowanie;uwaga\nA;staze;wysokie;potrzeba szybkiego kontaktu\nB;szkolenia;srednie;brak terminu\nC;oferty;wysokie;prosba o formularz\nD;staze;niskie;brak opiekuna\nE;szkolenia;wysokie;kontakt mailowy",
      requirements: "- policz zainteresowanie według tematu,\n- wskaż tematy z wysokim zainteresowaniem,\n- wypisz brakujące informacje,\n- przygotuj ostrożne wnioski.",
      analysis: "zainteresowanie według tematu, wysokie zainteresowanie i braki informacyjne",
      check: "1. Czy temat „staże” pojawia się dwa razy?\n2. Czy wysokie zainteresowanie mają A, C i E?\n3. Czy brak terminu i brak opiekuna są oznaczone jako braki?\n4. Czy wnioski nie są zbyt kategoryczne?"
    })
  ]);

  pushVariants("code-script", [
    scriptVariant({
      title: "Oznacz sprawy do kontaktu",
      heading: "Zaprojektujcie skrypt oznaczający braki",
      material: "W arkuszu znajduje się testowa lista spraw. Zespół chce automatycznie oznaczyć w kolumnie roboczej, które sprawy wymagają kontaktu.",
      data: "Kolumny: Numer sprawy, Typ sprawy, Brakujący element, Pilność, Komunikat roboczy.",
      expected: "Skrypt ma wpisać komunikat roboczy tylko tam, gdzie kolumna „Brakujący element” nie jest pusta.",
      safety: "Skrypt nie może wysyłać maili, usuwać wierszy, zmieniać numerów spraw ani zmieniać pilności.",
      prompt: "oznacz w kolumnie „Komunikat roboczy” sprawy, w których brakuje elementu"
    }),
    scriptVariant({
      title: "Przygotuj robocze przypomnienia",
      heading: "Zaprojektujcie skrypt do treści przypomnienia",
      material: "Arkusz zawiera testową listę osób zapisanych na konsultacje. Skrypt ma przygotować treść przypomnienia, ale niczego nie wysyłać.",
      data: "Kolumny: Imię, Email, Termin, Status, Komunikat roboczy.",
      expected: "Dla statusu „potwierdzony” skrypt wpisuje krótką treść przypomnienia do kolumny roboczej.",
      safety: "Skrypt nie może wysyłać wiadomości, zmieniać statusów ani dopisywać brakujących adresów e-mail.",
      prompt: "wpisz roboczą treść przypomnienia dla potwierdzonych konsultacji"
    }),
    scriptVariant({
      title: "Kontrola pustych pól",
      heading: "Zaprojektujcie skrypt do kontroli danych",
      material: "Zespół chce szybko sprawdzić, które wiersze w arkuszu mają puste pola wymagane do dalszej pracy.",
      data: "Kolumny: Numer sprawy, Typ, Email, Status, Uwagi kontrolne.",
      expected: "Skrypt ma wpisać w kolumnie „Uwagi kontrolne” listę pustych pól w danym wierszu.",
      safety: "Skrypt nie może usuwać danych, poprawiać adresów e-mail ani uzupełniać statusów na podstawie domysłów.",
      prompt: "wpisz w kolumnie kontrolnej listę pustych wymaganych pól dla każdego wiersza"
    }),
    scriptVariant({
      title: "Utwórz listę do ręcznego sprawdzenia",
      heading: "Zaprojektujcie skrypt kopiujący wiersze do zakładki kontrolnej",
      material: "W arkuszu jest wiele testowych wpisów. Pracownik chce mieć osobną zakładkę z wierszami, które wymagają ręcznej kontroli.",
      data: "Kolumny: ID, Status, Wynik kontroli, Uwagi, Do sprawdzenia.",
      expected: "Skrypt ma skopiować do nowej zakładki tylko wiersze, gdzie „Do sprawdzenia” ma wartość „tak”.",
      safety: "Skrypt nie może usuwać danych z arkusza źródłowego ani nadpisywać istniejących zakładek bez potwierdzenia.",
      prompt: "skopiuj wiersze oznaczone jako „do sprawdzenia” do osobnej zakładki kontrolnej"
    })
  ]);

  pushVariants("file-doc", [
    fileVariant("file-doc", {
      heading: "Przygotujcie notatkę służbową z ustaleń",
      material: "Po spotkaniu zespołu trzeba przygotować notatkę służbową do dalszej pracy. Notatka ma porządkować ustalenia, zadania i braki.",
      data: "Ustalono, że trzeba sprawdzić listę uczestników, przygotować komunikat na stronę, potwierdzić salę i zebrać pytania od doradców. Nie ustalono osoby odpowiedzialnej za formularz.",
      format: "- tytuł,\n- cel notatki,\n- tabela ustaleń,\n- zadania do wykonania,\n- braki do doprecyzowania,\n- decyzje do podjęcia.",
      output: "Dokument Google Docs gotowy do wklejenia i uzupełnienia przez zespół.",
      effect: "Szkic notatki służbowej z tabelą ustaleń i brakami do doprecyzowania.",
      hint: "Podpowiedzi:\n- Notatka ma być robocza, ale uporządkowana.\n- AI nie może przypisywać odpowiedzialności, jeśli nie wynika to z materiału.\n- Braki powinny być widoczne jako „do ustalenia”.",
      check: "1. Czy notatka oddziela ustalenia od zadań?\n2. Czy braki są widoczne?\n3. Czy AI nie dopisała osób odpowiedzialnych?\n4. Czy dokument nadaje się do wspólnej edycji?",
      sample: "Przygotuj notatkę służbową w układzie do Google Docs na podstawie poniższych ustaleń. Nie dopowiadaj osób ani terminów. Jeśli czegoś brakuje, wpisz „do ustalenia”. Dodaj tabelę z zadaniami i osobną sekcję decyzji do podjęcia.",
      intro: "Tworzycie dokument, który pomaga zespołowi przejść od chaotycznych ustaleń do dalszych działań.",
      time: "20-28 min"
    }),
    fileVariant("file-doc", {
      heading: "Przygotujcie kartę sprawy do omówienia",
      material: "Pracownik ma omówić sprawę na wewnętrznym spotkaniu. Potrzebuje neutralnej karty sprawy bez danych osobowych.",
      data: "Sprawa dotyczy niekompletnego wniosku. Brakuje jednego załącznika i doprecyzowania celu wsparcia. Klient kontaktował się telefonicznie, ale nie przesłał jeszcze uzupełnienia.",
      format: "- opis sprawy bez danych osobowych,\n- stan obecny,\n- brakujące informacje,\n- możliwe kolejne kroki,\n- pytania do zespołu.",
      output: "Dokument Google Docs do omówienia sprawy na naradzie.",
      effect: "Karta sprawy bez danych osobowych, gotowa do konsultacji w zespole.",
      hint: "Podpowiedzi:\n- Dokument nie może zawierać danych osobowych.\n- AI ma porządkować informacje, nie rozstrzygać sprawy.\n- Kolejne kroki powinny być opisane jako propozycje do omówienia.",
      check: "1. Czy usunięto dane identyfikujące?\n2. Czy sprawa jest opisana neutralnie?\n3. Czy braki są oddzielone od faktów?\n4. Czy dokument nie zawiera decyzji bez podstawy?",
      sample: "Przygotuj kartę sprawy do wewnętrznego omówienia. Użyj neutralnego języka, nie dodawaj danych osobowych, oddziel fakty od braków i pytań. Zwróć układ łatwy do wklejenia do Google Docs.",
      intro: "Ćwiczycie tworzenie dokumentu roboczego, który wspiera rozmowę zespołu bez ujawniania niepotrzebnych danych.",
      time: "22-30 min"
    }),
    fileVariant("file-doc", {
      heading: "Przygotujcie projekt procedury krok po kroku",
      material: "Zespół chce opisać prostą procedurę obsługi zgłoszenia na wydarzenie. Dokument ma być dla nowych pracowników.",
      data: "Zgłoszenie wpływa przez formularz. Pracownik sprawdza kompletność danych, wysyła potwierdzenie, wpisuje osobę na listę, a po wydarzeniu oznacza obecność i wynik ankiety.",
      format: "- cel procedury,\n- zakres,\n- kroki postępowania,\n- odpowiedzialności,\n- lista kontrolna,\n- typowe błędy.",
      output: "Dokument Google Docs jako szkic procedury wewnętrznej.",
      effect: "Szkic procedury z krokami, checklistą i typowymi błędami.",
      hint: "Podpowiedzi:\n- Procedura ma być praktyczna, nie prawnicza.\n- Każdy krok powinien zaczynać się od czynności.\n- Brakujące decyzje trzeba oznaczyć.",
      check: "1. Czy kroki są w logicznej kolejności?\n2. Czy wiadomo, kto wykonuje działanie?\n3. Czy checklista pomaga sprawdzić proces?\n4. Czy AI nie wymyśliła regulacji prawnych?",
      sample: "Przygotuj projekt prostej procedury wewnętrznej do Google Docs. Opisz cel, zakres, kroki, odpowiedzialności, checklistę i typowe błędy. Nie cytuj przepisów i nie wymyślaj zasad, których nie ma w materiale.",
      intro: "Uczestnicy tworzą dokument, który może pomóc w przekazywaniu wiedzy nowej osobie w zespole.",
      time: "25-35 min"
    }),
    fileVariant("file-doc", {
      heading: "Przygotujcie raport z krótkiej konsultacji",
      material: "Po krótkich konsultacjach z pracodawcami trzeba przygotować raport roboczy dla kierownika.",
      data: "Pracodawcy zgłaszali potrzebę szybszego kontaktu, prostszego formularza i krótkiej instrukcji składania ofert. Część osób pytała o możliwość spotkania online.",
      format: "- cel konsultacji,\n- najczęstsze potrzeby,\n- problemy zgłoszone przez pracodawców,\n- rekomendowane działania,\n- informacje wymagające potwierdzenia.",
      output: "Dokument Google Docs jako raport roboczy.",
      effect: "Krótki raport z konsultacji z wnioskami i brakami do potwierdzenia.",
      hint: "Podpowiedzi:\n- Raport ma być ostrożny: nie wolno udawać pełnego badania.\n- Wnioski powinny wynikać z materiału.\n- Braki i ograniczenia trzeba nazwać.",
      check: "1. Czy raport nie wyolbrzymia wyników?\n2. Czy wnioski wynikają z danych?\n3. Czy rekomendacje są praktyczne?\n4. Czy wskazano, czego jeszcze nie wiadomo?",
      sample: "Przygotuj krótki raport roboczy do Google Docs na podstawie notatek z konsultacji. Oddziel fakty, wnioski, rekomendacje i braki. Pisz ostrożnie, bez udawania pełnego badania.",
      intro: "Ćwiczenie pokazuje, jak AI może pomóc uporządkować materiał jakościowy bez dopowiadania wniosków ponad dane.",
      time: "24-32 min"
    })
  ]);

  pushVariants("file-text", [
    fileVariant("file-text", {
      heading: "Stwórzcie krótką instrukcję dla klienta",
      material: "Trzeba przygotować prosty plik tekstowy z instrukcją, jak przygotować się do wizyty w urzędzie.",
      data: "Klient powinien sprawdzić termin, przygotować dokument tożsamości, zabrać wymagane załączniki, przyjść kilka minut wcześniej i nie przesyłać danych wrażliwych mailem bez potrzeby.",
      format: "- tytuł,\n- 5 kroków przygotowania,\n- czego nie wysyłać mailem,\n- checklista przed wizytą,\n- krótka informacja końcowa.",
      output: "Plik TXT albo Markdown, który można wysłać mailem lub umieścić w folderze z materiałami.",
      effect: "Krótka instrukcja dla klienta, napisana prostym językiem.",
      hint: "Podpowiedzi:\n- Używajcie krótkich zdań.\n- Instrukcja nie może brzmieć jak regulamin.\n- Unikajcie danych prawnych, których nie ma w materiale.",
      check: "1. Czy każdy krok jest konkretny?\n2. Czy tekst jest zrozumiały bez pomocy urzędnika?\n3. Czy wskazano bezpieczeństwo danych?\n4. Czy plik mieści się na jednej stronie?",
      sample: "Przygotuj prosty plik README.md z instrukcją dla klienta przed wizytą w urzędzie. Użyj 5 kroków, checklisty i sekcji „czego nie wysyłać mailem”. Pisz jasno i krótko.",
      intro: "Tworzycie plik tekstowy, który ma pomóc klientowi przygotować się do kontaktu z urzędem.",
      time: "18-24 min"
    }),
    fileVariant("file-text", {
      heading: "Przygotujcie FAQ dla pracowników",
      material: "Zespół potrzebuje prostego pliku FAQ dotyczącego korzystania z AI w codziennej pracy biurowej.",
      data: "Najczęstsze pytania: czy można wkleić dane klienta, czy AI może napisać pismo, czy trzeba sprawdzać fakty, co zrobić z błędną odpowiedzią, jak zapisać dobry prompt.",
      format: "- tytuł,\n- 6 pytań i odpowiedzi,\n- zasada bezpieczeństwa,\n- mini szablon promptu,\n- przypomnienie o odpowiedzialności człowieka.",
      output: "Plik TXT/Markdown do folderu zespołu.",
      effect: "FAQ zespołowe o bezpiecznym korzystaniu z AI.",
      hint: "Podpowiedzi:\n- Odpowiedzi mają być krótkie i praktyczne.\n- Nie twórzcie regulaminu prawnego.\n- Każda odpowiedź powinna kończyć się konkretną zasadą.",
      check: "1. Czy FAQ odpowiada na realne pytania?\n2. Czy zakaz danych poufnych jest jasny?\n3. Czy odpowiedzialność człowieka jest podkreślona?\n4. Czy format nadaje się do pliku tekstowego?",
      sample: "Przygotuj krótkie FAQ w formacie Markdown dla pracowników urzędu korzystających z AI. Odpowiedz na 6 pytań, dodaj zasadę bezpieczeństwa i mini szablon promptu. Pisz praktycznie, bez tonu regulaminu.",
      intro: "Uczestnicy tworzą prosty plik, który może działać jako podręczna pomoc dla zespołu.",
      time: "20-26 min"
    }),
    fileVariant("file-text", {
      heading: "Napiszcie komunikat do folderu z materiałami",
      material: "W folderze projektowym ma pojawić się plik tekstowy wyjaśniający, co znajduje się w folderze i jak korzystać z materiałów.",
      data: "Folder zawiera prezentację, ćwiczenia, prompty, ankietę, test wiedzy i materiały dodatkowe. Część plików jest robocza i może być aktualizowana.",
      format: "- opis folderu,\n- lista plików,\n- instrukcja korzystania,\n- informacja o wersjach,\n- kontakt w sprawie braków.",
      output: "Plik README.md do folderu z materiałami.",
      effect: "Czytelny opis folderu i zasad korzystania z materiałów.",
      hint: "Podpowiedzi:\n- Taki plik powinien być krótki i organizacyjny.\n- Nie trzeba opisywać każdego pliku szczegółowo.\n- Warto dodać informację o aktualizacji wersji.",
      check: "1. Czy wiadomo, co jest w folderze?\n2. Czy instrukcja jest krótka?\n3. Czy opisuje wersje robocze?\n4. Czy odbiorca wie, do kogo zgłosić brak?",
      sample: "Przygotuj plik README.md do folderu z materiałami. Opisz zawartość folderu, sposób korzystania, informację o wersjach roboczych i kontakt w sprawie braków. Pisz krótko i organizacyjnie.",
      intro: "Ćwiczenie pokazuje, jak AI może pomóc tworzyć małe pliki porządkujące pracę zespołu.",
      time: "16-22 min"
    }),
    fileVariant("file-text", {
      heading: "Przygotujcie checklistę publikacji komunikatu",
      material: "Przed publikacją komunikatu na stronie urzędu zespół chce mieć prostą checklistę kontroli.",
      data: "Trzeba sprawdzić: odbiorcę, aktualność dat, linki, zgodność z faktami, prosty język, dane osobowe, ton komunikatu i osobę zatwierdzającą.",
      format: "- tytuł,\n- checklista przed publikacją,\n- sekcja „nie publikuj, jeśli...”,\n- miejsce na podpis osoby sprawdzającej.",
      output: "Plik TXT/Markdown jako podręczna checklista.",
      effect: "Krótka checklista kontroli komunikatu przed publikacją.",
      hint: "Podpowiedzi:\n- Checklista ma pomagać w decyzji, nie zastępować redakcji.\n- Punkty powinny być jednoznaczne.\n- Warto dodać czerwone flagi: kiedy nie publikować.",
      check: "1. Czy lista obejmuje fakty, linki i dane osobowe?\n2. Czy punkty są zrozumiałe?\n3. Czy jest sekcja blokująca publikację?\n4. Czy plik da się wydrukować lub wkleić do maila?",
      sample: "Przygotuj krótką checklistę Markdown do kontroli komunikatu przed publikacją na stronie urzędu. Dodaj sekcję „nie publikuj, jeśli...” i miejsce na osobę sprawdzającą. Pisz konkretnie.",
      intro: "Tworzycie plik, który pomaga zachować jakość i bezpieczeństwo komunikacji publicznej.",
      time: "18-24 min"
    })
  ]);

  pushVariants("file-sheet", [
    fileVariant("file-sheet", {
      heading: "Zaprojektujcie rejestr spraw do monitorowania",
      material: "Zespół chce mieć prosty arkusz do monitorowania spraw wymagających kontaktu lub uzupełnienia.",
      data: "Potrzebne pola: numer sprawy, typ, status, brakujący element, pilność, termin kontaktu, osoba odpowiedzialna, uwagi.",
      format: "- kolumny arkusza,\n- 8 przykładowych wierszy,\n- formuły do liczenia spraw pilnych i otwartych,\n- kontrola pustych pól,\n- filtr „do kontaktu”.",
      output: "Projekt arkusza Excel/Google Sheets z formułami i danymi testowymi.",
      effect: "Arkusz do monitorowania spraw bez używania prawdziwych danych.",
      hint: "Podpowiedzi:\n- Najpierw ustalcie decyzje, które arkusz ma wspierać.\n- Formuły muszą być opisane prostym językiem.\n- Dane testowe nie mogą zawierać danych osobowych.",
      check: "1. Czy arkusz wskazuje sprawy pilne?\n2. Czy liczy sprawy otwarte?\n3. Czy wyłapuje puste pola?\n4. Czy można go odtworzyć w Excelu lub Google Sheets?",
      sample: "Zaprojektuj arkusz do monitorowania spraw wymagających kontaktu. Podaj kolumny, 8 przykładowych wierszy, formuły do podsumowania i kontrolę jakości danych. Nie używaj danych osobowych.",
      intro: "Projektujecie arkusz, który pomaga zespołowi nie zgubić spraw wymagających działania.",
      time: "25-35 min"
    }),
    fileVariant("file-sheet", {
      heading: "Przygotujcie harmonogram dyżurów",
      material: "Urzędnicy planują dyżury informacyjne. Arkusz ma pomóc zauważyć braki obsady i zbyt duże obciążenie jednej osoby.",
      data: "Potrzebne pola: data, godzina, temat dyżuru, osoba prowadząca, sala lub kanał online, status, uwagi.",
      format: "- kolumny,\n- dane testowe,\n- formuła liczby dyżurów na osobę,\n- oznaczanie pustej osoby prowadzącej,\n- podsumowanie tygodniowe.",
      output: "Projekt arkusza do planowania dyżurów.",
      effect: "Arkusz harmonogramu z kontrolą braków i obciążenia.",
      hint: "Podpowiedzi:\n- Arkusz ma wspierać planowanie, nie rozstrzygać konfliktów.\n- Warto dodać status: planowany, potwierdzony, do zmiany.\n- Testujcie formuły na małych danych.",
      check: "1. Czy puste dyżury są widoczne?\n2. Czy można policzyć dyżury na osobę?\n3. Czy statusy są jednoznaczne?\n4. Czy arkusz nadaje się do wspólnej pracy?",
      sample: "Zaprojektuj arkusz harmonogramu dyżurów informacyjnych. Podaj kolumny, dane testowe, formuły liczące dyżury na osobę i kontrolę pustych pól. Wyjaśnij formuły prostym językiem.",
      intro: "Uczestnicy projektują arkusz do koordynacji pracy zespołu.",
      time: "24-32 min"
    }),
    fileVariant("file-sheet", {
      heading: "Przygotujcie arkusz ofert pracy",
      material: "Zespół potrzebuje prostego arkusza do porządkowania ofert pracy według branży, statusu i terminu aktualizacji.",
      data: "Pola: ID oferty, branża, miejsce, status, data aktualizacji, osoba odpowiedzialna, uwagi.",
      format: "- tabela danych,\n- 8 wierszy testowych,\n- liczba ofert aktywnych,\n- liczba ofert według branży,\n- wskazanie ofert do aktualizacji.",
      output: "Projekt arkusza do kontroli ofert pracy.",
      effect: "Arkusz ofert z podstawowym panelem podsumowania.",
      hint: "Podpowiedzi:\n- Nie używajcie danych konkretnych firm.\n- Skupcie się na statusach i aktualności.\n- Poproście o formuły oraz ich ręczne sprawdzenie.",
      check: "1. Czy arkusz liczy aktywne oferty?\n2. Czy grupuje po branży?\n3. Czy wskazuje oferty do aktualizacji?\n4. Czy dane testowe są fikcyjne?",
      sample: "Zaprojektuj arkusz do porządkowania ofert pracy. Podaj kolumny, przykładowe dane, formuły do liczenia aktywnych ofert i ofert według branży oraz mechanizm wskazania ofert do aktualizacji.",
      intro: "Ćwiczenie łączy porządkowanie danych z kontrolą aktualności informacji.",
      time: "24-32 min"
    }),
    fileVariant("file-sheet", {
      heading: "Zaprojektujcie arkusz ankiety potrzeb",
      material: "Po spotkaniu z klientami urząd chce zebrać potrzeby szkoleniowe w prostym arkuszu.",
      data: "Pola: grupa, temat potrzeby, liczba wskazań, priorytet, komentarz, decyzja.",
      format: "- kolumny,\n- dane przykładowe,\n- suma wskazań,\n- ranking tematów,\n- oznaczenie priorytetu wysokiego.",
      output: "Projekt arkusza do analizy potrzeb szkoleniowych.",
      effect: "Arkusz z rankingiem tematów i prostą kontrolą priorytetów.",
      hint: "Podpowiedzi:\n- Dane są zbiorcze, nie osobowe.\n- Ranking ma pomagać w rozmowie, nie zastępować decyzji.\n- Warto dodać kolumnę „decyzja do podjęcia”.",
      check: "1. Czy arkusz sumuje wskazania?\n2. Czy ranking jest czytelny?\n3. Czy priorytety są zdefiniowane?\n4. Czy wnioski nie udają pełnego badania?",
      sample: "Zaprojektuj arkusz do analizy potrzeb szkoleniowych na danych zbiorczych. Podaj kolumny, dane testowe, formuły sumujące wskazania, ranking tematów i kontrolę priorytetów.",
      intro: "Tworzycie arkusz, który pomaga przełożyć odpowiedzi ankietowe na rozmowę o priorytetach.",
      time: "25-35 min"
    })
  ]);

  pushVariants("file-slides", [
    fileVariant("file-slides", {
      heading: "Przygotujcie prezentację dla klientów PUP",
      material: "Potrzebna jest krótka prezentacja dla osób korzystających z usług urzędu pracy. Ma wyjaśnić, jak przygotować się do konsultacji.",
      data: "Tematy: cel konsultacji, dokumenty do przygotowania, zasady kontaktu, bezpieczeństwo danych, pytania, kolejny krok po spotkaniu.",
      format: "- 6 slajdów,\n- maksymalnie 4 punkty na slajd,\n- notatki prowadzącego,\n- prosta sugestia wizualna.",
      output: "Szkielet Google Slides do krótkiego wprowadzenia.",
      effect: "Prezentacja dla klientów urzędu z praktycznymi wskazówkami.",
      hint: "Podpowiedzi:\n- Slajdy mają być proste i spokojne.\n- Notatki prowadzącego mogą mieć więcej treści niż slajdy.\n- Ostatni slajd powinien prowadzić do działania.",
      check: "1. Czy prezentacja ma jasny cel?\n2. Czy slajdy nie są przeładowane?\n3. Czy jest kolejny krok dla odbiorcy?\n4. Czy język jest prosty?",
      sample: "Przygotuj szkielet 6-slajdowej prezentacji Google Slides dla klientów PUP o przygotowaniu do konsultacji. Dla każdego slajdu podaj tytuł, krótkie punkty, notatkę prowadzącego i sugestię wizualną.",
      intro: "Uczestnicy tworzą prezentację informacyjną dla odbiorców zewnętrznych.",
      time: "22-30 min"
    }),
    fileVariant("file-slides", {
      heading: "Przygotujcie prezentację dla pracodawców",
      material: "Urząd organizuje spotkanie z pracodawcami. Prezentacja ma krótko wyjaśnić, jak zgłaszać oferty i współpracować z urzędem.",
      data: "Tematy: korzyści współpracy, zgłoszenie oferty, kontakt z doradcą, aktualizacja danych, najczęstsze pytania, kolejny krok.",
      format: "- 7 slajdów,\n- punkty na slajdzie,\n- notatki prowadzącego,\n- propozycja prostego wykresu lub schematu.",
      output: "Szkielet prezentacji Google Slides dla spotkania z pracodawcami.",
      effect: "Prezentacja dla pracodawców z jasnym procesem współpracy.",
      hint: "Podpowiedzi:\n- Unikajcie tonu reklamowego.\n- Slajdy mają prowadzić przez proces.\n- Warto dodać slajd z pytaniami i odpowiedziami.",
      check: "1. Czy proces zgłoszenia oferty jest jasny?\n2. Czy prezentacja nie obiecuje zbyt wiele?\n3. Czy ostatni slajd ma konkretny kolejny krok?\n4. Czy notatki pomagają prowadzącemu?",
      sample: "Przygotuj szkielet prezentacji Google Slides dla pracodawców o współpracy z urzędem pracy. Pisz spokojnie i informacyjnie. Dla każdego slajdu podaj tytuł, krótkie punkty, notatkę prowadzącego i element wizualny.",
      intro: "Ćwiczenie pokazuje, jak AI może pomóc przygotować strukturę prezentacji dla odbiorców zewnętrznych.",
      time: "24-32 min"
    }),
    fileVariant("file-slides", {
      heading: "Przygotujcie prezentację onboardingową",
      material: "Nowa osoba w zespole ma poznać podstawowe zasady porządkowania spraw i komunikacji wewnętrznej.",
      data: "Tematy: obieg informacji, notatki ze spotkań, statusy spraw, bezpieczeństwo danych, kiedy pytać przełożonego, podstawowe narzędzia.",
      format: "- 6 slajdów,\n- krótkie punkty,\n- notatki prowadzącego,\n- mini ćwiczenie na końcu.",
      output: "Szkielet prezentacji onboardingowej do Google Slides.",
      effect: "Prezentacja dla nowego pracownika z mini ćwiczeniem.",
      hint: "Podpowiedzi:\n- Prezentacja ma uczyć działania, nie opisywać całego urzędu.\n- Każdy slajd powinien mieć praktyczny sens.\n- Dodajcie jedno krótkie ćwiczenie na końcu.",
      check: "1. Czy treść jest zrozumiała dla nowej osoby?\n2. Czy są przykłady działań?\n3. Czy nie ma nadmiaru tekstu?\n4. Czy mini ćwiczenie sprawdza zrozumienie?",
      sample: "Przygotuj szkielet 6-slajdowej prezentacji onboardingowej dla nowego pracownika. Temat: porządkowanie spraw i komunikacja wewnętrzna. Dodaj notatki prowadzącego i mini ćwiczenie na końcu.",
      intro: "Uczestnicy tworzą prezentację jako narzędzie wdrożeniowe dla zespołu.",
      time: "22-30 min"
    }),
    fileVariant("file-slides", {
      heading: "Przygotujcie prezentację o bezpieczeństwie danych",
      material: "Zespół potrzebuje krótkiej prezentacji przypominającej zasady bezpiecznej pracy z AI i dokumentami.",
      data: "Tematy: dane poufne, dane osobowe, anonimizacja, sprawdzanie odpowiedzi AI, odpowiedzialność człowieka, przykłady bezpiecznych zastosowań.",
      format: "- 6 slajdów,\n- mało tekstu,\n- notatki prowadzącego,\n- przykład bezpieczny i ryzykowny.",
      output: "Szkielet prezentacji Google Slides o bezpieczeństwie danych.",
      effect: "Prezentacja przypominająca zasady pracy z AI i danymi.",
      hint: "Podpowiedzi:\n- Unikajcie straszenia. Chodzi o jasne zasady.\n- Dodajcie przykład bezpieczny i ryzykowny.\n- Nie cytujcie przepisów, jeśli nie ma ich w materiale.",
      check: "1. Czy zasady są konkretne?\n2. Czy są przykłady?\n3. Czy język jest spokojny?\n4. Czy prezentacja kończy się checklistą?",
      sample: "Przygotuj szkielet 6-slajdowej prezentacji Google Slides o bezpiecznej pracy z AI i dokumentami w instytucji publicznej. Dodaj przykład bezpieczny i ryzykowny oraz notatki prowadzącego.",
      intro: "Ćwiczenie pomaga stworzyć materiał przypominający zasady bezpieczeństwa bez nadmiernej teorii.",
      time: "22-30 min"
    })
  ]);
})();
