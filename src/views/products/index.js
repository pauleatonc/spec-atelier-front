/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';

const Products = () => {
	return <h1>Productos</h1>;
};

export default connect(state => state)(Products);
