// Cenas 3D do hero montadas em código: um guarda-roupa planejado e um quarto
// completo em corte (como uma maquete). Móvel planejado é, no fundo, caixas
// bem acabadas — o realismo vem das texturas (carvalho e relevo de linho da
// Poly Haven, CC0), da planta (Poly Haven, CC0) e da luz quente de LED.
// Medidas em metros; o carrossel normaliza a escala depois.

const BASE = import.meta.env.BASE_URL
const TAMANHO_TEXTURA_MADEIRA = 0.9 // quantos metros a textura de carvalho cobre

let recursos = null

export function carregarRecursos(ctx) {
  if (!recursos) recursos = montarRecursos(ctx)
  return recursos
}

async function montarRecursos({ THREE, GLTFLoader, RoundedBoxGeometry }) {
  const loader = new THREE.TextureLoader()
  const textura = async (nome, cor = true) => {
    const t = await loader.loadAsync(`${BASE}modelos/texturas/${nome}`)
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.anisotropy = 8
    if (cor) t.colorSpace = THREE.SRGBColorSpace
    return t
  }

  const [carvalho, linhoRelevo, planta] = await Promise.all([
    textura('carvalho.jpg'),
    textura('linho_nor.jpg', false),
    new GLTFLoader().loadAsync(`${BASE}modelos/planta/potted_plant_02.gltf`).then((g) => g.scene),
  ])

  // mesma imagem com repetição diferente para cada uso
  const repetir = (t, x, y = x) => {
    const c = t.clone()
    c.repeat.set(x, y)
    c.needsUpdate = true
    return c
  }

  // tecido: cor limpa + relevo da trama do linho (sem a cor da foto, que puxava pro azul)
  const tecido = (cor, rep, forca = 0.6) =>
    new THREE.MeshStandardMaterial({
      color: cor,
      normalMap: repetir(linhoRelevo, rep),
      normalScale: new THREE.Vector2(forca, forca),
      roughness: 0.95,
    })

  const M = {
    carvalho: new THREE.MeshStandardMaterial({ map: carvalho, roughness: 0.55 }),
    branco: new THREE.MeshStandardMaterial({ color: 0xf2eee7, roughness: 0.4 }),
    grafite: new THREE.MeshStandardMaterial({ color: 0x34373a, roughness: 0.75 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x1f2022, metalness: 0.8, roughness: 0.35 }),
    fresta: new THREE.MeshStandardMaterial({ color: 0x3a342d, roughness: 1 }),
    parede: new THREE.MeshStandardMaterial({ color: 0xe6ddcf, roughness: 0.95 }),
    corte: new THREE.MeshStandardMaterial({ color: 0xb9ab97, roughness: 1 }),
    piso: new THREE.MeshStandardMaterial({ color: 0xc9bfb0, roughness: 0.6 }),
    led: new THREE.MeshBasicMaterial({ color: 0xffe2a8, toneMapped: false }),
    lencol: tecido(0xf4f0e9, 3),
    edredom: tecido(0xe9e1d4, 3),
    caixaTecido: tecido(0xd9ccb7, 2),
    salvia: tecido(0x93a685, 2, 0.9),
    terracota: tecido(0xc47e58, 1.5, 0.9),
    tapete: tecido(0xbfae92, 8, 1),
    roupas: [0xf1ece4, 0x9dae8f, 0x2c3a66, 0xcdb59a, 0x8b9096, 0xc77f5a, 0xe4dccf].map((cor) => tecido(cor, 2)),
    livro1: new THREE.MeshStandardMaterial({ color: 0x2c3a66, roughness: 0.8 }),
    livro2: new THREE.MeshStandardMaterial({ color: 0xcdb59a, roughness: 0.8 }),
    cupula: new THREE.MeshStandardMaterial({
      color: 0xf6efe2,
      emissive: 0xffc98a,
      emissiveIntensity: 0.55,
      roughness: 0.9,
      side: THREE.DoubleSide,
    }),
  }
  M.carvalho.userData.madeira = true

  return { THREE, RoundedBoxGeometry, M, planta, luz: texturaLuz(THREE) }
}

