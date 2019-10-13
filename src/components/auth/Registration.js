import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registrationAction } from '../../actions';

const Registration = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { registrationMethod } = props;

	const handleSubmit = e => {
		e.preventDefault();

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
				<button type="submit">Register</button>
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
