import axios from 'axios';

// Login request
export const login = (username: string, password: string) => {
    return axios.post("api/auth/login", { username, password });
};

// Register request
export const register = (username: string, password: string) => {
    return axios.post("api/auth/register", { username, password });
};

// Logout function: clearing localStorage token
export const logout = () => {
    localStorage.removeItem('token');
};