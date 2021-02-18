const selectElement = function (element) {
    return document.querySelector(element);
};

let body = selectElement('body');

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.description-animation',{
    origin: 'bottom',
    duration: 1000,
    distance: '55rem',
    delay: 600
});
