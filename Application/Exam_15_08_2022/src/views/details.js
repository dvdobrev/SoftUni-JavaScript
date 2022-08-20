import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, deleteItemById } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${item.imageUrl} />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${item.brand}</span></p>
            <p>
                Model: <span id="details-model">${item.model}</span>
            </p>
            <p>Release date: <span id="details-release">${item.release}</span></p>
            <p>Designer: <span id="details-designer">${item.designer}</span></p>
            <p>Value: <span id="details-value">${item.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
            ${isOwner 
                ? html`<div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                        </div>`
                : ''}

    </div>
</section>
`;

export async function detailsPage(ctx) {
    const ItemId = ctx.params.id;
    const item = await getItemById(ItemId);
    const user = getUserData();
    

    const isOwner = user && item._ownerId == user.id;

    ctx.render(detailsTemplate(item, isOwner, onDelete));


    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${item.model}`);
        if (confirmed) {
            await deleteItemById(ItemId);
            ctx.page.redirect('/catalog');
        }
}
}
