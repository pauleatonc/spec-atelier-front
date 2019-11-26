/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';

const Us = () => {
	return <h1>Nosotros</h1>;
};

export default connect(state => state)(Us);
