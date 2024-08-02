import axios from 'axios';

// Set the base URL for your API requests
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;
