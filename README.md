# Cool Website

Ein Codex-Skill für individuelle Websites mit Scroll-Animationen, räumlichen
Einstiegen und optionaler datenbasierter SEO. Websites entstehen standardmäßig
auf Deutsch; eine andere Sprache kannst du ausdrücklich vorgeben.

## Was der Skill macht

- Klärt Angebot, Zielgruppe, Gestaltung und gewünschte Besucheraktion.
- Plant Seitenstruktur, visuelle Ebenen und passende Interaktionen.
- Nutzt vorhandene Medien oder das integrierte Bildmodell von Codex für Bilder
  und Bildbearbeitung. Videos werden bei Bedarf über kie.ai oder die offizielle Higgsfield API erzeugt.
- Bietet nach der ersten Interviewrunde SEO mit dem DataForSEO MCP an und
  begleitet Einrichtung, Keyword-Recherche, Umsetzung und Prüfung.
- Baut HTML-Seiten mit einer mitgelieferten JavaScript-/CSS-Engine.
- Kontrolliert die Website im integrierten Browser, behebt gefundene Fehler
  und benennt nicht durchgeführte Prüfungen.

## Installation

Im Stammordner deines Website-Projekts:

```sh
git clone https://github.com/Arnie936/cool-website.git .agents/skills/cool-website
```

Alternativ das Repository als ZIP herunterladen und den vollständigen Inhalt
unter `.agents/skills/cool-website/` ablegen. Die Datei `SKILL.md` muss direkt in
diesem Ordner liegen. Referenzen, Engine, Scripts und Lizenz zusammen behalten.

Danach einen neuen Codex-Turn oder bei Bedarf einen neuen Chat im Projekt
beginnen. Beispiel:

```text
Nutze $cool-website für eine deutsche Website für meine Tischlerei.
Ziel sind Anfragen aus meiner Region. Ich habe bereits ein Logo und Fotos.
```

Du kannst die Gestaltung auch delegieren:

```text
Nutze $cool-website für mein Produkt. Entscheide die Gestaltung selbst.
Verwende das integrierte Bildmodell und plane zunächst ohne generierte Videos.
```

Die gestalterische Delegation ersetzt keine Zustimmung zu kostenpflichtigen
API-Abfragen oder neuen externen Verbindungen.

## Voraussetzungen

| Funktion | Voraussetzung |
|---|---|
| Skill ausführen | Codex mit Datei-/Shell-Zugriff |
| Bilder erzeugen und bearbeiten | Integriertes Bildmodell, keine separate Bild-API-Konfiguration |
| Website visuell kontrollieren | Integrierter Browser über `mcp__cua_repl` |
| Hilfsscripts verwenden | Node.js 18 oder neuer |
| Videos für Scrollen vorbereiten | Vollständiges FFmpeg und Bash, unter Windows etwa Git Bash |
| Videos erzeugen, optional | kie.ai mit `KIE_AI_API_KEY` oder Higgsfield API mit `HF_API_KEY_ID` und `HF_API_KEY_SECRET`, jeweils mit API-Guthaben |
| Datenbasierte SEO, optional | DataForSEO-Konto und verbundener DataForSEO MCP |

Die integrierten Bild- und Browserfunktionen müssen in der verwendeten
Codex-Umgebung verfügbar sein. Der Skill installiert keinen separaten
Browser-Automatisierungsdienst als Ersatz. API-Kosten hängen vom Anbieter und
den tatsächlich abgerufenen Leistungen ab.

## Projektordner festlegen

Der Ausgabeordner wird über `COOL_WEBSITE_HOME`, eine `.cool-website.json` im
Projekt oder den nächsten Git-Projektordner ermittelt. Für einen eindeutigen
Ort lege im Stammordner deines Website-Projekts diese Datei an:

```json
{
  "workspace": "./website-output"
}
```

Speichere sie als `.cool-website.json`. Builds landen dann unter
`website-output/builds/<projektname>/`. Weder API-Schlüssel noch private
Kundeninformationen gehören in ein öffentliches Repository.

Die lokalen Voraussetzungen lassen sich aus dem Website-Projekt prüfen:

```sh
node .agents/skills/cool-website/scripts/doctor.mjs
```

