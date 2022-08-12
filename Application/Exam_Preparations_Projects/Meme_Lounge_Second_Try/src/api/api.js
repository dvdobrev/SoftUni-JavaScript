// import { clearUserData, getAccessToken } from "../util.js";

// const host = "http://localhost:3030";

// async function request(method, url, data) {
//     const options = {
//             method,
//             headers: {}
//         };

//     const token = getAccessToken();
//     if (token) {
//         options.headers["X-Authorization"] = token;
//     }

//     if (data) {
//         options.headers["Content-Type"] = "application/json";
//         options.body = JSON.stringify(data);
//     }

//     try {
//         const response = await fetch(host + url, options);

//         if (response.ok != true) {
//             if (response.status == 403) {
//                 clearUserData();
//             }
//             const error = await response.json();
//             throw new Error(error.message);
//         }

//         if (response.status == 204) {
//             return response;
//         } else {
//             return response.json();
//         }

//     } catch (err) {
//         alert(err.message);
//         throw err;
//     }
// }

// export const get = request.bind(null, "get");
// export const post = request.bind(null, "post");
// export const put = request.bind(null, "put");
// export const del = request.bind(null, "delete");


// import { notify } from '../notify.js';
import { getUserData, setUserData, clearUserData } from '../util.js';

const hostName = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(hostName + url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        // if (response.status == 204) {
        //     return response;
        // } else {
        //     return response.json();
        // }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }
        
    } catch (err) {
        alert(err.message);
        // notify(err.message);
        throw err;
    }
}

function createOptions(method= 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    const userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        gender: result.gender,
        token: result.accessToken
    };
    setUserData(userData);

    return result;
}

export async function register(username, email, password, gender) {
    const result = await post('/users/register', { username, email, password, gender});

    const userData = {
        username: result.username,
        email: result.email,
        id: result.id,
        gender: result.gender,
        token: result.accessToken
    };
    setUserData(userData);

    return result;
}

export async function logout() {
    get('/users/logout');
    clearUserData();
}