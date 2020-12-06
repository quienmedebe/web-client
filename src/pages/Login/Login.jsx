import React from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setLoggedUser} from '../../redux/app/app.actions';
import history from '../../modules/history';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const login = async () => {
    await dispatch(setLoggedUser('1'));
    history.push(location.state.originalRequestPath || '/');
  };

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={login}>Login user</button>
      <span>Will Redirect to: {location.state.originalRequestPath}</span>
    </div>
  );
};

export default Login;
