import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllAlbums } from '../api/data.js';
import { getUserData } from '../util.js';

const catalogTemplate = (albums, albumCard) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length == 0 
        ? html` <p>No Albums in Catalog!</p>`
        : html`${albums.map(albumCard)}`
        };

</section>
`;

export async function catalogPage(ctx) {
    let user = ctx.userData;
    const isLoggedIn = user && user.id != null;
    
    const albums = await getAllAlbums();
        
    const albumCard = (album) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>

            ${isLoggedIn 
                ? html` 

                <div class="btn-group">
                    <a href="/details/${album._id}" id="details">Details</a>
                </div>`

                : ''
            }
        
        </div>
    </div>
    `;


    ctx.render(catalogTemplate(albums, albumCard));  
}