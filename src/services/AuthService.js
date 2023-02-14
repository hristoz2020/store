export const login = (username) => {
    localStorage.setItem('username', username);
}

export const logout = () => {
    localStorage.removeItem('username');
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
}

export const isAuthenticate = () => {
    return Boolean(getUser());
}