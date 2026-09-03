/* ============================================================
   lib/dom.js — utilitários mínimos de template

   Os componentes devolvem strings de HTML; estas funções servem
   para montar listas e para marcar onde cada tradução entra.
   Não existe framework: `NA.dom.mount` joga o HTML final no #app.
   ============================================================ */
window.NA = window.NA || {};

NA.dom = (function () {
  /* Percorre uma lista e concatena o HTML de cada item.
     each(cards, c => `<li>${c.nome}</li>`) */
  const each = (list, fn) => list.map(fn).join('');

  /* Atributo opcional: some da marcação quando o valor é nulo. */
  const attr = (name, value) =>
    value == null || value === false ? '' : ` ${name}="${String(value).replace(/"/g, '&quot;')}"`;

  /* Marcadores de tradução (preenchidos por modules/i18n.js após o render).
     Uso: `<p class="lede"${t('hero_body')}></p>` */
  const t      = (key) => attr('data-i18n', key);
  const tHtml  = (key) => attr('data-i18n-html', key);   // texto com <em>, <span>…
  const tPh    = (key) => attr('data-i18n-ph', key);     // placeholder
  const tTitle = (key) => attr('data-i18n-title', key);  // title
  const tAria  = (key) => attr('data-i18n-aria', key);   // aria-label

  const mount = (target, html) => { target.innerHTML = html; };

  return { each, attr, t, tHtml, tPh, tTitle, tAria, mount };
})();
