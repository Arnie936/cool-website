# DataForSEO MCP einrichten

Nur lesen, wenn die optionale SEO-Phase gewählt wurde und Verbindung, Anmeldung
oder Guthaben geklärt werden müssen. Eine Skill-Änderung ist kein Auftrag,
DataForSEO bereits jetzt zu installieren oder kostenpflichtige Daten abzurufen.

## 1. Verbindung erkennen und wiederverwenden

Zuerst verfügbare Tools und gegebenenfalls die native MCP-Verwaltung des
aktiven Clients prüfen. Konfiguriert, angemeldet und tatsächlich aufrufbar sind
drei verschiedene Zustände. Nicht doppelt installieren, nur weil ein Server
anders heißt. Geheimnisse nicht beim Auflisten einer Konfiguration ausgeben.

Der gewünschte Remote-Endpunkt ist exakt:

```text
https://mcp.dataforseo.com/v3/mcp
```

Das ist die Serveradresse, kein API-Passwort. Eine gewöhnliche Webseitenabfrage
kann daran scheitern, obwohl der MCP funktioniert. Die Verbindung über den
MCP-Client prüfen. Nicht still auf einen älteren Endpunkt oder einen anderen
Anbieter ausweichen.

Wenn die Verbindung fehlt, konkret anbieten:

> DataForSEO ist noch nicht verbunden. Soll ich den MCP jetzt über die
> Serveradresse einrichten? Danach meldest du dich bei DataForSEO an.

Bei bereits erteilter Einrichtungserlaubnis direkt fortfahren. Ohne diese
Erlaubnis kann die unabhängige Website-Arbeit weitergehen. Wenn nur die obige
URL mit dem Auftrag zum Verbinden gegeben wurde, keine unnötigen Fragen nach
Servername, Transport oder lokalem Paket stellen.

## 2. Konto und Startguthaben

Fehlt ein Konto, diesen vom Nutzer vorgegebenen Link unverändert anbieten:

