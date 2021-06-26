// This Script Handles the Smooth Scrolling when the nav links are clicked
$(document).ready(function(){

$(function() {
  $('a[href*=#]:not([href=#]):not(.control-right, .control-left)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -23
        }, 700);
        return false;
      }
    }
  });
});

});