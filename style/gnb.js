(function () {
  const header = document.querySelector('.header');
  const btn = document.querySelector('.hamburger-btn');
  const gnb = document.querySelector('.gnb');
  const dim = document.querySelector('.gnb-dim');
  const MOBILE_BREAKPOINT = 768;

  if (!btn || !gnb || !header) return;

  function isMobile() {
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function closeMenu() {
    header.classList.remove('menu-open');
    gnb.classList.remove('open');
    dim?.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', '메뉴 열기');
    document.body.style.overflow = '';
    document.querySelectorAll('.depth1 > li.open').forEach((li) => li.classList.remove('open'));
  }

  function openMenu() {
    header.classList.add('menu-open');
    gnb.classList.add('open');
    if (!isMobile()) dim?.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', '메뉴 닫기');
    if (!isMobile()) document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', () => {
    if (gnb.classList.contains('open')) closeMenu();
    else openMenu();
  });

  dim?.addEventListener('click', closeMenu);

  document.querySelectorAll('.depth1 > li').forEach((li) => {
    const sub = li.querySelector('.depth2');
    const link = li.querySelector(':scope > a');
    if (!sub || !link) return;

    link.addEventListener('click', (e) => {
      if (!isMobile()) return;
      e.preventDefault();
      const isOpen = li.classList.contains('open');
      document.querySelectorAll('.depth1 > li.open').forEach((other) => {
        if (other !== li) other.classList.remove('open');
      });
      li.classList.toggle('open', !isOpen);
    });

    sub.querySelectorAll('a[href]').forEach((subLink) => {
      subLink.addEventListener('click', () => {
        if (!isMobile()) return;
        if (subLink.getAttribute('href') === '#none') return;
        closeMenu();
      });
    });
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) closeMenu();
  });

  const searchForm = document.querySelector('.gnb-search');
  searchForm?.addEventListener('submit', (e) => {
    const input = searchForm.querySelector('input');
    if (!input?.value.trim()) {
      e.preventDefault();
      input?.focus();
    }
  });
})();
