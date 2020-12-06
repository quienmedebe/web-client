import React, {useCallback, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet';
import {login} from '../../modules/auth';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import LoginView from './LoginView';

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

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Iniciar sesión</title>
        </Helmet>
        <LoginView loginHandler={loginHandler} />
      </GeneralLayout>
    );
  }, [loginHandler]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default Login;
