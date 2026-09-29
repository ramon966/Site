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
      /* com o painel aberto o cabeçalho fica sólido, mesmo no topo */
      NA.nav.updateHeader();
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

  /* Cabeçalho transparente sobre o hero enquanto a página está no topo;
     depois de rolar, a foto do hero vira o fundo do próprio cabeçalho
     (.on-photo). Com o menu do celular aberto, fundo sólido do tema. */
  function updateHeader() {
    const header = document.querySelector('header.site');
    const nav = document.getElementById('primaryNav');
    if (!header) return;
    const menuOpen = nav && nav.classList.contains('open');
    header.classList.toggle('on-photo', !menuOpen);
    header.classList.toggle('is-top', window.scrollY < 10 && !menuOpen);
  }

  /* Mede a foto do hero (object-fit:cover, object-position:30% center) e
     passa tamanho e posição ao cabeçalho, para que o fundo dele depois da
     rolagem seja exatamente a faixa de cima do hero. */
  function syncHeaderPhoto() {
    const header = document.querySelector('header.site');
    const hero = document.querySelector('.hero');
    const img = hero && hero.querySelector('.hero__bg');
    if (!header || !img || !img.naturalWidth) return;
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const bw = img.naturalWidth * scale;
    const bh = img.naturalHeight * scale;
    header.style.setProperty('--hero-bg-size', `${bw}px ${bh}px`);
    header.style.setProperty('--hero-bg-pos', `${(w - bw) * 0.3}px ${(h - bh) * 0.5}px`);
    header.style.setProperty('--hero-h', `${h}px`);
  }

  function initHeaderScroll() {
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const img = document.querySelector('.hero .hero__bg');
    if (img && !img.complete) img.addEventListener('load', syncHeaderPhoto, { once: true });
    syncHeaderPhoto();
    /* a altura do hero muda com a janela, o idioma e o carregamento das fontes */
    const hero = document.querySelector('.hero');
    if (hero && 'ResizeObserver' in window) new ResizeObserver(syncHeaderPhoto).observe(hero);
    else window.addEventListener('resize', syncHeaderPhoto, { passive: true });
  }

  function init() {
    initMobileMenu();
    initScrollSpy();
    initHeaderScroll();
  }

  return { init, updateHeader };
})();
