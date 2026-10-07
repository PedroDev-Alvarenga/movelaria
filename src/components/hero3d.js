import { icones } from './icones.js'
import { criarGuardaRoupa, criarQuarto } from './cenas3d.js'

// Carrossel 3D leve do hero: alterna entre um guarda-roupa planejado e um
// quarto completo, montados em código com texturas CC0 (ver cenas3d.js e
// public/modelos/CREDITOS.txt) a cada 2s — ilustrativo, não são móveis reais
// da Movelaria. Pausa ao passar o mouse ou arrastar, e com prefers-reduced-motion
// começa pausado (o usuário navega pelas bolinhas/botão). Carregado sob demanda
// e pausado quando o hero sai da tela ou a aba vai pra segundo plano.

const INTERVALO_MS = 2000

// Cada item pode ser um arquivo .glb/.gltf (`arquivo`) ou uma cena montada em
// código (`criar`). `camera` ajusta o ângulo de cada peça.
const CREDITO_TEXTURAS = 'texturas e planta: Poly Haven, CC0'
const ITENS = [
  {
    id: 'guarda-roupa',
    criar: criarGuardaRoupa,
    nome: 'guarda-roupa planejado',
    credito: `Peça 3D ilustrativa — guarda-roupa planejado; ${CREDITO_TEXTURAS}`,
    camera: { azimute: -0.45, polar: 1.32, raio: 6.3, alvo: 0.45 },
  },
  {
    id: 'quarto',
    criar: criarQuarto,
    nome: 'quarto completo',
    credito: `Ambiente 3D ilustrativo — quarto planejado; ${CREDITO_TEXTURAS}`,
    camera: { azimute: -0.6, polar: 1.02, raio: 6.9, alvo: 0.3, exposicao: 0.8 },
  },
]
const CAMERA_PADRAO = { azimute: -0.5, polar: 1.25, raio: 6.4, alvo: 0.42, exposicao: 1.05 }

let carregamento
function carregarThree() {
  if (!carregamento) {
    carregamento = Promise.all([
      import('three'),
      import('three/addons/controls/OrbitControls.js'),
      import('three/addons/loaders/GLTFLoader.js'),
      import('three/addons/environments/RoomEnvironment.js'),
      import('three/addons/geometries/RoundedBoxGeometry.js'),
      import('three/addons/utils/BufferGeometryUtils.js'),
    ]).then(([THREE, { OrbitControls }, { GLTFLoader }, { RoomEnvironment }, { RoundedBoxGeometry }, { mergeGeometries }]) => ({
      THREE,
      OrbitControls,
      GLTFLoader,
      RoomEnvironment,
      RoundedBoxGeometry,
      mergeGeometries,
    }))
  }
  return carregamento
}

// Carrega o .glb/.gltf (ou monta a cena em código), centraliza no chão (y=0)
// e normaliza o tamanho pra caber bem no cartão do hero.
async function carregarModelo(ctx, item) {
  const { THREE, GLTFLoader } = ctx
  let modelo
  if (item.criar) {
    modelo = await item.criar(ctx)
  } else {
    const gltf = await new GLTFLoader().loadAsync(`${import.meta.env.BASE_URL}${item.arquivo}`)
    modelo = gltf.scene
  }

  const caixa = new THREE.Box3().setFromObject(modelo)
  const tamanho = new THREE.Vector3()
  const centro = new THREE.Vector3()
  caixa.getSize(tamanho)
  caixa.getCenter(centro)

  const escala = 3.1 / Math.max(tamanho.x, tamanho.y, tamanho.z)
  modelo.scale.setScalar(escala)
  modelo.position.set(-centro.x * escala, -caixa.min.y * escala, -centro.z * escala)

  if (!item.criar) {
    modelo.traverse((filho) => {
      if (filho.isMesh) {
        filho.castShadow = true
        filho.receiveShadow = true
      }
    })
  }

  return { item, modelo, alturaModelo: tamanho.y * escala }
}

function criarControles(visual, itensCarregados) {
  const caixa = document.createElement('div')
  caixa.className = 'hero__carrossel-controles'
  caixa.setAttribute('role', 'group')
  caixa.setAttribute('aria-label', 'Controles do carrossel 3D')

  const botaoPausar = document.createElement('button')
  botaoPausar.type = 'button'
  botaoPausar.className = 'hero__carrossel-pausar'
  caixa.appendChild(botaoPausar)

  const pontos = document.createElement('div')
  pontos.className = 'hero__carrossel-pontos'
  const botoesPonto = itensCarregados.map(({ item }) => {
    const ponto = document.createElement('button')
    ponto.type = 'button'
    ponto.className = 'hero__carrossel-ponto'
    ponto.setAttribute('aria-label', `Ver ${item.nome}`)
    pontos.appendChild(ponto)
    return ponto
  })
  caixa.appendChild(pontos)

  visual.querySelector('[data-credito-hero]')?.insertAdjacentElement('afterend', caixa)
  return { botaoPausar, botoesPonto }
}

