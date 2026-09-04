/* ============================================================
   components/testimonial.js — depoimento em destaque
   Conteúdo em NA.content.testimonial.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.testimonial = (function () {
  const { t } = NA.dom;

  return function testimonial() {
    const data = NA.content.testimonial;
    return `
      <section class="section">
        <div class="container">
          <div class="testi-grid">
            ${NA.components.plate({ icon: 'i-plate-person', ratio: '3/4', caption: data.caption })}
            <div class="testi-card reveal">
              <span class="mark">&ldquo;</span>
              <blockquote${t(data.quote)}></blockquote>
              <hr>
              <p class="name">${data.name}</p>
              <p class="role"${t(data.role)}></p>
            </div>
          </div>
        </div>
      </section>`;
  };
})();
