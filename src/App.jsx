import React, {useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import allSettled from 'promise.allsettled';
import {APP_SPLASH_SCREEN_TIME} from './config/config';
import {resolveAfterTime} from './modules/helpers';
import GlobalStyles from './GlobalStyles';
import Navigation from './Navigation';
import PageLoader from './components/UI/PageLoader/PageLoader';
import AppLoading from './AppLoading';
import {checkAccessToken} from './modules/auth';
import {appHasLoaded, setLoggedUser} from './redux/app/app.actions';

function App() {
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const splashScreenTime = resolveAfterTime(APP_SPLASH_SCREEN_TIME);
    const checkLoggedUserPromise = checkAccessToken();

    allSettled([splashScreenTime.promise, checkLoggedUserPromise.promise]).then(([splashResult, loggedUser]) => {
      if (loggedUser.status === 'fulfilled') {
        dispatch(setLoggedUser(loggedUser.value.data.id));
      } else {
        dispatch(setLoggedUser(null));
      }
      if (splashResult.status === 'fulfilled') {
        dispatch(appHasLoaded());
      }
    });

    return () => {
      splashScreenTime.cancel?.();
      checkLoggedUserPromise.cancel?.();
    };
  }, [dispatch]);

  const loadingComponent = useMemo(() => {
    return <AppLoading />;
  }, []);

  const successComponent = useMemo(() => {
    return (
      <>
        <GlobalStyles />
        <Navigation loggedUserId={appState.loggedId} />
      </>
    );
  }, [appState.loggedId]);

  return <PageLoader isLoading={!appState.loaded} onLoadComponent={loadingComponent} onSuccessComponent={successComponent} />;
}

export default App;
