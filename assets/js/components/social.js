/* ============================================================
   components/social.js — barra de selos das redes sociais

   Os links vêm de NA.site.social. Usada na seção de contato e no
   rodapé (o cabeçalho não exibe redes sociais).
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.socialRow = (function () {
  const { each, tAria } = NA.dom;

  const link = ({ href, label, icon }) =>
    `<a class="stamp" href="${href}" target="_blank" rel="noopener" title="${label}">${NA.icons.use(icon, 'ic-stamp')}</a>`;

  return function socialRow({ cls = '', style = '' } = {}) {
    return `
      <div class="stamp-row${cls ? ' ' + cls : ''}"${style ? ` style="${style}"` : ''} role="group"${tAria('footer_follow_title')}>
        ${each(NA.site.social, link)}
      </div>`;
  };
})();
