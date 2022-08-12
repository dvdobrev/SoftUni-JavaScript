import { create } from '../api/services.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';
// import * as memeService from '../api/services.js';

const createTemplate = (onSubmit) => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));


async function onSubmit(ctx, data, event) {
    if(Object.values(data).some(f => f == '')){
        return alert('All fields are required!')
    }

    const meme = {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
    }

    log
    await create(meme);


    event.target.reset();
    // ctx.updateNav();
    ctx.page.redirect('/memes');

}
}  

// export function createPage(ctx) {
//     ctx.render(createTemplate(onSubmit));

//     async function onSubmit(event) {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         // const title = formData.get('title').trim();
//         // const description = formData.get('description').trim();
//         // const imageUrl = formData.get('imageUrl').trim();

//         const meme = {
//             title: formData.get('title').trim(),
//             description: formData.get('description').trim(),
//             imageUrl: formData.get('imageUrl').trim(),
//         };
        
//         if (title == '' || description == '' || imageUrl == '') {
//             return alert('All fields are required!')
//         }

//         await create({
//             title,
//             description,
//             imageUrl
//         });

//         ctx.page.redirect('/memes');
//     }
// }