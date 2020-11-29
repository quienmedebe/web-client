import React from 'react';
import './App.scss';
import {useAppState} from './state/app';

function App() {
  const appState = useAppState();

  return (
    <div className='App'>
      <span>Current App state: {appState.loaded ? 'Loaded' : 'Not loaded'}</span>
      <br />
      <button onClick={() => appState.changeLoaded(!appState.loaded)}>Click to change app state</button>
    </div>
  );
}

export default App;
