/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonGoogleLogin from '@Components/buttons/button_google_login';
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

const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loginMethod, loginState, history } = props;

	useEffect(() => {
		if (loginState) {
			history.push('/');
		}
	}, [loginState]);

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

				<ButtonGoogleLogin label="Iniciar sesión con Google" />
			</form>
		</>
	);
};

Login.propTypes = {
	loginState: PropTypes.bool.isRequired,
	loginMethod: PropTypes.func.isRequired,
};

export default withRouter(
	connect(
		state => ({
			loginState: state.login.isLogin,
		}),
		dispatch => ({
			loginMethod: loginAction(dispatch),
		}),
	)(Login),
);
