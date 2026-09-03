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

     Para publicar a unidade de Goiânia, basta preencher street, district e
     zip abaixo. Enquanto `street` estiver vazio, o site mostra a cidade com
     a observação "endereço em breve" — no contato e no rodapé — sem quebrar
     nada. Ao preencher, lembre de completar também os dados estruturados
     (JSON-LD) e o bloco <noscript> do index.html. */
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
      street: '',
      district: '',
      zip: ''
    }
  ],

  email: 'atendimento@norteagroprojetos.com.br',

  /* Quando o número existir: troque por { number: '+55…', href: 'https://wa.me/55…' }
     e o selo deixa de ser exibido como "em breve". */
  whatsapp: null,

  /* Redes sociais. `stamp: false` tira o ícone das barras de selos. */
  social: [
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
    { id: 'territorial', key: 'nav_territorial' },
    { id: 'ambiental',  key: 'nav_environmental' },
    { id: 'projetos',   key: 'nav_projects' },
    { id: 'contato',    key: 'nav_contact' }
  ],

  /* Idiomas do seletor no cabeçalho. */
  locales: [
    { tag: 'pt-BR', code: 'PT', flag: 'assets/img/flags/pt-BR.svg', titleKey: 'lang_pt' },
    { tag: 'en-US', code: 'US', flag: 'assets/img/flags/en-US.svg', titleKey: 'lang_en' },
    { tag: 'es-ES', code: 'ES', flag: 'assets/img/flags/es-ES.svg', titleKey: 'lang_es' }
  ],

  /* Rodapé: quais seções aparecem na coluna "Navegação". */
  footerNav: ['quem-somos', 'territorial', 'ambiental', 'projetos']
};
