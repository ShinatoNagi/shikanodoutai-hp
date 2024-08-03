const drawerIcon = document.getElementById("js-drawer-icon");
const body = document.querySelector('body');
const main = document.querySelector('.main');
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