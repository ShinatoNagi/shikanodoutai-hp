jQuery('.slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6500,
  infinite: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        speed: 7000,
        slidesToShow: 1,
      }
    },
  ]
});