/* ============================================================
   data/content.js — o que cada seção lista

   Aqui ficam apenas as chaves de tradução e os ícones; o texto em si
   está em assets/js/i18n/<idioma>.js. Para adicionar um serviço,
   inclua um item nesta lista e as chaves nos três dicionários.
   ============================================================ */
window.NA = window.NA || {};

NA.content = {
  /* faixa de visão geral, logo abaixo do hero */
  overview: [
    { icon: 'i-pin',      title: 'intro1_t', body: 'intro1_b' },
    { icon: 'i-registry', title: 'intro2_t', body: 'intro2_b' },
    { icon: 'i-shield',   title: 'intro3_t', body: 'intro3_b' }
  ],

  /* missão, visão e valores (bloco escuro em "Quem somos") */
  purpose: [
    { icon: 'i-doc',     title: 'mission_t', body: 'mission_b' },
    { icon: 'i-compass', title: 'vision_t',  body: 'vision_b' },
    { icon: 'i-scales',  title: 'values_t',  body: 'values_b' }
  ],

  /* Serviços — um grupo por seção (o `id` é o âncora da navegação).
     Cada cartão tem imagem, título e a lista de subserviços (`items`),
     que pode ficar vazia. A fileira se ajusta à quantidade de cartões:
     quanto menos cartões, mais largo cada um. */
  services: [
    {
      id: 'fundiaria',
      title: 'svc1_title',
      body: 'svc1_body',
      cards: [
        {
          icon: 'i-plate-marker', title: 'f1_t', caption: 'f1_cap',
          items: []
        },
        {
          icon: 'i-plate-doc', title: 'f2_t', caption: 'f2_cap',
          items: ['f2_i1', 'f2_i2', 'f2_i3', 'f2_i4']
        },
        {
          icon: 'i-plate-landscape', title: 'f3_t', caption: 'f3_cap',
          items: ['f3_i1', 'f3_i2', 'f3_i3', 'f3_i4', 'f3_i5', 'f3_i6']
        },
        {
          icon: 'i-plate-landscape', title: 'f4_t', caption: 'f4_cap',
          items: ['f4_i1', 'f4_i2', 'f4_i3']
        },
        {
          icon: 'i-plate-doc', title: 'f5_t', caption: 'f5_cap',
          items: ['f5_i1', 'f5_i2', 'f5_i3']
        }
      ]
    },
    {
      id: 'ambiental',
      title: 'svc2_title',
      body: 'svc2_body',
      cards: [
        {
          icon: 'i-plate-landscape', title: 'a1_t', caption: 'a1_cap',
          items: ['a1_i1', 'a1_i2', 'a1_i3']
        },
        {
          icon: 'i-plate-landscape', title: 'a2_t', caption: 'a2_cap',
          items: ['a2_i1', 'a2_i2', 'a2_i3', 'a2_i4', 'a2_i5']
        },
        {
          icon: 'i-plate-landscape', title: 'a3_t', caption: 'a3_cap',
          items: ['a3_i1', 'a3_i2', 'a3_i3', 'a3_i4']
        }
      ]
    },
    {
      id: 'consultoria',
      title: 'svc3_title',
      body: 'svc3_body',
      cards: [
        {
          icon: 'i-plate-person', title: 'c1_t', caption: 'c1_cap',
          items: ['c1_i1', 'c1_i2', 'c1_i3']
        },
        {
          icon: 'i-plate-doc', title: 'c2_t', caption: 'c2_cap',
          items: ['c2_i1', 'c2_i2', 'c2_i3', 'c2_i4', 'c2_i5']
        }
      ]
    }
  ],

  /* depoimento em destaque */
  testimonial: {
    quote: 'test_quote',
    name: 'Ramon Gomes',
    role: 'test_role',
    caption: 'test_imgcap'
  }
};
