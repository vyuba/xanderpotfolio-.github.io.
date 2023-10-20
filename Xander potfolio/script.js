const ham = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('navbarlinks')[0];
const navBar = document.getElementsByClassName("navbar")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const close = document.getElementsByClassName("hamburger-close")[0];


ham.addEventListener('click', () => {
    sidebar.style.display= 'flex';
    nav.classList.toggle('active');
    navBar.classList.toggle('active');
});

close.addEventListener("click", () => {
  sidebar.style.display = "none";
});