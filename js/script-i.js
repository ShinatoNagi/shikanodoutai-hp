const drawerIcon = document.getElementById("js-drawer-icon");
const htmlBody = document.querySelector('body');
const drawerMenu = document.getElementById('drawer');

drawerIcon.addEventListener('click', function() {
    drawerIcon.classList.toggle('is-open');
    htmlBody.classList.toggle('is-open');
    drawerMenu.classList.toggle('is-open');
});