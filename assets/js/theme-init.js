/* ============================================================
   theme-init.js — aplica o tema salvo ANTES da primeira pintura.
   Precisa ser carregado de forma síncrona no <head> (sem defer),
   caso contrário a página pisca no tema errado ao recarregar.
   ============================================================ */
(function () {
  try {
    var saved = localStorage.getItem('na_theme');
    var theme = saved || 'system';
    if (theme !== 'system') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (e) {
    /* localStorage bloqueado (modo privado, cookies desativados): segue no tema do sistema */
  }
})();
