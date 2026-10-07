import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/inter'
import '@fontsource/fraunces/latin-500-italic.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import './styles/secoes.css'

import { Header, iniciarHeader } from './components/header.js'
import { Hero, iniciarHero } from './components/hero.js'
import { Ambientes, iniciarAmbientes } from './components/ambientes.js'
import { Galeria, iniciarGaleria } from './components/galeria.js'
import { Processo } from './components/processo.js'
import { Sobre } from './components/sobre.js'
import { Depoimentos } from './components/depoimentos.js'
import { Faq, iniciarFaq } from './components/faq.js'
import { Contato, iniciarContato } from './components/contato.js'
import { Footer, iniciarFooter } from './components/footer.js'
import { WhatsappFab, iniciarFab } from './components/whatsapp-fab.js'
import { iniciarImagens } from './components/imagem.js'

document.querySelector('#app').innerHTML = `
  ${Header()}
  <main id="conteudo" tabindex="-1">
    ${Hero()}
    ${Ambientes()}
    ${Galeria()}
    ${Processo()}
    ${Sobre()}
    ${Depoimentos()}
    ${Faq()}
    ${Contato()}
  </main>
  ${Footer()}
  ${WhatsappFab()}
`

iniciarHeader()
iniciarHero()
iniciarGaleria()
iniciarAmbientes()
iniciarFaq()
iniciarContato()
iniciarFooter()
iniciarFab()
iniciarImagens()

// Revelar seções ao rolar (fade/translate sutil)
const revelaveis = document.querySelectorAll('.revelar')
const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (semMovimento || !('IntersectionObserver' in window)) {
  revelaveis.forEach((el) => el.classList.add('visivel'))
} else {
  const obs = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel')
          obs.unobserve(e.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  revelaveis.forEach((el) => obs.observe(el))
}