[DataForSEO-Konto erstellen](https://l.dataforseo.com/4yxLJhK)

Erklären: Für diesen Aktionslink wurden 5 US-Dollar Startguthaben angegeben.
Die Aktion und das tatsächlich gutgeschriebene Guthaben beim Registrieren
beziehungsweise im Konto prüfen. Nicht behaupten, ein Bonus sei bereits
gutgeschrieben. Der Link ist für das Onboarding, nicht für die Kundenwebsite.

Stand der Prüfung am 20.09.2026: Der Aktionslink antwortete auf die automatisierte
Prüfung mit HTTP 403; die allgemeine offizielle MCP-Produktseite nannte 1 Dollar
Testguthaben. Das widerlegt keine separate Aktion, bestätigt aber auch keine
5 Dollar. Aktuelle Kontodaten haben Vorrang vor diesem Hinweis.

Ein kleiner, begrenzter Keyword-/SERP-Start kann mit einem kleinen Guthaben
möglich sein. Ob 5 Dollar reichen, hängt von Umfang, Endpunkten, Zugriff und
Preisen ab. Weder ausreichendes Guthaben für jedes Projekt noch verfügbare
Trial-Endpunkte versprechen. Konto-/E-Mail-Verifizierung und eine erforderliche
Zustimmung zu Vertragsbedingungen führt der Nutzer selbst durch. Kein Passwort
im Chat verlangen. Keine Aufladung oder kostenpflichtige Zusatzoption buchen.

## 3. Im tatsächlich verwendeten Client verbinden

Remote HTTP mit OAuth bevorzugen, sofern der Client und der Server es anbieten.
Keinen lokalen Server, Docker oder Node-Pakete installieren, wenn die URL genügt.
Bei Browserinteraktionen den integrierten Browser benutzen.

Für einen lokalen Codex-Client mit vorhandener CLI ist dies der Einrichtungsweg
nach Zustimmung. Zuerst die aktuelle CLI-Hilfe prüfen und vorhandene Einträge
wiederverwenden; ein bestehender gleichnamiger Eintrag darf nicht überschrieben
werden, wenn er zu einem anderen Dienst gehört.

```powershell
codex mcp add dataforseo --url https://mcp.dataforseo.com/v3/mcp
```

Wenn der Add-Befehl bereits eine erfolgreiche Anmeldung durchgeführt hat,
keinen zweiten Login erzwingen. Sonst:

```powershell
codex mcp login dataforseo
```

Den Nutzer durch die vom Client erzeugte Anmeldung führen. Kein Ergebnis
behaupten, bevor der Client den Erfolg meldet. Ein notwendiges Neuladen oder
ein neuer Chat wird mit dem konkreten nächsten Schritt erklärt; zuvor
SEO-Status und offene Arbeit im Projekt sichern.

Für einen anderen Client dessen native Funktion zum Hinzufügen eines Remote-MCP
verwenden. Die lokale Codex-Konfiguration verbindet keinen gehosteten Chat.
Wenn dort Plugins nötig sind, vorhandene Plugin-Verwaltung zur Suche nach
DataForSEO nutzen und den tatsächlichen Installations-/Verbindungsdialog
anbieten. Keine Plugin-IDs, Schaltflächen oder Kommandos erfinden. Ist die
automatische Einrichtung dort nicht möglich, die wenigen tatsächlich nötigen
UI-Schritte anleiten und parallel die unabhängige Arbeit fortsetzen.

Falls OAuth im konkreten Client nicht funktioniert, Fehler und offizielle
Anleitung prüfen. DataForSEO unterstützt auch HTTP Basic mit API-Login und
API-Passwort aus dem API-Access-Bereich. Nur einen vom aktiven Client
unterstützten geschützten Credential-Speicher nutzen. Base64 ist keine
Verschlüsselung. Zugangsdaten nicht in Projektdateien, Prompts, Logs oder
Versionierung schreiben. Keinen Basic-Token als Bearer-Token konfigurieren.
Kein globales Auth-Setup auf Verdacht verändern.

## 4. Verbindung und Zugriff getrennt prüfen

1. Tools über den aktuellen Client entdecken. Die v3-Dokumentation beschreibt
   `docs_index`, `docs_list_sections`, `docs_search` und `api_request`. Namen und
   Argumente aus den wirklich angebotenen Schemas verwenden.
2. Eine passende Dokumentationsabfrage ausführen. Das bestätigt Tool-Zugriff,
   beweist aber noch keinen bezahlbaren API-Datenzugriff.
3. Über dokumentierte Konto-/Nutzungsinformationen oder die Nutzeransicht
   Guthaben und benötigte Zugriffsrechte feststellen. Die Tool-Beschreibung
   auf mögliche Kosten prüfen; einen bezahlten Smoke-Test nicht als kostenlos
   ausgeben. Wenn nötig die erste budgetierte Recherche als Datenzugriffstest
   verwenden, statt einen zusätzlichen Testaufruf zu kaufen.
4. Nach dem ersten Datenaufruf HTTP-, Top-Level- und Task-Status sowie Ergebnis
   prüfen. HTTP 200 allein bedeutet nicht, dass die SEO-Abfrage erfolgreich war.

Bei Authentifizierungsfehlern Anmeldung korrigieren; bei fehlendem Produktzugriff
eine benötigte Alternative besprechen; bei fehlendem Guthaben Recherche stoppen.
Nicht wiederholt identische bezahlte Jobs starten. Status präzise melden:
`nicht eingerichtet`, `Anmeldung offen`, `Tools erreichbar`, `Datenzugriff bestätigt`.

## Quellen und Aktualisierung

Vor einer Einrichtung bei Unklarheiten oder geändertem Tool-Verhalten diese
offiziellen Quellen prüfen. Keine alten Auth-Beispiele blind übernehmen.

- [Remote-Endpunkt und Client-Anbindung](https://dataforseo.com/model-context-protocol)
- [OAuth-Verbindung](https://dataforseo.com/help-center/connecting-the-remote-dataforseo-mcp-server-using-oauth)
- [v3-Tools und Dokumentationsworkflow](https://dataforseo.com/help-center/dataforseo-new-mcp-server-and-cli-connection-a-quickstart-guide)
- [Codex-MCP-Konfiguration](https://developers.openai.com/codex/mcp)
- [Allgemeines Testguthaben und nutzungsabhängige Kosten](https://dataforseo.com/seo-mcp-server)
