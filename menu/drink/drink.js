const moreBtn = document.getElementById('moreBtn');
const moreBtnWrap = document.querySelector('.more-btn-wrap');
const menuCards = document.querySelectorAll('.menu-card');
const filterCheckboxes = document.querySelectorAll('.menu-filter input[type="checkbox"]');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

// 초기 hidden 상태 기억
const initiallyHidden = new Set();
menuCards.forEach(card => {
  if (card.classList.contains('hidden')) {
    initiallyHidden.add(card);
  }
});

moreBtn.addEventListener('click', function () {
  const hiddenItems = document.querySelectorAll('.menu-card.hidden');
  hiddenItems.forEach(item => item.classList.remove('hidden'));
  moreBtnWrap.style.display = 'none';
});

function applyFilters() {
  const checkedValues = [...filterCheckboxes]
    .filter(cb => cb.checked)
    .map(cb => cb.value);
  const searchText = searchInput.value.trim().toLowerCase();
  const isFiltering = checkedValues.length > 0 || searchText !== '';

  if (!isFiltering) {
    menuCards.forEach(card => {
      card.style.display = '';
      if (initiallyHidden.has(card)) {
        card.classList.add('hidden');
      }
    });
    moreBtnWrap.style.display = '';
    return;
  }

  moreBtnWrap.style.display = 'none';
  menuCards.forEach(card => {
    const category = card.dataset.category || '';
    const name = card.querySelector('.menu-card-name').textContent.toLowerCase();

    const matchesCategory = checkedValues.length === 0 || checkedValues.includes(category);
    const matchesSearch = searchText === '' || name.includes(searchText);

    if (matchesCategory && matchesSearch) {
      card.classList.remove('hidden');
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

filterCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
searchInput.addEventListener('input', applyFilters);
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  applyFilters();
});

const drinkSwiper = new Swiper('.drink-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
