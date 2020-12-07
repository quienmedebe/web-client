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
  const [sendingEmail, setSendingEmail] = useState(false);

  const rememberPasswordHandler = useCallback(async () => {
    if (sendingEmail) {
      return;
    }

    try {
      setSendingEmail(true);
      setErrorMessage('');

      const parsedEmail = email.trim();
      await rememberPassword({
        email: parsedEmail,
      });
      setSuccessMessage('Te hemos enviado un email para establecer una nueva contraseña');
      setSendingEmail(false);
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
      setSendingEmail(false);
    }
  }, [email, sendingEmail]);

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
          sendingEmail={sendingEmail}
        />
      </GeneralLayout>
    );
  }, [rememberPasswordHandler, email, errorMessage, successMessage, register, errors, handleSubmit, sendingEmail]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default RememberPassword;
