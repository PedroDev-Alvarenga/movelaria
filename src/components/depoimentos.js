import { depoimentos } from '../data/depoimentos.js'
import { site, mapsUrl } from '../data/site.config.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'

export function Depoimentos() {
  return `
    <section class="secao depoimentos" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div class="container">
        <header class="depoimentos__topo revelar">
          ${rotulo('Depoimentos', 'rotulo--claro')}
          <h2 id="depoimentos-titulo" class="sr-only">Depoimentos de clientes</h2>
          <p class="depoimentos__nota">
            <span class="depoimentos__nota-numero">${site.google.nota}</span>
            <span>de 5 no Google<br>${site.google.totalAvaliacoes} avaliações</span>
          </p>
        </header>

        <ul class="depoimentos__lista">
          ${depoimentos
            .map(
              (d) => `
            <li class="revelar">
              <figure class="depoimento">
                <blockquote><p>“${d.texto}”</p></blockquote>
                <figcaption>${d.autor} <span>· ${d.fonte}</span></figcaption>
              </figure>
            </li>`,
            )
            .join('')}
        </ul>

        <p class="depoimentos__link revelar">
          <a class="link-seta link-seta--claro" href="${mapsUrl}" target="_blank" rel="noopener">
            Ver avaliações no Google ${icones.seta}<span class="sr-only"> (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>`
}
