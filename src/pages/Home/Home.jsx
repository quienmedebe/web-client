import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../modules/auth';

const Home = () => {
  const dispatch = useDispatch();

  const logoutHandler = useCallback(async () => {
    try {
      await logout({
        dispatch,
        redirectTo: '/login',
      });
    } catch (error) {
      // Error handler
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Home component</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
