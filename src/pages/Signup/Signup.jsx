import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import SignupView from './SignupView';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signupHandler = useCallback(
    async e => {
      e.preventDefault();
      const parsedEmail = email.trim();
      if (!parsedEmail.length || !password.length) {
        setErrorMessage('Los datos introducidos no son correctos');
        return;
      }

      try {
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Ha ocurrido un error al crear la cuenta');
      }
    },
    [email, password]
  );

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Crear cuenta</title>
        </Helmet>
        <SignupView
          signupHandler={signupHandler}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          errorMessage={errorMessage}
        />
      </GeneralLayout>
    );
  }, [signupHandler, email, password, confirmPassword, errorMessage]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default Signup;
