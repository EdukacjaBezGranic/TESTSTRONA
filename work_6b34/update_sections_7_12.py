from pathlib import Path
from html import escape
import re

ROOT = Path('/mnt/data/course_module1_multi_update')
HTML = ROOT / 'kurs-fake-news.html'
CSS = ROOT / 'assets/course-v2.css'
FILE7 = Path('/mnt/data/Wklejony tekst(5).txt')
FILE12 = Path('/mnt/data/Wklejony tekst(4).txt')

lines7 = FILE7.read_text(encoding='utf-8').splitlines()
lines12 = FILE12.read_text(encoding='utf-8').splitlines()

def l(lines, n):
    return lines[n-1].strip()

def p(text):
    return f'<p>{escape(text)}</p>'

def h3(text):
    text = re.sub(r'^([A-Z])\.\s*', r'\1. ', text)
    return f'<h3>{escape(text)}</h3>'

def h4(text):
    return f'<h4>{escape(text)}</h4>'

def ul(items):
    out = ['<ul>']
    for item in items:
        item = item.strip().rstrip(',')
        out.append(f'<li>{escape(item)}</li>')
    out.append('</ul>')
    return ''.join(out)

def callout(title, paragraphs, kind='info'):
    out = [f'<aside class="course-callout course-callout--{kind}"><strong>{escape(title)}</strong>']
    for para in paragraphs:
        out.append(p(para))
    out.append('</aside>')
    return ''.join(out)

def process_flow(text, label='Schemat działania'):
    steps = [x.strip() for x in text.split('→')]
    out = [f'<div class="course-process-flow" aria-label="{escape(label)}">']
    for i, step in enumerate(steps):
        out.append(f'<span>{escape(step)}</span>')
        if i < len(steps)-1:
            out.append('<b aria-hidden="true">→</b>')
    out.append('</div>')
    return ''.join(out)

def table(headers, rows, wide=False):
    cls = 'course-table course-table--wide' if wide else 'course-table'
    out = [f'<div class="course-table-wrap"><table class="{cls}"><thead><tr>']
    for head in headers:
        out.append(f'<th>{escape(head)}</th>')
    out.append('</tr></thead><tbody>')
    for row in rows:
        out.append('<tr>')
        for idx, cell in enumerate(row):
            tag = 'th' if idx == 0 else 'td'
            scope = ' scope="row"' if idx == 0 else ''
            out.append(f'<{tag}{scope}>{escape(cell)}</{tag}>')
        out.append('</tr>')
    out.append('</tbody></table></div>')
    return ''.join(out)

def section_header(number, title, section_id):
    return f'''<header class="course-section-header">
<div class="section-index">{number}</div>
<div><p class="section-eyebrow">Moduł 1</p><h2>{escape(str(number) + '. ' + title)}</h2></div>
<button aria-label="Oznacz sekcję jako przeczytaną: {escape(str(number) + '. ' + title)}" class="section-check" data-toggle-complete="{section_id}" title="Oznacz jako przeczytaną" type="button"><span aria-hidden="true">✓</span></button>
</header>'''

# SECTION 7
s7 = []
s7.append('<div class="course-section-body">')
s7.append('''<div aria-label="Ilustracja do tematu" class="legacy-media"><div class="legacy-media-grid legacy-media-grid--single"><figure class="legacy-media-card"><a href="grafiki/algorytmiczna-pulapka-banka-filtrujaca.png" rel="noopener" target="_blank"><img alt="Algorytmiczna pułapka – personalizacja i bańka filtrująca" loading="lazy" src="grafiki/algorytmiczna-pulapka-banka-filtrujaca.png"></a><figcaption><strong>Algorytmiczna pułapka</strong><span>Aktywność użytkownika wpływa na kolejne rekomendacje i może stopniowo zawężać widoczny strumień informacji.</span></figcaption></figure></div></div>''')
s7.append(h3(l(lines7,2).replace(' - ', ' – ')))
for n in [4,6,8,10,12]: s7.append(p(l(lines7,n)))
s7.append(process_flow(l(lines7,14), 'Pętla personalizacji'))
for n in [16,18]: s7.append(p(l(lines7,n)))

