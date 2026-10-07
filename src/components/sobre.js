import { site } from '../data/site.config.js'
import { rotulo } from './rotulo.js'

export function Sobre() {
  return `
    <section class="secao sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div class="container sobre__grade">
        <div class="sobre__anos revelar" aria-hidden="true">
          <span class="sobre__anos-numero">${site.anos}</span>
          <span class="sobre__anos-texto">anos</span>
        </div>

        <div class="sobre__texto revelar">
          ${rotulo('Sobre a Movelaria')}
          <h2 id="sobre-titulo">Há ${site.anos} anos transformando sonhos em realidade.</h2>
          <p class="sobre__abre">A Movelaria é uma loja de móveis em Guaíba que projeta e fabrica sob medida: móveis planejados para todos os ambientes, mesas e estofados.</p>
          <p>Por aqui, cada projeto começa numa conversa. Queremos entender como você usa o espaço antes de desenhar qualquer coisa — porque um bom móvel planejado precisa ser bonito, mas também precisa funcionar no seu dia a dia.</p>
          <p>Atendimento próximo, móveis de qualidade e compromisso com o que foi combinado: é isso que nossos clientes destacam, e é isso que a gente faz questão de manter.</p>

          <dl class="sobre__lista">
            <div><dt>Projeto</dt><dd>pensado para o seu espaço</dd></div>
            <div><dt>Fabricação</dt><dd>sob medida</dd></div>
            <div><dt>Entrega</dt><dd>e montagem</dd></div>
          </dl>
        </div>
      </div>
    </section>`
}
