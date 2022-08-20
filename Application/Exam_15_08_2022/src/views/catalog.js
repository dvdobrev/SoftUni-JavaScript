import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/data.js';

const catalogTemplate = (items) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    
        ${items.length == 0 
            ? html`<h2>There are no items added yet.</h2>`
            : html`<ul class="card-wrapper">
                ${items.map(itemCard)}
            </ul>`}
            
</section>
`;

const itemCard = (item) => html`
<li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${item.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${item.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
</li>
`;

export async function catalogPage(ctx) {
    const items = await getAllItems();
    ctx.render(catalogTemplate(items));
}