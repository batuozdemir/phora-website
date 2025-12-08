import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 4350; // Use a custom port to avoid conflicts
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = path.join(__dirname, 'pdfs');

// Defined pages based on project structure
const PAGES = [
  { path: '/', name: 'home-en' },
  { path: '/about', name: 'about-en' },
  { path: '/contact', name: 'contact-en' },
  { path: '/solutions', name: 'solutions-index-en' },
  { path: '/solutions/aquaculture', name: 'solution-aquaculture-en' },
  { path: '/solutions/poultry', name: 'solution-poultry-en' },
  { path: '/solutions/ruminant', name: 'solution-ruminant-en' },
  
  { path: '/tr/', name: 'home-tr' },
  { path: '/tr/about', name: 'about-tr' },
  { path: '/tr/contact', name: 'contact-tr' },
  { path: '/tr/solutions', name: 'solutions-index-tr' },
  { path: '/tr/solutions/aquaculture', name: 'solution-aquaculture-tr' },
  { path: '/tr/solutions/poultry', name: 'solution-poultry-tr' },
  { path: '/tr/solutions/ruminant', name: 'solution-ruminant-tr' },
];

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  console.log('Starting preview server...');
  const server = spawn('npm', ['run', 'preview', '--', '--port', PORT], {
    stdio: 'ignore', // Ignore output to keep console clean
    detached: true   // Allow it to run independently if needed, but we kill it later
  });

  // Give the server a moment to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Set viewport to a standard desktop size for better PDF rendering
  await page.setViewport({ width: 1280, height: 1024 });

  for (const pageInfo of PAGES) {
    const url = `${BASE_URL}${pageInfo.path}`;
    const outputPath = path.join(OUTPUT_DIR, `${pageInfo.name}.pdf`);
    
    console.log(`Generating PDF for ${pageInfo.path}...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });

      // Calculate the full height of the page
      const { contentHeight, contentWidth } = await page.evaluate(() => {
        return {
          contentHeight: document.documentElement.scrollHeight,
          contentWidth: document.documentElement.scrollWidth
        };
      });

      // Add print styles to ensure backgrounds render and layout is stable
      await page.addStyleTag({
        content: `
          body { -webkit-print-color-adjust: exact; }
          @page { size: auto; margin: 0; }
        `
      });

      await page.pdf({
        path: outputPath,
        width: `${1280}px`, // Fixed width to ensure desktop layout
        height: `${contentHeight}px`, // Dynamic height based on content
        printBackground: true,
        pageRanges: '1', // Ensure it treats it as a single page context
        margin: { top: 0, right: 0, bottom: 0, left: 0 } // No margins for full web view
      });
      
    } catch (error) {
      console.error(`Failed to generate PDF for ${url}:`, error.message);
    }
  }

  console.log('Closing browser...');
  await browser.close();

  console.log('Stopping server...');
  process.kill(-server.pid); // Kill the process group if possible
  try {
    server.kill();
  } catch (e) {
    // Ignore if already dead
  }
  
  console.log(`
All PDFs have been generated in: ${OUTPUT_DIR}`);
  process.exit(0);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
