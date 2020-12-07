import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {main} from '../../theme/colors';

const GeneralLayout = ({children, ...props}) => {
  return <Styles {...props}>{children}</Styles>;
};

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${main};
`;

GeneralLayout.propTypes = {
  children: PropTypes.node,
};

export default GeneralLayout;
