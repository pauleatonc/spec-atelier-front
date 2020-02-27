/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
	Home,
	Products,
	Brands,
	Projects,
	Profile,
	Us,
	ProjectSpecification,
} from '@Views';

const AppRoutes = () => (
	<section className="main-section">
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/brands" component={Brands} />
			<Route exact path="/projects" component={Projects} />
			<Route
				exact
				path="/projects/:id/specification"
				component={ProjectSpecification}
			/>
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/us" component={Us} />
		</Switch>
	</section>
);

export default AppRoutes;
