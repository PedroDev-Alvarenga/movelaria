import { ambientes } from '../data/ambientes.js'
import { whatsappLink, mensagemAmbiente } from '../utils/whatsapp.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'
import { plantaSVG, VIEWBOX_PLANTA, VIEWBOX_PLANTA_CELULAR } from './planta.js'

const total = String(ambientes.length).padStart(2, '0')

export function Ambientes() {
  const primeiro = ambientes[0]
  return `
    <section class="secao ambientes" id="ambientes" aria-labelledby="ambientes-titulo">
      <div class="container">
        <header class="ambientes__topo revelar">
          <div>
            ${rotulo('Ambientes')}
            <h2 id="ambientes-titulo">Seu espaço merece mais do que móveis prontos.</h2>
          </div>
          <p>Projetamos a casa inteira — e também fazemos mesas e estofados sob medida. Escolha um ambiente na planta e fale direto com a gente.</p>
        </header>

        <div class="ambientes__grade revelar">
          <figure class="ambientes__planta" data-planta>
            ${plantaSVG()}
            <figcaption>
              <span class="legenda-marc" aria-hidden="true"></span> Marcenaria planejada
              <span class="ambientes__ilustrativa">Planta ilustrativa</span>
            </figcaption>
          </figure>

          <div class="ambientes__painel">
            <p class="ambientes__contador" aria-hidden="true"><span data-amb-num>01</span> / ${total}</p>
            <div aria-live="polite">
              <h3 class="ambientes__nome" data-amb-nome>${primeiro.nome}</h3>
              <p class="ambientes__frase" data-amb-frase>${primeiro.frase}</p>
            </div>
            <a class="link-seta" data-amb-link href="${whatsappLink(mensagemAmbiente(primeiro.mensagem))}" target="_blank" rel="noopener">
              Pedir orçamento ${icones.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
            </a>

            <ul class="ambientes__lista" aria-label="Ambientes">
              ${ambientes
                .map(
                  (a, i) => `
                <li><button type="button" class="ambientes__opcao" data-amb-opcao="${a.id}" aria-pressed="${i === 0}">${a.nome}</button></li>`,
                )
                .join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>`
}

export function iniciarAmbientes() {
  const secao = document.getElementById('ambientes')
  if (!secao) return
  const planta = secao.querySelector('[data-planta] svg')
  const num = secao.querySelector('[data-amb-num]')
  const nome = secao.querySelector('[data-amb-nome]')
  const frase = secao.querySelector('[data-amb-frase]')
  const link = secao.querySelector('[data-amb-link]')
  const opcoes = [...secao.querySelectorAll('[data-amb-opcao]')]
  let atual = null

  // mesas e estofados são peças dentro da sala de jantar e da sala
  const comodoDaPeca = { mesas: 'sala-de-jantar', estofados: 'sala' }

  function ativar(id) {
    if (id === atual) return
    const i = ambientes.findIndex((a) => a.id === id)
    if (i < 0) return
    atual = id
    const a = ambientes[i]

    planta.querySelectorAll('.ativo, .realce').forEach((el) => el.classList.remove('ativo', 'realce'))
    const peca = planta.querySelector(`[data-peca="${id}"]`)
    if (peca) {
      peca.classList.add('ativo')
      planta.querySelector(`[data-amb="${comodoDaPeca[id]}"]`)?.classList.add('realce')
    } else {
      planta.querySelector(`[data-amb="${id}"]`)?.classList.add('ativo')
    }

    num.textContent = String(i + 1).padStart(2, '0')
    nome.textContent = a.nome
    frase.textContent = a.frase
    link.href = whatsappLink(mensagemAmbiente(a.mensagem))
    opcoes.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.ambOpcao === id)))
  }

  // passar o mouse ou tocar num cômodo (ou numa peça) da planta
  planta.addEventListener('pointerover', (e) => {
    const alvo = e.target.closest('[data-peca], [data-amb]')
    if (alvo) ativar(alvo.dataset.peca || alvo.dataset.amb)
  })
  planta.addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-peca], [data-amb]')
    if (alvo) ativar(alvo.dataset.peca || alvo.dataset.amb)
  })
  // a lista é o controle acessível por teclado e leitor de tela
  opcoes.forEach((b) => b.addEventListener('click', () => ativar(b.dataset.ambOpcao)))

  // no celular a planta ocupa a largura toda, sem a margem das cotas
  const celular = window.matchMedia('(max-width: 599px)')
  const ajustarEnquadramento = () =>
    planta.setAttribute('viewBox', celular.matches ? VIEWBOX_PLANTA_CELULAR : VIEWBOX_PLANTA)
  celular.addEventListener('change', ajustarEnquadramento)
  ajustarEnquadramento()

  ativar(ambientes[0].id)
}
