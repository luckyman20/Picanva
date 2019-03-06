$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  $(".carousel").carousel({
    numVisible: 5
  });
});

window.onscroll = function() {
  myFunction();
};
function myFunction() {
  var navTag = document.getElementById("nav-tag");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navTag.className = "grey lighten-5";
  } else {
    navTag.className = "transparent z-depth-0";
  }
}

$("a[href*=#]:not([href=#])").click(function() {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") ||
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
      return false;
    }
  }
});

// var headerHeight = $("div#header").height();

// // Attach the click event
// $('a[href*=#]').bind("click", function(e) {
//     e.preventDefault();

//     var target = $(this).attr("href"); //Get the target
//     var scrollToPosition = $(target).offset().top - headerHeight;

//     $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
//         window.location.hash = "" + target;
//         // This hash change will jump the page to the top of the div with the same id
//         // so we need to force the page to back to the end of the animation
//         $('html').animate({ 'scrollTop': scrollToPosition }, 0);
//     });

//     $('body').append("called");
// });
