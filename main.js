const swiper1 = new Swiper('.swiper1', {
      loop: true,
      autoplay: { delay: 3000 },
      navigation: {
        prevEl: '.swiper1 .swiper-button-prev',
        nextEl: '.swiper1 .swiper-button-next',
      },
      pagination: {
        el: '.swiper1 .swiper-pagination',
        clickable: true,
      },
    });
    const swiper2 = new Swiper('.swiper2', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper2 .swiper-pagination',
        clickable: true,
      },
    });