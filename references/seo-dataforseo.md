# SEO mit DataForSEO

Diese optionale Phase beginnt nach der ersten Interviewrunde und beeinflusst
anschließend Recherche, Seitenplanung, Inhalte, Umsetzung und Prüfung.
Begleite den Nutzer bis zu umgesetzten Verbesserungen. Ein Keyword-Report
allein erfüllt den Auftrag nicht. Ein SEO-Werkzeug liefert Daten, keine
garantierten Rankings. Verwende keine Versprechen wie „perfektes SEO“ oder
„garantiert Platz 1“.

## 1. Früh entscheiden, kurz nachfragen

Die Auswahl aus SKILL.md Step 0a einmal stellen oder eine schon gegebene Antwort
übernehmen. Bei „technische Grundlagen“ oder „später“ ohne kostenpflichtige
Recherche weiterarbeiten. Normale Seitentitel, verständlicher HTML-Inhalt und
bedienbare Links gehören trotzdem zur Website.

Bei Ja vorhandene Antworten aus BRIEF.md wiederverwenden. Höchstens drei kurze
Fragen pro Runde; nur entscheidende Lücken erfragen. Nicht verlangen, dass der
Nutzer SEO-Fachbegriffe, fertige Keywords oder seine Suchkonkurrenten kennt.

Eine sinnvolle erste SEO-Runde:

1. „Für welche Angebote und welche Orte oder Länder möchtest du gefunden werden?“
2. „Gibt es schon eine Website oder Domain, und sollen Besucher vor allem
   anfragen, buchen oder kaufen?“
3. „Hast du bereits ein DataForSEO-Konto? Für die erste Recherche schlage ich
   einen kleinen Kostenrahmen innerhalb deines vorhandenen Guthabens vor.“

Die letzte Frage zu Konto und Budget im nächsten Schritt konkretisieren,
sobald Zugang und Preise bekannt sind. Bereits beantwortete Teile auslassen.

| Benötigte Information | Wozu und wann nachfragen |
|---|---|
| Wichtigste 1–3 Angebote, echte Vorteile, Zielkunden und Hauptaktion | Geschäftlich passende Suchbegriffe statt bloß hohem Suchvolumen |
| Land, Sprache, bei lokalem Angebot Stadt/Einzugsgebiet | Deutsche Texte bedeuten nicht automatisch Zielmarkt Deutschland |
| Bestehende Domain, Neubau oder Relaunch, erlaubter Seitenumfang | Rankings und URLs erhalten; passende Seiten statt unnötigem Umbau |
| Relevante Produkte, Leistungen, Preise oder belastbare Nachweise | Fehlende Fakten nachfragen, keine Bewertungen oder Referenzen erfinden |
| Bekannte Wettbewerber und typische Kundenfragen, sofern vorhanden | Hinweise aufnehmen; echte Suchkonkurrenten selbst recherchieren |
| Search Console/Analytics/Business Profile, falls bereits vorhanden | Vorhandene Daten nutzen; fehlende Konten blockieren den Neubau nicht |
| Budgetobergrenze und gewünschter Umfang | Kostengünstige Erstentscheidung, Erweiterung nur bei konkretem Nutzen |

Lokale Anbieter benötigen zusätzlich korrekte Unternehmensdaten, tatsächliche
Standorte, Öffnungszeiten und angebotene Leistungen. Shops brauchen reale
Produkt-/Kategorieinformationen; mehrsprachige Projekte ihre Zielmärkte.
Nur den zutreffenden Zweig vertiefen. Keine erfundenen Filialen oder automatisch
vervielfachten Ortsseiten erzeugen. Falls die Sprache bereits explizit gewählt
wurde, diese gegenüber dem deutschen Standard beibehalten.

## 2. Verbinden und eine kleine Recherche planen

Bei fehlendem Zugang [dataforseo-setup.md](dataforseo-setup.md) verwenden. Bereits
verbundene MCPs wiederverwenden. Während einer offenen Anmeldung vorhandene
Inhalte und technische Grundlagen bearbeiten, ohne Suchdaten zu erfinden.

Vor dem ersten kostenpflichtigen Aufruf einen konkreten Rechercheplan mit
Kostenobergrenze zeigen. Ein vorhandenes Guthaben ist keine Ausgabenerlaubnis.
Eine schon genehmigte Obergrenze übernehmen und nicht jeden Aufruf erneut
freigeben lassen. Zum Beispiel einen einmaligen Start bis höchstens 5 USD
vorschlagen, aber nur wenn aktuelles Guthaben, Preise und Umfang das tragen;
bei geringerem Guthaben entsprechend kleiner planen. Das Ziel ist ein guter
erster Seitenplan, nicht das Aufbrauchen des Budgets.

