let galleryYear = document.querySelectorAll(".gallery__year-heading");

galleryYear.forEach(element =>
  element.addEventListener('click', function(e) {
    let eleHeight = element.nextElementSibling;
    if(element.classList.contains('is-open')){
      eleHeight.style.height = '0';
    } else {
      eleHeight.style.height = eleHeight.scrollHeight+ 5 + 'px';
    }
    element.classList.toggle('is-open');
  })
);