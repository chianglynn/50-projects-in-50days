const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';
let index = 1;
let speed;

function changeSpeed() {
    return speed = 300 / speedEl.value;
}

function writeText() {
    textEl.innerText = text.slice(0, index);
    index >= text.length ? index = 1 : index++;
    setTimeout(writeText, changeSpeed());
}

writeText();
speedEl.addEventListener('input', changeSpeed);