import JWTDecode from 'jwt-decode';
import STORAGE_KEY from './storageKeys';

function storeTokens({access_token, refresh_token}) {
  try {
    const decodedToken = JWTDecode(access_token);

    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, access_token);
    localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refresh_token);
    localStorage.setItem(STORAGE_KEY.ACCOUNT_ID, decodedToken.id);

    return decodedToken.id;
  } catch (error) {
    console.error('The token is invalid!');

    return null;
  }
}

export default storeTokens;
