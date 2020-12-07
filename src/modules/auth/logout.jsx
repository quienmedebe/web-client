import {logout as logoutAction} from '../../redux/app/app.actions';
import redirect from './redirect';
import STORAGE_KEY from './storageKeys';

async function logout({dispatch, redirectTo = '/login'} = {}) {
  try {
    localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEY.ACCOUNT_ID);

    await dispatch(logoutAction());
    return redirect(redirectTo);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default logout;
