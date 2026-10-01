// Galeria de projetos.
// Coloque as fotos em `public/projetos/` e preencha `arquivo` com o nome do arquivo
// (ex.: 'cozinha-01.jpg'). Enquanto `arquivo` estiver vazio ou o arquivo não existir,
// o site mostra um placeholder com o nome do ambiente.
//
// ambiente: precisa ser um dos `id` de src/data/ambientes.js
// tipo: 'projeto-entregue' (obra real) ou 'render-3d' (ganha o selo "Projeto 3D")
// largura/altura: tamanho real da foto (evita "pulos" no layout)
//
// As 4 fotos abaixo vêm do feed do Instagram em baixa resolução (~245 px).
// Os arquivos "-recorte" são cópias sem os ícones do Instagram que vieram na captura;
// os originais continuam na pasta. Troque pelas imagens originais quando tiver.

export const projetos = [
  { arquivo: 'cozinha-bancada-led.jpg', ambiente: 'cozinha', titulo: 'Cozinha com bancada', alt: 'Cozinha planejada com bancada de granito preto, armários em madeira clara e fita de LED embutida', tipo: 'render-3d', largura: 247, altura: 327 },
  { arquivo: 'closet-iluminado.jpg', ambiente: 'closet', titulo: 'Closet com iluminação', alt: 'Closet planejado em tons claros, com cabideiros, gavetas, prateleiras de calçados e fita de LED embutida', tipo: 'render-3d', largura: 247, altura: 328 },
  { arquivo: 'quarto-home-office-recorte.jpg', ambiente: 'quarto', titulo: 'Quarto com home office', alt: 'Quarto planejado com armários suspensos, painel de madeira clara com LED e bancada de estudo integrada à cama', tipo: 'render-3d', largura: 246, altura: 284 },
  { arquivo: 'cozinha-madeira-clara-recorte.jpg', ambiente: 'cozinha', titulo: 'Cozinha em madeira clara', alt: 'Cozinha planejada com armários brancos e em madeira clara, nicho com iluminação e bancada escura', tipo: 'render-3d', largura: 244, altura: 296 },
  { arquivo: '', ambiente: 'sala', titulo: 'Painel para TV', alt: 'Sala com painel e rack planejados', tipo: 'projeto-entregue' },
  { arquivo: '', ambiente: 'banheiro', titulo: 'Gabinete de banheiro', alt: 'Banheiro com gabinete sob medida', tipo: 'projeto-entregue' },
  { arquivo: '', ambiente: 'home-office', titulo: 'Home office', alt: 'Home office planejado', tipo: 'projeto-entregue' },
  { arquivo: '', ambiente: 'sala-de-jantar', titulo: 'Sala de jantar', alt: 'Sala de jantar com móveis sob medida', tipo: 'projeto-entregue' },
]
