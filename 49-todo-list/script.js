const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'));

function updateLS() {
    const todos = [];
    const todosEl = document.querySelectorAll('li');
    todosEl.forEach(todoEl => todos.push({
        text: todoEl.textContent,
        completed: todoEl.classList.contains('completed'),
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo(todo) {
    let todoText = todo ? todo.text : input.value;

    if (todoText) {
        const todoEl = document.createElement('li');
        if (todo && todo.completed) todoEl.classList.add('completed');
        todoEl.textContent = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLS();
        });
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        todosUl.appendChild(todoEl);
        input.value = '';
        updateLS();
    }
}

if (todos) todos.forEach(todo => addTodo(todo));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});