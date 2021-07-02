const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'));
}

// Solution 1: using event bubbling
// ratingsContainer.addEventListener('click', (e) => {
//     removeActive();
//     e.target.parentNode.classList.add('active');
//     // Click rating containers
//     if (e.target.classList.contains('rating')) selectedRating = e.target.querySelector('.rating-text').innerHTML;
//     // Click images
//     if (e.target.parentNode.classList.contains('rating') && e.target.classList.contains('rating-img')) selectedRating = e.target.nextElementSibling.innerHTML;
//     // Click rating texts
//     if (e.target.parentNode.classList.contains('rating') && e.target.classList.contains('rating-text')) selectedRating = e.target.innerHTML;
// });

// Solution 2: using forEach
ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        removeActive();
        e.target.parentNode.classList.add('active');
        // Click rating containers
        if (e.target.classList.contains('rating')) selectedRating = e.target.querySelector('.rating-text').innerHTML;
        // Click images
        if (e.target.parentNode.classList.contains('rating') && e.target.classList.contains('rating-img')) selectedRating = e.target.nextElementSibling.innerHTML;
        // Click rating texts
        if (e.target.parentNode.classList.contains('rating') && e.target.classList.contains('rating-text')) selectedRating = e.target.innerHTML;
    });
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});