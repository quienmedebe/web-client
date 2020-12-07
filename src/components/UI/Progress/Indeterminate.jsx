import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const StyledIndeterminateProgress = styled(CircularProgress)`
  margin-top: 0.5rem;
`;

const IndeterminateProgress = ({...props}) => {
  return <StyledIndeterminateProgress color='inherit' {...props} />;
};

export default IndeterminateProgress;
