import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';

const Navigation = () => {
  return (
    <Switch>
      <Route exact path='/' render={Home} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Navigation;
