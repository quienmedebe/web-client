import {logout as logoutAction} from '../../redux/app/app.actions';
import redirect from './redirect';

async function logout({dispatch, redirectTo = '/login'} = {}) {
  try {
    // Logout on backend, update redux state, redirect to requested page.
    await dispatch(logoutAction());
    return redirect(redirectTo);
  } catch (error) {
    return Promise.reject(error);
  }
}

export default logout;
