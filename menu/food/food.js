const moreBtn = document.getElementById('moreBtn');
    moreBtn.addEventListener('click', function () {
      const hiddenItems = document.querySelectorAll('.menu-card.hidden');
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      moreBtn.parentElement.style.display = 'none';
    });

const drinkSwiper = new Swiper('.food-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});