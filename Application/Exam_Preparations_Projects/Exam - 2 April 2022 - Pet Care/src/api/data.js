import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllPets() {
    return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getPetById(id) {
    return await api.get('/data/pets/' + id);
}

export async function createPet(pet) {
    return await api.post('/data/pets', pet);
}

export async function editPetById(id, pet) {
    return await api.put('/data/pets/' + id, pet);
}

export async function deletePetById(id) {
    return await api.del('/data/pets/' + id);
}

// export async function getMyPosts(userId) {
//     return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

export async function donationByUserId(userId) {
    return await api.post('/data/donation', { userId });
}


export async function getTotalDonationCount(petId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function didUserDonation(petId, userId) {
    return await api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export async function searchBooks(query) {
    return await api.get('/data/books?where=' + endcodeURIComponent(`title LIKE "${query}"`));
}

