const hamburgerIcon = document.querySelector('#hamburger-icon');

hamburgerIcon.onclick = () => {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active')
}
let hamburgerLink = () => {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle("active");
}

let aboutSection = document.querySelector('#about-link');
let serviceSection = document.querySelector('#service-link');
let projectSection = document.querySelector('#project-link');
let contactSection = document.querySelector('#contact-link');

aboutSection.onclick = hamburgerLink
serviceSection.onclick = hamburgerLink
projectSection.onclick = hamburgerLink
contactSection.onclick = hamburgerLink
