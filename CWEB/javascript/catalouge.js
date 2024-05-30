const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');

menuToggle.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});