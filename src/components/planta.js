// Planta de layout ilustrativa de um apartamento (medidas em centímetros),
// desenhada com as convenções de projeto: paredes em poche, portas com arco de
// abertura, janelas com linhas de vidro, hachura de piso nas áreas molhadas,
// cotas com traço a 45°, escala gráfica e norte. A marcenaria planejada aparece
// em tom de madeira — é ela que acende quando um ambiente é escolhido.

// cota horizontal/vertical com traços inclinados nas pontas
function cotaH(pontos, y, rotulos) {
  const traco = (x) => `<path d="M${x - 7} ${y + 7}L${x + 7} ${y - 7}"/>`
  const linhas = `<path d="M${pontos[0] - 15} ${y}H${pontos[pontos.length - 1] + 15}"/>`
  const textos = rotulos
    .map((r, i) => `<text x="${(pontos[i] + pontos[i + 1]) / 2}" y="${y - 12}" text-anchor="middle">${r}</text>`)
    .join('')
  return `<g class="cota">${linhas}${pontos.map(traco).join('')}${textos}</g>`
}

function cotaV(pontos, x, rotulos) {
  const traco = (y) => `<path d="M${x - 7} ${y + 7}L${x + 7} ${y - 7}"/>`
  const linhas = `<path d="M${x} ${pontos[0] - 15}V${pontos[pontos.length - 1] + 15}"/>`
  const textos = rotulos
    .map((r, i) => {
      const y = (pontos[i] + pontos[i + 1]) / 2
      return `<text x="${x - 12}" y="${y}" text-anchor="middle" transform="rotate(-90 ${x - 12} ${y})">${r}</text>`
    })
    .join('')
  return `<g class="cota">${linhas}${pontos.map(traco).join('')}${textos}</g>`
}

// janela: vão na parede + três linhas (faces e vidro)
function janelaH(x1, x2, y) {
  return `<rect class="vao" x="${x1}" y="${y}" width="${x2 - x1}" height="15"/>
    <path class="esquadria" d="M${x1} ${y + 2}H${x2}M${x1} ${y + 7.5}H${x2}M${x1} ${y + 13}H${x2}M${x1} ${y}V${y + 15}M${x2} ${y}V${y + 15}"/>`
}

function janelaV(y1, y2, x) {
  return `<rect class="vao" x="${x}" y="${y1}" width="15" height="${y2 - y1}"/>
    <path class="esquadria" d="M${x + 2} ${y1}V${y2}M${x + 7.5} ${y1}V${y2}M${x + 13} ${y1}V${y2}M${x} ${y1}H${x + 15}M${x} ${y2}H${x + 15}"/>`
}

