const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  allowTouchMove: false,
});