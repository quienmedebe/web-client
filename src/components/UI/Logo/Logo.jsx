import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from '../Image/Image';
import appLogo from '../../../assets/images/logo-transparent.png';
import Styles from './Logo.styled';

const Logo = ({imageProps, titleProps, subtitleProps, hideTitle, hideSubtitle, ...props}) => {
  const {className: imageClass, ...imageOtherProps} = useMemo(() => imageProps, [imageProps]);
  const {className: titleClass, ...titleOtherProps} = useMemo(() => titleProps, [titleProps]);
  const {className: subtitleClass, ...subtitleOtherProps} = useMemo(() => subtitleProps, [subtitleProps]);

  const parsedImageClass = useMemo(() => {
    return cn('Image', imageClass);
  }, [imageClass]);

  const parsedTitleClass = useMemo(() => {
    return cn('Title', titleClass);
  }, [titleClass]);

  const parsedSubtitleClass = useMemo(() => {
    return cn('Subtitle', subtitleClass);
  }, [subtitleClass]);

  const title = useMemo(() => {
    if (hideTitle) {
      return null;
    }

    return (
      <h1 className={parsedTitleClass} {...titleOtherProps}>
        Quién Me Debe
      </h1>
    );
  }, [hideTitle, parsedTitleClass, titleOtherProps]);

  const subtitle = useMemo(() => {
    if (hideSubtitle) {
      return null;
    }

    return (
      <p className={parsedSubtitleClass} {...subtitleOtherProps}>
        Nunca olvides a quién dejaste dinero
      </p>
    );
  }, [hideSubtitle, parsedSubtitleClass, subtitleOtherProps]);

  return (
    <Styles {...props}>
      <Image src={appLogo} alt='Quién Me Debe Logo' className={parsedImageClass} {...imageOtherProps} />
      {title}
      {subtitle}
    </Styles>
  );
};

Logo.propTypes = {
  imageProps: PropTypes.object,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
  hideTitle: PropTypes.bool,
  hideSubtitle: PropTypes.bool,
};

Logo.defaultProps = {
  imageProps: {},
  titleProps: {},
  subtitleProps: {},
  hideTitle: false,
  hideSubtitle: false,
};

export default Logo;
