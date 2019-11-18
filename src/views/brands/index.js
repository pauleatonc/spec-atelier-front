/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';

const Brands = () => {
	return <h1>Brands</h1>;
};

export default connect(state => state)(Brands);
