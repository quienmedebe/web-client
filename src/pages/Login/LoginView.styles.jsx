import styled from 'styled-components';
import {up} from 'styled-breakpoints';
import {backgroundLight, text} from '../../theme/colors';

export default styled.div`
  display: flex;
  flex-direction: column;

  .Main {
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem;
    color: ${text};

    &__wrapper {
      display: flex;
      flex-direction: column;
      background-color: ${backgroundLight};
      border-radius: 0.5rem;
      padding: 3rem 1rem 1.5rem 1rem;

      ${up('sm')} {
        width: 55rem;
        margin: 0 auto;
      }
    }

    &__title {
      display: inline-flex;
      align-self: center;
      font-size: 2rem;
      text-align: center;
      margin: 0.5rem;
      padding: 0.5rem;
      border-bottom: 2px solid black;
    }

    &__form {
      margin: 1rem 2rem;

      &-group {
        margin: 1.5rem 0;
      }

      &-send {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        margin-bottom: 2rem;
      }
    }
  }
`;
