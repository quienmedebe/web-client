import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import isEmail from 'isemail';
import Styles from './RememberPasswordView.styles';
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import {REQUIRED, MAX_LENGTH, INVALID_EMAIL} from '../../modules/validation';

const RememberPasswordView = ({rememberPasswordHandler, email, setEmail, errorMessage, successMessage, register, errors, handleSubmit, sendingEmail}) => {
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
          <form className='Main__form' onSubmit={handleSubmit(rememberPasswordHandler)}>
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
              ref={register({
                required: REQUIRED(),
                maxLength: {
                  value: 255,
                  message: MAX_LENGTH(255),
                },
                validate: value => isEmail.validate(value.trim()) || INVALID_EMAIL(),
              })}
              error={errors.email?.message}
            />
            <div className='Main__form-send'>
              <Button isLoading={sendingEmail} type='submit'>
                Recuperar contraseña
              </Button>
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
  register: PropTypes.func,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  sendingEmail: PropTypes.bool,
};

export default RememberPasswordView;
