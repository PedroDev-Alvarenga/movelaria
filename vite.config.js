import { defineConfig } from 'vite'
import { site } from './src/data/site.config.js'

// No GitHub Pages o site fica em /movelaria/ (o scripts/deploy.mjs define BASE_PATH).
// Em hospedagem com domínio próprio fica na raiz.
const base = process.env.BASE_PATH || '/'
// Endereço público provisório (GitHub Pages) para a prévia do link no WhatsApp
const urlProvisoria = (process.env.SITE_URL || '').replace(/\/$/, '')

// Gera canonical, og:url/og:image e o JSON-LD a partir de src/data/site.config.js,
// para que os dados do negócio fiquem num lugar só.
function seoDoNegocio() {
  const dominioDefinido = site.dominio && !site.dominio.startsWith('[')
  const urlSite = dominioDefinido ? `https://${site.dominio.replace(/^https?:\/\//, '').replace(/\/$/, '')}` : ''

  const urls = dominioDefinido
    ? [
        `<link rel="canonical" href="${urlSite}/" />`,
        `<meta property="og:url" content="${urlSite}/" />`,
        `<meta property="og:image" content="${urlSite}/og-image.png" />`,
        `<meta name="twitter:image" content="${urlSite}/og-image.png" />`,
      ].join('\n    ')
    : [
        '<!-- canonical e og:url: preencha `dominio` em src/data/site.config.js -->',
        `<meta property="og:image" content="${urlProvisoria ? urlProvisoria + '/' : base}og-image.png" />`,
        `<meta name="twitter:image" content="${urlProvisoria ? urlProvisoria + '/' : base}og-image.png" />`,
      ].join('\n    ')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: site.nome,
    description: `${site.bio} ${site.bioAnos}.`,
    telephone: '+55 51 3055-1625',
    image: dominioDefinido ? `${urlSite}/og-image.png` : undefined,
    url: dominioDefinido ? `${urlSite}/` : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.endereco.rua,
      addressLocality: site.endereco.cidade,
      addressRegion: site.endereco.uf,
      postalCode: site.endereco.cep,
      addressCountry: 'BR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.google.notaNumero,
      reviewCount: site.google.totalAvaliacoes,
      bestRating: 5,
    },
    sameAs: [site.instagram.url, site.threads.url],
  }

  return {
    name: 'seo-do-negocio',
    transformIndexHtml(html) {
      return html
        .replace('<!--SEO_URLS-->', urls)
        .replace(
          '<!--JSON_LD-->',
          `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
        )
    },
  }
}

export default defineConfig({
  base,
  plugins: [seoDoNegocio()],
  build: {
    // three.js (cena 3D do hero) é grande mas carrega sob demanda, em chunk
    // separado, só quando o hero entra na tela — não bloqueia o carregamento inicial.
    chunkSizeWarningLimit: 800,
  },
})
