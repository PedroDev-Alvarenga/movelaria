import { site } from '../data/site.config.js'
import { projetos } from '../data/projetos.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { Imagem } from './imagem.js'
import { icones } from './icones.js'
import { iniciarHero3D } from './hero3d.js'

// Desenho técnico de uma cozinha (vista frontal), usado como miolo do
// placeholder enquanto a cena 3D carrega (ou como alternativa se o WebGL falhar).
function desenhoCozinha() {
  // `--d` = atraso de cada traço (s)
  const t = (d) => `class="traco" pathLength="1" style="--d:${d}s"`
  return `
  <svg class="desenho" viewBox="0 0 640 460" role="img" aria-labelledby="desenho-titulo">
    <title id="desenho-titulo">Desenho técnico de uma cozinha planejada que ganha cor: armários aéreos em madeira clara, armários inferiores em verde sálvia e fita de LED quente acesa.</title>
    <defs>
      <linearGradient id="g-madeira" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e2c193"/>
        <stop offset=".55" stop-color="#cfa46c"/>
        <stop offset="1" stop-color="#bf8f57"/>
      </linearGradient>
      <pattern id="p-veio" width="125" height="18" patternUnits="userSpaceOnUse">
        <path d="M0 6c30-3 60 3 125-1M0 14c40 2 80-3 125 1" stroke="#a87743" stroke-opacity=".28" fill="none"/>
      </pattern>
      <linearGradient id="g-salvia" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#a9b99b"/>
        <stop offset="1" stop-color="#93a585"/>
      </linearGradient>
      <linearGradient id="g-led" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffd58a" stop-opacity=".95"/>
        <stop offset=".35" stop-color="#ffe2a8" stop-opacity=".45"/>
        <stop offset="1" stop-color="#fff3d6" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="g-nicho" cx=".5" cy="0" r="1">
        <stop offset="0" stop-color="#ffe0a3"/>
        <stop offset="1" stop-color="#b98a55"/>
      </radialGradient>
    </defs>

    <!-- Preenchimentos (aparecem depois do traço) -->
    <g class="preench">
      <rect x="70" y="70" width="250" height="110" fill="url(#g-madeira)"/>
      <rect x="445" y="70" width="125" height="110" fill="url(#g-madeira)"/>
      <rect x="70" y="70" width="250" height="110" fill="url(#p-veio)"/>
      <rect x="445" y="70" width="125" height="110" fill="url(#p-veio)"/>
      <rect x="320" y="70" width="125" height="110" fill="url(#g-nicho)"/>
      <rect x="55" y="262" width="530" height="14" fill="#f4efe6"/>
      <rect x="70" y="276" width="375" height="112" fill="url(#g-salvia)"/>
      <rect x="445" y="276" width="125" height="112" fill="#e9e4dc"/>
      <rect x="470" y="310" width="75" height="50" fill="#3a3d40" fill-opacity=".85"/>
      <rect x="80" y="388" width="480" height="12" fill="#cbbda7"/>
      <rect x="88" y="240" width="30" height="22" rx="3" fill="#c98f62"/>
      <path d="M103 240c-2-14-12-22-22-24 6 8 10 16 22 24Zm0 0c1-16 8-26 18-30-3 10-6 20-18 30Zm0 0c-1-12 0-22 4-30 3 10 1 20-4 30Z" fill="#6f8a63"/>
      <path d="M382 125c-1-10-7-15-14-17 4 6 7 11 14 17Zm0 0c1-11 6-17 12-20-2 7-5 13-12 20Z" fill="#6f8a63"/>
      <rect x="374" y="125" width="16" height="13" rx="2" fill="#f7f3ec"/>
    </g>

    <!-- Luz da fita de LED -->
    <g class="led">
      <path d="M75 184h490l40 78H35z" fill="url(#g-led)"/>
      <rect x="75" y="181" width="490" height="4" rx="2" fill="#ffd58a"/>
      <rect x="326" y="74" width="113" height="3" rx="1.5" fill="#fff0c8"/>
    </g>

    <!-- Traço técnico -->
    <g class="tracos" fill="none" stroke="#14224f" stroke-width="1.6" stroke-linejoin="round">
      <line x1="20" y1="400" x2="620" y2="400" ${t(0)}/>
      <rect x="70" y="70" width="500" height="110" ${t(0.15)}/>
      <line x1="195" y1="70" x2="195" y2="180" ${t(0.45)}/>
      <line x1="320" y1="70" x2="320" y2="180" ${t(0.5)}/>
      <line x1="445" y1="70" x2="445" y2="180" ${t(0.55)}/>
      <line x1="320" y1="138" x2="445" y2="138" ${t(0.7)}/>
      <line x1="178" y1="160" x2="178" y2="172" ${t(0.8)}/>
      <line x1="212" y1="160" x2="212" y2="172" ${t(0.8)}/>
      <line x1="553" y1="160" x2="553" y2="172" ${t(0.85)}/>
      <rect x="55" y="262" width="530" height="14" ${t(0.9)}/>
      <rect x="70" y="276" width="500" height="112" ${t(1.1)}/>
      <line x1="195" y1="276" x2="195" y2="388" ${t(1.35)}/>
      <line x1="320" y1="276" x2="320" y2="388" ${t(1.4)}/>
      <line x1="382.5" y1="276" x2="382.5" y2="388" ${t(1.45)}/>
      <line x1="445" y1="276" x2="445" y2="388" ${t(1.5)}/>
      <line x1="70" y1="313" x2="195" y2="313" ${t(1.55)}/>
      <line x1="70" y1="350" x2="195" y2="350" ${t(1.6)}/>
      <line x1="117" y1="294" x2="148" y2="294" ${t(1.7)}/>
      <line x1="117" y1="331" x2="148" y2="331" ${t(1.72)}/>
      <line x1="117" y1="368" x2="148" y2="368" ${t(1.74)}/>
      <line x1="305" y1="292" x2="305" y2="312" ${t(1.76)}/>
      <line x1="372" y1="292" x2="372" y2="312" ${t(1.78)}/>
      <line x1="393" y1="292" x2="393" y2="312" ${t(1.8)}/>
      <rect x="470" y="310" width="75" height="50" rx="3" ${t(1.82)}/>
      <line x1="465" y1="294" x2="550" y2="294" ${t(1.85)}/>
      <path d="M80 388v12M560 388v12" ${t(1.88)}/>
      <path d="M257 262v-30c0-10 16-10 16 0v6" ${t(1.9)}/>
      <path d="M470 258h30M515 258h30" ${t(1.92)}/>
    </g>

    <!-- Cotas -->
    <g class="cotas" stroke="#7a4e22" stroke-width="1" fill="#7a4e22">
      <path d="M70 40h500M70 33v14M570 33v14" fill="none"/>
      <text x="320" y="32" text-anchor="middle" stroke="none">250</text>
      <path d="M32 70v330M25 70h14M25 400h14" fill="none"/>
      <text x="22" y="240" text-anchor="middle" stroke="none" transform="rotate(-90 22 240)">240</text>
      <path d="M608 262v138M601 262h14M601 400h14" fill="none"/>
      <text x="626" y="334" text-anchor="middle" stroke="none" transform="rotate(-90 626 334)">90</text>
    </g>
  </svg>`
}

