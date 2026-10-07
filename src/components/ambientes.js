import { ambientes } from '../data/ambientes.js'
import { whatsappLink, mensagemAmbiente } from '../utils/whatsapp.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'

export function Ambientes() {
  return `
    <section class="secao ambientes" id="ambientes" aria-labelledby="ambientes-titulo">
      <div class="container ambientes__grade">
        <header class="ambientes__topo revelar">
          ${rotulo('Ambientes')}
          <h2 id="ambientes-titulo">Seu espaço merece mais do que móveis prontos.</h2>
          <p>Projetamos para a casa inteira — e também fazemos mesas e estofados sob medida. Escolha o ambiente e fale direto com a gente pelo WhatsApp.</p>
        </header>

        <ol class="indice revelar">
          ${ambientes
            .map(
              (a, i) => `
            <li>
              <a class="indice__linha" href="${whatsappLink(mensagemAmbiente(a.mensagem))}" target="_blank" rel="noopener">
                <span class="indice__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
                <span class="indice__nome">${a.nome}</span>
                <span class="indice__frase">${a.frase}</span>
                <span class="indice__seta" aria-hidden="true">${icones.seta}</span>
                <span class="sr-only"> — pedir orçamento pelo WhatsApp (abre em nova aba)</span>
              </a>
            </li>`,
            )
            .join('')}
        </ol>
      </div>
    </section>`
}
