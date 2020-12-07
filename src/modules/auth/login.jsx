import JWTDecode from 'jwt-decode';
import {setLoggedUser} from '../../redux/app/app.actions';
import redirect from './redirect';
import axios from '../axios';
import STORAGE_KEY from './storageKeys';

async function login({email, password} = {}, {dispatch, redirectTo = '/'} = {}) {
  try {
    const loginData = {
      email,
      password,
    };
    const {access_token, refresh_token} = await axios.post(`/auth/login`, loginData);

    const decodedToken = JWTDecode(access_token);
    console.log(decodedToken);

    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, access_token);
    localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refresh_token);
    localStorage.setItem(STORAGE_KEY.ACCOUNT_ID, '');

    await dispatch(setLoggedUser('1'));
    return redirect(redirectTo);
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default login;
