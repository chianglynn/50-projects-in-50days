const panels = document.querySelectorAll('.panel');

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// // Solution 2
// function addActiveClass(e) {
//     e.target.classList.add('active');
// }

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        removeActiveClasses();
        panel.classList.add('active');
        // // Solution 2
        // addActiveClass(e);
    });
})