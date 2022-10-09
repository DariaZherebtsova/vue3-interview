import axios from 'axios';

const baseUrl = 'https://api.agify.io';

const baseApiInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getUsers() {
    return baseApiInstance.get('/users').then((res) => res.data);
  },
};

export default api;
