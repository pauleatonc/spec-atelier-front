/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Products, Brands } from '@Views';

const AppRoutes = () => (
	<main className="main-section">
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/products" component={Products} />
			<Route exact path="/brands" component={Brands} />
		</Switch>
	</main>
);

export default AppRoutes;
