/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Products, Brands, Proyects } from '@Views';

const AppRoutes = () => (
	<main className="main-section">
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/brands" component={Brands} />
			<Route exact path="/projects" component={Proyects} />
		</Switch>
	</main>
);

export default AppRoutes;
