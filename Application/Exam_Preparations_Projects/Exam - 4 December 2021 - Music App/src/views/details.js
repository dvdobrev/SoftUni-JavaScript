import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteAlbumById, getAlbumById } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${isOwner 
                ? html`<div class="actionBtn">
                    <a href="/edit/${album._id}" class="edit">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                : ''}

            </div>
        </div>
    </div>
</section>    
`;

export async function detailsPage(ctx) {
    const albumId = ctx.params.id;
    const album = await getAlbumById(albumId);
    const user = getUserData();

    const isOwner = user && album._ownerId == user.id;
    // console.log(user.id);
    // console.log(album._ownerId);
    // console.log(isOwner);

    ctx.render(detailsTemplate(album, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${album.name}`);
        if (confirmed) {
            await deleteAlbumById(albumId);
            ctx.page.redirect('/');
        }
    }
}