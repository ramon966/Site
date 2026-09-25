/* ============================================================
   modules/counter.js — contagem animada dos números em destaque

   Cada elemento com data-count-to="<n>" conta de 0 até n quando entra
   na tela, uma vez só. Com prefers-reduced-motion ou sem
   IntersectionObserver, o número final fica parado como veio no HTML.
   ============================================================ */
window.NA = window.NA || {};

NA.counter = (function () {
  const DURATION = 2000;

  /* começa rápido e desacelera no fim, como o contador do site de referência */
  const easeOut = (p) => 1 - Math.pow(1 - p, 3);

  function run(el) {
    const target = Number(el.dataset.countTo);
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      el.textContent = Math.round(target * easeOut(p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function init() {
    const elements = document.querySelectorAll('[data-count-to]');
    if (!elements.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    elements.forEach((el) => { el.textContent = '0'; });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        run(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    elements.forEach((el) => observer.observe(el));
  }

  return { init };
})();
