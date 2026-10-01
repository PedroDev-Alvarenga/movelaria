import { site } from '../data/site.config.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { icones } from './icones.js'

const links = [
  { href: '#ambientes', texto: 'Ambientes' },
  { href: '#projetos', texto: 'Projetos' },
  { href: '#como-funciona', texto: 'Como Funciona' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

export function marca(classe = '') {
  if (site.logo) {
    return `<img class="marca__logo ${classe}" src="${import.meta.env.BASE_URL}${site.logo}" alt="${site.nome}" width="180" height="44">`
  }
  return `<span class="marca__texto ${classe}">MOVELARIA</span>`
}

export function Header() {
  return `
    <header class="header" data-header>
      <div class="header__barra container">
        <a class="marca" href="#inicio" aria-label="${site.nome} — início">${marca()}</a>

        <nav class="nav" aria-label="Principal">
          <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="menu-principal" data-menu-toggle>
            <span class="nav__toggle-icone nav__toggle-icone--abrir">${icones.menu}</span>
            <span class="nav__toggle-icone nav__toggle-icone--fechar">${icones.fechar}</span>
            <span class="sr-only" data-menu-rotulo>Abrir menu</span>
          </button>
          <div class="nav__painel" id="menu-principal" data-menu>
            <ul class="nav__lista">
              ${links.map((l) => `<li><a class="nav__link" href="${l.href}">${l.texto}</a></li>`).join('')}
            </ul>
            <a class="botao botao--primario nav__cta-mobile" href="${whatsappLink()}" target="_blank" rel="noopener">
              ${icones.whatsapp} Pedir orçamento
            </a>
          </div>
        </nav>

        <a class="botao botao--claro header__cta" href="${whatsappLink()}" target="_blank" rel="noopener">
          ${icones.whatsapp} Pedir orçamento
        </a>
      </div>
    </header>`
}

export function iniciarHeader() {
  const header = document.querySelector('[data-header]')
  const toggle = header.querySelector('[data-menu-toggle]')
  const menu = header.querySelector('[data-menu]')
  const rotulo = header.querySelector('[data-menu-rotulo]')
  const mobile = window.matchMedia('(max-width: 899px)')

  const definirInert = () => {
    const aberto = toggle.getAttribute('aria-expanded') === 'true'
    menu.inert = mobile.matches && !aberto
  }

  const abrir = () => {
    toggle.setAttribute('aria-expanded', 'true')
    rotulo.textContent = 'Fechar menu'
    header.classList.add('header--menu-aberto')
    document.body.classList.add('menu-aberto')
    definirInert()
    requestAnimationFrame(() => menu.querySelector('a').focus())
  }

  const fechar = (devolverFoco = true) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return
    toggle.setAttribute('aria-expanded', 'false')
    rotulo.textContent = 'Abrir menu'
    header.classList.remove('header--menu-aberto')
    document.body.classList.remove('menu-aberto')
    definirInert()
    if (devolverFoco) toggle.focus()
  }

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? fechar() : abrir()
  })

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) fechar(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fechar()
  })

  // Mantém o foco dentro do menu aberto (botão + links)
  header.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || toggle.getAttribute('aria-expanded') !== 'true') return
    const focaveis = [toggle, ...menu.querySelectorAll('a')]
    const primeiro = focaveis[0]
    const ultimo = focaveis[focaveis.length - 1]
    if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault()
      ultimo.focus()
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault()
      primeiro.focus()
    }
  })

  mobile.addEventListener('change', () => {
    fechar(false)
    definirInert()
  })
  definirInert()

  const sombra = () => header.classList.toggle('header--rolado', window.scrollY > 8)
  window.addEventListener('scroll', sombra, { passive: true })
  sombra()
}
