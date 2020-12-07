import JWTDecode from 'jwt-decode';
import {setLoggedUser} from '../../redux/app/app.actions';
import redirect from './redirect';
import axios from '../axios';
import STORAGE_KEY from './storageKeys';

async function signup({email, password} = {}, {dispatch, redirectTo = '/'} = {}) {
  try {
    const signupData = {
      email,
      password,
    };
    const {data} = await axios.post(`/auth/signup`, signupData);
    const {access_token, refresh_token} = data;

    const decodedToken = JWTDecode(access_token);

    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, access_token);
    localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refresh_token);
    localStorage.setItem(STORAGE_KEY.ACCOUNT_ID, decodedToken.id);

    await dispatch(setLoggedUser(decodedToken.id));
    return redirect(redirectTo);
  } catch (error) {
    return Promise.reject(error.response);
  }
}

export default signup;
