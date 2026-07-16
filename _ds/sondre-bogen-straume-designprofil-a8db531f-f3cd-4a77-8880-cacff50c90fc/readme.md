
# Sondre Bogen-Straume — Designprofil

En personlig designprofil («privat designprofil») for Sondre Bogen-Straume — norsk brukerrepresentant i helsetjenesten, programleder for en podcast om autisme, og forfatter av ordlisten *Ord og forkortelser* for helsetjenesten. Dette er ikke en firmaprofil — det er en personlig identitet brukt i brev, presentasjoner og personlige dokumenter. Stilen er klassisk og formell.

## Kilder
- `uploads/Farger.pdf` — offisiell fargepalett (primær, sekundær, neutral) med hex/RGB/CMYK.
- `uploads/Brevmal-Eksempel.docx` / `.pdf` — et gjennomarbeidet eksempelbrev som viser alle avsnitts-/tegnstiler (overskrifter, sitater, infobokser, signaturblokk). Dette er hovedkilden for tekstsystemet — lest direkte fra `word/styles.xml`.
- `uploads/2026-07-15 NYTT DESIGN Ord og forkortelser NyOppf.pdf` — et stort (60-siders) ordlistedokument. Etter oppdraget er dette en **prosjektspesifikk tilpasning** av profilen (bruker Words standardskrifter/-farger av tilgjengelighetsgrunner), ikke selve kjerneprofilen — brukt kun som kontekst, ikke som tokenkilde.
- `SBS/…mhtml` — et lagret øyeblikksbilde av https://sondrestraume.wordpress.com/, Sondres personlige nettside. Bruker Roboto/Playfair Display av praktiske (web-) hensyn — er eksplisitt **ikke** representativt for den trykte/dokumentbaserte identiteten som er fanget her.
- `uploads/lmroman*.otf`, `lmromandemi*.otf` osv. — skriftfilene for Latin Modern Roman-familien (den faktiske skriften som brukes gjennom hele profilen).
- Ikke tilgjengelig: `Personlig presentasjon MAL.potx`, `Brevmal privat 06-24.dotx`, `Forside privat designprofil.dotx` ble oppgitt, men ble ikke lastet opp — flagget nedenfor.

## Skrifter
Latin Modern Roman, brukt i spesifikke **optiske størrelser** (hver «LM Roman N» er en egen design, ikke bare en punktstørrelse):
- **LM Roman 8** — brødtekst, uavhengig av visningsstørrelse.
- **LM Roman Demi 10** — overskrifter og dokumentets tittelstil.
- **LM Roman 10 / 12 / 17** — større visnings-/titteltekst (forsider, presentasjonstitler).
- **LM Roman Caps 10** — kapiteler-aksenter i visningstekst.

## Farger
Se `guidelines/colors-*.card.html` og `tokens/colors.css`. Primær: mørk cyan `#407E82`. Sekundære aksenter (lys/mørk-par): fiolett, rosa, cyan, blå, gul. Sort/hvit/lys grå for struktur.

## INNHOLDSGRUNNLAG
- **Språk:** norsk bokmål (nb-NO), formelt register.
- **Stemme:** rolig, presis og personlig — direkte tiltale i brev («Hei, [navn]»), men strukturert og profesjonell. Ikke pratsom; ingen emoji, ingen slang.
- **Setningsstruktur:** lange, velformede setninger; utbredt bruk av underordnede ledd typisk for formell norsk skriftlig stil; nummerert/bokstavert avsnittshierarki (1, 1.1, 1.1.1) for strukturerte dokumenter.
- **Uthevingssystemet er bevisst og lagdelt** — brevmalen definerer fire eskalerende nivåer: svak utheving (subtil, grå kursiv) → utheving (farget kursiv) → sterk utheving (farget kursiv, sterkere) → sterk referanse (farget fet) — «brukes med måte» for å bevare et rent og harmonisk uttrykk.
- **Infobokser:** brukes for Informasjon og Advarsel — kort, direkte, én setning per infoboks.
- **Sitater:** skilt ut med kildeangivelse etter tankestrek, f.eks. *«God design handler ikke om å bli lagt merke til, men om å gjøre budskapet tydelig.» – Sitat*.
- **Signatur:** fornavn + etternavn, deretter en rolle-/tittellinje med liten forbokstav etter regel — «Alltid med liten forbokstav!».
- **Ingen emoji** i den formelle dokumentidentiteten. Ordliste-PDF-en (en separat, løsere tilpasning) bruker ett ℹ info-symbol som markør for infoboks — et isolert unntak, ikke husstil.

