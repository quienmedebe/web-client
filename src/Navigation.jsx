import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {GuardProvider, GuardedRoute} from 'react-router-guards';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import store from './redux/store';
import {getCurrentAppState} from './redux/app/app.functions';

const authGuard = (to, from, next) => {
  if (!to.meta?.auth) {
    return next();
  }

  const loggedId = getCurrentAppState(store).loggedId;
  if (!loggedId) {
    return next.redirect({
      pathname: '/login',
      state: {
        originalRequestPath: to.location.pathname,
      },
    });
  }

  return next();
};

const Navigation = () => {
  return (
    <GuardProvider guards={[authGuard]}>
      <Switch>
        <GuardedRoute exact path='/' component={Home} meta={{auth: true}} />
        <GuardedRoute exact path='/guarded' component={Home} meta={{auth: true}} />
        <GuardedRoute exact path='/login' component={Login} />
        <GuardedRoute render={() => <Redirect to='/' />} />
      </Switch>
    </GuardProvider>
  );
};

export default Navigation;