export function Hero() {
  const fotoHero = projetos.find((p) => p.hero && p.arquivo)

  return `
    <section class="hero" id="inicio" aria-labelledby="hero-titulo">
      <div class="container hero__grade">
        <div class="hero__texto">
          <p class="pilula">Guaíba · RS — há ${site.anos} anos</p>
          <h1 id="hero-titulo">Móveis planejados, mesas e estofados <span class="destaque">sob medida</span></h1>
          <p class="hero__sub">Há ${site.anos} anos transformando sonhos em realidade. <strong>Cada detalhe pensado para você.</strong></p>
          <div class="hero__acoes">
            <a class="botao botao--primario botao--grande" href="${whatsappLink()}" target="_blank" rel="noopener">
              ${icones.whatsapp} Peça um orçamento
            </a>
            <a class="botao botao--secundario botao--grande" href="#projetos">Ver projetos</a>
          </div>
          <ul class="hero__selos">
            <li><span class="hero__estrela">${icones.estrela}</span> <strong>${site.google.nota}</strong> no Google · ${site.google.totalAvaliacoes} avaliações</li>
            <li>${icones.entrega} Fazemos entrega</li>
          </ul>
        </div>

        <figure class="hero__visual ${fotoHero ? 'hero__visual--foto' : ''}">
          <svg class="hero__anel" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--terracota)" stroke-width="2" stroke-opacity=".35"/>
            <circle cx="60" cy="60" r="38" fill="none" stroke="var(--marinho)" stroke-width="1.5" stroke-opacity=".22"/>
          </svg>
          ${
            fotoHero
              ? Imagem({ arquivo: fotoHero.arquivo, alt: '', largura: fotoHero.largura, altura: fotoHero.altura, lazy: false, classe: 'hero__foto' })
              : ''
          }
          <div class="hero__prancheta hero__3d-card">
            <div class="hero__3d" data-hero-3d></div>
            <div class="hero__3d-desenho" data-desenho>
              ${desenhoCozinha()}
            </div>
          </div>
          <figcaption class="hero__legenda" data-legenda-hero>
            <span class="hero__etapa hero__etapa--1">Do desenho</span>
            <span class="hero__seta" aria-hidden="true">→</span>
            <span class="hero__etapa hero__etapa--2">ao móvel pronto</span>
          </figcaption>
          <p class="hero__credito" data-credito-hero hidden>
            Peça 3D ilustrativa — modelo "Modern Wooden Cabinet", Poly Haven,
            <abbr title="Creative Commons Zero — domínio público">CC0</abbr>
          </p>
        </figure>
      </div>
    </section>`
}

export function iniciarHero() {
  // Desenho técnico: fica visível como placeholder/alternativa até a cena 3D
  // carregar (ou para sempre, se o WebGL não estiver disponível).
  const prancheta = document.querySelector('[data-desenho]')
  if (prancheta) {
    requestAnimationFrame(() => requestAnimationFrame(() => prancheta.classList.add('desenhar')))
  }

  const contentor3d = document.querySelector('[data-hero-3d]')
  if (contentor3d) iniciarHero3D(contentor3d)
}
