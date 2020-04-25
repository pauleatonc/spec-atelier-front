/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin } = useSelector(state => state.auth);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to Home
    <Route {...rest} render={props => isLogin ? <Component {...props} /> : <Redirect to="/" />} />
  );
};

export default PrivateRoute;