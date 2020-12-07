import axios from '../axios';

async function checkAccessToken() {
  try {
    const response = await axios.get(`/auth/check`);

    return response.data;
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default checkAccessToken;
