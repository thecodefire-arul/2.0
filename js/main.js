//Home Image Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}

//Navbar

window.addEventListener('DOMContentLoaded', (event) => {
  // jQuery('#navbar').css("background-color", "#006DB4");
  jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 0) {
          jQuery('#navbar').css("background-color", "#006DB4");              
      } else {
          jQuery('#navbar').css("background-color", "#392396");
      }
  });
});

//MEnu Button

function toggle_visibility(id) {
  var e = document.getElementById("nav-items");
  if(e.style.display == "block")
     e.style.display = "none";
  else
     e.style.display = "block";
}