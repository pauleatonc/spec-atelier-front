import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted (not public) route
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/projects" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
