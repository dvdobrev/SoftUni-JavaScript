import * as api from './api.js';

const endpoints = {
    // userMemes: `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    create: '/data/memes',
    byId: '/data/memes/',
    delete: '/data/memes/',
    edit: '/data/memes/',
};

export async function getUserMemes(userId) {
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getAll() {
    return api.get(endpoints.allMemes);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function create(data) {
    return api.post('/data/memes', data);

}

export async function edit(id, data) {
    return api.put(endpoints.edit + id, data);
}

export async function deleteById(id) {
    return api.del(endpoints.delete + id);
}