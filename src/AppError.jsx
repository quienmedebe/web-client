import React, {useCallback} from 'react';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import {backgroundLight, main, shadowLight} from './theme/colors';
import Button from './components/UI/Button/Button';

const Styles = styled.main`
  min-height: 100vh;
  overflow: hidden;
  background-color: ${main};
  display: flex;
  justify-content: center;

  & .Box {
    display: flex;
    flex-direction: center;
    align-items: center;

    &__wrapper {
      background-color: ${backgroundLight};
      border-radius: 0.5rem;
      padding: 5rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0.5rem 2rem;
      box-shadow: 0 0.1rem 0.5rem ${shadowLight};
    }

    &__title {
      font-size: 2.4rem;
      margin: 0;
      text-align: center;
      margin-bottom: 3rem;
    }
  }
`;

const AppError = () => {
  const refreshApp = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Styles>
        <div className='Box'>
          <div className='Box__wrapper'>
            <h1 className='Box__title'>Ha ocurrido un error en la aplicación</h1>
            <Button onClick={refreshApp}>Reiniciar app</Button>
          </div>
        </div>
      </Styles>
    </>
  );
};

export default AppError;
