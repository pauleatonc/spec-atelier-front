/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';
import LoginDropdown from '../buttons/login_dropdown';

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
					<Link to="/products" className="navbar__inner__section__item__link">
						Productos
					</Link>
				</li>
				<li className="navbar__inner__section__item">
					<Link to="/brands" className="navbar__inner__section__item__link">
						Marcas
					</Link>
				</li>
				<li className="navbar__inner__section__item">
					<LoginDropdown
						text="Iniciar sesión"
						customClass="navbar__inner__section__item__link"
					/>
				</li>
			</ul>
		</div>
	</nav>
);

export default NavBar;
