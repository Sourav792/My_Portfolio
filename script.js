const hamburgerIcon = document.querySelector('#hamburger-icon');

hamburgerIcon.onclick = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active')
}