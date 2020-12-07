import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useForm} from 'react-hook-form';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import RememberPasswordView from './RememberPasswordView';

const RememberPassword = () => {
  const {register, errors, handleSubmit} = useForm();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const rememberPasswordHandler = useCallback(async () => {
    const parsedEmail = email.trim();
    console.log(parsedEmail);

    try {
      setErrorMessage('');
      setSuccessMessage('Te hemos enviado un email para establecer una nueva contraseña');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Ha ocurrido un error al recuperar la contraseña');
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
