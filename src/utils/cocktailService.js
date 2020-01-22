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

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

export default {
    create,
    deleteOne
}