import {APP_LOADED, LOGOUT, SET_LOGGED_USER} from './app.types';

export const appHasLoaded = () => {
  return {
    type: APP_LOADED,
  };
};

export const setLoggedUser = id => {
  return {
    type: SET_LOGGED_USER,
    payload: id,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
