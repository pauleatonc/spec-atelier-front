/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { recoverPasswordAction } from '@Actions/';

const RecoverPassword = props => {
	const [email, setEmail] = useState('');
	const { recoverPasswordMethod } = props;

	const handleRecoverPassword = () => {
		recoverPasswordMethod(email);
	};

	return (
		<>
			<form>
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="correo"
					required
				/>
				<button type="button" onClick={() => handleRecoverPassword()}>
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
