import React, { useState } from 'react';

const Recover = () => {
	const [email, setEmail] = useState('');

	const handleRecoverPassword = () => {};

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

export default Recover;
