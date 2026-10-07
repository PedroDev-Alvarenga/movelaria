import { projetos } from '../data/projetos.js'
import { ambientes } from '../data/ambientes.js'
import { site } from '../data/site.config.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { Imagem, iniciarImagens } from './imagem.js'
import { icones } from './icones.js'
import { rotulo } from './rotulo.js'

const nomeAmbiente = (id) => ambientes.find((a) => a.id === id)?.nome ?? id

// A partir de quantas fotos vale mostrar o filtro por ambiente
const MINIMO_PARA_FILTRO = 8

function selo(p) {
  return p.tipo === 'render-3d' ? '<span class="selo-3d">Projeto 3D</span>' : ''
}

// Só entram na galeria os itens que já têm foto
const fotos = projetos.filter((p) => p.arquivo)

export function Galeria() {
  const usados = ambientes.filter((a) => fotos.some((p) => p.ambiente === a.id))
  const temFiltro = fotos.length >= MINIMO_PARA_FILTRO && usados.length > 1
  const temRender = fotos.some((p) => p.tipo === 'render-3d')

  return `
    <section class="secao galeria" id="projetos" aria-labelledby="projetos-titulo">
      <div class="container">
        <header class="galeria__topo revelar">
          <div>
            ${rotulo('Projetos')}
            <h2 id="projetos-titulo">Bonito por fora.<br>Inteligente por dentro.</h2>
          </div>
          <p>Alguns ambientes projetados pela Movelaria.${temRender ? ' As imagens marcadas como “Projeto 3D” são renderizações de projeto.' : ''}</p>
        </header>

        ${
          temFiltro
            ? `<div class="filtros revelar" role="group" aria-label="Filtrar projetos por ambiente">
          <button type="button" class="filtro" aria-pressed="true" data-filtro="todos">Todos</button>
          ${usados.map((a) => `<button type="button" class="filtro" aria-pressed="false" data-filtro="${a.id}">${a.nome}</button>`).join('')}
        </div>
        <p class="sr-only" aria-live="polite" data-galeria-status></p>`
            : ''
        }

        <ul class="galeria__grade" data-galeria>
          ${fotos
            .map(
              (p, i) => `
            <li class="galeria__item revelar" data-ambiente="${p.ambiente}">
              <button type="button" class="galeria__botao" data-abrir="${i}">
                <span class="sr-only">Ampliar: </span>
                ${Imagem({ arquivo: p.arquivo, alt: p.alt, largura: p.largura, altura: p.altura })}
                ${selo(p)}
                <span class="galeria__info">
                  <span class="galeria__ambiente">${nomeAmbiente(p.ambiente)}</span>
                  <span class="galeria__titulo">${p.titulo}</span>
                </span>
              </button>
            </li>`,
            )
            .join('')}
          <li class="galeria__item galeria__item--insta revelar">
            <a class="galeria__insta" href="${site.instagram.url}" target="_blank" rel="noopener">
              <span class="galeria__insta-icone">${icones.instagram}</span>
              <span class="galeria__insta-texto">Mais projetos no Instagram</span>
              <span class="galeria__insta-usuario">${site.instagram.usuario} ${icones.seta}</span>
              <span class="sr-only">(abre em nova aba)</span>
            </a>
          </li>
        </ul>

        <div class="galeria__cta revelar">
          <p>Gostou de algum ambiente? Vamos tirar seu projeto do papel?</p>
          <a class="link-seta" href="${whatsappLink('Olá! Vi os projetos no site da Movelaria e gostaria de solicitar meu projeto.')}" target="_blank" rel="noopener">
            Solicite seu projeto ${icones.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
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
  const itens = [...grade.querySelectorAll('.galeria__item:not(.galeria__item--insta)')]
  const status = secao.querySelector('[data-galeria-status]')
  const dialog = secao.querySelector('[data-lightbox]')
  let visiveis = fotos.map((_, i) => i)
  let atual = 0
  let gatilho = null

  // Filtro (só existe quando há fotos suficientes)
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
    const p = fotos[indice]
    const nome = nomeAmbiente(p.ambiente)
    midia.innerHTML =
      Imagem({ arquivo: p.arquivo, alt: p.alt, largura: p.largura, altura: p.altura, lazy: false, classe: 'imagem--lightbox', proporcaoReal: true }) + selo(p)
    iniciarImagens(midia)
    dialog.querySelector('[data-titulo]').textContent = p.titulo
    dialog.querySelector('[data-ambiente-lb]').textContent = nome + (p.tipo === 'render-3d' ? ' · Projeto 3D' : '')
    const pos = visiveis.indexOf(indice)
    dialog.querySelector('[data-contador]').textContent = `${pos + 1} / ${visiveis.length}`
  }

  function passo(direcao) {
    const pos = visiveis.indexOf(atual)
    mostrar(visiveis[(pos + direcao + visiveis.length) % visiveis.length])
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
