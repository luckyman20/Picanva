$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  $(".carousel").carousel({
    numVisible: 5
  });
});

function scrollToElement(obj) {
  $("html, body").animate(
    {
      scrollTop: obj.offset().top
    },
    2000
  );
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
