// 可选视觉检查脚本：用于本地截图级验证，不参与网页运行
// 运行前需要外部安装 playwright，例如：
// npm install --prefix "%TEMP%\ai-study-playwright" playwright
// $env:NODE_PATH="$env:TEMP\ai-study-playwright\node_modules"; node scripts\visual-check.js

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseUrl = process.env.AI_STUDY_URL || 'http://localhost:8080';
const chromeExe = process.env.CHROME_EXE || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const shotDir = process.env.SHOT_DIR || path.join(process.cwd(), 'visual-check-screenshots');

const results = [];
const consoleIssues = [];

function record(name, ok, detail = '') {
  results.push({ name, ok, detail });
}

async function main() {
  fs.mkdirSync(shotDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath: chromeExe,
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: 1366, height: 900 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  page.on('console', msg => {
    if (['error', 'warning'].includes(msg.type())) {
      consoleIssues.push(`${msg.type()}: ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    consoleIssues.push(`pageerror: ${err.message}`);
  });

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  record('home-main-heading-visible', await page.locator('#mainContent .markdown-body h1').count() === 1);
  record('study-plan-seven-cards', await page.locator('.study-plan .plan-card').count() === 7);
  record('home-learning-cards-visible', await page.locator('.learning-path .path-card').count() >= 7);
  await page.screenshot({ path: path.join(shotDir, 'desktop-home.png'), fullPage: true });

  await page.goto(baseUrl + '/#glossary', { waitUntil: 'networkidle' });
  record('glossary-visible', await page.locator('.glossary-card').count() >= 10);
  record('glossary-has-term-headers', await page.locator('.glossary-header h2').count() >= 10);
  await page.screenshot({ path: path.join(shotDir, 'desktop-glossary.png'), fullPage: true });

  await page.goto(baseUrl + '/#news', { waitUntil: 'networkidle' });
  record('news-cards-visible', await page.locator('.news-card').count() >= 5);
  record('news-source-visible', await page.locator('.news-source').count() >= 5);
  record('news-source-has-links', await page.locator('.news-source a').count() >= 5);
  await page.screenshot({ path: path.join(shotDir, 'desktop-news.png'), fullPage: true });

  await page.goto(baseUrl + '/#ai-basics/01-what-is-ai', { waitUntil: 'networkidle' });
  record('article-heading-visible', await page.locator('#mainContent .markdown-body h1').count() === 1);
  record('article-sections-visible', await page.locator('#mainContent .markdown-body h2').count() >= 5);
  record('toc-generated', await page.locator('.article-toc .toc-link').count() >= 3);

  const beforeHash = await page.evaluate(() => location.hash);
  await page.locator('.article-toc .toc-link').first().click();
  await page.waitForTimeout(500);
  const afterHash = await page.evaluate(() => location.hash);
  record(
    'toc-click-keeps-route',
    beforeHash === afterHash && afterHash === '#ai-basics/01-what-is-ai',
    `before=${beforeHash}, after=${afterHash}`
  );
  record('article-still-visible-after-toc', await page.locator('#mainContent .markdown-body h1').count() === 1);
  await page.screenshot({ path: path.join(shotDir, 'desktop-article.png'), fullPage: true });

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true
  });
  await mobile.goto(baseUrl, { waitUntil: 'networkidle' });
  record('mobile-menu-visible', await mobile.locator('#menuToggle').isVisible());
  record('mobile-content-visible', await mobile.locator('#mainContent .path-card').count() >= 1);
  await mobile.screenshot({ path: path.join(shotDir, 'mobile-home.png'), fullPage: true });

  await browser.close();

  record(
    'no-console-errors',
    !consoleIssues.some(item => item.startsWith('error') || item.startsWith('pageerror')),
    consoleIssues.join(' | ')
  );

  fs.writeFileSync(
    path.join(shotDir, 'summary.json'),
    JSON.stringify({ shotDir, results, consoleIssues }, null, 2),
    'utf8'
  );

  for (const result of results) {
    console.log(`${result.ok ? 'OK' : 'FAIL'} ${result.name}${result.detail ? ' - ' + result.detail : ''}`);
  }
  console.log('screenshots=' + shotDir);

  if (results.some(result => !result.ok)) {
    process.exitCode = 1;
  }
}

main().catch(err => {
  console.error(err.stack || err.message);
  process.exitCode = 1;
});
