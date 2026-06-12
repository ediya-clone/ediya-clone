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

  document.querySelectorAll('.dots').forEach((el) => {
    const level = Number(el.dataset.level) || 0;
    for (let i = 0; i < 8; i += 1) {
      const dot = document.createElement('span');
      dot.className = `dot${i < level ? ' on' : ''}`;
      el.appendChild(dot);
    }
  });
})();
