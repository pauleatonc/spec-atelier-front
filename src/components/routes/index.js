/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '@Components/navbar/navbar-top';
import Footer from '@Components/footer';
import {
	Home,
	Login,
	Registration,
	RecoverPassword,
	NewPassword,
	Products,
	Brands,
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
					<Route exact path="/new_password" component={NewPassword} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/brands" component={Brands} />
				</Switch>
			</div>
			<Footer />
		</Router>
	</>
);

export default Routes;
