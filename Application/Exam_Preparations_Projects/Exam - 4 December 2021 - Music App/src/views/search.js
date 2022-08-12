import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchAlbum } from '../api/data.js';

const searchTemplate = (albums, onSearch, params='', albumCard) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    ${albums.length == 0 
        ? html` <p class="no-result">No result.</p>`
        : html` <div class="search-result">
                    ${albums.map(albumCard)}
                </div>`
        }

</section>
`;


export async function searchPage(ctx) {
    let params = ctx.querystring.split('=')[1];
    let albums = [];

    let user = ctx.userData;
    const isLoggedIn = user && user.id != null;
    
    if(params) {
        albums = await searchAlbum(decodeURIComponent(params))
    }
    
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
            ? html`<div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>`
            : ''}

        </div>
    `;

    ctx.render(searchTemplate(albums, onSearch, params, albumCard));

    function onSearch(event) {
        event.preventDefault();
        // const formData = new FormData(event.target);
        // const search = formData.get('search');

        let search = document.getElementById('search-input').value;


        if(search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search));        }
    }
}