import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllItems() {
    return api.get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function getItemById(id) {
    return api.get('/data/shoes/' + id);
}

export async function createItem(item) {
    return api.post('/data/shoes', item);
}

export async function editItem(id, items) {
    return api.put('/data/shoes/' + id, items);
}

export async function deleteItemById(id) {
    return api.del('/data/shoes/' + id);
}

export async function searchItem(query) {
    return api.get('/data/shoes?where=' + encodeURIComponent(`brand LIKE "${query}"`));
}

