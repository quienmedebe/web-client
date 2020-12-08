import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import NewPasswordView from './NewPasswordView';
import {newPassword, ERRORS} from '../../modules/auth';

const NewPassword = () => {
  const {register, errors, handleSubmit} = useForm();
  const {account_id: accountId, token} = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [sendingNewPassword, setSendingNewPassword] = useState(false);

  const resetFields = useCallback(() => {
    setPassword('');
    setConfirmPassword('');
  }, []);

  const newPasswordHandler = useCallback(async () => {
    if (sendingNewPassword) {
      return;
    }

    try {
      setSendingNewPassword(true);
      setErrorMessage('');

      await newPassword({
        id: accountId,
        token,
        password,
      });
      setSuccessMessage('Contraseña cambiada con éxito. Para iniciar sesión utiliza el enlace que está debajo');
      resetFields();
      setSendingNewPassword(false);
    } catch (error) {
      setSuccessMessage('');
      switch (error?.data?.error) {
        case ERRORS.BAD_REQUEST:
          setErrorMessage('Faltan campos por completar o el enlace utilizado no es válido');
          break;
        case ERRORS.INVALID_EMAIL_TOKEN:
          setErrorMessage('El enlace utilizado no es válido o ya ha sido utilizado');
          break;
        default:
          setErrorMessage('Ha ocurrido un error al cambiar la contraseña');
      }
      setSendingNewPassword(false);
    }
  }, [accountId, token, password, sendingNewPassword, resetFields]);

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Cambiar contraseña</title>
        </Helmet>
        <NewPasswordView
          newPasswordHandler={newPasswordHandler}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          errorMessage={errorMessage}
          successMessage={successMessage}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          sendingNewPassword={sendingNewPassword}
        />
      </GeneralLayout>
    );
  }, [newPasswordHandler, password, confirmPassword, errorMessage, successMessage, register, errors, handleSubmit, sendingNewPassword]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default NewPassword;
