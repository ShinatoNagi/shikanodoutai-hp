const images = document.querySelectorAll(".list-img img");
const closeBtn = document.querySelector('.image-modal__close-btn');
const modalImg = document.querySelector('#modal-img');
const modalDesc = document.querySelector('#modal-desc');
const imageModal = document.querySelector('.image-modal');
const modalBg = document.querySelector('.modal-bg');

images.forEach(image =>
    image.addEventListener('click', function() {
        const imageSrc = image.getAttribute("src");
        const date = imageSrc.substring(11,21);
        const title = imageSrc.substring(21, imageSrc.length - 4);

        body.classList.add('is-fixed');
        imageModal.classList.add('is-active');
        modalBg.classList.add('is-open');
        window.setTimeout(function() {
            modalBg.classList.add('is-active');
            window.setTimeout(function() {
                modalImg.setAttribute('src', `${imageSrc}`);
                closeBtn.classList.add('is-active');
                window.setTimeout(function() {
                    modalDesc.textContent = `${title} / ${date}`;
                }, 10);
            }, 250);
        }, 100);
    })
);

closeBtn.addEventListener('click', function() {
    body.classList.remove('is-fixed');
    imageModal.classList.remove('is-active');
    modalBg.classList.remove('is-active');
    modalImg.setAttribute('src', '');
    modalDesc.textContent = '';
    closeBtn.classList.remove('is-active');
    window.setTimeout(function() {
        modalBg.classList.remove('is-open');
    }, 500);
});