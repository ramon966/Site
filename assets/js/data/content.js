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

  /* serviços territoriais — cartões com imagem */
  territorial: [
    { title: 't1_t', body: 't1_b', caption: 't1_cap' },
    { title: 't2_t', body: 't2_b', caption: 't2_cap' },
    { title: 't3_t', body: 't3_b', caption: 't3_cap' },
    { title: 't4_t', body: 't4_b', caption: 't4_cap' },
    { title: 't5_t', body: 't5_b', caption: 't5_cap' }
  ],

  /* serviços ambientais — lista com ícone */
  environmental: [
    { icon: 'i-shield',   title: 'e1_t', body: 'e1_b' },
    { icon: 'i-doc',      title: 'e2_t', body: 'e2_b' },
    { icon: 'i-recycle',  title: 'e3_t', body: 'e3_b' },
    { icon: 'i-registry', title: 'e4_t', body: 'e4_b' }
  ],

  /* projetos e planejamentos */
  projects: [
    { icon: 'i-credit',  title: 'p1_t', body: 'p1_b' },
    { icon: 'i-scales',  title: 'p2_t', body: 'p2_b' },
    { icon: 'i-compass', title: 'p3_t', body: 'p3_b' }
  ],

  /* depoimento em destaque */
  testimonial: {
    quote: 'test_quote',
    name: 'Ramon Gomes',
    role: 'test_role',
    caption: 'test_imgcap'
  },

  /* campos do formulário de contato, na ordem em que aparecem.
     `full: true` ocupa a linha inteira do grid. */
  formFields: [
    { id: 'f-nome',    name: 'nome',     type: 'text',  label: 'form_name',    placeholder: 'form_name_ph',    required: true, labelHasHtml: true },
    { id: 'f-email',   name: 'email',    type: 'email', label: 'form_email',   placeholder: 'form_email_ph',   required: true, labelHasHtml: true },
    { id: 'f-tel',     name: 'telefone', type: 'tel',   label: 'form_phone',   placeholder: 'form_phone_ph' },
    { id: 'f-end',     name: 'endereco', type: 'text',  label: 'form_address', placeholder: 'form_address_ph' },
    { id: 'f-assunto', name: 'assunto',  type: 'text',  label: 'form_subject', placeholder: 'form_subject_ph', full: true },
    { id: 'f-msg',     name: 'mensagem', type: 'textarea', label: 'form_message', placeholder: 'form_message_ph', full: true }
  ]
};
