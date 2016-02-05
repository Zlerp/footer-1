$(document).ready(function() {
  $("#scroll").click(function() {
    $('html, body').animate({scrollTop:
      $("#footerContainer").offset().top}, 1000, 'easeInOutCirc');
});
});
