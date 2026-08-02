from bs4 import BeautifulSoup, Tag
from pathlib import Path

ROOT=Path('/mnt/data/course_exercises_streamlined')
HTML=ROOT/'kurs-fake-news.html'
soup=BeautifulSoup(HTML.read_text(encoding='utf-8'),'html.parser')

def frag(html):
    s=BeautifulSoup(html,'html.parser')
    return list(s.body.contents if s.body else s.contents)

def set_body(section_id, html, preserve_media=False):
    sec=soup.find(id=section_id)
    if not sec: raise KeyError(section_id)
    body=sec.select_one('.course-section-body')
    media=[]
    if preserve_media:
        for n in body.select('.legacy-media, figure.course-figure'):
            # only keep topmost selected nodes
            if not n.find_parent(class_='legacy-media') and not (n.name=='figure' and n.find_parent('figure')):
                media.append(str(n))
    body.clear()
    if media:
        for n in frag(''.join(media)): body.append(n)
    for n in frag(html): body.append(n)

def replace_from_heading(section_id, heading_prefix, html):
    sec=soup.find(id=section_id)
    if not sec: raise KeyError(section_id)
    body=sec.select_one('.course-section-body')
    target=None
    for h in body.find_all(['h3','h2'], recursive=False):
        txt=' '.join(h.get_text(' ',strip=True).split())
        if txt.startswith(heading_prefix): target=h; break
    if target is None:
        # allow nested direct-ish search
        for h in body.find_all(['h3','h2']):
            txt=' '.join(h.get_text(' ',strip=True).split())
            if txt.startswith(heading_prefix): target=h; break
    if target is None: raise ValueError((section_id,heading_prefix))
    cur=target
    while cur:
        nxt=cur.next_sibling
        cur.extract()
        cur=nxt
    for n in frag(html): body.append(n)

def checkbox(key,label,workbook=None):
    wb=workbook or label
    return f'<label class="choice-card"><input type="checkbox" data-save-key="{key}" data-workbook-label="{wb}"/><span>{label}</span></label>'

def select_field(key,label,options,workbook=None):
    wb=workbook or label
    opts=''.join(f'<option value="{v}">{t}</option>' for v,t in options)
    return f'<label class="compact-field"><span>{label}</span><select class="course-answer compact-select" data-save-key="{key}" data-workbook-label="{wb}"><option value="">Wybierz odpowiedź</option>{opts}</select></label>'

def text_field(key,label,placeholder='Krótka odpowiedź',rows=2,workbook=None):
    wb=workbook or label
    if rows<=1:
        return f'<label class="compact-field"><span>{label}</span><input type="text" class="course-answer compact-input" data-save-key="{key}" data-workbook-label="{wb}" placeholder="{placeholder}"/></label>'
    return f'<label class="compact-field"><span>{label}</span><textarea class="course-answer compact-note" rows="{rows}" data-save-key="{key}" data-workbook-label="{wb}" placeholder="{placeholder}"></textarea></label>'

def assessment(module, section, statements):
    rows=[]
    for i,st in enumerate(statements,1):
        radios=''.join(f'<td><label class="assessment-dot"><input type="radio" name="{section}-q{i}" value="{v}" data-save-key="{section}-q{i}-v{v}" data-workbook-label="{st}"/><span>{v}</span></label></td>' for v in range(1,6))
        rows.append(f'<tr data-assessment-item="{st}"><th scope="row">{st}</th>{radios}</tr>')
    return f'''
    <p class="exercise-intro">Oceń pięć umiejętności w skali od 1 do 5. Wystarczy pięć zaznaczeń. Wynik służy wyłącznie autorefleksji.</p>
    <div class="course-table-wrap"><table class="course-table compact-assessment" data-compact-assessment="{module}"><thead><tr><th>Stwierdzenie</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>
    <div class="assessment-result" data-assessment-result><strong>Uzupełnij wszystkie pięć odpowiedzi.</strong><span data-assessment-copy>Po zakończeniu zobaczysz profil i obszar do dalszej pracy.</span><small data-assessment-focus></small></div>
    '''

# MODULE 1
m1_assess=assessment(1,'m1-quick-assess',[
    'Porównuję informację w więcej niż jednym źródle.',
    'Sięgam do źródeł oficjalnych lub eksperckich.',
    'Sprawdzam, czy widzę różne perspektywy.',
    'Rozpoznaję wpływ algorytmów i emocjonalnego języka.',
    'Weryfikuję treść przed jej udostępnieniem.'
])
set_body('m1-13-cwiczenia-i-karty-pracy',f'''
<p>Ćwiczenia zostały dostosowane do samodzielnej nauki online. Większość odpowiedzi wybierzesz z listy; krótkie pola tekstowe pojawiają się tylko tam, gdzie własny wniosek wnosi wartość.</p>
<div class="exercise-compact"><h3>Ćwiczenie 1. Jak docierały do mnie informacje?</h3><p class="exercise-intro">Zaznacz sposoby, przez które informacje trafiły do Ciebie w ostatniej dobie.</p><div class="choice-grid">
{checkbox('m1-e1-search','Samodzielne wyszukiwanie','Sposób dotarcia informacji — samodzielne wyszukiwanie')}
{checkbox('m1-e1-person','Wiadomość od innej osoby','Sposób dotarcia informacji — wiadomość od innej osoby')}
{checkbox('m1-e1-platform','Polecenie platformy','Sposób dotarcia informacji — polecenie platformy')}
{checkbox('m1-e1-feed','Kanał dobrany przez algorytm','Sposób dotarcia informacji — kanał algorytmiczny')}
{checkbox('m1-e1-ai','Treść utworzona lub streszczona przez AI','Sposób dotarcia informacji — AI')}
</div><div class="compact-grid two">
{select_field('m1-e1-dominant','Która ścieżka dominowała?', [('search','Samodzielne wyszukiwanie'),('person','Inna osoba'),('platform','Platforma lub algorytm'),('ai','Narzędzie AI'),('mixed','Kilka ścieżek w podobnym stopniu')])}
{text_field('m1-e1-surprise','Co zauważyłeś? – opcjonalnie','Jedno krótkie spostrzeżenie',1)}
</div></div>
<div class="exercise-compact"><h3>Ćwiczenie 2. Mój ekosystem informacyjny</h3><p class="exercise-intro">Wybierz maksymalnie pięć grup źródeł, z których korzystasz. Nie musisz opisywać każdego z nich osobno.</p><div class="choice-grid">
{checkbox('m1-e2-official','Źródła oficjalne i eksperckie','Ekosystem informacyjny — źródła oficjalne')}
{checkbox('m1-e2-portals','Portale i redakcje informacyjne','Ekosystem informacyjny — portale')}
{checkbox('m1-e2-social','Media społecznościowe i twórcy','Ekosystem informacyjny — media społecznościowe')}
{checkbox('m1-e2-messages','Komunikatory i osoby prywatne','Ekosystem informacyjny — komunikatory')}
{checkbox('m1-e2-searchai','Wyszukiwarki i narzędzia AI','Ekosystem informacyjny — wyszukiwarki i AI')}
</div><div class="compact-grid three">
{select_field('m1-e2-main','Z czego korzystasz najczęściej?', [('official','Źródła oficjalne'),('portals','Portale informacyjne'),('social','Media społecznościowe'),('messages','Komunikatory i osoby'),('searchai','Wyszukiwarki lub AI')])}
{select_field('m1-e2-risk','Gdzie widzisz największe ryzyko?', [('onesided','Jednostronność'),('emotion','Emocjonalny przekaz'),('unknown','Nieznany autor'),('algorithm','Dobór algorytmiczny'),('context','Brak kontekstu')])}
{text_field('m1-e2-check','Jedno źródło do uważniejszego sprawdzania – opcjonalnie','Nazwa źródła lub typu źródła',1)}
</div></div>
<div class="exercise-compact"><h3>Ćwiczenie 3. Sprawdzenie różnorodności źródeł</h3>{m1_assess}</div>
<div class="exercise-compact"><h3>Ćwiczenie 4. Szybka autorefleksja</h3><div class="compact-grid three">
{select_field('m1-e4-trust','Najczęściej ufam źródłu, gdy…',[('official','jest oficjalne lub eksperckie'),('author','znam autora i jego kompetencje'),('evidence','pokazuje źródła i dowody'),('repeat','widziałem tę informację wiele razy'),('person','poleciła je zaufana osoba')])}
{select_field('m1-e4-perspectives','Jak różnorodne są Twoje źródła?',[('wide','Regularnie widzę różne perspektywy'),('some','Czasem widzę odmienne poglądy'),('similar','Najczęściej widzę podobne poglądy'),('unknown','Nie zwracam na to uwagi')])}
{select_field('m1-e4-change','Który nawyk chcesz wzmocnić?',[('compare','Porównywanie kilku źródeł'),('primary','Docieranie do źródła pierwotnego'),('pause','Zatrzymanie reakcji emocjonalnej'),('verify','Weryfikowanie obrazów i nagrań'),('limit','Ograniczenie automatycznego przewijania')])}
</div>{text_field('m1-e4-conclusion','Mój najważniejszy wniosek – opcjonalnie','Jedno zdanie',1)}</div>
<div class="exercise-compact"><h3>Ćwiczenie 5. Analiza fikcyjnego postu</h3><aside class="course-callout course-callout--example"><strong>Fikcyjny post</strong><p>„Nie chcą, żebyście poznali prawdę. Nowe badanie dowodzi, że platformy społecznościowe potajemnie sterują tym, co myślą młodzi ludzie. Udostępnij, zanim materiał zniknie!”</p></aside><div class="compact-grid two">
{select_field('m1-e5-reaction','Pierwsza reakcja',[('credible','Brzmi wiarygodnie'),('suspicious','Brzmi podejrzanie'),('emotion','Wywołuje silną emocję'),('check','Chcę sprawdzić źródło')])}
{select_field('m1-e5-source','Co wiadomo o badaniu?',[('named','Podano nazwę i link'),('vague','Wspomniano je bez danych'),('none','Nie podano żadnego źródła'),('unknown','Nie potrafię ocenić')])}
{select_field('m1-e5-emotion','Jaki mechanizm dominuje?',[('fear','Lęk'),('anger','Złość'),('conspiracy','Sugestia spisku'),('urgency','Presja czasu'),('several','Kilka mechanizmów naraz')])}
{select_field('m1-e5-action','Najbardziej odpowiedzialna reakcja',[('share','Udostępnić ostrzegawczo'),('comment','Skomentować bez sprawdzania'),('verify','Najpierw znaleźć źródło badania'),('ignore','Zignorować bez refleksji')])}
</div><div class="choice-grid compact-choice-grid">
{checkbox('m1-e5-redflag-1','Nieokreślone „oni”','Sygnał ostrzegawczy — nieokreślone „oni”')}
{checkbox('m1-e5-redflag-2','Brak autora i instytucji','Sygnał ostrzegawczy — brak autora')}
{checkbox('m1-e5-redflag-3','Brak linku do badania','Sygnał ostrzegawczy — brak badania')}
{checkbox('m1-e5-redflag-4','Wezwanie do szybkiego udostępnienia','Sygnał ostrzegawczy — presja czasu')}
{checkbox('m1-e5-redflag-5','Sugestia ukrywania prawdy','Sygnał ostrzegawczy — rama spiskowa')}
</div>{text_field('m1-e5-firstcheck','Co sprawdzisz jako pierwsze? – opcjonalnie','Jedno źródło lub działanie',1)}<details class="exercise-feedback"><summary>Sprawdź, na co zwrócić uwagę</summary><p>Post nie identyfikuje badania, wykorzystuje presję czasu i ramę spiskową. Najpierw trzeba ustalić źródło twierdzenia i porównać je z niezależnymi materiałami.</p></details></div>
<div class="exercise-compact"><h3>Ćwiczenie 6. Bilet wyjścia z modułu</h3><p class="exercise-intro">Wystarczą trzy krótkie odpowiedzi.</p><div class="compact-grid three">
{text_field('m1-e6-notice','Co zauważyłem w swoich nawykach?','Jedno zdanie',2)}
{text_field('m1-e6-change','Co zmienię podczas korzystania z informacji?','Jedno konkretne działanie',2)}
{text_field('m1-e6-question','Co chcę jeszcze sprawdzić lub zrozumieć?','Jedno pytanie',2)}
</div></div>
''')
# update section heading
sec=soup.find(id='m1-13-cwiczenia-i-karty-pracy'); sec.find('h2').string='13. Krótkie ćwiczenia online'
btn=sec.select_one('[data-toggle-complete]'); btn['aria-label']='Oznacz sekcję jako przeczytaną: 13. Krótkie ćwiczenia online'

