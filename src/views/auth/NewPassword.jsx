/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import handleGetQueryParam from '@Helpers/get-query-params.helper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newPasswordAction } from '@Actions/';

export const handleResetPassword = (
	password,
	repeatPassword,
	token,
	newPasswordMethod,
) => {
	if (password === repeatPassword) {
		newPasswordMethod({ token, password });
	}
};

const NewPassword = props => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const { newPasswordMethod, location } = props;
	const token = handleGetQueryParam({ uri: location.search, param: 'token' });

	return (
		<>
			<h1>Crear nueva contraseña</h1>
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

				<button
					type="button"
					onClick={() =>
						handleResetPassword(
							password,
							repeatPassword,
							token,
							newPasswordMethod,
						)
					}
				>
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
