(function () {
  if (!window.EXERCISES) return;

  window.EXERCISES.email = [
    {
      "title": "Ćwiczenie: Odpowiedz na trudnego maila",
      "heading": "Spokojna odpowiedź bez ryzykownych deklaracji",
      "participantHeading": "Zadanie dla uczestników",
      "participantTask": `# Materiał dla uczestników
## Sytuacja zawodowa
Pracujecie w urzędzie i otrzymujecie wiadomość od osoby, która zgłosiła się do udziału w projekcie wspierającym rozwój kompetencji zawodowych. Osoba twierdzi, że nie została poinformowana o brakach w dokumentach, a teraz dowiaduje się, że termin na uzupełnienie minął.

Wiadomość jest emocjonalna. Nadawca sugeruje, że urząd popełnił błąd, pisze o niesprawiedliwym potraktowaniu i oczekuje pilnego wyjaśnienia. Jednocześnie nie podaje w mailu danych, które pozwalają od razu zidentyfikować sprawę. Nie ma numeru wniosku, daty złożenia dokumentów, informacji o projekcie ani adresu e-mail użytego w zgłoszeniu.

Na tym etapie pracownik nie wie, czy urząd faktycznie popełnił błąd. Nie wiadomo, czy informacja o brakach została wysłana, czy wiadomość trafiła do spamu, czy adres e-mail był wpisany poprawnie, czy termin rzeczywiście upłynął i czy sprawa dotyczy procedury, w której można wyznaczyć dodatkowy termin.

Odpowiedź musi więc być ostrożna. Powinna pokazać, że urząd traktuje wiadomość poważnie i chce sprawę sprawdzić. Nie może jednak przyznawać winy, obiecywać dodatkowego terminu ani zapowiadać ponownego rozpatrzenia sprawy bez weryfikacji.
---
## Mail wyjściowy
> Dzień dobry,
>
> jestem bardzo niezadowolony z tego, jak została potraktowana moja sprawa. Nikt mnie nie poinformował, że w dokumentach są jakieś braki, a teraz dowiaduję się, że termin na ich uzupełnienie minął. To jest dla mnie niezrozumiałe i niesprawiedliwe.
>
> Uważam, że urząd powinien rzetelnie informować uczestników, a nie przerzucać odpowiedzialność na osoby, które składają dokumenty. Gdybym otrzymał wiadomość wcześniej, na pewno bym zareagował.
>
> Proszę o pilne wyjaśnienie tej sytuacji i informację, kto odpowiada za ten błąd.
---
## Co wiadomo po przeczytaniu maila
Po przeczytaniu wiadomości wiadomo jedynie, że nadawca:
- jest niezadowolony,
- twierdzi, że nie otrzymał informacji o brakach,
- twierdzi, że termin na uzupełnienie dokumentów minął,
- uważa sytuację za niesprawiedliwą,
- oczekuje pilnego wyjaśnienia,
- sugeruje, że urząd popełnił błąd.

To są informacje wynikające z maila. Nie oznacza to jeszcze, że wszystkie twierdzenia zostały potwierdzone.
---
## Czego nie wiadomo
Po przeczytaniu maila nie wiadomo:
- jakiej dokładnie sprawy dotyczy wiadomość,
- którego projektu dotyczy zgłoszenie,
- jaki był numer wniosku,
- kiedy dokumenty zostały złożone,
- czy dokumenty rzeczywiście miały braki,
- czy informacja o brakach została wysłana,
- na jaki adres e-mail wysłano informację,
- czy adres e-mail był poprawny,
- czy wiadomość mogła trafić do spamu,
- czy termin rzeczywiście już upłynął,
- kto prowadził sprawę,
- czy po stronie urzędu wystąpił błąd,
- czy można wyznaczyć dodatkowy termin,
- czy sprawa może zostać ponownie rozpatrzona.

Tych informacji nie wolno dopowiadać. Odpowiedź powinna prowadzić do sprawdzenia sprawy, a nie do rozstrzygnięcia jej bez danych.
---
## Jaki powinien być ton odpowiedzi
Odpowiedź powinna być:
- spokojna,
- rzeczowa,
- uprzejma,
- profesjonalna,
- krótka,
- pozbawiona tonu obronnego,
- pozbawiona tonu oskarżycielskiego,
- nastawiona na wyjaśnienie sprawy.

Nie powinna być zimna ani automatyczna. Nadawca jest zdenerwowany, więc warto pokazać, że wiadomość została potraktowana poważnie. Nie trzeba jednak pisać emocjonalnie ani przepraszać za niepotwierdzony błąd.
---
## Dobre i ryzykowne sformułowania
Dobre sformułowania w tej sytuacji:
- „Dziękujemy za wiadomość.”
- „Rozumiemy, że opisana sytuacja wymaga wyjaśnienia.”
- „Abyśmy mogli sprawdzić sprawę, prosimy o przesłanie danych pozwalających ją zidentyfikować.”
- „Po weryfikacji dostępnych informacji przekażemy odpowiedź dotyczącą dalszego postępowania.”

Ryzykowne sformułowania:
- „Przepraszamy za błąd.”
- „Rzeczywiście doszło do zaniedbania.”
- „Wyznaczymy dodatkowy termin.”
- „Sprawa zostanie ponownie rozpatrzona.”
- „Osoba odpowiedzialna zostanie wskazana po analizie.”
- „To prawdopodobnie problem po stronie poczty.”
- „Informacja na pewno została wysłana.”
---
## Niedopracowany prompt do analizy
„Napisz uprzejmą odpowiedź na tego maila. Przeproś za błąd, napisz, że sprawa zostanie ponownie rozpatrzona i że uczestnik dostanie dodatkowy termin na uzupełnienie dokumentów.”

Ten prompt jest ryzykowny. Każe AI zrobić trzy rzeczy, których na tym etapie nie można bezpiecznie zrobić:
- przeprosić za błąd, który nie został potwierdzony,
- obiecać ponowne rozpatrzenie sprawy,
- obiecać dodatkowy termin.

W praktyce taki prompt może doprowadzić do odpowiedzi, która brzmi miło, ale tworzy zobowiązania albo przyznaje winę bez weryfikacji.
---
## Zadanie dla uczestników
Przygotujcie lepszy prompt do AI, który pomoże napisać odpowiedź na trudnego maila w sposób spokojny, profesjonalny i bezpieczny.

Nie chodzi o to, aby AI „ładnie odpisała”. Chodzi o to, żeby odpowiedź:
- nie eskalowała napięcia,
- pokazywała gotowość do wyjaśnienia sprawy,
- nie przyznawała winy bez sprawdzenia,
- nie obiecywała działań, których nie potwierdzono,
- prosiła o dane potrzebne do identyfikacji sprawy,
- była możliwa do wysłania po sprawdzeniu przez pracownika.

Następnie przygotujcie odpowiedź albo przetestujcie prompt w wybranym narzędziu AI.
---
## Co powinien zawierać dobry prompt
Wasz prompt powinien jasno powiedzieć AI:
- że odpowiada jako pracownik instytucji publicznej,
- że mail jest emocjonalny i wymaga spokojnej reakcji,
- że sprawa nie została jeszcze zweryfikowana,
- że nie wolno przyznawać winy urzędu,
- że nie wolno przepraszać za niepotwierdzony błąd,
- że nie wolno obiecywać dodatkowego terminu,
- że nie wolno obiecywać ponownego rozpatrzenia sprawy,
- że trzeba poprosić o dane pozwalające zidentyfikować sprawę,
- że odpowiedź ma być krótka, rzeczowa i profesjonalna,
- że ton ma być spokojny, ale nie chłodny,
- że odpowiedź nie może oskarżać nadawcy.
---
## Co musi znaleźć się w odpowiedzi
Odpowiedź powinna zawierać:
- podziękowanie za wiadomość,
- informację, że sprawa wymaga weryfikacji,
- prośbę o dane potrzebne do identyfikacji sprawy,
- informację, że po sprawdzeniu dostępnych informacji urząd przekaże odpowiedź,
- spokojny i profesjonalny ton.

Dane, o które można poprosić, to na przykład:
- imię i nazwisko,
- numer wniosku, jeśli został nadany,
- data złożenia dokumentów,
- nazwa projektu, którego dotyczy sprawa,
- adres e-mail wskazany w zgłoszeniu.
---
## Czego nie wolno dopisać
W odpowiedzi nie wolno:
- pisać, że urząd popełnił błąd,
- przepraszać za błąd, którego nie potwierdzono,
- obiecywać dodatkowego terminu,
- obiecywać ponownego rozpatrzenia sprawy,
- wskazywać osoby odpowiedzialnej,
- pisać, że wiadomość o brakach na pewno została wysłana,
- pisać, że nadawca czegoś nie dopilnował,
- sugerować winy nadawcy,
- dopisywać procedur, których nie ma w materiale,
- tworzyć numeru sprawy,
- powoływać się na regulamin, którego nie podano.
---
## Przebieg pracy
### Krok 1. Przeczytajcie mail
Przeczytajcie wiadomość spokojnie. Nie zaczynajcie od pisania odpowiedzi. Najpierw ustalcie, co w mailu jest emocją, a co jest informacją wymagającą sprawdzenia.

### Krok 2. Oddzielcie fakty od emocji
Wypiszcie dwie listy: co nadawca twierdzi oraz czego nadal nie wiemy.

### Krok 3. Przeanalizujcie niedopracowany prompt
Wskażcie, dlaczego prompt jest ryzykowny. Zastanówcie się, czy wiadomo, że urząd popełnił błąd, czy można obiecać dodatkowy termin i co można napisać zamiast tego.

### Krok 4. Przygotujcie lepszy prompt
Napiszcie prompt, który pomoże AI przygotować spokojną odpowiedź, ale nie pozwoli jej dopowiadać faktów ani składać obietnic.

### Krok 5. Przygotujcie odpowiedź
Jeżeli pracujecie z narzędziem AI, wklejcie prompt i mail do narzędzia. Jeżeli pracujecie bez AI, przygotujcie odpowiedź samodzielnie na podstawie promptu.

### Krok 6. Sprawdźcie odpowiedź
Sprawdźcie, czy odpowiedź nie przyznaje winy, nie obiecuje dodatkowego terminu, prosi o dane do weryfikacji i nie brzmi jak automatyczna formułka.
---
## Efekt pracy
Na końcu powinniście mieć:
1. poprawiony prompt do AI,
2. odpowiedź na trudnego maila,
3. listę 3 decyzji, które wprowadziliście do promptu,
4. jedną rzecz, którą pracownik powinien sprawdzić przed wysłaniem odpowiedzi.
---
## Checklista kontroli wyniku
Sprawdźcie, czy odpowiedź:
- dziękuje za wiadomość,
- informuje o konieczności sprawdzenia sprawy,
- prosi o dane potrzebne do identyfikacji,
- nie przyznaje winy bez weryfikacji,
- nie przeprasza za błąd, którego nie potwierdzono,
- nie obiecuje dodatkowego terminu,
- nie obiecuje ponownego rozpatrzenia sprawy,
- nie wskazuje osoby odpowiedzialnej,
- nie oskarża nadawcy,
- nie brzmi zbyt chłodno,
- jest możliwa do wysłania po sprawdzeniu przez pracownika.
---
## Przykład dobrego promptu
Jesteś pracownikiem instytucji publicznej przygotowującym odpowiedź na trudną wiadomość od osoby, która twierdzi, że nie otrzymała informacji o brakach w dokumentacji.

Przygotuj spokojną, rzeczową i profesjonalną odpowiedź. Mail nadawcy ma emocjonalny ton, ale sprawa nie została jeszcze zweryfikowana. Nie przyznawaj winy urzędu, nie przepraszaj za niepotwierdzony błąd, nie obiecuj dodatkowego terminu i nie obiecuj ponownego rozpatrzenia sprawy.

Podziękuj za wiadomość. Napisz, że opisana sytuacja wymaga sprawdzenia. Poproś o dane potrzebne do identyfikacji sprawy, na przykład imię i nazwisko, numer wniosku, datę złożenia dokumentów, nazwę projektu albo adres e-mail wskazany w zgłoszeniu.

Odpowiedź ma być krótka, uprzejma i spokojna. Unikaj tonu obronnego, oskarżycielskiego i zbyt formalnego. Nie dopisuj procedur, terminów, numerów spraw ani danych kontaktowych, których nie ma w materiale.

Mail do odpowiedzi:
[WKLEJ MAIL]
---
## Przykład odpowiedzi
Dzień dobry,

dziękujemy za wiadomość. Rozumiemy, że opisana sytuacja wymaga wyjaśnienia.

Abyśmy mogli sprawdzić sprawę w dokumentacji, prosimy o przesłanie danych pozwalających ją zidentyfikować, na przykład imienia i nazwiska, numeru wniosku, daty złożenia dokumentów, nazwy projektu lub adresu e-mail wskazanego w zgłoszeniu.

Po weryfikacji dostępnych informacji przekażemy odpowiedź dotyczącą dalszego postępowania w sprawie.

Z poważaniem
---
## Przykład notatki po pracy
Nie przeprosiliśmy za błąd, ponieważ nie wiadomo jeszcze, czy błąd rzeczywiście wystąpił.

Nie obiecaliśmy dodatkowego terminu, ponieważ nie mamy informacji, czy w tej procedurze można go wyznaczyć.

Poprosiliśmy o dane identyfikujące sprawę, ponieważ bez nich urząd nie może sprawdzić dokumentacji.

Użyliśmy spokojnego tonu, ponieważ odpowiedź ma obniżyć napięcie, ale nie może zawierać niepotwierdzonych deklaracji.`,
      "screenHeading": "Zadanie dla uczestników",
      "screenTask": `## Mail do odpowiedzi
„Jestem bardzo niezadowolony z tego, jak została potraktowana moja sprawa. Nikt mnie nie poinformował, że w dokumentach są jakieś braki, a teraz dowiaduję się, że termin na ich uzupełnienie minął. To jest dla mnie niezrozumiałe i niesprawiedliwe. Proszę o pilne wyjaśnienie tej sytuacji i informację, kto odpowiada za ten błąd.”

## Niedopracowany prompt
„Napisz uprzejmą odpowiedź na tego maila. Przeproś za błąd, napisz, że sprawa zostanie ponownie rozpatrzona i że uczestnik dostanie dodatkowy termin na uzupełnienie dokumentów.”

## Wasze zadanie
Przygotujcie prompt do spokojnej odpowiedzi. Odpowiedź ma traktować sprawę poważnie, ale nie może przyznawać winy, przepraszać za niepotwierdzony błąd, obiecywać dodatkowego terminu ani ponownego rozpatrzenia sprawy.

## Efekt pracy
1. Prompt do AI.
2. Odpowiedź na maila.
3. Trzy decyzje, które zabezpieczają odpowiedź.
4. Jedna rzecz do sprawdzenia przed wysłaniem.`,
      "printTask": `# Karta pracy dla uczestników
## Sytuacja
Otrzymujecie emocjonalnego maila od osoby, która twierdzi, że nie dostała informacji o brakach w dokumentach, a termin na uzupełnienie już minął. Nie ma danych pozwalających od razu zidentyfikować sprawę.

## Mail wyjściowy
Dzień dobry,

jestem bardzo niezadowolony z tego, jak została potraktowana moja sprawa. Nikt mnie nie poinformował, że w dokumentach są jakieś braki, a teraz dowiaduję się, że termin na ich uzupełnienie minął. To jest dla mnie niezrozumiałe i niesprawiedliwe.

Uważam, że urząd powinien rzetelnie informować uczestników, a nie przerzucać odpowiedzialność na osoby, które składają dokumenty. Gdybym otrzymał wiadomość wcześniej, na pewno bym zareagował.

Proszę o pilne wyjaśnienie tej sytuacji i informację, kto odpowiada za ten błąd.

## Niedopracowany prompt
„Napisz uprzejmą odpowiedź na tego maila. Przeproś za błąd, napisz, że sprawa zostanie ponownie rozpatrzona i że uczestnik dostanie dodatkowy termin na uzupełnienie dokumentów.”

## Wasze zadanie
Przygotujcie lepszy prompt do AI i odpowiedź na maila. Odpowiedź ma być spokojna, rzeczowa i profesjonalna.

## Trzeba uwzględnić
- sprawa wymaga weryfikacji,
- trzeba poprosić o dane identyfikujące sprawę,
- odpowiedź nie może eskalować napięcia,
- ton ma być uprzejmy, ale ostrożny.

## Nie wolno dopisać
- winy urzędu,
- przeprosin za niepotwierdzony błąd,
- dodatkowego terminu,
- obietnicy ponownego rozpatrzenia,
- osoby odpowiedzialnej,
- procedur, regulaminu, numeru sprawy ani danych kontaktowych, których nie ma w materiale.

## Efekt pracy
1. Prompt do AI.
2. Odpowiedź na maila.
3. Trzy decyzje w promptcie.
4. Jedna rzecz do sprawdzenia przed wysłaniem.

## Checklista
Czy odpowiedź dziękuje za wiadomość, prosi o dane do weryfikacji, nie przyznaje winy, nie obiecuje dodatkowego terminu i brzmi spokojnie?`,
      "guide": `# Ćwiczenie 3. Odpowiedz na trudnego maila
## Opis ćwiczenia
Uczestnicy pracują z wiadomością e-mail od osoby niezadowolonej z obsługi sprawy w urzędzie. Nadawca pisze emocjonalnie, używa mocnych sformułowań i oczekuje szybkiego wyjaśnienia. To sytuacja bliska codziennej pracy administracyjnej: pracownik musi odpowiedzieć spokojnie, ale nie może pisać czegoś, czego nie wie albo czego nie może obiecać.

AI może pomóc uporządkować odpowiedź, złagodzić ton i uniknąć reakcji emocjonalnej. Jednocześnie może popełnić błąd: przeprosić za winę, której nie potwierdzono, obiecać dodatkowy termin albo zapowiedzieć ponowne rozpatrzenie sprawy.

Ćwiczenie pokazuje, że w trudnej komunikacji AI może być wsparciem językowym, ale nie zastępuje ustalenia faktów ani decyzji pracownika.
---
## Cel ćwiczenia
Uczestnicy uczą się korzystać z AI przy przygotowywaniu odpowiedzi na trudne wiadomości bez eskalowania napięcia i bez tworzenia ryzykownych deklaracji.

Po ćwiczeniu powinni umieć:
- oddzielić emocje od informacji,
- wskazać, czego nie wiadomo po przeczytaniu maila,
- przygotować prompt do spokojnej odpowiedzi,
- zabronić AI przyznawania winy bez weryfikacji,
- zabronić AI obiecywania dodatkowego terminu lub rozstrzygnięcia,
- sprawdzić, czy odpowiedź AI nie jest zbyt defensywna, chłodna albo uległa.
---
## Kiedy użyć ćwiczenia
Ćwiczenie warto przeprowadzić po ćwiczeniach o promptach i redakcji tekstu urzędowego. Dobrze pasuje do części szkolenia o komunikacji mailowej, obsłudze osób niezadowolonych, bezpieczeństwie językowym i sprawdzaniu odpowiedzi AI.
---
## Materiał uczestnika
Materiał uczestnika jest pokazany powyżej w sekcji „Zadanie dla uczestników” oraz w wersji do druku. W scenariuszu prowadzącego nie powtarzamy go ponownie, żeby panel był krótszy i łatwiejszy do prowadzenia szkolenia.
---
## Jak wprowadzić ćwiczenie
Prowadzący może rozpocząć tak:

„W tym ćwiczeniu sprawdzimy, jak AI może pomóc w przygotowaniu odpowiedzi na trudnego maila. Ważne jest jednak, żeby nie traktować AI jako narzędzia, które samo rozstrzyga sprawę. AI może pomóc dobrać ton, uporządkować odpowiedź i uniknąć emocjonalnej reakcji. Nie może jednak przyznawać winy, obiecywać dodatkowych terminów ani dopowiadać procedur, jeśli nie mamy potwierdzonych informacji.”
---
## Co prowadzący powinien podkreślić
Najważniejsze jest oddzielenie emocji od faktów. Mail jest stanowczy, ale nie zawiera pełnych danych. Odpowiedź powinna być życzliwa i spokojna, ale nie może potwierdzać zarzutów bez sprawdzenia.

Warto podkreślić:
- emocjonalny ton nadawcy nie oznacza, że sprawa jest wyjaśniona,
- odpowiedź nie może być agresywna ani defensywna,
- nie wolno obiecywać działań bez podstawy,
- można okazać zrozumienie bez przyznawania winy,
- AI musi dostać jasne granice odpowiedzi,
- wynik AI trzeba sprawdzić pod kątem obietnic i dopowiedzeń.
---
## Pytania do omówienia
- Które fragmenty maila były emocjonalne?
- Czego nie wiemy po przeczytaniu wiadomości?
- Dlaczego niedopracowany prompt jest ryzykowny?
- Jak można okazać zrozumienie bez przyznawania winy?
- Jakie dane są potrzebne do sprawdzenia sprawy?
- Czy odpowiedź AI nie obiecała zbyt wiele?
- Czy odpowiedź brzmi spokojnie, ale nie jest zbyt chłodna?
- Co człowiek powinien sprawdzić przed wysłaniem wiadomości?
---
## Typowe błędy uczestników i reakcje prowadzącego
### Błąd 1. Uczestnicy przepraszają za błąd
Komentarz prowadzącego: „To brzmi uprzejmie, ale oznacza przyznanie, że błąd wystąpił. Na tym etapie tego nie wiemy. Możemy napisać, że sprawa wymaga wyjaśnienia.”

### Błąd 2. Uczestnicy obiecują dodatkowy termin
Komentarz prowadzącego: „Nie mamy informacji, czy można wyznaczyć dodatkowy termin. Możemy napisać, że po sprawdzeniu sprawy przekażemy informację o dalszym postępowaniu.”

### Błąd 3. Odpowiedź brzmi zbyt chłodno
Komentarz prowadzącego: „To może być poprawne, ale brzmi automatycznie. Warto zacząć od krótkiego podziękowania i informacji, że sprawa zostanie sprawdzona.”

### Błąd 4. Odpowiedź oskarża nadawcę
Komentarz prowadzącego: „Uważajmy na sformułowania, które brzmią jak przerzucenie odpowiedzialności. Lepiej neutralnie poprosić o dane potrzebne do identyfikacji sprawy.”
---
## Wariant bez logowania do narzędzi AI
Uczestnicy czytają mail i kontekst, wypisują emocje, fakty i braki informacyjne, przygotowują prompt oraz odpowiedź ręcznie. Prowadzący może przetestować jeden wybrany prompt na ekranie.
---
## Wariant trudniejszy
Grupa przygotowuje dwie wersje odpowiedzi: neutralną i formalną oraz bardziej empatyczną, ale nadal bez przyznawania winy. Następnie porównuje, która lepiej obniża napięcie i nie tworzy zobowiązań.`,
      "hint": `## Podpowiedzi
- Najpierw oddzielcie emocje od faktów.
- Można okazać zrozumienie bez przyznawania winy.
- Nie obiecujcie dodatkowego terminu, jeśli nie wiadomo, czy procedura na to pozwala.
- Poproście AI o odpowiedź krótką, spokojną i bez tonu obronnego.
- Odpowiedź ma prowadzić do weryfikacji sprawy, a nie rozstrzygać ją bez danych.`,
      "check": `## Checklista kontroli wyniku
Sprawdźcie, czy odpowiedź:
- dziękuje za wiadomość,
- informuje o konieczności sprawdzenia sprawy,
- prosi o dane potrzebne do identyfikacji,
- nie przyznaje winy bez weryfikacji,
- nie przeprasza za błąd, którego nie potwierdzono,
- nie obiecuje dodatkowego terminu,
- nie obiecuje ponownego rozpatrzenia sprawy,
- nie wskazuje osoby odpowiedzialnej,
- nie oskarża nadawcy,
- nie brzmi zbyt chłodno,
- jest możliwa do wysłania po sprawdzeniu przez pracownika.`,
      "sample": `## Przykład dobrego promptu
Jesteś pracownikiem instytucji publicznej przygotowującym odpowiedź na trudną wiadomość od osoby, która twierdzi, że nie otrzymała informacji o brakach w dokumentacji.

Przygotuj spokojną, rzeczową i profesjonalną odpowiedź. Mail nadawcy ma emocjonalny ton, ale sprawa nie została jeszcze zweryfikowana. Nie przyznawaj winy urzędu, nie przepraszaj za niepotwierdzony błąd, nie obiecuj dodatkowego terminu i nie obiecuj ponownego rozpatrzenia sprawy.

Podziękuj za wiadomość. Napisz, że opisana sytuacja wymaga sprawdzenia. Poproś o dane potrzebne do identyfikacji sprawy, na przykład imię i nazwisko, numer wniosku, datę złożenia dokumentów, nazwę projektu albo adres e-mail wskazany w zgłoszeniu.

Odpowiedź ma być krótka, uprzejma i spokojna. Unikaj tonu obronnego, oskarżycielskiego i zbyt formalnego. Nie dopisuj procedur, terminów, numerów spraw ani danych kontaktowych, których nie ma w materiale.

Mail do odpowiedzi:
[WKLEJ MAIL]

## Przykład odpowiedzi
Dzień dobry,

dziękujemy za wiadomość. Rozumiemy, że opisana sytuacja wymaga wyjaśnienia.

Abyśmy mogli sprawdzić sprawę w dokumentacji, prosimy o przesłanie danych pozwalających ją zidentyfikować, na przykład imienia i nazwiska, numeru wniosku, daty złożenia dokumentów, nazwy projektu lub adresu e-mail wskazanego w zgłoszeniu.

Po weryfikacji dostępnych informacji przekażemy odpowiedź dotyczącą dalszego postępowania w sprawie.

Z poważaniem`,
      "result": "prompt do odpowiedzi, spokojny szkic maila, 3 decyzje zabezpieczające i jedna rzecz do sprawdzenia",
      "discuss": `## Pytania do omówienia
- Co w mailu było emocją, a co konkretną informacją?
- Czego nie wiemy po przeczytaniu wiadomości?
- Które zdanie w odpowiedzi obniża napięcie?
- Które sformułowanie byłoby ryzykowną obietnicą?
- Jak można okazać zrozumienie bez przyznawania winy?`,
      "intro": "Uczestnicy przygotowują spokojną odpowiedź na emocjonalnego maila, bez przyznawania winy i bez obietnic, których nie potwierdzono.",
      "time": "18-24 min",
      "form": "praca w parach albo w małych grupach po 3 osoby",
      "steps": [
        "Przeczytajcie mail i oddzielcie emocje od informacji wymagających sprawdzenia.",
        "Wypiszcie, co nadawca twierdzi i czego nadal nie wiadomo.",
        "Przeanalizujcie niedopracowany prompt i wskażcie ryzyka.",
        "Napiszcie lepszy prompt z jasnymi granicami odpowiedzi.",
        "Przygotujcie odpowiedź i sprawdźcie ją z checklistą.",
        "Zapiszcie 3 decyzje w promptcie oraz jedną rzecz do sprawdzenia przed wysłaniem."
      ]
    }
  ];

  window.EXERCISES.meeting = [
    {
      "title": "Ćwiczenie: Uporządkuj notatkę ze spotkania",
      "heading": "Od chaotycznych zapisków do decyzji, zadań i spraw do doprecyzowania",
      "participantHeading": "Zadanie dla uczestników",
      "participantTask": `# Materiał dla uczestników
## Sytuacja zawodowa
W zespole odbyło się krótkie spotkanie robocze dotyczące organizacji wydarzenia informacyjnego dla pracowników urzędów pracy. Wydarzenie ma dotyczyć praktycznego wykorzystania narzędzi cyfrowych i AI w pracy biurowej. Spotkanie nie było formalnym posiedzeniem. Nie przygotowano protokołu. Jedna osoba robiła notatki na bieżąco, skrótowo i bez porządkowania.

Po spotkaniu trzeba przygotować krótkie podsumowanie dla zespołu. Z podsumowania powinno wynikać, co ustalono, co trzeba zrobić, kto ma się czym zająć i które sprawy wymagają doprecyzowania.

Problem polega na tym, że notatka jest chaotyczna. Niektóre zdania wyglądają jak ustalenia, ale w rzeczywistości są tylko propozycjami. W kilku miejscach pojawia się słowo „trzeba”, ale nie wiadomo, kto ma wykonać zadanie. Część terminów jest ogólna, na przykład „do końca tygodnia” albo „do wtorku”. Nie wiadomo też, czy wszystkie decyzje zostały zatwierdzone.

Waszym zadaniem jest przygotować prompt, który pomoże AI uporządkować notatkę bez wymyślania brakujących informacji.
---
## Chaotyczna notatka ze spotkania
Spotkanie dot. wydarzenia informacyjnego dla pracowników urzędów pracy. Termin chyba druga połowa czerwca, ale sala jeszcze niepotwierdzona. Trzeba sprawdzić dostępność sali konferencyjnej i ewentualnie sali 203. Kto to sprawdzi? Nie zapisano.

Zaproszenia do PUP raczej mailowo. Lista kontaktów jest u Ani, ale nie wiadomo, czy aktualna. Ania mówiła, że ma starą listę z poprzedniego wydarzenia i trzeba ją przejrzeć. Nie ustalono, czy zrobi to sama, czy ktoś jej pomoże.

Łukasz może przygotować tekst zaproszenia, ale dopiero jak będzie program. Program jeszcze niegotowy. Tematy wstępne: AI w pracy urzędu, cyberbezpieczeństwo, komunikacja z klientem. Padła propozycja krótkiego modułu o fake newsach, ale bez decyzji.

Formularz zgłoszeniowy trzeba zrobić w Google Forms albo Microsoft Forms. Nie ustalono narzędzia. Ktoś powiedział, że jeśli będzie Google Forms, łatwiej zrobić QR do formularza. QR przyda się na plakacie i w mailu.

Materiały: prezentacja główna, lista obecności, ankieta po wydarzeniu. Certyfikaty raczej nie, ale trzeba sprawdzić, czy uczestnicy ich oczekują. Nie wiadomo, kto ma to sprawdzić.

Do końca tygodnia trzeba mieć wstępny opis wydarzenia. Program najlepiej do wtorku. Sala pilna, bo bez sali nie można wysłać zaproszeń.

Kto wysyła zaproszenia? Nie ustalono. Może sekretariat, ale trzeba zapytać.

Grafika do informacji na stronę - może Canva. Trzeba dodać logo projektu i WUP. Nie ustalono, kto przygotuje grafikę.

Następne spotkanie po ustaleniu sali. Nie wpisano daty.
---
## Co wiadomo z notatki
Z notatki wynika, że:
- planowane jest wydarzenie informacyjne dla pracowników urzędów pracy,
- termin jest wstępnie rozważany na drugą połowę czerwca,
- sala nie została potwierdzona,
- trzeba sprawdzić salę konferencyjną i salę 203,
- zaproszenia mają być prawdopodobnie wysyłane mailowo,
- lista kontaktów do PUP jest u Ani, ale może być nieaktualna,
- Łukasz może przygotować tekst zaproszenia po otrzymaniu programu,
- program nie jest jeszcze gotowy,
- wstępne tematy to AI w pracy urzędu, cyberbezpieczeństwo i komunikacja z klientem,
- moduł o fake newsach jest tylko propozycją,
- formularz zgłoszeniowy trzeba przygotować, ale nie ustalono narzędzia,
- QR do formularza może być potrzebny na plakacie i w mailu,
- potrzebne będą prezentacja, lista obecności i ankieta,
- certyfikaty raczej nie są planowane, ale trzeba sprawdzić oczekiwania uczestników,
- wstępny opis wydarzenia ma być gotowy do końca tygodnia,
- program najlepiej przygotować do wtorku,
- zaproszeń nie można wysłać bez ustalenia sali,
- nie ustalono, kto wyśle zaproszenia,
- grafika może być przygotowana w Canvie,
- trzeba dodać logo projektu i WUP,
- następne spotkanie ma się odbyć po ustaleniu sali.
---
## Czego nie wiadomo
Z notatki nie wynika:
- dokładna data wydarzenia,
- konkretna godzina wydarzenia,
- ostateczna sala,
- osoba odpowiedzialna za sprawdzenie sali,
- osoba odpowiedzialna za przygotowanie formularza,
- narzędzie do formularza,
- osoba odpowiedzialna za QR,
- osoba odpowiedzialna za sprawdzenie oczekiwań dotyczących certyfikatów,
- osoba odpowiedzialna za wysłanie zaproszeń,
- osoba odpowiedzialna za grafikę,
- data następnego spotkania,
- ostateczny program wydarzenia,
- decyzja dotycząca modułu o fake newsach.

Tych informacji AI nie może wymyślać. Jeżeli nie wynikają z notatki, powinny być oznaczone jako „do ustalenia”, „brak informacji” albo „nie podjęto decyzji”.
---
## Niedopracowany prompt do analizy
„Uporządkuj te notatki ze spotkania. Zrób tabelę zadań z osobami odpowiedzialnymi i terminami. Dopisz brakujące osoby i terminy, żeby tabela była kompletna i gotowa do wysłania zespołowi.”

Ten prompt jest ryzykowny. Zachęca AI do stworzenia kompletnej tabeli nawet tam, gdzie w notatce nie ma kompletnych informacji. AI może dopisać osoby odpowiedzialne, wymyślić terminy albo potraktować propozycje jako decyzje.

W efekcie z chaotycznej notatki może powstać dokument, który wygląda profesjonalnie, ale zawiera ustalenia, których nie było na spotkaniu.
---
## Zadanie dla uczestników
Przygotujcie lepszy prompt do AI, który pozwoli uporządkować notatkę bez wymyślania brakujących informacji.

Prompt powinien pomóc AI przygotować:
- krótkie podsumowanie spotkania,
- listę decyzji, które rzeczywiście podjęto,
- listę propozycji, które nie są jeszcze decyzjami,
- tabelę zadań,
- osoby odpowiedzialne tylko wtedy, gdy wynikają z notatki,
- terminy tylko wtedy, gdy wynikają z notatki,
- listę spraw do doprecyzowania,
- listę ryzyk organizacyjnych.

Jeżeli w notatce brakuje osoby odpowiedzialnej albo terminu, AI powinna wpisać „do ustalenia” albo „brak informacji”, a nie tworzyć pozorne ustalenie.
---
## Co powinien zawierać dobry prompt
Wasz prompt powinien jasno powiedzieć AI:
- że ma uporządkować chaotyczne notatki robocze,
- że nie może dopisywać decyzji, osób odpowiedzialnych ani terminów,
- że ma odróżnić decyzje od propozycji,
- że ma oznaczać braki informacyjne,
- że ma przygotować tabelę zadań,
- że ma wskazać sprawy do doprecyzowania,
- że ma wskazać ryzyka organizacyjne,
- że ma użyć neutralnego, rzeczowego języka,
- że wynik ma być materiałem roboczym do sprawdzenia przez zespół.
---
## Co musi zostać zachowane w uporządkowanej wersji
W uporządkowanej wersji powinny zostać zachowane wszystkie istotne informacje z notatki, w tym:
- niepotwierdzona sala,
- wstępny termin w drugiej połowie czerwca,
- nieaktualna lub wymagająca sprawdzenia lista kontaktów,
- warunkowa gotowość Łukasza do przygotowania zaproszenia,
- brak gotowego programu,
- propozycja modułu o fake newsach bez decyzji,
- brak decyzji dotyczącej narzędzia do formularza,
- potrzeba QR do formularza,
- niepewność dotycząca certyfikatów,
- pilność ustalenia sali,
- brak osoby odpowiedzialnej za wysyłkę zaproszeń,
- brak osoby odpowiedzialnej za grafikę,
- brak daty kolejnego spotkania.
---
## Czego nie wolno dopisać
W uporządkowanej wersji nie wolno dopisywać:
- dokładnej daty wydarzenia,
- godziny wydarzenia,
- konkretnej sali,
- osoby odpowiedzialnej za sprawdzenie sali, jeśli nie została wskazana,
- osoby odpowiedzialnej za formularz, jeśli nie została wskazana,
- osoby odpowiedzialnej za QR, jeśli nie została wskazana,
- decyzji, że moduł o fake newsach będzie w programie,
- decyzji, że certyfikaty nie będą przygotowywane,
- decyzji, że zaproszenia wyśle sekretariat,
- daty następnego spotkania,
- ostatecznego programu wydarzenia.
---
## Przebieg pracy
### Krok 1. Przeczytajcie notatkę
Przeczytajcie notatkę w całości. Nie porządkujcie jej od razu. Najpierw spróbujcie zrozumieć, jakie informacje są pewne, a które są niejasne.

### Krok 2. Oznaczcie typy informacji
Podzielcie informacje na cztery grupy: decyzje, propozycje, zadania, sprawy do ustalenia.

### Krok 3. Przeanalizujcie niedopracowany prompt
Wskażcie, dlaczego prompt jest niebezpieczny. Zastanówcie się, co może dopisać AI, które propozycje może uznać za decyzje i dlaczego „do ustalenia” jest czasem lepsze niż fałszywa pewność.

### Krok 4. Przygotujcie lepszy prompt
Napiszcie prompt, który pozwoli AI uporządkować notatkę, ale nie pozwoli jej wymyślać brakujących informacji.

### Krok 5. Przygotujcie uporządkowaną wersję
Wynik powinien mieć logiczny układ: podsumowanie, decyzje, propozycje, tabela zadań, sprawy do doprecyzowania i ryzyka.

### Krok 6. Sprawdźcie wynik
Porównajcie uporządkowaną wersję z notatką źródłową. Sprawdźcie, czy AI nie dopisała właścicieli zadań, terminów ani decyzji.
---
## Efekt pracy
Na końcu powinniście mieć:
1. poprawiony prompt do AI,
2. uporządkowaną wersję notatki,
3. tabelę zadań,
4. listę spraw do doprecyzowania,
5. jedną rzecz, którą zespół powinien ustalić w pierwszej kolejności.
---
## Checklista kontroli wyniku
Sprawdźcie, czy uporządkowana notatka:
- odróżnia decyzje od propozycji,
- nie dopisuje osób odpowiedzialnych,
- nie dopisuje terminów,
- oznacza brakujące informacje,
- pokazuje, że sala nie jest potwierdzona,
- pokazuje, że program nie jest gotowy,
- pokazuje, że moduł o fake newsach jest tylko propozycją,
- pokazuje, że nie ustalono narzędzia do formularza,
- pokazuje, że certyfikaty są sprawą do sprawdzenia,
- pokazuje, że nie ustalono osoby wysyłającej zaproszenia,
- pokazuje najważniejsze ryzyka organizacyjne,
- nadaje się do sprawdzenia przez zespół.
---
## Przykład dobrego promptu
Jesteś asystentem organizacyjnym. Uporządkuj poniższe robocze notatki ze spotkania.

Przygotuj:
1. krótkie podsumowanie spotkania,
2. listę decyzji, które rzeczywiście zostały podjęte,
3. listę propozycji, które nie są jeszcze decyzjami,
4. tabelę zadań z kolumnami: zadanie, osoba odpowiedzialna, termin, status informacji, uwagi,
5. listę spraw do doprecyzowania,
6. listę ryzyk organizacyjnych.

Nie dopisuj osób odpowiedzialnych, terminów ani decyzji, jeśli nie wynikają bezpośrednio z notatki. Jeżeli czegoś brakuje, wpisz „do ustalenia”, „brak informacji” albo „nie podjęto decyzji”. Odróżnij zadania pewne od zadań warunkowych.

Użyj rzeczowego języka. Wynik ma być materiałem roboczym do sprawdzenia przez zespół, a nie formalnym protokołem.

Notatki:
[WKLEJ NOTATKI]
---
## Przykład fragmentu uporządkowanej tabeli
| Zadanie | Osoba odpowiedzialna | Termin | Status informacji | Uwagi |
|---|---|---|---|---|
| Sprawdzenie dostępności sali konferencyjnej i sali 203 | do ustalenia | pilne | zadanie wskazane, brak właściciela | bez sali nie można wysłać zaproszeń |
| Przegląd listy kontaktów do PUP | Ania / do ustalenia | do ustalenia | Ania ma starą listę, nie ustalono kto ją aktualizuje | wymaga potwierdzenia |
| Przygotowanie tekstu zaproszenia | Łukasz | po przygotowaniu programu | zadanie warunkowe | Łukasz może przygotować tekst po otrzymaniu programu |
| Przygotowanie programu wydarzenia | do ustalenia | najlepiej do wtorku | termin wskazany, brak właściciela | program potrzebny do zaproszenia |
| Przygotowanie formularza zgłoszeniowego | do ustalenia | do ustalenia | nie ustalono narzędzia ani osoby | Google Forms lub Microsoft Forms |
---
## Przykład listy spraw do doprecyzowania
Do doprecyzowania pozostają:
- dokładny termin wydarzenia,
- sala,
- osoba odpowiedzialna za sprawdzenie sali,
- ostateczny program,
- decyzja dotycząca modułu o fake newsach,
- narzędzie do formularza zgłoszeniowego,
- osoba odpowiedzialna za formularz,
- osoba odpowiedzialna za wysyłkę zaproszeń,
- decyzja dotycząca certyfikatów,
- osoba odpowiedzialna za grafikę,
- data kolejnego spotkania.
---
## Przykład notatki po pracy
Nie dopisaliśmy osoby odpowiedzialnej za salę, ponieważ w notatce nie wskazano, kto ma to sprawdzić.

Oznaczyliśmy przygotowanie tekstu zaproszenia jako zadanie warunkowe, ponieważ Łukasz może je przygotować dopiero po otrzymaniu programu.

Nie wpisaliśmy modułu o fake newsach jako części programu, ponieważ w notatce była tylko propozycja bez decyzji.

Nie uznaliśmy, że certyfikaty nie będą przygotowywane, ponieważ zapis „raczej nie” nie jest ostateczną decyzją.`,
      "screenHeading": "Zadanie dla uczestników",
      "screenTask": `## Chaotyczna notatka
Termin chyba druga połowa czerwca, ale sala jeszcze niepotwierdzona. Trzeba sprawdzić salę konferencyjną i salę 203. Zaproszenia do PUP raczej mailowo. Lista kontaktów jest u Ani, ale nie wiadomo, czy aktualna. Łukasz może przygotować tekst zaproszenia, ale dopiero jak będzie program. Program jeszcze niegotowy. Padła propozycja modułu o fake newsach, ale bez decyzji. Formularz trzeba zrobić w Google Forms albo Microsoft Forms, ale nie ustalono narzędzia. Certyfikaty raczej nie, ale trzeba sprawdzić oczekiwania. Kto wysyła zaproszenia? Nie ustalono. Grafika może Canva. Następne spotkanie po ustaleniu sali. Nie wpisano daty.

## Niedopracowany prompt
„Uporządkuj te notatki ze spotkania. Zrób tabelę zadań z osobami odpowiedzialnymi i terminami. Dopisz brakujące osoby i terminy, żeby tabela była kompletna i gotowa do wysłania zespołowi.”

## Wasze zadanie
Przygotujcie prompt, który uporządkuje notatkę, ale nie pozwoli AI wymyślać osób, terminów ani decyzji.

## Efekt pracy
1. Prompt do AI.
2. Podsumowanie spotkania.
3. Tabela zadań.
4. Lista spraw do doprecyzowania.
5. Jedna rzecz do ustalenia w pierwszej kolejności.`,
      "printTask": `# Karta pracy dla uczestników
## Sytuacja
Po spotkaniu roboczym trzeba uporządkować chaotyczne notatki dotyczące wydarzenia informacyjnego dla pracowników urzędów pracy. Trzeba oddzielić decyzje od propozycji, zadania od niejasności i nie dopisywać brakujących informacji.

## Notatka ze spotkania
Termin chyba druga połowa czerwca, ale sala jeszcze niepotwierdzona. Trzeba sprawdzić dostępność sali konferencyjnej i sali 203. Kto to sprawdzi? Nie zapisano.

Zaproszenia do PUP raczej mailowo. Lista kontaktów jest u Ani, ale nie wiadomo, czy aktualna. Ania ma starą listę z poprzedniego wydarzenia i trzeba ją przejrzeć. Nie ustalono, czy zrobi to sama, czy ktoś jej pomoże.

Łukasz może przygotować tekst zaproszenia, ale dopiero jak będzie program. Program jeszcze niegotowy. Tematy wstępne: AI w pracy urzędu, cyberbezpieczeństwo, komunikacja z klientem. Padła propozycja modułu o fake newsach, ale bez decyzji.

Formularz zgłoszeniowy trzeba zrobić w Google Forms albo Microsoft Forms. Nie ustalono narzędzia. QR przyda się na plakacie i w mailu.

Materiały: prezentacja główna, lista obecności, ankieta po wydarzeniu. Certyfikaty raczej nie, ale trzeba sprawdzić, czy uczestnicy ich oczekują. Nie wiadomo, kto ma to sprawdzić.

Do końca tygodnia trzeba mieć wstępny opis wydarzenia. Program najlepiej do wtorku. Sala pilna, bo bez sali nie można wysłać zaproszeń.

Kto wysyła zaproszenia? Nie ustalono. Może sekretariat, ale trzeba zapytać. Grafika do informacji na stronę - może Canva. Trzeba dodać logo projektu i WUP. Nie ustalono, kto przygotuje grafikę. Następne spotkanie po ustaleniu sali. Nie wpisano daty.

## Niedopracowany prompt
„Uporządkuj te notatki ze spotkania. Zrób tabelę zadań z osobami odpowiedzialnymi i terminami. Dopisz brakujące osoby i terminy, żeby tabela była kompletna i gotowa do wysłania zespołowi.”

## Wasze zadanie
Przygotujcie lepszy prompt do AI i uporządkowaną wersję notatki.

## Prompt powinien wymagać
- krótkiego podsumowania,
- listy decyzji,
- listy propozycji,
- tabeli zadań,
- oznaczania braków jako „do ustalenia”,
- listy spraw do doprecyzowania,
- listy ryzyk organizacyjnych.

## Nie wolno dopisać
- daty, godziny ani sali,
- osób odpowiedzialnych, jeśli ich nie wskazano,
- decyzji o module fake news,
- decyzji o certyfikatach,
- decyzji, że zaproszenia wyśle sekretariat,
- daty następnego spotkania.

## Efekt pracy
1. Prompt do AI.
2. Uporządkowana notatka.
3. Tabela zadań.
4. Lista spraw do doprecyzowania.
5. Jedna rzecz do ustalenia w pierwszej kolejności.`,
      "guide": `# Ćwiczenie 4. Uporządkuj notatkę ze spotkania
## Opis ćwiczenia
Uczestnicy pracują z chaotyczną notatką ze spotkania roboczego. Po naradzie zostają szybkie zapiski, skróty myślowe, fragmenty ustaleń i kilka spraw, które „ktoś miał sprawdzić”. Część informacji jest jasna, część niepełna, a część brzmi jak decyzja, choć była tylko propozycją.

AI może pomóc przygotować podsumowanie, tabelę zadań, listę decyzji i spraw do doprecyzowania. Problem polega na tym, że AI ma tendencję do domykania luk. Jeśli w notatce nie podano osoby odpowiedzialnej, narzędzie może ją dopisać. Jeśli termin brzmi niejasno, AI może zamienić go w konkretną datę.

Ćwiczenie pokazuje, że dobre wykorzystanie AI w organizacji pracy nie polega na tym, aby narzędzie „ładnie uporządkowało chaos” za wszelką cenę. Chodzi o uporządkowanie tego, co naprawdę wynika z notatki, i jasne oznaczenie tego, czego jeszcze nie ustalono.
---
## Cel ćwiczenia
Uczestnicy uczą się pracy z AI przy porządkowaniu roboczych notatek, bez tworzenia fikcyjnych decyzji i pozornych ustaleń.

Po ćwiczeniu powinni umieć:
- odróżniać decyzje od propozycji,
- wyciągać zadania z chaotycznego tekstu,
- wskazywać osoby odpowiedzialne tylko wtedy, gdy wynikają z materiału,
- oznaczać brakujące informacje jako „do ustalenia”,
- tworzyć tabelę zadań bez dopowiadania faktów,
- sprawdzić, czy AI nie stworzyła fałszywej pewności.
---
## Kiedy użyć ćwiczenia
Ćwiczenie dobrze pasuje do części szkolenia dotyczącej porządkowania informacji, przygotowywania notatek ze spotkań, tworzenia list zadań, pracy projektowej i sprawdzania, czy AI nie dopowiada brakujących danych.
---
## Materiał uczestnika
Materiał uczestnika jest pokazany powyżej w sekcji „Zadanie dla uczestników” oraz w wersji do druku. W scenariuszu prowadzącego nie powtarzamy go ponownie, żeby panel był krótszy i łatwiejszy do prowadzenia szkolenia.
---
## Jak wprowadzić ćwiczenie
Prowadzący może rozpocząć tak:

„W tym ćwiczeniu zobaczymy, jak AI może pomóc uporządkować chaotyczne notatki ze spotkania. To bardzo praktyczne zastosowanie, ale ma też pułapkę. AI lubi tworzyć kompletne, eleganckie tabele. Problem w tym, że taka tabela może wyglądać wiarygodnie, nawet jeśli zawiera osoby, terminy albo decyzje, których nikt nie ustalił. Dlatego będziemy ćwiczyć porządkowanie informacji bez dopowiadania.”
---
## Co prowadzący powinien podkreślić
Najważniejszy wniosek: AI może pomóc uporządkować chaos, ale nie może zamieniać braków informacyjnych w pozorne ustalenia.

Warto podkreślić:
- „do ustalenia” jest lepsze niż wymyślona informacja,
- propozycja nie jest decyzją,
- termin ogólny nie zawsze oznacza konkretną datę,
- zadanie warunkowe trzeba oznaczyć jako warunkowe,
- kompletna tabela nie zawsze jest prawdziwa,
- wynik AI trzeba porównać z notatką źródłową.
---
## Pytania do omówienia
- Które informacje były decyzjami?
- Które informacje były tylko propozycjami?
- Gdzie AI mogłaby dopisać osobę odpowiedzialną?
- Gdzie AI mogłaby wymyślić termin?
- Dlaczego „do ustalenia” jest bezpieczne?
- Czy uporządkowana tabela może wyglądać wiarygodnie, mimo że zawiera błędy?
- Co trzeba ustalić w pierwszej kolejności?
- Jak podobny prompt można wykorzystać po prawdziwym spotkaniu?
---
## Typowe błędy uczestników i reakcje prowadzącego
### Błąd 1. Uczestnicy wpisują osoby odpowiedzialne na podstawie domysłu
Komentarz prowadzącego: „Z notatki wynika, że Ania ma listę, ale nie wynika, że przyjęła zadanie jej aktualizacji. To trzeba oznaczyć jako do ustalenia.”

### Błąd 2. Uczestnicy traktują propozycję jako decyzję
Komentarz prowadzącego: „W notatce zapisano, że padła propozycja, ale nie podjęto decyzji. To powinno trafić do spraw do doprecyzowania.”

### Błąd 3. Uczestnicy wpisują certyfikaty jako decyzję
Komentarz prowadzącego: „Zapis brzmi: ‘raczej nie, ale trzeba sprawdzić, czy uczestnicy ich oczekują’. To nie jest decyzja. To jest sprawa do sprawdzenia.”

### Błąd 4. Uczestnicy chcą, żeby tabela była kompletna za wszelką cenę
Komentarz prowadzącego: „W pracy organizacyjnej brak informacji jest ważny. Jeśli czegoś nie ustalono, lepiej to pokazać niż udawać, że wszystko jest domknięte.”
---
## Wariant bez logowania do narzędzi AI
Uczestnicy czytają notatkę, oznaczają decyzje, propozycje, zadania i braki, przygotowują prompt oraz uproszczoną tabelę ręcznie. Prowadzący może przetestować jeden prompt na ekranie.
---
## Wariant trudniejszy
Grupa przygotowuje dwie wersje wyniku: krótką notatkę mailową do zespołu oraz tabelę zadań do dalszej pracy. Następnie sprawdza, czy obie wersje są spójne i czy żadna nie zawiera dopisanych ustaleń.`,
      "hint": `## Podpowiedzi
- Nie każda informacja z notatki jest decyzją.
- Jeśli nie ma osoby odpowiedzialnej, wpiszcie „do ustalenia”.
- Jeśli termin jest ogólny, nie zamieniajcie go samodzielnie w konkretną datę.
- Zadanie warunkowe oznaczcie jako warunkowe.
- Kompletna tabela nie jest dobra, jeśli zawiera wymyślone ustalenia.`,
      "check": `## Checklista kontroli wyniku
Sprawdźcie, czy uporządkowana notatka:
- odróżnia decyzje od propozycji,
- nie dopisuje osób odpowiedzialnych,
- nie dopisuje terminów,
- oznacza brakujące informacje,
- pokazuje, że sala nie jest potwierdzona,
- pokazuje, że program nie jest gotowy,
- pokazuje, że moduł o fake newsach jest tylko propozycją,
- pokazuje, że nie ustalono narzędzia do formularza,
- pokazuje, że certyfikaty są sprawą do sprawdzenia,
- pokazuje, że nie ustalono osoby wysyłającej zaproszenia,
- pokazuje najważniejsze ryzyka organizacyjne,
- nadaje się do sprawdzenia przez zespół.`,
      "sample": `## Przykład dobrego promptu
Jesteś asystentem organizacyjnym. Uporządkuj poniższe robocze notatki ze spotkania.

Przygotuj:
1. krótkie podsumowanie spotkania,
2. listę decyzji, które rzeczywiście zostały podjęte,
3. listę propozycji, które nie są jeszcze decyzjami,
4. tabelę zadań z kolumnami: zadanie, osoba odpowiedzialna, termin, status informacji, uwagi,
5. listę spraw do doprecyzowania,
6. listę ryzyk organizacyjnych.

Nie dopisuj osób odpowiedzialnych, terminów ani decyzji, jeśli nie wynikają bezpośrednio z notatki. Jeżeli czegoś brakuje, wpisz „do ustalenia”, „brak informacji” albo „nie podjęto decyzji”. Odróżnij zadania pewne od zadań warunkowych.

Użyj rzeczowego języka. Wynik ma być materiałem roboczym do sprawdzenia przez zespół, a nie formalnym protokołem.

Notatki:
[WKLEJ NOTATKI]

## Przykład notatki po pracy
Nie dopisaliśmy osoby odpowiedzialnej za salę, ponieważ w notatce nie wskazano, kto ma to sprawdzić.

Oznaczyliśmy przygotowanie tekstu zaproszenia jako zadanie warunkowe, ponieważ Łukasz może je przygotować dopiero po otrzymaniu programu.

Nie wpisaliśmy modułu o fake newsach jako części programu, ponieważ w notatce była tylko propozycja bez decyzji.`,
      "result": "prompt do porządkowania notatki, tabela zadań, lista spraw do doprecyzowania i najpilniejszy kolejny krok",
      "discuss": `## Pytania do omówienia
- Które informacje były decyzjami, a które propozycjami?
- Gdzie AI mogłaby dopisać osobę odpowiedzialną?
- Dlaczego „do ustalenia” jest lepsze niż fałszywa kompletność?
- Co trzeba ustalić w pierwszej kolejności?
- Jak podobny prompt można wykorzystać po prawdziwym spotkaniu?`,
      "intro": "Uczestnicy porządkują chaotyczną notatkę ze spotkania, ale bez tworzenia fikcyjnych decyzji, terminów i odpowiedzialności.",
      "time": "20-25 min",
      "form": "praca w małych grupach po 3 osoby",
      "steps": [
        "Przeczytajcie notatkę i oznaczcie, które informacje są pewne, a które niejasne.",
        "Podzielcie informacje na decyzje, propozycje, zadania i sprawy do ustalenia.",
        "Przeanalizujcie niedopracowany prompt i wskażcie, co może dopisać AI.",
        "Napiszcie lepszy prompt z wymogiem oznaczania braków.",
        "Przygotujcie uporządkowaną wersję notatki i tabelę zadań.",
        "Sprawdźcie wynik z checklistą i wskażcie najpilniejszą sprawę do ustalenia."
      ]
    }
  ];
})();
