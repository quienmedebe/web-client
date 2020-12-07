import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Styles from './RememberPasswordView.styles';
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const RememberPasswordView = ({rememberPasswordHandler, email, setEmail, errorMessage, successMessage}) => {
  const SuccessMessage = useMemo(() => {
    if (!successMessage) {
      return null;
    }

    return <span className='Main__form-send-success'>{successMessage}</span>;
  }, [successMessage]);

  const ErrorMessage = useMemo(() => {
    if (!errorMessage) {
      return null;
    }

    return <span className='Main__form-send-error'>{errorMessage}</span>;
  }, [errorMessage]);

  return (
    <Styles>
      <Logo as='header' />
      <main className='Main'>
        <div className='Main__wrapper'>
          <h2 className='Main__title'>Recordar contraseña</h2>
          <form className='Main__form' onSubmit={rememberPasswordHandler}>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              id='email'
              name='email'
              label='Correo electrónico:'
              placeholder='Correo electrónico'
              labelProps={{htmlFor: 'email'}}
              containerProps={{className: 'Main__form-group'}}
              autoComplete='email'
            />
            <div className='Main__form-send'>
              <Button type='submit'>Recuperar contraseña</Button>
              {ErrorMessage}
              {SuccessMessage}
            </div>
          </form>
          <div className='Main__actions'>
            <Link className='Main__actions-link' to='/login'>
              Volver a iniciar sesión
            </Link>
          </div>
        </div>
      </main>
    </Styles>
  );
};

RememberPasswordView.propTypes = {
  rememberPasswordHandler: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

export default RememberPasswordView;