export function plantaSVG() {
  return `
  <svg class="planta" viewBox="-95 -95 1140 925" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="piso-molhado" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M30 0H0V30" fill="none" stroke="#14224f" stroke-opacity=".09" stroke-width="1"/>
      </pattern>
      <pattern id="veio" width="60" height="18" patternUnits="userSpaceOnUse">
        <rect width="60" height="18" fill="#d6b07a"/>
        <path d="M0 5c15-2 30 2 60-1M0 13c20 2 40-2 60 1" fill="none" stroke="#a87743" stroke-opacity=".45" stroke-width="1.2"/>
      </pattern>
    </defs>

    <!-- ambientes: piso, móveis e nome -->
    <g class="comodo" data-amb="quarto">
      <rect class="piso" x="15" y="15" width="360" height="340"/>
      <rect class="marc" x="60" y="15" width="270" height="9"/>
      <rect class="marc" x="70" y="24" width="45" height="40"/>
      <rect class="marc" x="275" y="24" width="45" height="40"/>
      <rect class="marc" x="352" y="170" width="23" height="160"/>
      <g class="solto">
        <rect x="120" y="24" width="150" height="200" rx="3"/>
        <rect x="130" y="34" width="60" height="30" rx="8"/>
        <rect x="200" y="34" width="60" height="30" rx="8"/>
        <path d="M120 96H270M120 104H270"/>
      </g>
      <text x="195" y="292" text-anchor="middle">Quarto</text>
    </g>

    <g class="comodo" data-amb="closet">
      <rect class="piso" x="385" y="15" width="190" height="160"/>
      <rect class="marc" x="385" y="15" width="190" height="55"/>
      <rect class="marc" x="520" y="70" width="55" height="105"/>
      <path class="solto tracejado" d="M395 42H565"/>
      <text x="452" y="132" text-anchor="middle">Closet</text>
    </g>

    <g class="comodo" data-amb="banheiro">
      <rect class="piso" x="385" y="185" width="190" height="170"/>
      <rect class="hachura" x="385" y="185" width="190" height="170"/>
      <rect class="marc" x="515" y="190" width="60" height="80"/>
      <g class="solto">
        <path d="M490 185V270H385"/>
        <circle cx="437" cy="228" r="6"/>
        <ellipse cx="545" cy="230" rx="17" ry="13"/>
        <rect x="562" y="300" width="12" height="36" rx="2"/>
        <ellipse cx="543" cy="318" rx="19" ry="15"/>
      </g>
      <text x="482" y="310" text-anchor="middle">Banho</text>
    </g>

    <g class="comodo" data-amb="home-office">
      <rect class="piso" x="585" y="15" width="230" height="340"/>
      <rect class="marc" x="585" y="15" width="230" height="60"/>
      <rect class="marc" x="775" y="110" width="40" height="180"/>
      <g class="solto">
        <circle cx="690" cy="108" r="22"/>
        <path class="tracejado" d="M590 46H810"/>
      </g>
      <text x="680" y="232" text-anchor="middle">Home office</text>
    </g>

    <g class="comodo comodo--fixo">
      <rect class="piso" x="825" y="15" width="160" height="340"/>
      <rect class="hachura" x="825" y="15" width="160" height="340"/>
      <g class="solto">
        <rect x="925" y="22" width="55" height="48" rx="3"/><rect x="933" y="30" width="39" height="32" rx="6"/>
        <rect x="925" y="82" width="55" height="55" rx="3"/><circle cx="952.5" cy="109.5" r="19"/>
      </g>
      <text x="905" y="232" text-anchor="middle">Área de</text>
      <text x="905" y="256" text-anchor="middle">serviço</text>
    </g>

    <g class="comodo" data-amb="sala">
      <rect class="piso" x="15" y="365" width="485" height="360"/>
      <rect class="marc" x="70" y="365" width="360" height="45"/>
      <g class="solto">
        <path d="M150 373H350"/>
        <rect class="tracejado" x="88" y="468" width="304" height="236"/>
        <circle cx="250" cy="545" r="34"/>
      </g>
      <g class="peca peca--estofado" data-peca="estofados">
        <path d="M100 520H185V610H360V695H100Z"/>
        <path class="costura" d="M118 520V677H360M185 610V695M272 610V695"/>
      </g>
      <text x="250" y="447" text-anchor="middle">Sala</text>
    </g>

    <g class="comodo" data-amb="sala-de-jantar">
      <rect class="piso" x="500" y="365" width="230" height="360"/>
      <rect class="marc" x="530" y="365" width="170" height="40"/>
      <g class="solto">
        <rect x="512" y="515" width="38" height="38" rx="6"/><rect x="512" y="572" width="38" height="38" rx="6"/><rect x="512" y="629" width="38" height="38" rx="6"/>
        <rect x="680" y="515" width="38" height="38" rx="6"/><rect x="680" y="572" width="38" height="38" rx="6"/><rect x="680" y="629" width="38" height="38" rx="6"/>
      </g>
      <g class="peca peca--mesa" data-peca="mesas">
        <rect x="555" y="500" width="120" height="180" rx="2"/>
      </g>
      <text x="615" y="447" text-anchor="middle">Jantar</text>
    </g>

    <g class="comodo" data-amb="cozinha">
      <rect class="piso" x="730" y="365" width="255" height="360"/>
      <rect class="hachura" x="730" y="365" width="255" height="360"/>
      <rect class="marc" x="925" y="440" width="60" height="270"/>
      <rect class="marc" x="770" y="470" width="70" height="200"/>
      <g class="solto">
        <rect x="925" y="370" width="60" height="64" rx="2"/><path d="M925 370L985 434M985 370L925 434"/>
        <rect x="935" y="500" width="40" height="66" rx="8"/>
        <circle cx="943" cy="625" r="9"/><circle cx="967" cy="625" r="9"/><circle cx="943" cy="660" r="9"/><circle cx="967" cy="660" r="9"/>
        <circle cx="751" cy="505" r="13"/><circle cx="751" cy="550" r="13"/><circle cx="751" cy="595" r="13"/><circle cx="751" cy="640" r="13"/>
        <path class="tracejado" d="M950 440V710"/>
      </g>
      <text x="855" y="420" text-anchor="middle">Cozinha</text>
    </g>

    <!-- limites entre ambientes integrados -->
    <path class="limite" d="M500 365V725M730 365V725"/>

    <!-- paredes (poche) -->
    <g class="parede">
      <rect x="0" y="0" width="1000" height="15"/>
      <rect x="0" y="725" width="1000" height="15"/>
      <rect x="0" y="0" width="15" height="740"/>
      <rect x="985" y="0" width="15" height="740"/>
      <rect x="15" y="355" width="970" height="10"/>
      <rect x="375" y="15" width="10" height="340"/>
      <rect x="575" y="15" width="10" height="340"/>
      <rect x="815" y="15" width="10" height="340"/>
      <rect x="385" y="175" width="190" height="10"/>
    </g>

    <!-- vãos de porta e passagens -->
    <g class="vaos">
      <rect class="vao" x="270" y="355" width="80" height="10"/>
      <rect class="vao" x="395" y="355" width="70" height="10"/>
      <rect class="vao" x="600" y="355" width="80" height="10"/>
      <rect class="vao" x="845" y="355" width="120" height="10"/>
      <rect class="vao" x="375" y="40" width="10" height="80"/>
      <rect class="vao" x="0" y="600" width="15" height="90"/>
    </g>
    <g class="porta">
      <path d="M350 355V275M270 355A80 80 0 0 1 350 275"/>
      <path d="M395 355V285M465 355A70 70 0 0 0 395 285"/>
      <path d="M600 355V275M680 355A80 80 0 0 0 600 275"/>
      <path d="M15 690H105M15 600A90 90 0 0 1 105 690"/>
    </g>

    <!-- janelas -->
    ${janelaH(110, 290, 0)}
    ${janelaH(630, 770, 0)}
    ${janelaH(870, 950, 0)}
    ${janelaH(90, 430, 725)}
    ${janelaH(560, 700, 725)}
    ${janelaV(470, 610, 985)}

    <!-- cotas -->
    ${cotaH([0, 380, 580, 820, 1000], -42, ['3,80', '2,00', '2,40', '1,80'])}
    ${cotaV([0, 360, 740], -42, ['3,60', '3,80'])}

    <!-- escala gráfica e norte -->
    <g class="escala">
      <rect x="0" y="782" width="100" height="10" class="cheio"/>
      <rect x="100" y="782" width="100" height="10"/>
      <rect x="200" y="782" width="100" height="10" class="cheio"/>
      <text x="0" y="816" text-anchor="middle">0</text>
      <text x="100" y="816" text-anchor="middle">1</text>
      <text x="200" y="816" text-anchor="middle">2</text>
      <text x="312" y="816" text-anchor="middle">3 m</text>
    </g>
    <g class="norte" transform="translate(975 790)">
      <circle r="24"/>
      <path d="M0 -20L9 12L0 5L-9 12Z"/>
      <text y="-30" text-anchor="middle">N</text>
    </g>
  </svg>`
}
