/* ============================================================
   modules/whatsapp.js — abre e fecha a caixinha do WhatsApp

   O botão redondo alterna a caixinha; o ×, a tecla Esc e um clique
   fora dela fecham. Ao seguir para o WhatsApp, o link leva uma
   mensagem inicial já escrita, no idioma em uso no site.
   ============================================================ */
window.NA = window.NA || {};

NA.whatsapp = (function () {
  function init() {
    const root = document.getElementById('waFloat');
    if (!root) return;

    const toggle = document.getElementById('waToggle');
    const box = document.getElementById('waBox');
    const close = document.getElementById('waClose');
    const cta = document.getElementById('waCta');
    const prefill = document.getElementById('waPrefill');
    const baseHref = cta.getAttribute('href');

    const setOpen = (open) => {
      box.hidden = !open;
      root.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      if (open) cta.focus();
    };

    toggle.addEventListener('click', () => setOpen(box.hidden));
    close.addEventListener('click', () => { setOpen(false); toggle.focus(); });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !box.hidden) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (!box.hidden && !root.contains(e.target)) setOpen(false);
    });

    /* monta o link na hora do clique, para a mensagem sair no idioma atual */
    cta.addEventListener('click', () => {
      const text = prefill.textContent.trim();
      cta.href = text ? `${baseHref}?text=${encodeURIComponent(text)}` : baseHref;
    });
  }

  return { init };
})();
