import axios from 'axios';

let accessToken = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000',
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : ''
  }
});

instance.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && refreshToken && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await axios.post('/api/token/refresh/', { refresh: refreshToken });
      accessToken = response.data.access;
      localStorage.setItem('accessToken', accessToken);
      instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
      return instance(originalRequest);
    }
    return Promise.reject(err);
  }
);

export default instance;