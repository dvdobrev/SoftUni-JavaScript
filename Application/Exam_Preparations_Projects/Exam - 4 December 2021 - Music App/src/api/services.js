import * as api from './api.js';

const endpoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    byId: '/data/books/',
    delete: '/data/books/',
    edit: '/data/books/',
};

export async function myBooks(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getAll() {
    return api.get(endpoints.allBooks);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function create(data) {
    return api.post(endpoints.create, data);

}

export async function edit(id, data) {
    return api.put(endpoints.edit + id, data);
}

export async function deleteById(id) {
    return api.del(endpoints.delete + id);
}