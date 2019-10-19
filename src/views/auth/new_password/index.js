import React, { useState } from 'react';
import { useLocation } from 'react-router';
import handleGetQueryParam from 'Helpers/get-query-params.helper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newPasswordAction } from 'Actions/';

const NewPassword = props => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const { newPasswordMethod } = props;
	const token = handleGetQueryParam({
		uri: useLocation().search,
		param: 'token',
	});

	const handleResetPassword = () => {
		if (password === repeatPassword) {
			newPasswordMethod({ token, password });
		}
	};

	return (
		<>
			<span>El token es: {token}</span>
			<form>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="Nueva contraseña"
					required
				/>

				<input
					type="password"
					name="repeatPassword"
					value={repeatPassword}
					onChange={e => setRepeatPassword(e.target.value)}
					placeholder="Repetir nueva contraseña"
					required
				/>
				<button type="button" onClick={() => handleResetPassword()}>
					Cambiar contraseña
				</button>
			</form>
		</>
	);
};

NewPassword.propTypes = {
	newPasswordMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		newPasswordMethod: newPasswordAction(dispatch),
	}),
)(NewPassword);