s7.append('''<div class="course-video-feature">
<div class="course-video-feature__copy"><p class="section-kicker">Materiał wideo</p><h4>Jak działają algorytmy Facebooka?</h4><p>Obejrzyj materiał o doborze treści i bańkach informacyjnych. Zwróć uwagę na to, jakie sygnały użytkownika mogą wpływać na kolejność publikacji oraz dlaczego spersonalizowany strumień nie przedstawia pełnego obrazu dostępnych informacji.</p></div>
<div class="course-video-frame"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/GLzHystd0Y4?start=9&amp;rel=0" title="Materiał edukacyjny o działaniu algorytmów i personalizacji"></iframe></div>
<a class="course-video-feature__link" href="https://www.youtube.com/watch?v=GLzHystd0Y4&amp;t=9s" rel="noopener noreferrer" target="_blank">Otwórz film w serwisie YouTube</a>
</div>''')

s7.append(h3(l(lines7,20)))
for n in [22,24]: s7.append(p(l(lines7,n)))
s7.append(h4(l(lines7,26))); s7.append(p(l(lines7,28))); s7.append(ul([l(lines7,n) for n in range(30,38)])); s7.append(p(l(lines7,39)))
s7.append(h4(l(lines7,41))); s7.append(p(l(lines7,43))); s7.append(p(l(lines7,45)))
s7.append(h4(l(lines7,47))); s7.append(p(l(lines7,49))); s7.append(ul([l(lines7,n) for n in range(51,57)])); s7.append(p(l(lines7,58)))
s7.append(h4(l(lines7,60))); s7.append(p(l(lines7,62))); s7.append(ul([l(lines7,n) for n in range(64,72)]))
s7.append(h4(l(lines7,72))); s7.append(p(l(lines7,74))); s7.append(p(l(lines7,76)))

s7.append(h3(l(lines7,78)))
s7.append(p(l(lines7,80)))
s7.append(h4(l(lines7,82))); s7.append(p(l(lines7,84))); s7.append(p(l(lines7,86)))
s7.append(h4(l(lines7,88))); s7.append(p(l(lines7,90))); s7.append(p(l(lines7,92)))
s7.append(p(l(lines7,94)))
s7.append(table(['Mechanizm','Na czym polega'], [['Bańka filtrująca', l(lines7,96).rstrip(',') + '.'], ['Komora echa', l(lines7,97).rstrip('.') + '.']]))
s7.append(p(l(lines7,99)))

s7.append(h3(l(lines7,101)))
for n in [103,105,107,109]: s7.append(p(l(lines7,n)))
s7.append(process_flow(l(lines7,111), 'Powstawanie algorytmicznej pułapki'))
s7.append(p(l(lines7,113)))

s7.append(h3(l(lines7,115)))
subheads7 = {
    116:'Wzmacnianie błędu potwierdzenia',
    122:'Mylenie częstotliwości z prawdziwością',
    128:'Mylenie popularności z wiarygodnością',
    134:'Nasilenie emocjonalnego odbioru',
    140:'Zawężenie obrazu rzeczywistości',
}
for start, title in subheads7.items():
    s7.append(h4(title))
    next_starts = [x for x in subheads7 if x > start] + [146]
    end = min(next_starts)
    for n in range(start+2, end):
        if l(lines7,n): s7.append(p(l(lines7,n)))

