import page from "../node_modules/page/page.mjs";
import { addRender } from "./middleware/renderMiddleware.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

// page("/", () => console.log("home page"));
// page("/catalog", () => console.log("catalog page"));
// page("/login", () => console.log("login page"));
// page("/register", () => console.log("register page"));
// page("/create", () => console.log("create page"));
// page("/details/:id", () => console.log("details page"));
// page("/edit/:id", () => console.log("edit page"));

import { logout } from './api/user.js';
import { addSession } from "./middleware/sessionMiddleware.js";

import * as api from './api/commentsService.js';

window.api = api;


page(addSession);
page(addRender);

page("/", homePage);
page("/catalog", catalogPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/logout", onLogout);

page.start();

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/');
}
