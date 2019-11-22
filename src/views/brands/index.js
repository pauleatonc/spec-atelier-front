/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import removeClassAndAddCurrentToThisView from '@Helpers/remove-class-navbar.helper';

const Brands = () => {
	removeClassAndAddCurrentToThisView();
	return <h1>Marcas</h1>;
};

export default connect(state => state)(Brands);