// Degradê para simular a luz da fita de LED "lavando" a parede
function texturaLuz(THREE) {
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 128
  const x = c.getContext('2d')
  const vertical = x.createLinearGradient(0, 0, 0, 128)
  vertical.addColorStop(0, 'rgba(255,255,255,1)')
  vertical.addColorStop(0.3, 'rgba(255,255,255,0.45)')
  vertical.addColorStop(1, 'rgba(255,255,255,0)')
  x.fillStyle = vertical
  x.fillRect(0, 0, 128, 128)
  x.globalCompositeOperation = 'destination-in'
  const lados = x.createLinearGradient(0, 0, 128, 0)
  lados.addColorStop(0, 'rgba(0,0,0,0)')
  lados.addColorStop(0.1, 'rgba(0,0,0,1)')
  lados.addColorStop(0.9, 'rgba(0,0,0,1)')
  lados.addColorStop(1, 'rgba(0,0,0,0)')
  x.fillStyle = lados
  x.fillRect(0, 0, 128, 128)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// --- Ajudantes de montagem ---

let deslocamentoVeio = 0

function criarAjudantes(R, grupo) {
  const { THREE, RoundedBoxGeometry, M } = R

  // caixa com o veio da madeira em escala real em todas as faces
  const malhaCaixa = ([w, h, d], material) => {
    const geo = new THREE.BoxGeometry(w, h, d)
    if (!Array.isArray(material) && material.userData.madeira) {
      const uv = geo.attributes.uv
      // ordem das faces na BoxGeometry: +x, -x, +y, -y, +z, -z
      const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]]
      const desloc = (deslocamentoVeio++ * 0.37) % 1
      for (let f = 0; f < 6; f++) {
        for (let k = 0; k < 4; k++) {
          const i = f * 4 + k
          uv.setXY(
            i,
            (uv.getX(i) * dims[f][0]) / TAMANHO_TEXTURA_MADEIRA + desloc,
            (uv.getY(i) * dims[f][1]) / TAMANHO_TEXTURA_MADEIRA,
          )
        }
      }
    }
    const malha = new THREE.Mesh(geo, material)
    malha.castShadow = true
    malha.receiveShadow = true
    return malha
  }

  // posiciona pela base: x/z no centro da peça, y = face de baixo
  const bloco = (dims, material, x, y, z, pai = grupo) => {
    const malha = malhaCaixa(dims, material)
    malha.position.set(x, y + dims[1] / 2, z)
    pai.add(malha)
    return malha
  }

  // peças macias (colchão, almofadas, roupas) com cantos arredondados
  const macio = ([w, h, d], material, x, y, z, raio = 0.03, pai = grupo) => {
    const malha = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(raio, h / 2, w / 2, d / 2)), material)
    malha.castShadow = true
    malha.receiveShadow = true
    malha.position.set(x, y + h / 2, z)
    pai.add(malha)
    return malha
  }

  // luz da fita de LED na parede; `paraCima` = mais forte embaixo
  const lavagem = (w, h, x, yCentro, z, intensidade = 0.6, paraCima = false, rotY = 0) => {
    const mat = new THREE.MeshBasicMaterial({
      map: R.luz,
      color: new THREE.Color(0xffa94d).multiplyScalar(intensidade),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    })
    const plano = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
    plano.position.set(x, yCentro, z)
    plano.rotation.set(0, rotY, paraCima ? Math.PI : 0)
    grupo.add(plano)
    return plano
  }

  // planta da Poly Haven, redimensionada para a altura pedida
  const planta = (altura, x, z, y = 0) => {
    const p = R.planta.clone(true)
    const caixa = new THREE.Box3().setFromObject(p)
    const tam = caixa.getSize(new THREE.Vector3())
    const escala = altura / tam.y
    p.scale.setScalar(escala)
    const centro = caixa.getCenter(new THREE.Vector3())
    p.position.set(x - centro.x * escala, y - caixa.min.y * escala, z - centro.z * escala)
    p.traverse((f) => {
      if (f.isMesh) {
        f.castShadow = true
        f.receiveShadow = true
      }
    })
    grupo.add(p)
    return p
  }

  // porta ripada: base escura com ripas de carvalho, como a fachada da loja
  const ripado = (largura, altura, xCentro, y, zFrente, larguraRipa = 0.045, passo = 0.07) => {
    bloco([largura, altura, 0.018], M.grafite, xCentro, y, zFrente - 0.029)
    const n = Math.max(1, Math.round(largura / passo))
    const passoReal = largura / n
    for (let i = 0; i < n; i++) {
      const x = xCentro - largura / 2 + passoReal * (i + 0.5)
      bloco([larguraRipa, altura, 0.02], M.carvalho, x, y, zFrente - 0.01)
    }
  }

  return { bloco, macio, lavagem, planta, ripado, malhaCaixa }
}

