const ham = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('navbarlinks')[0];
const navBar = document.getElementsByClassName("navbar")[0];

ham.addEventListener('click', () => {
    nav.classList.toggle('active');
    navBar.classList.toggle('active');
});