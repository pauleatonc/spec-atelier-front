import React, { useState, Fragment } from 'react';
import axios from 'axios';

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [registrationErrors, setRegistrationErrors] = useState(null);

	const handleSubmit = e => {
		e.preventDefault();

		axios
			.post(
				process.env.API_URL + '/registrations',
				{
					user: {
						email,
						password,
					},
				},
				{
					withCredentials: true,
				},
			)
			.then(response => {
				if (response.data.status === 'created') {
					this.props.handleSuccessfullAuth(response.data);
				}
			})
			.catch(err => {
				setRegistrationErrors(err);
			});
	};
	state = {
		email: '',
		password: '',
		registrationErrors: null,
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				{registrationErrors}
				<input
					type="email"
					name="email"
					value={email}
					onChange={email => setEmail(email)}
					required
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={pass => setPassword(pass)}
					required
				/>
				<button type="submit">Register</button>
			</form>
		</Fragment>
	);
};

export default Registration;
