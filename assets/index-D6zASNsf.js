const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OrbitControls-Dh36RsEH.js","assets/three.module-4gI5Z-_B.js","assets/GLTFLoader-QPJIvrGm.js","assets/RoomEnvironment-C4vpWHws.js"])))=>i.map(i=>d[i]);
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
    </header>`}function p(){let e=document.querySelector(`[data-header]`),t=e.querySelector(`[data-menu-toggle]`),n=e.querySelector(`[data-menu]`),r=e.querySelector(`[data-menu-rotulo]`),i=window.matchMedia(`(max-width: 899px)`),a=()=>{let e=t.getAttribute(`aria-expanded`)===`true`;n.inert=i.matches&&!e},o=()=>{t.setAttribute(`aria-expanded`,`true`),r.textContent=`Fechar menu`,e.classList.add(`header--menu-aberto`),document.body.classList.add(`menu-aberto`),a(),requestAnimationFrame(()=>n.querySelector(`a`).focus())},s=(n=!0)=>{t.getAttribute(`aria-expanded`)===`true`&&(t.setAttribute(`aria-expanded`,`false`),r.textContent=`Abrir menu`,e.classList.remove(`header--menu-aberto`),document.body.classList.remove(`menu-aberto`),a(),n&&t.focus())};t.addEventListener(`click`,()=>{t.getAttribute(`aria-expanded`)===`true`?s():o()}),n.addEventListener(`click`,e=>{e.target.closest(`a`)&&s(!1)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&s()}),e.addEventListener(`keydown`,e=>{if(e.key!==`Tab`||t.getAttribute(`aria-expanded`)!==`true`)return;let r=[t,...n.querySelectorAll(`a`)],i=r[0],a=r[r.length-1];e.shiftKey&&document.activeElement===i?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),i.focus())}),i.addEventListener(`change`,()=>{s(!1),a()}),a();let c=()=>e.classList.toggle(`header--rolado`,window.scrollY>8);window.addEventListener(`scroll`,c,{passive:!0}),c()}var m=[{arquivo:`cozinha-bancada-led.jpg`,ambiente:`cozinha`,titulo:`Cozinha com bancada`,alt:`Cozinha planejada com bancada de granito preto, armários em madeira clara e fita de LED embutida`,tipo:`render-3d`,largura:247,altura:327},{arquivo:`closet-iluminado.jpg`,ambiente:`closet`,titulo:`Closet com iluminação`,alt:`Closet planejado em tons claros, com cabideiros, gavetas, prateleiras de calçados e fita de LED embutida`,tipo:`render-3d`,largura:247,altura:328},{arquivo:`quarto-home-office-recorte.jpg`,ambiente:`quarto`,titulo:`Quarto com home office`,alt:`Quarto planejado com armários suspensos, painel de madeira clara com LED e bancada de estudo integrada à cama`,tipo:`render-3d`,largura:246,altura:284},{arquivo:`cozinha-madeira-clara-recorte.jpg`,ambiente:`cozinha`,titulo:`Cozinha em madeira clara`,alt:`Cozinha planejada com armários brancos e em madeira clara, nicho com iluminação e bancada escura`,tipo:`render-3d`,largura:244,altura:296},{arquivo:``,ambiente:`sala`,titulo:`Painel para TV`,alt:`Sala com painel e rack planejados`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`banheiro`,titulo:`Gabinete de banheiro`,alt:`Banheiro com gabinete sob medida`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`home-office`,titulo:`Home office`,alt:`Home office planejado`,tipo:`projeto-entregue`},{arquivo:``,ambiente:`sala-de-jantar`,titulo:`Sala de jantar`,alt:`Sala de jantar com móveis sob medida`,tipo:`projeto-entregue`}],h=`/movelaria/`;function g({arquivo:e=``,alt:t=``,legenda:n=``,largura:r=1200,altura:i=900,lazy:a=!0,classe:o=``,pasta:s=`projetos`,proporcaoReal:c=!1}={}){let l=e?`<img src="${h}${s}/${e}" alt="${t}" width="${r}" height="${i}" ${a?`loading="lazy"`:`fetchpriority="high"`} decoding="async" data-imagem-foto>`:``;return`
    <div class="imagem ${o} ${e&&c?`imagem--real`:``}" ${e&&c?`style="--r:${(r/i).toFixed(4)}"`:``} ${e?``:`data-vazia`}>
      <div class="imagem__ph" ${e?`aria-hidden="true"`:`role="img" aria-label="${t||n}"`}>
        <span class="imagem__luz" aria-hidden="true"></span>
        ${n?`<span class="imagem__legenda" aria-hidden="true">${n}</span>`:``}
      </div>
      ${l}
    </div>`}function _(e=document){e.querySelectorAll(`img[data-imagem-foto]`).forEach(e=>{let t=e.closest(`.imagem`),n=()=>t.classList.add(`imagem--carregada`),r=()=>{let n=t.querySelector(`.imagem__ph`);n.removeAttribute(`aria-hidden`),n.setAttribute(`role`,`img`),n.setAttribute(`aria-label`,e.alt),e.remove()};e.complete?e.naturalWidth?n():r():(e.addEventListener(`load`,n,{once:!0}),e.addEventListener(`error`,r,{once:!0}))})}var v=`modulepreload`,y=function(e){return`/movelaria/`+e},b={},x=function(e){return e.pathname.endsWith(`.css`)},S=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=y(t,n);let r=s(t);if(r.href in b)return;b[r.href]=!0;let i=x(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:v,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},C=2e3,ee=[{id:`armario`,arquivo:`modelos/armario/armario.gltf`,nome:`armário ripado`,credito:`Peça 3D ilustrativa — modelo "Modern Wooden Cabinet", Poly Haven, CC0`},{id:`sofa`,arquivo:`modelos/sofa-veludo.glb`,nome:`sofá de veludo`,credito:`Peça 3D ilustrativa — modelo "GlamVelvetSofa" de Eric Chadwick / Wayfair, CC BY 4.0`}],w;function T(){return w||=Promise.all([S(()=>import(`./three.module-4gI5Z-_B.js`),[]),S(()=>import(`./OrbitControls-Dh36RsEH.js`),__vite__mapDeps([0,1])),S(()=>import(`./GLTFLoader-QPJIvrGm.js`),__vite__mapDeps([2,1])),S(()=>import(`./RoomEnvironment-C4vpWHws.js`),__vite__mapDeps([3,1]))]).then(([e,{OrbitControls:t},{GLTFLoader:n},{RoomEnvironment:r}])=>({THREE:e,OrbitControls:t,GLTFLoader:n,RoomEnvironment:r})),w}async function E(e,t,n){let r=new t,i=`/movelaria/${n.arquivo}`,a=(await r.loadAsync(i)).scene,o=new e.Box3().setFromObject(a),s=new e.Vector3,c=new e.Vector3;o.getSize(s),o.getCenter(c);let l=3.1/Math.max(s.x,s.y,s.z);return a.scale.setScalar(l),a.position.set(-c.x*l,-o.min.y*l,-c.z*l),a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),{item:n,modelo:a,alturaModelo:s.y*l}}function D(e,t){let n=document.createElement(`div`);n.className=`hero__carrossel-controles`,n.setAttribute(`role`,`group`),n.setAttribute(`aria-label`,`Controles do carrossel 3D`);let r=document.createElement(`button`);r.type=`button`,r.className=`hero__carrossel-pausar`,n.appendChild(r);let i=document.createElement(`div`);i.className=`hero__carrossel-pontos`;let a=t.map(({item:e})=>{let t=document.createElement(`button`);return t.type=`button`,t.className=`hero__carrossel-ponto`,t.setAttribute(`aria-label`,`Ver ${e.nome}`),i.appendChild(t),t});return n.appendChild(i),e.querySelector(`[data-credito-hero]`)?.insertAdjacentElement(`afterend`,n),{botaoPausar:r,botoesPonto:a}}async function O(e){if(!e)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,n,r,i,a;try{({THREE:n,OrbitControls:r,GLTFLoader:i,RoomEnvironment:a}=await T())}catch{e.dataset.erro3d=``;return}if(!e.isConnected)return;let o=(await Promise.allSettled(ee.map(e=>E(n,i,e)))).filter(e=>e.status===`fulfilled`).map(e=>e.value);if(o.length===0){e.dataset.erro3d=``;return}if(!e.isConnected)return;let s;try{s=new n.WebGLRenderer({antialias:!0,alpha:!0,powerPreference:`low-power`})}catch{e.dataset.erro3d=``;return}let c=new n.Scene,u=new n.PerspectiveCamera(32,1,.1,30),d=new n.Vector3(0,0,0),f=6.4,p=8.8;s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=n.PCFSoftShadowMap,s.outputColorSpace=n.SRGBColorSpace,s.toneMapping=n.ACESFilmicToneMapping,s.toneMappingExposure=1.05,s.domElement.setAttribute(`aria-hidden`,`true`),e.appendChild(s.domElement);let m=new n.PMREMGenerator(s);c.environment=m.fromScene(new a,.04).texture,m.dispose(),c.add(new n.HemisphereLight(16774111,13483942,.5));let h=new n.DirectionalLight(16759161,1.3);h.position.set(4,4.5,3),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.near=1,h.shadow.camera.far=12,c.add(h);let g=new n.DirectionalLight(14673650,.4);g.position.set(-4,2,-2),c.add(g);let _=new n.Mesh(new n.PlaneGeometry(9,9),new n.ShadowMaterial({opacity:.2}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,c.add(_);let v=new r(u,s.domElement);v.enableZoom=!1,v.enablePan=!1,v.enableDamping=!0,v.dampingFactor=.08,v.rotateSpeed=.5,v.minAzimuthAngle=-1.2,v.maxAzimuthAngle=.19999999999999996,v.minPolarAngle=1.05,v.maxPolarAngle=1.45;let y=()=>{let{clientWidth:t,clientHeight:n}=e;t&&n&&(s.setSize(t,n),u.aspect=t/n,u.updateProjectionMatrix())};y();let b=()=>{v.update(),s.render(c,u)},x=!1,S=null,w=()=>{if(!x){S=null;return}b(),S=requestAnimationFrame(w)},O=()=>{S===null&&(S=requestAnimationFrame(w))},k=null,A=0,j=e=>{u.position.setFromSphericalCoords(e,1.25,-.5).add(d),u.lookAt(d)},M=(n,{animado:r})=>{let{modelo:i,alturaModelo:a,item:s}=o[n];k&&c.remove(k),k=i,c.add(k),d.set(0,a*.42,0),v.target.copy(d);let l=e.closest(`.hero__visual`)?.querySelector(`[data-credito-hero]`);if(l&&(l.textContent=s.credito),U.forEach((e,t)=>e.setAttribute(`aria-current`,String(t===n))),!r||t){j(f),b();return}let u=performance.now(),m=e=>{let t=Math.min(1,(e-u)/650),n=t<.5?4*t*t*t:1-(-2*t+2)**3/2;j(p+-2.4000000000000004*n),b(),t<1&&requestAnimationFrame(m)};requestAnimationFrame(m)},N=t,P=!1,F=!1,I=null,L=()=>N||P||F||o.length<2,R=()=>{I&&=(clearTimeout(I),null)},z=()=>{R(),!L()&&x&&(I=setTimeout(()=>{A=(A+1)%o.length,M(A,{animado:!0}),z()},C))},B=()=>{H.innerHTML=N?`${l.tocar} Continuar`:`${l.pausar} Pausar`,H.setAttribute(`aria-pressed`,String(N))},V=e.closest(`.hero__visual`),{botaoPausar:H,botoesPonto:U}=o.length>1?D(V,o):{botaoPausar:null,botoesPonto:[]};H&&(B(),H.addEventListener(`click`,()=>{N=!N,B(),N?R():z()})),U.forEach((e,t)=>{e.addEventListener(`click`,()=>{t!==A&&(A=t,M(A,{animado:!0}),z())})}),e.addEventListener(`pointerenter`,()=>{P=!0,R()}),e.addEventListener(`pointerleave`,()=>{P=!1,z()}),v.addEventListener(`start`,()=>{F=!0,R()}),v.addEventListener(`end`,()=>{F=!1,z()});let W=!1,G=()=>{if(W)return;W=!0,e.classList.add(`hero__3d--pronto`);let n=e.closest(`.hero__visual`),r=n?.querySelector(`[data-legenda-hero]`);r&&(r.innerHTML=`
        <span class="hero__etapa hero__etapa--1">${l.girar} Arraste</span>
        <span class="hero__seta" aria-hidden="true">→</span>
        <span class="hero__etapa hero__etapa--2">veja de outro ângulo</span>
      `);let i=n?.querySelector(`[data-credito-hero]`);i&&(i.hidden=!1),j(t?f:p),M(0,{animado:!t}),z()};new IntersectionObserver(e=>{e.forEach(e=>{x=e.isIntersecting&&!document.hidden,x?(O(),G(),z()):R()})},{threshold:.15}).observe(e),document.addEventListener(`visibilitychange`,()=>{x=!document.hidden&&x,x?(O(),z()):R()}),new ResizeObserver(()=>{y(),b()}).observe(e)}function k(){let e=e=>`class="traco" pathLength="1" style="--d:${e}s"`;return`
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
  </svg>`}function A(){let t=m.find(e=>e.hero&&e.arquivo);return`
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
              ${k()}
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
    </section>`}function j(){let e=document.querySelector(`[data-desenho]`);e&&requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add(`desenhar`)));let t=document.querySelector(`[data-hero-3d]`);t&&O(t)}var M=[{id:`cozinha`,nome:`Cozinha`,frase:`Armários, bancadas e nichos pensados para a rotina de quem cozinha.`,mensagem:`uma cozinha planejada`,icone:`cozinha`},{id:`closet`,nome:`Closet`,frase:`Cada peça no seu lugar, com organização feita para você.`,mensagem:`um closet sob medida`,icone:`closet`},{id:`quarto`,nome:`Quarto`,frase:`Quartos de casal, de solteiro e infantis com o aproveitamento de cada canto.`,mensagem:`um quarto planejado`,icone:`quarto`},{id:`home-office`,nome:`Home office`,frase:`Um canto de trabalho funcional, que conversa com o resto da casa.`,mensagem:`um home office planejado`,icone:`office`},{id:`sala`,nome:`Sala (painéis e racks)`,frase:`Painéis, racks e iluminação para deixar a sala mais acolhedora.`,mensagem:`painel ou rack para a sala`,icone:`sala`},{id:`banheiro`,nome:`Banheiro`,frase:`Gabinetes e armários sob medida, mesmo nos espaços menores.`,mensagem:`móveis para banheiro`,icone:`banheiro`},{id:`sala-de-jantar`,nome:`Sala de jantar`,frase:`Ambientes para reunir a família em volta da mesa.`,mensagem:`uma sala de jantar`,icone:`jantar`},{id:`mesas`,nome:`Mesas sob medida`,frase:`Mesas feitas no tamanho certo para o seu espaço.`,mensagem:`uma mesa sob medida`,icone:`mesa`},{id:`estofados`,nome:`Estofados sob medida`,frase:`Estofados feitos sob medida para o seu ambiente.`,mensagem:`estofados sob medida`,icone:`estofado`}];function N(e,t=``){return`<p class="rotulo ${t}">${e}</p>`}function P(){return`
    <section class="secao ambientes" id="ambientes" aria-labelledby="ambientes-titulo">
      <div class="container ambientes__grade">
        <header class="ambientes__topo revelar">
          ${N(`Ambientes`)}
          <h2 id="ambientes-titulo">Seu espaço merece mais do que móveis prontos.</h2>
          <p>Projetamos para a casa inteira — e também fazemos mesas e estofados sob medida. Escolha o ambiente e fale direto com a gente pelo WhatsApp.</p>
        </header>

        <ol class="indice revelar">
          ${M.map((e,t)=>`
            <li>
              <a class="indice__linha" href="${o(s(e.mensagem))}" target="_blank" rel="noopener">
                <span class="indice__num" aria-hidden="true">${String(t+1).padStart(2,`0`)}</span>
                <span class="indice__nome">${e.nome}</span>
                <span class="indice__frase">${e.frase}</span>
                <span class="indice__seta" aria-hidden="true">${l.seta}</span>
                <span class="sr-only"> — pedir orçamento pelo WhatsApp (abre em nova aba)</span>
              </a>
            </li>`).join(``)}
        </ol>
      </div>
    </section>`}var F=e=>M.find(t=>t.id===e)?.nome??e,I=8;function L(e){return e.tipo===`render-3d`?`<span class="selo-3d">Projeto 3D</span>`:``}var R=m.filter(e=>e.arquivo);function z(){let t=M.filter(e=>R.some(t=>t.ambiente===e.id)),n=R.length>=I&&t.length>1,r=R.some(e=>e.tipo===`render-3d`);return`
    <section class="secao galeria" id="projetos" aria-labelledby="projetos-titulo">
      <div class="container">
        <header class="galeria__topo revelar">
          <div>
            ${N(`Projetos`)}
            <h2 id="projetos-titulo">Bonito por fora.<br>Inteligente por dentro.</h2>
          </div>
          <p>Alguns ambientes projetados pela Movelaria.${r?` As imagens marcadas como “Projeto 3D” são renderizações de projeto.`:``}</p>
        </header>

        ${n?`<div class="filtros revelar" role="group" aria-label="Filtrar projetos por ambiente">
          <button type="button" class="filtro" aria-pressed="true" data-filtro="todos">Todos</button>
          ${t.map(e=>`<button type="button" class="filtro" aria-pressed="false" data-filtro="${e.id}">${e.nome}</button>`).join(``)}
        </div>
        <p class="sr-only" aria-live="polite" data-galeria-status></p>`:``}

        <ul class="galeria__grade" data-galeria>
          ${R.map((e,t)=>`
            <li class="galeria__item revelar" data-ambiente="${e.ambiente}">
              <button type="button" class="galeria__botao" data-abrir="${t}">
                <span class="sr-only">Ampliar: </span>
                ${g({arquivo:e.arquivo,alt:e.alt,largura:e.largura,altura:e.altura})}
                ${L(e)}
                <span class="galeria__info">
                  <span class="galeria__ambiente">${F(e.ambiente)}</span>
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
    </section>`}function B(){let e=document.getElementById(`projetos`),t=e.querySelector(`[data-galeria]`),n=[...t.querySelectorAll(`.galeria__item:not(.galeria__item--insta)`)],r=e.querySelector(`[data-galeria-status]`),i=e.querySelector(`[data-lightbox]`),a=R.map((e,t)=>t),o=0,s=null;e.querySelectorAll(`[data-filtro]`).forEach(t=>{t.addEventListener(`click`,()=>{let i=t.dataset.filtro;e.querySelectorAll(`[data-filtro]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e===t))),a=[],n.forEach((e,t)=>{let n=i===`todos`||e.dataset.ambiente===i;e.hidden=!n,n&&a.push(t)}),r.textContent=`${a.length} ${a.length===1?`projeto`:`projetos`} em ${t.textContent}`})});let c=i.querySelector(`[data-midia]`);function l(e){o=e;let t=R[e],n=F(t.ambiente);c.innerHTML=g({arquivo:t.arquivo,alt:t.alt,largura:t.largura,altura:t.altura,lazy:!1,classe:`imagem--lightbox`,proporcaoReal:!0})+L(t),_(c),i.querySelector(`[data-titulo]`).textContent=t.titulo,i.querySelector(`[data-ambiente-lb]`).textContent=n+(t.tipo===`render-3d`?` · Projeto 3D`:``);let r=a.indexOf(e);i.querySelector(`[data-contador]`).textContent=`${r+1} / ${a.length}`}function u(e){let t=a.indexOf(o);l(a[(t+e+a.length)%a.length])}t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-abrir]`);t&&(s=t,l(Number(t.dataset.abrir)),i.showModal(),i.querySelector(`[data-fechar]`).focus())}),i.querySelector(`[data-fechar]`).addEventListener(`click`,()=>i.close()),i.querySelector(`[data-anterior]`).addEventListener(`click`,()=>u(-1)),i.querySelector(`[data-proximo]`).addEventListener(`click`,()=>u(1)),i.addEventListener(`keydown`,e=>{e.key===`ArrowLeft`&&u(-1),e.key===`ArrowRight`&&u(1)}),i.addEventListener(`click`,e=>{e.target===i&&i.close()}),i.addEventListener(`close`,()=>{document.body.classList.remove(`lightbox-aberto`),s?.focus()}),i.addEventListener(`toggle`,()=>{i.open&&document.body.classList.add(`lightbox-aberto`)})}var V=[{titulo:`Conversa e medição`,texto:`Você conta como é a sua rotina e o que espera do ambiente. Depois, tiramos as medidas do espaço.`},{titulo:`Projeto`,texto:`Desenhamos o móvel pensando no uso de cada gaveta, nicho e porta — e ajustamos com você até ficar do seu jeito.`},{titulo:`Fabricação`,texto:`Com o projeto aprovado, os móveis são produzidos sob medida, com atenção ao acabamento.`},{titulo:`Entrega e montagem`,texto:`Levamos tudo até a sua casa e montamos no lugar certo, dentro do que foi combinado.`}];function H(){return`
    <section class="secao processo" id="como-funciona" aria-labelledby="processo-titulo">
      <div class="container">
        <header class="processo__topo revelar">
          ${N(`Como funciona`)}
          <h2 id="processo-titulo">Do primeiro papo ao móvel montado.</h2>
        </header>

        <ol class="processo__lista">
          ${V.map((e,t)=>`
            <li class="passo revelar">
              <span class="passo__numero" aria-hidden="true">${String(t+1).padStart(2,`0`)}</span>
              <h3 class="passo__titulo">${e.titulo}</h3>
              <p>${e.texto}</p>
            </li>`).join(``)}
        </ol>

        <p class="processo__cta revelar">
          <a class="link-seta" href="${o(`Olá! Quero começar meu projeto com a Movelaria. Podemos conversar?`)}" target="_blank" rel="noopener">
            Começar meu projeto ${l.seta}<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span>
          </a>
        </p>
      </div>
    </section>`}function U(){return`
    <section class="secao sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div class="container sobre__grade">
        <div class="sobre__anos revelar" aria-hidden="true">
          <span class="sobre__anos-numero">${e.anos}</span>
          <span class="sobre__anos-texto">anos</span>
        </div>

        <div class="sobre__texto revelar">
          ${N(`Sobre a Movelaria`)}
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
    </section>`}var W=[{texto:`Excelente atendimento, entrega dentro dos prazos, móveis de qualidade.`,autor:`Alexandre Rocha`,fonte:`Avaliação no Google`},{texto:`Ótimo local pra projetar e comprar móveis sob medida.`,autor:`Rangel Peter`,fonte:`Avaliação no Google`},{texto:`Excelente atendimento!`,autor:`Izabel Campos`,fonte:`Avaliação no Google`}];function G(){return`
    <section class="secao depoimentos" id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div class="container">
        <header class="depoimentos__topo revelar">
          ${N(`Depoimentos`,`rotulo--claro`)}
          <h2 id="depoimentos-titulo" class="sr-only">Depoimentos de clientes</h2>
          <p class="depoimentos__nota">
            <span class="depoimentos__nota-numero">${e.google.nota}</span>
            <span>de 5 no Google<br>${e.google.totalAvaliacoes} avaliações</span>
          </p>
        </header>

        <ul class="depoimentos__lista">
          ${W.map(e=>`
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
    </section>`}var K=(e,t=`Fale`)=>` <a href="${o(`Olá! Tenho uma dúvida sobre ${e}.`)}" target="_blank" rel="noopener">${t} com a nossa equipe<span class="sr-only"> pelo WhatsApp (abre em nova aba)</span></a>.`,q=[{pergunta:`Móveis planejados são caros mesmo?`,resposta:`<p>Depende do que entra na conta. O valor de um planejado varia com o tamanho do ambiente, os acabamentos e o que vai dentro de cada armário. A diferença é que você investe num móvel feito para o seu espaço, sem pagar por medidas que não servem ou por cantos desperdiçados.</p>
      <p>Para saber quanto fica o seu projeto, o melhor caminho é conversar com a gente com as medidas e as ideias em mãos.${K(`valores de móveis planejados`)}</p>`},{pergunta:`Vale mesmo a pena investir em móveis planejados?`,resposta:`<p>Quando o projeto é bem pensado, sim. O planejado aproveita cada parede e cada canto, organiza a rotina e deixa o ambiente com a sua cara — algo difícil de conseguir com móveis prontos, que seguem medidas padrão.</p>
      <p>É por isso que a gente começa entendendo como você usa o espaço, antes de desenhar.</p>`},{pergunta:`O que avaliar além da estética?`,resposta:`<p>Escolher planejado só pela estética é o primeiro erro. Bonito por fora, inteligente por dentro: vale olhar a divisão interna dos armários, a circulação no ambiente, a altura das bancadas, a iluminação e o acabamento.</p>
      <p>E também quem vai fazer: atendimento, cuidado na entrega e cumprimento do que foi combinado fazem toda a diferença no resultado.</p>`},{pergunta:`Vocês também fazem mesas e estofados?`,resposta:`<p>Sim. Além dos móveis planejados, fazemos mesas e estofados sob medida.${K(`mesas e estofados sob medida`)}</p>`},{pergunta:`Vocês fazem entrega?`,resposta:`<p>Sim, a Movelaria faz entrega. Para confirmar a sua região e os detalhes da montagem,${K(`entrega e montagem`,`fale`)}</p>`},{pergunta:`Como faço para começar meu projeto?`,resposta:`<p>É só chamar a gente no WhatsApp ou visitar a loja em Guaíba. A partir da conversa, combinamos a medição e partimos para o projeto.${K(`como começar meu projeto`)}</p>`}];function J(){return`
    <section class="secao faq" id="perguntas" aria-labelledby="faq-titulo">
      <div class="container faq__grade">
        <header class="faq__topo revelar">
          ${N(`Perguntas frequentes`)}
          <h2 id="faq-titulo">As dúvidas que mais ouvimos.</h2>
          <p>Respondidas sem rodeio. Se a sua não estiver aqui, chame a gente no WhatsApp.</p>
        </header>

        <div class="acordeao revelar">
          ${q.map((e,t)=>`
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
    </section>`}function Y(){document.querySelectorAll(`.acordeao__botao`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t)),document.getElementById(e.getAttribute(`aria-controls`)).hidden=t})})}function X(){return`
    <section class="secao contato" id="contato" aria-labelledby="contato-titulo">
      <div class="container contato__grade">
        <div class="contato__info revelar">
          ${N(`Contato`)}
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
                ${M.map(e=>`<option value="${e.nome}">${e.nome}</option>`).join(``)}
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
    </section>`}function Z(e){let t=[],n=e.nome.value.trim(),r=e.telefone.value.replace(/\D/g,``);return n.length<2&&t.push([`nome`,`Informe seu nome.`]),(r.length<10||r.length>13)&&t.push([`telefone`,`Informe um telefone com DDD, por exemplo (51) 90000-0000.`]),e.ambiente.value||t.push([`ambiente`,`Escolha o ambiente de interesse.`]),t}function Q(){let e=document.querySelector(`[data-form]`),n=e.querySelector(`[data-form-status]`),a=t=>{e[t].removeAttribute(`aria-invalid`);let n=e.querySelector(`#f-${t}-erro`);n.hidden=!0,n.textContent=``};[`nome`,`telefone`,`ambiente`].forEach(t=>{e[t].addEventListener(`input`,()=>{e[t].getAttribute(`aria-invalid`)&&a(t)})}),e.addEventListener(`submit`,t=>{t.preventDefault(),[`nome`,`telefone`,`ambiente`].forEach(a),n.className=`form__status`,n.textContent=``;let r=Z(e);if(r.length){r.forEach(([t,n])=>{e[t].setAttribute(`aria-invalid`,`true`);let r=e.querySelector(`#f-${t}-erro`);r.textContent=n,r.hidden=!1}),n.classList.add(`form__status--erro`),n.textContent=r.length===1?`Confira o campo destacado.`:`Confira os ${r.length} campos destacados.`,e[r[0][0]].focus();return}let i=[`Olá! Vim pelo site da Movelaria e gostaria de um orçamento.`,``,`Nome: ${e.nome.value.trim()}`,`Telefone: ${e.telefone.value.trim()}`,`Ambiente: ${e.ambiente.value}`],s=e.mensagem.value.trim();s&&i.push(`Mensagem: ${s}`);let c=o(i.join(`
`));window.open(c,`_blank`,`noopener`),n.classList.add(`form__status--ok`),n.innerHTML=`Tudo certo! Abrimos o WhatsApp com a sua mensagem. Se ele não abriu, <a href="${c}" target="_blank" rel="noopener">toque aqui</a>.`}),document.querySelector(`[data-carregar-mapa]`).addEventListener(`click`,()=>{let e=document.querySelector(`[data-mapa]`),n=document.createElement(`iframe`);n.src=i,n.title=`Mapa: ${t}`,n.loading=`lazy`,n.referrerPolicy=`no-referrer-when-downgrade`,n.className=`mapa__iframe`;let a=document.createElement(`a`);a.href=r,a.target=`_blank`,a.rel=`noopener`,a.className=`mapa__abrir`,a.textContent=`Abrir no Google Maps`,e.replaceWith(n),n.after(a),n.focus()})}function te(){return`
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
    </footer>`}function ne(){document.querySelector(`[data-ano]`).textContent=new Date().getFullYear()}function re(){return`
    <a class="fab" href="${o()}" target="_blank" rel="noopener" data-fab aria-label="Pedir orçamento pelo WhatsApp (abre em nova aba)">
      ${l.whatsapp}
    </a>`}function ie(){let e=document.querySelector(`[data-fab]`),t=document.getElementById(`inicio`),n=[document.querySelector(`[data-form]`),document.querySelector(`[data-footer]`)],r={passouHero:!1,bloqueado:new Set},i=()=>{let t=r.passouHero&&r.bloqueado.size===0;e.classList.toggle(`fab--visivel`,t),e.tabIndex=t?0:-1,e.setAttribute(`aria-hidden`,String(!t))};new IntersectionObserver(([e])=>{r.passouHero=!e.isIntersecting,i()}).observe(t);let a=new IntersectionObserver(e=>{e.forEach(e=>e.isIntersecting?r.bloqueado.add(e.target):r.bloqueado.delete(e.target)),i()});n.forEach(e=>e&&a.observe(e)),i()}document.querySelector(`#app`).innerHTML=`
  ${f()}
  <main id="conteudo" tabindex="-1">
    ${A()}
    ${P()}
    ${z()}
    ${H()}
    ${U()}
    ${G()}
    ${J()}
    ${X()}
  </main>
  ${te()}
  ${re()}
`,p(),j(),B(),Y(),Q(),ne(),ie(),_();var $=document.querySelectorAll(`.revelar`);if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!(`IntersectionObserver`in window))$.forEach(e=>e.classList.add(`visivel`));else{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visivel`),e.unobserve(t.target))})},{rootMargin:`0px 0px -8% 0px`,threshold:.08});$.forEach(t=>e.observe(t))}