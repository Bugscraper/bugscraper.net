console.log(navigator.language)

// *** Slideshow ***
let slideIndex = 1;
updateSlides();

// Next/previous controls
function plusSlides(n) {
    slideIndex += n
    updateSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n
    updateSlides();
}

function updateSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// *** Clone top links to bottom ***

const links = document.getElementById('links-top');
const clonedLinks = links.cloneNode(true);
clonedLinks.id = "cloned-links-top"

const target = document.getElementById('links-bottom');
target.appendChild(clonedLinks);