/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { loginAction } from '@Actions/';

export const handleSubmit = (email, password, loginMethod) => {
	const body = {
		user: {
			email,
			password,
		},
	};
	loginMethod(body);
};

export const handleManagerResponseGoogleService = payload => {
	console.log(payload);
};

const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loginMethod } = props;

	return (
		<>
			<h1>Login</h1>
			<form>
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
				<button
					type="button"
					onClick={() => handleSubmit(email, password, loginMethod)}
				>
					Login
				</button>

				<GoogleLogin
					clientId="291675161560-sqjc3v9p0doqfas5mvbomd7oviuems6r.apps.googleusercontent.com"
					buttonText="Iniciar sesión con Google"
					onSuccess={handleManagerResponseGoogleService}
					onFailure={handleManagerResponseGoogleService}
				/>
			</form>
		</>
	);
};

Login.propTypes = {
	loginMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		loginMethod: loginAction(dispatch),
	}),
)(Login);
