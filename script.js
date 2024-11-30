let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

const btnUp = document.getElementById("btn-up");

btnUp.onclick = () => {
  window.scrollTo(0, 0);
};

let buttonOn = false;
btnUp.style.display = "none";

window.addEventListener("scroll", function () {
  let scroll = this.scrollY;

  if (scroll < 200 && buttonOn) {
    btnUp.style.display = "none";
    buttonOn = false;
  } else if (scroll > 500 && !buttonOn) {
    btnUp.style.display = "block";
    buttonOn = true;
  }
});
