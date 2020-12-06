import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import {ErrorBoundary} from 'react-error-boundary';
import {ThemeProvider} from 'styled-components';
import {ThemeProvider as MuiProvider} from '@material-ui/core';
import {HelmetProvider} from 'react-helmet-async';
import App from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import history from './modules/history.jsx';
import theme from './theme/theme';
import muiTheme from './theme/muiTheme';

import AppError from './AppError';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={AppError}>
        <ReduxProvider store={store}>
          <Router history={history}>
            <ThemeProvider theme={theme}>
              <MuiProvider theme={muiTheme}>
                <App />
              </MuiProvider>
            </ThemeProvider>
          </Router>
        </ReduxProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
