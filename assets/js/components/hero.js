/* ============================================================
   components/hero.js — primeira dobra
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.hero = (function () {
  const { t, tHtml } = NA.dom;

  return function hero() {
    return `
      <section class="hero" id="inicio">
        <img class="hero__bg" src="assets/img/Primeira%20FOTO.png" alt="" fetchpriority="high">
        <div class="container">
          <div class="hero__copy reveal">
            <h1${tHtml('hero_title')}></h1>
            <p class="lede"${t('hero_body')}></p>
            <p class="hero__support"${t('hero_body2')}></p>
            <div class="cta-row">
              <a class="btn btn--primary" href="#contato"${t('hero_cta1')}></a>
              <a class="btn btn--outline" href="#fundiaria"${t('hero_cta2')}></a>
            </div>
          </div>
        </div>
      </section>`;
  };
})();
