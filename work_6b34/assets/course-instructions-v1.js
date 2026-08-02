(() => {
  'use strict';

  const guides = {
    'm2-4-dlaczego-fake-news-i-manipulacja-sie-rozprzestrzeniaja': {
      intro: 'Zatrzymaj się na chwilę i pomyśl o jednym materiale, który ostatnio mocno na Ciebie zadziałał.',
      steps: [
        'Przypomnij sobie jeden post, film albo wiadomość, którą chciałeś szybko przekazać dalej.',
        'Odpowiedz sobie po kolei na cztery pytania w ramce.',
        'Nie oceniaj siebie. Chodzi tylko o zauważenie, co dzieje się przed udostępnieniem.'
      ],
      note: 'Nie musisz nic wpisywać. To krótka refleksja dla Ciebie.'
    },
    'm2-6-wyzwalacze-emocjonalne-w-przekazach-manipulacyjnych': {
      intro: 'Przeczytaj fikcyjny post, a potem odpowiedz po kolei na pytania.',
      steps: [
        'W pierwszym polu wybierz emocję, która pojawiłaby się u Ciebie jako pierwsza.',
        'W drugim polu wskaż, jakiej ważnej informacji brakuje w poście.',
        'W trzecim polu wybierz, co zrobisz przed reakcją.',
        'Zaznacz wszystkie słowa i zwroty, które mają wywołać emocję. Możesz wybrać więcej niż jeden.',
        'Własne zdanie na końcu jest opcjonalne.'
      ],
      note: 'Nie ma jednej „właściwej emocji”. Sprawdzamy, czy emocja uruchamia pauzę i weryfikację.'
    },
    'm2-7-bledy-poznawcze-a-ocena-informacji': {
      intro: 'Sprawdź, co mogło wpłynąć na Twoją pierwszą ocenę informacji.',
      steps: [
        'Zaznacz wszystkie sytuacje, które mogłyby wpłynąć na Twoją ocenę. Możesz wybrać kilka.',
        'Wybierz działanie, które najlepiej pomaga skorygować pierwsze wrażenie.',
        'Na końcu wybierz, co sprawdzisz przed udostępnieniem.'
      ],
      note: 'Zaznaczenie mechanizmu nie oznacza błędu ani słabości. Każdy człowiek korzysta ze skrótów myślowych.'
    },
    'm2-9-fact-checking-i-weryfikacja-podejscie-praktyczne': {
      intro: 'Przejdź przez metodę SIFT krok po kroku. Nie przeskakuj od razu do końcowej decyzji.',
      steps: [
        'S — najpierw zdecyduj, czy zatrzymujesz reakcję i nie przekazujesz treści dalej.',
        'I — oceń, co wiesz o autorze, koncie lub stronie.',
        'F — sprawdź, czy lepsze i niezależne źródła potwierdzają informację.',
        'T — spróbuj dotrzeć do pierwszego komunikatu, pełnego nagrania albo pierwotnego kontekstu.',
        'Dopiero na końcu wybierz decyzję. Pole z nazwą pierwszego źródła jest opcjonalne.'
      ],
      note: 'Jeżeli jeszcze czegoś nie sprawdziłeś, wybierz odpowiedź „jeszcze nie sprawdziłem”. Nie zgaduj.'
    },
    'm2-10-lista-kontrolna-weryfikacji': {
      intro: 'Użyj checklisty do jednego konkretnego materiału, który chcesz ocenić.',
      steps: [
        'Zaznacz tylko te elementy, które rzeczywiście udało Ci się potwierdzić.',
        'Nie zaznaczaj punktu tylko dlatego, że materiał wygląda wiarygodnie.',
        'Po przejściu całej listy wybierz, czy informacja jest gotowa do udostępnienia.',
        'W polu opcjonalnym możesz zapisać najważniejszą rzecz, której nadal brakuje.'
      ],
      note: 'Niezaznaczony punkt nie oznacza automatycznie fałszu. Oznacza: „tego jeszcze nie sprawdziłem”.'
    },
    'm2-11-ai-deepfake-i-media-syntetyczne': {
      intro: 'Oglądaj materiały pojedynczo i nie oceniaj ich tylko po wyglądzie lub brzmieniu.',
      steps: [
        'Wybierz jeden film, obraz albo nagranie.',
        'Zastanów się, co sprawia, że materiał wygląda wiarygodnie.',
        'Sprawdź, kto opublikował materiał i gdzie pojawił się po raz pierwszy.',
        'Poszukaj pełnej wersji albo niezależnego potwierdzenia zdarzenia.',
        'Dopiero potem oceń, czy materiał może być autentyczny, zmieniony lub syntetyczny.'
      ],
      note: 'Brak widocznych usterek nie potwierdza autentyczności. Pojedyncza usterka również nie jest jeszcze dowodem deepfake.'
    },
    'm2-12-stronniczosc-w-wiadomosciach-i-tresciach-cyfrowych': {
      intro: 'Porównaj dwa nagłówki opisujące te same dane.',
      steps: [
        'Wskaż, co najmocniej podkreśla nagłówek A.',
        'Zrób to samo dla nagłówka B.',
        'Wybierz, który nagłówek bardziej alarmuje odbiorcę.',
        'Wskaż dane potrzebne do uczciwego porównania.',
        'Krótki własny wniosek możesz wpisać, ale nie jest obowiązkowy.'
      ],
      note: 'Nie wybierasz „lepszego poglądu”. Sprawdzasz, jak nagłówek ustawia pierwszą interpretację.'
    },
    'm2-16-praktyczny-przyklad-do-analizy': {
      intro: 'Spójrz jednocześnie na fotografię i dołączony do niej podpis.',
      steps: [
        'Odpowiedz po kolei na pięć pytań dotyczących autora, daty, źródła i kontekstu.',
        'Jeżeli nie masz podstaw do oceny, wybierz „nie potrafię ocenić” albo podobną odpowiedź.',
        'W polu opcjonalnym zapisz pierwszy krok, który wykonasz podczas weryfikacji.',
        'Na końcu rozwiń „Sprawdź wskazówki” i porównaj tok rozumowania.'
      ],
      note: 'Samo zdjęcie zwykle nie potwierdza miejsca, daty ani opisu wydarzenia.'
    },
    'm2-18-zadanie-refleksyjne': {
      intro: 'Podsumuj, na co chcesz zwracać większą uwagę po tym module.',
      steps: [
        'Wybierz rodzaj manipulacji, który rozpoznajesz najlepiej.',
        'Wybierz emocję, przy której chcesz częściej robić pauzę.',
        'Wybierz pierwszy krok weryfikacji, którego chcesz używać.',
        'Na końcu zapisz własną krótką zasadę przed udostępnieniem.'
      ],
      note: 'To refleksja, nie test. Wybierz odpowiedzi zgodne z Twoim doświadczeniem.'
    },
    'm2-19-krotka-samoocena': {
      intro: 'Oceń pięć zdań na skali od 1 do 5.',
      steps: [
        'Przeczytaj pierwsze zdanie.',
        'Wybierz liczbę od 1 do 5: 1 oznacza „zdecydowanie się nie zgadzam”, a 5 — „zdecydowanie się zgadzam”.',
        'Powtórz to dla wszystkich pięciu zdań.',
        'Po zaznaczeniu wszystkich odpowiedzi zobaczysz podsumowanie.'
      ],
      note: 'Odpowiadaj zgodnie z tym, co robisz teraz, a nie z tym, co chciałbyś robić.'
    },

    'm3-6-fakty-opinie-interpretacje-i-zalozenia': {
      intro: 'Przeczytaj każde zdanie osobno i wybierz jego główny rodzaj.',
      steps: [
        'Przy pierwszym zdaniu wybierz jedną kategorię: fakt, opinia, interpretacja, założenie, przewidywanie albo sąd wartościujący.',
        'Tak samo oceń pozostałe pięć zdań.',
        'Jeżeli jedno zdanie wydaje Ci się niejednoznaczne, możesz wyjaśnić dlaczego w polu opcjonalnym.',
        'Rozwiń „Sprawdź odpowiedzi”, aby zobaczyć wyjaśnienie.'
      ],
      note: 'Wybierasz kategorię dominującą. Jedno zdanie może zawierać więcej niż jedną warstwę.'
    },
    'm3-7-ocena-zrodel': {
      intro: 'Wybierz jeden konkretny artykuł, post, film albo komunikat i oceń jego źródło.',
      steps: [
        'Opcjonalnie wpisz tytuł lub krótki opis wybranego materiału.',
        'Odpowiedz kolejno na pytania o autora, datę, dowody i niezależne potwierdzenie.',
        'Jeżeli czegoś nie sprawdziłeś, wybierz „nie wiem” lub „jeszcze nie sprawdziłem”.',
        'Na końcu wybierz ocenę całego materiału i zapisz najważniejszy brak, jeżeli chcesz.'
      ],
      note: 'Nie oceniaj źródła po samym wyglądzie strony. Liczy się autor, data, dowody i możliwość sprawdzenia.'
    },
    'm3-9-dane-i-statystyki': {
      intro: 'Przeczytaj komunikat o wzroście liczby skarg o 50%. Nie wyciągaj jeszcze wniosku.',
      steps: [
        'Zaznacz wszystkie informacje, których potrzebujesz, aby zrozumieć ten procent.',
        'Wybierz możliwe wyjaśnienie zmiany. Pamiętaj, że przyczyn może być kilka.',
        'Na końcu wskaż, co naprawdę można stwierdzić na podstawie samego procentu.'
      ],
      note: 'Procent bez wartości początkowej, liczby użytkowników, okresu i metody może być prawdziwy, ale nadal mylący.'
    },
    'm3-10-narracje-i-ramy-interpretacyjne': {
      intro: 'Porównaj dwa nagłówki dotyczące tego samego wydarzenia.',
      steps: [
        'Wskaż ramę zastosowaną w pierwszym nagłówku.',
        'Wskaż ramę zastosowaną w drugim nagłówku.',
        'Wybierz informację, której najbardziej brakuje do pełniejszej oceny.',
        'Napisz jeden możliwie neutralny nagłówek, który zachowuje najważniejsze fakty.'
      ],
      note: 'Neutralny nagłówek nie musi być bezbarwny. Powinien być zgodny z faktami i nie narzucać oceny przed przeczytaniem materiału.'
    },
    'm3-12-bledy-poznawcze-w-podejmowaniu-decyzji': {
      intro: 'Wybierz jeden mechanizm z tabeli i odnieś go do własnego sposobu oceniania informacji.',
      steps: [
        'Przeczytaj nazwy i opisy błędów poznawczych.',
        'Wybierz jeden mechanizm, który najłatwiej rozpoznajesz.',
        'Przypomnij sobie sytuację, w której mógł wpłynąć na pierwszą ocenę.',
        'Zadaj sobie pytanie kontrolne z ramki.'
      ],
      note: 'Nie musisz nic zapisywać. Celem jest zauważenie mechanizmu, a nie ocenianie siebie.'
    },
    'm3-14-zastosowanie-modelu-clear': {
      intro: 'Wybierz jedną decyzję i przejdź przez model CLEAR od początku do końca.',
      steps: [
        'Wpisz lub wybierz obszar decyzji, którą chcesz przeanalizować.',
        'C — napisz, co dokładnie musisz ustalić.',
        'L — wskaż źródła, które sprawdzisz.',
        'E — oceń jakość dostępnych dowodów.',
        'A — sprawdź inne wyjaśnienia lub możliwości.',
        'R — zdecyduj, czy możesz działać teraz, warunkowo, czy potrzebujesz więcej danych.'
      ],
      note: 'Nie chodzi o szybkie dojście do odpowiedzi. Model pomaga zobaczyć, czego jeszcze brakuje.'
    },
    'm3-16-studium-przypadku-falszywa-porada-zdrowotna': {
      intro: 'Przeczytaj fikcyjny post zdrowotny i oceń go jako informację, nie jako poradę medyczną.',
      steps: [
        'Sprawdź, czy kwalifikacje autora można potwierdzić.',
        'Wskaż, na jakim rodzaju dowodu opiera się post.',
        'Oceń, czy opisano ryzyko, dawkowanie i przeciwwskazania.',
        'Wybierz mechanizm perswazji oraz odpowiedzialną reakcję.',
        'Opcjonalnie wpisz źródło, które sprawdzisz jako pierwsze.'
      ],
      note: 'Ćwiczenie nie służy do podejmowania decyzji o leczeniu. W rzeczywistej sprawie zdrowotnej potrzebne jest wiarygodne źródło i odpowiedni specjalista.'
    },
    'm3-20-checklista-krytycznego-myslenia': {
      intro: 'Zastosuj checklistę do jednej konkretnej informacji albo decyzji.',
      steps: [
        'Zaznacz tylko te kroki, które naprawdę wykonałeś.',
        'Jeżeli któregoś kroku brakuje, zostaw go niezaznaczonego.',
        'Po przejściu całej listy wybierz, czy masz wystarczające dane do decyzji.',
        'Opcjonalnie zapisz najważniejszą brakującą informację.'
      ],
      note: 'Nie trzeba zaznaczyć wszystkiego. Czasem najlepszą decyzją jest: „potrzebuję więcej danych”.'
    },
    'm3-21-praktyczny-przyklad-do-analizy': {
      intro: 'Przeczytaj opis badania i oceń, czy przedstawione dane naprawdę wspierają wniosek.',
      steps: [
        'Ustal, kto przeprowadził badanie i kto mógł mieć interes w jego wyniku.',
        'Sprawdź, co wiadomo o próbie i sposobie zadania pytań.',
        'Wybierz rodzaj przedstawionego dowodu.',
        'Oceń, czy końcowy wniosek nie jest szerszy niż dane.',
        'Wskaż, co trzeba zrobić przed podjęciem decyzji. Pole z pierwszym materiałem jest opcjonalne.'
      ],
      note: 'Duży procent nie wystarcza, jeżeli nie wiadomo, kogo zapytano, o co i w jaki sposób.'
    },
    'm3-23-zadanie-refleksyjne': {
      intro: 'Wybierz jedną umiejętność, którą chcesz częściej stosować przy podejmowaniu decyzji.',
      steps: [
        'Wybierz umiejętność do dalszej praktyki.',
        'Wskaż największe ryzyko, które widzisz podczas korzystania z AI.',
        'Zapisz jedno proste pytanie, które zadasz sobie przed ważną decyzją.'
      ],
      note: 'To osobiste podsumowanie. Nie ma odpowiedzi lepszych i gorszych.'
    },
    'm3-24-krotka-samoocena': {
      intro: 'Oceń pięć zdań na skali od 1 do 5.',
      steps: [
        'Przeczytaj każde zdanie osobno.',
        'Wybierz 1, gdy zdecydowanie się nie zgadzasz, albo 5, gdy zdecydowanie się zgadzasz. Możesz użyć wartości pośrednich.',
        'Odpowiedz na wszystkie pięć zdań.',
        'Po zakończeniu przeczytaj podsumowanie i wybierz jeden obszar do dalszej praktyki.'
      ],
      note: 'Oceniaj obecne umiejętności, a nie oczekiwany idealny poziom.'
    },

    'm4-5-narracje-medialne-i-ramy-interpretacyjne': {
      intro: 'Przeczytaj dwa nagłówki opisujące ten sam temat i porównaj sposób przedstawienia sprawy.',
      steps: [
        'Wybierz ramę nagłówka A.',
        'Wybierz ramę nagłówka B.',
        'Wskaż, który nagłówek mocniej uruchamia emocje.',
        'Wybierz dane potrzebne do pełniejszej oceny.',
        'Opcjonalnie wpisz jedno słowo, które najmocniej ustawia sposób patrzenia na temat.'
      ],
      note: 'Rama nie musi oznaczać fałszu. Pokazuje, co autor stawia na pierwszym planie.'
    },
    'm4-6-polityka-polaryzacja-i-debata-publiczna': {
      intro: 'Przypomnij sobie jeden materiał polityczny, który wywołał u Ciebie silną reakcję.',
      steps: [
        'Nie oceniaj na razie, czy zgadzasz się z jego poglądem.',
        'Sprawdź, czy zawiera konkretne twierdzenie możliwe do zweryfikowania.',
        'Zastanów się, czy pokazuje źródło i pełny kontekst.',
        'Oceń, czy krytykuje decyzję, czy atakuje osobę lub grupę.',
        'Zapytaj siebie, czy tak samo oceniłbyś materiał zgodny z Twoimi poglądami.'
      ],
      note: 'Nie musisz nic zapisywać. Celem jest użycie tych samych standardów wobec każdej strony sporu.'
    },
    'm4-7-migracja-uchodzcy-i-sposob-przedstawiania-ludzi': {
      intro: 'Przeczytaj zdanie i sprawdź, w którym miejscu zachowanie jednej osoby zostało przeniesione na całą grupę.',
      steps: [
        'Wskaż fakt, który można rzeczywiście sprawdzić.',
        'Wybierz miejsce, w którym pojawia się uogólnienie.',
        'Rozpoznaj ukryte założenie.',
        'Na końcu wybierz dane potrzebne do odpowiedzialnego wniosku.'
      ],
      note: 'Można analizować bezpieczeństwo i politykę publiczną bez przypisywania działania jednostki całej grupie.'
    },
    'm4-8-wojna-konflikt-i-wiarygodnosc-informacji': {
      intro: 'Oceń nagranie tak, jakby miało zostać opublikowane podczas trwającego konfliktu.',
      steps: [
        'Najpierw wskaż tylko to, co naprawdę wiadomo na pewno.',
        'Wybierz metody sprawdzenia miejsca i daty.',
        'Oceń, czy nagranie może ujawnić ludzi, pojazdy albo lokalizację.',
        'Sprawdź, czy tę samą informację można przekazać bezpieczniejszym źródłem.',
        'Dopiero na końcu wybierz decyzję. Uzasadnienie jest opcjonalne.'
      ],
      note: 'W sytuacji konfliktu „jeszcze nie wiadomo” może być najbardziej odpowiedzialnym wynikiem.'
    },
    'm4-15-narzedzie-analityczne-rozkladanie-narracji-na-czesci': {
      intro: 'Wybierz jeden materiał społecznie wrażliwy i rozłóż go na sześć prostych elementów.',
      steps: [
        'Wskaż dominującą ramę.',
        'Oceń język materiału.',
        'Sprawdź jakość dowodów.',
        'Zobacz, czy pokazano różne perspektywy.',
        'Oceń możliwy skutek udostępnienia.',
        'Opcjonalnie zapisz najważniejszy brak.'
      ],
      note: 'Nie oceniasz, czy temat jest ważny. Oceniasz sposób jego przedstawienia.'
    },
    'm4-16-praktyczny-przyklad-do-analizy': {
      intro: 'Przeczytaj post z procentem i sprawdź, czy liczba rzeczywiście uzasadnia wniosek o całej grupie.',
      steps: [
        'Sprawdź, czy podano źródło, wartości bezwzględne i okres.',
        'Oceń, jak post przechodzi od danych do wniosku o grupie.',
        'Wybierz dominujący mechanizm manipulacji.',
        'Wskaż brakujące dane i odpowiedzialną reakcję.',
        'Opcjonalnie zapisz pierwszą informację, którą sprawdzisz.'
      ],
      note: 'Procent nie mówi wszystkiego. Potrzebujesz wartości bazowej, definicji, mianownika i porównywalnych danych.'
    },
    'm4-18-zadanie-refleksyjne': {
      intro: 'Wybierz temat i zasadę, przy których chcesz zachować szczególną ostrożność.',
      steps: [
        'Wybierz temat, który wymaga od Ciebie największej uwagi.',
        'Wskaż ramę, na którą chcesz uważać.',
        'Wybierz pierwszy element do sprawdzenia.',
        'Zapisz jedną własną zasadę przed udostępnieniem treści wrażliwej.'
      ],
      note: 'To nie jest ocena poglądów. Chodzi o zachowanie dokładności, godności i odpowiedzialności.'
    },
    'm4-19-krotka-samoocena': {
      intro: 'Oceń pięć zdań na skali od 1 do 5.',
      steps: [
        'Przeczytaj każde zdanie.',
        'Wybierz liczbę od 1 do 5 zgodnie z obecnym sposobem działania.',
        'Odpowiedz na wszystkie pięć zdań.',
        'Po zakończeniu zobacz podsumowanie i jeden obszar do dalszej praktyki.'
      ],
      note: 'Samoocena nie jest testem poglądów ani oceną końcową.'
    },

    'm5-5-przeciazenie-informacyjne-i-doomscrolling': {
      intro: 'Najpierw zauważ swoje zachowania, a potem wybierz tylko jeden mały krok na tydzień.',
      steps: [
        'Zaznacz wszystkie zachowania, które zauważyłeś u siebie w ostatnich dwóch tygodniach.',
        'Wybierz jeden sygnał, który chcesz ograniczyć jako pierwszy.',
        'Wybierz jedno proste działanie na najbliższy tydzień.',
        'Nie próbuj zmieniać wszystkiego naraz.'
      ],
      note: 'To nie jest diagnoza. Jeżeli nie rozpoznajesz żadnego sygnału, nie musisz go zaznaczać.'
    },
    'm5-7-zdrowe-nawyki-korzystania-z-mediow': {
      intro: 'Przyjrzyj się trzem zwykłym momentom, w których korzystasz z informacji.',
      steps: [
        'Dla momentu 1 wybierz źródło, cel i odczucie po zakończeniu.',
        'Tak samo uzupełnij moment 2 i moment 3.',
        'Na końcu wybierz zdanie, które najlepiej podsumowuje zauważony wzorzec.',
        'Nie szukaj idealnego wyniku. Opisz swój zwykły sposób korzystania.'
      ],
      note: 'Odpowiedzi zapisują się automatycznie na tym urządzeniu.'
    },
    'm5-8-od-reakcji-do-odpowiedzi': {
      intro: 'Przeczytaj wiadomość i przejdź od pierwszego impulsu do spokojnej odpowiedzi.',
      steps: [
        'Wybierz pierwszy impuls, który mógłby się pojawić.',
        'Wskaż elementy nadające wiadomości pozorną wiarygodność.',
        'Wybierz pierwszy krok weryfikacji.',
        'Wybierz najlepszą spokojną odpowiedź.',
        'Opcjonalnie napisz własną wersję odpowiedzi.'
      ],
      note: 'Nie musisz od razu rozstrzygać, czy wiadomość jest prawdziwa. Najpierw poproś o źródło i sprawdź oficjalny kanał.'
    },
    'm5-11-dialog-spor-i-obywatelstwo-cyfrowe': {
      intro: 'Wybierz odpowiedź, która krytykuje twierdzenie, ale nie atakuje człowieka.',
      steps: [
        'Przeczytaj wszystkie cztery propozycje odpowiedzi.',
        'Wybierz tę, która odwołuje się do danych, źródła, okresu albo metody.',
        'Opcjonalnie napisz własną krótką odpowiedź w podobnym stylu.'
      ],
      note: 'Stanowcza odpowiedź może być spokojna. Nie musisz zgadzać się z rozmówcą.'
    },
    'm5-16-narzedzie-zdrowa-rutyna-medialna': {
      intro: 'Ułóż prostą rutynę, którą naprawdę możesz zastosować w zwykłym tygodniu.',
      steps: [
        'Wybierz sposób korzystania ze źródeł.',
        'Ustal pory sprawdzania wiadomości.',
        'Wybierz sygnał, po którym zrobisz przerwę.',
        'Wskaż sposób weryfikacji trudnej informacji.',
        'Wybierz jedno działanie społeczne lub obywatelskie.',
        'Opcjonalnie zapisz jedno zobowiązanie na tydzień.'
      ],
      note: 'Nie wybieraj najbardziej ambitnych odpowiedzi. Wybierz takie, które jesteś w stanie wykonać.'
    },
    'm5-17-narzedzie-share-udostepniaj-odpowiedzialnie': {
      intro: 'Zanim udostępnisz wybrany post, odpowiedz po kolei na pięć pytań SHARE.',
      steps: [
        'S — sprawdź, czy znasz źródło.',
        'H — oceń, komu treść może zaszkodzić.',
        'A — sprawdź, czy są konkretne dowody.',
        'R — nazwij prawdziwy powód, dla którego chcesz udostępnić.',
        'E — zauważ emocję, która towarzyszy decyzji.',
        'Dopiero na końcu wybierz: udostępniam, sprawdzam, nie udostępniam albo szukam bezpieczniejszego źródła.'
      ],
      note: 'SHARE nie mówi automatycznie, czy treść jest prawdziwa. Pomaga zatrzymać impuls i wybrać następny krok.'
    },
    'm5-18-przyklad-do-dyskusji': {
      intro: 'Przeczytaj post o frekwencji i sprawdź, czy jeden lokalny wynik uzasadnia szeroki wniosek.',
      steps: [
        'Wskaż błąd rozumowania.',
        'Oceń, jak szerokie dane przedstawiono.',
        'Zastanów się, jak taki przekaz może wpłynąć na udział obywateli.',
        'Wybierz bardziej odporną odpowiedź i potrzebny kontekst.',
        'Opcjonalnie zapisz pierwszy krok weryfikacji, a potem rozwiń wskazówki.'
      ],
      note: 'Prawdziwy wynik jednej gminy nie opisuje automatycznie całego kraju ani sensu uczestnictwa w demokracji.'
    },
    'm5-20-zadanie-refleksyjne': {
      intro: 'Wybierz trzy odpowiedzi, które pomogą Ci stworzyć jedną prostą zasadę na przyszłość.',
      steps: [
        'Wybierz sytuację, która najczęściej zwiększa Twój stres.',
        'Wybierz sposób ograniczenia przeciążenia.',
        'Wybierz zasadę udziału w rozmowach online.',
        'Zapisz jedno konkretne zobowiązanie.'
      ],
      note: 'Zobowiązanie powinno być małe i wykonalne, np. „przed udostępnieniem otworzę źródło”.'
    },
    'm5-21-krotka-samoocena': {
      intro: 'Oceń pięć zdań na skali od 1 do 5.',
      steps: [
        'Przeczytaj każde zdanie osobno.',
        'Wybierz 1, gdy zdecydowanie się nie zgadzasz, albo 5, gdy zdecydowanie się zgadzasz.',
        'Odpowiedz na wszystkie pięć zdań.',
        'Po zakończeniu przeczytaj podsumowanie i wybierz jeden mały krok.'
      ],
      note: 'To samoocena, nie diagnoza dobrostanu ani ocena końcowa.'
    }
  };

  const makeGuide = config => {
    const aside = document.createElement('aside');
    aside.className = 'exercise-guide';
    aside.setAttribute('aria-label', 'Instrukcja wykonania ćwiczenia');
    aside.innerHTML = `<h4>Co masz zrobić?</h4><ol>${config.steps.map(step => `<li>${step}</li>`).join('')}</ol>${config.note ? `<p class="exercise-guide-note"><strong>Ważne:</strong> ${config.note}</p>` : ''}`;
    return aside;
  };

  const insertGuide = (section, config) => {
    if (!section || section.dataset.simpleGuide === '1') return;
    section.dataset.simpleGuide = '1';

    const exercise = section.querySelector('.exercise-compact');
    if (exercise) {
      const intro = exercise.querySelector('.exercise-intro');
      if (intro && config.intro) intro.textContent = config.intro;
      const guide = makeGuide(config);
      if (intro) intro.insertAdjacentElement('afterend', guide);
      else {
        const heading = exercise.querySelector('h3');
        if (heading) heading.insertAdjacentElement('afterend', guide);
        else exercise.prepend(guide);
      }
      return;
    }

    const reflection = section.querySelector('.course-callout--reflection');
    if (reflection) {
      const guide = makeGuide(config);
      const heading = reflection.querySelector('strong');
      if (config.intro) {
        const intro = document.createElement('p');
        intro.className = 'exercise-intro';
        intro.textContent = config.intro;
        if (heading) heading.insertAdjacentElement('afterend', intro);
        else reflection.prepend(intro);
        intro.insertAdjacentElement('afterend', guide);
      } else if (heading) heading.insertAdjacentElement('afterend', guide);
      else reflection.prepend(guide);
      return;
    }

    const body = section.querySelector('.course-section-body');
    if (!body) return;
    const guide = makeGuide(config);
    const anchor = body.querySelector('.compact-grid, .classification-select-list, .choice-grid, .compact-field, form, details.exercise-feedback');
    if (anchor) anchor.insertAdjacentElement('beforebegin', guide);
    else body.append(guide);
  };

  Object.entries(guides).forEach(([id, config]) => insertGuide(document.getElementById(id), config));
})();
