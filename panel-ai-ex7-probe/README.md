# Panel szkolenia AI

Statyczny panel do prowadzenia szkolenia z praktycznego wykorzystania AI. Zawiera szybki dostęp do prezentacji, materiałów, gotowych promptów, narzędzi AI, generatora QR oraz ćwiczeń warsztatowych dla uczestników.

## Co jest w projekcie

- `index.html` - główny panel szkolenia.
- `assets/app.css` - wygląd panelu.
- `assets/app.js` - obsługa panelu, ćwiczeń, druku, timera i QR.
- `assets/exercises.js` - baza ćwiczeń warsztatowych.
- `assets/exercise-variants-advanced.js` - dodatkowe scenariusze urzędowe i warianty dla ćwiczeń zaawansowanych.
- `assets/exercise-overrides-03-04.js` - dopracowane wersje ćwiczeń 3 i 4 w standardzie rozszerzonym.
- `assets/exercise-overrides-05-09.js` - dopracowane wersje ćwiczeń 5-9 z plików Word.
- `assets/exercise-modern-07.js` - trzeci próbny układ ćwiczenia 7: wizualny pulpit pracy, mapa źródeł, oś procesu, rozwijane źródła i dwa warianty druku.
- `assets/exercise-visual-all.js` - wspólna warstwa wizualnych pulpitów dla ćwiczeń, z mapą pracy, efektami, decyzjami i materiałami źródłowymi.
- `assets/training-banner.png` - szeroki baner graficzny w nagłówku panelu.
- `../generator-zaswiadczen-html/` - uniwersalny generator zaświadczeń HTML działający w przeglądarce.
- `prompts/` - osobne strony z gotowymi promptami.
- `assets/prompt.css` i `assets/prompt.js` - wspólne pliki dla stron promptów.
- `version.json` - aktualny numer wersji używany przez przycisk sprawdzania aktualizacji w stopce.
- `reset-cache.html` - pomocnicza strona do odświeżenia cache, gdy przeglądarka pokazuje starą wersję.
- W panelu jest też timer do odmierzania czasu ćwiczeń, z opcją powiększenia na cały ekran. Timer działa jako osobne narzędzie na dole strony głównej.
- Ćwiczenia mają tryb ekranowy do pokazania zadania uczestnikom na rzutniku, bez wbudowanego timera w widoku ćwiczenia.
- W oknie ćwiczenia można wydrukować wersję zadania dla uczestników.
- Wydruki są składane jako kompletne karty pracy lub scenariusze, bez automatycznego dodawania pustego miejsca na notatki.
- Ćwiczenie 1 ma nowy opis z pliku Word i osobną, skróconą kartę pracy do druku.
- Ćwiczenie 2 ma nowy scenariusz o prostym języku w wiadomości urzędowej dotyczącej braków w dokumentacji.
- Długie opisy ćwiczeń są automatycznie dzielone na czytelne sekcje, ramki, listy i kroki.
- Scenariusze prowadzącego w ćwiczeniach 1 i 2 nie powtarzają pełnej karty uczestnika.
- Sekcje w opisach ćwiczeń mają delikatne szare akcenty, które poprawiają orientację w długich materiałach bez nadmiaru koloru.
- Ćwiczenie 3 ma rozbudowany scenariusz odpowiedzi na trudnego maila bez przyznawania winy i bez obietnic bez podstawy.
- Ćwiczenie 4 ma rozbudowany scenariusz porządkowania notatki ze spotkania, z tabelą zadań i oznaczaniem braków informacyjnych.
- Ćwiczenia 5-9 zostały dodane w tym samym standardzie: informacja o naborze, ankieta ewaluacyjna, prezentacja ze źródeł, formularz zapisów i plakat w Canvie.
- Ćwiczenie 7 ma trzeci próbny widok: `Pulpit pracy`, `Materiały źródłowe` oraz `Dla prowadzącego`. W pierwszej zakładce są dodatkowe elementy graficzne: mapa źródeł, oś pracy, kafle efektów i krótkie decyzje projektowe. Pełne teksty źródłowe nie są skracane i są pokazane w rozwijanych sekcjach.
- Wszystkie ćwiczenia są teraz otwierane w wizualnym układzie: `Pulpit pracy`, `Materiały źródłowe` oraz `Dla prowadzącego`. Długie karty pracy zostają dostępne w materiałach i wydruku, a pierwszy ekran pokazuje mapę pracy, efekty, decyzje i checklistę.
- Nagłówek panelu używa pełnego banera graficznego zamiast osobnego tytułu i małego logo.
- Baner jest pokazany bez dodatkowej ramki, obramowania i cienia.
- Baner jest statyczny, bez efektu parallax.
- Tytuły głównych sekcji mają własne kolory, a kafelki pozostają spokojne w stanie spoczynku.
- Po najechaniu kursorem kafelki dostają kolorowy fade, lekkie uniesienie, świetlisty przebieg i kolorowy przycisk.
- Wnętrza ćwiczeń mają subtelne pastelowe akcenty w zakładkach, kartach, sekcjach materiałów i scenariuszach prowadzącego.
- Na końcu panelu, za timerem, znajduje się jedna wersja generatora zaświadczeń HTML działająca w przeglądarce na różnych komputerach.
- W oknie ćwiczenia pojawia się krótka sekcja `Narzędzia do wykonania ćwiczenia`, dobrana do typu zadania.
- Pierwsze ćwiczenie ma osobno uporządkowaną treść dla uczestników, widok pełnoekranowy i scenariusz prowadzącego.
- Drugie ćwiczenie ma osobno uporządkowaną treść dla uczestników, widok pełnoekranowy, wydruk i scenariusz prowadzącego.
- Panel zawiera też trudniejsze ćwiczenia z prostym kodowaniem, debugowaniem, analizą danych i bezpieczną automatyzacją w Google Apps Script.
- Są też ćwiczenia plikowe: dokument Google Docs, plik tekstowy/Markdown, arkusz Excel lub Google Sheets oraz szkic prezentacji Google Slides.
- Większość typów ćwiczeń ma warianty/scenariusze do losowania. Ćwiczenia dopracowane indywidualnie mogą mieć jedną wersję bez przycisku `Losuj`.

