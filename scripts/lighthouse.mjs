// Roda Lighthouse (mobile) usando o Chromium do Playwright. Uso: node scripts/lighthouse.mjs <saida.json>
import { chromium } from 'playwright'
import lighthouse from 'lighthouse'
import { writeFileSync } from 'node:fs'
const browser = await chromium.launch({ args: ['--remote-debugging-port=9222'] })
const r = await lighthouse('http://localhost:4173/', { port: 9222, output: 'json', logLevel: 'error' })
writeFileSync(process.argv[2] || 'lh.json', r.report)
const lhr = r.lhr
for (const [k, c] of Object.entries(lhr.categories)) console.log(k, Math.round(c.score * 100))
for (const a of Object.values(lhr.audits))
  if (a.score !== null && a.score < 0.9 && !['informative', 'manual', 'notApplicable'].includes(a.scoreDisplayMode)) console.log(' -', a.id, a.score, a.displayValue || '')
console.log('LCP', lhr.audits['largest-contentful-paint'].displayValue, '| CLS', lhr.audits['cumulative-layout-shift'].displayValue, '| TBT', lhr.audits['total-blocking-time'].displayValue)
await browser.close()
