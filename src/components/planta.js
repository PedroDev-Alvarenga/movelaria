// Planta de layout ilustrativa de um apartamento (medidas em centímetros),
// desenhada com as convenções de projeto — paredes em poche, portas com arco de
// abertura, janelas com linhas de vidro e hachura de piso nas áreas molhadas —
// mas enxuta, como uma planta de apresentação: só os móveis essenciais.
// A marcenaria planejada aparece em tom de madeira e acende no ambiente escolhido.

// cota com traços inclinados nas pontas
function cotaH(x1, x2, y, rotulo) {
  return `<g class="cota">
    <path d="M${x1 - 15} ${y}H${x2 + 15}M${x1 - 7} ${y + 7}L${x1 + 7} ${y - 7}M${x2 - 7} ${y + 7}L${x2 + 7} ${y - 7}"/>
    <text x="${(x1 + x2) / 2}" y="${y - 12}" text-anchor="middle">${rotulo}</text>
  </g>`
}

function cotaV(y1, y2, x, rotulo) {
  const y = (y1 + y2) / 2
  return `<g class="cota">
    <path d="M${x} ${y1 - 15}V${y2 + 15}M${x - 7} ${y1 + 7}L${x + 7} ${y1 - 7}M${x - 7} ${y2 + 7}L${x + 7} ${y2 - 7}"/>
    <text x="${x - 12}" y="${y}" text-anchor="middle" transform="rotate(-90 ${x - 12} ${y})">${rotulo}</text>
  </g>`
}

// janela: vão na parede + linhas das faces e do vidro
function janelaH(x1, x2, y) {
  return `<rect class="vao" x="${x1}" y="${y}" width="${x2 - x1}" height="15"/>
    <path class="esquadria" d="M${x1} ${y + 3}H${x2}M${x1} ${y + 12}H${x2}M${x1} ${y}V${y + 15}M${x2} ${y}V${y + 15}"/>`
}

function janelaV(y1, y2, x) {
  return `<rect class="vao" x="${x}" y="${y1}" width="15" height="${y2 - y1}"/>
    <path class="esquadria" d="M${x + 3} ${y1}V${y2}M${x + 12} ${y1}V${y2}M${x} ${y1}H${x + 15}M${x} ${y2}H${x + 15}"/>`
}

export const VIEWBOX_PLANTA = '-70 -70 1100 800'
export const VIEWBOX_PLANTA_CELULAR = '-8 -8 1016 736'

