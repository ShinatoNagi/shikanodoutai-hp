jQuery('.gallery-year-heading').on("click", function () {
  jQuery(this).children('.gallery-year-heading-menu').toggleClass('gallery-year-heading-open');
  jQuery(this).next().slideToggle();
});