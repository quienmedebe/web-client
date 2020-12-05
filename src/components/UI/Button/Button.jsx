import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.styles';

const Button = ({children, ...props}) => {
  return <Styles {...props}>{children}</Styles>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
