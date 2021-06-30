const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

function hideAll() {
    contents.forEach(content => content.classList.remove('show'));
    listItems.forEach(item => item.classList.remove('active'));
}

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAll();
        contents[index].classList.add('show');
        item.classList.add('active');
    });
});