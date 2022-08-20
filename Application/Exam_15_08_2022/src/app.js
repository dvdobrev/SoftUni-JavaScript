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
import { catalogPage } from './views/catalog.js';
import { searchPage } from './views/search.js';




const root = document.getElementById('main');
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
    if (userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';

    } else {
        document.querySelector('.guest').style.display = 'block';
        document.querySelector('.user').style.display = 'none';
    }
}

page(decorateContext);
updateUserNav();

page('/', homePage)
page('/catalog', catalogPage);
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/search', searchPage)



page.start();