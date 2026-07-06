import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceHtml = resolve(__dirname, '../index.html');
const outputDir = join(__dirname, "../out/");

mkdirSync(outputDir, { recursive: true });

const outputPdf = join(__dirname, '../out/resume.pdf');


const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(`file://${sourceHtml}`, { waitUntil: 'networkidle0' });

await page.pdf({
    path: outputPdf,
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' }
});

await browser.close();

console.log(`✔ PDF created: ${outputPdf}`);
