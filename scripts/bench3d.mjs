// Mede a fluidez do hero 3D com a GPU real (duração dos quadros durante a troca
// automática e durante um arraste). Uso: node scripts/bench3d.mjs <url> [mobile]
import { chromium } from 'playwright'
const [url, modo] = process.argv.slice(2)
const mobile = modo === 'mobile'
const browser = await chromium.launch({ args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] })
const ctx = await browser.newContext(
  mobile ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true } : { viewport: { width: 1280, height: 860 } },
)
const page = await ctx.newPage()
if (mobile) {
  const cdp = await ctx.newCDPSession(page)
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })
}
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForSelector('.hero__3d--pronto', { timeout: 90000 })
await page.waitForTimeout(1500)

const medir = (ms) =>
  page.evaluate(
    (ms) =>
      new Promise((res) => {
        const tempos = []
        let ult = performance.now()
        const fim = ult + ms
        const f = (t) => {
          tempos.push(t - ult)
          ult = t
          if (t < fim) requestAnimationFrame(f)
          else {
            tempos.sort((a, b) => a - b)
            res({
              mediana: +tempos[Math.floor(tempos.length / 2)].toFixed(1),
              p95: +tempos[Math.floor(tempos.length * 0.95)].toFixed(1),
              pior: +tempos[tempos.length - 1].toFixed(1),
              acima50: tempos.filter((t) => t > 50).length,
            })
          }
        }
        requestAnimationFrame(f)
      }),
    ms,
  )

const troca = await medir(6000) // inclui 2-3 trocas automáticas
// arraste no canvas
const caixa = await page.locator('.hero__3d canvas').boundingBox()
const arrastar = (async () => {
  await page.mouse.move(caixa.x + caixa.width / 2, caixa.y + caixa.height / 2)
  await page.mouse.down()
  for (let i = 0; i < 40; i++) {
    await page.mouse.move(caixa.x + caixa.width / 2 + Math.sin(i / 6) * 120, caixa.y + caixa.height / 2, { steps: 2 })
  }
  await page.mouse.up()
})()
const arraste = await medir(2500)
await arrastar
const canvas = await page.evaluate(() => {
  const c = document.querySelector('.hero__3d canvas')
  return `${c.width}x${c.height}`
})
console.log(JSON.stringify({ url, modo: mobile ? 'mobile' : 'desktop', canvas, troca, arraste }))
await browser.close()
