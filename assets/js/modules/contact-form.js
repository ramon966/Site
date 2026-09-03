/* ============================================================
   modules/contact-form.js — formulário de contato (somente front-end)

   Hoje o envio é interceptado e apenas exibe a mensagem de sucesso.
   Para conectar a um serviço real (Formspree, Web3Forms, API própria),
   troque o corpo do listener por um fetch() para o endpoint e remova
   o aviso `form_note` do dicionário/da marcação.
   ============================================================ */
window.NA = window.NA || {};

NA.contactForm = (function () {
  function init() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    if (!form || !success) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      success.classList.add('show');
      form.reset();
    });
  }

  return { init };
})();
