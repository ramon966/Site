/* ============================================================
   components/about.js — "Quem somos" + bloco de missão, visão e valores
   Itens do bloco escuro em NA.content.purpose.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.about = (function () {
  const { each, t, tHtml } = NA.dom;

  const purposeItem = ({ icon, title, body }) => `
    <div class="purpose-item">
      <span class="ic-wrap">${NA.icons.use(icon)}</span>
      <h3${t(title)}></h3>
      <p${t(body)}></p>
    </div>`;

  return function about() {
    return `
      <section class="section" id="quem-somos">
        <div class="container">
          <div class="about-grid">
            <div class="about-copy reveal">
              <p class="eyebrow"${t('about_eyebrow')}></p>
              <h2 class="title"${tHtml('about_title')}></h2>
              <p${t('about_p1')}></p>
              <p${t('about_p2')}></p>
              <span class="badge-year">
                ${NA.icons.use('i-pin', 'ic', ' width="16" height="16"')}
                <span${t('about_badge')}></span>
              </span>
            </div>
            ${NA.components.plate({ ratio: '4/5', caption: 'about_imgcap' })}
          </div>

          <div class="purpose reveal">
            <p${t('purpose_body')}></p>
            <div class="purpose-grid">
              ${each(NA.content.purpose, purposeItem)}
            </div>
          </div>
        </div>
      </section>`;
  };
})();
