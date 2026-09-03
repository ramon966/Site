/* ============================================================
   components/overview.js — faixa "Visão geral" (3 chamadas curtas)
   Itens em NA.content.overview.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.overview = (function () {
  const { each, t, tHtml } = NA.dom;

  const item = ({ icon, title, body }) => `
    <div class="intro-item reveal">
      <span class="ic-wrap">${NA.icons.use(icon)}</span>
      <div>
        <h3${t(title)}></h3>
        <p${t(body)}></p>
      </div>
    </div>`;

  return function overview() {
    return `
      <section class="section" aria-labelledby="introTitle">
        <div class="container">
          <p class="eyebrow"${t('intro_eyebrow')}></p>
          <h2 class="title" id="introTitle"${tHtml('intro_title')}></h2>
          <p class="lede" style="margin-top:1rem"${t('intro_body')}></p>

          <div class="intro-grid">
            ${each(NA.content.overview, item)}
          </div>
        </div>
      </section>`;
  };
})();
