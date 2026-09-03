/* ============================================================
   components/brand.js — logotipo da Norte Agro

   Duas versões do mesmo logo, trocadas por CSS conforme o tema:
     logo-light.png  letras escuras, para o fundo claro (modo claro)
     logo-dark.png   letras brancas, para o fundo escuro (modo escuro)

   As duas ficam no HTML e o CSS esconde a que não vale para o tema
   em vigor — assim a troca é instantânea, sem esperar download.
   O link é rotulado por aria-label e as imagens são decorativas.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.brand = () => `
  <a class="brand" href="#inicio" aria-label="Norte Agro Projetos — ir para o início">
    <img class="brand__logo brand__logo--light" src="assets/img/logo-light.png"
         width="2175" height="525" alt="" aria-hidden="true">
    <img class="brand__logo brand__logo--dark" src="assets/img/logo-dark.png"
         width="393" height="86" alt="" aria-hidden="true">
  </a>`;
