import axios from '../axios';

async function checkAccessToken() {
  try {
    const {data} = await axios.get(`/auth/check`);

    return data;
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default checkAccessToken;
