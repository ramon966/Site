/* ============================================================
   lib/units.js — formatação dos endereços das unidades

   Uma unidade só é considerada publicada quando tem `street`. Enquanto
   não tiver, contato e rodapé exibem a cidade com "endereço em breve",
   em vez de uma linha vazia.
   ============================================================ */
window.NA = window.NA || {};

NA.units = (function () {
  /* "Mara Rosa - GO" */
  const title = (u) => `${u.city} - ${u.state}`;

  /* "Rua Santa Catarina, 363 — Centro" */
  const street = (u) => (u.district ? `${u.street} — ${u.district}` : u.street);

  /* "CEP 76490-000", sem quebrar o número no meio em telas estreitas */
  const zip = (u) => (u.zip ? `<span style="white-space:nowrap">CEP ${u.zip}</span>` : '');

  /* "Mara Rosa — Rua Santa Catarina, 363" (uma linha, para o rodapé) */
  const oneLine = (u) => `${u.city} — ${u.street}`;

  const published = (u) => Boolean(u.street);

  /* a sede, de onde sai a coordenada do hero */
  const head = () => NA.site.units[0];

  return { title, street, zip, oneLine, published, head };
})();
