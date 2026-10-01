// Gera public/og-image.png (1200x630) usando as fontes e o desenho do próprio site.
// Uso: com `npm run preview` rodando, `node scripts/og-image.mjs`
import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: 'reduce' })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await page.evaluate(() => {
  const desenho = document.querySelector('.desenho').outerHTML
  document.body.innerHTML = `
    <div style="width:1200px;height:630px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;padding:0 64px;box-sizing:border-box;
      background:radial-gradient(60% 60% at 85% 30%, rgb(255 213 138 / 25%), transparent 70%), var(--off-white);position:relative;overflow:hidden">
      <div style="position:absolute;inset:0 0 auto;height:72px;background-color:var(--grafite);background-image:var(--ripado);display:flex;align-items:center;padding:0 64px">
        <span class="marca__texto" style="font-size:24px">MOVELARIA</span>
      </div>
      <div style="padding-top:60px">
        <p class="pilula">Guaíba · RS — há 25 anos</p>
        <h1 style="font-size:56px;margin-top:20px;line-height:1.05">Móveis planejados, mesas e estofados <span class="destaque">sob medida</span></h1>
        <p style="margin-top:18px;font-size:22px;color:var(--texto-suave)">Há 25 anos transformando sonhos em realidade.</p>
      </div>
      <div style="padding-top:60px"><div class="hero__prancheta">${desenho}</div></div>
    </div>`
})
await page.waitForTimeout(300)
await page.screenshot({ path: 'public/og-image.png' })
await browser.close()
console.log('public/og-image.png gerado')
