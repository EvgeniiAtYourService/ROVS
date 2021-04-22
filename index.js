// $('navbar').on('click', function(){
//   // $('.navbar-collapse').css('style', "red");
//   alert('hi');
// });



//hide menu
$('.navbar-brand, .dropdown-item, .remove-collapse').click(function(){
  $('#navbarSupportedContent').collapse('hide');
});
//




//*2nd try parallax CSS+JS*/
document.querySelector("body").onscroll = function myFunction() {
   var scrolltotop = document.scrollingElement.scrollTop;
   var target = document.querySelector("body");
   var xvalue = "center";
   var factor = 0.5;
   var yvalue = scrolltotop * factor;
   target.style.backgroundPosition = xvalue + " " + yvalue + "px";
 }
//


 


//back-to-top button
 var scrollToTopBtn = document.querySelector(".back-to-top")
 var rootElement = document.documentElement

 function handleScroll() {
   var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
   if ((rootElement.scrollTop / scrollTotal ) > 0.07) {
     scrollToTopBtn.classList.add("show-btn")
   } else {
     scrollToTopBtn.classList.remove("show-btn")
   }

  // Change color on white background
   if (rootElement.scrollTop > 9850) {
   document.querySelector(".back-to-top").classList.add("footer-button-color");
   } else {
   document.querySelector(".back-to-top").classList.remove("footer-button-color");
   }

   // console.log(scrollY)

 }

 function scrollToTop() {
   rootElement.scrollTo({
     top: 0,
     behavior: "smooth"
   })
 }
 scrollToTopBtn.addEventListener("click", scrollToTop)
 document.addEventListener("scroll", handleScroll)
//

document.querySelectorAll(".fa-chevron-circle-up")[1].style.display = 'none';  // The most strange thing in the world// with this version of my button , js creates idk why another svg that is visible only in chrome dev tools, and it pushes background image down, so i should display none this
//It has the same classes as my back-to-top button
//If i put it on top, of html it does affect top edge as well
