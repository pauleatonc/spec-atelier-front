/* eslint-disable import/no-unresolved */
import React from 'react';
import Registration from 'Components/auth/registration';
import Login from 'Components/auth/login';

const Home = () => {
	return (
		<section id="home">
			<div>
				<h2>Registrar un nuevo usuario</h2>
				<Registration />
			</div>

			<div>
				<h2>Iniciar sesión</h2>
				<Login />
			</div>
		</section>
	);
};

export default Home;
