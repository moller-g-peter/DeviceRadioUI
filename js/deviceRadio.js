
// .carousel() is a function that, together with library "carousel-swipe.js" and function "carousel.js", makes swipe possible with Bootstrap's carousel on mobile devices
$("#carousel-example-generic").carousel(function(){});


// makes clicked tab active
var tab = '.mobileNavbar li';
var tabLink = '.mobileNavbar>li>a';
$('.stream').addClass('active');

$(tab).on('click', function(){
  $(tab).removeClass('active');
  $(this).addClass('active');
});











