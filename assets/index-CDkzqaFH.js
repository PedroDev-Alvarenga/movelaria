const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrbitControls-Dh36RsEH.js","assets/three.module-4gI5Z-_B.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nome:`Movelaria`,nomeInstagram:`Movelaria | Móveis Planejados`,bio:`Móveis planejados, mesas e estofados sob medida.`,bioAnos:`Há 25 anos transformando sonhos em realidade`,anos:25,logo:``,dominio:`[DOMÍNIO DO SITE]`,telefoneExibicao:`(51) 3055-1625`,telefoneLink:`tel:+555130551625`,whatsappNumero:`555130551625`,horario:`[HORÁRIO COMPLETO]`,horarioObservacao:`No Google consta: abre sex. às 09:00.`,cnpj:`[CNPJ]`,fazEntrega:!0,endereco:{rua:`Av. Ismael Chaves Barcelos, 99`,bairro:`Centro`,cidade:`Guaíba`,uf:`RS`,cep:`92704-720`},instagram:{usuario:`@movelaria_rodrigo`,url:`https://www.instagram.com/movelaria_rodrigo/`,seguidores:`1.276`},threads:{usuario:`@movelaria_rodrigo`,url:`https://www.threads.net/@movelaria_rodrigo`},proprietario:`[INSTAGRAM DO RODRIGO: confirmar]`,google:{nota:`4,9`,notaNumero:4.9,totalAvaliacoes:8}},t=`${e.endereco.rua}, ${e.endereco.bairro}, ${e.endereco.cidade} — ${e.endereco.uf}, CEP ${e.endereco.cep}`,n=encodeURIComponent(`${e.endereco.rua}, ${e.endereco.bairro}, ${e.endereco.cidade} - ${e.endereco.uf}, ${e.endereco.cep}`),r=`https://www.google.com/maps/search/?api=1&query=${n}`,i=`https://www.google.com/maps?q=${n}&output=embed`,a=`Olá! Vim pelo site da Movelaria e gostaria de pedir um orçamento.`;function o(t=a){return`https://wa.me/${e.whatsappNumero}?text=${encodeURIComponent(t)}`}function s(e){return`Olá! Vim pelo site da Movelaria e gostaria de um orçamento para ${e}.`}var c=(e,t=``)=>`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" ${t}>${e}</svg>`,l={whatsapp:`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></svg>`,telefone:c(`<path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 5.3 5.3l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/>`),local:c(`<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>`),relogio:c(`<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>`),entrega:c(`<path d="M3 6h11v10H3zM14 9.5h4l3 3.5v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>`),instagram:c(`<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/>`),seta:c(`<path d="M5 12h14M13 6l6 6-6 6"/>`),setaEsq:c(`<path d="M19 12H5M11 6l-6 6 6 6"/>`),fechar:c(`<path d="M6 6l12 12M18 6 6 18"/>`),menu:c(`<path d="M4 7h16M4 12h16M4 17h16"/>`),mais:c(`<path d="M12 5v14M5 12h14"/>`),estrela:`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>`,mapa:c(`<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>`),aspas:`<svg viewBox="0 0 48 48" width="40" height="40" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20 12c-6.6 2.2-11 8-11 15v9h12V24h-6c0-4.2 2.5-7.6 6.4-9.1zm19 0c-6.6 2.2-11 8-11 15v9h12V24h-6c0-4.2 2.5-7.6 6.4-9.1z"/></svg>`,cozinha:c(`<rect x="3" y="3.5" width="18" height="6" rx="1"/><path d="M3 13h18v7.5H3zM12 13v7.5M9.5 6.5h-2M16.5 6.5h-2M3 13l1-1h16l1 1"/>`),closet:c(`<rect x="3.5" y="3" width="17" height="18" rx="1.2"/><path d="M12 3v18M7 7.5h2M15 7.5h2M6.5 11h3v6.5M14.5 11h3"/>`),quarto:c(`<path d="M3 18.5V8M21 18.5v-5.5H3M3 15.5h18M6 13v-2.5h4.5V13"/>`),office:c(`<rect x="5.5" y="4" width="13" height="8.5" rx="1"/><path d="M3 15.5h18M5 15.5v4.5M19 15.5v4.5M10 12.5v3M14 12.5v3"/>`),sala:c(`<rect x="3" y="3.5" width="18" height="11" rx="1"/><rect x="7.5" y="6" width="9" height="5.5" rx=".5"/><path d="M3 18h18v2.5H3z"/>`),banheiro:c(`<rect x="7" y="3" width="10" height="7" rx="3.5"/><path d="M4 13h16v7H4zM12 13v7M8.5 16.5h1M14.5 16.5h1"/>`),jantar:c(`<path d="M3 10.5h18M5 10.5V20M19 10.5V20M8.5 6.5h7M12 3.5v3"/><path d="M3 15h4M17 15h4"/>`),mesa:c(`<path d="M2.5 9h19M5 9l-1.5 11M19 9l1.5 11M7.5 9v6.5h9V9"/>`),estofado:c(`<path d="M5 10V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5V10"/><path d="M3 11.5a2 2 0 0 1 4 0V14h10v-2.5a2 2 0 0 1 4 0V18H3zM5 18v2M19 18v2"/>`),girar:c(`<path d="M20 11A8 8 0 1 0 17.5 17.2"/><path d="M20 5.5V11h-5.5"/>`)},u=[{href:`#ambientes`,texto:`Ambientes`},{href:`#projetos`,texto:`Projetos`},{href:`#como-funciona`,texto:`Como Funciona`},{href:`#sobre`,texto:`Sobre`},{href:`#contato`,texto:`Contato`}];function d(t=``){return e.logo?`<img class="marca__logo ${t}" src="/movelaria/${e.logo}" alt="${e.nome}" width="180" height="44">`:`<span class="marca__texto ${t}">MOVELARIA</span>`}function f(){return`
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
    </header>`}function p(){let e=document.querySelector(`[data-header]`),t=e.querySelector(`[data-menu-toggle]`),n=e.querySelector(`[data-menu]`),r=e.querySelector(`[data-menu-rotulo]`),i=window.matchMedia(`(max-width: 899px)`),a=()=>{let e=t.getAttribute(`aria-expanded`)===`true`;n.inert=i.matches&&!e},o=()=>{t.setAttribute(`aria-expanded`,`true`),r.textContent=`Fechar menu`,e.classList.add(`header--menu-aberto`),document.body.classList.add(`menu-aberto`),a(),requestAnimationFrame(()=>n.querySelector(`a`).focus())},s=(n=!0)=>{t.getAttribute(`aria-expanded`)===`true`&&(t.setAttribute(`aria-expanded`,`false`),r.textContent=`Abrir menu`,e.classList.remove(`header--menu-aberto`),document.body.classList.remove(`menu-aberto`),a(),n&&t.focus())};t.addEventListener(`click`,()=>{t.getAttribute(`aria-expanded`)===`true`?s():o()}),n.addEventListener(`click`,e=>{e.target.closest(`a`)&&s(!1)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&s()}),e.addEventListener(`keydown`,e=>{if(e.key!==`Tab`||t.getAttribute(`aria-expanded`)!==`true`)return;let r=[t,...n.querySelectorAll(`a`)],i=r[0],a=r[r.length-1];e.shiftKey&&document.activeElement===i?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),i.focus())}),i.addEventListener(`change`,()=>{s(!1),a()}),a();let c=()=>e.classList.toggle(`header--rolado`,window.scrollY>8);window.addEventListener(`scroll`,c,{passive:!0}),c()}var m=[{arquivo:`cozinha-bancada-led.jpg`,ambiente:`cozinha`,titulo:`Cozinha com bancada`,alt:`Cozinha planejada com bancada de granito preto, armários em madeira clara e fita de LED embutida`,tipo:`render-3d`,largura:247,altura:327},{arquivo:`closet-iluminado.jpg`,ambiente:`closet`,titulo:`Closet com iluminação`,alt:`Closet planejado em tons claros, com cabideiros, gavetas, prateleiras de calçados e fita de LED embutida`,tipo:`render-3d`,largura:247,altura:328},{arquivo:`quarto-home-office-recorte.jpg`,ambiente:`quarto`,titulo:`Quarto com home office`,alt:`Quarto planejado com armários suspensos, painel de madeira clara com LED e bancada de estudo integrada à cama`,tipo:`render-3d`,largura:246,altura:284},{arquivo:`cozinha-madeira-clara-recorte.jpg`,ambiente:`cozinha`,titulo:`Cozinha em madeira clara`,alt:`Cozinha planejada com armários brancos e em madeira clara, nicho com iluminação e bancada escura`,tipo:`render-3d`,largura:244,altura:296},{arquivo:``,ambiente:`sala`,titulo:`Painel para TV`,alt:`Sala com painel e rack planejados`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`banheiro`,titulo:`Gabinete de banheiro`,alt:`Banheiro com gabinete sob medida`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`home-office`,titulo:`Home office`,alt:`Home office planejado`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`sala-de-jantar`,titulo:`Sala de jantar`,alt:`Sala de jantar com móveis sob medida`,tipo:`projeto-entregue`}],h=`/movelaria/`;function g({arquivo:e=``,alt:t=``,legenda:n=``,largura:r=1200,altura:i=900,lazy:a=!0,classe:o=``,pasta:s=`projetos`,proporcaoReal:c=!1}={}){let l=e?`<img src="${h}${s}/${e}" alt="${t}" width="${r}" height="${i}" ${a?`loading="lazy"`:`fetchpriority="high"`} decoding="async" data-imagem-foto>`:``;return`
    <div class="imagem ${o} ${e&&c?`imagem--real`:``}" ${e&&c?`style="--r:${(r/i).toFixed(4)}"`:``} ${e?``:`data-vazia`}>
      <div class="imagem__ph" ${e?`aria-hidden="true"`:`role="img" aria-label="${t||n}"`}>
        <span class="imagem__luz" aria-hidden="true"></span>
        ${n?`<span class="imagem__legenda" aria-hidden="true">${n}</span>`:``}
      </div>
      ${l}
    </div>`}function _(e=document){e.querySelectorAll(`img[data-imagem-foto]`).forEach(e=>{let t=e.closest(`.imagem`),n=()=>t.classList.add(`imagem--carregada`),r=()=>{let n=t.querySelector(`.imagem__ph`);n.removeAttribute(`aria-hidden`),n.setAttribute(`role`,`img`),n.setAttribute(`aria-label`,e.alt),e.remove()};e.complete?e.naturalWidth?n():r():(e.addEventListener(`load`,n,{once:!0}),e.addEventListener(`error`,r,{once:!0}))})}var v=`modulepreload`,y=function(e){return`/movelaria/`+e},b={},x=function(e){return e.pathname.endsWith(`.css`)},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=y(t,n);let r=s(t);if(r.href in b)return;b[r.href]=!0;let i=x(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:v,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C={madeira:13081186,madeiraClara:14927775,salvia:10333839,grafite:3816768,creme:16052198,led:16766346,terracota:12675391,folha:7309923},w;function T(){return w||=Promise.all([S(()=>import(`./three.module-4gI5Z-_B.js`),[]),S(()=>import(`./OrbitControls-Dh36RsEH.js`),__vite__mapDeps([0,1]))]).then(([e,{OrbitControls:t}])=>({THREE:e,OrbitControls:t})),w}function E(e){let t=new e.Group,n=new e.MeshStandardMaterial({color:C.madeiraClara,roughness:.75}),r=new e.MeshStandardMaterial({color:C.creme,roughness:.4}),i=new e.MeshStandardMaterial({color:C.salvia,roughness:.7}),a=new e.MeshStandardMaterial({color:C.grafite,roughness:.5,metalness:.15}),o=new e.MeshStandardMaterial({color:C.led,emissive:C.led,emissiveIntensity:1.1}),s=new e.MeshStandardMaterial({color:C.terracota,roughness:.8}),c=new e.MeshStandardMaterial({color:C.folha,roughness:.6}),l=e=>(e.castShadow=!0,e.receiveShadow=!0,e),u=[1.3,1.3,1.3,1.3],d=-2.6;u.forEach((i,a)=>{let o=l(new e.Mesh(new e.BoxGeometry(i-.06,1.05,.58),a===2?r:n));o.position.set(d+i/2,1.35,0),t.add(o),d+=i});let f=new e.Mesh(new e.BoxGeometry(5.1,.04,.5),o);f.position.set(0,.8,.02),t.add(f);let p=new e.PointLight(C.led,1.1,2.6,2);p.position.set(0,.74,.5),t.add(p);let m=l(new e.Mesh(new e.BoxGeometry(5.3,.12,.68),r));m.position.y=.56,t.add(m);let h=l(new e.Mesh(new e.BoxGeometry(3.75,1.05,.6),i));h.position.set(-.75,-.02,0),t.add(h);let g=l(new e.Mesh(new e.BoxGeometry(1.1,1.05,.6),a));g.position.set(2.15,-.02,0),t.add(g);let _=new e.Mesh(new e.BoxGeometry(5.3,.08,.68),a);_.position.set(0,-.58,0),t.add(_);let v=l(new e.Mesh(new e.CylinderGeometry(.11,.09,.22,10),s));v.position.set(-1.95,.75,.38),t.add(v),[-1,0,1].forEach(n=>{let r=l(new e.Mesh(new e.ConeGeometry(.09,.4,6),c));r.position.set(-1.95+n*.07,1+Math.abs(n)*.02,.38),r.rotation.z=n*.4,t.add(r)});let y=new e.Mesh(new e.PlaneGeometry(9,6),new e.ShadowMaterial({opacity:.18}));return y.rotation.x=-Math.PI/2,y.position.y=-1.12,y.receiveShadow=!0,t.add(y),t.scale.setScalar(.85),t}async function D(e){if(!e)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,n,r;try{({THREE:n,OrbitControls:r}=await T())}catch{e.dataset.erro3d=``;return}if(!e.isConnected)return;let i;try{i=new n.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:`low-power`})}catch{e.dataset.erro3d=``;return}let a=new n.Scene,o=new n.PerspectiveCamera(32,1,.1,30),s=new n.Vector3(0,.1,0),c=-.5,u=1.22;i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=n.PCFSoftShadowMap,i.outputColorSpace=n.SRGBColorSpace,i.toneMapping=n.ACESFilmicToneMapping,i.toneMappingExposure=1.05,i.domElement.setAttribute(`aria-hidden`,`true`),e.appendChild(i.domElement),a.add(E(n)),a.add(new n.HemisphereLight(16774111,13483942,.65));let d=new n.DirectionalLight(16759161,1.15);d.position.set(4,4.5,3),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),d.shadow.camera.near=1,d.shadow.camera.far=12,a.add(d);let f=new n.DirectionalLight(14673650,.35);f.position.set(-4,2,-2),a.add(f),o.position.setFromSphericalCoords(t?7.8:10.6,u,c).add(s),o.lookAt(s);let p=new r(o,i.domElement);p.target.copy(s),p.enableZoom=!1,p.enablePan=!1,p.enableDamping=!0,p.dampingFactor=.08,p.rotateSpeed=.5,p.minAzimuthAngle=-1.1,p.maxAzimuthAngle=.09999999999999998,p.minPolarAngle=1.04,p.maxPolarAngle=1.4;let m=()=>{let{clientWidth:t,clientHeight:n}=e;t&&n&&(i.setSize(t,n),o.aspect=t/n,o.updateProjectionMatrix())};m();let h=()=>{p.update(),i.render(a,o)},g=!1,_=null,v=()=>{if(!g){_=null;return}h(),_=requestAnimationFrame(v)},y=()=>{_===null&&(_=requestAnimationFrame(v))},b=!1,x=()=>{if(b)return;b=!0,e.classList.add(`hero__3d--pronto`);let n=e.closest(`.hero__visual`)?.querySelector(`[data-legenda-hero]`);if(n&&(n.innerHTML=`
        <span class="hero__etapa hero__etapa--1">${l.girar} Arraste</span>
        <span class="hero__seta" aria-hidden="true">→</span>
        <span class="hero__etapa hero__etapa--2">veja de outro ângulo</span>
      `),t){h();return}let r=performance.now(),i=e=>{let t=Math.min(1,(e-r)/1100),n=10.6+-2.8*(1-(1-t)**3);o.position.setFromSphericalCoords(n,u,c).add(s),o.lookAt(s),h(),t<1&&requestAnimationFrame(i)};requestAnimationFrame(i)};new IntersectionObserver(e=>{e.forEach(e=>{g=e.isIntersecting&&!document.hidden,g&&(y(),x())})},{threshold:.15}).observe(e),document.addEventListener(`visibilitychange`,()=>{g=!document.hidden&&g,g&&y()}),new ResizeObserver(()=>{m(),h()}).observe(e)}function O(){let e=e=>`class="traco" pathLength="1" style="--d:${e}s"`;return`
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
  </svg>`}function k(){let t=m.find(e=>e.hero&&e.arquivo);return`
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
              ${O()}
            </div>
          </div>
          <figcaption class="hero__legenda" data-legenda-hero>
            <span class="hero__etapa hero__etapa--1">Do desenho</span>
            <span class="hero__seta" aria-hidden="true">→</span>
            <span class="hero__etapa hero__etapa--2">ao móvel pronto</span>
          </figcaption>
        </figure>
      </div>
    </section>`}function A(){let e=document.querySelector(`[data-desenho]`);e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add(`desenhar`)));let t=document.querySelector(`[data-hero-3d]`);t&&D(t)}var j=[{id:`cozinha`,nome:`Cozinha`,frase:`Armários, bancadas e nichos pensados para a rotina de quem cozinha.`,mensagem:`uma cozinha planejada`,icone:`cozinha`},{id:`closet`,nome:`Closet`,frase:`Cada peça no seu lugar, com organização feita para você.`,mensagem:`um closet sob medida`,icone:`closet`},{id:`quarto`,nome:`Quarto`,frase:`Quartos de casal, de solteiro e infantis com o aproveitamento de cada canto.`,mensagem:`um quarto planejado`,icone:`quarto`},{id:`home-office`,nome:`Home office`,frase:`Um canto de trabalho funcional, que conversa com o resto da casa.`,mensagem:`um home office planejado`,icone:`office`},{id:`sala`,nome:`Sala (painéis e racks)`,frase:`Painéis, racks e iluminação para deixar a sala mais acolhedora.`,mensagem:`painel ou rack para a sala`,icone:`sala`},{id:`banheiro`,nome:`Banheiro`,frase:`Gabinetes e armários sob medida, mesmo nos espaços menores.`,mensagem:`móveis para banheiro`,icone:`banheiro`},{id:`sala-de-jantar`,nome:`Sala de jantar`,frase:`Ambientes para reunir a família em volta da mesa.`,mensagem:`uma sala de jantar`,icone:`jantar`},{id:`mesas`,nome:`Mesas sob medida`,frase:`Mesas feitas no tamanho certo para o seu espaço.`,mensagem:`uma mesa sob medida`,icone:`mesa`},{id:`estofados`,nome:`Estofados sob medida`,frase:`Estofados feitos sob medida para o seu ambiente.`,mensagem:`estofados sob medida`,icone:`estofado`}];function M(){return`
    <section class="secao ambientes" id="ambientes" aria-labelledby="ambientes-titulo">
      <div class="container">
        <header class="secao__topo revelar">
          <p class="pilula">Ambientes</p>
          <h2 id="ambientes-titulo">Seu espaço merece mais do que <span class="destaque">móveis prontos.</span></h2>
          <p class="secao__intro">Projetamos para a casa inteira — e também fazemos mesas e estofados sob medida. Escolha o ambiente e fale direto com a gente.</p>
        </header>

        <ul class="ambientes__grade">
          ${j.map(e=>`
            <li class="revelar">
              <a class="ambiente-card" href="${o(s(e.mensagem))}" target="_blank" rel="noopener">
                <span class="ambiente-card__icone">${l[e.icone]}</span>
                <span class="ambiente-card__nome">${e.nome}</span>
                <span class="ambiente-card__frase">${e.frase}</span>
                <span class="ambiente-card__acao">Pedir orçamento ${l.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span></span>
              </a>
            </li>`).join(``)}
        </ul>
      </div>
    </section>`}var N=e=>j.find(t=>t.id===e)?.nome??e;function P(e){return e.tipo===`render-3d`?`<span class="selo-3d">Projeto 3D</span>`:``}function F(){return`
    <section class="secao galeria" id="projetos" aria-labelledby="projetos-titulo">
      <div class="container">
        <header class="secao__topo revelar">
          <p class="pilula">Projetos</p>
          <h2 id="projetos-titulo">Bonito por fora. <span class="destaque">Inteligente por dentro.</span></h2>
          <p class="secao__intro">Alguns ambientes projetados pela Movelaria. Imagens com o selo “Projeto 3D” são renderizações de projeto.</p>
        </header>

        <div class="filtros revelar" role="group" aria-label="Filtrar projetos por ambiente">
          <button type="button" class="filtro" aria-pressed="true" data-filtro="todos">Todos</button>
          ${j.filter(e=>m.some(t=>t.ambiente===e.id)).map(e=>`<button type="button" class="filtro" aria-pressed="false" data-filtro="${e.id}">${e.nome}</button>`).join(``)}
        </div>
        <p class="sr-only" aria-live="polite" data-galeria-status></p>

        <ul class="galeria__grade" data-galeria>
          ${m.map((e,t)=>`
            <li class="galeria__item" data-ambiente="${e.ambiente}">
              <button type="button" class="galeria__botao" data-abrir="${t}">
                <span class="sr-only">Ampliar: </span>
                ${g({arquivo:e.arquivo,alt:e.alt,legenda:N(e.ambiente),largura:e.largura,altura:e.altura})}
                ${P(e)}
                <span class="galeria__info">
                  <span class="galeria__titulo">${e.titulo}</span>
                  <span class="galeria__ambiente">${N(e.ambiente)}</span>
                </span>
              </button>
            </li>`).join(``)}
        </ul>

        <div class="galeria__cta revelar">
          <p>Gostou de algum ambiente? <strong>Vamos tirar seu projeto do papel?</strong></p>
          <a class="botao botao--primario" href="${o(`Olá! Vi os projetos no site da Movelaria e gostaria de solicitar meu projeto.`)}" target="_blank" rel="noopener">
            ${l.whatsapp} Solicite seu projeto
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
    </section>`}function I(){let e=document.getElementById(`projetos`),t=e.querySelector(`[data-galeria]`),n=[...t.querySelectorAll(`.galeria__item`)],r=e.querySelector(`[data-galeria-status]`),i=e.querySelector(`[data-lightbox]`),a=m.map((e,t)=>t),o=0,s=null;e.querySelectorAll(`[data-filtro]`).forEach(t=>{t.addEventListener(`click`,()=>{let i=t.dataset.filtro;e.querySelectorAll(`[data-filtro]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e===t))),a=[],n.forEach((e,t)=>{let n=i===`todos`||e.dataset.ambiente===i;e.hidden=!n,n&&a.push(t)}),r.textContent=`${a.length} ${a.length===1?`projeto`:`projetos`} em ${t.textContent}`})});let c=i.querySelector(`[data-midia]`);function l(e){o=e;let t=m[e],n=N(t.ambiente);c.innerHTML=g({arquivo:t.arquivo,alt:t.alt,legenda:n,largura:t.largura,altura:t.altura,lazy:!1,classe:`imagem--lightbox`,proporcaoReal:!0})+P(t),_(c),i.querySelector(`[data-titulo]`).textContent=t.titulo,i.querySelector(`[data-ambiente-lb]`).textContent=n+(t.tipo===`render-3d`?` · Projeto 3D`:``);let r=a.indexOf(e);i.querySelector(`[data-contador]`).textContent=`${r+1} / ${a.length}`}function u(e){let t=a.indexOf(o),n=a[(t+e+a.length)%a.length];l(n)}t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-abrir]`);t&&(s=t,l(Number(t.dataset.abrir)),i.showModal(),i.querySelector(`[data-fechar]`).focus())}),i.querySelector(`[data-fechar]`).addEventListener(`click`,()=>i.close()),i.querySelector(`[data-anterior]`).addEventListener(`click`,()=>u(-1)),i.querySelector(`[data-proximo]`).addEventListener(`click`,()=>u(1)),i.addEventListener(`keydown`,e=>{e.key===`ArrowLeft`&&u(-1),e.key===`ArrowRight`&&u(1)}),i.addEventListener(`click`,e=>{e.target===i&&i.close()}),i.addEventListener(`close`,()=>{document.body.classList.remove(`lightbox-aberto`),s?.focus()}),i.addEventListener(`toggle`,()=>{i.open&&document.body.classList.add(`lightbox-aberto`)})}var L=[{titulo:`Conversa e medição`,texto:`Você conta como é a sua rotina e o que espera do ambiente. Depois, tiramos as medidas do espaço.`},{titulo:`Projeto`,texto:`Desenhamos o móvel pensando no uso de cada gaveta, nicho e porta — e ajustamos com você até ficar do seu jeito.`},{titulo:`Fabricação`,texto:`Com o projeto aprovado, os móveis são produzidos sob medida, com atenção ao acabamento.`},{titulo:`Entrega e montagem`,texto:`Levamos tudo até a sua casa e montamos no lugar certo, dentro do que foi combinado.`}];function R(){return`
    <section class="secao processo" id="como-funciona" aria-labelledby="processo-titulo">
      <div class="container">
        <header class="secao__topo revelar">
          <p class="pilula">Como funciona</p>
          <h2 id="processo-titulo">Do primeiro papo ao móvel <span class="destaque">montado.</span></h2>
          <p class="secao__intro">Um trabalho sob medida tem etapas. A gente acompanha você em todas elas.</p>
        </header>

        <ol class="processo__lista">
          ${L.map((e,t)=>`
            <li class="passo revelar">
              <span class="passo__numero" aria-hidden="true">${String(t+1).padStart(2,`0`)}</span>
              <h3 class="passo__titulo">${e.titulo}</h3>
              <p>${e.texto}</p>
            </li>`).join(``)}
        </ol>

        <div class="processo__cta revelar">
          <a class="botao botao--primario" href="${o(`Olá! Quero começar meu projeto com a Movelaria. Podemos conversar?`)}" target="_blank" rel="noopener">
            ${l.whatsapp} Solicite seu projeto
          </a>
        </div>
      </div>
    </section>`}var z={arquivo:``,alt:`Equipe e oficina da Movelaria`,largura:1200,altura:1500};function B(){return`
    <section class="secao sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div class="container sobre__grade">
        <div class="sobre__visual revelar">
          ${g({...z,legenda:`Equipe e oficina`,classe:`imagem--retrato`})}
          <div class="sobre__anos" aria-hidden="true">
            <span class="sobre__anos-numero">${e.anos}</span>
            <span class="sobre__anos-texto">anos de<br>história</span>
          </div>
        </div>

        <div class="sobre__texto revelar">
          <p class="pilula">Sobre a Movelaria</p>
          <h2 id="sobre-titulo">${e.anos} anos transformando sonhos <span class="destaque">em realidade.</span></h2>
          <p>A Movelaria é uma loja de móveis em Guaíba que projeta e fabrica sob medida: móveis planejados para todos os ambientes, mesas e estofados.</p>
          <p>Por aqui, cada projeto começa numa conversa. Queremos entender como você usa o espaço antes de desenhar qualquer coisa — porque um bom móvel planejado precisa ser bonito, mas também precisa funcionar no seu dia a dia.</p>
          <p>Atendimento próximo, móveis de qualidade e compromisso com o que foi combinado: é isso que nossos clientes destacam, e é isso que a gente faz questão de manter.</p>
          <ul class="sobre__lista">
            <li><strong>Projeto</strong> pensado para o seu espaço</li>
            <li><strong>Fabricação</strong> sob medida</li>
            <li><strong>Entrega</strong> e montagem</li>
          </ul>
        </div>
      </div>
    </section>`}var V=[{texto:`Excelente atendimento, entrega dentro dos prazos, móveis de qualidade.`,autor:`Alexandre Rocha`,fonte:`Avaliação no Google`},{texto:`Ótimo local pra projetar e comprar móveis sob medida.`,autor:`Rangel Peter`,fonte:`Avaliação no Google`},{texto:`Excelente atendimento!`,autor:`Izabel Campos`,fonte:`Avaliação no Google`}];function H(){return`
    <section class="secao depoimentos" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div class="container">
        <header class="secao__topo secao__topo--claro revelar">
          <p class="pilula pilula--clara">Depoimentos</p>
          <h2 id="depoimentos-titulo">Quem já fez com a gente <span class="destaque">recomenda.</span></h2>
          <a class="selo-google" href="${r}" target="_blank" rel="noopener">
            <span class="selo-google__estrelas" aria-hidden="true">${l.estrela.repeat(5)}</span>
            <span><strong>${e.google.nota} no Google</strong> · ${e.google.totalAvaliacoes} avaliações</span>
            <span class="sr-only">(abre o Google Maps em nova aba)</span>
          </a>
        </header>

        <ul class="depoimentos__grade">
          ${V.map(e=>`
            <li class="revelar">
              <figure class="depoimento">
                <span class="depoimento__aspas">${l.aspas}</span>
                <blockquote><p>${e.texto}</p></blockquote>
                <figcaption>
                  <strong>${e.autor}</strong>
                  <span>${e.fonte}</span>
                </figcaption>
              </figure>
            </li>`).join(``)}
        </ul>
      </div>
    </section>`}var U=(e,t=`Fale`)=>` <a href="${o(`Olá! Tenho uma dúvida sobre ${e}.`)}" target="_blank" rel="noopener">${t} com a nossa equipe<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span></a>.`,W=[{pergunta:`Móveis planejados são caros mesmo?`,resposta:`<p>Depende do que entra na conta. O valor de um planejado varia com o tamanho do ambiente, os acabamentos e o que vai dentro de cada armário. A diferença é que você investe num móvel feito para o seu espaço, sem pagar por medidas que não servem ou por cantos desperdiçados.</p>
      <p>Para saber quanto fica o seu projeto, o melhor caminho é conversar com a gente com as medidas e as ideias em mãos.${U(`valores de móveis planejados`)}</p>`},{pergunta:`Vale mesmo a pena investir em móveis planejados?`,resposta:`<p>Quando o projeto é bem pensado, sim. O planejado aproveita cada parede e cada canto, organiza a rotina e deixa o ambiente com a sua cara — algo difícil de conseguir com móveis prontos, que seguem medidas padrão.</p>
      <p>É por isso que a gente começa entendendo como você usa o espaço, antes de desenhar.</p>`},{pergunta:`O que avaliar além da estética?`,resposta:`<p>Escolher planejado só pela estética é o primeiro erro. Bonito por fora, inteligente por dentro: vale olhar a divisão interna dos armários, a circulação no ambiente, a altura das bancadas, a iluminação e o acabamento.</p>
      <p>E também quem vai fazer: atendimento, cuidado na entrega e cumprimento do que foi combinado fazem toda a diferença no resultado.</p>`},{pergunta:`Vocês também fazem mesas e estofados?`,resposta:`<p>Sim. Além dos móveis planejados, fazemos mesas e estofados sob medida.${U(`mesas e estofados sob medida`)}</p>`},{pergunta:`Vocês fazem entrega?`,resposta:`<p>Sim, a Movelaria faz entrega. Para confirmar a sua região e os detalhes da montagem,${U(`entrega e montagem`,`fale`)}</p>`},{pergunta:`Como faço para começar meu projeto?`,resposta:`<p>É só chamar a gente no WhatsApp ou visitar a loja em Guaíba. A partir da conversa, combinamos a medição e partimos para o projeto.${U(`como começar meu projeto`)}</p>`}];function G(){return`
    <section class="secao faq" id="perguntas" aria-labelledby="faq-titulo">
      <div class="container faq__grade">
        <header class="secao__topo faq__topo revelar">
          <p class="pilula">Perguntas frequentes</p>
          <h2 id="faq-titulo">Móveis planejados são <span class="destaque">caros mesmo?</span></h2>
          <p class="secao__intro">As dúvidas que mais ouvimos — respondidas sem rodeio.</p>
        </header>

        <div class="acordeao revelar">
          ${W.map((e,t)=>`
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
    </section>`}function K(){document.querySelectorAll(`.acordeao__botao`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t)),document.getElementById(e.getAttribute(`aria-controls`)).hidden=t})})}function q(){return`
    <section class="secao contato" id="contato" aria-labelledby="contato-titulo">
      <div class="container">
        <div class="contato__chamada revelar">
          <p class="pilula pilula--clara">Contato</p>
          <h2 id="contato-titulo">Vamos tirar seu projeto <span class="destaque">do papel?</span></h2>
          <p>Conte pra gente o que você imagina. Respondemos pelo WhatsApp.</p>
        </div>

        <div class="contato__grade">
          <div class="contato__info revelar">
            <ul class="contato__lista">
              <li>
                <span class="contato__icone">${l.whatsapp}</span>
                <div>
                  <span class="contato__rotulo">Telefone e WhatsApp</span>
                  <a href="${e.telefoneLink}">${e.telefoneExibicao}</a>
                  <a class="contato__link-zap" href="${o()}" target="_blank" rel="noopener">Chamar no WhatsApp<span class="sr-only"> (abre em nova aba)</span></a>
                </div>
              </li>
              <li>
                <span class="contato__icone">${l.local}</span>
                <div>
                  <span class="contato__rotulo">Endereço</span>
                  <address>${e.endereco.rua}, ${e.endereco.bairro}<br>${e.endereco.cidade} — ${e.endereco.uf}, CEP ${e.endereco.cep}</address>
                </div>
              </li>
              <li>
                <span class="contato__icone">${l.relogio}</span>
                <div>
                  <span class="contato__rotulo">Horário</span>
                  <span class="pendente">${e.horario}</span>
                  <span class="contato__obs">${e.horarioObservacao}</span>
                </div>
              </li>
              ${e.fazEntrega?`<li>
                <span class="contato__icone">${l.entrega}</span>
                <div>
                  <span class="contato__rotulo">Entrega</span>
                  <span>Fazemos entrega dos móveis.</span>
                </div>
              </li>`:``}
            </ul>

            <div class="mapa">
              <div class="mapa__fachada" data-mapa>
                <span class="mapa__pino">${l.local}</span>
                <p class="mapa__endereco">${t}</p>
                <div class="mapa__acoes">
                  <a class="botao botao--primario" href="${r}" target="_blank" rel="noopener">${l.mapa} Abrir no Google Maps<span class="sr-only"> (nova aba)</span></a>
                  <button type="button" class="botao botao--secundario" data-carregar-mapa>Ver mapa aqui</button>
                </div>
                <p class="mapa__aviso">O mapa é carregado do Google só se você clicar.</p>
              </div>
            </div>
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
                ${j.map(e=>`<option value="${e.nome}">${e.nome}</option>`).join(``)}
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
      </div>
    </section>`}function J(e){let t=[],n=e.nome.value.trim(),r=e.telefone.value.replace(/\D/g,``);return n.length<2&&t.push([`nome`,`Informe seu nome.`]),(r.length<10||r.length>13)&&t.push([`telefone`,`Informe um telefone com DDD, por exemplo (51) 90000-0000.`]),e.ambiente.value||t.push([`ambiente`,`Escolha o ambiente de interesse.`]),t}function Y(){let e=document.querySelector(`[data-form]`),n=e.querySelector(`[data-form-status]`),a=t=>{e[t].removeAttribute(`aria-invalid`);let n=e.querySelector(`#f-${t}-erro`);n.hidden=!0,n.textContent=``};[`nome`,`telefone`,`ambiente`].forEach(t=>{e[t].addEventListener(`input`,()=>{e[t].getAttribute(`aria-invalid`)&&a(t)})}),e.addEventListener(`submit`,t=>{t.preventDefault(),[`nome`,`telefone`,`ambiente`].forEach(a),n.className=`form__status`,n.textContent=``;let r=J(e);if(r.length){r.forEach(([t,n])=>{e[t].setAttribute(`aria-invalid`,`true`);let r=e.querySelector(`#f-${t}-erro`);r.textContent=n,r.hidden=!1}),n.classList.add(`form__status--erro`),n.textContent=r.length===1?`Confira o campo destacado.`:`Confira os ${r.length} campos destacados.`,e[r[0][0]].focus();return}let i=[`Olá! Vim pelo site da Movelaria e gostaria de um orçamento.`,``,`Nome: ${e.nome.value.trim()}`,`Telefone: ${e.telefone.value.trim()}`,`Ambiente: ${e.ambiente.value}`],s=e.mensagem.value.trim();s&&i.push(`Mensagem: ${s}`);let c=o(i.join(`
`));window.open(c,`_blank`,`noopener`),n.classList.add(`form__status--ok`),n.innerHTML=`Tudo certo! Abrimos o WhatsApp com a sua mensagem. Se ele não abriu, <a href="${c}" target="_blank" rel="noopener">toque aqui</a>.`}),document.querySelector(`[data-carregar-mapa]`).addEventListener(`click`,()=>{let e=document.querySelector(`[data-mapa]`),n=document.createElement(`iframe`);n.src=i,n.title=`Mapa: ${t}`,n.loading=`lazy`,n.referrerPolicy=`no-referrer-when-downgrade`,n.className=`mapa__iframe`;let a=document.createElement(`a`);a.href=r,a.target=`_blank`,a.rel=`noopener`,a.className=`mapa__abrir`,a.textContent=`Abrir no Google Maps`,e.replaceWith(n),n.after(a),n.focus()})}function X(){return`
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
    </footer>`}function Z(){document.querySelector(`[data-ano]`).textContent=new Date().getFullYear()}function Q(){return`
    <a class="fab" href="${o()}" target="_blank" rel="noopener" data-fab aria-label="Pedir orçamento pelo WhatsApp (abre em nova aba)">
      ${l.whatsapp}
    </a>`}function ee(){let e=document.querySelector(`[data-fab]`),t=document.getElementById(`inicio`),n=[document.querySelector(`[data-form]`),document.querySelector(`[data-footer]`)],r={passouHero:!1,bloqueado:new Set},i=()=>{let t=r.passouHero&&r.bloqueado.size===0;e.classList.toggle(`fab--visivel`,t),e.tabIndex=t?0:-1,e.setAttribute(`aria-hidden`,String(!t))};new IntersectionObserver(([e])=>{r.passouHero=!e.isIntersecting,i()}).observe(t);let a=new IntersectionObserver(e=>{e.forEach(e=>e.isIntersecting?r.bloqueado.add(e.target):r.bloqueado.delete(e.target)),i()});n.forEach(e=>e&&a.observe(e)),i()}document.querySelector(`#app`).innerHTML=`
  ${f()}
  <main id="conteudo" tabindex="-1">
    ${k()}
    ${M()}
    ${F()}
    ${R()}
    ${B()}
    ${H()}
    ${G()}
    ${q()}
  </main>
  ${X()}
  ${Q()}
`,p(),A(),I(),K(),Y(),Z(),ee(),_();var $=document.querySelectorAll(`.revelar`);if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window))$.forEach(e=>e.classList.add(`visivel`));else{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visivel`),e.unobserve(t.target))})},{rootMargin:`0px 0px -8% 0px`,threshold:.08});$.forEach(t=>e.observe(t))}