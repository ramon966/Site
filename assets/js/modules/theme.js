/* ============================================================
   modules/theme.js — botão de alternância claro/escuro
   O tema salvo é aplicado antes da pintura por assets/js/theme-init.js.
   ============================================================ */
window.NA = window.NA || {};

NA.theme = (function () {
  const STORAGE_KEY = 'na_theme';
  let sun, moon;

  /* tema em vigor: o escolhido pelo usuário ou, na ausência dele, o do sistema */
  const current = () =>
    document.documentElement.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function syncIcon() {
    const dark = current() === 'dark';
    sun.style.display = dark ? 'none' : 'block';
    moon.style.display = dark ? 'block' : 'none';
  }

  function init() {
    const button = document.getElementById('themeToggle');
    sun = document.getElementById('iconSun');
    moon = document.getElementById('iconMoon');
    if (!button || !sun || !moon) return;

    syncIcon();

    button.addEventListener('click', () => {
      const next = current() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      syncIcon();
    });
  }

  return { init, current };
})();
