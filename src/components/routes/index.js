import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'Views/home';
import Login from 'Views/auth/login';
import Registration from 'Views/auth/registration';
import RecoverPassword from 'Views/auth/recover_password';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/registration" component={Registration} />
			<Route path="/recover_password" component={RecoverPassword} />
		</Switch>
	</Router>
);

export default Routes;
