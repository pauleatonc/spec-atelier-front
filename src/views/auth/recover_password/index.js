import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { recoverPasswordAction } from 'Actions/';

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
	recoverPAsswordMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		recoverPAsswordMethod: recoverPasswordAction(dispatch),
	}),
)(RecoverPassword);
