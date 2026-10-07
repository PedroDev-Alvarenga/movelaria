// Screenshots do carrossel 3D do hero (uma por peça). Uso: node scripts/hero3d-shots.mjs <pasta> [url]
import { chromium } from 'playwright'
const [out = '.', url = 'http://localhost:5173/?3d=forcar'] = process.argv.slice(2)
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage({ viewport: { width: 1280, height: 860 } })
const logs = []
page.on('console', (m) => ['error', 'warning'].includes(m.type()) && logs.push(`${m.type()}: ${m.text()}`))
page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message))
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForSelector('.hero__3d--pronto', { timeout: 60000 })
await page.click('.hero__carrossel-pausar')
await page.waitForTimeout(1500)
const pontos = await page.locator('.hero__carrossel-ponto').count()
for (let i = 0; i < pontos; i++) {
  await page.locator('.hero__carrossel-ponto').nth(i).click()
  await page.waitForTimeout(1500)
  await page.locator('.hero__visual').screenshot({ path: `${out}/hero3d-${i}.png` })
}
console.log('peças:', pontos)
console.log(logs.join('\n') || 'sem erros/avisos')
await browser.close()
