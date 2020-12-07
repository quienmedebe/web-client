import axios from 'axios';
import axiosInstance from '../axios';

async function refreshAccessToken(accountId, refreshToken, {baseUrl} = {}) {
  try {
    let response;
    if (baseUrl) {
      response = await axios.post(`${baseUrl}/auth/refresh`, {
        accountId,
        refreshToken,
      });
    } else {
      response = await axiosInstance.post('/auth/refresh', {
        accountId,
        refreshToken,
      });
    }

    return response.data;
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default refreshAccessToken;
