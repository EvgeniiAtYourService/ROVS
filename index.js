// $('navbar').on('click', function(){
//   // $('.navbar-collapse').css('style', "red");
//   alert('hi');
// });
$('.navbar-brand, .dropdown-item, .remove-collapse').click(function(){
  $('#navbarSupportedContent').collapse('hide');
});

/*2nd try parallax CSS+JS*/
document.querySelector("body").onscroll = function myFunction() {
   var scrolltotop = document.scrollingElement.scrollTop;
   var target = document.querySelector("body");
   var xvalue = "center";
   var factor = 0.5;
   var yvalue = scrolltotop * factor;
   target.style.backgroundPosition = xvalue + " " + yvalue + "px";
 }
 