export function plantaSVG() {
  return `
  <svg class="planta" viewBox="${VIEWBOX_PLANTA}" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="piso-molhado" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke="#14224f" stroke-opacity=".07" stroke-width="1"/>
      </pattern>
      <pattern id="veio" width="60" height="18" patternUnits="userSpaceOnUse">
        <rect width="60" height="18" fill="#d6b07a"/>
        <path d="M0 5c15-2 30 2 60-1M0 13c20 2 40-2 60 1" fill="none" stroke="#a87743" stroke-opacity=".45" stroke-width="1.2"/>
      </pattern>
    </defs>

    <g class="comodo" data-amb="quarto">
      <rect class="piso" x="15" y="15" width="400" height="330"/>
      <rect class="marc" x="95" y="15" width="240" height="9"/>
      <rect class="marc" x="98" y="24" width="44" height="40"/>
      <rect class="marc" x="288" y="24" width="44" height="40"/>
      <g class="solto">
        <rect x="146" y="24" width="138" height="200" rx="3"/>
        <path d="M146 100H284"/>
      </g>
      <text x="215" y="292" text-anchor="middle">Quarto</text>
    </g>

    <g class="comodo" data-amb="closet">
      <rect class="piso" x="425" y="15" width="190" height="150"/>
      <rect class="marc" x="425" y="15" width="190" height="55"/>
      <rect class="marc" x="560" y="70" width="55" height="95"/>
      <text x="490" y="124" text-anchor="middle">Closet</text>
    </g>

    <g class="comodo" data-amb="banheiro">
      <rect class="piso" x="425" y="175" width="190" height="170"/>
      <rect class="hachura" x="425" y="175" width="190" height="170"/>
      <rect class="marc" x="425" y="175" width="78" height="50"/>
      <g class="solto">
        <ellipse cx="464" cy="200" rx="18" ry="13"/>
        <path d="M535 175V265H615"/>
        <rect x="427" y="282" width="12" height="36" rx="2"/>
        <ellipse cx="456" cy="300" rx="17" ry="14"/>
      </g>
      <text x="490" y="254" text-anchor="middle">Banho</text>
    </g>

    <g class="comodo" data-amb="home-office">
      <rect class="piso" x="625" y="15" width="360" height="330"/>
      <rect class="marc" x="645" y="15" width="320" height="60"/>
      <rect class="marc" x="945" y="120" width="40" height="170"/>
      <g class="solto"><circle cx="805" cy="112" r="24"/></g>
      <text x="805" y="232" text-anchor="middle">Home office</text>
    </g>

    <g class="comodo" data-amb="sala">
      <rect class="piso" x="15" y="355" width="455" height="350"/>
      <rect class="marc" x="70" y="355" width="340" height="45"/>
      <g class="peca peca--estofado" data-peca="estofados">
        <path d="M110 515H195V600H380V685H110Z"/>
        <path class="costura" d="M128 515V667H380M195 600V685M288 600V685"/>
      </g>
      <text x="240" y="460" text-anchor="middle">Sala</text>
    </g>

    <g class="comodo" data-amb="sala-de-jantar">
      <rect class="piso" x="470" y="355" width="250" height="350"/>
      <rect class="marc" x="505" y="355" width="180" height="40"/>
      <g class="solto">
        <rect x="493" y="490" width="38" height="38" rx="6"/><rect x="493" y="541" width="38" height="38" rx="6"/><rect x="493" y="592" width="38" height="38" rx="6"/>
        <rect x="659" y="490" width="38" height="38" rx="6"/><rect x="659" y="541" width="38" height="38" rx="6"/><rect x="659" y="592" width="38" height="38" rx="6"/>
      </g>
      <g class="peca peca--mesa" data-peca="mesas">
        <rect x="535" y="480" width="120" height="160" rx="2"/>
      </g>
      <text x="595" y="446" text-anchor="middle">Jantar</text>
    </g>

    <g class="comodo" data-amb="cozinha">
      <rect class="piso" x="720" y="355" width="265" height="350"/>
      <rect class="hachura" x="720" y="355" width="265" height="350"/>
      <rect class="marc" x="925" y="420" width="60" height="270"/>
      <rect class="marc" x="770" y="480" width="70" height="170"/>
      <g class="solto">
        <rect x="925" y="362" width="60" height="52" rx="2"/>
        <rect x="935" y="470" width="40" height="64" rx="8"/>
        <circle cx="943" cy="600" r="9"/><circle cx="967" cy="600" r="9"/><circle cx="943" cy="632" r="9"/><circle cx="967" cy="632" r="9"/>
      </g>
      <text x="848" y="436" text-anchor="middle">Cozinha</text>
    </g>

    <path class="limite" d="M470 355V705M720 355V705"/>

    <g class="parede">
      <rect x="0" y="0" width="1000" height="15"/>
      <rect x="0" y="705" width="1000" height="15"/>
      <rect x="0" y="0" width="15" height="720"/>
      <rect x="985" y="0" width="15" height="720"/>
      <rect x="15" y="345" width="970" height="10"/>
      <rect x="415" y="15" width="10" height="330"/>
      <rect x="615" y="15" width="10" height="330"/>
      <rect x="425" y="165" width="190" height="10"/>
    </g>

    <g class="vaos">
      <rect class="vao" x="320" y="345" width="80" height="10"/>
      <rect class="vao" x="520" y="345" width="70" height="10"/>
      <rect class="vao" x="640" y="345" width="80" height="10"/>
      <rect class="vao" x="415" y="40" width="10" height="80"/>
      <rect class="vao" x="0" y="580" width="15" height="90"/>
    </g>
    <g class="porta">
      <path d="M400 345V265M320 345A80 80 0 0 1 400 265"/>
      <path d="M590 345V275M520 345A70 70 0 0 1 590 275"/>
      <path d="M640 345V265M720 345A80 80 0 0 0 640 265"/>
      <path d="M15 670H105M15 580A90 90 0 0 1 105 670"/>
    </g>

    ${janelaH(140, 290, 0)}
    ${janelaH(700, 900, 0)}
    ${janelaH(120, 400, 705)}
    ${janelaH(525, 665, 705)}
    ${janelaV(440, 600, 985)}

    ${cotaH(0, 1000, -38, '10,00')}
    ${cotaV(0, 720, -38, '7,20')}
  </svg>`
}
