import { icones } from './icones.js'

// Cena 3D leve do hero: carrega um modelo de móvel pronto (CC BY 4.0, ver
// public/modelos/CREDITOS.txt) em vez de formas geométricas caseiras — fica
// muito mais bonito, mas é só ilustrativo: não é um móvel real da Movelaria.
// Carregada sob demanda (three.js + modelo só baixam quando o hero entra na
// tela) e pausada quando o hero sai da tela ou a aba fica em segundo plano.

let carregamento
function carregarThree() {
  if (!carregamento) {
    carregamento = Promise.all([
      import('three'),
      import('three/addons/controls/OrbitControls.js'),
      import('three/addons/loaders/GLTFLoader.js'),
      import('three/addons/environments/RoomEnvironment.js'),
    ]).then(([THREE, { OrbitControls }, { GLTFLoader }, { RoomEnvironment }]) => ({
      THREE,
      OrbitControls,
      GLTFLoader,
      RoomEnvironment,
    }))
  }
  return carregamento
}

// Carrega o .glb, centraliza no chão (y=0) e normaliza o tamanho pra caber
// bem no cartão do hero, não importa o tamanho real do modelo original.
async function carregarModelo(THREE, GLTFLoader) {
  const loader = new GLTFLoader()
  const url = `${import.meta.env.BASE_URL}modelos/armario/armario.gltf`
  const gltf = await loader.loadAsync(url)
  const modelo = gltf.scene

  const caixa = new THREE.Box3().setFromObject(modelo)
  const tamanho = new THREE.Vector3()
  const centro = new THREE.Vector3()
  caixa.getSize(tamanho)
  caixa.getCenter(centro)

  const escala = 3.1 / Math.max(tamanho.x, tamanho.y, tamanho.z)
  modelo.scale.setScalar(escala)
  modelo.position.set(-centro.x * escala, -caixa.min.y * escala, -centro.z * escala)

  modelo.traverse((filho) => {
    if (filho.isMesh) {
      filho.castShadow = true
      filho.receiveShadow = true
    }
  })

  return { modelo, alturaModelo: tamanho.y * escala }
}

// `container`: elemento vazio onde o canvas entra. Retorna sem fazer nada
// (o CSS mostra o desenho técnico como alternativa) se o three.js não
// carregar, o modelo não baixar ou o WebGL falhar.
export async function iniciarHero3D(container) {
  if (!container) return
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let THREE, OrbitControls, GLTFLoader, RoomEnvironment
  try {
    ;({ THREE, OrbitControls, GLTFLoader, RoomEnvironment } = await carregarThree())
  } catch {
    container.dataset.erro3d = ''
    return
  }
  if (!container.isConnected) return

  let modelo, alturaModelo
  try {
    ;({ modelo, alturaModelo } = await carregarModelo(THREE, GLTFLoader))
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
  const alvo = new THREE.Vector3(0, alturaModelo * 0.42, 0)
  const azimute = -0.5
  const polar = 1.25
  const raioFinal = 6.4
  const raioInicial = 8.8

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.domElement.setAttribute('aria-hidden', 'true')
  container.appendChild(renderer.domElement)

  // Ambiente procedural simples (sem baixar HDR externo) — dá reflexo e brilho
  // decentes ao veludo/metal do modelo em vez de ficar tudo fosco e chapado.
  const pmrem = new THREE.PMREMGenerator(renderer)
  cena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  pmrem.dispose()

  cena.add(modelo)
  cena.add(new THREE.HemisphereLight(0xfff3df, 0xcdbfa6, 0.5))

  const luzChave = new THREE.DirectionalLight(0xffb979, 1.3)
  luzChave.position.set(4, 4.5, 3)
  luzChave.castShadow = true
  luzChave.shadow.mapSize.set(1024, 1024)
  luzChave.shadow.camera.near = 1
  luzChave.shadow.camera.far = 12
  cena.add(luzChave)

  const luzPreenchimento = new THREE.DirectionalLight(0xdfe6f2, 0.4)
  luzPreenchimento.position.set(-4, 2, -2)
  cena.add(luzPreenchimento)

  // Piso só para receber a sombra de contato (invisível, sem material colorido)
  const piso = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), new THREE.ShadowMaterial({ opacity: 0.2 }))
  piso.rotation.x = -Math.PI / 2
  piso.receiveShadow = true
  cena.add(piso)

  camera.position.setFromSphericalCoords(reduzMovimento ? raioFinal : raioInicial, polar, azimute).add(alvo)
  camera.lookAt(alvo)

  const controles = new OrbitControls(camera, renderer.domElement)
  controles.target.copy(alvo)
  controles.enableZoom = false
  controles.enablePan = false
  controles.enableDamping = true
  controles.dampingFactor = 0.08
  controles.rotateSpeed = 0.5
  controles.minAzimuthAngle = azimute - 0.7
  controles.maxAzimuthAngle = azimute + 0.7
  controles.minPolarAngle = polar - 0.2
  controles.maxPolarAngle = polar + 0.2

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

    const visual = container.closest('.hero__visual')
    const legenda = visual?.querySelector('[data-legenda-hero]')
    if (legenda) {
      legenda.innerHTML = `
        <span class="hero__etapa hero__etapa--1">${icones.girar} Arraste</span>
        <span class="hero__seta" aria-hidden="true">→</span>
        <span class="hero__etapa hero__etapa--2">veja de outro ângulo</span>
      `
    }
    const credito = visual?.querySelector('[data-credito-hero]')
    if (credito) credito.hidden = false

    if (reduzMovimento) {
      renderizar()
      return
    }
    const t0 = performance.now()
    const duracao = 1100
    const passo = (agora) => {
      const p = Math.min(1, (agora - t0) / duracao)
      const suave = 1 - Math.pow(1 - p, 3)
      const raio = raioInicial + (raioFinal - raioInicial) * suave
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
