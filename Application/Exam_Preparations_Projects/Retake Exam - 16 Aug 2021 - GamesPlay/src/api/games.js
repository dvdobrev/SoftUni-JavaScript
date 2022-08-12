import * as api from './api.js';

const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    allGames: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
    delete: '/data/games/',
    edit: '/data/games/',


};

export async function getRecent() {
    return api.get(endpoints.recent);
}

/* here you can name the function also catalog  or something like this */
export async function getAllGames() {
    return api.get(endpoints.allGames);
}

export async function getGameById(id) {
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