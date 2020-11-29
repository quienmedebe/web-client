import React from 'react';
import {useSelector} from 'react-redux';
import GlobalStyles from './GlobalStyles';
import Navigation from './Navigation';

function App() {
  const appState = useSelector(state => state.app);

  return (
    <>
      <GlobalStyles />
      <Navigation loggedUserId={appState.loggedId} />
    </>
  );
}

export default App;
