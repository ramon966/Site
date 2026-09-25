/* ============================================================
   modules/lightbox.js — amplia uma foto ao clicar

   Qualquer botão com data-lightbox="<caminho da imagem>" abre a foto
   grande num <dialog>. O alt vem da miniatura dentro do botão. Fecha
   com Esc, com o botão × ou clicando em qualquer lugar.
   ============================================================ */
window.NA = window.NA || {};

NA.lightbox = (function () {
  const { tAria } = NA.dom;

  function init() {
    if (!document.querySelector('[data-lightbox]')) return;

    document.body.insertAdjacentHTML('beforeend', `
      <dialog class="lightbox">
        <button type="button" class="lightbox__close"${tAria('aria_close')}>×</button>
        <img alt="">
      </dialog>`);

    const dialog = document.body.lastElementChild;
    const img = dialog.querySelector('img');

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-lightbox]');
      if (!trigger) return;
      const thumb = trigger.querySelector('img');
      img.src = trigger.dataset.lightbox;
      img.alt = thumb ? thumb.alt : '';
      dialog.showModal();
    });

    dialog.addEventListener('click', () => dialog.close());
  }

  return { init };
})();
