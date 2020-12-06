import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;

  .Logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
      width: 10rem;
      margin-top: 4rem;
    }

    &__title {
      text-align: center;
      font-size: 1.8rem;
      margin: 0;
      text-transform: uppercase;
    }

    &__subtitle {
      max-width: 25rem;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 300;
      line-height: 2rem;
    }
  }
`;
