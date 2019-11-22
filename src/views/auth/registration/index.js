/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redirectToHomeWhenIsLogin from '@Helpers/redirect.helper';
import { registrationAction } from '@Actions/';

export const handleSubmit = (email, password, registrationMethod) => {
	const body = {
		user: {
			email,
			password,
		},
	};
	registrationMethod(body);
};

const Registration = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { registrationMethod, loginState } = props;

	useEffect(() => {
		if (loginState) {
			redirectToHomeWhenIsLogin();
		}
	}, [loginState]);

	return (
		<>
			<h1>Crear un nuevo usuario</h1>
			<form autoComplete="off">
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
				<button
					type="button"
					onClick={() => handleSubmit(email, password, registrationMethod)}
				>
					Register
				</button>
			</form>
		</>
	);
};

Registration.propTypes = {
	loginState: PropTypes.bool.isRequired,
	registrationMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		loginState: state.login.isLogin,
	}),
	dispatch => ({
		registrationMethod: registrationAction(dispatch),
	}),
)(Registration);
