import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPosts } from '../api/data.js';

const myPostsTemplate = (posts) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    ${posts.length == 0 
        ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
        : html`<div class="my-posts">
                    ${posts.map(postCard)}
                </div>`
        }

    <!-- Display a div with information about every post (if any)-->
    

    <!-- Display an h1 if there are no posts -->
    
</section>
`;

const postCard = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;

export async function myPostsPage(ctx) {
    let userdId = ctx.userData.id;
    const posts = await getMyPosts(userdId);
    ctx.render(myPostsTemplate(posts));
}