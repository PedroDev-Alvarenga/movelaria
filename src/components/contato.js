import { site, enderecoCompleto, mapsUrl, mapsEmbedUrl } from '../data/site.config.js'
import { ambientes } from '../data/ambientes.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'

export function Contato() {
  return `
    <section class="secao contato" id="contato" aria-labelledby="contato-titulo">
      <div class="container contato__grade">
        <div class="contato__info revelar">
          ${rotulo('Contato')}
          <h2 id="contato-titulo">Vamos tirar seu projeto <span class="destaque">do papel?</span></h2>
          <p class="contato__intro">Conte pra gente o que você imagina. Respondemos pelo WhatsApp.</p>

          <dl class="contato__dados">
            <div>
              <dt>Telefone e WhatsApp</dt>
              <dd>
                <a class="contato__telefone" href="${site.telefoneLink}">${site.telefoneExibicao}</a>
                <a class="link-seta" href="${whatsappLink()}" target="_blank" rel="noopener">Chamar no WhatsApp ${icones.seta}<span class="sr-only"> (abre em nova aba)</span></a>
              </dd>
            </div>
            <div>
              <dt>Endereço</dt>
              <dd>
                <address>${site.endereco.rua}, ${site.endereco.bairro}<br>${site.endereco.cidade} — ${site.endereco.uf}, CEP ${site.endereco.cep}</address>
                <div class="mapa" data-mapa>
                  <a class="link-seta" href="${mapsUrl}" target="_blank" rel="noopener">Abrir no Google Maps ${icones.seta}<span class="sr-only"> (nova aba)</span></a>
                  <button type="button" class="mapa__carregar" data-carregar-mapa>Ver mapa aqui</button>
                  <span class="mapa__aviso">O mapa só é carregado do Google se você clicar.</span>
                </div>
              </dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>
                <span class="pendente">${site.horario}</span>
                <span class="contato__obs">${site.horarioObservacao}</span>
              </dd>
            </div>
            ${
              site.fazEntrega
                ? `<div>
              <dt>Entrega</dt>
              <dd>Fazemos entrega dos móveis.</dd>
            </div>`
                : ''
            }
          </dl>
        </div>

          <form class="form revelar" novalidate data-form aria-labelledby="form-titulo">
            <h3 id="form-titulo" class="form__titulo">Peça um orçamento</h3>
            <p class="form__dica">Campos com * são obrigatórios.</p>

            <div class="campo">
              <label for="f-nome">Nome *</label>
              <input id="f-nome" name="nome" type="text" autocomplete="name" required aria-describedby="f-nome-erro">
              <p class="campo__erro" id="f-nome-erro" hidden></p>
            </div>

            <div class="campo">
              <label for="f-telefone">Telefone / WhatsApp *</label>
              <input id="f-telefone" name="telefone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(51) 90000-0000" required aria-describedby="f-telefone-erro">
              <p class="campo__erro" id="f-telefone-erro" hidden></p>
            </div>

            <div class="campo">
              <label for="f-ambiente">Ambiente de interesse *</label>
              <select id="f-ambiente" name="ambiente" required aria-describedby="f-ambiente-erro">
                <option value="">Selecione</option>
                ${ambientes.map((a) => `<option value="${a.nome}">${a.nome}</option>`).join('')}
                <option value="Outro">Outro</option>
              </select>
              <p class="campo__erro" id="f-ambiente-erro" hidden></p>
            </div>

            <div class="campo">
              <label for="f-mensagem">Mensagem</label>
              <textarea id="f-mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre o espaço e o que você imagina"></textarea>
            </div>

            <p class="form__lgpd">Seus dados não ficam salvos neste site: ao enviar, eles são usados apenas para montar a mensagem que abre no seu WhatsApp, e você decide se envia. Usamos essas informações somente para responder ao seu pedido, conforme a LGPD.</p>

            <button type="submit" class="botao botao--primario botao--grande botao--largo">${icones.whatsapp} Enviar pelo WhatsApp</button>
            <div class="form__status" role="status" aria-live="polite" data-form-status></div>
          </form>
      </div>
    </section>`
}

function validar(form) {
  const erros = []
  const nome = form.nome.value.trim()
  const digitos = form.telefone.value.replace(/\D/g, '')

  if (nome.length < 2) erros.push(['nome', 'Informe seu nome.'])
  if (digitos.length < 10 || digitos.length > 13) erros.push(['telefone', 'Informe um telefone com DDD, por exemplo (51) 90000-0000.'])
  if (!form.ambiente.value) erros.push(['ambiente', 'Escolha o ambiente de interesse.'])
  return erros
}

export function iniciarContato() {
  const form = document.querySelector('[data-form]')
  const status = form.querySelector('[data-form-status]')

  const limparErro = (campo) => {
    const el = form[campo]
    el.removeAttribute('aria-invalid')
    const msg = form.querySelector(`#f-${campo}-erro`)
    msg.hidden = true
    msg.textContent = ''
  }

  ;['nome', 'telefone', 'ambiente'].forEach((campo) => {
    form[campo].addEventListener('input', () => {
      if (form[campo].getAttribute('aria-invalid')) limparErro(campo)
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    ;['nome', 'telefone', 'ambiente'].forEach(limparErro)
    status.className = 'form__status'
    status.textContent = ''

    const erros = validar(form)
    if (erros.length) {
      erros.forEach(([campo, texto]) => {
        form[campo].setAttribute('aria-invalid', 'true')
        const msg = form.querySelector(`#f-${campo}-erro`)
        msg.textContent = texto
        msg.hidden = false
      })
      status.classList.add('form__status--erro')
      status.textContent = erros.length === 1 ? 'Confira o campo destacado.' : `Confira os ${erros.length} campos destacados.`
      form[erros[0][0]].focus()
      return
    }

    const linhas = [
      'Olá! Vim pelo site da Movelaria e gostaria de um orçamento.',
      '',
      `Nome: ${form.nome.value.trim()}`,
      `Telefone: ${form.telefone.value.trim()}`,
      `Ambiente: ${form.ambiente.value}`,
    ]
    const mensagem = form.mensagem.value.trim()
    if (mensagem) linhas.push(`Mensagem: ${mensagem}`)

    const link = whatsappLink(linhas.join('\n'))
    window.open(link, '_blank', 'noopener')
    status.classList.add('form__status--ok')
    status.innerHTML = `Tudo certo! Abrimos o WhatsApp com a sua mensagem. Se ele não abriu, <a href="${link}" target="_blank" rel="noopener">toque aqui</a>.`
  })

  // Mapa: só carrega o iframe do Google quando a pessoa pede (privacidade e desempenho)
  const botaoMapa = document.querySelector('[data-carregar-mapa]')
  botaoMapa.addEventListener('click', () => {
    const fachada = document.querySelector('[data-mapa]')
    const iframe = document.createElement('iframe')
    iframe.src = mapsEmbedUrl
    iframe.title = `Mapa: ${enderecoCompleto}`
    iframe.loading = 'lazy'
    iframe.referrerPolicy = 'no-referrer-when-downgrade'
    iframe.className = 'mapa__iframe'
    const voltar = document.createElement('a')
    voltar.href = mapsUrl
    voltar.target = '_blank'
    voltar.rel = 'noopener'
    voltar.className = 'mapa__abrir'
    voltar.textContent = 'Abrir no Google Maps'
    fachada.replaceWith(iframe)
    iframe.after(voltar)
    iframe.focus()
  })
}
