import {setLoggedUser} from '../../redux/app/app.actions';
import redirect from './redirect';

async function login({dispatch, redirectTo = '/'} = {}) {
  try {
    // Check user state on backend, update redux state, redirect to requested page.
    await dispatch(setLoggedUser('1'));
    return redirect(redirectTo);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default login;
