import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { recoverPasswordAction } from 'Actions/';

const Recover = props => {
	const [email, setEmail] = useState('');
	const { recoverPAsswordMethod } = props;

	const handleRecoverPassword = () => {
		recoverPAsswordMethod(email);
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

Recover.propTypes = {
	recoverPAsswordMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		recoverPAsswordMethod: recoverPasswordAction(dispatch),
	}),
)(Recover);
