$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true,
        duration: 300
    });
});

AOS.init({
    duration: 500,
    easing: 'ease-in-sine',
});

$('.carousel').carousel();
setInterval(function () {
    $('.carousel').carousel('next');
}, 5000);