Ein kleiner Startplan ist ein Markt und eine Sprache, 3–5 Ausgangsbegriffe,
etwa 20–50 passende Kandidaten, 3–5 aussagekräftige Suchergebnisseiten und
2–3 relevante Wettbewerber. Das sind Obergrenzen für einen ersten Durchgang,
keine Pflichtanzahlen. Bei einfachen Projekten weniger abrufen. Weitere Märkte,
große Crawls, Backlinkanalysen und laufendes Monitoring sind Erweiterungen.

## 3. Den MCP effizient nutzen

Die v3-Verbindung kann einen Dokumentationszugang und ein universelles
`api_request` anbieten. Erst reale Tool-Schemas ansehen, Dokumentationsindex
gezielt durchsuchen und nur die benötigten Endpunktseiten lesen. Kein Katalog
erfundener Tool-Namen und keine geratenen API-Parameter.

| Entscheidung | Passende Daten, falls im Konto verfügbar |
|---|---|
| Wonach suchen geeignete Kunden? | Keyword-Vorschläge und relevante verwandte Begriffe |
| Welche Begriffe sind nachgefragt? | Gebündelte Suchvolumen-/Trenddaten für ausgewählten Markt und Sprache |
| Welche Art von Seite erwartet die Suche? | Aktuelle organische SERPs für die priorisierten Themen |
| Welche Inhalte fehlen gegenüber Suchkonkurrenten? | Kleine Domain-/Keyword-Lückenanalyse oder gezielte SERP-Auswertung |
| Was ist bei lokalen Angeboten relevant? | Ortsbezogene SERPs/Maps und passende Unternehmensdaten |
| Was funktioniert technisch noch nicht? | Begrenzte On-Page-Prüfung einer erreichbaren, autorisierten öffentlichen URL |

Effizienzregeln:

- Standort- und Sprachparameter aus dem Schema beziehungsweise den verfügbaren
  Listen auflösen. Markt, Suchmaschine, Gerät und Datum an den Daten speichern.
- Kandidaten zuerst lokal deduplizieren und fachfremde Begriffe entfernen.
  Gebündelte Keyword-Abfragen nutzen, wenn der Endpunkt sie unterstützt. Grenzen
  und Kosten pro Task/Keyword/Ergebnis vorab lesen.
- Kleine Ergebnismengen und geringe erforderliche Tiefe anfordern. Live-Daten
  nur dort, wo die Entscheidung sie braucht. Bei sinnvoller Wartezeit günstigere
  asynchrone Tasks verwenden; Task-ID speichern und vorhandenen Task abfragen.
- Unabhängige Abfragen nur innerhalb von Rate-Limits und Budget bündeln.
  Identische Antworten im Projekt wiederverwenden. Cache-Schlüssel umfasst
  Endpunkt, Parameter und Datum; Preisänderungen und veraltete SERPs beachten.
- Ein kompaktes `seo/requests.jsonl` führen: Zeitpunkt, Zweck, Endpunkt,
  nicht geheime Parameter, Task-ID, Status, geschätzte/berichtete Kosten und
  Ergebnisdatei. Nur benötigte Felder behalten. Credentials/Headers niemals
  speichern. Keine zweite Spreadsheet-Arbeitskette für ein einfaches Keywordset.
- Vor jedem weiteren Batch bereits verbrauchte und noch laufende Kosten gegen
  den genehmigten Deckel rechnen. Unklare Preise vor dem Aufruf klären, nicht
  mit „wird billig sein“ ersetzen. Bei unsicherem Restbudget stoppen.
- HTTP-, API- und Task-Fehler unterscheiden. Bei 401/403 erst Verbindung oder
  Berechtigung reparieren. Bei 429 den angegebenen Abstand beachten. Höchstens
  zwei begründete Wiederholungen transienter Fehler; einen möglicherweise schon
  angenommenen Auftrag erst über seine ID prüfen statt neu zu bezahlen.
- Fehlendes Suchvolumen als unbekannt markieren, nicht als null. Google-Ads-
  Wettbewerb und CPC sind keine organische SEO-Schwierigkeit. Datenbank-
  Schätzungen und Drittanbieter-Rankings sind keine eigenen Search-Console-Daten.

Speichere eine kompakte Keywordtabelle in `seo/keywords.json` mit Begriff,
Markt/Sprache, Quelle/Zeitpunkt, verfügbarem Volumen, Suchintention, relevanter
SERP-Beobachtung, Priorität und vorgesehener URL. Nicht vorhandene Kennzahlen
bleiben leer. Priorisiere Angebotspassung, erreichbare Suchintention und Nutzen;
ein großes Volumen allein rechtfertigt keine Seite.

