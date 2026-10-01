// Dados do negócio — única fonte de verdade do site.
// Fontes: Instagram @movelaria_rodrigo (prevalece) e perfil no Google Maps.
// Tudo que estiver entre [COLCHETES] é pendente e precisa ser confirmado.

export const site = {
  nome: 'Movelaria',
  nomeInstagram: 'Movelaria | Móveis Planejados',
  bio: 'Móveis planejados, mesas e estofados sob medida.',
  bioAnos: 'Há 25 anos transformando sonhos em realidade',
  anos: 25,

  // Logo oficial: coloque o arquivo em public/ (ex.: 'logo.svg') e informe o nome aqui.
  // Enquanto estiver vazio, o site mostra a marca recriada em texto.
  logo: '',

  // Domínio definitivo ainda não definido (sem "https://", ex.: 'www.seusite.com.br')
  dominio: '[DOMÍNIO DO SITE]',

  telefoneExibicao: '(51) 3055-1625',
  telefoneLink: 'tel:+555130551625',
  whatsappNumero: '555130551625',

  horario: '[HORÁRIO COMPLETO]',
  horarioObservacao: 'No Google consta: abre sex. às 09:00.',
  cnpj: '[CNPJ]',

  fazEntrega: true,

  endereco: {
    rua: 'Av. Ismael Chaves Barcelos, 99',
    bairro: 'Centro',
    cidade: 'Guaíba',
    uf: 'RS',
    cep: '92704-720',
  },

  instagram: {
    usuario: '@movelaria_rodrigo',
    url: 'https://www.instagram.com/movelaria_rodrigo/',
    seguidores: '1.276',
  },
  threads: {
    usuario: '@movelaria_rodrigo',
    url: 'https://www.threads.net/@movelaria_rodrigo',
  },

  // Proprietário: nome completo e papel não confirmados
  proprietario: '[INSTAGRAM DO RODRIGO: confirmar]',

  google: {
    nota: '4,9',
    notaNumero: 4.9,
    totalAvaliacoes: 8,
  },
}

export const enderecoCompleto =
  `${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade} — ${site.endereco.uf}, CEP ${site.endereco.cep}`

const consultaMapa = encodeURIComponent(
  `${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade} - ${site.endereco.uf}, ${site.endereco.cep}`,
)

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`
export const mapsEmbedUrl = `https://www.google.com/maps?q=${consultaMapa}&output=embed`
