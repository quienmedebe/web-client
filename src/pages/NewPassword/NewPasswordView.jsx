import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Styles from './NewPasswordView.styles';
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import {REQUIRED, MAX_LENGTH, MIN_LENGTH, EMAILS_DO_NOT_MATCH} from '../../modules/validation';

const NewPasswordView = ({
  newPasswordHandler,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errorMessage,
  successMessage,
  register,
  errors,
  handleSubmit,
  sendingNewPassword,
}) => {
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
          <h2 className='Main__title'>Cambiar contraseña</h2>
          <form className='Main__form' onSubmit={handleSubmit(newPasswordHandler)}>
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              id='password'
              name='password'
              label='Contraseña:'
              placeholder='Contraseña'
              labelProps={{htmlFor: 'password'}}
              containerProps={{className: 'Main__form-group'}}
              autoComplete='password'
              ref={register({
                required: REQUIRED(),
                minLength: {
                  value: 6,
                  message: MIN_LENGTH(6),
                },
                maxLength: {
                  value: 255,
                  message: MAX_LENGTH(255),
                },
              })}
              error={errors.password?.message}
            />
            <Input
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              label='Confirmar contraseña:'
              placeholder='Confirmar contraseña'
              labelProps={{htmlFor: 'confirmPassword'}}
              containerProps={{className: 'Main__form-group'}}
              autoComplete='newPassword'
              ref={register({
                required: REQUIRED(),
                maxLength: {
                  value: 255,
                  message: MAX_LENGTH(255),
                },
                validate: value => value === password || EMAILS_DO_NOT_MATCH(),
              })}
              error={errors.confirmPassword?.message}
            />
            <div className='Main__form-send'>
              <Button isLoading={sendingNewPassword} type='submit'>
                Cambiar contraseña
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

NewPasswordView.propTypes = {
  newPasswordHandler: PropTypes.func,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  sendingNewPassword: PropTypes.bool,
};

export default NewPasswordView;
