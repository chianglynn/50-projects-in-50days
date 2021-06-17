const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const API_URL = 'https://icanhazdadjoke.com';

// Solution 1: using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     fetch(API_URL, config)
//         .then(response => response.json())
//         .then(data => jokeElement.textContent = data.joke)
// }

// Solution 2: using async/await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const response = await fetch(API_URL, config);
    const data = await response.json();

    jokeElement.textContent = data.joke;
}

generateJoke();
jokeBtn.addEventListener('click', generateJoke);