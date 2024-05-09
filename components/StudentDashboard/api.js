// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ebsalar.com/api/v1/front', // Your API base URL
});

export default api;