s7.append(h3(l(lines7,146)))
s7.append(p(l(lines7,148)))
# Practical subsections
practical = [
    (150, 152, [154,155,156,157,158,159]),
    (160, 162, []),
    (164, 166, []),
    (168, 170, []),
    (172, 174, []),
    (176, 178, [180,181,182,183,184]),
]
for head_line, para_line, list_lines in practical:
    s7.append(h4(l(lines7,head_line)))
    s7.append(p(l(lines7,para_line)))
    if list_lines: s7.append(ul([l(lines7,n) for n in list_lines]))
    # add continuation paragraph where present
    continuation = {160:163,164:167,168:171,172:175,176:186}.get(head_line)
    if continuation and continuation <= len(lines7) and l(lines7,continuation):
        s7.append(p(l(lines7,continuation)))

s7.append(callout('Pytanie do refleksji', [l(lines7,190), l(lines7,192), l(lines7,194)], 'reflection'))
s7.append(callout('Zapamiętaj', [l(lines7,n) for n in [198,200,202,204,206]], 'success'))
s7.append('</div>')
section7_title = 'Algorytmy i personalizacja – algorytmiczna pułapka'
section7 = f'<section class="course-section" data-course-section="m1-7-algorytmy-i-personalizacja" data-module-number="1" id="m1-7-algorytmy-i-personalizacja">{section_header(7, section7_title, "m1-7-algorytmy-i-personalizacja")}{"".join(s7)}</section>'

# SECTION 12
s12 = ['<div class="course-section-body">']
s12.append(h3(l(lines12,2)))
for n in [4,6,8,10,12]: s12.append(p(l(lines12,n)))
s12.append(process_flow(l(lines12,14), 'Skutki dezinformacji'))
s12.append(p(l(lines12,16)))
s12.append(process_flow(l(lines12,18), 'Wpływ edukacji medialnej'))
for n in [20,22]: s12.append(p(l(lines12,n)))

s12.append(h3(l(lines12,24)))
for n in [26,28]: s12.append(p(l(lines12,n)))
s12.append(h4(l(lines12,30))); s12.append(p(l(lines12,32))); s12.append(p(l(lines12,34)))
s12.append(h4(l(lines12,36))); s12.append(p(l(lines12,38))); s12.append(p(l(lines12,40)))
s12.append(h4(l(lines12,42))); s12.append(p(l(lines12,44))); s12.append(p(l(lines12,46))); s12.append(ul([l(lines12,n) for n in range(48,53)])); s12.append(p(l(lines12,54)))

s12.append(h3(l(lines12,56)))
for n in [58,60,62]: s12.append(p(l(lines12,n)))
s12.append(h4(l(lines12,64))); s12.append(p(l(lines12,66))); s12.append(p(l(lines12,68)))
s12.append(h4(l(lines12,70))); s12.append(p(l(lines12,72))); s12.append(p(l(lines12,74))); s12.append(p(l(lines12,76)))
s12.append(h4(l(lines12,78))); s12.append(p(l(lines12,80))); s12.append(p(l(lines12,82)))

s12.append(h3(l(lines12,84)))
for n in [86,88]: s12.append(p(l(lines12,n)))
rows12 = []
for n in range(91,98):
    parts = l(lines12,n).split('\t')
    if len(parts) == 3: rows12.append(parts)
s12.append(table(l(lines12,90).split('\t'), rows12, wide=True))
for head_line, paras in [
    (98,[100,102]),
    (104,[106,108]),
    (110,[112]),
    (114,[116]),
]:
    s12.append(h4(l(lines12,head_line)))
    for n in paras: s12.append(p(l(lines12,n)))

s12.append(h3(l(lines12,118)))
for n in [120,122,124,126]: s12.append(p(l(lines12,n)))
s12.append(callout('Zapamiętaj', [l(lines12,n) for n in [130,132,134,136]], 'success'))
s12.append('</div>')
section12_title = 'Edukacja medialna, demokracja i dobrostan psychiczny'
section12 = f'<section class="course-section" data-course-section="m1-12-edukacja-medialna-demokracja-i-dobrostan" data-module-number="1" id="m1-12-edukacja-medialna-demokracja-i-dobrostan">{section_header(12, section12_title, "m1-12-edukacja-medialna-demokracja-i-dobrostan")}{"".join(s12)}</section>'

