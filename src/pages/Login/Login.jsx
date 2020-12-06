import React, {useCallback, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet-async';
import {login} from '../../modules/auth';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import LoginView from './LoginView';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const originalRequest = useMemo(() => {
    if (location.state?.originalRequestPath) {
      return location.state.originalRequestPath;
    }

    return '/';
  }, [location.state]);

  const loginHandler = useCallback(
    async e => {
      e.preventDefault();
      console.log(email, password);
      if (!email || !password) {
        return;
      }
      try {
        await login({
          dispatch,
          redirectTo: originalRequest,
        });
      } catch (error) {
        // Error handler
      }
    },
    [dispatch, originalRequest, email, password]
  );

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Iniciar sesión</title>
        </Helmet>
        <LoginView loginHandler={loginHandler} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      </GeneralLayout>
    );
  }, [loginHandler, email, password]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default Login;
