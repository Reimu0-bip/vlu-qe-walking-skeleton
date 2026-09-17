function checkLogin(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Export module để chạy Unit Test trên môi trường Node.js (Jest)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkLogin };
}
