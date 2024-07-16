const drawerIcon = document.getElementById("js-drawer-icon");
const body = document.querySelector('body');
const main = document.querySelector('main');
const drawerMenu = document.getElementById('drawer');

drawerIcon.addEventListener('click', function() {
    drawerIcon.classList.toggle('is-open');
    body.classList.toggle('is-fixed');
    main.classList.toggle('is-open');
    drawerMenu.classList.toggle('is-open');
});

const drawerLinks = document.querySelectorAll(".drawer-item");

drawerLinks.forEach(drawerLink =>
    drawerLink.addEventListener('click', function() {
        drawerIcon.classList.remove('is-open');
        body.classList.remove('is-fixed');
        main.classList.remove('is-open');
        drawerMenu.classList.remove('is-open');
    })
);

// img onclick -> DOM innerHTML -> src="〇〇"の中身を取得 モーダルで表示
// selectorAll .forEach

const workImgs = document.querySelectorAll(".work__list-img img");
const closeBtn = document.querySelector('.image-modal__close-btn');
const modalImg = document.querySelector('#modal-img');
const modalDesc = document.querySelector('#modal-desc');
const imageModal = document.querySelector('.image-modal');
const modalBg = document.querySelector('.modal-bg');

workImgs.forEach(workImg =>
    workImg.addEventListener('click', function() {
        const image = workImg.getAttribute("src");
        const date = image.substring(11,21);
        const title = image.substring(21, image.length - 4);

        body.classList.add('is-fixed');
        imageModal.classList.add('is-active');
        modalBg.classList.add('is-open');
        modalBg.classList.add('is-active');
        window.setTimeout(function() {
            modalImg.setAttribute('src', `${image}`);
            modalDesc.textContent = `${title} / ${date}`;
            closeBtn.classList.add('is-active');
        }, 250);
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