$(document).ready(function () {
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
    duration: 300
  });
});

$('.carousel').carousel();
setInterval(function () {
  $('.carousel').carousel('next');
}, 5000);
