import React, { useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAppData } from '../../config/store/app-store/app.actions';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useSelector(state => state.auth);
  const { loaded } = useSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin && !loaded) dispatch(getAppData());
  }, []);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to Home
    <Route {...rest} render={props => isLogin ? <Component {...props} /> : <Redirect to="/" />} />
  );
};

export default PrivateRoute;