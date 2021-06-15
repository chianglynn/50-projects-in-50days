const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentActive = 1;

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentActive) circle.classList.add('active')
        else circle.classList.remove('active')
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

function moveToNextProgress() {
    currentActive++;
    if (currentActive > circles.length) currentActive = circles.length
    updateProgress();
}

function backToPrevProgress() {
    currentActive--;
    if (currentActive < 1) currentActive = 1
    updateProgress();
}

nextBtn.addEventListener('click', moveToNextProgress);
prevBtn.addEventListener('click', backToPrevProgress);