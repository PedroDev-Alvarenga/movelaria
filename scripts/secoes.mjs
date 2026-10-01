import { chromium } from 'playwright'
const [out, larg = '1280'] = process.argv.slice(2)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: +larg, height: 900 } })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await page.evaluate(() => document.querySelectorAll('.revelar').forEach((e) => e.classList.add('visivel')))
await page.waitForTimeout(6000)
for (const sel of ['#inicio', '#ambientes', '#projetos', '#como-funciona', '#sobre', '#depoimentos', '#perguntas', '#contato', 'footer']) {
  await page.locator(sel).first().screenshot({ path: `${out}/${larg}-${sel.replace('#', '')}.png` })
}
await browser.close()
