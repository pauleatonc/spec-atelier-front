import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
	getLocalStorage,
	deleteLocalStorage,
} from '../../helpers/localstorage.helper';
import { logoutAction } from '../auth/auth.actions';
import { getAppData } from '../../config/store/app-store/app.actions';
import { getUserProfile } from '../profile-header/ProfileHeader.actions';
import { redirectToLoginWhenIsLogout } from '../../helpers/redirect.helper';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLogin } = useSelector((state) => state.auth);
	const { loaded } = useSelector((state) => state.app);
	const dispatch = useDispatch();
	const getData = () => {
		dispatch(getAppData());
		dispatch(getUserProfile());
	};

	const validateAuth = async () => {
		const responseStatus = getLocalStorage('responseStatus');
		if (responseStatus === '401') {
			await dispatch(logoutAction());
			deleteLocalStorage('responseStatus');
			redirectToLoginWhenIsLogout();
		}
	}

	useEffect(() => {
		validateAuth();
		if (isLogin && !loaded) getData();
	}, []);

	return (
		// Show the component only when the user is logged in
		// Otherwise, redirect the user to Home
		<Route
			{...rest}
			render={(props) =>
				isLogin ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PrivateRoute;
