const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrbitControls-Dh36RsEH.js","assets/three.module-4gI5Z-_B.js","assets/GLTFLoader-BBhx59Qd.js","assets/BufferGeometryUtils-C2Q5reFp.js","assets/RoomEnvironment-C4vpWHws.js","assets/RoundedBoxGeometry-DzM01JMs.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nome:`Movelaria`,nomeInstagram:`Movelaria | Móveis Planejados`,bio:`Móveis planejados, mesas e estofados sob medida.`,bioAnos:`Há 25 anos transformando sonhos em realidade`,anos:25,logo:``,dominio:`[DOMÍNIO DO SITE]`,telefoneExibicao:`(51) 3055-1625`,telefoneLink:`tel:+555130551625`,whatsappNumero:`555130551625`,horario:`[HORÁRIO COMPLETO]`,horarioObservacao:`No Google consta: abre sex. às 09:00.`,cnpj:`[CNPJ]`,fazEntrega:!0,endereco:{rua:`Av. Ismael Chaves Barcelos, 99`,bairro:`Centro`,cidade:`Guaíba`,uf:`RS`,cep:`92704-720`},instagram:{usuario:`@movelaria_rodrigo`,url:`https://www.instagram.com/movelaria_rodrigo/`,seguidores:`1.276`},threads:{usuario:`@movelaria_rodrigo`,url:`https://www.threads.net/@movelaria_rodrigo`},proprietario:`[INSTAGRAM DO RODRIGO: confirmar]`,google:{nota:`4,9`,notaNumero:4.9,totalAvaliacoes:8}},t=`${e.endereco.rua}, ${e.endereco.bairro}, ${e.endereco.cidade} — ${e.endereco.uf}, CEP ${e.endereco.cep}`,n=encodeURIComponent(`${e.endereco.rua}, ${e.endereco.bairro}, ${e.endereco.cidade} - ${e.endereco.uf}, ${e.endereco.cep}`),r=`https://www.google.com/maps/search/?api=1&query=${n}`,i=`https://www.google.com/maps?q=${n}&output=embed`,a=`Olá! Vim pelo site da Movelaria e gostaria de pedir um orçamento.`;function o(t=a){return`https://wa.me/${e.whatsappNumero}?text=${encodeURIComponent(t)}`}function s(e){return`Olá! Vim pelo site da Movelaria e gostaria de um orçamento para ${e}.`}var c=(e,t=``)=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" ${t}>${e}</svg>`,l={whatsapp:`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></svg>`,telefone:c(`<path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 5.3 5.3l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/>`),local:c(`<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>`),relogio:c(`<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`),entrega:c(`<path d="M3 6h11v10H3zM14 9.5h4l3 3.5v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>`),instagram:c(`<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/>`),seta:c(`<path d="M5 12h14M13 6l6 6-6 6"/>`),setaEsq:c(`<path d="M19 12H5M11 6l-6 6 6 6"/>`),fechar:c(`<path d="M6 6l12 12M18 6 6 18"/>`),menu:c(`<path d="M4 7h16M4 12h16M4 17h16"/>`),mais:c(`<path d="M12 5v14M5 12h14"/>`),estrela:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>`,mapa:c(`<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>`),aspas:`<svg viewBox="0 0 48 48" width="40" height="40" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20 12c-6.6 2.2-11 8-11 15v9h12V24h-6c0-4.2 2.5-7.6 6.4-9.1zm19 0c-6.6 2.2-11 8-11 15v9h12V24h-6c0-4.2 2.5-7.6 6.4-9.1z"/></svg>`,cozinha:c(`<rect x="3" y="3.5" width="18" height="6" rx="1"/><path d="M3 13h18v7.5H3zM12 13v7.5M9.5 6.5h-2M16.5 6.5h-2M3 13l1-1h16l1 1"/>`),closet:c(`<rect x="3.5" y="3" width="17" height="18" rx="1.2"/><path d="M12 3v18M7 7.5h2M15 7.5h2M6.5 11h3v6.5M14.5 11h3"/>`),quarto:c(`<path d="M3 18.5V8M21 18.5v-5.5H3M3 15.5h18M6 13v-2.5h4.5V13"/>`),office:c(`<rect x="5.5" y="4" width="13" height="8.5" rx="1"/><path d="M3 15.5h18M5 15.5v4.5M19 15.5v4.5M10 12.5v3M14 12.5v3"/>`),sala:c(`<rect x="3" y="3.5" width="18" height="11" rx="1"/><rect x="7.5" y="6" width="9" height="5.5" rx=".5"/><path d="M3 18h18v2.5H3z"/>`),banheiro:c(`<rect x="7" y="3" width="10" height="7" rx="3.5"/><path d="M4 13h16v7H4zM12 13v7M8.5 16.5h1M14.5 16.5h1"/>`),jantar:c(`<path d="M3 10.5h18M5 10.5V20M19 10.5V20M8.5 6.5h7M12 3.5v3"/><path d="M3 15h4M17 15h4"/>`),mesa:c(`<path d="M2.5 9h19M5 9l-1.5 11M19 9l1.5 11M7.5 9v6.5h9V9"/>`),estofado:c(`<path d="M5 10V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5V10"/><path d="M3 11.5a2 2 0 0 1 4 0V14h10v-2.5a2 2 0 0 1 4 0V18H3zM5 18v2M19 18v2"/>`),girar:c(`<path d="M20 11A8 8 0 1 0 17.5 17.2"/><path d="M20 5.5V11h-5.5"/>`),pausar:`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>`,tocar:`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M7.5 5.2v13.6a1 1 0 0 0 1.53.85l11-6.8a1 1 0 0 0 0-1.7l-11-6.8a1 1 0 0 0-1.53.85Z"/></svg>`},u=[{href:`#ambientes`,texto:`Ambientes`},{href:`#projetos`,texto:`Projetos`},{href:`#como-funciona`,texto:`Como Funciona`},{href:`#sobre`,texto:`Sobre`},{href:`#contato`,texto:`Contato`}];function d(t=``){return e.logo?`<img class="marca__logo ${t}" src="/movelaria/${e.logo}" alt="${e.nome}" width="180" height="44">`:`<span class="marca__texto ${t}">MOVELARIA</span>`}function f(){return`
    <header class="header" data-header>
      <div class="header__barra container">
        <a class="marca" href="#inicio" aria-label="${e.nome} — início">${d()}</a>

        <nav class="nav" aria-label="Principal">
          <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="menu-principal" data-menu-toggle>
            <span class="nav__toggle-icone nav__toggle-icone--abrir">${l.menu}</span>
            <span class="nav__toggle-icone nav__toggle-icone--fechar">${l.fechar}</span>
            <span class="sr-only" data-menu-rotulo>Abrir menu</span>
          </button>
          <div class="nav__painel" id="menu-principal" data-menu>
            <ul class="nav__lista">
              ${u.map(e=>`<li><a class="nav__link" href="${e.href}">${e.texto}</a></li>`).join(``)}
            </ul>
            <a class="botao botao--primario nav__cta-mobile" href="${o()}" target="_blank" rel="noopener">
              ${l.whatsapp} Pedir orçamento
            </a>
          </div>
        </nav>

        <a class="botao botao--claro header__cta" href="${o()}" target="_blank" rel="noopener">
          ${l.whatsapp} Pedir orçamento
        </a>
      </div>
    </header>`}function p(){let e=document.querySelector(`[data-header]`),t=e.querySelector(`[data-menu-toggle]`),n=e.querySelector(`[data-menu]`),r=e.querySelector(`[data-menu-rotulo]`),i=window.matchMedia(`(max-width: 899px)`),a=()=>{let e=t.getAttribute(`aria-expanded`)===`true`;n.inert=i.matches&&!e},o=()=>{t.setAttribute(`aria-expanded`,`true`),r.textContent=`Fechar menu`,e.classList.add(`header--menu-aberto`),document.body.classList.add(`menu-aberto`),a(),requestAnimationFrame(()=>n.querySelector(`a`).focus())},s=(n=!0)=>{t.getAttribute(`aria-expanded`)===`true`&&(t.setAttribute(`aria-expanded`,`false`),r.textContent=`Abrir menu`,e.classList.remove(`header--menu-aberto`),document.body.classList.remove(`menu-aberto`),a(),n&&t.focus())};t.addEventListener(`click`,()=>{t.getAttribute(`aria-expanded`)===`true`?s():o()}),n.addEventListener(`click`,e=>{e.target.closest(`a`)&&s(!1)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&s()}),e.addEventListener(`keydown`,e=>{if(e.key!==`Tab`||t.getAttribute(`aria-expanded`)!==`true`)return;let r=[t,...n.querySelectorAll(`a`)],i=r[0],a=r[r.length-1];e.shiftKey&&document.activeElement===i?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),i.focus())}),i.addEventListener(`change`,()=>{s(!1),a()}),a();let c=()=>e.classList.toggle(`header--rolado`,window.scrollY>8);window.addEventListener(`scroll`,c,{passive:!0}),c()}var m=[{arquivo:`cozinha-bancada-led.jpg`,ambiente:`cozinha`,titulo:`Cozinha com bancada`,alt:`Cozinha planejada com bancada de granito preto, armários em madeira clara e fita de LED embutida`,tipo:`render-3d`,largura:1080,altura:1080},{arquivo:`closet-iluminado.jpg`,ambiente:`closet`,titulo:`Closet com iluminação`,alt:`Closet planejado em tons claros, com cabideiros, gavetas, prateleiras de calçados e fita de LED embutida`,tipo:`render-3d`,largura:1080,altura:1350},{arquivo:`quarto-home-office.jpg`,ambiente:`quarto`,titulo:`Quarto com home office`,alt:`Quarto planejado com armários suspensos, painel de madeira clara com LED e bancada de estudo integrada à cama`,tipo:`render-3d`,largura:1080,altura:1350},{arquivo:``,ambiente:`cozinha`,titulo:`Cozinha em madeira clara`,alt:`Cozinha planejada com armários brancos e em madeira clara, nicho com iluminação e bancada escura`,tipo:`render-3d`,largura:244,altura:296},{arquivo:``,ambiente:`sala`,titulo:`Painel para TV`,alt:`Sala com painel e rack planejados`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`banheiro`,titulo:`Gabinete de banheiro`,alt:`Banheiro com gabinete sob medida`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`home-office`,titulo:`Home office`,alt:`Home office planejado`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`sala-de-jantar`,titulo:`Sala de jantar`,alt:`Sala de jantar com móveis sob medida`,tipo:`projeto-entregue`}],h=`/movelaria/`;function g({arquivo:e=``,alt:t=``,legenda:n=``,largura:r=1200,altura:i=900,lazy:a=!0,classe:o=``,pasta:s=`projetos`,proporcaoReal:c=!1}={}){let l=e?`<img src="${h}${s}/${e}" alt="${t}" width="${r}" height="${i}" ${a?`loading="lazy"`:`fetchpriority="high"`} decoding="async" data-imagem-foto>`:``;return`
    <div class="imagem ${o} ${e&&c?`imagem--real`:``}" ${e&&c?`style="--r:${(r/i).toFixed(4)}"`:``} ${e?``:`data-vazia`}>
      <div class="imagem__ph" ${e?`aria-hidden="true"`:`role="img" aria-label="${t||n}"`}>
        <span class="imagem__luz" aria-hidden="true"></span>
        ${n?`<span class="imagem__legenda" aria-hidden="true">${n}</span>`:``}
      </div>
      ${l}
    </div>`}function _(e=document){e.querySelectorAll(`img[data-imagem-foto]`).forEach(e=>{let t=e.closest(`.imagem`),n=()=>t.classList.add(`imagem--carregada`),r=()=>{let n=t.querySelector(`.imagem__ph`);n.removeAttribute(`aria-hidden`),n.setAttribute(`role`,`img`),n.setAttribute(`aria-label`,e.alt),e.remove()};e.complete?e.naturalWidth?n():r():(e.addEventListener(`load`,n,{once:!0}),e.addEventListener(`error`,r,{once:!0}))})}var v=`/movelaria/`,y=.9,b=null;function x(e){return b||=S(e),b}async function S({THREE:e,GLTFLoader:t,RoundedBoxGeometry:n,mergeGeometries:r}){let i=new e.TextureLoader,a=async(t,n=!0)=>{let r=await i.loadAsync(`${v}modelos/texturas/${t}`);return r.wrapS=r.wrapT=e.RepeatWrapping,r.anisotropy=8,n&&(r.colorSpace=e.SRGBColorSpace),r},[o,s,c]=await Promise.all([a(`carvalho.jpg`),a(`linho_nor.jpg`,!1),new t().loadAsync(`${v}modelos/planta/potted_plant_02.gltf`).then(e=>e.scene)]),l=(e,t,n=t)=>{let r=e.clone();return r.repeat.set(t,n),r.needsUpdate=!0,r},u=(t,n,r=.6)=>new e.MeshStandardMaterial({color:t,normalMap:l(s,n),normalScale:new e.Vector2(r,r),roughness:.95}),d={carvalho:new e.MeshStandardMaterial({map:o,roughness:.55}),branco:new e.MeshStandardMaterial({color:15920871,roughness:.4}),grafite:new e.MeshStandardMaterial({color:3422010,roughness:.75}),metal:new e.MeshStandardMaterial({color:2039842,metalness:.8,roughness:.35}),fresta:new e.MeshStandardMaterial({color:3814445,roughness:1}),parede:new e.MeshStandardMaterial({color:15130063,roughness:.95}),corte:new e.MeshStandardMaterial({color:12168087,roughness:1}),piso:new e.MeshStandardMaterial({color:13221808,roughness:.6}),led:new e.MeshBasicMaterial({color:16769704,toneMapped:!1}),lencol:u(16052457,3),edredom:u(15327700,3),caixaTecido:u(14273719,2),salvia:u(9676421,2,.9),terracota:u(12877400,1.5,.9),tapete:u(12562066,8,1),roupas:[15854820,10333839,2898534,13481370,9146518,13074266,14998735].map(e=>u(e,2)),livro1:new e.MeshStandardMaterial({color:2898534,roughness:.8}),livro2:new e.MeshStandardMaterial({color:13481370,roughness:.8}),cupula:new e.MeshStandardMaterial({color:16183266,emissive:16763274,emissiveIntensity:.55,roughness:.9,side:e.DoubleSide})};return d.carvalho.userData.madeira=!0,{THREE:e,RoundedBoxGeometry:n,mergeGeometries:r,M:d,planta:c,luz:C(e)}}function C(e){let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,128);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.3,`rgba(255,255,255,0.45)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,128,128),n.globalCompositeOperation=`destination-in`;let i=n.createLinearGradient(0,0,128,0);i.addColorStop(0,`rgba(0,0,0,0)`),i.addColorStop(.1,`rgba(0,0,0,1)`),i.addColorStop(.9,`rgba(0,0,0,1)`),i.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=i,n.fillRect(0,0,128,128);let a=new e.CanvasTexture(t);return a.colorSpace=e.SRGBColorSpace,a}function w(e,t){let{THREE:n,mergeGeometries:r}=e,i=new Map;for(let e of[...t.children]){if(!e.isMesh||Array.isArray(e.material)||e.material.transparent)continue;let t=i.get(e.material)??[];t.push(e),i.set(e.material,t)}for(let[e,a]of i){if(a.length<2)continue;let i=a.map(e=>{e.updateMatrix();let t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone();return t.clearGroups(),t.applyMatrix4(e.matrix),t}),o=r(i,!1);if(i.forEach(e=>e.dispose()),!o)continue;a.forEach(e=>{t.remove(e),e.geometry.dispose()});let s=new n.Mesh(o,e);s.castShadow=!0,s.receiveShadow=!0,t.add(s)}}var T=0;function E(e,t){let{THREE:n,RoundedBoxGeometry:r,M:i}=e,a=([e,t,r],i)=>{let a=new n.BoxGeometry(e,t,r);if(!Array.isArray(i)&&i.userData.madeira){let n=a.attributes.uv,i=[[r,t],[r,t],[e,r],[e,r],[e,t],[e,t]],o=T++*.37%1;for(let e=0;e<6;e++)for(let t=0;t<4;t++){let r=e*4+t;n.setXY(r,n.getX(r)*i[e][0]/y+o,n.getY(r)*i[e][1]/y)}}let o=new n.Mesh(a,i);return o.castShadow=!0,o.receiveShadow=!0,o},o=(e,n,r,i,o,s=t)=>{let c=a(e,n);return c.position.set(r,i+e[1]/2,o),s.add(c),c};return{bloco:o,macio:([e,i,a],o,s,c,l,u=.03,d=t)=>{let f=new n.Mesh(new r(e,i,a,3,Math.min(u,i/2,e/2,a/2)),o);return f.castShadow=!0,f.receiveShadow=!0,f.position.set(s,c+i/2,l),d.add(f),f},lavagem:(r,i,a,o,s,c=.6,l=!1,u=0)=>{let d=new n.MeshBasicMaterial({map:e.luz,color:new n.Color(16755021).multiplyScalar(c),transparent:!0,blending:n.AdditiveBlending,depthWrite:!1,toneMapped:!1}),f=new n.Mesh(new n.PlaneGeometry(r,i),d);return f.position.set(a,o,s),f.rotation.set(0,u,l?Math.PI:0),t.add(f),f},planta:(r,i,a,o=0)=>{let s=e.planta.clone(!0),c=new n.Box3().setFromObject(s),l=r/c.getSize(new n.Vector3).y;s.scale.setScalar(l);let u=c.getCenter(new n.Vector3);return s.position.set(i-u.x*l,o-c.min.y*l,a-u.z*l),s.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t.add(s),s},ripado:(e,t,n,r,a,s=.045,c=.07)=>{o([e,t,.018],i.grafite,n,r,a-.029);let l=Math.max(1,Math.round(e/c)),u=e/l;for(let c=0;c<l;c++){let l=n-e/2+u*(c+.5);o([s,t,.02],i.carvalho,l,r,a-.01)}},malhaCaixa:a}}async function D(e){let t=await x(e),{THREE:n,M:r}=t,i=new n.Group,{bloco:a,macio:o,lavagem:s,planta:c,ripado:l}=E(t,i),u=2.4,d=.6,f=.02,p=.08,m=2.42;a([2.34,p,.52],r.grafite,0,0,-.02),a([f,m,d],r.carvalho,-1.19,p,0),a([f,m,d],r.carvalho,u/2-f/2,p,0),a([u,f,d],r.carvalho,0,2.48,0),a([u,f,d],r.carvalho,0,p,0),a([f,m-2*f,.58],r.carvalho,-.4,.1,-.01),a([f,m-2*f,.58],r.carvalho,.4,.1,-.01),a([u-2*f,m-2*f,.012],r.carvalho,0,.1,-.294),l(.796,2.416,-.8,.082,.33999999999999997),a([.796,2.416,.02],r.branco,.8,.082,.311),a([.014,1.2,.025],r.metal,.44,.7,.33399999999999996);let h=.78;a([h,.025,.5599999999999999],r.carvalho,0,1.95,-.01),a([.74,.008,.014],r.led,0,1.94,.22999999999999998),s(.76,1,0,1.44,-.286,.45),o([.32,.22,.42],r.caixaTecido,-.18,1.975,-.02,.025),o([.32,.22,.42],r.caixaTecido,.18,1.975,-.02,.025);let g=new n.Mesh(new n.CylinderGeometry(.012,.012,.76,16),r.metal);g.rotation.z=Math.PI/2,g.position.set(0,1.86,0),i.add(g),[.95,.8,1,.75,.9,1,.85].forEach((e,t)=>{let n=-.3+t*.1,i=o([.035,e,.44],r.roupas[t],n,1.84-e,0,.015);i.rotation.y=(t%3-1)*.06}),a([h,.025,.5599999999999999],r.carvalho,0,.6,-.01);for(let e=0;e<2;e++){let t=.1+.003+e*.25;a([.776,.236,.02],r.branco,0,t,.311),a([.3,.012,.006],r.metal,0,t+.19,.324)}return c(1,1.62,.05),w(t,i),i}async function O(e){let t=await x(e),{THREE:n,M:r}=t,i=new n.Group,{bloco:a,macio:o,lavagem:s,planta:c,ripado:l,malhaCaixa:u}=E(t,i),d=2.7,f=.1,p=u([4.1,.06,3.5],[r.corte,r.corte,r.piso,r.corte,r.corte,r.corte]);p.position.set(f/2,-.03,-.1/2),i.add(p);let m=u([4.1,d,f],[r.parede,r.parede,r.corte,r.parede,r.parede,r.parede]);m.position.set(f/2,d/2,-1.7-f/2),m.castShadow=!1,i.add(m);let h=u([f,d,3.4],[r.parede,r.parede,r.corte,r.parede,r.parede,r.parede]);h.position.set(2.05,d/2,0),h.castShadow=!1,i.add(h),o([2.5,.015,1.9],r.tapete,-.35,0,0,.006);let g=-.35;l(3.1,1.2,g,0,-1.66),a([3,.01,.015],r.led,g,1.2,-1.67),s(3,.5,g,1.45,-1.696,.3,!0),a([3.1,.5,.36],r.branco,g,1.98,-1.52);for(let e=1;e<4;e++)a([.004,.5,.004],r.fresta,-1.9+.775*e,1.98,-1.338);a([3,.008,.014],r.led,g,1.972,-1.3699999999999999),s(3,.6,g,1.67,-1.695,.32);let _=-1.66+1.05;a([1.5,.08,1.95],r.grafite,g,0,_),a([1.7,.26,2.1],r.carvalho,g,.08,_),o([1.62,.22,2.02],r.lencol,g,.34,_,.05);let v=-.30999999999999983;o([1.74,.05,1.5],r.edredom,g,.545,v,.02),o([.03,.22,1.5],r.edredom,-1.22,.35,v,.012),o([.03,.22,1.5],r.edredom,.52,.35,v,.012),o([1.74,.22,.03],r.edredom,g,.35,.45500000000000007,.012);let y=.18000000000000016;o([1.8,.04,.42],r.salvia,g,.585,y,.018),o([.03,.2,.42],r.salvia,-1.25,.4,y,.012),o([.03,.2,.42],r.salvia,.55,.4,y,.012);for(let e of[-1,1]){let t=o([.66,.17,.44],r.lencol,g+e*.39,.56,-1.42,.08);t.rotation.x=-.45,t.position.y+=.05}o([.46,.15,.34],r.salvia,-.55,.6,-1.22,.07).rotation.set(-.3,.05,0),o([.42,.14,.32],r.terracota,-.10999999999999999,.6,-1.21,.07).rotation.set(-.3,-.06,.05);for(let e of[-1.5099999999999998,.8099999999999999])a([.5,.2,.4],r.carvalho,e,.42,-1.44),a([.46,.004,.003],r.fresta,e,.52,-1.2389999999999999),a([.44,.006,.01],r.led,e,.414,-1.29);let b=-1.5699999999999998,S=-1.46,C=new n.Mesh(new n.CylinderGeometry(.06,.06,.015,24),r.metal);C.position.set(b,.6275,S);let T=new n.Mesh(new n.CylinderGeometry(.007,.007,.28,8),r.metal);T.position.set(b,.76,S);let D=new n.Mesh(new n.CylinderGeometry(.1,.12,.16,32,1,!0),r.cupula);D.position.set(b,.9,S),i.add(C,T,D),s(.7,.45,b,1.205,-1.694,.35,!0),s(.7,.3,b,.82-.15,-1.694,.3),a([.22,.03,.16],r.livro1,.71,.62,-1.42),a([.2,.025,.15],r.livro2,.71,.65,-1.42),c(.32,.9299999999999999,-1.46,.62);let O=-.5;return a([.54,.08,2.34],r.grafite,1.72,0,O),a([.6,2.44,2.4],r.branco,1.7,.08,O),[r.branco,r.carvalho,r.carvalho,r.branco].forEach((e,t)=>{let n=-1.4+t*.6;a([.02,2.436,.596],e,1.39,.082,n);let i=t<2?n+.26:n-.26;a([.025,1,.014],r.metal,1.367,.85,i)}),c(1.1,1.62,1.2),w(t,i),i}var k=`modulepreload`,A=function(e){return`/movelaria/`+e},j={},M=function(e){return e.pathname.endsWith(`.css`)},N=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=A(t,n);let r=s(t);if(r.href in j)return;j[r.href]=!0;let i=M(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:k,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ee=2e3,P=`texturas e planta: Poly Haven, CC0`,te=[{id:`guarda-roupa`,criar:D,nome:`guarda-roupa planejado`,credito:`Peça 3D ilustrativa — guarda-roupa planejado; ${P}`,camera:{azimute:-.45,polar:1.32,raio:6.3,alvo:.45}},{id:`quarto`,criar:O,nome:`quarto completo`,credito:`Ambiente 3D ilustrativo — quarto planejado; ${P}`,camera:{azimute:-.6,polar:1.02,raio:6.9,alvo:.3,exposicao:.8}}],F={azimute:-.5,polar:1.25,raio:6.4,alvo:.42,exposicao:1.05},I;function ne(){return I||=Promise.all([N(()=>import(`./three.module-4gI5Z-_B.js`),[]),N(()=>import(`./OrbitControls-Dh36RsEH.js`),__vite__mapDeps([0,1])),N(()=>import(`./GLTFLoader-BBhx59Qd.js`),__vite__mapDeps([2,1,3])),N(()=>import(`./RoomEnvironment-C4vpWHws.js`),__vite__mapDeps([4,1])),N(()=>import(`./RoundedBoxGeometry-DzM01JMs.js`),__vite__mapDeps([5,1])),N(()=>import(`./BufferGeometryUtils-C2Q5reFp.js`),__vite__mapDeps([3,1]))]).then(([e,{OrbitControls:t},{GLTFLoader:n},{RoomEnvironment:r},{RoundedBoxGeometry:i},{mergeGeometries:a}])=>({THREE:e,OrbitControls:t,GLTFLoader:n,RoomEnvironment:r,RoundedBoxGeometry:i,mergeGeometries:a})),I}async function re(e,t){let{THREE:n,GLTFLoader:r}=e,i;i=t.criar?await t.criar(e):(await new r().loadAsync(`/movelaria/${t.arquivo}`)).scene;let a=new n.Box3().setFromObject(i),o=new n.Vector3,s=new n.Vector3;a.getSize(o),a.getCenter(s);let c=3.1/Math.max(o.x,o.y,o.z);return i.scale.setScalar(c),i.position.set(-s.x*c,-a.min.y*c,-s.z*c),t.criar||i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),{item:t,modelo:i,alturaModelo:o.y*c}}function ie(e,t){let n=document.createElement(`div`);n.className=`hero__carrossel-controles`,n.setAttribute(`role`,`group`),n.setAttribute(`aria-label`,`Controles do carrossel 3D`);let r=document.createElement(`button`);r.type=`button`,r.className=`hero__carrossel-pausar`,n.appendChild(r);let i=document.createElement(`div`);i.className=`hero__carrossel-pontos`;let a=t.map(({item:e})=>{let t=document.createElement(`button`);return t.type=`button`,t.className=`hero__carrossel-ponto`,t.setAttribute(`aria-label`,`Ver ${e.nome}`),i.appendChild(t),t});return n.appendChild(i),e.querySelector(`[data-credito-hero]`)?.insertAdjacentElement(`afterend`,n),{botaoPausar:r,botoesPonto:a}}function ae(){if(new URLSearchParams(location.search).get(`3d`)===`forcar`)return!1;try{let e=document.createElement(`canvas`).getContext(`webgl`);if(!e)return!0;let t=e.getExtension(`WEBGL_debug_renderer_info`),n=t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER);return e.getExtension(`WEBGL_lose_context`)?.loseContext(),/swiftshader|llvmpipe|software|basic render/i.test(String(n))}catch{return!0}}async function L(e){if(!e)return;if(ae()){e.dataset.erro3d=``;return}let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,n;try{n=await ne()}catch{e.dataset.erro3d=``;return}if(!e.isConnected)return;let{THREE:r,OrbitControls:i,RoomEnvironment:a}=n,o=await Promise.allSettled(te.map(e=>re(n,e)));o.forEach(e=>e.status===`rejected`&&console.warn(`Peça 3D não carregou:`,e.reason));let s=o.filter(e=>e.status===`fulfilled`).map(e=>e.value);if(s.length===0){e.dataset.erro3d=``;return}if(!e.isConnected)return;let c;try{c=new r.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:`low-power`})}catch{e.dataset.erro3d=``;return}let u=new r.Scene,d=new r.PerspectiveCamera(32,1,.1,30),f=new r.Vector3(0,0,0),{azimute:p,polar:m,raio:h}=F,g=h+2.4;c.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),c.shadowMap.enabled=!0,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,c.shadowMap.type=r.PCFShadowMap,c.outputColorSpace=r.SRGBColorSpace,c.toneMapping=r.ACESFilmicToneMapping,c.toneMappingExposure=1.05,c.domElement.setAttribute(`aria-hidden`,`true`),e.appendChild(c.domElement);let _=new r.PMREMGenerator(c);u.environment=_.fromScene(new a,.04).texture,_.dispose(),u.add(new r.HemisphereLight(16774111,13483942,.5));let v=new r.DirectionalLight(16759161,1.3);v.position.set(4,4.5,3),v.castShadow=!0,v.shadow.mapSize.set(1024,1024),v.shadow.camera.near=1,v.shadow.camera.far=12,u.add(v);let y=new r.DirectionalLight(14673650,.4);y.position.set(-4,2,-2),u.add(y);let b=new r.Mesh(new r.PlaneGeometry(9,9),new r.ShadowMaterial({opacity:.2}));b.rotation.x=-Math.PI/2,b.receiveShadow=!0,u.add(b);let x=new i(d,c.domElement);c.domElement.style.touchAction=`pan-y`,x.enableZoom=!1,x.enablePan=!1,x.enableDamping=!0,x.dampingFactor=.08,x.rotateSpeed=.5;let S=()=>{x.minAzimuthAngle=p-.7,x.maxAzimuthAngle=p+.7,x.minPolarAngle=m-.2,x.maxPolarAngle=m+.2};S();let C=()=>{let{clientWidth:t,clientHeight:n}=e;t&&n&&(c.setSize(t,n),d.aspect=t/n,d.updateProjectionMatrix())};C();for(let{modelo:e}of s)u.add(e);try{c.compileAsync&&c.extensions.has(`KHR_parallel_shader_compile`)?await c.compileAsync(u,d):c.compile(u,d)}catch{}s.forEach(({modelo:e})=>e.visible=!1);let w=!1,T=null,E=null,D=e=>{d.position.setFromSphericalCoords(e,m,p).add(f),d.lookAt(f)},O=()=>{let e=!1;if(E){let t=Math.min(1,(performance.now()-E.t0)/E.duracao),n=t<.5?4*t*t*t:1-(-2*t+2)**3/2;D(E.de+(E.para-E.de)*n),t<1?e=!0:E=null}let t=x.update();return c.render(u,d),t||e},k=()=>{T=null,w&&O()&&T===null&&(T=requestAnimationFrame(k))},A=()=>{T===null&&w&&(T=requestAnimationFrame(k))};x.addEventListener(`change`,A);let j=()=>{x.update(),c.render(u,d)},M=null,N=0,P=(n,{animado:r})=>{let{modelo:i,alturaModelo:a,item:o}=s[n];M&&(M.visible=!1),M=i,M.visible=!0,c.shadowMap.needsUpdate=!0;let l={...F,...o.camera};({azimute:p,polar:m}=l),h=l.raio,g=l.raio+2.4,S(),c.toneMappingExposure=l.exposicao,f.set(0,a*l.alvo,0),x.target.copy(f);let u=e.closest(`.hero__visual`)?.querySelector(`[data-credito-hero]`);if(u&&(u.textContent=o.credito),K.forEach((e,t)=>e.setAttribute(`aria-current`,String(t===n))),!r||t){E=null,D(h),j();return}E={t0:performance.now(),duracao:650,de:g,para:h},D(g),A()},I=t,L=!1,R=!1,z=null,B=()=>I||L||R||s.length<2,V=()=>{z&&=(clearTimeout(z),null)},H=()=>{V(),!B()&&w&&(z=setTimeout(()=>{N=(N+1)%s.length,P(N,{animado:!0}),H()},ee))},U=()=>{G.innerHTML=I?`${l.tocar} Continuar`:`${l.pausar} Pausar`,G.setAttribute(`aria-pressed`,String(I))},W=e.closest(`.hero__visual`),{botaoPausar:G,botoesPonto:K}=s.length>1?ie(W,s):{botaoPausar:null,botoesPonto:[]};G&&(U(),G.addEventListener(`click`,()=>{I=!I,U(),I?V():H()})),K.forEach((e,t)=>{e.addEventListener(`click`,()=>{t!==N&&(N=t,P(N,{animado:!0}),H())})}),e.addEventListener(`pointerenter`,()=>{L=!0,V()}),e.addEventListener(`pointerleave`,()=>{L=!1,H()}),x.addEventListener(`start`,()=>{R=!0,V()}),x.addEventListener(`end`,()=>{R=!1,H()});let q=!1,J=()=>{if(q)return;q=!0,e.classList.add(`hero__3d--pronto`);let n=e.closest(`.hero__visual`),r=n?.querySelector(`[data-legenda-hero]`);r&&(r.innerHTML=`
        <span class="hero__etapa hero__etapa--1">${l.girar} Arraste</span>
        <span class="hero__seta" aria-hidden="true">→</span>
        <span class="hero__etapa hero__etapa--2">veja de outro ângulo</span>
      `);let i=n?.querySelector(`[data-credito-hero]`);i&&(i.hidden=!1),D(t?h:g),P(0,{animado:!t}),H()};new IntersectionObserver(e=>{e.forEach(e=>{w=e.isIntersecting&&!document.hidden,w?(A(),J(),H()):V()})},{threshold:.15}).observe(e),document.addEventListener(`visibilitychange`,()=>{w=!document.hidden&&w,w?(A(),H()):V()}),new ResizeObserver(()=>{C(),j()}).observe(e)}function R(){let e=e=>`class="traco" pathLength="1" style="--d:${e}s"`;return`
  <svg class="desenho" viewBox="0 0 640 460" role="img" aria-labelledby="desenho-titulo">
    <title id="desenho-titulo">Desenho técnico de uma cozinha planejada que ganha cor: armários aéreos em madeira clara, armários inferiores em verde sálvia e fita de LED quente acesa.</title>
    <defs>
      <linearGradient id="g-madeira" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e2c193"/>
        <stop offset=".55" stop-color="#cfa46c"/>
        <stop offset="1" stop-color="#bf8f57"/>
      </linearGradient>
      <pattern id="p-veio" width="125" height="18" patternUnits="userSpaceOnUse">
        <path d="M0 6c30-3 60 3 125-1M0 14c40 2 80-3 125 1" stroke="#a87743" stroke-opacity=".28" fill="none"/>
      </pattern>
      <linearGradient id="g-salvia" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#a9b99b"/>
        <stop offset="1" stop-color="#93a585"/>
      </linearGradient>
      <linearGradient id="g-led" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffd58a" stop-opacity=".95"/>
        <stop offset=".35" stop-color="#ffe2a8" stop-opacity=".45"/>
        <stop offset="1" stop-color="#fff3d6" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="g-nicho" cx=".5" cy="0" r="1">
        <stop offset="0" stop-color="#ffe0a3"/>
        <stop offset="1" stop-color="#b98a55"/>
      </radialGradient>
    </defs>

    <!-- Preenchimentos (aparecem depois do traço) -->
    <g class="preench">
      <rect x="70" y="70" width="250" height="110" fill="url(#g-madeira)"/>
      <rect x="445" y="70" width="125" height="110" fill="url(#g-madeira)"/>
      <rect x="70" y="70" width="250" height="110" fill="url(#p-veio)"/>
      <rect x="445" y="70" width="125" height="110" fill="url(#p-veio)"/>
      <rect x="320" y="70" width="125" height="110" fill="url(#g-nicho)"/>
      <rect x="55" y="262" width="530" height="14" fill="#f4efe6"/>
      <rect x="70" y="276" width="375" height="112" fill="url(#g-salvia)"/>
      <rect x="445" y="276" width="125" height="112" fill="#e9e4dc"/>
      <rect x="470" y="310" width="75" height="50" fill="#3a3d40" fill-opacity=".85"/>
      <rect x="80" y="388" width="480" height="12" fill="#cbbda7"/>
      <rect x="88" y="240" width="30" height="22" rx="3" fill="#c98f62"/>
      <path d="M103 240c-2-14-12-22-22-24 6 8 10 16 22 24Zm0 0c1-16 8-26 18-30-3 10-6 20-18 30Zm0 0c-1-12 0-22 4-30 3 10 1 20-4 30Z" fill="#6f8a63"/>
      <path d="M382 125c-1-10-7-15-14-17 4 6 7 11 14 17Zm0 0c1-11 6-17 12-20-2 7-5 13-12 20Z" fill="#6f8a63"/>
      <rect x="374" y="125" width="16" height="13" rx="2" fill="#f7f3ec"/>
    </g>

    <!-- Luz da fita de LED -->
    <g class="led">
      <path d="M75 184h490l40 78H35z" fill="url(#g-led)"/>
      <rect x="75" y="181" width="490" height="4" rx="2" fill="#ffd58a"/>
      <rect x="326" y="74" width="113" height="3" rx="1.5" fill="#fff0c8"/>
    </g>

    <!-- Traço técnico -->
    <g class="tracos" fill="none" stroke="#14224f" stroke-width="1.6" stroke-linejoin="round">
      <line x1="20" y1="400" x2="620" y2="400" ${e(0)}/>
      <rect x="70" y="70" width="500" height="110" ${e(.15)}/>
      <line x1="195" y1="70" x2="195" y2="180" ${e(.45)}/>
      <line x1="320" y1="70" x2="320" y2="180" ${e(.5)}/>
      <line x1="445" y1="70" x2="445" y2="180" ${e(.55)}/>
      <line x1="320" y1="138" x2="445" y2="138" ${e(.7)}/>
      <line x1="178" y1="160" x2="178" y2="172" ${e(.8)}/>
      <line x1="212" y1="160" x2="212" y2="172" ${e(.8)}/>
      <line x1="553" y1="160" x2="553" y2="172" ${e(.85)}/>
      <rect x="55" y="262" width="530" height="14" ${e(.9)}/>
      <rect x="70" y="276" width="500" height="112" ${e(1.1)}/>
      <line x1="195" y1="276" x2="195" y2="388" ${e(1.35)}/>
      <line x1="320" y1="276" x2="320" y2="388" ${e(1.4)}/>
      <line x1="382.5" y1="276" x2="382.5" y2="388" ${e(1.45)}/>
      <line x1="445" y1="276" x2="445" y2="388" ${e(1.5)}/>
      <line x1="70" y1="313" x2="195" y2="313" ${e(1.55)}/>
      <line x1="70" y1="350" x2="195" y2="350" ${e(1.6)}/>
      <line x1="117" y1="294" x2="148" y2="294" ${e(1.7)}/>
      <line x1="117" y1="331" x2="148" y2="331" ${e(1.72)}/>
      <line x1="117" y1="368" x2="148" y2="368" ${e(1.74)}/>
      <line x1="305" y1="292" x2="305" y2="312" ${e(1.76)}/>
      <line x1="372" y1="292" x2="372" y2="312" ${e(1.78)}/>
      <line x1="393" y1="292" x2="393" y2="312" ${e(1.8)}/>
      <rect x="470" y="310" width="75" height="50" rx="3" ${e(1.82)}/>
      <line x1="465" y1="294" x2="550" y2="294" ${e(1.85)}/>
      <path d="M80 388v12M560 388v12" ${e(1.88)}/>
      <path d="M257 262v-30c0-10 16-10 16 0v6" ${e(1.9)}/>
      <path d="M470 258h30M515 258h30" ${e(1.92)}/>
    </g>

    <!-- Cotas -->
    <g class="cotas" stroke="#7a4e22" stroke-width="1" fill="#7a4e22">
      <path d="M70 40h500M70 33v14M570 33v14" fill="none"/>
      <text x="320" y="32" text-anchor="middle" stroke="none">250</text>
      <path d="M32 70v330M25 70h14M25 400h14" fill="none"/>
      <text x="22" y="240" text-anchor="middle" stroke="none" transform="rotate(-90 22 240)">240</text>
      <path d="M608 262v138M601 262h14M601 400h14" fill="none"/>
      <text x="626" y="334" text-anchor="middle" stroke="none" transform="rotate(-90 626 334)">90</text>
    </g>
  </svg>`}function z(){let t=m.find(e=>e.hero&&e.arquivo);return`
    <section class="hero" id="inicio" aria-labelledby="hero-titulo">
      <div class="container hero__grade">
        <div class="hero__texto">
          <p class="pilula">Guaíba · RS — há ${e.anos} anos</p>
          <h1 id="hero-titulo">Móveis planejados, mesas e estofados <span class="destaque">sob medida</span></h1>
          <p class="hero__sub">Há ${e.anos} anos transformando sonhos em realidade. <strong>Cada detalhe pensado para você.</strong></p>
          <div class="hero__acoes">
            <a class="botao botao--primario botao--grande" href="${o()}" target="_blank" rel="noopener">
              ${l.whatsapp} Peça um orçamento
            </a>
            <a class="botao botao--secundario botao--grande" href="#projetos">Ver projetos</a>
          </div>
          <ul class="hero__selos">
            <li><span class="hero__estrela">${l.estrela}</span> <strong>${e.google.nota}</strong> no Google · ${e.google.totalAvaliacoes} avaliações</li>
            <li>${l.entrega} Fazemos entrega</li>
          </ul>
        </div>

        <figure class="hero__visual ${t?`hero__visual--foto`:``}">
          <svg class="hero__anel" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="54" fill="none" stroke="var(--terracota)" stroke-width="2" stroke-opacity=".35"/>
            <circle cx="60" cy="60" r="38" fill="none" stroke="var(--marinho)" stroke-width="1.5" stroke-opacity=".22"/>
          </svg>
          ${t?g({arquivo:t.arquivo,alt:``,largura:t.largura,altura:t.altura,lazy:!1,classe:`hero__foto`}):``}
          <div class="hero__prancheta hero__3d-card">
            <div class="hero__3d" data-hero-3d></div>
            <div class="hero__3d-desenho" data-desenho>
              ${R()}
            </div>
          </div>
          <figcaption class="hero__legenda" data-legenda-hero>
            <span class="hero__etapa hero__etapa--1">Do desenho</span>
            <span class="hero__seta" aria-hidden="true">→</span>
            <span class="hero__etapa hero__etapa--2">ao móvel pronto</span>
          </figcaption>
          <p class="hero__credito" data-credito-hero hidden></p>
        </figure>
      </div>
    </section>`}function B(){let e=document.querySelector(`[data-desenho]`);e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add(`desenhar`)));let t=document.querySelector(`[data-hero-3d]`);t&&L(t)}var V=[{id:`cozinha`,nome:`Cozinha`,frase:`Armários, bancadas e nichos pensados para a rotina de quem cozinha.`,mensagem:`uma cozinha planejada`,icone:`cozinha`},{id:`closet`,nome:`Closet`,frase:`Cada peça no seu lugar, com organização feita para você.`,mensagem:`um closet sob medida`,icone:`closet`},{id:`quarto`,nome:`Quarto`,frase:`Quartos de casal, de solteiro e infantis com o aproveitamento de cada canto.`,mensagem:`um quarto planejado`,icone:`quarto`},{id:`home-office`,nome:`Home office`,frase:`Um canto de trabalho funcional, que conversa com o resto da casa.`,mensagem:`um home office planejado`,icone:`office`},{id:`sala`,nome:`Sala (painéis e racks)`,frase:`Painéis, racks e iluminação para deixar a sala mais acolhedora.`,mensagem:`painel ou rack para a sala`,icone:`sala`},{id:`banheiro`,nome:`Banheiro`,frase:`Gabinetes e armários sob medida, mesmo nos espaços menores.`,mensagem:`móveis para banheiro`,icone:`banheiro`},{id:`sala-de-jantar`,nome:`Sala de jantar`,frase:`Ambientes para reunir a família em volta da mesa.`,mensagem:`uma sala de jantar`,icone:`jantar`},{id:`mesas`,nome:`Mesas sob medida`,frase:`Mesas feitas no tamanho certo para o seu espaço.`,mensagem:`uma mesa sob medida`,icone:`mesa`},{id:`estofados`,nome:`Estofados sob medida`,frase:`Estofados feitos sob medida para o seu ambiente.`,mensagem:`estofados sob medida`,icone:`estofado`}];function H(e,t=``){return`<p class="rotulo ${t}">${e}</p>`}function U(e,t,n){let r=e=>`<path d="M${e-7} ${t+7}L${e+7} ${t-7}"/>`,i=`<path d="M${e[0]-15} ${t}H${e[e.length-1]+15}"/>`,a=n.map((n,r)=>`<text x="${(e[r]+e[r+1])/2}" y="${t-12}" text-anchor="middle">${n}</text>`).join(``);return`<g class="cota">${i}${e.map(r).join(``)}${a}</g>`}function W(e,t,n){let r=e=>`<path d="M${t-7} ${e+7}L${t+7} ${e-7}"/>`,i=`<path d="M${t} ${e[0]-15}V${e[e.length-1]+15}"/>`,a=n.map((n,r)=>{let i=(e[r]+e[r+1])/2;return`<text x="${t-12}" y="${i}" text-anchor="middle" transform="rotate(-90 ${t-12} ${i})">${n}</text>`}).join(``);return`<g class="cota">${i}${e.map(r).join(``)}${a}</g>`}function G(e,t,n){return`<rect class="vao" x="${e}" y="${n}" width="${t-e}" height="15"/>
    <path class="esquadria" d="M${e} ${n+2}H${t}M${e} ${n+7.5}H${t}M${e} ${n+13}H${t}M${e} ${n}V${n+15}M${t} ${n}V${n+15}"/>`}function K(e,t,n){return`<rect class="vao" x="${n}" y="${e}" width="15" height="${t-e}"/>
    <path class="esquadria" d="M${n+2} ${e}V${t}M${n+7.5} ${e}V${t}M${n+13} ${e}V${t}M${n} ${e}H${n+15}M${n} ${t}H${n+15}"/>`}function q(){return`
  <svg class="planta" viewBox="-95 -95 1140 925" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="piso-molhado" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M30 0H0V30" fill="none" stroke="#14224f" stroke-opacity=".09" stroke-width="1"/>
      </pattern>
      <pattern id="veio" width="60" height="18" patternUnits="userSpaceOnUse">
        <rect width="60" height="18" fill="#d6b07a"/>
        <path d="M0 5c15-2 30 2 60-1M0 13c20 2 40-2 60 1" fill="none" stroke="#a87743" stroke-opacity=".45" stroke-width="1.2"/>
      </pattern>
    </defs>

    <!-- ambientes: piso, móveis e nome -->
    <g class="comodo" data-amb="quarto">
      <rect class="piso" x="15" y="15" width="360" height="340"/>
      <rect class="marc" x="60" y="15" width="270" height="9"/>
      <rect class="marc" x="70" y="24" width="45" height="40"/>
      <rect class="marc" x="275" y="24" width="45" height="40"/>
      <rect class="marc" x="352" y="170" width="23" height="160"/>
      <g class="solto">
        <rect x="120" y="24" width="150" height="200" rx="3"/>
        <rect x="130" y="34" width="60" height="30" rx="8"/>
        <rect x="200" y="34" width="60" height="30" rx="8"/>
        <path d="M120 96H270M120 104H270"/>
      </g>
      <text x="195" y="292" text-anchor="middle">Quarto</text>
    </g>

    <g class="comodo" data-amb="closet">
      <rect class="piso" x="385" y="15" width="190" height="160"/>
      <rect class="marc" x="385" y="15" width="190" height="55"/>
      <rect class="marc" x="520" y="70" width="55" height="105"/>
      <path class="solto tracejado" d="M395 42H565"/>
      <text x="452" y="132" text-anchor="middle">Closet</text>
    </g>

    <g class="comodo" data-amb="banheiro">
      <rect class="piso" x="385" y="185" width="190" height="170"/>
      <rect class="hachura" x="385" y="185" width="190" height="170"/>
      <rect class="marc" x="515" y="190" width="60" height="80"/>
      <g class="solto">
        <path d="M490 185V270H385"/>
        <circle cx="437" cy="228" r="6"/>
        <ellipse cx="545" cy="230" rx="17" ry="13"/>
        <rect x="562" y="300" width="12" height="36" rx="2"/>
        <ellipse cx="543" cy="318" rx="19" ry="15"/>
      </g>
      <text x="482" y="310" text-anchor="middle">Banho</text>
    </g>

    <g class="comodo" data-amb="home-office">
      <rect class="piso" x="585" y="15" width="230" height="340"/>
      <rect class="marc" x="585" y="15" width="230" height="60"/>
      <rect class="marc" x="775" y="110" width="40" height="180"/>
      <g class="solto">
        <circle cx="690" cy="108" r="22"/>
        <path class="tracejado" d="M590 46H810"/>
      </g>
      <text x="680" y="232" text-anchor="middle">Home office</text>
    </g>

    <g class="comodo comodo--fixo">
      <rect class="piso" x="825" y="15" width="160" height="340"/>
      <rect class="hachura" x="825" y="15" width="160" height="340"/>
      <g class="solto">
        <rect x="925" y="22" width="55" height="48" rx="3"/><rect x="933" y="30" width="39" height="32" rx="6"/>
        <rect x="925" y="82" width="55" height="55" rx="3"/><circle cx="952.5" cy="109.5" r="19"/>
      </g>
      <text x="905" y="232" text-anchor="middle">Área de</text>
      <text x="905" y="256" text-anchor="middle">serviço</text>
    </g>

    <g class="comodo" data-amb="sala">
      <rect class="piso" x="15" y="365" width="485" height="360"/>
      <rect class="marc" x="70" y="365" width="360" height="45"/>
      <g class="solto">
        <path d="M150 373H350"/>
        <rect class="tracejado" x="88" y="468" width="304" height="236"/>
        <circle cx="250" cy="545" r="34"/>
      </g>
      <g class="peca peca--estofado" data-peca="estofados">
        <path d="M100 520H185V610H360V695H100Z"/>
        <path class="costura" d="M118 520V677H360M185 610V695M272 610V695"/>
      </g>
      <text x="250" y="447" text-anchor="middle">Sala</text>
    </g>

    <g class="comodo" data-amb="sala-de-jantar">
      <rect class="piso" x="500" y="365" width="230" height="360"/>
      <rect class="marc" x="530" y="365" width="170" height="40"/>
      <g class="solto">
        <rect x="512" y="515" width="38" height="38" rx="6"/><rect x="512" y="572" width="38" height="38" rx="6"/><rect x="512" y="629" width="38" height="38" rx="6"/>
        <rect x="680" y="515" width="38" height="38" rx="6"/><rect x="680" y="572" width="38" height="38" rx="6"/><rect x="680" y="629" width="38" height="38" rx="6"/>
      </g>
      <g class="peca peca--mesa" data-peca="mesas">
        <rect x="555" y="500" width="120" height="180" rx="2"/>
      </g>
      <text x="615" y="447" text-anchor="middle">Jantar</text>
    </g>

    <g class="comodo" data-amb="cozinha">
      <rect class="piso" x="730" y="365" width="255" height="360"/>
      <rect class="hachura" x="730" y="365" width="255" height="360"/>
      <rect class="marc" x="925" y="440" width="60" height="270"/>
      <rect class="marc" x="770" y="470" width="70" height="200"/>
      <g class="solto">
        <rect x="925" y="370" width="60" height="64" rx="2"/><path d="M925 370L985 434M985 370L925 434"/>
        <rect x="935" y="500" width="40" height="66" rx="8"/>
        <circle cx="943" cy="625" r="9"/><circle cx="967" cy="625" r="9"/><circle cx="943" cy="660" r="9"/><circle cx="967" cy="660" r="9"/>
        <circle cx="751" cy="505" r="13"/><circle cx="751" cy="550" r="13"/><circle cx="751" cy="595" r="13"/><circle cx="751" cy="640" r="13"/>
        <path class="tracejado" d="M950 440V710"/>
      </g>
      <text x="855" y="420" text-anchor="middle">Cozinha</text>
    </g>

    <!-- limites entre ambientes integrados -->
    <path class="limite" d="M500 365V725M730 365V725"/>

    <!-- paredes (poche) -->
    <g class="parede">
      <rect x="0" y="0" width="1000" height="15"/>
      <rect x="0" y="725" width="1000" height="15"/>
      <rect x="0" y="0" width="15" height="740"/>
      <rect x="985" y="0" width="15" height="740"/>
      <rect x="15" y="355" width="970" height="10"/>
      <rect x="375" y="15" width="10" height="340"/>
      <rect x="575" y="15" width="10" height="340"/>
      <rect x="815" y="15" width="10" height="340"/>
      <rect x="385" y="175" width="190" height="10"/>
    </g>

    <!-- vãos de porta e passagens -->
    <g class="vaos">
      <rect class="vao" x="270" y="355" width="80" height="10"/>
      <rect class="vao" x="395" y="355" width="70" height="10"/>
      <rect class="vao" x="600" y="355" width="80" height="10"/>
      <rect class="vao" x="845" y="355" width="120" height="10"/>
      <rect class="vao" x="375" y="40" width="10" height="80"/>
      <rect class="vao" x="0" y="600" width="15" height="90"/>
    </g>
    <g class="porta">
      <path d="M350 355V275M270 355A80 80 0 0 1 350 275"/>
      <path d="M395 355V285M465 355A70 70 0 0 0 395 285"/>
      <path d="M600 355V275M680 355A80 80 0 0 0 600 275"/>
      <path d="M15 690H105M15 600A90 90 0 0 1 105 690"/>
    </g>

    <!-- janelas -->
    ${G(110,290,0)}
    ${G(630,770,0)}
    ${G(870,950,0)}
    ${G(90,430,725)}
    ${G(560,700,725)}
    ${K(470,610,985)}

    <!-- cotas -->
    ${U([0,380,580,820,1e3],-42,[`3,80`,`2,00`,`2,40`,`1,80`])}
    ${W([0,360,740],-42,[`3,60`,`3,80`])}

    <!-- escala gráfica e norte -->
    <g class="escala">
      <rect x="0" y="782" width="100" height="10" class="cheio"/>
      <rect x="100" y="782" width="100" height="10"/>
      <rect x="200" y="782" width="100" height="10" class="cheio"/>
      <text x="0" y="816" text-anchor="middle">0</text>
      <text x="100" y="816" text-anchor="middle">1</text>
      <text x="200" y="816" text-anchor="middle">2</text>
      <text x="312" y="816" text-anchor="middle">3 m</text>
    </g>
    <g class="norte" transform="translate(975 790)">
      <circle r="24"/>
      <path d="M0 -20L9 12L0 5L-9 12Z"/>
      <text y="-30" text-anchor="middle">N</text>
    </g>
  </svg>`}var J=String(V.length).padStart(2,`0`);function oe(){let e=V[0];return`
    <section class="secao ambientes" id="ambientes" aria-labelledby="ambientes-titulo">
      <div class="container">
        <header class="ambientes__topo revelar">
          <div>
            ${H(`Ambientes`)}
            <h2 id="ambientes-titulo">Seu espaço merece mais do que móveis prontos.</h2>
          </div>
          <p>Projetamos a casa inteira — e também fazemos mesas e estofados sob medida. Escolha um ambiente na planta e fale direto com a gente.</p>
        </header>

        <div class="ambientes__grade revelar">
          <figure class="ambientes__planta" data-planta>
            ${q()}
            <figcaption>
              <span class="legenda-marc" aria-hidden="true"></span> Marcenaria planejada
              <span class="ambientes__ilustrativa">Planta ilustrativa</span>
            </figcaption>
          </figure>

          <div class="ambientes__painel">
            <p class="ambientes__contador" aria-hidden="true"><span data-amb-num>01</span> / ${J}</p>
            <div aria-live="polite">
              <h3 class="ambientes__nome" data-amb-nome>${e.nome}</h3>
              <p class="ambientes__frase" data-amb-frase>${e.frase}</p>
            </div>
            <a class="link-seta" data-amb-link href="${o(s(e.mensagem))}" target="_blank" rel="noopener">
              Pedir orçamento ${l.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
            </a>

            <ul class="ambientes__lista" aria-label="Ambientes">
              ${V.map((e,t)=>`
                <li><button type="button" class="ambientes__opcao" data-amb-opcao="${e.id}" aria-pressed="${t===0}">${e.nome}</button></li>`).join(``)}
            </ul>
          </div>
        </div>
      </div>
    </section>`}function se(){let e=document.getElementById(`ambientes`);if(!e)return;let t=e.querySelector(`[data-planta] svg`),n=e.querySelector(`[data-amb-num]`),r=e.querySelector(`[data-amb-nome]`),i=e.querySelector(`[data-amb-frase]`),a=e.querySelector(`[data-amb-link]`),c=[...e.querySelectorAll(`[data-amb-opcao]`)],l=null,u={mesas:`sala-de-jantar`,estofados:`sala`};function d(e){if(e===l)return;let d=V.findIndex(t=>t.id===e);if(d<0)return;l=e;let f=V[d];t.querySelectorAll(`.ativo, .realce`).forEach(e=>e.classList.remove(`ativo`,`realce`));let p=t.querySelector(`[data-peca="${e}"]`);p?(p.classList.add(`ativo`),t.querySelector(`[data-amb="${u[e]}"]`)?.classList.add(`realce`)):t.querySelector(`[data-amb="${e}"]`)?.classList.add(`ativo`),n.textContent=String(d+1).padStart(2,`0`),r.textContent=f.nome,i.textContent=f.frase,a.href=o(s(f.mensagem)),c.forEach(t=>t.setAttribute(`aria-pressed`,String(t.dataset.ambOpcao===e)))}t.addEventListener(`pointerover`,e=>{let t=e.target.closest(`[data-peca], [data-amb]`);t&&d(t.dataset.peca||t.dataset.amb)}),t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-peca], [data-amb]`);t&&d(t.dataset.peca||t.dataset.amb)}),c.forEach(e=>e.addEventListener(`click`,()=>d(e.dataset.ambOpcao)));let f=window.matchMedia(`(max-width: 599px)`),p=()=>t.setAttribute(`viewBox`,f.matches?`-8 -8 1016 756`:`-95 -95 1140 925`);f.addEventListener(`change`,p),p(),d(V[0].id)}var Y=e=>V.find(t=>t.id===e)?.nome??e,ce=8,X=m.filter(e=>e.arquivo);function le(){let t=V.filter(e=>X.some(t=>t.ambiente===e.id)),n=X.length>=ce&&t.length>1,r=X.some(e=>e.tipo===`render-3d`);return`
    <section class="secao galeria" id="projetos" aria-labelledby="projetos-titulo">
      <div class="container">
        <header class="galeria__topo revelar">
          <div>
            ${H(`Projetos`)}
            <h2 id="projetos-titulo">Bonito por fora.<br>Inteligente por dentro.</h2>
          </div>
          <p>Alguns ambientes projetados pela Movelaria.${r?` Parte das imagens são renderizações 3D dos projetos.`:``}</p>
        </header>

        ${n?`<div class="filtros revelar" role="group" aria-label="Filtrar projetos por ambiente">
          <button type="button" class="filtro" aria-pressed="true" data-filtro="todos">Todos</button>
          ${t.map(e=>`<button type="button" class="filtro" aria-pressed="false" data-filtro="${e.id}">${e.nome}</button>`).join(``)}
        </div>
        <p class="sr-only" aria-live="polite" data-galeria-status></p>`:``}

        <ul class="galeria__grade" data-galeria>
          ${X.map((e,t)=>`
            <li class="galeria__item revelar" data-ambiente="${e.ambiente}">
              <button type="button" class="galeria__botao" data-abrir="${t}">
                <span class="sr-only">Ampliar: </span>
                ${g({arquivo:e.arquivo,alt:e.alt,largura:e.largura,altura:e.altura})}
                <span class="galeria__info">
                  <span class="galeria__ambiente">${Y(e.ambiente)}</span>
                  <span class="galeria__titulo">${e.titulo}</span>
                </span>
              </button>
            </li>`).join(``)}
          <li class="galeria__item galeria__item--insta revelar">
            <a class="galeria__insta" href="${e.instagram.url}" target="_blank" rel="noopener">
              <span class="galeria__insta-icone">${l.instagram}</span>
              <span class="galeria__insta-texto">Mais projetos no Instagram</span>
              <span class="galeria__insta-usuario">${e.instagram.usuario} ${l.seta}</span>
              <span class="sr-only">(abre em nova aba)</span>
            </a>
          </li>
        </ul>

        <div class="galeria__cta revelar">
          <p>Gostou de algum ambiente? Vamos tirar seu projeto do papel?</p>
          <a class="link-seta" href="${o(`Olá! Vi os projetos no site da Movelaria e gostaria de solicitar meu projeto.`)}" target="_blank" rel="noopener">
            Solicite seu projeto ${l.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
          </a>
        </div>
      </div>

      <dialog class="lightbox" aria-labelledby="lightbox-titulo" data-lightbox>
        <div class="lightbox__caixa">
          <button type="button" class="lightbox__fechar" data-fechar aria-label="Fechar">${l.fechar}</button>
          <div class="lightbox__midia" data-midia></div>
          <div class="lightbox__rodape">
            <div>
              <h3 class="lightbox__titulo" id="lightbox-titulo" data-titulo></h3>
              <p class="lightbox__ambiente" data-ambiente-lb></p>
            </div>
            <div class="lightbox__nav">
              <button type="button" class="lightbox__seta" data-anterior aria-label="Projeto anterior">${l.setaEsq}</button>
              <span class="lightbox__contador" data-contador></span>
              <button type="button" class="lightbox__seta" data-proximo aria-label="Próximo projeto">${l.seta}</button>
            </div>
          </div>
        </div>
      </dialog>
    </section>`}function ue(){let e=document.getElementById(`projetos`),t=e.querySelector(`[data-galeria]`),n=[...t.querySelectorAll(`.galeria__item:not(.galeria__item--insta)`)],r=e.querySelector(`[data-galeria-status]`),i=e.querySelector(`[data-lightbox]`),a=X.map((e,t)=>t),o=0,s=null;e.querySelectorAll(`[data-filtro]`).forEach(t=>{t.addEventListener(`click`,()=>{let i=t.dataset.filtro;e.querySelectorAll(`[data-filtro]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e===t))),a=[],n.forEach((e,t)=>{let n=i===`todos`||e.dataset.ambiente===i;e.hidden=!n,n&&a.push(t)}),r.textContent=`${a.length} ${a.length===1?`projeto`:`projetos`} em ${t.textContent}`})});let c=i.querySelector(`[data-midia]`);function l(e){o=e;let t=X[e],n=Y(t.ambiente);c.innerHTML=g({arquivo:t.arquivo,alt:t.alt,largura:t.largura,altura:t.altura,lazy:!1,classe:`imagem--lightbox`,proporcaoReal:!0}),_(c),i.querySelector(`[data-titulo]`).textContent=t.titulo,i.querySelector(`[data-ambiente-lb]`).textContent=n+(t.tipo===`render-3d`?` · Projeto 3D`:``);let r=a.indexOf(e);i.querySelector(`[data-contador]`).textContent=`${r+1} / ${a.length}`}function u(e){let t=a.indexOf(o);l(a[(t+e+a.length)%a.length])}t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-abrir]`);t&&(s=t,l(Number(t.dataset.abrir)),i.showModal(),i.querySelector(`[data-fechar]`).focus())}),i.querySelector(`[data-fechar]`).addEventListener(`click`,()=>i.close()),i.querySelector(`[data-anterior]`).addEventListener(`click`,()=>u(-1)),i.querySelector(`[data-proximo]`).addEventListener(`click`,()=>u(1)),i.addEventListener(`keydown`,e=>{e.key===`ArrowLeft`&&u(-1),e.key===`ArrowRight`&&u(1)}),i.addEventListener(`click`,e=>{e.target===i&&i.close()}),i.addEventListener(`close`,()=>{document.body.classList.remove(`lightbox-aberto`),s?.focus()}),i.addEventListener(`toggle`,()=>{i.open&&document.body.classList.add(`lightbox-aberto`)})}var de=[{titulo:`Conversa e medição`,texto:`Você conta como é a sua rotina e o que espera do ambiente. Depois, tiramos as medidas do espaço.`},{titulo:`Projeto`,texto:`Desenhamos o móvel pensando no uso de cada gaveta, nicho e porta — e ajustamos com você até ficar do seu jeito.`},{titulo:`Fabricação`,texto:`Com o projeto aprovado, os móveis são produzidos sob medida, com atenção ao acabamento.`},{titulo:`Entrega e montagem`,texto:`Levamos tudo até a sua casa e montamos no lugar certo, dentro do que foi combinado.`}];function fe(){return`
    <section class="secao processo" id="como-funciona" aria-labelledby="processo-titulo">
      <div class="container">
        <header class="processo__topo revelar">
          <div>
            ${H(`Como funciona`)}
            <h2 id="processo-titulo">Do primeiro papo ao móvel montado.</h2>
          </div>
          <p>Um trabalho sob medida tem etapas. A gente acompanha você em todas elas.</p>
        </header>

        <ol class="processo__lista revelar">
          ${de.map((e,t)=>`
            <li class="passo">
              <span class="passo__regua" aria-hidden="true">
                <span class="passo__numero">${String(t+1).padStart(2,`0`)}</span>
              </span>
              <div class="passo__corpo">
                <h3 class="passo__titulo">${e.titulo}</h3>
                <p>${e.texto}</p>
              </div>
            </li>`).join(``)}
        </ol>

        <p class="processo__cta revelar">
          <a class="link-seta" href="${o(`Olá! Quero começar meu projeto com a Movelaria. Podemos conversar?`)}" target="_blank" rel="noopener">
            Começar meu projeto ${l.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>`}function pe(){return`
    <section class="secao sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div class="container sobre__grade">
        <div class="sobre__anos revelar" aria-hidden="true">
          <span class="sobre__anos-numero">${e.anos}</span>
          <span class="sobre__anos-texto">anos</span>
        </div>

        <div class="sobre__texto revelar">
          ${H(`Sobre a Movelaria`)}
          <h2 id="sobre-titulo">Há ${e.anos} anos transformando sonhos em realidade.</h2>
          <p class="sobre__abre">A Movelaria é uma loja de móveis em Guaíba que projeta e fabrica sob medida: móveis planejados para todos os ambientes, mesas e estofados.</p>
          <p>Por aqui, cada projeto começa numa conversa. Queremos entender como você usa o espaço antes de desenhar qualquer coisa — porque um bom móvel planejado precisa ser bonito, mas também precisa funcionar no seu dia a dia.</p>
          <p>Atendimento próximo, móveis de qualidade e compromisso com o que foi combinado: é isso que nossos clientes destacam, e é isso que a gente faz questão de manter.</p>

          <dl class="sobre__lista">
            <div><dt>Projeto</dt><dd>pensado para o seu espaço</dd></div>
            <div><dt>Fabricação</dt><dd>sob medida</dd></div>
            <div><dt>Entrega</dt><dd>e montagem</dd></div>
          </dl>
        </div>
      </div>
    </section>`}var me=[{texto:`Excelente atendimento, entrega dentro dos prazos, móveis de qualidade.`,autor:`Alexandre Rocha`,fonte:`Avaliação no Google`},{texto:`Ótimo local pra projetar e comprar móveis sob medida.`,autor:`Rangel Peter`,fonte:`Avaliação no Google`},{texto:`Excelente atendimento!`,autor:`Izabel Campos`,fonte:`Avaliação no Google`}];function he(){return`
    <section class="secao depoimentos" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div class="container">
        <header class="depoimentos__topo revelar">
          ${H(`Depoimentos`,`rotulo--claro`)}
          <h2 id="depoimentos-titulo" class="sr-only">Depoimentos de clientes</h2>
          <p class="depoimentos__nota">
            <span class="depoimentos__nota-numero">${e.google.nota}</span>
            <span>de 5 no Google<br>${e.google.totalAvaliacoes} avaliações</span>
          </p>
        </header>

        <ul class="depoimentos__lista">
          ${me.map(e=>`
            <li class="revelar">
              <figure class="depoimento">
                <blockquote><p>“${e.texto}”</p></blockquote>
                <figcaption>${e.autor} <span>· ${e.fonte}</span></figcaption>
              </figure>
            </li>`).join(``)}
        </ul>

        <p class="depoimentos__link revelar">
          <a class="link-seta link-seta--claro" href="${r}" target="_blank" rel="noopener">
            Ver avaliações no Google ${l.seta}<span class="sr-only"> (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>`}var Z=(e,t=`Fale`)=>` <a href="${o(`Olá! Tenho uma dúvida sobre ${e}.`)}" target="_blank" rel="noopener">${t} com a nossa equipe<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span></a>.`,ge=[{pergunta:`Móveis planejados são caros mesmo?`,resposta:`<p>Depende do que entra na conta. O valor de um planejado varia com o tamanho do ambiente, os acabamentos e o que vai dentro de cada armário. A diferença é que você investe num móvel feito para o seu espaço, sem pagar por medidas que não servem ou por cantos desperdiçados.</p>
      <p>Para saber quanto fica o seu projeto, o melhor caminho é conversar com a gente com as medidas e as ideias em mãos.${Z(`valores de móveis planejados`)}</p>`},{pergunta:`Vale mesmo a pena investir em móveis planejados?`,resposta:`<p>Quando o projeto é bem pensado, sim. O planejado aproveita cada parede e cada canto, organiza a rotina e deixa o ambiente com a sua cara — algo difícil de conseguir com móveis prontos, que seguem medidas padrão.</p>
      <p>É por isso que a gente começa entendendo como você usa o espaço, antes de desenhar.</p>`},{pergunta:`O que avaliar além da estética?`,resposta:`<p>Escolher planejado só pela estética é o primeiro erro. Bonito por fora, inteligente por dentro: vale olhar a divisão interna dos armários, a circulação no ambiente, a altura das bancadas, a iluminação e o acabamento.</p>
      <p>E também quem vai fazer: atendimento, cuidado na entrega e cumprimento do que foi combinado fazem toda a diferença no resultado.</p>`},{pergunta:`Vocês também fazem mesas e estofados?`,resposta:`<p>Sim. Além dos móveis planejados, fazemos mesas e estofados sob medida.${Z(`mesas e estofados sob medida`)}</p>`},{pergunta:`Vocês fazem entrega?`,resposta:`<p>Sim, a Movelaria faz entrega. Para confirmar a sua região e os detalhes da montagem,${Z(`entrega e montagem`,`fale`)}</p>`},{pergunta:`Como faço para começar meu projeto?`,resposta:`<p>É só chamar a gente no WhatsApp ou visitar a loja em Guaíba. A partir da conversa, combinamos a medição e partimos para o projeto.${Z(`como começar meu projeto`)}</p>`}];function _e(){return`
    <section class="secao faq" id="perguntas" aria-labelledby="faq-titulo">
      <div class="container faq__grade">
        <header class="faq__topo revelar">
          ${H(`Perguntas frequentes`)}
          <h2 id="faq-titulo">As dúvidas que mais ouvimos.</h2>
          <p>Respondidas sem rodeio. Se a sua não estiver aqui, chame a gente no WhatsApp.</p>
        </header>

        <div class="acordeao revelar">
          ${ge.map((e,t)=>`
            <div class="acordeao__item">
              <h3 class="acordeao__titulo">
                <button type="button" class="acordeao__botao" aria-expanded="false" aria-controls="faq-resp-${t}" id="faq-perg-${t}">
                  <span>${e.pergunta}</span>
                  <span class="acordeao__icone" aria-hidden="true"></span>
                </button>
              </h3>
              <div class="acordeao__painel" id="faq-resp-${t}" role="region" aria-labelledby="faq-perg-${t}" hidden>
                <div class="acordeao__conteudo">${e.resposta}</div>
              </div>
            </div>`).join(``)}
        </div>
      </div>
    </section>`}function Q(){document.querySelectorAll(`.acordeao__botao`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t)),document.getElementById(e.getAttribute(`aria-controls`)).hidden=t})})}function ve(){return`
    <section class="secao contato" id="contato" aria-labelledby="contato-titulo">
      <div class="container contato__grade">
        <div class="contato__info revelar">
          ${H(`Contato`)}
          <h2 id="contato-titulo">Vamos tirar seu projeto <span class="destaque">do papel?</span></h2>
          <p class="contato__intro">Conte pra gente o que você imagina. Respondemos pelo WhatsApp.</p>

          <dl class="contato__dados">
            <div>
              <dt>Telefone e WhatsApp</dt>
              <dd>
                <a class="contato__telefone" href="${e.telefoneLink}">${e.telefoneExibicao}</a>
                <a class="link-seta" href="${o()}" target="_blank" rel="noopener">Chamar no WhatsApp ${l.seta}<span class="sr-only"> (abre em nova aba)</span></a>
              </dd>
            </div>
            <div>
              <dt>Endereço</dt>
              <dd>
                <address>${e.endereco.rua}, ${e.endereco.bairro}<br>${e.endereco.cidade} — ${e.endereco.uf}, CEP ${e.endereco.cep}</address>
                <div class="mapa" data-mapa>
                  <a class="link-seta" href="${r}" target="_blank" rel="noopener">Abrir no Google Maps ${l.seta}<span class="sr-only"> (nova aba)</span></a>
                  <button type="button" class="mapa__carregar" data-carregar-mapa>Ver mapa aqui</button>
                  <span class="mapa__aviso">O mapa só é carregado do Google se você clicar.</span>
                </div>
              </dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>
                <span class="pendente">${e.horario}</span>
                <span class="contato__obs">${e.horarioObservacao}</span>
              </dd>
            </div>
            ${e.fazEntrega?`<div>
              <dt>Entrega</dt>
              <dd>Fazemos entrega dos móveis.</dd>
            </div>`:``}
          </dl>
        </div>

          <form class="form revelar" novalidate data-form aria-labelledby="form-titulo">
            <h3 id="form-titulo" class="form__titulo">Peça um orçamento</h3>
            <p class="form__dica">Campos com * são obrigatórios.</p>

            <div class="campo">
              <label for="f-nome">Nome *</label>
              <input id="f-nome" name="nome" type="text" autocomplete="name" required aria-describedby="f-nome-erro">
              <p class="campo__erro" id="f-nome-erro" hidden></p>
            </div>

            <div class="campo">
              <label for="f-telefone">Telefone / WhatsApp *</label>
              <input id="f-telefone" name="telefone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(51) 90000-0000" required aria-describedby="f-telefone-erro">
              <p class="campo__erro" id="f-telefone-erro" hidden></p>
            </div>

            <div class="campo">
              <label for="f-ambiente">Ambiente de interesse *</label>
              <select id="f-ambiente" name="ambiente" required aria-describedby="f-ambiente-erro">
                <option value="">Selecione</option>
                ${V.map(e=>`<option value="${e.nome}">${e.nome}</option>`).join(``)}
                <option value="Outro">Outro</option>
              </select>
              <p class="campo__erro" id="f-ambiente-erro" hidden></p>
            </div>

            <div class="campo">
              <label for="f-mensagem">Mensagem</label>
              <textarea id="f-mensagem" name="mensagem" rows="4" placeholder="Conte um pouco sobre o espaço e o que você imagina"></textarea>
            </div>

            <p class="form__lgpd">Seus dados não ficam salvos neste site: ao enviar, eles são usados apenas para montar a mensagem que abre no seu WhatsApp, e você decide se envia. Usamos essas informações somente para responder ao seu pedido, conforme a LGPD.</p>

            <button type="submit" class="botao botao--primario botao--grande botao--largo">${l.whatsapp} Enviar pelo WhatsApp</button>
            <div class="form__status" role="status" aria-live="polite" data-form-status></div>
          </form>
      </div>
    </section>`}function ye(e){let t=[],n=e.nome.value.trim(),r=e.telefone.value.replace(/\D/g,``);return n.length<2&&t.push([`nome`,`Informe seu nome.`]),(r.length<10||r.length>13)&&t.push([`telefone`,`Informe um telefone com DDD, por exemplo (51) 90000-0000.`]),e.ambiente.value||t.push([`ambiente`,`Escolha o ambiente de interesse.`]),t}function be(){let e=document.querySelector(`[data-form]`),n=e.querySelector(`[data-form-status]`),a=t=>{e[t].removeAttribute(`aria-invalid`);let n=e.querySelector(`#f-${t}-erro`);n.hidden=!0,n.textContent=``};[`nome`,`telefone`,`ambiente`].forEach(t=>{e[t].addEventListener(`input`,()=>{e[t].getAttribute(`aria-invalid`)&&a(t)})}),e.addEventListener(`submit`,t=>{t.preventDefault(),[`nome`,`telefone`,`ambiente`].forEach(a),n.className=`form__status`,n.textContent=``;let r=ye(e);if(r.length){r.forEach(([t,n])=>{e[t].setAttribute(`aria-invalid`,`true`);let r=e.querySelector(`#f-${t}-erro`);r.textContent=n,r.hidden=!1}),n.classList.add(`form__status--erro`),n.textContent=r.length===1?`Confira o campo destacado.`:`Confira os ${r.length} campos destacados.`,e[r[0][0]].focus();return}let i=[`Olá! Vim pelo site da Movelaria e gostaria de um orçamento.`,``,`Nome: ${e.nome.value.trim()}`,`Telefone: ${e.telefone.value.trim()}`,`Ambiente: ${e.ambiente.value}`],s=e.mensagem.value.trim();s&&i.push(`Mensagem: ${s}`);let c=o(i.join(`
`));window.open(c,`_blank`,`noopener`),n.classList.add(`form__status--ok`),n.innerHTML=`Tudo certo! Abrimos o WhatsApp com a sua mensagem. Se ele não abriu, <a href="${c}" target="_blank" rel="noopener">toque aqui</a>.`}),document.querySelector(`[data-carregar-mapa]`).addEventListener(`click`,()=>{let e=document.querySelector(`[data-mapa]`),n=document.createElement(`iframe`);n.src=i,n.title=`Mapa: ${t}`,n.loading=`lazy`,n.referrerPolicy=`no-referrer-when-downgrade`,n.className=`mapa__iframe`;let a=document.createElement(`a`);a.href=r,a.target=`_blank`,a.rel=`noopener`,a.className=`mapa__abrir`,a.textContent=`Abrir no Google Maps`,e.replaceWith(n),n.after(a),n.focus()})}function xe(){return`
    <footer class="footer" data-footer>
      <div class="container footer__grade">
        <div class="footer__marca">
          ${d(`marca__texto--rodape`)}
          <p>${e.bio}<br>${e.bioAnos}.</p>
        </div>

        <div>
          <h2 class="footer__titulo">Contato</h2>
          <ul class="footer__lista">
            <li>${l.telefone}<a href="${e.telefoneLink}">${e.telefoneExibicao}</a></li>
            <li>${l.whatsapp}<a href="${o()}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li>${l.instagram}<a href="${e.instagram.url}" target="_blank" rel="noopener">${e.instagram.usuario}</a></li>
          </ul>
        </div>

        <div>
          <h2 class="footer__titulo">Endereço</h2>
          <address class="footer__endereco">
            ${e.endereco.rua}, ${e.endereco.bairro}<br>
            ${e.endereco.cidade} — ${e.endereco.uf}<br>
            CEP ${e.endereco.cep}
          </address>
          <a class="footer__mapa" href="${r}" target="_blank" rel="noopener">Ver no mapa</a>
        </div>
      </div>
      <div class="container footer__base">
        <p>© <span data-ano></span> ${e.nome}. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>`}function Se(){document.querySelector(`[data-ano]`).textContent=new Date().getFullYear()}function Ce(){return`
    <a class="fab" href="${o()}" target="_blank" rel="noopener" data-fab aria-label="Pedir orçamento pelo WhatsApp (abre em nova aba)">
      ${l.whatsapp}
    </a>`}function we(){let e=document.querySelector(`[data-fab]`),t=document.getElementById(`inicio`),n=[document.querySelector(`[data-form]`),document.querySelector(`[data-footer]`)],r={passouHero:!1,bloqueado:new Set},i=()=>{let t=r.passouHero&&r.bloqueado.size===0;e.classList.toggle(`fab--visivel`,t),e.tabIndex=t?0:-1,e.setAttribute(`aria-hidden`,String(!t))};new IntersectionObserver(([e])=>{r.passouHero=!e.isIntersecting,i()}).observe(t);let a=new IntersectionObserver(e=>{e.forEach(e=>e.isIntersecting?r.bloqueado.add(e.target):r.bloqueado.delete(e.target)),i()});n.forEach(e=>e&&a.observe(e)),i()}document.querySelector(`#app`).innerHTML=`
  ${f()}
  <main id="conteudo" tabindex="-1">
    ${z()}
    ${oe()}
    ${le()}
    ${fe()}
    ${pe()}
    ${he()}
    ${_e()}
    ${ve()}
  </main>
  ${xe()}
  ${Ce()}
`,p(),B(),ue(),se(),Q(),be(),Se(),we(),_();var $=document.querySelectorAll(`.revelar`);if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window))$.forEach(e=>e.classList.add(`visivel`));else{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visivel`),e.unobserve(t.target))})},{rootMargin:`0px 0px -8% 0px`,threshold:.08});$.forEach(t=>e.observe(t))}