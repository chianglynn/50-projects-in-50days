const button = document.querySelector('.ripple');

button.addEventListener('click', function (e) {
    // Solution 1
    // const x = e.clientX;
    // const y = e.clientY;
    // const buttonLeft = e.target.offsetLeft;
    // const buttonTop = e.target.offsetTop;
    // const xInside = x - buttonLeft;
    // const yInside = y - buttonTop;

    // Solution 2
    const xInside = e.offsetX;
    const yInside = e.offsetY;

    const circle = document.createElement('sapn');
    circle.classList.add('circle');
    circle.style.left = xInside + 'px';
    circle.style.top = yInside + 'px';
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
});