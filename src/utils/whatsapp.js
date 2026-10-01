import { site } from '../data/site.config.js'

export const MENSAGEM_PADRAO =
  'Olá! Vim pelo site da Movelaria e gostaria de pedir um orçamento.'

// Único ponto do site que monta links do WhatsApp.
export function whatsappLink(mensagem = MENSAGEM_PADRAO) {
  return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

export function mensagemAmbiente(ambiente) {
  return `Olá! Vim pelo site da Movelaria e gostaria de um orçamento para ${ambiente}.`
}
