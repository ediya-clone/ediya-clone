(function () {
  const tabButtons = document.querySelectorAll('.product-tabs button');
  const panels = document.querySelectorAll('.product-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      document.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
    });
  });
})();
