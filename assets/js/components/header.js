/* ============================================================
   components/header.js — cabeçalho fixo

   Marca, navegação (que vira painel lateral no mobile), seletor de idioma
   e botões de tema e de menu. As redes sociais aparecem só na seção de
   contato e no rodapé.
   Os ids usados aqui são os que modules/{i18n,theme,nav}.js procuram.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.header = (function () {
  const { each, t, tTitle, tAria } = NA.dom;

  const navLinks = () => `
    <ul>
      ${each(NA.site.nav, (item) => `<li><a href="#${item.id}"${t(item.key)}></a></li>`)}
    </ul>`;

  const langSelect = () => {
    const first = NA.site.locales[0];
    return `
      <div class="lang-select" id="langSelect">
        <button type="button" class="lang-select-toggle" id="langToggle"
                ${tAria('lang_switch_aria')} aria-haspopup="listbox" aria-expanded="false">
          <img class="lang-select-flag" id="langToggleFlag" src="${first.flag}" alt="">
          <span class="lang-select-code" id="langToggleCode">${first.code}</span>
          ${NA.icons.use('i-caret', 'lang-select-caret', ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"')}
        </button>
        <div class="lang-select-menu" id="langMenu" role="listbox" hidden>
          ${each(NA.site.locales, (loc, i) => `
            <button type="button" class="lang-btn${i === 0 ? ' active' : ''}" role="option"
                    data-lang="${loc.tag}"${tTitle(loc.titleKey)} aria-selected="${i === 0}">
              <img class="lang-select-flag" src="${loc.flag}" alt="">
              <span class="lang-select-code">${loc.code}</span>
            </button>`)}
        </div>
      </div>`;
  };

  return function header() {
    return `
      <header class="site" id="top">
        <div class="container">
          ${NA.components.brand()}

          <nav class="primary" id="primaryNav">
            ${navLinks()}
          </nav>

          <div class="head-tools">
            ${langSelect()}

            <button class="icon-btn" id="themeToggle" type="button"${tTitle('aria_theme')}>
              ${NA.icons.use('i-sun', 'ic', ' id="iconSun"')}
              ${NA.icons.use('i-moon', 'ic', ' id="iconMoon" style="display:none"')}
            </button>

            <button class="icon-btn menu-toggle" id="menuToggle" type="button"
                    aria-controls="primaryNav" aria-expanded="false"${tTitle('aria_menu')}>
              ${NA.icons.use('i-menu', 'ic', ' id="iconMenu"')}
              ${NA.icons.use('i-close', 'ic', ' id="iconClose" style="display:none"')}
            </button>
          </div>
        </div>
      </header>`;
  };
})();
