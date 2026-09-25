/* ============================================================
   components/services.js — os três grupos de serviços

   Cada grupo de NA.content.services vira uma seção própria (é o
   âncora da navegação): título à esquerda, fileira de cartões à
   direita.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.services = (function () {
  const { each, t, tHtml } = NA.dom;

  /* Cada fileira leva no máximo três cartões. A grade tem seis colunas, então
     o cartão ocupa 6 ÷ (cartões da fileira): dois numa fileira de três, três
     numa fileira de dois — assim a última fileira fecha a largura em vez de
     deixar um buraco. Cinco cartões viram 3 + 2; três viram 3; dois viram 2. */
  const ROW_MAX = 3;
  const GRID_COLS = 6;

  const rowSizes = (total) => {
    const sizes = [];
    for (let left = total; left > 0; left -= ROW_MAX) sizes.push(Math.min(ROW_MAX, left));
    return sizes;
  };

  /* quantas colunas cada cartão ocupa, na ordem em que aparecem */
  const spans = (total) =>
    rowSizes(total).reduce((list, size) => list.concat(Array(size).fill(GRID_COLS / size)), []);

  const item = (key) => `<li${t(key)}></li>`;

  const card = (spanList) => ({ title, items }, i) => `
    <article class="svc-card reveal" style="--span:${spanList[i]}">
      <div class="svc-card__body">
        <a class="svc-card__head" href="#contato">
          <h3${t(title)}></h3>
          ${NA.icons.use('i-arrow-right', 'svc-card__arrow')}
        </a>
        ${items.length ? `<ul class="svc-list">${each(items, item)}</ul>` : ''}
      </div>
    </article>`;

  const group = ({ id, title, body, cards }) => `
    <section class="section" id="${id}">
      <div class="container">
        <div class="svc-group">
          <div class="svc-intro reveal">
            <h2 class="title"${tHtml(title)}></h2>
            <p class="lede"${t(body)}></p>
          </div>

          <div class="svc-cards">
            ${each(cards, card(spans(cards.length)))}
          </div>
        </div>
      </div>
    </section>`;

  return function services() {
    return each(NA.content.services, group);
  };
})();
