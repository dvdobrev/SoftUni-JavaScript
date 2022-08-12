import { page } from "./lib.js";
import * as api from "./api/data.js";
import { homePage } from "./views/home.js";
import decorateContext, { updateUserNav } from "./middlewares/decorateContext.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myBooksPage } from "./views/my-books.js";

// /* This make all imported funtions  global
// and to be access them from the browser console*/
// window.api = api;

// /* make this under default, just keep in mind the correct element ID */
// const root = document.getElementById("site-content");

/* make this under default */
page(decorateContext);

page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/my-books", myBooksPage);






updateUserNav();
page.start();

// /* make this under default */
// function decorateContext(ctx, next) {
//     ctx.render = (content) => render(content, root);

//     next();
// }
