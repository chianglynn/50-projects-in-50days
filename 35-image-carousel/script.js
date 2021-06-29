const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let idx = 0;
let interval = setInterval(runImages, 2000);

function changeImage() {
    if (idx > img.length - 1) idx = 0;
    if (idx < 0) idx = img.length - 1;
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function runImages() {
    idx++;
    changeImage();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(runImages, 2000);
}

rightBtn.addEventListener('click', () => {
    runImages();
    resetInterval();
});
leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});