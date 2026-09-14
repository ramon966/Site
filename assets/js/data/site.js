/* ============================================================
   data/site.js — dados da empresa

   Alterou endereço, e-mail ou rede social? É só aqui: cabeçalho,
   seção de contato e rodapé leem deste mesmo objeto.
   ============================================================ */
window.NA = window.NA || {};

NA.site = {
  legalName: 'Norte Agro Projetos e Planejamentos Agroambientais LTDA',
  foundedIn: 2016,

  /* Unidades, na ordem em que aparecem no site. A primeira é a sede: é dela
     que sai a coordenada exibida no topo do hero.

     Para publicar uma unidade nova, basta preencher street, district e zip.
     Enquanto `street` estiver vazio, o site mostra a cidade com a observação
     "endereço em breve" — no contato e no rodapé — sem quebrar nada. Ao
     preencher, lembre de completar também os dados estruturados (JSON-LD) e
     o bloco <noscript> do index.html. */
  units: [
    {
      city: 'Mara Rosa',
      state: 'GO',
      street: 'Rua Santa Catarina, 363',
      district: 'Centro',
      zip: '76490-000',
      coordinates: "13°59'S 49°06'O"
    },
    {
      city: 'Goiânia',
      state: 'GO',
      street: 'Av. Santa Maria, R. Belo Horizonte, c',
      district: 'Parque Amazônia',
      zip: '74840-680'
    }
  ],

  email: 'atendimento@norteagroprojetos.com.br',

  /* Número único de WhatsApp: alimenta a seção de contato, o rodapé e o selo
     da barra de redes sociais. `number` é como aparece escrito; `href` é o
     link do wa.me, só com dígitos (país + DDD + número). Voltando para
     `null`, os três lugares exibem "em breve" e o selo some sozinho. */
  whatsapp: { number: '+55 (62) 99406-6225', href: 'https://wa.me/5562994066225' },

  /* Redes sociais. O selo do WhatsApp não tem `href`: ele sai do campo
     `whatsapp` acima, para o número existir num lugar só. */
  social: [
    { id: 'whatsapp',  label: 'WhatsApp',  icon: 'i-whatsapp' },
    { id: 'instagram', label: 'Instagram', icon: 'i-instagram', href: 'https://www.instagram.com/norteagroprojetos/' },
    { id: 'facebook',  label: 'Facebook',  icon: 'i-facebook',  href: 'https://www.facebook.com/profile.php?id=100089072502488&locale=pt_BR' },
    { id: 'linkedin',  label: 'LinkedIn',  icon: 'i-linkedin',  href: 'https://www.linkedin.com/company/norte-agro-projetos/posts/?feedView=all' },
    { id: 'youtube',   label: 'YouTube',   icon: 'i-youtube',   href: 'https://www.youtube.com/@ramoncsgomes' }
  ],

  /* Navegação principal. Os ids também alimentam o destaque do link
     ativo durante a rolagem (modules/nav.js). */
  nav: [
    { id: 'inicio',     key: 'nav_home' },
    { id: 'quem-somos', key: 'nav_about' },
    { id: 'fundiaria',  key: 'nav_land' },
    { id: 'ambiental',  key: 'nav_environmental' },
    { id: 'consultoria', key: 'nav_advisory' },
    { id: 'contato',    key: 'nav_contact' }
  ],

  /* Idiomas do seletor no cabeçalho. O seletor mostra só a bandeira; o nome
     do idioma (titleKey) vira o title e o aria-label do botão. */
  locales: [
    { tag: 'pt-BR', flag: 'assets/img/flags/pt-BR.svg', titleKey: 'lang_pt' },
    { tag: 'en-US', flag: 'assets/img/flags/en-US.svg', titleKey: 'lang_en' },
    { tag: 'es-ES', flag: 'assets/img/flags/es-ES.svg', titleKey: 'lang_es' }
  ],

  /* Rodapé: quais seções aparecem na coluna "Navegação". */
  footerNav: ['quem-somos', 'fundiaria', 'ambiental', 'consultoria']
};
