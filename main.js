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

// window.onscroll = function () {
//   myFunction();
// };
// function myFunction() {
//   var navTag = document.getElementById("nav-tag");
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     navTag.className = "white";
//   } else {
//     navTag.className = "transparent z-depth-0";
//   }
// }
