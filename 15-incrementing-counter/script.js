const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const targetNumber = +counter.getAttribute('data-target');
        const startNumber = +counter.innerText;
        const increment = targetNumber / 200;

        if (startNumber < targetNumber) {
            counter.innerText = `${Math.ceil(startNumber + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else counter.innerText = targetNumber
    }
    updateCounter();
});