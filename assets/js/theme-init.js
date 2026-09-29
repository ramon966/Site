/* ============================================================
   theme-init.js — aplica o tema salvo ANTES da primeira pintura.
   Precisa ser carregado de forma síncrona no <head> (sem defer),
   caso contrário a página pisca no tema errado ao recarregar.
   ============================================================ */
/* Sem escolha salva, o site fica no tema claro (o padrão do CSS),
   independentemente do tema do sistema. O escuro só vem de um clique no
   botão de tema, que fica salvo para as próximas visitas. */
(function () {
  try {
    var saved = localStorage.getItem('na_theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {
    /* localStorage bloqueado (modo privado, cookies desativados): fica no claro */
  }
})();
