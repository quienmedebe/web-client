import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Styles from './LoginView.styles';
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Image from '../../components/UI/Image/Image';
import ButtonLight from '../../components/UI/Button/ButtonLight';
import googleIcon from '../../assets/images/google.png';
import appleIcon from '../../assets/images/apple-black.png';
import {REQUIRED} from '../../modules/validation';

const LoginView = ({loginHandler, email, setEmail, password, setPassword, errorMessage, register, errors, handleSubmit, sendingLogin}) => {
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
          <h2 className='Main__title'>Inicia sesión</h2>
          <form className='Main__form' onSubmit={handleSubmit(loginHandler)}>
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
              })}
              error={errors.email?.message}
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
              ref={register({
                required: REQUIRED(),
              })}
              error={errors.password?.message}
            />
            <div className='Main__form-send'>
              <Button isLoading={sendingLogin} type='submit'>
                Iniciar sesión
              </Button>
              {ErrorMessage}
            </div>
          </form>
          <div className='Main__actions'>
            <Link className='Main__actions-link Main__actions-link--signup' to='/signup'>
              Crear cuenta
            </Link>
            <Link className='Main__actions-link' to='/remember-password'>
              He olvidado mi contraseña
            </Link>
          </div>
        </div>
      </main>
      <div className='Divider'>
        <span className='Divider__line' />
      </div>
      <section className='Social'>
        <div className='Social__wrapper'>
          <h2 className='Social__title'>Vincula tu cuenta</h2>
          <div className='Social__providers'>
            <ButtonLight className='Social__providers-button'>
              <Image src={googleIcon} alt='Inicia sesión con Google' className='Social__providers-button-image' />
              Google
            </ButtonLight>
            <ButtonLight className='Social__providers-button'>
              <Image src={appleIcon} alt='Inicia sesión con Apple' className='Social__providers-button-image' />
              Apple
            </ButtonLight>
            <ButtonLight className='Social__providers-button Social__providers-button--full'>Entra sin registrarte</ButtonLight>
          </div>
        </div>
      </section>
    </Styles>
  );
};

LoginView.propTypes = {
  loginHandler: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func,
  errorMessage: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  sendingLogin: PropTypes.bool,
};

export default LoginView;