## 4. Ergebnisse in einen Seitenplan übersetzen

In `SEO-PLAN.md` einen verständlichen Plan mit diesen Angaben festhalten:

- Ziel, Markt, Zielkunden, Conversion, Budget und Verbindungsstatus.
- Die wichtigsten Chancen mit Datenbeleg und kurzer Begründung.
- Pro geplanter URL: Hauptthema/Keywordgruppe, Suchintention, Seitentyp,
  eindeutiger Title, H1, Inhaltsgliederung, echte Belege, Handlungsaufforderung
  und sinnvolle interne Links.
- Technische Aufgaben, Priorität nach Wirkung/Aufwand und offene Fakten.
- Bestehende URLs, zu erhaltende Inhalte und nötige Weiterleitungen bei Relaunch.

Ähnliche Begriffe mit derselben Absicht auf einer hilfreichen Seite bündeln.
Unterschiedliche Leistungen oder Absichten können eigene Seiten benötigen;
Abschnittsanker einer Landingpage sind keine eigenständig indexierbaren URLs.
Einen größeren Seitenumfang kurz erklären und innerhalb des vereinbarten
Auftrags abstimmen. Besteht der Nutzer auf einer Seite, den wichtigsten Fokus
wählen und weitere Themen als spätere Ausbauschritte markieren.

Den Nutzer in einfachen Worten durch die Entscheidungen führen. Reine
Implementierungsdetails selbst entscheiden. Nur echte Geschäftsinformationen,
Kostensteigerungen oder eine Erweiterung des Umfangs erneut abfragen. Bei
fehlender Fachkenntnis einen begründeten Vorschlag machen, keine SEO-Prüfung
vom Nutzer verlangen.

## 5. SEO tatsächlich umsetzen

**Inhalte und Navigation.** Hilfreiche, eigenständige deutsche Texte schreiben,
die die gewählte Suchabsicht erfüllen und reale Unterschiede erklären.
Natürliche Überschriften, aussagekräftige Titles und individuelle Descriptions
verwenden. Suchbegriffe passend einsetzen, ohne Dichtevorgaben, versteckte
Texte oder Aneinanderreihungen von Ortsnamen. Aussagekräftige interne Links
mit normalen `a href`-Zielen setzen. Keine Rankings oder Umsätze erfinden.

**Scroll-Website.** Wesentliche Texte, Überschriften und Links im initialen
HTML oder serverseitig/prerendered ausliefern. Inhalte dürfen nicht erst nach
Scrollen, Mausbewegung oder einem API-Aufruf entstehen. Ohne Animation und bei
reduzierter Bewegung muss der gesamte Inhalt lesbar bleiben. Canvas, WebGL,
Bilder und Videos ersetzen keine indexierbaren Produkt-/Leistungstexte.

**Technik.** Pro öffentlicher Seite eine stabile URL, sinnvolle Statuscodes,
eindeutige Metadaten und eine passende Canonical-Strategie umsetzen. Bei Relaunch
eine Alt-/Neu-URL-Zuordnung und korrekte permanente Weiterleitungen erhalten.
404-Seiten und interne Links prüfen. XML-Sitemap mit indexierbaren kanonischen
URLs, robots.txt und Indexierungsregeln am echten Host abstimmen. Keine
localhost-, Test- oder Fantasiedomain in produktive Canonicals/Sitemaps schreiben.
Ist die Domain noch offen, diese Veröffentlichungsschritte ausdrücklich offenlassen.

**Vorschau und Veröffentlichung.** Private Vorschauen privat lassen. Ein
robots.txt-Verbot ersetzt kein `noindex` und schützt keine vertraulichen Inhalte.
Crawler müssen ein `noindex` lesen können. Vor Veröffentlichung versehentliche
Noindex-/Crawl-Sperren prüfen; nicht wahllos sämtliche Sperren entfernen.

**Medien und Leistung.** Bilder passend dimensionieren, komprimieren und mit
Breite/Höhe gegen Layoutsprünge versehen. Wichtige Einstiegsmedien priorisieren,
weitere Medien bedarfsgerecht laden. Video-Poster, mobile Größen, wenig
blockierendes JavaScript und zurückhaltende Animation beachten. Alt-Texte
beschreiben den Inhalt; dekorative Bilder erhalten leere Alternativtexte.
Core Web Vitals/Ladezeit anhand verfügbarer Messungen beurteilen, Labor- und
Felddaten unterscheiden. Keine erfundenen Scores oder „100/100“-Garantien.

