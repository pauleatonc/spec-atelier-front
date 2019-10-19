import React, { useState } from 'react';
import { useLocation } from 'react-router';
import handleGetQueryParam from 'Helpers/get-query-params.helper';

const NewPassword = () => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const token = handleGetQueryParam({
		uri: useLocation().search,
		param: 'token',
	});

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
				<button type="button">Cambiar contraseña</button>
			</form>
		</>
	);
};

export default NewPassword;
