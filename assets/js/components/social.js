/* ============================================================
   components/social.js — barra de selos das redes sociais

   Os links vêm de NA.site.social. Usada na seção de contato e no
   rodapé (o cabeçalho não exibe redes sociais).
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.socialRow = (function () {
  const { each, tAria } = NA.dom;

  /* O selo do WhatsApp não traz link próprio: usa o número de NA.site.whatsapp,
     para não repetir o mesmo dado em dois lugares. Sem número definido, ele
     fica de fora da barra. */
  const href = (s) => (s.id === 'whatsapp' ? NA.site.whatsapp && NA.site.whatsapp.href : s.href);

  const link = (s) =>
    `<a class="stamp" href="${href(s)}" target="_blank" rel="noopener" title="${s.label}">${NA.icons.use(s.icon, 'ic-stamp')}</a>`;

  return function socialRow({ cls = '', style = '' } = {}) {
    return `
      <div class="stamp-row${cls ? ' ' + cls : ''}"${style ? ` style="${style}"` : ''} role="group"${tAria('footer_follow_title')}>
        ${each(NA.site.social.filter(href), link)}
      </div>`;
  };
})();
