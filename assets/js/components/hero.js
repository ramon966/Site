/* ============================================================
   components/hero.js — primeira dobra
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.hero = (function () {
  const { t, tHtml } = NA.dom;

  /* "13°59'S 49°06'O · Mara Rosa · Goiânia — Brasil":
     coordenada da sede seguida das cidades de todas as unidades */
  const coordenadas = () => {
    const cidades = NA.site.units.map((u) => u.city).join(' · ');
    return `${NA.units.head().coordinates} · ${cidades} — Brasil`;
  };

  return function hero() {
    return `
      <section class="hero" id="inicio">
        <div class="container">
          <div class="reveal">
            <p class="hero__coord">${coordenadas()}</p>
            <p class="eyebrow"${t('hero_eyebrow')}></p>
            <h1${tHtml('hero_title')}></h1>
            <p class="lede"${t('hero_body')}></p>
            <div class="cta-row">
              <a class="btn btn--primary" href="#contato"${t('hero_cta1')}></a>
              <a class="btn btn--outline" href="#territorial"${t('hero_cta2')}></a>
            </div>
          </div>
          ${NA.components.plate({ ratio: '4/5', caption: 'hero_imgcap' })}
        </div>
      </section>`;
  };
})();
