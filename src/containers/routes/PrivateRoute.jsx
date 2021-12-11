import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { getLocalStorage } from '../../helpers/localstorage.helper';
import { autoLogout } from '../auth/auth.actions';
import { getAppData } from '../../config/store/app-store/app.actions';
import { getUserProfile } from '../profile-header/ProfileHeader.actions';
import { getNotifications } from '../spec-header/SpecHeader.actions';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLogin, isAutoLogout } = useSelector((state) => state.auth);
	const { loaded } = useSelector((state) => state.app);
	const dispatch = useDispatch();
	const { pathname, search } = useLocation();
	const getData = () => {
		dispatch(getAppData());
		dispatch(getUserProfile());
		dispatch(getNotifications());

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

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(getNotifications());
	}, 30000);
		return () => clearInterval(interval);
	}, []);

	return (
		// Show the component only when the user is logged in
		// Otherwise, redirect the user to Home
		<Route
			{...rest}
			render={(props) => {
				// if (!isLogin && isAutoLogout) {
				// 	return <Redirect to="/login" />;
				// }
				if (!isLogin) {
					if(pathname.search("/projects/accept_invitation/") === 0 ){
						const array_url = pathname.split('/');
						const array_var = search.split('=');
						return <Redirect to={`/login/${array_url[2]}/${array_url[3]}/${array_var[1]}`} />;
					}
					if(pathname.search("/projects/refuse_invitation/") === 0 ){
						const array_url = pathname.split('/');
						const array_var = search.split('=');
						return <Redirect to={`/projects/${array_url[2]}/${array_url[3]}/${array_var[1]}`} />;		
					}
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
