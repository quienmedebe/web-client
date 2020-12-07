import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useForm} from 'react-hook-form';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import SignupView from './SignupView';

const Signup = () => {
  const {register, errors, handleSubmit} = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signupHandler = useCallback(async () => {
    const parsedEmail = email.trim();
    console.log(parsedEmail);
    try {
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Ha ocurrido un error al crear la cuenta');
    }
  }, [email]);

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
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </GeneralLayout>
    );
  }, [signupHandler, email, password, confirmPassword, errorMessage, register, errors, handleSubmit]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default Signup;
