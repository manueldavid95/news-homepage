let iconMenu = document.querySelector('.icon-menu');
let iconClose = document.querySelector('.icon-close');
let headerNav = document.querySelector('.header-nav');

iconMenu.addEventListener('click', ()=> {
    iconClose.classList.add('active');
    iconMenu.classList.add('off');
    headerNav.classList.add('header-active');
});

iconClose.addEventListener('click', ()=> {
    iconMenu.classList.remove('off');
    iconClose.classList.remove('active');
    headerNav.classList.remove('header-active');
});

