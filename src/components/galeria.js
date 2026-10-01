import { projetos } from '../data/projetos.js'
import { ambientes } from '../data/ambientes.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { Imagem, iniciarImagens } from './imagem.js'
import { icones } from './icones.js'

const nomeAmbiente = (id) => ambientes.find((a) => a.id === id)?.nome ?? id

function selo(p) {
  return p.tipo === 'render-3d' ? '<span class="selo-3d">Projeto 3D</span>' : ''
}

export function Galeria() {
  // Só mostra filtros de ambientes que têm itens na galeria
  const usados = ambientes.filter((a) => projetos.some((p) => p.ambiente === a.id))

  return `
    <section class="secao galeria" id="projetos" aria-labelledby="projetos-titulo">
      <div class="container">
        <header class="secao__topo revelar">
          <p class="pilula">Projetos</p>
          <h2 id="projetos-titulo">Bonito por fora. <span class="destaque">Inteligente por dentro.</span></h2>
          <p class="secao__intro">Alguns ambientes projetados pela Movelaria. Imagens com o selo “Projeto 3D” são renderizações de projeto.</p>
        </header>

        <div class="filtros revelar" role="group" aria-label="Filtrar projetos por ambiente">
          <button type="button" class="filtro" aria-pressed="true" data-filtro="todos">Todos</button>
          ${usados.map((a) => `<button type="button" class="filtro" aria-pressed="false" data-filtro="${a.id}">${a.nome}</button>`).join('')}
        </div>
        <p class="sr-only" aria-live="polite" data-galeria-status></p>

        <ul class="galeria__grade" data-galeria>
          ${projetos
            .map(
              (p, i) => `
            <li class="galeria__item" data-ambiente="${p.ambiente}">
              <button type="button" class="galeria__botao" data-abrir="${i}">
                <span class="sr-only">Ampliar: </span>
                ${Imagem({ arquivo: p.arquivo, alt: p.alt, legenda: nomeAmbiente(p.ambiente), largura: p.largura, altura: p.altura })}
                ${selo(p)}
                <span class="galeria__info">
                  <span class="galeria__titulo">${p.titulo}</span>
                  <span class="galeria__ambiente">${nomeAmbiente(p.ambiente)}</span>
                </span>
              </button>
            </li>`,
            )
            .join('')}
        </ul>

        <div class="galeria__cta revelar">
          <p>Gostou de algum ambiente? <strong>Vamos tirar seu projeto do papel?</strong></p>
          <a class="botao botao--primario" href="${whatsappLink('Olá! Vi os projetos no site da Movelaria e gostaria de solicitar meu projeto.')}" target="_blank" rel="noopener">
            ${icones.whatsapp} Solicite seu projeto
          </a>
        </div>
      </div>

      <dialog class="lightbox" aria-labelledby="lightbox-titulo" data-lightbox>
        <div class="lightbox__caixa">
          <button type="button" class="lightbox__fechar" data-fechar aria-label="Fechar">${icones.fechar}</button>
          <div class="lightbox__midia" data-midia></div>
          <div class="lightbox__rodape">
            <div>
              <h3 class="lightbox__titulo" id="lightbox-titulo" data-titulo></h3>
              <p class="lightbox__ambiente" data-ambiente-lb></p>
            </div>
            <div class="lightbox__nav">
              <button type="button" class="lightbox__seta" data-anterior aria-label="Projeto anterior">${icones.setaEsq}</button>
              <span class="lightbox__contador" data-contador></span>
              <button type="button" class="lightbox__seta" data-proximo aria-label="Próximo projeto">${icones.seta}</button>
            </div>
          </div>
        </div>
      </dialog>
    </section>`
}

export function iniciarGaleria() {
  const secao = document.getElementById('projetos')
  const grade = secao.querySelector('[data-galeria]')
  const itens = [...grade.querySelectorAll('.galeria__item')]
  const status = secao.querySelector('[data-galeria-status]')
  const dialog = secao.querySelector('[data-lightbox]')
  let visiveis = projetos.map((_, i) => i)
  let atual = 0
  let gatilho = null

  // Filtro
  secao.querySelectorAll('[data-filtro]').forEach((botao) => {
    botao.addEventListener('click', () => {
      const filtro = botao.dataset.filtro
      secao.querySelectorAll('[data-filtro]').forEach((b) => b.setAttribute('aria-pressed', String(b === botao)))
      visiveis = []
      itens.forEach((item, i) => {
        const mostrar = filtro === 'todos' || item.dataset.ambiente === filtro
        item.hidden = !mostrar
        if (mostrar) visiveis.push(i)
      })
      status.textContent = `${visiveis.length} ${visiveis.length === 1 ? 'projeto' : 'projetos'} em ${botao.textContent}`
    })
  })

  // Lightbox
  const midia = dialog.querySelector('[data-midia]')

  function mostrar(indice) {
    atual = indice
    const p = projetos[indice]
    const nome = nomeAmbiente(p.ambiente)
    midia.innerHTML =
      Imagem({ arquivo: p.arquivo, alt: p.alt, legenda: nome, largura: p.largura, altura: p.altura, lazy: false, classe: 'imagem--lightbox', proporcaoReal: true }) + selo(p)
    iniciarImagens(midia)
    dialog.querySelector('[data-titulo]').textContent = p.titulo
    dialog.querySelector('[data-ambiente-lb]').textContent = nome + (p.tipo === 'render-3d' ? ' · Projeto 3D' : '')
    const pos = visiveis.indexOf(indice)
    dialog.querySelector('[data-contador]').textContent = `${pos + 1} / ${visiveis.length}`
  }

  function passo(direcao) {
    const pos = visiveis.indexOf(atual)
    const proximo = visiveis[(pos + direcao + visiveis.length) % visiveis.length]
    mostrar(proximo)
  }

  grade.addEventListener('click', (e) => {
    const botao = e.target.closest('[data-abrir]')
    if (!botao) return
    gatilho = botao
    mostrar(Number(botao.dataset.abrir))
    dialog.showModal()
    dialog.querySelector('[data-fechar]').focus()
  })

  dialog.querySelector('[data-fechar]').addEventListener('click', () => dialog.close())
  dialog.querySelector('[data-anterior]').addEventListener('click', () => passo(-1))
  dialog.querySelector('[data-proximo]').addEventListener('click', () => passo(1))
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') passo(-1)
    if (e.key === 'ArrowRight') passo(1)
  })
  // Clique no fundo escuro fecha
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close()
  })
  dialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-aberto')
    gatilho?.focus()
  })
  dialog.addEventListener('toggle', () => {
    if (dialog.open) document.body.classList.add('lightbox-aberto')
  })
}
