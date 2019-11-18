/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';

const Profile = () => {
	return <h1>Perfil</h1>;
};

export default connect(state => state)(Profile);
