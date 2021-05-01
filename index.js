$('.navbar-brand, .dropdown-item, .remove-collapse').click(function(){
  $('#navbarSupportedContent').collapse('hide');
});

/* parallax CSS+JS */
document.querySelector("body").onscroll = function myFunction() {
   var scrolltotop = document.scrollingElement.scrollTop;
   var target = document.querySelector("body");
   var xvalue = "center";
   var factor = 0.5;
   var yvalue = scrolltotop * factor;
   target.style.backgroundPosition = xvalue + " " + yvalue + "px";


   //Back to Top button
   if ($(this).scrollTop() > 500) {
   				
          document.querySelector(".back-to-top").classList.add("active");
   			} else {
   				document.querySelector(".back-to-top").classList.remove("active");
   			}

 }
 