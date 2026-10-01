import { whatsappLink } from '../utils/whatsapp.js'

const falar = (assunto, inicio = 'Fale') =>
  ` <a href="${whatsappLink(`Olá! Tenho uma dúvida sobre ${assunto}.`)}" target="_blank" rel="noopener">${inicio} com a nossa equipe<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span></a>.`

const perguntas = [
  {
    pergunta: 'Móveis planejados são caros mesmo?',
    resposta: `<p>Depende do que entra na conta. O valor de um planejado varia com o tamanho do ambiente, os acabamentos e o que vai dentro de cada armário. A diferença é que você investe num móvel feito para o seu espaço, sem pagar por medidas que não servem ou por cantos desperdiçados.</p>
      <p>Para saber quanto fica o seu projeto, o melhor caminho é conversar com a gente com as medidas e as ideias em mãos.${falar('valores de móveis planejados')}</p>`,
  },
  {
    pergunta: 'Vale mesmo a pena investir em móveis planejados?',
    resposta: `<p>Quando o projeto é bem pensado, sim. O planejado aproveita cada parede e cada canto, organiza a rotina e deixa o ambiente com a sua cara — algo difícil de conseguir com móveis prontos, que seguem medidas padrão.</p>
      <p>É por isso que a gente começa entendendo como você usa o espaço, antes de desenhar.</p>`,
  },
  {
    pergunta: 'O que avaliar além da estética?',
    resposta: `<p>Escolher planejado só pela estética é o primeiro erro. Bonito por fora, inteligente por dentro: vale olhar a divisão interna dos armários, a circulação no ambiente, a altura das bancadas, a iluminação e o acabamento.</p>
      <p>E também quem vai fazer: atendimento, cuidado na entrega e cumprimento do que foi combinado fazem toda a diferença no resultado.</p>`,
  },
  {
    pergunta: 'Vocês também fazem mesas e estofados?',
    resposta: `<p>Sim. Além dos móveis planejados, fazemos mesas e estofados sob medida.${falar('mesas e estofados sob medida')}</p>`,
  },
  {
    pergunta: 'Vocês fazem entrega?',
    resposta: `<p>Sim, a Movelaria faz entrega. Para confirmar a sua região e os detalhes da montagem,${falar('entrega e montagem', 'fale')}</p>`,
  },
  {
    pergunta: 'Como faço para começar meu projeto?',
    resposta: `<p>É só chamar a gente no WhatsApp ou visitar a loja em Guaíba. A partir da conversa, combinamos a medição e partimos para o projeto.${falar('como começar meu projeto')}</p>`,
  },
]

export function Faq() {
  return `
    <section class="secao faq" id="perguntas" aria-labelledby="faq-titulo">
      <div class="container faq__grade">
        <header class="secao__topo faq__topo revelar">
          <p class="pilula">Perguntas frequentes</p>
          <h2 id="faq-titulo">Móveis planejados são <span class="destaque">caros mesmo?</span></h2>
          <p class="secao__intro">As dúvidas que mais ouvimos — respondidas sem rodeio.</p>
        </header>

        <div class="acordeao revelar">
          ${perguntas
            .map(
              (p, i) => `
            <div class="acordeao__item">
              <h3 class="acordeao__titulo">
                <button type="button" class="acordeao__botao" aria-expanded="false" aria-controls="faq-resp-${i}" id="faq-perg-${i}">
                  <span>${p.pergunta}</span>
                  <span class="acordeao__icone" aria-hidden="true"></span>
                </button>
              </h3>
              <div class="acordeao__painel" id="faq-resp-${i}" role="region" aria-labelledby="faq-perg-${i}" hidden>
                <div class="acordeao__conteudo">${p.resposta}</div>
              </div>
            </div>`,
            )
            .join('')}
        </div>
      </div>
    </section>`
}

export function iniciarFaq() {
  document.querySelectorAll('.acordeao__botao').forEach((botao) => {
    botao.addEventListener('click', () => {
      const aberto = botao.getAttribute('aria-expanded') === 'true'
      botao.setAttribute('aria-expanded', String(!aberto))
      document.getElementById(botao.getAttribute('aria-controls')).hidden = aberto
    })
  })
}
