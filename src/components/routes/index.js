/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '@Components/navbar';
import {
	Home,
	Login,
	Registration,
	RecoverPassword,
	NewPassword,
} from '@Views';

const Routes = () => (
	<>
		<Router>
			<NavBar />
			<div className="main-section">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/registration" component={Registration} />
					<Route exact path="/recover_password" component={RecoverPassword} />
					<Route path="/new_password" component={NewPassword} />
				</Switch>
			</div>
		</Router>
	</>
);

export default Routes;
