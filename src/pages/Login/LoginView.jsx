import React from 'react';
import Styles from './LoginView.styles';
import Logo from '../../components/UI/Logo/Logo';

const LoginView = ({loginHandler}) => {
  return (
    <Styles>
      <Logo as='header' />
    </Styles>
  );
};

export default LoginView;
