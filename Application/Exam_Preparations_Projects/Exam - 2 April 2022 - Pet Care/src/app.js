import { html, render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './api/data.js';
import { loginPage } from './views/login.js';
import { registerPage} from './views/register.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { dashboardPage } from './views/dashboard.js';


const root = document.getElementById('content');

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout();
    updateUserNav();
    page.redirect('/');
})

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav
    ctx.userData = getUserData();

    next();
}

export function updateUserNav() {
    const userData = getUserData();

    document.getElementById('home').style.display = 'block';
    document.getElementById('dashboard').style.display = 'block';

    if (userData) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('create').style.display = 'block';
        document.getElementById('logout').style.display = 'block';

    } else {
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'block';
        document.getElementById('create').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
    }
}

page(decorateContext);
updateUserNav();

page('/', homePage)
page('/dashboard', dashboardPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)



page.start();