// --- Guarda-roupa planejado ---

export async function criarGuardaRoupa(ctx) {
  const R = await carregarRecursos(ctx)
  const { THREE, M } = R
  const grupo = new THREE.Group()
  const { bloco, macio, lavagem, planta, ripado } = criarAjudantes(R, grupo)

  const W = 2.4
  const H = 2.5
  const D = 0.6
  const t = 0.02
  const rodape = 0.08
  const corpo = H - rodape
  const frente = D / 2

  // rodapé recuado + caixaria em carvalho
  bloco([W - 0.06, rodape, D - 0.08], M.grafite, 0, 0, -0.02)
  bloco([t, corpo, D], M.carvalho, -W / 2 + t / 2, rodape, 0)
  bloco([t, corpo, D], M.carvalho, W / 2 - t / 2, rodape, 0)
  bloco([W, t, D], M.carvalho, 0, H - t, 0)
  bloco([W, t, D], M.carvalho, 0, rodape, 0)
  bloco([t, corpo - 2 * t, D - 0.02], M.carvalho, -0.4, rodape + t, -0.01)
  bloco([t, corpo - 2 * t, D - 0.02], M.carvalho, 0.4, rodape + t, -0.01)
  bloco([W - 2 * t, corpo - 2 * t, 0.012], M.carvalho, 0, rodape + t, -frente + 0.006)

  // módulo da esquerda: porta ripada
  ripado(0.796, corpo - 0.004, -0.8, rodape + 0.002, frente + 0.04)

  // módulo da direita: porta branca com puxador perfil
  bloco([0.796, corpo - 0.004, 0.02], M.branco, 0.8, rodape + 0.002, frente + 0.011)
  bloco([0.014, 1.2, 0.025], M.metal, 0.44, 0.7, frente + 0.034)

  // módulo do meio aberto: prateleira com LED, cabideiro com roupas, gavetas
  const larguraInterna = 0.8 - t
  bloco([larguraInterna, 0.025, D - 0.04], M.carvalho, 0, 1.95, -0.01)
  bloco([0.74, 0.008, 0.014], M.led, 0, 1.94, frente - 0.07)
  lavagem(0.76, 1.0, 0, 1.94 - 0.5, -frente + 0.014, 0.45)
  macio([0.32, 0.22, 0.42], M.caixaTecido, -0.18, 1.975, -0.02, 0.025)
  macio([0.32, 0.22, 0.42], M.caixaTecido, 0.18, 1.975, -0.02, 0.025)

  const cabideiro = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.76, 16), M.metal)
  cabideiro.rotation.z = Math.PI / 2
  cabideiro.position.set(0, 1.86, 0)
  grupo.add(cabideiro)

  const comprimentos = [0.95, 0.8, 1.0, 0.75, 0.9, 1.0, 0.85]
  comprimentos.forEach((comp, i) => {
    const x = -0.3 + i * 0.1
    const roupa = macio([0.035, comp, 0.44], M.roupas[i], x, 1.84 - comp, 0, 0.015)
    roupa.rotation.y = ((i % 3) - 1) * 0.06
  })

  bloco([larguraInterna, 0.025, D - 0.04], M.carvalho, 0, 0.6, -0.01)
  for (let i = 0; i < 2; i++) {
    const y = rodape + t + 0.003 + i * 0.25
    bloco([0.776, 0.236, 0.02], M.branco, 0, y, frente + 0.011)
    bloco([0.3, 0.012, 0.006], M.metal, 0, y + 0.19, frente + 0.024)
  }

  // planta ao lado, como nas fotos do feed
  planta(1.0, 1.62, 0.05)

  return grupo
}

