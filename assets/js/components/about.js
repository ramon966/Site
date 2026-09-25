/* ============================================================
   components/about.js — "Quem somos" + bloco de missão, visão e valores
   Itens do bloco escuro em NA.content.purpose.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.about = (function () {
  const { each, t, tHtml, tAlt } = NA.dom;

  const purposeItem = ({ icon, title, body }) => `
    <div class="purpose-item">
      <span class="ic-wrap">${NA.icons.use(icon)}</span>
      <h3${t(title)}></h3>
      <p${t(body)}></p>
    </div>`;

  /* o número já sai com o valor final: sem JS (ou sem animação), é ele que
     aparece; modules/counter.js zera e conta até ele ao entrar na tela */
  const statItem = ({ value, prefix, unit, label }) => `
    <div class="stat">
      <p class="stat__number">
        ${prefix ? `<span class="stat__prefix">${prefix}</span>` : ''}<span data-count-to="${value}">${value}</span>
        <span class="stat__unit"${t(unit)}></span>
      </p>
      <p class="stat__label"${t(label)}></p>
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
            <div class="plate plate--photo reveal" style="--ar:1376/1143">
              <img src="assets/img/01-reuniao-atendimento-escritorio.webp" width="1376" height="1143"
                   loading="lazy" decoding="async"${tAlt('about_img_alt')}>
              ${['tl', 'tr', 'bl', 'br'].map((pos) => `<span class="plate__corner ${pos}"></span>`).join('')}
            </div>
          </div>
        </div>

        <!-- faixa de ponta a ponta: fica fora do .container para a foto
             ocupar a largura toda; os números usam um .container próprio -->
        <div class="stats">
          <div class="container stats__grid reveal">
            ${each(NA.content.stats, statItem)}
          </div>
        </div>

        <div class="container">
          <div class="purpose reveal">
            <h3 class="purpose-title"${t('purpose_t')}></h3>
            <p${t('purpose_body')}></p>
            <p${t('purpose_body2')}></p>
            <div class="purpose-grid">
              ${each(NA.content.purpose, purposeItem)}
            </div>
          </div>
        </div>
      </section>`;
  };
})();
