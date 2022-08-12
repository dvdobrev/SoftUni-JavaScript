import { page, render } from './lib.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { getUserData } from './util.js';
import { logout } from './api/user.js';

// import { addRender } from "./middleware/renderMiddleware.js";


// page("/", () => console.log("home page"));
// page("/catalog", () => console.log("catalog page"));

// page("/profile", () => console.log("profile page"));

// page("/login", () => console.log("login page"));
// page("/register", () => console.log("register page"));

// page("/create", () => console.log("create page"));
// page("/details/:id", () => console.log("details page"));
// page("/edit/:id", () => console.log("edit page"));

import * as api from './api/services.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';


window.api = api;

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

// page(addRender);

page(decorateContext);
page("/", homePage);
page("/memes", catalogPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/profile", profilePage);



updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(templateResult) {
    render(templateResult, main);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');    
}

function updateNav() {
    const userData = getUserData();

    if(userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;

    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}