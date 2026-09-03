/* ============================================================
   components/projects.js — projetos e planejamentos
   Itens em NA.content.projects; fecha com imagem e chamada para o contato.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.projects = (function () {
  const { each, t, tHtml } = NA.dom;

  const card = ({ icon, title, body }) => `
    <div class="proj-card reveal">
      <span class="ic-wrap">${NA.icons.use(icon)}</span>
      <h3${t(title)}></h3>
      <p${t(body)}></p>
    </div>`;

  return function projects() {
    return `
      <section class="section" id="projetos">
        <div class="container">
          <div class="head-row">
            <div>
              <p class="eyebrow"${t('proj_eyebrow')}></p>
              <h2 class="title"${tHtml('proj_title')}></h2>
            </div>
            <p class="lede"${t('proj_body')}></p>
          </div>

          <div class="proj-grid">
            ${each(NA.content.projects, card)}
          </div>

          <div class="proj-foot">
            ${NA.components.plate({ ratio: '16/10', caption: 'proj_imgcap' })}
            <div class="reveal">
              <p${t('proj_cta_lead')}></p>
              <a class="btn btn--primary" href="#contato"${t('proj_cta')}></a>
            </div>
          </div>
        </div>
      </section>`;
  };
})();
