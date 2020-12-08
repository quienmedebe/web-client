import styled from 'styled-components';
import {up} from 'styled-breakpoints';
import {backgroundLight, errorLight, success, text} from '../../theme/colors';

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
      padding: 1.5rem 1rem;

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
      border-bottom: 2px solid ${text};
    }

    &__form {
      margin: 1rem 0.5rem;

      &-group {
        margin: 1.5rem 0;
      }

      &-send {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
        margin-bottom: 1rem;

        &-error {
          margin: 0.5rem 0;
          font-size: 1.4rem;
          color: ${errorLight};
          text-align: center;
        }

        &-success {
          margin: 0.5rem 0;
          font-size: 1.4rem;
          color: ${success};
          text-align: center;
        }
      }
    }

    &__actions {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin: 1rem 2rem;

      ${up('sm')} {
        flex-direction: row;
      }

      &-link {
        text-align: center;
        margin: 1rem 0;
      }
    }
  }
`;
