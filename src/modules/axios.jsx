import axios from 'axios';
import {refreshAccessToken, STORAGE_KEYS} from '../modules/auth';
import {SERVER_BASE_URL} from '../config/config';

const axiosService = axios.create({
  baseURL: SERVER_BASE_URL,
});

axiosService.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      };
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const removeSessionItems = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.ACCOUNT_ID);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
};

axiosService.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      try {
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
          const accountId = localStorage.getItem(STORAGE_KEYS.ACCOUNT_ID);
          if (refreshToken && accountId) {
            const {access_token} = await refreshAccessToken(+accountId, refreshToken, {baseUrl: SERVER_BASE_URL});
            localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            return axiosService(originalRequest);
          }
        }

        removeSessionItems();
        return Promise.reject(error);
      } catch (err) {
        removeSessionItems();
        // If the error is thrown refreshing the token, the user don't have to know it. An unauthorized error (original) is enough
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosService;
