/* ============================================================
   components/plate.js — espaço reservado de imagem

   Enquanto a foto real não entra, exibe uma moldura tracejada com
   cantos de mira, um ícone e a legenda do que deve ocupar o lugar.
   Ao substituir por foto: troque a chamada por
   <img src="assets/img/…" alt="…"> dentro do mesmo bloco.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.plate = (function () {
  const { t } = NA.dom;

  const CORNERS = ['tl', 'tr', 'bl', 'br']
    .map((pos) => `<span class="plate__corner ${pos}"></span>`).join('');

  return function plate({
    icon = 'i-plate-landscape',
    ratio = '4/3',
    caption,
    label = '',      // rótulo fixo acima da legenda (nome próprio, não traduzido)
    corners = true,
    reveal = true,
    cls = '',        // modificador extra, ex.: 'plate--map'
    style = ''
  } = {}) {
    return `
      <div class="plate${reveal ? ' reveal' : ''}${cls ? ' ' + cls : ''}" style="--ar:${ratio}${style}">
        ${corners ? CORNERS : ''}
        ${NA.icons.plate(icon)}
        ${label ? `<p class="plate__label">${label}</p>` : ''}
        <p class="plate__cap"${t(caption)}></p>
      </div>`;
  };
})();
