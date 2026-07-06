# Lebenslauf-Projekt
Statischer, per HTML/CSS gebauter Lebenslauf, als PDF exportiert via Puppeteer.

Siehe [`docs/Protocol.md`](./docs/Protocol.md) für den eigenständigen Lebenslauf inkl. Entscheidungs- und Risikodokumentation.

# Installation

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

## Um den Lebenslauf zu bauen:

```bash
bun run scripts/build.js
```
oder
```bash
bun scripts/build.js
```

Dieses Projekt wurde mit `bun init` in Bun v1.3.14 erstellt. [Bun](https://bun.com) ist eine schnelle All-in-One-JavaScript-Laufzeitumgebung.
