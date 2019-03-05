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