# MODULE 2 sections with embedded exercise
replace_from_heading('m2-6-wyzwalacze-emocjonalne-w-przekazach-manipulacyjnych','Ćwiczenie 1.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 1. Zatrzymaj emocję</h3><p class="exercise-intro">Wybierz odpowiedzi, które najlepiej opisują Twoją reakcję na fikcyjny post.</p><div class="compact-grid two">
{select_field('m2-e1-reaction','Pierwsza reakcja',[('fear','Strach'),('anger','Złość lub oburzenie'),('curiosity','Ciekawość'),('suspicion','Podejrzliwość'),('neutral','Brak silnej reakcji')])}
{select_field('m2-e1-missing','Czego najbardziej brakuje w przekazie?',[('source','Źródła nagrania'),('date','Daty i miejsca'),('evidence','Dowodów na oskarżenie'),('context','Pełnego kontekstu'),('all','Wszystkich tych informacji')])}
{select_field('m2-e1-action','Co zrobisz przed reakcją?',[('share','Udostępnię ostrzegawczo'),('pause','Zatrzymam się i sprawdzę'),('comment','Skomentuję od razu'),('ignore','Pominę bez sprawdzania')])}
{text_field('m2-e1-note','Jedno zdanie: co uruchomiło emocję? – opcjonalnie','Np. słowo, obraz lub presja czasu',1)}
</div><div class="choice-grid compact-choice-grid">
{checkbox('m2-e1-trigger1','„Szokujący film”','Element emocjonalny — szokujący film')}
{checkbox('m2-e1-trigger2','„Naszym dzieciom”','Element emocjonalny — naszym dzieciom')}
{checkbox('m2-e1-trigger3','„Udostępnij natychmiast”','Element emocjonalny — presja czasu')}
{checkbox('m2-e1-trigger4','„Zostanie usunięte”','Element emocjonalny — sugestia cenzury')}
</div><aside class="course-callout course-callout--info"><strong>Wskazówka</strong><p>Silna emocja nie przesądza o fałszu, lecz powinna zatrzymać automatyczne udostępnienie.</p></aside></div>
''')
replace_from_heading('m2-7-bledy-poznawcze-a-ocena-informacji','Ćwiczenie 2.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 2. Post, z którym od razu się zgadzam</h3><p class="exercise-intro">Nie opisuj konkretnej osoby ani drażliwego tematu. Zaznacz mechanizmy, które mogły wpłynąć na Twoją ocenę.</p><div class="choice-grid">
{checkbox('m2-e2-confirm','Post potwierdzał moje przekonania','Wpływ na ocenę — efekt potwierdzenia')}
{checkbox('m2-e2-group','Pochodził od osoby z mojej grupy','Wpływ na ocenę — zaufanie do grupy')}
{checkbox('m2-e2-repeat','Widziałem tę tezę wiele razy','Wpływ na ocenę — efekt powtarzania')}
{checkbox('m2-e2-alarm','Przekaz był alarmujący','Wpływ na ocenę — emocjonalność')}
{checkbox('m2-e2-expert','Autor wyglądał na eksperta','Wpływ na ocenę — pozorny autorytet')}
</div><div class="compact-grid two">
{select_field('m2-e2-strongest','Który wpływ był najsilniejszy?',[('confirm','Zgodność z moimi poglądami'),('group','Zaufanie do osoby lub grupy'),('repeat','Powtarzalność'),('emotion','Silna emocja'),('authority','Pozorny autorytet')])}
{select_field('m2-e2-check','Co sprawdzisz przed udostępnieniem?',[('source','Autora i źródło'),('evidence','Dowody'),('coverage','Inne wiarygodne źródła'),('context','Pełny kontekst'),('all','Wszystkie te elementy')])}
</div>{text_field('m2-e2-rule','Moja krótka zasada na przyszłość – opcjonalnie','Jedno zdanie',1)}</div>
''')
replace_from_heading('m2-9-fact-checking-i-weryfikacja-podejscie-praktyczne','Ćwiczenie 3.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 3. SIFT w wersji online</h3><aside class="course-callout course-callout--example"><strong>Fikcyjny komunikat</strong><p>„PILNE! Od przyszłego miesiąca wszystkie urzędy pracy zostaną zlikwidowane. Media milczą. Udostępnij, zanim usuną.”</p></aside><figure class="course-figure course-figure--social-post"><a href="assets/img/fikcyjny-komunikat-likwidacja-urzedow-pracy.webp" rel="noopener" target="_blank"><img alt="Fikcyjny komunikat o rzekomej likwidacji urzędów pracy" loading="lazy" src="assets/img/fikcyjny-komunikat-likwidacja-urzedow-pracy.webp"/></a></figure><div class="compact-grid two">
{select_field('m2-e3-stop','S – Zatrzymaj się',[('pause','Nie udostępniam i nazywam reakcję'),('share','Udostępniam ostrzegawczo'),('comment','Od razu komentuję')])}
{select_field('m2-e3-investigate','I – Zbadaj źródło',[('official','To oficjalny kanał instytucji'),('unknown','Źródło jest nieznane lub niejasne'),('fake','Konto prawdopodobnie się podszywa'),('check','Muszę sprawdzić autora i domenę')])}
{select_field('m2-e3-find','F – Znajdź lepsze źródła',[('confirmed','Wiarygodne źródła potwierdzają'),('notconfirmed','Brak potwierdzenia'),('contradicted','Źródła oficjalne zaprzeczają'),('todo','Jeszcze nie sprawdziłem')])}
{select_field('m2-e3-trace','T – Dotrzyj do kontekstu',[('found','Znalazłem pierwotny komunikat'),('partial','Znalazłem część kontekstu'),('none','Nie znalazłem źródła pierwotnego'),('todo','Jeszcze nie sprawdziłem')])}
{select_field('m2-e3-decision','Końcowa decyzja',[('share','Udostępniam'),('verify','Najpierw dalej sprawdzam'),('report','Zgłaszam jako podejrzane'),('correct','Sprostowuję z linkiem do źródła'),('ignore','Nie rozpowszechniam')])}
{text_field('m2-e3-source','Pierwsze źródło, które sprawdzę – opcjonalnie','Np. strona urzędu lub komunikat ministerstwa',1)}
</div></div>
''')
set_body('m2-10-lista-kontrolna-weryfikacji',f'''
<p>Ta wersja listy kontrolnej wymaga jedynie zaznaczenia elementów, które udało się potwierdzić. Brak zaznaczenia oznacza, że dana kwestia nadal wymaga sprawdzenia.</p><div class="exercise-compact"><div class="choice-grid">
{checkbox('m2-c10-author','Autor lub organizacja są rozpoznawalni','Checklista weryfikacji — autor')}
{checkbox('m2-c10-date','Data odpowiada opisywanemu wydarzeniu','Checklista weryfikacji — data')}
{checkbox('m2-c10-headline','Treść potwierdza nagłówek','Checklista weryfikacji — zgodność nagłówka')}
{checkbox('m2-c10-primary','Podano źródło pierwotne lub dowody','Checklista weryfikacji — dowody')}
{checkbox('m2-c10-coverage','Inne wiarygodne źródła potwierdzają informację','Checklista weryfikacji — niezależne potwierdzenie')}
{checkbox('m2-c10-context','Obrazy i nagrania są użyte we właściwym kontekście','Checklista weryfikacji — kontekst obrazu')}
{checkbox('m2-c10-language','Rozpoznałem emocjonalny język lub presję czasu','Checklista weryfikacji — język emocjonalny')}
{checkbox('m2-c10-ai','Sprawdziłem możliwość użycia AI lub manipulacji','Checklista weryfikacji — AI')}
</div><div class="compact-grid two">
{select_field('m2-c10-readiness','Czy informacja jest gotowa do udostępnienia?',[('yes','Tak – potwierdziłem najważniejsze elementy'),('no','Nie – brakuje potwierdzenia'),('uncertain','Nie mam pewności'),('dontshare','Nie będę jej udostępniać')])}
{text_field('m2-c10-gap','Najważniejszy brak do sprawdzenia – opcjonalnie','Jedna rzecz',1)}
</div></div>
''')
replace_from_heading('m2-12-stronniczosc-w-wiadomosciach-i-tresciach-cyfrowych','Ćwiczenie 4.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 4. Dwa nagłówki – jedno wydarzenie</h3><div class="headline-pair"><blockquote><strong>Nagłówek A</strong> „Nowe dane pokazują gwałtowny wzrost bezrobocia wśród młodych osób”.</blockquote><blockquote><strong>Nagłówek B</strong> „Stopa bezrobocia młodych pozostaje niższa niż pięć lat temu mimo ostatniego wzrostu”.</blockquote></div><div class="compact-grid two">
{select_field('m2-e4-frame-a','Co podkreśla nagłówek A?',[('current','Ostatni wzrost'),('longterm','Trend wieloletni'),('cause','Przyczynę wzrostu'),('solution','Możliwe rozwiązanie')])}
{select_field('m2-e4-frame-b','Co podkreśla nagłówek B?',[('current','Ostatni wzrost'),('longterm','Trend wieloletni'),('cause','Przyczynę wzrostu'),('solution','Możliwe rozwiązanie')])}
{select_field('m2-e4-emotion','Który nagłówek silniej alarmuje?',[('a','Nagłówek A'),('b','Nagłówek B'),('both','Oba podobnie'),('none','Żaden')])}
{select_field('m2-e4-data','Jakich danych potrzeba najbardziej?',[('absolute','Liczb bezwzględnych i procentów'),('period','Porównania kilku okresów'),('method','Metody liczenia'),('groups','Danych dla różnych grup'),('all','Pełnego zestawu tych danych')])}
</div>{text_field('m2-e4-conclusion','Krótki wniosek – opcjonalnie','Czy oba nagłówki mogą być częściowo prawdziwe?',1)}</div>
''')
set_body('m2-16-praktyczny-przyklad-do-analizy',f'''
<div class="legacy-media">{str(soup.find(id='m2-16-praktyczny-przyklad-do-analizy').select_one('.legacy-media')) if soup.find(id='m2-16-praktyczny-przyklad-do-analizy').select_one('.legacy-media') else ''}</div>
<aside class="course-callout course-callout--example"><strong>Fikcyjny post</strong><p>„PILNE: Tajny raport dowodzi, że szkoły wykorzystują ukrytą technologię do sterowania opiniami uczniów. Nauczycielom zabroniono o tym mówić. Udostępnij teraz, zanim post zniknie!”</p></aside><p class="exercise-intro">Oceń pięć elementów. Nie musisz pisać pełnej analizy.</p><div class="compact-grid two">
{select_field('m2-p16-source','Czy wskazano raport, autora i datę?',[('yes','Tak'),('partial','Tylko częściowo'),('no','Nie'),('unknown','Nie potrafię ocenić')])}
{select_field('m2-p16-evidence','Jakie dowody przedstawiono?',[('strong','Konkretne i sprawdzalne'),('weak','Ogólne lub pośrednie'),('none','Żadne'),('unknown','Nie potrafię ocenić')])}
{select_field('m2-p16-emotion','Jaki mechanizm dominuje?',[('fear','Strach'),('conspiracy','Rama spiskowa'),('urgency','Presja czasu'),('authority','Nieokreślony autorytet'),('several','Kilka naraz')])}
{select_field('m2-p16-manipulation','Czy post bardziej informuje, czy manipuluje?',[('inform','Głównie informuje'),('mixed','Łączy informację i manipulację'),('manipulate','Głównie manipuluje'),('unknown','Nie wiem')])}
{select_field('m2-p16-action','Odpowiedzialna reakcja',[('share','Udostępnić'),('verify','Sprawdzić źródła oficjalne i pierwotne'),('comment','Skomentować bez linków'),('report','Zgłosić jako podejrzane bez dalszej analizy')])}
{text_field('m2-p16-check','Pierwsze źródło do sprawdzenia – opcjonalnie','Jedno źródło',1)}
</div><details class="exercise-feedback"><summary>Sprawdź wskazówki</summary><p>Post nie identyfikuje raportu, wykorzystuje presję czasu i ramę spiskową. Odpowiedzialna reakcja polega na poszukaniu komunikatów oficjalnych i źródła pierwotnego przed dalszym rozpowszechnianiem.</p></details>
''')
set_body('m2-18-zadanie-refleksyjne',f'''
<p>Wybierz odpowiedzi i zapisz jedną osobistą zasadę. Nie musisz opisywać każdego zagadnienia osobno.</p><div class="exercise-compact"><div class="compact-grid three">
{select_field('m2-r18-threat','Który rodzaj manipulacji rozpoznajesz najlepiej?',[('emotion','Manipulację emocjonalną'),('context','Fałszywy kontekst'),('impersonation','Podszywanie się'),('data','Manipulację danymi'),('ai','Treści syntetyczne i AI')])}
{select_field('m2-r18-emotion','Na którą emocję chcesz uważać?',[('fear','Strach'),('anger','Złość'),('outrage','Oburzenie'),('hope','Nadmierna nadzieja'),('urgency','Presja czasu')])}
{select_field('m2-r18-step','Który krok zastosujesz najpierw?',[('pause','Zatrzymanie reakcji'),('source','Sprawdzenie źródła'),('coverage','Porównanie innych źródeł'),('primary','Dotarcie do kontekstu pierwotnego'),('image','Weryfikacja obrazu lub nagrania')])}
</div>{text_field('m2-r18-rule','Moja zasada przed udostępnieniem','Jedno konkretne zdanie',2)}</div>
''')
set_body('m2-19-krotka-samoocena',assessment(2,'m2-assess',[
    'Rozpoznaję różnicę między błędną informacją a dezinformacją.',
    'Zauważam emocjonalny język i presję czasu.',
    'Rozpoznaję wpływ błędów poznawczych.',
    'Stosuję podstawowe kroki SIFT i czytanie boczne.',
    'Potrafię odpowiedzialnie zareagować na podejrzaną treść.'
]))

