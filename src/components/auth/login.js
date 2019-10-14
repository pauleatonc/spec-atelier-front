import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';

const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loginMethod } = props;

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			user: {
				email,
				password,
			},
		};

		loginMethod(body);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
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
				<button type="submit">Login</button>
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
