import { icones } from './icones.js'

// Cena 3D leve e estilizada da "cozinha" do hero: formas geométricas simples
// (nada de modelo realista — a marca não tem fotos em alta nem modelo 3D dos
// móveis reais), com luz quente de fim de tarde e rotação discreta ao arrastar.
// Carregada sob demanda (o three.js só baixa quando o hero entra na tela) e
// pausada quando o hero sai da tela ou a aba fica em segundo plano.

const CORES = {
  madeira: 0xc79a62,
  madeiraClara: 0xe3c79f,
  salvia: 0x9dae8f,
  grafite: 0x3a3d40,
  creme: 0xf4efe6,
  led: 0xffd58a,
  terracota: 0xc1693f,
  folha: 0x6f8a63,
}

let carregamento
function carregarThree() {
  if (!carregamento) {
    carregamento = Promise.all([import('three'), import('three/addons/controls/OrbitControls.js')]).then(
      ([THREE, { OrbitControls }]) => ({ THREE, OrbitControls }),
    )
  }
  return carregamento
}

function construirCozinha(THREE) {
  const grupo = new THREE.Group()

  const matMadeira = new THREE.MeshStandardMaterial({ color: CORES.madeiraClara, roughness: 0.75 })
  const matNicho = new THREE.MeshStandardMaterial({ color: CORES.creme, roughness: 0.4 })
  const matSalvia = new THREE.MeshStandardMaterial({ color: CORES.salvia, roughness: 0.7 })
  const matGrafite = new THREE.MeshStandardMaterial({ color: CORES.grafite, roughness: 0.5, metalness: 0.15 })
  const matLed = new THREE.MeshStandardMaterial({ color: CORES.led, emissive: CORES.led, emissiveIntensity: 1.1 })
  const matTerracota = new THREE.MeshStandardMaterial({ color: CORES.terracota, roughness: 0.8 })
  const matFolha = new THREE.MeshStandardMaterial({ color: CORES.folha, roughness: 0.6 })

  const comSombra = (malha) => {
    malha.castShadow = true
    malha.receiveShadow = true
    return malha
  }

  // Armários superiores (4 módulos, um deles é o nicho com a planta)
  const larguras = [1.3, 1.3, 1.3, 1.3]
  let x = -2.6
  larguras.forEach((l, i) => {
    const caixa = comSombra(new THREE.Mesh(new THREE.BoxGeometry(l - 0.06, 1.05, 0.58), i === 2 ? matNicho : matMadeira))
    caixa.position.set(x + l / 2, 1.35, 0)
    grupo.add(caixa)
    x += l
  })

  // Fita de LED sob os armários + luz pontual quente
  const led = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.04, 0.5), matLed)
  led.position.set(0, 0.8, 0.02)
  grupo.add(led)
  const luzLed = new THREE.PointLight(CORES.led, 1.1, 2.6, 2)
  luzLed.position.set(0, 0.74, 0.5)
  grupo.add(luzLed)

  // Bancada
  const bancada = comSombra(new THREE.Mesh(new THREE.BoxGeometry(5.3, 0.12, 0.68), matNicho))
  bancada.position.y = 0.56
  grupo.add(bancada)

  // Armários inferiores (sálvia) + "forno" (grafite)
  const inferior = comSombra(new THREE.Mesh(new THREE.BoxGeometry(3.75, 1.05, 0.6), matSalvia))
  inferior.position.set(-0.75, -0.02, 0)
  grupo.add(inferior)

  const forno = comSombra(new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.05, 0.6), matGrafite))
  forno.position.set(2.15, -0.02, 0)
  grupo.add(forno)

  // Rodapé
  const rodape = new THREE.Mesh(new THREE.BoxGeometry(5.3, 0.08, 0.68), matGrafite)
  rodape.position.set(0, -0.58, 0)
  grupo.add(rodape)

  // Planta decorativa estilizada (vaso terracota + folhas em cone)
  const vaso = comSombra(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.22, 10), matTerracota))
  vaso.position.set(-1.95, 0.75, 0.38)
  grupo.add(vaso)
  ;[-1, 0, 1].forEach((i) => {
    const folha = comSombra(new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.4, 6), matFolha))
    folha.position.set(-1.95 + i * 0.07, 1.0 + Math.abs(i) * 0.02, 0.38)
    folha.rotation.z = i * 0.4
    grupo.add(folha)
  })

  // Piso só para receber a sombra de contato (invisível, sem material colorido)
  const piso = new THREE.Mesh(new THREE.PlaneGeometry(9, 6), new THREE.ShadowMaterial({ opacity: 0.18 }))
  piso.rotation.x = -Math.PI / 2
  piso.position.y = -1.12
  piso.receiveShadow = true
  grupo.add(piso)

  // Reduz tudo um pouco para caber com folga no enquadramento do cartão.
  grupo.scale.setScalar(0.85)

  return grupo
}

