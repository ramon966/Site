/* ============================================================
   components/contact.js — dados de contato e formulário

   Os campos do formulário vêm de NA.content.formFields e os canais
   de atendimento de NA.site. O envio é tratado em
   modules/contact-form.js (hoje apenas front-end).
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.contact = (function () {
  const { each, t, tHtml, tPh } = NA.dom;

  /* <wbr> oferece um ponto de quebra depois do @: em tela estreita o e-mail
     quebra entre usuário e domínio, em vez de partir no meio do domínio */
  const wrappable = (email) => email.replace('@', '@<wbr>');

  const infoRow = (icon, content) => `
    <div class="info-row">
      <span class="ic-wrap">${NA.icons.use(icon)}</span>
      ${content}
    </div>`;

  /* uma linha por unidade; sem endereço definido, mostra "em breve" */
  const unitRow = (u) => infoRow('i-pin', NA.units.published(u)
    ? `<p><span class="strong">${NA.units.title(u)}</span><br>${NA.units.street(u)}<br>${NA.units.zip(u)}</p>`
    : `<p><span class="strong">${NA.units.title(u)}</span><br><span style="opacity:.6"${t('unit_soon')}></span></p>`);

  const whatsappRow = () => {
    const wa = NA.site.whatsapp;
    return infoRow('i-phone', wa
      ? `<p><a href="${wa.href}" class="strong" style="text-decoration:none">${wa.number}</a></p>`
      : `<p class="strong" style="opacity:.6"${t('contact_whatsapp_note')}></p>`);
  };

  /* um espaço reservado de mapa por unidade — o nome da cidade é o mesmo
     em todos os idiomas, por isso vai como rótulo fixo, fora do i18n */
  const mapPlate = (u) => NA.components.plate({
    icon: 'i-plate-marker',
    ratio: '16/9',
    caption: 'contact_map_cap',
    label: NA.units.title(u),
    cls: 'plate--map'
  });

  const field = (f) => `
    <div class="field${f.full ? ' full' : ''}">
      <label for="${f.id}"${f.labelHasHtml ? tHtml(f.label) : t(f.label)}></label>
      ${f.type === 'textarea'
        ? `<textarea id="${f.id}" name="${f.name}"${tPh(f.placeholder)}></textarea>`
        : `<input id="${f.id}" name="${f.name}" type="${f.type}"${f.required ? ' required' : ''}${tPh(f.placeholder)}>`}
    </div>`;

  return function contact() {
    const { email } = NA.site;
    return `
      <section class="section" id="contato">
        <div class="container">
          <p class="eyebrow"${t('contact_eyebrow')}></p>
          <h2 class="title"${tHtml('contact_title')}></h2>
          <p class="lede" style="margin:.9rem 0 3rem"${t('contact_body')}></p>

          <div class="contact-grid">
            <div class="contact-info reveal">
              ${each(NA.site.units, unitRow)}
              ${infoRow('i-mail', `<p><a href="mailto:${email}" class="strong" style="text-decoration:none">${wrappable(email)}</a></p>`)}
              ${whatsappRow()}
              ${NA.components.socialRow({ style: 'margin-top:1.75rem' })}
            </div>

            <form class="contact-form reveal" id="contactForm">
              <div class="form-grid">
                ${each(NA.content.formFields, field)}
              </div>
              <div class="form-foot">
                <button class="btn btn--primary" type="submit"${t('form_submit')}></button>
                <p class="form-success" id="formSuccess"${t('form_success')}></p>
              </div>
              <p class="form-note" style="margin-top:1rem"${t('form_note')}></p>
            </form>
          </div>

          <div class="map-grid" style="margin-top:3.5rem">
            ${each(NA.site.units, mapPlate)}
          </div>
        </div>
      </section>`;
  };
})();
