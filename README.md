# Movelaria — site

Site da Movelaria (móveis planejados, mesas e estofados sob medida — Guaíba/RS).
Vite + JavaScript puro, sem frameworks.

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # serve o dist/ em http://localhost:4173
```

## Onde trocar os dados

| Arquivo | O que tem |
| --- | --- |
| `src/data/site.config.js` | Nome, telefone/WhatsApp, endereço, Instagram, nota do Google, logo, domínio e horário. Tudo que está entre `[COLCHETES]` é pendente. |
| `src/data/projetos.js` | Itens da galeria (foto, ambiente, título, texto alternativo e tipo). |
| `src/data/depoimentos.js` | Avaliações do Google (cole o texto exatamente como está no Google). |
| `src/data/ambientes.js` | Cartões de ambientes e a mensagem que vai para o WhatsApp. |

Todos os links de WhatsApp passam por `src/utils/whatsapp.js`.
O JSON-LD, o canonical e o `og:url` são gerados no build a partir do `site.config.js` (veja `vite.config.js`).

## Fotos reais

1. Coloque as fotos em `public/projetos/` (JPG ou WebP, ~1600px no lado maior, de preferência abaixo de 300 KB).
2. Em `src/data/projetos.js`, preencha `arquivo` com o nome do arquivo e informe `largura`/`altura` reais:

   ```js
   { arquivo: 'cozinha-01.jpg', largura: 1600, altura: 1200, ambiente: 'cozinha',
     titulo: 'Cozinha com bancada', alt: 'Cozinha planejada com armários em madeira clara', tipo: 'projeto-entregue' }
   ```

   - `tipo: 'render-3d'` coloca o selo “Projeto 3D” (use para imagens que são renderizações).
   - `ambiente` precisa ser um `id` de `src/data/ambientes.js`.
   - `hero: true` em um item usa a foto como fundo do desenho no topo da página.
   - Enquanto `arquivo` estiver vazio ou o arquivo não existir, aparece o placeholder.
3. Foto da equipe/oficina: `src/components/sobre.js` (`fotoSobre`).
4. Logo oficial: coloque o arquivo em `public/` e preencha `logo` em `site.config.js`.

## Publicar

**GitHub Pages (prévia atual):** rode `npm run deploy` — ele gera o build e publica na branch `gh-pages`, em `https://pedrodev-alvarenga.github.io/movelaria/`.

Para outras hospedagens, rode `npm run build` e publique a pasta `dist/`:

- **Netlify:** arraste a pasta `dist` em app.netlify.com/drop, ou conecte o repositório (build `npm run build`, pasta `dist`).
- **Vercel:** importe o repositório; o Vite é detectado sozinho.
- **Hospedagem comum (Hostinger etc.):** envie o conteúdo de `dist/` para a pasta `public_html`.

Depois de definir o domínio: preencha `dominio` em `site.config.js`, troque `[DOMÍNIO DO SITE]` em `public/sitemap.xml` e descomente a linha `Sitemap:` em `public/robots.txt`.

## Verificação (opcional)

Com o `npm run preview` rodando:

```bash
node scripts/testes.mjs pasta-de-saida      # testes de menu, galeria, formulário, links, teclado
node scripts/shots.mjs pasta-de-saida       # screenshots em 1280, 768 e 390px
node scripts/lighthouse.mjs saida.json      # Lighthouse mobile
node scripts/og-image.mjs                   # regenera public/og-image.png
```
