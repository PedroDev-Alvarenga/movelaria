import { site, mapsUrl } from '../data/site.config.js'
import { whatsappLink } from '../utils/whatsapp.js'
import { marca } from './header.js'
import { icones } from './icones.js'

export function Footer() {
  return `
    <footer class="footer" data-footer>
      <div class="container footer__grade">
        <div class="footer__marca">
          ${marca('marca__texto--rodape')}
          <p>${site.bio}<br>${site.bioAnos}.</p>
        </div>

        <div>
          <h2 class="footer__titulo">Contato</h2>
          <ul class="footer__lista">
            <li>${icones.telefone}<a href="${site.telefoneLink}">${site.telefoneExibicao}</a></li>
            <li>${icones.whatsapp}<a href="${whatsappLink()}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li>${icones.instagram}<a href="${site.instagram.url}" target="_blank" rel="noopener">${site.instagram.usuario}</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer__titulo">Endereço</h2>
          <address class="footer__endereco">
            ${site.endereco.rua}, ${site.endereco.bairro}<br>
            ${site.endereco.cidade} — ${site.endereco.uf}<br>
            CEP ${site.endereco.cep}
          </address>
          <a class="footer__mapa" href="${mapsUrl}" target="_blank" rel="noopener">Ver no mapa</a>
        </div>
      </div>
      <div class="container footer__base">
        <p>© <span data-ano></span> ${site.nome}. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>`
}

export function iniciarFooter() {
  document.querySelector('[data-ano]').textContent = new Date().getFullYear()
}
