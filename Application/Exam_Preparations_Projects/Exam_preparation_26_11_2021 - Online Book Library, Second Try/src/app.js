import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/data.js';
import { loginPage } from './views/login.js';
import { resgisterPage } from './views/register.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { myBooksPage } from './views/myBooks.js';
import { searchPage } from './views/search.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout();
    updateUserNav();
    page.redirect('/');
})

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav

    next();
}

export function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    } else {
        document.getElementById('guest').style.display = 'block';
        document.getElementById('user').style.display = 'none';
    }
}

page(decorateContext);
updateUserNav();

page('/', homePage)

page('/login', loginPage)
page('/register', resgisterPage)
page('/create', createPage)
page('/mybooks', myBooksPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)

page('/search', searchPage)


page.start();