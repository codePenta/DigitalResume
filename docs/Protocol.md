# Dokumentation

## Risikoanalyse

#### Phase 1: Identifikation

- R-1: Verwendete Technologien werden irgendwann veraltet
- R-2: Technische Darstellungsfehler auf bestimmten Geräten/PDF-Readern
- R-3: Zu detailorientiert (Zielverlust während der Umsetzung)
- R-4: Es kommt bei der Runtime und dem Tool für die PDF-Erstellung zu Kompatibilitätsproblemen
- R-5: Falsche Lesereihenfolge bei automatisiertem Parsing

#### Phase 2: Bewertung

| Risiko-ID | Wahrscheinlichkeit | Auswirkung   |
| --------- | ------------------ | ------------ |
| R-1       | Hoch               | Hoch [^1]    |
| R-2       | Mittel             | Hoch [^2]    |
| R-3       | Hoch               | Niedrig [^3] |
| R-4       | Hoch               | Hoch [^4]    |
| R-5       | Mittel             | Hoch [^5]    |

[^1]: Je nach Schweregrad müsste das Projekt vollständig oder nur teilweise portiert werden. Das könnte verhindern, dass ich in einem passenden Zeitraum den Lebenslauf anpassen kann, was meine Karriere negativ beeinflussen könnte.
[^2]: Führt zwangsweise zum Abbruch des Projekts.
[^3]: Das Projekt würde sich immer weiter verzögern, da ich das eigentliche Ziel aus den Augen verliere.
[^4]: Falls es zu Kompatibilitätsproblemen geht, wäre ein manueller Eingriff erforderlich. Dieser könnte, die gleichen Auswirkungen wie bei **R-1** auslösen.

[^5]: Viele ATS-Systeme (Bewerbermanagement-Systeme) lesen Lebensläufe nicht wie das menschliche Auge. Entsprechend kann es passieren, dass ich durch unbedachte Semantik im HTML nicht richtig beurteilt werden kann. Das kann zu einer Absage führen. 

#### Phase 3: Priorisierung

| Wahrscheinlichkeit / Auswirkung | Niedrig      | Mittel  | Hoch                |
| ------------------------------- | ------------ | ------- | ------------------- |
| Hoch                            | Mittel (R-3) | Hoch    | Kritisch (R-1, R-4) |
| Mittel                          | Niedrig      | Mittel  | Hoch (R-2, R-5)     |
| Niedrig                         | Niedrig      | Niedrig | Mittel              |

**Priorität (absteigend):** R-1, R-4 (kritisch) → R-2 (hoch) → R-3, R-5 (mittel)

#### Phase 4: Steuerung / Gegenmaßnahmen

| Risiko-ID | Priorität | Strategie  | Konkrete Maßnahme                                            |
| --------- | --------- | ---------- | ------------------------------------------------------------ |
| R-1       | Kritisch  | Vermindern | Etablierte, gut gewartete Technologien wählen; Versionsstand vor Projektstart prüfen. Teilaspekte werden ggf. durch eigene Entscheidungsmatrizen konkretisiert (siehe R-4). |
| R-2       | Hoch      | Vermindern | Testrender in mehreren PDF-Readern/Browsern vor finaler Nutzung; Layout mit CSS-Print-Regeln absichern |
| R-3       | Mittel    | Vermindern | Feste Timebox pro Abschnitt setzen; regelmäßiger Abgleich mit ursprünglichem Ziel/Scope |
| R-4       | Kritisch  | Vermeiden  | Node.js zusätzlich zu Bun einsetzen, ausschließlich für das PDF-Build-Skript mit Puppeteer. Bun bleibt für den restlichen Stack bestehen, sodass Bun nie mit Puppeteer in Kontakt kommt. |
| R-5       | Mittel    | Vermeiden  | Meinen Lebenslauf kann ich regelmäßig mittels kostenlosen ATS-Scan-Tools prüfen lassen um zu vermeiden, dass ich strukturelle Fehler mache. |

## Entscheidungsmatrix

### Runtime

|                                |                            | Alles Bun    |                  | Alles Node   |                   | Getrennt (Node + Bun) |                   |
| ------------------------------ | -------------------------- | ------------ | ---------------- | ------------ | ----------------- | --------------------- | ----------------- |
| Kriterium                      | Kriterien Gewichtung (1-5) | Punkte (1-5) | Gewichtete Punkt | Punkte (1-5) | Gewichtete Punkte | Punkte (1-5)          | Gewichtete Punkte |
| Stabilität / Kompatibilität    | 3                          | 2            | 6                | 5            | 15                | 5                     | 15                |
| Wartungsaufwand über Zeit      | 2                          | 3            | 6                | 5            | 10                | 5                     | 10                |
| Lerneffekt / Zukunftsfähigkeit | 4                          | 5            | 20               | 2            | 8                 | 5                     | 20                |
| Gewichtete Summe               |                            |              | 32               |              | 33                |                       | 45                |

### Technologie für das visualisieren der Zeitleiste

|                                           |                            | D3 by Observable |                   | vis-timeline |                   |
| ----------------------------------------- | -------------------------- | ---------------- | ----------------- | ------------ | ----------------- |
| Kriterium                                 | Kriterien Gewichtung (1-5) | Punkte           | Gewichtete Punkte | Punkte       | Gewichtete Punkte |
| Schnell umsetzbar                         | 4                          | 1                | 4                 | 5            | 20                |
| Geringe Lernkurve                         | 3                          | 1                | 3                 | 3            | 9                 |
| Wird von Runtime unterstützt              | 5                          | 5                | 25                | 5            | 25                |
| Unterstützt gewünschtes Zeitlinien-Design | 5                          | 5                | 25                | 0            | 0                 |
|                                           |                            |                  | 57                |              | 54                |

