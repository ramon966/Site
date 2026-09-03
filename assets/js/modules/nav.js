/* ============================================================
   modules/nav.js — menu mobile e destaque do link da seção visível
   As seções observadas são as de NA.site.nav.
   ============================================================ */
window.NA = window.NA || {};

NA.nav = (function () {
  /* mesmo ponto de quebra em que o CSS transforma a navegação em painel */
  const MOBILE_QUERY = '(max-width: 960px)';

  function initMobileMenu() {
    const nav = document.getElementById('primaryNav');
    const button = document.getElementById('menuToggle');
    const iconMenu = document.getElementById('iconMenu');
    const iconClose = document.getElementById('iconClose');
    if (!nav || !button) return;

    const isOpen = () => nav.classList.contains('open');

    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      iconMenu.style.display = open ? 'none' : 'block';
      iconClose.style.display = open ? 'block' : 'none';
      /* trava a rolagem do fundo enquanto o painel está aberto */
      document.body.style.overflow = open ? 'hidden' : '';
    };

    button.addEventListener('click', () => setOpen(!isOpen()));

    /* ao clicar num link, fecha o painel antes de rolar até a seção */
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    /* toque fora do painel fecha */
    document.addEventListener('click', (e) => {
      if (!isOpen()) return;
      if (nav.contains(e.target) || button.contains(e.target)) return;
      setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) { setOpen(false); button.focus(); }
    });

    /* girar o aparelho ou voltar ao desktop não pode deixar a página travada
       com o painel aberto */
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => { if (!e.matches && isOpen()) setOpen(false); };
    if (mq.addEventListener) { mq.addEventListener('change', onChange); }
    else if (mq.addListener) { mq.addListener(onChange); }
  }

  function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;

    const sections = NA.site.nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const links = Array.from(document.querySelectorAll('nav.primary > ul > li > a'));
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const href = `#${entry.target.id}`;
        links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === href));
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }

  function init() {
    initMobileMenu();
    initScrollSpy();
  }

  return { init };
})();
