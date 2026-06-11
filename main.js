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

    const distributionSlideMap = {
      'stick-coffee': 0,
      'coffee-mix': 2,
    };

    function navigateToDistributionTarget() {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      if (distributionSlideMap[hash] !== undefined) {
        swiper2.slideToLoop(distributionSlideMap[hash]);
      }

      const scrollId = distributionSlideMap[hash] !== undefined ? 'stick-coffee' : hash;
      const target = document.getElementById(scrollId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    window.addEventListener('load', navigateToDistributionTarget);
    window.addEventListener('hashchange', navigateToDistributionTarget);