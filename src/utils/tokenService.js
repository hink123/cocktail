function setToken(token) {
    if(token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('item');
    }
}

export default {
    setToken
};