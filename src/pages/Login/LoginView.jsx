import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LoginView.styles';
import Logo from '../../components/UI/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const LoginView = ({loginHandler, email, setEmail, password, setPassword}) => {
  return (
    <Styles>
      <Logo as='header' />
      <main className='Main'>
        <div className='Main__wrapper'>
          <h2 className='Main__title'>Inicia sesión</h2>
          <form className='Main__form' onSubmit={loginHandler}>
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
            <div className='Main__form-send'>
              <Button type='submit'>Iniciar sesión</Button>
            </div>
          </form>
        </div>
      </main>
    </Styles>
  );
};

LoginView.propTypes = {
  loginHandler: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func,
};

export default LoginView;
