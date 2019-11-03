import React from 'react';
import { Link } from 'react-router-dom';

const handleShowOptions = () => {
	const container = document.querySelector('.dropdown-container__content');
	container.classList.toggle('show');
};

const LoginDropdown = () => {
	return (
		<div className="dropdown-container">
			<button
				type="button"
				className="dropdown-container__button"
				onClick={() => handleShowOptions()}
			>
				Iniciar sesión
			</button>

			<div className="dropdown-container__content">
				<Link to="/login">Iniciar sesión</Link>
				<Link to="/registration">Registrase</Link>
			</div>
		</div>
	);
};

export default LoginDropdown;
