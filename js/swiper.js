const swiper = new Swiper('.swiper', {
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  allowTouchMove: false,
  breakpoints: {
    821: {
      slidesPerView: 3,
      spaceBetween: 75,
    },
  },
});