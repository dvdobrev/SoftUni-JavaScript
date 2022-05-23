import { showHome } from './home.js';

document.getElementById('homeLink').addEventListener('click', (event) => {
    event.preventDefault();
    showHome();
});

showHome();

