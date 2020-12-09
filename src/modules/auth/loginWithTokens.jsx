import {setLoggedUser} from '../../redux/app/app.actions';
import redirect from './redirect';
import storeTokens from './storeTokens';

async function loginWithTokens({access_token, refresh_token}, {dispatch, redirectTo = '/'}) {
  const accountId = storeTokens({access_token, refresh_token});

  await dispatch(setLoggedUser(accountId));
  return redirect(redirectTo);
}

export default loginWithTokens;
