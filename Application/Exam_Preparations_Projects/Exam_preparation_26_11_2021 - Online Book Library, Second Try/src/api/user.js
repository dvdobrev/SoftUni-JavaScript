import * as api from './api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',

}


 /* if there are any username, email, password, gender etc */
export async function login(email, password) {
    const result = await api.post(endpoints.login, { email, password });

    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        token: result.token,
    };

    setUserData(userData);

    return result;
}

export async function register(username, email, password, gender) {
    const result = await api.post(endpoints.register, {username, email, password, gender });

    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        token: result.token,
    };

    setUserData(userData);

    return result;
    
}

export async function logout() {
    api.get(endpoints.logout);
    clearUserData();
}