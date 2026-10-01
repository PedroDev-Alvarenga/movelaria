import { ambientes } from '../data/ambientes.js'
import { whatsappLink, mensagemAmbiente } from '../utils/whatsapp.js'
import { icones } from './icones.js'

export function Ambientes() {
  return `
    <section class="secao ambientes" id="ambientes" aria-labelledby="ambientes-titulo">
      <div class="container">
        <header class="secao__topo revelar">
          <p class="pilula">Ambientes</p>
          <h2 id="ambientes-titulo">Seu espaço merece mais do que <span class="destaque">móveis prontos.</span></h2>
          <p class="secao__intro">Projetamos para a casa inteira — e também fazemos mesas e estofados sob medida. Escolha o ambiente e fale direto com a gente.</p>
        </header>

        <ul class="ambientes__grade">
          ${ambientes
            .map(
              (a) => `
            <li class="revelar">
              <a class="ambiente-card" href="${whatsappLink(mensagemAmbiente(a.mensagem))}" target="_blank" rel="noopener">
                <span class="ambiente-card__icone">${icones[a.icone]}</span>
                <span class="ambiente-card__nome">${a.nome}</span>
                <span class="ambiente-card__frase">${a.frase}</span>
                <span class="ambiente-card__acao">Pedir orçamento ${icones.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span></span>
              </a>
            </li>`,
            )
            .join('')}
        </ul>
      </div>
    </section>`
}
