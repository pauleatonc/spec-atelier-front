/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import removeClassAndAddCurrentToThisView from '@Helpers/remove-class-navbar.helper';

const Products = () => {
	removeClassAndAddCurrentToThisView();
	return <h1>Productos</h1>;
};

export default connect(state => state)(Products);