## VISUELT GRUNNLAG
- **Skrift:** Latin Modern Roman gjennomgående — en klassisk, humanistisk bokantikva (metrisk beslektet med Computer Modern/LaTeX). Brødtekst satt i 10pt i den optiske skriften LM Roman 8; overskrifter i LM Roman Demi 10, farget i primær teal, ikke sort — farge bærer hierarkiet like mye som vekt.
- **Farge:** én dominerende primærfarge (mørk cyan/teal `#407E82`) pluss en lys, understøttende cyan-grønn `#86C6B0` og en nesten-hvit neutral `#F2F2F2`. Fem sekundære aksentfarger (fiolett, rosa, cyan, blå, gul), hver med en lys og en mørk variant — brukt med måte, i mindre elementer (kulepunkter, fotnotereferanser, lenker), aldri som dominerende flater.
- **Bakgrunner:** flate og hvite/nesten-hvite. Ingen gradienter, ingen heldekkende fotobehandling, ingen teksturer eller mønstre i den formelle identiteten.
- **Bildebruk:** minimal — ett personlig portrettfoto er det eneste «merkevarebildet» som er funnet (brukt som nettsideidentitet, ikke logo). Ingen illustrasjonssystem.
- **Ingen logo finnes.** Ikke tegn eller finn opp en — sett navnet «Sondre Bogen-Straume» i LM Roman Demi 10 der et merke ville stått.
- **Animasjon/interaksjon:** ingen observert — dette er en trykk-/dokumentførst-identitet (brev, PDF-er, presentasjoner). Ingen hover-/trykk-tilstander, ikke noe bevegelsessystem å tale om.
- **Kantlinjer og struktur:** tynne enkeltlinjer og venstreinnrykkede blokker for infobokser (Blokktekst/Informasjon/Advarsel), ikke avrundede kort med fargestolpe. Hjørneradius er i praksis 0 — dette er en dokumentidentitet, ikke en programvare-UI.
- **Layout:** klassisk formell brevoppsett — senderblokk, mottakerblokk, referanse-/datotabell, nummerert overskriftshierarki, tokolonne-oppsett for tett referanseinnhold, sidetallsbunntekst («Side X av Y»).
- **Hierarkiverktøy:** farge + optisk størrelsesendring, ikke skygge/elevasjon. Ingen skygger noe sted i kildematerialet.

## IKONOGRAFI
Ingen ikonsystem, ikonskrift eller SVG-sett funnet i noen kilde. Det ene symbolet som er observert (ℹ info-symbol) forekommer én gang i ordliste-PDF-en som et enkelt Unicode/Wingdings-aktig tegn, ikke et vedlikeholdt ikonsystem. Introduser ikke et ikonbibliotek; hvis en brukergrensesnitt-flate noen gang trenger ikoner, bør det behandles som en ny beslutning å ta opp med Sondre, ikke utledes.

## VISUELT GRUNNLAG — kort
Se `guidelines/` for grunnlagskort (farger, tekstskala, avstand, brevanatomi).

