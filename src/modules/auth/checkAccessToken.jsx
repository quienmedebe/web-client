import axiosOriginal from 'axios';
import axios from '../axios';
const source = axiosOriginal.CancelToken.source();

function checkAccessToken() {
  const promise = axios.get(`/auth/check`, {
    cancelToken: source.token,
  });

  return {
    promise,
    cancel: source.cancel,
  };
}

export default checkAccessToken;
