// Ícones em linha (SVG inline, herdam a cor do texto)
const svg = (conteudo, extra = '') =>
  `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" ${extra}>${conteudo}</svg>`

export const icones = {
  whatsapp: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></svg>`,
  telefone: svg('<path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 5.3 5.3l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/>'),
  local: svg('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  relogio: svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  entrega: svg('<path d="M3 6h11v10H3zM14 9.5h4l3 3.5v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>'),
  instagram: svg('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor"/>'),
  seta: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  setaEsq: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  fechar: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  mais: svg('<path d="M12 5v14M5 12h14"/>'),
  estrela: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>`,
  mapa: svg('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>'),
  aspas: `<svg viewBox="0 0 48 48" width="40" height="40" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20 12c-6.6 2.2-11 8-11 15v9h12V24h-6c0-4.2 2.5-7.6 6.4-9.1zm19 0c-6.6 2.2-11 8-11 15v9h12V24h-6c0-4.2 2.5-7.6 6.4-9.1z"/></svg>`,

  // Ambientes
  cozinha: svg('<rect x="3" y="3.5" width="18" height="6" rx="1"/><path d="M3 13h18v7.5H3zM12 13v7.5M9.5 6.5h-2M16.5 6.5h-2M3 13l1-1h16l1 1"/>'),
  closet: svg('<rect x="3.5" y="3" width="17" height="18" rx="1.2"/><path d="M12 3v18M7 7.5h2M15 7.5h2M6.5 11h3v6.5M14.5 11h3"/>'),
  quarto: svg('<path d="M3 18.5V8M21 18.5v-5.5H3M3 15.5h18M6 13v-2.5h4.5V13"/>'),
  office: svg('<rect x="5.5" y="4" width="13" height="8.5" rx="1"/><path d="M3 15.5h18M5 15.5v4.5M19 15.5v4.5M10 12.5v3M14 12.5v3"/>'),
  sala: svg('<rect x="3" y="3.5" width="18" height="11" rx="1"/><rect x="7.5" y="6" width="9" height="5.5" rx=".5"/><path d="M3 18h18v2.5H3z"/>'),
  banheiro: svg('<rect x="7" y="3" width="10" height="7" rx="3.5"/><path d="M4 13h16v7H4zM12 13v7M8.5 16.5h1M14.5 16.5h1"/>'),
  jantar: svg('<path d="M3 10.5h18M5 10.5V20M19 10.5V20M8.5 6.5h7M12 3.5v3"/><path d="M3 15h4M17 15h4"/>'),
  mesa: svg('<path d="M2.5 9h19M5 9l-1.5 11M19 9l1.5 11M7.5 9v6.5h9V9"/>'),
  estofado: svg('<path d="M5 10V7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5V10"/><path d="M3 11.5a2 2 0 0 1 4 0V14h10v-2.5a2 2 0 0 1 4 0V18H3zM5 18v2M19 18v2"/>'),
}
