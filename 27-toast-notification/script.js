const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const types = ['info', 'success', 'error'];
const messages = [
    'Notification 1',
    'Notification 2',
    'Notification 3',
    'Notification 4'
];

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function createNotification(type = null, message = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = message ? message : getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(() => notif.remove(), 3000);
}

button.addEventListener('click', () => createNotification());