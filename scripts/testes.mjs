// Testes de interação com Playwright. Uso: node scripts/testes.mjs <pasta-de-saida>
// (precisa do `npm run preview` rodando na porta 4173)
import { chromium } from 'playwright'

const out = process.argv[2] || '.'
const URL_SITE = 'http://localhost:4173/'
const browser = await chromium.launch()
const r = []
const ok = (c, m) => r.push(`${c ? 'OK  ' : 'FAIL'} ${m}`)
const erros = []

// ---- Mobile
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
const page = await ctx.newPage()
page.on('pageerror', (e) => erros.push(e.message))
page.on('console', (m) => m.type() === 'error' && erros.push(m.text()))
await page.goto(URL_SITE, { waitUntil: 'networkidle' })

ok((await page.locator('h1').count()) === 1, 'um único h1')

// Menu
const tg = page.locator('[data-menu-toggle]')
await tg.click()
ok((await tg.getAttribute('aria-expanded')) === 'true', 'menu abre (aria-expanded=true)')
ok(await page.evaluate(() => document.activeElement.classList.contains('nav__link')), 'foco vai para o 1º link do menu')
await page.waitForTimeout(300)
await page.screenshot({ path: `${out}/t-menu.png` })
await page.keyboard.press('Escape')
ok((await tg.getAttribute('aria-expanded')) === 'false', 'Esc fecha o menu')
ok(await page.evaluate(() => document.activeElement.matches('[data-menu-toggle]')), 'foco volta para o botão do menu')
await tg.click()
await page.locator('.nav__link', { hasText: 'Contato' }).click()
ok((await tg.getAttribute('aria-expanded')) === 'false', 'clicar num link fecha o menu')

// Galeria: filtro
await page.locator('[data-filtro="cozinha"]').click()
const vis = await page.locator('.galeria__item:not([hidden])').count()
ok(vis === 2, `filtro Cozinha mostra 2 itens (mostrou ${vis})`)
ok((await page.locator('[data-filtro="cozinha"]').getAttribute('aria-pressed')) === 'true', 'filtro usa aria-pressed')

// Lightbox
await page.locator('.galeria__item:not([hidden]) [data-abrir]').first().click()
ok(await page.locator('[data-lightbox]').evaluate((d) => d.open), 'lightbox abre')
ok((await page.locator('[data-contador]').textContent()) === '1 / 2', 'contador 1 / 2 respeita o filtro')
await page.keyboard.press('ArrowRight')
ok((await page.locator('[data-titulo]').textContent()) === 'Cozinha em madeira clara', 'seta → avança')
ok((await page.locator('[data-ambiente-lb]').textContent()).includes('Projeto 3D'), 'selo Projeto 3D no lightbox')
await page.screenshot({ path: `${out}/t-lightbox.png` })
await page.keyboard.press('Escape')
ok(!(await page.locator('[data-lightbox]').evaluate((d) => d.open)), 'Esc fecha o lightbox')
ok(await page.evaluate(() => document.activeElement.matches('[data-abrir]')), 'foco volta para o item da galeria')
await page.locator('[data-filtro="todos"]').click()

// FAQ
const b = page.locator('.acordeao__botao').first()
await b.click()
ok((await b.getAttribute('aria-expanded')) === 'true' && (await page.locator('#faq-resp-0').isVisible()), 'acordeão abre')

// Formulário: erro
await page.locator('[data-form] button[type=submit]').click()
ok((await page.locator('[aria-invalid="true"]').count()) === 3, 'form vazio marca 3 campos inválidos')
ok(await page.evaluate(() => document.activeElement.id === 'f-nome'), 'foco vai para o primeiro campo com erro')
await page.locator('[data-form]').screenshot({ path: `${out}/t-form-erro.png` })

// Formulário: sucesso
await page.fill('#f-nome', 'Maria Teste')
await page.fill('#f-telefone', '(51) 99999-0000')
await page.selectOption('#f-ambiente', 'Closet')
await page.fill('#f-mensagem', 'Quero um closet com espelho')
const [pop] = await Promise.all([ctx.waitForEvent('page'), page.locator('[data-form] button[type=submit]').click()])
await pop.waitForLoadState('commit').catch(() => {})
const urlPop = pop.url()
ok(urlPop.startsWith('https://wa.me/555130551625?text=') || urlPop.includes('whatsapp'), 'form abre o WhatsApp: ' + urlPop.slice(0, 60))
await pop.close()
const linkOk = await page.locator('.form__status--ok a').getAttribute('href')
const texto = decodeURIComponent(linkOk.split('text=')[1])
ok(linkOk.startsWith('https://wa.me/555130551625?text='), 'link de sucesso usa wa.me correto')
ok(texto.includes('Nome: Maria Teste') && texto.includes('Ambiente: Closet') && texto.includes('Mensagem: Quero'), 'mensagem montada corretamente')

// Links tel / wa.me / Instagram
const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')))
ok(hrefs.filter((h) => h.startsWith('tel:')).every((h) => h === 'tel:+555130551625'), 'todos os links tel: corretos')
const zaps = hrefs.filter((h) => h.includes('wa.me'))
ok(zaps.length > 10 && zaps.every((h) => h.startsWith('https://wa.me/555130551625?text=')), `todos os ${zaps.length} links wa.me corretos`)
ok(hrefs.includes('https://www.instagram.com/movelaria_rodrigo/'), 'link do Instagram')

// FAB
await page.evaluate(() => scrollTo(0, 0))
await page.waitForTimeout(500)
ok(!(await page.locator('.fab--visivel').count()), 'FAB oculto no hero')
await page.evaluate(() => document.getElementById('sobre').scrollIntoView())
await page.waitForTimeout(500)
ok(await page.locator('.fab--visivel').count(), 'FAB visível no meio da página')
await page.evaluate(() => scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(500)
ok(!(await page.locator('.fab--visivel').count()), 'FAB oculto no rodapé')
ok((await page.locator('[data-ano]').textContent()) === String(new Date().getFullYear()), 'ano do rodapé por JS')
await ctx.close()

// ---- Teclado (desktop)
const p2 = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await p2.goto(URL_SITE, { waitUntil: 'networkidle' })
await p2.keyboard.press('Tab')
ok(await p2.evaluate(() => document.activeElement.classList.contains('pular-link')), '1º Tab = "Pular para o conteúdo"')
await p2.keyboard.press('Tab')
await p2.keyboard.press('Tab')
await p2.screenshot({ path: `${out}/t-foco.png`, clip: { x: 0, y: 0, width: 1280, height: 120 } })
await p2.close()

// ---- prefers-reduced-motion
const ctx3 = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce' })
const p3 = await ctx3.newPage()
await p3.goto(URL_SITE, { waitUntil: 'networkidle' })
await p3.waitForTimeout(300)
const op = await p3.evaluate(() => getComputedStyle(document.querySelector('.desenho .preench')).opacity)
ok(op === '1', `reduced-motion: desenho já completo (opacity ${op})`)
const rev = await p3.evaluate(() => [...document.querySelectorAll('.revelar')].every((e) => getComputedStyle(e).opacity === '1'))
ok(rev, 'reduced-motion: conteúdo visível sem animação')
await ctx3.close()

await browser.close()
console.log(r.join('\n'))
console.log('Erros de console:', erros.length ? erros : 'nenhum')