# MODULE 3
replace_from_heading('m3-6-fakty-opinie-interpretacje-i-zalozenia','Ćwiczenie 3.1.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 3.1. Rozpoznaj rodzaj wypowiedzi</h3><p class="exercise-intro">Dla każdego zdania wybierz jedną kategorię dominującą. Na końcu możesz zapisać jedną uwagę do wypowiedzi niejednoznacznej.</p><div class="classification-select-list">
{select_field('m3-e31-1','1. „W badaniu wzięło udział 240 osób.”',[('fact','Fakt'),('opinion','Opinia'),('interpretation','Interpretacja'),('assumption','Założenie'),('prediction','Przewidywanie'),('value','Sąd wartościujący')],'Klasyfikacja zdania 1')}
{select_field('m3-e31-2','2. „Ten raport jest napisany zbyt skomplikowanym językiem.”',[('fact','Fakt'),('opinion','Opinia'),('interpretation','Interpretacja'),('assumption','Założenie'),('prediction','Przewidywanie'),('value','Sąd wartościujący')],'Klasyfikacja zdania 2')}
{select_field('m3-e31-3','3. „Spadek liczby zgłoszeń może oznaczać częstsze korzystanie z usług online.”',[('fact','Fakt'),('opinion','Opinia'),('interpretation','Interpretacja'),('assumption','Założenie'),('prediction','Przewidywanie'),('value','Sąd wartościujący')],'Klasyfikacja zdania 3')}
{select_field('m3-e31-4','4. „Każdy, kto ufa tej instytucji, jest naiwny.”',[('fact','Fakt'),('opinion','Opinia'),('interpretation','Interpretacja'),('assumption','Założenie'),('prediction','Przewidywanie'),('value','Sąd wartościujący')],'Klasyfikacja zdania 4')}
{select_field('m3-e31-5','5. „Za pięć lat większość porad będzie udzielana przez chatboty.”',[('fact','Fakt'),('opinion','Opinia'),('interpretation','Interpretacja'),('assumption','Założenie'),('prediction','Przewidywanie'),('value','Sąd wartościujący')],'Klasyfikacja zdania 5')}
{select_field('m3-e31-6','6. „Urzędy powinny zawsze publikować pełne dane źródłowe.”',[('fact','Fakt'),('opinion','Opinia'),('interpretation','Interpretacja'),('assumption','Założenie'),('prediction','Przewidywanie'),('value','Sąd wartościujący')],'Klasyfikacja zdania 6')}
</div>{text_field('m3-e31-note','Uwaga do jednego niejednoznacznego zdania – opcjonalnie','Krótko wyjaśnij swój wybór',1)}<details class="exercise-feedback"><summary>Sprawdź odpowiedzi</summary><ol><li>Fakt.</li><li>Opinia lub sąd wartościujący – zależnie od kryterium oceny.</li><li>Interpretacja oparta na założeniu.</li><li>Sąd wartościujący i opinia.</li><li>Przewidywanie.</li><li>Opinia normatywna / sąd wartościujący.</li></ol></details></div>
''')
replace_from_heading('m3-7-ocena-zrodel','Ćwiczenie 3.2.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 3.2. Szybka ocena źródła</h3><p class="exercise-intro">Wybierz jeden artykuł, post, film lub komunikat. Odpowiedz na pięć pytań.</p><div class="compact-grid two">
{text_field('m3-e32-title','Materiał – opcjonalnie','Tytuł lub krótki opis',1)}
{select_field('m3-e32-author','Czy autor lub instytucja są rozpoznawalni?',[('yes','Tak'),('partial','Częściowo'),('no','Nie'),('unknown','Nie wiem')])}
{select_field('m3-e32-date','Czy data jest aktualna i widoczna?',[('yes','Tak'),('no','Nie'),('irrelevant','Nie ma znaczenia'),('unknown','Nie wiem')])}
{select_field('m3-e32-evidence','Czy materiał pokazuje dowody lub źródła?',[('strong','Tak – konkretne i sprawdzalne'),('partial','Częściowo'),('none','Nie'),('unknown','Nie wiem')])}
{select_field('m3-e32-confirm','Czy inne źródła potwierdzają tezę?',[('yes','Tak'),('mixed','Częściowo lub z zastrzeżeniami'),('no','Nie'),('notchecked','Jeszcze nie sprawdziłem')])}
{select_field('m3-e32-rating','Ocena końcowa',[('credible','Wiarygodne'),('partial','Częściowo wiarygodne'),('unreliable','Niewiarygodne'),('insufficient','Brak danych do oceny')])}
</div>{text_field('m3-e32-gap','Najważniejszy brak – opcjonalnie','Jedna informacja',1)}</div>
''')
replace_from_heading('m3-9-dane-i-statystyki','Ćwiczenie 3.3.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 3.3. Liczba bez kontekstu</h3><aside class="course-callout course-callout--example"><strong>Komunikat</strong><p>„Po wprowadzeniu nowego systemu liczba skarg wzrosła o 50%”.</p></aside><p class="exercise-intro">Zaznacz informacje, których potrzebujesz, zanim ocenisz system.</p><div class="choice-grid">
{checkbox('m3-e33-base','Liczba skarg przed i po zmianie','Brakujące dane — wartości bezwzględne')}
{checkbox('m3-e33-users','Liczba użytkowników systemu','Brakujące dane — liczba użytkowników')}
{checkbox('m3-e33-period','Okres porównania','Brakujące dane — okres')}
{checkbox('m3-e33-method','Sposób rejestrowania skarg','Brakujące dane — metoda')}
{checkbox('m3-e33-change','Informacja, czy ułatwiono zgłaszanie','Brakujące dane — zmiana procedury')}
</div><div class="compact-grid two">
{select_field('m3-e33-alt','Które wyjaśnienie jest możliwe?',[('worse','Usługa się pogorszyła'),('easier','Skargi łatwiej zgłaszać'),('moreusers','Wzrosła liczba użytkowników'),('method','Zmienił się sposób liczenia'),('several','Kilka wyjaśnień naraz')])}
{select_field('m3-e33-conclusion','Co można stwierdzić na podstawie samego procentu?',[('bad','System działa gorzej'),('good','System działa lepiej'),('unknown','Nie da się ocenić bez kontekstu'),('fraud','Dane są fałszywe')])}
</div></div>
''')
replace_from_heading('m3-10-narracje-i-ramy-interpretacyjne','Ćwiczenie 3.4.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 3.4. Jedno zdarzenie – dwie ramy</h3><p class="exercise-intro">W urzędzie wprowadzono obowiązkową rejestrację wizyt online. Oceń dwa gotowe nagłówki, a następnie zaproponuj jeden neutralny.</p><div class="headline-pair"><blockquote>„Rejestracja online skróci kolejki i uporządkuje obsługę mieszkańców”.</blockquote><blockquote>„Obowiązkowa rejestracja online utrudni dostęp osobom wykluczonym cyfrowo”.</blockquote></div><div class="compact-grid two">
{select_field('m3-e34-first','Pierwszy nagłówek stosuje ramę…',[('benefit','Ułatwienia i porządku'),('exclusion','Utrudnienia i wykluczenia'),('conflict','Konfliktu'),('neutral','Neutralną')])}
{select_field('m3-e34-second','Drugi nagłówek stosuje ramę…',[('benefit','Ułatwienia i porządku'),('exclusion','Utrudnienia i wykluczenia'),('conflict','Konfliktu'),('neutral','Neutralną')])}
{select_field('m3-e34-context','Jakiego kontekstu brakuje?',[('alternatives','Alternatyw dla osób bez dostępu online'),('effects','Danych o czasie obsługi'),('support','Informacji o wsparciu pracowników'),('all','Wszystkich tych informacji')])}
{text_field('m3-e34-neutral','Neutralny nagłówek – jedna wersja','Jedno zdanie',2)}
</div></div>
''')
replace_from_heading('m3-14-zastosowanie-modelu-clear','Ćwiczenie 3.5.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 3.5. CLEAR w skróconej wersji</h3><p class="exercise-intro">Wybierz jedną decyzję opartą na informacji z internetu. Wypełnij tylko pola potrzebne do podjęcia świadomej decyzji.</p><div class="compact-grid two">
{select_field('m3-e35-area','Obszar decyzji',[('work','Praca lub szkolenie'),('health','Zdrowie'),('purchase','Zakup lub usługa'),('public','Komunikat instytucji'),('other','Inny')])}
{text_field('m3-e35-question','C – Co dokładnie muszę ustalić?','Jedno konkretne pytanie',1)}
{select_field('m3-e35-sources','L – Jakie źródła sprawdzę?',[('official','Oficjalne lub pierwotne'),('expert','Eksperckie'),('reviews','Opinie użytkowników'),('several','Co najmniej dwa różne typy źródeł')])}
{select_field('m3-e35-evidence','E – Jak oceniasz dowody?',[('strong','Spójne i sprawdzalne'),('partial','Częściowe'),('weak','Słabe lub niejasne'),('none','Brak dowodów')])}
{select_field('m3-e35-alternatives','A – Czy rozważyłeś inne wyjaśnienia lub opcje?',[('yes','Tak – co najmniej dwie'),('one','Tylko jedną'),('no','Nie'),('notneeded','Nie dotyczy')])}
{select_field('m3-e35-ready','R – Czy jesteś gotowy do decyzji?',[('yes','Tak'),('more','Potrzebuję więcej danych'),('pause','Odkładam decyzję'),('reject','Odrzucam tę opcję')])}
</div>{text_field('m3-e35-change','Co mogłoby zmienić Twoją decyzję? – opcjonalnie','Jedna informacja lub dowód',1)}</div>
''')
set_body('m3-16-studium-przypadku-falszywa-porada-zdrowotna',f'''
<aside class="course-callout course-callout--example"><strong>Fikcyjny post</strong><p>„Lekarze ukrywają ten naturalny sposób. Zwykły napój ziołowy zapobiega poważnym chorobom lepiej niż leki. Wielkie firmy nie chcą, żebyś o tym wiedział. Wyślij rodzinie, zanim usuną post”.</p></aside><p class="exercise-intro">Przy treściach zdrowotnych wystarczy pięć szybkich kontroli, aby zauważyć poważne ryzyko.</p><div class="compact-grid two">
{select_field('m3-h16-author','Czy autor ma możliwe do sprawdzenia kwalifikacje?',[('yes','Tak'),('no','Nie'),('unknown','Nie wiadomo')])}
{select_field('m3-h16-evidence','Czy podano badania i źródła?',[('strong','Tak – konkretne'),('vague','Tylko ogólne odwołania'),('none','Nie')])}
{select_field('m3-h16-risk','Czy opisano ryzyko i przeciwwskazania?',[('yes','Tak'),('partial','Częściowo'),('no','Nie')])}
{select_field('m3-h16-language','Jaki mechanizm wykorzystuje post?',[('conspiracy','Rama spiskowa'),('miracle','Obietnica prostego rozwiązania'),('urgency','Presja czasu'),('several','Kilka mechanizmów')])}
{select_field('m3-h16-action','Odpowiedzialna reakcja',[('use','Zastosować poradę'),('share','Przesłać rodzinie'),('verify','Sprawdzić w uznanych źródłach zdrowotnych'),('askai','Poprosić AI o potwierdzenie i na tym zakończyć')])}
{text_field('m3-h16-source','Źródło, które sprawdzisz – opcjonalnie','Np. oficjalny portal zdrowotny',1)}
</div><details class="exercise-feedback"><summary>Sprawdź wskazówki</summary><p>Post przedstawia poważne twierdzenie bez dowodów, podważa zaufanie do lekarzy i nie opisuje ryzyka. Nie należy go udostępniać ani stosować porady bez weryfikacji w uznanych źródłach.</p></details>
''')
set_body('m3-20-checklista-krytycznego-myslenia',f'''
<div class="legacy-media">{str(soup.find(id='m3-20-checklista-krytycznego-myslenia').select_one('.legacy-media')) if soup.find(id='m3-20-checklista-krytycznego-myslenia').select_one('.legacy-media') else ''}</div><p>Użyj listy przy treści, która może wpłynąć na zdrowie, pracę, finanse lub opinię o innych osobach. Zaznacz wykonane kroki.</p><div class="exercise-compact"><div class="choice-grid">
{checkbox('m3-c20-claim','Ustaliłem główne twierdzenie','Checklista krytycznego myślenia — twierdzenie')}
{checkbox('m3-c20-type','Oddzieliłem fakt od opinii i założenia','Checklista krytycznego myślenia — typ wypowiedzi')}
{checkbox('m3-c20-source','Sprawdziłem autora i źródło','Checklista krytycznego myślenia — źródło')}
{checkbox('m3-c20-evidence','Oceniłem dowody i ich związek z tezą','Checklista krytycznego myślenia — dowody')}
{checkbox('m3-c20-missing','Zauważyłem brakujące informacje','Checklista krytycznego myślenia — braki')}
{checkbox('m3-c20-alternative','Rozważyłem inne wyjaśnienia','Checklista krytycznego myślenia — alternatywy')}
{checkbox('m3-c20-bias','Sprawdziłem emocje i możliwy błąd poznawczy','Checklista krytycznego myślenia — emocje')}
{checkbox('m3-c20-impact','Oceniłem skutki uwierzenia lub udostępnienia','Checklista krytycznego myślenia — skutki')}
</div><div class="compact-grid two">{select_field('m3-c20-ready','Gotowość do decyzji',[('ready','Mam wystarczające dane'),('more','Potrzebuję więcej danych'),('stop','Nie podejmuję decyzji na tej podstawie')])}{text_field('m3-c20-gap','Najważniejszy brak – opcjonalnie','Jedna informacja',1)}</div></div>
''')
set_body('m3-21-praktyczny-przyklad-do-analizy',f'''
<aside class="course-callout course-callout--example"><strong>Fikcyjny post</strong><p>„Nowe międzynarodowe badanie dowodzi, że pracownicy korzystający z narzędzi AI tracą zdolność samodzielnego myślenia. Eksperci ostrzegają, że instytucje muszą natychmiast zakazać AI, zanim zniszczy jakość pracy”.</p></aside><div class="compact-grid two">
{select_field('m3-p21-study','Czy badanie zostało zidentyfikowane?',[('yes','Tak – nazwa, autorzy i link'),('partial','Tylko częściowo'),('no','Nie')])}
{select_field('m3-p21-experts','Kim są „eksperci”?',[('named','Są wymienieni i mają kompetencje'),('vague','Nie zostali wskazani'),('mixed','Wskazano tylko jedną stronę sporu')])}
{select_field('m3-p21-language','Jaki język dominuje?',[('neutral','Neutralny'),('fear','Język zagrożenia'),('urgency','Presja natychmiastowego działania'),('both','Zagrożenie i presja')])}
{select_field('m3-p21-conclusion','Czy wniosek odpowiada przedstawionym dowodom?',[('yes','Tak'),('tooStrong','Jest zbyt szeroki'),('none','Nie ma dowodów do porównania'),('unknown','Nie wiem')])}
{select_field('m3-p21-action','Co zrobić przed decyzją?',[('ban','Natychmiast zakazać AI'),('share','Udostępnić ostrzeżenie'),('research','Znaleźć badanie, metodę i inne stanowiska'),('ignore','Zignorować temat')])}
{text_field('m3-p21-source','Pierwsze źródło do sprawdzenia – opcjonalnie','Jedno źródło',1)}
</div><details class="exercise-feedback"><summary>Sprawdź wskazówki</summary><p>Post nie identyfikuje badania ani ekspertów, używa szerokiego wniosku i przedstawia jedno skrajne rozwiązanie. Potrzebne są źródło pierwotne, opis metody i stanowiska z różnych perspektyw.</p></details>
''')
set_body('m3-23-zadanie-refleksyjne',f'''
<p>Zakończ moduł trzema krótkimi odpowiedziami.</p><div class="exercise-compact"><div class="compact-grid three">
{select_field('m3-r23-skill','Którą umiejętność chcesz stosować częściej?',[('source','Ocenę źródła'),('evidence','Ocenę dowodów'),('logic','Rozpoznawanie błędów rozumowania'),('alternatives','Szukanie innych wyjaśnień'),('decision','Uporządkowane podejmowanie decyzji')])}
{select_field('m3-r23-risk','Największe ryzyko podczas korzystania z AI',[('false','Błędne informacje'),('missing','Brak źródeł i kontekstu'),('bias','Stronniczość'),('overtrust','Nadmierne zaufanie'),('all','Kilka ryzyk naraz')])}
{text_field('m3-r23-question','Pytanie, które zadam przed decyzją','Jedno pytanie',2)}
</div></div>
''')
set_body('m3-24-krotka-samoocena',assessment(3,'m3-assess',[
    'Odróżniam fakty, opinie, interpretacje i założenia.',
    'Potrafię ocenić wiarygodność źródła.',
    'Sprawdzam, czy dowód rzeczywiście wspiera tezę.',
    'Rozważam alternatywne wyjaśnienia przed decyzją.',
    'Rozumiem ograniczenia AI podczas podejmowania decyzji.'
]))

# MODULE 4
replace_from_heading('m4-5-narracje-medialne-i-ramy-interpretacyjne','Ćwiczenie 4.1.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 4.1. Porównaj dwa nagłówki</h3><div class="headline-pair"><blockquote><strong>A</strong> „Nowe centrum obsługi migrantów pomoże rodzinom sprawniej załatwić formalności”.</blockquote><blockquote><strong>B</strong> „Kolejne wydatki na migrantów – miasto uruchamia specjalne centrum”.</blockquote></div><div class="compact-grid two">
{select_field('m4-e41-a','Rama nagłówka A',[('service','Usługi i wsparcie'),('cost','Koszty i obciążenie'),('security','Bezpieczeństwo'),('conflict','Konflikt')])}
{select_field('m4-e41-b','Rama nagłówka B',[('service','Usługi i wsparcie'),('cost','Koszty i obciążenie'),('security','Bezpieczeństwo'),('conflict','Konflikt')])}
{select_field('m4-e41-emotion','Który nagłówek silniej wywołuje emocje?',[('a','A'),('b','B'),('both','Oba'),('none','Żaden')])}
{select_field('m4-e41-data','Jakich danych potrzeba?',[('cost','Kosztów i źródeł finansowania'),('users','Liczby i potrzeb użytkowników'),('effects','Efektów działania centrum'),('all','Wszystkich tych danych')])}
</div>{text_field('m4-e41-word','Słowo najmocniej ustawiające ramę – opcjonalnie','Jedno słowo lub zwrot',1)}</div>
''')
replace_from_heading('m4-7-migracja-uchodzcy-i-sposob-przedstawiania-ludzi','Ćwiczenie 4.2.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 4.2. Uogólnienie czy uzasadniony wniosek</h3><aside class="course-callout course-callout--example"><p>„Jedna osoba objęta ochroną międzynarodową popełniła przestępstwo, więc przyjmowanie uchodźców zwiększa przestępczość”.</p></aside><div class="compact-grid two">
{select_field('m4-e42-fact','Co jest faktem możliwym do sprawdzenia?',[('one','Czy konkretna osoba popełniła przestępstwo'),('all','Czy wszyscy uchodźcy popełniają przestępstwa'),('cause','Czy przyjęcie uchodźców powoduje wzrost przestępczości'),('none','Żaden element')])}
{select_field('m4-e42-general','Gdzie pojawia się uogólnienie?',[('oneToGroup','Od jednej osoby do całej grupy'),('city','Od miasta do całego kraju'),('time','Od jednego roku do wielu lat'),('none','Nie ma uogólnienia')])}
{select_field('m4-e42-assumption','Jakie założenie jest ukryte?',[('cause','Jedno zdarzenie dowodzi związku przyczynowego'),('equal','Wszystkie grupy mają takie same cechy'),('data','Dane są kompletne'),('several','Kilka założeń naraz')])}
{select_field('m4-e42-data','Jakich danych potrzeba?',[('rates','Porównywalnych wskaźników przestępczości'),('period','Danych z dłuższego okresu'),('groups','Danych dla różnych grup i liczebności'),('causes','Analizy innych przyczyn'),('all','Pełnego zestawu tych danych')])}
</div></div>
''')
replace_from_heading('m4-8-wojna-konflikt-i-wiarygodnosc-informacji','Ćwiczenie 4.3.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 4.3. Czy udostępnić nagranie?</h3><p class="exercise-intro">Nagranie pokazuje rzekomy atak, lecz nie zawiera miejsca, daty ani źródła. Widać twarze i tablice rejestracyjne.</p><div class="compact-grid two">
{select_field('m4-e43-known','Co wiadomo na pewno?',[('attack','Nagranie przedstawia potwierdzony atak'),('video','Istnieje nagranie przedstawiające niejasne zdarzenie'),('place','Znamy miejsce i datę'),('author','Znamy autora')])}
{select_field('m4-e43-verify','Jak sprawdzić miejsce i datę?',[('metadata','Metadane i szczegóły obrazu'),('reverse','Wyszukiwanie wsteczne i kadry'),('sources','Wiarygodne źródła lokalne i oficjalne'),('all','Połączyć kilka metod')])}
{select_field('m4-e43-harm','Czy publikacja może zaszkodzić widocznym osobom?',[('yes','Tak'),('no','Nie'),('unknown','Nie wiadomo')])}
{select_field('m4-e43-alternative','Czy istnieje mniej szkodliwe źródło?',[('yes','Tak – należy użyć zweryfikowanego materiału'),('no','Nie'),('notchecked','Jeszcze nie sprawdziłem')])}
{select_field('m4-e43-decision','Decyzja',[('share','Udostępniam nagranie'),('blur','Udostępniam po zasłonięciu danych'),('verify','Nie udostępniam przed weryfikacją'),('report','Zgłaszam i nie rozpowszechniam')])}
{text_field('m4-e43-note','Jedno uzasadnienie – opcjonalnie','Jedno zdanie',1)}
</div></div>
''')
set_body('m4-15-narzedzie-analityczne-rozkladanie-narracji-na-czesci',f'''
<p>Wybierz artykuł, film, post lub grafikę dotyczącą sprawy społecznie wrażliwej. Zamiast dziesięciu opisów wykonaj pięć kontroli.</p><div class="exercise-compact"><div class="compact-grid two">
{select_field('m4-n15-frame','Jaka rama dominuje?',[('security','Bezpieczeństwo'),('humanitarian','Humanitarna'),('economic','Gospodarcza'),('cultural','Kulturowa'),('political','Polityczna'),('moral','Moralna')])}
{select_field('m4-n15-language','Jaki jest język?',[('neutral','Neutralny'),('emotional','Emocjonalny'),('polarizing','Polaryzujący'),('dehumanizing','Dehumanizujący'),('mixed','Mieszany')])}
{select_field('m4-n15-evidence','Jak oceniasz dowody?',[('strong','Sprawdzalne i aktualne'),('partial','Częściowe'),('weak','Słabe lub bez kontekstu'),('none','Brak dowodów')])}
{select_field('m4-n15-voices','Czy pokazano różne perspektywy?',[('yes','Tak'),('partial','Tylko częściowo'),('no','Nie'),('unknown','Nie wiem')])}
{select_field('m4-n15-impact','Możliwy skutek udostępnienia',[('inform','Lepsze poinformowanie'),('mobilize','Mobilizacja do działania'),('divide','Polaryzacja lub szkoda'),('mixed','Skutki mieszane'),('unknown','Nie wiem')])}
{text_field('m4-n15-missing','Najważniejszy brak – opcjonalnie','Jedna perspektywa, źródło lub kontekst',1)}
</div></div>
''')
set_body('m4-16-praktyczny-przyklad-do-analizy',f'''
<aside class="course-callout course-callout--example"><strong>Fikcyjny post</strong><p>„PILNE: Nowe dane dowodzą, że uchodźcy odpowiadają za wzrost przestępczości w naszym mieście. Władze ukrywają prawdę, bo boją się oskarżeń o rasizm. Udostępnij, zanim media usuną ten post!”.</p></aside><div class="compact-grid two">
{select_field('m4-p16-data','Czy „nowe dane” mają źródło i kontekst?',[('yes','Tak'),('partial','Tylko częściowo'),('no','Nie')])}
{select_field('m4-p16-group','Jak przedstawiono grupę?',[('individual','Jako zróżnicowane osoby'),('whole','Jako jednorodne zagrożenie'),('neutral','Neutralnie'),('unknown','Nie wiem')])}
{select_field('m4-p16-emotion','Jaki mechanizm dominuje?',[('fear','Strach'),('conspiracy','Rama spiskowa'),('urgency','Presja czasu'),('several','Kilka mechanizmów')])}
{select_field('m4-p16-missing','Czego brakuje najbardziej?',[('rates','Porównywalnych danych'),('context','Kontekstu i innych przyczyn'),('voices','Perspektywy osób, których dotyczy post'),('all','Wszystkich tych elementów')])}
{select_field('m4-p16-action','Odpowiedzialna reakcja',[('share','Udostępnić ostrzeżenie'),('verify','Sprawdzić dane i źródła'),('comment','Skomentować emocjonalnie'),('ignore','Pominąć bez analizy')])}
{text_field('m4-p16-check','Pierwsza rzecz do sprawdzenia – opcjonalnie','Jedna informacja',1)}
</div><details class="exercise-feedback"><summary>Sprawdź wskazówki</summary><p>Post przenosi odpowiedzialność z jednostek na całą grupę, nie pokazuje danych i sugeruje zmowę władz oraz mediów. Wymaga sprawdzenia statystyk, kontekstu i alternatywnych wyjaśnień.</p></details>
''')
set_body('m4-18-zadanie-refleksyjne',f'''
<p>Wybierz trzy odpowiedzi i zapisz jedną zasadę etyczną.</p><div class="exercise-compact"><div class="compact-grid three">
{select_field('m4-r18-topic','Który temat wymaga od Ciebie największej ostrożności?',[('migration','Migracja i uchodźcy'),('war','Wojna i konflikt'),('politics','Polityka i wybory'),('identity','Tożsamość i mniejszości'),('health','Zdrowie publiczne')])}
{select_field('m4-r18-frame','Na którą ramę chcesz uważać?',[('threat','Jednorodne zagrożenie'),('conspiracy','Spisek i ukrywanie prawdy'),('dehumanization','Dehumanizacja'),('usThem','Podział „my–oni”'),('single','Pojedynczy przypadek jako reguła')])}
{select_field('m4-r18-question','Co sprawdzisz najpierw?',[('source','Źródło i datę'),('data','Dane i metodę'),('context','Kontekst obrazu lub nagrania'),('voices','Brakujące perspektywy'),('harm','Możliwą szkodę')])}
</div>{text_field('m4-r18-rule','Moja zasada przed udostępnieniem treści wrażliwej','Jedno zdanie',2)}</div>
''')
set_body('m4-19-krotka-samoocena',assessment(4,'m4-assess',[
    'Rozpoznaję narracje i ramy medialne.',
    'Zauważam stereotypy i język dehumanizujący.',
    'Sprawdzam wpływ nagłówka i obrazu na interpretację.',
    'Oceniam kontekst i możliwą szkodę przed udostępnieniem.',
    'Rozpoznaję wpływ AI na tematy społecznie wrażliwe.'
]))

