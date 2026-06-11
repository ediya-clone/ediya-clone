(function () {
  const tabButtons = document.querySelectorAll('.product-tabs button');
  const panels = document.querySelectorAll('.product-panel');
  const cupEnjoy = document.getElementById('rtd-cup-enjoy');

  function setActiveTab(target) {
    tabButtons.forEach((b) => b.classList.remove('active'));
    panels.forEach((p) => p.classList.remove('active'));

    document.querySelector(`[data-tab="${target}"]`)?.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`)?.classList.add('active');
    cupEnjoy?.classList.toggle('active', target === 'cup');
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setActiveTab(btn.dataset.tab);
    });
  });

  setActiveTab('cup');
})();
