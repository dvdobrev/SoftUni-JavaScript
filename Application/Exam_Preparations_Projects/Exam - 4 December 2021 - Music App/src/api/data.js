import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllAlbums() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getMyAlbums(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getAlbumById(id) {
    return api.get('/data/albums/' + id);
}

export async function createAlbum(album) {
    return api.post('/data/albums', album);
}

export async function editAlbum(id, album) {
    return api.put('/data/albums/' + id, album);
}

export async function deleteAlbumById(id) {
    return api.del('/data/albums/' + id);
}

export async function likeBook(albumId) {
    return api.post('/data/likes', {albumId});
}

export async function searchAlbum(query) {
    return api.get('/data/albums?where=' + encodeURIComponent(`name LIKE "${query}"`));
}

