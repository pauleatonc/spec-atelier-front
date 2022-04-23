import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalStorage } from 'helpers/localstorage.helper';
import { getAppData } from 'config/store/app-store/app.actions';
import { autoLogout } from 'containers/auth/auth.actions';
import { getUserProfile } from 'containers/profile-header/ProfileHeader.actions';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogin, isAutoLogout } = useSelector((state) => state.auth);
  const { loaded } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getAppData());
    dispatch(getUserProfile());
  };

  const responseStatus = getLocalStorage('responseStatus');

  const validateAuth = () => {
    if (responseStatus === '401') {
      dispatch(autoLogout());
    }
  };

  useEffect(() => {
    validateAuth();
    if (isLogin && !loaded && responseStatus !== '401') getData();
  }, []);

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to Home
    <Route
      {...rest}
      render={(props) => {
        if (!isLogin && isAutoLogout) {
          return <Redirect to="/login" />;
        }
        if (isLogin) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
