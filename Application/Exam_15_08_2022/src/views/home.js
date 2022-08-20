import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/data.js';

const homeTemplate = (items) => html`
<section id="home">
    <h1>Welcome to Sole Mates</h1>
    <img src="./images/home.jpg" alt="home" />
    <h2>Browse through the shoe collectibles of our users</h2>
    <h3>Add or manage your items</h3>
</section>
`;

export async function homePage(ctx) {
    const items = await getAllItems();
    ctx.render(homeTemplate(items));
}