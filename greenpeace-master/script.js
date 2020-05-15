function scrollDown() {
    let main = document.querySelector("main");
    main.scrollIntoView({ behavior: "smooth" });
}


var slideIndex = 1;




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

window.addEventListener("DOMContentLoaded", function() {
  // Index
  if (window.location.pathname == "/" || window.location.pathname.endsWith("index.html")) {
    showSlides(slideIndex);
  }

  // Setup go back links
  let links = document.querySelectorAll(".go-back-link");
  if (links && links.length) {
    links.forEach(function(l) {
      l.addEventListener("click", function(e) {
        e.preventDefault();
        window.history.go(-1);
      });
    });
  }
});