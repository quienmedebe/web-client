import {APP_LOADED, LOGOUT, SET_LOGGED_USER} from './app.types';

const initialState = {
  loaded: false,
  loggedId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADED: {
      return {
        ...state,
        loaded: true,
      };
    }
    case SET_LOGGED_USER: {
      return {
        ...state,
        loggedId: action.payload,
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
        loaded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
