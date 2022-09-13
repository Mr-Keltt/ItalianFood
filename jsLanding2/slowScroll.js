// link: <script src="js/slowScroll.js"></script>

$(".scrollto").click(function () {
  let elementClick = $(this).attr("href")
  let destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1200);
  return false;
});