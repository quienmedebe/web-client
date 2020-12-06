import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Image.styles';

const Image = ({src, alt, imageProps, ...props}) => {
  return (
    <Styles {...props}>
      <img src={src} alt={alt} {...imageProps} />
    </Styles>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imageProps: PropTypes.object,
};

Image.defaultProps = {
  alt: '',
  imageProps: {},
};

export default Image;
