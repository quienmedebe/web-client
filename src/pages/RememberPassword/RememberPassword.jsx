import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useForm} from 'react-hook-form';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import RememberPasswordView from './RememberPasswordView';
import {rememberPassword, ERRORS} from '../../modules/auth';

const RememberPassword = () => {
  const {register, errors, handleSubmit} = useForm();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const rememberPasswordHandler = useCallback(async () => {
    const parsedEmail = email.trim();

    try {
      setErrorMessage('');
      await rememberPassword({
        email: parsedEmail,
      });
      setSuccessMessage('Te hemos enviado un email para establecer una nueva contraseña');
    } catch (error) {
      setSuccessMessage('');
      switch (error?.data?.error) {
        case ERRORS.BAD_REQUEST:
          setErrorMessage('Faltan campos por completar');
          break;
        case ERRORS.EMAIL_NOT_FOUND:
          setErrorMessage('Email no encontrado');
          break;
        default:
          setErrorMessage('Ha ocurrido un error al recuperar la contraseña');
      }
    }
  }, [email]);

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Recuperar contraseña</title>
        </Helmet>
        <RememberPasswordView
          rememberPasswordHandler={rememberPasswordHandler}
          email={email}
          setEmail={setEmail}
          errorMessage={errorMessage}
          successMessage={successMessage}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      </GeneralLayout>
    );
  }, [rememberPasswordHandler, email, errorMessage, successMessage, register, errors, handleSubmit]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default RememberPassword;
