/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';
import LoginDropdown from '../buttons/login-dropdown';

const NavBar = () => (
	<nav className="navbar">
		<div className="navbar__inner">
			<div className="navbar__inner__logo-content">
				<Link to="/">
					<img
						className="navbar__inner__logo-content__image"
						src={LOGO}
						alt="Logotipo de SpecAtelier"
					/>
				</Link>
			</div>

			<ul className="navbar__inner__section">
				<li className="navbar__inner__section__item">
					<Link to="/productos" className="navbar__inner__section__item__link">
						Productos
					</Link>
				</li>
				<li className="navbar__inner__section__item">
					<Link to="/marcas" className="navbar__inner__section__item__link">
						Marcas
					</Link>
				</li>
				<li>
					<LoginDropdown text="Iniciar Sesión" />
				</li>
			</ul>
		</div>
	</nav>
);

export default NavBar;
