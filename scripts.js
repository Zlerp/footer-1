$(document).ready(function() {

  killScroll = function() {
    return false;
  };

  $("#scroll").click(function() {
    $('html, body').animate({scrollTop:
      $("#footerContainer").offset().top}, 1000, 'easeInOutCirc');
  });
  $(".logo").find('h2').find('a').click(function() {
    $('html, body').animate({scrollTop:
      $(".top").offset().top}, 1000, 'easeInOutCirc');
  });
});
