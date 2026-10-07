import { whatsappLink } from '../utils/whatsapp.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'

const passos = [
  {
    titulo: 'Conversa e medição',
    texto: 'Você conta como é a sua rotina e o que espera do ambiente. Depois, tiramos as medidas do espaço.',
  },
  {
    titulo: 'Projeto',
    texto: 'Desenhamos o móvel pensando no uso de cada gaveta, nicho e porta — e ajustamos com você até ficar do seu jeito.',
  },
  {
    titulo: 'Fabricação',
    texto: 'Com o projeto aprovado, os móveis são produzidos sob medida, com atenção ao acabamento.',
  },
  {
    titulo: 'Entrega e montagem',
    texto: 'Levamos tudo até a sua casa e montamos no lugar certo, dentro do que foi combinado.',
  },
]

export function Processo() {
  return `
    <section class="secao processo" id="como-funciona" aria-labelledby="processo-titulo">
      <div class="container">
        <header class="processo__topo revelar">
          ${rotulo('Como funciona')}
          <h2 id="processo-titulo">Do primeiro papo ao móvel montado.</h2>
        </header>

        <ol class="processo__lista">
          ${passos
            .map(
              (p, i) => `
            <li class="passo revelar">
              <span class="passo__numero" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
              <h3 class="passo__titulo">${p.titulo}</h3>
              <p>${p.texto}</p>
            </li>`,
            )
            .join('')}
        </ol>

        <p class="processo__cta revelar">
          <a class="link-seta" href="${whatsappLink('Olá! Quero começar meu projeto com a Movelaria. Podemos conversar?')}" target="_blank" rel="noopener">
            Começar meu projeto ${icones.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>`
}
