import styled from 'styled-components';
import {main, textAlt, shadow} from '../../../theme/colors';
import {darken} from 'polished';

export default styled.button`
  background-color: ${main};
  color: ${textAlt};
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color ease-in-out 300ms, box-shadow ease-out 300ms, transform ease-out 300ms;
  box-shadow: 0 0.1rem 0.5rem ${shadow};

  /***
  * Sticky hover state on mobile phones: https://stackoverflow.com/a/28058919
  */
  @media (hover: hover) {
    &:hover {
      background-color: ${darken(0.05, main)};
      box-shadow: 0 0.1rem 0.3rem ${shadow};
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
