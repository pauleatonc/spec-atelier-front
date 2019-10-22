/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registrationAction } from '@Actions/';

const Registration = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { registrationMethod } = props;

	const handleSubmit = () => {
		const body = {
			user: {
				email,
				password,
			},
		};
		registrationMethod(body);
	};

	return (
		<>
			<h1>Crear un nuevo usuario</h1>
			<form onSubmit={handleSubmit} autoComplete="off">
				<input
					type="email"
					name="email"
					value={email}
					placeholder="email"
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="*********"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button type="button" onClick={() => handleSubmit()}>
					Register
				</button>
			</form>
		</>
	);
};

Registration.propTypes = {
	registrationMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		registrationMethod: registrationAction(dispatch),
	}),
)(Registration);