// --- Quarto completo em corte ---

export async function criarQuarto(ctx) {
  const R = await carregarRecursos(ctx)
  const { THREE, M } = R
  const grupo = new THREE.Group()
  const { bloco, macio, lavagem, planta, ripado, malhaCaixa } = criarAjudantes(R, grupo)

  const LX = 4.0
  const LZ = 3.4
  const HP = 2.7
  const E = 0.1
  const fundo = -LZ / 2 // face interna da parede do fundo
  const direita = LX / 2 // face interna da parede da direita

  // laje do piso e paredes cortadas (faces do corte num tom mais escuro)
  const laje = malhaCaixa([LX + E, 0.06, LZ + E], [M.corte, M.corte, M.piso, M.corte, M.corte, M.corte])
  laje.position.set(E / 2, -0.03, -E / 2)
  grupo.add(laje)

  const paredeFundo = malhaCaixa([LX + E, HP, E], [M.parede, M.parede, M.corte, M.parede, M.parede, M.parede])
  paredeFundo.position.set(E / 2, HP / 2, fundo - E / 2)
  paredeFundo.castShadow = false
  grupo.add(paredeFundo)

  const paredeDireita = malhaCaixa([E, HP, LZ], [M.parede, M.parede, M.corte, M.parede, M.parede, M.parede])
  paredeDireita.position.set(direita + E / 2, HP / 2, 0)
  paredeDireita.castShadow = false
  grupo.add(paredeDireita)

  // tapete
  macio([2.5, 0.015, 1.9], M.tapete, -0.35, 0, 0.0, 0.006)

  // painel ripado de cabeceira com LED em cima
  const xCama = -0.35
  ripado(3.1, 1.2, xCama, 0, fundo + 0.04)
  bloco([3.0, 0.01, 0.015], M.led, xCama, 1.2, fundo + 0.03)
  lavagem(3.0, 0.5, xCama, 1.2 + 0.25, fundo + 0.004, 0.3, true)

  // armários suspensos brancos com LED embaixo
  bloco([3.1, 0.5, 0.36], M.branco, xCama, 1.98, fundo + 0.18)
  for (let k = 1; k < 4; k++) {
    bloco([0.004, 0.5, 0.004], M.fresta, xCama - 1.55 + 0.775 * k, 1.98, fundo + 0.362)
  }
  bloco([3.0, 0.008, 0.014], M.led, xCama, 1.972, fundo + 0.33)
  lavagem(3.0, 0.6, xCama, 1.97 - 0.3, fundo + 0.005, 0.32)

  // cama de casal
  const zCama = fundo + 0.04 + 1.05
  bloco([1.5, 0.08, 1.95], M.grafite, xCama, 0, zCama)
  bloco([1.7, 0.26, 2.1], M.carvalho, xCama, 0.08, zCama)
  macio([1.62, 0.22, 2.02], M.lencol, xCama, 0.34, zCama, 0.05)

  const zEdredom = zCama + 1.05 - 0.75
  macio([1.74, 0.05, 1.5], M.edredom, xCama, 0.545, zEdredom, 0.02)
  macio([0.03, 0.22, 1.5], M.edredom, xCama - 0.87, 0.35, zEdredom, 0.012)
  macio([0.03, 0.22, 1.5], M.edredom, xCama + 0.87, 0.35, zEdredom, 0.012)
  macio([1.74, 0.22, 0.03], M.edredom, xCama, 0.35, zCama + 1.065, 0.012)

  const zManta = zCama + 1.05 - 0.26
  macio([1.8, 0.04, 0.42], M.salvia, xCama, 0.585, zManta, 0.018)
  macio([0.03, 0.2, 0.42], M.salvia, xCama - 0.9, 0.4, zManta, 0.012)
  macio([0.03, 0.2, 0.42], M.salvia, xCama + 0.9, 0.4, zManta, 0.012)

  const zTravesseiro = zCama - 1.05 + 0.24
  for (const lado of [-1, 1]) {
    const t = macio([0.66, 0.17, 0.44], M.lencol, xCama + lado * 0.39, 0.56, zTravesseiro, 0.08)
    t.rotation.x = -0.45
    t.position.y += 0.05
  }
  const almofada1 = macio([0.46, 0.15, 0.34], M.salvia, xCama - 0.2, 0.6, zTravesseiro + 0.2, 0.07)
  almofada1.rotation.set(-0.3, 0.05, 0)
  const almofada2 = macio([0.42, 0.14, 0.32], M.terracota, xCama + 0.24, 0.6, zTravesseiro + 0.21, 0.07)
  almofada2.rotation.set(-0.3, -0.06, 0.05)

  // criados-mudos suspensos com LED embaixo
  const zCriado = fundo + 0.06 + 0.2
  for (const x of [xCama - 1.16, xCama + 1.16]) {
    bloco([0.5, 0.2, 0.4], M.carvalho, x, 0.42, zCriado)
    bloco([0.46, 0.004, 0.003], M.fresta, x, 0.52, zCriado + 0.201)
    bloco([0.44, 0.006, 0.01], M.led, x, 0.414, zCriado + 0.15)
  }

  // luminária de mesa (esquerda) com luz quente de verdade
  const xLuminaria = xCama - 1.22
  const zLuminaria = zCriado - 0.02
  const pe = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.015, 24), M.metal)
  pe.position.set(xLuminaria, 0.6275, zLuminaria)
  const haste = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.28, 8), M.metal)
  haste.position.set(xLuminaria, 0.62 + 0.14, zLuminaria)
  const cupula = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.16, 32, 1, true), M.cupula)
  cupula.position.set(xLuminaria, 0.9, zLuminaria)
  grupo.add(pe, haste, cupula)
  const luzLuminaria = new THREE.PointLight(0xffc68a, 0.9, 3, 2)
  luzLuminaria.position.set(xLuminaria, 0.86, zLuminaria + 0.05)
  grupo.add(luzLuminaria)

  // livros e planta pequena no criado-mudo da direita
  const xDireita = xCama + 1.16
  bloco([0.22, 0.03, 0.16], M.livro1, xDireita - 0.1, 0.62, zCriado + 0.02)
  bloco([0.2, 0.025, 0.15], M.livro2, xDireita - 0.1, 0.65, zCriado + 0.02)
  planta(0.32, xDireita + 0.12, zCriado - 0.02, 0.62)

  // guarda-roupa embutido na parede da direita
  const xGuarda = direita - 0.3
  const zGuarda = fundo + 1.2
  bloco([0.54, 0.08, 2.34], M.grafite, xGuarda + 0.02, 0, zGuarda)
  bloco([0.6, 2.44, 2.4], M.branco, xGuarda, 0.08, zGuarda)
  const materiaisPortas = [M.branco, M.carvalho, M.carvalho, M.branco]
  materiaisPortas.forEach((mat, i) => {
    const z = zGuarda - 1.2 + 0.3 + i * 0.6
    bloco([0.02, 2.436, 0.596], mat, xGuarda - 0.31, 0.082, z)
    const zPuxador = i < 2 ? z + 0.26 : z - 0.26
    bloco([0.025, 1.0, 0.014], M.metal, xGuarda - 0.333, 0.85, zPuxador)
  })

  // planta grande no canto da frente
  planta(1.1, 1.62, 1.2)

  return grupo
}
