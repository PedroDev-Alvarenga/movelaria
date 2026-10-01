import { whatsappLink } from '../utils/whatsapp.js'
import { icones } from './icones.js'

export function WhatsappFab() {
  return `
    <a class="fab" href="${whatsappLink()}" target="_blank" rel="noopener" data-fab aria-label="Pedir orçamento pelo WhatsApp (abre em nova aba)">
      ${icones.whatsapp}
    </a>`
}

// Aparece depois do hero e some quando o formulário de contato ou o rodapé estão na tela,
// para não cobrir conteúdo importante.
export function iniciarFab() {
  const fab = document.querySelector('[data-fab]')
  const hero = document.getElementById('inicio')
  const bloqueios = [document.querySelector('[data-form]'), document.querySelector('[data-footer]')]
  const estado = { passouHero: false, bloqueado: new Set() }

  const atualizar = () => {
    const mostrar = estado.passouHero && estado.bloqueado.size === 0
    fab.classList.toggle('fab--visivel', mostrar)
    fab.tabIndex = mostrar ? 0 : -1
    fab.setAttribute('aria-hidden', String(!mostrar))
  }

  new IntersectionObserver(([e]) => {
    estado.passouHero = !e.isIntersecting
    atualizar()
  }).observe(hero)

  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => (e.isIntersecting ? estado.bloqueado.add(e.target) : estado.bloqueado.delete(e.target)))
    atualizar()
  })
  bloqueios.forEach((el) => el && obs.observe(el))
  atualizar()
}