**Strukturierte Daten.** Nur passende Typen wie Organization, LocalBusiness,
BreadcrumbList, Product oder Article mit zutreffenden, auf der Seite sichtbaren
Fakten auszeichnen. Reale Preise/Verfügbarkeit/Unternehmensdaten verwenden.
Keine erfundenen Sternebewertungen. Valides JSON-LD verspricht keine Rich Results;
nicht wahllos FAQ-Markup auf jede Seite setzen. Mehrsprachige Varianten benötigen
tatsächliche übersetzte URLs und korrekt gegenseitige hreflang-Verweise.

**Passende Sonderfälle.** Bei lokalen Anbietern konsistente Unternehmensdaten
und vorhandene Business-Profile-Ziele berücksichtigen. Bei Shops Kategorie-,
Produkt- und Filter-URL-Strategie klären. Bei Relaunch vorhandene Suchleistung
und wichtige URLs schützen. Belegte redaktionelle Autorenschaft und Quellen
nutzen, wenn sie zum Inhalt gehören. Keine Personen oder Erfahrungen erfinden.
Externe Profile ändern, Outreach senden oder Google-Dienste verbinden nur bei
entsprechendem Auftrag. Kein automatischer Backlink-Kauf.

## 6. Prüfen und veröffentlichen

Die visuelle und interaktive Kontrolle bleibt im integrierten Browser gemäß
[verify.md](verify.md). DataForSEO ergänzt diese um SEO-Daten und gegebenenfalls
einen Remote-Audit; es ersetzt nicht die Browserkontrolle.

Vor einem Deploy HTML-Inhalte, Titel, Beschreibungen, Überschriften, interne
Links, Bildangaben, Sprachkennzeichnung und JSON-LD im finalen Paket prüfen.
Veröffentlichungsabhängige Angaben separat prüfen. Ergebnisse in
`SEO-REPORT.md` als **umgesetzt**, **lokal geprüft**, **live geprüft** oder
**offen** dokumentieren, jeweils mit URL/Datei und Beleg statt pauschalem „SEO gut“.

Ein externer On-Page-Crawler braucht eine erreichbare öffentliche URL.
`localhost`, Login-Seiten oder private Vorschauen nicht als erfolgreiche Audits
ausgeben. Nur im autorisierten Rahmen deployen. Wenn eine öffentliche Zielseite
verfügbar ist und Auditbudget besteht, zuerst wenige wichtige URLs prüfen;
Crawl-Limit, Tiefe und Renderingoptionen ausdrücklich begrenzen. Gefundene
relevante Probleme beheben und nur die betroffenen Prüfungen wiederholen.

Nach erlaubter Veröffentlichung Redirects, Canonicals, Robots-Regeln, Sitemap,
HTTP-Status und wichtige Links am echten Host prüfen. Falls Search Console
bereits autorisiert verbunden ist, URL-Prüfung/Sitemap soweit unterstützt
durchführen; sonst die wenigen notwendigen Eigentümer-Schritte erklären.
Weder Sitemap-Erstellung noch Einreichung beweist die Indexierung.

## 7. Übergabe und sinnvolles Nachfassen

Kurze deutsche Zusammenfassung liefern: priorisierte Suchthemen, umgesetzte
Seiten/Inhalte/Technik, verwendete Daten, bekannte API-Kosten, offene Punkte und
die nächsten drei sinnvollen Schritte. Rohdaten/Plan/Report liegen im Projekt.
Der Nutzer muss die Analyse nicht selbst in eine Website übersetzen.

Eine spätere Prüfung nach ausreichender Datensammlung vorschlagen, etwa nach
einigen Wochen: Indexierung, Impressionen, Klicks, CTR, relevante Suchanfragen
und Anfragen/Käufe. Änderungen anhand dieser Daten priorisieren. Bei Bedarf
gezielte DataForSEO-Rankings für denselben Markt und dasselbe Gerät vergleichen.
Neue Domains brauchen Zeit; schwankende Momentaufnahmen nicht überinterpretieren.
Keine Cronjobs, wiederkehrenden API-Kosten oder Aufladungen ohne Auftrag einrichten.

## Quellen

Offizielle Grundlagen, geprüft am 20.09.2026. Änderungen an Endpunkten, Preisen,
Zugriffen und Suchmaschinenregeln vor darauf beruhenden Entscheidungen prüfen.

- [DataForSEO-Dokumentation](https://docs.dataforseo.com/v3/)
- [DataForSEO-MCP und universelle Tools](https://dataforseo.com/help-center/dataforseo-new-mcp-server-and-cli-connection-a-quickstart-guide)
- [Google SEO-Grundlagen](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [JavaScript und indexierbare Inhalte](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Richtlinien für strukturierte Daten](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
