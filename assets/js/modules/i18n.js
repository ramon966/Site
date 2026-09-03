/* ============================================================
   modules/i18n.js — troca de idioma e seletor no cabeçalho

   Roda depois do render: percorre os elementos marcados pelos
   helpers de NA.dom e preenche o texto conforme o idioma.

     data-i18n       -> texto do elemento
     data-i18n-html  -> conteúdo HTML (títulos com <em>, <span>…)
     data-i18n-ph    -> atributo placeholder
     data-i18n-title -> atributo title
     data-i18n-aria  -> atributo aria-label

   Os idiomas disponíveis vêm de NA.site.locales e os textos de
   assets/js/i18n/<idioma>.js.
   ============================================================ */
window.NA = window.NA || {};

NA.i18n = (function () {
  const STORAGE_KEY = 'na_lang';
  const FALLBACK = 'pt-BR';

  /* aplica o valor traduzido em todos os elementos com o atributo indicado */
  const FILLS = [
    ['data-i18n',       (el, value) => { el.textContent = value; }],
    ['data-i18n-html',  (el, value) => { el.innerHTML = value; }],
    ['data-i18n-ph',    (el, value) => el.setAttribute('placeholder', value)],
    ['data-i18n-title', (el, value) => el.setAttribute('title', value)],
    ['data-i18n-aria',  (el, value) => el.setAttribute('aria-label', value)]
  ];

  let select, toggle, menu, toggleFlag, toggleCode;
  let current = FALLBACK;

  const metaOf = (tag) => NA.site.locales.find((loc) => loc.tag === tag) || NA.site.locales[0];

  /* Chave ausente na tradução escolhida cai no português, em vez de
     deixar o elemento vazio. */
  const lookup = (tag, key) => {
    const dicts = NA.translations || {};
    const value = (dicts[tag] || {})[key];
    return value != null ? value : (dicts[FALLBACK] || {})[key];
  };

  function translate(tag) {
    const meta = metaOf(tag);

    FILLS.forEach(([attribute, fill]) => {
      document.querySelectorAll(`[${attribute}]`).forEach((el) => {
        const value = lookup(meta.tag, el.getAttribute(attribute));
        if (value != null) fill(el, value);
      });
    });

    if (toggleFlag) toggleFlag.src = meta.flag;
    if (toggleCode) toggleCode.textContent = meta.code;
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === meta.tag;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    document.documentElement.lang = meta.tag;
    current = meta.tag;
    try { localStorage.setItem(STORAGE_KEY, meta.tag); } catch (e) {}
  }

  const openMenu = () => {
    menu.hidden = false;
    select.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    menu.hidden = true;
    select.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  function savedLocale() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && NA.site.locales.some((loc) => loc.tag === saved)) return saved;
    } catch (e) {}
    return FALLBACK;
  }

  function init() {
    select = document.getElementById('langSelect');
    toggle = document.getElementById('langToggle');
    menu = document.getElementById('langMenu');
    toggleFlag = document.getElementById('langToggleFlag');
    toggleCode = document.getElementById('langToggleCode');

    translate(savedLocale());
    if (!select || !toggle || !menu) return;

    toggle.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));

    menu.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      translate(btn.getAttribute('data-lang'));
      closeMenu();
      toggle.focus();
    });

    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) { closeMenu(); toggle.focus(); }
    });
  }

  return { init, apply: translate, current: () => current };
})();
