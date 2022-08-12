import { logout } from "../api/data.js";
import { page, render } from "../lib.js";
import { clearUserData, getUserData } from "../util.js";

/* make this under default, just keep in mind the correct element ID */
const root = document.getElementById("site-content");
document.getElementById('logoutBtn').addEventListener("click", onLogout);

/* make this under default */
export default function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav() {
    const userData = getUserData();
    if (userData){
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}