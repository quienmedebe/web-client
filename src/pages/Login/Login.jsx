import React, {useCallback, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login} from '../../modules/auth';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const originalRequest = useMemo(() => {
    if (location.state?.originalRequestPath) {
      return location.state.originalRequestPath;
    }

    return '/';
  }, [location.state]);

  const loginHandler = useCallback(async () => {
    try {
      await login({
        dispatch,
        redirectTo: originalRequest,
      });
    } catch (error) {
      // Error handler
    }
  }, [dispatch, originalRequest]);

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={loginHandler}>Login user</button>
      <span>Will Redirect to: {originalRequest}</span>
    </div>
  );
};

export default Login;