html = HTML.read_text(encoding='utf-8')

def replace_section(doc, section_id, new_html):
    marker = f'<section class="course-section" data-course-section="{section_id}"'
    start = doc.find(marker)
    if start < 0:
        raise RuntimeError(f'Nie znaleziono sekcji {section_id}')
    next_start = doc.find('<section class="course-section"', start + len(marker))
    if next_start < 0:
        raise RuntimeError(f'Nie znaleziono kolejnej sekcji po {section_id}')
    return doc[:start] + new_html + '\n' + doc[next_start:]

html = replace_section(html, 'm1-7-algorytmy-i-personalizacja', section7)
html = replace_section(html, 'm1-12-edukacja-medialna-demokracja-i-dobrostan', section12)

# Update sidebar labels only; keep stable IDs and progress keys.
html = html.replace('<span>7. Algorytmy i personalizacja</span>', '<span>7. Algorytmy i personalizacja – algorytmiczna pułapka</span>', 1)
html = html.replace('<span>12. Edukacja medialna, demokracja i dobrostan</span>', '<span>12. Edukacja medialna, demokracja i dobrostan psychiczny</span>', 1)

# Cache busting for changed course CSS.
html = re.sub(r'assets/course-v2\.css\?v=[^"\']+', 'assets/course-v2.css?v=20260731-7', html)
HTML.write_text(html, encoding='utf-8')

css_add = r'''
/* Rozbudowane sekcje Modułu 1: procesy i materiał wideo. */
.course-process-flow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:.55rem;margin:1.2rem 0 1.45rem;padding:1rem;border:1px solid #d6e2e9;border-radius:16px;background:#f3f7fa}.course-process-flow span{display:inline-flex;align-items:center;min-height:42px;padding:.62rem .78rem;border:1px solid #c9d9e3;border-radius:10px;background:#fff;color:#21435e;font-weight:750;text-align:center;box-shadow:0 5px 14px rgba(20,56,82,.06)}.course-process-flow b{color:#376b8d;font-size:1.1rem}.course-video-feature{margin:1.7rem 0;padding:clamp(1rem,2.4vw,1.45rem);border:1px solid #d5e1e8;border-radius:20px;background:linear-gradient(180deg,#f7fafc 0%,#edf4f7 100%)}.course-video-feature__copy{max-width:80ch;margin:0 auto .8rem}.course-video-feature__copy h4{margin:.15rem 0 .45rem;color:#173b5d;font-size:clamp(1.15rem,1.8vw,1.42rem)}.course-video-feature__copy p:last-child{margin-bottom:0;color:#4d606e}.course-video-feature .section-kicker{margin:0 0 .2rem;color:#316487;font-size:.74rem;font-weight:850;letter-spacing:.08em;text-transform:uppercase}.course-video-feature .course-video-frame{margin:1rem auto!important}.course-video-feature__link{display:flex;align-items:center;justify-content:center;width:max-content;max-width:100%;min-height:44px;margin:0 auto;padding:.72rem 1rem;border:1px solid #174b78;border-radius:11px;color:#174b78;font-weight:780;text-decoration:none}.course-video-feature__link:hover,.course-video-feature__link:focus-visible{background:#174b78;color:#fff}@media(max-width:620px){.course-process-flow{display:grid;grid-template-columns:1fr;padding:.75rem}.course-process-flow b{transform:rotate(90deg);justify-self:center}.course-video-feature{margin:1.25rem -.1rem;padding:.85rem;border-radius:15px}.course-video-feature__link{width:100%}}
'''
css = CSS.read_text(encoding='utf-8')
if 'Rozbudowane sekcje Modułu 1: procesy i materiał wideo.' not in css:
    CSS.write_text(css.rstrip() + '\n' + css_add.strip() + '\n', encoding='utf-8')

print('UPDATED')
