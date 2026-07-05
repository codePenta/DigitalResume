import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Pfad zur bestehenden, statischen index.html (im Nachbarordner "lebenslauf-simple")
const sourceHtml = resolve(__dirname, '../index.html');
const outputPdf = join(__dirname, '../out/lebenslauf.pdf');

const browser = await puppeteer.launch();
const page = await browser.newPage();

// file://-URL nutzen, damit relative Pfade (style.css, resources/foto.png)
// innerhalb der index.html korrekt aufgelöst werden.
await page.goto(`file://${sourceHtml}`, { waitUntil: 'networkidle0' });

await page.pdf({
    path: outputPdf,
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' } // Seitenränder steuerst du selbst per CSS (#resume-content padding)
});

await browser.close();

console.log(`✔ PDF erzeugt: ${outputPdf}`);
