document.addEventListener('DOMContentLoaded', () => {
  let gallerySwiper = null;

  function initSwiper() {
    if (window.innerWidth < 1280) {
      if (!gallerySwiper) {
        gallerySwiper = new Swiper('.gallery__swiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
      }
    } else {
      if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
        gallerySwiper = null;
      }
    }
  }

  initSwiper();
  window.addEventListener('resize', () => {
    setTimeout(initSwiper, 300);
  });
});