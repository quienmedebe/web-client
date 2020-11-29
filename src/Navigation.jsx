import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const Navigation = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Navigation;
