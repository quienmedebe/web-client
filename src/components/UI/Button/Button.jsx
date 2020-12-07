import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.styles';
import IndeterminateProgress from '../Progress/Indeterminate';

const Button = ({children, isLoading, loadingProps, ...props}) => {
  const InnerComponent = useMemo(() => {
    if (isLoading) {
      return <IndeterminateProgress {...loadingProps} />;
    }

    return children;
  }, [isLoading, children, loadingProps]);

  return <Styles {...props}>{InnerComponent}</Styles>;
};

Button.defaultProps = {
  loadingProps: {
    size: '2rem',
  },
};

Button.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  loadingProps: PropTypes.object,
};

export default Button;
