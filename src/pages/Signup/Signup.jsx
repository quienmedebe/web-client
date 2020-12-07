import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import SignupView from './SignupView';
import {signup, ERRORS} from '../../modules/auth';

const Signup = () => {
  const {register, errors, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signupHandler = useCallback(async () => {
    const parsedEmail = email.trim();
    try {
      setErrorMessage('');
      await signup(
        {
          email: parsedEmail,
          password,
        },
        {
          dispatch,
          redirectTo: '/',
        }
      );
    } catch (error) {
      // eslint-disable-next-line
      debugger;
      switch (error.data?.error) {
        case ERRORS.BAD_REQUEST:
          setErrorMessage('Hay datos inválidos');
          break;
        case ERRORS.DUPLICATE_EMAIL:
          setErrorMessage('El email introducido ya existe');
          break;
        default:
          setErrorMessage('Ha ocurrido un error al crear la cuenta');
      }
    }
  }, [dispatch, email, password]);

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
