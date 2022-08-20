import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchItem } from '../api/data.js';
import { getUserData } from '../util.js';

const searchTemplate = (items, onSearch, params = '', isLoggedIn, itemCard) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required value="${params}" />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        
        ${items.length == 0 
                ? html` <h2>There are no results found.</h2>`
                : html`<ul class="card-wrapper">
                        ${items.map(itemCard)}
                        </ul>`}
    
    </div>
</section>
`;

export async function searchPage(ctx) {
    let params = ctx.querystring.split('=')[1];
    let items = [];
    const user = getUserData();

    const isLoggedIn = user != undefined;
    console.log(isLoggedIn);


    const itemCard = (item) =>
    html`
    <li class="card">
        <img src=${item.imageUrl} alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${item.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${item.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>


        ${isLoggedIn 
            ? html`  <a class="details-btn" href="/details/${item._id}">Details</a>`
            : ''}
        
    </li>`


    if (params) {
        items = await searchItem(decodeURIComponent(params))
    }

    ctx.render(searchTemplate(items, onSearch, params, isLoggedIn, itemCard));

    function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get('search');

        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search));
        }

    }
}