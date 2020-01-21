import tokenService from "./tokenService";
const BASE_URL = '/api/drinks';

function create(cocktailData) {
    return fetch(BASE_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(cocktailData)
    }).then(res => res.json());
}

export default {
    create
}