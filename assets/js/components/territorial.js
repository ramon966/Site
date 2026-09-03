/* ============================================================
   components/territorial.js — serviços territoriais em cartões
   Itens em NA.content.territorial (a grade se ajusta à quantidade).
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.territorial = (function () {
  const { each, t, tHtml } = NA.dom;

  const card = ({ title, body, caption }) => `
    <article class="card reveal">
      ${NA.components.plate({ caption, corners: false, reveal: false })}
      <div class="card-body">
        <h3${t(title)}></h3>
        <p${t(body)}></p>
      </div>
    </article>`;

  return function territorial() {
    return `
      <section class="section" id="territorial">
        <div class="container">
          <div class="head-row">
            <div>
              <p class="eyebrow"${t('terr_eyebrow')}></p>
              <h2 class="title"${tHtml('terr_title')}></h2>
            </div>
            <p class="lede"${t('terr_body')}></p>
          </div>

          <div class="card-grid">
            ${each(NA.content.territorial, card)}
          </div>
        </div>
      </section>`;
  };
})();
