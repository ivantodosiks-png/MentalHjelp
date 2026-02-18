# Dokumentasjon - Skolehelsetjenesten (Hamar katedralskole)

## Kort om prosjektet
Dette prosjektet er en enkel nettside for skolehelsetjenesten ved Hamar katedralskole. Målgruppen er elever i alderen 16-19 år. Siden skal gi trygg informasjon om mental helse, kontakt og hvordan elever kan få hjelp raskt.

## Analyse
Før forbedring var siden funksjonell, men designet var mindre tydelig på mobil og noen deler var lite tilgjengelige. Jeg så spesielt på disse behovene:
- Elever må finne kontaktinfo veldig raskt.
- Innhold om mental helse må være kort, tydelig og trygt skrevet.
- Siden må være lett å bruke på mobil, fordi mange elever bruker telefon.
- Fokusmarkering, kontrast og ARIA må være tydelig for universell utforming.

## Persona
**Navn:** Emma (17)
**Situasjon:** Går på VGS, har skolepress og sover dårlig.
**Behov:** Hun vil finne hjelp uten å måtte forklare alt med en gang.
**Digital vane:** Bruker mobil mest, skroller raskt, leser korte tekster.
**Mål:** Finne telefon/SMS og forstå hvordan samtale fungerer.

## 3 mål
1. Gjøre det enkelt å kontakte helsesykepleier på under ett minutt.
2. Forklare mental helse-temaer på en trygg og lavterskel måte.
3. Lage en mobilvennlig og tilgjengelig side med god kontrast og tydelig navigasjon.

## Struktur
Siden er bygget med tydelige seksjoner:
- Hero med hovedbudskap og rask kontakt
- Mental helse-kort (cards)
- Helsesykepleiere (team)
- Kontaktseksjon med steg-for-steg
- FAQ med spørsmål/svar
- Footer med kilde

Denne strukturen gjør at brukeren kan gå fra informasjon til handling uten mye scrolling eller leting.

## Designvalg
**Farger:**
- Rolige blå/grønne toner for trygghet
- Varm accent-farge for viktige elementer
- Høy kontrast mellom tekst og bakgrunn

**Typografi:**
- `Sora` for overskrifter (tydelig og moderne)
- `Manrope` for brødtekst (lesbar på mobil)

**Tone of voice:**
- Enkel, varm og direkte
- Lav terskel og ikke for "voksen" språk
- Kort tekst som passer elever

## Teknisk løsning
Løsningen bruker kun HTML, CSS og JavaScript.

**HTML:**
- Semantiske seksjoner (`header`, `main`, `section`, `footer`)
- Tydelige id-er for ankerlenker
- ARIA-attributter for meny, FAQ og skjema

**CSS:**
- CSS-variabler for farger, spacing, radius og skygger
- Responsive grid-layout for cards og kontaktfelt
- Hover-effekter på knapper og kort
- Små animasjoner (`pulse`, `reveal`, bakgrunnsformer)

**JavaScript:**
- Mobilmeny toggle + lukking med klikk utenfor og `Escape`
- Show/hide for ekstra tekst om taushetsplikt
- Fake submit-melding i kontaktskjema
- FAQ show/hide med `aria-expanded`

## Universell utforming
Jeg har forbedret UU med konkrete tiltak:
- `skip-link` for tastaturbrukere
- Tydelig `focus-visible` på knapper, lenker og felter
- God kontrast i tekst og knapper
- `aria-controls`, `aria-expanded`, `aria-live` og `role="status"`
- Responsivt design med god lesbarhet på små skjermer
- Støtte for `prefers-reduced-motion`

## Refleksjon
Resultatet er mer moderne, mer mobilvennlig og enklere å bruke for elever. Kontaktinformasjon er tydeligere, mental helse-kort gjør innholdet mer relevant, og interaksjoner føles mer levende uten å være for mye.

Hvis jeg skulle forbedre videre, ville jeg:
1. Koble skjema til ekte backend med sikker lagring.
2. Lage egen side for akutt hjelp med større synlighet.
3. Teste med ekte elever og justere tekst etter tilbakemeldinger.
