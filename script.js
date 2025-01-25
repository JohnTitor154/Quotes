let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

showSlide(currentSlideIndex);
