import React from 'react';
import styled from 'styled-components';
import {up} from 'styled-breakpoints';
import GlobalStyles from './GlobalStyles';
import {main, text} from './theme/colors';
import logoTransparent from './assets/images/logo-transparent.png';

const Styles = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${main};
  min-height: 100vh;
  overflow: hidden;

  .Box {
    color: ${text};
    border-radius: 1rem;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 30rem;
      min-height: 20rem;
    }

    &__image {
      height: 10rem;
      transition: height ease-in-out 300ms;

      ${up('sm')} {
        height: 15rem;
      }

      ${up('lg')} {
        height: 20rem;
      }
    }
  }
`;

const AppLoading = () => {
  return (
    <>
      <GlobalStyles />
      <Styles>
        <div className='Box'>
          <div className='Box__wrapper'>
            <img className='Box__image' src={logoTransparent} alt='Quién Me Debe' />
          </div>
        </div>
      </Styles>
    </>
  );
};

export default AppLoading;
