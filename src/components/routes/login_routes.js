/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Registration, RecoverPassword, NewPassword } from '@Views';

const LoginRoutes = () => {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/registration" component={Registration} />
			<Route exact path="/recover_password" component={RecoverPassword} />
			<Route exact path="/new_password" component={NewPassword} />
		</Switch>
	);
};

export default LoginRoutes;
