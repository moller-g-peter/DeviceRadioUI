
// .carousel() is a function that, together with library "carousel-swipe.js" and function "carousel.js", makes swipe possible with Bootstrap's carousel on mobile devices
$("#carousel-example-generic").carousel(function(){});


// makes clicked tab active
var tab = '.mobileNavbar li';
var tabLink = '.mobileNavbar>li>a';
$('.tab1').addClass('active');

$(tab).on('click', function(){
  $(tab).removeClass('active');
  $(this).addClass('active');
});


// <li onclick="swipeFunction(1)"...any number in paranthesis is "index"
function swipeFunction(index) {
  $('.carousel').carousel(index);
}

$('#carousel-example-generic').on('slid.bs.carousel', function() {
  
  var activeIndex = $(this).find('.active').index();


  // $('.nav-pills>li:e(' + activeIndex + ')>a');

$('.mobileNavbar .active').removeClass('.active');
$('.mobileNavbar #tab' + activeIndex).addClass('.active');

  // $('li').attr().find("[data-index='" + activeIndex + "']");

  // console.log($(this).find('.active').index());

  // if ($('.mobileNavbar > li').attr('data-index') == activeIndex) {
  //   console.log('hell');
  // } else {
  //   console.log($('.mobileNavbar > li').attr('data-index'));
  // }

  // if (activeIndex === 0){
  //   // console.log(activeIndex);
  // } else if (activeIndex == 1){
  //   // $('#tab1').addClass('.active');
  // } else if (activeIndex == 2){
    
  // } else {
    
  // }
});





