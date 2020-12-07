import styled from 'styled-components';
import {errorLight} from '../../../theme/colors';

export default styled.div`
  display: flex;
  flex-direction: column;

  .Label {
    font-size: 1.4rem;
  }

  .Message {
    margin: 0.5rem 0;
    font-size: 1.4rem;

    &--error {
      color: ${errorLight};
    }
  }
`;