Nur wenn Videoerzeugung geplant ist:

```sh
node .agents/skills/cool-website/scripts/doctor.mjs --video
```

Die Vorabprüfung prüft lokale Voraussetzungen. Sie bestätigt nicht die
Verfügbarkeit integrierter Tools oder eine erfolgreiche externe Anmeldung.

## Video-Anbieter konfigurieren

Es gibt eine [.env.example](.env.example). Kopiere sie als `.env` in den
Stammordner deines Website-Projekts und trage nur die Zugangsdaten des
gewünschten Anbieters ein. Beispielkonfiguration für Higgsfield:

```dotenv
COOL_WEBSITE_VIDEO_PROVIDER=higgsfield
KIE_AI_API_KEY=your_kie_api_key
HF_API_KEY_ID=your_higgsfield_key_id
HF_API_KEY_SECRET=your_higgsfield_key_secret
```

Für KIE setze den Anbieter auf `kie` und fülle `KIE_AI_API_KEY` aus.
Die ungenutzten Platzhalter können bleiben. Ohne Anbieterwahl bleibt KIE der
Standard. Bereits gesetzte Umgebungsvariablen haben Vorrang vor der nächsten
`.env` oberhalb des Arbeitsordners. Bilder und vorhandene Videos brauchen
keinen dieser Schlüssel. `.env` niemals in den öffentlichen Website-Ordner
kopieren oder committen; im Website-Projekt ebenfalls per `.gitignore` ausschließen.

```sh
node .agents/skills/cool-website/scripts/doctor.mjs --video --provider higgsfield
```

Die Prüfung akzeptiert keine leeren Werte oder mitgelieferten Platzhalter und
verlangt nur die Zugangsdaten des gewählten Anbieters. Sie authentifiziert
Higgsfield nicht. `--provider` überschreibt die Auswahl nur für diese Prüfung.
KIE nutzt weiterhin `scripts/kie.mjs`; für Higgsfield folgt der Agent dem
[REST-Leitfaden](references/higgsfield-api.md). API-Keys erhältst du in der
[Higgsfield Console](https://console.higgsfield.ai/). Ein Website-Abo oder
CLI-Login ersetzt diese API-Zugangsdaten nicht.

## Optionale SEO

Der Skill fragt früh, ob du SEO mit DataForSEO nutzen möchtest. Er übernimmt
vorhandene Angaben und klärt nur fehlende Entscheidungen zu Zielmarkt, Angebot,
Domain und Recherchebudget. Bei Bedarf bietet er die Einrichtung über diesen
Remote-Endpunkt an:

```text
https://mcp.dataforseo.com/v3/mcp
```

Die Adresse identifiziert den Server; die Kontoanmeldung kommt anschließend.
Die Recherche fließt in Suchthemen, Seitenaufbau, Texte, Metadaten, interne
Links und technische Verbesserungen ein. Rankings werden nicht garantiert.
Registrierung und mögliche Aktionen erklärt die
[Einrichtungsanleitung](references/dataforseo-setup.md); der vollständige
Ablauf steht im [SEO-Leitfaden](references/seo-dataforseo.md).

## Aufbau

| Pfad | Inhalt |
|---|---|
| [SKILL.md](SKILL.md) | Ablauf und Regeln für Codex |
| `agents/` | Anzeigename und Beispielprompt |
| `engine/` | Scroll-Engine und Gestaltungsvorgaben in JavaScript/CSS |
| `references/` | Gestaltung, Medien, SEO und Browserprüfung |
| `scripts/` | Vorabprüfung, Projektordner, Videoerzeugung, Encoding und Vorschau |
| `templates/` | Register zum Vergleich eigener Website-Projekte |

Der Skill liefert Projektdateien und eine lokale Vorschau. Öffentliches Hosting
ist ein separater Schritt. Ein DataForSEO-Crawler kann private Vorschauen oder
localhost nicht prüfen. Mobile Layouttests ersetzen keinen Test auf einem
echten Smartphone.

## Lizenz

[MIT](LICENSE). Die Lizenz einschließlich Copyright-Vermerk muss mit Kopien
oder wesentlichen Teilen der Software erhalten bleiben.