## Uruchomienie lokalnie

Najprościej otworzyć plik `index.html` w przeglądarce.

Można też uruchomić prosty serwer lokalny w katalogu projektu:

```bash
python3 -m http.server 4173
```

Następnie wejść na:

```text
http://127.0.0.1:4173/index.html
```

## Publikacja na GitHub Pages

1. Utwórz nowe repozytorium na GitHubie.
2. Wgraj zawartość tej paczki bezpośrednio do głównego katalogu repozytorium.
3. Upewnij się, że `index.html` jest w katalogu głównym repozytorium, a nie w dodatkowym podfolderze.
4. W ustawieniach repozytorium wybierz `Settings -> Pages`.
5. Jako źródło wybierz branch `main` i katalog `/root`.

Po publikacji strona będzie dostępna pod adresem GitHub Pages podanym w ustawieniach repozytorium.

## Aktualizacja po zmianach

Jeżeli po aktualizacji GitHub Pages nadal pokazuje starą wersję, otwórz:

```text
https://ADRES-TWOJEJ-STRONY/reset-cache.html
```

Następnie wróć do strony głównej i odśwież ją mocno:

- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + F5`

W stopce panelu jest też przycisk `Sprawdź nowszą wersję`. Po kliknięciu panel sprawdza `version.json`, czyści lokalne cache i przeładowuje stronę, jeśli na serwerze jest nowsza wersja.

## Uwagi

Projekt jest statyczny i nie wymaga procesu budowania. Generator QR korzysta z zewnętrznej usługi, więc do wygenerowania kodu QR potrzebne jest połączenie z internetem.
