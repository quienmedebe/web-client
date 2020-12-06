import history from '../history';

function redirect(redirectTo = '/') {
  return history.push(redirectTo);
}

export default redirect;
