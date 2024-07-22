import axios from 'axios';

const API_URL = 'http://localhost:4000/surveys';

const getSondeos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};


export default {
    getSondeos
}