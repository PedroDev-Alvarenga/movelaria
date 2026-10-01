import { chromium } from 'playwright'
const out = process.argv[2] || '.'
const url = 'http://localhost:4173/'
const browser = await chromium.launch()
const logs = []
for (const [nome, w, h] of [['desktop', 1280, 800], ['tablet', 768, 1024], ['mobile', 390, 844]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  page.on('console', (m) => logs.push(`[${nome}] ${m.type()}: ${m.text()}`))
  page.on('pageerror', (e) => logs.push(`[${nome}] PAGEERROR: ${e.message}`))
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(5000)
  await page.screenshot({ path: `${out}/${nome}-dobra.png` })
  // rolar para disparar os reveals
  const altura = await page.evaluate(() => document.body.scrollHeight)
  for (let y = 0; y < altura; y += 500) { await page.evaluate((y) => scrollTo(0, y), y); await page.waitForTimeout(80) }
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(800)
  const overflow = await page.evaluate(() => {
    const w = document.documentElement.clientWidth
    return [...document.querySelectorAll('body *')].filter((el) => el.getBoundingClientRect().right > w + 1 && !el.closest('.filtros') && getComputedStyle(el).position !== 'fixed').slice(0, 8).map((el) => el.className + ' ' + Math.round(el.getBoundingClientRect().right))
  })
  logs.push(`[${nome}] scrollWidth=${await page.evaluate(() => document.documentElement.scrollWidth)} overflow: ${JSON.stringify(overflow)}`)
  await page.screenshot({ path: `${out}/${nome}-full.png`, fullPage: true })
  await ctx.close()
}
await browser.close()
console.log(logs.join('\n'))
