/* ============================================================
   main.js — ponto de entrada

   1. monta a página dentro de #app a partir dos componentes;
   2. injeta o sprite de ícones no topo do <body>;
   3. inicializa os módulos de comportamento.

   Carregado com defer: o DOM já está pronto e todos os NA.* que os
   <script> anteriores registraram já existem.
   ============================================================ */
(function () {
  const app = document.getElementById('app');
  if (!app) return;

  const c = NA.components;
  const neatline = () => '<div class="neatline"></div>';

  /* ordem das seções da home — mexer aqui reordena a página */
  const page = [
    c.header(),
    '<main>',
    c.hero(),
    c.overview(),
    neatline(),
    c.about(),
    neatline(),
    c.services(),   /* três seções: fundiária, ambiental e consultoria */
    neatline(),
    c.contact(),
    '</main>',
    c.footer(),
    c.whatsappFloat()   /* botão flutuante, fixo no canto da tela */
  ];

  NA.dom.mount(app, page.join('\n'));
  document.body.insertAdjacentHTML('afterbegin', NA.icons.sprite());

  /* o lightbox acrescenta o <dialog> ao body antes do i18n, para o
     botão de fechar também receber o texto traduzido */
  NA.lightbox.init();

  /* i18n primeiro: preenche os textos antes de qualquer observador rodar */
  NA.i18n.init();
  NA.theme.init();
  NA.nav.init();
  NA.reveal.init();
  NA.whatsapp.init();
})();
