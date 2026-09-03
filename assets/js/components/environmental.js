/* ============================================================
   components/environmental.js — serviços ambientais
   Itens em NA.content.environmental.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.environmental = (function () {
  const { each, t, tHtml } = NA.dom;

  const item = ({ icon, title, body }) => `
    <div class="env-item">
      <span class="ic-wrap">${NA.icons.use(icon, 'ic', ' width="26" height="26"')}</span>
      <h3${t(title)}></h3>
      <p${t(body)}></p>
    </div>`;

  return function environmental() {
    return `
      <section class="section section--alt" id="ambiental">
        <div class="container">
          <div class="env-wrap">
            ${NA.components.plate({ ratio: '1/1', caption: 'env_imgcap' })}

            <div class="reveal">
              <p class="eyebrow"${t('env_eyebrow')}></p>
              <h2 class="title"${tHtml('env_title')}></h2>
              <p class="lede" style="margin:.9rem 0 2rem"${t('env_body')}></p>

              <div class="env-list">
                ${each(NA.content.environmental, item)}
              </div>
            </div>
          </div>
        </div>
      </section>`;
  };
})();
