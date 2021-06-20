const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let activeSlide = 0;

function setSlideToBackground() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}

function nextSlide() {
    activeSlide < slides.length - 1 ? activeSlide++ : activeSlide = 0;
    setSlideToBackground();
    setActiveSlide();
}

function prevSlide() {
    activeSlide > 0 ? activeSlide-- : activeSlide = slides.length - 1;
    setSlideToBackground();
    setActiveSlide();
}

setSlideToBackground();
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);