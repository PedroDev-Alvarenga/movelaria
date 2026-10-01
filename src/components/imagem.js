// <Imagem>: mostra um placeholder com textura de madeira clara e a legenda do ambiente.
// Quando `arquivo` estiver preenchido e a foto existir em public/projetos/,
// a foto carrega por cima do placeholder. Se o arquivo não existir, o placeholder fica.

const BASE = import.meta.env.BASE_URL

export function caminhoProjeto(arquivo) {
  return `${BASE}projetos/${arquivo}`
}

export function Imagem({
  arquivo = '',
  alt = '',
  legenda = '',
  largura = 1200,
  altura = 900,
  lazy = true,
  classe = '',
  pasta = 'projetos',
  proporcaoReal = false, // usa a proporção da própria foto (lightbox)
} = {}) {
  const foto = arquivo
    ? `<img src="${BASE}${pasta}/${arquivo}" alt="${alt}" width="${largura}" height="${altura}" ${
        lazy ? 'loading="lazy"' : 'fetchpriority="high"'
      } decoding="async" data-imagem-foto>`
    : ''

  return `
    <div class="imagem ${classe} ${arquivo && proporcaoReal ? 'imagem--real' : ''}" ${
      arquivo && proporcaoReal ? `style="--r:${(largura / altura).toFixed(4)}"` : ''
    } ${arquivo ? '' : 'data-vazia'}>
      <div class="imagem__ph" ${arquivo ? 'aria-hidden="true"' : `role="img" aria-label="${alt || legenda}"`}>
        <span class="imagem__luz" aria-hidden="true"></span>
        ${legenda ? `<span class="imagem__legenda" aria-hidden="true">${legenda}</span>` : ''}
      </div>
      ${foto}
    </div>`
}

// Liga os eventos de carregamento das fotos que estiverem dentro de `raiz`.
export function iniciarImagens(raiz = document) {
  raiz.querySelectorAll('img[data-imagem-foto]').forEach((img) => {
    const caixa = img.closest('.imagem')
    const ok = () => caixa.classList.add('imagem--carregada')
    const erro = () => {
      // Arquivo listado mas ainda não enviado: mantém o placeholder visível e acessível.
      const ph = caixa.querySelector('.imagem__ph')
      ph.removeAttribute('aria-hidden')
      ph.setAttribute('role', 'img')
      ph.setAttribute('aria-label', img.alt)
      img.remove()
    }
    if (img.complete) {
      img.naturalWidth ? ok() : erro()
    } else {
      img.addEventListener('load', ok, { once: true })
      img.addEventListener('error', erro, { once: true })
    }
  })
}
