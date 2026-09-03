/* ============================================================
   lib/icons.js — biblioteca de ícones

   Cada desenho é declarado uma única vez aqui. `sprite()` gera o
   bloco <svg> com todos os <symbol>, injetado no topo do <body>;
   `use()` e `plate()` geram as referências espalhadas pela página.

   O sprite precisa ficar no próprio documento: os navegadores
   bloqueiam <use> apontando para um arquivo .svg externo.
   ============================================================ */
window.NA = window.NA || {};

NA.icons = (function () {
  const V24 = '0 0 24 24';
  const V48 = '0 0 48 48';

  const SYMBOLS = {
    /* ---- ícones de conteúdo ---- */
    'i-pin':      [V24, '<path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>'],
    'i-registry': [V24, '<rect x="4" y="4" width="13" height="16" rx="1"/><path d="M7 8h7M7 12h7M7 16h4"/><circle cx="17.5" cy="17.5" r="3.2"/><path d="M16 17.5l1 1 2-2"/>'],
    'i-shield':   [V24, '<path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6Z"/><path d="M9 12c3 0 5-2 5-5-3 0-5 2-5 5Z"/>'],
    'i-doc':      [V24, '<path d="M7 3h7l4 4v14H7Z"/><path d="M14 3v4h4"/><path d="M9.5 14l2 2 4-4"/>'],
    'i-compass':  [V24, '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6Z"/><circle cx="12" cy="12" r="1"/>'],
    'i-scales':   [V24, '<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7 2 13a3 3 0 0 0 6 0Z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0Z"/><path d="M8 21h8"/>'],
    'i-recycle':  [V24, '<path d="M4 12a8 8 0 0 1 13-6"/><path d="M20 12a8 8 0 0 1-13 6"/><path d="M17 3v4h-4"/><path d="M7 21v-4h4"/>'],
    'i-credit':   [V24, '<circle cx="12" cy="14" r="7"/><path d="M12 14V6"/><path d="M12 6c-2 0-3 1.4-3 3 2 0 3-1.2 3-3Z"/><path d="M12 6c2 0 3 1.4 3 3-2 0-3-1.2-3-3Z"/>'],
    'i-mail':     [V24, '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'],
    'i-phone':    [V24, '<path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-2-2 2c-2.4-1-4-2.6-5-5l2-2-2-6-4 1Z"/>'],

    /* ---- ícones dos espaços reservados de imagem ---- */
    'i-plate-landscape': [V48, '<circle cx="16" cy="15" r="4"/><path d="M4 34 18 20 26 28 34 18 44 34"/>'],
    'i-plate-person':    [V48, '<circle cx="24" cy="16" r="7"/><path d="M10 42c0-8 6-13 14-13s14 5 14 13"/>'],
    'i-plate-marker':    [V48, '<circle cx="24" cy="14" r="4"/><path d="M24 18v20M16 42h16"/>'],

    /* ---- redes sociais ---- */
    'i-instagram': [V24, '<rect x="3" y="3" width="18" height="18" rx="6"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/>'],
    'i-facebook':  [V24, '<path d="M14.5 8.5V6.8c0-.7.4-1.1 1.1-1.1H17V3.2c-.5-.1-1.6-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.6v2.4H7.3v3.1h2.5V21h3.1v-8.9h2.6l.4-3.1h-3Z" fill="currentColor" stroke="none"/>'],
    'i-linkedin':  [V24, '<circle cx="5.3" cy="5.3" r="1.9" fill="currentColor" stroke="none"/><rect x="3.6" y="9" width="3.4" height="11" rx=".4" fill="currentColor" stroke="none"/><path d="M10 9h3.3v1.6c.6-1 1.7-1.9 3.3-1.9 3 0 4 1.8 4 4.9V20h-3.4v-5.7c0-1.4-.5-2.4-1.8-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20H10Z" fill="currentColor" stroke="none"/>'],
    'i-youtube':   [V24, '<rect x="2.5" y="6" width="19" height="12" rx="4"/><path d="M10.3 9.7v4.6l4.6-2.3Z" fill="currentColor" stroke="none"/>'],

    /* ---- controles do cabeçalho ---- */
    'i-sun':   [V24, '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'],
    'i-moon':  [V24, '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>'],
    'i-menu':  [V24, '<path d="M4 7h16M4 12h16M4 17h16"/>'],
    'i-close': [V24, '<path d="M6 6l12 12M18 6 6 18"/>'],
    'i-caret': [V24, '<path d="m6 9 6 6 6-6"/>']
  };

  /* Bloco <svg> com todos os símbolos, escondido sem sair do fluxo do DOM. */
  const sprite = () => `
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"
         style="position:absolute;width:0;height:0;overflow:hidden">
      ${Object.keys(SYMBOLS).map((id) =>
        `<symbol id="${id}" viewBox="${SYMBOLS[id][0]}">${SYMBOLS[id][1]}</symbol>`).join('')}
    </svg>`;

  /* Ícone comum. `extra` recebe atributos crus (ex.: id="iconSun"). */
  const use = (id, cls = 'ic', extra = '') =>
    `<svg class="${cls}"${extra} aria-hidden="true"><use href="#${id}"></use></svg>`;

  /* Ícone grande dos espaços reservados de imagem. */
  const plate = (id) =>
    `<svg class="plate__icon" fill="none" stroke="currentColor" stroke-width="1.4"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><use href="#${id}"></use></svg>`;

  return { sprite, use, plate, ids: () => Object.keys(SYMBOLS) };
})();
