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
  const [errorMessage, setErrorMessage] = useState('');

  const originalRequest = useMemo(() => {
    if (location.state?.originalRequestPath) {
      return location.state.originalRequestPath;
    }

    return '/';
  }, [location.state]);

  const loginHandler = useCallback(
    async e => {
      e.preventDefault();
      const parsedEmail = email.trim();
      if (!parsedEmail.length || !password.length) {
        setErrorMessage('Los datos introducidos no son correctos');
        return;
      }

      try {
        setErrorMessage('');
        await login({
          dispatch,
          redirectTo: originalRequest,
        });
      } catch (error) {
        setErrorMessage('Ha ocurrido un error al iniciar sesión');
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
        <LoginView loginHandler={loginHandler} email={email} setEmail={setEmail} password={password} setPassword={setPassword} errorMessage={errorMessage} />
      </GeneralLayout>
    );
  }, [loginHandler, email, password, errorMessage]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default Login;
