import React, {useCallback, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet-async';
import {useForm} from 'react-hook-form';
import {login, ERRORS} from '../../modules/auth';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import LoginView from './LoginView';

const Login = () => {
  const {register, errors, handleSubmit} = useForm();
  const location = useLocation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sendingLogin, setSendingLogin] = useState(false);

  const originalRequest = useMemo(() => {
    if (location.state?.originalRequestPath) {
      return location.state.originalRequestPath;
    }

    return '/';
  }, [location.state]);

  const loginHandler = useCallback(async () => {
    if (sendingLogin) {
      return;
    }

    setSendingLogin(true);

    const parsedEmail = email.trim();
    if (!parsedEmail.length) {
      setErrorMessage('El email es obligatorio');
      return;
    }

    try {
      setErrorMessage('');
      await login(
        {
          email: parsedEmail,
          password,
        },
        {
          dispatch,
          redirectTo: originalRequest,
        }
      );
    } catch (error) {
      switch (error?.data?.error) {
        case ERRORS.UNAUTHORIZED:
          setErrorMessage('Los datos introducidos no son correctos');
          break;
        default:
          setErrorMessage('Ha ocurrido un error al iniciar sesión');
      }
      setSendingLogin(false);
    }
  }, [dispatch, originalRequest, email, password, sendingLogin]);

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Iniciar sesión</title>
        </Helmet>
        <LoginView
          loginHandler={loginHandler}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          errorMessage={errorMessage}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          sendingLogin={sendingLogin}
        />
      </GeneralLayout>
    );
  }, [loginHandler, email, password, errorMessage, register, errors, handleSubmit, sendingLogin]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default Login;
