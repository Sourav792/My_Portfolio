const hamburgerIcon = document.querySelector('#hamburger-icon');

hamburgerIcon.onclick = () => {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active')
}