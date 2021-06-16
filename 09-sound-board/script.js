const btnContainer = document.getElementById('buttons');
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

function stopAudios() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

function generateBtnsForSounds() {
    sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.innerText = sound;
        btn.classList.add('btn');
        btnContainer.appendChild(btn);

        btn.addEventListener('click', () => {
            stopAudios();
            const audio = document.getElementById(sound);
            audio.play();
        });
    });
}

generateBtnsForSounds();