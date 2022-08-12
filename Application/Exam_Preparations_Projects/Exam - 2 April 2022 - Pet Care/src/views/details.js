import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePetById, getPetById, getTotalDonationCount, donationByUserId } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate) => html`

    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="${pet.image}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${totalDonationCount}$</h4>
                </div>
                
                <div class="actionBtn">

                    <!-- Only for registered user and creator of the pets-->
                    ${isOwner  
                        ? html` <a href="/edit/${pet._id}" class="edit">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                        : ''}

                    <!--(Bonus Part) Only for no creator and user-->

                    ${isLoggedIn 
                        ? html`<a href="#" class="donate">Donate</a>`
                        : ''}
                    
                </div>
            </div>
        </div>
    </section>
    
`;

export async function detailsPage(ctx) {
    const petId = ctx.params.id;
    const pet = await getPetById(petId);
    const user = getUserData();
    // console.log(user);
    // console.log(user.id);


    let userId;
    let totalDonationCount;
    let didUserDonate;

    if (user != null) {
        userId = user._id
        didUserDonate = await donationByUserId(petId, userId);

    }

    const isOwner = user && pet._ownerId == user.id;
    const isLoggedIn = user != undefined;

    totalDonationCount = await getTotalDonationCount(petId);
    ctx.render(detailsTemplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate));

    async function onClickDonation() {
        const donation = {
            petId: petId,
        }
        await donationByUserId(donation);

        totalDonationCount = await getTotalDonationCount(petId);
        didUserDonate = await donationByUserId(petId, userId);
        ctx.render(detailsTemplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, donationByUserId));
    }

    async function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${pet.name}`);
        if (confirmed) {
            await deletePetById(petId);
            ctx.page.redirect('/');
        }
    }
}



/* ---------------------------------------- */

// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { deletePetById, getPetById, getTotalDonationCount, didUserDonation, donationPet } from '../api/data.js';

// const detailsTamplate = (pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate) => html`<section id="detailsPage">
//     <div class="details">
//         <div class="animalPic">
//             <img src="${pet.image}">
//         </div>
//         <div>
//             <div class="animalInfo">
//                 <h1>Name: ${pet.name}</h1>
//                 <h3>Breed: ${pet.breed}</h3>
//                 <h4>Age: ${pet.age}</h4>
//                 <h4>Weight: ${pet.weight}</h4>
//                 <h4 class="donation">Donation: ${totalDonationCount * 100}$</h4>
//             </div>
//             <!-- if there is no registered user, do not display buttons-->
//             <div class="actionBtn">
//                 ${isOwner ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
//                 <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
//                 ` : ''}

//                 ${(() => {
//                 if (didUserDonate == 0) {
//                     if (isLoggedIn && !isOwner) {        
//                         return html`<a href="javascript:void(0)" class="donate"
//                     @click=${onClickDonation}>Donate</a>`
//                     }
//                 }
//             })()}

//             </div>
//         </div>
//     </div>
// </section>`;

// export async function detailsPage(ctx) {
//     const petId = ctx.params.id;
//     const pet = await getPetById(petId);
//     const user = ctx.user;

//     let userId;
//     let totalDonationCount;
//     let didUserDonate;

//     if (user != null) {
//         userId = user._id
//         didUserDonate = await didUserDonation(petId, userId);
        
//     }

//     const isOwner = user && pet._ownerId == user._id;
//     const isLoggedIn = user !== undefined;

//     totalDonationCount = await getTotalDonationCount(petId);
//     ctx.render(detailsTamplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate));

//     async function onClickDonation() {
//         const donation = {
//             petId,
//         }
//         await donationPet(donation);

//         totalDonationCount = await getTotalDonationCount(petId);
//         didUserDonate = await didUserDonation(petId, userId);
//         ctx.render(detailsTamplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonation));
//     }

//     async function onDelete() {
//         const confirmed = confirm('Are you sure?');
//         if (confirmed) {
//             await deletePetById(petId);
//             ctx.page.redirect('/');
//         }
//     }
// }