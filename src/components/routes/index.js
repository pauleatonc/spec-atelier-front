import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Registration, RecoverPassword } from 'Views';

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
