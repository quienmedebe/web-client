import styled from 'styled-components';
import {darken} from 'polished';
import {backgroundLight, text} from '../../../theme/colors';
import Button from './Button';

export default styled(Button)`
  background-color: ${backgroundLight};
  color: ${text};

  /***
  * Sticky hover state on mobile phones: https://stackoverflow.com/a/28058919
  */
  @media (hover: hover) {
    &:hover {
      background-color: ${darken(0.05, backgroundLight)};
    }
  }

  &:active {
    transform: scale(0.99) perspective(1px);
    /***
    * Transform scale blurry text: https://stackoverflow.com/a/16878602
    */
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;
