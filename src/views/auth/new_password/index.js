import React, { useState } from 'react';
import { useLocation } from 'react-router';

const NewPassword = () => {
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const location = useLocation();
	const search = location.search;

	const handleGetQueryParam = () => {
		const token = search.split('?token=')[1];
		console.log(token);
	};

	handleGetQueryParam();

	return (
		<>
			<form>
				<input
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>

				<input
					type="password"
					name="repeatPassword"
					value={repeatPassword}
					onChange={e => setRepeatPassword(e.target.value)}
					required
				/>
				<button type="button">Cambiar contraseña</button>
			</form>
		</>
	);
};

export default NewPassword;
