import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePostById, getPostById, getTotalDonationCount, makeDonation, userDidDonation } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (onDonate, post, isOwner, onDelete, notOwner, totalDonations, userHasDonated) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${totalDonations}</p>
                
                <div class="btns">

                    ${isOwner 
                        ? html` <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                        : ''}

                
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${notOwner && !userHasDonated
                        ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                        : ''}
                    
                </div>

            </div>
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const postId = ctx.params.id;
    const post = await getPostById(postId);
    const user = getUserData();
    // console.log(user.id);
    // console.log(user._id);

    const isOwner = user && post._ownerId == user.id;
    const notOwner = user && post._ownerId != user.id;

    // let userHasDonated = await userDidDonation(postId, user.id) == 1 ? true : false;

    let userHasDonated = false;

    let totalDonations = await getTotalDonationCount(postId);

    if(user) {
        let result = await userDidDonation(postId, user.id) == 1 ? true : false;
        userHasDonated = result;
    }   

    ctx.render(detailsTemplate(onDonate, post, isOwner, onDelete, notOwner, totalDonations, userHasDonated));

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${post.title}`);
        if (confirmed) {
            await deletePostById(postId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await makeDonation(postId)
        ctx.page.redirect(`/details/${postId}`);
    }
}



/* ---------------------------------- */

// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { deletePostById, getPostById, getTotalDonationCount, userDidDonation, makeDonation } from '../api/data.js';

// const detailsTemplate = (post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate) => html`
//     <!-- Details Page -->
//     <section id="details-page">
//       <h1 class="title">Post Details</h1>
    
//       <div id="container">
//         <div id="details">
//           <div class="image-wrapper">
//             <img src="${post.imageUrl}" alt="Material Image" class="post-image">
//           </div>
//           <div class="info">
//             <h2 class="title post-title">${post.title}</h2>
//             <p class="post-description">Description: ${post.description}</p>
//             <p class="post-address">Address: ${post.address}</p>
//             <p class="post-number">Phone number: ${post.phone}</p>
//             <p class="donate-Item">Donate Materials: ${totalDonationCount}</p>
//             <div class="btns">
    
//               ${isOwner ? html `<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
//               <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>` : ''}
//             ${(() => {
//                 if (didUserDonate == 0) {
//                     if (isLoggedIn && !isOwner) {        
//                         return html`<a @click=${onClickDonation}href="javascript:void(0)" class="donate-btn btn">Donate</a>`
//                     }
//                 }
//             })()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// `;

// export async function detailsPage(ctx) {
//   const postId = ctx.params.id;
//   const post = await getPostById(postId);
//   const user = ctx.user;

//   let userId;
//   let totalDonationCount;
//   let didUserDonate;

//   if (user != null) {
//       userId = user._id
//       didUserDonate = await userDidDonation(postId, userId);
    
//   }

//   const isOwner = user && post._ownerId == user._id;
//   const isLoggedIn = user !== undefined;

//   totalDonationCount = await getTotalDonationCount(postId);
//   ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate));

//   async function onClickDonation() {
//       const donation = {
//           postId,
//       }
//       await makeDonation(donation);

//       totalDonationCount = await getTotalDonationCount(postId);
//       didUserDonate = await userDidDonation(postId, userId);
//       ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, userDidDonation));
//   }

//   async function onDelete() {
//       const confirmed = confirm('Are you sure?');
//       if (confirmed) {
//           await deletePostById(postId);
//           ctx.page.redirect('/');
//       }
//   }
// }