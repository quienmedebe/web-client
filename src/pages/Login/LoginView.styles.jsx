import styled from 'styled-components';
import {up} from 'styled-breakpoints';
import {backgroundLight, text, textAlt} from '../../theme/colors';

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
      }
    }

    &__actions {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 2rem;

      ${up('sm')} {
        flex-direction: row;
      }

      &-link {
        text-align: center;
        margin: 1rem 0;

        &--signup {
          ${up('sm')} {
            order: 1;
          }
        }
      }
    }
  }

  .Divider {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 1rem;

    &__line {
      flex: 1;
      margin: 0 2rem;
      max-width: 55rem;
      background-color: ${textAlt};
      height: 2px;
    }
  }

  .Social {
    display: flex;
    justify-content: center;

    &__wrapper {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 55rem;
      color: ${textAlt};
      padding: 1.5rem 2rem;
    }

    &__title {
      display: inline-flex;
      align-self: center;
      font-size: 2rem;
      text-align: center;
      margin: 0.5rem;
      padding: 0.5rem;
      border-bottom: 2px solid ${textAlt};
    }

    &__providers {
      display: grid;
      margin: 2rem 0;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-gap: 3rem;
    }
  }
`;
