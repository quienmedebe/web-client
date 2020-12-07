import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import Styles from './Input.styles';

const Input = React.forwardRef(({error, label, labelProps, containerProps, ...props}, ref) => {
  const LabelComponent = useMemo(() => {
    if (!label) {
      return null;
    }

    return (
      <label className='Label' {...labelProps}>
        {label}
      </label>
    );
  }, [labelProps, label]);

  const ErrorMessage = useMemo(() => {
    if (typeof error === 'boolean') {
      return null;
    }

    if (typeof error === 'string') {
      return <div className='Message Message--error'>{error}</div>;
    }

    return error;
  }, [error]);

  return (
    <Styles {...containerProps}>
      {LabelComponent}
      <TextField error={!!error} inputRef={ref} {...props} />
      {ErrorMessage}
    </Styles>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  containerProps: PropTypes.object,
  labelProps: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.node]),
};

Input.defaultProps = {
  containerProps: {},
  labelProps: {},
};

export default Input;
