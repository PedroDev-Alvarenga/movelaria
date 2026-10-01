import { depoimentos } from '../data/depoimentos.js'
import { site, mapsUrl } from '../data/site.config.js'
import { icones } from './icones.js'

export function Depoimentos() {
  const estrelas = icones.estrela.repeat(5)
  return `
    <section class="secao depoimentos" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div class="container">
        <header class="secao__topo secao__topo--claro revelar">
          <p class="pilula pilula--clara">Depoimentos</p>
          <h2 id="depoimentos-titulo">Quem já fez com a gente <span class="destaque">recomenda.</span></h2>
          <a class="selo-google" href="${mapsUrl}" target="_blank" rel="noopener">
            <span class="selo-google__estrelas" aria-hidden="true">${estrelas}</span>
            <span><strong>${site.google.nota} no Google</strong> · ${site.google.totalAvaliacoes} avaliações</span>
            <span class="sr-only">(abre o Google Maps em nova aba)</span>
          </a>
        </header>

        <ul class="depoimentos__grade">
          ${depoimentos
            .map(
              (d) => `
            <li class="revelar">
              <figure class="depoimento">
                <span class="depoimento__aspas">${icones.aspas}</span>
                <blockquote><p>${d.texto}</p></blockquote>
                <figcaption>
                  <strong>${d.autor}</strong>
                  <span>${d.fonte}</span>
                </figcaption>
              </figure>
            </li>`,
            )
            .join('')}
        </ul>
      </div>
    </section>`
}
