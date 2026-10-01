import { site } from '../data/site.config.js'
import { Imagem } from './imagem.js'

// Foto da equipe/oficina: coloque em public/projetos/ e preencha o nome do arquivo aqui.
const fotoSobre = { arquivo: '', alt: 'Equipe e oficina da Movelaria', largura: 1200, altura: 1500 }

export function Sobre() {
  return `
    <section class="secao sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div class="container sobre__grade">
        <div class="sobre__visual revelar">
          ${Imagem({ ...fotoSobre, legenda: 'Equipe e oficina', classe: 'imagem--retrato' })}
          <div class="sobre__anos" aria-hidden="true">
            <span class="sobre__anos-numero">${site.anos}</span>
            <span class="sobre__anos-texto">anos de<br>história</span>
          </div>
        </div>

        <div class="sobre__texto revelar">
          <p class="pilula">Sobre a Movelaria</p>
          <h2 id="sobre-titulo">${site.anos} anos transformando sonhos <span class="destaque">em realidade.</span></h2>
          <p>A Movelaria é uma loja de móveis em Guaíba que projeta e fabrica sob medida: móveis planejados para todos os ambientes, mesas e estofados.</p>
          <p>Por aqui, cada projeto começa numa conversa. Queremos entender como você usa o espaço antes de desenhar qualquer coisa — porque um bom móvel planejado precisa ser bonito, mas também precisa funcionar no seu dia a dia.</p>
          <p>Atendimento próximo, móveis de qualidade e compromisso com o que foi combinado: é isso que nossos clientes destacam, e é isso que a gente faz questão de manter.</p>
          <ul class="sobre__lista">
            <li><strong>Projeto</strong> pensado para o seu espaço</li>
            <li><strong>Fabricação</strong> sob medida</li>
            <li><strong>Entrega</strong> e montagem</li>
          </ul>
        </div>
      </div>
    </section>`
}