# MODULE 5
replace_from_heading('m5-5-przeciazenie-informacyjne-i-doomscrolling','Ćwiczenie 5.1.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 5.1. Mój sygnał przeciążenia</h3><p class="exercise-intro">Zaznacz zachowania zauważone w ostatnich dwóch tygodniach. To nie jest diagnoza.</p><div class="choice-grid">
{checkbox('m5-e51-noaim','Sprawdzam wiadomości bez konkretnego celu','Sygnał przeciążenia — bez celu')}
{checkbox('m5-e51-repeat','Wracam do tego samego tematu wiele razy','Sygnał przeciążenia — powtarzanie')}
{checkbox('m5-e51-night','Czytam obciążające treści przed snem','Sygnał przeciążenia — przed snem')}
{checkbox('m5-e51-tension','Czuję napięcie, ale nadal przewijam','Sygnał przeciążenia — napięcie')}
{checkbox('m5-e51-avoid','Unikam wiadomości z powodu przesytu','Sygnał przeciążenia — unikanie')}
</div><div class="compact-grid two">
{select_field('m5-e51-priority','Który sygnał chcesz ograniczyć najpierw?',[('noaim','Sprawdzanie bez celu'),('repeat','Ciągłe wracanie do tematu'),('night','Wiadomości przed snem'),('tension','Przewijanie mimo napięcia'),('avoid','Całkowite unikanie')])}
{select_field('m5-e51-action','Pierwszy krok',[('times','Ustalam godziny sprawdzania'),('notifications','Wyłączam część powiadomień'),('sleep','Kończę wiadomości przed snem'),('pause','Robię przerwę po sygnale napięcia'),('sources','Ograniczam liczbę źródeł')])}
</div></div>
''')
replace_from_heading('m5-7-zdrowe-nawyki-korzystania-z-mediow','Ćwiczenie 5.2.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 5.2. Trzy momenty kontaktu z informacją</h3><p class="exercise-intro">Zamiast prowadzić całodzienny dziennik wybierz trzy typowe momenty. W każdym wierszu zaznacz źródło, cel i odczucie.</p><div class="course-table-wrap"><table class="course-table micro-log"><thead><tr><th>Moment</th><th>Źródło</th><th>Cel</th><th>Odczucie po zakończeniu</th></tr></thead><tbody>
<tr><th>1</th><td><select class="course-answer" data-save-key="m5-e52-1-source" data-workbook-label="Kontakt 1 — źródło"><option value="">Wybierz</option><option>Portal informacyjny</option><option>Media społecznościowe</option><option>Komunikator</option><option>Wyszukiwarka</option><option>Narzędzie AI</option></select></td><td><select class="course-answer" data-save-key="m5-e52-1-purpose" data-workbook-label="Kontakt 1 — cel"><option value="">Wybierz</option><option>Konkretną informację</option><option>Aktualności</option><option>Rozrywkę</option><option>Z przyzwyczajenia</option><option>Pracę lub naukę</option></select></td><td><select class="course-answer" data-save-key="m5-e52-1-feeling" data-workbook-label="Kontakt 1 — odczucie"><option value="">Wybierz</option><option>Spokojnie</option><option>Lepiej poinformowany</option><option>Obojętnie</option><option>Napięcie</option><option>Przeciążenie</option></select></td></tr>
<tr><th>2</th><td><select class="course-answer" data-save-key="m5-e52-2-source" data-workbook-label="Kontakt 2 — źródło"><option value="">Wybierz</option><option>Portal informacyjny</option><option>Media społecznościowe</option><option>Komunikator</option><option>Wyszukiwarka</option><option>Narzędzie AI</option></select></td><td><select class="course-answer" data-save-key="m5-e52-2-purpose" data-workbook-label="Kontakt 2 — cel"><option value="">Wybierz</option><option>Konkretną informację</option><option>Aktualności</option><option>Rozrywkę</option><option>Z przyzwyczajenia</option><option>Pracę lub naukę</option></select></td><td><select class="course-answer" data-save-key="m5-e52-2-feeling" data-workbook-label="Kontakt 2 — odczucie"><option value="">Wybierz</option><option>Spokojnie</option><option>Lepiej poinformowany</option><option>Obojętnie</option><option>Napięcie</option><option>Przeciążenie</option></select></td></tr>
<tr><th>3</th><td><select class="course-answer" data-save-key="m5-e52-3-source" data-workbook-label="Kontakt 3 — źródło"><option value="">Wybierz</option><option>Portal informacyjny</option><option>Media społecznościowe</option><option>Komunikator</option><option>Wyszukiwarka</option><option>Narzędzie AI</option></select></td><td><select class="course-answer" data-save-key="m5-e52-3-purpose" data-workbook-label="Kontakt 3 — cel"><option value="">Wybierz</option><option>Konkretną informację</option><option>Aktualności</option><option>Rozrywkę</option><option>Z przyzwyczajenia</option><option>Pracę lub naukę</option></select></td><td><select class="course-answer" data-save-key="m5-e52-3-feeling" data-workbook-label="Kontakt 3 — odczucie"><option value="">Wybierz</option><option>Spokojnie</option><option>Lepiej poinformowany</option><option>Obojętnie</option><option>Napięcie</option><option>Przeciążenie</option></select></td></tr>
</tbody></table></div>{select_field('m5-e52-observation','Co zauważyłeś?',[('purpose','Najczęściej korzystam w konkretnym celu'),('habit','Często działam z przyzwyczajenia'),('calm','Kontakt z informacją zwykle mnie nie obciąża'),('stress','Często kończę z napięciem'),('mixed','Moje reakcje są zróżnicowane')])}</div>
''')
replace_from_heading('m5-8-od-reakcji-do-odpowiedzi','Ćwiczenie 5.3.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 5.3. Zmień reakcję w odpowiedź</h3><aside class="course-callout course-callout--example"><p>W komunikatorze ktoś pisze: „Właśnie zamykają wszystkie urzędy pracy. Media milczą. Podaj dalej!”.</p></aside><div class="compact-grid two">
{select_field('m5-e53-reaction','Pierwszy impuls',[('share','Przesłać dalej'),('anger','Odpisać ze złością'),('ask','Poprosić o źródło'),('pause','Zatrzymać się i sprawdzić')])}
{select_field('m5-e53-emotion','Emocja',[('fear','Strach'),('anger','Złość'),('uncertainty','Niepewność'),('urgency','Presja czasu'),('none','Brak silnej emocji')])}
{select_field('m5-e53-check','Pierwszy krok weryfikacji',[('official','Sprawdzić oficjalne strony instytucji'),('search','Wpisać nagłówek w wyszukiwarkę'),('askai','Zapytać wyłącznie AI'),('friends','Zapytać znajomych')])}
{select_field('m5-e53-response','Najlepsza spokojna odpowiedź',[('a','„Podeślij proszę źródło. Sprawdzę komunikaty oficjalne, zanim przekażemy to dalej.”'),('b','„To na pewno kłamstwo, nie pisz takich rzeczy.”'),('c','„Brzmi pilnie, więc wysyłam dalej na wszelki wypadek.”')])}
</div>{text_field('m5-e53-own','Własna wersja odpowiedzi – opcjonalnie','Jedno lub dwa zdania',2)}</div>
''')
replace_from_heading('m5-11-dialog-spor-i-obywatelstwo-cyfrowe','Ćwiczenie 5.4.',f'''
<div class="exercise-compact"><h3>Ćwiczenie 5.4. Sprzeciw bez ataku na osobę</h3><aside class="course-callout course-callout--example"><p>„Nie masz pojęcia, o czym piszesz. Tylko idiota wierzy takim statystykom”.</p></aside><p class="exercise-intro">Wybierz odpowiedź, która przenosi rozmowę z osoby na dane i metodę.</p>{select_field('m5-e54-best','Najlepsza wersja',[('a','„Nie zgadzam się z tym wnioskiem. Sprawdźmy źródło danych, okres i sposób liczenia.”'),('b','„Sam jesteś naiwny, skoro wierzysz tym liczbom.”'),('c','„Każdy ma swoją prawdę, więc nie ma czego sprawdzać.”'),('d','„Te statystyki są głupie.”')])}{text_field('m5-e54-own','Własna wersja – opcjonalnie','Jedno zdanie odnoszące się do twierdzenia lub danych',2)}</div>
''')
set_body('m5-16-narzedzie-zdrowa-rutyna-medialna',f'''
<figure class="course-figure">{str(soup.find(id='m5-16-narzedzie-zdrowa-rutyna-medialna').select_one('figure.course-figure')) if soup.find(id='m5-16-narzedzie-zdrowa-rutyna-medialna').select_one('figure.course-figure') else ''}</figure><p>Plan ma być prosty do zastosowania. Wybierz po jednej decyzji w pięciu obszarach.</p><div class="exercise-compact"><div class="compact-grid two">
{select_field('m5-p16-sources','Źródła',[('few','Zostawiam kilka sprawdzonych źródeł'),('many','Śledzę jak najwięcej źródeł'),('social','Korzystam głównie z mediów społecznościowych'),('official','Korzystam wyłącznie ze źródeł oficjalnych')])}
{select_field('m5-p16-time','Godziny sprawdzania wiadomości',[('set','Ustalam 1–3 konkretne pory'),('continuous','Sprawdzam przez cały dzień'),('morning','Tylko rano'),('evening','Tylko wieczorem')])}
{select_field('m5-p16-break','Sygnał do przerwy',[('tension','Napięcie lub zmęczenie'),('repeat','Powtarzanie tego samego przewijania'),('sleep','Zbliżająca się pora snu'),('all','Każdy z tych sygnałów')])}
{select_field('m5-p16-verify','Weryfikacja trudnej informacji',[('official','Źródło oficjalne lub pierwotne'),('expert','Ekspert lub fact-checker'),('friend','Znajomy'),('ai','Wyłącznie odpowiedź AI'),('several','Co najmniej dwa różne źródła')])}
{select_field('m5-p16-action','Jedno działanie społeczne lub obywatelskie',[('talk','Spokojna rozmowa'),('correct','Udostępnienie sprostowania'),('official','Sięgnięcie do dokumentu lub konsultacji'),('help','Pomoc komuś w weryfikacji'),('none','Na razie nie wybieram działania')])}
{text_field('m5-p16-commit','Jedno zobowiązanie na tydzień – opcjonalnie','Konkretne i wykonalne',1)}
</div></div>
''')
set_body('m5-17-narzedzie-share-udostepniaj-odpowiedzialnie',f'''
<div class="legacy-media">{str(soup.find(id='m5-17-narzedzie-share-udostepniaj-odpowiedzialnie').select_one('.legacy-media')) if soup.find(id='m5-17-narzedzie-share-udostepniaj-odpowiedzialnie').select_one('.legacy-media') else ''}</div><p>Wybierz post, który rozważasz udostępnić. Przy każdej literze wybierz odpowiedź; nie musisz pisać pełnych notatek.</p><div class="exercise-compact"><div class="compact-grid two">
{select_field('m5-share-s','S – Czy znam źródło?',[('yes','Tak i jest wiarygodne'),('partial','Znam je częściowo'),('no','Nie'),('unknown','Nie wiem')])}
{select_field('m5-share-h','H – Czy treść może zaszkodzić?',[('no','Ryzyko jest małe'),('possible','Może wprowadzić w błąd lub narazić kogoś'),('yes','Ryzyko jest wysokie'),('unknown','Nie wiem')])}
{select_field('m5-share-a','A – Czy są dowody?',[('strong','Tak – konkretne i sprawdzalne'),('partial','Częściowe'),('none','Brak'),('unknown','Nie wiem')])}
{select_field('m5-share-r','R – Dlaczego chcę udostępnić?',[('inform','Aby rzetelnie poinformować'),('emotion','Pod wpływem emocji'),('identity','Aby pokazać przynależność lub stanowisko'),('pressure','Bo inni udostępniają')])}
{select_field('m5-share-e','E – Jaka emocja dominuje?',[('calm','Spokój'),('fear','Strach'),('anger','Złość'),('outrage','Oburzenie'),('hope','Nadzieja')])}
{select_field('m5-share-decision','Decyzja',[('share','Udostępniam'),('verify','Najpierw sprawdzam'),('dont','Nie udostępniam'),('alternative','Szukam bezpieczniejszego źródła')])}
</div></div>
''')
set_body('m5-18-przyklad-do-dyskusji',f'''
<aside class="course-callout course-callout--example"><strong>Fikcyjny post</strong><p>„Każdego dnia wiadomości są gorsze. Niczemu nie można już ufać. System całkowicie się rozpadł, a głosowanie i zabieranie głosu nie ma sensu. Udostępnij, jeżeli jesteś świadomy”.</p></aside><div class="compact-grid two">
{select_field('m5-p18-emotion','Jaka emocja dominuje?',[('hopeless','Beznadzieja'),('anger','Złość'),('fear','Strach'),('pride','Poczucie wyższości grupy'),('several','Kilka emocji')])}
{select_field('m5-p18-evidence','Czy post przedstawia dowody?',[('yes','Tak'),('partial','Nieliczne'),('no','Nie – głównie oceny i emocje')])}
{select_field('m5-p18-democracy','Jak może wpłynąć na udział w demokracji?',[('engage','Zachęcić do działania'),('withdraw','Zniechęcić i skłonić do wycofania'),('neutral','Nie wpłynie'),('mixed','Wpływ może być mieszany')])}
{select_field('m5-p18-response','Bardziej odporna odpowiedź',[('accept','Uznać frustrację, sprawdzić fakty i poszukać możliwości działania'),('share','Udostępnić, aby pokazać świadomość'),('avoid','Całkowicie przestać śledzić informacje'),('attack','Założyć, że inni są naiwni')])}
{select_field('m5-p18-action','Co może zmniejszyć bezsilność?',[('sources','Ograniczona liczba wiarygodnych źródeł'),('local','Lokalne działanie lub konsultacja'),('dialogue','Spokojna rozmowa oparta na danych'),('all','Połączenie tych działań')])}
{text_field('m5-p18-own','Jedno działanie, które wybierasz – opcjonalnie','Krótka odpowiedź',1)}
</div><details class="exercise-feedback"><summary>Sprawdź wskazówki</summary><p>Post buduje całkowitą nieufność i przedstawia wycofanie jako oznakę świadomości. Odporna reakcja łączy sprawdzanie informacji z możliwością konstruktywnego działania.</p></details>
''')
set_body('m5-20-zadanie-refleksyjne',f'''
<p>Wybierz trzy odpowiedzi i zapisz jedno zobowiązanie.</p><div class="exercise-compact"><div class="compact-grid three">
{select_field('m5-r20-stress','Co najczęściej zwiększa mój stres?',[('continuous','Ciągłe sprawdzanie'),('negative','Duża liczba negatywnych treści'),('conflict','Konflikty w komentarzach'),('uncertainty','Sprzeczne informacje'),('notifications','Powiadomienia')])}
{select_field('m5-r20-limit','Jak ograniczę przeciążenie?',[('times','Ustalę pory sprawdzania'),('sources','Ograniczę liczbę źródeł'),('breaks','Wprowadzę przerwy'),('sleep','Zakończę media przed snem'),('all','Połączę kilka działań')])}
{select_field('m5-r20-dialogue','Jak będę uczestniczyć w rozmowach online?',[('source','Podam źródło'),('person','Oddzielę osobę od poglądu'),('pause','Zrobię przerwę przed odpowiedzią'),('question','Zadam pytanie zamiast atakować'),('several','Połączę kilka zasad')])}
</div>{text_field('m5-r20-commit','Moje jedno zobowiązanie','Konkretne działanie na najbliższy tydzień',2)}</div>
''')
set_body('m5-21-krotka-samoocena',assessment(5,'m5-assess',[
    'Rozpoznaję sygnały przeciążenia informacyjnego.',
    'Potrafię ograniczyć doomscrolling i ustalić granice.',
    'Zatrzymuję się przed reakcją na emocjonalną treść.',
    'Prowadzę spór bez atakowania osoby.',
    'Podejmuję odpowiedzialną decyzję przed udostępnieniem.'
]))

# Add CSS + JS refs
head=soup.head
if not soup.find('link',href=lambda x:x and 'course-exercises-compact.css' in x):
    link=soup.new_tag('link',rel='stylesheet',href='assets/course-exercises-compact.css?v=20260730-1')
    head.append(link)
if not soup.find('script',src=lambda x:x and 'course-exercises-compact.js' in x):
    script=soup.new_tag('script',src='assets/course-exercises-compact.js?v=20260730-1',defer='')
    # insert before forms js
    anchor=soup.find('script',src=lambda x:x and 'course-forms.js' in x)
    anchor.insert_before(script)
# editorial version
meta=soup.find('meta',attrs={'name':'course-editorial-version'})
if meta: meta['content']='2026-07-30-online-exercises-streamlined'

# Workbook label support
wb=ROOT/'assets/course-workbook.js'
js=wb.read_text(encoding='utf-8')
old="function label(f,sec){const t=tableInfo(f);"
new="function label(f,sec){if(f.dataset.workbookLabel)return f.dataset.workbookLabel;const t=tableInfo(f);"
if old in js: js=js.replace(old,new,1)
wb.write_text(js,encoding='utf-8')

HTML.write_text(str(soup),encoding='utf-8')
print('rewritten')
