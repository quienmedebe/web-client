import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Styles from './SignupView.styles';
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const SignupView = ({signupHandler, email, setEmail, password, setPassword, errorMessage}) => {
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
          <h2 className='Main__title'>Crear cuenta</h2>
          <form className='Main__form' onSubmit={signupHandler}>
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
            />
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              label='Confirmar contraseña:'
              placeholder='Confirmar contraseña'
              labelProps={{htmlFor: 'confirmPassword'}}
              containerProps={{className: 'Main__form-group'}}
              autoComplete='password'
            />
            <div className='Main__form-send'>
              <Button type='submit'>Crear cuenta</Button>
              {ErrorMessage}
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

SignupView.propTypes = {
  signupHandler: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default SignupView;
