/* eslint-disable import/no-unresolved */
import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import {
	Home,
	Login,
	Registration,
	RecoverPassword,
	NewPassword,
} from '@Views';

const history = createBrowserHistory();

const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/registration" component={Registration} />
			<Route exact path="/recover_password" component={RecoverPassword} />
			<Route path="/new_password" component={NewPassword} />
		</Switch>
	</Router>
);

export default Routes;
