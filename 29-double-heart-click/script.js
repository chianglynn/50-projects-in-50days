const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');
let timesClicked = 0;
let clickTime = 0; // Solution 1 for event handler

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // Solution 1 for setting x, y value
    // const x = e.clientX;
    // const y = e.clientY;
    // const leftOffset = e.target.offsetLeft;
    // const topOffset = e.target.offsetTop;
    // const xInside = x - leftOffset;
    // const yInside = y - topOffset;

    // Solution 2 for setting x, y value
    const xInside = e.offsetX;
    const yInside = e.offsetY;

    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    loveMe.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);

    times.innerText = ++timesClicked;
};

// Solution 1 for event handler: Create double click function by click event
loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

// Solution 2 for event handler: Use double click event
// loveMe.addEventListener('dblclick', createHeart);