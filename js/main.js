const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-linksopen');
    navToggle.setAttribute('aria-expanded', isOpen);
});