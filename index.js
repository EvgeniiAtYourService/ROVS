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


   //Back to Top button
   if ($(this).scrollTop() > 500) {
   				// document.querySelector(".back-to-top").style.display = "inline";       version with block -> inline display
          document.querySelector(".back-to-top").classList.add("active");
   			} else {
   				document.querySelector(".back-to-top").classList.remove("active");
   			}


    //Change button color when at white footer section
    if ($(this).scrollTop() > 10500) {
    // document.querySelector(".back-to-top").style.display = "inline";
    document.querySelector(".back-to-top").classList.add("footer-button-color");
    } else {
    document.querySelector(".back-to-top").classList.remove("footer-button-color");
    }

      //console.log(window.scrollY); //to determine how many pixels the user scrolled
      //9350 10400 values of scrolling last: 9850
 }
