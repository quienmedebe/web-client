import loginWithTokens from './loginWithTokens';
import axios from '../axios';

async function login({email, password} = {}, {dispatch, redirectTo = '/'} = {}) {
  try {
    const loginData = {
      email,
      password,
    };
    const {data} = await axios.post(`/auth/login`, loginData);
    const {access_token, refresh_token} = data;

    await loginWithTokens({access_token, refresh_token}, {dispatch, redirectTo});
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default login;
