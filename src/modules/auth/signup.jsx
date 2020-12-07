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
    const {access_token, refresh_token} = await axios.post(`/auth/signup`, signupData);

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

export default signup;
