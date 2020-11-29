import React from 'react';
import PropTypes from 'prop-types';
import {animated, useTransition} from 'react-spring';

const FadeInOut = ({activate, children}) => {
  const transitions = useTransition(activate, null, {
    from: {opacity: 0},
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return transitions.map(({item, key, props}) => {
    if (item) {
      return (
        <animated.div key={key} style={props}>
          {children}
        </animated.div>
      );
    }
    return null;
  });
};

FadeInOut.propTypes = {
  activate: PropTypes.bool,
  children: PropTypes.node,
};

export default FadeInOut;
