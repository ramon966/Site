/* ============================================================
   components/footer.js — rodapé
   As colunas saem de NA.site (navegação, contato, redes sociais);
   o ano é calculado no render, então nunca fica desatualizado.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.footer = (function () {
  const { each, t } = NA.dom;

  /* links da coluna "Navegação": os ids listados em NA.site.footerNav,
     reaproveitando os rótulos da navegação principal */
  const navColumn = () => {
    const items = NA.site.footerNav
      .map((id) => NA.site.nav.find((item) => item.id === id))
      .filter(Boolean);
    return each(items, (item) => `<li><a href="#${item.id}"${t(item.key)}></a></li>`);
  };

  /* endereço de cada unidade, uma linha por item */
  const unitItem = (u) => (NA.units.published(u)
    ? `<li>${NA.units.oneLine(u)}</li>`
    : `<li>${u.city} — <span style="opacity:.6"${t('unit_soon')}></span></li>`);

  return function footer() {
    const { email, legalName } = NA.site;
    return `
      <footer class="site">
        <div class="container">
          <div class="footer-grid">
            <div>
              ${NA.components.brand()}
              <p${t('footer_tagline')}></p>
            </div>

            <div class="footer-col">
              <h4${t('footer_nav_title')}></h4>
              <ul>${navColumn()}</ul>
            </div>

            <div class="footer-col">
              <h4${t('footer_contact_title')}></h4>
              <ul>
                <li><a href="mailto:${email}">${email.replace('@', '@<wbr>')}</a></li>
                ${each(NA.site.units, unitItem)}
                ${NA.site.whatsapp
                  ? `<li><a href="${NA.site.whatsapp.href}">${NA.site.whatsapp.number}</a></li>`
                  : `<li style="opacity:.6"${t('contact_whatsapp_note')}></li>`}
              </ul>
            </div>

            <div class="footer-col">
              <h4${t('footer_follow_title')}></h4>
              ${NA.components.socialRow()}
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} ${legalName}. <span${t('footer_rights')}></span></p>
          </div>
        </div>
      </footer>`;
  };
})();
