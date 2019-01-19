// Sticky navbar
window.onscroll = function () {
    var navbar = document.querySelector('#navbar');
    var navOffset = navbar.offsetTop;

    if (window.pageYOffset >= navOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};