## Innhold
- `styles.css` — rot-stilark (importerer `tokens/*.css`).
- `tokens/` — farger, typografi, avstand, `@font-face`-deklarasjoner.
- `assets/fonts/` — LM Roman-skriftfiler som faktisk brukes av tokens.
- `assets/sondre-portrait.jpg` — det ene personlige fotoet som er funnet (nettsideidentitet).
- `guidelines/` — grunnlagskort (farger, tekst, avstand, tone).
- `components/document/` — gjenbrukbare dokumentbyggeklosser (se «Bevisste tillegg» nedenfor — denne profilen har ingen app/kodebase, så komponentene er de dokumentnivå-byggeklossene brev-/e-postmalene faktisk definerer):
  - `Heading` — farget Overskrift 1–3
  - `Quote` / `Sterkt sitat` — sitat med kildeangivelse
  - `Callout` — Informasjon/Advarsel-boks
  - `Signature` — brevavslutning
  - `ColoredBulletList` — kulepunkter som går gjennom de 5 aksentfargene
  - `EmailSignature` — e-postsignaturblokk
  - `Divider` — tynn/tykk teal-linje
- `templates/letter/` — formell brevmal (`Letter.dc.html`), bygget på `doc_page.js`-skallet.
- `templates/presentation/` — mal for personlig presentasjon/forside.
- `templates/email-signature/` — e-postsignaturmal.
- `SKILL.md` — Claude Code-kompatibel skill-wrapper.

### Bevisste tillegg
Ingen kodebase eller Figma-fil definerer en komponentliste — bare to Word-maler (brev, ordliste) og en farge-PDF. Etter oppdragets veiledning for grunnlagskjøringer er komponentene her tilpasset det en *dokument*-identitet trenger (overskrifter, infobokser, sitater, signatur, kontaktblokk, fargede kulepunkter), ikke et generisk app-sett (ingen Button/Input/Dialog — ingen av dem finnes i noen kilde).

## Webskrifter (praktisk, ikke dokumentidentiteten)
Nettsiden bruker **Playfair Display** (visning) + **Libre Baskerville** (brødtekst) — lastet via Google Fonts, tokens `--font-web-heading`/`--font-web-body`. Etter Sondres notat er dette praktiske web-erstatninger, ikke en endring av LM Roman-dokumentidentiteten — bruk kun til fremtidig nettsidearbeid.

## Utvidet fargesystem («fargekart»)
Lagt til lys-/mørk-skalaer for hver farge (`--color-*-tint`/`--color-*-deep`), utledet fra de eksisterende hex-verdiene via `color-mix(in oklch, …)` — ingen nye farger funnet opp, bare mer spillerom for illustrasjoner, tabeller og infografikk. Strukturelt inspirert av hvordan formelle norske institusjonsprofiler (Stortinget, Domstolene) organiserer primær-/støtte-/ekstra-støtte-nivåer — ikke deres spesifikke farger, som forblir deres egen eiendom.

## Grafiske elementer
`guidelines/graphic-elements.card.html` og `guidelines/backgrounds.card.html` samler virkemiddelfamilien: tynne/tykke teal-linjer for seksjonsskiller, ornamentale streker, dekorativ initial, rammevarianter, samt et heraldisk skjold med initialene SBS og mottoet «Per dolorem ad fortitudinem – hereditas nostra». Disse er en del av profilen og kan brukes i dokumenter og presentasjoner.

## Rutenettsystem
`tokens/grid.css` definerer et rutenett på 12 kolonner/24px kolonneavstand for web og presentasjoner (64/100px marger) i tillegg til det eksisterende enkeltkolonne-dokumentrutenettet (1in marger) — se `guidelines/grid.card.html`.

## E-postsignatur
`uploads/E-postsignatur.docx` er nå gjenspeilet i `components/document/EmailSignature.jsx` og `templates/email-signature/`. Inkluderer standard konfidensialitetsavsnitt som liten, ustilt tekst (ikke farget — dette er standard juridisk tekst, ikke merkevarestemme).

## Forbehold
- `Personlig presentasjon MAL.potx`, `Brevmal privat 06-24.dotx`, `Forside privat designprofil.dotx` kom ikke gjennom i opplastingen — presentasjonsmalen er bygget fra brevmalens visuelle språk og oppdragets notater alene, ikke fra disse filene. Vennligst legg dem til på nytt for en mer nøyaktig presentasjons-/forsidemal.
- Ordliste-PDF-ens egen layout (Words standardverdier, to kolonner) er bevisst *ikke* gjenspeilet i tokens, etter oppdraget.
