import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import * as userService from '../api/user.js';
import { getUserData } from '../util.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
    if(Object.values(data).some(f => f == '')){
        return alert('All fields are required! Dobri')
    }

    if(data.password != data['repeatPass']){
        return alert('Passwords do not match! Dobri')
    }

    await userService.register(data.username, data.email, data.password, data.gender);
    event.target.reset();
    ctx.updateNav();
    ctx.page.redirect('/memes');

}