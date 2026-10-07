import { site, mapsUrl } from '../data/site.config.js'
import { Imagem } from './imagem.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'

// Foto de projeto da Movelaria (Instagram). Quando houver foto da loja ou da
// equipe, troque aqui.
const foto = {
  arquivo: 'quarto-home-office.jpg',
  alt: 'Quarto planejado pela Movelaria, com armários suspensos, painel de madeira e iluminação de LED',
  largura: 1080,
  altura: 1350,
}

export function Sobre() {
  return `
    <section class="secao sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div class="container sobre__grade">
        <div class="sobre__visual revelar">
          ${Imagem({ ...foto, classe: 'sobre__foto' })}
          <div class="sobre__placa" aria-hidden="true">
            <span class="sobre__placa-marca">MOVELARIA</span>
            <span class="sobre__placa-sub">Móveis planejados</span>
          </div>
        </div>

        <div class="sobre__texto revelar">
          ${rotulo('Sobre a Movelaria')}
          <h2 id="sobre-titulo">Há ${site.anos} anos transformando sonhos <span class="destaque">em realidade.</span></h2>
          <p class="sobre__abre">Somos uma loja de móveis em Guaíba que projeta e fabrica sob medida: móveis planejados para todos os ambientes, mesas e estofados.</p>
          <p>Cada projeto começa numa conversa. Antes de desenhar qualquer coisa, queremos entender como você usa o espaço — porque um bom móvel planejado precisa ser bonito, mas também precisa funcionar no seu dia a dia.</p>

          <dl class="sobre__fatos">
            <div><dt>${site.anos}</dt><dd>anos de história</dd></div>
            <div><dt>Sob medida</dt><dd>planejados, mesas e estofados</dd></div>
            <div><dt>Guaíba</dt><dd>loja no Centro, com entrega</dd></div>
          </dl>

          <a class="link-seta" href="${mapsUrl}" target="_blank" rel="noopener">
            Visite a loja ${icones.seta}<span class="sr-only"> (abre o Google Maps em nova aba)</span>
          </a>
        </div>
      </div>
    </section>`
}
