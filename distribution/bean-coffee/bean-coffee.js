(function () {
  const tabButtons = document.querySelectorAll('.shop-tabs button');
  const panels = document.querySelectorAll('.shop-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.shopTab;

      tabButtons.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      document.querySelector(`[data-shop-panel="${target}"]`)?.classList.add('active');
    });
  });
})();
