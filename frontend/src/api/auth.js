import axios from './axiosInstance';

export const login = (email, password) =>
  axios.post('/api/token/', { email, password });

export const register = (userData) =>
  axios.post('/api/register/', userData);

export const refreshToken = (refresh) =>
  axios.post('/api/token/refresh/', { refresh });