(function () {
  if (!window.EXERCISES) return;

  const participantPrint = `# Karta pracy uczestnika
## Ćwiczenie 7. Prezentacja ze źródeł
Przygotujcie proces pracy nad krótką prezentacją dla pracowników WUP i PUP: „Jak narzędzia AI mogą wspierać codzienną pracę biurową i szkoleniową w instytucji publicznej?”.

## Sytuacja
Prezentacja ma wspierać 20-minutowe wystąpienie informacyjne. Ma mieć około 8 slajdów. Nie jest wykładem technicznym o AI. Ma pokazać praktyczne zastosowania, ograniczenia i zasady bezpiecznego korzystania z narzędzi AI.

Odbiorcami są osoby o różnym poziomie doświadczenia. Część uczestników korzysta już z AI, a część dopiero zaczyna. Język ma być prosty, spokojny i profesjonalny.

## Materiały źródłowe
W ćwiczeniu korzystacie ze streszczeń trzech materiałów.

### Materiał 1. Notatka z warsztatu o AI w pracy biurowej
Podczas warsztatu wskazano, że narzędzia AI mogą wspierać pracowników w przygotowywaniu pierwszych wersji tekstów, porządkowaniu notatek, tworzeniu roboczych konspektów, upraszczaniu zbyt formalnych komunikatów i przygotowywaniu pytań do ankiet lub testów.

Podkreślono, że AI nie powinna być traktowana jako źródło nieomylne. Każda odpowiedź wymaga sprawdzenia, szczególnie gdy dotyczy przepisów, procedur, danych liczbowych, informacji o projektach albo komunikatów kierowanych do odbiorców zewnętrznych.

Wskazano też, że jakość odpowiedzi AI zależy od jakości promptu. Polecenie powinno zawierać kontekst, odbiorcę, cel, styl, format i ograniczenia. Zbyt ogólne polecenia prowadzą do odpowiedzi ogólnych albo nieprzydatnych.

### Materiał 2. Bezpieczne korzystanie z AI
W materiale podkreślono, że do narzędzi AI nie należy wklejać danych osobowych, numerów spraw, danych klientów, informacji poufnych, nieopublikowanych dokumentów wewnętrznych ani treści pozwalających zidentyfikować konkretną osobę.

Przed użyciem AI warto zanonimizować materiał albo przygotować przykład szkoleniowy. Jeżeli tekst zawiera dane wrażliwe lub informacje objęte poufnością, nie należy wprowadzać go do zewnętrznych narzędzi.

AI może wspierać pracę, ale nie podejmuje decyzji za pracownika. Człowiek odpowiada za ocenę wyniku, sprawdzenie faktów, zgodność z procedurami i ostateczny kształt tekstu.

### Materiał 3. Przykłady zastosowań
W materiale zebrano przykłady zadań, w których AI może być pomocna:
- przygotowanie roboczej wersji komunikatu,
- poprawa tekstu urzędowego,
- uproszczenie języka,
- uporządkowanie notatek ze spotkania,
- stworzenie listy zadań,
- przygotowanie pytań do ankiety,
- przygotowanie testu wiedzy,
- porównanie dwóch wersji tekstu,
- wskazanie ryzyk w odpowiedzi AI,
- przygotowanie konspektu prezentacji.

Zaznaczono, że wynik AI zwykle wymaga redakcji. Największą wartość daje nie samo wygenerowanie tekstu, lecz przyspieszenie pierwszego etapu pracy: zebrania pomysłów, uporządkowania materiału i przygotowania wersji roboczej.

## Zadanie
Przygotujcie materiał, który można później wkleić do Gamma albo Canvy.

Na końcu powinniście mieć:
- prompt lub zestaw pytań do NotebookLM,
- główny przekaz prezentacji w jednym zdaniu,
- konspekt około 8 slajdów,
- prompt do Gamma albo Canvy,
- checklistę kontroli prezentacji po wygenerowaniu.

## Niedopracowany prompt do analizy
„Zrób prezentację o AI w pracy urzędu. Ma być nowoczesna, ciekawa i profesjonalna. Dodaj slajdy o narzędziach AI, automatyzacji pracy, zwiększaniu efektywności i przyszłości administracji.”

Zastanówcie się, dlaczego ten prompt jest ryzykowny. Szczególnie sprawdźcie, czy dopisuje tematy, których nie ma w materiałach.

## Kroki pracy
1. Wyciągnijcie z materiałów 5 najważniejszych informacji.
2. Ustalcie główny przekaz prezentacji.
3. Zaprojektujcie układ około 8 slajdów.
4. Przy każdym slajdzie wpiszcie tytuł, 2-3 punkty, pomysł wizualny i notatkę dla prowadzącego.
5. Napiszcie prompt do Gamma albo Canvy.
6. Sprawdźcie wynik checklistą.

## Co musi zostać zachowane
- AI wspiera pracę, ale nie zastępuje decyzji człowieka.
- Wyniki AI trzeba sprawdzać.
- Dobry prompt wymaga kontekstu, odbiorcy, celu i ograniczeń.
- Nie wolno wklejać danych osobowych ani informacji poufnych.
- Slajdy mają wspierać wypowiedź prowadzącego, a nie zastępować ją tekstem.

## Czego nie wolno dopisać
- automatyzacji procesów administracyjnych, jeśli nie wynika ze źródeł,
- gwarantowanego wzrostu efektywności,
- podejmowania decyzji przez AI,
- rewolucji w administracji,
- danych, przykładów lub obietnic spoza materiałów.

## Checklista kontroli prezentacji
Sprawdźcie, czy prezentacja:
- jest zgodna z materiałami źródłowymi,
- nie zawiera informacji spoza materiałów,
- nie sugeruje, że AI podejmuje decyzje za człowieka,
- zawiera część o bezpieczeństwie danych,
- ma slajdy z krótkimi punktami, a nie długimi akapitami,
- jest zrozumiała dla osób początkujących,
- ma logiczną kolejność,
- kończy się praktyczną zasadą do zapamiętania.`;

  const trainerPrint = `# Scenariusz dla prowadzącego
## Ćwiczenie 7. Prezentacja ze źródeł
Ćwiczenie uczy przechodzenia od materiałów źródłowych do prezentacji: najpierw analiza i przekaz, potem konspekt, a dopiero na końcu narzędzie wizualne.

## Cel metodyczny
Uczestnicy mają zobaczyć, że Gamma albo Canva nie powinny być pierwszym krokiem pracy. Najpierw trzeba ustalić, co ma zostać powiedziane, komu, po co i na podstawie jakich źródeł.

Po ćwiczeniu uczestnik powinien umieć:
- wyciągnąć najważniejsze informacje ze źródeł,
- określić odbiorcę i cel prezentacji,
- zbudować główny przekaz,
- przygotować konspekt slajdów,
- oddzielić treść slajdu od notatki prowadzącego,
- napisać prompt do Gamma albo Canvy,
- sprawdzić, czy prezentacja nie dopisała informacji spoza źródeł.

## Czas i forma
30-40 minut. Najlepiej praca w trójkach.

Proponowany podział:
- 4 minuty: wprowadzenie,
- 6 minut: analiza materiałów,
- 6 minut: pytania do NotebookLM,
- 7 minut: konspekt slajdów,
- 6 minut: prompt do Gamma albo Canvy,
- 5-8 minut: omówienie i kontrola wyniku.

## Jak wprowadzić ćwiczenie
Można powiedzieć:
„W tym ćwiczeniu nie zaczynamy od slajdów. Najpierw ustalamy sens prezentacji. Narzędzie wizualne pomaga dopiero wtedy, gdy wiemy, co chcemy powiedzieć, do kogo i na podstawie jakich materiałów.”

## Na co zwracać uwagę
- Czy uczestnicy zaczynają od źródeł, a nie od wyglądu slajdów?
- Czy główny przekaz jest konkretny i spokojny?
- Czy konspekt ma logiczną kolejność?
- Czy slajdy nie są przeładowane tekstem?
- Czy prompt do Gamma albo Canvy zakazuje dopisywania informacji spoza materiałów?
- Czy uczestnicy pamiętają o bezpieczeństwie danych?

## Typowe błędy
### Uczestnicy chcą od razu generować slajdy
Komentarz: „Najpierw ustalmy, co ma być powiedziane i w jakiej kolejności. Narzędzie graficzne pomoże w formie, ale nie powinno samo decydować o przekazie.”

### Prompt jest zbyt ogólny
Komentarz: „Narzędzie nie wie, dla kogo jest prezentacja, ile ma mieć slajdów, jaki ma być styl i czego nie wolno dopowiadać.”

### Slajdy są przeładowane tekstem
Komentarz: „Prezentacja nie jest dokumentem do czytania. Slajd ma wspierać wypowiedź, a szczegóły mogą być w notatkach prowadzącego.”

### AI dopisuje niepotwierdzone hasła
Komentarz: „Jeżeli nie ma tego w materiałach źródłowych, nie powinno pojawić się w prezentacji.”

## Pytania do omówienia
- Co było głównym przekazem prezentacji?
- Które informacje powinny trafić na slajdy?
- Które informacje lepiej zostawić jako notatkę prowadzącego?
- Czy prompt do Gamma albo Canvy był wystarczająco konkretny?
- Co narzędzie mogłoby dopisać, gdyby prompt był zbyt ogólny?
- Jak sprawdzić zgodność prezentacji ze źródłami?

## Wariant bez logowania
Uczestnicy pracują na streszczeniach materiałów, przygotowują pytania do NotebookLM, konspekt 8 slajdów i prompt do Gamma albo Canvy. Prowadzący może pokazać jeden przykład działania narzędzia na ekranie.

## Wariant trudniejszy
Poproś grupy o przygotowanie dwóch wersji tej samej prezentacji: dla osób początkujących oraz dla kadry kierowniczej. Następnie porównajcie język, przykłady, poziom szczegółowości i zakończenie.`;

  window.EXERCISES["source-presentation"] = [
    {
      title: "Ćwiczenie 7. Prezentacja ze źródeł",
      heading: "Od materiałów w NotebookLM do konspektu i promptu dla Gamma albo Canvy",
      participantHeading: "Karta pracy uczestnika",
      participantTask: participantPrint,
      guide: trainerPrint,
      screenHeading: "Najpierw sens, potem slajdy",
      screenTask: "# Zadanie na ekran\nPrzygotujcie proces pracy nad prezentacją „Jak narzędzia AI mogą wspierać codzienną pracę biurową i szkoleniową w instytucji publicznej?”.\n\n## Wasz wynik\n- 5 najważniejszych informacji ze źródeł,\n- główny przekaz prezentacji,\n- konspekt około 8 slajdów,\n- prompt do Gamma albo Canvy,\n- checklista kontroli jakości.\n\n## Zasada\nNie zaczynajcie od narzędzia graficznego. Najpierw przekaz, potem konspekt, na końcu slajdy.",
      printTask: participantPrint,
      printParticipant: participantPrint,
      printTrainer: trainerPrint,
      intro: "Uczestnicy przechodzą od materiałów źródłowych do konspektu prezentacji i promptu dla narzędzia wizualnego.",
      time: "30-40 minut",
      form: "praca w małych grupach po 3 osoby",
      result: "konspekt 8 slajdów i prompt do Gamma albo Canvy",
      layout: "workshop-v2",
      steps: [
        "Przeczytajcie sytuację i materiały źródłowe.",
        "Wybierzcie najważniejsze informacje i ustalcie główny przekaz.",
        "Przygotujcie konspekt około 8 slajdów.",
        "Napiszcie prompt do Gamma albo Canvy.",
        "Sprawdźcie, czy prezentacja nie dopisała treści spoza źródeł."
      ],
      hint: "Dobry konspekt zaczyna się od odbiorcy i celu. Narzędzie wizualne powinno dostać już uporządkowaną treść, a nie luźne hasło.",
      check: "Wynik jest dobry, jeśli prezentacja ma logiczną kolejność, mało tekstu na slajdach, notatki dla prowadzącego i nie zawiera informacji spoza źródeł.",
      sample: "Główny przekaz: AI może wspierać pracowników urzędu w porządkowaniu treści, redagowaniu tekstów i przygotowywaniu materiałów, ale wynik zawsze wymaga sprawdzenia przez człowieka.",
      discuss: "Co powinno być na slajdzie, a co powinien powiedzieć prowadzący? Które dopowiedzenie AI byłoby najbardziej ryzykowne?",
      modern: {
        mode: "guided",
        badge: "wersja pilotażowa",
        lead: "Trzecia próba układu: bardziej wizualny pulpit pracy, mapa źródeł, oś procesu i krótkie bloki decyzyjne. Dłuższe teksty zostają w materiałach źródłowych i wydruku.",
        tabs: [
          {
            id: "participant",
            label: "Pulpit pracy",
            cards: [
              { tone: "blue", kicker: "cel", title: "Co trenujemy?", body: "Uczymy się tworzyć prezentację z materiałów źródłowych w uporządkowanym procesie: analiza, przekaz, konspekt, prompt do narzędzia wizualnego, kontrola wyniku." },
              { tone: "neutral", kicker: "sytuacja", title: "Kontekst pracy", body: "Przygotowujecie 20-minutową prezentację dla pracowników WUP i PUP. Temat: „Jak narzędzia AI mogą wspierać codzienną pracę biurową i szkoleniową w instytucji publicznej?”. Prezentacja ma być praktyczna, zrozumiała dla osób początkujących i nieprzeładowana tekstem.", wide: true },
              { tone: "teal", kicker: "zadanie", title: "Wasz wynik", body: "- prompt lub zestaw pytań do NotebookLM,\n- główny przekaz prezentacji w jednym zdaniu,\n- konspekt około 8 slajdów,\n- prompt do Gamma albo Canvy,\n- checklista kontroli prezentacji po wygenerowaniu." },
              { tone: "amber", kicker: "uwaga", title: "Nie zaczynajcie od slajdów", body: "Najpierw ustalcie, co chcecie powiedzieć, do kogo i na podstawie jakich źródeł. Gamma albo Canva powinny dostać uporządkowany konspekt, a nie ogólne hasło." },
              { tone: "green", kicker: "materiały", title: "Trzy źródła do pracy", body: "1. Notatka z warsztatu o AI w pracy biurowej.\n2. Zasady bezpiecznego korzystania z AI.\n3. Przykłady zastosowań AI w pracy urzędu.\n\nPełne streszczenia są w zakładce „Materiały źródłowe”.", wide: true },
              { tone: "red", kicker: "ryzyko", title: "Niedopracowany prompt", body: "> Zrób prezentację o AI w pracy urzędu. Ma być nowoczesna, ciekawa i profesjonalna. Dodaj slajdy o narzędziach AI, automatyzacji pracy, zwiększaniu efektywności i przyszłości administracji.\n\nTen prompt może dopisać tematy, których nie ma w materiałach, i przesunąć prezentację w stronę ogólnej reklamy AI.", wide: true },
              { tone: "blue", kicker: "proces", title: "Kroki pracy", body: "1. Wyciągnijcie 5 najważniejszych informacji ze źródeł.\n2. Ustalcie główny przekaz prezentacji.\n3. Zaprojektujcie 8 slajdów.\n4. Przy każdym slajdzie wpiszcie tytuł, 2-3 punkty, element wizualny i notatkę dla prowadzącego.\n5. Napiszcie prompt do Gamma albo Canvy.\n6. Sprawdźcie wynik checklistą.", wide: true },
              { tone: "green", kicker: "zachować", title: "Co musi zostać w prezentacji?", body: "- AI wspiera pracę, ale nie podejmuje decyzji za człowieka.\n- Odpowiedzi AI trzeba sprawdzać.\n- Dobry prompt wymaga kontekstu, odbiorcy, celu i ograniczeń.\n- Nie wklejamy danych osobowych ani informacji poufnych.\n- Slajdy wspierają wystąpienie, a nie zastępują prowadzącego." },
              { tone: "amber", kicker: "nie dopisywać", title: "Czego nie wolno dopisać?", body: "- automatyzacji procesów administracyjnych, jeśli nie wynika ze źródeł,\n- gwarantowanego wzrostu efektywności,\n- podejmowania decyzji przez AI,\n- „rewolucji w administracji”,\n- przykładów i obietnic spoza materiałów." },
              { tone: "teal", kicker: "kontrola", title: "Checklista wyniku", body: "- Czy prezentacja jest zgodna ze źródłami?\n- Czy nie zawiera informacji spoza materiałów?\n- Czy zawiera część o bezpieczeństwie danych?\n- Czy slajdy mają krótkie punkty?\n- Czy prowadzący wie, co powiedzieć do każdego slajdu?\n- Czy prezentacja kończy się praktyczną zasadą?", wide: true }
            ]
          },
          {
            id: "trainer",
            label: "Dla prowadzącego",
            cards: [
              { tone: "violet", kicker: "metodyka", title: "Sens ćwiczenia", body: "To ćwiczenie pokazuje, że narzędzia do prezentacji nie powinny same decydować o przekazie. Uczestnicy mają przejść przez pełny proces: źródła, analiza, główny przekaz, konspekt, dopiero potem Gamma albo Canva.", wide: true },
              { tone: "blue", kicker: "wprowadzenie", title: "Jak zacząć?", body: "Możesz powiedzieć: „W tym ćwiczeniu nie zaczynamy od slajdów. Najpierw ustalamy sens prezentacji. Narzędzie wizualne pomaga dopiero wtedy, gdy wiemy, co chcemy powiedzieć, do kogo i na podstawie jakich materiałów.”", wide: true },
              { tone: "neutral", kicker: "czas", title: "Proponowany podział", body: "- 4 minuty: wprowadzenie,\n- 6 minut: analiza materiałów,\n- 6 minut: pytania do NotebookLM,\n- 7 minut: konspekt slajdów,\n- 6 minut: prompt do Gamma albo Canvy,\n- 5-8 minut: omówienie i kontrola wyniku." },
              { tone: "green", kicker: "obserwuj", title: "Na co patrzeć podczas pracy?", body: "- Czy grupa zaczyna od źródeł?\n- Czy główny przekaz jest konkretny?\n- Czy slajdy nie są dokumentem do czytania?\n- Czy prompt ogranicza dopisywanie faktów?\n- Czy pojawia się część o bezpieczeństwie danych?" },
              { tone: "amber", kicker: "typowe błędy", title: "Reakcje prowadzącego", body: "- Jeśli grupa zaczyna od Canvy: „Najpierw ustalmy, co ma być powiedziane”.\n- Jeśli prompt jest ogólny: „Narzędzie nie zna odbiorcy, celu ani ograniczeń”.\n- Jeśli slajdy mają za dużo tekstu: „Szczegóły powinny być w notatce prowadzącego”.\n- Jeśli AI dopisuje hasła: „Bez źródła nie wstawiamy tego do prezentacji”.", wide: true },
              { tone: "teal", kicker: "omówienie", title: "Pytania na koniec", body: "- Co było głównym przekazem prezentacji?\n- Które informacje trafiły na slajdy?\n- Co zostawiliście jako notatkę prowadzącego?\n- Co Gamma albo Canva mogłyby dopisać bez kontroli?\n- Jak sprawdzilibyście zgodność prezentacji ze źródłami?" },
              { tone: "violet", kicker: "wariant", title: "Wariant trudniejszy", body: "Poproś grupę o dwie wersje tej samej prezentacji: dla osób początkujących oraz dla kadry kierowniczej. Porównajcie język, przykłady, poziom szczegółowości i zakończenie." }
            ]
          },
          {
            id: "materials",
            label: "Materiały źródłowe",
            cards: [
              { tone: "neutral", kicker: "źródło 1", title: "Notatka z warsztatu o AI", body: "Podczas warsztatu wskazano, że narzędzia AI mogą wspierać pracowników w przygotowywaniu pierwszych wersji tekstów, porządkowaniu notatek, tworzeniu roboczych konspektów, upraszczaniu zbyt formalnych komunikatów i przygotowywaniu pytań do ankiet lub testów.\n\nPodkreślono, że AI nie powinna być traktowana jako źródło nieomylne. Każda odpowiedź wymaga sprawdzenia, szczególnie gdy dotyczy przepisów, procedur, danych liczbowych, informacji o projektach albo komunikatów kierowanych do odbiorców zewnętrznych.\n\nWskazano też, że jakość odpowiedzi AI zależy od jakości promptu. Polecenie powinno zawierać kontekst, odbiorcę, cel, styl, format i ograniczenia. Zbyt ogólne polecenia prowadzą do odpowiedzi ogólnych albo nieprzydatnych.", wide: true },
              { tone: "neutral", kicker: "źródło 2", title: "Bezpieczne korzystanie z AI", body: "W materiale podkreślono, że do narzędzi AI nie należy wklejać danych osobowych, numerów spraw, danych klientów, informacji poufnych, nieopublikowanych dokumentów wewnętrznych ani treści pozwalających zidentyfikować konkretną osobę.\n\nPrzed użyciem AI warto zanonimizować materiał albo przygotować przykład szkoleniowy. Jeżeli tekst zawiera dane wrażliwe lub informacje objęte poufnością, nie należy wprowadzać go do zewnętrznych narzędzi.\n\nAI może wspierać pracę, ale nie podejmuje decyzji za pracownika. Człowiek odpowiada za ocenę wyniku, sprawdzenie faktów, zgodność z procedurami i ostateczny kształt tekstu.", wide: true },
              { tone: "neutral", kicker: "źródło 3", title: "Przykłady zastosowań", body: "W materiale zebrano przykłady zadań, w których AI może być pomocna:\n- przygotowanie roboczej wersji komunikatu,\n- poprawa tekstu urzędowego,\n- uproszczenie języka,\n- uporządkowanie notatek ze spotkania,\n- stworzenie listy zadań,\n- przygotowanie pytań do ankiety,\n- przygotowanie testu wiedzy,\n- porównanie dwóch wersji tekstu,\n- wskazanie ryzyk w odpowiedzi AI,\n- przygotowanie konspektu prezentacji.\n\nZaznaczono, że wynik AI zwykle wymaga redakcji. Największą wartość daje nie samo wygenerowanie tekstu, lecz przyspieszenie pierwszego etapu pracy: zebrania pomysłów, uporządkowania materiału i przygotowania wersji roboczej.", wide: true },
              { tone: "blue", kicker: "NotebookLM", title: "Przykładowe pytania do źródeł", body: "Na podstawie materiałów przygotuj analizę do krótkiej prezentacji dla pracowników WUP i PUP. Wypisz: 5 najważniejszych informacji, 3 korzyści praktyczne bez języka reklamowego, 3 ograniczenia lub ryzyka, przykłady zastosowań, główny przekaz w jednym zdaniu i informacje, których nie należy dopowiadać.", wide: true },
              { tone: "green", kicker: "przykład", title: "Dobry główny przekaz", body: "AI może wspierać pracowników urzędu w porządkowaniu treści, redagowaniu tekstów i przygotowywaniu materiałów, ale wynik zawsze wymaga sprawdzenia przez człowieka." },
              { tone: "red", kicker: "kontrast", title: "Słaby główny przekaz", body: "AI zrewolucjonizuje pracę urzędu.\n\nTo brzmi efektownie, ale jest zbyt ogólne, promocyjne i nie wynika bezpośrednio z materiałów." },
              { tone: "teal", kicker: "Gamma / Canva", title: "Szkielet dobrego promptu", body: "Przygotuj projekt prezentacji dla pracowników WUP i PUP. Prezentacja ma mieć około 8 slajdów, mało tekstu, spokojny styl i notatki dla prowadzącego. Uwzględnij tylko informacje z materiałów: praktyczne zastosowania AI, znaczenie promptu, kontrolę odpowiedzi i bezpieczeństwo danych. Nie dopisuj automatyzacji procesów, decyzji podejmowanych przez AI ani rewolucji w administracji.", wide: true }
            ]
          }
        ]
      },
      tools: {
        intro: "Ćwiczenie można wykonać etapami. Jeśli grupa nie ma kont w tych narzędziach, przygotowuje konspekt i prompt, a prowadzący pokazuje jeden przykład na ekranie.",
        items: [
          { name: "NotebookLM", description: "analiza materiałów źródłowych i pytań do źródeł", url: "https://notebooklm.google.com" },
          { name: "ChatGPT", description: "konspekt prezentacji i prompt do narzędzia wizualnego", url: "https://chatgpt.com" },
          { name: "Claude", description: "spokojna analiza źródeł i dopracowanie narracji", url: "https://claude.ai" },
          { name: "Gamma", description: "pierwszy szkic prezentacji z konspektu", url: "https://gamma.app" },
          { name: "Canva", description: "wizualne dopracowanie slajdów", url: "https://www.canva.com" }
        ]
      }
    }
  ];
})();
