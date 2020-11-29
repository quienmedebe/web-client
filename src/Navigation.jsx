import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
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

Navigation.propTypes = {
  loggedUserId: PropTypes.string,
};

export default Navigation;
