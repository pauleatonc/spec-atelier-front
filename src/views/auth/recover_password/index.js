/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { recoverPasswordAction } from '@Actions/';

export const handleRecoverPassword = (email, recoverPasswordMethod) => {
	recoverPasswordMethod(email);
};

const RecoverPassword = props => {
	const [email, setEmail] = useState('');
	const { recoverPasswordMethod } = props;

	return (
		<>
			<h1>Olvidaste tu contraseña?</h1>
			<form>
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="correo"
					required
				/>
				<button
					type="button"
					onClick={() => handleRecoverPassword(email, recoverPasswordMethod)}
				>
					Recuperar contraseña
				</button>
			</form>
		</>
	);
};

RecoverPassword.propTypes = {
	recoverPasswordMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		recoverPasswordMethod: recoverPasswordAction(dispatch),
	}),
)(RecoverPassword);
