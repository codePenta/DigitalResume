# Lebenslauf-Projekt
Statischer, per HTML/CSS gebauter Lebenslauf, als PDF exportiert via Puppeteer.

Siehe [`docs/Protocol.md`](./docs/Protocol.md) für den eigenständigen Lebenslauf inkl. Entscheidungs- und Risikodokumentation.

# Installation

## Repository klonen

```bash
git clone --recurse-submodules https://github.com/codePenta/DigitalResume.git
```

Die echten Lebenslauf-Daten (Kontaktdaten, Foto, Werdegang) liegen im privaten Repository `DigitalResume-Private`, das als Submodule unter `private/` eingebunden ist. Ohne Zugriff darauf bleibt `private/` leer und es wird die öffentliche Vorlage `index.html` verwendet.

Bereits ohne Submodule geklont? Dann nachholen mit:

```bash
git submodule update --init
```

## Für die Abhängigkeiten:

```bash
bun install
```

## Für die Ausführung:

```bash
bun run startDev
```
oder
```bash
bun startDev
```

Mit echten Daten (Zugriff auf das Submodule vorausgesetzt):

```bash
bun run startPrivate
```

## Um den Lebenslauf zu bauen:

Das Build-Skript verwendet automatisch `private/index.html`, falls vorhanden, sonst die Vorlage.


```bash
bun run scripts/build.js
```
oder
```bash
bun scripts/build.js
```

Dieses Projekt wurde mit `bun init` in Bun v1.3.14 erstellt. [Bun](https://bun.com) ist eine schnelle All-in-One-JavaScript-Laufzeitumgebung.
