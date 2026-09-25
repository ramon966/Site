/* ============================================================
   components/contact.js — canais de atendimento

   Endereços, e-mail e WhatsApp vêm de NA.site; abaixo deles, um
   espaço reservado de mapa por unidade.
   ============================================================ */
window.NA = window.NA || {};
NA.components = NA.components || {};

NA.components.contact = (function () {
  const { each, t, tHtml, tAlt, tAria } = NA.dom;

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

  /* unidade com `map`: mapa real do Google Maps, na mesma moldura do
     espaço reservado, com o nome da cidade e o link para abrir no app.
     Com `photo`, a foto da fachada entra como miniatura no canto do mapa;
     o clique amplia (modules/lightbox.js). */
  const mapEmbed = (u) => {
    const title = NA.units.title(u);
    const src = `https://www.google.com/maps?q=${encodeURIComponent(u.map.query)}&output=embed`;
    return `
      <figure class="map-embed reveal">
        <div class="plate plate--map plate--live" style="--ar:16/9">
          <iframe src="${src}" title="${title}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          ${['tl', 'tr', 'bl', 'br'].map((pos) => `<span class="plate__corner ${pos}"></span>`).join('')}
          ${u.photo ? `
          <button type="button" class="map-embed__thumb" data-lightbox="${u.photo.src}"${tAria('contact_photo_open')}>
            <img src="${u.photo.src}" loading="lazy" decoding="async"${tAlt(u.photo.alt)}>
          </button>` : ''}
        </div>
        <figcaption>
          <span class="plate__label">${title}</span>
          <a href="${u.map.link}" target="_blank" rel="noopener"${t('contact_map_open')}></a>
        </figcaption>
      </figure>`;
  };

  /* um espaço reservado de mapa por unidade — o nome da cidade é o mesmo
     em todos os idiomas, por isso vai como rótulo fixo, fora do i18n */
  const mapPlate = (u) => u.map ? mapEmbed(u) : NA.components.plate({
    icon: 'i-plate-marker',
    ratio: '16/9',
    caption: 'contact_map_cap',
    label: NA.units.title(u),
    cls: 'plate--map'
  });

  return function contact() {
    const { email } = NA.site;
    return `
      <section class="section" id="contato">
        <div class="container">
          <p class="eyebrow"${t('contact_eyebrow')}></p>
          <h2 class="title"${tHtml('contact_title')}></h2>
          <p class="lede" style="margin:.9rem 0 3rem"${t('contact_body')}></p>

          <div class="contact-info reveal">
            <div class="info-grid">
              ${each(NA.site.units, unitRow)}
              ${infoRow('i-mail', `<p><a href="mailto:${email}" class="strong" style="text-decoration:none">${wrappable(email)}</a></p>`)}
              ${whatsappRow()}
            </div>
            ${NA.components.socialRow({ style: 'margin-top:2rem' })}
          </div>

          <div class="map-grid" style="margin-top:3.5rem">
            ${each(NA.site.units, mapPlate)}
          </div>
        </div>
      </section>`;
  };
})();
