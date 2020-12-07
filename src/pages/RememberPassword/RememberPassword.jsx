import React, {useCallback, useMemo, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import PageLoader from '../../components/UI/PageLoader/PageLoader';
import GeneralLayout from '../../components/Layouts/GeneralLayout';
import RememberPasswordView from './RememberPasswordView';

const RememberPassword = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const rememberPasswordHandler = useCallback(
    async e => {
      e.preventDefault();
      const parsedEmail = email.trim();
      if (!parsedEmail.length) {
        setSuccessMessage('');
        setErrorMessage('El email es obligatorio');
        return;
      }

      try {
        setErrorMessage('');
        setSuccessMessage('Te hemos enviado un email para establecer una nueva contraseña');
      } catch (error) {
        setSuccessMessage('');
        setErrorMessage('Ha ocurrido un error al recuperar la contraseña');
      }
    },
    [email]
  );

  const SuccessComponent = useMemo(() => {
    return (
      <GeneralLayout>
        <Helmet>
          <title>Quién Me Debe - Iniciar sesión</title>
        </Helmet>
        <RememberPasswordView
          rememberPasswordHandler={rememberPasswordHandler}
          email={email}
          setEmail={setEmail}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      </GeneralLayout>
    );
  }, [rememberPasswordHandler, email, errorMessage, successMessage]);

  return <PageLoader onSuccessComponent={SuccessComponent} />;
};

export default RememberPassword;