// `container`: elemento vazio onde o canvas entra. Retorna sem fazer nada
// (o CSS mostra um placeholder) se o three.js não carregar ou o WebGL falhar.
export async function iniciarHero3D(container) {
  if (!container) return
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let THREE, OrbitControls
  try {
    ;({ THREE, OrbitControls } = await carregarThree())
  } catch {
    container.dataset.erro3d = ''
    return
  }
  if (!container.isConnected) return

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' })
  } catch {
    container.dataset.erro3d = ''
    return
  }

  const cena = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30)
  const alvo = new THREE.Vector3(0, 0.1, 0)
  const azimute = -0.5
  const polar = 1.22
  const raioFinal = 7.8

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.domElement.setAttribute('aria-hidden', 'true')
  container.appendChild(renderer.domElement)

  cena.add(construirCozinha(THREE))
  cena.add(new THREE.HemisphereLight(0xfff3df, 0xcdbfa6, 0.65))

  const luzChave = new THREE.DirectionalLight(0xffb979, 1.15)
  luzChave.position.set(4, 4.5, 3)
  luzChave.castShadow = true
  luzChave.shadow.mapSize.set(1024, 1024)
  luzChave.shadow.camera.near = 1
  luzChave.shadow.camera.far = 12
  cena.add(luzChave)

  const luzPreenchimento = new THREE.DirectionalLight(0xdfe6f2, 0.35)
  luzPreenchimento.position.set(-4, 2, -2)
  cena.add(luzPreenchimento)

  camera.position.setFromSphericalCoords(reduzMovimento ? raioFinal : 10.6, polar, azimute).add(alvo)
  camera.lookAt(alvo)

  const controles = new OrbitControls(camera, renderer.domElement)
  controles.target.copy(alvo)
  controles.enableZoom = false
  controles.enablePan = false
  controles.enableDamping = true
  controles.dampingFactor = 0.08
  controles.rotateSpeed = 0.5
  controles.minAzimuthAngle = azimute - 0.6
  controles.maxAzimuthAngle = azimute + 0.6
  controles.minPolarAngle = polar - 0.18
  controles.maxPolarAngle = polar + 0.18

  const ajustarTamanho = () => {
    const { clientWidth: w, clientHeight: h } = container
    if (!w || !h) return
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  ajustarTamanho()

  const renderizar = () => {
    controles.update()
    renderer.render(cena, camera)
  }

  let visivel = false
  let quadro = null
  const loop = () => {
    if (!visivel) {
      quadro = null
      return
    }
    renderizar()
    quadro = requestAnimationFrame(loop)
  }
  const iniciarLoop = () => {
    if (quadro === null) quadro = requestAnimationFrame(loop)
  }

  // Animação de entrada única (câmera se aproxima) — a mesma ideia do antigo
  // desenho que se desenhava uma vez. Pula direto com prefers-reduced-motion.
  let entrou = false
  const entrar = () => {
    if (entrou) return
    entrou = true
    container.classList.add('hero__3d--pronto')

    const legenda = container.closest('.hero__visual')?.querySelector('[data-legenda-hero]')
    if (legenda) {
      legenda.innerHTML = `
        <span class="hero__etapa hero__etapa--1">${icones.girar} Arraste</span>
        <span class="hero__seta" aria-hidden="true">→</span>
        <span class="hero__etapa hero__etapa--2">veja de outro ângulo</span>
      `
    }

    if (reduzMovimento) {
      renderizar()
      return
    }
    const t0 = performance.now()
    const duracao = 1100
    const passo = (agora) => {
      const p = Math.min(1, (agora - t0) / duracao)
      const suave = 1 - Math.pow(1 - p, 3)
      const raio = 10.6 + (raioFinal - 10.6) * suave
      camera.position.setFromSphericalCoords(raio, polar, azimute).add(alvo)
      camera.lookAt(alvo)
      renderizar()
      if (p < 1) requestAnimationFrame(passo)
    }
    requestAnimationFrame(passo)
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        visivel = e.isIntersecting && !document.hidden
        if (visivel) {
          iniciarLoop()
          entrar()
        }
      })
    },
    { threshold: 0.15 },
  )
  observador.observe(container)

  document.addEventListener('visibilitychange', () => {
    visivel = !document.hidden && visivel
    if (visivel) iniciarLoop()
  })

  const ro = new ResizeObserver(() => {
    ajustarTamanho()
    renderizar()
  })
  ro.observe(container)
}
