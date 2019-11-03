/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

const handleShowOptions = () => {
	const container = document.querySelector('.dropdown__content');
	container.classList.toggle('show');
};

const LoginDropdown = props => {
	const { text } = props;

	return (
		<div className="dropdown" onClick={handleShowOptions}>
			{text}
			<div className="dropdown__content">
				<Link to="/login">Login</Link>
				<Link to="/registration">Registrarse</Link>
			</div>
		</div>
	);
};

export default LoginDropdown;
