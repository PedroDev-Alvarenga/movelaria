// Rótulo discreto de seção (texto pequeno em caixa alta com um traço antes)
export function rotulo(texto, classe = '') {
  return `<p class="rotulo ${classe}">${texto}</p>`
}
