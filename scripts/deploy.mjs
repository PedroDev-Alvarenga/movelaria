// Publica o site no GitHub Pages (branch gh-pages). Uso: npm run deploy
import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const sh = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts })
const remoto = execSync('git remote get-url origin').toString().trim()
const [, dono, repo] = remoto.match(/github\.com[/:]([^/]+)\/([^/.]+)/)

sh('npm run build', {
  env: {
    ...process.env,
    MSYS_NO_PATHCONV: '1',
    BASE_PATH: `/${repo}/`,
    SITE_URL: `https://${dono.toLowerCase()}.github.io/${repo}`,
  },
})

writeFileSync('dist/.nojekyll', '')
const opts = { cwd: 'dist' }
sh('git init -q -b gh-pages', opts)
sh('git add -A', opts)
sh('git commit -q -m "Publicação do site"', opts)
sh(`git push -f -q ${remoto} gh-pages`, opts)
console.log(`\nPublicado: https://${dono.toLowerCase()}.github.io/${repo}/`)
