import axios from 'axios';

const API_URL = 'http://localhost:4000/';

const register = async (userData) => {
    const response = await axios.post(`${API_URL}users`, userData);
    return response.data;
};

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}login`, { username, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

export default {
    register,
    login,
    logout
};
