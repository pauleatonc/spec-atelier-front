import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getNotifications } from '../spec-header/SpecHeader.actions';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(state => state.auth);
  const { actionGet } = useSelector((state) => state.specHeader);
  useEffect(() => {
		const interval = setInterval(() => {
      if(isLogin){
        if(actionGet){
          dispatch(getNotifications());
        }
      }
	}, 30000);
		return () => clearInterval(interval);
	}, [actionGet]);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted (not public) route
    <Route {...rest} render={props => (
      isLogin && restricted ? <Redirect to="/projects" /> : <Component {...props} />
    )} />
  );
};

export default PublicRoute;
