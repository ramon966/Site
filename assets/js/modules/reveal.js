/* ============================================================
   modules/reveal.js — revela os elementos .reveal ao entrarem na tela
   Respeita prefers-reduced-motion e navegadores sem IntersectionObserver:
   nesses casos tudo já aparece visível.
   ============================================================ */
window.NA = window.NA || {};

NA.reveal = (function () {
  function init() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.14 });

    elements.forEach((el) => observer.observe(el));
  }

  return { init };
})();
