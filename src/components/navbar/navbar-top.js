/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import removeClassToAllItems from '@Helpers/remove-class';
import LoginDropdown from '../buttons/login_dropdown';

const handleRemoveAndAddCurrentClass = e => {
	const target = e.target || e.srcElement;
	const links = document.querySelectorAll(
		'.navbar .navbar__inner__section__item__link',
	);
	removeClassToAllItems(links, 'current');
	target.classList.add('current');
};

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<div className="navbar__inner__logo-content">
					<Link to="/" onClick={e => handleRemoveAndAddCurrentClass(e)}>
						<img
							className="navbar__inner__logo-content__image"
							src={LOGO}
							alt="Logotipo de SpecAtelier"
						/>
					</Link>
				</div>

				<ul className="navbar__inner__section">
					<li className="navbar__inner__section__item">
						<Link
							to="/products"
							className={`navbar__inner__section__item__link ${
								window.location.pathname === '/products' ? 'current' : ''
							}`}
							onClick={e => handleRemoveAndAddCurrentClass(e)}
						>
							Productos
						</Link>
					</li>
					<li className="navbar__inner__section__item">
						<Link
							to="/brands"
							className={`navbar__inner__section__item__link ${
								window.location.pathname === '/brands' ? 'current' : ''
							}`}
							onClick={e => handleRemoveAndAddCurrentClass(e)}
						>
							Marcas
						</Link>
					</li>
					{!!getLocalStorage('token') && (
						<li className="navbar__inner__section__item">
							<Link
								to="/projects"
								className={`navbar__inner__section__item__link ${
									window.location.pathname === '/projects' ? 'current' : ''
								}`}
								onClick={e => handleRemoveAndAddCurrentClass(e)}
							>
								Proyectos
							</Link>
						</li>
					)}
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
};

export default connect(state => state)(NavBar);