// `container`: elemento vazio onde o canvas entra. Retorna sem fazer nada
// (o CSS mostra o desenho técnico como alternativa) se o three.js não
// carregar, nenhum modelo baixar ou o WebGL falhar.
// WebGL emulado por software (sem placa de vídeo) deixa a cena 3D lentíssima
// e trava a página; nesses aparelhos fica o desenho técnico de reserva.
// `?3d=forcar` na URL pula a checagem (útil para testes).
function webglPorSoftware() {
  if (new URLSearchParams(location.search).get('3d') === 'forcar') return false
  try {
    const gl = document.createElement('canvas').getContext('webgl')
    if (!gl) return true
    const info = gl.getExtension('WEBGL_debug_renderer_info')
    const nome = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)
    gl.getExtension('WEBGL_lose_context')?.loseContext()
    return /swiftshader|llvmpipe|software|basic render/i.test(String(nome))
  } catch {
    return true
  }
}

export async function iniciarHero3D(container) {
  if (!container) return
  if (webglPorSoftware()) {
    container.dataset.erro3d = ''
    return
  }
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let ctx
  try {
    ctx = await carregarThree()
  } catch {
    container.dataset.erro3d = ''
    return
  }
  if (!container.isConnected) return
  const { THREE, OrbitControls, RoomEnvironment } = ctx

  const resultados = await Promise.allSettled(ITENS.map((item) => carregarModelo(ctx, item)))
  resultados.forEach((r) => r.status === 'rejected' && console.warn('Peça 3D não carregou:', r.reason))
  const itensCarregados = resultados.filter((r) => r.status === 'fulfilled').map((r) => r.value)
  if (itensCarregados.length === 0) {
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
  const alvo = new THREE.Vector3(0, 0, 0)
  let { azimute, polar, raio: raioFinal } = CAMERA_PADRAO
  let raioInicial = raioFinal + 2.4

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
  renderer.shadowMap.enabled = true
  // a luz e os móveis não se mexem: a sombra só é recalculada quando troca a peça
  renderer.shadowMap.autoUpdate = false
  renderer.shadowMap.needsUpdate = true
  renderer.shadowMap.type = THREE.PCFShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.domElement.setAttribute('aria-hidden', 'true')
  container.appendChild(renderer.domElement)

  // Ambiente procedural simples (sem baixar HDR externo) — dá reflexo e brilho
  // decentes aos materiais em vez de ficar tudo fosco e chapado.
  const pmrem = new THREE.PMREMGenerator(renderer)
  cena.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  pmrem.dispose()

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

  const controles = new OrbitControls(camera, renderer.domElement)
  controles.enableZoom = false
  controles.enablePan = false
  controles.enableDamping = true
  controles.dampingFactor = 0.08
  controles.rotateSpeed = 0.5
  const limitarControles = () => {
    controles.minAzimuthAngle = azimute - 0.7
    controles.maxAzimuthAngle = azimute + 0.7
    controles.minPolarAngle = polar - 0.2
    controles.maxPolarAngle = polar + 0.2
  }
  limitarControles()

  const ajustarTamanho = () => {
    const { clientWidth: w, clientHeight: h } = container
    if (!w || !h) return
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  ajustarTamanho()

  // compila os shaders das peças de uma vez, pra primeira troca não engasgar
  for (const { modelo } of itensCarregados) {
    cena.add(modelo)
    try {
      if (renderer.compileAsync && renderer.extensions.has('KHR_parallel_shader_compile')) {
        await renderer.compileAsync(cena, camera)
      } else {
        renderer.compile(cena, camera)
      }
    } catch {
      // se falhar, compila na hora de mostrar
    }
    cena.remove(modelo)
  }

  const renderizar = () => {
    controles.update()
    renderer.render(cena, camera)
  }

  // Só desenha quando algo muda (arraste, inércia do arraste, troca de peça),
  // em vez de redesenhar a cada quadro — poupa bateria e processador no celular.
  let visivel = false
  let quadro = null
  const loop = () => {
    quadro = null
    if (!visivel) return
    const mudou = controles.update()
    renderer.render(cena, camera)
    if (mudou) quadro = requestAnimationFrame(loop)
  }
  const iniciarLoop = () => {
    if (quadro === null && visivel) quadro = requestAnimationFrame(loop)
  }
  controles.addEventListener('change', iniciarLoop)

  // --- Troca de peça (câmera se afasta, troca o modelo, se aproxima de novo) ---
  let grupoAtual = null
  let indiceAtual = 0

  const posicionarCamera = (raio) => {
    camera.position.setFromSphericalCoords(raio, polar, azimute).add(alvo)
    camera.lookAt(alvo)
  }

  const mostrar = (indice, { animado }) => {
    const { modelo, alturaModelo, item } = itensCarregados[indice]
    if (grupoAtual) cena.remove(grupoAtual)
    grupoAtual = modelo
    cena.add(grupoAtual)
    renderer.shadowMap.needsUpdate = true
    const cam = { ...CAMERA_PADRAO, ...item.camera }
    ;({ azimute, polar } = cam)
    raioFinal = cam.raio
    raioInicial = cam.raio + 2.4
    limitarControles()
    renderer.toneMappingExposure = cam.exposicao
    alvo.set(0, alturaModelo * cam.alvo, 0)
    controles.target.copy(alvo)

    const visual = container.closest('.hero__visual')
    const credito = visual?.querySelector('[data-credito-hero]')
    if (credito) credito.textContent = item.credito

    botoesPonto.forEach((b, i) => b.setAttribute('aria-current', String(i === indice)))

    if (!animado || reduzMovimento) {
      posicionarCamera(raioFinal)
      renderizar()
      return
    }
    const t0 = performance.now()
    const duracao = 650
    const passo = (agora) => {
      const p = Math.min(1, (agora - t0) / duracao)
      const suave = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
      posicionarCamera(raioInicial + (raioFinal - raioInicial) * suave)
      renderizar()
      if (p < 1) requestAnimationFrame(passo)
    }
    requestAnimationFrame(passo)
  }

  // --- Avanço automático, pausável (hover, arrasto, botão, reduced-motion) ---
  let pausadoManual = reduzMovimento
  let emHover = false
  let emArraste = false
  let temporizador = null

  const estaPausado = () => pausadoManual || emHover || emArraste || itensCarregados.length < 2
  const pararTemporizador = () => {
    if (temporizador) {
      clearTimeout(temporizador)
      temporizador = null
    }
  }
  const agendarTemporizador = () => {
    pararTemporizador()
    if (estaPausado() || !visivel) return
    temporizador = setTimeout(() => {
      indiceAtual = (indiceAtual + 1) % itensCarregados.length
      mostrar(indiceAtual, { animado: true })
      agendarTemporizador()
    }, INTERVALO_MS)
  }
  const atualizarBotaoPausar = () => {
    botaoPausar.innerHTML = pausadoManual ? `${icones.tocar} Continuar` : `${icones.pausar} Pausar`
    botaoPausar.setAttribute('aria-pressed', String(pausadoManual))
  }

  const visual0 = container.closest('.hero__visual')
  const { botaoPausar, botoesPonto } =
    itensCarregados.length > 1 ? criarControles(visual0, itensCarregados) : { botaoPausar: null, botoesPonto: [] }

  if (botaoPausar) {
    atualizarBotaoPausar()
    botaoPausar.addEventListener('click', () => {
      pausadoManual = !pausadoManual
      atualizarBotaoPausar()
      if (pausadoManual) pararTemporizador()
      else agendarTemporizador()
    })
  }
  botoesPonto.forEach((ponto, i) => {
    ponto.addEventListener('click', () => {
      if (i === indiceAtual) return
      indiceAtual = i
      mostrar(indiceAtual, { animado: true })
      agendarTemporizador()
    })
  })

  container.addEventListener('pointerenter', () => {
    emHover = true
    pararTemporizador()
  })
  container.addEventListener('pointerleave', () => {
    emHover = false
    agendarTemporizador()
  })
  controles.addEventListener('start', () => {
    emArraste = true
    pararTemporizador()
  })
  controles.addEventListener('end', () => {
    emArraste = false
    agendarTemporizador()
  })

  // --- Entrada única (a mesma ideia do antigo desenho que se desenhava uma vez) ---
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

    posicionarCamera(reduzMovimento ? raioFinal : raioInicial)
    mostrar(0, { animado: !reduzMovimento })
    agendarTemporizador()
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        visivel = e.isIntersecting && !document.hidden
        if (visivel) {
          iniciarLoop()
          entrar()
          agendarTemporizador()
        } else {
          pararTemporizador()
        }
      })
    },
    { threshold: 0.15 },
  )
  observador.observe(container)

  document.addEventListener('visibilitychange', () => {
    visivel = !document.hidden && visivel
    if (visivel) {
      iniciarLoop()
      agendarTemporizador()
    } else {
      pararTemporizador()
    }
  })

  const ro = new ResizeObserver(() => {
    ajustarTamanho()
    renderizar()
  })
  ro.observe(container)
}
