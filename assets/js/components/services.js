/* ============================================================
   components/services.js — os três grupos de serviços

   Cada grupo de NA.content.services vira uma seção própria (é o
   âncora da navegação): título à esquerda, fileira de cartões à
   direita. O último grupo fecha com a chamada para o contato.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.services = (function () {
  const { each, t, tHtml } = NA.dom;

  /* mesma linha tracejada que main.js usa entre as seções */
  const SEPARATOR = '<div class="neatline"></div>';

  const item = (key) => `<li${t(key)}></li>`;

  const card = ({ icon, title, caption, items }) => `
    <article class="svc-card reveal">
      <div class="svc-card__media">
        ${NA.components.plate({ icon, caption, corners: false, reveal: false })}
      </div>
      <div class="svc-card__body">
        <a class="svc-card__head" href="#contato">
          <h3${t(title)}></h3>
          ${NA.icons.use('i-arrow-right', 'svc-card__arrow')}
        </a>
        ${items.length ? `<ul class="svc-list">${each(items, item)}</ul>` : ''}
      </div>
    </article>`;

  const cta = () => `
    <div class="svc-cta reveal">
      <p${t('svc_cta_lead')}></p>
      <a class="btn btn--primary" href="#contato"${t('svc_cta')}></a>
    </div>`;

  /* `--cols` é a quantidade de cartões do grupo: a fileira nasce com o
     número exato de colunas e, abaixo de 1180px, o CSS assume o comando. */
  const group = ({ id, title, body, cards }, last) => `
    <section class="section" id="${id}">
      <div class="container">
        <div class="svc-group">
          <div class="svc-intro reveal">
            <p class="eyebrow"${t('svc_eyebrow')}></p>
            <h2 class="title"${tHtml(title)}></h2>
            <p class="lede"${t(body)}></p>
          </div>

          <div class="svc-cards" style="--cols:${cards.length}">
            ${each(cards, card)}
          </div>
        </div>
        ${last ? cta() : ''}
      </div>
    </section>`;

  return function services() {
    const groups = NA.content.services;
    return groups
      .map((g, i) => group(g, i === groups.length - 1))
      .join(SEPARATOR);
  };
})();
