// services/api.js
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // replace with your API
  timeout: 10000,
});

// Request interceptor (for auth, headers)
api.interceptors.request.use(
  (config) => {
    // Example: attach token
    // const token = 'your_token_here';
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (global error handling)
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const message = error.response?.data?.message || error.message || 'Network Error';
    showMessage({ message, type: 'danger' }); // optional toast
    return Promise.reject(error);
  }
);

export default api;
