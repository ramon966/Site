/* ============================================================
   components/whatsapp.js — botão flutuante do WhatsApp

   Um botão redondo fixo no canto da tela; o clique abre uma caixinha
   de conversa com um balão de boas-vindas e o botão que leva ao
   WhatsApp. O número vem de NA.site.whatsapp: sem número definido, o
   botão não aparece. Abrir e fechar fica em modules/whatsapp.js.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.whatsappFloat = (function () {
  const { t, tAria } = NA.dom;

  return function whatsappFloat() {
    const wa = NA.site.whatsapp;
    if (!wa) return '';

    return `
      <div class="wa-float" id="waFloat">
        <div class="wa-float__box" id="waBox" role="dialog" aria-labelledby="waTitle" hidden>
          <div class="wa-float__head">
            <p class="wa-float__title" id="waTitle"${t('wa_title')}></p>
            <button type="button" class="wa-float__close" id="waClose"${tAria('aria_close')}>
              ${NA.icons.use('i-close', 'ic')}
            </button>
          </div>
          <div class="wa-float__body">
            <p class="wa-float__bubble"${t('wa_greeting')}></p>
            <a class="wa-float__cta" id="waCta" href="${wa.href}" target="_blank" rel="noopener">
              <span${t('wa_cta')}></span>
              ${NA.icons.use('i-send', 'ic')}
            </a>
          </div>
          <span id="waPrefill" hidden${t('wa_prefill')}></span>
        </div>

        <button type="button" class="wa-float__button" id="waToggle" aria-expanded="false" aria-controls="waBox"${tAria('wa_title')}>
          ${NA.icons.use('i-whatsapp', 'ic')}
          <span class="wa-float__tooltip" aria-hidden="true"${t('wa_cta')}></span>
        </button>
      </div>`;
  };
})();
