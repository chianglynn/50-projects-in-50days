const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

// Solution 1: using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     fetch('https://icanhazdadjoke.com', config)
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

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();

    jokeElement.textContent = data.joke;
}

jokeBtn.addEventListener('click', generateJoke);